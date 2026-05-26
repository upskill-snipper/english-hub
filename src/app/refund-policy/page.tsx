import type { Metadata } from 'next'
import Link from 'next/link'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Our refund and cancellation policy for The English Hub subscriptions and course purchases. Clear terms for students, parents, and institutions.',
  alternates: { canonical: 'https://theenglishhub.app/refund-policy' },
  openGraph: {
    title: 'Refund Policy - The English Hub',
    description:
      'Our refund and cancellation policy for The English Hub subscriptions and course purchases. Clear terms for students, parents, and institutions.',
  },
}

export default async function RefundPolicyPage() {
  const v = await tMany([
    'refund.title',
    'refund.operated_by',
    'page.last_updated',
    'refund.last_updated_value',
    'refund.s1.h2',
    'refund.s1.p1_pre',
    'refund.s1.p1_link',
    'refund.s1.p1_post',
    'refund.s1.p2',
    'refund.s2.h2',
    'refund.s2.p1',
    'refund.s2.p2',
    'refund.s3.h2',
    'refund.s3.p_intro',
    'refund.s3.li1',
    'refund.s3.li2',
    'refund.s3.li3',
    'refund.s3.p_outro',
    'refund.s4.h2',
    'refund.s4.p_intro',
    'refund.s4.li1',
    'refund.s4.li2',
    'refund.s4.li3',
    'refund.s4.p_outro',
    'refund.s5.h2',
    'refund.s5.p_intro',
    'refund.s5.li1_strong',
    'refund.s5.li1_text',
    'refund.s5.li2_strong',
    'refund.s5.li2_text',
    'refund.s6.h2',
    'refund.s6.p_intro',
    'refund.s6.li1_strong',
    'refund.s6.li1_text_pre',
    'refund.s6.li1_text_post',
    'refund.s6.li2_strong',
    'refund.s6.li2_text',
    'refund.s6.p_outro',
    'refund.s7.h2',
    'refund.s7.p1',
    'refund.s7.p2_pre',
    'refund.s7.p2_post',
    'refund.s8.h2',
    'refund.s8.p',
    'refund.s9.h2',
    'refund.s9.p_intro',
    'refund.s9.li1_strong',
    'refund.s9.li1_text',
    'refund.s9.li2_strong',
    'refund.s9.li2_text',
    'refund.s9.li3_strong',
    'refund.s9.li3_text',
    'refund.s9.p_outro',
    'refund.s10.h2',
    'refund.s10.p',
    'refund.s11.h2',
    'refund.s11.p_intro',
    'refund.s11.email_label',
    'refund.s11.contact_form_label',
  ])
  let i = 0
  const next = () => v[i++]

  const title = next()
  const operatedBy = next()
  const lastUpdatedLabel = next()
  const lastUpdatedValue = next()
  const s1H2 = next(),
    s1P1Pre = next(),
    s1P1Link = next(),
    s1P1Post = next(),
    s1P2 = next()
  const s2H2 = next(),
    s2P1 = next(),
    s2P2 = next()
  const s3H2 = next(),
    s3PIntro = next(),
    s3Li1 = next(),
    s3Li2 = next(),
    s3Li3 = next(),
    s3POutro = next()
  const s4H2 = next(),
    s4PIntro = next(),
    s4Li1 = next(),
    s4Li2 = next(),
    s4Li3 = next(),
    s4POutro = next()
  const s5H2 = next(),
    s5PIntro = next(),
    s5Li1S = next(),
    s5Li1T = next(),
    s5Li2S = next(),
    s5Li2T = next()
  const s6H2 = next(),
    s6PIntro = next(),
    s6Li1S = next(),
    s6Li1TPre = next(),
    s6Li1TPost = next(),
    s6Li2S = next(),
    s6Li2T = next(),
    s6POutro = next()
  const s7H2 = next(),
    s7P1 = next(),
    s7P2Pre = next(),
    s7P2Post = next()
  const s8H2 = next(),
    s8P = next()
  const s9H2 = next(),
    s9PIntro = next(),
    s9Li1S = next(),
    s9Li1T = next(),
    s9Li2S = next(),
    s9Li2T = next(),
    s9Li3S = next(),
    s9Li3T = next(),
    s9POutro = next()
  const s10H2 = next(),
    s10P = next()
  const s11H2 = next(),
    s11PIntro = next(),
    s11EmailLabel = next(),
    s11ContactFormLabel = next()

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {operatedBy}
        <br />
        {lastUpdatedLabel}: {lastUpdatedValue}
      </p>

      <div className="mt-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s1H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {s1P1Pre}
            <Link href="/" className="underline hover:text-foreground">
              {s1P1Link}
            </Link>
            {s1P1Post}
          </p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s1P2}</p>
        </section>

        {/* Cooling-off period */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s2H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s2P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s2P2}</p>
        </section>

        {/* Subscriptions */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s3H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s3PIntro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>{s3Li1}</li>
            <li>{s3Li2}</li>
            <li>{s3Li3}</li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">{s3POutro}</p>
        </section>

        {/* Free trial */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s4H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s4PIntro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>{s4Li1}</li>
            <li>{s4Li2}</li>
            <li>{s4Li3}</li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">{s4POutro}</p>
        </section>

        {/* One-time course purchases */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s5H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s5PIntro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">{s5Li1S}</strong>
              {s5Li1T}
            </li>
            <li>
              <strong className="text-foreground">{s5Li2S}</strong>
              {s5Li2T}
            </li>
          </ul>
        </section>

        {/* How to request a refund */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s6H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s6PIntro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">{s6Li1S}</strong>
              {s6Li1TPre}
              <a href="mailto:info@Upskillenergy.com" className="underline hover:text-foreground">
                info@Upskillenergy.com
              </a>
              {s6Li1TPost}
            </li>
            <li>
              <strong className="text-foreground">{s6Li2S}</strong>
              {s6Li2T}
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">{s6POutro}</p>
        </section>

        {/* Processing time */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s7H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s7P1}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            {s7P2Pre}
            <a href="mailto:info@Upskillenergy.com" className="underline hover:text-foreground">
              info@Upskillenergy.com
            </a>
            {s7P2Post}
          </p>
        </section>

        {/* Method of refund */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s8H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s8P}</p>
        </section>

        {/* Exceptions */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s9H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s9PIntro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">{s9Li1S}</strong>
              {s9Li1T}
            </li>
            <li>
              <strong className="text-foreground">{s9Li2S}</strong>
              {s9Li2T}
            </li>
            <li>
              <strong className="text-foreground">{s9Li3S}</strong>
              {s9Li3T}
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground leading-relaxed">{s9POutro}</p>
        </section>

        {/* Your statutory rights */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s10H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s10P}</p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{s11H2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{s11PIntro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              {s11EmailLabel}{' '}
              <a href="mailto:info@Upskillenergy.com" className="underline hover:text-foreground">
                info@Upskillenergy.com
              </a>
            </li>
            <li>
              {s11ContactFormLabel}{' '}
              <Link href="/contact" className="underline hover:text-foreground">
                theenglishhub.app/contact
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
