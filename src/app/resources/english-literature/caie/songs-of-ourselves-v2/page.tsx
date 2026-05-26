'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const poems = [
  {
    id: 'these-are-the-times',
    poet: 'Imtiaz Dharker',
    title: 'These are the Times We Live in',
    context:
      'Imtiaz Dharker is a British-Pakistani poet whose work frequently explores questions of cultural identity, displacement, and belonging. Born in Lahore and raised in Glasgow, her experience of living between cultures deeply informs this poem. Written in the post-9/11 era, the poem addresses the climate of suspicion and surveillance that reshaped how people - particularly those from minority backgrounds - are perceived at borders and in everyday life.',
    formAndStructure:
      'The poem is written in free verse with short, enjambed lines that mirror the fragmented, uncertain experience of crossing borders. The lack of a fixed rhyme scheme or regular metre reflects the instability and anxiety of the speaker. Stanzas are irregular in length, reinforcing the sense of disruption. The conversational, almost confessional tone draws the reader into an intimate space of vulnerability.',
    quotations: [
      {
        quote: 'These are the times we live in',
        analysis:
          "The titular refrain recurs throughout the poem, functioning as a resigned acknowledgement of a hostile political climate. Its repetition creates a cumulative weight, suggesting both inevitability and quiet protest. The use of the collective pronoun 'we' implicates the reader, making the experience universal rather than individual.",
      },
      {
        quote: "Don't look at me like that... / I'm not the one you should be afraid of",
        analysis:
          "The imperative 'Don't' signals defensiveness and frustration. The speaker directly confronts the assumptions of an unseen interlocutor, highlighting the injustice of racial profiling. The phrase 'afraid of' foregrounds the poem's central irony - the speaker is the one experiencing fear, not causing it.",
      },
      {
        quote: 'the border is a line / someone else drew',
        analysis:
          "This metaphor exposes the arbitrary and imposed nature of national borders. The passive construction ('someone else drew') strips agency from those affected by borders, underscoring the power imbalance between state and individual. It also gestures toward the colonial legacy of partition.",
      },
    ],
    themes: [
      'Borders and boundaries - both literal (national borders, airports) and metaphorical (racial, cultural)',
      'Identity and belonging - the tension between how the speaker identifies and how they are perceived',
      'Fear and suspicion - the post-9/11 climate of surveillance and mistrust',
      'Power and powerlessness - the individual against institutional authority',
    ],
  },
  {
    id: 'the-capital',
    poet: 'W.H. Auden',
    title: 'The Capital',
    context:
      "W.H. Auden wrote 'The Capital' in the 1930s during a period of political turmoil in Europe. Auden was deeply concerned with social injustice, the rise of fascism, and the moral failures of modern society. The poem reflects on the experience of arriving in a large city - likely London or Berlin - and the disillusionment that follows the initial promise of urban life. Auden's work from this period is often political, yet expressed through deceptively personal and lyrical forms.",
    formAndStructure:
      "The poem is a Petrarchan (Italian) sonnet with an octave (ABBAABBA) and sestet, though Auden adapts the form with characteristic irony. The sonnet form - traditionally used for love poetry - is repurposed to express alienation and disappointment, creating a tension between form and content. The volta (turn) between octave and sestet marks a shift from description of the city's allure to its darker reality.",
    quotations: [
      {
        quote: 'Quarter of pleasures where the rich are always waiting',
        analysis:
          "The 'quarter of pleasures' evokes a world of luxury and indulgence, but the continuous tense 'always waiting' suggests aimlessness and spiritual emptiness. The rich are not fulfilled but suspended in perpetual anticipation, implying that wealth does not provide meaning.",
      },
      {
        quote: 'Waiting expensively for miracles to happen',
        analysis:
          "The adverb 'expensively' is brilliantly placed, linking the act of waiting to financial cost and suggesting that even hope has been commodified. The word 'miracles' carries religious connotations, implying that the city's inhabitants have lost genuine faith and replaced it with materialism.",
      },
      {
        quote:
          'In glamorous restaurants and expensive cafes / You can tell at once that this is not a world / Where men are colourful',
        analysis:
          "The contrast between 'glamorous' surroundings and colourless people creates a stark irony. The city promises vibrancy but produces conformity. 'Colourful' functions metaphorically - the inhabitants lack individuality, passion, and authentic character.",
      },
    ],
    themes: [
      "Urban alienation - the loneliness and emptiness beneath the city's surface",
      'Wealth and materialism - the failure of money to provide fulfilment',
      'Disillusionment - the gap between expectation and reality',
      'Conformity - the loss of individuality in modern urban life',
    ],
  },
  {
    id: 'the-enemies',
    poet: 'Elizabeth Jennings',
    title: 'The Enemies',
    context:
      "Elizabeth Jennings was part of 'The Movement', a group of 1950s English poets who favoured clarity and emotional restraint over the excesses of modernism. Jennings's work often explores themes of mental illness, faith, and the tension between inner and outer worlds. 'The Enemies' examines the arrival of hostile forces into a peaceful, pastoral landscape, and the anxiety of those who watch from within.",
    formAndStructure:
      "The poem uses regular quatrains with a predominantly ABAB rhyme scheme, lending it a controlled, measured quality that contrasts with the threatening content. The formal regularity mirrors the ordered world of the inhabitants, while the encroaching 'enemies' disrupt this order thematically if not formally. Enjambment across stanza breaks creates a sense of unease beneath the surface calm.",
    quotations: [
      {
        quote: 'Last night they came across the river and / Entered the city',
        analysis:
          "The opening is immediate and narrative, placing the reader in the middle of an invasion. 'Last night' gives urgency and recency. 'Across the river' carries biblical and mythological overtones - rivers frequently symbolise boundaries between the known and unknown, safety and danger.",
      },
      {
        quote: 'They were like an army without / The discipline of soldiers',
        analysis:
          'The simile is deliberately unsettling. An army without discipline suggests chaos and unpredictability, making the threat more frightening than a conventional military force. This could represent internal anxieties - emotions or thoughts that cannot be controlled or ordered.',
      },
      {
        quote: 'We wondered what it was they were afraid of',
        analysis:
          "This remarkable reversal shifts perspective: the 'enemies' themselves carry fear. This complicates the binary of threat and victim, suggesting that those who threaten may do so out of their own vulnerability. The line invites empathy even for antagonists.",
      },
    ],
    themes: [
      'Conflict and invasion - the disruption of peace by hostile forces',
      'Nature vs. threat - the pastoral landscape as a space of vulnerability',
      'Duality - the blurred line between aggressor and victim',
      "Inner vs. outer conflict - the 'enemies' as potential metaphors for psychological threats",
    ],
  },
  {
    id: 'the-bus',
    poet: 'Arun Kolatkar',
    title: 'The Bus',
    context:
      "Arun Kolatkar was a major Indian poet who wrote in both Marathi and English. He is best known for his collection 'Jejuri' (1976), from which this poem is taken. The collection documents a bus journey to the temple town of Jejuri in Maharashtra. Kolatkar blends the mundane and the sacred, using precise, often humorous observation to challenge romanticised views of pilgrimage and religious devotion. His work sits at the intersection of Indian and Western modernist traditions.",
    formAndStructure:
      'The poem uses short, clipped free-verse lines with minimal punctuation, creating a rapid, visual quality that mimics the jolting movement of a bus. The structure is cinematic - images flash past as if viewed through a bus window. There is no conventional narrative arc; instead, the poem accumulates impressions, reflecting the fragmented nature of travel and perception.',
    quotations: [
      {
        quote: 'The bus stumbled / on a pothole',
        analysis:
          "The verb 'stumbled' personifies the bus, giving it a clumsy, almost human quality. This grounds the poem in physical, bodily experience rather than abstract reflection. The pothole is a concrete detail that roots the poem in the reality of Indian roads, resisting any tendency to idealise the journey.",
      },
      {
        quote: 'The hills crack / and begin to fall',
        analysis:
          "This striking image captures the visual effect of the landscape shifting as the bus moves. The verbs 'crack' and 'fall' suggest fragility and impermanence - the solid landscape appears to disintegrate. This could symbolise the breaking down of fixed perceptions as the journey progresses.",
      },
      {
        quote: 'An old woman / sits beside you / and cracks her knuckles',
        analysis:
          "The sharp, mundane detail of knuckle-cracking contrasts with any expectation of spiritual or poetic profundity. Kolatkar's genius lies in finding significance in the utterly ordinary. The second-person address ('you') draws the reader directly into the scene.",
      },
    ],
    themes: [
      'Journey and pilgrimage - the physical and spiritual dimensions of travel',
      'Observation and perception - the act of noticing as a form of meaning-making',
      'The mundane and the sacred - finding significance in everyday details',
      'Indian landscape and culture - a specific, grounded sense of place',
    ],
  },
  {
    id: 'children-of-wealth',
    poet: 'Elizabeth Daryush',
    title: 'Children of Wealth',
    context:
      "Elizabeth Daryush (1887-1977) was the daughter of the Poet Laureate Robert Bridges and lived a life of considerable privilege. This biographical context makes the poem's critique of wealthy complacency particularly striking - it reads as self-aware social commentary from within the very class it examines. Daryush was admired for her formal skill but remained relatively overlooked during her lifetime, partly because her traditional forms fell out of fashion.",
    formAndStructure:
      "The poem is a Shakespearean sonnet (three quatrains and a couplet) with a regular iambic pentameter and ABAB CDCD EFEF GG rhyme scheme. The disciplined, polished form mirrors the ordered, comfortable lives of the 'children of wealth' it describes. The final couplet delivers a sharp, epigrammatic conclusion - the sonnet's formal closure becomes an ironic judgement on the closed, insular world of privilege.",
    quotations: [
      {
        quote: 'Children of wealth in your warm nursery',
        analysis:
          "The opening directly addresses the privileged class. 'Warm nursery' suggests comfort, protection, and - crucially - immaturity. The word 'children' positions the wealthy as perpetually juvenile, never forced to grow through hardship. The nursery is both literal (a childhood space) and metaphorical (a sheltered, insulated existence).",
      },
      {
        quote: 'Set in the cushioned niche, how safely rest',
        analysis:
          "The image of a 'cushioned niche' extends the metaphor of comfort as confinement. 'Safely' carries a double edge - safety from hardship, but also safety from growth, experience, and genuine life. The verb 'rest' implies passivity and stagnation.",
      },
      {
        quote: 'your easy griefs, that play, as played, with toys',
        analysis:
          "The phrase 'easy griefs' is oxymoronic - true grief is never easy. Their suffering is trivial, performative, compared to genuine hardship. The comparison to toys underscores the childishness of their emotional lives. The repetition of 'play/played' reinforces the artificiality.",
      },
    ],
    themes: [
      'Privilege and complacency - the moral cost of inherited wealth',
      'Social criticism - a sharp critique of the insulated upper class',
      'Immaturity and stagnation - wealth as a barrier to genuine experience',
      'Form and irony - the polished sonnet form mirrors the polished, hollow lives it describes',
    ],
  },
  {
    id: 'touch-and-go',
    poet: 'Stevie Smith',
    title: 'Touch and Go',
    context:
      'Stevie Smith (1902-1971) was a distinctive English poet known for her deceptively simple style, dark humour, and preoccupation with death. Her work often presents serious themes - mortality, loneliness, faith - through a childlike or whimsical voice, creating an unsettling tonal dissonance. Smith worked as a secretary for much of her life and lived in Palmers Green, London, with her aunt. Her outsider status in the literary establishment informs the subversive quality of her poetry.',
    formAndStructure:
      "The poem uses a nursery-rhyme-like metre and simple diction that belies its serious subject matter. The short lines and regular rhythm create a sing-song quality associated with childhood verse, which jars against the poem's engagement with death. This tonal dissonance is Smith's signature technique - the gap between how the poem sounds and what it says forces the reader to reconsider their assumptions about both form and meaning.",
    quotations: [
      {
        quote: 'Man is coming out of the mountains',
        analysis:
          "The opening line is stark and elemental. 'Man' is generic, representing humanity rather than a specific individual. The mountains suggest a primordial, mythic landscape. 'Coming out' implies emergence - from darkness, from struggle, from the shadow of death - establishing the poem's concern with survival and mortality.",
      },
      {
        quote: 'It was a touch and go thing',
        analysis:
          "The colloquial idiom 'touch and go' is deliberately casual, almost flippant, about a life-or-death situation. This understated tone is characteristic of Smith's ability to address the gravest subjects with apparent lightness. The phrase also carries a physical quality - 'touch' and 'go' - suggesting the thin boundary between life and death.",
      },
      {
        quote: 'But he wanted to die, you say? / No no, he wanted to live',
        analysis:
          "The dramatic dialogue format creates an exchange between the poem's speaker and an imagined interlocutor. The sharp correction ('No no') reveals a common misunderstanding about those close to death - the assumption that proximity to death implies a death wish. Smith challenges this assumption with characteristic directness.",
      },
    ],
    themes: [
      'Death and mortality - the thin line between living and dying',
      'Deceptive simplicity - serious content delivered through a childlike voice',
      'Survival and the will to live - challenging assumptions about despair',
      'Tone and irony - the gap between form (light, sing-song) and content (death, crisis)',
    ],
  },
]

