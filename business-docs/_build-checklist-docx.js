// Build COMPLETION-CHECKLIST.docx from the markdown source.
// British English, print-friendly, clear heading hierarchy.
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, PageOrientation, LevelFormat,
  ExternalHyperlink, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, PageBreak, TabStopType, TabStopPosition
} = require('docx');

const OUT = 'D:\\Coding\\english-hub\\business-docs\\COMPLETION-CHECKLIST.docx';

// ---------- helpers ----------
const FONT = 'Calibri';
const MONO = 'Consolas';
const BRAND = '1F4E79';
const MUTED = '595959';
const RULE  = 'BFBFBF';
const TABLE_HEAD_FILL = 'D9E2F3';
const CODE_FILL = 'F2F2F2';

// Page: US Letter portrait, 1" margins. Content width = 12240 - 2880 = 9360 DXA.
const CONTENT_WIDTH = 9360;

const border = { style: BorderStyle.SINGLE, size: 4, color: RULE };
const cellBorders = { top: border, bottom: border, left: border, right: border };

// Parse inline markdown (links, bold, italic, code) to an array of runs.
function parseInline(text) {
  const runs = [];
  // Tokenise iteratively
  let i = 0;
  const push = (t, opts = {}) => {
    if (!t) return;
    runs.push(new TextRun({ text: t, font: opts.font || FONT, ...opts }));
  };
  while (i < text.length) {
    // Hyperlink [label](url)
    const link = text.slice(i).match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (link) {
      const label = link[1];
      const url = link[2];
      if (/^https?:\/\//.test(url)) {
        runs.push(new ExternalHyperlink({
          link: url,
          children: [new TextRun({ text: label, style: 'Hyperlink', font: FONT })]
        }));
      } else {
        push(label, { italics: true, color: BRAND });
      }
      i += link[0].length; continue;
    }
    // Bold **x**
    const b = text.slice(i).match(/^\*\*([^*]+)\*\*/);
    if (b) { push(b[1], { bold: true }); i += b[0].length; continue; }
    // Italic *x*
    const it = text.slice(i).match(/^\*([^*]+)\*/);
    if (it) { push(it[1], { italics: true }); i += it[0].length; continue; }
    // Inline code `x`
    const c = text.slice(i).match(/^`([^`]+)`/);
    if (c) { push(c[1], { font: MONO, shading: { type: ShadingType.CLEAR, fill: CODE_FILL } }); i += c[0].length; continue; }
    // Plain char up to next special
    const next = text.slice(i).search(/\[|\*\*|\*|`/);
    if (next === -1) { push(text.slice(i)); break; }
    if (next === 0) { push(text[i]); i += 1; continue; }
    push(text.slice(i, i + next)); i += next;
  }
  return runs;
}

// ---------- content builders ----------
const children = [];

const pushP = (opts) => children.push(new Paragraph(opts));

// Title block
pushP({
  alignment: AlignmentType.CENTER,
  spacing: { before: 0, after: 120 },
  children: [new TextRun({ text: 'The English Hub', bold: true, size: 48, color: BRAND, font: FONT })]
});
pushP({
  alignment: AlignmentType.CENTER,
  spacing: { after: 120 },
  children: [new TextRun({ text: 'Completion Checklist', bold: true, size: 36, color: BRAND, font: FONT })]
});
pushP({
  alignment: AlignmentType.CENTER,
  spacing: { after: 240 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: BRAND, space: 6 } },
  children: [new TextRun({ text: 'Everything outstanding, with direct links and Claude-for-Chrome prompts.', italics: true, color: MUTED, font: FONT, size: 22 })]
});

// Intro paragraph
pushP({
  spacing: { after: 120 },
  children: parseInline('Sorted by priority × leverage. Most items under 15 minutes. Full execution = ~4 hours your time + £590 hard spend.')
});
pushP({
  spacing: { after: 240 },
  children: [
    ...parseInline('**How to use the Claude prompts:** install '),
    new ExternalHyperlink({ link: 'https://claude.ai/chrome', children: [new TextRun({ text: 'Claude for Chrome', style: 'Hyperlink', font: FONT })] }),
    new TextRun({ text: ' (or use claude.ai in a second tab), open the target page first, then paste the prompt. Claude sees the page and walks you through each field.', font: FONT })
  ]
});

