/**
 * dictionary-study-guide.ts - chrome for the shared study-guide sections.
 *
 * Section headings, labels and the rights lines rendered by
 * src/components/study-guide/study-guide-sections.tsx. The guide CONTENT stays
 * in English in every locale, per editorial policy: a student sits the paper in
 * English and has to quote in English.
 *
 * Khaleeji conventions match dictionary.ts. Brand and technical terms stay
 * Latin: GCSE, IGCSE, AO1-AO5, CDPA.
 */
export const STUDY_GUIDE_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  'study_guide.nav_label': { en: 'On this page', ar: 'في هالصفحة', es: 'En esta página' },
  'study_guide.supplement_heading': {
    en: 'Study guide sections',
    ar: 'أقسام دليل الدراسة',
    es: 'Secciones de la guía de estudio',
  },
  'study_guide.supplement_intro': {
    en: 'The rest of the guide, section by section: analysis, vocabulary and exam practice for this text.',
    ar: 'باقي الدليل قسماً قسماً: التحليل والمفردات والتدريب على الامتحان لهالنص.',
    es: 'El resto de la guía, sección por sección: análisis, vocabulario y práctica de examen para este texto.',
  },

  'study_guide.section.overview': { en: 'Overview', ar: 'نظرة عامة', es: 'Resumen' },
  'study_guide.section.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'study_guide.section.themes': { en: 'Themes', ar: 'المحاور', es: 'Temas' },
  'study_guide.section.characters': {
    en: 'Characters and voices',
    ar: 'الشخصيات والأصوات',
    es: 'Personajes y voces',
  },
  'study_guide.section.keyQuotes': {
    en: 'Key quotations',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'study_guide.section.languageAnalysis': {
    en: 'Language analysis',
    ar: 'تحليل اللغة',
    es: 'Análisis del lenguaje',
  },
  'study_guide.section.structureForm': {
    en: 'Structure and form',
    ar: 'البنية والشكل',
    es: 'Estructura y forma',
  },
  'study_guide.section.vocabulary': {
    en: 'Key vocabulary',
    ar: 'المفردات المفتاحية',
    es: 'Vocabulario clave',
  },
  'study_guide.section.examPractice': {
    en: 'Exam practice',
    ar: 'تدريب على الامتحان',
    es: 'Práctica de examen',
  },
  'study_guide.section.modelAnswer': {
    en: 'Model answer',
    ar: 'إجابة نموذجية',
    es: 'Respuesta modelo',
  },
  'study_guide.section.compareWith': { en: 'Compare with', ar: 'قارن مع', es: 'Compara con' },

  'study_guide.technique.example': { en: 'Example', ar: 'مثال', es: 'Ejemplo' },
  'study_guide.technique.effect': { en: 'Effect', ar: 'الأثر', es: 'Efecto' },
  'study_guide.exam.how_to_answer': {
    en: 'How to answer it',
    ar: 'كيف تجاوب عليه',
    es: 'Cómo responder',
  },
  'study_guide.exam.tips': {
    en: 'What examiners reward',
    ar: 'شنو يكافئ عليه المصحّحين',
    es: 'Lo que premian los examinadores',
  },
  'study_guide.model.question_label': { en: 'The question', ar: 'السؤال', es: 'La pregunta' },
  'study_guide.model.why_it_works': {
    en: 'Why it works',
    ar: 'ليش هالإجابة ناجحة',
    es: 'Por qué funciona',
  },
  'study_guide.scope_label': {
    en: 'What you study',
    ar: 'شنو تدرس',
    es: 'Qué estudias',
  },

  // ─── Visual learning: the story arc, scene player and character map ──────
  'study_guide.visuals.heading': {
    en: 'See it unfold',
    ar: 'شوفها تتكشّف',
    es: 'Míralo desarrollarse',
  },
  'study_guide.visuals.intro': {
    en: 'The shape of the whole text, each key moment in turn, and how the people in it connect.',
    ar: 'شكل النص كامل، وكل لحظة مفتاحية بالترتيب، وشلون ترتبط الشخصيات ببعض.',
    es: 'La forma del texto completo, cada momento clave por turno y cómo se relacionan sus personajes.',
  },
  // The intro above promises the arc and the character map. An act, chapter or
  // stave page shows the scene player alone, so until 26 September 2026 it
  // described two things the page did not have.
  'study_guide.visuals.intro_part': {
    en: 'Each key moment in this part of the text, in turn.',
    ar: 'كل لحظة مفتاحية في هالجزء من النص، بالترتيب.',
    es: 'Cada momento clave de esta parte del texto, por turno.',
  },
  'study_guide.visuals.intro_scenes': {
    en: 'Each key moment in turn. Choose a part of the text to jump to it.',
    ar: 'كل لحظة مفتاحية بالترتيب. اختار جزء من النص عشان تروح له.',
    es: 'Cada momento clave por turno. Elige una parte del texto para ir a ella.',
  },
  // For an overview whose text has too many parts for the chips (Jane Eyre's
  // 23 chapters), so the player shows none to choose from.
  'study_guide.visuals.intro_scenes_all': {
    en: 'Each key moment in the text, in turn.',
    ar: 'كل لحظة مفتاحية في النص، بالترتيب.',
    es: 'Cada momento clave del texto, por turno.',
  },
  'study_guide.visuals.arc_title': {
    en: 'Tension arc',
    ar: 'منحنى التوتّر',
    es: 'Arco de tensión',
  },
  'study_guide.visuals.arc_desc': {
    en: 'How tension rises and falls. Select a point to open that moment.',
    ar: 'شلون يرتفع التوتّر وينزل. اختار نقطة عشان تفتح هاللحظة.',
    es: 'Cómo sube y baja la tensión. Selecciona un punto para abrir ese momento.',
  },
  'study_guide.visuals.arc_note': {
    en: 'Tension is a reading of the text, not a fact about it: use it for the shape, and argue with it.',
    ar: 'التوتّر قراءة للنص مو حقيقة عنه: استخدمه للشكل العام، وناقشه.',
    es: 'La tensión es una lectura del texto, no un hecho: úsala para ver la forma y discútela.',
  },
  'study_guide.visuals.scenes_title': {
    en: 'Key moments',
    ar: 'اللحظات المفتاحية',
    es: 'Momentos clave',
  },
  'study_guide.visuals.map_title': {
    en: 'Character map',
    ar: 'خريطة الشخصيات',
    es: 'Mapa de personajes',
  },
  'study_guide.visuals.map_hint': {
    en: 'Select a person to see their relationships. Rings mark who is in the moment above.',
    ar: 'اختار شخصية عشان تشوف علاقاتها. الحلقات تبيّن منو موجود في اللحظة فوق.',
    es: 'Selecciona a una persona para ver sus relaciones. Los anillos marcan quién está en el momento de arriba.',
  },
  'study_guide.visuals.play': { en: 'Play', ar: 'تشغيل', es: 'Reproducir' },
  'study_guide.visuals.pause': { en: 'Pause', ar: 'إيقاف مؤقت', es: 'Pausa' },
  'study_guide.visuals.previous': {
    en: 'Previous moment',
    ar: 'اللحظة اللي قبل',
    es: 'Momento anterior',
  },
  'study_guide.visuals.next': { en: 'Next moment', ar: 'اللحظة اللي بعد', es: 'Momento siguiente' },
  'study_guide.visuals.moment_of': { en: 'Moment', ar: 'لحظة', es: 'Momento' },
  'study_guide.visuals.of': { en: 'of', ar: 'من', es: 'de' },
  'study_guide.visuals.setting': { en: 'Setting', ar: 'المكان', es: 'Escenario' },
  'study_guide.visuals.who': { en: 'Who', ar: 'منو', es: 'Quién' },
  'study_guide.visuals.why': { en: 'Why it matters', ar: 'ليش مهمّة', es: 'Por qué importa' },
  'study_guide.visuals.tension': { en: 'Tension', ar: 'التوتّر', es: 'Tensión' },
  'study_guide.visuals.all_themes': { en: 'All themes', ar: 'كل المحاور', es: 'Todos los temas' },
  'study_guide.visuals.theme_filter': {
    en: 'Highlight a theme',
    ar: 'ميّز محور',
    es: 'Resalta un tema',
  },
  // The form badge on a guide page, one per GuideForm.
  'study_guide.form.novel': { en: 'Novel', ar: 'رواية', es: 'Novela' },
  'study_guide.form.novella': { en: 'Novella', ar: 'رواية قصيرة', es: 'Novela corta' },
  'study_guide.form.play': { en: 'Play', ar: 'مسرحية', es: 'Obra de teatro' },
  'study_guide.form.poem': { en: 'Poem', ar: 'قصيدة', es: 'Poema' },
  'study_guide.form.short-story': { en: 'Short story', ar: 'قصة قصيرة', es: 'Relato' },
  'study_guide.form.non-fiction': { en: 'Non-fiction', ar: 'نثر واقعي', es: 'No ficción' },
  'study_guide.form.short-story-collection': {
    en: 'Short story collection',
    ar: 'مجموعة قصص قصيرة',
    es: 'Colección de relatos',
  },

  // "Read the whole text": links to copies the rights-holder published. The
  // intro says only what src/lib/study-guides/where-to-read.ts admits.
  'study_guide.read.heading': {
    en: 'Read the whole text',
    ar: 'اقرأ النص كامل',
    es: 'Lee el texto completo',
  },
  'study_guide.read.intro': {
    en: 'This page quotes only short phrases. The whole text is online where its publisher or writer put it there, and these links go to those copies.',
    ar: 'هالصفحة تقتبس بس عبارات قصيرة. النص كامل موجود أونلاين في المكان اللي نشره فيه الناشر أو الكاتب، وهالروابط توديك لهالنسخ.',
    es: 'Esta página solo cita frases breves. El texto completo está en línea donde lo publicó su editorial o su autor, y estos enlaces llevan a esas copias.',
  },
  'study_guide.read.new_tab': {
    en: 'opens in a new tab',
    ar: 'يفتح في تبويب جديد',
    es: 'se abre en una pestaña nueva',
  },
  'study_guide.read.kind.full_text': { en: 'Read it', ar: 'اقرأه', es: 'Léelo' },
  'study_guide.read.kind.video': { en: 'Watch it', ar: 'شوفه', es: 'Míralo' },
  'study_guide.read.kind.audio': { en: 'Hear it', ar: 'اسمعه', es: 'Escúchalo' },
  'study_guide.read.kind.board_anthology': {
    en: 'In the exam board anthology',
    ar: 'في مختارات مجلس الامتحانات',
    es: 'En la antología del tribunal examinador',
  },
  'study_guide.visuals.parts': {
    en: 'Jump to a part of the text',
    ar: 'روح لجزء من النص',
    es: 'Ir a una parte del texto',
  },

  // "Characters as described": linocut portraits drawn from the text's own
  // words, rendered by src/components/study-guide/visuals/characters-as-described.tsx.
  // The portraits' quotations stay in English, as all guide content does.
  'study_guide.comics.gallery_heading': {
    en: 'Characters as described',
    ar: 'الشخصيات مثل ما يوصفها النص',
    es: 'Los personajes tal como se describen',
  },
  'study_guide.comics.gallery_intro': {
    en: 'Each portrait is drawn from the words of the text, not from a film or a stage production. The numbers on the picture point to those words.',
    ar: 'كل صورة مرسومة من كلمات النص نفسه، مو من فيلم ولا من عرض مسرحي. الأرقام اللي على الصورة تأشّر على هالكلمات.',
    es: 'Cada retrato está dibujado a partir de las palabras del texto, no de una película ni de una puesta en escena. Los números de la imagen señalan esas palabras.',
  },
  'study_guide.comics.markers_label': {
    en: 'The words the numbers point to',
    ar: 'الكلمات اللي تأشّر عليها الأرقام',
    es: 'Las palabras que señalan los números',
  },

  // The word counts in these two lines are true of every page that shows them:
  // the validator holds every guide to them, and quoted_total is computed from
  // the guide it sits under. The older pages printed "15 words or fewer" above
  // quotations of up to 46 words; this cannot.
  'study_guide.rights.fair_dealing': {
    en: 'Quotations are short, each under 15 words, and each is followed by analysis of it. They are included, with acknowledgement, for the purpose of criticism and review under the fair-dealing provision of the Copyright, Designs and Patents Act 1988 (s.30). Longer passages are pointed to rather than printed. This guide is not a substitute for reading the text.',
    ar: 'الاقتباسات قصيرة، كل واحد أقل من 15 كلمة، ويتبعه تحليل له. مذكورة مع الإشارة إلى مصدرها لغرض النقد والمراجعة ضمن بند الاستخدام العادل في قانون حقوق النشر والتصاميم وبراءات الاختراع لعام 1988 (CDPA، المادة 30). المقاطع الأطول نشير لمكانها بدل ما ننسخها. هالدليل ما يغني عن قراءة النص.',
    es: 'Las citas son breves, de menos de 15 palabras cada una, y cada una va seguida de su análisis. Se incluyen, con reconocimiento de la fuente, con fines de crítica y reseña al amparo de la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 (s.30). Los pasajes más largos se señalan en lugar de reproducirse. Esta guía no sustituye la lectura del texto.',
  },
  'study_guide.rights.quoted_total': {
    en: 'This page quotes {total} words of the text in all, and no quotation is longer than {max} words.',
    ar: 'هالصفحة تقتبس {total} كلمة من النص في المجموع، وما في اقتباس أطول من {max} كلمة.',
    es: 'Esta página cita {total} palabras del texto en total, y ninguna cita supera las {max} palabras.',
  },
  'study_guide.section.extracts': {
    en: 'Key passages for close reading',
    ar: 'مقاطع مفتاحية للقراءة المتأنية',
    es: 'Pasajes clave para lectura atenta',
  },
  'study_guide.extract.find_it': {
    en: 'Where to find it',
    ar: 'وين تلقاها',
    es: 'Dónde encontrarlo',
  },
  'study_guide.rights.public_domain': {
    en: 'This text is out of copyright in the UK.',
    ar: 'هالنص خارج حقوق النشر في المملكة المتحدة.',
    es: 'Este texto está libre de derechos de autor en el Reino Unido.',
  },

  // ─── Chapter guides: one chapter of a text, read closely ─────────────────
  // Headings for src/components/study-guide/chapter-guide-page.tsx.
  'chapter_guide.eyebrow': { en: 'Chapter guide', ar: 'دليل الفصل', es: 'Guía del capítulo' },
  'chapter_guide.open': {
    en: 'Open the full chapter guide',
    ar: 'افتح دليل الفصل كامل',
    es: 'Abre la guía completa del capítulo',
  },
  'chapter_guide.read_in_full': {
    en: 'Read this chapter in full',
    ar: 'اقرا هالفصل كامل',
    es: 'Lee este capítulo completo',
  },
  'chapter_guide.all_chapters': { en: 'All chapters', ar: 'كل الفصول', es: 'Todos los capítulos' },
  'chapter_guide.previous': { en: 'Previous chapter', ar: 'الفصل السابق', es: 'Capítulo anterior' },
  'chapter_guide.next': { en: 'Next chapter', ar: 'الفصل التالي', es: 'Capítulo siguiente' },
  'chapter_guide.nav_label': {
    en: 'In this chapter guide',
    ar: 'في دليل هالفصل',
    es: 'En esta guía',
  },
  'chapter_guide.summary': { en: 'What happens', ar: 'شنو يصير', es: 'Qué pasa' },
  'chapter_guide.key_events': {
    en: 'Key events and turning points',
    ar: 'الأحداث المهمة ونقاط التحوّل',
    es: 'Hechos clave y puntos de giro',
  },
  'chapter_guide.close_reading': { en: 'Close reading', ar: 'قراءة متأنية', es: 'Lectura atenta' },
  'chapter_guide.technique': { en: 'Technique', ar: 'الأسلوب', es: 'Técnica' },
  'chapter_guide.characters': {
    en: 'Characters in this chapter',
    ar: 'الشخصيات في هالفصل',
    es: 'Personajes en este capítulo',
  },
  'chapter_guide.themes': { en: 'Themes', ar: 'المحاور', es: 'Temas' },
  'chapter_guide.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'chapter_guide.structure': { en: 'Structure', ar: 'البنية', es: 'Estructura' },
  'chapter_guide.vocabulary': { en: 'Vocabulary', ar: 'المفردات', es: 'Vocabulario' },
  'chapter_guide.exam': { en: 'Exam practice', ar: 'تمرين امتحان', es: 'Práctica de examen' },
  'chapter_guide.quiz': { en: 'Check yourself', ar: 'اختبر نفسك', es: 'Ponte a prueba' },
  'chapter_guide.show_answer': {
    en: 'Show the answer',
    ar: 'اعرض الجواب',
    es: 'Mostrar la respuesta',
  },
}
