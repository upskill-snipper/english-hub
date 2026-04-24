// Build a single-page A4 portrait reference card.
// Output: COMPLETION-ONE-PAGE.docx — fits on one side of A4 when printed.
const fs = require('fs')
const path = require('path')
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, LevelFormat, ExternalHyperlink, PageOrientation,
} = require('docx')

// ── Page setup: A4 portrait, 0.5 inch (720 DXA) margins all round.
//    Content width = 11906 - 720*2 = 10466 DXA.
const PAGE_W = 11906
const PAGE_H = 16838
const M = 720
const CONTENT_W = PAGE_W - 2 * M // 10466

// Column widths — sum MUST equal CONTENT_W
const COLS = {
  num: 700,       // "🔴 1.1"
  task: 2000,     // Task name
  cost: 1200,     // £ · time
  link: 3000,     // URL
  prompt: 3566,   // Claude prompt
}
// Verify
const colSum = Object.values(COLS).reduce((a, b) => a + b, 0)
if (colSum !== CONTENT_W) {
  console.warn(`Column widths sum ${colSum}, expected ${CONTENT_W}`)
}

// ── Styling helpers ─────────────────────────────────────────────
const BORDER = { style: BorderStyle.SINGLE, size: 2, color: 'B0B0B0' }
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER }
const HEADER_BORDER = { style: BorderStyle.SINGLE, size: 4, color: '444444' }
const HEADER_BORDERS = { top: HEADER_BORDER, bottom: HEADER_BORDER, left: HEADER_BORDER, right: HEADER_BORDER }

const CELL_MARGIN = { top: 40, bottom: 40, left: 80, right: 80 }

const t = (text, opts = {}) => new TextRun({ text, font: 'Arial', size: 16, ...opts })
const tS = (text, opts = {}) => new TextRun({ text, font: 'Arial', size: 14, ...opts })  // 7pt
const tXS = (text, opts = {}) => new TextRun({ text, font: 'Arial', size: 13, ...opts }) // 6.5pt

const para = (runs, opts = {}) =>
  new Paragraph({ children: Array.isArray(runs) ? runs : [runs], spacing: { before: 0, after: 0, line: 220 }, ...opts })

const link = (href, display) =>
  new ExternalHyperlink({
    link: href,
    children: [new TextRun({ text: display, font: 'Arial', size: 14, color: '0070C0', underline: {} })],
  })

const cell = (children, widthDxa, shade) =>
  new TableCell({
    borders: BORDERS,
    width: { size: widthDxa, type: WidthType.DXA },
    margins: CELL_MARGIN,
    shading: shade ? { fill: shade, type: ShadingType.CLEAR, color: 'auto' } : undefined,
    children: Array.isArray(children) ? children : [children],
  })

const headerCell = (text, widthDxa) =>
  new TableCell({
    borders: HEADER_BORDERS,
    width: { size: widthDxa, type: WidthType.DXA },
    margins: CELL_MARGIN,
    shading: { fill: '2E3440', type: ShadingType.CLEAR, color: 'auto' },
    children: [para(t(text, { bold: true, color: 'FFFFFF', size: 15 }))],
  })

