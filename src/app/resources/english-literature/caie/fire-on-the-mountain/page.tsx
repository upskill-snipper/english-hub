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
    name: "Nanda Kaul",
    description:
      "The novel\u2019s central consciousness: a retired great-grandmother who has withdrawn to Carignano, a crumbling colonial house on a Kasauli ridge, to live in absolute solitude. Throughout the novel Desai reveals that Nanda\u2019s serene isolation is built on self-deception: her marriage to a Vice-Chancellor was loveless, her life as the \u2018perfect hostess\u2019 was a performance, and her children bring her no joy. She constructs an idealised narrative of her past and resents any intrusion that threatens it. Her reluctant acceptance of Raka and her devastating phone call with Ila Das force her to confront the gap between the life she has invented and the life she actually lived. She is Desai\u2019s study of how withdrawal can become its own kind of violence \u2014 an erasure of truth.",
  },
  {
    name: "Raka",
    description:
      "Nanda Kaul\u2019s great-granddaughter, sent to Carignano to recover from an illness. Raka is feral, silent, and self-sufficient \u2014 a child who genuinely desires the solitude that Nanda only pretends to want. She is drawn to the wild ravine below the house and to images of destruction: the charred hillside, the abandoned pasteur institute, jackals, and fire. Unlike Nanda, whose isolation is a retreat from pain, Raka\u2019s is instinctive and unperformative. She has witnessed domestic violence (her father beating her mother) and carries trauma wordlessly. Her act of setting fire to the hillside in the novel\u2019s final line is both literal and symbolic \u2014 a child\u2019s destructive response to a world built on lies and violence.",
  },
  {
    name: "Ila Das",
    description:
      "Nanda Kaul\u2019s old friend and the novel\u2019s most tragic figure. A social worker campaigning against child marriage in rural Kasauli, Ila Das is impoverished, shrill-voiced, and physically frail. She represents the reality that Nanda tries to deny: a woman who has been failed by society, whose education and good intentions count for nothing against entrenched patriarchal violence. Her visit to Carignano disrupts Nanda\u2019s carefully maintained illusion by reminiscing about their shared past. Her rape and murder by Preet Singh on the path home is the novel\u2019s climactic act of violence, the eruption of the brutality that has simmered beneath the surface throughout. Her death forces Nanda to acknowledge the truth of her own empty life.",
  },
  {
    name: "Ram Lal",
    description:
      "The cook and caretaker at Carignano. Ram Lal is the only other permanent presence in Nanda\u2019s isolated world. He is a functional, largely silent character whose role is domestic and grounding: he cooks meals that go uneaten, tends to the house, and mediates between Nanda\u2019s desire for solitude and the practical necessities of life. He represents the invisible labour that sustains Nanda\u2019s illusion of self-sufficiency. His ordinariness contrasts with the psychological intensity of the three female characters.",
  },
];

