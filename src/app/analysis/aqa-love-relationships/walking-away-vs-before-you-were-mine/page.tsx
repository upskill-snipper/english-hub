import type { Metadata } from 'next'
import Link from 'next/link'

const SLUG = 'walking-away-vs-before-you-were-mine'
const H1 = 'Walking Away vs Before You Were Mine: Parental Perspective Comparison'
const DESCRIPTION =
  'Grade 9 comparison of C. Day Lewis\u2019s Walking Away and Carol Ann Duffy\u2019s Before You Were Mine. Both poems are written from the adult perspective about a person they love. Written by GCSE examiners.'

export const metadata: Metadata = {
  title: `${H1} | AQA Love and Relationships`,
  description: DESCRIPTION,
  alternates: { canonical: `https://theenglishhub.app/analysis/aqa-love-relationships/${SLUG}` },
  openGraph: { title: H1, description: DESCRIPTION },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: H1,
    description: DESCRIPTION,
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage: `https://theenglishhub.app/analysis/aqa-love-relationships/${SLUG}`,
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/aqa-love-relationships" className="hover:text-foreground">AQA Love and Relationships</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Walking Away vs Before You Were Mine</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{H1}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="prose prose-neutral mt-8 max-w-none text-foreground dark:prose-invert">
        <h2>Thesis: love as the refusal to let a loved one fully belong to themselves</h2>
        <p>
          C. Day Lewis and Carol Ann Duffy both write as adults looking at another person they
          love &mdash; Day Lewis at his son walking into a school sports field, Duffy at her
          mother as a young woman before motherhood. Both poems are about the ache of watching
          someone who, in some real sense, does not belong to you. A Grade 9 argument is that
          both poets invent retrospective sight lines: Day Lewis looks forward from a memory
          to understand the present; Duffy looks backwards from the present to imagine a
          mother who existed before her. Love becomes an act of imagining someone else&rsquo;s
          separate life.
        </p>

        <h2>Comparison 1: the gaze and what the speaker cannot quite control</h2>
        <p>
          Day Lewis watches his son walk &ldquo;away from me towards the school / With the
          pathos of a half-fledged thing set free / Into a wilderness.&rdquo; The son is a
          bird leaving the nest, and the father can do nothing but watch. Duffy imagines her
          mother in a Marilyn Monroe pose ten years before the speaker was born: &ldquo;I&rsquo;m
          ten years away from the corner you laugh on / With your pals, Maggie McGeeney and
          Jean Duff.&rdquo; The gaze is maternal in reverse &mdash; the daughter becomes the
          adoring parent of her mother&rsquo;s youthful self. Both speakers love someone they
          cannot reach.
        </p>

        <h2>Comparison 2: form and the containment of feeling</h2>
        <p>
          Day Lewis uses regular five-line stanzas and a classical allusion (&ldquo;God gives
          / Us each an ordeal&rdquo;) to give the pain a dignified frame. The controlled form
          is a grown man trying not to cry. Duffy uses four irregular stanzas crammed with
          sensory detail and American slang: &ldquo;Cha cha cha!&rdquo; The form is less
          contained because the emotion is more celebratory than mournful. Both forms reflect
          the speaker&rsquo;s relationship to the person they are watching: Day Lewis has to
          let go; Duffy gets to claim a version of her mother that nobody else has.
        </p>

        <h2>Comparison 3: the ending and the paradox of love at a distance</h2>
        <p>
          Day Lewis ends with an aphorism: &ldquo;Love is proved in the letting go.&rdquo;
          Real parental love is measured by the willingness to release the child. Duffy ends
          with the unbearable line &ldquo;I wanted the bold girl winking in Portobello, sent
          three decades away,&rdquo; which rewrites the mother as someone the daughter still
          wants to know. One ending is stoic and philosophical; the other is hungry and
          acquisitive. Both endings show that love lives in the gap between you and the
          person you cannot entirely possess.
        </p>

        <h2>Context</h2>
        <p>
          C. Day Lewis (1904&ndash;1972) was a British Poet Laureate who wrote
          &ldquo;Walking Away&rdquo; for his son Sean. Duffy is the former British Poet
          Laureate and writes from a female, working-class, Scottish perspective. Both poets
          are writing family love as memory rather than as present action, which is why the
          examiner loves pairing them.
        </p>

        <h2>Grade 9 conclusion</h2>
        <p>
          Day Lewis and Duffy both love their subject by imagining them at a distance &mdash;
          past or future &mdash; and both reach the same paradox: you love someone most
          clearly when you accept that they have a life you cannot enter. The retrospective
          gaze is itself a form of care.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Related analyses</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          <li><Link href="/analysis/aqa-love-relationships/eden-rock-vs-walking-away" className="text-primary hover:underline">Eden Rock vs Walking Away</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/family-love-theme-across-anthology" className="text-primary hover:underline">Family love across the anthology</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/memory-and-love-theme-across-anthology" className="text-primary hover:underline">Memory and love</Link></li>
          <li><Link href="/analysis/aqa-love-relationships/mother-any-distance-vs-follower" className="text-primary hover:underline">Mother, Any Distance vs Follower</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Revise the whole anthology</h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Pair this comparison with our full Love and Relationships revision notes for plot
          summaries, context and annotated poem texts.
        </p>
        <div className="mt-4">
          <Link
            href="/revision/poetry/love-and-relationships"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-[0.9375rem] font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Go to full revision notes
          </Link>
        </div>
      </section>
    </main>
  )
}
