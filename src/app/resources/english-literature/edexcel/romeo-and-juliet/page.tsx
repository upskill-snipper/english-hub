import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Romeo and Juliet - Edexcel GCSE Literature',
    description:
      'Romeo and Juliet for Edexcel GCSE English Literature Paper 1: plot, characters, themes, key quotes, historical context and exam technique.',
    images: [
      {
        url: '/api/og?title=Romeo+and+Juliet+-+Edexcel+GCSE+Literature',
        width: 1200,
        height: 630,
        alt: 'Romeo and Juliet - Edexcel GCSE Literature',
      },
    ],
  },
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/romeo-and-juliet',
  },
  title: 'Romeo and Juliet - Edexcel GCSE Literature',
  description:
    'Romeo and Juliet for Edexcel GCSE English Literature Paper 1: plot, characters, themes, key quotes, historical context and exam technique.',
}

/* ─── Data ───────────────────────────────────────────────────── */

// Quotations are in the wording of the edition the site holds, Project
// Gutenberg #1513 (src/data/full-texts/romeo-and-juliet.ts), and are cut from
// it rather than typed. Until 2 October 2026 fourteen here were not: "There
// rust" and "An you be mine", other editions' readings, where this edition
// has "There rest" and "And you be mine"; "raised" for "made" in "Love is a
// smoke"; and modern spellings ("star-crossed", "death-marked", "All are
// punished").
// Check a new quotation with `node scripts/check-quotations.mjs --text romeo-and-juliet`.
const PLOT_SUMMARY = [
  {
    act: 'Act 1',
    title: 'The Feud and the Meeting',
    summary:
      'A street brawl between the Montague and Capulet servants is broken up by Prince Escalus, who threatens death to anyone who disturbs the peace again. Romeo, lovesick over Rosaline, is persuaded by Benvolio to attend the Capulet masquerade ball. There, he sees Juliet and they fall instantly in love. Tybalt recognises Romeo and is furious, but Lord Capulet restrains him. Romeo and Juliet share a sonnet and a kiss before discovering they belong to rival families.',
  },
  {
    act: 'Act 2',
    title: 'The Balcony and the Marriage',
    summary:
      "Romeo climbs into the Capulet orchard and overhears Juliet on her balcony lamenting that he is a Montague. They declare their love and plan to marry. With the help of Friar Lawrence - who hopes the marriage will end the feud - and Juliet's Nurse, they are secretly wed that afternoon.",
  },
  {
    act: 'Act 3',
    title: 'Banishment and Despair',
    summary:
      'Tybalt challenges Romeo, who refuses to fight because Tybalt is now his kinsman by marriage. Mercutio fights Tybalt instead and is killed when Romeo intervenes. Enraged, Romeo kills Tybalt in revenge. Prince Escalus banishes Romeo from Verona. Juliet is distraught. Meanwhile, Lord Capulet arranges her marriage to Count Paris. Romeo and Juliet spend one night together before he flees to Mantua.',
  },
  {
    act: 'Act 4',
    title: 'The Desperate Plan',
    summary:
      'Juliet begs Friar Lawrence for help. He gives her a potion that will make her appear dead for 42 hours - she will be placed in the Capulet tomb, and Romeo will rescue her. Juliet takes the potion the night before her wedding to Paris. The Capulet household discovers her apparently lifeless body the next morning.',
  },
  {
    act: 'Act 5',
    title: 'Tragedy and Reconciliation',
    summary:
      "Romeo's servant Balthasar brings news that Juliet is dead - the Friar's letter explaining the plan never reached Romeo. Romeo buys poison and goes to the tomb. He encounters and kills Paris, then drinks the poison beside Juliet. Juliet wakes, finds Romeo dead, and stabs herself with his dagger. The Prince, Montagues, and Capulets arrive. The Friar explains everything. The two families finally reconcile over their children's bodies.",
  },
]