// Helpers for sections
function h1(text, color) {
  pushP({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 180 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: color || BRAND, space: 4 } },
    children: [new TextRun({ text, bold: true, size: 32, color: color || BRAND, font: FONT })]
  });
}

function h2(text) {
  pushP({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    keepNext: true,
    children: [new TextRun({ text, bold: true, size: 26, color: BRAND, font: FONT })]
  });
}

function metaLine(time, cost, unlocks) {
  const runs = [];
  runs.push(new TextRun({ text: 'Time: ', bold: true, font: FONT, size: 20, color: MUTED }));
  runs.push(new TextRun({ text: time, font: FONT, size: 20, color: MUTED }));
  runs.push(new TextRun({ text: '   •   ', font: FONT, size: 20, color: MUTED }));
  runs.push(new TextRun({ text: 'Cost: ', bold: true, font: FONT, size: 20, color: MUTED }));
  runs.push(new TextRun({ text: cost, font: FONT, size: 20, color: MUTED }));
  if (unlocks) {
    runs.push(new TextRun({ text: '   •   ', font: FONT, size: 20, color: MUTED }));
    runs.push(new TextRun({ text: 'Unlocks: ', bold: true, font: FONT, size: 20, color: MUTED }));
    runs.push(new TextRun({ text: unlocks, font: FONT, size: 20, color: MUTED }));
  }
  pushP({ spacing: { after: 120 }, children: runs });
}

function linkLine(label, url) {
  pushP({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: label + ' ', bold: true, font: FONT }),
      new ExternalHyperlink({ link: url, children: [new TextRun({ text: url, style: 'Hyperlink', font: FONT })] })
    ]
  });
}

function para(md) {
  pushP({ spacing: { after: 120 }, children: parseInline(md) });
}

function bullet(md) {
  pushP({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 60 },
    children: parseInline(md)
  });
}

function numbered(md) {
  pushP({
    numbering: { reference: 'numbers', level: 0 },
    spacing: { after: 60 },
    children: parseInline(md)
  });
}

function codeBlock(lines) {
  // Render as a single-cell table with shading for print-friendly code look.
  const cellChildren = lines.map(line => new Paragraph({
    spacing: { after: 0, line: 260 },
    children: [new TextRun({ text: line.length ? line : ' ', font: MONO, size: 18 })]
  }));
  children.push(new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [CONTENT_WIDTH],
    rows: [new TableRow({
      children: [new TableCell({
        borders: cellBorders,
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        shading: { fill: CODE_FILL, type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 180, right: 180 },
        children: cellChildren
      })]
    })]
  }));
  pushP({ spacing: { after: 120 }, children: [new TextRun('')] });
}

function blockquote(text) {
  pushP({
    spacing: { before: 60, after: 120 },
    indent: { left: 360 },
    border: { left: { style: BorderStyle.SINGLE, size: 18, color: BRAND, space: 10 } },
    children: [new TextRun({ text, italics: true, color: MUTED, font: FONT })]
  });
}

function claudePrompt(text) {
  pushP({
    spacing: { before: 120, after: 60 },
    children: [new TextRun({ text: 'Claude prompt:', bold: true, font: FONT, color: BRAND })]
  });
  blockquote(text);
}

function table(headers, rows, colWidths) {
  const widths = colWidths || headers.map(() => Math.floor(CONTENT_WIDTH / headers.length));
  // ensure sum equals CONTENT_WIDTH
  const sum = widths.reduce((a,b)=>a+b,0);
  if (sum !== CONTENT_WIDTH) widths[widths.length-1] += (CONTENT_WIDTH - sum);

  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) => new TableCell({
      borders: cellBorders,
      width: { size: widths[i], type: WidthType.DXA },
      shading: { fill: TABLE_HEAD_FILL, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, font: FONT, size: 20 })] })]
    }))
  });
  const bodyRows = rows.map(r => new TableRow({
    children: r.map((cell, i) => new TableCell({
      borders: cellBorders,
      width: { size: widths[i], type: WidthType.DXA },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({ spacing: { after: 0 }, children: parseInline(cell) })]
    }))
  }));
  children.push(new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: widths,
    rows: [headerRow, ...bodyRows]
  }));
  pushP({ spacing: { after: 120 }, children: [new TextRun('')] });
}

