export const meta = {
  name: 'spanish-qa-sweep',
  description: 'Twice-over Spanish (es) QA across all i18n shards: remove em-dashes, fix hallucinations/mistranslations/missed translations, preserve tokens',
  phases: [
    { title: 'Pass 1: review + fix' },
    { title: 'Pass 2: verify' },
  ],
}

const chunks = [
  { file: 'src/lib/i18n/dictionary-admin-ai-marking.ts', start: 16, end: 369 },
  { file: 'src/lib/i18n/dictionary-aff-comp.ts', start: 66, end: 613 },
  { file: 'src/lib/i18n/dictionary-aff-portal.ts', start: 34, end: 754 },
  { file: 'src/lib/i18n/dictionary-affiliates.ts', start: 48, end: 596 },
  { file: 'src/lib/i18n/dictionary-ai-act.ts', start: 19, end: 118 },
  { file: 'src/lib/i18n/dictionary-amg.ts', start: 31, end: 369 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 18, end: 509 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 510, end: 1069 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 1070, end: 1541 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 1542, end: 2217 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 2218, end: 2765 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 2766, end: 3185 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 3186, end: 3713 },
  { file: 'src/lib/i18n/dictionary-audit-fix.ts', start: 3714, end: 4241 },
  { file: 'src/lib/i18n/dictionary-b1-ks3.ts', start: 12, end: 654 },
  { file: 'src/lib/i18n/dictionary-b1-resources.ts', start: 26, end: 618 },
  { file: 'src/lib/i18n/dictionary-b1-revision.ts', start: 14, end: 1036 },
  { file: 'src/lib/i18n/dictionary-b1-revision.ts', start: 1037, end: 1083 },
  { file: 'src/lib/i18n/dictionary-b15-dashboard.ts', start: 4, end: 915 },
  { file: 'src/lib/i18n/dictionary-b15-dashboard.ts', start: 916, end: 1801 },
  { file: 'src/lib/i18n/dictionary-b15-dashboard.ts', start: 1802, end: 2370 },
  { file: 'src/lib/i18n/dictionary-b15-demo.ts', start: 4, end: 725 },
  { file: 'src/lib/i18n/dictionary-b15-demo.ts', start: 726, end: 1433 },
  { file: 'src/lib/i18n/dictionary-b15-demo.ts', start: 1434, end: 2155 },
  { file: 'src/lib/i18n/dictionary-b15-demo.ts', start: 2156, end: 2712 },
  { file: 'src/lib/i18n/dictionary-b15-marking-school.ts', start: 7, end: 732 },
  { file: 'src/lib/i18n/dictionary-b15-marking-school.ts', start: 733, end: 1596 },
  { file: 'src/lib/i18n/dictionary-b15-marking-school.ts', start: 1597, end: 1840 },
  { file: 'src/lib/i18n/dictionary-convert.ts', start: 44, end: 476 },
  { file: 'src/lib/i18n/dictionary-dash-internal.ts', start: 26, end: 741 },
  { file: 'src/lib/i18n/dictionary-dash-internal.ts', start: 742, end: 831 },
  { file: 'src/lib/i18n/dictionary-dashboard.ts', start: 32, end: 729 },
  { file: 'src/lib/i18n/dictionary-dashboard.ts', start: 730, end: 923 },
  { file: 'src/lib/i18n/dictionary-demo-pages.ts', start: 30, end: 705 },
  { file: 'src/lib/i18n/dictionary-demo-pages.ts', start: 706, end: 943 },
  { file: 'src/lib/i18n/dictionary-homepage.ts', start: 23, end: 230 },
  { file: 'src/lib/i18n/dictionary-ielts-admissions.ts', start: 26, end: 945 },
  { file: 'src/lib/i18n/dictionary-ielts-centre.ts', start: 13, end: 72 },
  { file: 'src/lib/i18n/dictionary-ielts-dashboard.ts', start: 29, end: 386 },
  { file: 'src/lib/i18n/dictionary-ielts-diagnostic.ts', start: 31, end: 605 },
  { file: 'src/lib/i18n/dictionary-ielts-guide.ts', start: 32, end: 366 },
  { file: 'src/lib/i18n/dictionary-ielts-hubprogress.ts', start: 34, end: 398 },
  { file: 'src/lib/i18n/dictionary-ielts-learn.ts', start: 38, end: 259 },
  { file: 'src/lib/i18n/dictionary-ielts-listening.ts', start: 28, end: 315 },
  { file: 'src/lib/i18n/dictionary-ielts-mock.ts', start: 36, end: 612 },
  { file: 'src/lib/i18n/dictionary-ielts-modelanswers.ts', start: 33, end: 424 },
  { file: 'src/lib/i18n/dictionary-ielts-partners.ts', start: 32, end: 1007 },
  { file: 'src/lib/i18n/dictionary-ielts-planner.ts', start: 33, end: 416 },
  { file: 'src/lib/i18n/dictionary-ielts-readiness-ui.ts', start: 28, end: 839 },
  { file: 'src/lib/i18n/dictionary-ielts-reading.ts', start: 21, end: 220 },
  { file: 'src/lib/i18n/dictionary-ielts-speaking.ts', start: 25, end: 345 },
  { file: 'src/lib/i18n/dictionary-ielts-transition.ts', start: 27, end: 289 },
  { file: 'src/lib/i18n/dictionary-ielts-ukreadiness.ts', start: 18, end: 304 },
  { file: 'src/lib/i18n/dictionary-ielts-writing.ts', start: 28, end: 272 },
  { file: 'src/lib/i18n/dictionary-ielts.ts', start: 10, end: 71 },
  { file: 'src/lib/i18n/dictionary-igcse-pages.ts', start: 33, end: 517 },
  { file: 'src/lib/i18n/dictionary-ks3-pages.ts', start: 33, end: 374 },
  { file: 'src/lib/i18n/dictionary-legal-long.ts', start: 44, end: 921 },
  { file: 'src/lib/i18n/dictionary-legal-long.ts', start: 922, end: 1945 },
  { file: 'src/lib/i18n/dictionary-legal-long.ts', start: 1946, end: 2885 },
  { file: 'src/lib/i18n/dictionary-legal-long.ts', start: 2886, end: 2975 },
  { file: 'src/lib/i18n/dictionary-marker-drive.ts', start: 27, end: 583 },
  { file: 'src/lib/i18n/dictionary-marker-drive.ts', start: 584, end: 595 },
  { file: 'src/lib/i18n/dictionary-misc-t1.ts', start: 36, end: 313 },
  { file: 'src/lib/i18n/dictionary-mkt-eal.ts', start: 37, end: 346 },
  { file: 'src/lib/i18n/dictionary-mkt-home.ts', start: 42, end: 1090 },
  { file: 'src/lib/i18n/dictionary-mkt-home.ts', start: 1091, end: 2123 },
  { file: 'src/lib/i18n/dictionary-mkt-home.ts', start: 2124, end: 3169 },
  { file: 'src/lib/i18n/dictionary-mkt-home.ts', start: 3170, end: 3534 },
  { file: 'src/lib/i18n/dictionary-mkt-school-pilot.ts', start: 38, end: 421 },
  { file: 'src/lib/i18n/dictionary-mkt-schools.ts', start: 31, end: 537 },
  { file: 'src/lib/i18n/dictionary-mkt-students.ts', start: 27, end: 371 },
  { file: 'src/lib/i18n/dictionary-mkt-teachers.ts', start: 27, end: 422 },
  { file: 'src/lib/i18n/dictionary-parent-1.ts', start: 26, end: 604 },
  { file: 'src/lib/i18n/dictionary-parent-2.ts', start: 27, end: 504 },
  { file: 'src/lib/i18n/dictionary-placeholder-fix-may15.ts', start: 24, end: 917 },
  { file: 'src/lib/i18n/dictionary-placeholder-fix-may15.ts', start: 918, end: 1340 },
  { file: 'src/lib/i18n/dictionary-placeholder-fix-may16.ts', start: 24, end: 146 },
  { file: 'src/lib/i18n/dictionary-poetry-hub.ts', start: 22, end: 897 },
  { file: 'src/lib/i18n/dictionary-press-verified.ts', start: 30, end: 565 },
  { file: 'src/lib/i18n/dictionary-public-a.ts', start: 27, end: 358 },
  { file: 'src/lib/i18n/dictionary-report-fix-may16b.ts', start: 30, end: 654 },
  { file: 'src/lib/i18n/dictionary-resources-a.ts', start: 18, end: 462 },
  { file: 'src/lib/i18n/dictionary-resources-b.ts', start: 22, end: 659 },
  { file: 'src/lib/i18n/dictionary-rev-misc.ts', start: 30, end: 674 },
  { file: 'src/lib/i18n/dictionary-rev-misc2.ts', start: 33, end: 278 },
  { file: 'src/lib/i18n/dictionary-rev-poetry-lang.ts', start: 29, end: 879 },
  { file: 'src/lib/i18n/dictionary-rev-poetry2.ts', start: 30, end: 308 },
  { file: 'src/lib/i18n/dictionary-rev-textgrp1.ts', start: 35, end: 416 },
  { file: 'src/lib/i18n/dictionary-rev-textgrp3.ts', start: 37, end: 436 },
  { file: 'src/lib/i18n/dictionary-rev-textgrp4.ts', start: 32, end: 252 },
  { file: 'src/lib/i18n/dictionary-rev-texts.ts', start: 35, end: 971 },
  { file: 'src/lib/i18n/dictionary-rev-texts.ts', start: 972, end: 1759 },
  { file: 'src/lib/i18n/dictionary-rev-texts2.ts', start: 37, end: 617 },
  { file: 'src/lib/i18n/dictionary-school-1.ts', start: 32, end: 444 },
  { file: 'src/lib/i18n/dictionary-school-2.ts', start: 54, end: 853 },
  { file: 'src/lib/i18n/dictionary-school-3.ts', start: 63, end: 176 },
  { file: 'src/lib/i18n/dictionary-school-comp.ts', start: 13, end: 587 },
  { file: 'src/lib/i18n/dictionary-school-comp.ts', start: 588, end: 1095 },
  { file: 'src/lib/i18n/dictionary-screenshot-fixes.ts', start: 14, end: 260 },
  { file: 'src/lib/i18n/dictionary-study-lang-lit.ts', start: 35, end: 279 },
  { file: 'src/lib/i18n/dictionary-study-poetry-context.ts', start: 37, end: 514 },
  { file: 'src/lib/i18n/dictionary-study-revnotes.ts', start: 30, end: 531 },
  { file: 'src/lib/i18n/dictionary-study-skills.ts', start: 30, end: 753 },
  { file: 'src/lib/i18n/dictionary-teacher.ts', start: 44, end: 441 },
  { file: 'src/lib/i18n/dictionary-toolkit.ts', start: 30, end: 744 },
  { file: 'src/lib/i18n/dictionary-trust.ts', start: 36, end: 765 },
  { file: 'src/lib/i18n/dictionary.ts', start: 156, end: 709 },
  { file: 'src/lib/i18n/dictionary.ts', start: 710, end: 1363 },
  { file: 'src/lib/i18n/dictionary.ts', start: 1364, end: 2299 },
  { file: 'src/lib/i18n/dictionary.ts', start: 2300, end: 3125 },
  { file: 'src/lib/i18n/dictionary.ts', start: 3126, end: 3997 },
  { file: 'src/lib/i18n/dictionary.ts', start: 3998, end: 4705 },
  { file: 'src/lib/i18n/dictionary.ts', start: 4706, end: 5432 },
  { file: 'src/lib/i18n/dictionary.ts', start: 5433, end: 6090 },
  { file: 'src/lib/i18n/dictionary.ts', start: 6091, end: 6678 },
  { file: 'src/lib/i18n/dictionary.ts', start: 6679, end: 7324 },
  { file: 'src/lib/i18n/dictionary.ts', start: 7325, end: 7942 },
  { file: 'src/lib/i18n/dictionary.ts', start: 7943, end: 8468 },
  { file: 'src/lib/i18n/dictionary.ts', start: 8469, end: 9267 },
  { file: 'src/lib/i18n/dictionary.ts', start: 9268, end: 10138 },
  { file: 'src/lib/i18n/dictionary.ts', start: 10139, end: 10843 },
  { file: 'src/lib/i18n/dictionary.ts', start: 10844, end: 11627 },
  { file: 'src/lib/i18n/dictionary.ts', start: 11628, end: 12387 },
  { file: 'src/lib/i18n/dictionary.ts', start: 12388, end: 13181 },
  { file: 'src/lib/i18n/dictionary.ts', start: 13182, end: 14069 },
  { file: 'src/lib/i18n/dictionary.ts', start: 14070, end: 14927 },
  { file: 'src/lib/i18n/dictionary.ts', start: 14928, end: 15819 },
  { file: 'src/lib/i18n/dictionary.ts', start: 15820, end: 16701 },
  { file: 'src/lib/i18n/dictionary.ts', start: 16702, end: 17580 },
  { file: 'src/lib/i18n/dictionary.ts', start: 17581, end: 18494 },
  { file: 'src/lib/i18n/dictionary.ts', start: 18495, end: 19420 },
  { file: 'src/lib/i18n/dictionary.ts', start: 19421, end: 20332 },
  { file: 'src/lib/i18n/dictionary.ts', start: 20333, end: 20975 },
  { file: 'src/lib/i18n/dictionary.ts', start: 20976, end: 21780 },
  { file: 'src/lib/i18n/dictionary.ts', start: 21781, end: 22710 },
  { file: 'src/lib/i18n/dictionary.ts', start: 22711, end: 23490 },
  { file: 'src/lib/i18n/dictionary.ts', start: 23491, end: 24375 },
  { file: 'src/lib/i18n/dictionary.ts', start: 24376, end: 24714 },
]

