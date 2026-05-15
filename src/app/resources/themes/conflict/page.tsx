import type { Metadata } from 'next'
import Link from 'next/link'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Conflict Theme Across Texts | GCSE English Literature',
    description:
      'Explore the theme of conflict across GCSE set texts: Romeo and Juliet, Power and Conflict poetry, and Lord of the Flies. Key quotes, analysis, and comparison ideas.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/themes/conflict' },
  title: 'Conflict Theme Across Texts | GCSE English Literature',
  description:
    'Explore the theme of conflict across GCSE set texts: Romeo and Juliet, Power and Conflict poetry, and Lord of the Flies. Key quotes, analysis, and comparison ideas.',
}

/* ─── Data ───────────────────────────────────────────────────── */

const TEXTS = [
  {
    title: 'Romeo and Juliet',
    subtitle: 'Conflict Between Families, Generations, and Within',
    author: 'William Shakespeare',
    colour: 'border-primary',
    tagColour: 'bg-primary/10 text-primary',
    analysis: [
      "The Montague-Capulet feud is the play's driving conflict, but Shakespeare shows it as irrational and self-destructive -- the 'ancient grudge' has no stated cause.",
      'Internal conflict is equally important: Romeo is torn between love and loyalty, Juliet between family duty and personal desire, and Friar Lawrence between caution and compassion.',
      "Shakespeare structures the play so that every moment of peace is shattered by violence -- the marriage is followed by Tybalt's death, the wedding night by banishment.",
    ],
    quotes: [
      {
        text: '"Two households, both alike in dignity, in fair Verona, where we lay our scene, from ancient grudge break to new mutiny"',
        analysis:
          "The Prologue frames the entire play as a conflict narrative. 'Ancient grudge' and 'new mutiny' show how old hatreds generate fresh violence.",
      },
      {
        text: '"O, I am fortune\'s fool!"',
        analysis:
          "Romeo's cry after killing Tybalt reveals his internal conflict -- he is trapped between fate, honour, and love, unable to control any of them.",
      },
      {
        text: '"A plague o\' both your houses!"',
        analysis:
          "Mercutio's dying curse condemns both families equally, suggesting that the conflict is pointless and only the innocent suffer.",
      },
    ],
  },
  {
    title: 'Power and Conflict Poetry',
    subtitle: 'War, Memory, and the Human Cost of Conflict',
    author: 'Various poets',
    colour: 'border-primary',
    tagColour: 'bg-primary/10 text-primary',
    analysis: [
      'The anthology presents conflict from multiple perspectives: the soldier on the ground (Remains, Bayonet Charge), the civilian (War Photographer, Poppies), and the historical observer (Ozymandias, London).',
      "Many poems explore the gap between the reality of conflict and how it is remembered or reported -- Exposure's 'nothing happens' contrasts with heroic war narratives.",
      "Internal conflict is a recurring motif: the War Photographer's guilt, the mother's grief in Poppies, and the soldier's PTSD in Remains all show conflict's psychological aftermath.",
    ],
    quotes: [
      {
        text: '"Bayonet Charge: \'The patriotic tear that had brimmed in his eye sweating like molten iron from the centre of his chest\'"',
        analysis:
          'Hughes transforms patriotic emotion into physical agony through the simile, showing how the reality of conflict destroys idealistic notions of war.',
      },
      {
        text: '"Exposure: \'Our brains ache, in the merciless iced east winds that knive us\'"',
        analysis:
          'Owen personifies the wind as an attacker, suggesting that in trench warfare the real enemy is the environment, not opposing soldiers.',
      },
      {
        text: '"War Photographer: \'A hundred agonies in black-and-white\'"',
        analysis:
          'Duffy reduces human suffering to monochrome images, criticising how media representation distances audiences from the reality of conflict.',
      },
    ],
  },
  {
    title: 'Lord of the Flies',
    subtitle: 'Civilisation vs. Savagery',
    author: 'William Golding',
    colour: 'border-primary',
    tagColour: 'bg-primary/10 text-primary',
    analysis: [
      'Golding uses the island as a microcosm to explore whether conflict is an inevitable part of human nature or a product of social breakdown.',
      'The conflict between Ralph (democracy, reason) and Jack (authoritarianism, instinct) allegorises the broader struggle between civilisation and barbarism.',
      'The gradual descent into violence -- from hunting pigs to hunting humans -- shows conflict escalating when social structures and moral constraints are removed.',
    ],
    quotes: [
      {
        text: '"Maybe there is a beast... maybe it\'s only us"',
        analysis:
          "Simon's insight identifies the true source of conflict: not an external monster, but the darkness within human nature itself.",
      },
      {
        text: '"Kill the beast! Cut his throat! Spill his blood!"',
        analysis:
          'The ritualistic chant shows how group mentality transforms individual boys into a violent collective, stripping away individual moral responsibility.',
      },
      {
        text: '"Ralph wept for the end of innocence, the darkness of man\'s heart"',
        analysis:
          "The final line frames the entire novel as a loss-of-innocence narrative -- conflict has permanently altered the boys' understanding of humanity.",
      },
    ],
  },
]

