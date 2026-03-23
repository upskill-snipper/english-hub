import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Macbeth Study Guide - Cambridge IGCSE English Literature",
  description:
    "Complete Macbeth study guide for Cambridge IGCSE English Literature. Plot summary, character analysis, themes, 20+ key quotes with analysis, context, and exam question practice.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const keyQuotes = [
  {
    quote: "Fair is foul, and foul is fair",
    speaker: "The Witches",
    act: "Act 1, Scene 1",
    analysis:
      "Establishes the central theme of moral inversion. The chiasmus signals that appearances are deceptive and the natural order will be disrupted throughout the play.",
  },
  {
    quote: "Stars, hide your fires; / Let not light see my black and deep desires",
    speaker: "Macbeth",
    act: "Act 1, Scene 4",
    analysis:
      "Macbeth already harbours ambition before Lady Macbeth's influence. The imperative verb 'hide' and imagery of darkness versus light foreshadow his descent into evil.",
  },
  {
    quote: "Look like th'innocent flower, / But be the serpent under't",
    speaker: "Lady Macbeth",
    act: "Act 1, Scene 5",
    analysis:
      "Biblical allusion to the serpent in Eden. Lady Macbeth counsels deception, reinforcing the 'fair is foul' motif and showing her as the driving force behind the murder plot.",
  },
  {
    quote: "Unsex me here, / And fill me from the crown to the toe top-full / Of direst cruelty",
    speaker: "Lady Macbeth",
    act: "Act 1, Scene 5",
    analysis:
      "Lady Macbeth rejects femininity, associating it with compassion. The violent imperative 'unsex me' and the invocation of spirits challenge Jacobean gender roles and link ambition to the supernatural.",
  },
  {
    quote: "Is this a dagger which I see before me, / The handle toward my hand?",
    speaker: "Macbeth",
    act: "Act 2, Scene 1",
    analysis:
      "The hallucinated dagger represents Macbeth's psychological torment. The rhetorical question shows his wavering resolve, while the dagger pointing toward Duncan's chamber suggests fate or temptation guiding him.",
  },
  {
    quote: "Will all great Neptune's ocean wash this blood / Clean from my hand?",
    speaker: "Macbeth",
    act: "Act 2, Scene 2",
    analysis:
      "Hyperbolic imagery conveys the permanence of guilt. The classical allusion to Neptune elevates the crime to a cosmic scale, foreshadowing the blood motif that recurs throughout.",
  },
  {
    quote: "A little water clears us of this deed",
    speaker: "Lady Macbeth",
    act: "Act 2, Scene 2",
    analysis:
      "Contrasts sharply with Macbeth's guilt. Her dismissive tone and the understatement 'a little water' reveal her pragmatism here, which makes her later breakdown (Act 5) even more dramatically powerful.",
  },
  {
    quote: "O, full of scorpions is my mind, dear wife!",
    speaker: "Macbeth",
    act: "Act 3, Scene 2",
    analysis:
      "The metaphor of scorpions conveys paranoia and mental anguish. The intimate address 'dear wife' is poignant as it is one of the last moments of closeness between them before their relationship deteriorates.",
  },
  {
    quote: "Blood will have blood",
    speaker: "Macbeth",
    act: "Act 3, Scene 4",
    analysis:
      "Proverbial language acknowledges that violence begets violence. Macbeth recognises the cycle of retribution but is unable to stop. The monosyllabic repetition creates a heavy, fatalistic rhythm.",
  },
  {
    quote: "Double, double toil and trouble; / Fire burn, and cauldron bubble",
    speaker: "The Witches",
    act: "Act 4, Scene 1",
    analysis:
      "Trochaic tetrameter breaks from the iambic pentameter of the rest of the play, marking the witches as unnatural. The incantatory rhythm and alliteration create a ritualistic, menacing atmosphere.",
  },
  {
    quote: "None of woman born / Shall harm Macbeth",
    speaker: "Second Apparition",
    act: "Act 4, Scene 1",
    analysis:
      "An equivocation: Macduff was 'from his mother's womb / Untimely ripp'd' (caesarean). Shakespeare shows how the witches' prophecies are technically true but deliberately misleading, punishing Macbeth's overconfidence.",
  },
  {
    quote: "He has no children. All my pretty ones? / Did you say all?",
    speaker: "Macduff",
    act: "Act 4, Scene 3",
    analysis:
      "Macduff's grief is raw and human, offering a moral counterpoint to Macbeth. The repeated 'all' and the anguished questions humanise the political conflict and highlight the human cost of tyranny.",
  },
  {
    quote: "Out, damned spot! Out, I say!",
    speaker: "Lady Macbeth",
    act: "Act 5, Scene 1",
    analysis:
      "The imagined bloodstain echoes 'a little water clears us of this deed' and reveals her psychological collapse. The imperative 'Out!' is impotent; she cannot command away guilt as she once commanded Macbeth.",
  },
  {
    quote: "All the perfumes of Arabia will not sweeten this little hand",
    speaker: "Lady Macbeth",
    act: "Act 5, Scene 1",
    analysis:
      "Parallels Macbeth's 'Neptune's ocean' speech. The sensory shift from sight (blood) to smell deepens the guilt motif. 'Little hand' is a rare moment of vulnerability from a character defined by her strength.",
  },
  {
    quote: "I have lived long enough. My way of life / Is fall'n into the sere, the yellow leaf",
    speaker: "Macbeth",
    act: "Act 5, Scene 3",
    analysis:
      "Autumnal imagery conveys decay and disillusionment. Macbeth recognises that he has sacrificed everything (honour, friendship, love) for a crown that brings no fulfilment. The tone is weary rather than defiant.",
  },
  {
    quote: "She should have died hereafter; / There would have been a time for such a word",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "Macbeth's muted response to Lady Macbeth's death reveals emotional numbness. 'Hereafter' is ambiguous: it could mean 'later' or 'in the afterlife', reflecting his fractured relationship with time and meaning.",
  },
  {
    quote: "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "One of Shakespeare's most famous soliloquies. The triple repetition and sibilance create a weary, plodding rhythm. Life is reduced to meaningless repetition; nihilism replaces the ambition that once drove him.",
  },
  {
    quote: "Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "The metatheatrical metaphor compares life to a bad actor. 'Struts and frets' conveys pointless agitation. This existential despair is Macbeth's final philosophical position: a complete inversion of his earlier ambition.",
  },
  {
    quote: "It is a tale / Told by an idiot, full of sound and fury, / Signifying nothing",
    speaker: "Macbeth",
    act: "Act 5, Scene 5",
    analysis:
      "The culmination of the 'Tomorrow' soliloquy. The juxtaposition of 'sound and fury' with 'nothing' encapsulates Macbeth's nihilism. For a character who murdered a king, the conclusion that life is meaningless is devastating.",
  },
  {
    quote: "Turn, hell-hound, turn!",
    speaker: "Macduff",
    act: "Act 5, Scene 8",
    analysis:
      "Macduff's epithet reduces Macbeth to a demonic animal. The monosyllabic imperative is forceful and direct, contrasting with Macbeth's elaborate language. Justice is simple; tyranny is complex.",
  },
  {
    quote: "This dead butcher and his fiend-like queen",
    speaker: "Malcolm",
    act: "Act 5, Scene 9",
    analysis:
      "Malcolm's reductive summary strips Macbeth and Lady Macbeth of their complexity. The audience knows they are more than 'butcher' and 'fiend'; this gap between political label and human reality is dramatically powerful.",
  },
];

