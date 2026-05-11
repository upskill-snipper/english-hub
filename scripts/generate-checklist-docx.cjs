/**
 * Renders business-docs/COMPLETION-CHECKLIST.md as a professional .docx.
 *
 * Output: business-docs/COMPLETION-CHECKLIST.docx
 *
 * Run:  node scripts/generate-checklist-docx.cjs
 */

const fs = require('fs')
const path = require('path')
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Header,
  Footer,
  AlignmentType,
  LevelFormat,
  ExternalHyperlink,
  HeadingLevel,
  BorderStyle,
  WidthType,
  ShadingType,
  VerticalAlign,
  PageNumber,
  PageBreak,
} = require('docx')

// ─── Page geometry (A4 — UK standard, printable on Letter too) ────────────
const PAGE_WIDTH = 11906 // 8.27"
const PAGE_HEIGHT = 16838 // 11.69"
const MARGIN = 1134 // ~0.79"
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2 // 9638 DXA

// ─── Palette ──────────────────────────────────────────────────────────────
const C_HEADING = '1F3A5F' // navy
const C_BODY = '212121' // near-black
const C_MUTED = '808080' // grey
const C_LINK = '1565C0' // blue link
const C_CODE_BG = 'F4F4F4'
const C_QUOTE_BG = 'EEF5FB'
const C_QUOTE_BR = '5A7A9A'
const C_TABLE_HD = '1F3A5F'
const C_TABLE_HD_TXT = 'FFFFFF'
const C_TABLE_ALT = 'FAFAFA'
const C_BORDER = 'CCCCCC'
const C_DONE_BG = 'E8F5E9' // pale green
const C_DONE_BR = '388E3C' // green border

const C_TIER1 = 'C62828'
const C_TIER2 = 'E65100'
const C_TIER3 = 'EF6C00'
const C_TIER4 = '2E7D32'

// ─── Fonts ────────────────────────────────────────────────────────────────
const F_BODY = 'Calibri'
const F_HEADING = 'Calibri'
const F_MONO = 'Consolas'

// ─── Run helpers ──────────────────────────────────────────────────────────
const tx = (text, opts = {}) => new TextRun({ text, font: F_BODY, color: C_BODY, ...opts })
const bold = (text, opts = {}) => tx(text, { bold: true, ...opts })
const italic = (text, opts = {}) => tx(text, { italics: true, ...opts })
const code = (text, opts = {}) =>
  new TextRun({
    text,
    font: F_MONO,
    size: 20,
    color: C_BODY,
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: C_CODE_BG },
    ...opts,
  })
const link = (url, text) =>
  new ExternalHyperlink({
    children: [new TextRun({ text, font: F_BODY, color: C_LINK, underline: {} })],
    link: url,
  })

// ─── Paragraph helpers ────────────────────────────────────────────────────
const para = (children, opts = {}) =>
  new Paragraph({
    children: Array.isArray(children) ? children : [children],
    spacing: { after: 120, line: 280, lineRule: 'auto' },
    ...opts,
  })

const blank = () => new Paragraph({ children: [], spacing: { after: 80 } })

const h1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 120 },
    children: [
      new TextRun({ text, font: F_HEADING, color: C_HEADING, bold: true, size: 44 }),
    ],
  })

const h2 = (text, accent) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 360, after: 180 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 12, color: accent || C_HEADING, space: 4 },
    },
    children: [
      new TextRun({ text, font: F_HEADING, color: accent || C_HEADING, bold: true, size: 30 }),
    ],
  })

const h3 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 280, after: 120 },
    children: [
      new TextRun({ text, font: F_HEADING, color: C_HEADING, bold: true, size: 24 }),
    ],
  })

// "Time/Cost/Unlocks" mini stat line
const statLine = (parts) =>
  para(
    parts.flatMap((p, i) => {
      const runs = [bold(p.label + ': '), tx(p.value)]
      if (i < parts.length - 1) runs.push(tx('  ·  ', { color: C_MUTED }))
      return runs
    }),
    { spacing: { after: 100 } },
  )

// Bulleted item
const bullet = (children) =>
  new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 60, line: 280, lineRule: 'auto' },
    children: Array.isArray(children) ? children : [children],
  })

// Numbered item
const numItem = (children) =>
  new Paragraph({
    numbering: { reference: 'numbered', level: 0 },
    spacing: { after: 60, line: 280, lineRule: 'auto' },
    children: Array.isArray(children) ? children : [children],
  })

// Block quote (Claude prompt) — single-cell shaded table, left bar
const quote = (text) => {
  const cell = new TableCell({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: C_QUOTE_BG },
    margins: { top: 140, bottom: 140, left: 240, right: 200 },
    borders: {
      top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      left: { style: BorderStyle.SINGLE, size: 24, color: C_QUOTE_BR },
    },
    children: [
      new Paragraph({
        spacing: { after: 0, line: 280, lineRule: 'auto' },
        children: [italic(text, { color: '37474F' })],
      }),
    ],
  })
  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [CONTENT_WIDTH],
    rows: [new TableRow({ children: [cell] })],
  })
}

// "Status: Complete" callout — green-tinted single-cell table
const doneCallout = (text) => {
  const cell = new TableCell({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: C_DONE_BG },
    margins: { top: 120, bottom: 120, left: 200, right: 200 },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: C_DONE_BR },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: C_DONE_BR },
      right: { style: BorderStyle.SINGLE, size: 4, color: C_DONE_BR },
      left: { style: BorderStyle.SINGLE, size: 24, color: C_DONE_BR },
    },
    children: [
      new Paragraph({
        spacing: { after: 0 },
        children: Array.isArray(text) ? text : [tx('☑ ', { color: C_DONE_BR, bold: true }), bold(text, { color: '1B5E20' })],
      }),
    ],
  })
  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [CONTENT_WIDTH],
    rows: [new TableRow({ children: [cell] })],
  })
}

// Multi-line code block — single-cell grey table, monospace
const codeBlock = (lines) => {
  const cell = new TableCell({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: C_CODE_BG },
    margins: { top: 140, bottom: 140, left: 200, right: 200 },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: C_BORDER },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: C_BORDER },
      left: { style: BorderStyle.SINGLE, size: 4, color: C_BORDER },
      right: { style: BorderStyle.SINGLE, size: 4, color: C_BORDER },
    },
    children: lines.map(
      (line) =>
        new Paragraph({
          spacing: { after: 0, line: 240, lineRule: 'auto' },
          children: [new TextRun({ text: line || ' ', font: F_MONO, size: 18, color: '263238' })],
        }),
    ),
  })
  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [CONTENT_WIDTH],
    rows: [new TableRow({ children: [cell] })],
  })
}

