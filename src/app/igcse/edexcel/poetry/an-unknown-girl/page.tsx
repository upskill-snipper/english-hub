'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, Lock, ScrollText, Quote, Layers, Tag } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

// WHICH QUALIFICATION. Until 26 September 2026 this page called An Unknown
// Girl a 4ET1 Literature poem, examined in Paper 1 Section B, and told
// students to compare it with another anthology poem. It is not: the poem is in
// Part 2 of the anthology, which only English Language A (4EA1) sets. The 4EA1
// specification (Issue 7, August 2025, pp. 6 and 12 to 15) examines Part 2 in
// Component 2 (Paper 2) Section A, one 30-mark essay on a single poem or prose
// text printed in the paper, or in Component 3, the coursework alternative,
// whose Assignment A is one 30-mark essay on three Part 2 texts, at least one
// of them prose. The June 2023 Paper 2 set a single-poem question with no
// comparison. See src/lib/board/edexcel-igcse-anthology.ts.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'An Unknown Girl',
  alternativeHeadline: 'A Pearson Edexcel International GCSE English Language A (4EA1) study guide',
  author: {
    '@type': 'Person',
    name: 'Moniza Alvi',
    birthDate: '1954',
  },
  datePublished: '1996',
  inLanguage: 'en',
  about: ['Identity', 'Cultural heritage', 'Diaspora', 'Belonging', 'Mehndi / henna'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel International GCSE English Language A 4EA1',
    targetName: 'Anthology Part 2 - Paper 2 Section A, or Component 3 Assignment A',
  },
}

/* ── Themes ───────────────────────────────────────────────────────── */

const themes = [
  'Cultural identity and dual heritage',
  'Belonging and the search for roots',
  'Memory and longing',
  'Sensory experience of the bazaar',
  'The body as a site of cultural meaning',
]

/* ── Stanza summaries (paraphrase only) ───────────────────────────── */

