// ─── IELTS → UK admissions dictionary shard ─────────────────────────────────
// Curated EN + Khaleeji (Gulf) Arabic for the three IELTS admissions surfaces:
//   • /ielts/admissions               (hub - server component)
//   • /ielts/admissions/personal-statement (Personal-Statement Coach - client)
//   • /ielts/admissions/student-visa   (Student-visa basics - server component)
//
// These are INFORMATIONAL/UI pages (not English-test practice content), so
// essentially all visible copy is translated. The AI-generated personal-
// statement feedback is produced by /api/ielts/statement-feedback (already
// AR-aware) and rendered as-is - it is NOT keyed here.
//
// Khaleeji conventions per the master dictionary header (شنو/شلون/أبغى/وايد/
// الحين/إحنا/روح/شوف/دوّر/سكّر/ببلاش/لحظة); Levantine forms (شو/بحكي/كيفك/ليش)
// are banned. Brand + technical terms stay Latin even inside Arabic text:
// IELTS, Band, UCAS, CAS, UKVI, GOV.UK, EPQ, and university names.
//
// Interpolated numbers/values use {token} placeholders filled with
// `.replace('{token}', value)` at the call site, so the phrases stay
// translatable. Wired into src/lib/i18n/dictionary.ts (import + one line in
// lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_ADMISSIONS_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> =
  {
    // ─── Shared ────────────────────────────────────────────────────────────────
    'ielts.admissions.back_to_ielts': {
      en: 'Back to IELTS',
      ar: 'رجوع لـ IELTS',
      es: 'Volver a IELTS',
    },
    'ielts.admissions.breadcrumb.home': { en: 'Home', ar: 'الرئيسية', es: 'Inicio' },
    'ielts.admissions.breadcrumb.ielts': { en: 'IELTS', ar: 'IELTS', es: 'IELTS' },
    'ielts.admissions.breadcrumb.admissions': {
      en: 'UK University Admissions',
      ar: 'القبول الجامعي في بريطانيا',
      es: 'Admisión universitaria en el Reino Unido',
    },
    'ielts.admissions.breadcrumb.visa': {
      en: 'Student-visa basics',
      ar: 'أساسيات فيزا الدراسة',
      es: 'Conceptos básicos del visado de estudiante',
    },

    // ─── Hub: hero ───────────────────────────────────────────────────────────────
    'ielts.admissions.hub.eyebrow': {
      en: 'IELTS → UK university',
      ar: 'IELTS ← جامعة بريطانية',
      es: 'IELTS → universidad del Reino Unido',
    },
    'ielts.admissions.hub.title': {
      en: 'Your pathway from IELTS to a UK university place',
      ar: 'مسارك من IELTS لين مقعد في جامعة بريطانية',
      es: 'Tu camino de IELTS a una plaza en una universidad del Reino Unido',
    },
    'ielts.admissions.hub.subtitle': {
      en: 'A clear, honest guide for students in the Gulf applying to the UK: how UCAS works and when to act, the IELTS band your course is likely to ask for, how to write a personal statement that stands out, and the student-visa basics. Then practise the English that gets you over the line - all in one place.',
      ar: 'دليل واضح وصادق للطلاب في الخليج اللي يقدّمون على بريطانيا: شلون يشتغل UCAS ومتى تتحرّك، الـ Band المتوقّع يطلبه تخصصك في IELTS، شلون تكتب personal statement يميّزك، وأساسيات فيزا الدراسة. وبعدها تدرّب على الإنجليزي اللي يوصّلك للهدف - كله في مكان واحد.',
      es: 'Una guía clara y honesta para estudiantes del Golfo que solicitan plaza en el Reino Unido: cómo funciona UCAS y cuándo actuar, la banda de IELTS que probablemente pedirá tu curso, cómo escribir un personal statement que destaque y los conceptos básicos del visado de estudiante. Y después practica el inglés que te lleva a la meta, todo en un solo lugar.',
    },
    'ielts.admissions.hub.cta.coach': {
      en: 'Coach my personal statement',
      ar: 'درّبني على الـ personal statement',
      es: 'Asesorar mi personal statement',
    },
    'ielts.admissions.hub.cta.practise_writing': {
      en: 'Practise IELTS Writing',
      ar: 'تدرّب على كتابة IELTS',
      es: 'Practicar Writing de IELTS',
    },
    'ielts.admissions.hub.disclaimer': {
      en: 'The English Hub is an independent preparation platform. We are not affiliated with UCAS, UK Visas and Immigration, or any university, and the guidance below is general information for your preparation - always confirm the details with each university and the official UCAS and UK government websites.',
      ar: 'The English Hub منصّة تحضير مستقلّة. إحنا مو تابعين لـ UCAS ولا لـ UK Visas and Immigration ولا لأي جامعة، والإرشادات اللي تحت معلومات عامة لتحضيرك - دايم أكّد التفاصيل مع كل جامعة ومع مواقع UCAS والحكومة البريطانية الرسمية.',
      es: 'The English Hub es una plataforma de preparación independiente. No estamos afiliados a UCAS, a UK Visas and Immigration ni a ninguna universidad, y la orientación de abajo es información general para tu preparación: confirma siempre los detalles con cada universidad y con los sitios web oficiales de UCAS y del gobierno del Reino Unido.',
    },

    // ─── Hub: at-a-glance pathway ────────────────────────────────────────────────
    'ielts.admissions.hub.glance.eyebrow': {
      en: 'The big picture',
      ar: 'الصورة الكاملة',
      es: 'El panorama general',
    },
    'ielts.admissions.hub.glance.title': {
      en: 'Four things stand between you and a place',
      ar: 'أربعة أشياء بينك وبين المقعد',
      es: 'Cuatro cosas se interponen entre tú y una plaza',
    },
    'ielts.admissions.hub.glance.course.title': {
      en: 'The right course',
      ar: 'التخصص المناسب',
      es: 'El curso adecuado',
    },
    'ielts.admissions.hub.glance.course.body': {
      en: 'Pick up to five courses on one UCAS application and check each one’s entry requirements.',
      ar: 'اختر لين خمسة تخصصات في طلب UCAS واحد وشوف شروط القبول لكل واحد منها.',
      es: 'Elige hasta cinco cursos en una sola solicitud de UCAS y comprueba los requisitos de acceso de cada uno.',
    },
    'ielts.admissions.hub.glance.statement.title': {
      en: 'A standout statement',
      ar: 'statement يميّزك',
      es: 'Un statement que destaque',
    },
    'ielts.admissions.hub.glance.statement.body': {
      en: 'One personal statement that argues, with evidence, why you and why this subject.',
      ar: 'personal statement واحد يثبت بالأدلة سبب اختيارك أنت بالذات وسبب هذا التخصص.',
      es: 'Un personal statement que argumente, con evidencias, por qué tú y por qué esta asignatura.',
    },
    'ielts.admissions.hub.glance.band.title': {
      en: 'Your IELTS band',
      ar: 'الـ Band حقّك في IELTS',
      es: 'Tu banda de IELTS',
    },
    'ielts.admissions.hub.glance.band.body': {
      en: 'An IELTS Academic score that meets - ideally beats - the course threshold.',
      ar: 'درجة IELTS Academic توصل للحد المطلوب للتخصص - والأفضل تتعدّاه.',
      es: 'Una puntuación de IELTS Academic que alcance —idealmente supere— el umbral del curso.',
    },
    'ielts.admissions.hub.glance.visa.title': {
      en: 'A student visa',
      ar: 'فيزا دراسة',
      es: 'Un visado de estudiante',
    },
    'ielts.admissions.hub.glance.visa.body': {
      en: 'A Student visa, applied for once you hold an unconditional offer and a CAS.',
      ar: 'فيزا Student، تقدّم عليها بعد ما يصير عندك عرض غير مشروط و CAS.',
      es: 'Un visado Student, que se solicita una vez que tienes una oferta incondicional y un CAS.',
    },

    // ─── Hub: UCAS process ───────────────────────────────────────────────────────
    'ielts.admissions.hub.ucas.eyebrow': {
      en: 'How UCAS works',
      ar: 'شلون يشتغل UCAS',
      es: 'Cómo funciona UCAS',
    },
    'ielts.admissions.hub.ucas.title': {
      en: 'The application, step by step',
      ar: 'الطلب، خطوة بخطوة',
      es: 'La solicitud, paso a paso',
    },
    'ielts.admissions.hub.ucas.step1.title': {
      en: 'Register and research',
      ar: 'سجّل ودوّر',
      es: 'Regístrate e investiga',
    },
    'ielts.admissions.hub.ucas.step1.body': {
      en: 'Create a UCAS account and shortlist courses. You can apply to up to five courses on one application. Compare entry requirements, module content and the English-language threshold for each.',
      ar: 'سوِّ حساب UCAS واختر قائمة مختصرة من التخصصات. تقدر تقدّم لين خمسة تخصصات في طلب واحد. قارن شروط القبول ومحتوى المواد والحد المطلوب للإنجليزي لكل واحد.',
      es: 'Crea una cuenta de UCAS y preselecciona cursos. Puedes solicitar hasta cinco cursos en una sola solicitud. Compara los requisitos de acceso, el contenido de las asignaturas y el umbral de inglés de cada uno.',
    },
    'ielts.admissions.hub.ucas.step2.title': {
      en: 'Build the application',
      ar: 'جهّز الطلب',
      es: 'Prepara la solicitud',
    },
    'ielts.admissions.hub.ucas.step2.body': {
      en: 'Add your qualifications (e.g. high-school certificate, any predicted or actual grades), enter your personal details, and prepare your personal statement and a reference from a teacher or counsellor.',
      ar: 'ضيف مؤهلاتك (مثل شهادة الثانوية، وأي درجات متوقّعة أو فعلية)، وأدخل بياناتك الشخصية، وجهّز الـ personal statement وتزكية من معلّم أو مرشد.',
      es: 'Añade tus titulaciones (p. ej. el título de secundaria y cualquier nota prevista o real), introduce tus datos personales y prepara tu personal statement y una referencia de un profesor u orientador.',
    },
    'ielts.admissions.hub.ucas.step3.title': {
      en: 'Write the personal statement',
      ar: 'اكتب الـ personal statement',
      es: 'Escribe el personal statement',
    },
    'ielts.admissions.hub.ucas.step3.body': {
      en: 'One statement goes to all five choices, so it must work for every course you pick. This is where applicants from outside the UK most often win or lose a place - specificity and reflection matter more than ambition alone.',
      ar: 'statement واحد يروح لكل الخيارات الخمسة، فلازم يناسب كل تخصص تختاره. هنا غالباً المتقدّمون من برّا بريطانيا يكسبون المقعد أو يضيّعونه - التحديد والتأمّل أهم من الطموح بروحه.',
      es: 'Un único statement va a las cinco opciones, así que tiene que funcionar para cada curso que elijas. Aquí es donde los solicitantes de fuera del Reino Unido más a menudo ganan o pierden una plaza: la concreción y la reflexión importan más que la ambición por sí sola.',
    },
    'ielts.admissions.hub.ucas.step4.title': {
      en: 'Submit and track',
      ar: 'قدّم وتابع',
      es: 'Envía y haz seguimiento',
    },
    'ielts.admissions.hub.ucas.step4.body': {
      en: 'Pay the application fee and submit. Universities then respond with offers - usually conditional (dependent on grades and/or an IELTS band) or unconditional. Track everything in your UCAS hub.',
      ar: 'ادفع رسوم الطلب وقدّمه. بعدها الجامعات ترد بعروض - عادةً مشروطة (تعتمد على الدرجات و/أو Band معيّن في IELTS) أو غير مشروطة. تابع كل شي من لوحة UCAS حقّتك.',
      es: 'Paga la tasa de solicitud y envíala. Las universidades responden entonces con ofertas, normalmente condicionales (dependientes de las notas y/o de una banda de IELTS) o incondicionales. Haz el seguimiento de todo en tu panel de UCAS.',
    },
    'ielts.admissions.hub.ucas.step5.title': {
      en: 'Reply, then meet your conditions',
      ar: 'رد، وبعدها حقّق الشروط',
      es: 'Responde y luego cumple tus condiciones',
    },
    'ielts.admissions.hub.ucas.step5.body': {
      en: 'Choose a firm and an insurance offer. Then sit IELTS (if you have not already) and finish your exams to meet the conditions. Once met, you can move on to your student visa.',
      ar: 'اختر عرض أساسي (firm) وعرض احتياطي (insurance). وبعدها سوِّ اختبار IELTS (إذا ما سوّيته) وكمّل امتحاناتك عشان تحقّق الشروط. أول ما تتحقّق، تقدر تنتقل لفيزا الدراسة.',
      es: 'Elige una oferta firme y una de seguro. Después haz el IELTS (si aún no lo has hecho) y termina tus exámenes para cumplir las condiciones. Una vez cumplidas, puedes pasar a tu visado de estudiante.',
    },

    // ─── Hub: timeline ───────────────────────────────────────────────────────────
    'ielts.admissions.hub.timeline.eyebrow': {
      en: 'When to act',
      ar: 'متى تتحرّك',
      es: 'Cuándo actuar',
    },
    'ielts.admissions.hub.timeline.title': {
      en: 'A typical 18-month timeline',
      ar: 'جدول زمني نموذجي على {token} شهر',
      es: 'Un calendario típico de 18 meses',
    },
    'ielts.admissions.hub.timeline.row1.when': {
      en: '18-12 months before',
      ar: 'قبلها بـ 18-12 شهر',
      es: '18-12 meses antes',
    },
    'ielts.admissions.hub.timeline.row1.what': {
      en: 'Research courses and universities. Note the IELTS band and per-component minimum each one asks for. Begin IELTS practice in earnest, targeting your weakest skill first.',
      ar: 'دوّر على التخصصات والجامعات. سجّل الـ Band المطلوب في IELTS والحد الأدنى لكل قسم اللي يطلبه كل واحد. وابدأ التدريب على IELTS بجدّية، وركّز على أضعف مهارة عندك أول.',
      es: 'Investiga cursos y universidades. Anota la banda de IELTS y el mínimo por componente que pide cada uno. Empieza a practicar IELTS en serio, atacando primero tu destreza más débil.',
    },
    'ielts.admissions.hub.timeline.row2.when': {
      en: '12-6 months before',
      ar: 'قبلها بـ 12-6 أشهر',
      es: '12-6 meses antes',
    },
    'ielts.admissions.hub.timeline.row2.what': {
      en: 'Draft and redraft your personal statement. Line up a teacher reference. Sit a first IELTS attempt so you know your starting band and how far you have to go.',
      ar: 'اكتب الـ personal statement وعدّله مرّة بعد مرّة. رتّب تزكية من معلّم. وسوِّ محاولة IELTS أولى عشان تعرف Band البداية وكم باقي لك للهدف.',
      es: 'Redacta y reescribe tu personal statement. Consigue una referencia de un profesor. Haz un primer intento de IELTS para conocer tu banda de partida y cuánto te falta por avanzar.',
    },
    'ielts.admissions.hub.timeline.row3.when': {
      en: 'Autumn before entry',
      ar: 'خريف السنة قبل الدخول',
      es: 'Otoño anterior al ingreso',
    },
    'ielts.admissions.hub.timeline.row3.what': {
      en: 'UCAS opens. Submit early - especially for medicine, dentistry, veterinary and Oxford or Cambridge, which close in mid-October.',
      ar: 'UCAS يفتح. قدّم بدري - خصوصاً للطب وطب الأسنان والبيطري و Oxford أو Cambridge، لأنها تسكّر منتصف أكتوبر.',
      es: 'UCAS abre. Envía pronto, sobre todo para medicina, odontología, veterinaria y Oxford o Cambridge, que cierran a mediados de octubre.',
    },
    'ielts.admissions.hub.timeline.row4.when': {
      en: 'Late January',
      ar: 'أواخر يناير',
      es: 'Finales de enero',
    },
    'ielts.admissions.hub.timeline.row4.what': {
      en: 'The equal-consideration deadline for most courses. Applications in by this date are considered on the same footing.',
      ar: 'الموعد النهائي للنظر المتساوي لأغلب التخصصات. الطلبات اللي توصل قبل هالتاريخ تتدرس على نفس الأساس.',
      es: 'El plazo de consideración equitativa para la mayoría de los cursos. Las solicitudes presentadas antes de esta fecha se consideran en igualdad de condiciones.',
    },
    'ielts.admissions.hub.timeline.row5.when': {
      en: 'Spring-summer',
      ar: 'الربيع-الصيف',
      es: 'Primavera-verano',
    },
    'ielts.admissions.hub.timeline.row5.what': {
      en: 'Reply to your offers (firm + insurance). Meet your conditions: sit or re-sit IELTS if needed and complete your exams.',
      ar: 'رد على عروضك (firm + insurance). حقّق شروطك: سوِّ IELTS أو أعِده إذا تحتاج، وكمّل امتحاناتك.',
      es: 'Responde a tus ofertas (firme + seguro). Cumple tus condiciones: haz o repite el IELTS si es necesario y completa tus exámenes.',
    },
    'ielts.admissions.hub.timeline.row6.when': {
      en: 'Summer before you start',
      ar: 'الصيف قبل ما تبدأ',
      es: 'El verano antes de empezar',
    },
    'ielts.admissions.hub.timeline.row6.what': {
      en: 'Accept your unconditional offer, receive your CAS, and apply for your Student visa in good time.',
      ar: 'اقبل العرض غير المشروط، واستلم الـ CAS، وقدّم على فيزا Student في وقت مبكّر.',
      es: 'Acepta tu oferta incondicional, recibe tu CAS y solicita tu visado Student con tiempo.',
    },
    'ielts.admissions.hub.timeline.note': {
      en: 'Dates move slightly year to year. Always confirm the current cycle’s deadlines on the official UCAS website.',
      ar: 'المواعيد تتغيّر شوي من سنة لسنة. دايم أكّد مواعيد الدورة الحالية من موقع UCAS الرسمي.',
      es: 'Las fechas varían ligeramente de un año a otro. Confirma siempre los plazos del ciclo actual en el sitio web oficial de UCAS.',
    },

    // ─── Hub: English-language requirements ──────────────────────────────────────
    'ielts.admissions.hub.english.eyebrow': {
      en: 'English-language requirements',
      ar: 'شروط اللغة الإنجليزية',
      es: 'Requisitos de inglés',
    },
    'ielts.admissions.hub.english.title': {
      en: 'The IELTS band your course is likely to want',
      ar: 'الـ Band اللي غالباً يطلبه تخصصك في IELTS',
      es: 'La banda de IELTS que probablemente pedirá tu curso',
    },
    'ielts.admissions.hub.english.intro': {
      en: 'These tiers are <strong>indicative</strong>. Every university and course sets its own requirement, and many specify a minimum in each of the four components, not just the overall band. Use this to set a target, then confirm the exact figure on your course page.',
      ar: 'هالمستويات <strong>استرشادية</strong>. كل جامعة وكل تخصص يحدّد شرطه، ووايد منهم يطلبون حد أدنى لكل قسم من الأقسام الأربعة، مو بس الـ Band الكلي. استخدمها عشان تحدّد هدف، وبعدها أكّد الرقم بالضبط من صفحة تخصصك.',
      es: 'Estos niveles son <strong>orientativos</strong>. Cada universidad y curso fija su propio requisito, y muchos especifican un mínimo en cada uno de los cuatro componentes, no solo la banda global. Úsalo para fijar un objetivo y luego confirma la cifra exacta en la página de tu curso.',
    },
    'ielts.admissions.hub.english.col.band': {
      en: 'Typical overall band',
      ar: 'الـ Band الكلي النموذجي',
      es: 'Banda global típica',
    },
    'ielts.admissions.hub.english.col.component': {
      en: 'Component note',
      ar: 'ملاحظة على الأقسام',
      es: 'Nota por componente',
    },
    'ielts.admissions.hub.english.col.courses': {
      en: 'Often required for',
      ar: 'يُطلب غالباً لـ',
      es: 'Suele exigirse para',
    },
    'ielts.admissions.hub.english.tier1.detail': {
      en: 'Often with no component below 7.0',
      ar: 'عادةً بدون أي قسم تحت 7.0',
      es: 'A menudo sin ningún componente por debajo de 7.0',
    },
    'ielts.admissions.hub.english.tier1.courses': {
      en: 'Medicine, dentistry, veterinary, nursing, law, and most courses at the most selective universities.',
      ar: 'الطب وطب الأسنان والبيطري والتمريض والقانون، وأغلب التخصصات في الجامعات الأكثر انتقائية.',
      es: 'Medicina, odontología, veterinaria, enfermería, derecho y la mayoría de los cursos en las universidades más selectivas.',
    },
    'ielts.admissions.hub.english.tier2.detail': {
      en: 'Typically no component below 6.0',
      ar: 'عادةً بدون أي قسم تحت 6.0',
      es: 'Normalmente sin ningún componente por debajo de 6.0',
    },
    'ielts.admissions.hub.english.tier2.courses': {
      en: 'A large share of undergraduate degrees - business, engineering, sciences, humanities and social sciences at many universities.',
      ar: 'نسبة كبيرة من درجات البكالوريوس - إدارة الأعمال والهندسة والعلوم والإنسانيات والعلوم الاجتماعية في وايد جامعات.',
      es: 'Una gran parte de los grados: empresariales, ingeniería, ciencias, humanidades y ciencias sociales en muchas universidades.',
    },
    'ielts.admissions.hub.english.tier3.detail': {
      en: 'Sometimes with a 5.5 minimum per component',
      ar: 'أحياناً بحد أدنى 5.5 لكل قسم',
      es: 'A veces con un mínimo de 5.5 por componente',
    },
    'ielts.admissions.hub.english.tier3.courses': {
      en: 'Some foundation-linked degrees and a range of courses at universities with lower published entry requirements.',
      ar: 'بعض الدرجات المرتبطة بالسنة التأسيسية ومجموعة من التخصصات في جامعات شروط القبول المعلنة عندها أقل.',
      es: 'Algunos grados vinculados a un año de fundación y una variedad de cursos en universidades con requisitos de acceso publicados más bajos.',
    },
    'ielts.admissions.hub.english.tier4.detail': {
      en: 'Per the provider’s own threshold',
      ar: 'حسب الحد اللي تحدّده الجهة نفسها',
      es: 'Según el umbral propio del proveedor',
    },
    'ielts.admissions.hub.english.tier4.courses': {
      en: 'International foundation years and pre-sessional English pathways that lead into a degree.',
      ar: 'السنوات التأسيسية الدولية ومسارات الإنجليزي التمهيدية (pre-sessional) اللي توصّل لدرجة جامعية.',
      es: 'Años de fundación internacionales e itinerarios de inglés pre-sessional que dan acceso a un grado.',
    },
    'ielts.admissions.hub.english.cta.text': {
      en: 'Not at your target band yet? Practise the Academic module and get an instant AI-predicted band on Writing and Speaking.',
      ar: 'لِسّه ما وصلت الـ Band المستهدف؟ تدرّب على وحدة Academic وخذ Band متوقّع فوري بالذكاء الاصطناعي للكتابة والمحادثة.',
      es: '¿Aún no estás en tu banda objetivo? Practica el módulo Academic y obtén una banda predicha al instante con IA en Writing y Speaking.',
    },
    'ielts.admissions.hub.english.cta.button': {
      en: 'Open the IELTS loop',
      ar: 'افتح مسار IELTS',
      es: 'Abrir el ciclo de IELTS',
    },

    // ─── Hub: personal statement ─────────────────────────────────────────────────
    'ielts.admissions.hub.ps.eyebrow': {
      en: 'The personal statement',
      ar: 'الـ personal statement',
      es: 'El personal statement',
    },
    'ielts.admissions.hub.ps.title': {
      en: 'Where applicants from abroad win places',
      ar: 'وين يكسب المتقدّمون من برّا مقاعدهم',
      es: 'Donde los solicitantes del extranjero ganan plazas',
    },
    'ielts.admissions.hub.ps.intro': {
      en: 'Your personal statement is a single piece of writing (UCAS allows up to {chars} characters across {lines} lines) that goes to every course you apply to. Selective universities use it to choose between applicants who already meet the grade and IELTS thresholds - so it has to do more than say you are passionate and hard-working.',
      ar: 'الـ personal statement حقّك نص واحد (UCAS يسمح بحد أقصى {chars} حرف على {lines} سطر) يروح لكل تخصص تقدّم له. الجامعات الانتقائية تستخدمه عشان تختار بين متقدّمين كلهم محقّقين شروط الدرجات و IELTS - فلازم يسوّي أكثر من إنه يقول إنك شغوف ومجتهد.',
      es: 'Tu personal statement es un único texto (UCAS permite hasta {chars} caracteres en {lines} líneas) que va a cada curso al que solicites. Las universidades selectivas lo usan para elegir entre solicitantes que ya cumplen los umbrales de nota y de IELTS, así que tiene que hacer más que decir que eres apasionado y trabajador.',
    },
    'ielts.admissions.hub.ps.list_lead': {
      en: 'The strongest statements tend to:',
      ar: 'أقوى الـ statements عادةً:',
      es: 'Los statements más sólidos suelen:',
    },
    'ielts.admissions.hub.ps.point1': {
      en: 'Open with something specific and genuine, not a famous quotation or a cliché.',
      ar: 'تبدأ بشي محدّد وصادق، مو باقتباس مشهور ولا كلام مكرّر.',
      es: 'Empezar con algo concreto y genuino, no con una cita famosa ni un cliché.',
    },
    'ielts.admissions.hub.ps.point2': {
      en: 'Give a precise reason for THIS subject - and show what about it keeps you reading and thinking.',
      ar: 'تعطي سبب دقيق لهذا التخصص بالذات - وتبيّن شنو فيه اللي يخلّيك تقرأ وتفكّر فيه باستمرار.',
      es: 'Dar una razón precisa para ESTA asignatura, y mostrar qué de ella te mantiene leyendo y pensando.',
    },
    'ielts.admissions.hub.ps.point3': {
      en: 'Use real evidence you own: named books, an EPQ or project, competitions, work experience, roles.',
      ar: 'تستخدم أدلة حقيقية تخصّك: كتب بأسمائها، EPQ أو مشروع، مسابقات، خبرة عمل، أدوار قمت فيها.',
      es: 'Usar evidencias reales que son tuyas: libros con su título, un EPQ o un proyecto, concursos, experiencia laboral, funciones.',
    },
    'ielts.admissions.hub.ps.point4': {
      en: 'Reflect on each example - what it changed, what question it raised - rather than just listing it.',
      ar: 'تتأمّل في كل مثال - شنو غيّر، وش سؤال أثاره - بدل ما تسرده بس.',
      es: 'Reflexionar sobre cada ejemplo —qué cambió, qué pregunta planteó— en lugar de solo enumerarlo.',
    },
    'ielts.admissions.hub.ps.point5': {
      en: 'Read fluently and accurately, in an academic but natural register (especially important when English is an additional language).',
      ar: 'تنقرأ بطلاقة ودقّة، بأسلوب أكاديمي بس طبيعي (هذا مهم وايد لمّا يكون الإنجليزي لغة إضافية).',
      es: 'Leerse con fluidez y precisión, en un registro académico pero natural (especialmente importante cuando el inglés es una lengua adicional).',
    },
    'ielts.admissions.hub.ps.card.title': {
      en: 'Get AI feedback on your draft',
      ar: 'خذ تقييم بالذكاء الاصطناعي لمسودّتك',
      es: 'Obtén feedback de IA sobre tu borrador',
    },
    'ielts.admissions.hub.ps.card.body': {
      en: 'Paste your statement into the Personal-Statement Coach and get a rating and specific comments on structure, motivation, evidence, reflection and English - plus three concrete things to fix next. It is preparation guidance, not an admissions guarantee.',
      ar: 'الصق statement حقّك في مدرّب الـ Personal Statement وخذ تقييم وملاحظات محدّدة على البناء والدافع والأدلة والتأمّل والإنجليزي - وثلاثة أشياء ملموسة تصلّحها بعدين. هذا إرشاد للتحضير، مو ضمان قبول.',
      es: 'Pega tu statement en el Asesor de Personal Statement y obtén una valoración y comentarios concretos sobre estructura, motivación, evidencias, reflexión e inglés, además de tres cosas concretas que corregir a continuación. Es orientación de preparación, no una garantía de admisión.',
    },
    'ielts.admissions.hub.ps.card.button': {
      en: 'Open the coach',
      ar: 'افتح المدرّب',
      es: 'Abrir el asesor',
    },

    // ─── Hub: student visa section ───────────────────────────────────────────────
    'ielts.admissions.hub.visa.eyebrow': {
      en: 'After the offer',
      ar: 'بعد العرض',
      es: 'Después de la oferta',
    },
    'ielts.admissions.hub.visa.title': {
      en: 'Student-visa basics',
      ar: 'أساسيات فيزا الدراسة',
      es: 'Conceptos básicos del visado de estudiante',
    },
    'ielts.admissions.hub.visa.body': {
      en: 'Most students from the Gulf will need the UK <strong>Student visa</strong>. In outline, you apply after you accept an unconditional offer and your university issues a Confirmation of Acceptance for Studies (CAS). You will typically need to evidence your accepted place, sufficient funds for fees and living costs, and - depending on your nationality and course - an approved English-language qualification such as IELTS (often the IELTS for UKVI variant; check what your university and the visa route require).',
      ar: 'أغلب الطلاب من الخليج بيحتاجون <strong>فيزا Student</strong> البريطانية. باختصار، تقدّم عليها بعد ما تقبل عرض غير مشروط وتصدر لك الجامعة Confirmation of Acceptance for Studies (CAS). عادةً بتحتاج تثبت مقعدك المقبول، وأموال كافية للرسوم وتكاليف المعيشة، و - حسب جنسيّتك وتخصصك - مؤهّل إنجليزي معتمد مثل IELTS (غالباً نسخة IELTS for UKVI؛ شوف شنو تطلبه جامعتك ومسار الفيزا).',
      es: 'La mayoría de los estudiantes del Golfo necesitarán el <strong>visado Student</strong> del Reino Unido. A grandes rasgos, lo solicitas después de aceptar una oferta incondicional y de que tu universidad emita un Confirmation of Acceptance for Studies (CAS). Normalmente tendrás que acreditar tu plaza aceptada, fondos suficientes para las tasas y el coste de vida y —según tu nacionalidad y curso— una titulación de inglés aprobada como IELTS (a menudo la variante IELTS for UKVI; comprueba qué exigen tu universidad y la ruta del visado).',
    },
    'ielts.admissions.hub.visa.button': {
      en: 'Read the student-visa overview',
      ar: 'اقرأ نظرة عامة على فيزا الدراسة',
      es: 'Lee la visión general del visado de estudiante',
    },
    'ielts.admissions.hub.visa.disclaimer': {
      en: 'Immigration rules change and depend on your circumstances. This is general preparation information, not immigration advice - always check the official UK government (GOV.UK) guidance and your university’s international office before you act.',
      ar: 'قوانين الهجرة تتغيّر وتعتمد على ظروفك. هذي معلومات تحضير عامة، مو استشارة هجرة - دايم راجع إرشادات الحكومة البريطانية الرسمية (GOV.UK) ومكتب الطلاب الدوليين في جامعتك قبل ما تتصرّف.',
      es: 'Las normas de inmigración cambian y dependen de tus circunstancias. Esto es información general de preparación, no asesoramiento de inmigración: comprueba siempre la guía oficial del gobierno del Reino Unido (GOV.UK) y la oficina internacional de tu universidad antes de actuar.',
    },

    // ─── Hub: FAQ ────────────────────────────────────────────────────────────────
    'ielts.admissions.hub.faq.eyebrow': {
      en: 'Common questions',
      ar: 'أسئلة شائعة',
      es: 'Preguntas frecuentes',
    },
    'ielts.admissions.hub.faq.title': {
      en: 'UK admissions FAQ',
      ar: 'أسئلة شائعة عن القبول في بريطانيا',
      es: 'Preguntas frecuentes sobre la admisión en el Reino Unido',
    },
    'ielts.admissions.hub.faq.q1': {
      en: 'What IELTS band do I need for a UK university?',
      ar: 'شنو الـ Band اللي أحتاجه في IELTS لجامعة بريطانية؟',
      es: '¿Qué banda de IELTS necesito para una universidad del Reino Unido?',
    },
    'ielts.admissions.hub.faq.a1': {
      en: 'It depends entirely on the course. Many undergraduate degrees ask for an overall IELTS Academic band of 6.0-6.5, while competitive courses such as medicine, law or those at the most selective universities often require 7.0 or higher, sometimes with a minimum in every component. Always check the specific course page for its exact requirement.',
      ar: 'يعتمد كلياً على التخصص. وايد درجات بكالوريوس تطلب Band كلي في IELTS Academic بين 6.0-6.5، بينما التخصصات التنافسية مثل الطب والقانون أو اللي في الجامعات الأكثر انتقائية غالباً تطلب 7.0 أو أعلى، وأحياناً بحد أدنى لكل قسم. دايم شوف صفحة التخصص نفسه عشان تعرف الشرط بالضبط.',
      es: 'Depende por completo del curso. Muchos grados piden una banda global de IELTS Academic de 6.0-6.5, mientras que cursos competitivos como medicina, derecho o los de las universidades más selectivas a menudo exigen 7.0 o más, a veces con un mínimo en cada componente. Comprueba siempre la página específica del curso para conocer su requisito exacto.',
    },
    'ielts.admissions.hub.faq.q2': {
      en: 'Which IELTS module do I take for university - Academic or General Training?',
      ar: 'أي وحدة IELTS أسوّي للجامعة - Academic ولا General Training؟',
      es: '¿Qué módulo de IELTS hago para la universidad: Academic o General Training?',
    },
    'ielts.admissions.hub.faq.a2': {
      en: 'For undergraduate or postgraduate study at a UK university you take IELTS Academic. General Training is generally for work and migration routes, not degree-level study. The English Hub’s IELTS practice is built for the Academic module.',
      ar: 'للدراسة الجامعية (بكالوريوس أو دراسات عليا) في جامعة بريطانية تسوّي IELTS Academic. General Training عادةً لمسارات العمل والهجرة، مو للدراسة على مستوى الدرجة الجامعية. تدريب IELTS في The English Hub مبني لوحدة Academic.',
      es: 'Para estudios de grado o posgrado en una universidad del Reino Unido haces IELTS Academic. General Training es en general para rutas de trabajo y migración, no para estudios de nivel universitario. La práctica de IELTS de The English Hub está creada para el módulo Academic.',
    },
    'ielts.admissions.hub.faq.q3': {
      en: 'How important is the personal statement compared with grades and IELTS?',
      ar: 'قد إيش مهم الـ personal statement مقارنةً بالدرجات و IELTS؟',
      es: '¿Qué importancia tiene el personal statement frente a las notas y el IELTS?',
    },
    'ielts.admissions.hub.faq.a3': {
      en: 'Grades and your English band get you over the threshold; the personal statement helps a selective course choose between applicants who all meet it. For applicants from the Gulf and elsewhere outside the UK, a specific, reflective statement - showing why this subject and what you have done about it - is one of the clearest ways to stand out.',
      ar: 'الدرجات وبَند الإنجليزي حقّك يوصّلونك للحد المطلوب؛ والـ personal statement يساعد التخصص الانتقائي يختار بين متقدّمين كلهم محقّقينه. للمتقدّمين من الخليج وغيرهم من برّا بريطانيا، statement محدّد ومليان تأمّل - يبيّن سبب اختيار هذا التخصص وشنو سوّيت بخصوصه - من أوضح الطرق عشان تتميّز.',
      es: 'Las notas y tu banda de inglés te llevan por encima del umbral; el personal statement ayuda a un curso selectivo a elegir entre solicitantes que ya lo cumplen. Para los solicitantes del Golfo y de otros lugares fuera del Reino Unido, un statement concreto y reflexivo —que muestre por qué esta asignatura y qué has hecho al respecto— es una de las formas más claras de destacar.',
    },
    'ielts.admissions.hub.faq.q4': {
      en: 'When should I start, and when are the deadlines?',
      ar: 'متى لازم أبدأ، ومتى المواعيد النهائية؟',
      es: '¿Cuándo debo empezar y cuándo son los plazos?',
    },
    'ielts.admissions.hub.faq.a4': {
      en: 'Start 12-18 months before you want to begin your degree. UCAS opens in the autumn before entry; many courses have an equal-consideration deadline in late January, while medicine, dentistry, veterinary and Oxford/Cambridge close in mid-October - much earlier. Sit IELTS early enough that your band is ready when offers ask for it.',
      ar: 'ابدأ قبل 12-18 شهر من اللي تبي تبدأ فيه درجتك. UCAS يفتح في الخريف قبل الدخول؛ وايد تخصصات عندها موعد نظر متساوي أواخر يناير، بينما الطب وطب الأسنان والبيطري و Oxford/Cambridge تسكّر منتصف أكتوبر - أبكر بوايد. سوِّ IELTS بدري كفاية عشان يكون الـ Band حقّك جاهز لمّا تطلبه العروض.',
      es: 'Empieza 12-18 meses antes de querer comenzar tu grado. UCAS abre en el otoño anterior al ingreso; muchos cursos tienen un plazo de consideración equitativa a finales de enero, mientras que medicina, odontología, veterinaria y Oxford/Cambridge cierran a mediados de octubre, mucho antes. Haz el IELTS con suficiente antelación para que tu banda esté lista cuando las ofertas la pidan.',
    },
    'ielts.admissions.hub.faq.q5': {
      en: 'Do I need a student visa, and what does it require?',
      ar: 'هل أحتاج فيزا دراسة، وشنو تتطلّب؟',
      es: '¿Necesito un visado de estudiante y qué requiere?',
    },
    'ielts.admissions.hub.faq.a5': {
      en: 'Most students from the Gulf will need the UK Student visa. You generally apply after you accept an unconditional offer and receive a Confirmation of Acceptance for Studies (CAS) from your university. You will usually need to show your accepted offer, evidence of funds, and - depending on your nationality and course - an approved English-language qualification such as IELTS. See our student-visa basics for an overview.',
      ar: 'أغلب الطلاب من الخليج بيحتاجون فيزا Student البريطانية. عادةً تقدّم بعد ما تقبل عرض غير مشروط وتستلم Confirmation of Acceptance for Studies (CAS) من جامعتك. غالباً بتحتاج تبيّن عرضك المقبول، وإثبات أموال، و - حسب جنسيّتك وتخصصك - مؤهّل إنجليزي معتمد مثل IELTS. شوف أساسيات فيزا الدراسة عندنا لنظرة عامة.',
      es: 'La mayoría de los estudiantes del Golfo necesitarán el visado Student del Reino Unido. En general lo solicitas después de aceptar una oferta incondicional y recibir un Confirmation of Acceptance for Studies (CAS) de tu universidad. Normalmente tendrás que mostrar tu oferta aceptada, prueba de fondos y —según tu nacionalidad y curso— una titulación de inglés aprobada como IELTS. Consulta nuestros conceptos básicos del visado de estudiante para una visión general.',
    },

    // ─── Hub: closing CTA ────────────────────────────────────────────────────────
    'ielts.admissions.hub.cta.title': {
      en: 'Start with the two things you control today',
      ar: 'ابدأ بالشيئين اللي تتحكّم فيهم اليوم',
      es: 'Empieza por las dos cosas que controlas hoy',
    },
    'ielts.admissions.hub.cta.body': {
      en: 'Sharpen your personal statement and lift your IELTS band. Do both well and you give yourself the best possible shot at your firm choice.',
      ar: 'حسّن الـ personal statement حقّك وارفع Band حقّك في IELTS. سوِّ الاثنين عدل وبتعطي نفسك أفضل فرصة ممكنة لخيارك الأساسي (firm).',
      es: 'Afina tu personal statement y sube tu banda de IELTS. Haz bien ambas y te darás la mejor oportunidad posible en tu opción firme.',
    },
    'ielts.admissions.hub.cta.back': {
      en: 'Back to the IELTS loop',
      ar: 'رجوع لمسار IELTS',
      es: 'Volver al ciclo de IELTS',
    },

    // ─── Personal-Statement Coach (client page) ──────────────────────────────────
    'ielts.admissions.ps.back': {
      en: 'Back to UK admissions',
      ar: 'رجوع للقبول في بريطانيا',
      es: 'Volver a la admisión en el Reino Unido',
    },
    'ielts.admissions.ps.ai_off_title': {
      en: 'AI feedback is turned off',
      ar: 'تقييم الذكاء الاصطناعي مسكّر',
      es: 'El feedback de IA está desactivado',
    },
    'ielts.admissions.ps.ai_off_body_pre': {
      en: 'AI features are currently disabled for this account. To turn AI feedback back on, visit your',
      ar: 'مزايا الذكاء الاصطناعي مسكّرة حالياً لهذا الحساب. عشان ترجّع تقييم الذكاء الاصطناعي، روح لـ',
      es: 'Las funciones de IA están actualmente desactivadas para esta cuenta. Para volver a activar el feedback de IA, visita tus',
    },
    'ielts.admissions.ps.ai_off_link': {
      en: 'privacy settings',
      ar: 'إعدادات الخصوصية',
      es: 'ajustes de privacidad',
    },
    'ielts.admissions.ps.ai_off_body_post': {
      en: 'or ask a parent or guardian to update your preferences.',
      ar: 'أو اطلب من ولي أمرك يحدّث تفضيلاتك.',
      es: 'o pide a un padre o tutor que actualice tus preferencias.',
    },
    'ielts.admissions.ps.eyebrow': {
      en: 'AI feedback - UCAS personal statement',
      ar: 'تقييم بالذكاء الاصطناعي - personal statement لـ UCAS',
      es: 'Feedback de IA - personal statement de UCAS',
    },
    'ielts.admissions.ps.title': {
      en: 'Personal-Statement Coach',
      ar: 'مدرّب الـ Personal Statement',
      es: 'Asesor de Personal Statement',
    },
    'ielts.admissions.ps.subtitle': {
      en: 'Paste a draft of your UCAS personal statement and get honest, specific feedback on structure, motivation, evidence, reflection and English - plus three concrete things to fix in your next draft.',
      ar: 'الصق مسودّة الـ personal statement حقّك لـ UCAS وخذ تقييم صادق ومحدّد على البناء والدافع والأدلة والتأمّل والإنجليزي - وثلاثة أشياء ملموسة تصلّحها في مسودّتك الجاية.',
      es: 'Pega un borrador de tu personal statement de UCAS y obtén feedback honesto y concreto sobre estructura, motivación, evidencias, reflexión e inglés, además de tres cosas concretas que corregir en tu próximo borrador.',
    },
    'ielts.admissions.ps.limit_note': {
      en: 'UCAS allows up to {chars} characters (about {words} words) across {lines} lines.',
      ar: 'UCAS يسمح بحد أقصى {chars} حرف (تقريباً {words} كلمة) على {lines} سطر.',
      es: 'UCAS permite hasta {chars} caracteres (unas {words} palabras) en {lines} líneas.',
    },
    'ielts.admissions.ps.course_label': {
      en: 'Intended course',
      ar: 'التخصص المقصود',
      es: 'Curso previsto',
    },
    'ielts.admissions.ps.university_label': {
      en: 'Target university',
      ar: 'الجامعة المستهدفة',
      es: 'Universidad objetivo',
    },
    'ielts.admissions.ps.optional': { en: '(optional)', ar: '(اختياري)', es: '(opcional)' },
    'ielts.admissions.ps.course_placeholder': {
      en: 'e.g. BSc Economics',
      ar: 'مثال: BSc Economics',
      es: 'p. ej. BSc Economics',
    },
    'ielts.admissions.ps.university_placeholder': {
      en: 'e.g. University of Manchester',
      ar: 'مثال: University of Manchester',
      es: 'p. ej. University of Manchester',
    },
    'ielts.admissions.ps.draft_label': {
      en: 'Your personal statement draft',
      ar: 'مسودّة الـ personal statement حقّك',
      es: 'El borrador de tu personal statement',
    },
    'ielts.admissions.ps.draft_placeholder': {
      en: 'Paste your full personal statement here - opening, why this subject, your evidence and reflection, and a forward-looking close…',
      ar: 'الصق الـ personal statement كامل هنا - المقدمة، سبب اختيار هذا التخصص، أدلتك وتأمّلك، وخاتمة تتطلّع للمستقبل…',
      es: 'Pega aquí tu personal statement completo: apertura, por qué esta asignatura, tus evidencias y reflexión, y un cierre que mire al futuro…',
    },
    'ielts.admissions.ps.word': { en: 'word', ar: 'كلمة', es: 'palabra' },
    'ielts.admissions.ps.words': { en: 'words', ar: 'كلمة', es: 'palabras' },
    'ielts.admissions.ps.char_count': {
      en: '· {count} / {limit} characters',
      ar: '· {count} / {limit} حرف',
      es: '· {count} / {limit} caracteres',
    },
    'ielts.admissions.ps.too_short': {
      en: 'Paste a fuller draft (at least a paragraph or two) to get useful feedback.',
      ar: 'الصق مسودّة أكمل (فقرة أو فقرتين على الأقل) عشان تجيك ملاحظات مفيدة.',
      es: 'Pega un borrador más completo (al menos un párrafo o dos) para obtener feedback útil.',
    },
    'ielts.admissions.ps.over_limit': {
      en: 'Over the UCAS limit - you’ll still get feedback, including where to cut.',
      ar: 'تعدّيت حد UCAS - مع ذلك بتجيك ملاحظات، وبتشمل وين تختصر.',
      es: 'Por encima del límite de UCAS: aun así obtendrás feedback, incluido dónde recortar.',
    },
    'ielts.admissions.ps.view_premium': {
      en: 'View Premium plans',
      ar: 'شوف باقات Premium',
      es: 'Ver planes Premium',
    },
    'ielts.admissions.ps.submitting': {
      en: 'Reading your statement…',
      ar: 'يقرأ الـ statement حقّك…',
      es: 'Leyendo tu statement…',
    },
    'ielts.admissions.ps.submit': { en: 'Get feedback', ar: 'خذ التقييم', es: 'Obtener feedback' },
    'ielts.admissions.ps.submitting_note': {
      en: 'This usually takes 15-30 seconds. Please don’t close the page.',
      ar: 'عادةً ياخذ 15-30 ثانية. لا تسكّر الصفحة لو سمحت.',
      es: 'Esto suele tardar 15-30 segundos. No cierres la página, por favor.',
    },
    'ielts.admissions.ps.privacy_note': {
      en: 'Your draft is sent only to generate feedback. This is guidance for UK-study preparation, not an official UCAS or university service.',
      ar: 'مسودّتك تنرسل بس عشان نطلّع التقييم. هذا إرشاد للتحضير للدراسة في بريطانيا، مو خدمة رسمية من UCAS ولا من جامعة.',
      es: 'Tu borrador se envía solo para generar feedback. Esto es orientación para la preparación de estudios en el Reino Unido, no un servicio oficial de UCAS ni de una universidad.',
    },

    // Error / status messages (route parity)
    'ielts.admissions.ps.err.401': {
      en: 'Please sign in to get feedback on your personal statement.',
      ar: 'سجّل دخولك عشان تجيك ملاحظات على الـ personal statement حقّك.',
      es: 'Inicia sesión para obtener feedback sobre tu personal statement.',
    },
    'ielts.admissions.ps.err.403': {
      en: 'The Personal-Statement Coach is a Premium feature. Please upgrade to access it.',
      ar: 'مدرّب الـ Personal Statement ميزة Premium. رقِّ باقتك عشان توصل لها.',
      es: 'El Asesor de Personal Statement es una función Premium. Mejora tu plan para acceder a él.',
    },
    'ielts.admissions.ps.err.429': {
      en: 'You’ve reached today’s feedback limit. Please try again tomorrow.',
      ar: 'وصلت حد التقييمات حق اليوم. حاول مرّة ثانية باكر.',
      es: 'Has alcanzado el límite de feedback de hoy. Inténtalo de nuevo mañana.',
    },
    'ielts.admissions.ps.err.400': {
      en: 'There was a problem with your draft. Please check it and try again.',
      ar: 'فيه مشكلة في مسودّتك. راجعها وحاول مرّة ثانية.',
      es: 'Hubo un problema con tu borrador. Revísalo e inténtalo de nuevo.',
    },
    'ielts.admissions.ps.err.503': {
      en: 'The AI feedback service is temporarily unavailable. Please try again shortly.',
      ar: 'خدمة التقييم بالذكاء الاصطناعي مو متوفرة مؤقتاً. حاول بعد شوي.',
      es: 'El servicio de feedback de IA no está disponible temporalmente. Inténtalo de nuevo en breve.',
    },
    'ielts.admissions.ps.err.500': {
      en: 'Something went wrong on our end. Please try again later.',
      ar: 'صار خطأ من طرفنا. حاول مرّة ثانية بعدين.',
      es: 'Algo salió mal por nuestra parte. Inténtalo de nuevo más tarde.',
    },
    'ielts.admissions.ps.err.generic': {
      en: 'An unexpected error occurred. Please try again.',
      ar: 'صار خطأ غير متوقّع. حاول مرّة ثانية.',
      es: 'Se produjo un error inesperado. Inténtalo de nuevo.',
    },
    'ielts.admissions.ps.err.parse': {
      en: 'We could not read the feedback this time. Please try again.',
      ar: 'ما قدرنا نقرأ التقييم هالمرّة. حاول مرّة ثانية.',
      es: 'No pudimos leer el feedback esta vez. Inténtalo de nuevo.',
    },
    'ielts.admissions.ps.err.network': {
      en: 'Could not reach the feedback server. Please check your connection and try again.',
      ar: 'ما قدرنا نوصل لسيرفر التقييم. شيك على اتصالك وحاول مرّة ثانية.',
      es: 'No pudimos conectar con el servidor de feedback. Comprueba tu conexión e inténtalo de nuevo.',
    },

    // Feedback view
    'ielts.admissions.ps.fb.overall': {
      en: 'Overall',
      ar: 'التقييم العام',
      es: 'Valoración general',
    },
    'ielts.admissions.ps.fb.average': {
      en: '{score}/5 average',
      ar: 'المعدل {score}/5',
      es: '{score}/5 de media',
    },
    'ielts.admissions.ps.fb.overall_fallback': {
      en: 'Your statement has been reviewed against each dimension below.',
      ar: 'تمت مراجعة الـ statement حقّك على كل بُعد من الأبعاد اللي تحت.',
      es: 'Tu statement se ha revisado según cada dimensión de abajo.',
    },
    'ielts.admissions.ps.fb.strengths': {
      en: 'What’s working',
      ar: 'الأشياء اللي شغّالة',
      es: 'Lo que funciona',
    },
    'ielts.admissions.ps.fb.improve_title': {
      en: 'Three things to improve next',
      ar: 'ثلاثة أشياء تحسّنها بعدين',
      es: 'Tres cosas que mejorar a continuación',
    },
    'ielts.admissions.ps.fb.improve_desc': {
      en: 'Concrete changes to make in your next draft - not a rewrite to copy.',
      ar: 'تغييرات ملموسة تسوّيها في مسودّتك الجاية - مو إعادة كتابة تنسخها.',
      es: 'Cambios concretos que hacer en tu próximo borrador, no una reescritura para copiar.',
    },
    'ielts.admissions.ps.fb.keep_going': { en: 'Keep going', ar: 'كمّل', es: 'Sigue así' },
    'ielts.admissions.ps.fb.keep_going_p1': {
      en: 'Redraft using the three points above, then run it through the coach again to see what moved.',
      ar: 'أعِد الكتابة بالنقاط الثلاث اللي فوق، وبعدها مرّرها على المدرّب مرّة ثانية عشان تشوف وش اللي تحسّن.',
      es: 'Reescribe usando los tres puntos de arriba y luego pásalo de nuevo por el asesor para ver qué ha cambiado.',
    },
    'ielts.admissions.ps.fb.keep_going_p2_pre': {
      en: 'Need to lift your English score for entry too?',
      ar: 'تحتاج ترفع درجة الإنجليزي حقّك للقبول بعد؟',
      es: '¿También necesitas subir tu puntuación de inglés para el acceso?',
    },
    'ielts.admissions.ps.fb.keep_going_link_writing': {
      en: 'Practise IELTS Academic Writing',
      ar: 'تدرّب على كتابة IELTS Academic',
      es: 'Practicar Writing de IELTS Academic',
    },
    'ielts.admissions.ps.fb.keep_going_mid': {
      en: 'or revisit the',
      ar: 'أو ارجع لـ',
      es: 'o vuelve a la',
    },
    'ielts.admissions.ps.fb.keep_going_link_guide': {
      en: 'UK admissions guide',
      ar: 'دليل القبول في بريطانيا',
      es: 'guía de admisión en el Reino Unido',
    },
    'ielts.admissions.ps.fb.disclaimer': {
      en: 'This is AI-generated guidance for UK-study preparation only. It is not an official UCAS or university service, and it is not a prediction or guarantee of any admissions decision.',
      ar: 'هذا إرشاد منشأ بالذكاء الاصطناعي للتحضير للدراسة في بريطانيا فقط. مو خدمة رسمية من UCAS ولا من جامعة، وهو مو توقّع ولا ضمان لأي قرار قبول.',
      es: 'Esto es orientación generada por IA solo para la preparación de estudios en el Reino Unido. No es un servicio oficial de UCAS ni de una universidad, y no es una predicción ni una garantía de ninguna decisión de admisión.',
    },
    'ielts.admissions.ps.fb.back': {
      en: 'Back to admissions guide',
      ar: 'رجوع لدليل القبول',
      es: 'Volver a la guía de admisión',
    },
    'ielts.admissions.ps.fb.try_again': {
      en: 'Revise and re-check',
      ar: 'عدّل وأعِد الفحص',
      es: 'Revisar y volver a comprobar',
    },

    // ─── Student-visa page ───────────────────────────────────────────────────────
    'ielts.admissions.visa.back': {
      en: 'Back to UK admissions',
      ar: 'رجوع للقبول في بريطانيا',
      es: 'Volver a la admisión en el Reino Unido',
    },
    'ielts.admissions.visa.eyebrow': {
      en: 'After your offer',
      ar: 'بعد عرضك',
      es: 'Después de tu oferta',
    },
    'ielts.admissions.visa.title': {
      en: 'UK Student-visa basics for Gulf students',
      ar: 'أساسيات فيزا Student البريطانية لطلاب الخليج',
      es: 'Conceptos básicos del visado Student del Reino Unido para estudiantes del Golfo',
    },
    'ielts.admissions.visa.subtitle': {
      en: 'A plain-English overview of how the UK Student visa fits into your journey - what you need, when to apply, and how your IELTS result connects to it. Use it to prepare and to plan your timing; rely on GOV.UK and your university for the authoritative rules.',
      ar: 'نظرة عامة وبسيطة على شلون فيزا Student البريطانية تدخل في رحلتك - شنو تحتاج، متى تقدّم، وشلون نتيجة IELTS حقّتك ترتبط فيها. استخدمها للتحضير ولتخطيط توقيتك؛ واعتمد على GOV.UK وجامعتك للقواعد المعتمدة.',
      es: 'Una visión general en lenguaje sencillo de cómo encaja el visado Student del Reino Unido en tu trayectoria: qué necesitas, cuándo solicitarlo y cómo se conecta tu resultado de IELTS con él. Úsala para prepararte y planificar tus tiempos; confía en GOV.UK y en tu universidad para las normas oficiales.',
    },
    'ielts.admissions.visa.notice': {
      en: '<strong>This is general information, not immigration advice.</strong> The English Hub is independent and not affiliated with UK Visas and Immigration. Immigration rules and financial thresholds change and depend on your personal circumstances - always confirm the current requirements on the official UK government website and with your university’s international office.',
      ar: '<strong>هذي معلومات عامة، مو استشارة هجرة.</strong> The English Hub مستقلّة ومو تابعة لـ UK Visas and Immigration. قوانين الهجرة والحدود المالية تتغيّر وتعتمد على ظروفك الشخصية - دايم أكّد الشروط الحالية من موقع الحكومة البريطانية الرسمي ومع مكتب الطلاب الدوليين في جامعتك.',
      es: '<strong>Esto es información general, no asesoramiento de inmigración.</strong> The English Hub es independiente y no está afiliada a UK Visas and Immigration. Las normas de inmigración y los umbrales financieros cambian y dependen de tus circunstancias personales: confirma siempre los requisitos actuales en el sitio web oficial del gobierno del Reino Unido y con la oficina internacional de tu universidad.',
    },
    'ielts.admissions.visa.steps.eyebrow': {
      en: 'The sequence',
      ar: 'التسلسل',
      es: 'La secuencia',
    },
    'ielts.admissions.visa.steps.title': {
      en: 'From offer to visa, in four steps',
      ar: 'من العرض للفيزا، في أربع خطوات',
      es: 'De la oferta al visado, en cuatro pasos',
    },
    'ielts.admissions.visa.step1.title': {
      en: 'Accept an unconditional offer',
      ar: 'اقبل عرض غير مشروط',
      es: 'Acepta una oferta incondicional',
    },
    'ielts.admissions.visa.step1.body': {
      en: 'Your university confirms your place is secure - your grades and English-language condition (e.g. an IELTS band) are met. Until an offer is unconditional, you cannot get the document the visa needs.',
      ar: 'جامعتك تأكّد إن مقعدك مضمون - درجاتك وشرط اللغة الإنجليزية (مثل Band معيّن في IELTS) متحقّقة. لين ما يصير العرض غير مشروط، ما تقدر تحصّل المستند اللي تحتاجه الفيزا.',
      es: 'Tu universidad confirma que tu plaza está asegurada: se cumplen tus notas y la condición de inglés (p. ej. una banda de IELTS). Hasta que una oferta sea incondicional, no puedes obtener el documento que el visado necesita.',
    },
    'ielts.admissions.visa.step2.title': {
      en: 'Receive your CAS',
      ar: 'استلم الـ CAS حقّك',
      es: 'Recibe tu CAS',
    },
    'ielts.admissions.visa.step2.body': {
      en: 'The university issues a Confirmation of Acceptance for Studies (CAS): a reference number that links your visa application to your course. You usually request it once you are unconditional and have met the university’s own checks.',
      ar: 'الجامعة تصدر Confirmation of Acceptance for Studies (CAS): رقم مرجعي يربط طلب الفيزا حقّك بتخصصك. عادةً تطلبه أول ما يصير عرضك غير مشروط وتحقّق فحوصات الجامعة نفسها.',
      es: 'La universidad emite un Confirmation of Acceptance for Studies (CAS): un número de referencia que vincula tu solicitud de visado con tu curso. Normalmente lo solicitas una vez que eres incondicional y has superado las propias comprobaciones de la universidad.',
    },
    'ielts.admissions.visa.step3.title': {
      en: 'Prepare your documents',
      ar: 'جهّز مستنداتك',
      es: 'Prepara tus documentos',
    },
    'ielts.admissions.visa.step3.body': {
      en: 'Gather your passport, the CAS, evidence of funds, and your English-language evidence. Some applicants also need a tuberculosis test certificate and academic transcripts - the exact list depends on your nationality and circumstances.',
      ar: 'جمّع جوازك، والـ CAS، وإثبات الأموال، وإثبات اللغة الإنجليزية حقّك. بعض المتقدّمين بعد يحتاجون شهادة فحص السل وكشوف الدرجات الأكاديمية - القائمة بالضبط تعتمد على جنسيّتك وظروفك.',
      es: 'Reúne tu pasaporte, el CAS, la prueba de fondos y tu prueba de inglés. Algunos solicitantes también necesitan un certificado de prueba de tuberculosis y expedientes académicos: la lista exacta depende de tu nacionalidad y circunstancias.',
    },
    'ielts.admissions.visa.step4.title': {
      en: 'Apply, pay and attend biometrics',
      ar: 'قدّم، وادفع، واحضر البصمة الحيوية',
      es: 'Solicita, paga y acude a la cita de biometría',
    },
    'ielts.admissions.visa.step4.body': {
      en: 'Apply online, pay the visa fee and the Immigration Health Surcharge, and provide biometrics. Apply in good time before your course starts - processing times vary by country and season.',
      ar: 'قدّم أونلاين، وادفع رسوم الفيزا و Immigration Health Surcharge، وأعطِ البصمة الحيوية. قدّم في وقت مبكّر قبل ما يبدأ تخصصك - أوقات المعالجة تختلف حسب الدولة والموسم.',
      es: 'Solicita en línea, paga la tasa del visado y el Immigration Health Surcharge, y aporta tus datos biométricos. Solicita con tiempo antes de que empiece tu curso: los plazos de tramitación varían según el país y la temporada.',
    },
    'ielts.admissions.visa.checklist.eyebrow': {
      en: 'What you typically need',
      ar: 'شنو تحتاجه عادةً',
      es: 'Lo que normalmente necesitas',
    },
    'ielts.admissions.visa.checklist.title': {
      en: 'A starting checklist',
      ar: 'قائمة تحقّق للبداية',
      es: 'Una lista de comprobación para empezar',
    },
    'ielts.admissions.visa.checklist.cas.label': {
      en: 'Your CAS and accepted offer',
      ar: 'الـ CAS حقّك وعرضك المقبول',
      es: 'Tu CAS y tu oferta aceptada',
    },
    'ielts.admissions.visa.checklist.cas.detail': {
      en: 'The reference number from your university that ties the application to your course.',
      ar: 'الرقم المرجعي من جامعتك اللي يربط الطلب بتخصصك.',
      es: 'El número de referencia de tu universidad que vincula la solicitud con tu curso.',
    },
    'ielts.admissions.visa.checklist.funds.label': {
      en: 'Evidence of funds',
      ar: 'إثبات الأموال',
      es: 'Prueba de fondos',
    },
    'ielts.admissions.visa.checklist.funds.detail': {
      en: 'Proof you can pay your course fees and living costs for a set period, held for the required number of days before you apply.',
      ar: 'إثبات إنك تقدر تدفع رسوم تخصصك وتكاليف المعيشة لفترة محدّدة، ومحتفظ فيه للعدد المطلوب من الأيام قبل ما تقدّم.',
      es: 'Prueba de que puedes pagar las tasas de tu curso y el coste de vida durante un periodo determinado, mantenidos durante el número de días requerido antes de solicitar.',
    },
    'ielts.admissions.visa.checklist.english.label': {
      en: 'Approved English-language evidence',
      ar: 'إثبات لغة إنجليزية معتمد',
      es: 'Prueba de inglés aprobada',
    },
    'ielts.admissions.visa.checklist.english.detail': {
      en: 'Often an IELTS qualification - frequently the IELTS for UKVI variant - unless your course or nationality exempts you. Check which test and score the route requires.',
      ar: 'غالباً مؤهّل IELTS - وكثير نسخة IELTS for UKVI - إلا إذا كان تخصصك أو جنسيّتك يعفيك. شوف أي اختبار وأي درجة يطلبها المسار.',
      es: 'A menudo una titulación de IELTS —con frecuencia la variante IELTS for UKVI— salvo que tu curso o nacionalidad te exima. Comprueba qué prueba y qué puntuación exige la ruta.',
    },
    'ielts.admissions.visa.checklist.passport.label': {
      en: 'Passport and personal documents',
      ar: 'الجواز والمستندات الشخصية',
      es: 'Pasaporte y documentos personales',
    },
    'ielts.admissions.visa.checklist.passport.detail': {
      en: 'A valid passport plus any additional documents (e.g. a TB test certificate) that apply to your country.',
      ar: 'جواز ساري المفعول مع أي مستندات إضافية (مثل شهادة فحص السل) تنطبق على دولتك.',
      es: 'Un pasaporte válido más cualquier documento adicional (p. ej. un certificado de TB test) que aplique a tu país.',
    },
    'ielts.admissions.visa.english.title': {
      en: 'Make sure your English meets both bars',
      ar: 'تأكّد إن إنجليزيك يوصل للحدّين',
      es: 'Asegúrate de que tu inglés cumple los dos listones',
    },
    'ielts.admissions.visa.english.body': {
      en: 'Your IELTS band has to satisfy your university’s offer and the visa route’s English-language requirement. Practise the Academic module and check where you stand with an instant AI-predicted band.',
      ar: 'الـ Band حقّك في IELTS لازم يحقّق عرض جامعتك وشرط اللغة الإنجليزية لمسار الفيزا. تدرّب على وحدة Academic وشوف وين موقفك بـ Band متوقّع فوري بالذكاء الاصطناعي.',
      es: 'Tu banda de IELTS tiene que satisfacer la oferta de tu universidad y el requisito de inglés de la ruta del visado. Practica el módulo Academic y comprueba dónde estás con una banda predicha al instante con IA.',
    },
    'ielts.admissions.visa.english.button': {
      en: 'Practise IELTS',
      ar: 'تدرّب على IELTS',
      es: 'Practicar IELTS',
    },
    'ielts.admissions.visa.faq.eyebrow': {
      en: 'Common questions',
      ar: 'أسئلة شائعة',
      es: 'Preguntas frecuentes',
    },
    'ielts.admissions.visa.faq.title': {
      en: 'Student-visa FAQ',
      ar: 'أسئلة شائعة عن فيزا الدراسة',
      es: 'Preguntas frecuentes sobre el visado de estudiante',
    },
    'ielts.admissions.visa.faq.q1': {
      en: 'Does my IELTS score matter for the visa as well as the offer?',
      ar: 'هل درجة IELTS حقّتي تهم للفيزا مثل ما تهم للعرض؟',
      es: '¿Importa mi puntuación de IELTS para el visado además de para la oferta?',
    },
    'ielts.admissions.visa.faq.a1': {
      en: 'It can. Universities use your IELTS band to make and confirm your offer, and the Student visa route also has an English-language requirement. Many courses ask for the IELTS for UKVI variant specifically, taken at an approved test centre. Confirm with your university and the official guidance which test and score you need for both the offer and the visa.',
      ar: 'ممكن. الجامعات تستخدم الـ Band حقّك في IELTS عشان تسوّي عرضك وتأكّده، ومسار فيزا Student بعد عنده شرط لغة إنجليزية. وايد تخصصات تطلب نسخة IELTS for UKVI بالذات، تُسوّى في مركز اختبار معتمد. أكّد مع جامعتك ومع الإرشادات الرسمية أي اختبار وأي درجة تحتاجها للعرض وللفيزا الاثنين.',
      es: 'Puede. Las universidades usan tu banda de IELTS para hacer y confirmar tu oferta, y la ruta del visado Student también tiene un requisito de inglés. Muchos cursos piden la variante IELTS for UKVI específicamente, realizada en un centro de examen aprobado. Confirma con tu universidad y con la guía oficial qué prueba y qué puntuación necesitas tanto para la oferta como para el visado.',
    },
    'ielts.admissions.visa.faq.q2': {
      en: 'When should I apply for the Student visa?',
      ar: 'متى لازم أقدّم على فيزا Student؟',
      es: '¿Cuándo debo solicitar el visado Student?',
    },
    'ielts.admissions.visa.faq.a2': {
      en: 'After you accept an unconditional offer and receive your CAS, and far enough ahead of your course start date to allow for processing, which varies by country and time of year. Applying early reduces stress and the risk of delays.',
      ar: 'بعد ما تقبل عرض غير مشروط وتستلم الـ CAS حقّك، وبوقت كافٍ قبل تاريخ بداية تخصصك عشان يتيح للمعالجة، اللي تختلف حسب الدولة ووقت السنة. التقديم بدري يقلّل التوتر وخطر التأخير.',
      es: 'Después de aceptar una oferta incondicional y recibir tu CAS, y con suficiente antelación a la fecha de inicio de tu curso para permitir la tramitación, que varía según el país y la época del año. Solicitar pronto reduce el estrés y el riesgo de retrasos.',
    },
    'ielts.admissions.visa.faq.q3': {
      en: 'How much money do I need to show?',
      ar: 'قد إيش أحتاج أبيّن من المال؟',
      es: '¿Cuánto dinero necesito demostrar?',
    },
    'ielts.admissions.visa.faq.a3': {
      en: 'You generally need to evidence your tuition fees plus living costs for a defined period, held for a set number of days before you apply. The exact figures are set by the UK government and updated periodically - always check the current amounts on GOV.UK and confirm with your university.',
      ar: 'عادةً تحتاج تثبت رسوم دراستك مع تكاليف المعيشة لفترة محدّدة، محتفظ فيها لعدد معيّن من الأيام قبل ما تقدّم. الأرقام بالضبط تحدّدها الحكومة البريطانية وتتحدّث دوريّاً - دايم شيك على المبالغ الحالية في GOV.UK وأكّد مع جامعتك.',
      es: 'En general necesitas acreditar tus tasas de matrícula más el coste de vida durante un periodo definido, mantenidos durante un número determinado de días antes de solicitar. Las cifras exactas las fija el gobierno del Reino Unido y se actualizan periódicamente: comprueba siempre los importes actuales en GOV.UK y confirma con tu universidad.',
    },
    'ielts.admissions.visa.faq.q4': {
      en: 'Is this immigration advice?',
      ar: 'هل هذي استشارة هجرة؟',
      es: '¿Es esto asesoramiento de inmigración?',
    },
    'ielts.admissions.visa.faq.a4': {
      en: 'No. The English Hub is an independent study-preparation platform and is not affiliated with UK Visas and Immigration. This page is general information to help you prepare and ask the right questions. For decisions about your application, rely on the official GOV.UK guidance and your university’s international student office.',
      ar: 'لا. The English Hub منصّة مستقلّة للتحضير للدراسة ومو تابعة لـ UK Visas and Immigration. هالصفحة معلومات عامة تساعدك تتحضّر وتسأل الأسئلة الصح. لقرارات طلبك، اعتمد على إرشادات GOV.UK الرسمية ومكتب الطلاب الدوليين في جامعتك.',
      es: 'No. The English Hub es una plataforma independiente de preparación de estudios y no está afiliada a UK Visas and Immigration. Esta página es información general para ayudarte a prepararte y a hacer las preguntas adecuadas. Para las decisiones sobre tu solicitud, confía en la guía oficial de GOV.UK y en la oficina de estudiantes internacionales de tu universidad.',
    },
  }
