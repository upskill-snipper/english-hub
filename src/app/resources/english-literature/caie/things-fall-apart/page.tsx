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
    name: "Okonkwo",
    description:
      "The novel's tragic protagonist, a powerful warrior and wealthy farmer in Umuofia. Okonkwo is driven by a deep fear of failure and weakness, shaped by his father Unoka's laziness and lack of title. This fear manifests as aggression, emotional rigidity, and an obsessive commitment to masculine ideals. He beats his wives, disowns his sensitive son Nwoye, and participates in Ikemefuna's killing despite being warned not to. His inability to adapt to the changing world brought by colonialism leads to his suicide — an act that, ironically, is considered an abomination in Igbo culture, denying him the dignified burial he spent his life pursuing. Achebe uses Okonkwo to explore how rigid adherence to a single definition of masculinity can be self-destructive.",
  },
  {
    name: "Nwoye",
    description:
      "Okonkwo's eldest son, who represents the generational and ideological shift caused by colonialism. Nwoye is sensitive, imaginative, and drawn to his mother's stories rather than his father's tales of war. He is deeply traumatised by Ikemefuna's death, which fractures his relationship with Okonkwo irreparably. Nwoye's conversion to Christianity is both a genuine spiritual awakening and an act of rebellion against his father's oppressive masculinity. Achebe presents Nwoye sympathetically, suggesting that Igbo culture's rigid gender expectations alienated those who did not conform, making them vulnerable to the appeal of the new religion.",
  },
  {
    name: "Ezinma",
    description:
      "Okonkwo's favourite daughter, the only surviving child of his second wife Ekwefi. Ezinma is bold, intelligent, and spirited — Okonkwo often wishes she had been born a boy, revealing the limitations of his worldview. She understands her father better than anyone and has a close, affectionate relationship with her mother. Achebe uses Ezinma to critique the patriarchal structures of Igbo society: her potential is constrained by her gender, and Okonkwo's admiration for her is always qualified by his regret that she is female.",
  },
  {
    name: "Obierika",
    description:
      "Okonkwo's closest friend and the novel's voice of reason. Obierika is a successful man who, unlike Okonkwo, is capable of questioning Igbo customs. He refuses to participate in Ikemefuna's killing, questions why Okonkwo was exiled for an accidental killing, and reflects critically on practices such as the abandonment of twins. Obierika represents a more thoughtful, flexible form of masculinity. His final words — condemning the District Commissioner for driving Okonkwo to suicide — articulate the novel's indictment of colonialism. Achebe uses Obierika to show that critical thinking existed within Igbo culture before the arrival of Europeans.",
  },
  {
    name: "Ikemefuna",
    description:
      "A boy from a neighbouring village given to Umuofia as a peace settlement. He lives with Okonkwo's family for three years and becomes like a son — he calls Okonkwo 'father' and is a positive influence on Nwoye. When the Oracle decrees that Ikemefuna must be killed, Okonkwo participates in his death despite Ogbuefi Ezeudu's warning not to. Ikemefuna's death is a pivotal moment: it exposes the cruelty that can exist within tradition and marks the beginning of Okonkwo's moral decline. His final cry — 'My father, they have killed me!' — haunts both Okonkwo and the reader.",
  },
  {
    name: "Mr Brown",
    description:
      "The first Christian missionary in Umuofia, who adopts a policy of compromise and respect. He builds a school and a hospital, engages in theological dialogue with Akunna, and discourages zealotry. Mr Brown represents a more tolerant form of colonialism, but Achebe is careful not to romanticise him: his tolerance is strategic, aimed at winning converts, and he still fundamentally seeks to replace Igbo culture with Western Christianity. His departure paves the way for the more aggressive Reverend Smith, suggesting that moderate colonialism inevitably enables its more destructive forms.",
  },
  {
    name: "Reverend James Smith",
    description:
      "Mr Brown's successor, who represents the intolerant, uncompromising face of colonial Christianity. Smith sees the world in black and white, condemns Igbo religion as the work of the devil, and encourages fanatical converts like Enoch. His rigid approach provokes the confrontation that leads to the destruction of the church and the subsequent humiliation of the clan's leaders by the District Commissioner. Achebe uses Smith to show how colonial Christianity, stripped of its pretence of benevolence, is an instrument of cultural destruction.",
  },
  {
    name: "The District Commissioner",
    description:
      "The unnamed British colonial administrator who appears in the novel's final chapters. He represents the political and military power behind the missionary enterprise. His response to Okonkwo's suicide is chillingly detached: he considers it might make 'interesting reading' and plans to reduce the story of Umuofia to a paragraph in his book, The Pacification of the Primitive Tribes of the Lower Niger. Achebe uses the District Commissioner to dramatise how colonialism erases African history and humanity. The irony of the title — reducing a complex civilisation to 'primitive tribes' — mirrors the novel's broader argument about the violence of colonial narratives.",
  },
];

