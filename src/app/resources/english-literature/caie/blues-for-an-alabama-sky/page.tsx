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
    name: "Angel Allen",
    description:
      "A Harlem nightclub singer whose career is collapsing as the Depression closes the venues that sustained her. Angel is vivacious, passionate, and deeply vulnerable. Her reliance on men for financial stability reflects the limited options available to Black women in the 1930s. Her relationship with Guy is the emotional heart of the play, but her impulsive involvement with Leland reveals how desperation can override good judgement. Cleage uses Angel to dramatise the tension between dreams and survival: she longs for artistic fulfilment but is repeatedly forced into pragmatic compromises. Her trajectory raises uncomfortable questions about what happens to talented women when economic and social structures fail them.",
  },
  {
    name: "Guy Jacobs",
    description:
      "Angel's neighbour and closest friend, a gay costume designer who dreams of working for Josephine Baker in Paris. Guy is witty, loyal, and culturally sophisticated, representing the creative vitality of the Harlem Renaissance at its peak. His sexuality places him in double jeopardy: marginalised by race in wider America and by sexuality within his own community. His plan to escape to Paris is both a professional ambition and an act of self-preservation. Cleage uses Guy to explore the intersection of race and sexuality, showing how the Harlem Renaissance created a relatively tolerant space for LGBTQ+ artists that was already closing by the early 1930s. His friendship with Angel demonstrates unconditional love that transcends romantic and sexual boundaries.",
  },
  {
    name: "Delia Patterson",
    description:
      "A social worker and activist who volunteers at the birth control clinic inspired by Margaret Sanger's movement. Delia is principled, compassionate, and quietly determined. She represents the play's political conscience, connecting the characters' personal struggles to broader social justice movements. Her work at the clinic is controversial within the Black community, where some view birth control as a form of racial genocide, creating a tension between feminist self-determination and collective racial survival. Cleage uses Delia to explore how progressive causes can be complicated by race, showing that the fight for women's reproductive rights looked very different for Black women than for white women.",
  },
  {
    name: "Sam Thomas",
    description:
      "A doctor and Delia's romantic interest, a pragmatic and caring man who supports Delia's clinic work despite community opposition. Sam provides medical care to a community with limited access to healthcare, grounding the play in the material realities of Black life during the Depression. His steady, practical nature contrasts with Guy's flamboyance and Leland's instability. Cleage uses Sam to represent the possibility of building something sustainable amid social collapse: unlike characters chasing grand dreams or fleeing difficult realities, Sam is committed to serving his community where it is.",
  },
  {
    name: "Leland Cunningham",
    description:
      "A recent arrival from Alabama, deeply religious and socially conservative. Leland is initially presented as a gentle, generous suitor for Angel, but his traditional values and possessiveness become increasingly dangerous. His murder of Guy at the play's climax reveals the lethal consequences of rigid moral codes when they encounter lives that do not conform. Cleage uses Leland to dramatise the clash between Southern rural conservatism and Harlem's urban liberalism. He is not a simple villain but a product of a culture that has given him no framework for understanding or tolerating difference. His violence is both personal and political: it destroys the individual who most fully embodies Harlem's progressive spirit.",
  },
];

