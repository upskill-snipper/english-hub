/**
 * dictionary-rev-textgrp3.ts
 *
 * Third set-text page-chrome shard (curated EN + Khaleeji Gulf Arabic + Spanish)
 * for the /revision/texts/** modern-drama revision pages:
 *   - A View from the Bridge (landing + characters + context + extract-walkthrough
 *     + key-quotes + themes)
 *   - A Streetcar Named Desire (landing)
 *   - Blood Brothers (landing + extract-walkthrough)
 *
 * SCOPE: UI CHROME ONLY — page titles & taglines, section headings, byline/
 * intro framing sentences, nav/breadcrumb labels, buttons/CTAs, generic card
 * labels, badges and the fair-dealing footers. The literary text, quotations,
 * line refs, teaching/analysis prose, model answers and detailed character/
 * theme explanatory paragraphs are STUDY CONTENT and stay English in the page
 * source (mirroring the converted Macbeth / An Inspector Calls exemplars).
 *
 * Brand/exam/title/author/device terms stay Latin in BOTH ar and es:
 * GCSE, IGCSE, AQA, Edexcel, Eduqas, OCR, A-Level, AO1–AO3, play titles
 * (A View from the Bridge, A Streetcar Named Desire, Blood Brothers), author
 * names (Arthur Miller, Tennessee Williams, Willy Russell) and character names.
 *
 * Khaleeji register (NOT MSA / NOT Levantine): شنو/أبغى/وايد/الحين/إحنا/
 * روح/شوف/دوّر/سكّر/لحظة. Banned: شو, بحكي, كيفك, ليش.
 *
 * {tokens} are preserved exactly across all three languages.
 *
 * NOTE: annotated Record (NOT `as const`) so the orchestrator can merge it via
 * lookup() in dictionary.ts. Shared chrome (rev.texts.common.*) is reused from
 * dictionary-rev-texts.ts and is NOT redefined here.
 */

import type { Dictionary } from './dictionary'

