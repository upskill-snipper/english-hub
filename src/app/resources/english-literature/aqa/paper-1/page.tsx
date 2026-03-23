import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paper 1: Shakespeare and the 19th-Century Novel - AQA English Literature",
  description:
    "AQA GCSE English Literature Paper 1 revision. Shakespeare plays (Macbeth, Romeo and Juliet) and 19th-century novels (A Christmas Carol, Jekyll and Hyde). Exam technique and essay structure.",
};

/* ─── Data ──────────────────────────────────────────────────── */

const shakespearePlays = [
  {
    title: "Macbeth",
    href: "/resources/english-literature/aqa/macbeth",
    popularity: "Most popular",
    summary:
      "A Scottish general is driven to regicide by ambition and supernatural prophecy. Explores themes of ambition, guilt, the supernatural, and masculinity.",
    keyThemes: ["Ambition", "Guilt", "Supernatural", "Masculinity", "Kingship"],
    examTip:
      "The extract is usually a pivotal moment (e.g. dagger soliloquy, banquet scene). Always link the extract to the wider play in your essay.",
  },
  {
    title: "Romeo and Juliet",
    href: "#romeo-juliet",
    popularity: "Very popular",
    summary:
      "Two young lovers from feuding families in Verona. Explores love, fate, conflict, and the destructive nature of prejudice.",
    keyThemes: ["Love", "Fate", "Conflict", "Family", "Youth vs Age"],
    examTip:
      "Focus on how Shakespeare uses dramatic irony - the audience knows the lovers are doomed from the Prologue.",
  },
  {
    title: "The Tempest",
    href: "#tempest",
    popularity: "Less common",
    summary:
      "Prospero, the exiled Duke of Milan, uses magic to shipwreck his enemies on his island. Explores power, colonialism, forgiveness, and the nature of art.",
    keyThemes: ["Power", "Colonialism", "Forgiveness", "Magic", "Freedom"],
    examTip:
      "Consider the play as Shakespeare's farewell to theatre. Prospero's epilogue is often read as Shakespeare addressing the audience directly.",
  },
  {
    title: "Much Ado About Nothing",
    href: "#much-ado",
    popularity: "Less common",
    summary:
      "A comedy of wit and deception in Messina. Beatrice and Benedick's sharp banter contrasts with Hero and Claudio's conventional romance.",
    keyThemes: ["Deception", "Honour", "Gender", "Love", "Wit"],
    examTip:
      "Gender politics are central. Explore how Hero is silenced while Beatrice challenges patriarchal norms.",
  },
  {
    title: "The Merchant of Venice",
    href: "#merchant",
    popularity: "Less common",
    summary:
      "Antonio borrows money from Shylock to help Bassanio. The bond of a pound of flesh creates a crisis that raises questions about justice, mercy, and prejudice.",
    keyThemes: ["Prejudice", "Justice vs Mercy", "Wealth", "Love", "Identity"],
    examTip:
      "Shylock's 'Hath not a Jew eyes?' speech is crucial. Consider whether the play endorses or challenges antisemitism.",
  },
  {
    title: "Julius Caesar",
    href: "#julius-caesar",
    popularity: "Less common",
    summary:
      "The assassination of Caesar and its aftermath. Brutus struggles between personal friendship and political duty.",
    keyThemes: ["Power", "Loyalty", "Rhetoric", "Honour", "Fate"],
    examTip:
      "Compare Brutus's and Antony's funeral speeches - they demonstrate Shakespeare's understanding of rhetoric and persuasion.",
  },
];

