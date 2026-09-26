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
    targetName: 'Anthology Poetry - Paper 1 Section B',
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

// Corrected 26 September 2026. These summaries invented details (a tray of
// chemicals in stanza 1, a working face and a kitchen in stanza 2, a dying
// man and a wife "approving" in stanza 3) and quoted words of the poem that
// the study-guide supplement mounted below this page does not. That
// supplement already uses the page's whole quotation budget (28 words of a
// 190-word poem), so keep these sections in paraphrase: adding a quotation
// here puts the URL over the share.
//
// Cut again 26 September 2026, when no-poem-quoted-beyond-fair-dealing.test.ts
// began counting the whole route. The route shares one fair-dealing budget
// with the guide layout.tsx mounts, so this page quotes only what the guide
// already quotes, which costs nothing, plus at most a few words; with the
// guide at 28 of 28 that means none. The measure had found five more: two
// pronouns quoted in the form section, and a quotation from If- in a
// comparison card, which counts against this poem because it sits on this
// page. Wording these summaries reproduced without quotation marks (the
// church simile, the steady hands, the wife's cries, the editor's pick, the
// pain the weather eases, the hands that only appear to shake) is paraphrased
// too, since leaving the marks off does not make it a paraphrase.
const stanzaSummaries = [
  {
    n: 'Stanza 1',
    label: 'In the darkroom',
    body: 'Duffy opens with the photographer at work in the darkroom, where the spools of film he has brought back from the wars are lined up in neat rows. The opening line finds him alone there at last, which suggests he has been waiting for that solitude. The room is given religious overtones: its red light makes it seem a church, with the photographer as a priest about to say Mass. A short list of three conflict cities - Belfast, Beirut and Phnom Penh - establishes the geographic range of his recent work and roots the poem in the wars of the late 1970s and early 1980s.',
  },
  {
    n: 'Stanza 2',
    label: 'Hands and trembling',
    body: 'The photographer\'s hands were steady in the war zones, but now, at home, they appear to shake as he works over the trays of developing solution. The poem is careful to say only that they appear to: the calm he kept abroad is slipping in the safety of England. He is back in "rural England", where the only suffering is the everyday kind that a change of weather is enough to lift. The stanza ends by setting its safe fields against the war zones, where the ground could blow up under children as they ran through a "nightmare heat".',
  },
  {
    n: 'Stanza 3',
    label: 'A face emerging',
    body: 'After a short, uneasy opening sentence, an image surfaces in the developing tray: the face of a man the photographer did not know takes shape, blurred and distorted, a "half-formed ghost". Then he recalls the man\'s wife crying out, and how he silently "sought approval", most naturally from her, for a duty that somebody had to carry out. The poem never says the approval was given. The stanza ends on blood soaking into the dust of a faraway country: as the image develops, the violence comes back to him.',
  },
  {
    n: 'Stanza 4',
    label: 'Sunday-supplement readers',
    body: 'The closing stanza moves from the darkroom to the newspaper. Of a hundred pictures of suffering, only a handful will make it into the Sunday supplement, chosen by his editor. The reader, singular, is moved for a moment - the "eyeballs prick" - but the tears are squeezed in after a bath and before the "pre-lunch beers": a brutal image of comfortable England passing quickly over suffering. The poem ends in the air, as the photographer "stares impassively" from an aeroplane at the place his income comes from. Duffy does not say whether he is flying out again, or whether that place is the England below or the wars his work depends on. The last words, "they do not care", switch to the plural and widen the charge to everyone at home.',
  },
]

/* ── Form & structure (paraphrase only) ───────────────────────────── */

const formAndStructure = [
  {
    label: 'Form',
    body: 'Four regular stanzas of six lines each (sextets), totalling 24 lines. The strict, repeating shape mirrors the orderly, methodical work of developing photographs in a darkroom - and contrasts with the chaos of the scenes the photographer has just left.',
  },
  {
    label: 'Rhyme',
    body: 'The poem uses an ABBCDD pattern of rhyme (with frequent half-rhymes). The rhymed couplets at the end of each stanza give a sense of finality and closure that ironises against the unresolved horror of the photographs themselves.',
  },
  {
    label: 'Religious imagery',
    body: "Duffy turns the darkroom into a religious space. Its red light makes the room seem like a church; the spools of film are lined up in neat rows, as if for a ritual; the photographer is likened to a priest about to say Mass. By framing the journalism as a sacrament, Duffy elevates the photographer's work - and indicts the readers who consume the images casually.",
  },
  {
    label: 'Contrast and juxtaposition',
    body: "The poem is built on contrasts: war zones against rural England, suffering against suburban comfort, the photographer's solitude against the reader's indifference, professional calm abroad against private trembling at home. Each contrast indicts the safety in which most British readers receive war.",
  },
  {
    label: 'Pace and detachment',
    body: 'Duffy uses an impersonal third-person voice throughout: the photographer never speaks for himself, and even his memories are reported by the narrator rather than voiced. The tone is restrained, almost clinical. This detachment lets the brutality of the images do the work; the speaker refuses to dramatise. The third-person voice also keeps the photographer at a distance, as if he is being observed working alone.',
  },
  {
    label: 'Closing volta',
    body: 'The poem turns at the last stanza when it widens out from the photographer to the editor and the reader. The volta makes the moral point explicit: the photographer is no longer the sole subject - the indifferent public is. In the final image he looks out from an aeroplane, showing nothing, at the place his income comes from. Duffy leaves open whether that is the England below or the wars his work depends on.',
  },
]

