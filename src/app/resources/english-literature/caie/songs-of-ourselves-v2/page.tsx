'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const poems = [
  {
    // Rewritten 2 October 2026. Two of the card's three quotations were not Dharker's: "Don't
    // look at me like that... / I'm not the one you should be afraid of" and "the border is a
    // line / someone else drew" are not in the poem, which is about passport control, and the
    // title is not repeated in it as a refrain. Cambridge's printing is not held here; quotations are checked against the text Poetry Prof prints.
    id: 'these-are-the-times',
    poet: 'Imtiaz Dharker',
    title: 'These are the Times We Live in',
    context:
      'Imtiaz Dharker is a British-Pakistani poet whose work frequently explores questions of cultural identity, displacement, and belonging. Born in Lahore and raised in Glasgow, her experience of living between cultures deeply informs this poem. Written in the post-9/11 era, the poem addresses the climate of suspicion and surveillance that reshaped how people - particularly those from minority backgrounds - are perceived at borders and in everyday life.',
    formAndStructure:
      'The poem is written in free verse with short, enjambed lines that mirror the fragmented, uncertain experience of crossing a border. It is addressed to "you", which puts the reader in the place of the traveller at passport control. Stanzas are irregular in length, and the conversational, wry tone draws the reader into an intimate space of vulnerability.',
    quotations: [
      {
        quote: 'reading you backwards from the last page',
        analysis:
          'The officer reads the traveller as if they were the passport, starting at the wrong end. The image is comic and unsettling at once: the person is reduced to a document and examined as though they might be something other than they seem.',
      },
      {
        quote: 'You shrink to the size / of the book in his hand',
        analysis:
          "The traveller is made small, literally and figuratively, by the officer's suspicion: reduced to the passport he holds. The second-person 'You' draws the reader into the experience of being scrutinised and found doubtful.",
      },
    ],
    themes: [
      'Borders and boundaries - both literal (passport control, airports) and metaphorical (racial, cultural)',
      'Identity and belonging - the tension between how the speaker identifies and how they are perceived',
      'Fear and suspicion - the post-9/11 climate of surveillance and mistrust',
      'Power and powerlessness - the individual against institutional authority',
    ],
  },
  {
    // Rewritten 2 October 2026. The poem is five four-line stanzas, not a Petrarchan sonnet, and
    // "In glamorous restaurants and expensive cafes / You can tell at once that this is not a
    // world / Where men are colourful" is not in it. Cambridge's printing is not held here; quotations are checked against the text Poetry Prof prints.
    id: 'the-capital',
    poet: 'W.H. Auden',
    title: 'The Capital',
    context:
      "W.H. Auden wrote 'The Capital' in the late 1930s, during a period of political turmoil in Europe. Auden was deeply concerned with social injustice, the rise of fascism, and the moral failures of modern society. The poem addresses a great capital city directly, exposing the misery its glamour hides and the way its glow lures people in from the countryside. Auden's work from this period is often political, yet expressed through deceptively personal and lyrical forms.",
    formAndStructure:
      'The poem is five four-line stanzas of long, loose lines with no regular rhyme scheme. It opens as a catalogue addressed to the city itself, like an ironic hymn of praise; the third stanza turns to the ways the city betrays its people and the fourth to the misery it hides, before the last watches its glow beckoning across the dark countryside.',
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
        quote: 'like a wicked uncle',
        analysis:
          "In the last stanza the city's glow reaches far into the dark countryside and beckons the farmer's children. The simile makes the capital a tempter, hinting at forbidden pleasures, and ends the poem on menace rather than delight.",
      },
    ],
    themes: [
      "Urban alienation - the loneliness and emptiness beneath the city's surface",
      'Wealth and materialism - the failure of money to provide fulfilment',
      'Disillusionment - the gap between expectation and reality',
      'Exploitation - lives used up in factories and lonely rooms',
    ],
  },
  {
    // Rewritten 2 October 2026. "They were like an army without / The discipline of soldiers"
    // and "We wondered what it was they were afraid of" are not in the poem, which is set in a
    // city, not a pastoral landscape, and is three stanzas of six, six and eight lines, not
    // quatrains. Cambridge's printing is not held here; quotations are checked against the text Poetry Prof prints.
    id: 'the-enemies',
    poet: 'Elizabeth Jennings',
    title: 'The Enemies',
    context:
      "Elizabeth Jennings was part of the Movement, a group of 1950s English poets who favoured clarity and emotional restraint over the excesses of modernism. Jennings's work often explores themes of mental illness, faith, and the tension between inner and outer worlds. 'The Enemies' describes strangers who arrive in a city overnight, take nothing and harm no one, yet leave the whole town suspicious and afraid.",
    formAndStructure:
      "Three stanzas, of six, six and eight lines, with rhymes that come and go rather than a fixed scheme. The calm, measured movement of the lines contrasts with the unease the poem describes, and the longer last stanza turns from what happened in the night to its effect on the townspeople's minds.",
    quotations: [
      {
        quote: 'Last night they came across the river and / Entered the city',
        analysis:
          "The opening is immediate and narrative, placing the reader in the middle of an invasion. 'Last night' gives urgency and recency. 'Across the river' carries biblical and mythological overtones - rivers frequently symbolise boundaries between the known and unknown, safety and danger.",
      },
      {
        quote: 'Yet all the city is a haunted place',
        analysis:
          "Although the strangers took nothing and peace is still apparent, the city is changed: old friends speak cautiously and close their faces to each other. The threat has moved from the streets into people's minds, so the enemies of the title may be suspicion and fear themselves.",
      },
    ],
    themes: [
      'Invasion and rumour - strangers arrive by night and the town fills with stories',
      'Trust and suspicion - friends who no longer speak openly',
      'Inner vs. outer threat - strangers who settle in minds as well as homes',
      'Restraint - a calm surface over deep unease',
    ],
  },
  {
    // Rewritten 2 October 2026. None of the card's three quotations was Kolatkar's: "The bus
    // stumbled / on a pothole", "The hills crack / and begin to fall" and "An old woman / sits
    // beside you / and cracks her knuckles" are not in the poem, whose windows are buttoned down,
    // so the landscape is never seen. Cambridge's printing is not held here; quotations are checked against the text Poetry Prof prints.
    id: 'the-bus',
    poet: 'Arun Kolatkar',
    title: 'The Bus',
    context:
      "Arun Kolatkar was a major Indian poet who wrote in both Marathi and English. He is best known for his collection 'Jejuri' (1976), from which this poem is taken. The collection documents a journey to the temple town of Jejuri in Maharashtra. Kolatkar blends the mundane and the sacred, using precise, often humorous observation to challenge romanticised views of pilgrimage and religious devotion. His work sits at the intersection of Indian and Western modernist traditions.",
    formAndStructure:
      "The poem is a sequence of short stanzas in lower case, with sparse punctuation. Because the windows are covered, its images come from inside the bus - a flapping tarpaulin, the light that spills out, a reflection in an old man's glasses - and the journey is felt rather than seen.",
    quotations: [
      {
        quote: 'your own divided face in the pair of glasses',
        analysis:
          "With the windows buttoned down, the traveller's own face, split in two by an old man's spectacles, is the only view the journey offers. The divided face hints at a self split between the modern traveller and the old beliefs of the pilgrimage.",
      },
      {
        quote: "you don't step inside the old man's head",
        analysis:
          "The poem's last line: the traveller gets off the bus without entering the old man's world of faith. The second-person 'you' keeps the reader at the same distance - an observer of devotion, not a sharer in it.",
      },
    ],
    themes: [
      'Journey and pilgrimage - the physical and spiritual dimensions of travel',
      'Observation and perception - the act of noticing as a form of meaning-making',
      'The mundane and the sacred - finding significance in everyday details',
      "Faith and scepticism - the old man's belief and the traveller's distance",
    ],
  },
  {
    // Rewritten 2 October 2026. Two of the card's three quotations were not Daryush's: "Set in
    // the cushioned niche, how safely rest" (the poem has a cushioned window seat) and "your easy
    // griefs, that play, as played, with toys" are not in the poem. Cambridge's printing is not held here; quotations are checked against the text Poetry Prof prints.
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
        quote: 'your citadel / Is safe from feeling',
        analysis:
          "Behind a double pane the children watch the snow without feeling it. The metaphor of a 'citadel' makes their comfort a fortress, safe from feeling and from any knowledge of winter's cruelty. Protection becomes ignorance.",
      },
      {
        quote: "horror's wrecking fire",
        analysis:
          "The sestet orders the children out to 'elemental wrong' and warns that tonight they may wake to a house on fire, because it is wired for disaster. The closing couplet turns social criticism into prophecy: their protective glass will not save them.",
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
    // Rewritten 2 October 2026. "It was a touch and go thing" and "But he wanted to die, you say? /
    // No no, he wanted to live" are not in the poem, which is about mankind half out of the
    // mountains, not a man close to death; it ends "It is touch and go". Cambridge's printing is not held here; quotations are checked against the text Poetry Prof prints.
    id: 'touch-and-go',
    poet: 'Stevie Smith',
    title: 'Touch and Go',
    context:
      'Stevie Smith (1902-1971) was a distinctive English poet known for her deceptively simple style, dark humour, and preoccupation with death. Her work often presents serious themes - mortality, loneliness, faith - through a childlike or whimsical voice, creating an unsettling tonal dissonance. Smith worked as a secretary for much of her life and lived in Palmers Green, London, with her aunt. Her outsider status in the literary establishment informs the subversive quality of her poetry.',
    formAndStructure:
      "The poem uses short quatrains, a nursery-rhyme-like metre and simple diction that belie its serious subject matter. The short lines and regular rhythm create a sing-song quality associated with childhood verse, which jars against the poem's picture of humanity stuck at a point of crisis. This tonal dissonance is Smith's signature technique - the gap between how the poem sounds and what it says forces the reader to reconsider their assumptions about both form and meaning.",
    quotations: [
      {
        quote: 'Man is coming out of the mountains',
        analysis:
          "The opening line is stark and elemental. 'Man' is generic, representing humanity rather than a specific individual. The mountains suggest a primordial, mythic landscape. 'Coming out' implies emergence - from darkness and struggle - establishing the poem's concern with humanity's progress.",
      },
      {
        quote: 'his tail is caught in the pass',
        analysis:
          "The tail is a comic, startling detail: man still carries his animal past and is held back by it, stuck in a narrow place between where he came from and where he is going. The speaker's voice veers between impatience, calling him an ass, and pity for his suffering.",
      },
      {
        quote: 'It is touch and go',
        analysis:
          "The final line answers the poem's question - will he make it out? - with a colloquial shrug. The idiom 'touch and go' is deliberately casual about a life-or-death outcome; this understatement is characteristic of Smith's ability to address the gravest subjects with apparent lightness.",
      },
    ],
    themes: [
      "Humanity's struggle - man half out of the mountains, held back by his past",
      'Deceptive simplicity - serious content delivered through a childlike voice',
      'Hope and doubt - an ending left uncertain',
      'Tone and irony - the gap between form (light, sing-song) and content (crisis)',
    ],
  },
]

