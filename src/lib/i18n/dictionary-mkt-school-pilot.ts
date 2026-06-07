/**
 * dictionary-mkt-school-pilot.ts - /school-pilot marketing page. EN + Khaleeji (Gulf) Arabic.
 *
 * Bilingual supplement for the high-conversion pilot-programme page at
 *   src/app/school-pilot/page.tsx
 * - a server-component marketing surface for school decision-makers
 * (Heads of English / SLT) and Qatar Expo school-leader visitors.
 *
 * EN values are byte-identical to the rendered English on the page.
 * AR is curated Khaleeji (Gulf) register - formal-but-warm, matching
 * the voice of dictionary-homepage.ts (marketing) and dictionary-trust.ts
 * (institutional). NOT MSA-stiff, NOT Levantine, NOT machine output.
 *
 * Convention reminders applied:
 *   - Technical / brand tokens kept in Latin script per Gulf convention:
 *     The English Hub, GCSE, IGCSE, KS3, KS4, AO, EAL, AI.
 *   - Western digits (8-12, 90).
 *   - Cardinal direction: school audience, so direct-to-leader register
 *     ("مدرستكم", "قسمكم") rather than the conversational
 *     "أبغى / شلونك / شنو" stack used on student-facing pages.
 *     Gulf colloquial lexis (وايد, الحين, ببلاش, شوف, دوّر) reserved for
 *     less formal student surfaces; here we keep clean Gulf marketing
 *     register that a Head of English in Doha or Abu Dhabi would read
 *     as natural - not stiff news-anchor MSA, not casual chat.
 *   - The two `mkt.pilot.about.body_*` keys are a prefix/suffix split
 *     around the EN constant `PRICING_DISPLAY.schoolPilotLength`
 *     ("one term (around 8-12 weeks)" - out of scope per the brief).
 *     AR is written so the data string flows naturally in its slot.
 *
 * This file only defines data - wiring into the master lookup() chain
 * is owned centrally by dictionary.ts (the orchestrator). Do not edit
 * dictionary.ts here.
 */