const poemPairings = [
  {
    pair: 'Dharker & Auden',
    connection:
      'Both poems explore alienation within modern society - Dharker through the lens of racial profiling and border anxiety, Auden through urban disillusionment and spiritual emptiness. Both use a first-person or inclusive perspective to draw the reader into the experience of feeling out of place.',
  },
  {
    pair: 'Jennings & Smith',
    connection:
      "Both poets use controlled, formal structures to explore threatening or unsettling subject matter. Jennings's measured quatrains contain the threat of invasion, while Smith's nursery-rhyme rhythms domesticate death. In both cases, the tension between form and content is central to meaning.",
  },
  {
    pair: 'Kolatkar & Dharker',
    connection:
      'Both poets write from a South Asian perspective and use free verse to capture fragmented, sensory experience. Kolatkar observes the Indian landscape with cinematic precision; Dharker navigates the psychological landscape of displacement. Both resist romanticisation in favour of honest, grounded detail.',
  },
  {
    pair: 'Daryush & Auden',
    connection:
      "Both poems critique wealth and privilege. Daryush addresses the 'children of wealth' directly through a tightly controlled sonnet, while Auden's sonnet exposes the emptiness of the rich who wait 'expensively for miracles'. Both use the sonnet form ironically - a form associated with beauty and love repurposed for social criticism.",
  },
  {
    pair: 'Smith & Jennings',
    connection:
      'Both poems deal with the presence of threat - external enemies in Jennings, death in Smith. Both complicate simple binaries: Jennings shows enemies who are themselves afraid; Smith shows a man close to death who desperately wants to live. Both poets use deceptively simple surfaces to explore complex emotional and philosophical territory.',
  },
  {
    pair: 'Kolatkar & Daryush',
    connection:
      "These poems offer a productive contrast in register and form. Kolatkar's free verse is loose, observational, and rooted in the physical world; Daryush's sonnet is polished, abstract, and socially critical. Comparing them allows discussion of how form shapes meaning - open forms for open journeys, closed forms for closed worlds.",
  },
]

