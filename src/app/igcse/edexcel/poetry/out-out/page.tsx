'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, Lock, ScrollText, Quote, Layers, Tag } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

// WHICH QUALIFICATION. Until 26 September 2026 this page called "Out, Out-" a
// 4ET1 Literature poem, examined in Paper 1 Section B, and told students to
// compare it with another anthology poem. It is not: the poem is in Part 2 of
// the anthology, which only English Language A (4EA1) sets. The 4EA1
// specification (Issue 7, August 2025, pp. 6 and 12 to 15) examines Part 2 in
// Component 2 (Paper 2) Section A, one 30-mark essay on a single poem or prose
// text printed in the paper, or in Component 3, the coursework alternative,
// whose Assignment A is one 30-mark essay on three Part 2 texts, at least one
// of them prose. The June 2023 Paper 2 set this poem, on its own, with no
// comparison. See src/lib/board/edexcel-igcse-anthology.ts.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Out, Out-',
  alternativeHeadline: 'A Pearson Edexcel International GCSE English Language A (4EA1) study guide',
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
    educationalFramework: 'Pearson Edexcel International GCSE English Language A 4EA1',
    targetName: 'Anthology Part 2 - Paper 2 Section A, or Component 3 Assignment A',
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

// CHECKED AGAINST THE TEXT, 26 September 2026. These summaries used to put
// the yard in Vermont (the poem only looks towards Vermont; the real accident
// was in New Hampshire), have the boy beg the doctor (he begs his sister),
// give reasons nobody believed he was dying (the poem gives none) and ask
// whether he "slipped" (the speaker concludes the boy offered the hand
// himself). Each claim below was checked against the Issue 8 anthology text,
// page 26.
//
// ONE BUDGET FOR THE ROUTE, 26 September 2026. The layout mounts the study
// guide (src/data/study-guides/out-out.ts) on this same URL through
// <GuideSupplement />, so the page and the guide share one fair-dealing
// budget: 45 distinct words of the poem's 301, counted once across the route
// by no-poem-quoted-beyond-fair-dealing.test.ts. A phrase the guide already
// quotes costs nothing here, so this page quotes only phrases the guide
// quotes and adds nothing to the count. Until today it also quoted line 15
// whole, four words more than the guide's version, and several passages on
// the page repeated the poem almost word for word without quotation marks
// (the mountain view, the wish for an early finish, the given hand, the
// raised hand, the survivors' reason). A second pass the same day found
// closer echoes still (the sister's errand, the saw's leap across the line
// break, the given hand with one word swapped, what time off means to a boy)
// and a saw said to be personified throughout, though it drops out of the
// poem after the accident. Those are now in the site's own words and were
// checked again against the anthology, which also retired a comparison
// card's "neighbours": the poem never says who the onlookers are. The Macbeth
// lines are Shakespeare's, excused by name in the test's OTHER_WORKS, and do
// not count.
const stanzaSummaries = [
  {
    n: 'Lines 1-9',
    label: 'The saw and the mountain valley',
    body: 'Frost opens with the buzz-saw at work in a yard, throwing up dust and cutting logs small enough for the stove. The setting is sharply placed: a view across range after range of mountains towards Vermont as the sun goes down, the smell of the cut wood carried on the wind, the noise of the machine. The sensory detail is vivid and pastoral, yet the saw has "snarled" from the very first line, an animal\'s sound that comes back once the view has been described, and the reader is quietly warned that something living is at work in the metal.',
  },
  {
    n: 'Lines 10-14',
    label: 'The day stretches on',
    body: "The narrator wishes someone had ended the working day half an hour early, as a treat, because time let off work means a great deal to a boy. The wish breaks the calm: the speaker steps in, looking back, to suggest that the day went on too long. Then the boy's sister appears beside the workers to call them in for supper.",
  },
  {
    n: 'Lines 15-22',
    label: 'The accident',
    body: 'At the moment the sister calls "Supper", the saw seems to come alive and spring at the boy, catching his hand. Frost personifies the saw heavily and will not settle whether it really leapt or only seemed to, though the speaker then concludes that the boy himself, in some way, held his hand out to it. What he utters first is a "rueful laugh" - an extraordinary, painful detail - before he turns to the others with the injured hand raised, partly asking them for help and partly as though raising it could hold his life in.',
  },
  {
    n: 'Lines 23-28',
    label: 'The doctor and the dark',
    body: "Now he grasps what the injury will cost him: he is doing an adult's job, so he can see it, though inside he is still a child. He pleads with his sister not to let the doctor take his hand when he arrives, but it is already past saving. The doctor gives him ether and he goes under. The narration stays level and unemotional: the anaesthetic takes a single line, and the poem does not linger on the medical detail.",
  },
  {
    n: 'Lines 29-34',
    label: 'The pulse fails',
    body: 'The person keeping watch on the boy\'s pulse is suddenly afraid. Nobody believes it. They listen for his heartbeat, and the words "Little—less—nothing!" condense his dying into three steps. Once he is dead, the others, who are still living, go back to their own concerns. The poem ends in cold indifference, not lament.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: "34 lines of blank verse: unrhymed, loosely iambic pentameter. The plain verse fits Frost's rural New England voice, which stays close to ordinary speech even when it describes the view.",
  },
  {
    label: 'Title and allusion',
    body: "The title is a direct quotation from Macbeth's soliloquy in Act 5 Scene 5: \"Out, out, brief candle! / Life's but a walking shadow…\" Frost's reference is pointed - by borrowing Shakespeare's words about a brief, meaningless life, Frost casts the boy's death as another candle blown out without ceremony.",
  },
  {
    label: 'Caesura and enjambment',
    body: 'Frost uses heavy mid-line punctuation - full stops and dashes inside lines - to break the rhythm. The accident itself is split across line-breaks, as if the verse cannot stay still. Long enjambments draw the reader past horror into the next flat, matter-of-fact phrase.',
  },
  {
    label: 'Personification of the saw',
    body: 'From the first line to the accident, the buzz-saw is personified. It "snarled and rattled", and at the moment of the accident it seems to spring at the boy, as though it wanted to show that "saws knew what supper meant". Frost will not let us decide whether the machine leapt or only seemed to, and the speaker\'s verdict, that the boy himself somehow held his hand out to it, only deepens the question - the ambiguity is part of the poem\'s horror. After the accident the saw is never mentioned again.',
  },
  {
    label: 'Pace',
    body: 'The poem moves slowly through pastoral description, then the accident is over in a few lines. The pace mirrors the way disaster ambushes ordinary days. The dying itself is compressed into a list of single words ("Little—less—nothing!") - the smallest unit of language for the largest loss.',
  },
  {
    label: 'Closing turn',
    body: 'The poem refuses to mourn. After the boy\'s death, a single, devastating sentence sends the others back to their own lives. That flat close, in which the living "turned to their affairs", is the moral centre: life moves on from the dead immediately, and indifferently.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

// PART 2 TEXTS ONLY. Until 26 September 2026 this list included Remember, a
// Part 3 poem that only 4ET1 Literature students study. A 4EA1 student can
// pair "Out, Out-" only with other Part 2 texts, and only in the coursework
// option, which needs at least one prose text among its three.
const comparisons = [
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      "Both poems describe a young person whose life is destroyed by a single moment. Frost's country boy loses his hand to a saw; Owen's soldier loses his legs in the war. Both poems end in indifference - the world simply moves on. Compare how each poet uses understatement to expose this indifference.",
    themes: ['Mortality', 'Youth', 'Indifference'],
  },
  {
    title: 'The Story of an Hour',
    poet: 'Kate Chopin',
    href: '/revision/texts/the-story-of-an-hour',
    reason:
      "A prose pairing. Both texts end in a sudden death and in what the people left behind make of it. Frost's bystanders go back to their own lives; Chopin's doctors decide that Louise Mallard died of joy, when the reader knows better. Compare how each writer uses a flat, brief ending to expose the living.",
    themes: ['Sudden death', 'Onlookers', 'Irony'],
  },
  {
    title: 'The Bright Lights of Sarajevo',
    poet: 'Tony Harrison',
    href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
    reason:
      'Both poems explore how life carries on around violence. Harrison shows young people defying war by walking out in the dark; Frost shows the people around a dead boy turning back to their own concerns. Compare resilient continuation against numb continuation.',
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
            <h1 className="text-heading-lg font-heading text-foreground">Out, Out&mdash;</h1>
            <p className="text-body-sm text-muted-foreground">
              Robert Frost (1874&ndash;1963) &middot; published 1916 in <em>Mountain Interval</em>{' '}
              (Henry Holt &amp; Co.) &middot; Edexcel IGCSE Anthology
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
              <strong className="text-foreground">Rights notice.</strong> Published in 1916, this
              poem is in the public domain in the United States but{' '}
              <strong className="text-foreground">
                remains in copyright in the United Kingdom until the end of 2033
              </strong>{' '}
              (Frost died in 1963; life + 70 years). For that reason this study guide does not
              reproduce the poem in full. Use the official Edexcel anthology (Pearson Education,
              ISBN 978-1-446-93108-0) or a licensed edition such as{' '}
              <em>The Poetry of Robert Frost</em>, edited by Edward Connery Lathem (Henry Holt),
              when reading the text.
            </p>
            {/* Until 26 September 2026 this said the Frost estate was run by a
                Robert Frost Copyright Trust and that Pearson licenses UK
                anthology rights, neither of which the anthology says. What it
                does say, in its acknowledgements, is below. */}
            <p className="text-body-xs text-muted-foreground">
              Copyright Henry Holt and Company (1916, 1969) and Robert Frost (1944). The anthology
              prints the poem by arrangement with Henry Holt and Company, LLC.
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
            first appeared in <em>McClure&rsquo;s</em> magazine in July 1916 and was collected later
            that year in Frost&rsquo;s third collection, <em>Mountain Interval</em> (Henry Holt
            &amp; Co., New York). The poem is based on a real event: in March 1910{' '}
            <strong className="text-foreground">Raymond Tracy Fitzgerald</strong>, a teenager from
            Bethlehem, New Hampshire, whose family Frost knew, died after his hand was badly hurt in
            a sawing machine. The poem was published six years later.
          </p>
          <p>
            <strong className="text-foreground">Title:</strong> The title quotes Macbeth&rsquo;s
            famous soliloquy in <em>Macbeth</em> Act 5 Scene 5, &ldquo;Out, out, brief
            candle!&rdquo;, in which Macbeth, on hearing of his wife&rsquo;s death, calls life
            &ldquo;a tale told by an idiot, full of sound and fury, signifying nothing&rdquo;.
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
          In the exam (Paper 2, Section A) you answer one 30-mark essay question on a single Part 2
          text, printed in the paper, so there is no comparison. If your school takes the coursework
          route instead (Component 3, Assignment A), you write one essay on three Part 2 texts, at
          least one a poem and one prose. These Part 2 texts pair well with &ldquo;Out,
          Out&mdash;&rdquo; for that.
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
