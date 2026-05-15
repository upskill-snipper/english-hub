import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Macbeth Themes — Edexcel IGCSE Literature',
    description:
      'The seven major themes of Macbeth for Edexcel IGCSE Literature: ambition, guilt, the supernatural, kingship, appearance vs reality, gender, and fate vs free will.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/themes',
  },
  title: 'Macbeth Themes — Edexcel IGCSE Literature',
  description:
    'The seven major themes of Macbeth for Edexcel IGCSE Literature: ambition, guilt, the supernatural, kingship, appearance vs reality, gender, and fate vs free will.',
}

const THEMES = [
  {
    theme: 'Ambition',
    summary:
      "The engine of the tragedy. Macbeth's 'vaulting ambition' is named in his own 1.7 soliloquy as the only reason to kill Duncan — there is no grievance, no injustice, just appetite. Shakespeare tracks ambition across both Macbeths: in him it curdles into paranoid tyranny, in her into self-destruction.",
    how_it_develops:
      "Planted by the witches' prophecy, sharpened by Lady Macbeth, released by Duncan's murder, and ultimately hollowed out by the 'Tomorrow' soliloquy.",
    quotes: [
      '"I have no spur to prick the sides of my intent, but only vaulting ambition, which o\'erleaps itself" (1.7)',
      '"Stars, hide your fires; let not light see my black and deep desires" (1.4)',
      '"Thou would\u2019st be great; art not without ambition, but without the illness should attend it" (1.5)',
    ],
  },
  {
    theme: 'Guilt and conscience',
    summary:
      "Both Macbeths suffer overwhelming guilt, but they experience it in opposite rhythms. Macbeth is haunted immediately (the dagger, Banquo's ghost) and then dulled by repetition. Lady Macbeth suppresses guilt at first ('a little water clears us of this deed') but it returns catastrophically in sleepwalking. Shakespeare's argument is clear: you cannot out-think conscience.",
    how_it_develops:
      "From Macbeth's bloody hands in Act 2, through the banquet ghost in Act 3, to Lady Macbeth's sleepwalking in Act 5 — the guilt that she denies early on eventually consumes her.",
    quotes: [
      '"Will all great Neptune\'s ocean wash this blood clean from my hand?" (2.2)',
      '"Out, damned spot! Out, I say!" (5.1)',
      '"Macbeth does murder sleep" (2.2)',
    ],
  },
  {
    theme: 'The supernatural',
    summary:
      "The witches, the floating dagger, Banquo's ghost, the apparitions, the storms and unnatural omens — the supernatural frames the whole play. For a Jacobean audience steeped in James I's Daemonologie, these were not theatrical flourishes but genuine evils. Shakespeare exploits this to ask whether Macbeth is pushed by external forces or pulled by his own desires.",
    how_it_develops:
      "Opens the play (1.1), triggers the plot (1.3), externalises Macbeth's guilt (2.1 dagger, 3.4 ghost), and equivocates him to his death (4.1, fulfilled in 5.5 and 5.8).",
    quotes: [
      '"Fair is foul, and foul is fair" (1.1)',
      '"Is this a dagger which I see before me?" (2.1)',
      '"By the pricking of my thumbs, something wicked this way comes" (4.1)',
    ],
  },
  {
    theme: 'Kingship and tyranny',
    summary:
      "Shakespeare stages a cascading contrast between Duncan (pious, trusting, generous), the off-stage English Edward the Confessor (a 'holy' healer king), and Macbeth (a paranoid butcher). The play argues that legitimate kingship brings fertility and order, while usurpation brings barrenness and chaos. This was pointed commentary for James I, who believed in the Divine Right of Kings.",
    how_it_develops:
      "Duncan models good kingship in Acts 1&ndash;2; Macbeth's coronation brings tyranny in Acts 3&ndash;4; Malcolm's restoration in Act 5 signals the return of order.",
    quotes: [
      '"He was a gentleman on whom I built an absolute trust" (1.4)',
      '"Bleed, bleed, poor country!" (4.3)',
      '"This dead butcher and his fiend-like queen" (5.9)',
    ],
  },
  {
    theme: 'Appearance vs reality',
    summary:
      "The witches' opening paradox — 'Fair is foul, and foul is fair' — sets the pattern. Lady Macbeth tells her husband to 'look like the innocent flower, but be the serpent under't'. The witches' later prophecies are literally true but functionally deceptive (equivocation). The play's world is one where surfaces cannot be trusted.",
    how_it_develops:
      "Established in 1.1, weaponised by the Macbeths in 1.5&ndash;1.7, turned back on Macbeth by the witches' equivocations in 4.1, and resolved only in Act 5 when reality finally catches up.",
    quotes: [
      '"Look like the innocent flower, but be the serpent under\'t" (1.5)',
      '"False face must hide what the false heart doth know" (1.7)',
      '"And be these juggling fiends no more believ\'d, that palter with us in a double sense" (5.8)',
    ],
  },
  {
    theme: 'Masculinity and gender',
    summary:
      "Lady Macbeth first shames her husband into murder by questioning his manhood — 'When you durst do it, then you were a man'. Macbeth absorbs this and begins to equate masculinity with violence. Macduff offers a counter-model in 4.3, insisting he must 'feel it as a man' when grieving his family. Lady Macbeth's earlier rejection of femininity ('unsex me here') is answered by her breakdown.",
    how_it_develops:
      "Lady Macbeth weaponises masculinity in 1.7; Macbeth ramps up violence to prove it; Macduff rewrites it in 4.3; Lady Macbeth's suppressed femininity returns in 5.1.",
    quotes: [
      '"Come, you spirits... unsex me here" (1.5)',
      '"When you durst do it, then you were a man" (1.7)',
      '"I shall do so; but I must also feel it as a man" (4.3)',
    ],
  },
  {
    theme: 'Fate vs free will',
    summary:
      "The witches' prophecies set the tragedy in motion — but Banquo hears the same words and resists. Macbeth's soliloquies repeatedly show him <em>choosing</em> to act: 'I am settled, and bend up each corporal agent to this terrible feat'. Shakespeare leaves the question genuinely open, but the weight of the soliloquies suggests free will, not fate, bears the moral load.",
    how_it_develops:
      "Prophecy in 1.3 \u2192 Macbeth's active choices in 1.7 and 2.1 \u2192 the moral contrast with Banquo \u2192 the equivocation of 4.1 \u2192 the realisation in 5.8 that the prophecies are half-truths.",
    quotes: [
      '"If chance will have me king, why, chance may crown me without my stir" (1.3)',
      '"I am settled, and bend up each corporal agent to this terrible feat" (1.7)',
      '"And be these juggling fiends no more believ\'d" (5.8)',
    ],
  },
]

export default async function MacbethThemesPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth' },
          {
            name: 'Themes',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth/themes',
          },
        ]}
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare/macbeth"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Macbeth hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Macbeth &mdash; Themes
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            The seven big ideas examiners ask about &mdash; and how to track each one across the
            whole play.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
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
        Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  )
}
