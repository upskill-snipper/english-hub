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

  // ── The AI marking entry point, on every text ────────────────────────────
  // Added 19 September 2026. Not one of the 54 pages under /revision/texts
  // linked to the marker, Macbeth included, so from the place a student
  // actually studies there was no way to tell the AI was connected at all.
  // It lives in the text-scoped rail rather than on the pages, so it reaches
  // every guide in all five trees and stays scoped to the text being read.
  'textnav.mark_essay': {
    en: 'Mark my essay',
    ar: 'صحّح مقالي',
    es: 'Corregir mi redacción',
  },
  'textnav.mark_essay_hint': {
    en: 'AI feedback against the real mark scheme',
    ar: 'ملاحظات بالذكاء الاصطناعي حسب سكيم التصحيح الرسمي',
    es: 'Comentarios de IA según el baremo real',
  },

  // ── Where this text sits on the exam ─────────────────────────────────────
  // Added 19 September 2026, replacing four paragraphs of study tips that were
  // byte-identical on all 108 set-text pages. For the 75 texts with no guide
  // written, that boilerplate WAS the page.
  'placement.h2': {
    en: 'Where this text is on your exam',
    ar: 'وين يجي هذا النص في امتحانك',
    es: 'Dónde aparece este texto en tu examen',
  },
  'placement.intro': {
    en: 'Read from the specification itself, not summarised from anywhere else.',
    ar: 'مأخوذ من المنهج الرسمي نفسه، مو ملخّص من مكان ثاني.',
    es: 'Tomado de la propia especificación, no resumido de otra fuente.',
  },
  'placement.assessed_in': {
    en: 'Assessed in',
    ar: 'يُقيَّم في',
    es: 'Se evalúa en',
  },
  'placement.selection': {
    en: 'Your choice',
    ar: 'اختيارك',
    es: 'Tu elección',
  },
  'placement.source': {
    en: 'Source',
    ar: 'المصدر',
    es: 'Fuente',
  },
  'placement.exam_year': {
    en: 'For the exam series',
    ar: 'لدورة الامتحان',
    es: 'Para la convocatoria',
  },
  'placement.read_on': {
    en: 'read',
    ar: 'قُرئ',
    es: 'consultado',
  },
  // ── Full public-domain texts ─────────────────────────────────────────────
  'fulltext.crumb': {
    en: 'Full text',
    ar: 'النص الكامل',
    es: 'Texto completo',
  },
  'fulltext.back_to_guide': {
    en: 'Back to the study guide',
    ar: 'رجوع لدليل الدراسة',
    es: 'Volver a la guía de estudio',
  },
  'fulltext.public_domain': {
    en: 'This work is out of copyright in the UK, so we can publish it in full. The text is a copy of a published modern-spelling edition, not a retyping.',
    ar: 'هذا العمل خرج من حقوق النشر في بريطانيا، فنقدر ننشره كامل. النص منسوخ من طبعة منشورة بالإملاء الحديث، مو مكتوب من جديد.',
    es: 'Esta obra está libre de derechos en el Reino Unido, así que podemos publicarla completa. El texto es una copia de una edición publicada con ortografía moderna, no una transcripción.',
  },

  'placement.none': {
    en: 'We have not yet checked this text against a specification, so we are not going to tell you which paper it is on. When we have read the document, it will say so here.',
    ar: 'ما راجعنا هذا النص مقابل المنهج الرسمي لين الحين، فما راح نقول لك في أي ورقة يجي. أول ما نقرأ الوثيقة بيظهر هنا.',
    es: 'Todavía no hemos comprobado este texto con una especificación, así que no vamos a decirte en qué examen aparece. Cuando hayamos leído el documento, lo indicaremos aquí.',
  },
}