const themes = [
  {
    name: "Colonialism & Cultural Clash",
    detail:
      "The arrival of European missionaries and colonial administrators in Part 3 disrupts every aspect of Igbo life. Achebe does not present Igbo culture as perfect — he shows its internal contradictions (the abandonment of twins, the killing of Ikemefuna) — but he insists on its complexity, coherence, and dignity. Colonialism does not simply introduce a new religion; it dismantles existing legal, political, and social structures. The colonial government's court system overrides the authority of the egwugwu, and the missionary school devalues Igbo knowledge. Achebe's central argument is that colonialism's greatest violence is not physical but epistemological: it denies African cultures the status of civilisation.",
  },
  {
    name: "Tradition vs Change",
    detail:
      "The novel explores the tension between preserving cultural traditions and adapting to new realities. Okonkwo represents an extreme resistance to change: he clings to the warrior values of an earlier generation and cannot accept that Umuofia is evolving. Yet Achebe also shows that Igbo society was never static — it had mechanisms for debate, adaptation, and self-correction (the role of elders, the Oracle, communal decision-making). The tragedy is not simply that change arrives, but that colonialism imposes change violently and unilaterally, destroying the community's ability to manage its own evolution.",
  },
  {
    name: "Masculinity & Identity",
    detail:
      "Okonkwo's identity is built on a narrow, aggressive definition of masculinity shaped by his fear of resembling his father Unoka. He equates manliness with physical strength, emotional suppression, and material success. This rigidity damages his relationships — he cannot show affection to Nwoye, he kills Ikemefuna to avoid appearing weak, and he dismisses Ezinma's qualities because she is female. Achebe presents alternative models of masculinity through Obierika (thoughtful, questioning) and even Unoka (artistic, gentle), suggesting that Okonkwo's definition is a distortion rather than a cultural norm. The theme connects to colonialism: the British impose their own rigid categories on Igbo identity, just as Okonkwo imposes his rigid categories on his family.",
  },
  {
    name: "Fate & Free Will",
    detail:
      "Igbo culture is shaped by a belief in chi (personal god or destiny), the Oracle, and the interconnection of the human and spiritual worlds. Okonkwo believes he can overcome his chi through sheer willpower — 'When a man says yes his chi says yes also' — but the novel progressively undermines this conviction. His accidental killing of Ezeudu's son, his exile, and his return to a transformed Umuofia suggest that individual will cannot overcome larger historical forces. Achebe uses the concept of chi to explore the limits of personal agency in the face of both cultural expectations and colonial power.",
  },
  {
    name: "Religion & Belief Systems",
    detail:
      "Achebe presents Igbo religion as a sophisticated system with its own theology, ethics, and cosmology — not the 'primitive superstition' of colonial narratives. The conversation between Akunna and Mr Brown reveals that both belief systems grapple with similar questions about the nature of God. However, Christianity gains converts partly by offering refuge to those marginalised by Igbo customs: the osu (outcasts), mothers of twins, and those like Nwoye who feel alienated. Achebe's point is not that one religion is superior but that colonialism weaponises Christianity, using it to divide communities and justify political control.",
  },
];

