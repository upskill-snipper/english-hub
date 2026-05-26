import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  GUIDED_READING_PROMPTS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

export const metadata: Metadata = {
  title: 'Leaflets, brochures & guides - iLowerSecondary English (LEH11) | The English Hub',
  description:
    'How to read and write leaflets, brochures and guides for Pearson Edexcel iLowerSecondary English (LEH11): conventions, structure and language analysis, two original annotated examples, practice questions with model answers, and a writing task.',
  alternates: {
    canonical: 'https://theenglishhub.app/ks3/ilowersecondary/text-types/leaflets-brochures-guides',
  },
  openGraph: {
    title: 'Leaflets, brochures & guides - iLowerSecondary English (LEH11)',
    description:
      'Read and write leaflets, brochures and guides for LEH11: conventions, structure and language, annotated original examples and practice questions with model answers.',
  },
}

type Convention = { feature: string; what: string; effect: string }

const CONVENTIONS: Convention[] = [
  {
    feature: 'Headings and sub-headings',
    what: 'A bold main heading names the topic; sub-headings split the text into clear sections.',
    effect:
      'Guides the reader to the part they need and organises information logically (RAO3: structure and organisation).',
  },
  {
    feature: 'Bullet points and lists',
    what: 'Short, parallel points instead of long sentences.',
    effect:
      'Make key facts quick to scan and easy to remember, suiting a reader who is browsing rather than reading every word.',
  },
  {
    feature: 'Direct address ("you")',
    what: 'Second-person pronouns speak straight to the reader.',
    effect: 'Creates a personal, involving tone so the reader feels the message applies to them.',
  },
  {
    feature: 'Imperative verbs',
    what: 'Command verbs such as "discover", "join", "explore", "visit".',
    effect: 'Push the reader towards action and give the writing energy and confidence.',
  },
  {
    feature: 'Persuasive and informative blend',
    what: 'Facts and figures sit alongside positive, opinion-led language.',
    effect:
      'The information makes the leaflet trustworthy; the persuasion makes the reader want to act on it.',
  },
  {
    feature: 'Rhetorical questions',
    what: 'A question the reader answers in their own head, e.g. "Want a day you will never forget?"',
    effect: 'Draws the reader in and makes them picture themselves taking part.',
  },
  {
    feature: 'Call to action',
    what: 'A clear closing instruction: book, donate, visit, sign up, with contact details.',
    effect: 'Tells the reader exactly what to do next so the leaflet achieves its purpose.',
  },
  {
    feature: 'Layout features',
    what: 'Columns, boxes, captions, a logo, contact panel and (in the real form) images.',
    effect:
      'Organise content visually and signal which information matters most - a key RAO3 point about how presentation supports meaning.',
  },
]

type Example = {
  id: string
  kind: string
  title: string
  blocks: { text: string; note: string }[]
}

