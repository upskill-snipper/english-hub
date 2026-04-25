import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PressHero, PressSection, StatPlaceholder } from '@/components/press/PressLayout'
import { Mail, Download, ExternalLink, Building2, FileText } from 'lucide-react'

// NOTE: British English throughout. No fabricated stats, press quotes, or awards.
//       Founder bio is marked DRAFT — the founder to review before we publicise.

export default function PressPage() {
  return (
    <main className="min-h-screen bg-background">
      <PressHero
        eyebrow="Press & media"
        title="Press & media — The English Hub"
        lede="Everything a journalist, reviewer, or partner needs to write about The English Hub: a plain-English product summary, verifiable company facts, assets, and a direct line to the founder."
      />

      {/* 60-second overview */}
      <PressSection eyebrow="60-second overview" title="What The English Hub is, in plain English">
        <p>
          The English Hub is a GCSE and IGCSE English study app for pupils in the United Kingdom,
          with a companion web platform for teachers and schools. Pupils revise set texts, practise
          exam questions, and submit written work for structured feedback. Teachers build lessons,
          set homework, and track progress against the specification their school teaches.
        </p>
        <p>
          What makes it different: every piece of feedback, every mark scheme reference, and every
          model answer is anchored to the real examiners’ mark schemes used by AQA, Edexcel, OCR,
          Eduqas, and Cambridge. The artificial intelligence layer is trained on those rubrics, not
          generic writing heuristics. The product is built by a serving UK secondary English
          teacher, which shapes the pedagogy, tone, and pace.
        </p>
      </PressSection>

      {/* Company facts */}
      <PressSection eyebrow="The facts" title="Company facts">
        <div className="not-prose grid sm:grid-cols-2 gap-4">
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Legal entity
            </p>
            <p className="font-semibold text-foreground">Upskill Energy Limited</p>
            <p className="text-sm text-muted-foreground mt-1">Company number 16511479</p>
            <p className="text-sm text-muted-foreground">Registered in England &amp; Wales</p>
          </Card>
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Registered office
            </p>
            <p className="text-sm text-foreground">
              110 Harington Road
              <br />
              Formby
              <br />
              Liverpool
              <br />
              L37 1PZ
              <br />
              United Kingdom
            </p>
          </Card>
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Data protection
            </p>
            <p className="text-sm text-foreground">ICO registration ZC016690</p>
            <p className="text-sm text-muted-foreground mt-1">
              Data controller under the UK GDPR.
            </p>
          </Card>
          <Card className="p-5 border-border/40">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Founded
            </p>
            <p className="text-sm text-foreground">2025, based in the United Kingdom.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Bootstrapped and teacher-led.
            </p>
          </Card>
        </div>
      </PressSection>

      {/* Key stats (placeholders, honest) */}
      <PressSection eyebrow="Key figures" title="Usage and impact">
        <p className="text-muted-foreground">
          We will publish headline figures when they are independently verifiable. Until then, we
          leave these markers in place rather than use approximations.
        </p>
        <div className="not-prose mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatPlaceholder label="Active pupils" />
          <StatPlaceholder label="Essays marked" />
          <StatPlaceholder label="Teachers onboarded" />
          <StatPlaceholder label="Schools in the programme" />
        </div>
      </PressSection>

      {/* Product details */}
      <PressSection eyebrow="Product details" title="Who it is for, and how it is sold">
        <h3 className="font-serif text-xl text-foreground">Target audience</h3>
        <ul>
          <li>GCSE and IGCSE English pupils (Years 9\u201311) preparing for terminal exams.</li>
          <li>Parents looking for structured, exam-specification-aligned revision.</li>
          <li>Secondary English teachers who want to reclaim planning and marking time.</li>
          <li>Heads of English and senior leaders running the Founding Schools Programme.</li>
        </ul>

        <h3 className="font-serif text-xl text-foreground mt-8">Pricing (Early Access)</h3>
        <ul>
          <li>
            <strong>Pupil &middot; mobile.</strong> Free core revision with a monthly Premium tier
            for unlimited AI feedback and mock papers. Pricing shown at checkout.
          </li>
          <li>
            <strong>Teacher Premium.</strong> &pound;6.99/month or &pound;67.99/year (Early Access).
            Standard pricing &pound;11.99/month or &pound;99/year from August 2026.
          </li>
          <li>
            <strong>Founding Schools Programme.</strong> &pound;4,000/year for the first ten
            schools, anchored against projected standard pricing of &pound;8,000/year.
          </li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Prices shown in GBP.
        </p>

        <h3 className="font-serif text-xl text-foreground mt-8">What makes it distinct</h3>
        <ul>
          <li>
            Feedback trained on the actual mark schemes published by AQA, Edexcel, OCR, Eduqas, and
            Cambridge — not generic writing rubrics.
          </li>
          <li>Built and edited by a serving UK secondary English teacher.</li>
          <li>
            Every school picks its board during setup, so pupils only ever see content that maps to
            their specification.
          </li>
          <li>
            Children’s Code posture: minimal data, no behavioural advertising, parent-visible
            controls.
          </li>
        </ul>
      </PressSection>

      {/* Press contact */}
      <PressSection eyebrow="Press enquiries" title="Talk to us">
        <p>
          For interviews, review access, quotes, or fact-checking, email{' '}
          <a href="mailto:press@theenglishhub.app" className="text-primary underline underline-offset-4">
            press@theenglishhub.app
          </a>
          . We reply within one UK working day.
        </p>
        <div className="not-prose mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            size="lg"
            className="h-12"
            render={<a href="mailto:press@theenglishhub.app" />}
          >
            <Mail className="w-4 h-4 mr-2" />
            Email the press desk
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12"
            render={<Link href="/contact" />}
          >
            General contact
          </Button>
        </div>
      </PressSection>

      {/* Founder bio */}
      <PressSection eyebrow="Founder" title="Calum Jones — founder and lead teacher">
        <div className="not-prose mb-4">
          <Badge variant="outline" className="border-amber-500/30 bg-amber-500/[0.06] text-amber-700">
            DRAFT — founder to review
          </Badge>
        </div>
        <p>
          Calum Jones is the founder of Upskill Energy Limited and the lead teacher behind The
          English Hub. He is a serving UK secondary English teacher and has spent the last several
          years marking GCSE and IGCSE responses against AQA, Edexcel, and Cambridge mark schemes.
          The platform grew out of the resources and feedback frameworks he wrote for his own
          classroom. Calum lives in the North West of England and is based in Liverpool. He is
          available for interview on exam reform, AI in schools, and how independent teachers can
          build serious software without taking outside investment.
        </p>
      </PressSection>

      {/* Press kit */}
      <PressSection eyebrow="Press kit" title="Download the media kit">
        <p>
          A single archive with the logo pack, app icon at 512 and 1024 pixels, three in-app
          screenshots, a fifteen-second muted demo clip, and the boilerplate &ldquo;about Upskill
          Energy Limited&rdquo; paragraph.
        </p>
        <div className="not-prose mt-6">
          <Card className="p-6 border-dashed border-border/60 bg-card/40">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">The English Hub — press kit (ZIP)</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Press kit ZIP coming soon. In the meantime, email{' '}
                  <a
                    href="mailto:press@theenglishhub.app"
                    className="text-primary underline underline-offset-4"
                  >
                    press@theenglishhub.app
                  </a>{' '}
                  and we will send the latest assets within one working day.
                </p>
                <div className="mt-4">
                  {/* Press kit ZIP coming soon. Replace with real download once /public/brand/press-kit.zip exists. */}
                  <Button
                    variant="secondary"
                    size="sm"
                    disabled
                    aria-disabled="true"
                    title="Press kit coming soon"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Press kit — coming soon
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </PressSection>

      {/* Recent coverage */}
      <PressSection eyebrow="In the press" title="Recent coverage">
        <div className="not-prose">
          <Card className="p-6 border-border/40 bg-card/40">
            <p className="text-sm text-muted-foreground">
              No coverage yet — we are working with launch PR partners and will list pieces here as
              they appear. If you are covering the UK ed-tech or exam beat, we would like to hear
              from you.
            </p>
          </Card>
        </div>
      </PressSection>

      {/* Awards */}
      <PressSection eyebrow="Recognition" title="Awards and reviews">
        <div className="not-prose">
          <Card className="p-6 border-border/40 bg-card/40">
            <p className="text-sm text-muted-foreground">
              No awards to report. Verified user reviews are published on our Trustpilot profile as
              they come in.
            </p>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                render={
                  <a
                    href="https://uk.trustpilot.com/review/theenglishhub.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Trustpilot
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                }
              />
            </div>
          </Card>
        </div>
      </PressSection>

      {/* Footer-ish signpost */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <Building2 className="w-3.5 h-3.5" />
            Upskill Energy Limited
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            For brand, logo, and colour guidance, see our{' '}
            <Link href="/brand" className="text-primary underline underline-offset-4">
              brand guidelines
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