const themes = [
  {
    name: "Isolation & Withdrawal",
    detail:
      "The central preoccupation of the novel. Nanda Kaul seeks total solitude at Carignano, wanting \u2018nothing and no one\u2019. But Desai complicates this: Nanda\u2019s withdrawal is not peace but avoidance. She is fleeing a lifetime of emotional servitude as wife, mother, and hostess. Raka, by contrast, is naturally solitary \u2014 her isolation is authentic, not performed. Desai suggests that true withdrawal may be impossible in a world where human connections, however painful, are inescapable. Ila Das\u2019s intrusion and death shatter Nanda\u2019s carefully constructed solitude, proving that retreat from the world is ultimately a form of self-deception.",
  },
  {
    name: "Reality vs Illusion",
    detail:
      "Nanda Kaul has constructed an idealised version of her past: a loving marriage, a fulfilling domestic life, a dignified retirement. Desai systematically dismantles this illusion. The Vice-Chancellor did not love her; he had an affair. Her children are indifferent. Her solitude is not chosen wisdom but emotional exhaustion. Ila Das\u2019s visit forces the truth to the surface by recalling their shared history. The novel argues that self-deception is a survival mechanism, but one that ultimately fails: reality, like fire, will burn through any illusion.",
  },
  {
    name: "Violence Beneath the Surface",
    detail:
      "Violence permeates the novel despite its quiet, contemplative surface. The Pasteur Institute processes rabid animals; jackals howl in the ravine; Raka has witnessed her father\u2019s domestic abuse; the hillside bears scorch marks from previous fires. Ila Das\u2019s rape and murder is the most extreme eruption of this latent violence, but it has been foreshadowed throughout. Desai presents violence not as aberration but as the hidden truth beneath apparently civilised life. The fire that Raka sets in the final line brings the novel\u2019s subterranean violence to the surface in a single, devastating image.",
  },
  {
    name: "The Natural World",
    detail:
      "Kasauli\u2019s landscape is not merely setting but a psychological mirror. The mountain, pines, ravine, and sky reflect the inner states of the characters. The natural world is presented as both beautiful and threatening: apricots ripen, but jackals scavenge; the view is magnificent, but the gorge is treacherous. Desai uses the environment to externalise emotion \u2014 the gathering heat mirrors rising tension, and fire (natural yet destructive) becomes the novel\u2019s central symbol. Nature in this novel is indifferent to human suffering, and its beauty does not redeem the violence it contains.",
  },
  {
    name: "Female Identity & Independence",
    detail:
      "All three female protagonists embody different responses to patriarchal constraint. Nanda Kaul spent her life performing the role of dutiful wife and mother, suppressing her own desires; her retirement is an attempt to reclaim selfhood, but it is hollow because she has no authentic self left to reclaim. Ila Das fights actively for women\u2019s rights (against child marriage) but is destroyed by the very patriarchal violence she opposes. Raka, the child, rejects social roles entirely \u2014 she is pre-socialised, wild, and unconstrained. Desai offers no easy feminist resolution: each woman\u2019s path leads to pain, loss, or destruction.",
  },
  {
    name: "Old Age",
    detail:
      "Nanda Kaul and Ila Das are both elderly women confronting the diminishments of age: loneliness, irrelevance, physical frailty, and the erosion of identity. Desai presents old age not as serene wisdom but as a stripping away of illusion. Nanda discovers that a lifetime of sacrifice has left her with nothing; Ila Das discovers that a lifetime of idealism has left her vulnerable. The novel resists sentimental portrayals of ageing, instead presenting it as a period of reckoning in which the gap between the life one wanted and the life one lived becomes unbearably visible.",
  },
];

