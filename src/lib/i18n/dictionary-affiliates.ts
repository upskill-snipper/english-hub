/**
 * Curated bilingual dictionary for the public affiliates / partner page
 * (`/affiliates`, rendered by
 * src/components/affiliates/AffiliatePublicPage.tsx).
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Every visible string on that page goes through `useT()` on the
 * `aff_comp.public.*` namespace (~104 distinct keys). Until now those
 * keys only existed in placeholder/auto-generated supplements:
 *
 *   - dictionary-report-fix-may16b.ts  → real EN, but ar === en
 *     (English mirror, so AR mode showed English).
 *   - dictionary-placeholder-fix-may15.ts → real EN, ar === en.
 *   - dictionary-audit-fix.ts → junk Ollama output where the EN itself
 *     is a Title-cased path fragment ("Heading", "Subtitle", "Badge").
 *
 * No curated entry with genuine Arabic existed, so Arabic-mode visitors
 * saw English. This file supplies the real EN (verbatim from the
 * report-fix / placeholder-may15 source - NEVER from the audit junk)
 * plus genuine Khaleeji (Gulf) Arabic in a natural marketing /
 * partnership register: second-person direct address, Gulf lexis
 * (وايد، هذي، حقّك، تكسب، عمولة، عقب) - not MSA, not machine-literal.
 * Voice matches src/lib/eal/curriculum.ts.
 *
 * For the 13 keys that exist ONLY in dictionary-audit-fix.ts with a
 * fake key-fragment EN (the six `status.*` lifecycle banners and the
 * seven `templates.*` strings), the correct EN was inferred from how
 * the string is actually used in AffiliatePublicPage.tsx (StatusBanner
 * config + PostTemplates / disclosure box), since the audit EN values
 * ("Heading", "Disclosure Title", "Subtitle") are unusable as source.
 *
 * Brand / proper nouns (The English Hub, Stripe, PayPal, GCSE, IGCSE,
 * EAL, KS3, UTM, AQA/Edexcel/OCR/Eduqas, #ad) are deliberately kept
 * untranslated.
 *
 * WIRING: imported in src/lib/i18n/dictionary.ts and inserted into the
 * `lookup()` resolver chain at the SAME curated tier as
 * HOMEPAGE_DICTIONARY (immediately after it), which is BEFORE
 * PRESS_AND_VERIFIED_FIX / PLACEHOLDER_FIX_* / SCREENSHOT_FIX /
 * REPORT_FIX_MAY16B / AUDIT_FIX_DICTIONARY - so these curated Arabic
 * values WIN over every placeholder/audit supplement. That precedence
 * is the entire fix.
 */

