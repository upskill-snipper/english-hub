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
    name: "Pip (Philip Pirrip)",
    description:
      "The protagonist and first-person narrator. Pip begins as an orphan raised 'by hand' by his sister on the Kent marshes, a humble and morally sympathetic child. After visiting Satis House, he develops a deep shame about his social class and an obsessive desire to become a gentleman. His 'great expectations' — funded secretly by the convict Magwitch — corrupt his values: he neglects Joe, becomes a snob, and pursues the unattainable Estella. Pip's journey is ultimately one of moral education; he must learn that true gentility lies in character, not in wealth or social status. His retrospective narration allows Dickens to create irony, as the older Pip judges his younger self's vanity and ingratitude.",
  },
  {
    name: "Estella",
    description:
      "Miss Havisham's adopted daughter, raised from infancy to break men's hearts as an instrument of revenge. Estella is cold, proud, and contemptuous of Pip's low origins, yet she repeatedly warns him that she has 'no heart' and cannot love. She is both victim and weapon: Havisham has deliberately suppressed her capacity for emotion. Her marriage to the brutal Drummle — chosen precisely because it will cause suffering — demonstrates her self-destructive obedience to Havisham's programme. Estella's true parentage (daughter of Magwitch and Molly) creates a profound irony: she is no more 'genteel' by birth than Pip. In the revised ending, her suffering has given her 'a heart to understand what my heart used to be', suggesting that empathy can be learned through pain.",
  },
  {
    name: "Miss Havisham",
    description:
      "A wealthy, reclusive woman who was jilted on her wedding day by the swindler Compeyson. She has stopped all the clocks at twenty to nine, still wears her decaying wedding dress, and lives among the rotting remains of her wedding feast in the darkened Satis House. She has adopted Estella and trained her to be heartless, using her as a weapon of revenge against the male sex. Miss Havisham is both a Gothic figure and a cautionary example of how trauma can become self-perpetuating cruelty. Her eventual recognition that she has destroyed Estella's capacity for love — 'What have I done!' — is one of the novel's most powerful moments. She dies from burns sustained when her wedding dress catches fire, a symbolic destruction of the past she clung to.",
  },
  {
    name: "Joe Gargery",
    description:
      "The village blacksmith and Pip's brother-in-law, who serves as the novel's moral compass. Joe is uneducated and socially unsophisticated, but he possesses genuine kindness, loyalty, and integrity. He endures Mrs Joe's violence without complaint and treats Pip with unfailing love. When Pip becomes a gentleman, Joe is painfully aware that he no longer belongs in Pip's new world: 'Pip, dear old chap, life is made of ever so many partings welded together.' His discomfort in London — calling Pip 'sir' — is heartbreaking. Joe represents the values Pip must rediscover: that worth is measured by character, not class. His forgiveness of Pip and his nursing of him through illness embody the novel's argument for unconditional love.",
  },
  {
    name: "Abel Magwitch (Provis)",
    description:
      "The escaped convict whom Pip helps on the marshes as a child, and who is later revealed as the secret benefactor behind Pip's 'great expectations'. Magwitch has spent years in Australia making his fortune with one purpose: to 'make a gentleman' of the boy who showed him kindness. He is both frightening and deeply sympathetic — a man brutalised by the justice system who channels his energy into gratitude. His return to England (risking death) forces Pip to confront the true source of his wealth and, by extension, the arbitrary nature of class. Magwitch's trial and death allow Pip to demonstrate genuine moral growth: he stays loyal to Magwitch not for money but out of love, holding his hand as he dies.",
  },
  {
    name: "Herbert Pocket",
    description:
      "Pip's closest friend in London, whom he first meets as 'the pale young gentleman' at Satis House. Herbert is cheerful, honest, and without pretension, despite coming from a genteel family that has fallen on hard times. He nicknames Pip 'Handel' and gently teaches him gentlemanly manners, functioning as a positive model of what a true gentleman should be. Herbert's modest ambitions — he wants to be a merchant, not an aristocrat — contrast with Pip's inflated desires. Pip's secret financing of Herbert's partnership with Clarriker's is one of his few genuinely selfless acts during his 'expectations' period, and it proves that Pip is capable of the quiet generosity he has learned from Joe.",
  },
  {
    name: "Mr Jaggers",
    description:
      "The powerful London lawyer who acts as intermediary for Pip's benefactor. Jaggers is defined by his professional detachment: he washes his hands obsessively (a symbolic act of distancing himself from the moral contamination of his clients), speaks in carefully qualified language, and never reveals more than necessary. He straddles the worlds of respectability and criminality, moving between his Gerrard Street office and Newgate Prison with equal authority. Jaggers represents the novel's critique of the legal system: justice is a commodity available to those who can pay, and the law is indifferent to truth or morality. His household — with Molly as his tamed servant — mirrors the power dynamics of the courtroom.",
  },
  {
    name: "Wemmick",
    description:
      "Jaggers's clerk, who lives a remarkable double life. At the office, he is dry, businesslike, and mercenary ('portable property' is his professional creed). At his miniature castle in Walworth — complete with a drawbridge, a cannon, and his 'Aged Parent' — he is warm, hospitable, and sentimental. Wemmick's strict separation of work and home life is both comic and thematically significant: it dramatises the dehumanising effect of the legal-commercial world and suggests that one must actively protect one's private humanity from institutional corruption. His Walworth home is an island of authenticity in a novel full of deception and performance.",
  },
];

