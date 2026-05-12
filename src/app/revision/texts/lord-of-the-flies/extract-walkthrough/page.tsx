'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Eye,
  MessageSquare,
  ZoomOut,
  ScrollText,
  AlertTriangle,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ─── Page metadata (client component, so no Metadata export) ─────── */

const PAGE_URL = 'https://theenglishhub.app/revision/texts/lord-of-the-flies/extract-walkthrough'

/* ─── Walkthrough card type ───────────────────────────────────────── */

type WalkCard = {
  kind: 'notice' | 'say' | 'zoom-out'
  fragment?: string // ≤15-word verbatim fragment from the chapter
  paraphrase?: string // paraphrase of the surrounding action
  body: string // the analytical commentary
}

const NOTICE = {
  label: 'Notice',
  icon: Eye,
  tone: 'border-amber-200 bg-amber-50',
  pill: 'bg-amber-100 text-amber-900',
}
const SAY = {
  label: 'Say',
  icon: MessageSquare,
  tone: 'border-sky-200 bg-sky-50',
  pill: 'bg-sky-100 text-sky-900',
}
const ZOOM = {
  label: 'Zoom out',
  icon: ZoomOut,
  tone: 'border-violet-200 bg-violet-50',
  pill: 'bg-violet-100 text-violet-900',
}

const META = { notice: NOTICE, say: SAY, 'zoom-out': ZOOM } as const

/* ─── The walkthrough ─────────────────────────────────────────────── */
/* All quoted fragments are <=15 words and used for criticism / review.
   Source: Golding, Lord of the Flies, Chapter 9 ('A View to a Death'). */

const cards: WalkCard[] = [
  // ── Storm gathers ──────────────────────────────────────────────
  {
    kind: 'notice',
    fragment: 'over the island the build-up of clouds continued',
    body: 'Chapter 9 opens with weather pressing down on the island. Golding stacks atmospheric pressure for several pages before any boy speaks, so by the time the chant begins the reader already feels something has to break.',
  },
  {
    kind: 'say',
    paraphrase:
      'The narrator describes thunder gathering over the mountain while Simon, fevered, climbs alone toward the parachutist.',
    body: 'This is classic pathetic fallacy: the storm is the moral weather of the boys made visible. Golding does not separate the natural and the human worlds — the island broods because the children are about to.',
  },
  {
    kind: 'zoom-out',
    body: "Pathetic fallacy is one of Golding's inheritances from the Romantics, but he weaponises it. Where Wordsworth's storms reveal a benign sublime, Golding's reveals what the boys carry inside them. Nature does not punish; it mirrors.",
  },

  // ── Simon discovers the truth ──────────────────────────────────
  {
    kind: 'notice',
    fragment: 'the beast was harmless and horrible',
    body: 'Simon, alone on the mountain, untangles the dead parachutist and grasps the central truth of the novel. Golding gives the revelation in plain monosyllables — no fanfare, no lyricism. The horror is that there is nothing supernatural here.',
  },
  {
    kind: 'zoom-out',
    body: "Simon is the novel's prophet-figure, and Golding stages this scene with deliberate religious resonance: a solitary climb up a mountain, a vision, a descent to bring word to the people. He is the only character granted moral sight, and the only one the others will not let speak.",
  },

  // ── The chant ──────────────────────────────────────────────────
  {
    kind: 'notice',
    fragment: 'kill the beast! cut his throat! spill his blood!',
    body: 'The chant is short, percussive, end-stopped. Each clause is an imperative; each verb is an act of violence. Read aloud, the rhythm is almost iambic — Golding gives the mob a metre.',
  },
  {
    kind: 'say',
    paraphrase:
      'The boys form a circle on the beach in firelight and rain, dancing and chanting as the storm breaks above them.',
    body: "The hypnotic rhythm matters more than the words. Golding shows how a chant dissolves the individual: once the boys are inside the beat, none of them is choosing. The grammar of the chant has no 'I' in it.",
  },
  {
    kind: 'zoom-out',
    body: 'Golding had stood in front of the photographs from Belsen and Buchenwald. He had also taught schoolboys. Chapter 9 is his answer to the question those two experiences forced on him: how does an ordinary group become a mob? His answer is rhythm, fear and the dark.',
  },

  // ── The misrecognition ─────────────────────────────────────────
  {
    kind: 'notice',
    fragment: 'the beast struggled forward, broke the ring',
    body: "Simon crawls out of the forest to tell them the truth and is read, instantly, as the thing he came to disprove. Golding's free indirect style lets the boys' misperception colour the prose: the narrator briefly calls Simon 'the beast' too.",
  },
  {
    kind: 'say',
    paraphrase:
      'Simon is set upon by the circle of boys, beaten and torn apart at the edge of the surf.',
    body: "The collapse here is not just moral but linguistic: 'littluns and biguns', the careful taxonomy of the early chapters, gives way to a single anonymous mass. Ralph and Piggy are inside the circle. There are no innocents on the beach.",
  },
  {
    kind: 'zoom-out',
    body: 'Notice what Golding has done with the parliamentary order of the early chapters. The conch is not present. There is no chair, no speaker, no rule about who may talk. The institutions of civilisation are not destroyed in Chapter 9 — they are simply absent, and absence is enough.',
  },

  // ── Simon as Christ-figure ─────────────────────────────────────
  {
    kind: 'notice',
    fragment: 'the line of his cheek silvered',
    body: "After the killing, Golding's prose changes register completely. The rain stops, the tide rises, and Simon's body is described with the slow, lit-up reverence of a Renaissance pietà. Phosphorescent creatures gather around him; the moon comes out.",
  },
  {
    kind: 'say',
    paraphrase:
      'The tide carries the body, lit by moonlight and surrounded by bioluminescent sea creatures, gently out toward the open ocean.',
    body: "The Christ-figure reading is unmistakable. Simon dies bringing a truth no one wants to hear; his body is anointed (by sea-water, by phosphorescence) and borne away in something like a sea-burial. Golding withholds the word 'Christ' but provides every other sign.",
  },
  {
    kind: 'zoom-out',
    body: "Critics sometimes find this passage sentimental. It is — deliberately. Golding is offering the only consolation his thesis will allow: nature can dignify Simon's body, but it cannot save him, and it cannot teach the boys what he died to say. The ocean takes the messenger; the message stays unread.",
  },
]

