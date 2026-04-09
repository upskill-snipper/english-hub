"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/* ─── Data ───────────────────────────────────────────────────── */

const characters = [
  {
    name: "The Narrator (the second Mrs de Winter)",
    description:
      "The unnamed first-person narrator and protagonist. A young, shy, and socially insecure woman who marries Maxim de Winter after working as a paid companion to the vulgar Mrs Van Hopper in Monte Carlo. Her lack of a name is itself significant: she has no fixed identity of her own, defining herself always in relation to others. At Manderley she is overwhelmed by the grandeur of the house and the lingering presence of Rebecca, constantly measuring herself against an idealised predecessor. Her naivety and self-doubt make her an unreliable narrator whose perceptions the reader must question. Over the course of the novel she matures from a passive, fearful girl into a woman who chooses complicity with Maxim, raising uncomfortable moral questions about love and loyalty.",
  },
  {
    name: "Maxim de Winter",
    description:
      "The wealthy owner of Manderley and a man haunted by his past. Maxim is outwardly charming and authoritative but conceals deep anger and guilt. His moods are unpredictable: he can be tender and then suddenly cold, a pattern that keeps the narrator (and the reader) uncertain. The revelation that he murdered Rebecca transforms our understanding of him from romantic hero to morally ambiguous figure. Du Maurier complicates easy judgement: Maxim killed Rebecca, yet the narrative invites sympathy by presenting Rebecca as manipulative and cruel. Maxim represents the power of the patriarchal upper class, whose wealth and status can conceal even the gravest crimes.",
  },
  {
    name: "Mrs Danvers",
    description:
      "The sinister housekeeper of Manderley, devoted to Rebecca with an intensity that borders on obsession. Mrs Danvers is a Gothic figure: skeletal, dressed in black, appearing silently in doorways. She undermines the narrator at every opportunity, preserving Rebecca&rsquo;s rooms as a shrine and making the narrator feel like an intruder. Her most dangerous moment comes when she urges the narrator to jump from the window, a scene of psychological manipulation that reveals the depth of her fixation. Mrs Danvers represents the power of the past to dominate the present. Her devotion to Rebecca is so total that she ultimately sets fire to Manderley rather than see it belong to another woman.",
  },
  {
    name: "Rebecca de Winter",
    description:
      "The first Mrs de Winter, who is dead before the novel begins but whose presence permeates every page. Rebecca is never directly seen or heard; she exists only through other characters&rsquo; accounts, making her a construct of memory and reputation rather than a real person to the reader. To the outside world she was beautiful, talented, and the perfect hostess. Maxim&rsquo;s revelation exposes a different Rebecca: manipulative, promiscuous, and cruel, who goaded him into killing her. However, the reader receives this version only from Maxim, whose reliability is questionable. Rebecca functions as a symbol of the unattainable ideal against which the narrator measures herself, and her ambiguity is central to the novel&rsquo;s power.",
  },
  {
    name: "Jack Favell",
    description:
      "Rebecca&rsquo;s cousin and secret lover. Favell is brash, dishonest, and morally corrupt, providing a stark contrast to Maxim&rsquo;s restrained respectability. He attempts to blackmail Maxim after Rebecca&rsquo;s body is discovered, claiming that Maxim murdered her. Favell&rsquo;s knowledge of Rebecca&rsquo;s true nature makes him dangerous, yet his own disreputable character ensures that the authorities do not take him seriously. Du Maurier uses Favell to explore how class and respectability determine whose testimony is believed: a gentleman&rsquo;s word outweighs that of a man considered socially inferior, regardless of the truth.",
  },
  {
    name: "Frank Crawley",
    description:
      "Maxim&rsquo;s loyal estate manager and the narrator&rsquo;s most reliable ally at Manderley. Frank is decent, honest, and quietly supportive, offering the narrator kindness without ulterior motive. He is one of the few characters who knew the truth about Rebecca&rsquo;s character but maintained his loyalty to Maxim. Frank represents understated integrity, and his discomfort when discussing Rebecca hints at the secrets beneath Manderley&rsquo;s polished surface. His unwillingness to speak ill of the dead, even when it would help the narrator, reflects the social code of discretion that enables deception.",
  },
  {
    name: "Ben",
    description:
      "A simple-minded man who lives near the beach cottage where Rebecca conducted her affairs. Ben is terrified of Rebecca and Mrs Danvers, and his fearful references to the &lsquo;tall dark woman&rsquo; who threatened him provide early hints that Rebecca was not the saint everyone believes. Ben exists on the margins of Manderley&rsquo;s social world, and his outsider status gives him a perspective unclouded by social convention. His fear and simplicity make him a source of unfiltered truth in a novel where almost every other character conceals or distorts.",
  },
];