const characters = [
  {
    name: "Macbeth",
    description:
      "A brave Scottish general whose ambition is ignited by the witches' prophecy and his wife's persuasion. He murders King Duncan and becomes a tyrannical ruler, increasingly isolated and paranoid. His psychological deterioration is the central arc of the play; he moves from heroic soldier to nihilistic tyrant. Shakespeare presents him as both villain and tragic hero, inviting the audience to feel horror and pity simultaneously.",
  },
  {
    name: "Lady Macbeth",
    description:
      "Macbeth's wife and the catalyst for Duncan's murder. She challenges Jacobean gender norms by being more ruthless than her husband in the early acts. Her 'unsex me' soliloquy invokes dark forces to strip her of feminine compassion. However, her psychological collapse in Act 5 (sleepwalking, obsessive hand-washing) reveals that guilt cannot be suppressed indefinitely. Her offstage death symbolises the destruction of their partnership.",
  },
  {
    name: "Banquo",
    description:
      "Macbeth's fellow general who also hears the witches' prophecies but chooses not to act on them. He serves as Macbeth's moral foil: both men are tempted, but Banquo resists. His ghost's appearance at the banquet externalises Macbeth's guilt. Historically, Banquo was the ancestor of King James I, so Shakespeare presents him favourably.",
  },
  {
    name: "Macduff",
    description:
      "The Thane of Fife and the instrument of Macbeth's downfall. His grief at the murder of his family ('All my pretty ones?') is one of the most emotionally powerful moments in the play. He represents loyalty to Scotland over personal ambition. His caesarean birth fulfils the witches' equivocation that 'none of woman born' can harm Macbeth.",
  },
  {
    name: "Duncan",
    description:
      "The King of Scotland, presented as a generous, trusting, and gracious ruler. His murder is the original sin of the play and disrupts the natural order (the Divine Right of Kings). Duncan's goodness heightens the horror of Macbeth's crime and makes the act of regicide seem especially abhorrent.",
  },
  {
    name: "Malcolm",
    description:
      "Duncan's eldest son, who flees to England after his father's murder and eventually returns with an army to reclaim the throne. His testing of Macduff in Act 4, Scene 3, shows political shrewdness. He represents the restoration of legitimate rule and order at the play's end.",
  },
  {
    name: "The Witches (Weird Sisters)",
    description:
      "Three supernatural figures who prophesy Macbeth's rise to power. Their role is ambiguous: do they cause events or merely predict them? They speak in trochaic tetrameter and riddling equivocations. For a Jacobean audience (King James I was fascinated by witchcraft), they would have been genuinely terrifying.",
  },
];

