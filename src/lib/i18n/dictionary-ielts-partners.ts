/**
 * IELTS Partnerships i18n dictionary entries (ielts.partners.*).
 *
 * Covers the three institutional MARKETING pages under /ielts/partners:
 *   - /ielts/partners              (overview)
 *   - /ielts/partners/for-schools  (schools & exam centres)
 *   - /ielts/partners/for-agencies (education agencies)
 *
 * English + Khaleeji (Gulf) Arabic. Kept in a separate module to avoid
 * merge churn on the main dictionary.ts; wired into lookup() centrally.
 *
 * Khaleeji conventions follow dictionary.ts (شنو/شلون/أبغى/وايد/الحين/
 * إحنا …). Brand + technical terms stay Latin even inside Arabic text:
 *   IELTS, British Council, UCAS, The English Hub.
 *
 * COMPLIANCE (hard requirement): The English Hub is NOT an official
 * British Council / IELTS partner and NOT an accredited UCAS / university
 * recruitment agent. Every reference to those programmes is framed as
 * roadmap / intent ("نسعى لـ / نشتغل على / نتماشى مع"), and the explicit
 * "not currently…" caveat blocks are translated in full - NOT softened or
 * dropped - in the *.caveat keys below.
 */

import type { Dictionary } from './dictionary'

