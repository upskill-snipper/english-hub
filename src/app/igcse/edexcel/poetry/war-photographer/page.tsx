'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare, Lock, ScrollText, Quote, Layers, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── JSON-LD ──────────────────────────────────────────────────────── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'War Photographer',
  alternativeHeadline: 'A Pearson Edexcel IGCSE 4ET1 set-text study guide',
  author: {
    '@type': 'Person',
    name: 'Carol Ann Duffy',
    birthDate: '1955',
  },
  datePublished: '1985',
  inLanguage: 'en',
  about: ['War', 'Witness', 'Moral responsibility', 'Photography', 'Indifference of readers'],
  educationalAlignment: {
    '@type': 'AlignmentObject',
    alignmentType: 'educationalSubject',
    educationalFramework: 'Pearson Edexcel IGCSE English Literature 4ET1',
    targetName: 'Anthology Poetry — Paper 1 Section B',
  },
}

/* ── Themes ───────────────────────────────────────────────────────── */

const themes = [
  'War and the cost of bearing witness',
  'Moral responsibility of the journalist',
  'Religious imagery (the darkroom as a kind of chapel)',
  'Contrast between &ldquo;rural England&rdquo; and conflict zones',
  'Indifference of newspaper readers',
]

/* ── Stanza summaries (paraphrase only) ───────────────────────────── */

