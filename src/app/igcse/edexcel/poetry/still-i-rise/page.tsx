'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, Lock, ScrollText, Quote, Layers, Tag } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

// WHICH QUALIFICATION. Until 26 September 2026 this page called Still I Rise a
// 4ET1 Literature poem, examined in Paper 1 Section B, and told students to
// compare it with another anthology poem. 4ET1 does not set it: the poem is in
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
  name: 'Still I Rise',
  alternativeHeadline: 'A Pearson Edexcel International GCSE English Language A (4EA1) study guide',
  author: {
    '@type': 'Person',
    name: 'Maya Angelou',
    birthDate: '1928',
    deathDate: '2014',
  },
  datePublished: '1978',
  inLanguage: 'en',
  about: ['Resilience', 'Identity', 'Race', 'Civil Rights movement', 'Black womanhood'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel International GCSE English Language A 4EA1',
    targetName: 'Anthology Part 2 - Paper 2 Section A, or Component 3 Assignment A',
  },
}

/* ── Themes ───────────────────────────────────────────────────────── */

const themes = [
  'Resilience in the face of oppression',
  'Identity and self-assertion',
  'Race, slavery and the African-American experience',
  'Female pride and sexuality',
  'Defiance through repetition and rhythm',
]

/* ── Stanza summaries (paraphrase only) ───────────────────────────── */