function hr() {
  pushP({
    spacing: { before: 120, after: 240 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 4 } },
    children: [new TextRun('')]
  });
}

// ===================== TIER 1 =====================
h1('TIER 1 — Today (45 min, £0)', 'C00000');
para('These three unlock everything else downstream.');

// 1.1
h2('1.1  Run the Supabase migration for Trustpilot dedup table');
metaLine('2 min', '£0', 'Trustpilot audit trail starts recording');
linkLine('Link:', 'https://supabase.com/dashboard/project/_/sql/new');
para('**What to do:** Open your Supabase project → SQL Editor → New query → paste the SQL below → Run.');
para('**SQL to paste** (from `supabase/migrations/20260419_trustpilot_invites.sql`):');
codeBlock([
  "create table if not exists public.trustpilot_invite (",
  "  id uuid primary key default gen_random_uuid(),",
  "  user_id uuid not null references auth.users(id) on delete cascade,",
  "  trigger text not null check (",
  "    trigger in (",
  "      'student_first_mark',",
  "      'student_first_mark_followup_7d',",
  "      'student_first_mock',",
  "      'student_90d_retention',",
  "      'teacher_first_bulk_mark',",
  "      'parent_30d_dashboard'",
  "    )",
  "  ),",
  "  status text not null default 'sent' check (status in ('sent', 'skipped', 'failed')),",
  "  sent_at timestamptz not null default now(),",
  "  message_id text,",
  "  error text,",
  "  skipped_reason text,",
  "  unique (user_id, trigger)",
  ");",
  "",
  "create index if not exists trustpilot_invite_user_idx on public.trustpilot_invite(user_id);",
  "create index if not exists trustpilot_invite_trigger_idx on public.trustpilot_invite(trigger);",
  "create index if not exists trustpilot_invite_sent_at_idx on public.trustpilot_invite(sent_at desc);",
  "",
  "alter table public.trustpilot_invite enable row level security;",
  "",
  "create policy \"service role manages trustpilot_invite\"",
  "  on public.trustpilot_invite",
  "  for all",
  "  to service_role",
  "  using (true)",
  "  with check (true);"
]);
para('**Claude prompt** (if the SQL errors):');
blockquote("I just ran this Supabase migration and got the error shown on screen. Help me diagnose what's wrong. The migration creates a trustpilot_invite table. Show me the exact fix — I'll paste it back into the SQL editor.");
hr();

// 1.2
h2('1.2  Set CRON_SECRET in Vercel');
metaLine('3 min', '£0', 'ALL Vercel cron jobs including the two new Trustpilot crons');
linkLine('Link:', 'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables');
para('**What to do:**');
numbered('Click **"Add Another"**');
numbered('Key: `CRON_SECRET`');
numbered('Value: a long random string — generate one at [1Password Password Generator](https://1password.com/password-generator/) (64 chars, letters + digits, no symbols)');
numbered('Environments: **Production only** (leave Preview + Development unchecked)');
numbered('Save');
claudePrompt("I'm on the Vercel env vars page for my project english-hub. I need to add CRON_SECRET as a Production-only secret with a 64-character random value. Walk me through clicking the right buttons. The value field accepts any string — I want to use the strongest random string possible.");
para('**Then redeploy** — Vercel env var changes don\u2019t apply to existing deployments. Trigger a redeploy from the Deployments tab → latest deploy → three dots → **Redeploy**.');
hr();

