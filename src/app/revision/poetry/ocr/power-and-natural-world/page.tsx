'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Mountain,
  Sparkles,
  BookOpen,
  Lock,
  CheckCircle2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

interface Poem {
  title: string
  poet: string
  slug: string
  publicDomain: boolean
  hook: string
}

const POEMS: Poem[] = [
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    slug: 'ozymandias',
    publicDomain: true,
    hook: 'A shattered statue in the desert reveals the futility of human power.',
  },
  {
    title: 'London',
    poet: 'William Blake',
    slug: 'london',
    publicDomain: true,
    hook: 'A walk through London exposes suffering and institutional oppression.',
  },
  {
    title: 'The Eagle',
    poet: 'Alfred Lord Tennyson',
    slug: 'the-eagle',
    publicDomain: true,
    hook: 'A six-line miniature portrait of a majestic bird poised above the sea.',
  },
  {
    title: 'Inversnaid',
    poet: 'Gerard Manley Hopkins',
    slug: 'inversnaid',
    publicDomain: true,
    hook: 'A wild Scottish stream becomes a passionate plea to leave wilderness alone.',
  },
  {
    title: 'Wind',
    poet: 'Ted Hughes',
    slug: 'wind',
    publicDomain: false,
    hook: 'A house under siege as a violent wind tries to tear it from its moorings.',
  },
  {
    title: 'Storm on the Island',
    poet: 'Seamus Heaney',
    slug: 'storm-on-the-island',
    publicDomain: false,
    hook: 'An island community braces against the relentless force of a storm.',
  },
  {
    title: 'Living Space',
    poet: 'Imtiaz Dharker',
    slug: 'living-space',
    publicDomain: false,
    hook: 'A precarious slum dwelling becomes a small miracle of human persistence.',
  },
  {
    title: 'Ode to the West Wind',
    poet: 'Percy Bysshe Shelley',
    slug: 'ode-to-the-west-wind',
    publicDomain: true,
    hook: 'An ecstatic invocation of the autumn wind as a force of destruction and rebirth.',
  },
  {
    title: 'Composed Upon Westminster Bridge',
    poet: 'William Wordsworth',
    slug: 'composed-upon-westminster-bridge',
    publicDomain: true,
    hook: 'Wordsworth, a country poet, is silenced by the early-morning beauty of London.',
  },
  {
    title: 'The Prelude (extract) — 1799 two-part Prelude (Part First, lines 81–129)',
    poet: 'William Wordsworth',
    slug: 'the-prelude',
    publicDomain: true,
    hook: 'A stolen boat ride becomes a terrifying encounter with the power of nature. OCR prescribes the 1799 two-part Prelude (Part First, lines 81–129) — not the 1850 posthumous Prelude used by AQA. The wording is materially different.',
  },
  {
    title: 'From a Mother in a Refugee Camp',
    poet: 'Chinua Achebe',
    slug: 'from-a-mother-in-a-refugee-camp',
    publicDomain: false,
    hook: 'A mother performs a tender, doomed act of care for her dying child.',
  },
  {
    title: 'Snow',
    poet: 'Louis MacNeice',
    slug: 'snow',
    publicDomain: false,
    hook: 'A sudden snowfall reveals "the drunkenness of things being various".',
  },
  {
    title: 'The Prayer of the Owl',
    poet: 'Carmen Bernos de Gasztold',
    slug: 'the-prayer-of-the-owl',
    publicDomain: false,
    hook: "An owl's plea to be allowed to keep watching the night unharmed.",
  },
  {
    title: 'Below the Green Corrie',
    poet: 'Norman MacCaig',
    slug: 'below-the-green-corrie',
    publicDomain: false,
    hook: "Highland mountains personified as bandits demand the speaker's life and his praise.",
  },
  {
    title: 'At a Potato Digging',
    poet: 'Seamus Heaney',
    slug: 'at-a-potato-digging',
    publicDomain: false,
    hook: 'Modern Irish farmers digging potatoes are haunted by the ghosts of the Famine.',
  },
]