const themes = [
  {
    name: "Dreams & Aspiration",
    detail:
      "Every major character harbours a dream: Angel wants to sing, Guy wants to design for Josephine Baker, Delia wants to open a birth control clinic, Leland wants a traditional family. Cleage examines how the Depression and systemic racism crush these ambitions. The play asks whether dreams are sustaining illusions or dangerous distractions, and what happens to people when their dreams are deferred. The title itself evokes the blues, a musical form born from suffering, suggesting that beauty and aspiration persist even when circumstances are devastating.",
  },
  {
    name: "The Harlem Renaissance",
    detail:
      "Set in 1930, the play captures the Harlem Renaissance at the moment of its decline. The cultural flowering that produced jazz, literature, and a new Black identity is being extinguished by economic collapse. Cleage uses this transitional moment to explore what is lost when a community's artistic and intellectual energy is no longer economically viable. The Renaissance is both setting and character: its values of creativity, self-expression, and tolerance shape the protagonists, while its disintegration drives the plot.",
  },
  {
    name: "Race & Identity",
    detail:
      "The characters navigate a world defined by racial segregation, yet within Harlem they have created a space of relative autonomy and cultural pride. Cleage explores how race shapes every aspect of their lives: economic opportunity, artistic expression, access to healthcare, and sexual freedom. The play also examines intra-racial tensions, particularly between the progressive urban culture of Harlem and the conservative rural values Leland brings from Alabama. Race is not monolithic; it intersects with class, gender, geography, and sexuality to produce very different lived experiences.",
  },
  {
    name: "Gender & Sexuality",
    detail:
      "Cleage foregrounds the experiences of Black women and a gay Black man, voices historically marginalised even within African American narratives. Angel's dependence on men, Delia's fight for reproductive rights, and Guy's need to conceal his sexuality in certain contexts all reveal how gender and sexuality compound racial oppression. The play challenges the idea that liberation movements are unified: Delia's feminism, Guy's queerness, and Angel's survival strategies sometimes align and sometimes conflict with each other and with the broader struggle for racial justice.",
  },
  {
    name: "Community & Belonging",
    detail:
      "The apartment building shared by Angel, Guy, Delia, and Sam functions as a microcosm of community. Neighbours share food, offer shelter, and provide emotional support. Yet community can also be exclusionary: Leland's conservative values and the broader community's ambivalence towards Guy's sexuality reveal the limits of belonging. Cleage suggests that true community requires active tolerance and mutual care, not merely shared geography or racial identity.",
  },
  {
    name: "Hope vs Reality",
    detail:
      "The play is structured around the collision between what characters hope for and what circumstances allow. Guy's Paris dream, Angel's singing career, Delia's clinic, and Leland's vision of domestic stability are all tested against economic depression, social prejudice, and personal limitations. Cleage refuses simple optimism: Guy's murder and Angel's compromises are devastating, yet Delia's quiet persistence and the community's resilience suggest that hope, though bruised, is not entirely extinguished. The blues tradition itself embodies this tension: it transforms suffering into art without denying the suffering.",
  },
];

