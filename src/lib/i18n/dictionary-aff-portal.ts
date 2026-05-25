/**
 * Affiliate / partner-portal dictionary - `aff.*` namespace
 * Bucket A · Tier-2b · authored 2026-05-17
 *
 * Covers the public /affiliate landing page and the authenticated
 * partner portal (src/app/affiliate/**: dashboard, links, payouts,
 * resources, login, signup).
 *
 * Provenance of EN values:
 *  • Landing-page narrative + tier descriptions + FAQ + link/resource/
 *    signup option labels: copied BYTE-IDENTICAL from the curated
 *    human-English in dictionary-report-fix-may16b.ts and
 *    dictionary-placeholder-fix-may15.ts (those files mirror `ar` = `en`
 *    pending translation - this file supplies the real Khaleeji `ar`).
 *  • Portal "chrome" keys (dashboard / links / payouts / login / signup
 *    shells) had only path-fragment JUNK EN ("Title", "Heading", "Body")
 *    in dictionary-audit-fix.ts. That junk was NOT copied; on-brand
 *    British English was written here from the consuming components.
 *
 * `ar` is genuine Khaleeji (Gulf) throughout - partner-portal register,
 * second person, conversational (voice of src/lib/eal/curriculum.ts),
 * never MSA / literal. Brand & technical nouns (The English Hub, Stripe,
 * PayPal, UTM, IGCSE, GCSE, AQA, Edexcel, OCR, Eduqas, KS3, EAL, PNG,
 * #ad) and {placeholders} are preserved verbatim.
 *
 * Merged into the master lookup() centrally by dictionary.ts - do not
 * import elsewhere.
 */

import type { Dictionary } from './dictionary'