const chapterSummary = [
  {
    section: "Part 1: Nanda Kaul at Carignano",
    summary:
      "Nanda Kaul lives alone at Carignano, a former British hill-station house in Kasauli, attended only by Ram Lal. She savours her isolation, wanting no visitors, no letters, no obligations. A phone call informs her that her great-granddaughter Raka is being sent to stay. Nanda resents the intrusion. Desai establishes the house, the mountain, and Nanda\u2019s inner life through dense atmospheric prose, revealing fragments of her past as the wife of a Vice-Chancellor who hosted elaborate parties while feeling nothing.",
    quotes: [
      {
        text: "She wanted nothing. She wanted no one.",
        analysis:
          "The stark repetition and negation establish Nanda\u2019s defining desire. The simple syntax mirrors her wish for an emptied, simplified existence.",
      },
      {
        text: "She had spent a lifetime, exposed, to eyes that cared nothing for her.",
        analysis:
          "Reveals the hollowness of her past social role. The verb \u2018exposed\u2019 suggests vulnerability, not visibility \u2014 she was seen but never truly known.",
      },
    ],
  },
  {
    section: "Part 2: Raka\u2019s Arrival",
    summary:
      "Raka arrives: thin, silent, and unresponsive to Nanda\u2019s tentative attempts at connection. Rather than clinging to her great-grandmother, Raka slips away to explore the ravine, the abandoned Pasteur Institute, and the burned hillside. Nanda is disturbed by Raka\u2019s wildness but also drawn to her. Desai parallels their isolations: Nanda\u2019s is willed and fragile; Raka\u2019s is instinctive and complete. Nanda begins inventing stories about her past (a glamorous life in the Vice-Chancellor\u2019s lodge) to win Raka\u2019s attention, but Raka is indifferent.",
    quotes: [
      {
        text: "Raka, she saw, was one of those people who would be an observer all her life.",
        analysis:
          "Nanda recognises in Raka a detachment more genuine than her own. \u2018Observer\u2019 positions Raka outside human participation, foreshadowing her role as witness to the novel\u2019s violence.",
      },
      {
        text: "The child did not listen to her. She had gone to the edge of the ridge and stood there, looking down at the gorge.",
        analysis:
          "Raka\u2019s physical movement away from Nanda towards the gorge symbolises her orientation towards wildness and danger rather than domestic comfort.",
      },
    ],
  },
  {
    section: "Part 3: Ila Das\u2019s Visit",
    summary:
      "Ila Das, Nanda\u2019s old friend, arrives uninvited for an afternoon visit. She is garrulous, impoverished, and pathetic \u2014 the opposite of Nanda\u2019s composed withdrawal. She reminisces about their youth, inadvertently exposing the lies in Nanda\u2019s self-constructed narrative: the Vice-Chancellor\u2019s infidelity, Nanda\u2019s suppressed misery. Ila Das describes her work campaigning against child marriage and her confrontation with Preet Singh, who has threatened her for trying to prevent his daughter\u2019s marriage. Nanda, uncomfortable, does not offer to walk her home.",
    quotes: [
      {
        text: "It was the droning, the endless, meaningless droning of Ila Das that she could not bear.",
        analysis:
          "Nanda\u2019s irritation reveals her fear of truth rather than of noise. Ila Das\u2019s \u2018droning\u2019 threatens to collapse the illusion Nanda has built around her past.",
      },
      {
        text: "Don\u2019t you remember how he humiliated you?",
        analysis:
          "Ila Das\u2019s directness forces the truth into the open. The verb \u2018humiliated\u2019 punctures Nanda\u2019s carefully maintained dignity and exposes the pain she has buried.",
      },
    ],
  },
  {
    section: "Part 4: The Fire",
    summary:
      "After Ila Das leaves, Nanda receives a phone call informing her that Ila Das has been raped and murdered by Preet Singh on the path home. Nanda is devastated \u2014 partly by grief, partly by guilt for not walking her friend home, and partly by the final collapse of her illusions. While Nanda crumbles inside the house, Raka appears and announces: \u2018Look, Nana, I have set the forest on fire.\u2019 The novel ends with this single line, fusing the literal fire with the metaphorical destruction that has consumed every illusion in the book.",
    quotes: [
      {
        text: "Nanda Kaul, lifeless on the stool, heard and knew it all. There was no illusion she was stripped of now.",
        analysis:
          "The adjective \u2018lifeless\u2019 suggests a death of identity: everything Nanda believed about herself has been destroyed. \u2018Stripped\u2019 echoes the novel\u2019s pattern of exposure and vulnerability.",
      },
      {
        text: "Look, Nana, I have set the forest on fire.",
        analysis:
          "The novel\u2019s devastating final line. Raka\u2019s calm, matter-of-fact tone contrasts with the enormity of the act. The fire literalises the destruction that has been building throughout: of illusion, of safety, of the natural world that was supposed to offer refuge.",
      },
    ],
  },
];

