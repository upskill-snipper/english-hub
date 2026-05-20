/**
 * Long-form legal / compliance dictionary entries (legal_long.*).
 *
 * IMPORTANT — FORMAL MSA (الفصحى) ONLY in this module.
 *
 * Regulators, school DPOs, and diligence reviewers may quote this
 * text verbatim. Khaleeji conventions used elsewhere in the product
 * (شنو, أبغى, وايد, إحنا, ببلاش, لحظة, etc.) are BANNED here.
 *
 * Use formal MSA throughout:
 *   ماذا           not   شنو
 *   نحن            not   إحنا
 *   نريد / نرغب     not   نبغى / أبغى
 *   كثيراً           not   وايد
 *   الآن            not   الحين
 *   مجاناً           not   ببلاش
 *   انظر / يُرجى     not   شوف
 *   ابحث           not   دوّر
 *   أغلق           not   سكّر
 *
 * Style: legal register. Long, well-formed sentences. Prefer
 * "يرجى" over imperative "روح". Use definite articles consistently.
 * Brand + technical terms (The English Hub, GCSE, IGCSE, PDPPL,
 * GDPR, DPO, AI, IDTA, SCCs, ICO, Stripe, Supabase, Anthropic,
 * Vercel, Sentry, Resend, GA4) stay in Latin script.
 *
 * Kept in its own module to avoid merge churn on the main
 * dictionary.ts. Imported and merged into DICTIONARY via the
 * lookup chain in dictionary.ts.
 *
 * Namespaces:
 *   legal_long.ai_gov.body.*           — /legal/ai-governance body
 *   legal_long.privacy.body.*          — /legal/privacy body
 *   legal_long.data_processing.body.*  — /data-processing body
 *   legal_long.ai_transparency.body.*  — /legal/ai-transparency body
 */

import type { Dictionary } from './dictionary'

