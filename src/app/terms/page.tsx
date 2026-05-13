import type { Metadata } from 'next'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions for using The English Hub platform. Rules governing access to courses, subscriptions, content usage, and user responsibilities.',
  alternates: { canonical: 'https://theenglishhub.app/terms' },
  openGraph: {
    title: 'Terms of Service — The English Hub',
    description:
      'Terms and conditions for using The English Hub platform. Rules governing access to courses, subscriptions, content usage, and user responsibilities.',
  },
}

export default async function TermsPage() {
  const v = await tMany([
    'terms.title',
    'page.last_updated',
    'terms.last_updated_value',
    'terms.s1.h2',
    'terms.s1.p1',
    'terms.s1.p2',
    'terms.s2.h2',
    'terms.s2.p1',
    'terms.s2.p2',
    'terms.s3.h2',
    'terms.s3.p1',
    'terms.s3.p2',
    'terms.s4.h2',
    'terms.s4.p_intro',
    'terms.s4.li_sm_strong',
    'terms.s4.li_sm_text',
    'terms.s4.li_sa_strong',
    'terms.s4.li_sa_text',
    'terms.s4.li_sa_promo_strong',
    'terms.s4.li_sa_promo_text_pre',
    'terms.s4.li_sa_promo_text_post',
    'terms.s4.li_tm_strong',
    'terms.s4.li_tm_text',
    'terms.s4.li_ta_strong',
    'terms.s4.li_ta_text',
    'terms.s4.li_fs_strong',
    'terms.s4.li_fs_text',
    'terms.s4.p_vat_strong',
    'terms.s4.p_vat_text',
    'terms.s4.p_trial_strong',
    'terms.s4.p_trial_text',
    'terms.s4.p_demo_strong',
    'terms.s4.p_demo_text',
    'terms.s4.p_codes_strong',
    'terms.s4.p_codes_text_pre',
    'terms.s4.p_codes_text_post',
    'terms.s4.p_renewals',
    'terms.s5.h2',
    'terms.s5.p1',
    'terms.s5.p2',
    'terms.s6.h2',
    'terms.s6.p1',
    'terms.s6.p2',
    'terms.s7.h2',
    'terms.s7.p1',
    'terms.s7.p2',
    'terms.s8.h2',
    'terms.s8.p_intro',
    'terms.s8.li1',
    'terms.s8.li2',
    'terms.s8.li3',
    'terms.s8.li4',
    'terms.s8.li5',
    'terms.s8.li6',
    'terms.s8.li7',
    'terms.s8.p_outro',
    'terms.s9.h2',
    'terms.s9.p1',
    'terms.s9.p2',
    'terms.s10.h2',
    'terms.s10.p1',
    'terms.s10.p2',
    'terms.s10.p3',
    'terms.s10.p4',
    'terms.s11.h2',
    'terms.s11.p1',
    'terms.s11.p2',
    'terms.s11.p3',
    'terms.s11.p4',
    'terms.s12.h2',
    'terms.s12.p',
    'terms.s13.h2',
    'terms.s13.p1',
    'terms.s13.p2',
    'terms.s14.h2',
    'terms.s14.p1',
    'terms.s14.p2',
    'terms.s15.h2',
    'terms.s15.p1',
    'terms.s15.p2_l1',
    'terms.s15.p2_l2',
  ])
  let i = 0
  const next = () => v[i++]

  const title = next()
  const lastUpdatedLabel = next()
  const lastUpdatedValue = next()
  const s1H2 = next(),
    s1P1 = next(),
    s1P2 = next()
  const s2H2 = next(),
    s2P1 = next(),
    s2P2 = next()
  const s3H2 = next(),
    s3P1 = next(),
    s3P2 = next()
  const s4H2 = next(),
    s4PIntro = next()
  const liSmS = next(),
    liSmT = next()
  const liSaS = next(),
    liSaT = next()
  const liSaPromoS = next(),
    liSaPromoTPre = next(),
    liSaPromoTPost = next()
  const liTmS = next(),
    liTmT = next()
  const liTaS = next(),
    liTaT = next()
  const liFsS = next(),
    liFsT = next()
  const pVatS = next(),
    pVatT = next()
  const pTrialS = next(),
    pTrialT = next()
  const pDemoS = next(),
    pDemoT = next()
  const pCodesS = next(),
    pCodesTPre = next(),
    pCodesTPost = next()
  const pRenewals = next()
  const s5H2 = next(),
    s5P1 = next(),
    s5P2 = next()
  const s6H2 = next(),
    s6P1 = next(),
    s6P2 = next()
  const s7H2 = next(),
    s7P1 = next(),
    s7P2 = next()
  const s8H2 = next(),
    s8PIntro = next()
  const s8Li1 = next(),
    s8Li2 = next(),
    s8Li3 = next(),
    s8Li4 = next(),
    s8Li5 = next(),
    s8Li6 = next(),
    s8Li7 = next()
  const s8POutro = next()
  const s9H2 = next(),
    s9P1 = next(),
    s9P2 = next()
  const s10H2 = next(),
    s10P1 = next(),
    s10P2 = next(),
    s10P3 = next(),
    s10P4 = next()
  const s11H2 = next(),
    s11P1 = next(),
    s11P2 = next(),
    s11P3 = next(),
    s11P4 = next()
  const s12H2 = next(),
    s12P = next()
  const s13H2 = next(),
    s13P1 = next(),
    s13P2 = next()
  const s14H2 = next(),
    s14P1 = next(),
    s14P2 = next()
  const s15H2 = next(),
    s15P1 = next(),
    s15P2L1 = next(),
    s15P2L2 = next()

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {lastUpdatedLabel}: {lastUpdatedValue}
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s1H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s1P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s1P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s2H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s2P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s2P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s3H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s4H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s4PIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>
              <strong>{liSmS}</strong>
              {liSmT}
            </li>
            <li>
              <strong>{liSaS}</strong>
              {liSaT}
            </li>
            <li>
              <strong>{liSaPromoS}</strong>
              {liSaPromoTPre}
              <code>2026ENGLISH</code>
              {liSaPromoTPost}
            </li>
            <li>
              <strong>{liTmS}</strong>
              {liTmT}
            </li>
            <li>
              <strong>{liTaS}</strong>
              {liTaT}
            </li>
            <li>
              <strong>{liFsS}</strong>
              {liFsT}
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>{pVatS}</strong>
            {pVatT}
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>{pTrialS}</strong>
            {pTrialT}
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>{pDemoS}</strong>
            {pDemoT}
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            <strong>{pCodesS}</strong>
            {pCodesTPre}
            <code> 2026ENGLISH</code>
            {pCodesTPost}
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{pRenewals}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s5H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s5P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s5P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s6H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s6P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s6P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s7H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s7P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s7P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s8H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s8PIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed space-y-1">
            <li>{s8Li1}</li>
            <li>{s8Li2}</li>
            <li>{s8Li3}</li>
            <li>{s8Li4}</li>
            <li>{s8Li5}</li>
            <li>{s8Li6}</li>
            <li>{s8Li7}</li>
          </ul>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s8POutro}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s9H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s9P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s9P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s10H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s10P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s10P2}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s10P3}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s10P4}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s11H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s11P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s11P2}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s11P3}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s11P4}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s12H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s12P}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s13H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s13P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s13P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s14H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s14P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s14P2}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">{s15H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s15P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {s15P2L1}
            <br />
            {s15P2L2}
          </p>
        </section>
      </div>
    </main>
  )
}
