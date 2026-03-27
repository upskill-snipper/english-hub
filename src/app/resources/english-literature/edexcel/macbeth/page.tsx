import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/macbeth' },
  title: "Macbeth Study Guide — Edexcel GCSE English Literature",
  description:
    "Complete Macbeth revision guide for Edexcel GCSE English Literature. Plot summary, character analysis, themes, 20+ key quotes, historical context, and exam technique.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PLOT_SUMMARY = [
  {
    act: "Act 1",
    title: "Prophecy and Temptation",
    summary:
      "Three witches prophesy that Macbeth will become Thane of Cawdor and then King. When the first prophecy comes true, Macbeth writes to Lady Macbeth. She resolves to push him to murder King Duncan, who is visiting their castle that night. Macbeth hesitates but Lady Macbeth questions his manhood and he agrees to the plan.",
  },
  {
    act: "Act 2",
    title: "The Murder of Duncan",
    summary:
      "Macbeth murders Duncan in his sleep, but is immediately tormented by guilt — he imagines a bloody dagger and hears a voice crying 'Sleep no more!' Lady Macbeth takes charge, planting the bloody daggers on the sleeping guards. Duncan's murder is discovered the next morning. Malcolm and Donalbain flee, and Macbeth is crowned King.",
  },
  {
    act: "Act 3",
    title: "Banquo's Murder and the Banquet",
    summary:
      "Fearing Banquo's prophecy (that his descendants will be kings), Macbeth hires murderers to kill Banquo and his son Fleance. Banquo is killed but Fleance escapes. At a royal banquet, Macbeth sees Banquo's ghost and publicly loses control, alarming the thanes. Lady Macbeth tries to cover for him.",
  },
  {
    act: "Act 4",
    title: "The Second Prophecies",
    summary:
      "Macbeth revisits the witches, who show him three apparitions: beware Macduff; no man born of woman can harm Macbeth; he is safe until Birnam Wood moves. Emboldened, Macbeth orders the murder of Macduff's wife and children. Meanwhile, Malcolm and Macduff plan an invasion from England.",
  },
  {
    act: "Act 5",
    title: "Downfall and Death",
    summary:
      "Lady Macbeth sleepwalks, haunted by guilt, and eventually dies (implied suicide). Malcolm's army camouflages itself with branches from Birnam Wood — fulfilling the prophecy. Macduff reveals he was 'from his mother's womb untimely ripped' (born by Caesarean section). Macduff kills Macbeth and Malcolm is crowned King.",
  },
];