const partSummaries = [
  {
    part: "Part 1: Life in Umuofia (Chapters 1\u201313)",
    summary:
      "Establishes the rich, complex world of Igbo society before colonial contact. We learn of Okonkwo's rise from poverty to become one of Umuofia's most respected men, driven by his determination to be nothing like his father Unoka. The community's customs, festivals (the Feast of the New Yam), legal systems (the egwugwu), and religious practices are depicted in vivid detail. Key events include Ikemefuna's arrival and his three-year stay with Okonkwo's family, during which he becomes like a son. The part culminates in two devastating moments: Okonkwo's participation in Ikemefuna's killing (despite Ogbuefi Ezeudu's warning), and Okonkwo's accidental shooting of Ezeudu's son at the elder's funeral, which results in his exile.",
    keyQuotes: [
      {
        quote: "He was afraid of being thought weak.",
        analysis:
          "Achebe identifies the psychological root of Okonkwo's behaviour in a single, devastating sentence. The passive construction ('being thought') reveals that Okonkwo's masculinity is performative — driven by others' perception rather than inner conviction. This fear governs every major decision he makes, including the killing of Ikemefuna.",
      },
      {
        quote: "When the moon is shining the cripple becomes hungry for a walk.",
        analysis:
          "One of many Igbo proverbs Achebe weaves into the narrative, demonstrating the linguistic sophistication of Igbo culture. Proverbs function as communal wisdom, carrying the authority of generations. Achebe's use of them in English challenges the colonial assumption that African languages and thought systems are 'primitive'.",
      },
      {
        quote: "The world has no end, and what is good among one people is an abomination with others.",
        analysis:
          "Spoken by Uchendu, this proverb articulates a philosophy of cultural relativism that directly counters colonial absolutism. It acknowledges that moral systems are culturally specific, anticipating the novel's later critique of missionaries who impose a single moral framework on diverse societies.",
      },
      {
        quote: "He had no patience with unsuccessful men. He had had no patience with his father.",
        analysis:
          "The repetition with variation (past tense shifting to past perfect) compresses Okonkwo's entire psychology into two sentences. Achebe shows how Okonkwo's general intolerance is rooted in a specific personal trauma — his shame about Unoka. The technique is characteristic of Achebe's economical, precise prose.",
      },
      {
        quote: "My father, they have killed me!",
        analysis:
          "Ikemefuna's final cry as he runs towards Okonkwo, calling him 'father', is the novel's most emotionally devastating moment. The dramatic irony — Ikemefuna seeks protection from the man who will strike the killing blow — exposes the moral cost of Okonkwo's fear of appearing weak. The line echoes throughout the novel, haunting Okonkwo and fracturing his relationship with Nwoye.",
      },
    ],
  },
  {
    part: "Part 2: Exile in Mbanta (Chapters 14\u201319)",
    summary:
      "Okonkwo is exiled to his mother's homeland, Mbanta, for seven years. This transitional section explores themes of belonging, maternal values, and the first arrival of Christian missionaries. Okonkwo's uncle Uchendu consoles him with the wisdom of 'Mother is Supreme' — that the motherland offers comfort in times of sorrow. During exile, Okonkwo hears of the missionaries' arrival and the conversion of some Umuofians, including his son Nwoye. The missionaries initially seem harmless, settling on the Evil Forest (which the clan expects will kill them), but their survival undermines Igbo beliefs. By the end of Part 2, the foundations of Igbo social order are beginning to crack.",
    keyQuotes: [
      {
        quote: "Mother is Supreme.",
        analysis:
          "Uchendu's teaching challenges Okonkwo's patriarchal worldview. In Igbo philosophy, the motherland provides refuge and comfort. Achebe uses this concept to suggest that Okonkwo's aggressive rejection of anything 'feminine' is a distortion of Igbo values, not their authentic expression. The phrase also foreshadows the nurturing role that Christianity will claim to offer the dispossessed.",
      },
      {
        quote: "He felt like a drunken giant walking with the limbs of a mosquito.",
        analysis:
          "This simile captures Okonkwo's powerlessness in exile — his ambition and strength remain, but he has no platform on which to exercise them. The image of disproportion (giant/mosquito) conveys both his frustration and his diminished status. Achebe uses Okonkwo's exile to explore what happens when identity is severed from community.",
      },
      {
        quote: "He felt a relief within as the hymn poured into his parched soul.",
        analysis:
          "Describes Nwoye's response to Christianity. The metaphor of the 'parched soul' suggests that Igbo culture, specifically Okonkwo's version of it, has left Nwoye spiritually malnourished. Achebe presents conversion not as simple betrayal but as a response to genuine emotional need — a need created partly by the rigidity of Igbo patriarchy.",
      },
    ],
  },
  {
    part: "Part 3: Colonialism\u2019s Impact (Chapters 20\u201325)",
    summary:
      "Okonkwo returns to a transformed Umuofia. The church, the colonial government, and the trading store have reshaped the community. The clan's authority has been undermined: the District Commissioner's court now settles disputes, and converts no longer fear traditional sanctions. The moderate Mr Brown has been replaced by the zealous Reverend Smith, whose intolerance provokes conflict. When the convert Enoch unmasks an egwugwu (a grave sacrilege), the clan retaliates by burning the church. The District Commissioner lures the clan's leaders into a meeting and imprisons them, demanding a fine. Upon release, Okonkwo kills a colonial messenger at a clan meeting, but when the community does not rally behind him, he hangs himself. The novel ends with the District Commissioner reducing Okonkwo's story to a footnote in his planned book, The Pacification of the Primitive Tribes of the Lower Niger.",
    keyQuotes: [
      {
        quote: "He has put a knife on the things that held us together and we have fallen apart.",
        analysis:
          "Obierika's diagnosis of colonialism's impact, and the source of the novel's title. The metaphor of the knife implies deliberate, surgical violence — colonialism does not simply arrive but actively severs communal bonds. 'The things that held us together' refers to shared customs, beliefs, and governance structures. The first-person plural 'us' and 'we' emphasises communal loss. This single sentence encapsulates the novel's central argument.",
      },
      {
        quote: "The clan was like a lizard that fell from the iroko tree — it did not know what to do next.",
        analysis:
          "A characteristically Igbo simile that conveys the community's paralysis in the face of colonial power. The iroko tree is sacred in Igbo culture, and the lizard's fall from it symbolises the community's dislocation from its spiritual and cultural foundations. Achebe's use of Igbo imagery to describe colonial trauma keeps the narrative rooted in the culture it depicts.",
      },
      {
        quote: "The Commissioner went away, taking three or four of the soldiers with him. In the many years in which he had toiled to bring civilisation to different parts of Africa he had learnt a number of things.",
        analysis:
          "Achebe's narration becomes coldly ironic here. The word 'civilisation' is laden with sarcasm — the Commissioner has just driven a man to suicide and shown no understanding of the culture he has destroyed. 'Toiled' implies self-congratulatory effort, oblivious to the devastation he has caused. The Commissioner's detachment is the final indictment of colonialism's moral blindness.",
      },
      {
        quote: "The story of this man who had killed a messenger and hanged himself would make interesting reading. One could almost write a whole chapter on him. Perhaps not a whole chapter but a reasonable paragraph.",
        analysis:
          "The novel's devastating final irony. A complex, dignified life is reduced from a chapter to a paragraph in a colonial administrator's book. Achebe inverts this erasure: Things Fall Apart is the full story that the Commissioner would never tell. The diminishing scale (chapter to paragraph) dramatises how colonial narratives dehumanise and diminish African lives. The very existence of Achebe's novel is a rebuttal.",
      },
    ],
  },
];

