'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, Lock, ScrollText, Quote, Layers, Tag } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Out, Out-',
  alternativeHeadline: 'A Pearson Edexcel IGCSE 4ET1 set-text study guide',
  author: {
    '@type': 'Person',
    name: 'Robert Frost',
    birthDate: '1874',
    deathDate: '1963',
  },
  datePublished: '1916',
  inLanguage: 'en',
  about: ['Mortality', 'Childhood', 'Indifference', 'Labour', 'New England rural life'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel IGCSE English Literature 4ET1',
    targetName: 'Anthology Poetry - Paper 1 Section B',
  },
}

/* ── Themes ───────────────────────────────────────────────────────── */

const themes = [
  'Mortality and sudden death',
  'Childhood and lost youth',
  'Indifference of nature and of others',
  'Rural labour',
  'Allusion to Macbeth ("Out, out, brief candle!")',
]

/* ── Stanza summaries (paraphrase only) ───────────────────────────── */

const stanzaSummaries = [
  {
    n: 'Lines 1-9',
    label: 'The saw and the mountain valley',
    body: 'Frost opens with the buzz-saw at work in a Vermont yard, scattering sawdust and shavings. The setting is sharply localised: five mountain ranges visible in the late-afternoon sun, the smell of wood, the snarl of the machine. The sensory detail is vivid and pastoral - until the saw\'s sound is given an animal personality (a "snarled" rattle) and the reader is quietly warned that something living is at work in the metal.',
  },
  {
    n: 'Lines 10-14',
    label: 'The day stretches on',
    body: 'The narrator wishes someone had called the boy off work just half an hour earlier - a "boy\'s" half-hour, which would have given him "the half hour / That a boy counts so much when saved from work". The line breaks the calm: the speaker now intervenes to tell us, in retrospect, that the day went on too long. The sister is introduced calling the family to supper.',
  },
  {
    n: 'Lines 15-22',
    label: 'The accident',
    body: 'At the moment the sister calls "Supper", the saw - as if alive - leaps out and strikes the boy\'s hand. Frost personifies the saw heavily, refusing to settle the question of whether the boy slipped or whether the machine, in some sense, knew. The boy gives a "rueful laugh" - an extraordinary, painful detail - before he holds up the hand "as if to keep / The life from spilling".',
  },
  {
    n: 'Lines 23-28',
    label: 'The doctor and the dark',
    body: "The boy realises, very fast, what the loss of his hand will mean. He begs the doctor not to amputate, but the limb is already gone. The doctor administers ether and the boy slips into unconsciousness. The narrator's tone is calm and clinical - the medical procedure is described in plain, professional language.",
  },
  {
    n: 'Lines 29-34',
    label: 'The pulse fails',
    body: 'The boy\'s pulse weakens. Those watching cannot believe it: he is too young, the injury too small to kill. The line "Little - less - nothing!" condenses dying into three words. After his death, the watchers - "since they / Were not the one dead" - turn back to their daily affairs. The poem ends in cold indifference, not lament.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: "34 lines of unrhymed blank verse - loose iambic pentameter without a regular rhyme scheme. The plain, unrhymed verse fits Frost's rural-American voice: there is nothing decorative about the poem.",
  },
  {
    label: 'Title and allusion',
    body: "The title is a direct quotation from Macbeth's soliloquy in Act 5 Scene 5: \"Out, out, brief candle! / Life's but a walking shadow…\" Frost's reference is heavy - by borrowing Shakespeare's words about a brief, meaningless life, Frost casts the boy's death as another candle blown out without ceremony.",
  },
  {
    label: 'Caesura and enjambment',
    body: 'Frost uses heavy mid-line punctuation - full stops and dashes inside lines - to break the rhythm. The accident itself is split across line-breaks, as if the verse cannot stay still. Long enjambments draw the reader past horror into the next clinical phrase.',
  },
  {
    label: 'Personification of the saw',
    body: 'The buzz-saw is personified throughout. It "snarls" and "rattles", and at the moment of the accident it appears to leap "as if to prove saws knew what supper meant". Frost will not let us decide whether the machine is conscious or whether the boy slipped - the ambiguity is part of the poem\'s horror.',
  },
  {
    label: 'Pace',
    body: 'The poem moves slowly through pastoral description, then the accident is over in a few lines. The pace mirrors the way disaster ambushes ordinary days. The dying itself is compressed into a list of single words ("Little - less - nothing!") - the smallest unit of language for the largest loss.',
  },
  {
    label: 'Closing turn',
    body: 'The poem refuses to mourn. After the boy\'s death, the bystanders return to their work in a single, devastating sentence. The flat closing line "they / Were not the one dead, turned to their affairs" is the moral centre: life rebuilds around the dead immediately, and indifferently.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      "Both poems describe a young person whose life is destroyed by a single moment. Frost's farm boy loses his hand to a saw; Owen's soldier loses his legs to a shell. Both poems end in indifference - the world simply moves on. Compare how each poet uses understatement to expose this indifference.",
    themes: ['Mortality', 'Youth', 'Indifference'],
  },
  {
    title: 'Remember',
    poet: 'Christina Rossetti',
    href: '/igcse/edexcel/poetry/remember',
    reason:
      'Both poems confront sudden death from very different angles. Rossetti meditates on her own future death and asks her beloved not to be sad; Frost watches a child die and lets the bystanders move on without ceremony. Compare the gentle sonnet against the unsentimental blank verse.',
    themes: ['Death', 'Memory', 'Grief'],
  },
  {
    title: 'The Bright Lights of Sarajevo',
    poet: 'Tony Harrison',
    href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
    reason:
      'Both poems explore how life carries on around violence. Harrison shows young people defying war by walking under starlight; Frost shows neighbours moving back to work after a death. Compare resilient continuation against numb continuation.',
    themes: ['Indifference', 'Resilience', 'Continuation'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function OutOutPage() {
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
          className="mb-3 -ml-2 text-muted-foreground"
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
            <h1 className="text-heading-lg font-heading text-foreground">Out, Out&mdash;</h1>
            <p className="text-body-sm text-muted-foreground">
              Robert Frost (1874&ndash;1963) &middot; published 1916 in <em>Mountain Interval</em>{' '}
              (Henry Holt &amp; Co.) &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              {tr('igcse.page.badge_edexcel_lit')}
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
              <strong className="text-foreground">Rights notice.</strong> Robert Frost (d. 1963) is
              in the public domain in the United States but{' '}
              <strong className="text-foreground">
                remains in copyright in the United Kingdom until 2034
              </strong>{' '}
              (life + 70 years). For that reason this study guide does not reproduce the poem in
              full. Use the official Edexcel anthology (Pearson Education, ISBN 978-1-446-93108-0)
              or a licensed edition such as Henry Holt&rsquo;s <em>Mountain Interval</em> when
              reading the text.
            </p>
            <p className="text-body-xs text-muted-foreground">
              UK rights enquiries: Henry Holt / Macmillan Publishers (US); the Frost estate is
              administered by the Robert Frost Copyright Trust. UK anthology rights are licensed
              through Pearson Education.
            </p>
          </div>
        </div>
      </section>

      {/* ── Author and publication ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <ScrollText className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Robert Frost (1874&ndash;1963)
          </h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Robert Frost was an American poet of New England rural life. He was awarded the Pulitzer
            Prize for Poetry four times and is one of the most-read American poets of the twentieth
            century. Although often grouped with the pastoralists, Frost&rsquo;s work is shadowed by
            sudden violence, isolation and death.
          </p>
          <p>
            <strong className="text-foreground">Publication:</strong> &ldquo;Out, Out&mdash;&rdquo;
            was first published in 1916 in Frost&rsquo;s third collection,{' '}
            <em>Mountain Interval</em> (Henry Holt &amp; Co., New York). The poem is based on a real
            event: in March 1910 a teenage neighbour of Frost&rsquo;s,{' '}
            <strong className="text-foreground">Raymond Tracy Fitzgerald</strong>, died after a
            buzz-saw accident on a farm in Bethlehem, New Hampshire. Frost knew the family and wrote
            the poem six years later.
          </p>
          <p>
            <strong className="text-foreground">Title:</strong> The title quotes Macbeth&rsquo;s
            famous soliloquy in <em>Macbeth</em> Act 5 Scene 5 &mdash; &ldquo;Out, out, brief
            candle!&rdquo; &mdash; in which Macbeth, on hearing of his wife&rsquo;s death, calls
            life &ldquo;a tale told by an idiot, full of sound and fury, signifying nothing&rdquo;.
            Frost&rsquo;s allusion frames the boy&rsquo;s death as another candle abruptly blown
            out.
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

      {/* ── Stanza-by-stanza paraphrase ─────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            What happens (paraphrase)
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          The poem is a single 34-line block of blank verse. The summaries below describe the action
          of the poem in plain English; the original text is in copyright in the UK and is not
          reproduced here.
        </p>
        <div className="space-y-4">
          {stanzaSummaries.map((s) => (
            <div key={s.n} className="rounded-lg border border-border bg-background/40 p-4">
              <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <span className="text-xs font-medium text-rose-400 tabular-nums">{s.n}</span>
                <span className="text-sm font-semibold text-foreground">{s.label}</span>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{s.body}</p>
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
              <p className="text-body-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <StudyTools textName="Out, Out-" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {tr('anth_text.section.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another from the anthology. These
          are strong pairings for &ldquo;Out, Out&mdash;&rdquo;.
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
        {tr('igcse.page.spec_aligned_4et1')}
      </footer>
    </div>
  )
}