const EXAMPLES: Example[] = [
  {
    id: 'charity',
    kind: 'Charity / awareness leaflet',
    title: 'Give an Hour: Brightwater Library Reading Buddies',
    blocks: [
      {
        text: 'Could one hour a week change a child’s future?',
        note: 'Rhetorical question as the opening hook - pulls the reader straight into the cause.',
      },
      {
        text: 'At Brightwater Community Library, hundreds of children arrive each term unable to read with confidence. Last year, our volunteer Reading Buddies gave 4,000 hours of free one-to-one help. That support changed lives.',
        note: 'Informative facts (an invented organisation and figures) build trust before the persuasion.',
      },
      {
        text: 'What you would do',
        note: 'Sub-heading organises the leaflet into clear sections (RAO3).',
      },
      {
        text: '• Read aloud with one child for an hour each week• Choose books together and talk about the story• Cheer on every small step forward',
        note: 'Bullet points list the role in short, parallel phrases that are easy to scan.',
      },
      {
        text: 'You do not need to be a teacher. You only need patience and a love of stories. We will train you, and you will never volunteer alone.',
        note: 'Direct address ("you") removes the reader’s worries and feels personal.',
      },
      {
        text: 'Join us. Become a Reading Buddy and give a child the gift of reading.',
        note: 'Imperative verbs and a clear call to action close the leaflet.',
      },
      {
        text: 'Sign up at brightwaterlibrary.example or call the volunteer desk in person.',
        note: 'Contact details make the call to action achievable.',
      },
    ],
  },
  {
    id: 'guide',
    kind: 'Visitor guide',
    title: 'Your Guide to Hollow Pines Forest Park',
    blocks: [
      {
        text: 'Welcome to Hollow Pines',
        note: 'Friendly main heading establishes the form and welcomes the reader.',
      },
      {
        text: 'Hollow Pines Forest Park covers 600 hectares of ancient woodland just outside the town of Marrowdale. Whether you have an afternoon or a full day, there is something here for everyone.',
        note: 'Informative opening: invented place and facts give the guide authority.',
      },
      {
        text: 'Where to start',
        note: 'Sub-heading signposts the next section so readers can find what they need.',
      },
      {
        text: '• Pick up a free trail map at the Visitor Lodge• Follow the colour-coded routes• Look out for the Otter Hide on the Blue Trail',
        note: 'Bullet list organises practical advice clearly and quickly.',
      },
      {
        text: 'Looking for a quieter walk? Take the Heron Path at dawn, when the mist still hangs over the lake.',
        note: 'Rhetorical question plus sensory description blends information with gentle persuasion.',
      },
      {
        text: 'Plan your visit today and discover a forest you will want to return to.',
        note: 'Imperative verbs and a call to action end the guide on a persuasive note.',
      },
    ],
  },
]

type PracticeQ = { q: string; a: string }

const PRACTICE: PracticeQ[] = [
  {
    q: 'Identify one feature of layout used in the Brightwater leaflet and explain its effect on the reader. (2 marks)',
    a: 'The leaflet uses sub-headings such as “What you would do” (1 mark for identifying the feature). This breaks the text into clear sections so the reader can quickly find the part that matters to them and follow the leaflet in a logical order (1 mark for the explained effect - an RAO3 point about organisation).',
  },
  {
    q: 'Why does the writer of the Brightwater leaflet begin with a rhetorical question? (2 marks)',
    a: 'The opening question “Could one hour a week change a child’s future?” makes the reader pause and answer it in their own mind (1 mark). It hooks them emotionally and makes them imagine being part of the solution before they read any detail, so they are more likely to keep reading and to act (1 mark).',
  },
  {
    q: 'How does the writer use language to persuade the reader to volunteer? Make two developed points with evidence. (4 marks)',
    a: 'First, the direct address “You do not need to be a teacher” speaks straight to the reader and removes a worry that might stop them, making volunteering feel possible (2 marks: point + evidence + effect). Second, the imperative verbs in “Join us. Become a Reading Buddy” give a confident, urgent instruction and tell the reader exactly what to do, turning interest into action (2 marks).',
  },
  {
    q: 'Compare how the Brightwater leaflet and the Hollow Pines guide each use structure to suit their purpose. (4 marks)',
    a: 'Both texts open with a hook and use sub-headings and bullet points to organise information for a browsing reader. However, the charity leaflet builds from an emotional question to a persuasive call to donate time, so its structure is designed to change behaviour; the visitor guide moves from welcome to practical advice to a gentle invitation, so its structure mainly informs and then lightly persuades. The contrast shows how the same conventions are organised differently to match an awareness purpose versus an informative one.',
  },
]

export default function LeafletsBrochuresGuidesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          {
            name: 'Text types',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/text-types',
          },
          {
            name: 'Leaflets, brochures & guides',
            url: 'https://theenglishhub.app/ks3/ilowersecondary/text-types/leaflets-brochures-guides',
          },
        ]}
      />

      <main className="mx-auto max-w-3xl px-4 py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3" className="hover:text-primary">
                KS3
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary" className="hover:text-primary">
                iLowerSecondary English
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/ks3/ilowersecondary/text-types" className="hover:text-primary">
                Text types
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-muted-foreground" aria-current="page">
              Leaflets, brochures &amp; guides
            </li>
          </ol>
        </nav>

        <header className="mb-10">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
            iLowerSecondary English (LEH11) &middot; Text types
          </p>
          <h1 className="mb-4 font-heading text-4xl font-semibold text-foreground">
            Leaflets, brochures &amp; guides
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Leaflets, brochures and guides are one of the non-fiction text types you may meet in
            Section A reading, and the kind of text you may be asked to write in Section B. Their
            job is to inform a reader and, very often, to persuade them to do something &mdash;
            visit a place, support a cause or take part in an activity. This guide shows you how to
            read them closely and how to write your own.
          </p>
        </header>

        <section
          aria-labelledby="where-it-fits"
          className="mb-10 rounded-lg bg-muted p-6 border border-border/60 sm:p-8"
        >
          <h2
            id="where-it-fits"
            className="mb-3 font-heading text-2xl font-semibold text-foreground"
          >
            Where this fits in the qualification
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            &ldquo;Leaflets, brochures, guides&rdquo; is one of the listed non-fiction text types
            for the reading paper, sitting alongside the others below:
          </p>
          <ul className="mb-3 flex flex-wrap gap-2">
            {NON_FICTION_TEXT_TYPES.map((t) => (
              <li
                key={t}
                className={
                  t === 'leaflets, brochures, guides'
                    ? 'rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/30'
                    : 'rounded-full bg-card px-3 py-1 text-xs text-muted-foreground border border-border/60'
                }
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground">
            These texts typically combine two non-fiction purposes &mdash; most often{' '}
            <strong>inform</strong> and <strong>persuade</strong> &mdash; chosen from the full list:{' '}
            {NON_FICTION_PURPOSES.join(', ')}.
          </p>
        </section>

        <section aria-labelledby="conventions" className="mb-12">
          <h2 id="conventions" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Conventions and their effect
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            Every feature in a leaflet is a deliberate choice. In a reading answer, always link the
            feature to its <em>effect on the reader</em> and to the writer&rsquo;s purpose &mdash;
            that is what the structure and organisation marks reward.
          </p>
          <div className="overflow-hidden rounded-lg border border-border/60">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-muted text-foreground">
                <tr>
                  <th className="p-3 font-semibold">Feature</th>
                  <th className="p-3 font-semibold">What it is</th>
                  <th className="p-3 font-semibold">Effect / why it matters</th>
                </tr>
              </thead>
              <tbody>
                {CONVENTIONS.map((c) => (
                  <tr key={c.feature} className="border-t border-border/60 align-top odd:bg-card">
                    <td className="p-3 font-medium text-foreground">{c.feature}</td>
                    <td className="p-3 text-muted-foreground">{c.what}</td>
                    <td className="p-3 text-muted-foreground">{c.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="reading" className="mb-12">
          <h2 id="reading" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Analysing structure and language when reading
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              When you read a leaflet in Section A, work through it in three passes. First, look at{' '}
              <strong>organisation</strong>: how is the text divided, what does the heading promise,
              what order are the sections in, and why does the writer save the call to action for
              the end? Second, look at <strong>language</strong>: pick out imperative verbs, direct
              address, rhetorical questions and any emotive or positive word choices, and explain
              the effect of each. Third, weigh up <strong>purpose and viewpoint</strong>: is the
              writer mainly informing, persuading, or both, and how do you know?
            </p>
            <p>
              The Teacher&rsquo;s Guide guided-reading prompts for non-fiction are a useful
              checklist for exactly this kind of text:
            </p>
            <div className="rounded-lg bg-muted p-5 border border-border/60">
              {Object.entries(GUIDED_READING_PROMPTS.nonFiction).map(([heading, prompts]) => (
                <div key={heading} className="mb-4 last:mb-0">
                  <h3 className="mb-2 font-semibold text-foreground">{heading}</h3>
                  <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    {prompts.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="examples" className="mb-12">
          <h2 id="examples" className="mb-2 font-heading text-2xl font-semibold text-foreground">
            Two short annotated examples
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Both texts below are original and were written for this guide. The organisations and
            places are invented. Each block is annotated to show the convention at work.
          </p>
          <div className="space-y-8">
            {EXAMPLES.map((ex) => (
              <article key={ex.id} className="rounded-lg bg-card p-6 border border-border/60">
                <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                  {ex.kind}
                </p>
                <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
                  {ex.title}
                </h3>
                <ol className="space-y-4">
                  {ex.blocks.map((b, i) => (
                    <li key={i} className="border-l-4 border-primary/40 pl-4">
                      <p className="mb-1 font-heading text-base leading-relaxed text-foreground">
                        {b.text}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-primary">Feature: </span>
                        {b.note}
                      </p>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="practice" className="mb-12">
          <h2 id="practice" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Practice questions with model answers
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Try each question first, then check the model answer. The marks in brackets show how the
            answer is built up.
          </p>
          <ol className="space-y-6">
            {PRACTICE.map((p, i) => (
              <li key={i} className="rounded-lg bg-muted p-5 border border-border/60">
                <p className="mb-3 font-semibold text-foreground">
                  Q{i + 1}. {p.q}
                </p>
                <details className="text-sm leading-relaxed text-muted-foreground">
                  <summary className="cursor-pointer font-semibold text-primary">
                    Show model answer
                  </summary>
                  <p className="mt-2">{p.a}</p>
                </details>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="writing" className="mb-12">
          <h2 id="writing" className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Writing a leaflet for Section B
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              In Section B you may be asked to write a leaflet linked to the reading theme. Plan
              briefly first: decide your purpose (usually to inform and persuade), your audience,
              and three or four sections. Use a clear heading, sub-headings, at least one bulleted
              list, direct address, imperative verbs and a call to action with contact details. Keep
              paragraphs short and varied, and proofread for accurate punctuation and spelling.
            </p>
            <div className="rounded-lg bg-primary/10 p-5 border border-primary/30">
              <p className="mb-2 font-semibold text-primary">Writing task</p>
              <p className="text-muted-foreground">
                A new wildlife centre, Saltmere Marsh, is opening near your town. Write the text of
                a leaflet that persuades families to visit during the spring holidays. You should
                use the conventions of a leaflet and write to inform and persuade.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-5 border border-border/60">
              <p className="mb-2 font-semibold text-foreground">Model opening</p>
              <p className="italic text-muted-foreground">
                &ldquo;Discover Saltmere Marsh &mdash; Spring at the Water&rsquo;s Edge
                <br />
                <br />
                Looking for a day out the whole family will remember? This spring, the brand-new
                Saltmere Marsh Wildlife Centre throws open its boardwalks to visitors of every age.
                Just ten minutes from the town centre, our 80 hectares of restored wetland are alive
                with returning birds, leaping frogs and the first wildflowers of the year.
                <br />
                <br />
                What you can do here
                <br />
                &bull; Borrow free binoculars and follow the family Pond Trail
                <br />
                &bull; Meet our rangers at the daily Marsh Discovery talk
                <br />
                &bull; Warm up with hot chocolate in the Reedbed Caf&eacute;
                <br />
                <br />
                Plan your spring visit today &mdash; Saltmere Marsh is waiting for you.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>{SPEC_ATTRIBUTION}</p>
          <p className="mt-2">
            Copyrighted material is used only to the limited extent necessary for criticism, review
            and instruction (fair dealing). The English Hub is an independent educational resource
            and is not affiliated with or endorsed by Pearson.
          </p>
        </footer>
      </main>
    </>
  )
}
