/**
 * dictionary-rev-textgrp4.ts
 *
 * Trilingual UI CHROME for a fourth group of /revision/texts/** set-text
 * pages: Jane Eyre (+ chapters, key-quotes), Pride and Prejudice
 * (+ chapters, characters), Great Expectations, Silas Marner,
 * A Christmas Carol and The Great Gatsby landing pages.
 *
 * SCOPE: chrome ONLY — page titles/taglines, section headings, nav/back
 * links, sub-page card labels, short framing/intro sentences, badges,
 * public-domain / draft notices. The actual study substance (quotations,
 * chapter/character/theme analysis prose, model answers) stays English in
 * the page source.
 *
 * ar = Khaleeji (Gulf) Arabic: شنو/أبغى/وايد/الحين/إحنا/روح/شوف/دوّر/سكّر/لحظة.
 * Banned: شو, بحكي, كيفك, ليش.
 *
 * Brand/exam/board terms + novel titles + author + character names stay
 * Latin in ar+es: The English Hub, GCSE, IGCSE, A-Level, AQA, OCR,
 * Edexcel, Eduqas, Jane Eyre, Pride and Prejudice, Great Expectations,
 * Silas Marner, A Christmas Carol, The Great Gatsby, Charlotte Brontë,
 * Jane Austen, Charles Dickens, George Eliot, F. Scott Fitzgerald, etc.
 *
 * {tokens} preserved exactly across all three languages. Spanish uses no
 * em-dashes.
 */

import type { Dictionary } from './dictionary'

