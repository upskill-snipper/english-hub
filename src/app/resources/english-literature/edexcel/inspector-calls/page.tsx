import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "An Inspector Calls Study Guide — Edexcel GCSE English Literature",
  description:
    "Complete An Inspector Calls revision guide for Edexcel GCSE English Literature. Plot, characters, themes, 20+ key quotes, context, and Edexcel exam technique.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PLOT_SUMMARY = [
  {
    act: "Act 1",
    title: "The Engagement Party and the Inspector's Arrival",
    summary:
      "The Birling family are celebrating the engagement of Sheila Birling to Gerald Croft. Arthur Birling delivers a speech about self-reliance and dismisses community responsibility. Inspector Goole arrives and announces that a young woman, Eva Smith, has died after swallowing disinfectant. Birling is revealed to have sacked Eva from his factory for leading a strike for higher wages. Sheila discovers she had Eva fired from her next job at Milwards out of jealousy.",
  },
  {
    act: "Act 2",
    title: "Gerald and Mrs Birling's Involvement",
    summary:
      "Gerald confesses to having an affair with Eva (now calling herself Daisy Renton). He kept her as his mistress before ending the relationship. Mrs Birling is confronted — as chair of the Brumley Women's Charity, she refused Eva's appeal for help when she was pregnant and destitute. Mrs Birling insists the father of Eva's child should bear full responsibility, unknowingly condemning her own son.",
  },
  {
    act: "Act 3",
    title: "Eric's Confession and the Inspector's Departure",
    summary:
      "Eric is revealed as the father of Eva's child. He had forced himself on her while drunk, got her pregnant, and stolen money from his father's firm to support her. The Inspector delivers his final speech about social responsibility — 'We are members of one body. We are responsible for each other.' After he leaves, Gerald and Birling discover that no girl has died at the Infirmary and suspect the Inspector was a hoax. The older generation are relieved, but Sheila and Eric remain changed. The phone rings: a girl has just died, and a police inspector is coming to question them.",
  },
];

