// Build the full "Completion Checklist" as a professional, printable Word doc.
// Source:  COMPLETION-CHECKLIST.md
// Output:  COMPLETION-CHECKLIST.docx
//
// Layout: A4 portrait, 2.5 cm margins, Arial 11pt body.
// British English throughout. Tables, hyperlinks, code blocks rendered
// faithfully. Heading hierarchy: H1 title → H2 tiers → H3 per task.

const fs = require('fs')
const path = require('path')
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, LevelFormat, ExternalHyperlink, PageOrientation, PageBreak,
  PageNumber, TabStopType, TabStopPosition,
} = require('docx')

// ── A4 portrait, 2.5 cm margins (1 cm ≈ 567 DXA; 2.5 cm = 1417 DXA) ────
const PAGE_W = 11906
const PAGE_H = 16838
const MARGIN = 1417
const CONTENT_W = PAGE_W - 2 * MARGIN // 9072 DXA

// ── Palette ────────────────────────────────────────────────────────────
const INK_900 = '111827'
const INK_700 = '374151'
const INK_600 = '4B5563'
const INK_400 = '9CA3AF'
const INK_200 = 'E5E7EB'
const INK_50 = 'F9FAFB'
const LINK = '0B5CAD'
const TEAL_800 = '075056'
const CLAY_600 = 'B8541F'
const TIER1 = 'DC2626'  // red
const TIER2 = 'EA580C'  // orange
const TIER3 = 'CA8A04'  // amber
const TIER4 = '16A34A'  // green
const TIER1_BG = 'FEF2F2'
const TIER2_BG = 'FFF7ED'
const TIER3_BG = 'FEFCE8'
const TIER4_BG = 'F0FDF4'
const CODE_BG = 'F3F4F6'

// ── Text helpers ───────────────────────────────────────────────────────
const run = (text, opts = {}) =>
  new TextRun({ text, font: 'Arial', size: 22, color: INK_700, ...opts })

const runMono = (text, opts = {}) =>
  new TextRun({ text, font: 'Consolas', size: 20, color: INK_900, ...opts })

const bold = (text, opts = {}) => run(text, { bold: true, color: INK_900, ...opts })

const link = (href, display) =>
  new ExternalHyperlink({
    link: href,
    children: [new TextRun({
      text: display, font: 'Arial', size: 22, color: LINK, underline: {},
    })],
  })

const para = (children, opts = {}) =>
  new Paragraph({
    children: Array.isArray(children) ? children : [children],
    spacing: { before: 0, after: 120, line: 300 },
    ...opts,
  })

const h1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 0, after: 240 },
    children: [new TextRun({ text, font: 'Arial', size: 40, bold: true, color: INK_900 })],
  })

const h2 = (text, color = INK_900) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 360, after: 180 },
    pageBreakBefore: true,
    children: [new TextRun({ text, font: 'Arial', size: 32, bold: true, color })],
  })

const h2NoBreak = (text, color = INK_900) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 160 },
    children: [new TextRun({ text, font: 'Arial', size: 32, bold: true, color })],
  })

const h3 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 320, after: 120 },
    keepNext: true,
    children: [new TextRun({ text, font: 'Arial', size: 26, bold: true, color: INK_900 })],
  })

const label = (key, value) =>
  new Paragraph({
    spacing: { before: 0, after: 60, line: 280 },
    children: [bold(key + ': '), run(value)],
  })

// Bordered callout (Time · Cost · Unlocks)
const infoRow = (entries) => {
  // entries: [ [label, value], ... ]
  const runs = []
  entries.forEach(([k, v], i) => {
    if (i > 0) runs.push(run('   ·   ', { color: INK_400 }))
    runs.push(new TextRun({ text: k, font: 'Arial', size: 18, bold: true, color: INK_600, allCaps: true }))
    runs.push(run('  '))
    runs.push(bold(v))
  })
  return new Paragraph({
    spacing: { before: 0, after: 180, line: 280 },
    shading: { fill: INK_50, type: ShadingType.CLEAR, color: 'auto' },
    border: {
      top: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
      left: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
      right: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
    },
    children: runs,
  })
}

// Code block — monospace, grey background, indented
const codeBlock = (lines) => {
  // Single cell table gives us a proper block with padding + shading.
  const cellChildren = lines.map(
    (ln) =>
      new Paragraph({
        spacing: { before: 0, after: 0, line: 260 },
        children: [runMono(ln || ' ')],
      }),
  )
  const tbl = new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      left: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      right: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT_W, type: WidthType.DXA },
            shading: { fill: CODE_BG, type: ShadingType.CLEAR, color: 'auto' },
            margins: { top: 120, bottom: 120, left: 160, right: 160 },
            children: cellChildren,
          }),
        ],
      }),
    ],
  })
  return [tbl, para(run(' '), { spacing: { before: 0, after: 120 } })]
}

