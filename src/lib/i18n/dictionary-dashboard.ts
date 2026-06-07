/**
 * Dashboard chrome i18n entries for the logged-in learner/parent/teacher
 * dashboard surface (src/app/dashboard/**).
 *
 * Covers pages whose UI chrome was previously hard-coded English and so
 * leaked English in Arabic mode: consent management, all-essays list,
 * essay feedback view, papers navigation, human-review request + status,
 * subscription management, class analytics, learning profile, and the
 * printable worksheets reference.
 *
 * Namespaced under `dash.*` with distinct sub-namespaces to avoid
 * collision with the existing `dash.*` keys (main dashboard page) and the
 * `dashboard.*` keys in dictionary-dash-internal.ts / dictionary.ts.
 *
 * Khaleeji (Gulf) Arabic conventions (mirrored from dictionary.ts):
 *   شنو, شلونك, أبغى, وايد, الحين, إحنا, روح, شوف, دوّر, سكّر, ببلاش, لحظة
 * BANNED (Levantine): شو, بحكي, كيفك, ليش
 *
 * Latin retention inside Arabic: brand names (The English Hub), exam codes
 * (GCSE, IGCSE, AQA, OCR, Edexcel, CAIE, WJEC, AO1-AO6, KS3), £ amounts,
 * numbers, email addresses, technical terms (AI, CSV, JSON, GDPR, ICO).
 *
 * STUDY CONTENT (essay prose, quotes, model answers, mark-scheme
 * descriptors) is NOT translated and is not present here - only chrome.
 *
 * Annotated as Record (NOT `as const`) so the orchestrator can merge it.
 */