const themes = [
  {
    name: "Identity & Self-Worth",
    detail:
      "The narrator&rsquo;s struggle for identity is the novel&rsquo;s emotional core. She has no name, no social standing, and no confidence, defining herself entirely through her relationship with Maxim and her comparison with Rebecca. Du Maurier explores how identity can be eroded by jealousy and insecurity: the narrator becomes so consumed by Rebecca&rsquo;s shadow that she loses sight of her own qualities. The fancy-dress ball, where she unwittingly copies Rebecca&rsquo;s costume, dramatises her failure to establish a separate identity. Only after learning the truth about Rebecca does the narrator begin to find her own sense of self, though even this is complicated by her moral complicity in concealing murder.",
  },
  {
    name: "Jealousy & Obsession",
    detail:
      "Jealousy drives the narrative. The narrator is consumed by jealousy of a dead woman she never met, imagining Rebecca as perfect in every way she herself is not. This jealousy is irrational and self-destructive, distorting the narrator&rsquo;s perceptions and preventing her from seeing the truth. Mrs Danvers&rsquo;s obsession with Rebecca mirrors the narrator&rsquo;s, but in reverse: where the narrator fears Rebecca&rsquo;s superiority, Danvers worships it. Du Maurier shows jealousy and obsession as forms of imprisonment, trapping characters in patterns of thought from which they cannot escape. The novel suggests that we construct ideals and then torture ourselves by failing to match them.",
  },
  {
    name: "Memory & the Past",
    detail:
      "The novel opens with the famous line &lsquo;Last night I dreamt I went to Manderley again&rsquo;, establishing memory as the lens through which the entire story is filtered. The past is inescapable: Rebecca&rsquo;s monogrammed possessions, her preserved rooms, the routines she established all ensure that she remains present at Manderley long after her death. Du Maurier explores how memory distorts reality, creating idealised or demonised versions of people and places. The narrator&rsquo;s retrospective narration means the reader never accesses events directly but only through the colouring of hindsight, raising questions about the reliability of all remembered experience.",
  },
  {
    name: "Class & Social Expectations",
    detail:
      "The narrator&rsquo;s anxiety about her social position drives much of her insecurity. She comes from a modest background and feels acutely out of place among Manderley&rsquo;s servants, guests, and rituals. Du Maurier exposes the cruelty of the English class system: the narrator is judged not on her character but on her ability to perform the role of a great lady. Mrs Van Hopper, Beatrice, and the Manderley servants all assess her against the standard set by Rebecca, who performed the role flawlessly. The inquest and its aftermath reveal how class protects the powerful: Maxim&rsquo;s status as a gentleman ensures that his account is believed over Favell&rsquo;s, regardless of the evidence.",
  },
  {
    name: "Secrets & Deception",
    detail:
      "Manderley is built on secrets. Maxim conceals the truth about Rebecca&rsquo;s death. Mrs Danvers conceals Rebecca&rsquo;s affairs. Rebecca herself concealed her true nature behind a perfect public facade. The narrator conceals her insecurities behind a mask of composure. Du Maurier structures the novel as a gradual revelation: layers of deception are peeled away until the shocking truth emerges. The Gothic motif of the locked room (the beach cottage, Rebecca&rsquo;s preserved west wing) symbolises the secrets that characters keep. The novel asks whether some secrets are necessary, and whether truth always liberates or can sometimes destroy.",
  },
];