const narrativeTechniques = [
  {
    name: "Third-Person Narration",
    detail:
      "Achebe uses a third-person omniscient narrator who moves between Okonkwo's perspective and a broader communal viewpoint. This dual perspective allows the reader to understand Okonkwo's internal fears while also seeing the wider cultural context he inhabits. The narrator's tone is measured and unsentimental, lending the prose an authority that mirrors the oral tradition of Igbo storytelling. Crucially, the narrator never adopts a European perspective — the story is told from within the culture, forcing the reader to engage with Igbo values on their own terms.",
  },
  {
    name: "Igbo Proverbs & Language",
    detail:
      "Proverbs are central to Achebe's narrative style. As the narrator states, 'Among the Igbo, the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten.' By embedding Igbo proverbs, folktales, and vocabulary (chi, egwugwu, obi, osu) into an English-language novel, Achebe creates a distinctively African literary voice. This technique serves a political purpose: it demonstrates the intellectual richness of Igbo culture and challenges the colonial claim that African languages and thought are unsophisticated. The proverbs also function structurally, conveying communal wisdom that often foreshadows or comments on the action.",
  },
  {
    name: "Oral Tradition Style",
    detail:
      "The novel's structure and rhythm draw on the conventions of oral storytelling. Folk tales are embedded within the narrative (such as the story of the tortoise and the birds told by Ekwefi), communal gatherings are described in ritualistic detail, and the narrative pace mirrors the cyclical rhythms of agricultural life. Achebe reproduces the call-and-response patterns of Igbo oratory and uses repetition for emphasis, as an oral storyteller would. This technique grounds the novel in the culture it represents, making form inseparable from content.",
  },
  {
    name: "Irony of the Title",
    detail:
      "The title comes from W.B. Yeats's poem 'The Second Coming' (1919): 'Things fall apart; the centre cannot hold; / Mere anarchy is loosed upon the world.' Yeats wrote about the collapse of European civilisation after the First World War. Achebe repurposes the phrase to describe the collapse of Igbo civilisation under colonialism, creating a powerful irony: the Europeans who 'civilised' Africa were themselves experiencing cultural disintegration. The allusion also places African literature in dialogue with the Western canon, asserting its right to engage with and reinterpret European texts on equal terms.",
  },
  {
    name: "Structural Irony & the Final Chapter",
    detail:
      "The novel's most devastating narrative technique is its shift in perspective in the final paragraphs. After spending the entire novel inside Igbo consciousness, Achebe abruptly switches to the District Commissioner's point of view. The reader experiences the shock of seeing Okonkwo — whom they have come to know intimately — reduced to 'interesting reading' and a 'reasonable paragraph'. This structural irony dramatises the violence of colonial representation: the Commissioner's book will erase everything the novel has painstakingly constructed. Achebe makes the reader complicit in recognising this erasure, turning the act of reading itself into a political statement.",
  },
];

