/**
 * Real copy for /press and /about/verified-content
 *
 * Both pages pull their text through `tMany([...])` from the dictionary
 * chain. Earlier dictionary fills auto-derived these keys from path
 * segments - so `press.hero.title` ended up as `"Title"`, `press.hero.eyebrow`
 * as `"Eyebrow"`, `about.verified.h1` as `"H1"`, etc. The two pages
 * therefore rendered visibly broken on prod.
 *
 * This file overrides those keys with human-written copy. It is wired
 * into the lookup chain BEFORE `AUDIT_FIX_DICTIONARY` so it wins on
 * collision.
 *
 * AR values mirror EN as a graceful fallback - far better than rendering
 * lazy Arabic translations of "Eyebrow" or "Body Pre" to an Arabic
 * visitor. ar_translator can replace with proper Khaleeji on the next
 * translation sweep.
 *
 * Written 2026-05-15.
 */

import type { Dictionary } from './dictionary'

export const PRESS_AND_VERIFIED_FIX: Dictionary = {
  // ───────────────────────────────────────────────────────────────────
  // /press
  // ───────────────────────────────────────────────────────────────────

  // Hero
  'press.hero.eyebrow': { en: 'Press & Media', ar: 'الصحافة والإعلام' },
  'press.hero.title': {
    en: 'The English Hub is building a smarter way to support English learning.',
    ar: 'The English Hub يبني طريقة أذكى لدعم تعلّم اللغة الإنجليزية.',
  },
  'press.hero.lede': {
    en: 'The English Hub is an independent English learning platform supporting GCSE, IGCSE, KS3 and EAL learners through structured resources, AI-assisted feedback, exam-style practice, teacher tools and school-level analytics.',
    ar: 'The English Hub منصّة مستقلّة لتعلّم اللغة الإنجليزية تدعم طلاب GCSE وIGCSE وKS3 وEAL عن طريق مصادر منظّمة، وملاحظات مدعومة بالـ AI، وتمارين على نمط الامتحانات، وأدوات للمعلّمين، وتحليلات على مستوى المدرسة.',
  },

  // 60-second overview
  'press.overview.eyebrow': { en: 'About', ar: 'عن المنصّة' },
  'press.overview.title': { en: 'A 60-second overview', ar: 'نظرة في 60 ثانية' },
  'press.overview.p1': {
    en: 'The English Hub is an independent English learning platform designed for students, teachers and schools. The platform supports GCSE, IGCSE, KS3 and EAL English through structured learning resources, AI-assisted feedback, mock exams, reading and writing practice, teacher tools and school-level reporting.',
    ar: 'The English Hub منصّة مستقلّة لتعلّم اللغة الإنجليزية مصمّمة للطلاب والمعلّمين والمدارس. المنصّة تدعم إنجليزي GCSE وIGCSE وKS3 وEAL عن طريق مصادر تعليمية منظّمة، وملاحظات مدعومة بالـ AI، وامتحانات تجريبية، وتمارين قراءة وكتابة، وأدوات للمعلّمين، وتقارير على مستوى المدرسة.',
  },
  'press.overview.p2': {
    en: 'The platform is exam-board aligned, not exam-board endorsed, and supports AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE specifications. AI is used to assist drafting, formative feedback and resource generation; humans review what reaches students.',
    ar: 'المنصّة متوافقة مع مجالس الامتحانات لكنها مو معتمدة منها رسمياً، وتدعم مواصفات AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge IGCSE. الـ AI يُستخدم للمساعدة في الصياغة والملاحظات التكوينية وإنشاء المصادر؛ والبشر يراجعون كل شي يوصل للطلاب.',
  },

  // Company facts
  'press.facts.eyebrow': { en: 'Company facts', ar: 'معلومات عن الشركة' },
  'press.facts.title': {
    en: 'Quick reference for journalists',
    ar: 'مرجع سريع للصحفيين',
  },

  'press.facts.entity.label': { en: 'Legal entity', ar: 'الكيان القانوني' },
  'press.facts.entity.name': { en: 'Upskill Energy Limited', ar: 'Upskill Energy Limited' },
  'press.facts.entity.company_no': { en: 'Company No. 16511479', ar: 'Company No. 16511479' },
  'press.facts.entity.jurisdiction': {
    en: 'Registered in England & Wales',
    ar: 'مسجّلة في England & Wales',
  },

  'press.facts.office.label': { en: 'Registered office', ar: 'المقر المسجّل' },
  'press.facts.office.short': {
    en: 'Available via Companies House',
    ar: 'متوفّر عن طريق Companies House',
  },
  'press.facts.office.body_pre': {
    en: 'Journalists requiring an attributable address for filings should email',
    ar: 'الصحفيون اللي يحتاجون عنواناً موثّقاً للمستندات الرسمية يراسلوننا على',
  },
  'press.facts.office.body_post': {
    en: ' and we will respond within one working day.',
    ar: ' وبنرد عليهم خلال يوم عمل واحد.',
  },

  'press.facts.ico.label': { en: 'ICO data protection', ar: 'حماية البيانات لدى ICO' },
  'press.facts.ico.registration': { en: 'Registration ZC016690', ar: 'تسجيل ZC016690' },
  'press.facts.ico.controller': {
    en: 'Upskill Energy Limited acts as data controller for The English Hub.',
    ar: 'تعمل Upskill Energy Limited كجهة مسؤولة عن البيانات في The English Hub.',
  },

  'press.facts.founded.label': { en: 'Founded', ar: 'سنة التأسيس' },
  'press.facts.founded.year': {
    en: '2024 - operating from 2026',
    ar: '2024 - بدأت التشغيل من 2026',
  },
  'press.facts.founded.bootstrapped': {
    en: 'Bootstrapped. No outside investment to date.',
    ar: 'مموّلة ذاتياً. ما في استثمار خارجي لين الحين.',
  },

  // Key stats - the StatPlaceholder component renders "coming in 2026"
  // copy regardless of these labels, but the labels still need to be real.
  'press.stats.eyebrow': { en: 'Key facts', ar: 'حقائق أساسية' },
  'press.stats.title': { en: 'At a glance', ar: 'نظرة سريعة' },
  'press.stats.lede': {
    en: 'Usage figures will be published once they are verifiable. We do not display fabricated numbers.',
    ar: 'بننشر أرقام الاستخدام أول ما تصير قابلة للتحقّق. إحنا ما نعرض أرقام ملفّقة.',
  },
  'press.stats.active_pupils': { en: 'Active students', ar: 'الطلاب الفعّالون' },
  'press.stats.essays_marked': {
    en: 'Essays given AI-assisted feedback',
    ar: 'مقالات أُعطيت ملاحظات مدعومة بالـ AI',
  },
  'press.stats.teachers_onboarded': { en: 'Teachers onboarded', ar: 'معلّمون منضمّون' },
  'press.stats.schools_in_programme': {
    en: 'Schools in the Founding programme',
    ar: 'مدارس في برنامج التأسيس',
  },

  // Product
  'press.product.eyebrow': { en: 'Product', ar: 'المنتج' },
  'press.product.title': {
    en: 'Who it is for and what it does',
    ar: 'لمن هو وشنو يسوّي',
  },
  'press.product.audience.h3': { en: 'Audience', ar: 'الجمهور' },
  'press.product.audience.pupils': {
    en: 'Students aged 11 to 18 studying KS3, GCSE, IGCSE or EAL English',
    ar: 'طلاب من عمر 11 إلى 18 يدرسون إنجليزي KS3 أو GCSE أو IGCSE أو EAL',
  },
  'press.product.audience.parents': {
    en: 'Parents supporting their children at home',
    ar: 'أولياء الأمور اللي يدعمون عيالهم في البيت',
  },
  'press.product.audience.teachers': {
    en: 'English teachers and tutors',
    ar: 'معلّمو ومدرّسو اللغة الإنجليزية',
  },
  'press.product.audience.heads': {
    en: 'Heads of English, SLT and school leaders in UK and international British curriculum schools',
    ar: 'رؤساء أقسام الإنجليزي، وفرق القيادة العليا (SLT)، وقادة المدارس في بريطانيا والمدارس الدولية ذات المنهج البريطاني',
  },

  'press.product.pricing.h3': { en: 'Pricing', ar: 'الأسعار' },
  'press.product.pricing.pupil_strong': { en: 'Students', ar: 'الطلاب' },
  'press.product.pricing.pupil_body': {
    en: 'Early Access £3.99/month or £29.99/year (Standard £7.99/month or £69.99/year from August 2026). A 7-day free trial applies to all paid plans.',
    ar: 'الوصول المبكر £3.99 بالشهر أو £29.99 بالسنة (السعر العادي £7.99 بالشهر أو £69.99 بالسنة من أغسطس 2026). تجربة مجانية 7 أيام على كل الباقات المدفوعة.',
  },
  'press.product.pricing.teacher_strong': { en: 'Teachers', ar: 'المعلّمون' },
  'press.product.pricing.teacher_body': {
    en: 'Early Access £6.99/month or £67.99/year (Standard £11.99/month or £99/year from August 2026). 3 free uses per premium tool with no card required.',
    ar: 'الوصول المبكر £6.99 بالشهر أو £67.99 بالسنة (السعر العادي £11.99 بالشهر أو £99 بالسنة من أغسطس 2026). 3 استخدامات مجانية لكل أداة مميّزة بدون الحاجة لبطاقة.',
  },
  'press.product.pricing.founding_strong': { en: 'Schools', ar: 'المدارس' },
  'press.product.pricing.founding_body': {
    en: 'Founding School Pilot from £4,000/year for the first 10 schools (recurring annual licence, locked for 2-3 years). Standard School Licence from £8,000/year thereafter. MAT and international group pricing on a custom annual licence.',
    ar: 'برنامج المدارس المؤسِّسة التجريبي يبدأ من £4,000 بالسنة لأول 10 مدارس (ترخيص سنوي متجدّد، مثبّت لمدة 2-3 سنوات). بعدها الترخيص المدرسي العادي يبدأ من £8,000 بالسنة. أسعار اتحادات الأكاديميات (MAT) والمجموعات الدولية على ترخيص سنوي مخصّص.',
  },
  'press.product.pricing.gbp_note': {
    en: 'All prices are in GBP and exclude VAT where applicable.',
    ar: 'كل الأسعار بالجنيه الإسترليني (GBP) وما تشمل ضريبة القيمة المضافة (VAT) عند انطباقها.',
  },

  'press.product.distinct.h3': { en: 'What is distinctive', ar: 'وش يميّزنا' },
  'press.product.distinct.boards': {
    en: 'Specification-aligned content for AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge IGCSE - students see the materials matched to their actual board, not generic English content.',
    ar: 'محتوى متوافق مع مواصفات AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge IGCSE - الطلاب يشوفون المواد المطابقة لمجلسهم الفعلي، مو محتوى إنجليزي عام.',
  },
  'press.product.distinct.plain_english': {
    en: 'Plain English explanations of assessment objectives, mark-scheme language and exam structure for students who find existing revision sites dense or jargon-heavy.',
    ar: 'شروحات بإنجليزي مبسّط لأهداف التقييم، ولغة نظام التصحيح، وبنية الامتحان، للطلاب اللي يشوفون مواقع المراجعة الموجودة معقّدة أو وايد مليانة مصطلحات.',
  },
  'press.product.distinct.board_selection': {
    en: "A persistent board picker - once a student or school selects their exam board, every page on the platform re-skins to that board's specification.",
    ar: 'أداة اختيار مجلس ثابتة - أول ما يختار الطالب أو المدرسة مجلس الامتحان، كل صفحة في المنصّة تتغيّر لتطابق مواصفات ذاك المجلس.',
  },
  'press.product.distinct.childrens_code': {
    en: 'Designed with the UK Age-Appropriate Design Code in mind - no third-party advertising, no tracking pixels, role-based access for school accounts and a published data-processing policy.',
    ar: 'مصمّمة مع مراعاة مدوّنة التصميم المناسب لعمر الأطفال في بريطانيا (Age-Appropriate Design Code) - ما في إعلانات طرف ثالث، ولا بكسلات تتبّع، ووصول مبني على الأدوار لحسابات المدارس، وسياسة منشورة لمعالجة البيانات.',
  },

  // Press contact
  'press.contact.eyebrow': { en: 'Press contact', ar: 'التواصل الصحفي' },
  'press.contact.title': { en: 'Media enquiries', ar: 'استفسارات الإعلام' },
  'press.contact.body_pre': {
    en: 'For interviews, comment, fact-checks or written briefings, please email',
    ar: 'للمقابلات أو التعليقات أو التحقّق من الحقائق أو الإحاطات المكتوبة، راسلنا على',
  },
  'press.contact.body_post': {
    en: '. We aim to respond within one working day.',
    ar: '. نهدف نرد خلال يوم عمل واحد.',
  },
  'press.contact.cta.email': { en: 'Email the press desk', ar: 'راسل المكتب الصحفي' },
  'press.contact.cta.general': { en: 'Other enquiries', ar: 'استفسارات أخرى' },

  // Press kit
  'press.kit.eyebrow': { en: 'Press kit', ar: 'الحقيبة الصحفية' },
  'press.kit.title': { en: 'Brand assets and downloads', ar: 'ملفات العلامة والتحميلات' },
  'press.kit.body': {
    en: 'Logo files, screenshots and a longer boilerplate paragraph are available on request. We are also happy to provide bespoke captioned screenshots and properly-labelled example dashboard views for a specific story angle.',
    ar: 'ملفات الشعار ولقطات الشاشة وفقرة تعريفية أطول متوفّرة عند الطلب. وبكل سرور نوفّر لقطات شاشة مخصّصة مع تعليقات ونماذج للوحات تحكّم موضّحة بشكل صحيح لزاوية قصّة معيّنة.',
  },
  'press.kit.archive_title': { en: 'Brand and screenshot pack', ar: 'حزمة العلامة ولقطات الشاشة' },
  'press.kit.archive_body_pre': {
    en: 'Email',
    ar: 'راسلنا على',
  },
  'press.kit.archive_body_mid': {
    en: 'and we will send the latest brand assets, logomark variants and labelled platform screenshots',
    ar: 'وبنرسل لك أحدث ملفات العلامة، ونسخ الشعار، ولقطات شاشة موضّحة للمنصّة',
  },
  'press.kit.archive_body_post': {
    en: ' within one working day.',
    ar: ' خلال يوم عمل واحد.',
  },
  'press.kit.download_disabled': { en: 'Available on request', ar: 'متوفّر عند الطلب' },
  'press.kit.download_title': {
    en: 'Brand assets pack - coming soon. Email the press desk for the current files.',
    ar: 'حزمة ملفات العلامة - قريباً. راسل المكتب الصحفي عشان تحصّل الملفات الحالية.',
  },

  // Recent coverage
  'press.coverage.eyebrow': { en: 'Recent coverage', ar: 'تغطية حديثة' },
  'press.coverage.title': {
    en: 'Where we have been mentioned',
    ar: 'وين انذكرنا',
  },
  'press.coverage.none': {
    en: 'No coverage logged yet. We are at launch and will publish accredited mentions here as and when they appear. If you have written about The English Hub and would like to be added, please email the press desk.',
    ar: 'ما في تغطية مسجّلة لين الحين. إحنا في مرحلة الإطلاق وبننشر هنا الإشارات الموثّقة أول ما تظهر. إذا كتبت عن The English Hub وتبي نضيفك، راسل المكتب الصحفي لو سمحت.',
  },

  // Awards
  'press.awards.eyebrow': { en: 'Awards & reviews', ar: 'الجوائز والتقييمات' },
  'press.awards.title': { en: 'Recognition', ar: 'التقدير' },
  'press.awards.none': {
    en: 'No awards to claim. We are a new platform and will not invent or imply recognition we have not earned. Our Trustpilot page is the closest thing to public review feedback today.',
    ar: 'ما في جوائز ندّعيها. إحنا منصّة جديدة وما بنختلق أو نلمّح لتقدير ما استحقّيناه. صفحتنا في Trustpilot هي أقرب شي لتقييمات الجمهور العلنية اليوم.',
  },
  'press.awards.trustpilot': { en: 'See us on Trustpilot', ar: 'شوفنا على Trustpilot' },

  // Footer
  'press.footer.entity': {
    en: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
    ar: 'Upskill Energy Limited · Co. 16511479 · ICO ZC016690',
  },
  'press.footer.brand_line': {
    en: 'The English Hub is a trading brand of Upskill Energy Limited, registered in England & Wales.',
    ar: 'The English Hub علامة تجارية تابعة لـ Upskill Energy Limited، المسجّلة في England & Wales.',
  },

  // ───────────────────────────────────────────────────────────────────
  // /about/verified-content
  // ───────────────────────────────────────────────────────────────────

  'about.verified.badge': { en: 'Verified content', ar: 'محتوى موثّق' },
  'about.verified.h1': {
    en: 'Verified English content. AI-assisted learning. Human-controlled quality.',
    ar: 'محتوى إنجليزي موثّق. تعلّم مدعوم بالـ AI. جودة يتحكّم فيها البشر.',
  },
  'about.verified.intro': {
    en: 'The English Hub uses AI to support practice, feedback and revision, but English content must still be accurate, traceable and trustworthy. Our content verification process is designed to reduce hallucinated analysis, incorrect quotations, unsupported claims and unclear exam guidance.',
    ar: 'The English Hub يستخدم الـ AI لدعم التمارين والملاحظات والمراجعة، لكن لازم يبقى المحتوى الإنجليزي دقيقاً وقابلاً للتتبّع وجديراً بالثقة. عملية توثيق المحتوى عندنا مصمّمة لتقليل التحليل المختلَق، والاقتباسات الغلط، والادّعاءات غير المدعومة، والإرشادات الامتحانية غير الواضحة.',
  },

  // Numbers section - the page renders six stat tiles. We keep the
  // existing stats (108 texts, 36 quotes, etc.) - those reflect actual
  // counts of content reviewed - but with proper labels.
  'about.verified.numbers.h2': {
    en: 'Where verification has been applied',
    ar: 'وين طُبّق التوثيق',
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
    ar: 'أخطاء بلّغ عنها القرّاء وتم تصحيحها',
  },
  'about.verified.numbers.public_domain_label': {
    en: 'Public-domain text sources',
    ar: 'مصادر نصوص ملكية عامة',
  },
  'about.verified.numbers.restricted_label': {
    en: 'Copyright-handled extracts',
    ar: 'مقتطفات مُعالَجة حقوق النشر',
  },
  'about.verified.numbers.publishers_label': {
    en: 'Publishers / sources referenced',
    ar: 'ناشرون / مصادر مرجعية',
  },

  // Sources
  'about.verified.sources.h2': {
    en: 'Sources we cross-check against',
    ar: 'المصادر اللي نراجع مقابلها',
  },
  'about.verified.sources.lede': {
    en: 'Where a reliable source exists, we use it. Where it does not, we say so. We never invent a citation to make analysis look better-supported than it is.',
    ar: 'إذا في مصدر موثوق نستخدمه. وإذا ما في، نقولها بصراحة. وأبداً ما نختلق مرجعاً عشان نخلّي التحليل يبيّن مدعوماً أكثر مما هو عليه.',
  },
  'about.verified.sources.gutenberg_strong': { en: 'Project Gutenberg', ar: 'Project Gutenberg' },
  'about.verified.sources.gutenberg_body': {
    en: 'Public-domain editions of pre-1928 texts including Shakespeare, the major Victorian novelists, Romantic and Victorian poetry, and the prescribed nineteenth-century novels on most exam-board specifications. Quotations are verified against the Gutenberg text rather than memory.',
    ar: 'نسخ ملكية عامة لنصوص ما قبل 1928، منها Shakespeare، وكبار روائيي العصر الفيكتوري، والشعر الرومانسي والفيكتوري، وروايات القرن التاسع عشر المقرّرة في أغلب مواصفات مجالس الامتحانات. الاقتباسات تتحقّق مقابل نص Gutenberg مو من الذاكرة.',
  },
  'about.verified.sources.folger_strong': {
    en: 'Folger Shakespeare Library',
    ar: 'Folger Shakespeare Library',
  },
  'about.verified.sources.folger_body': {
    en: 'For Shakespeare texts we cross-reference the Folger digital editions because of their careful editorial apparatus. Where act/scene/line references differ between editions, we explain the discrepancy rather than pretend it does not exist.',
    ar: 'لنصوص Shakespeare نراجع مقابل نسخ Folger الرقمية بسبب دقّة جهازها التحريري. وإذا اختلفت إشارات الفصل/المشهد/السطر بين النسخ، نشرح الفرق بدل ما نتظاهر إنه مو موجود.',
  },
  'about.verified.sources.bbc_strong': {
    en: 'BBC and broadsheet archives',
    ar: 'أرشيف BBC والصحف الكبرى',
  },
  'about.verified.sources.bbc_body': {
    en: 'For context - biographical, historical, social - we cross-check against named published sources. We prefer the BBC, the major broadsheets and academic publishers over open-web summaries.',
    ar: 'للسياق - السيري والتاريخي والاجتماعي - نراجع مقابل مصادر منشورة ومسمّاة. ونفضّل BBC والصحف الكبرى والناشرين الأكاديميين على ملخّصات الإنترنت المفتوح.',
  },
  'about.verified.sources.board_strong': {
    en: 'Public exam-board specifications',
    ar: 'مواصفات مجالس الامتحانات العامة',
  },
  'about.verified.sources.board_body': {
    en: 'Assessment objective wording, paper structure and prescribed-text lists are checked against the public specification PDFs published by AQA, Pearson Edexcel, OCR, WJEC Eduqas and Cambridge International. Where a specification updates, we update.',
    ar: 'صياغة أهداف التقييم، وبنية الأوراق، وقوائم النصوص المقرّرة، كلها تتحقّق مقابل ملفات PDF الرسمية للمواصفات اللي تنشرها AQA وPearson Edexcel وOCR وWJEC Eduqas وCambridge International. وإذا تحدّثت أي مواصفة، نحدّث.',
  },

  // Confidence levels
  'about.verified.confidence.h2': { en: 'Confidence levels', ar: 'مستويات الثقة' },
  'about.verified.confidence.lede': {
    en: 'Not all content carries the same weight of evidence. We use four internal confidence labels so a reader can tell what stands behind a specific page.',
    ar: 'مو كل المحتوى يحمل نفس وزن الأدلّة. نستخدم أربع تسميات داخلية للثقة عشان القارئ يقدر يعرف وش يقف وراء صفحة معيّنة.',
  },
  'about.verified.confidence.highest_label': {
    en: 'Highest - quote checked + human reviewed',
    ar: 'الأعلى - اقتباس متحقَّق + مراجَع بشرياً',
  },
  'about.verified.confidence.highest_body': {
    en: 'Quotations cross-referenced against a public-domain source. Analysis read end-to-end by a human editor. Used for set-text pages and exemplar essays.',
    ar: 'اقتباسات تمّت مراجعتها مقابل مصدر ملكية عامة. وتحليل قراه محرّر بشري من البداية للنهاية. يُستخدم لصفحات النصوص المقرّرة والمقالات النموذجية.',
  },
  'about.verified.confidence.high_label': {
    en: 'High - human reviewed',
    ar: 'عالٍ - مراجَع بشرياً',
  },
  'about.verified.confidence.high_body': {
    en: 'AI-drafted then read end-to-end by a human editor. Used for theme-level analysis, contextual notes and revision summaries.',
    ar: 'مسوّدة بالـ AI ثم قراها محرّر بشري من البداية للنهاية. يُستخدم لتحليل الموضوعات، والملاحظات السياقية، وملخّصات المراجعة.',
  },
  'about.verified.confidence.medium_label': {
    en: 'Medium - AI-drafted, awaiting review',
    ar: 'متوسّط - مسوّدة بالـ AI، بانتظار المراجعة',
  },
  'about.verified.confidence.medium_body': {
    en: 'AI-generated content surfaced as a learning aid but not yet signed off by a human editor. We mark this clearly so students know what they are looking at.',
    ar: 'محتوى مولّد بالـ AI معروض كأداة تعلّم لكن لين الحين ما اعتمده محرّر بشري. نوضّح هذا بشكل صريح عشان الطلاب يعرفون وش يشوفون.',
  },
  'about.verified.confidence.low_label': {
    en: 'Formative - practice feedback only',
    ar: 'تكويني - ملاحظات تمارين فقط',
  },
  'about.verified.confidence.low_body': {
    en: 'AI-generated essay feedback and grade indications. Useful for practice and pattern-spotting, but not official marking. Always to be discussed with a teacher before being acted on.',
    ar: 'ملاحظات مقالات ومؤشّرات درجات مولّدة بالـ AI. مفيدة للتمرين واكتشاف الأنماط، لكنها مو تصحيح رسمي. لازم دايماً تتناقش مع معلّم قبل ما تتصرّف بناءً عليها.',
  },

  // Common errors
  'about.verified.errors.h2': {
    en: 'What we have caught and fixed',
    ar: 'وش مسكناه وصحّحناه',
  },
  'about.verified.errors.body': {
    en: 'AI-assisted content gets two specific things wrong more than anything else: invented quotations that sound right but do not appear in the text, and confident statements about historical context that no source actually supports. We keep an internal log of corrections and bump the "Last updated" date on the affected page when a substantive change lands.',
    ar: 'المحتوى المدعوم بالـ AI يغلط في شيئين بالذات أكثر من أي شي: اقتباسات مختلَقة تبيّن صحيحة بس ما تظهر في النص، وعبارات واثقة عن السياق التاريخي ما يدعمها أي مصدر فعلاً. نحتفظ بسجل داخلي للتصحيحات ونحدّث تاريخ "آخر تحديث" على الصفحة المتأثّرة لمّا ينزل تغيير جوهري.',
  },

  // Report a content issue
  'about.verified.report.h2': {
    en: 'Spotted something that does not look right?',
    ar: 'لاحظت شي ما يبيّن صح؟',
  },
  'about.verified.report.body': {
    en: 'Report it and our team will review the page. Reports go to our editorial inbox, are logged within the working day, and the reporter is told the outcome once the review is complete.',
    ar: 'بلّغ عنه وفريقنا بيراجع الصفحة. البلاغات توصل لصندوق التحرير عندنا، وتُسجّل خلال يوم العمل، والمبلِّغ ينعرّف بالنتيجة أول ما تخلص المراجعة.',
  },
  'about.verified.report.cta': { en: 'Report a content issue', ar: 'بلّغ عن مشكلة في المحتوى' },

  // ───────────────────────────────────────────────────────────────────
  // Footer link labels for the two new pages
  // ───────────────────────────────────────────────────────────────────

  'footer.link.school_pilot_pack': { en: 'School Pilot Pack', ar: 'حزمة المدارس التجريبية' },
  'footer.link.content_verification': {
    en: 'Content Verification Methodology',
    ar: 'منهجية توثيق المحتوى',
  },
}