// CHECKED AGAINST THE TEXT, 26 September 2026. These summaries used to invent
// most of their detail: saris and music, a pattern of leaves and curls, jeans
// and Western kitsch on the stalls, a line drawn across the palm, an "amber"
// coin paid to the girl, and a closing dream in which the girl "peels back" the
// speaker's skin. None of it is in the poem, and the two phrases were printed
// in quotation marks as though they were. Every detail below was checked
// against the Issue 8 anthology text, page 27, by script, without reproducing
// it. The only pattern the poem names is a peacock, and it ends with the
// speaker reaching out over a whole country towards the girl, not dreaming of
// her.
//
// A second check the same day, for the poem's words left unmarked: the
// summaries and notes below carried four runs of three words straight from the
// poem without quotation marks, which no quotation measure can see, and are now
// paraphrased. Three claims were also wrong or unsupported: satin was listed as
// bazaar imagery, but the poem uses it of the girl's knee; the speaker was said
// to keep still and submit, which the poem does not say; and "modern editions"
// were said to print the poem in sections, which nothing here can show. The
// anthology prints it as one unbroken column of 48 lines, so the four sections
// on this page are its own division, and the Form note now says so.
//
// ONE BUDGET WITH THE GUIDE, 26 September 2026. The layout mounts the study
// guide (src/data/study-guides/an-unknown-girl.ts) beneath this page, so the
// route shares one fair-dealing allowance with it: 15 per cent of the poem, 28
// words, and the guide's verified quotations use all of it. This page therefore
// quotes only what the guide already quotes. It used to quote the opening line
// as well, in the first summary and the rights notice, which took the route to
// 32 words; the setting is now described, not quoted. A new quotation here has
// to come out of the guide's share. The measure is
// src/__tests__/no-poem-quoted-beyond-fair-dealing.test.ts.
const stanzaSummaries = [
  {
    n: 'Section 1',
    label: 'The market at dusk',
    body: "The poem opens as evening falls in a South Asian street market bright with electric light: the bazaar is &ldquo;studded with neon&rdquo;. An unnamed young woman is decorating the speaker's hand with henna paste (mehndi), piping it through a nozzle as if icing a cake and steadying the speaker's hand against her own knee.",
  },
  {
    n: 'Section 2',
    label: 'The henna pattern emerges',
    body: "The henna costs the speaker very little. As the girl works, a peacock design opens out over the speaker's palm: it is the one pattern the poem names. Around them the street market carries on, full of colour, with its shops, lengths of fabric and banners advertising a national beauty contest.",
  },
  {
    n: 'Section 3',
    label: 'The refrain returns',
    body: "The opening scene comes round again like a refrain: the lit-up market at dusk, the anonymous girl, the henna going on to the speaker's hand. The speaker admits she is clinging on, and the peacock appears again. A small transaction in a market has quietly turned into something more than commerce.",
  },
  {
    n: 'Section 4',
    label: 'Longing from a distance',
    body: 'The speaker knows the henna will fade. The poem ends in an imagined future, with the speaker stretching out across a whole country towards the girl and the lit-up market. The girl who marked her hand is out of reach, and the poem closes on longing rather than belonging.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: "Free verse with no stanza breaks: the Edexcel anthology prints it as one unbroken column of 48 short lines. The four sections on this page are this guide's own division, not the poet's. The uneven line lengths match the speaker's sense of being between two cultures, fitting neatly into neither.",
  },
  {
    label: 'Line breaks and pace',
    body: 'Alvi uses short, broken lines, most of them three to five words long and none shorter than two, to slow the eye and to mimic the slow, careful tracing of the henna pattern. The reader has to move through the poem at the pace of the painting. The fragmented appearance also suggests an identity composed of pieces.',
  },
  {
    label: 'Imagery: light, colour, body',
    body: "The bazaar imagery is electric and sensory: neon, colours, cloth and banners. The body imagery is intimate: the speaker's hand steadied on the girl's knee, which the poem likens to satin, and the peacock opening out over the palm, a pattern the speaker knows will fade. Alvi places the personal body inside the public market, and lets the henna become a symbol of cultural inscription.",
  },
  {
    label: 'Symbolism of mehndi',
    body: 'Mehndi (henna painting) is traditionally applied to brides in South Asian cultures; here a decoration with those associations is bought for small change in a street market. The henna becomes a symbol both of cultural belonging (it marks the speaker&rsquo;s skin) and of cultural distance (she knows it will be gone within a week, and the poem ends with her reaching out over a whole country).',
  },
  {
    label: 'Repetition',
    body: "&ldquo;An unknown girl&rdquo; recurs in the poem like a refrain. The speaker keeps returning to the figure of the henna painter, who is anonymous yet intensely present. The repetition creates a yearning rhythm: the nameless girl becomes a symbol for the parts of the speaker's heritage she does not fully know.",
  },
  {
    label: 'Closing image',
    body: 'The poem ends in an imagined future, with the speaker reaching out across a whole country towards the girl she met in the bazaar. The hand the girl once held steady now stretches towards someone out of reach. The image is tender and unresolved: the connection the henna made is also a measure of distance.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

// PART 2 TEXTS ONLY. Until 26 September 2026 this list offered Half-caste and
// Piano, both Part 3 poems that only 4ET1 Literature students study. A 4EA1
// student can pair An Unknown Girl only with other Part 2 texts, and only in
// the coursework option, which needs at least one prose text among its three.
const comparisons = [
  {
    title: 'Still I Rise',
    poet: 'Maya Angelou',
    href: '/igcse/edexcel/poetry/still-i-rise',
    reason:
      "Both poems use the body as a stage for identity. Angelou's speaker insists on her presence and rises against erasure; Alvi's speaker quietly accepts the henna inscription that connects her to her heritage. Compare loud assertion with intimate inscription.",
    themes: ['Identity', 'Body', 'Belonging'],
  },
  {
    title: 'Significant Cigarettes',
    poet: 'Rose Tremain',
    href: '/revision/texts/significant-cigarettes',
    reason:
      'A prose pairing. Both texts are about belonging and distance between two countries. Lev travels by coach to London for work, thinking of the village, the mother and the daughter he has left; Alvi&rsquo;s speaker is drawn to a heritage she only half knows, and ends reaching back towards it. Compare leaving home with longing for a home.',
    themes: ['Belonging', 'Displacement', 'Longing'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function AnUnknownGirlPage() {
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
            <h1 className="text-heading-lg font-heading text-foreground">An Unknown Girl</h1>
            <p className="text-body-sm text-muted-foreground">
              Moniza Alvi (b. 1954) &middot; published 1996 in <em>A Bowl of Warm Air</em> (Oxford
              University Press); reprinted by Bloodaxe Books &middot; Edexcel IGCSE Anthology
            </p>
            {/* Not igcse.page.badge_edexcel_lit: this is a 4EA1 Language A
                text, not Literature. The old key read the same in every locale. */}
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE English Language A
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Rights notice ───────────────────────────────────────────── */}
      <section
        aria-label="Rights notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <Lock className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-2">
            <p>
              <strong className="text-foreground">Rights notice.</strong> &ldquo;An Unknown
              Girl&rdquo; is in copyright. UK book rights are held by{' '}
              <strong className="text-foreground">Bloodaxe Books</strong> (rights enquiries:
              bloodaxebooks.com). For that reason this study guide does not reproduce the poem in
              full. Use the official Edexcel anthology (Pearson Education, ISBN 978-1-446-93108-0)
              or a licensed edition such as Bloodaxe&rsquo;s{' '}
              <em>Split World: Poems 1990&ndash;2005</em> (Bloodaxe, 2008) when reading the text.
            </p>
            <p className="text-body-xs text-muted-foreground">
              Short phrases from the poem are quoted on this page and in the study guide below for
              criticism and review, under CDPA s.30 (fair dealing).
            </p>
          </div>
        </div>
      </section>

      {/* ── Author and publication ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <ScrollText className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Moniza Alvi (born 1954)</h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Moniza Alvi was born in Lahore, Pakistan, to a Pakistani father and an English mother.
            She moved to England as a baby and grew up in Hertfordshire. She did not return to
            Pakistan until well into adulthood. Her work circles the experience of dual cultural
            heritage and the imaginative pull of a country she did not grow up in.
          </p>
          <p>
            <strong className="text-foreground">Publication:</strong> &ldquo;An Unknown Girl&rdquo;
            was first published in 1996 in Alvi&rsquo;s second collection,{' '}
            <em>A Bowl of Warm Air</em> (Oxford University Press, 1996). It was later reprinted in{' '}
            <em>Carrying My Wife</em> (Bloodaxe, 2000) and{' '}
            <em>Split World: Poems 1990&ndash;2005</em> (Bloodaxe, 2008). UK rights are held by
            Bloodaxe Books.
          </p>
          <p>
            <strong className="text-foreground">Context:</strong> The poem is set in a bazaar in
            India and draws on Alvi&rsquo;s visits to South Asia as an adult. Mehndi, henna painting
            on the hands and feet, is a traditional decoration applied to brides at South Asian
            weddings, and is also offered casually to passers-by at street stalls. The poem
            positions the speaker between tourist and returnee: she is not exactly a stranger, and
            not exactly a daughter of the place.
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

      {/* ── Section-by-section paraphrase ───────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            What happens (paraphrase)
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          The poem is a single free-verse piece. The summaries below describe the action in plain
          English and quote only one short phrase. The full text is in copyright and is not
          reproduced here.
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
          A paraphrased account of the poem&rsquo;s shape and main techniques. Apart from the title
          phrase, which the poem repeats, no primary text is quoted.
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
        textName="An Unknown Girl"
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
          least one a poem and one prose. These Part 2 texts pair well with An Unknown Girl for
          that.
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
              <p
                className="text-xs text-muted-foreground leading-relaxed mb-3"
                dangerouslySetInnerHTML={{ __html: c.reason }}
              />
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