/* ── Comparison poems ─────────────────────────────────────────────── */

// Corrected 26 September 2026: this list paired the poem with Disabled and
// The Bright Lights of Sarajevo, which are in Part 2 of the anthology
// (Language A). 4ET1 Paper 1 compares two Part 3 poems, so every pairing
// here must come from Part 3.
const comparisons = [
  {
    title: 'Blessing',
    poet: 'Imtiaz Dharker',
    href: '/revision/texts/blessing',
    reason:
      "Both poems are built on powerful images of people living through hardship far from the reader's own comfort. Dharker shows a whole community rushing with pots to catch the water from a burst pipe; Duffy's photographer brings home pictures of suffering that readers at home barely pause over. Compare how each poet makes the reader look, and what each image asks of us.",
    themes: ['Suffering', 'Imagery', 'Witness'],
  },
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    href: '/igcse/edexcel/poetry/piano',
    reason:
      "Both poems show a man's composure under pressure. Lawrence's speaker is overwhelmed by memory until he weeps like a child; Duffy's photographer, steady in the war zones, appears to lose that steadiness at home, yet ends the poem showing nothing. Compare how each poem presents emotion and self-control.",
    themes: ['Emotion', 'Self-control', 'Memory'],
  },
  {
    title: 'If-',
    poet: 'Rudyard Kipling',
    href: '/igcse/edexcel/poetry/if',
    reason:
      "Both poems are about moral codes under pressure. Kipling argues for stoic self-control, meeting success and failure with the same calm; Duffy's photographer keeps his composure in the war zones but seems to lose it once he gets home. Compare the Edwardian ideal with the late-twentieth-century reality.",
    themes: ['Moral codes', 'Stoicism', 'Conscience'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function WarPhotographerPage() {
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
            <h1 className="text-heading-lg font-heading text-foreground">War Photographer</h1>
            <p className="text-body-sm text-muted-foreground">
              Carol Ann Duffy (b. 1955) &middot; published 1985 in <em>Standing Female Nude</em>{' '}
              (Anvil Press; later Picador / Pan Macmillan) &middot; Edexcel IGCSE Anthology
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
              Short phrases of the poem are quoted below, on this page and in the study guide
              beneath it, for criticism and review under CDPA s.30. The poem itself is not
              reproduced.
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
            <strong className="text-foreground">UK Poet Laureate from 2009 to 2019</strong>, the
            first woman, the first Scot, and the first openly LGBT poet to hold the post. Her work
            is known for its accessible voice, dramatic monologues, and political engagement.
          </p>
          {/* Not "her second collection" (corrected 26 September 2026): the Scottish
              Poetry Library lists three earlier publications, from 1974 to 1982. */}
          <p>
            <strong className="text-foreground">Publication:</strong> &ldquo;War Photographer&rdquo;
            first appeared in Duffy&rsquo;s collection <em>Standing Female Nude</em> (Anvil Press,
            1985). It has since been reprinted in her <em>Selected Poems</em> (Penguin, 1994) and
            <em> New Selected Poems</em> (Picador). UK book rights are currently held by Picador /
            Pan Macmillan; permissions enquiries go through the author&rsquo;s agent, Rogers,
            Coleridge &amp; White.
          </p>
          {/* Corrected 26 September 2026: this gave the inspiration as Duffy's own
              statement about McCullin alone. The WJEC Eduqas teaching notes, the source
              the study guide below cites, name two photographers. */}
          <p>
            <strong className="text-foreground">Inspiration:</strong> Teaching notes from the exam
            board WJEC Eduqas say the poem was inspired by Duffy&rsquo;s friendships with two
            British war photographers, <strong className="text-foreground">Don McCullin</strong> and{' '}
            <strong className="text-foreground">Philip Jones Griffiths</strong>, and that she was
            interested in how war photographers had to record horrifying events without being able
            to help the people in them. McCullin&rsquo;s images of the Vietnam War, the Troubles in
            Northern Ireland and the Lebanese Civil War made him one of the most important war
            photographers of the twentieth century.
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
          English and quote only a few short phrases. The full text is in copyright and is not
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

      <StudyTools
        textName="War Photographer"
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
        {tr('igcse.page.spec_aligned_4et1')}
      </footer>
    </div>
  )
}