const themes = [
  {
    name: "Social Class and Ambition",
    detail:
      "Great Expectations is Dickens's most sustained critique of the Victorian class system. Pip's desire to rise from blacksmith's apprentice to gentleman drives the plot, but Dickens systematically dismantles the equation of wealth with worth. The 'gentlemen' Pip encounters — Bentley Drummle is violent and stupid, Compeyson is a criminal — are morally inferior to Joe and Magwitch. Pip's shame at the forge and his snobbery toward Joe expose how class aspiration corrupts genuine feeling. The revelation that Pip's money comes from a convict, not a gentlewoman, is the novel's central irony: gentility is a performance, not an essence. Dickens argues that true gentlemanliness is a matter of conduct and compassion, not birth or bank balance.",
  },
  {
    name: "Identity and Self-Improvement",
    detail:
      "Pip's journey is a Bildungsroman — a novel of education and self-discovery. His identity is unstable throughout: he is an orphan who does not know his parents, a working-class boy who wants to be a gentleman, a beneficiary who does not know his benefactor. The novel asks whether self-improvement means acquiring money, manners, and social position, or developing moral awareness and empathy. Pip's 'great expectations' offer the first kind of improvement but destroy the second. His moral education comes not from books or etiquette but from suffering, loss, and the painful recognition that he has treated Joe and Biddy badly. By the end, Pip has become a better person — not because he is wealthier, but because he has learned humility and loyalty.",
  },
  {
    name: "Guilt and Redemption",
    detail:
      "Guilt pervades the novel from its opening scene, when the child Pip steals food for a convict and is terrorised by his own conscience. As Pip rises socially, his guilt shifts from fear of legal punishment to moral self-reproach: he is ashamed of Joe, ashamed of his origins, and later ashamed of his shame. The retrospective narration is itself an act of confession — the older Pip cataloguing and analysing his younger self's failings. Redemption in the novel is earned through suffering and selfless action: Pip's devotion to Magwitch, Miss Havisham's agonised recognition of her cruelty, and Joe's unconditional forgiveness. Dickens suggests that guilt, while painful, is a sign of moral consciousness and the first step toward becoming a better person.",
  },
  {
    name: "Justice and Criminality",
    detail:
      "The novel presents a justice system that punishes the poor and protects the wealthy. Magwitch, born into poverty and exploited by Compeyson, receives a heavier sentence because he looks like a criminal, while the well-spoken Compeyson gets a lighter punishment. Jaggers manipulates the law for profit; Newgate Prison looms over London as a reminder of the proximity between respectability and crime. Dickens challenges the Victorian assumption that criminals are morally inferior: Magwitch proves more loyal and generous than most 'respectable' characters. The novel blurs the boundary between criminal and victim, arguing that society creates the conditions that produce crime and then punishes individuals for the results.",
  },
  {
    name: "Love and Loyalty",
    detail:
      "The novel explores many forms of love: Pip's obsessive, self-destructive infatuation with Estella; Joe's quiet, unconditional devotion to Pip; Magwitch's gratitude-driven desire to make Pip a gentleman; Miss Havisham's warped, possessive love for Estella; Herbert and Clara's modest, genuine affection. Dickens contrasts performative, class-conscious love (Pip pursuing Estella because she represents refinement) with authentic, selfless love (Joe nursing Pip through illness without reproach). The novel suggests that true loyalty transcends class and circumstance: Joe loves Pip regardless of his social status, and Pip ultimately stays by Magwitch's side regardless of the legal danger. Love in Great Expectations is most powerful when it is least concerned with social advantage.",
  },
];