// Standard data table
function buildTable(headers, rows, colWidths) {
  const totalWidth = colWidths.reduce((a, b) => a + b, 0)
  const border = { style: BorderStyle.SINGLE, size: 4, color: C_BORDER }
  const borders = { top: border, bottom: border, left: border, right: border }

  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map(
      (h, i) =>
        new TableCell({
          width: { size: colWidths[i], type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_HD },
          margins: { top: 100, bottom: 100, left: 140, right: 140 },
          borders,
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              spacing: { after: 0 },
              children: [
                new TextRun({
                  text: h,
                  font: F_BODY,
                  bold: true,
                  color: C_TABLE_HD_TXT,
                  size: 20,
                }),
              ],
            }),
          ],
        }),
    ),
  })

  const dataRows = rows.map(
    (row, ri) =>
      new TableRow({
        children: row.map((cellVal, i) => {
          const children = Array.isArray(cellVal)
            ? cellVal
            : [
                new Paragraph({
                  spacing: { after: 0, line: 260, lineRule: 'auto' },
                  children: [tx(cellVal, { size: 20 })],
                }),
              ]
          return new TableCell({
            width: { size: colWidths[i], type: WidthType.DXA },
            shading:
              ri % 2 === 1
                ? { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_ALT }
                : undefined,
            margins: { top: 80, bottom: 80, left: 140, right: 140 },
            borders,
            verticalAlign: VerticalAlign.CENTER,
            children,
          })
        }),
      }),
  )

  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...dataRows],
  })
}

// Horizontal rule
const hr = () =>
  new Paragraph({
    spacing: { before: 120, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C_MUTED, space: 1 } },
    children: [],
  })

// Helper paragraph for cell contents (single-line, smaller)
const cellPara = (children, opts = {}) =>
  new Paragraph({
    spacing: { after: 0, line: 260, lineRule: 'auto' },
    children: Array.isArray(children) ? children : [children],
    ...opts,
  })

// ─── Document content ─────────────────────────────────────────────────────
const content = []

// Title block
content.push(h1('The English Hub — Completion Checklist'))
content.push(
  para([italic('Everything outstanding, with direct links and Claude-for-Chrome prompts.')], {
    alignment: AlignmentType.CENTER,
    spacing: { after: 240 },
  }),
)
content.push(
  para([
    tx('Sorted by priority × leverage. Most items under 15 minutes. Full execution = '),
    bold('~4 hours your time'),
    tx(' + '),
    bold('£590 hard spend'),
    tx('.'),
  ]),
)
content.push(
  para([
    bold('How to use the Claude prompts: '),
    tx('install '),
    link('https://claude.ai/chrome', 'Claude for Chrome'),
    tx(
      ' (or use claude.ai in a second tab), open the target page first, then paste the prompt. Claude sees the page and walks you through each field.',
    ),
  ]),
)
content.push(hr())

// ─── TIER 1 ───────────────────────────────────────────────────────────────
content.push(h2('🔴 TIER 1 — Today (45 min, £0)', C_TIER1))
content.push(para([italic('These three unlock everything else downstream.')]))

// 1.1 Supabase migration
content.push(h3('1.1 · Run the Supabase migration for Trustpilot dedup table'))
content.push(
  statLine([
    { label: 'Time', value: '2 min' },
    { label: 'Cost', value: '£0' },
    { label: 'Unlocks', value: 'Trustpilot audit trail starts recording' },
  ]),
)
content.push(
  para([
    bold('Link: '),
    link(
      'https://supabase.com/dashboard/project/_/sql/new',
      'https://supabase.com/dashboard/project/_/sql/new',
    ),
  ]),
)
content.push(
  para([
    bold('What to do: '),
    tx('Open your Supabase project → SQL Editor → New query → paste the SQL below → Run.'),
  ]),
)
content.push(
  para([
    bold('SQL to paste'),
    tx(' (from '),
    code('supabase/migrations/20260419_trustpilot_invites.sql'),
    tx('):'),
  ]),
)
content.push(
  codeBlock([
    'create table if not exists public.trustpilot_invite (',
    '  id uuid primary key default gen_random_uuid(),',
    '  user_id uuid not null references auth.users(id) on delete cascade,',
    '  trigger text not null check (',
    '    trigger in (',
    "      'student_first_mark',",
    "      'student_first_mark_followup_7d',",
    "      'student_first_mock',",
    "      'student_90d_retention',",
    "      'teacher_first_bulk_mark',",
    "      'parent_30d_dashboard'",
    '    )',
    '  ),',
    "  status text not null default 'sent' check (status in ('sent', 'skipped', 'failed')),",
    '  sent_at timestamptz not null default now(),',
    '  message_id text,',
    '  error text,',
    '  skipped_reason text,',
    '  unique (user_id, trigger)',
    ');',
    '',
    'create index if not exists trustpilot_invite_user_idx on public.trustpilot_invite(user_id);',
    'create index if not exists trustpilot_invite_trigger_idx on public.trustpilot_invite(trigger);',
    'create index if not exists trustpilot_invite_sent_at_idx on public.trustpilot_invite(sent_at desc);',
    '',
    'alter table public.trustpilot_invite enable row level security;',
    '',
    'create policy "service role manages trustpilot_invite"',
    '  on public.trustpilot_invite',
    '  for all',
    '  to service_role',
    '  using (true)',
    '  with check (true);',
  ]),
)
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (if the SQL errors):')]))
content.push(
  quote(
    "I just ran this Supabase migration and got the error shown on screen. Help me diagnose what's wrong. The migration creates a `trustpilot_invite` table. Show me the exact fix — I'll paste it back into the SQL editor.",
  ),
)
content.push(hr())

