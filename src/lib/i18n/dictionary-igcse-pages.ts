/**
 * IGCSE study-page UI CHROME - `igcse.page.*` namespace.
 *
 * Scope: page-level bespoke UI CHROME on the IGCSE study pages under
 *   src/app/igcse/** that is NOT already provided by the shared
 *   RevisionShell (header/sidebar) or by an existing keyed namespace
 *   (e.g. anth_page.*, anth_text.*).
 *
 * This shard deliberately contains NO study/teaching content: no plot
 * summaries, character notes, quotations, analysis, model answers,
 * examiner commentary, exam spec/extract text, or study-plan tasks.
 * Only navigational chrome, back links, buttons/CTAs, badge labels,
 * generic section/label headings and short hero/intro copy that recurs
 * across the literary set-text hub + index pages.
 *
 * Brand + technical terms stay in Latin script even inside Arabic AND
 * Spanish (standard Gulf/intl convention): The English Hub, GCSE/IGCSE,
 * exam boards (AQA, Edexcel, OCR, Eduqas, Cambridge, WJEC, CAIE),
 * AO1-AO6, paper codes (4ET1, 4EA1, 0500, 0990), £, literary
 * titles/authors, and device terms. {tokens} preserved across langs.
 *
 * AR register: Khaleeji (Gulf), not MSA/Levantine.
 * شنو/أبغى/وايد/الحين/إحنا/روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي,
 * كيفك, ليش.
 *
 * Annotated as Record (NOT `as const`) so the lookup chain in
 * dictionary.ts can consume it uniformly. Wiring into dictionary.ts is
 * handled separately.
 */