export const REV_TEXTGRP4_DICTIONARY: Dictionary = {
  // ─── Shared CHROME reused across this group ─────────────────────────────
  'rev.textgrp4.common.public_domain': {
    en: '{title} by {author} ({year}) is in the public domain. Quotations are reproduced freely as the text is no longer subject to copyright.',
    ar: '{title} تأليف {author} ({year}) ضمن الملكية العامة. الاقتباسات مُعاد إنتاجها بحرية لأن النص لم يعد خاضعاً لحقوق النشر.',
    es: '{title} de {author} ({year}) es de dominio público. Las citas se reproducen libremente porque el texto ya no está sujeto a derechos de autor.',
  },
  'rev.textgrp4.common.draft_badge': {
    en: 'Draft study guide',
    ar: 'دليل دراسي مسوّدة',
    es: 'Guía de estudio en borrador',
  },
  'rev.textgrp4.common.draft_note': {
    en: 'AI-assisted draft under expert review. Cross-check with your teacher’s notes.',
    ar: 'مسوّدة بمساعدة الذكاء الاصطناعي تحت مراجعة الخبراء. راجعها مع ملاحظات مدرّسك.',
    es: 'Borrador asistido por IA bajo revisión de expertos. Contrástalo con los apuntes de tu profesor.',
  },
  'rev.textgrp4.common.draft_note_long': {
    en: 'This AI-assisted guide is under expert review. Cross-check with your teacher’s notes before relying on it for exam preparation.',
    ar: 'هذا الدليل بمساعدة الذكاء الاصطناعي تحت مراجعة الخبراء. راجعه مع ملاحظات مدرّسك قبل ما تعتمد عليه في تحضير الامتحان.',
    es: 'Esta guía asistida por IA está bajo revisión de expertos. Contrástala con los apuntes de tu profesor antes de usarla para preparar el examen.',
  },
  'rev.textgrp4.common.19c_novel': {
    en: '19th-Century Novel',
    ar: 'رواية من القرن التاسع عشر',
    es: 'Novela del siglo XIX',
  },
  'rev.textgrp4.common.significance': {
    en: 'Significance',
    ar: 'الأهمية',
    es: 'Importancia',
  },
  'rev.textgrp4.common.key_events': {
    en: 'Key Events',
    ar: 'الأحداث المفتاحية',
    es: 'Acontecimientos clave',
  },
  'rev.textgrp4.common.key_quotations': {
    en: 'Key Quotations',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.textgrp4.common.exam_tip': {
    en: 'Exam Tip',
    ar: 'نصيحة للامتحان',
    es: 'Consejo para el examen',
  },
  'rev.textgrp4.common.exam_tip_lc': {
    en: 'Exam tip',
    ar: 'نصيحة للامتحان',
    es: 'Consejo de examen',
  },
  'rev.textgrp4.common.context_label': {
    en: 'Context: ',
    ar: 'السياق: ',
    es: 'Contexto: ',
  },
  'rev.textgrp4.common.why_chapter_matters': {
    en: 'Why this chapter matters',
    ar: 'ليش هذا الفصل مهم',
    es: 'Por qué importa este capítulo',
  },
  'rev.textgrp4.common.character_development': {
    en: 'Character development',
    ar: 'تطوّر الشخصية',
    es: 'Desarrollo del personaje',
  },
  'rev.textgrp4.common.major_characters': {
    en: 'Major Characters',
    ar: 'الشخصيات الرئيسية',
    es: 'Personajes principales',
  },
  'rev.textgrp4.common.bc_revision': {
    en: 'Revision',
    ar: 'المراجعة',
    es: 'Repaso',
  },
  'rev.textgrp4.common.bc_set_texts': {
    en: 'Set Texts',
    ar: 'النصوص المقررة',
    es: 'Textos prescritos',
  },

  // ─── Sub-page card labels not covered by the shared rev.texts.subpage.* ──
  'rev.textgrp4.subpage.chapters.title': {
    en: 'Chapter-by-Chapter',
    ar: 'فصل بفصل',
    es: 'Capítulo por capítulo',
  },
  'rev.textgrp4.subpage.chapters_analysis.title': {
    en: 'Chapter-by-Chapter Analysis',
    ar: 'تحليل فصل بفصل',
    es: 'Análisis capítulo por capítulo',
  },
  'rev.textgrp4.subpage.staves_analysis.title': {
    en: 'Stave-by-Stave Analysis',
    ar: 'تحليل stave بـ stave',
    es: 'Análisis stave por stave',
  },
  'rev.textgrp4.subpage.essays_alevel.desc': {
    en: 'A-Level essay plans',
    ar: 'خطط مقالات A-Level',
    es: 'Planes de ensayo de A-Level',
  },

  // ─── Jane Eyre — landing ────────────────────────────────────────────────
  'rev.texts.jane-eyre.title': {
    en: 'Jane Eyre',
    ar: 'Jane Eyre',
    es: 'Jane Eyre',
  },

  // ─── Jane Eyre — chapters page ──────────────────────────────────────────
  'rev.texts.jane-eyre.chapters.back': {
    en: 'Back to Jane Eyre',
    ar: 'رجوع إلى Jane Eyre',
    es: 'Volver a Jane Eyre',
  },
  'rev.texts.jane-eyre.chapters.title': {
    en: 'Jane Eyre -- Key Chapters',
    ar: 'Jane Eyre -- الفصول المفتاحية',
    es: 'Jane Eyre -- Capítulos clave',
  },
  'rev.texts.jane-eyre.chapters.byline': {
    en: 'by Charlotte Bronte -- published 1847',
    ar: 'تأليف Charlotte Bronte -- نُشرت 1847',
    es: 'por Charlotte Bronte -- publicada en 1847',
  },
  'rev.texts.jane-eyre.chapters.intro': {
    en: 'Detailed analysis of the most important chapters for your GCSE exam. Each entry covers significance, key events, quotations with analysis, and an exam-focused study tip.',
    ar: 'تحليل مفصّل لأهم الفصول لامتحان GCSE. كل مدخل يغطّي الأهمية والأحداث المفتاحية والاقتباسات مع تحليل ونصيحة دراسية موجّهة للامتحان.',
    es: 'Análisis detallado de los capítulos más importantes para tu examen GCSE. Cada entrada cubre la importancia, los acontecimientos clave, las citas con análisis y un consejo de estudio enfocado al examen.',
  },
  'rev.texts.jane-eyre.chapters.breadcrumb': {
    en: 'Key Chapters',
    ar: 'الفصول المفتاحية',
    es: 'Capítulos clave',
  },

  // ─── Jane Eyre — key-quotes page ────────────────────────────────────────
  'rev.texts.jane-eyre.quotes.back': {
    en: 'Back to Jane Eyre',
    ar: 'رجوع إلى Jane Eyre',
    es: 'Volver a Jane Eyre',
  },
  'rev.texts.jane-eyre.quotes.title': {
    en: 'Jane Eyre -- 25 Key Quotes',
    ar: 'Jane Eyre -- 25 اقتباس مفتاحي',
    es: 'Jane Eyre -- 25 citas clave',
  },
  'rev.texts.jane-eyre.quotes.byline': {
    en: 'by Charlotte Bronte -- published 1847',
    ar: 'تأليف Charlotte Bronte -- نُشرت 1847',
    es: 'por Charlotte Bronte -- publicada en 1847',
  },
  'rev.texts.jane-eyre.quotes.intro': {
    en: 'Twenty-five essential quotations with detailed analysis, context, and theme links. All quotations are from the public domain text and may be freely reproduced.',
    ar: 'خمسة وعشرون اقتباس أساسي مع تحليل مفصّل وسياق وروابط بالمحاور. كل الاقتباسات من نص ضمن الملكية العامة ويمكن إعادة إنتاجها بحرية.',
    es: 'Veinticinco citas esenciales con análisis detallado, contexto y vínculos temáticos. Todas las citas provienen del texto de dominio público y pueden reproducirse libremente.',
  },
  'rev.texts.jane-eyre.quotes.breadcrumb': {
    en: 'Key Quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },

  // ─── Pride and Prejudice — chapters page ────────────────────────────────
  'rev.texts.pp.chapters.back': {
    en: 'Back to Pride and Prejudice',
    ar: 'رجوع إلى Pride and Prejudice',
    es: 'Volver a Pride and Prejudice',
  },
  'rev.texts.pp.chapters.title': {
    en: 'Key Chapters Analysed',
    ar: 'تحليل الفصول المفتاحية',
    es: 'Capítulos clave analizados',
  },
  'rev.texts.pp.chapters.byline': {
    en: 'Pride and Prejudice by Jane Austen',
    ar: 'Pride and Prejudice تأليف Jane Austen',
    es: 'Pride and Prejudice de Jane Austen',
  },
  'rev.texts.pp.chapters.intro': {
    en: "A volume-by-volume analysis of the most important chapters in the novel, with full public-domain quotations and exam-ready commentary on Austen's methods.",
    ar: 'تحليل مجلّد بمجلّد لأهم فصول الرواية، مع اقتباسات كاملة ضمن الملكية العامة وتعليق جاهز للامتحان على أساليب Austen.',
    es: 'Un análisis volumen por volumen de los capítulos más importantes de la novela, con citas completas de dominio público y comentario listo para el examen sobre los métodos de Austen.',
  },

  // ─── Pride and Prejudice — characters page ──────────────────────────────
  'rev.texts.pp.characters.back': {
    en: 'Back to Pride and Prejudice',
    ar: 'رجوع إلى Pride and Prejudice',
    es: 'Volver a Pride and Prejudice',
  },
  'rev.texts.pp.characters.title': {
    en: 'Character Analysis',
    ar: 'تحليل الشخصيات',
    es: 'Análisis de personajes',
  },
  'rev.texts.pp.characters.byline': {
    en: 'Pride and Prejudice by Jane Austen',
    ar: 'Pride and Prejudice تأليف Jane Austen',
    es: 'Pride and Prejudice de Jane Austen',
  },
  'rev.texts.pp.characters.intro': {
    en: 'Detailed analysis of every major character, with key quotations, development arcs and exam tips for GCSE and A-Level literature.',
    ar: 'تحليل مفصّل لكل شخصية رئيسية، مع اقتباسات مفتاحية ومسارات تطوّر ونصائح للامتحان لـ GCSE و A-Level literature.',
    es: 'Análisis detallado de cada personaje principal, con citas clave, arcos de desarrollo y consejos de examen para GCSE y A-Level literature.',
  },

  // ─── A Christmas Carol — landing quick-summary heading (sr-only) ─────────
  'rev.texts.acc.quick_summary_h': {
    en: 'A Christmas Carol: quick summary',
    ar: 'A Christmas Carol: ملخص سريع',
    es: 'A Christmas Carol: resumen rápido',
  },
  'rev.texts.acc.faq_heading': {
    en: 'A Christmas Carol: frequently asked questions',
    ar: 'A Christmas Carol: الأسئلة الشائعة',
    es: 'A Christmas Carol: preguntas frecuentes',
  },
}