// 1.2 CRON_SECRET
content.push(h3('1.2 · Set CRON_SECRET in Vercel'))
content.push(
  statLine([
    { label: 'Time', value: '3 min' },
    { label: 'Cost', value: '£0' },
    { label: 'Unlocks', value: 'ALL Vercel cron jobs including the two new Trustpilot crons' },
  ]),
)
content.push(
  para([
    bold('Link: '),
    link(
      'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables',
      'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables',
    ),
  ]),
)
content.push(para([bold('What to do:')]))
content.push(numItem([tx('Click '), bold('"Add Another"')]))
content.push(numItem([tx('Key: '), code('CRON_SECRET')]))
content.push(
  numItem([
    tx('Value: a long random string — generate one at '),
    link(
      'https://1password.com/password-generator/',
      'https://1password.com/password-generator/',
    ),
    tx(' (64 chars, letters + digits, no symbols)'),
  ]),
)
content.push(
  numItem([
    tx('Environments: '),
    bold('Production only'),
    tx(' (leave Preview + Development unchecked)'),
  ]),
)
content.push(numItem([tx('Save')]))
content.push(blank())
content.push(para([bold('Claude prompt:')]))
content.push(
  quote(
    "I'm on the Vercel env vars page for my project `english-hub`. I need to add `CRON_SECRET` as a Production-only secret with a 64-character random value. Walk me through clicking the right buttons. The value field accepts any string — I want to use the strongest random string possible.",
  ),
)
content.push(blank())
content.push(
  para([
    bold('Then redeploy'),
    tx(
      " — Vercel env var changes don't apply to existing deployments. Trigger a redeploy from the Deployments tab → latest deploy → three dots → ",
    ),
    bold('Redeploy'),
    tx('.'),
  ]),
)
content.push(hr())

// 1.3 Cloudflare Email Routing
content.push(h3('1.3 · Cloudflare Email Routing (8 aliases)'))
content.push(
  doneCallout([
    tx('☑ ', { color: C_DONE_BR, bold: true }),
    bold('Status: Complete 2026-04-21', { color: '1B5E20' }),
    tx(' — all 8 aliases live and forwarding to ', { color: '1B5E20' }),
    code('info@upskillenergy.com'),
    tx('.', { color: '1B5E20' }),
  ]),
)
content.push(blank())
content.push(
  statLine([
    { label: 'Time', value: '15 min' },
    { label: 'Cost', value: '£0' },
    {
      label: 'Unlocks',
      value:
        'dpo@, security@, legal@, reviews@, privacy@, safeguarding@, accessibility@, press@ all working',
    },
  ]),
)
content.push(
  para([
    bold('Full walkthrough: '),
    code('business-docs/CLOUDFLARE-EMAIL-SETUP.md'),
  ]),
)
content.push(para([bold('Key links:')]))
content.push(
  bullet([
    tx('Cloudflare signup: '),
    link('https://dash.cloudflare.com/sign-up', 'https://dash.cloudflare.com/sign-up'),
  ]),
)
content.push(
  bullet([
    tx('Namecheap domain panel: '),
    link(
      'https://ap.www.namecheap.com/domains/list',
      'https://ap.www.namecheap.com/domains/list',
    ),
    tx(' (find '),
    code('theenglishhub.app'),
    tx(' → Manage → Nameservers)'),
  ]),
)
content.push(blank())
content.push(
  para([bold('Aliases'), tx(' (all forward to '), code('info@upskillenergy.com'), tx('):')]),
)
content.push(
  buildTable(
    ['Alias', 'Purpose'],
    [
      ['dpo@theenglishhub.app', 'Data Protection Officer / ICO correspondence'],
      ['security@theenglishhub.app', 'Cyber Essentials / security issues'],
      ['legal@theenglishhub.app', 'UKIPO / contracts / legal'],
      ['privacy@theenglishhub.app', 'GDPR data-subject rights'],
      ['safeguarding@theenglishhub.app', 'KCSIE / child-safety reports'],
      ['reviews@theenglishhub.app', 'Trustpilot invitations from'],
      ['accessibility@theenglishhub.app', 'WCAG / a11y feedback'],
      ['press@theenglishhub.app', 'Media enquiries'],
    ].map(([a, b]) => [
      [
        cellPara([new TextRun({ text: a, font: F_MONO, size: 18, color: C_BODY })]),
      ],
      b,
    ]),
    [3500, 6138],
  ),
)
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (while on Cloudflare dashboard):')]))
content.push(
  quote(
    "I'm setting up Cloudflare Email Routing for `theenglishhub.app`. My current DNS is on Namecheap. I want these 8 aliases all forwarding to `info@upskillenergy.com`: dpo, security, legal, privacy, safeguarding, reviews, accessibility, press. Walk me through exactly what to click — I'm on [whatever screen I'm on]. Also enable the catch-all.",
  ),
)
content.push(hr())

// ─── TIER 2 ───────────────────────────────────────────────────────────────
content.push(h2('🟠 TIER 2 — This week (90 min total, £590)', C_TIER2))

// 2.1 Cyber Essentials
content.push(h3('2.1 · File Cyber Essentials certification'))
content.push(
  statLine([
    { label: 'Time', value: '20 min + 2–3 hr self-assessment' },
    { label: 'Cost', value: '£320' },
    { label: 'Unlocks', value: '£150k–£300k valuation (school procurement)' },
  ]),
)
content.push(
  para([
    bold('Link: '),
    link(
      'https://iasme.co.uk/cyber-essentials/apply-for-cyber-essentials/',
      'https://iasme.co.uk/cyber-essentials/apply-for-cyber-essentials/',
    ),
  ]),
)
content.push(
  para([
    bold('Pre-filled answers: '),
    code('business-docs/compliance/cyber-essentials/04-audit-prep/iasme-saq-prefilled.md'),
  ]),
)
content.push(para([bold('Authoritative values'), tx(' (paste exactly):')]))
content.push(bullet([bold('Legal name: '), tx('Upskill Energy Limited')]))
content.push(bullet([bold('Companies House: '), tx('16511479')]))
content.push(
  bullet([bold('Registered office: '), tx('110 Harington Road, Formby, Liverpool, L37 1PZ')]),
)
content.push(
  bullet([
    bold('Security contact: '),
    code('security@theenglishhub.app'),
    tx(' (create via Cloudflare Routing first — step 1.3)'),
  ]),
)
content.push(bullet([bold('Sector: '), tx('Education')]))
content.push(bullet([bold('Size: '), tx('Micro (< 10 employees, < £632k turnover)')]))
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (while on IASME SAQ form):')]))
content.push(
  quote(
    "I'm filling in the Cyber Essentials IASME self-assessment questionnaire for Upskill Energy Limited (Co. 16511479, trading as The English Hub). I have all my pre-filled answers in a markdown file I'll paste. For each question, tell me which pre-filled answer matches and confirm I'm answering consistently. My tech stack: Next.js on Vercel + Supabase + Stripe + Anthropic/OpenAI APIs + Cloudflare DNS + SendGrid + Sentry + PostHog + GitHub. Windows 11 laptop + iPhone + home router.",
  ),
)
content.push(hr())