const actSummary = [
  {
    act: "Act 1",
    summary:
      "Harlem, summer 1930. Angel Allen has been dropped by her latest lover and benefactor, and her singing career is in freefall as Depression-era club closures accelerate. Her neighbour and best friend Guy Jacobs, a gay costume designer, takes her in. Guy is focused on his dream of joining Josephine Baker's costume team in Paris. Delia Patterson, a social worker, is campaigning to open a family planning clinic in Harlem, inspired by Margaret Sanger's birth control movement. Delia's romantic interest, Dr Sam Thomas, supports the clinic despite community resistance. The act establishes the apartment building as a tight-knit community and introduces the key tensions: economic hardship, artistic ambition, and the encroaching end of the Harlem Renaissance.",
    keyQuotations: [
      {
        quote: "Harlem is the place where everybody comes to be free.",
        analysis:
          "Establishes Harlem as a symbolic space of liberation, particularly for those marginalised elsewhere. The word 'everybody' is inclusive, embracing racial, sexual, and artistic outsiders. This line sets up the play's central irony: the Depression is about to destroy the very freedoms Harlem promises.",
      },
      {
        quote: "I'm not going to sit around here waiting to starve to death.",
        speaker: "Angel",
        analysis:
          "Reveals Angel's desperation and agency simultaneously. The starkness of 'starve to death' grounds the play in material reality, countering any romanticised view of Harlem life. Cleage uses Angel's directness to show that survival, not artistry, has become the primary concern.",
      },
    ],
  },
  {
    act: "Act 2",
    summary:
      "Leland Cunningham arrives from Alabama, a churchgoing man whose wife has recently died. He is immediately attracted to Angel and begins courting her with old-fashioned Southern courtesy. Angel is initially reluctant but, pressured by economic necessity, begins to consider Leland as a potential provider. Meanwhile, Guy makes progress towards his Paris opportunity, and Delia faces opposition to the clinic from community members who see birth control as racial genocide. The act develops the central dramatic tension: Leland's conservative values are fundamentally incompatible with the liberal, tolerant world the other characters inhabit. His generosity towards Angel is genuine but comes with expectations of conformity that she cannot meet.",
    keyQuotations: [
      {
        quote: "A woman needs a man who can take care of her.",
        speaker: "Leland",
        analysis:
          "Encapsulates Leland's traditional gender ideology. The modal verb 'needs' presents male provision as necessity rather than choice, denying women's autonomy. Cleage positions this line to expose the transactional nature of the relationship Leland is offering: protection in exchange for submission.",
      },
      {
        quote: "You can't save people who don't want to be saved.",
        analysis:
          "Speaks to multiple relationships in the play: Angel's resistance to well-meaning advice, the community's mixed response to the birth control clinic, and the broader impossibility of imposing liberation from outside. Cleage uses this line to complicate the notion of progressive activism, suggesting that change must come from within.",
      },
    ],
  },
  {
    act: "Act 3",
    summary:
      "Tensions escalate. Angel and Leland's relationship deepens, but Leland grows increasingly possessive and uncomfortable with the lifestyle of Angel's friends, particularly Guy's homosexuality. Delia's clinic faces a setback when community opposition intensifies. Guy's Paris opportunity becomes more concrete, raising the prospect that Angel will lose her closest ally. The act builds towards crisis as Leland's rigid worldview collides with the values of tolerance and self-expression that define the other characters' lives. Cleage tightens the dramatic tension by confining key confrontations to the apartment, making the domestic space feel increasingly claustrophobic.",
    keyQuotations: [
      {
        quote: "I didn't come all the way to Harlem to live like this.",
        speaker: "Leland",
        analysis:
          "Reveals Leland's growing disillusionment and sense of displacement. 'Like this' carries moral judgement: he expected Harlem to offer a fresh start on his own terms, not challenge his values. Cleage uses the line to dramatise the clash between Southern conservatism and Harlem's progressive culture, showing that proximity does not guarantee understanding.",
      },
    ],
  },
  {
    act: "Act 4",
    summary:
      "The play reaches its devastating climax. Leland discovers the full reality of Guy's sexuality and, unable to reconcile this with his moral framework, murders him. Guy's death destroys Angel's most important relationship and extinguishes his Paris dream. Angel is left shattered. Delia, despite everything, recommits to her clinic work, embodying quiet persistence in the face of loss. The final act forces the audience to confront the lethal consequences of intolerance and the fragility of the community the characters had built. Cleage does not offer easy resolution: the ending is bleak, laced with grief, but Delia's continued activism and the bonds between the surviving characters suggest that the spirit of the Harlem Renaissance, though damaged, is not entirely dead.",
    keyQuotations: [
      {
        quote: "He was the best friend I ever had in my life.",
        speaker: "Angel",
        analysis:
          "Angel's eulogy for Guy is devastating in its simplicity. 'Best friend' understates the depth of their bond, which Cleage has shown to be more sustaining than any romantic relationship in the play. The past tense 'had' registers the irreversibility of loss. This line invites the audience to measure what has been destroyed: not just a life, but a model of love that transcended conventional boundaries.",
      },
      {
        quote: "We have to keep going. That's all we can do.",
        speaker: "Delia",
        analysis:
          "The play's final note of qualified hope. 'Have to' suggests obligation rather than desire; 'that's all' acknowledges the limits of agency. Cleage refuses false comfort but insists on the moral necessity of persistence. Delia's words echo the blues tradition: acknowledging suffering without surrendering to it.",
      },
    ],
  },
];

