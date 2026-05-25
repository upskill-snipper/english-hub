import Link from 'next/link'
import {
  ArrowRight,
  Briefcase,
  Languages,
  Sparkles,
  LineChart,
  Globe2,
  Users2,
  Target,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/json-ld'

// ─── /ielts/partners/for-agencies ──────────────────────────────────────────
// Focused B2B landing page for education / student-recruitment agencies that
// place applicants into English-medium universities and need them IELTS-ready.
// Server component, single <h1>, original copy. Metadata in ./layout.tsx.
//
// COMPLIANCE (hard requirement): The English Hub is NOT an accredited UCAS or
// university recruitment agent and NOT an official British Council / IELTS
// partner. Any reference to those routes is framed as intent / alignment with
// the standards we hold ourselves to — never as a held affiliation. The caveat
// block near the foot of the page reinforces this.
// ────────────────────────────────────────────────────────────────────────────

const CONTACT_HREF = '/contact'

// Pressures an agency placement team feels.
const CHALLENGES = [
  {
    icon: Target,
    accent: 'border-l-clay-500/50',
    body: 'Applicants stall at the visa and offer stage because they cannot reach the IELTS band their destination requires.',
  },
  {
    icon: LineChart,
    accent: 'border-l-ochre-500/50',
    body: 'Without a reliable predicted band it is hard to advise students honestly on which offers are realistic.',
  },
  {
    icon: Languages,
    accent: 'border-l-teal-500/50',
    body: 'Arabic-speaking applicants need preparation that does not add an English-comprehension barrier on top of the test itself.',
  },
  {
    icon: Globe2,
    accent: 'border-l-sage-500/50',
    body: 'Coordinating preparation across applicants in different countries and time zones is difficult without a single platform.',
  },
]

// What the agency gets.
const FEATURES = [
  {
    icon: Users2,
    title: 'Bulk access for applicants',
    body: 'Enrol the students you are placing in one step and give each the full IELTS Academic learning loop — diagnostic, plan, practice and mocks.',
  },
  {
    icon: FileCheck2,
    title: 'Predicted band evidence',
    body: 'Full timed mocks and per-skill scoring produce a defensible predicted overall band you can use to advise students and support applications.',
  },
  {
    icon: Sparkles,
    title: 'Instant AI feedback',
    body: 'Writing and Speaking are marked against the official descriptors in seconds, so applicants improve quickly without waiting on a tutor.',
  },
  {
    icon: Languages,
    title: 'Bilingual English / Arabic',
    body: 'A fully bilingual experience means Gulf applicants can prepare in the language they navigate most comfortably, right up to test readiness.',
  },
  {
    icon: LineChart,
    title: 'Cohort visibility',
    body: 'A dashboard view across your applicants shows who is progressing and who needs a push before their test date.',
  },
  {
    icon: Globe2,
    title: 'Place from anywhere',
    body: 'A cloud platform your applicants reach from any country, so distance and time zones stop being an obstacle to preparation.',
  },
]

// How agencies deploy it.
const USE_CASES = [
  {
    label: 'Pre-application',
    headline: 'Set realistic targets',
    body: 'Use the placement diagnostic to benchmark each applicant early, so you can advise on destinations and timelines with confidence.',
  },
  {
    label: 'Active preparation',
    headline: 'Close the band gap',
    body: 'Put applicants through a focused study plan that targets their weakest skill first, with AI feedback driving rapid improvement.',
  },
  {
    label: 'Pre-departure',
    headline: 'Evidence the readiness',
    body: 'Share predicted bands and progress as part of a credible, standards-aligned preparation story behind each placement.',
  },
]

const FAQS = [
  {
    question: 'Is The English Hub an accredited university recruitment agent?',
    answer:
      'No. The English Hub is an independent IELTS preparation platform, not a UCAS or university recruitment agent. We support the preparation side — getting applicants IELTS-ready — and we describe any recruitment or accreditation routes we are pursuing as exactly that: routes we are pursuing, not affiliations we hold.',
  },
  {
    question: 'How does this help our placements?',
    answer:
      'It gets the students you place to the IELTS band their destination requires, and gives you predicted-band evidence to advise applicants honestly and support their applications.',
  },
  {
    question: 'Can applicants prepare from any country?',
    answer:
      'Yes. The platform is cloud-based and bilingual in English and Arabic, so applicants can prepare from anywhere, in the language they are most comfortable navigating.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Contact us with a little about your agency and the applicants you are placing, and we will scope bulk access and a pilot around your intake cycle.',
  },
]

export default function IeltsPartnersForAgenciesPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'Partners', url: 'https://theenglishhub.app/ielts/partners' },
          { name: 'For agencies', url: 'https://theenglishhub.app/ielts/partners/for-agencies' },
        ]}
      />
      <FAQPageJsonLd faqs={FAQS} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage-500/[0.07] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-clay-500">
            <Briefcase className="h-3.5 w-3.5" aria-hidden />
            For education agencies
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Get the applicants you place IELTS-ready
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Give the students you are placing AI-marked IELTS Academic preparation and a credible
            predicted band — bilingual in English and Arabic, reachable from anywhere, with a
            roadmap aligned to recognised standards.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              Talk to us about your applicants
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/ielts/partners" />}
            >
              All partnership options
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Challenges */}
      <section aria-labelledby="challenge-heading" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              The challenge
            </p>
            <h2
              id="challenge-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              The band gap stalls placements
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CHALLENGES.map(({ icon: Icon, accent, body }) => (
              <Card
                key={body}
                className={`flex items-start gap-4 border-l-4 ${accent} border-border/50 bg-card p-5 sm:p-6`}
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05] text-muted-foreground">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-sm leading-relaxed text-foreground">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What you get */}
      <section aria-labelledby="features-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-clay-500">
              What your agency gets
            </p>
            <h2
              id="features-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              A preparation engine behind every placement
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use cases — across the placement journey */}
      <section
        aria-labelledby="usecase-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Across the placement journey
          </p>
          <h2
            id="usecase-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            From first benchmark to pre-departure
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {USE_CASES.map(({ label, headline, body }, i) => (
            <GlassPanel
              key={headline}
              accent={(['sage', 'teal', 'ochre'] as const)[i]}
              className="p-6"
            >
              <PanelEyebrow>{label}</PanelEyebrow>
              <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-foreground">
                {headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* 5. Standards & compliance — framed as intent */}
      <section
        aria-labelledby="standards-heading"
        className="border-y border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
          <GlassPanel accent="primary" className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <PanelEyebrow>Standards we work towards</PanelEyebrow>
              <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wide">
                Pursuing
              </Badge>
            </div>
            <h2
              id="standards-heading"
              className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground"
            >
              Built to give partner agencies confidence
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We are working towards the standards of the British Council UK Agent Hub, aligning our
              preparation with official IELTS criteria with the intent of applying to the IELTS
              Partnership Programme, and pursuing relationships with UK universities and their
              recruitment teams. These are routes we are actively pursuing as the platform matures.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                'Aligned to official IELTS band criteria',
                'Pursuing British Council UK Agent Hub standards',
                'Intent to join the IELTS Partnership Programme',
                'Pursuing UK university recruitment relationships',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </GlassPanel>

          {/* Explicit compliance caveat — required. */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            The English Hub is an independent IELTS preparation provider. We are not currently an
            official British Council or IELTS partner, and we are not an accredited UCAS or
            university recruitment agent. References to the British Council UK Agent Hub, the IELTS
            Partnership Programme and university recruitment relationships describe standards we
            align to and routes we are pursuing, and do not imply any existing affiliation,
            accreditation or endorsement.
          </p>
        </div>
      </section>

      {/* 6. CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2
            id="cta-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Make IELTS readiness part of your service
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Tell us about your agency and the applicants you place, and we will scope bulk access
            and a pilot around your intake cycle.
          </p>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left text-sm text-muted-foreground">
            {[
              'Bulk access for the applicants you place',
              'Predicted-band evidence to advise and support applications',
              'Bilingual delivery your applicants can reach from anywhere',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button
              size="lg"
              className="h-12 gap-2 px-7 text-base"
              render={<Link href={CONTACT_HREF} />}
            >
              Talk to us about your applicants
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