const CHARACTERS = [
  {
    name: 'Romeo',
    description:
      "A young Montague who is passionate, impulsive, and romantic. He moves rapidly from infatuation with Rosaline to genuine love for Juliet. His impulsiveness is his tragic flaw - he kills Tybalt in a rage and later takes his own life without waiting for the Friar's message. Shakespeare uses Romeo to explore how intense emotion can be both beautiful and destructive.",
    key_quotes: [
      '"But soft, what light through yonder window breaks? It is the east, and Juliet is the sun"',
      '"Did my heart love till now? Forswear it, sight! For I ne\'er saw true beauty till this night"',
      '"Then I defy you, stars!"',
      '"O, I am fortune\'s fool!"',
      '"Here\'s to my love! ... Thus with a kiss I die"',
    ],
  },
  {
    name: 'Juliet',
    description:
      'A thirteen-year-old Capulet who matures rapidly through the play. She begins as an obedient daughter but becomes decisive and courageous, defying her father and risking death to be with Romeo. Her language moves from formal and innocent to passionate and complex. She is arguably the stronger and more rational of the two lovers.',
    key_quotes: [
      '"What\'s in a name? That which we call a rose by any other name would smell as sweet"',
      '"My bounty is as boundless as the sea, my love as deep"',
      '"Gallop apace, you fiery-footed steeds"',
      '"O happy dagger. / This is thy sheath. There rest, and let me die"',
      '"My only love sprung from my only hate!"',
    ],
  },
  {
    name: 'Friar Lawrence',
    description:
      "A Franciscan friar who acts as Romeo's mentor and confidant. He agrees to marry the lovers hoping it will end the feud - but his well-intentioned scheming leads to disaster. He represents the theme of good intentions producing tragic consequences. His knowledge of herbs and potions mirrors the play's duality: 'In plants, herbs, stones, and their true qualities / ... poison hath residence and medicine power.'",
    key_quotes: [
      '"These violent delights have violent ends"',
      '"Wisely and slow. They stumble that run fast"',
      '"In one respect I\'ll thy assistant be; for this alliance may so happy prove to turn your households\' rancour to pure love"',
    ],
  },
  {
    name: 'Mercutio',
    description:
      "Romeo's witty, irreverent best friend and a kinsman of the Prince. He mocks love and romance (especially in the Queen Mab speech) and is a foil to Romeo's idealism. His death is the play's turning point - the moment comedy gives way to tragedy. He is neither Montague nor Capulet, making his death a powerful symbol of how the feud destroys innocent bystanders.",
    key_quotes: [
      '"A plague o\' both your houses!"',
      '"O, then I see Queen Mab hath been with you"',
      '"If love be rough with you, be rough with love"',
      '"Ask for me tomorrow, and you shall find me a grave man"',
    ],
  },
  {
    name: 'Tybalt',
    description:
      "Juliet's hot-headed cousin, known as the 'Prince of Cats' for his duelling skill. He embodies the violent hatred of the feud and is a foil to Romeo's love. His aggression drives the plot - his challenge leads to Mercutio's death and Romeo's banishment. He represents the destructive power of honour-based masculinity.",
    key_quotes: [
      '"What, drawn, and talk of peace? I hate the word, as I hate hell, all Montagues, and thee"',
      '"Boy, this shall not excuse the injuries that thou hast done me"',
    ],
  },
  {
    name: 'The Nurse',
    description:
      "Juliet's closest companion and surrogate mother. She is bawdy, comic, and deeply affectionate. She helps arrange the secret marriage but later advises Juliet to forget Romeo and marry Paris - a betrayal that isolates Juliet completely and drives her to the Friar's desperate plan.",
    key_quotes: [
      '"His name is Romeo, and a Montague, the only son of your great enemy"',
      '"I think it best you married with the County"',
    ],
  },
  {
    name: 'Lord Capulet',
    description:
      "Juliet's father, who shifts from a seemingly caring parent to a tyrannical patriarch. He initially tells Paris that Juliet is too young to marry, but after Tybalt's death he forces the match. His explosive rage when Juliet refuses reveals the patriarchal control that traps women in Elizabethan society.",
    key_quotes: [
      '"Hang thee, young baggage! Disobedient wretch!"',
      '"And you be mine, I\'ll give you to my friend; / And you be not, hang, beg, starve, die in the streets"',
    ],
  },
]