const CHARACTERS = [
  {
    name: "Inspector Goole",
    description:
      "A mysterious figure who may be supernatural, a time-traveller, or Priestley's mouthpiece. He systematically exposes each Birling's responsibility for Eva's death. He is authoritative, moral, and unsettling. His name — 'Goole' — sounds like 'ghoul,' suggesting he may not be a real inspector at all. He represents Priestley's socialist message.",
    key_quotes: [
      '"We don\'t live alone. We are members of one body. We are responsible for each other"',
      '"If men will not learn that lesson, then they will be taught it in fire and blood and anguish"',
      '"It\'s better to ask for the earth than to take it"',
      '"One person and one line of inquiry at a time"',
    ],
  },
  {
    name: "Arthur Birling",
    description:
      "A wealthy factory owner, magistrate, and aspiring knight. He is pompous, self-important, and obsessed with status. His dramatic irony-laden speeches (dismissing the possibility of war, calling the Titanic 'unsinkable') expose his foolishness. He represents the capitalist class that Priestley criticises. He refuses to accept responsibility and is mainly concerned about a public scandal.",
    key_quotes: [
      '"a man has to mind his own business and look after himself and his own"',
      '"The Titanic... unsinkable, absolutely unsinkable"',
      '"a hard-headed, practical man of business"',
      '"I was quite justified"',
      '"The famous younger generation who know it all"',
    ],
  },
  {
    name: "Sheila Birling",
    description:
      "Birling's daughter. Initially presented as naive and materialistic, she undergoes the greatest transformation. She accepts responsibility for having Eva fired, shows genuine remorse, and becomes increasingly critical of her parents' attitudes. She represents hope — the younger generation who can learn and change. By the end, she has adopted the Inspector's moral position.",
    key_quotes: [
      '"But these girls aren\'t cheap labour — they\'re people"',
      '"I know I\'m to blame — and I\'m desperately sorry"',
      '"You\'re pretending everything\'s just as it was before"',
      '"I felt rotten about it at the time and now I feel a lot worse"',
      '"No, he\'s giving us the rope — so that we\'ll hang ourselves"',
    ],
  },
  {
    name: "Sybil Birling (Mrs Birling)",
    description:
      "Arthur's wife. Cold, snobbish, and prejudiced. She is the most resistant to accepting responsibility. As chair of a charity, she refused to help Eva, judging her for using the Birling name and for being an unmarried pregnant woman. She represents the upper-class hypocrisy and moral failure that Priestley attacks. She condemns the father of Eva's child — not realising it is her own son Eric.",
    key_quotes: [
      '"a girl of that sort"',
      '"I did nothing wrong. I used my influence on the committee, as I was perfectly entitled to do"',
      '"Go and look for the father of the child. It\'s his responsibility"',
      '"I\'m sorry she should have come to such a horrible end. But I accept no blame for it at all"',
    ],
  },
  {
    name: "Eric Birling",
    description:
      "The Birlings' son. He is an alcoholic who forced himself on Eva, got her pregnant, and stole money to support her. Despite his serious flaws, Eric shows genuine remorse and sides with Sheila against their parents. Like Sheila, he represents the capacity of the younger generation to learn. His drinking problem hints at underlying unhappiness beneath the family's prosperous surface.",
    key_quotes: [
      '"I was in that state when a chap easily turns nasty"',
      '"You\'re not the kind of father a chap could go to when he\'s in trouble"',
      '"We did her in all right"',
      '"You don\'t understand anything. You never did"',
    ],
  },
  {
    name: "Gerald Croft",
    description:
      "Sheila's fiance, son of Sir George Croft (a rival manufacturer). He had an affair with Eva/Daisy, rescuing her from another man at the Palace Bar, but ultimately abandoned her when it suited him. Gerald occupies a middle position — he shows some compassion but is ultimately willing to dismiss the Inspector's visit and return to normal. He represents the entitled upper-middle class.",
    key_quotes: [
      '"She was young and pretty and warm-hearted — and intensely grateful"',
      '"Everything\'s all right now, Sheila. What about this ring?"',
      '"that man wasn\'t a police officer"',
    ],
  },
  {
    name: "Eva Smith / Daisy Renton",
    description:
      "The victim. She never appears on stage but is central to the play. She may represent one woman or many — Priestley uses her as a symbol of all exploited working-class people. She is sacked, exploited, rejected, and ultimately driven to suicide. Her invisibility on stage reflects how the working class were invisible to the upper classes.",
    key_quotes: [
      '"A nice little promising life there... and a nasty mess somebody\'s made of it" (Inspector about Eva)',
    ],
  },
];

