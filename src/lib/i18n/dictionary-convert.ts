/**
 * Conversion-surface override — 2026-05-16 (Bucket A, wave 3)
 *
 * The public checkout / conversion pages were rendering English (or junk)
 * in AR mode because four namespaces only had auto-generated path-segment
 * placeholders in dictionary-audit-fix.ts ("Title", "Heading", "Lead",
 * "Aria Prefix", "Li1", …) with garbled Khaleeji that leaked CJK and
 * unrelated body copy. This file supplies correct, on-brand UK-English
 * and natural Gulf (Khaleeji) Arabic for every key the following surfaces
 * touch:
 *
 *   - redeem       → src/app/redeem/page.tsx (promo-code redemption)
 *   - join_school  → src/app/join-school/page.tsx (class-code join)
 *   - brand        → src/components/brand/{ColourSwatch,LogoAsset,
 *                    TypographySpecimen}.tsx (a11y labels on /brand,
 *                    /pricing, /consent brand chrome)
 *   - billing      → <AffiliateCodeField> / <PromoCodePrompt> /
 *                    trial banner (pricing + for-teachers)
 *
 * EN strategy:
 *   - billing.*  → copied BYTE-IDENTICAL from
 *                  dictionary-placeholder-fix-may16.ts (real UK copy
 *                  already authored there).
 *   - redeem.* / join_school.* / brand.*  → the audit-fix EN is
 *                  path-segment garbage, so the English here is written
 *                  fresh from each consuming component's rendered intent.
 *
 * Khaleeji register matches the voice of src/lib/eal/curriculum.ts
 * (natural Gulf: «وايد», «شوف», «حطّ», «بس», «هذي», «ترى»). Brand and
 * proper nouns (The English Hub, EH, GCSE/IGCSE, Stripe) stay Latin per
 * standard Gulf convention for brand marks and technical terms.
 *
 * Wire into lookup() at the same precedence slot as the other *_FIX
 * dictionaries so it wins on collision against AUDIT_FIX_DICTIONARY.
 */

