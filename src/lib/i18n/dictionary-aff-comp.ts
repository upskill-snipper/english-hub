/**
 * Curated bilingual dictionary for the AUTHENTICATED affiliate portal
 * components — dashboard, tracking links, resources, payouts, settings,
 * the commission calculator, the tier badge and the enrolment form.
 *
 * Scope: the `aff_comp.*` namespace EXCLUDING `aff_comp.public.*`.
 * The public marketing page (`aff_comp.public.*`, rendered by
 * AffiliatePublicPage.tsx) is already curated in
 * ./dictionary-affiliates.ts (AFF_PUBLIC_DICTIONARY) — this file is the
 * complementary set: every remaining `aff_comp.*` key that the portal
 * components actually render via `useT()`.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * These keys only existed in placeholder / auto-generated supplements:
 *
 *   - dictionary-placeholder-fix-may15.ts → real EN, but ar === en
 *     (the five `aff_comp.tier.tier-N.label` entries — English mirror,
 *     so AR mode showed English).
 *   - dictionary-audit-fix.ts → junk Ollama output where the EN itself
 *     is a Title-cased path fragment ("Heading", "Subtitle", "Col Plan",
 *     "Tab All Time") and the AR is machine-mangled (Latin/Cyrillic
 *     bleed: "часть 3", "TabPage", "بالمoney").
 *
 * No curated entry with genuine Arabic existed, so Arabic-mode
 * affiliates saw English / junk on /affiliate/* and /affiliates/*.
 *
 * EN SOURCING
 *   - The five `aff_comp.tier.tier-N.label` keys: EN copied
 *     BYTE-IDENTICAL from dictionary-placeholder-fix-may15.ts (it has
 *     correct EN, only ar === en). Used via the indirection
 *     `t(`aff_comp.tier.${tier}.label`)` in TierBadge.tsx +
 *     CommissionCalculator.tsx.
 *   - Every other key exists ONLY in dictionary-audit-fix.ts with an
 *     unusable key-fragment EN. The correct EN was written from how the
 *     string is actually rendered in the consuming component
 *     (CommissionCalculator.tsx, AffiliateSidebar.tsx, TierBadge.tsx,
 *     AffiliateDashboard.tsx, AffiliateResources.tsx, and the enrolment
 *     form in AffiliatePublicPage.tsx). British spelling throughout, to
 *     match the rest of the product surface.
 *
 * The 3 screenshot-fix keys (`aff_comp.copy`, `aff_comp.copied`,
 * `aff_comp.calc.signups_dot`) are deliberately NOT included — they
 * already carry genuine Arabic (ar !== en) in
 * dictionary-screenshot-fixes.ts. The `aff_comp.public.*` keys are
 * likewise excluded — already curated in dictionary-affiliates.ts.
 *
 * Khaleeji (Gulf) conventions, matching ./dictionary-affiliates.ts and
 * src/lib/eal/curriculum.ts: second-person direct address, Gulf lexis
 * (وياك، حقّك، حقّتك، عقب، الحين، شوف، دوّر، وايد، ببلاش، قاعد) — not
 * MSA, not machine-literal.
 *
 * Brand / proper nouns kept untranslated (standard Gulf convention):
 * The English Hub, GCSE, IGCSE, KS3, Stripe, PayPal, QR, #ad, X,
 * Instagram, TikTok, ASA, plus tier labels ("Tier N · …" stay Latin).
 *
 * WIRING: this file only declares the export. It is wired into the
 * `lookup()` resolver chain in dictionary.ts at the curated-override
 * tier (before every placeholder/audit supplement) so these Arabic
 * values WIN over the junk ones. (dictionary.ts is edited separately —
 * not by this file's author.)
 */

