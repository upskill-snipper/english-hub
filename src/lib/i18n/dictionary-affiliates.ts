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

export const AFF_PUBLIC_DICTIONARY: Record<string, { en: string; ar: string }> = {
  /* ─── Hero ─────────────────────────────────────────────────── */
  'aff_comp.public.partnership_badge': {
    en: 'Partner Programme',
    ar: 'برنامج الشركاء',
  },
  'aff_comp.public.hero.title_part1': {
    en: 'Earn recurring commission with',
    ar: 'اكسب عمولة متكرّرة وياك',
  },
  'aff_comp.public.hero.title_brand': {
    en: 'The English Hub',
    ar: 'The English Hub',
  },
  'aff_comp.public.hero.subtitle': {
    en: "Partner with a launch-stage English revision platform. The English Hub is a new GCSE/IGCSE revision tool built by English teachers. We are recruiting our first cohort of partners now. We don't publish usage or earnings figures we can't yet evidence - your dashboard shows your real, verified referrals and commission from day one.",
    ar: 'كن شريكاً لمنصّة مراجعة إنجليزي في مرحلة الإطلاق. The English Hub أداة مراجعة GCSE/IGCSE جديدة صاغها معلّمو إنجليزي. نحن نضم أول مجموعة من شركائنا الآن. ما ننشر أرقام استخدام أو أرباح ما نقدر نوثّقها بعد - لوحة تحكّمك تبيّن إحالاتك وعمولتك الحقيقية الموثّقة من أول يوم.',
  },
  'aff_comp.public.cta.get_code': {
    en: 'Get your referral code',
    ar: 'احصل على كود الإحالة حقّك',
  },
  'aff_comp.public.cta.learn_more': {
    en: 'Learn more',
    ar: 'اعرف أكثر',
  },

  /* ─── Status banner (EN inferred from StatusBanner config) ──── */
  'aff_comp.public.status.pending.title': {
    en: 'Your application is under review',
    ar: 'طلبك تحت المراجعة',
  },
  'aff_comp.public.status.pending.message': {
    en: "Thanks for applying. We're reviewing your details and will be in touch shortly with the next steps.",
    ar: 'مشكور على تقديمك. قاعدين نراجع بياناتك وبنتواصل وياك قريب بالخطوات الجاية.',
  },
  'aff_comp.public.status.agreement_sent.title': {
    en: 'Your partner agreement is on its way',
    ar: 'اتفاقية الشراكة حقّتك في طريقها لك',
  },
  'aff_comp.public.status.agreement_sent.message': {
    en: "We've sent your partner agreement to sign. Once it's signed, your referral code and dashboard unlock straight away.",
    ar: 'رسّلنا لك اتفاقية الشراكة عشان توقّعها. عقب ما توقّعها، يفتح لك كود الإحالة ولوحة التحكّم على طول.',
  },
  'aff_comp.public.status.agreement_signed.title': {
    en: "You're all set - welcome aboard",
    ar: 'كل شي جاهز - حيّاك الله معانا',
  },
  'aff_comp.public.status.agreement_signed.message': {
    en: 'Your agreement is signed and your partner account is active. Head to your dashboard to grab your referral link and start sharing.',
    ar: 'توقّعت اتفاقيتك وحسابك كشريك صار فعّال. روح للوحة التحكّم حقّتك، خذ رابط الإحالة وابدأ تنشر.',
  },

  /* ─── Why partner ──────────────────────────────────────────── */
  'aff_comp.public.why.heading': {
    en: 'Why partner with us',
    ar: 'ليش تصير شريك وياّنا',
  },
  'aff_comp.public.why.subheading': {
    en: 'A genuinely useful product for your audience, fair recurring rewards for you, and transparent tracking throughout.',
    ar: 'منتج يفيد جمهورك فعلاً، ومكافآت متكرّرة وعادلة لك، وتتبّع شفّاف من أوّله لآخره.',
  },
  'aff_comp.public.why.reason1.title': {
    en: 'One clear programme',
    ar: 'برنامج واحد واضح',
  },
  'aff_comp.public.why.reason1.desc': {
    en: 'One programme, one set of terms - paid monthly. Your dashboard shows your real verified referrals and earnings, and the current commission rate that applies to you.',
    ar: 'برنامج واحد، مجموعة شروط واحدة - تنصرف لك شهرياً. لوحة تحكّمك تبيّن إحالاتك وأرباحك الحقيقية الموثّقة، ونسبة العمولة الحالية اللي تنطبّق عليك.',
  },
  'aff_comp.public.why.reason2.title': {
    en: 'A product parents actually trust',
    ar: 'منتج الأهالي يثقون فيه عدل',
  },
  'aff_comp.public.why.reason2.desc': {
    en: 'Exam-board specific revision built by English teachers - not generic AI slop. Easy to recommend honestly.',
    ar: 'مراجعة مخصّصة لكل مجلس امتحانات، صاغها معلّمو إنجليزي - مو حشو ذكاء اصطناعي عام. تنصح فيها بصدق وبكل أريحية.',
  },
  'aff_comp.public.why.reason3.title': {
    en: 'Real support, not a portal',
    ar: 'دعم حقيقي، مو بس بوّابة',
  },
  'aff_comp.public.why.reason3.desc': {
    en: 'Direct line to our partnerships team, custom assets, co-marketing slots and quarterly creator calls.',
    ar: 'تواصل مباشر مع فريق الشراكات حقّنا، ومواد مخصّصة لك، وفرص تسويق مشترك، ومكالمات ربع سنوية لصنّاع المحتوى.',
  },

  /* ─── How it works ─────────────────────────────────────────── */
  'aff_comp.public.how.heading': {
    en: 'How it works',
    ar: 'شلون يشتغل',
  },
  'aff_comp.public.how.subheading': {
    en: 'Apply, share your code, and earn commission on every annual subscription you refer.',
    ar: 'قدّم طلبك، انشر كودك، واكسب عمولة على كل اشتراك سنوي يجي عن طريقك.',
  },
  'aff_comp.public.how.step1.title': {
    en: 'Apply in 60 seconds',
    ar: 'قدّم في 60 ثانية',
  },
  'aff_comp.public.how.step1.desc': {
    en: 'Tell us about your audience and how you plan to refer. Most applications are approved within one working day.',
    ar: 'عرّفنا على جمهورك وكيف ناوي تحيل الناس. أغلب الطلبات تنقبل خلال يوم عمل واحد.',
  },
  'aff_comp.public.how.step2.title': {
    en: 'Get your unique link',
    ar: 'احصل على رابطك الخاص',
  },
  'aff_comp.public.how.step2.desc': {
    en: 'Pick from preset destinations (homepage, pricing, IGCSE landing) or build your own with full UTM tagging.',
    ar: 'اختر من الوجهات الجاهزة (الصفحة الرئيسية، الأسعار، صفحة IGCSE) أو سوِّ رابطك بنفسك مع وسوم UTM كاملة.',
  },
  'aff_comp.public.how.step3.title': {
    en: 'Share it your way',
    ar: 'انشره على طريقتك',
  },
  'aff_comp.public.how.step3.desc': {
    en: 'Use our banners, screenshots and copy snippets - or write entirely your own. Whatever works for your audience.',
    ar: 'استخدم البنرات ولقطات الشاشة والنصوص الجاهزة حقّنا - أو اكتب نصّك بالكامل بنفسك. اللي يمشي مع جمهورك.',
  },
  'aff_comp.public.how.step4.title': {
    en: 'Get paid monthly',
    ar: 'تستلم فلوسك شهرياً',
  },
  'aff_comp.public.how.step4.desc': {
    en: 'Commissions are paid monthly via Stripe or PayPal - for as long as the customer stays. Your dashboard shows the exact payout date and your real verified earnings.',
    ar: 'العمولات تنصرف شهرياً عن طريق Stripe أو PayPal - طول ما العميل باقٍ مشترك. لوحة تحكّمك تبيّن تاريخ الصرف بالضبط وأرباحك الحقيقية الموثّقة.',
  },
  'aff_comp.public.how.annual_only_lead': {
    en: 'Annual plans only',
    ar: 'الخطط السنوية بس',
  },
  'aff_comp.public.how.annual_only_body': {
    en: 'Commission is earned on referred annual subscriptions. This keeps rewards meaningful and aligned with families who commit to a full year of learning.',
    ar: 'العمولة تنحسب على الاشتراكات السنوية اللي تجي عن طريقك. هذي تخلّي المكافآت لها قيمة ومترابطة مع الأهالي اللي يلتزمون بسنة تعلّم كاملة.',
  },

  /* ─── Commission structure ─────────────────────────────────── */
  'aff_comp.public.commission.heading': {
    en: 'Commission structure',
    ar: 'هيكل العمولة',
  },
  'aff_comp.public.commission.subheading': {
    en: 'Transparent recurring commission on every referred annual plan. One programme, one set of terms; your dashboard shows your real verified referrals and earnings.',
    ar: 'عمولة متكرّرة وشفّافة على كل خطّة سنوية تجي عن طريقك. برنامج واحد، مجموعة شروط واحدة؛ لوحة تحكّمك تبيّن إحالاتك وأرباحك الحقيقية الموثّقة.',
  },
  'aff_comp.public.commission.col_plan': {
    en: 'Plan',
    ar: 'الخطّة',
  },
  'aff_comp.public.commission.col_commission': {
    en: 'Commission',
    ar: 'العمولة',
  },
  'aff_comp.public.commission.plan.student_monthly': {
    en: 'Student · monthly',
    ar: 'طالب · شهري',
  },
  'aff_comp.public.commission.plan.student_annual': {
    en: 'Student · annual',
    ar: 'طالب · سنوي',
  },
  'aff_comp.public.commission.plan.teacher_monthly': {
    en: 'Teacher · monthly',
    ar: 'معلّم · شهري',
  },
  'aff_comp.public.commission.plan.teacher_annual': {
    en: 'Teacher · annual',
    ar: 'معلّم · سنوي',
  },
  'aff_comp.public.commission.per_signup': {
    en: 'per signup',
    ar: 'لكل تسجيل',
  },
  'aff_comp.public.commission.footnote': {
    en: 'Commission is recurring while the referred subscription stays active. One programme, one set of terms; the rate that applies to you and your real verified earnings are confirmed in your partner dashboard.',
    ar: 'العمولة متكرّرة طول ما الاشتراك اللي جاء عن طريقك فعّال. برنامج واحد، مجموعة شروط واحدة؛ النسبة اللي تنطبّق عليك وأرباحك الحقيقية الموثّقة مؤكّدة لك في لوحة تحكّم الشريك حقّتك.',
  },

  /* ─── Your impact ──────────────────────────────────────────── */
  'aff_comp.public.impact.heading': {
    en: 'The impact you help create',
    ar: 'الأثر اللي تساعد تصنعه',
  },
  'aff_comp.public.impact.subheading': {
    en: 'Every referral helps a student build real confidence in English, from KS3 through GCSE, IGCSE and EAL.',
    ar: 'كل إحالة تساعد طالب يبني ثقة حقيقية في الإنجليزي، من KS3 لين GCSE وIGCSE وEAL.',
  },
  // 2026-05-19 (H2/M15): the three fabricated stat tiles
  // ("14,000+ students", "871 board-specific revision routes",
  // "£42 average commission per referral, year one") were removed -
  // no usage or earnings figures we cannot yet evidence. Replaced with
  // honest launch-stage copy. No invented replacement count.
  'aff_comp.public.impact.stat1.value': {
    en: 'New',
    ar: 'جديدة',
  },
  'aff_comp.public.impact.stat1.label': {
    en: 'GCSE / IGCSE revision platform, built by English teachers',
    ar: 'منصّة مراجعة GCSE / IGCSE، صاغها معلّمو إنجليزي',
  },
  'aff_comp.public.impact.stat2.value': {
    en: 'Every board',
    ar: 'كل مجلس',
  },
  'aff_comp.public.impact.stat2.label': {
    en: 'Revision aligned to the major exam boards',
    ar: 'مراجعة متوافقة مع مجالس الامتحانات الرئيسية',
  },
  'aff_comp.public.impact.stat3.value': {
    en: 'Verified',
    ar: 'موثّقة',
  },
  'aff_comp.public.impact.stat3.label': {
    en: 'Your dashboard shows your real referrals and commission from day one',
    ar: 'لوحة تحكّمك تبيّن إحالاتك وعمولتك الحقيقية من أول يوم',
  },
  'aff_comp.public.impact.empty_testimonials': {
    en: 'Partner case studies and stories are coming as the programme grows. Be one of the early partners who helps shape it.',
    ar: 'قصص الشركاء ودراسات الحالة جاية كل ما يكبر البرنامج. كن من الشركاء الأوائل اللي يساعدون يشكّلونه.',
  },

  /* ─── What you get ─────────────────────────────────────────── */
  'aff_comp.public.what_you_get.heading': {
    en: 'What you get',
    ar: 'وش بتحصل عليه',
  },
  'aff_comp.public.what_you_get.subheading': {
    en: 'Everything you need to share The English Hub with confidence and track your results.',
    ar: 'كل اللي تحتاجه عشان تنشر The English Hub بثقة وتتابع نتايجك.',
  },
  'aff_comp.public.what_you_get.perk1': {
    en: 'Recurring commission - the rate that applies to you is shown in your dashboard',
    ar: 'عمولة متكرّرة - النسبة اللي تنطبّق عليك مبيّنة في لوحة تحكّمك',
  },
  'aff_comp.public.what_you_get.perk2': {
    en: 'Referral tracking window confirmed in your dashboard',
    ar: 'نافذة تتبّع الإحالة مؤكّدة في لوحة تحكّمك',
  },
  'aff_comp.public.what_you_get.perk3': {
    en: 'Designed banner pack and screenshot library',
    ar: 'حزمة بنرات مصمّمة ومكتبة لقطات شاشة',
  },
  'aff_comp.public.what_you_get.perk4': {
    en: 'Pre-written email and social copy',
    ar: 'نصوص إيميل وسوشال جاهزة',
  },
  'aff_comp.public.what_you_get.perk5': {
    en: 'Real-time dashboard with referral attribution',
    ar: 'لوحة تحكّم لحظية مع إسناد الإحالات',
  },
  'aff_comp.public.what_you_get.perk6': {
    en: 'Monthly creator newsletter and quarterly partner call',
    ar: 'نشرة شهرية لصنّاع المحتوى ومكالمة شركاء كل ربع سنة',
  },

  /* ─── FAQ ──────────────────────────────────────────────────── */
  'aff_comp.public.faq.heading': {
    en: 'Frequently asked questions',
    ar: 'الأسئلة الشائعة',
  },
  'aff_comp.public.faq.q1.q': {
    en: 'Do I have to be a teacher to join?',
    ar: 'لازم أكون معلّم عشان أنضم؟',
  },
  'aff_comp.public.faq.q1.a': {
    en: 'You must be 18 or over to join. Beyond that, the programme is open to anyone with a relevant audience, including educators, tutors, parent communities, content creators and education websites. There are no follower or traffic minimums. We simply ask that promotion is honest and that The English Hub is presented as an independent platform that is exam-board aligned but not endorsed by any exam board.',
    ar: 'لازم يكون عمرك 18 سنة أو أكثر عشان تنضم. وزيادة على هذا، البرنامج مفتوح لأي واحد عنده جمهور مناسب - معلّمين، مدرّسين خصوصيين، مجتمعات أهالي، صنّاع محتوى، ومواقع تعليمية. ما في حد أدنى للمتابعين أو الزيارات. كل اللي نطلبه إن الترويج يكون صادق، وإن The English Hub تنعرض كمنصّة مستقلّة متوافقة مع مجالس الامتحانات بس مو معتمدة من أي مجلس امتحانات.',
  },
  'aff_comp.public.faq.q2.q': {
    en: 'How long does it take to be approved?',
    ar: 'كم ياخذ وقت لين يتم القبول؟',
  },
  'aff_comp.public.faq.q2.a': {
    en: 'Create an account or sign in, then submit the short partner application describing your audience. Once approved, your partner dashboard unlocks instantly with a unique referral link, a code to share, marketing assets and real-time tracking. Most applications are reviewed quickly so you can start sharing without long delays.',
    ar: 'سوِّ حساب أو سجّل دخولك، عقبها قدّم طلب الشراكة القصير واوصف فيه جمهورك. عقب القبول، تنفتح لك لوحة تحكّم الشريك على طول مع رابط إحالة خاص، وكود تنشره، ومواد تسويقية، وتتبّع لحظي. أغلب الطلبات تنراجع بسرعة عشان تبدأ تنشر بدون تأخير طويل.',
  },
  'aff_comp.public.faq.q3.q': {
    en: 'What happens if my audience is mainly outside the UK?',
    ar: 'وش يصير لو جمهوري أغلبه برّا بريطانيا؟',
  },
  'aff_comp.public.faq.q3.a': {
    en: 'Payouts are made monthly once your balance reaches the minimum threshold shown in your dashboard. Commission is confirmed after the referred annual subscription completes its standard refund window, which protects both partners and the programme. Your dashboard always shows pending and confirmed earnings clearly.',
    ar: 'المدفوعات تنصرف شهرياً أوّل ما رصيدك يوصل الحد الأدنى المبيّن في لوحة التحكّم. العمولة تتأكّد عقب ما الاشتراك السنوي اللي جاء عن طريقك يكمّل فترة الاسترداد الاعتيادية، وهذا يحمي الشركاء والبرنامج. لوحة تحكّمك تبيّن لك دايماً الأرباح المعلّقة والمؤكّدة بوضوح.',
  },
  'aff_comp.public.faq.q4.q': {
    en: 'Can I promote on TikTok / Instagram / YouTube?',
    ar: 'أقدر أروّج على TikTok / Instagram / YouTube؟',
  },
  'aff_comp.public.faq.q4.a': {
    en: 'Referrals are tracked with a cookie that starts from the first click on your link, so someone who clicks today and subscribes later is still credited to you. The exact tracking window is one set of terms, confirmed in your partner dashboard.',
    ar: 'الإحالات تنتتبّع بكوكي يبدأ من أول ضغطة على رابطك، فاللي يضغط اليوم ويشترك عقب فترة تنحسب لك. مدّة التتبّع بالضبط ضمن مجموعة شروط واحدة، ومؤكّدة في لوحة تحكّم الشريك حقّتك.',
  },
  'aff_comp.public.faq.q5.q': {
    en: 'Is the program available worldwide?',
    ar: 'هل البرنامج متوفّر بالعالم كلّه؟',
  },
  'aff_comp.public.faq.q5.a': {
    en: 'There is one programme with one set of terms. Everyone starts earning from their very first signup, and the commission rate that applies to you, along with your real verified referrals and earnings, is always visible in your partner dashboard.',
    ar: 'في برنامج واحد بمجموعة شروط واحدة. الكل يبدأ يكسب من أول تسجيل، ونسبة العمولة اللي تنطبّق عليك، مع إحالاتك وأرباحك الحقيقية الموثّقة، تبيّن لك دايماً في لوحة تحكّم الشريك حقّتك.',
  },
  'aff_comp.public.faq.q6.q': {
    en: 'Do you offer custom landing pages for high-volume affiliates?',
    ar: 'تقدّمون صفحات هبوط مخصّصة للمسوّقين أصحاب الإحالات الكثيرة؟',
  },
  'aff_comp.public.faq.q6.a': {
    en: 'Your dashboard shows clicks on your link, sign-ups, completed annual subscriptions, pending and confirmed commission, and your current tier, all updated in real time. This gives you a clear, transparent view of how your referrals are performing at any moment.',
    ar: 'لوحة تحكّمك تبيّن لك الضغطات على رابطك، والتسجيلات، والاشتراكات السنوية المكتملة، والعمولة المعلّقة والمؤكّدة، ومستواك الحالي - كلّها تتحدّث لحظياً. هذا يعطيك صورة واضحة وشفّافة عن أداء إحالاتك بأي لحظة.',
  },
  'aff_comp.public.faq.q7.q': {
    en: 'What happens if a referred customer cancels?',
    ar: 'وش يصير لو عميل جاء عن طريقي ألغى اشتراكه؟',
  },
  'aff_comp.public.faq.q7.a': {
    en: 'Once your confirmed balance reaches the minimum payout threshold, earnings are paid out monthly using the payment details you set in your dashboard. You can track exactly when commission moves from pending to confirmed, so there are no surprises about what you will be paid and when.',
    ar: 'أوّل ما رصيدك المؤكّد يوصل الحد الأدنى للسحب، الأرباح تنصرف شهرياً على بيانات الدفع اللي حطّيتها في لوحة التحكّم. تقدر تتابع بالضبط متى تنتقل العمولة من معلّقة لمؤكّدة، فما في أي مفاجآت بخصوص كم بيوصلك ومتى.',
  },
  'aff_comp.public.faq.q8.q': {
    en: 'Where can I see my referrals and earnings?',
    ar: 'وين أقدر أشوف إحالاتي وأرباحي؟',
  },
  'aff_comp.public.faq.q8.a': {
    en: 'Every partner has access to support by email, plus marketing assets and guidance to help you promote effectively. As your referral volume grows you unlock priority support and, at the top tier, a dedicated partner manager to help you get the most from the programme.',
    ar: 'كل شريك عنده دعم عن طريق الإيميل، زيادة على مواد تسويقية وإرشادات تساعدك تروّج بفعالية. كل ما يكبر عدد إحالاتك، يفتح لك دعم بأولوية، وفي أعلى مستوى مدير شركاء مخصّص يساعدك تستفيد من البرنامج لأقصى حد.',
  },

  /* ─── Apply ────────────────────────────────────────────────── */
  'aff_comp.public.apply.heading': {
    en: 'Become a partner',
    ar: 'صير شريك',
  },
  'aff_comp.public.apply.subheading_logged_in': {
    en: 'You are signed in and ready to go. Generate your referral code and start sharing The English Hub today.',
    ar: 'أنت مسجّل دخولك وكل شي جاهز. ولّد كود الإحالة حقّك وابدأ تنشر The English Hub من اليوم.',
  },
  'aff_comp.public.apply.subheading_logged_out': {
    en: 'Create an account or sign in to generate your referral code and join the partner programme.',
    ar: 'سوِّ حساب أو سجّل دخولك عشان تولّد كود الإحالة حقّك وتنضم لبرنامج الشركاء.',
  },
  'aff_comp.public.apply.annual_only_note_lead': {
    en: 'Good to know',
    ar: 'زين تعرف',
  },
  'aff_comp.public.apply.annual_only_note_body': {
    en: 'Commission applies to referred annual subscriptions. Referrals are tracked from the first click, so you are credited even if someone subscribes later. One programme, one set of terms - confirmed in your dashboard.',
    ar: 'العمولة تنطبّق على الاشتراكات السنوية اللي تجي عن طريقك. الإحالات تنتتبّع من أول ضغطة، فتنحسب لك حتى لو الواحد اشترك عقب فترة. برنامج واحد، مجموعة شروط واحدة - مؤكّدة في لوحة تحكّمك.',
  },
  'aff_comp.public.apply.signin_first': {
    en: 'Sign in first',
    ar: 'سجّل دخولك أوّل',
  },
  'aff_comp.public.apply.signin_blurb': {
    en: 'You need an account to generate your referral code and access your partner dashboard. It only takes a moment.',
    ar: 'تحتاج حساب عشان تولّد كود الإحالة حقّك وتدخل لوحة تحكّم الشريك. ما تاخذ إلا لحظة.',
  },
  'aff_comp.public.apply.create_account': {
    en: 'Create an account',
    ar: 'سوِّ حساب',
  },
  'aff_comp.public.apply.sign_in': {
    en: 'Sign in',
    ar: 'سجّل دخولك',
  },

  /* ─── Programme basics ─────────────────────────────────────── */
  'aff_comp.public.basics.heading': {
    en: 'Programme basics',
    ar: 'أساسيات البرنامج',
  },
  'aff_comp.public.basics.attribution.title': {
    en: 'Click attribution',
    ar: 'إسناد الضغطة',
  },
  'aff_comp.public.basics.attribution.desc': {
    en: 'A cookie tracks each referral from the first click, so you are credited even when someone subscribes later. The tracking window is one set of terms, confirmed in your dashboard.',
    ar: 'كوكي يتتبّع كل إحالة من أول ضغطة، فتنحسب لك حتى لو الواحد اشترك عقب فترة. مدّة التتبّع ضمن مجموعة شروط واحدة، مؤكّدة في لوحة تحكّمك.',
  },
  'aff_comp.public.basics.min_payout.title': {
    en: 'Low minimum payout',
    ar: 'حد أدنى منخفض للسحب',
  },
  'aff_comp.public.basics.min_payout.desc': {
    en: 'Reach a modest payout threshold and receive your earnings on a monthly schedule, with the current minimum shown in your dashboard.',
    ar: 'اوصل حد سحب بسيط واستلم أرباحك على جدول شهري، والحد الأدنى الحالي مبيّن لك في لوحة التحكّم.',
  },
  'aff_comp.public.basics.ltv.title': {
    en: 'Recurring lifetime value',
    ar: 'قيمة متكرّرة مدى الحياة',
  },
  'aff_comp.public.basics.ltv.desc': {
    en: 'Commission keeps paying for as long as your referral stays subscribed, so each referral can earn well beyond the first year.',
    ar: 'العمولة تستمر تنصرف لك طول ما إحالتك باقية مشتركة، فكل إحالة ممكن تكسب لك أكثر بوايد من السنة الأولى.',
  },
  'aff_comp.public.basics.commission.title': {
    en: 'Recurring commission',
    ar: 'عمولة متكرّرة',
  },
  'aff_comp.public.basics.commission.desc': {
    en: 'Earn recurring commission on every referred annual plan. One programme, one set of terms; your dashboard shows your real verified referrals and earnings.',
    ar: 'اكسب عمولة متكرّرة على كل خطّة سنوية تجي عن طريقك. برنامج واحد، مجموعة شروط واحدة؛ لوحة تحكّمك تبيّن إحالاتك وأرباحك الحقيقية الموثّقة.',
  },

  /* ─── Bottom CTA ───────────────────────────────────────────── */
  'aff_comp.public.bottom_cta.heading': {
    en: 'Ready to start earning',
    ar: 'جاهز تبدأ تكسب',
  },
  'aff_comp.public.bottom_cta.body': {
    en: 'Join the partner programme, share The English Hub with the people who trust your recommendations, and earn recurring commission on every annual subscription you refer.',
    ar: 'انضم لبرنامج الشركاء، وانشر The English Hub مع الناس اللي يثقون بترشيحاتك، واكسب عمولة متكرّرة على كل اشتراك سنوي يجي عن طريقك.',
  },
  'aff_comp.public.bottom_cta.button': {
    en: 'Get your referral code',
    ar: 'احصل على كود الإحالة حقّك',
  },

  /* ─── Post templates (EN inferred from PostTemplates context) ── */
  'aff_comp.public.templates.heading': {
    en: 'Starter post templates',
    ar: 'قوالب منشورات للبداية',
  },
  'aff_comp.public.templates.intro_part1': {
    en: 'Copy, tweak and post these on your channels. Always keep the',
    ar: 'انسخها، عدّلها، وانشرها على قنواتك. خلّ دايماً وسم',
  },
  'aff_comp.public.templates.intro_part2': {
    en: 'disclosure so your audience knows it is a paid partnership.',
    ar: 'موجود عشان جمهورك يعرف إنها شراكة مدفوعة.',
  },
  'aff_comp.public.templates.disclosure_title': {
    en: 'Disclosure is required',
    ar: 'الإفصاح مطلوب',
  },
  'aff_comp.public.templates.disclosure_body_part1': {
    en: 'must be clearly visible whenever you promote with your referral link or code.',
    ar: 'لازم يكون واضح وبيّن كل ما تروّج برابط الإحالة أو الكود حقّك.',
  },
  'aff_comp.public.templates.disclosure_body_part2': {
    en: 'Put the',
    ar: 'حُط',
  },
  'aff_comp.public.templates.disclosure_body_part3': {
    en: 'label where people can see it before they click - not buried in hashtags or hidden in a "more" link.',
    ar: 'الوسم في مكان يشوفه الناس قبل ما يضغطون - مو مدفون بين الهاشتاقات ولا مخبّى في رابط «المزيد».',
  },
}
