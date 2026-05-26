// ─────────────────────────────────────────────────────────────────────────────
// dictionary-misc-t1.ts - Bucket A wave 6 (EN + Khaleeji AR)
//
// Namespaces covered:
//   • alevel.*       - A-Level board hub + per-board (AQA / Edexcel) pages
//   • affiliates.*   - authed /affiliates/* portal metadata + public landing
//                      metadata (the `affiliates.*` keyspace consumed by
//                      src/app/affiliates/{page,dashboard,payouts,resources,
//                      settings}). NOT the separate `aff_comp.public.*`
//                      keyspace, which was completed in an earlier wave.
//   • resources.study_tools.* - the audit-fix tail (keys 121-149) for the
//                      study-tools sub-apps (checklists / flashcards /
//                      revision-planner / quote-tester / tester).
//
// EN provenance:
//   - alevel.board.*            → copied verbatim from
//                                 dictionary-placeholder-fix-may15.ts
//   - alevel.hub.badge.uk_a_level → copied verbatim from
//                                 dictionary-screenshot-fixes.ts (ar === en)
//   - affiliates.breadcrumb.*   → copied verbatim from
//     affiliates.public.meta.*    dictionary-report-fix-may16b.ts
//   - alevel.{aqa,edexcel}.*    → written fresh from the consuming pages
//   - affiliates.{dashboard,    → written fresh from the consuming pages
//     payouts,resources,
//     settings}.meta.*
//   - resources.study_tools.*   → written fresh from the consuming
//     (audit-fix tail)            study-tools components
//
// AR register: natural Khaleeji (Gulf) - the voice of src/lib/eal/
// curriculum.ts. Exam terminology kept accurate; brand and proper nouns
// (AQA, Pearson Edexcel, OCR, WJEC Eduqas, The English Hub) left as-is.
// ─────────────────────────────────────────────────────────────────────────────