const byFile = {}
for (const c of chunks) (byFile[c.file] ||= []).push(c)
const files = Object.keys(byFile)
for (const f of files) byFile[f].sort((a, b) => a.start - b.start)

const RULES = `
RULES (apply to the es field ONLY):
- HALLUCINATION: es asserts facts/numbers/claims/links not present in en -> rewrite es to faithfully match en's meaning.
- MISTRANSLATION: wrong meaning, wrong gender/agreement, unnatural or machine-y Spanish -> fix to natural, neutral (European-leaning) Spanish.
- MISSED TRANSLATION: es is identical to en AND the string is ordinary prose/UI that SHOULD be Spanish -> translate it. (Do NOT translate brand names, exam/board terms like GCSE/IGCSE/AQA/Edexcel/Eduqas/OCR/IELTS/CEFR/AO1/AO2, paper codes, product names, proper nouns, or pure codes/numbers/prices/dates — leaving those identical is CORRECT.)
- EM-DASH: remove every em-dash (the long dash) from es; restructure naturally with commas, parentheses, or a colon. (Hyphen-minus in numeric ranges like 6.0-6.5 is fine to keep.)
- PRESERVE every interpolation token EXACTLY and with the SAME SET as en: {n} {count} {board} {price} {date} {title} {author} {year} etc., plus any HTML like <strong>...</strong>. Never add or drop a token.
- Do NOT touch the en or ar fields. Do NOT rename keys. Do NOT add or delete entries.
- Do NOT edit ANY other file. Especially never edit dictionary.ts wiring (imports / lookup chain) — only edit the es string VALUES inside the assigned file.
- QUOTING: keep the original quote style of each value; if your new es text contains that quote character, escape it so the TypeScript stays valid. Do not break syntax.
Make edits in place with the Edit tool. If a chunk is already perfect, make no edits and report zeros.`