export const CONVERT_DICTIONARY: Record<string, { en: string; ar: string }> = {
  // ════════════════════════════════════════════════════════════════════
  //  redeem.*  — /redeem promo-code redemption (public checkout surface)
  //  EN written fresh from src/app/redeem/page.tsx render points.
  // ════════════════════════════════════════════════════════════════════

  // <h1>{t('redeem.h1')}</h1> — page hero on the promo redemption page.
  'redeem.h1': {
    en: 'Redeem your code',
    ar: 'استخدم كودك',
  },
  // <p>{t('redeem.lead')}</p> — sub-hero, directly under the H1.
  'redeem.lead': {
    en: 'Enter your promo code below to unlock your discounted plan and continue to secure checkout.',
    ar: 'حُطّ كود الخصم تحت عشان تفتح خطتك بالسعر المخفّض وتكمّل للدفع الآمن.',
  },
  // Amber banner shown when Stripe Checkout was cancelled (?cancelled=1).
  'redeem.cancelled': {
    en: 'Checkout was cancelled — your code is still valid, so you can try again whenever you’re ready.',
    ar: 'تم إلغاء الدفع — كودك لا زال صالح، تقدر تعيد المحاولة وقت ما تكون جاهز.',
  },
  // Bold heading of the amber "annual only" notice above the code field.
  'redeem.annual_only.title': {
    en: 'Codes apply to annual plans only',
    ar: 'الأكواد تنطبق على الخطط السنوية بس',
  },
  // Body line of that same amber notice.
  'redeem.annual_only.body': {
    en: 'Promo discounts unlock on annual subscriptions. You can switch to monthly later from your account.',
    ar: 'خصومات الأكواد تنفتح على الاشتراكات السنوية. تقدر تحوّل للشهري بعدين من حسابك.',
  },
  // <span>{t('redeem.field.code')}</span> — label above the code input
  // (also reused as its aria-label).
  'redeem.field.code': {
    en: 'Promo code',
    ar: 'كود الخصم',
  },
  // placeholder={t('redeem.field.placeholder')} on the code <Input>.
  'redeem.field.placeholder': {
    en: 'e.g. WELCOME20',
    ar: 'مثال: WELCOME20',
  },
  // Helper line under the code input (#promo-helper).
  'redeem.field.helper': {
    en: 'Codes aren’t case-sensitive — letters, numbers, hyphens and underscores only.',
    ar: 'الكود ما يفرّق بين الحروف الكبيرة والصغيرة — حروف وأرقام وشرطات وشرطات سفلية بس.',
  },
  // Shown while /api/promo/validate is in flight.
  'redeem.checking': {
    en: 'Checking your code…',
    ar: 'نتحقّق من كودك…',
  },
  // Success box: <strong>{strong}</strong> {pre} <price> {post}
  'redeem.applied_strong': {
    en: 'Code applied!',
    ar: 'تم تطبيق الكود!',
  },
  'redeem.applied_pre': {
    en: 'Your price is now',
    ar: 'سعرك الحين صار',
  },
  'redeem.applied_post': {
    en: 'for the first year.',
    ar: 'للسنة الأولى.',
  },
  // Validation-failure messages (reasonToMessage switch).
  'redeem.reason.invalid_format': {
    en: 'That doesn’t look like a valid code. Please check it and try again.',
    ar: 'هذا ما يشبه كود صحيح. راجعه وحاول مرة ثانية.',
  },
  'redeem.reason.unknown_code': {
    en: 'We couldn’t find that code. It may have expired or been entered incorrectly.',
    ar: 'ما لقينا هذا الكود. يمكن انتهت صلاحيته أو انكتب غلط.',
  },
  'redeem.reason.default': {
    en: 'That code can’t be used right now. Please double-check it or try another.',
    ar: 'هذا الكود ما يصير يُستخدم الحين. تأكّد منه أو جرّب كود ثاني.',
  },
  // catch{} network errors.
  'redeem.err.unreachable': {
    en: 'We couldn’t reach the server to check your code. Please check your connection and try again.',
    ar: 'ما قدرنا نوصل للسيرفر عشان نتحقّق من كودك. تأكّد من اتصالك وحاول مرة ثانية.',
  },
  'redeem.err.start_checkout': {
    en: 'We couldn’t start checkout just now. Please try again in a moment.',
    ar: 'ما قدرنا نبدأ الدفع الحين. حاول مرة ثانية بعد شوي.',
  },
  'redeem.err.something_wrong': {
    en: 'Something went wrong. Please try again, or contact support if it keeps happening.',
    ar: 'صار شي غلط. حاول مرة ثانية، أو تواصل مع الدعم إذا استمرّ.',
  },
  // Continue button — idle vs. submitting label.
  'redeem.continue': {
    en: 'Continue to checkout',
    ar: 'كمّل للدفع',
  },
  'redeem.opening': {
    en: 'Opening secure checkout…',
    ar: 'نفتح الدفع الآمن…',
  },
  // Fine-print legal line with Terms / Privacy links.
  'redeem.legal.pre': {
    en: 'By continuing you agree to our',
    ar: 'بمتابعتك أنت توافق على',
  },
  'redeem.legal.terms': {
    en: 'Terms of Service',
    ar: 'شروط الخدمة',
  },
  'redeem.legal.and': {
    en: 'and',
    ar: 'و',
  },
  'redeem.legal.privacy': {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية',
  },
  // "What happens next" section heading + ordered list.
  'redeem.next.h2': {
    en: 'What happens next',
    ar: 'شنو يصير بعدين',
  },
  'redeem.next.li1': {
    en: 'You’ll be taken to Stripe to complete payment securely.',
    ar: 'بنوديك إلى Stripe عشان تكمّل الدفع بأمان.',
  },
  'redeem.next.li2': {
    en: 'Your discount is applied automatically at checkout.',
    ar: 'خصمك ينطبق تلقائيًا عند الدفع.',
  },
  'redeem.next.li3': {
    en: 'Once payment is confirmed, your full access unlocks straight away — including in the app.',
    ar: 'أول ما يتأكّد الدفع، وصولك الكامل ينفتح على طول — حتى داخل التطبيق.',
  },

  // ════════════════════════════════════════════════════════════════════
  //  join_school.*  — /join-school class-code join (public conversion)
  //  EN written fresh from src/app/join-school/page.tsx render points.
  // ════════════════════════════════════════════════════════════════════

  // Back link at the top of the form.
  'join_school.back_dashboard': {
    en: 'Back to dashboard',
    ar: 'رجوع للوحة التحكم',
  },
  // <CardTitle>{t('join_school.h1')}</CardTitle>
  'join_school.h1': {
    en: 'Join your school',
    ar: 'انضم لمدرستك',
  },
  // <CardDescription>{t('join_school.description')}</CardDescription>
  'join_school.description': {
    en: 'Enter the class code from your teacher to link your account to your school.',
    ar: 'حُطّ كود الصف اللي عطاك إياه معلّمك عشان تربط حسابك بمدرستك.',
  },
  // Muted info box above the form.
  'join_school.info_box': {
    en: 'Your teacher will have shared a 6-character code. Joining links your progress to your class — it won’t change your subscription.',
    ar: 'معلّمك بيكون شارك معاك كود من ٦ خانات. الانضمام يربط تقدّمك بصفّك — ما يغيّر اشتراكك.',
  },
  // <Label htmlFor="joinCode">{t('join_school.label.code')}</Label>
  'join_school.label.code': {
    en: 'Class code',
    ar: 'كود الصف',
  },
  // Helper under the code input.
  'join_school.code_hint': {
    en: '6 characters — letters and numbers only',
    ar: '٦ خانات — حروف وأرقام بس',
  },
  // Submit button: loading vs. idle.
  'join_school.joining': {
    en: 'Joining…',
    ar: 'جاري الانضمام…',
  },
  'join_school.cta.join': {
    en: 'Join school',
    ar: 'انضم للمدرسة',
  },
  // Error states (setError(...) call sites).
  'join_school.err.enter_code': {
    en: 'Please enter your class code.',
    ar: 'الرجاء إدخال كود الصف.',
  },
  'join_school.err.generic': {
    en: 'We couldn’t join you to that school. Please check the code and try again.',
    ar: 'ما قدرنا نضمّك لهذي المدرسة. راجع الكود وحاول مرة ثانية.',
  },
  'join_school.err.network': {
    en: 'Network error — please check your connection and try again.',
    ar: 'خطأ في الشبكة — تأكّد من اتصالك وحاول مرة ثانية.',
  },
  // Card footer: pre <link> post.
  'join_school.footer.pre': {
    en: 'Don’t have a code?',
    ar: 'ما عندك كود؟',
  },
  'join_school.footer.link': {
    en: 'Go to your dashboard',
    ar: 'روح للوحة تحكّمك',
  },
  'join_school.footer.post': {
    en: ' and carry on learning.',
    ar: ' وكمّل تعلّمك.',
  },
  // Success state: <h1>{joined_pre} <schoolName></h1>
  'join_school.success.joined_pre': {
    en: 'You’ve joined',
    ar: 'انضممت إلى',
  },
  // Optional class line: {class_label} <class_name>
  'join_school.success.class_label': {
    en: 'Your class:',
    ar: 'صفّك:',
  },
  // Role line: {linked_pre} <role>{linked_post}
  'join_school.success.linked_pre': {
    en: 'You’re linked as a',
    ar: 'أنت مرتبط كـ',
  },
  'join_school.success.linked_post': {
    en: '. Your teacher can now see your progress.',
    ar: '. معلّمك يقدر يشوف تقدّمك الحين.',
  },
  // Success CTA button.
  'join_school.success.go_dashboard': {
    en: 'Go to dashboard',
    ar: 'روح للوحة التحكم',
  },

  // ════════════════════════════════════════════════════════════════════
  //  brand.*  — a11y labels on the /brand kit components
  //  (ColourSwatch, LogoAsset, TypographySpecimen). All four keys are
  //  screen-reader-only prose; brand names stay Latin. EN written fresh.
  // ════════════════════════════════════════════════════════════════════

  // ColourSwatch: aria-label={`${swatchLabel}: ${name} (${hex})`}
  'brand.colour.aria_swatch': {
    en: 'Colour swatch',
    ar: 'عيّنة لون',
  },
  // LogoAsset: aria-label={`${ariaPrefix} ${brandName}, ${variant} ${ariaSuffix}`}
  'brand.logo.aria_prefix': {
    en: 'Logo for',
    ar: 'شعار',
  },
  'brand.logo.aria_suffix': {
    en: 'placeholder',
    ar: 'مؤقّت',
  },
  // TypographySpecimen: aria-label={`${specimenLabel}: ${family} (${role})`}
  'brand.typography.aria_specimen': {
    en: 'Typeface specimen',
    ar: 'عيّنة خط',
  },

  // ════════════════════════════════════════════════════════════════════
  //  billing.*  — EN copied BYTE-IDENTICAL from
  //  dictionary-placeholder-fix-may16.ts. AR rendered into natural
  //  Khaleeji (the may16 source mirrored EN as a stop-gap).
  // ════════════════════════════════════════════════════════════════════

  // ── Affiliate / access-code field (pricing + teacher pages) ──────
  'billing.affiliate.heading': {
    en: 'Have an access code?',
    ar: 'عندك كود وصول؟',
  },
  'billing.affiliate.subheading_intro': {
    en: 'Enter a partner or teacher code to unlock your discounted annual rate.',
    ar: 'حُطّ كود شريك أو معلّم عشان تفتح سعرك السنوي المخفّض.',
  },
  'billing.affiliate.prompt_heading': {
    en: 'Got a code from a teacher or partner?',
    ar: 'عندك كود من معلّم أو شريك؟',
  },
  'billing.affiliate.apply_code': { en: 'Apply code', ar: 'طبّق الكود' },
  'billing.affiliate.apply_short': { en: 'Apply', ar: 'طبّق' },
  'billing.affiliate.aria_apply': {
    en: 'Apply discount code',
    ar: 'طبّق كود الخصم',
  },
  'billing.affiliate.checking': { en: 'Checking…', ar: 'نتحقّق…' },
  'billing.affiliate.eg_prefix': { en: 'e.g.', ar: 'مثال:' },
  'billing.affiliate.placeholder_compact': {
    en: 'Enter code',
    ar: 'حُطّ الكود',
  },
  'billing.affiliate.error.empty': {
    en: 'Enter a code first.',
    ar: 'حُطّ كود أول.',
  },
  'billing.affiliate.error.invalid': {
    en: "That code isn't valid or has expired.",
    ar: 'هذا الكود مو صالح أو انتهت صلاحيته.',
  },
  'billing.affiliate.error.network': {
    en: "Couldn't check that code just now — please try again.",
    ar: 'ما قدرنا نتحقّق من الكود الحين — حاول مرة ثانية.',
  },
  'billing.affiliate.applied_prefix': {
    en: 'Code applied:',
    ar: 'الكود مطبَّق:',
  },
  'billing.affiliate.applied_suffix': {
    en: '— your discount is locked in.',
    ar: '— خصمك صار مثبَّت.',
  },
  'billing.affiliate.remove': { en: 'Remove', ar: 'شيله' },
  'billing.affiliate.saves_prefix': { en: 'Saves you', ar: 'يوفّر لك' },
  'billing.affiliate.instead_of': { en: 'instead of', ar: 'بدل' },
  'billing.affiliate.or': { en: 'or', ar: 'أو' },
  'billing.affiliate.per_year_short': { en: '/yr', ar: '/سنة' },
  'billing.affiliate.label_student': {
    en: 'Student plan',
    ar: 'خطة الطالب',
  },
  'billing.affiliate.label_student_annual': {
    en: 'Student annual',
    ar: 'الطالب السنوي',
  },
  'billing.affiliate.label_teacher': {
    en: 'Teacher plan',
    ar: 'خطة المعلّم',
  },
  'billing.affiliate.label_teacher_annual': {
    en: 'Teacher annual',
    ar: 'المعلّم السنوي',
  },
  'billing.affiliate.no_monthly_discount': {
    en: 'Codes apply to annual plans only.',
    ar: 'الأكواد تنطبق على الخطط السنوية بس.',
  },
  'billing.affiliate.compact_blurb_saves': { en: 'Save', ar: 'وفّر' },
  'billing.affiliate.compact_blurb_on_annual': {
    en: 'on the annual plan',
    ar: 'على الخطة السنوية',
  },
  'billing.affiliate.subheading_on_student_annual': {
    en: 'Applied to your Student annual plan.',
    ar: 'مطبَّق على خطتك السنوية للطالب.',
  },
  'billing.affiliate.subheading_on_teacher_annual': {
    en: 'Applied to your Teacher annual plan.',
    ar: 'مطبَّق على خطتك السنوية للمعلّم.',
  },
  'billing.affiliate.subheading_save_prefix': {
    en: 'You save',
    ar: 'توفّر',
  },
  'billing.affiliate.on_annual_label': { en: 'on annual', ar: 'سنويًا' },

  // ── Trial countdown banner ───────────────────────────────────────
  'billing.trial.cta_upgrade_now': { en: 'Upgrade now', ar: 'طوّر الحين' },
  'billing.trial.left_suffix': { en: 'left', ar: 'باقي' },
  'billing.trial.subline_default': {
    en: "You're on a free trial — upgrade any time to keep full access.",
    ar: 'أنت على تجربة مجانية — طوّر أي وقت عشان تحتفظ بالوصول الكامل.',
  },
  'billing.trial.subline_last_day': {
    en: 'Last day of your free trial — upgrade now to avoid losing access.',
    ar: 'آخر يوم بتجربتك المجانية — طوّر الحين عشان ما تفقد الوصول.',
  },
  'billing.trial.unit_day': { en: 'day', ar: 'يوم' },
  'billing.trial.unit_days': { en: 'days', ar: 'أيام' },
  'billing.trial.unit_h': { en: 'h', ar: 'س' },
  'billing.trial.unit_m': { en: 'm', ar: 'د' },
}