// 1.3
h2('1.3  Cloudflare Email Routing (8 aliases)');
para('**Status: Complete 2026-04-21** — all 8 aliases live and forwarding to `info@upskillenergy.com`.');
metaLine('15 min', '£0', '`dpo@`, `security@`, `legal@`, `reviews@`, `privacy@`, `safeguarding@`, `accessibility@`, `press@` all working');
para('**Full walkthrough:** [business-docs/CLOUDFLARE-EMAIL-SETUP.md](./CLOUDFLARE-EMAIL-SETUP.md)');
para('**Key links:**');
bullet('Cloudflare signup: https://dash.cloudflare.com/sign-up');
bullet('Namecheap domain panel: https://ap.www.namecheap.com/domains/list (find `theenglishhub.app` → Manage → Nameservers)');
para('**Aliases (all forward to `info@upskillenergy.com`):**');
table(
  ['Alias', 'Purpose'],
  [
    ['`dpo@theenglishhub.app`', 'Data Protection Officer / ICO correspondence'],
    ['`security@theenglishhub.app`', 'Cyber Essentials / security issues'],
    ['`legal@theenglishhub.app`', 'UKIPO / contracts / legal'],
    ['`privacy@theenglishhub.app`', 'GDPR data-subject rights'],
    ['`safeguarding@theenglishhub.app`', 'KCSIE / child-safety reports'],
    ['`reviews@theenglishhub.app`', 'Trustpilot invitations from'],
    ['`accessibility@theenglishhub.app`', 'WCAG / a11y feedback'],
    ['`press@theenglishhub.app`', 'Media enquiries']
  ],
  [3360, 6000]
);
claudePrompt("I'm setting up Cloudflare Email Routing for theenglishhub.app. My current DNS is on Namecheap. I want these 8 aliases all forwarding to info@upskillenergy.com: dpo, security, legal, privacy, safeguarding, reviews, accessibility, press. Walk me through exactly what to click — I'm on [whatever screen I'm on]. Also enable the catch-all.");
hr();

// ===================== TIER 2 =====================
h1('TIER 2 — This week (90 min total, £590)', 'ED7D31');

// 2.1
h2('2.1  File Cyber Essentials certification');
metaLine('20 min + 2–3 hr self-assessment', '£320', '£150k–£300k valuation (school procurement)');
linkLine('Link:', 'https://iasme.co.uk/cyber-essentials/apply-for-cyber-essentials/');
para('**Pre-filled answers:** [business-docs/compliance/cyber-essentials/04-audit-prep/iasme-saq-prefilled.md](./compliance/cyber-essentials/04-audit-prep/iasme-saq-prefilled.md)');
para('**Authoritative values (paste exactly):**');
bullet('Legal name: **Upskill Energy Limited**');
bullet('Companies House: **16511479**');
bullet('Registered office: **110 Harington Road, Formby, Liverpool, L37 1PZ**');
bullet('Security contact: **security@theenglishhub.app** (create via Cloudflare Routing first — step 1.3)');
bullet('Sector: **Education**');
bullet('Size: **Micro (< 10 employees, < £632k turnover)**');
claudePrompt("I'm filling in the Cyber Essentials IASME self-assessment questionnaire for Upskill Energy Limited (Co. 16511479, trading as The English Hub). I have all my pre-filled answers in a markdown file I'll paste. For each question, tell me which pre-filled answer matches and confirm I'm answering consistently. My tech stack: Next.js on Vercel + Supabase + Stripe + Anthropic/OpenAI APIs + Cloudflare DNS + SendGrid + Sentry + PostHog + GitHub. Windows 11 laptop + iPhone + home router.");
hr();

// 2.2
h2('2.2  File UKIPO trademark "THE ENGLISH HUB"');
metaLine('45 min + 5-min clearance search first', '£270', '£30k de-risk');
para('**Clearance search first:** [trademarks.ipo.gov.uk search](https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1?searchTerm=the+english+hub) (screenshot results — should be clean)');
para('**Filing link:** [gov.uk/how-to-register-a-trade-mark](https://www.gov.uk/how-to-register-a-trade-mark) → click "Start now"');
para('**Pre-filled application:** [data-room/02-legal/ukipo-trademark-application-prefilled.md](../data-room/02-legal/ukipo-trademark-application-prefilled.md)');
para('**Authoritative values:**');
bullet('Applicant: **Upskill Energy Limited**, Co. **16511479**');
bullet('Address: **110 Harington Road, Formby, Liverpool, L37 1PZ**');
bullet('Mark: **THE ENGLISH HUB** (word mark, standard characters)');
bullet('Classes: **9, 41, 42** (software · education · SaaS)');
bullet('Email for correspondence: **legal@theenglishhub.app**');
claudePrompt("I'm filing a UK trademark for THE ENGLISH HUB as a word mark, owned by Upskill Energy Limited (Co. 16511479). Classes 9, 41, 42. I have pre-filled specifications for each class in a markdown file I'll paste. For each field on the UKIPO form, tell me exactly which pre-filled value to paste. My registered address is 110 Harington Road, Formby, Liverpool, L37 1PZ. Total fee should be £270.");
hr();