// ── Data ────────────────────────────────────────────────────────
const ROWS = [
  // Tier 1 — shaded red
  ['🔴 1.1', 'Supabase migration', '£0 · 2 min',
    { href: 'https://supabase.com/dashboard/project/_/sql/new', display: 'supabase.com → SQL' },
    'Paste my migration SQL from supabase/migrations/20260419_trustpilot_invites.sql and help me run it — tell me if there\u2019s an error.',
    'FFE8E8'],

  ['🔴 1.2', 'CRON_SECRET in Vercel', '£0 · 3 min',
    { href: 'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables', display: 'vercel.com → env vars' },
    'Add CRON_SECRET as Production-only env var with a 64-char random value — walk me through clicking each button.',
    'FFE8E8'],

  ['🔴 1.3', 'Cloudflare Email Routing', '£0 · 15 min',
    { href: 'https://dash.cloudflare.com/sign-up', display: 'cloudflare.com + namecheap.com' },
    'Set up 8 aliases (dpo/security/legal/privacy/safeguarding/reviews/accessibility/press) all forwarding to info@upskillenergy.com for theenglishhub.app. DNS on Namecheap → switch nameservers to Cloudflare first.',
    'FFE8E8'],

  // Tier 2 — shaded orange
  ['🟠 2.1', 'Cyber Essentials', '£320 · 20m+self',
    { href: 'https://iasme.co.uk/cyber-essentials/apply-for-cyber-essentials/', display: 'iasme.co.uk → apply' },
    'Fill IASME SAQ for Upskill Energy Ltd Co. 16511479, 110 Harington Road Formby L37 1PZ. Stack: Next.js/Vercel/Supabase/Stripe/Anthropic/OpenAI/Cloudflare/SendGrid/Sentry/PostHog/GitHub. Pre-filled answers at iasme-saq-prefilled.md.',
    'FFF1E0'],

  ['🟠 2.2', 'UKIPO trademark', '£270 · 45 min',
    { href: 'https://www.gov.uk/how-to-register-a-trade-mark', display: 'gov.uk → trade mark' },
    'File \u201CTHE ENGLISH HUB\u201D word mark, classes 9+41+42, for Upskill Energy Ltd Co. 16511479. Pre-filled specs in ukipo-trademark-application-prefilled.md. Run clearance search first: trademarks.ipo.gov.uk',
    'FFF1E0'],

  ['🟠 2.3', 'ICO address update', '£0 · 5 min',
    { href: 'https://ico.org.uk/make-a-change/', display: 'ico.org.uk/make-a-change/' },
    'Update ICO ref ZC016690 address from 8 Lindford Drive Norwich NR4 6LT to 110 Harington Road Formby L37 1PZ — fill the form OR draft the email to casework@ico.org.uk.',
    'FFF1E0'],

  ['🟠 2.4', 'AXA PII profession call', '£0 · 15 min',
    { href: 'tel:03300241272', display: '\u260E 0330 024 1272' },
    'Phone prep: change PII 550.295.859 profession from \u201CTraining consultancy\u201D to \u201COnline EdTech SaaS / AI essay feedback / children 14+\u201D. Handle underwriter pushback. Also get £1m + £2m limit quotes for renewal.',
    'FFF1E0'],

  // Tier 3 — shaded yellow
  ['🟡 3.1', 'SendGrid domain auth', '£0 · 10 min',
    { href: 'https://app.sendgrid.com/settings/sender_auth', display: 'sendgrid.com → auth' },
    'Authenticate theenglishhub.app — add 3 CNAME records to Cloudflare without breaking the Email Routing MX records. Requires step 1.3 done first.',
    'FFF9E0'],

  ['🟡 3.2', 'Trustpilot Business profile', '£0 · 10 min',
    { href: 'https://business.trustpilot.com/signup', display: 'business.trustpilot.com' },
    'Claim profile for theenglishhub.app (sign up as reviews@theenglishhub.app). Find Business Unit ID. Entity: Upskill Energy Ltd, Co. 16511479.',
    'FFF9E0'],

  ['🟡 3.3', 'Flip TRUSTPILOT_ENABLED', '£0 · 5 min',
    { href: 'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables', display: 'vercel.com → env vars' },
    'Set TRUSTPILOT_ENABLED=true, TRUSTPILOT_BUSINESS_UNIT_ID=<from step 3.2>, SENDGRID_SANDBOX=false — Production only. Then redeploy.',
    'FFF9E0'],

  ['🟡 3.4', 'Cyber insurance quotes', '£300\u2013£800/yr · 15 min',
    { href: 'https://www.hiscox.co.uk/business-insurance/cyber-insurance', display: 'hiscox.co.uk + CFC + Markel' },
    'Get cyber quote for EdTech SaaS Upskill Energy Ltd Co. 16511479 (The English Hub). £250k + £500k limits, retroactive 15 Nov 2025. Sub-processors listed in address-correction-emails.md \u00A7 Email 3.',
    'FFF9E0'],

  // Tier 4 — shaded green
  ['🟢 4.1', 'Send me 5 advisor names', '£0 · 20 min',
    { href: 'https://twitter.com/search?q=%23TeamEnglish', display: 'Team English / PTI / LinkedIn' },
    'Find 5 UK Heads of English / senior examiners for advisory board. Each: full name, school, the hook (specific work of theirs), contact route (LinkedIn / work email / mutual intro). Send to me — I return 5 bespoke emails.',
    'E8F5E8'],

  ['🟢 4.2', 'First named testimonials', '£0\u2013£500 · 2\u20133 wk',
    { href: '', display: 'consent form + photo release ready' },
    'Draft outreach email to existing The English Hub users asking for named + photographed testimonial for homepage + /for-schools, in exchange for 3-month subscription extension and named recognition.',
    'E8F5E8'],

  ['🟢 4.3', 'Defensive domains', '£30\u2013£80/yr · 10 min',
    { href: 'https://www.namecheap.com/domains/registration/results/?domain=theenglishhub', display: 'namecheap.com' },
    'Check availability for theenglishhub.co.uk, theenglishhub.com, the-english-hub.com, theenglish-hub.app. Prioritise by SEO + typo-squat defence value.',
    'E8F5E8'],
]

