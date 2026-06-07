/**
 * dictionary-rev-textgrp2.ts
 *
 * Curated EN + Khaleeji (Gulf) Arabic + Spanish for the UI CHROME of a
 * second group of /revision/texts/** set-text revision pages:
 *   Hamlet, Henry V, Julius Caesar, King Lear, Othello, Twelfth Night,
 *   Much Ado About Nothing, The Tempest, The Merchant of Venice.
 *
 * SCOPE: ONLY chrome — sub-page navigation card labels reused across
 * texts (handled mostly by the shared rev.texts.subpage.* keys in
 * dictionary-rev-texts.ts) plus the per-page "draft study guide"
 * advisory banners. The teaching prose, quotations, plot summaries,
 * character studies, theme analysis and exam-question text are STUDY
 * CONTENT and intentionally stay English in the page source.
 *
 * Brand/exam/title/author terms stay Latin in BOTH ar and es: GCSE,
 * IGCSE, A-Level, AQA, OCR, Edexcel, Eduqas, AO1-AO6, play titles
 * (Hamlet, Othello, The Tempest…), author names (Shakespeare…).
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * {tokens} are preserved exactly across all three languages.
 *
 * NOTE: annotated Dictionary (NOT `as const`) so the orchestrator can
 * merge it via lookup() in dictionary.ts.
 */

import type { Dictionary } from './dictionary'

export const REV_TEXTGRP2_DICTIONARY: Dictionary = {
  // ─── Essay-plans sub-page card description variants ──────────────────────
  // ("GCSE essay plans" already exists as rev.texts.subpage.essays.desc.)
  'rev.texts.subpage.essays.desc_alevel': {
    en: 'A-Level essay plans',
    ar: 'خطط مقالات A-Level',
    es: 'Planes de ensayo A-Level',
  },
  'rev.texts.subpage.essays.desc_gcse_alevel': {
    en: 'GCSE/A-Level essay plans',
    ar: 'خطط مقالات GCSE/A-Level',
    es: 'Planes de ensayo GCSE/A-Level',
  },

  // ─── Draft "study guide under review" advisory banner ────────────────────
  // Shown above the TextGuide on auto-drafted set-text pages.
  'rev.texts.common.draft_guide_title': {
    en: 'Draft study guide',
    ar: 'دليل دراسي مسوّدة',
    es: 'Guía de estudio en borrador',
  },
  'rev.texts.common.draft_guide_note': {
    en: 'AI-assisted draft under expert review. Cross-check with your teacher’s notes.',
    ar: 'مسوّدة بمساعدة الذكاء الاصطناعي وتحت مراجعة الخبراء. راجعها مع ملاحظات مدرّسك.',
    es: 'Borrador asistido por IA en revisión de expertos. Contrástalo con los apuntes de tu profesor.',
  },
  'rev.texts.common.draft_guide_note_long': {
    en: 'This AI-assisted guide is under expert review. Cross-check with your teacher’s notes before relying on it for exam preparation.',
    ar: 'هذا الدليل المُعَدّ بمساعدة الذكاء الاصطناعي تحت مراجعة الخبراء. راجعه مع ملاحظات مدرّسك قبل ما تعتمد عليه في التحضير للامتحان.',
    es: 'Esta guía asistida por IA está en revisión de expertos. Contrástala con los apuntes de tu profesor antes de usarla para preparar el examen.',
  },

  // ─── The Tempest draft banner (unique inline variant) ────────────────────
  'rev.texts.tempest.draft_title': {
    en: 'Draft - awaiting English-teacher review.',
    ar: 'مسوّدة - بانتظار مراجعة مدرّس الإنجليزي.',
    es: 'Borrador: a la espera de la revisión de un profesor de Inglés.',
  },
  'rev.texts.tempest.draft_body': {
    en: 'This study guide for The Tempest has been auto-drafted and has not yet been checked by a subject specialist. Plot details, character descriptions and quotations should be verified against a trusted edition before exam use.',
    ar: 'هذا الدليل الدراسي لـ The Tempest انكتب تلقائياً وما تراجع لين الحين من مختص في المادة. لازم تتأكد من تفاصيل الحبكة ووصف الشخصيات والاقتباسات من نسخة موثوقة قبل استخدامها في الامتحان.',
    es: 'Esta guía de estudio de The Tempest se ha redactado de forma automática y todavía no la ha revisado un especialista en la materia. Los detalles del argumento, las descripciones de personajes y las citas deben verificarse con una edición fiable antes de usarlas en el examen.',
  },
}
