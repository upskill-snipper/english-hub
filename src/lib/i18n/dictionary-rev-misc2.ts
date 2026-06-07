/**
 * dictionary-rev-misc2.ts
 *
 * Trilingual EN + Khaleeji (Gulf) Arabic + Spanish for the UI CHROME of the
 * remaining hard-coded /revision/** pages that sit OUTSIDE texts/, poetry/ and
 * language/ and were not already wired through t()/useT() - namely the two
 * exam-technique guides (grade-9-secrets, common-mistakes) and the revision
 * hub client widgets (recently-studied, favourite-toggle, revision-hub-lenses).
 *
 * SCOPE: ONLY chrome - back links, breadcrumbs, badges, hero/intro copy,
 * section headings/card titles, buttons/CTAs, aria/title attributes, empty
 * states and tips. Teaching prose, the technique/mistake bodies, before/after
 * model paragraphs, vocabulary lists, checklists, grade-descriptor analysis and
 * examiner advice are STUDY CONTENT and stay English in the page source - they
 * are intentionally NOT in this shard.
 *
 * Brand/tech/title/author terms stay Latin in BOTH ar and es: The English Hub,
 * GCSE, IGCSE, AQA, grade numbers (Grade 7 / Grade 9), etc.
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * Spanish brand style: NO em-dashes or en-dashes. Use ':' ',' '(' ')' instead.
 *
 * {tokens} are preserved exactly across all three languages.
 *
 * NOTE: annotated Record (NOT `as const`) so the orchestrator can merge it via
 * lookup() in dictionary.ts. The orchestrator wires this shard.
 */

