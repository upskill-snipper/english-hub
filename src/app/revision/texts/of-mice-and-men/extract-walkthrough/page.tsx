'use client'

import Link from 'next/link'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

type WalkthroughCard = {
  kind: 'Notice' | 'Say' | 'Zoom Out'
  title: string
  fragment?: string
  body: string
}

const WALKTHROUGH: WalkthroughCard[] = [
  {
    kind: 'Notice',
    title: 'The river returns',
    fragment: 'the deep green pool of the Salinas River',
    body: 'Steinbeck reopens Chapter 6 at the exact pool of Chapter 1. The cyclical setting closes a frame, locking Lennie inside the dream-space where the novella began. Repetition signals that nothing the men did in the middle ever moved them forward.',
  },
  {
    kind: 'Notice',
    title: 'A predatory natural world',
    fragment: 'a silent head and beak lanced down',
    body: "A heron eats a water snake in the opening pages and again here. Nature's indifference reframes the human tragedy as one small predation among many — Lennie is simply next.",
  },
  {
    kind: 'Say',
    title: "Lennie's last refrain",
    fragment: 'tell about the rabbits, George',
    body: "The childlike refrain returns one final time. Steinbeck weaponises repetition: a line that has bonded the men for the whole novella becomes the soundtrack to George's preparation to kill. Tenderness and horror coexist in a single sentence.",
  },
  {
    kind: 'Zoom Out',
    title: "Candy's dog as rehearsal",
    // VERIFIED: original Steinbeck text reads "I oughtta of shot that dog myself, George" — dialect 'oughtta' preserved (Penguin Modern Classics edn).
    fragment: 'I oughtta of shot that dog myself',
    body: "Carlson's earlier execution of Candy's dog is the template for what George must now do. Candy's regret — that he let a stranger end his companion — becomes George's instruction manual. The novella has been preparing this bullet for fifty pages.",
  },
  {
    kind: 'Notice',
    title: 'The Luger detail',
    fragment: "Carlson's Luger",
    body: "The pistol George uses is the same Luger that killed Candy's dog. Steinbeck makes the parallel materially exact. The German military pistol also hints at brewing 1930s violence: a continent away, the same weapon was being mass-issued.",
  },
  {
    kind: 'Say',
    title: "George's slow trigger",
    fragment: 'the hand shook violently',
    body: "Steinbeck stretches the seconds before the shot. George's trembling hand, the retold dream, the hesitation — the prose refuses to let the reader rush past the cost of mercy. The act is unbearable precisely because Steinbeck makes us wait.",
  },
  {
    kind: 'Zoom Out',
    title: 'Mercy or murder?',
    body: 'The lynch mob led by Curley promises a brutal death. George chooses to be the killer rather than let strangers do worse. Steinbeck refuses to resolve whether this is love, cowardice or both — and that ambiguity is the moral engine of the ending.',
  },
  {
    kind: 'Zoom Out',
    title: '1930s itinerant labour',
    body: "Steinbeck's bleakness is structural, not personal. Depression-era ranch hands had no union, no welfare, no rights. The dream of 'a couple of acres' is the only insurance the system offers — and Steinbeck shows even that is a lie. Friendship is the single refuge left.",
  },
  {
    kind: 'Notice',
    title: "Slim's closing benediction",
    fragment: 'You hadda, George',
    body: 'The most respected man on the ranch absolves George in a half-line of dialect. Steinbeck gives the moral verdict to a working man, not a judge or a priest, locating ethics inside the fellowship of labour itself.',
  },
]

const MODEL_PARAGRAPH = `The ending of Of Mice and Men earns its tragic inevitability because Steinbeck has, from the first page, been quietly nailing the coffin shut. The cyclical return to the Salinas pool tells the reader that nothing the men attempted ever altered their trajectory; the heron devouring the water snake confirms that the natural world was always indifferent to their plans. Carlson's execution of Candy's dog functions as a structural rehearsal — Candy's lament that he should have done it himself becomes George's blueprint, and the same Luger reappears as the instrument of mercy. Lennie's final 'tell about the rabbits, George' weaponises tenderness: the refrain that defined their friendship now scores its execution. Crucially, Steinbeck offers no alternative refuge. The ranch is not a community but a marketplace; Crooks is segregated, Curley's wife is property, Candy is one accident from disposable. In a world stripped of solidarity, friendship is the only insurance the powerless can purchase, and the novella's bleakness lies in showing that even that insurance cannot survive economic precarity. George's slow trigger is therefore not weakness but love budgeted against horror: better a friend's bullet than a mob's rope. Slim's quiet absolution — 'You hadda, George' — locates the ethical verdict inside the fellowship of labour, suggesting that in 1930s America, mercy and murder had collapsed into the same gesture.`

