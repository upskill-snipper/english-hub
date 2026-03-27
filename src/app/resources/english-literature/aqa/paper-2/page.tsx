import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/aqa/paper-2' },
  title: "Paper 2: Modern Texts and Poetry - AQA English Literature",
  description:
    "AQA GCSE English Literature Paper 2 revision. Modern texts (An Inspector Calls, Lord of the Flies, Animal Farm), Power and Conflict poetry anthology, and unseen poetry technique.",
};

const modernTexts = [
  {
    title: "An Inspector Calls",
    author: "J.B. Priestley (1945)",
    href: "/resources/english-literature/aqa/inspector-calls",
    popularity: "Most popular",
    summary:
      "Inspector Goole visits the Birling family to investigate the death of Eva Smith. Each family member is revealed to have played a part. A play about social responsibility, class, and generational change.",
    keyThemes: [
      "Social Responsibility",
      "Class",
      "Gender",
      "Age and Generation",
      "Power",
    ],
    examTip:
      "Remember the dual time setting: set in 1912, written in 1945. Priestley uses dramatic irony (Birling's predictions about the Titanic and war) to discredit capitalist attitudes.",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding (1954)",
    href: "#lotf",
    popularity: "Very popular",
    summary:
      "A group of boys stranded on a deserted island descend from civilised democracy into savagery and violence. An allegorical novel about human nature and the fragility of civilisation.",
    keyThemes: [
      "Civilisation vs Savagery",
      "Power",
      "Fear",
      "Loss of Innocence",
      "Violence",
    ],
    examTip:
      "The island is a microcosm of society. Each character represents an idea: Ralph (democracy), Jack (dictatorship), Piggy (intellect), Simon (morality/spirituality).",
  },
  {
    title: "Animal Farm",
    author: "George Orwell (1945)",
    href: "#animal-farm",
    popularity: "Very popular",
    summary:
      "Animals overthrow their human farmer, but the pigs gradually become indistinguishable from the humans they replaced. An allegorical novella satirising the Russian Revolution and totalitarianism.",
    keyThemes: [
      "Power and Corruption",
      "Propaganda",
      "Class",
      "Education",
      "Revolution",
    ],
    examTip:
      "Know the historical parallels: Napoleon = Stalin, Snowball = Trotsky, Boxer = the proletariat. But also analyse Orwell's broader warning about any abuse of power.",
  },
  {
    title: "Blood Brothers",
    author: "Willy Russell (1983)",
    href: "#blood-brothers",
    popularity: "Popular",
    summary:
      "Twin brothers separated at birth grow up in different social classes in Liverpool. Their contrasting lives and inevitable reunion end in tragedy. A musical play about class, fate, and nature vs nurture.",
    keyThemes: [
      "Social Class",
      "Nature vs Nurture",
      "Superstition",
      "Fate",
      "Motherhood",
    ],
    examTip:
      "The Narrator functions like a Greek chorus, commenting on the action and creating dramatic irony. The audience knows the ending from the start.",
  },
  {
    title: "The History Boys",
    author: "Alan Bennett (2004)",
    href: "#history-boys",
    popularity: "Less common",
    summary:
      "A group of bright sixth-form boys prepare for Oxbridge entrance exams under the contrasting teaching styles of Hector, Irwin, and Mrs Lintott. Explores the purpose of education.",
    keyThemes: [
      "Education",
      "History and Truth",
      "Sexuality",
      "Class",
      "Growing Up",
    ],
    examTip:
      "Compare the three teachers: Hector (learning for joy), Irwin (learning as performance), Mrs Lintott (feminist perspective). Bennett questions what education is really for.",
  },
  {
    title: "A Taste of Honey",
    author: "Shelagh Delaney (1958)",
    href: "#taste-honey",
    popularity: "Less common",
    summary:
      "Jo, a working-class teenager in Salford, navigates relationships with her neglectful mother Helen, a Black sailor, and her gay friend Geoffrey. A kitchen sink drama challenging 1950s social norms.",
    keyThemes: [
      "Class",
      "Race",
      "Gender",
      "Motherhood",
      "Identity",
    ],
    examTip:
      "Delaney was only 18 when she wrote this. The play was revolutionary in its frank treatment of race, homosexuality, and teenage pregnancy in 1950s Britain.",
  },
  {
    title: "Pigeon English",
    author: "Stephen Kelman (2011)",
    href: "#pigeon-english",
    popularity: "Less common",
    summary:
      "Harri, an 11-year-old Ghanaian immigrant in a London housing estate, investigates a local stabbing. His innocent perspective contrasts with the violence around him.",
    keyThemes: [
      "Innocence",
      "Violence",
      "Immigration",
      "Identity",
      "Community",
    ],
    examTip:
      "Harri's naive narration creates dramatic irony - the reader understands dangers he does not. The pigeon symbolises freedom and vulnerability.",
  },
];

