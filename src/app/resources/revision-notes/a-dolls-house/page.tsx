'use client'

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

export default function ADollsHousePage() {
  return (
    <>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
            19th-Century Drama
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            AQA
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            OCR
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
            A-Level
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A Doll&apos;s House &mdash; Complete A-Level Revision Guide
        </h1>
        <p className="mt-1 text-lg text-muted-foreground">
          Henrik Ibsen, 1879 &mdash; quotations from William Archer&apos;s 1889 English translation
        </p>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          Substantive A-Level revision notes for Ibsen&apos;s landmark realist drama. Act-by-act
          plot, character profiles, themes including marriage and gender, identity, money, truth
          versus deception and sacrifice, key quotations with detailed analysis, symbols including
          the tarantella and the locked letterbox, historical and theatrical context, plus AQA / OCR
          exam-style questions with planning notes.
        </p>
        <p className="mt-3 max-w-3xl text-xs text-muted-foreground italic">
          A note on translation: every quotation on this page is taken from William Archer&apos;s
          1889 English translation, which is in the public domain. Other widely used English
          translations (Michael Meyer, Rolf Fjelde, James McFarlane) phrase several of these lines
          differently. When you cite the play in an exam, name the translation you have read; this
          page consistently uses Archer.
        </p>
      </div>

      {/* Quick nav */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4 shadow-md">
        <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Context',
            'Key Quotations',
            'Symbols',
            'Exam Questions',
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
          <Section title="Act-by-Act Plot Summary" icon="📖" defaultOpen>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    1
                  </span>
                  Act One: Christmas Eve
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  The play opens on Christmas Eve in the Helmers&apos; comfortable bourgeois drawing
                  room. Nora Helmer returns home from shopping, eats macaroons in secret, and is
                  greeted by her husband Torvald with diminutive pet names &mdash; in Archer&apos;s
                  translation, &ldquo;little lark,&rdquo; &ldquo;little squirrel,&rdquo;
                  &ldquo;spendthrift.&rdquo; Torvald has just been appointed manager of the bank,
                  promising financial security after years of hardship. Two visitors arrive: Mrs
                  Linde (Christine), a widowed schoolfriend seeking work, and the family&apos;s
                  ailing companion Dr Rank. Nora confides to Mrs Linde a long-held secret &mdash;
                  she once obtained a loan that paid for a year&apos;s trip to Italy when Torvald
                  was dangerously ill, and to do so she forged her dying father&apos;s signature on
                  the bond. She has been repaying it from her household allowance ever since.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Nils Krogstad, a clerk at Torvald&apos;s bank and the moneylender who advanced the
                  loan, arrives. Krogstad is about to be dismissed from the bank; Mrs Linde will
                  replace him. He blackmails Nora: unless she persuades Torvald to keep him in his
                  post, he will reveal both the forgery and the loan. The act closes with Nora
                  attempting to distract Torvald with talk of her costume for the Stenborgs&apos;
                  fancy-dress ball.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Nora&apos;s pet names &mdash; the &ldquo;doll&rdquo; relationship
                      established
                    </li>
                    <li>&bull; The hidden macaroons &mdash; small acts of female disobedience</li>
                    <li>
                      &bull; Confession to Mrs Linde &mdash; the secret loan and the forged
                      signature
                    </li>
                    <li>
                      &bull; Krogstad&apos;s blackmail &mdash; the forgery exposed as a punishable
                      crime
                    </li>
                    <li>
                      &bull; Christmas tree decorated &mdash; the surface domesticity established
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    2
                  </span>
                  Act Two: Christmas Day
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  When the curtain rises on Act 2, the Christmas tree, once neat and decorated, is
                  described in the stage directions as stripped and disordered &mdash; a visual
                  signal that Nora&apos;s domestic illusion is unravelling. Anne-Marie, the family
                  nanny, helps her with the costume for the ball: she will dance the tarantella, an
                  Italian folk dance, in a Neapolitan fisher-girl&apos;s dress. Nora pleads with
                  Torvald to keep Krogstad in his post; he refuses, insisting that to do so would
                  humiliate him publicly &mdash; he was at school with Krogstad and finds the
                  man&apos;s familiarity offensive.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Dr Rank visits and confesses to Nora that he is dying of an inherited disease (the
                  result of his father&apos;s &ldquo;dissipation&rdquo;) and that he has long been
                  in love with her. Nora, who had been about to ask him for the money she needs,
                  finds she cannot now do so. Krogstad returns and, at the end of the act, drops his
                  blackmail letter into the locked letterbox in the hall, to which only Torvald has
                  the key. Mrs Linde, hearing this, promises to intercede with Krogstad &mdash; her
                  old lover. Desperate, Nora begs Torvald to coach her tarantella; she dances
                  wildly, increasingly hysterically, while Torvald beats time, in order to keep him
                  from the letterbox until after the ball.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Stripped Christmas tree at curtain-up &mdash; symbolic deterioration
                    </li>
                    <li>&bull; Torvald refuses to keep Krogstad &mdash; pride over compassion</li>
                    <li>
                      &bull; Dr Rank&apos;s declaration of love &mdash; closes off another option
                    </li>
                    <li>&bull; Krogstad&apos;s letter posted into the locked letterbox</li>
                    <li>
                      &bull; The frenzied tarantella &mdash; performance at its most desperate
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-foreground flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-700 dark:text-violet-300">
                    3
                  </span>
                  Act Three: Boxing Day &mdash; the Door Slam
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  While the Helmers are upstairs at the ball, Mrs Linde and Krogstad meet alone in
                  the drawing room. They rekindle their old relationship; Mrs Linde proposes they
                  unite. Krogstad offers to retract the letter, but Mrs Linde insists Torvald must
                  read it &mdash; the marriage cannot survive on a hidden lie. The Helmers return;
                  Nora is still in costume. Dr Rank pays a final visit to say goodbye before
                  retreating home to die. Torvald reads the letter and erupts in fury, calling Nora
                  a hypocrite and a criminal, and forbidding her from raising the children.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A second letter arrives from Krogstad, returning the bond and renouncing his
                  threat. Torvald immediately reverses himself: he cries that he is saved, he
                  forgives Nora, he tells her she is doubly his &mdash; both his wife and as if his
                  child. But Nora has seen everything she needs to see. She changes out of her
                  costume into everyday clothes &mdash; visually shedding the doll &mdash; and tells
                  Torvald to sit down. They have, she says, never had a serious conversation in
                  their eight years of marriage. She has been her father&apos;s
                  &ldquo;doll-child&rdquo; and is now Torvald&apos;s &ldquo;doll-wife.&rdquo; She
                  must leave to educate herself, to discover whether she or society is right, and to
                  find out, as she puts it in Archer&apos;s translation, whether she is even
                  &ldquo;a human being.&rdquo; She returns her wedding ring, takes her bag, and
                  walks out. The play ends with the famous slam of the front door &mdash; the
                  &ldquo;door slam heard around the world,&rdquo; in the often-repeated phrase.
                </p>
                <div className="mt-3 rounded-lg bg-muted p-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Key Moments
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Mrs Linde and Krogstad reunited &mdash; mature counter-relationship
                    </li>
                    <li>&bull; Torvald&apos;s fury at the first letter</li>
                    <li>
                      &bull; The second letter &mdash; Torvald&apos;s instant reversal exposes him
                    </li>
                    <li>&bull; Nora changes costume &mdash; performance ends</li>
                    <li>&bull; The wedding ring returned &mdash; legal and symbolic separation</li>
                    <li>&bull; The door slam &mdash; final stage direction, no closing speech</li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CHARACTERS */}
        <div id="characters">
          <Section title="Character Profiles" icon="👤">
            <div className="grid gap-4 sm:grid-cols-2">
              <CharacterCard
                name="Nora Helmer"
                description="The protagonist: at the play's opening she appears as a chattering, child-like wife who eats macaroons in secret and skips around the drawing room. Beneath that performance she has carried, alone, the burden of a forgery and a years-long secret debt that paid for a year's trip to Italy when Torvald was dangerously ill. Her character arc is one of the most radical in nineteenth-century drama: from the 'lark' and 'squirrel' Torvald addresses to the woman who insists she is, before all else, a human being and walks out of the family home. Ibsen avoids making her saintly - she does forge, lie, and play-act - but the play makes clear that her infantilisation by father and husband has shaped these strategies. Her decision to leave the children is the single most controversial element of the ending and was deliberately calculated by Ibsen to provoke."
              />
              <CharacterCard
                name="Torvald Helmer"
                description="A newly promoted bank manager who treats his wife with patronising affection and treats household life as his domain to regulate. Torvald is not a melodramatic villain: he loves Nora, works hard, refuses bribes, and prides himself on his integrity. But his vanity, his obsession with public reputation, and his inability to imagine Nora as an adult equal make the marriage impossible. His pivot between the two letters in Act 3 - outrage at the first, immediate self-congratulating relief at the second - exposes the shallowness of his earlier protestations. He represents the bourgeois patriarch who genuinely believes he is being kind while he infantilises and controls."
              />
              <CharacterCard
                name="Nils Krogstad"
                description="The moneylender and bank clerk who blackmails Nora. Krogstad has himself been involved in a forgery in the past and lost his social standing as a result. He is not a stage villain but a desperate man fighting for his children's reputations and his own rehabilitation. His parallels with Nora are deliberate: both have committed forgeries, both motivated by family responsibility, both threatened with social ruin. When Mrs Linde returns to him in Act 3 he is humanised - his withdrawal of the threat is genuine. Ibsen uses him to show that the social judgement that destroys 'fallen' people is often disproportionate."
              />
              <CharacterCard
                name="Mrs Linde / Christine Linde"
                description="Nora's old schoolfriend, recently widowed and looking for work. She married a man she did not love because she had a sick mother and two younger brothers to support - a sacrifice that shadows Nora's. She is the play's voice of mature realism: practical, weary, but uncynical. Her decision to insist that Krogstad's letter remain in the box, forcing the marriage to confront its truth, is the play's pivot - she catalyses Nora's awakening. Her relationship with Krogstad in Act 3, founded on shared damage and honesty, offers Ibsen's counter-image of partnership."
              />
              <CharacterCard
                name="Dr Rank"
                description="A close family friend and physician, dying of an inherited disease which the play attributes to his father's debaucheries. Rank is the play's most articulate ironist: he sees through the Helmers' pretensions and welcomes Nora's company because she alone listens. His unconfessed love for Nora is revealed in Act 2 just as Nora was about to ask him for money - a moment of devastating timing. His departure to die alone, leaving a black-crossed visiting card so Nora and Torvald are spared the sight of his dying, is a quiet act of dignity that contrasts with Torvald's self-pity. Symbolically, Rank carries the inherited rot of the bourgeois past - a theme Ibsen would develop further in Ghosts (1881)."
              />
              <CharacterCard
                name="The Children - Ivar, Bob and Emmy"
                description="The three young Helmer children, named in Ibsen's text and present mostly briefly. They appear in Act 1 playing hide-and-seek with Nora - a moment of genuine warmth that complicates her later decision to leave. Throughout the play they are mostly cared for by Anne-Marie. Their virtual silence is itself meaningful: in this household children are objects of care from servants, ornaments of the home rather than relationships of conversation. Nora's belief that, after her crime is exposed, she is 'not fit' to bring them up is one of her most controversial declarations and was the point at which the German actress Hedwig Niemann-Raabe famously refused to play the original ending."
              />
              <CharacterCard
                name="Anne-Marie (the Nurse)"
                description="The Helmers' nurse and Nora's own former nanny, who long ago gave up her own daughter to take service with Nora's father. Her quiet sacrifice mirrors and complicates Mrs Linde's: working women have always been expected to surrender their own family ties to maintain other people's homes. When Nora asks her how she could give up her child, Anne-Marie replies, in Archer's translation, that a poor girl in her position must be glad of any place she can get. She represents the unseen infrastructure of bourgeois domestic comfort and is the only mother-figure Nora's children will have once Nora leaves."
              />
              <CharacterCard
                name="Helene (the Maid)"
                description="A minor speaking role, the household's other servant. She announces visitors and brings letters - including, crucially, Krogstad's letters in Acts 2 and 3. Her presence as a functional door-keeper underscores how much of the play's tension rides on the postal system, the threshold and the door, and how comprehensively the bourgeois interior is sustained by working-class labour."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── THEMES */}
        <div id="themes">
          <Section title="Key Themes" icon="💡">
            <div className="grid gap-4 sm:grid-cols-2">
              <ThemeCard
                title="Marriage and Gender Roles"
                description="The play's central target. The Helmer marriage is presented as economically and emotionally unequal: Torvald earns and dispenses money, names his wife with diminutive animal names, polices what she eats (the forbidden macaroons) and how she dances. Ibsen does not show a uniquely cruel husband but a typical one - a respected bank manager performing exactly what bourgeois Norwegian society expected. Nora's discovery is that her marriage and her childhood have been continuous: she was 'doll-child' before she was 'doll-wife', passed from father to husband without ever becoming an adult. The counter-relationship of Mrs Linde and Krogstad in Act 3 is founded on shared damage and equality. In his 1898 speech to the Norwegian Women's Rights League, Ibsen disavowed the idea that he had set out to write specifically for the women's cause; even so, the play unmistakably dramatises the social and legal cost of denying women adult status."
              />
              <ThemeCard
                title="Identity and Self-Discovery"
                description="The play traces Nora's movement from performed selfhood to genuine selfhood. For most of Acts 1 and 2 she is a series of roles - daughter, wife, mother, dancer - calibrated to please the man watching. The pivotal Act 3 dialogue with Torvald is, she insists, the first 'serious conversation' of their eight-year marriage. Her famous declaration that she must 'stand quite alone' before she can know herself makes the play, in one influential reading (e.g. Toril Moi's Henrik Ibsen and the Birth of Modernism), a foundational text of dramatic modernism - the moment European theatre turns from external action to interior recognition."
              />
              <ThemeCard
                title="Money and Independence"
                description="Money is the play's invisible engine. Torvald's promotion frames Act 1; Nora's secret debt drives the plot; Krogstad's threatened dismissal supplies the blackmail; Mrs Linde took a loveless marriage in part for economic security; Anne-Marie surrendered her daughter to take a paid place. Nora's borrowing - illegal because, as a married woman in nineteenth-century Norwegian law, she could not take a loan in her own name without her husband's consent - exposes how the legal denial of female economic agency turns ordinary financial acts into criminal ones. When Nora leaves at the end of Act 3, the practical question of how she will live remains open: the door slam is the start, not the end, of her economic problem."
              />
              <ThemeCard
                title="Truth versus Deception"
                description="The play is structured by escalating concealment. Nora hides the macaroons, the loan, the forgery, her need for money, the tarantella practice. Torvald deceives himself about the nature of his marriage. The locked letterbox in Act 2 makes the deception physical: the truth waits inside the box for Torvald to use his key. Mrs Linde's decisive choice - to let the letter be read - is a deliberate refusal of the comforting lie. Ibsen's realism rests on the conviction that truth is the precondition for any real relationship; the polite lies that hold the bourgeois household together infantilise rather than protect. The 'wonderful thing' Nora hopes for in Act 3 is the moment Torvald will rise to truthful sacrifice; when he fails, the marriage is over."
              />
              <ThemeCard
                title="Sacrifice - Male and Female Forms"
                description="Sacrifice is gendered in this play. Mrs Linde sacrifices love for family duty; Anne-Marie sacrifices her own child; Nora sacrifices her health, sleep and savings to repay the loan that paid for Torvald's recovery in Italy. These are quiet, ongoing, often invisible sacrifices. Torvald's promised sacrifice is rhetorical: he tells Nora he would gladly work day and night for her, would risk his life. When the actual moment arrives in Act 3 he behaves quite differently. Ibsen exposes how the male language of grand sacrifice often disguises an ego that will not bear the smaller, daily cost of solidarity. Nora's dry observation that millions of women have done what Torvald insists no woman has ever done is one of the play's hardest-edged feminist points."
              />
              <ThemeCard
                title="Performance and the Tarantella"
                description="The play is full of performance: Nora's chatter, her play-acting at being a child, her dancing, her costume. The tarantella in Act 2 condenses this. The dance was traditionally performed in southern Italy by women supposed to have been bitten by the tarantula spider - a frenzied dance to expel the venom. Ibsen has Nora dance it in a Neapolitan fisher-girl's costume, on the brink of exposure, increasingly wildly, while Torvald beats time and corrects her steps. The poison she is dancing to expel is, in the play's logic, the lie at the heart of her marriage. When in Act 3 she changes out of the costume, the dance is over and the woman emerges. The tarantella stages the entire problem of femininity-as-performance in a single scene."
              />
              <ThemeCard
                title="Heredity and the Sins of the Fathers"
                description="A theme that links A Doll's House to Ibsen's later Ghosts (1881). Dr Rank dies of disease the play attributes to his father's debaucheries; Torvald repeatedly worries that lying parents poison their children, citing Krogstad's home as proof. The late-nineteenth-century preoccupation with hereditary degeneration runs in the background. Nora's leaving is, in part, an attempt to break this hereditary chain - better, in her account, that the children grow up under Anne-Marie than that they inherit her dishonesty. Whether the audience accepts this argument is one of the play's deliberately unresolved questions."
              />
              <ThemeCard
                title="The Bourgeois Home as Stage"
                description="Almost all of the play's action takes place in a single 'comfortably and tastefully, but not expensively, furnished' drawing room (Archer's translation of Ibsen's stage direction). The home is the 'doll's house' of the title - a furnished display, with inhabitants on view. The set, the Christmas tree, the costume, the locked letterbox are all stage properties within a stage. Ibsen's realism makes the drawing room a place of moral pressure rather than refuge. The hall door at the back, repeatedly used for entrances and exits, becomes the mechanism by which the outside world enters and, finally, by which Nora leaves."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── CONTEXT */}
        <div id="context">
          <Section title="Historical and Theatrical Context" icon="🏛️">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">1879 Norway and Christiania</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  A Doll&apos;s House (Et dukkehjem) was published in Copenhagen on 4 December 1879
                  and first performed at the Royal Theatre, Copenhagen, on 21 December 1879. Ibsen
                  himself was living in Italy at the time of composition. The play is set in his own
                  country &mdash; nineteenth-century urban Norway, in a society that called its
                  capital Christiania (now Oslo) until 1925. Norway was in political union with
                  Sweden and was undergoing rapid bourgeois expansion. The Norwegian middle class
                  prized respectability, financial probity and the patriarchal household. Crucially,
                  the legal regime of the period did not allow a married woman to take out a loan
                  without her husband&apos;s consent. Nora&apos;s forgery is therefore not a moral
                  aberration but the consequence of denying women independent financial standing.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">The Laura Kieler Case</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Ibsen drew on a real case known to him: the Norwegian-Danish writer Laura Kieler,
                  an acquaintance of Ibsen, had secretly borrowed money to pay for a trip south to
                  save her tubercular husband&apos;s life. When the loan was discovered, her husband
                  repudiated her and she was briefly committed to an asylum. The biographical
                  parallel with Nora is direct: a wife&apos;s unauthorised loan, taken to save a
                  husband&apos;s health, met by male punishment when revealed. Nora&apos;s outcome
                  in the play is, of course, Ibsen&apos;s own &mdash; not Kieler&apos;s.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Ibsen and the &ldquo;Well-Made Play&rdquo;
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Earlier nineteenth-century European drama was dominated by the &ldquo;well-made
                  play&rdquo; (la pi&egrave;ce bien faite) of French dramatists such as
                  Eug&egrave;ne Scribe and Victorien Sardou: tightly constructed plots built around
                  secrets, misunderstandings and a final reconciliation. A Doll&apos;s House borrows
                  the apparatus of the well-made play &mdash; the secret loan, the incriminating
                  letter, the locked box, the late revelation &mdash; but breaks the form by
                  refusing the expected reconciliation. In the influential reading of critics such
                  as James McFarlane, this generic betrayal is part of why first audiences were so
                  disoriented: Ibsen turns the genre against itself, replacing the restoration of
                  harmony with the woman&apos;s exit.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  Critical Reception and the Altered German Ending
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Reactions in 1879 were sharply divided. The Scandinavian press was scandalised;
                  the play was denounced from pulpits across Europe. Conversely, reformers and
                  progressives celebrated it. The German actress Hedwig Niemann-Raabe refused to
                  play the ending as written, declaring she would never leave her children. Faced
                  with the threat of an unauthorised rewrite, Ibsen reluctantly produced an
                  alternative final scene in which Nora, shown her sleeping children, collapses and
                  stays. He famously called this alternative ending a &ldquo;barbaric outrage&rdquo;
                  on his own play and asked theatres to use the original wherever possible. The
                  episode is a useful reminder that the door slam was felt as a genuine social
                  threat, not a literary device.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  First-Wave Feminism and the Married Women&apos;s Property Acts
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The play appeared during the first wave of European and Anglo-American feminism.
                  The British Married Women&apos;s Property Acts of 1870 and 1882 gradually allowed
                  wives to own property, retain earnings and contract in their own names. Before
                  these Acts, the legal doctrine of coverture meant a married woman&apos;s legal
                  identity was &ldquo;covered&rdquo; by her husband&apos;s. Nora&apos;s predicament
                  is shaped exactly by such a regime. Ibsen, however, in his speech to the Norwegian
                  Women&apos;s Rights League in 1898, distanced himself from the &ldquo;first
                  feminist play&rdquo; framing &mdash; he said he had been &ldquo;not even quite
                  clear as to just what the woman question really is&rdquo; and that he had written
                  about &ldquo;mankind in general.&rdquo; A-Level responses should treat the
                  &ldquo;feminist play&rdquo; label as an interpretive question rather than a
                  settled fact: the play dramatises consequences feminism would later articulate,
                  but Ibsen himself disclaimed the programmatic reading.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">Realism, Strindberg and the New Drama</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Ibsen is one of the founders of theatrical Realism. His plays of this period, and
                  those of his Swedish contemporary August Strindberg (Miss Julie, 1888) and later
                  the Russian Anton Chekhov, made the bourgeois drawing room the heart of serious
                  drama. Realism replaced verse, soliloquy and aside with ordinary speech, and
                  replaced melodrama&apos;s villains with ordinary people in ordinary rooms.
                  Ibsen&apos;s English champion was George Bernard Shaw, whose The Quintessence of
                  Ibsenism (1891) made A Doll&apos;s House central to the &ldquo;new drama&rdquo; in
                  Britain. The Scottish critic William Archer produced the major early English
                  translation in 1889, the version used for quotations on this page.
                </p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4">
                <h4 className="font-bold text-primary">
                  The &ldquo;Doll&apos;s House&rdquo; of Bourgeois Domesticity
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Norwegian title Et dukkehjem is, more literally, &ldquo;a doll home&rdquo;
                  rather than the architectural English &ldquo;doll&apos;s house.&rdquo; The phrase
                  points to a sentimental ideal of the nineteenth-century home as ornamental
                  sanctuary &mdash; the wife as decorative centre. John Ruskin&apos;s essay
                  &ldquo;Of Queens&apos; Gardens&rdquo; (1865) and Coventry Patmore&apos;s poem The
                  Angel in the House (1854&ndash;62) are the period&apos;s clearest articulations of
                  this ideal: they celebrate the model that Ibsen dismantles. The play asks what
                  happens when the doll begins to think, and what kind of &ldquo;home&rdquo; it
                  really is when its inhabitants have never had a serious conversation.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── KEY QUOTATIONS */}
        <div id="key-quotations">
          <Section title="Key Quotations with Analysis" icon="📝">
            <p className="text-sm text-muted-foreground mb-4 italic">
              All quotations on this page are taken from William Archer&apos;s 1889 English
              translation, which is in the public domain. Other published English translations
              (Michael Meyer, Rolf Fjelde, James McFarlane, Simon Stephens) phrase several of these
              lines differently &mdash; cite whichever translation you have studied.
            </p>
            <div className="space-y-1">
              <QuoteCard
                quote="Is that my little lark twittering out there?"
                speaker="Helmer (Act 1, opening exchange)"
                analysis="The play's opening exchange in Archer's translation. The diminutive bird name &mdash; one of several across the play (lark, squirrel, songbird) &mdash; encodes the entire marriage in a single phrase. Animal vocabulary infantilises Nora and frames her as an exotic, decorative pet. The possessive &lsquo;my&rsquo; reveals ownership; &lsquo;twittering&rsquo; reduces her speech to charming pointlessness. Ibsen establishes the &lsquo;doll' relationship before any plot has developed."
              />
              <QuoteCard
                quote="It was I who saved Torvald's life."
                speaker="Nora to Mrs Linde (Act 1)"
                analysis="Nora's first revelation of the secret. Pride here is exhilarating: she has done something serious, made a real sacrifice, acted as agent rather than ornament. Yet the law and her husband would call this very pride a crime. Ibsen sets up the gap between female moral experience and male public morality that the play will widen across all three acts."
              />
              <QuoteCard
                quote="It was almost like being a man."
                speaker="Nora to Mrs Linde (Act 1)"
                analysis="Describing the years of secret saving and copying-work she did to repay the loan, Nora compares competent earning to masculinity itself. The line shows how thoroughly &lsquo;agency&rsquo; was gendered male in nineteenth-century Norway. To act, to budget, to make decisions in the world is, in this society's grammar, almost to be a man. Ibsen exposes the absurdity of that linguistic equation."
              />
              <QuoteCard
                quote="Our home has been nothing but a play-room."
                speaker="Nora to Helmer (Act 3)"
                analysis="One of the play's defining lines. The &lsquo;home&rsquo; that Torvald imagined as moral sanctuary is reclassified as a place of childish make-believe. &lsquo;Play-room&rsquo; combines the play's key symbols &mdash; doll, dance, costume &mdash; under one roof, and subverts the domestic ideal of Patmore and Ruskin: the angel in the house is in fact a child playing with adults."
              />
              <QuoteCard
                quote="I have been your doll-wife, just as at home I used to be papa's doll-child."
                speaker="Nora to Helmer (Act 3)"
                analysis="The single most important sentence of Nora's self-analysis. She locates the marriage in a continuous lineage of infantilisation, passed from father to husband. The hyphenated coinages &lsquo;doll-wife&rsquo; and &lsquo;doll-child&rsquo; underline that for Nora, womanhood under patriarchy has never had two distinct phases &mdash; she has always been the toy. The line gives the play's title its full force."
              />
              <QuoteCard
                quote="I must stand quite alone, if I am to understand myself and everything about me."
                speaker="Nora to Helmer (Act 3)"
                analysis="The thesis of Nora's departure. &lsquo;Stand quite alone&rsquo; positions independence as an existential condition rather than a sentimental wish. Pairing &lsquo;myself&rsquo; with &lsquo;everything about me&rsquo; is crucial: she needs to learn both interior and world. This is why the children, however loved, cannot now be the answer &mdash; she cannot find herself while still defined by her duties to others."
              />
              <QuoteCard
                quote="I must try to educate myself."
                speaker="Nora to Helmer (Act 3)"
                analysis="A devastatingly simple line in context. Nora is in her late twenties, the mother of three, the supposed mistress of a household, and she announces that her education has not yet begun. The word &lsquo;try&rsquo; concedes that she does not know whether she will succeed. Ibsen presents self-education as the precondition of adult selfhood, an explicitly Enlightenment-feminist position."
              />
              <QuoteCard
                quote="I believe that before all else I am a human being, just as much as you are."
                speaker="Nora to Helmer (Act 3)"
                analysis="Often quoted as the play's humanist core. &lsquo;Human being&rsquo; (Norwegian menneske) is the play's key term. Nora does not assert female superiority or special female nature &mdash; she demands the most basic recognition that she belongs to the same category as Torvald. The phrase &lsquo;just as much as you are&rsquo; is grammatically modest but historically charged: it places wife and husband on identical ontological footing, a premise nineteenth-century law did not always concede."
              />
              <QuoteCard
                quote="Millions of women have done so."
                speaker="Nora to Helmer (Act 3)"
                analysis="When Helmer protests that no man would sacrifice his honour for love, Nora's reply &mdash; that millions of women have done so &mdash; punctures his rhetoric. He has been speaking as if female sacrifice is unthinkable; she informs him it is the daily condition of half the population. Ibsen signals here that Nora's individual story is the most ordinary story in the world."
              />
              <QuoteCard
                quote="I am saved!"
                speaker="Helmer (Act 3, on the second letter)"
                analysis="On reading Krogstad's second letter, Torvald's first thought is for himself. The exclamation and the singular pronoun &mdash; &lsquo;I&rsquo; rather than &lsquo;we&rsquo; &mdash; expose the quality of his earlier marital protestations. Ibsen lets Torvald condemn himself in his own dialogue: he never claims to have saved Nora, only to have escaped scandal. This is the moment Nora sees the marriage clearly."
              />
              <QuoteCard
                quote="No man sacrifices his honour, even for one he loves."
                speaker="Helmer to Nora (Act 3)"
                analysis="A line that hands Nora her best argument. Helmer has just elevated &lsquo;honour&rsquo; (a public, masculine, abstract value) above love. Nora replies that millions of women have done exactly that &mdash; sacrificed their reputation, their private comfort, even their bodies, for those they love. Ibsen exposes &lsquo;honour&rsquo; as a male ideology that exempts men from the very sacrifices women are required to make."
              />
              <QuoteCard
                quote="The most wonderful thing of all &mdash; ?"
                speaker="Nora and Helmer (Act 3)"
                analysis="The play's final exchange before the door slam, in Archer's translation. Nora has hoped throughout for &lsquo;the wonderful thing&rsquo; &mdash; the moment when Torvald would step forward and accept the consequences of her crime as theirs together. He did not. Now she names the further wonder: that their life together might become a real marriage. The em-dashed unfinished phrase, taken up by both speakers, leaves the future suspended. The door slam is the only answer."
              />
              <QuoteCard
                quote="From below is heard the reverberation of a heavy door closing."
                speaker="Final stage direction (Act 3)"
                analysis="The final stage direction in Archer's translation &mdash; the &lsquo;door slam heard around the world.&rsquo; The reverberation is acoustic but also political: a sound that travelled across European theatres and provoked the social panic of the 1880s. Ibsen ends not with speech but with a sound effect, refusing to give Helmer &mdash; or society &mdash; the last word. The slam is irreversible: a door that slams cannot be unslammed."
              />
              <QuoteCard
                quote="A room comfortably and tastefully, but not expensively, furnished."
                speaker="Opening stage direction (Act 1)"
                analysis="Archer's translation of Ibsen's opening description of the Helmer drawing room. The carefully poised qualifier &lsquo;but not expensively&rsquo; sets the social register: this is bourgeois respectability, not aristocracy &mdash; a household trying to look right within its means. Realist drama begins with such precise stage directions; the room itself is a character, the &lsquo;doll's house&rsquo; of the title."
              />
              <QuoteCard
                quote="When your terror was over &mdash; not for what threatened me, but for yourself &mdash; when there was nothing more to fear &mdash; then it seemed to you as though nothing had happened."
                speaker="Nora to Helmer (Act 3)"
                analysis="Nora's clearest description of Helmer's reversal between the two letters. The structure of the sentence &mdash; the negative inserted parenthetical &lsquo;not for what threatened me, but for yourself&rsquo; &mdash; performs the analytic move of separating his self-interest from his rhetoric of love. This is Nora at her most lucid and is the moment she ceases to be the doll."
              />
              <QuoteCard
                quote="From this moment, it is no question of happiness, but merely of saving the remnants, the appearance &mdash; "
                speaker="Helmer to Nora (Act 3, on reading the first letter)"
                analysis="Helmer's outburst before the second letter arrives. The triple noun chain &mdash; happiness, remnants, appearance &mdash; descends from the inner to the outer: by the third noun he has admitted that what he is trying to save is reputation. Ibsen's realism allows Helmer to expose himself in dialogue more devastatingly than any third-person narrator could."
              />
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── SYMBOLS */}
        <div id="symbols">
          <Section title="Symbols and Stage Properties" icon="🔑">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Christmas Tree</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The tree is brought in at the start of Act 1, and is described in Ibsen&apos;s
                  stage directions at the start of Act 2 as stripped and dishevelled, with its
                  candles burnt out. It tracks Nora&apos;s own deterioration through the action:
                  ornament in Act 1, ruined in Act 2. As an object of bourgeois display imported
                  into the home for one season of the year, it also figures Nora herself &mdash;
                  brought in to decorate the room and discarded when its use is past. Ibsen places
                  it centre-stage so that the audience watches the marriage and the tree decay
                  together.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Macaroons</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Forbidden by Torvald (he claims they will spoil her teeth), Nora eats them anyway
                  and lies about it. The macaroon is the smallest unit of female disobedience in the
                  play &mdash; private, oral, immediate, a small pleasure taken from a regulated
                  life. Their reappearance in scenes with Dr Rank, when she offers them openly,
                  marks the few spaces in the household where Nora is not under marital
                  surveillance. The trivial sweet stands in for the larger pattern of policed female
                  appetite.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Tarantella</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  An Italian folk dance traditionally believed to expel the venom of the tarantula
                  spider. Nora is to perform it at the Stenborgs&apos; ball in a Neapolitan
                  fisher-girl&apos;s costume Torvald has chosen for her. The dance in Act 2
                  condenses the play&apos;s gender politics: she performs increasingly wildly while
                  he beats time and corrects her. The tarantella is also a metaphor for the entire
                  marriage: Nora is dancing to expel a poison (the lie of the loan, the lie of the
                  marriage), and only the dance lets her delay Torvald from reading the letter. When
                  she changes out of the costume in Act 3, the dance is over.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Locked Letterbox</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In the hall, fixed to the wall, sits a letterbox to which only Torvald has the
                  key. After Krogstad drops his blackmail letter into it in Act 2, the box becomes
                  the play&apos;s most charged property: the truth of Nora&apos;s forgery is
                  physically waiting inside, behind a lock she cannot open. The letterbox
                  literalises male legal authority: the household receives information through
                  Torvald&apos;s key. Mrs Linde&apos;s decision to leave the letter in the box is
                  therefore a deliberate act of routing the truth through, rather than around, male
                  authority &mdash; a refusal to spare the husband at the wife&apos;s expense.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Nora&apos;s Costume</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The Neapolitan fisher-girl&apos;s costume Torvald has chosen for the ball is the
                  play&apos;s most concentrated symbol of female performance. It is a costume he
                  selects, that figures her as exotic, peasant, southern (Italy also being where the
                  loan-funded trip took her), and erotically picturesque. Anne-Marie helps her into
                  it; Mrs Linde mends it. When Nora changes out of the costume in Act 3 into
                  everyday dress, the visual change is the play&apos;s most powerful single image:
                  the doll has stepped out of her costume and become a person in ordinary clothes,
                  ready to walk into ordinary streets.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">The Door</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Ibsen&apos;s stage directions specify the doors of the drawing room with unusual
                  care: the hall door at the back, the door to Helmer&apos;s study, the door to the
                  children&apos;s room. Through them characters arrive and depart, letters travel,
                  the costume is fetched, the children play. The &lsquo;door slam heard around the
                  world&rsquo; at the play&apos;s end uses this most ordinary architectural feature
                  as the climactic moment. By refusing a verbal final line and giving the audience
                  instead a sound offstage, Ibsen makes the door a character: the threshold that
                  contains bourgeois life and that, when crossed, leaves the room (and the social
                  order) silent and incomplete.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Money and the IOU</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  The bond Nora signed with the forged signature is the play&apos;s ticking bomb: a
                  paper object that contains both Nora&apos;s love (it paid for Torvald&apos;s
                  rescue) and her crime (the forgery). Money, banknotes, household allowances,
                  Torvald&apos;s new salary, Krogstad&apos;s wages, Mrs Linde&apos;s search for
                  work, Anne-Marie&apos;s sacrifice for wages &mdash; the play is permeated by
                  financial detail. When Krogstad returns the bond at the end of Act 3, the paper
                  itself loses its threat, but the marriage built on its hidden weight cannot be
                  repaired. Ibsen uses money to argue that bourgeois domestic intimacy is in fact a
                  financial arrangement women are required to administer without legal personhood.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-bold text-foreground">Dr Rank&apos;s Black-Crossed Card</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  In Act 3, Rank leaves visiting cards with a black cross above his name &mdash; the
                  Scandinavian convention for announcing one&apos;s own death. The card is one of
                  the play&apos;s most economical objects: a single small stage property that
                  announces a man&apos;s end with restraint and dignity. It contrasts with
                  Helmer&apos;s loud public emotional reactions and reinforces the theme of
                  inherited disease that runs alongside Nora&apos;s inherited infantilisation. Rank
                  dies offstage, quietly; Nora leaves audibly, with a slam.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ────────────────────────────────── EXAM QUESTIONS */}
        <div id="exam-questions">
          <Section title="A-Level Exam-Style Questions with Planning Notes" icon="✍️">
            <p className="text-sm text-muted-foreground mb-5">
              Five A-Level style questions modelled on AQA and OCR specifications. Each includes a
              thesis, paragraph plan, and contextual angles. Question 5 is comparative, against
              another play exploring gender.
            </p>

            <div className="space-y-6">
              {/* Essay 1 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  1. &ldquo;A Doll&apos;s House is less a play about marriage than a play about
                  identity.&rdquo; In light of this view, examine how Ibsen presents Nora&apos;s
                  journey towards selfhood. (AQA-style, 25 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Marriage in the play is the institution through which Nora&apos;s identity has
                      been suppressed; the &lsquo;identity&rsquo; reading is therefore inseparable
                      from, not opposed to, the &lsquo;marriage&rsquo; reading. Nora&apos;s journey
                      is from performed selfhood to genuine selfhood.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Performed selfhood (Act 1)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Pet names (lark, squirrel), hidden macaroons, secret loan. Nora&apos;s
                      identity is constituted by Helmer&apos;s language. But she also tells Mrs
                      Linde &lsquo;It was I who saved Torvald&apos;s life&rsquo; &mdash; an early
                      flash of agency the play will develop.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Performance under pressure (Act 2)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The tarantella scene: Nora dances increasingly wildly while Helmer beats time.
                      Identity here is choreographed by the husband. A useful AO5 reading is Toril
                      Moi&apos;s argument (Henrik Ibsen and the Birth of Modernism) that this is the
                      moment Ibsen turns drama from external action towards interior recognition.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The recognition (Act 3)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;I have been your doll-wife, just as at home I used to be papa&apos;s
                      doll-child.&rsquo; Nora locates the marriage in a continuum of
                      infantilisation. The change of costume on stage is the visual sign of an
                      identity-shift. &lsquo;I must stand quite alone.&rsquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Counter-views
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Some critics read Nora&apos;s departure as politically essential; early
                      hostile reviewers and the German actress Niemann-Raabe read it as moral
                      failure. Acknowledge that Ibsen withholds Nora&apos;s future: the play ends at
                      the threshold of identity, not its completion.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The view in the question is partly right: in his 1898 speech Ibsen claimed to
                      have written about &lsquo;mankind in general,&rsquo; not exclusively about
                      wives. But the route to that humanism runs through the dismantling of a
                      specific bourgeois marriage. Identity and marriage are the same problem seen
                      from different angles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 2 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  2. Examine the dramatic significance of money in A Doll&apos;s House. (OCR-style
                  close drama analysis, 30 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Money is the play&apos;s underlying mechanism: every relationship is mediated
                      by it, and every female character&apos;s life has been shaped by being denied
                      direct access to it.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The opening: salary and shopping
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Helmer&apos;s promotion frames the play; his teasing about Nora&apos;s
                      spending; Nora&apos;s pleasure in tipping the porter. Money as gendered: he
                      earns, she dispenses. Christmas as the season of conspicuous bourgeois
                      expenditure.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The unauthorised loan and the forgery
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nora cannot legally borrow without male consent; the forgery is the
                      consequence. Connect to nineteenth-century coverture and the Married
                      Women&apos;s Property Acts (1870, 1882). Krogstad&apos;s parallel forgery: the
                      law treats both alike but society does not.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Female labour for wages
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mrs Linde&apos;s loveless first marriage; her search for work in Act 1;
                      Anne-Marie&apos;s surrender of her own daughter for service. Money structures
                      every female biography in the play, even those nominally &lsquo;outside&rsquo;
                      the marriage plot.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The bond as object
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The IOU as physical stage property: signed in love, weaponised in blackmail,
                      returned in retraction. Money is paper that travels through the
                      household&apos;s spaces (the bank, the box, the hall). Trace its movement
                      scene by scene.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The door slam is partly a question about money: how will Nora live? Ibsen
                      refuses to soften the question. The play is unsentimental about the financial
                      structure of the &lsquo;doll&apos;s house&rsquo; &mdash; bourgeois affection
                      rests on bourgeois capital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 3 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  3. &ldquo;Helmer is not a villain; he is the play&apos;s most precise study of
                  male privilege.&rdquo; Discuss. (AQA-style argument essay, 25 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Helmer&apos;s refusal to be a melodrama villain is precisely what makes him so
                      politically incisive: Ibsen indicts a system of male privilege that operates
                      through ordinary, even kindly, men.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Helmer&apos;s evident virtues
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hard-working, refuses bribes, attentive husband, devoted father, financially
                      careful. These virtues are essential to the case Ibsen builds: it is the
                      &lsquo;respectable&rsquo; man, not the obvious tyrant, who keeps the system
                      going.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The pet-name regime
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Lark, squirrel, songbird. Linguistic infantilisation is so habitual Helmer
                      cannot hear it. Names define hierarchy; the play&apos;s opening exchange
                      already gives the audience the diagnosis.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; Honour and reputation
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Krogstad&apos;s familiarity humiliates him; the threatened scandal threatens
                      his standing; he frames the future in terms of appearances. &lsquo;No man
                      sacrifices his honour, even for one he loves.&rsquo; Honour as the male
                      ideology that exempts men from the sacrifices women routinely make.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; The reversal
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      &lsquo;I am saved!&rsquo; The instant pivot from rage to forgiveness as soon
                      as he is personally safe is the play&apos;s most damning moment. Ibsen lets
                      Helmer destroy himself in his own dialogue. Even his reconciliation is
                      possessive.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Yes, the view in the question is right. Helmer is more devastating than a
                      villain: he is sincere, well-meaning and structurally indefensible.
                      Ibsen&apos;s realism makes the political argument unanswerable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 4 */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  4. &ldquo;The tarantella is the play in miniature.&rdquo; Examine how Ibsen uses
                  the dance to dramatise the central concerns of A Doll&apos;s House. (OCR-style
                  close analysis, 30 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The tarantella stages, in a single scene of choreography, the entire problem
                      of female performance, marital control, hidden truth and approaching crisis
                      that the play has been building.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; The dance as performance
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Costume chosen by Helmer, mended by Mrs Linde, taught by Helmer. Femininity
                      here is something the woman performs for the man with the help of other women.
                      Connect to the macaroon scene in Act 1: smaller-scale female performance.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; The dance as concealment
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nora dances in part to keep Helmer away from the letterbox. The performance is
                      now a strategy. Place the dance directly against the locked letterbox:
                      woman&apos;s body distracting from the man&apos;s key.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The dance&apos;s cultural meaning
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The tarantella was historically believed to expel the venom of the spider bite
                      &mdash; a frenzied dance on the edge of hysteria. Ibsen&apos;s setting is
                      deliberate. The poison Nora is dancing out is, in the play&apos;s logic, the
                      lie of her marriage.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Costume change
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      In Act 3, Nora changes out of the costume into everyday dress before the door
                      slam. The tarantella has ended; the woman who emerges is no longer dancing.
                      The visual transition is the play&apos;s dramatic image of female
                      self-recovery.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      The tarantella is not decoration but argument: it shows, without speech, what
                      Ibsen needs the audience to feel about marriage, performance and the limits of
                      bourgeois control over the female body.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essay 5 - Comparative */}
              <div className="rounded-xl border border-violet-500/30 bg-violet-500/10/30 p-5">
                <h4 className="font-bold text-violet-800 dark:text-violet-200 text-base">
                  5. Compare the presentation of constrained female lives in A Doll&apos;s House and
                  one other play you have studied that explores gender (e.g. Tennessee Williams, A
                  Streetcar Named Desire; Caryl Churchill, Top Girls; Shakespeare, Othello).
                  (Comparative essay, AQA-style, 25 marks)
                </h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Thesis (Streetcar example)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Both Ibsen and Williams stage women whose identities have been constructed by
                      male definition; both end with a moment of removal (Nora through the door,
                      Blanche to the asylum). But where Ibsen&apos;s ending is a chosen exit into
                      possible freedom, Williams&apos;s is a forced exit into defeat. The comparison
                      reveals how genre and historical context shape the kind of female ending a
                      play can imagine.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 1 &mdash; Performed femininity
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nora&apos;s tarantella; Blanche&apos;s paper lanterns and Belle Reve fictions.
                      Both women survive by performance. Both performances begin to crack under male
                      scrutiny (Helmer&apos;s tarantella correction; Mitch tearing the paper
                      lantern). Different decades, similar structural insight.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 2 &mdash; Male power and economic dependency
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Helmer&apos;s salary, Stanley&apos;s tenancy and the loss of Belle Reve. Both
                      plays place economic anxiety at the centre of marriage. Ibsen exposes
                      Norwegian / European coverture; Williams exposes the postwar United States,
                      where female respectability still depended on male income.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 3 &mdash; The truth-event
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Krogstad&apos;s letter; Stanley&apos;s revelation of Blanche&apos;s past. Both
                      endings turn on a male discovery of female &lsquo;crime&rsquo; (forgery;
                      sexual past). The plays differ on what is &lsquo;criminal&rsquo;: Ibsen treats
                      female agency as criminalised; Williams treats female sexuality as
                      criminalised. Both are constructions, not natural categories.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 4 &mdash; Endings: the door and the doctor
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Nora exits through her own front door, slamming it on the marriage. Blanche
                      exits on the arm of a doctor, trusting in &lsquo;the kindness of
                      strangers.&rsquo; The contrast is between agency and surrender. But in both
                      cases the woman is removed from the household; the question is who chose.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Paragraph 5 &mdash; Context
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      1879 first-wave feminism vs late-1940s postwar America. Ibsen&apos;s door slam
                      was answered, slowly, by the suffragette movement and successive Married
                      Women&apos;s Property Acts; Williams&apos;s play appeared at a moment of
                      female re-domestication after wartime work. Historical context shapes whether
                      the heroine&apos;s exit reads as opening or closure.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                      Conclusion
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Both plays insist that women in patriarchal households are constrained to the
                      point of unsustainability. Ibsen offers an exit; Williams offers a tragic
                      removal. The pairing exposes how genre and history shape what kind of female
                      ending is imaginable on stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* ────────────────────────────────── A-LEVEL EXEMPLAR POINTS */}
      <div id="a-level-points">
        <Section title="A-Level Exemplar Points and Interpretations" icon="⭐">
          <p className="text-sm text-muted-foreground mb-4 italic">
            Higher-level interpretations to push responses into the upper bands. Each engages
            authorial method, alternative critical readings (AO5) and theatrical effect (AO2).
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                1. Ibsen Hijacks the &ldquo;Well-Made Play&rdquo;
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Recognise the play&apos;s formal sleight of hand. Ibsen sets up the conventions of a
                Scribean well-made plot &mdash; concealed letter, blackmail, locked box, late
                documentary truth &mdash; and then refuses the genre&apos;s mandatory final
                reconciliation. As James McFarlane observed, the door slam is not just a feminist
                gesture but a generic one: Ibsen breaks the form on stage in front of his audience.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                2. The Children Are Off-Stage on Purpose
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ibsen is often charged with making Nora a bad mother. A more careful reading notices
                that the children are mostly off-stage &mdash; cared for by Anne-Marie &mdash; long
                before Nora leaves. The play&apos;s domestic infrastructure already runs on
                working-class female labour. Nora&apos;s departure does not abandon them to nothing;
                it leaves them where, in practice, they have been throughout the play.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                3. Nora and Krogstad as Mirror Forgers
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The parallel between Nora and Krogstad &mdash; both involved in forgeries, both
                motivated by family responsibility, both threatened with social annihilation &mdash;
                is the play&apos;s structural symmetry. Ibsen uses it to argue that
                &lsquo;crime&rsquo; in this society is gender-neutral but social punishment is not.
                Krogstad can be redeemed by reunion with Mrs Linde; Nora&apos;s redemption can only
                come through walking out. The asymmetry makes the political point.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                4. Mrs Linde as the Play&apos;s Moral Centre
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                It is Mrs Linde, not Nora or Helmer, who decides that the letter must remain in the
                box. She is the play&apos;s moral hinge. Sophisticated responses recognise that her
                counter-relationship with Krogstad &mdash; founded on shared damage and honesty
                &mdash; is Ibsen&apos;s alternative model. The play is not against marriage; it is
                for partnership between adults.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                5. The German Alternative Ending as Critical Evidence
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Reference Ibsen&apos;s reluctantly written second ending &mdash; in which Nora
                collapses on seeing her sleeping children and stays &mdash; as evidence of the
                cultural threat the original ending posed. He famously called it a &ldquo;barbaric
                outrage&rdquo; on his own play. Citing this in an essay shows AO3 contextual depth
                and AO5 awareness of how meaning is shaped by performance and reception history.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                6. Translation Matters
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Different English translations of A Doll&apos;s House (Archer 1889, Meyer, Fjelde,
                McFarlane, Stephens) make different choices about Nora&apos;s register, the pet
                names and the famous lines. Acknowledging the translation you are quoting is good
                A-Level practice and shows AO5 awareness that the text you read is itself an
                interpretive act. This page uses Archer.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                7. The Three Acts as Costume Changes
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Track Nora&apos;s clothing across the play: ordinary dress in Act 1, costume
                preparation in Act 2 culminating in the tarantella, then change-of-costume into
                everyday dress before her departure in Act 3. The play&apos;s structure is itself a
                sequence of dressing and undressing. The costume in Act 2 is the most theatrical,
                the everyday dress in Act 3 the most political. Ibsen&apos;s realism uses the
                wardrobe as argument.
              </p>
            </div>
            <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 p-4">
              <h4 className="font-bold text-violet-700 dark:text-violet-300">
                8. Caveat the &ldquo;First Feminist Play&rdquo; Label
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                In his 1898 speech to the Norwegian Women&apos;s Rights League, Ibsen distanced
                himself from the &ldquo;first feminist play&rdquo; framing. He said he had
                &ldquo;not even quite clear as to just what the woman question really is&rdquo; and
                that he had written about &ldquo;mankind in general,&rdquo; not about the
                women&apos;s movement. A subtle response notes that this is an authorial disclaimer
                to be read carefully &mdash; either as evasion, or as the universalist humanism the
                play in fact dramatises, or as a strategic move to defend the play&apos;s artistic
                seriousness against its political reception. Toril Moi&apos;s Henrik Ibsen and the
                Birth of Modernism is a useful AO5 source on this question, reading the play as
                foundational to dramatic modernism rather than narrowly to feminism.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Exam Tips */}
      <div className="mt-6 rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="text-lg font-bold text-foreground">Exam Tips for A Doll&apos;s House</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Always cite which translation you are using.</strong> A-Level mark schemes
              reward AO5 awareness of the text as an interpretive object. Saying &ldquo;In
              Archer&apos;s 1889 translation...&rdquo; or &ldquo;In McFarlane&apos;s
              translation...&rdquo; immediately signals critical sophistication.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the language of drama.</strong> &ldquo;Stage direction,&rdquo;
              &ldquo;dramatic irony,&rdquo; &ldquo;exit,&rdquo; &ldquo;blocking,&rdquo;
              &ldquo;property&rdquo; (for stage object), &ldquo;set,&rdquo; &ldquo;curtain.&rdquo; A
              Doll&apos;s House is a play and should be analysed as performance, not as prose.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Connect to Realism.</strong> Always frame Ibsen as a founder of theatrical
              Realism, alongside Strindberg and Chekhov, breaking with the well-made play and
              melodrama.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Use the German alternative ending.</strong> Mentioning Ibsen&apos;s
              reluctantly written second ending, and his description of it as a &ldquo;barbaric
              outrage,&rdquo; is one of the highest-yield context points available.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Reference the Married Women&apos;s Property Acts.</strong> Specific historical
              context (1870, 1882 in Britain) is more persuasive than vague gestures at
              &ldquo;Victorian society.&rdquo;
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Caveat the &ldquo;feminist play&rdquo; framing.</strong> Note Ibsen&apos;s
              1898 disclaimer at the Norwegian Women&apos;s Rights League. The play dramatises
              consequences feminism would later articulate, but Ibsen himself disclaimed the
              programmatic reading. Engaging with this tension is high-AO5.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong>Take Mrs Linde seriously.</strong> Many candidates focus exclusively on Nora
              and Helmer. Strong responses notice that Mrs Linde is the play&apos;s moral hinge,
              that her relationship with Krogstad is Ibsen&apos;s alternative model, and that female
              friendship enables the central truth-event.
            </span>
          </li>
        </ul>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-xs text-muted-foreground">
        <p>
          <em>A Doll&apos;s House</em> (Et dukkehjem) by Henrik Ibsen was first published in
          Copenhagen on 4 December 1879 and first performed at the Royal Theatre, Copenhagen, on 21
          December 1879. Ibsen died in 1906; the original Norwegian text and the early English
          translations (including William Archer&apos;s 1889 translation, used for all quotations on
          this page) are in the <strong>public domain</strong>. When you cite the play in an exam,
          name the translation you have read.
        </p>
      </footer>
    </>
  )
}
