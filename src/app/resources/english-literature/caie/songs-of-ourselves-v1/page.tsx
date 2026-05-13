import { STRINGS } from './content'
import { useLocale } from '@/lib/i18n/use-locale'
;('use client')

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

/* ─── Poem data ──────────────────────────────────────────────── */

interface AnalysisPoint {
  point: string
  detail: string
}

interface QuoteAnalysis {
  quote: string
  analysis: string
}

interface PoemData {
  title: string
  poet: string
  context: string
  themes: string[]
  form: string
  structure: string
  keyQuotations: QuoteAnalysis[]
  analysis: AnalysisPoint[]
  examTips: string[]
}

const poems: PoemData[] = [
  {
    title: "Sonnet 18 ('Shall I compare thee to a summer's day?')",
    poet: 'William Shakespeare',
    context:
      "Written around 1609 as part of Shakespeare's sequence of 154 sonnets, the first 126 of which are addressed to a young man often called the 'Fair Youth'. The sonnets explore love, beauty, mortality, and the power of poetry. Renaissance poets frequently debated whether art could defeat time — Sonnet 18 is Shakespeare's most famous contribution to that debate.",
    themes: ['Beauty', 'Time and mortality', 'Immortality through art', 'Love and admiration'],
    form: "Shakespearean (English) sonnet: three quatrains and a closing couplet, rhyme scheme ABAB CDCD EFEF GG, written in iambic pentameter. The regular metre creates a confident, measured tone, reinforcing the speaker's certainty that poetry can preserve beauty.",
    structure:
      "Quatrain 1 poses the comparison and immediately finds summer lacking. Quatrain 2 catalogues summer's flaws — heat, brevity, decline. Quatrain 3 introduces the volta with 'But', pivoting to the beloved's 'eternal summer'. The couplet delivers the poem's bold conclusion: as long as people read this poem, the beloved lives on.",
    keyQuotations: [
      {
        quote: "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate",
        analysis:
          "The opening rhetorical question sets up the comparison only to dismantle it. 'More temperate' suggests the beloved lacks summer's extremes — an unexpected quality to praise, privileging steadiness over passion.",
      },
      {
        quote: 'Rough winds do shake the darling buds of May',
        analysis:
          "Personification and sensory imagery show summer as vulnerable. 'Darling buds' are tender and precious, yet easily damaged by 'rough winds'. The contrast between delicacy and violence underpins the argument that nature is unreliable.",
      },
      {
        quote: 'But thy eternal summer shall not fade',
        analysis:
          "The conjunction 'But' marks the volta. The oxymoron 'eternal summer' defies the mortality established in the preceding lines, boldly claiming that the beloved transcends natural law through the poem's preservation.",
      },
      {
        quote:
          'So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee',
        analysis:
          "The concluding couplet makes the poem self-referential: 'this' is the sonnet itself. The conditional 'So long as' is paradoxically fulfilled by the poem's survival for over 400 years, proving its own argument. The repeated 'So long' creates rhythmic certainty.",
      },
    ],
    analysis: [
      {
        point: 'The blazon tradition subverted',
        detail:
          "Unlike Petrarchan poets who praise the beloved's physical features, Shakespeare praises by negation — listing what the beloved is not (not too hot, not too short-lived, not subject to decay). This indirect approach makes the praise feel more sincere.",
      },
      {
        point: 'Legal and commercial metaphor',
        detail:
          "'Summer's lease hath all too short a date' introduces the language of property and contract. Summer does not own its beauty but merely rents it. The beloved, by contrast, possesses beauty permanently through the poem.",
      },
      {
        point: 'The power of art',
        detail:
          "The poem's central claim — that poetry defeats time — is a Renaissance commonplace, but Shakespeare's execution is unusually bold. The poem does not merely hope to preserve beauty; it asserts this as fact. The confident tone of the couplet leaves no room for doubt.",
      },
      {
        point: 'Iambic pentameter and control',
        detail:
          "The regular metre mirrors the speaker's confidence. There are few metrical disruptions, which contrasts with the 'rough winds' and instability of summer. The poem's form enacts the permanence it promises.",
      },
    ],
    examTips: [
      "Link form to meaning: the sonnet's controlled structure mirrors the speaker's control over time through art.",
      "Compare with 'Ozymandias' for a contrasting view of what endures — art vs. political power.",
      "Avoid simply retelling the poem; focus on HOW Shakespeare constructs his argument through the three quatrains building to the couplet's conclusion.",
      "Note the shift from third-person description of summer to direct second-person address ('thy', 'thee') — the beloved becomes increasingly present as the poem progresses.",
    ],
  },
  {
    title: 'Follower',
    poet: 'Seamus Heaney',
    context:
      "Published in 'Death of a Naturalist' (1966), Heaney's first major collection. Heaney grew up on a farm in County Derry, Northern Ireland, and his early poetry is deeply rooted in rural life. 'Follower' draws on his childhood memories of watching his father plough fields. Heaney often explored the tension between his farming heritage and his identity as a poet — this poem captures that tension through the metaphor of following.",
    themes: [
      'Admiration and hero-worship',
      'Role reversal and ageing',
      'Family relationships',
      'Rural identity',
    ],
    form: "Six four-line stanzas (quatrains) with an ABAB rhyme scheme, though many rhymes are half-rhymes (e.g. 'plough'/'follow', 'sock'/'lacked'). The half-rhymes suggest something slightly off — the son can never quite match or replicate the father.",
    structure:
      "The poem moves chronologically. Stanzas 1-4 describe the father's skill at ploughing, observed by the admiring child. Stanza 5 reveals the child's desire to emulate the father. The final stanza delivers a sudden reversal: now the father stumbles behind the grown son. The last two lines invert the entire poem.",
    keyQuotations: [
      {
        quote: 'My father worked with a horse-plough, / The horses strained at his clicking tongue',
        analysis:
          "The opening establishes the father's mastery over animals and land. 'Clicking tongue' is a tiny, precise detail that conveys expertise — the father controls powerful horses with the smallest sound.",
      },
      {
        quote: 'An expert. He would set the wing / And fit the bright steel-pointed sock',
        analysis:
          "The blunt sentence 'An expert' stands alone, its certainty reinforced by the enjambment that makes it land with weight. The technical vocabulary ('wing', 'sock', 'headrig') demonstrates the father's specialist knowledge.",
      },
      {
        quote: 'I stumbled in his hob-nailed wake',
        analysis:
          "'Stumbled' conveys the child's clumsiness in contrast to the father's precision. 'Hob-nailed wake' merges farming boots with nautical imagery — the father is like a ship cutting through the sea, the child trailing in the disturbed water behind.",
      },
      {
        quote: 'But today / It is my father who keeps stumbling / Behind me, and will not go away',
        analysis:
          "The volta. 'But today' marks the shift from past to present. Now the father 'stumbles' — the same verb used for the child earlier, completing the role reversal. 'Will not go away' is deliberately ambiguous: is it irritation, guilt, or love?",
      },
    ],
    analysis: [
      {
        point: 'Farming imagery as metaphor',
        detail:
          "The poem operates on two levels: literally, it describes ploughing; metaphorically, it explores how children follow in their parents' footsteps (or fail to). The 'furrow' the father ploughs is also the path of life the son is expected to follow.",
      },
      {
        point: 'Half-rhymes and imperfect echoes',
        detail:
          "The half-rhymes ('plough'/'follow', 'sock'/'lacked') are central to meaning. Just as the child cannot perfectly replicate the father's skill, the rhymes cannot perfectly replicate each other. Form mirrors content.",
      },
      {
        point: 'The ambiguous ending',
        detail:
          "The final line — 'and will not go away' — resists simple interpretation. It could express the adult son's frustration with an ageing, dependent father. It could also convey the inescapable presence of parental influence. The ambiguity is the poem's greatest strength.",
      },
      {
        point: 'Monosyllabic language',
        detail:
          "Much of the poem uses short, Anglo-Saxon words ('worked', 'set', 'fit', 'bright', 'steel'). This plain diction suits the subject: farming is physical, practical work, and the language reflects that directness.",
      },
    ],
    examTips: [
      'The half-rhymes are crucial — always mention them and explain how they connect to the theme of imperfect imitation.',
      "Compare with 'Piano' (Lawrence) for another poem about a son's relationship with a parent and the pull of the past.",
      'Discuss the ambiguity of the ending — markers reward responses that explore multiple interpretations rather than fixing on one.',
      "Note the shift in tense: past tense dominates until the final stanza's 'today', which makes the reversal sudden and powerful.",
    ],
  },
  {
    title: 'The Chimney-Sweeper (from Songs of Innocence)',
    poet: 'William Blake',
    context:
      "Published in 'Songs of Innocence' (1789), during the early Industrial Revolution. Child chimney sweeps, often as young as four, were sold by impoverished parents to master sweeps. They suffered burns, respiratory disease, and frequently died young. Blake was a radical who opposed child labour, slavery, and institutional religion. The poem's Innocence version presents the horror through a child's naive voice, making the social criticism more devastating through irony.",
    themes: [
      'Social criticism and child exploitation',
      'Innocence and experience',
      'Irony and false comfort',
      'Religion as control',
    ],
    form: "Six quatrains in AABB rhyming couplets, using simple, song-like language that mimics a child's speech. The nursery-rhyme form creates a jarring contrast with the brutal subject matter.",
    structure:
      "Stanzas 1-2 establish the child speaker's situation and introduce Tom Dacre. Stanzas 3-5 describe Tom's dream of freedom — an angel releasing the sweeps from 'coffins of black'. Stanza 6 returns to grim reality: the children rise in the dark to work, comforted by the false promise that 'if all do their duty, they need not fear harm'.",
    keyQuotations: [
      {
        quote:
          "When my mother died I was very young, / And my father sold me while yet my tongue / Could scarcely cry 'weep! 'weep! 'weep! 'weep!",
        analysis:
          "The child's inability to pronounce 'sweep' produces 'weep' — a devastating pun. The child literally cries his trade and his suffering simultaneously. 'Sold me' is stated without self-pity, making the horror more acute.",
      },
      {
        quote:
          "There's little Tom Dacre, who cried when his head, / That curled like a lamb's back, was shaved",
        analysis:
          "The simile 'like a lamb's back' carries sacrificial connotations — Tom is a lamb led to slaughter. The shaving of his hair strips him of individuality and childhood, a form of dehumanisation.",
      },
      {
        quote: 'Were all of them locked up in coffins of black',
        analysis:
          "The 'coffins of black' symbolise the chimneys — narrow, dark, suffocating. But they also foreshadow the children's literal deaths. The colour 'black' connects to soot, mourning, and the loss of innocence.",
      },
      {
        quote: 'So if all do their duty, they need not fear harm',
        analysis:
          "The poem's most bitterly ironic line. The 'duty' is child labour that kills them; the 'harm' they should not fear is already being inflicted. Blake exposes how religion and social convention are used to pacify the exploited into accepting their suffering.",
      },
    ],
    analysis: [
      {
        point: 'Irony through innocence',
        detail:
          'The child narrator does not understand the horror of his own situation, but the reader does. This dramatic irony makes the poem more powerful than a direct polemic: Blake lets the reader feel the outrage that the child cannot articulate.',
      },
      {
        point: 'The dream as false comfort',
        detail:
          "Tom's dream of an angel opening coffins and children playing in green fields is a fantasy of liberation. But it functions as an opiate — it makes the children accept their suffering by promising happiness in the afterlife. Blake critiques this as a tool of social control.",
      },
      {
        point: 'Symbolism of colour',
        detail:
          "Black (soot, coffins, chimney) versus white (snow, lamb, angel) structures the poem's moral world. Yet Blake complicates this: the 'white' dream is itself a form of deception, suggesting that innocence can be weaponised against the innocent.",
      },
      {
        point: 'Critique of religion and society',
        detail:
          "The final stanza's moral — do your duty and you will not be harmed — parodies the message of the Church and the state. Blake shows how religious consolation serves the interests of those who profit from child labour, not the children themselves.",
      },
    ],
    examTips: [
      "Always identify the dramatic irony — the gap between what the child understands and what the reader understands is central to the poem's power.",
      "The 'weep'/'sweep' pun is a key technique — discuss how Blake uses the child's speech impediment to fuse trade and suffering.",
      "Compare with 'Follower' for contrasting views of childhood, or with 'Lament' for different forms of social/environmental criticism.",
      "Context matters here: briefly explain the historical reality of chimney sweeps, but do not let context dominate your analysis of the poem's language.",
    ],
  },
  {
    title: 'A Different History',
    poet: 'Sujata Bhatt',
    context:
      "Published in 'Brunizem' (1988). Bhatt was born in India in 1956 and later moved to the United States, then Germany. Her poetry frequently explores the tension between her Gujarati mother tongue and English, the language of colonial power. 'A Different History' examines how colonialism imposes language and erases indigenous culture, while also acknowledging the complex relationship colonised peoples have with the coloniser's language — loving English literature while recognising its history of oppression.",
    themes: [
      'Postcolonial identity',
      'Language and power',
      'Cultural heritage and loss',
      'The legacy of colonialism',
    ],
    form: "Free verse with no regular rhyme scheme or metre, reflecting the poem's resistance to imposed structure — just as colonised cultures resist imposed languages. The poem is divided into two distinct sections, each with a different tone.",
    structure:
      "Part 1 celebrates Indian culture: the god Pan lives on in India, and books and trees are treated with reverence. Part 2 shifts abruptly to the violence of colonialism, asking how a language can be 'torture' one generation and 'loved' by the next. The two-part structure mirrors the split identity of postcolonial subjects.",
    keyQuotations: [
      {
        quote: 'Great Pan is not dead; / he simply emigrated / to India',
        analysis:
          "The reference to Pan (Greek god of nature) being alive in India asserts that ancient, nature-based spirituality survives in Indian culture even as it has died in the West. 'Emigrated' humorously personifies a god as a migrant, connecting to themes of cultural movement.",
      },
      {
        quote:
          'Every tree is sacred / ... You must learn how to turn the pages gently / without offending the tree',
        analysis:
          "Books and trees are linked — paper comes from trees, so books carry the sacred life of the forest. This reverence contrasts with Western commodification of nature. The imperative 'You must' conveys the weight of cultural obligation.",
      },
      {
        quote: "Which language / has not been the oppressor's tongue?",
        analysis:
          "A pivotal rhetorical question that universalises the poem's concerns. It is not only English that has been used as a tool of oppression — all languages carry histories of conquest. This complicates a simplistic 'coloniser bad' reading.",
      },
      {
        quote: 'the unborn grandchildren / grow to love that strange language',
        analysis:
          "The most painful paradox: future generations come to love the language that was forced upon their ancestors through violence. 'Strange' retains a sense of foreignness even as the language becomes familiar, capturing the postcolonial condition of inhabiting a language that is both yours and not yours.",
      },
    ],
    analysis: [
      {
        point: 'The two-part structure',
        detail:
          'Part 1 is celebratory, warm, and declarative. Part 2 is questioning, troubled, and interrogative. The shift in tone mirrors the historical rupture that colonialism causes — a culture that was whole and self-sufficient is forced into a painful dialogue with its oppressor.',
      },
      {
        point: 'Language as both wound and gift',
        detail:
          "Bhatt does not simply condemn English. She acknowledges that the language of the oppressor can become a vehicle for beauty, literature, and self-expression. This ambivalence — English as 'torture' and as something 'loved' — is the poem's emotional core.",
      },
      {
        point: 'Reverence for nature and knowledge',
        detail:
          'The insistence that books must be handled with care, that trees are sacred, positions Indian culture as one of deep respect for the natural and intellectual worlds. This implicitly critiques colonial cultures that extract and exploit.',
      },
      {
        point: 'Rhetorical questions',
        detail:
          'Part 2 is structured around questions rather than statements. This refusal to provide answers reflects the unresolved nature of postcolonial identity — there are no easy solutions to the inheritance of a language born from violence.',
      },
    ],
    examTips: [
      'The two-part structure is essential to discuss — explain how the shift in tone from celebration to questioning mirrors the impact of colonialism.',
      "Avoid oversimplifying: Bhatt does NOT simply reject English. The poem's power lies in its ambivalence.",
      "Compare with 'Where I Come From' (Brewster) for contrasting explorations of cultural identity and place.",
      'The rhetorical questions in Part 2 are key techniques — discuss how they invite the reader to grapple with uncomfortable truths rather than providing neat answers.',
    ],
  },
  {
    title: 'Hunting Snake',
    poet: 'Judith Wright',
    context:
      "Published in 'The Two Fires' (1955). Wright was an Australian poet, environmentalist, and campaigner for Aboriginal land rights. Her poetry frequently engages with the Australian landscape and the human relationship with nature. 'Hunting Snake' describes a brief encounter with a large black snake — likely an eastern brown or king brown — and explores the mixture of fear and admiration that the natural world provokes.",
    themes: [
      "Nature's power and beauty",
      'Fear and awe',
      'Human insignificance',
      'Respect for the natural world',
    ],
    form: "Four quatrains with an ABAB rhyme scheme and predominantly iambic tetrameter. The tight, controlled form mirrors the precision and economy of the snake's movement. The regularity also reflects the walkers' attempt to contain their fear within rational observation.",
    structure:
      "Stanza 1 establishes the peaceful autumn walk. Stanza 2 introduces the snake — the walkers freeze. Stanza 3 describes the snake in precise physical detail. Stanza 4 records the snake's departure and the walkers' stunned silence. The poem follows a simple arc: calm, interruption, observation, departure — mirroring the brevity of the actual encounter.",
    keyQuotations: [
      {
        quote: "Sun-warmed in this late season's grace / we paused",
        analysis:
          "The opening creates a gentle, idyllic mood. 'Grace' suggests beauty and ease. 'Late season' hints at autumn — a time of transition. The peaceful tone makes the snake's arrival more startling.",
      },
      {
        quote: 'We froze half-through a pace',
        analysis:
          "The caesura after 'froze' enacts the sudden stop. 'Half-through a pace' captures the mid-stride freeze with physical precision — the walkers are literally caught between steps, suspended in the moment.",
      },
      {
        quote: 'Cold, dark and splendid, he moved his survey / on us with narrowed eye',
        analysis:
          "The triple adjective 'Cold, dark and splendid' balances threat ('cold, dark') with beauty ('splendid'). The snake 'surveys' the humans — reversing the expected power dynamic. The humans are being observed, not the observer. 'Narrowed eye' suggests intelligence and assessment.",
      },
      {
        quote: 'We took a deep breath, and went on walking',
        analysis:
          "The understated final line captures the aftershock. The 'deep breath' acknowledges the intensity of the encounter. 'Went on walking' suggests life continues, but the encounter has left a mark. The simplicity is deceptive — it conceals awe.",
      },
    ],
    analysis: [
      {
        point: 'Precise, economical imagery',
        detail:
          "Wright describes the snake with scientific precision: 'reided ropes', 'diamond scale', 'survey'. There is no exaggeration or sentimentality. The restraint mirrors the respect the poem advocates — the snake is observed, not dramatised.",
      },
      {
        point: 'Reversal of power',
        detail:
          "The humans freeze; the snake moves freely. The snake 'surveys' the humans; the humans are passive. Wright reverses the anthropocentric assumption that humans dominate nature. In this encounter, the snake is sovereign.",
      },
      {
        point: 'Fear and beauty coexisting',
        detail:
          "'Splendid' is the key word. The snake is dangerous, yet beautiful. Wright refuses to separate these qualities, suggesting that true appreciation of nature requires accepting both. This is not the 'tamed' nature of gardens but the wild, indifferent natural world.",
      },
      {
        point: 'Brevity and structure',
        detail:
          "The poem is only 16 lines — as brief as the encounter itself. Each stanza has a clear function (setting, interruption, description, departure), creating a tightly controlled arc. Nothing is wasted, mirroring the snake's efficient movement.",
      },
    ],
    examTips: [
      "Focus on the coexistence of fear and admiration — 'Cold, dark and splendid' is the poem's most important phrase.",
      'Discuss the reversal of the human-animal power dynamic: the snake observes the humans, not the other way around.',
      "Compare with 'Hawk Roosting' (Hughes) for contrasting presentations of powerful animals — the hawk speaks, the snake is observed in silence.",
      "The poem's brevity is a technique: explain how the short, tight form mirrors the fleeting nature of the encounter.",
    ],
  },
  {
    title: 'Lament',
    poet: 'Gillian Clarke',
    context:
      "Published in 'Five Fields' (1998). Clarke, the former National Poet of Wales, wrote 'Lament' in response to the 1991 Gulf War, which caused catastrophic environmental damage. Oil wells were set ablaze, millions of barrels of oil were dumped into the Persian Gulf, and wildlife was devastated. The poem mourns the environmental casualties of war — the creatures and landscapes destroyed by human conflict.",
    themes: [
      'Environmental destruction',
      'War and its consequences',
      'Human responsibility',
      'Elegy and mourning',
    ],
    form: "Seven three-line stanzas (tercets) plus a final single line. Free verse with no regular rhyme scheme. Each stanza begins with 'For' — an anaphoric structure that echoes the litany of a funeral prayer or lament, listing the dead.",
    structure:
      "The poem accumulates images of destruction, moving from individual creatures (turtle, cormorant, whale) to broader environmental collapse (ocean, sun, tern's eggs). The final single line — 'For the green turtle with her pulsing burden' — returns to the turtle from the opening, creating a circular structure that suggests the cycle of destruction is unending.",
    keyQuotations: [
      {
        quote: 'For the green turtle with her pulsing burden',
        analysis:
          "Opens and closes the poem. 'Pulsing burden' refers to the turtle's eggs — alive, fragile, full of potential. 'Burden' carries a double meaning: the eggs are both a physical weight and a responsibility. The turtle carries the future of her species, now threatened.",
      },
      {
        quote: 'For the cormorant in his funeral silk',
        analysis:
          "The cormorant, coated in oil, appears to wear 'funeral silk' — a metaphor that transforms pollution into mourning dress. The bird attends its own funeral. 'Silk' is bitterly ironic: oil is a luxury commodity, but here it is a death shroud.",
      },
      {
        quote: 'For the ocean wood-pigeon, / the ocean dolphin',
        analysis:
          "The naming of individual species creates a roll-call of the dead, each 'For' functioning like a prayer. The simplicity of the naming — no adjectives, no elaboration — gives the lines a dignified, mournful quality.",
      },
      {
        quote: 'For the soldier in his uniform of fire',
        analysis:
          "The only human victim mentioned. 'Uniform of fire' transforms the military uniform into flames — the soldier is consumed by the war he serves. Clarke does not distinguish between human and animal victims; all are casualties of the same violence.",
      },
    ],
    analysis: [
      {
        point: "Anaphora: 'For'",
        detail:
          "Every stanza begins with 'For', creating a cumulative, liturgical rhythm. The repetition evokes a funeral service where each loss is individually named and mourned. The relentlessness of the repetition mirrors the relentlessness of the destruction.",
      },
      {
        point: 'Elegy form',
        detail:
          "A lament is a formal expression of grief. Clarke adapts the elegiac tradition to mourn not a single person but an entire ecosystem. By treating environmental destruction with the gravity usually reserved for human death, she elevates nature's suffering to the level of tragedy.",
      },
      {
        point: 'Circular structure',
        detail:
          'The poem begins and ends with the green turtle, creating a loop. This circularity suggests that environmental destruction is cyclical and ongoing — each war brings the same devastation. There is no resolution, only repetition.',
      },
      {
        point: 'The soldier among the animals',
        detail:
          'By placing the soldier alongside turtles, cormorants, and dolphins, Clarke refuses to privilege human suffering. War destroys everything — human and non-human alike. The soldier is as much a victim as the wildlife, consumed by forces beyond his control.',
      },
    ],
    examTips: [
      "The anaphora ('For') is the poem's defining technique — always discuss it and explain its liturgical, cumulative effect.",
      "Compare with 'The Chimney-Sweeper' (Blake) for different forms of social/political criticism through poetry.",
      'Discuss the circular structure and explain how it reinforces the theme of ongoing, cyclical destruction.',
      'Note that Clarke mourns human and animal victims equally — this is a deliberate ethical stance, not an oversight.',
    ],
  },
]