// 2.2 UKIPO
content.push(h3('2.2 · File UKIPO trademark "THE ENGLISH HUB"'))
content.push(
  statLine([
    { label: 'Time', value: '45 min + 5-min clearance search first' },
    { label: 'Cost', value: '£270' },
    { label: 'Unlocks', value: '£30k de-risk' },
  ]),
)
content.push(
  para([
    bold('Clearance search first: '),
    link(
      'https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1?searchTerm=the+english+hub',
      'UKIPO trademark search — "the english hub"',
    ),
    tx(' (screenshot results — should be clean)'),
  ]),
)
content.push(
  para([
    bold('Filing link: '),
    link(
      'https://www.gov.uk/how-to-register-a-trade-mark',
      'https://www.gov.uk/how-to-register-a-trade-mark',
    ),
    tx(' → click "Start now"'),
  ]),
)
content.push(
  para([
    bold('Pre-filled application: '),
    code('data-room/02-legal/ukipo-trademark-application-prefilled.md'),
  ]),
)
content.push(para([bold('Authoritative values:')]))
content.push(
  bullet([bold('Applicant: '), tx('Upskill Energy Limited, Co. '), tx('16511479')]),
)
content.push(bullet([bold('Address: '), tx('110 Harington Road, Formby, Liverpool, L37 1PZ')]))
content.push(
  bullet([bold('Mark: '), tx('THE ENGLISH HUB (word mark, standard characters)')]),
)
content.push(bullet([bold('Classes: '), tx('9, 41, 42 (software · education · SaaS)')]))
content.push(
  bullet([bold('Email for correspondence: '), code('legal@theenglishhub.app')]),
)
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (on UKIPO "Apply for a trade mark" form):')]))
content.push(
  quote(
    "I'm filing a UK trademark for \"THE ENGLISH HUB\" as a word mark, owned by Upskill Energy Limited (Co. 16511479). Classes 9, 41, 42. I have pre-filled specifications for each class in a markdown file I'll paste. For each field on the UKIPO form, tell me exactly which pre-filled value to paste. My registered address is 110 Harington Road, Formby, Liverpool, L37 1PZ. Total fee should be £270.",
  ),
)
content.push(hr())

// 2.3 ICO
content.push(h3('2.3 · Send ICO address-change email'))
content.push(
  statLine([
    { label: 'Time', value: '5 min' },
    { label: 'Cost', value: '£0' },
    {
      label: 'Unlocks',
      value: 'ICO + Companies House address alignment (claim-time risk mitigation)',
    },
  ]),
)
content.push(
  para([
    bold('Preferred route (faster): '),
    link('https://ico.org.uk/make-a-change/', 'https://ico.org.uk/make-a-change/'),
    tx(' (online form)'),
  ]),
)
content.push(para([bold('Email backup route:')]))
content.push(bullet([bold('To: '), code('casework@ico.org.uk')]))
content.push(bullet([bold('CC: '), code('mail@ico.org.uk')]))
content.push(
  bullet([
    bold('Subject: '),
    code('Change of registered address — Upskill Energy Limited — ICO ref ZC016690'),
  ]),
)
content.push(
  para([
    bold('Pre-drafted email: '),
    code('business-docs/address-correction-emails.md'),
    tx(' § Email 1'),
  ]),
)
content.push(para([bold('Authoritative values:')]))
content.push(bullet([bold('ICO reference: '), tx('ZC016690')]))
content.push(bullet([bold('Companies House: '), tx('16511479')]))
content.push(
  bullet([
    bold('Current (correct) address: '),
    tx('110 Harington Road, Formby, Liverpool, L37 1PZ'),
  ]),
)
content.push(
  bullet([bold('Previous (to replace): '), tx('8 Lindford Drive, Norwich, NR4 6LT')]),
)
content.push(blank())
content.push(
  para([bold('Claude prompt'), tx(' (while composing the email or on the ICO form):')]),
)
content.push(
  quote(
    'I need to update the registered address on my ICO data protection record. ICO reference ZC016690, Upskill Energy Limited (Co. 16511479), trading as The English Hub. Previous address on ICO: 8 Lindford Drive, Norwich, NR4 6LT. New address (matches Companies House): 110 Harington Road, Formby, Liverpool, L37 1PZ. Also want to confirm processing purposes cover online EdTech + AI-assisted essay feedback + students aged 14+ + international transfers to US sub-processors. Draft me the exact email body or fill in the ICO form fields I\'m looking at.',
  ),
)
content.push(hr())

// 2.4 AXA
content.push(h3('2.4 · Call AXA about PII profession description'))
content.push(
  statLine([
    { label: 'Time', value: '15 min' },
    { label: 'Cost', value: '£0' },
    { label: 'Unlocks', value: 'PII claim-denial protection' },
  ]),
)
content.push(
  para([
    bold('Phone: '),
    bold('0330 024 1272'),
    tx(' (AXA Commercial Lines, Mon–Fri 09:00–17:00)'),
  ]),
)
content.push(
  para([bold('Email fallback: '), code('commercial.customerservice@axa-insurance.co.uk')]),
)
content.push(para([bold('Policy details to quote:')]))
content.push(bullet([bold('Policy number: '), tx('550.295.859')]))
content.push(
  bullet([
    bold('Named insured: '),
    tx('Upskill Energy (update to '),
    italic('Upskill Energy Limited'),
    tx(' at renewal)'),
  ]),
)
content.push(bullet([bold('Current profession on record: '), tx('Training consultancy')]))
content.push(bullet([bold('Policy dates: '), tx('15 Nov 2025 – 14 Nov 2026')]))
content.push(blank())
content.push(para([bold('Requested change: '), tx('Update profession to:')]))
content.push(
  quote(
    'Online educational technology platform providing GCSE and IGCSE English revision and AI-assisted essay feedback. Subscription SaaS. Users include students aged 14+, teachers, parents, and schools. Trading as The English Hub (theenglishhub.app).',
  ),
)
content.push(blank())
content.push(
  para([
    bold('Also ask: '),
    tx('quote for upgrading £500k limit to £1m and £2m at renewal.'),
  ]),
)
content.push(
  para([
    bold('Pre-drafted email: '),
    code('business-docs/address-correction-emails.md'),
    tx(' § Email 2'),
  ]),
)
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (if they push back):')]))
content.push(
  quote(
    "I'm on the phone with AXA about my PII policy 550.295.859 for Upskill Energy Limited. They have \"Training consultancy\" as my profession but I trade as The English Hub, an AI-EdTech SaaS for children aged 14+. The underwriter seems hesitant. Help me explain why this is a reasonable midterm adjustment: (1) same business activity economically, (2) clearer description of actual operations, (3) non-disclosure risk if left as-is. Also prep me for likely pushback and what counter to give.",
  ),
)
content.push(hr())

