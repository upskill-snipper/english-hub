'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

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
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

// WHICH QUALIFICATION. Until 26 September 2026 this page called the poem a
// 4ET1 Literature poem, examined in Paper 1 Section B, and told students to
// compare it with another anthology poem. It is not: the poem is in Part 2 of
// the anthology, which only English Language A (4EA1) sets. The 4EA1
// specification (Issue 7, August 2025, pp. 6 and 12 to 15) examines Part 2 in
// Component 2 (Paper 2) Section A, one 30-mark essay on a single poem or prose
// text printed in the paper, or in Component 3, the coursework alternative,
// whose Assignment A is one 30-mark essay on three Part 2 texts, at least one
// of them prose. The June 2023 Paper 2 set a single-poem question with no
// comparison. See src/lib/board/edexcel-igcse-anthology.ts.
//
// Harrison died on 26 September 2025 (Wikipedia, citing The Times; the London
// Review of Books, "Tony Harrison 1937-2025"). The page wrote of him in the
// present tense until 26 September 2026.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'The Bright Lights of Sarajevo',
  alternativeHeadline: 'A Pearson Edexcel International GCSE English Language A (4EA1) study guide',
  author: {
    '@type': 'Person',
    name: 'Tony Harrison',
    birthDate: '1937',
    deathDate: '2025',
  },
  datePublished: '1995',
  inLanguage: 'en',
  about: ['War', 'Resilience', 'Hope', 'Siege of Sarajevo', 'Young love amid conflict'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel International GCSE English Language A 4EA1',
    targetName: 'Anthology Part 2 - Paper 2 Section A, or Component 3 Assignment A',
  },
}

/* ── Themes ───────────────────────────────────────────────────────── */

const themes = [
  'War and the persistence of ordinary life',
  'Resilience and hope amid violence',
  'Young love against the dark',
  'Reportage as poetry (The Guardian commissioned Harrison to write poems from the war in Bosnia)',
  'Light as both literal (candles, stars) and metaphorical (hope)',
]

/* ── Stanza summaries (paraphrase only) ───────────────────────────── */

