/**
 * Report-fix override - 2026-05-16 (batch B)
 *
 * The deep-research report flagged the LIVE /accessibility and
 * /affiliate + /affiliates pages rendering placeholder text ("Name",
 * "Desc", "H2", "Lead", "Heading", "Title Part1", "Footnote", etc.).
 *
 * Two root causes were fixed:
 *  1. dictionary.ts lookup() ordering bug - PLACEHOLDER_FIX_MAY15 and
 *     SCREENSHOT_FIX_DICTIONARY were resolved AFTER the auto-junk
 *     AUDIT_FIX_DICTIONARY, so ~80 real affiliate keys were shadowed.
 *     The chain was reordered so every curated override beats audit-fix.
 *  2. The remaining junk keys (39 accessibility keys with no real copy
 *     anywhere; the affiliate "chrome" keys + 8 missing
 *     aff_comp.public.faq.qN.a answers) are supplied here with
 *     hand-written, accurate British-English copy.
 *
 * Wired into lookup() immediately before AUDIT_FIX_DICTIONARY. AR
 * mirrors EN as a graceful fallback until the next translation sweep.
 *
 * Accessibility copy is deliberately HONEST: it states a TARGET of
 * WCAG 2.2 AA and genuine known gaps - it does not claim full or
 * externally-audited conformance.
 */

import type { Dictionary } from './dictionary'