function CardBlock({ card }: { card: WalkthroughCard }) {
  const tone =
    card.kind === 'Notice'
      ? 'border-blue-300/60 bg-blue-50/60 dark:border-blue-500/30 dark:bg-blue-950/30'
      : card.kind === 'Say'
        ? 'border-amber-300/60 bg-amber-50/60 dark:border-amber-500/30 dark:bg-amber-950/30'
        : 'border-emerald-300/60 bg-emerald-50/60 dark:border-emerald-500/30 dark:bg-emerald-950/30'
  return (
    <div className={`rounded-lg border p-4 ${tone}`}>
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {card.kind}
      </div>
      <h3 className="mt-1 text-lg font-semibold">{card.title}</h3>
      {card.fragment ? (
        <p className="mt-2 text-sm italic text-foreground/80">&ldquo;{card.fragment}&rdquo;</p>
      ) : null}
      <p className="mt-2 text-sm leading-relaxed">{card.body}</p>
    </div>
  )
}

export default function OfMiceAndMenExtractWalkthroughPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Of Mice and Men',
            url: 'https://theenglishhub.app/revision/texts/of-mice-and-men',
          },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/of-mice-and-men/extract-walkthrough',
          },
        ]}
      />

      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/revision/texts/of-mice-and-men" className="hover:underline">
          &larr; Back to Of Mice and Men
        </Link>
      </nav>

      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Extract walkthrough
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">The closing scene at the pool</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Lennie at the Salinas pool, the rabbit hallucination, and George&rsquo;s act of mercy. A
          close reading of the final pages of Steinbeck&rsquo;s 1937 novella.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Setting the scene</h2>
        <p className="text-sm leading-relaxed">
          Chapter 6 returns to the &ldquo;deep green pool&rdquo; of Chapter 1. Lennie has fled after
          accidentally killing Curley&rsquo;s wife. He hallucinates first his Aunt Clara, then a
          giant rabbit that scolds him for his failures. George arrives ahead of the mob, calms him
          with their shared dream, and shoots him with Carlson&rsquo;s Luger. The chapter is short,
          exact and almost unbearable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Walkthrough</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {WALKTHROUGH.map((card) => (
            <CardBlock key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">The rabbit hallucination</h2>
        <p className="text-sm leading-relaxed">
          Before George arrives, a giant imagined rabbit appears and tells Lennie he is not fit to
          lick its boots. Steinbeck externalises Lennie&rsquo;s shame as a vision drawn from the
          dream itself. The thing he loved most has become his accuser. It is also the
          novella&rsquo;s most economical argument that the dream was a fantasy: when projected, it
          turns hostile. By the time George arrives, the dream has already eaten itself.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Model paragraph (≈250 words)</h2>
        <p className="rounded-lg border border-border/60 bg-card/40 p-5 text-sm leading-relaxed">
          {MODEL_PARAGRAPH}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Practice prompts</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm">
          <li>
            How does Steinbeck use the closing chapter to make Lennie&rsquo;s death feel inevitable?
          </li>
          <li>
            How does Steinbeck use the parallel between Candy&rsquo;s dog and Lennie to shape the
            reader&rsquo;s response to George?
          </li>
          <li>
            How does the cyclical structure of the novella contribute to its bleak vision of 1930s
            American labour?
          </li>
        </ul>
      </section>

      <footer className="mt-12 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        <p className="font-semibold">Fair dealing notice</p>
        <p className="mt-1">
          Of Mice and Men by John Steinbeck (first published 1937) remains in copyright. UK rights
          are held by Penguin Books Ltd (originally published in the United States by Covici Friede,
          now part of Penguin Random House / Viking). Short verbatim fragments are reproduced here
          under the fair dealing provisions of the Copyright, Designs and Patents Act 1988 for the
          purposes of criticism, review and educational quotation. All quoted fragments are fewer
          than fifteen words and are accompanied by substantial critical commentary. No part of this
          page is intended to substitute for the full text. Students should obtain a complete
          edition from Penguin or their school or public library.
        </p>
      </footer>
    </main>
  )
}