// CHECKED AGAINST THE TEXT, 26 September 2026. The middle of this list used to
// invent a row of cafés reopening along the central streets, a Balkan evening
// promenade (the "korzo"), a couple meeting by candlelight in a café, and an
// ending that "looks up" at a clear sky. None of that is in the poem. The boy
// and girl meet in the dark by the flare of a light for a cigarette; the stars
// are seen in rain-filled shell holes; and the poem ends with the two of them
// hand in hand in one candlelit café, behind sandbags made from aid flour
// sacks. Each claim below was checked against the Issue 8 anthology text,
// page 28, by script, without reproducing it.
const stanzaSummaries = [
  {
    n: 'Opening movement',
    label: 'A daytime city under siege',
    body: 'Harrison opens with the daily reality of besieged Sarajevo. Citizens queue for hours to draw rationed water and bread from the few places that still distribute supplies. The poet describes the practical effort it takes simply to survive a day under shellfire and sniper attack. The opening establishes a context of hardship: this is not the romantic city, but a city where ordinary life has been stripped down to queueing and waiting.',
  },
  {
    n: 'Middle movement',
    label: 'Evening falls and the young come out',
    body: 'As darkness comes, the city changes. The young people of Sarajevo, who have been queueing or sheltering all day, come out in the evening and walk the dark streets, where a boy and a girl are no more than shapes to each other. The shells are still falling somewhere - but the city refuses to disappear.',
  },
  {
    n: 'Central encounter',
    label: 'A light in the dark',
    body: "The poem narrows in on a particular moment: a boy and a girl meeting in the blacked-out street. A cigarette is the boy's chance to see her, because the brief flare of a match or lighter shows him her eyes. Harrison treats this small private encounter as a full-scale political statement - the city has not been killed, and the next generation is still falling in love. This is the emotional centre of the poem.",
  },
  {
    n: 'Closing movement',
    label: 'Stars in the shell holes, and a candlelit café',
    body: 'The day&rsquo;s rain has filled the holes the shells left, and the boy sees the evening sky, now full of stars, reflected in them, at his feet rather than overhead. The poem ends in one candlelit café, where he holds the girl&rsquo;s hand behind sandbags made from sacks that once held aid flour. Harrison closes with an image of resilience without sentimentalising the war: the shelter itself is made of the siege.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: 'Rhymed verse in loose iambic pentameter, with rhyming couplets dominating, printed in the Issue 8 anthology as five verse paragraphs of very unequal length (lines 1-11, 12-20, 21-24, 25-42 and 43-46). Harrison is famous for using strict, traditional metrical forms to write about contemporary, often violent subjects. The conventional form makes the violence land harder; the poem feels like reportage in formal verse.',
  },
  {
    label: 'Rhyme',
    body: 'Mostly heroic couplets &mdash; rhyming pairs of pentameter lines. Couplets carry an air of completion and balance. Harrison uses them to suggest that the city, in spite of everything, is finding moments of order and equilibrium each evening.',
  },
  {
    label: 'Anthology Issue 8 layout',
    body: 'The current Edexcel anthology, Issue 8 (February 2026), prints the poem in five verse paragraphs: lines 1-11, 12-20, 21-24, 25-42 and 43-46. Issue 8 also corrected two readings, at lines 32 and 43, so check that the copy you revise from is the current one. In the exam the poem is printed in the paper, so the Issue 8 layout is the structure you comment on.',
  },
  {
    label: 'Reportage in verse',
    body: 'In 1995 The Guardian commissioned Harrison to write poems from the war in Bosnia, and this is one of them, written during the Siege of Sarajevo. The piece moves like a despatch: a wide opening on city-wide hardship, a narrowing into one encounter, a closing image. The poem is journalism in heroic couplets &mdash; the unusual register is part of its power.',
  },
  {
    label: 'Light imagery',
    body: "Light recurs throughout, and most of it is small: the flare of a match or lighter in the dark, a candlelit café, the stars. Harrison's contrast is between human-made light (a match, a candle: fragile and brief) and natural light (stars, distant and constant), and even the stars are seen reflected in shell holes. Both are forms of resistance to the dark of the siege. The title &mdash; &ldquo;Bright Lights&rdquo; &mdash; is partly ironic (these are not Las Vegas lights, and the city is blacked out) and partly literal (these small lights really do shine in the dark).",
  },
  {
    label: 'Tone',
    body: 'Restrained and observational. Harrison does not editorialise about the war; he reports. The political force of the poem comes from the contrast between the brutal context and the unremarkable beauty of two young people finding each other in the dark and ending up hand in hand in a candlelit café.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

// PART 2 TEXTS ONLY. Until 26 September 2026 this list offered War
// Photographer, a Part 3 poem that only 4ET1 Literature students study. A 4EA1
// student can pair this poem only with other Part 2 texts, and only in the
// coursework option, which needs at least one prose text among its three.
const comparisons = [
  {
    title: 'Significant Cigarettes',
    poet: 'Rose Tremain',
    href: '/revision/texts/significant-cigarettes',
    reason:
      "A prose pairing. Both texts find something significant in a small exchange between strangers, and both give a cigarette a part in it. In blacked-out Sarajevo the flare of a light lets a boy see a girl; on the coach to London, Lev's cigarettes and his meeting with Lydia carry the weight of everything he has left behind.",
    themes: ['Strangers', 'Small moments', 'Life under pressure'],
  },
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      'Both poems portray the human cost of war through specific people rather than statistics. Owen focuses on one wounded soldier; Harrison focuses on a boy and a girl finding each other in the blacked-out city. Compare the war poem of grief with the war poem of resilience.',
    themes: ['War', 'Human cost', 'Specificity'],
  },
  {
    title: 'Out, Out-',
    poet: 'Robert Frost',
    href: '/igcse/edexcel/poetry/out-out',
    reason:
      'Both poems explore how life carries on around violence. Frost shows neighbours moving back to work after a death; Harrison shows young people defying war by walking out in the dark. Compare numb continuation with resilient continuation.',
    themes: ['Indifference vs. resilience', 'Continuation', 'Ordinary life'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function BrightLightsOfSarajevoPage() {
  const tr = useT()
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
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          {tr('anth_text.back_to_anthology')}
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
              Tony Harrison (1937&ndash;2025) &middot; first published 15 September 1995 in{' '}
              <em>The Guardian</em>; collected in{' '}
              <em>The Shadow of Hiroshima and Other Film/Poems</em> (Faber, 1995) &middot; Edexcel
              IGCSE Anthology
            </p>
            {/* Not igcse.page.badge_edexcel_lit: this is a 4EA1 Language A
                text, not Literature. The old key read the same in every locale. */}
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE English Language A
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Anthology layout notice ──────────────────────────────────
          Until 26 September 2026 this warned students to work from the
          Issue 2 layout. The anthology is on Issue 8 (February 2026), which
          prints five verse paragraphs and changed two readings; the claim
          that its breaks were absent from the Guardian printing was not
          sourced and has gone. */}
      <section
        aria-label="Anthology version notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-2">
            <p>
              <strong className="text-foreground">Use the Issue 8 text.</strong> The current Edexcel
              anthology, Issue 8 (February 2026), prints &ldquo;The Bright Lights of Sarajevo&rdquo;
              in <strong className="text-foreground">five verse paragraphs</strong> (lines 1-11,
              12-20, 21-24, 25-42 and 43-46), and corrected two readings, at lines 32 and 43. The
              poem is printed in the exam paper in this form, so these are the breaks to comment on
              as part of the poem&rsquo;s structure.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rights notice ───────────────────────────────────────────────
          Until 26 September 2026 this named Bloodaxe Books as the rights
          holder. The Issue 8 acknowledgements (page 72) credit the permission
          to Tony Harrison and name no publisher. */}
      <section
        aria-label="Rights notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <Lock className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-2">
            <p>
              <strong className="text-foreground">Rights notice.</strong> &ldquo;The Bright Lights
              of Sarajevo&rdquo; is in copyright. The Edexcel anthology reproduces it by kind
              permission of Tony Harrison himself, and names no publisher. For that reason this
              study guide does not reproduce any quoted lines from the body of the poem. Use the
              official Edexcel anthology (Pearson Education, ISBN 978-1-446-93108-0) when reading
              the text.
            </p>
          </div>
        </div>
      </section>

      {/* ── Author and publication ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <ScrollText className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Tony Harrison (1937&ndash;2025)
          </h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Tony Harrison was an English poet, translator, dramatist and film-maker, born in Leeds.
            His work moves between classical verse forms and contemporary politics: heroic couplets,
            Aeschylus, council-estate Yorkshire, the front line in Bosnia. He was one of the most
            prominent British poets of the late twentieth century, and died in Newcastle upon Tyne
            on 26 September 2025.
          </p>
          <p>
            {/* Not "war correspondent", as this said until 26 September 2026:
                The Guardian commissioned him to write poems from Bosnia. */}
            <strong className="text-foreground">Poems from Bosnia:</strong> During the Bosnian War,{' '}
            <em>The Guardian</em> commissioned Harrison to write poems about the war, and in late
            August 1995 he travelled to Bosnia to do so. &ldquo;The Bright Lights of Sarajevo&rdquo;
            was first published in <em>The Guardian</em> on{' '}
            <strong className="text-foreground">15 September 1995</strong>.
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
          The poem is rhymed verse in loose iambic pentameter, printed in the Edexcel anthology
          Issue 8 as five verse paragraphs. The summaries below describe the action in plain
          English. No body text from the poem is reproduced.
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
          <h2 className="text-heading-sm font-heading text-foreground">
            {tr('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          In the exam (Paper 2, Section A) you answer one 30-mark essay question on a single Part 2
          text, printed in the paper, so there is no comparison. If your school takes the coursework
          route instead (Component 3, Assignment A), you write one essay on three Part 2 texts, at
          least one a poem and one prose. These Part 2 texts pair well with The Bright Lights of
          Sarajevo for that.
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
        Spec aligned: Pearson Edexcel International GCSE English Language A (4EA1)
      </footer>
    </div>
  )
}