/* ─── Model paragraph (~250 words) ────────────────────────────────── */

const modelParagraph = `Simon's death in Chapter 9 is the moment Golding's thesis stops being implicit and becomes the structural truth of the novel. Throughout the early chapters, the conch, the meetings and the painstaking taxonomy of "littluns and biguns" sustain a recognisably English, parliamentary order: civilisation is the children's default, savagery a deviation from it. The killing inverts this. Once the chant begins — its imperatives short, end-stopped, almost metrical — the named boys dissolve into an anonymous "ring", and the narrator's free indirect style lets the boys' misrecognition colour the prose so that Simon, the only character granted moral sight, is briefly called "the beast" by the narrator himself. Golding is making a precise post-war argument. Writing in 1954, with Belsen and Buchenwald in living memory, he refuses the comfortable mid-century idea that fascism was a German aberration; his English schoolboys, cathedral choir and all, descend in days. The pathetic fallacy of the gathering storm reframes nature not as moral teacher but as mirror: the weather breaks because the children are about to. And the elegy that follows — Simon's body silvered by phosphorescence, borne out on the tide — denies us even the consolation of a usable martyrdom: nature can dignify the messenger but cannot deliver the message. Civilisation, the chapter insists, is not a possession but a thin veneer of habit, language and institution; remove the conch, the rules and the adults, and what is underneath is not innocence but the chant. That is Golding's whole novel, in one scene.`

/* ─── Page ────────────────────────────────────────────────────────── */