const partSummary = [
  {
    part: "Part 1: Childhood on the Marshes (Chapters 1\u201319)",
    summary:
      "The novel opens on the Kent marshes, where the orphan Pip encounters the escaped convict Magwitch in a churchyard and is terrified into stealing food and a file for him. Pip lives with his violent sister, Mrs Joe, and the gentle blacksmith Joe Gargery. He is invited to Satis House to 'play' for the reclusive Miss Havisham, where he meets the beautiful, contemptuous Estella. This experience plants in Pip a deep shame about his low social position and a desire to become a gentleman worthy of Estella. He is apprenticed to Joe at the forge, but his dissatisfaction grows. The part ends with the arrival of Jaggers, who announces that Pip has 'great expectations' from an unknown benefactor and must go to London immediately. Pip assumes Miss Havisham is his patron.",
    keyQuotations: [
      {
        quote: "My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening.",
        analysis: "The novel's opening establishes Pip's identity as constructed through memory and experience. 'Identity of things' suggests that selfhood is not innate but gradually assembled. The retrospective voice ('seems to me') signals that this is a story about the unreliability of self-understanding.",
      },
      {
        quote: "He calls the knaves, Jacks, this boy! And what coarse hands he has! And what thick boots!",
        analysis: "Estella's contempt awakens Pip's class consciousness. The tricolon of disdainful observations reduces Pip to his social markers. Dickens shows how the upper class dehumanises the poor through language, and how internalising this judgement distorts Pip's sense of self-worth.",
      },
      {
        quote: "I took the opportunity of being alone in the courtyard, to look at my coarse hands and my common boots. I had never thought of being ashamed of my hands before.",
        analysis: "A pivotal moment: Pip adopts Estella's perspective and begins to see himself through the lens of class. 'I had never thought of being ashamed' reveals that shame is not natural but socially constructed. Satis House has infected Pip with a dissatisfaction that will drive the entire novel.",
      },
    ],
  },
  {
    part: "Part 2: Great Expectations in London (Chapters 20\u201339)",
    summary:
      "Pip arrives in London and is established as a gentleman under the tutoring of Matthew Pocket, living with Herbert. He spends lavishly, falls into debt, and joins the Finches of the Grove (a pointless gentleman's dining club). He continues to visit Estella and Miss Havisham, convinced that Havisham intends Estella for him. He is visited by Joe, whom he treats with embarrassed condescension — a scene that marks the depth of his moral corruption. Mrs Joe dies after being attacked by Orlick. Pip comes of age at twenty-one, and Jaggers gives him five hundred pounds but reveals nothing more about his benefactor. The part ends with the shocking return of Magwitch, who reveals himself as Pip's true patron. Pip's world collapses: his 'expectations' come not from a gentlewoman but from a convict, and Estella was never intended for him.",
    keyQuotations: [
      {
        quote: "Pip, dear old chap, life is made of ever so many partings welded together, as I may say, and one man's a blacksmith, and one's a whitesmith, and one's a goldsmith, and one's a coppersmith. Diwisions among such must come.",
        analysis: "Joe's farewell speech uses the language of his own trade to articulate a painful social truth. The smithing metaphor is both tender and resigned: different metals, different destinies. 'Diwisions' (with its phonetic spelling marking Joe's lack of education) carries enormous emotional weight. Joe understands class barriers better than Pip, who pretends they don't exist while enforcing them.",
      },
      {
        quote: "I loved her simply because I found her irresistible. Once for all; I knew to my sorrow, often and often, if not always, that I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.",
        analysis: "The anaphoric repetition of 'against' creates a cumulative sense of self-destruction. Pip's love for Estella is presented not as romantic but as compulsive and masochistic. The retrospective narrator understands what the younger Pip could not: that this love is inseparable from his class aspiration. Estella represents not a person but a social ideal.",
      },
      {
        quote: "The abhorrence in which I held the man, the dread I had of him, the repugnance with which I shrank from him, could not have been exceeded if he had been some terrible beast.",
        analysis: "Pip's visceral horror at discovering Magwitch is his benefactor reveals his snobbery at its most naked. The tricolon of negative nouns ('abhorrence', 'dread', 'repugnance') shows Pip recoiling not from danger but from the destruction of his class fantasy. The animal simile ('terrible beast') is cruelly ironic: Pip dehumanises the man whose generosity made him 'human' in society's eyes.",
      },
    ],
  },
  {
    part: "Part 3: Resolution and Redemption (Chapters 40\u201359)",
    summary:
      "Pip shelters Magwitch and gradually comes to see his humanity, learning his life story and his connection to Compeyson (Miss Havisham's jilter). Pip discovers that Estella is Magwitch's daughter. He visits Miss Havisham one last time; she begs forgiveness, and her dress catches fire — Pip saves her but she later dies. Pip and Herbert plan Magwitch's escape down the Thames, but they are intercepted by Compeyson and the police. Magwitch kills Compeyson but is captured, tried, and sentenced to death. Pip stays by his side, telling the dying Magwitch that his daughter is alive, beautiful, and that Pip loves her. With his expectations gone, Pip falls dangerously ill and is nursed back to health by Joe, who also quietly pays his debts. Pip resolves to propose to Biddy but arrives to find she has married Joe. Humbled and penniless, Pip goes abroad to work for Herbert's firm. He returns years later and meets Estella at the ruins of Satis House; the revised ending implies they will not part again.",
    keyQuotations: [
      {
        quote: "I only saw a man who had meant to be my benefactor, and who had felt affectionately, gratefully, and generously, towards me with great constancy through a series of years. I only saw in him a much better man than I had been to Joe.",
        analysis: "This marks Pip's moral turning point. The repetition of 'I only saw' strips away all pretence and class prejudice. Pip finally judges Magwitch not by his social position but by his moral qualities — 'affectionately, gratefully, and generously' — and measures himself against Joe's standard. The comparison to Joe is crucial: Pip recognises that Magwitch's loyalty mirrors Joe's, and that he has betrayed both.",
      },
      {
        quote: "What have I done! What have I done!",
        analysis: "Miss Havisham's anguished repetition signals her late recognition that in using Estella as a weapon of revenge, she has destroyed the child she loved. The exclamation is both a question and a confession. Dickens presents her remorse as genuine but too late — a warning that cruelty, once set in motion, cannot easily be recalled.",
      },
      {
        quote: "I took her hand in mine, and we went out of the ruined place... I saw no shadow of another parting from her.",
        analysis: "The revised ending is deliberately ambiguous. 'The ruined place' — Satis House — symbolises the destruction of false expectations and the decay of class pretension. 'No shadow of another parting' is hope rather than certainty. Both Pip and Estella have been reformed by suffering; their possible reunion is earned through loss, not granted by fortune.",
      },
    ],
  },
];