const chapterSummary = [
  {
    section: "Chapters 1\u20135: Monte Carlo & the Courtship",
    events:
      "The novel opens with the narrator looking back on Manderley from exile. In Monte Carlo, she works as companion to the snobbish Mrs Van Hopper and meets the brooding Maxim de Winter, a widower. Their courtship is rapid and unequal: Maxim proposes abruptly, and the narrator accepts, overwhelmed by the prospect of escaping her dull existence. Mrs Van Hopper dismisses the match as unsuitable, foreshadowing the class anxieties to come.",
    quotations: [
      {
        quote: "Last night I dreamt I went to Manderley again",
        analysis:
          "The novel\u2019s iconic opening line. The past tense and dream framework establish memory, loss, and longing as central concerns. The word \u2018again\u2019 implies compulsive return, suggesting the narrator is trapped by the past.",
      },
      {
        quote: "We can never go back again, that much is certain",
        analysis:
          "Establishes the irreversibility of time and the impossibility of recapturing the past. The finality of \u2018certain\u2019 contrasts with the uncertainty that characterises the narrator throughout the novel.",
      },
    ],
  },
  {
    section: "Chapters 6\u201310: Arrival at Manderley",
    events:
      "The narrator arrives at Manderley and is immediately overwhelmed by its grandeur, its rituals, and the lingering presence of Rebecca. Mrs Danvers is cold and intimidating. The narrator discovers that Rebecca\u2019s possessions remain everywhere: her stationery, her handwriting in the visitors\u2019 book, her arrangements for the household. The narrator feels inadequate, comparing herself unfavourably to Rebecca at every turn. She explores the grounds and discovers the beach cottage.",
    quotations: [
      {
        quote:
          "I am Mrs de Winter now, I am Mrs de Winter. I would repeat it over and over again",
        analysis:
          "The repetition reveals the narrator\u2019s desperation to convince herself of her own identity. The need to rehearse her married name suggests she does not feel it belongs to her. The title \u2018Mrs de Winter\u2019 connects her not to herself but to a role previously occupied by Rebecca.",
      },
      {
        quote:
          "A white slim hand was writing, writing, the tall sloping letters \u2014 R de W \u2014 R de W \u2014 R de W",
        analysis:
          "Rebecca\u2019s monogram becomes a haunting motif. The disembodied \u2018white slim hand\u2019 evokes a ghostly presence. The repetition of the initials suggests an inescapable brand of ownership: Manderley belongs to Rebecca even in death.",
      },
    ],
  },
  {
    section: "Chapters 11\u201315: Growing Insecurity",
    events:
      "The narrator\u2019s insecurity deepens. She overhears servants comparing her unfavourably to Rebecca. She visits the beach cottage and finds it unsettling. Mrs Danvers takes her to Rebecca\u2019s preserved rooms in the west wing, showing her Rebecca\u2019s clothes, brushes, and nightdress with obsessive reverence. Maxim\u2019s moods become increasingly unpredictable, and the narrator fears he still loves Rebecca. She agrees to host the annual fancy-dress ball to prove herself as mistress of Manderley.",
    quotations: [
      {
        quote:
          "Do you think the dead come back and watch the living?",
        analysis:
          "Mrs Danvers\u2019s question blurs the boundary between the living and the dead, reinforcing the Gothic atmosphere. It suggests that Rebecca\u2019s influence is supernatural in its power, and that Mrs Danvers herself exists in a liminal state between devotion to the dead and engagement with the living.",
      },
      {
        quote:
          "She\u2019s still mistress here, even if she is dead",
        analysis:
          "Mrs Danvers\u2019s declaration makes explicit what the entire novel implies: Rebecca\u2019s authority over Manderley has not ended with her death. The present tense \u2018is\u2019 applied to a dead woman creates an uncanny effect, refusing to consign Rebecca to the past.",
      },
    ],
  },
  {
    section: "Chapters 16\u201320: The Costume Ball & Revelation",
    events:
      "Mrs Danvers manipulates the narrator into wearing a costume identical to one Rebecca wore, causing Maxim\u2019s fury and the narrator\u2019s humiliation. That night, Mrs Danvers urges the narrator to jump from the window. A distress rocket interrupts, and a ship runs aground in the bay. Divers discover a boat on the sea bed \u2014 with Rebecca\u2019s body inside. Maxim confesses the truth to the narrator: he never loved Rebecca; she was cruel and manipulative; he shot her, placed her body in the boat, and sank it.",
    quotations: [
      {
        quote:
          "You thought I loved Rebecca? You thought I killed her loving her? I hated her",
        analysis:
          "Maxim\u2019s confession shatters the narrator\u2019s (and the reader\u2019s) assumptions. The three short, emphatic sentences build to the devastating final declaration. The reversal from love to hatred reframes every earlier scene: Maxim\u2019s dark moods were not grief but guilt.",
      },
      {
        quote:
          "It\u2019s gone forever, that funny, young, lost look I loved. It won\u2019t come back again. I killed that too, when I told you about Rebecca",
        analysis:
          "Maxim recognises that his confession has destroyed the narrator\u2019s innocence. The word \u2018killed\u2019 is chillingly double-edged, linking the metaphorical death of innocence to the literal death of Rebecca. The narrator\u2019s transformation from na\u00efvet\u00e9 to complicity is complete.",
      },
    ],
  },
  {
    section: "Chapters 21\u201327: The Inquest & Resolution",
    events:
      "An inquest is held. The verdict is suicide, but Favell arrives and accuses Maxim of murder. He produces a note from Rebecca suggesting she had a motive to live. The investigation leads to Rebecca\u2019s London doctor, who reveals she had terminal cancer and only months to live \u2014 giving her a motive for provoking her own death. Maxim is cleared. On the drive home, the narrator sees the sky glowing red: Mrs Danvers has set Manderley ablaze. The house and everything it represented are destroyed.",
    quotations: [
      {
        quote:
          "The road to Manderley lay ahead. There was no moon. The sky above our heads was inky black",
        analysis:
          "Pathetic fallacy signals impending catastrophe. The absence of moonlight and the \u2018inky black\u2019 sky create a sense of foreboding and moral darkness. The road \u2018ahead\u2019 leads not to home but to destruction, inverting the expected journey of return.",
      },
      {
        quote:
          "The ashes blew towards us with the salt wind from the sea",
        analysis:
          "The final image connects Manderley\u2019s destruction to the natural world. Ashes and salt evoke death and desolation. The wind from the sea links the fire to Rebecca, whose body was found in the sea. Manderley\u2019s destruction is both liberation and loss: the narrator is free from Rebecca\u2019s shadow but has lost the only home she knew.",
      },
    ],
  },
];