const dramaticTechniques = [
  {
    name: "Setting as Character: 1930s Harlem",
    detail:
      "Harlem is not merely a backdrop but a living force that shapes every character's possibilities and constraints. Cleage evokes a specific historical moment: the Harlem Renaissance is ending, the Depression is deepening, and the cultural space that allowed artistic and sexual freedom is contracting. The apartment building functions as a microcosm of the community, its shared walls making private lives semi-public. The choice to set the play in 1930 rather than the Renaissance's peak (mid-1920s) is deliberate: Cleage is interested in what happens when the party ends, when a community's golden age gives way to economic collapse and social retrenchment.",
  },
  {
    name: "Dialogue and Vernacular",
    detail:
      "Cleage writes dialogue that is naturalistic, rhythmically varied, and class-conscious. Characters speak in distinctive voices: Guy's wit and cultural references contrast with Leland's earnest, scripture-inflected speech; Angel's directness contrasts with Delia's measured, professional tone. The dialogue carries enormous subtext, particularly in conversations between Angel and Leland, where surface politeness masks fundamental incompatibility. Cleage uses silence and interruption as dramatic tools: what characters do not say is often as revealing as what they do.",
  },
  {
    name: "Tension Building and Dramatic Irony",
    detail:
      "Cleage constructs tension through the audience's growing awareness that Leland's values will inevitably collide with Guy's identity. The audience can see the danger before the characters can, creating sustained dramatic irony. Each act tightens the pressure: Leland's courtship of Angel brings him deeper into a world he cannot accept, while Guy's increasing visibility makes the confrontation unavoidable. Cleage uses domestic routines, shared meals, and casual conversations to build tension incrementally, so that the climactic violence erupts from a seemingly ordinary context.",
  },
  {
    name: "Historical Context as Dramatic Device",
    detail:
      "The play weaves real historical events and figures into its fictional narrative. References to Josephine Baker, Margaret Sanger, the Harlem Renaissance, and the Great Depression are not decorative but structural: they provide the economic, cultural, and political forces that drive the plot. Cleage uses historical context to give the characters' personal struggles collective significance. Guy's dream of Paris is inseparable from Baker's status as a Black artist who found freedom abroad; Delia's clinic work is inseparable from the fraught politics of birth control in the Black community.",
  },
  {
    name: "Symbolism and Motif",
    detail:
      "The blues, referenced in the title, functions as a controlling metaphor: the characters are living the blues, transforming pain into art, endurance, and community. Paris symbolises escape and artistic freedom, an idealised alternative to American racism. The apartment building symbolises both the warmth of community and its vulnerability: its walls offer shelter but cannot keep out the forces of economic collapse and violent intolerance. Costumes, which Guy designs, symbolise transformation and self-creation, central preoccupations of the Harlem Renaissance.",
  },
  {
    name: "Structure: Four-Act Escalation",
    detail:
      "Cleage uses a four-act structure that mirrors the trajectory of the Harlem Renaissance itself: hope and creativity give way to crisis and loss. Each act escalates the stakes: Act 1 establishes the community and its dreams; Act 2 introduces the threat; Act 3 intensifies the conflict; Act 4 delivers the catastrophe. This escalating structure creates a sense of inevitability that is central to the play's tragic power. The audience watches the community's destruction unfold with the painful awareness that the historical forces driving it were real.",
  },
];

