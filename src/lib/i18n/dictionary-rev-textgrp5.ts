/**
 * dictionary-rev-textgrp5.ts
 *
 * Trilingual UI CHROME (EN + Khaleeji/Gulf Arabic + ES) for a fifth group of
 * /revision/texts/** set-text landing pages:
 *   never-let-me-go, curious-incident, anita-and-me, pigeon-english,
 *   the-sign-of-four, night, the-yellow-wallpaper, the-story-of-an-hour,
 *   the-necklace, the-man-who-loved-flowers.
 *
 * SCOPE: chrome ONLY - draft-status banner, the fair-dealing copyright
 * footer, and the "Page rebuilt" notice heading on Night. All study
 * substance (plot, characters, themes, quotations, analysis prose) stays
 * English in the page source. Sub-page navigation card titles/descriptions
 * reuse the existing shared rev.texts.subpage.* / rev.texts.common.* keys
 * already defined in dictionary-rev-texts.ts.
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * Brand/exam/work-title/author terms stay Latin in ar+es. {tokens} preserved.
 */

import type { Dictionary } from './dictionary'

export const REV_TEXTGRP5_DICTIONARY: Dictionary = {
  // ─── Shared draft-status banner chrome (reused on the AQA/IGCSE draft pages) ─
  'rev.texts.common.draft_badge': {
    en: 'Draft study guide',
    ar: 'دليل دراسة مسوّدة',
    es: 'Guía de estudio en borrador',
  },
  'rev.texts.common.draft_note': {
    en: 'AI-assisted draft under expert review. Cross-check with your teacher’s notes.',
    ar: 'مسوّدة بمساعدة الذكاء الاصطناعي تحت مراجعة الخبراء. راجعها مع ملاحظات مدرّسك.',
    es: 'Borrador asistido por IA bajo revisión de expertos. Compáralo con los apuntes de tu profesor.',
  },

  // ─── Shared fair-dealing copyright footer (criticism & review wording) ──────
  'rev.texts.common.fair_dealing_review': {
    en: 'Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لغرض النقد والمراجعة. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves reproducidas conforme a la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 con fines de crítica y reseña. Texto completo disponible en tu colegio o biblioteca local.',
  },

  // ─── Night - "Page rebuilt" notice heading (rev.texts.night.*) ─────────────
  'rev.texts.night.rebuilt_heading': {
    en: 'Page rebuilt April 2026',
    ar: 'أُعيد بناء الصفحة في أبريل 2026',
    es: 'Página reconstruida en abril de 2026',
  },
}