// 2.3
h2('2.3  Send ICO address-change email');
metaLine('5 min', '£0', 'ICO + Companies House address alignment (claim-time risk mitigation)');
para('**Preferred route (faster):** [ico.org.uk/make-a-change/](https://ico.org.uk/make-a-change/) (online form)');
para('**Email backup route:**');
bullet('**To:** `casework@ico.org.uk`');
bullet('**CC:** `mail@ico.org.uk`');
bullet('**Subject:** `Change of registered address — Upskill Energy Limited — ICO ref ZC016690`');
para('**Pre-drafted email:** [business-docs/address-correction-emails.md](./address-correction-emails.md) § Email 1');
para('**Authoritative values:**');
bullet('ICO reference: **ZC016690**');
bullet('Companies House: **16511479**');
bullet('Current (correct) address: **110 Harington Road, Formby, Liverpool, L37 1PZ**');
bullet('Previous (to replace): **8 Lindford Drive, Norwich, NR4 6LT**');
claudePrompt("I need to update the registered address on my ICO data protection record. ICO reference ZC016690, Upskill Energy Limited (Co. 16511479), trading as The English Hub. Previous address on ICO: 8 Lindford Drive, Norwich, NR4 6LT. New address (matches Companies House): 110 Harington Road, Formby, Liverpool, L37 1PZ. Also want to confirm processing purposes cover online EdTech + AI-assisted essay feedback + students aged 14+ + international transfers to US sub-processors. Draft me the exact email body or fill in the ICO form fields I'm looking at.");
hr();

// 2.4
h2('2.4  Call AXA about PII profession description');
metaLine('15 min', '£0', 'PII claim-denial protection');
para('**Phone:** **0330 024 1272** (AXA Commercial Lines, Mon–Fri 09:00–17:00)');
para('**Email fallback:** `commercial.customerservice@axa-insurance.co.uk`');
para('**Policy details to quote:**');
bullet('Policy number: **550.295.859**');
bullet('Named insured: **Upskill Energy** (update to **Upskill Energy Limited** at renewal)');
bullet('Current profession on record: **Training consultancy**');
bullet('Policy dates: **15 Nov 2025 – 14 Nov 2026**');
para('**Requested change:** Update profession to:');
blockquote('"Online educational technology platform providing GCSE and IGCSE English revision and AI-assisted essay feedback. Subscription SaaS. Users include students aged 14+, teachers, parents, and schools. Trading as The English Hub (theenglishhub.app)."');
para('**Also ask:** quote for upgrading £500k limit to £1m and £2m at renewal.');
para('**Pre-drafted email:** [business-docs/address-correction-emails.md](./address-correction-emails.md) § Email 2');
claudePrompt("I'm on the phone with AXA about my PII policy 550.295.859 for Upskill Energy Limited. They have Training consultancy as my profession but I trade as The English Hub, an AI-EdTech SaaS for children aged 14+. The underwriter seems hesitant. Help me explain why this is a reasonable midterm adjustment: (1) same business activity economically, (2) clearer description of actual operations, (3) non-disclosure risk if left as-is. Also prep me for likely pushback and what counter to give.");
hr();

// ===================== TIER 3 =====================
h1('TIER 3 — This month (varies, unlocks Trustpilot + testimonials)', 'BF8F00');