// ─── TIER 3 ───────────────────────────────────────────────────────────────
content.push(h2('🟡 TIER 3 — This month (varies, unlocks Trustpilot + testimonials)', C_TIER3))

// 3.1 SendGrid
content.push(h3('3.1 · SendGrid domain authentication for theenglishhub.app'))
content.push(
  statLine([
    { label: 'Time', value: '10 min' },
    { label: 'Cost', value: '£0 (free tier)' },
    { label: 'Requires', value: 'Cloudflare Email Routing done first (step 1.3)' },
  ]),
)
content.push(
  para([
    bold('Link: '),
    link(
      'https://app.sendgrid.com/settings/sender_auth',
      'https://app.sendgrid.com/settings/sender_auth',
    ),
    tx(' (log into your existing SendGrid account — you already have '),
    code('SENDGRID_API_KEY'),
    tx(' per the env check)'),
  ]),
)
content.push(para([bold('What to do:')]))
content.push(
  numItem([
    bold('Authenticate Your Domain'),
    tx(' → Choose '),
    code('theenglishhub.app'),
  ]),
)
content.push(
  numItem([
    tx(
      'SendGrid generates 3 CNAME records → paste those into Cloudflare DNS (now that nameservers are Cloudflare)',
    ),
  ]),
)
content.push(numItem([tx('Click Verify')]))
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (on SendGrid sender auth wizard):')]))
content.push(
  quote(
    "I'm setting up domain authentication in SendGrid for `theenglishhub.app`. My DNS is on Cloudflare (just migrated from Namecheap). SendGrid is asking me to add 3 CNAME records. I'll paste the values SendGrid gives me — walk me through adding them to Cloudflare DNS without breaking my existing email routing MX records.",
  ),
)
content.push(hr())

// 3.2 Trustpilot Business profile
content.push(h3('3.2 · Claim Trustpilot Business profile'))
content.push(
  doneCallout([
    tx('☑ ', { color: C_DONE_BR, bold: true }),
    bold('Status: Complete 2026-04-21.', { color: '1B5E20' }),
    tx(' Profile claimed; BCC-invite email live at ', { color: '1B5E20' }),
    code('theenglishhub.app+45777e1d0c@invite.trustpilot.com'),
    tx(' (stored in ', { color: '1B5E20' }),
    code('TRUSTPILOT_INVITE_EMAIL'),
    tx('); InviteJS integration key ', { color: '1B5E20' }),
    code('v5nUhdVBgegtcCLG'),
    tx(' (stored in ', { color: '1B5E20' }),
    code('NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY'),
    tx('); Business Unit ID ', { color: '1B5E20' }),
    code('69e9a869c2bb1d03a6752578'),
    tx(' (stored in ', { color: '1B5E20' }),
    code('NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID'),
    tx(' web + ', { color: '1B5E20' }),
    code('EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID'),
    tx(' mobile EAS secret). Verification ID pending.', { color: '1B5E20' }),
  ]),
)
content.push(blank())
content.push(
  statLine([
    { label: 'Time', value: '10 min' },
    { label: 'Cost', value: '£0 (free tier)' },
    { label: 'Unlocks', value: 'Trustpilot rating on site + Google review rich snippets' },
  ]),
)
content.push(
  para([
    bold('Link: '),
    link('https://business.trustpilot.com/signup', 'https://business.trustpilot.com/signup'),
  ]),
)
content.push(para([bold('What to do:')]))
content.push(
  numItem([tx('Sign up with '), code('reviews@theenglishhub.app'), tx(' (now live via Cloudflare Routing)')]),
)
content.push(numItem([tx('Claim the profile for '), code('theenglishhub.app')]))
content.push(
  numItem([
    tx('Admin panel → '),
    bold('Settings → Company Info'),
    tx(' → copy the '),
    bold('Business Unit ID'),
  ]),
)
content.push(blank())
content.push(para([bold('Claude prompt:')]))
content.push(
  quote(
    "I'm claiming the Trustpilot Business profile for `theenglishhub.app` at business.trustpilot.com. I want to (1) find my Business Unit ID, (2) set up the BGL invitation link template (not the paid AFS — free tier only), (3) configure the company info (name: The English Hub, entity: Upskill Energy Limited, Co. 16511479, based in UK). Walk me through the admin panel.",
  ),
)
content.push(hr())

// 3.3 Trustpilot env vars
content.push(h3('3.3 · Switch on Trustpilot in Vercel'))
content.push(
  doneCallout([
    tx('☑ ', { color: C_DONE_BR, bold: true }),
    bold('Status: Complete 2026-04-21', { color: '1B5E20' }),
    tx(' — env vars captured in ', { color: '1B5E20' }),
    code('.env.example'),
    tx(' with real values; production Vercel values populated from the same source.', {
      color: '1B5E20',
    }),
  ]),
)
content.push(blank())
content.push(
  statLine([
    { label: 'Time', value: '5 min' },
    { label: 'Cost', value: '£0' },
    { label: 'Unlocks', value: 'Review invitations start sending' },
  ]),
)
content.push(
  para([
    bold('Link: '),
    link(
      'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables',
      'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables',
    ),
  ]),
)
content.push(para([bold('Env vars to set'), tx(' (all Production):')]))
content.push(
  buildTable(
    ['Key', 'Value'],
    [
      [
        [cellPara([new TextRun({ text: 'TRUSTPILOT_ENABLED', font: F_MONO, size: 18, color: C_BODY })])],
        [cellPara([new TextRun({ text: 'true', font: F_MONO, size: 18, color: C_BODY })])],
      ],
      [
        [cellPara([new TextRun({ text: 'TRUSTPILOT_BUSINESS_UNIT_ID', font: F_MONO, size: 18, color: C_BODY })])],
        [cellPara([italic('<from Trustpilot admin, step 3.2>')])],
      ],
      [
        [cellPara([new TextRun({ text: 'TRUSTPILOT_API_KEY', font: F_MONO, size: 18, color: C_BODY })])],
        [cellPara([italic('<leave blank for free tier>')])],
      ],
      [
        [cellPara([new TextRun({ text: 'SENDGRID_SANDBOX', font: F_MONO, size: 18, color: C_BODY })])],
        [cellPara([new TextRun({ text: 'false', font: F_MONO, size: 18, color: C_BODY })])],
      ],
    ],
    [4500, 5138],
  ),
)
content.push(blank())
content.push(
  para([
    tx('After saving, redeploy. First scheduled run: '),
    bold('03:45 UTC tomorrow'),
    tx('.'),
  ]),
)
content.push(blank())
content.push(para([bold('Claude prompt:')]))
content.push(
  quote(
    "I'm setting Trustpilot env vars in Vercel for my production environment. `TRUSTPILOT_ENABLED=true`, `TRUSTPILOT_BUSINESS_UNIT_ID=<value>`, `SENDGRID_SANDBOX=false`. Walk me through adding each one via the Vercel env vars UI. Only Production — I want Preview and Development to stay disabled so preview deployments never send real emails.",
  ),
)
content.push(hr())