const narrativeTechniques = [
  {
    technique: "First-Person Retrospective Narration",
    detail:
      "Pip tells his own story from an unspecified point in the future, looking back on his younger self. This creates a dual perspective: the naive, ambitious young Pip experiences events, while the older, wiser narrator comments on them with irony and self-reproach. The gap between the two voices is the novel's richest source of meaning. When the young Pip snubs Joe, the older narrator ensures we feel the full weight of his ingratitude. This technique makes the novel a sustained act of confession and self-examination, aligning the reader with Pip's moral education.",
  },
  {
    technique: "Irony",
    detail:
      "Dramatic irony structures the entire plot. Pip assumes his benefactor is Miss Havisham and that Estella is destined for him — both beliefs are wrong. The reader may suspect the truth before Pip does, creating tension and pathos. Verbal irony pervades the narration: the older Pip describes his younger self's pretensions with cutting understatement. Situational irony is central to the novel's moral argument: the 'gentleman' is funded by a convict; the 'lady' Estella is a convict's daughter; the respectable Compeyson is the true villain. Dickens uses irony to dismantle the Victorian equation of class with virtue.",
  },
  {
    technique: "Symbolism: Satis House",
    detail:
      "Satis House — whose name ironically means 'enough' — is the novel's most powerful symbol. With its stopped clocks, decaying wedding feast, and blocked-out daylight, it represents the paralysing effect of living in the past. Miss Havisham has frozen time at the moment of her betrayal, and everything around her rots. The brewery attached to the house is disused, suggesting that her wealth is stagnant and unproductive. For Pip, Satis House represents the allure and danger of the upper class: it is beautiful and terrifying, promising elevation but delivering corruption. Its eventual destruction by fire symbolises the necessary demolition of false expectations.",
  },
  {
    technique: "Symbolism: The Marshes",
    detail:
      "The Kent marshes, where the novel opens and to which it repeatedly returns, represent Pip's origins, his moral foundation, and the boundary between civilisation and wildness. The marshes are bleak and exposed but also honest — there is no pretence in their landscape. They are the site of Pip's first encounter with Magwitch (connecting criminality with Pip's childhood) and the site of his moral conscience (the 'dreadful pledge' he makes to the convict). The mists that hang over the marshes symbolise confusion, moral ambiguity, and the obscured truth of Pip's identity. As Pip leaves for London, the mists rise — but they never fully clear until the end of the novel.",
  },
  {
    technique: "Symbolism: The Forge",
    detail:
      "Joe's forge represents honest labour, warmth, loyalty, and moral integrity — everything that Pip's 'great expectations' teach him to despise and eventually to value again. The forge fire contrasts with the cold hearth of Satis House and the extinguished fires of Pip's London life. Forging is a process of transformation through heat and effort, mirroring Pip's own painful moral education. When Pip finally returns to the forge, he finds it changed (Joe and Biddy have married), reminding him that he cannot simply reclaim the past. The forge endures as the novel's symbol of authentic worth.",
  },
];

