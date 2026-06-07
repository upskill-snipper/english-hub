/**
 * Conversion-surface override - 2026-05-16 (Bucket A, wave 3)
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

export const CONVERT_DICTIONARY: Record<string, { en: string; ar: string; es?: string }> = {
  // ════════════════════════════════════════════════════════════════════
  //  redeem.*  - /redeem promo-code redemption (public checkout surface)
  //  EN written fresh from src/app/redeem/page.tsx render points.
  // ════════════════════════════════════════════════════════════════════

  // <h1>{t('redeem.h1')}</h1> - page hero on the promo redemption page.
  'redeem.h1': {
    en: 'Redeem your code',
    ar: 'استخدم كودك',
    es: 'Canjea tu código',
  },
  // <p>{t('redeem.lead')}</p> - sub-hero, directly under the H1.
  'redeem.lead': {
    en: 'Enter your promo code below to unlock your discounted plan and continue to secure checkout.',
    ar: 'حُطّ كود الخصم تحت عشان تفتح خطتك بالسعر المخفّض وتكمّل للدفع الآمن.',
    es: 'Introduce tu código promocional abajo para desbloquear tu plan con descuento y continuar al pago seguro.',
  },
  // Amber banner shown when Stripe Checkout was cancelled (?cancelled=1).
  'redeem.cancelled': {
    en: 'Checkout was cancelled - your code is still valid, so you can try again whenever you’re ready.',
    ar: 'تم إلغاء الدفع - كودك لا زال صالح، تقدر تعيد المحاولة وقت ما تكون جاهز.',
    es: 'Se canceló el pago: tu código sigue siendo válido, así que puedes volver a intentarlo cuando estés listo.',
  },
  // Bold heading of the amber "annual only" notice above the code field.
  'redeem.annual_only.title': {
    en: 'Codes apply to annual plans only',
    ar: 'الأكواد تنطبق على الخطط السنوية بس',
    es: 'Los códigos solo se aplican a los planes anuales',
  },
  // Body line of that same amber notice.
  'redeem.annual_only.body': {
    en: 'Promo discounts unlock on annual subscriptions. You can switch to monthly later from your account.',
    ar: 'خصومات الأكواد تنفتح على الاشتراكات السنوية. تقدر تحوّل للشهري بعدين من حسابك.',
    es: 'Los descuentos promocionales se activan en las suscripciones anuales. Puedes cambiar al plan mensual más tarde desde tu cuenta.',
  },
  // <span>{t('redeem.field.code')}</span> - label above the code input
  // (also reused as its aria-label).
  'redeem.field.code': {
    en: 'Promo code',
    ar: 'كود الخصم',
    es: 'Código promocional',
  },
  // placeholder={t('redeem.field.placeholder')} on the code <Input>.
  'redeem.field.placeholder': {
    en: 'e.g. WELCOME20',
    ar: 'مثال: WELCOME20',
    es: 'p. ej. WELCOME20',
  },
  // Helper line under the code input (#promo-helper).
  'redeem.field.helper': {
    en: 'Codes aren’t case-sensitive - letters, numbers, hyphens and underscores only.',
    ar: 'الكود ما يفرّق بين الحروف الكبيرة والصغيرة - حروف وأرقام وشرطات وشرطات سفلية بس.',
    es: 'Los códigos no distinguen entre mayúsculas y minúsculas: solo letras, números, guiones y guiones bajos.',
  },
  // Shown while /api/promo/validate is in flight.
  'redeem.checking': {
    en: 'Checking your code…',
    ar: 'نتحقّق من كودك…',
    es: 'Comprobando tu código…',
  },
  // Success box: <strong>{strong}</strong> {pre} <price> {post}
  'redeem.applied_strong': {
    en: 'Code applied!',
    ar: 'تم تطبيق الكود!',
    es: '¡Código aplicado!',
  },
  'redeem.applied_pre': {
    en: 'Your price is now',
    ar: 'سعرك الحين صار',
    es: 'Tu precio ahora es',
  },
  'redeem.applied_post': {
    en: 'for the first year.',
    ar: 'للسنة الأولى.',
    es: 'durante el primer año.',
  },
  // Validation-failure messages (reasonToMessage switch).
  'redeem.reason.invalid_format': {
    en: 'That doesn’t look like a valid code. Please check it and try again.',
    ar: 'هذا ما يشبه كود صحيح. راجعه وحاول مرة ثانية.',
    es: 'Eso no parece un código válido. Compruébalo e inténtalo de nuevo.',
  },
  'redeem.reason.unknown_code': {
    en: 'We couldn’t find that code. It may have expired or been entered incorrectly.',
    ar: 'ما لقينا هذا الكود. يمكن انتهت صلاحيته أو انكتب غلط.',
    es: 'No encontramos ese código. Puede que haya caducado o que se haya introducido incorrectamente.',
  },
  'redeem.reason.default': {
    en: 'That code can’t be used right now. Please double-check it or try another.',
    ar: 'هذا الكود ما يصير يُستخدم الحين. تأكّد منه أو جرّب كود ثاني.',
    es: 'Ese código no se puede usar en este momento. Vuelve a comprobarlo o prueba con otro.',
  },
  // catch{} network errors.
  'redeem.err.unreachable': {
    en: 'We couldn’t reach the server to check your code. Please check your connection and try again.',
    ar: 'ما قدرنا نوصل للسيرفر عشان نتحقّق من كودك. تأكّد من اتصالك وحاول مرة ثانية.',
    es: 'No pudimos contactar con el servidor para comprobar tu código. Revisa tu conexión e inténtalo de nuevo.',
  },
  'redeem.err.start_checkout': {
    en: 'We couldn’t start checkout just now. Please try again in a moment.',
    ar: 'ما قدرنا نبدأ الدفع الحين. حاول مرة ثانية بعد شوي.',
    es: 'No pudimos iniciar el pago en este momento. Inténtalo de nuevo en un instante.',
  },
  'redeem.err.something_wrong': {
    en: 'Something went wrong. Please try again, or contact support if it keeps happening.',
    ar: 'صار شي غلط. حاول مرة ثانية، أو تواصل مع الدعم إذا استمرّ.',
    es: 'Algo salió mal. Inténtalo de nuevo o contacta con soporte si sigue ocurriendo.',
  },
  // Continue button - idle vs. submitting label.
  'redeem.continue': {
    en: 'Continue to checkout',
    ar: 'كمّل للدفع',
    es: 'Continuar al pago',
  },
  'redeem.opening': {
    en: 'Opening secure checkout…',
    ar: 'نفتح الدفع الآمن…',
    es: 'Abriendo el pago seguro…',
  },
  // Fine-print legal line with Terms / Privacy links.
  'redeem.legal.pre': {
    en: 'By continuing you agree to our',
    ar: 'بمتابعتك أنت توافق على',
    es: 'Al continuar, aceptas nuestros',
  },
  'redeem.legal.terms': {
    en: 'Terms of Service',
    ar: 'شروط الخدمة',
    es: 'Términos del servicio',
  },
  'redeem.legal.and': {
    en: 'and',
    ar: 'و',
    es: 'y',
  },
  'redeem.legal.privacy': {
    en: 'Privacy Policy',
    ar: 'سياسة الخصوصية',
    es: 'Política de privacidad',
  },
  // "What happens next" section heading + ordered list.
  'redeem.next.h2': {
    en: 'What happens next',
    ar: 'شنو يصير بعدين',
    es: 'Qué pasa a continuación',
  },
  'redeem.next.li1': {
    en: 'You’ll be taken to Stripe to complete payment securely.',
    ar: 'بنوديك إلى Stripe عشان تكمّل الدفع بأمان.',
    es: 'Te llevaremos a Stripe para completar el pago de forma segura.',
  },
  'redeem.next.li2': {
    en: 'Your discount is applied automatically at checkout.',
    ar: 'خصمك ينطبق تلقائيًا عند الدفع.',
    es: 'Tu descuento se aplica automáticamente en el pago.',
  },
  'redeem.next.li3': {
    en: 'Once payment is confirmed, your full access unlocks straight away - including in the app.',
    ar: 'أول ما يتأكّد الدفع، وصولك الكامل ينفتح على طول - حتى داخل التطبيق.',
    es: 'Una vez confirmado el pago, tu acceso completo se desbloquea de inmediato, incluso en la app.',
  },

  // ════════════════════════════════════════════════════════════════════
  //  join_school.*  - /join-school class-code join (public conversion)
  //  EN written fresh from src/app/join-school/page.tsx render points.
  // ════════════════════════════════════════════════════════════════════

  // Back link at the top of the form.
  'join_school.back_dashboard': {
    en: 'Back to dashboard',
    ar: 'رجوع للوحة التحكم',
    es: 'Volver al panel',
  },
  // <CardTitle>{t('join_school.h1')}</CardTitle>
  'join_school.h1': {
    en: 'Join your school',
    ar: 'انضم لمدرستك',
    es: 'Únete a tu colegio',
  },
  // <CardDescription>{t('join_school.description')}</CardDescription>
  'join_school.description': {
    en: 'Enter the class code from your teacher to link your account to your school.',
    ar: 'حُطّ كود الصف اللي عطاك إياه معلّمك عشان تربط حسابك بمدرستك.',
    es: 'Introduce el código de clase de tu profesor para vincular tu cuenta a tu colegio.',
  },
  // Muted info box above the form.
  'join_school.info_box': {
    en: 'Your teacher will have shared a 6-character code. Joining links your progress to your class - it won’t change your subscription.',
    ar: 'معلّمك بيكون شارك معاك كود من ٦ خانات. الانضمام يربط تقدّمك بصفّك - ما يغيّر اشتراكك.',
    es: 'Tu profesor te habrá compartido un código de 6 caracteres. Unirte vincula tu progreso con tu clase; no cambia tu suscripción.',
  },
  // <Label htmlFor="joinCode">{t('join_school.label.code')}</Label>
  'join_school.label.code': {
    en: 'Class code',
    ar: 'كود الصف',
    es: 'Código de clase',
  },
  // Helper under the code input.
  'join_school.code_hint': {
    en: '6 characters - letters and numbers only',
    ar: '٦ خانات - حروف وأرقام بس',
    es: '6 caracteres: solo letras y números',
  },
  // Submit button: loading vs. idle.
  'join_school.joining': {
    en: 'Joining…',
    ar: 'جاري الانضمام…',
    es: 'Uniéndote…',
  },
  'join_school.cta.join': {
    en: 'Join school',
    ar: 'انضم للمدرسة',
    es: 'Unirse al colegio',
  },
  // Error states (setError(...) call sites).
  'join_school.err.enter_code': {
    en: 'Please enter your class code.',
    ar: 'الرجاء إدخال كود الصف.',
    es: 'Introduce tu código de clase.',
  },
  'join_school.err.generic': {
    en: 'We couldn’t join you to that school. Please check the code and try again.',
    ar: 'ما قدرنا نضمّك لهذي المدرسة. راجع الكود وحاول مرة ثانية.',
    es: 'No pudimos unirte a ese colegio. Comprueba el código e inténtalo de nuevo.',
  },
  'join_school.err.network': {
    en: 'Network error - please check your connection and try again.',
    ar: 'خطأ في الشبكة - تأكّد من اتصالك وحاول مرة ثانية.',
    es: 'Error de red: comprueba tu conexión e inténtalo de nuevo.',
  },
  // Card footer: pre <link> post.
  'join_school.footer.pre': {
    en: 'Don’t have a code?',
    ar: 'ما عندك كود؟',
    es: '¿No tienes un código?',
  },
  'join_school.footer.link': {
    en: 'Go to your dashboard',
    ar: 'روح للوحة تحكّمك',
    es: 'Ir a tu panel',
  },
  'join_school.footer.post': {
    en: ' and carry on learning.',
    ar: ' وكمّل تعلّمك.',
    es: ' y sigue aprendiendo.',
  },
  // Success state: <h1>{joined_pre} <schoolName></h1>
  'join_school.success.joined_pre': {
    en: 'You’ve joined',
    ar: 'انضممت إلى',
    es: 'Te has unido a',
  },
  // Optional class line: {class_label} <class_name>
  'join_school.success.class_label': {
    en: 'Your class:',
    ar: 'صفّك:',
    es: 'Tu clase:',
  },
  // Role line: {linked_pre} <role>{linked_post}
  'join_school.success.linked_pre': {
    en: 'You’re linked as a',
    ar: 'أنت مرتبط كـ',
    es: 'Estás vinculado como',
  },
  'join_school.success.linked_post': {
    en: '. Your teacher can now see your progress.',
    ar: '. معلّمك يقدر يشوف تقدّمك الحين.',
    es: '. Tu profesor ya puede ver tu progreso.',
  },
  // Success CTA button.
  'join_school.success.go_dashboard': {
    en: 'Go to dashboard',
    ar: 'روح للوحة التحكم',
    es: 'Ir al panel',
  },

  // ════════════════════════════════════════════════════════════════════
  //  brand.*  - a11y labels on the /brand kit components
  //  (ColourSwatch, LogoAsset, TypographySpecimen). All four keys are
  //  screen-reader-only prose; brand names stay Latin. EN written fresh.
  // ════════════════════════════════════════════════════════════════════

  // ColourSwatch: aria-label={`${swatchLabel}: ${name} (${hex})`}
  'brand.colour.aria_swatch': {
    en: 'Colour swatch',
    ar: 'عيّنة لون',
    es: 'Muestra de color',
  },
  // LogoAsset: aria-label={`${ariaPrefix} ${brandName}, ${variant} ${ariaSuffix}`}
  'brand.logo.aria_prefix': {
    en: 'Logo for',
    ar: 'شعار',
    es: 'Logotipo de',
  },
  'brand.logo.aria_suffix': {
    en: 'placeholder',
    ar: 'مؤقّت',
    es: 'marcador de posición',
  },
  // TypographySpecimen: aria-label={`${specimenLabel}: ${family} (${role})`}
  'brand.typography.aria_specimen': {
    en: 'Typeface specimen',
    ar: 'عيّنة خط',
    es: 'Muestra de tipografía',
  },

  // ════════════════════════════════════════════════════════════════════
  //  billing.*  - EN copied BYTE-IDENTICAL from
  //  dictionary-placeholder-fix-may16.ts. AR rendered into natural
  //  Khaleeji (the may16 source mirrored EN as a stop-gap).
  // ════════════════════════════════════════════════════════════════════

  // ── Affiliate / access-code field (pricing + teacher pages) ──────
  'billing.affiliate.heading': {
    en: 'Have an access code?',
    ar: 'عندك كود وصول؟',
    es: '¿Tienes un código de acceso?',
  },
  'billing.affiliate.subheading_intro': {
    en: 'Enter a partner or teacher code to unlock your discounted annual rate.',
    ar: 'حُطّ كود شريك أو معلّم عشان تفتح سعرك السنوي المخفّض.',
    es: 'Introduce un código de socio o de profesor para desbloquear tu tarifa anual con descuento.',
  },
  'billing.affiliate.prompt_heading': {
    en: 'Got a code from a teacher or partner?',
    ar: 'عندك كود من معلّم أو شريك؟',
    es: '¿Tienes un código de un profesor o socio?',
  },
  'billing.affiliate.apply_code': { en: 'Apply code', ar: 'طبّق الكود', es: 'Aplicar código' },
  'billing.affiliate.apply_short': { en: 'Apply', ar: 'طبّق', es: 'Aplicar' },
  'billing.affiliate.aria_apply': {
    en: 'Apply discount code',
    ar: 'طبّق كود الخصم',
    es: 'Aplicar código de descuento',
  },
  'billing.affiliate.checking': { en: 'Checking…', ar: 'نتحقّق…', es: 'Comprobando…' },
  'billing.affiliate.eg_prefix': { en: 'e.g.', ar: 'مثال:', es: 'p. ej.' },
  'billing.affiliate.placeholder_compact': {
    en: 'Enter code',
    ar: 'حُطّ الكود',
    es: 'Introduce el código',
  },
  'billing.affiliate.error.empty': {
    en: 'Enter a code first.',
    ar: 'حُطّ كود أول.',
    es: 'Introduce un código primero.',
  },
  'billing.affiliate.error.invalid': {
    en: "That code isn't valid or has expired.",
    ar: 'هذا الكود مو صالح أو انتهت صلاحيته.',
    es: 'Ese código no es válido o ha caducado.',
  },
  'billing.affiliate.error.network': {
    en: "Couldn't check that code just now - please try again.",
    ar: 'ما قدرنا نتحقّق من الكود الحين - حاول مرة ثانية.',
    es: 'No pudimos comprobar ese código en este momento; inténtalo de nuevo.',
  },
  'billing.affiliate.applied_prefix': {
    en: 'Code applied:',
    ar: 'الكود مطبَّق:',
    es: 'Código aplicado:',
  },
  'billing.affiliate.applied_suffix': {
    en: '- your discount is locked in.',
    ar: '- خصمك صار مثبَّت.',
    es: '- tu descuento está asegurado.',
  },
  'billing.affiliate.remove': { en: 'Remove', ar: 'شيله', es: 'Quitar' },
  'billing.affiliate.saves_prefix': { en: 'Saves you', ar: 'يوفّر لك', es: 'Te ahorra' },
  'billing.affiliate.instead_of': { en: 'instead of', ar: 'بدل', es: 'en lugar de' },
  'billing.affiliate.or': { en: 'or', ar: 'أو', es: 'o' },
  'billing.affiliate.per_year_short': { en: '/yr', ar: '/سنة', es: '/año' },
  'billing.affiliate.label_student': {
    en: 'Student plan',
    ar: 'خطة الطالب',
    es: 'Plan de estudiante',
  },
  'billing.affiliate.label_student_annual': {
    en: 'Student annual',
    ar: 'الطالب السنوي',
    es: 'Estudiante anual',
  },
  'billing.affiliate.label_teacher': {
    en: 'Teacher plan',
    ar: 'خطة المعلّم',
    es: 'Plan de profesor',
  },
  'billing.affiliate.label_teacher_annual': {
    en: 'Teacher annual',
    ar: 'المعلّم السنوي',
    es: 'Profesor anual',
  },
  'billing.affiliate.no_monthly_discount': {
    en: 'Codes apply to annual plans only.',
    ar: 'الأكواد تنطبق على الخطط السنوية بس.',
    es: 'Los códigos solo se aplican a los planes anuales.',
  },
  'billing.affiliate.compact_blurb_saves': { en: 'Save', ar: 'وفّر', es: 'Ahorra' },
  'billing.affiliate.compact_blurb_on_annual': {
    en: 'on the annual plan',
    ar: 'على الخطة السنوية',
    es: 'en el plan anual',
  },
  'billing.affiliate.subheading_on_student_annual': {
    en: 'Applied to your Student annual plan.',
    ar: 'مطبَّق على خطتك السنوية للطالب.',
    es: 'Aplicado a tu plan anual de estudiante.',
  },
  'billing.affiliate.subheading_on_teacher_annual': {
    en: 'Applied to your Teacher annual plan.',
    ar: 'مطبَّق على خطتك السنوية للمعلّم.',
    es: 'Aplicado a tu plan anual de profesor.',
  },
  'billing.affiliate.subheading_save_prefix': {
    en: 'You save',
    ar: 'توفّر',
    es: 'Ahorras',
  },
  'billing.affiliate.on_annual_label': { en: 'on annual', ar: 'سنويًا', es: 'en el anual' },

  // ── Trial countdown banner ───────────────────────────────────────
  'billing.trial.cta_upgrade_now': { en: 'Upgrade now', ar: 'طوّر الحين', es: 'Mejorar ahora' },
  'billing.trial.left_suffix': { en: 'left', ar: 'باقي', es: 'restantes' },
  'billing.trial.subline_default': {
    en: "You're on a free trial - upgrade any time to keep full access.",
    ar: 'أنت على تجربة مجانية - طوّر أي وقت عشان تحتفظ بالوصول الكامل.',
    es: 'Estás en una prueba gratuita: mejora tu plan en cualquier momento para mantener el acceso completo.',
  },
  'billing.trial.subline_last_day': {
    en: 'Last day of your free trial - upgrade now to avoid losing access.',
    ar: 'آخر يوم بتجربتك المجانية - طوّر الحين عشان ما تفقد الوصول.',
    es: 'Último día de tu prueba gratuita: mejora tu plan ahora para no perder el acceso.',
  },
  'billing.trial.unit_day': { en: 'day', ar: 'يوم', es: 'día' },
  'billing.trial.unit_days': { en: 'days', ar: 'أيام', es: 'días' },
  'billing.trial.unit_h': { en: 'h', ar: 'س', es: 'h' },
  'billing.trial.unit_m': { en: 'm', ar: 'د', es: 'm' },
}