// 3.4 Cyber insurance
content.push(h3('3.4 · Cyber insurance — 3 quotes'))
content.push(
  statLine([
    { label: 'Time', value: '15 min' },
    { label: 'Cost', value: '£300–£800/yr (once bound)' },
    { label: 'Unlocks', value: 'School procurement DPIA checkmark' },
  ]),
)
content.push(para([bold('Parallel links:')]))
content.push(
  bullet([
    bold('Hiscox'),
    tx(' — '),
    link(
      'https://www.hiscox.co.uk/business-insurance/cyber-insurance',
      'https://www.hiscox.co.uk/business-insurance/cyber-insurance',
    ),
    tx(' (online quote in 10 min)'),
  ]),
)
content.push(
  bullet([
    bold('CFC Underwriting'),
    tx(' — '),
    link(
      'https://www.cfcunderwriting.com/en-gb/products/cyber/',
      'https://www.cfcunderwriting.com/en-gb/products/cyber/',
    ),
    tx(' (broker-placed only — email '),
    code('enquiries@cfcunderwriting.com'),
    tx(')'),
  ]),
)
content.push(
  bullet([
    bold('Markel'),
    tx(' — '),
    link(
      'https://www.markel.com/uk/business-insurance/cyber-data',
      'https://www.markel.com/uk/business-insurance/cyber-data',
    ),
    tx(' (email '),
    code('newbusiness@markeluk.com'),
    tx(')'),
  ]),
)
content.push(blank())
content.push(
  para([
    bold('Pre-drafted email: '),
    code('business-docs/address-correction-emails.md'),
    tx(' § Email 3'),
  ]),
)
content.push(para([bold('Quote parameters:')]))
content.push(
  bullet([
    bold('Limit: '),
    tx('£250,000 and £500,000 each claim (quote both)'),
  ]),
)
content.push(
  bullet([bold('Retroactive date: '), tx('15 November 2025 (align with PII)')]),
)
content.push(bullet([bold('Excess: '), tx('£500–£2,500')]))
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (on Hiscox quote form):')]))
content.push(
  quote(
    "I'm requesting a cyber insurance quote on Hiscox for Upskill Energy Limited, Co. 16511479, trading as The English Hub. Online EdTech SaaS for GCSE English, serving students aged 14+, UK-only. Turnover <£50k currently, projecting <£500k Year 1. Sub-processors: Stripe, Anthropic, OpenAI, Supabase, Vercel, Cloudflare, SendGrid, Sentry, PostHog, GitHub. I want quotes at £250k and £500k limits. Walk me through each field and tell me which answer to pick for an EdTech SaaS of my profile.",
  ),
)
content.push(hr())

// ─── TIER 4 ───────────────────────────────────────────────────────────────
content.push(h2('🟢 TIER 4 — Nice-to-have (unlocks Breakout path)', C_TIER4))

// 4.1 Advisor names
content.push(h3('4.1 · Send me 5 advisor target names'))
content.push(
  statLine([
    { label: 'Time', value: '20 min' },
    { label: 'Cost', value: '£0' },
    { label: 'Unlocks', value: '£80k–£200k valuation (reduces founder-dependency discount)' },
  ]),
)
content.push(
  para([
    bold('What I need from you'),
    tx(
      ' — 5 real people you want to approach for your Academic Advisory Board. For each:',
    ),
  ]),
)
content.push(
  buildTable(
    ['Field', 'Example'],
    [
      ['Full name', 'Dr Ruth Taylor'],
      ['Role + school', 'Head of English, St Paul’s School'],
      [
        'The hook',
        'Her Team English thread about AQA Paper 2 Q5 pedagogy, 14 Mar 2026',
      ],
      ['Route', 'LinkedIn DM / work email / warm intro via [name]'],
    ],
    [3000, 6638],
  ),
)
content.push(blank())
content.push(para([bold('Where to find candidates:')]))
content.push(
  bullet([
    tx('Team English hashtag on X: '),
    link(
      'https://twitter.com/search?q=%23TeamEnglish',
      'https://twitter.com/search?q=%23TeamEnglish',
    ),
  ]),
)
content.push(
  bullet([
    tx('EMC editorial board: '),
    link(
      'https://www.englishandmedia.co.uk/about-us',
      'https://www.englishandmedia.co.uk/about-us',
    ),
  ]),
)
content.push(
  bullet([
    tx('NATE committee: '),
    link('https://www.nate.org.uk/about-nate/', 'https://www.nate.org.uk/about-nate/'),
  ]),
)
content.push(
  bullet([
    tx('PTI (Prince’s Teaching Institute): '),
    link('https://www.princes-ti.org.uk/', 'https://www.princes-ti.org.uk/'),
  ]),
)
content.push(
  bullet([
    tx('LinkedIn search: '),
    italic('"Head of English"'),
    tx(' + '),
    italic('"AQA"'),
    tx(' or '),
    italic('"Edexcel"'),
  ]),
)
content.push(blank())
content.push(
  para([
    tx(
      'Once you send me the 5 names + hooks, I’ll return 5 bespoke 140-word emails + 7-day follow-ups, ready for you to paste from your Gmail account.',
    ),
  ]),
)
content.push(blank())
content.push(
  para([bold('Claude prompt'), tx(' (while searching Team English / LinkedIn):')]),
)
content.push(
  quote(
    "I'm looking for 5 Heads of English or senior examiners to approach for an Academic Advisory Board at The English Hub. Criteria: (1) serving HoD or recent examiner at AQA/Edexcel/OCR/CIE; (2) published voice (Team English, PTI, NATE, book, Tes article, conference talk); (3) not already advising a competing platform; (4) UK-based. Help me find 10 names and filter down to the strongest 5 based on these criteria. For each, find me (a) full name, (b) current role + school, (c) a specific recent piece of their work I can cite as the hook, (d) how to reach them (LinkedIn handle / work email / mutual connection).",
  ),
)
content.push(hr())

