import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocale, tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How The English Hub uses cookies and similar technologies to improve your experience, remember preferences, and analyse site traffic responsibly.',
  alternates: { canonical: 'https://theenglishhub.app/cookie-policy' },
  openGraph: {
    title: 'Cookie Policy - The English Hub',
    description:
      'How The English Hub uses cookies and similar technologies to improve your experience, remember preferences, and analyse site traffic responsibly.',
  },
}

export default async function CookiePolicyPage() {
  const v = await tMany([
    'legal.cookie_policy',
    'legal.operated_by',
    'page.last_updated',
    'cookie_policy.s1.h2',
    'cookie_policy.s1.p1',
    'cookie_policy.s1.p2',
    'cookie_policy.s2.h2',
    'cookie_policy.s2.p1',
    'cookie_policy.s3.h2',
    'cookie_policy.s3.essential.h3',
    'cookie_policy.s3.essential.p',
    'cookie_policy.s3.essential.li1_strong',
    'cookie_policy.s3.essential.li1_text',
    'cookie_policy.s3.functional.h3',
    'cookie_policy.s3.functional.p',
    'cookie_policy.s3.functional.li1_strong',
    'cookie_policy.s3.functional.li1_text',
    'cookie_policy.s3.analytics.h3',
    'cookie_policy.s3.third_party.h3',
    'cookie_policy.s3.third_party.p',
    'cookie_policy.s3.third_party.li1_strong',
    'cookie_policy.s3.third_party.li1_text_before',
    'cookie_policy.s3.third_party.li1_link',
    'cookie_policy.s3.third_party.li2_strong',
    'cookie_policy.s3.third_party.li2_text_before',
    'cookie_policy.s3.third_party.li2_link',
    'cookie_policy.s4.h2',
    'cookie_policy.s4.p',
    'cookie_policy.s4.th_name',
    'cookie_policy.s4.th_provider',
    'cookie_policy.s4.th_purpose',
    'cookie_policy.s4.th_duration',
    'cookie_policy.s4.th_type',
    'cookie_policy.s4.type.essential',
    'cookie_policy.s4.type.functional',
    'cookie_policy.s4.type.analytics',
    'cookie_policy.s4.type.third_party',
    'cookie_policy.s4.dur_session',
    'cookie_policy.s4.dur_1y',
    'cookie_policy.s4.dur_2y',
    'cookie_policy.s4.dur_up_1y',
    'cookie_policy.s4.dur_30m',
    'cookie_policy.s4.dur_60d',
    'cookie_policy.s4.purp_sb_auth',
    'cookie_policy.s4.purp_sb_pkce',
    'cookie_policy.s4.purp_board',
    'cookie_policy.s4.purp_stripe_mid',
    'cookie_policy.s4.purp_stripe_sid',
    'cookie_policy.s4.purp_rewardful',
    'cookie_policy.s4.note_wildcard',
    'cookie_policy.s5.h2',
    'cookie_policy.s5.p_session_strong',
    'cookie_policy.s5.p_session_text',
    'cookie_policy.s5.p_persistent_strong',
    'cookie_policy.s5.p_persistent_text',
    'cookie_policy.s6.h2',
    'cookie_policy.s6.p_intro',
    'cookie_policy.s6.li1',
    'cookie_policy.s6.li2',
    'cookie_policy.s6.li3',
    'cookie_policy.s6.li4',
    'cookie_policy.s6.p_outro',
    'cookie_policy.s6.browser_chrome',
    'cookie_policy.s6.browser_firefox',
    'cookie_policy.s6.browser_safari',
    'cookie_policy.s6.browser_edge',
    'cookie_policy.s7.h2',
    'cookie_policy.s7.p_intro',
    'cookie_policy.s7.li1_strong',
    'cookie_policy.s7.li1_text',
    'cookie_policy.s7.li2_strong',
    'cookie_policy.s7.li2_text',
    'cookie_policy.s7.li3_strong',
    'cookie_policy.s7.li3_text',
    'cookie_policy.s7.li4_strong',
    'cookie_policy.s7.li4_text',
    'cookie_policy.s8.h2',
    'cookie_policy.s8.p1',
    'cookie_policy.s8.p2_pre',
    'cookie_policy.s8.p2_strong',
    'cookie_policy.s8.p2_post',
    'cookie_policy.s8.p3_pre',
    'cookie_policy.s9.h2',
    'cookie_policy.s9.p',
    'cookie_policy.s10.h2',
    'cookie_policy.s10.p_pre',
    'cookie_policy.s10.p_link',
  ])
  let i = 0
  const next = () => v[i++]

  const title = next()
  const operatedBy = next()
  const lastUpdatedLabel = next()
  const s1H2 = next()
  const s1P1 = next()
  const s1P2 = next()
  const s2H2 = next()
  const s2P1 = next()
  const s3H2 = next()
  const s3EssH3 = next()
  const s3EssP = next()
  const s3EssLi1S = next()
  const s3EssLi1T = next()
  const s3FuncH3 = next()
  const s3FuncP = next()
  const s3FuncLi1S = next()
  const s3FuncLi1T = next()
  const s3AnaH3 = next()
  const s3TpH3 = next()
  const s3TpP = next()
  const s3TpLi1S = next()
  const s3TpLi1TB = next()
  const s3TpLi1L = next()
  const s3TpLi2S = next()
  const s3TpLi2TB = next()
  const s3TpLi2L = next()
  const s4H2 = next()
  const s4P = next()
  const thName = next()
  const thProv = next()
  const thPurp = next()
  const thDur = next()
  const thType = next()
  const typeEss = next()
  const typeFunc = next()
  const typeAna = next()
  const typeTp = next()
  const durSession = next()
  const dur1y = next()
  const dur2y = next()
  const durUp1y = next()
  const dur30m = next()
  const dur60d = next()
  const purpSbAuth = next()
  const purpSbPkce = next()
  const purpBoard = next()
  const purpStripeMid = next()
  const purpStripeSid = next()
  const purpRewardful = next()
  const noteWildcard = next()
  const s5H2 = next()
  const s5SessS = next()
  const s5SessT = next()
  const s5PerS = next()
  const s5PerT = next()
  const s6H2 = next()
  const s6PIntro = next()
  const s6Li1 = next()
  const s6Li2 = next()
  const s6Li3 = next()
  const s6Li4 = next()
  const s6POutro = next()
  const brChrome = next()
  const brFirefox = next()
  const brSafari = next()
  const brEdge = next()
  const s7H2 = next()
  const s7PIntro = next()
  const s7Li1S = next()
  const s7Li1T = next()
  const s7Li2S = next()
  // Superseded by s7Li2TOverride below (the dictionary copy names a `theme`
  // cookie that does not exist). The next() call must stay - this reader is
  // positional, so dropping it would shift every key after it.
  const _s7Li2T = next()
  void _s7Li2T
  const s7Li3S = next()
  const s7Li3T = next()
  const s7Li4S = next()
  const s7Li4T = next()
  const s8H2 = next()
  const s8P1 = next()
  const s8P2Pre = next()
  const s8P2S = next()
  // Superseded by s8P2PostOverride below (the dictionary copy asserts prior
  // consent for cookies the code sets without it). The next() call must stay -
  // this reader is positional.
  const _s8P2Post = next()
  void _s8P2Post
  const s8P3Pre = next()
  const s9H2 = next()
  const s9P = next()
  const s10H2 = next()
  const s10PPre = next()
  const s10PLink = next()

  // ── Trilingual copy for the cookies the master dictionary does not cover ──
  //
  // WHY: the published policy documented cookies this application no longer
  // sets, and hid every cookie it does set. Verified against the code:
  //   • `_ga` / `_ga_*` - gone. src/lib/gtag.ts no longer injects gtag.js;
  //     GA4 now runs through a server-side Measurement Protocol relay
  //     (src/app/api/ga4/track/route.ts) which sets our own `eh_ga_cid`.
  //   • `csrf_token` - never existed as a cookie. CSRF is enforced by the
  //     Origin / Sec-Fetch-Site checks in src/middleware.ts; the HMAC helper
  //     in src/lib/security.ts has no caller outside its own test.
  //   • `theme` - next-themes persists to localStorage, not a cookie
  //     (src/components/theme/theme-provider.tsx).
  //   • `sentryReplaySession` - replay is off: instrumentation-client.ts sets
  //     replaysSessionSampleRate and replaysOnErrorSampleRate to 0.
  //   • `board-preference` - the cookie is actually named `english-hub-board`
  //     (src/middleware.ts, src/app/api/board/route.ts).
  // Undisclosed cookies we do set: `eh-cookie-consent`, `eh_ga_cid`,
  // `eh-lang`, `teh_aff`. Documenting phantom cookies while concealing real
  // ones is a UK PECR reg. 6 / UK GDPR Art. 13 transparency failure, and this
  // is a product used by 13-18 year olds.
  //
  // These replacement strings live here rather than in the i18n dictionary
  // because dictionary.ts is being rewritten by a parallel workstream and no
  // cookie-specific shard exists to extend. They still resolve per locale so
  // Arabic and Spanish readers are not dropped back to English on a legal
  // page. Lift them into the dictionary once it is free.
  const locale = await getLocale()
  const pick = (m: Record<'en' | 'ar' | 'es', string>) => m[locale]

  // WHY: the dictionary still carries "March 2026" for this policy's revision
  // date, but the cookie table below was rebuilt today against the code. A
  // legal notice that has materially changed must not advertise a stale
  // revision date, so the shown date is set here alongside the new copy.
  // Move it back to `cookie_policy.last_updated_value` when dictionary.ts is
  // free, and keep the two in step on the next revision.
  const lastUpdatedValue = pick({
    en: 'August 2026',
    ar: 'أغسطس ٢٠٢٦',
    es: 'Agosto de 2026',
  })

  const purpConsent = pick({
    en: 'Records the choice you made in the cookie banner, so the banner is not shown again and our server can tell whether analytics are allowed to run',
    ar: 'يسجّل الاختيار اللي سويته في إشعار الكوكيز، عشان ما يطلع لك مرة ثانية وعشان السيرفر يعرف إذا مسموح للتحليلات تشتغل',
    es: 'Registra la elección que hiciste en el aviso de cookies, para no volver a mostrarlo y para que nuestro servidor sepa si la analítica puede ejecutarse',
  })
  const purpLang = pick({
    en: 'Remembers whether you are reading the site in English, Arabic or Spanish',
    ar: 'يتذكّر إذا كنت تقرأ الموقع بالإنجليزي أو العربي أو الإسباني',
    es: 'Recuerda si estás leyendo el sitio en inglés, árabe o español',
  })
  const purpGaCid = pick({
    en: 'Randomly generated visitor identifier. Our server relays it to Google Analytics 4 so repeat visits are counted once. Set only after you accept analytics cookies, and it contains no personal data',
    ar: 'معرّف زائر عشوائي. سيرفرنا يمرّره لـ Google Analytics 4 عشان الزيارات المتكررة تنحسب مرة وحدة. ما ينحط إلا بعد ما توافق على كوكيز التحليلات، وما فيه أي بيانات شخصية',
    es: 'Identificador de visitante generado al azar. Nuestro servidor lo transmite a Google Analytics 4 para que las visitas repetidas se cuenten una sola vez. Solo se establece después de que aceptes las cookies de analítica y no contiene datos personales',
  })
  const purpAffiliate = pick({
    en: 'Records which partner link brought you to the site, so that partner can be credited if you later subscribe',
    ar: 'يسجّل أي رابط شريك جابك للموقع، عشان الشريك ياخذ حقه لو اشتركت بعدين',
    es: 'Registra qué enlace de socio te trajo al sitio, para que ese socio reciba el crédito si más adelante te suscribes',
  })
  const dur30d = pick({ en: '30 days', ar: '30 يوم', es: '30 días' })
  const typeMarketing = pick({ en: 'Marketing', ar: 'تسويق', es: 'Marketing' })

  const s3EssLi2S = pick({
    en: 'Cookie consent record',
    ar: 'سجل الموافقة على الكوكيز',
    es: 'Registro de consentimiento de cookies',
  })
  const s3EssLi2T = pick({
    en: ' - stores the choice you made in the cookie banner so we can tell, on the server, whether analytics may run. Without it we would have to ask you on every page.',
    ar: ' - يحفظ الاختيار اللي سويته في إشعار الكوكيز عشان نعرف من السيرفر إذا مسموح تشتغل التحليلات. لولاه چان لازم نسألك في كل صفحة.',
    es: ' - guarda la elección que hiciste en el aviso de cookies para que podamos saber, en el servidor, si la analítica puede ejecutarse. Sin ella tendríamos que preguntártelo en cada página.',
  })
  const s3FuncLi2S = pick({
    en: 'Language preference',
    ar: 'تفضيل اللغة',
    es: 'Preferencia de idioma',
  })
  const s3FuncLi2T = pick({
    en: ' - remembers whether you read the site in English, Arabic or Spanish so pages load in your language.',
    ar: ' - يتذكّر إذا كنت تقرأ الموقع بالإنجليزي أو العربي أو الإسباني عشان الصفحات تفتح بلغتك.',
    es: ' - recuerda si lees el sitio en inglés, árabe o español para que las páginas se carguen en tu idioma.',
  })
  const s3AnaP = pick({
    en: "We use Google Analytics 4 to understand how visitors use the site, such as which pages are most popular. Google's own tracking script is not loaded on this site. Instead, once you accept analytics cookies, our server sends the events to Google Analytics using a first-party identifier we set ourselves (eh_ga_cid), and we do not pass on your IP address. We also use Sentry to record application errors so we can fix them; the Sentry browser client sets no cookies here and session replay is switched off. Neither service uses this information for advertising.",
    ar: 'نستخدم Google Analytics 4 عشان نفهم كيف الزوار يستخدمون الموقع، مثلاً أي صفحات هي الأكثر زيارة. سكربت التتبع الخاص بـ Google ما ينحمّل في هالموقع. بدال ذلك، بعد ما توافق على كوكيز التحليلات، سيرفرنا يرسل الأحداث لـ Google Analytics عن طريق معرّف من عندنا نحطه إحنا (eh_ga_cid)، وما نمرّر عنوان الـ IP حقك. ونستخدم بعد Sentry عشان نسجّل أخطاء التطبيق ونقدر نصلحها؛ عميل Sentry في المتصفح ما يحط أي كوكيز هنا، وإعادة تشغيل الجلسة مطفية. ولا وحدة من الخدمتين تستخدم هالمعلومات للإعلانات.',
    es: 'Usamos Google Analytics 4 para entender cómo se utiliza el sitio, por ejemplo qué páginas son más visitadas. El script de seguimiento de Google no se carga en este sitio. En su lugar, una vez que aceptas las cookies de analítica, nuestro servidor envía los eventos a Google Analytics usando un identificador propio que establecemos nosotros (eh_ga_cid), y no transmitimos tu dirección IP. También usamos Sentry para registrar errores de la aplicación y poder corregirlos; el cliente de Sentry en el navegador no establece ninguna cookie aquí y la repetición de sesión está desactivada. Ninguno de los dos servicios usa esta información con fines publicitarios.',
  })
  const s3AffH3 = pick({
    en: '3.5 Our own affiliate cookie',
    ar: '3.5 كوكي الشركاء حقنا',
    es: '3.5 Nuestra propia cookie de afiliados',
  })
  const s3AffP = pick({
    en: 'Some people find The English Hub through a partner link. When you arrive on a link that carries a partner code, we set our own first-party cookie, teh_aff, so that partner can be credited if you later subscribe. It records the partner code and when you arrived. It is not used for advertising and we do not use it to build a profile of you.',
    ar: 'في ناس توصل The English Hub عن طريق رابط شريك. لما تدخل من رابط فيه كود شريك، نحط كوكي من عندنا اسمه teh_aff عشان الشريك ياخذ حقه لو اشتركت بعدين. يسجّل كود الشريك ووقت دخولك. ما نستخدمه للإعلانات ولا نبني فيه ملف عنك.',
    es: 'Algunas personas llegan a The English Hub a través del enlace de un socio. Cuando entras por un enlace que lleva un código de socio, establecemos nuestra propia cookie de origen, teh_aff, para que ese socio reciba el crédito si más adelante te suscribes. Registra el código del socio y el momento en que llegaste. No se usa con fines publicitarios ni para crear un perfil sobre ti.',
  })
  // WHY (QA 2026-08-23): `cookie_policy.s7.li2_text` still said blocking
  // functional cookies loses "your exam board and theme preferences". Theme is
  // persisted to localStorage by next-themes, not to a cookie, so that claim
  // was wrong AND it directly contradicted the local-storage note added lower
  // down on this same page. The functional cookies we actually set are
  // `english-hub-board` and `eh-lang`, so the sentence now names those.
  const s7Li2TOverride = pick({
    en: ' means your exam board and language choices will not be saved between visits, so you will have to set them again each time.',
    ar: ' يعني اختيارك للمنهج ولغة الموقع ما راح ينحفظ بين الزيارات، فلازم تختارهم من جديد كل مرة.',
    es: ' significa que tu elección de junta examinadora y de idioma no se guardará entre visitas, así que tendrás que seleccionarlas de nuevo cada vez.',
  })

  // WHY (QA 2026-08-23): `cookie_policy.s8.p2_post` claimed "For all other
  // cookies - including functional, analytics, and third-party cookies - we
  // obtain your consent before placing them on your device." The code does not
  // do that for every one of them. Verified:
  //   • analytics (`eh_ga_cid`) IS consent-gated - src/app/api/ga4/track/route.ts
  //     returns 204 unless `eh-cookie-consent=all`, and the Rewardful script
  //     only mounts inside ConsentGatedAnalytics.
  //   • `english-hub-board` / `eh-lang` are written at the moment the visitor
  //     makes that choice (src/middleware.ts, language-toggle.tsx).
  //   • `teh_aff` is written by applyAffiliateTracking() on any `?ref=` request
  //     with NO consent check at all (src/middleware-affiliate.ts), so it can
  //     land before the banner is answered.
  // Asserting blanket prior consent on a legal page for a children's product,
  // when the code sets a marketing cookie without it, is a false compliance
  // claim. The replacement states what the code actually does. The underlying
  // gap (gating teh_aff on consent) is reported to the lead - it lives in
  // middleware files outside this change's ownership.
  const s8P2PostOverride = pick({
    en: " (essential cookies) without asking first, because they are needed for the service you asked for. Analytics cookies are only set after you accept them in the cookie banner. Our own exam board and language cookies are written at the moment you make that choice. The affiliate cookie, teh_aff, is set as soon as you arrive on a link carrying a partner code, which can happen before you have answered the banner; you can block or delete it in your browser at any time. You can change your analytics choice at any time by clearing this site's cookies.",
    ar: ' (الكوكيز الضرورية) من دون ما نسألك أول، لأنها لازمة للخدمة اللي طلبتها. كوكيز التحليلات ما تنحط إلا بعد ما توافق عليها في إشعار الكوكيز. وكوكيز المنهج واللغة حقنا تنكتب بنفس اللحظة اللي تختار فيها. أما كوكي الشركاء teh_aff فينحط أول ما تدخل من رابط فيه كود شريك، وهذا ممكن يصير قبل ما ترد على الإشعار؛ تقدر تمنعه أو تمسحه من المتصفح في أي وقت. وتقدر تغيّر اختيارك للتحليلات في أي وقت بمسح كوكيز الموقع.',
    es: ' (cookies esenciales) sin preguntarte antes, porque son necesarias para el servicio que has solicitado. Las cookies de analítica solo se establecen después de que las aceptes en el aviso de cookies. Nuestras propias cookies de junta examinadora e idioma se escriben en el momento en que haces esa elección. La cookie de afiliados, teh_aff, se establece en cuanto llegas por un enlace que lleva un código de socio, lo que puede ocurrir antes de que hayas respondido al aviso; puedes bloquearla o eliminarla en tu navegador en cualquier momento. Puedes cambiar tu elección sobre la analítica en cualquier momento borrando las cookies de este sitio.',
  })

  const noteLocalStorage = pick({
    en: 'Two further choices are kept in your browser local storage rather than in a cookie: your light or dark mode setting, and a copy of your cookie preferences. Local storage is not sent to our servers, and clearing your site data removes both.',
    ar: 'في اختيارين ثانيين محفوظين في التخزين المحلي للمتصفح مو في كوكي: إعداد الوضع الفاتح أو الداكن، ونسخة من تفضيلاتك للكوكيز. التخزين المحلي ما ينرسل لسيرفراتنا، ولو مسحت بيانات الموقع بينمسحون الاثنين.',
    es: 'Otras dos opciones se guardan en el almacenamiento local de tu navegador y no en una cookie: tu ajuste de modo claro u oscuro y una copia de tus preferencias de cookies. El almacenamiento local no se envía a nuestros servidores y, si borras los datos del sitio, se eliminan ambos.',
  })

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {operatedBy}
        <br />
        {lastUpdatedLabel}: {lastUpdatedValue}
      </p>

      <div className="mt-8 space-y-8">
        {/* What are cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s1H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s1P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s1P2}</p>
        </section>

        {/* How we use cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s2H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s2P1}</p>
        </section>

        {/* Types of cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s3H2}</h2>

          {/* Essential */}
          <h3 className="mt-4 text-lg font-medium text-foreground">{s3EssH3}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3EssP}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>{s3EssLi1S}</strong>
              {s3EssLi1T}
            </li>
            <li>
              <strong>{s3EssLi2S}</strong>
              {s3EssLi2T}
            </li>
          </ul>

          {/* Functional */}
          <h3 className="mt-4 text-lg font-medium text-foreground">{s3FuncH3}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3FuncP}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>{s3FuncLi1S}</strong>
              {s3FuncLi1T}
            </li>
            <li>
              <strong>{s3FuncLi2S}</strong>
              {s3FuncLi2T}
            </li>
          </ul>

          {/* Analytics / Error tracking */}
          <h3 className="mt-4 text-lg font-medium text-foreground">{s3AnaH3}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3AnaP}</p>

          {/* Third-party */}
          <h3 className="mt-4 text-lg font-medium text-foreground">{s3TpH3}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3TpP}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>{s3TpLi1S}</strong>
              {s3TpLi1TB}
              <a
                href="https://stripe.com/gb/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {s3TpLi1L}
              </a>
              .
            </li>
            <li>
              <strong>{s3TpLi2S}</strong>
              {s3TpLi2TB}
              <a
                href="https://www.rewardful.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {s3TpLi2L}
              </a>
              .
            </li>
          </ul>

          {/* Our own affiliate cookie. WHY: teh_aff is first-party (we set it
              in src/middleware-affiliate.ts), so it does not belong under
              "third-party cookies" and was previously not disclosed at all. */}
          <h3 className="mt-4 text-lg font-medium text-foreground">{s3AffH3}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3AffP}</p>
        </section>

        {/* Cookie table */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s4H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s4P}</p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">{thName}</th>
                  <th className="px-4 py-3 font-semibold">{thProv}</th>
                  <th className="px-4 py-3 font-semibold">{thPurp}</th>
                  <th className="px-4 py-3 font-semibold">{thDur}</th>
                  <th className="px-4 py-3 font-semibold">{thType}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">sb-*-auth-token</td>
                  <td className="px-4 py-3">Supabase</td>
                  <td className="px-4 py-3">{purpSbAuth}</td>
                  <td className="px-4 py-3">{durUp1y}</td>
                  <td className="px-4 py-3">{typeEss}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">sb-*-auth-token-code-verifier</td>
                  <td className="px-4 py-3">Supabase</td>
                  <td className="px-4 py-3">{purpSbPkce}</td>
                  <td className="px-4 py-3">{durSession}</td>
                  <td className="px-4 py-3">{typeEss}</td>
                </tr>
                {/* eh-cookie-consent: src/lib/gtag.ts:91, Max-Age 60*60*24*365. */}
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">eh-cookie-consent</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpConsent}</td>
                  <td className="px-4 py-3">{dur1y}</td>
                  <td className="px-4 py-3">{typeEss}</td>
                </tr>
                {/* Real name is english-hub-board, not "board-preference":
                    src/middleware.ts:407 and src/app/api/board/route.ts:25,
                    maxAge 60*60*24*365. */}
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">english-hub-board</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpBoard}</td>
                  <td className="px-4 py-3">{dur1y}</td>
                  <td className="px-4 py-3">{typeFunc}</td>
                </tr>
                {/* eh-lang: src/components/layout/language-toggle.tsx:68,
                    max-age 60*60*24*365. */}
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">eh-lang</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpLang}</td>
                  <td className="px-4 py-3">{dur1y}</td>
                  <td className="px-4 py-3">{typeFunc}</td>
                </tr>
                {/* eh_ga_cid replaces the _ga / _ga_* rows: the GA4 relay in
                    src/app/api/ga4/track/route.ts:164 sets it with
                    CID_MAX_AGE = 60*60*24*365*2 (2 years). */}
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">eh_ga_cid</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpGaCid}</td>
                  <td className="px-4 py-3">{dur2y}</td>
                  <td className="px-4 py-3">{typeAna}</td>
                </tr>
                {/* teh_aff: src/lib/affiliate/tracking-cookie.ts:19-20,
                    maxAge 60*60*24*30 (30 days). */}
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">teh_aff</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpAffiliate}</td>
                  <td className="px-4 py-3">{dur30d}</td>
                  <td className="px-4 py-3">{typeMarketing}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">__stripe_mid</td>
                  <td className="px-4 py-3">Stripe</td>
                  <td className="px-4 py-3">{purpStripeMid}</td>
                  <td className="px-4 py-3">{dur1y}</td>
                  <td className="px-4 py-3">{typeTp}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">__stripe_sid</td>
                  <td className="px-4 py-3">Stripe</td>
                  <td className="px-4 py-3">{purpStripeSid}</td>
                  <td className="px-4 py-3">{dur30m}</td>
                  <td className="px-4 py-3">{typeTp}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">rewardful_referral</td>
                  <td className="px-4 py-3">Rewardful</td>
                  <td className="px-4 py-3">{purpRewardful}</td>
                  <td className="px-4 py-3">{dur60d}</td>
                  <td className="px-4 py-3">{typeTp}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{noteWildcard}</p>
          {/* WHY: the table previously listed `theme` as a cookie. next-themes
              persists to localStorage, so it is disclosed here as storage
              rather than being claimed as a cookie that does not exist. */}
          <p className="mt-2 text-sm text-muted-foreground">{noteLocalStorage}</p>
        </section>

        {/* Cookie duration */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s5H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>{s5SessS}</strong>
            {s5SessT} <strong>{s5PerS}</strong>
            {s5PerT}
          </p>
        </section>

        {/* Managing cookies */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s6H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s6PIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s6Li1}</li>
            <li>{s6Li2}</li>
            <li>{s6Li3}</li>
            <li>{s6Li4}</li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s6POutro}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {brChrome}
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {brFirefox}
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {brSafari}
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                {brEdge}
              </a>
            </li>
          </ul>
        </section>

        {/* Impact of disabling */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s7H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s7PIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>{s7Li1S}</strong>
              {s7Li1T}
            </li>
            <li>
              <strong>{s7Li2S}</strong>
              {s7Li2TOverride}
            </li>
            <li>
              <strong>{s7Li3S}</strong>
              {s7Li3T}
            </li>
            <li>
              <strong>{s7Li4S}</strong>
              {s7Li4T}
            </li>
          </ul>
        </section>

        {/* UK PECR */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s8H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s8P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {s8P2Pre}
            <strong>{s8P2S}</strong>
            {s8P2PostOverride}
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {s8P3Pre}
            <a href="mailto:info@Upskillenergy.com" className="underline hover:text-foreground">
              info@Upskillenergy.com
            </a>
            .
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s9H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s9P}</p>
        </section>

        {/* Link to privacy policy */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s10H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {s10PPre}
            <Link href="/legal/privacy" className="underline hover:text-foreground">
              {s10PLink}
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