/* ─── Comparison pairings ─────────────────────────────────────── */

const comparisonPairings = [
  {
    theme: 'Time and immortality',
    poems: 'Sonnet 18 & The Chimney-Sweeper',
    explanation:
      'Shakespeare claims poetry can defeat time and preserve beauty; Blake shows how time and society destroy innocent children. Both engage with the idea of what endures, but Shakespeare is optimistic while Blake is bitterly ironic.',
  },
  {
    theme: 'Parent-child relationships',
    poems: 'Follower & The Chimney-Sweeper',
    explanation:
      'Heaney presents a loving father-son bond strained by ageing and role reversal; Blake depicts a father who sells his child into slavery. The contrast highlights how family can be a source of both security and exploitation.',
  },
  {
    theme: "Nature's power",
    poems: 'Hunting Snake & Lament',
    explanation:
      'Wright presents nature as awe-inspiring and sovereign — the snake commands human respect. Clarke shows nature as vulnerable, destroyed by human warfare. Together they reveal the paradox: nature is both more powerful than humanity and defenceless against it.',
  },
  {
    theme: 'Cultural identity and language',
    poems: 'A Different History & Follower',
    explanation:
      "Bhatt explores how colonialism imposes a 'strange language' that future generations come to love; Heaney explores the tension between his farming heritage and his literary identity. Both poets negotiate between inherited culture and the self they have become.",
  },
  {
    theme: 'Social criticism',
    poems: 'The Chimney-Sweeper & Lament',
    explanation:
      'Blake critiques the exploitation of children by industrial society and institutionalised religion; Clarke critiques the environmental destruction caused by war. Both use poetic form to give voice to the voiceless — children and nature respectively.',
  },
  {
    theme: 'Fear, awe, and the sublime',
    poems: 'Hunting Snake & Sonnet 18',
    explanation:
      "Wright captures a moment of awe in the face of nature's dangerous beauty; Shakespeare captures the awe of human beauty and its fragility. Both poems freeze a moment in time — Wright through the brevity of the encounter, Shakespeare through the permanence of the poem.",
  },
]