export const LEGAL_LONG_DICTIONARY: Dictionary = {
  // ────────────────────────────────────────────────────────────────
  // /legal/ai-governance — body
  // ────────────────────────────────────────────────────────────────
  'legal_long.ai_gov.h1': {
    en: 'AI Governance & Ethics',
    ar: 'حوكمة الذكاء الاصطناعي والأخلاقيات',
  },
  'legal_long.ai_gov.operator_pre': {
    en: 'The English Hub',
    ar: 'The English Hub',
  },
  'legal_long.ai_gov.operator_mid': {
    en: ' — operated by Upskill Energy Limited',
    ar: ' — تُشغّلها شركة Upskill Energy Limited',
  },
  'legal_long.ai_gov.review_stamp': {
    en: 'Last reviewed: 12 May 2026 · Next review: November 2026',
    ar: 'آخر مراجعة: 12 مايو 2026 · المراجعة التالية: نوفمبر 2026',
  },
  'legal_long.ai_gov.intro': {
    en: 'This page is an honest assessment of where The English Hub sits against the regulatory and voluntary frameworks that govern AI systems and personal data when they touch users in Qatar. We have written it for school Data Protection Officers, parents, and diligence reviewers. It is not marketing copy. Where we fall short, we say so, and we list the work we still owe you.',
    ar: 'تُمثّل هذه الصفحة تقييماً صادقاً لموقع The English Hub بالنسبة إلى الأطر التنظيمية والطوعية التي تحكم أنظمة الذكاء الاصطناعي والبيانات الشخصية حين تمس مستخدمين في دولة قطر. وقد كُتبت لمسؤولي حماية البيانات في المدارس، ولأولياء الأمور، ومراجعي العناية الواجبة. وهي ليست مادة تسويقية. وحيثما يوجد قصور، نُفصح عنه بوضوح، ونُدرج الأعمال المتبقية المستحقّة عليكم.',
  },

  // Section 1
  'legal_long.ai_gov.s1.h2': {
    en: '1. What applies to us, and what doesn’t',
    ar: '1. ما الذي ينطبق علينا، وما الذي لا ينطبق',
  },
  'legal_long.ai_gov.s1.p1': {
    en: 'The English Hub is operated by a UK-based company. We are not a QCB-licensed financial entity, not registered in the Qatar Financial Centre (QFC), not designated Critical National Infrastructure, and not a supplier to any Qatari government agency. That immediately narrows the binding surface area.',
    ar: 'تُشغَّل منصة The English Hub من قِبل شركة مقرّها المملكة المتحدة. ونحن لسنا جهة مالية مرخّصة من مصرف قطر المركزي (QCB)، ولسنا مسجّلين في مركز قطر للمال (QFC)، ولسنا منشأة بنية تحتية وطنية حيوية، ولسنا مورّداً لأي جهة حكومية قطرية. وهذا يُضيّق فوراً نطاق الالتزامات المُلزِمة المُطبَّقة علينا.',
  },
  'legal_long.ai_gov.s1.t.col1': { en: 'Instrument', ar: 'الأداة التنظيمية' },
  'legal_long.ai_gov.s1.t.col2': { en: 'Binding on us?', ar: 'ملزمة لنا؟' },
  'legal_long.ai_gov.s1.t.col3': { en: 'Why', ar: 'السبب' },
  'legal_long.ai_gov.s1.t.r1.c1': {
    en: 'PDPPL (Law 13/2016)',
    ar: 'قانون حماية خصوصية البيانات الشخصية (PDPPL — قانون 13/2016)',
  },
  'legal_long.ai_gov.s1.t.r1.c2': {
    en: 'Yes, for data of individuals in Qatar',
    ar: 'نعم، بالنسبة لبيانات الأفراد المقيمين في قطر',
  },
  'legal_long.ai_gov.s1.t.r1.c3': {
    en: 'Extra-territorial reach via service offered to Qatar residents',
    ar: 'امتداد خارج إقليمي عبر تقديم خدمة لمقيمين في قطر',
  },
  'legal_long.ai_gov.s1.t.r2.c1': {
    en: 'Cybercrime Law (Law 14/2014)',
    ar: 'قانون مكافحة الجرائم الإلكترونية (قانون 14/2014)',
  },
  'legal_long.ai_gov.s1.t.r2.c2': {
    en: 'Yes, for any content delivered into Qatar',
    ar: 'نعم، بالنسبة لأي محتوى يُقدَّم داخل قطر',
  },
  'legal_long.ai_gov.s1.t.r2.c3': {
    en: 'Content offences are jurisdictional, not licence-gated',
    ar: 'الجرائم المتعلقة بالمحتوى ذات طابع إقليمي ولا تستلزم ترخيصاً',
  },
  'legal_long.ai_gov.s1.t.r3.c1': {
    en: 'QCB AI Guideline (Sept 2024)',
    ar: 'إرشادات الذكاء الاصطناعي لمصرف قطر المركزي (سبتمبر 2024)',
  },
  'legal_long.ai_gov.s1.t.r3.c2': {
    en: 'No — we hold no QCB licence',
    ar: 'لا — لا نحمل ترخيصاً من مصرف قطر المركزي',
  },
  'legal_long.ai_gov.s1.t.r3.c3': {
    en: 'Used voluntarily as a reference standard',
    ar: 'تُستخدَم طوعياً كمعيار مرجعي',
  },
  'legal_long.ai_gov.s1.t.r4.c1': {
    en: 'NCSA AI Guidelines v1.0 (Feb 2024)',
    ar: 'إرشادات الذكاء الاصطناعي للوكالة الوطنية للأمن السيبراني NCSA إصدار 1.0 (فبراير 2024)',
  },
  'legal_long.ai_gov.s1.t.r4.c2': { en: 'No — voluntary', ar: 'لا — طوعية' },
  'legal_long.ai_gov.s1.t.r4.c3': {
    en: 'Treated as expected practice; alignment in progress',
    ar: 'تُعامَل بوصفها ممارسة متوقّعة، والمواءمة قيد التنفيذ',
  },
  'legal_long.ai_gov.s1.t.r5.c1': {
    en: 'MCIT Ethical AI Principles (2025)',
    ar: 'مبادئ الذكاء الاصطناعي الأخلاقي لوزارة الاتصالات وتكنولوجيا المعلومات (MCIT) لعام 2025',
  },
  'legal_long.ai_gov.s1.t.r5.c2': { en: 'No — voluntary', ar: 'لا — طوعية' },
  'legal_long.ai_gov.s1.t.r5.c3': {
    en: 'Adopted as our internal ethical baseline',
    ar: 'اعتُمدت بوصفها المعيار الأخلاقي الداخلي لدينا',
  },
  'legal_long.ai_gov.s1.t.r6.c1': { en: 'NIA / NIMF / NDCP', ar: 'NIA / NIMF / NDCP' },
  'legal_long.ai_gov.s1.t.r6.c2': {
    en: 'No — not CNI, not government',
    ar: 'لا — لسنا منشأة حيوية ولا جهة حكومية',
  },
  'legal_long.ai_gov.s1.t.r6.c3': { en: 'Tracked but not implemented', ar: 'مُتابعة دون تطبيق' },
  'legal_long.ai_gov.s1.t.r7.c1': {
    en: 'Cloud Policy Framework',
    ar: 'إطار سياسة الحوسبة السحابية',
  },
  'legal_long.ai_gov.s1.t.r7.c2': {
    en: 'No — not a licensed Qatari cloud provider',
    ar: 'لا — لسنا مزوّد حوسبة سحابية مرخّصاً في قطر',
  },
  'legal_long.ai_gov.s1.t.r7.c3': {
    en: 'Referenced when selecting subprocessors',
    ar: 'يُستأنَس به عند اختيار المعالجين الفرعيين',
  },
  'legal_long.ai_gov.s1.t.r8.c1': {
    en: 'QFC Data Protection Regulations 2021',
    ar: 'لائحة حماية البيانات لمركز قطر للمال لعام 2021',
  },
  'legal_long.ai_gov.s1.t.r8.c2': {
    en: 'No — not QFC-registered',
    ar: 'لا — لسنا مسجّلين في مركز قطر للمال',
  },
  'legal_long.ai_gov.s1.t.r8.c3': { en: 'Separate jurisdiction', ar: 'اختصاص قضائي منفصل' },
  'legal_long.ai_gov.s1.outro': {
    en: 'The honest summary: PDPPL and the Cybercrime Law are the two instruments that genuinely bite. Everything else is voluntary best-practice that we either align to or are openly working toward.',
    ar: 'الخلاصة الصريحة: قانون حماية خصوصية البيانات الشخصية (PDPPL) وقانون مكافحة الجرائم الإلكترونية هما الأداتان التنظيميتان اللتان تُلزماننا فعلياً. وما عداهما يُعدّ ممارسات فضلى طوعية، إمّا أن نكون متوائمين معها أو نعمل علناً على تحقيق المواءمة معها.',
  },

  // Section 2
  'legal_long.ai_gov.s2.h2': {
    en: '2. PDPPL — where we comply, where there are gaps',
    ar: '2. قانون حماية خصوصية البيانات الشخصية (PDPPL) — أين نمتثل، وأين توجد ثغرات',
  },
  'legal_long.ai_gov.s2.p1': {
    en: 'PDPPL is narrower than GDPR. It requires a lawful basis, transparency, purpose limitation, security, and explicit consent for sensitive data. It does not grant a GDPR-style Article 22 right against solely-automated decisions, but it does class children’s data as sensitive.',
    ar: 'قانون حماية خصوصية البيانات الشخصية (PDPPL) أضيق نطاقاً من اللائحة الأوروبية العامة لحماية البيانات (GDPR). فهو يستلزم وجود أساس قانوني، والشفافية، وتحديد الغرض، والأمن، والحصول على موافقة صريحة بشأن البيانات الحساسة. ولا يُقرّر هذا القانون حقاً مماثلاً للمادة 22 من اللائحة الأوروبية بشأن القرارات الآلية البحتة، غير أنه يُصنّف بيانات الأطفال ضمن البيانات الشخصية الحساسة.',
  },
  'legal_long.ai_gov.s2.h3_compliant': {
    en: 'Where we currently comply',
    ar: 'مواضع امتثالنا الحالي',
  },
  'legal_long.ai_gov.s2.li_c1': {
    en: 'Personal data is stored in Supabase (EU region), encrypted at rest and in transit.',
    ar: 'تُخزَّن البيانات الشخصية في Supabase (إقليم الاتحاد الأوروبي)، وهي مُشفَّرة أثناء التخزين والنقل.',
  },
  'legal_long.ai_gov.s2.li_c2': {
    en: 'We publish a privacy notice describing categories of data, purposes, and retention.',
    ar: 'ننشر إشعار خصوصية يُحدّد فئات البيانات وأغراض المعالجة ومدد الاحتفاظ.',
  },
  'legal_long.ai_gov.s2.li_c3': {
    en: 'We support data access and deletion requests via email (see section 10).',
    ar: 'نتعامل مع طلبات الوصول إلى البيانات وحذفها عبر البريد الإلكتروني (يُراجَع القسم 10).',
  },
  'legal_long.ai_gov.s2.li_c4': {
    en: 'We do not sell personal data and do not use it to train third-party AI models.',
    ar: 'لا نبيع البيانات الشخصية ولا نستخدمها لتدريب نماذج الذكاء الاصطناعي التابعة لأطراف ثالثة.',
  },
  'legal_long.ai_gov.s2.h3_gaps': {
    en: 'Where there are gaps we acknowledge',
    ar: 'الثغرات التي نُقرّ بها',
  },
  'legal_long.ai_gov.s2.li_g1': {
    en: 'We have not yet appointed a named Data Controller representative for Qatar-resident users, and PDPPL’s consent and notification requirements for sensitive data (including children’s) are not yet supported by a structured workflow on our signup path.',
    ar: 'لم نُعيّن بعدُ ممثلاً مُسمّى للمتحكّم في البيانات بخصوص المستخدمين المقيمين في قطر، كما أن متطلبات الموافقة والإخطار الواردة في قانون PDPPL بشأن البيانات الحساسة (بما فيها بيانات الأطفال) لا تدعمها بعدُ آليّة عمل منظّمة في مسار التسجيل لدينا.',
  },
  'legal_long.ai_gov.s2.li_g2': {
    en: 'Subprocessors operate across multiple jurisdictions: Stripe (USA), PostHog (EU/US), GA4 (USA), Vercel hosting (USA), Sentry (USA). PDPPL permits cross-border transfer with safeguards but does not have an adequacy list, so we currently rely on contractual safeguards rather than a formal transfer impact assessment per Qatar resident.',
    ar: 'يعمل المعالجون الفرعيون في ولايات قضائية متعدّدة: Stripe (الولايات المتحدة)، وPostHog (الاتحاد الأوروبي/الولايات المتحدة)، وGA4 (الولايات المتحدة)، واستضافة Vercel (الولايات المتحدة)، وSentry (الولايات المتحدة). ويُجيز قانون PDPPL النقل عبر الحدود بضمانات مناسبة، إلا أنه لا يتضمّن قائمة بالدول ذات الكفاية. ومن ثَمّ نعتمد حالياً على ضمانات تعاقدية بدلاً من إجراء تقييم رسمي لأثر النقل لكل مقيم في قطر.',
  },
  'legal_long.ai_gov.s2.li_g3': {
    en: 'We do not yet maintain a register of processing activities specific to Qatar users.',
    ar: 'لا نحتفظ بعدُ بسجلّ لأنشطة المعالجة المخصّص للمستخدمين المقيمين في قطر.',
  },
  'legal_long.ai_gov.s2.rem1_strong': { en: 'Remediation (1): ', ar: 'الإجراء التصحيحي (1): ' },
  'legal_long.ai_gov.s2.rem1_text': {
    en: 'Build a Qatar-specific privacy notice supplement listing each subprocessor, its jurisdiction, and the contractual safeguard.',
    ar: 'إعداد ملحق لإشعار الخصوصية خاص بقطر يُدرج كل معالج فرعي وولايته القضائية والضمانة التعاقدية المعتمدة.',
  },
  'legal_long.ai_gov.s2.rem2_strong': { en: 'Remediation (2): ', ar: 'الإجراء التصحيحي (2): ' },
  'legal_long.ai_gov.s2.rem2_text': {
    en: 'Implement a Record of Processing Activities (RoPA) and review quarterly.',
    ar: 'استحداث سجلّ لأنشطة المعالجة (RoPA) ومراجعته فصلياً.',
  },

  // Section 3
  'legal_long.ai_gov.s3.h2': {
    en: '3. Cybercrime Law — relevance for AI-generated content',
    ar: '3. قانون مكافحة الجرائم الإلكترونية — صلته بالمحتوى المُولَّد بالذكاء الاصطناعي',
  },
  'legal_long.ai_gov.s3.p1': {
    en: 'Law 14/2014 criminalises, among other things, content that infringes social values, public order, or the reputation of others, and content that is false or misleading. Because our platform generates explanatory content, model answers, and feedback using LLMs, an autonomous agent producing such material is not a defence — the operator carries the risk.',
    ar: 'يُجرّم قانون 14/2014، فيما يُجرّم، المحتوى الذي يمسّ القيم الاجتماعية أو النظام العام أو سمعة الغير، والمحتوى الكاذب أو المُضلِّل. ولمّا كانت منصّتنا تُنتج محتوى شارحاً، وإجابات نموذجية، وملاحظات تقييمية عبر نماذج اللغة الكبيرة (LLMs)، فإن كون المحتوى صادراً عن وكيل ذكي مستقل لا يُعدّ دفعاً قانونياً؛ إذ تقع المسؤولية على المُشغّل.',
  },
  'legal_long.ai_gov.s3.h3_do': { en: 'What we do', ar: 'الإجراءات التي نتّخذها' },
  'legal_long.ai_gov.s3.li_do1': {
    en: 'All AI-generated student-facing study material is produced from a curated curriculum prompt set, not free-form user prompts to a raw model.',
    ar: 'تُنتَج جميع المواد الدراسية المُولَّدة بالذكاء الاصطناعي والمُقدَّمة للطلاب من مجموعة موجّهات مناهجية مُنسَّقة، وليس من موجّهات حرّة يُرسلها المستخدم إلى نموذج خام.',
  },
  'legal_long.ai_gov.s3.li_do2': {
    en: 'We do not publish AI-generated content about identifiable individuals.',
    ar: 'لا ننشر محتوى مُولَّداً بالذكاء الاصطناعي يتعلّق بأفراد قابلين للتعرّف.',
  },
  'legal_long.ai_gov.s3.li_do3': {
    en: 'We rate-limit and log all generation events for after-the-fact review.',
    ar: 'نُطبّق حدوداً على معدّل التوليد ونُسجّل جميع عمليات التوليد لأغراض المراجعة اللاحقة.',
  },
  'legal_long.ai_gov.s3.h3_gaps': { en: 'Gaps', ar: 'الثغرات' },
  'legal_long.ai_gov.s3.li_g1': {
    en: 'We do not yet run a pre-publication content classifier specifically tuned to Qatari content offences.',
    ar: 'لا نُشغّل بعدُ مُصنِّفاً للمحتوى قبل النشر مضبوطاً تحديداً وفق الجرائم المتعلقة بالمحتوى في النظام القطري.',
  },
  'legal_long.ai_gov.s3.li_g2': {
    en: 'Student-submitted essays processed by AI may contain content that, if echoed back unfiltered, could constitute an offence on republication.',
    ar: 'قد تتضمّن مقالات الطلاب المُعالَجة بالذكاء الاصطناعي محتوى يُمكن، إن أُعيد إصداره دون تنقية، أن يُشكّل مخالفة عند إعادة النشر.',
  },
  'legal_long.ai_gov.s3.rem3_strong': { en: 'Remediation (3): ', ar: 'الإجراء التصحيحي (3): ' },
  'legal_long.ai_gov.s3.rem3_text': {
    en: 'Add a Qatar-aware content safety layer (classifier + denylist) in front of any AI output rendered to a Qatar-resident user, and log decisions for audit.',
    ar: 'إضافة طبقة لأمان المحتوى مُكيَّفة وفقاً للنظام القطري (مُصنِّف وقائمة حظر) قبل عرض أي مُخرَج للذكاء الاصطناعي على مستخدم مقيم في قطر، مع تسجيل القرارات لأغراض التدقيق.',
  },

  // Section 4
  'legal_long.ai_gov.s4.h2': {
    en: '4. NCSA AI Guidelines — voluntary alignment status',
    ar: '4. إرشادات الذكاء الاصطناعي للوكالة الوطنية للأمن السيبراني (NCSA) — حالة المواءمة الطوعية',
  },
  'legal_long.ai_gov.s4.p1': {
    en: 'NCSA v1.0 covers the AI lifecycle: design, data, development, deployment, monitoring, decommissioning. We treat it as a self-assessment checklist.',
    ar: 'يُغطّي الإصدار 1.0 من إرشادات الوكالة الوطنية للأمن السيبراني (NCSA) دورة حياة الذكاء الاصطناعي: التصميم، والبيانات، والتطوير، والنشر، والرصد، والإيقاف. ونحن نتعامل معها بوصفها قائمة تحقّق للتقييم الذاتي.',
  },
  'legal_long.ai_gov.s4.t.col1': { en: 'Lifecycle stage', ar: 'مرحلة دورة الحياة' },
  'legal_long.ai_gov.s4.t.col2': { en: 'Status', ar: 'الحالة' },
  'legal_long.ai_gov.s4.t.r1.c1': {
    en: 'Design (intended use, risk tier)',
    ar: 'التصميم (الاستخدام المقصود، فئة المخاطر)',
  },
  'legal_long.ai_gov.s4.t.r1.c2': {
    en: 'Partial — informal, not documented',
    ar: 'جزئي — غير رسمي وغير موثَّق',
  },
  'legal_long.ai_gov.s4.t.r2.c1': {
    en: 'Data governance (sourcing, quality, bias)',
    ar: 'حوكمة البيانات (المصادر، الجودة، التحيّز)',
  },
  'legal_long.ai_gov.s4.t.r2.c2': {
    en: 'Partial — curriculum content is sourced and reviewed; third-party training data is out of our control',
    ar: 'جزئي — يُصدَر محتوى المناهج من مصادر مُعتمَدة ويُراجَع، أما بيانات التدريب الخاصة بالأطراف الثالثة فخارج نطاق سيطرتنا',
  },
  'legal_long.ai_gov.s4.t.r3.c1': {
    en: 'Development (testing, validation)',
    ar: 'التطوير (الاختبار، التحقّق)',
  },
  'legal_long.ai_gov.s4.t.r3.c2': {
    en: 'Partial — manual QA, no formal eval set',
    ar: 'جزئي — ضمان جودة يدوي، دون مجموعة تقييم رسمية',
  },
  'legal_long.ai_gov.s4.t.r4.c1': {
    en: 'Deployment (human oversight, fallbacks)',
    ar: 'النشر (الرقابة البشرية، خيارات الاحتياط)',
  },
  'legal_long.ai_gov.s4.t.r4.c2': {
    en: 'Yes — humans review flagged outputs',
    ar: 'نعم — يُراجع المختصّون المُخرَجات المُحدَّدة',
  },
  'legal_long.ai_gov.s4.t.r5.c1': {
    en: 'Monitoring (drift, incident response)',
    ar: 'الرصد (الانحراف، الاستجابة للحوادث)',
  },
  'legal_long.ai_gov.s4.t.r5.c2': {
    en: 'Partial — Sentry catches errors but not model-quality drift',
    ar: 'جزئي — يلتقط نظام Sentry الأخطاء ولكن لا يرصد الانحراف في جودة النموذج',
  },
  'legal_long.ai_gov.s4.t.r6.c1': { en: 'Decommissioning', ar: 'الإيقاف' },
  'legal_long.ai_gov.s4.t.r6.c2': { en: 'Not documented', ar: 'غير موثَّق' },
  'legal_long.ai_gov.s4.rem4_strong': { en: 'Remediation (4): ', ar: 'الإجراء التصحيحي (4): ' },
  'legal_long.ai_gov.s4.rem4_text': {
    en: 'Publish an AI System Card for each AI feature (essay feedback, model-answer generation, vocabulary explainer), including intended use, known limits, and an evaluation summary.',
    ar: 'نشر بطاقة نظام للذكاء الاصطناعي لكل خاصية من خصائصه (التقييم المُولَّد للمقالات، وتوليد الإجابات النموذجية، وشارح المفردات)، تتضمّن الاستخدام المقصود، والقيود المعلومة، وملخّص التقييم.',
  },
  'legal_long.ai_gov.s4.rem5_strong': { en: 'Remediation (5): ', ar: 'الإجراء التصحيحي (5): ' },
  'legal_long.ai_gov.s4.rem5_text': {
    en: 'Stand up a quarterly drift and quality review with documented criteria and a rollback plan.',
    ar: 'إرساء مراجعة فصلية للانحراف والجودة مع معايير موثّقة وخطة للتراجع عند الحاجة.',
  },

  // Section 5
  'legal_long.ai_gov.s5.h2': {
    en: '5. MCIT Ethical AI Principles — alignment status',
    ar: '5. مبادئ الذكاء الاصطناعي الأخلاقي لوزارة الاتصالات وتكنولوجيا المعلومات (MCIT) — حالة المواءمة',
  },
  'legal_long.ai_gov.s5.p1': {
    en: 'Six principles. Honest scoring below.',
    ar: 'ستة مبادئ. والتقييم الصريح فيما يلي.',
  },
  'legal_long.ai_gov.s5.li1_strong': { en: 'Do no harm. ', ar: 'عدم إلحاق الضرر. ' },
  'legal_long.ai_gov.s5.li1_text': {
    en: 'Output is for revision support, not high-stakes decisions. Aligned.',
    ar: 'تُستخدَم المُخرَجات لدعم المراجعة، لا لاتخاذ قرارات عالية الأثر. متوائم.',
  },
  'legal_long.ai_gov.s5.li2_strong': { en: 'Safety and reliability. ', ar: 'السلامة والموثوقية. ' },
  'legal_long.ai_gov.s5.li2_text': {
    en: 'We do not yet publish accuracy or failure-mode statistics. Partial — see Remediation 4.',
    ar: 'لا ننشر بعدُ إحصاءات الدقة أو أنماط الإخفاق. جزئي — يُراجَع الإجراء التصحيحي 4.',
  },
  'legal_long.ai_gov.s5.li3_strong': { en: 'Fairness. ', ar: 'الإنصاف. ' },
  'legal_long.ai_gov.s5.li3_text': {
    en: 'We have not yet tested AI-generated feedback for systematic bias against students writing in non-British English, second-language learners (including Gulf Arabic L1 speakers), or specific socioeconomic vocabulary. Gap.',
    ar: 'لم نختبر بعدُ التقييم المُولَّد بالذكاء الاصطناعي للكشف عن أي تحيّز منهجي ضدّ الطلاب الذين يكتبون بلغة إنجليزية غير بريطانية، أو متعلّمي اللغة الإنجليزية بوصفها لغة ثانية (بمن فيهم الناطقون باللهجات الخليجية لغةً أُولى)، أو ضدّ مفردات اجتماعية اقتصادية بعينها. ثغرة.',
  },
  'legal_long.ai_gov.s5.li4_strong': { en: 'Environment. ', ar: 'البيئة. ' },
  'legal_long.ai_gov.s5.li4_text': {
    en: 'We use third-party model APIs; energy footprint is not measured or disclosed. Gap.',
    ar: 'نستخدم واجهات برمجية لنماذج تابعة لأطراف ثالثة، ولا نقيس البصمة الطاقوية ولا نفصح عنها. ثغرة.',
  },
  'legal_long.ai_gov.s5.li5_strong': { en: 'Privacy. ', ar: 'الخصوصية. ' },
  'legal_long.ai_gov.s5.li5_text': {
    en: 'Covered in section 2. Partial.',
    ar: 'يُغطّيها القسم 2. جزئي.',
  },
  'legal_long.ai_gov.s5.li6_strong': { en: 'Transparency. ', ar: 'الشفافية. ' },
  'legal_long.ai_gov.s5.li6_text': {
    en: 'AI essay-feedback panels, marking results, AI-generated revision material and AI-authored blog posts now carry a consistent visible "Made with AI — review before relying on it" label that links to this page. Remaining gap: a small number of statically pre-authored AI-assisted study pages may not yet display the label, and a pre-publication content classifier is still in progress (see Remediation 3).',
    ar: 'تحمل الآن لوحات تقييم المقالات بالذكاء الاصطناعي ونتائج التصحيح والمواد المراجعة المُولَّدة والمقالات المُؤلَّفة بالذكاء الاصطناعي علامة ظاهرة ومتّسقة بنصّ "صُنع بمساعدة الذكاء الاصطناعي — يُرجى المراجعة قبل الاعتماد عليه" مرتبطة بهذه الصفحة. ثغرة متبقّية: قد لا تعرض بعض صفحات الدراسة المُعدّة مسبقاً العلامة بعد، ولا يزال مُصنِّف المحتوى قبل النشر قيد التنفيذ (يُراجَع الإجراء التصحيحي 3).',
  },
  'legal_long.ai_gov.s5.rem6_strong': { en: 'Remediation (6): ', ar: 'الإجراء التصحيحي (6): ' },
  'legal_long.ai_gov.s5.rem6_text': {
    en: 'Add a visible “Generated with AI — review before relying on” label on every AI-produced essay-feedback panel, model answer, and auto-generated blog post.',
    ar: 'إضافة علامة ظاهرة بنصّ "مُولَّد بالذكاء الاصطناعي — يُرجى المراجعة قبل الاعتماد عليه" على كل لوحة تقييم مُولَّدة بالذكاء الاصطناعي، وكل إجابة نموذجية، وكل تدوينة تُولَّد آلياً.',
  },
  'legal_long.ai_gov.s5.rem7_strong': { en: 'Remediation (7): ', ar: 'الإجراء التصحيحي (7): ' },
  'legal_long.ai_gov.s5.rem7_text': {
    en: 'Commission an annual fairness audit across English-language proficiency tiers and publish the summary.',
    ar: 'إجراء تدقيق سنوي للإنصاف يشمل مستويات إتقان اللغة الإنجليزية المختلفة، ونشر ملخّصه.',
  },

  // Section 6
  'legal_long.ai_gov.s6.h2': {
    en: '6. QCB / NIA / NDCP / Cloud Policy — when these apply to us',
    ar: '6. إرشادات QCB / NIA / NDCP / إطار سياسة الحوسبة السحابية — متى تنطبق علينا',
  },
  'legal_long.ai_gov.s6.li1_strong': {
    en: 'QCB AI Guideline ',
    ar: 'إرشادات الذكاء الاصطناعي لمصرف قطر المركزي (QCB) ',
  },
  'legal_long.ai_gov.s6.li1_text': {
    en: 'binds licensed financial entities. We are not one. We do, however, treat its model-risk-management framing as a useful reference, particularly its emphasis on documented model governance and explainability.',
    ar: 'تُلزِم الجهات المالية المرخّصة. ونحن لسنا منها. غير أننا نتعامل مع إطارها لإدارة مخاطر النماذج بوصفه مرجعاً مفيداً، لا سيما تأكيده على التوثيق في حوكمة النماذج والقابلية للتفسير.',
  },
  'legal_long.ai_gov.s6.li2_strong': { en: 'NIA / NIMF / NDCP ', ar: 'NIA / NIMF / NDCP ' },
  'legal_long.ai_gov.s6.li2_text': {
    en: 'are mandatory for Critical National Infrastructure and government supply chains. The English Hub is neither. If a Qatari ministry or state school procures our service under a government contract, NIA controls become contractually relevant and we would need a gap assessment.',
    ar: 'إلزامية للبنية التحتية الوطنية الحيوية وسلاسل التوريد الحكومية. ولا تنطبق على The English Hub. وفي حال تعاقَدَت معنا وزارة قطرية أو مدرسة حكومية بموجب عقد حكومي، فإن ضوابط NIA تُصبح ذات صلة تعاقدياً، وحينئذ يلزمنا تقييم للثغرات.',
  },
  'legal_long.ai_gov.s6.li3_strong': {
    en: 'Cloud Policy Framework ',
    ar: 'إطار سياسة الحوسبة السحابية ',
  },
  'legal_long.ai_gov.s6.li3_text': {
    en: 'binds licensed Qatari cloud providers. None of our hosting or storage is operated under a Qatari cloud licence. Our subprocessors are: Vercel (USA, edge), Cloudflare (global edge), Supabase (EU primary), Stripe (USA), PostHog (EU/US), GA4 (USA), Sentry (USA).',
    ar: 'يُلزِم مزوّدي الحوسبة السحابية المرخّصين في قطر. ولا تخضع أيٌّ من خدمات الاستضافة أو التخزين لدينا لترخيص قطري للحوسبة السحابية. والمعالجون الفرعيون لدينا هم: Vercel (الولايات المتحدة، شبكة طرفية)، وCloudflare (شبكة طرفية عالمية)، وSupabase (الاتحاد الأوروبي، الإقليم الأساسي)، وStripe (الولايات المتحدة)، وPostHog (الاتحاد الأوروبي/الولايات المتحدة)، وGA4 (الولايات المتحدة)، وSentry (الولايات المتحدة).',
  },
  'legal_long.ai_gov.s6.rem8_strong': { en: 'Remediation (8): ', ar: 'الإجراء التصحيحي (8): ' },
  'legal_long.ai_gov.s6.rem8_text': {
    en: 'Maintain a published subprocessor list with jurisdiction, purpose, and the contractual transfer mechanism, updated on change.',
    ar: 'الاحتفاظ بقائمة منشورة للمعالجين الفرعيين تتضمّن الولاية القضائية، والغرض، وآلية النقل التعاقدية، وتُحدَّث عند أي تغيير.',
  },

  // Section 7
  'legal_long.ai_gov.s7.h2': {
    en: '7. Honest gaps + remediation roadmap',
    ar: '7. الثغرات الصريحة وخارطة الإجراءات التصحيحية',
  },
  'legal_long.ai_gov.s7.t.col1': { en: '#', ar: '#' },
  'legal_long.ai_gov.s7.t.col2': { en: 'Action', ar: 'الإجراء' },
  'legal_long.ai_gov.s7.t.col3': { en: 'Owner', ar: 'الجهة المسؤولة' },
  'legal_long.ai_gov.s7.t.col4': { en: 'Target', ar: 'الموعد المستهدف' },
  'legal_long.ai_gov.s7.r1.action': {
    en: 'Qatar-specific privacy notice supplement',
    ar: 'ملحق إشعار خصوصية خاص بقطر',
  },
  'legal_long.ai_gov.s7.r1.owner': { en: 'DPO', ar: 'مسؤول حماية البيانات' },
  'legal_long.ai_gov.s7.r1.target': { en: 'Q3 2026', ar: 'الربع الثالث 2026' },
  'legal_long.ai_gov.s7.r2.action': {
    en: 'Record of Processing Activities (RoPA)',
    ar: 'سجلّ أنشطة المعالجة (RoPA)',
  },
  'legal_long.ai_gov.s7.r2.owner': { en: 'DPO', ar: 'مسؤول حماية البيانات' },
  'legal_long.ai_gov.s7.r2.target': { en: 'Q3 2026', ar: 'الربع الثالث 2026' },
  'legal_long.ai_gov.s7.r3.action': {
    en: 'Qatar-aware content safety layer for AI output',
    ar: 'طبقة أمان للمحتوى مُكيَّفة وفقاً للنظام القطري لمُخرَجات الذكاء الاصطناعي',
  },
  'legal_long.ai_gov.s7.r3.owner': { en: 'Engineering', ar: 'فريق الهندسة' },
  'legal_long.ai_gov.s7.r3.target': { en: 'Q4 2026', ar: 'الربع الرابع 2026' },
  'legal_long.ai_gov.s7.r4.action': {
    en: 'Publish AI System Cards per feature',
    ar: 'نشر بطاقات نظام الذكاء الاصطناعي لكل خاصية',
  },
  'legal_long.ai_gov.s7.r4.owner': { en: 'Product', ar: 'فريق المنتج' },
  'legal_long.ai_gov.s7.r4.target': { en: 'Q4 2026', ar: 'الربع الرابع 2026' },
  'legal_long.ai_gov.s7.r5.action': {
    en: 'Quarterly drift & quality review with rollback plan',
    ar: 'مراجعة فصلية للانحراف والجودة مع خطة للتراجع',
  },
  'legal_long.ai_gov.s7.r5.owner': { en: 'Engineering', ar: 'فريق الهندسة' },
  'legal_long.ai_gov.s7.r5.target': { en: 'Q3 2026', ar: 'الربع الثالث 2026' },
  'legal_long.ai_gov.s7.r6.action': {
    en: '"Generated with AI" labels across the product',
    ar: 'علامات "مُولَّد بالذكاء الاصطناعي" عبر المنتج',
  },
  'legal_long.ai_gov.s7.r6.owner': { en: 'Product', ar: 'فريق المنتج' },
  'legal_long.ai_gov.s7.r6.target': { en: 'Q3 2026', ar: 'الربع الثالث 2026' },
  'legal_long.ai_gov.s7.r7.action': {
    en: 'Annual fairness audit, summary published',
    ar: 'تدقيق سنوي للإنصاف مع نشر ملخّصه',
  },
  'legal_long.ai_gov.s7.r7.owner': {
    en: 'DPO + external',
    ar: 'مسؤول حماية البيانات + جهة خارجية',
  },
  'legal_long.ai_gov.s7.r7.target': { en: 'Q1 2027', ar: 'الربع الأول 2027' },
  'legal_long.ai_gov.s7.r8.action': {
    en: 'Published subprocessor list with jurisdictions',
    ar: 'نشر قائمة المعالجين الفرعيين مع الولايات القضائية',
  },
  'legal_long.ai_gov.s7.r8.owner': { en: 'DPO', ar: 'مسؤول حماية البيانات' },
  'legal_long.ai_gov.s7.r8.target': { en: 'Q3 2026', ar: 'الربع الثالث 2026' },
  'legal_long.ai_gov.s7.r9.action': {
    en: 'Parental-consent flow for under-18 signups',
    ar: 'مسار للحصول على موافقة ولي الأمر لتسجيل من تقلّ أعمارهم عن 18 عاماً',
  },
  'legal_long.ai_gov.s7.r9.owner': { en: 'Product', ar: 'فريق المنتج' },
  'legal_long.ai_gov.s7.r9.target': { en: 'Q3 2026', ar: 'الربع الثالث 2026' },
  'legal_long.ai_gov.s7.r10.action': {
    en: 'Cookie consent banner with granular categories',
    ar: 'لافتة موافقة الكوكيز بفئات تفصيلية',
  },
  'legal_long.ai_gov.s7.r10.owner': { en: 'Engineering', ar: 'فريق الهندسة' },
  'legal_long.ai_gov.s7.r10.target': { en: 'Q2 2026', ar: 'الربع الثاني 2026' },
  'legal_long.ai_gov.s7.r11.action': {
    en: 'DPIA for the AI content pipeline',
    ar: 'تقييم أثر حماية البيانات (DPIA) لمسار توليد محتوى الذكاء الاصطناعي',
  },
  'legal_long.ai_gov.s7.r11.owner': { en: 'DPO', ar: 'مسؤول حماية البيانات' },
  'legal_long.ai_gov.s7.r11.target': { en: 'Q4 2026', ar: 'الربع الرابع 2026' },
  'legal_long.ai_gov.s7.r12.action': {
    en: 'Incident response runbook including notification timelines',
    ar: 'دليل تشغيل الاستجابة للحوادث متضمّناً مواعيد الإخطار',
  },
  'legal_long.ai_gov.s7.r12.owner': { en: 'Engineering', ar: 'فريق الهندسة' },
  'legal_long.ai_gov.s7.r12.target': { en: 'Q3 2026', ar: 'الربع الثالث 2026' },

  // Section 8
  'legal_long.ai_gov.s8.h2': {
    en: '8. Children’s data — special call-out',
    ar: '8. بيانات الأطفال — تنبيه خاص',
  },
  'legal_long.ai_gov.s8.p1': {
    en: 'Our core audience is GCSE and IGCSE students, the vast majority of whom are aged 14–17 and therefore minors under both Qatari and most international frameworks. PDPPL classes children’s data as sensitive personal data, which requires explicit, informed consent — and for minors, that consent must come from a parent or legal guardian.',
    ar: 'يتمثّل جمهورنا الأساسي في طلاب شهادتَي GCSE وIGCSE، وتتراوح أعمار الغالبية العظمى منهم بين 14 و17 عاماً، وهم بذلك قاصرون وفق النظام القطري ومعظم الأطر الدولية. ويُصنّف قانون حماية خصوصية البيانات الشخصية (PDPPL) بيانات الأطفال ضمن البيانات الشخصية الحساسة، التي تستلزم موافقة صريحة ومستنيرة. وبالنسبة للقاصرين، يجب أن تصدر هذه الموافقة عن أحد الوالدين أو الولي الشرعي.',
  },
  'legal_long.ai_gov.s8.h3_short': {
    en: 'Where we currently fall short',
    ar: 'مواضع القصور الحالي',
  },
  'legal_long.ai_gov.s8.li_s1': {
    en: 'Our signup flow asks for an email and password. It does not currently verify age or capture verifiable parental consent for users under 18.',
    ar: 'يطلب مسار التسجيل لدينا بريداً إلكترونياً وكلمة مرور. ولا يتحقّق حالياً من العمر، ولا يحصل على موافقة قابلة للتحقّق من ولي الأمر بالنسبة للمستخدمين الذين تقلّ أعمارهم عن 18 عاماً.',
  },
  'legal_long.ai_gov.s8.li_s2': {
    en: 'Marketing communications, in-app analytics, and AI-generated feedback all process the personal data of these minors.',
    ar: 'تُعالَج بيانات هؤلاء القاصرين الشخصية عبر الاتصالات التسويقية، وتحليلات داخل التطبيق، والتقييم المُولَّد بالذكاء الاصطناعي.',
  },
  'legal_long.ai_gov.s8.li_s3': {
    en: 'We do not currently offer a parent-facing dashboard for reviewing and revoking consent.',
    ar: 'لا نُتيح حالياً لوحة تحكّم خاصة بولي الأمر لمراجعة الموافقة وسحبها.',
  },
  'legal_long.ai_gov.s8.p_priority': {
    en: 'This is the most material gap on the page. We are treating it as a priority.',
    ar: 'هذه أكبر ثغرة جوهرية مذكورة في هذه الصفحة، ونتعامل معها بوصفها أولوية قُصوى.',
  },
  'legal_long.ai_gov.s8.rem9_strong': { en: 'Remediation (9): ', ar: 'الإجراء التصحيحي (9): ' },
  'legal_long.ai_gov.s8.rem9_text': {
    en: 'Build a parental-consent flow gated on age at signup: under-18 users enter a guardian email; signup completes only after the guardian confirms consent via a separate verified link. Maintain a consent log.',
    ar: 'بناء مسار للحصول على موافقة ولي الأمر مشروط بالعمر عند التسجيل: يُدخل المستخدمون الذين تقلّ أعمارهم عن 18 عاماً بريداً إلكترونياً لوليّ الأمر، ولا يكتمل التسجيل إلا بعد تأكيد ولي الأمر للموافقة عبر رابط مستقل ومُتحقَّق منه، مع الاحتفاظ بسجلّ للموافقات.',
  },
  'legal_long.ai_gov.s8.rem10_strong': { en: 'Remediation (10): ', ar: 'الإجراء التصحيحي (10): ' },
  'legal_long.ai_gov.s8.rem10_text': {
    en: 'Add a parent dashboard for consent review, data export, and account deletion, scoped to the child’s account.',
    ar: 'إضافة لوحة تحكّم لولي الأمر تُتيح مراجعة الموافقة، وتصدير البيانات، وحذف الحساب، وذلك في نطاق حساب الابن أو الابنة.',
  },
  'legal_long.ai_gov.s8.rem11_strong': { en: 'Remediation (11): ', ar: 'الإجراء التصحيحي (11): ' },
  'legal_long.ai_gov.s8.rem11_text': {
    en: 'Minimise behavioural analytics on confirmed under-18 accounts; disable third-party analytics SDKs (GA4, PostHog session replay) by default for these users.',
    ar: 'تقليل تحليلات السلوك إلى أدنى حدّ على الحسابات المُؤكَّد أن أصحابها دون 18 عاماً، وتعطيل حزم التحليلات التابعة لأطراف ثالثة (GA4، وتسجيل جلسات PostHog) افتراضياً لهؤلاء المستخدمين.',
  },

  // Section 9
  'legal_long.ai_gov.s9.h2': {
    en: '9. AI use disclosure',
    ar: '9. الإفصاح عن استخدام الذكاء الاصطناعي',
  },
  'legal_long.ai_gov.s9.p1': {
    en: 'We use third-party large language models (currently OpenAI and Anthropic APIs, subject to change) to generate:',
    ar: 'نستخدم نماذج لغوية كبيرة تابعة لأطراف ثالثة (حالياً واجهتا OpenAI وAnthropic البرمجيتان، وذلك قابل للتغيير) لتوليد ما يلي:',
  },
  'legal_long.ai_gov.s9.li_g1': {
    en: 'Essay feedback and model annotations',
    ar: 'التقييم المُولَّد للمقالات والتعليقات النموذجية',
  },
  'legal_long.ai_gov.s9.li_g2': {
    en: 'Practice questions and model answers',
    ar: 'أسئلة التدريب والإجابات النموذجية',
  },
  'legal_long.ai_gov.s9.li_g3': {
    en: 'Vocabulary explanations and grammar walkthroughs',
    ar: 'شروح المفردات والشروح النحوية المُفصَّلة',
  },
  'legal_long.ai_gov.s9.li_g4': {
    en: 'Auto-generated blog content (clearly labelled as such)',
    ar: 'محتوى المدوّنة المُولَّد آلياً (المُعلَّم بوصفه كذلك بصورة واضحة)',
  },
  'legal_long.ai_gov.s9.p2': { en: 'We do not:', ar: 'ولا نقوم بما يلي:' },
  'legal_long.ai_gov.s9.li_n1': {
    en: 'Use AI to make decisions about a student’s progression, eligibility, or grading that have legal or similarly significant effects',
    ar: 'استخدام الذكاء الاصطناعي لاتخاذ قرارات تتعلق بتقدّم الطالب الدراسي، أو أهليّته، أو تقديره، ممّا له آثار قانونية أو ذات شأن مماثل',
  },
  'legal_long.ai_gov.s9.li_n2': {
    en: 'Send personal data beyond the student’s submitted text to model providers',
    ar: 'إرسال أي بيانات شخصية إلى مقدّمي النماذج بخلاف النصّ الذي يُقدّمه الطالب',
  },
  'legal_long.ai_gov.s9.li_n3': {
    en: 'Permit model providers to retain prompts for training (we use no-retention endpoints where contractually available)',
    ar: 'السماح لمقدّمي النماذج بالاحتفاظ بالموجّهات لأغراض التدريب (نستخدم نقاط نهاية بدون احتفاظ متى توفّرت تعاقدياً)',
  },
  'legal_long.ai_gov.s9.p3': {
    en: 'Where AI is involved, we are working to label it in-product (Remediation 6). The underlying model name and the prompt template version for any generated artefact can be requested via the contact below.',
    ar: 'حيث يُستخدَم الذكاء الاصطناعي، نعمل على وضع علامة دالّة على ذلك داخل المنتج (الإجراء التصحيحي 6). ويمكن طلب اسم النموذج المُستخدَم، وإصدار قالب الموجّه لأي ناتج مُولَّد، عبر جهة الاتصال المُدرَجة أدناه.',
  },

  // Section 11 (Audit findings) - presented before s10 in source order
  'legal_long.ai_gov.s11.h2': {
    en: '11. Internal audit findings (May 2026)',
    ar: '11. نتائج التدقيق الداخلي (مايو 2026)',
  },
  'legal_long.ai_gov.s11.p1': {
    en: 'This page is paired with an internal compliance audit completed 12 May 2026. The findings below are reproduced verbatim — these are real gaps we have identified in our own code, not theoretical risks. We are publishing them rather than hiding them because the framework rewards transparency and a candid roadmap.',
    ar: 'تقترن هذه الصفحة بتدقيق امتثال داخلي اكتمل في 12 مايو 2026. والنتائج الواردة أدناه مُستنسَخة حرفياً، وهي ثغرات فعلية رصدناها في برمجيّاتنا الخاصة، لا مخاطر افتراضية. ونحن ننشرها بدلاً من إخفائها لأن الإطار التنظيمي يُكافئ الشفافية ووجود خارطة طريق صريحة.',
  },
  'legal_long.ai_gov.s11.a_h3': {
    en: 'A. Signup-flow consent gaps',
    ar: 'أ. ثغرات الموافقة في مسار التسجيل',
  },
  'legal_long.ai_gov.s11.a_li1': {
    en: 'The registration page uses an implicit “By creating an account, you agree to…” link rather than an explicit consent checkbox. PDPPL Art. 4 requires affirmative action, and Art. 17 requires a separate explicit consent for cross-border transfer that the current form does not collect.',
    ar: 'تستخدم صفحة التسجيل عبارة ضمنية "بإنشائك حساباً فإنك توافق على…" بدلاً من خانة موافقة صريحة. وتشترط المادة 4 من قانون PDPPL إجراءً إيجابياً، بينما تشترط المادة 17 الحصول على موافقة صريحة مستقلّة بشأن النقل عبر الحدود، وهي موافقة لا تجمعها الاستمارة الحالية.',
  },
  'legal_long.ai_gov.s11.a_li2': {
    en: 'The contact form has no consent checkbox and no in-line privacy-policy link.',
    ar: 'لا تحتوي استمارة التواصل على خانة موافقة، ولا على رابط مدمج لسياسة الخصوصية.',
  },
  'legal_long.ai_gov.s11.b_h3': {
    en: 'B. Children’s data — material legal risk',
    ar: 'ب. بيانات الأطفال — مخاطرة قانونية جوهرية',
  },
  'legal_long.ai_gov.s11.b_li1': {
    en: '16- and 17-year-olds bypass guardian consent entirely and self-onboard. PDPPL treats all under-18s as minors requiring guardian consent. This is the single biggest legal exposure for a GCSE/IGCSE platform marketed in Qatar.',
    ar: 'يتجاوز من تبلغ أعمارهم 16 و17 عاماً موافقة وليّ الأمر كليّاً ويُكملون التسجيل ذاتياً. ويُعامِل قانون PDPPL كل من تقلّ أعمارهم عن 18 عاماً بوصفهم قاصرين تستلزم بياناتهم موافقة وليّ الأمر. وهذه أكبر مخاطرة قانونية مفردة تواجه منصة تُسوَّق لطلاب GCSE/IGCSE في قطر.',
  },
  'legal_long.ai_gov.s11.b_li2': {
    en: 'For 13–15 the flow collects a guardian email and fires a non-blocking parent-notify. Signup completes regardless of whether the guardian ever responds. This is “notice” rather than “verifiable parental consent”.',
    ar: 'بالنسبة للفئة العمرية بين 13 و15 عاماً، يجمع المسار بريد وليّ الأمر الإلكتروني ويُرسل إخطاراً لوليّ الأمر دون أن يحجب التسجيل. ويكتمل التسجيل بصرف النظر عن استجابة وليّ الأمر من عدمها. وهذا "إخطار" لا "موافقة قابلة للتحقّق من وليّ الأمر".',
  },
  'legal_long.ai_gov.s11.c_h3': {
    en: 'C. Architecture vs. notice mismatch',
    ar: 'ج. عدم اتساق البنية مع الإشعار',
  },
  'legal_long.ai_gov.s11.c_li1': {
    en: 'The Qatar Privacy Notice (/legal/privacy-qatar) states that data is transferred to the UK under an IDTA. The actual data path is Supabase EU → Anthropic US → Sentry EU → GA4 US → Rewardful US. Anthropic, GA4, and Rewardful currently have no documented Qatar-specific transfer mechanism.',
    ar: 'يُفيد إشعار الخصوصية الخاص بقطر (/legal/privacy-qatar) بأن البيانات تُنقَل إلى المملكة المتحدة بموجب اتفاقية النقل الدولية للبيانات (IDTA). أمّا المسار الفعلي للبيانات فهو: Supabase الاتحاد الأوروبي ← Anthropic الولايات المتحدة ← Sentry الاتحاد الأوروبي ← GA4 الولايات المتحدة ← Rewardful الولايات المتحدة. ولا تتوفّر حالياً آلية نقل موثّقة خاصة بقطر بالنسبة لـ Anthropic وGA4 وRewardful.',
  },
  'legal_long.ai_gov.s11.c_li2': {
    en: 'Our Supabase region is documented inconsistently across internal registers (EU Frankfurt vs UK). The single source of truth needs reconciliation.',
    ar: 'يُوثَّق إقليم Supabase لدينا بصورة متباينة بين السجلّات الداخلية (الاتحاد الأوروبي/فرانكفورت مقابل المملكة المتحدة). ومن ثَمّ يلزم توحيد المصدر الموثوق.',
  },
  'legal_long.ai_gov.s11.c_li3': {
    en: 'Rewardful’s third-party script is unconditionally CSP-allow-listed but is not gated by the cookie-consent flag that protects GA4 and PostHog.',
    ar: 'يُدرَج سكربت Rewardful التابع لطرف ثالث ضمن قائمة السماح في سياسة أمان المحتوى (CSP) بلا شرط، إلا أنه غير مُقيَّد بعلَم موافقة الكوكيز الذي يحمي GA4 وPostHog.',
  },
  'legal_long.ai_gov.s11.d_h3': {
    en: 'D. Right of human review — policy without UI',
    ar: 'د. حقّ المراجعة البشرية — سياسة دون واجهة',
  },
  'legal_long.ai_gov.s11.d_p': {
    en: 'Our policy text promises a right to request human review of AI feedback. That button does not yet exist on the student-facing feedback component. A teacher-override surface exists for school accounts; an equivalent self-serve route for direct-to-consumer students does not.',
    ar: 'يتعهّد نصّ سياستنا بمنح الحقّ في طلب مراجعة بشرية للتقييم المُولَّد بالذكاء الاصطناعي. غير أن الزرّ المُتيح لهذا الحقّ غير موجود بعدُ في مكوّن التقييم المُقدَّم للطلاب. وتتوفّر واجهة لتعديل المعلّم لقرار الذكاء الاصطناعي في حسابات المدارس، إلا أن المسار الذاتي المُكافئ للطلاب الأفراد المُتعاقدين مباشرةً غير متوفّر.',
  },
  'legal_long.ai_gov.s11.e_h3': {
    en: 'E. DPIA status',
    ar: 'هـ. حالة تقييم أثر حماية البيانات (DPIA)',
  },
  'legal_long.ai_gov.s11.e_p': {
    en: 'Our internal DPIA for AI features is at draft v0.9 with author and DPO placeholders unfilled. Finalising it sits in Remediation 11.',
    ar: 'تقييم أثر حماية البيانات الداخلي لخصائص الذكاء الاصطناعي لدينا في المسوّدة الإصدار 0.9، ولم تُستكمَل بعدُ خانتا المؤلِّف ومسؤول حماية البيانات. ويُدرَج إنجازه ضمن الإجراء التصحيحي 11.',
  },
  'legal_long.ai_gov.s11.f_h3': {
    en: 'F. AI labelling coverage',
    ar: 'و. تغطية وضع علامة الذكاء الاصطناعي',
  },
  'legal_long.ai_gov.s11.f_p': {
    en: 'The essay-feedback panel and /legal/ai-transparency page do disclose AI use. Blog content—which is currently part-generated by our agent pipeline—is not flagged as AI-assisted on the public page. Remediation 6 covers this.',
    ar: 'تُفصح لوحة التقييم المُولَّد للمقالات وصفحة /legal/ai-transparency عن استخدام الذكاء الاصطناعي. أمّا محتوى المدوّنة — الذي يُولَّد جزئياً حالياً عبر منظومة وكلائنا — فلا يحمل في الصفحة العامة علامة دالّة على الاستعانة بالذكاء الاصطناعي. ويُعالج الإجراء التصحيحي 6 هذه الثغرة.',
  },
  'legal_long.ai_gov.s11.outro': {
    en: 'We commit to refreshing this section on every material code change to the signup, consent, or AI surfaces. If you are reading this on a date more than three months from the “Last reviewed” stamp at the top of the page, please email us to ask whether the audit has been refreshed.',
    ar: 'نلتزم بتحديث هذا القسم عند كل تغيير جوهري في الشيفرة البرمجية يتعلّق بمسارات التسجيل أو الموافقة أو واجهات الذكاء الاصطناعي. وإن قرأتَ هذا الكلام بعد مرور أكثر من ثلاثة أشهر على ختم "آخر مراجعة" في أعلى الصفحة، يُرجى مراسلتنا للاستفسار عمّا إذا كان التدقيق قد جرى تحديثه.',
  },

  // Section 10 (Contact) - appears last in source order
  'legal_long.ai_gov.s10.h2': {
    en: '10. Contact for data subject requests',
    ar: '10. جهة الاتصال بشأن طلبات أصحاب البيانات',
  },
  'legal_long.ai_gov.s10.p1': {
    en: 'If you are a student, parent, or school in Qatar and want to exercise any of the rights available under PDPPL (access, correction, deletion, withdrawal of consent), or you want to raise a concern about an AI-generated output, contact us at:',
    ar: 'إن كنتَ طالباً أو وليّ أمر أو مدرسة في قطر، وترغب في ممارسة أيّ من الحقوق المكفولة بموجب قانون حماية خصوصية البيانات الشخصية (PDPPL) — كحقوق الوصول، والتصحيح، والحذف، وسحب الموافقة — أو رغبتَ في إثارة مخاوف بشأن ناتج مُولَّد بالذكاء الاصطناعي، يُرجى التواصل معنا عبر:',
  },
  'legal_long.ai_gov.s10.email': {
    en: 'privacy@theenglishhub.app',
    ar: 'privacy@theenglishhub.app',
  },
  'legal_long.ai_gov.s10.p2': {
    en: 'We will acknowledge within 5 working days and respond substantively within 30 days. If you are not satisfied with our response, you may escalate to the National Cyber Security Agency of Qatar (NCSA) as the relevant supervisory authority for PDPPL.',
    ar: 'سنُقرّ باستلام طلبكم خلال خمسة أيام عمل، ونُقدّم رداً موضوعياً خلال 30 يوماً. وفي حال عدم رضاكم عن ردّنا، يحقّ لكم تصعيد الأمر إلى الوكالة الوطنية للأمن السيبراني (NCSA) بوصفها الجهة الإشرافية المختصّة بقانون PDPPL.',
  },
  'legal_long.ai_gov.s10.outro': {
    en: 'This page is reviewed at least every six months and after any material change to our AI features, subprocessors, or governance posture. The next scheduled review is November 2026.',
    ar: 'تُراجَع هذه الصفحة كل ستة أشهر على الأقل، وبعد أي تغيير جوهري في خصائص الذكاء الاصطناعي لدينا، أو المعالجين الفرعيين، أو منظومة الحوكمة. والمراجعة المُقرَّرة التالية في نوفمبر 2026.',
  },

  // ────────────────────────────────────────────────────────────────
  // /legal/privacy — body
  // ────────────────────────────────────────────────────────────────
  'legal_long.privacy.h1': { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  'legal_long.privacy.brand_pre': { en: 'The English Hub', ar: 'The English Hub' },
  'legal_long.privacy.brand_mid': {
    en: ' — a trading name of Upskill Energy Limited',
    ar: ' — اسم تجاري لشركة Upskill Energy Limited',
  },
  'legal_long.privacy.updated': { en: 'Last updated: 12 May 2026', ar: 'آخر تحديث: 12 مايو 2026' },
  'legal_long.privacy.summary_box': {
    en: 'This policy explains who is responsible for your personal data, how to contact our Data Protection Officer (DPO) and Designated Safeguarding Lead (DSL), how to make a complaint to the ICO, and how to exercise your rights to access, export, or delete your data.',
    ar: 'تُوضّح هذه السياسة الجهة المسؤولة عن بياناتك الشخصية، وكيفية التواصل مع مسؤول حماية البيانات (DPO) ومسؤول الحماية المُعيَّن (DSL)، وكيفية تقديم شكوى إلى مكتب مفوّض المعلومات (ICO)، وكيفية ممارسة حقوقك في الوصول إلى بياناتك أو تصديرها أو حذفها.',
  },

  // Section 1 - Contacts
  'legal_long.privacy.s1.h2': { en: '1. Contacts', ar: '1. جهات الاتصال' },
  'legal_long.privacy.s1.h3_controller': { en: 'Data Controller', ar: 'المتحكّم في البيانات' },
  'legal_long.privacy.s1.p_controller_pre': {
    en: 'Upskill Energy Limited',
    ar: 'شركة Upskill Energy Limited',
  },
  'legal_long.privacy.s1.p_controller_mid': {
    en: ', trading as ',
    ar: '، التي تُمارس نشاطها التجاري باسم ',
  },
  'legal_long.privacy.s1.p_controller_brand': { en: 'The English Hub', ar: 'The English Hub' },
  'legal_long.privacy.s1.p_controller_post': {
    en: ', is the data controller responsible for the personal data processed through theenglishhub.app and its associated services. We are registered with the UK Information Commissioner’s Office (ICO) under registration number ZC016690.',
    ar: '، هي المتحكّم في البيانات المسؤول عن البيانات الشخصية المُعالَجة عبر theenglishhub.app والخدمات المرتبطة بها. ونحن مسجّلون لدى مكتب مفوّض المعلومات (ICO) في المملكة المتحدة بموجب رقم التسجيل ZC016690.',
  },
  'legal_long.privacy.s1.p_office_strong': { en: 'Registered office: ', ar: 'المقرّ المسجَّل: ' },
  'legal_long.privacy.s1.p_office_text': {
    en: 'in the United Kingdom; the full registered-office address is available to schools on request during procurement.',
    ar: 'في المملكة المتحدة، والعنوان الكامل للمقرّ المسجَّل متاح للمدارس عند الطلب أثناء عملية الشراء.',
  },
  'legal_long.privacy.s1.h3_dpo': {
    en: 'Data Protection Officer (DPO)',
    ar: 'مسؤول حماية البيانات (DPO)',
  },
  'legal_long.privacy.s1.dpo_name': { en: 'Calum Johnson', ar: 'Calum Johnson' },
  'legal_long.privacy.s1.h3_dsl': {
    en: 'Designated Safeguarding Lead (DSL)',
    ar: 'مسؤول الحماية المُعيَّن (DSL)',
  },
  'legal_long.privacy.s1.dsl_intro': {
    en: 'Because our users include children, we maintain a named Designated Safeguarding Lead responsible for child-protection matters arising from use of the platform.',
    ar: 'لمّا كان من بين مستخدمينا أطفال، فإننا نُعيّن مسؤول حماية مُسمّى يضطلع بالشؤون المتعلقة بحماية الأطفال الناشئة عن استخدام المنصة.',
  },
  'legal_long.privacy.s1.h3_complaint': {
    en: 'Complaints to the ICO',
    ar: 'تقديم شكاوى إلى مكتب مفوّض المعلومات (ICO)',
  },
  'legal_long.privacy.s1.complaint_pre': {
    en: 'If you are not satisfied with how we have handled your personal data, you have the right to lodge a complaint with the UK Information Commissioner’s Office at ',
    ar: 'إن لم تكن راضياً عن طريقة تعاملنا مع بياناتك الشخصية، يحقّ لك تقديم شكوى إلى مكتب مفوّض المعلومات في المملكة المتحدة عبر ',
  },
  'legal_long.privacy.s1.complaint_link': {
    en: 'ico.org.uk/make-a-complaint',
    ar: 'ico.org.uk/make-a-complaint',
  },
  'legal_long.privacy.s1.complaint_post': {
    en: ' or by calling 0303 123 1113. We would, however, appreciate the chance to address your concerns first — please contact our DPO above.',
    ar: ' أو بالاتصال على الرقم 0303 123 1113. غير أننا نُقدّر إتاحة الفرصة لنا أوّلاً لمعالجة مخاوفكم، ولذا يُرجى التواصل مع مسؤول حماية البيانات لدينا المذكور أعلاه.',
  },

  // Section 2 - What we collect
  'legal_long.privacy.s2.h2': {
    en: '2. What Personal Data We Collect',
    ar: '2. البيانات الشخصية التي نجمعها',
  },
  'legal_long.privacy.s2.p_intro': {
    en: 'We collect and process the following categories of personal data:',
    ar: 'نجمع ونُعالج فئات البيانات الشخصية التالية:',
  },
  'legal_long.privacy.s2.h3_account': { en: 'Account information', ar: 'بيانات الحساب' },
  'legal_long.privacy.s2.acc_li1': {
    en: 'Full name and email address',
    ar: 'الاسم الكامل والبريد الإلكتروني',
  },
  'legal_long.privacy.s2.acc_li2': {
    en: 'Password (stored as a salted hash; never in plain text)',
    ar: 'كلمة المرور (تُخزَّن بهيئة مُجزَّأة مع ملح تشفيري، ولا تُحفَظ نصّاً صريحاً البتّة)',
  },
  'legal_long.privacy.s2.acc_li3': {
    en: 'Date of birth or age confirmation (used to apply age-appropriate defaults)',
    ar: 'تاريخ الميلاد أو تأكيد العمر (يُستخدَم لتطبيق الإعدادات الافتراضية الملائمة للعمر)',
  },
  'legal_long.privacy.s2.acc_li4': {
    en: 'Account type (student, parent, teacher, school)',
    ar: 'نوع الحساب (طالب، وليّ أمر، معلّم، مدرسة)',
  },
  'legal_long.privacy.s2.h3_learning': { en: 'Learning data', ar: 'بيانات التعلّم' },
  'legal_long.privacy.s2.learn_li1': {
    en: 'Course progress, quiz and mock-exam results',
    ar: 'التقدّم في المقررات، ونتائج الاختبارات والامتحانات التجريبية',
  },
  'legal_long.privacy.s2.learn_li2': {
    en: 'Essay and written-response submissions',
    ar: 'المقالات والإجابات المكتوبة المُقدَّمة',
  },
  'legal_long.privacy.s2.learn_li3': {
    en: 'AI-generated feedback on your work',
    ar: 'التقييم المُولَّد بالذكاء الاصطناعي على عملك',
  },
  'legal_long.privacy.s2.learn_li4': {
    en: 'Time spent on learning activities',
    ar: 'الوقت المُمضى في أنشطة التعلّم',
  },
  'legal_long.privacy.s2.h3_billing': { en: 'Billing information', ar: 'بيانات الفوترة' },
  'legal_long.privacy.s2.bill_li1': {
    en: 'Payment card details (handled by Stripe; we do not store full card numbers)',
    ar: 'بيانات بطاقة الدفع (تُدار عبر Stripe، ولا نُخزّن أرقام البطاقات الكاملة)',
  },
  'legal_long.privacy.s2.bill_li2': {
    en: 'Billing address and transaction history',
    ar: 'عنوان الفوترة وسجلّ المعاملات',
  },
  'legal_long.privacy.s2.h3_tech': { en: 'Technical data', ar: 'البيانات التقنية' },
  'legal_long.privacy.s2.tech_li1': {
    en: 'IP address, device and browser information',
    ar: 'عنوان IP، وبيانات الجهاز والمتصفّح',
  },
  'legal_long.privacy.s2.tech_li2': {
    en: 'Pages visited and interaction patterns (only with analytics consent)',
    ar: 'الصفحات التي تمت زيارتها وأنماط التفاعل (فقط عند الموافقة على التحليلات)',
  },
  'legal_long.privacy.s2.tech_li3': {
    en: 'Error logs and performance data',
    ar: 'سجلّات الأخطاء وبيانات الأداء',
  },

  // Section 3 - Legal bases
  'legal_long.privacy.s3.h2': {
    en: '3. Legal Bases for Processing',
    ar: '3. الأسس القانونية للمعالجة',
  },
  'legal_long.privacy.s3.li1_strong': {
    en: 'Contract (Article 6(1)(b)): ',
    ar: 'العقد (المادة 6(1)(ب)): ',
  },
  'legal_long.privacy.s3.li1_text': {
    en: 'to deliver the learning platform you have signed up for, including account management, marking, and payments.',
    ar: 'لتقديم منصّة التعلّم التي اشتركتَ فيها، بما في ذلك إدارة الحساب، والتصحيح، والمدفوعات.',
  },
  'legal_long.privacy.s3.li2_strong': {
    en: 'Consent (Article 6(1)(a)): ',
    ar: 'الموافقة (المادة 6(1)(أ)): ',
  },
  'legal_long.privacy.s3.li2_text': {
    en: 'for optional marketing, non-essential cookies, and any AI training opt-ins. Consent can be withdrawn at any time.',
    ar: 'للتسويق الاختياري، والكوكيز غير الضرورية، وأي خيارات اشتراك في تدريب الذكاء الاصطناعي. ويمكن سحب الموافقة في أي وقت.',
  },
  'legal_long.privacy.s3.li3_strong': {
    en: 'Legitimate interests (Article 6(1)(f)): ',
    ar: 'المصالح المشروعة (المادة 6(1)(و)): ',
  },
  'legal_long.privacy.s3.li3_text': {
    en: 'for platform security, fraud prevention, and aggregate analytics, balanced against the rights of our users (especially children).',
    ar: 'لأمن المنصة، ومنع الاحتيال، والتحليلات المُجمَّعة، مع الموازنة بين هذه المصالح وحقوق مستخدمينا (لا سيما الأطفال).',
  },
  'legal_long.privacy.s3.li4_strong': {
    en: 'Legal obligation (Article 6(1)(c)): ',
    ar: 'الالتزام القانوني (المادة 6(1)(ج)): ',
  },
  'legal_long.privacy.s3.li4_text': {
    en: 'for tax, accounting, and safeguarding record-keeping required by UK law.',
    ar: 'لأغراض حفظ سجلّات الضرائب والمحاسبة والحماية كما يقتضيه القانون البريطاني.',
  },

  // Section 4 - Third-party processors
  'legal_long.privacy.s4.h2': {
    en: '4. Third-Party Data Processors',
    ar: '4. معالجو البيانات من أطراف ثالثة',
  },
  'legal_long.privacy.s4.p_intro': {
    en: 'We share your personal data with the following third-party processors, each of which is bound by a data processing agreement and processes your data only on our instructions:',
    ar: 'نُشارك بياناتك الشخصية مع المعالجين التابعين لأطراف ثالثة التالية، ويلتزم كلٌّ منهم باتفاقية معالجة بيانات، ويُعالج بياناتك وفق تعليماتنا حصراً:',
  },
  'legal_long.privacy.s4.stripe_h': { en: 'Stripe (Payments)', ar: 'Stripe (المدفوعات)' },
  'legal_long.privacy.s4.stripe_p': {
    en: 'Stripe, Inc. processes all payment transactions. Card details are sent directly to Stripe and never stored on our servers. Stripe is PCI DSS Level 1 certified. ',
    ar: 'تُعالج شركة Stripe, Inc. جميع معاملات الدفع. وتُرسَل بيانات البطاقة مباشرةً إلى Stripe ولا تُخزَّن على خوادمنا البتّة. وStripe حاصلة على شهادة PCI DSS من المستوى الأول. ',
  },
  'legal_long.privacy.s4.supabase_h': {
    en: 'Supabase (Authentication & Database)',
    ar: 'Supabase (المصادقة وقواعد البيانات)',
  },
  'legal_long.privacy.s4.supabase_p': {
    en: 'Supabase, Inc. provides our authentication system and database infrastructure. Your account information, learning progress, and essay submissions are stored in Supabase-hosted databases, encrypted at rest and in transit. ',
    ar: 'تُوفّر شركة Supabase, Inc. نظام المصادقة والبنية التحتية لقواعد البيانات لدينا. وتُخزَّن بيانات حسابك، وتقدّمك في التعلّم، ومقالاتك المُقدَّمة في قواعد بيانات مُستضافة لدى Supabase، وهي مُشفَّرة أثناء التخزين والنقل. ',
  },
  'legal_long.privacy.s4.anthropic_h': {
    en: 'Anthropic (AI Essay Feedback)',
    ar: 'Anthropic (التقييم المُولَّد بالذكاء الاصطناعي للمقالات)',
  },
  'legal_long.privacy.s4.anthropic_p': {
    en: 'Anthropic, PBC provides the Claude AI model used to generate feedback on student essay submissions. Our data processing agreement with Anthropic prohibits the use of your submissions to train their models. ',
    ar: 'تُوفّر شركة Anthropic, PBC نموذج Claude للذكاء الاصطناعي المُستخدَم لتوليد التقييم على مقالات الطلاب المُقدَّمة. وتحظر اتفاقية معالجة البيانات المُبرَمة مع Anthropic استخدام ما تُقدّمه لتدريب نماذجهم. ',
  },
  'legal_long.privacy.s4.vercel_h': { en: 'Vercel (Hosting)', ar: 'Vercel (الاستضافة)' },
  'legal_long.privacy.s4.vercel_p': {
    en: 'Vercel, Inc. hosts our website and application. Vercel processes technical data such as IP addresses and request logs as part of delivering the platform. ',
    ar: 'تستضيف شركة Vercel, Inc. موقعنا الإلكتروني وتطبيقنا. وتُعالج Vercel بياناتٍ تقنية كعناوين IP وسجلّات الطلبات في إطار تشغيل المنصة. ',
  },
  'legal_long.privacy.s4.sentry_h': { en: 'Sentry (Error Tracking)', ar: 'Sentry (تتبّع الأخطاء)' },
  'legal_long.privacy.s4.sentry_p': {
    en: 'Functional Software, Inc. (Sentry) provides error monitoring and performance tracking. Sentry receives technical context to help diagnose issues. ',
    ar: 'تُوفّر شركة Functional Software, Inc. (Sentry) خدمات رصد الأخطاء وتتبّع الأداء. وتتلقّى Sentry معلومات سياقية تقنية للمساعدة في تشخيص الأعطال. ',
  },
  'legal_long.privacy.s4.resend_h': {
    en: 'Resend (Email Delivery)',
    ar: 'Resend (تسليم البريد الإلكتروني)',
  },
  'legal_long.privacy.s4.resend_p': {
    en: 'Resend, Inc. provides transactional email delivery. Your email address and message content are processed by Resend when we send you account or product emails. ',
    ar: 'تُوفّر شركة Resend, Inc. خدمات تسليم البريد الإلكتروني للمعاملات. ويُعالج Resend عنوان بريدك الإلكتروني ومحتوى الرسالة عندما نُرسل إليك رسائل تتعلق بالحساب أو المنتج. ',
  },
  'legal_long.privacy.s4.azure_h': {
    en: 'Microsoft Azure (Backend Hosting)',
    ar: 'Microsoft Azure (استضافة الخلفية)',
  },
  'legal_long.privacy.s4.azure_p': {
    en: 'Microsoft Corporation provides cloud hosting for our backend API via Microsoft Azure (UK South region). Backend API traffic passes through this infrastructure. ',
    ar: 'تُوفّر شركة Microsoft Corporation الاستضافة السحابية لواجهة برمجة التطبيقات الخلفية لدينا عبر Microsoft Azure (إقليم UK South). وتمرّ حركة بيانات واجهة الخلفية عبر هذه البنية التحتية. ',
  },
  'legal_long.privacy.s4.vercel_an_h': {
    en: 'Vercel Analytics & Speed Insights (Usage Analytics)',
    ar: 'Vercel Analytics وSpeed Insights (تحليلات الاستخدام)',
  },
  'legal_long.privacy.s4.vercel_an_p': {
    en: 'Privacy-friendly usage analytics and Web Vitals timings, loaded only after you accept analytics cookies. No cross-site tracking cookies and no advertising profiles. ',
    ar: 'تحليلات استخدام محترِمة للخصوصية، وقياسات Web Vitals، تُحمَّل فقط بعد قبولك كوكيز التحليلات. ولا تُستخدَم كوكيز تتبّع عبر المواقع، ولا ملفّات إعلانية شخصية. ',
  },
  'legal_long.privacy.s4.ga_h': {
    en: 'Google Analytics 4 (Usage Analytics)',
    ar: 'Google Analytics 4 (تحليلات الاستخدام)',
  },
  'legal_long.privacy.s4.ga_p': {
    en: 'Loaded only after you accept analytics cookies. We configure GA4 with IP anonymisation enabled. ',
    ar: 'يُحمَّل فقط بعد قبولك كوكيز التحليلات. ونُهيّئ GA4 مع تفعيل إخفاء هوية عنوان IP. ',
  },
  'legal_long.privacy.s4.rew_h': {
    en: 'Rewardful (Affiliate Tracking)',
    ar: 'Rewardful (تتبّع الشراكات التسويقية)',
  },
  'legal_long.privacy.s4.rew_p': {
    en: 'Loaded only after you accept marketing cookies. Sets a first-party referral cookie so affiliates can be credited for sign-ups they refer. ',
    ar: 'يُحمَّل فقط بعد قبولك كوكيز التسويق. ويُعيّن كوكي إحالة من الطرف الأول لاحتساب التسجيلات للشركاء المُحيلين. ',
  },

  // Section 5 - Children
  'legal_long.privacy.s5.h2': { en: '5. Children’s Privacy', ar: '5. خصوصية الأطفال' },
  'legal_long.privacy.s5.p1': {
    en: 'The English Hub is designed for GCSE learners, many of whom are minors. We follow the UK Information Commissioner’s Age Appropriate Design Code (the “Children’s Code”) and treat the best interests of the child as a primary consideration in every product decision.',
    ar: 'صُمّمت منصة The English Hub لطلاب GCSE، وكثير منهم قاصرون. ونتّبع مدوّنة التصميم المُلائمة للأعمار الصادرة عن مكتب مفوّض المعلومات في المملكة المتحدة (المعروفة بـ "مدوّنة الأطفال")، ونُعطي الأولوية لمصلحة الطفل الفُضلى بوصفها اعتباراً رئيسياً في كل قرار يتعلق بالمنتج.',
  },
  'legal_long.privacy.s5.li1_strong': { en: 'Ages 13 and over ', ar: 'من بلغ 13 عاماً فأكثر ' },
  'legal_long.privacy.s5.li1_text': {
    en: 'may sign up for their own account and provide their own consent under UK GDPR.',
    ar: 'يحقّ له إنشاء حساب باسمه وإبداء موافقته الذاتية بموجب اللائحة العامة لحماية البيانات في المملكة المتحدة (UK GDPR).',
  },
  'legal_long.privacy.s5.li2_strong': { en: 'Ages under 13 ', ar: 'من تقلّ أعمارهم عن 13 عاماً ' },
  'legal_long.privacy.s5.li2_text': {
    en: 'may only use the platform via a parent-linked account. The parent or guardian creates and controls the account, gives consent on the child’s behalf, and can review or revoke access at any time.',
    ar: 'لا يُتاح لهم استخدام المنصة إلا عبر حساب مرتبط بوليّ الأمر. ويُنشئ أحد الوالدين أو الوليّ الحساب ويتحكّم فيه، ويُبدي الموافقة نيابةً عن الطفل، ويحقّ له مراجعة الوصول أو إلغاؤه في أي وقت.',
  },
  'legal_long.privacy.s5.li3_strong': {
    en: 'Off-by-default for minors: ',
    ar: 'تعطيل افتراضي للقاصرين: ',
  },
  'legal_long.privacy.s5.li3_text': {
    en: 'personalised recommendations beyond core study delivery, streaks and habit-pressure mechanics, and all marketing communications are off by default for any account flagged as belonging to a child. They can only be enabled by an explicit, informed action.',
    ar: 'تكون التوصيات المُخصَّصة خارج نطاق التعلّم الأساسي، وآليات سلاسل الاستمرارية وضغط العادات، وجميع الاتصالات التسويقية، مُعطَّلة افتراضياً لأي حساب مُحدَّد بأنه يخصّ طفلاً. ولا يمكن تفعيلها إلا بإجراء صريح ومستنير.',
  },
  'legal_long.privacy.s5.li4_strong': {
    en: 'No behavioural advertising and no commercial profiling ',
    ar: 'عدم استخدام الإعلانات السلوكية أو التصنيف التجاري ',
  },
  'legal_long.privacy.s5.li4_text': {
    en: 'of children, in line with the Children’s Code.',
    ar: 'للأطفال، تماشياً مع مدوّنة الأطفال.',
  },
  'legal_long.privacy.s5.li5_strong': {
    en: 'Plain-language transparency: ',
    ar: 'شفافية بلغة مبسّطة: ',
  },
  'legal_long.privacy.s5.li5_text': {
    en: 'child-facing accounts see a simplified, age-appropriate explanation of what data we hold, why, and how to delete it.',
    ar: 'تتيح الحسابات المُوجَّهة للأطفال شرحاً مبسّطاً مناسباً للعمر يُبيّن ما لدينا من بيانات، وسبب الاحتفاظ بها، وطريقة حذفها.',
  },
  'legal_long.privacy.s5.li6_strong': { en: 'Geolocation ', ar: 'تحديد الموقع الجغرافي ' },
  'legal_long.privacy.s5.li6_text': {
    en: 'is not collected for child accounts.',
    ar: 'لا يُجمَع لحسابات الأطفال.',
  },
  'legal_long.privacy.s5.h3_matrix': {
    en: 'Our Children’s Code commitments',
    ar: 'التزاماتنا بمدوّنة الأطفال',
  },
  'legal_long.privacy.s5.matrix.col1': {
    en: 'ICO Children’s Code standard',
    ar: 'معيار مدوّنة الأطفال لـ ICO',
  },
  'legal_long.privacy.s5.matrix.col2': {
    en: 'How The English Hub meets it',
    ar: 'كيف يفي به The English Hub',
  },
  'legal_long.privacy.s5.m.r1.c1': {
    en: '1. Best interests of the child',
    ar: '1. مصلحة الطفل الفُضلى',
  },
  'legal_long.privacy.s5.m.r1.c2': {
    en: 'All product decisions affecting under-18s are reviewed against the DPIA before release. Safeguarding lead has veto.',
    ar: 'تُراجَع جميع قرارات المنتج المؤثّرة في من تقلّ أعمارهم عن 18 عاماً مقابل تقييم أثر حماية البيانات (DPIA) قبل الإطلاق. ولمسؤول الحماية حقّ الاعتراض الحاسم.',
  },
  'legal_long.privacy.s5.m.r2.c1': {
    en: '2. Data protection impact assessments',
    ar: '2. تقييمات أثر حماية البيانات',
  },
  'legal_long.privacy.s5.m.r2.c2': {
    en: 'DPIA available on request from the DPO. Updated on every material feature change.',
    ar: 'يُتاح تقييم أثر حماية البيانات عند الطلب من مسؤول حماية البيانات. ويُحدَّث عند كل تغيير جوهري في الخصائص.',
  },
  'legal_long.privacy.s5.m.r3.c1': {
    en: '3. Age-appropriate application',
    ar: '3. التطبيق المُلائم للعمر',
  },
  'legal_long.privacy.s5.m.r3.c2': {
    en: 'Account flows branch by age at signup (13-15, 16-17, 18+). UI, copy, and defaults adapt per age cohort.',
    ar: 'تتفرّع مسارات الحسابات وفق العمر عند التسجيل (13-15، 16-17، 18 فأكثر). وتتكيّف الواجهة، والمحتوى، والإعدادات الافتراضية وفق الفئة العمرية.',
  },
  'legal_long.privacy.s5.m.r4.c1': { en: '4. Transparency', ar: '4. الشفافية' },
  'legal_long.privacy.s5.m.r4.c2': {
    en: 'Privacy policy, data-use summary, and Children’s Code matrix written in plain English. Tested with under-16 users for comprehension.',
    ar: 'صُيغت سياسة الخصوصية، وملخّص استخدام البيانات، ومصفوفة مدوّنة الأطفال بلغة إنجليزية مبسّطة، وجرى اختبارها على مستخدمين دون 16 عاماً للتأكد من قابلية الفهم.',
  },
  'legal_long.privacy.s5.m.r5.c1': {
    en: '5. Detrimental use of data',
    ar: '5. الاستخدام الضارّ للبيانات',
  },
  'legal_long.privacy.s5.m.r5.c2': {
    en: 'No advertising, no profiling for commercial purposes, no data sold to third parties. AI training opt-in is off by default for all minors.',
    ar: 'لا إعلانات، ولا تصنيف لأغراض تجارية، ولا بيع لأي بيانات لأطراف ثالثة. والاشتراك في تدريب الذكاء الاصطناعي مُعطَّل افتراضياً لجميع القاصرين.',
  },
  'legal_long.privacy.s5.m.r6.c1': {
    en: '6. Policies and community standards',
    ar: '6. السياسات ومعايير المجتمع',
  },
  'legal_long.privacy.s5.m.r6.c2': {
    en: 'Published safeguarding policy enforced. Users can flag harmful content; human review within 24h.',
    ar: 'تُطبَّق سياسة الحماية المنشورة. ويمكن للمستخدمين الإبلاغ عن أي محتوى ضارّ، وتجري المراجعة البشرية خلال 24 ساعة.',
  },
  'legal_long.privacy.s5.m.r7.c1': { en: '7. Default settings', ar: '7. الإعدادات الافتراضية' },
  'legal_long.privacy.s5.m.r7.c2': {
    en: 'All minor accounts default to: profile private, analytics off, marketing off, AI training opt-in off.',
    ar: 'تُهيَّأ جميع حسابات القاصرين افتراضياً بما يلي: الملف الشخصي خاص، والتحليلات مُعطَّلة، والتسويق مُعطَّل، والاشتراك في تدريب الذكاء الاصطناعي مُعطَّل.',
  },
  'legal_long.privacy.s5.m.r8.c1': {
    en: '8. Data minimisation',
    ar: '8. تقليل البيانات إلى الحدّ الأدنى',
  },
  'legal_long.privacy.s5.m.r8.c2': {
    en: 'We collect email, DOB, and essay submissions only. No address, no phone, no payment info from minors (parent pays).',
    ar: 'نجمع البريد الإلكتروني، وتاريخ الميلاد، والمقالات المُقدَّمة فقط. ولا نطلب من القاصرين عنواناً ولا هاتفاً ولا بيانات دفع (يتولّى وليّ الأمر الدفع).',
  },
  'legal_long.privacy.s5.m.r9.c1': { en: '9. Data sharing', ar: '9. مشاركة البيانات' },
  'legal_long.privacy.s5.m.r9.c2': {
    en: 'Sub-processors listed in section 4. No third-party ad networks. UK/EU hosting.',
    ar: 'يُدرَج المعالجون الفرعيون في القسم 4. ولا تُستخدَم شبكات إعلانية تابعة لأطراف ثالثة. والاستضافة في المملكة المتحدة أو الاتحاد الأوروبي.',
  },
  'legal_long.privacy.s5.m.r10.c1': { en: '10. Geolocation', ar: '10. تحديد الموقع الجغرافي' },
  'legal_long.privacy.s5.m.r10.c2': {
    en: 'Not collected for minors. No location-based features.',
    ar: 'لا يُجمَع للقاصرين. ولا توجد خصائص قائمة على الموقع.',
  },
  'legal_long.privacy.s5.m.r11.c1': { en: '11. Parental controls', ar: '11. ضوابط ولي الأمر' },
  'legal_long.privacy.s5.m.r11.c2': {
    en: 'Parent accounts can be linked to child accounts. Parent sees child’s essay history and weekly progress. Transparency flag shown to child when parent linkage is active.',
    ar: 'يمكن ربط حسابات أولياء الأمور بحسابات الأطفال. ويرى وليّ الأمر سجلّ مقالات الطفل وتقدّمه الأسبوعي. وتُعرَض علامة شفافية على الطفل عند تفعيل الربط بولي الأمر.',
  },
  'legal_long.privacy.s5.m.r12.c1': { en: '12. Profiling', ar: '12. التصنيف' },
  'legal_long.privacy.s5.m.r12.c2': {
    en: 'No behavioural profiling. AI marking is deterministic per essay — no cross-essay inference that affects feature access.',
    ar: 'لا تصنيف سلوكي. والتصحيح بالذكاء الاصطناعي حتميّ لكل مقال، ولا يُجرى استنتاج عبر المقالات يؤثّر في إتاحة الخصائص.',
  },
  'legal_long.privacy.s5.m.r13.c1': { en: '13. Nudge techniques', ar: '13. أساليب التحفيز' },
  'legal_long.privacy.s5.m.r13.c2': {
    en: 'No gamification patterns that exploit developmental vulnerabilities. No "streak" pressure; progress is informational, not coercive.',
    ar: 'لا تُستخدَم أنماط لعب تستغلّ نقاط الضعف التطوّرية. ولا يُمارَس ضغط "سلسلة الاستمرارية"، فالتقدّم معلوماتي لا قسري.',
  },
  'legal_long.privacy.s5.m.r14.c1': {
    en: '14. Connected toys and devices',
    ar: '14. الألعاب والأجهزة المتّصلة',
  },
  'legal_long.privacy.s5.m.r14.c2': {
    en: 'Not applicable — The English Hub is a web + mobile SaaS.',
    ar: 'غير منطبق — The English Hub خدمة برمجية عبر الويب والهاتف.',
  },
  'legal_long.privacy.s5.m.r15.c1': { en: '15. Online tools', ar: '15. الأدوات الإلكترونية' },
  'legal_long.privacy.s5.m.r15.c2': {
    en: 'Privacy tools (export, delete, correct) accessible from the account page. All actions complete in ≤30 days per UK GDPR.',
    ar: 'تتوفّر أدوات الخصوصية (التصدير، الحذف، التصحيح) في صفحة الحساب. وتكتمل جميع الإجراءات في غضون 30 يوماً أو أقل وفقاً للائحة UK GDPR.',
  },
  'legal_long.privacy.s5.matrix_outro_pre': { en: 'See our ', ar: 'يُرجى الاطّلاع على ' },
  'legal_long.privacy.s5.matrix_outro_link': { en: 'Safeguarding Policy', ar: 'سياسة الحماية' },
  'legal_long.privacy.s5.matrix_outro_post': {
    en: ' for the operational detail of how the Designated Safeguarding Lead handles concerns.',
    ar: ' للاطّلاع على التفاصيل التشغيلية لكيفية تعامل مسؤول الحماية المُعيَّن مع المخاوف.',
  },

  // Section 6 - Retention
  'legal_long.privacy.s6.h2': { en: '6. Data Retention', ar: '6. الاحتفاظ بالبيانات' },
  'legal_long.privacy.s6.li1_strong': { en: 'Account data: ', ar: 'بيانات الحساب: ' },
  'legal_long.privacy.s6.li1_text': {
    en: 'retained for the duration of your account. After account deletion, personal data is erased within 30 days, except where law requires longer.',
    ar: 'تُحفَظ طوال مدة وجود حسابك. وبعد حذف الحساب، تُمحى البيانات الشخصية في غضون 30 يوماً، ما لم يستلزم القانون مدة أطول.',
  },
  'legal_long.privacy.s6.li2_strong': {
    en: 'Learning submissions and AI feedback: ',
    ar: 'الإسهامات التعلّمية وتقييم الذكاء الاصطناعي: ',
  },
  'legal_long.privacy.s6.li2_text': {
    en: 'retained for the duration of your account so you can review past work; erased within 30 days of account deletion.',
    ar: 'تُحفَظ طوال مدة وجود حسابك لتمكينك من مراجعة أعمالك السابقة، وتُمحى في غضون 30 يوماً من حذف الحساب.',
  },
  'legal_long.privacy.s6.li3_strong': { en: 'Billing records: ', ar: 'سجلّات الفوترة: ' },
  'legal_long.privacy.s6.li3_text': {
    en: 'retained for 7 years to comply with UK tax law (HMRC).',
    ar: 'تُحفَظ لمدة 7 سنوات امتثالاً لقانون الضرائب البريطاني (HMRC).',
  },
  'legal_long.privacy.s6.li4_strong': {
    en: 'Technical and error logs: ',
    ar: 'السجلّات التقنية وسجلّات الأخطاء: ',
  },
  'legal_long.privacy.s6.li4_text': {
    en: 'retained up to 90 days, then automatically purged.',
    ar: 'تُحفَظ لمدة تصل إلى 90 يوماً، ثم تُحذَف تلقائياً.',
  },
  'legal_long.privacy.s6.li5_strong': {
    en: 'Marketing consent records: ',
    ar: 'سجلّات موافقات التسويق: ',
  },
  'legal_long.privacy.s6.li5_text': {
    en: 'retained for as long as the consent is active, plus 3 years after withdrawal to demonstrate compliance.',
    ar: 'تُحفَظ طوال مدة سريان الموافقة، إضافةً إلى 3 سنوات بعد سحبها لإثبات الامتثال.',
  },
  'legal_long.privacy.s6.li6_strong': {
    en: 'Dormant child accounts: ',
    ar: 'حسابات الأطفال الخاملة: ',
  },
  'legal_long.privacy.s6.li6_text': {
    en: 'any account flagged as belonging to a child that shows no sign-in or learning activity for 12 consecutive months is automatically purged. We send a reminder email to the linked parent before deletion where contact details are on file.',
    ar: 'يُحذَف تلقائياً أي حساب مُحدَّد بأنه يخصّ طفلاً ولا يُسجَّل عليه أي دخول أو نشاط تعلّمي لمدة 12 شهراً متتالياً. ونُرسل بريداً إلكترونياً للتذكير إلى وليّ الأمر المرتبط قبل الحذف متى توفّرت بيانات الاتصال.',
  },

  // Section 7 - Rights
  'legal_long.privacy.s7.h2': {
    en: '7. Your Rights and Subject Access Requests',
    ar: '7. حقوقكم وطلبات الوصول إلى البيانات',
  },
  'legal_long.privacy.s7.p_intro': {
    en: 'Under UK data protection law, you have the right to access, correct, port, restrict, object to processing of, or delete the personal data we hold about you, and to withdraw any consent you have given. The fastest way to exercise the most common rights is through your account:',
    ar: 'بموجب قانون حماية البيانات في المملكة المتحدة، يحقّ لكم الوصول إلى بياناتكم الشخصية التي نحتفظ بها، وتصحيحها، ونقلها، وتقييد معالجتها، والاعتراض عليها، وحذفها، وسحب أي موافقة سبق إعطاؤها. وأسرع طريقة لممارسة الحقوق الأكثر شيوعاً تكون عبر حسابكم:',
  },
  'legal_long.privacy.s7.li1_strong': { en: 'Export your data: ', ar: 'تصدير بياناتكم: ' },
  'legal_long.privacy.s7.li1_path': { en: '/account/data-export', ar: '/account/data-export' },
  'legal_long.privacy.s7.li1_post': {
    en: ' — download a structured, machine-readable copy (JSON/CSV) of your account, learning progress, and submissions.',
    ar: ' — تنزيل نسخة مُهيكَلة قابلة للقراءة آلياً (JSON/CSV) من حسابكم وتقدّمكم التعلّمي وإسهاماتكم.',
  },
  'legal_long.privacy.s7.li2_strong': { en: 'Delete your account: ', ar: 'حذف حسابكم: ' },
  'legal_long.privacy.s7.li2_path': { en: '/account/delete', ar: '/account/delete' },
  'legal_long.privacy.s7.li2_post': {
    en: ' — permanently remove your account and associated learning data, subject to legal retention obligations.',
    ar: ' — إزالة حسابكم والبيانات التعلّمية المرتبطة به نهائياً، رهناً بالتزامات الاحتفاظ القانونية.',
  },
  'legal_long.privacy.s7.li3_strong': { en: 'Correct your data: ', ar: 'تصحيح بياناتكم: ' },
  'legal_long.privacy.s7.li3_text': {
    en: 'most account information can be updated directly through your account settings.',
    ar: 'يمكن تحديث معظم بيانات الحساب مباشرةً عبر إعدادات الحساب.',
  },
  'legal_long.privacy.s7.li4_strong': {
    en: 'Manual requests (access, restriction, objection, consent withdrawal): ',
    ar: 'الطلبات اليدوية (الوصول، التقييد، الاعتراض، سحب الموافقة): ',
  },
  'legal_long.privacy.s7.li4_pre': {
    en: 'if you cannot use the in-product tools, email ',
    ar: 'في حال تعذّر استخدام أدوات المنتج الداخلية، يُرجى مراسلة ',
  },
  'legal_long.privacy.s7.li4_post': {
    en: '. We will respond within one calendar month, extendable by a further two months for complex requests — we will let you know within the first month if an extension applies.',
    ar: '. وسنردّ في غضون شهر تقويمي واحد، قابل للتمديد شهرين إضافيين للطلبات المعقّدة، وسنُخطركم خلال الشهر الأول في حال انطباق التمديد.',
  },
  'legal_long.privacy.s7.li5_strong': { en: 'For child accounts: ', ar: 'لحسابات الأطفال: ' },
  'legal_long.privacy.s7.li5_text': {
    en: 'the linked parent or guardian may exercise these rights on the child’s behalf using the same routes.',
    ar: 'يحقّ لوليّ الأمر أو الوصيّ المرتبط بالحساب ممارسة هذه الحقوق نيابةً عن الطفل عبر المسارات نفسها.',
  },
  'legal_long.privacy.s7.p_outro': {
    en: 'If you are unsatisfied with our response, you have the right to lodge a complaint with the ICO (see Section 1).',
    ar: 'إن لم تكونوا راضين عن ردّنا، يحقّ لكم تقديم شكوى إلى مكتب مفوّض المعلومات (ICO) (يُراجَع القسم 1).',
  },

  // Section 8 - Cookies
  'legal_long.privacy.s8.h2': { en: '8. Cookies', ar: '8. ملفّات تعريف الارتباط (Cookies)' },
  'legal_long.privacy.s8.p_intro': {
    en: 'We use cookies and similar technologies to operate the platform. Our use of cookies falls into the following categories:',
    ar: 'نستخدم ملفّات تعريف الارتباط وتقنيات مشابهة لتشغيل المنصة. وتندرج استخداماتنا للكوكيز ضمن الفئات التالية:',
  },
  'legal_long.privacy.s8.li1_strong': {
    en: 'Strictly necessary cookies: ',
    ar: 'كوكيز ضرورية تماماً: ',
  },
  'legal_long.privacy.s8.li1_text': {
    en: 'required for the platform to function, including authentication session cookies and security tokens. These do not require consent.',
    ar: 'لازمة لتشغيل المنصة، وتشمل كوكيز جلسة المصادقة ورموز الأمان. ولا تستلزم الحصول على موافقة.',
  },
  'legal_long.privacy.s8.li2_strong': { en: 'Functional cookies: ', ar: 'كوكيز وظيفية: ' },
  'legal_long.privacy.s8.li2_text': {
    en: 'remember your preferences such as theme settings and display options.',
    ar: 'تحفظ تفضيلاتكم كإعدادات السمة وخيارات العرض.',
  },
  'legal_long.privacy.s8.li3_strong': { en: 'Analytics cookies: ', ar: 'كوكيز التحليلات: ' },
  'legal_long.privacy.s8.li3_text': {
    en: 'help us understand how users interact with the platform so we can improve it. Set only with your consent.',
    ar: 'تُعيننا على فهم تفاعل المستخدمين مع المنصة بهدف تحسينها. ولا تُفعَّل إلا بموافقتكم.',
  },
  'legal_long.privacy.s8.li4_strong': { en: 'Marketing cookies: ', ar: 'كوكيز التسويق: ' },
  'legal_long.privacy.s8.li4_text': {
    en: 'used by Rewardful for affiliate attribution. Set only with your consent.',
    ar: 'تستخدمها Rewardful لاحتساب الشراكات التسويقية. ولا تُفعَّل إلا بموافقتكم.',
  },
  'legal_long.privacy.s8.p_outro': {
    en: 'We do not use behavioural advertising cookies. You can manage your cookie preferences at any time through the cookie settings on our website.',
    ar: 'لا نستخدم كوكيز الإعلانات السلوكية. ويمكنكم إدارة تفضيلات الكوكيز في أي وقت عبر إعدادات الكوكيز في موقعنا.',
  },

  // Section 9 - International transfers
  'legal_long.privacy.s9.h2': {
    en: '9. International Data Transfers',
    ar: '9. النقل الدولي للبيانات',
  },
  'legal_long.privacy.s9.p_intro': {
    en: 'Some of our third-party processors are based in the United States. When personal data is transferred outside the UK, we ensure appropriate safeguards are in place to protect it, in compliance with UK GDPR:',
    ar: 'يقع بعض معالجي البيانات لدينا من أطراف ثالثة في الولايات المتحدة. وعند نقل البيانات الشخصية خارج المملكة المتحدة، نضمن وجود ضمانات مناسبة لحمايتها امتثالاً للائحة UK GDPR:',
  },
  'legal_long.privacy.s9.li1_strong': {
    en: 'UK International Data Transfer Agreement (IDTA): ',
    ar: 'اتفاقية النقل الدولي للبيانات في المملكة المتحدة (IDTA): ',
  },
  'legal_long.privacy.s9.li1_text': {
    en: 'we enter into the UK IDTA or the UK Addendum to the EU Standard Contractual Clauses with each US-based processor, as approved by the ICO.',
    ar: 'نُبرم اتفاقية IDTA البريطانية أو الملحق البريطاني للشروط التعاقدية القياسية الأوروبية (SCCs) مع كل معالج بيانات يقع مقرّه في الولايات المتحدة، وفقاً لما اعتمده مكتب مفوّض المعلومات (ICO).',
  },
  'legal_long.privacy.s9.li2_strong': { en: 'Supplementary measures: ', ar: 'تدابير تكميلية: ' },
  'legal_long.privacy.s9.li2_text': {
    en: 'we implement additional technical and organisational safeguards, such as encryption in transit and at rest.',
    ar: 'نُطبّق ضمانات تقنية وتنظيمية إضافية، كالتشفير أثناء النقل والتخزين.',
  },
  'legal_long.privacy.s9.li3_strong': { en: 'Adequacy decisions: ', ar: 'قرارات الكفاية: ' },
  'legal_long.privacy.s9.li3_text': {
    en: 'where the UK government has made an adequacy decision for a country, we may rely on that decision as the basis for transfer.',
    ar: 'حيثما اتّخذت حكومة المملكة المتحدة قرار كفاية لدولة ما، يجوز لنا الاعتماد على ذلك القرار أساساً للنقل.',
  },
  'legal_long.privacy.s9.p_outro': {
    en: 'The following processors transfer data outside the UK: Stripe, Supabase, Anthropic, Vercel, Sentry, Resend, Google (GA4), and Rewardful. Each has appropriate transfer mechanisms in place as described above.',
    ar: 'يقوم المعالجون التاليون بنقل البيانات خارج المملكة المتحدة: Stripe، وSupabase، وAnthropic، وVercel، وSentry، وResend، وGoogle (GA4)، وRewardful. ولكلّ منهم آليات نقل مناسبة على النحو المُبيَّن أعلاه.',
  },

  // Section 10 - Security
  'legal_long.privacy.s10.h2': { en: '10. Data Security', ar: '10. أمن البيانات' },
  'legal_long.privacy.s10.p_intro': {
    en: 'We apply appropriate technical and organisational measures to protect personal data, including:',
    ar: 'نُطبّق تدابير تقنية وتنظيمية مناسبة لحماية البيانات الشخصية، تشمل:',
  },
  'legal_long.privacy.s10.li1': {
    en: 'TLS 1.2+ encryption in transit and AES-256 encryption at rest',
    ar: 'تشفير TLS بإصدار 1.2 أو أعلى أثناء النقل، وتشفير AES-256 أثناء التخزين',
  },
  'legal_long.privacy.s10.li2': {
    en: 'Role-based access controls and least-privilege staff access',
    ar: 'ضوابط الوصول وفق الأدوار، ومنح أقلّ الصلاحيات اللازمة للموظفين',
  },
  'legal_long.privacy.s10.li3': {
    en: 'Salted password hashing using industry-standard algorithms',
    ar: 'تجزئة كلمات المرور مع ملح تشفيري باستخدام خوارزميات معيارية في الصناعة',
  },
  'legal_long.privacy.s10.li4': {
    en: 'Automated error monitoring and dependency patching',
    ar: 'رصد آلي للأخطاء، وترقيع آلي للتبعيات البرمجية',
  },
  'legal_long.privacy.s10.li5': {
    en: 'Regular review of sub-processors and data flows',
    ar: 'مراجعة دورية للمعالجين الفرعيين وتدفّقات البيانات',
  },
  'legal_long.privacy.s10.p_outro_pre': {
    en: 'To report a security concern, please email ',
    ar: 'للإبلاغ عن أي مخاوف أمنية، يُرجى مراسلة ',
  },

  // Section 11 - Changes
  'legal_long.privacy.s11.h2': {
    en: '11. Changes to This Policy',
    ar: '11. التعديلات على هذه السياسة',
  },
  'legal_long.privacy.s11.p': {
    en: 'We may update this policy to reflect changes in our practices or the law. Material changes will be notified by email or by a prominent in-product notice. For users under 16, we will notify both the student and the linked parent or guardian.',
    ar: 'قد نُحدّث هذه السياسة لتعكس تغييرات في ممارساتنا أو في القانون. وسيُخطَر بالتغييرات الجوهرية عبر البريد الإلكتروني أو عبر إشعار بارز داخل المنتج. وبالنسبة للمستخدمين الذين تقلّ أعمارهم عن 16 عاماً، نُخطر كلاًّ من الطالب ووليّ الأمر أو الوصيّ المرتبط بالحساب.',
  },
  'legal_long.privacy.copyright': {
    en: '© 2026 Upskill Energy Limited, trading as The English Hub. All rights reserved.',
    ar: '© 2026 شركة Upskill Energy Limited، التي تُمارس نشاطها التجاري باسم The English Hub. جميع الحقوق محفوظة.',
  },

  // ────────────────────────────────────────────────────────────────
  // /data-processing — body
  // ────────────────────────────────────────────────────────────────
  'legal_long.data_processing.s1.h2': { en: '1. Introduction', ar: '1. مقدّمة' },
  'legal_long.data_processing.s1.p1': {
    en: 'This page provides information for schools, multi-academy trusts, and other educational institutions ("Schools") about how The English Hub processes personal data when providing its GCSE English revision and learning platform services. It is intended to support Schools in meeting their accountability obligations under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.',
    ar: 'تُقدّم هذه الصفحة معلومات للمدارس، والتكتّلات الأكاديمية متعدّدة المدارس، وسائر المؤسسات التعليمية ("المدارس") بشأن كيفية معالجة The English Hub للبيانات الشخصية عند تقديم خدماتها لمنصة مراجعة وتعلّم اللغة الإنجليزية لمرحلة GCSE. والغرض منها إعانة المدارس على الوفاء بالتزامات المساءلة بموجب اللائحة العامة لحماية البيانات في المملكة المتحدة (UK GDPR) وقانون حماية البيانات لعام 2018.',
  },
  'legal_long.data_processing.s1.p2_pre': {
    en: 'Where a School subscribes to The English Hub for use by its students and staff, the School acts as the ',
    ar: 'حين تشترك المدرسة في The English Hub لاستخدام طلابها وكادرها، تتصرّف المدرسة بوصفها ',
  },
  'legal_long.data_processing.s1.p2_controller': {
    en: 'data controller',
    ar: 'المتحكّم في البيانات',
  },
  'legal_long.data_processing.s1.p2_mid1': {
    en: ' and The English Hub acts as the ',
    ar: '، ويتصرّف The English Hub بوصفه ',
  },
  'legal_long.data_processing.s1.p2_processor': { en: 'data processor', ar: 'معالج البيانات' },
  'legal_long.data_processing.s1.p2_post': {
    en: ', processing personal data on behalf of and under the instructions of the School. This relationship is governed by a Data Processing Agreement (DPA) that can be executed between the School and The English Hub.',
    ar: 'الذي يُعالج البيانات الشخصية نيابةً عن المدرسة ووفق تعليماتها. وتحكم هذه العلاقة اتفاقية معالجة بيانات (DPA) يمكن إبرامها بين المدرسة وThe English Hub.',
  },
  // Section 2
  'legal_long.data_processing.s2.h2': {
    en: '2. Data Controller and Data Processor Relationship',
    ar: '2. العلاقة بين المتحكّم في البيانات ومعالج البيانات',
  },
  'legal_long.data_processing.s2.p1_pre': {
    en: 'Under UK GDPR, the ',
    ar: 'بموجب اللائحة UK GDPR، يُحدّد ',
  },
  'legal_long.data_processing.s2.p1_strong': { en: 'data controller', ar: 'المتحكّم في البيانات' },
  'legal_long.data_processing.s2.p1_post': {
    en: ' determines the purposes and means of processing personal data. When a School procures The English Hub for its students, the School is the data controller because it decides why and how student data is processed through the platform.',
    ar: ' أغراض ووسائل معالجة البيانات الشخصية. وعند تعاقد المدرسة مع The English Hub لطلابها، تكون المدرسة هي المتحكّم في البيانات لأنها تُقرّر لماذا وكيف تُعالَج بيانات الطلاب عبر المنصة.',
  },
  'legal_long.data_processing.s2.p2_pre': {
    en: 'The English Hub acts as the ',
    ar: 'ويتصرّف The English Hub بوصفه ',
  },
  'legal_long.data_processing.s2.p2_strong': { en: 'data processor', ar: 'معالج البيانات' },
  'legal_long.data_processing.s2.p2_post': {
    en: ', processing personal data solely for the purpose of delivering the educational platform services as instructed by the School. We do not use School-provided personal data for our own purposes, such as marketing or profiling, beyond what is necessary to operate the platform.',
    ar: '، الذي يُعالج البيانات الشخصية لغرض تقديم خدمات المنصة التعليمية حصراً وفق تعليمات المدرسة. ولا نستخدم البيانات الشخصية التي تُقدّمها المدرسة لأغراضنا الخاصة كالتسويق أو التصنيف خارج نطاق ما هو ضروري لتشغيل المنصة.',
  },
  'legal_long.data_processing.s2.p3': {
    en: 'As data controller, the School retains responsibility for ensuring that an appropriate lawful basis exists for processing (typically the legitimate interest of providing education, or where applicable, consent), that students and parents/guardians are informed via the School’s own privacy notice, and that data subject rights requests are handled in accordance with UK GDPR.',
    ar: 'وبصفتها المتحكّم في البيانات، تحتفظ المدرسة بمسؤولية ضمان وجود أساس قانوني مناسب للمعالجة (عادةً ما يكون المصلحة المشروعة في تقديم التعليم، أو الموافقة حيث ينطبق ذلك)، وضمان إبلاغ الطلاب وأولياء الأمور/الأوصياء عبر إشعار الخصوصية الخاص بالمدرسة، ومعالجة طلبات أصحاب البيانات وفقاً للائحة UK GDPR.',
  },
  // Section 3
  'legal_long.data_processing.s3.h2': {
    en: '3. Categories of Personal Data Processed',
    ar: '3. فئات البيانات الشخصية المُعالَجة',
  },
  'legal_long.data_processing.s3.p1': {
    en: 'When a School uses The English Hub, the following categories of personal data may be processed:',
    ar: 'عند استخدام المدرسة لـ The English Hub، قد تُعالَج فئات البيانات الشخصية التالية:',
  },
  'legal_long.data_processing.s3.h3_student': { en: 'Student Data', ar: 'بيانات الطالب' },
  'legal_long.data_processing.s3.st_li1': {
    en: 'Full name and display name',
    ar: 'الاسم الكامل واسم العرض',
  },
  'legal_long.data_processing.s3.st_li2': {
    en: 'Email address (school-issued or personal, as provided by the School)',
    ar: 'البريد الإلكتروني (الصادر عن المدرسة أو الشخصي، وفقاً لما تُقدّمه المدرسة)',
  },
  'legal_long.data_processing.s3.st_li3': {
    en: 'Learning progress and performance data (quiz scores, lesson completion, revision streaks)',
    ar: 'بيانات التقدّم التعلّمي والأداء (درجات الاختبارات، وإنجاز الدروس، وسلاسل المراجعة)',
  },
  'legal_long.data_processing.s3.st_li4': {
    en: 'Essay and written response submissions',
    ar: 'المقالات والإجابات الكتابية المُقدَّمة',
  },
  'legal_long.data_processing.s3.st_li5': {
    en: 'AI-generated feedback on submitted work',
    ar: 'التقييم المُولَّد بالذكاء الاصطناعي على الأعمال المُقدَّمة',
  },
  'legal_long.data_processing.s3.st_li6': {
    en: 'Course enrolment and subject selections',
    ar: 'التسجيل في المقررات واختيار المواد',
  },
  'legal_long.data_processing.s3.st_li7': {
    en: 'Session and login activity (timestamps, device type, browser)',
    ar: 'نشاط الجلسة والدخول (الطوابع الزمنية، ونوع الجهاز، والمتصفّح)',
  },
  'legal_long.data_processing.s3.h3_teacher': {
    en: 'Teacher and Staff Data',
    ar: 'بيانات المعلّمين والكادر',
  },
  'legal_long.data_processing.s3.tc_li1': {
    en: 'Full name and email address',
    ar: 'الاسم الكامل والبريد الإلكتروني',
  },
  'legal_long.data_processing.s3.tc_li2': {
    en: 'Role and administrative permissions within the School’s account',
    ar: 'الدور والصلاحيات الإدارية ضمن حساب المدرسة',
  },
  'legal_long.data_processing.s3.tc_li3': { en: 'Account activity logs', ar: 'سجلّات نشاط الحساب' },
  'legal_long.data_processing.s3.p_outro': {
    en: 'We do not knowingly process special category data (e.g. health data, ethnicity, or religious beliefs). If any such data is inadvertently included in essay submissions, it is not extracted, categorised, or used for any purpose beyond generating feedback on the written work.',
    ar: 'لا نُعالج عمداً بياناتٍ من الفئات الخاصة (كبيانات الصحة، أو العرق، أو المعتقدات الدينية). وإن تضمّنت مقالات مُقدَّمة بياناتٍ من هذا القبيل عَرَضاً، فلا تُستخلَص ولا تُصنَّف ولا تُستخدَم لأي غرض خارج نطاق توليد التقييم على العمل الكتابي.',
  },
  // Section 4
  'legal_long.data_processing.s4.h2': { en: '4. Purpose of Processing', ar: '4. غرض المعالجة' },
  'legal_long.data_processing.s4.p1': {
    en: 'Personal data is processed solely to provide the educational platform services agreed between the School and The English Hub. This includes:',
    ar: 'تُعالَج البيانات الشخصية حصراً لتقديم خدمات المنصة التعليمية المتفق عليها بين المدرسة وThe English Hub. ويشمل ذلك:',
  },
  'legal_long.data_processing.s4.li1': {
    en: 'Authenticating students and staff and managing account access',
    ar: 'مصادقة الطلاب والكادر، وإدارة الوصول إلى الحسابات',
  },
  'legal_long.data_processing.s4.li2': {
    en: 'Delivering GCSE English revision content, quizzes, and mock exams',
    ar: 'تقديم محتوى مراجعة GCSE في اللغة الإنجليزية، والاختبارات، والامتحانات التجريبية',
  },
  'legal_long.data_processing.s4.li3': {
    en: 'Providing AI-powered essay marking and feedback using large language models',
    ar: 'تقديم تصحيح المقالات والتقييم المُولَّد بالذكاء الاصطناعي باستخدام نماذج اللغة الكبيرة',
  },
  'legal_long.data_processing.s4.li4': {
    en: 'Tracking learning progress to enable students and teachers to monitor performance',
    ar: 'تتبّع التقدّم التعلّمي لتمكين الطلاب والمعلّمين من رصد الأداء',
  },
  'legal_long.data_processing.s4.li5': {
    en: 'Generating reports and analytics for the School’s own educational use',
    ar: 'توليد التقارير والتحليلات للاستخدام التعليمي الخاص بالمدرسة',
  },
  'legal_long.data_processing.s4.li6': {
    en: 'Providing technical support and resolving platform issues',
    ar: 'تقديم الدعم الفني ومعالجة مشكلات المنصة',
  },
  'legal_long.data_processing.s4.li7': {
    en: 'Processing payments for School subscriptions (billing data is handled by Stripe and is not stored on our servers)',
    ar: 'معالجة المدفوعات لاشتراكات المدارس (تُدار بيانات الفوترة عبر Stripe ولا تُخزَّن على خوادمنا)',
  },
  // Section 5
  'legal_long.data_processing.s5.h2': {
    en: '5. Technical and Organisational Security Measures',
    ar: '5. التدابير الأمنية التقنية والتنظيمية',
  },
  'legal_long.data_processing.s5.p1': {
    en: 'The English Hub implements appropriate technical and organisational measures to protect personal data against unauthorised access, loss, destruction, or alteration, in accordance with Article 32 of the UK GDPR. These measures include:',
    ar: 'يُطبّق The English Hub تدابير تقنية وتنظيمية مناسبة لحماية البيانات الشخصية من الوصول غير المُصرَّح به، أو الفقد، أو التلف، أو التعديل، وفقاً للمادة 32 من لائحة UK GDPR. وتشمل هذه التدابير:',
  },
  'legal_long.data_processing.s5.h3_enc': { en: 'Encryption', ar: 'التشفير' },
  'legal_long.data_processing.s5.enc_li1': {
    en: 'All data in transit is encrypted using TLS 1.2 or higher (HTTPS enforced across all endpoints)',
    ar: 'تُشفَّر جميع البيانات أثناء النقل باستخدام TLS بإصدار 1.2 أو أعلى (مع فرض HTTPS على جميع نقاط النهاية)',
  },
  'legal_long.data_processing.s5.enc_li2': {
    en: 'Data at rest is encrypted using AES-256 encryption via our database provider (Supabase/PostgreSQL)',
    ar: 'تُشفَّر البيانات أثناء التخزين باستخدام AES-256 عبر مزوّد قاعدة البيانات لدينا (Supabase/PostgreSQL)',
  },
  'legal_long.data_processing.s5.enc_li3': {
    en: 'Passwords are hashed using bcrypt and are never stored in plain text',
    ar: 'تُجزَّأ كلمات المرور باستخدام bcrypt ولا تُخزَّن نصّاً صريحاً البتّة',
  },
  'legal_long.data_processing.s5.h3_acc': {
    en: 'Access Control and Authentication',
    ar: 'التحكّم في الوصول والمصادقة',
  },
  'legal_long.data_processing.s5.acc_li1': {
    en: 'Row Level Security (RLS) policies are enforced at the database level via Supabase, ensuring that users can only access data they are authorised to view',
    ar: 'تُفرَض سياسات الأمان على مستوى الصف (RLS) في قاعدة البيانات عبر Supabase، لضمان عدم وصول المستخدمين إلا إلى البيانات المُصرَّح لهم بالاطّلاع عليها',
  },
  'legal_long.data_processing.s5.acc_li2': {
    en: 'Authentication is managed through Supabase Auth with support for email/password and OAuth providers',
    ar: 'تُدار المصادقة عبر Supabase Auth مع دعم آليات البريد الإلكتروني/كلمة المرور ومزوّدي OAuth',
  },
  'legal_long.data_processing.s5.acc_li3': {
    en: 'Role-based access control separates student, teacher, and administrator permissions',
    ar: 'يفصل التحكّم في الوصول وفق الأدوار بين صلاحيات الطالب والمعلّم والإداري',
  },
  'legal_long.data_processing.s5.acc_li4': {
    en: 'API endpoints are protected with authenticated session tokens and server-side validation',
    ar: 'تُحمى نقاط نهاية واجهة برمجة التطبيقات (API) برموز جلسة مُصادَق عليها وتحقّق من جهة الخادم',
  },
  'legal_long.data_processing.s5.h3_inf': {
    en: 'Infrastructure and Monitoring',
    ar: 'البنية التحتية والرصد',
  },
  'legal_long.data_processing.s5.inf_li1': {
    en: 'The platform is hosted on Vercel’s edge network with automatic DDoS protection and global CDN',
    ar: 'تُستضاف المنصة على شبكة Vercel الطرفية مع حماية تلقائية من هجمات حجب الخدمة الموزَّعة (DDoS) وشبكة توصيل محتوى عالمية (CDN)',
  },
  'legal_long.data_processing.s5.inf_li2': {
    en: 'Error monitoring and alerting is provided by Sentry, enabling rapid identification and resolution of issues',
    ar: 'يُوفّر Sentry رصد الأخطاء والتنبيهات بما يُتيح التشخيص السريع للمشكلات وحلّها',
  },
  'legal_long.data_processing.s5.inf_li3': {
    en: 'Regular dependency updates and vulnerability scanning are performed as part of our development process',
    ar: 'تُجرى تحديثات دورية للتبعيات البرمجية وفحص للثغرات بوصفها جزءاً من عملية التطوير لدينا',
  },
  'legal_long.data_processing.s5.inf_li4': {
    en: 'Access to production systems is restricted to authorised personnel only',
    ar: 'يقتصر الوصول إلى أنظمة الإنتاج على الموظفين المُصرَّح لهم حصراً',
  },
  'legal_long.data_processing.s5.h3_org': {
    en: 'Organisational Measures',
    ar: 'التدابير التنظيمية',
  },
  'legal_long.data_processing.s5.org_li1': {
    en: 'Staff with access to personal data are trained on data protection responsibilities',
    ar: 'يخضع الموظفون ممن لديهم وصول إلى البيانات الشخصية للتدريب على مسؤوليات حماية البيانات',
  },
  'legal_long.data_processing.s5.org_li2': {
    en: 'We maintain internal data processing records in accordance with Article 30 of the UK GDPR',
    ar: 'نحتفظ بسجلّات داخلية لمعالجة البيانات وفقاً للمادة 30 من لائحة UK GDPR',
  },
  'legal_long.data_processing.s5.org_li3': {
    en: 'Incident response procedures are in place for identifying, reporting, and managing data breaches',
    ar: 'تتوفّر إجراءات للاستجابة للحوادث لرصد خروقات البيانات والإبلاغ عنها وإدارتها',
  },
  // Section 6
  'legal_long.data_processing.s6.h2': { en: '6. Sub-Processors', ar: '6. المعالجون الفرعيون' },
  'legal_long.data_processing.s6.p1': {
    en: 'The English Hub engages the following third-party sub-processors to deliver its services. Each sub-processor has been assessed for adequate data protection standards. Schools will be notified of any material changes to this list.',
    ar: 'يستعين The English Hub بالمعالجين الفرعيين التابعين لأطراف ثالثة التالية لتقديم خدماته. وقد جرى تقييم كلّ معالج فرعي للتحقّق من استيفائه لمعايير حماية البيانات الكافية. وستُخطَر المدارس بأي تغييرات جوهرية على هذه القائمة.',
  },
  'legal_long.data_processing.s6.t.col1': { en: 'Sub-Processor', ar: 'المعالج الفرعي' },
  'legal_long.data_processing.s6.t.col2': { en: 'Purpose', ar: 'الغرض' },
  'legal_long.data_processing.s6.t.col3': { en: 'Data Location', ar: 'موقع البيانات' },
  'legal_long.data_processing.s6.r1.c1': { en: 'Supabase', ar: 'Supabase' },
  'legal_long.data_processing.s6.r1.c2': {
    en: 'Database hosting, authentication, and file storage',
    ar: 'استضافة قاعدة البيانات، والمصادقة، وتخزين الملفات',
  },
  'legal_long.data_processing.s6.r1.c3': {
    en: 'EU (Frankfurt, Germany)',
    ar: 'الاتحاد الأوروبي (فرانكفورت، ألمانيا)',
  },
  'legal_long.data_processing.s6.r2.c1': { en: 'Stripe', ar: 'Stripe' },
  'legal_long.data_processing.s6.r2.c2': {
    en: 'Payment processing for School subscriptions',
    ar: 'معالجة المدفوعات لاشتراكات المدارس',
  },
  'legal_long.data_processing.s6.r2.c3': { en: 'EU/US', ar: 'الاتحاد الأوروبي/الولايات المتحدة' },
  'legal_long.data_processing.s6.r3.c1': {
    en: 'Anthropic (Claude AI)',
    ar: 'Anthropic (Claude AI)',
  },
  'legal_long.data_processing.s6.r3.c2': {
    en: 'AI-powered essay marking and feedback generation',
    ar: 'تصحيح المقالات وتوليد التقييم عبر الذكاء الاصطناعي',
  },
  'legal_long.data_processing.s6.r3.c3': { en: 'US', ar: 'الولايات المتحدة' },
  'legal_long.data_processing.s6.r4.c1': { en: 'Vercel', ar: 'Vercel' },
  'legal_long.data_processing.s6.r4.c2': {
    en: 'Application hosting, edge functions, and CDN',
    ar: 'استضافة التطبيق، ووظائف الشبكة الطرفية، وشبكة توصيل المحتوى',
  },
  'legal_long.data_processing.s6.r4.c3': {
    en: 'Global (edge network)',
    ar: 'عالمياً (شبكة طرفية)',
  },
  'legal_long.data_processing.s6.r5.c1': { en: 'Sentry', ar: 'Sentry' },
  'legal_long.data_processing.s6.r5.c2': {
    en: 'Error monitoring and performance tracking',
    ar: 'رصد الأخطاء وتتبّع الأداء',
  },
  'legal_long.data_processing.s6.r5.c3': { en: 'US', ar: 'الولايات المتحدة' },
  'legal_long.data_processing.s6.r6.c1': { en: 'Resend', ar: 'Resend' },
  'legal_long.data_processing.s6.r6.c2': {
    en: 'Transactional email delivery (contact form confirmations, trial notifications)',
    ar: 'تسليم البريد الإلكتروني للمعاملات (تأكيدات استمارة التواصل، وإشعارات التجربة)',
  },
  'legal_long.data_processing.s6.r6.c3': { en: 'US', ar: 'الولايات المتحدة' },
  'legal_long.data_processing.s6.r7.c1': { en: 'Microsoft Azure', ar: 'Microsoft Azure' },
  'legal_long.data_processing.s6.r7.c2': {
    en: 'Backend API hosting and data processing',
    ar: 'استضافة واجهة برمجة التطبيقات الخلفية ومعالجة البيانات',
  },
  'legal_long.data_processing.s6.r7.c3': { en: 'UK (UK South)', ar: 'المملكة المتحدة (UK South)' },
  'legal_long.data_processing.s6.p_outro': {
    en: 'Essay content submitted to Anthropic’s Claude API for marking is processed under Anthropic’s commercial API terms, which state that input data is not used to train their models. We do not send student names or email addresses to the AI model — only the essay text and marking criteria.',
    ar: 'يُعالَج محتوى المقالات المُرسَل إلى واجهة Claude البرمجية الخاصة بـ Anthropic للتصحيح بموجب شروط Anthropic التجارية لواجهة البرمجة، التي تنصّ على عدم استخدام بيانات المُدخَلات لتدريب نماذجهم. ولا نُرسل أسماء الطلاب أو عناوين بريدهم الإلكتروني إلى نموذج الذكاء الاصطناعي، بل نُرسل نصّ المقال ومعايير التصحيح حصراً.',
  },
  // Section 7
  'legal_long.data_processing.s7.h2': {
    en: '7. Data Retention and Deletion',
    ar: '7. الاحتفاظ بالبيانات وحذفها',
  },
  'legal_long.data_processing.s7.p1': {
    en: 'Personal data processed on behalf of a School is retained only for as long as necessary to provide the agreed services:',
    ar: 'تُحفَظ البيانات الشخصية المُعالَجة نيابةً عن المدرسة فقط للمدة اللازمة لتقديم الخدمات المتفق عليها:',
  },
  'legal_long.data_processing.s7.li1_strong': {
    en: 'During the subscription: ',
    ar: 'أثناء الاشتراك: ',
  },
  'legal_long.data_processing.s7.li1_text': {
    en: 'Student and staff data is retained for the duration of the School’s active subscription to enable platform functionality.',
    ar: 'تُحفَظ بيانات الطلاب والكادر طوال مدة اشتراك المدرسة النشط لتمكين عمل المنصة.',
  },
  'legal_long.data_processing.s7.li2_strong': {
    en: 'On account deletion: ',
    ar: 'عند حذف الحساب: ',
  },
  'legal_long.data_processing.s7.li2_text': {
    en: 'When a School or individual account is deleted, all associated personal data is permanently removed from our live systems within 30 days. Backups containing the data are purged within 90 days.',
    ar: 'عند حذف حساب المدرسة أو الحساب الفردي، تُزال جميع البيانات الشخصية المرتبطة به نهائياً من أنظمتنا التشغيلية في غضون 30 يوماً. وتُحذَف النسخ الاحتياطية التي تحتوي على البيانات في غضون 90 يوماً.',
  },
  'legal_long.data_processing.s7.li3_strong': { en: 'On request: ', ar: 'عند الطلب: ' },
  'legal_long.data_processing.s7.li3_text': {
    en: 'Schools may request deletion of specific student data at any time. We will action such requests within 30 days of receipt.',
    ar: 'يحقّ للمدارس طلب حذف بيانات طالب معيّن في أي وقت. وسنُنفّذ هذه الطلبات في غضون 30 يوماً من استلامها.',
  },
  'legal_long.data_processing.s7.li4_strong': { en: 'End of contract: ', ar: 'انتهاء العقد: ' },
  'legal_long.data_processing.s7.li4_text': {
    en: 'Upon termination of the School’s subscription, we will delete or return all personal data in accordance with the School’s instructions, unless retention is required by law.',
    ar: 'عند انتهاء اشتراك المدرسة، سنحذف جميع البيانات الشخصية أو نُعيدها وفق تعليمات المدرسة، ما لم يستلزم القانون الاحتفاظ بها.',
  },
  'legal_long.data_processing.s7.p_outro': {
    en: 'Schools may request an export of their data in a commonly used, machine-readable format (CSV or JSON) prior to account closure.',
    ar: 'يحقّ للمدارس طلب تصدير بياناتها بصيغة شائعة الاستخدام وقابلة للقراءة آلياً (CSV أو JSON) قبل إغلاق الحساب.',
  },
  // Section 8
  'legal_long.data_processing.s8.h2': {
    en: '8. Data Breach Notification',
    ar: '8. الإخطار بخرق البيانات',
  },
  'legal_long.data_processing.s8.p1': {
    en: 'In the event of a personal data breach that affects data processed on behalf of a School, The English Hub will:',
    ar: 'في حال وقوع خرق للبيانات الشخصية يمسّ بيانات مُعالَجة نيابةً عن المدرسة، يلتزم The English Hub بما يلي:',
  },
  'legal_long.data_processing.s8.li1_pre': {
    en: 'Notify the affected School without undue delay, and in any event within ',
    ar: 'إخطار المدرسة المتضرّرة دون تأخير غير مبرَّر، وعلى أيّة حال خلال ',
  },
  'legal_long.data_processing.s8.li1_strong': { en: '72 hours', ar: '72 ساعة' },
  'legal_long.data_processing.s8.li1_post': {
    en: ' of becoming aware of the breach, as required by Article 33 of the UK GDPR',
    ar: ' من العلم بالخرق، وفقاً لاشتراطات المادة 33 من لائحة UK GDPR',
  },
  'legal_long.data_processing.s8.li2': {
    en: 'Provide details of the nature of the breach, the categories and approximate number of data subjects affected, the likely consequences, and the measures taken or proposed to address the breach',
    ar: 'تقديم تفاصيل عن طبيعة الخرق، وفئات أصحاب البيانات المتضرّرين وعددهم التقريبي، والنتائج المحتمَلة، والتدابير المُتَّخَذة أو المُقترَحة لمعالجة الخرق',
  },
  'legal_long.data_processing.s8.li3': {
    en: 'Cooperate with the School in its obligations to notify the Information Commissioner’s Office (ICO) and affected data subjects where required',
    ar: 'التعاون مع المدرسة في التزاماتها المتعلقة بإخطار مكتب مفوّض المعلومات (ICO) وأصحاب البيانات المتضرّرين حيثما اقتضى الأمر',
  },
  'legal_long.data_processing.s8.li4': {
    en: 'Document all breaches, including those that do not require notification, and make records available to the School on request',
    ar: 'توثيق جميع الخروقات، بما فيها تلك التي لا تستلزم إخطاراً، وإتاحة السجلّات للمدرسة عند الطلب',
  },
  // Section 9
  'legal_long.data_processing.s9.h2': {
    en: '9. International Data Transfers',
    ar: '9. النقل الدولي للبيانات',
  },
  'legal_long.data_processing.s9.p1': {
    en: 'Our primary database infrastructure is hosted within the European Union (Supabase, Frankfurt). However, some sub-processors operate in the United States, which means personal data may be transferred outside the UK and EEA.',
    ar: 'تُستضاف البنية التحتية الأساسية لقواعد البيانات لدينا داخل الاتحاد الأوروبي (Supabase، فرانكفورت). غير أن بعض المعالجين الفرعيين يعملون في الولايات المتحدة، مما قد يستلزم نقل البيانات الشخصية خارج المملكة المتحدة والمنطقة الاقتصادية الأوروبية.',
  },
  'legal_long.data_processing.s9.p2': {
    en: 'Where personal data is transferred to countries outside the UK that have not received an adequacy decision from the UK Secretary of State, we ensure appropriate safeguards are in place. These include:',
    ar: 'حيثما نُقلت البيانات الشخصية إلى دول خارج المملكة المتحدة لم تحصل على قرار كفاية من وزير الدولة في المملكة المتحدة، نضمن وجود ضمانات مناسبة. وتشمل هذه الضمانات:',
  },
  'legal_long.data_processing.s9.li1_strong': {
    en: 'International Data Transfer Agreement (IDTA) / Standard Contractual Clauses (SCCs): ',
    ar: 'اتفاقية النقل الدولي للبيانات (IDTA) / الشروط التعاقدية القياسية (SCCs): ',
  },
  'legal_long.data_processing.s9.li1_text': {
    en: 'Our sub-processors that transfer data to the US operate under the UK IDTA or EU Standard Contractual Clauses as adopted under UK GDPR, supplemented by additional technical measures where appropriate.',
    ar: 'يعمل معالجونا الفرعيون الذين ينقلون البيانات إلى الولايات المتحدة بموجب اتفاقية IDTA البريطانية أو الشروط التعاقدية القياسية الأوروبية المعتمدة بموجب لائحة UK GDPR، مع تدابير تقنية تكميلية حيثما اقتضى الأمر.',
  },
  'legal_long.data_processing.s9.li2_strong': {
    en: 'EU-US Data Privacy Framework: ',
    ar: 'إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة: ',
  },
  'legal_long.data_processing.s9.li2_text': {
    en: 'Where applicable, sub-processors are certified under the EU-US Data Privacy Framework, which has been recognised as providing adequate protection by the European Commission.',
    ar: 'حيث ينطبق ذلك، يكون المعالجون الفرعيون معتمَدين بموجب إطار خصوصية البيانات بين الاتحاد الأوروبي والولايات المتحدة، الذي اعترفت به المفوضية الأوروبية بوصفه يُوفّر حماية كافية.',
  },
  'legal_long.data_processing.s9.li3_strong': {
    en: 'Transfer Impact Assessments: ',
    ar: 'تقييمات أثر النقل: ',
  },
  'legal_long.data_processing.s9.li3_text': {
    en: 'We conduct assessments to evaluate the legal framework of the recipient country and the effectiveness of supplementary measures.',
    ar: 'نُجري تقييمات لفحص الإطار القانوني للدولة المُستقبِلة وفعالية التدابير التكميلية.',
  },
  // Section 10
  'legal_long.data_processing.s10.h2': {
    en: '10. Data Subject Rights',
    ar: '10. حقوق أصحاب البيانات',
  },
  'legal_long.data_processing.s10.p1': {
    en: 'Where The English Hub processes data as a data processor on behalf of a School, data subject access requests (DSARs) and other rights requests should be directed to the School as the data controller. The English Hub will assist the School in responding to such requests in accordance with our obligations under Article 28 of the UK GDPR.',
    ar: 'حيث يُعالج The English Hub البيانات بوصفه معالج بيانات نيابةً عن المدرسة، تُوجَّه طلبات وصول أصحاب البيانات (DSARs) وسائر طلبات الحقوق إلى المدرسة بوصفها المتحكّم في البيانات. وسيُعين The English Hub المدرسة على الردّ على هذه الطلبات وفقاً لالتزاماتنا بموجب المادة 28 من لائحة UK GDPR.',
  },
  'legal_long.data_processing.s10.p2': {
    en: 'We provide Schools with the technical capability to access, rectify, export, and delete student data through the platform’s administrative dashboard. For requests that cannot be fulfilled through the dashboard, Schools may contact us directly and we will respond within a reasonable timeframe.',
    ar: 'نُتيح للمدارس القدرة التقنية على الوصول إلى بيانات الطلاب وتصحيحها وتصديرها وحذفها عبر لوحة التحكّم الإدارية للمنصة. وبالنسبة للطلبات التي لا يمكن تلبيتها عبر لوحة التحكّم، يحقّ للمدارس التواصل معنا مباشرةً، وسنردّ في غضون مدة معقولة.',
  },
  // Section 11
  'legal_long.data_processing.s11.h2': {
    en: '11. Requesting a Formal Data Processing Agreement',
    ar: '11. طلب اتفاقية رسمية لمعالجة البيانات',
  },
  'legal_long.data_processing.s11.p1': {
    en: 'Schools and educational institutions that require a formal Data Processing Agreement (DPA) or Data Processing Addendum can request one by contacting our partnerships team. Our DPA is compliant with Article 28 of the UK GDPR and covers all the matters outlined on this page, including detailed provisions on:',
    ar: 'يحقّ للمدارس والمؤسسات التعليمية التي تستلزم اتفاقية رسمية لمعالجة البيانات (DPA) أو ملحقاً لها أن تطلبها بالتواصل مع فريق الشراكات لدينا. واتفاقيتنا لمعالجة البيانات متوافقة مع المادة 28 من لائحة UK GDPR، وتُغطّي جميع المسائل المُبيَّنة في هذه الصفحة، بما في ذلك أحكام تفصيلية بشأن:',
  },
  'legal_long.data_processing.s11.li1': {
    en: 'Subject matter, duration, nature, and purpose of processing',
    ar: 'موضوع المعالجة ومدتها وطبيعتها والغرض منها',
  },
  'legal_long.data_processing.s11.li2': {
    en: 'Obligations and rights of the data controller',
    ar: 'التزامات المتحكّم في البيانات وحقوقه',
  },
  'legal_long.data_processing.s11.li3': {
    en: 'Technical and organisational security measures (Annex)',
    ar: 'التدابير الأمنية التقنية والتنظيمية (الملحق)',
  },
  'legal_long.data_processing.s11.li4': {
    en: 'Sub-processor management and notification procedures',
    ar: 'إدارة المعالجين الفرعيين وإجراءات الإخطار',
  },
  'legal_long.data_processing.s11.li5': {
    en: 'Audit rights and compliance verification',
    ar: 'حقوق التدقيق والتحقّق من الامتثال',
  },
  'legal_long.data_processing.s11.li6': {
    en: 'Data return and deletion on termination',
    ar: 'إعادة البيانات وحذفها عند الإنهاء',
  },
  'legal_long.data_processing.s11.p2_pre': {
    en: 'To request a DPA or discuss data protection arrangements, please contact us at ',
    ar: 'لطلب اتفاقية معالجة بيانات أو لمناقشة ترتيبات حماية البيانات، يُرجى التواصل معنا عبر ',
  },
  'legal_long.data_processing.s11.p2_post': {
    en: '. We are also happy to review and sign your School’s own DPA template if preferred.',
    ar: '. ويسعدنا أيضاً مراجعة قالب اتفاقية معالجة البيانات الخاص بمدرستكم وتوقيعه إن فضّلتم ذلك.',
  },
  // Section 12 wired contacts
  'legal_long.data_processing.s12.li1_strong': {
    en: 'School partnerships and DPA requests: ',
    ar: 'شراكات المدارس وطلبات اتفاقيات معالجة البيانات: ',
  },
  'legal_long.data_processing.s12.li2_strong': {
    en: 'Data protection enquiries: ',
    ar: 'استفسارات حماية البيانات: ',
  },

  // ────────────────────────────────────────────────────────────────
  // /legal/ai-transparency — body
  // ────────────────────────────────────────────────────────────────
  'legal_long.ai_transparency.h1': {
    en: 'How Our AI Works',
    ar: 'كيف يعمل الذكاء الاصطناعي لدينا',
  },
  'legal_long.ai_transparency.brand_pre': { en: 'The English Hub', ar: 'The English Hub' },
  'legal_long.ai_transparency.brand_mid': {
    en: ' — operated by Upskill Energy Limited',
    ar: ' — تُشغّلها شركة Upskill Energy Limited',
  },
  'legal_long.ai_transparency.updated': {
    en: 'Last updated: 22 March 2026',
    ar: 'آخر تحديث: 22 مارس 2026',
  },
  'legal_long.ai_transparency.intro': {
    en: 'We use artificial intelligence (AI) to help you improve your English writing. This page explains exactly what it does, how it works, what it can and cannot do, and what your rights are. We have written it in plain English because you deserve to understand any technology that interacts with your work.',
    ar: 'نستخدم الذكاء الاصطناعي (AI) لمساعدتك في تحسين كتابتك باللغة الإنجليزية. وتُوضّح هذه الصفحة بدقة ما الذي يقوم به، وكيف يعمل، وما يستطيع فعله وما لا يستطيع، وما هي حقوقك. وقد كُتبت بلغة مبسّطة لأنك تستحقّ أن تفهم أي تقنية تتعامل مع عملك.',
  },
  // S1
  'legal_long.ai_transparency.s1.h2': {
    en: '1. What Does Our AI Actually Do?',
    ar: '1. ما الذي يقوم به الذكاء الاصطناعي لدينا بالفعل؟',
  },
  'legal_long.ai_transparency.s1.p1': {
    en: 'When you submit an essay on The English Hub, our AI:',
    ar: 'عند تقديم مقال على منصة The English Hub، يقوم الذكاء الاصطناعي لدينا بما يلي:',
  },
  'legal_long.ai_transparency.s1.l1_s': {
    en: 'Reads and analyses your essay ',
    ar: 'يقرأ مقالك ويُحلّله ',
  },
  'legal_long.ai_transparency.s1.l1_t': { en: 'from start to finish', ar: 'من بدايته إلى نهايته' },
  'legal_long.ai_transparency.s1.l2_s': {
    en: 'Gives you feedback ',
    ar: 'يُقدّم إليك ملاحظات تقييمية ',
  },
  'legal_long.ai_transparency.s1.l2_t': {
    en: 'on grammar, structure, argumentation, and vocabulary',
    ar: 'على القواعد النحوية، والبنية، والحجاج، والمفردات',
  },
  'legal_long.ai_transparency.s1.l3_s': { en: 'Suggests improvements ', ar: 'يقترح تحسينات ' },
  'legal_long.ai_transparency.s1.l3_t': {
    en: '— specific things you could change to make your writing stronger',
    ar: '— أمور محدّدة يمكنك تغييرها لجعل كتابتك أكثر قوّة',
  },
  'legal_long.ai_transparency.s1.l4_s': {
    en: 'Gives you a practice score ',
    ar: 'يمنحك درجة تدريبية ',
  },
  'legal_long.ai_transparency.s1.l4_t': {
    en: '— an estimate to help you track progress. It is not an official grade and should never be treated as one.',
    ar: '— تقديراً يُعينك على متابعة التقدّم. وهي ليست درجة رسمية ولا يجوز التعامل معها بوصفها كذلك بحال من الأحوال.',
  },
  'legal_long.ai_transparency.s1.p_outro': {
    en: 'Think of it like a spell-checker that has been upgraded significantly. It can spot patterns and offer suggestions, but it is a tool to help you learn — not a replacement for your teacher.',
    ar: 'تصوّره مدقّقاً إملائياً جرى تطويره تطويراً ملحوظاً. فبإمكانه رصد الأنماط وتقديم الاقتراحات، غير أنه أداة تُعينك على التعلّم، لا بديلاً عن معلّمك.',
  },
  // S2
  'legal_long.ai_transparency.s2.h2': { en: '2. How Does It Work?', ar: '2. كيف يعمل؟' },
  'legal_long.ai_transparency.s2.l1_s': { en: 'Training: ', ar: 'التدريب: ' },
  'legal_long.ai_transparency.s2.l1_t': {
    en: 'The AI was trained on large collections of high-quality English writing. It learned patterns — what strong grammar looks like, how good arguments are structured, what effective vocabulary choices look like.',
    ar: 'دُرِّب الذكاء الاصطناعي على مجموعات كبيرة من الكتابة الإنجليزية العالية الجودة. وقد تعلّم الأنماط — كيف تبدو القواعد النحوية المتينة، وكيف تُبنى الحجج الجيدة، وكيف تبدو خيارات المفردات الفعّالة.',
  },
  'legal_long.ai_transparency.s2.l2_s': {
    en: 'Natural Language Processing (NLP): ',
    ar: 'معالجة اللغة الطبيعية (NLP): ',
  },
  'legal_long.ai_transparency.s2.l2_t': {
    en: 'When you submit your essay, the AI uses NLP to break down your writing into parts it can analyse.',
    ar: 'عند تقديم مقالك، يستخدم الذكاء الاصطناعي معالجة اللغة الطبيعية لتفكيك كتابتك إلى أجزاء قابلة للتحليل.',
  },
  'legal_long.ai_transparency.s2.l3_s': {
    en: 'Comparison against criteria: ',
    ar: 'المقارنة بالمعايير: ',
  },
  'legal_long.ai_transparency.s2.l3_t': {
    en: 'The AI compares your essay against marking criteria (such as those used in GCSE or A-Level English).',
    ar: 'يُقارن الذكاء الاصطناعي مقالك بمعايير التصحيح (مثل تلك المُستخدَمة في امتحانات GCSE أو A-Level في الإنجليزية).',
  },
  'legal_long.ai_transparency.s2.l4_s': { en: 'Generating feedback: ', ar: 'توليد الملاحظات: ' },
  'legal_long.ai_transparency.s2.l4_t': {
    en: 'Based on that comparison, it produces feedback and suggestions tailored to your specific essay.',
    ar: 'بناءً على تلك المقارنة، يُنتج ملاحظات واقتراحات مُصمَّمة خصّيصاً لمقالك.',
  },
  'legal_long.ai_transparency.s2.box_h': { en: 'Important:', ar: 'مهمّ:' },
  'legal_long.ai_transparency.s2.box_p': {
    en: 'We do not use your essays to train or improve the AI model. Your writing is processed to give you feedback, and that is all.',
    ar: 'لا نستخدم مقالاتك لتدريب نموذج الذكاء الاصطناعي أو تحسينه. فكتابتك تُعالَج لتقديم الملاحظات إليك، ولا غير.',
  },
  // S3
  'legal_long.ai_transparency.s3.h2': {
    en: '3. What the AI Cannot Do',
    ar: '3. ما لا يستطيع الذكاء الاصطناعي فعله',
  },
  'legal_long.ai_transparency.s3.l1_s': {
    en: 'It cannot replace a teacher’s judgement. ',
    ar: 'لا يستطيع أن يحلّ محلّ تقدير المعلّم. ',
  },
  'legal_long.ai_transparency.s3.l1_t': {
    en: 'A teacher understands you, your progress, and the nuances of your work in ways AI simply cannot.',
    ar: 'فالمعلّم يفهمك ويفهم تقدّمك ودقائق عملك بطرائق لا يستطيعها الذكاء الاصطناعي.',
  },
  'legal_long.ai_transparency.s3.l2_s': {
    en: 'It cannot guarantee your exam results. ',
    ar: 'لا يستطيع ضمان نتائج امتحاناتك. ',
  },
  'legal_long.ai_transparency.s3.l2_t': {
    en: 'Practice scores are estimates. Real exams involve human markers who may see things differently.',
    ar: 'فدرجات التدريب تقديرات. أمّا الامتحانات الفعلية فيتولّاها مصحّحون بشر قد يرون الأمور بصورة مختلفة.',
  },
  'legal_long.ai_transparency.s3.l3_s': {
    en: 'It may not always be accurate. ',
    ar: 'قد لا يكون دقيقاً دائماً. ',
  },
  'legal_long.ai_transparency.s3.l3_t': {
    en: 'AI makes mistakes. It might misread your tone, miss a clever stylistic choice, or flag something correct as wrong.',
    ar: 'فالذكاء الاصطناعي يُخطئ. وقد يُسيء قراءة نبرتك، أو يُغفل اختياراً أسلوبياً ذكياً، أو يُشير إلى صواب على أنه خطأ.',
  },
  'legal_long.ai_transparency.s3.l4_s': {
    en: 'It cannot understand context the way a human can. ',
    ar: 'لا يستطيع فهم السياق على النحو الذي يفهمه الإنسان. ',
  },
  'legal_long.ai_transparency.s3.l4_t': {
    en: 'Irony, personal references, or deliberate rule-breaking will likely not be picked up.',
    ar: 'فالتهكّم، والإشارات الشخصية، وكسر القواعد المتعمَّد، يُرجَّح ألا يلتقطها.',
  },
  'legal_long.ai_transparency.s3.p_outro': {
    en: 'If something in the AI’s feedback does not feel right, trust your instincts and ask a teacher.',
    ar: 'إن وجدتَ في ملاحظات الذكاء الاصطناعي شيئاً لا يبدو صحيحاً، فاتّبع حدسك واستشر معلّماً.',
  },
  // S4
  'legal_long.ai_transparency.s4.h2': { en: '4. Your Rights', ar: '4. حقوقكم' },
  'legal_long.ai_transparency.s4.p1': {
    en: 'Under UK data protection law (UK GDPR) and the Data Use and Access Act 2025, you have clear rights when AI processes your work:',
    ar: 'بموجب قانون حماية البيانات في المملكة المتحدة (UK GDPR) وقانون استخدام البيانات والوصول إليها لعام 2025، يحقّ لكم حقوق واضحة عند معالجة الذكاء الاصطناعي لأعمالكم:',
  },
  'legal_long.ai_transparency.s4.r1_h': {
    en: 'Right to Human Review',
    ar: 'الحقّ في المراجعة البشرية',
  },
  'legal_long.ai_transparency.s4.r1_p': {
    en: 'You can request that a real person reviews any feedback or score the AI has given you. No reason needed.',
    ar: 'يحقّ لك طلب أن يُراجع شخص حقيقي أيّ ملاحظات أو درجة منحها لك الذكاء الاصطناعي، دون الحاجة إلى إبداء سبب.',
  },
  'legal_long.ai_transparency.s4.r2_h': {
    en: 'Right to Contest the AI’s Assessment',
    ar: 'الحقّ في الطعن في تقييم الذكاء الاصطناعي',
  },
  'legal_long.ai_transparency.s4.r2_p': {
    en: 'If you disagree with what the AI said, you have the right to challenge it. A qualified person will look at it.',
    ar: 'إن لم تتفق مع ما قاله الذكاء الاصطناعي، يحقّ لك الطعن في ذلك. وسيتولّى النظر فيه شخص مؤهّل.',
  },
  'legal_long.ai_transparency.s4.r3_h': { en: 'Right to an Explanation', ar: 'الحقّ في تفسير' },
  'legal_long.ai_transparency.s4.r3_p': {
    en: 'You can ask us to explain why the AI gave you specific feedback. We will provide a clear, understandable answer.',
    ar: 'يحقّ لك أن تطلب منّا تفسير سبب إعطاء الذكاء الاصطناعي ملاحظات بعينها. وسنُقدّم إجابة واضحة ومفهومة.',
  },
  'legal_long.ai_transparency.s4.r4_h': { en: 'Right to Opt Out', ar: 'الحقّ في الانسحاب' },
  'legal_long.ai_transparency.s4.r4_p_pre': {
    en: 'You can stop your essays from being processed by AI entirely. Go to ',
    ar: 'يحقّ لك إيقاف معالجة مقالاتك بالذكاء الاصطناعي كلّياً. توجَّه إلى ',
  },
  'legal_long.ai_transparency.s4.r4_p_path': {
    en: 'Settings > Privacy > AI Processing',
    ar: 'الإعدادات > الخصوصية > معالجة الذكاء الاصطناعي',
  },
  'legal_long.ai_transparency.s4.r4_p_post': {
    en: ' or contact us directly.',
    ar: ' أو تواصل معنا مباشرةً.',
  },
  'legal_long.ai_transparency.s4.p_outro': {
    en: 'If you are under 18, a parent or guardian can also exercise these rights on your behalf.',
    ar: 'إن كان عمرك يقلّ عن 18 عاماً، فيحقّ لأحد الوالدين أو الوليّ ممارسة هذه الحقوق نيابةً عنك.',
  },
  // S5
  'legal_long.ai_transparency.s5.h2': {
    en: '5. How to Request a Human Review',
    ar: '5. كيفية طلب مراجعة بشرية',
  },
  'legal_long.ai_transparency.s5.l1_s': { en: 'From your essay: ', ar: 'من مقالك: ' },
  'legal_long.ai_transparency.s5.l1_pre': { en: 'Click the ', ar: 'انقر على زرّ ' },
  'legal_long.ai_transparency.s5.l1_btn': {
    en: '"Request Human Review"',
    ar: '"طلب مراجعة بشرية"',
  },
  'legal_long.ai_transparency.s5.l1_post': {
    en: ' button at the bottom of every AI feedback report',
    ar: ' في أسفل كل تقرير ملاحظات للذكاء الاصطناعي',
  },
  'legal_long.ai_transparency.s5.l2_s': { en: 'By email: ', ar: 'عبر البريد الإلكتروني: ' },
  'legal_long.ai_transparency.s5.l2_t': {
    en: 'Send us an email with the subject line "Human Review Request" and include the essay title or reference number',
    ar: 'أرسل إلينا رسالة بريد إلكتروني بعنوان "طلب مراجعة بشرية" وضمّنها عنوان المقال أو رقمه المرجعي',
  },
  'legal_long.ai_transparency.s5.l3_s': { en: 'Through your account: ', ar: 'من خلال حسابك: ' },
  'legal_long.ai_transparency.s5.l3_pre': { en: 'Go to ', ar: 'توجَّه إلى ' },
  'legal_long.ai_transparency.s5.l3_path': {
    en: 'Settings > My Essays > [select essay] > Request Review',
    ar: 'الإعدادات > مقالاتي > [اختر المقال] > طلب مراجعة',
  },
  'legal_long.ai_transparency.s5.box_h': { en: 'What happens next:', ar: 'ما الذي يحدث بعد ذلك:' },
  'legal_long.ai_transparency.s5.box_l1_pre': {
    en: 'We will acknowledge your request within ',
    ar: 'سنُقرّ باستلام طلبك خلال ',
  },
  'legal_long.ai_transparency.s5.box_l1_s': { en: '2 working days', ar: 'يومَي عمل' },
  'legal_long.ai_transparency.s5.box_l2': {
    en: 'A qualified English teacher or assessor will review your essay and the AI’s feedback',
    ar: 'سيُراجع معلّم لغة إنجليزية مؤهّل أو مُقيِّم مقالك وملاحظات الذكاء الاصطناعي',
  },
  'legal_long.ai_transparency.s5.box_l3_pre': {
    en: 'A qualified reviewer will respond to your request as quickly as we can. We are finalising and will publish a specific response-time commitment here.',
    ar: 'سيردّ مُراجِع مؤهّل على طلبك بأسرع ما نستطيع. ونحن بصدد وضع الصيغة النهائية لالتزام محدّد بمدة الاستجابة وسننشره هنا.',
  },
  'legal_long.ai_transparency.s5.box_l3_s': { en: '', ar: '' },
  'legal_long.ai_transparency.s5.box_l4': {
    en: 'The human review is final and overrides the AI’s assessment',
    ar: 'تكون المراجعة البشرية نهائية وتعلو على تقييم الذكاء الاصطناعي',
  },
  'legal_long.ai_transparency.s5.box_p_outro': {
    en: 'This service is provided at no extra cost. It is your right, not a favour.',
    ar: 'تُقدَّم هذه الخدمة بلا تكلفة إضافية. وهي حقّ مكفول لكم، لا منّة.',
  },
  // S6
  'legal_long.ai_transparency.s6.h2': {
    en: '6. How We Keep Improving',
    ar: '6. كيف نواصل التحسين',
  },
  'legal_long.ai_transparency.s6.l1_s': { en: 'Feedback button: ', ar: 'زرّ التغذية الراجعة: ' },
  'legal_long.ai_transparency.s6.l1_t': {
    en: 'Every report includes a "Was this helpful?" option. Even a quick thumbs up or down helps us.',
    ar: 'يتضمّن كل تقرير خيار "هل كان هذا مفيداً؟" حتى ضغطة سريعة بالإعجاب أو عدمه تُعيننا.',
  },
  'legal_long.ai_transparency.s6.l2_s': { en: 'Report an issue: ', ar: 'الإبلاغ عن مشكلة: ' },
  'legal_long.ai_transparency.s6.l2_t': {
    en: 'If the AI gives clearly wrong, biased, or unhelpful feedback, hit the "Report Issue" button. Our team reviews every report.',
    ar: 'إن قدّم الذكاء الاصطناعي ملاحظات خاطئة بوضوح، أو متحيّزة، أو غير مفيدة، فاضغط على زرّ "الإبلاغ عن مشكلة". ويُراجع فريقنا كل تقرير.',
  },
  'legal_long.ai_transparency.s6.l3_s': { en: 'Regular audits: ', ar: 'تدقيقات دورية: ' },
  'legal_long.ai_transparency.s6.l3_t': {
    en: 'We test the AI for accuracy, fairness, and bias, including whether it performs equally well for students of different backgrounds and writing styles.',
    ar: 'نختبر الذكاء الاصطناعي للتحقّق من الدقة والإنصاف وغياب التحيّز، بما في ذلك مدى أدائه المتساوي لطلاب من خلفيات وأساليب كتابة مختلفة.',
  },
  'legal_long.ai_transparency.s6.l4_s': { en: 'Updates: ', ar: 'التحديثات: ' },
  'legal_long.ai_transparency.s6.l4_t': {
    en: 'When we make significant changes, we update this page and notify you.',
    ar: 'حين نُجري تغييرات جوهرية، نُحدّث هذه الصفحة ونُخطركم.',
  },
  // S7
  'legal_long.ai_transparency.s7.h2': {
    en: '7. Data Protection — What Happens to Your Essays',
    ar: '7. حماية البيانات — ما الذي يحدث لمقالاتكم',
  },
  'legal_long.ai_transparency.s7.h3_collect': { en: 'What We Collect', ar: 'ما الذي نجمعه' },
  'legal_long.ai_transparency.s7.c_li1': {
    en: 'The text of your essay when you submit it for AI feedback',
    ar: 'نصّ مقالك عند تقديمه للحصول على ملاحظات الذكاء الاصطناعي',
  },
  'legal_long.ai_transparency.s7.c_li2': {
    en: 'The AI-generated feedback and practice score',
    ar: 'ملاحظات الذكاء الاصطناعي المُولَّدة والدرجة التدريبية',
  },
  'legal_long.ai_transparency.s7.c_li3': {
    en: 'Any feedback you give us about the AI’s performance (e.g. thumbs up/down)',
    ar: 'أي تغذية راجعة تُقدّمها بشأن أداء الذكاء الاصطناعي (مثل الإعجاب أو عدمه)',
  },
  'legal_long.ai_transparency.s7.h3_no': { en: 'What We Do NOT Do', ar: 'ما الذي لا نفعله' },
  'legal_long.ai_transparency.s7.n_li1_pre': { en: 'We do ', ar: 'لا ' },
  'legal_long.ai_transparency.s7.n_li1_s': { en: 'not ', ar: '' },
  'legal_long.ai_transparency.s7.n_li1_post': {
    en: 'use your essays to train or improve the AI model',
    ar: 'نستخدم مقالاتك لتدريب نموذج الذكاء الاصطناعي أو تحسينه',
  },
  'legal_long.ai_transparency.s7.n_li2_pre': { en: 'We do ', ar: 'لا ' },
  'legal_long.ai_transparency.s7.n_li2_s': { en: 'not ', ar: '' },
  'legal_long.ai_transparency.s7.n_li2_post': {
    en: 'sell or share your essays with third parties',
    ar: 'نبيع مقالاتك ولا نُشاركها مع أطراف ثالثة',
  },
  'legal_long.ai_transparency.s7.n_li3_pre': { en: 'We do ', ar: 'لا ' },
  'legal_long.ai_transparency.s7.n_li3_s': { en: 'not ', ar: '' },
  'legal_long.ai_transparency.s7.n_li3_post': {
    en: 'use your essays for any purpose other than giving you feedback',
    ar: 'نستخدم مقالاتك لأي غرض غير تقديم الملاحظات إليك',
  },
  'legal_long.ai_transparency.s7.h3_keep': { en: 'How Long We Keep It', ar: 'مدّة احتفاظنا بها' },
  'legal_long.ai_transparency.s7.k_li1': {
    en: 'Essays and feedback are kept for as long as you have an active account',
    ar: 'تُحفَظ المقالات والملاحظات طوال مدة وجود حساب نشط لك',
  },
  'legal_long.ai_transparency.s7.k_li2_pre': {
    en: 'If you delete your account, everything is permanently deleted within ',
    ar: 'إن حذفتَ حسابك، يُحذَف كل شيء نهائياً خلال ',
  },
  'legal_long.ai_transparency.s7.k_li2_s': { en: '30 days', ar: '30 يوماً' },
  'legal_long.ai_transparency.s7.k_li3': {
    en: 'You can delete individual essays at any time',
    ar: 'يحقّ لك حذف مقالات بعينها في أي وقت',
  },
  'legal_long.ai_transparency.s7.h3_kids': {
    en: 'Children’s Data (ICO Children’s Code)',
    ar: 'بيانات الأطفال (مدوّنة الأطفال لـ ICO)',
  },
  'legal_long.ai_transparency.s7.kid_li1': {
    en: 'AI features are designed to support your learning, not exploit your data or attention',
    ar: 'صُمّمت خصائص الذكاء الاصطناعي لدعم تعلّمك، لا لاستغلال بياناتك أو انتباهك',
  },
  'legal_long.ai_transparency.s7.kid_li2': {
    en: 'We only collect what we need to give you feedback',
    ar: 'نجمع فقط ما نحتاجه لتقديم الملاحظات إليك',
  },
  'legal_long.ai_transparency.s7.kid_li3': {
    en: 'Your essays and feedback are private by default — nothing is shared publicly',
    ar: 'مقالاتك وملاحظاتك خاصة افتراضياً — لا يُشارَك شيء منها علناً',
  },
  'legal_long.ai_transparency.s7.kid_li4': {
    en: 'Parents and guardians can request access to their child’s data',
    ar: 'يحقّ لأولياء الأمور والأوصياء طلب الوصول إلى بيانات أطفالهم',
  },
  // Contact box
  'legal_long.ai_transparency.contact.h2': { en: 'Questions?', ar: 'هل لديكم استفسارات؟' },
  'legal_long.ai_transparency.contact.p1': {
    en: 'If anything on this page is unclear, or if you have questions about how the AI works, contact us:',
    ar: 'إن كان أيّ شيء في هذه الصفحة غير واضح، أو كانت لديكم استفسارات بشأن كيفية عمل الذكاء الاصطناعي، تواصلوا معنا:',
  },
  'legal_long.ai_transparency.contact.email_label': { en: 'Email: ', ar: 'البريد الإلكتروني: ' },
  'legal_long.ai_transparency.contact.help_li': {
    en: 'In-app: Use the "Help" button',
    ar: 'داخل التطبيق: استخدم زرّ "المساعدة"',
  },
  'legal_long.ai_transparency.contact.p2_pre': { en: 'We will respond within ', ar: 'سنردّ خلال ' },
  'legal_long.ai_transparency.contact.p2_s1': { en: '5 working days', ar: '5 أيام عمل' },
  'legal_long.ai_transparency.contact.p2_mid': {
    en: '. For data protection questions, we will respond within ',
    ar: '. وفي ما يتعلق بأسئلة حماية البيانات، سنردّ خلال ',
  },
  'legal_long.ai_transparency.contact.p2_s2': { en: '30 days', ar: '30 يوماً' },
  'legal_long.ai_transparency.contact.p2_post': {
    en: ' as required by law.',
    ar: ' كما يقتضي القانون.',
  },
  'legal_long.ai_transparency.review_footer': {
    en: 'This page is reviewed and updated at least every 6 months.',
    ar: 'تُراجَع هذه الصفحة وتُحدَّث كل ستة أشهر على الأقل.',
  },
}