export const MKT_SCHOOL_PILOT_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> =
  {
    // ─── Metadata (generateMetadata → title/description/OG) ────────────
    'mkt.pilot.meta.title': {
      en: 'Founder School Pilot - The English Hub for Schools',
      ar: 'برنامج تجريبي للمدارس المؤسِّسة - The English Hub للمدارس',
      es: 'Programa piloto para escuelas fundadoras - The English Hub para escuelas',
    },
    'mkt.pilot.meta.description': {
      en: 'A structured one-term English pilot for schools: onboarding, usage, intervention insights and an end-of-pilot impact report with a rollout recommendation.',
      ar: 'برنامج تجريبي منظَّم لمدّة فصل دراسي واحد لتعلّم الإنجليزي في المدارس: تأهيل، ومتابعة الاستخدام، ورؤى للتدخّل، وتقرير أثر نهاية البرنامج مع توصية للتوسّع.',
      es: 'Un piloto de inglés estructurado de un trimestre para escuelas: incorporación, uso, perspectivas de intervención y un informe de impacto al final del piloto con una recomendación de despliegue.',
    },
    'mkt.pilot.meta.og_title': {
      en: '90-Day Founder School Pilot - The English Hub',
      ar: 'برنامج تجريبي للمدارس المؤسِّسة لمدّة 90 يومًا - The English Hub',
      es: 'Programa piloto de 90 días para escuelas fundadoras - The English Hub',
    },
    'mkt.pilot.meta.og_description': {
      en: 'A structured one-term pilot designed to prove value before wider rollout.',
      ar: 'برنامج تجريبي منظَّم لمدّة فصل دراسي واحد، مصمّم لإثبات القيمة قبل التوسّع.',
      es: 'Un piloto estructurado de un trimestre diseñado para demostrar su valor antes de un despliegue más amplio.',
    },
    'mkt.pilot.meta.og_alt': {
      en: 'Founder School Pilot',
      ar: 'برنامج تجريبي للمدارس المؤسِّسة',
      es: 'Programa piloto para escuelas fundadoras',
    },

    // ─── Hero ──────────────────────────────────────────────────────────
    'mkt.pilot.hero.eyebrow': {
      en: 'Founder School Programme',
      ar: 'برنامج المدارس المؤسِّسة',
      es: 'Programa para escuelas fundadoras',
    },
    'mkt.pilot.hero.title': {
      en: '90-Day Founder School Pilot',
      ar: 'برنامج تجريبي للمدارس المؤسِّسة لمدّة 90 يومًا',
      es: 'Programa piloto de 90 días para escuelas fundadoras',
    },
    'mkt.pilot.hero.lede': {
      en: 'A structured one-term pilot designed to prove value before wider rollout - focused on one year group or the English department.',
      ar: 'برنامج تجريبي منظَّم لمدّة فصل دراسي واحد، مصمّم لإثبات القيمة قبل التوسّع - يركّز على صف دراسي واحد أو قسم الإنجليزي كاملًا.',
      es: 'Un piloto estructurado de un trimestre diseñado para demostrar su valor antes de un despliegue más amplio, centrado en un curso o en el departamento de inglés.',
    },
    'mkt.pilot.hero.cta_primary': {
      en: 'Book a School Pilot',
      ar: 'احجز برنامج تجريبي للمدرسة',
      es: 'Reservar un piloto para la escuela',
    },
    'mkt.pilot.hero.cta_secondary': {
      en: 'Explore the platform',
      ar: 'تعرّف على المنصّة',
      es: 'Explorar la plataforma',
    },
    'mkt.pilot.hero.pill_length': {
      en: 'One term · 8-12 weeks',
      ar: 'فصل دراسي واحد · 8-12 أسبوع',
      es: 'Un trimestre · 8-12 semanas',
    },
    'mkt.pilot.hero.pill_scope': {
      en: 'Single year group or full department',
      ar: 'صف دراسي واحد أو قسم كامل',
      es: 'Un solo curso o el departamento completo',
    },
    'mkt.pilot.hero.pill_report': {
      en: 'Impact report on completion',
      ar: 'تقرير أثر عند الانتهاء',
      es: 'Informe de impacto al finalizar',
    },
    'mkt.pilot.hero.demo_prompt': {
      en: 'Want to look around before booking?',
      ar: 'تبغون تتصفّحون المنصّة قبل الحجز؟',
      es: '¿Quieren echar un vistazo antes de reservar?',
    },
    'mkt.pilot.hero.demo_link': {
      en: 'Open the demo',
      ar: 'افتحوا العرض التجريبي',
      es: 'Abrir la demo',
    },

    // ─── 1. What the pilot is ──────────────────────────────────────────
    'mkt.pilot.about.heading': {
      en: 'What the pilot is',
      ar: 'إيش هو البرنامج التجريبي',
      es: 'Qué es el piloto',
    },
    // Sentence splits around the EN data constant PRICING_DISPLAY.schoolPilotLength
    // ("one term (around 8-12 weeks)") which renders verbatim between the two.
    'mkt.pilot.about.body_prefix': {
      en: 'The Founder School Pilot is a structured engagement over ',
      ar: 'برنامج المدارس المؤسِّسة التجريبي عبارة عن التزام منظَّم على مدى ',
      es: 'El piloto para escuelas fundadoras es un compromiso estructurado a lo largo de ',
    },
    'mkt.pilot.about.body_suffix': {
      en: '. It is designed to embed The English Hub into how your department works, gather real adoption and usage signals, and produce an evidence base for a wider rollout decision - without committing to a full year up front.',
      ar: '. مصمَّم لدمج The English Hub في طريقة عمل قسمكم، وجمع مؤشّرات حقيقية للتبنّي والاستخدام، وإنتاج قاعدة أدلّة لقرار توسّع أوسع - بدون التزام بسنة كاملة من البداية.',
      es: '. Está diseñado para integrar The English Hub en la forma de trabajar de su departamento, recoger señales reales de adopción y uso, y generar una base de evidencias para una decisión de despliegue más amplio, sin comprometerse a un año completo de antemano.',
    },

    // ─── 2. Audience ───────────────────────────────────────────────────
    'mkt.pilot.audience.eyebrow': {
      en: 'Audience',
      ar: 'الجمهور',
      es: 'Público',
    },
    'mkt.pilot.audience.heading': {
      en: 'Who it is for',
      ar: 'لمن هذا البرنامج',
      es: 'Para quién es',
    },
    'mkt.pilot.audiences.hods': {
      en: 'Heads of English and Heads of Department evaluating department-wide tools',
      ar: 'رؤساء قسم الإنجليزي ورؤساء الأقسام اللي يقيّمون أدوات على مستوى القسم كامل',
      es: 'Jefes de departamento de inglés y jefes de departamento que evalúan herramientas para todo el departamento',
    },
    'mkt.pilot.audiences.senior_leaders': {
      en: 'Senior leaders looking to reduce marking workload and strengthen outcomes',
      ar: 'القيادات العليا اللي يدوّرون يقلّلون عبء التصحيح ويعزّزون النتائج',
      es: 'Directivos que buscan reducir la carga de corrección y mejorar los resultados',
    },
    'mkt.pilot.audiences.eal': {
      en: 'Schools with significant EAL cohorts needing structured support',
      ar: 'المدارس اللي عندها أعداد كبيرة من طلاب EAL يحتاجون دعم منظَّم',
      es: 'Escuelas con grupos numerosos de EAL que necesitan apoyo estructurado',
    },
    'mkt.pilot.audiences.international': {
      en: 'International and IGCSE schools planning English improvement',
      ar: 'المدارس الدولية ومدارس IGCSE اللي تخطّط لتحسين مستوى الإنجليزي',
      es: 'Escuelas internacionales y de IGCSE que planifican mejorar el inglés',
    },

    // ─── 3. What is included ───────────────────────────────────────────
    'mkt.pilot.scope.eyebrow': {
      en: 'Programme scope',
      ar: 'نطاق البرنامج',
      es: 'Alcance del programa',
    },
    'mkt.pilot.included.heading': {
      en: 'What is included',
      ar: 'إيش يشمل البرنامج',
      es: 'Qué incluye',
    },
    'mkt.pilot.outcomes.setup': {
      en: 'Setup in week 1',
      ar: 'التجهيز في الأسبوع الأول',
      es: 'Configuración en la semana 1',
    },
    'mkt.pilot.outcomes.checkins': {
      en: 'Adoption check-ins',
      ar: 'متابعات للتبنّي',
      es: 'Seguimientos de adopción',
    },
    'mkt.pilot.outcomes.report': {
      en: 'End-of-pilot report',
      ar: 'تقرير نهاية البرنامج',
      es: 'Informe final del piloto',
    },
    'mkt.pilot.included.panel_eyebrow': {
      en: 'Pilot deliverables',
      ar: 'مخرجات البرنامج التجريبي',
      es: 'Entregables del piloto',
    },
    'mkt.pilot.included.onboarding': {
      en: 'Onboarding session with the English team',
      ar: 'جلسة تأهيل مع فريق الإنجليزي',
      es: 'Sesión de incorporación con el equipo de inglés',
    },
    'mkt.pilot.included.teacher_setup': {
      en: 'Teacher setup and student access',
      ar: 'تجهيز حسابات المعلّمين ووصول الطلاب',
      es: 'Configuración de profesores y acceso de estudiantes',
    },
    'mkt.pilot.included.baseline': {
      en: 'Baseline usage review',
      ar: 'مراجعة استخدام أساسية',
      es: 'Revisión de uso de referencia',
    },
    'mkt.pilot.included.weekly_checkins': {
      en: 'Weekly adoption check-ins',
      ar: 'متابعات أسبوعية للتبنّي',
      es: 'Seguimientos semanales de adopción',
    },
    'mkt.pilot.included.analytics_review': {
      en: 'Class and year-group analytics review',
      ar: 'مراجعة تحليلات على مستوى الفصل والصف الدراسي',
      es: 'Revisión de analíticas por clase y por curso',
    },
    'mkt.pilot.included.intervention_report': {
      en: 'Intervention insight report',
      ar: 'تقرير رؤى للتدخّل',
      es: 'Informe de perspectivas de intervención',
    },
    'mkt.pilot.included.impact_report': {
      en: 'End-of-pilot impact report',
      ar: 'تقرير أثر نهاية البرنامج',
      es: 'Informe de impacto al final del piloto',
    },
    'mkt.pilot.included.rollout_plan': {
      en: 'Recommended rollout plan for wider deployment',
      ar: 'خطّة توسّع موصى بها للنشر على نطاق أوسع',
      es: 'Plan de despliegue recomendado para una implantación más amplia',
    },

    // ─── 4. Suggested pilot scopes ─────────────────────────────────────
    'mkt.pilot.suggested_scopes.eyebrow': {
      en: 'Pilot scopes',
      ar: 'نطاقات البرنامج التجريبي',
      es: 'Alcances del piloto',
    },
    'mkt.pilot.suggested_scopes.heading': {
      en: 'Suggested pilot scopes',
      ar: 'نطاقات مقترحة للبرنامج التجريبي',
      es: 'Alcances de piloto sugeridos',
    },
    'mkt.pilot.suggested_scopes.lede': {
      en: 'Start small and expand. Most schools begin with a single year group.',
      ar: 'ابدأوا صغير وتوسّعوا. أغلب المدارس تبدأ بصف دراسي واحد.',
      es: 'Empiecen poco a poco y amplíen. La mayoría de las escuelas comienzan con un solo curso.',
    },
    'mkt.pilot.suggested_scopes.badge': {
      en: 'Most schools start here',
      ar: 'أغلب المدارس تبدأ من هنا',
      es: 'La mayoría de las escuelas empiezan aquí',
    },
    'mkt.pilot.scopes.year_group.name': {
      en: 'Single year group',
      ar: 'صف دراسي واحد',
      es: 'Un solo curso',
    },
    'mkt.pilot.scopes.year_group.body': {
      en: 'Focus the pilot on one year group to prove value with minimal change management.',
      ar: 'ركّزوا البرنامج التجريبي على صف دراسي واحد لإثبات القيمة بأقل تغيير إداري.',
      es: 'Centren el piloto en un solo curso para demostrar su valor con una gestión del cambio mínima.',
    },
    'mkt.pilot.scopes.department.name': {
      en: 'English department',
      ar: 'قسم الإنجليزي',
      es: 'Departamento de inglés',
    },
    'mkt.pilot.scopes.department.body': {
      en: 'A whole-department pilot across KS3-KS4 English Language and Literature.',
      ar: 'برنامج تجريبي على مستوى القسم كامل يغطّي KS3-KS4 للإنجليزي لغة وأدب.',
      es: 'Un piloto para todo el departamento que abarca KS3-KS4 de English Language y Literature.',
    },
    'mkt.pilot.scopes.multi_campus.name': {
      en: 'Multi-campus / group',
      ar: 'مجمّع / عدّة فروع',
      es: 'Varios campus / grupo',
    },
    'mkt.pilot.scopes.multi_campus.body': {
      en: 'For school groups and multi-campus trusts. Scope and pricing tailored.',
      ar: 'للمجموعات المدرسية والكيانات متعدّدة الفروع. النطاق والسعر على مقاسكم.',
      es: 'Para grupos de escuelas y redes con varios campus. Alcance y precio a medida.',
    },

    // ─── 5. Timeline ───────────────────────────────────────────────────
    'mkt.pilot.timeline.eyebrow': {
      en: 'Programme cadence',
      ar: 'إيقاع البرنامج',
      es: 'Ritmo del programa',
    },
    'mkt.pilot.timeline.heading': {
      en: 'Pilot timeline',
      ar: 'الجدول الزمني للبرنامج التجريبي',
      es: 'Cronograma del piloto',
    },
    'mkt.pilot.timeline.lede': {
      en: 'A typical 90-day pilot runs in four phases.',
      ar: 'البرنامج التجريبي المعتاد لمدّة 90 يومًا يمشي على أربع مراحل.',
      es: 'Un piloto típico de 90 días se desarrolla en cuatro fases.',
    },
    'mkt.pilot.timeline.panel_eyebrow': {
      en: 'Four-phase rollout',
      ar: 'تنفيذ على أربع مراحل',
      es: 'Despliegue en cuatro fases',
    },

    // ─── 6. Pricing ────────────────────────────────────────────────────
    'mkt.pilot.pricing.eyebrow': {
      en: 'Investment',
      ar: 'الاستثمار',
      es: 'Inversión',
    },
    'mkt.pilot.pricing.heading': {
      en: 'Pilot & deployment pricing',
      ar: 'أسعار البرنامج التجريبي والنشر',
      es: 'Precios del piloto y del despliegue',
    },
    'mkt.pilot.pricing.lede': {
      en: 'Indicative founder pricing. Final pricing depends on school size, scope and rollout requirements.',
      ar: 'أسعار استرشادية للمدارس المؤسِّسة. السعر النهائي يعتمد على حجم المدرسة والنطاق ومتطلّبات النشر.',
      es: 'Precios orientativos para escuelas fundadoras. El precio final depende del tamaño de la escuela, el alcance y los requisitos de despliegue.',
    },
    'mkt.pilot.pricing.panel_eyebrow': {
      en: 'Pilot & annual pricing',
      ar: 'أسعار البرنامج التجريبي والاشتراك السنوي',
      es: 'Precios del piloto y anuales',
    },
    'mkt.pilot.pricing.cta_label': {
      en: 'Request a pilot proposal',
      ar: 'اطلبوا عرض برنامج تجريبي',
      es: 'Solicitar una propuesta de piloto',
    },

    // ─── 7. End-of-pilot deliverables ──────────────────────────────────
    'mkt.pilot.end.eyebrow': {
      en: 'Final handover',
      ar: 'التسليم النهائي',
      es: 'Entrega final',
    },
    'mkt.pilot.end.heading': {
      en: 'What your school receives at the end',
      ar: 'إيش تستلمه مدرستكم في النهاية',
      es: 'Lo que recibe su escuela al final',
    },
    'mkt.pilot.end.usage_summary': {
      en: 'Usage summary',
      ar: 'ملخّص الاستخدام',
      es: 'Resumen de uso',
    },
    'mkt.pilot.end.teacher_feedback': {
      en: 'Teacher feedback summary',
      ar: 'ملخّص ملاحظات المعلّمين',
      es: 'Resumen de comentarios de los profesores',
    },
    'mkt.pilot.end.student_engagement': {
      en: 'Student engagement summary',
      ar: 'ملخّص تفاعل الطلاب',
      es: 'Resumen de participación de los estudiantes',
    },
    'mkt.pilot.end.intervention_report': {
      en: 'Intervention insight report',
      ar: 'تقرير رؤى للتدخّل',
      es: 'Informe de perspectivas de intervención',
    },
    'mkt.pilot.end.rollout_plan': {
      en: 'Recommended rollout plan',
      ar: 'خطّة توسّع موصى بها',
      es: 'Plan de despliegue recomendado',
    },
    'mkt.pilot.end.pricing_proposal': {
      en: 'Pricing proposal for annual deployment',
      ar: 'عرض سعر للنشر السنوي',
      es: 'Propuesta de precios para el despliegue anual',
    },

    // ─── 8. CTA form section ───────────────────────────────────────────
    'mkt.pilot.book.eyebrow': {
      en: 'Next step',
      ar: 'الخطوة التالية',
      es: 'Siguiente paso',
    },
    'mkt.pilot.book.lede': {
      en: 'Tell us about your school and the challenge you most want to address. We will reply within one UK working day with a pilot scoped to your department.',
      ar: 'احكوا لنا عن مدرستكم والتحدّي اللي تبغون تعالجونه أكثر شي. بنردّ عليكم خلال يوم عمل بريطاني واحد ببرنامج تجريبي على مقاس قسمكم.',
      es: 'Cuéntennos sobre su escuela y el reto que más desean abordar. Les responderemos en un día laborable del Reino Unido con un piloto adaptado a su departamento.',
    },
    'mkt.pilot.book.impact_note': {
      en: 'Impact reporting is available during the pilot. We do not publish improvement figures we cannot evidence - your pilot generates your own.',
      ar: 'تقارير الأثر متوفّرة أثناء البرنامج التجريبي. ما ننشر أرقام تحسّن ما نقدر نثبتها - برنامجكم التجريبي يولّد أرقامكم.',
      es: 'Los informes de impacto están disponibles durante el piloto. No publicamos cifras de mejora que no podamos evidenciar; su piloto genera las suyas propias.',
    },
    'mkt.pilot.book.trust_pill': {
      en: 'Reply within one UK working day',
      ar: 'ردّ خلال يوم عمل بريطاني واحد',
      es: 'Respuesta en un día laborable del Reino Unido',
    },
    'mkt.pilot.book.form_heading': {
      en: 'Request a Founder School Pilot',
      ar: 'اطلبوا برنامج تجريبي للمدارس المؤسِّسة',
      es: 'Solicitar un piloto para escuelas fundadoras',
    },

    // ─── FAQ ───────────────────────────────────────────────────────────
    'mkt.pilot.faq.eyebrow': {
      en: 'Common questions',
      ar: 'أسئلة شائعة',
      es: 'Preguntas frecuentes',
    },
    'mkt.pilot.faq.heading': {
      en: 'Pilot questions',
      ar: 'أسئلة عن البرنامج التجريبي',
      es: 'Preguntas sobre el piloto',
    },
  }