export const REPORT_FIX_MAY16B: Dictionary = {
  // ─── /accessibility (39 keys) ────────────────────────────────────
  'accessibility.what.skip.name': {
    en: 'Skip links',
    ar: 'روابط التخطّي',
    es: 'Enlaces para saltar',
  },
  'accessibility.what.skip.desc': {
    en: 'A "skip to main content" link is provided so keyboard and screen-reader users can bypass repeated navigation.',
    ar: 'نوفّر رابط "تخطّي إلى المحتوى الرئيسي" عشان مستخدمي الكيبورد وقارئ الشاشة يقدرون يتجاوزون التنقّل المتكرّر.',
    es: 'Se ofrece un enlace de «saltar al contenido principal» para que los usuarios de teclado y lector de pantalla puedan omitir la navegación repetida.',
  },
  'accessibility.what.semantic.name': {
    en: 'Semantic structure',
    ar: 'بنية دلالية',
    es: 'Estructura semántica',
  },
  'accessibility.what.semantic.desc': {
    en: 'Pages are built with meaningful HTML landmarks and a logical heading order to aid navigation and comprehension.',
    ar: 'الصفحات مبنية بعلامات HTML واضحة وترتيب عناوين منطقي عشان يسهّل التنقّل والفهم.',
    es: 'Las páginas se construyen con marcas HTML significativas y un orden lógico de encabezados para facilitar la navegación y la comprensión.',
  },
  'accessibility.what.aria.name': {
    en: 'ARIA where needed',
    ar: 'ARIA عند الحاجة',
    es: 'ARIA cuando es necesario',
  },
  'accessibility.what.aria.desc': {
    en: 'WAI-ARIA roles and labels are applied to custom components where native HTML semantics are not sufficient.',
    ar: 'نطبّق أدوار WAI-ARIA وتسمياتها على العناصر المخصّصة لمّا تكون دلالات HTML الأصلية ما تكفي.',
    es: 'Se aplican roles y etiquetas WAI-ARIA a los componentes personalizados cuando la semántica nativa de HTML no es suficiente.',
  },
  'accessibility.what.contrast.name': {
    en: 'Colour contrast',
    ar: 'تباين الألوان',
    es: 'Contraste de color',
  },
  'accessibility.what.contrast.desc': {
    en: 'Text and interface colours are chosen to target the WCAG 2.2 AA contrast ratios in both light and dark themes.',
    ar: 'ألوان النص والواجهة مختارة عشان تستهدف نسب التباين حسب WCAG 2.2 AA في الوضع الفاتح والغامق.',
    es: 'Los colores del texto y de la interfaz se eligen para alcanzar las relaciones de contraste WCAG 2.2 AA tanto en el tema claro como en el oscuro.',
  },
  'accessibility.what.responsive.name': {
    en: 'Responsive layout',
    ar: 'تصميم متجاوب',
    es: 'Diseño adaptable',
  },
  'accessibility.what.responsive.desc': {
    en: 'The layout adapts to different screen sizes and supports zooming and text resizing without loss of content.',
    ar: 'التصميم يتأقلم مع أحجام الشاشات المختلفة ويدعم التكبير وتغيير حجم النص بدون ما يضيع المحتوى.',
    es: 'El diseño se adapta a distintos tamaños de pantalla y permite ampliar y cambiar el tamaño del texto sin pérdida de contenido.',
  },
  'accessibility.what.screen.name': {
    en: 'Screen-reader support',
    ar: 'دعم قارئ الشاشة',
    es: 'Compatibilidad con lectores de pantalla',
  },
  'accessibility.what.screen.desc': {
    en: 'Core reading and revision journeys are designed and tested to work with common screen readers.',
    ar: 'رحلات القراءة والمراجعة الأساسية مصمّمة ومجرّبة عشان تشتغل مع قارئات الشاشة المعروفة.',
    es: 'Los recorridos principales de lectura y repaso están diseñados y probados para funcionar con los lectores de pantalla más comunes.',
  },
  'accessibility.what.motion.name': {
    en: 'Reduced motion',
    ar: 'حركة أقل',
    es: 'Movimiento reducido',
  },
  'accessibility.what.motion.desc': {
    en: 'Non-essential animation is reduced or removed for users who set the operating-system preference',
    ar: 'الحركة غير الضرورية تقل أو تتشال للمستخدمين اللي يضبطون هذا الخيار في نظام التشغيل',
    es: 'La animación no esencial se reduce o elimina para los usuarios que activan la preferencia del sistema operativo',
  },
  'accessibility.limits.h2': {
    en: 'Known limitations',
    ar: 'حدود معروفة',
    es: 'Limitaciones conocidas',
  },
  'accessibility.limits.lead': {
    en: 'We are honest about where the platform does not yet fully meet our target, and we are actively working to close these gaps.',
    ar: 'إحنا صادقين بخصوص الأماكن اللي المنصة لسا ما توصل فيها لهدفنا بالكامل، وقاعدين نشتغل بجد عشان نسدّ هذي الثغرات.',
    es: 'Somos honestos sobre los puntos en los que la plataforma aún no cumple plenamente nuestro objetivo, y estamos trabajando activamente para cerrar esas brechas.',
  },
  'accessibility.limits.interactive.name': {
    en: 'Complex interactive tools',
    ar: 'أدوات تفاعلية معقّدة',
    es: 'Herramientas interactivas complejas',
  },
  'accessibility.limits.interactive.desc': {
    en: 'Some richer interactive exercises and editors may not yet be fully operable by keyboard or screen reader in every scenario.',
    ar: 'بعض التمارين والمحرّرات التفاعلية المتقدّمة يمكن لسا ما تشتغل بالكامل بالكيبورد أو قارئ الشاشة في كل الحالات.',
    es: 'Algunos ejercicios y editores interactivos más complejos puede que aún no se manejen completamente con el teclado o el lector de pantalla en todos los escenarios.',
  },
  'accessibility.limits.third_party.name': {
    en: 'Third-party embeds',
    ar: 'محتوى مضمّن من جهات خارجية',
    es: 'Contenido incrustado de terceros',
  },
  'accessibility.limits.third_party.desc': {
    en: 'Embedded content from third-party providers is outside our direct control and may not meet the same accessibility standard.',
    ar: 'المحتوى المضمّن من مزوّدين خارجيين مو تحت سيطرتنا المباشرة ويمكن ما يلتزم بنفس معيار الوصول.',
    es: 'El contenido incrustado de proveedores externos está fuera de nuestro control directo y puede no cumplir el mismo estándar de accesibilidad.',
  },
  'accessibility.limits.pdf.name': { en: 'Legacy PDFs', ar: 'ملفات PDF قديمة', es: 'PDF antiguos' },
  'accessibility.limits.pdf.desc': {
    en: 'Some older downloadable PDF resources may not be fully tagged for assistive technology; we are reviewing and replacing these over time.',
    ar: 'بعض ملفات PDF القديمة القابلة للتحميل يمكن ما تكون موسومة بالكامل للتقنيات المساعِدة؛ وإحنا نراجعها ونستبدلها مع الوقت.',
    es: 'Algunos recursos PDF descargables más antiguos pueden no estar totalmente etiquetados para la tecnología de asistencia; los estamos revisando y reemplazando con el tiempo.',
  },
  'accessibility.limits.ai_note': {
    en: 'AI-generated feedback is presented through interface components that we are progressively improving for accessibility, and we welcome reports of any barriers you encounter.',
    ar: 'الملاحظات المولّدة بالـ AI تنعرض من خلال عناصر واجهة نحسّنها تدريجياً لسهولة الوصول، ونرحّب بأي بلاغ عن عوائق تواجهك.',
    es: 'Los comentarios generados por IA se presentan a través de componentes de interfaz que estamos mejorando progresivamente en accesibilidad, y agradecemos que nos informes de cualquier barrera que encuentres.',
  },
  'accessibility.tech.h2': {
    en: 'Technologies this statement relies on',
    ar: 'التقنيات اللي يعتمد عليها هذا البيان',
    es: 'Tecnologías en las que se basa esta declaración',
  },
  'accessibility.tech.intro': {
    en: 'Accessibility of The English Hub relies on the following technologies working with your browser and any assistive technology you use:',
    ar: 'سهولة الوصول في The English Hub تعتمد على التقنيات التالية وهي تشتغل مع متصفّحك وأي تقنية مساعِدة تستخدمها:',
    es: 'La accesibilidad de The English Hub depende de que las siguientes tecnologías funcionen con tu navegador y con cualquier tecnología de asistencia que utilices:',
  },
  'accessibility.tech.outro': {
    en: 'These technologies are relied upon for conformance with the accessibility standard we target.',
    ar: 'نعتمد على هذي التقنيات عشان نلتزم بمعيار الوصول اللي نستهدفه.',
    es: 'Estas tecnologías son imprescindibles para cumplir el estándar de accesibilidad que perseguimos.',
  },
  'accessibility.assessment.h2': {
    en: 'How we assess accessibility',
    ar: 'كيف نقيّم سهولة الوصول',
    es: 'Cómo evaluamos la accesibilidad',
  },
  'accessibility.assessment.lead': {
    en: 'This statement reflects our own ongoing assessment rather than a formal external audit.',
    ar: 'هذا البيان يعكس تقييمنا المستمر بنفسنا، مو تدقيق خارجي رسمي.',
    es: 'Esta declaración refleja nuestra propia evaluación continua y no una auditoría externa formal.',
  },
  'accessibility.assessment.self.name': {
    en: 'Self-evaluation',
    ar: 'تقييم ذاتي',
    es: 'Autoevaluación',
  },
  'accessibility.assessment.self.desc': {
    en: 'We carry out internal reviews using automated checks, manual keyboard testing and screen-reader spot-checks against WCAG 2.2 AA.',
    ar: 'نسوّي مراجعات داخلية بفحوصات تلقائية واختبار يدوي بالكيبورد وفحوصات عيّنة لقارئ الشاشة مقابل WCAG 2.2 AA.',
    es: 'Realizamos revisiones internas mediante comprobaciones automáticas, pruebas manuales con teclado y comprobaciones puntuales con lector de pantalla frente a WCAG 2.2 AA.',
  },
  'accessibility.assessment.feedback.name': {
    en: 'User feedback',
    ar: 'ملاحظات المستخدمين',
    es: 'Comentarios de los usuarios',
  },
  'accessibility.assessment.feedback.desc': {
    en: 'Issues reported by students, parents, teachers and schools are triaged and used to prioritise fixes.',
    ar: 'المشاكل اللي يبلّغ عنها الطلاب والأهل والمعلمين والمدارس نرتّبها ونستخدمها عشان نحدّد أولويات الإصلاح.',
    es: 'Los problemas notificados por estudiantes, padres, profesores y colegios se clasifican y se utilizan para priorizar las correcciones.',
  },
  'accessibility.enforcement.h2': {
    en: 'Enforcement procedure',
    ar: 'إجراء التنفيذ',
    es: 'Procedimiento de aplicación',
  },
  'accessibility.enforcement.body1_lead': {
    en: 'In the United Kingdom, access to digital services for disabled people is supported by the',
    ar: 'في المملكة المتحدة، وصول ذوي الإعاقة للخدمات الرقمية مدعوم بموجب',
    es: 'En el Reino Unido, el acceso de las personas con discapacidad a los servicios digitales está respaldado por la',
  },
  'accessibility.enforcement.equality_act': {
    en: 'Equality Act 2010',
    ar: 'Equality Act 2010',
    es: 'Equality Act 2010',
  },
  'accessibility.enforcement.body1_tail': {
    en: ', and we treat accessibility as an ongoing legal and ethical responsibility.',
    ar: '، وإحنا نعتبر سهولة الوصول مسؤولية قانونية وأخلاقية مستمرة.',
    es: ', y tratamos la accesibilidad como una responsabilidad legal y ética permanente.',
  },
  'accessibility.enforcement.body2_lead': {
    en: 'If you contact us about an accessibility problem and are not satisfied with our response, you can escalate the matter to the',
    ar: 'لو تواصلت معنا بخصوص مشكلة في الوصول وما رضيت بردّنا، تقدر ترفع الموضوع إلى',
    es: 'Si te pones en contacto con nosotros por un problema de accesibilidad y no quedas satisfecho con nuestra respuesta, puedes escalar el asunto al',
  },
  'accessibility.enforcement.eass_link': {
    en: 'Equality Advisory and Support Service (EASS)',
    ar: 'Equality Advisory and Support Service (EASS)',
    es: 'Equality Advisory and Support Service (EASS)',
  },
  'accessibility.enforcement.body2_tail': {
    en: ', which provides free advice and support on equality and human rights issues.',
    ar: '، اللي يقدّم نصايح ودعم ببلاش في قضايا المساواة وحقوق الإنسان.',
    es: ', que ofrece asesoramiento y apoyo gratuitos en cuestiones de igualdad y derechos humanos.',
  },

  // ─── /affiliate (aff.*) ──────────────────────────────────────────
  'aff.hero.eyebrow': {
    en: 'Affiliate Programme',
    ar: 'برنامج الشركاء',
    es: 'Programa de afiliados',
  },
  'aff.hero.title_lead': {
    en: 'Earn recurring income',
    ar: 'اكسب دخل متكرّر',
    es: 'Gana ingresos recurrentes',
  },
  'aff.hero.title_highlight': {
    en: 'championing better English',
    ar: 'وأنت تدعم إنجليزي أفضل',
    es: 'promoviendo un mejor inglés',
  },
  'aff.hero.title_tail': {
    en: 'for every student you refer',
    ar: 'عن كل طالب تحوّله لنا',
    es: 'por cada estudiante que recomiendes',
  },
  'aff.hero.subtitle': {
    en: 'Share The English Hub with your audience and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English support that families and schools genuinely return to.',
    ar: 'شارك The English Hub مع جمهورك واكسب عمولة متكرّرة عن كل اشتراك سنوي تحوّله لنا. دعم إنجليزي مستقل ومتماشي مع بوردات الامتحانات لمستويات GCSE و IGCSE و KS3 و EAL، تثق فيه العوائل والمدارس وترجع له فعلاً.',
    es: 'Comparte The English Hub con tu audiencia y gana comisiones recurrentes por cada suscripción anual que recomiendes. Apoyo de inglés independiente y alineado con las juntas examinadoras para GCSE, IGCSE, KS3 y EAL al que las familias y los colegios vuelven de verdad.',
  },
  'aff.hero.bullet_cookie': {
    en: '90-day tracking cookie',
    ar: 'كوكي تتبّع 90 يوم',
    es: 'Cookie de seguimiento de 90 días',
  },
  'aff.hero.bullet_payouts': { en: 'Monthly payouts', ar: 'دفعات شهرية', es: 'Pagos mensuales' },
  'aff.hero.bullet_no_minimum': {
    en: 'No minimum traffic',
    ar: 'بدون حد أدنى للزيارات',
    es: 'Sin tráfico mínimo',
  },
  'aff.cta.apply_now': { en: 'Apply now', ar: 'قدّم الحين', es: 'Solicítalo ahora' },
  'aff.cta.partner_login': { en: 'Partner login', ar: 'دخول الشركاء', es: 'Acceso de socios' },
  'aff.cta.eyebrow': { en: 'Ready to start', ar: 'جاهز تبدأ', es: 'Listo para empezar' },
  'aff.cta.heading': {
    en: 'Turn your audience into recurring income',
    ar: 'حوّل جمهورك إلى دخل متكرّر',
    es: 'Convierte tu audiencia en ingresos recurrentes',
  },
  'aff.cta.body': {
    en: 'Join the partner programme in minutes. Get your link, share it with the parents, students and educators who trust you, and earn commission every time a referral subscribes to an annual plan.',
    ar: 'انضم لبرنامج الشركاء في دقايق. احصل على رابطك، شاركه مع الأهل والطلاب والمعلمين اللي يثقون فيك، واكسب عمولة كل ما اشترك شخص محوّل في خطة سنوية.',
    es: 'Únete al programa de socios en minutos. Consigue tu enlace, compártelo con los padres, estudiantes y educadores que confían en ti, y gana comisión cada vez que un referido se suscribe a un plan anual.',
  },
  'aff.tiers.heading': { en: 'Commission tiers', ar: 'مستويات العمولة', es: 'Niveles de comisión' },
  'aff.tiers.subheading': {
    en: 'The more students you refer, the more you earn on each one. Tiers reward consistent partners with higher recurring commission and added support.',
    ar: 'كل ما حوّلت طلاب أكثر، كسبت أكثر عن كل واحد. المستويات تكافئ الشركاء المستمرّين بعمولة متكرّرة أعلى ودعم إضافي.',
    es: 'Cuantos más estudiantes recomiendes, más ganas por cada uno. Los niveles recompensan a los socios constantes con mayor comisión recurrente y apoyo adicional.',
  },
  'aff.tiers.top_tier_badge': { en: 'Top tier', ar: 'أعلى مستوى', es: 'Nivel superior' },
  'aff.tiers.tier_n': { en: 'Tier {n}', ar: 'المستوى {n}', es: 'Nivel {n}' },
  'aff.tiers.per_signup_suffix': { en: 'per signup', ar: 'عن كل تسجيل', es: 'por registro' },
  'aff.tiers.flat_commission_caption': {
    en: 'Recurring commission on each referred annual subscription',
    ar: 'عمولة متكرّرة عن كل اشتراك سنوي محوّل',
    es: 'Comisión recurrente por cada suscripción anual recomendada',
  },
  'aff.tiers.open_from_first_signup': {
    en: 'Open from your first signup',
    ar: 'متاح من أول تسجيل لك',
    es: 'Disponible desde tu primer registro',
  },
  'aff.tiers.from_signup_n': {
    en: 'From signup {n}',
    ar: 'من التسجيل {n}',
    es: 'A partir del registro {n}',
  },
  'aff.tiers.feature_marketing_assets': {
    en: 'Ready-to-use marketing assets',
    ar: 'مواد تسويقية جاهزة للاستخدام',
    es: 'Recursos de marketing listos para usar',
  },
  'aff.tiers.feature_realtime_tracking': {
    en: 'Real-time referral tracking',
    ar: 'تتبّع الإحالات في الوقت الحقيقي',
    es: 'Seguimiento de referidos en tiempo real',
  },
  'aff.tiers.feature_priority_support': {
    en: 'Priority partner support',
    ar: 'دعم شركاء بأولوية',
    es: 'Soporte prioritario para socios',
  },
  'aff.tiers.feature_partner_manager': {
    en: 'Dedicated partner manager',
    ar: 'مدير شركاء مخصّص',
    es: 'Gestor de socios dedicado',
  },
  'aff.calc.heading': {
    en: 'Income that grows with you',
    ar: 'دخل يكبر معك',
    es: 'Ingresos que crecen contigo',
  },
  'aff.calc.body': {
    en: 'Commission is recurring for as long as your referral keeps their subscription active, so a steady stream of signups builds dependable income over time rather than a one-off payment.',
    ar: 'العمولة متكرّرة طول ما الشخص المحوّل محتفظ باشتراكه فعّال، فتدفّق ثابت من التسجيلات يبني لك دخل تعتمد عليه مع الوقت بدال دفعة وحدة بس.',
    es: 'La comisión es recurrente mientras tu referido mantenga su suscripción activa, así que un flujo constante de registros construye unos ingresos fiables con el tiempo en lugar de un pago único.',
  },
  'aff.calc.bullet_auto_upgrades': {
    en: 'Commission follows plan upgrades automatically',
    ar: 'العمولة تتبع ترقيات الخطة تلقائياً',
    es: 'La comisión sigue automáticamente las mejoras de plan',
  },
  'aff.calc.bullet_every_student': {
    en: 'Earn on every student referred through your link',
    ar: 'اكسب عن كل طالب يتحوّل من رابطك',
    es: 'Gana por cada estudiante recomendado a través de tu enlace',
  },
  'aff.calc.bullet_global': {
    en: 'Open to partners worldwide',
    ar: 'متاح للشركاء حول العالم',
    es: 'Abierto a socios de todo el mundo',
  },
  'aff.how.heading': { en: 'How it works', ar: 'كيف يشتغل', es: 'Cómo funciona' },
  'aff.how.subheading': {
    en: 'Three simple steps from sign-up to your first commission.',
    ar: 'ثلاث خطوات بسيطة من التسجيل لأول عمولة لك.',
    es: 'Tres pasos sencillos desde el registro hasta tu primera comisión.',
  },
  'aff.how.step_label': { en: 'Step', ar: 'خطوة', es: 'Paso' },
  'aff.how.step1_title': {
    en: 'Apply and get approved',
    ar: 'قدّم واحصل على الموافقة',
    es: 'Solicita y obtén la aprobación',
  },
  'aff.how.step1_body': {
    en: 'Submit a short application telling us about your audience. Once approved, you get instant access to your partner dashboard, unique link and referral code.',
    ar: 'قدّم طلب قصير تعرّفنا فيه على جمهورك. أول ما تتم الموافقة، توصل فوراً للوحة الشركاء وللرابط الخاص فيك ولكود الإحالة.',
    es: 'Envía una breve solicitud contándonos sobre tu audiencia. Una vez aprobada, obtienes acceso instantáneo a tu panel de socio, tu enlace único y tu código de referido.',
  },
  'aff.how.step2_title': { en: 'Share your link', ar: 'شارك رابطك', es: 'Comparte tu enlace' },
  'aff.how.step2_body': {
    en: 'Promote The English Hub through your website, newsletter, social channels or classroom. Use our ready-made assets or your own words, whichever fits your audience best.',
    ar: 'روّج لـ The English Hub من خلال موقعك أو نشرتك البريدية أو قنواتك الاجتماعية أو صفّك. استخدم موادنا الجاهزة أو كلامك الخاص، اللي يناسب جمهورك أكثر.',
    es: 'Promociona The English Hub a través de tu web, tu boletín, tus redes sociales o tu aula. Usa nuestros recursos listos para usar o tus propias palabras, lo que mejor se adapte a tu audiencia.',
  },
  'aff.how.step3_title': {
    en: 'Earn recurring commission',
    ar: 'اكسب عمولة متكرّرة',
    es: 'Gana comisión recurrente',
  },
  'aff.how.step3_body': {
    en: 'When someone subscribes to an annual plan through your link, you earn recurring commission. Track every referral in real time and receive monthly payouts.',
    ar: 'لمّا يشترك شخص في خطة سنوية من رابطك، تكسب عمولة متكرّرة. تابع كل إحالة في الوقت الحقيقي واستلم دفعات شهرية.',
    es: 'Cuando alguien se suscribe a un plan anual a través de tu enlace, ganas comisión recurrente. Haz seguimiento de cada referido en tiempo real y recibe pagos mensuales.',
  },
  'aff.faq.heading': {
    en: 'Frequently asked questions',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas frecuentes',
  },
  'aff.faq.subheading': {
    en: 'Everything you need to know about the partner programme.',
    ar: 'كل اللي تبي تعرفه عن برنامج الشركاء.',
    es: 'Todo lo que necesitas saber sobre el programa de socios.',
  },

  // ─── /affiliates public page (aff_comp.public.*) ─────────────────
  'aff_comp.public.partnership_badge': {
    en: 'Partner Programme',
    ar: 'برنامج الشركاء',
    es: 'Programa de socios',
  },
  'aff_comp.public.hero.title_part1': {
    en: 'Earn recurring commission with',
    ar: 'اكسب عمولة متكرّرة مع',
    es: 'Gana comisión recurrente con',
  },
  'aff_comp.public.hero.title_brand': {
    en: 'The English Hub',
    ar: 'The English Hub',
    es: 'The English Hub',
  },
  'aff_comp.public.hero.subtitle': {
    en: 'Recommend an independent, exam-board aligned English platform to the families and educators who trust you, and earn recurring commission on every annual subscription you refer.',
    ar: 'انصح بمنصة إنجليزي مستقلة ومتماشية مع بوردات الامتحانات للعوائل والمعلمين اللي يثقون فيك، واكسب عمولة متكرّرة عن كل اشتراك سنوي تحوّله لنا.',
    es: 'Recomienda una plataforma de inglés independiente y alineada con las juntas examinadoras a las familias y educadores que confían en ti, y gana comisión recurrente por cada suscripción anual que recomiendes.',
  },
  'aff_comp.public.cta.get_code': {
    en: 'Get your referral code',
    ar: 'احصل على كود الإحالة',
    es: 'Consigue tu código de referido',
  },
  'aff_comp.public.cta.learn_more': { en: 'Learn more', ar: 'اعرف أكثر', es: 'Más información' },
  'aff_comp.public.why.heading': {
    en: 'Why partner with us',
    ar: 'ليش تصير شريك معنا',
    es: 'Por qué asociarte con nosotros',
  },
  'aff_comp.public.why.subheading': {
    en: 'A genuinely useful product for your audience, fair recurring rewards for you, and transparent tracking throughout.',
    ar: 'منتج مفيد فعلاً لجمهورك، ومكافآت متكرّرة عادلة لك، وتتبّع شفّاف من البداية للنهاية.',
    es: 'Un producto realmente útil para tu audiencia, recompensas recurrentes justas para ti y un seguimiento transparente de principio a fin.',
  },
  'aff_comp.public.how.heading': { en: 'How it works', ar: 'كيف يشتغل', es: 'Cómo funciona' },
  'aff_comp.public.how.subheading': {
    en: 'Apply, share your code, and earn commission on every annual subscription you refer.',
    ar: 'قدّم، شارك كودك، واكسب عمولة عن كل اشتراك سنوي تحوّله لنا.',
    es: 'Solicítalo, comparte tu código y gana comisión por cada suscripción anual que recomiendes.',
  },
  'aff_comp.public.how.annual_only_lead': {
    en: 'Annual plans only',
    ar: 'الخطط السنوية بس',
    es: 'Solo planes anuales',
  },
  'aff_comp.public.how.annual_only_body': {
    en: 'Commission is earned on referred annual subscriptions. This keeps rewards meaningful and aligned with families who commit to a full year of learning.',
    ar: 'العمولة تُكسب على الاشتراكات السنوية المحوّلة. هذا يخلّي المكافآت ذات قيمة ومتماشية مع العوائل اللي تلتزم بسنة تعلّم كاملة.',
    es: 'La comisión se gana con las suscripciones anuales recomendadas. Así las recompensas siguen siendo significativas y acordes con las familias que se comprometen a un año completo de aprendizaje.',
  },
  'aff_comp.public.commission.heading': {
    en: 'Commission structure',
    ar: 'هيكل العمولة',
    es: 'Estructura de comisiones',
  },
  'aff_comp.public.commission.subheading': {
    en: 'Transparent recurring commission on every referred annual plan, with higher rates as your referrals grow.',
    ar: 'عمولة متكرّرة وشفّافة عن كل خطة سنوية محوّلة، بنِسب أعلى كل ما زادت إحالاتك.',
    es: 'Comisión recurrente y transparente por cada plan anual recomendado, con tasas más altas a medida que crecen tus referidos.',
  },
  'aff_comp.public.commission.col_plan': { en: 'Plan', ar: 'الخطة', es: 'Plan' },
  'aff_comp.public.commission.col_commission': { en: 'Commission', ar: 'العمولة', es: 'Comisión' },
  'aff_comp.public.commission.per_signup': {
    en: 'per signup',
    ar: 'عن كل تسجيل',
    es: 'por registro',
  },
  'aff_comp.public.commission.footnote': {
    en: 'Commission is recurring while the referred subscription stays active. Rates are tiered by referral volume and confirmed in your partner dashboard.',
    ar: 'العمولة متكرّرة طول ما الاشتراك المحوّل فعّال. النِسب مدرّجة حسب عدد الإحالات ومؤكّدة في لوحة الشركاء حقّتك.',
    es: 'La comisión es recurrente mientras la suscripción recomendada siga activa. Las tasas se escalan según el volumen de referidos y se confirman en tu panel de socio.',
  },
  'aff_comp.public.impact.heading': {
    en: 'The impact you help create',
    ar: 'الأثر اللي تساعد في صنعه',
    es: 'El impacto que ayudas a crear',
  },
  'aff_comp.public.impact.subheading': {
    en: 'Every referral helps a student build real confidence in English, from KS3 through GCSE, IGCSE and EAL.',
    ar: 'كل إحالة تساعد طالب يبني ثقة حقيقية في الإنجليزي، من KS3 إلى GCSE و IGCSE و EAL.',
    es: 'Cada referido ayuda a un estudiante a desarrollar verdadera confianza en inglés, desde KS3 hasta GCSE, IGCSE y EAL.',
  },
  'aff_comp.public.impact.empty_testimonials': {
    en: 'Partner case studies and stories are coming as the programme grows. Be one of the early partners who helps shape it.',
    ar: 'قصص الشركاء ودراسات الحالة جايّة مع نمو البرنامج. كن من الشركاء الأوائل اللي يساعدون في تشكيله.',
    es: 'Los casos de éxito y las historias de socios llegarán a medida que crezca el programa. Sé uno de los primeros socios que ayudan a darle forma.',
  },
  'aff_comp.public.what_you_get.heading': {
    en: 'What you get',
    ar: 'وش تحصّل',
    es: 'Lo que obtienes',
  },
  'aff_comp.public.what_you_get.subheading': {
    en: 'Everything you need to share The English Hub with confidence and track your results.',
    ar: 'كل اللي تحتاجه عشان تشارك The English Hub بثقة وتتابع نتايجك.',
    es: 'Todo lo que necesitas para compartir The English Hub con confianza y hacer seguimiento de tus resultados.',
  },
  'aff_comp.public.faq.heading': {
    en: 'Frequently asked questions',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas frecuentes',
  },
  'aff_comp.public.apply.heading': {
    en: 'Become a partner',
    ar: 'صير شريك',
    es: 'Conviértete en socio',
  },
  'aff_comp.public.apply.subheading_logged_in': {
    en: 'You are signed in and ready to go. Generate your referral code and start sharing The English Hub today.',
    ar: 'أنت مسجّل دخول وجاهز تبدأ. أنشئ كود الإحالة حقّك وابدأ تشارك The English Hub اليوم.',
    es: 'Has iniciado sesión y todo está listo. Genera tu código de referido y empieza a compartir The English Hub hoy mismo.',
  },
  'aff_comp.public.apply.subheading_logged_out': {
    en: 'Create an account or sign in to generate your referral code and join the partner programme.',
    ar: 'سوِّ حساب أو سجّل دخول عشان تنشئ كود الإحالة حقّك وتنضم لبرنامج الشركاء.',
    es: 'Crea una cuenta o inicia sesión para generar tu código de referido y unirte al programa de socios.',
  },
  'aff_comp.public.apply.annual_only_note_lead': {
    en: 'Good to know',
    ar: 'زين تعرف',
    es: 'Conviene saber',
  },
  'aff_comp.public.apply.annual_only_note_body': {
    en: 'Commission applies to referred annual subscriptions. Referrals are tracked for 90 days from the first click, so you are credited even if someone subscribes later.',
    ar: 'العمولة تنطبق على الاشتراكات السنوية المحوّلة. الإحالات تتتبّع لمدة 90 يوم من أول نقرة، فتنحسب لك حتى لو اشترك الشخص بعدين.',
    es: 'La comisión se aplica a las suscripciones anuales recomendadas. Los referidos se rastrean durante 90 días desde el primer clic, así que se te acredita aunque alguien se suscriba más tarde.',
  },
  'aff_comp.public.apply.signin_first': {
    en: 'Sign in first',
    ar: 'سجّل دخول أول',
    es: 'Inicia sesión primero',
  },
  'aff_comp.public.apply.signin_blurb': {
    en: 'You need an account to generate your referral code and access your partner dashboard. It only takes a moment.',
    ar: 'تحتاج حساب عشان تنشئ كود الإحالة حقّك وتوصل للوحة الشركاء. ما تاخذ إلا لحظة.',
    es: 'Necesitas una cuenta para generar tu código de referido y acceder a tu panel de socio. Solo lleva un momento.',
  },
  'aff_comp.public.apply.create_account': {
    en: 'Create an account',
    ar: 'سوِّ حساب',
    es: 'Crear una cuenta',
  },
  'aff_comp.public.apply.sign_in': { en: 'Sign in', ar: 'سجّل دخول', es: 'Iniciar sesión' },
  'aff_comp.public.basics.heading': {
    en: 'Programme basics',
    ar: 'أساسيات البرنامج',
    es: 'Aspectos básicos del programa',
  },
  'aff_comp.public.basics.attribution.title': {
    en: '90-day attribution',
    ar: 'إسناد 90 يوم',
    es: 'Atribución de 90 días',
  },
  'aff_comp.public.basics.attribution.desc': {
    en: 'A 90-day cookie tracks each referral from the first click, so you are credited even when someone subscribes later.',
    ar: 'كوكي مدّته 90 يوم يتتبّع كل إحالة من أول نقرة، فتنحسب لك حتى لو اشترك الشخص بعدين.',
    es: 'Una cookie de 90 días rastrea cada referido desde el primer clic, así que se te acredita aunque alguien se suscriba más tarde.',
  },
  'aff_comp.public.basics.min_payout.title': {
    en: 'Low minimum payout',
    ar: 'حد أدنى منخفض للدفع',
    es: 'Pago mínimo bajo',
  },
  'aff_comp.public.basics.min_payout.desc': {
    en: 'Reach a modest payout threshold and receive your earnings on a monthly schedule, with the current minimum shown in your dashboard.',
    ar: 'اوصل لحد بسيط للدفع واستلم أرباحك بجدول شهري، والحد الأدنى الحالي مبيّن في لوحتك.',
    es: 'Alcanza un umbral de pago modesto y recibe tus ganancias con periodicidad mensual; el mínimo actual se muestra en tu panel.',
  },
  'aff_comp.public.basics.ltv.title': {
    en: 'Recurring lifetime value',
    ar: 'قيمة متكرّرة مدى الحياة',
    es: 'Valor recurrente de por vida',
  },
  'aff_comp.public.basics.ltv.desc': {
    en: 'Commission keeps paying for as long as your referral stays subscribed, so each referral can earn well beyond the first year.',
    ar: 'العمولة تستمر طول ما الشخص المحوّل محتفظ باشتراكه، فكل إحالة ممكن تكسب لك أكثر من السنة الأولى بوايد.',
    es: 'La comisión se sigue pagando mientras tu referido siga suscrito, así que cada referido puede generar ganancias mucho más allá del primer año.',
  },
  'aff_comp.public.basics.commission.title': {
    en: 'Tiered commission',
    ar: 'عمولة مدرّجة',
    es: 'Comisión escalonada',
  },
  'aff_comp.public.basics.commission.desc': {
    en: 'Earn recurring commission on every referred annual plan, with higher rates unlocked as your referral volume grows.',
    ar: 'اكسب عمولة متكرّرة عن كل خطة سنوية محوّلة، مع فتح نِسب أعلى كل ما زاد عدد إحالاتك.',
    es: 'Gana comisión recurrente por cada plan anual recomendado, con tasas más altas que se desbloquean a medida que crece tu volumen de referidos.',
  },
  'aff_comp.public.bottom_cta.heading': {
    en: 'Ready to start earning',
    ar: 'جاهز تبدأ تكسب',
    es: 'Listo para empezar a ganar',
  },
  'aff_comp.public.bottom_cta.body': {
    en: 'Join the partner programme, share The English Hub with the people who trust your recommendations, and earn recurring commission on every annual subscription you refer.',
    ar: 'انضم لبرنامج الشركاء، شارك The English Hub مع الناس اللي يثقون بتوصياتك، واكسب عمولة متكرّرة عن كل اشتراك سنوي تحوّله لنا.',
    es: 'Únete al programa de socios, comparte The English Hub con quienes confían en tus recomendaciones y gana comisión recurrente por cada suscripción anual que recomiendes.',
  },
  'aff_comp.public.bottom_cta.button': {
    en: 'Get your referral code',
    ar: 'احصل على كود الإحالة',
    es: 'Consigue tu código de referido',
  },
  'aff_comp.public.faq.q1.a': {
    en: 'The programme is open to anyone with a relevant audience, including educators, tutors, parent communities, content creators and education websites. There are no follower or traffic minimums. We simply ask that promotion is honest and that The English Hub is presented as an independent platform that is exam-board aligned but not endorsed by any exam board.',
    ar: 'البرنامج مفتوح لأي شخص عنده جمهور مناسب، يشمل المعلمين والمدرّسين الخصوصيين ومجتمعات الأهل وصنّاع المحتوى والمواقع التعليمية. ما في حد أدنى للمتابعين أو الزيارات. كل اللي نطلبه إن الترويج يكون صادق وإن The English Hub يُعرض كمنصة مستقلة متماشية مع بوردات الامتحانات بس مو معتمدة من أي بورد.',
    es: 'El programa está abierto a cualquier persona con una audiencia relevante, incluidos educadores, tutores, comunidades de padres, creadores de contenido y sitios web educativos. No hay un mínimo de seguidores ni de tráfico. Solo pedimos que la promoción sea honesta y que The English Hub se presente como una plataforma independiente, alineada con las juntas examinadoras pero no avalada por ninguna junta.',
  },
  'aff_comp.public.faq.q2.a': {
    en: 'Create an account or sign in, then submit the short partner application describing your audience. Once approved, your partner dashboard unlocks instantly with a unique referral link, a code to share, marketing assets and real-time tracking. Most applications are reviewed quickly so you can start sharing without long delays.',
    ar: 'سوِّ حساب أو سجّل دخول، وبعدين قدّم طلب الشراكة القصير اللي توصف فيه جمهورك. أول ما تتم الموافقة، تنفتح لوحة الشركاء حقّتك فوراً مع رابط إحالة خاص وكود تشاركه ومواد تسويقية وتتبّع في الوقت الحقيقي. أغلب الطلبات تتراجع بسرعة فتقدر تبدأ تشارك بدون تأخير طويل.',
    es: 'Crea una cuenta o inicia sesión y, a continuación, envía la breve solicitud de socio describiendo tu audiencia. Una vez aprobada, tu panel de socio se desbloquea al instante con un enlace de referido único, un código para compartir, recursos de marketing y seguimiento en tiempo real. La mayoría de las solicitudes se revisan con rapidez, así que puedes empezar a compartir sin grandes demoras.',
  },
  'aff_comp.public.faq.q3.a': {
    en: 'Payouts are made monthly once your balance reaches the minimum threshold shown in your dashboard. Commission is confirmed after the referred annual subscription completes its standard refund window, which protects both partners and the programme. Your dashboard always shows pending and confirmed earnings clearly.',
    ar: 'الدفعات تتم شهرياً أول ما يوصل رصيدك للحد الأدنى المبيّن في لوحتك. العمولة تتأكّد بعد ما يخلّص الاشتراك السنوي المحوّل فترة الاسترجاع المعتادة، وهذا يحمي الشركاء والبرنامج معاً. لوحتك دايماً تبيّن لك الأرباح المعلّقة والمؤكّدة بوضوح.',
    es: 'Los pagos se realizan mensualmente una vez que tu saldo alcanza el umbral mínimo que se muestra en tu panel. La comisión se confirma después de que la suscripción anual recomendada complete su periodo estándar de reembolso, lo que protege tanto a los socios como al programa. Tu panel siempre muestra con claridad las ganancias pendientes y confirmadas.',
  },
  'aff_comp.public.faq.q4.a': {
    en: 'Referrals are tracked with a 90-day cookie that starts from the first click on your link. If someone clicks today and subscribes any time within those 90 days, the referral is still credited to you, giving people time to consider before committing to an annual plan.',
    ar: 'الإحالات تتتبّع بكوكي مدّته 90 يوم يبدأ من أول نقرة على رابطك. لو نقر أحد اليوم واشترك في أي وقت خلال هذي الـ90 يوم، الإحالة تنحسب لك، وهذا يعطي الناس وقت يفكّرون قبل ما يلتزمون بخطة سنوية.',
    es: 'Los referidos se rastrean con una cookie de 90 días que comienza desde el primer clic en tu enlace. Si alguien hace clic hoy y se suscribe en cualquier momento dentro de esos 90 días, el referido se te sigue acreditando, lo que da tiempo a la gente para pensárselo antes de comprometerse con un plan anual.',
  },
  'aff_comp.public.faq.q5.a': {
    en: 'Commission is tiered by referral volume, so the more active subscriptions you refer, the higher your rate becomes on each one. Everyone starts earning from their very first signup, and your current tier and rate are always visible in your partner dashboard.',
    ar: 'العمولة مدرّجة حسب عدد الإحالات، فكل ما حوّلت اشتراكات فعّالة أكثر، ارتفعت نسبتك عن كل واحد. الكل يبدأ يكسب من أول تسجيل له، ومستواك ونسبتك الحالية دايماً ظاهرة في لوحة الشركاء حقّتك.',
    es: 'La comisión se escala según el volumen de referidos, así que cuantas más suscripciones activas recomiendes, mayor será tu tasa por cada una. Todo el mundo empieza a ganar desde su primer registro, y tu nivel y tasa actuales siempre están visibles en tu panel de socio.',
  },
  'aff_comp.public.faq.q6.a': {
    en: 'Your dashboard shows clicks on your link, sign-ups, completed annual subscriptions, pending and confirmed commission, and your current tier, all updated in real time. This gives you a clear, transparent view of how your referrals are performing at any moment.',
    ar: 'لوحتك تبيّن النقرات على رابطك والتسجيلات والاشتراكات السنوية المكتملة والعمولة المعلّقة والمؤكّدة ومستواك الحالي، وكلها تتحدّث في الوقت الحقيقي. هذا يعطيك صورة واضحة وشفّافة عن أداء إحالاتك في أي لحظة.',
    es: 'Tu panel muestra los clics en tu enlace, los registros, las suscripciones anuales completadas, la comisión pendiente y confirmada, y tu nivel actual, todo actualizado en tiempo real. Esto te ofrece una visión clara y transparente del rendimiento de tus referidos en cualquier momento.',
  },
  'aff_comp.public.faq.q7.a': {
    en: 'Once your confirmed balance reaches the minimum payout threshold, earnings are paid out monthly using the payment details you set in your dashboard. You can track exactly when commission moves from pending to confirmed, so there are no surprises about what you will be paid and when.',
    ar: 'أول ما يوصل رصيدك المؤكّد للحد الأدنى للدفع، تنصرف أرباحك شهرياً باستخدام بيانات الدفع اللي تضبطها في لوحتك. تقدر تتابع بالضبط متى تنتقل العمولة من معلّقة لمؤكّدة، فما في مفاجآت بخصوص وش بتندفع لك ومتى.',
    es: 'Una vez que tu saldo confirmado alcanza el umbral mínimo de pago, las ganancias se abonan mensualmente con los datos de pago que configures en tu panel. Puedes seguir con exactitud cuándo pasa la comisión de pendiente a confirmada, así que no hay sorpresas sobre cuánto cobrarás y cuándo.',
  },
  'aff_comp.public.faq.q8.a': {
    en: 'Every partner has access to support by email, plus marketing assets and guidance to help you promote effectively. As your referral volume grows you unlock priority support and, at the top tier, a dedicated partner manager to help you get the most from the programme.',
    ar: 'كل شريك عنده دعم عبر الإيميل، بالإضافة لمواد تسويقية وإرشادات تساعدك تروّج بفعالية. كل ما زاد عدد إحالاتك، تفتح دعم بأولوية، وفي أعلى مستوى، مدير شركاء مخصّص يساعدك تستفيد من البرنامج لأقصى حد.',
    es: 'Todo socio tiene acceso a soporte por correo electrónico, además de recursos de marketing y orientación para ayudarte a promocionar de forma eficaz. A medida que crece tu volumen de referidos, desbloqueas soporte prioritario y, en el nivel superior, un gestor de socios dedicado que te ayuda a sacar el máximo partido del programa.',
  },

  // ─── /affiliates metadata (affiliates.*) ─────────────────────────
  'affiliates.breadcrumb.home': { en: 'Home', ar: 'الرئيسية', es: 'Inicio' },
  'affiliates.breadcrumb.self': { en: 'Affiliates', ar: 'الشركاء', es: 'Afiliados' },
  // NOTE: this value is fed through the root metadata title.template
  // ('%s - The English Hub'), so it must NOT contain the brand itself
  // or it double-brands. (Caught by site_health_monitor 2026-05-16.)
  'affiliates.public.meta.title': {
    en: 'Affiliate Programme - Earn Recurring Commission for Partners',
    ar: 'برنامج الشركاء - اكسب عمولة متكرّرة للشركاء',
    es: 'Programa de afiliados - Gana comisión recurrente para socios',
  },
  'affiliates.public.meta.description': {
    en: 'Join The English Hub partner programme and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English learning. 90-day tracking, monthly payouts, no minimum traffic.',
    ar: 'انضم لبرنامج الشركاء في The English Hub واكسب عمولة متكرّرة عن كل اشتراك سنوي تحوّله لنا. تعلّم إنجليزي مستقل ومتماشي مع بوردات الامتحانات لمستويات GCSE و IGCSE و KS3 و EAL. تتبّع 90 يوم، دفعات شهرية، بدون حد أدنى للزيارات.',
    es: 'Únete al programa de socios de The English Hub y gana comisión recurrente por cada suscripción anual que recomiendes. Aprendizaje de inglés independiente y alineado con las juntas examinadoras para GCSE, IGCSE, KS3 y EAL. Seguimiento de 90 días, pagos mensuales, sin tráfico mínimo.',
  },
  'affiliates.public.meta.og_image_alt': {
    en: 'The English Hub affiliate programme',
    ar: 'برنامج الشركاء في The English Hub',
    es: 'Programa de afiliados de The English Hub',
  },
}
