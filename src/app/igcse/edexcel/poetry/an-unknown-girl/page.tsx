'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, Lock, ScrollText, Quote, Layers, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'An Unknown Girl',
  alternativeHeadline: 'A Pearson Edexcel IGCSE 4ET1 set-text study guide',
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
    educationalFramework: 'Pearson Edexcel IGCSE English Literature 4ET1',
    targetName: 'Anthology Poetry - Paper 1 Section B',
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

const stanzaSummaries = [
  {
    n: 'Section 1',
    label: 'In the evening bazaar',
    body: "The poem opens in an Indian street market &mdash; the widely-quoted phrase &ldquo;In the evening bazaar&rdquo; sets the scene. The bazaar is bright with electric light: the imagery is &ldquo;studded with neon&rdquo;. An unnamed young woman is decorating the speaker's hand with henna paste (mehndi), tracing intricate patterns on the palm. The atmosphere is busy, sensuous and brightly coloured &mdash; saris, lights, shop-fronts, music.",
  },
  {
    n: 'Section 2',
    label: 'The henna pattern emerges',
    body: 'Alvi describes the mehndi being squeezed onto her hand from a tube: a pattern of leaves, peacocks and curls slowly forms. The girl works with quiet expertise. The speaker is still &mdash; she submits to the decoration. Around them, modernity crowds in: hung-up jeans, Western kitsch on the stalls, Indian shop signs, the noise of the market.',
  },
  {
    n: 'Section 3',
    label: 'A line dividing the palm',
    body: "The girl draws a line across the speaker's open palm &mdash; an image often read as a literal henna line and as a metaphorical division between the two halves of the speaker's identity. India is being marked onto her body. The speaker pays the girl an &ldquo;amber&rdquo; coin (the colour of the henna) &mdash; the transaction quietly turns into something more than commerce.",
  },
  {
    n: 'Section 4',
    label: 'Returning to the West',
    body: "The speaker imagines the henna fading, slowly, over the days that follow. The poem closes with her thinking ahead to the West: she will lie awake at night, dreaming of the unknown girl in the evening bazaar. The dream-image is cinematic &mdash; the girl &ldquo;peels back&rdquo; the speaker's skin in her sleep. Identity, she suggests, is not just decoration; it goes into the body.",
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: "A single block of free verse, with no consistent stanza pattern. Modern editions sometimes break the poem into uneven sections; the Edexcel anthology prints it as one flowing piece. The visual irregularity matches the speaker's sense of being between two cultures, fitting neatly into neither.",
  },
  {
    label: 'Line breaks and pace',
    body: 'Alvi uses short, broken lines &mdash; sometimes a single word per line &mdash; to slow the eye and to mimic the slow, careful tracing of the henna pattern. The reader has to move through the poem at the pace of the painting. The fragmented appearance also suggests an identity composed of pieces.',
  },
  {
    label: 'Imagery: light, colour, body',
    body: 'The bazaar imagery is electric and sensory: neon, amber, dye, music, jeans on a stall. The body imagery is intimate: the open palm, the line drawn across it, the dye drying on skin. Alvi places the personal body inside the public market, and lets the henna become a symbol of cultural inscription.',
  },
  {
    label: 'Symbolism of mehndi',
    body: 'Mehndi (henna painting) is traditionally applied to brides in South Asian cultures &mdash; here, the bride-imagery is pulled into a moment of tourist transaction. The henna becomes a symbol both of cultural belonging (it lasts on the skin for weeks) and of cultural distance (it fades, and the speaker returns to the West).',
  },
  {
    label: 'Repetition',
    body: "&ldquo;An unknown girl&rdquo; recurs in the poem like a refrain. The speaker keeps returning to the figure of the henna painter, who is anonymous yet intensely present. The repetition creates a yearning rhythm: the unknown girl becomes a symbol for the parts of the speaker's heritage she does not fully know.",
  },
  {
    label: 'Closing image',
    body: 'The poem ends not with a return to the bazaar but with an imagined future scene in the West, where the speaker dreams of the girl &ldquo;peeling back&rdquo; her skin to reveal what is underneath. The image is unsettling and tender at once &mdash; identity is not a costume but something written into the body.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Half-Caste',
    poet: 'John Agard',
    href: '/igcse/edexcel/poetry/half-caste',
    reason:
      'Both poems are written by poets of mixed cultural heritage and explore identity through inventive, sensory language. Agard challenges the prejudice of the term &ldquo;half-caste&rdquo;; Alvi quietly explores the experience of being culturally divided. Compare confrontational defiance with reflective longing.',
    themes: ['Cultural identity', 'Heritage', 'Self-definition'],
  },
  {
    title: 'Still I Rise',
    poet: 'Maya Angelou',
    href: '/igcse/edexcel/poetry/still-i-rise',
    reason:
      "Both poems use the body as a stage for identity. Angelou's speaker insists on her presence and rises against erasure; Alvi's speaker quietly accepts the henna inscription that connects her to her heritage. Compare loud assertion with intimate inscription.",
    themes: ['Identity', 'Body', 'Belonging'],
  },
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    href: '/igcse/edexcel/poetry/piano',
    reason:
      'Both poems show an adult overwhelmed by an experience that pulls them back through layers of memory and longing. Lawrence is dragged into childhood by music; Alvi is drawn into half-remembered heritage by henna. Compare two different kinds of irresistible nostalgia.',
    themes: ['Memory', 'Longing', 'Identity'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function AnUnknownGirlPage() {
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
            <h1 className="text-heading-lg font-heading text-foreground">An Unknown Girl</h1>
            <p className="text-body-sm text-muted-foreground">
              Moniza Alvi (b. 1954) &middot; published 1996 in <em>A Bowl of Warm Air</em> (Oxford
              University Press); reprinted by Bloodaxe Books &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
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
              Short fair-dealing reference is made below to the poem&rsquo;s widely-attested opening
              setting (&ldquo;In the evening bazaar&rdquo;, &ldquo;studded with neon&rdquo;) under
              CDPA s.30 (criticism and review).
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
            <strong className="text-foreground">Context:</strong> The poem draws on Alvi&rsquo;s
            first adult visits to South Asia. Mehndi &mdash; henna painting on the hands and feet
            &mdash; is a traditional decoration applied to brides at South Asian weddings, and is
            also offered casually to passers-by at street stalls. The poem positions the speaker
            between tourist and returnee: she is not exactly a stranger, and not exactly a daughter
            of the place.
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
          English and refer only to widely-attested opening phrases. The full text is in copyright
          and is not reproduced here.
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
        textName="An Unknown Girl"
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
          are strong pairings for An Unknown Girl.
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
        Spec aligned: Pearson Edexcel IGCSE 4ET1
      </footer>
    </div>
  )
}