// Quote / Claude prompt — left bar
const promptBlock = (text) => {
  const tbl = new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    borders: {
      top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      left: { style: BorderStyle.SINGLE, size: 24, color: TEAL_800 },
      right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT_W, type: WidthType.DXA },
            shading: { fill: 'F0F9FA', type: ShadingType.CLEAR, color: 'auto' },
            margins: { top: 160, bottom: 160, left: 280, right: 200 },
            children: [
              new Paragraph({
                spacing: { before: 0, after: 0, line: 300 },
                children: [
                  new TextRun({ text: 'Claude-for-Chrome prompt ', font: 'Arial', size: 18, bold: true, allCaps: true, color: TEAL_800 }),
                ],
              }),
              new Paragraph({
                spacing: { before: 80, after: 0, line: 300 },
                children: [run(text, { italics: true, color: INK_700 })],
              }),
            ],
          }),
        ],
      }),
    ],
  })
  return [tbl, para(run(' '), { spacing: { before: 0, after: 120 } })]
}

// Bullet list
const bullet = (runs) =>
  new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { before: 0, after: 80, line: 280 },
    children: Array.isArray(runs) ? runs : [runs],
  })

// Numbered list
const numberedItem = (runs) =>
  new Paragraph({
    numbering: { reference: 'numbers', level: 0 },
    spacing: { before: 0, after: 80, line: 280 },
    children: Array.isArray(runs) ? runs : [runs],
  })

// Checkbox for master tracker
const trackerItem = (text) =>
  new Paragraph({
    spacing: { before: 0, after: 100, line: 300 },
    indent: { left: 360 },
    children: [
      new TextRun({ text: '\u2610  ', font: 'Arial', size: 28, color: INK_900 }),
      run(text),
    ],
  })

// ── Proper table (heading row + body rows) ─────────────────────────────
const dataCell = (children, width, opts = {}) =>
  new TableCell({
    width: { size: width, type: WidthType.DXA },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      left: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      right: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
    },
    shading: opts.shade ? { fill: opts.shade, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    children: Array.isArray(children) ? children : [children],
  })

const headerCell = (text, width) =>
  new TableCell({
    width: { size: width, type: WidthType.DXA },
    margins: { top: 120, bottom: 120, left: 140, right: 140 },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 8, color: INK_700 },
      bottom: { style: BorderStyle.SINGLE, size: 8, color: INK_700 },
      left: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
      right: { style: BorderStyle.SINGLE, size: 4, color: INK_200 },
    },
    shading: { fill: INK_900, type: ShadingType.CLEAR, color: 'auto' },
    children: [
      new Paragraph({
        spacing: { before: 0, after: 0, line: 280 },
        children: [new TextRun({ text, font: 'Arial', size: 20, bold: true, color: 'FFFFFF' })],
      }),
    ],
  })

const makeTable = (columnWidths, headers, rows) =>
  new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths,
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map((h, i) => headerCell(h, columnWidths[i])),
      }),
      ...rows.map(
        (r) =>
          new TableRow({
            children: r.map((cell, i) => {
              const body = Array.isArray(cell) ? cell : [para(run(String(cell)), { spacing: { before: 0, after: 0, line: 280 } })]
              return dataCell(body, columnWidths[i])
            }),
          }),
      ),
    ],
  })

// ── Content: reusable snippets ─────────────────────────────────────────
const sqlLines = [
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
]

// ── Build the document children ────────────────────────────────────────
const children = []

// ─── Title block ───
children.push(h1('The English Hub — Completion Checklist'))
children.push(
  para(
    [
      run('Everything outstanding, with direct links and Claude-for-Chrome prompts. ', { bold: true, color: INK_900 }),
      run('Sorted by priority × leverage. Most items under 15 minutes. Full execution ≈ 4 hours of your time plus £590 hard spend.'),
    ],
    { spacing: { before: 0, after: 180, line: 300 } },
  ),
)
children.push(
  para([
    run('How to use the Claude prompts: install '),
    link('https://claude.ai/chrome', 'Claude for Chrome'),
    run(' (or use claude.ai in a second tab), open the target page first, then paste the prompt. Claude sees the page and walks you through each field.'),
  ]),
)

// Summary table at top
children.push(para(run(' '), { spacing: { before: 0, after: 60 } }))
children.push(
  makeTable(
    [2200, 2200, 2336, 2336],
    ['Tier', 'Deadline', 'Founder time', 'Hard spend'],
    [
      [
        [para([run('Tier 1', { bold: true, color: TIER1 })], { spacing: { before: 0, after: 0, line: 280 } })],
        'Today',
        '20 min',
        '£0',
      ],
      [
        [para([run('Tier 2', { bold: true, color: TIER2 })], { spacing: { before: 0, after: 0, line: 280 } })],
        'This week',
        '~1 h 25 m',
        '£590',
      ],
      [
        [para([run('Tier 3', { bold: true, color: TIER3 })], { spacing: { before: 0, after: 0, line: 280 } })],
        'This month',
        '40 min',
        '£300–£800/yr (insurance)',
      ],
      [
        [para([run('Tier 4', { bold: true, color: TIER4 })], { spacing: { before: 0, after: 0, line: 280 } })],
        'When feasible',
        '30 min + 2–3 wk',
        '£30–£580',
      ],
    ],
  ),
)

// ─── TIER 1 ───
children.push(h2('Tier 1 — Today  ·  45 min  ·  £0', TIER1))
children.push(para(run('These three items unlock everything else downstream.', { italics: true, color: INK_600 })))