const THEMES = [
  {
    theme: "Social Responsibility",
    description:
      "The central message of the play. Priestley argues that we have a duty to care for one another, not just ourselves. The Inspector's final speech — 'We are members of one body. We are responsible for each other' — is Priestley's direct challenge to the audience. Each Birling's failure of responsibility contributes to Eva's death.",
    quotes: [
      '"We don\'t live alone. We are members of one body. We are responsible for each other"',
      '"If men will not learn that lesson, then they will be taught it in fire and blood and anguish"',
      '"a man has to mind his own business and look after himself"',
    ],
  },
  {
    theme: "Class and Social Inequality",
    description:
      "Priestley exposes the vast gap between rich and poor in Edwardian England and how the upper classes exploit workers. Eva is treated as disposable — sacked for asking for fair wages, dismissed as 'a girl of that sort.' Mrs Birling's charity exists to help the poor but rejects Eva out of snobbery. The play argues that class divisions cause real human suffering.",
    quotes: [
      '"a girl of that sort"',
      '"But these girls aren\'t cheap labour — they\'re people"',
      '"If you think you can bring any pressure to bear upon me, Inspector, you\'re quite mistaken"',
    ],
  },
  {
    theme: "Generational Divide",
    description:
      "Sheila and Eric accept responsibility and change, while Birling and Mrs Birling refuse to learn. Priestley suggests the younger generation offers hope for a fairer society. The older Birlings represent the establishment — rigid, selfish, and incapable of change. The play's ending implies that if the older generation will not learn, consequences ('fire and blood and anguish') will follow.",
    quotes: [
      '"The famous younger generation who know it all"',
      '"You\'re pretending everything\'s just as it was before"',
      '"You don\'t understand anything. You never did"',
    ],
  },
  {
    theme: "Gender Inequality",
    description:
      "Eva is exploited by men (Eric's assault, Gerald's affair) and judged by women of higher class (Mrs Birling, Sheila). Women in 1912 had no vote and limited rights. Eva's vulnerability is directly linked to her gender and class — she has no power, no protection, and no voice. Priestley highlights how patriarchal society fails women.",
    quotes: [
      '"She was young and pretty and warm-hearted — and intensely grateful"',
      '"I was in that state when a chap easily turns nasty"',
      '"She\'d had a lot to make her happy... a good job, friends"',
    ],
  },
  {
    theme: "Guilt and Responsibility",
    description:
      "Each character responds differently to guilt. Sheila is devastated; Eric is remorseful; Gerald is practical; Birling is defensive; Mrs Birling is in denial. The play explores whether guilt leads to genuine change or is simply an inconvenience to be overcome. The ending — a real inspector is coming — suggests accountability cannot be avoided.",
    quotes: [
      '"I know I\'m to blame — and I\'m desperately sorry"',
      '"I accept no blame for it at all"',
      '"We did her in all right"',
    ],
  },
  {
    theme: "Capitalism vs Socialism",
    description:
      "Birling represents capitalism: 'a man has to mind his own business.' The Inspector represents socialism: 'We are members of one body.' Priestley, a committed socialist, wrote the play in 1945 as Britain was electing a Labour government. He wanted the audience to reject Birling's selfish capitalism and embrace collective responsibility.",
    quotes: [
      '"a man has to mind his own business and look after himself and his own"',
      '"We don\'t live alone. We are members of one body"',
      '"lower costs and higher prices"',
    ],
  },
];

