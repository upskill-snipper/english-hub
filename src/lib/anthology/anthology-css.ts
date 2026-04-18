/**
 * anthology-css.ts
 *
 * The complete Anthology printable template CSS, exported as a string constant.
 * This is embedded directly into generated HTML documents (PDF/Word).
 *
 * Source: design_handoff_anthology_template — high-fidelity, all values are final.
 * Do NOT modify without design review.
 */

export const ANTHOLOGY_CSS = `
/* ===========================================================
   ANTHOLOGY — Printable Template System
   The English Hub · All printable resources use this template.
   =========================================================== */

/* ---------- Tokens ---------- */
:root {
  --cream-50:  #FBF7F0;
  --cream-100: #F5EFE4;
  --cream-200: #ECE2CF;
  --cream-300: #DECEB0;
  --ink-950: #0F1411;
  --ink-900: #141A17;
  --ink-800: #1E2621;
  --ink-700: #303832;
  --ink-600: #4A524C;
  --ink-500: #6C736D;
  --ink-400: #8F948F;
  --ink-300: #B5B8B3;
  --ink-200: #D6D7D3;
  --ink-100: #E8E8E4;
  --clay-700: #8C3B1F;
  --clay-600: #AD4A28;
  --clay-500: #C65A33;
  --clay-400: #D97A4E;
  --clay-300: #E8A382;
  --ochre-400: #E4BA4E;
  --sage-400: #92AB8F;
  --font-serif: "Newsreader", "Source Serif 4", ui-serif, Georgia, serif;
  --font-mono:  "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;
}

/* ---------- Reset ---------- */
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }

/* ---------- Page shell ---------- */
.anth-page {
  width: 794px;
  min-height: 1123px;
  background: var(--cream-50);
  color: var(--ink-900);
  font-family: var(--font-serif);
  font-size: 11.5px;
  line-height: 1.65;
  position: relative;
  page-break-after: always;
}

/* ---------- Registration marks ---------- */
.reg-mark { position: absolute; width: 14px; height: 14px; opacity: .22; }
.reg-mark.tl { top: 14px; left: 14px; border-top: 1px solid var(--ink-400); border-left: 1px solid var(--ink-400); }
.reg-mark.tr { top: 14px; right: 14px; border-top: 1px solid var(--ink-400); border-right: 1px solid var(--ink-400); }
.reg-mark.bl { bottom: 14px; left: 14px; border-bottom: 1px solid var(--ink-400); border-left: 1px solid var(--ink-400); }
.reg-mark.br { bottom: 14px; right: 14px; border-bottom: 1px solid var(--ink-400); border-right: 1px solid var(--ink-400); }

/* ---------- Header bar ---------- */
.anth-hdr {
  padding: 40px 52px 12px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: baseline;
  gap: 20px;
}
.anth-hdr .brand {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.02em;
}
.anth-hdr .brand em {
  font-style: italic;
  color: var(--clay-600);
}
.anth-hdr .edition {
  text-align: center;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 13px;
  color: var(--ink-600);
  letter-spacing: 0.02em;
}
.anth-hdr .code {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-600);
  text-align: right;
}

/* ---------- Rules ---------- */
.hairline-heavy {
  border: 0;
  height: 0;
  border-top: 2px solid var(--ink-900);
  margin: 12px 52px 0;
}
.hairline {
  border: 0;
  height: 0;
  border-top: 0.5px solid var(--ink-300);
  margin: 12px 52px;
}

/* ---------- Cover block ---------- */
.anth-cover {
  padding: 32px 52px 24px;
}
.anth-cover .super {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--clay-600);
  margin-bottom: 18px;
}
.anth-cover h1 {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 64px;
  line-height: 0.95;
  letter-spacing: -0.045em;
  margin: 0;
}
.anth-cover h1 em {
  font-style: italic;
  color: var(--clay-600);
}
.anth-cover .sub {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 18px;
  color: var(--ink-700);
  margin-top: 14px;
  max-width: 560px;
}
.anth-cover .by {
  margin-top: 22px;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--ink-600);
}
.anth-cover .by em {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--ink-900);
  text-transform: none;
  letter-spacing: -0.01em;
  font-size: 12px;
  margin-left: 6px;
}

/* ---------- Body ---------- */
.anth-body {
  padding: 14px 52px 28px;
}

.chap-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 16px;
  color: var(--clay-600);
}

/* ---------- Section title ---------- */
.sec-title {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -0.025em;
  margin: 20px 0 6px;
}
.sec-title .num-prefix {
  font-style: italic;
  color: var(--clay-600);
  margin-right: 8px;
}

/* ---------- Paragraphs ---------- */
.anth-page p {
  font-family: var(--font-serif);
  font-size: 11.5px;
  line-height: 1.65;
  color: var(--ink-800);
  margin: 0 0 10px;
}

.standfirst {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-700);
  max-width: 520px;
  margin: 4px 0 14px;
}

/* ---------- Drop cap ---------- */
.drop::first-letter {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 68px;
  line-height: 0.85;
  float: left;
  padding: 8px 10px 0 0;
  color: var(--clay-600);
  font-style: italic;
}

/* ---------- Two-column newsprint ---------- */
.two-col {
  column-count: 2;
  column-gap: 26px;
  column-rule: 0.5px solid var(--ink-200);
  font-size: 11px;
  line-height: 1.65;
  text-align: justify;
  hyphens: auto;
}
.two-col p { margin-bottom: 9px; }
.two-col p + p { text-indent: 12px; }

/* ---------- Callout ---------- */
.callout {
  background: var(--cream-100);
  border-left: 3px solid var(--clay-500);
  padding: 14px 18px;
  margin: 14px 0;
  font-family: var(--font-serif);
  font-size: 11px;
  line-height: 1.6;
  color: var(--ink-800);
}
.callout .cal-kicker {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--clay-600);
  margin-bottom: 6px;
  display: block;
}
.callout em {
  font-style: italic;
  color: var(--ink-900);
}

/* ---------- Pull quote ---------- */
.pull-centre {
  text-align: center;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 26px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--ink-900);
  padding: 20px 20px;
  position: relative;
  margin: 18px 0;
}
.pull-centre::before,
.pull-centre::after {
  content: "";
  display: block;
  width: 80px;
  height: 0.5px;
  background: var(--ink-900);
  margin: 10px auto;
}
.pull-centre cite {
  display: block;
  font-family: var(--font-mono);
  font-style: normal;
  font-size: 9px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--ink-600);
  margin-top: 8px;
}

/* ---------- Asymmetric layout ---------- */
.asym {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 24px;
  align-items: start;
}

/* ---------- Data card ---------- */
.data-card {
  background: var(--cream-100);
  border: 0.5px solid var(--ink-200);
  padding: 14px 16px;
  border-radius: 2px;
}
.data-card .dc-kicker {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-600);
  margin-bottom: 8px;
}
.data-card .dc-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 46px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--clay-600);
}
.data-card .dc-sub {
  font-family: var(--font-serif);
  font-size: 11px;
  color: var(--ink-700);
  margin-top: 4px;
}

/* ---------- KPI row ---------- */
.kpi-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* ---------- Index / contents list ---------- */
.index-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: var(--font-serif);
  font-size: 11px;
  color: var(--ink-800);
}
.index-list li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 0.5px solid var(--ink-200);
}
.index-list li .n {
  font-style: italic;
  color: var(--clay-600);
  font-size: 13px;
  min-width: 24px;
}
.index-list li .dots {
  border-bottom: 1px dotted var(--ink-400);
  height: 1px;
  position: relative;
  top: -3px;
}
.index-list li .p {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  color: var(--ink-600);
}

/* ---------- Dashed list ---------- */
ul.dashed {
  list-style: none;
  padding: 0;
  margin: 8px 0;
  font-family: var(--font-serif);
  font-size: 11px;
  line-height: 1.6;
}
ul.dashed li {
  padding-left: 14px;
  position: relative;
  margin-bottom: 4px;
}
ul.dashed li::before {
  content: "\\2014";
  position: absolute;
  left: 0;
  color: var(--clay-500);
}
ul.dashed li em {
  font-style: italic;
  color: var(--ink-900);
}

/* ---------- Essay layout ---------- */
.essay-layout {
  display: grid;
  grid-template-columns: 1fr 170px;
  gap: 22px;
}
.essay-body {
  font-family: var(--font-serif);
  font-size: 11.5px;
  line-height: 1.8;
  color: var(--ink-900);
  text-align: justify;
  hyphens: auto;
}
.essay-body mark {
  background: rgba(228, 186, 78, 0.42);
  padding: 0 1px;
}
.essay-body mark.strong {
  background: rgba(146, 171, 143, 0.5);
}
.essay-body mark.weak {
  background: transparent;
  border-bottom: 1.5px solid var(--clay-500);
}
.essay-body .comment-anchor {
  font-family: var(--font-mono);
  font-size: 8.5px;
  color: var(--clay-600);
  vertical-align: super;
  padding: 0 1px;
  font-weight: 500;
}

/* ---------- Margin comments ---------- */
.margin-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.m-comment {
  font-family: var(--font-mono);
  font-size: 8.5px;
  line-height: 1.55;
  padding-left: 10px;
  border-left: 1.5px solid var(--clay-500);
  color: var(--ink-700);
}
.m-comment .m-anchor {
  display: block;
  color: var(--clay-600);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 3px;
  font-size: 8px;
  font-weight: 500;
}
.m-comment em {
  font-family: var(--font-serif);
  font-style: italic;
}

/* ---------- AO scorecard ---------- */
.ao-scorecard {
  border-top: 0.5px solid var(--ink-900);
  border-bottom: 0.5px solid var(--ink-900);
  padding: 14px 0;
  margin: 14px 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
}
.ao-bar {
  display: grid;
  grid-template-columns: 54px 1fr 28px;
  gap: 10px;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 8.5px;
  margin-bottom: 5px;
}
.ao-bar .tr {
  height: 5px;
  background: var(--ink-100);
  position: relative;
}
.ao-bar .tr::after {
  content: "";
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: var(--w, 60%);
  background: var(--clay-500);
}

/* ---------- Grade mark ---------- */
.grade-mark {
  text-align: center;
  min-width: 78px;
}
.grade-mark .g-num {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 64px;
  line-height: 0.9;
  color: var(--clay-600);
  letter-spacing: -0.03em;
}
.grade-mark .g-lbl {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-600);
  margin-top: 4px;
}

/* ---------- Table ---------- */
table.rep {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-serif);
  font-size: 11px;
}
table.rep th, table.rep td {
  padding: 7px 8px;
  border-bottom: 0.5px solid var(--ink-200);
  text-align: left;
}
table.rep th {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-600);
  font-weight: 500;
  border-bottom: 1px solid var(--ink-900);
}
table.rep td.num {
  text-align: right;
  font-family: var(--font-mono);
  font-size: 10.5px;
}
table.rep tr.sum td {
  border-top: 1px solid var(--ink-900);
  border-bottom: 0;
  padding-top: 10px;
  font-weight: 500;
}

/* ---------- Footer ---------- */
.anth-foot {
  padding: 14px 52px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-500);
  border-top: 0.5px solid var(--ink-300);
}
.anth-foot span:nth-child(2) { padding: 0 14px; }
.anth-foot em {
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--clay-600);
  text-transform: none;
  letter-spacing: -0.01em;
}

/* ---------- Answer lines (worksheets/homework) ---------- */
.answer-line {
  border-bottom: 0.5px solid var(--ink-300);
  height: 30px;
  margin-bottom: 2px;
}

/* ---------- Name/date field ---------- */
.name-date-row {
  display: flex;
  gap: 32px;
  font-family: var(--font-serif);
  font-size: 11px;
  color: var(--ink-800);
  margin: 14px 0;
}
.name-date-row strong {
  font-weight: 500;
}

/* ---------- Teacher warning ---------- */
.teacher-warning {
  background: var(--cream-100);
  border-left: 3px solid var(--clay-700);
  padding: 10px 18px;
  margin: 14px 0;
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--clay-700);
  font-weight: 500;
}

/* ---------- Activity block (lesson plans) ---------- */
.activity-block {
  background: var(--cream-100);
  border-left: 3px solid var(--clay-500);
  padding: 14px 18px;
  margin: 14px 0;
}
.activity-block .act-kicker {
  font-family: var(--font-mono);
  font-size: 8.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--clay-600);
  margin-bottom: 6px;
  display: block;
}
.activity-block .act-title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: 14px;
  color: var(--ink-900);
  margin-bottom: 4px;
}
.activity-block .act-duration {
  font-family: var(--font-mono);
  font-size: 8.5px;
  color: var(--ink-500);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ---------- Differentiation grid ---------- */
.diff-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}
.diff-box {
  background: var(--cream-50);
  border: 0.5px solid var(--ink-200);
  padding: 10px 12px;
  border-radius: 2px;
  font-family: var(--font-serif);
  font-size: 10px;
  line-height: 1.5;
  color: var(--ink-800);
}
.diff-box .diff-label {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--clay-600);
  margin-bottom: 4px;
  display: block;
}

/* ---------- Keyword chips ---------- */
.keyword-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0;
}
.keyword-chip {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 4px 10px;
  border: 0.5px solid var(--ink-200);
  border-radius: 2px;
  color: var(--ink-700);
  background: var(--cream-100);
}

/* ---------- Grade boundary boxes ---------- */
.grade-band {
  border: 0.5px solid var(--ink-200);
  padding: 10px 14px;
  margin-bottom: 8px;
  border-radius: 2px;
}
.grade-band .band-label {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 4px;
  display: block;
}
.grade-band.top { border-left: 3px solid var(--clay-600); }
.grade-band.top .band-label { color: var(--clay-600); }
.grade-band.mid { border-left: 3px solid var(--ochre-400); }
.grade-band.mid .band-label { color: var(--ink-600); }
.grade-band.lower { border-left: 3px solid var(--ink-400); }
.grade-band.lower .band-label { color: var(--ink-500); }

/* ---------- Print bar (screen only) ---------- */
.print-bar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--ink-950);
  color: var(--cream-50);
  text-align: center;
  padding: 10px 16px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
}
.print-bar:hover { background: var(--ink-900); }

/* ---------- Preview chrome ---------- */
body.anth-preview {
  background: var(--cream-200);
  margin: 0;
  padding: 0;
}
body.anth-preview .anth-page {
  margin: 40px auto;
  box-shadow: 0 1px 2px rgba(15,20,17,0.08), 0 18px 44px -20px rgba(15,20,17,0.22);
}

/* ---------- Print overrides ---------- */
@media print {
  body { background: white !important; }
  .print-bar { display: none !important; }
  body.anth-preview { background: white !important; }
  body.anth-preview .anth-page {
    margin: 0;
    box-shadow: none;
  }
  .anth-page {
    width: 100%;
    min-height: auto;
    page-break-after: always;
    box-shadow: none;
  }
  @page {
    margin: 15mm;
    size: A4;
  }
}
`

/** Google Fonts link tag for Anthology fonts */
export const ANTHOLOGY_FONTS_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">`