// 4.2 Testimonials
content.push(h3('4.2 · Capture 3 named + photographed testimonials'))
content.push(
  statLine([
    { label: 'Time', value: '2–3 weeks' },
    { label: 'Cost', value: '£0–£500 (photos optional)' },
    { label: 'Unlocks', value: '£100k–£250k valuation' },
  ]),
)
content.push(
  para([
    bold('Consent form ready: '),
    code('data-room/03-privacy/testimonial-consent-form.md'),
  ]),
)
content.push(
  para([
    bold('Photo release ready: '),
    code('data-room/03-privacy/testimonial-photo-release.md'),
  ]),
)
content.push(para([bold('Target mix:')]))
content.push(
  bullet([
    tx('1 Head of English at a real UK secondary '),
    italic('(highest credibility)'),
  ]),
)
content.push(bullet([tx('1 teacher currently using the platform')]))
content.push(bullet([tx('3 students (consented parents if under 16)')]))
content.push(blank())
content.push(para([bold('Claude prompt'), tx(' (for the outreach email):')]))
content.push(
  quote(
    "Draft me an outreach email to a current English Hub user asking if they'd be willing to share a named, photographed testimonial for our homepage + /for-schools page. They'd need to fill in our GDPR consent form + photo release (linked in the email). In exchange, offer them a 3-month premium subscription extension and named recognition. 150 words, friendly + honest, British English.",
  ),
)
content.push(hr())

// 4.3 Defensive domains
content.push(h3('4.3 · Register defensive domains'))
content.push(
  statLine([
    { label: 'Time', value: '10 min' },
    { label: 'Cost', value: '£30–£80/yr total' },
  ]),
)
content.push(
  para([
    bold('Link: '),
    link(
      'https://www.namecheap.com/domains/registration/results/?domain=theenglishhub',
      'https://www.namecheap.com/domains/registration/results/?domain=theenglishhub',
    ),
    tx(' (you already use Namecheap)'),
  ]),
)
content.push(para([bold('Domains to check + register if available:')]))
content.push(
  bullet([code('theenglishhub.co.uk'), tx(' (UK SMB credibility)')]),
)
content.push(bullet([code('theenglishhub.com'), tx(' (if available)')]))
content.push(
  bullet([code('the-english-hub.com'), tx(' (typo-squat defence)')]),
)
content.push(
  bullet([code('theenglish-hub.app'), tx(' (typo-squat defence)')]),
)
content.push(blank())
content.push(para([bold('Claude prompt:')]))
content.push(
  quote(
    "I'm at Namecheap checking availability for defensive domain registrations for my brand \"The English Hub\". Already own `theenglishhub.app`. Want to acquire: `.co.uk`, `.com`, `the-english-hub.com`, `theenglish-hub.app`. Check availability for each, tell me which to prioritise buying based on SEO + typo-squat defence, and confirm total annual renewal cost.",
  ),
)
content.push(hr())

// ─── Master tracker ───────────────────────────────────────────────────────
content.push(new Paragraph({ children: [new PageBreak()] }))
content.push(h2('📋 Master tracker', C_HEADING))
content.push(para([italic('Mark each as you complete:')]))

const trackerRows = [
  ['1.1', 'Supabase migration', '2 min', false, ''],
  ['1.2', 'CRON_SECRET in Vercel', '3 min', false, ''],
  ['1.3', 'Cloudflare Email Routing — 8 aliases', '15 min', true, '2026-04-21'],
  ['2.1', 'Cyber Essentials filed', '£320, 20 min submit + self-assess', false, ''],
  ['2.2', 'UKIPO trademark filed', '£270, 45 min', false, ''],
  ['2.3', 'ICO address update sent', '5 min', false, ''],
  ['2.4', 'AXA profession updated', '15 min call', false, ''],
  ['3.1', 'SendGrid domain auth', '10 min, after 1.3', false, ''],
  [
    '3.2',
    'Trustpilot Business profile claimed',
    '10 min',
    true,
    '2026-04-21 (BCC invite, InviteJS key, Business Unit ID all captured)',
  ],
  ['3.3', 'Trustpilot env vars + TRUSTPILOT_ENABLED=true', '5 min', true, '2026-04-21'],
  ['3.4', 'Cyber insurance — 3 quotes requested', '15 min', false, ''],
  ['4.1', 'Five advisor names sent to me', '20 min', false, ''],
  ['4.2', 'First 3 testimonials captured', '2–3 weeks', false, ''],
  ['4.3', 'Defensive domains registered', '10 min', false, ''],
]

const trackerHeaderBorder = { style: BorderStyle.SINGLE, size: 4, color: C_BORDER }
const trackerBorders = {
  top: trackerHeaderBorder,
  bottom: trackerHeaderBorder,
  left: trackerHeaderBorder,
  right: trackerHeaderBorder,
}

const trackerColWidths = [600, 700, 5500, 1438, 1400]

const trackerHeader = new TableRow({
  tableHeader: true,
  children: ['', '#', 'Task', 'Time / Cost', 'Notes'].map(
    (h, i) =>
      new TableCell({
        width: { size: trackerColWidths[i], type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_HD },
        margins: { top: 80, bottom: 80, left: 100, right: 100 },
        borders: trackerBorders,
        verticalAlign: VerticalAlign.CENTER,
        children: [
          new Paragraph({
            spacing: { after: 0 },
            children: [
              new TextRun({
                text: h,
                font: F_BODY,
                bold: true,
                color: C_TABLE_HD_TXT,
                size: 20,
              }),
            ],
          }),
        ],
      }),
  ),
})