export const REV_TEXTGRP3_DICTIONARY: Dictionary = {
  // ─── Shared chrome unique to this group (reused across its subpages) ─────
  'rev.texts.grp3.common.character_arc_h': {
    en: 'Character arc',
    ar: 'مسار الشخصية',
    es: 'Arco del personaje',
  },
  'rev.texts.grp3.common.key_quotations_h': {
    en: 'Key quotations',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.grp3.common.contextual_link_h': {
    en: 'Contextual link',
    ar: 'الرابط السياقي',
    es: 'Vínculo contextual',
  },
  'rev.texts.grp3.common.how_miller_presents_it_h': {
    en: 'How Miller presents it',
    ar: 'كيف يقدّمه Miller',
    es: 'Cómo lo presenta Miller',
  },
  'rev.texts.grp3.common.modern_text_play': {
    en: 'Modern Text - Play',
    ar: 'نص حديث - مسرحية',
    es: 'Texto moderno - Obra',
  },
  'rev.texts.grp3.common.nav_characters': {
    en: 'Characters',
    ar: 'الشخصيات',
    es: 'Personajes',
  },
  'rev.texts.grp3.common.nav_themes': { en: 'Themes', ar: 'المحاور', es: 'Temas' },
  'rev.texts.grp3.common.nav_key_quotes': {
    en: 'Key quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.grp3.common.nav_context': { en: 'Context', ar: 'السياق', es: 'Contexto' },

  // ─── A View from the Bridge — back link (Latin title) ────────────────────
  'rev.texts.avftb.back': {
    en: 'Back to A View from the Bridge',
    ar: 'رجوع إلى A View from the Bridge',
    es: 'Volver a A View from the Bridge',
  },

  // ─── A View from the Bridge — characters page chrome ─────────────────────
  'rev.texts.avftb.characters.title': {
    en: 'Character Analysis',
    ar: 'تحليل الشخصيات',
    es: 'Análisis de personajes',
  },
  'rev.texts.avftb.byline': {
    en: 'A View from the Bridge by Arthur Miller',
    ar: 'A View from the Bridge تأليف Arthur Miller',
    es: 'A View from the Bridge de Arthur Miller',
  },
  'rev.texts.avftb.characters.intro': {
    en: 'Deep profiles for every major character: overview, arc, key quotations and examiner tips. All quotes are 15 words or fewer.',
    ar: 'بروفايلات معمّقة لكل شخصية رئيسية: نظرة عامة، ومسار الشخصية، واقتباسات مفتاحية، ونصائح المصححين. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Perfiles a fondo de cada personaje principal: resumen, arco, citas clave y consejos de examinadores. Todas las citas tienen 15 palabras o menos.',
  },

  // ─── A View from the Bridge — themes page chrome ─────────────────────────
  'rev.texts.avftb.themes.title': {
    en: 'Theme Analysis',
    ar: 'تحليل المحاور',
    es: 'Análisis de temas',
  },
  'rev.texts.avftb.themes.intro': {
    en: "Six major themes explored in depth with Miller's methods, contextual links and examiner guidance. All quotes are 15 words or fewer.",
    ar: 'ستة محاور رئيسية مستكشفة بعمق مع أساليب Miller، وروابط سياقية، وإرشادات المصححين. كل الاقتباسات 15 كلمة أو أقل.',
    es: 'Seis temas principales explorados a fondo con los métodos de Miller, vínculos contextuales y orientación de examinadores. Todas las citas tienen 15 palabras o menos.',
  },

  // ─── A View from the Bridge — key-quotes page chrome ─────────────────────
  'rev.texts.avftb.quotes.title': {
    en: 'Key Quotations',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.avftb.quotes.intro': {
    en: 'Twenty essential quotations for exam revision. Each quote is 15 words or fewer, with speaker, context, analysis and theme tags for quick reference.',
    ar: 'عشرين اقتباس أساسي للمراجعة قبل الامتحان. كل اقتباس 15 كلمة أو أقل، مع المتحدّث والسياق والتحليل ووسوم المحاور للرجوع السريع.',
    es: 'Veinte citas esenciales para repasar antes del examen. Cada cita tiene 15 palabras o menos, con hablante, contexto, análisis y etiquetas temáticas para consulta rápida.',
  },
  'rev.texts.avftb.quotes.count_h': {
    en: '20 Key Quotes',
    ar: '20 اقتباس مفتاحي',
    es: '20 citas clave',
  },

  // ─── A View from the Bridge — context page chrome ────────────────────────
  'rev.texts.avftb.context.title': {
    en: 'A View from the Bridge — Context',
    ar: 'A View from the Bridge — السياق',
    es: 'A View from the Bridge — Contexto',
  },
  'rev.texts.avftb.context.byline': {
    en: 'by Arthur Miller — 1955/1956',
    ar: 'تأليف Arthur Miller — 1955/1956',
    es: 'por Arthur Miller — 1955/1956',
  },
  'rev.texts.avftb.context.intro': {
    en: 'The essential background you need for the exam: 1950s Red Hook Brooklyn, Italian immigration, waterfront culture, Greek tragedy, McCarthyism, codes of honour and the American Dream.',
    ar: 'الخلفية الأساسية اللي تحتاجها للامتحان: Red Hook Brooklyn في الخمسينات، والهجرة الإيطالية، وثقافة الميناء، والتراجيديا الإغريقية، والمكارثية، وقوانين الشرف، والحلم الأمريكي.',
    es: 'Los antecedentes esenciales que necesitas para el examen: el Red Hook de Brooklyn de los años 50, la inmigración italiana, la cultura portuaria, la tragedia griega, el macartismo, los códigos de honor y el sueño americano.',
  },
  'rev.texts.avftb.context.ao3_badge': {
    en: 'AO3 — Context',
    ar: 'AO3 — السياق',
    es: 'AO3 — Contexto',
  },
  'rev.texts.avftb.context.examiners_want_h': {
    en: 'AO3 — What examiners want',
    ar: 'AO3 — شنو يبغون المصححون',
    es: 'AO3 — Qué quieren los examinadores',
  },
  'rev.texts.avftb.context.examiners_want_body': {
    en: 'AO3 rewards you for showing how context shapes meaning. Do not simply list historical facts — explain how the 1950s setting, Italian immigration and McCarthyism affect the audience’s response to the play. The best answers explain why Miller made specific choices, not just when things happened.',
    ar: 'AO3 يكافئك لمّا تبيّن كيف السياق يشكّل المعنى. لا تكتفي بسرد الحقائق التاريخية — اشرح كيف تؤثّر أجواء الخمسينات والهجرة الإيطالية والمكارثية على ردّة فعل الجمهور تجاه المسرحية. أفضل الإجابات تشرح سبب اختيار Miller لخيارات معيّنة، مو بس متى صارت الأمور.',
    es: 'AO3 te premia por mostrar cómo el contexto da forma al significado. No te limites a enumerar hechos históricos: explica cómo el ambiente de los años 50, la inmigración italiana y el macartismo afectan la respuesta del público a la obra. Las mejores respuestas explican por qué Miller tomó decisiones concretas, no solo cuándo ocurrieron las cosas.',
  },
  'rev.texts.avftb.context.continue_sub': {
    en: 'Explore characters, themes, and key quotes for A View from the Bridge.',
    ar: 'استكشف الشخصيات والمحاور والاقتباسات المفتاحية لـ A View from the Bridge.',
    es: 'Explora los personajes, los temas y las citas clave de A View from the Bridge.',
  },
  'rev.texts.avftb.context.fair_dealing': {
    en: 'Short quotations (≤15 words each) reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism, review and educational study. A View from the Bridge © Arthur Miller Estate. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة (15 كلمة أو أقل لكل واحد) منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لغرض النقد والمراجعة والدراسة التعليمية. A View from the Bridge © Arthur Miller Estate. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves (≤15 palabras cada una) reproducidas conforme a la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 con fines de crítica, reseña y estudio educativo. A View from the Bridge © Arthur Miller Estate. Texto completo disponible en tu colegio o biblioteca local.',
  },

  // ─── Shared simple fair-dealing line (criticism & review) ────────────────
  'rev.texts.grp3.common.fair_dealing_short': {
    en: 'Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for criticism and review. Full text available from your school or local library.',
    ar: 'اقتباسات قصيرة منسوخة بموجب بند الاستخدام العادل من Copyright, Designs and Patents Act 1988 لغرض النقد والمراجعة. النص الكامل متوفر من مدرستك أو مكتبتك المحلية.',
    es: 'Citas breves reproducidas conforme a la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 con fines de crítica y reseña. Texto completo disponible en tu colegio o biblioteca local.',
  },

  // ─── A View from the Bridge — extract-walkthrough page chrome ────────────
  'rev.texts.avftb.extract.badge_modern_tragedy': {
    en: 'Modern Tragedy',
    ar: 'تراجيديا حديثة',
    es: 'Tragedia moderna',
  },
  'rev.texts.avftb.extract.badge_extract_skills': {
    en: 'Extract Skills',
    ar: 'مهارات المقتطف',
    es: 'Habilidades de extracto',
  },
  'rev.texts.avftb.extract.title': {
    en: 'Extract Walkthrough - The Climactic Confrontation',
    ar: 'شرح المقتطف - المواجهة الذروية',
    es: 'Recorrido por el extracto - La confrontación culminante',
  },
  'rev.texts.avftb.extract.intro': {
    en: 'Eddie versus Marco in the Red Hook street: how Arthur Miller stages the inevitable. A close-reading walkthrough using Notice / Say / Zoom Out cards, with a model 250-word paragraph on Alfieri’s "destiny" and Greek tragic structure.',
    ar: 'Eddie في مواجهة Marco في شارع Red Hook: كيف يخرج Arthur Miller المحتوم. شرح بالقراءة المتأنّية باستخدام بطاقات Notice / Say / Zoom Out، مع فقرة نموذجية من 250 كلمة عن "destiny" عند Alfieri والبنية التراجيدية الإغريقية.',
    es: 'Eddie frente a Marco en la calle de Red Hook: cómo Arthur Miller escenifica lo inevitable. Un recorrido de lectura atenta con tarjetas Notice / Say / Zoom Out y un párrafo modelo de 250 palabras sobre el "destiny" de Alfieri y la estructura trágica griega.',
  },
  'rev.texts.avftb.extract.where_sits_h': {
    en: 'Where this extract sits',
    ar: 'موقع هذا المقتطف',
    es: 'Dónde se sitúa este extracto',
  },
  'rev.texts.avftb.extract.where_sits_desc': {
    en: "The play's closing minutes, on the street outside the Carbone apartment, immediately after Marco has been released on bail and Eddie has refused to retract his act of informing.",
    ar: 'الدقائق الأخيرة من المسرحية، في الشارع خارج شقة Carbone، مباشرةً بعد ما خرج Marco بكفالة ورفض Eddie إنه يتراجع عن وشايته.',
    es: 'Los minutos finales de la obra, en la calle frente al apartamento de los Carbone, justo después de que Marco sale bajo fianza y Eddie se niega a retractarse de su delación.',
  },
  'rev.texts.avftb.extract.nsz_h': {
    en: 'Notice / Say / Zoom Out',
    ar: 'Notice / Say / Zoom Out',
    es: 'Notice / Say / Zoom Out',
  },
  'rev.texts.avftb.extract.nsz_intro': {
    en: 'Six moments through the climax. For each: what the audience notices on stage, what an examiner-grade reader would say about it, and how to zoom out to context, form and tradition.',
    ar: 'ست لحظات عبر الذروة. لكل وحدة: شنو يلاحظه الجمهور على المسرح، وشنو يقوله قارئ بمستوى المصححين عنها، وكيف توسّع الصورة نحو السياق والشكل والتقليد.',
    es: 'Seis momentos a lo largo del clímax. Para cada uno: qué nota el público en escena, qué diría sobre ello un lector con nivel de examinador y cómo ampliar la mirada hacia el contexto, la forma y la tradición.',
  },
  'rev.texts.avftb.extract.moment_n': {
    en: 'Moment {n}',
    ar: 'اللحظة {n}',
    es: 'Momento {n}',
  },
  'rev.texts.grp3.common.notice': { en: 'Notice', ar: 'لاحظ', es: 'Observa' },
  'rev.texts.grp3.common.say': { en: 'Say', ar: 'قُل', es: 'Di' },
  'rev.texts.grp3.common.zoom_out': { en: 'Zoom Out', ar: 'وسّع الصورة', es: 'Amplía' },
  'rev.texts.avftb.extract.thread_name_h': {
    en: "Eddie's name as honour",
    ar: 'اسم Eddie كرمز للشرف',
    es: 'El nombre de Eddie como honor',
  },
  'rev.texts.avftb.extract.thread_chorus_h': {
    en: 'Alfieri as Greek chorus',
    ar: 'Alfieri ككورس إغريقي',
    es: 'Alfieri como coro griego',
  },
  'rev.texts.avftb.extract.thread_masculinity_h': {
    en: 'Masculinity as honour',
    ar: 'الرجولة كرمز للشرف',
    es: 'La masculinidad como honor',
  },
  'rev.texts.avftb.extract.thread_code_h': {
    en: 'Immigrant code vs American law',
    ar: 'قانون المهاجرين مقابل القانون الأمريكي',
    es: 'El código del inmigrante frente a la ley estadounidense',
  },
  'rev.texts.avftb.extract.model_h': {
    en: 'Model paragraph - 250 words',
    ar: 'فقرة نموذجية - 250 كلمة',
    es: 'Párrafo modelo - 250 palabras',
  },
  'rev.texts.avftb.extract.model_desc': {
    en: 'How the climax fulfils Alfieri’s foreshadowing of "destiny" and Miller’s adaptation of Greek tragedy to a Brooklyn waterfront.',
    ar: 'كيف تحقّق الذروة تمهيد Alfieri لـ "destiny" وتكييف Miller للتراجيديا الإغريقية على ميناء Brooklyn.',
    es: 'Cómo el clímax cumple el presagio de "destiny" de Alfieri y la adaptación de la tragedia griega de Miller al muelle de Brooklyn.',
  },
  'rev.texts.avftb.extract.model_words': {
    en: '({n} words)',
    ar: '({n} كلمة)',
    es: '({n} palabras)',
  },
  'rev.texts.avftb.extract.takeaways_h': {
    en: 'Examiner takeaways',
    ar: 'خلاصات للمصححين',
    es: 'Conclusiones del examinador',
  },
  'rev.texts.avftb.extract.copyright_h': {
    en: 'Copyright and fair dealing notice',
    ar: 'إشعار حقوق النشر والاستخدام العادل',
    es: 'Aviso de derechos de autor y uso legítimo',
  },

  // ─── A Streetcar Named Desire — landing page chrome ──────────────────────
  'rev.texts.streetcar.subpage.read.title': {
    en: 'Read Full Text',
    ar: 'اقرأ النص كامل',
    es: 'Leer el texto completo',
  },
  'rev.texts.streetcar.subpage.read.desc': {
    en: 'With annotations',
    ar: 'مع الشروحات',
    es: 'Con anotaciones',
  },
  'rev.texts.streetcar.subpage.acts.title': {
    en: 'Scene-by-Scene Analysis',
    ar: 'تحليل مشهد بمشهد',
    es: 'Análisis escena por escena',
  },
  'rev.texts.streetcar.subpage.acts.desc': {
    en: 'Key moments & quotes',
    ar: 'اللحظات والاقتباسات المفتاحية',
    es: 'Momentos y citas clave',
  },
  'rev.texts.streetcar.subpage.characters.title': {
    en: 'Characters',
    ar: 'الشخصيات',
    es: 'Personajes',
  },
  'rev.texts.streetcar.subpage.characters.desc': {
    en: 'Full character guide',
    ar: 'دليل الشخصيات الكامل',
    es: 'Guía completa de personajes',
  },
  'rev.texts.streetcar.subpage.themes.title': { en: 'Themes', ar: 'المحاور', es: 'Temas' },
  'rev.texts.streetcar.subpage.themes.desc': {
    en: 'Theme analysis',
    ar: 'تحليل المحاور',
    es: 'Análisis de temas',
  },
  'rev.texts.streetcar.subpage.quotes.title': {
    en: 'Key Quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.streetcar.subpage.quotes.desc': {
    en: 'Quotes with analysis',
    ar: 'اقتباسات مع تحليل',
    es: 'Citas con análisis',
  },
  'rev.texts.streetcar.subpage.context.title': { en: 'Context', ar: 'السياق', es: 'Contexto' },
  'rev.texts.streetcar.subpage.context.desc': {
    en: 'Historical context',
    ar: 'السياق التاريخي',
    es: 'Contexto histórico',
  },
  'rev.texts.streetcar.subpage.essays.title': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de ensayo',
  },
  'rev.texts.streetcar.subpage.essays.desc': {
    en: 'A-Level essay plans',
    ar: 'خطط مقالات A-Level',
    es: 'Planes de ensayo A-Level',
  },
  'rev.texts.streetcar.draft_h': {
    en: 'Draft study guide',
    ar: 'دليل دراسي مسوّدة',
    es: 'Guía de estudio en borrador',
  },
  'rev.texts.streetcar.draft_body': {
    en: 'AI-assisted draft under expert review. Cross-check with your teacher’s notes.',
    ar: 'مسوّدة بمساعدة الذكاء الاصطناعي تحت مراجعة الخبراء. راجعها مع ملاحظات مدرّسك.',
    es: 'Borrador asistido por IA en revisión por expertos. Contrástalo con los apuntes de tu profesor.',
  },

  // ─── Blood Brothers — landing subpage cards ──────────────────────────────
  'rev.texts.bloodbrothers.subpage.acts.title': {
    en: 'Act-by-Act Analysis',
    ar: 'تحليل فصل بفصل',
    es: 'Análisis acto por acto',
  },
  'rev.texts.bloodbrothers.subpage.acts.desc': {
    en: 'Key moments & quotes',
    ar: 'اللحظات والاقتباسات المفتاحية',
    es: 'Momentos y citas clave',
  },
  'rev.texts.bloodbrothers.subpage.characters.title': {
    en: 'Characters',
    ar: 'الشخصيات',
    es: 'Personajes',
  },
  'rev.texts.bloodbrothers.subpage.characters.desc': {
    en: 'Full character guide',
    ar: 'دليل الشخصيات الكامل',
    es: 'Guía completa de personajes',
  },
  'rev.texts.bloodbrothers.subpage.themes.title': { en: 'Themes', ar: 'المحاور', es: 'Temas' },
  'rev.texts.bloodbrothers.subpage.themes.desc': {
    en: 'Theme analysis',
    ar: 'تحليل المحاور',
    es: 'Análisis de temas',
  },
  'rev.texts.bloodbrothers.subpage.quotes.title': {
    en: 'Key Quotes',
    ar: 'الاقتباسات المفتاحية',
    es: 'Citas clave',
  },
  'rev.texts.bloodbrothers.subpage.quotes.desc': {
    en: 'Quotes with analysis',
    ar: 'اقتباسات مع تحليل',
    es: 'Citas con análisis',
  },
  'rev.texts.bloodbrothers.subpage.essays.title': {
    en: 'Essay Plans',
    ar: 'خطط المقالات',
    es: 'Planes de ensayo',
  },
  'rev.texts.bloodbrothers.subpage.essays.desc': {
    en: 'GCSE essay plans',
    ar: 'خطط مقالات GCSE',
    es: 'Planes de ensayo GCSE',
  },
  'rev.texts.bloodbrothers.rights_notice_label': {
    en: 'Rights notice:',
    ar: 'إشعار الحقوق:',
    es: 'Aviso de derechos:',
  },

  // ─── Blood Brothers — extract-walkthrough page chrome ────────────────────
  'rev.texts.bloodbrothers.extract.eyebrow': {
    en: 'Blood Brothers - extract walkthrough',
    ar: 'Blood Brothers - شرح المقتطف',
    es: 'Blood Brothers - recorrido por el extracto',
  },
  'rev.texts.bloodbrothers.extract.title': {
    en: 'Opening: the Narrator, the shoes on the table and the superstition',
    ar: 'البداية: الراوي، والحذاء على الطاولة، والخرافة',
    es: 'Apertura: el Narrador, los zapatos sobre la mesa y la superstición',
  },
  'rev.texts.bloodbrothers.extract.intro': {
    en: 'A guided close reading of the play’s opening sequence - the Narrator’s first appearance and the "shoes upon the table" motif - building toward Russell’s thesis that class, not fate, kills Mickey and Edward.',
    ar: 'قراءة متأنّية موجّهة لمشهد افتتاح المسرحية - أول ظهور للراوي وموتيف "shoes upon the table" - وصولاً لأطروحة Russell إن الطبقة، مو القدر، هي اللي تقتل Mickey و Edward.',
    es: 'Una lectura atenta guiada de la secuencia inicial de la obra - la primera aparición del Narrador y el motivo de los "shoes upon the table" - que conduce a la tesis de Russell de que la clase social, no el destino, mata a Mickey y a Edward.',
  },
  'rev.texts.bloodbrothers.extract.walkthrough_h': {
    en: 'Walkthrough',
    ar: 'الشرح',
    es: 'Recorrido',
  },
  'rev.texts.bloodbrothers.extract.model_h': {
    en: 'Model paragraph (~250 words)',
    ar: 'فقرة نموذجية (~250 كلمة)',
    es: 'Párrafo modelo (~250 palabras)',
  },
  'rev.texts.bloodbrothers.extract.model_sub': {
    en: 'A worked example linking the opening extract to Russell’s central argument that nature loses to nurture, and that 1980s Britain failed both Mickey and Edward.',
    ar: 'مثال محلول يربط المقتطف الافتتاحي بحجّة Russell المركزية إن الطبيعة تخسر أمام التنشئة، وإن بريطانيا الثمانينات خذلت كلاً من Mickey و Edward.',
    es: 'Un ejemplo resuelto que vincula el extracto inicial con el argumento central de Russell de que la naturaleza pierde frente a la crianza, y que la Gran Bretaña de los años 80 falló tanto a Mickey como a Edward.',
  },
  'rev.texts.bloodbrothers.extract.fair_dealing_h': {
    en: 'Fair dealing notice',
    ar: 'إشعار الاستخدام العادل',
    es: 'Aviso de uso legítimo',
  },
}
