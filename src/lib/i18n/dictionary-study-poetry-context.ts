/**
 * Study poetry + context i18n dictionary (study.poetry.* / study.context.*
 * and a shared study.shared.* sub-namespace).
 *
 * Scope: UI CHROME ONLY for the GCSE study pages under
 *   src/app/resources/poetry/**  and  src/app/resources/context/**
 *
 * What lives here: "Back to ..." links, breadcrumbs, buttons/CTAs, search +
 * filter UI labels, generic recurring SECTION HEADINGS (Summary, Themes,
 * Context, Key Quotes, Form & Structure, Comparison Suggestions, Overview,
 * Exam Tip ...), tab labels, and page hero / intro MARKETING copy.
 *
 * What does NOT live here: poem text + quotations, the analysis / teaching
 * prose, context PROSE paragraphs, annotations, model answers, examiner
 * commentary. Those stay English in the page files and are never keyed.
 *
 * Conventions:
 *   - Brand + board names (GCSE, IGCSE, AQA, Edexcel, Eduqas, OCR, WJEC,
 *     Cambridge, AO1-AO6, £) stay Latin.
 *   - Poem titles + poet names stay Latin (rendered straight from data,
 *     never keyed here).
 *   - Literary-device terms (volta, caesura, enjambment, sibilance, iambic
 *     pentameter ...) stay Latin.
 *   - Khaleeji (Gulf) Arabic: شنو / أبغى / وايد / الحين / إحنا / روح / شوف /
 *     دوّر / سكّر / ببلاش. Levantine BANNED: شو / بحكي / كيفك / ليش.
 *
 * Annotated with an explicit Record type (NOT `as const`) so the orchestrator
 * (dictionary.ts) can merge it via lookup(). DO NOT edit dictionary.ts here.
 */

export const STUDY_POETRY_CONTEXT_DICTIONARY: Record<
  string,
  { en: string; ar?: string; es?: string }
