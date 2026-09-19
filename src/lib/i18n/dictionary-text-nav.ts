/**
 * Text-scoped navigation labels.
 *
 * Added with the text-first navigation work: a student standing inside a set
 * text now gets that text's own sections in the sidebar instead of the
 * site-wide revision register. See src/lib/revision/text-nav.ts for why.
 *
 * Khaleeji conventions as documented in ./dictionary.ts. The three structure
 * labels are deliberately distinct in Arabic: a play has فصول المسرحية, a novel
 * فصول الرواية, and A Christmas Carol is told in staves, which Arabic has no
 * settled term for, so it is described rather than transliterated.
 */

// Structural type inline rather than `import type { Dictionary }`, matching
// every other supplement here. dictionary.ts imports this file, so importing
// the type back would close a cycle for no benefit.
export const TEXT_NAV_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ── Group headings ──────────────────────────────────────────────────────
  'textnav.group.the_text': { en: 'The text', ar: 'النص', es: 'El texto' },
  'textnav.group.characters': { en: 'Characters', ar: 'الشخصيات', es: 'Personajes' },
  'textnav.group.ideas': { en: 'Ideas and context', ar: 'الأفكار والسياق', es: 'Ideas y contexto' },
  'textnav.group.quotations': { en: 'Quotations', ar: 'الاقتباسات', es: 'Citas' },
  'textnav.group.exam': { en: 'Exam practice', ar: 'تدريب الامتحان', es: 'Práctica de examen' },

  // ── Sections ────────────────────────────────────────────────────────────
  'textnav.read': { en: 'Read the full text', ar: 'اقرأ النص كامل', es: 'Leer el texto completo' },
  'textnav.structure.acts': {
    en: 'Act by act',
    ar: 'فصول المسرحية',
    es: 'Acto por acto',
  },
  'textnav.structure.chapters': {
    en: 'Chapter by chapter',
    ar: 'فصول الرواية',
    es: 'Capítulo por capítulo',
  },
  'textnav.structure.staves': {
    en: 'Stave by stave',
    ar: 'مقاطع القصة، واحد واحد',
    es: 'Parte por parte',
  },
  'textnav.characters': { en: 'Characters', ar: 'الشخصيات', es: 'Personajes' },
  'textnav.themes': { en: 'Themes', ar: 'المواضيع', es: 'Temas' },
  'textnav.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'textnav.key_quotes': { en: 'Key quotations', ar: 'أهم الاقتباسات', es: 'Citas clave' },
  'textnav.essay_plans': { en: 'Essay plans', ar: 'خطط المقال', es: 'Esquemas de redacción' },
  'textnav.extract_walkthrough': {
    en: 'Extract walkthrough',
    ar: 'تحليل مقطع خطوة بخطوة',
    es: 'Análisis de un extracto',
  },

  // ── Chrome around the scoped rail ───────────────────────────────────────
  'textnav.studying': { en: 'Studying', ar: 'تدرس الحين', es: 'Estudiando' },
  'textnav.overview': { en: 'Overview', ar: 'نظرة عامة', es: 'Resumen' },
  'textnav.back_to_shelf': {
    en: 'All set texts',
    ar: 'كل النصوص المقررة',
    es: 'Todos los textos',
  },
  'textnav.rest_of_site': {
    en: 'The rest of the site',
    ar: 'باقي الموقع',
    es: 'El resto del sitio',
  },
  // Shown on a text whose guide has not been written yet. It says what is true
  // rather than implying the sections are hidden behind something.
  'textnav.no_sections': {
    en: 'This guide is still being written.',
    ar: 'الدليل هذا لسه تحت الكتابة.',
    es: 'Esta guía todavía se está escribiendo.',
  },

  // ── The board shelf: /set-texts/<board> ─────────────────────────────────
  //
  // The page a student reaches straight after choosing their board. It lists
  // every text on their specification and says honestly what we have for each,
  // because a shelf that hides the gaps sends a third of its clicks into a
  // placeholder with no warning.
  'shelf.eyebrow': { en: 'Your set texts', ar: 'نصوصك المقررة', es: 'Tus textos' },
  'shelf.lead': {
    en: 'Every text on your specification. Pick one to open its full guide.',
    ar: 'كل النصوص اللي في منهجك. اختر واحد وافتح دليله الكامل.',
    es: 'Todos los textos de tu especificación. Elige uno para abrir su guía completa.',
  },
  'shelf.count_one': { en: '1 set text', ar: 'نص مقرر واحد', es: '1 texto' },
  'shelf.count_other': { en: '{n} set texts', ar: '{n} نص مقرر', es: '{n} textos' },
  'shelf.status.full': { en: 'Full guide', ar: 'دليل كامل', es: 'Guía completa' },
  'shelf.status.partial': {
    en: 'Guide in progress',
    ar: 'الدليل تحت الكتابة',
    es: 'Guía en curso',
  },
  'shelf.status.none': { en: 'Not written yet', ar: 'ما انكتب بعد', es: 'Todavía sin escribir' },
  'shelf.status.full_text': {
    en: 'Full text included',
    ar: 'النص كامل موجود',
    es: 'Texto completo incluido',
  },
  'shelf.sections_one': { en: '1 section', ar: 'قسم واحد', es: '1 sección' },
  'shelf.sections_other': { en: '{n} sections', ar: '{n} أقسام', es: '{n} secciones' },
  'shelf.spec_hub': {
    en: 'The specification in detail',
    ar: 'تفاصيل المنهج',
    es: 'La especificación en detalle',
  },
  // Shown for the four boards that prescribe no set texts. Saying why is the
  // point: Cambridge 0500 and 0990 are language specifications, so an empty
  // shelf is correct rather than broken, and the student needs sending
  // somewhere useful instead.
  'shelf.none.heading': {
    en: 'This specification has no prescribed set texts',
    ar: 'المنهج هذا ما فيه نصوص مقررة',
    es: 'Esta especificación no tiene textos prescritos',
  },
  'shelf.none.language': {
    en: 'It is assessed on unseen passages and your own writing, so there is nothing to learn by heart. Your revision is skills, not texts.',
    ar: 'التقييم على نصوص ما شفتها قبل وعلى كتابتك أنت، فما فيه شي تحفظه. مراجعتك مهارات، مو نصوص.',
    es: 'Se evalúa con textos no vistos y con tu propia escritura, así que no hay nada que memorizar. Tu repaso son destrezas, no textos.',
  },
  'shelf.none.generic': {
    en: 'Your school chooses what you read, so we cover the skills and the exam technique instead.',
    ar: 'مدرستك هي اللي تختار شنو تقرأ، فإحنا نغطي المهارات وطريقة الامتحان.',
    es: 'Tu centro elige lo que lees, así que cubrimos las destrezas y la técnica de examen.',
  },
  'shelf.none.cta': {
    en: 'Go to your revision hub',
    ar: 'روح لمركز المراجعة',
    es: 'Ir a tu centro de repaso',
  },
}