const assessmentObjectives = [
  {
    code: 'Textual Knowledge',
    title: 'Informed personal response',
    description:
      'Demonstrate a close knowledge and understanding of texts, maintaining a critical style and presenting an informed personal engagement.',
    application:
      "Show you have read the poem closely. Use embedded quotations. Offer your own interpretation rather than simply describing what happens. For example, argue whether Smith's tone is genuinely light or deliberately unsettling.",
  },
  {
    code: "Writer's Methods",
    title: 'Language, form and structure',
    description:
      'Analyse the language, form and structure used by a writer to create meanings and effects.',
    application:
      "This is where marks are won and lost. Examine specific word choices (e.g., Daryush's 'cushioned niche'), structural features (e.g., Auden's use of the Petrarchan volta), and the effects of form (e.g., Kolatkar's cinematic free verse). Always link technique to meaning.",
  },
  {
    code: 'Interpretation',
    title: 'Context',
    description:
      'Demonstrate understanding of the relationships between texts and the contexts in which they were written.',
    application:
      "Use context to illuminate, not to pad. Link Dharker's post-9/11 context to the poem's tone of anxiety. Connect Daryush's own privileged background to the poem's self-aware critique. Context should explain why the poem says what it says, not just when it was written.",
  },
  {
    code: 'Personal Response',
    title: 'Comparison (where required)',
    description: 'Explore connections and comparisons between texts.',
    application:
      "Structure comparative responses around shared themes, then analyse how each poet treats that theme differently through language and form. Avoid the 'one then the other' approach - weave poems together, addressing points of similarity and difference within the same paragraph.",
  },
]

