import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/themes',
  },
  title: 'Romeo and Juliet Themes — Edexcel IGCSE Literature',
  description:
    'Detailed themes guide for Romeo and Juliet for Edexcel IGCSE Literature: love, fate, conflict, youth vs age and honour, with key quotations and analysis.',
}

const THEMES = [
  {
    theme: 'Love',
    summary:
      "Shakespeare stages multiple competing versions of love. Romeo's opening love for Rosaline is pure Petrarchan performance \u2014 a catalogue of oxymorons ('O brawling love, O loving hate'). His love for Juliet, by contrast, is immediate and total. The Nurse sees love as bawdy and pragmatic. Paris represents the socially correct, arranged match. Shakespeare asks which of these forms of love is real \u2014 and whether the most intense kind can ever survive the world.",
    how_it_develops:
      "Act 1: Romeo's performative love for Rosaline. Act 1 Scene 5: the sonnet Romeo and Juliet share on first meeting. Act 2: the balcony scene transforms love from fantasy into vows. Act 3: love is tested against banishment. Act 5: love becomes a death-pact in the tomb.",
    quotes: [
      '"O brawling love, O loving hate" (1.1)',
      '"My only love sprung from my only hate!" (1.5)',
      '"Good night, good night! Parting is such sweet sorrow" (2.2)',
      '"These violent delights have violent ends" (2.6)',
      '"Thus with a kiss I die" (5.3)',
    ],
  },
  {
    theme: 'Fate',
    summary:
      "The prologue calls the lovers 'star-cross'd' before the first scene has even begun. Shakespeare then peppers the play with premonitions, narrowly missed messages and near misses \u2014 Friar Lawrence's letter that never arrives, the timing of the tomb scene by seconds. The effect is double: the ending feels both inevitable (fate) and preventable (bad luck, bad timing, bad adult decisions). Shakespeare deliberately keeps both readings alive.",
    how_it_develops:
      "Prologue: 'star-cross'd lovers' named. Act 1: Romeo's premonition of 'untimely death' before the ball. Act 3: Romeo calls himself 'fortune's fool' after killing Tybalt. Act 5: the Friar's letter fails, and Romeo arrives at the tomb minutes too early.",
    quotes: [
      '"A pair of star-cross\u2019d lovers take their life" (Prologue)',
      '"Some consequence yet hanging in the stars" (1.4)',
      '"O, I am fortune\u2019s fool!" (3.1)',
      '"Then I defy you, stars!" (5.1)',
    ],
  },
  {
    theme: 'Conflict',
    summary:
      "The 'ancient grudge' between the Montagues and Capulets sits behind every scene. The feud poisons the play's language (Sampson and Gregory's bawdy threats in 1.1), its social order (the Prince repeatedly tries to impose peace), and its relationships (Juliet realising her beloved is a Montague, Tybalt hunting Romeo through the streets). Shakespeare suggests that inherited hatreds are irrational, self-perpetuating and lethal \u2014 especially to the children who had nothing to do with starting them.",
    how_it_develops:
      "Act 1 Scene 1: brawl in the streets, Prince's threat of death. Act 1 Scene 5: Tybalt's rage at finding Romeo at the ball. Act 3 Scene 1: Mercutio and Tybalt killed. Act 5 Scene 3: the families reconcile over the bodies of their children.",
    quotes: [
      '"From ancient grudge break to new mutiny" (Prologue)',
      '"Do you bite your thumb at us, sir?" (1.1)',
      '"A plague o\u2019 both your houses!" (3.1)',
      '"All are punish\u2019d" (5.3)',
    ],
  },
  {
    theme: 'Youth vs age',
    summary:
      'The young characters feel and act at full intensity; the older characters delay, meddle and fail them. Juliet is not yet fourteen. Romeo is only a little older. Both act with full conviction. The adults around them \u2014 Capulet, Lady Capulet, Friar Lawrence, the Nurse \u2014 offer either rigid patriarchal control or wobbly, over-engineered counsel. Shakespeare is sharp-eyed about how adults betray the young who trust them.',
    how_it_develops:
      "Act 1: the decision that Juliet will marry Paris is made by adults without her consent. Act 2: the Friar plans a secret marriage in the belief it will fix everything. Act 3: the Nurse abruptly advises Juliet to marry Paris, abandoning her. Act 4: the Friar's potion plan. Act 5: the plan's collapse.",
    quotes: [
      '"My child is yet a stranger in the world" (1.2)',
      '"Wisely and slow; they stumble that run fast" (2.3)',
      '"I think it best you married with the County" (3.5, the Nurse)',
      '"Hang thee, young baggage! disobedient wretch!" (3.5, Capulet)',
    ],
  },
  {
    theme: 'Honour',
    summary:
      "Honour is a trap. Mercutio fights Tybalt because Romeo's refusal to duel is 'dishonourable submission'. Romeo kills Tybalt because honour demands he avenge Mercutio. The Capulet men escalate because backing down would shame them. Paris is bound to his betrothal by honour. Shakespeare lets us see that honour-codes don't protect anyone \u2014 they just supply polite justifications for unnecessary deaths.",
    how_it_develops:
      "Act 1: Sampson and Gregory frame the feud as a matter of reputation. Act 3: Mercutio dies to defend Romeo's honour; Romeo avenges him out of his own. Act 3 Scene 5: Capulet frames Juliet's refusal as a personal dishonour. Act 5: Paris dies at the tomb defending his honourable claim on Juliet.",
    quotes: [
      '"O calm, dishonourable, vile submission!" (3.1)',
      '"Alive in triumph, and Mercutio slain! / Away to heaven, respective lenity" (3.1)',
      '"Out, you baggage! You tallow-face!" (3.5)',
      '"I will maintain it \u2019gainst the pride of all the world" (5.3, Paris)',
    ],
  },
]

export default async function RomeoAndJulietThemesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
          {
            name: 'Romeo and Juliet',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet',
          },
          {
            name: 'Themes',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/themes',
          },
        ]}
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/romeo-and-juliet"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Romeo and Juliet hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Romeo and Juliet &mdash; Themes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Love, fate, conflict, youth vs age and honour &mdash; tracked across the whole play.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-5">
            {THEMES.map((t) => (
              <li key={t.theme}>
                <a
                  href={`#${t.theme.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  className="text-primary hover:underline"
                >
                  {t.theme}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-14 space-y-8">
          {THEMES.map((t) => (
            <article
              key={t.theme}
              id={t.theme.toLowerCase().replace(/[^a-z]/g, '-')}
              className="scroll-mt-20 rounded-2xl border-l-4 border-primary bg-muted p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground">{t.theme}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.summary}</p>
              <div className="mt-5 rounded-lg border border-border bg-card p-4">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  How it develops
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {t.how_it_develops}
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Supporting quotes
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {t.quotes.map((q) => (
                    <li key={q} className="text-sm italic text-muted-foreground">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Romeo and Juliet by William Shakespeare is in the public domain. Quotations are reproduced
        freely.
      </p>
    </main>
  )
}