const CHARACTERS = [
  {
    name: "Macbeth",
    description:
      "A brave warrior who becomes consumed by ambition after the witches' prophecy. His tragic flaw (hamartia) is his 'vaulting ambition.' He transforms from a noble soldier into a tyrannical king, tormented by guilt and paranoia. His downfall illustrates the destructive power of unchecked ambition.",
    key_quotes: [
      '"Stars, hide your fires; let not light see my black and deep desires"',
      '"Is this a dagger which I see before me?"',
      '"Will all great Neptune\'s ocean wash this blood clean from my hand?"',
      '"I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o\'er"',
      '"Tomorrow, and tomorrow, and tomorrow"',
    ],
  },
  {
    name: "Lady Macbeth",
    description:
      "Macbeth's ambitious and manipulative wife who drives the murder of Duncan. She calls on dark spirits to 'unsex' her and suppress her femininity. Initially the stronger partner, she later collapses under guilt — sleepwalking and obsessively washing her hands. Her decline mirrors Macbeth's rise in tyranny.",
    key_quotes: [
      '"Come, you spirits that tend on mortal thoughts, unsex me here"',
      '"Look like the innocent flower, but be the serpent under\'t"',
      '"Out, damned spot! Out, I say!"',
      '"What, will these hands ne\'er be clean?"',
      '"A little water clears us of this deed"',
    ],
  },
  {
    name: "Banquo",
    description:
      "Macbeth's fellow general and friend. He also hears the witches' prophecy (that his descendants will be kings) but, unlike Macbeth, resists temptation. He represents honour and moral integrity — a foil to Macbeth. His ghost haunts Macbeth at the banquet, symbolising inescapable guilt.",
    key_quotes: [
      '"Thou hast it now: King, Cawdor, Glamis, all... and I fear thou played\'st most foully for\'t"',
      '"But \'tis strange; and oftentimes to win us to our harm, the instruments of darkness tell us truths"',
    ],
  },
  {
    name: "Macduff",
    description:
      "The Thane of Fife, loyal to Scotland. He suspects Macbeth from the start, flees to England to support Malcolm, and ultimately kills Macbeth. His grief at the murder of his family ('all my pretty chickens and their dam') makes his revenge deeply personal.",
    key_quotes: [
      '"O horror, horror, horror!"',
      '"He has no children"',
      '"Turn, hell-hound, turn!"',
      '"Macduff was from his mother\'s womb untimely ripped"',
    ],
  },
  {
    name: "The Witches",
    description:
      "Three supernatural figures whose prophecies set the tragedy in motion. They are ambiguous — do they control fate or merely reveal it? They represent evil, temptation, and the disruption of the natural order. Shakespeare uses them to create an atmosphere of moral corruption.",
    key_quotes: [
      '"Fair is foul, and foul is fair"',
      '"All hail, Macbeth, that shalt be king hereafter!"',
      '"Double, double, toil and trouble; fire burn and cauldron bubble"',
      '"By the pricking of my thumbs, something wicked this way comes"',
    ],
  },
  {
    name: "Duncan",
    description:
      "The good and virtuous King of Scotland. His trust in Macbeth makes his murder all the more treacherous. He represents the Divine Right of Kings — his murder is not just a political act but a crime against God and nature.",
    key_quotes: [
      '"This castle hath a pleasant seat"',
      '"He was a gentleman on whom I built an absolute trust"',
    ],
  },
  {
    name: "Malcolm",
    description:
      "Duncan's son and rightful heir. He flees to England after his father's murder, tests Macduff's loyalty, then returns to defeat Macbeth and restore order. He represents the restoration of legitimate kingship.",
    key_quotes: [
      '"This dead butcher and his fiend-like queen"',
    ],
  },
];

const THEMES = [
  {
    theme: "Ambition",
    description:
      "The central theme. Macbeth's 'vaulting ambition' drives him to regicide and tyranny. Shakespeare shows that ambition without moral restraint leads to destruction. Lady Macbeth's ambition is equally fierce but takes a different toll — she is destroyed by guilt rather than violence.",
    quotes: [
      '"I have no spur to prick the sides of my intent, but only vaulting ambition, which o\'erleaps itself"',
      '"Stars, hide your fires; let not light see my black and deep desires"',
    ],
  },
  {
    theme: "Guilt and Conscience",
    description:
      "Both Macbeth and Lady Macbeth suffer overwhelming guilt. Macbeth hallucinates (the dagger, Banquo's ghost) while Lady Macbeth sleepwalks. Shakespeare suggests that guilt is an inescapable consequence of evil — even the most hardened criminal cannot outrun their conscience.",
    quotes: [
      '"Will all great Neptune\'s ocean wash this blood clean from my hand?"',
      '"Out, damned spot! Out, I say!"',
      '"Macbeth does murder sleep"',
    ],
  },
  {
    theme: "The Supernatural",
    description:
      "The witches, apparitions, Banquo's ghost, and the floating dagger create a world where the boundary between natural and supernatural is blurred. James I was fascinated by witchcraft — Shakespeare explores whether the supernatural controls human destiny or merely reveals inner desires.",
    quotes: [
      '"Fair is foul, and foul is fair"',
      '"Is this a dagger which I see before me, the handle toward my hand?"',
      '"By the pricking of my thumbs, something wicked this way comes"',
    ],
  },
  {
    theme: "Kingship and Tyranny",
    description:
      "Shakespeare contrasts Duncan (a good, trusting king) and Edward the Confessor (a healing king) with Macbeth (a tyrant). The play explores what makes a good ruler — legitimacy, virtue, and care for subjects. Macbeth's tyranny disrupts the natural order and brings suffering to Scotland.",
    quotes: [
      '"He was a gentleman on whom I built an absolute trust"',
      '"This dead butcher and his fiend-like queen"',
      '"Bleed, bleed, poor country!"',
    ],
  },
  {
    theme: "Masculinity and Gender",
    description:
      "Lady Macbeth challenges traditional gender roles, asking to be 'unsexed' and questioning Macbeth's manhood. Macbeth associates violence with masculinity. Shakespeare suggests that rigid ideas of masculinity can be destructive — Lady Macbeth's rejection of femininity leads to her breakdown.",
    quotes: [
      '"Come, you spirits that tend on mortal thoughts, unsex me here"',
      '"When you durst do it, then you were a man"',
      '"Bring forth men-children only"',
    ],
  },
  {
    theme: "Appearance vs Reality",
    description:
      "Nothing is as it seems. The witches' prophecies are deceptive half-truths. Macbeth and Lady Macbeth hide their murderous intent behind hospitality. The theme is established in the opening: 'Fair is foul, and foul is fair.'",
    quotes: [
      '"Look like the innocent flower, but be the serpent under\'t"',
      '"False face must hide what the false heart doth know"',
      '"Fair is foul, and foul is fair"',
    ],
  },
  {
    theme: "Fate vs Free Will",
    description:
      "Do the witches determine Macbeth's fate, or does he choose his path? Banquo hears the same prophecies but does not act on them. Shakespeare leaves this ambiguous — but Macbeth's soliloquies show him actively choosing evil, suggesting free will bears the greater responsibility.",
    quotes: [
      '"If chance will have me king, why, chance may crown me without my stir"',
      '"I am settled, and bend up each corporal agent to this terrible feat"',
    ],
  },
];

