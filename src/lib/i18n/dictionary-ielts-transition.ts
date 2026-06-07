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
    },
    'ielts.transition.writing.summary': {
      en: 'Referencing, academic integrity, and how essays differ from IELTS Task 2.',
      ar: 'التوثيق، والنزاهة الأكاديمية، وشلون تختلف المقالات الجامعية عن IELTS Task 2.',
    },
    'ielts.transition.writing.body.0': {
      en: 'University writing is judged very differently from IELTS Task 2. In IELTS you write a short, self-contained opinion essay from memory in 40 minutes. At university you write longer, researched assignments over days or weeks, and your argument must be supported by evidence from sources you read, not just your own opinion.',
      ar: 'الكتابة الجامعية تتقيّم بشكل مختلف وايد عن IELTS Task 2. في IELTS تكتب مقال رأي قصير ومكتمل من ذاكرتك في 40 دقيقة. أما في الجامعة فتكتب واجبات أطول ومبنية على بحث على مدى أيام أو أسابيع، ولازم حجتك تكون مدعومة بأدلة من مصادر قريتها، مو بس رأيك الشخصي.',
    },
    'ielts.transition.writing.body.1': {
      en: 'Referencing is the backbone of that evidence. Every idea, figure or quotation you take from a source must be credited using your department’s referencing style (commonly Harvard, APA or a numbered style). Get into the habit early of noting the author, year and page for everything you read — chasing references later wastes hours.',
      ar: 'التوثيق هو عمود هالأدلة. أي فكرة أو رقم أو اقتباس تاخذه من مصدر لازم تنسبه لصاحبه حسب أسلوب التوثيق المعتمد في قسمك (غالباً Harvard أو APA أو أسلوب مرقّم). عوّد نفسك من البداية تسجّل اسم المؤلف والسنة ورقم الصفحة لكل شي تقراه — لأن مطاردة المراجع بعدين تضيّع عليك ساعات.',
    },
    'ielts.transition.writing.body.2': {
      en: 'Academic integrity matters more than many new students expect. Copying text without crediting it, reusing your own previous work, or paying someone to write for you are all forms of plagiarism, and UK universities use detection software and apply real penalties — from losing marks to failing a module. Paraphrasing properly (re-expressing an idea in your own words AND citing it) is a skill worth practising before you arrive.',
      ar: 'النزاهة الأكاديمية أهم وايد مما يتوقع كثير من الطلاب الجدد. نسخ نص بدون نسبته لصاحبه، أو إعادة استخدام شغلك السابق، أو تدفع لأحد يكتب عنك — كلها أشكال من السرقة العلمية، والجامعات البريطانية تستخدم برامج كشف وتطبّق عقوبات حقيقية — من خصم درجات إلى رسوب في المادة. إعادة الصياغة بشكل صحيح (تعبّر عن الفكرة بكلماتك وتوثّقها) مهارة تستاهل تتمرّن عليها قبل ما توصل.',
    },
    'ielts.transition.writing.body.3': {
      en: 'Finally, structure: a university essay builds one clear argument across paragraphs that each make a point, support it with evidence, and link back to the question. That is closer to a long, evidenced version of Task 2 than to anything else — so the writing habits you build for IELTS are a genuine head start.',
      ar: 'وأخيراً، البناء: المقال الجامعي يبني حجة واحدة واضحة عبر فقرات، كل وحدة تطرح نقطة وتدعمها بدليل وتربطها بالسؤال. هذا أقرب لنسخة طويلة ومدعومة بالأدلة من Task 2 من أي شي ثاني — فعادات الكتابة اللي تبنيها لـ IELTS تعطيك بداية قوية صدق.',
    },
    'ielts.transition.writing.kp.0': {
      en: 'Cite every source — track author, year, page as you read',
      ar: 'وثّق كل مصدر — سجّل المؤلف والسنة والصفحة وانت تقرا',
    },
    'ielts.transition.writing.kp.1': {
      en: 'Paraphrase + cite; never copy or self-plagiarise',
      ar: 'أعد الصياغة ووثّق؛ لا تنسخ ولا تعيد استخدام شغلك بدون توثيق',
    },
    'ielts.transition.writing.kp.2': {
      en: 'One argument, evidenced across linked paragraphs',
      ar: 'حجة وحدة، مدعومة بالأدلة عبر فقرات مترابطة',
    },
    'ielts.transition.writing.question': {
      en: 'How confident are you writing referenced, plagiarism-safe academic work?',
      ar: 'شقد انت واثق في كتابة شغل أكاديمي موثّق وخالٍ من السرقة العلمية؟',
    },
    'ielts.transition.writing.opt.confident': {
      en: 'Confident — I can reference and paraphrase well',
      ar: 'واثق — أقدر أوثّق وأعيد الصياغة بشكل زين',
    },
    'ielts.transition.writing.opt.some': {
      en: 'Some — I know the basics but need practice',
      ar: 'شوي — أعرف الأساسيات بس أحتاج تمرين',
    },
    'ielts.transition.writing.opt.low': {
      en: 'Low — this is new to me',
      ar: 'ضعيف — هذا شي جديد عليّ',
    },

    // ── Module: lectures ──────────────────────────────────────────────────────
    'ielts.transition.lectures.title': {
      en: 'Note-taking, lectures & independent study',
      ar: 'تدوين الملاحظات، والمحاضرات، والدراسة الذاتية',
    },
    'ielts.transition.lectures.summary': {
      en: 'Contact hours vs independent study, and getting value from lectures.',
      ar: 'ساعات التواصل مقابل الدراسة الذاتية، وشلون تستفيد من المحاضرات.',
    },
    'ielts.transition.lectures.body.0': {
      en: 'A common shock for new international students is how few timetabled hours a UK degree has. You might have only 12–18 “contact hours” a week (lectures, seminars and labs). The rest is independent study — reading, preparing, writing and revising on your own. The expectation is that a full-time degree is genuinely full-time: many universities suggest around 35–40 hours of total study per week.',
      ar: 'من أكثر الأشياء اللي تفاجئ الطلاب الدوليين الجدد قلة الساعات المجدولة في الدرجة البريطانية. ممكن يكون عندك بس 12–18 “contact hour” في الأسبوع (محاضرات وندوات ومختبرات). والباقي دراسة ذاتية — قراءة وتحضير وكتابة ومراجعة بنفسك. التوقّع إن الدرجة بدوام كامل تعني دوام كامل صدق: وايد جامعات تنصح بحوالي 35–40 ساعة دراسة إجمالية في الأسبوع.',
    },
    'ielts.transition.lectures.body.1': {
      en: 'That means the timetable is not the workload. If you treat the gaps between lectures as free time rather than study time, you will fall behind quickly, because assessment deadlines assume you have done the reading independently.',
      ar: 'يعني الجدول مو هو حجم الشغل. إذا اعتبرت الفراغات بين المحاضرات وقت فاضي بدل وقت دراسة، بتتأخر بسرعة، لأن مواعيد التقييم تفترض إنك سويت القراءة بنفسك.',
    },
    'ielts.transition.lectures.body.2': {
      en: 'Lectures introduce ideas; they rarely contain everything you need. Take selective notes — capture the structure, key terms and anything the lecturer stresses, rather than transcribing every word. Many courses post slides or recordings, so during the lecture focus on understanding, then consolidate your notes afterwards while it is fresh.',
      ar: 'المحاضرات تقدّم لك الأفكار؛ ونادر تحتوي كل اللي تحتاجه. دوّن ملاحظات منتقاة — اكتب الهيكل والمصطلحات المهمة وأي شي يركّز عليه المحاضر، بدل ما تنسخ كل كلمة. وايد مقررات تنشر الشرائح أو التسجيلات، فخلال المحاضرة ركّز على الفهم، وبعدين رتّب ملاحظاتك وهي طازة في بالك.',
    },
    'ielts.transition.lectures.body.3': {
      en: 'Seminars and tutorials are where you are expected to contribute. Coming prepared with the set reading and a question or two is normal and expected — it is not showing off. Building these habits in your first weeks is the single biggest predictor of a smooth transition.',
      ar: 'الندوات والجلسات النقاشية هي المكان اللي يُتوقّع منك تشارك فيه. تجي محضّر القراءة المطلوبة ومعك سؤال أو سؤالين شي طبيعي ومتوقّع — مو استعراض. بناء هالعادات في أسابيعك الأولى هو أقوى مؤشّر على انتقال سلس.',
    },
    'ielts.transition.lectures.kp.0': {
      en: 'Contact hours are a fraction of the real workload',
      ar: 'ساعات التواصل هي جزء بسيط من حجم الشغل الحقيقي',
    },
    'ielts.transition.lectures.kp.1': {
      en: 'Plan ~35–40 hrs/week including independent study',
      ar: 'خطّط لـ ~35–40 ساعة في الأسبوع تشمل الدراسة الذاتية',
    },
    'ielts.transition.lectures.kp.2': {
      en: 'Consolidate lecture notes the same day; prep for seminars',
      ar: 'رتّب ملاحظات المحاضرة بنفس اليوم؛ وحضّر للندوات',
    },
    'ielts.transition.lectures.question': {
      en: 'Do you understand contact hours vs independent-study expectations?',
      ar: 'تفهم الفرق بين ساعات التواصل وتوقّعات الدراسة الذاتية؟',
    },
    'ielts.transition.lectures.opt.understand': {
      en: 'Yes — I understand and can plan for it',
      ar: 'إي — أفهمها وأقدر أخطّط لها',
    },
    'ielts.transition.lectures.opt.unsure': {
      en: 'Unsure — I need to read my course handbook',
      ar: 'مو متأكد — لازم أقرا دليل المقرر حقّي',
    },

    // ── Module: budgeting ─────────────────────────────────────────────────────
    'ielts.transition.budgeting.title': {
      en: 'Budgeting & opening a UK bank account',
      ar: 'إدارة الميزانية وفتح حساب بنكي في UK',
    },
    'ielts.transition.budgeting.summary': {
      en: 'Rough monthly costs and getting set up financially when you arrive.',
      ar: 'تكاليف شهرية تقريبية وشلون ترتّب أمورك المالية أول ما توصل.',
    },
    'ielts.transition.budgeting.body.0': {
      en: 'Beyond tuition, you need a realistic monthly budget so your maintenance funds last the year. Outside London a common range is roughly £900–£1,300 a month once you include rent, food, transport, phone and some social spending; in London it is higher. These are planning estimates only — your real costs depend on your city, your accommodation and your lifestyle.',
      ar: 'غير الرسوم الدراسية، تحتاج ميزانية شهرية واقعية عشان أموال المعيشة تكفيك السنة كاملة. برّا London المعدّل الشائع تقريباً £900–£1,300 في الشهر بعد ما تحسب الإيجار والأكل والمواصلات والهاتف وشوي مصروف اجتماعي؛ وفي London أعلى. هذي تقديرات للتخطيط بس — تكاليفك الحقيقية تعتمد على مدينتك وسكنك ونمط حياتك.',
    },
    'ielts.transition.budgeting.body.1': {
      en: 'Build your budget around the fixed costs first: rent (often your biggest single cost), bills if not included, a phone/SIM plan, and travel. Then set sensible amounts for food and personal spending, and keep a small buffer for one-off costs like course materials or a deposit.',
      ar: 'ابنِ ميزانيتك على التكاليف الثابتة أول: الإيجار (غالباً أكبر مصروف عندك)، والفواتير إذا مو مشمولة، وخطة هاتف/SIM، والمواصلات. بعدين حدّد مبالغ معقولة للأكل والمصروف الشخصي، وخلّ معك احتياطي بسيط للتكاليف الطارئة مثل مواد المقرر أو دفعة تأمين.',
    },
    'ielts.transition.budgeting.body.2': {
      en: 'Opening a UK bank account makes day-to-day life much easier and is usually needed to receive any stipend or pay rent. Most banks ask for your passport, your visa/BRP or eVisa share code, and proof of your UK address and university enrolment (your university can issue a bank letter). Some banks and app-based accounts let you start the process before you arrive — check what your university recommends.',
      ar: 'فتح حساب بنكي في UK يسهّل حياتك اليومية وايد وعادة تحتاجه عشان تستلم أي مخصّصات أو تدفع الإيجار. أغلب البنوك تطلب جواز سفرك، وتأشيرتك/BRP أو رمز مشاركة eVisa، وإثبات عنوانك في UK وقيدك في الجامعة (جامعتك تقدر تصدر لك خطاب بنكي). بعض البنوك والحسابات عبر التطبيقات تخليك تبدأ الإجراء قبل ما توصل — شوف شنو توصي به جامعتك.',
    },
    'ielts.transition.budgeting.body.3': {
      en: 'Set up your account and a budgeting habit in your first couple of weeks. Knowing exactly what comes in and goes out removes a huge amount of stress and protects the funds you worked hard to evidence for your visa.',
      ar: 'افتح حسابك وعوّد نفسك على إدارة الميزانية في أول أسبوعين. معرفتك بالضبط شنو يدخل وشنو يطلع تشيل عنك ضغط وايد وتحمي الأموال اللي تعبت عشان تثبتها لتأشيرتك.',
    },
    'ielts.transition.budgeting.kp.0': {
      en: 'Plan ~£900–£1,300/month outside London (more in London)',
      ar: 'خطّط لـ ~£900–£1,300 في الشهر برّا London (أكثر داخل London)',
    },
    'ielts.transition.budgeting.kp.1': {
      en: 'Fix rent, bills, phone, transport first; keep a buffer',
      ar: 'ثبّت الإيجار والفواتير والهاتف والمواصلات أول؛ وخلّ احتياطي',
    },
    'ielts.transition.budgeting.kp.2': {
      en: 'Bank account needs passport, visa/share code & uni letter',
      ar: 'الحساب البنكي يحتاج جواز سفر وتأشيرة/رمز مشاركة وخطاب جامعة',
    },
    'ielts.transition.budgeting.question': {
      en: 'How confident are you budgeting and setting up money in the UK?',
      ar: 'شقد انت واثق في إدارة ميزانيتك وترتيب أمورك المالية في UK؟',
    },
    'ielts.transition.budgeting.opt.confident': {
      en: 'Confident — I have a budget and a bank plan',
      ar: 'واثق — عندي ميزانية وخطة بنكية',
    },
    'ielts.transition.budgeting.opt.some': {
      en: 'Some — I have a rough idea',
      ar: 'شوي — عندي فكرة تقريبية',
    },
    'ielts.transition.budgeting.opt.low': {
      en: 'Low — I haven’t thought about it yet',
      ar: 'ضعيف — لين الحين ما فكّرت فيها',
    },

    // ── Module: accommodation ─────────────────────────────────────────────────
    'ielts.transition.accommodation.title': {
      en: 'Accommodation: halls vs private',
      ar: 'السكن: السكن الجامعي مقابل السكن الخاص',
    },
    'ielts.transition.accommodation.summary': {
      en: 'Choosing where to live, deposits, and the timelines that catch people out.',
      ar: 'شلون تختار مكان سكنك، ودفعات التأمين، والمواعيد اللي تفاجئ الناس.',
    },
    'ielts.transition.accommodation.body.0': {
      en: 'Most first-year international students choose university-managed halls of residence. Halls are convenient (often all-inclusive of bills, furnished, with contracts that match the academic year) and they are the easiest way to meet people in your first weeks. Demand is high, so apply as early as your offer allows — popular halls fill up months before term.',
      ar: 'أغلب طلاب السنة الأولى الدوليين يختارون السكن الجامعي المُدار من الجامعة. السكن الجامعي مريح (غالباً شامل الفواتير ومفروش وعقوده تطابق السنة الدراسية) وهو أسهل طريقة تتعرّف فيها على الناس في أسابيعك الأولى. الطلب عالي، فقدّم بأسرع ما يسمح لك عرض القبول — السكنات المرغوبة تنحجز قبل بداية الترم بشهور.',
    },
    'ielts.transition.accommodation.body.1': {
      en: 'Private renting (a room in a shared house or a studio) can be cheaper or give more independence, but it comes with more responsibility: you usually pay bills separately, sign a longer fixed-term contract, and arrange your own contents insurance. Never pay a deposit or “holding fee” for a property you have not been able to verify, and be alert to rental scams targeting overseas students.',
      ar: 'الإيجار الخاص (غرفة في بيت مشترك أو استوديو) ممكن يكون أرخص أو يعطيك استقلالية أكثر، بس يجي معه مسؤولية أكبر: عادة تدفع الفواتير بشكل منفصل، وتوقّع عقد محدّد المدة أطول، وترتّب تأمين على محتوياتك بنفسك. لا تدفع أبداً دفعة تأمين أو “holding fee” لعقار ما قدرت تتأكد منه، وانتبه لعمليات الاحتيال في الإيجار اللي تستهدف الطلاب من برّا.',
    },
    'ielts.transition.accommodation.body.2': {
      en: 'Understand deposits before you commit. For private tenancies in England, your deposit must by law be protected in a government-approved tenancy deposit scheme, and there are caps on how much can be charged. University halls have their own deposit and payment rules — read them carefully.',
      ar: 'افهم دفعات التأمين قبل ما تلتزم. بالنسبة للإيجارات الخاصة في England، لازم تأمينك يكون محمي قانونياً في نظام حماية ودائع إيجار معتمد من الحكومة، وفي حدود قصوى لقيمة المبلغ اللي ينطلب منك. والسكن الجامعي عنده قواعده الخاصة للتأمين والدفع — اقراها زين.',
    },
    'ielts.transition.accommodation.body.3': {
      en: 'The timelines are what catch people out: hall applications often open right after you accept an offer, while private viewings usually happen close to arrival. Plan early, keep copies of every contract, and don’t feel pressured to sign anything before you understand the costs and the cancellation terms.',
      ar: 'المواعيد هي اللي تفاجئ الناس: طلبات السكن الجامعي غالباً تفتح بعد ما تقبل العرض مباشرة، بينما معاينات السكن الخاص عادة تصير قريب من وقت وصولك. خطّط بدري، واحتفظ بنسخ من كل عقد، ولا تحس بضغط توقّع أي شي قبل ما تفهم التكاليف وشروط الإلغاء.',
    },
    'ielts.transition.accommodation.kp.0': {
      en: 'Apply for halls as early as your offer allows',
      ar: 'قدّم للسكن الجامعي بأسرع ما يسمح لك عرض القبول',
    },
    'ielts.transition.accommodation.kp.1': {
      en: 'Private lets: protected deposits, watch for scams',
      ar: 'الإيجار الخاص: تأمين محمي، وانتبه للاحتيال',
    },
    'ielts.transition.accommodation.kp.2': {
      en: 'Timelines vary — plan early, read every contract',
      ar: 'المواعيد تختلف — خطّط بدري، واقرا كل عقد',
    },
    'ielts.transition.accommodation.question': {
      en: 'Where are you with sorting your UK accommodation?',
      ar: 'وين وصلت في ترتيب سكنك في UK؟',
    },
    'ielts.transition.accommodation.opt.sorted': {
      en: 'Sorted — I have somewhere confirmed',
      ar: 'مرتّب — عندي مكان مؤكّد',
    },
    'ielts.transition.accommodation.opt.searching': {
      en: 'Searching — actively looking',
      ar: 'أدوّر — أبحث بجدّية',
    },
    'ielts.transition.accommodation.opt.not_started': {
      en: 'Not started yet',
      ar: 'لين الحين ما بديت',
    },
  }