const themes = [
  {
    name: "Ambition",
    detail:
      "The play explores ambition as a destructive force. Macbeth's 'vaulting ambition' overrides his moral judgement, leading to regicide, tyranny, and self-destruction. Shakespeare suggests that unchecked ambition corrupts absolutely; it isolates Macbeth from his wife, his peers, and ultimately from his own humanity.",
  },
  {
    name: "Guilt and Conscience",
    detail:
      "Guilt manifests physically and psychologically: Macbeth hallucinates a dagger and Banquo's ghost; Lady Macbeth sleepwalks and obsessively washes her hands. Blood becomes the central symbol of guilt. Shakespeare demonstrates that while murder can be committed quickly, its psychological consequences are permanent.",
  },
  {
    name: "The Supernatural",
    detail:
      "Witchcraft, prophecy, hallucinations, and ghostly apparitions pervade the play. The supernatural creates atmosphere, drives the plot, and raises questions about fate versus free will. Written for James I (who published a book on witchcraft), the play reflects contemporary anxieties about demonic influence.",
  },
  {
    name: "Kingship and Tyranny",
    detail:
      "Shakespeare contrasts Duncan's benevolent rule with Macbeth's tyranny to explore what makes a good king. The Divine Right of Kings theology meant that regicide was not just murder but a sin against God, which explains the cosmic disturbances (storms, unnatural darkness) following Duncan's death.",
  },
  {
    name: "Appearance versus Reality",
    detail:
      "The motif of deception runs throughout: the witches equivocate, Lady Macbeth tells Macbeth to 'look like th'innocent flower', Macbeth plays the grieving host. The opening paradox 'fair is foul, and foul is fair' establishes that nothing in the play is as it seems.",
  },
  {
    name: "Masculinity and Gender",
    detail:
      "Lady Macbeth equates masculinity with violence and ambition, manipulating Macbeth by questioning his manhood. She herself asks to be 'unsexed', rejecting femininity. The play interrogates Jacobean gender norms, ultimately suggesting that violence is not true strength: Macduff's open grief ('I must also feel it as a man') redefines masculinity.",
  },
  {
    name: "Order and Disorder",
    detail:
      "Duncan's murder triggers chaos: horses eat each other, day turns to night, Scotland becomes diseased. The Great Chain of Being (the Jacobean belief in a divinely ordered hierarchy) is shattered. Malcolm's restoration of the throne at the end symbolises the return to natural order.",
  },
];