const THEMES = [
  {
    theme: 'Love',
    description:
      "The play presents love in many forms: the shallow infatuation Romeo feels for Rosaline, the instant and transcendent passion between Romeo and Juliet, the bawdy physical love described by Mercutio and the Nurse, and the familial love of the Capulets. Shakespeare portrays true love as a powerful, almost religious force - Romeo and Juliet's language is full of light imagery and religious metaphor (pilgrim, saint, shrine). Yet love is also dangerous and all-consuming.",
    quotes: [
      '"My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite"',
      '"Did my heart love till now? Forswear it, sight! For I ne\'er saw true beauty till this night"',
      '"Love is a smoke made with the fume of sighs"',
    ],
  },
  {
    theme: 'Fate and Fortune',
    description:
      "Romeo and Juliet are described in the Prologue as 'star-cross'd lovers' whose 'death-mark'd love' is fated. Throughout the play, references to stars, fortune, and destiny suggest their tragedy is inevitable. Yet Shakespeare also shows how human choices - Tybalt's aggression, the Friar's scheming, Romeo's impulsiveness - contribute to the catastrophe. The tension between fate and free will is central.",
    quotes: [
      '"A pair of star-cross\'d lovers take their life"',
      '"Then I defy you, stars!"',
      '"O, I am fortune\'s fool!"',
    ],
  },
  {
    theme: 'Conflict and Violence',
    description:
      "The ancient feud between Montague and Capulet drives the entire tragedy. Violence erupts repeatedly - the opening brawl, Tybalt's challenge, Mercutio's death, Romeo's revenge, Paris's death. Shakespeare shows that violence is cyclical and self-perpetuating. The Prince's final judgement - 'All are punish'd' - makes clear that the feud has destroyed both families, not just the lovers.",
    quotes: [
      '"Two households, both alike in dignity, in fair Verona, where we lay our scene, from ancient grudge break to new mutiny"',
      '"A plague o\' both your houses!"',
      '"All are punish\'d"',
    ],
  },
  {
    theme: 'Light and Darkness',
    description:
      "Shakespeare uses light and darkness as a sustained motif throughout the play. Romeo describes Juliet as the sun; their love blooms at night (the balcony, their wedding night). Light is associated with the beauty and intensity of their love, but darkness provides the secrecy they need. Tragically, their love can only exist in darkness - the 'light' of day brings the reality of the feud.",
    quotes: [
      '"But soft, what light through yonder window breaks? It is the east, and Juliet is the sun"',
      '"Give me my Romeo; and, when I shall die, take him and cut him out in little stars, and he will make the face of heaven so fine"',
    ],
  },
  {
    theme: 'Youth vs Age',
    description:
      "The play dramatises a generational conflict. The young lovers represent passion, idealism, and the desire for change; the older generation (Lord Capulet, the feuding patriarchs) represent tradition, authority, and rigidity. The parents' 'ancient grudge' destroys their children. Shakespeare suggests that the older generation's refusal to change is as much to blame as the lovers' impulsiveness.",
    quotes: [
      '"These violent delights have violent ends"',
      '"Hang thee, young baggage! Disobedient wretch!"',
      '"O brother Montague, give me thy hand"',
    ],
  },
  {
    theme: 'Gender and Patriarchy',
    description:
      "Juliet exists within a patriarchal society where her father controls her marriage and her future. Lady Capulet married young and expects Juliet to do the same. Juliet's defiance of her father is radical for an Elizabethan audience. Meanwhile, male characters are driven by a violent, honour-based masculinity - Tybalt's aggression, Mercutio's taunting, Romeo's revenge. Shakespeare shows how rigid gender roles contribute to the tragedy.",
    quotes: [
      '"And you be mine, I\'ll give you to my friend; / And you be not, hang, beg, starve, die in the streets"',
      '"What, drawn, and talk of peace? I hate the word"',
      '"My child is yet a stranger in the world"',
    ],
  },
  {
    theme: 'Time and Haste',
    description:
      "Everything happens at breakneck speed: Romeo and Juliet meet, marry, and die within four days. Characters repeatedly warn against haste - 'Wisely and slow. They stumble that run fast' - but the lovers and events rush forward regardless. Shakespeare compresses time to heighten dramatic tension and suggest that the lovers' intensity cannot survive in the real world.",
    quotes: [
      '"Wisely and slow. They stumble that run fast"',
      '"Too swift arrives as tardy as too slow"',
      '"These violent delights have violent ends"',
    ],
  },
]