export default function SongsOfOurselvesV2Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/resources" className="hover:text-foreground transition-colors">
          Resources
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/resources/english-literature"
          className="hover:text-foreground transition-colors"
        >
          English Literature
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/resources/english-literature/caie"
          className="hover:text-foreground transition-colors"
        >
          CAIE
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Songs of Ourselves Volume 2</span>
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Songs of Ourselves Volume 2 - Part 3
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        CAIE IGCSE Literature (0475) Poetry Study Guide
      </p>

      {/* Overview */}
      <section className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Overview of the Part 3 Cluster</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <em>Songs of Ourselves Volume 2</em>, Part 3, is the prescribed poetry cluster for the
              Cambridge Assessment International Education (CAIE) IGCSE English Literature syllabus
              (0475). The anthology gathers poems from a wide range of periods, cultures, and poetic
              traditions, offering you a rich body of work for close reading, comparative analysis,
              and personal response.
            </p>
            <p>
              The Part 3 selection encompasses poems that explore borders and belonging, urban
              alienation, conflict, journey, social privilege, and mortality. The diversity of
              voices - from Imtiaz Dharker&apos;s post-colonial perspective to W.H. Auden&apos;s
              1930s social critique, from Arun Kolatkar&apos;s Indian modernism to Stevie
              Smith&apos;s English eccentricity - ensures that you engage with multiple contexts,
              forms, and worldviews.
            </p>
            <p>
              In the examination, you may be asked to write a critical appreciation of a single poem
              or a comparative essay on two poems. Both question types require close attention to
              language, form, and structure (Writer&apos;s Methods), an informed personal response
              (Textual Knowledge), and - where relevant - an understanding of context
              (Interpretation) and the ability to draw connections between texts (Personal
              Response).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Poem Analyses */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Detailed Poem Analyses
        </h2>
        <div className="mt-6 space-y-8">
          {poems.map((poem) => (
            <Card key={poem.id} id={poem.id}>
              <CardHeader>
                <CardTitle className="text-xl">&ldquo;{poem.title}&rdquo;</CardTitle>
                <CardDescription className="text-base font-medium">{poem.poet}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Context */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Context
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{poem.context}</p>
                </div>

                {/* Form & Structure */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Form &amp; Structure
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {poem.formAndStructure}
                  </p>
                </div>

                {/* Key Quotations */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Key Quotations &amp; Analysis
                  </h3>
                  <div className="mt-3 space-y-4">
                    {poem.quotations.map((q, i) => (
                      <div key={i} className="rounded-lg border border-border/60 bg-muted/20 p-4">
                        <p className="font-medium italic text-foreground">
                          &ldquo;{q.quote}&rdquo;
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {q.analysis}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Themes */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Themes
                  </h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground leading-relaxed">
                    {poem.themes.map((theme, i) => (
                      <li key={i}>{theme}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Techniques */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Comparison Techniques &amp; Poem Pairings
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Effective comparison is not about listing similarities and differences mechanically. The
          strongest responses identify a shared concern - a theme, a technique, a structural choice
          - and then explore how each poet approaches it differently, and why those differences
          matter. Below are productive pairings from the Part 3 cluster.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {poemPairings.map((pairing, i) => (
            <Card key={i} size="sm">
              <CardHeader>
                <CardTitle>{pairing.pair}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pairing.connection}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CAIE Assessment Objectives */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          CAIE Assessment Objectives for Poetry
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          The CAIE 0475 syllabus assesses you against four Assessment Objectives. Understanding what
          each skill requires - and how to demonstrate it in a poetry response - is essential for
          achieving the highest bands.
        </p>
        <div className="mt-6 space-y-4">
          {assessmentObjectives.map((ao) => (
            <Card key={ao.code} size="sm">
              <CardHeader>
                <CardTitle>
                  {ao.code}: {ao.title}
                </CardTitle>
                <CardDescription>{ao.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">How to apply it: </strong>
                  {ao.application}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Exam Tips */}
      <section className="mt-12 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Exam Strategy for Poetry Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Read the poem at least twice</strong> before you
                begin writing. The first reading gives you the overall tone and subject; the second
                reveals the details of language and structure that will form the substance of your
                analysis.
              </li>
              <li>
                <strong className="text-foreground">Embed quotations into your sentences</strong>{' '}
                rather than presenting them as standalone blocks. This demonstrates fluency and
                allows you to analyse individual words within the flow of your argument.
              </li>
              <li>
                <strong className="text-foreground">
                  Analyse specific word choices, not just themes
                </strong>
                . Saying a poem is &ldquo;about identity&rdquo; is description; explaining how
                Dharker&apos;s use of the imperative &ldquo;Don&apos;t look at me like that&rdquo;
                conveys defensive vulnerability is analysis.
              </li>
              <li>
                <strong className="text-foreground">Address form and structure explicitly</strong>.
                Discuss why Auden chose a sonnet, why Kolatkar uses free verse, why Smith&apos;s
                nursery-rhyme metre is significant. Form is not decoration - it is meaning.
              </li>
              <li>
                <strong className="text-foreground">
                  For comparative questions, integrate rather than alternate
                </strong>
                . Do not write about Poem A for three paragraphs then Poem B for three paragraphs.
                Instead, identify shared points of comparison and discuss both poems within each
                paragraph, noting where they converge and diverge.
              </li>
              <li>
                <strong className="text-foreground">
                  Use context to illuminate, not to fill space
                </strong>
                . A sentence on Daryush&apos;s privileged background that explains why her critique
                carries ironic weight is valuable. A paragraph of biographical detail unconnected to
                the poem is not.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