// ── Build table ─────────────────────────────────────────────────
const headerRow = new TableRow({
  tableHeader: true,
  children: [
    headerCell('#', COLS.num),
    headerCell('Task', COLS.task),
    headerCell('£ · Time', COLS.cost),
    headerCell('Link', COLS.link),
    headerCell('Claude-for-Chrome prompt', COLS.prompt),
  ],
})

const dataRows = ROWS.map((row) => {
  const [num, task, cost, linkObj, prompt, shade] = row
  const linkPara = linkObj.href
    ? para([link(linkObj.href, linkObj.display)])
    : para(tS(linkObj.display, { italics: true, color: '606060' }))
  return new TableRow({
    children: [
      cell(para(t(num, { bold: true })), COLS.num, shade),
      cell(para(t(task, { bold: true })), COLS.task, shade),
      cell(para(tS(cost)), COLS.cost, shade),
      cell(linkPara, COLS.link, shade),
      cell(para(tS(prompt)), COLS.prompt, shade),
    ],
  })
})

const mainTable = new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: Object.values(COLS),
  rows: [headerRow, ...dataRows],
})

// ── Top banner: fixed identifiers (single compact line) ─────────
const identifierBanner = new Paragraph({
  spacing: { before: 0, after: 80, line: 220 },
  alignment: AlignmentType.CENTER,
  children: [
    tS('Upskill Energy Limited', { bold: true }),
    tS(' \u00B7 Co. '),
    tS('16511479', { bold: true }),
    tS(' \u00B7 ICO '),
    tS('ZC016690', { bold: true }),
    tS(' \u00B7 AXA PII '),
    tS('550.295.859', { bold: true }),
    tS(' \u00B7 110 Harington Road, Formby, Liverpool, L37 1PZ'),
  ],
})

// ── Bottom footer: spend + signal-back ──────────────────────────
const spendFooter = new Paragraph({
  spacing: { before: 100, after: 0, line: 200 },
  alignment: AlignmentType.CENTER,
  children: [
    tXS('Total hard spend Tiers 1\u20133: '),
    tXS('£590', { bold: true }),
    tXS('  \u00B7  Total founder time Tiers 1\u20133: '),
    tXS('~3h 45m', { bold: true }),
    tXS('  \u00B7  Valuation uplift vs v3 baseline: '),
    tXS('+£400k\u2013£900k', { bold: true }),
  ],
})

const signalFooter = new Paragraph({
  spacing: { before: 60, after: 0, line: 200 },
  alignment: AlignmentType.CENTER,
  children: [
    tXS('Signal me when each completes: ', { italics: true }),
    tXS('"Migration done"', { italics: true }),
    tXS(' \u00B7 '),
    tXS('"CRON_SECRET set"', { italics: true }),
    tXS(' \u00B7 '),
    tXS('"Email routing live"', { italics: true }),
    tXS(' \u00B7 '),
    tXS('"CE certified"', { italics: true }),
    tXS(' \u00B7 '),
    tXS('"TM filed \u2014 app no ____"', { italics: true }),
    tXS(' \u00B7 '),
    tXS('"5 advisor names: ..."', { italics: true }),
  ],
})

// ── Document ────────────────────────────────────────────────────
const doc = new Document({
  creator: 'The English Hub',
  title: 'The English Hub — Completion Checklist (one-page)',
  description: 'Print-friendly A4 reference card',
  styles: {
    default: { document: { run: { font: 'Arial', size: 16 } } },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, font: 'Arial', color: '1F2937' },
        paragraph: { spacing: { before: 0, after: 80 }, alignment: AlignmentType.CENTER, outlineLevel: 0 },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: PAGE_W, height: PAGE_H, orientation: PageOrientation.PORTRAIT },
          margin: { top: M, right: M, bottom: M, left: M },
        },
      },
      children: [
        new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 0, after: 40 },
          alignment: AlignmentType.CENTER,
          children: [t('The English Hub \u2014 Completion Checklist', { bold: true, size: 28 })],
        }),
        new Paragraph({
          spacing: { before: 0, after: 80, line: 220 },
          alignment: AlignmentType.CENTER,
          children: [tS('Single-page reference \u00B7 Use with Claude-for-Chrome: open the link, paste the prompt', { italics: true, color: '606060' })],
        }),
        identifierBanner,
        mainTable,
        spendFooter,
        signalFooter,
      ],
    },
  ],
})

Packer.toBuffer(doc).then((buf) => {
  const outPath = path.join(__dirname, 'COMPLETION-ONE-PAGE.docx')
  fs.writeFileSync(outPath, buf)
  console.log('Wrote', outPath, 'size', buf.length, 'bytes')
})
