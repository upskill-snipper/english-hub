// ─── IELTS UK Readiness dictionary shard ───────────────────────────────────
// Covers three previously hard-coded English surfaces so they translate when
// the site switches to Arabic:
//   • ielts.ukread.*  - the UK Readiness programme overview page
//   • pricing.ielts.* - the standalone IELTS Band Booster card on /pricing
//   • ielts.hub.more.* - the stray "Model answers" card on the IELTS hub
// Khaleeji (Gulf) Arabic per the master dictionary. Brand/technical terms
// (IELTS, UCAS, CAS, ATAS, TB test, Band, UKVI, PDF, Student visa, £/numbers)
// stay in Latin script, woven into the Arabic sentence.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const IELTS_UKREADINESS_DICTIONARY: Record<
  string,
  { en: string; ar?: string; es?: string }
> = {
  // ── UK Readiness overview: header / chrome ────────────────────────────────
  'ielts.ukread.back': { en: 'Back to IELTS', ar: 'ارجع لـ IELTS' },
  'ielts.ukread.eyebrow': {
    en: 'IELTS plan · UK Readiness programme',
    ar: 'خطة IELTS · برنامج UK Readiness',
  },
  'ielts.ukread.h1': {
    en: 'Your route to studying in the UK, in four parts',
    ar: 'طريقك للدراسة في UK، على أربع مراحل',
  },
  'ielts.ukread.intro': {
    en: 'Getting to a UK university is more than an IELTS score. This programme breaks readiness into four domains — your English, your application, your visa & finance, and the move itself — and gives you a tool for each. Work through them in order, then pull everything together into one Readiness Report.',
    ar: 'الوصول لجامعة في UK أكثر من مجرد درجة IELTS. هالبرنامج يقسّم جاهزيتك على أربع مجالات — لغتك الإنجليزية، طلبك للجامعة، الـ visa والتمويل، والانتقال نفسه — ويعطيك أداة لكل واحد منها. روح فيها بالترتيب، وبعدها اجمع كل شي بتقرير Readiness واحد.',
  },

  // ── Domain: English readiness ─────────────────────────────────────────────
  'ielts.ukread.english.title': { en: 'English readiness', ar: 'جاهزية اللغة الإنجليزية' },
  'ielts.ukread.english.summary': {
    en: 'Can your English meet the band your course and visa require — across all four skills, not just on average?',
    ar: 'هل لغتك الإنجليزية توصل للـ Band اللي يطلبه تخصصك والـ visa — بكل المهارات الأربع، مو بس بالمعدل؟',
  },
  'ielts.ukread.english.cta': { en: 'Take the diagnostic', ar: 'خذ الاختبار التشخيصي' },
  'ielts.ukread.english.ready.0': {
    en: 'You hit (or exceed) the overall band your offer asks for, AND no single skill falls below the per-skill minimum the university or UKVI sets.',
    ar: 'توصل (أو تتعدّى) الـ Band الكلي اللي يطلبه عرضك، وما تنزل أي مهارة عن الحد الأدنى اللي تحدده الجامعة أو UKVI لكل مهارة.',
  },
  'ielts.ukread.english.ready.1': {
    en: 'Your bands are consistent across attempts, not a lucky one-off — Writing and Speaking are usually the deciding skills.',
    ar: 'درجاتك في الـ Band ثابتة بكل المحاولات، مو ضربة حظ مرة وحدة — عادةً Writing وSpeaking هي المهارات اللي تحسم.',
  },
  'ielts.ukread.english.ready.2': {
    en: 'You can handle the test format under time pressure, not just the language in isolation.',
    ar: 'تقدر تتعامل مع شكل الاختبار تحت ضغط الوقت، مو بس اللغة لحالها.',
  },
  'ielts.ukread.english.gaps.0': {
    en: 'A strong average that hides one weak skill (often Writing) below the required floor.',
    ar: 'معدل قوي يخبّي مهارة ضعيفة وحدة (غالباً Writing) تحت الحد المطلوب.',
  },
  'ielts.ukread.english.gaps.1': {
    en: 'Relying on a score that is close but not yet repeatable.',
    ar: 'تعتمد على درجة قريبة بس ما تقدر تكررها بعد.',
  },
  'ielts.ukread.english.gaps.2': {
    en: 'Practising language without practising the exam conditions and timing.',
    ar: 'تتدرّب على اللغة بدون ما تتدرّب على ظروف الامتحان وتوقيته.',
  },
  'ielts.ukread.english.next': {
    en: 'Start with the diagnostic to see your current band per skill, then use the targeted practice and AI feedback in Writing and Speaking to close the weakest gap first.',
    ar: 'ابدأ بالاختبار التشخيصي عشان تشوف الـ Band الحالي لكل مهارة، وبعدها استخدم التمارين الموجّهة وتقييم الذكاء الاصطناعي في Writing وSpeaking عشان تسكّر أضعف ثغرة أول.',
  },

  // ── Domain: Application readiness ──────────────────────────────────────────
  'ielts.ukread.application.title': { en: 'Application readiness', ar: 'جاهزية الطلب الجامعي' },
  'ielts.ukread.application.summary': {
    en: 'Is your UCAS application — personal statement, references and choices — strong enough to convert offers?',
    ar: 'هل طلبك في UCAS — الـ personal statement والتزكيات والاختيارات — قوي كفاية عشان يحوّل العروض لقبول؟',
  },
  'ielts.ukread.application.cta': { en: 'Open the UCAS coach', ar: 'افتح مدرّب UCAS' },
  'ielts.ukread.application.ready.0': {
    en: 'Your personal statement leads with a specific, evidenced motivation for the subject, not generic enthusiasm.',
    ar: 'الـ personal statement حقك يبدأ بدافع محدد ومدعوم بالأدلة للتخصص، مو حماس عام.',
  },
  'ielts.ukread.application.ready.1': {
    en: 'Every claim is backed by something concrete — a project, a book, work experience, a result.',
    ar: 'كل ادّعاء مدعوم بشي ملموس — مشروع، كتاب، خبرة عمل، نتيجة.',
  },
  'ielts.ukread.application.ready.2': {
    en: 'Your course and university choices are realistic against your predicted/achieved grades, with a sensible spread.',
    ar: 'اختياراتك للتخصص والجامعة واقعية مقارنة بدرجاتك المتوقعة/المحققة، وموزّعة بشكل منطقي.',
  },
  'ielts.ukread.application.ready.3': {
    en: 'Deadlines, references and supporting documents are tracked and submitted on time.',
    ar: 'المواعيد النهائية والتزكيات والمستندات الداعمة متابَعة ومقدَّمة في وقتها.',
  },
  'ielts.ukread.application.gaps.0': {
    en: 'A statement full of clichés ("I have always been passionate…") with no evidence.',
    ar: 'statement مليان عبارات مكررة ("I have always been passionate…") بدون أي دليل.',
  },
  'ielts.ukread.application.gaps.1': {
    en: 'Writing about the country or city rather than the course and your fit for it.',
    ar: 'تكتب عن الدولة أو المدينة بدل التخصص ومدى مناسبتك له.',
  },
  'ielts.ukread.application.gaps.2': {
    en: 'All five choices clustered at the same competitiveness, leaving no safety net.',
    ar: 'كل الاختيارات الخمسة بنفس مستوى التنافسية، بدون أي شبكة أمان.',
  },
  'ielts.ukread.application.gaps.3': {
    en: 'Leaving the statement to the last minute, so there is no time to redraft.',
    ar: 'تأجّل الـ statement لآخر لحظة، فما يبقى وقت تعيد صياغته.',
  },
  'ielts.ukread.application.next': {
    en: 'Use the UCAS personal-statement coach to structure and sharpen your statement, then sense-check your five choices against your predicted grades.',
    ar: 'استخدم مدرّب الـ personal statement في UCAS عشان ترتّب وتقوّي نصّك، وبعدها راجع اختياراتك الخمسة مقابل درجاتك المتوقعة.',
  },

  // ── Domain: Visa & finance readiness ──────────────────────────────────────
  'ielts.ukread.visa.title': { en: 'Visa & finance readiness', ar: 'جاهزية الـ visa والتمويل' },
  'ielts.ukread.visa.summary': {
    en: 'Can you actually apply for the Student visa — maintenance funds, the 28-day rule, CAS, TB test and ATAS?',
    ar: 'هل تقدر فعلاً تقدّم على Student visa — أموال الإعاشة، قاعدة الـ 28 يوم، CAS، TB test وATAS؟',
  },
  'ielts.ukread.visa.cta': { en: 'Open the checklist', ar: 'افتح القائمة' },

  // ── Domain: Academic transition readiness ─────────────────────────────────
  'ielts.ukread.transition.title': {
    en: 'Academic transition readiness',
    ar: 'جاهزية الانتقال الأكاديمي',
  },
  'ielts.ukread.transition.summary': {
    en: 'Are you ready for how UK study actually works — academic writing, lectures, independent study, budgeting and living away?',
    ar: 'هل أنت مستعد لطريقة الدراسة في UK فعلاً — الكتابة الأكاديمية، المحاضرات، الدراسة المستقلة، الميزانية، والعيش بعيد عن البيت؟',
  },
  'ielts.ukread.transition.cta': { en: 'Start the modules', ar: 'ابدأ الوحدات' },

  // ── Domain section labels ─────────────────────────────────────────────────
  // "Step {n} of 4" - whole sentence with a token so Arabic word order works.
  'ielts.ukread.step': { en: 'Step {n} of 4', ar: 'الخطوة {n} من 4' },
  'ielts.ukread.ready_label': { en: 'What "ready" looks like', ar: 'شكل "الجاهزية"' },
  'ielts.ukread.gaps_label': { en: 'Common gaps', ar: 'الثغرات الشائعة' },
  'ielts.ukread.next_label': { en: 'Your next step: ', ar: 'خطوتك الجاية: ' },
  'ielts.ukread.fallback': {
    en: 'This domain has its own guided tool — open it above to work through the checks step by step. Your progress there feeds straight into your Readiness Report.',
    ar: 'هالمجال له أداة موجّهة خاصة فيه — افتحها فوق عشان تمشي على الفحوصات خطوة بخطوة. تقدّمك هناك يروح مباشرة لتقرير Readiness حقك.',
  },

  // ── The Report block ──────────────────────────────────────────────────────
  'ielts.ukread.report.eyebrow': { en: 'Pull it together', ar: 'اجمع كل شي' },
  'ielts.ukread.report.heading': {
    en: 'Your UK Candidate Readiness Report',
    ar: 'تقرير UK Candidate Readiness حقك',
  },
  'ielts.ukread.report.body': {
    en: 'The report rolls all four domains into one traffic-light view, flags the red flags that could stop you, and gives you a 7/30/60-day action plan you can export to PDF. Each tool above feeds straight into it.',
    ar: 'التقرير يجمع المجالات الأربعة في عرض واحد بإشارات المرور، يبيّن العلامات الحمراء اللي ممكن توقفك، ويعطيك خطة عمل لـ 7/30/60 يوم تقدر تصدّرها PDF. كل أداة فوق تغذّيه مباشرة.',
  },
  'ielts.ukread.report.cta': { en: 'Build my report', ar: 'سوّ تقريري' },

  // ── Cross-link to model answers ───────────────────────────────────────────
  'ielts.ukread.cross.heading': {
    en: 'Want to see what each band looks like?',
    ar: 'تبغى تشوف شكل كل Band؟',
  },
  'ielts.ukread.cross.body': {
    en: 'Compare band-6.5 and band-8 model answers for Writing and Speaking, with notes on what lifts each one up the scale.',
    ar: 'قارن نماذج إجابات Band 6.5 وBand 8 لـ Writing وSpeaking، مع ملاحظات عن اللي يرفع كل وحدة بالسلّم.',
  },
  'ielts.ukread.cross.cta': { en: 'View model answers', ar: 'شوف نماذج الإجابات' },

  // ── Pricing: IELTS Band Booster card ──────────────────────────────────────
  'pricing.ielts.title': { en: 'IELTS Band Booster', ar: 'IELTS Band Booster' },
  'pricing.ielts.subtitle': {
    en: 'Adult exam prep with unlimited examiner-calibrated AI band feedback',
    ar: 'تحضير للامتحان للكبار مع تقييم Band غير محدود بالذكاء الاصطناعي معاير على المصححين',
  },
  'pricing.ielts.trial_line': {
    en: '{days}-day free trial · cancel anytime',
    ar: 'تجربة ببلاش {days} يوم · سكّر أي وقت',
  },
  'pricing.ielts.included': { en: "What's included", ar: 'شنو يشمل' },
  'pricing.ielts.feat.writing': {
    en: 'Unlimited AI Writing band feedback',
    ar: 'تقييم Band غير محدود لـ Writing بالذكاء الاصطناعي',
  },
  'pricing.ielts.feat.speaking': {
    en: 'Unlimited AI Speaking band feedback',
    ar: 'تقييم Band غير محدود لـ Speaking بالذكاء الاصطناعي',
  },
  'pricing.ielts.feat.calibrated': {
    en: 'Examiner-calibrated to IELTS band descriptors',
    ar: 'معاير على المصححين حسب واصفات Band في IELTS',
  },
  'pricing.ielts.feat.models': {
    en: 'Model answers & improvement tips',
    ar: 'نماذج إجابات ونصائح للتحسين',
  },
  'pricing.ielts.feat.trial': {
    en: '{days}-day free trial, cancel anytime',
    ar: 'تجربة ببلاش {days} يوم، سكّر أي وقت',
  },
  'pricing.ielts.cta.monthly': {
    en: 'Start free trial — {currency}{price}/mo',
    ar: 'ابدأ التجربة ببلاش — {currency}{price}/شهر',
  },
  'pricing.ielts.cta.annual': {
    en: 'Or pay annually — {currency}{price}/year',
    ar: 'أو ادفع سنوي — {currency}{price}/سنة',
  },
  'pricing.ielts.footer': {
    en: 'Separate from Student & Teacher plans · adult IELTS exam prep',
    ar: 'منفصلة عن خطط Student وTeacher · تحضير امتحان IELTS للكبار',
  },

  // ── IELTS hub: stray "Model answers" card ─────────────────────────────────
  'ielts.hub.more.modelanswers.title': { en: 'Model answers', ar: 'نماذج الإجابات' },
  'ielts.hub.more.modelanswers.body': {
    en: 'Band-6.5 and band-8 sample answers for Writing and Speaking, with notes on what lifts each one up the scale.',
    ar: 'نماذج إجابات Band 6.5 وBand 8 لـ Writing وSpeaking، مع ملاحظات عن اللي يرفع كل وحدة بالسلّم.',
  },
}
