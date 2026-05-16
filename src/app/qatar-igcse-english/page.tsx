import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'
/* ─────────────── Page Metadata ─────────────── */

const PAGE_URL = 'https://theenglishhub.app/qatar-igcse-english'
const OG_IMAGE =
  '/api/og?title=IGCSE+English+revision+for+Qatar&subtitle=Pearson+Edexcel+and+Cambridge+covered&level=igcse'

export const metadata: Metadata = {
  title: 'IGCSE English revision for Qatar',
  description:
    'IGCSE English Language and Literature revision for students at international schools in Qatar. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 specs covered.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'IGCSE English revision for Qatar — The English Hub',
    description:
      'IGCSE English Language and Literature revision for students at international schools in Qatar. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 specs covered.',
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'IGCSE English revision for Qatar — Pearson Edexcel and Cambridge covered',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCSE English revision for Qatar — The English Hub',
    description:
      'IGCSE English Language and Literature revision for students at international schools in Qatar. Pearson Edexcel 4ET1, 4EA1 and Cambridge 0500, 0990 specs covered.',
    images: [OG_IMAGE],
  },
}

/* ─────────────── Page ─────────────── */

export default async function QatarIgcseEnglishPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const [
    bcHome,
    bcCurrent,
    badge,
    h1,
    intro,
    ctaGetStarted,
    ctaSeeSpecs,
    specsH2,
    specsIntro,
    specsEdexcelTitle,
    specsEdexcel4et1,
    specsEdexcel4ea1,
    specsCambridgeTitle,
    specsCambridge0500,
    specsCambridge0990,
    specsNote,
    helpH2,
    helpIntro,
    helpEdexcelTitle,
    helpEdexcelBody,
    helpEdexcel4et1Link,
    helpEdexcel4ea1Link,
    helpCambridgeTitle,
    helpCambridgeBody,
    helpCambridge0500Link,
    helpCambridge0990Link,
    helpAiTitle,
    helpAiBody,
    helpPathsTitle,
    helpPathsBody,
    tzH2,
    tzBody1,
    tzBody2,
    tzTipTitle,
    tzTipBody,
    anthH2,
    anthBody1,
    anthBody2,
    anth4et1Link,
    anth4ea1Link,
    cmpH2,
    cmpBody1,
    cmpBody2,
    cmp0500Link,
    cmp0990Link,
    faqH2,
    faqQ1,
    faqA1,
    faqQ2,
    faqA2,
    faqQ3,
    faqA3,
    faqQ4,
    faqA4,
    faqQ5,
    faqA5,
    ctaH2,
    ctaBody,
  ] = await tMany([
    'qatar.breadcrumb_home',
    'qatar.breadcrumb_current',
    'qatar.badge',
    'qatar.h1',
    'qatar.intro',
    'qatar.cta.get_started',
    'qatar.cta.see_specs',
    'qatar.specs.h2',
    'qatar.specs.intro',
    'qatar.specs.edexcel.title',
    'qatar.specs.edexcel.4et1',
    'qatar.specs.edexcel.4ea1',
    'qatar.specs.cambridge.title',
    'qatar.specs.cambridge.0500',
    'qatar.specs.cambridge.0990',
    'qatar.specs.note',
    'qatar.help.h2',
    'qatar.help.intro',
    'qatar.help.edexcel.title',
    'qatar.help.edexcel.body',
    'qatar.help.edexcel.4et1_link',
    'qatar.help.edexcel.4ea1_link',
    'qatar.help.cambridge.title',
    'qatar.help.cambridge.body',
    'qatar.help.cambridge.0500_link',
    'qatar.help.cambridge.0990_link',
    'qatar.help.ai.title',
    'qatar.help.ai.body',
    'qatar.help.paths.title',
    'qatar.help.paths.body',
    'qatar.timezone.h2',
    'qatar.timezone.body1',
    'qatar.timezone.body2',
    'qatar.timezone.tip_title',
    'qatar.timezone.tip_body',
    'qatar.anthology.h2',
    'qatar.anthology.body1',
    'qatar.anthology.body2',
    'qatar.anthology.4et1_link',
    'qatar.anthology.4ea1_link',
    'qatar.compare.h2',
    'qatar.compare.body1',
    'qatar.compare.body2',
    'qatar.compare.0500_link',
    'qatar.compare.0990_link',
    'qatar.faq.h2',
    'qatar.faq.q1',
    'qatar.faq.a1',
    'qatar.faq.q2',
    'qatar.faq.a2',
    'qatar.faq.q3',
    'qatar.faq.a3',
    'qatar.faq.q4',
    'qatar.faq.a4',
    'qatar.faq.q5',
    'qatar.faq.a5',
    'qatar.cta_final.h2',
    'qatar.cta_final.body',
  ])

  // FAQ array (used for the on-page list AND the JSON-LD schema). The
  // questions and answers stay aligned because they reference the same
  // localised string lookup.
  const FAQS: { question: string; answer: string }[] = [
    { question: faqQ1, answer: faqA1 },
    { question: faqQ2, answer: faqA2 },
    { question: faqQ3, answer: faqA3 },
    { question: faqQ4, answer: faqA4 },
    { question: faqQ5, answer: faqA5 },
  ]

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: bcHome, url: 'https://theenglishhub.app' },
          { name: bcCurrent, url: PAGE_URL },
        ]}
        nonce={nonce}
      />
      <FAQPageJsonLd faqs={FAQS} nonce={nonce} />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] rounded-full blur-[180px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              {bcHome}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{bcCurrent}</span>
          </nav>

          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-6 px-4 py-1.5"
          >
            {badge}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            {h1}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{intro}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/25 font-semibold"
              render={<Link href="/board-select" />}
            >
              {ctaGetStarted}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 border-border/60 font-semibold"
              render={<Link href="#specs" />}
            >
              {ctaSeeSpecs}
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 1 — WHICH SPECS ════════════════ */}
      <section id="specs" className="py-16 sm:py-20 border-t border-border/40 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            {specsH2}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-5">{specsIntro}</p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <Card className="p-6 border-border/40">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-lg font-bold text-foreground">{specsEdexcelTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{specsEdexcel4et1}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{specsEdexcel4ea1}</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-lg font-bold text-foreground">{specsCambridgeTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {specsCambridge0500}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {specsCambridge0990}
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mt-6">{specsNote}</p>
        </div>
      </section>

      {/* ════════════════ SECTION 2 — HOW WE HELP ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            {helpH2}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-8">{helpIntro}</p>

          <div className="space-y-5">
            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">{helpEdexcelTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{helpEdexcelBody}</p>
                <p className="text-sm mt-3">
                  <Link
                    href="/igcse/edexcel"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {helpEdexcel4et1Link}
                  </Link>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <Link
                    href="/igcse/edexcel-lang"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {helpEdexcel4ea1Link}
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">{helpCambridgeTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{helpCambridgeBody}</p>
                <p className="text-sm mt-3">
                  <Link
                    href="/igcse/cambridge/0500"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {helpCambridge0500Link}
                  </Link>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <Link
                    href="/igcse/cambridge/0990"
                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {helpCambridge0990Link}
                  </Link>
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">{helpAiTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{helpAiBody}</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border/40">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-2">{helpPathsTitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{helpPathsBody}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 3 — TIMEZONE ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            {tzH2}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">{tzBody1}</p>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">{tzBody2}</p>

          <h3 className="text-xl font-bold text-foreground mt-8 mb-3">{tzTipTitle}</h3>
          <p className="text-base text-muted-foreground leading-relaxed">{tzTipBody}</p>
        </div>
      </section>

      {/* ════════════════ SECTION 4 — EDEXCEL ANTHOLOGY ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            {anthH2}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">{anthBody1}</p>

          <p className="text-base text-muted-foreground leading-relaxed">{anthBody2}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/igcse/edexcel"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              {anth4et1Link}
            </Link>
            <Link
              href="/igcse/edexcel-lang/anthology"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              {anth4ea1Link}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 5 — 0500 vs 0990 ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-6">
            {cmpH2}
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">{cmpBody1}</p>

          <p className="text-base text-muted-foreground leading-relaxed">{cmpBody2}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/igcse/cambridge/0500"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              {cmp0500Link}
            </Link>
            <Link
              href="/igcse/cambridge/0990"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm font-semibold"
            >
              {cmp0990Link}
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION 6 — FAQ ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-8">
            {faqH2}
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <Card key={faq.question} className="p-6 border-border/40">
                <CardContent className="p-0">
                  <h3 className="text-base font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="py-20 sm:py-24 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {ctaH2}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
            {ctaBody}
          </p>
          <Button
            size="lg"
            className="text-base px-10 h-13 shadow-lg shadow-primary/25 font-bold"
            render={<Link href="/board-select" />}
          >
            {ctaGetStarted}
          </Button>
        </div>
      </section>

      {/* ════════════════ EMAIL CAPTURE ════════════════ */}
      <section className="py-16 sm:py-20 border-t border-border/40 bg-card/20">
        <div className="max-w-md mx-auto px-6"></div>
      </section>
    </main>
  )
}