const narrativeTechniques = [
  {
    name: "Atmospheric Prose",
    detail:
      "Desai\u2019s prose is intensely sensory and lyrical, rendering Kasauli\u2019s landscape with painterly precision. Heat, light, wind, birdsong, and silence are evoked in long, flowing sentences that blur the boundary between external setting and internal consciousness. This atmospheric density slows the narrative pace, creating a contemplative, almost suffocating texture that mirrors Nanda Kaul\u2019s claustrophobic inner world. The prose style is itself a form of content: its beauty masks unease, just as the mountain\u2019s beauty masks violence.",
  },
  {
    name: "Symbolism: The Mountain",
    detail:
      "Carignano\u2019s mountain ridge represents Nanda Kaul\u2019s elevated withdrawal from the world below. Height equals detachment: she literally looks down on the plains, the town, and ordinary human life. But the mountain is also precarious \u2014 the gorge yawns beneath, the terrain is harsh, and the house is crumbling. The mountain\u2019s apparent stability is undermined by the ravine, the fire, and the wildness of the natural world, mirroring the fragility of Nanda\u2019s constructed peace.",
  },
  {
    name: "Symbolism: Fire",
    detail:
      "Fire operates on multiple symbolic levels. The burned hillside and the Pasteur Institute\u2019s incinerator foreshadow the conflagration of the final line. Fire represents the destruction of illusion, the eruption of suppressed violence, and the purging of falsehood. Raka is drawn to fire throughout the novel \u2014 she is fascinated by the charred landscape and the incinerator. Her final act of arson is both destructive and, in a dark sense, clarifying: it burns away the pretences that have sustained the adult world.",
  },
  {
    name: "Symbolism: Animals",
    detail:
      "Animals in the novel are consistently associated with threat and wildness. Jackals howl in the ravine; the Pasteur Institute processes rabid dogs; eagles circle overhead. Raka is compared to a wild creature. These animal presences remind the reader that the natural world is not the pastoral refuge Nanda imagines but a space of predation and survival. The animals function as an undertow of violence beneath the novel\u2019s quiet surface.",
  },
  {
    name: "Stream of Consciousness",
    detail:
      "Desai employs a modified stream of consciousness, particularly for Nanda Kaul, allowing the reader access to fragmented memories, sensory impressions, and half-formed thoughts. Past and present blur as Nanda\u2019s mind drifts between Carignano and the Vice-Chancellor\u2019s lodge. This technique reveals the gap between Nanda\u2019s curated self-image and her actual experience, and it creates the novel\u2019s distinctive rhythm: meditative, digressive, and psychologically intimate.",
  },
  {
    name: "Foreshadowing",
    detail:
      "Desai weaves foreshadowing throughout the novel with surgical precision. The burned hillside anticipates Raka\u2019s arson. The Pasteur Institute\u2019s violence (processing rabid animals) anticipates Ila Das\u2019s murder. Preet Singh\u2019s threats are mentioned well before the attack occurs. The gathering heat mirrors rising narrative tension. This technique creates an atmosphere of dread: the reader senses catastrophe approaching even as the surface remains calm. The foreshadowing also reinforces the theme that violence is not sudden but endemic.",
  },
  {
    name: "Parallel Narratives",
    detail:
      "Desai structures the novel around three parallel female experiences. Nanda Kaul\u2019s withdrawal, Raka\u2019s wildness, and Ila Das\u2019s vulnerability are distinct responses to the same patriarchal world. By intercutting between these perspectives, Desai creates a composite portrait of women\u2019s lives in postcolonial India. The parallels also generate ironic contrasts: Nanda\u2019s chosen isolation vs Ila Das\u2019s enforced loneliness; Nanda\u2019s performed detachment vs Raka\u2019s genuine detachment. The convergence of these narratives in the final pages \u2014 Ila Das\u2019s murder, Nanda\u2019s collapse, Raka\u2019s fire \u2014 creates the novel\u2019s devastating climax.",
  },
];

const contextItems = [
  {
    title: "Postcolonial India",
    detail:
      "The novel is set in post-Independence India, but the legacies of British colonialism are everywhere: Carignano is a former colonial house; Kasauli was a British hill station; the Pasteur Institute is a remnant of colonial infrastructure. Desai does not address colonialism directly but embeds it in the landscape and architecture, suggesting that the structures \u2014 physical and social \u2014 that shaped Indian life under the British persist long after their departure. The hill station\u2019s faded grandeur mirrors Nanda Kaul\u2019s own fading identity.",
  },
  {
    title: "The Kasauli Setting",
    detail:
      "Kasauli is a small town in the Himalayan foothills of Himachal Pradesh, historically a retreat for British colonial officers seeking refuge from the plains\u2019 heat. Desai herself spent time in Kasauli, and the novel\u2019s topography \u2014 the ridge, the ravine, the pine forests, the distant plains \u2014 is rendered with autobiographical precision. The setting\u2019s elevation and remoteness make it both a refuge and a trap: characters are physically above the world but psychologically unable to escape it. The mountain\u2019s beauty is real, but so is its harshness.",
  },
  {
    title: "Women\u2019s Lives in India",
    detail:
      "Desai explores the limited options available to women across generations and classes. Nanda Kaul\u2019s life was defined by her roles as wife and mother; she had no independent identity. Ila Das, despite her education, lives in poverty and is ultimately destroyed by the patriarchal violence she tried to combat (child marriage, male aggression). Even Raka, the youngest, has already been shaped by witnessing domestic abuse. Desai\u2019s feminism is not polemical but deeply embedded in characterisation and narrative structure: she shows, rather than argues, how patriarchy constrains and damages women\u2019s lives.",
  },
];