function label(c, pass) {
  const base = c.file.replace('src/lib/i18n/dictionary', '').replace('.ts', '') || 'master'
  return `p${pass}${base}:${c.start}`
}

function reviewPrompt(c) {
  return `You are doing PASS 1 Spanish (es) quality assurance on a Next.js i18n dictionary shard.
FILE: ${c.file}
Review ONLY the dictionary entries whose keys fall on lines ${c.start} to ${c.end} (inclusive). Read that line range first (you may read a little extra for context, but only edit within your range).
Each entry looks like:  'some.key': { en: '...', ar: '...', es: '...' },
For EVERY entry in range that has an es field, compare es to en and fix issues.
${RULES}
When done, reply with ONE short line: "edited N" (N = number of es values you changed), then a brief comma-separated list of the keys you changed (or "none").`
}

function verifyPrompt(c) {
  return `You are doing PASS 2 (independent verification) of Spanish (es) quality on a Next.js i18n dictionary shard. A first pass already ran; most entries should be clean.
FILE: ${c.file}
Re-check ONLY the entries whose keys fall on lines ${c.start} to ${c.end} (inclusive). Read that range first.
Look skeptically for ANY remaining defect in es vs en: hallucination, mistranslation, awkward Spanish, a still-untranslated string that should be Spanish, a leftover em-dash, or a token mismatch. Fix anything you find in place.
${RULES}
When done, reply with ONE short line: "edited N" (N = number of es values you changed), then a brief comma-separated list of the keys you changed (or "none").`
}