const stanzaSummaries = [
  {
    n: 'Stanza 1',
    label: 'In the darkroom',
    body: 'Duffy opens with the photographer alone in his darkroom developing the day\'s film. The image of the lit-up tray of chemicals is described in religious terms — the room becomes a kind of chapel, and the photographer a priest performing a careful ritual. The opening line is widely quoted: "In his darkroom he is finally alone." A short list of conflict cities — including "Belfast. Beirut. Phnom Penh." — establishes the geographic range of his recent work and roots the poem in the wars of the late 1970s and early 1980s.',
  },
  {
    n: 'Stanza 2',
    label: 'Hands and trembling',
    body: "The photographer's hands, which did not tremble in the war zone, now shake at home. The professional calm of the journalist breaks down in the safety of England. Duffy contrasts the phlegmatic working face he wore abroad with the private grief he allows himself in his own kitchen. Rural England is described as ordered, peaceful — a place where suffering only arrives as a photograph.",
  },
  {
    n: 'Stanza 3',
    label: 'A face emerging',
    body: 'A specific image surfaces in the chemicals: the face of a dying or grieving man. Duffy paraphrases the moment when the photographer remembers the man\'s wife "approving" his decision to take the picture. The memory of the photograph\'s subject becoming visible in the developing tray is rendered with painful slowness — the violence is replayed, frame by frame.',
  },
  {
    n: 'Stanza 4',
    label: 'Sunday-supplement readers',
    body: 'The closing stanza pulls back to the editor\'s desk and to the readers of the Sunday paper. Out of "a hundred agonies" the editor will choose just five or six. Readers will glance at the images "between the bath and pre-lunch beers" — a brutal image of comfortable England flicking past suffering. The poem ends with the photographer flying out again, looking down impassively at the country that does not really see what he brings home.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: 'Four regular stanzas of six lines each (sextets), totalling 24 lines. The strict, repeating shape mirrors the orderly, methodical work of developing photographs in a darkroom — and contrasts with the chaos of the scenes the photographer has just left.',
  },
  {
    label: 'Rhyme',
    body: 'The poem uses an ABBCDD pattern of rhyme (with frequent half-rhymes). The rhymed couplets at the end of each stanza give a sense of finality and closure that ironises against the unresolved horror of the photographs themselves.',
  },
  {
    label: 'Religious imagery',
    body: 'Duffy turns the darkroom into a religious space. The red light glows like a sanctuary lamp; the chemicals are arranged in "ordered rows" like communion vessels; the photographer works in a hush, like a priest. By framing the journalism as a sacrament, Duffy elevates the photographer\'s work — and indicts the readers who consume the images casually.',
  },
  {
    label: 'Contrast and juxtaposition',
    body: "The poem is built on contrasts: war zones against rural England, suffering against suburban comfort, the photographer's solitude against the reader's indifference, professional calm abroad against private trembling at home. Each contrast indicts the safety in which most British readers receive war.",
  },
  {
    label: 'Pace and detachment',
    body: 'Duffy mostly uses an impersonal third-person voice — "he", not "I". The tone is restrained, almost clinical. This detachment lets the brutality of the images do the work; the speaker refuses to dramatise. The third-person voice also keeps the photographer at a distance, as if he is being observed working alone.',
  },
  {
    label: 'Closing volta',
    body: 'The poem turns at the last stanza when it widens out from the photographer to the editor and the reader. The volta makes the moral point explicit: the photographer is no longer the sole subject — the indifferent public is. The final image of him in the aeroplane "stares impassively" at the England below, a country he can no longer fully belong to.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    href: '/igcse/edexcel/poetry/disabled',
    reason:
      "Both poems sit on the home front and look at the human cost of war. Owen forces us to look at one wounded soldier on English soil; Duffy's photographer mediates suffering through images that the public will quickly forget. Compare how each poem indicts the indifference of those at home.",
    themes: ['War', 'Witness', 'Indifference'],
  },
  {
    title: 'The Bright Lights of Sarajevo',
    poet: 'Tony Harrison',
    href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
    reason:
      'Both poems are by major English poets writing about specific late-20th-century wars. Duffy reports war from the safety of England; Harrison stays in the besieged city. Compare two journalistic-poetic registers and the question of where the witness should stand.',
    themes: ['War', 'Witness', 'Reportage'],
  },
  {
    title: 'If—',
    poet: 'Rudyard Kipling',
    href: '/igcse/edexcel/poetry/if',
    reason:
      'Both poems are about moral codes under pressure. Kipling argues for stoic self-control in the face of "Triumph and Disaster"; Duffy shows that her photographer\'s professional self-control collapses once he gets home. Compare the Edwardian ideal with the late-twentieth-century reality.',
    themes: ['Moral codes', 'Stoicism', 'Conscience'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function WarPhotographerPage() {
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
            <h1 className="text-heading-lg font-heading text-foreground">War Photographer</h1>
            <p className="text-body-sm text-muted-foreground">
              Carol Ann Duffy (b. 1955) &middot; published 1985 in <em>Standing Female Nude</em>{' '}
              (Anvil Press; later Picador / Pan Macmillan) &middot; Edexcel IGCSE Anthology
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
              <strong className="text-foreground">Rights notice.</strong> &ldquo;War
              Photographer&rdquo; is in copyright. UK book rights are held by{' '}
              <strong className="text-foreground">Picador / Pan Macmillan</strong> (rights
              enquiries: panmacmillan.com/permissions); the author is represented by{' '}
              <strong className="text-foreground">Rogers, Coleridge &amp; White</strong>{' '}
              (rcwlitagency.com). For that reason this study guide does not reproduce the poem in
              full. Use the official Edexcel anthology (Pearson Education, ISBN 978-1-446-93108-0)
              or a licensed edition such as the Picador <em>Selected Poems</em> when reading the
              text.
            </p>
            <p className="text-body-xs text-muted-foreground">
              Short fair-dealing reference is made below to the poem&rsquo;s widely-attested opening
              (&ldquo;In his darkroom he is finally alone&rdquo;) and its list of war zones
              (&ldquo;Belfast. Beirut. Phnom Penh.&rdquo;) under CDPA s.30 (criticism and review).
            </p>
          </div>
        </div>
      </section>

      {/* ── Author and publication ──────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <ScrollText className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Carol Ann Duffy (born 1955)
          </h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Carol Ann Duffy is a Scottish-born British poet who served as the{' '}
            <strong className="text-foreground">UK Poet Laureate from 2009 to 2019</strong> &mdash;
            the first woman, the first Scot, and the first openly LGBT poet to hold the post. Her
            work is known for its accessible voice, dramatic monologues, and political engagement.
          </p>
          <p>
            <strong className="text-foreground">Publication:</strong> &ldquo;War Photographer&rdquo;
            first appeared in Duffy&rsquo;s second collection, <em>Standing Female Nude</em> (Anvil
            Press, 1985). It has since been reprinted in her <em>Selected Poems</em> (Penguin, 1994)
            and
            <em> New Selected Poems</em> (Picador). UK book rights are currently held by Picador /
            Pan Macmillan; permissions enquiries go through the author&rsquo;s agent, Rogers,
            Coleridge &amp; White.
          </p>
          <p>
            <strong className="text-foreground">Inspiration:</strong> Duffy has said that the poem
            was inspired by her friendship with the photojournalist{' '}
            <strong className="text-foreground">Don McCullin</strong>, whose images of the Vietnam
            War, the Troubles in Northern Ireland and the Lebanese Civil War made him one of the
            most important war photographers of the twentieth century. McCullin&rsquo;s ethical
            struggles &mdash; about the morality of photographing dying people &mdash; lie behind
            the poem.
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
              <span dangerouslySetInnerHTML={{ __html: t }} />
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
          The poem is four six-line stanzas. The summaries below describe the action in plain
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

      <StudyTools
        textName="War Photographer"
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
          are strong pairings for War Photographer.
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
