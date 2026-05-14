'use client'

import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
import { useState } from 'react'

/* ─── Expandable Section Component ─────────────────────────── */

function Section({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-4 rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
      >
        <span className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-bold text-foreground">{title}</span>
        </span>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 py-5">{children}</div>}
    </div>
  )
}

function QuoteCard({
  quote,
  speaker,
  analysis,
}: {
  quote: string
  speaker?: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-l-4 border-violet-400 bg-violet-500/5 p-4 mb-3">
      <p className="text-sm font-semibold text-violet-800 dark:text-violet-200 italic">
        &ldquo;{quote}&rdquo;
      </p>
      {speaker && <p className="mt-1 text-xs font-medium text-violet-600">&mdash; {speaker}</p>}
      <p className="mt-2 text-sm text-muted-foreground">{analysis}</p>
    </div>
  )
}

function CharacterCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted p-4 mb-3">
      <h4 className="font-bold text-primary">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

function ThemeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-violet-500/30 bg-violet-500/10/30 p-4 mb-3">
      <h4 className="font-bold text-violet-700 dark:text-violet-300">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function TwelfthNightPage() {
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            Shakespeare Comedy
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            Edexcel
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            A-Level
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Twelfth Night, or What You Will &mdash; Complete Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          {tr(`William Shakespeare, c.1601&ndash;1602`)}
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Everything you need for your A-Level and GCSE English Literature exam. Act-by-act plot,
          character profiles, themes with evidence, verbatim Folio quotations with analysis,
          symbols, festive context, the Hamnet/Judith biographical reading, and essay planning
          guidance.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">{tr(`Jump to section:`)}</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Key Quotations',
            'Symbols',
            'Context',
            'Structure',
            'Essay Planning',
            'Grade 9 Points',
            'Practice Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* ────────────────────────────────── PLOT SUMMARY */}
        <div id="plot-summary">
          <Section title={tr(`Act-by-Act Plot Summary`)} icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Act 1 &mdash; Shipwreck and Disguise
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play opens in Illyria with Duke Orsino lovesick for the Countess Olivia, who
                  is in mourning for her dead brother and refuses all suitors. Meanwhile, Viola is
                  shipwrecked on the Illyrian coast and believes her twin brother Sebastian drowned.
                  Aided by a kindly Sea-Captain, she resolves to disguise herself as a young man and
                  serve Orsino. As &ldquo;Cesario,&rdquo; she becomes Orsino&apos;s trusted page and
                  is sent to woo Olivia on his behalf &mdash; but Olivia falls for Cesario instead.
                  Meanwhile, in Olivia&apos;s household, her drunken uncle Sir Toby Belch entertains
                  his foolish friend Sir Andrew Aguecheek, whom Toby encourages as a suitor for
                  Olivia. Feste the clown returns after an absence and pacifies the steward Malvolio
                  with witty wordplay.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Orsino&apos;s opening speech &mdash; &ldquo;If music be the food of
                      love, play on&rdquo;
                    </li>
                    <li>
                      &bull; Viola&apos;s shipwreck &mdash; &ldquo;What country, friends, is
                      this?&rdquo;
                    </li>
                    <li>
                      &bull; Viola decides to &ldquo;Conceal me what I am&rdquo; &mdash; the central
                      disguise
                    </li>
                    <li>
                      &bull; Olivia removes her veil and falls for Cesario&apos;s &ldquo;willow
                      cabin&rdquo; speech
                    </li>
                    <li>
                      &bull; The triangular love-knot established: Orsino &rarr; Olivia &rarr;
                      Cesario &rarr; Orsino
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Act 2 &mdash; Sebastian Surfaces, the Letter Plot Begins
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  We discover that Sebastian survived the wreck, rescued by the sea-captain Antonio,
                  who has grown devoted to him. Sebastian sets off for Orsino&apos;s court, with
                  Antonio following secretly despite having enemies there. Olivia sends Malvolio
                  after Cesario with a ring &mdash; a pretext to renew contact &mdash; and Viola
                  realises with horror the chaos her disguise has caused: &ldquo;Disguise, I see
                  thou art a wickedness.&rdquo; Late at night, Sir Toby, Sir Andrew, Maria and Feste
                  hold a drinking party. Malvolio bursts in to scold them. Maria, the sharp-witted
                  lady-in-waiting, plots revenge: she will forge a letter in Olivia&apos;s
                  handwriting making Malvolio believe Olivia loves him. Meanwhile, Viola talks with
                  Orsino about love. The famous &ldquo;Patience on a monument&rdquo; speech
                  disguises her own love for him. The trap is sprung: Malvolio finds the letter,
                  decodes &ldquo;M.O.A.I.&rdquo; as himself, and resolves to smile constantly and
                  wear yellow stockings, cross-gartered.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Antonio&apos;s devotion to Sebastian &mdash; risking arrest to follow
                      him
                    </li>
                    <li>
                      &bull; Viola&apos;s ring soliloquy &mdash; recognising Olivia loves
                      &ldquo;Cesario&rdquo;
                    </li>
                    <li>
                      &bull; The midnight revel &mdash; cakes and ale vs Malvolio&apos;s puritan
                      rebuke
                    </li>
                    <li>
                      &bull; The forged letter &mdash; Maria&apos;s &ldquo;great P&apos;s&rdquo; in
                      Olivia&apos;s hand
                    </li>
                    <li>
                      &bull; Malvolio&apos;s soliloquy of self-importance overheard by Toby and
                      Fabian
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Act 3 &mdash; Cross-Garters, Duels, and Mistaken Twins
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Cesario returns to Olivia and the two have a charged exchange in which Olivia
                  openly declares her love. Sir Andrew, jealous of Cesario, is encouraged by Toby to
                  challenge him to a duel. Malvolio appears to Olivia transformed: smiling, in
                  yellow stockings, cross-gartered, quoting the letter. Olivia, baffled, thinks he
                  has gone mad and entrusts him to Toby&apos;s care &mdash; exactly what the
                  conspirators need. They lock him in a dark room as a &ldquo;mad&rdquo; man. The
                  duel between Cesario and Sir Andrew is comic: both are terrified. Antonio
                  intervenes, mistaking Cesario for Sebastian, and is arrested by Orsino&apos;s
                  officers. He asks Cesario for the purse he gave Sebastian, and Viola&apos;s
                  confused refusal devastates him &mdash; though Viola begins to hope: &ldquo;Prove
                  true, imagination, O, prove true, / That I, dear brother, be now ta&apos;en for
                  you!&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Olivia&apos;s open declaration &mdash; &ldquo;love sought is good; but
                      given unsought is better&rdquo;
                    </li>
                    <li>
                      &bull; Malvolio in yellow stockings &mdash; &ldquo;Why, this is very midsummer
                      madness&rdquo;
                    </li>
                    <li>
                      &bull; Sir Andrew&apos;s feeble challenge letter &mdash; comic ineffectuality
                    </li>
                    <li>&bull; The aborted duel &mdash; Antonio&apos;s mistaken intervention</li>
                    <li>
                      &bull; Antonio&apos;s arrest &mdash; the moment of mistaken identity that
                      resolves the plot
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    4
                  </span>
                  Act 4 &mdash; Sebastian Mistaken for Cesario; Sir Topas
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Sebastian, wandering Illyria, is accosted first by Feste (mistaking him for
                  Cesario), then by Sir Andrew, who attacks him &mdash; only for Sebastian to floor
                  Andrew. Olivia rushes in and, thinking Sebastian is Cesario at last yielding to
                  her, takes him home. Sebastian, dazzled and bewildered, accepts: &ldquo;Or I am
                  mad, or else this is a dream.&rdquo; They are betrothed by a priest. Meanwhile,
                  the conspirators continue tormenting Malvolio. Feste, disguised as the curate
                  &ldquo;Sir Topas,&rdquo; visits him in the dark room, debating with him in mock
                  theology to convince Malvolio he is mad. Eventually Feste, in his own voice,
                  agrees to bring Malvolio pen, ink and paper so he can write to Olivia. The
                  torment, increasingly cruel, edges towards the play&apos;s troubled comic limit.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Sebastian floors Sir Andrew &mdash; the &ldquo;Cesario&rdquo; nobody
                      recognises
                    </li>
                    <li>&bull; Olivia&apos;s impulsive proposal accepted by the wrong twin</li>
                    <li>&bull; The dark room &mdash; Malvolio imprisoned as a madman</li>
                    <li>
                      &bull; Sir Topas the curate &mdash; Feste&apos;s most cutting performance
                    </li>
                    <li>
                      &bull; The priest&apos;s betrothal &mdash; sealed offstage, decisive for Act 5
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    5
                  </span>
                  Act 5 &mdash; The Twins Meet; Festive and Bitter Endings
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Orsino arrives at Olivia&apos;s house with Cesario; Antonio is brought in under
                  guard, and Antonio accuses Cesario of betrayal. Olivia enters and addresses
                  Cesario as her husband; the priest confirms the betrothal. Orsino, enraged at
                  Cesario&apos;s &ldquo;treachery,&rdquo; threatens violence. Sir Andrew and Sir
                  Toby stagger in, beaten by Sebastian. Then Sebastian himself enters &mdash; and
                  the twins finally see each other. Olivia exclaims &ldquo;Most wonderful!&rdquo;
                  Viola and Sebastian recognise each other through testimony of their dead father.
                  Orsino, now realising Cesario is a woman, immediately offers her his hand.
                  Malvolio is released, reads aloud the letter that ruined him, and learns it was
                  forged by Maria. He exits vowing &ldquo;I&apos;ll be revenged on the whole pack of
                  you,&rdquo; while Toby and Maria have married offstage. Feste closes the play
                  alone with his melancholy song: &ldquo;the rain it raineth every day.&rdquo;
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Antonio&apos;s grief at Cesario&apos;s denial &mdash; the
                      queer/devotional pain
                    </li>
                    <li>
                      &bull; The twins meet &mdash; &ldquo;An apple cleft in two&rdquo; (Orsino)
                      [VERIFY]
                    </li>
                    <li>
                      &bull; &ldquo;I am all the daughters of my father&apos;s house, And all the
                      brothers too&rdquo;
                    </li>
                    <li>
                      &bull; Malvolio&apos;s exit &mdash; the unhealed wound in the play&apos;s
                      comedy
                    </li>
                    <li>
                      &bull; Feste&apos;s &ldquo;wind and the rain&rdquo; song &mdash; the
                      play&apos;s sober envoi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title={tr(`Character Profiles`)} icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Viola / Cesario"
                description="The play's emotional centre. Shipwrecked, bereaved (she believes), and alone in a foreign court, Viola disguises herself as the young man Cesario to serve Orsino. Her cross-dressing creates the play's comic engine but also its deepest pathos: she falls in love with Orsino while being forced to woo Olivia for him. Viola is intelligent, quick-witted, and emotionally honest in soliloquy ('Disguise, I see thou art a wickedness') even as she lies socially. Her language mixes Petrarchan flourish ('willow cabin') with practical patience ('she never told her love'). At the end she remains in male attire — Shakespeare leaves her as 'Cesario' until her clothes can be recovered, which never happens onstage."
              />
              <CharacterCard
                name="Sebastian"
                description="Viola's twin brother, presumed drowned. Rescued by Antonio, he wanders into Illyria and is mistaken for Cesario by Feste, Sir Andrew, and Olivia. Where Viola navigates the world through wit and disguise, Sebastian moves through it accepting whatever happens — accepting Olivia's proposal almost dazedly ('Or I am mad, or else this is a dream'). His arrival is the deus ex machina that resolves the love-knot: he takes Olivia, freeing Viola for Orsino. He is the play's quietest major character — a body that completes the geometry."
              />
              <CharacterCard
                name="Duke Orsino"
                description="The lovesick ruler of Illyria, more in love with the idea of love than with Olivia herself. He wallows in music and melancholy in the opening scene and changes his mind constantly about love: 'Give me excess of it' / 'Enough; no more.' His attraction to Cesario is one of the play's most teasing currents — he confides in Viola in male disguise as he never could in a courtier, and his quick pivot to marrying her at the end can read as love long-prepared or alarmingly arbitrary. A figure of self-indulgent Petrarchan suffering rather than tragic depth."
              />
              <CharacterCard
                name="Olivia"
                description="A wealthy countess in mourning for her dead brother, having sworn to veil her face for seven years. The arrival of Cesario disrupts her vow within minutes: she falls violently and openly in love. Olivia is decisive where Orsino is paralysed — when she wants Cesario, she sends a ring; when she meets Sebastian, she marries him. She is also generous, granting Malvolio rank and trust, and protecting Cesario in the duel. Her line 'love sought is good; but given unsought is better' captures her ideology of impulsive feeling."
              />
              <CharacterCard
                name="Malvolio"
                description="Olivia's steward — a puritan in style, joyless, vain, and ambitious. Maria calls him 'a kind of puritan'. His fantasy of marrying Olivia and ruling the household is so intense that he believes a forged letter without question. Gulled into yellow stockings and cross-garters, locked in a dark room, exorcised by Feste as 'Sir Topas,' his torment exceeds the bounds of comic justice. His final exit — 'I'll be revenged on the whole pack of you' — refuses the comic resolution everyone else accepts. Modern criticism reads him as a class-anxiety figure: punished for ambition above his station as much as for puritanism."
              />
              <CharacterCard
                name="Sir Toby Belch"
                description="Olivia's uncle: a riotous, parasitic knight who lives off her household and exploits Sir Andrew for drinking-money. His name (Belch) marks his role as embodiment of gluttony and Carnival misrule. He drives the Malvolio sub-plot, asking Maria's iconic question 'Dost thou think because thou art virtuous there shall be no more cakes and ale?' He is at once charming and cruel — a festive lord of misrule whose festivity has a hard, exploitative edge by the end."
              />
              <CharacterCard
                name="Sir Andrew Aguecheek"
                description="A foolish, wealthy knight kept around by Sir Toby as a butt and a purse. Thin (his cheek 'agues' — shakes) and intellectually feeble, he is encouraged to woo Olivia though she has never noticed him. His challenge to Cesario, the duel, and his final beating by Sebastian show him as a comic victim throughout. Yet there is real pathos in 'I was adored once too' — a flicker of sad humanity in a character mostly used for laughs."
              />
              <CharacterCard
                name="Maria"
                description="Olivia's gentlewoman — sharp, literate, and the architect of the Malvolio gulling. It is Maria who imitates Olivia's hand to forge the fatal letter and who proposes the dark-room imprisonment. Toby calls her 'Penthesilea' (an Amazon queen). Her marriage to Toby at the play's end is rewarded explicitly because of the letter trick — a striking instance of comedy delivering social mobility for its female schemer. She is the most genuinely intelligent character in the household."
              />
              <CharacterCard
                name="Feste"
                description="The 'allowed fool' of Olivia's household — the only character who moves freely between Orsino's court and Olivia's, between high and low. His wit is paid wit ('Foolery, sir, does walk about the orb like the sun'); he sings the play's most beautiful and most painful songs ('Come away, come away, death'; 'When that I was and a little tiny boy'). As 'Sir Topas' he is briefly cruel; as singer he is the play's voice of melancholy wisdom. Critics often see him as the figure who knows the play is a play."
              />
              <CharacterCard
                name="Antonio"
                description="The sea-captain who rescues Sebastian and follows him to Illyria despite the danger of arrest there. His devotion is described in unmistakably loving terms — he gives Sebastian his purse, risks his life, and is devastated by Cesario's apparent ingratitude. Modern criticism (e.g. Joseph Pequigney) reads Antonio as one of Shakespeare's clearest queer figures, a man whose love for another man is set against, and outside, the play's heterosexual marriages. He receives no partner at the end."
              />
              <CharacterCard
                name="Fabian"
                description="A servant of Olivia, brought into the gulling plot at Act 2 Scene 5 as a substitute for Feste. He participates eagerly in the Malvolio trick (he has his own grudge — Malvolio reported him to Olivia about a bear-baiting). In Act 5 it is Fabian who confesses the letter trick, asking that 'no quarrel nor no brawl' mar the comedy — though Malvolio's exit shows how that wish fails."
              />
              <CharacterCard
                name="The Sea-Captain"
                description="The kind man who saves Viola from the wreck, tells her about Illyria, and helps her into Cesario's costume. He holds her 'maiden weeds' (women's clothes) — and at the end of the play Viola says they are still in his keeping, but he is being held by Malvolio in some legal action. His absence from the final reunion is one of the play's small unresolved threads — Viola cannot return to herself without him."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title={tr(`Key Themes`)} icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title={tr(`Disguise and Mistaken Identity`)}
                description="The structural engine of the play. Viola's male disguise generates the love triangle (Orsino loves Olivia, Olivia loves Cesario, Viola loves Orsino), and the twins' identical appearance allows Shakespeare to resolve it. Disguise creates both comedy (Sir Andrew's terror at the duel) and pain (Antonio's anguished sense of betrayal). Viola's own line — 'Disguise, I see thou art a wickedness' — registers Shakespeare's awareness that the trick has moral cost. The play ends with Viola still in male clothes; the disguise is never fully undone onstage."
              />
              <ThemeCard
                title={tr(`Love and Madness`)}
                description="Every form of love in the play looks like madness. Orsino's Petrarchan obsession, Olivia's instant infatuation with Cesario, Malvolio's delusion that Olivia loves him, Antonio's devotion to Sebastian — all are described as 'midsummer madness' or close to it. Shakespeare uses the word 'mad' obsessively in Acts 3 and 4. The play asks whether love is ever rational, and whether the difference between true love and self-deluding fantasy is one society can reliably make."
              />
              <ThemeCard
                title={tr(`Gender and Performance`)}
                description="Viola plays Cesario, who is played in Shakespeare's company by a boy actor playing a girl playing a boy. The layered performance lets the play test what masculinity and femininity actually are: Cesario is too soft to fight, too direct to flirt, too honest to lie. Orsino's affection for Cesario, before he knows 'he' is a woman, blurs the boundaries. Twentieth- and twenty-first-century criticism (Stephen Greenblatt, Marjorie Garber) reads the play as a foundational text of the performance theory of gender."
              />
              <ThemeCard
                title={tr(`Class and Festivity`)}
                description="The play takes its title from Twelfth Night — the festive end of Christmas, the last night of the Lord of Misrule, a time when ordinary social hierarchies were inverted. Sir Toby and Maria embody this misrule; Malvolio resists it. The Malvolio sub-plot is, in part, about a steward who tries to rise in rank by marrying his lady, and is punished for it. C. L. Barber's classic study Shakespeare's Festive Comedy reads the whole play as the dramatised release and reform of holiday energy."
              />
              <ThemeCard
                title={tr(`Music and Melancholy`)}
                description="Twelfth Night is the most musical of Shakespeare's comedies. It opens with music, and ends with Feste singing alone. Music is the food of love, the consolation for grief, the medium of memory. Yet most of Feste's songs are sad: 'Come away, come away, death' is a song of hopeless love; the final 'wind and the rain' song is openly melancholy. Music in the play promises festivity but delivers pensiveness — it is part of how Shakespeare keeps the comedy edged with sorrow."
              />
              <ThemeCard
                title={tr(`Foolery and Wisdom`)}
                description="The fool, Feste, is paradoxically the wisest character. Viola says of him, 'This fellow is wise enough to play the fool'. He is the only one who moves between the two great houses, who diagnoses Orsino's mind ('thy mind is a very opal'), and who closes the play. Through Feste, Shakespeare develops a Renaissance commonplace — that licensed folly speaks truths that ordinary speech cannot — into a structural principle. The fool's epilogue song reframes the whole comedy."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title={tr(`Key Quotations with Analysis`)} icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              Verbatim Folio quotations (modernised spelling) for exam revision. Each is verifiable
              against the 1623 First Folio text of Twelfth Night, or What You Will.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="If music be the food of love, play on."
                speaker="Orsino, 1.1"
                analysis="The play's celebrated opening line. Orsino frames love as something to be fed and indulged: he wants 'excess of it,' so that the appetite may 'sicken, and so die.' The metaphor reveals Orsino's self-indulgent, almost masochistic relation to his own emotion. Music as 'food' makes love a sensory consumption rather than a relationship. Within ten lines Orsino changes his mind ('Enough; no more') — Shakespeare is signalling at once that this Duke's feelings are theatrical and unstable."
              />
              <QuoteCard
                quote="What country, friends, is this?"
                speaker="Viola, 1.2"
                analysis="Viola's first line in the play, immediately after the shipwreck. The simplicity is striking: a survivor in a strange place, asking the most basic question. Throughout the play Illyria functions as a half-magical 'where' — close to Italian comic geography but unmistakably elsewhere. By making Viola ask this aloud, Shakespeare establishes both her vulnerability and the audience's sense that this is a romance world where ordinary rules are suspended."
              />
              <QuoteCard
                quote="Conceal me what I am, and be my aid / For such disguise as haply shall become / The form of my intent."
                speaker="Viola, 1.2"
                analysis="The decision that drives the entire plot. Viola asks the Sea-Captain to hide her identity so she can take male disguise. 'Concealment' is the active first verb — disguise here is an act of self-erasure. The triple 'me what I am' / 'such disguise' / 'form of my intent' moves from being to costume to purpose, mapping how identity will be reconstructed performatively across the play."
              />
              <QuoteCard
                quote="Make me a willow cabin at your gate, / And call upon my soul within the house."
                speaker="Viola as Cesario, 1.5"
                analysis="Viola, sent to woo Olivia for Orsino, instead delivers this stunning declaration of what she would do if she loved Olivia. The willow is the traditional emblem of unrequited love. The image of building a small shelter at the beloved's gate and calling out is unmistakably erotic-yearning, and it works precisely because it is sincere — Viola is describing the love she actually feels (for Orsino), routed through the mask of Cesario. Olivia is captured by it. The speech is the play's most intoxicating moment of cross-currented desire."
              />
              <QuoteCard
                quote="Better a witty fool than a foolish wit."
                speaker="Feste, 1.5"
                analysis="Feste's defence of his profession when Olivia threatens to dismiss him. The neat antithesis turns 'wit' and 'fool' inside out: a clever fool is preferable to a stupid clever person. This is Shakespeare's compressed version of the Renaissance topos of wise folly — the idea, common in Erasmus and elsewhere, that the licensed fool sees truths the courtly wit cannot. From this scene onwards, Feste is established as the play's most reliable diagnostic intelligence."
              />
              <QuoteCard
                quote="Disguise, I see thou art a wickedness, / Wherein the pregnant enemy does much."
                speaker="Viola, 2.2"
                analysis="Alone after Malvolio brings the ring, Viola realises Olivia loves Cesario. 'Wickedness' is a startlingly strong word in a comic plot — Viola sees that her disguise has caused real damage. 'Pregnant enemy' (the Devil, fertile in mischief) raises the moral stakes. This soliloquy is the play's main piece of moral self-awareness about cross-dressing: Shakespeare lets his heroine name the cost of her own trick."
              />
              <QuoteCard
                quote="She never told her love, / But let concealment, like a worm i' the bud, / Feed on her damask cheek."
                speaker="Viola as Cesario, 2.4"
                analysis="Viola, talking to Orsino about an imagined sister (herself), gives one of Shakespeare's most beautiful images of repressed feeling. The worm in the rosebud — concealment as parasite — is exactly the situation Viola is in: hiding love, kept from speech. 'Damask cheek' (red-and-white roses) is a Petrarchan colour, but here drained by interior consumption. This is an A-Level set-piece for repression, female silence, and the cost of disguise."
              />
              <QuoteCard
                quote="I am all the daughters of my father's house, / And all the brothers too."
                speaker="Viola as Cesario, 2.4"
                analysis="The second half of the same speech. The grammar is doubled — Viola is at once daughter and brother because she believes Sebastian dead and is now performing his role. The line is one of the most cited in the play: it makes explicit that Viola has absorbed Sebastian into herself. After Stephen Greenblatt's biographical reading (Will in the World) linking the line to Shakespeare's grief for his dead son Hamnet, twin to Judith, this passage has become inseparable from the question of how the personal can shape comedy."
              />
              <QuoteCard
                quote="Dost thou think, because thou art virtuous, there shall be no more cakes and ale?"
                speaker="Sir Toby, 2.3"
                analysis="Toby's furious reply when Malvolio interrupts the late-night drinking. The line is famously the play's slogan for anti-puritanism: festive pleasures cannot be banished by moral censure. 'Cakes and ale' became proverbial for ordinary human happiness against killjoy religion. This is the Twelfth Night ethic in one sentence — and it is what Malvolio's punishment is supposed to enforce."
              />
              <QuoteCard
                quote="Some are born great, some achieve greatness, and some have greatness thrust upon 'em."
                speaker="The forged letter, read aloud by Malvolio, 2.5"
                analysis="Maria's bait — the line written into the forged letter that Malvolio finds and reads. Its rhetorical balance (born / achieve / thrust) is so seductive that Malvolio cannot resist applying it to himself. The third clause is the trap: 'thrust upon him' is exactly what Maria intends to do. The aphorism became one of Shakespeare's most quoted lines because the structure works independently of the trick. In context, it is a tool of class-aspirational self-deception."
              />
              <QuoteCard
                quote="Love sought is good; but given unsought is better."
                speaker="Olivia, 3.1"
                analysis="Olivia's open declaration of love to Cesario. The chiasmus (sought / given unsought) inverts the conventional Petrarchan dynamic in which the male suitor seeks and the woman is reluctantly won. Olivia claims that love offered freely — by the woman, here — is the higher kind. The line is one of the play's clearest expressions of female desire as active rather than passive, and it directly contradicts Orsino's later speech about how women's love is 'too weak to hold so much.'"
              />
              <QuoteCard
                quote="Why, this is very midsummer madness."
                speaker="Olivia, 3.4"
                analysis="Olivia's reaction to Malvolio in yellow stockings, smiling and quoting the letter. 'Midsummer madness' invokes the medieval belief that the heat of midsummer drove people mad — relevant because this is Twelfth Night, mid-winter, so the phrase is metaphorical. Within the play, 'madness' is also Olivia's own state (Cesario), Orsino's (love-sickness), and Antonio's grief — Malvolio's spectacle is, for Olivia, only the most visible form of a general derangement."
              />
              <QuoteCard
                quote="Or I am mad, or else this is a dream."
                speaker="Sebastian, 4.1"
                analysis="Sebastian, finding himself wooed by Olivia, can only frame his situation as either madness or dream. The disjunction is significant: in Twelfth Night, both options apply to almost everyone at some point. Sebastian's quiet acceptance — he chooses to enjoy the dream — contrasts with Malvolio's resistance. Where Malvolio is punished for trying to make a fantasy real, Sebastian walks into a real fantasy and is rewarded with marriage."
              />
              <QuoteCard
                quote="I am not what I am."
                speaker="Viola as Cesario, 3.1"
                analysis="Viola's reply to Olivia's question of what she really is. The line is doubly resonant: the same words are used by Iago in Othello to declare deception ('I am not what I am'), but here the speaker is sincere, simply unable to identify herself within the rules of the disguise. Shakespeare reuses the formula to opposite ethical effect — Viola is honest in her dishonesty. The negative copula collapses identity into pure performance."
              />
              <QuoteCard
                quote="Most wonderful!"
                speaker="Olivia, 5.1"
                analysis="Olivia's exclamation when she sees the twins together for the first time. Two words, but they carry the whole reunion. 'Wonderful' here means 'full of wonder' in the older Renaissance sense — astonishment at the romance-world resolution. Critics from Northrop Frye onwards have noted that Shakespearean comedy turns on this moment of impossible recognition; Twelfth Night condenses it into Olivia's small, almost involuntary cry."
              />
              <QuoteCard
                quote="I'll be revenged on the whole pack of you."
                speaker="Malvolio, 5.1"
                analysis="Malvolio's exit line — and one of the most disquieting endings in Shakespearean comedy. Where every other character is moving towards reconciliation and marriage, Malvolio refuses the festive resolution and storms out vowing revenge. 'Pack' is an animal word — he reduces his tormentors to a pack of hunting dogs. The line forces the audience to recognise that the comedy has been built partly on cruelty, and the cruelty has not been forgiven."
              />
              <QuoteCard
                quote="When that I was and a little tiny boy, / With hey, ho, the wind and the rain."
                speaker="Feste, 5.1"
                analysis="The opening of Feste's epilogue song, alone onstage after everyone else has gone in. Each stanza tracks a stage of life (boyhood, manhood, marriage, drunkenness, age) and ends with the same refrain about 'the wind and the rain.' The song flips the comedy's mood: the marriages are inside, but Feste sings of weather, time, decline. Many directors and critics regard this as the moment Twelfth Night refuses to be a simple comedy. The play is finished by an old fool reminding us that 'the rain it raineth every day.'"
              />
              <QuoteCard
                quote="And thus the whirligig of time brings in his revenges."
                speaker="Feste, 5.1"
                analysis="Feste's reply to Malvolio shortly before Malvolio's exit. The 'whirligig' (a child's spinning top) makes time itself a turning toy: what goes around comes around. Feste reminds Malvolio that he, Feste, was insulted by him in Act 1 — and now the wheel has turned. The line is structurally crucial: Feste interprets the play's plot as cyclical justice rather than romantic accident, complicating any reading of the Malvolio plot as casual cruelty."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title={tr(`Symbols and Motifs`)} icon="🔍">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  Viola&apos;s Disguise (the Cesario costume)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The male clothes Viola assumes in 1.2 are the play&apos;s structural symbol. They
                  allow her to enter Orsino&apos;s court, generate Olivia&apos;s misdirected love,
                  and produce the twins-mistaken-for-twins resolution. Crucially, the disguise is
                  never undone onstage: Viola&apos;s women&apos;s clothes are in the keeping of the
                  Sea-Captain, who is being detained at the play&apos;s end. Viola becomes
                  Orsino&apos;s wife while still dressed as Cesario. Many critics treat this as
                  Shakespeare&apos;s most subversive symbolic gesture &mdash; the comedy ends with
                  the heroine in trousers.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  {tr(`Yellow Stockings and Cross-Garters`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The clothing Malvolio adopts after reading the forged letter. Yellow was
                  associated with jealousy and was a colour Olivia is said to detest; cross-garters
                  (criss-crossed leg-bindings) were fashionable but emphatically not in the puritan
                  style. Together they make Malvolio absurd, but they are also signs of his fantasy
                  of class-elevation: he believes he is dressing as Olivia&apos;s husband. The
                  stockings symbolise the catastrophic gap between his self-image and the truth.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Forged Letter`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Maria&apos;s letter is the central prop of the sub-plot. It works through textual
                  interpretation: Malvolio &ldquo;reads&rdquo; M.O.A.I., decides it spells him, and
                  constructs a delusional narrative from it. The letter symbolises the danger of
                  self-flattering reading &mdash; how a written text can be made to reflect whatever
                  the reader most wants to find. It also operates as a parody of the love-letter
                  convention central to Petrarchan courtship in the main plot.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">
                  The Wind and the Rain (Feste&apos;s song)
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The closing song&apos;s refrain &mdash; &ldquo;the wind and the rain&rdquo;
                  &mdash; symbolises the ordinary, unromantic continuance of life beyond the comic
                  resolution. Where comedy ends with marriage, weather goes on. The repeated weather
                  refrain undercuts the comic music of the play: every stanza, no matter what stage
                  of life, returns to the same wet, wind-blown reality. Shakespeare uses the song as
                  a structural counterweight to the festivity of the title.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`The Dark Room`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The space where Malvolio is imprisoned in Act 4 as a &ldquo;madman.&rdquo;
                  Symbolically, the dark room reverses the play&apos;s festive light: instead of
                  midsummer madness as joyful release, here madness is enforced punishment. The room
                  is a literal version of the metaphor &mdash; Malvolio is in the dark, while Feste,
                  in the curate&apos;s costume of Sir Topas, decides what reality is. This is the
                  most disturbing symbol in the play: madness as a thing one person can impose on
                  another.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Ring</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The ring Olivia sends after Cesario at the end of Act 1, claiming Cesario left it
                  behind. The ring is fictional &mdash; Cesario never gave it &mdash; and is the
                  first sign that Olivia has fallen in love. Symbolically, the ring is a circular
                  object of completion (and conventional sign of betrothal) used here as a lie. It
                  marks the moment when Viola realises she has &ldquo;made the breach&rdquo; in
                  Olivia&apos;s heart, and her soliloquy on &ldquo;disguise&rdquo; follows
                  immediately. The whole emotional knot of the play is encoded in this single
                  circular prop.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title={tr(`Historical and Literary Context`)} icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Composition (c.1601&ndash;1602)`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Twelfth Night was probably written in 1601&ndash;1602. The first recorded
                  performance is in the diary of John Manningham, a law student at the Middle
                  Temple, who saw it on 2 February 1602 (Candlemas) and noted its resemblance to
                  Plautus&apos;s <em>Menaechmi</em> and to an Italian play called <em>Inganni</em>.
                  The text we now read was first printed in the 1623 First Folio, where it appears
                  among the Comedies; no quarto edition survives.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`The Twelfth Night Holiday`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play&apos;s title refers to the festive end of the twelve days of Christmas
                  &mdash; the evening of 5 January, the eve of Epiphany. In the Elizabethan and
                  earlier English tradition, Twelfth Night was the climax of the Christmas misrule:
                  a Lord of Misrule (or in the universities, a &ldquo;Boy Bishop&rdquo;) was crowned
                  to invert ordinary social hierarchies. Servants were served by masters, men
                  dressed as women, drinking and disorder were licensed. The subtitle &ldquo;What
                  You Will&rdquo; gestures at this licence: anything goes. Shakespeare&apos;s play
                  dramatises both the joy and the limits of such inversion &mdash; the comedy ends
                  with order restored, but Malvolio&apos;s exit shows the cost of the festive
                  licence.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Illyria as Italianate Setting`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Illyria was the ancient name for the eastern Adriatic coast (roughly modern
                  Croatia and Albania), but for Shakespeare and his audience it functioned mainly as
                  a romance-name: an exotic Mediterranean nowhere where dukes are lovesick and
                  storms wash up disguised heroines. Italian comic theatre &mdash; especially the
                  commedia dell&apos;arte and Italian prose comedies &mdash; lies behind much of the
                  plot architecture: a 1531 Italian play <em>Gl&apos;Ingannati</em>
                  (&ldquo;The Deceived&rdquo;) features a cross-dressing girl wooing one woman for a
                  man she herself loves. Shakespeare&apos;s Illyria is half-real geography,
                  half-stage-comedy fairyland.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Boy Actors and the Cross-Dressing Stage`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Women did not perform on the public stage in Shakespeare&apos;s England; female
                  roles were played by boys and young men. So when Viola disguises herself as
                  Cesario, the Elizabethan audience saw a boy actor playing a young woman playing a
                  young man. This added a layer of metatheatrical play that modern productions can
                  only approximate. Critics from Stephen Orgel to Marjorie Garber and Stephen
                  Greenblatt have argued that this stage convention shaped the play&apos;s ideas
                  about gender as performance rather than essence.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Shakespeare&apos;s Late Comedies, Before the Problem Plays
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Twelfth Night sits at the end of Shakespeare&apos;s great romantic comedy phase,
                  just before the &ldquo;problem plays&rdquo; (<em>{tr(`Measure for Measure`)}</em>,{' '}
                  <em>{tr(`All&apos;s Well That Ends Well`)}</em>) and the great tragedies (
                  <em>Hamlet</em> was probably written within a year either side of Twelfth Night).
                  The play already shows the darkening edge of the later comedies: Malvolio&apos;s
                  humiliation, Antonio&apos;s exclusion, and Feste&apos;s closing song push the
                  comedy towards a tone the earlier romantic plays do not reach. Many critics
                  describe Twelfth Night as the &ldquo;last&rdquo; or &ldquo;ripest&rdquo; festive
                  comedy &mdash; the moment before Shakespeare&apos;s comic mood gives way.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  {tr(`Hamnet and Judith: the Twin Connection`)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Stephen Greenblatt&apos;s <em>{tr(`Will in the World`)}</em> (2004) influentially
                  links Twelfth Night to the death of Shakespeare&apos;s only son Hamnet in 1596
                  &mdash; Hamnet was twin brother to Judith. Greenblatt argues that Viola&apos;s
                  anguish at believing her twin Sebastian dead, and her line &ldquo;I am all the
                  daughters of my father&apos;s house, / And all the brothers too,&rdquo; carries
                  Shakespeare&apos;s own bereavement. Sebastian&apos;s late survival becomes, on
                  this reading, a wishful resurrection of the lost twin. Greenblatt&apos;s reading
                  is speculative biography but has reshaped how A-Level and undergraduate criticism
                  reads the play.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Festive Comedy: C. L. Barber`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  C. L. Barber&apos;s <em>{tr(`Shakespeare&apos;s Festive Comedy`)}</em> (1959)
                  defined the dominant twentieth-century reading of Twelfth Night. Barber argued
                  that Shakespeare&apos;s comedies follow a pattern of &ldquo;saturnalian release
                  and clarification&rdquo; &mdash; festive inversion temporarily releases social
                  pressure, then releases its participants back into a reformed normal. Twelfth
                  Night fits the pattern, but it also strains it: Malvolio&apos;s refusal of
                  resolution, Feste&apos;s closing song, and Antonio&apos;s pain mark the limits of
                  the festive model. Later critics (Leah Marcus, Anne Barton) have read the play as
                  testing rather than confirming Barber&apos;s thesis.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">{tr(`Puritanism and the Stage`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Maria calls Malvolio &ldquo;a kind of puritan,&rdquo; though she immediately
                  qualifies the label. Shakespeare wrote in a culture where puritan opposition to
                  the theatre was loud and growing: pamphlets condemned plays as moral pollution,
                  and London puritan authorities regularly tried to close the playhouses.
                  Malvolio&apos;s killjoy interruption of the midnight revel is one of
                  Shakespeare&apos;s sharpest in-house jokes about this opposition. Forty-one years
                  after Twelfth Night, in 1642, the puritan Parliament closed the theatres for
                  eighteen years. Malvolio&apos;s threat &mdash; &ldquo;I&apos;ll be revenged on the
                  whole pack of you&rdquo; &mdash; reads, in retrospect, almost prophetic.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── STRUCTURE */}
        <div id="structure">
          <Section title={tr(`Structure and Dramatic Form`)} icon="🔗">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Twin-Plot Symmetry`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play runs two plots in parallel: the romance triangle of Orsino, Olivia, and
                  Viola/Sebastian; and the gulling of Malvolio in the Olivia household. Both turn on
                  misreading: Olivia misreads Cesario&apos;s sex, Malvolio misreads the letter. Both
                  end in promises of marriage (Viola/Orsino, Sebastian/Olivia, Toby/Maria) &mdash;
                  except Malvolio, who is left out. Shakespeare crosses the two plots structurally
                  so that the gulling and the romance climax in the same Act 5 scene.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Five-Act Comic Architecture`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Twelfth Night follows the standard Shakespearean comic shape: setup of confusion
                  (Acts 1&ndash;2), intensification (Act 3), crisis (Act 4), and resolution (Act 5).
                  The hinge of the play is Antonio&apos;s arrest in 3.4: it is the moment Viola
                  realises Sebastian may be alive, and the audience knows resolution is possible.
                  Act 4 then introduces Sebastian into Olivia&apos;s world, setting up Act 5&apos;s
                  recognition scene.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Soliloquy and Interiority`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Viola has the play&apos;s most intimate soliloquies (&ldquo;Disguise, I see thou
                  art a wickedness&rdquo;, the &ldquo;ring&rdquo; soliloquy of 2.2). These give her
                  an interiority no other character reaches. Malvolio also has a long fantasy speech
                  in 2.5 (&ldquo;To be Count Malvolio&rdquo;), but his is overheard by the
                  conspirators &mdash; his interiority is mocked, where Viola&apos;s is privileged.
                  The play distributes its interiority asymmetrically: empathy is not equal.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Songs as Structural Pillars`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Songs structure the play unusually heavily. Feste sings &ldquo;O mistress
                  mine&rdquo; in 2.3 (carpe diem, festive), &ldquo;Come away, come away,
                  death&rdquo; in 2.4 (love-as-death, melancholy), and &ldquo;The wind and the
                  rain&rdquo; in 5.1 (after-the-comedy melancholy). The songs trace an emotional arc
                  from holiday energy to bittersweet acceptance. They also belong to a single
                  character &mdash; Feste &mdash; whose voice frames the comedy from inside it.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">{tr(`Open-ended Closure`)}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Act 5 ending is conspicuously incomplete. Viola is still in male clothes; the
                  Sea-Captain is detained; Antonio is unmarried; Malvolio storms off vowing revenge;
                  Feste sings alone of weather. The marriages are announced but not staged. This
                  unfinished quality is one of the reasons critics often class Twelfth Night with
                  the &ldquo;dark&rdquo; or &ldquo;late&rdquo; comedies even though it precedes the
                  official problem plays.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── ESSAY PLANNING */}
        <div id="essay-planning">
          <Section title={tr(`Essay Planning for Common Questions`)} icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Model essay plans for the most frequently examined questions. Each plan includes a
              thesis, paragraph structure, and suggested quotations.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: Discuss the role of disguise in Twelfth Night.
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Disguise is both the comic engine of Twelfth Night and its moral problem:
                      Shakespeare uses Viola&apos;s cross-dressing to generate festive confusion,
                      but he also lets her name it as &ldquo;wickedness,&rdquo; refusing to let the
                      comedy off lightly.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Disguise as plot mechanism
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Conceal me what I am.&rdquo; Show how Viola&apos;s disguise generates
                      the love triangle and ultimately the twins-resolution. Without the disguise,
                      no plot. Use Folio Act 1 evidence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Disguise as moral cost
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Disguise, I see thou art a wickedness.&rdquo; Viola&apos;s 2.2
                      soliloquy. Argue that Shakespeare lets disguise be self-aware: the heroine
                      criticises her own deception in private.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Disguise and gender performance
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Boy actor &rarr; Viola &rarr; Cesario layers. Connect to Greenblatt and Garber
                      on gender as performance. Use the &ldquo;willow cabin&rdquo; speech: a woman
                      performing a man performing love.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Disguise and Malvolio
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Disguise is not only Viola&apos;s. Feste disguises as Sir Topas; Malvolio
                      disguises his class-aspiration in puritanism. Argue that everyone in Illyria
                      is performing, and the play asks who pays the price.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Viola is still in male clothes at the end; her women&apos;s clothes are
                      off-stage with the detained Captain. The disguise is never fully resolved
                      &mdash; Shakespeare&apos;s comic logic stops just short of restoration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: How does Shakespeare present love as a kind of madness?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Twelfth Night repeatedly equates love with madness, but Shakespeare
                      distinguishes between the productive madness of festive recognition and the
                      destructive madness of self-deception &mdash; with Malvolio paying for the
                      second.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Orsino&apos;s Petrarchan excess
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;If music be the food of love, play on.&rdquo; Argue that Orsino&apos;s
                      love is performance &mdash; he is in love with the experience of loving. Use
                      his constant changes of mind as evidence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Olivia&apos;s instant infatuation
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Love sought is good; but given unsought is better.&rdquo; Olivia&apos;s
                      love for Cesario is presented as both irrational and authentic. The vow of
                      mourning is broken in minutes. Madness here means freedom from prior
                      commitment.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Malvolio&apos;s dangerous fantasy
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Why, this is very midsummer madness.&rdquo; Olivia diagnoses Malvolio.
                      But the conspirators take her diagnosis literally and lock him in the dark
                      room. Argue that Malvolio is punished because his madness is interpretive, not
                      affective &mdash; he reads a text wrong.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Antonio&apos;s grief
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Antonio&apos;s love for Sebastian is the most painful in the play. His sense
                      of betrayal in 3.4 reads almost as a mad-scene of devotion. Connect to
                      queer-theory readings: a kind of love that cannot be married off into festive
                      resolution.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare distributes love-madness across the comic and tragic registers.
                      The marriages are formed; Malvolio storms out; Antonio is left alone. The
                      play&apos;s &ldquo;cure&rdquo; for love-madness is partial, not universal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: How does Twelfth Night dramatise the festive holiday of its title?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare stages Twelfth Night not just as the title of a holiday but as the
                      dynamic of holiday itself: festive inversion (Sir Toby, Maria), the puritan
                      resistance to it (Malvolio), and the bittersweet recognition that festivity
                      ends (Feste&apos;s closing song).
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Misrule embodied
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Sir Toby and Maria&apos;s midnight revel as Twelfth Night Lord-of-Misrule
                      scene. &ldquo;Cakes and ale&rdquo; as anti-puritan slogan. Festivity as social
                      loosening.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Festive inversions
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cross-dressing (Viola), low-character marrying steward-class (Maria/Toby),
                      fool acting curate (Feste/Sir Topas). Argue that the play formalises the
                      holiday convention of inversion through its plot structures.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The puritan resistance
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Malvolio as &ldquo;a kind of puritan&rdquo;; the gulling as the holiday&apos;s
                      revenge on the killjoy. Connect to Barber&apos;s &ldquo;saturnalian
                      release.&rdquo; But complicate: the punishment&apos;s cruelty undermines the
                      festive ethic it supposedly defends.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The end of the holiday
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;The wind and the rain.&rdquo; Feste&apos;s final song reframes the
                      comedy as a thing finishing. Twelfth Night is the LAST night of Christmas, and
                      the play knows it: this is festivity facing its own ending.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The play does not just borrow the holiday for its title; it dramatises the
                      structure of a feast that knows it is ending, and it asks what social order
                      can survive the morning after.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: To what extent is Malvolio&apos;s treatment a problem for the comedy?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Malvolio&apos;s exit refuses comic resolution and exposes the cruelty inside
                      the festive ethic; it is not an accident of tone but Shakespeare&apos;s
                      deliberate test of how much the comedy can absorb.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Reasons given for the gulling
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Maria: &ldquo;a kind of puritan.&rdquo; Sir Toby: &ldquo;cakes and ale.&rdquo;
                      Fabian: he reported him for bear-baiting. Examine the play&apos;s own
                      justifications for the punishment.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Cruelty escalates
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Yellow stockings (humiliation) &rarr; dark room (imprisonment) &rarr; Sir
                      Topas (mock exorcism). Argue that the punishment passes the point of festive
                      justice into something sustained and disturbing.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Class anxiety
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      A modern reading: Malvolio is also punished for ambition above his rank
                      &mdash; for the fantasy of marrying his lady. The comedy may police class
                      boundaries as much as religious style. Connect to Cristina Malcolmson&apos;s
                      critical work on stewards and class on the Elizabethan stage.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The exit line
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I&apos;ll be revenged on the whole pack of you.&rdquo; The other
                      characters offer to entreat him to a peace, but he leaves anyway. The comedy
                      is therefore structurally incomplete &mdash; one major figure refuses
                      inclusion.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare deliberately stops the comedy short. Malvolio is the price of the
                      festive ending, and the play forces us to look at that price. This is what
                      makes Twelfth Night more than a holiday play.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  A-Level: What is the function of Feste in Twelfth Night?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Feste is the play&apos;s structural intelligence: the only character who moves
                      between the two great houses, the figure who diagnoses each character&apos;s
                      folly, and the voice that reframes the comedy into something more melancholy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Wise folly
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Better a witty fool than a foolish wit.&rdquo; The Renaissance topos of
                      the wise fool. Feste&apos;s exchanges with Olivia, Viola, and Orsino. Quote
                      Viola&apos;s &ldquo;This fellow is wise enough to play the fool.&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The professional
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Feste is paid in coins by Orsino, by Viola, by Sebastian. The play emphasises
                      the economic side of folly. He is the only mobile character &mdash; he
                      literally crosses the play&apos;s social geography.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Sir Topas
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Feste&apos;s curate-disguise. The dark scene is the play&apos;s most morally
                      compromised, and Feste is its agent. Argue that the fool is not innocent
                      &mdash; he participates in cruelty as well as wit.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The closing song
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;When that I was and a little tiny boy.&rdquo; The fool ends the play
                      alone, narrating an entire life-cycle while everyone else is offstage
                      marrying. Feste&apos;s final word is the play&apos;s real ending &mdash; a
                      balance to the festive resolution that nobody else is qualified to deliver.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Feste is not comic relief. He is the comedy&apos;s commentary on itself.
                      Without him the play would be a romance; with him it is something cooler,
                      closer to autumnal.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE: How does Shakespeare present Viola in Twelfth Night?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare presents Viola as resourceful, emotionally honest, and morally
                      aware: she takes on a male disguise to survive, but unlike the other
                      characters she remains self-critical about the costs of her performance.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Resourceful in crisis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;What country, friends, is this?&rdquo; Show how Viola adapts
                      immediately to the new world &mdash; her plan to disguise herself is practical
                      survival, not escapade.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Her honest love
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;She never told her love.&rdquo; Viola loves Orsino in silence. Her
                      account of an &ldquo;imagined sister&rdquo; is really her own story.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Moral self-awareness
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Disguise, I see thou art a wickedness.&rdquo; Unlike Orsino or Olivia,
                      Viola criticises her own behaviour. She is the most reflective character in
                      the play.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare uses Viola to show that comedy can have depth: she navigates love,
                      loss, and gender with intelligence and conscience.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE: How is the theme of mistaken identity used in Twelfth Night?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare uses mistaken identity as both a source of comedy and a way of
                      testing how well the characters know one another &mdash; with Viola,
                      Sebastian, and Antonio at the centre of a chain of recognitions and
                      misrecognitions.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Olivia falls for Cesario
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Olivia thinks Cesario is a young man and falls in love with &ldquo;him.&rdquo;
                      The willow-cabin speech makes the mistake feel inevitable.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Antonio mistakes Cesario for Sebastian
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In 3.4 Antonio rescues Cesario from the duel because he thinks he is
                      Sebastian. His later pain when he believes himself betrayed shows mistaken
                      identity has real emotional cost.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The recognition scene
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Most wonderful!&rdquo; In Act 5 the twins meet and the truth is
                      recognised. Olivia&apos;s amazement and Viola&apos;s &ldquo;I am all the
                      daughters of my father&apos;s house, / And all the brothers too&rdquo; resolve
                      the chain of mistakes.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare turns the practical jokes of mistaken identity into a serious test
                      of love and loyalty. The characters are sorted by how well they handle being
                      mistaken.
                    </p>
                  </div>
                </div>
              </div>

              {/* GCSE Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  GCSE: How does Shakespeare present Malvolio?
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Shakespeare presents Malvolio as a comic target whose punishment is sharp
                      enough to make us question the comedy itself: he is vain and self-important,
                      but the play&apos;s treatment of him pushes us towards sympathy.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Vanity and ambition
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Some are born great, some achieve greatness, and some have greatness
                      thrust upon &apos;em.&rdquo; Malvolio loves the line because he wants it to
                      apply to him. His fantasy of marrying Olivia is class ambition as well as
                      romantic delusion.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Public humiliation
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;Why, this is very midsummer madness.&rdquo; Yellow stockings,
                      cross-garters, smiling. Olivia thinks he is mad, exactly as Maria intended.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The dark room
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Imprisoned, exorcised by the fool. The cruelty makes the audience
                      uncomfortable. Malvolio is no longer just a comic butt; the punishment
                      overshoots the offence.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &ldquo;I&apos;ll be revenged on the whole pack of you.&rdquo; Malvolio leaves
                      the comedy with that line, and the audience leaves it with that taste.
                      Shakespeare uses him to show the limit of what comedy can forgive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* ────────────────────────────────── GRADE 9 POINTS */}
      <div id="grade-9">
        <Section title={tr(`Grade 9 / A* Exemplar Points and Interpretations`)} icon="⭐">
          <p className="text-sm text-muted-foreground mb-4 italic">
            These higher-level interpretations demonstrate the sophisticated analysis needed for top
            grades. Each goes beyond surface reading to consider authorial intent, alternative
            readings, and structural significance.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                1. The Comedy That Refuses to Close
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Twelfth Night ends with three formal incompletions: Viola is still in male clothes,
                Antonio is unpartnered, and Malvolio refuses reconciliation. Shakespeare denies us
                the standard comic close. A Grade 9 reading argues that this is structural, not
                accidental. The play is the last of the festive comedies precisely because it knows
                the festivity cannot accommodate everyone. The marriages are real, but the costs are
                visible. This is a comedy that lets the audience see its own seams.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                2. Greenblatt and the Grief Reading
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Stephen Greenblatt&apos;s biographical reading in Will in the World ties the
                play&apos;s twin-plot to Shakespeare&apos;s loss of his only son Hamnet (twin to
                Judith) in 1596. Viola believes Sebastian dead; she carries his memory inside
                herself (&ldquo;I am all the daughters of my father&apos;s house, / And all the
                brothers too&rdquo;); and Sebastian, against the rules of mourning, returns.
                Greenblatt&apos;s reading is conjectural, but it gives critical purchase to the
                strangely intense pathos beneath what looks like a cheerful comedy. The festive form
                is being asked to bear personal grief.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                3. The Layered Theatricality of Cesario
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                On the Elizabethan stage, a boy actor played a young woman (Viola) playing a young
                man (Cesario). The boy&apos;s body, the female character, and the male disguise
                stack into one performance. When Orsino looks at Cesario in 1.4 and remarks how
                feminine his lips and voice are, the joke runs through three levels at once. Modern
                readings (Stephen Orgel, Marjorie Garber, Valerie Traub) argue that Twelfth Night is
                therefore Shakespeare&apos;s most self-aware piece on gender as performance, written
                into the play not as a theme but as a stage condition.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                4. Antonio and the Limits of Comic Inclusion
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Antonio&apos;s love for Sebastian is described in language as devoted as any in the
                play: he gives him his purse, follows him into legal danger, and grieves at apparent
                betrayal. Yet at the end of the comedy, when every other figure pairs off, Antonio
                is silent and unmarried. Modern criticism (Joseph Pequigney, Bruce R. Smith) reads
                this as Shakespeare staging the structural limit of his comic form: not all loves
                can be married, and the play is honest enough to leave Antonio standing alone. A
                top-grade response treats Antonio not as a minor character but as a deliberate
                negative space in the resolution.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                5. &ldquo;I am not what I am&rdquo; and Iago
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Viola&apos;s &ldquo;I am not what I am&rdquo; (3.1) uses the same words Iago uses to
                declare his villainy in Othello. Shakespeare wrote the two plays close in time. The
                repetition is unlikely to be accidental. Where Iago&apos;s line is malign deception,
                Viola&apos;s is forced disguise &mdash; she is hiding to survive, not to destroy.
                Reading the two lines side by side argues that Shakespeare uses identical language
                to map opposite ethics, raising the deep question of when concealment is wickedness
                and when it is necessity.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">6. Music as Time</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play opens with Orsino feeding on music; it closes with Feste singing alone.
                Between those two points, music marks every shift of mood: the carpe diem of
                &ldquo;O mistress mine,&rdquo; the love-elegy of &ldquo;Come away, come away,
                death,&rdquo; the after-everything refrain of &ldquo;the wind and the rain.&rdquo;
                Music is the play&apos;s timekeeping. Where prose comedy of the period uses scenes
                and acts to track time, Twelfth Night uses songs. The structural use of music is one
                reason the play is unusually atmospheric &mdash; it is composed as much as plotted.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                7. The Subtitle: &ldquo;What You Will&rdquo;
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play is also titled, in the Folio, &ldquo;or What You Will.&rdquo; The phrase is
                colloquial Elizabethan English for &ldquo;or whatever you want.&rdquo; Read
                structurally, it is Shakespeare advertising the festive licence of his story:
                anything goes, on Twelfth Night. Read sceptically, it is also an admission that the
                title is interchangeable &mdash; the play could be called anything. Some critics
                (Anne Barton) take the subtitle as Shakespeare&apos;s ironic gesture toward the
                increasing arbitrariness of the festive convention he is using.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                8. Class and the Steward
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Modern readings (Cristina Malcolmson, Mark Thornton Burnett) emphasise that Malvolio
                is a steward &mdash; a senior household servant whose ambitions to marry his lady
                would have been received as class-transgressive in Shakespeare&apos;s England. The
                yellow-stockings humiliation and the dark-room imprisonment are then not just
                punishments of vanity but reassertions of class hierarchy disguised as festive
                comedy. The fact that Maria, who plots his downfall, is rewarded with marriage to
                Sir Toby reveals the play&apos;s implicit class economy: certain kinds of mobility
                are licensed, others are mocked.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* ────────────────────────────────── PRACTICE QUESTIONS */}
      <div id="practice-questions">
        <Section title={tr(`Practice Questions`)} icon="📝">
          <p className="text-sm text-muted-foreground mb-4">
            Exam-style questions covering the most commonly tested areas. Consider how you would
            structure a response using PEEL paragraphs, embedded quotations, and contextual links.
          </p>
          <div className="space-y-3">
            {[
              {
                q: 'A-Level: Discuss the role of disguise and performance in Twelfth Night.',
                marks: 25,
              },
              {
                q: 'A-Level: Examine the presentation of love as a kind of madness in Twelfth Night.',
                marks: 25,
              },
              {
                q: 'A-Level: How far does Twelfth Night dramatise the festive holiday of its title?',
                marks: 25,
              },
              {
                q: "A-Level: To what extent is Malvolio's treatment a problem for the play's status as a comedy?",
                marks: 25,
              },
              {
                q: "A-Level: 'Feste is the play's most important character.' Discuss with reference to Twelfth Night.",
                marks: 25,
              },
              { q: 'GCSE: How does Shakespeare present Viola in Twelfth Night?', marks: 30 },
              {
                q: 'GCSE: How is the theme of mistaken identity used in Twelfth Night?',
                marks: 30,
              },
              { q: 'GCSE: How does Shakespeare present Malvolio in Twelfth Night?', marks: 30 },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">Question {i + 1}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.q} <span className="font-semibold">[{item.marks} marks]</span>
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">{tr(`Exam Tips for Twelfth Night`)}</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Always link to context.`)}</strong> The Twelfth Night holiday, the
              boy-actor convention, and Shakespeare&apos;s position at the end of his festive-comedy
              phase are all examiner-friendly references.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Quote precisely.`)}</strong> Use the verbatim Folio quotations &mdash;
              &ldquo;If music be the food of love, play on&rdquo;, &ldquo;Some are born
              great...&rdquo;, &ldquo;I am all the daughters of my father&apos;s house...&rdquo;
              &mdash; rather than paraphrasing.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Read the sub-plot seriously.`)}</strong> The Malvolio plot is half the
              play. Treating it as comic relief loses marks; treat it as Shakespeare&apos;s test of
              the festive ethic.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Cite criticism by name.`)}</strong> Greenblatt on Hamnet, Barber on
              festive comedy, Garber/Orgel on gender performance &mdash; named critics impress
              examiners.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Use precise dramatic terminology.`)}</strong> &ldquo;Soliloquy,&rdquo;
              &ldquo;subplot,&rdquo; &ldquo;recognition scene,&rdquo; &ldquo;saturnalian,&rdquo;
              &ldquo;metatheatrical&rdquo; &mdash; precise terms beat vague ones.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>{tr(`Address the whole play.`)}</strong> Don&apos;t focus only on the extract
              &mdash; reference Feste&apos;s closing song and Malvolio&apos;s exit line to show
              whole-play knowledge.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>{tr(`Twelfth Night, or What You Will`)}</em> by William Shakespeare was first printed
          in the 1623 First Folio. Shakespeare died in 1616 and the text is in the{' '}
          <strong>public domain</strong>. All quotations on this page are reproduced (in modernised
          spelling) from the Folio text of the play.
        </p>
      </footer>
    </>
  )
}