export default function OCRPowerAndNaturalWorldPage() {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'OCR', url: 'https://theenglishhub.app/revision/poetry/ocr' },
          {
            name: 'Power and the Natural World',
            url: 'https://theenglishhub.app/revision/poetry/ocr/power-and-natural-world',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to OCR Anthology
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              OCR Towards a World Unknown
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Power and the Natural World
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            15 poems exploring nature, environment and human power. From Shelley and Blake to Ted
            Hughes, Seamus Heaney and Chinua Achebe.
          </p>
        </div>
      </section>

      <StudyTools
        textName="OCR Power and Natural World Poetry"
        textType="anthology"
        examBoard="OCR"
        variant="banner"
      />

      <section>
        <div className="mb-5 flex items-center gap-3">
          <Mountain className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">All 15 Poems</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POEMS.map((poem) => (
            <Link
              key={poem.slug}
              href={
                poem.publicDomain
                  ? `/revision/poetry/ocr/power-and-natural-world/${poem.slug}`
                  : '#'
              }
              className={`group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 ${
                poem.publicDomain
                  ? 'hover:border-border hover:shadow-card-hover'
                  : 'cursor-not-allowed opacity-70'
              }`}
              onClick={(e) => {
                if (!poem.publicDomain) e.preventDefault()
              }}
            >
              <div className="absolute right-4 top-4">
                {poem.publicDomain ? (
                  <CheckCircle2 className="size-4 text-emerald-400" />
                ) : (
                  <Lock className="size-4 text-muted-foreground/50" />
                )}
              </div>

              <h3 className="pr-8 text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                {poem.title}
              </h3>
              <p className="mt-0.5 text-caption text-muted-foreground">{poem.poet}</p>
              <p className="mt-3 flex-1 text-body-sm text-muted-foreground leading-relaxed">
                {poem.hook}
              </p>

              <div className="mt-3">
                <Badge variant="outline" className="text-[0.65rem]">
                  {poem.publicDomain ? 'Full study page' : 'Key quotations only'}
                </Badge>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-500/40 bg-amber-500/[0.04] p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          Version note: The Prelude (1799 two-part edition)
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          OCR prescribes the <strong>1799 two-part Prelude</strong>, drafted in Wordsworth&apos;s
          lifetime but unpublished until 1973. The boat-stealing episode appears in
          <strong> Part First, lines 81&ndash;129</strong>. AQA prescribes the
          <strong> 1850 posthumous Prelude</strong> (edited by Wordsworth&apos;s widow Mary). The
          wording is materially different between the two editions &mdash; never cross-quote between
          versions. If you are revising for OCR, use only the 1799 text.
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">Why are some poems locked?</h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          Older poems are public domain so we provide full annotated study pages. More recent poems
          are still in copyright -- for those we offer context, themes and key quotation analysis
          only. You will need a copy of the OCR <em>Towards a World Unknown</em> anthology to read
          the full text.
        </p>
        <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Rights notice.</strong> Several poems in this cluster
          remain in copyright &mdash; Hughes&rsquo;s <em>Wind</em> and Heaney&rsquo;s{' '}
          <em>Storm on the Island</em> and <em>At a Potato Digging</em> (&copy; Faber &amp; Faber),
          Dharker&rsquo;s <em>Living Space</em> (&copy; Bloodaxe Books), Achebe&rsquo;s{' '}
          <em>From a Mother in a Refugee Camp</em> (&copy; Carcanet Press), MacNeice&rsquo;s{' '}
          <em>Snow</em> (&copy; Faber &amp; Faber) and others. Quotations on individual set-text
          pages are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review,
          quotation). For full text, students should consult the board-licensed OCR{' '}
          <em>Towards a World Unknown</em> anthology.
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-emerald-400" />
        <h2 className="text-heading-lg font-heading text-foreground">Explore other clusters</h2>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry/ocr" />}
        >
          Back to OCR Anthology
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