export const AFF_PORTAL_DICTIONARY: Dictionary = {
  // ─── /affiliate · Hero ──────────────────────────────────────────────
  'aff.hero.eyebrow': { en: `Affiliate Programme`, ar: `برنامج الشركاء` },
  'aff.hero.title_lead': { en: `Earn recurring income`, ar: `اكسب دخل متكرر` },
  'aff.hero.title_highlight': {
    en: `championing better English`,
    ar: `وانت تدعم إنجليزي أفضل`,
  },
  'aff.hero.title_tail': {
    en: `for every student you refer`,
    ar: `عن كل طالب تحوّله لنا`,
  },
  'aff.hero.subtitle': {
    en: `Share The English Hub with your audience and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English support that families and schools genuinely return to.`,
    ar: `شارك The English Hub مع جمهورك واكسب عمولة متكررة على كل اشتراك سنوي تحوّله لنا. دعم مستقل في الإنجليزي متوافق مع مجالس الامتحانات لمراحل GCSE وIGCSE وKS3 وEAL، يرجعون له الأهالي والمدارس عن قناعة.`,
  },
  'aff.hero.bullet_cookie': { en: `90-day tracking cookie`, ar: `كوكي تتبّع لمدة 90 يوم` },
  'aff.hero.bullet_payouts': { en: `Monthly payouts`, ar: `دفعات شهرية` },
  'aff.hero.bullet_no_minimum': { en: `No minimum traffic`, ar: `بدون حد أدنى للزيارات` },

  // ─── /affiliate · CTA blocks ────────────────────────────────────────
  'aff.cta.apply_now': { en: `Apply now`, ar: `قدّم طلبك الحين` },
  'aff.cta.partner_login': { en: `Partner login`, ar: `دخول الشركاء` },
  'aff.cta.eyebrow': { en: `Ready to start`, ar: `جاهز تبدأ` },
  'aff.cta.heading': {
    en: `Turn your audience into recurring income`,
    ar: `حوّل جمهورك إلى دخل متكرر`,
  },
  'aff.cta.body': {
    en: `Join the partner programme in minutes. Get your link, share it with the parents, students and educators who trust you, and earn commission every time a referral subscribes to an annual plan.`,
    ar: `انضم لبرنامج الشركاء في دقايق. خذ رابطك، وشاركه مع الأهالي والطلاب والمعلّمين اللي يثقون فيك، واكسب عمولة كل ما اشترك أحد من إحالاتك في خطة سنوية.`,
  },

  // ─── /affiliate · Commission tiers ──────────────────────────────────
  'aff.tiers.heading': { en: `Commission tiers`, ar: `مستويات العمولة` },
  'aff.tiers.subheading': {
    en: `The more students you refer, the more you earn on each one. Tiers reward consistent partners with higher recurring commission and added support.`,
    ar: `كل ما حوّلت طلاب أكثر، كل ما كسبت أكثر على كل واحد. المستويات تكافئ الشركاء المستمرّين بعمولة متكررة أعلى ودعم إضافي.`,
  },
  'aff.tiers.top_tier_badge': { en: `Top tier`, ar: `أعلى مستوى` },
  'aff.tiers.tier_n': { en: `Tier {n}`, ar: `المستوى {n}` },
  'aff.tiers.per_signup_suffix': { en: `per signup`, ar: `لكل تسجيل` },
  'aff.tiers.flat_commission_caption': {
    en: `Recurring commission on each referred annual subscription`,
    ar: `عمولة متكررة على كل اشتراك سنوي محوّل منك`,
  },
  'aff.tiers.open_from_first_signup': {
    en: `Open from your first signup`,
    ar: `متاح من أول تسجيل لك`,
  },
  'aff.tiers.from_signup_n': { en: `From signup {n}`, ar: `من التسجيل رقم {n}` },
  'aff.tiers.feature_marketing_assets': {
    en: `Ready-to-use marketing assets`,
    ar: `مواد تسويقية جاهزة للاستخدام`,
  },
  'aff.tiers.feature_realtime_tracking': {
    en: `Real-time referral tracking`,
    ar: `تتبّع الإحالات لحظة بلحظة`,
  },
  'aff.tiers.feature_priority_support': {
    en: `Priority partner support`,
    ar: `دعم شركاء بأولوية`,
  },
  'aff.tiers.feature_partner_manager': {
    en: `Dedicated partner manager`,
    ar: `مدير شركاء مخصّص لك`,
  },
  'aff.tiers.tier-1.description': {
    en: `20% on every plan you refer, paid monthly. No minimum traffic, no exclusivity.`,
    ar: `20% على كل خطة تحوّلها، تنصرف شهرياً. بدون حد أدنى للزيارات، وبدون حصرية.`,
  },
  'aff.tiers.tier-2.description': {
    en: `25% commission once you cross 10 paid referrals - automatic upgrade, no application.`,
    ar: `عمولة 25% أول ما تتجاوز 10 إحالات مدفوعة - ترقية تلقائية، بدون ما تقدّم طلب.`,
  },
  'aff.tiers.tier-3.description': {
    en: `30% commission at 25 paid referrals, plus access to co-marketing slots in our newsletter.`,
    ar: `عمولة 30% عند 25 إحالة مدفوعة، وزيادة على كذا تدخل في مساحات تسويق مشترك بنشرتنا البريدية.`,
  },
  'aff.tiers.tier-4.description': {
    en: `35% commission at 50 paid referrals, featured-creator placement and quarterly creator calls.`,
    ar: `عمولة 35% عند 50 إحالة مدفوعة، وظهور كصانع محتوى مميّز، ومكالمات ربع سنوية لصنّاع المحتوى.`,
  },
  'aff.tiers.tier-5.description': {
    en: `Custom commission, dedicated partner manager, exclusive content access and co-branded resources.`,
    ar: `عمولة مخصّصة، ومدير شركاء خاص لك، ووصول لمحتوى حصري، ومواد بعلامة مشتركة.`,
  },

  // ─── /affiliate · Calculator block ──────────────────────────────────
  'aff.calc.heading': { en: `Income that grows with you`, ar: `دخل يكبر معك` },
  'aff.calc.body': {
    en: `Commission is recurring for as long as your referral keeps their subscription active, so a steady stream of signups builds dependable income over time rather than a one-off payment.`,
    ar: `العمولة متكررة طول ما الإحالة محتفظة باشتراكها فعّال، فتدفّق ثابت من التسجيلات يبني لك دخل تعتمد عليه مع الوقت، مو مجرّد دفعة وحدة وخلاص.`,
  },
  'aff.calc.bullet_auto_upgrades': {
    en: `Commission follows plan upgrades automatically`,
    ar: `العمولة تتبع ترقيات الخطة تلقائياً`,
  },
  'aff.calc.bullet_every_student': {
    en: `Earn on every student referred through your link`,
    ar: `اكسب على كل طالب يجي من رابطك`,
  },
  'aff.calc.bullet_global': {
    en: `Open to partners worldwide`,
    ar: `متاح للشركاء من أي مكان بالعالم`,
  },

  // ─── /affiliate · How it works ──────────────────────────────────────
  'aff.how.heading': { en: `How it works`, ar: `كيف تشتغل` },
  'aff.how.subheading': {
    en: `Three simple steps from sign-up to your first commission.`,
    ar: `ثلاث خطوات بسيطة من التسجيل لين أول عمولة لك.`,
  },
  'aff.how.step_label': { en: `Step`, ar: `خطوة` },
  'aff.how.step1_title': { en: `Apply and get approved`, ar: `قدّم وخذ الموافقة` },
  'aff.how.step1_body': {
    en: `Submit a short application telling us about your audience. Once approved, you get instant access to your partner dashboard, unique link and referral code.`,
    ar: `قدّم طلب قصير تعرّفنا فيه على جمهورك. أول ما تنوافق، يفتح لك على طول لوحة الشركاء ورابطك الخاص ورمز الإحالة.`,
  },
  'aff.how.step2_title': { en: `Share your link`, ar: `شارك رابطك` },
  'aff.how.step2_body': {
    en: `Promote The English Hub through your website, newsletter, social channels or classroom. Use our ready-made assets or your own words, whichever fits your audience best.`,
    ar: `روّج لـ The English Hub عبر موقعك أو نشرتك البريدية أو حساباتك بالسوشال أو صفّك. استخدم موادنا الجاهزة أو كلامك انت، اللي يناسب جمهورك أكثر.`,
  },
  'aff.how.step3_title': { en: `Earn recurring commission`, ar: `اكسب عمولة متكررة` },
  'aff.how.step3_body': {
    en: `When someone subscribes to an annual plan through your link, you earn recurring commission. Track every referral in real time and receive monthly payouts.`,
    ar: `لما أحد يشترك في خطة سنوية عبر رابطك، تكسب عمولة متكررة. تابع كل إحالة لحظة بلحظة، واستلم دفعاتك شهرياً.`,
  },

  // ─── /affiliate · FAQ ───────────────────────────────────────────────
  'aff.faq.heading': { en: `Frequently asked questions`, ar: `الأسئلة الشائعة` },
  'aff.faq.subheading': {
    en: `Everything you need to know about the partner programme.`,
    ar: `كل اللي تحتاج تعرفه عن برنامج الشركاء.`,
  },
  'aff.faq.eligibility.q': {
    en: `Who can join the affiliate program?`,
    ar: `مين يقدر ينضم لبرنامج الشركاء؟`,
  },
  'aff.faq.eligibility.a': {
    en: `Anyone with an audience of UK GCSE/IGCSE English students, parents or teachers. Tutors, content creators, school staff and bloggers all qualify - there is no minimum follower count for Tier 1.`,
    ar: `أي أحد عنده جمهور من طلاب إنجليزي GCSE/IGCSE بالمملكة المتحدة أو أهاليهم أو معلّميهم. المدرّسين الخصوصيّين وصنّاع المحتوى وموظّفي المدارس والمدوّنين كلهم مؤهّلين - ما فيه حد أدنى للمتابعين في المستوى الأول.`,
  },
  'aff.faq.payouts.q': {
    en: `How and when are commissions paid?`,
    ar: `كيف ومتى تنصرف العمولات؟`,
  },
  'aff.faq.payouts.a': {
    en: `Monthly via Stripe or PayPal, on the 5th of each month for the previous month's referrals that cleared the 30-day refund window.`,
    ar: `شهرياً عبر Stripe أو PayPal، يوم 5 من كل شهر، عن إحالات الشهر اللي راح اللي عدّت فترة الاسترداد 30 يوم.`,
  },
  'aff.faq.cookies.q': {
    en: `How long do tracking cookies last?`,
    ar: `كم تبقى كوكيز التتبّع شغّالة؟`,
  },
  'aff.faq.cookies.a': {
    en: `90 days. If a referred visitor signs up at any point inside that window, the conversion is yours.`,
    ar: `90 يوم. إذا الزائر اللي حوّلته سجّل في أي وقت داخل هالمدة، التحويل يحتسب لك.`,
  },
  'aff.faq.renewals.q': { en: `Do I earn on plan renewals?`, ar: `أكسب على تجديدات الخطة؟` },
  'aff.faq.renewals.a': {
    en: `Yes - commission is paid on the lifetime of the subscription for as long as the customer remains active and you remain an affiliate in good standing.`,
    ar: `إي - العمولة تنصرف طول عمر الاشتراك، ما دام العميل فعّال وانت محافظ على وضعك كشريك بحالة سليمة.`,
  },
  'aff.faq.tier_upgrade.q': { en: `How do I move up a tier?`, ar: `كيف أطلع مستوى أعلى؟` },
  'aff.faq.tier_upgrade.a': {
    en: `Automatically. The moment your paid-referral count crosses a threshold (10/25/50), your dashboard re-rates you and the higher commission applies to all future referrals.`,
    ar: `تلقائياً. أول ما عدد إحالاتك المدفوعة يتجاوز حد معيّن (10/25/50)، لوحتك تعيد ترتيبك، والعمولة الأعلى تنطبق على كل الإحالات الجاية.`,
  },

  // ─── /affiliate/dashboard ───────────────────────────────────────────
  'aff.dashboard.welcome_back': { en: `Welcome back`, ar: `حيّاك الله مرة ثانية` },
  'aff.dashboard.title': { en: `Partner dashboard`, ar: `لوحة الشريك` },
  'aff.dashboard.create_link': { en: `Create link`, ar: `أنشئ رابط` },
  'aff.dashboard.total_clicks': { en: `Total clicks`, ar: `إجمالي النقرات` },
  'aff.dashboard.conversions': { en: `Conversions`, ar: `التحويلات` },
  'aff.dashboard.conversion_rate': { en: `Conversion rate`, ar: `معدّل التحويل` },
  'aff.dashboard.total_earnings': { en: `Total earnings`, ar: `إجمالي الأرباح` },
  'aff.dashboard.tier_progress': { en: `Tier progress`, ar: `تقدّمك بالمستويات` },
  'aff.dashboard.tier_progress_subtitle': {
    en: `{n} more referrals to reach {tier}`,
    ar: `باقي لك {n} إحالة توصل {tier}`,
  },
  'aff.dashboard.top_tier_reached': {
    en: `You've reached the top tier - nicely done.`,
    ar: `وصلت لأعلى مستوى - عاش، شغل نظيف.`,
  },
  'aff.dashboard.current_rate': { en: `current rate`, ar: `النسبة الحالية` },
  'aff.dashboard.next_rate': { en: `next rate`, ar: `النسبة الجاية` },
  'aff.dashboard.referrals_count_label': { en: `referrals`, ar: `إحالة` },
  'aff.dashboard.goal_label': { en: `goal`, ar: `الهدف` },
  'aff.dashboard.top_links_title': { en: `Top performing links`, ar: `أفضل الروابط أداءً` },
  'aff.dashboard.top_links_subtitle': {
    en: `Your highest-earning tracking links`,
    ar: `روابط التتبّع الأكثر ربحاً عندك`,
  },
  'aff.dashboard.no_data': {
    en: `No data yet - share a link to start tracking.`,
    ar: `ما فيه بيانات بعد - شارك رابط وبيبدأ التتبّع.`,
  },
  'aff.dashboard.col_link': { en: `Link`, ar: `الرابط` },
  'aff.dashboard.col_clicks': { en: `Clicks`, ar: `النقرات` },
  'aff.dashboard.col_conv': { en: `Conversions`, ar: `التحويلات` },
  'aff.dashboard.col_earnings': { en: `Earnings`, ar: `الأرباح` },

  // ─── /affiliate/links ───────────────────────────────────────────────
  'aff.links.title': { en: `Tracking links`, ar: `روابط التتبّع` },
  'aff.links.subtitle': {
    en: `Build and copy your referral links.`,
    ar: `جهّز روابط الإحالة حقّتك وانسخها.`,
  },
  'aff.links.builder_title': { en: `Link builder`, ar: `منشئ الروابط` },
  'aff.links.destination_label': { en: `Destination`, ar: `الوجهة` },
  'aff.links.utm_preset_label': { en: `UTM preset`, ar: `إعداد UTM جاهز` },
  'aff.links.custom_tag_label': { en: `Custom tag (optional)`, ar: `وسم مخصّص (اختياري)` },
  'aff.links.custom_tag_placeholder': {
    en: `e.g. spring-campaign`,
    ar: `مثلاً: حملة-الربيع`,
  },
  'aff.links.your_tracking_link': { en: `Your tracking link`, ar: `رابط التتبّع حقّك` },
  'aff.links.copy': { en: `Copy`, ar: `انسخ` },
  'aff.links.copied': { en: `Copied`, ar: `تم النسخ` },
  'aff.links.quick_links_title': { en: `Quick links`, ar: `روابط سريعة` },
  'aff.links.quick_links_subtitle': {
    en: `Ready-made links to popular destinations.`,
    ar: `روابط جاهزة لأشهر الوجهات.`,
  },
  'aff.links.dest.homepage': { en: `Homepage`, ar: `الصفحة الرئيسية` },
  'aff.links.dest.pricing': { en: `Pricing`, ar: `الأسعار` },
  'aff.links.dest.igcse': { en: `IGCSE landing`, ar: `صفحة IGCSE` },
  'aff.links.dest.mock_exams': { en: `Mock exam builder`, ar: `منشئ الامتحانات التجريبية` },
  'aff.links.dest.for_schools': { en: `For schools`, ar: `للمدارس` },
  'aff.links.preset.social': {
    en: `Social media (utm_source=social)`,
    ar: `سوشال ميديا (utm_source=social)`,
  },
  'aff.links.preset.newsletter': {
    en: `Newsletter (utm_source=newsletter)`,
    ar: `نشرة بريدية (utm_source=newsletter)`,
  },
  'aff.links.preset.blog': {
    en: `Blog post (utm_source=blog)`,
    ar: `تدوينة (utm_source=blog)`,
  },
  'aff.links.preset.youtube': {
    en: `YouTube description (utm_source=youtube)`,
    ar: `وصف يوتيوب (utm_source=youtube)`,
  },

  // ─── /affiliate/payouts ─────────────────────────────────────────────
  'aff.payouts.title': { en: `Payouts`, ar: `الدفعات` },
  'aff.payouts.subtitle': {
    en: `Track your balance and manage how you get paid.`,
    ar: `تابع رصيدك وتحكّم بطريقة استلامك للفلوس.`,
  },
  'aff.payouts.pending_balance': { en: `Pending balance`, ar: `الرصيد المعلّق` },
  'aff.payouts.lifetime_earnings': { en: `Lifetime earnings`, ar: `إجمالي الأرباح` },
  'aff.payouts.minimum_payout': { en: `Minimum payout`, ar: `الحد الأدنى للصرف` },
  'aff.payouts.monthly_note_lead': { en: `Paid monthly.`, ar: `تنصرف شهرياً.` },
  'aff.payouts.monthly_note_body': {
    en: `Payouts are sent on the 5th of each month once your balance clears £{min}.`,
    ar: `الدفعات ترسل يوم 5 من كل شهر أول ما رصيدك يعدّي £{min}.`,
  },
  'aff.payouts.payment_method': { en: `Payment method`, ar: `طريقة الدفع` },
  'aff.payouts.payment_method_subtitle': {
    en: `Choose how you'd like to receive your commission.`,
    ar: `اختر كيف تبي تستلم عمولتك.`,
  },
  'aff.payouts.method_paypal': { en: `PayPal`, ar: `PayPal` },
  'aff.payouts.method_bank': { en: `Bank transfer`, ar: `تحويل بنكي` },
  'aff.payouts.paypal_email_label': { en: `PayPal email`, ar: `إيميل PayPal` },
  'aff.payouts.paypal_email_placeholder': {
    en: `you@example.com`,
    ar: `you@example.com`,
  },
  'aff.payouts.account_ref_label': { en: `Account reference`, ar: `مرجع الحساب` },
  'aff.payouts.account_ref_placeholder': {
    en: `Sort code & account number`,
    ar: `رمز الفرز ورقم الحساب`,
  },
  'aff.payouts.bank_demo_hint': {
    en: `Demo only - no real bank details are stored.`,
    ar: `تجريبي بس - ما نخزّن أي بيانات بنكية حقيقية.`,
  },
  'aff.payouts.save_payment_method': { en: `Save payment method`, ar: `احفظ طريقة الدفع` },
  'aff.payouts.saved': { en: `Saved`, ar: `انحفظ` },
  'aff.payouts.history_title': { en: `Payout history`, ar: `سجلّ الدفعات` },
  'aff.payouts.col_period': { en: `Period`, ar: `الفترة` },
  'aff.payouts.col_method': { en: `Method`, ar: `الطريقة` },
  'aff.payouts.col_date': { en: `Date`, ar: `التاريخ` },
  'aff.payouts.col_status': { en: `Status`, ar: `الحالة` },
  'aff.payouts.col_amount': { en: `Amount`, ar: `المبلغ` },
  'aff.payouts.status_paid': { en: `Paid`, ar: `مدفوعة` },
  'aff.payouts.status_processing': { en: `Processing`, ar: `قيد المعالجة` },
  'aff.payouts.status_pending': { en: `Pending`, ar: `معلّقة` },

  // ─── /affiliate/resources ───────────────────────────────────────────
  'aff.resources.title': { en: `Marketing resources`, ar: `مواد التسويق` },
  'aff.resources.subtitle': {
    en: `Banners, copy templates and screenshots ready to share.`,
    ar: `بوسترات وقوالب نصوص ولقطات شاشة جاهزة تشاركها.`,
  },
  'aff.resources.banners_title': { en: `Banners`, ar: `البوسترات` },
  'aff.resources.placeholder_suffix': { en: `preview`, ar: `معاينة` },
  'aff.resources.copy_templates_title': { en: `Copy templates`, ar: `قوالب النصوص` },
  'aff.resources.copy_templates_subtitle_lead': {
    en: `Each template includes a`,
    ar: `كل قالب فيه`,
  },
  'aff.resources.copy_templates_subtitle_tail': {
    en: `placeholder - replace it with your tracking link.`,
    ar: `خانة بديلة - بدّلها برابط التتبّع حقّك.`,
  },
  'aff.resources.copy': { en: `Copy`, ar: `انسخ` },
  'aff.resources.copied': { en: `Copied`, ar: `تم النسخ` },
  'aff.resources.screenshots_title': { en: `Product screenshots`, ar: `لقطات المنتج` },
  'aff.resources.screenshots_subtitle': {
    en: `High-resolution screenshots for your reviews and posts.`,
    ar: `لقطات شاشة بدقّة عالية لمراجعاتك ومنشوراتك.`,
  },
  'aff.resources.download': { en: `Download`, ar: `حمّل` },
  'aff.resources.banner.leaderboard': { en: `Leaderboard 728×90`, ar: `ليدربورد 728×90` },
  'aff.resources.banner.medium_rectangle': {
    en: `Medium rectangle 300×250`,
    ar: `مستطيل متوسط 300×250`,
  },
  'aff.resources.banner.square': { en: `Square 250×250`, ar: `مربّع 250×250` },
  'aff.resources.banner.skyscraper': { en: `Skyscraper 160×600`, ar: `سكايسكرابر 160×600` },
  'aff.resources.copy.short_social.label': {
    en: `Short-form social post`,
    ar: `منشور سوشال قصير`,
  },
  'aff.resources.copy.short_social.body': {
    en: `My students keep telling me about The English Hub - clean GCSE & IGCSE revision, exam-board specific, properly graded model answers. Worth a look: {link}`,
    ar: `طلابي ما يخلّون يكلّموني عن The English Hub - مراجعة GCSE وIGCSE نظيفة، مخصّصة حسب مجلس الامتحان، وإجابات نموذجية مصحّحة صح. يستاهل تشوفه: {link}`,
  },
  'aff.resources.copy.newsletter.label': { en: `Newsletter blurb`, ar: `فقرة للنشرة البريدية` },
  'aff.resources.copy.newsletter.body': {
    en: `I've been recommending The English Hub to parents asking how to support GCSE English revision at home. The exam-board switcher means you get materials matched to AQA, Edexcel, OCR or Eduqas without picking through generic content. {link}`,
    ar: `صرت أنصح الأهالي اللي يسألوني كيف يدعمون مراجعة إنجليزي GCSE بالبيت بـ The English Hub. مبدّل مجلس الامتحان يخليك تاخذ مواد مطابقة لـ AQA أو Edexcel أو OCR أو Eduqas من غير ما تنبش بمحتوى عام. {link}`,
  },
  'aff.resources.copy.blog_review.label': {
    en: `Blog review intro paragraph`,
    ar: `فقرة افتتاحية لمراجعة بالمدوّنة`,
  },
  'aff.resources.copy.blog_review.body': {
    en: `I've spent the last few weeks testing The English Hub against three of the most-recommended GCSE English revision platforms. Here is what stood out - and where it does not yet match the competition. {link}`,
    ar: `قضّيت الأسابيع اللي راحت أجرّب The English Hub وأقارنه بثلاث من أكثر منصّات مراجعة إنجليزي GCSE اللي ينصحون فيها. هذا اللي برز لي - ووين لسّه ما يجاري المنافسين. {link}`,
  },
  'aff.resources.shot.dashboard_overview': {
    en: `Student dashboard overview`,
    ar: `نظرة عامة على لوحة الطالب`,
  },
  'aff.resources.shot.practice_question': {
    en: `Practice question with AO breakdown`,
    ar: `سؤال تدريبي مع تفصيل أهداف التقييم (AO)`,
  },
  'aff.resources.shot.essay_feedback': {
    en: `AI essay-feedback report`,
    ar: `تقرير تقييم المقال بالذكاء الاصطناعي`,
  },
  'aff.resources.shot.progress_report': {
    en: `Parent progress report`,
    ar: `تقرير تقدّم لولي الأمر`,
  },

  // ─── /affiliate/login ───────────────────────────────────────────────
  'aff.login.back_to_programme': { en: `Back to programme`, ar: `رجوع للبرنامج` },
  'aff.login.title': { en: `Partner login`, ar: `دخول الشركاء` },
  'aff.login.subtitle': {
    en: `Sign in to your partner dashboard.`,
    ar: `سجّل دخولك للوحة الشريك حقّتك.`,
  },
  'aff.login.email_label': { en: `Email`, ar: `الإيميل` },
  'aff.login.email_placeholder': { en: `you@example.com`, ar: `you@example.com` },
  'aff.login.password_label': { en: `Password`, ar: `كلمة المرور` },
  'aff.login.forgot': { en: `Forgot?`, ar: `نسيتها؟` },
  'aff.login.enter_both': {
    en: `Enter both your email and password.`,
    ar: `دخّل إيميلك وكلمة المرور الاثنين.`,
  },
  'aff.login.signing_in': { en: `Signing in…`, ar: `جاري تسجيل الدخول…` },
  'aff.login.sign_in': { en: `Sign in`, ar: `تسجيل الدخول` },
  'aff.login.new_here': { en: `New here?`, ar: `أول مرة هنا؟` },
  'aff.login.apply_to_join': { en: `Apply to join`, ar: `قدّم عشان تنضم` },

  // ─── /affiliate/signup ──────────────────────────────────────────────
  'aff.signup.back_to_programme': { en: `Back to programme`, ar: `رجوع للبرنامج` },
  'aff.signup.title': { en: `Apply to the partner programme`, ar: `قدّم لبرنامج الشركاء` },
  'aff.signup.subtitle': {
    en: `Tell us about your audience and we'll be in touch.`,
    ar: `عرّفنا على جمهورك وبنتواصل معك.`,
  },
  'aff.signup.full_name_label': { en: `Full name`, ar: `الاسم الكامل` },
  'aff.signup.full_name_placeholder': { en: `Your full name`, ar: `اسمك الكامل` },
  'aff.signup.email_label': { en: `Email`, ar: `الإيميل` },
  'aff.signup.email_placeholder': { en: `you@example.com`, ar: `you@example.com` },
  'aff.signup.website_label': { en: `Website or main channel`, ar: `موقعك أو قناتك الرئيسية` },
  'aff.signup.website_placeholder': {
    en: `https://…`,
    ar: `https://…`,
  },
  'aff.signup.audience_size_label': { en: `Audience size`, ar: `حجم الجمهور` },
  'aff.signup.audience_size_placeholder': {
    en: `Select audience size`,
    ar: `اختر حجم الجمهور`,
  },
  'aff.signup.niche_label': { en: `Your niche`, ar: `مجالك` },
  'aff.signup.niche_placeholder': { en: `Select your niche`, ar: `اختر مجالك` },
  'aff.signup.submitting': { en: `Submitting…`, ar: `جاري الإرسال…` },
  'aff.signup.submit': { en: `Submit application`, ar: `أرسل الطلب` },
  'aff.signup.already_partner': { en: `Already a partner?`, ar: `أنت شريك معنا؟` },
  'aff.signup.log_in': { en: `Log in`, ar: `سجّل دخولك` },
  'aff.signup.received_title': { en: `Application received`, ar: `استلمنا طلبك` },
  'aff.signup.redirecting': {
    en: `Redirecting you to your dashboard…`,
    ar: `نحوّلك للوحة حقّتك…`,
  },
  'aff.signup.audience.under_1k': {
    en: `Under 1,000 followers / subscribers`,
    ar: `أقل من 1,000 متابع / مشترك`,
  },
  'aff.signup.audience.1k_5k': { en: `1,000 - 5,000`, ar: `1,000 - 5,000` },
  'aff.signup.audience.5k_25k': { en: `5,000 - 25,000`, ar: `5,000 - 25,000` },
  'aff.signup.audience.25k_100k': { en: `25,000 - 100,000`, ar: `25,000 - 100,000` },
  'aff.signup.audience.over_100k': { en: `Over 100,000`, ar: `أكثر من 100,000` },
  'aff.signup.niche.english_tutoring': { en: `English tutoring`, ar: `تدريس إنجليزي خصوصي` },
  'aff.signup.niche.school_classroom': {
    en: `Classroom / school staff`,
    ar: `صفّ دراسي / كادر مدرسة`,
  },
  'aff.signup.niche.parenting_homeschool': {
    en: `Parenting / homeschool`,
    ar: `تربية / تعليم منزلي`,
  },
  'aff.signup.niche.edtech_reviews': { en: `EdTech reviews`, ar: `مراجعات تقنيات تعليمية` },
  'aff.signup.niche.language_learning': { en: `Language learning`, ar: `تعلّم اللغات` },
  'aff.signup.niche.other': { en: `Other`, ar: `غير ذلك` },
}
