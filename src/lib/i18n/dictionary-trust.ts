/**
 * Genuine Khaleeji Arabic - trust namespaces (Bucket A wave 1)
 *
 * Covers the `press`, `about`, `accessibility` and `footer` keys for the
 * wired public pages:
 *   /press
 *   /about/verified-content
 *   /accessibility
 *   layout footer (two trust links)
 *
 * Previously these keys only existed in EN-mirror placeholder supplements
 * (ar === en), so an Arabic visitor saw English on these pages.
 *
 * EN values are copied verbatim (byte-identical) from the real human
 * sources:
 *   - press / about / footer  → dictionary-press-verified.ts
 *   - accessibility           → dictionary-report-fix-may16b.ts
 * NOT from dictionary-audit-fix.ts (which holds auto-junk like "Title").
 *
 * AR is hand-authored natural Gulf (Khaleeji) register - conversational,
 * not MSA, not machine-literal - matching the voice of
 * src/lib/eal/curriculum.ts. Brand and proper nouns (The English Hub,
 * Companies House, WCAG, ICO numbers, exam boards, EASS, etc.) are kept
 * as-is.
 *
 * This file is wired into the lookup chain centrally by dictionary.ts
 * (the orchestrator). Do not edit dictionary.ts here.
 *
 * Written 2026-05-16.
 */