const KEY_QUOTES = [
  { quote: '"Fair is foul, and foul is fair"', speaker: "Witches (1.1)", significance: "Establishes the theme of appearance vs reality and moral inversion. The play's world is one where nothing can be trusted." },
  { quote: '"Stars, hide your fires; let not light see my black and deep desires"', speaker: "Macbeth (1.4)", significance: "Macbeth's first aside reveals his ambition and awareness that his desires are sinful. Light/dark imagery links to good/evil." },
  { quote: '"Come, you spirits that tend on mortal thoughts, unsex me here"', speaker: "Lady Macbeth (1.5)", significance: "She calls on supernatural evil to strip her of feminine compassion. Challenges Jacobean gender norms." },
  { quote: '"Look like the innocent flower, but be the serpent under\'t"', speaker: "Lady Macbeth (1.5)", significance: "Biblical allusion to the serpent in Eden. Deception is central to the Macbeths' plan." },
  { quote: '"Is this a dagger which I see before me, the handle toward my hand?"', speaker: "Macbeth (2.1)", significance: "A hallucination showing his inner conflict. The dagger points toward Duncan — temptation made visible." },
  { quote: '"Will all great Neptune\'s ocean wash this blood clean from my hand?"', speaker: "Macbeth (2.2)", significance: "Hyperbole expressing overwhelming guilt. The ocean cannot remove the stain of regicide." },
  { quote: '"A little water clears us of this deed"', speaker: "Lady Macbeth (2.2)", significance: "Contrasts with Macbeth's guilt — she is dismissive and practical. Ironic foreshadowing of her later breakdown." },
  { quote: '"Macbeth does murder sleep"', speaker: "Macbeth (2.2)", significance: "Sleep symbolises innocence and peace. By killing Duncan, Macbeth has destroyed his own peace of mind forever." },
  { quote: '"Nought\'s had, all\'s spent, where our desire is got without content"', speaker: "Lady Macbeth (3.2)", significance: "Despite gaining the crown, they have no satisfaction. Power without peace is worthless." },
  { quote: '"I am in blood stepped in so far that, should I wade no more, returning were as tedious as go o\'er"', speaker: "Macbeth (3.4)", significance: "Metaphor of a river of blood — he is so deep in murder that turning back is as hard as continuing. Shows his moral descent." },
  { quote: '"Double, double, toil and trouble"', speaker: "Witches (4.1)", significance: "Incantation creating an atmosphere of evil and chaos. Rhyming couplets suggest ritualistic, unnatural magic." },
  { quote: '"By the pricking of my thumbs, something wicked this way comes"', speaker: "Second Witch (4.1)", significance: "Even the witches now call Macbeth 'wicked' — he has surpassed their evil." },
  { quote: '"Out, damned spot! Out, I say!"', speaker: "Lady Macbeth (5.1)", significance: "Sleepwalking scene. The blood she once dismissed now haunts her. Guilt has overwhelmed her rational mind." },
  { quote: '"What, will these hands ne\'er be clean?"', speaker: "Lady Macbeth (5.1)", significance: "Echoes Macbeth's earlier guilt about bloody hands. Their roles have reversed — she is now consumed." },
  { quote: '"Life\'s but a walking shadow, a poor player that struts and frets his hour upon the stage"', speaker: "Macbeth (5.5)", significance: "Nihilistic soliloquy after Lady Macbeth's death. Life is meaningless — a theatrical metaphor reflecting Shakespeare's own medium." },
  { quote: '"Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day"', speaker: "Macbeth (5.5)", significance: "Repetition and monosyllables create a weary, hopeless tone. Macbeth sees life as tedious and pointless." },
  { quote: '"I have lived long enough. My way of life is fallen into the sere, the yellow leaf"', speaker: "Macbeth (5.3)", significance: "Autumnal imagery. Macbeth recognises that he has lost everything that makes life worth living — honour, love, friends." },
  { quote: '"Turn, hell-hound, turn!"', speaker: "Macduff (5.8)", significance: "Macduff confronts Macbeth. 'Hell-hound' dehumanises Macbeth and links him to the demonic." },
  { quote: '"Macduff was from his mother\'s womb untimely ripped"', speaker: "Macduff (5.8)", significance: "The witches' equivocation is revealed. The prophecy was a half-truth — Macduff was born by Caesarean." },
  { quote: '"This dead butcher and his fiend-like queen"', speaker: "Malcolm (5.9)", significance: "Malcolm's final judgement. 'Butcher' reduces Macbeth to a mindless killer; 'fiend-like' demonises Lady Macbeth." },
  { quote: '"When you durst do it, then you were a man"', speaker: "Lady Macbeth (1.7)", significance: "She weaponises masculinity to manipulate Macbeth. Links violence to manhood — a toxic ideal." },
  { quote: '"Full of scorpions is my mind, dear wife"', speaker: "Macbeth (3.2)", significance: "Metaphor revealing paranoia and torment. The scorpion suggests dangerous, self-destructive thoughts." },
];

