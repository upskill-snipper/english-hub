import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SECTIONS, ASSESSMENT_OBJECTIVES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/reference/sentence-openers'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English sentence openers & connectives',
    description:
      'A practical bank of varied sentence openers and connectives for the LEH11/01 Section B writing task, organised by job, with original examples, usage notes and a vary-your-openers demo.',
  },
  title: 'iLowerSecondary English sentence openers & connectives',
  description:
    'A practical bank of varied sentence openers and connectives for the LEH11/01 Section B writing task, organised by job, with original examples, usage notes and a vary-your-openers demo.',
  alternates: { canonical: PAGE_URL },
}

const OPENER_GROUPS: {
  job: string
  blurb: string
  usage: string
  examples: string[]
}[] = [
  {
    job: 'Sequencing',
    blurb: 'Move the reader through events or steps in order.',
    usage:
      'Use these to control the order of a recount or narrative. Vary them - a paragraph that opens "Then… Then… Then…" feels flat and earns no credit for organisation.',
    examples: [
      'To begin with, the harbour was still and grey.',
      'Moments later, a gull screamed overhead.',
      'Before long, the tide had turned against us.',
      'Once the rope was secured, the work could finally start.',
      'In the hours that followed, the wind never once dropped.',
      'By the time the sun rose, the storm had moved on.',
      'At last, the lighthouse beam swept across the water.',
    ],
  },
  {
    job: 'Adding',
    blurb: 'Layer extra ideas or detail onto a point.',
    usage:
      'These build a point without starting a brand-new sentence with "And". Place a comma after the opener when it introduces the main clause.',
    examples: [
      'Furthermore, the path had crumbled into the sea.',
      'In addition, the maps we carried were years out of date.',
      'What is more, nobody had warned us about the current.',
      'Equally, the boat itself was in no state to sail.',
      'Alongside this, the radio had stopped working entirely.',
      'Not only that, but our supplies were already running low.',
      'Beyond the obvious danger, there was the cold to consider.',
    ],
  },
  {
    job: 'Contrasting',
    blurb: 'Signal a turn, a difference or an objection.',
    usage:
      'Use a contrasting opener to pivot the argument or surprise the reader. In persuasive and argumentative writing these mark the strongest moves.',
    examples: [
      'However, the calm did not last.',
      'On the other hand, staying behind felt just as risky.',
      'In contrast, the older sailors seemed entirely unworried.',
      'Despite the warnings, she untied the boat anyway.',
      'Even so, something kept pulling me towards the cliff.',
      'Yet for all the noise, the village slept on.',
      'Whereas the harbour was sheltered, the open water was not.',
    ],
  },
  {
    job: 'Causal',
    blurb: 'Show why something happens or what follows from it.',
    usage:
      'Causal openers make reasoning explicit, which the writing objective rewards. Match cause to consequence clearly so the logic never wobbles.',
    examples: [
      'As a result, the rescue had to be called off.',
      'Consequently, we were stranded until morning.',
      'Because the engine had failed, every plan changed at once.',
      'For this reason, the captain refused to leave the dock.',
      'Since the bridge was gone, the only route was the river.',
      'Owing to the fog, the search party turned back.',
      'Therefore, waiting was the only sensible choice left.',
    ],
  },
  {
    job: 'Emphasising',
    blurb: 'Make the reader stop and weigh a key idea.',
    usage:
      'Use sparingly: an emphasising opener loses its force if every sentence claims to be the most important. Save it for the point that truly matters.',
    examples: [
      'Above all, the silence was what frightened me.',
      'Indeed, no one had ever survived that crossing alone.',
      'In fact, the danger had been there from the very first hour.',
      'Crucially, the lamp still worked when nothing else did.',
      'What mattered most was that everyone reached the shore.',
      'Without question, that night changed how I saw the sea.',
      'More than anything, I remember how quickly it all happened.',
    ],
  },
  {
    job: 'Concluding',
    blurb: 'Draw the threads together and land the final impression.',
    usage:
      'Reserve these for the closing paragraph. A clear concluding opener signals deliberate structure and helps the ending feel controlled rather than abrupt.',
    examples: [
      'In the end, the lighthouse had saved us after all.',
      'Looking back, I would not have changed a single decision.',
      'Ultimately, the storm taught the village to listen.',
      'All things considered, we had been remarkably lucky.',
      'To conclude, the sea gives and the sea takes without warning.',
      'For all these reasons, the harbour wall was rebuilt that spring.',
      'In short, no one took the tide for granted again.',
    ],
  },
  {
    job: 'Descriptive scene-setting',
    blurb: 'Open a paragraph by placing the reader inside the moment.',
    usage:
      'Lead with place, time, weather or a sensory detail to ground description before any action begins. Strong in narrative and descriptive forms.',
    examples: [
      'Far out beyond the rocks, the water lay like dark glass.',
      'Under a bruised sky, the gulls had already gone quiet.',
      'Salt hung in the air long before the harbour came into view.',
      'Through the gap in the cliffs, a thin grey light was rising.',
      'Where the path met the shore, the sand had turned to stone.',
      'Somewhere below, the engine of a small boat coughed and died.',
      'All along the seawall, lanterns flickered against the wind.',
    ],
  },
]