/* ─── Page Component ─────────────────────────────────────────── */

export default function FireOnTheMountainStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Fire on the Mountain &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Anita Desai&rsquo;s haunting novella of isolation, illusion, and
            destruction. Character analysis, themes, chapter summaries with key
            quotations, narrative techniques, context, and Cambridge exam
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
            "Context",
            "Exam Guidance",
            "Sample Question",
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-[#C0392B]/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
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
        <section id="chapter-summary" aria-labelledby="chapter-heading">
          <h2
            id="chapter-heading"
            className="text-2xl font-bold text-foreground"
          >
            Chapter Summary &amp; Key Quotations
          </h2>
          <div className="mt-6 space-y-6">
            {chapterSummary.map((ch) => (
              <Card key={ch.section}>
                <CardHeader>
                  <CardTitle>{ch.section}</CardTitle>
                  <CardDescription>{ch.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {ch.quotes.map((q, i) => (
                      <div
                        key={i}
                        className="rounded-lg border-l-4 border-[#C0392B] bg-primary/5 p-4"
                      >
                        <blockquote className="text-sm font-medium italic text-foreground">
                          &ldquo;{q.text}&rdquo;
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
        <section id="narrative-techniques" aria-labelledby="techniques-heading">
          <h2
            id="techniques-heading"
            className="text-2xl font-bold text-foreground"
          >
            Desai&rsquo;s Narrative Techniques
          </h2>
          <div className="mt-6 space-y-5">
            {narrativeTechniques.map((nt) => (
              <Card key={nt.name}>
                <CardHeader>
                  <CardTitle>{nt.name}</CardTitle>
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

        {/* ── Context ─────────────────────────────────────────────── */}
        <section id="context" aria-labelledby="context-heading">
          <h2
            id="context-heading"
            className="text-2xl font-bold text-foreground"
          >
            Context
          </h2>
          <div className="mt-6 space-y-4">
            {contextItems.map((ctx) => (
              <Card key={ctx.title}>
                <CardHeader>
                  <CardTitle>{ctx.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {ctx.detail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Guidance ───────────────────────────────────────── */}
        <section id="exam-guidance" aria-labelledby="exam-heading">
          <h2
            id="exam-heading"
            className="text-2xl font-bold text-foreground"
          >
            CAIE Exam Guidance
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            <em>Fire on the Mountain</em> appears as a prose text in Cambridge
            IGCSE English Literature. You will choose between a passage-based
            (a) question and a discursive essay (b) question.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  Part (a) &mdash; Passage-Based Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    &bull; You will be given a printed extract and asked how
                    Desai creates a particular effect (e.g. tension, sympathy,
                    atmosphere).
                  </li>
                  <li>
                    &bull; Work through the passage <strong>sequentially</strong>
                    , identifying specific words and phrases.
                  </li>
                  <li>
                    &bull; Analyse <strong>language</strong> (imagery, word
                    choice, sentence structure) and{" "}
                    <strong>narrative method</strong> (point of view, free
                    indirect discourse, pace).
                  </li>
                  <li>
                    &bull; Comment on how the passage connects to the{" "}
                    <strong>wider novel</strong> &mdash; what comes before and
                    after.
                  </li>
                  <li>
                    &bull; Embed short, precise quotations from the extract and
                    analyse them closely.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Part (b) &mdash; Essay Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    &bull; These ask you to discuss a theme, character, or
                    technique across the <strong>whole novel</strong>.
                  </li>
                  <li>
                    &bull; Plan 3&ndash;4 key points, each supported by{" "}
                    <strong>precise quotations</strong> from different parts of
                    the text.
                  </li>
                  <li>
                    &bull; Always discuss Desai&rsquo;s <strong>methods</strong>{" "}
                    (how she writes), not just what happens (plot).
                  </li>
                  <li>
                    &bull; Show awareness of the novel&rsquo;s{" "}
                    <strong>structure</strong>: how the opening and ending
                    relate, how tension builds, how parallel narratives
                    converge.
                  </li>
                  <li>
                    &bull; Where relevant, reference <strong>context</strong>{" "}
                    (postcolonial India, gender, the hill-station setting) to
                    deepen your analysis.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>The Four Assessment Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">
                    Textual Knowledge &mdash; Knowledge &amp; Understanding
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Show detailed knowledge of the text. Use accurate,
                    well-selected quotations and references to support every
                    point.
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">
                    Writer's Methods &mdash; Analysis of Language, Form &amp; Structure
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Analyse how Desai uses language (imagery, diction, syntax),
                    form (novella, stream of consciousness), and structure
                    (foreshadowing, parallel narratives, the climactic ending).
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">
                    Interpretation &mdash; Comparison (if required)
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Compare characters (Nanda vs Raka, Nanda vs Ila Das),
                    contrasting their responses to isolation, truth, and
                    violence.
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">
                    Personal Response &mdash; Context
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Reference postcolonial India, patriarchal social structures,
                    the hill-station as a colonial legacy, and the constraints on
                    women&rsquo;s independence.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Sample Question & Model Paragraph ───────────────────── */}
        <section id="sample-question" aria-labelledby="sample-heading">
          <h2
            id="sample-heading"
            className="text-2xl font-bold text-foreground"
          >
            Sample Question &amp; Model Paragraph
          </h2>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>
                <span className="inline-block rounded-full bg-[#7B2D26]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  Essay Question (b)
                </span>
              </CardTitle>
              <CardDescription className="mt-2 text-sm font-medium text-foreground">
                How does Desai present the theme of isolation in{" "}
                <em>Fire on the Mountain</em>?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-border bg-primary/5 p-5">
                <p className="text-xs font-semibold text-foreground">
                  Model Paragraph (addressing all 4 skills)
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <strong>[Textual Knowledge]</strong> Desai establishes Nanda Kaul&rsquo;s
                  isolation in the novel&rsquo;s opening pages through the stark
                  declaration that &ldquo;she wanted nothing. She wanted no
                  one&rdquo;, a line whose blunt repetition and negation convey
                  not peace but a willed erasure of human connection.{" "}
                  <strong>[Writer's Methods]</strong> The short, declarative syntax mirrors
                  Nanda&rsquo;s desire for a simplified, emptied existence, while
                  the anaphoric repetition of &ldquo;she wanted&rdquo; ironically
                  reveals that her withdrawal is itself a form of intense wanting
                  &mdash; a craving for absence. Desai reinforces this through
                  the novella&rsquo;s structure: Nanda&rsquo;s solitude is
                  systematically disrupted, first by Raka&rsquo;s arrival, then
                  by Ila Das&rsquo;s visit, and finally by the phone call
                  announcing Ila Das&rsquo;s murder. Each intrusion strips away
                  another layer of Nanda&rsquo;s carefully constructed detachment,
                  so that the narrative arc itself enacts the impossibility of
                  true isolation.{" "}
                  <strong>[Interpretation]</strong> Desai draws a pointed contrast between
                  Nanda&rsquo;s performed isolation and Raka&rsquo;s instinctive
                  withdrawal. Where Nanda tells stories about her past to win
                  Raka&rsquo;s attention &mdash; revealing that she still craves
                  an audience &mdash; Raka &ldquo;did not listen&rdquo; and moves
                  instead to &ldquo;the edge of the ridge&rdquo;, drawn to the
                  gorge and the wild. Raka&rsquo;s isolation needs no
                  justification or narrative; it simply is.{" "}
                  <strong>[Personal Response]</strong> Contextually, Nanda&rsquo;s withdrawal
                  must be read against the limited roles available to women in
                  postcolonial India: having spent a lifetime defined entirely by
                  her function as wife, mother, and hostess in the Vice-Chancellor
                  &rsquo;s household, her retirement to Carignano &mdash; a
                  crumbling former colonial hill-station house &mdash; represents
                  an attempt to reclaim an identity that was never truly her own.
                  Desai suggests, however, that this reclamation comes too late:
                  Nanda has no authentic self left to inhabit, only the illusions
                  she has constructed to survive.
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
