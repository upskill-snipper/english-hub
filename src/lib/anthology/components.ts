/**
 * components.ts - Shared Vocabulary HTML Builders
 *
 * Every Anthology document composes from these building blocks.
 * These functions return HTML strings - no React dependency.
 * Do NOT invent new components - compose from this list only.
 */

import { escHtml } from './html-shell'
import type {
  DataCardContent,
  AoScore,
  MarginComment,
  IndexItem,
  ReportKPI,
  ReportTableRow,
  LessonActivity,
} from './types'

// ─── Section Title ─────────────────────────────────────────────────────────

/** Section heading with optional Roman numeral prefix */
export function secTitle(title: string, numPrefix?: string, style?: string): string {
  const prefixHtml = numPrefix ? `<span class="num-prefix">${numPrefix}</span>` : ''
  const styleAttr = style ? ` style="${style}"` : ''
  return `<h2 class="sec-title"${styleAttr}>${prefixHtml}${escHtml(title)}</h2>`
}

// ─── Chapter Number ────────────────────────────────────────────────────────

export function chapNum(text: string): string {
  return `<div class="chap-num">${escHtml(text)}</div>`
}

// ─── Drop Cap Paragraph ───────────────────────────────────────────────────

export function dropCapParagraph(text: string): string {
  return `<p class="drop">${escHtml(text)}</p>`
}

// ─── Standard Paragraph ───────────────────────────────────────────────────

export function paragraph(text: string): string {
  return `<p>${escHtml(text)}</p>`
}

// ─── Pull Quote ────────────────────────────────────────────────────────────

export function pullQuote(body: string, cite: string): string {
  return `
    <div class="pull-centre">
      ${body}
      <cite>${escHtml(cite)}</cite>
    </div>`
}

// ─── Callout ───────────────────────────────────────────────────────────────

export function callout(kicker: string, body: string): string {
  return `
    <div class="callout">
      <span class="cal-kicker">${escHtml(kicker)}</span>
      ${body}
    </div>`
}

// ─── Dashed List ───────────────────────────────────────────────────────────

export function dashedList(items: string[]): string {
  return `
    <ul class="dashed">
      ${items.map((item) => `<li>${item}</li>`).join('\n      ')}
    </ul>`
}

// ─── Data Card ─────────────────────────────────────────────────────────────

export function dataCard(card: DataCardContent): string {
  const listHtml = card.list
    ? `<hr style="border:0;border-top:0.5px solid var(--ink-300);margin:10px 0"/>
       <ul class="dashed" style="margin:0;">${card.list.map((item) => `<li>${escHtml(item)}</li>`).join('')}</ul>`
    : ''

  return `
    <div class="data-card">
      <div class="dc-kicker">${escHtml(card.kicker)}</div>
      <div class="dc-num">${card.value}</div>
      <div class="dc-sub">${escHtml(card.sub)}</div>
      ${listHtml}
    </div>`
}

// ─── KPI Row ───────────────────────────────────────────────────────────────

export function kpiRow(kpis: ReportKPI[]): string {
  return `
    <div class="kpi-row">
      ${kpis
        .map(
          (kpi) => `
        <div class="data-card">
          <div class="dc-kicker">${escHtml(kpi.kicker)}</div>
          <div class="dc-num">${kpi.value}</div>
          <div class="dc-sub">${escHtml(kpi.sub)}</div>
        </div>`,
        )
        .join('')}
    </div>`
}

// ─── Index / Contents List ─────────────────────────────────────────────────

export function indexList(items: IndexItem[]): string {
  return `
    <ol class="index-list">
      ${items
        .map(
          (item) => `
        <li>
          <span class="n">${escHtml(item.numeral)}</span>
          <span>${escHtml(item.label)}<span class="dots" style="display:inline-block;width:100%"></span></span>
          <span class="p">${escHtml(item.ref)}</span>
        </li>`,
        )
        .join('')}
    </ol>`
}

// ─── Asymmetric Split ──────────────────────────────────────────────────────

export function asymSplit(left: string, right: string): string {
  return `
    <div class="asym">
      <div>${left}</div>
      <div>${right}</div>
    </div>`
}

// ─── Essay Layout ──────────────────────────────────────────────────────────

export function essayLayout(bodyHtml: string, commentsHtml: string): string {
  return `
    <div class="essay-layout">
      <div class="essay-body">${bodyHtml}</div>
      <div class="margin-stack">${commentsHtml}</div>
    </div>`
}