const BEFORE_PARAGRAPH = [
  'The boy walked to the harbour.',
  'The boy saw the storm coming.',
  'The boy ran home.',
  'The boy told his family.',
  'The boy waited for the morning.',
]

const AFTER_PARAGRAPH = [
  'Early that morning, the boy walked down to the harbour.',
  'Before long, he saw the storm building far out at sea.',
  'Without waiting, he ran the whole way home.',
  'As soon as he reached the door, he told his family everything.',
  'In the end, all he could do was wait for the morning.',
]

export default async function SentenceOpenersPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Reference',
      url: 'https://theenglishhub.app/ks3/ilowersecondary/reference',
    },
    { name: 'Sentence openers', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <span>Reference</span>
        <span> · </span>
        <span>Sentence openers</span>
      </p>

      <h1>Sentence openers &amp; connectives for {SECTIONS.B.name}</h1>
      <p className="lead">
        A practical bank of varied openers, organised by the job they do. Strong, varied openers and
        connectives are exactly what the writing objectives reward - they show control of structure
        and sentence variety. Every example here is original and is not taken from any past paper.
      </p>

      <section className="my-10">
        <h2>Why this matters</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2">
          {(['WAO1', 'WAO2'] as const).map((key) => {
            const ao = ASSESSMENT_OBJECTIVES[key]
            return (
              <div key={ao.code} className="rounded-xl border border-border/60 bg-card p-4">
                <p className="font-mono text-xs text-primary mb-1">{ao.code}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{ao.descriptor}</p>
              </div>
            )
          })}
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {SECTIONS.B.description}
        </p>
      </section>

      <section className="my-10">
        <h2>The opener bank</h2>
        <div className="not-prose mt-4 space-y-4">
          {OPENER_GROUPS.map((group) => (
            <article key={group.job} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{group.job}</h3>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  {group.blurb}
                </span>
              </div>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {group.examples.map((ex) => (
                  <li
                    key={ex}
                    className="flex gap-2 rounded-lg border border-border/60 bg-background p-3 text-sm text-foreground leading-relaxed"
                  >
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 rounded-lg border border-border/60 p-3">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                  Usage note
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{group.usage}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2>Vary your openers: before &amp; after</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The same five events told two ways. The first version repeats the same subject-first
          opener every time and reads as a list. The second varies the opener for each sentence
          using the bank above, giving the writing rhythm and a sense of deliberate structure.
        </p>
        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Before - every sentence opens the same way
            </p>
            <div className="space-y-2">
              {BEFORE_PARAGRAPH.map((s) => (
                <p key={s} className="text-sm text-muted-foreground leading-relaxed">
                  {s}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-3">
              After - openers varied by job
            </p>
            <div className="space-y-2">
              {AFTER_PARAGRAPH.map((s) => (
                <p key={s} className="text-sm text-foreground leading-relaxed">
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