const narrativeTechniques = [
  {
    name: "First-Person Unnamed Narrator",
    detail:
      "The narrator is never named, which has profound effects on the reader\u2019s experience. Her anonymity reflects her lack of social power and fixed identity. Everything the reader knows is filtered through her anxious, self-doubting perspective, making her an unreliable narrator: she misreads situations, projects her insecurities onto others, and imagines the worst. Du Maurier exploits this limited viewpoint to sustain suspense, since the narrator\u2019s assumptions (that Maxim loved Rebecca, that Rebecca was perfect) are gradually revealed to be wrong.",
  },
  {
    name: "Gothic Atmosphere",
    detail:
      "Du Maurier draws on the Gothic tradition to create an atmosphere of dread and psychological unease. Manderley is presented as beautiful but menacing, its corridors shadowed, its west wing preserved as a shrine. Mrs Danvers is a classic Gothic figure, spectral and threatening. The sea, the fog, and the overgrown gardens contribute to a sense of nature encroaching on civilisation. Du Maurier modernises the Gothic by locating horror not in the supernatural but in psychological torment: the narrator is haunted not by a ghost but by her own imagination.",
  },
  {
    name: "Manderley as Symbol",
    detail:
      "Manderley is far more than a setting; it is a symbol of the past, of class privilege, of the patriarchal order, and of the impossibility of perfection. The house represents everything the narrator desires and fears: beauty, status, belonging, but also entrapment and the suffocating weight of tradition. Rebecca\u2019s continued presence in the house symbolises the way the past refuses to be buried. The destruction of Manderley by fire at the novel\u2019s end is simultaneously a catastrophe and a liberation, freeing the narrator and Maxim from Rebecca\u2019s shadow but leaving them rootless and diminished.",
  },
  {
    name: "Suspense & Foreshadowing",
    detail:
      "Du Maurier is a master of suspense. The retrospective narration (the narrator tells the story from an unspecified future) creates dramatic irony: the reader knows from the opening chapter that Manderley has been lost. Foreshadowing is pervasive: Maxim\u2019s dark moods, his aversion to the sea, his violent reaction to the fancy-dress costume all hint at the truth about Rebecca. The pacing builds steadily, with revelations carefully timed to maximise their impact. The structural pivot at Chapter 20, when Maxim confesses, transforms the novel from a psychological study of jealousy into a thriller.",
  },
];