const KEY_QUOTES = [
  {
    quote: '"Two households, both alike in dignity, in fair Verona, where we lay our scene"',
    speaker: 'Prologue',
    significance:
      "The Prologue establishes the setting, the feud, and foreshadows the lovers' deaths. 'Both alike in dignity' suggests neither family is morally superior - both share blame.",
  },
  {
    quote: '"A pair of star-cross\'d lovers take their life"',
    speaker: 'Prologue',
    significance:
      "Introduces the theme of fate. 'Star-cross'd' means opposed by the stars (destiny). The audience knows the ending from the start - dramatic irony pervades the entire play.",
  },
  {
    quote:
      '"Did my heart love till now? Forswear it, sight! For I ne\'er saw true beauty till this night"',
    speaker: 'Romeo (1.5)',
    significance:
      "Romeo's instant love for Juliet. The rhyming couplet suggests the intensity of his feelings. However, his rapid switch from Rosaline questions whether this is true love or infatuation.",
  },
  {
    quote: '"My only love sprung from my only hate! Too early seen unknown, and known too late!"',
    speaker: 'Juliet (1.5)',
    significance:
      "Juliet discovers Romeo is a Montague. The oxymoron of 'love/hate' captures the central paradox of the play. The rhyming couplet gives a sense of finality - their fate is sealed.",
  },
  {
    quote:
      '"But soft, what light through yonder window breaks? It is the east, and Juliet is the sun"',
    speaker: 'Romeo (2.2)',
    significance:
      'The famous balcony speech. Romeo uses celestial imagery to elevate Juliet above the ordinary world. The metaphor of the sun suggests warmth, life, and centrality - she is his universe.',
  },
  {
    quote: '"What\'s in a name? That which we call a rose by any other name would smell as sweet"',
    speaker: 'Juliet (2.2)',
    significance:
      "Juliet argues that names are arbitrary labels. She challenges the feud's logic - Romeo's identity as a Montague should not define him. A philosophical challenge to the social order.",
  },
  {
    quote:
      '"My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite"',
    speaker: 'Juliet (2.2)',
    significance:
      "Juliet's love is presented as limitless and paradoxical - giving love increases it. The sea imagery suggests depth, power, and vastness. Juliet is the more eloquent and daring of the two.",
  },
  {
    quote: '"These violent delights have violent ends"',
    speaker: 'Friar Lawrence (2.6)',
    significance:
      "The Friar foreshadows the tragedy, warning that extreme passion is self-destructive. 'Violent' carries dual meaning - intense and aggressive. This line encapsulates the play's central message.",
  },
  {
    quote: '"Wisely and slow. They stumble that run fast"',
    speaker: 'Friar Lawrence (2.3)',
    significance:
      'The Friar counsels caution. Ironic because he himself acts hastily (the marriage, the potion plan). The proverb-like structure gives it weight, but no one in the play heeds it.',
  },
  {
    quote: '"A plague o\' both your houses!"',
    speaker: 'Mercutio (3.1)',
    significance:
      "Mercutio's dying curse. Repeated three times for emphasis, it condemns both families. As a character outside the feud, his death shows that the violence destroys everyone, not just the families involved.",
  },
  {
    quote: '"O, I am fortune\'s fool!"',
    speaker: 'Romeo (3.1)',
    significance:
      "After killing Tybalt, Romeo sees himself as a victim of fate. 'Fortune's fool' suggests he is a plaything of destiny. Yet it was his own impulsive choice to fight - the line captures the tension between fate and free will.",
  },
  {
    quote: '"Gallop apace, you fiery-footed steeds"',
    speaker: 'Juliet (3.2)',
    significance:
      "Juliet's epithalamium (wedding-night speech) shows her sexual desire and impatience. The classical allusion to Phoebus's horses demonstrates her intelligence. She is no passive maiden.",
  },
  {
    quote: '"Hang thee, young baggage! Disobedient wretch!"',
    speaker: 'Lord Capulet (3.5)',
    significance:
      "Capulet's violent rage at Juliet's refusal to marry Paris reveals patriarchal tyranny. The dehumanising language ('baggage') reduces Juliet to property. Shows the limited agency of women.",
  },
  {
    quote:
      '"And you be mine, I\'ll give you to my friend; / And you be not, hang, beg, starve, die in the streets"',
    speaker: 'Lord Capulet (3.5)',
    significance:
      "Capulet threatens to disown Juliet. The list structure ('hang, beg, starve, die') builds to a brutal climax. Reveals that a daughter's value lies only in her obedience.",
  },
  {
    quote:
      '"Give me my Romeo; and, when I shall die, take him and cut him out in little stars, and he will make the face of heaven so fine"',
    speaker: 'Juliet (3.2)',
    significance:
      'Juliet transforms Romeo into a constellation - their love is eternal and heavenly. The imagery elevates their love beyond the mortal world. Foreshadows their deaths making them immortal.',
  },
  {
    quote: '"Then I defy you, stars!"',
    speaker: 'Romeo (5.1)',
    significance:
      "Romeo's response to news of Juliet's death. He actively rebels against fate - a heroic but futile gesture. The short, explosive sentence contrasts with his earlier poetic speeches, showing raw desperation.",
  },
  {
    quote: '"Here\'s to my love! ... Thus with a kiss I die"',
    speaker: 'Romeo (5.3)',
    significance:
      "Romeo's final words. Love and death are united in a single action. 'With a kiss I die' is a rhyming couplet that provides a sense of closure. Echoes their first meeting, when they shared a kiss.",
  },
  {
    quote: '"O happy dagger. / This is thy sheath. There rest, and let me die"',
    speaker: 'Juliet (5.3)',
    significance:
      "Juliet's death is swift and decisive - unlike Romeo's poetic farewell. The oxymoron 'happy dagger' links joy and death. The sexual connotation of 'sheath' unites love and death (Eros and Thanatos).",
  },
  {
    quote: '"All are punish\'d"',
    speaker: 'Prince Escalus (5.3)',
    significance:
      "The Prince's final judgement. The universal 'all' spreads blame across both families and the wider community. The feud's consequences are collective - no one escapes responsibility.",
  },
  {
    quote: '"For never was a story of more woe than this of Juliet and her Romeo"',
    speaker: 'Prince Escalus (5.3)',
    significance:
      "The closing couplet. Romeo belongs to Juliet ('her Romeo'), suggesting their love transcends the feud. The rhyme provides closure and elevates their story to legend.",
  },
]