const contextSections = [
  {
    title: "The Great Depression",
    content:
      "The Wall Street Crash of October 1929 triggered the worst economic depression in modern history. By 1930, when the play is set, unemployment was soaring and the entertainment industry that had sustained Harlem's nightlife was collapsing. For Black Americans, already disadvantaged by systemic racism, the Depression was catastrophic: they were the last hired and first fired. Angel's inability to find singing work is not a personal failure but a structural one. Cleage sets the play at this precise moment to show how economic collapse disproportionately affects marginalised communities and destroys the cultural institutions they have built.",
  },
  {
    title: "The Harlem Renaissance (c.1918-1935)",
    content:
      "The Harlem Renaissance was a cultural, intellectual, and artistic movement centred in the Harlem neighbourhood of Manhattan. It produced transformative works in literature (Langston Hughes, Zora Neale Hurston), music (Duke Ellington, Bessie Smith), visual arts, and theatre. Crucially for the play, the Renaissance also created a relatively tolerant space for LGBTQ+ individuals: Harlem's nightlife included openly gay and gender-nonconforming performers. By 1930, the Renaissance was waning as the Depression dried up patronage and audiences. Cleage captures this decline to explore what happens when a community's cultural golden age ends.",
  },
  {
    title: "The Birth Control Movement",
    content:
      "Margaret Sanger opened the first birth control clinic in the United States in 1916 and spent decades campaigning for women's reproductive rights. Her movement was controversial, particularly within the Black community. Some Black leaders supported birth control as a tool for women's empowerment and family stability; others viewed it with deep suspicion, noting Sanger's connections to the eugenics movement and fearing that birth control was a means of reducing the Black population. Delia's clinic work places her at the centre of this debate, and Cleage uses it to explore how progressive causes can be complicated by racial politics.",
  },
  {
    title: "LGBTQ+ History in Harlem",
    content:
      "During the Harlem Renaissance, Harlem's nightlife was remarkably inclusive by the standards of the era. Drag balls, gay-friendly speakeasies, and openly LGBTQ+ artists were part of the cultural landscape. However, this tolerance was always precarious: it depended on economic prosperity and a specific cultural moment. As the Depression took hold and the Renaissance faded, social conservatism reasserted itself. Guy's character embodies this history: his talent and personality thrive in the Renaissance's liberal atmosphere, but his safety depends on a tolerance that is already eroding. His murder at Leland's hands dramatises the lethal consequences of homophobia.",
  },
  {
    title: "The Great Migration",
    content:
      "Between roughly 1910 and 1970, six million Black Americans left the rural South for cities in the North, Midwest, and West. Leland's arrival in Harlem from Alabama places him within this historical movement. Migrants brought Southern culture, religious values, and social norms that sometimes clashed with the urban, secular, and liberal culture they encountered. Cleage uses Leland to dramatise this cultural collision: his conservative Christianity is not inherently villainous but becomes dangerous when it cannot accommodate the diversity of Harlem life.",
  },
];

const assessmentObjectives = [
  {
    code: "AO1",
    description: "Show knowledge and understanding of the text",
    guidance:
      "Demonstrate thorough knowledge of the play's plot, characters, and themes. Refer to specific moments and use accurate, embedded quotations. Do not retell the story; select details strategically to support your argument. Show that you understand the significance of events, not just their sequence.",
  },
  {
    code: "AO2",
    description: "Understand how meanings are shaped by the contexts in which texts are written and received",
    guidance:
      "Discuss how the play's meaning is shaped by its historical context: the Great Depression, the end of the Harlem Renaissance, the birth control movement, LGBTQ+ history, and the Great Migration. Show how a modern audience might respond differently from a 1930s audience. Integrate context into your analysis rather than treating it as a separate paragraph.",
  },
  {
    code: "AO3",
    description: "Analyse how writers use language, structure, and form to create meanings and effects",
    guidance:
      "This is where the highest marks are won. Analyse Cleage's dialogue, dramatic structure, use of setting, symbolism, and tension building. Discuss the four-act escalation, the domestic setting as a pressure cooker, the contrast between characters' speech patterns, and how dramatic irony creates audience awareness of impending tragedy. Always explain the effect on the audience.",
  },
  {
    code: "AO4",
    description: "Communicate a personal response, using appropriate terminology",
    guidance:
      "Offer a genuine personal engagement with the text. Use literary and dramatic terminology accurately (dramatic irony, motif, symbolism, foreshadowing, juxtaposition, vernacular). Structure your response with a clear argument. The strongest answers go beyond description to offer interpretation and evaluation.",
  },
];