/* ─── Assessment Objectives ───────────────────────────────────── */

const assessmentObjectives = [
  {
    code: 'Textual Knowledge',
    title: 'Textual Knowledge & Personal Response',
    description:
      'Show detailed knowledge of the poem and offer a personal, informed response. Use precise references and quotations, not just general summaries.',
    howToApply:
      "Embed short quotations into your sentences. For example: Shakespeare's metaphor of 'summer's lease' presents beauty as borrowed, not owned.",
  },
  {
    code: "Writer's Methods",
    title: 'Language, Form & Structure',
    description:
      'Analyse HOW the poet creates meaning through word choice, imagery, form (sonnet, free verse, etc.), and structural features (volta, anaphora, circular structure).',
    howToApply:
      "Always ask 'Why has the poet chosen THIS word/form/structure?' For example: Clarke's anaphoric 'For' creates a liturgical rhythm that transforms the poem into a funeral prayer.",
  },
  {
    code: 'Interpretation',
    title: 'Comparison',
    description:
      'When comparing poems, sustain the comparison throughout your response. Do not write about Poem A then Poem B. Weave analysis of both poems together, using connectives.',
    howToApply:
      "Use comparative connectives: 'Similarly', 'In contrast', 'While Wright presents the snake as sovereign, Clarke shows nature as vulnerable to human destruction.'",
  },
  {
    code: 'Personal Response',
    title: 'Context',
    description:
      'Use biographical, historical, or literary context to illuminate the text — not as a bolt-on paragraph. Context should explain WHY the poet writes as they do.',
    howToApply:
      "Integrate context: 'Blake, writing during the Industrial Revolution, uses the child's naive voice to expose the cruelty that society has normalised.'",
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function SongsOfOurselvesV1Page() {
  const locale = useLocale()
  const tr = (en: string): string => {
    if (locale !== 'ar') return en
    for (const v of Object.values(STRINGS)) if (v.en === en) return v.ar || en
    return en
  }

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature (0475)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Songs of Ourselves &mdash; Volume 1
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A comprehensive guide to the CAIE poetry anthology. Detailed analysis of six key poems
            with context, quotations, comparison techniques, and assessment objective guidance for
            Paper 1.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Cambridge syllabus set-text notice ─────────────────────── */}
        <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-foreground">
          <p className="font-semibold">{tr(`Set-text notice`)}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            This cluster is based on the Cambridge IGCSE 0475 syllabus{' '}
            <em>{tr(`Songs of Ourselves`)}</em> Vol&nbsp;1 Part&nbsp;4 plus the Ted Hughes cluster (
            <em>{tr(`The Thought-Fox`)}</em>, <em>{tr(`Hawk Roosting`)}</em>, <em>Wind</em>).
            Cambridge International rotates set texts every two years &mdash; always confirm via{' '}
            <a
              href="https://www.cambridgeinternational.org/syllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridgeinternational.org/syllabus
            </a>{' '}
            before relying on this list for the current exam window.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              {tr(`Verified Vol&nbsp;1 Part&nbsp;4 poems:`)}
            </strong>{' '}
            <em>{tr(`The City Planners`)}</em> (Margaret Atwood, in copyright),{' '}
            <em>{tr(`Funeral Blues`)}</em> (W&nbsp;H Auden &mdash; the 1940 revised version, Faber,
            in copyright; UK&nbsp;PD&nbsp;2044), <em>Rain</em> (Edward Thomas, public domain),{' '}
            <em>{tr(`He Never Expected Much`)}</em> (Thomas Hardy, public domain), and{' '}
            <em>{tr(`On Finding a Small Fly Crushed in a Book`)}</em> (Charles Tennyson Turner,
            public domain). The Ted Hughes cluster (Faber) is also in copyright.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Anthology publisher: Cambridge University Press &mdash; permissions queries via{' '}
            <a
              href="https://www.cambridge.org/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridge.org/permissions
            </a>
            .
          </p>
        </div>

        {/* ── Cluster rights notice ───────────────────────────────── */}
        <div className="mb-10 rounded-lg border border-border bg-muted/50 p-4 text-xs text-muted-foreground">
          <p>
            <strong className="text-foreground">{tr(`Rights notice:`)}</strong> Four poems in the
            verified Vol&nbsp;1 Part&nbsp;4 + Hughes clusters are in copyright (Atwood, Auden,
            Hughes&nbsp;&times;3). Quotations on this page are short fair-dealing extracts used for
            educational analysis under UK&nbsp;CDPA s.30 (criticism and review).
          </p>
        </div>

        {/* ── Legacy-anthology disclosure ─────────────────────────── */}
        <div className="mb-10 rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground shadow-sm">
          <p>
            <strong className="text-foreground">{tr(`Note on poems analysed below:`)}</strong> The
            poem-by-poem analyses on this page cover commonly-studied{' '}
            <em>{tr(`Songs of Ourselves`)}</em> Vol&nbsp;1 selections from earlier exam cycles
            (Sonnet&nbsp;18, Follower, The Chimney-Sweeper, A Different History, Hunting Snake,
            Lament). Dedicated analyses for the verified Vol&nbsp;1 Part&nbsp;4 cluster (Atwood,
            Auden, Thomas, Hardy, Tennyson Turner) and the Ted Hughes cluster will be published
            separately. Use these legacy analyses as templates for technique, comparison, and
            assessment-objective coverage rather than as the current Part&nbsp;4 set list.
          </p>
        </div>

        {/* ── Anthology overview ──────────────────────────────────── */}
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-2xl font-bold text-foreground">
            About the Anthology
          </h2>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{tr(`Songs of Ourselves &mdash; Volume 1`)}</CardTitle>
              <CardDescription>{tr(`Cambridge International Poetry Anthology`)}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">{tr(`Songs of Ourselves Volume 1`)}</strong> is
                the set poetry anthology for Cambridge IGCSE English Literature (0475) and Cambridge
                O Level Literature in English (2010). It contains poems spanning six centuries, from
                Shakespeare to contemporary poets, organised into thematic sections.
              </p>
              <p>
                For <strong>{tr(`Paper 1 (Poetry and Prose)`)}</strong>, you answer one question on
                a set poem from the anthology. Questions may ask for close analysis of an extract or
                comparison of two poems. The best responses demonstrate detailed knowledge of the
                poems, analysis of the poet&rsquo;s methods, and personal engagement with the text.
              </p>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-semibold text-foreground">{tr(`What you need to know`)}</h4>
                <ul className="mt-2 space-y-1">
                  <li>
                    &bull; You will study a selection of poems from the anthology, not all of them
                  </li>
                  <li>
                    &bull; Questions may focus on a single poem or ask you to compare two poems
                  </li>
                  <li>
                    &bull; The poems are <strong>not</strong> provided in the exam &mdash; you must
                    know them from memory
                  </li>
                  <li>
                    &bull; You are assessed on knowledge, analysis of methods, comparison, and
                    context (all four skills)
                  </li>
                  <li>
                    &bull; Responses should be <strong>analytical</strong>, not narrative &mdash;
                    focus on how and why, not what happens
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <hr className="my-10 border-border" />

        {/* ── CAIE Assessment Objectives ──────────────────────────── */}
        <section aria-labelledby="ao-heading">
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            CAIE Assessment Objectives Applied to Poetry
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding what each skill requires helps you structure responses that hit every
            marking guide criterion.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {assessmentObjectives.map((ao) => (
              <Card key={ao.code}>
                <CardHeader>
                  <CardTitle>
                    <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {ao.code}
                    </span>
                    {ao.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{ao.description}</p>
                  <div className="rounded-lg border border-border bg-muted/50 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      How to apply this
                    </p>
                    <p className="mt-1">{ao.howToApply}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Poem-by-poem analysis ───────────────────────────────── */}
        <section aria-labelledby="poems-heading">
          <h2 id="poems-heading" className="text-2xl font-bold text-foreground">
            Poem-by-Poem Analysis
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each analysis covers context, form &amp; structure, key quotations with commentary,
            detailed analysis points, and exam tips. These six poems represent the range of periods,
            cultures, and themes in the anthology.
          </p>

          <div className="mt-8 space-y-10">
            {poems.map((poem, idx) => (
              <article
                key={idx}
                id={poem.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-md"
              >
                {/* Poem header */}
                <div className="border-b border-border bg-gradient-to-r from-primary/5 to-transparent px-5 py-4 sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Poem {idx + 1} of {poems.length}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{poem.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">by {poem.poet}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {poem.themes.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 px-5 py-5 sm:px-6">
                  {/* Context */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Context</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{poem.context}</p>
                  </div>

                  {/* Form & Structure */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {tr(`Form &amp; Structure`)}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <strong className="text-foreground">Form:</strong> {poem.form}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <strong className="text-foreground">Structure:</strong> {poem.structure}
                    </p>
                  </div>

                  {/* Key Quotations with Analysis */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Key Quotations &amp; Analysis
                    </h4>
                    <div className="mt-2 space-y-3">
                      {poem.keyQuotations.map((q, qi) => (
                        <div
                          key={qi}
                          className="rounded-lg border-l-4 border-primary/40 bg-muted p-3"
                        >
                          <p className="text-sm italic text-foreground">&ldquo;{q.quote}&rdquo;</p>
                          <p className="mt-1.5 text-sm text-muted-foreground">{q.analysis}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed analysis */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {tr(`Detailed Analysis`)}
                    </h4>
                    <div className="mt-2 space-y-3">
                      {poem.analysis.map((a, ai) => (
                        <div key={ai} className="rounded-lg bg-muted p-3">
                          <p className="text-sm font-medium text-foreground">{a.point}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exam Tips */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Exam Tips</h4>
                    <ul className="mt-2 space-y-1.5">
                      {poem.examTips.map((tip, ti) => (
                        <li
                          key={ti}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Comparing poems for Paper 1 ─────────────────────────── */}
        <section aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="text-2xl font-bold text-foreground">
            How to Compare Poems for CAIE Paper 1
          </h2>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{tr(`Integrated Comparison Technique`)}</CardTitle>
              <CardDescription>
                Cambridge rewards sustained, woven comparison &mdash; not &ldquo;Poem A then Poem
                B&rdquo;
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="font-semibold text-foreground">{tr(`Structuring your response`)}</h4>
                <ol className="mt-2 list-inside list-decimal space-y-1">
                  <li>
                    Open with a thesis that identifies the key similarity or difference between the
                    two poems
                  </li>
                  <li>
                    Analyse a technique or theme in Poem A, then immediately compare it with the
                    equivalent in Poem B
                  </li>
                  <li>
                    Use comparative connectives throughout: &ldquo;Similarly&rdquo;, &ldquo;In
                    contrast&rdquo;, &ldquo;While... [Poet A]... [Poet B]...&rdquo;, &ldquo;Both
                    poets... however...&rdquo;
                  </li>
                  <li>
                    Conclude by evaluating which poem is more effective or how they complement each
                    other
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">{tr(`What to compare`)}</h4>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {[
                    {
                      label: 'Theme',
                      detail:
                        'How does each poem explore the topic? What attitudes does each poet convey?',
                    },
                    {
                      label: 'Tone & mood',
                      detail: 'Is the tone celebratory, elegiac, angry, reflective, ironic?',
                    },
                    {
                      label: 'Form & structure',
                      detail:
                        'Sonnet vs. free verse? Regular vs. irregular stanzas? How does form support meaning?',
                    },
                    {
                      label: 'Language & imagery',
                      detail:
                        'Metaphor, simile, personification, sound devices — how do they differ?',
                    },
                    {
                      label: 'Speaker & perspective',
                      detail:
                        'First person vs. third person? Personal vs. dramatic? Child vs. adult?',
                    },
                    {
                      label: 'Ending',
                      detail:
                        'How does each poem resolve (or refuse to resolve)? Open or closed ending?',
                    },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-border p-3">
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">
                  {tr(`Useful comparative connectives`)}
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    'Similarly,',
                    'In contrast,',
                    'While [Poet A] uses..., [Poet B] instead...',
                    'Both poets explore... however...',
                    'Unlike...',
                    'This differs from...',
                    'Equally,',
                    'Whereas...',
                    'Conversely,',
                    'Just as... so too...',
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison pairings */}
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Suggested Comparison Pairings
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisonPairings.map((pair) => (
              <Card key={pair.theme}>
                <CardHeader>
                  <CardTitle className="text-sm">{pair.theme}</CardTitle>
                  <CardDescription className="text-xs">{pair.poems}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pair.explanation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

        <p className="mt-8 rounded-lg border border-border bg-muted/50 p-4 text-xs text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> This resource is an independent
          study aid and is not endorsed by or affiliated with Cambridge Assessment International
          Education (CAIE). All poem references are for educational analysis purposes. Exam board
          specifications may change &mdash; always check the latest syllabus.
        </p>
      </div>
    </>
  )
}