// 3.1
h2('3.1  SendGrid domain authentication for theenglishhub.app');
metaLine('10 min', '£0 (free tier)', 'Cloudflare Email Routing done first (step 1.3)');
linkLine('Link:', 'https://app.sendgrid.com/settings/sender_auth');
para('(log into your existing SendGrid account — you already have `SENDGRID_API_KEY` per the env check)');
para('**What to do:**');
numbered('**Authenticate Your Domain** → Choose `theenglishhub.app`');
numbered('SendGrid generates 3 CNAME records → paste those into Cloudflare DNS (now that nameservers are Cloudflare)');
numbered('Click Verify');
claudePrompt("I'm setting up domain authentication in SendGrid for theenglishhub.app. My DNS is on Cloudflare (just migrated from Namecheap). SendGrid is asking me to add 3 CNAME records. I'll paste the values SendGrid gives me — walk me through adding them to Cloudflare DNS without breaking my existing email routing MX records.");
hr();

// 3.2
h2('3.2  Claim Trustpilot Business profile');
para('**Status: Complete 2026-04-21.** Profile claimed; BCC-invite email live at `theenglishhub.app+45777e1d0c@invite.trustpilot.com` (stored in `TRUSTPILOT_INVITE_EMAIL`); InviteJS integration key `v5nUhdVBgegtcCLG` (stored in `NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY`); Business Unit ID `69e9a869c2bb1d03a6752578` (stored in `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` web + `EXPO_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` mobile EAS secret). Verification ID pending.');
metaLine('10 min', '£0 (free tier)', 'Trustpilot rating on site + Google review rich snippets');
linkLine('Link:', 'https://business.trustpilot.com/signup');
para('**What to do:**');
numbered('Sign up with `reviews@theenglishhub.app` (now live via Cloudflare Routing)');
numbered('Claim the profile for `theenglishhub.app`');
numbered('Admin panel → **Settings → Company Info** → copy the **Business Unit ID**');
claudePrompt("I'm claiming the Trustpilot Business profile for theenglishhub.app at business.trustpilot.com. I want to (1) find my Business Unit ID, (2) set up the BGL invitation link template (not the paid AFS — free tier only), (3) configure the company info (name: The English Hub, entity: Upskill Energy Limited, Co. 16511479, based in UK). Walk me through the admin panel.");
hr();

// 3.3
h2('3.3  Switch on Trustpilot in Vercel');
para('**Status: Complete 2026-04-21** — env vars captured in `.env.example` with real values; production Vercel values populated from the same source.');
metaLine('5 min', '£0', 'Review invitations start sending');
linkLine('Link:', 'https://vercel.com/upskill-snippers-projects/english-hub/settings/environment-variables');
para('**Env vars to set (all Production):**');
table(
  ['Key', 'Value'],
  [
    ['`TRUSTPILOT_ENABLED`', '`true`'],
    ['`TRUSTPILOT_BUSINESS_UNIT_ID`', '`<from Trustpilot admin, step 3.2>`'],
    ['`TRUSTPILOT_API_KEY`', '`<leave blank for free tier>`'],
    ['`SENDGRID_SANDBOX`', '`false`']
  ],
  [3600, 5760]
);
para('After saving, redeploy. First scheduled run: 03:45 UTC tomorrow.');
claudePrompt("I'm setting Trustpilot env vars in Vercel for my production environment. TRUSTPILOT_ENABLED=true, TRUSTPILOT_BUSINESS_UNIT_ID=<value>, SENDGRID_SANDBOX=false. Walk me through adding each one via the Vercel env vars UI. Only Production — I want Preview and Development to stay disabled so preview deployments never send real emails.");
hr();

// 3.4
h2('3.4  Cyber insurance — 3 quotes');
metaLine('15 min', '£300–£800/yr (once bound)', 'School procurement DPIA checkmark');
para('**Parallel links:**');
bullet('**Hiscox** — https://www.hiscox.co.uk/business-insurance/cyber-insurance (online quote in 10 min)');
bullet('**CFC Underwriting** — https://www.cfcunderwriting.com/en-gb/products/cyber/ (broker-placed only — email `enquiries@cfcunderwriting.com`)');
bullet('**Markel** — https://www.markel.com/uk/business-insurance/cyber-data (email `newbusiness@markeluk.com`)');
para('**Pre-drafted email:** [business-docs/address-correction-emails.md](./address-correction-emails.md) § Email 3');
para('**Quote parameters:**');
bullet('Limit: **£250,000 and £500,000 each claim** (quote both)');
bullet('Retroactive date: **15 November 2025** (align with PII)');
bullet('Excess: **£500–£2,500**');
claudePrompt("I'm requesting a cyber insurance quote on Hiscox for Upskill Energy Limited, Co. 16511479, trading as The English Hub. Online EdTech SaaS for GCSE English, serving students aged 14+, UK-only. Turnover <£50k currently, projecting <£500k Year 1. Sub-processors: Stripe, Anthropic, OpenAI, Supabase, Vercel, Cloudflare, SendGrid, Sentry, PostHog, GitHub. I want quotes at £250k and £500k limits. Walk me through each field and tell me which answer to pick for an EdTech SaaS of my profile.");
hr();