const assessmentObjectives = [
  {
    code: "AO1",
    title: "Show detailed knowledge of the text",
    detail:
      "Demonstrate close knowledge of the novel through well-chosen references and quotations. Great Expectations is a long text, so selectivity is key: choose moments that are rich in language and thematic significance rather than retelling the plot. Embed short quotations into your analysis rather than copying lengthy passages.",
  },
  {
    code: "AO2",
    title: "Understand the writer's methods and effects",
    detail:
      "Analyse how Dickens uses language, form, and structure to create meaning. For Great Expectations, focus on: the first-person retrospective narration and its ironic double perspective; symbolism (Satis House, the marshes, the forge, chains, mist); the Bildungsroman structure; contrasts between characters (Pip/Joe, Magwitch/Compeyson, Satis House/the forge); and Dickens's use of Gothic and comic registers.",
  },
  {
    code: "AO3",
    title: "Understand the significance of context",
    detail:
      "Connect the text to its Victorian context: the rigid class system, the criminal justice system, transportation to Australia, the self-made man ideal, the position of women, and Dickens's own experience of poverty and social mobility. Context should illuminate the text, not replace analysis — integrate it into your discussion of specific passages.",
  },
  {
    code: "AO4",
    title: "Develop a personal response",
    detail:
      "Offer your own interpretation rather than rehearsing generic points. Engage with complexity: Is Pip a sympathetic narrator or a self-pitying snob? Is the revised ending hopeful or merely less bleak? Does Dickens ultimately endorse or critique the possibility of self-improvement? Examiners reward candidates who think independently and consider alternative readings.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function GreatExpectationsStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#4A235A] to-[#7D3C98] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE English Literature &mdash; Paper 1 (Prose)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Great Expectations &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Part-by-part summaries with key quotations, full character analysis,
            themes, narrative techniques, assessment objectives, and
            Cambridge-specific exam guidance for Dickens&rsquo;s{" "}
            <em>Great Expectations</em>.
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
            "Part Summary",
            "Characters",
            "Themes",
            "Narrative Techniques",
            "Assessment Objectives",
            "Exam Guidance",
            "Sample Response",
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

        {/* ── Part Summary ────────────────────────────────────────── */}
        <section id="part-summary" aria-labelledby="part-heading">
          <h2
            id="part-heading"
            className="text-2xl font-bold text-foreground"
          >
            Part-by-Part Summary
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Dickens published <em>Great Expectations</em> in weekly
            instalments (1860&ndash;61) but structured it in three distinct
            &lsquo;stages&rsquo; of Pip&rsquo;s life, each corresponding to a
            phase of his moral development.
          </p>
          <div className="mt-6 space-y-6">
            {partSummary.map((p) => (
              <Card key={p.part}>
                <CardHeader>
                  <CardTitle className="text-lg">{p.part}</CardTitle>
                  <CardDescription>{p.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Key Quotations
                  </h4>
                  <div className="space-y-4">
                    {p.keyQuotations.map((q, i) => (
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

        {/* ── Characters ──────────────────────────────────────────── */}
        <section id="characters" aria-labelledby="characters-heading">
          <h2
            id="characters-heading"
            className="text-2xl font-bold text-foreground"
          >
            Character Analysis
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Eight key characters with detailed analysis suitable for Cambridge
            IGCSE responses. Focus on how Dickens uses each character to explore
            the novel&rsquo;s central themes.
          </p>
          <div className="mt-6 space-y-5">
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

        {/* ── Narrative Techniques ────────────────────────────────── */}
        <section
          id="narrative-techniques"
          aria-labelledby="techniques-heading"
        >
          <h2
            id="techniques-heading"
            className="text-2xl font-bold text-foreground"
          >
            Dickens&rsquo;s Narrative Techniques
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding how Dickens constructs meaning through form,
            structure, and language is essential for AO2.
          </p>
          <div className="mt-6 space-y-5">
            {narrativeTechniques.map((nt) => (
              <Card key={nt.technique}>
                <CardHeader>
                  <CardTitle>{nt.technique}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {nt.detail}
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
          <h2
            id="ao-heading"
            className="text-2xl font-bold text-foreground"
          >
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE English Literature (0475/0992) assesses four
            objectives. Understanding what the examiner rewards will help you
            structure stronger responses on Great Expectations.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {assessmentObjectives.map((ao) => (
              <Card key={ao.code}>
                <CardHeader>
                  <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-bold text-foreground">
                    {ao.code}
                  </span>
                  <CardTitle className="mt-1">{ao.title}</CardTitle>
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
            CAIE Exam Guidance: Great Expectations
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Great Expectations appears in{" "}
            <strong>Paper 1 (Prose)</strong> for Cambridge IGCSE English
            Literature. You will choose between a{" "}
            <strong>passage-based question (a)</strong> and an{" "}
            <strong>essay question (b)</strong>. Both carry equal marks (25).
          </p>

          <div className="mt-6 space-y-6">
            {/* Passage-based approach */}
            <Card>
              <CardHeader>
                <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (a) Passage-Based
                </span>
                <CardTitle className="mt-1">
                  How to approach the passage question
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Stay anchored in the extract.</strong> Work through
                    it systematically, selecting specific words, phrases, and
                    literary devices for close analysis. The majority of your
                    response should address the given passage.
                  </li>
                  <li>
                    <strong>Zoom in on language.</strong> Identify imagery,
                    symbolism, sentence structure, narrative voice, and tone.
                    For Great Expectations, pay particular attention to
                    Pip&rsquo;s retrospective commentary and the gap between his
                    younger and older selves.
                  </li>
                  <li>
                    <strong>Connect outward briefly.</strong> After analysing the
                    passage, link to the wider novel (one or two paragraphs
                    maximum). Show how the passage connects to key themes,
                    character development, or structural turning points.
                  </li>
                  <li>
                    <strong>Embed quotations.</strong> Weave short phrases from
                    the extract into your sentences:&nbsp;
                    <em>
                      &lsquo;Pip describes Magwitch with &ldquo;abhorrence&rdquo;
                      and &ldquo;repugnance&rdquo;, a tricolon of revulsion that
                      reveals...&rsquo;
                    </em>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Essay approach */}
            <Card>
              <CardHeader>
                <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (b) Essay Question
                </span>
                <CardTitle className="mt-1">
                  How to approach the essay question
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Plan before you write.</strong> Select 3&ndash;4 key
                    moments from across the novel that address the question.
                    Ensure you cover different parts of the text (the marshes,
                    London, the resolution) to show breadth of knowledge.
                  </li>
                  <li>
                    <strong>Focus on &lsquo;how&rsquo;.</strong> Cambridge
                    questions almost always ask how Dickens presents, explores,
                    or makes something significant. Discuss methods (narration,
                    symbolism, contrast, structure) rather than simply describing
                    what happens.
                  </li>
                  <li>
                    <strong>Integrate context.</strong> Do not write a separate
                    context paragraph. Instead, weave contextual knowledge into
                    your analysis:&nbsp;
                    <em>
                      &lsquo;Magwitch&rsquo;s heavier sentence reflects the
                      class bias of Victorian criminal justice, which Dickens
                      consistently attacked...&rsquo;
                    </em>
                  </li>
                  <li>
                    <strong>Develop a personal response.</strong> Evaluate and
                    interpret rather than describe. Consider alternative readings
                    and show awareness of complexity.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Exam technique summary */}
            <div className="rounded-lg border-2 border-[#7D3C98]/30 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground">
                Cambridge IGCSE Exam Technique: Great Expectations
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Time management:</strong> You have approximately 45
                  minutes per question. Spend 5 minutes planning, 35 minutes
                  writing, and 5 minutes checking.
                </li>
                <li>
                  <strong>Quotation length:</strong> Keep quotations short
                  (single words or short phrases are most effective). Great
                  Expectations is a long novel; precise, selective reference
                  demonstrates stronger knowledge than lengthy quotation.
                </li>
                <li>
                  <strong>Structure your response:</strong> Use a clear
                  analytical structure (point, evidence, analysis, context/link).
                  Each paragraph should address a distinct aspect of the
                  question.
                </li>
                <li>
                  <strong>Address all four AOs:</strong> The strongest responses
                  combine textual knowledge (AO1), analysis of methods (AO2),
                  contextual understanding (AO3), and personal interpretation
                  (AO4) in every paragraph.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Sample Response ─────────────────────────────────────── */}
        <section id="sample-response" aria-labelledby="sample-heading">
          <h2
            id="sample-heading"
            className="text-2xl font-bold text-foreground"
          >
            Sample Question &amp; Model Paragraph
          </h2>

          <Card className="mt-6">
            <CardHeader>
              <span className="inline-block w-fit rounded-full bg-[#4A235A]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <CardTitle className="mt-1">
                How does Dickens use the character of Magwitch to challenge
                Victorian ideas about class and criminality?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border bg-primary/5 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-foreground">
                  Model paragraph (addressing all 4 AOs)
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Dickens challenges Victorian assumptions about criminality most
                  powerfully through Pip&rsquo;s evolving perception of Magwitch.
                  When Magwitch reveals himself as Pip&rsquo;s benefactor, Pip
                  describes his reaction with a tricolon of revulsion &mdash;
                  &ldquo;the abhorrence in which I held the man, the dread I had
                  of him, the repugnance with which I shrank from him&rdquo;
                  &mdash; each noun escalating his disgust{" "}
                  <strong>(AO1: precise embedded quotation)</strong>. The
                  retrospective narration is crucial here: the older Pip records
                  these feelings without excusing them, allowing the reader to
                  recognise what the younger Pip cannot &mdash; that his horror
                  is rooted in class prejudice, not moral judgement{" "}
                  <strong>
                    (AO2: analysis of first-person retrospective technique)
                  </strong>
                  . In Victorian England, a convict who had been transported to
                  Australia was considered permanently degraded; returning
                  illegally, as Magwitch does, carried the death penalty. Dickens
                  inverts this hierarchy by making the convict the most generous
                  and loyal character in the novel, while the &lsquo;gentleman&rsquo;
                  Compeyson &mdash; well-spoken and well-dressed &mdash; is
                  exposed as the true criminal{" "}
                  <strong>
                    (AO3: context of transportation and class-biased justice)
                  </strong>
                  . Yet Dickens does not sentimentalise Magwitch: his desire to
                  &lsquo;make a gentleman&rsquo; of Pip is itself a form of
                  class worship, suggesting that even victims of the system
                  internalise its values. This complicates any simple reading of
                  Magwitch as a noble outsider and invites the reader to question
                  whether the class system can ever be truly escaped{" "}
                  <strong>
                    (AO4: personal response with nuanced interpretation)
                  </strong>
                  .
                </p>
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