// 1.1
children.push(h3('1.1  Run the Supabase migration for the Trustpilot dedup table'))
children.push(infoRow([['Time', '2 min'], ['Cost', '£0'], ['Unlocks', 'Trustpilot audit trail starts recording']]))
children.push(
  para([
    bold('Link: '),
    link('https://supabase.com/dashboard/project/_/sql/new', 'supabase.com/dashboard/project/_/sql/new'),
  ]),
)
children.push(
  para([
    bold('What to do: '),
    run('Open your Supabase project → SQL Editor → New query → paste the SQL below → Run.'),
  ]),
)
children.push(
  para([
    bold('SQL to paste '),
    run('(from '),
    runMono('supabase/migrations/20260419_trustpilot_invites.sql'),
    run('):'),
  ]),
)
codeBlock(sqlLines).forEach((c) => children.push(c))
promptBlock('I just ran this Supabase migration and got the error shown on screen. Help me diagnose what is wrong. The migration creates a trustpilot_invite table. Show me the exact fix — I will paste it back into the SQL editor.').forEach((c) => children.push(c))

// 1.2
children.push(h3('1.2  Set CRON_SECRET in Vercel'))
children.push(infoRow([['Time', '3 min'], ['Cost', '£0'], ['Unlocks', 'All Vercel cron jobs, including the two new Trustpilot crons']]))
children.push(
  para([
    bold('Link: '),
    link('https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables', 'vercel.com → english-hub → settings → environment variables'),
  ]),
)
children.push(para(bold('What to do:')))
children.push(numberedItem([run('Click '), bold('“Add Another”'), run('.')]))
children.push(numberedItem([run('Key: '), runMono('CRON_SECRET')]))
children.push(
  numberedItem([
    run('Value: a long random string — generate one at '),
    link('https://1password.com/password-generator/', '1password.com/password-generator'),
    run(' (64 characters, letters + digits, no symbols).'),
  ]),
)
children.push(numberedItem([run('Environments: '), bold('Production only'), run(' (leave Preview and Development unchecked).')]))
children.push(numberedItem([run('Save.')]))
promptBlock('I am on the Vercel env vars page for my project english-hub. I need to add CRON_SECRET as a Production-only secret with a 64-character random value. Walk me through clicking the right buttons. The value field accepts any string — I want to use the strongest random string possible.').forEach((c) => children.push(c))
children.push(
  para([
    bold('Then redeploy. '),
    run('Vercel env var changes do not apply to existing deployments. Trigger a redeploy from the Deployments tab → latest deploy → three dots → '),
    bold('Redeploy'),
    run('.'),
  ]),
)

// 1.3
children.push(h3('1.3  Cloudflare Email Routing — 8 aliases'))
children.push(infoRow([['Time', '15 min'], ['Cost', '£0'], ['Unlocks', 'dpo@ · security@ · legal@ · reviews@ · privacy@ · safeguarding@ · accessibility@ · press@']]))
children.push(
  para([
    bold('Full walkthrough: '),
    runMono('business-docs/CLOUDFLARE-EMAIL-SETUP.md'),
  ]),
)
children.push(para(bold('Key links:')))
children.push(bullet([run('Cloudflare sign-up: '), link('https://dash.cloudflare.com/sign-up', 'dash.cloudflare.com/sign-up')]))
children.push(
  bullet([
    run('Namecheap domain panel: '),
    link('https://ap.www.namecheap.com/domains/list', 'ap.www.namecheap.com/domains/list'),
    run(' (find '),
    runMono('theenglishhub.app'),
    run(' → Manage → Nameservers).'),
  ]),
)
children.push(
  para([
    bold('Aliases '),
    run('(all forward to '),
    runMono('info@upskillenergy.com'),
    run('):'),
  ]),
)

