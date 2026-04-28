'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  GitCompare,
  Lock,
  ScrollText,
  Quote,
  Layers,
  Tag,
  AlertTriangle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'The Bright Lights of Sarajevo',
  alternativeHeadline: 'A Pearson Edexcel IGCSE 4ET1 set-text study guide',
  author: {
    '@type': 'Person',
    name: 'Tony Harrison',
    birthDate: '1937',
  },
  datePublished: '1995',
  inLanguage: 'en',
  about: ['War', 'Resilience', 'Hope', 'Siege of Sarajevo', 'Young love amid conflict'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel IGCSE English Literature 4ET1',
    targetName: 'Anthology Poetry — Paper 1 Section B',
  },
}

/* ── Themes ───────────────────────────────────────────────────────── */

const themes = [
  'War and the persistence of ordinary life',
  'Resilience and hope amid violence',
  'Young love against the dark',
  'Reportage as poetry (Harrison was a war correspondent for The Guardian)',
  'Light as both literal (candles, stars) and metaphorical (hope)',
]

/* ── Stanza summaries (paraphrase only) ───────────────────────────── */

const stanzaSummaries = [
  {
    n: 'Opening movement',
    label: 'A daytime city under siege',
    body: 'Harrison opens with the daily reality of besieged Sarajevo. Citizens queue for hours to draw rationed water and bread from the few places that still distribute supplies. The poet describes the practical effort it takes simply to survive a day under shellfire and sniper attack. The opening establishes a context of hardship: this is not the romantic city, but a city where ordinary life has been stripped down to queueing and waiting.',
  },
  {
    n: 'Middle movement',
    label: 'Evening falls and the cafés open',
    body: 'As darkness comes, the city is transformed. Cafés re-open along the central streets, lit by candles because the electricity is unreliable. Young people of Sarajevo, who have been queueing or sheltering all day, gather in the streets and squares and walk together along the kerb-stones, doing the traditional Balkan evening promenade (the &ldquo;korzo&rdquo;). The shells are still falling somewhere &mdash; but the city refuses to disappear.',
  },
  {
    n: 'Central encounter',
    label: 'Two young people meeting',
    body: 'The poem narrows in on a particular moment: a young man and woman meeting under candlelight at a café and walking together. Harrison treats this small private encounter as a full-scale political statement &mdash; the city has not been killed, and the next generation is still falling in love. This is the emotional centre of the poem.',
  },
  {
    n: 'Closing movement',
    label: 'Stars over the broken pavement',
    body: 'The poem ends looking up. The young couple notice the sky &mdash; clear above the besieged city &mdash; and the stars are visible. Light from above (stars) mirrors light from below (candles in the cafés). Harrison closes with an image of resilience and beauty without sentimentalising the war: the shells will fall again tomorrow, but tonight there is light.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: 'A single block of rhymed verse in loose iambic pentameter, with rhyming couplets dominating. Harrison is famous for using strict, traditional metrical forms to write about contemporary, often violent subjects. The conventional form makes the violence land harder; the poem feels like reportage in formal verse.',
  },
  {
    label: 'Rhyme',
    body: 'Mostly heroic couplets &mdash; rhyming pairs of pentameter lines. Couplets carry an air of completion and balance. Harrison uses them to suggest that the city, in spite of everything, is finding moments of order and equilibrium each evening.',
  },
  {
    label: 'Anthology Issue 2 layout',
    body: "The Edexcel anthology Issue 2 prints &ldquo;The Bright Lights of Sarajevo&rdquo; with additional stanza breaks that are not present in the poem's original publication in The Guardian (1995). When you study the poem for the exam, work from the Issue 2 layout &mdash; examiners may expect you to comment on the breaks Pearson has inserted.",
  },
  {
    label: 'Reportage in verse',
    body: 'Harrison wrote the poem as a war correspondent for The Guardian during the Siege of Sarajevo. The piece moves like a despatch: a wide opening on city-wide hardship, a narrowing into one encounter, a closing image. The poem is journalism in heroic couplets &mdash; the unusual register is part of its power.',
  },
  {
    label: 'Light imagery',
    body: "Light recurs throughout: candles, café lamps, stars. Harrison's contrast is between human-made light (candles, fragile) and natural light (stars, distant and constant). Both are forms of resistance to the dark of the siege. The title &mdash; &ldquo;Bright Lights&rdquo; &mdash; is partly ironic (these are not Las Vegas lights) and partly literal (the city is genuinely brightening as evening falls).",
  },
  {
    label: 'Tone',
    body: 'Restrained and observational. Harrison does not editorialise about the war; he reports. The political force of the poem comes from the contrast between the brutal context and the unremarkable beauty of two young people meeting in a candlelit café.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    href: '/igcse/edexcel/poetry/war-photographer',
    reason:
      'Both poems are by major English poets writing journalism in verse. Duffy reports war from the safety of her English darkroom; Harrison stays inside the besieged city. Compare two journalistic-poetic registers and the question of where the witness should stand.',
    themes: ['War', 'Witness', 'Reportage'],
  },
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      'Both poems portray the human cost of war through specific people rather than statistics. Owen focuses on one wounded soldier; Harrison focuses on a young couple meeting in candlelight. Compare the war poem of grief with the war poem of resilience.',
    themes: ['War', 'Human cost', 'Specificity'],
  },
  {
    title: 'Out, Out—',
    poet: 'Robert Frost',
    href: '/igcse/edexcel/poetry/out-out',
    reason:
      'Both poems explore how life carries on around violence. Frost shows neighbours moving back to work after a death; Harrison shows young people defying war by walking under starlight. Compare numb continuation with resilient continuation.',
    themes: ['Indifference vs. resilience', 'Continuation', 'Ordinary life'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function BrightLightsOfSarajevoPage() {
  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              The Bright Lights of Sarajevo
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Tony Harrison (b. 1937) &middot; first published 15 September 1995 in{' '}
              <em>The Guardian</em>; collected in{' '}
              <em>The Shadow of Hiroshima and Other Film/Poems</em> (Faber, 1995); UK anthology
              rights via Bloodaxe Books &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Issue 2 stanza-break notice ─────────────────────────────── */}
      <section
        aria-label="Anthology version notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-2">
            <p>
              <strong className="text-foreground">Anthology Issue 2 layout warning.</strong> The
              Edexcel IGCSE Anthology Issue 2 prints &ldquo;The Bright Lights of Sarajevo&rdquo;
              with <strong className="text-foreground">additional stanza breaks</strong> that are
              not present in Harrison&rsquo;s original publication in <em>The Guardian</em> (15
              September 1995) or in his Faber collection. When you analyse the poem for the exam,
              refer to the Pearson anthology layout and be ready to comment on the extra breaks
              &mdash; examiners may expect you to address them as part of the poem&rsquo;s
              structure.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rights notice ───────────────────────────────────────────── */}
      <section
        aria-label="Rights notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <Lock className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-2">
            <p>
              <strong className="text-foreground">Rights notice.</strong> &ldquo;The Bright Lights
              of Sarajevo&rdquo; is in copyright. UK anthology rights are held by{' '}
              <strong className="text-foreground">Bloodaxe Books</strong> (rights enquiries:
              bloodaxebooks.com). For that reason this study guide does not reproduce any quoted
              lines from the body of the poem. Use the official Edexcel anthology (Pearson
              Education, ISBN 978-1-446-93108-0) or Bloodaxe&rsquo;s <em>Collected Poems</em>{' '}
              (Bloodaxe, 2007) when reading the text.
            </p>
          </div>
        </div>
      </section>

      {/* ── Author and publication ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <ScrollText className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Tony Harrison (born 1937)
          </h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Tony Harrison is an English poet, translator, dramatist and film-maker, born in Leeds.
            His work moves between classical verse forms and contemporary politics: heroic couplets,
            Aeschylus, council-estate Yorkshire, the front line in Bosnia. He is one of the most
            prominent British poets of the late twentieth century.
          </p>
          <p>
            <strong className="text-foreground">War correspondent in Sarajevo:</strong> During the
            Bosnian War, Harrison travelled to besieged Sarajevo as a war correspondent for{' '}
            <em>The Guardian</em>. He filed a series of poems from the front. &ldquo;The Bright
            Lights of Sarajevo&rdquo; was first published in <em>The Guardian</em> on{' '}
            <strong className="text-foreground">15 September 1995</strong>. It is now most often
            read in <em>Collected Poems</em> (Bloodaxe, 2007).
          </p>
          <p>
            <strong className="text-foreground">Historical context:</strong> The Siege of Sarajevo
            (April 1992 &ndash; February 1996) was the longest siege of a capital city in modern
            warfare. Roughly 13,000 people were killed, including over 5,000 civilians. The city was
            bombarded daily and snipers fired at residents queueing for water and bread. By 1995
            most of the world&rsquo;s press had reported on the slaughter; Harrison&rsquo;s poem
            looks instead at the persistence of ordinary, intimate life.
          </p>
        </div>
      </section>

      {/* ── Themes ──────────────────────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Themes</h2>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 text-body-sm text-card-foreground">
          {themes.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Section paraphrase ──────────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            What happens (paraphrase)
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          The poem is a single piece of rhymed verse in loose iambic pentameter, printed in the
          Edexcel anthology Issue 2 with extra stanza breaks. The summaries below describe the
          action in plain English. No body text from the poem is reproduced.
        </p>
        <div className="space-y-4">
          {stanzaSummaries.map((s) => (
            <div key={s.n} className="rounded-lg border border-border bg-background/40 p-4">
              <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <span className="text-xs font-medium text-rose-400 tabular-nums">{s.n}</span>
                <span className="text-sm font-semibold text-foreground">{s.label}</span>
              </div>
              <p
                className="text-body-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Form and structure ──────────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Form &amp; structure</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          A paraphrased account of the poem&rsquo;s shape and main techniques. No primary text is
          reproduced.
        </p>
        <div className="space-y-3">
          {formAndStructure.map((f) => (
            <div key={f.label}>
              <h3 className="text-sm font-semibold text-foreground mb-1">{f.label}</h3>
              <p
                className="text-body-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: f.body }}
              />
            </div>
          ))}
        </div>
      </section>

      <StudyTools
        textName="The Bright Lights of Sarajevo"
        textType="poem"
        examBoard="Edexcel"
        variant="compact"
      />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another from the anthology. These
          are strong pairings for The Bright Lights of Sarajevo.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="pt-4 text-center text-body-xs text-muted-foreground">
        Spec aligned: Pearson Edexcel IGCSE 4ET1
      </footer>
    </div>
  )
}