export const MISC_T1_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── A-Level board cards (/a-level) - verbatim from may15 ───────────────────
  'alevel.board.aqa.name': { en: 'AQA A-level English', ar: 'AQA A-level إنجليزي' },
  'alevel.board.aqa.description': {
    en: 'AS and A-level English Literature and Language - paper-specific revision, set-text breakdowns, and full past-paper walkthroughs.',
    ar: 'AS و A-level English Literature and Language - مراجعة خاصة بكل ورقة، وتفصيل للنصوص المقررة، وشرح كامل للأوراق السابقة.',
  },
  'alevel.board.edexcel.name': {
    en: 'Pearson Edexcel A-level English',
    ar: 'Pearson Edexcel A-level إنجليزي',
  },
  'alevel.board.edexcel.description': {
    en: 'Pearson Edexcel A-level English Literature and Language - focused revision against the specification and exemplar A* answers.',
    ar: 'Pearson Edexcel A-level English Literature and Language - مراجعة مركّزة على المنهج المقرر مع إجابات نموذجية بمستوى A*.',
  },
  'alevel.board.ocr.name': { en: 'OCR A-level English', ar: 'OCR A-level إنجليزي' },
  'alevel.board.ocr.description': {
    en: 'OCR A-level English Literature and Language - examiner-aligned analysis and structure for the closed-book papers.',
    ar: 'OCR A-level English Literature and Language - تحليل وهيكلة متوافقة مع المصحّح للأوراق المغلقة (closed-book).',
  },
  'alevel.board.eduqas.name': { en: 'Eduqas A-level English', ar: 'Eduqas A-level إنجليزي' },
  'alevel.board.eduqas.description': {
    en: 'WJEC Eduqas A-level English Literature and Language - coverage of the prescribed pre-1900 and post-1900 texts plus unseen practice.',
    ar: 'WJEC Eduqas A-level English Literature and Language - تغطية للنصوص المقررة قبل ١٩٠٠ وبعد ١٩٠٠ مع تمارين على النصوص غير المرئية.',
  },

  // ─── A-Level hub badge - verbatim from screenshot-fixes (ar === en) ─────────
  'alevel.hub.badge.uk_a_level': { en: 'UK A-Level', ar: 'UK A-Level' },

  // ─── A-Level per-board pages (/a-level/{aqa,edexcel}) - fresh EN ────────────
  // Rendered as the <h1> board title + hero teaser paragraph in
  // ALevelBoardHub. Exam codes are passed separately (not in these strings).
  'alevel.aqa.board_name': {
    en: 'AQA A-Level English',
    ar: 'AQA A-Level إنجليزي',
  },
  'alevel.aqa.summary': {
    en: 'Revision for AQA A-Level English Literature and Language. Use the cross-board set-text analysis, essay technique and language-study tools below while full AQA A-Level guides are on our roadmap.',
    ar: 'مراجعة لمادة AQA A-Level English Literature and Language. استخدم أدوات تحليل النصوص المقررة وتقنية المقال ودراسة اللغة المشتركة بين البوردات تحت، لين ما تنزل أدلة AQA A-Level الكاملة - هي على خريطة الطريق مالنا.',
  },
  'alevel.edexcel.board_name': {
    en: 'Pearson Edexcel A-Level English',
    ar: 'Pearson Edexcel A-Level إنجليزي',
  },
  'alevel.edexcel.summary': {
    en: 'Revision for Pearson Edexcel A-Level English Literature and Language. Use the cross-board set-text analysis, essay technique and language-study tools below while full Edexcel A-Level guides are on our roadmap.',
    ar: 'مراجعة لمادة Pearson Edexcel A-Level English Literature and Language. استخدم أدوات تحليل النصوص المقررة وتقنية المقال ودراسة اللغة المشتركة بين البوردات تحت، لين ما تنزل أدلة Edexcel A-Level الكاملة - هي على خريطة الطريق مالنا.',
  },

  // ─── /affiliates breadcrumbs - verbatim from report-fix-may16b ──────────────
  'affiliates.breadcrumb.home': { en: 'Home', ar: 'الرئيسية' },
  'affiliates.breadcrumb.self': { en: 'Affiliates', ar: 'الشركاء' },

  // ─── /affiliates public landing metadata - verbatim from report-fix-may16b ──
  // NOTE: title is fed through the root metadata title.template
  // ('%s - The English Hub'), so it must NOT contain the brand itself.
  'affiliates.public.meta.title': {
    en: 'Affiliate Programme - Earn Recurring Commission for Partners',
    ar: 'برنامج الشركاء - اكسب عمولة متكررة للشركاء',
  },
  'affiliates.public.meta.description': {
    en: 'Join The English Hub partner programme and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English learning. 90-day tracking, monthly payouts, no minimum traffic.',
    ar: 'انضمّ لبرنامج شركاء The English Hub واكسب عمولة متكررة على كل اشتراك سنوي تحيله. تعلّم إنجليزي مستقل ومتوافق مع بوردات الامتحانات لـ GCSE و IGCSE و KS3 و EAL. تتبّع لمدة ٩٠ يوم، ومدفوعات شهرية، وبدون حد أدنى للزيارات.',
  },
  'affiliates.public.meta.og_image_alt': {
    en: 'The English Hub affiliate programme',
    ar: 'برنامج شركاء The English Hub',
  },

  // ─── /affiliates authed portal metadata - fresh EN ─────────────────────────
  // Document <title>s; fed through the root title.template
  // ('%s - The English Hub'), so they must NOT repeat the brand.
  'affiliates.dashboard.meta.title': {
    en: 'Affiliate Dashboard',
    ar: 'لوحة الشريك',
  },
  'affiliates.payouts.meta.title': {
    en: 'Affiliate Payouts',
    ar: 'مدفوعات الشريك',
  },
  'affiliates.resources.meta.title': {
    en: 'Affiliate Resources',
    ar: 'موارد الشريك',
  },
  'affiliates.resources.meta.description': {
    en: 'Referral links, promo codes and ready-made marketing assets for The English Hub affiliate partners.',
    ar: 'روابط الإحالة وأكواد الخصم وأصول تسويق جاهزة لشركاء برنامج الإحالة مال The English Hub.',
  },
  'affiliates.settings.meta.title': {
    en: 'Affiliate Settings',
    ar: 'إعدادات الشريك',
  },

  // ─── resources.study_tools.* - audit-fix tail (fresh EN) ───────────────────

  // Checklists sub-app (/resources/study-tools/checklists)
  'resources.study_tools.checklists.title': {
    en: 'Revision Checklists',
    ar: 'قوائم المراجعة',
  },
  'resources.study_tools.checklists.subtitle': {
    en: 'Tick off every skill and topic as you cover it. Your progress is saved on this device so you can pick up where you left off.',
    ar: 'أشّر على كل مهارة وموضوع أول ما تخلّصه. تقدّمك ينحفظ على هذا الجهاز عشان تكمّل من وين وقفت.',
  },
  'resources.study_tools.checklists.of': {
    en: 'of',
    ar: 'من',
  },
  'resources.study_tools.checklists.skills_covered': {
    en: 'skills covered',
    ar: 'مهارة تمّت تغطيتها',
  },
  'resources.study_tools.checklists.clear_all': {
    en: 'Clear all',
    ar: 'مسح الكل',
  },
  'resources.study_tools.checklists.tip.title': {
    en: 'How to use this checklist',
    ar: 'كيف تستخدم هذي القائمة',
  },
  'resources.study_tools.checklists.tip.confident.label': {
    en: 'Be honest:',
    ar: 'خلّك صادق:',
  },
  'resources.study_tools.checklists.tip.confident.body': {
    en: 'only tick a skill once you could explain it or do it in an exam without notes.',
    ar: 'لا تأشّر على المهارة إلا لمّا تقدر تشرحها أو تطبّقها في الامتحان بدون ملاحظات.',
  },
  'resources.study_tools.checklists.tip.prioritise.label': {
    en: 'Prioritise:',
    ar: 'رتّب الأولويات:',
  },
  'resources.study_tools.checklists.tip.prioritise.body': {
    en: 'the unticked items show you exactly what to revise next - start there.',
    ar: 'العناصر اللي ما أشّرت عليها تبيّن لك بالضبط وش تراجع بعدها - ابدأ من هني.',
  },
  'resources.study_tools.checklists.tip.revisit.label': {
    en: 'Revisit:',
    ar: 'راجع مرّة ثانية:',
  },
  'resources.study_tools.checklists.tip.revisit.body': {
    en: 'come back a week later and re-test the skills you ticked - keep the ones that still hold.',
    ar: 'ارجع بعد أسبوع واختبر نفسك بالمهارات اللي أشّرت عليها - خلّ اللي لسّه راسخة.',
  },
  'resources.study_tools.checklists.tip.saved.label': {
    en: 'Saved automatically:',
    ar: 'ينحفظ تلقائياً:',
  },
  'resources.study_tools.checklists.tip.saved.body': {
    en: 'your ticks stay in this browser, so there is nothing to sign in for.',
    ar: 'تأشيراتك تبقى في هذا المتصفّح، فما تحتاج تسجّل دخول.',
  },

  // Flashcards sub-app (/resources/study-tools/flashcards)
  'resources.study_tools.flashcards.title': {
    en: 'Flashcards',
    ar: 'بطاقات المراجعة',
  },
  'resources.study_tools.flashcards.subtitle': {
    en: 'Self-test key quotes, characters and themes with spaced-repetition flashcards. Your deck progress is saved on this device.',
    ar: 'اختبر نفسك بالاقتباسات والشخصيات والثيمات المهمة عن طريق بطاقات بنظام التكرار المتباعد. تقدّمك في المجموعة ينحفظ على هذا الجهاز.',
  },

  // Revision planner sub-app (/resources/study-tools/revision-planner)
  'resources.study_tools.planner.title': {
    en: 'Revision Planner',
    ar: 'منظّم المراجعة',
  },
  'resources.study_tools.planner.subtitle': {
    en: 'Add your exam dates and get a personalised, phase-based revision plan with a calendar and topic checklist. Everything is saved on this device.',
    ar: 'أضف تواريخ امتحاناتك واحصل على خطة مراجعة مخصّصة مبنية على المراحل، مع تقويم وقائمة مواضيع. كل شي ينحفظ على هذا الجهاز.',
  },
  'resources.study_tools.planner.your_exams': {
    en: 'Your exams',
    ar: 'امتحاناتك',
  },
  'resources.study_tools.planner.your_exams_hint': {
    en: 'Add each exam with its date so we can work out how long you have and which revision phase you are in.',
    ar: 'أضف كل امتحان مع تاريخه عشان نحسب كم باقي لك ووش مرحلة المراجعة اللي إنت فيها.',
  },
  'resources.study_tools.planner.calendar': {
    en: 'Calendar',
    ar: 'التقويم',
  },
  'resources.study_tools.planner.tips_by_phase': {
    en: 'Tips by revision phase',
    ar: 'نصائح حسب مرحلة المراجعة',
  },
  'resources.study_tools.planner.topic_checklist': {
    en: 'Topic checklist',
    ar: 'قائمة المواضيع',
  },
  'resources.study_tools.planner.topic_checklist_hint': {
    en: 'Pick your exam board, then tick off topics as you finish revising them.',
    ar: 'اختر بورد امتحانك، وبعدها أشّر على المواضيع أول ما تخلّص مراجعتها.',
  },

  // Quote-tester sub-app (/resources/study-tools/quote-tester)
  'resources.study_tools.qtester.title': {
    en: 'Quote Tester',
    ar: 'اختبار الاقتباسات',
  },
  'resources.study_tools.qtester.subtitle': {
    en: 'Test how well you have memorised your key quotes. Pick a text and fill in the missing words against the clock.',
    ar: 'اختبر قد إيش حافظ اقتباساتك المهمة. اختر نص واملأ الكلمات الناقصة وإنت تسابق الوقت.',
  },

  // Tester sub-app (/resources/study-tools/tester)
  'resources.study_tools.tester.title': {
    en: 'Knowledge Tester',
    ar: 'اختبار المعرفة',
  },
  'resources.study_tools.tester.subtitle': {
    en: 'Quick multiple-choice quizzes on your set texts - characters, themes, context and quotations. Get instant feedback and review what you missed.',
    ar: 'اختبارات اختيار من متعدّد سريعة على نصوصك المقررة - الشخصيات والثيمات والسياق والاقتباسات. تحصل تقييم فوري وتراجع اللي فاتك.',
  },
  'resources.study_tools.tester.complete': {
    en: 'Quiz complete',
    ar: 'خلّص الاختبار',
  },
}