const poems = [
  { title: "Ozymandias", author: "Percy Bysshe Shelley" },
  { title: "London", author: "William Blake" },
  { title: "The Prelude (extract)", author: "William Wordsworth" },
  { title: "My Last Duchess", author: "Robert Browning" },
  { title: "The Charge of the Light Brigade", author: "Alfred Tennyson" },
  { title: "Exposure", author: "Wilfred Owen" },
  { title: "Storm on the Island", author: "Seamus Heaney" },
  { title: "Bayonet Charge", author: "Ted Hughes" },
  { title: "Remains", author: "Simon Armitage" },
  { title: "Poppies", author: "Jane Weir" },
  { title: "War Photographer", author: "Carol Ann Duffy" },
  { title: "Tissue", author: "Imtiaz Dharker" },
  { title: "The Emigree", author: "Carol Rumens" },
  { title: "Kamikaze", author: "Beatrice Garland" },
  { title: "Checking Out Me History", author: "John Agard" },
];

export default function Paper2Page() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-200">
            AQA English Literature
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 2: Modern Texts and Poetry
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            2 hours 15 minutes &middot; 96 marks &middot; 60% of GCSE
          </p>
        </div>
      </section>

      {/* Paper structure */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Paper Structure</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-lg font-bold text-primary">
              Section A: Modern Texts (34 marks)
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>Answer on your studied modern prose or drama text</li>
              <li>One essay question from a choice of two</li>
              <li>No extract provided - write from memory</li>
              <li>
                <span className="font-medium text-foreground">Time:</span> ~45
                minutes
              </li>
              <li>AO1 (12), AO2 (12), AO3 (6), AO4 (4 SPaG)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-lg font-bold text-primary">
              Section B: Poetry Anthology (30 marks)
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>One poem printed for you from the anthology</li>
              <li>Compare it with another poem of your choice</li>
              <li>Must be from the same cluster (Power and Conflict)</li>
              <li>
                <span className="font-medium text-foreground">Time:</span> ~45
                minutes
              </li>
              <li>AO1 (12), AO2 (12), AO3 (6)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-6">
            <h3 className="text-lg font-bold text-primary">
              Section C: Unseen Poetry (32 marks)
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
              <li>Part 1: Analyse one unseen poem (24 marks)</li>
              <li>Part 2: Compare with a second unseen poem (8 marks)</li>
              <li>No prior knowledge needed - just analytical skills</li>
              <li>
                <span className="font-medium text-foreground">Time:</span> ~45
                minutes (30 + 15)
              </li>
              <li>AO1 (12), AO2 (12) for Part 1; AO2 (8) for Part 2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modern texts */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Section A: Modern Texts
          </h2>
          <p className="mt-2 text-muted-foreground">
            You study one modern prose or drama text. This is a closed-book
            essay with no extract - you must use memorised quotations.
          </p>

          <div className="mt-8 space-y-6">
            {modernTexts.map((text) => (
              <div
                key={text.title}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {text.href.startsWith("/") ? (
                      <Link
                        href={text.href}
                        className="hover:text-accent transition"
                      >
                        {text.title}
                      </Link>
                    ) : (
                      text.title
                    )}
                  </h3>
                  <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-medium text-accent-700">
                    {text.popularity}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{text.author}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {text.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {text.keyThemes.map((t) => (
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
                  {text.examTip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poetry anthology */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Section B: Power and Conflict Poetry Anthology
        </h2>
        <p className="mt-2 text-muted-foreground">
          You must know all 15 poems. One will be printed in the exam; you
          choose a second to compare it with.
        </p>

        <div className="mt-6">
          <Link
            href="/resources/english-literature/aqa/poetry"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-accent-600"
          >
            View Full Poetry Analysis Guide
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem, i) => (
            <div
              key={poem.title}
              className="flex items-center gap-3 rounded-lg border border-border p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {poem.title}
                </p>
                <p className="text-xs text-muted-foreground">{poem.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison pairs */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-foreground">
            Key Comparison Pairs
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Having pre-prepared comparison pairs saves time in the exam. Here
            are reliable pairings by theme:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              {
                theme: "Power of Nature",
                poems: ["Ozymandias + Storm on the Island", "The Prelude + Exposure"],
              },
              {
                theme: "Effects of War/Conflict",
                poems: [
                  "Exposure + Bayonet Charge",
                  "Remains + War Photographer",
                ],
              },
              {
                theme: "Memory and Loss",
                poems: [
                  "Poppies + Remains",
                  "Kamikaze + The Emigree",
                ],
              },
              {
                theme: "Abuse of Power",
                poems: [
                  "My Last Duchess + Ozymandias",
                  "London + Checking Out Me History",
                ],
              },
              {
                theme: "Identity and Place",
                poems: [
                  "The Emigree + Checking Out Me History",
                  "Tissue + London",
                ],
              },
              {
                theme: "Individual vs Authority",
                poems: [
                  "Checking Out Me History + London",
                  "Bayonet Charge + The Charge of the Light Brigade",
                ],
              },
            ].map((pair) => (
              <div
                key={pair.theme}
                className="rounded-lg border border-border p-4"
              >
                <p className="text-sm font-semibold text-primary">
                  {pair.theme}
                </p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {pair.poems.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unseen poetry technique */}
      <section className="bg-primary-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Section C: Unseen Poetry Technique
          </h2>
          <p className="mt-2 text-muted-foreground">
            You will see two poems you have never read before. Part 1 asks you
            to analyse one poem (24 marks, ~30 minutes). Part 2 asks you to
            compare it with a second poem (8 marks, ~15 minutes).
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <h3 className="text-lg font-bold text-primary">
                Part 1: Analysing a Single Unseen Poem (24 marks)
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground list-decimal pl-5">
                <li>
                  <span className="font-semibold">Read the poem three times.</span>{" "}
                  First for the overall gist, second to identify the speaker
                  and situation, third to spot techniques.
                </li>
                <li>
                  <span className="font-semibold">Identify the subject and tone.</span>{" "}
                  What is the poem about? What is the speaker&apos;s attitude? Does
                  the tone shift?
                </li>
                <li>
                  <span className="font-semibold">Examine structure.</span>{" "}
                  Look at stanza lengths, line lengths, enjambment, caesura,
                  rhyme scheme, and how the poem progresses from beginning to
                  end.
                </li>
                <li>
                  <span className="font-semibold">Analyse language.</span>{" "}
                  Pick out imagery (metaphor, simile, personification),
                  powerful word choices, sound devices (alliteration,
                  sibilance, onomatopoeia).
                </li>
                <li>
                  <span className="font-semibold">Consider the effect on the reader.</span>{" "}
                  Every analytical point should explain <em>why</em> the poet
                  made that choice and what response it creates.
                </li>
                <li>
                  <span className="font-semibold">Write 4-5 paragraphs</span>{" "}
                  using PETAL structure. Start with an overview, then zoom into
                  specific details.
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-card p-6 shadow-md border border-border">
              <h3 className="text-lg font-bold text-primary">
                Part 2: Comparing Two Unseen Poems (8 marks)
              </h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>
                  This is worth only 8 marks, so keep it concise. Write 2-3
                  comparative paragraphs in about 15 minutes.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    <span className="font-semibold">
                      Focus on similarities and differences
                    </span>{" "}
                    in how the poets present the theme given in the question.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Use comparison connectives:
                    </span>{" "}
                    &quot;Similarly,&quot; &quot;In contrast,&quot; &quot;Both poets...however,&quot;
                    &quot;While [Poet A] uses...,[Poet B] instead...&quot;
                  </li>
                  <li>
                    <span className="font-semibold">Compare methods,</span>{" "}
                    not just content. How do the poets use different techniques
                    to explore a similar idea?
                  </li>
                  <li>
                    <span className="font-semibold">
                      You only need to analyse the second poem
                    </span>{" "}
                    in relation to the first. Do not repeat analysis from Part 1.
                  </li>
                </ul>

                <div className="rounded-lg bg-accent-50 border border-accent-200 p-4 mt-4">
                  <h4 className="font-semibold text-accent-700 text-xs uppercase tracking-wider">
                    Useful comparison sentence starters
                  </h4>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground italic">
                    <li>
                      &quot;Both poems explore [theme], yet they differ in...&quot;
                    </li>
                    <li>
                      &quot;While the first poet uses [technique] to convey..., the
                      second poet instead employs...&quot;
                    </li>
                    <li>
                      &quot;The tone of the second poem contrasts sharply with the
                      first because...&quot;
                    </li>
                    <li>
                      &quot;Similarly, [Poet B] presents [theme] through the use
                      of..., which creates...&quot;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technique checklist */}
          <div className="mt-8 rounded-xl bg-card p-6 shadow-md border border-border">
            <h3 className="text-lg font-bold text-primary">
              Techniques to Look For in Unseen Poetry
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  category: "Language",
                  techniques: [
                    "Metaphor & simile",
                    "Personification",
                    "Alliteration & sibilance",
                    "Onomatopoeia",
                    "Oxymoron & juxtaposition",
                    "Semantic fields",
                    "Connotations of key words",
                    "Tone and register",
                  ],
                },
                {
                  category: "Structure",
                  techniques: [
                    "Enjambment",
                    "Caesura",
                    "Stanza breaks",
                    "Line length variation",
                    "Rhyme scheme (or lack of)",
                    "Volta (turning point)",
                    "Repetition",
                    "Beginning vs ending",
                  ],
                },
                {
                  category: "Form & Context",
                  techniques: [
                    "Sonnet / free verse / ballad",
                    "First person / third person",
                    "Speaker and audience",
                    "Dramatic monologue",
                    "Narrative voice",
                    "Historical/social hints",
                    "Title significance",
                    "Mood and atmosphere",
                  ],
                },
              ].map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-semibold text-primary">
                    {group.category}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                    {group.techniques.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