const assessmentObjectives = [
  {
    code: "AO1",
    title: "Show detailed knowledge of the text",
    detail:
      "Demonstrate close knowledge of the novel through well-chosen quotations and precise references to events, characters, and dialogue. In passage-based questions, work through the extract methodically. In essay questions, select relevant moments from across the entire novel, not just one section.",
  },
  {
    code: "AO2",
    title: "Understand the writer\u2019s methods and effects",
    detail:
      "Analyse how du Maurier uses language, form, and structure to create meaning. Identify literary techniques (imagery, symbolism, narrative perspective, foreshadowing, pathetic fallacy, Gothic conventions) and explain their effects on the reader. This is the most heavily weighted objective: always focus on how du Maurier writes, not just what happens.",
  },
  {
    code: "AO3",
    title: "Respond to different interpretations (implied)",
    detail:
      "While Cambridge IGCSE does not have a separately marked AO for alternative readings, examiners reward responses that consider multiple perspectives. For example: is Maxim a sympathetic figure or a controlling murderer? Is the narrator\u2019s devotion to him love or dependency? Is Rebecca a villain or a victim of patriarchal violence?",
  },
  {
    code: "AO4",
    title: "Relate the text to its context",
    detail:
      "Show understanding of the novel\u2019s context: 1930s gender expectations, the English class system, the Gothic literary tradition, and du Maurier\u2019s own life as a woman navigating social conventions. Context should be integrated naturally into your analysis, not bolted on as a separate paragraph.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function RebeccaStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature &mdash; Paper 1 (Prose)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Rebecca &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Characters, themes, chapter summaries with key quotations, du
            Maurier&rsquo;s narrative techniques, and Cambridge-specific exam
            guidance.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Navigation ──────────────────────────────────────────── */}
        <nav
          className="mb-10 flex flex-wrap gap-2 text-sm"
          aria-label="Page sections"
        >
          {[
            "Characters",
            "Themes",
            "Chapter Summary",
            "Narrative Techniques",
            "Assessment Objectives",
            "Exam Guidance",
            "Sample Question",
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-[#7D3C98]/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Characters ──────────────────────────────────────────── */}
        <section id="characters" aria-labelledby="characters-heading">
          <h2
            id="characters-heading"
            className="text-2xl font-bold text-foreground"
          >
            Character Analysis
          </h2>
          <div className="mt-6 space-y-6">
            {characters.map((c) => (
              <Card key={c.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{c.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Themes ──────────────────────────────────────────────── */}
        <section id="themes" aria-labelledby="themes-heading">
          <h2
            id="themes-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Themes
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {themes.map((t) => (
              <Card key={t.name}>
                <CardHeader>
                  <CardTitle>{t.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Chapter Summary ─────────────────────────────────────── */}
        <section id="chapter-summary" aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="text-2xl font-bold text-foreground"
          >
            Chapter Summary &amp; Key Quotations
          </h2>
          <div className="mt-6 space-y-6">
            {chapterSummary.map((ch) => (
              <Card key={ch.section}>
                <CardHeader>
                  <CardTitle>{ch.section}</CardTitle>
                  <CardDescription>{ch.events}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ch.quotations.map((q, i) => (
                      <div
                        key={i}
                        className="rounded-lg border-l-4 border-[#7D3C98] bg-primary/5 p-4"
                      >
                        <blockquote className="text-sm font-medium italic text-foreground">
                          &ldquo;{q.quote}&rdquo;
                        </blockquote>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {q.analysis}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Narrative Techniques ────────────────────────────────── */}
        <section
          id="narrative-techniques"
          aria-labelledby="techniques-heading"
        >
          <h2
            id="techniques-heading"
            className="text-2xl font-bold text-foreground"
          >
            Du Maurier&rsquo;s Narrative Techniques
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {narrativeTechniques.map((t) => (
              <Card key={t.name}>
                <CardHeader>
                  <CardTitle>{t.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment Objectives ───────────────────────────────── */}
        <section
          id="assessment-objectives"
          aria-labelledby="ao-heading"
        >
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding how Cambridge marks your work helps you target your
            revision. Paper 1 (Prose) questions are marked holistically, but
            these objectives indicate what examiners are looking for.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {assessmentObjectives.map((ao) => (
              <Card key={ao.code}>
                <CardHeader>
                  <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-bold text-foreground">
                    {ao.code}
                  </span>
                  <CardTitle className="mt-2">{ao.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {ao.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Guidance ────────────────────────────────────────── */}
        <section id="exam-guidance" aria-labelledby="exam-heading">
          <h2
            id="exam-heading"
            className="text-2xl font-bold text-foreground"
          >
            CAIE Exam Guidance
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE Rebecca questions appear in{" "}
            <strong>Paper 1 (Prose)</strong>. You will choose between a
            passage-based (a) question and an essay (b) question.
          </p>

          <div className="mt-6 space-y-6">
            {/* Passage-based guidance */}
            <Card>
              <CardHeader>
                <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  Part (a) &mdash; Passage-Based
                </span>
                <CardTitle className="mt-2">
                  How to Approach Passage-Based Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    &bull; Read the extract carefully at least twice before
                    writing. Underline key words, images, and techniques.
                  </li>
                  <li>
                    &bull; Work through the passage systematically, selecting
                    specific words and phrases for close analysis.
                  </li>
                  <li>
                    &bull; Always analyse <em>how</em> du Maurier creates
                    effects, not just <em>what</em> is described. Use precise
                    literary terminology: imagery, symbolism, pathetic
                    fallacy, foreshadowing, narrative voice.
                  </li>
                  <li>
                    &bull; Link outward from the passage to the rest of the
                    novel: how does this moment connect to wider themes,
                    character development, or the novel&rsquo;s structure?
                  </li>
                  <li>
                    &bull; Comment on the narrator&rsquo;s perspective: what
                    does she notice, what does she miss, and what does this
                    reveal about her psychology?
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Essay guidance */}
            <Card>
              <CardHeader>
                <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  Part (b) &mdash; Essay Question
                </span>
                <CardTitle className="mt-2">
                  How to Approach Essay Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    &bull; Plan 3&ndash;4 key points before writing. Each point
                    should be supported by quotations from different parts of
                    the novel.
                  </li>
                  <li>
                    &bull; Structure your response with a clear argument that
                    runs through the essay. Avoid simply retelling the plot.
                  </li>
                  <li>
                    &bull; Focus on du Maurier&rsquo;s methods: how she uses
                    language, structure, narrative perspective, Gothic
                    conventions, and symbolism to shape meaning.
                  </li>
                  <li>
                    &bull; Integrate context naturally. For example:
                    &ldquo;The narrator&rsquo;s anxiety about performing the
                    role of hostess reflects 1930s expectations of upper-class
                    women, whose worth was measured by social competence
                    rather than personal qualities.&rdquo;
                  </li>
                  <li>
                    &bull; Consider alternative readings where appropriate: is
                    Maxim a romantic hero or a controlling figure? Is
                    Rebecca&rsquo;s destruction of her marriage justified?
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Exam technique box */}
            <div className="rounded-lg border-2 border-[#7D3C98]/30 bg-primary/5 p-5">
              <h3 className="font-bold text-foreground">
                Cambridge Paper 1 Exam Technique
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    Time management:
                  </strong>{" "}
                  You have approximately 45 minutes per question. Spend 5
                  minutes planning, 35 minutes writing, and 5 minutes
                  checking.
                </li>
                <li>
                  <strong className="text-foreground">
                    Use of terminology:
                  </strong>{" "}
                  Cambridge rewards precise literary terminology used
                  naturally: first-person narration, unreliable narrator,
                  Gothic conventions, foreshadowing, pathetic fallacy,
                  symbolism, dramatic irony, juxtaposition, motif.
                </li>
                <li>
                  <strong className="text-foreground">
                    Quality over quantity:
                  </strong>{" "}
                  A well-structured response with fewer points analysed in
                  depth will score higher than a rushed response covering many
                  points superficially.
                </li>
                <li>
                  <strong className="text-foreground">
                    The &lsquo;how&rsquo; question:
                  </strong>{" "}
                  Nearly every Cambridge question asks <em>how</em> du Maurier
                  achieves something. Your response must go beyond plot
                  summary to analyse methods and their effects on the reader.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Sample Question ─────────────────────────────────────── */}
        <section id="sample-question" aria-labelledby="sample-heading">
          <h2
            id="sample-heading"
            className="text-2xl font-bold text-foreground"
          >
            Sample Question with Model Paragraph
          </h2>

          <Card className="mt-6">
            <CardHeader>
              <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <CardTitle className="mt-2">
                How does du Maurier present the power of the past in{" "}
                <em>Rebecca</em>?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border bg-primary/5 p-5">
                <h4 className="text-sm font-bold text-foreground">
                  Model Paragraph (addressing all 4 AOs)
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Du Maurier presents the power of the past most vividly
                  through the narrator&rsquo;s obsessive encounter with
                  Rebecca&rsquo;s monogram, describing how &ldquo;a white
                  slim hand was writing, writing, the tall sloping letters
                  &mdash; R de W &mdash; R de W&rdquo;{" "}
                  <span className="font-semibold text-foreground">
                    [AO1: precise quotation]
                  </span>
                  . The disembodied hand, detached from any living body,
                  functions as a Gothic image of haunting: Rebecca is dead,
                  yet her handwriting continues to &lsquo;write&rsquo; itself
                  into the present, as though her will persists beyond the
                  grave{" "}
                  <span className="font-semibold text-foreground">
                    [AO2: analysis of Gothic imagery and present tense]
                  </span>
                  . The repetition of the initials mimics the narrator&rsquo;s
                  compulsive thoughts, suggesting that the past does not
                  merely linger but actively replays, trapping her in a cycle
                  she cannot escape. A reader might interpret this passage as
                  revealing less about Rebecca&rsquo;s power than about the
                  narrator&rsquo;s psychology: it is her insecurity, not
                  Rebecca&rsquo;s ghost, that animates the dead woman&rsquo;s
                  handwriting{" "}
                  <span className="font-semibold text-foreground">
                    [AO3: alternative interpretation]
                  </span>
                  . Du Maurier, writing in 1938, draws on a culture in which
                  a woman&rsquo;s identity was subsumed by her husband&rsquo;s
                  name; the monogram &lsquo;R de W&rsquo; is not
                  Rebecca&rsquo;s own name but her married title, suggesting
                  that even Rebecca&rsquo;s seemingly invincible identity was
                  a construction of patriarchal convention rather than an
                  authentic self{" "}
                  <span className="font-semibold text-foreground">
                    [AO4: contextual understanding of gender and identity]
                  </span>
                  .
                </p>
              </div>

              <div className="mt-4 rounded bg-muted/50 p-4">
                <p className="text-xs font-semibold text-foreground">
                  Why this paragraph works:
                </p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Opens with a clear topic sentence that addresses the
                    question directly
                  </li>
                  <li>
                    &bull; Embeds a precise, well-selected quotation (AO1)
                  </li>
                  <li>
                    &bull; Analyses du Maurier&rsquo;s techniques &mdash;
                    Gothic imagery, repetition, narrative perspective (AO2)
                  </li>
                  <li>
                    &bull; Offers an alternative reading of the passage (AO3)
                  </li>
                  <li>
                    &bull; Integrates context naturally into the analysis rather
                    than bolting it on (AO4)
                  </li>
                  <li>
                    &bull; Maintains analytical focus throughout without
                    lapsing into plot summary
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Back link ───────────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>
      </div>
    </>
  );
}
