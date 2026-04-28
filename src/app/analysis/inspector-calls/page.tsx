import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { ArrowRight, BookOpen, Quote, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  MarkerByline,
  PageContainer,
  RevisionCta,
  SectionHeading,
} from './_components/analysis-page'

export const metadata: Metadata = {
  title: 'An Inspector Calls Analysis | The English Hub',
  description:
    'In-depth An Inspector Calls analysis for GCSE English Literature. Quote breakdowns, character studies, themes, and Priestley context written by markers.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/inspector-calls',
  },
  openGraph: {
    title: 'An Inspector Calls Analysis | The English Hub',
    description:
      'GCSE-ready analysis of An Inspector Calls — quotes, characters, themes and context written by markers.',
    url: 'https://theenglishhub.app/analysis/inspector-calls',
    type: 'article',
  },
}

type Entry = {
  href: string
  title: string
  blurb: string
}

const QUOTE_PAGES: Entry[] = [
  {
    href: '/analysis/inspector-calls/we-are-members-of-one-body-meaning',
    title: 'We are members of one body — meaning',
    blurb: "Religious allusion and collective responsibility in the Inspector's closing speech.",
  },
  {
    href: '/analysis/inspector-calls/fire-and-blood-and-anguish-meaning',
    title: 'Fire and blood and anguish — meaning',
    blurb: "Biblical and WWI imagery in the Inspector's prophetic warning.",
  },
  {
    href: '/analysis/inspector-calls/a-man-has-to-mind-his-own-business',
    title: 'A man has to mind his own business',
    blurb: "Birling's individualism dismantled by Priestley in Act One.",
  },
  {
    href: '/analysis/inspector-calls/community-and-all-that-nonsense',
    title: 'Community and all that nonsense',
    blurb: "Birling's dismissal of social responsibility analysed.",
  },
  {
    href: '/analysis/inspector-calls/girls-of-that-class-meaning',
    title: 'Girls of that class — meaning',
    blurb: "Mrs Birling's class prejudice in Act Two examined.",
  },
  {
    href: '/analysis/inspector-calls/i-wasnt-in-any-way-responsible',
    title: "I wasn't in any way responsible",
    blurb: "Mrs Birling's denial of guilt and moral evasion.",
  },
  {
    href: '/analysis/inspector-calls/public-men-have-responsibilities',
    title: 'Public men have responsibilities',
    blurb: "Goole's rebuke of Birling and the duties of the elite.",
  },
  {
    href: '/analysis/inspector-calls/she-asked-for-the-earth',
    title: 'She asked for the earth',
    blurb: "Mrs Birling's contempt for Eva Smith, unpacked.",
  },
  {
    href: '/analysis/inspector-calls/its-better-to-ask-for-the-earth',
    title: "It's better to ask for the earth",
    blurb: "The Inspector's reversal of Mrs Birling's phrase.",
  },
  {
    href: '/analysis/inspector-calls/we-dont-live-alone',
    title: "We don't live alone",
    blurb: "The moral heart of the Inspector's final speech.",
  },
  {
    href: '/analysis/inspector-calls/the-inspector-stage-directions',
    title: "The Inspector's stage directions",
    blurb: 'Massiveness, solidity and purposefulness — what they signal.',
  },
  {
    href: '/analysis/inspector-calls/a-chain-of-events-meaning',
    title: 'A chain of events — meaning',
    blurb: 'Causality, guilt and collective responsibility in Act One.',
  },
  {
    href: '/analysis/inspector-calls/port-the-governor-used-to-send',
    title: 'Port the Governor used to send',
    blurb: "Birling's status-obsessed dinner table talk decoded.",
  },
  {
    href: '/analysis/inspector-calls/cranks-walking-out-meaning',
    title: 'Cranks walking out — meaning',
    blurb: "Birling's contempt for socialists and reformers.",
  },
  {
    href: '/analysis/inspector-calls/millions-and-millions-of-eva-smiths',
    title: 'Millions and millions of Eva Smiths',
    blurb: "Universality and class in the Inspector's final warning.",
  },
]