const CONTEXT_POINTS = [
  {
    topic: 'Elizabethan Society and Patriarchy',
    detail:
      "Women had very limited rights in Elizabethan England. Fathers arranged their daughters' marriages, and wives were expected to be obedient. Juliet's defiance of her father would have been shocking and dangerous. Her situation reflects the real lack of agency women experienced - marriage was a financial and political transaction, not a matter of personal choice.",
  },
  {
    topic: 'Love and Marriage in the 1590s',
    detail:
      "Marriages among wealthy families were arranged for social and economic advantage, not love. The idea of marrying for romantic love was radical. Shakespeare's audience would have understood the tension between Juliet's desire to choose her own husband and her family's expectations. Romeo and Juliet can be read as an argument for individual choice over parental authority.",
  },
  {
    topic: 'The Italian Setting and Civil Conflict',
    detail:
      'Shakespeare set the play in Verona, Italy - a society associated with passion, honour, and vendetta. Elizabethan audiences were familiar with Italian city-states torn apart by feuding families (like the Guelphs and Ghibellines). The play reflects anxieties about civil disorder in England, where the memory of the Wars of the Roses was still fresh.',
  },
  {
    topic: 'Honour Culture and Masculinity',
    detail:
      "Elizabethan men were expected to defend their honour through violence. Refusing a challenge was cowardly. Romeo's initial refusal to fight Tybalt breaks this code, and Mercutio steps in partly to protect Romeo's (and his own) honour. Shakespeare critiques this toxic honour culture by showing how it leads to needless death.",
  },
  {
    topic: 'The Role of the Church',
    detail:
      "The Church had enormous influence over daily life. Friar Lawrence represents both the Church's moral authority and its potential for well-intentioned meddling. His involvement in the secret marriage and the potion plot reflects a tension between spiritual guidance and human error. The lovers' religious language (pilgrim, saint, shrine) elevates their love but also foreshadows its sacrificial nature.",
  },
  {
    topic: 'Tragedy as a Genre',
    detail:
      "Shakespeare draws on the conventions of classical tragedy: noble characters, a fatal flaw, a reversal of fortune, and a catastrophic ending. However, Romeo and Juliet are unusual tragic heroes - they are young and their 'flaw' is love itself. The Prologue's revelation of the ending creates dramatic irony and invites the audience to focus on how and why the tragedy unfolds, not just what happens.",
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function RomeoAndJulietPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Romeo and Juliet - Full Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Edexcel GCSE English Literature &middot; Paper 1, Section A
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ─────────────────────────────────────────── */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['#plot', 'Plot Summary'],
              ['#characters', 'Character Analysis'],
              ['#themes', 'Key Themes'],
              ['#quotes', 'Key Quotes (20)'],
              ['#context', 'Historical Context'],
              ['#exam', 'Edexcel Exam Technique'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-primary hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Paper 1 Section A overview ──────────────────────────── */}
        <section className="mt-14 scroll-mt-20">
          {/* 9 October 2026: this said the question was one essay on the whole play with no
              extract, marked up to 12, 12 and 8 for reading, methods and context, plus 4 for SPaG,
              in 50-55 minutes. Pearson's 1ET0/01 (specification Issue 2, PDF page 23, and its June
              2024 mark scheme) sets two parts on a printed extract of about 30 lines: (a) for AO2
              alone (20 marks) and (b) for AO1 (15) and AO3 (5). Section A has no SPaG, and Pearson
              advises about 55 minutes on it, divided equally between the parts. */}
          <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
            <h2 className="text-lg font-bold text-foreground">
              Edexcel Paper 1, Section A - Shakespeare (40 marks)
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                You will receive <strong>one two-part question</strong> on Romeo and Juliet (no
                choice), built on a <strong>printed extract</strong> of about 30 lines.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <strong>Part (a), 20 marks</strong>, asks how Shakespeare presents something in the
                extract. <strong>Part (b), 20 marks</strong>, asks about the importance of a theme
                from the extract elsewhere in the play: for that you must recall your own quotations
                and evidence from memory.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <strong>40 marks total</strong>, with no marks for spelling, punctuation, and
                grammar (SPaG) in this section.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Recommended time: about <strong>55 minutes</strong>, divided equally between the two
                parts.
              </li>
            </ul>
            <div className="mt-4 rounded-lg bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Marking Skills
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>Reading and response</strong> - Read, respond, and use textual references
                  (including quotations) to support interpretation.{' '}
                  <em>(AO1: 15 marks, in part (b) only)</em>
                </li>
                <li>
                  <strong>Analysis of methods</strong> - Analyse the language, form, and structure
                  used by a writer to create meanings and effects, using relevant subject
                  terminology. <em>(AO2: 20 marks, in part (a) only)</em>
                </li>
                <li>
                  <strong>Context</strong> - Show understanding of the relationships between texts
                  and the contexts in which they were written.{' '}
                  <em>(AO3: 5 marks, in part (b) only)</em>
                </li>
                <li>
                  <strong>Accuracy</strong> - Use a range of vocabulary and sentence structures for
                  clarity, purpose, and effect, with accurate spelling and punctuation.{' '}
                  <em>
                    (Not marked in Section A: the paper&apos;s 8 marks for it are in Section B)
                  </em>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Plot summary ──────────────────────────────────────── */}
        <section id="plot" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Plot Summary</h2>
          <div className="mt-6 space-y-6">
            {PLOT_SUMMARY.map((act) => (
              <div key={act.act} className="rounded-xl border border-border p-6 shadow-md">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    {act.act}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{act.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{act.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Characters ────────────────────────────────────────── */}
        <section id="characters" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Character Analysis</h2>
          <div className="mt-6 space-y-6">
            {CHARACTERS.map((char) => (
              <div key={char.name} className="rounded-xl border border-border p-6 shadow-md">
                <h3 className="text-xl font-bold text-foreground">{char.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {char.key_quotes.map((q) => (
                      <li key={q} className="text-sm italic text-muted-foreground">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Themes ────────────────────────────────────────────── */}
        <section id="themes" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Key Themes</h2>
          <div className="mt-6 space-y-6">
            {THEMES.map((t) => (
              <div key={t.theme} className="rounded-xl border-s-4 border-primary bg-muted p-6">
                <h3 className="text-lg font-bold text-foreground">{t.theme}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
                <div className="mt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Supporting Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {t.quotes.map((q) => (
                      <li key={q} className="text-sm italic text-muted-foreground">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key quotes ────────────────────────────────────────── */}
        <section id="quotes" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Key Quotes (20)</h2>
          <p className="mt-2 text-muted-foreground">
            Memorise these quotes - the Edexcel exam is closed-book. Short quotes that you can embed
            naturally into sentences are best.
          </p>
          <div className="mt-6 space-y-4">
            {KEY_QUOTES.map((q, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-4 shadow-md">
                <p className="text-sm font-semibold italic text-foreground">{q.quote}</p>
                <p className="mt-1 text-xs font-medium text-primary">- {q.speaker}</p>
                <p className="mt-2 text-sm text-muted-foreground">{q.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ───────────────────────────────────────────── */}
        <section id="context" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Historical Context</h2>
          {/* 9 October 2026: this said context belongs woven into analysis, without saying where
              it is marked. Pearson's 1ET0/01 gives context (AO3) 5 of part (b)'s 20 marks and
              none in part (a), which is marked for analysis of the extract (AO2) alone. */}
          <p className="mt-2 text-muted-foreground">
            Context is assessed in part (b) of the Shakespeare question, where it is worth 5 of the
            20 marks; part (a) gives it none. The best part (b) answers weave context into their
            argument rather than treating it as a bolt-on paragraph.
          </p>
          <div className="mt-6 space-y-4">
            {CONTEXT_POINTS.map((c) => (
              <div key={c.topic} className="rounded-xl border border-border p-5 shadow-md">
                <h3 className="font-bold text-foreground">{c.topic}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section id="exam" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Edexcel Exam Technique for Romeo and Juliet
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              {/* 9 October 2026: this said the question was one essay on the whole play, with no
                  extract and 4 marks for SPaG. Pearson's 1ET0/01 (specification Issue 2, PDF page
                  23, and its June 2024 question paper and mark scheme) prints an extract of about
                  30 lines and sets two parts on it: (a) on the extract, for AO2 alone, and (b) on
                  a theme from it elsewhere in the play, for AO1 and AO3. Section A has no SPaG. */}
              <h3 className="text-lg font-bold text-foreground">
                What Does an Edexcel Romeo and Juliet Question Look Like?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You will be given one two-part question (no choice) on a printed extract of about 30
                lines. Part (a) asks how Shakespeare presents something in the extract. Part (b)
                asks about the importance of a theme from the extract elsewhere in the play, and for
                that you must recall your own evidence.
              </p>
              <div className="mt-4 rounded-lg border-2 border-dashed border-primary bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Example Question
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">
                  [Extract from Act 3 Scene 1 - Mercutio and Tybalt fight, and Mercutio is fatally
                  wounded]
                </p>
                <p className="mt-2 text-sm text-foreground font-medium">
                  (a) Explore how Shakespeare presents conflict in this extract. Refer closely to
                  the extract in your answer.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">(20 marks)</p>
                <p className="mt-3 text-sm text-foreground font-medium">
                  (b) In this extract, the feud between the two families leads to violence. Explain
                  the importance of conflict elsewhere in the play.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  In your answer, you must consider:
                </p>
                <ul className="mt-1 list-disc space-y-0.5 ps-5 text-xs text-muted-foreground">
                  <li>conflict between the Montagues and the Capulets</li>
                  <li>conflict within the Capulet family.</li>
                </ul>
                <p className="mt-1 text-xs text-muted-foreground">
                  You must refer to the context of the play in your answer. (20 marks)
                </p>
              </div>
              <div className="mt-3 rounded-lg border-2 border-dashed border-primary bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Example Question
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground">
                  [Extract from Act 3 Scene 5 - Juliet refuses to marry Paris]
                </p>
                <p className="mt-2 text-sm text-foreground font-medium">
                  (a) Explore how Shakespeare presents Juliet as a strong character in this extract.
                  Refer closely to the extract in your answer.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">(20 marks)</p>
                <p className="mt-3 text-sm text-foreground font-medium">
                  (b) In this extract, Juliet defies her father. Explain the importance of parents
                  and children elsewhere in the play.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  In your answer, you must consider:
                </p>
                <ul className="mt-1 list-disc space-y-0.5 ps-5 text-xs text-muted-foreground">
                  <li>how Juliet&apos;s relationship with her parents changes</li>
                  <li>the reasons for conflict between parents and children.</li>
                </ul>
                <p className="mt-1 text-xs text-muted-foreground">
                  You must refer to the context of the play in your answer. (20 marks)
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-muted p-6">
              {/* 9 October 2026: these steps described one essay across the whole play, with
                  analysis and context in every paragraph, which fits neither part. Pearson's
                  1ET0/01 marks part (a) for analysis of the extract (AO2) alone, and part (b), on a
                  theme elsewhere in the play, for AO1 (15) and AO3 (5). The steps now take the two
                  parts in turn. */}
              <h3 className="text-lg font-bold text-foreground">How to Structure Your Answer</h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    1
                  </span>
                  <span>
                    <strong>Part (a): brief introduction</strong> - outline in 1-2 sentences how
                    Shakespeare presents the theme/character in the printed extract. Leave context
                    out: part (a) is marked only for analysis of language, form and structure.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>Part (a): 3-4 analytical paragraphs</strong> covering different moments
                    in the extract. Each paragraph: Point &rarr; Evidence (embedded quote from the
                    extract) &rarr; Analysis of language/technique. Context and the rest of the play
                    earn nothing in part (a).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>Part (b): track development across the play</strong> - show how the
                    theme changes elsewhere in the play (e.g. Juliet&apos;s journey from obedient
                    daughter to defiant lover; conflict escalating from verbal sparring to fatal
                    violence), covering both points the question lists. Weave in context
                    (Elizabethan society, attitudes to love/marriage/honour) as you go.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    4
                  </span>
                  <span>
                    <strong>Conclude part (b) briefly</strong> - summarise Shakespeare&apos;s
                    message and its relevance to the Elizabethan audience. What is
                    Shakespeare&apos;s purpose? What does he want the audience to think or feel?
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-muted p-6">
              {/* 9 October 2026: this paragraph analysed language and then linked to Elizabethan
                  context, which fits neither part of Pearson's 1ET0/01 question: part (a) gives
                  context no marks, and part (b) gives none for analysis of language as such. It is
                  now a part (a) paragraph on the first example's extract, ending on the question,
                  with a line on part (b)'s shape. */}
              <h3 className="text-lg font-bold text-foreground">Model Part (a) Paragraph (PEAL)</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                On an extract from Act 3 Scene 1, like the first example question above.
              </p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p>
                    <strong className="text-foreground">P</strong>oint - Shakespeare presents
                    conflict as deeply destructive and self-perpetuating.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p>
                    <strong className="text-foreground">E</strong>vidence - Mercutio&apos;s dying
                    words, &quot;A plague o&apos; both your houses!&quot;, repeated three times,
                    condemn the feud.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p>
                    <strong className="text-foreground">A</strong>nalyse - The noun
                    &quot;plague&quot; implies the feud is a disease infecting all of Verona, not
                    just the two families. The triple repetition mirrors the escalating violence and
                    gives Mercutio&apos;s curse a ritualistic, prophetic quality.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <p>
                    <strong className="text-foreground">L</strong>ink - Cursing both houses,
                    Mercutio shows he belongs to neither, so in this extract Shakespeare presents
                    conflict as destroying even those outside the feud.
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Part (a) gives no marks for context, so this paragraph links back to the question
                rather than to Elizabethan society. In part (b), the shape is Point, Evidence,
                Explanation, Context: a quotation you have memorised from elsewhere in the play,
                what it shows about the theme, and context woven in, such as the honour culture in
                which refusing a challenge was cowardly.
              </p>
            </div>

            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              {/* 9 October 2026: two tips here were wrong for Section A. One put context into
                  analysis, where it earns nothing in part (a); the other said SPaG was worth 4
                  marks. Pearson's 1ET0/01 gives context 5 marks in part (b) alone, and Section A
                  has no SPaG: the paper's 8 marks for it (AO4) are in Section B. */}
              <h3 className="text-lg font-bold text-foreground">Top Tips for Top Marks</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Use Shakespeare&apos;s name - &quot;Shakespeare presents...&quot; or
                  &quot;Shakespeare uses... to suggest...&quot; shows awareness of authorial intent
                  (reading and response / analysis of methods).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Analyse <strong>individual words</strong> within quotes - don&apos;t just identify
                  techniques, explain their effect on the reader/audience.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  In part (b), <strong>embed context into your argument</strong> (context): &quot;An
                  Elizabethan audience would have understood Juliet&apos;s defiance as deeply
                  transgressive, given that daughters were expected to obey their fathers without
                  question.&quot; Part (a) gives context no marks.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Use literary terminology confidently:{' '}
                  <strong>
                    dramatic irony, foreshadowing, oxymoron, soliloquy, sonnet form, pathetic
                    fallacy, extended metaphor, juxtaposition, Petrarchan conventions
                  </strong>
                  .
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Consider <strong>alternative interpretations</strong>: &quot;While a traditional
                  reading sees Romeo and Juliet as victims of fate, a more critical reading suggests
                  their tragedy results from human failure - the feud, patriarchal control, and
                  hasty decisions.&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Note <strong>Shakespeare&apos;s use of form</strong>: the Prologue is a sonnet
                  (the love poem form); Romeo and Juliet&apos;s first exchange is a shared sonnet -
                  form mirrors content.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <strong>Short embedded quotes</strong> score better than long block quotes. Weave
                  2-4 word phrases into your sentences naturally.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Remember <strong>Section A has no SPaG marks</strong> - the paper&apos;s 8 marks
                  for accuracy are in Section B. Write in clear paragraphs all the same, so your
                  argument is easy to follow.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  )
}