export const IGCSE_PAGES_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared literary-hub chrome (prose / drama / poetry hubs) ──────
  'igcse.page.back_to_lit': {
    en: 'Back to Edexcel IGCSE Literature',
    ar: 'الرجوع إلى Edexcel IGCSE Literature',
    es: 'Volver a Edexcel IGCSE Literature',
  },
  'igcse.page.back_to_edexcel_igcse': {
    en: 'Back to Edexcel IGCSE',
    ar: 'الرجوع إلى Edexcel IGCSE',
    es: 'Volver a Edexcel IGCSE',
  },
  'igcse.page.badge_edexcel_lit': {
    en: 'Edexcel IGCSE Literature',
    ar: 'Edexcel IGCSE Literature',
    es: 'Edexcel IGCSE Literature',
  },
  'igcse.page.badge_paper2_a': {
    en: 'Paper 2 · Section A',
    ar: 'Paper 2 · القسم A',
    es: 'Paper 2 · Sección A',
  },
  'igcse.page.badge_paper1_poetry': {
    en: 'Paper 1 - Anthology Poetry',
    ar: 'Paper 1 - Anthology Poetry',
    es: 'Paper 1 - Anthology Poetry',
  },
  'igcse.page.copyright_heading': {
    en: 'Key quotations only - read the full text',
    ar: 'اقتباسات مهمة فقط - اقرأ النصّ كاملاً',
    es: 'Solo citas clave - lee el texto completo',
  },
  'igcse.page.copyright_body_prose': {
    en: 'These texts are all in copyright. Our guides include short extracts for fair-dealing study and analysis only. Students should always read the complete novel alongside these notes.',
    ar: 'كل هذه النصوص محميّة بحقوق النشر. أدلّتنا تتضمّن مقتطفات قصيرة لأغراض الدراسة والتحليل ضمن الاستعمال العادل فقط. لازم الطالب يقرأ الرواية كاملة مع هذي الملاحظات.',
    es: 'Todos estos textos están protegidos por derechos de autor. Nuestras guías incluyen extractos breves solo para estudio y análisis de uso legítimo. Los estudiantes siempre deben leer la novela completa junto a estas notas.',
  },
  'igcse.page.copyright_body_drama': {
    en: 'These plays are all in copyright. Our guides include short extracts for fair-dealing study only. Students should always read or watch the full play alongside these notes.',
    ar: 'كل هذي المسرحيات محميّة بحقوق النشر. أدلّتنا تتضمّن مقتطفات قصيرة لأغراض الدراسة ضمن الاستعمال العادل فقط. لازم الطالب يقرأ أو يشوف المسرحية كاملة مع هذي الملاحظات.',
    es: 'Todas estas obras están protegidas por derechos de autor. Nuestras guías incluyen extractos breves solo para estudio de uso legítimo. Los estudiantes siempre deben leer o ver la obra completa junto a estas notas.',
  },
  'igcse.page.choose_set_text': {
    en: 'Choose your set text',
    ar: 'اختر نصّك المقرّر',
    es: 'Elige tu texto prescrito',
  },
  'igcse.page.badge_available': {
    en: 'Available',
    ar: 'متاح',
    es: 'Disponible',
  },
  'igcse.page.badge_coming_soon': {
    en: 'Coming soon',
    ar: 'قريباً',
    es: 'Próximamente',
  },
  'igcse.page.open_study_guide': {
    en: 'Open study guide',
    ar: 'افتح دليل الدراسة',
    es: 'Abrir guía de estudio',
  },

  // ─── Prose hub ────────────────────────────────────────────────────
  'igcse.page.prose.hero_h1': {
    en: 'Modern Prose',
    ar: 'Modern Prose',
    es: 'Modern Prose',
  },
  'igcse.page.prose.hero_lead': {
    en: 'Pick your set prose text to explore plot, characters, themes, context and a curated bank of short key quotations. Each guide is built around understanding the text, analysing language and structure, and comparing texts.',
    ar: 'اختر نصّك النثري المقرّر لاستكشاف الحبكة والشخصيات والثيمات والسياق وبنك منتقى من الاقتباسات القصيرة المهمة. كل دليل مبني على فهم النصّ وتحليل اللغة والبنية ومقارنة النصوص.',
    es: 'Elige tu texto de prosa prescrito para explorar la trama, los personajes, los temas, el contexto y un banco curado de citas clave breves. Cada guía está construida en torno a entender el texto, analizar el lenguaje y la estructura, y comparar textos.',
  },
  'igcse.page.prose.rights_label': {
    en: 'Rights notice.',
    ar: 'إشعار الحقوق.',
    es: 'Aviso de derechos.',
  },

  // ─── Drama hub ────────────────────────────────────────────────────
  'igcse.page.drama.hero_h1': {
    en: 'Modern Drama',
    ar: 'Modern Drama',
    es: 'Modern Drama',
  },
  'igcse.page.drama.hero_lead': {
    en: 'Pick your set modern drama text for full study notes covering plot, characters, themes, context and a bank of short key quotations built around Understanding the text, Analysing language and structure, and Comparing texts.',
    ar: 'اختر نصّك الدرامي الحديث المقرّر للحصول على ملاحظات دراسية كاملة تغطّي الحبكة والشخصيات والثيمات والسياق وبنك من الاقتباسات القصيرة المهمة، مبنيّة على فهم النصّ وتحليل اللغة والبنية ومقارنة النصوص.',
    es: 'Elige tu texto de teatro moderno prescrito para obtener notas de estudio completas que cubren la trama, los personajes, los temas, el contexto y un banco de citas clave breves, construidas en torno a entender el texto, analizar el lenguaje y la estructura, y comparar textos.',
  },

  // ─── Poetry hub ───────────────────────────────────────────────────
  'igcse.page.poetry.hero_h1': {
    en: 'Anthology Poetry',
    ar: 'Anthology Poetry',
    es: 'Anthology Poetry',
  },
  'igcse.page.poetry.hero_lead': {
    en: 'The prescribed poems of the Pearson Edexcel IGCSE Literature (4ET1) Anthology - full line-by-line study guides for the public-domain poems and concise notes for the rest.',
    ar: 'القصائد المقرّرة في Anthology الخاصة بـ Pearson Edexcel IGCSE Literature (4ET1) - أدلّة دراسة كاملة سطراً بسطر للقصائد في الملك العام وملاحظات موجزة للبقية.',
    es: 'Los poemas prescritos de la Anthology de Pearson Edexcel IGCSE Literature (4ET1) - guías de estudio completas verso a verso para los poemas de dominio público y notas concisas para el resto.',
  },
  'igcse.page.poetry.version_label': {
    en: 'Anthology version:',
    ar: 'نسخة الـ Anthology:',
    es: 'Versión de la Anthology:',
  },
  'igcse.page.poetry.overview_anthology': {
    en: 'The anthology',
    ar: 'الـ Anthology',
    es: 'La Anthology',
  },
  'igcse.page.poetry.overview_exam': {
    en: 'The exam',
    ar: 'الامتحان',
    es: 'El examen',
  },
  'igcse.page.poetry.overview_skill': {
    en: 'Key skill',
    ar: 'المهارة الأساسية',
    es: 'Habilidad clave',
  },
  'igcse.page.poetry.poems_heading': {
    en: 'The prescribed anthology poems',
    ar: 'قصائد الـ Anthology المقرّرة',
    es: 'Los poemas prescritos de la anthology',
  },
  'igcse.page.poetry.badge_full_guide': {
    en: 'Full interactive study guide',
    ar: 'دليل دراسة تفاعلي كامل',
    es: 'Guía de estudio interactiva completa',
  },
  'igcse.page.poetry.badge_notes_only': {
    en: 'Study notes only - see textbook for full text',
    ar: 'ملاحظات دراسية فقط - راجع الكتاب المدرسي للنصّ الكامل',
    es: 'Solo notas de estudio - consulta el libro de texto para el texto completo',
  },
  'igcse.page.poetry.pairings_heading': {
    en: 'Strong comparison pairings',
    ar: 'أزواج مقارنة قويّة',
    es: 'Emparejamientos de comparación sólidos',
  },
  'igcse.page.poetry.study_plan_heading': {
    en: '10-week study plan',
    ar: 'خطة دراسة لـ ١٠ أسابيع',
    es: 'Plan de estudio de 10 semanas',
  },

  // ─── Anthology text page: bespoke section chrome (single-story) ────
  'igcse.page.anth.verified_ted_lines': {
    en: 'Verified TED talk lines',
    ar: 'أسطر مؤكَّدة من حديث TED',
    es: 'Líneas verificadas de la charla TED',
  },
  'igcse.page.anth.fair_dealing_extracts': {
    en: 'Fair-dealing extracts for study',
    ar: 'مقتطفات للاستعمال العادل لأغراض الدراسة',
    es: 'Extractos de uso legítimo para estudio',
  },
}
