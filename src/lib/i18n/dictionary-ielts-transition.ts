// ─── IELTS Academic-transition modules dictionary shard ─────────────────────
// EN + Khaleeji (Gulf) Arabic for the four self-authored Academic-transition
// modules surfaced at /ielts/readiness/transition:
//   • writing       — academic writing for university
//   • lectures      — note-taking, lectures & independent study
//   • budgeting      — budgeting & opening a UK bank account
//   • accommodation — halls vs private renting
//
// The data file src/lib/ielts/transition-modules.ts stores ONLY these keys for
// every user-facing string (title, summary, body[], keyPoints[], question,
// options[].label); TransitionModulesClient.tsx resolves them via useT(). The
// readiness engine consumes the literal options[].value / field — those are NOT
// keyed here.
//
// `en` reproduces the ORIGINAL self-authored English VERBATIM, including curly
// apostrophes (’) and en-dashes (–), so English mode is visually unchanged.
//
// Khaleeji conventions per the master dictionary header (شنو/شلون/أبغى/وايد/
// الحين/إحنا/روح/شوف/دوّر/سكّر/ببلاش/لحظة); Levantine forms (شو/بحكي/كيفك/ليش)
// are banned. Brand + technical terms stay Latin even inside Arabic text:
// IELTS, Task 2, UCAS, BRP, SIM, Harvard, APA, London, and £ amounts.
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_TRANSITION_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> =
  {
    // ── Module: writing ───────────────────────────────────────────────────────
    'ielts.transition.writing.title': {
      en: 'Academic writing for university',
      ar: 'الكتابة الأكاديمية للجامعة',
      es: 'Escritura académica para la universidad',
    },
    'ielts.transition.writing.summary': {
      en: 'Referencing, academic integrity, and how essays differ from IELTS Task 2.',
      ar: 'التوثيق، والنزاهة الأكاديمية، وشلون تختلف المقالات الجامعية عن IELTS Task 2.',
      es: 'Citas y referencias, integridad académica y en qué se diferencian los ensayos de la IELTS Task 2.',
    },
    'ielts.transition.writing.body.0': {
      en: 'University writing is judged very differently from IELTS Task 2. In IELTS you write a short, self-contained opinion essay from memory in 40 minutes. At university you write longer, researched assignments over days or weeks, and your argument must be supported by evidence from sources you read, not just your own opinion.',
      ar: 'الكتابة الجامعية تتقيّم بشكل مختلف وايد عن IELTS Task 2. في IELTS تكتب مقال رأي قصير ومكتمل من ذاكرتك في 40 دقيقة. أما في الجامعة فتكتب واجبات أطول ومبنية على بحث على مدى أيام أو أسابيع، ولازم حجتك تكون مدعومة بأدلة من مصادر قريتها، مو بس رأيك الشخصي.',
      es: 'La escritura universitaria se evalúa de forma muy distinta a la IELTS Task 2. En IELTS escribes un ensayo de opinión corto y autónomo de memoria en 40 minutos. En la universidad escribes trabajos más largos y documentados a lo largo de días o semanas, y tu argumento debe apoyarse en pruebas de las fuentes que has leído, no solo en tu propia opinión.',
    },
    'ielts.transition.writing.body.1': {
      en: 'Referencing is the backbone of that evidence. Every idea, figure or quotation you take from a source must be credited using your department’s referencing style (commonly Harvard, APA or a numbered style). Get into the habit early of noting the author, year and page for everything you read — chasing references later wastes hours.',
      ar: 'التوثيق هو عمود هالأدلة. أي فكرة أو رقم أو اقتباس تاخذه من مصدر لازم تنسبه لصاحبه حسب أسلوب التوثيق المعتمد في قسمك (غالباً Harvard أو APA أو أسلوب مرقّم). عوّد نفسك من البداية تسجّل اسم المؤلف والسنة ورقم الصفحة لكل شي تقراه — لأن مطاردة المراجع بعدين تضيّع عليك ساعات.',
      es: 'Las referencias son la columna vertebral de esas pruebas. Cada idea, dato o cita que tomes de una fuente debe atribuirse usando el estilo de referencias de tu departamento (normalmente Harvard, APA o un estilo numerado). Adquiere pronto el hábito de anotar el autor, el año y la página de todo lo que leas: perseguir las referencias después te hace perder horas.',
    },
    'ielts.transition.writing.body.2': {
      en: 'Academic integrity matters more than many new students expect. Copying text without crediting it, reusing your own previous work, or paying someone to write for you are all forms of plagiarism, and UK universities use detection software and apply real penalties — from losing marks to failing a module. Paraphrasing properly (re-expressing an idea in your own words AND citing it) is a skill worth practising before you arrive.',
      ar: 'النزاهة الأكاديمية أهم وايد مما يتوقع كثير من الطلاب الجدد. نسخ نص بدون نسبته لصاحبه، أو إعادة استخدام شغلك السابق، أو تدفع لأحد يكتب عنك — كلها أشكال من السرقة العلمية، والجامعات البريطانية تستخدم برامج كشف وتطبّق عقوبات حقيقية — من خصم درجات إلى رسوب في المادة. إعادة الصياغة بشكل صحيح (تعبّر عن الفكرة بكلماتك وتوثّقها) مهارة تستاهل تتمرّن عليها قبل ما توصل.',
      es: 'La integridad académica importa más de lo que esperan muchos estudiantes nuevos. Copiar texto sin atribuirlo, reutilizar tu propio trabajo anterior o pagar a alguien para que escriba por ti son todas formas de plagio, y las universidades del Reino Unido usan software de detección y aplican sanciones reales: desde perder puntos hasta suspender un módulo. Parafrasear correctamente (reexpresar una idea con tus propias palabras Y citarla) es una destreza que vale la pena practicar antes de llegar.',
    },
    'ielts.transition.writing.body.3': {
      en: 'Finally, structure: a university essay builds one clear argument across paragraphs that each make a point, support it with evidence, and link back to the question. That is closer to a long, evidenced version of Task 2 than to anything else — so the writing habits you build for IELTS are a genuine head start.',
      ar: 'وأخيراً، البناء: المقال الجامعي يبني حجة واحدة واضحة عبر فقرات، كل وحدة تطرح نقطة وتدعمها بدليل وتربطها بالسؤال. هذا أقرب لنسخة طويلة ومدعومة بالأدلة من Task 2 من أي شي ثاني — فعادات الكتابة اللي تبنيها لـ IELTS تعطيك بداية قوية صدق.',
      es: 'Por último, la estructura: un ensayo universitario construye un único argumento claro a lo largo de párrafos que plantean un punto, lo apoyan con pruebas y lo conectan de nuevo con la pregunta. Eso se parece más a una versión larga y documentada de la Task 2 que a cualquier otra cosa, así que los hábitos de escritura que desarrollas para IELTS te dan una ventaja real.',
    },
    'ielts.transition.writing.kp.0': {
      en: 'Cite every source — track author, year, page as you read',
      ar: 'وثّق كل مصدر — سجّل المؤلف والسنة والصفحة وانت تقرا',
      es: 'Cita cada fuente: anota autor, año y página mientras lees',
    },
    'ielts.transition.writing.kp.1': {
      en: 'Paraphrase + cite; never copy or self-plagiarise',
      ar: 'أعد الصياغة ووثّق؛ لا تنسخ ولا تعيد استخدام شغلك بدون توثيق',
      es: 'Parafrasea y cita; nunca copies ni reutilices tu trabajo sin citarlo',
    },
    'ielts.transition.writing.kp.2': {
      en: 'One argument, evidenced across linked paragraphs',
      ar: 'حجة وحدة، مدعومة بالأدلة عبر فقرات مترابطة',
      es: 'Un solo argumento, documentado en párrafos conectados',
    },
    'ielts.transition.writing.question': {
      en: 'How confident are you writing referenced, plagiarism-safe academic work?',
      ar: 'شقد انت واثق في كتابة شغل أكاديمي موثّق وخالٍ من السرقة العلمية؟',
      es: '¿Qué tan seguro te sientes escribiendo trabajos académicos referenciados y libres de plagio?',
    },
    'ielts.transition.writing.opt.confident': {
      en: 'Confident — I can reference and paraphrase well',
      ar: 'واثق — أقدر أوثّق وأعيد الصياغة بشكل زين',
      es: 'Seguro: sé citar y parafrasear bien',
    },
    'ielts.transition.writing.opt.some': {
      en: 'Some — I know the basics but need practice',
      ar: 'شوي — أعرف الأساسيات بس أحتاج تمرين',
      es: 'Algo: conozco lo básico pero necesito practicar',
    },
    'ielts.transition.writing.opt.low': {
      en: 'Low — this is new to me',
      ar: 'ضعيف — هذا شي جديد عليّ',
      es: 'Bajo: esto es nuevo para mí',
    },

    // ── Module: lectures ──────────────────────────────────────────────────────
    'ielts.transition.lectures.title': {
      en: 'Note-taking, lectures & independent study',
      ar: 'تدوين الملاحظات، والمحاضرات، والدراسة الذاتية',
      es: 'Toma de apuntes, clases magistrales y estudio independiente',
    },
    'ielts.transition.lectures.summary': {
      en: 'Contact hours vs independent study, and getting value from lectures.',
      ar: 'ساعات التواصل مقابل الدراسة الذاتية، وشلون تستفيد من المحاضرات.',
      es: 'Horas lectivas frente al estudio independiente, y cómo aprovechar las clases.',
    },
    'ielts.transition.lectures.body.0': {
      en: 'A common shock for new international students is how few timetabled hours a UK degree has. You might have only 12–18 “contact hours” a week (lectures, seminars and labs). The rest is independent study — reading, preparing, writing and revising on your own. The expectation is that a full-time degree is genuinely full-time: many universities suggest around 35–40 hours of total study per week.',
      ar: 'من أكثر الأشياء اللي تفاجئ الطلاب الدوليين الجدد قلة الساعات المجدولة في الدرجة البريطانية. ممكن يكون عندك بس 12–18 “contact hour” في الأسبوع (محاضرات وندوات ومختبرات). والباقي دراسة ذاتية — قراءة وتحضير وكتابة ومراجعة بنفسك. التوقّع إن الدرجة بدوام كامل تعني دوام كامل صدق: وايد جامعات تنصح بحوالي 35–40 ساعة دراسة إجمالية في الأسبوع.',
      es: 'Una sorpresa habitual para los nuevos estudiantes internacionales es lo pocas horas programadas que tiene una carrera en el Reino Unido. Puede que tengas solo 12–18 “horas lectivas” a la semana (clases magistrales, seminarios y laboratorios). El resto es estudio independiente: leer, preparar, escribir y repasar por tu cuenta. Se espera que una carrera a tiempo completo sea realmente a tiempo completo: muchas universidades sugieren en torno a 35–40 horas de estudio total por semana.',
    },
    'ielts.transition.lectures.body.1': {
      en: 'That means the timetable is not the workload. If you treat the gaps between lectures as free time rather than study time, you will fall behind quickly, because assessment deadlines assume you have done the reading independently.',
      ar: 'يعني الجدول مو هو حجم الشغل. إذا اعتبرت الفراغات بين المحاضرات وقت فاضي بدل وقت دراسة، بتتأخر بسرعة، لأن مواعيد التقييم تفترض إنك سويت القراءة بنفسك.',
      es: 'Eso significa que el horario no es la carga de trabajo. Si tratas los huecos entre clases como tiempo libre en lugar de tiempo de estudio, te quedarás atrás rápidamente, porque los plazos de evaluación dan por hecho que has hecho las lecturas por tu cuenta.',
    },
    'ielts.transition.lectures.body.2': {
      en: 'Lectures introduce ideas; they rarely contain everything you need. Take selective notes — capture the structure, key terms and anything the lecturer stresses, rather than transcribing every word. Many courses post slides or recordings, so during the lecture focus on understanding, then consolidate your notes afterwards while it is fresh.',
      ar: 'المحاضرات تقدّم لك الأفكار؛ ونادر تحتوي كل اللي تحتاجه. دوّن ملاحظات منتقاة — اكتب الهيكل والمصطلحات المهمة وأي شي يركّز عليه المحاضر، بدل ما تنسخ كل كلمة. وايد مقررات تنشر الشرائح أو التسجيلات، فخلال المحاضرة ركّز على الفهم، وبعدين رتّب ملاحظاتك وهي طازة في بالك.',
      es: 'Las clases magistrales introducen ideas; rara vez contienen todo lo que necesitas. Toma apuntes selectivos: capta la estructura, los términos clave y todo lo que el profesor recalque, en lugar de transcribir cada palabra. Muchos cursos publican las diapositivas o las grabaciones, así que durante la clase céntrate en entender y luego consolida tus apuntes mientras lo tienes fresco.',
    },
    'ielts.transition.lectures.body.3': {
      en: 'Seminars and tutorials are where you are expected to contribute. Coming prepared with the set reading and a question or two is normal and expected — it is not showing off. Building these habits in your first weeks is the single biggest predictor of a smooth transition.',
      ar: 'الندوات والجلسات النقاشية هي المكان اللي يُتوقّع منك تشارك فيه. تجي محضّر القراءة المطلوبة ومعك سؤال أو سؤالين شي طبيعي ومتوقّع — مو استعراض. بناء هالعادات في أسابيعك الأولى هو أقوى مؤشّر على انتقال سلس.',
      es: 'En los seminarios y las tutorías se espera que participes. Llegar preparado con la lectura asignada y una o dos preguntas es normal y esperado: no es presumir. Crear estos hábitos en tus primeras semanas es el mejor indicador de una transición sin problemas.',
    },
    'ielts.transition.lectures.kp.0': {
      en: 'Contact hours are a fraction of the real workload',
      ar: 'ساعات التواصل هي جزء بسيط من حجم الشغل الحقيقي',
      es: 'Las horas lectivas son una fracción de la carga de trabajo real',
    },
    'ielts.transition.lectures.kp.1': {
      en: 'Plan ~35–40 hrs/week including independent study',
      ar: 'خطّط لـ ~35–40 ساعة في الأسبوع تشمل الدراسة الذاتية',
      es: 'Planifica ~35–40 h/semana incluido el estudio independiente',
    },
    'ielts.transition.lectures.kp.2': {
      en: 'Consolidate lecture notes the same day; prep for seminars',
      ar: 'رتّب ملاحظات المحاضرة بنفس اليوم؛ وحضّر للندوات',
      es: 'Consolida los apuntes el mismo día; prepara los seminarios',
    },
    'ielts.transition.lectures.question': {
      en: 'Do you understand contact hours vs independent-study expectations?',
      ar: 'تفهم الفرق بين ساعات التواصل وتوقّعات الدراسة الذاتية؟',
      es: '¿Entiendes la diferencia entre horas lectivas y las expectativas de estudio independiente?',
    },
    'ielts.transition.lectures.opt.understand': {
      en: 'Yes — I understand and can plan for it',
      ar: 'إي — أفهمها وأقدر أخطّط لها',
      es: 'Sí: lo entiendo y puedo planificarlo',
    },
    'ielts.transition.lectures.opt.unsure': {
      en: 'Unsure — I need to read my course handbook',
      ar: 'مو متأكد — لازم أقرا دليل المقرر حقّي',
      es: 'No estoy seguro: necesito leer la guía de mi curso',
    },

    // ── Module: budgeting ─────────────────────────────────────────────────────
    'ielts.transition.budgeting.title': {
      en: 'Budgeting & opening a UK bank account',
      ar: 'إدارة الميزانية وفتح حساب بنكي في UK',
      es: 'Presupuesto y apertura de una cuenta bancaria en el Reino Unido',
    },
    'ielts.transition.budgeting.summary': {
      en: 'Rough monthly costs and getting set up financially when you arrive.',
      ar: 'تكاليف شهرية تقريبية وشلون ترتّب أمورك المالية أول ما توصل.',
      es: 'Costes mensuales aproximados y cómo organizar tus finanzas al llegar.',
    },
    'ielts.transition.budgeting.body.0': {
      en: 'Beyond tuition, you need a realistic monthly budget so your maintenance funds last the year. Outside London a common range is roughly £900–£1,300 a month once you include rent, food, transport, phone and some social spending; in London it is higher. These are planning estimates only — your real costs depend on your city, your accommodation and your lifestyle.',
      ar: 'غير الرسوم الدراسية، تحتاج ميزانية شهرية واقعية عشان أموال المعيشة تكفيك السنة كاملة. برّا London المعدّل الشائع تقريباً £900–£1,300 في الشهر بعد ما تحسب الإيجار والأكل والمواصلات والهاتف وشوي مصروف اجتماعي؛ وفي London أعلى. هذي تقديرات للتخطيط بس — تكاليفك الحقيقية تعتمد على مدينتك وسكنك ونمط حياتك.',
      es: 'Además de la matrícula, necesitas un presupuesto mensual realista para que tus fondos de manutención duren todo el año. Fuera de London, un rango habitual es de unos £900–£1,300 al mes una vez incluyes el alquiler, la comida, el transporte, el teléfono y algo de gasto social; en London es más alto. Son solo estimaciones para planificar: tus costes reales dependen de tu ciudad, tu alojamiento y tu estilo de vida.',
    },
    'ielts.transition.budgeting.body.1': {
      en: 'Build your budget around the fixed costs first: rent (often your biggest single cost), bills if not included, a phone/SIM plan, and travel. Then set sensible amounts for food and personal spending, and keep a small buffer for one-off costs like course materials or a deposit.',
      ar: 'ابنِ ميزانيتك على التكاليف الثابتة أول: الإيجار (غالباً أكبر مصروف عندك)، والفواتير إذا مو مشمولة، وخطة هاتف/SIM، والمواصلات. بعدين حدّد مبالغ معقولة للأكل والمصروف الشخصي، وخلّ معك احتياطي بسيط للتكاليف الطارئة مثل مواد المقرر أو دفعة تأمين.',
      es: 'Construye tu presupuesto primero en torno a los costes fijos: el alquiler (a menudo tu mayor gasto), las facturas si no están incluidas, un plan de teléfono/SIM y el transporte. Después fija cantidades razonables para la comida y el gasto personal, y guarda un pequeño colchón para gastos puntuales como materiales del curso o una fianza.',
    },
    'ielts.transition.budgeting.body.2': {
      en: 'Opening a UK bank account makes day-to-day life much easier and is usually needed to receive any stipend or pay rent. Most banks ask for your passport, your visa/BRP or eVisa share code, and proof of your UK address and university enrolment (your university can issue a bank letter). Some banks and app-based accounts let you start the process before you arrive — check what your university recommends.',
      ar: 'فتح حساب بنكي في UK يسهّل حياتك اليومية وايد وعادة تحتاجه عشان تستلم أي مخصّصات أو تدفع الإيجار. أغلب البنوك تطلب جواز سفرك، وتأشيرتك/BRP أو رمز مشاركة eVisa، وإثبات عنوانك في UK وقيدك في الجامعة (جامعتك تقدر تصدر لك خطاب بنكي). بعض البنوك والحسابات عبر التطبيقات تخليك تبدأ الإجراء قبل ما توصل — شوف شنو توصي به جامعتك.',
      es: 'Abrir una cuenta bancaria en el Reino Unido facilita mucho el día a día y suele ser necesario para recibir cualquier ayuda económica o pagar el alquiler. La mayoría de los bancos piden tu pasaporte, tu visado/BRP o código de uso compartido del eVisa, y un comprobante de tu dirección en el Reino Unido y de tu matrícula universitaria (tu universidad puede emitir una carta bancaria). Algunos bancos y cuentas mediante app te permiten iniciar el proceso antes de llegar: consulta lo que recomienda tu universidad.',
    },
    'ielts.transition.budgeting.body.3': {
      en: 'Set up your account and a budgeting habit in your first couple of weeks. Knowing exactly what comes in and goes out removes a huge amount of stress and protects the funds you worked hard to evidence for your visa.',
      ar: 'افتح حسابك وعوّد نفسك على إدارة الميزانية في أول أسبوعين. معرفتك بالضبط شنو يدخل وشنو يطلع تشيل عنك ضغط وايد وتحمي الأموال اللي تعبت عشان تثبتها لتأشيرتك.',
      es: 'Abre tu cuenta y crea el hábito de presupuestar en tus primeras dos semanas. Saber exactamente qué entra y qué sale elimina muchísimo estrés y protege los fondos que tanto te costó demostrar para tu visado.',
    },
    'ielts.transition.budgeting.kp.0': {
      en: 'Plan ~£900–£1,300/month outside London (more in London)',
      ar: 'خطّط لـ ~£900–£1,300 في الشهر برّا London (أكثر داخل London)',
      es: 'Planifica ~£900–£1,300/mes fuera de London (más en London)',
    },
    'ielts.transition.budgeting.kp.1': {
      en: 'Fix rent, bills, phone, transport first; keep a buffer',
      ar: 'ثبّت الإيجار والفواتير والهاتف والمواصلات أول؛ وخلّ احتياطي',
      es: 'Fija primero alquiler, facturas, teléfono y transporte; deja un colchón',
    },
    'ielts.transition.budgeting.kp.2': {
      en: 'Bank account needs passport, visa/share code & uni letter',
      ar: 'الحساب البنكي يحتاج جواز سفر وتأشيرة/رمز مشاركة وخطاب جامعة',
      es: 'La cuenta bancaria requiere pasaporte, visado/código de uso compartido y carta de la universidad',
    },
    'ielts.transition.budgeting.question': {
      en: 'How confident are you budgeting and setting up money in the UK?',
      ar: 'شقد انت واثق في إدارة ميزانيتك وترتيب أمورك المالية في UK؟',
      es: '¿Qué tan seguro te sientes presupuestando y organizando tu dinero en el Reino Unido?',
    },
    'ielts.transition.budgeting.opt.confident': {
      en: 'Confident — I have a budget and a bank plan',
      ar: 'واثق — عندي ميزانية وخطة بنكية',
      es: 'Seguro: tengo un presupuesto y un plan bancario',
    },
    'ielts.transition.budgeting.opt.some': {
      en: 'Some — I have a rough idea',
      ar: 'شوي — عندي فكرة تقريبية',
      es: 'Algo: tengo una idea aproximada',
    },
    'ielts.transition.budgeting.opt.low': {
      en: 'Low — I haven’t thought about it yet',
      ar: 'ضعيف — لين الحين ما فكّرت فيها',
      es: 'Bajo: todavía no lo he pensado',
    },

    // ── Module: accommodation ─────────────────────────────────────────────────
    'ielts.transition.accommodation.title': {
      en: 'Accommodation: halls vs private',
      ar: 'السكن: السكن الجامعي مقابل السكن الخاص',
      es: 'Alojamiento: residencia universitaria frente a alquiler privado',
    },
    'ielts.transition.accommodation.summary': {
      en: 'Choosing where to live, deposits, and the timelines that catch people out.',
      ar: 'شلون تختار مكان سكنك، ودفعات التأمين، والمواعيد اللي تفاجئ الناس.',
      es: 'Cómo elegir dónde vivir, las fianzas y los plazos que pillan a la gente por sorpresa.',
    },
    'ielts.transition.accommodation.body.0': {
      en: 'Most first-year international students choose university-managed halls of residence. Halls are convenient (often all-inclusive of bills, furnished, with contracts that match the academic year) and they are the easiest way to meet people in your first weeks. Demand is high, so apply as early as your offer allows — popular halls fill up months before term.',
      ar: 'أغلب طلاب السنة الأولى الدوليين يختارون السكن الجامعي المُدار من الجامعة. السكن الجامعي مريح (غالباً شامل الفواتير ومفروش وعقوده تطابق السنة الدراسية) وهو أسهل طريقة تتعرّف فيها على الناس في أسابيعك الأولى. الطلب عالي، فقدّم بأسرع ما يسمح لك عرض القبول — السكنات المرغوبة تنحجز قبل بداية الترم بشهور.',
      es: 'La mayoría de los estudiantes internacionales de primer año eligen las residencias gestionadas por la universidad. Las residencias son cómodas (a menudo con todo incluido en las facturas, amuebladas y con contratos que coinciden con el curso académico) y son la forma más fácil de conocer gente en tus primeras semanas. La demanda es alta, así que solicita en cuanto te lo permita tu oferta: las residencias más populares se llenan meses antes del trimestre.',
    },
    'ielts.transition.accommodation.body.1': {
      en: 'Private renting (a room in a shared house or a studio) can be cheaper or give more independence, but it comes with more responsibility: you usually pay bills separately, sign a longer fixed-term contract, and arrange your own contents insurance. Never pay a deposit or “holding fee” for a property you have not been able to verify, and be alert to rental scams targeting overseas students.',
      ar: 'الإيجار الخاص (غرفة في بيت مشترك أو استوديو) ممكن يكون أرخص أو يعطيك استقلالية أكثر، بس يجي معه مسؤولية أكبر: عادة تدفع الفواتير بشكل منفصل، وتوقّع عقد محدّد المدة أطول، وترتّب تأمين على محتوياتك بنفسك. لا تدفع أبداً دفعة تأمين أو “holding fee” لعقار ما قدرت تتأكد منه، وانتبه لعمليات الاحتيال في الإيجار اللي تستهدف الطلاب من برّا.',
      es: 'El alquiler privado (una habitación en una casa compartida o un estudio) puede ser más barato o darte más independencia, pero conlleva más responsabilidad: normalmente pagas las facturas por separado, firmas un contrato de duración fija más largo y contratas tu propio seguro de contenido. Nunca pagues una fianza ni una “holding fee” por una vivienda que no hayas podido verificar, y mantente alerta ante las estafas de alquiler dirigidas a estudiantes extranjeros.',
    },
    'ielts.transition.accommodation.body.2': {
      en: 'Understand deposits before you commit. For private tenancies in England, your deposit must by law be protected in a government-approved tenancy deposit scheme, and there are caps on how much can be charged. University halls have their own deposit and payment rules — read them carefully.',
      ar: 'افهم دفعات التأمين قبل ما تلتزم. بالنسبة للإيجارات الخاصة في England، لازم تأمينك يكون محمي قانونياً في نظام حماية ودائع إيجار معتمد من الحكومة، وفي حدود قصوى لقيمة المبلغ اللي ينطلب منك. والسكن الجامعي عنده قواعده الخاصة للتأمين والدفع — اقراها زين.',
      es: 'Entiende las fianzas antes de comprometerte. En los alquileres privados en England, tu fianza debe estar protegida por ley en un sistema de depósito de fianzas aprobado por el gobierno, y existen límites sobre cuánto se puede cobrar. Las residencias universitarias tienen sus propias normas de fianza y pago: léelas con atención.',
    },
    'ielts.transition.accommodation.body.3': {
      en: 'The timelines are what catch people out: hall applications often open right after you accept an offer, while private viewings usually happen close to arrival. Plan early, keep copies of every contract, and don’t feel pressured to sign anything before you understand the costs and the cancellation terms.',
      ar: 'المواعيد هي اللي تفاجئ الناس: طلبات السكن الجامعي غالباً تفتح بعد ما تقبل العرض مباشرة، بينما معاينات السكن الخاص عادة تصير قريب من وقت وصولك. خطّط بدري، واحتفظ بنسخ من كل عقد، ولا تحس بضغط توقّع أي شي قبل ما تفهم التكاليف وشروط الإلغاء.',
      es: 'Los plazos son lo que pilla a la gente por sorpresa: las solicitudes de residencia suelen abrirse justo después de aceptar una oferta, mientras que las visitas a alquileres privados suelen producirse cerca de la llegada. Planifica con antelación, guarda copias de cada contrato y no te sientas presionado a firmar nada antes de entender los costes y las condiciones de cancelación.',
    },
    'ielts.transition.accommodation.kp.0': {
      en: 'Apply for halls as early as your offer allows',
      ar: 'قدّم للسكن الجامعي بأسرع ما يسمح لك عرض القبول',
      es: 'Solicita residencia en cuanto te lo permita tu oferta',
    },
    'ielts.transition.accommodation.kp.1': {
      en: 'Private lets: protected deposits, watch for scams',
      ar: 'الإيجار الخاص: تأمين محمي، وانتبه للاحتيال',
      es: 'Alquileres privados: fianzas protegidas, cuidado con las estafas',
    },
    'ielts.transition.accommodation.kp.2': {
      en: 'Timelines vary — plan early, read every contract',
      ar: 'المواعيد تختلف — خطّط بدري، واقرا كل عقد',
      es: 'Los plazos varían: planifica con antelación, lee cada contrato',
    },
    'ielts.transition.accommodation.question': {
      en: 'Where are you with sorting your UK accommodation?',
      ar: 'وين وصلت في ترتيب سكنك في UK؟',
      es: '¿En qué punto estás con la organización de tu alojamiento en el Reino Unido?',
    },
    'ielts.transition.accommodation.opt.sorted': {
      en: 'Sorted — I have somewhere confirmed',
      ar: 'مرتّب — عندي مكان مؤكّد',
      es: 'Resuelto: tengo un lugar confirmado',
    },
    'ielts.transition.accommodation.opt.searching': {
      en: 'Searching — actively looking',
      ar: 'أدوّر — أبحث بجدّية',
      es: 'Buscando: lo estoy mirando activamente',
    },
    'ielts.transition.accommodation.opt.not_started': {
      en: 'Not started yet',
      ar: 'لين الحين ما بديت',
      es: 'Todavía no he empezado',
    },
  }