export const AFF_COMP_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ─── Commission calculator (CommissionCalculator.tsx) ────────────
  'aff_comp.calc.title': { en: `Commission calculator`, ar: `حاسبة العمولة` },
  'aff_comp.calc.subtitle': {
    en: `Estimate your lifetime earnings`,
    ar: `احسب أرباحك على المدى الطويل`,
  },
  'aff_comp.calc.total_signups_label': { en: `Total signups`, ar: `إجمالي الاشتراكات` },
  'aff_comp.calc.current_tier': { en: `Current tier`, ar: `مستواك الحالي` },
  'aff_comp.calc.total_lifetime_earnings': {
    en: `Total lifetime earnings`,
    ar: `إجمالي الأرباح على المدى الطويل`,
  },
  'aff_comp.calc.next_signup_prefix': { en: `Your next signup earns`, ar: `اشتراكك الجاي يكسبك` },
  'aff_comp.calc.next_signup_suffix': {
    en: ` per signup at this tier.`,
    ar: ` لكل اشتراك في هذا المستوى.`,
  },
  'aff_comp.calc.signups_label': { en: `Signups`, ar: `اشتراكات` },
  'aff_comp.calc.tier_ladder': { en: `Tier ladder`, ar: `سلّم المستويات` },
  'aff_comp.calc.per_signup_suffix': { en: `/signup`, ar: `/اشتراك` },

  // ─── Copy buttons (AffiliateDashboard.tsx) ───────────────────────
  // NB: aff_comp.copy / aff_comp.copied live in dictionary-screenshot-
  // fixes.ts (already genuine AR) — only the "!" variant is ours.
  'aff_comp.copied_bang': { en: `Copied!`, ar: `تم النسخ!` },

  // ─── Tier labels — EN BYTE-IDENTICAL from placeholder-fix-may15 ──
  // Brand convention: "Tier N · …" stays Latin even in Arabic.
  'aff_comp.tier.tier-1.label': { en: 'Tier 1 · Starter', ar: 'Tier 1 · Starter' },
  'aff_comp.tier.tier-2.label': { en: 'Tier 2 · Standard', ar: 'Tier 2 · Standard' },
  'aff_comp.tier.tier-3.label': { en: 'Tier 3 · Established', ar: 'Tier 3 · Established' },
  'aff_comp.tier.tier-4.label': { en: 'Tier 4 · Featured', ar: 'Tier 4 · Featured' },
  'aff_comp.tier.tier-5.label': {
    en: 'Tier 5 · Strategic partner',
    ar: 'Tier 5 · Strategic partner',
  },

  // ─── Sidebar (AffiliateSidebar.tsx) ──────────────────────────────
  'aff_comp.sidebar.hub_brand': { en: `The English Hub`, ar: `The English Hub` },
  'aff_comp.sidebar.dashboard': { en: `Dashboard`, ar: `لوحة التحكّم` },
  'aff_comp.sidebar.tracking_links': { en: `Tracking links`, ar: `روابط التتبّع` },
  'aff_comp.sidebar.resources': { en: `Resources`, ar: `المصادر` },
  'aff_comp.sidebar.payouts': { en: `Payouts`, ar: `المدفوعات` },
  'aff_comp.sidebar.sign_out': { en: `Sign out`, ar: `سكّر الجلسة` },

  // ─── Dashboard chrome (AffiliateDashboard.tsx) ───────────────────
  'aff_comp.dash.back_to_dashboard': { en: `Back to dashboard`, ar: `رجوع للوحة التحكّم` },
  'aff_comp.dash.portal_title': { en: `Affiliate portal`, ar: `بوابة الشركاء` },
  'aff_comp.dash.welcome_back': { en: `Welcome back,`, ar: `حيّاك الله،` },
  'aff_comp.dash.tier_partner_prefix': { en: `Tier`, ar: `مستوى` },
  'aff_comp.dash.tier_partner_suffix': { en: `partner`, ar: `شريك` },

  // ─── Disclosure banner (AffiliateDashboard.tsx) ──────────────────
  'aff_comp.dash.disclosure_required_prefix': { en: `Disclosure required:`, ar: `الإفصاح مطلوب:` },
  'aff_comp.dash.disclosure_required_middle': {
    en: `must be clearly visible on every post that includes your link or code.`,
    ar: `لازم يكون واضح في كل منشور يحتوي رابطك أو كودك.`,
  },
  'aff_comp.dash.disclosure_asa_link_text': { en: `Read the ASA guidance`, ar: `اقرأ إرشادات ASA` },

  // ─── Stat cards (AffiliateDashboard.tsx) ─────────────────────────
  'aff_comp.dash.stat.total_earnings': { en: `Total earnings`, ar: `إجمالي الأرباح` },
  'aff_comp.dash.stat.this_month_trend_prefix': { en: `this month`, ar: `هذا الشهر` },
  'aff_comp.dash.stat.active_referrals': { en: `Active referrals`, ar: `الإحالات النشطة` },
  'aff_comp.dash.stat.total_signups_suffix': { en: `total signups`, ar: `إجمالي الاشتراكات` },
  'aff_comp.dash.stat.pending_commission': { en: `Pending commission`, ar: `عمولة معلّقة` },
  'aff_comp.dash.stat.confirmed_suffix': { en: `confirmed`, ar: `مؤكّدة` },
  'aff_comp.dash.stat.awaiting_confirmation': {
    en: `Awaiting confirmation`,
    ar: `بانتظار التأكيد`,
  },
  'aff_comp.dash.stat.conversion_rate': { en: `Conversion rate`, ar: `نسبة التحويل` },
  'aff_comp.dash.stat.clicks_total': { en: `total clicks`, ar: `إجمالي النقرات` },

  // ─── Impact section (AffiliateDashboard.tsx) ─────────────────────
  'aff_comp.dash.impact.title': { en: `Your impact`, ar: `أثرك` },
  'aff_comp.dash.impact.subtitle': {
    en: `the difference your referrals make`,
    ar: `الفرق اللي تسوّيه إحالاتك`,
  },
  'aff_comp.dash.impact.students_helped': { en: `Students helped`, ar: `طلاب استفادوا` },
  'aff_comp.dash.impact.improving_grades': { en: `improving their grades`, ar: `يحسّنون درجاتهم` },
  'aff_comp.dash.impact.hours_learning': { en: `Hours of learning`, ar: `ساعات تعلّم` },
  'aff_comp.dash.impact.via_your_link': { en: `via your link`, ar: `عن طريق رابطك` },
  'aff_comp.dash.impact.avg_grade_improvement': {
    en: `Avg grade improvement`,
    ar: `متوسّط تحسّن الدرجات`,
  },
  'aff_comp.dash.impact.across_referred_students': {
    en: `across referred students`,
    ar: `عند الطلاب اللي جوا عن طريقك`,
  },
  'aff_comp.dash.impact.badge_grades': { en: `Grades`, ar: `الدرجات` },
  'aff_comp.dash.impact.teacher_hours_saved': {
    en: `Teacher hours saved`,
    ar: `ساعات وفّرها المعلّمون`,
  },
  'aff_comp.dash.impact.across_referred_teachers': {
    en: `across referred teachers`,
    ar: `عند المعلّمين اللي جوا عن طريقك`,
  },
  'aff_comp.dash.impact.badge_hours': { en: `Hours`, ar: `الساعات` },

  // ─── Earnings table (AffiliateDashboard.tsx) ─────────────────────
  'aff_comp.dash.earnings.heading': { en: `Earnings`, ar: `الأرباح` },
  'aff_comp.dash.earnings.tab_this_month': { en: `This month`, ar: `هذا الشهر` },
  'aff_comp.dash.earnings.tab_last_month': { en: `Last month`, ar: `الشهر الماضي` },
  'aff_comp.dash.earnings.tab_all_time': { en: `All time`, ar: `كل الوقت` },
  'aff_comp.dash.earnings.pending': { en: `Pending`, ar: `معلّقة` },
  'aff_comp.dash.earnings.confirmed': { en: `Confirmed`, ar: `مؤكّدة` },
  'aff_comp.dash.earnings.paid': { en: `Paid`, ar: `مدفوعة` },
  'aff_comp.dash.earnings.empty': {
    en: `No earnings in this period yet.`,
    ar: `ما في أرباح في هذي الفترة لين الحين.`,
  },
  'aff_comp.dash.earnings.col_referral': { en: `Referral`, ar: `الإحالة` },
  'aff_comp.dash.earnings.col_plan': { en: `Plan`, ar: `الخطة` },
  'aff_comp.dash.earnings.col_commission': { en: `Commission`, ar: `العمولة` },
  'aff_comp.dash.earnings.col_status': { en: `Status`, ar: `الحالة` },
  'aff_comp.dash.earnings.col_date': { en: `Date`, ar: `التاريخ` },
  'aff_comp.dash.earnings.user_prefix': { en: `User`, ar: `مستخدم` },

  // ─── Status pills (AffiliateDashboard.tsx) ───────────────────────
  'aff_comp.dash.status.pending': { en: `Pending`, ar: `معلّقة` },
  'aff_comp.dash.status.confirmed': { en: `Confirmed`, ar: `مؤكّدة` },
  'aff_comp.dash.status.paid': { en: `Paid`, ar: `مدفوعة` },
  'aff_comp.dash.status.voided': { en: `Voided`, ar: `ملغية` },
  'aff_comp.dash.status.refunded': { en: `Refunded`, ar: `مرتجعة` },

  // ─── Links / sharing block (AffiliateDashboard.tsx) ──────────────
  'aff_comp.dash.links.heading': { en: `Your links`, ar: `روابطك` },
  'aff_comp.dash.links.affiliate_link': { en: `Affiliate link`, ar: `رابط الإحالة` },
  'aff_comp.dash.links.promo_code': { en: `Promo code`, ar: `كود الخصم` },
  'aff_comp.dash.links.rates_part1': { en: `You earn`, ar: `تكسب` },
  'aff_comp.dash.links.rates_part2': { en: `per annual signup`, ar: `لكل اشتراك سنوي` },
  'aff_comp.dash.links.rates_part3': { en: `per monthly signup`, ar: `لكل اشتراك شهري` },
  'aff_comp.dash.links.rates_part4': {
    en: `paid for the lifetime of the subscription.`,
    ar: `تتدفع طول مدّة الاشتراك.`,
  },
  'aff_comp.dash.links.qr_code': { en: `QR code`, ar: `رمز QR` },
  'aff_comp.dash.links.qr_blurb': {
    en: `Scan to open your referral link.`,
    ar: `امسح الرمز عشان يفتح رابط الإحالة حقّك.`,
  },
  'aff_comp.dash.links.share_on': { en: `Share on`, ar: `شاركه على` },
  'aff_comp.dash.links.copy_link': { en: `Copy link`, ar: `انسخ الرابط` },
  'aff_comp.dash.links.twitter_x': { en: `X`, ar: `X` },
  'aff_comp.dash.links.instagram': { en: `Instagram`, ar: `Instagram` },
  'aff_comp.dash.links.tiktok': { en: `TikTok`, ar: `TikTok` },
  'aff_comp.dash.links.email': { en: `Email`, ar: `الإيميل` },

  // ─── Charts (AffiliateDashboard.tsx) ─────────────────────────────
  'aff_comp.dash.chart.monthly_earnings': { en: `Monthly earnings`, ar: `الأرباح الشهرية` },
  'aff_comp.dash.chart.ctr_trend': { en: `CTR trend`, ar: `اتّجاه نسبة النقر` },
  'aff_comp.dash.chart.clicks_total_suffix': { en: `clicks total`, ar: `إجمالي النقرات` },

  // ─── Activity feed (AffiliateDashboard.tsx) ──────────────────────
  'aff_comp.dash.activity.heading': { en: `Recent activity`, ar: `آخر النشاطات` },
  'aff_comp.dash.activity.empty': {
    en: `No activity yet — share your link to get started.`,
    ar: `ما في نشاط لين الحين — شارك رابطك عشان تبدأ.`,
  },
  'aff_comp.dash.activity.just_now': { en: `Just now`, ar: `الحين` },
  'aff_comp.dash.activity.minutes_ago_suffix': { en: `m ago`, ar: ` د` },
  'aff_comp.dash.activity.hours_ago_suffix': { en: `h ago`, ar: ` س` },
  'aff_comp.dash.activity.days_ago_suffix': { en: `d ago`, ar: ` ي` },
  'aff_comp.dash.activity.new_signup': { en: `New signup`, ar: `اشتراك جديد` },
  'aff_comp.dash.activity.commission_confirmed': { en: `Commission confirmed`, ar: `عمولة مؤكّدة` },
  'aff_comp.dash.activity.payout_processed': { en: `Payout processed`, ar: `دفعة منفّذة` },

  // ─── Enrolment form (AffiliatePublicPage.tsx — apply flow) ───────
  'aff_comp.enrol.field.code.label': { en: `Choose your code`, ar: `اختر كودك` },
  'aff_comp.enrol.field.code.optional': { en: `(optional)`, ar: `(اختياري)` },
  'aff_comp.enrol.field.code.placeholder': { en: `e.g. YOURNAME`, ar: `مثال: YOURNAME` },
  'aff_comp.enrol.field.code.hint': {
    en: `Letters and numbers only. We'll tidy it up if needed.`,
    ar: `حروف وأرقام بس. بنرتّبه لك إذا احتاج.`,
  },
  'aff_comp.enrol.field.code.preview_prefix': { en: `Your code will be:`, ar: `كودك بيكون:` },
  'aff_comp.enrol.field.display_name.label': { en: `Display name`, ar: `الاسم الظاهر` },
  'aff_comp.enrol.field.display_name.optional': { en: `(optional)`, ar: `(اختياري)` },
  'aff_comp.enrol.field.display_name.placeholder': {
    en: `How you'd like to be credited`,
    ar: `الاسم اللي تبغى يظهر لك`,
  },
  'aff_comp.enrol.age.18_plus': {
    en: `I confirm I am 18 or older.`,
    ar: `أأكّد إني عمري 18 سنة أو أكثر.`,
  },
  'aff_comp.enrol.age.under18_lead': {
    en: `If you're under 18, a parent or guardian must sign up on your behalf.`,
    ar: `إذا عمرك أقل من 18، لازم ولي أمرك يسجّل بدالك.`,
  },
  'aff_comp.enrol.field.guardian_name': { en: `Parent or guardian name`, ar: `اسم ولي الأمر` },
  'aff_comp.enrol.field.guardian_email': { en: `Parent or guardian email`, ar: `إيميل ولي الأمر` },
  'aff_comp.enrol.disclosure_check_part1': {
    en: `I agree to clearly label promotions with`,
    ar: `أوافق إني أوسم الترويج بوضوح بـ`,
  },
  'aff_comp.enrol.disclosure_check_part2': { en: `and to follow the`, ar: `وألتزم بـ` },
  'aff_comp.enrol.disclosure_check_link': { en: `disclosure guidance`, ar: `إرشادات الإفصاح` },
  'aff_comp.enrol.submit': { en: `Create my affiliate account`, ar: `أنشئ حساب الشريك حقّي` },
  'aff_comp.enrol.submit_creating': { en: `Creating your account…`, ar: `قاعدين ننشئ حسابك…` },
  'aff_comp.enrol.footnote': {
    en: `By signing up you agree to the affiliate programme terms.`,
    ar: `بتسجيلك توافق على شروط برنامج الشركاء.`,
  },
  'aff_comp.enrol.error_generic': {
    en: `Something went wrong. Please try again.`,
    ar: `صار خطأ. حاول مرّة ثانية.`,
  },
  'aff_comp.enrol.error_network': {
    en: `Network error. Please check your connection and try again.`,
    ar: `خطأ في الشبكة. تأكّد من اتّصالك وحاول مرّة ثانية.`,
  },
  'aff_comp.enrol.success.title_new': { en: `You're all set!`, ar: `كل شي جاهز!` },
  'aff_comp.enrol.success.title_already': { en: `You're already enrolled`, ar: `أنت مسجّل من قبل` },
  'aff_comp.enrol.success.body': {
    en: `Here are your unique referral code and link. Share them anywhere.`,
    ar: `هذا كود الإحالة والرابط الخاص فيك. شاركهم في أي مكان.`,
  },
  'aff_comp.enrol.success.label_code': { en: `Your code`, ar: `كودك` },
  'aff_comp.enrol.success.label_link': { en: `Your link`, ar: `رابطك` },
  'aff_comp.enrol.success.go_dashboard': { en: `Go to dashboard`, ar: `روح للوحة التحكّم` },
  'aff_comp.enrol.success.full_resources': { en: `Browse resources`, ar: `تصفّح المصادر` },

  // ─── Resources page (AffiliateResources.tsx) ─────────────────────
  'aff_comp.resources.back': { en: `Back`, ar: `رجوع` },
  'aff_comp.resources.heading': { en: `Promo resources`, ar: `مصادر الترويج` },
  'aff_comp.resources.intro_prefix': { en: `Hey`, ar: `هلا` },
  'aff_comp.resources.intro_body': {
    en: `everything below is pre-filled with your code`,
    ar: `كل اللي تحت معبّأ مسبقاً بكودك`,
  },
  'aff_comp.resources.intro_suffix': {
    en: `so you can copy and share in seconds.`,
    ar: `عشان تنسخ وتشارك في ثواني.`,
  },
  'aff_comp.resources.compliance_title': { en: `Stay compliant`, ar: `التزم بالقواعد` },
  'aff_comp.resources.compliance_body_part1': {
    en: `Every post that promotes The English Hub`,
    ar: `كل منشور يروّج لـ The English Hub`,
  },
  'aff_comp.resources.compliance_body_must': { en: `must`, ar: `لازم` },
  'aff_comp.resources.compliance_body_part2': {
    en: `include a clear label such as`,
    ar: `يحتوي وسم واضح مثل`,
  },
  'aff_comp.resources.compliance_body_part3': {
    en: `so your audience knows it's a paid partnership.`,
    ar: `عشان جمهورك يعرف إنها شراكة مدفوعة.`,
  },
  'aff_comp.resources.link_section_title': { en: `Your unique link`, ar: `رابطك الخاص` },
  'aff_comp.resources.link_section_intro': {
    en: `Share this link anywhere`,
    ar: `شارك هذا الرابط في أي مكان`,
  },
  'aff_comp.resources.copy_link': { en: `Copy link`, ar: `انسخ الرابط` },
  'aff_comp.resources.your_code': { en: `Your code`, ar: `كودك` },
  'aff_comp.resources.attribution_window': { en: `Attribution window`, ar: `نافذة الاحتساب` },
  'aff_comp.resources.attribution_desc': {
    en: `Signups are credited to you for 30 days after the first click.`,
    ar: `الاشتراكات تُحتسب لك لمدّة 30 يوم عقب أول نقرة.`,
  },
  'aff_comp.resources.discount_note': {
    en: `Your code also gives new customers a discount — a win for everyone.`,
    ar: `كودك يعطي العملاء الجدد خصم بعد — مكسب للجميع.`,
  },
  'aff_comp.resources.annual_lean_title': {
    en: `Lean into annual plans`,
    ar: `ركّز على الخطط السنوية`,
  },
  'aff_comp.resources.annual_lean_body': {
    en: `Annual signups earn you the highest commission, so steer your audience towards them.`,
    ar: `الاشتراكات السنوية تكسبك أعلى عمولة، فوجّه جمهورك لها.`,
  },
  'aff_comp.resources.tpl.preview_prefix': { en: `Preview:`, ar: `معاينة:` },
  'aff_comp.resources.bottom.headline': {
    en: `Ready to start sharing?`,
    ar: `جاهز تبدأ المشاركة؟`,
  },
  'aff_comp.resources.bottom.body': {
    en: `Copy your link and head to your dashboard to track results.`,
    ar: `انسخ رابطك وروح للوحة التحكّم عشان تتابع النتائج.`,
  },
  'aff_comp.resources.bottom.view_dashboard': { en: `View dashboard`, ar: `شوف لوحة التحكّم` },
}
