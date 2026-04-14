import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/paper-2' },
  title: "Edexcel Paper 2: 19th-Century Novel and Poetry since 1789",
  description:
    "Complete revision guide for Edexcel GCSE English Literature Paper 2 (1ET0/02). 19th-century novels, poetry anthology (Relationships and Conflict clusters), and unseen poetry.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function Paper2Page() {
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
            Paper 2: 19th-Century Novel and Poetry since 1789
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            2 hours 15 minutes &middot; 80 marks &middot; 50% of GCSE
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Exam structure ────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground">Exam Structure</h2>
          <p className="mt-2 text-muted-foreground">
            Paper 2 has three sections. The exam is closed-book throughout.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                Section A: 19th-Century Novel
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                40 marks &middot; ~55 minutes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  One essay question on your studied novel.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  No extract — you choose your own evidence from across the text.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Usually a choice of two questions per text.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Assessed on reading and response, analysis of methods, context, and accuracy (4 SPaG marks).
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                Section B: Poetry Anthology
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                24 marks &middot; ~40 minutes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  One named poem from your cluster is printed in the exam paper.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  You must compare it with another poem from the same cluster (from memory).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Assessed on reading and response, analysis of methods, and context.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                Section C: Unseen Poetry
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                16 marks &middot; ~35 minutes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Two unseen poems are printed in the paper.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Part (a): analyse the first poem (8 marks, reading and response + analysis of methods).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Part (b): compare both poems (8 marks, analysis of methods).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 19th-Century Novels ───────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Section A: 19th-Century Novel Set Texts
          </h2>

          <div className="mt-6 space-y-6">
            {/* A Christmas Carol */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-foreground">
                  A Christmas Carol — Charles Dickens (1843)
                </h3>
                <Link
                  href="/resources/english-literature/edexcel/christmas-carol"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Full Study Guide &rarr;
                </Link>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ebenezer Scrooge, a miserly old man, is visited on Christmas Eve
                by three spirits who show him the error of his ways. Dickens
                wrote the novella to highlight the plight of the Victorian poor
                and promote compassion and generosity.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-3">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Themes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Redemption, social injustice, Christmas spirit, greed vs generosity, family, isolation
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Characters</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Scrooge, Bob Cratchit, Tiny Tim, Fred, Fezziwig, Marley, Belle, the three spirits
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Context</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Victorian poverty, the Poor Law (1834), Malthusian economics, industrial revolution, workhouses
                  </p>
                </div>
              </div>
            </div>

            {/* Great Expectations */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Great Expectations — Charles Dickens (1861)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Pip, an orphan raised by his sister and her husband Joe, comes
                into a mysterious fortune and moves to London to become a
                gentleman. Dickens explores class, ambition, loyalty, and the
                true meaning of being a &quot;gentleman.&quot;
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Themes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Class and social mobility, ambition and self-improvement, guilt, loyalty, justice, love and rejection
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Characters</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pip, Estella, Miss Havisham, Joe Gargery, Magwitch, Herbert Pocket, Jaggers
                  </p>
                </div>
              </div>
            </div>

            {/* Jekyll and Hyde */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                The Strange Case of Dr Jekyll and Mr Hyde — R.L. Stevenson (1886)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The respectable Dr Jekyll creates a potion that transforms him
                into the evil Mr Hyde. Stevenson explores the duality of human
                nature and Victorian repression.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Themes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Duality of man, repression, science and religion, secrecy, reputation, good vs evil
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Characters</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Dr Jekyll, Mr Hyde, Mr Utterson, Dr Lanyon, Mr Enfield, Poole
                  </p>
                </div>
              </div>
            </div>

            {/* Jane Eyre */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Jane Eyre — Charlotte Bronte (1847)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                An orphaned girl endures a cruel childhood, becomes a governess
                at Thornfield Hall, and falls in love with the brooding Mr
                Rochester. Jane struggles for independence, equality, and
                moral integrity in a patriarchal society.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Themes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Independence, gender equality, social class, religion, love and passion, the Gothic
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Characters</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Jane Eyre, Mr Rochester, Mrs Reed, Helen Burns, St John Rivers, Bertha Mason
                  </p>
                </div>
              </div>
            </div>

            {/* Pride and Prejudice */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Pride and Prejudice — Jane Austen (1813)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Elizabeth Bennet and Mr Darcy overcome their initial
                misjudgements to find love. Austen satirises the marriage
                market, class snobbery, and the limited options available to
                women in Regency England.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Themes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pride and prejudice, marriage, class, reputation, gender, love vs financial security
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Characters</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Elizabeth Bennet, Mr Darcy, Jane Bennet, Mr Bingley, Mr Wickham, Lady Catherine de Bourgh
                  </p>
                </div>
              </div>
            </div>

            {/* Frankenstein */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Frankenstein — Mary Shelley (1818)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Victor Frankenstein creates a living creature from dead body
                parts, then abandons it in horror. The creature, rejected by
                society, turns to violence. Shelley explores the dangers of
                unchecked ambition, parental responsibility, and what makes
                us human.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Themes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Dangerous knowledge, nature vs nurture, isolation, monstrosity, creation and responsibility, the sublime
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Characters</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Victor Frankenstein, the Creature, Robert Walton, Elizabeth Lavenza, Henry Clerval
                  </p>
                </div>
              </div>
            </div>

            {/* Silas Marner */}
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground">
                Silas Marner — George Eliot (1861)
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A weaver falsely accused of theft becomes a recluse obsessed
                with his gold. When his gold is stolen and a golden-haired
                orphan appears, Silas finds redemption through love and
                community. Eliot explores class, faith, and moral worth.
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Themes</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Community and isolation, faith, moral values, class, family, redemption
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">Key Characters</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Silas Marner, Eppie, Godfrey Cass, Dunstan Cass, Dolly Winthrop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Poetry Anthology ──────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Section B: Poetry Anthology
          </h2>
          <p className="mt-2 text-muted-foreground">
            Your school will have studied one cluster. You must compare a named
            poem (printed in the exam) with one of your choice from the same
            cluster.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                Relationships Cluster
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {[
                  "Sonnet 43 — Elizabeth Barrett Browning",
                  "Love's Philosophy — Percy Bysshe Shelley",
                  "Sonnet 29 — Edna St Vincent Millay",
                  "My Last Duchess — Robert Browning",
                  "La Belle Dame sans Merci — John Keats",
                  "She Walks in Beauty — Lord Byron",
                  "A Child to His Sick Grandfather — Joanna Baillie",
                  "1st Date — She / 1st Date — He — Wendy Cope",
                  "Valentine — Carol Ann Duffy",
                  "One Flesh — Elizabeth Jennings",
                  "i wanna be yours — John Cooper Clarke",
                  "Love's Dog — Jen Hadfield",
                  "Nettles — Vernon Scannell",
                  "Climbing My Grandfather — Andrew Waterhouse",
                  "Singh Song! — Daljit Nagra",
                ].map((poem) => (
                  <li key={poem} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {poem}
                  </li>
                ))}
              </ul>
              <Link
                href="/resources/english-literature/edexcel/poetry"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Full analysis of all poems &rarr;
              </Link>
            </div>

            <div className="rounded-xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground">
                Conflict Cluster
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {[
                  "The Charge of the Light Brigade — Alfred Lord Tennyson",
                  "Exposure — Wilfred Owen",
                  "Catrin — Gillian Clarke",
                  "War Photographer — Carol Ann Duffy",
                  "Belfast Confetti — Ciaran Carson",
                  "The Destruction of Sennacherib — Lord Byron",
                  "Half-caste — John Agard",
                  "A Poison Tree — William Blake",
                  "The Man He Killed — Thomas Hardy",
                  "Cousin Kate — Christina Rossetti",
                  "No Problem — Benjamin Zephaniah",
                  "What Were They Like? — Denise Levertov",
                  "The Class Game — Mary Casey",
                  "Poppies — Jane Weir",
                  "Hawk Roosting — Ted Hughes",
                ].map((poem) => (
                  <li key={poem} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {poem}
                  </li>
                ))}
              </ul>
              <Link
                href="/resources/english-literature/edexcel/poetry"
                className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
              >
                Full analysis of all poems &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── Unseen poetry ─────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Section C: Unseen Poetry
          </h2>
          <p className="mt-2 text-muted-foreground">
            You will be given two poems you have never seen before. This section
            tests your ability to analyse poetry independently.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Part (a): Analysing the First Poem (8 marks)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You will be asked a question about how the poet presents a
                particular idea, feeling, or experience.
              </p>
              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Step-by-step approach:</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                    <span>Read the poem twice. Annotate key words, images, and techniques on the second read.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                    <span>Identify the poem&apos;s subject matter, tone, and overall message.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                    <span>Look at language (imagery, word choice, figurative language), structure (stanzas, line length, enjambment), and form (sonnet, free verse, dramatic monologue).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                    <span>Write 3-4 focused paragraphs using PEA (Point, Evidence, Analysis). Quote directly from the poem.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Part (b): Comparing Both Poems (8 marks)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You must compare how the poets present a similar theme or idea
                across both poems.
              </p>
              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Tips for comparison:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Use comparative connectives: &quot;Similarly,&quot; &quot;In contrast,&quot; &quot;Whereas,&quot; &quot;Both poets...&quot;
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Focus on methods (how they write), not just content (what they write about).
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Compare tone, imagery, structure, and the effect on the reader.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Write 2-3 comparative paragraphs. Each paragraph should reference both poems.
                  </li>
                </ul>
              </div>
            </div>

            {/* Key techniques checklist */}
            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Poetry Analysis Techniques Checklist
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Use these when approaching any poem — anthology or unseen.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Language</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Metaphor and simile</li>
                    <li>Personification</li>
                    <li>Semantic fields</li>
                    <li>Sensory language</li>
                    <li>Tone and register</li>
                    <li>Connotations of word choices</li>
                    <li>Symbolism and imagery</li>
                    <li>Repetition and listing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Structure &amp; Form</h4>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Stanza arrangement</li>
                    <li>Enjambment and caesura</li>
                    <li>Rhyme scheme</li>
                    <li>Rhythm and metre</li>
                    <li>Volta (a shift or turn)</li>
                    <li>Opening and closing lines</li>
                    <li>Form (sonnet, ballad, free verse)</li>
                    <li>Narrative voice and perspective</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Timing guide ──────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">Timing Guide</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary text-left">
                  <th className="py-2 pr-4 font-semibold text-foreground">Section</th>
                  <th className="py-2 pr-4 font-semibold text-foreground">Marks</th>
                  <th className="py-2 pr-4 font-semibold text-foreground">Time</th>
                  <th className="py-2 font-semibold text-foreground">Tip</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">A: 19th-Century Novel</td>
                  <td className="py-3 pr-4">40</td>
                  <td className="py-3 pr-4">~55 mins</td>
                  <td className="py-3">5 min plan + 4-5 paragraphs</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">B: Anthology Poetry</td>
                  <td className="py-3 pr-4">24</td>
                  <td className="py-3 pr-4">~40 mins</td>
                  <td className="py-3">Compare named poem with your choice</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">C(a): Unseen Poem 1</td>
                  <td className="py-3 pr-4">8</td>
                  <td className="py-3 pr-4">~20 mins</td>
                  <td className="py-3">Read twice, 3-4 PEA paragraphs</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">C(b): Unseen Comparison</td>
                  <td className="py-3 pr-4">8</td>
                  <td className="py-3 pr-4">~15 mins</td>
                  <td className="py-3">2-3 comparative paragraphs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Exam technique ────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Paper 2 Exam Technique
          </h2>

          <div className="mt-6 rounded-xl bg-muted p-6">
            <h3 className="text-lg font-bold text-foreground">
              19th-Century Novel — Top Tips
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Memorise short, versatile quotes</strong> — since there is no extract, you need quotes ready for multiple topics. Learn 15-20 key quotes that cover major themes and characters.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Context is crucial</strong> — 19th-century novels are rooted in their historical context. Link to the writer&apos;s purpose, social conditions, and literary movements (e.g., Gothic, Romantic, Victorian realism).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>SPaG matters</strong> — 4 marks are awarded for spelling, punctuation, and grammar. Write clearly and use literary terminology accurately.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Show awareness of the whole text</strong> — reference the beginning, middle, and end to demonstrate complete knowledge.
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