// ─── Margin Comment ────────────────────────────────────────────────────────

export function marginComment(comment: MarginComment): string {
  return `
    <div class="m-comment">
      <span class="m-anchor">${escHtml(comment.anchor)}</span>
      ${comment.body}
    </div>`
}

// ─── AO Scorecard ──────────────────────────────────────────────────────────

export function aoScorecard(scores: AoScore[], grade: { value: string; label: string }): string {
  const barsHtml = scores
    .map(
      (ao) => `
      <div class="ao-bar">
        <span>${escHtml(ao.label)}</span>
        <div class="tr" style="--w:${ao.score}%"></div>
        <span>${ao.score}</span>
      </div>`,
    )
    .join('')

  return `
    <div class="ao-scorecard">
      <div>${barsHtml}</div>
      <div class="grade-mark">
        <div class="g-num">${escHtml(grade.value)}</div>
        <div class="g-lbl">${escHtml(grade.label)}</div>
      </div>
    </div>`
}

// ─── Report Table ──────────────────────────────────────────────────────────

export function reportTable(headers: string[], rows: ReportTableRow[]): string {
  const thHtml = headers.map((h) => `<th>${escHtml(h)}</th>`).join('')
  const trHtml = rows
    .map((row) => {
      const cls = row.isSummary ? ' class="sum"' : ''
      const cells = row.cells
        .map((cell, i) => {
          // Numeric columns (all except first and last) get .num class
          const isNum = i > 0 && i < row.cells.length - 1
          return `<td${isNum ? ' class="num"' : ''}>${escHtml(cell)}</td>`
        })
        .join('')
      return `<tr${cls}>${cells}</tr>`
    })
    .join('')

  return `
    <table class="rep">
      <thead><tr>${thHtml}</tr></thead>
      <tbody>${trHtml}</tbody>
    </table>`
}

// ─── Activity Block (lesson plans) ─────────────────────────────────────────

export function activityBlock(activity: LessonActivity): string {
  const diffHtml = activity.differentiation
    ? `
      <div class="diff-grid">
        <div class="diff-box"><span class="diff-label">Scaffold / Support</span>${escHtml(activity.differentiation.support)}</div>
        <div class="diff-box"><span class="diff-label">Core</span>${escHtml(activity.differentiation.core)}</div>
        <div class="diff-box"><span class="diff-label">Stretch / Challenge</span>${escHtml(activity.differentiation.stretch)}</div>
      </div>`
    : ''

  return `
    <div class="activity-block">
      <span class="act-kicker">${escHtml(activity.kicker)}</span>
      <div class="act-title">${escHtml(activity.title)}</div>
      <span class="act-duration">${escHtml(activity.duration)}</span>
      <p style="margin-top:6px;">${escHtml(activity.instructions)}</p>
      ${diffHtml}
    </div>`
}

// ─── Keyword Row ───────────────────────────────────────────────────────────

export function keywordRow(keywords: string[]): string {
  return `
    <div class="keyword-row">
      ${keywords.map((kw) => `<span class="keyword-chip">${escHtml(kw)}</span>`).join('')}
    </div>`
}

// ─── Name / Date Row ───────────────────────────────────────────────────────

export function nameDateRow(): string {
  return `
    <div class="name-date-row">
      <span><strong>Name:</strong> ________________________________________</span>
      <span><strong>Date:</strong> ____________________</span>
    </div>`
}

// ─── Answer Lines ──────────────────────────────────────────────────────────

export function answerLines(count: number): string {
  return `<div style="margin:10px 0 6px 0;">${Array.from({ length: count }, () => '<div class="answer-line"></div>').join('')}</div>`
}

// ─── Teacher Warning ───────────────────────────────────────────────────────

export function teacherWarning(): string {
  return `<div class="teacher-warning">Teacher Copy - Do Not Distribute to Students</div>`
}

// ─── Grade Band Boxes ──────────────────────────────────────────────────────

export function gradeBands(top: string, mid: string, lower: string): string {
  return `
    <div class="grade-band top">
      <span class="band-label">Top Band (Grade 7-9 / Level 6)</span>
      <p>${escHtml(top)}</p>
    </div>
    <div class="grade-band mid">
      <span class="band-label">Mid Band (Grade 4-6 / Level 4)</span>
      <p>${escHtml(mid)}</p>
    </div>
    <div class="grade-band lower">
      <span class="band-label">Lower Band (Grade 1-3 / Level 2)</span>
      <p>${escHtml(lower)}</p>
    </div>`
}
