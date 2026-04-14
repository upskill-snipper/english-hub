/**
 * generate-teaching-pdf.ts
 *
 * Generates professional teaching materials as downloadable HTML files that
 * open in a new browser tab and can be saved as PDF via the browser's print
 * dialog. Each document uses The English Hub branding, clean typography,
 * table-based layouts, and @media print CSS for clean PDF output.
 */

// ─── Shared HTML Shell ──────────────────────────────────────────────────────

function htmlShell(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escHtml(title)} — The English Hub</title>
<style>
  /* ── Reset & base ─────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.55;
    color: #1a1a1a;
    background: #f8f9fa;
    padding: 0;
  }
  .page {
    max-width: 820px;
    margin: 0 auto;
    background: #fff;
    padding: 40px 48px;
    min-height: 100vh;
  }

  /* ── Brand header ─────────────────────────────────── */
  .brand-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #2563eb;
    padding-bottom: 12px;
    margin-bottom: 28px;
  }
  .brand-name {
    font-size: 14pt;
    font-weight: 700;
    color: #2563eb;
    letter-spacing: -0.02em;
  }
  .brand-tagline {
    font-size: 9pt;
    color: #6b7280;
  }

  /* ── Print button ─────────────────────────────────── */
  .print-bar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #2563eb;
    color: #fff;
    text-align: center;
    padding: 10px 16px;
    font-size: 10pt;
    cursor: pointer;
  }
  .print-bar:hover { background: #1d4ed8; }
  .print-bar span { text-decoration: underline; }

  /* ── Typography ───────────────────────────────────── */
  h1 {
    font-size: 18pt;
    font-weight: 700;
    color: #111827;
    margin-bottom: 4px;
    line-height: 1.25;
  }
  h2 {
    font-size: 13pt;
    font-weight: 700;
    color: #2563eb;
    margin-top: 24px;
    margin-bottom: 10px;
    padding-bottom: 4px;
    border-bottom: 1.5px solid #dbeafe;
  }
  h3 {
    font-size: 11pt;
    font-weight: 600;
    color: #374151;
    margin-top: 16px;
    margin-bottom: 6px;
  }
  p, li { color: #374151; }
  .subtitle {
    font-size: 10pt;
    color: #6b7280;
    margin-bottom: 20px;
  }

  /* ── Meta grid ────────────────────────────────────── */
  .meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-bottom: 20px;
    background: #f0f4ff;
    border-radius: 6px;
    padding: 14px 16px;
    border: 1px solid #dbeafe;
  }
  .meta-item label {
    display: block;
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #6b7280;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .meta-item span {
    font-size: 10pt;
    font-weight: 600;
    color: #1e3a5f;
  }

  /* ── Lists ────────────────────────────────────────── */
  ul, ol { padding-left: 20px; margin-bottom: 10px; }
  li { margin-bottom: 4px; font-size: 10pt; }
  ul.check-list { list-style: none; padding-left: 0; }
  ul.check-list li::before {
    content: "\\2713";
    color: #16a34a;
    font-weight: 700;
    margin-right: 8px;
  }

  /* ── Tables ───────────────────────────────────────── */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 16px;
    font-size: 10pt;
  }
  th, td {
    border: 1px solid #d1d5db;
    padding: 8px 10px;
    text-align: left;
    vertical-align: top;
  }
  th {
    background: #2563eb;
    color: #fff;
    font-weight: 600;
    font-size: 9pt;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  tr:nth-child(even) td { background: #f9fafb; }

  /* ── Activity blocks ──────────────────────────────── */
  .activity-block {
    border: 1px solid #d1d5db;
    border-left: 4px solid #2563eb;
    border-radius: 4px;
    padding: 14px 16px;
    margin-bottom: 14px;
    background: #fafbff;
  }
  .activity-block.starter { border-left-color: #f59e0b; }
  .activity-block.plenary { border-left-color: #ef4444; }
  .activity-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .activity-label {
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 3px;
    display: inline-block;
  }
  .label-starter { background: #fef3c7; color: #92400e; }
  .label-main { background: #dbeafe; color: #1e40af; }
  .label-plenary { background: #fee2e2; color: #991b1b; }
  .activity-duration {
    font-size: 9pt;
    color: #6b7280;
    font-style: italic;
  }
  .diff-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    margin-top: 10px;
  }
  .diff-box {
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    padding: 8px 10px;
    font-size: 9pt;
    background: #fff;
  }
  .diff-box strong {
    display: block;
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 3px;
  }
  .diff-support strong { color: #2563eb; }
  .diff-core strong { color: #16a34a; }
  .diff-stretch strong { color: #7c3aed; }

  /* ── Keywords ─────────────────────────────────────── */
  .keyword-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
  }
  .keyword-chip {
    display: inline-block;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1e40af;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 9pt;
    font-weight: 500;
  }

  /* ── Answer lines ─────────────────────────────────── */
  .answer-lines {
    margin: 12px 0 8px 0;
    padding-left: 4px;
  }
  .answer-line {
    border-bottom: 1.5px solid #b0b8c4;
    height: 32px;
    margin-bottom: 4px;
  }
  .answer-line:last-child {
    margin-bottom: 0;
  }

  /* ── Quote blocks ─────────────────────────────────── */
  .quote-block {
    border-left: 3px solid #2563eb;
    padding: 10px 16px;
    margin-bottom: 14px;
    background: #f8faff;
  }
  .quote-text {
    font-style: italic;
    font-size: 10.5pt;
    color: #1f2937;
    margin-bottom: 4px;
  }
  .quote-speaker {
    font-size: 9pt;
    color: #2563eb;
    font-weight: 600;
  }
  .quote-analysis {
    font-size: 9pt;
    color: #4b5563;
    margin-top: 4px;
  }

  /* ── Grade boundary boxes ─────────────────────────── */
  .grade-box {
    border: 1px solid #d1d5db;
    border-radius: 4px;
    padding: 10px 14px;
    margin-bottom: 10px;
  }
  .grade-box.top { border-left: 4px solid #16a34a; }
  .grade-box.mid { border-left: 4px solid #f59e0b; }
  .grade-box.lower { border-left: 4px solid #ef4444; }
  .grade-label {
    font-size: 8pt;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .grade-box.top .grade-label { color: #16a34a; }
  .grade-box.mid .grade-label { color: #b45309; }
  .grade-box.lower .grade-label { color: #dc2626; }

  /* ── Footer ───────────────────────────────────────── */
  .doc-footer {
    margin-top: 32px;
    padding-top: 12px;
    border-top: 2px solid #2563eb;
    font-size: 8pt;
    color: #9ca3af;
    display: flex;
    justify-content: space-between;
  }

  /* ── Print overrides ──────────────────────────────── */
  @media print {
    body { background: #fff; }
    .print-bar { display: none !important; }
    .page {
      padding: 20px 24px;
      max-width: none;
      box-shadow: none;
    }
    .activity-block, .diff-box, .grade-box, .quote-block {
      break-inside: avoid;
    }
    table { break-inside: avoid; }
    h2 { break-after: avoid; }
    @page {
      margin: 1.5cm 1.8cm;
      size: A4;
    }
  }
</style>
</head>
<body>
<div class="print-bar" onclick="window.print()">
  &#128438; <span>Print / Save as PDF</span> — Use your browser's print dialog (Ctrl+P / Cmd+P) to save this document as a PDF
</div>
<div class="page">
  <div class="brand-header">
    <div>
      <div class="brand-name">The English Hub</div>
      <div class="brand-tagline">theenglishhub.app</div>
    </div>
    <div style="text-align:right">
      <div style="font-size:9pt;color:#6b7280;">Teaching Resource</div>
      <div style="font-size:8pt;color:#9ca3af;">${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</div>
    </div>
  </div>
  ${body}
  <div class="doc-footer">
    <span>&copy; The English Hub — theenglishhub.app</span>
    <span>Free to photocopy for classroom use</span>
  </div>
</div>
</body>
</html>`
}

function escHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

// ─── Open in new tab helper ─────────────────────────────────────────────────

function openHtmlInNewTab(html: string): void {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  window.open(url, "_blank")
  // Revoke after a delay to let the tab load
  setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

// ─── Types ──────────────────────────────────────────────────────────────────

export interface LessonPlanData {
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

export interface WorksheetQuestion {
  question: string
  type: "short-answer" | "extended-writing" | "multiple-choice" | "quote-analysis"
  marks: number
  lines?: number
  options?: string[] // for multiple-choice
  sourceQuote?: string // for quote-analysis
}

export interface MarkSchemeAnswer {
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

export interface RevisionGuideData {
  text: string
  examBoard: string
  plotSummary: { section: string; summary: string }[]
  characters: { name: string; role: string; keyQuotes: string[]; analysis: string }[]
  themes: { theme: string; explanation: string; keyMoments: string[]; quotes: string[] }[]
  keyQuotes: { quote: string; speaker: string; context: string; analysis: string }[]
  examTips: string[]
  practiceQuestions: string[]
}

// ═══════════════════════════════════════════════════════════════════════════
//  1. LESSON PLAN GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateLessonPlan(topic: string, data: LessonPlanData): void {
  const diffHtml = (d?: { support: string; core: string; stretch: string }) => {
    if (!d) return ""
    return `
      <div class="diff-grid">
        <div class="diff-box diff-support"><strong>Scaffold / Support</strong>${escHtml(d.support)}</div>
        <div class="diff-box diff-core"><strong>Core</strong>${escHtml(d.core)}</div>
        <div class="diff-box diff-stretch"><strong>Stretch / Challenge</strong>${escHtml(d.stretch)}</div>
      </div>`
  }

  const mainActivitiesHtml = data.mainActivities
    .map(
      (act, i) => `
    <div class="activity-block">
      <div class="activity-header">
        <div><span class="activity-label label-main">Main Activity ${i + 1}</span> <strong style="margin-left:8px;">${escHtml(act.title)}</strong></div>
        <span class="activity-duration">${escHtml(act.duration)}</span>
      </div>
      <p>${escHtml(act.instructions)}</p>
      ${diffHtml(act.differentiation)}
    </div>`,
    )
    .join("")

  const body = `
    <h1>${escHtml(data.title)}</h1>
    <p class="subtitle">${escHtml(topic)} — Lesson Plan</p>

    <div class="meta-grid">
      <div class="meta-item"><label>Text</label><span>${escHtml(data.text)}</span></div>
      <div class="meta-item"><label>Year Group</label><span>${escHtml(data.yearGroup)}</span></div>
      <div class="meta-item"><label>Exam Board</label><span>${escHtml(data.examBoard)}</span></div>
      <div class="meta-item"><label>Duration</label><span>${escHtml(data.duration)}</span></div>
    </div>

    <h2>Learning Objectives</h2>
    <ol>
      ${data.objectives.map((o) => `<li>${escHtml(o)}</li>`).join("")}
    </ol>

    <h2>Lesson Outline</h2>

    <div class="activity-block starter">
      <div class="activity-header">
        <div><span class="activity-label label-starter">Starter</span> <strong style="margin-left:8px;">${escHtml(data.starterActivity.title)}</strong></div>
        <span class="activity-duration">${escHtml(data.starterActivity.duration)}</span>
      </div>
      <p>${escHtml(data.starterActivity.instructions)}</p>
      ${diffHtml(data.starterActivity.differentiation)}
    </div>

    ${mainActivitiesHtml}

    <div class="activity-block plenary">
      <div class="activity-header">
        <div><span class="activity-label label-plenary">Plenary / AFL</span> <strong style="margin-left:8px;">${escHtml(data.plenary.title)}</strong></div>
      </div>
      <p>${escHtml(data.plenary.instructions)}</p>
      ${diffHtml(data.plenary.differentiation)}
    </div>

    <h2>Key Vocabulary</h2>
    <div class="keyword-chips">
      ${data.keyVocabulary.map((kw) => `<span class="keyword-chip">${escHtml(kw)}</span>`).join("")}
    </div>

    <h2>Resources Needed</h2>
    <ul>
      ${data.resourcesNeeded.map((r) => `<li>${escHtml(r)}</li>`).join("")}
    </ul>

    ${
      data.homework
        ? `<h2>Homework</h2><p>${escHtml(data.homework)}</p>`
        : ""
    }

    ${
      data.teacherNotes && data.teacherNotes.length > 0
        ? `<h2>Teacher Notes</h2><ul>${data.teacherNotes.map((n) => `<li>${escHtml(n)}</li>`).join("")}</ul>`
        : ""
    }
  `

  openHtmlInNewTab(htmlShell(data.title, body))
}

// ═══════════════════════════════════════════════════════════════════════════
//  2. WORKSHEET GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateWorksheet(
  topic: string,
  meta: { title: string; instructions: string; text: string; yearGroup: string; examBoard: string },
  questions: WorksheetQuestion[],
): void {
  const totalMarks = questions.reduce((s, q) => s + q.marks, 0)

  const questionsHtml = questions
    .map((q, i) => {
      let questionContent = ""

      if (q.sourceQuote) {
        questionContent += `<div class="quote-block"><p class="quote-text">"${escHtml(q.sourceQuote)}"</p></div>`
      }

      if (q.type === "multiple-choice" && q.options) {
        questionContent += `<div style="margin:8px 0 4px 20px;">${q.options.map((opt, oi) => `<p style="margin:4px 0;font-size:10pt;"><strong>${String.fromCharCode(65 + oi)}.</strong> ${escHtml(opt)}</p>`).join("")}</div>`
      } else {
        const lines = q.lines || (q.type === "extended-writing" ? 14 : q.type === "quote-analysis" ? 10 : 5)
        questionContent += `<div class="answer-lines">${Array.from({ length: lines }, () => '<div class="answer-line"></div>').join("")}</div>`
      }

      const typeLabel =
        q.type === "short-answer"
          ? "Short Answer"
          : q.type === "extended-writing"
            ? "Extended Writing"
            : q.type === "multiple-choice"
              ? "Multiple Choice"
              : "Quote Analysis"

      return `
        <div style="margin-bottom:28px;page-break-inside:avoid;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
            <p style="font-weight:600;font-size:10.5pt;flex:1;">
              <span style="color:#2563eb;font-weight:700;margin-right:8px;">${i + 1}.</span>
              ${escHtml(q.question)}
            </p>
            <span style="font-size:8pt;color:#6b7280;white-space:nowrap;margin-left:12px;background:#f3f4f6;padding:2px 8px;border-radius:3px;font-weight:600;">${q.marks} mark${q.marks !== 1 ? "s" : ""} — ${typeLabel}</span>
          </div>
          ${questionContent}
        </div>`
    })
    .join("")

  const body = `
    <h1>${escHtml(meta.title)}</h1>
    <p class="subtitle">${escHtml(topic)} — Student Worksheet</p>

    <div class="meta-grid">
      <div class="meta-item"><label>Text</label><span>${escHtml(meta.text)}</span></div>
      <div class="meta-item"><label>Year Group</label><span>${escHtml(meta.yearGroup)}</span></div>
      <div class="meta-item"><label>Exam Board</label><span>${escHtml(meta.examBoard)}</span></div>
      <div class="meta-item"><label>Total Marks</label><span>${totalMarks}</span></div>
    </div>

    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:12px 16px;margin-bottom:20px;">
      <p style="font-size:10pt;font-weight:600;color:#1e40af;margin-bottom:4px;">Instructions</p>
      <p style="font-size:9.5pt;color:#374151;">${escHtml(meta.instructions)}</p>
    </div>

    <div style="display:flex;gap:24px;margin-bottom:20px;font-size:9.5pt;">
      <p><strong>Name:</strong> ________________________________________</p>
      <p><strong>Date:</strong> ____________________</p>
    </div>

    ${questionsHtml}

    <div style="margin-top:24px;padding:12px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;text-align:right;">
      <p style="font-size:10pt;font-weight:700;">Total: _______ / ${totalMarks}</p>
    </div>
  `

  openHtmlInNewTab(htmlShell(meta.title, body))
}

// ═══════════════════════════════════════════════════════════════════════════
//  3. MARK SCHEME GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateMarkScheme(
  topic: string,
  meta: { title: string; text: string; yearGroup: string; examBoard: string },
  answers: MarkSchemeAnswer[],
): void {
  const totalMarks = answers.reduce((s, a) => s + a.marks, 0)

  const answersHtml = answers
    .map(
      (a) => `
    <div style="margin-bottom:24px;page-break-inside:avoid;">
      <h3 style="margin-bottom:8px;">
        <span style="color:#2563eb;">Question ${a.questionNumber}</span>
        <span style="font-size:9pt;color:#6b7280;margin-left:8px;">[${a.marks} mark${a.marks !== 1 ? "s" : ""}]</span>
        <span style="font-size:8pt;background:#eff6ff;color:#1e40af;padding:2px 8px;border-radius:3px;margin-left:8px;font-weight:600;">${escHtml(a.ao)}</span>
      </h3>
      <p style="font-size:10pt;font-style:italic;color:#4b5563;margin-bottom:10px;">${escHtml(a.question)}</p>

      <p style="font-size:9pt;font-weight:600;margin-bottom:6px;">Marking Criteria:</p>
      <ul style="margin-bottom:10px;">
        ${a.markingCriteria.map((c) => `<li style="font-size:9pt;">${escHtml(c)}</li>`).join("")}
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
          ? `<div style="margin-top:10px;background:#fef3c7;border:1px solid #fde68a;border-radius:4px;padding:8px 12px;">
              <p style="font-size:8pt;font-weight:700;text-transform:uppercase;color:#92400e;margin-bottom:4px;">Common Misconceptions</p>
              <ul style="margin:0;padding-left:16px;">${a.commonMisconceptions.map((m) => `<li style="font-size:9pt;color:#78350f;">${escHtml(m)}</li>`).join("")}</ul>
            </div>`
          : ""
      }
    </div>`,
    )
    .join("")

  const body = `
    <h1>${escHtml(meta.title)}</h1>
    <p class="subtitle">${escHtml(topic)} — Answer Guide (Teacher Copy)</p>

    <div class="meta-grid">
      <div class="meta-item"><label>Text</label><span>${escHtml(meta.text)}</span></div>
      <div class="meta-item"><label>Year Group</label><span>${escHtml(meta.yearGroup)}</span></div>
      <div class="meta-item"><label>Exam Board</label><span>${escHtml(meta.examBoard)}</span></div>
      <div class="meta-item"><label>Total Marks</label><span>${totalMarks}</span></div>
    </div>

    <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:12px 16px;margin-bottom:20px;">
      <p style="font-size:10pt;font-weight:700;color:#991b1b;">&#128274; TEACHER COPY — DO NOT DISTRIBUTE TO STUDENTS</p>
    </div>

    ${answersHtml}
  `

  openHtmlInNewTab(htmlShell(meta.title, body))
}

// ═══════════════════════════════════════════════════════════════════════════
//  4. REVISION GUIDE GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export function generateRevisionGuide(topic: string, data: RevisionGuideData): void {
  const plotHtml = data.plotSummary
    .map(
      (p) => `
    <tr>
      <td style="font-weight:600;width:20%;">${escHtml(p.section)}</td>
      <td>${escHtml(p.summary)}</td>
    </tr>`,
    )
    .join("")

  const charactersHtml = data.characters
    .map(
      (c) => `
    <div style="margin-bottom:16px;page-break-inside:avoid;">
      <h3>${escHtml(c.name)}</h3>
      <p style="font-size:9.5pt;color:#4b5563;margin-bottom:6px;">${escHtml(c.role)}</p>
      <div style="margin-bottom:6px;">
        ${c.keyQuotes.map((q) => `<div class="quote-block" style="margin-bottom:6px;"><p class="quote-text">"${escHtml(q)}"</p></div>`).join("")}
      </div>
      <p style="font-size:9.5pt;color:#374151;"><strong>Analysis:</strong> ${escHtml(c.analysis)}</p>
    </div>`,
    )
    .join("")

  const themesHtml = data.themes
    .map(
      (t) => `
    <div style="margin-bottom:18px;page-break-inside:avoid;">
      <h3>${escHtml(t.theme)}</h3>
      <p style="font-size:9.5pt;color:#4b5563;margin-bottom:8px;">${escHtml(t.explanation)}</p>
      <p style="font-size:9pt;font-weight:600;margin-bottom:4px;">Key Moments:</p>
      <ul>${t.keyMoments.map((m) => `<li style="font-size:9pt;">${escHtml(m)}</li>`).join("")}</ul>
      <p style="font-size:9pt;font-weight:600;margin-top:6px;margin-bottom:4px;">Key Quotes:</p>
      ${t.quotes.map((q) => `<div class="quote-block" style="margin-bottom:4px;"><p class="quote-text" style="font-size:9pt;">"${escHtml(q)}"</p></div>`).join("")}
    </div>`,
    )
    .join("")

  const quotesHtml = data.keyQuotes
    .map(
      (q) => `
    <div class="quote-block" style="margin-bottom:14px;">
      <p class="quote-text">"${escHtml(q.quote)}"</p>
      <p class="quote-speaker">— ${escHtml(q.speaker)}</p>
      <p style="font-size:8.5pt;color:#6b7280;margin-top:2px;"><em>Context:</em> ${escHtml(q.context)}</p>
      <p class="quote-analysis">${escHtml(q.analysis)}</p>
    </div>`,
    )
    .join("")

  const body = `
    <h1>${escHtml(topic)} — Revision Guide</h1>
    <p class="subtitle">${escHtml(data.text)} | ${escHtml(data.examBoard)}</p>

    <h2>Plot / Context Summary</h2>
    <table>
      <thead><tr><th>Section</th><th>Summary</th></tr></thead>
      <tbody>${plotHtml}</tbody>
    </table>

    <h2>Character Profiles</h2>
    ${charactersHtml}

    <h2>Key Themes</h2>
    ${themesHtml}

    <h2>Key Quotes with Analysis</h2>
    ${quotesHtml}

    <h2>Exam Technique Tips</h2>
    <ol>
      ${data.examTips.map((t) => `<li>${escHtml(t)}</li>`).join("")}
    </ol>

    <h2>Practice Questions</h2>
    <ol>
      ${data.practiceQuestions.map((q) => `<li style="margin-bottom:6px;">${escHtml(q)}</li>`).join("")}
    </ol>
  `

  openHtmlInNewTab(htmlShell(`${topic} — Revision Guide`, body))
}

// ═══════════════════════════════════════════════════════════════════════════
//  5. HOMEWORK ASSIGNMENT GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

export interface HomeworkQuestion {
  question: string
  marks: number
  lines: number
  modelAnswer?: string
}

export interface HomeworkData {
  title: string
  topic: string
  homeworkType: string
  yearGroup: string
  targetGrade: string
  estimatedTime: string
  instructions: string
  questions: HomeworkQuestion[]
  successCriteria: string[]
  extensionTasks: string[]
  markScheme: string[]
}

export function generateHomeworkPdf(data: HomeworkData): void {
  const totalMarks = data.questions.reduce((s, q) => s + q.marks, 0)

  const questionsHtml = data.questions
    .map(
      (q, i) => `
      <div style="margin-bottom:24px;page-break-inside:avoid;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
          <p style="font-weight:600;font-size:10.5pt;flex:1;">
            <span style="color:#2563eb;font-weight:700;margin-right:8px;">${i + 1}.</span>
            ${escHtml(q.question)}
          </p>
          <span style="font-size:8pt;color:#6b7280;white-space:nowrap;margin-left:12px;background:#f3f4f6;padding:2px 8px;border-radius:3px;font-weight:600;">${q.marks} mark${q.marks !== 1 ? "s" : ""}</span>
        </div>
        <div class="answer-lines">${Array.from({ length: q.lines }, () => '<div class="answer-line"></div>').join("")}</div>
      </div>`,
    )
    .join("")

  const successCriteriaHtml = data.successCriteria
    .map((s) => `<li style="font-size:9.5pt;margin-bottom:3px;">${escHtml(s)}</li>`)
    .join("")

  const extensionHtml = data.extensionTasks
    .map((t) => `<li style="font-size:9.5pt;margin-bottom:3px;">${escHtml(t)}</li>`)
    .join("")

  const body = `
    <h1>${escHtml(data.title)}</h1>
    <p class="subtitle">${escHtml(data.topic)} — ${escHtml(data.homeworkType)}</p>

    <div class="meta-grid">
      <div class="meta-item"><label>Topic</label><span>${escHtml(data.topic)}</span></div>
      <div class="meta-item"><label>Year Group</label><span>${escHtml(data.yearGroup)}</span></div>
      <div class="meta-item"><label>Target Grade</label><span>${escHtml(data.targetGrade)}</span></div>
      <div class="meta-item"><label>Est. Time</label><span>${escHtml(data.estimatedTime)}</span></div>
      <div class="meta-item"><label>Total Marks</label><span>${totalMarks}</span></div>
      <div class="meta-item"><label>Type</label><span>${escHtml(data.homeworkType)}</span></div>
    </div>

    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:12px 16px;margin-bottom:20px;">
      <p style="font-size:10pt;font-weight:600;color:#1e40af;margin-bottom:4px;">Instructions</p>
      <p style="font-size:9.5pt;color:#374151;">${escHtml(data.instructions)}</p>
    </div>

    <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:6px;padding:12px 16px;margin-bottom:20px;">
      <p style="font-size:10pt;font-weight:600;color:#166534;margin-bottom:6px;">Success Criteria</p>
      <ul style="margin-left:16px;">${successCriteriaHtml}</ul>
    </div>

    <div style="display:flex;gap:24px;margin-bottom:20px;font-size:9.5pt;">
      <p><strong>Name:</strong> ________________________________________</p>
      <p><strong>Date:</strong> ____________________</p>
    </div>

    ${questionsHtml}

    <div style="margin-top:24px;padding:12px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;text-align:right;">
      <p style="font-size:10pt;font-weight:700;">Total: _______ / ${totalMarks}</p>
    </div>

    <div style="margin-top:24px;background:#faf5ff;border:1px solid #c4b5fd;border-radius:6px;padding:12px 16px;page-break-inside:avoid;">
      <p style="font-size:10pt;font-weight:600;color:#5b21b6;margin-bottom:6px;">Extension Tasks (Higher Ability)</p>
      <ul style="margin-left:16px;">${extensionHtml}</ul>
    </div>
  `

  openHtmlInNewTab(htmlShell(data.title, body))
}

export function generateHomeworkMarkSchemePdf(data: HomeworkData): void {
  const totalMarks = data.questions.reduce((s, q) => s + q.marks, 0)

  const answersHtml = data.questions
    .map(
      (q, i) => `
      <div style="margin-bottom:20px;page-break-inside:avoid;border:1px solid #e5e7eb;border-radius:6px;padding:14px 16px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
          <p style="font-weight:600;font-size:10.5pt;flex:1;">
            <span style="color:#2563eb;font-weight:700;margin-right:8px;">Q${i + 1}.</span>
            ${escHtml(q.question)}
          </p>
          <span style="font-size:8pt;color:#6b7280;white-space:nowrap;margin-left:12px;background:#f3f4f6;padding:2px 8px;border-radius:3px;font-weight:600;">${q.marks} mark${q.marks !== 1 ? "s" : ""}</span>
        </div>
        ${q.modelAnswer ? `<div style="border-left:3px solid #16a34a;padding:8px 14px;background:#f0fdf4;margin-top:8px;"><p style="font-size:8pt;text-transform:uppercase;letter-spacing:0.5pt;font-weight:700;color:#16a34a;margin-bottom:4px;">Model Answer</p><p style="font-size:9.5pt;color:#374151;">${escHtml(q.modelAnswer)}</p></div>` : ""}
      </div>`,
    )
    .join("")

  const markSchemeHtml = data.markScheme
    .map((m) => `<li style="font-size:9.5pt;margin-bottom:3px;">${escHtml(m)}</li>`)
    .join("")

  const body = `
    <h1>${escHtml(data.title)} — Answer Guide</h1>
    <p class="subtitle">${escHtml(data.topic)} — Teacher Copy</p>

    <div class="meta-grid">
      <div class="meta-item"><label>Topic</label><span>${escHtml(data.topic)}</span></div>
      <div class="meta-item"><label>Year Group</label><span>${escHtml(data.yearGroup)}</span></div>
      <div class="meta-item"><label>Target Grade</label><span>${escHtml(data.targetGrade)}</span></div>
      <div class="meta-item"><label>Total Marks</label><span>${totalMarks}</span></div>
    </div>

    <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:6px;padding:12px 16px;margin-bottom:20px;">
      <p style="font-size:10pt;font-weight:600;color:#991b1b;">TEACHER COPY — DO NOT DISTRIBUTE TO STUDENTS</p>
    </div>

    <h2>Marking Guidance</h2>
    <ul style="margin-left:16px;margin-bottom:20px;">${markSchemeHtml}</ul>

    <h2>Questions & Model Answers</h2>
    ${answersHtml}

    <div style="margin-top:24px;padding:12px 16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:6px;text-align:right;">
      <p style="font-size:10pt;font-weight:700;">Total: ${totalMarks} marks</p>
    </div>
  `

  openHtmlInNewTab(htmlShell(`${data.title} — Answer Guide`, body))
}