// ===================== TIER 4 =====================
h1('TIER 4 — Nice-to-have (unlocks Breakout path)', '548235');

// 4.1
h2('4.1  Send me 5 advisor target names');
metaLine('20 min', '£0', '£80k–£200k valuation (reduces founder-dependency discount)');
para('**What I need from you** — 5 real people you want to approach for your Academic Advisory Board. For each:');
table(
  ['Field', 'Example'],
  [
    ['Full name', 'Dr Ruth Taylor'],
    ['Role + school', "Head of English, St Paul's School"],
    ['The hook', 'Her Team English thread about AQA Paper 2 Q5 pedagogy, 14 Mar 2026'],
    ['Route', 'LinkedIn DM / work email / warm intro via [name]']
  ],
  [2400, 6960]
);
para('**Where to find candidates:**');
bullet('Team English hashtag on X: https://twitter.com/search?q=%23TeamEnglish');
bullet('EMC editorial board: https://www.englishandmedia.co.uk/about-us');
bullet('NATE committee: https://www.nate.org.uk/about-nate/');
bullet("PTI (Prince's Teaching Institute): https://www.princes-ti.org.uk/");
bullet('LinkedIn search: "Head of English" + "AQA" or "Edexcel"');
para("Once you send me the 5 names + hooks, I'll return 5 bespoke 140-word emails + 7-day follow-ups, ready for you to paste from your Gmail account.");
claudePrompt("I'm looking for 5 Heads of English or senior examiners to approach for an Academic Advisory Board at The English Hub. Criteria: (1) serving HoD or recent examiner at AQA/Edexcel/OCR/CIE; (2) published voice (Team English, PTI, NATE, book, Tes article, conference talk); (3) not already advising a competing platform; (4) UK-based. Help me find 10 names and filter down to the strongest 5 based on these criteria. For each, find me (a) full name, (b) current role + school, (c) a specific recent piece of their work I can cite as the hook, (d) how to reach them (LinkedIn handle / work email / mutual connection).");
hr();

// 4.2
h2('4.2  Capture 3 named + photographed testimonials');
metaLine('2–3 weeks', '£0–£500 (photos optional)', '£100k–£250k valuation');
para('**Consent form ready:** [data-room/03-privacy/testimonial-consent-form.md](../data-room/03-privacy/testimonial-consent-form.md)');
para('**Photo release ready:** [data-room/03-privacy/testimonial-photo-release.md](../data-room/03-privacy/testimonial-photo-release.md)');
para('**Target mix:**');
bullet('1 Head of English at a real UK secondary (highest credibility)');
bullet('1 teacher currently using the platform');
bullet('3 students (consented parents if under 16)');
claudePrompt("Draft me an outreach email to a current English Hub user asking if they'd be willing to share a named, photographed testimonial for our homepage + /for-schools page. They'd need to fill in our GDPR consent form + photo release (linked in the email). In exchange, offer them a 3-month premium subscription extension and named recognition. 150 words, friendly + honest, British English.");
hr();

// 4.3
h2('4.3  Register defensive domains');
metaLine('10 min', '£30–£80/yr total', '');
linkLine('Link:', 'https://www.namecheap.com/domains/registration/results/?domain=theenglishhub');
para('**Domains to check + register if available:**');
bullet('`theenglishhub.co.uk` (UK SMB credibility)');
bullet('`theenglishhub.com` (if available)');
bullet('`the-english-hub.com` (typo-squat defence)');
bullet('`theenglish-hub.app` (typo-squat defence)');
claudePrompt("I'm at Namecheap checking availability for defensive domain registrations for my brand The English Hub. Already own theenglishhub.app. Want to acquire: .co.uk, .com, the-english-hub.com, theenglish-hub.app. Check availability for each, tell me which to prioritise buying based on SEO + typo-squat defence, and confirm total annual renewal cost.");
hr();