const CONTEXT_POINTS = [
  {
    topic: "James I and the Gunpowder Plot (1605)",
    detail:
      "Macbeth was likely written in 1606, shortly after the Gunpowder Plot — a Catholic conspiracy to blow up Parliament and kill James I. The play's focus on regicide and treason would have resonated powerfully. Shakespeare flatters James by portraying his ancestor Banquo as honourable.",
  },
  {
    topic: "The Divine Right of Kings",
    detail:
      "James I believed kings were appointed by God. Killing a king was therefore a sin against God, not just a political crime. This explains why Duncan's murder is presented as unnatural — nature itself reacts with storms and darkness.",
  },
  {
    topic: "Witchcraft and the Supernatural",
    detail:
      "James I wrote a book on witchcraft called 'Daemonologie' (1597) and passed laws against witchcraft. The witches in Macbeth would have been taken seriously by the Jacobean audience as genuine agents of evil, not mere fantasy.",
  },
  {
    topic: "The Great Chain of Being",
    detail:
      "Elizabethan and Jacobean society believed in a strict hierarchy — God, then the monarch, then nobles, then commoners. Macbeth's regicide disrupts this chain, causing chaos in the natural world (horses eating each other, darkness during the day).",
  },
  {
    topic: "Gender Roles",
    detail:
      "Women were expected to be submissive, nurturing, and obedient. Lady Macbeth's rejection of femininity ('unsex me here') would have been deeply shocking. Her eventual madness could be read as punishment for transgressing gender norms.",
  },
  {
    topic: "Tragedy as a Genre",
    detail:
      "Macbeth follows the Aristotelian model of tragedy: a noble hero with a fatal flaw (hamartia) experiences a reversal of fortune (peripeteia) and achieves recognition (anagnorisis) before catastrophe. The audience experiences catharsis — emotional release through pity and fear.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function MacbethPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-white/70 hover:text-white"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Macbeth — Full Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
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
              ["#plot", "Plot Summary"],
              ["#characters", "Character Analysis"],
              ["#themes", "Key Themes"],
              ["#quotes", "Key Quotes (20+)"],
              ["#context", "Historical Context"],
              ["#exam", "Edexcel Exam Technique"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-primary hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Plot summary ──────────────────────────────────────── */}
        <section id="plot" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Plot Summary</h2>
          <div className="mt-6 space-y-6">
            {PLOT_SUMMARY.map((act) => (
              <div
                key={act.act}
                className="rounded-xl border border-border p-6 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#1A5276] px-3 py-1 text-xs font-bold text-white">
                    {act.act}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {act.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {act.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Characters ────────────────────────────────────────── */}
        <section id="characters" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>
          <div className="mt-6 space-y-6">
            {CHARACTERS.map((char) => (
              <div
                key={char.name}
                className="rounded-xl border border-border p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-foreground">
                  {char.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Key Quotes
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {char.key_quotes.map((q) => (
                      <li
                        key={q}
                        className="text-sm italic text-muted-foreground"
                      >
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
              <div
                key={t.theme}
                className="rounded-xl border-l-4 border-[#1A5276] bg-muted p-6"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {t.theme}
                </h3>
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
          <h2 className="text-2xl font-bold text-foreground">
            Key Quotes (20+)
          </h2>
          <p className="mt-2 text-muted-foreground">
            Memorise these quotes — the Edexcel exam is closed-book. Short
            quotes that you can embed naturally into sentences are best.
          </p>
          <div className="mt-6 space-y-4">
            {KEY_QUOTES.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-4 shadow-md"
              >
                <p className="text-sm font-semibold italic text-foreground">
                  {q.quote}
                </p>
                <p className="mt-1 text-xs font-medium text-primary">
                  — {q.speaker}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {q.significance}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ───────────────────────────────────────────── */}
        <section id="context" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Historical Context
          </h2>
          <p className="mt-2 text-muted-foreground">
            Context is assessed through AO3. The best responses weave context
            into analysis rather than treating it as a bolt-on paragraph.
          </p>
          <div className="mt-6 space-y-4">
            {CONTEXT_POINTS.map((c) => (
              <div
                key={c.topic}
                className="rounded-xl border border-border p-5 shadow-md"
              >
                <h3 className="font-bold text-foreground">{c.topic}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section id="exam" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">
            Edexcel Exam Technique for Macbeth
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                What Does an Edexcel Macbeth Question Look Like?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You will be given one question (no choice) that asks about a
                character, theme, or idea across the whole play. There is no
                extract — you must recall your own evidence.
              </p>
              <div className="mt-4 rounded-lg border-2 border-dashed border-[#2E86C1] bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Example Question
                </p>
                <p className="mt-2 text-sm text-foreground font-medium">
                  Explore how Shakespeare presents the theme of guilt in
                  <em> Macbeth</em>.
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  You must refer to the context of the play in your answer.
                  (40 marks, including 4 marks for SPaG)
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                How to Structure Your Answer
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">1</span>
                  <span>
                    <strong>Brief introduction</strong> — outline Shakespeare&apos;s overall presentation of the theme/character in 2-3 sentences. Mention the play&apos;s context.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">2</span>
                  <span>
                    <strong>4-5 analytical paragraphs</strong> covering different moments across the play. Each paragraph: Point &rarr; Evidence (embedded quote) &rarr; Analysis of language/technique &rarr; Context woven in.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">3</span>
                  <span>
                    <strong>Track development</strong> — show how the theme/character changes across the play (beginning &rarr; middle &rarr; end).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">4</span>
                  <span>
                    <strong>Conclude briefly</strong> — summarise Shakespeare&apos;s message and its relevance to the Jacobean audience.
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border-2 border-[#2E86C1] bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Top Tips for Top Marks
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Use Shakespeare&apos;s name — &quot;Shakespeare presents...&quot; shows awareness of authorial intent.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Analyse individual words within quotes — don&apos;t just identify techniques, explain their effect.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Embed context into analysis: &quot;A Jacobean audience would have seen Macbeth&apos;s regicide as a sin against God, given the widespread belief in the Divine Right of Kings.&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Use literary terminology: soliloquy, dramatic irony, tragic hero, hamartia, pathetic fallacy, juxtaposition, foreshadowing.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Consider alternative interpretations: &quot;While some critics read Lady Macbeth as purely villainous, others argue she is a victim of patriarchal expectations...&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Remember SPaG is worth 4 marks — write accurately and use paragraphs.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