const novels = [
  {
    title: "A Christmas Carol",
    href: "/resources/english-literature/aqa/christmas-carol",
    author: "Charles Dickens (1843)",
    popularity: "Most popular",
    summary:
      "Ebenezer Scrooge is visited by three spirits on Christmas Eve who show him his past, present, and possible future. A moral tale about redemption and social responsibility.",
    keyThemes: [
      "Redemption",
      "Social Responsibility",
      "Christmas",
      "Poverty",
      "Family",
    ],
    examTip:
      "Dickens wrote this as social commentary. Always link to Victorian poverty, the Poor Law, and Malthusian economics.",
  },
  {
    title: "The Strange Case of Dr Jekyll and Mr Hyde",
    href: "#jekyll-hyde",
    author: "Robert Louis Stevenson (1886)",
    popularity: "Very popular",
    summary:
      "A London lawyer investigates the connection between the respectable Dr Jekyll and the sinister Mr Hyde. A novella exploring duality, repression, and Victorian hypocrisy.",
    keyThemes: [
      "Duality",
      "Reputation",
      "Secrecy",
      "Science vs Religion",
      "Victorian Society",
    ],
    examTip:
      "Structure is key - the novella withholds information from the reader, mirroring how Victorian society conceals uncomfortable truths.",
  },
  {
    title: "Great Expectations",
    href: "#great-expectations",
    author: "Charles Dickens (1861)",
    popularity: "Moderately popular",
    summary:
      "Pip's journey from a blacksmith's apprentice to a London gentleman, funded by a mysterious benefactor. Explores class, ambition, and moral growth.",
    keyThemes: [
      "Social Class",
      "Ambition",
      "Guilt",
      "Identity",
      "Crime and Justice",
    ],
    examTip:
      "Pip is an unreliable first-person narrator. His attitudes change throughout the novel, so consider which 'version' of Pip is narrating.",
  },
  {
    title: "Frankenstein",
    href: "#frankenstein",
    author: "Mary Shelley (1818)",
    summary:
      "Victor Frankenstein creates a living creature from dead matter, then abandons it. The creature's suffering raises questions about responsibility and what makes us human.",
    keyThemes: [
      "Creation",
      "Responsibility",
      "Isolation",
      "Nature vs Nurture",
      "Dangerous Knowledge",
    ],
    examTip:
      "The nested narrative structure (Walton > Victor > Creature) means every story is filtered through another narrator. Question reliability.",
  },
  {
    title: "Pride and Prejudice",
    href: "#pride-prejudice",
    author: "Jane Austen (1813)",
    summary:
      "Elizabeth Bennet and Mr Darcy overcome their respective pride and prejudice to find love. A sharp social comedy about class, marriage, and moral judgement.",
    keyThemes: [
      "Pride",
      "Prejudice",
      "Marriage",
      "Social Class",
      "Gender",
    ],
    examTip:
      "Austen uses free indirect discourse - the narrator blends with Elizabeth's thoughts. This creates irony when Elizabeth's judgements are wrong.",
  },
  {
    title: "The Sign of the Four",
    href: "#sign-four",
    author: "Arthur Conan Doyle (1890)",
    summary:
      "Sherlock Holmes investigates the disappearance of a father, a secret pact, and a stolen treasure from India. Explores empire, reason, and justice.",
    keyThemes: [
      "Empire",
      "Justice",
      "Reason vs Emotion",
      "Wealth",
      "Duality",
    ],
    examTip:
      "Consider the colonial context carefully. The treasure from India and the portrayal of Tonga reflect Victorian attitudes to empire.",
  },
  {
    title: "Jane Eyre",
    href: "#jane-eyre",
    author: "Charlotte Bronte (1847)",
    summary:
      "An orphaned governess finds love and independence. Jane's journey challenges Victorian expectations of women, class, and morality.",
    keyThemes: [
      "Independence",
      "Gender",
      "Social Class",
      "Religion",
      "Love vs Duty",
    ],
    examTip:
      "Jane directly addresses the reader ('Reader, I married him'). This creates intimacy and positions the reader as confidant.",
  },
];