export const AFF_PUBLIC_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  /* ─── Hero ─────────────────────────────────────────────────── */
  'aff_comp.public.partnership_badge': {
    en: 'Partner Programme',
    ar: 'برنامج الشركاء',
    es: 'Programa de socios',
  },
  'aff_comp.public.hero.title_part1': {
    en: 'Earn recurring commission with',
    ar: 'اكسب عمولة متكرّرة مع',
    es: 'Gana comisiones recurrentes con',
  },
  'aff_comp.public.hero.title_brand': {
    en: 'The English Hub',
    ar: 'The English Hub',
    es: 'The English Hub',
  },
  'aff_comp.public.hero.subtitle': {
    en: "Partner with a launch-stage English revision platform. The English Hub is a new GCSE/IGCSE revision tool built by English teachers. We are recruiting our first cohort of partners now. We don't publish usage or earnings figures we can't yet evidence - your dashboard shows your real, verified referrals and commission from day one.",
    ar: 'كن شريكاً لمنصّة مراجعة إنجليزي في مرحلة الإطلاق. The English Hub أداة مراجعة GCSE/IGCSE جديدة صاغها معلّمو إنجليزي. نحن نضم أول مجموعة من شركائنا الآن. ما ننشر أرقام استخدام أو أرباح ما نقدر نوثّقها بعد - لوحة تحكّمك تبيّن إحالاتك وعمولتك الحقيقية الموثّقة من أول يوم.',
    es: 'Asóciate con una plataforma de repaso de inglés en fase de lanzamiento. The English Hub es una nueva herramienta de repaso de GCSE/IGCSE creada por profesores de inglés. Ahora mismo estamos reclutando nuestra primera promoción de socios. No publicamos cifras de uso o ingresos que aún no podemos demostrar: tu panel muestra tus referidos y comisiones reales y verificados desde el primer día.',
  },
  'aff_comp.public.cta.get_code': {
    en: 'Get your referral code',
    ar: 'احصل على كود الإحالة حقّك',
    es: 'Consigue tu código de referido',
  },
  'aff_comp.public.cta.learn_more': {
    en: 'Learn more',
    ar: 'اعرف أكثر',
    es: 'Saber más',
  },

  /* ─── Status banner (EN inferred from StatusBanner config) ──── */
  'aff_comp.public.status.pending.title': {
    en: 'Your application is under review',
    ar: 'طلبك تحت المراجعة',
    es: 'Tu solicitud está en revisión',
  },
  'aff_comp.public.status.pending.message': {
    en: "Thanks for applying. We're reviewing your details and will be in touch shortly with the next steps.",
    ar: 'مشكور على تقديمك. قاعدين نراجع بياناتك وبنتواصل وياك قريب بالخطوات الجاية.',
    es: 'Gracias por solicitarlo. Estamos revisando tus datos y te contactaremos pronto con los siguientes pasos.',
  },
  'aff_comp.public.status.agreement_sent.title': {
    en: 'Your partner agreement is on its way',
    ar: 'اتفاقية الشراكة حقّتك في طريقها لك',
    es: 'Tu acuerdo de socio está en camino',
  },
  'aff_comp.public.status.agreement_sent.message': {
    en: "We've sent your partner agreement to sign. Once it's signed, your referral code and dashboard unlock straight away.",
    ar: 'رسّلنا لك اتفاقية الشراكة عشان توقّعها. عقب ما توقّعها، يفتح لك كود الإحالة ولوحة التحكّم على طول.',
    es: 'Te hemos enviado tu acuerdo de socio para que lo firmes. Una vez firmado, tu código de referido y tu panel se desbloquean de inmediato.',
  },
  'aff_comp.public.status.agreement_signed.title': {
    en: "You're all set - welcome aboard",
    ar: 'كل شي جاهز - حيّاك الله معانا',
    es: 'Todo listo: bienvenido a bordo',
  },
  'aff_comp.public.status.agreement_signed.message': {
    en: 'Your agreement is signed and your partner account is active. Head to your dashboard to grab your referral link and start sharing.',
    ar: 'توقّعت اتفاقيتك وحسابك كشريك صار فعّال. روح للوحة التحكّم حقّتك، خذ رابط الإحالة وابدأ تنشر.',
    es: 'Tu acuerdo está firmado y tu cuenta de socio está activa. Ve a tu panel para conseguir tu enlace de referido y empezar a compartir.',
  },

  /* ─── Why partner ──────────────────────────────────────────── */
  'aff_comp.public.why.heading': {
    en: 'Why partner with us',
    ar: 'ليش تصير شريك معانا',
    es: 'Por qué asociarte con nosotros',
  },
  'aff_comp.public.why.subheading': {
    en: 'A genuinely useful product for your audience, fair recurring rewards for you, and transparent tracking throughout.',
    ar: 'منتج يفيد جمهورك فعلاً، ومكافآت متكرّرة وعادلة لك، وتتبّع شفّاف من أوّله لآخره.',
    es: 'Un producto realmente útil para tu audiencia, recompensas recurrentes y justas para ti, y un seguimiento transparente en todo momento.',
  },
  'aff_comp.public.why.reason1.title': {
    en: 'One clear programme',
    ar: 'برنامج واحد واضح',
    es: 'Un programa claro',
  },
  'aff_comp.public.why.reason1.desc': {
    en: 'One programme, one set of terms - paid monthly. Your dashboard shows your real verified referrals and earnings, and the current commission rate that applies to you.',
    ar: 'برنامج واحد، مجموعة شروط واحدة - تنصرف لك شهرياً. لوحة تحكّمك تبيّن إحالاتك وأرباحك الحقيقية الموثّقة، ونسبة العمولة الحالية اللي تنطبّق عليك.',
    es: 'Un programa, un único conjunto de términos, pagado mensualmente. Tu panel muestra tus referidos e ingresos reales y verificados, y la tasa de comisión actual que se te aplica.',
  },
  'aff_comp.public.why.reason2.title': {
    en: 'A product parents actually trust',
    ar: 'منتج الأهالي يثقون فيه عدل',
    es: 'Un producto en el que los padres confían de verdad',
  },
  'aff_comp.public.why.reason2.desc': {
    en: 'Exam-board specific revision built by English teachers - not generic AI slop. Easy to recommend honestly.',
    ar: 'مراجعة مخصّصة لكل مجلس امتحانات، صاغها معلّمو إنجليزي - مو حشو ذكاء اصطناعي عام. تنصح فيها بصدق وبكل أريحية.',
    es: 'Repaso específico por junta examinadora creado por profesores de inglés, no contenido genérico generado por IA. Fácil de recomendar con honestidad.',
  },
  'aff_comp.public.why.reason3.title': {
    en: 'Real support, not a portal',
    ar: 'دعم حقيقي، مو بس بوّابة',
    es: 'Apoyo real, no un simple portal',
  },
  'aff_comp.public.why.reason3.desc': {
    en: 'Direct line to our partnerships team, custom assets, co-marketing slots and quarterly creator calls.',
    ar: 'تواصل مباشر مع فريق الشراكات حقّنا، ومواد مخصّصة لك، وفرص تسويق مشترك، ومكالمات ربع سنوية لصنّاع المحتوى.',
    es: 'Línea directa con nuestro equipo de alianzas, recursos personalizados, espacios de comarketing y llamadas trimestrales para creadores.',
  },

  /* ─── How it works ─────────────────────────────────────────── */
  'aff_comp.public.how.heading': {
    en: 'How it works',
    ar: 'شلون يشتغل',
    es: 'Cómo funciona',
  },
  'aff_comp.public.how.subheading': {
    en: 'Apply, share your code, and earn commission on every annual subscription you refer.',
    ar: 'قدّم طلبك، انشر كودك، واكسب عمولة على كل اشتراك سنوي يجي عن طريقك.',
    es: 'Solicítalo, comparte tu código y gana comisión por cada suscripción anual que refieras.',
  },
  'aff_comp.public.how.step1.title': {
    en: 'Apply in 60 seconds',
    ar: 'قدّم في 60 ثانية',
    es: 'Solicítalo en 60 segundos',
  },
  'aff_comp.public.how.step1.desc': {
    en: 'Tell us about your audience and how you plan to refer. Most applications are approved within one working day.',
    ar: 'عرّفنا على جمهورك وكيف ناوي تحيل الناس. أغلب الطلبات تنقبل خلال يوم عمل واحد.',
    es: 'Cuéntanos sobre tu audiencia y cómo piensas referir. La mayoría de las solicitudes se aprueban en un día laborable.',
  },
  'aff_comp.public.how.step2.title': {
    en: 'Get your unique link',
    ar: 'احصل على رابطك الخاص',
    es: 'Consigue tu enlace único',
  },
  'aff_comp.public.how.step2.desc': {
    en: 'Pick from preset destinations (homepage, pricing, IGCSE landing) or build your own with full UTM tagging.',
    ar: 'اختر من الوجهات الجاهزة (الصفحة الرئيسية، الأسعار، صفحة IGCSE) أو سوِّ رابطك بنفسك مع وسوم UTM كاملة.',
    es: 'Elige entre destinos predefinidos (página de inicio, precios, landing de IGCSE) o crea el tuyo con etiquetado UTM completo.',
  },
  'aff_comp.public.how.step3.title': {
    en: 'Share it your way',
    ar: 'انشره على طريقتك',
    es: 'Compártelo a tu manera',
  },
  'aff_comp.public.how.step3.desc': {
    en: 'Use our banners, screenshots and copy snippets - or write entirely your own. Whatever works for your audience.',
    ar: 'استخدم البنرات ولقطات الشاشة والنصوص الجاهزة حقّنا - أو اكتب نصّك بالكامل بنفسك. اللي يمشي مع جمهورك.',
    es: 'Usa nuestros banners, capturas de pantalla y fragmentos de texto, o escribe el tuyo por completo. Lo que funcione con tu audiencia.',
  },
  'aff_comp.public.how.step4.title': {
    en: 'Get paid monthly',
    ar: 'تستلم فلوسك شهرياً',
    es: 'Cobra mensualmente',
  },
  'aff_comp.public.how.step4.desc': {
    en: 'Commissions are paid monthly via Stripe or PayPal - for as long as the customer stays. Your dashboard shows the exact payout date and your real verified earnings.',
    ar: 'العمولات تنصرف شهرياً عن طريق Stripe أو PayPal - طول ما العميل باقٍ مشترك. لوحة تحكّمك تبيّن تاريخ الصرف بالضبط وأرباحك الحقيقية الموثّقة.',
    es: 'Las comisiones se pagan mensualmente mediante Stripe o PayPal, mientras el cliente siga suscrito. Tu panel muestra la fecha exacta de pago y tus ingresos reales y verificados.',
  },
  'aff_comp.public.how.annual_only_lead': {
    en: 'Annual plans only',
    ar: 'الخطط السنوية بس',
    es: 'Solo planes anuales',
  },
  'aff_comp.public.how.annual_only_body': {
    en: 'Commission is earned on referred annual subscriptions. This keeps rewards meaningful and aligned with families who commit to a full year of learning.',
    ar: 'العمولة تنحسب على الاشتراكات السنوية اللي تجي عن طريقك. هذي تخلّي المكافآت لها قيمة ومترابطة مع الأهالي اللي يلتزمون بسنة تعلّم كاملة.',
    es: 'La comisión se gana con las suscripciones anuales referidas. Esto mantiene las recompensas significativas y alineadas con las familias que se comprometen con un año completo de aprendizaje.',
  },

  /* ─── Commission structure ─────────────────────────────────── */
  'aff_comp.public.commission.heading': {
    en: 'Commission structure',
    ar: 'هيكل العمولة',
    es: 'Estructura de comisiones',
  },
  'aff_comp.public.commission.subheading': {
    en: 'Transparent recurring commission on every referred annual plan. One programme, one set of terms; your dashboard shows your real verified referrals and earnings.',
    ar: 'عمولة متكرّرة وشفّافة على كل خطّة سنوية تجي عن طريقك. برنامج واحد، مجموعة شروط واحدة؛ لوحة تحكّمك تبيّن إحالاتك وأرباحك الحقيقية الموثّقة.',
    es: 'Comisión recurrente y transparente por cada plan anual referido. Un programa, un único conjunto de términos; tu panel muestra tus referidos e ingresos reales y verificados.',
  },
  'aff_comp.public.commission.col_plan': {
    en: 'Plan',
    ar: 'الخطّة',
    es: 'Plan',
  },
  'aff_comp.public.commission.col_commission': {
    en: 'Commission',
    ar: 'العمولة',
    es: 'Comisión',
  },
  'aff_comp.public.commission.plan.student_monthly': {
    en: 'Student · monthly',
    ar: 'طالب · شهري',
    es: 'Estudiante · mensual',
  },
  'aff_comp.public.commission.plan.student_annual': {
    en: 'Student · annual',
    ar: 'طالب · سنوي',
    es: 'Estudiante · anual',
  },
  'aff_comp.public.commission.plan.teacher_monthly': {
    en: 'Teacher · monthly',
    ar: 'معلّم · شهري',
    es: 'Profesor · mensual',
  },
  'aff_comp.public.commission.plan.teacher_annual': {
    en: 'Teacher · annual',
    ar: 'معلّم · سنوي',
    es: 'Profesor · anual',
  },
  'aff_comp.public.commission.per_signup': {
    en: 'per signup',
    ar: 'لكل تسجيل',
    es: 'por registro',
  },
  'aff_comp.public.commission.footnote': {
    en: 'Commission is recurring while the referred subscription stays active. One programme, one set of terms; the rate that applies to you and your real verified earnings are confirmed in your partner dashboard.',
    ar: 'العمولة متكرّرة طول ما الاشتراك اللي جاء عن طريقك فعّال. برنامج واحد، مجموعة شروط واحدة؛ النسبة اللي تنطبّق عليك وأرباحك الحقيقية الموثّقة مؤكّدة لك في لوحة تحكّم الشريك حقّتك.',
    es: 'La comisión es recurrente mientras la suscripción referida siga activa. Un programa, un único conjunto de términos; la tasa que se te aplica y tus ingresos reales y verificados se confirman en tu panel de socio.',
  },

  /* ─── Your impact ──────────────────────────────────────────── */
  'aff_comp.public.impact.heading': {
    en: 'The impact you help create',
    ar: 'الأثر اللي تساعد تصنعه',
    es: 'El impacto que ayudas a crear',
  },
  'aff_comp.public.impact.subheading': {
    en: 'Every referral helps a student build real confidence in English, from KS3 through GCSE, IGCSE and EAL.',
    ar: 'كل إحالة تساعد طالب يبني ثقة حقيقية في الإنجليزي، من KS3 لين GCSE وIGCSE وEAL.',
    es: 'Cada referido ayuda a un estudiante a desarrollar verdadera confianza en inglés, desde KS3 hasta GCSE, IGCSE y EAL.',
  },
  // 2026-05-19 (H2/M15): the three fabricated stat tiles
  // ("14,000+ students", "871 board-specific revision routes",
  // "£42 average commission per referral, year one") were removed -
  // no usage or earnings figures we cannot yet evidence. Replaced with
  // honest launch-stage copy. No invented replacement count.
  'aff_comp.public.impact.stat1.value': {
    en: 'New',
    ar: 'جديدة',
    es: 'Nueva',
  },
  'aff_comp.public.impact.stat1.label': {
    en: 'GCSE / IGCSE revision platform, built by English teachers',
    ar: 'منصّة مراجعة GCSE / IGCSE، صاغها معلّمو إنجليزي',
    es: 'Plataforma de repaso de GCSE / IGCSE, creada por profesores de inglés',
  },
  'aff_comp.public.impact.stat2.value': {
    en: 'Every board',
    ar: 'كل مجلس',
    es: 'Todas las juntas',
  },
  'aff_comp.public.impact.stat2.label': {
    en: 'Revision aligned to the major exam boards',
    ar: 'مراجعة متوافقة مع مجالس الامتحانات الرئيسية',
    es: 'Repaso alineado con las principales juntas examinadoras',
  },
  'aff_comp.public.impact.stat3.value': {
    en: 'Verified',
    ar: 'موثّقة',
    es: 'Verificado',
  },
  'aff_comp.public.impact.stat3.label': {
    en: 'Your dashboard shows your real referrals and commission from day one',
    ar: 'لوحة تحكّمك تبيّن إحالاتك وعمولتك الحقيقية من أول يوم',
    es: 'Tu panel muestra tus referidos y comisiones reales desde el primer día',
  },
  'aff_comp.public.impact.empty_testimonials': {
    en: 'Partner case studies and stories are coming as the programme grows. Be one of the early partners who helps shape it.',
    ar: 'قصص الشركاء ودراسات الحالة جاية كل ما يكبر البرنامج. كن من الشركاء الأوائل اللي يساعدون يشكّلونه.',
    es: 'Los casos de estudio e historias de socios irán llegando a medida que el programa crezca. Sé uno de los primeros socios que ayudan a darle forma.',
  },

  /* ─── What you get ─────────────────────────────────────────── */
  'aff_comp.public.what_you_get.heading': {
    en: 'What you get',
    ar: 'وش بتحصل عليه',
    es: 'Lo que obtienes',
  },
  'aff_comp.public.what_you_get.subheading': {
    en: 'Everything you need to share The English Hub with confidence and track your results.',
    ar: 'كل اللي تحتاجه عشان تنشر The English Hub بثقة وتتابع نتايجك.',
    es: 'Todo lo que necesitas para compartir The English Hub con confianza y seguir tus resultados.',
  },
  'aff_comp.public.what_you_get.perk1': {
    en: 'Recurring commission - the rate that applies to you is shown in your dashboard',
    ar: 'عمولة متكرّرة - النسبة اللي تنطبّق عليك مبيّنة في لوحة تحكّمك',
    es: 'Comisión recurrente: la tasa que se te aplica se muestra en tu panel',
  },
  'aff_comp.public.what_you_get.perk2': {
    en: 'Referral tracking window confirmed in your dashboard',
    ar: 'نافذة تتبّع الإحالة مؤكّدة في لوحة تحكّمك',
    es: 'Ventana de seguimiento de referidos confirmada en tu panel',
  },
  'aff_comp.public.what_you_get.perk3': {
    en: 'Designed banner pack and screenshot library',
    ar: 'حزمة بنرات مصمّمة ومكتبة لقطات شاشة',
    es: 'Paquete de banners diseñados y biblioteca de capturas de pantalla',
  },
  'aff_comp.public.what_you_get.perk4': {
    en: 'Pre-written email and social copy',
    ar: 'نصوص إيميل وسوشال جاهزة',
    es: 'Textos de correo y redes sociales ya redactados',
  },
  'aff_comp.public.what_you_get.perk5': {
    en: 'Real-time dashboard with referral attribution',
    ar: 'لوحة تحكّم لحظية مع إسناد الإحالات',
    es: 'Panel en tiempo real con atribución de referidos',
  },
  'aff_comp.public.what_you_get.perk6': {
    en: 'Monthly creator newsletter and quarterly partner call',
    ar: 'نشرة شهرية لصنّاع المحتوى ومكالمة شركاء كل ربع سنة',
    es: 'Boletín mensual para creadores y llamada trimestral de socios',
  },

  /* ─── FAQ ──────────────────────────────────────────────────── */
  'aff_comp.public.faq.heading': {
    en: 'Frequently asked questions',
    ar: 'الأسئلة الشائعة',
    es: 'Preguntas frecuentes',
  },
  'aff_comp.public.faq.q1.q': {
    en: 'Do I have to be a teacher to join?',
    ar: 'لازم أكون معلّم عشان أنضم؟',
    es: '¿Tengo que ser profesor para unirme?',
  },
  'aff_comp.public.faq.q1.a': {
    en: 'You must be 18 or over to join. Beyond that, the programme is open to anyone with a relevant audience, including educators, tutors, parent communities, content creators and education websites. There are no follower or traffic minimums. We simply ask that promotion is honest and that The English Hub is presented as an independent platform that is exam-board aligned but not endorsed by any exam board.',
    ar: 'لازم يكون عمرك 18 سنة أو أكثر عشان تنضم. وزيادة على هذا، البرنامج مفتوح لأي واحد عنده جمهور مناسب - معلّمين، مدرّسين خصوصيين، مجتمعات أهالي، صنّاع محتوى، ومواقع تعليمية. ما في حد أدنى للمتابعين أو الزيارات. كل اللي نطلبه إن الترويج يكون صادق، وإن The English Hub تنعرض كمنصّة مستقلّة متوافقة مع مجالس الامتحانات بس مو معتمدة من أي مجلس امتحانات.',
    es: 'Debes tener 18 años o más para unirte. Más allá de eso, el programa está abierto a cualquier persona con una audiencia relevante, incluidos educadores, tutores, comunidades de padres, creadores de contenido y webs educativas. No hay mínimos de seguidores ni de tráfico. Solo pedimos que la promoción sea honesta y que The English Hub se presente como una plataforma independiente alineada con las juntas examinadoras pero no avalada por ninguna de ellas.',
  },
  'aff_comp.public.faq.q2.q': {
    en: 'How long does it take to be approved?',
    ar: 'كم ياخذ وقت لين يتم القبول؟',
    es: '¿Cuánto tarda la aprobación?',
  },
  'aff_comp.public.faq.q2.a': {
    en: 'Create an account or sign in, then submit the short partner application describing your audience. Once approved, your partner dashboard unlocks instantly with a unique referral link, a code to share, marketing assets and real-time tracking. Most applications are reviewed quickly so you can start sharing without long delays.',
    ar: 'سوِّ حساب أو سجّل دخولك، عقبها قدّم طلب الشراكة القصير واوصف فيه جمهورك. عقب القبول، تنفتح لك لوحة تحكّم الشريك على طول مع رابط إحالة خاص، وكود تنشره، ومواد تسويقية، وتتبّع لحظي. أغلب الطلبات تنراجع بسرعة عشان تبدأ تنشر بدون تأخير طويل.',
    es: 'Crea una cuenta o inicia sesión, luego envía la breve solicitud de socio describiendo tu audiencia. Una vez aprobada, tu panel de socio se desbloquea al instante con un enlace de referido único, un código para compartir, recursos de marketing y seguimiento en tiempo real. La mayoría de las solicitudes se revisan con rapidez para que puedas empezar a compartir sin grandes demoras.',
  },
  'aff_comp.public.faq.q3.q': {
    en: 'What happens if my audience is mainly outside the UK?',
    ar: 'وش يصير لو جمهوري أغلبه برّا بريطانيا؟',
    es: '¿Qué pasa si mi audiencia está principalmente fuera del Reino Unido?',
  },
  'aff_comp.public.faq.q3.a': {
    en: 'Payouts are made monthly once your balance reaches the minimum threshold shown in your dashboard. Commission is confirmed after the referred annual subscription completes its standard refund window, which protects both partners and the programme. Your dashboard always shows pending and confirmed earnings clearly.',
    ar: 'المدفوعات تنصرف شهرياً أوّل ما رصيدك يوصل الحد الأدنى المبيّن في لوحة التحكّم. العمولة تتأكّد عقب ما الاشتراك السنوي اللي جاء عن طريقك يكمّل فترة الاسترداد الاعتيادية، وهذا يحمي الشركاء والبرنامج. لوحة تحكّمك تبيّن لك دايماً الأرباح المعلّقة والمؤكّدة بوضوح.',
    es: 'Los pagos se realizan mensualmente una vez que tu saldo alcanza el umbral mínimo que se muestra en tu panel. La comisión se confirma después de que la suscripción anual referida complete su ventana estándar de reembolso, lo que protege tanto a los socios como al programa. Tu panel siempre muestra con claridad los ingresos pendientes y los confirmados.',
  },
  'aff_comp.public.faq.q4.q': {
    en: 'Can I promote on TikTok / Instagram / YouTube?',
    ar: 'أقدر أروّج على TikTok / Instagram / YouTube؟',
    es: '¿Puedo promocionar en TikTok / Instagram / YouTube?',
  },
  'aff_comp.public.faq.q4.a': {
    en: 'Referrals are tracked with a cookie that starts from the first click on your link, so someone who clicks today and subscribes later is still credited to you. The exact tracking window is one set of terms, confirmed in your partner dashboard.',
    ar: 'الإحالات تنتتبّع بكوكي يبدأ من أول ضغطة على رابطك، فاللي يضغط اليوم ويشترك عقب فترة تنحسب لك. مدّة التتبّع بالضبط ضمن مجموعة شروط واحدة، ومؤكّدة في لوحة تحكّم الشريك حقّتك.',
    es: 'Los referidos se rastrean con una cookie que se inicia desde el primer clic en tu enlace, así que alguien que hace clic hoy y se suscribe más tarde se te sigue acreditando. La ventana de seguimiento exacta forma parte de un único conjunto de términos, confirmado en tu panel de socio.',
  },
  'aff_comp.public.faq.q5.q': {
    en: 'Is the program available worldwide?',
    ar: 'هل البرنامج متوفّر بالعالم كلّه؟',
    es: '¿El programa está disponible en todo el mundo?',
  },
  'aff_comp.public.faq.q5.a': {
    en: 'There is one programme with one set of terms. Everyone starts earning from their very first signup, and the commission rate that applies to you, along with your real verified referrals and earnings, is always visible in your partner dashboard.',
    ar: 'في برنامج واحد بمجموعة شروط واحدة. الكل يبدأ يكسب من أول تسجيل، ونسبة العمولة اللي تنطبّق عليك، مع إحالاتك وأرباحك الحقيقية الموثّقة، تبيّن لك دايماً في لوحة تحكّم الشريك حقّتك.',
    es: 'Hay un único programa con un único conjunto de términos. Todos empiezan a ganar desde su primer registro, y la tasa de comisión que se te aplica, junto con tus referidos e ingresos reales y verificados, siempre está visible en tu panel de socio.',
  },
  'aff_comp.public.faq.q6.q': {
    en: 'Do you offer custom landing pages for high-volume affiliates?',
    ar: 'تقدّمون صفحات هبوط مخصّصة للمسوّقين أصحاب الإحالات الكثيرة؟',
    es: '¿Ofrecéis landings personalizadas para afiliados de gran volumen?',
  },
  'aff_comp.public.faq.q6.a': {
    en: 'Your dashboard shows clicks on your link, sign-ups, completed annual subscriptions, pending and confirmed commission, and your current tier, all updated in real time. This gives you a clear, transparent view of how your referrals are performing at any moment.',
    ar: 'لوحة تحكّمك تبيّن لك الضغطات على رابطك، والتسجيلات، والاشتراكات السنوية المكتملة، والعمولة المعلّقة والمؤكّدة، ومستواك الحالي - كلّها تتحدّث لحظياً. هذا يعطيك صورة واضحة وشفّافة عن أداء إحالاتك بأي لحظة.',
    es: 'Tu panel muestra los clics en tu enlace, los registros, las suscripciones anuales completadas, la comisión pendiente y confirmada, y tu nivel actual, todo actualizado en tiempo real. Esto te da una visión clara y transparente del rendimiento de tus referidos en cualquier momento.',
  },
  'aff_comp.public.faq.q7.q': {
    en: 'What happens if a referred customer cancels?',
    ar: 'وش يصير لو عميل جاء عن طريقي ألغى اشتراكه؟',
    es: '¿Qué pasa si un cliente referido cancela?',
  },
  'aff_comp.public.faq.q7.a': {
    en: 'Once your confirmed balance reaches the minimum payout threshold, earnings are paid out monthly using the payment details you set in your dashboard. You can track exactly when commission moves from pending to confirmed, so there are no surprises about what you will be paid and when.',
    ar: 'أوّل ما رصيدك المؤكّد يوصل الحد الأدنى للسحب، الأرباح تنصرف شهرياً على بيانات الدفع اللي حطّيتها في لوحة التحكّم. تقدر تتابع بالضبط متى تنتقل العمولة من معلّقة لمؤكّدة، فما في أي مفاجآت بخصوص كم بيوصلك ومتى.',
    es: 'Una vez que tu saldo confirmado alcanza el umbral mínimo de pago, los ingresos se abonan mensualmente con los datos de pago que configures en tu panel. Puedes seguir exactamente cuándo pasa la comisión de pendiente a confirmada, así que no hay sorpresas sobre cuánto cobrarás y cuándo.',
  },
  'aff_comp.public.faq.q8.q': {
    en: 'Where can I see my referrals and earnings?',
    ar: 'وين أقدر أشوف إحالاتي وأرباحي؟',
    es: '¿Dónde puedo ver mis referidos e ingresos?',
  },
  'aff_comp.public.faq.q8.a': {
    en: 'Every partner has access to support by email, plus marketing assets and guidance to help you promote effectively. As your referral volume grows you unlock priority support and, at the top tier, a dedicated partner manager to help you get the most from the programme.',
    ar: 'كل شريك عنده دعم عن طريق الإيميل، زيادة على مواد تسويقية وإرشادات تساعدك تروّج بفعالية. كل ما يكبر عدد إحالاتك، يفتح لك دعم بأولوية، وفي أعلى مستوى مدير شركاء مخصّص يساعدك تستفيد من البرنامج لأقصى حد.',
    es: 'Todos los socios tienen acceso a soporte por correo electrónico, además de recursos de marketing y orientación para ayudarte a promocionar con eficacia. A medida que crece tu volumen de referidos desbloqueas soporte prioritario y, en el nivel más alto, un gestor de socios dedicado para ayudarte a sacar el máximo partido del programa.',
  },

  /* ─── Apply ────────────────────────────────────────────────── */
  'aff_comp.public.apply.heading': {
    en: 'Become a partner',
    ar: 'صير شريك',
    es: 'Hazte socio',
  },
  'aff_comp.public.apply.subheading_logged_in': {
    en: 'You are signed in and ready to go. Generate your referral code and start sharing The English Hub today.',
    ar: 'أنت مسجّل دخولك وكل شي جاهز. ولّد كود الإحالة حقّك وابدأ تنشر The English Hub من اليوم.',
    es: 'Has iniciado sesión y todo está listo. Genera tu código de referido y empieza a compartir The English Hub hoy mismo.',
  },
  'aff_comp.public.apply.subheading_logged_out': {
    en: 'Create an account or sign in to generate your referral code and join the partner programme.',
    ar: 'سوِّ حساب أو سجّل دخولك عشان تولّد كود الإحالة حقّك وتنضم لبرنامج الشركاء.',
    es: 'Crea una cuenta o inicia sesión para generar tu código de referido y unirte al programa de socios.',
  },
  'aff_comp.public.apply.annual_only_note_lead': {
    en: 'Good to know',
    ar: 'زين تعرف',
    es: 'Conviene saber',
  },
  'aff_comp.public.apply.annual_only_note_body': {
    en: 'Commission applies to referred annual subscriptions. Referrals are tracked from the first click, so you are credited even if someone subscribes later. One programme, one set of terms - confirmed in your dashboard.',
    ar: 'العمولة تنطبّق على الاشتراكات السنوية اللي تجي عن طريقك. الإحالات تنتتبّع من أول ضغطة، فتنحسب لك حتى لو الواحد اشترك عقب فترة. برنامج واحد، مجموعة شروط واحدة - مؤكّدة في لوحة تحكّمك.',
    es: 'La comisión se aplica a las suscripciones anuales referidas. Los referidos se rastrean desde el primer clic, así que se te acredita aunque alguien se suscriba más tarde. Un programa, un único conjunto de términos, confirmado en tu panel.',
  },
  'aff_comp.public.apply.signin_first': {
    en: 'Sign in first',
    ar: 'سجّل دخولك أوّل',
    es: 'Inicia sesión primero',
  },
  'aff_comp.public.apply.signin_blurb': {
    en: 'You need an account to generate your referral code and access your partner dashboard. It only takes a moment.',
    ar: 'تحتاج حساب عشان تولّد كود الإحالة حقّك وتدخل لوحة تحكّم الشريك. ما تاخذ إلا لحظة.',
    es: 'Necesitas una cuenta para generar tu código de referido y acceder a tu panel de socio. Solo lleva un momento.',
  },
  'aff_comp.public.apply.create_account': {
    en: 'Create an account',
    ar: 'سوِّ حساب',
    es: 'Crear una cuenta',
  },
  'aff_comp.public.apply.sign_in': {
    en: 'Sign in',
    ar: 'سجّل دخولك',
    es: 'Iniciar sesión',
  },

  /* ─── Programme basics ─────────────────────────────────────── */
  'aff_comp.public.basics.heading': {
    en: 'Programme basics',
    ar: 'أساسيات البرنامج',
    es: 'Fundamentos del programa',
  },
  'aff_comp.public.basics.attribution.title': {
    en: 'Click attribution',
    ar: 'إسناد الضغطة',
    es: 'Atribución por clic',
  },
  'aff_comp.public.basics.attribution.desc': {
    en: 'A cookie tracks each referral from the first click, so you are credited even when someone subscribes later. The tracking window is one set of terms, confirmed in your dashboard.',
    ar: 'كوكي يتتبّع كل إحالة من أول ضغطة، فتنحسب لك حتى لو الواحد اشترك عقب فترة. مدّة التتبّع ضمن مجموعة شروط واحدة، مؤكّدة في لوحة تحكّمك.',
    es: 'Una cookie rastrea cada referido desde el primer clic, así que se te acredita aunque alguien se suscriba más tarde. La ventana de seguimiento forma parte de un único conjunto de términos, confirmado en tu panel.',
  },
  'aff_comp.public.basics.min_payout.title': {
    en: 'Low minimum payout',
    ar: 'حد أدنى منخفض للسحب',
    es: 'Pago mínimo bajo',
  },
  'aff_comp.public.basics.min_payout.desc': {
    en: 'Reach a modest payout threshold and receive your earnings on a monthly schedule, with the current minimum shown in your dashboard.',
    ar: 'اوصل حد سحب بسيط واستلم أرباحك على جدول شهري، والحد الأدنى الحالي مبيّن لك في لوحة التحكّم.',
    es: 'Alcanza un umbral de pago modesto y recibe tus ingresos con una periodicidad mensual; el mínimo actual se muestra en tu panel.',
  },
  'aff_comp.public.basics.ltv.title': {
    en: 'Recurring lifetime value',
    ar: 'قيمة متكرّرة مدى الحياة',
    es: 'Valor recurrente de por vida',
  },
  'aff_comp.public.basics.ltv.desc': {
    en: 'Commission keeps paying for as long as your referral stays subscribed, so each referral can earn well beyond the first year.',
    ar: 'العمولة تستمر تنصرف لك طول ما إحالتك باقية مشتركة، فكل إحالة ممكن تكسب لك أكثر بوايد من السنة الأولى.',
    es: 'La comisión sigue pagándose mientras tu referido siga suscrito, así que cada referido puede generar mucho más allá del primer año.',
  },
  'aff_comp.public.basics.commission.title': {
    en: 'Recurring commission',
    ar: 'عمولة متكرّرة',
    es: 'Comisión recurrente',
  },
  'aff_comp.public.basics.commission.desc': {
    en: 'Earn recurring commission on every referred annual plan. One programme, one set of terms; your dashboard shows your real verified referrals and earnings.',
    ar: 'اكسب عمولة متكرّرة على كل خطّة سنوية تجي عن طريقك. برنامج واحد، مجموعة شروط واحدة؛ لوحة تحكّمك تبيّن إحالاتك وأرباحك الحقيقية الموثّقة.',
    es: 'Gana comisión recurrente por cada plan anual referido. Un programa, un único conjunto de términos; tu panel muestra tus referidos e ingresos reales y verificados.',
  },

  /* ─── Bottom CTA ───────────────────────────────────────────── */
  'aff_comp.public.bottom_cta.heading': {
    en: 'Ready to start earning',
    ar: 'جاهز تبدأ تكسب',
    es: 'Listo para empezar a ganar',
  },
  'aff_comp.public.bottom_cta.body': {
    en: 'Join the partner programme, share The English Hub with the people who trust your recommendations, and earn recurring commission on every annual subscription you refer.',
    ar: 'انضم لبرنامج الشركاء، وانشر The English Hub مع الناس اللي يثقون بترشيحاتك، واكسب عمولة متكرّرة على كل اشتراك سنوي يجي عن طريقك.',
    es: 'Únete al programa de socios, comparte The English Hub con las personas que confían en tus recomendaciones y gana comisión recurrente por cada suscripción anual que refieras.',
  },
  'aff_comp.public.bottom_cta.button': {
    en: 'Get your referral code',
    ar: 'احصل على كود الإحالة حقّك',
    es: 'Consigue tu código de referido',
  },

  /* ─── Post templates (EN inferred from PostTemplates context) ── */
  'aff_comp.public.templates.heading': {
    en: 'Starter post templates',
    ar: 'قوالب منشورات للبداية',
    es: 'Plantillas de publicación para empezar',
  },
  'aff_comp.public.templates.intro_part1': {
    en: 'Copy, tweak and post these on your channels. Always keep the',
    ar: 'انسخها، عدّلها، وانشرها على قنواتك. خلّ دايماً وسم',
    es: 'Copia, ajusta y publícalas en tus canales. Mantén siempre la',
  },
  'aff_comp.public.templates.intro_part2': {
    en: 'disclosure so your audience knows it is a paid partnership.',
    ar: 'موجود عشان جمهورك يعرف إنها شراكة مدفوعة.',
    es: 'divulgación para que tu audiencia sepa que es una colaboración pagada.',
  },
  'aff_comp.public.templates.disclosure_title': {
    en: 'Disclosure is required',
    ar: 'الإفصاح مطلوب',
    es: 'La divulgación es obligatoria',
  },
  'aff_comp.public.templates.disclosure_body_part1': {
    en: 'must be clearly visible whenever you promote with your referral link or code.',
    ar: 'لازم يكون واضح وبيّن كل ما تروّج برابط الإحالة أو الكود حقّك.',
    es: 'debe verse con claridad siempre que promociones con tu enlace o código de referido.',
  },
  'aff_comp.public.templates.disclosure_body_part2': {
    en: 'Put the',
    ar: 'حُط',
    es: 'Coloca la',
  },
  'aff_comp.public.templates.disclosure_body_part3': {
    en: 'label where people can see it before they click - not buried in hashtags or hidden in a "more" link.',
    ar: 'الوسم في مكان يشوفه الناس قبل ما يضغطون - مو مدفون بين الهاشتاقات ولا مخبّى في رابط «المزيد».',
    es: 'etiqueta donde la gente pueda verla antes de hacer clic, no enterrada en hashtags ni oculta en un enlace de "más".',
  },
}