export const REV_MISC2_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  // ─── Shared exam-technique chrome ─────────────────────────────────────
  'rev.misc2.crumb.revision': { en: 'Revision', ar: 'مراجعة', es: 'Repaso' },
  'rev.misc2.crumb.exam_technique': {
    en: 'Exam Technique',
    ar: 'تقنية الامتحان',
    es: 'Técnica de examen',
  },
  'rev.misc2.back.exam_technique': {
    en: 'Back to Exam Technique',
    ar: 'روح لتقنية الامتحان',
    es: 'Volver a Técnica de examen',
  },
  'rev.misc2.example': { en: 'Example', ar: 'مثال', es: 'Ejemplo' },
  'rev.misc2.cta.practice_extracts': {
    en: 'Practice Extracts (coming soon)',
    ar: 'مقتطفات للتدريب (قريباً)',
    es: 'Extractos de práctica (próximamente)',
  },
  'rev.misc2.cta.practice_extracts_title': {
    en: 'Practice Extracts - coming soon',
    ar: 'مقتطفات للتدريب: قريباً',
    es: 'Extractos de práctica: próximamente',
  },

  // ─── Grade 9 Secrets (/revision/exam-technique/grade-9-secrets) ───────
  'rev.misc2.g9.crumb': { en: 'Grade 9 Secrets', ar: 'أسرار Grade 9', es: 'Secretos del Grade 9' },
  'rev.misc2.g9.title': {
    en: 'What Separates Grade 7 from Grade 9',
    ar: 'شنو يفصل Grade 7 عن Grade 9',
    es: 'Qué separa el Grade 7 del Grade 9',
  },
  'rev.misc2.g9.subtitle': {
    en: '10 specific techniques that unlock the highest band in GCSE English Literature and Language',
    ar: '10 تقنيات محددة تفتح أعلى نطاق في GCSE English Literature و Language',
    es: '10 técnicas concretas que abren la banda más alta en GCSE English Literature y Language',
  },
  'rev.misc2.g9.badge.mindset': {
    en: 'The Grade 9 Mindset',
    ar: 'عقلية Grade 9',
    es: 'La mentalidad del Grade 9',
  },
  'rev.misc2.g9.overview.heading': {
    en: 'It is not about knowing more -- it is about thinking differently',
    ar: 'مو القضية إنك تعرف أكثر: القضية إنك تفكّر بشكل مختلف',
    es: 'No se trata de saber más: se trata de pensar de forma distinta',
  },
  'rev.misc2.g9.overview.body': {
    en: 'Grade 7 students know the texts well and can write clear, supported paragraphs. Grade 9 students do something more: they treat literature as a set of deliberate choices made by a writer for a purpose, offer multiple interpretations, and connect every detail to a bigger argument. The jump from 7 to 9 is not about learning more quotes -- it is about upgrading how you think and write about them.',
    ar: 'طلاب Grade 7 يعرفون النصوص زين ويقدرون يكتبون فقرات واضحة ومدعومة. طلاب Grade 9 يسوّون شي أكثر: يتعاملون مع الأدب كمجموعة خيارات مقصودة سوّاها الكاتب لغرض، ويقدّمون تفسيرات متعددة، ويربطون كل تفصيلة بحجّة أكبر. القفزة من 7 إلى 9 مو عن حفظ اقتباسات أكثر: هي عن تطوير طريقة تفكيرك وكتابتك عنها.',
    es: 'Los estudiantes de Grade 7 conocen bien los textos y pueden escribir párrafos claros y fundamentados. Los estudiantes de Grade 9 hacen algo más: tratan la literatura como un conjunto de decisiones deliberadas que el autor toma con un propósito, ofrecen varias interpretaciones y conectan cada detalle con un argumento mayor. El salto del 7 al 9 no consiste en aprender más citas: consiste en mejorar cómo piensas y escribes sobre ellas.',
  },
  'rev.misc2.g9.techniques.heading': {
    en: '10 Techniques Grade 9 Students Use',
    ar: '10 تقنيات يستخدمها طلاب Grade 9',
    es: '10 técnicas que usan los estudiantes de Grade 9',
  },
  'rev.misc2.g9.beforeafter.heading': {
    en: 'Before and After: Grade 7 vs Grade 9 Paragraphs',
    ar: 'قبل وبعد: فقرات Grade 7 مقابل Grade 9',
    es: 'Antes y después: párrafos de Grade 7 frente a Grade 9',
  },
  'rev.misc2.g9.beforeafter.intro': {
    en: 'The same knowledge, transformed by technique. Study what changes between the “before” (solid Grade 7) and “after” (Grade 9) versions.',
    ar: 'نفس المعرفة، بس متحوّلة بالتقنية. شوف شنو يتغيّر بين نسخة “قبل” (Grade 7 متين) ونسخة “بعد” (Grade 9).',
    es: 'El mismo conocimiento, transformado por la técnica. Estudia qué cambia entre las versiones “antes” (Grade 7 sólido) y “después” (Grade 9).',
  },
  'rev.misc2.g9.grade7': { en: 'Grade 7', ar: 'Grade 7', es: 'Grade 7' },
  'rev.misc2.g9.grade9': { en: 'Grade 9', ar: 'Grade 9', es: 'Grade 9' },
  'rev.misc2.g9.why_it_works': {
    en: 'Why it works: ',
    ar: 'ليش تشتغل: ',
    es: 'Por qué funciona: ',
  },
  'rev.misc2.g9.vocab.heading': {
    en: 'Vocabulary That Signals Higher-Grade Thinking',
    ar: 'مفردات تدلّ على تفكير أعلى درجة',
    es: 'Vocabulario que indica un pensamiento de nivel superior',
  },
  'rev.misc2.g9.concept.heading': {
    en: 'How to Be “Conceptualised” and “Critical”',
    ar: 'كيف تكون “Conceptualised” و “Critical”',
    es: 'Cómo ser “Conceptualised” y “Critical”',
  },
  'rev.misc2.g9.badge.conceptualised': {
    en: 'Conceptualised',
    ar: 'Conceptualised',
    es: 'Conceptualised',
  },
  'rev.misc2.g9.badge.critical': { en: 'Critical', ar: 'Critical', es: 'Critical' },
  'rev.misc2.g9.test_label': { en: 'Test: ', ar: 'الاختبار: ', es: 'Prueba: ' },
  'rev.misc2.g9.altinterp.heading': {
    en: 'Alternative Interpretations and How to Use Them',
    ar: 'التفسيرات البديلة وكيف تستخدمها',
    es: 'Interpretaciones alternativas y cómo usarlas',
  },
  'rev.misc2.g9.example_in_action': {
    en: 'Example in action',
    ar: 'مثال عملي',
    es: 'Ejemplo en acción',
  },
  'rev.misc2.g9.checklist.heading': {
    en: 'Grade 9 Paragraph Checklist',
    ar: 'قائمة تحقّق فقرة Grade 9',
    es: 'Lista de comprobación del párrafo Grade 9',
  },
  'rev.misc2.g9.nav.common_mistakes': {
    en: 'Common Mistakes',
    ar: 'الأخطاء الشائعة',
    es: 'Errores comunes',
  },

  // ─── Common Mistakes (/revision/exam-technique/common-mistakes) ───────
  'rev.misc2.cm.crumb': { en: 'Common Mistakes', ar: 'الأخطاء الشائعة', es: 'Errores comunes' },
  'rev.misc2.cm.title': {
    en: '20 Most Common GCSE English Mistakes',
    ar: 'أكثر 20 خطأ شائع في GCSE English',
    es: 'Los 20 errores más comunes en GCSE English',
  },
  'rev.misc2.cm.subtitle': {
    en: 'What goes wrong and exactly how to fix it -- with wrong vs right examples for every mistake',
    ar: 'شنو اللي يصير غلط وكيف تصلّحه بالضبط: مع أمثلة غلط مقابل صح لكل خطأ',
    es: 'Qué sale mal y cómo corregirlo exactamente, con ejemplos de incorrecto frente a correcto para cada error',
  },
  'rev.misc2.cm.badge.why': {
    en: 'Why This Matters',
    ar: 'ليش هذا مهم',
    es: 'Por qué importa esto',
  },
  'rev.misc2.cm.overview.heading': {
    en: 'Most marks are lost, not earned',
    ar: 'أغلب الدرجات تنخسر، مو تنكسب',
    es: 'La mayoría de los puntos se pierden, no se ganan',
  },
  'rev.misc2.cm.overview.body': {
    en: 'The difference between a Grade 5 and a Grade 7 is rarely about knowing more content -- it is about avoiding the habits that cap your marks. Every mistake below is something examiners see hundreds of times a day. Eliminating even three or four of them can push your grade up significantly.',
    ar: 'الفرق بين Grade 5 و Grade 7 نادراً يكون عن معرفة محتوى أكثر: هو عن تجنّب العادات اللي تحدّ من درجاتك. كل خطأ تحت هذا شي يشوفه المصحّحون مئات المرات باليوم. لو تشيل حتى ثلاثة أو أربعة منها ممكن ترفع درجتك بشكل واضح.',
    es: 'La diferencia entre un Grade 5 y un Grade 7 rara vez consiste en saber más contenido: consiste en evitar los hábitos que limitan tus puntos. Cada error de abajo es algo que los examinadores ven cientos de veces al día. Eliminar incluso tres o cuatro de ellos puede subir tu nota de forma notable.',
  },
  'rev.misc2.cm.bycategory.heading': {
    en: 'Mistakes by Category',
    ar: 'الأخطاء حسب الفئة',
    es: 'Errores por categoría',
  },
  'rev.misc2.cm.what_to_avoid': {
    en: 'What to avoid',
    ar: 'شنو تتجنّب',
    es: 'Qué evitar',
  },
  'rev.misc2.cm.what_to_do': {
    en: 'What to do instead',
    ar: 'شنو تسوي بدالها',
    es: 'Qué hacer en su lugar',
  },
  'rev.misc2.cm.selfcheck.heading': {
    en: 'Quick Self-Check Before Submitting',
    ar: 'فحص ذاتي سريع قبل التسليم',
    es: 'Autocomprobación rápida antes de entregar',
  },
  'rev.misc2.cm.nav.grade_9_secrets': {
    en: 'Grade 9 Secrets',
    ar: 'أسرار Grade 9',
    es: 'Secretos del Grade 9',
  },

  // ─── Recently Studied widget (revision hub) ──────────────────────────
  'rev.misc2.recent.heading': {
    en: 'Recently Studied',
    ar: 'اللي ذاكرته مؤخراً',
    es: 'Estudiado recientemente',
  },

  // ─── Favourite toggle (revision hub) ─────────────────────────────────
  'rev.misc2.fav.add': {
    en: 'Add {title} to favourites',
    ar: 'أضف {title} للمفضّلة',
    es: 'Añadir {title} a favoritos',
  },
  'rev.misc2.fav.remove': {
    en: 'Remove {title} from favourites',
    ar: 'احذف {title} من المفضّلة',
    es: 'Quitar {title} de favoritos',
  },
  'rev.misc2.fav.add_short': {
    en: 'Add to favourites',
    ar: 'أضف للمفضّلة',
    es: 'Añadir a favoritos',
  },
  'rev.misc2.fav.remove_short': {
    en: 'Remove from favourites',
    ar: 'احذف من المفضّلة',
    es: 'Quitar de favoritos',
  },

  // ─── Revision hub lenses ─────────────────────────────────────────────
  'rev.misc2.lenses.aria': {
    en: 'Your hub overview',
    ar: 'نظرة عامة على مركزك',
    es: 'Resumen de tu centro',
  },
  'rev.misc2.lenses.inprogress.eyebrow': {
    en: 'In Progress',
    ar: 'قيد التقدّم',
    es: 'En curso',
  },
  'rev.misc2.lenses.inprogress.heading': {
    en: 'Pick up where you left off',
    ar: 'كمّل من وين وقفت',
    es: 'Continúa donde lo dejaste',
  },
  'rev.misc2.lenses.inprogress.empty': {
    en: 'Nothing in progress yet - pick a board topic below.',
    ar: 'ما في شي قيد التقدّم الحين: اختر موضوع board من تحت.',
    es: 'Nada en curso todavía: elige un tema del board abajo.',
  },
  'rev.misc2.lenses.recommended.eyebrow': {
    en: 'Recommended',
    ar: 'مقترح',
    es: 'Recomendado',
  },
  'rev.misc2.lenses.recommended.heading': {
    en: 'Fast wins for your board',
    ar: 'مكاسب سريعة لـ board مالك',
    es: 'Logros rápidos para tu board',
  },
  'rev.misc2.lenses.favourites.eyebrow': {
    en: 'Favourites',
    ar: 'المفضّلة',
    es: 'Favoritos',
  },
  'rev.misc2.lenses.favourites.heading': {
    en: 'Your pinned sections',
    ar: 'أقسامك المثبّتة',
    es: 'Tus secciones fijadas',
  },
  'rev.misc2.lenses.favourites.empty': {
    en: 'Star any section below to pin it here.',
    ar: 'حطّ نجمة على أي قسم من تحت عشان تثبّته هنا.',
    es: 'Marca con estrella cualquier sección de abajo para fijarla aquí.',
  },
  'rev.misc2.lenses.favourites.tip': {
    en: 'Tip: every card below has a star button - click it to pin.',
    ar: 'نصيحة: كل بطاقة من تحت فيها زر نجمة، اضغطه عشان تثبّتها.',
    es: 'Consejo: cada tarjeta de abajo tiene un botón de estrella, púlsalo para fijarla.',
  },
  'rev.misc2.lenses.view_all': { en: 'View all', ar: 'شوف الكل', es: 'Ver todo' },
}