const CHARACTER_THEME_PAGES: Entry[] = [
  {
    href: '/analysis/inspector-calls/inspector-goole-character-analysis',
    title: 'Inspector Goole — character analysis',
    blurb: "Priestley's moral mouthpiece: name, role, authority and structure.",
  },
  {
    href: '/analysis/inspector-calls/arthur-birling-character-analysis',
    title: 'Arthur Birling — character analysis',
    blurb: 'Dramatic irony, capitalism and the pompous patriarch of Act One.',
  },
  {
    href: '/analysis/inspector-calls/sheila-birling-character-analysis',
    title: 'Sheila Birling — character analysis',
    blurb: 'Moral growth, gender and generational change across the play.',
  },
  {
    href: '/analysis/inspector-calls/eric-birling-character-analysis',
    title: 'Eric Birling — character analysis',
    blurb: 'Guilt, alcohol, masculinity and the capacity for change.',
  },
  {
    href: '/analysis/inspector-calls/social-responsibility-theme',
    title: 'Social responsibility — theme',
    blurb: "Priestley's central theme explored through structure and speech.",
  },
  {
    href: '/analysis/inspector-calls/class-theme-analysis',
    title: 'Class — theme analysis',
    blurb: 'Edwardian hierarchy and capital vs labour on stage.',
  },
  {
    href: '/analysis/inspector-calls/age-theme-analysis',
    title: 'Age — theme analysis',
    blurb: 'Young vs old: who changes, who refuses, and why it matters.',
  },
  {
    href: '/analysis/inspector-calls/gender-theme-analysis',
    title: 'Gender — theme analysis',
    blurb: 'Sheila, Eva and the double standards of Edwardian patriarchy.',
  },
  {
    href: '/analysis/inspector-calls/priestley-socialism-context',
    title: "Priestley's socialism — context",
    blurb: '1912 setting, 1945 audience, welfare state and WWI/WWII.',
  },
  {
    href: '/analysis/inspector-calls/how-to-write-grade-9-inspector-calls-essay',
    title: 'How to write a Grade 9 Inspector Calls essay',
    blurb: 'Planning, thesis, integrated quotation and marker tips.',
  },
]

export default async function InspectorCallsHubPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'An Inspector Calls Analysis',
    description:
      'Quote, character and theme analyses for An Inspector Calls by J. B. Priestley, written by GCSE markers.',
    url: 'https://theenglishhub.app/analysis/inspector-calls',
    about: {
      '@type': 'Book',
      name: 'An Inspector Calls',
      author: { '@type': 'Person', name: 'J. B. Priestley' },
    },
  }

  return (
    <PageContainer>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-3">
        <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
          GCSE English Literature
        </Badge>
        <h1 className="text-heading-lg font-heading text-foreground">
          An Inspector Calls — analysis hub
        </h1>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Twenty-five focused analysis pages on J. B. Priestley&apos;s An Inspector Calls, covering
          the play&apos;s most-searched quotes, every major character, and the big AQA, Edexcel and
          Eduqas themes. Each page is written by GCSE markers with short fair-use extracts, context,
          and exam-ready analysis.
        </p>
        <MarkerByline />
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Quote className="size-4 text-primary" />
          <SectionHeading>Quote analyses</SectionHeading>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {QUOTE_PAGES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/30"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="size-4 text-primary" />
          <SectionHeading>Characters, themes and context</SectionHeading>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {CHARACTER_THEME_PAGES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/30"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <RevisionCta />

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="size-4 text-muted-foreground" />
          <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
            How to use this hub
          </span>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Start with the quote analysis closest to your essay question, then cross-reference the
          relevant character or theme page. Every page ends with a Grade 9 writing tip and links
          onwards to three related analyses, so you can build a full revision sweep in under an
          hour.
        </p>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/grade-targets/grade-9" />}
        >
          Grade 9 revision targets
          <ArrowRight className="size-3.5" />
        </Button>
      </section>

      <p className="text-[0.7rem] leading-relaxed text-muted-foreground/80">
        © Samuel French / Concord Theatricals on behalf of the Priestley estate. Quotations are
        short fair-dealing extracts.
      </p>
    </PageContainer>
  )
}