const examGuidance = {
  passageBased: {
    label: "(a) Passage-Based Question",
    description:
      "You will be given a specific extract from the play and asked how Cleage makes it a powerful, significant, or dramatic moment. Work through the passage closely, analysing language, dramatic techniques, and structure. Then connect outward to the rest of the play and its contexts.",
    tips: [
      "Read the extract at least twice before writing; annotate key words and phrases",
      "Work through the passage sequentially, identifying shifts in tone, tension, or power dynamics",
      "Use short, embedded quotations from the extract and analyse specific word choices",
      "Discuss Cleage's dramatic methods: dialogue, stage directions, silence, juxtaposition",
      "Connect the passage to the play's wider themes and historical context",
      "Consider the audience's response: what does Cleage want the audience to think or feel at this moment?",
      "Use the playwright's name throughout: 'Cleage presents...' or 'Cleage uses...'",
    ],
  },
  essayBased: {
    label: "(b) Essay Question",
    description:
      "You will be asked about a character, theme, or dramatic technique across the whole play. Plan 3-4 key points with supporting quotations for each. Focus on Cleage's methods and purpose, not just what happens in the plot.",
    tips: [
      "Plan your answer before writing: identify 3-4 key moments or ideas with supporting quotations",
      "Structure your response around an argument, not a chronological retelling",
      "Analyse Cleage's methods for each point: how does she present the character/theme, not just what happens",
      "Integrate context naturally: explain how the Depression, the Renaissance, or social attitudes shape the characters' choices",
      "Use comparative analysis: contrast characters, contrast acts, contrast dreams with realities",
      "End with a strong conclusion that addresses the question directly and offers a personal evaluation",
      "Aim for at least one quotation per paragraph, analysed at word level",
    ],
  },
};

const sampleQuestion = {
  question:
    "How does Cleage present the relationship between Angel and Guy as central to the play's meaning?",
  modelParagraph:
    "Cleage presents the friendship between Angel and Guy as the play's emotional and thematic anchor, using their bond to embody the spirit of the Harlem Renaissance itself. Their relationship is characterised by unconditional acceptance: Guy takes Angel in without hesitation when she is destitute, and Angel supports Guy's sexuality without judgement. Cleage's dialogue reveals their intimacy through naturalistic banter and shared cultural references, creating a rhythm that feels lived-in and authentic. Structurally, their friendship is positioned as the first relationship the audience encounters, establishing it as the play's moral centre before Leland's arrival disrupts it. The phrase 'the best friend I ever had in my life', spoken by Angel after Guy's murder, is devastating precisely because Cleage has spent four acts demonstrating the truth of it. The simplicity of the language, stripped of the wit that characterised their earlier exchanges, registers the depth of loss. In context, their relationship represents the tolerance and creative solidarity that the Harlem Renaissance made possible: a Black woman and a gay Black man supporting each other in a society hostile to both. Guy's death, therefore, is not just a personal tragedy but a symbolic one: it marks the destruction of the Renaissance's inclusive values by the conservative forces that the Depression empowered. Personally, I find Cleage's refusal to sentimentalise the friendship particularly effective. Angel is not always grateful; Guy is not always patient. Their arguments and frustrations make the love between them feel real rather than idealised, which makes the ending all the more devastating. Cleage forces the audience to reckon with what intolerance destroys: not an abstraction, but a specific, irreplaceable human connection.",
  aoBreakdown: [
    {
      code: "AO1",
      detail:
        "Demonstrates thorough knowledge: refers to specific plot points (Guy taking Angel in, Angel's eulogy), character dynamics, and the play's structure across all four acts.",
    },
    {
      code: "AO2",
      detail:
        "Integrates context throughout: the Harlem Renaissance's tolerance, the Depression's economic pressures, and the historical significance of LGBTQ+ acceptance in 1930s Harlem are woven into the analysis rather than bolted on.",
    },
    {
      code: "AO3",
      detail:
        "Analyses Cleage's methods: discusses dialogue style (naturalistic banter vs. stripped simplicity), structural positioning (the friendship as the first relationship introduced), and the effect of language choices on the audience.",
    },
    {
      code: "AO4",
      detail:
        "Offers genuine personal response ('I find Cleage's refusal to sentimentalise...') and uses appropriate terminology (dramatic irony, structural positioning, naturalistic, symbolic). The argument is clearly structured and evaluative.",
    },
  ],
};