children.push(
  makeTable(
    [3200, 5872],
    ['Alias', 'Purpose'],
    [
      [[para(runMono('dpo@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'Data Protection Officer / ICO correspondence'],
      [[para(runMono('security@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'Cyber Essentials / security issues'],
      [[para(runMono('legal@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'UKIPO / contracts / legal'],
      [[para(runMono('privacy@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'GDPR data-subject rights'],
      [[para(runMono('safeguarding@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'KCSIE / child-safety reports'],
      [[para(runMono('reviews@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'Trustpilot invitations from'],
      [[para(runMono('accessibility@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'WCAG / accessibility feedback'],
      [[para(runMono('press@theenglishhub.app'), { spacing: { before: 0, after: 0, line: 280 } })], 'Media enquiries'],
    ],
  ),
)
children.push(para(run(' '), { spacing: { before: 0, after: 80 } }))
promptBlock('I am setting up Cloudflare Email Routing for theenglishhub.app. My current DNS is on Namecheap. I want these 8 aliases all forwarding to info@upskillenergy.com: dpo, security, legal, privacy, safeguarding, reviews, accessibility, press. Walk me through exactly what to click — I am on [whatever screen I am on]. Also enable the catch-all.').forEach((c) => children.push(c))

// ─── TIER 2 ───
children.push(h2('Tier 2 — This week  ·  90 min  ·  £590', TIER2))

// 2.1
children.push(h3('2.1  File Cyber Essentials certification'))
children.push(infoRow([['Time', '20 min + 2–3 h self-assessment'], ['Cost', '£320'], ['Unlocks', '£150k–£300k valuation (school procurement)']]))
children.push(
  para([
    bold('Link: '),
    link('https://iasme.co.uk/cyber-essentials/apply-for-cyber-essentials/', 'iasme.co.uk/cyber-essentials/apply-for-cyber-essentials'),
  ]),
)
children.push(
  para([
    bold('Pre-filled answers: '),
    runMono('business-docs/compliance/cyber-essentials/04-audit-prep/iasme-saq-prefilled.md'),
  ]),
)
children.push(para(bold('Authoritative values (paste exactly):')))
children.push(bullet([run('Legal name: '), bold('Upskill Energy Limited')]))
children.push(bullet([run('Companies House: '), bold('16511479')]))
children.push(bullet([run('Registered office: '), bold('110 Harington Road, Formby, Liverpool, L37 1PZ')]))
children.push(
  bullet([
    run('Security contact: '),
    runMono('security@theenglishhub.app'),
    run(' (create via Cloudflare Routing first — step 1.3).'),
  ]),
)
children.push(bullet([run('Sector: '), bold('Education')]))
children.push(bullet([run('Size: '), bold('Micro (< 10 employees, < £632k turnover)')]))
promptBlock('I am filling in the Cyber Essentials IASME self-assessment questionnaire for Upskill Energy Limited (Co. 16511479, trading as The English Hub). I have all my pre-filled answers in a markdown file I will paste. For each question, tell me which pre-filled answer matches and confirm I am answering consistently. My tech stack: Next.js on Vercel + Supabase + Stripe + Anthropic/OpenAI APIs + Cloudflare DNS + SendGrid + Sentry + PostHog + GitHub. Windows 11 laptop + iPhone + home router.').forEach((c) => children.push(c))

// 2.2
children.push(h3('2.2  File UKIPO trademark “THE ENGLISH HUB”'))
children.push(infoRow([['Time', '45 min + 5-min clearance search first'], ['Cost', '£270'], ['Unlocks', '£30k de-risk']]))
children.push(
  para([
    bold('Clearance search first: '),
    link('https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1?searchTerm=the+english+hub', 'trademarks.ipo.gov.uk'),
    run(' — screenshot the results; they should be clean.'),
  ]),
)
children.push(
  para([
    bold('Filing link: '),
    link('https://www.gov.uk/how-to-register-a-trade-mark', 'gov.uk/how-to-register-a-trade-mark'),
    run(' → click '),
    bold('Start now'),
    run('.'),
  ]),
)
children.push(
  para([
    bold('Pre-filled application: '),
    runMono('data-room/02-legal/ukipo-trademark-application-prefilled.md'),
  ]),
)
children.push(para(bold('Authoritative values:')))
children.push(bullet([run('Applicant: '), bold('Upskill Energy Limited'), run(', Co. '), bold('16511479')]))
children.push(bullet([run('Address: '), bold('110 Harington Road, Formby, Liverpool, L37 1PZ')]))
children.push(bullet([run('Mark: '), bold('THE ENGLISH HUB'), run(' (word mark, standard characters).')]))
children.push(bullet([run('Classes: '), bold('9, 41, 42'), run(' (software · education · SaaS).')]))
children.push(bullet([run('Email for correspondence: '), runMono('legal@theenglishhub.app')]))
promptBlock('I am filing a UK trademark for THE ENGLISH HUB as a word mark, owned by Upskill Energy Limited (Co. 16511479). Classes 9, 41, 42. I have pre-filled specifications for each class in a markdown file I will paste. For each field on the UKIPO form, tell me exactly which pre-filled value to paste. My registered address is 110 Harington Road, Formby, Liverpool, L37 1PZ. Total fee should be £270.').forEach((c) => children.push(c))

// 2.3
children.push(h3('2.3  Send the ICO address-change email'))
children.push(infoRow([['Time', '5 min'], ['Cost', '£0'], ['Unlocks', 'ICO + Companies House address alignment (claim-time risk mitigation)']]))
children.push(
  para([
    bold('Preferred route (faster): '),
    link('https://ico.org.uk/make-a-change/', 'ico.org.uk/make-a-change'),
    run(' (online form).'),
  ]),
)
children.push(para(bold('Email backup route:')))
children.push(bullet([bold('To: '), runMono('casework@ico.org.uk')]))
children.push(bullet([bold('CC: '), runMono('mail@ico.org.uk')]))
children.push(
  bullet([
    bold('Subject: '),
    runMono('Change of registered address — Upskill Energy Limited — ICO ref ZC016690'),
  ]),
)
children.push(
  para([
    bold('Pre-drafted email: '),
    runMono('business-docs/address-correction-emails.md'),
    run(' § Email 1.'),
  ]),
)
children.push(para(bold('Authoritative values:')))
children.push(bullet([run('ICO reference: '), bold('ZC016690')]))
children.push(bullet([run('Companies House: '), bold('16511479')]))
children.push(bullet([run('Current (correct) address: '), bold('110 Harington Road, Formby, Liverpool, L37 1PZ')]))
children.push(bullet([run('Previous (to replace): '), bold('8 Lindford Drive, Norwich, NR4 6LT')]))
promptBlock('I need to update the registered address on my ICO data protection record. ICO reference ZC016690, Upskill Energy Limited (Co. 16511479), trading as The English Hub. Previous address on ICO: 8 Lindford Drive, Norwich, NR4 6LT. New address (matches Companies House): 110 Harington Road, Formby, Liverpool, L37 1PZ. Also want to confirm processing purposes cover online EdTech + AI-assisted essay feedback + students aged 14+ + international transfers to US sub-processors. Draft me the exact email body or fill in the ICO form fields I am looking at.').forEach((c) => children.push(c))

// 2.4
children.push(h3('2.4  Call AXA about the PII profession description'))
children.push(infoRow([['Time', '15 min'], ['Cost', '£0'], ['Unlocks', 'PII claim-denial protection']]))
children.push(
  para([
    bold('Phone: '),
    bold('0330 024 1272'),
    run(' (AXA Commercial Lines, Mon–Fri 09:00–17:00).'),
  ]),
)
children.push(
  para([
    bold('Email fallback: '),
    runMono('commercial.customerservice@axa-insurance.co.uk'),
  ]),
)
children.push(para(bold('Policy details to quote:')))
children.push(bullet([run('Policy number: '), bold('550.295.859')]))
children.push(bullet([run('Named insured: '), bold('Upskill Energy'), run(' (update to '), bold('Upskill Energy Limited'), run(' at renewal).')]))
children.push(bullet([run('Current profession on record: '), bold('Training consultancy')]))
children.push(bullet([run('Policy dates: '), bold('15 Nov 2025 – 14 Nov 2026')]))
children.push(
  para([
    bold('Requested change: '),
    run('update profession to:'),
  ]),
)
children.push(
  new Paragraph({
    spacing: { before: 0, after: 160, line: 300 },
    indent: { left: 360 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 24, color: INK_400, space: 8 },
    },
    children: [
      run(
        '“Online educational technology platform providing GCSE and IGCSE English revision and AI-assisted essay feedback. Subscription SaaS. Users include students aged 14+, teachers, parents, and schools. Trading as The English Hub (theenglishhub.app).”',
        { italics: true },
      ),
    ],
  }),
)
children.push(
  para([
    bold('Also ask: '),
    run('quote for upgrading £500k limit to £1m and £2m at renewal.'),
  ]),
)
children.push(
  para([
    bold('Pre-drafted email: '),
    runMono('business-docs/address-correction-emails.md'),
    run(' § Email 2.'),
  ]),
)
promptBlock('I am on the phone with AXA about my PII policy 550.295.859 for Upskill Energy Limited. They have Training consultancy as my profession but I trade as The English Hub, an AI-EdTech SaaS for children aged 14+. The underwriter seems hesitant. Help me explain why this is a reasonable mid-term adjustment: (1) same business activity economically, (2) clearer description of actual operations, (3) non-disclosure risk if left as-is. Also prep me for likely pushback and what counter to give.').forEach((c) => children.push(c))

// ─── TIER 3 ───
children.push(h2('Tier 3 — This month  ·  unlocks Trustpilot and testimonials', TIER3))

// 3.1
children.push(h3('3.1  SendGrid domain authentication for theenglishhub.app'))
children.push(infoRow([['Time', '10 min'], ['Cost', '£0 (free tier)'], ['Requires', 'Cloudflare Email Routing done first (step 1.3)']]))
children.push(
  para([
    bold('Link: '),
    link('https://app.sendgrid.com/settings/sender_auth', 'app.sendgrid.com/settings/sender_auth'),
    run(' — log into your existing SendGrid account; you already have '),
    runMono('SENDGRID_API_KEY'),
    run(' per the env check.'),
  ]),
)
children.push(para(bold('What to do:')))
children.push(numberedItem([bold('Authenticate Your Domain '), run('→ choose '), runMono('theenglishhub.app'), run('.')]))
children.push(numberedItem([run('SendGrid generates 3 CNAME records → paste those into Cloudflare DNS (now that nameservers are Cloudflare).')]))
children.push(numberedItem([run('Click '), bold('Verify'), run('.')]))
promptBlock('I am setting up domain authentication in SendGrid for theenglishhub.app. My DNS is on Cloudflare (just migrated from Namecheap). SendGrid is asking me to add 3 CNAME records. I will paste the values SendGrid gives me — walk me through adding them to Cloudflare DNS without breaking my existing email-routing MX records.').forEach((c) => children.push(c))

// 3.2
children.push(h3('3.2  Claim the Trustpilot Business profile'))
children.push(infoRow([['Time', '10 min'], ['Cost', '£0 (free tier)'], ['Unlocks', 'Trustpilot rating on site + Google review rich snippets']]))
children.push(
  para([
    bold('Link: '),
    link('https://business.trustpilot.com/signup', 'business.trustpilot.com/signup'),
  ]),
)
children.push(para(bold('What to do:')))
children.push(numberedItem([run('Sign up with '), runMono('reviews@theenglishhub.app'), run(' (now live via Cloudflare Routing).')]))
children.push(numberedItem([run('Claim the profile for '), runMono('theenglishhub.app'), run('.')]))
children.push(numberedItem([run('Admin panel → '), bold('Settings → Company Info'), run(' → copy the '), bold('Business Unit ID'), run('.')]))
promptBlock('I am claiming the Trustpilot Business profile for theenglishhub.app at business.trustpilot.com. I want to (1) find my Business Unit ID, (2) set up the BGL invitation link template (not the paid AFS — free tier only), (3) configure the company info (name: The English Hub, entity: Upskill Energy Limited, Co. 16511479, based in UK). Walk me through the admin panel.').forEach((c) => children.push(c))

// 3.3
children.push(h3('3.3  Switch on Trustpilot in Vercel'))
children.push(infoRow([['Time', '5 min'], ['Cost', '£0'], ['Unlocks', 'Review invitations start sending']]))
children.push(
  para([
    bold('Link: '),
    link('https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables', 'vercel.com → english-hub → settings → environment variables'),
  ]),
)
children.push(
  para([
    bold('Env vars to set '),
    run('(all Production):'),
  ]),
)
children.push(
  makeTable(
    [3600, 5472],
    ['Key', 'Value'],
    [
      [[para(runMono('TRUSTPILOT_ENABLED'), { spacing: { before: 0, after: 0, line: 280 } })], [para(runMono('true'), { spacing: { before: 0, after: 0, line: 280 } })]],
      [[para(runMono('TRUSTPILOT_BUSINESS_UNIT_ID'), { spacing: { before: 0, after: 0, line: 280 } })], [para(run('<from Trustpilot admin, step 3.2>', { italics: true, color: INK_600 }), { spacing: { before: 0, after: 0, line: 280 } })]],
      [[para(runMono('TRUSTPILOT_API_KEY'), { spacing: { before: 0, after: 0, line: 280 } })], [para(run('<leave blank for free tier>', { italics: true, color: INK_600 }), { spacing: { before: 0, after: 0, line: 280 } })]],
      [[para(runMono('SENDGRID_SANDBOX'), { spacing: { before: 0, after: 0, line: 280 } })], [para(runMono('false'), { spacing: { before: 0, after: 0, line: 280 } })]],
    ],
  ),
)
children.push(para(run(' '), { spacing: { before: 0, after: 80 } }))
children.push(
  para([
    run('After saving, redeploy. First scheduled run: '),
    bold('03:45 UTC tomorrow'),
    run('.'),
  ]),
)
promptBlock('I am setting Trustpilot env vars in Vercel for my production environment. TRUSTPILOT_ENABLED=true, TRUSTPILOT_BUSINESS_UNIT_ID=<value>, SENDGRID_SANDBOX=false. Walk me through adding each one via the Vercel env vars UI. Only Production — I want Preview and Development to stay disabled so preview deployments never send real emails.').forEach((c) => children.push(c))

// 3.4
children.push(h3('3.4  Cyber insurance — 3 quotes'))
children.push(infoRow([['Time', '15 min'], ['Cost', '£300–£800/yr once bound'], ['Unlocks', 'School-procurement DPIA checkmark']]))
children.push(para(bold('Parallel links:')))
children.push(
  bullet([
    bold('Hiscox: '),
    link('https://www.hiscox.co.uk/business-insurance/cyber-insurance', 'hiscox.co.uk'),
    run(' (online quote in 10 min).'),
  ]),
)
children.push(
  bullet([
    bold('CFC Underwriting: '),
    link('https://www.cfcunderwriting.com/en-gb/products/cyber/', 'cfcunderwriting.com'),
    run(' (broker-placed only — email '),
    runMono('enquiries@cfcunderwriting.com'),
    run(').'),
  ]),
)
children.push(
  bullet([
    bold('Markel: '),
    link('https://www.markel.com/uk/business-insurance/cyber-data', 'markel.com'),
    run(' (email '),
    runMono('newbusiness@markeluk.com'),
    run(').'),
  ]),
)
children.push(
  para([
    bold('Pre-drafted email: '),
    runMono('business-docs/address-correction-emails.md'),
    run(' § Email 3.'),
  ]),
)
children.push(para(bold('Quote parameters:')))
children.push(bullet([run('Limit: '), bold('£250,000 and £500,000 each claim'), run(' (quote both).')]))
children.push(bullet([run('Retroactive date: '), bold('15 November 2025'), run(' (align with PII).')]))
children.push(bullet([run('Excess: '), bold('£500–£2,500')]))
promptBlock('I am requesting a cyber insurance quote on Hiscox for Upskill Energy Limited, Co. 16511479, trading as The English Hub. Online EdTech SaaS for GCSE English, serving students aged 14+, UK-only. Turnover <£50k currently, projecting <£500k Year 1. Sub-processors: Stripe, Anthropic, OpenAI, Supabase, Vercel, Cloudflare, SendGrid, Sentry, PostHog, GitHub. I want quotes at £250k and £500k limits. Walk me through each field and tell me which answer to pick for an EdTech SaaS of my profile.').forEach((c) => children.push(c))

// ─── TIER 4 ───
children.push(h2('Tier 4 — Nice-to-have  ·  unlocks Breakout path', TIER4))

// 4.1
children.push(h3('4.1  Send me 5 advisor target names'))
children.push(infoRow([['Time', '20 min'], ['Cost', '£0'], ['Unlocks', '£80k–£200k valuation (reduces founder-dependency discount)']]))
children.push(
  para([
    bold('What I need from you: '),
    run('5 real people you want to approach for your Academic Advisory Board. For each:'),
  ]),
)
children.push(
  makeTable(
    [2400, 6672],
    ['Field', 'Example'],
    [
      ['Full name', 'Dr Ruth Taylor'],
      ['Role + school', 'Head of English, St Paul\u2019s School'],
      ['The hook', 'Her Team English thread about AQA Paper 2 Q5 pedagogy, 14 Mar 2026'],
      ['Route', 'LinkedIn DM / work email / warm intro via [name]'],
    ],
  ),
)
children.push(para(run(' '), { spacing: { before: 0, after: 80 } }))
children.push(para(bold('Where to find candidates:')))
children.push(
  bullet([
    run('Team English hashtag on X: '),
    link('https://twitter.com/search?q=%23TeamEnglish', 'twitter.com/search?q=%23TeamEnglish'),
  ]),
)
children.push(
  bullet([
    run('EMC editorial board: '),
    link('https://www.englishandmedia.co.uk/about-us', 'englishandmedia.co.uk/about-us'),
  ]),
)
children.push(
  bullet([
    run('NATE committee: '),
    link('https://www.nate.org.uk/about-nate/', 'nate.org.uk/about-nate'),
  ]),
)
children.push(
  bullet([
    run('PTI (Prince\u2019s Teaching Institute): '),
    link('https://www.princes-ti.org.uk/', 'princes-ti.org.uk'),
  ]),
)
children.push(
  bullet([
    run('LinkedIn search: '),
    runMono('Head of English + AQA'),
    run(' or '),
    runMono('Head of English + Edexcel'),
  ]),
)
children.push(
  para([
    run('Once you send me the 5 names + hooks, I will return 5 bespoke 140-word emails and 7-day follow-ups, ready for you to paste from your Gmail account.'),
  ]),
)
promptBlock('I am looking for 5 Heads of English or senior examiners to approach for an Academic Advisory Board at The English Hub. Criteria: (1) serving HoD or recent examiner at AQA/Edexcel/OCR/CIE; (2) published voice (Team English, PTI, NATE, book, Tes article, conference talk); (3) not already advising a competing platform; (4) UK-based. Help me find 10 names and filter down to the strongest 5 based on these criteria. For each, find me (a) full name, (b) current role + school, (c) a specific recent piece of their work I can cite as the hook, (d) how to reach them (LinkedIn handle / work email / mutual connection).').forEach((c) => children.push(c))

// 4.2
children.push(h3('4.2  Capture 3 named + photographed testimonials'))
children.push(infoRow([['Time', '2–3 weeks'], ['Cost', '£0–£500 (photos optional)'], ['Unlocks', '£100k–£250k valuation']]))
children.push(
  para([
    bold('Consent form ready: '),
    runMono('data-room/03-privacy/testimonial-consent-form.md'),
  ]),
)
children.push(
  para([
    bold('Photo release ready: '),
    runMono('data-room/03-privacy/testimonial-photo-release.md'),
  ]),
)
children.push(para(bold('Target mix:')))
children.push(bullet(run('1 Head of English at a real UK secondary school (highest credibility).')))
children.push(bullet(run('1 teacher currently using the platform.')))
children.push(bullet(run('3 students (with parental consent if under 16).')))
promptBlock('Draft me an outreach email to a current English Hub user asking if they would be willing to share a named, photographed testimonial for our homepage and /for-schools page. They would need to fill in our GDPR consent form and photo release (linked in the email). In exchange, offer them a 3-month premium subscription extension and named recognition. 150 words, friendly and honest, British English.').forEach((c) => children.push(c))

// 4.3
children.push(h3('4.3  Register defensive domains'))
children.push(infoRow([['Time', '10 min'], ['Cost', '£30–£80/yr total']]))
children.push(
  para([
    bold('Link: '),
    link('https://www.namecheap.com/domains/registration/results/?domain=theenglishhub', 'namecheap.com search'),
    run(' (you already use Namecheap).'),
  ]),
)
children.push(para(bold('Domains to check and register if available:')))
children.push(bullet([runMono('theenglishhub.co.uk'), run(' (UK SMB credibility).')]))
children.push(bullet([runMono('theenglishhub.com'), run(' (if available).')]))
children.push(bullet([runMono('the-english-hub.com'), run(' (typo-squat defence).')]))
children.push(bullet([runMono('theenglish-hub.app'), run(' (typo-squat defence).')]))
promptBlock('I am at Namecheap checking availability for defensive domain registrations for my brand The English Hub. Already own theenglishhub.app. Want to acquire: .co.uk, .com, the-english-hub.com, theenglish-hub.app. Check availability for each, tell me which to prioritise buying based on SEO + typo-squat defence, and confirm total annual renewal cost.').forEach((c) => children.push(c))

// ─── MASTER TRACKER ───
children.push(h2('Master tracker', INK_900))
children.push(para(run('Mark each as you complete.', { italics: true, color: INK_600 })))

const trackerItems = [
  '1.1  Supabase migration (2 min)',
  '1.2  CRON_SECRET in Vercel (3 min)',
  '1.3  Cloudflare Email Routing — 8 aliases (15 min)',
  '2.1  Cyber Essentials filed (£320, 20 min submit + self-assess)',
  '2.2  UKIPO trademark filed (£270, 45 min)',
  '2.3  ICO address update sent (5 min)',
  '2.4  AXA profession updated (15 min call)',
  '3.1  SendGrid domain auth (10 min, after 1.3)',
  '3.2  Trustpilot Business profile claimed (10 min)',
  '3.3  Trustpilot env vars + TRUSTPILOT_ENABLED=true (5 min)',
  '3.4  Cyber insurance — 3 quotes requested (15 min)',
  '4.1  Five advisor names sent to me (20 min)',
  '4.2  First 3 testimonials captured (2–3 weeks)',
  '4.3  Defensive domains registered (10 min)',
]
trackerItems.forEach((t) => children.push(trackerItem(t)))

children.push(para(run(' '), { spacing: { before: 0, after: 120 } }))
children.push(
  new Paragraph({
    spacing: { before: 0, after: 80, line: 300 },
    shading: { fill: INK_50, type: ShadingType.CLEAR, color: 'auto' },
    border: {
      top: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
      left: { style: BorderStyle.SINGLE, size: 24, color: CLAY_600, space: 4 },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
      right: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
    },
    children: [
      bold('Hard spend to complete Tiers 1–3: '),
      run('£590 + £300–£800/yr cyber insurance.'),
    ],
  }),
)
children.push(
  new Paragraph({
    spacing: { before: 0, after: 240, line: 300 },
    shading: { fill: INK_50, type: ShadingType.CLEAR, color: 'auto' },
    border: {
      top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
      left: { style: BorderStyle.SINGLE, size: 24, color: CLAY_600, space: 4 },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
      right: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
    },
    children: [
      bold('Valuation uplift once all done: '),
      run('+£400k–£900k versus v3 baseline.'),
    ],
  }),
)

// ─── WHEN YOU FINISH ───
children.push(h2NoBreak('When you finish each item, tell me'))
children.push(
  para(run('Ping me with the relevant confirmation and I will do the downstream codebase updates in one sweep.')),
)
children.push(
  makeTable(
    [3600, 5472],
    ['Your signal', 'What I do next'],
    [
      ['“Supabase migration done”', 'Verify table + add a dashboard widget.'],
      ['“CRON_SECRET set”', 'Smoke-test both Trustpilot crons end-to-end.'],
      ['“Email routing live”', 'Update ToS + privacy policy + sub-processor list to cite the new aliases.'],
      ['“CE certified”', 'Add the badge to footer + /for-schools + /pricing.'],
      ['“TM filed — app no ____”', 'Update trademark-register.md.'],
      ['“TM registered”', 'Change ™ to ® site-wide.'],
      ['“Here are 5 advisor names”', 'Write 5 bespoke first emails and follow-ups.'],
    ],
  ),
)
children.push(para(run(' '), { spacing: { before: 0, after: 100 } }))
children.push(
  para(
    run(
      'Everything is scaffolded. The remaining work is almost entirely external — services, filings, humans. I handle the codebase updates.',
      { italics: true, color: INK_600 },
    ),
  ),
)

// ── Document ──────────────────────────────────────────────────────────
const doc = new Document({
  creator: 'The English Hub',
  title: 'The English Hub — Completion Checklist',
  description: 'Printable completion checklist with direct links and Claude-for-Chrome prompts',
  styles: {
    default: {
      document: { run: { font: 'Arial', size: 22, color: INK_700 } },
    },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 40, bold: true, font: 'Arial', color: INK_900 },
        paragraph: { spacing: { before: 0, after: 240 }, outlineLevel: 0 },
      },
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, font: 'Arial', color: INK_900 },
        paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 1 },
      },
      {
        id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, font: 'Arial', color: INK_900 },
        paragraph: { spacing: { before: 320, after: 120 }, outlineLevel: 2 },
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
            text: '\u2022',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 540, hanging: 300 } } },
          },
        ],
      },
      {
        reference: 'numbers',
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: '%1.',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 540, hanging: 300 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: PAGE_W, height: PAGE_H, orientation: PageOrientation.PORTRAIT },
          margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              spacing: { before: 0, after: 0, line: 240 },
              tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
              border: {
                bottom: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
              },
              children: [
                new TextRun({ text: 'The English Hub — Completion Checklist', font: 'Arial', size: 18, color: INK_600 }),
                new TextRun({ text: '\t', font: 'Arial', size: 18 }),
                new TextRun({ text: 'Upskill Energy Limited · Co. 16511479', font: 'Arial', size: 18, color: INK_600 }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              spacing: { before: 0, after: 0, line: 240 },
              tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_W }],
              border: {
                top: { style: BorderStyle.SINGLE, size: 4, color: INK_200, space: 4 },
              },
              children: [
                new TextRun({ text: '19 April 2026', font: 'Arial', size: 18, color: INK_400 }),
                new TextRun({ text: '\t', font: 'Arial', size: 18 }),
                new TextRun({ text: 'Page ', font: 'Arial', size: 18, color: INK_400 }),
                new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 18, color: INK_400 }),
                new TextRun({ text: ' of ', font: 'Arial', size: 18, color: INK_400 }),
                new TextRun({ children: [PageNumber.TOTAL_PAGES], font: 'Arial', size: 18, color: INK_400 }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
})

Packer.toBuffer(doc).then((buf) => {
  const outPath = path.join(__dirname, 'COMPLETION-CHECKLIST.docx')
  fs.writeFileSync(outPath, buf)
  console.log('Wrote', outPath, '· size', buf.length, 'bytes')
})