export const DASHBOARD_CHROME_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> =
  {
    /* ─── Consent management (dashboard/consent) ─────────────────── */
    'dash.consent.back': { en: '← Back to Dashboard', ar: '← ارجع للوحة', es: '← Volver al panel' },
    'dash.consent.title': {
      en: 'Manage Your Consents',
      ar: 'دير موافقاتك',
      es: 'Gestiona tus consentimientos',
    },
    'dash.consent.intro': {
      en: 'View and manage the consents you have given. Under UK GDPR, you have the right to withdraw optional consents at any time. Essential consents are required for the service to function.',
      ar: 'شوف ودير الموافقات اللي عطيتها. حسب UK GDPR، عندك الحق تسحب الموافقات الاختيارية في أي وقت. الموافقات الأساسية لازمة عشان الخدمة تشتغل.',
      es: 'Consulta y gestiona los consentimientos que has dado. Conforme al UK GDPR, tienes derecho a retirar los consentimientos opcionales en cualquier momento. Los consentimientos esenciales son necesarios para que el servicio funcione.',
    },
    'dash.consent.loading': {
      en: 'Loading your consent records...',
      ar: 'لحظة، نجيب سجلات موافقاتك...',
      es: 'Cargando tus registros de consentimiento...',
    },
    'dash.consent.err.load': {
      en: 'Could not load your consent records. Please try again.',
      ar: 'ما قدرنا نجيب سجلات موافقاتك. حاول مرة ثانية.',
      es: 'No se pudieron cargar tus registros de consentimiento. Inténtalo de nuevo.',
    },
    'dash.consent.err.history': {
      en: 'Could not load consent history.',
      ar: 'ما قدرنا نجيب سجل الموافقات.',
      es: 'No se pudo cargar el historial de consentimientos.',
    },
    'dash.consent.err.withdraw': {
      en: 'Failed to withdraw consent.',
      ar: 'ما قدرنا نسحب الموافقة.',
      es: 'No se pudo retirar el consentimiento.',
    },
    'dash.consent.confirm_withdraw': {
      en: 'Are you sure you want to withdraw your "{label}" consent? This action will be recorded.',
      ar: 'متأكد تبغى تسحب موافقة "{label}"؟ بنسجّل هالإجراء.',
      es: '¿Seguro que quieres retirar tu consentimiento de "{label}"? Esta acción quedará registrada.',
    },
    'dash.consent.withdrawn_success': {
      en: '"{label}" consent has been withdrawn.',
      ar: 'تم سحب موافقة "{label}".',
      es: 'Se ha retirado el consentimiento de "{label}".',
    },
    'dash.consent.active_title': {
      en: 'Active Consents',
      ar: 'الموافقات الفعّالة',
      es: 'Consentimientos activos',
    },
    'dash.consent.none_active': {
      en: 'No active consents found.',
      ar: 'ما فيه موافقات فعّالة.',
      es: 'No se encontraron consentimientos activos.',
    },
    'dash.consent.badge_essential': { en: 'Essential', ar: 'أساسية', es: 'Esencial' },
    'dash.consent.badge_optional': { en: 'Optional', ar: 'اختيارية', es: 'Opcional' },
    'dash.consent.granted': { en: 'Granted:', ar: 'تمت الموافقة:', es: 'Concedido:' },
    'dash.consent.policy_version': {
      en: 'Policy version:',
      ar: 'إصدار السياسة:',
      es: 'Versión de la política:',
    },
    'dash.consent.method': { en: 'Method:', ar: 'الطريقة:', es: 'Método:' },
    'dash.consent.withdraw': { en: 'Withdraw', ar: 'اسحب', es: 'Retirar' },
    'dash.consent.withdrawing': { en: 'Withdrawing...', ar: 'لحظة، نسحب...', es: 'Retirando...' },
    'dash.consent.essential_note_a': {
      en: 'This consent is required for the service to function. To withdraw it, you must',
      ar: 'هالموافقة لازمة عشان الخدمة تشتغل. عشان تسحبها، لازم',
      es: 'Este consentimiento es necesario para que el servicio funcione. Para retirarlo, debes',
    },
    'dash.consent.essential_note_link': {
      en: 'request account deletion',
      ar: 'تطلب حذف الحساب',
      es: 'solicitar la eliminación de la cuenta',
    },
    'dash.consent.hide_history': {
      en: 'Hide Full History',
      ar: 'خفِّ السجل الكامل',
      es: 'Ocultar historial completo',
    },
    'dash.consent.view_history': {
      en: 'View Full History',
      ar: 'شوف السجل الكامل',
      es: 'Ver historial completo',
    },
    'dash.consent.download_record': {
      en: 'Download Consent Record (JSON)',
      ar: 'نزّل سجل الموافقات (JSON)',
      es: 'Descargar registro de consentimiento (JSON)',
    },
    'dash.consent.history_title': {
      en: 'Full Consent History',
      ar: 'سجل الموافقات الكامل',
      es: 'Historial completo de consentimientos',
    },
    'dash.consent.history_intro': {
      en: 'Complete audit trail of all consent changes, in chronological order.',
      ar: 'سجل كامل لكل تغييرات الموافقات، بالترتيب الزمني.',
      es: 'Registro de auditoría completo de todos los cambios de consentimiento, en orden cronológico.',
    },
    'dash.consent.no_history': {
      en: 'No history found.',
      ar: 'ما فيه سجل.',
      es: 'No se encontró historial.',
    },
    'dash.consent.col_type': { en: 'Type', ar: 'النوع', es: 'Tipo' },
    'dash.consent.col_action': { en: 'Action', ar: 'الإجراء', es: 'Acción' },
    'dash.consent.col_version': { en: 'Version', ar: 'الإصدار', es: 'Versión' },
    'dash.consent.col_date': { en: 'Date', ar: 'التاريخ', es: 'Fecha' },
    'dash.consent.col_method': { en: 'Method', ar: 'الطريقة', es: 'Método' },
    'dash.consent.action_granted': { en: 'Granted', ar: 'موافَق', es: 'Concedido' },
    'dash.consent.action_withdrawn': { en: 'Withdrawn', ar: 'مسحوبة', es: 'Retirado' },
    'dash.consent.rights_title': {
      en: 'Your data rights',
      ar: 'حقوقك في بياناتك',
      es: 'Tus derechos sobre los datos',
    },
    'dash.consent.rights_body': {
      en: 'Under UK GDPR, you can withdraw optional consents at any time without affecting the lawfulness of processing carried out before withdrawal. Essential consents (Terms, Privacy Policy, AI Processing) are required for the service to operate. If you wish to withdraw these, you can request account deletion from your privacy settings.',
      ar: 'حسب UK GDPR، تقدر تسحب الموافقات الاختيارية في أي وقت بدون ما يأثر على قانونية المعالجة اللي صارت قبل السحب. الموافقات الأساسية (الشروط، سياسة الخصوصية، معالجة AI) لازمة عشان الخدمة تشتغل. لو تبغى تسحبها، تقدر تطلب حذف الحساب من إعدادات الخصوصية.',
      es: 'Conforme al UK GDPR, puedes retirar los consentimientos opcionales en cualquier momento sin que ello afecte a la licitud del tratamiento realizado antes de la retirada. Los consentimientos esenciales (Términos, Política de privacidad, Procesamiento con AI) son necesarios para que el servicio funcione. Si deseas retirarlos, puedes solicitar la eliminación de la cuenta desde tu configuración de privacidad.',
    },
    // Consent type labels + descriptions
    'dash.consent.type.terms.label': {
      en: 'Terms & Conditions',
      ar: 'الشروط والأحكام',
      es: 'Términos y condiciones',
    },
    'dash.consent.type.terms.desc': {
      en: 'Agreement to the platform terms of service.',
      ar: 'الموافقة على شروط استخدام المنصّة.',
      es: 'Aceptación de los términos de servicio de la plataforma.',
    },
    'dash.consent.type.privacy.label': {
      en: 'Privacy Policy',
      ar: 'سياسة الخصوصية',
      es: 'Política de privacidad',
    },
    'dash.consent.type.privacy.desc': {
      en: 'Acknowledgement of how your personal data is processed.',
      ar: 'إقرار بكيفية معالجة بياناتك الشخصية.',
      es: 'Reconocimiento de cómo se tratan tus datos personales.',
    },
    'dash.consent.type.ai.label': {
      en: 'AI Essay Analysis',
      ar: 'تحليل المقالات بالـ AI',
      es: 'Análisis de ensayos con AI',
    },
    'dash.consent.type.ai.desc': {
      en: 'Consent for AI-powered analysis of your essays to provide feedback.',
      ar: 'موافقة على تحليل مقالاتك بالـ AI عشان نعطيك ملاحظات.',
      es: 'Consentimiento para el análisis de tus ensayos mediante AI con el fin de ofrecerte comentarios.',
    },
    'dash.consent.type.transfer.label': {
      en: 'International Data Transfer',
      ar: 'نقل البيانات الدولي',
      es: 'Transferencia internacional de datos',
    },
    'dash.consent.type.transfer.desc': {
      en: 'Consent for transfer of data outside the UK (required for Qatar-based users).',
      ar: 'موافقة على نقل البيانات خارج UK (لازمة للمستخدمين في قطر).',
      es: 'Consentimiento para la transferencia de datos fuera del Reino Unido (necesario para usuarios en Catar).',
    },
    'dash.consent.type.marketing.label': {
      en: 'Marketing Communications',
      ar: 'الرسائل التسويقية',
      es: 'Comunicaciones de marketing',
    },
    'dash.consent.type.marketing.desc': {
      en: 'Receive promotional emails and product updates.',
      ar: 'استقبال إيميلات ترويجية وتحديثات المنتج.',
      es: 'Recibir correos promocionales y novedades del producto.',
    },
    'dash.consent.type.cooling.label': {
      en: 'Cooling-Off Period Waiver',
      ar: 'التنازل عن فترة الإلغاء',
      es: 'Renuncia al periodo de desistimiento',
    },
    'dash.consent.type.cooling.desc': {
      en: 'Waiver of the 14-day cooling-off period for immediate service access.',
      ar: 'تنازل عن فترة الإلغاء (14 يوم) عشان توصل للخدمة على طول.',
      es: 'Renuncia al periodo de desistimiento de 14 días para acceder de inmediato al servicio.',
    },
    'dash.consent.type.cookie_analytics.label': {
      en: 'Analytics Cookies',
      ar: 'كوكيز التحليلات',
      es: 'Cookies de analítica',
    },
    'dash.consent.type.cookie_analytics.desc': {
      en: 'Allow analytics cookies to help us understand how you use the site.',
      ar: 'اسمح بكوكيز التحليلات عشان نفهم كيف تستخدم الموقع.',
      es: 'Permitir cookies de analítica para ayudarnos a entender cómo usas el sitio.',
    },
    'dash.consent.type.cookie_marketing.label': {
      en: 'Marketing Cookies',
      ar: 'كوكيز التسويق',
      es: 'Cookies de marketing',
    },
    'dash.consent.type.cookie_marketing.desc': {
      en: 'Allow marketing cookies for personalised advertising.',
      ar: 'اسمح بكوكيز التسويق عشان إعلانات مخصّصة لك.',
      es: 'Permitir cookies de marketing para publicidad personalizada.',
    },

    /* ─── Learning profile (dashboard/learning) ──────────────────── */
    'dash.learning.back': { en: 'Back to dashboard', ar: 'ارجع للوحة', es: 'Volver al panel' },
    'dash.learning.eyebrow': {
      en: 'Learning profile',
      ar: 'ملف التعلّم',
      es: 'Perfil de aprendizaje',
    },
    'dash.learning.title': {
      en: 'Your strengths & what to focus on next',
      ar: 'نقاط قوّتك وعلى شنو تركّز بعدها',
      es: 'Tus fortalezas y en qué centrarte a continuación',
    },
    'dash.learning.intro': {
      en: 'Built from the time you spend and the accuracy you reach in every game. We weight your most recent rounds most heavily, track whether each skill is improving or slipping, and recommend the next best practice - so revision goes where it counts.',
      ar: 'مبني على الوقت اللي تقضيه والدقّة اللي توصلها في كل لعبة. نعطي جولاتك الأخيرة وزن أكبر، نتابع إذا كل مهارة تتحسّن ولا تتراجع، ونرشّح لك أفضل تمرين جاي - عشان المراجعة تروح للمكان المهم.',
      es: 'Creado a partir del tiempo que dedicas y la precisión que alcanzas en cada juego. Damos más peso a tus rondas más recientes, vigilamos si cada destreza mejora o decae y te recomendamos la mejor práctica siguiente, para que el repaso vaya donde de verdad cuenta.',
    },
    'dash.learning.footer': {
      en: 'This profile is built on your device from every game you play and syncs to your account when you’re signed in. Strengths are skills you score 80%+ on consistently; focus areas are below 60% or slipping.',
      ar: 'هالملف ينبني على جهازك من كل لعبة تلعبها ويتزامن مع حسابك لما تسجّل دخول. نقاط القوّة هي المهارات اللي تجيب فيها +80% باستمرار؛ ومناطق التركيز تحت 60% ولا تتراجع.',
      es: 'Este perfil se construye en tu dispositivo a partir de cada juego que juegas y se sincroniza con tu cuenta cuando has iniciado sesión. Las fortalezas son destrezas en las que puntúas un 80%+ de forma constante; las áreas de enfoque están por debajo del 60% o en declive.',
    },

    /* ─── All essays list (dashboard/essays) ─────────────────────── */
    'dash.essays.bc_dashboard': { en: 'Dashboard', ar: 'اللوحة', es: 'Panel' },
    'dash.essays.bc_current': { en: 'All Essays', ar: 'كل المقالات', es: 'Todos los ensayos' },
    'dash.essays.title': { en: 'Your Essays', ar: 'مقالاتك', es: 'Tus ensayos' },
    'dash.essays.count_one': { en: 'essay submitted', ar: 'مقالة مرسلة', es: 'ensayo enviado' },
    'dash.essays.count_many': { en: 'essays submitted', ar: 'مقالة مرسلة', es: 'ensayos enviados' },
    'dash.essays.new': { en: 'New Essay', ar: 'مقالة جديدة', es: 'Nuevo ensayo' },
    'dash.essays.sort_by': { en: 'Sort by:', ar: 'رتّب حسب:', es: 'Ordenar por:' },
    'dash.essays.sort_date': { en: 'Date', ar: 'التاريخ', es: 'Fecha' },
    'dash.essays.sort_score': { en: 'Score', ar: 'الدرجة', es: 'Puntuación' },
    'dash.essays.empty': {
      en: 'You haven’t submitted any essays yet.',
      ar: 'ما أرسلت أي مقالة لين الحين.',
      es: 'Aún no has enviado ningún ensayo.',
    },
    'dash.essays.empty_cta': {
      en: 'Write Your First Essay',
      ar: 'اكتب أول مقالة لك',
      es: 'Escribe tu primer ensayo',
    },
    'dash.essays.col_title': { en: 'Title', ar: 'العنوان', es: 'Título' },
    'dash.essays.col_subject': { en: 'Subject', ar: 'المادة', es: 'Asignatura' },
    'dash.essays.col_board': { en: 'Board', ar: 'البورد', es: 'Junta' },
    'dash.essays.col_score': { en: 'Score', ar: 'الدرجة', es: 'Puntuación' },
    'dash.essays.col_date': { en: 'Date', ar: 'التاريخ', es: 'Fecha' },
    'dash.essays.col_actions': { en: 'Actions', ar: 'الإجراءات', es: 'Acciones' },
    'dash.essays.confirm': { en: 'Confirm', ar: 'أكّد', es: 'Confirmar' },
    'dash.essays.cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
    'dash.essays.view': { en: 'View', ar: 'شوف', es: 'Ver' },
    'dash.essays.delete': { en: 'Delete', ar: 'احذف', es: 'Eliminar' },
    'dash.essays.view_feedback': {
      en: 'View Feedback',
      ar: 'شوف الملاحظات',
      es: 'Ver comentarios',
    },
    'dash.essays.confirm_delete': {
      en: 'Confirm Delete',
      ar: 'أكّد الحذف',
      es: 'Confirmar eliminación',
    },

    /* ─── Essay feedback view (dashboard/essay/[id]) ─────────────── */
    'dash.essay_view.bc_dashboard': { en: 'Dashboard', ar: 'اللوحة', es: 'Panel' },
    'dash.essay_view.bc_essays': { en: 'Essays', ar: 'المقالات', es: 'Ensayos' },
    'dash.essay_view.prompt': { en: 'Prompt:', ar: 'السؤال:', es: 'Enunciado:' },
    'dash.essay_view.edit': { en: 'Edit', ar: 'عدّل', es: 'Editar' },
    'dash.essay_view.delete': { en: 'Delete', ar: 'احذف', es: 'Eliminar' },
    'dash.essay_view.confirm_delete': {
      en: 'Confirm Delete',
      ar: 'أكّد الحذف',
      es: 'Confirmar eliminación',
    },
    'dash.essay_view.cancel': { en: 'Cancel', ar: 'إلغاء', es: 'Cancelar' },
    'dash.essay_view.content_notice': {
      en: 'Content Notice',
      ar: 'تنبيه محتوى',
      es: 'Aviso de contenido',
    },
    'dash.essay_view.your_essay': { en: 'Your Essay', ar: 'مقالتك', es: 'Tu ensayo' },
    'dash.essay_view.words': { en: 'words', ar: 'كلمة', es: 'palabras' },
    'dash.essay_view.overall_score': {
      en: 'Overall Score',
      ar: 'الدرجة الكلّية',
      es: 'Puntuación global',
    },
    'dash.essay_view.grade_prefix': { en: 'Grade', ar: 'Grade', es: 'Grade' },
    'dash.essay_view.category_scores': {
      en: 'Category Scores',
      ar: 'درجات الفئات',
      es: 'Puntuaciones por categoría',
    },
    'dash.essay_view.detailed_feedback': {
      en: 'Detailed Feedback',
      ar: 'ملاحظات تفصيلية',
      es: 'Comentarios detallados',
    },
    'dash.essay_view.improvement_suggestions': {
      en: 'Improvement Suggestions',
      ar: 'اقتراحات للتحسين',
      es: 'Sugerencias de mejora',
    },

    /* ─── Papers navigation (dashboard/papers) ───────────────────── */
    'dash.papers.meta_title': { en: 'Your Papers', ar: 'أوراقك الامتحانية', es: 'Tus exámenes' },
    'dash.papers.meta_og_title': {
      en: 'Your Papers | The English Hub',
      ar: 'أوراقك الامتحانية | The English Hub',
      es: 'Tus exámenes | The English Hub',
    },
    'dash.papers.meta_desc': {
      en: 'Navigate all your exam papers, sections, and revision content in one place.',
      ar: 'تنقّل بين كل أوراقك الامتحانية وأقسامها ومحتوى المراجعة في مكان واحد.',
      es: 'Navega por todos tus exámenes, secciones y contenido de repaso en un solo lugar.',
    },
    'dash.papers.empty_title': {
      en: 'Paper structure coming soon',
      ar: 'هيكل الأوراق قريب',
      es: 'La estructura de los exámenes llegará pronto',
    },
    'dash.papers.empty_body': {
      en: 'We are building out the paper-by-paper navigation for {board}. In the meantime, explore the revision toolkit.',
      ar: 'نجهّز التنقّل ورقة ورقة لـ {board}. لين ذاك الوقت، استكشف أدوات المراجعة.',
      es: 'Estamos desarrollando la navegación examen por examen para {board}. Mientras tanto, explora la caja de herramientas de repaso.',
    },
    'dash.papers.go_revision': {
      en: 'Go to Revision Hub',
      ar: 'روح لمركز المراجعة',
      es: 'Ir al centro de repaso',
    },
    'dash.papers.back': { en: 'Dashboard', ar: 'اللوحة', es: 'Panel' },
    'dash.papers.title': { en: 'Your exam papers', ar: 'أوراقك الامتحانية', es: 'Tus exámenes' },
    'dash.papers.intro': {
      en: 'Everything you need for {board} is organised by paper. Open a paper to find study guides, exam technique, poetry, and practice questions.',
      ar: 'كل اللي تحتاجه لـ {board} مرتّب حسب الورقة. افتح أي ورقة وتلقى أدلّة دراسة، تقنيات امتحان، شعر، وأسئلة تدريب.',
      es: 'Todo lo que necesitas para {board} está organizado por examen. Abre un examen para encontrar guías de estudio, técnica de examen, poesía y preguntas de práctica.',
    },
    'dash.papers.collapse': {
      en: 'Collapse sections',
      ar: 'طوّ الأقسام',
      es: 'Contraer secciones',
    },
    'dash.papers.expand': {
      en: 'Expand all sections',
      ar: 'افتح كل الأقسام',
      es: 'Expandir todas las secciones',
    },
    'dash.papers.marks_suffix': { en: 'marks', ar: 'درجة', es: 'puntos' },
    'dash.papers.section_one': { en: 'section', ar: 'قسم', es: 'sección' },
    'dash.papers.section_many': { en: 'sections', ar: 'أقسام', es: 'secciones' },
    'dash.papers.resource_one': { en: 'resource', ar: 'مصدر', es: 'recurso' },
    'dash.papers.resource_many': { en: 'resources', ar: 'مصادر', es: 'recursos' },
    'dash.papers.all_mocks': {
      en: 'All mock exams',
      ar: 'كل الامتحانات التجريبية',
      es: 'Todos los exámenes de prueba',
    },
    'dash.papers.full_revision': {
      en: 'Full revision hub',
      ar: 'مركز المراجعة الكامل',
      es: 'Centro de repaso completo',
    },
    'dash.papers.flashcards': {
      en: 'Flashcards',
      ar: 'البطاقات التعليمية',
      es: 'Tarjetas de memoria',
    },
    // Link type labels
    'dash.papers.type.text': { en: 'Study Guide', ar: 'دليل دراسة', es: 'Guía de estudio' },
    'dash.papers.type.poetry': { en: 'Poetry', ar: 'شعر', es: 'Poesía' },
    'dash.papers.type.technique': { en: 'Technique', ar: 'تقنية', es: 'Técnica' },
    'dash.papers.type.practice': { en: 'Practice', ar: 'تدريب', es: 'Práctica' },
    'dash.papers.type.mock': { en: 'Mock Exam', ar: 'امتحان تجريبي', es: 'Examen de prueba' },

    /* ─── Human review request (dashboard/review/request) ────────── */
    'dash.review_req.back': {
      en: '← Back to Dashboard',
      ar: '← ارجع للوحة',
      es: '← Volver al panel',
    },
    'dash.review_req.title': {
      en: 'Request a Human Review',
      ar: 'اطلب مراجعة بشرية',
      es: 'Solicitar una revisión humana',
    },
    'dash.review_req.intro': {
      en: 'If you’re unsure about the AI’s feedback on your essay, you can ask a real person to take a look. This is completely normal and it’s your right - not a complaint.',
      ar: 'لو مو متأكد من ملاحظات الـ AI على مقالتك، تقدر تطلب شخص حقيقي يشوفها. هذا شي عادي تماماً وحقّك - مو شكوى.',
      es: 'Si no estás seguro de los comentarios de la AI sobre tu ensayo, puedes pedir que una persona real lo revise. Esto es totalmente normal y es tu derecho, no una queja.',
    },
    'dash.review_req.rights_title': { en: 'Your rights', ar: 'حقوقك', es: 'Tus derechos' },
    'dash.review_req.rights_body': {
      en: 'Under UK data protection law (UK GDPR & the Data Use and Access Act 2025), you have the right to request human intervention when decisions are made by automated systems. This is that right in action - it’s not a complaint, and there’s no wrong reason to use it.',
      ar: 'حسب قانون حماية البيانات في UK (UK GDPR وقانون استخدام البيانات والوصول 2025)، عندك الحق تطلب تدخّل بشري لما القرارات تنصنع بأنظمة آلية. هذا الحق على أرض الواقع - مو شكوى، وما فيه سبب غلط تستخدمه.',
      es: 'Conforme a la legislación de protección de datos del Reino Unido (UK GDPR y la Data Use and Access Act 2025), tienes derecho a solicitar la intervención humana cuando las decisiones las toman sistemas automatizados. Esto es ese derecho en acción: no es una queja y no hay ninguna razón incorrecta para usarlo.',
    },
    'dash.review_req.which_essay': { en: 'Which essay?', ar: 'أي مقالة؟', es: '¿Qué ensayo?' },
    'dash.review_req.select_essay': {
      en: 'Select an essay...',
      ar: 'اختر مقالة...',
      es: 'Selecciona un ensayo...',
    },
    'dash.review_req.essay_fallback': { en: 'Essay {id}', ar: 'مقالة {id}', es: 'Ensayo {id}' },
    'dash.review_req.why': {
      en: 'Why are you requesting a review?',
      ar: 'ليش تطلب مراجعة؟',
      es: '¿Por qué solicitas una revisión?',
    },
    'dash.review_req.tell_more': {
      en: 'Tell us more',
      ar: 'عطنا تفاصيل أكثر',
      es: 'Cuéntanos más',
    },
    'dash.review_req.tell_more_hint': {
      en: 'What specifically would you like a human to look at?',
      ar: 'شنو بالضبط تبغى الشخص يشوفه؟',
      es: '¿Qué te gustaría concretamente que revisara una persona?',
    },
    'dash.review_req.detail_ph': {
      en: 'e.g. The AI said my conclusion was weak, but I think I addressed the question clearly...',
      ar: 'مثلاً: الـ AI قال خاتمتي ضعيفة، بس أنا أحس إني جاوبت على السؤال بوضوح...',
      es: 'p. ej.: La AI dijo que mi conclusión era floja, pero creo que respondí la pregunta con claridad...',
    },
    'dash.review_req.self_label': {
      en: 'Your own thoughts on your essay',
      ar: 'رأيك أنت في مقالتك',
      es: 'Tu propia opinión sobre tu ensayo',
    },
    'dash.review_req.optional': { en: '(optional)', ar: '(اختياري)', es: '(opcional)' },
    'dash.review_req.self_hint': {
      en: 'If you’d like, share what you think you did well or what you were trying to achieve. This helps the reviewer understand your perspective.',
      ar: 'لو تبغى، اكتب شنو تحس إنك سوّيته زين ولا شنو كنت تبغى توصله. هذا يساعد المراجع يفهم وجهة نظرك.',
      es: 'Si quieres, comparte qué crees que hiciste bien o qué intentabas conseguir. Esto ayuda al revisor a entender tu punto de vista.',
    },
    'dash.review_req.self_ph': {
      en: 'e.g. I was trying to argue that Lady Macbeth is more ambitious than Macbeth...',
      ar: 'مثلاً: كنت أبغى أبيّن إن Lady Macbeth أكثر طموحاً من Macbeth...',
      es: 'p. ej.: Intentaba argumentar que Lady Macbeth es más ambiciosa que Macbeth...',
    },
    'dash.review_req.submit': {
      en: 'Submit Review Request',
      ar: 'أرسل طلب المراجعة',
      es: 'Enviar solicitud de revisión',
    },
    'dash.review_req.submitting': { en: 'Submitting...', ar: 'لحظة، نرسل...', es: 'Enviando...' },
    'dash.review_req.err.essay': {
      en: 'Please select an essay to review.',
      ar: 'اختر مقالة للمراجعة.',
      es: 'Selecciona un ensayo para revisar.',
    },
    'dash.review_req.err.reason': {
      en: 'Please select a reason for your review request.',
      ar: 'اختر سبب لطلب المراجعة.',
      es: 'Selecciona un motivo para tu solicitud de revisión.',
    },
    'dash.review_req.err.detail': {
      en: 'Please provide some detail about your request.',
      ar: 'عطنا شوية تفاصيل عن طلبك.',
      es: 'Aporta algún detalle sobre tu solicitud.',
    },
    'dash.review_req.err.generic': {
      en: 'Something went wrong.',
      ar: 'صار شي غلط.',
      es: 'Algo salió mal.',
    },
    'dash.review_req.err.try_again': {
      en: 'Something went wrong. Please try again.',
      ar: 'صار شي غلط. حاول مرة ثانية.',
      es: 'Algo salió mal. Inténtalo de nuevo.',
    },
    // Reason options
    'dash.review_req.reason.default': {
      en: 'Select a reason...',
      ar: 'اختر سبب...',
      es: 'Selecciona un motivo...',
    },
    'dash.review_req.reason.inaccurate': {
      en: 'Feedback seems inaccurate',
      ar: 'الملاحظات تبيّن غير دقيقة',
      es: 'Los comentarios parecen inexactos',
    },
    'dash.review_req.reason.unclear': {
      en: "I don't understand the feedback",
      ar: 'ما فهمت الملاحظات',
      es: 'No entiendo los comentarios',
    },
    'dash.review_req.reason.unfair_score': {
      en: 'Score seems unfair',
      ar: 'الدرجة تبيّن غير عادلة',
      es: 'La puntuación parece injusta',
    },
    'dash.review_req.reason.missed_points': {
      en: 'AI missed important points',
      ar: 'الـ AI فوّت نقاط مهمة',
      es: 'La AI pasó por alto puntos importantes',
    },
    'dash.review_req.reason.other': { en: 'Other', ar: 'شي ثاني', es: 'Otro' },
    // Confirmation screen
    'dash.review_req.done_title': {
      en: 'Review Request Submitted',
      ar: 'تم إرسال طلب المراجعة',
      es: 'Solicitud de revisión enviada',
    },
    'dash.review_req.done_body': {
      en: 'Your request has been received. A qualified reviewer will look at your essay and the AI feedback.',
      ar: 'استلمنا طلبك. مراجع مؤهّل بيشوف مقالتك وملاحظات الـ AI.',
      es: 'Hemos recibido tu solicitud. Un revisor cualificado examinará tu ensayo y los comentarios de la AI.',
    },
    'dash.review_req.ref_label': {
      en: 'Your reference number',
      ar: 'رقمك المرجعي',
      es: 'Tu número de referencia',
    },
    'dash.review_req.est_response': {
      en: 'Estimated response time:',
      ar: 'الوقت المتوقّع للرد:',
      es: 'Tiempo de respuesta estimado:',
    },
    'dash.review_req.email_notify': {
      en: 'We’ll notify you by email when the review is complete.',
      ar: 'بنبلّغك بالإيميل لما تخلص المراجعة.',
      es: 'Te avisaremos por correo cuando la revisión esté completa.',
    },
    'dash.review_req.back_dash': {
      en: 'Back to Dashboard',
      ar: 'ارجع للوحة',
      es: 'Volver al panel',
    },
    'dash.review_req.track': {
      en: 'Track This Request',
      ar: 'تابع هالطلب',
      es: 'Seguir esta solicitud',
    },

    /* ─── Review status (dashboard/review/[id]) ──────────────────── */
    'dash.review_status.err.not_found': {
      en: 'Review request not found. Please check your reference number.',
      ar: 'ما لقينا طلب المراجعة. تأكّد من رقمك المرجعي.',
      es: 'No se encontró la solicitud de revisión. Comprueba tu número de referencia.',
    },
    'dash.review_status.err.load': {
      en: 'Unable to load review details. Please try again later.',
      ar: 'ما قدرنا نجيب تفاصيل المراجعة. حاول بعدين.',
      es: 'No se pudieron cargar los detalles de la revisión. Inténtalo más tarde.',
    },
    'dash.review_status.err.connect': {
      en: 'Unable to connect. Please check your internet and try again.',
      ar: 'ما قدرنا نتّصل. تأكّد من النت وحاول مرة ثانية.',
      es: 'No se pudo conectar. Comprueba tu conexión a internet e inténtalo de nuevo.',
    },
    'dash.review_status.not_found': {
      en: 'Review not found.',
      ar: 'ما لقينا المراجعة.',
      es: 'No se encontró la revisión.',
    },
    'dash.review_status.back_dash': {
      en: 'Back to Dashboard',
      ar: 'ارجع للوحة',
      es: 'Volver al panel',
    },
    'dash.review_status.back_dash_arrow': {
      en: '← Back to Dashboard',
      ar: '← ارجع للوحة',
      es: '← Volver al panel',
    },
    'dash.review_status.title': {
      en: 'Review Status',
      ar: 'حالة المراجعة',
      es: 'Estado de la revisión',
    },
    'dash.review_status.reference': { en: 'Reference:', ar: 'المرجع:', es: 'Referencia:' },
    'dash.review_status.progress': { en: 'Progress', ar: 'التقدّم', es: 'Progreso' },
    'dash.review_status.stage.submitted': { en: 'Submitted', ar: 'مُرسَل', es: 'Enviada' },
    'dash.review_status.stage.under_review': {
      en: 'Under Review',
      ar: 'تحت المراجعة',
      es: 'En revisión',
    },
    'dash.review_status.stage.completed': { en: 'Completed', ar: 'مكتمل', es: 'Completada' },
    'dash.review_status.reviewer_response': {
      en: 'Reviewer Response',
      ar: 'رد المراجع',
      es: 'Respuesta del revisor',
    },
    'dash.review_status.your_request': { en: 'Your Request', ar: 'طلبك', es: 'Tu solicitud' },
    'dash.review_status.essay': { en: 'Essay', ar: 'المقالة', es: 'Ensayo' },
    'dash.review_status.reason': { en: 'Reason', ar: 'السبب', es: 'Motivo' },
    'dash.review_status.details': { en: 'Details', ar: 'التفاصيل', es: 'Detalles' },
    'dash.review_status.self_assessment': {
      en: 'Your self-assessment',
      ar: 'تقييمك الذاتي',
      es: 'Tu autoevaluación',
    },
    'dash.review_status.submitted_label': { en: 'Submitted', ar: 'تاريخ الإرسال', es: 'Enviada' },
    'dash.review_status.timeline': { en: 'Timeline', ar: 'الخط الزمني', es: 'Cronología' },

    /* ─── Subscription management (dashboard/subscription) ───────── */
    'dash.subscription.loading': {
      en: 'Loading subscription details...',
      ar: 'لحظة، نجيب تفاصيل اشتراكك...',
      es: 'Cargando los detalles de la suscripción...',
    },
    'dash.subscription.err.load': {
      en: 'Failed to load subscription',
      ar: 'ما قدرنا نجيب الاشتراك',
      es: 'No se pudo cargar la suscripción',
    },
    'dash.subscription.none_title': {
      en: 'No Active Subscription',
      ar: 'ما فيه اشتراك فعّال',
      es: 'Sin suscripción activa',
    },
    'dash.subscription.none_body': {
      en: 'You don’t currently have an active subscription. Subscribe to get access to AI-powered essay feedback and exam preparation tools.',
      ar: 'ما عندك اشتراك فعّال الحين. اشترك عشان توصل لملاحظات المقالات بالـ AI وأدوات التحضير للامتحان.',
      es: 'Actualmente no tienes una suscripción activa. Suscríbete para acceder a los comentarios de ensayos con AI y a las herramientas de preparación de exámenes.',
    },
    'dash.subscription.view_plans': { en: 'View Plans', ar: 'شوف الباقات', es: 'Ver planes' },
    'dash.subscription.title': {
      en: 'Subscription Management',
      ar: 'إدارة الاشتراك',
      es: 'Gestión de la suscripción',
    },
    'dash.subscription.past_due_banner': {
      en: 'Your last payment failed. Please update your payment method to avoid losing access.',
      ar: 'آخر دفعة فشلت. حدّث طريقة الدفع عشان ما تخسر الوصول.',
      es: 'Tu último pago falló. Actualiza tu método de pago para no perder el acceso.',
    },
    'dash.subscription.cancelled_banner_a': {
      en: 'Your subscription has been cancelled. You will retain access until',
      ar: 'تم إلغاء اشتراكك. بيظل عندك وصول لين',
      es: 'Tu suscripción ha sido cancelada. Conservarás el acceso hasta',
    },
    'dash.subscription.trial_banner_a': {
      en: 'You are currently on a free trial. Your trial ends on',
      ar: 'أنت الحين على تجربة مجانية. تجربتك تنتهي في',
      es: 'Actualmente estás en una prueba gratuita. Tu prueba finaliza el',
    },
    'dash.subscription.trial_banner_b': {
      en: 'After that, you will be charged',
      ar: 'بعدها بنخصم منك',
      es: 'Después de eso, se te cobrará',
    },
    'dash.subscription.monthly_plan': {
      en: 'Monthly Plan',
      ar: 'الباقة الشهرية',
      es: 'Plan mensual',
    },
    'dash.subscription.status.free_trial': {
      en: 'Free trial',
      ar: 'تجربة مجانية',
      es: 'Prueba gratuita',
    },
    'dash.subscription.status.cancelled': { en: 'Cancelled', ar: 'ملغي', es: 'Cancelada' },
    'dash.subscription.status.active': { en: 'Active', ar: 'فعّال', es: 'Activa' },
    'dash.subscription.badge.past_due': { en: 'Past Due', ar: 'متأخر', es: 'Pago vencido' },
    'dash.subscription.badge.cancelled': { en: 'Cancelled', ar: 'ملغي', es: 'Cancelada' },
    'dash.subscription.badge.trial': { en: 'Trial', ar: 'تجربة', es: 'Prueba' },
    'dash.subscription.badge.active': { en: 'Active', ar: 'فعّال', es: 'Activa' },
    'dash.subscription.access_ends': {
      en: 'Access ends',
      ar: 'ينتهي الوصول',
      es: 'El acceso finaliza',
    },
    'dash.subscription.next_billing': {
      en: 'Next billing date',
      ar: 'تاريخ الفوترة الجاية',
      es: 'Próxima fecha de facturación',
    },
    'dash.subscription.amount_after_trial': {
      en: 'Amount after trial',
      ar: 'المبلغ بعد التجربة',
      es: 'Importe tras la prueba',
    },
    'dash.subscription.billing_amount': {
      en: 'Billing amount',
      ar: 'مبلغ الفوترة',
      es: 'Importe de facturación',
    },
    'dash.subscription.month': { en: 'month', ar: 'شهر', es: 'mes' },
    'dash.subscription.payments_made': {
      en: 'Payments made',
      ar: 'الدفعات المسددة',
      es: 'Pagos realizados',
    },
    'dash.subscription.cancel_title': {
      en: 'Cancel Subscription',
      ar: 'إلغاء الاشتراك',
      es: 'Cancelar suscripción',
    },
    'dash.subscription.cancel_body': {
      en: 'You can cancel your subscription at any time. You will retain access until the end of your current billing period.',
      ar: 'تقدر تلغي اشتراكك في أي وقت. بيظل عندك وصول لين نهاية فترة الفوترة الحالية.',
      es: 'Puedes cancelar tu suscripción en cualquier momento. Conservarás el acceso hasta el final de tu periodo de facturación actual.',
    },
    'dash.subscription.resub_title': {
      en: 'Want to come back?',
      ar: 'تبغى ترجع؟',
      es: '¿Quieres volver?',
    },
    'dash.subscription.resub_body': {
      en: 'You can resubscribe at any time to regain full access.',
      ar: 'تقدر تعيد الاشتراك في أي وقت عشان ترجع لك كل المزايا.',
      es: 'Puedes volver a suscribirte en cualquier momento para recuperar el acceso completo.',
    },

    /* ─── Class analytics (dashboard/analytics/class) ────────────── */
    'dash.class_analytics.back': { en: 'Analytics', ar: 'التحليلات', es: 'Analítica' },
    'dash.class_analytics.title': {
      en: 'Class Overview',
      ar: 'نظرة عامة على الصف',
      es: 'Resumen de la clase',
    },
    'dash.class_analytics.subtitle': {
      en: 'Student progress summaries and class performance',
      ar: 'ملخّصات تقدّم الطلاب وأداء الصف',
      es: 'Resúmenes del progreso de los estudiantes y rendimiento de la clase',
    },
    'dash.class_analytics.export_csv': { en: 'Export CSV', ar: 'صدّر CSV', es: 'Exportar CSV' },
    'dash.class_analytics.err.load': {
      en: 'Failed to load class data. You may not have permission to view this page.',
      ar: 'ما قدرنا نجيب بيانات الصف. يمكن ما عندك صلاحية تشوف هالصفحة.',
      es: 'No se pudieron cargar los datos de la clase. Puede que no tengas permiso para ver esta página.',
    },
    'dash.class_analytics.stat.students': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
    'dash.class_analytics.stat.avg_modules': {
      en: 'Avg Modules',
      ar: 'متوسط الوحدات',
      es: 'Media de módulos',
    },
    'dash.class_analytics.stat.completed_per': {
      en: 'completed per student',
      ar: 'مكتملة لكل طالب',
      es: 'completados por estudiante',
    },
    'dash.class_analytics.stat.class_avg_score': {
      en: 'Class Avg Score',
      ar: 'متوسط درجات الصف',
      es: 'Puntuación media de la clase',
    },
    'dash.class_analytics.stat.avg_study': {
      en: 'Avg Study Time',
      ar: 'متوسط وقت الدراسة',
      es: 'Tiempo medio de estudio',
    },
    'dash.class_analytics.stat.per_student': {
      en: 'per student',
      ar: 'لكل طالب',
      es: 'por estudiante',
    },
    'dash.class_analytics.list_title': {
      en: 'Student Progress',
      ar: 'تقدّم الطلاب',
      es: 'Progreso de los estudiantes',
    },
    'dash.class_analytics.student_one': { en: 'student', ar: 'طالب', es: 'estudiante' },
    'dash.class_analytics.student_many': { en: 'students', ar: 'طالب', es: 'estudiantes' },
    'dash.class_analytics.matching': { en: 'matching', ar: 'مطابق لـ', es: 'que coinciden con' },
    'dash.class_analytics.search_ph': {
      en: 'Search students...',
      ar: 'دوّر على الطلاب...',
      es: 'Buscar estudiantes...',
    },
    'dash.class_analytics.no_match': {
      en: 'No students match your search.',
      ar: 'ما فيه طلاب يطابقون بحثك.',
      es: 'Ningún estudiante coincide con tu búsqueda.',
    },
    'dash.class_analytics.no_data': {
      en: 'No student data available.',
      ar: 'ما فيه بيانات طلاب.',
      es: 'No hay datos de estudiantes disponibles.',
    },
    'dash.class_analytics.col.student': { en: 'Student', ar: 'الطالب', es: 'Estudiante' },
    'dash.class_analytics.col.progress': { en: 'Progress', ar: 'التقدّم', es: 'Progreso' },
    'dash.class_analytics.col.avg_score': {
      en: 'Avg Score',
      ar: 'متوسط الدرجة',
      es: 'Puntuación media',
    },
    'dash.class_analytics.col.study_time': {
      en: 'Study Time',
      ar: 'وقت الدراسة',
      es: 'Tiempo de estudio',
    },
    'dash.class_analytics.col.last_active': {
      en: 'Last Active',
      ar: 'آخر نشاط',
      es: 'Última actividad',
    },
    'dash.class_analytics.modules_suffix': { en: 'modules', ar: 'وحدة', es: 'módulos' },
    'dash.class_analytics.never': { en: 'Never', ar: 'أبداً', es: 'Nunca' },
    'dash.class_analytics.class_average': {
      en: 'Class Average',
      ar: 'متوسط الصف',
      es: 'Media de la clase',
    },
    'dash.class_analytics.students_count_suffix': { en: 'students', ar: 'طالب', es: 'estudiantes' },

    /* ─── Printable worksheets (dashboard/teacher/resources/worksheets) ─── */
    'dash.worksheets.meta_title': {
      en: 'Printable Worksheets - Teacher Resources',
      ar: 'أوراق عمل قابلة للطباعة - مصادر المعلّم',
      es: 'Fichas imprimibles - Recursos para profesores',
    },
    'dash.worksheets.back': {
      en: '← Back to Resources',
      ar: '← ارجع للمصادر',
      es: '← Volver a los recursos',
    },
    'dash.worksheets.title': {
      en: 'Quote Analysis Worksheet: An Inspector Calls',
      ar: 'ورقة تحليل الاقتباسات: An Inspector Calls',
      es: 'Ficha de análisis de citas: An Inspector Calls',
    },
    'dash.worksheets.intro': {
      en: 'Pre-filled example worksheet with key quotes, techniques, and analysis. Use as a model answer or teacher reference. Print-friendly layout.',
      ar: 'ورقة عمل نموذجية جاهزة فيها اقتباسات أساسية وتقنيات وتحليل. استخدمها كإجابة نموذجية أو مرجع للمعلّم. تنسيق مناسب للطباعة.',
      es: 'Ficha de ejemplo ya rellenada con citas clave, técnicas y análisis. Úsala como respuesta modelo o referencia para el profesor. Diseño apto para imprimir.',
    },
    'dash.worksheets.how_title': {
      en: 'How to Use This Worksheet',
      ar: 'كيف تستخدم هالورقة',
      es: 'Cómo usar esta ficha',
    },
    'dash.worksheets.how_model_label': { en: 'As a model:', ar: 'كنموذج:', es: 'Como modelo:' },
    'dash.worksheets.how_model_body': {
      en: 'Show students what detailed quote analysis looks like at Level 5-6.',
      ar: 'ورّي الطلاب كيف يكون تحليل الاقتباسات المفصّل على مستوى Level 5-6.',
      es: 'Muestra a los estudiantes cómo es un análisis de citas detallado a nivel Level 5-6.',
    },
    'dash.worksheets.how_scaffold_label': {
      en: 'As a scaffold:',
      ar: 'كدعم تدريجي:',
      es: 'Como andamiaje:',
    },
    'dash.worksheets.how_scaffold_body': {
      en: 'Give students the quotes and techniques columns, ask them to complete the effect and theme columns.',
      ar: 'عط الطلاب عمود الاقتباسات والتقنيات، واطلب منهم يكمّلون عمود الأثر والموضوع.',
      es: 'Da a los estudiantes las columnas de citas y técnicas, y pídeles que completen las columnas de efecto y tema.',
    },
    'dash.worksheets.how_revision_label': {
      en: 'As revision:',
      ar: 'كمراجعة:',
      es: 'Como repaso:',
    },
    'dash.worksheets.how_revision_body': {
      en: 'Students can use this as a reference when planning exam responses.',
      ar: 'يقدر الطلاب يستخدمونها كمرجع وهم يخططون لإجابات الامتحان.',
      es: 'Los estudiantes pueden usarla como referencia al planificar respuestas de examen.',
    },
    'dash.worksheets.how_diff_label': {
      en: 'Differentiated:',
      ar: 'مع التمايز:',
      es: 'Diferenciada:',
    },
    'dash.worksheets.how_diff_body': {
      en: 'Lower-ability students complete character + quote only; higher-ability attempt all columns independently before comparing.',
      ar: 'الطلاب الأقل قدرة يكمّلون الشخصية + الاقتباس بس؛ والأعلى قدرة يحاولون كل الأعمدة بنفسهم قبل المقارنة.',
      es: 'Los estudiantes de menor nivel completan solo personaje + cita; los de mayor nivel intentan todas las columnas por su cuenta antes de comparar.',
    },
    'dash.worksheets.act_prefix': { en: 'Act', ar: 'Act', es: 'Act' },
    'dash.worksheets.technique_col': {
      en: 'Technique(s)',
      ar: 'التقنية/التقنيات',
      es: 'Técnica(s)',
    },
    'dash.worksheets.effect_col': {
      en: 'Effect & Analysis',
      ar: 'الأثر والتحليل',
      es: 'Efecto y análisis',
    },
    'dash.worksheets.ext_title': {
      en: 'Student Extension Task',
      ar: 'مهمة إثرائية للطالب',
      es: 'Tarea de ampliación para el estudiante',
    },
    'dash.worksheets.ext_intro': {
      en: 'Using the model analyses above, complete the same process for these additional quotes:',
      ar: 'باستخدام التحليلات النموذجية فوق، سوّ نفس العملية لهالاقتباسات الإضافية:',
      es: 'Usando los análisis modelo de arriba, realiza el mismo proceso con estas citas adicionales:',
    },
    'dash.worksheets.copyright': {
      en: 'An Inspector Calls © The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.',
      ar: 'An Inspector Calls © The Estate of J.B. Priestley. الاقتباسات القصيرة منشورة بموجب بند الاستخدام العادل في قانون حقوق التأليف والتصاميم وبراءات الاختراع 1988 لغرض النقد والمراجعة.',
      es: 'An Inspector Calls © The Estate of J.B. Priestley. Las citas breves se reproducen al amparo de la disposición de uso legítimo (fair dealing) de la Copyright, Designs and Patents Act 1988 con fines de crítica y reseña.',
    },
  }