export const TRUST_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ───────────────────────────────────────────────────────────────────
  // /press - Hero
  // ───────────────────────────────────────────────────────────────────
  'press.hero.eyebrow': { en: 'Press & Media', ar: 'الصحافة والإعلام', es: 'Prensa y medios' },
  'press.hero.title': {
    en: 'The English Hub is building a smarter way to support English learning.',
    ar: 'The English Hub يبني طريقة أذكى لدعم تعلّم الإنجليزي.',
    es: 'The English Hub está construyendo una forma más inteligente de apoyar el aprendizaje del inglés.',
  },
  'press.hero.lede': {
    en: 'The English Hub is an independent English learning platform supporting GCSE, IGCSE, KS3 and EAL learners through structured resources, AI-assisted feedback, exam-style practice, teacher tools and school-level analytics.',
    ar: 'The English Hub منصّة مستقلة لتعلّم الإنجليزي تدعم طلاب GCSE وIGCSE وKS3 وEAL عن طريق مصادر منظّمة، وملاحظات مدعومة بالذكاء الاصطناعي، وتمارين على نمط الامتحان، وأدوات للمعلّمين، وتحليلات على مستوى المدرسة.',
    es: 'The English Hub es una plataforma independiente de aprendizaje del inglés que apoya a estudiantes de GCSE, IGCSE, KS3 y EAL mediante recursos estructurados, retroalimentación asistida por IA, práctica con formato de examen, herramientas para profesores y análisis a nivel de centro.',
  },

  // 60-second overview
  'press.overview.eyebrow': { en: 'About', ar: 'نبذة', es: 'Acerca de' },
  'press.overview.title': {
    en: 'A 60-second overview',
    ar: 'نظرة سريعة في ٦٠ ثانية',
    es: 'Una visión general en 60 segundos',
  },
  'press.overview.p1': {
    en: 'The English Hub is an independent English learning platform designed for students, teachers and schools. The platform supports GCSE, IGCSE, KS3 and EAL English through structured learning resources, AI-assisted feedback, mock exams, reading and writing practice, teacher tools and school-level reporting.',
    ar: 'The English Hub منصّة مستقلة لتعلّم الإنجليزي مصمّمة للطلاب والمعلّمين والمدارس. المنصّة تدعم إنجليزي GCSE وIGCSE وKS3 وEAL عن طريق مصادر تعلّم منظّمة، وملاحظات مدعومة بالذكاء الاصطناعي، وامتحانات تجريبية، وتمارين قراءة وكتابة، وأدوات للمعلّمين، وتقارير على مستوى المدرسة.',
    es: 'The English Hub es una plataforma independiente de aprendizaje del inglés diseñada para estudiantes, profesores y centros. La plataforma da soporte al inglés de GCSE, IGCSE, KS3 y EAL mediante recursos de aprendizaje estructurados, retroalimentación asistida por IA, exámenes de prueba, práctica de lectura y escritura, herramientas para profesores e informes a nivel de centro.',
  },
  'press.overview.p2': {
    en: 'The platform is exam-board aligned, not exam-board endorsed, and supports AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE specifications. AI is used to assist drafting, formative feedback and resource generation; humans review what reaches students.',
    ar: 'المنصّة متوافقة مع مجالس الامتحانات، مو معتمدة منهم، وتدعم مواصفات AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge IGCSE. الذكاء الاصطناعي يساعد في الصياغة والملاحظات التكوينية وإنشاء المصادر؛ والبشر يراجعون اللي يوصل للطلاب.',
    es: 'La plataforma está alineada con las juntas examinadoras, pero no avalada por ellas, y da soporte a las especificaciones de AQA, Pearson Edexcel, OCR, WJEC Eduqas y Cambridge IGCSE. La IA se utiliza para asistir en la redacción, la retroalimentación formativa y la generación de recursos; los humanos revisan lo que llega a los estudiantes.',
  },

  // Company facts
  'press.facts.eyebrow': { en: 'Company facts', ar: 'معلومات الشركة', es: 'Datos de la empresa' },
  'press.facts.title': {
    en: 'Quick reference for journalists',
    ar: 'مرجع سريع للصحفيين',
    es: 'Referencia rápida para periodistas',
  },

  'press.facts.entity.label': { en: 'Legal entity', ar: 'الكيان القانوني', es: 'Entidad jurídica' },
  'press.facts.entity.name': {
    en: 'Upskill Energy Limited',
    ar: 'Upskill Energy Limited',
    es: 'Upskill Energy Limited',
  },
  'press.facts.entity.company_no': {
    en: 'Company No. 16511479',
    ar: 'Company No. 16511479',
    es: 'Company No. 16511479',
  },
  'press.facts.entity.jurisdiction': {
    en: 'Registered in England & Wales',
    ar: 'مسجّلة في إنجلترا وويلز',
    es: 'Registrada en Inglaterra y Gales',
  },

  'press.facts.office.label': {
    en: 'Registered office',
    ar: 'المكتب المسجّل',
    es: 'Domicilio social',
  },
  'press.facts.office.short': {
    en: 'Available via Companies House',
    ar: 'متوفّر عن طريق Companies House',
    es: 'Disponible a través de Companies House',
  },
  'press.facts.office.body_pre': {
    en: 'Journalists requiring an attributable address for filings should email',
    ar: 'الصحفيون اللي يحتاجون عنوان موثّق للملفّات الرسمية يراسلوننا على',
    es: 'Los periodistas que necesiten una dirección atribuible para presentaciones oficiales deben escribir a',
  },
  'press.facts.office.body_post': {
    en: ' and we will respond within one working day.',
    ar: ' ونرد عليهم خلال يوم عمل واحد.',
    es: ' y responderemos en el plazo de un día laborable.',
  },

  'press.facts.ico.label': {
    en: 'ICO data protection',
    ar: 'حماية البيانات لدى ICO',
    es: 'Protección de datos ICO',
  },
  'press.facts.ico.registration': {
    en: 'Registration ZC016690',
    ar: 'Registration ZC016690',
    es: 'Registration ZC016690',
  },
  'press.facts.ico.controller': {
    en: 'Upskill Energy Limited acts as data controller for The English Hub.',
    ar: 'Upskill Energy Limited هي المتحكّم في البيانات لـ The English Hub.',
    es: 'Upskill Energy Limited actúa como responsable del tratamiento de datos de The English Hub.',
  },

  'press.facts.founded.label': { en: 'Founded', ar: 'تأسّست', es: 'Fundada' },
  'press.facts.founded.year': {
    en: '2024 - operating from 2026',
    ar: '٢٠٢٤ - وتشتغل من ٢٠٢٦',
    es: '2024 - en funcionamiento desde 2026',
  },
  'press.facts.founded.bootstrapped': {
    en: 'Bootstrapped. No outside investment to date.',
    ar: 'ممولة ذاتياً. ما فيه استثمار خارجي لين الحين.',
    es: 'Autofinanciada. Sin inversión externa hasta la fecha.',
  },

  // Key stats
  'press.stats.eyebrow': { en: 'Key facts', ar: 'حقائق أساسية', es: 'Datos clave' },
  'press.stats.title': { en: 'At a glance', ar: 'لمحة سريعة', es: 'De un vistazo' },
  'press.stats.lede': {
    en: 'Usage figures will be published once they are verifiable. We do not display fabricated numbers.',
    ar: 'أرقام الاستخدام راح تننشر أول ما تصير قابلة للتحقّق. ما نعرض أرقام مفبركة.',
    es: 'Las cifras de uso se publicarán una vez que sean verificables. No mostramos números inventados.',
  },
  'press.stats.active_pupils': {
    en: 'Active students',
    ar: 'طلاب نشطون',
    es: 'Estudiantes activos',
  },
  'press.stats.essays_marked': {
    en: 'Essays given AI-assisted feedback',
    ar: 'مقالات أُعطيت ملاحظات مدعومة بالذكاء الاصطناعي',
    es: 'Redacciones con retroalimentación asistida por IA',
  },
  'press.stats.teachers_onboarded': {
    en: 'Teachers onboarded',
    ar: 'معلّمون انضمّوا',
    es: 'Profesores incorporados',
  },
  'press.stats.schools_in_programme': {
    en: 'Schools in the Founding programme',
    ar: 'مدارس في برنامج التأسيس',
    es: 'Centros en el programa fundacional',
  },

  // Product
  'press.product.eyebrow': { en: 'Product', ar: 'المنتج', es: 'Producto' },
  'press.product.title': {
    en: 'Who it is for and what it does',
    ar: 'لمن هو وش يسوّي',
    es: 'Para quién es y qué hace',
  },
  'press.product.audience.h3': { en: 'Audience', ar: 'الجمهور', es: 'Público' },
  'press.product.audience.pupils': {
    en: 'Students aged 11 to 18 studying KS3, GCSE, IGCSE or EAL English',
    ar: 'طلاب من ١١ لـ ١٨ سنة يدرسون إنجليزي KS3 أو GCSE أو IGCSE أو EAL',
    es: 'Estudiantes de 11 a 18 años que cursan inglés de KS3, GCSE, IGCSE o EAL',
  },
  'press.product.audience.parents': {
    en: 'Parents supporting their children at home',
    ar: 'أهالي يساعدون عيالهم في البيت',
    es: 'Padres que apoyan a sus hijos en casa',
  },
  'press.product.audience.teachers': {
    en: 'English teachers and tutors',
    ar: 'معلّمو ومدرّسو الإنجليزي',
    es: 'Profesores y tutores de inglés',
  },
  'press.product.audience.heads': {
    en: 'Heads of English, SLT and school leaders in UK and international British curriculum schools',
    ar: 'رؤساء أقسام الإنجليزي، والإدارة العليا، وقادة المدارس في بريطانيا والمدارس الدولية اللي تتبع المنهج البريطاني',
    es: 'Jefes de departamento de inglés, equipos directivos y líderes escolares en centros del Reino Unido y de currículo británico internacional',
  },

  'press.product.pricing.h3': { en: 'Pricing', ar: 'الأسعار', es: 'Precios' },
  'press.product.pricing.pupil_strong': { en: 'Students', ar: 'الطلاب', es: 'Estudiantes' },
  'press.product.pricing.pupil_body': {
    en: 'Early Access £3.99/month or £29.99/year (Standard £7.99/month or £69.99/year from August 2026). A 7-day free trial applies to all paid plans.',
    ar: 'الوصول المبكّر £3.99/شهر أو £29.99/سنة (العادي £7.99/شهر أو £69.99/سنة من أغسطس ٢٠٢٦). فيه تجربة مجانية ٧ أيام على كل الباقات المدفوعة.',
    es: 'Acceso anticipado £3.99/mes o £29.99/año (Estándar £7.99/mes o £69.99/año desde agosto de 2026). Se aplica una prueba gratuita de 7 días a todos los planes de pago.',
  },
  'press.product.pricing.teacher_strong': { en: 'Teachers', ar: 'المعلّمون', es: 'Profesores' },
  'press.product.pricing.teacher_body': {
    en: 'Early Access £6.99/month or £67.99/year (Standard £11.99/month or £99/year from August 2026). 3 free uses per premium tool with no card required.',
    ar: 'الوصول المبكّر £6.99/شهر أو £67.99/سنة (العادي £11.99/شهر أو £99/سنة من أغسطس ٢٠٢٦). ٣ استخدامات مجانية لكل أداة مميّزة بدون بطاقة.',
    es: 'Acceso anticipado £6.99/mes o £67.99/año (Estándar £11.99/mes o £99/año desde agosto de 2026). 3 usos gratuitos por herramienta premium sin necesidad de tarjeta.',
  },
  'press.product.pricing.founding_strong': { en: 'Schools', ar: 'المدارس', es: 'Centros' },
  'press.product.pricing.founding_body': {
    en: 'Founding School Pilot from £4,000/year for the first 10 schools (recurring annual licence, locked for 2-3 years). Standard School Licence from £8,000/year thereafter. MAT and international group pricing on a custom annual licence.',
    ar: 'تجربة المدارس المؤسِّسة تبدأ من £4,000/سنة لأول ١٠ مدارس (ترخيص سنوي متجدّد، مثبّت لمدّة ٢-٣ سنوات). الترخيص المدرسي العادي يبدأ من £8,000/سنة بعد كذا. أسعار مخصّصة للمجموعات (MAT) والمجموعات الدولية على ترخيص سنوي مخصّص.',
    es: 'Piloto de centro fundacional desde £4,000/año para los primeros 10 centros (licencia anual recurrente, bloqueada durante 2-3 años). Licencia de centro estándar desde £8,000/año a partir de entonces. Precios para MAT y grupos internacionales mediante licencia anual personalizada.',
  },
  'press.product.pricing.gbp_note': {
    en: 'All prices are in GBP and exclude VAT where applicable.',
    ar: 'كل الأسعار بالجنيه الإسترليني ولا تشمل ضريبة القيمة المضافة إذا انطبقت.',
    es: 'Todos los precios están en GBP y excluyen el IVA cuando corresponda.',
  },

  'press.product.distinct.h3': {
    en: 'What is distinctive',
    ar: 'وش اللي يميّزنا',
    es: 'Lo que nos distingue',
  },
  'press.product.distinct.boards': {
    en: 'Specification-aligned content for AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE - students see the materials matched to their actual board, not generic English content.',
    ar: 'محتوى متوافق مع مواصفات AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge IGCSE - الطالب يشوف المواد المطابقة لمجلسه الفعلي، مو محتوى إنجليزي عام.',
    es: 'Contenido alineado con las especificaciones de AQA, Pearson Edexcel, OCR, WJEC Eduqas y Cambridge IGCSE: los estudiantes ven los materiales adaptados a su junta examinadora real, no contenido genérico de inglés.',
  },
  'press.product.distinct.plain_english': {
    en: 'Plain English explanations of assessment objectives, mark-scheme language and exam structure for students who find existing revision sites dense or jargon-heavy.',
    ar: 'شرح بإنجليزي بسيط لأهداف التقييم، ولغة مخطّط الدرجات، وبنية الامتحان، للطلاب اللي يلقون مواقع المراجعة الحالية معقّدة أو فيها مصطلحات وايد.',
    es: 'Explicaciones en lenguaje sencillo de los objetivos de evaluación, el lenguaje de los baremos y la estructura del examen, para estudiantes que encuentran densas o llenas de jerga las webs de repaso existentes.',
  },
  'press.product.distinct.board_selection': {
    en: "A persistent board picker - once a student or school selects their exam board, every page on the platform re-skins to that board's specification.",
    ar: 'منتقي مجلس ثابت - أول ما يختار الطالب أو المدرسة مجلس الامتحان، كل صفحة في المنصّة تتبدّل لتتطابق مع مواصفات ذيك المجلس.',
    es: 'Un selector de junta persistente: una vez que un estudiante o centro elige su junta examinadora, todas las páginas de la plataforma se adaptan a la especificación de esa junta.',
  },
  'press.product.distinct.childrens_code': {
    en: 'Designed with the UK Age-Appropriate Design Code in mind - no third-party advertising, no tracking pixels, role-based access for school accounts and a published data-processing policy.',
    ar: 'مصمّم مع مراعاة مدوّنة التصميم المناسب للأعمار في بريطانيا - بدون إعلانات طرف ثالث، بدون بكسلات تتبّع، صلاحيات حسب الدور لحسابات المدارس، وسياسة معالجة بيانات منشورة.',
    es: 'Diseñado teniendo en cuenta el Age-Appropriate Design Code del Reino Unido: sin publicidad de terceros, sin píxeles de seguimiento, acceso basado en roles para las cuentas de centro y una política de tratamiento de datos publicada.',
  },

  // Press contact
  'press.contact.eyebrow': { en: 'Press contact', ar: 'التواصل الصحفي', es: 'Contacto de prensa' },
  'press.contact.title': {
    en: 'Media enquiries',
    ar: 'استفسارات الإعلام',
    es: 'Consultas de medios',
  },
  'press.contact.body_pre': {
    en: 'For interviews, comment, fact-checks or written briefings, please email',
    ar: 'للمقابلات أو التعليقات أو التحقّق من المعلومات أو الملخّصات المكتوبة، راسلونا على',
    es: 'Para entrevistas, comentarios, verificación de datos o informes escritos, escriba a',
  },
  'press.contact.body_post': {
    en: '. We aim to respond within one working day.',
    ar: '. نحاول نرد خلال يوم عمل واحد.',
    es: '. Procuramos responder en el plazo de un día laborable.',
  },
  'press.contact.cta.email': {
    en: 'Email the press desk',
    ar: 'راسل مكتب الصحافة',
    es: 'Escribir al departamento de prensa',
  },
  'press.contact.cta.general': {
    en: 'Other enquiries',
    ar: 'استفسارات أخرى',
    es: 'Otras consultas',
  },

  // Press kit
  'press.kit.eyebrow': { en: 'Press kit', ar: 'الحقيبة الصحفية', es: 'Kit de prensa' },
  'press.kit.title': {
    en: 'Brand assets and downloads',
    ar: 'أصول العلامة والتنزيلات',
    es: 'Recursos de marca y descargas',
  },
  'press.kit.body': {
    en: 'Logo files, screenshots and a longer boilerplate paragraph are available on request. We are also happy to provide bespoke captioned screenshots and properly-labelled example dashboard views for a specific story angle.',
    ar: 'ملفّات الشعار ولقطات الشاشة وفقرة تعريفية أطول متوفّرة عند الطلب. ويسعدنا كذلك نوفّر لقطات شاشة بتعليقات مخصّصة وعرضات لوحات تحكّم نموذجية معنونة صح لزاوية قصّة معيّنة.',
    es: 'Los archivos del logotipo, las capturas de pantalla y un párrafo de presentación más extenso están disponibles a petición. También con gusto proporcionamos capturas de pantalla con pies de foto personalizados y vistas de panel de ejemplo correctamente etiquetadas para un enfoque concreto de la noticia.',
  },
  'press.kit.archive_title': {
    en: 'Brand and screenshot pack',
    ar: 'حزمة العلامة ولقطات الشاشة',
    es: 'Paquete de marca y capturas de pantalla',
  },
  'press.kit.archive_body_pre': {
    en: 'Email',
    ar: 'راسلونا على',
    es: 'Escriba a',
  },
  'press.kit.archive_body_mid': {
    en: 'and we will send the latest brand assets, logomark variants and labelled platform screenshots',
    ar: 'ونرسل لكم آخر أصول العلامة، ونسخ الشعار، ولقطات شاشة معنونة للمنصّة',
    es: 'y le enviaremos los recursos de marca más recientes, las variantes del logotipo y capturas de pantalla etiquetadas de la plataforma',
  },
  'press.kit.archive_body_post': {
    en: ' within one working day.',
    ar: ' خلال يوم عمل واحد.',
    es: ' en el plazo de un día laborable.',
  },
  'press.kit.download_disabled': {
    en: 'Available on request',
    ar: 'متوفّر عند الطلب',
    es: 'Disponible a petición',
  },
  'press.kit.download_title': {
    en: 'Brand assets pack - coming soon. Email the press desk for the current files.',
    ar: 'حزمة أصول العلامة - قريباً. راسل مكتب الصحافة على الملفّات الحالية.',
    es: 'Paquete de recursos de marca: próximamente. Escriba al departamento de prensa para obtener los archivos actuales.',
  },

  // Recent coverage
  'press.coverage.eyebrow': {
    en: 'Recent coverage',
    ar: 'التغطية الأخيرة',
    es: 'Cobertura reciente',
  },
  'press.coverage.title': {
    en: 'Where we have been mentioned',
    ar: 'وين انذكرنا',
    es: 'Dónde nos han mencionado',
  },
  'press.coverage.none': {
    en: 'No coverage logged yet. We are at launch and will publish accredited mentions here as and when they appear. If you have written about The English Hub and would like to be added, please email the press desk.',
    ar: 'ما فيه تغطية مسجّلة لين الحين. إحنا في مرحلة الإطلاق وراح ننشر هنا الإشارات الموثّقة أول ما تطلع. إذا كتبت عن The English Hub وتبي نضيفك، راسل مكتب الصحافة.',
    es: 'Aún no hay cobertura registrada. Estamos en fase de lanzamiento y publicaremos aquí las menciones acreditadas a medida que aparezcan. Si ha escrito sobre The English Hub y desea que le añadamos, escriba al departamento de prensa.',
  },

  // Awards
  'press.awards.eyebrow': {
    en: 'Awards & reviews',
    ar: 'الجوائز والتقييمات',
    es: 'Premios y reseñas',
  },
  'press.awards.title': { en: 'Recognition', ar: 'التقدير', es: 'Reconocimiento' },
  'press.awards.none': {
    en: 'No awards to claim. We are a new platform and will not invent or imply recognition we have not earned. Our Trustpilot page is the closest thing to public review feedback today.',
    ar: 'ما عندنا جوائز نزعمها. إحنا منصّة جديدة وما راح نخترع أو نلمّح لتقدير ما استحقّيناه. صفحتنا في Trustpilot هي أقرب شي لتقييمات عامة اليوم.',
    es: 'No tenemos premios que reclamar. Somos una plataforma nueva y no inventaremos ni insinuaremos un reconocimiento que no hemos ganado. Nuestra página de Trustpilot es lo más parecido a reseñas públicas que tenemos hoy.',
  },
  'press.awards.trustpilot': {
    en: 'See us on Trustpilot',
    ar: 'شوفنا على Trustpilot',
    es: 'Míranos en Trustpilot',
  },

  // Footer
  'press.footer.entity': {
    en: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
    ar: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
    es: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
  },
  'press.footer.brand_line': {
    en: 'The English Hub is a trading brand of Upskill Energy Limited, registered in England & Wales.',
    ar: 'The English Hub علامة تجارية تابعة لـ Upskill Energy Limited، مسجّلة في إنجلترا وويلز.',
    es: 'The English Hub es una marca comercial de Upskill Energy Limited, registrada en Inglaterra y Gales.',
  },

  // ───────────────────────────────────────────────────────────────────
  // /about/verified-content
  // ───────────────────────────────────────────────────────────────────
  'about.verified.badge': { en: 'Verified content', ar: 'محتوى موثّق', es: 'Contenido verificado' },
  'about.verified.h1': {
    en: 'Verified English content. AI-assisted learning. Human-controlled quality.',
    ar: 'محتوى إنجليزي موثّق. تعلّم مدعوم بالذكاء الاصطناعي. جودة يتحكّم فيها البشر.',
    es: 'Contenido de inglés verificado. Aprendizaje asistido por IA. Calidad controlada por humanos.',
  },
  'about.verified.intro': {
    en: 'The English Hub uses AI to support practice, feedback and revision, but English content must still be accurate, traceable and trustworthy. Our content verification process is designed to reduce hallucinated analysis, incorrect quotations, unsupported claims and unclear exam guidance.',
    ar: 'The English Hub يستخدم الذكاء الاصطناعي لدعم التمارين والملاحظات والمراجعة، بس المحتوى الإنجليزي لازم يظل دقيق وقابل للتتبّع وجدير بالثقة. عملية توثيق المحتوى عندنا مصمّمة تقلّل التحليل المهلوس، والاقتباسات الغلط، والادّعاءات اللي ما لها سند، وإرشادات الامتحان غير الواضحة.',
    es: 'The English Hub utiliza la IA para apoyar la práctica, la retroalimentación y el repaso, pero el contenido de inglés debe seguir siendo preciso, rastreable y fiable. Nuestro proceso de verificación de contenido está diseñado para reducir el análisis alucinado, las citas incorrectas, las afirmaciones sin fundamento y las orientaciones de examen poco claras.',
  },

  // Numbers section
  'about.verified.numbers.h2': {
    en: 'Where verification has been applied',
    ar: 'وين انطبّق التوثيق',
    es: 'Dónde se ha aplicado la verificación',
  },
  'about.verified.numbers.texts_label': {
    en: 'Set texts with verified analysis',
    ar: 'نصوص مقرّرة بتحليل موثّق',
    es: 'Textos fijados con análisis verificado',
  },
  'about.verified.numbers.quotes_label': {
    en: 'Curated quotation packs',
    ar: 'حزم اقتباسات منتقاة',
    es: 'Paquetes de citas seleccionadas',
  },
  'about.verified.numbers.errors_label': {
    en: 'Reader-reported errors corrected',
    ar: 'أخطاء بلّغ عنها القرّاء واتصحّحت',
    es: 'Errores reportados por lectores corregidos',
  },
  'about.verified.numbers.public_domain_label': {
    en: 'Public-domain text sources',
    ar: 'مصادر نصوص في الملك العام',
    es: 'Fuentes de texto de dominio público',
  },
  'about.verified.numbers.restricted_label': {
    en: 'Copyright-handled extracts',
    ar: 'مقتطفات روعيت فيها حقوق النشر',
    es: 'Extractos con derechos gestionados',
  },
  'about.verified.numbers.publishers_label': {
    en: 'Publishers / sources referenced',
    ar: 'ناشرون / مصادر مرجعية',
    es: 'Editoriales / fuentes consultadas',
  },

  // Sources
  'about.verified.sources.h2': {
    en: 'Sources we cross-check against',
    ar: 'المصادر اللي نتحقّق منها',
    es: 'Fuentes con las que cotejamos',
  },
  'about.verified.sources.lede': {
    en: 'Where a reliable source exists, we use it. Where it does not, we say so. We never invent a citation to make analysis look better-supported than it is.',
    ar: 'إذا فيه مصدر موثوق نستخدمه. وإذا ما فيه، نقولها بصراحة. ما نخترع أبد مرجع عشان نخلّي التحليل يبيّن مدعوم أكثر من الواقع.',
    es: 'Donde existe una fuente fiable, la usamos. Donde no existe, lo decimos. Nunca inventamos una cita para que el análisis parezca mejor fundamentado de lo que está.',
  },
  'about.verified.sources.gutenberg_strong': {
    en: 'Project Gutenberg',
    ar: 'Project Gutenberg',
    es: 'Project Gutenberg',
  },
  'about.verified.sources.gutenberg_body': {
    en: 'Public-domain editions of pre-1928 texts including Shakespeare, the major Victorian novelists, Romantic and Victorian poetry, and the prescribed nineteenth-century novels on most exam-board specifications. Quotations are verified against the Gutenberg text rather than memory.',
    ar: 'نسخ في الملك العام لنصوص قبل ١٩٢٨ تشمل شكسبير، وكبار روائيي العصر الفيكتوري، والشعر الرومانسي والفيكتوري، وروايات القرن التاسع عشر المقرّرة في معظم مواصفات مجالس الامتحانات. الاقتباسات تتحقّق مقابل نص Gutenberg مو من الذاكرة.',
    es: 'Ediciones de dominio público de textos anteriores a 1928, incluidos Shakespeare, los grandes novelistas victorianos, la poesía romántica y victoriana, y las novelas del siglo XIX prescritas en la mayoría de las especificaciones de las juntas examinadoras. Las citas se verifican con el texto de Gutenberg, no de memoria.',
  },
  'about.verified.sources.folger_strong': {
    en: 'Folger Shakespeare Library',
    ar: 'Folger Shakespeare Library',
    es: 'Folger Shakespeare Library',
  },
  'about.verified.sources.folger_body': {
    en: 'For Shakespeare texts we cross-reference the Folger digital editions because of their careful editorial apparatus. Where act/scene/line references differ between editions, we explain the discrepancy rather than pretend it does not exist.',
    ar: 'بالنسبة لنصوص شكسبير نراجع نسخ Folger الرقمية بسبب جهازها التحريري الدقيق. وإذا اختلفت إشارات الفصل/المشهد/السطر بين النسخ، نوضّح الفرق بدل ما نتظاهر إنه ما موجود.',
    es: 'Para los textos de Shakespeare cotejamos las ediciones digitales de Folger por su cuidadoso aparato editorial. Cuando las referencias de acto/escena/verso difieren entre ediciones, explicamos la discrepancia en lugar de fingir que no existe.',
  },
  'about.verified.sources.bbc_strong': {
    en: 'BBC and broadsheet archives',
    ar: 'أرشيف BBC والصحف الكبرى',
    es: 'Archivos de la BBC y de la prensa de calidad',
  },
  'about.verified.sources.bbc_body': {
    en: 'For context - biographical, historical, social - we cross-check against named published sources. We prefer the BBC, the major broadsheets and academic publishers over open-web summaries.',
    ar: 'للسياق - السيري والتاريخي والاجتماعي - نتحقّق مقابل مصادر منشورة ومسمّاة. نفضّل BBC والصحف الكبرى والناشرين الأكاديميين على ملخّصات الويب المفتوح.',
    es: 'Para el contexto -biográfico, histórico, social- cotejamos con fuentes publicadas y citadas. Preferimos la BBC, los grandes periódicos de calidad y las editoriales académicas frente a los resúmenes de la web abierta.',
  },
  'about.verified.sources.board_strong': {
    en: 'Public exam-board specifications',
    ar: 'مواصفات مجالس الامتحانات العامة',
    es: 'Especificaciones públicas de las juntas examinadoras',
  },
  'about.verified.sources.board_body': {
    en: 'Assessment objective wording, paper structure and prescribed-text lists are checked against the public specification PDFs published by AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge International. Where a specification updates, we update.',
    ar: 'صياغة أهداف التقييم، وبنية ورقة الامتحان، وقوائم النصوص المقرّرة، تتفحّص مقابل ملفّات المواصفات العامة (PDF) اللي تنشرها AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge International. وإذا تحدّثت المواصفة، نحدّث.',
    es: 'La redacción de los objetivos de evaluación, la estructura de las pruebas y las listas de textos prescritos se comprueban con los PDF de las especificaciones públicas que publican AQA, Pearson Edexcel, OCR, WJEC Eduqas y Cambridge International. Cuando una especificación se actualiza, nosotros actualizamos.',
  },

  // Confidence levels
  'about.verified.confidence.h2': {
    en: 'Confidence levels',
    ar: 'مستويات الثقة',
    es: 'Niveles de confianza',
  },
  'about.verified.confidence.lede': {
    en: 'Not all content carries the same weight of evidence. We use four internal confidence labels so a reader can tell what stands behind a specific page.',
    ar: 'مو كل المحتوى يحمل نفس وزن الدليل. نستخدم أربع تسميات داخلية للثقة عشان القارئ يقدر يعرف وش وراء صفحة معيّنة.',
    es: 'No todo el contenido tiene el mismo peso de evidencia. Usamos cuatro etiquetas internas de confianza para que un lector pueda saber qué respalda una página concreta.',
  },
  'about.verified.confidence.highest_label': {
    en: 'Highest - quote checked + human reviewed',
    ar: 'الأعلى - اقتباس مفحوص + مراجَع بشرياً',
    es: 'Máxima - cita comprobada + revisada por humanos',
  },
  'about.verified.confidence.highest_body': {
    en: 'Quotations cross-referenced against a public-domain source. Analysis read end-to-end by a human editor. Used for set-text pages and exemplar essays.',
    ar: 'اقتباسات مراجعة مقابل مصدر في الملك العام. والتحليل مقروء من أوّله لآخره من محرّر بشري. يُستخدم لصفحات النصوص المقرّرة والمقالات النموذجية.',
    es: 'Citas cotejadas con una fuente de dominio público. Análisis leído de principio a fin por un editor humano. Se usa en las páginas de textos fijados y las redacciones ejemplares.',
  },
  'about.verified.confidence.high_label': {
    en: 'High - human reviewed',
    ar: 'عالي - مراجَع بشرياً',
    es: 'Alta - revisada por humanos',
  },
  'about.verified.confidence.high_body': {
    en: 'AI-drafted then read end-to-end by a human editor. Used for theme-level analysis, contextual notes and revision summaries.',
    ar: 'مصاغ بالذكاء الاصطناعي وبعدين مقروء من أوّله لآخره من محرّر بشري. يُستخدم للتحليل على مستوى الثيمات، والملاحظات السياقية، وملخّصات المراجعة.',
    es: 'Redactada por IA y luego leída de principio a fin por un editor humano. Se usa para el análisis a nivel de tema, las notas contextuales y los resúmenes de repaso.',
  },
  'about.verified.confidence.medium_label': {
    en: 'Medium - AI-drafted, awaiting review',
    ar: 'متوسّط - مصاغ بالذكاء الاصطناعي، بانتظار المراجعة',
    es: 'Media - redactada por IA, pendiente de revisión',
  },
  'about.verified.confidence.medium_body': {
    en: 'AI-generated content surfaced as a learning aid but not yet signed off by a human editor. We mark this clearly so students know what they are looking at.',
    ar: 'محتوى مولّد بالذكاء الاصطناعي معروض كأداة تعلّم بس لسا ما اعتمده محرّر بشري. نأشّر على هذا بوضوح عشان الطلاب يعرفون وش يشوفون.',
    es: 'Contenido generado por IA mostrado como ayuda para el aprendizaje pero aún no aprobado por un editor humano. Lo señalamos con claridad para que los estudiantes sepan qué están viendo.',
  },
  'about.verified.confidence.low_label': {
    en: 'Formative - practice feedback only',
    ar: 'تكويني - ملاحظات تمرين بس',
    es: 'Formativa - solo retroalimentación de práctica',
  },
  'about.verified.confidence.low_body': {
    en: 'AI-generated essay feedback and grade indications. Useful for practice and pattern-spotting, but not official marking. Always to be discussed with a teacher before being acted on.',
    ar: 'ملاحظات مقالات ومؤشّرات درجات مولّدة بالذكاء الاصطناعي. مفيدة للتمرين ورصد الأنماط، بس مو تصحيح رسمي. لازم تتناقش مع معلّم قبل ما تتصرّف على أساسها.',
    es: 'Retroalimentación de redacciones e indicaciones de nota generadas por IA. Útiles para la práctica y la detección de patrones, pero no son una corrección oficial. Siempre conviene comentarlas con un profesor antes de actuar en consecuencia.',
  },

  // Common errors
  'about.verified.errors.h2': {
    en: 'What we have caught and fixed',
    ar: 'وش لقيناه وصلّحناه',
    es: 'Lo que hemos detectado y corregido',
  },
  'about.verified.errors.body': {
    en: 'AI-assisted content gets two specific things wrong more than anything else: invented quotations that sound right but do not appear in the text, and confident statements about historical context that no source actually supports. We keep an internal log of corrections and bump the "Last updated" date on the affected page when a substantive change lands.',
    ar: 'المحتوى المدعوم بالذكاء الاصطناعي يغلط في شيئين أكثر من غيرهم: اقتباسات مخترعة تبيّن صح بس ما تطلع في النص، وعبارات واثقة عن السياق التاريخي ما لها أي مصدر يدعمها فعلياً. نحتفظ بسجل داخلي للتصحيحات ونحدّث تاريخ "آخر تحديث" في الصفحة المتأثّرة لما يصير تغيير جوهري.',
    es: 'El contenido asistido por IA falla en dos cosas concretas más que en ninguna otra: citas inventadas que suenan bien pero no aparecen en el texto, y afirmaciones rotundas sobre el contexto histórico que ninguna fuente respalda realmente. Mantenemos un registro interno de correcciones y actualizamos la fecha de "Última actualización" en la página afectada cuando se produce un cambio sustancial.',
  },

  // Report a content issue
  'about.verified.report.h2': {
    en: 'Spotted something that does not look right?',
    ar: 'لاحظت شي ما يبيّن صح؟',
    es: '¿Has visto algo que no parece correcto?',
  },
  'about.verified.report.body': {
    en: 'Report it and our team will review the page. Reports go to our editorial inbox, are logged within the working day, and the reporter is told the outcome once the review is complete.',
    ar: 'بلّغ عنه وفريقنا راح يراجع الصفحة. البلاغات توصل لبريد التحرير عندنا، وتنسجّل خلال يوم العمل، والمبلّغ ينعرف بالنتيجة أول ما تخلص المراجعة.',
    es: 'Repórtalo y nuestro equipo revisará la página. Los informes llegan a nuestra bandeja editorial, se registran en el mismo día laborable y se comunica el resultado a quien lo reportó una vez completada la revisión.',
  },
  'about.verified.report.cta': {
    en: 'Report a content issue',
    ar: 'بلّغ عن مشكلة في المحتوى',
    es: 'Reportar un problema de contenido',
  },

  // ───────────────────────────────────────────────────────────────────
  // Footer link labels (trust pages)
  // ───────────────────────────────────────────────────────────────────
  'footer.link.school_pilot_pack': {
    en: 'School Pilot Pack',
    ar: 'حزمة تجربة المدارس',
    es: 'Paquete piloto para centros',
  },
  'footer.link.content_verification': {
    en: 'Content Verification Methodology',
    ar: 'منهجية توثيق المحتوى',
    es: 'Metodología de verificación de contenido',
  },

  // ───────────────────────────────────────────────────────────────────
  // /accessibility
  // ───────────────────────────────────────────────────────────────────
  'accessibility.what.skip.name': {
    en: 'Skip links',
    ar: 'روابط التخطّي',
    es: 'Enlaces para saltar',
  },
  'accessibility.what.skip.desc': {
    en: 'A "skip to main content" link is provided so keyboard and screen-reader users can bypass repeated navigation.',
    ar: 'فيه رابط "تخطّى إلى المحتوى الرئيسي" عشان مستخدمي لوحة المفاتيح وقارئات الشاشة يقدرون يتجاوزون التنقّل المتكرّر.',
    es: 'Se proporciona un enlace de "saltar al contenido principal" para que los usuarios de teclado y lector de pantalla puedan omitir la navegación repetida.',
  },
  'accessibility.what.semantic.name': {
    en: 'Semantic structure',
    ar: 'بنية دلالية',
    es: 'Estructura semántica',
  },
  'accessibility.what.semantic.desc': {
    en: 'Pages are built with meaningful HTML landmarks and a logical heading order to aid navigation and comprehension.',
    ar: 'الصفحات مبنية بمعالم HTML ذات معنى وترتيب عناوين منطقي عشان تسهّل التنقّل والفهم.',
    es: 'Las páginas se construyen con elementos HTML de referencia significativos y un orden lógico de encabezados para facilitar la navegación y la comprensión.',
  },
  'accessibility.what.aria.name': {
    en: 'ARIA where needed',
    ar: 'ARIA عند الحاجة',
    es: 'ARIA cuando es necesario',
  },
  'accessibility.what.aria.desc': {
    en: 'WAI-ARIA roles and labels are applied to custom components where native HTML semantics are not sufficient.',
    ar: 'أدوار وتسميات WAI-ARIA تنطبّق على المكوّنات المخصّصة لما تكون دلالات HTML الأصلية ما تكفي.',
    es: 'Se aplican roles y etiquetas WAI-ARIA a los componentes personalizados cuando la semántica nativa de HTML no es suficiente.',
  },
  'accessibility.what.contrast.name': {
    en: 'Colour contrast',
    ar: 'تباين الألوان',
    es: 'Contraste de color',
  },
  'accessibility.what.contrast.desc': {
    en: 'Text and interface colours are chosen to target the WCAG 2.2 AA contrast ratios in both light and dark themes.',
    ar: 'ألوان النص والواجهة مختارة عشان تستهدف نسب تباين WCAG 2.2 AA في الوضعين الفاتح والداكن.',
    es: 'Los colores del texto y de la interfaz se eligen para alcanzar las relaciones de contraste WCAG 2.2 AA tanto en el tema claro como en el oscuro.',
  },
  'accessibility.what.responsive.name': {
    en: 'Responsive layout',
    ar: 'تخطيط متجاوب',
    es: 'Diseño adaptable',
  },
  'accessibility.what.responsive.desc': {
    en: 'The layout adapts to different screen sizes and supports zooming and text resizing without loss of content.',
    ar: 'التخطيط يتأقلم مع أحجام الشاشات المختلفة ويدعم التكبير وتغيير حجم النص بدون ما يضيع المحتوى.',
    es: 'El diseño se adapta a distintos tamaños de pantalla y admite el zoom y el cambio de tamaño del texto sin pérdida de contenido.',
  },
  'accessibility.what.screen.name': {
    en: 'Screen-reader support',
    ar: 'دعم قارئات الشاشة',
    es: 'Compatibilidad con lectores de pantalla',
  },
  'accessibility.what.screen.desc': {
    en: 'Core reading and revision journeys are designed and tested to work with common screen readers.',
    ar: 'رحلات القراءة والمراجعة الأساسية مصمّمة ومختبرة عشان تشتغل مع قارئات الشاشة الشائعة.',
    es: 'Los recorridos básicos de lectura y repaso están diseñados y probados para funcionar con los lectores de pantalla habituales.',
  },
  'accessibility.what.motion.name': {
    en: 'Reduced motion',
    ar: 'حركة مخفّضة',
    es: 'Movimiento reducido',
  },
  'accessibility.what.motion.desc': {
    en: 'Non-essential animation is reduced or removed for users who set the operating-system preference',
    ar: 'الحركة غير الضرورية تتقلّل أو تتشال للمستخدمين اللي يضبطون تفضيل نظام التشغيل',
    es: 'La animación no esencial se reduce o se elimina para los usuarios que activan la preferencia del sistema operativo',
  },
  'accessibility.limits.h2': {
    en: 'Known limitations',
    ar: 'قيود معروفة',
    es: 'Limitaciones conocidas',
  },
  'accessibility.limits.lead': {
    en: 'We are honest about where the platform does not yet fully meet our target, and we are actively working to close these gaps.',
    ar: 'إحنا صريحين عن وين المنصّة لسا ما تحقّق هدفنا بالكامل، وقاعدين نشتغل بجد عشان نسدّ هالفجوات.',
    es: 'Somos sinceros sobre los aspectos en los que la plataforma aún no cumple plenamente nuestro objetivo, y trabajamos activamente para cerrar estas brechas.',
  },
  'accessibility.limits.interactive.name': {
    en: 'Complex interactive tools',
    ar: 'أدوات تفاعلية معقّدة',
    es: 'Herramientas interactivas complejas',
  },
  'accessibility.limits.interactive.desc': {
    en: 'Some richer interactive exercises and editors may not yet be fully operable by keyboard or screen reader in every scenario.',
    ar: 'بعض التمارين والمحرّرات التفاعلية الأغنى يمكن لسا ما تشتغل بالكامل بلوحة المفاتيح أو قارئ الشاشة في كل الحالات.',
    es: 'Algunos ejercicios y editores interactivos más ricos pueden no ser todavía totalmente operables con teclado o lector de pantalla en todos los casos.',
  },
  'accessibility.limits.third_party.name': {
    en: 'Third-party embeds',
    ar: 'محتوى مضمّن من طرف ثالث',
    es: 'Contenido incrustado de terceros',
  },
  'accessibility.limits.third_party.desc': {
    en: 'Embedded content from third-party providers is outside our direct control and may not meet the same accessibility standard.',
    ar: 'المحتوى المضمّن من مزوّدين خارجيين خارج تحكّمنا المباشر ويمكن ما يحقّق نفس معيار الوصول.',
    es: 'El contenido incrustado de proveedores externos está fuera de nuestro control directo y puede no cumplir el mismo estándar de accesibilidad.',
  },
  'accessibility.limits.pdf.name': {
    en: 'Legacy PDFs',
    ar: 'ملفّات PDF قديمة',
    es: 'PDF heredados',
  },
  'accessibility.limits.pdf.desc': {
    en: 'Some older downloadable PDF resources may not be fully tagged for assistive technology; we are reviewing and replacing these over time.',
    ar: 'بعض مصادر PDF القديمة القابلة للتنزيل يمكن ما تكون موسومة بالكامل للتقنيات المساعِدة؛ وقاعدين نراجعها ونستبدلها مع الوقت.',
    es: 'Algunos recursos PDF descargables más antiguos pueden no estar totalmente etiquetados para la tecnología de asistencia; los estamos revisando y sustituyendo con el tiempo.',
  },
  'accessibility.limits.ai_note': {
    en: 'AI-generated feedback is presented through interface components that we are progressively improving for accessibility, and we welcome reports of any barriers you encounter.',
    ar: 'الملاحظات المولّدة بالذكاء الاصطناعي تنعرض عن طريق مكوّنات واجهة قاعدين نحسّنها للوصول بالتدريج، ونرحّب بأي بلاغ عن عوائق تواجهك.',
    es: 'La retroalimentación generada por IA se presenta mediante componentes de interfaz que vamos mejorando progresivamente en accesibilidad, y agradecemos que se nos informe de cualquier barrera que encuentres.',
  },
  'accessibility.tech.h2': {
    en: 'Technologies this statement relies on',
    ar: 'التقنيات اللي يعتمد عليها هذا البيان',
    es: 'Tecnologías en las que se basa esta declaración',
  },
  'accessibility.tech.intro': {
    en: 'Accessibility of The English Hub relies on the following technologies working with your browser and any assistive technology you use:',
    ar: 'وصول The English Hub يعتمد على التقنيات التالية وهي تشتغل مع متصفّحك وأي تقنية مساعِدة تستخدمها:',
    es: 'La accesibilidad de The English Hub depende de que las siguientes tecnologías funcionen con tu navegador y cualquier tecnología de asistencia que utilices:',
  },
  'accessibility.tech.outro': {
    en: 'These technologies are relied upon for conformance with the accessibility standard we target.',
    ar: 'هالتقنيات معتمَد عليها للتوافق مع معيار الوصول اللي نستهدفه.',
    es: 'Se confía en estas tecnologías para la conformidad con el estándar de accesibilidad que perseguimos.',
  },
  'accessibility.assessment.h2': {
    en: 'How we assess accessibility',
    ar: 'كيف نقيّم الوصول',
    es: 'Cómo evaluamos la accesibilidad',
  },
  'accessibility.assessment.lead': {
    en: 'This statement reflects our own ongoing assessment rather than a formal external audit.',
    ar: 'هذا البيان يعكس تقييمنا الذاتي المستمر مو تدقيق خارجي رسمي.',
    es: 'Esta declaración refleja nuestra propia evaluación continua y no una auditoría externa formal.',
  },
  'accessibility.assessment.self.name': {
    en: 'Self-evaluation',
    ar: 'تقييم ذاتي',
    es: 'Autoevaluación',
  },
  'accessibility.assessment.self.desc': {
    en: 'We carry out internal reviews using automated checks, manual keyboard testing and screen-reader spot-checks against WCAG 2.2 AA.',
    ar: 'نسوّي مراجعات داخلية باستخدام فحوصات آلية، واختبار يدوي بلوحة المفاتيح، وفحوصات عيّنة بقارئ الشاشة مقابل WCAG 2.2 AA.',
    es: 'Realizamos revisiones internas mediante comprobaciones automatizadas, pruebas manuales de teclado y controles puntuales con lector de pantalla frente a WCAG 2.2 AA.',
  },
  'accessibility.assessment.feedback.name': {
    en: 'User feedback',
    ar: 'ملاحظات المستخدمين',
    es: 'Comentarios de los usuarios',
  },
  'accessibility.assessment.feedback.desc': {
    en: 'Issues reported by students, parents, teachers and schools are triaged and used to prioritise fixes.',
    ar: 'المشاكل اللي يبلّغ عنها الطلاب والأهالي والمعلّمون والمدارس تتفرز وتنستخدم لترتيب أولويات الإصلاح.',
    es: 'Los problemas reportados por estudiantes, padres, profesores y centros se clasifican y se utilizan para priorizar las correcciones.',
  },
  'accessibility.enforcement.h2': {
    en: 'Enforcement procedure',
    ar: 'إجراء الإنفاذ',
    es: 'Procedimiento de aplicación',
  },
  'accessibility.enforcement.body1_lead': {
    en: 'In the United Kingdom, access to digital services for disabled people is supported by the',
    ar: 'في المملكة المتحدة، وصول ذوي الإعاقة للخدمات الرقمية مدعوم بـ',
    es: 'En el Reino Unido, el acceso de las personas con discapacidad a los servicios digitales se ampara en la',
  },
  'accessibility.enforcement.equality_act': {
    en: 'Equality Act 2010',
    ar: 'Equality Act 2010',
    es: 'Equality Act 2010',
  },
  'accessibility.enforcement.body1_tail': {
    en: ', and we treat accessibility as an ongoing legal and ethical responsibility.',
    ar: '، وإحنا نتعامل مع الوصول كمسؤولية قانونية وأخلاقية مستمرّة.',
    es: ', y tratamos la accesibilidad como una responsabilidad legal y ética continua.',
  },
  'accessibility.enforcement.body2_lead': {
    en: 'If you contact us about an accessibility problem and are not satisfied with our response, you can escalate the matter to the',
    ar: 'إذا تواصلت معنا عن مشكلة وصول وما رضيت عن ردّنا، تقدر تصعّد الموضوع لـ',
    es: 'Si te pones en contacto con nosotros por un problema de accesibilidad y no estás satisfecho con nuestra respuesta, puedes escalar el asunto al',
  },
  'accessibility.enforcement.eass_link': {
    en: 'Equality Advisory and Support Service (EASS)',
    ar: 'Equality Advisory and Support Service (EASS)',
    es: 'Equality Advisory and Support Service (EASS)',
  },
  'accessibility.enforcement.body2_tail': {
    en: ', which provides free advice and support on equality and human rights issues.',
    ar: '، اللي يقدّم استشارة ودعم مجاني في قضايا المساواة وحقوق الإنسان.',
    es: ', que ofrece asesoramiento y apoyo gratuitos en cuestiones de igualdad y derechos humanos.',
  },
}