const KEY_QUOTES = [
  { quote: '"a man has to mind his own business and look after himself and his own"', speaker: "Birling (Act 1)", significance: "Birling's capitalist philosophy — rejected by the play as selfish and harmful." },
  { quote: '"The Titanic... unsinkable, absolutely unsinkable"', speaker: "Birling (Act 1)", significance: "Dramatic irony — the Titanic sank in 1912. Undermines everything Birling says and makes the audience distrust him." },
  { quote: '"We don\'t live alone. We are members of one body. We are responsible for each other"', speaker: "Inspector (Act 3)", significance: "The play's central message. 'One body' alludes to the Christian idea of the body of Christ — society as a single organism." },
  { quote: '"If men will not learn that lesson, then they will be taught it in fire and blood and anguish"', speaker: "Inspector (Act 3)", significance: "Prophetic warning — refers to both World Wars. Written in 1945, set in 1912, the audience knows these wars happened because society failed to learn." },
  { quote: '"But these girls aren\'t cheap labour — they\'re people"', speaker: "Sheila (Act 1)", significance: "Sheila begins to see the humanity in workers. Marks the start of her transformation." },
  { quote: '"I know I\'m to blame — and I\'m desperately sorry"', speaker: "Sheila (Act 1)", significance: "Genuine remorse — contrasts with her parents' refusal to accept guilt." },
  { quote: '"You\'re pretending everything\'s just as it was before"', speaker: "Sheila (Act 3)", significance: "Sheila recognises that the evening has changed everything. She will not go back to ignorance." },
  { quote: '"a girl of that sort"', speaker: "Mrs Birling (Act 2)", significance: "Class snobbery — Eva is dismissed as inferior because of her social class. Dehumanising language." },
  { quote: '"I accept no blame for it at all"', speaker: "Mrs Birling (Act 2)", significance: "Complete refusal of responsibility. Mrs Birling is the most morally rigid character." },
  { quote: '"Go and look for the father of the child. It\'s his responsibility"', speaker: "Mrs Birling (Act 2)", significance: "Dramatic irony — she is unwittingly condemning her own son Eric. The audience realises before she does." },
  { quote: '"I was in that state when a chap easily turns nasty"', speaker: "Eric (Act 3)", significance: "Eric's euphemistic confession of assault. 'That state' refers to drunkenness — his alcoholism enabled his violence." },
  { quote: '"You\'re not the kind of father a chap could go to when he\'s in trouble"', speaker: "Eric (Act 3)", significance: "Eric exposes the dysfunction beneath the Birlings' respectable surface. Birling has failed as a father." },
  { quote: '"We did her in all right"', speaker: "Eric (Act 3)", significance: "Collective guilt — 'we' acknowledges shared responsibility. Eric includes himself honestly." },
  { quote: '"I was quite justified"', speaker: "Birling (Act 1)", significance: "Birling's refusal to accept wrongdoing. He sees sacking workers as a business decision, not a moral one." },
  { quote: '"She was young and pretty and warm-hearted — and intensely grateful"', speaker: "Gerald (Act 2)", significance: "'Intensely grateful' suggests a power imbalance. Gerald rescued Eva but also exploited her vulnerability." },
  { quote: '"It\'s better to ask for the earth than to take it"', speaker: "Inspector (Act 1)", significance: "Workers have a right to demand fair treatment rather than having their labour exploited by the wealthy." },
  { quote: '"One person and one line of inquiry at a time"', speaker: "Inspector (Act 1)", significance: "The Inspector controls the pace. His methodical approach ensures each person faces their guilt individually." },
  { quote: '"The famous younger generation who know it all"', speaker: "Birling (Act 3)", significance: "Birling dismisses Sheila and Eric's moral growth as youthful arrogance. Priestley inverts this — the young are wiser." },
  { quote: '"Everything\'s all right now, Sheila. What about this ring?"', speaker: "Gerald (Act 3)", significance: "Gerald wants to return to normal. The ring symbolises the superficial values Sheila now rejects." },
  { quote: '"a hard-headed, practical man of business"', speaker: "Birling (Act 1)", significance: "Self-aggrandising description. 'Hard-headed' suggests stubbornness rather than wisdom." },
  { quote: '"No, he\'s giving us the rope — so that we\'ll hang ourselves"', speaker: "Sheila (Act 2)", significance: "Sheila perceives the Inspector's strategy. She is intelligent and self-aware — more perceptive than her parents." },
  { quote: '"You don\'t understand anything. You never did"', speaker: "Eric (Act 3)", significance: "Eric's final condemnation of his parents. The generational split is complete." },
];