const countEdited = (arr) =>
  arr.filter(Boolean).reduce((a, s) => {
    const m = /edited\s+(\d+)/i.exec(String(s))
    return a + (m ? Number(m[1]) : 0)
  }, 0)

log(`Pass 1: ${chunks.length} chunks across ${files.length} files`)
const pass1 = await parallel(
  files.map((file) => async () => {
    const out = []
    for (const c of byFile[file]) {
      const r = await agent(reviewPrompt(c), { label: label(c, 1), phase: 'Pass 1: review + fix' })
      out.push(r)
    }
    return out
  })
)
const p1 = pass1.filter(Boolean).flat()
log(`Pass 1 done: ~${countEdited(p1)} es values edited across ${p1.length} chunk-agents`)

log(`Pass 2: verifying ${chunks.length} chunks`)
const pass2 = await parallel(
  files.map((file) => async () => {
    const out = []
    for (const c of byFile[file]) {
      const r = await agent(verifyPrompt(c), { label: label(c, 2), phase: 'Pass 2: verify' })
      out.push(r)
    }
    return out
  })
)
const p2 = pass2.filter(Boolean).flat()
log(`Pass 2 done: ~${countEdited(p2)} additional es values edited across ${p2.length} chunk-agents`)

return {
  files: files.length,
  chunks: chunks.length,
  pass1EditsReported: countEdited(p1),
  pass2EditsReported: countEdited(p2),
  pass1Agents: p1.length,
  pass2Agents: p2.length,
}