const plotSummary = [
  {
    act: "Act 1",
    summary:
      "Three witches prophesy that Macbeth will become Thane of Cawdor and then King. When the first prophecy comes true immediately, Macbeth writes to Lady Macbeth. She resolves that they must kill King Duncan, who is visiting their castle. Macbeth hesitates, but Lady Macbeth questions his manhood and persuades him to proceed.",
  },
  {
    act: "Act 2",
    summary:
      "Macbeth murders Duncan in his sleep, but is so disturbed that he brings the daggers away with him. Lady Macbeth returns them and smears the sleeping guards with blood. Duncan's body is discovered; his sons Malcolm and Donalbain flee to England and Ireland. Macbeth is crowned king.",
  },
  {
    act: "Act 3",
    summary:
      "Macbeth, fearful of Banquo's prophecy (that his descendants will be kings), hires murderers to kill Banquo and his son Fleance. Banquo is killed but Fleance escapes. At a banquet, Macbeth sees Banquo's ghost and reacts wildly, alarming the guests. Lady Macbeth dismisses them. Macbeth resolves to visit the witches again.",
  },
  {
    act: "Act 4",
    summary:
      "The witches show Macbeth three apparitions: a warning about Macduff, the assurance that none 'of woman born' can harm him, and that he is safe until Birnam Wood moves. Emboldened, Macbeth orders the murder of Macduff's wife and children. In England, Macduff learns of his family's slaughter and vows revenge, joining Malcolm's army.",
  },
  {
    act: "Act 5",
    summary:
      "Lady Macbeth sleepwalks, tormented by guilt, and eventually dies (offstage, implied suicide). Malcolm's army advances, using branches from Birnam Wood as camouflage, fulfilling the prophecy. Macbeth fights on despite despair, delivering the 'Tomorrow, and tomorrow, and tomorrow' soliloquy. Macduff reveals he was born by caesarean section, and kills Macbeth. Malcolm is crowned King of Scotland.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function MacbethStudyGuide() {
  return (
    <>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Macbeth &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Plot, characters, themes, 20+ key quotes with analysis, historical context,
            and Cambridge-specific exam question styles.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Navigation ──────────────────────────────────────────── */}
        <nav className="mb-10 flex flex-wrap gap-2 text-sm" aria-label="Page sections">
          {["Plot Summary", "Characters", "Themes", "Key Quotes", "Context", "Exam Questions"].map(
            (s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full border border-[#2E86C1]/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
              >
                {s}
              </a>
            )
          )}
        </nav>

        {/* ── Plot Summary ────────────────────────────────────────── */}
        <section id="plot-summary" aria-labelledby="plot-heading">
          <h2 id="plot-heading" className="text-2xl font-bold text-foreground">
            Plot Summary
          </h2>
          <div className="mt-6 space-y-4">
            {plotSummary.map((act) => (
              <div
                key={act.act}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{act.act}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{act.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Characters ──────────────────────────────────────────── */}
        <section id="characters" aria-labelledby="characters-heading">
          <h2 id="characters-heading" className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>
          <div className="mt-6 space-y-6">
            {characters.map((c) => (
              <div
                key={c.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Themes ──────────────────────────────────────────────── */}
        <section id="themes" aria-labelledby="themes-heading">
          <h2 id="themes-heading" className="text-2xl font-bold text-foreground">
            Key Themes
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {themes.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Key Quotes ──────────────────────────────────────────── */}
        <section id="key-quotes" aria-labelledby="quotes-heading">
          <h2 id="quotes-heading" className="text-2xl font-bold text-foreground">
            Key Quotes ({keyQuotes.length})
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each quote includes the speaker, location, and detailed analysis suitable for
            Cambridge IGCSE responses.
          </p>
          <div className="mt-6 space-y-5">
            {keyQuotes.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-[#2E86C1] bg-card p-5 shadow-md"
              >
                <blockquote className="text-base font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {q.speaker} &mdash; {q.act}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Context ─────────────────────────────────────────────── */}
        <section id="context" aria-labelledby="context-heading">
          <h2 id="context-heading" className="text-2xl font-bold text-foreground">
            Historical &amp; Literary Context
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Gunpowder Plot (1605)</h3>
              <p className="mt-2">
                Macbeth was written in approximately 1606, shortly after the Gunpowder Plot, in
                which Catholic conspirators attempted to assassinate King James I by blowing up
                Parliament. The play&rsquo;s exploration of regicide and treason would have
                resonated powerfully with contemporary audiences who had just witnessed a real
                attempt to murder their king.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">King James I and Witchcraft</h3>
              <p className="mt-2">
                James I was fascinated by witchcraft and published <em>Daemonologie</em> (1597),
                a treatise arguing for the reality of witches. By including the Weird Sisters,
                Shakespeare appealed directly to the king&rsquo;s interests. The portrayal of
                witches as malevolent and deceptive aligned with James&rsquo;s own beliefs.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Divine Right of Kings</h3>
              <p className="mt-2">
                The Jacobean belief that monarchs were appointed by God meant that killing a king
                was not merely murder but a sin against the divine order. This explains the
                unnatural disturbances (darkness at noon, horses eating each other) that follow
                Duncan&rsquo;s death &mdash; nature itself recoils from the crime.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Great Chain of Being</h3>
              <p className="mt-2">
                Elizabethan and Jacobean society believed in a strict hierarchy: God &rarr;
                angels &rarr; king &rarr; nobles &rarr; commoners &rarr; animals. When Macbeth
                disrupts this chain by murdering Duncan, chaos ensues. The play&rsquo;s
                resolution (Malcolm restored to the throne) reaffirms the importance of this
                natural order.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Holinshed&rsquo;s Chronicles</h3>
              <p className="mt-2">
                Shakespeare&rsquo;s main source was Raphael Holinshed&rsquo;s{" "}
                <em>Chronicles of England, Scotland, and Ireland</em> (1577). He significantly
                altered the historical record: the real Macbeth ruled for 17 years and was
                considered a competent king. Shakespeare compressed the timeline and darkened
                Macbeth&rsquo;s character for dramatic effect, while whitewashing Banquo
                (historically a co-conspirator) because Banquo was an ancestor of James I.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Questions ──────────────────────────────────────── */}
        <section id="exam-questions" aria-labelledby="exam-heading">
          <h2 id="exam-heading" className="text-2xl font-bold text-foreground">
            Cambridge-Style Exam Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE Macbeth questions appear in Paper 2 (Drama). You will choose
            between a passage-based question and an essay question. Below are examples of
            both types with guidance on how to approach them.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read Act 1, Scene 7, from &ldquo;If it were done when &rsquo;tis done&rdquo;
                to &ldquo;We will proceed no further in this business.&rdquo; How does
                Shakespeare present Macbeth&rsquo;s inner conflict in this passage?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Work through the passage line by line, identifying key language choices</li>
                  <li>&bull; Analyse the conditional &ldquo;If&rdquo; &mdash; shows Macbeth is not yet committed</li>
                  <li>&bull; Discuss the soliloquy form: private speech reveals genuine thoughts</li>
                  <li>&bull; Connect outward: link to his later decision to proceed and what changes his mind</li>
                  <li>&bull; Use terminology: metaphor, listing, monosyllabic language, caesura</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How does Shakespeare present the theme of guilt in Macbeth?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Plan 3&ndash;4 key points with supporting quotations</li>
                  <li>&bull; Track guilt chronologically: Macbeth&rsquo;s dagger, &lsquo;Neptune&rsquo;s ocean&rsquo;, Banquo&rsquo;s ghost, Lady Macbeth&rsquo;s sleepwalking</li>
                  <li>&bull; Compare how Macbeth and Lady Macbeth experience guilt differently</li>
                  <li>&bull; Discuss Shakespeare&rsquo;s methods: imagery (blood, darkness), dramatic irony, soliloquy</li>
                  <li>&bull; Reference context: Jacobean beliefs about divine punishment for sin</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Explore how Shakespeare presents the relationship between Macbeth and Lady
                Macbeth. How does it change during the course of the play?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Structure chronologically to show the arc of their relationship</li>
                  <li>&bull; Act 1: Lady Macbeth dominant, Macbeth deferential (&lsquo;my dearest partner of greatness&rsquo;)</li>
                  <li>&bull; Act 3: roles begin to reverse; Macbeth acts alone, keeps plans from her</li>
                  <li>&bull; Act 5: they are completely separated; Macbeth&rsquo;s muted response to her death</li>
                  <li>&bull; Analyse how Shakespeare uses form: shared lines of verse early on, separate scenes later</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read Act 5, Scene 1 (Lady Macbeth&rsquo;s sleepwalking scene). How does
                Shakespeare make this such a dramatic and significant moment in the play?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Note the shift to prose: Lady Macbeth no longer speaks in verse, reflecting her mental disintegration</li>
                  <li>&bull; Analyse the Doctor and Gentlewoman as onstage audience &mdash; their horror mirrors ours</li>
                  <li>&bull; Link back to earlier moments: &lsquo;a little water&rsquo; is now ironic; the &lsquo;spot&rsquo; cannot be removed</li>
                  <li>&bull; Discuss dramatic irony: the audience understands her references; the Doctor does not</li>
                  <li>&bull; Consider the significance of this being the last time we see Lady Macbeth alive</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>

    </>
  );
}