const COMPARISON_IDEAS = [
  {
    title: 'Internal vs. external conflict',
    description:
      "Romeo and Juliet and the Power and Conflict poems both explore how external violence creates internal psychological damage. Compare Romeo's torment with the soldier's PTSD in Remains.",
  },
  {
    title: 'Conflict and human nature',
    description:
      'Lord of the Flies and Bayonet Charge both question whether violence is innate. Golding suggests it is; Hughes implies that war forces ordinary people into unnatural acts.',
  },
  {
    title: 'The purpose of conflict in literature',
    description:
      'Shakespeare uses conflict to create tragedy and catharsis. Golding uses it as social allegory. The war poets use it to bear witness. Compare the different literary purposes of presenting conflict.',
  },
  {
    title: 'Innocent victims of conflict',
    description:
      'Mercutio, Simon, and the unnamed civilians in War Photographer are all innocent victims. Compare how each writer uses these deaths to comment on the senselessness of conflict.',
  },
]

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function ConflictThemePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/themes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary/80 hover:text-foreground transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Theme Explorer
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Conflict
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            How writers present internal and external conflict across your GCSE set texts. Includes
            key quotes, analysis, and comparison ideas.
          </p>
        </div>
      </section>

      {/* Texts */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Conflict across texts</h2>
        <p className="mt-2 text-muted-foreground">
          From family feuds to global warfare to the darkness within -- conflict takes many forms
          across the GCSE canon.
        </p>

        <div className="mt-8 space-y-10">
          {TEXTS.map((text) => (
            <article
              key={text.title}
              className={`rounded-2xl border-2 ${text.colour} bg-card p-6 shadow-md sm:p-8`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{text.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {text.subtitle} &middot; {text.author}
                  </p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${text.tagColour}`}>
                  {text.quotes.length} key quotes
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {text.analysis.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-foreground">
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Key Quotes
                </h4>
                <div className="mt-3 space-y-4">
                  {text.quotes.map((q, i) => (
                    <div key={i} className="rounded-xl border border-border bg-muted p-4">
                      <p className="font-medium text-foreground">{q.text}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Comparison ideas */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Comparison ideas</h2>
          <p className="mt-2 text-muted-foreground">
            Use these as starting points for thematic comparison paragraphs on conflict.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {COMPARISON_IDEAS.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="text-base font-bold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other themes */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Explore other themes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Power', href: '/resources/themes/power' },
            { label: 'Guilt', href: '/resources/themes/guilt' },
            { label: 'Social Responsibility', href: '/resources/themes/social-responsibility' },
            { label: 'Love', href: '/resources/themes/love' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-primary/40"
            >
              <h3 className="font-bold text-foreground group-hover:text-foreground transition-colors">
                {link.label}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-foreground transition-colors">
                Explore <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