export const IELTS_PARTNERS_DICTIONARY: Dictionary = {
  // ══════════════════════════════════════════════════════════════════════
  // /ielts/partners - overview
  // ══════════════════════════════════════════════════════════════════════

  // ─── Hero ────────────────────────────────────────────────────────────
  'ielts.partners.overview.hero.eyebrow': {
    en: 'Partnerships',
    ar: 'الشراكات',
    es: 'Alianzas',
  },
  'ielts.partners.overview.hero.h1': {
    en: 'Bring AI-marked IELTS preparation to your learners',
    ar: 'وفّر لطلابك تحضير IELTS مع تصحيح بالذكاء الاصطناعي',
    es: 'Lleva la preparación de IELTS corregida con IA a tus estudiantes',
  },
  'ielts.partners.overview.hero.lede': {
    en: 'The English Hub is an IELTS Academic preparation platform built for schools, exam-prep centres and education agencies - with bulk access, a centre dashboard, bilingual English / Arabic delivery and instant AI band feedback.',
    ar: 'The English Hub منصّة تحضير IELTS Academic مبنية للمدارس ومراكز التحضير للامتحانات ووكالات التعليم - مع وصول جماعي، ولوحة تحكّم للمركز، وتجربة ثنائية اللغة إنجليزي / عربي، وتغذية راجعة فورية للـ band بالذكاء الاصطناعي.',
    es: 'The English Hub es una plataforma de preparación de IELTS Academic creada para colegios, centros de preparación de exámenes y agencias educativas, con acceso por volumen, un panel de centro, una experiencia bilingüe inglés / árabe y feedback de banda instantáneo con IA.',
  },
  'ielts.partners.overview.hero.cta_primary': {
    en: 'Talk to us about partnering',
    ar: 'كلّمنا عن الشراكة',
    es: 'Habla con nosotros sobre alianzas',
  },
  'ielts.partners.overview.hero.cta_secondary': {
    en: 'Explore the IELTS platform',
    ar: 'شوف منصّة IELTS',
    es: 'Explora la plataforma de IELTS',
  },
  'ielts.partners.overview.hero.pill_schools': {
    en: 'Schools & colleges',
    ar: 'المدارس والكليّات',
    es: 'Colegios y centros educativos',
  },
  'ielts.partners.overview.hero.pill_centres': {
    en: 'Exam-prep centres',
    ar: 'مراكز التحضير للامتحانات',
    es: 'Centros de preparación de exámenes',
  },
  'ielts.partners.overview.hero.pill_agencies': {
    en: 'Education agencies',
    ar: 'وكالات التعليم',
    es: 'Agencias educativas',
  },
  // Latin/Arabic bilingual pill - keep the dual-script form in both locales.
  'ielts.partners.overview.hero.pill_bilingual': {
    en: 'English / العربية',
    ar: 'English / العربية',
    es: 'English / العربية',
  },

  // ─── Offerings section ───────────────────────────────────────────────
  'ielts.partners.overview.offer.eyebrow': {
    en: 'What partners get',
    ar: 'شنو يحصل عليه الشركاء',
    es: 'Qué obtienen los socios',
  },
  'ielts.partners.overview.offer.heading': {
    en: 'A complete IELTS preparation platform, ready for your cohort',
    ar: 'منصّة تحضير IELTS متكاملة، جاهزة لدفعتك',
    es: 'Una plataforma completa de preparación de IELTS, lista para tu grupo',
  },
  'ielts.partners.overview.offer.lede': {
    en: 'Everything in the Wave 1 learning loop, packaged for institutional delivery - so your learners practise the whole Academic test and you can see how they are progressing.',
    ar: 'كل شي في حلقة التعلّم Wave 1، مجهّز للتقديم المؤسسي - عشان طلابك يتدرّبون على امتحان Academic كامل وإنت تشوف شلون يتقدّمون.',
    es: 'Todo el ciclo de aprendizaje de la Wave 1, empaquetado para la entrega institucional, para que tus estudiantes practiquen todo el examen Academic y tú puedas ver cómo progresan.',
  },
  'ielts.partners.overview.offer.bulk.title': {
    en: 'Bulk learner access',
    ar: 'وصول جماعي للطلاب',
    es: 'Acceso por volumen para estudiantes',
  },
  'ielts.partners.overview.offer.bulk.body': {
    en: 'Onboard a cohort in one step and assign the full IELTS Academic learning loop - diagnostic, study plan, four-skill practice and mock tests - to every learner under one agreement.',
    ar: 'سجّل الدفعة بخطوة وحدة وعيّن حلقة تعلّم IELTS Academic الكاملة - التشخيص، وخطة الدراسة، وتدريب المهارات الأربع، والامتحانات التجريبية - لكل طالب تحت اتفاقية وحدة.',
    es: 'Incorpora a un grupo en un solo paso y asigna el ciclo completo de aprendizaje de IELTS Academic (diagnóstico, plan de estudio, práctica de las cuatro destrezas y exámenes simulados) a cada estudiante bajo un único acuerdo.',
  },
  'ielts.partners.overview.offer.dashboard.title': {
    en: 'A centre dashboard',
    ar: 'لوحة تحكّم للمركز',
    es: 'Un panel de centro',
  },
  'ielts.partners.overview.offer.dashboard.body': {
    en: 'Track starting bands, practice volume and predicted overall bands across your cohort, so coordinators can see who is on track and who needs a nudge before test day.',
    ar: 'تابع الـ bands الابتدائية، وكمية التدريب، والـ band الإجمالي المتوقّع عبر دفعتك، عشان المنسّقين يشوفون مين على المسار ومين يحتاج دفعة قبل يوم الامتحان.',
    es: 'Haz seguimiento de las bandas de partida, el volumen de práctica y las bandas globales predichas de tu grupo, para que los coordinadores vean quién va por buen camino y quién necesita un empujón antes del día del examen.',
  },
  'ielts.partners.overview.offer.bilingual.title': {
    en: 'Bilingual English / Arabic',
    ar: 'ثنائي اللغة إنجليزي / عربي',
    es: 'Bilingüe inglés / árabe',
  },
  'ielts.partners.overview.offer.bilingual.body': {
    en: 'Every learner-facing screen works in English or Arabic, so instructions never get in the way of the practice for Gulf students building towards an English-medium future.',
    ar: 'كل شاشة يشوفها الطالب تشتغل بالإنجليزي أو العربي، عشان التعليمات ما تصير حاجز قدّام التدريب لطلاب الخليج اللي يبنون مستقبلهم بلغة دراسة إنجليزية.',
    es: 'Cada pantalla que ve el estudiante funciona en inglés o árabe, para que las instrucciones nunca se interpongan en la práctica de los estudiantes del Golfo que avanzan hacia un futuro en inglés.',
  },
  'ielts.partners.overview.offer.feedback.title': {
    en: 'Instant AI band feedback',
    ar: 'تغذية راجعة فورية للـ band بالذكاء الاصطناعي',
    es: 'Feedback de banda instantáneo con IA',
  },
  'ielts.partners.overview.offer.feedback.body': {
    en: 'Writing and Speaking responses are scored against the official band descriptors in seconds, with targeted next steps - extending your teachers rather than replacing them.',
    ar: 'إجابات Writing و Speaking تتصحّح حسب واصفات الـ band الرسمية بثواني، مع خطوات تالية محدّدة - تعزّز مدرّسينك بدل ما تستبدلهم.',
    es: 'Las respuestas de Writing y Speaking se puntúan según los descriptores oficiales de banda en segundos, con próximos pasos concretos, ampliando a tus profesores en lugar de reemplazarlos.',
  },
  'ielts.partners.overview.offer.progress.title': {
    en: 'Progress you can report on',
    ar: 'تقدّم تقدر ترفع عنه تقرير',
    es: 'Un progreso del que puedes informar',
  },
  'ielts.partners.overview.offer.progress.body': {
    en: 'Per-skill bands and trend lines give you the evidence to show learners, parents and stakeholders how preparation is translating into measurable gains.',
    ar: 'الـ bands لكل مهارة وخطوط الاتجاه تعطيك الدليل تورّي فيه الطلاب والأهالي والمعنيين شلون التحضير يتحوّل لتقدّم ملموس.',
    es: 'Las bandas por destreza y las líneas de tendencia te dan la evidencia para mostrar a estudiantes, familias y partes interesadas cómo la preparación se traduce en avances medibles.',
  },
  'ielts.partners.overview.offer.mocks.title': {
    en: 'Full, timed mock tests',
    ar: 'امتحانات تجريبية كاملة ومؤقّتة',
    es: 'Exámenes simulados completos y cronometrados',
  },
  'ielts.partners.overview.offer.mocks.body': {
    en: 'Learners sit complete Academic mocks under exam conditions, so the jump to the real test feels familiar - and your centre gets a defensible predicted band.',
    ar: 'الطلاب يقدّمون امتحانات Academic تجريبية كاملة بظروف الامتحان، عشان الانتقال للامتحان الحقيقي يصير مألوف - ومركزك يحصل على band متوقّع يقدر يدافع عنه.',
    es: 'Los estudiantes hacen simulacros Academic completos en condiciones de examen, para que el salto a la prueba real resulte familiar, y tu centro obtiene una banda predicha defendible.',
  },

  // ─── Audiences section ───────────────────────────────────────────────
  'ielts.partners.overview.audience.eyebrow': {
    en: 'Who we work with',
    ar: 'مع مين نشتغل',
    es: 'Con quién trabajamos',
  },
  'ielts.partners.overview.audience.heading': {
    en: 'Built for the institutions preparing IELTS candidates',
    ar: 'مبنية للمؤسسات اللي تحضّر مرشّحي IELTS',
    es: 'Creada para las instituciones que preparan a candidatos de IELTS',
  },
  'ielts.partners.overview.audience.schools.label': {
    en: 'Schools & colleges',
    ar: 'المدارس والكليّات',
    es: 'Colegios y centros educativos',
  },
  'ielts.partners.overview.audience.schools.headline': {
    en: 'IELTS for sixth forms and international schools',
    ar: 'IELTS للصفوف الثانوية والمدارس الدولية',
    es: 'IELTS para bachillerato y colegios internacionales',
  },
  'ielts.partners.overview.audience.schools.body': {
    en: 'Add a structured, AI-marked IELTS pathway alongside your existing English provision - ideal for GCC schools preparing students for English-medium universities.',
    ar: 'ضِف مسار IELTS منظّم ومصحّح بالذكاء الاصطناعي جنب برنامج الإنجليزي الموجود عندك - مثالي لمدارس الخليج اللي تحضّر الطلاب لجامعات بلغة دراسة إنجليزية.',
    es: 'Añade un itinerario de IELTS estructurado y corregido con IA junto a tu oferta de inglés actual: ideal para colegios del CCG que preparan a estudiantes para universidades en inglés.',
  },
  'ielts.partners.overview.audience.schools.cta': {
    en: 'For schools',
    ar: 'للمدارس',
    es: 'Para colegios',
  },
  'ielts.partners.overview.audience.centres.label': {
    en: 'Exam-prep centres',
    ar: 'مراكز التحضير للامتحانات',
    es: 'Centros de preparación de exámenes',
  },
  'ielts.partners.overview.audience.centres.headline': {
    en: 'A platform behind your tutors',
    ar: 'منصّة تسند مدرّسينك',
    es: 'Una plataforma que respalda a tus tutores',
  },
  'ielts.partners.overview.audience.centres.body': {
    en: 'Give your teaching team automatic marking, ready-made practice and cohort analytics so they can spend their hours on teaching, not admin.',
    ar: 'اعطِ فريق التدريس عندك تصحيح آلي، وتدريبات جاهزة، وتحليلات للدفعة عشان يصرفون ساعاتهم على التدريس، مو على الأعمال الإدارية.',
    es: 'Da a tu equipo docente corrección automática, práctica lista para usar y analíticas de grupo, para que puedan dedicar sus horas a enseñar, no a la administración.',
  },
  'ielts.partners.overview.audience.centres.cta': {
    en: 'For centres',
    ar: 'للمراكز',
    es: 'Para centros',
  },
  'ielts.partners.overview.audience.agencies.label': {
    en: 'Education agencies',
    ar: 'وكالات التعليم',
    es: 'Agencias educativas',
  },
  'ielts.partners.overview.audience.agencies.headline': {
    en: 'Get applicants test-ready',
    ar: 'خلّ المتقدّمين جاهزين للامتحان',
    es: 'Prepara a los solicitantes para el examen',
  },
  'ielts.partners.overview.audience.agencies.body': {
    en: 'Help the students you place reach the band their destination requires, and show universities the evidence behind every application.',
    ar: 'ساعد الطلاب اللي تنسّب لهم يوصلون للـ band اللي تطلبه وجهتهم، وورّي الجامعات الدليل وراء كل طلب.',
    es: 'Ayuda a los estudiantes que colocas a alcanzar la banda que exige su destino, y muestra a las universidades la evidencia detrás de cada solicitud.',
  },
  'ielts.partners.overview.audience.agencies.cta': {
    en: 'For agencies',
    ar: 'للوكالات',
    es: 'Para agencias',
  },

  // ─── Why The English Hub section ─────────────────────────────────────
  'ielts.partners.overview.why.eyebrow': {
    en: 'Why The English Hub',
    ar: 'ليش The English Hub',
    es: 'Por qué The English Hub',
  },
  'ielts.partners.overview.why.heading': {
    en: 'A preparation partner that extends your team',
    ar: 'شريك تحضير يعزّز فريقك',
    es: 'Un socio de preparación que amplía tu equipo',
  },
  'ielts.partners.overview.why.feedback.title': {
    en: 'Feedback that used to need a tutor',
    ar: 'تغذية راجعة كانت تحتاج مدرّس',
    es: 'Feedback que antes requería un tutor',
  },
  'ielts.partners.overview.why.feedback.body': {
    en: 'AI band scoring on every Writing and Speaking attempt means learners improve between lessons, not only during them.',
    ar: 'تصحيح الـ band بالذكاء الاصطناعي على كل محاولة Writing و Speaking يعني الطلاب يتحسّنون بين الدروس، مو بس خلالها.',
    es: 'La puntuación de banda con IA en cada intento de Writing y Speaking hace que los estudiantes mejoren entre clases, no solo durante ellas.',
  },
  'ielts.partners.overview.why.bilingual.title': {
    en: 'Built bilingual for Gulf learners',
    ar: 'مبنية ثنائية اللغة لطلاب الخليج',
    es: 'Creada bilingüe para estudiantes del Golfo',
  },
  'ielts.partners.overview.why.bilingual.body': {
    en: 'English / Arabic throughout - purpose-built for the schools, centres and agencies we work with across the Gulf.',
    ar: 'إنجليزي / عربي من البداية للنهاية - مبنية خصّيصاً للمدارس والمراكز والوكالات اللي نشتغل معها بالخليج.',
    es: 'Inglés / árabe de principio a fin: hecha a medida para los colegios, centros y agencias con los que trabajamos en todo el Golfo.',
  },
  'ielts.partners.overview.why.loop.title': {
    en: 'A complete, repeatable loop',
    ar: 'حلقة متكاملة تتكرّر',
    es: 'Un ciclo completo y repetible',
  },
  'ielts.partners.overview.why.loop.body': {
    en: 'Diagnose, plan, practise, get feedback, mock, predict - one loop your learners run until they hit their target band.',
    ar: 'تشخيص، وتخطيط، وتدريب، وتغذية راجعة، وامتحان تجريبي، وتوقّع - حلقة وحدة يكرّرها طلابك لين يوصلون للـ band المستهدف.',
    es: 'Diagnosticar, planificar, practicar, recibir feedback, simular, predecir: un único ciclo que tus estudiantes repiten hasta alcanzar su banda objetivo.',
  },

  // ─── Roadmap section (INTENT framing) ────────────────────────────────
  'ielts.partners.overview.roadmap.eyebrow': {
    en: 'Our roadmap',
    ar: 'خارطة طريقنا',
    es: 'Nuestra hoja de ruta',
  },
  'ielts.partners.overview.roadmap.heading': {
    en: 'The standards we are building towards',
    ar: 'المعايير اللي نشتغل عشان نوصلها',
    es: 'Los estándares hacia los que estamos trabajando',
  },
  'ielts.partners.overview.roadmap.lede': {
    en: 'We hold ourselves to recognised standards as we grow. The accreditations and relationships below are routes we are actively pursuing - not affiliations we currently hold.',
    ar: 'نلتزم بمعايير معترف فيها ونحن نكبر. الاعتمادات والعلاقات اللي تحت طُرق نسعى لها بجدّ - مو ارتباطات نملكها الحين.',
    es: 'Nos exigimos estándares reconocidos a medida que crecemos. Las acreditaciones y relaciones de abajo son vías que estamos buscando activamente, no afiliaciones que tengamos actualmente.',
  },
  'ielts.partners.overview.roadmap.panel_eyebrow': {
    en: 'Pursuing & aligning to',
    ar: 'نسعى لها ونتماشى معها',
    es: 'Buscando y alineándonos con',
  },
  'ielts.partners.overview.roadmap.badge': {
    en: 'Pursuing',
    ar: 'قيد السعي',
    es: 'En proceso',
  },
  'ielts.partners.overview.roadmap.bc.title': {
    en: 'British Council UK Agent Hub',
    ar: 'British Council UK Agent Hub',
    es: 'British Council UK Agent Hub',
  },
  'ielts.partners.overview.roadmap.bc.body': {
    en: 'We are working towards the standards set out by the British Council UK Agent Hub and intend to pursue certification, so partner agencies can have confidence in how we operate.',
    ar: 'نشتغل عشان نوصل للمعايير اللي حطّها British Council UK Agent Hub وننوي نسعى للاعتماد، عشان الوكالات الشريكة تثق بطريقة شغلنا.',
    es: 'Estamos trabajando hacia los estándares establecidos por el British Council UK Agent Hub y tenemos la intención de buscar la certificación, para que las agencias asociadas puedan confiar en cómo operamos.',
  },
  'ielts.partners.overview.roadmap.ipp.title': {
    en: 'IELTS Partnership Programme',
    ar: 'IELTS Partnership Programme',
    es: 'IELTS Partnership Programme',
  },
  'ielts.partners.overview.roadmap.ipp.body': {
    en: 'We are aligning our preparation content and assessment practice with official IELTS criteria and intend to apply to the IELTS Partnership Programme as the platform matures.',
    ar: 'نتماشى بمحتوى التحضير وممارسة التقييم عندنا مع معايير IELTS الرسمية وننوي نقدّم على IELTS Partnership Programme مع نضج المنصّة.',
    es: 'Estamos alineando nuestro contenido de preparación y nuestra práctica de evaluación con los criterios oficiales de IELTS y tenemos la intención de solicitar el ingreso en el IELTS Partnership Programme a medida que la plataforma madure.',
  },
  'ielts.partners.overview.roadmap.uni.title': {
    en: 'UK university recruitment relationships',
    ar: 'علاقات استقطاب مع جامعات بريطانية',
    es: 'Relaciones de captación con universidades británicas',
  },
  'ielts.partners.overview.roadmap.uni.body': {
    en: 'We are pursuing relationships with UK universities and their recruitment teams, with the goal of supporting applicants through a recognised, standards-aligned preparation route.',
    ar: 'نسعى لعلاقات مع جامعات بريطانية وفِرَق الاستقطاب عندها، بهدف ندعم المتقدّمين من خلال مسار تحضير معترف فيه ومتماشي مع المعايير.',
    es: 'Estamos buscando relaciones con universidades británicas y sus equipos de captación, con el objetivo de apoyar a los solicitantes a través de una vía de preparación reconocida y alineada con los estándares.',
  },
  // CRITICAL caveat - translated in full, "not currently…" disclaimers kept.
  'ielts.partners.overview.roadmap.caveat': {
    en: 'The English Hub is an independent IELTS preparation provider. We are not currently an official British Council or IELTS partner, and we are not an accredited UCAS or university recruitment agent. References to the British Council UK Agent Hub, the IELTS Partnership Programme and university recruitment relationships describe standards we align to and routes we are pursuing, and do not imply any existing affiliation, accreditation or endorsement.',
    ar: 'The English Hub مزوّد مستقل لتحضير IELTS. إحنا لسنا الحين شريك رسمي لـ British Council أو IELTS، ولسنا وكيل استقطاب معتمد لـ UCAS أو للجامعات. الإشارات إلى British Council UK Agent Hub و IELTS Partnership Programme وعلاقات الاستقطاب مع الجامعات توصف معايير نتماشى معها وطُرق نسعى لها، وما تعني وجود أي ارتباط أو اعتماد أو تأييد قائم.',
    es: 'The English Hub es un proveedor independiente de preparación de IELTS. Actualmente no somos socio oficial del British Council ni de IELTS, y no somos un agente acreditado de captación de UCAS ni de universidades. Las referencias al British Council UK Agent Hub, al IELTS Partnership Programme y a las relaciones de captación con universidades describen estándares con los que nos alineamos y vías que estamos buscando, y no implican ninguna afiliación, acreditación o respaldo existente.',
  },

  // ─── CTA section ─────────────────────────────────────────────────────
  'ielts.partners.overview.cta.heading': {
    en: 'Let’s scope a pilot for your learners',
    ar: 'خلّنا نحدّد نطاق تجربة لطلابك',
    es: 'Definamos un piloto para tus estudiantes',
  },
  'ielts.partners.overview.cta.lede': {
    en: 'Tell us about your school, centre or agency and the cohort you have in mind. We will follow up to talk through access, the centre dashboard and a pilot that fits your timeline.',
    ar: 'خبّرنا عن مدرستك أو مركزك أو وكالتك والدفعة اللي ببالك. بنتواصل وياك عشان نتكلّم عن الوصول، ولوحة تحكّم المركز، وتجربة تناسب جدولك الزمني.',
    es: 'Cuéntanos sobre tu colegio, centro o agencia y el grupo que tienes en mente. Te contactaremos para hablar del acceso, el panel de centro y un piloto que se ajuste a tu calendario.',
  },
  'ielts.partners.overview.cta.bullet_walkthrough': {
    en: 'A walkthrough of the platform and centre dashboard',
    ar: 'جولة على المنصّة ولوحة تحكّم المركز',
    es: 'Un recorrido por la plataforma y el panel de centro',
  },
  'ielts.partners.overview.cta.bullet_bulk': {
    en: 'Bulk access and bilingual delivery for your cohort',
    ar: 'وصول جماعي وتجربة ثنائية اللغة لدفعتك',
    es: 'Acceso por volumen y experiencia bilingüe para tu grupo',
  },
  'ielts.partners.overview.cta.bullet_pilot': {
    en: 'A pilot scoped to your test-prep calendar',
    ar: 'تجربة محدّدة حسب جدول التحضير للامتحانات عندك',
    es: 'Un piloto ajustado a tu calendario de preparación de exámenes',
  },
  'ielts.partners.overview.cta.button': {
    en: 'Talk to us about partnering',
    ar: 'كلّمنا عن الشراكة',
    es: 'Habla con nosotros sobre alianzas',
  },

  // ── Overview FAQ (visible accordion copy; JSON-LD stays English) ──────
  'ielts.partners.overview.faq.q1': {
    en: 'Is The English Hub an official British Council or IELTS partner?',
    ar: 'هل The English Hub شريك رسمي لـ British Council أو IELTS؟',
    es: '¿Es The English Hub un socio oficial del British Council o de IELTS?',
  },
  'ielts.partners.overview.faq.a1': {
    en: 'Not currently. The English Hub is an independent IELTS Academic preparation platform. Official British Council and IELTS partnerships are routes we are actively pursuing and standards we align our content and assessment practice to - we will only describe ourselves as holding an affiliation once it is formally granted.',
    ar: 'مو الحين. The English Hub منصّة مستقلة لتحضير IELTS Academic. الشراكات الرسمية مع British Council و IELTS طُرق نسعى لها بجدّ ومعايير نتماشى معها بمحتوانا وممارسة التقييم عندنا - وما بنوصف نفسنا إننا نملك ارتباط إلا بعد ما يُمنح رسمياً.',
    es: 'Actualmente no. The English Hub es una plataforma independiente de preparación de IELTS Academic. Las alianzas oficiales con el British Council y con IELTS son vías que estamos buscando activamente y estándares con los que alineamos nuestro contenido y nuestra práctica de evaluación; solo nos describiremos como poseedores de una afiliación una vez que se conceda formalmente.',
  },
  'ielts.partners.overview.faq.q2': {
    en: 'Do you deliver the IELTS test itself?',
    ar: 'هل تقدّمون امتحان IELTS نفسه؟',
    es: '¿Administran el propio examen de IELTS?',
  },
  'ielts.partners.overview.faq.a2': {
    en: 'No. We provide preparation - diagnostic placement, a personalised study plan, four-skill practice, AI band feedback and full mock tests. The official IELTS test is sat through authorised test centres.',
    ar: 'لا. إحنا نوفّر التحضير - تشخيص لتحديد المستوى، وخطة دراسة مخصّصة، وتدريب المهارات الأربع، وتغذية راجعة للـ band بالذكاء الاصطناعي، وامتحانات تجريبية كاملة. امتحان IELTS الرسمي يتقدّم من خلال مراكز امتحان معتمدة.',
    es: 'No. Ofrecemos preparación: diagnóstico de nivel, un plan de estudio personalizado, práctica de las cuatro destrezas, feedback de banda con IA y exámenes simulados completos. El examen oficial de IELTS se realiza a través de centros de examen autorizados.',
  },
  'ielts.partners.overview.faq.q3': {
    en: 'What does a partnership give our learners?',
    ar: 'شنو تعطي الشراكة لطلابنا؟',
    es: '¿Qué obtienen nuestros estudiantes con una alianza?',
  },
  'ielts.partners.overview.faq.a3': {
    en: 'Bulk access to the full IELTS Academic learning loop, a centre dashboard for tracking cohort progress and predicted bands, bilingual English / Arabic delivery, and instant AI feedback on Writing and Speaking against the official band descriptors.',
    ar: 'وصول جماعي لحلقة تعلّم IELTS Academic الكاملة، ولوحة تحكّم للمركز لمتابعة تقدّم الدفعة والـ bands المتوقّعة، وتجربة ثنائية اللغة إنجليزي / عربي، وتغذية راجعة فورية بالذكاء الاصطناعي على Writing و Speaking حسب واصفات الـ band الرسمية.',
    es: 'Acceso por volumen al ciclo completo de aprendizaje de IELTS Academic, un panel de centro para hacer seguimiento del progreso del grupo y de las bandas predichas, una experiencia bilingüe inglés / árabe y feedback instantáneo con IA sobre Writing y Speaking según los descriptores oficiales de banda.',
  },
  'ielts.partners.overview.faq.q4': {
    en: 'Can teachers see how their cohort is progressing?',
    ar: 'هل يقدر المدرّسين يشوفون شلون تتقدّم دفعتهم؟',
    es: '¿Pueden los profesores ver cómo progresa su grupo?',
  },
  'ielts.partners.overview.faq.a4': {
    en: 'Yes. The centre dashboard surfaces starting bands, practice activity and predicted overall bands across the cohort, so coordinators can identify who is on track and intervene early where needed.',
    ar: 'إي. لوحة تحكّم المركز تعرض الـ bands الابتدائية، ونشاط التدريب، والـ band الإجمالي المتوقّع عبر الدفعة، عشان المنسّقين يعرفون مين على المسار ويتدخّلون بدري لمّن يحتاج الأمر.',
    es: 'Sí. El panel de centro muestra las bandas de partida, la actividad de práctica y las bandas globales predichas de todo el grupo, para que los coordinadores identifiquen quién va por buen camino e intervengan pronto donde haga falta.',
  },
  'ielts.partners.overview.faq.q5': {
    en: 'Is the platform suitable for Arabic-speaking students?',
    ar: 'هل المنصّة مناسبة للطلاب اللي يتكلّمون عربي؟',
    es: '¿Es la plataforma adecuada para estudiantes de habla árabe?',
  },
  'ielts.partners.overview.faq.a5': {
    en: 'Yes. Every learner-facing screen is available in English or Arabic, so instructions and navigation never become a barrier to the practice itself. It is purpose-built for Gulf learners.',
    ar: 'إي. كل شاشة يشوفها الطالب متوفّرة بالإنجليزي أو العربي، عشان التعليمات والتنقّل ما يصيرون حاجز قدّام التدريب نفسه. مبنية خصّيصاً لطلاب الخليج.',
    es: 'Sí. Cada pantalla que ve el estudiante está disponible en inglés o árabe, de modo que las instrucciones y la navegación nunca se convierten en una barrera para la propia práctica. Está hecha a medida para los estudiantes del Golfo.',
  },
  'ielts.partners.overview.faq.q6': {
    en: 'How do we start a conversation about partnering?',
    ar: 'شلون نبدأ كلام عن الشراكة؟',
    es: '¿Cómo iniciamos una conversación sobre alianzas?',
  },
  'ielts.partners.overview.faq.a6': {
    en: 'Get in touch through our contact page with a little about your school, centre or agency and the cohort you have in mind, and we will follow up to scope a pilot.',
    ar: 'تواصل ويانا عبر صفحة التواصل وخبّرنا شوي عن مدرستك أو مركزك أو وكالتك والدفعة اللي ببالك، وبنتابع وياك عشان نحدّد نطاق تجربة.',
    es: 'Ponte en contacto a través de nuestra página de contacto con algunos datos sobre tu colegio, centro o agencia y el grupo que tienes en mente, y te contactaremos para definir un piloto.',
  },

  // ══════════════════════════════════════════════════════════════════════
  // /ielts/partners/for-schools
  // ══════════════════════════════════════════════════════════════════════

  // ─── Hero ────────────────────────────────────────────────────────────
  'ielts.partners.schools.hero.eyebrow': {
    en: 'For schools & exam centres',
    ar: 'للمدارس ومراكز الامتحانات',
    es: 'Para colegios y centros de examen',
  },
  'ielts.partners.schools.hero.h1': {
    en: 'An IELTS pathway your department can run with confidence',
    ar: 'مسار IELTS يقدر قسمك يشغّله بثقة',
    es: 'Un itinerario de IELTS que tu departamento puede gestionar con confianza',
  },
  'ielts.partners.schools.hero.lede': {
    en: 'Give your students AI-marked IELTS Academic preparation, give your teachers their time back, and give your coordinators a clear view of who is on track - bilingual in English and Arabic throughout.',
    ar: 'وفّر لطلابك تحضير IELTS Academic مصحّح بالذكاء الاصطناعي، ورجّع لمدرّسينك وقتهم، واعطِ منسّقينك رؤية واضحة لمين على المسار - ثنائي اللغة إنجليزي وعربي من البداية للنهاية.',
    es: 'Da a tus estudiantes preparación de IELTS Academic corregida con IA, devuelve a tus profesores su tiempo y ofrece a tus coordinadores una visión clara de quién va por buen camino, todo bilingüe en inglés y árabe de principio a fin.',
  },
  'ielts.partners.schools.hero.cta_primary': {
    en: 'Book a pilot conversation',
    ar: 'احجز جلسة عن التجربة',
    es: 'Reserva una conversación sobre el piloto',
  },
  'ielts.partners.schools.hero.cta_secondary': {
    en: 'All partnership options',
    ar: 'كل خيارات الشراكة',
    es: 'Todas las opciones de alianza',
  },

  // ─── Challenges section ──────────────────────────────────────────────
  'ielts.partners.schools.challenge.eyebrow': {
    en: 'The challenge',
    ar: 'التحدّي',
    es: 'El reto',
  },
  'ielts.partners.schools.challenge.heading': {
    en: 'Standing up IELTS provision is hard work',
    ar: 'تأسيس برنامج IELTS شغل صعب',
    es: 'Poner en marcha una oferta de IELTS es un trabajo arduo',
  },
  'ielts.partners.schools.challenge.marking': {
    en: 'Marking IELTS Writing and Speaking by hand is slow, so learners wait days for the feedback that would actually move their band.',
    ar: 'تصحيح Writing و Speaking في IELTS باليد بطيء، فالطلاب ينتظرون أيام عشان التغذية الراجعة اللي بترفع الـ band فعلاً.',
    es: 'Corregir a mano el Writing y el Speaking de IELTS es lento, así que los estudiantes esperan días por el feedback que de verdad subiría su banda.',
  },
  'ielts.partners.schools.challenge.data': {
    en: 'Without per-skill data it is hard to know which students are on track for their target band and which need an intervention now.',
    ar: 'بدون بيانات لكل مهارة، صعب تعرف أي طلاب على المسار للـ band المستهدف وأيهم يحتاج تدخّل الحين.',
    es: 'Sin datos por destreza es difícil saber qué estudiantes van por buen camino hacia su banda objetivo y cuáles necesitan una intervención ahora.',
  },
  'ielts.partners.schools.challenge.barrier': {
    en: 'English-only resources add a comprehension barrier for Arabic-speaking learners who are still building academic English.',
    ar: 'الموارد بالإنجليزي بس تضيف حاجز فهم للطلاب اللي يتكلّمون عربي ولسّا يبنون إنجليزيتهم الأكاديمية.',
    es: 'Los recursos solo en inglés añaden una barrera de comprensión para los estudiantes de habla árabe que aún están construyendo su inglés académico.',
  },
  'ielts.partners.schools.challenge.materials': {
    en: 'Sourcing enough exam-style practice and full mocks for a whole cohort is a constant drain on teacher time.',
    ar: 'توفير تدريبات كافية بنمط الامتحان وامتحانات تجريبية كاملة لدفعة كاملة يستنزف وقت المدرّس باستمرار.',
    es: 'Conseguir suficiente práctica con formato de examen y simulacros completos para todo un grupo es un desgaste constante del tiempo del profesorado.',
  },

  // ─── Features section ────────────────────────────────────────────────
  'ielts.partners.schools.features.eyebrow': {
    en: 'What your school gets',
    ar: 'شنو تحصل عليه مدرستك',
    es: 'Qué obtiene tu colegio',
  },
  'ielts.partners.schools.features.heading': {
    en: 'The whole IELTS loop, run for your cohort',
    ar: 'حلقة IELTS الكاملة، تشتغل لدفعتك',
    es: 'Todo el ciclo de IELTS, gestionado para tu grupo',
  },
  'ielts.partners.schools.features.cohort.title': {
    en: 'Onboard a whole cohort',
    ar: 'سجّل دفعة كاملة',
    es: 'Incorpora a un grupo completo',
  },
  'ielts.partners.schools.features.cohort.body': {
    en: 'Assign the full IELTS Academic learning loop - diagnostic, plan, four-skill practice and mocks - to every student under a single agreement.',
    ar: 'عيّن حلقة تعلّم IELTS Academic الكاملة - التشخيص، والخطة، وتدريب المهارات الأربع، والامتحانات التجريبية - لكل طالب تحت اتفاقية وحدة.',
    es: 'Asigna el ciclo completo de aprendizaje de IELTS Academic (diagnóstico, plan, práctica de las cuatro destrezas y simulacros) a cada estudiante bajo un único acuerdo.',
  },
  'ielts.partners.schools.features.feedback.title': {
    en: 'Instant AI band feedback',
    ar: 'تغذية راجعة فورية للـ band بالذكاء الاصطناعي',
    es: 'Feedback de banda instantáneo con IA',
  },
  'ielts.partners.schools.features.feedback.body': {
    en: 'Writing and Speaking are scored against the official descriptors in seconds, with concrete next steps your teachers can build a lesson around.',
    ar: 'Writing و Speaking يتصحّحون حسب الواصفات الرسمية بثواني، مع خطوات تالية ملموسة يقدر مدرّسينك يبنون درس حولها.',
    es: 'El Writing y el Speaking se puntúan según los descriptores oficiales en segundos, con próximos pasos concretos en torno a los que tus profesores pueden construir una clase.',
  },
  'ielts.partners.schools.features.dashboard.title': {
    en: 'A coordinator dashboard',
    ar: 'لوحة تحكّم للمنسّق',
    es: 'Un panel para el coordinador',
  },
  'ielts.partners.schools.features.dashboard.body': {
    en: 'See starting bands, practice activity and predicted overall bands across the cohort - so you spot the students who need support before test day.',
    ar: 'شوف الـ bands الابتدائية، ونشاط التدريب، والـ band الإجمالي المتوقّع عبر الدفعة - عشان تكتشف الطلاب اللي يحتاجون دعم قبل يوم الامتحان.',
    es: 'Consulta las bandas de partida, la actividad de práctica y las bandas globales predichas de todo el grupo, para detectar a los estudiantes que necesitan apoyo antes del día del examen.',
  },
  'ielts.partners.schools.features.bilingual.title': {
    en: 'Bilingual English / Arabic',
    ar: 'ثنائي اللغة إنجليزي / عربي',
    es: 'Bilingüe inglés / árabe',
  },
  'ielts.partners.schools.features.bilingual.body': {
    en: 'Every learner screen works in English or Arabic, removing the language barrier so Gulf students can focus on the IELTS skill itself.',
    ar: 'كل شاشة للطالب تشتغل بالإنجليزي أو العربي، وتشيل حاجز اللغة عشان طلاب الخليج يركّزون على مهارة IELTS نفسها.',
    es: 'Cada pantalla del estudiante funciona en inglés o árabe, eliminando la barrera del idioma para que los estudiantes del Golfo puedan centrarse en la propia destreza de IELTS.',
  },
  'ielts.partners.schools.features.practice.title': {
    en: 'Ready-made practice & mocks',
    ar: 'تدريبات وامتحانات تجريبية جاهزة',
    es: 'Práctica y simulacros listos para usar',
  },
  'ielts.partners.schools.features.practice.body': {
    en: 'Original Academic passages, tasks and full timed mock tests mean your team spends its hours teaching, not building materials.',
    ar: 'نصوص Academic أصلية، ومهام، وامتحانات تجريبية كاملة ومؤقّتة، يعني فريقك يصرف ساعاته على التدريس، مو على إعداد المواد.',
    es: 'Pasajes Academic originales, tareas y simulacros completos cronometrados hacen que tu equipo dedique sus horas a enseñar, no a crear materiales.',
  },
  'ielts.partners.schools.features.evidence.title': {
    en: 'Evidence for stakeholders',
    ar: 'دليل للمعنيين',
    es: 'Evidencia para las partes interesadas',
  },
  'ielts.partners.schools.features.evidence.body': {
    en: 'Per-skill bands and trend lines give you a defensible story to share with learners, parents and leadership about progress towards target bands.',
    ar: 'الـ bands لكل مهارة وخطوط الاتجاه تعطيك قصّة تقدر تدافع عنها تشاركها مع الطلاب والأهالي والإدارة عن التقدّم نحو الـ bands المستهدفة.',
    es: 'Las bandas por destreza y las líneas de tendencia te dan un relato defendible para compartir con estudiantes, familias y dirección sobre el progreso hacia las bandas objetivo.',
  },

  // ─── Use cases section ───────────────────────────────────────────────
  'ielts.partners.schools.usecase.eyebrow': {
    en: 'How schools use it',
    ar: 'شلون تستخدمها المدارس',
    es: 'Cómo lo usan los colegios',
  },
  'ielts.partners.schools.usecase.heading': {
    en: 'Three ways to deploy the platform',
    ar: 'ثلاث طُرق لنشر المنصّة',
    es: 'Tres formas de implementar la plataforma',
  },
  'ielts.partners.schools.usecase.sixthform.label': {
    en: 'Sixth form / Year 12-13',
    ar: 'الصف الثانوي / السنة 12-13',
    es: 'Bachillerato / Año 12-13',
  },
  'ielts.partners.schools.usecase.sixthform.headline': {
    en: 'A university-entry IELTS pathway',
    ar: 'مسار IELTS للالتحاق بالجامعة',
    es: 'Un itinerario de IELTS para el acceso a la universidad',
  },
  'ielts.partners.schools.usecase.sixthform.body': {
    en: 'Run a structured IELTS strand alongside your curriculum for students heading to English-medium universities, with predicted bands you can reference in references.',
    ar: 'شغّل مسار IELTS منظّم جنب منهجك للطلاب المتّجهين لجامعات بلغة دراسة إنجليزية، مع bands متوقّعة تقدر تشير لها في خطابات التوصية.',
    es: 'Ofrece una línea de IELTS estructurada junto a tu currículo para estudiantes que se dirigen a universidades en inglés, con bandas predichas que puedes citar en las cartas de recomendación.',
  },
  'ielts.partners.schools.usecase.intl.label': {
    en: 'International school',
    ar: 'مدرسة دولية',
    es: 'Colegio internacional',
  },
  'ielts.partners.schools.usecase.intl.headline': {
    en: 'English-medium readiness',
    ar: 'الجاهزية للدراسة بالإنجليزي',
    es: 'Preparación para estudiar en inglés',
  },
  'ielts.partners.schools.usecase.intl.body': {
    en: 'Support EAL and bilingual students towards the band their next stage requires, with practice that works in the language they are most comfortable navigating.',
    ar: 'ادعم طلاب EAL والطلاب ثنائيي اللغة نحو الـ band اللي تطلبه مرحلتهم الجاية، مع تدريب يشتغل باللغة اللي يرتاحون يتنقّلون فيها أكثر.',
    es: 'Apoya a los estudiantes de EAL y bilingües hacia la banda que exige su siguiente etapa, con práctica que funciona en el idioma en el que se manejan con más comodidad.',
  },
  'ielts.partners.schools.usecase.centre.label': {
    en: 'Exam-prep centre',
    ar: 'مركز تحضير للامتحانات',
    es: 'Centro de preparación de exámenes',
  },
  'ielts.partners.schools.usecase.centre.headline': {
    en: 'A platform behind your tutors',
    ar: 'منصّة تسند مدرّسينك',
    es: 'Una plataforma que respalda a tus tutores',
  },
  'ielts.partners.schools.usecase.centre.body': {
    en: 'Hand your teaching team automatic marking, cohort analytics and a deep bank of practice, so every contact hour goes further.',
    ar: 'سلّم فريق التدريس عندك تصحيح آلي، وتحليلات للدفعة، وبنك تدريبات عميق، عشان كل ساعة تواصل تعطي أكثر.',
    es: 'Entrega a tu equipo docente corrección automática, analíticas de grupo y un amplio banco de práctica, para que cada hora lectiva rinda más.',
  },

  // ─── CTA section ─────────────────────────────────────────────────────
  'ielts.partners.schools.cta.heading': {
    en: 'Bring IELTS preparation to your students',
    ar: 'وفّر تحضير IELTS لطلابك',
    es: 'Lleva la preparación de IELTS a tus estudiantes',
  },
  'ielts.partners.schools.cta.lede': {
    en: 'Tell us about your cohort and timeline, and we will scope a pilot that fits your department.',
    ar: 'خبّرنا عن دفعتك وجدولك الزمني، وبنحدّد نطاق تجربة تناسب قسمك.',
    es: 'Cuéntanos sobre tu grupo y tu calendario, y definiremos un piloto que se ajuste a tu departamento.',
  },
  'ielts.partners.schools.cta.bullet_walkthrough': {
    en: 'A platform and dashboard walkthrough for coordinators',
    ar: 'جولة على المنصّة ولوحة التحكّم للمنسّقين',
    es: 'Un recorrido por la plataforma y el panel para los coordinadores',
  },
  'ielts.partners.schools.cta.bullet_bulk': {
    en: 'Bulk access and bilingual delivery for your cohort',
    ar: 'وصول جماعي وتجربة ثنائية اللغة لدفعتك',
    es: 'Acceso por volumen y experiencia bilingüe para tu grupo',
  },
  'ielts.partners.schools.cta.bullet_pilot': {
    en: 'A pilot scoped to your test-prep calendar',
    ar: 'تجربة محدّدة حسب جدول التحضير للامتحانات عندك',
    es: 'Un piloto ajustado a tu calendario de preparación de exámenes',
  },
  'ielts.partners.schools.cta.button': {
    en: 'Book a pilot conversation',
    ar: 'احجز جلسة عن التجربة',
    es: 'Reserva una conversación sobre el piloto',
  },

  // ── Schools FAQ (visible accordion copy; JSON-LD stays English) ───────
  'ielts.partners.schools.faq.q1': {
    en: 'How do students access the platform?',
    ar: 'شلون الطلاب يوصلون للمنصّة؟',
    es: '¿Cómo acceden los estudiantes a la plataforma?',
  },
  'ielts.partners.schools.faq.a1': {
    en: 'Through bulk access set up under your partnership. Each student gets the full IELTS Academic learning loop, and coordinators get a dashboard view across the cohort.',
    ar: 'عبر وصول جماعي يتجهّز تحت شراكتك. كل طالب يحصل على حلقة تعلّم IELTS Academic الكاملة، والمنسّقين يحصلون على رؤية بلوحة تحكّم عبر الدفعة.',
    es: 'Mediante el acceso por volumen configurado bajo tu alianza. Cada estudiante obtiene el ciclo completo de aprendizaje de IELTS Academic, y los coordinadores obtienen una vista de panel de todo el grupo.',
  },
  'ielts.partners.schools.faq.q2': {
    en: 'Does this replace our teachers?',
    ar: 'هل هذا يستبدل مدرّسينا؟',
    es: '¿Esto reemplaza a nuestros profesores?',
  },
  'ielts.partners.schools.faq.a2': {
    en: 'No - it extends them. Automatic marking and AI band feedback handle the repetitive load so your teachers can spend their time on instruction, feedback conversations and intervention.',
    ar: 'لا - يعزّزهم. التصحيح الآلي والتغذية الراجعة للـ band بالذكاء الاصطناعي تتولّى الشغل المتكرّر عشان مدرّسينك يصرفون وقتهم على التدريس، وجلسات التغذية الراجعة، والتدخّل.',
    es: 'No, los amplía. La corrección automática y el feedback de banda con IA se encargan de la carga repetitiva para que tus profesores puedan dedicar su tiempo a la enseñanza, a las conversaciones de feedback y a la intervención.',
  },
  'ielts.partners.schools.faq.q3': {
    en: 'Is it suitable for Arabic-speaking students?',
    ar: 'هل هي مناسبة للطلاب اللي يتكلّمون عربي؟',
    es: '¿Es adecuada para estudiantes de habla árabe?',
  },
  'ielts.partners.schools.faq.a3': {
    en: 'Yes. The platform is fully bilingual in English and Arabic, so navigation and instructions never get in the way of the IELTS practice itself. It is purpose-built for Gulf learners.',
    ar: 'إي. المنصّة ثنائية اللغة بالكامل بالإنجليزي والعربي، عشان التنقّل والتعليمات ما يوقفون بوجه تدريب IELTS نفسه. مبنية خصّيصاً لطلاب الخليج.',
    es: 'Sí. La plataforma es totalmente bilingüe en inglés y árabe, de modo que la navegación y las instrucciones nunca se interponen en la propia práctica de IELTS. Está hecha a medida para los estudiantes del Golfo.',
  },
  'ielts.partners.schools.faq.q4': {
    en: 'Can we run a pilot first?',
    ar: 'هل نقدر نشغّل تجربة أول؟',
    es: '¿Podemos hacer primero un piloto?',
  },
  'ielts.partners.schools.faq.a4': {
    en: 'Yes. Get in touch and we will scope a pilot around a single class or cohort and your test-prep calendar before any wider rollout.',
    ar: 'إي. تواصل ويانا وبنحدّد نطاق تجربة حول صف واحد أو دفعة وحدة وجدول التحضير للامتحانات عندك قبل أي نشر أوسع.',
    es: 'Sí. Ponte en contacto y definiremos un piloto en torno a una sola clase o grupo y a tu calendario de preparación de exámenes antes de cualquier despliegue más amplio.',
  },

  // ══════════════════════════════════════════════════════════════════════
  // /ielts/partners/for-agencies
  // ══════════════════════════════════════════════════════════════════════

  // ─── Hero ────────────────────────────────────────────────────────────
  'ielts.partners.agencies.hero.eyebrow': {
    en: 'For education agencies',
    ar: 'لوكالات التعليم',
    es: 'Para agencias educativas',
  },
  'ielts.partners.agencies.hero.h1': {
    en: 'Get the applicants you place IELTS-ready',
    ar: 'خلّ المتقدّمين اللي تنسّب لهم جاهزين لـ IELTS',
    es: 'Prepara para IELTS a los solicitantes que colocas',
  },
  'ielts.partners.agencies.hero.lede': {
    en: 'Give the students you are placing AI-marked IELTS Academic preparation and a credible predicted band - bilingual in English and Arabic, reachable from anywhere, with a roadmap aligned to recognised standards.',
    ar: 'وفّر للطلاب اللي تنسّب لهم تحضير IELTS Academic مصحّح بالذكاء الاصطناعي و band متوقّع موثوق - ثنائي اللغة إنجليزي وعربي، يوصلون له من أي مكان، مع خارطة طريق متماشية مع معايير معترف فيها.',
    es: 'Da a los estudiantes que colocas preparación de IELTS Academic corregida con IA y una banda predicha creíble, bilingüe en inglés y árabe, accesible desde cualquier lugar, con una hoja de ruta alineada con estándares reconocidos.',
  },
  'ielts.partners.agencies.hero.cta_primary': {
    en: 'Talk to us about your applicants',
    ar: 'كلّمنا عن المتقدّمين عندك',
    es: 'Habla con nosotros sobre tus solicitantes',
  },
  'ielts.partners.agencies.hero.cta_secondary': {
    en: 'All partnership options',
    ar: 'كل خيارات الشراكة',
    es: 'Todas las opciones de alianza',
  },

  // ─── Challenges section ──────────────────────────────────────────────
  'ielts.partners.agencies.challenge.eyebrow': {
    en: 'The challenge',
    ar: 'التحدّي',
    es: 'El reto',
  },
  'ielts.partners.agencies.challenge.heading': {
    en: 'The band gap stalls placements',
    ar: 'الفجوة في الـ band توقف عمليات التنسيب',
    es: 'La brecha de banda frena las colocaciones',
  },
  'ielts.partners.agencies.challenge.stall': {
    en: 'Applicants stall at the visa and offer stage because they cannot reach the IELTS band their destination requires.',
    ar: 'المتقدّمون يتعطّلون عند مرحلة التأشيرة وعرض القبول لأنهم ما يقدرون يوصلون للـ band اللي تطلبه وجهتهم في IELTS.',
    es: 'Los solicitantes se estancan en la fase de visado y oferta porque no logran alcanzar la banda de IELTS que exige su destino.',
  },
  'ielts.partners.agencies.challenge.advise': {
    en: 'Without a reliable predicted band it is hard to advise students honestly on which offers are realistic.',
    ar: 'بدون band متوقّع موثوق، صعب تنصح الطلاب بصدق عن أي عروض قبول واقعية.',
    es: 'Sin una banda predicha fiable es difícil aconsejar con honestidad a los estudiantes sobre qué ofertas son realistas.',
  },
  'ielts.partners.agencies.challenge.barrier': {
    en: 'Arabic-speaking applicants need preparation that does not add an English-comprehension barrier on top of the test itself.',
    ar: 'المتقدّمون اللي يتكلّمون عربي يحتاجون تحضير ما يضيف حاجز فهم بالإنجليزي فوق الامتحان نفسه.',
    es: 'Los solicitantes de habla árabe necesitan una preparación que no añada una barrera de comprensión en inglés por encima del propio examen.',
  },
  'ielts.partners.agencies.challenge.coordination': {
    en: 'Coordinating preparation across applicants in different countries and time zones is difficult without a single platform.',
    ar: 'تنسيق التحضير عبر متقدّمين في دول ومناطق زمنية مختلفة صعب بدون منصّة وحدة.',
    es: 'Coordinar la preparación de solicitantes en distintos países y husos horarios es difícil sin una única plataforma.',
  },

  // ─── Features section ────────────────────────────────────────────────
  'ielts.partners.agencies.features.eyebrow': {
    en: 'What your agency gets',
    ar: 'شنو تحصل عليه وكالتك',
    es: 'Qué obtiene tu agencia',
  },
  'ielts.partners.agencies.features.heading': {
    en: 'A preparation engine behind every placement',
    ar: 'محرّك تحضير وراء كل عملية تنسيب',
    es: 'Un motor de preparación detrás de cada colocación',
  },
  'ielts.partners.agencies.features.bulk.title': {
    en: 'Bulk access for applicants',
    ar: 'وصول جماعي للمتقدّمين',
    es: 'Acceso por volumen para solicitantes',
  },
  'ielts.partners.agencies.features.bulk.body': {
    en: 'Enrol the students you are placing in one step and give each the full IELTS Academic learning loop - diagnostic, plan, practice and mocks.',
    ar: 'سجّل الطلاب اللي تنسّب لهم بخطوة وحدة واعطِ كل واحد حلقة تعلّم IELTS Academic الكاملة - التشخيص، والخطة، والتدريب، والامتحانات التجريبية.',
    es: 'Inscribe en un solo paso a los estudiantes que colocas y da a cada uno el ciclo completo de aprendizaje de IELTS Academic: diagnóstico, plan, práctica y simulacros.',
  },
  'ielts.partners.agencies.features.evidence.title': {
    en: 'Predicted band evidence',
    ar: 'دليل الـ band المتوقّع',
    es: 'Evidencia de banda predicha',
  },
  'ielts.partners.agencies.features.evidence.body': {
    en: 'Full timed mocks and per-skill scoring produce a defensible predicted overall band you can use to advise students and support applications.',
    ar: 'الامتحانات التجريبية الكاملة والمؤقّتة والتصحيح لكل مهارة تنتج band إجمالي متوقّع تقدر تدافع عنه وتستخدمه لنصح الطلاب ودعم الطلبات.',
    es: 'Los simulacros completos cronometrados y la puntuación por destreza producen una banda global predicha defendible que puedes usar para aconsejar a los estudiantes y respaldar las solicitudes.',
  },
  'ielts.partners.agencies.features.feedback.title': {
    en: 'Instant AI feedback',
    ar: 'تغذية راجعة فورية بالذكاء الاصطناعي',
    es: 'Feedback instantáneo con IA',
  },
  'ielts.partners.agencies.features.feedback.body': {
    en: 'Writing and Speaking are marked against the official descriptors in seconds, so applicants improve quickly without waiting on a tutor.',
    ar: 'Writing و Speaking يتصحّحون حسب الواصفات الرسمية بثواني، عشان المتقدّمين يتحسّنون بسرعة بدون ما ينتظرون مدرّس.',
    es: 'El Writing y el Speaking se corrigen según los descriptores oficiales en segundos, para que los solicitantes mejoren rápido sin esperar a un tutor.',
  },
  'ielts.partners.agencies.features.bilingual.title': {
    en: 'Bilingual English / Arabic',
    ar: 'ثنائي اللغة إنجليزي / عربي',
    es: 'Bilingüe inglés / árabe',
  },
  'ielts.partners.agencies.features.bilingual.body': {
    en: 'A fully bilingual experience means Gulf applicants can prepare in the language they navigate most comfortably, right up to test readiness.',
    ar: 'تجربة ثنائية اللغة بالكامل تعني المتقدّمين من الخليج يقدرون يتحضّرون باللغة اللي يتنقّلون فيها بأريحية، لين جاهزية الامتحان.',
    es: 'Una experiencia totalmente bilingüe significa que los solicitantes del Golfo pueden prepararse en el idioma en el que se manejan con más comodidad, hasta la preparación para el examen.',
  },
  'ielts.partners.agencies.features.visibility.title': {
    en: 'Cohort visibility',
    ar: 'وضوح رؤية الدفعة',
    es: 'Visibilidad del grupo',
  },
  'ielts.partners.agencies.features.visibility.body': {
    en: 'A dashboard view across your applicants shows who is progressing and who needs a push before their test date.',
    ar: 'رؤية بلوحة تحكّم عبر متقدّميك تورّي مين يتقدّم ومين يحتاج دفعة قبل موعد امتحانه.',
    es: 'Una vista de panel de todos tus solicitantes muestra quién progresa y quién necesita un empujón antes de la fecha de su examen.',
  },
  'ielts.partners.agencies.features.anywhere.title': {
    en: 'Place from anywhere',
    ar: 'نسّب من أي مكان',
    es: 'Coloca desde cualquier lugar',
  },
  'ielts.partners.agencies.features.anywhere.body': {
    en: 'A cloud platform your applicants reach from any country, so distance and time zones stop being an obstacle to preparation.',
    ar: 'منصّة سحابية يوصل لها متقدّموك من أي دولة، عشان المسافة والمناطق الزمنية تبطّل تكون عائق قدّام التحضير.',
    es: 'Una plataforma en la nube a la que tus solicitantes acceden desde cualquier país, para que la distancia y los husos horarios dejen de ser un obstáculo para la preparación.',
  },

  // ─── Use cases section ───────────────────────────────────────────────
  'ielts.partners.agencies.usecase.eyebrow': {
    en: 'Across the placement journey',
    ar: 'عبر رحلة التنسيب',
    es: 'A lo largo del proceso de colocación',
  },
  'ielts.partners.agencies.usecase.heading': {
    en: 'From first benchmark to pre-departure',
    ar: 'من أول قياس مرجعي لين ما قبل السفر',
    es: 'Desde el primer punto de referencia hasta la salida',
  },
  'ielts.partners.agencies.usecase.pre.label': {
    en: 'Pre-application',
    ar: 'ما قبل التقديم',
    es: 'Antes de la solicitud',
  },
  'ielts.partners.agencies.usecase.pre.headline': {
    en: 'Set realistic targets',
    ar: 'حدّد أهداف واقعية',
    es: 'Fija objetivos realistas',
  },
  'ielts.partners.agencies.usecase.pre.body': {
    en: 'Use the placement diagnostic to benchmark each applicant early, so you can advise on destinations and timelines with confidence.',
    ar: 'استخدم تشخيص تحديد المستوى عشان تقيس كل متقدّم بدري، فتقدر تنصح بالوجهات والجداول الزمنية بثقة.',
    es: 'Usa el diagnóstico de nivel para tomar una referencia de cada solicitante pronto, para poder aconsejar sobre destinos y plazos con confianza.',
  },
  'ielts.partners.agencies.usecase.active.label': {
    en: 'Active preparation',
    ar: 'التحضير النشط',
    es: 'Preparación activa',
  },
  'ielts.partners.agencies.usecase.active.headline': {
    en: 'Close the band gap',
    ar: 'سدّ الفجوة في الـ band',
    es: 'Cierra la brecha de banda',
  },
  'ielts.partners.agencies.usecase.active.body': {
    en: 'Put applicants through a focused study plan that targets their weakest skill first, with AI feedback driving rapid improvement.',
    ar: 'مرّر المتقدّمين على خطة دراسة مركّزة تستهدف أضعف مهارة عندهم أول، مع تغذية راجعة بالذكاء الاصطناعي تدفع تحسّن سريع.',
    es: 'Lleva a los solicitantes por un plan de estudio centrado que ataca primero su destreza más débil, con feedback de IA que impulsa una mejora rápida.',
  },
  'ielts.partners.agencies.usecase.predeparture.label': {
    en: 'Pre-departure',
    ar: 'ما قبل السفر',
    es: 'Antes de la salida',
  },
  'ielts.partners.agencies.usecase.predeparture.headline': {
    en: 'Evidence the readiness',
    ar: 'وثّق الجاهزية',
    es: 'Documenta la preparación',
  },
  'ielts.partners.agencies.usecase.predeparture.body': {
    en: 'Share predicted bands and progress as part of a credible, standards-aligned preparation story behind each placement.',
    ar: 'شارك الـ bands المتوقّعة والتقدّم كجزء من قصّة تحضير موثوقة ومتماشية مع المعايير وراء كل عملية تنسيب.',
    es: 'Comparte las bandas predichas y el progreso como parte de un relato de preparación creíble y alineado con los estándares detrás de cada colocación.',
  },

  // ─── Standards section (INTENT framing) ──────────────────────────────
  'ielts.partners.agencies.standards.eyebrow': {
    en: 'Standards we work towards',
    ar: 'معايير نشتغل عشان نوصلها',
    es: 'Estándares hacia los que trabajamos',
  },
  'ielts.partners.agencies.standards.badge': {
    en: 'Pursuing',
    ar: 'قيد السعي',
    es: 'En proceso',
  },
  'ielts.partners.agencies.standards.heading': {
    en: 'Built to give partner agencies confidence',
    ar: 'مبنية عشان تعطي الوكالات الشريكة ثقة',
    es: 'Creada para dar confianza a las agencias asociadas',
  },
  'ielts.partners.agencies.standards.body': {
    en: 'We are working towards the standards of the British Council UK Agent Hub, aligning our preparation with official IELTS criteria with the intent of applying to the IELTS Partnership Programme, and pursuing relationships with UK universities and their recruitment teams. These are routes we are actively pursuing as the platform matures.',
    ar: 'نشتغل عشان نوصل لمعايير British Council UK Agent Hub، ونتماشى بتحضيرنا مع معايير IELTS الرسمية بنيّة التقديم على IELTS Partnership Programme، ونسعى لعلاقات مع جامعات بريطانية وفِرَق الاستقطاب عندها. هذي طُرق نسعى لها بجدّ مع نضج المنصّة.',
    es: 'Estamos trabajando hacia los estándares del British Council UK Agent Hub, alineando nuestra preparación con los criterios oficiales de IELTS con la intención de solicitar el ingreso en el IELTS Partnership Programme, y buscando relaciones con universidades británicas y sus equipos de captación. Estas son vías que estamos buscando activamente a medida que la plataforma madura.',
  },
  'ielts.partners.agencies.standards.bullet_criteria': {
    en: 'Aligned to official IELTS band criteria',
    ar: 'متماشية مع معايير الـ band الرسمية لـ IELTS',
    es: 'Alineada con los criterios oficiales de banda de IELTS',
  },
  'ielts.partners.agencies.standards.bullet_bc': {
    en: 'Pursuing British Council UK Agent Hub standards',
    ar: 'نسعى لمعايير British Council UK Agent Hub',
    es: 'Buscando los estándares del British Council UK Agent Hub',
  },
  'ielts.partners.agencies.standards.bullet_ipp': {
    en: 'Intent to join the IELTS Partnership Programme',
    ar: 'نيّة الانضمام لـ IELTS Partnership Programme',
    es: 'Intención de unirnos al IELTS Partnership Programme',
  },
  'ielts.partners.agencies.standards.bullet_uni': {
    en: 'Pursuing UK university recruitment relationships',
    ar: 'نسعى لعلاقات استقطاب مع جامعات بريطانية',
    es: 'Buscando relaciones de captación con universidades británicas',
  },
  // CRITICAL caveat - translated in full, "not currently…" disclaimers kept.
  'ielts.partners.agencies.standards.caveat': {
    en: 'The English Hub is an independent IELTS preparation provider. We are not currently an official British Council or IELTS partner, and we are not an accredited UCAS or university recruitment agent. References to the British Council UK Agent Hub, the IELTS Partnership Programme and university recruitment relationships describe standards we align to and routes we are pursuing, and do not imply any existing affiliation, accreditation or endorsement.',
    ar: 'The English Hub مزوّد مستقل لتحضير IELTS. إحنا لسنا الحين شريك رسمي لـ British Council أو IELTS، ولسنا وكيل استقطاب معتمد لـ UCAS أو للجامعات. الإشارات إلى British Council UK Agent Hub و IELTS Partnership Programme وعلاقات الاستقطاب مع الجامعات توصف معايير نتماشى معها وطُرق نسعى لها، وما تعني وجود أي ارتباط أو اعتماد أو تأييد قائم.',
    es: 'The English Hub es un proveedor independiente de preparación de IELTS. Actualmente no somos socio oficial del British Council ni de IELTS, y no somos un agente acreditado de captación de UCAS ni de universidades. Las referencias al British Council UK Agent Hub, al IELTS Partnership Programme y a las relaciones de captación con universidades describen estándares con los que nos alineamos y vías que estamos buscando, y no implican ninguna afiliación, acreditación o respaldo existente.',
  },

  // ─── CTA section ─────────────────────────────────────────────────────
  'ielts.partners.agencies.cta.heading': {
    en: 'Make IELTS readiness part of your service',
    ar: 'خلّ الجاهزية لـ IELTS جزء من خدمتك',
    es: 'Haz que la preparación para IELTS sea parte de tu servicio',
  },
  'ielts.partners.agencies.cta.lede': {
    en: 'Tell us about your agency and the applicants you place, and we will scope bulk access and a pilot around your intake cycle.',
    ar: 'خبّرنا عن وكالتك والمتقدّمين اللي تنسّب لهم، وبنحدّد نطاق الوصول الجماعي وتجربة حول دورة الاستقبال عندك.',
    es: 'Cuéntanos sobre tu agencia y los solicitantes que colocas, y definiremos el acceso por volumen y un piloto en torno a tu ciclo de admisión.',
  },
  'ielts.partners.agencies.cta.bullet_bulk': {
    en: 'Bulk access for the applicants you place',
    ar: 'وصول جماعي للمتقدّمين اللي تنسّب لهم',
    es: 'Acceso por volumen para los solicitantes que colocas',
  },
  'ielts.partners.agencies.cta.bullet_evidence': {
    en: 'Predicted-band evidence to advise and support applications',
    ar: 'دليل الـ band المتوقّع لنصح ودعم الطلبات',
    es: 'Evidencia de banda predicha para aconsejar y respaldar solicitudes',
  },
  'ielts.partners.agencies.cta.bullet_anywhere': {
    en: 'Bilingual delivery your applicants can reach from anywhere',
    ar: 'تجربة ثنائية اللغة يوصل لها متقدّموك من أي مكان',
    es: 'Experiencia bilingüe a la que tus solicitantes acceden desde cualquier lugar',
  },
  'ielts.partners.agencies.cta.button': {
    en: 'Talk to us about your applicants',
    ar: 'كلّمنا عن المتقدّمين عندك',
    es: 'Habla con nosotros sobre tus solicitantes',
  },

  // ── Agencies FAQ (visible accordion copy; JSON-LD stays English) ──────
  'ielts.partners.agencies.faq.q1': {
    en: 'Is The English Hub an accredited university recruitment agent?',
    ar: 'هل The English Hub وكيل استقطاب جامعي معتمد؟',
    es: '¿Es The English Hub un agente acreditado de captación universitaria?',
  },
  'ielts.partners.agencies.faq.a1': {
    en: 'No. The English Hub is an independent IELTS preparation platform, not a UCAS or university recruitment agent. We support the preparation side - getting applicants IELTS-ready - and we describe any recruitment or accreditation routes we are pursuing as exactly that: routes we are pursuing, not affiliations we hold.',
    ar: 'لا. The English Hub منصّة مستقلة لتحضير IELTS، مو وكيل استقطاب لـ UCAS أو للجامعات. إحنا ندعم جانب التحضير - نخلّي المتقدّمين جاهزين لـ IELTS - ونوصف أي طُرق استقطاب أو اعتماد نسعى لها بالضبط كذا: طُرق نسعى لها، مو ارتباطات نملكها.',
    es: 'No. The English Hub es una plataforma independiente de preparación de IELTS, no un agente de captación de UCAS ni de universidades. Apoyamos la parte de la preparación (preparar a los solicitantes para IELTS) y describimos cualquier vía de captación o acreditación que estemos buscando exactamente como eso: vías que estamos buscando, no afiliaciones que tengamos.',
  },
  'ielts.partners.agencies.faq.q2': {
    en: 'How does this help our placements?',
    ar: 'شلون هذا يساعد عمليات التنسيب عندنا؟',
    es: '¿Cómo ayuda esto a nuestras colocaciones?',
  },
  'ielts.partners.agencies.faq.a2': {
    en: 'It gets the students you place to the IELTS band their destination requires, and gives you predicted-band evidence to advise applicants honestly and support their applications.',
    ar: 'يوصّل الطلاب اللي تنسّب لهم للـ band اللي تطلبه وجهتهم في IELTS، ويعطيك دليل الـ band المتوقّع عشان تنصح المتقدّمين بصدق وتدعم طلباتهم.',
    es: 'Lleva a los estudiantes que colocas a la banda de IELTS que exige su destino, y te da evidencia de banda predicha para aconsejar a los solicitantes con honestidad y respaldar sus solicitudes.',
  },
  'ielts.partners.agencies.faq.q3': {
    en: 'Can applicants prepare from any country?',
    ar: 'هل يقدر المتقدّمين يتحضّرون من أي دولة؟',
    es: '¿Pueden los solicitantes prepararse desde cualquier país?',
  },
  'ielts.partners.agencies.faq.a3': {
    en: 'Yes. The platform is cloud-based and bilingual in English and Arabic, so applicants can prepare from anywhere, in the language they are most comfortable navigating.',
    ar: 'إي. المنصّة سحابية وثنائية اللغة بالإنجليزي والعربي، عشان المتقدّمين يقدرون يتحضّرون من أي مكان، باللغة اللي يرتاحون يتنقّلون فيها أكثر.',
    es: 'Sí. La plataforma está en la nube y es bilingüe en inglés y árabe, de modo que los solicitantes pueden prepararse desde cualquier lugar, en el idioma en el que se manejan con más comodidad.',
  },
  'ielts.partners.agencies.faq.q4': {
    en: 'How do we get started?',
    ar: 'شلون نبدأ؟',
    es: '¿Cómo empezamos?',
  },
  'ielts.partners.agencies.faq.a4': {
    en: 'Contact us with a little about your agency and the applicants you are placing, and we will scope bulk access and a pilot around your intake cycle.',
    ar: 'تواصل ويانا وخبّرنا شوي عن وكالتك والمتقدّمين اللي تنسّب لهم، وبنحدّد نطاق الوصول الجماعي وتجربة حول دورة الاستقبال عندك.',
    es: 'Ponte en contacto con algunos datos sobre tu agencia y los solicitantes que colocas, y definiremos el acceso por volumen y un piloto en torno a tu ciclo de admisión.',
  },
}
