/**
 * Genuine Khaleeji Arabic — trust namespaces (Bucket A wave 1)
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
 * AR is hand-authored natural Gulf (Khaleeji) register — conversational,
 * not MSA, not machine-literal — matching the voice of
 * src/lib/eal/curriculum.ts. Brand and proper nouns (The English Hub,
 * Companies House, WCAG, ICO numbers, exam boards, EASS, etc.) are kept
 * as-is.
 *
 * This file is wired into the lookup chain centrally by dictionary.ts
 * (the orchestrator). Do not edit dictionary.ts here.
 *
 * Written 2026-05-16.
 */

export const TRUST_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ───────────────────────────────────────────────────────────────────
  // /press — Hero
  // ───────────────────────────────────────────────────────────────────
  'press.hero.eyebrow': { en: 'Press & Media', ar: 'الصحافة والإعلام' },
  'press.hero.title': {
    en: 'The English Hub is building a smarter way to support English learning.',
    ar: 'The English Hub يبني طريقة أذكى لدعم تعلّم الإنجليزي.',
  },
  'press.hero.lede': {
    en: 'The English Hub is an independent English learning platform supporting GCSE, IGCSE, KS3 and EAL learners through structured resources, AI-assisted feedback, exam-style practice, teacher tools and school-level analytics.',
    ar: 'The English Hub منصّة مستقلة لتعلّم الإنجليزي تدعم طلاب GCSE وIGCSE وKS3 وEAL عن طريق مصادر منظّمة، وملاحظات مدعومة بالذكاء الاصطناعي، وتمارين على نمط الامتحان، وأدوات للمعلّمين، وتحليلات على مستوى المدرسة.',
  },

  // 60-second overview
  'press.overview.eyebrow': { en: 'About', ar: 'نبذة' },
  'press.overview.title': { en: 'A 60-second overview', ar: 'نظرة سريعة في ٦٠ ثانية' },
  'press.overview.p1': {
    en: 'The English Hub is an independent English learning platform designed for students, teachers and schools. The platform supports GCSE, IGCSE, KS3 and EAL English through structured learning resources, AI-assisted feedback, mock exams, reading and writing practice, teacher tools and school-level reporting.',
    ar: 'The English Hub منصّة مستقلة لتعلّم الإنجليزي مصمّمة للطلاب والمعلّمين والمدارس. المنصّة تدعم إنجليزي GCSE وIGCSE وKS3 وEAL عن طريق مصادر تعلّم منظّمة، وملاحظات مدعومة بالذكاء الاصطناعي، وامتحانات تجريبية، وتمارين قراءة وكتابة، وأدوات للمعلّمين، وتقارير على مستوى المدرسة.',
  },
  'press.overview.p2': {
    en: 'The platform is exam-board aligned, not exam-board endorsed, and supports AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE specifications. AI is used to assist drafting, formative feedback and resource generation; humans review what reaches students.',
    ar: 'المنصّة متوافقة مع مجالس الامتحانات، مو معتمدة منهم، وتدعم مواصفات AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge IGCSE. الذكاء الاصطناعي يساعد في الصياغة والملاحظات التكوينية وإنشاء المصادر؛ والبشر يراجعون اللي يوصل للطلاب.',
  },

  // Company facts
  'press.facts.eyebrow': { en: 'Company facts', ar: 'معلومات الشركة' },
  'press.facts.title': {
    en: 'Quick reference for journalists',
    ar: 'مرجع سريع للصحفيين',
  },

  'press.facts.entity.label': { en: 'Legal entity', ar: 'الكيان القانوني' },
  'press.facts.entity.name': { en: 'Upskill Energy Limited', ar: 'Upskill Energy Limited' },
  'press.facts.entity.company_no': { en: 'Company No. 16511479', ar: 'Company No. 16511479' },
  'press.facts.entity.jurisdiction': {
    en: 'Registered in England & Wales',
    ar: 'مسجّلة في إنجلترا وويلز',
  },

  'press.facts.office.label': { en: 'Registered office', ar: 'المكتب المسجّل' },
  'press.facts.office.short': {
    en: 'Available via Companies House',
    ar: 'متوفّر عن طريق Companies House',
  },
  'press.facts.office.body_pre': {
    en: 'Journalists requiring an attributable address for filings should email',
    ar: 'الصحفيون اللي يحتاجون عنوان موثّق للملفّات الرسمية يراسلوننا على',
  },
  'press.facts.office.body_post': {
    en: ' and we will respond within one working day.',
    ar: ' ونرد عليهم خلال يوم عمل واحد.',
  },

  'press.facts.ico.label': { en: 'ICO data protection', ar: 'حماية البيانات لدى ICO' },
  'press.facts.ico.registration': { en: 'Registration ZC016690', ar: 'Registration ZC016690' },
  'press.facts.ico.controller': {
    en: 'Upskill Energy Limited acts as data controller for The English Hub.',
    ar: 'Upskill Energy Limited هي المتحكّم في البيانات لـ The English Hub.',
  },

  'press.facts.founded.label': { en: 'Founded', ar: 'تأسّست' },
  'press.facts.founded.year': {
    en: '2024 — operating from 2026',
    ar: '٢٠٢٤ — وتشتغل من ٢٠٢٦',
  },
  'press.facts.founded.bootstrapped': {
    en: 'Bootstrapped. No outside investment to date.',
    ar: 'ممولة ذاتياً. ما فيه استثمار خارجي لين الحين.',
  },

  // Key stats
  'press.stats.eyebrow': { en: 'Key facts', ar: 'حقائق أساسية' },
  'press.stats.title': { en: 'At a glance', ar: 'لمحة سريعة' },
  'press.stats.lede': {
    en: 'Usage figures will be published once they are verifiable. We do not display fabricated numbers.',
    ar: 'أرقام الاستخدام راح تننشر أول ما تصير قابلة للتحقّق. ما نعرض أرقام مفبركة.',
  },
  'press.stats.active_pupils': { en: 'Active students', ar: 'طلاب نشطون' },
  'press.stats.essays_marked': {
    en: 'Essays given AI-assisted feedback',
    ar: 'مقالات أُعطيت ملاحظات مدعومة بالذكاء الاصطناعي',
  },
  'press.stats.teachers_onboarded': { en: 'Teachers onboarded', ar: 'معلّمون انضمّوا' },
  'press.stats.schools_in_programme': {
    en: 'Schools in the Founding programme',
    ar: 'مدارس في برنامج التأسيس',
  },

  // Product
  'press.product.eyebrow': { en: 'Product', ar: 'المنتج' },
  'press.product.title': {
    en: 'Who it is for and what it does',
    ar: 'لمن هو وش يسوّي',
  },
  'press.product.audience.h3': { en: 'Audience', ar: 'الجمهور' },
  'press.product.audience.pupils': {
    en: 'Students aged 11 to 18 studying KS3, GCSE, IGCSE or EAL English',
    ar: 'طلاب من ١١ لـ ١٨ سنة يدرسون إنجليزي KS3 أو GCSE أو IGCSE أو EAL',
  },
  'press.product.audience.parents': {
    en: 'Parents supporting their children at home',
    ar: 'أهالي يساعدون عيالهم في البيت',
  },
  'press.product.audience.teachers': {
    en: 'English teachers and tutors',
    ar: 'معلّمو ومدرّسو الإنجليزي',
  },
  'press.product.audience.heads': {
    en: 'Heads of English, SLT and school leaders in UK and international British curriculum schools',
    ar: 'رؤساء أقسام الإنجليزي، والإدارة العليا، وقادة المدارس في بريطانيا والمدارس الدولية اللي تتبع المنهج البريطاني',
  },

  'press.product.pricing.h3': { en: 'Pricing', ar: 'الأسعار' },
  'press.product.pricing.pupil_strong': { en: 'Students', ar: 'الطلاب' },
  'press.product.pricing.pupil_body': {
    en: 'Early Access £3.99/month or £29.99/year (Standard £7.99/month or £69.99/year from August 2026). A 7-day free trial applies to all paid plans.',
    ar: 'الوصول المبكّر £3.99/شهر أو £29.99/سنة (العادي £7.99/شهر أو £69.99/سنة من أغسطس ٢٠٢٦). فيه تجربة مجانية ٧ أيام على كل الباقات المدفوعة.',
  },
  'press.product.pricing.teacher_strong': { en: 'Teachers', ar: 'المعلّمون' },
  'press.product.pricing.teacher_body': {
    en: 'Early Access £6.99/month or £67.99/year (Standard £11.99/month or £99/year from August 2026). 3 free uses per premium tool with no card required.',
    ar: 'الوصول المبكّر £6.99/شهر أو £67.99/سنة (العادي £11.99/شهر أو £99/سنة من أغسطس ٢٠٢٦). ٣ استخدامات مجانية لكل أداة مميّزة بدون بطاقة.',
  },
  'press.product.pricing.founding_strong': { en: 'Schools', ar: 'المدارس' },
  'press.product.pricing.founding_body': {
    en: 'Founding School Pilot from £4,000/year for the first 10 schools (recurring annual licence, locked for 2–3 years). Standard School Licence from £8,000/year thereafter. MAT and international group pricing on a custom annual licence.',
    ar: 'تجربة المدارس المؤسِّسة تبدأ من £4,000/سنة لأول ١٠ مدارس (ترخيص سنوي متجدّد، مثبّت لمدّة ٢–٣ سنوات). الترخيص المدرسي العادي يبدأ من £8,000/سنة بعد كذا. أسعار مخصّصة للمجموعات (MAT) والمجموعات الدولية على ترخيص سنوي مخصّص.',
  },
  'press.product.pricing.gbp_note': {
    en: 'All prices are in GBP and exclude VAT where applicable.',
    ar: 'كل الأسعار بالجنيه الإسترليني ولا تشمل ضريبة القيمة المضافة إذا انطبقت.',
  },

  'press.product.distinct.h3': { en: 'What is distinctive', ar: 'وش اللي يميّزنا' },
  'press.product.distinct.boards': {
    en: 'Specification-aligned content for AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE — students see the materials matched to their actual board, not generic English content.',
    ar: 'محتوى متوافق مع مواصفات AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge IGCSE — الطالب يشوف المواد المطابقة لمجلسه الفعلي، مو محتوى إنجليزي عام.',
  },
  'press.product.distinct.plain_english': {
    en: 'Plain English explanations of assessment objectives, mark-scheme language and exam structure for students who find existing revision sites dense or jargon-heavy.',
    ar: 'شرح بإنجليزي بسيط لأهداف التقييم، ولغة مخطّط الدرجات، وبنية الامتحان، للطلاب اللي يلقون مواقع المراجعة الحالية معقّدة أو فيها مصطلحات وايد.',
  },
  'press.product.distinct.board_selection': {
    en: "A persistent board picker — once a student or school selects their exam board, every page on the platform re-skins to that board's specification.",
    ar: 'منتقي مجلس ثابت — أول ما يختار الطالب أو المدرسة مجلس الامتحان، كل صفحة في المنصّة تتبدّل لتتطابق مع مواصفات ذيك المجلس.',
  },
  'press.product.distinct.childrens_code': {
    en: 'Designed with the UK Age-Appropriate Design Code in mind — no third-party advertising, no tracking pixels, role-based access for school accounts and a published data-processing policy.',
    ar: 'مصمّم مع مراعاة مدوّنة التصميم المناسب للأعمار في بريطانيا — بدون إعلانات طرف ثالث، بدون بكسلات تتبّع، صلاحيات حسب الدور لحسابات المدارس، وسياسة معالجة بيانات منشورة.',
  },

  // Press contact
  'press.contact.eyebrow': { en: 'Press contact', ar: 'التواصل الصحفي' },
  'press.contact.title': { en: 'Media enquiries', ar: 'استفسارات الإعلام' },
  'press.contact.body_pre': {
    en: 'For interviews, comment, fact-checks or written briefings, please email',
    ar: 'للمقابلات أو التعليقات أو التحقّق من المعلومات أو الملخّصات المكتوبة، راسلونا على',
  },
  'press.contact.body_post': {
    en: '. We aim to respond within one working day.',
    ar: '. نحاول نرد خلال يوم عمل واحد.',
  },
  'press.contact.cta.email': { en: 'Email the press desk', ar: 'راسل مكتب الصحافة' },
  'press.contact.cta.general': { en: 'Other enquiries', ar: 'استفسارات أخرى' },

  // Press kit
  'press.kit.eyebrow': { en: 'Press kit', ar: 'الحقيبة الصحفية' },
  'press.kit.title': { en: 'Brand assets and downloads', ar: 'أصول العلامة والتنزيلات' },
  'press.kit.body': {
    en: 'Logo files, screenshots and a longer boilerplate paragraph are available on request. We are also happy to provide bespoke captioned screenshots and properly-labelled example dashboard views for a specific story angle.',
    ar: 'ملفّات الشعار ولقطات الشاشة وفقرة تعريفية أطول متوفّرة عند الطلب. ويسعدنا كذلك نوفّر لقطات شاشة بتعليقات مخصّصة وعرضات لوحات تحكّم نموذجية معنونة صح لزاوية قصّة معيّنة.',
  },
  'press.kit.archive_title': { en: 'Brand and screenshot pack', ar: 'حزمة العلامة ولقطات الشاشة' },
  'press.kit.archive_body_pre': {
    en: 'Email',
    ar: 'راسلونا على',
  },
  'press.kit.archive_body_mid': {
    en: 'and we will send the latest brand assets, logomark variants and labelled platform screenshots',
    ar: 'ونرسل لكم آخر أصول العلامة، ونسخ الشعار، ولقطات شاشة معنونة للمنصّة',
  },
  'press.kit.archive_body_post': {
    en: ' within one working day.',
    ar: ' خلال يوم عمل واحد.',
  },
  'press.kit.download_disabled': { en: 'Available on request', ar: 'متوفّر عند الطلب' },
  'press.kit.download_title': {
    en: 'Brand assets pack — coming soon. Email the press desk for the current files.',
    ar: 'حزمة أصول العلامة — قريباً. راسل مكتب الصحافة على الملفّات الحالية.',
  },

  // Recent coverage
  'press.coverage.eyebrow': { en: 'Recent coverage', ar: 'التغطية الأخيرة' },
  'press.coverage.title': {
    en: 'Where we have been mentioned',
    ar: 'وين انذكرنا',
  },
  'press.coverage.none': {
    en: 'No coverage logged yet. We are at launch and will publish accredited mentions here as and when they appear. If you have written about The English Hub and would like to be added, please email the press desk.',
    ar: 'ما فيه تغطية مسجّلة لين الحين. إحنا في مرحلة الإطلاق وراح ننشر هنا الإشارات الموثّقة أول ما تطلع. إذا كتبت عن The English Hub وتبي نضيفك، راسل مكتب الصحافة.',
  },

  // Awards
  'press.awards.eyebrow': { en: 'Awards & reviews', ar: 'الجوائز والتقييمات' },
  'press.awards.title': { en: 'Recognition', ar: 'التقدير' },
  'press.awards.none': {
    en: 'No awards to claim. We are a new platform and will not invent or imply recognition we have not earned. Our Trustpilot page is the closest thing to public review feedback today.',
    ar: 'ما عندنا جوائز نزعمها. إحنا منصّة جديدة وما راح نخترع أو نلمّح لتقدير ما استحقّيناه. صفحتنا في Trustpilot هي أقرب شي لتقييمات عامة اليوم.',
  },
  'press.awards.trustpilot': { en: 'See us on Trustpilot', ar: 'شوفنا على Trustpilot' },

  // Footer
  'press.footer.entity': {
    en: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
    ar: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
  },
  'press.footer.brand_line': {
    en: 'The English Hub is a trading brand of Upskill Energy Limited, registered in England & Wales.',
    ar: 'The English Hub علامة تجارية تابعة لـ Upskill Energy Limited، مسجّلة في إنجلترا وويلز.',
  },

  // ───────────────────────────────────────────────────────────────────
  // /about/verified-content
  // ───────────────────────────────────────────────────────────────────
  'about.verified.badge': { en: 'Verified content', ar: 'محتوى موثّق' },
  'about.verified.h1': {
    en: 'Verified English content. AI-assisted learning. Human-controlled quality.',
    ar: 'محتوى إنجليزي موثّق. تعلّم مدعوم بالذكاء الاصطناعي. جودة يتحكّم فيها البشر.',
  },
  'about.verified.intro': {
    en: 'The English Hub uses AI to support practice, feedback and revision, but English content must still be accurate, traceable and trustworthy. Our content verification process is designed to reduce hallucinated analysis, incorrect quotations, unsupported claims and unclear exam guidance.',
    ar: 'The English Hub يستخدم الذكاء الاصطناعي لدعم التمارين والملاحظات والمراجعة، بس المحتوى الإنجليزي لازم يظل دقيق وقابل للتتبّع وجدير بالثقة. عملية توثيق المحتوى عندنا مصمّمة تقلّل التحليل المهلوس، والاقتباسات الغلط، والادّعاءات اللي ما لها سند، وإرشادات الامتحان غير الواضحة.',
  },

  // Numbers section
  'about.verified.numbers.h2': {
    en: 'Where verification has been applied',
    ar: 'وين انطبّق التوثيق',
  },
  'about.verified.numbers.texts_label': {
    en: 'Set texts with verified analysis',
    ar: 'نصوص مقرّرة بتحليل موثّق',
  },
  'about.verified.numbers.quotes_label': {
    en: 'Curated quotation packs',
    ar: 'حزم اقتباسات منتقاة',
  },
  'about.verified.numbers.errors_label': {
    en: 'Reader-reported errors corrected',
    ar: 'أخطاء بلّغ عنها القرّاء واتصحّحت',
  },
  'about.verified.numbers.public_domain_label': {
    en: 'Public-domain text sources',
    ar: 'مصادر نصوص في الملك العام',
  },
  'about.verified.numbers.restricted_label': {
    en: 'Copyright-handled extracts',
    ar: 'مقتطفات روعيت فيها حقوق النشر',
  },
  'about.verified.numbers.publishers_label': {
    en: 'Publishers / sources referenced',
    ar: 'ناشرون / مصادر مرجعية',
  },

  // Sources
  'about.verified.sources.h2': {
    en: 'Sources we cross-check against',
    ar: 'المصادر اللي نتحقّق منها',
  },
  'about.verified.sources.lede': {
    en: 'Where a reliable source exists, we use it. Where it does not, we say so. We never invent a citation to make analysis look better-supported than it is.',
    ar: 'إذا فيه مصدر موثوق نستخدمه. وإذا ما فيه، نقولها بصراحة. ما نخترع أبد مرجع عشان نخلّي التحليل يبيّن مدعوم أكثر من الواقع.',
  },
  'about.verified.sources.gutenberg_strong': { en: 'Project Gutenberg', ar: 'Project Gutenberg' },
  'about.verified.sources.gutenberg_body': {
    en: 'Public-domain editions of pre-1928 texts including Shakespeare, the major Victorian novelists, Romantic and Victorian poetry, and the prescribed nineteenth-century novels on most exam-board specifications. Quotations are verified against the Gutenberg text rather than memory.',
    ar: 'نسخ في الملك العام لنصوص قبل ١٩٢٨ تشمل شكسبير، وكبار روائيي العصر الفيكتوري، والشعر الرومانسي والفيكتوري، وروايات القرن التاسع عشر المقرّرة في معظم مواصفات مجالس الامتحانات. الاقتباسات تتحقّق مقابل نص Gutenberg مو من الذاكرة.',
  },
  'about.verified.sources.folger_strong': {
    en: 'Folger Shakespeare Library',
    ar: 'Folger Shakespeare Library',
  },
  'about.verified.sources.folger_body': {
    en: 'For Shakespeare texts we cross-reference the Folger digital editions because of their careful editorial apparatus. Where act/scene/line references differ between editions, we explain the discrepancy rather than pretend it does not exist.',
    ar: 'بالنسبة لنصوص شكسبير نراجع نسخ Folger الرقمية بسبب جهازها التحريري الدقيق. وإذا اختلفت إشارات الفصل/المشهد/السطر بين النسخ، نوضّح الفرق بدل ما نتظاهر إنه ما موجود.',
  },
  'about.verified.sources.bbc_strong': {
    en: 'BBC and broadsheet archives',
    ar: 'أرشيف BBC والصحف الكبرى',
  },
  'about.verified.sources.bbc_body': {
    en: 'For context — biographical, historical, social — we cross-check against named published sources. We prefer the BBC, the major broadsheets and academic publishers over open-web summaries.',
    ar: 'للسياق — السيري والتاريخي والاجتماعي — نتحقّق مقابل مصادر منشورة ومسمّاة. نفضّل BBC والصحف الكبرى والناشرين الأكاديميين على ملخّصات الويب المفتوح.',
  },
  'about.verified.sources.board_strong': {
    en: 'Public exam-board specifications',
    ar: 'مواصفات مجالس الامتحانات العامة',
  },
  'about.verified.sources.board_body': {
    en: 'Assessment objective wording, paper structure and prescribed-text lists are checked against the public specification PDFs published by AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge International. Where a specification updates, we update.',
    ar: 'صياغة أهداف التقييم، وبنية ورقة الامتحان، وقوائم النصوص المقرّرة، تتفحّص مقابل ملفّات المواصفات العامة (PDF) اللي تنشرها AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge International. وإذا تحدّثت المواصفة، نحدّث.',
  },

  // Confidence levels
  'about.verified.confidence.h2': { en: 'Confidence levels', ar: 'مستويات الثقة' },
  'about.verified.confidence.lede': {
    en: 'Not all content carries the same weight of evidence. We use four internal confidence labels so a reader can tell what stands behind a specific page.',
    ar: 'مو كل المحتوى يحمل نفس وزن الدليل. نستخدم أربع تسميات داخلية للثقة عشان القارئ يقدر يعرف وش وراء صفحة معيّنة.',
  },
  'about.verified.confidence.highest_label': {
    en: 'Highest — quote checked + human reviewed',
    ar: 'الأعلى — اقتباس مفحوص + مراجَع بشرياً',
  },
  'about.verified.confidence.highest_body': {
    en: 'Quotations cross-referenced against a public-domain source. Analysis read end-to-end by a human editor. Used for set-text pages and exemplar essays.',
    ar: 'اقتباسات مراجعة مقابل مصدر في الملك العام. والتحليل مقروء من أوّله لآخره من محرّر بشري. يُستخدم لصفحات النصوص المقرّرة والمقالات النموذجية.',
  },
  'about.verified.confidence.high_label': {
    en: 'High — human reviewed',
    ar: 'عالي — مراجَع بشرياً',
  },
  'about.verified.confidence.high_body': {
    en: 'AI-drafted then read end-to-end by a human editor. Used for theme-level analysis, contextual notes and revision summaries.',
    ar: 'مصاغ بالذكاء الاصطناعي وبعدين مقروء من أوّله لآخره من محرّر بشري. يُستخدم للتحليل على مستوى الثيمات، والملاحظات السياقية، وملخّصات المراجعة.',
  },
  'about.verified.confidence.medium_label': {
    en: 'Medium — AI-drafted, awaiting review',
    ar: 'متوسّط — مصاغ بالذكاء الاصطناعي، بانتظار المراجعة',
  },
  'about.verified.confidence.medium_body': {
    en: 'AI-generated content surfaced as a learning aid but not yet signed off by a human editor. We mark this clearly so students know what they are looking at.',
    ar: 'محتوى مولّد بالذكاء الاصطناعي معروض كأداة تعلّم بس لسا ما اعتمده محرّر بشري. نأشّر على هذا بوضوح عشان الطلاب يعرفون وش يشوفون.',
  },
  'about.verified.confidence.low_label': {
    en: 'Formative — practice feedback only',
    ar: 'تكويني — ملاحظات تمرين بس',
  },
  'about.verified.confidence.low_body': {
    en: 'AI-generated essay feedback and grade indications. Useful for practice and pattern-spotting, but not official marking. Always to be discussed with a teacher before being acted on.',
    ar: 'ملاحظات مقالات ومؤشّرات درجات مولّدة بالذكاء الاصطناعي. مفيدة للتمرين ورصد الأنماط، بس مو تصحيح رسمي. لازم تتناقش مع معلّم قبل ما تتصرّف على أساسها.',
  },

  // Common errors
  'about.verified.errors.h2': {
    en: 'What we have caught and fixed',
    ar: 'وش لقيناه وصلّحناه',
  },
  'about.verified.errors.body': {
    en: 'AI-assisted content gets two specific things wrong more than anything else: invented quotations that sound right but do not appear in the text, and confident statements about historical context that no source actually supports. We keep an internal log of corrections and bump the "Last updated" date on the affected page when a substantive change lands.',
    ar: 'المحتوى المدعوم بالذكاء الاصطناعي يغلط في شيئين أكثر من غيرهم: اقتباسات مخترعة تبيّن صح بس ما تطلع في النص، وعبارات واثقة عن السياق التاريخي ما لها أي مصدر يدعمها فعلياً. نحتفظ بسجل داخلي للتصحيحات ونحدّث تاريخ "آخر تحديث" في الصفحة المتأثّرة لما يصير تغيير جوهري.',
  },

  // Report a content issue
  'about.verified.report.h2': {
    en: 'Spotted something that does not look right?',
    ar: 'لاحظت شي ما يبيّن صح؟',
  },
  'about.verified.report.body': {
    en: 'Report it and our team will review the page. Reports go to our editorial inbox, are logged within the working day, and the reporter is told the outcome once the review is complete.',
    ar: 'بلّغ عنه وفريقنا راح يراجع الصفحة. البلاغات توصل لبريد التحرير عندنا، وتنسجّل خلال يوم العمل، والمبلّغ ينعرف بالنتيجة أول ما تخلص المراجعة.',
  },
  'about.verified.report.cta': { en: 'Report a content issue', ar: 'بلّغ عن مشكلة في المحتوى' },

  // ───────────────────────────────────────────────────────────────────
  // Footer link labels (trust pages)
  // ───────────────────────────────────────────────────────────────────
  'footer.link.school_pilot_pack': { en: 'School Pilot Pack', ar: 'حزمة تجربة المدارس' },
  'footer.link.content_verification': {
    en: 'Content Verification Methodology',
    ar: 'منهجية توثيق المحتوى',
  },

  // ───────────────────────────────────────────────────────────────────
  // /accessibility
  // ───────────────────────────────────────────────────────────────────
  'accessibility.what.skip.name': { en: 'Skip links', ar: 'روابط التخطّي' },
  'accessibility.what.skip.desc': {
    en: 'A "skip to main content" link is provided so keyboard and screen-reader users can bypass repeated navigation.',
    ar: 'فيه رابط "تخطّى إلى المحتوى الرئيسي" عشان مستخدمي لوحة المفاتيح وقارئات الشاشة يقدرون يتجاوزون التنقّل المتكرّر.',
  },
  'accessibility.what.semantic.name': { en: 'Semantic structure', ar: 'بنية دلالية' },
  'accessibility.what.semantic.desc': {
    en: 'Pages are built with meaningful HTML landmarks and a logical heading order to aid navigation and comprehension.',
    ar: 'الصفحات مبنية بمعالم HTML ذات معنى وترتيب عناوين منطقي عشان تسهّل التنقّل والفهم.',
  },
  'accessibility.what.aria.name': { en: 'ARIA where needed', ar: 'ARIA عند الحاجة' },
  'accessibility.what.aria.desc': {
    en: 'WAI-ARIA roles and labels are applied to custom components where native HTML semantics are not sufficient.',
    ar: 'أدوار وتسميات WAI-ARIA تنطبّق على المكوّنات المخصّصة لما تكون دلالات HTML الأصلية ما تكفي.',
  },
  'accessibility.what.contrast.name': { en: 'Colour contrast', ar: 'تباين الألوان' },
  'accessibility.what.contrast.desc': {
    en: 'Text and interface colours are chosen to target the WCAG 2.2 AA contrast ratios in both light and dark themes.',
    ar: 'ألوان النص والواجهة مختارة عشان تستهدف نسب تباين WCAG 2.2 AA في الوضعين الفاتح والداكن.',
  },
  'accessibility.what.responsive.name': { en: 'Responsive layout', ar: 'تخطيط متجاوب' },
  'accessibility.what.responsive.desc': {
    en: 'The layout adapts to different screen sizes and supports zooming and text resizing without loss of content.',
    ar: 'التخطيط يتأقلم مع أحجام الشاشات المختلفة ويدعم التكبير وتغيير حجم النص بدون ما يضيع المحتوى.',
  },
  'accessibility.what.screen.name': { en: 'Screen-reader support', ar: 'دعم قارئات الشاشة' },
  'accessibility.what.screen.desc': {
    en: 'Core reading and revision journeys are designed and tested to work with common screen readers.',
    ar: 'رحلات القراءة والمراجعة الأساسية مصمّمة ومختبرة عشان تشتغل مع قارئات الشاشة الشائعة.',
  },
  'accessibility.what.motion.name': { en: 'Reduced motion', ar: 'حركة مخفّضة' },
  'accessibility.what.motion.desc': {
    en: 'Non-essential animation is reduced or removed for users who set the operating-system preference',
    ar: 'الحركة غير الضرورية تتقلّل أو تتشال للمستخدمين اللي يضبطون تفضيل نظام التشغيل',
  },
  'accessibility.limits.h2': { en: 'Known limitations', ar: 'قيود معروفة' },
  'accessibility.limits.lead': {
    en: 'We are honest about where the platform does not yet fully meet our target, and we are actively working to close these gaps.',
    ar: 'إحنا صريحين عن وين المنصّة لسا ما تحقّق هدفنا بالكامل، وقاعدين نشتغل بجد عشان نسدّ هالفجوات.',
  },
  'accessibility.limits.interactive.name': {
    en: 'Complex interactive tools',
    ar: 'أدوات تفاعلية معقّدة',
  },
  'accessibility.limits.interactive.desc': {
    en: 'Some richer interactive exercises and editors may not yet be fully operable by keyboard or screen reader in every scenario.',
    ar: 'بعض التمارين والمحرّرات التفاعلية الأغنى يمكن لسا ما تشتغل بالكامل بلوحة المفاتيح أو قارئ الشاشة في كل الحالات.',
  },
  'accessibility.limits.third_party.name': {
    en: 'Third-party embeds',
    ar: 'محتوى مضمّن من طرف ثالث',
  },
  'accessibility.limits.third_party.desc': {
    en: 'Embedded content from third-party providers is outside our direct control and may not meet the same accessibility standard.',
    ar: 'المحتوى المضمّن من مزوّدين خارجيين خارج تحكّمنا المباشر ويمكن ما يحقّق نفس معيار الوصول.',
  },
  'accessibility.limits.pdf.name': { en: 'Legacy PDFs', ar: 'ملفّات PDF قديمة' },
  'accessibility.limits.pdf.desc': {
    en: 'Some older downloadable PDF resources may not be fully tagged for assistive technology; we are reviewing and replacing these over time.',
    ar: 'بعض مصادر PDF القديمة القابلة للتنزيل يمكن ما تكون موسومة بالكامل للتقنيات المساعِدة؛ وقاعدين نراجعها ونستبدلها مع الوقت.',
  },
  'accessibility.limits.ai_note': {
    en: 'AI-generated feedback is presented through interface components that we are progressively improving for accessibility, and we welcome reports of any barriers you encounter.',
    ar: 'الملاحظات المولّدة بالذكاء الاصطناعي تنعرض عن طريق مكوّنات واجهة قاعدين نحسّنها للوصول بالتدريج، ونرحّب بأي بلاغ عن عوائق تواجهك.',
  },
  'accessibility.tech.h2': {
    en: 'Technologies this statement relies on',
    ar: 'التقنيات اللي يعتمد عليها هذا البيان',
  },
  'accessibility.tech.intro': {
    en: 'Accessibility of The English Hub relies on the following technologies working with your browser and any assistive technology you use:',
    ar: 'وصول The English Hub يعتمد على التقنيات التالية وهي تشتغل مع متصفّحك وأي تقنية مساعِدة تستخدمها:',
  },
  'accessibility.tech.outro': {
    en: 'These technologies are relied upon for conformance with the accessibility standard we target.',
    ar: 'هالتقنيات معتمَد عليها للتوافق مع معيار الوصول اللي نستهدفه.',
  },
  'accessibility.assessment.h2': {
    en: 'How we assess accessibility',
    ar: 'كيف نقيّم الوصول',
  },
  'accessibility.assessment.lead': {
    en: 'This statement reflects our own ongoing assessment rather than a formal external audit.',
    ar: 'هذا البيان يعكس تقييمنا الذاتي المستمر مو تدقيق خارجي رسمي.',
  },
  'accessibility.assessment.self.name': { en: 'Self-evaluation', ar: 'تقييم ذاتي' },
  'accessibility.assessment.self.desc': {
    en: 'We carry out internal reviews using automated checks, manual keyboard testing and screen-reader spot-checks against WCAG 2.2 AA.',
    ar: 'نسوّي مراجعات داخلية باستخدام فحوصات آلية، واختبار يدوي بلوحة المفاتيح، وفحوصات عيّنة بقارئ الشاشة مقابل WCAG 2.2 AA.',
  },
  'accessibility.assessment.feedback.name': { en: 'User feedback', ar: 'ملاحظات المستخدمين' },
  'accessibility.assessment.feedback.desc': {
    en: 'Issues reported by students, parents, teachers and schools are triaged and used to prioritise fixes.',
    ar: 'المشاكل اللي يبلّغ عنها الطلاب والأهالي والمعلّمون والمدارس تتفرز وتنستخدم لترتيب أولويات الإصلاح.',
  },
  'accessibility.enforcement.h2': { en: 'Enforcement procedure', ar: 'إجراء الإنفاذ' },
  'accessibility.enforcement.body1_lead': {
    en: 'In the United Kingdom, access to digital services for disabled people is supported by the',
    ar: 'في المملكة المتحدة، وصول ذوي الإعاقة للخدمات الرقمية مدعوم بـ',
  },
  'accessibility.enforcement.equality_act': { en: 'Equality Act 2010', ar: 'Equality Act 2010' },
  'accessibility.enforcement.body1_tail': {
    en: ', and we treat accessibility as an ongoing legal and ethical responsibility.',
    ar: '، وإحنا نتعامل مع الوصول كمسؤولية قانونية وأخلاقية مستمرّة.',
  },
  'accessibility.enforcement.body2_lead': {
    en: 'If you contact us about an accessibility problem and are not satisfied with our response, you can escalate the matter to the',
    ar: 'إذا تواصلت معنا عن مشكلة وصول وما رضيت عن ردّنا، تقدر تصعّد الموضوع لـ',
  },
  'accessibility.enforcement.eass_link': {
    en: 'Equality Advisory and Support Service (EASS)',
    ar: 'Equality Advisory and Support Service (EASS)',
  },
  'accessibility.enforcement.body2_tail': {
    en: ', which provides free advice and support on equality and human rights issues.',
    ar: '، اللي يقدّم استشارة ودعم مجاني في قضايا المساواة وحقوق الإنسان.',
  },
}