const assessmentObjectives = [
  {
    code: "Textual Knowledge",
    description: "Show detailed knowledge and understanding of the text",
    guidance:
      "Demonstrate thorough knowledge of the novel's plot, characters, and cultural context. Refer to specific chapters and events. Quote accurately and select relevant details to support your argument rather than retelling the story. Show that you understand the significance of events within Igbo culture (e.g. why Okonkwo's exile is for a 'female' crime, why the unmasking of the egwugwu is a sacrilege).",
  },
  {
    code: "Writer's Methods",
    description:
      "Analyse the language, form, and structure used by a writer to create meanings and effects",
    guidance:
      "This is where the highest marks are won. Analyse Achebe's specific word choices, his use of Igbo proverbs, the structural significance of the three-part division, and the devastating shift in narrative perspective in the final chapter. Discuss how the oral tradition style creates meaning and how the ironic title frames the reader's interpretation. Always explain the effect on the reader.",
  },
  {
    code: "Interpretation",
    description:
      "Demonstrate understanding of the relationships between texts and the contexts in which they were written and received",
    guidance:
      "Discuss the historical context of British colonialism in Nigeria (late 19th/early 20th century), the cultural context of Igbo society, and Achebe's purpose in writing the novel as a response to colonial narratives such as Joseph Conrad's Heart of Darkness. Show how Achebe's postcolonial perspective shapes the novel's meaning. Integrate context into your analysis rather than bolting it on as a separate paragraph.",
  },
  {
    code: "Personal Response",
    description:
      "Communicate a clear, relevant response using appropriate terminology",
    guidance:
      "Write clearly and analytically. Use literary terminology accurately (narrative perspective, irony, simile, metaphor, foreshadowing, structural juxtaposition, postcolonial). Structure your response with a clear argument. Refer to Achebe by name to demonstrate awareness of authorial intent.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function ThingsFallApartStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Things Fall Apart &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Characters, themes, part-by-part summary with key quotations,
            Achebe&rsquo;s narrative techniques, and Cambridge-specific exam
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
            "Part-by-Part Summary",
            "Characters",
            "Themes",
            "Narrative Techniques",
            "What Markers Look For",
            "Exam Guidance",
            "Sample Response",
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-amber-800/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Part-by-Part Summary ──────────────────────────────── */}
        <section id="part-by-part-summary" aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="text-2xl font-bold text-foreground"
          >
            Part-by-Part Summary
          </h2>
          <div className="mt-6 space-y-6">
            {partSummaries.map((part) => (
              <Card key={part.part}>
                <CardHeader>
                  <CardTitle className="text-lg">{part.part}</CardTitle>
                  <CardDescription>{part.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-3 text-sm font-semibold text-foreground">
                    Key Quotations
                  </h4>
                  <div className="space-y-4">
                    {part.keyQuotes.map((q, i) => (
                      <div
                        key={i}
                        className="rounded-lg border-l-4 border-amber-800 bg-muted/30 p-4"
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
          <div className="mt-6 space-y-6">
            {characters.map((c) => (
              <Card key={c.name}>
                <CardHeader>
                  <CardTitle>{c.name}</CardTitle>
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
          <div className="mt-6 space-y-5">
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

        {/* ── Narrative Techniques ───────────────────────────────── */}
        <section
          id="narrative-techniques"
          aria-labelledby="techniques-heading"
        >
          <h2
            id="techniques-heading"
            className="text-2xl font-bold text-foreground"
          >
            Achebe&rsquo;s Narrative Techniques
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Achebe&rsquo;s techniques are essential for Writer's Methods (analysis of
            language, form, and structure). Markers reward responses that
            discuss <em>how</em> Achebe creates meaning, not just{" "}
            <em>what</em> happens.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {narrativeTechniques.map((nt) => (
              <Card key={nt.name}>
                <CardHeader>
                  <CardTitle className="text-base">{nt.name}</CardTitle>
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
          id="what-markers-look-for"
          aria-labelledby="ao-heading"
        >
          <h2
            id="ao-heading"
            className="text-2xl font-bold text-foreground"
          >
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding the assessment objectives helps you target your
            revision and structure your exam answers for maximum marks.
          </p>
          <div className="mt-6 space-y-4">
            {assessmentObjectives.map((ao) => (
              <Card key={ao.code}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-amber-900 px-2.5 py-0.5 text-xs font-bold text-white">
                      {ao.code}
                    </span>
                    <CardTitle className="text-base">
                      {ao.description}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {ao.guidance}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Guidance ──────────────────────────────────────── */}
        <section id="exam-guidance" aria-labelledby="exam-heading">
          <h2
            id="exam-heading"
            className="text-2xl font-bold text-foreground"
          >
            CAIE Exam Guidance
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE Things Fall Apart questions appear in Paper 2
            (Prose). You will choose between a passage-based (a) question and
            an essay (b) question. Below are examples of both types with
            guidance.
          </p>

          <div className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <span className="inline-block rounded-full bg-amber-900/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (a) Passage-Based Question
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">
                  Re-read the passage in Chapter 24 from &ldquo;Okonkwo stood
                  looking at the dead man&rdquo; to the end of the chapter. How
                  does Achebe make this such a powerful and significant moment
                  in the novel?
                </p>
                <div className="mt-3 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">
                    How to approach:
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Work through the passage closely, identifying key
                      language choices and their effects
                    </li>
                    <li>
                      &bull; Analyse the shift from Okonkwo&rsquo;s decisive
                      action to the clan&rsquo;s paralysis
                    </li>
                    <li>
                      &bull; Discuss how Achebe uses the moment to reveal
                      Okonkwo&rsquo;s isolation from his community
                    </li>
                    <li>
                      &bull; Consider structural significance: this is the
                      climactic action that leads to Okonkwo&rsquo;s suicide
                    </li>
                    <li>
                      &bull; Link to the theme of individual will vs communal
                      decision-making
                    </li>
                    <li>
                      &bull; Use terminology: dramatic irony, narrative
                      perspective, foreshadowing, tragic climax
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <span className="inline-block rounded-full bg-amber-900/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (b) Essay Question
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">
                  How does Achebe present the effects of colonialism on Igbo
                  society in Things Fall Apart?
                </p>
                <div className="mt-3 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">
                    How to approach:
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Plan 3&ndash;4 key points with supporting
                      quotations for each
                    </li>
                    <li>
                      &bull; Contrast Parts 1&ndash;2 (Igbo society intact)
                      with Part 3 (society disintegrating)
                    </li>
                    <li>
                      &bull; Track the escalation: Mr Brown&rsquo;s compromise
                      &rarr; Reverend Smith&rsquo;s intolerance &rarr; the
                      District Commissioner&rsquo;s force
                    </li>
                    <li>
                      &bull; Discuss Achebe&rsquo;s methods: structural irony
                      of the final chapter, Igbo proverbs contrasted with
                      colonial language, the three-part structure
                    </li>
                    <li>
                      &bull; Reference context: Achebe writing against colonial
                      narratives (Conrad, the Commissioner&rsquo;s book)
                    </li>
                    <li>
                      &bull; Show awareness of how colonialism affects
                      individuals (Okonkwo, Nwoye) and the community as a whole
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <span className="inline-block rounded-full bg-amber-900/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (b) Essay Question
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">
                  How does Achebe use the character of Okonkwo to explore ideas
                  about masculinity and identity?
                </p>
                <div className="mt-3 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">
                    How to approach:
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Establish Okonkwo&rsquo;s fear of his father as
                      the psychological foundation
                    </li>
                    <li>
                      &bull; Track how this fear drives his actions: the killing
                      of Ikemefuna, his treatment of Nwoye, his attitude to
                      Ezinma
                    </li>
                    <li>
                      &bull; Contrast Okonkwo&rsquo;s rigid masculinity with
                      Obierika&rsquo;s flexibility
                    </li>
                    <li>
                      &bull; Discuss the irony of his suicide: the ultimate
                      &lsquo;unmanly&rsquo; act by his own standards
                    </li>
                    <li>
                      &bull; Link masculinity to colonialism: both impose rigid
                      categories that deny complexity
                    </li>
                    <li>
                      &bull; Discuss Achebe&rsquo;s purpose: not to condemn
                      Okonkwo but to show how cultural pressures distort
                      identity
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* ── Exam Technique Tips ────────────────────────────── */}
            <Card className="border-2 border-amber-800/30 bg-primary/5">
              <CardContent className="pt-5">
                <h3 className="text-lg font-semibold text-foreground">
                  Cambridge Exam Technique: Key Tips
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Passage-based (a) questions:
                    </strong>{" "}
                    Work through the extract methodically. Use short, embedded
                    quotations from the passage. Analyse language, form, and
                    structure (Writer's Methods). Then connect outward to the rest of the
                    novel and relevant context.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Essay (b) questions:
                    </strong>{" "}
                    Plan before you write. Select 3&ndash;4 key moments from
                    across the novel with quotations. Focus on Achebe&rsquo;s
                    methods and purpose, not just what happens. Integrate
                    context rather than adding it as a separate paragraph.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Always use the author&rsquo;s name:
                    </strong>{" "}
                    Write &ldquo;Achebe presents...&rdquo; or &ldquo;Achebe
                    uses...&rdquo; rather than &ldquo;the novel
                    shows...&rdquo;. This demonstrates awareness of authorial
                    intent and helps you discuss methods (Writer's Methods).
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Igbo cultural context:
                    </strong>{" "}
                    Show understanding of Igbo customs, beliefs, and social
                    structures. Explain terms like chi, egwugwu, and osu when
                    you use them. This demonstrates Textual Knowledge and Interpretation
                    contextual understanding.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Postcolonial context:
                    </strong>{" "}
                    Achebe wrote this novel in 1958, two years before Nigerian
                    independence, as a deliberate response to European
                    representations of Africa. This context is essential for
                    every answer.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Quote precisely:
                    </strong>{" "}
                    Short, embedded quotations (&lsquo;a knife on the things
                    that held us together&rsquo;) are more effective than long
                    block quotes. Aim for at least one quotation per paragraph.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Sample Response ────────────────────────────────────── */}
        <section id="sample-response" aria-labelledby="sample-heading">
          <h2
            id="sample-heading"
            className="text-2xl font-bold text-foreground"
          >
            Sample Question &amp; Model Paragraph
          </h2>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">
                Question: How does Achebe present the impact of colonialism on
                Igbo culture in the final chapters of Things Fall Apart?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded bg-primary/5 p-4">
                <p className="mb-2 text-xs font-semibold text-foreground">
                  Model Paragraph (addressing all 4 skills):
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Achebe presents colonialism&rsquo;s most devastating impact
                  not through violence but through narrative erasure.{" "}
                  <strong className="text-foreground">[Textual Knowledge]</strong> In the
                  novel&rsquo;s final paragraphs, the District Commissioner
                  reflects that Okonkwo&rsquo;s story &lsquo;would make
                  interesting reading&rsquo; and might merit &lsquo;not a whole
                  chapter but a reasonable paragraph&rsquo; in his planned book,{" "}
                  <em>
                    The Pacification of the Primitive Tribes of the Lower Niger
                  </em>
                  .{" "}
                  <strong className="text-foreground">[Writer's Methods]</strong> Achebe
                  uses a sudden, jarring shift in narrative perspective from
                  the intimate, Igbo-centred voice that has governed the entire
                  novel to the cold, detached viewpoint of the colonial
                  administrator. The diminishing scale &mdash; from
                  &lsquo;chapter&rsquo; to &lsquo;paragraph&rsquo; &mdash;
                  structurally enacts the process of cultural reduction, while
                  the Commissioner&rsquo;s title, with its dehumanising word
                  &lsquo;Primitive&rsquo;, reveals the ideology that underpins
                  colonial power.{" "}
                  <strong className="text-foreground">[Interpretation]</strong> Writing
                  in 1958, two years before Nigerian independence, Achebe was
                  responding to a tradition of European literature &mdash;
                  including Joseph Conrad&rsquo;s{" "}
                  <em>Heart of Darkness</em> &mdash; that represented Africa
                  as a place without history or civilisation. By spending the
                  entire novel building the richness and complexity of Igbo
                  culture, only to show it dismissed in a single sentence,
                  Achebe forces the reader to recognise the violence inherent
                  in colonial storytelling.{" "}
                  <strong className="text-foreground">[Personal Response]</strong> The
                  structural irony of this ending &mdash; the Commissioner
                  plans to write about Africa, but Achebe has already written
                  the book that exposes the inadequacy of such accounts &mdash;
                  transforms the act of reading{" "}
                  <em>Things Fall Apart</em> itself into an act of resistance
                  against colonial erasure.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Back link ─────────────────────────────────────────── */}
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