// CHECKED AGAINST THE TEXT, 26 September 2026. This page used to say the
// refrain ends every stanza (before stanza 8 it ends only stanzas 1, 3 and 6),
// that the poem closes on the speaker rising like air or the tide (it closes on
// the triple refrain), and printed "back yard" for the anthology's single word.
// Four quotations the mounted guide does not already use were also cut, to
// keep the page within its share of a copyrighted poem.
const stanzaSummaries = [
  {
    n: 'Opening stanzas',
    label: 'Addressing the oppressor',
    body: 'The poem opens by addressing an unspecified &ldquo;you&rdquo; who has tried to write the speaker&rsquo;s history with hatred and lies. The widely-quoted opening line &mdash; &ldquo;You may write me down in history&rdquo; &mdash; sets the poem up as a direct, defiant address. Whatever the oppressor does to record, distort, or attack the speaker, she will rise.',
  },
  {
    n: 'Middle stanzas',
    label: 'Confidence, sass and the female body',
    body: 'Angelou shifts to celebrating the speaker&rsquo;s confidence: she walks as if she has &ldquo;oil wells&rdquo; pumping in her living room and laughs as if she owned a gold mine (these images of private riches are the poem&rsquo;s standard rhetorical signature). She embraces sensuality and pride in her body, daring the oppressor to be offended. The tone is playful as well as fierce &mdash; &ldquo;sassiness&rdquo; is part of the resilience.',
  },
  {
    n: 'Ancestral movement',
    label: 'The history of slavery',
    body: 'The poem widens to address centuries of African-American history. The speaker carries that shameful past with her: the legacies of slavery, segregation, and racial violence. She is &ldquo;the dream and the hope of the slave&rdquo; &mdash; she is what the enslaved ancestors imagined for the future. Her rising is collective as well as personal.',
  },
  {
    n: 'Closing stanzas',
    label: 'I rise',
    body: 'The poem ends in a chant. The phrase &ldquo;I rise&rdquo; is repeated in short, hammered lines &mdash; closing with the famous triple repetition of &ldquo;I rise&rdquo;. The repetition turns the poem into something close to a song or a prayer. Earlier images of moons, suns, tides and air have prepared for it: by the end, the rising sounds like a natural force that cannot be stopped.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: 'Nine stanzas in total: seven of four lines (quatrains) followed by two longer closing stanzas with shorter lines, ending in the chant of &ldquo;I rise&rdquo;. The change of shape at the end &mdash; from regular quatrains into broken, repeating short lines &mdash; performs the rising itself: the lines literally lift off the page.',
  },
  {
    label: 'Rhyme',
    body: 'The quatrains use an ABCB rhyme scheme (only the second and fourth lines rhyme). The pattern is reminiscent of ballads, hymns and gospel songs &mdash; forms with deep roots in African-American oral tradition. The familiar rhyme scheme makes the poem feel singable.',
  },
  {
    label: 'Repetition',
    body: 'The refrain &ldquo;I rise&rdquo; is the spine of the poem. A version of it ends the first, third and sixth stanzas; in the last two stanzas it takes over, coming back again and again in short two-word lines until the poem ends on it three times. The repetition turns assertion into incantation.',
  },
  {
    label: 'Direct address',
    body: 'Angelou addresses an unspecified &ldquo;you&rdquo; throughout. The &ldquo;you&rdquo; is the oppressor &mdash; bigot, slave-owner, distorted historian, anyone who has tried to demean the speaker. Angelou turns the lyric inside out: instead of confessing to a private listener, she confronts a public enemy.',
  },
  {
    label: 'Imagery: natural and material',
    body: 'Two streams of imagery run through the poem: confident material wealth (oil wells, gold mines, diamonds) and natural inevitability (the moon, the sun, the tide, the air). The first stream is the speaker boasting; the second is the speaker rooted in nature. Together they give the rising a physical solidity and a cosmic scale.',
  },
  {
    label: 'Tone',
    body: 'Multiple tones operate at once: defiant, playful, proud, sensual, mournful (the slavery passages), triumphant (the closing). Angelou refuses to let the poem be only angry. The mixture of moods is itself a form of liberation: the speaker is allowed to feel everything.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

// PART 2 TEXTS ONLY. Until 26 September 2026 this list offered Half-caste and
// If-, both Part 3 poems that only 4ET1 Literature students study. A 4EA1
// student can pair Still I Rise only with other Part 2 texts, and only in the
// coursework option, which needs at least one prose text among its three.
const comparisons = [
  {
    title: 'The Story of an Hour',
    poet: 'Kate Chopin',
    href: '/revision/texts/the-story-of-an-hour',
    reason:
      'A prose pairing. Both texts give a woman a moment of self-possession against the forces that hold her down. Angelou&rsquo;s speaker rises in open defiance; Chopin&rsquo;s Louise Mallard, alone at an open window after news of her husband&rsquo;s death, discovers a freedom she can only whisper to herself and does not live to keep. Compare public triumph with private awakening.',
    themes: ['Freedom', 'Selfhood', 'Women'],
  },
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      'A poem of rising set against a poem of falling. Owen&rsquo;s soldier is diminished, pitied and ignored, waiting for others to act; Angelou&rsquo;s speaker refuses pity and will not be diminished by what others do to her. Compare how each poet uses the way others look at the speaker.',
    themes: ['Resilience', 'Pity', 'How others see us'],
  },
  {
    title: 'An Unknown Girl',
    poet: 'Moniza Alvi',
    href: '/igcse/edexcel/poetry/an-unknown-girl',
    reason:
      'Both poems use the body as a stage for identity. Angelou&rsquo;s speaker insists on her presence and rises against erasure; Alvi&rsquo;s speaker quietly accepts the henna inscription that connects her to her heritage. Compare loud assertion with intimate inscription.',
    themes: ['Identity', 'Body', 'Heritage'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function StillIRisePage() {
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
            <h1 className="text-heading-lg font-heading text-foreground">Still I Rise</h1>
            <p className="text-body-sm text-muted-foreground">
              Maya Angelou (1928&ndash;2014) &middot; published 1978 in <em>And Still I Rise</em>{' '}
              (Random House) &middot; Edexcel IGCSE Anthology
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
            {/* Until 26 September 2026 this said world rights were held by
                Random House alone. The Issue 8 acknowledgements (page 72)
                credit the UK edition (Virago Press, 1986) and the permission of
                Little, Brown Book Group as well as Random House. */}
            <p>
              <strong className="text-foreground">Rights notice.</strong> &ldquo;Still I Rise&rdquo;
              is in copyright (&copy; Maya Angelou 1978). The Edexcel anthology takes its text from
              the UK edition of <em>And Still I Rise</em> (Virago Press, 1986) and reproduces it by
              permission of <strong className="text-foreground">Little, Brown Book Group</strong>{' '}
              and of{' '}
              <strong className="text-foreground">
                Random House, an imprint and division of Penguin Random House
              </strong>
              . For that reason this study guide does not reproduce the poem in full. Use the
              official Edexcel anthology (Pearson Education, ISBN 978-1-446-93108-0) or a licensed
              Random House edition of
              <em> And Still I Rise</em> (1978) or{' '}
              <em>The Complete Collected Poems of Maya Angelou</em> (1994) when reading the text.
            </p>
            <p className="text-body-xs text-muted-foreground">
              Short fair-dealing reference is made below to the poem&rsquo;s widely-attested opening
              line (&ldquo;You may write me down in history&rdquo;) and to its famous closing chant
              (&ldquo;I rise&rdquo;) under CDPA s.30 (criticism and review).
            </p>
          </div>
        </div>
      </section>

      {/* ── Author and publication ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <ScrollText className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Maya Angelou (1928&ndash;2014)
          </h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Maya Angelou was an American poet, memoirist and civil-rights activist. Born Marguerite
            Annie Johnson in St. Louis, Missouri, she grew up in Stamps, Arkansas, and went on to
            write seven autobiographies &mdash; beginning with the landmark{' '}
            <em>I Know Why the Caged Bird Sings</em> (Random House, 1969) &mdash; alongside her
            poetry. She worked closely with Martin Luther King Jr. and Malcolm X, and read her poem
            &ldquo;On the Pulse of Morning&rdquo; at Bill Clinton&rsquo;s presidential inauguration
            in 1993.
          </p>
          <p>
            <strong className="text-foreground">Publication:</strong> &ldquo;Still I Rise&rdquo;
            gives its name to Angelou&rsquo;s third poetry collection, <em>And Still I Rise</em>{' '}
            (Random House, 1978). It has since been reprinted in{' '}
            <em>The Complete Collected Poems of Maya Angelou</em> (Random House, 1994). In the UK,{' '}
            <em>And Still I Rise</em> was published by Virago Press (1986), and the anthology
            reproduces the poem by permission of Little, Brown Book Group as well as Random House.
          </p>
          <p>
            <strong className="text-foreground">Context:</strong> The poem grew out of
            Angelou&rsquo;s engagement with the Civil Rights movement and her witness to the long
            aftermath of slavery and segregation in the American South. The speaker&rsquo;s
            &ldquo;rising&rdquo; is at once personal &mdash; one woman&rsquo;s self-respect &mdash;
            and historical &mdash; the rising of an entire community out of the legacy of slavery.
            The poem became an anthem of the late twentieth century and was read at Nelson
            Mandela&rsquo;s 1994 inauguration as President of South Africa.
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
          The poem is nine stanzas of rhymed verse, ending in a chant. The summaries below describe
          the action in plain English and refer only to widely-attested opening and closing phrases.
          The full text is in copyright and is not reproduced here.
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

      <StudyTools textName="Still I Rise" textType="poem" examBoard="Edexcel" variant="compact" />

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
          least one a poem and one prose. These Part 2 texts pair well with Still I Rise for that.
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