export default function Paper1Page() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-200">
            AQA English Literature
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 1: Shakespeare and the 19th-Century Novel
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            1 hour 45 minutes &middot; 64 marks &middot; 40% of GCSE
          </p>
        </div>
      </section>

      {/* Paper structure */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Paper Structure</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-lg font-bold text-primary">
              Section A: Shakespeare (34 marks)
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>You answer on the play you have studied</li>
              <li>You are given an extract from the play (roughly 30 lines)</li>
              <li>
                One question with two parts: analyse the extract, then write
                about the topic in the wider play
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Recommended time:
                </span>{" "}
                ~55 minutes (including reading)
              </li>
              <li>
                AO1 (12 marks), AO2 (12 marks), AO3 (6 marks), AO4 (4 marks
                for SPaG)
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-lg font-bold text-primary">
              Section B: 19th-Century Novel (30 marks)
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>You answer on the novel you have studied</li>
              <li>You are given an extract from the novel</li>
              <li>
                One question: analyse the extract then discuss the topic across
                the whole novel
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Recommended time:
                </span>{" "}
                ~50 minutes (including reading)
              </li>
              <li>AO1 (12 marks), AO2 (12 marks), AO3 (6 marks)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Shakespeare section */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Section A: Shakespeare
          </h2>
          <p className="mt-2 text-muted-foreground">
            You will study one Shakespeare play. The most commonly taught are
            Macbeth and Romeo and Juliet.
          </p>

          <div className="mt-8 space-y-6">
            {shakespearePlays.map((play) => (
              <div
                key={play.title}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {play.href.startsWith("/") ? (
                      <Link
                        href={play.href}
                        className="hover:text-accent transition"
                      >
                        {play.title}
                      </Link>
                    ) : (
                      play.title
                    )}
                  </h3>
                  <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-medium text-accent-700">
                    {play.popularity}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {play.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {play.keyThemes.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs text-primary-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-primary-700 bg-primary-50 rounded-lg p-3">
                  <span className="font-semibold">Exam tip:</span>{" "}
                  {play.examTip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19th-century novel section */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Section B: The 19th-Century Novel
        </h2>
        <p className="mt-2 text-muted-foreground">
          You will study one novel. A Christmas Carol and Jekyll and Hyde are by
          far the most popular choices.
        </p>

        <div className="mt-8 space-y-6">
          {novels.map((novel) => (
            <div
              key={novel.title}
              className="rounded-xl border border-border p-6 shadow-md"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold text-foreground">
                  {novel.href.startsWith("/") ? (
                    <Link
                      href={novel.href}
                      className="hover:text-accent transition"
                    >
                      {novel.title}
                    </Link>
                  ) : (
                    novel.title
                  )}
                </h3>
                {novel.popularity && (
                  <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-medium text-accent-700">
                    {novel.popularity}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{novel.author}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {novel.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {novel.keyThemes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs text-primary-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-primary-700 bg-primary-50 rounded-lg p-3">
                <span className="font-semibold">Exam tip:</span>{" "}
                {novel.examTip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam technique */}
      <section className="bg-primary-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Paper 1 Exam Technique
          </h2>

          <div className="mt-8 space-y-8">
            {/* Extract-based questions */}
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <h3 className="text-lg font-bold text-primary">
                How to Approach Extract-Based Questions
              </h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Both sections give you an extract and ask you to write about
                  it <em>and</em> the wider text. Here is a reliable approach:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Read the extract twice.</span>{" "}
                    First for understanding, then to highlight key words,
                    techniques, and anything that links to the question&apos;s
                    focus.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Spend 5 minutes planning.
                    </span>{" "}
                    Identify 3-4 points from the extract and 2-3 from the wider
                    text. Each point should link to a theme or idea from the
                    question.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Start with the extract.
                    </span>{" "}
                    Write 2-3 paragraphs analysing the extract in detail. Embed
                    short quotations and analyse individual words.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Move to the wider text.
                    </span>{" "}
                    Write 2-3 paragraphs using memorised quotations from
                    elsewhere in the text. Show how the theme develops or
                    contrasts across the whole work.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Include context throughout.
                    </span>{" "}
                    Weave in contextual points naturally. Do not bolt on a
                    separate &quot;context paragraph&quot; - integrate it into your
                    analysis.
                  </li>
                </ol>
              </div>
            </div>

            {/* Essay structure */}
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <h3 className="text-lg font-bold text-primary">
                Model Essay Structure (PETAL)
              </h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Use the PETAL structure for each paragraph:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 mt-4">
                  {[
                    {
                      letter: "P",
                      label: "Point",
                      detail:
                        "Make a clear point that directly answers the question.",
                    },
                    {
                      letter: "E",
                      label: "Evidence",
                      detail:
                        "Embed a short, relevant quotation from the text.",
                    },
                    {
                      letter: "T",
                      label: "Technique",
                      detail:
                        "Identify the literary technique used (metaphor, symbolism, etc.).",
                    },
                    {
                      letter: "A",
                      label: "Analysis",
                      detail:
                        "Explain the effect on the reader and what it reveals about character/theme.",
                    },
                    {
                      letter: "L",
                      label: "Link",
                      detail:
                        "Link to context, another part of the text, or back to the question.",
                    },
                  ].map((step) => (
                    <div
                      key={step.letter}
                      className="rounded-lg bg-primary-50 p-4 text-center"
                    >
                      <span className="text-2xl font-bold text-primary">
                        {step.letter}
                      </span>
                      <p className="text-sm font-semibold text-foreground mt-1">
                        {step.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg bg-accent-50 border border-accent-200 p-4">
                  <h4 className="font-semibold text-accent-700">
                    Example paragraph opening (Macbeth):
                  </h4>
                  <p className="mt-2 text-muted-foreground italic">
                    &quot;Shakespeare presents Macbeth&apos;s guilt as overwhelming and
                    inescapable. In the extract, Macbeth sees a &lsquo;dagger of the
                    mind,&rsquo; a hallucination that Shakespeare uses as a visual
                    metaphor for his tortured conscience. The adjective &lsquo;fatal&rsquo;
                    is deliberately ambiguous - it suggests both that the dagger
                    will cause death and that Macbeth&apos;s fate is sealed. A
                    Jacobean audience, who believed in divine retribution, would
                    see this as a warning from God that Macbeth&apos;s crime will not
                    go unpunished.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Common mistakes */}
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <h3 className="text-lg font-bold text-primary">
                Common Mistakes to Avoid
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-warn font-bold">x</span>
                  <span>
                    <span className="font-medium">Retelling the story</span> -
                    the examiner knows the plot. Focus on analysis, not
                    narrative.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-warn font-bold">x</span>
                  <span>
                    <span className="font-medium">Feature-spotting</span> -
                    naming a technique without explaining its effect earns no
                    marks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-warn font-bold">x</span>
                  <span>
                    <span className="font-medium">
                      Ignoring the wider text
                    </span>{" "}
                    - you must write about the whole play/novel, not just the
                    extract.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-warn font-bold">x</span>
                  <span>
                    <span className="font-medium">Bolted-on context</span> -
                    &quot;In those days...&quot; paragraphs feel forced. Integrate context
                    into your analysis naturally.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-warn font-bold">x</span>
                  <span>
                    <span className="font-medium">Long quotations</span> -
                    embed short, precise quotations (3-5 words) rather than
                    copying out whole sentences.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