const CONTEXT_POINTS = [
  {
    topic: "Written in 1945, Set in 1912",
    detail:
      "Priestley deliberately sets the play in 1912 — before two World Wars — but writes it in 1945 as WWII ends. The 1945 audience knows that Birling's confident predictions ('no war') were catastrophically wrong. This dramatic irony discredits Birling and the capitalist worldview he represents.",
  },
  {
    topic: "Priestley's Socialism",
    detail:
      "J.B. Priestley was a committed socialist who believed in collective responsibility, the welfare state, and workers' rights. He made popular radio broadcasts during WWII advocating for social reform. An Inspector Calls is a vehicle for his political message — urging the post-war audience to build a fairer society.",
  },
  {
    topic: "The 1945 Labour Victory",
    detail:
      "The play premiered in 1945, the year the Labour Party won a landslide election, promising the NHS, welfare state, and nationalised industries. Priestley's play aligned with the national mood — a desire for social change and collective responsibility after the shared sacrifice of WWII.",
  },
  {
    topic: "Edwardian Class System",
    detail:
      "In 1912, Britain had a rigid class system. The wealthy elite like the Birlings held enormous power over workers who had no minimum wage, limited rights, and no welfare safety net. Women could not vote. Priestley uses the Birlings to expose the cruelty and hypocrisy of this system.",
  },
  {
    topic: "Women's Rights in 1912",
    detail:
      "Women in 1912 had no vote (suffragettes were actively campaigning), limited job opportunities, and were expected to be dependent on men. Eva Smith's vulnerability is a product of this inequality — she has no safety net when men exploit and abandon her.",
  },
  {
    topic: "The Titanic and World War I",
    detail:
      "Birling's reference to the 'unsinkable' Titanic (which sank in April 1912) and his dismissal of war (WWI began in 1914) are examples of dramatic irony. They show that the comfortable certainties of the Edwardian upper classes were built on delusion.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function InspectorCallsPage() {
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
            An Inspector Calls — Full Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Edexcel GCSE English Literature &middot; Paper 1, Section B
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
                <a href={href} className="text-primary hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Plot summary ──────────────────────────────────────── */}
        <section id="plot" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Plot Summary</h2>
          <p className="mt-2 text-muted-foreground">
            The entire play takes place in one evening, in the Birlings&apos;
            dining room. This unity of time, place, and action intensifies the
            dramatic tension.
          </p>
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
          <h2 className="text-2xl font-bold text-foreground">Character Analysis</h2>
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
          <h2 className="text-2xl font-bold text-foreground">Key Quotes (20+)</h2>
          <p className="mt-2 text-muted-foreground">
            The Edexcel exam is closed-book. Learn these quotes and practise
            embedding them into your paragraphs.
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
                <p className="mt-2 text-sm text-muted-foreground">{q.significance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Context ───────────────────────────────────────────── */}
        <section id="context" className="mt-14 scroll-mt-20">
          <h2 className="text-2xl font-bold text-foreground">Historical Context</h2>
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
            Edexcel Exam Technique for An Inspector Calls
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                What Does an Edexcel Question Look Like?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You will typically have a choice of two questions. There is no
                extract — you must recall your own evidence from the play.
              </p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border-2 border-dashed border-[#2E86C1] bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example Question 1
                  </p>
                  <p className="mt-2 text-sm text-foreground font-medium">
                    How does Priestley present the theme of social responsibility
                    in <em>An Inspector Calls</em>?
                  </p>
                </div>
                <div className="rounded-lg border-2 border-dashed border-[#2E86C1] bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example Question 2
                  </p>
                  <p className="mt-2 text-sm text-foreground font-medium">
                    How does Priestley use the character of Sheila to convey his
                    message in <em>An Inspector Calls</em>?
                  </p>
                </div>
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
                    <strong>Introduction</strong> — state Priestley&apos;s overall purpose and how the theme/character serves his message. Mention the 1912 setting and 1945 context.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">2</span>
                  <span>
                    <strong>4-5 analytical paragraphs</strong> tracking across the play. Use &quot;Priestley presents/suggests/conveys...&quot; to show awareness of the writer&apos;s craft.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">3</span>
                  <span>
                    <strong>Embed quotations</strong> — short quotes woven into sentences work best. Analyse the language within your quotes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">4</span>
                  <span>
                    <strong>Link to context</strong> — connect to Priestley&apos;s socialism, the 1945 audience, Edwardian class system, or the dual time setting. Integrate context into analysis rather than bolting it on.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">5</span>
                  <span>
                    <strong>Discuss dramatic techniques</strong> — stage directions, dramatic irony, the unities (time, place, action), the cyclic structure, lighting changes, the telephone as a dramatic device.
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
                  Always use &quot;Priestley&quot; as the subject — &quot;Priestley presents/uses/suggests...&quot; This is an AO2 requirement.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Discuss the dual time setting — &quot;Written in 1945 but set in 1912, Priestley uses dramatic irony to...&quot;
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Analyse stage directions — the lighting changes from &quot;pink and intimate&quot; to &quot;brighter and harder&quot; when the Inspector arrives.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Discuss the ending — the phone call creates a cyclic structure, suggesting the Birlings will be forced to confront their guilt again.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Note: No SPaG marks on Section B, but clear writing still matters for AO1.
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