export default function LordOfTheFliesExtractWalkthroughPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Lord of the Flies',
            url: 'https://theenglishhub.app/revision/texts/lord-of-the-flies',
          },
          { name: 'Extract walkthrough', url: PAGE_URL },
        ]}
      />

      <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: 'Revision', href: '/revision' },
            { label: 'Texts', href: '/revision/texts' },
            { label: 'Lord of the Flies', href: '/revision/texts/lord-of-the-flies' },
            { label: 'Extract walkthrough' },
          ]}
        />

        {/* ── Header ──────────────────────────────────────────── */}
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Lord of the Flies</Badge>
            <Badge>Chapter 9 — A View to a Death</Badge>
            <Badge variant="outline">Extract walkthrough</Badge>
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Simon&apos;s death — extract walkthrough
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            How Golding stages the storm, the chant and the misrecognition that kills Simon — and
            how the scene carries the central thesis of the whole novel. Read the cards in order;
            each <em>Notice</em> points at something concrete, each <em>Say</em> tells you what to
            write about it, and each <em>Zoom out</em> places it in the bigger argument.
          </p>
          <div className="mt-5">
            <Link href="/revision/texts/lord-of-the-flies">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 size-4" />
                Back to Lord of the Flies guide
              </Button>
            </Link>
          </div>
        </header>

        {/* ── Walkthrough cards ───────────────────────────────── */}
        <section className="mb-12 space-y-4" aria-label="Annotated walkthrough">
          {cards.map((card, i) => {
            const meta = META[card.kind]
            const Icon = meta.icon
            return (
              <article key={i} className={`rounded-xl border p-5 shadow-sm ${meta.tone}`}>
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${meta.pill}`}
                  >
                    <Icon className="size-3.5" />
                    {meta.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Card {i + 1} of {cards.length}
                  </span>
                </div>

                {card.fragment && (
                  <blockquote className="mb-3 border-l-2 border-foreground/30 pl-3 text-sm italic text-foreground">
                    &ldquo;{card.fragment}&rdquo;
                    <span className="ml-2 not-italic text-xs text-muted-foreground">
                      — Golding, Ch. 9
                    </span>
                  </blockquote>
                )}

                {card.paraphrase && !card.fragment && (
                  <p className="mb-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">In the scene: </span>
                    {card.paraphrase}
                  </p>
                )}

                {card.paraphrase && card.fragment && (
                  <p className="mb-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">In the scene: </span>
                    {card.paraphrase}
                  </p>
                )}

                <p className="text-[0.95rem] leading-relaxed text-foreground">{card.body}</p>
              </article>
            )
          })}
        </section>

        {/* ── Model paragraph ─────────────────────────────────── */}
        <section
          className="mb-12 rounded-xl border bg-card p-6 shadow-sm"
          aria-label="Model paragraph"
        >
          <div className="mb-4 flex items-center gap-2">
            <ScrollText className="size-5 text-muted-foreground" />
            <h2 className="text-xl font-semibold">
              Model paragraph — Simon&apos;s death and the novel&apos;s thesis
            </h2>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            A single, exam-length paragraph (~250 words) showing how to link this scene to
            Golding&apos;s argument that civilisation is a thin veneer over savagery. Use it as a
            target, not a script — your own paragraph should sound like you, not like this.
          </p>
          <div className="rounded-lg border bg-background p-5">
            <p className="whitespace-pre-line text-[0.95rem] leading-relaxed">{modelParagraph}</p>
            <p className="mt-3 text-right text-xs text-muted-foreground">
              ~{modelParagraph.split(/\s+/).filter(Boolean).length} words
            </p>
          </div>
        </section>

        {/* ── Cross-links ─────────────────────────────────────── */}
        <section className="mb-12 grid gap-3 sm:grid-cols-2" aria-label="Related pages">
          <Link
            href="/revision/texts/lord-of-the-flies"
            className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div>
              <p className="text-sm font-medium">Full revision guide</p>
              <p className="text-xs text-muted-foreground">
                Plot, characters, themes, context, key quotes, essay plans
              </p>
            </div>
            <BookOpen className="size-4 text-muted-foreground group-hover:text-foreground" />
          </Link>
          <Link
            href="/revision/texts"
            className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:bg-muted"
          >
            <div>
              <p className="text-sm font-medium">All set texts</p>
              <p className="text-xs text-muted-foreground">
                Browse other extract walkthroughs and revision guides
              </p>
            </div>
            <ArrowLeft className="size-4 rotate-180 text-muted-foreground group-hover:text-foreground" />
          </Link>
        </section>

        {/* ── Fair dealing footer ─────────────────────────────── */}
        <footer
          className="rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-xs leading-relaxed text-amber-950"
          aria-label="Copyright and fair dealing notice"
        >
          <div className="mb-2 flex items-center gap-2 font-semibold">
            <AlertTriangle className="size-4" />
            Copyright &amp; fair dealing
          </div>
          <p className="mb-2">
            <em>Lord of the Flies</em> by William Golding (first published 1954) remains in
            copyright. The UK rights are held by <strong>Faber &amp; Faber Ltd</strong>; the William
            Golding Estate is represented by United Agents. This page is published in the United
            Kingdom and relies on the <em>fair dealing</em> exception for criticism, review and
            quotation under sections 30(1) and 30(1ZA) of the Copyright, Designs and Patents Act
            1988.
          </p>
          <p className="mb-2">
            Each verbatim fragment is fifteen words or fewer, taken from the novel&apos;s widely
            available text, used solely as the object of analytical commentary, and clearly
            attributed to Golding (Chapter 9). No continuous extract is reproduced; the scene is
            otherwise summarised in our own paraphrase. The amount used is no more than is necessary
            for the educational purpose of teaching close-reading technique to GCSE and IGCSE
            students.
          </p>
          <p>
            If you are the rights holder and believe any use here exceeds fair dealing, please
            contact us at{' '}
            <a href="mailto:hello@theenglishhub.app" className="underline">
              hello@theenglishhub.app
            </a>{' '}
            and we will remove or revise the material promptly. Students should buy or borrow a
            licensed copy of the novel from Faber &amp; Faber, their school library, or a public
            library.
          </p>
        </footer>
      </main>
    </>
  )
}