const poemPairings = [
  {
    pair: 'Dharker & Auden',
    connection:
      'Both poems explore alienation within modern society - Dharker through the lens of racial profiling and border anxiety, Auden through urban disillusionment and spiritual emptiness. Both address someone directly - Dharker the traveller in the second person, Auden the city itself - drawing the reader into the experience of feeling out of place.',
  },
  {
    pair: 'Jennings & Smith',
    connection:
      "Both poets use controlled, formal structures to explore threatening or unsettling subject matter. Jennings's measured stanzas contain the unease of the strangers' arrival, while Smith's nursery-rhyme rhythms make light of a crisis. In both cases, the tension between form and content is central to meaning.",
  },
  {
    pair: 'Kolatkar & Dharker',
    connection:
      'Both poets write from a South Asian perspective and use free verse to capture fragmented, sensory experience. Kolatkar records a bus journey in fragments of light, sound and reflection; Dharker the psychological experience of being examined at a border. Both resist romanticisation in favour of honest, grounded detail.',
  },
  {
    pair: 'Daryush & Auden',
    connection:
      "Both poems critique wealth and privilege. Daryush addresses the 'children of wealth' directly through a tightly controlled sonnet, while Auden's catalogue exposes the emptiness of the rich who wait 'expensively for miracles'. Daryush turns the sonnet, a form associated with beauty and love, to social criticism; Auden borrows the tone of a hymn of praise to do the same.",
  },
  {
    pair: 'Smith & Jennings',
    connection:
      "Both poems deal with threat that is hard to pin down - strangers who harm no one yet leave a city afraid in Jennings, mankind stuck halfway out of the mountains in Smith. Neither offers a clear resolution: Jennings's town ends haunted, and Smith's man may or may not get free. Both poets use deceptively simple surfaces to explore complex emotional and philosophical territory.",
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
      "This is where marks are won and lost. Examine specific word choices (e.g., Daryush's 'citadel'), structural features (e.g., the turn in Daryush's sonnet from octave to sestet), and the effects of form (e.g., Kolatkar's lower-case fragments). Always link technique to meaning.",
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
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
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
                  <ul className="mt-2 list-disc space-y-1.5 ps-5 text-muted-foreground leading-relaxed">
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
            <ul className="list-disc space-y-3 ps-5 text-muted-foreground leading-relaxed">
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
                Dharker&apos;s image of the traveller shrinking to the size of a passport conveys
                powerlessness is analysis.
              </li>
              <li>
                <strong className="text-foreground">Address form and structure explicitly</strong>.
                Discuss why Daryush chose a sonnet, why Kolatkar uses free verse, why Smith&apos;s
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
    </div>
  )
}