> = {
  /* ───────────────────────── Shared chrome ──────────────────────────── */
  // Breadcrumb + nav labels reused across context era pages.
  'study.shared.crumb.home': { en: 'Home', ar: 'الرئيسية', es: 'Inicio' },
  'study.shared.crumb.resources': { en: 'Resources', ar: 'المصادر', es: 'Recursos' },
  'study.shared.crumb.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'study.shared.crumb.poetry': { en: 'Poetry', ar: 'الشعر', es: 'Poesía' },
  'study.shared.aria.breadcrumb': { en: 'Breadcrumb', ar: 'مسار التنقل', es: 'Ruta de navegación' },

  // Recurring generic section headings (chrome). The teaching prose that sits
  // BELOW each of these stays English in the page files.
  'study.shared.heading.summary': { en: 'Summary', ar: 'الملخّص', es: 'Resumen' },
  'study.shared.heading.themes': { en: 'Themes', ar: 'المواضيع', es: 'Temas' },
  'study.shared.heading.context': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'study.shared.heading.key_quotes': { en: 'Key Quotes', ar: 'أهم الاقتباسات', es: 'Citas clave' },
  'study.shared.heading.key_quotes_analysis': {
    en: 'Key Quotes & Analysis',
    ar: 'أهم الاقتباسات والتحليل',
    es: 'Citas clave y análisis',
  },
  'study.shared.heading.form_structure': {
    en: 'Form & Structure',
    ar: 'الشكل والبنية',
    es: 'Forma y estructura',
  },
  'study.shared.heading.comparison_suggestions': {
    en: 'Comparison Suggestions',
    ar: 'اقتراحات للمقارنة',
    es: 'Sugerencias de comparación',
  },
  'study.shared.heading.comparison_pairs': {
    en: 'Comparison Pairs',
    ar: 'أزواج المقارنة',
    es: 'Parejas de comparación',
  },
  'study.shared.heading.version_note': {
    en: 'Version note',
    ar: 'ملاحظة النسخة',
    es: 'Nota de versión',
  },

  // Common CTAs / buttons.
  'study.shared.cta.back_to_poetry': {
    en: 'Back to Poetry Hub',
    ar: 'رجوع لصفحة الشعر',
    es: 'Volver al centro de poesía',
  },
  'study.shared.cta.study_in_depth': {
    en: 'Study this poem in depth',
    ar: 'ذاكر هالقصيدة بالتفصيل',
    es: 'Estudia este poema en profundidad',
  },
  'study.shared.cta.view_analysis': { en: 'View analysis', ar: 'شوف التحليل', es: 'Ver análisis' },
  'study.shared.btn.expand_all': { en: 'Expand All', ar: 'وسّع الكل', es: 'Expandir todo' },
  'study.shared.btn.collapse_all': { en: 'Collapse All', ar: 'سكّر الكل', es: 'Contraer todo' },

  /* ───────────────────────── Context hub page ───────────────────────── */
  'study.context.hub.hero.eyebrow': {
    en: 'GCSE English Literature',
    ar: 'GCSE English Literature',
    es: 'GCSE English Literature',
  },
  'study.context.hub.hero.title': {
    en: 'Historical & Social Context',
    ar: 'السياق التاريخي والاجتماعي',
    es: 'Contexto histórico y social',
  },
  'study.context.hub.hero.subtitle': {
    en: 'Context is worth up to a third of your marks in Literature. Learn the historical periods behind every set text and discover how to weave contextual knowledge into your essays for top-band responses.',
    ar: 'السياق يجيب لك لين ثلث الدرجات في الأدب. تعلّم الفترات التاريخية ورا كل نص مقرّر وشوف شلون تدمج معرفة السياق في مقالاتك عشان أعلى الدرجات.',
    es: 'El contexto vale hasta un tercio de tu nota en Literatura. Aprende los periodos históricos que hay detrás de cada texto obligatorio y descubre cómo integrar el conocimiento contextual en tus ensayos para obtener respuestas de la banda más alta.',
  },
  // Era navigational card titles (chrome). Periods stay as dates.
  'study.context.hub.era.victorian': {
    en: 'Victorian Era',
    ar: 'العصر الفكتوري',
    es: 'Era victoriana',
  },
  'study.context.hub.era.elizabethan': {
    en: 'Elizabethan & Jacobean',
    ar: 'العصر الإليزابيثي والجاكوبي',
    es: 'Era isabelina y jacobea',
  },
  'study.context.hub.era.twentieth': {
    en: 'Twentieth Century',
    ar: 'القرن العشرين',
    es: 'Siglo XX',
  },
  'study.context.hub.era.romantic': {
    en: 'Romantic Era',
    ar: 'العصر الرومانسي',
    es: 'Era romántica',
  },
  // Era navigational card descriptions (chrome — short card blurbs).
  'study.context.hub.era.victorian.desc': {
    en: 'The reign of Queen Victoria saw rapid industrialisation, stark class divisions, the workhouse system, and seismic debates between religion and science. Essential context for A Christmas Carol and Jekyll & Hyde.',
    ar: 'فترة حكم الملكة Victoria شهدت تصنيع سريع وفروق طبقية حادة ونظام دور الفقراء ونقاشات كبيرة بين الدين والعلم. سياق أساسي لـ A Christmas Carol و Jekyll & Hyde.',
    es: 'El reinado de la reina Victoria vivió una rápida industrialización, marcadas divisiones de clase, el sistema de asilos para pobres y profundos debates entre la religión y la ciencia. Contexto esencial para A Christmas Carol y Jekyll & Hyde.',
  },
  'study.context.hub.era.elizabethan.desc': {
    en: 'The age of Shakespeare: the Great Chain of Being, Divine Right of Kings, witchcraft fears, and the birth of professional theatre. Vital for Macbeth, Romeo and Juliet, and The Tempest.',
    ar: 'عصر Shakespeare: سلسلة الوجود الكبرى والحق الإلهي للملوك والخوف من السحر وولادة المسرح الاحترافي. مهم وايد لـ Macbeth و Romeo and Juliet و The Tempest.',
    es: 'La época de Shakespeare: la Gran Cadena del Ser, el derecho divino de los reyes, los miedos a la brujería y el nacimiento del teatro profesional. Fundamental para Macbeth, Romeo and Juliet y The Tempest.',
  },
  'study.context.hub.era.twentieth.desc': {
    en: "Two world wars, the welfare state, class upheaval, and Thatcher's Britain. Understand the social forces behind An Inspector Calls, Lord of the Flies, Animal Farm, and Blood Brothers.",
    ar: 'حربان عالميتان ودولة الرفاه وتقلّبات طبقية وبريطانيا في عهد Thatcher. افهم القوى الاجتماعية ورا An Inspector Calls و Lord of the Flies و Animal Farm و Blood Brothers.',
    es: 'Dos guerras mundiales, el estado del bienestar, la convulsión de clases y la Gran Bretaña de Thatcher. Comprende las fuerzas sociales que hay detrás de An Inspector Calls, Lord of the Flies, Animal Farm y Blood Brothers.',
  },
  'study.context.hub.era.romantic.desc': {
    en: 'A reaction against industrialisation and rationalism. The Romantics championed nature, individual freedom, emotion, and the sublime. Key context for the poetry anthology.',
    ar: 'ردّة فعل ضد التصنيع والعقلانية. الرومانسيون نصروا الطبيعة والحرية الفردية والعاطفة والسامي. سياق مهم لمختارات الشعر.',
    es: 'Una reacción contra la industrialización y el racionalismo. Los románticos defendieron la naturaleza, la libertad individual, la emoción y lo sublime. Contexto clave para la antología de poesía.',
  },
  'study.context.hub.era.cta': {
    en: 'Explore this era',
    ar: 'استكشف هالعصر',
    es: 'Explora esta era',
  },
  'study.context.hub.why.title': {
    en: 'Why does context matter in the exam?',
    ar: 'ليش السياق مهم في الامتحان؟',
    es: '¿Por qué importa el contexto en el examen?',
  },
  'study.context.hub.continue.title': {
    en: 'Continue exploring',
    ar: 'كمّل استكشاف',
    es: 'Seguir explorando',
  },
  // Quick-link navigational cards.
  'study.context.hub.link.revision_notes': {
    en: 'Revision Notes',
    ar: 'ملاحظات المراجعة',
    es: 'Notas de repaso',
  },
  'study.context.hub.link.revision_notes.desc': {
    en: 'Text-by-text revision guides for Literature.',
    ar: 'أدلّة مراجعة نص بنص للأدب.',
    es: 'Guías de repaso texto por texto para Literatura.',
  },
  'study.context.hub.link.techniques': {
    en: 'Techniques Reference',
    ar: 'مرجع الأساليب',
    es: 'Referencia de técnicas',
  },
  'study.context.hub.link.techniques.desc': {
    en: 'Language and structural devices for analysis.',
    ar: 'أساليب اللغة والبنية للتحليل.',
    es: 'Recursos lingüísticos y estructurales para el análisis.',
  },
  'study.context.hub.link.all_resources': {
    en: 'All Resources',
    ar: 'كل المصادر',
    es: 'Todos los recursos',
  },
  'study.context.hub.link.all_resources.desc': {
    en: 'Browse all revision resources.',
    ar: 'تصفّح كل مصادر المراجعة.',
    es: 'Explora todos los recursos de repaso.',
  },

  /* ─────────────────────── Context era pages ────────────────────────── */
  // Page H1 titles (chrome).
  'study.context.era.victorian.title': {
    en: 'Victorian Era Context',
    ar: 'سياق العصر الفكتوري',
    es: 'Contexto de la era victoriana',
  },
  'study.context.era.elizabethan.title': {
    en: 'Elizabethan & Jacobean Context',
    ar: 'سياق العصر الإليزابيثي والجاكوبي',
    es: 'Contexto de la era isabelina y jacobea',
  },
  'study.context.era.twentieth.title': {
    en: 'Twentieth-Century Context',
    ar: 'سياق القرن العشرين',
    es: 'Contexto del siglo XX',
  },
  'study.context.era.romantic.title': {
    en: 'Romantic Era Context',
    ar: 'سياق العصر الرومانسي',
    es: 'Contexto de la era romántica',
  },
  // Breadcrumb current-page labels (chrome).
  'study.context.era.victorian.crumb': {
    en: 'Victorian Era',
    ar: 'العصر الفكتوري',
    es: 'Era victoriana',
  },
  'study.context.era.elizabethan.crumb': {
    en: 'Elizabethan & Jacobean',
    ar: 'العصر الإليزابيثي والجاكوبي',
    es: 'Era isabelina y jacobea',
  },
  'study.context.era.twentieth.crumb': {
    en: 'Twentieth Century',
    ar: 'القرن العشرين',
    es: 'Siglo XX',
  },
  'study.context.era.romantic.crumb': {
    en: 'Romantic Era',
    ar: 'العصر الرومانسي',
    es: 'Era romántica',
  },
  // Hero intro paragraphs (page intro marketing copy — chrome).
  'study.context.era.victorian.intro': {
    en: "The Victorian period transformed Britain from a rural society into the world's first industrial superpower. Understanding these seismic social changes is essential for analysing Dickens and Stevenson.",
    ar: 'الفترة الفكتورية حوّلت بريطانيا من مجتمع ريفي لأول قوة صناعية عظمى في العالم. فهم هالتغيّرات الاجتماعية الكبيرة أساسي لتحليل Dickens و Stevenson.',
    es: 'El periodo victoriano transformó Gran Bretaña de una sociedad rural en la primera superpotencia industrial del mundo. Comprender estos profundos cambios sociales es esencial para analizar a Dickens y a Stevenson.',
  },
  'study.context.era.elizabethan.intro': {
    en: 'Shakespeare wrote during two monarchies: Elizabeth I and James I. Understanding the beliefs, fears, and power structures of this period is essential for unlocking the deeper meanings of his plays.',
    ar: 'Shakespeare كتب في عهد ملكين: Elizabeth I و James I. فهم المعتقدات والمخاوف وتركيب السلطة في هالفترة أساسي عشان تفك المعاني الأعمق في مسرحياته.',
    es: 'Shakespeare escribió durante dos monarquías: la de Isabel I y la de Jacobo I. Comprender las creencias, los miedos y las estructuras de poder de este periodo es esencial para desentrañar los significados más profundos de sus obras.',
  },
  'study.context.era.twentieth.intro': {
    en: "The twentieth century reshaped Britain through two world wars, the birth of the welfare state, Cold War tensions, and Thatcher's revolution. These upheavals are the backdrop to some of the most studied GCSE texts.",
    ar: 'القرن العشرين أعاد تشكيل بريطانيا عبر حربين عالميتين وولادة دولة الرفاه وتوترات الحرب الباردة وثورة Thatcher. هالتقلّبات هي خلفية بعض أكثر نصوص GCSE دراسةً.',
    es: 'El siglo XX reconfiguró Gran Bretaña a través de dos guerras mundiales, el nacimiento del estado del bienestar, las tensiones de la Guerra Fría y la revolución de Thatcher. Estas convulsiones son el telón de fondo de algunos de los textos de GCSE más estudiados.',
  },
  'study.context.era.romantic.intro': {
    en: 'The Romantic movement was a passionate reaction against industrialisation, rationalism, and social conformity. Understanding Romantic ideals is key to analysing the poetry anthology, as many poems draw on Romantic traditions of nature, emotion, and individual freedom.',
    ar: 'الحركة الرومانسية كانت ردّة فعل حماسية ضد التصنيع والعقلانية والامتثال الاجتماعي. فهم المثل الرومانسية مفتاح لتحليل مختارات الشعر، لأن وايد قصائد تعتمد على التقاليد الرومانسية في الطبيعة والعاطفة والحرية الفردية.',
    es: 'El movimiento romántico fue una apasionada reacción contra la industrialización, el racionalismo y el conformismo social. Comprender los ideales románticos es clave para analizar la antología de poesía, ya que muchos poemas se basan en las tradiciones románticas de la naturaleza, la emoción y la libertad individual.',
  },
  // Bottom navigation buttons (chrome).
  'study.context.era.nav.all_eras': { en: 'All Eras', ar: 'كل العصور', es: 'Todas las eras' },
  'study.context.era.nav.victorian': {
    en: 'Victorian Era',
    ar: 'العصر الفكتوري',
    es: 'Era victoriana',
  },
  'study.context.era.nav.elizabethan': {
    en: 'Elizabethan & Jacobean',
    ar: 'العصر الإليزابيثي والجاكوبي',
    es: 'Era isabelina y jacobea',
  },
  'study.context.era.nav.twentieth': {
    en: 'Twentieth Century',
    ar: 'القرن العشرين',
    es: 'Siglo XX',
  },
  'study.context.era.nav.romantic': {
    en: 'Romantic Era',
    ar: 'العصر الرومانسي',
    es: 'Era romántica',
  },

  /* ─────────────────── Poetry: Power and Conflict page ──────────────── */
  'study.poetry.pac.hero.eyebrow': {
    en: 'AQA GCSE English Literature (8702) · Poetry Anthology',
    ar: 'AQA GCSE English Literature (8702) · مختارات الشعر',
    es: 'AQA GCSE English Literature (8702) · Antología de poesía',
  },
  'study.poetry.pac.hero.title': {
    en: 'Power and Conflict',
    ar: 'Power and Conflict',
    es: 'Power and Conflict',
  },
  'study.poetry.pac.hero.subtitle': {
    en: 'Complete analysis of all 15 poems in the AQA Power and Conflict cluster. Key quotations, techniques, themes, context, and comparison guidance for every poem. Studied for AQA Paper 2, Section B.',
    ar: 'تحليل كامل لكل الـ 15 قصيدة في مجموعة AQA Power and Conflict. أهم الاقتباسات والأساليب والمواضيع والسياق وإرشاد المقارنة لكل قصيدة. تنذاكر لـ AQA Paper 2, Section B.',
    es: 'Análisis completo de los 15 poemas del grupo AQA Power and Conflict. Citas clave, técnicas, temas, contexto y orientación para la comparación de cada poema. Se estudia para AQA Paper 2, Section B.',
  },
  // Search + filter UI.
  'study.poetry.search.placeholder': {
    en: 'Search poems by title, poet, or theme...',
    ar: 'دوّر القصائد بالعنوان أو الشاعر أو الموضوع...',
    es: 'Busca poemas por título, poeta o tema...',
  },
  'study.poetry.search.clear_aria': { en: 'Clear search', ar: 'امسح البحث', es: 'Borrar búsqueda' },
  'study.poetry.filter.by_theme': {
    en: 'Filter by theme',
    ar: 'فلتر حسب الموضوع',
    es: 'Filtrar por tema',
  },
  'study.poetry.filter.by_period': {
    en: 'Filter by period',
    ar: 'فلتر حسب الفترة',
    es: 'Filtrar por periodo',
  },
  'study.poetry.filter.clear_all': {
    en: 'Clear all filters',
    ar: 'امسح كل الفلاتر',
    es: 'Borrar todos los filtros',
  },
  'study.poetry.results.showing': { en: 'Showing', ar: 'يعرض', es: 'Mostrando' },
  'study.poetry.results.of_poems': { en: 'of 15 poems', ar: 'من 15 قصيدة', es: 'de 15 poemas' },
  'study.poetry.results.broaden': {
    en: ' - try broadening your search.',
    ar: ' - جرّب توسّع بحثك.',
    es: ' - prueba a ampliar tu búsqueda.',
  },
  'study.poetry.results.none_match': {
    en: 'No poems match your current filters. Try adjusting your search or clearing filters.',
    ar: 'ما في قصائد تطابق فلاترك الحالية. جرّب تعدّل بحثك أو تمسح الفلاتر.',
    es: 'Ningún poema coincide con tus filtros actuales. Prueba a ajustar tu búsqueda o a borrar los filtros.',
  },
  'study.poetry.nav.jump_to': { en: 'Jump to a poem:', ar: 'روح لقصيدة:', es: 'Ir a un poema:' },
  'study.poetry.nav.comparison_table': {
    en: 'Comparison Table',
    ar: 'جدول المقارنة',
    es: 'Tabla de comparación',
  },
  // Comparison table section.
  'study.poetry.cmp.title': {
    en: 'Comparison Table',
    ar: 'جدول المقارنة',
    es: 'Tabla de comparación',
  },
  'study.poetry.cmp.subtitle': {
    en: 'Use this at-a-glance table to find poems that work well together for your comparison essay. Click to expand.',
    ar: 'استخدم هالجدول السريع عشان تلقى قصائد تمشي مع بعض في مقال المقارنة. اضغط للتوسيع.',
    es: 'Usa esta tabla de un vistazo para encontrar poemas que funcionan bien juntos para tu ensayo de comparación. Haz clic para expandir.',
  },
  'study.poetry.cmp.show': { en: 'Show', ar: 'اعرض', es: 'Mostrar' },
  'study.poetry.cmp.hide': { en: 'Hide', ar: 'أخفِ', es: 'Ocultar' },
  'study.poetry.cmp.table_suffix': {
    en: 'Comparison Table',
    ar: 'جدول المقارنة',
    es: 'Tabla de comparación',
  },
  'study.poetry.cmp.col.poem': { en: 'Poem', ar: 'القصيدة', es: 'Poema' },
  'study.poetry.cmp.col.poet': { en: 'Poet', ar: 'الشاعر', es: 'Poeta' },
  'study.poetry.cmp.col.period': { en: 'Period', ar: 'الفترة', es: 'Periodo' },
  'study.poetry.cmp.col.key_themes': { en: 'Key Themes', ar: 'أهم المواضيع', es: 'Temas clave' },
  'study.poetry.cmp.col.tone': { en: 'Tone', ar: 'النبرة', es: 'Tono' },
  'study.poetry.cmp.col.form': { en: 'Form', ar: 'الشكل', es: 'Forma' },
  // Thematic groupings + exam tips section headings.
  'study.poetry.pac.thematic.title': {
    en: 'Thematic Groupings for Comparison',
    ar: 'تجميعات موضوعية للمقارنة',
    es: 'Agrupaciones temáticas para la comparación',
  },
  'study.poetry.pac.thematic.subtitle': {
    en: 'When choosing poems to compare, group them by shared themes. Here are the key clusters.',
    ar: 'لمّا تختار قصائد للمقارنة، جمّعها حسب المواضيع المشتركة. هذي أهم المجموعات.',
    es: 'Al elegir poemas para comparar, agrúpalos por temas compartidos. Estos son los grupos clave.',
  },
  'study.poetry.pac.exam_tips.title': {
    en: 'Exam Tips for Power and Conflict',
    ar: 'نصائح الامتحان لـ Power and Conflict',
    es: 'Consejos de examen para Power and Conflict',
  },

  /* ───────────────── Poetry: Love and Relationships page ────────────── */
  'study.poetry.lar.hero.eyebrow': {
    en: 'AQA GCSE English Literature (8702) · Poetry Anthology',
    ar: 'AQA GCSE English Literature (8702) · مختارات الشعر',
    es: 'AQA GCSE English Literature (8702) · Antología de poesía',
  },
  'study.poetry.lar.hero.title': {
    en: 'Love and Relationships',
    ar: 'Love and Relationships',
    es: 'Love and Relationships',
  },
  'study.poetry.lar.hero.subtitle': {
    en: 'Complete analysis of all 15 poems in the AQA Love and Relationships cluster. Key quotations, techniques, themes, context, and comparison guidance for every poem. Studied for AQA Paper 2, Section B.',
    ar: 'تحليل كامل لكل الـ 15 قصيدة في مجموعة AQA Love and Relationships. أهم الاقتباسات والأساليب والمواضيع والسياق وإرشاد المقارنة لكل قصيدة. تنذاكر لـ AQA Paper 2, Section B.',
    es: 'Análisis completo de los 15 poemas del grupo AQA Love and Relationships. Citas clave, técnicas, temas, contexto y orientación para la comparación de cada poema. Se estudia para AQA Paper 2, Section B.',
  },
  'study.poetry.lar.exam_tips.title': {
    en: 'Exam Tips for Love and Relationships',
    ar: 'نصائح الامتحان لـ Love and Relationships',
    es: 'Consejos de examen para Love and Relationships',
  },

  /* ──────────────── Poetry: Edexcel Relationships anthology ─────────── */
  'study.poetry.edex.hero.eyebrow': {
    en: 'Edexcel UK GCSE English Literature (1ET0)',
    ar: 'Edexcel UK GCSE English Literature (1ET0)',
    es: 'Edexcel UK GCSE English Literature (1ET0)',
  },
  'study.poetry.edex.hero.title': {
    en: 'Relationships Poetry Anthology',
    ar: 'مختارات شعر العلاقات',
    es: 'Antología de poesía Relationships',
  },
  'study.poetry.edex.hero.subtitle': {
    en: 'In-depth analysis of all 15 poems in the Edexcel UK GCSE Pearson Anthology Relationships cluster (1ET0 only - not the Edexcel IGCSE 4ET1 anthology). Context, summaries, form and structure, key quotations with technique analysis, themes, and comparison guidance.',
    ar: 'تحليل معمّق لكل الـ 15 قصيدة في مجموعة Edexcel UK GCSE Pearson Anthology Relationships (1ET0 بس - مو مختارات Edexcel IGCSE 4ET1). السياق والملخّصات والشكل والبنية وأهم الاقتباسات مع تحليل الأسلوب والمواضيع وإرشاد المقارنة.',
    es: 'Análisis en profundidad de los 15 poemas del grupo Edexcel UK GCSE Pearson Anthology Relationships (solo 1ET0, no la antología Edexcel IGCSE 4ET1). Contexto, resúmenes, forma y estructura, citas clave con análisis de técnicas, temas y orientación para la comparación.',
  },
  'study.poetry.edex.analysis.title': {
    en: 'Poem Analysis',
    ar: 'تحليل القصيدة',
    es: 'Análisis del poema',
  },
  'study.poetry.edex.analysis.subtitle': {
    en: 'Click any poem to expand its full analysis.',
    ar: 'اضغط أي قصيدة عشان توسّع تحليلها الكامل.',
    es: 'Haz clic en cualquier poema para expandir su análisis completo.',
  },
  'study.poetry.edex.cmp.title': {
    en: 'Comparison Pairs at a Glance',
    ar: 'أزواج المقارنة بنظرة سريعة',
    es: 'Parejas de comparación de un vistazo',
  },
  'study.poetry.edex.cmp.subtitle': {
    en: 'Use this table to plan comparison essays. Each pair identifies a shared link and the key contrast between the two poems.',
    ar: 'استخدم هالجدول عشان تخطّط مقالات المقارنة. كل زوج يحدّد رابط مشترك وأهم تباين بين القصيدتين.',
    es: 'Usa esta tabla para planificar ensayos de comparación. Cada pareja identifica un vínculo compartido y el contraste clave entre los dos poemas.',
  },
  'study.poetry.edex.cmp.label.link': { en: 'Link', ar: 'الرابط', es: 'Vínculo' },
  'study.poetry.edex.cmp.label.contrast': { en: 'Contrast', ar: 'التباين', es: 'Contraste' },
  'study.poetry.edex.cmp.col.poem_a': { en: 'Poem A', ar: 'القصيدة أ', es: 'Poema A' },
  'study.poetry.edex.cmp.col.poem_b': { en: 'Poem B', ar: 'القصيدة ب', es: 'Poema B' },
  'study.poetry.edex.cmp.col.link': { en: 'Link', ar: 'الرابط', es: 'Vínculo' },
  'study.poetry.edex.cmp.col.key_contrast': {
    en: 'Key Contrast',
    ar: 'أهم تباين',
    es: 'Contraste clave',
  },
  'study.poetry.edex.exam_tips.title': {
    en: 'Exam Tips for Poetry Comparison',
    ar: 'نصائح الامتحان لمقارنة الشعر',
    es: 'Consejos de examen para la comparación de poesía',
  },

  /* ─────────────────────── Poetry: Techniques page ──────────────────── */
  'study.poetry.tech.hero.eyebrow': {
    en: 'Poetry Skills',
    ar: 'مهارات الشعر',
    es: 'Destrezas de poesía',
  },
  'study.poetry.tech.hero.title': {
    en: 'Poetry Analysis Techniques',
    ar: 'أساليب تحليل الشعر',
    es: 'Técnicas de análisis de poesía',
  },
  'study.poetry.tech.hero.subtitle': {
    en: 'A complete guide to every poetic form, structural device, sound technique, and figurative language method you need for GCSE English Literature. Each technique includes a definition, a real example from a GCSE poem, its effect, and a sentence starter for your exam.',
    ar: 'دليل كامل لكل شكل شعري وأسلوب بنيوي وتقنية صوتية وطريقة لغة مجازية تحتاجها لـ GCSE English Literature. كل أسلوب يشمل تعريف ومثال حقيقي من قصيدة GCSE وأثره وبداية جملة لامتحانك.',
    es: 'Una guía completa de todas las formas poéticas, recursos estructurales, técnicas sonoras y métodos de lenguaje figurado que necesitas para GCSE English Literature. Cada técnica incluye una definición, un ejemplo real de un poema de GCSE, su efecto y un comienzo de frase para tu examen.',
  },
  'study.poetry.tech.search.placeholder': {
    en: 'Search techniques, poems, or definitions...',
    ar: 'دوّر الأساليب أو القصائد أو التعريفات...',
    es: 'Busca técnicas, poemas o definiciones...',
  },
  'study.poetry.tech.clear_filters': {
    en: 'Clear search and filters',
    ar: 'امسح البحث والفلاتر',
    es: 'Borrar búsqueda y filtros',
  },
  // Category tab/filter labels (also used as section headings). Logic keeps
  // the English value; only the display label is translated.
  'study.poetry.tech.cat.all': { en: 'All', ar: 'الكل', es: 'Todas' },
  'study.poetry.tech.cat.form_types': { en: 'Form Types', ar: 'أنواع الشكل', es: 'Tipos de forma' },
  'study.poetry.tech.cat.structural_devices': {
    en: 'Structural Devices',
    ar: 'الأساليب البنيوية',
    es: 'Recursos estructurales',
  },
  'study.poetry.tech.cat.sound_devices': {
    en: 'Sound Devices',
    ar: 'الأساليب الصوتية',
    es: 'Recursos sonoros',
  },
  'study.poetry.tech.cat.figurative_language': {
    en: 'Figurative Language',
    ar: 'اللغة المجازية',
    es: 'Lenguaje figurado',
  },
  'study.poetry.tech.cat.tone_mood': {
    en: 'Tone & Mood',
    ar: 'النبرة والمزاج',
    es: 'Tono y ambiente',
  },
  'study.poetry.tech.compare.title': {
    en: 'How to Compare Poems',
    ar: 'شلون تقارن القصائد',
    es: 'Cómo comparar poemas',
  },
  'study.poetry.tech.exam_tips.title': {
    en: 'Exam Tips for Poetry Analysis',
    ar: 'نصائح الامتحان لتحليل الشعر',
    es: 'Consejos de examen para el análisis de poesía',
  },
}
