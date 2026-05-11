import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/characters',
  },
  title: 'Romeo and Juliet Characters — Edexcel IGCSE Literature',
  description:
    'Character analysis for Romeo, Juliet, Friar Lawrence, the Nurse, Mercutio, Tybalt, Lord Capulet and Paris for Edexcel IGCSE English Literature.',
}

const CHARACTERS = [
  {
    name: 'Romeo',
    role: 'Montague heir -- passionate lover, impulsive youth',
    description:
      "Romeo begins the play performing lovesickness for Rosaline in elaborate Petrarchan language: 'O brawling love, O loving hate' (1.1). His love for Juliet transforms him -- the shared sonnet at the ball (1.5) shows two minds meeting as equals. But his impulsiveness is constant: he kills Tybalt in rage ('fire-eyed fury be my conduct now', 3.1), rushes to buy poison without waiting for the Friar's message, and takes his life beside Juliet's body. Shakespeare asks whether Romeo's intensity is heroic or reckless -- and lets the audience feel both.",
    arc: 'Lovesick poseur \u2192 genuine lover \u2192 killer \u2192 exile \u2192 suicide',
    key_quotes: [
      '"O brawling love, O loving hate" (1.1)',
      '"Did my heart love till now? Forswear it, sight! For I ne\'er saw true beauty till this night" (1.5)',
      '"O, I am fortune\'s fool!" (3.1)',
      '"Then I defy you, stars!" (5.1)',
      '"Thus with a kiss I die" (5.3)',
    ],
  },
  {
    name: 'Juliet',
    role: 'Capulet daughter -- from obedience to defiance',
    description:
      "Juliet is not yet fourteen, but she is the play's most psychologically complex character. In Act 1 she defers to her mother: 'It is an honour that I dream not of' (1.3). By Act 2 she is questioning Romeo's name -- 'What's in a name? That which we call a rose by any other word would smell as sweet' (2.2) -- with a philosophical clarity Romeo never matches. By Act 3 she defies her father, by Act 4 she fakes her own death, and by Act 5 she chooses suicide over survival. Shakespeare tracks her growth from a sheltered child into a woman who refuses to compromise, making her arguably the play's true tragic hero.",
    arc: 'Obedient daughter \u2192 secret wife \u2192 defiant rebel \u2192 apparent corpse \u2192 suicide',
    key_quotes: [
      '"It is an honour that I dream not of" (1.3)',
      '"What\'s in a name? That which we call a rose by any other word would smell as sweet" (2.2)',
      '"My only love sprung from my only hate!" (1.5)',
      '"Give me my Romeo; and, when I shall die, take him and cut him out in little stars" (3.2)',
      '"O happy dagger! This is thy sheath; there rust, and let me die" (5.3)',
    ],
  },
  {
    name: 'Friar Lawrence',
    role: 'Franciscan friar -- well-meaning schemer',
    description:
      "Friar Lawrence is introduced gathering herbs and meditating on the dual nature of plants: 'Within the infant rind of this weak flower / Poison hath residence, and medicine power' (2.3). This duality defines him -- his intentions are medicinal, but his plans prove poisonous. He marries the lovers secretly, hoping to reconcile the families. He gives Juliet a death-faking potion. His letter to Romeo fails to arrive. Shakespeare uses him to explore how well-meaning adult intervention can catastrophically fail the young people it tries to help.",
    arc: 'Wise counsellor \u2192 secret plotter \u2192 panicking adult \u2192 confessor',
    key_quotes: [
      '"Within the infant rind of this weak flower / Poison hath residence, and medicine power" (2.3)',
      '"Wisely and slow; they stumble that run fast" (2.3)',
      '"These violent delights have violent ends" (2.6)',
      '"Come, I\'ll dispose of thee among a sisterhood of holy nuns" (5.3)',
    ],
  },
  {
    name: 'The Nurse',
    role: "Juliet's surrogate mother -- warm, bawdy, ultimately disloyal",
    description:
      "The Nurse has raised Juliet from birth and loves her with a physical, maternal warmth that Lady Capulet cannot match. Her long, rambling speeches (1.3) are full of bawdy humour and genuine tenderness. She acts as go-between for Romeo and Juliet, carrying messages and arranging the secret wedding. But in Act 3, after Romeo's banishment, she pragmatically advises Juliet to forget Romeo and marry Paris: 'I think it best you married with the County' (3.5). Shakespeare shows her loyalty collapsing under social pressure -- and the betrayal isolates Juliet completely.",
    arc: 'Loving surrogate mother \u2192 conspirator \u2192 pragmatic betrayer',
    key_quotes: [
      '"Thou wast the prettiest babe that e\'er I nursed" (1.3)',
      '"His name is Romeo, and a Montague, the only son of your great enemy" (1.5)',
      '"I think it best you married with the County" (3.5)',
      '"Ancient damnation! O most wicked fiend!" (3.5, Juliet about the Nurse)',
    ],
  },
  {
    name: 'Mercutio',
    role: "Romeo's best friend -- the play's sharpest wit",
    description:
      "Mercutio is neither Montague nor Capulet -- he is the Prince's kinsman, which gives him an outsider's perspective on the feud. His Queen Mab speech (1.4) is a dazzling set-piece that moves from fairy fantasy to sexual aggression, revealing a restless, brilliant mind. He mocks Romeo's love-talk relentlessly. His death in Act 3 Scene 1 -- caused by Romeo's attempt to make peace -- marks the play's tonal pivot from comedy to tragedy. His dying curse, 'A plague o' both your houses!' (3.1), spoken three times, indicts both families and hangs over the rest of the play.",
    arc: 'Witty outsider \u2192 hot-headed defender \u2192 victim of the feud',
    key_quotes: [
      '"O, then I see Queen Mab hath been with you" (1.4)',
      '"If love be rough with you, be rough with love" (1.4)',
      '"A plague o\u2019 both your houses!" (3.1)',
      '"Ask for me tomorrow, and you shall find me a grave man" (3.1)',
    ],
  },
  {
    name: 'Tybalt',
    role: "Juliet's cousin -- the feud's enforcer",
    description:
      "Tybalt is the Capulet who takes the feud most seriously. He recognises Romeo at the ball by his voice and is furious: 'Now by the stock and honour of my kin, to strike him dead I hold it not a sin' (1.5). When Lord Capulet orders him to stand down, he obeys but does not forgive. His challenge to Romeo in Act 3 Scene 1 triggers the play's catastrophe. Shakespeare makes Tybalt a product of the feud rather than a villain -- he is doing what the feud has taught him to do.",
    arc: 'Honour-bound Capulet \u2192 patient avenger \u2192 killed by Romeo',
    key_quotes: [
      '"Now by the stock and honour of my kin, to strike him dead I hold it not a sin" (1.5)',
      '"What, drawn, and talk of peace? I hate the word" (1.1)',
      '"Boy, this shall not excuse the injuries that thou hast done me" (3.1)',
      '"Romeo, the love I bear thee can afford no better term than this: thou art a villain" (3.1)',
    ],
  },
  {
    name: 'Lord Capulet',
    role: "Juliet's father -- patriarch, then tyrant",
    description:
      "Lord Capulet begins the play as a reasonable father. He tells Paris that Juliet is too young to marry: 'My child is yet a stranger in the world' (1.2). He even shows restraint at the ball, stopping Tybalt from confronting Romeo. But after Tybalt's death, he reverses entirely, demanding Juliet marry Paris immediately and erupting into verbal violence when she refuses: 'Hang thee, young baggage! disobedient wretch!' (3.5). Shakespeare shows how patriarchal authority, once challenged, turns abusive.",
    arc: 'Protective father \u2192 grieving uncle \u2192 raging patriarch \u2192 bereaved father',
    key_quotes: [
      '"My child is yet a stranger in the world" (1.2)',
      '"My sword, I say! Old Montague is come" (1.1)',
      '"Hang thee, young baggage! disobedient wretch!" (3.5)',
      '"Death lies on her like an untimely frost upon the sweetest flower of all the field" (4.5)',
    ],
  },
  {
    name: 'Paris',
    role: "The Prince's kinsman -- the socially correct match",
    description:
      "Paris is not a villain. He is courteous, well-born, and genuinely grieves at Juliet's tomb: 'Sweet flower, with flowers thy bridal bed I strew' (5.3). He represents everything a Capulet father would want for his daughter -- wealth, rank, respectability. Shakespeare uses Paris to show that the socially approved marriage is no match for the love Romeo and Juliet share. His death at the tomb -- fighting Romeo over a woman who never loved him -- makes him the feud's collateral damage.",
    arc: 'Hopeful suitor \u2192 approved fiance \u2192 mourner \u2192 killed at the tomb',
    key_quotes: [
      '"Younger than she are happy mothers made" (1.2)',
      '"Sweet flower, with flowers thy bridal bed I strew" (5.3)',
      '"I do defy thy conjuration, and apprehend thee for a felon here" (5.3)',
      '"O, I am slain! If thou be merciful, open the tomb, lay me with Juliet" (5.3)',
    ],
  },
]

export default async function RomeoAndJulietCharactersPage() {
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
            name: 'Characters',
            url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/romeo-and-juliet/characters',
          },
        ]}
      />
      {/* -- Hero ------------------------------------------------- */}
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
            Romeo and Juliet &mdash; Characters
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Arcs, motivations and key quotations for the play&rsquo;s central figures.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* -- Quick nav ------------------------------------------ */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {CHARACTERS.map((c) => (
              <li key={c.name}>
                <a
                  href={`#${c.name.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  className="text-primary hover:underline"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mt-14 space-y-8">
          {CHARACTERS.map((c) => (
            <article
              key={c.name}
              id={c.name.toLowerCase().replace(/[^a-z]/g, '-')}
              className="scroll-mt-20 rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8"
            >
              <h2 className="text-2xl font-bold text-foreground">{c.name}</h2>
              <p className="mt-1 text-sm font-medium text-primary">{c.role}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              <div className="mt-5 rounded-lg border border-primary/30 bg-primary/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Character arc
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{c.arc}</p>
              </div>
              <div className="mt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Key quotes
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {c.key_quotes.map((q) => (
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