/* ─── Page Component ─────────────────────────────────────────── */

export default function BluesForAnAlabamaSkyStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#4A1942] to-[#893168] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Blues for an Alabama Sky &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Characters, themes, act-by-act summary with key quotations, dramatic
            techniques, historical context, and Cambridge-specific exam guidance.
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
            "Act-by-Act Summary",
            "Characters",
            "Themes",
            "Dramatic Techniques",
            "Context",
            "Assessment Objectives",
            "Exam Guidance",
            "Sample Question",
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-[#893168]/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Act-by-Act Summary ────────────────────────────────────── */}
        <section id="act-by-act-summary" aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="text-2xl font-bold text-foreground"
          >
            Act-by-Act Summary
          </h2>
          <div className="mt-6 space-y-6">
            {actSummary.map((act) => (
              <Card key={act.act}>
                <CardHeader>
                  <CardTitle>{act.act}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {act.summary}
                  </p>
                  {act.keyQuotations && act.keyQuotations.length > 0 && (
                    <div className="mt-4 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                        Key Quotations
                      </p>
                      {act.keyQuotations.map((q, i) => (
                        <div
                          key={i}
                          className="rounded-lg border-l-4 border-[#893168] bg-primary/5 p-4"
                        >
                          <blockquote className="text-sm font-medium italic text-foreground">
                            &ldquo;{q.quote}&rdquo;
                          </blockquote>
                          {"speaker" in q && q.speaker && (
                            <p className="mt-1 text-xs font-semibold text-primary">
                              &mdash; {q.speaker}
                            </p>
                          )}
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {q.analysis}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
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

        {/* ── Dramatic Techniques ─────────────────────────────────── */}
        <section id="dramatic-techniques" aria-labelledby="techniques-heading">
          <h2
            id="techniques-heading"
            className="text-2xl font-bold text-foreground"
          >
            Dramatic Techniques
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cleage&rsquo;s use of dramatic techniques is essential for AO3
            (language, structure, and form). Examiners reward candidates who
            discuss <em>how</em> Cleage shapes meaning, not just <em>what</em>{" "}
            happens.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {dramaticTechniques.map((d) => (
              <Card key={d.name}>
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {d.detail}
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
            Historical &amp; Social Context
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge examiners expect you to integrate context into your
            analysis (AO2), showing how historical and social factors shape the
            characters&rsquo; choices and the play&rsquo;s meaning.
          </p>
          <div className="mt-6 space-y-4">
            {contextSections.map((ctx) => (
              <Card key={ctx.title}>
                <CardHeader>
                  <CardTitle>{ctx.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {ctx.content}
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
            Understanding the assessment objectives helps you target your
            revision and structure your exam answers for maximum marks.
          </p>
          <div className="mt-6 space-y-4">
            {assessmentObjectives.map((ao) => (
              <Card key={ao.code}>
                <CardContent className="pt-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-[#4A1942] px-2.5 py-0.5 text-xs font-bold text-white">
                      {ao.code}
                    </span>
                    <h3 className="font-semibold text-foreground">
                      {ao.description}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ao.guidance}
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
            Cambridge IGCSE Literature drama questions offer a choice between a
            passage-based (a) question and an essay (b) question. Below is
            guidance for both.
          </p>

          <div className="mt-6 space-y-6">
            {/* Passage-based */}
            <Card>
              <CardHeader>
                <CardTitle>{examGuidance.passageBased.label}</CardTitle>
                <CardDescription>
                  {examGuidance.passageBased.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {examGuidance.passageBased.tips.map((tip, i) => (
                    <li key={i}>&bull; {tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Essay-based */}
            <Card>
              <CardHeader>
                <CardTitle>{examGuidance.essayBased.label}</CardTitle>
                <CardDescription>
                  {examGuidance.essayBased.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {examGuidance.essayBased.tips.map((tip, i) => (
                    <li key={i}>&bull; {tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Exam technique tips */}
            <div className="rounded-lg border-2 border-[#893168]/30 bg-primary/5 p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Cambridge Exam Technique: Key Tips
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">
                    Always use the playwright&rsquo;s name:
                  </strong>{" "}
                  Write &ldquo;Cleage presents...&rdquo; or &ldquo;Cleage
                  uses...&rdquo; rather than &ldquo;the play shows...&rdquo;.
                  This demonstrates awareness of authorial intent and helps you
                  discuss methods (AO3).
                </li>
                <li>
                  <strong className="text-foreground">
                    Quote precisely and briefly:
                  </strong>{" "}
                  Short, embedded quotations (&lsquo;the best friend I ever
                  had&rsquo;) are more effective than long block quotes. Aim for
                  at least one quotation per paragraph.
                </li>
                <li>
                  <strong className="text-foreground">
                    Integrate context (AO2):
                  </strong>{" "}
                  Do not write a separate &ldquo;context paragraph&rdquo;.
                  Instead, weave historical references into your analysis:
                  explain how the Depression shapes Angel&rsquo;s choices, or how
                  the Renaissance&rsquo;s decline gives Guy&rsquo;s Paris dream
                  urgency.
                </li>
                <li>
                  <strong className="text-foreground">
                    Analyse methods, not just events (AO3):
                  </strong>{" "}
                  Discuss Cleage&rsquo;s dramatic techniques: how dialogue
                  reveals character, how the four-act structure builds tension,
                  how setting functions symbolically. The strongest answers
                  explain <em>how</em> effects are achieved.
                </li>
                <li>
                  <strong className="text-foreground">
                    Offer a personal response (AO4):
                  </strong>{" "}
                  Phrases such as &ldquo;I find this particularly
                  effective...&rdquo; or &ldquo;This moment is significant
                  because...&rdquo; signal personal engagement. Avoid vague
                  statements; ground your response in specific textual evidence.
                </li>
                <li>
                  <strong className="text-foreground">
                    Link everything to Cleage&rsquo;s purpose:
                  </strong>{" "}
                  Ask yourself: why does Cleage make Leland kill Guy? Why does
                  Delia persist with the clinic? Why is the play set in 1930, not
                  1925? The best answers connect analysis to the playwright&rsquo;s
                  intentions and effects.
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
          <p className="mt-2 text-sm text-muted-foreground">
            This model paragraph demonstrates how to address all four assessment
            objectives in a single, sustained response.
          </p>

          <div className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Question</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">
                  {sampleQuestion.question}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Paragraph</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {sampleQuestion.modelParagraph}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Objective Breakdown</CardTitle>
                <CardDescription>
                  How this paragraph addresses each AO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sampleQuestion.aoBreakdown.map((ao) => (
                    <div key={ao.code} className="flex gap-3">
                      <span className="inline-block h-fit shrink-0 rounded-full bg-[#4A1942] px-2.5 py-0.5 text-xs font-bold text-white">
                        {ao.code}
                      </span>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {ao.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Back link ────────────────────────────────────────────── */}
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