const trackerDataRows = trackerRows.map((row, ri) => {
  const [num, task, time, done, note] = row
  const cells = [
    // Checkbox column
    new TableCell({
      width: { size: trackerColWidths[0], type: WidthType.DXA },
      shading: done
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_DONE_BG }
        : ri % 2 === 1
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_ALT }
        : undefined,
      margins: { top: 80, bottom: 80, left: 80, right: 80 },
      borders: trackerBorders,
      verticalAlign: VerticalAlign.CENTER,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 0 },
          children: [
            new TextRun({
              text: done ? '☑' : '☐',
              font: F_BODY,
              size: 24,
              color: done ? C_DONE_BR : C_BODY,
              bold: true,
            }),
          ],
        }),
      ],
    }),
    // # column
    new TableCell({
      width: { size: trackerColWidths[1], type: WidthType.DXA },
      shading: done
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_DONE_BG }
        : ri % 2 === 1
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_ALT }
        : undefined,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      borders: trackerBorders,
      verticalAlign: VerticalAlign.CENTER,
      children: [
        new Paragraph({
          spacing: { after: 0 },
          children: [bold(num, { size: 20, color: done ? '1B5E20' : C_BODY })],
        }),
      ],
    }),
    // Task column
    new TableCell({
      width: { size: trackerColWidths[2], type: WidthType.DXA },
      shading: done
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_DONE_BG }
        : ri % 2 === 1
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_ALT }
        : undefined,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      borders: trackerBorders,
      verticalAlign: VerticalAlign.CENTER,
      children: [
        new Paragraph({
          spacing: { after: 0 },
          children: [
            new TextRun({
              text: task,
              font: F_BODY,
              size: 20,
              color: done ? '1B5E20' : C_BODY,
              strike: done,
            }),
          ],
        }),
      ],
    }),
    // Time/Cost column
    new TableCell({
      width: { size: trackerColWidths[3], type: WidthType.DXA },
      shading: done
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_DONE_BG }
        : ri % 2 === 1
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_ALT }
        : undefined,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      borders: trackerBorders,
      verticalAlign: VerticalAlign.CENTER,
      children: [
        new Paragraph({
          spacing: { after: 0 },
          children: [tx(time, { size: 18, color: done ? '1B5E20' : C_MUTED })],
        }),
      ],
    }),
    // Notes column
    new TableCell({
      width: { size: trackerColWidths[4], type: WidthType.DXA },
      shading: done
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_DONE_BG }
        : ri % 2 === 1
        ? { type: ShadingType.CLEAR, color: 'auto', fill: C_TABLE_ALT }
        : undefined,
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      borders: trackerBorders,
      verticalAlign: VerticalAlign.CENTER,
      children: [
        new Paragraph({
          spacing: { after: 0 },
          children: [italic(note, { size: 18, color: done ? '1B5E20' : C_MUTED })],
        }),
      ],
    }),
  ]
  return new TableRow({ children: cells })
})

content.push(
  new Table({
    width: {
      size: trackerColWidths.reduce((a, b) => a + b, 0),
      type: WidthType.DXA,
    },
    columnWidths: trackerColWidths,
    rows: [trackerHeader, ...trackerDataRows],
  }),
)

content.push(blank())
content.push(
  para([
    bold('Hard spend to complete Tiers 1–3: '),
    tx('£590 + £300–£800/yr cyber insurance'),
  ]),
)
content.push(
  para([
    bold('Valuation uplift once all done: '),
    tx('+£400k–£900k vs v3 baseline'),
  ]),
)

content.push(hr())

// ─── When you finish ──────────────────────────────────────────────────────
content.push(h2('When you finish each item, tell me', C_HEADING))
content.push(
  para([
    tx(
      "Ping me with the relevant confirmation and I'll do the downstream codebase updates in one sweep:",
    ),
  ]),
)
content.push(
  bullet([
    italic('"Supabase migration done"'),
    tx(' → I verify table + add a dashboard widget'),
  ]),
)
content.push(
  bullet([
    italic('"CRON_SECRET set"'),
    tx(' → I smoke-test both Trustpilot crons end-to-end'),
  ]),
)
content.push(
  bullet([
    italic('"Email routing live"'),
    tx(' → I update ToS + privacy policy + sub-processor list to cite the new aliases'),
  ]),
)
content.push(
  bullet([
    italic('"CE certified"'),
    tx(' → I add the badge to footer + '),
    code('/for-schools'),
    tx(' + '),
    code('/pricing'),
  ]),
)
content.push(
  bullet([
    italic('"TM filed — app no ____"'),
    tx(' → I update '),
    code('trademark-register.md'),
  ]),
)
content.push(
  bullet([
    italic('"TM registered"'),
    tx(' → I change ™ to ® site-wide'),
  ]),
)
content.push(
  bullet([
    italic('"Here are 5 advisor names"'),
    tx(' → I write 5 bespoke first emails + follow-ups'),
  ]),
)
content.push(blank())
content.push(
  para([
    italic(
      'Everything is scaffolded. The remaining work is almost entirely external — services, filings, humans. I handle the codebase updates.',
    ),
  ]),
)

// ─── Document assembly ────────────────────────────────────────────────────
const doc = new Document({
  creator: 'The English Hub',
  title: 'The English Hub — Completion Checklist',
  description: 'Outstanding launch tasks with direct links and Claude-for-Chrome prompts.',
  styles: {
    default: {
      document: { run: { font: F_BODY, size: 22, color: C_BODY } }, // 11pt
    },
    paragraphStyles: [
      {
        id: 'Heading1',
        name: 'Heading 1',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 44, bold: true, font: F_HEADING, color: C_HEADING },
        paragraph: { spacing: { before: 0, after: 240 }, outlineLevel: 0 },
      },
      {
        id: 'Heading2',
        name: 'Heading 2',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 30, bold: true, font: F_HEADING, color: C_HEADING },
        paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 1 },
      },
      {
        id: 'Heading3',
        name: 'Heading 3',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 24, bold: true, font: F_HEADING, color: C_HEADING },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: '•',
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 360, hanging: 240 } },
              run: { font: F_BODY },
            },
          },
        ],
      },
      {
        reference: 'numbered',
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: '%1.',
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: { indent: { left: 540, hanging: 360 } },
              run: { font: F_BODY },
            },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: PAGE_WIDTH, height: PAGE_HEIGHT },
          margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              spacing: { after: 0 },
              children: [
                new TextRun({
                  text: 'The English Hub — Completion Checklist',
                  font: F_BODY,
                  size: 18,
                  color: C_MUTED,
                }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              spacing: { after: 0 },
              tabStops: [
                { type: 'right', position: CONTENT_WIDTH },
              ],
              children: [
                new TextRun({
                  text: 'Upskill Energy Limited · Co. 16511479',
                  font: F_BODY,
                  size: 18,
                  color: C_MUTED,
                }),
                new TextRun({ text: '\t', font: F_BODY }),
                new TextRun({ text: 'Page ', font: F_BODY, size: 18, color: C_MUTED }),
                new TextRun({ children: [PageNumber.CURRENT], font: F_BODY, size: 18, color: C_MUTED }),
                new TextRun({ text: ' of ', font: F_BODY, size: 18, color: C_MUTED }),
                new TextRun({ children: [PageNumber.TOTAL_PAGES], font: F_BODY, size: 18, color: C_MUTED }),
              ],
            }),
          ],
        }),
      },
      children: content,
    },
  ],
})

const outPath = path.join(__dirname, '..', 'business-docs', 'COMPLETION-CHECKLIST.docx')
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(outPath, buf)
  console.log('Wrote ' + outPath + ' (' + buf.length.toLocaleString() + ' bytes)')
})
