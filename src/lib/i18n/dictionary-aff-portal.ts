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
  'aff.hero.eyebrow': {
    en: `Affiliate Programme`,
    ar: `برنامج الشركاء`,
    es: `Programa de afiliados`,
  },
  'aff.hero.title_lead': {
    en: `Earn recurring income`,
    ar: `اكسب دخل متكرر`,
    es: `Gana ingresos recurrentes`,
  },
  'aff.hero.title_highlight': {
    en: `championing better English`,
    ar: `وانت تدعم إنجليزي أفضل`,
    es: `defendiendo un mejor inglés`,
  },
  'aff.hero.title_tail': {
    en: `for every student you refer`,
    ar: `عن كل طالب تحوّله لنا`,
    es: `por cada estudiante que recomiendes`,
  },
  'aff.hero.subtitle': {
    en: `Share The English Hub with your audience and earn recurring commission on every annual subscription you refer. Independent, exam-board aligned GCSE, IGCSE, KS3 and EAL English support that families and schools genuinely return to.`,
    ar: `شارك The English Hub مع جمهورك واكسب عمولة متكررة على كل اشتراك سنوي تحوّله لنا. دعم مستقل في الإنجليزي متوافق مع مجالس الامتحانات لمراحل GCSE وIGCSE وKS3 وEAL، يرجعون له الأهالي والمدارس عن قناعة.`,
    es: `Comparte The English Hub con tu audiencia y gana una comisión recurrente por cada suscripción anual que recomiendes. Apoyo de inglés independiente y alineado con las juntas examinadoras para GCSE, IGCSE, KS3 y EAL, al que las familias y los colegios vuelven con convicción.`,
  },
  'aff.hero.bullet_cookie': {
    en: `90-day tracking cookie`,
    ar: `كوكي تتبّع لمدة 90 يوم`,
    es: `Cookie de seguimiento de 90 días`,
  },
  'aff.hero.bullet_payouts': { en: `Monthly payouts`, ar: `دفعات شهرية`, es: `Pagos mensuales` },
  'aff.hero.bullet_no_minimum': {
    en: `No minimum traffic`,
    ar: `بدون حد أدنى للزيارات`,
    es: `Sin tráfico mínimo`,
  },

  // ─── /affiliate · CTA blocks ────────────────────────────────────────
  'aff.cta.apply_now': { en: `Apply now`, ar: `قدّم طلبك الحين`, es: `Solicita ahora` },
  'aff.cta.partner_login': { en: `Partner login`, ar: `دخول الشركاء`, es: `Acceso de socios` },
  'aff.cta.eyebrow': { en: `Ready to start`, ar: `جاهز تبدأ`, es: `¿Listo para empezar?` },
  'aff.cta.heading': {
    en: `Turn your audience into recurring income`,
    ar: `حوّل جمهورك إلى دخل متكرر`,
    es: `Convierte tu audiencia en ingresos recurrentes`,
  },
  'aff.cta.body': {
    en: `Join the partner programme in minutes. Get your link, share it with the parents, students and educators who trust you, and earn commission every time a referral subscribes to an annual plan.`,
    ar: `انضم لبرنامج الشركاء في دقايق. خذ رابطك، وشاركه مع الأهالي والطلاب والمعلّمين اللي يثقون فيك، واكسب عمولة كل ما اشترك أحد من إحالاتك في خطة سنوية.`,
    es: `Únete al programa de socios en minutos. Consigue tu enlace, compártelo con los padres, estudiantes y educadores que confían en ti, y gana una comisión cada vez que alguien que recomiendas se suscribe a un plan anual.`,
  },

  // ─── /affiliate · Commission tiers ──────────────────────────────────
  'aff.tiers.heading': { en: `Commission tiers`, ar: `مستويات العمولة`, es: `Niveles de comisión` },
  'aff.tiers.subheading': {
    en: `The more students you refer, the more you earn on each one. Tiers reward consistent partners with higher recurring commission and added support.`,
    ar: `كل ما حوّلت طلاب أكثر، كل ما كسبت أكثر على كل واحد. المستويات تكافئ الشركاء المستمرّين بعمولة متكررة أعلى ودعم إضافي.`,
    es: `Cuantos más estudiantes recomiendes, más ganas por cada uno. Los niveles premian a los socios constantes con una comisión recurrente más alta y apoyo adicional.`,
  },
  'aff.tiers.top_tier_badge': { en: `Top tier`, ar: `أعلى مستوى`, es: `Nivel máximo` },
  'aff.tiers.tier_n': { en: `Tier {n}`, ar: `المستوى {n}`, es: `Nivel {n}` },
  'aff.tiers.per_signup_suffix': { en: `per signup`, ar: `لكل تسجيل`, es: `por registro` },
  'aff.tiers.flat_commission_caption': {
    en: `Recurring commission on each referred annual subscription`,
    ar: `عمولة متكررة على كل اشتراك سنوي محوّل منك`,
    es: `Comisión recurrente por cada suscripción anual que recomiendes`,
  },
  'aff.tiers.open_from_first_signup': {
    en: `Open from your first signup`,
    ar: `متاح من أول تسجيل لك`,
    es: `Disponible desde tu primer registro`,
  },
  'aff.tiers.from_signup_n': {
    en: `From signup {n}`,
    ar: `من التسجيل رقم {n}`,
    es: `Desde el registro {n}`,
  },
  'aff.tiers.feature_marketing_assets': {
    en: `Ready-to-use marketing assets`,
    ar: `مواد تسويقية جاهزة للاستخدام`,
    es: `Recursos de marketing listos para usar`,
  },
  'aff.tiers.feature_realtime_tracking': {
    en: `Real-time referral tracking`,
    ar: `تتبّع الإحالات لحظة بلحظة`,
    es: `Seguimiento de referidos en tiempo real`,
  },
  'aff.tiers.feature_priority_support': {
    en: `Priority partner support`,
    ar: `دعم شركاء بأولوية`,
    es: `Soporte prioritario para socios`,
  },
  'aff.tiers.feature_partner_manager': {
    en: `Dedicated partner manager`,
    ar: `مدير شركاء مخصّص لك`,
    es: `Gestor de socios dedicado`,
  },
  'aff.tiers.tier-1.description': {
    en: `20% on every plan you refer, paid monthly. No minimum traffic, no exclusivity.`,
    ar: `20% على كل خطة تحوّلها، تنصرف شهرياً. بدون حد أدنى للزيارات، وبدون حصرية.`,
    es: `20% sobre cada plan que recomiendes, pagado mensualmente. Sin tráfico mínimo ni exclusividad.`,
  },
  'aff.tiers.tier-2.description': {
    en: `25% commission once you cross 10 paid referrals - automatic upgrade, no application.`,
    ar: `عمولة 25% أول ما تتجاوز 10 إحالات مدفوعة - ترقية تلقائية، بدون ما تقدّم طلب.`,
    es: `Comisión del 25% en cuanto superes los 10 referidos de pago: ascenso automático, sin solicitud.`,
  },
  'aff.tiers.tier-3.description': {
    en: `30% commission at 25 paid referrals, plus access to co-marketing slots in our newsletter.`,
    ar: `عمولة 30% عند 25 إحالة مدفوعة، وزيادة على كذا تدخل في مساحات تسويق مشترك بنشرتنا البريدية.`,
    es: `Comisión del 30% al alcanzar 25 referidos de pago, además de acceso a espacios de marketing conjunto en nuestro boletín.`,
  },
  'aff.tiers.tier-4.description': {
    en: `35% commission at 50 paid referrals, featured-creator placement and quarterly creator calls.`,
    ar: `عمولة 35% عند 50 إحالة مدفوعة، وظهور كصانع محتوى مميّز، ومكالمات ربع سنوية لصنّاع المحتوى.`,
    es: `Comisión del 35% al alcanzar 50 referidos de pago, presencia destacada como creador y llamadas trimestrales para creadores.`,
  },
  'aff.tiers.tier-5.description': {
    en: `Custom commission, dedicated partner manager, exclusive content access and co-branded resources.`,
    ar: `عمولة مخصّصة، ومدير شركاء خاص لك، ووصول لمحتوى حصري، ومواد بعلامة مشتركة.`,
    es: `Comisión personalizada, gestor de socios dedicado, acceso a contenido exclusivo y recursos de marca compartida.`,
  },

  // ─── /affiliate · Calculator block ──────────────────────────────────
  'aff.calc.heading': {
    en: `Income that grows with you`,
    ar: `دخل يكبر معك`,
    es: `Ingresos que crecen contigo`,
  },
  'aff.calc.body': {
    en: `Commission is recurring for as long as your referral keeps their subscription active, so a steady stream of signups builds dependable income over time rather than a one-off payment.`,
    ar: `العمولة متكررة طول ما الإحالة محتفظة باشتراكها فعّال، فتدفّق ثابت من التسجيلات يبني لك دخل تعتمد عليه مع الوقت، مو مجرّد دفعة وحدة وخلاص.`,
    es: `La comisión es recurrente mientras tu referido mantenga su suscripción activa, así que un flujo constante de registros construye unos ingresos fiables con el tiempo, en lugar de un pago único.`,
  },
  'aff.calc.bullet_auto_upgrades': {
    en: `Commission follows plan upgrades automatically`,
    ar: `العمولة تتبع ترقيات الخطة تلقائياً`,
    es: `La comisión sigue automáticamente las mejoras de plan`,
  },
  'aff.calc.bullet_every_student': {
    en: `Earn on every student referred through your link`,
    ar: `اكسب على كل طالب يجي من رابطك`,
    es: `Gana por cada estudiante que llegue a través de tu enlace`,
  },
  'aff.calc.bullet_global': {
    en: `Open to partners worldwide`,
    ar: `متاح للشركاء من أي مكان بالعالم`,
    es: `Abierto a socios de todo el mundo`,
  },

  // ─── /affiliate · How it works ──────────────────────────────────────
  'aff.how.heading': { en: `How it works`, ar: `كيف تشتغل`, es: `Cómo funciona` },
  'aff.how.subheading': {
    en: `Three simple steps from sign-up to your first commission.`,
    ar: `ثلاث خطوات بسيطة من التسجيل لين أول عمولة لك.`,
    es: `Tres pasos sencillos desde el registro hasta tu primera comisión.`,
  },
  'aff.how.step_label': { en: `Step`, ar: `خطوة`, es: `Paso` },
  'aff.how.step1_title': {
    en: `Apply and get approved`,
    ar: `قدّم وخذ الموافقة`,
    es: `Solicita y obtén la aprobación`,
  },
  'aff.how.step1_body': {
    en: `Submit a short application telling us about your audience. Once approved, you get instant access to your partner dashboard, unique link and referral code.`,
    ar: `قدّم طلب قصير تعرّفنا فيه على جمهورك. أول ما تنوافق، يفتح لك على طول لوحة الشركاء ورابطك الخاص ورمز الإحالة.`,
    es: `Envía una breve solicitud contándonos sobre tu audiencia. Una vez aprobada, obtienes acceso inmediato a tu panel de socio, tu enlace único y tu código de referido.`,
  },
  'aff.how.step2_title': { en: `Share your link`, ar: `شارك رابطك`, es: `Comparte tu enlace` },
  'aff.how.step2_body': {
    en: `Promote The English Hub through your website, newsletter, social channels or classroom. Use our ready-made assets or your own words, whichever fits your audience best.`,
    ar: `روّج لـ The English Hub عبر موقعك أو نشرتك البريدية أو حساباتك بالسوشال أو صفّك. استخدم موادنا الجاهزة أو كلامك انت، اللي يناسب جمهورك أكثر.`,
    es: `Promociona The English Hub en tu sitio web, boletín, redes sociales o aula. Usa nuestros recursos listos para usar o tus propias palabras, lo que mejor se adapte a tu audiencia.`,
  },
  'aff.how.step3_title': {
    en: `Earn recurring commission`,
    ar: `اكسب عمولة متكررة`,
    es: `Gana comisión recurrente`,
  },
  'aff.how.step3_body': {
    en: `When someone subscribes to an annual plan through your link, you earn recurring commission. Track every referral in real time and receive monthly payouts.`,
    ar: `لما أحد يشترك في خطة سنوية عبر رابطك، تكسب عمولة متكررة. تابع كل إحالة لحظة بلحظة، واستلم دفعاتك شهرياً.`,
    es: `Cuando alguien se suscribe a un plan anual a través de tu enlace, ganas una comisión recurrente. Haz seguimiento de cada referido en tiempo real y recibe pagos mensuales.`,
  },

  // ─── /affiliate · FAQ ───────────────────────────────────────────────
  'aff.faq.heading': {
    en: `Frequently asked questions`,
    ar: `الأسئلة الشائعة`,
    es: `Preguntas frecuentes`,
  },
  'aff.faq.subheading': {
    en: `Everything you need to know about the partner programme.`,
    ar: `كل اللي تحتاج تعرفه عن برنامج الشركاء.`,
    es: `Todo lo que necesitas saber sobre el programa de socios.`,
  },
  'aff.faq.eligibility.q': {
    en: `Who can join the affiliate program?`,
    ar: `مين يقدر ينضم لبرنامج الشركاء؟`,
    es: `¿Quién puede unirse al programa de afiliados?`,
  },
  'aff.faq.eligibility.a': {
    en: `Anyone with an audience of UK GCSE/IGCSE English students, parents or teachers. Tutors, content creators, school staff and bloggers all qualify - there is no minimum follower count for Tier 1.`,
    ar: `أي أحد عنده جمهور من طلاب إنجليزي GCSE/IGCSE بالمملكة المتحدة أو أهاليهم أو معلّميهم. المدرّسين الخصوصيّين وصنّاع المحتوى وموظّفي المدارس والمدوّنين كلهم مؤهّلين - ما فيه حد أدنى للمتابعين في المستوى الأول.`,
    es: `Cualquier persona con una audiencia de estudiantes, padres o profesores de inglés GCSE/IGCSE del Reino Unido. Tutores, creadores de contenido, personal escolar y blogueros, todos cumplen los requisitos: no hay un número mínimo de seguidores para el Nivel 1.`,
  },
  'aff.faq.payouts.q': {
    en: `How and when are commissions paid?`,
    ar: `كيف ومتى تنصرف العمولات؟`,
    es: `¿Cómo y cuándo se pagan las comisiones?`,
  },
  'aff.faq.payouts.a': {
    en: `Monthly via Stripe or PayPal, on the 5th of each month for the previous month's referrals that cleared the 30-day refund window.`,
    ar: `شهرياً عبر Stripe أو PayPal، يوم 5 من كل شهر، عن إحالات الشهر اللي راح اللي عدّت فترة الاسترداد 30 يوم.`,
    es: `Mensualmente a través de Stripe o PayPal, el día 5 de cada mes, por los referidos del mes anterior que hayan superado el plazo de reembolso de 30 días.`,
  },
  'aff.faq.cookies.q': {
    en: `How long do tracking cookies last?`,
    ar: `كم تبقى كوكيز التتبّع شغّالة؟`,
    es: `¿Cuánto duran las cookies de seguimiento?`,
  },
  'aff.faq.cookies.a': {
    en: `90 days. If a referred visitor signs up at any point inside that window, the conversion is yours.`,
    ar: `90 يوم. إذا الزائر اللي حوّلته سجّل في أي وقت داخل هالمدة، التحويل يحتسب لك.`,
    es: `90 días. Si un visitante referido se registra en cualquier momento dentro de ese plazo, la conversión es tuya.`,
  },
  'aff.faq.renewals.q': {
    en: `Do I earn on plan renewals?`,
    ar: `أكسب على تجديدات الخطة؟`,
    es: `¿Gano por las renovaciones de plan?`,
  },
  'aff.faq.renewals.a': {
    en: `Yes - commission is paid on the lifetime of the subscription for as long as the customer remains active and you remain an affiliate in good standing.`,
    ar: `إي - العمولة تنصرف طول عمر الاشتراك، ما دام العميل فعّال وانت محافظ على وضعك كشريك بحالة سليمة.`,
    es: `Sí: la comisión se paga durante toda la vida de la suscripción, mientras el cliente siga activo y tú sigas siendo un afiliado en regla.`,
  },
  'aff.faq.tier_upgrade.q': {
    en: `How do I move up a tier?`,
    ar: `كيف أطلع مستوى أعلى؟`,
    es: `¿Cómo subo de nivel?`,
  },
  'aff.faq.tier_upgrade.a': {
    en: `Automatically. The moment your paid-referral count crosses a threshold (10/25/50), your dashboard re-rates you and the higher commission applies to all future referrals.`,
    ar: `تلقائياً. أول ما عدد إحالاتك المدفوعة يتجاوز حد معيّن (10/25/50)، لوحتك تعيد ترتيبك، والعمولة الأعلى تنطبق على كل الإحالات الجاية.`,
    es: `Automáticamente. En cuanto tu número de referidos de pago supera un umbral (10/25/50), tu panel te reclasifica y la comisión más alta se aplica a todos los referidos futuros.`,
  },

  // ─── /affiliate/dashboard ───────────────────────────────────────────
  'aff.dashboard.welcome_back': {
    en: `Welcome back`,
    ar: `حيّاك الله مرة ثانية`,
    es: `Bienvenido de nuevo`,
  },
  'aff.dashboard.title': { en: `Partner dashboard`, ar: `لوحة الشريك`, es: `Panel de socio` },
  'aff.dashboard.create_link': { en: `Create link`, ar: `أنشئ رابط`, es: `Crear enlace` },
  'aff.dashboard.total_clicks': { en: `Total clicks`, ar: `إجمالي النقرات`, es: `Clics totales` },
  'aff.dashboard.conversions': { en: `Conversions`, ar: `التحويلات`, es: `Conversiones` },
  'aff.dashboard.conversion_rate': {
    en: `Conversion rate`,
    ar: `معدّل التحويل`,
    es: `Tasa de conversión`,
  },
  'aff.dashboard.total_earnings': {
    en: `Total earnings`,
    ar: `إجمالي الأرباح`,
    es: `Ganancias totales`,
  },
  'aff.dashboard.tier_progress': {
    en: `Tier progress`,
    ar: `تقدّمك بالمستويات`,
    es: `Progreso de nivel`,
  },
  'aff.dashboard.tier_progress_subtitle': {
    en: `{n} more referrals to reach {tier}`,
    ar: `باقي لك {n} إحالة توصل {tier}`,
    es: `{n} referidos más para alcanzar {tier}`,
  },
  'aff.dashboard.top_tier_reached': {
    en: `You've reached the top tier - nicely done.`,
    ar: `وصلت لأعلى مستوى - عاش، شغل نظيف.`,
    es: `Has alcanzado el nivel máximo: bien hecho.`,
  },
  'aff.dashboard.current_rate': { en: `current rate`, ar: `النسبة الحالية`, es: `tasa actual` },
  'aff.dashboard.next_rate': { en: `next rate`, ar: `النسبة الجاية`, es: `próxima tasa` },
  'aff.dashboard.referrals_count_label': { en: `referrals`, ar: `إحالة`, es: `referidos` },
  'aff.dashboard.goal_label': { en: `goal`, ar: `الهدف`, es: `meta` },
  'aff.dashboard.top_links_title': {
    en: `Top performing links`,
    ar: `أفضل الروابط أداءً`,
    es: `Enlaces con mejor rendimiento`,
  },
  'aff.dashboard.top_links_subtitle': {
    en: `Your highest-earning tracking links`,
    ar: `روابط التتبّع الأكثر ربحاً عندك`,
    es: `Tus enlaces de seguimiento más rentables`,
  },
  'aff.dashboard.no_data': {
    en: `No data yet - share a link to start tracking.`,
    ar: `ما فيه بيانات بعد - شارك رابط وبيبدأ التتبّع.`,
    es: `Aún no hay datos: comparte un enlace para empezar a hacer seguimiento.`,
  },
  'aff.dashboard.col_link': { en: `Link`, ar: `الرابط`, es: `Enlace` },
  'aff.dashboard.col_clicks': { en: `Clicks`, ar: `النقرات`, es: `Clics` },
  'aff.dashboard.col_conv': { en: `Conversions`, ar: `التحويلات`, es: `Conversiones` },
  'aff.dashboard.col_earnings': { en: `Earnings`, ar: `الأرباح`, es: `Ganancias` },

  // ─── /affiliate/links ───────────────────────────────────────────────
  'aff.links.title': { en: `Tracking links`, ar: `روابط التتبّع`, es: `Enlaces de seguimiento` },
  'aff.links.subtitle': {
    en: `Build and copy your referral links.`,
    ar: `جهّز روابط الإحالة حقّتك وانسخها.`,
    es: `Crea y copia tus enlaces de referido.`,
  },
  'aff.links.builder_title': { en: `Link builder`, ar: `منشئ الروابط`, es: `Generador de enlaces` },
  'aff.links.destination_label': { en: `Destination`, ar: `الوجهة`, es: `Destino` },
  'aff.links.utm_preset_label': { en: `UTM preset`, ar: `إعداد UTM جاهز`, es: `Preajuste UTM` },
  'aff.links.custom_tag_label': {
    en: `Custom tag (optional)`,
    ar: `وسم مخصّص (اختياري)`,
    es: `Etiqueta personalizada (opcional)`,
  },
  'aff.links.custom_tag_placeholder': {
    en: `e.g. spring-campaign`,
    ar: `مثلاً: حملة-الربيع`,
    es: `p. ej. campana-primavera`,
  },
  'aff.links.your_tracking_link': {
    en: `Your tracking link`,
    ar: `رابط التتبّع حقّك`,
    es: `Tu enlace de seguimiento`,
  },
  'aff.links.copy': { en: `Copy`, ar: `انسخ`, es: `Copiar` },
  'aff.links.copied': { en: `Copied`, ar: `تم النسخ`, es: `Copiado` },
  'aff.links.quick_links_title': { en: `Quick links`, ar: `روابط سريعة`, es: `Enlaces rápidos` },
  'aff.links.quick_links_subtitle': {
    en: `Ready-made links to popular destinations.`,
    ar: `روابط جاهزة لأشهر الوجهات.`,
    es: `Enlaces listos para los destinos más populares.`,
  },
  'aff.links.dest.homepage': { en: `Homepage`, ar: `الصفحة الرئيسية`, es: `Página de inicio` },
  'aff.links.dest.pricing': { en: `Pricing`, ar: `الأسعار`, es: `Precios` },
  'aff.links.dest.igcse': { en: `IGCSE landing`, ar: `صفحة IGCSE`, es: `Página de IGCSE` },
  'aff.links.dest.mock_exams': {
    en: `Mock exam builder`,
    ar: `منشئ الامتحانات التجريبية`,
    es: `Generador de exámenes de prueba`,
  },
  'aff.links.dest.for_schools': { en: `For schools`, ar: `للمدارس`, es: `Para colegios` },
  'aff.links.preset.social': {
    en: `Social media (utm_source=social)`,
    ar: `سوشال ميديا (utm_source=social)`,
    es: `Redes sociales (utm_source=social)`,
  },
  'aff.links.preset.newsletter': {
    en: `Newsletter (utm_source=newsletter)`,
    ar: `نشرة بريدية (utm_source=newsletter)`,
    es: `Boletín (utm_source=newsletter)`,
  },
  'aff.links.preset.blog': {
    en: `Blog post (utm_source=blog)`,
    ar: `تدوينة (utm_source=blog)`,
    es: `Entrada de blog (utm_source=blog)`,
  },
  'aff.links.preset.youtube': {
    en: `YouTube description (utm_source=youtube)`,
    ar: `وصف يوتيوب (utm_source=youtube)`,
    es: `Descripción de YouTube (utm_source=youtube)`,
  },

  // ─── /affiliate/payouts ─────────────────────────────────────────────
  'aff.payouts.title': { en: `Payouts`, ar: `الدفعات`, es: `Pagos` },
  'aff.payouts.subtitle': {
    en: `Track your balance and manage how you get paid.`,
    ar: `تابع رصيدك وتحكّم بطريقة استلامك للفلوس.`,
    es: `Controla tu saldo y gestiona cómo recibes tus pagos.`,
  },
  'aff.payouts.pending_balance': {
    en: `Pending balance`,
    ar: `الرصيد المعلّق`,
    es: `Saldo pendiente`,
  },
  'aff.payouts.lifetime_earnings': {
    en: `Lifetime earnings`,
    ar: `إجمالي الأرباح`,
    es: `Ganancias totales`,
  },
  'aff.payouts.minimum_payout': {
    en: `Minimum payout`,
    ar: `الحد الأدنى للصرف`,
    es: `Pago mínimo`,
  },
  'aff.payouts.monthly_note_lead': {
    en: `Paid monthly.`,
    ar: `تنصرف شهرياً.`,
    es: `Se paga mensualmente.`,
  },
  'aff.payouts.monthly_note_body': {
    en: `Payouts are sent on the 5th of each month once your balance clears £{min}.`,
    ar: `الدفعات ترسل يوم 5 من كل شهر أول ما رصيدك يعدّي £{min}.`,
    es: `Los pagos se envían el día 5 de cada mes en cuanto tu saldo supera £{min}.`,
  },
  'aff.payouts.payment_method': { en: `Payment method`, ar: `طريقة الدفع`, es: `Método de pago` },
  'aff.payouts.payment_method_subtitle': {
    en: `Choose how you'd like to receive your commission.`,
    ar: `اختر كيف تبي تستلم عمولتك.`,
    es: `Elige cómo quieres recibir tu comisión.`,
  },
  'aff.payouts.method_paypal': { en: `PayPal`, ar: `PayPal`, es: `PayPal` },
  'aff.payouts.method_bank': {
    en: `Bank transfer`,
    ar: `تحويل بنكي`,
    es: `Transferencia bancaria`,
  },
  'aff.payouts.paypal_email_label': {
    en: `PayPal email`,
    ar: `إيميل PayPal`,
    es: `Correo de PayPal`,
  },
  'aff.payouts.paypal_email_placeholder': {
    en: `you@example.com`,
    ar: `you@example.com`,
    es: `you@example.com`,
  },
  'aff.payouts.account_ref_label': {
    en: `Account reference`,
    ar: `مرجع الحساب`,
    es: `Referencia de la cuenta`,
  },
  'aff.payouts.account_ref_placeholder': {
    en: `Sort code & account number`,
    ar: `رمز الفرز ورقم الحساب`,
    es: `Código de banco y número de cuenta`,
  },
  'aff.payouts.bank_demo_hint': {
    en: `Demo only - no real bank details are stored.`,
    ar: `تجريبي بس - ما نخزّن أي بيانات بنكية حقيقية.`,
    es: `Solo demostración: no se almacenan datos bancarios reales.`,
  },
  'aff.payouts.save_payment_method': {
    en: `Save payment method`,
    ar: `احفظ طريقة الدفع`,
    es: `Guardar método de pago`,
  },
  'aff.payouts.saved': { en: `Saved`, ar: `انحفظ`, es: `Guardado` },
  'aff.payouts.history_title': {
    en: `Payout history`,
    ar: `سجلّ الدفعات`,
    es: `Historial de pagos`,
  },
  'aff.payouts.col_period': { en: `Period`, ar: `الفترة`, es: `Periodo` },
  'aff.payouts.col_method': { en: `Method`, ar: `الطريقة`, es: `Método` },
  'aff.payouts.col_date': { en: `Date`, ar: `التاريخ`, es: `Fecha` },
  'aff.payouts.col_status': { en: `Status`, ar: `الحالة`, es: `Estado` },
  'aff.payouts.col_amount': { en: `Amount`, ar: `المبلغ`, es: `Importe` },
  'aff.payouts.status_paid': { en: `Paid`, ar: `مدفوعة`, es: `Pagado` },
  'aff.payouts.status_processing': { en: `Processing`, ar: `قيد المعالجة`, es: `En proceso` },
  'aff.payouts.status_pending': { en: `Pending`, ar: `معلّقة`, es: `Pendiente` },

  // ─── /affiliate/resources ───────────────────────────────────────────
  'aff.resources.title': {
    en: `Marketing resources`,
    ar: `مواد التسويق`,
    es: `Recursos de marketing`,
  },
  'aff.resources.subtitle': {
    en: `Banners, copy templates and screenshots ready to share.`,
    ar: `بوسترات وقوالب نصوص ولقطات شاشة جاهزة تشاركها.`,
    es: `Banners, plantillas de texto y capturas de pantalla listas para compartir.`,
  },
  'aff.resources.banners_title': { en: `Banners`, ar: `البوسترات`, es: `Banners` },
  'aff.resources.placeholder_suffix': { en: `preview`, ar: `معاينة`, es: `vista previa` },
  'aff.resources.copy_templates_title': {
    en: `Copy templates`,
    ar: `قوالب النصوص`,
    es: `Plantillas de texto`,
  },
  'aff.resources.copy_templates_subtitle_lead': {
    en: `Each template includes a`,
    ar: `كل قالب فيه`,
    es: `Cada plantilla incluye un`,
  },
  'aff.resources.copy_templates_subtitle_tail': {
    en: `placeholder - replace it with your tracking link.`,
    ar: `خانة بديلة - بدّلها برابط التتبّع حقّك.`,
    es: `marcador de posición: sustitúyelo por tu enlace de seguimiento.`,
  },
  'aff.resources.copy': { en: `Copy`, ar: `انسخ`, es: `Copiar` },
  'aff.resources.copied': { en: `Copied`, ar: `تم النسخ`, es: `Copiado` },
  'aff.resources.screenshots_title': {
    en: `Product screenshots`,
    ar: `لقطات المنتج`,
    es: `Capturas del producto`,
  },
  'aff.resources.screenshots_subtitle': {
    en: `High-resolution screenshots for your reviews and posts.`,
    ar: `لقطات شاشة بدقّة عالية لمراجعاتك ومنشوراتك.`,
    es: `Capturas de pantalla en alta resolución para tus reseñas y publicaciones.`,
  },
  'aff.resources.download': { en: `Download`, ar: `حمّل`, es: `Descargar` },
  'aff.resources.banner.leaderboard': {
    en: `Leaderboard 728×90`,
    ar: `ليدربورد 728×90`,
    es: `Leaderboard 728×90`,
  },
  'aff.resources.banner.medium_rectangle': {
    en: `Medium rectangle 300×250`,
    ar: `مستطيل متوسط 300×250`,
    es: `Rectángulo mediano 300×250`,
  },
  'aff.resources.banner.square': {
    en: `Square 250×250`,
    ar: `مربّع 250×250`,
    es: `Cuadrado 250×250`,
  },
  'aff.resources.banner.skyscraper': {
    en: `Skyscraper 160×600`,
    ar: `سكايسكرابر 160×600`,
    es: `Skyscraper 160×600`,
  },
  'aff.resources.copy.short_social.label': {
    en: `Short-form social post`,
    ar: `منشور سوشال قصير`,
    es: `Publicación social breve`,
  },
  'aff.resources.copy.short_social.body': {
    en: `My students keep telling me about The English Hub - clean GCSE & IGCSE revision, exam-board specific, properly graded model answers. Worth a look: {link}`,
    ar: `طلابي ما يخلّون يكلّموني عن The English Hub - مراجعة GCSE وIGCSE نظيفة، مخصّصة حسب مجلس الامتحان، وإجابات نموذجية مصحّحة صح. يستاهل تشوفه: {link}`,
    es: `Mis alumnos no paran de hablarme de The English Hub: repaso de GCSE e IGCSE bien organizado, específico para cada junta examinadora, con respuestas modelo correctamente calificadas. Merece la pena echarle un vistazo: {link}`,
  },
  'aff.resources.copy.newsletter.label': {
    en: `Newsletter blurb`,
    ar: `فقرة للنشرة البريدية`,
    es: `Texto para el boletín`,
  },
  'aff.resources.copy.newsletter.body': {
    en: `I've been recommending The English Hub to parents asking how to support GCSE English revision at home. The exam-board switcher means you get materials matched to AQA, Edexcel, OCR or Eduqas without picking through generic content. {link}`,
    ar: `صرت أنصح الأهالي اللي يسألوني كيف يدعمون مراجعة إنجليزي GCSE بالبيت بـ The English Hub. مبدّل مجلس الامتحان يخليك تاخذ مواد مطابقة لـ AQA أو Edexcel أو OCR أو Eduqas من غير ما تنبش بمحتوى عام. {link}`,
    es: `He estado recomendando The English Hub a los padres que me preguntan cómo apoyar el repaso de inglés GCSE en casa. El selector de junta examinadora hace que obtengas materiales adaptados a AQA, Edexcel, OCR o Eduqas sin tener que rebuscar entre contenido genérico. {link}`,
  },
  'aff.resources.copy.blog_review.label': {
    en: `Blog review intro paragraph`,
    ar: `فقرة افتتاحية لمراجعة بالمدوّنة`,
    es: `Párrafo introductorio de reseña para el blog`,
  },
  'aff.resources.copy.blog_review.body': {
    en: `I've spent the last few weeks testing The English Hub against three of the most-recommended GCSE English revision platforms. Here is what stood out - and where it does not yet match the competition. {link}`,
    ar: `قضّيت الأسابيع اللي راحت أجرّب The English Hub وأقارنه بثلاث من أكثر منصّات مراجعة إنجليزي GCSE اللي ينصحون فيها. هذا اللي برز لي - ووين لسّه ما يجاري المنافسين. {link}`,
    es: `He pasado las últimas semanas probando The English Hub frente a tres de las plataformas de repaso de inglés GCSE más recomendadas. Esto es lo que destacó, y dónde todavía no llega al nivel de la competencia. {link}`,
  },
  'aff.resources.shot.dashboard_overview': {
    en: `Student dashboard overview`,
    ar: `نظرة عامة على لوحة الطالب`,
    es: `Vista general del panel del estudiante`,
  },
  'aff.resources.shot.practice_question': {
    en: `Practice question with AO breakdown`,
    ar: `سؤال تدريبي مع تفصيل أهداف التقييم (AO)`,
    es: `Pregunta de práctica con desglose por AO`,
  },
  'aff.resources.shot.essay_feedback': {
    en: `AI essay-feedback report`,
    ar: `تقرير تقييم المقال بالذكاء الاصطناعي`,
    es: `Informe de comentarios de redacción con IA`,
  },
  'aff.resources.shot.progress_report': {
    en: `Parent progress report`,
    ar: `تقرير تقدّم لولي الأمر`,
    es: `Informe de progreso para padres`,
  },

  // ─── /affiliate/login ───────────────────────────────────────────────
  'aff.login.back_to_programme': {
    en: `Back to programme`,
    ar: `رجوع للبرنامج`,
    es: `Volver al programa`,
  },
  'aff.login.title': { en: `Partner login`, ar: `دخول الشركاء`, es: `Acceso de socios` },
  'aff.login.subtitle': {
    en: `Sign in to your partner dashboard.`,
    ar: `سجّل دخولك للوحة الشريك حقّتك.`,
    es: `Inicia sesión en tu panel de socio.`,
  },
  'aff.login.email_label': { en: `Email`, ar: `الإيميل`, es: `Correo electrónico` },
  'aff.login.email_placeholder': {
    en: `you@example.com`,
    ar: `you@example.com`,
    es: `you@example.com`,
  },
  'aff.login.password_label': { en: `Password`, ar: `كلمة المرور`, es: `Contraseña` },
  'aff.login.forgot': { en: `Forgot?`, ar: `نسيتها؟`, es: `¿La olvidaste?` },
  'aff.login.enter_both': {
    en: `Enter both your email and password.`,
    ar: `دخّل إيميلك وكلمة المرور الاثنين.`,
    es: `Introduce tu correo electrónico y tu contraseña.`,
  },
  'aff.login.signing_in': { en: `Signing in…`, ar: `جاري تسجيل الدخول…`, es: `Iniciando sesión…` },
  'aff.login.sign_in': { en: `Sign in`, ar: `تسجيل الدخول`, es: `Iniciar sesión` },
  'aff.login.new_here': { en: `New here?`, ar: `أول مرة هنا؟`, es: `¿Eres nuevo aquí?` },
  'aff.login.apply_to_join': { en: `Apply to join`, ar: `قدّم عشان تنضم`, es: `Solicita unirte` },

  // ─── /affiliate/signup ──────────────────────────────────────────────
  'aff.signup.back_to_programme': {
    en: `Back to programme`,
    ar: `رجوع للبرنامج`,
    es: `Volver al programa`,
  },
  'aff.signup.title': {
    en: `Apply to the partner programme`,
    ar: `قدّم لبرنامج الشركاء`,
    es: `Solicita unirte al programa de socios`,
  },
  'aff.signup.subtitle': {
    en: `Tell us about your audience and we'll be in touch.`,
    ar: `عرّفنا على جمهورك وبنتواصل معك.`,
    es: `Cuéntanos sobre tu audiencia y nos pondremos en contacto contigo.`,
  },
  'aff.signup.full_name_label': { en: `Full name`, ar: `الاسم الكامل`, es: `Nombre completo` },
  'aff.signup.full_name_placeholder': {
    en: `Your full name`,
    ar: `اسمك الكامل`,
    es: `Tu nombre completo`,
  },
  'aff.signup.email_label': { en: `Email`, ar: `الإيميل`, es: `Correo electrónico` },
  'aff.signup.email_placeholder': {
    en: `you@example.com`,
    ar: `you@example.com`,
    es: `you@example.com`,
  },
  'aff.signup.website_label': {
    en: `Website or main channel`,
    ar: `موقعك أو قناتك الرئيسية`,
    es: `Sitio web o canal principal`,
  },
  'aff.signup.website_placeholder': {
    en: `https://…`,
    ar: `https://…`,
    es: `https://…`,
  },
  'aff.signup.audience_size_label': {
    en: `Audience size`,
    ar: `حجم الجمهور`,
    es: `Tamaño de la audiencia`,
  },
  'aff.signup.audience_size_placeholder': {
    en: `Select audience size`,
    ar: `اختر حجم الجمهور`,
    es: `Selecciona el tamaño de la audiencia`,
  },
  'aff.signup.niche_label': { en: `Your niche`, ar: `مجالك`, es: `Tu nicho` },
  'aff.signup.niche_placeholder': {
    en: `Select your niche`,
    ar: `اختر مجالك`,
    es: `Selecciona tu nicho`,
  },
  'aff.signup.submitting': { en: `Submitting…`, ar: `جاري الإرسال…`, es: `Enviando…` },
  'aff.signup.submit': { en: `Submit application`, ar: `أرسل الطلب`, es: `Enviar solicitud` },
  'aff.signup.already_partner': {
    en: `Already a partner?`,
    ar: `أنت شريك معنا؟`,
    es: `¿Ya eres socio?`,
  },
  'aff.signup.log_in': { en: `Log in`, ar: `سجّل دخولك`, es: `Inicia sesión` },
  'aff.signup.received_title': {
    en: `Application received`,
    ar: `استلمنا طلبك`,
    es: `Solicitud recibida`,
  },
  'aff.signup.redirecting': {
    en: `Redirecting you to your dashboard…`,
    ar: `نحوّلك للوحة حقّتك…`,
    es: `Redirigiéndote a tu panel…`,
  },
  'aff.signup.audience.under_1k': {
    en: `Under 1,000 followers / subscribers`,
    ar: `أقل من 1,000 متابع / مشترك`,
    es: `Menos de 1.000 seguidores / suscriptores`,
  },
  'aff.signup.audience.1k_5k': { en: `1,000 - 5,000`, ar: `1,000 - 5,000`, es: `1.000 - 5.000` },
  'aff.signup.audience.5k_25k': {
    en: `5,000 - 25,000`,
    ar: `5,000 - 25,000`,
    es: `5.000 - 25.000`,
  },
  'aff.signup.audience.25k_100k': {
    en: `25,000 - 100,000`,
    ar: `25,000 - 100,000`,
    es: `25.000 - 100.000`,
  },
  'aff.signup.audience.over_100k': {
    en: `Over 100,000`,
    ar: `أكثر من 100,000`,
    es: `Más de 100.000`,
  },
  'aff.signup.niche.english_tutoring': {
    en: `English tutoring`,
    ar: `تدريس إنجليزي خصوصي`,
    es: `Clases particulares de inglés`,
  },
  'aff.signup.niche.school_classroom': {
    en: `Classroom / school staff`,
    ar: `صفّ دراسي / كادر مدرسة`,
    es: `Aula / personal escolar`,
  },
  'aff.signup.niche.parenting_homeschool': {
    en: `Parenting / homeschool`,
    ar: `تربية / تعليم منزلي`,
    es: `Crianza / educación en casa`,
  },
  'aff.signup.niche.edtech_reviews': {
    en: `EdTech reviews`,
    ar: `مراجعات تقنيات تعليمية`,
    es: `Reseñas de tecnología educativa`,
  },
  'aff.signup.niche.language_learning': {
    en: `Language learning`,
    ar: `تعلّم اللغات`,
    es: `Aprendizaje de idiomas`,
  },
  'aff.signup.niche.other': { en: `Other`, ar: `غير ذلك`, es: `Otro` },
}