// ===================== Master tracker =====================
h1('Master tracker', BRAND);
para('Mark each as you complete:');
const track = [
  ['☐', '1.1 Supabase migration (2 min)'],
  ['☐', '1.2 CRON_SECRET in Vercel (3 min)'],
  ['☑', '1.3 Cloudflare Email Routing — 8 aliases (completed 2026-04-21)'],
  ['☐', '2.1 Cyber Essentials filed (£320, 20 min submit + self-assess)'],
  ['☐', '2.2 UKIPO trademark filed (£270, 45 min)'],
  ['☐', '2.3 ICO address update sent (5 min)'],
  ['☐', '2.4 AXA profession updated (15 min call)'],
  ['☐', '3.1 SendGrid domain auth (10 min, after 1.3)'],
  ['☑', '3.2 Trustpilot Business profile claimed (completed 2026-04-21; BCC invite, InviteJS key, Business Unit ID all captured)'],
  ['☑', '3.3 Trustpilot env vars + TRUSTPILOT_ENABLED=true (completed 2026-04-21)'],
  ['☐', '3.4 Cyber insurance — 3 quotes requested (15 min)'],
  ['☐', '4.1 Five advisor names sent to me (20 min)'],
  ['☐', '4.2 First 3 testimonials captured (2–3 weeks)'],
  ['☐', '4.3 Defensive domains registered (10 min)']
];
table(['', 'Item'], track, [720, 8640]);
para('**Hard spend to complete Tiers 1–3:** £590 + £300–£800/yr cyber insurance');
para('**Valuation uplift once all done:** +£400k–£900k vs v3 baseline');
hr();

// ===================== Closing =====================
h1('When you finish each item, tell me', BRAND);
para("Ping me with the relevant confirmation and I'll do the downstream codebase updates in one sweep:");
bullet('"Supabase migration done" → I verify table + add a dashboard widget');
bullet('"CRON_SECRET set" → I smoke-test both Trustpilot crons end-to-end');
bullet('"Email routing live" → I update ToS + privacy policy + sub-processor list to cite the new aliases');
bullet('"CE certified" → I add the badge to footer + /for-schools + /pricing');
bullet('"TM filed — app no ____" → I update trademark-register.md');
bullet('"TM registered" → I change ™ to ® site-wide');
bullet('"Here are 5 advisor names" → I write 5 bespoke first emails + follow-ups');
pushP({
  spacing: { before: 180 },
  children: [new TextRun({ text: 'Everything is scaffolded. The remaining work is almost entirely external — services, filings, humans. I handle the codebase updates.', italics: true, font: FONT, color: MUTED })]
});

// ---------- build document ----------
const doc = new Document({
  creator: 'The English Hub',
  title: 'Completion Checklist',
  description: 'Outstanding launch-readiness checklist',
  styles: {
    default: {
      document: { run: { font: FONT, size: 22 } } // 11pt body
    },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, color: BRAND, font: FONT },
        paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 }
      },
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, color: BRAND, font: FONT },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 }
      },
      {
        id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 24, bold: true, color: MUTED, font: FONT },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 540, hanging: 280 } } }
        }]
      },
      {
        reference: 'numbers',
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 540, hanging: 280 } } }
        }]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.LEFT,
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
          children: [
            new TextRun({ text: 'The English Hub', bold: true, font: FONT, size: 18, color: BRAND }),
            new TextRun({ text: '\tCompletion Checklist', font: FONT, size: 18, color: MUTED })
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({ text: 'Upskill Energy Limited · Co. 16511479', font: FONT, size: 16, color: MUTED }),
            new TextRun({ text: '\tPage ', font: FONT, size: 16, color: MUTED }),
            new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: MUTED }),
            new TextRun({ text: ' of ', font: FONT, size: 16, color: MUTED }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 16, color: MUTED })
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }]
        })]
      })
    },
    children
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(OUT, buf);
  console.log('Wrote', OUT, buf.length, 'bytes');
});
