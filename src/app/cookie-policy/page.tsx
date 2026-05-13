import type { Metadata } from 'next'
import Link from 'next/link'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How The English Hub uses cookies and similar technologies to improve your experience, remember preferences, and analyse site traffic responsibly.',
  alternates: { canonical: 'https://theenglishhub.app/cookie-policy' },
  openGraph: {
    title: 'Cookie Policy — The English Hub',
    description:
      'How The English Hub uses cookies and similar technologies to improve your experience, remember preferences, and analyse site traffic responsibly.',
  },
}

export default async function CookiePolicyPage() {
  const v = await tMany([
    'legal.cookie_policy',
    'legal.operated_by',
    'page.last_updated',
    'cookie_policy.last_updated_value',
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
    'cookie_policy.s3.essential.li2_strong',
    'cookie_policy.s3.essential.li2_text',
    'cookie_policy.s3.functional.h3',
    'cookie_policy.s3.functional.p',
    'cookie_policy.s3.functional.li1_strong',
    'cookie_policy.s3.functional.li1_text',
    'cookie_policy.s3.functional.li2_strong',
    'cookie_policy.s3.functional.li2_text',
    'cookie_policy.s3.analytics.h3',
    'cookie_policy.s3.analytics.p',
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
    'cookie_policy.s4.purp_csrf',
    'cookie_policy.s4.purp_board',
    'cookie_policy.s4.purp_theme',
    'cookie_policy.s4.purp_sentry',
    'cookie_policy.s4.purp_ga',
    'cookie_policy.s4.purp_ga_session',
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
  const lastUpdatedValue = next()
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
  const s3EssLi2S = next()
  const s3EssLi2T = next()
  const s3FuncH3 = next()
  const s3FuncP = next()
  const s3FuncLi1S = next()
  const s3FuncLi1T = next()
  const s3FuncLi2S = next()
  const s3FuncLi2T = next()
  const s3AnaH3 = next()
  const s3AnaP = next()
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
  const purpCsrf = next()
  const purpBoard = next()
  const purpTheme = next()
  const purpSentry = next()
  const purpGa = next()
  const purpGaSession = next()
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
  const s7Li2T = next()
  const s7Li3S = next()
  const s7Li3T = next()
  const s7Li4S = next()
  const s7Li4T = next()
  const s8H2 = next()
  const s8P1 = next()
  const s8P2Pre = next()
  const s8P2S = next()
  const s8P2Post = next()
  const s8P3Pre = next()
  const s9H2 = next()
  const s9P = next()
  const s10H2 = next()
  const s10PPre = next()
  const s10PLink = next()

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
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">csrf_token</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpCsrf}</td>
                  <td className="px-4 py-3">{durSession}</td>
                  <td className="px-4 py-3">{typeEss}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">board-preference</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpBoard}</td>
                  <td className="px-4 py-3">{dur1y}</td>
                  <td className="px-4 py-3">{typeFunc}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">theme</td>
                  <td className="px-4 py-3">The English Hub</td>
                  <td className="px-4 py-3">{purpTheme}</td>
                  <td className="px-4 py-3">{dur1y}</td>
                  <td className="px-4 py-3">{typeFunc}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">sentryReplaySession</td>
                  <td className="px-4 py-3">Sentry</td>
                  <td className="px-4 py-3">{purpSentry}</td>
                  <td className="px-4 py-3">{durSession}</td>
                  <td className="px-4 py-3">{typeAna}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">_ga</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">{purpGa}</td>
                  <td className="px-4 py-3">{dur2y}</td>
                  <td className="px-4 py-3">{typeAna}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs">_ga_*</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">{purpGaSession}</td>
                  <td className="px-4 py-3">{dur2y}</td>
                  <td className="px-4 py-3">{typeAna}</td>
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
              {s7Li2T}
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
            {s8P2Post}
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
            <Link href="/privacy-policy" className="underline hover:text-foreground">
              {s10PLink}
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
