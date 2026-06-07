/**
 * dictionary-rev-textgrp6.ts
 *
 * EN + Khaleeji (Gulf) Arabic + Spanish for the UI CHROME of the IGCSE
 * anthology / non-fiction set-text revision pages in group 6:
 *
 *   a-game-of-polo-with-a-headless-goat, a-passage-to-africa,
 *   between-a-rock-and-a-hard-place, beyond-the-sky-and-the-earth,
 *   chinese-cinderella, explorers-or-boys-messing-about, h-is-for-hawk,
 *   significant-cigarettes
 *
 * SCOPE: ONLY chrome. Seven of these pages render entirely through the
 * already-localized <StubStudyGuide> (analysis.deep.stub.* keys) and carry
 * no bespoke on-page English of their own, so they contribute no keys here.
 * The one exception is the significant-cigarettes page, which renders a
 * bespoke "page rebuilt" framing notice above the stub; that framing chrome
 * is converted below. The study content (extract text, quotations, analysis,
 * the copyright/rights description) stays English by design and is NOT here.
 *
 * Brand / exam-board / title / author terms stay Latin in BOTH ar and es:
 * Rose Tremain, The Road Home, Vintage, Penguin Random House, Edexcel, ISBN.
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * NOTE: typed as Dictionary so the orchestrator can merge it via lookup()
 * in dictionary.ts. Do NOT edit dictionary.ts here.
 */
import type { Dictionary } from './dictionary'

export const REV_TEXTGRP6_DICTIONARY: Dictionary = {
  // ─── Significant Cigarettes — "page rebuilt" framing notice (chrome) ─────
  'rev.texts.significant-cigarettes.rebuilt_banner_title': {
    en: 'Page rebuilt April 2026',
    ar: 'الصفحة أُعيد بناؤها في أبريل 2026',
    es: 'Página reconstruida en abril de 2026',
  },
  'rev.texts.significant-cigarettes.rebuilt_banner_body': {
    en: "Direct quotations from Rose Tremain's The Road Home have been withheld pending verified primary-source review. Tremain's text is in copyright (Vintage / Penguin Random House) and outside the public domain; students should always cite from the licensed Edexcel anthology (ISBN 978-1-446-93108-0) in exam answers.",
    ar: 'الاقتباسات المباشرة من The Road Home لـ Rose Tremain مسحوبة لحين مراجعة المصدر الأولي والتأكد منه. نص Tremain محمي بحقوق النشر (Vintage / Penguin Random House) ومو ضمن الملكية العامة؛ الطلاب لازم دايماً يقتبسون من نسخة Edexcel anthology المرخّصة (ISBN 978-1-446-93108-0) في إجابات الامتحان.',
    es: 'Las citas directas de The Road Home de Rose Tremain se han retirado a la espera de una revisión verificada de la fuente primaria. El texto de Tremain está protegido por derechos de autor (Vintage / Penguin Random House) y no es de dominio público; el alumnado siempre debe citar de la Edexcel anthology con licencia (ISBN 978-1-446-93108-0) en las respuestas de examen.',
  },
}
