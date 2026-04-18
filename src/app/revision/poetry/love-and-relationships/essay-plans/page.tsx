'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  FileText,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Target,
  BookOpen,
  Info,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/* ── Essay plan data ───────────────────────────────────────────── */

interface EssayPlan {
  id: number
  question: string
  poemA: string
  poemB: string
  thesis: string
  paragraphs: {
    topic: string
    poemAPoint: string
    poemAQuote: string
    poemBPoint: string
    poemBQuote: string
    link: string
  }[]
  conclusion: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    id: 1,
    question:
      'Compare how poets present desire in "Sonnet 29" and one other poem from the anthology.',
    poemA: 'Sonnet 29 — "I think of thee!"',
    poemB: "Love's Philosophy",
    thesis:
      'Both Barrett Browning and Shelley present speakers consumed by desire, yet where Barrett Browning ultimately rejects fantasy in favour of physical presence, Shelley remains trapped in a rhetorical plea that the beloved never answers -- suggesting that desire fulfilled and desire frustrated require fundamentally different poetic forms.',
    paragraphs: [
      {
        topic: 'How natural imagery embodies desire',
        poemAPoint:
          'Barrett Browning uses an extended vine/tree metaphor to present desire as organic growth that becomes smothering.',
        poemAQuote: '"my thoughts do twine and bud / About thee, as wild vines"',
        poemBPoint:
          'Shelley catalogues natural pairings (rivers/ocean, winds/each other) to argue that union is the law of nature.',
        poemBQuote: '"nothing in the world is single"',
        link: 'Both poets root desire in the natural world, but Barrett Browning shows nature as dangerous (vines that "hide the wood") while Shelley presents it as harmonious evidence for his argument.',
      },
      {
        topic: 'The speaker\'s agency and control',
        poemAPoint:
          'Barrett Browning\'s speaker moves from passive obsession to active command -- she uses imperative verbs to demand her lover\'s presence.',
        poemAQuote: '"Renew thy presence... set thy trunk all bare"',
        poemBPoint:
          'Shelley\'s speaker never gains control; the poem ends on a rhetorical question that receives no answer, leaving him powerless.',
        poemBQuote: '"What are all these kissings worth / If thou kiss not me?"',
        link: 'Barrett Browning presents female desire as assertive and ultimately fulfilled, subverting Victorian gender norms. Shelley\'s male speaker, by contrast, remains in a position of supplication -- the desired kiss never comes.',
      },
      {
        topic: 'Form and structure as expressions of desire',
        poemAPoint:
          'The Petrarchan sonnet form gives Barrett Browning a volta at line 6, structurally enacting the shift from fantasy to reality.',
        poemAQuote: '"I will not have my thoughts instead of thee"',
        poemBPoint:
          'Shelley uses two mirrored stanzas with an identical closing question, creating a circular structure that suggests desire is stuck in repetition.',
        poemBQuote: 'The repeated rhetorical question structure',
        link: 'Barrett Browning\'s form moves towards resolution; Shelley\'s circles back, reinforcing the difference between desire answered and desire endlessly deferred.',
      },
    ],
    conclusion:
      'Ultimately, Barrett Browning presents desire as something that can be actively shaped and fulfilled through the rejection of idealisation, while Shelley\'s desire remains a persuasive performance with no resolution. The contrast reveals how poetic form itself can embody the emotional state of desire -- linear when it is resolved, circular when it is not.',
  },
  {
    id: 2,
    question:
      'Compare how poets present the breakdown of love in "Neutral Tones" and one other poem.',
    poemA: 'Neutral Tones',
    poemB: 'When We Two Parted',
    thesis:
      'Both Hardy and Byron present love\'s ending as a wound that refuses to heal, but where Hardy turns the memory into a bleak symbolic landscape drained of colour, Byron structures his grief around the social shame of secrecy -- revealing that lost love hurts differently depending on whether it can be publicly mourned.',
    paragraphs: [
      {
        topic: 'How setting reflects emotional desolation',
        poemAPoint:
          'Hardy creates a bleached-out winter landscape that mirrors emotional deadness -- the pond, white sun, and fallen leaves form an anti-romantic tableau.',
        poemAQuote: '"the sun was white, as though chidden of God"',
        poemBPoint:
          'Byron opens with physical coldness -- "pale" cheeks and cold kisses -- but his landscape is internal and social rather than natural.',
        poemBQuote: '"Pale grew thy cheek and cold, / Colder thy kiss"',
        link: 'Both poets use coldness as a metaphor for love\'s death, but Hardy externalises it into nature while Byron locates it in the body itself, suggesting a more visceral, physical grief.',
      },
      {
        topic: 'The role of memory and time',
        poemAPoint:
          'Hardy\'s poem moves between past and present but collapses the distinction -- the memory has permanently stained all subsequent experience of love.',
        poemAQuote: '"keen lessons that love deceives"',
        poemBPoint:
          'Byron structures the poem chronologically (parting, hearing the name, imagining a future meeting) and the grief intensifies with each stage.',
        poemBQuote: '"In silence and tears"',
        link: 'For Hardy, time offers no relief -- the lesson is permanently learned. For Byron, time actively worsens the pain because public exposure of the affair compounds the original loss.',
      },
      {
        topic: 'Bitterness versus grief',
        poemAPoint:
          'Hardy\'s tone is bitterly detached -- the final image of the lover\'s smile as "the deadest thing" suggests contempt has replaced feeling.',
        poemAQuote: '"your face... the deadest thing / Alive enough to have strength to die"',
        poemBPoint:
          'Byron\'s tone is mournful rather than bitter; his grief is sharpened by the impossibility of publicly naming his loss.',
        poemBQuote: '"They name thee before me, / A knell to mine ear"',
        link: 'Hardy arrives at a kind of nihilistic clarity, while Byron remains trapped in unresolvable sorrow. The difference is structural: Hardy\'s love ended mutually, while Byron\'s was a secret that society can still weaponise against him.',
      },
    ],
    conclusion:
      'Both poems present love\'s aftermath as more powerful than love itself. Hardy\'s spare, drained imagery makes the memory a permanent scar on perception, while Byron\'s rhythmic lament turns grief into something closer to shame. Together, they suggest that how love ends -- publicly or privately -- determines the particular quality of the pain it leaves behind.',
  },
  {
    id: 3,
    question:
      'Compare how poets present parent-child relationships in "Walking Away" and one other poem.',
    poemA: 'Walking Away',
    poemB: 'Follower',
    thesis:
      'Both Day Lewis and Heaney present the parent-child bond as defined by a painful reversal of roles, but where Day Lewis frames letting go as an act of love that costs the parent dearly, Heaney complicates admiration with guilt as the child who once followed becomes the one who is followed -- revealing how family love can be shadowed by unease as well as tenderness.',
    paragraphs: [
      {
        topic: 'Physical imagery of closeness and distance',
        poemAPoint:
          'Day Lewis tracks his son physically walking away, using the image of a "satellite / Wrenched from its orbit" to convey the gravitational pull of parental love being broken.',
        poemAQuote: '"like a satellite / Wrenched from its orbit"',
        poemBPoint:
          'Heaney uses precise physical detail -- his father\'s shoulders, the plough, the "polished sod" -- to evoke a childhood closeness defined by admiration of the father\'s body at work.',
        poemBQuote: '"His shoulders globed like a full sail strung"',
        link: 'Both poets use physical imagery to express emotional bonds, but Day Lewis shows separation as cosmic violence while Heaney shows closeness through earthly, tactile detail. The contrast in register reveals different aspects of family love.',
      },
      {
        topic: 'The reversal of roles',
        poemAPoint:
          'The reversal in Walking Away is a single, decisive moment: the father watches the son leave and must accept that love means releasing control.',
        poemAQuote: '"love is proved in the letting go"',
        poemBPoint:
          'Heaney\'s reversal is gradual and unsettling -- the final couplet\'s confession that his father now "keeps stumbling / Behind me" transforms admiration into guilt.',
        poemBQuote: '"It is my father who keeps stumbling / Behind me, and will not go away"',
        link: 'Day Lewis presents the reversal as noble sacrifice; Heaney presents it as uncomfortable obligation. This difference reveals two very different emotional truths about family: that letting go can be an act of love, and that being followed can feel like a burden.',
      },
      {
        topic: 'Time and memory as structural devices',
        poemAPoint:
          'Day Lewis anchors the poem in a single remembered afternoon ("eighteen years ago") and draws a direct line from that moment to a present understanding.',
        poemAQuote: '"eighteen years ago, almost to the day"',
        poemBPoint:
          'Heaney\'s poem moves from childhood memory to present tense in the final two lines, with the shift happening abruptly and without preparation.',
        poemBQuote: 'The sudden present tense of the final couplet',
        link: 'Day Lewis uses time to build wisdom; Heaney uses it to deliver a shock. The structural handling of memory reveals whether the speaker has made peace with the parent-child shift or remains troubled by it.',
      },
    ],
    conclusion:
      'Both poems use memory to explore how parent-child roles inevitably reverse, but they arrive at very different emotional destinations. Day Lewis finds consolation in the idea that separation proves love. Heaney offers no such comfort -- only the honest, unresolved discomfort of watching a parent diminish. Together, they show that family love is not a single emotion but a spectrum from tender sacrifice to uneasy guilt.',
  },
  {
    id: 4,
    question:
      'Compare how poets present obsessive love in "Porphyria\'s Lover" and one other poem.',
    poemA: "Porphyria's Lover",
    poemB: 'The Farmer\'s Bride',
    thesis:
      'Both Browning and Mew create speakers whose desire for possession distorts their perception of the beloved, but where Browning\'s speaker acts decisively to freeze the moment through murder, Mew\'s farmer is paralysed by longing he cannot act upon -- exposing two faces of the same possessive impulse: violent control and agonised restraint.',
    paragraphs: [
      {
        topic: 'The objectification of the beloved',
        poemAPoint:
          'Browning\'s speaker reduces Porphyria to a beautiful object after death -- her head rests on his shoulder "as a shut bud that holds a bee", and he treats her corpse as a doll to be arranged.',
        poemAQuote: '"I propped her head up as before"',
        poemBPoint:
          'Mew\'s farmer describes his wife through animal and nature imagery -- she is "like a hare", "shy as a leveret" -- never as a thinking person with interiority.',
        poemBQuote: '"like a mouse... shy as a leveret"',
        link: 'Both speakers deny their beloved full humanity, but Browning\'s objectification is possessive triumph while Mew\'s is bewildered incomprehension. Neither speaker can conceive of the beloved as an independent subject.',
      },
      {
        topic: 'The role of silence and power',
        poemAPoint:
          'Porphyria\'s voice is silenced permanently through murder; the speaker monopolises the narrative completely, and "God has not said a word" -- even divine judgement is absent.',
        poemAQuote: '"And yet God has not said a word!"',
        poemBPoint:
          'The farmer\'s bride never speaks in the poem; her terror is described entirely through the farmer\'s perspective, which cannot understand it.',
        poemBQuote: '"her eyes, her hair, her hair!"',
        link: 'Both poets use the beloved\'s silence to expose the speaker\'s limitations. Browning\'s silence is imposed through violence; Mew\'s silence reveals the farmer\'s inability to communicate across the gulf of gender and power.',
      },
      {
        topic: 'Form as a container for obsession',
        poemAPoint:
          'Browning uses a dramatic monologue with a single flowing stanza and regular rhyme -- the smooth, controlled form mirrors the speaker\'s chilling composure.',
        poemAQuote: 'The unbroken stanza form',
        poemBPoint:
          'Mew uses irregular stanza lengths and shifting rhyme, creating a form that becomes increasingly fractured as the farmer\'s restraint deteriorates.',
        poemBQuote: 'The disintegrating final stanza',
        link: 'Browning\'s controlled form contains madness within apparent reason; Mew\'s deteriorating form exposes madness breaking through. Both use form to dramatise the relationship between desire and self-control.',
      },
    ],
    conclusion:
      'Both poems use the dramatic monologue tradition to reveal obsessive love from within, but they present opposite manifestations of the same possessive impulse. Browning\'s speaker achieves a horrifying satisfaction; Mew\'s speaker reaches no resolution, only mounting desperation. Together, they suggest that possessive love -- whether it acts or merely yearns -- is fundamentally dehumanising to the beloved.',
  },
  {
    id: 5,
    question:
      'Compare how poets use nature to explore love in "Winter Swans" and one other poem.',
    poemA: 'Winter Swans',
    poemB: "Love's Philosophy",
    thesis:
      'Both Sheers and Shelley use the natural world as a mirror for human relationships, but where Shelley constructs a logical argument from nature\'s unity to plead for physical intimacy, Sheers allows nature to enact reconciliation without words -- suggesting that the most honest expressions of love may be those that require no argument at all.',
    paragraphs: [
      {
        topic: 'Nature as a model for human connection',
        poemAPoint:
          'Sheers presents the swans as a wordless lesson in reconciliation -- they "tipped and "righted" themselves, demonstrating how couples can recover balance naturally.',
        poemAQuote: '"they righted themselves... porcelain over the stilling water"',
        poemBPoint:
          'Shelley lists natural pairings (mountains/waves, sunlight/earth) as evidence that everything in nature mingles, making human separation unnatural.',
        poemBQuote: '"nothing in the world is single; / All things by a law divine"',
        link: 'Sheers uses a single, observed natural moment to suggest emotional truth; Shelley catalogues many examples to build a rhetorical case. The difference is between nature experienced and nature argued.',
      },
      {
        topic: 'Silence versus persuasion',
        poemAPoint:
          'The couple in Winter Swans barely speak -- their reconciliation happens through shared observation and the instinctive reaching of hands, not through declarations.',
        poemAQuote: '"our hands, swum the distance between us"',
        poemBPoint:
          'Shelley\'s speaker is entirely verbal -- the poem is an extended argument aimed at persuading the beloved, ending with a direct question.',
        poemBQuote: '"What are all these kissings worth / If thou kiss not me?"',
        link: 'Sheers suggests that genuine emotional repair happens below language; Shelley relies on language entirely. This contrast reveals two fundamentally different models of how love communicates.',
      },
      {
        topic: 'Structure and resolution',
        poemAPoint:
          'Sheers uses tercets (three-line stanzas) throughout but ends with a couplet -- the formal shift from three to two enacts the couple coming together.',
        poemAQuote: 'The closing couplet form',
        poemBPoint:
          'Shelley\'s two identical stanzas circle back to the same unanswered question, creating a structure of frustrated repetition.',
        poemBQuote: 'The repeated stanza structure',
        link: 'Sheers\'s form resolves; Shelley\'s does not. The structural contrast mirrors the emotional outcome: reconciliation achieved versus desire unfulfilled.',
      },
    ],
    conclusion:
      'Both poems look to nature for models of human intimacy, but they draw opposite conclusions about how love works. Sheers shows that watching nature can heal a relationship without words, while Shelley shows that even the most eloquent argument from nature cannot guarantee reciprocation. Together, they suggest that love is more likely to be mended by shared experience than by persuasion.',
  },
  {
    id: 6,
    question:
      'Compare how poets present memory and the past in "Before You Were Mine" and one other poem.',
    poemA: 'Before You Were Mine',
    poemB: 'Eden Rock',
    thesis:
      'Both Duffy and Causley use memory to reach towards a version of a parent they never fully knew, but where Duffy possessively claims her mother\'s past as her own, Causley creates a luminous, otherworldly scene that his parents inhabit without him -- revealing how memory can be either an act of reclamation or an act of surrender.',
    paragraphs: [
      {
        topic: 'The speaker\'s relationship to the past',
        poemAPoint:
          'Duffy projects herself backwards into her mother\'s pre-motherhood life, using possessive language to claim a past she was not part of.',
        poemAQuote: '"I\'m ten years away from the corner you dress in"',
        poemBPoint:
          'Causley describes his parents at Eden Rock with luminous, hyper-specific detail, but he remains on the opposite side of the stream -- present as an observer but separated.',
        poemBQuote: '"my mother... my father... They wave at me"',
        link: 'Duffy crosses the boundary between present and past by force of imagination; Causley respects the boundary and watches from the other side. Both are acts of love, but Duffy\'s is possessive while Causley\'s is accepting.',
      },
      {
        topic: 'How imagery conveys longing',
        poemAPoint:
          'Duffy\'s imagery is vivid and sensory -- the "polka-dot dress", the "thousand eyes" of the dance hall, the "high-heeled red shoes" -- recreating her mother\'s glamour with cinematic intensity.',
        poemAQuote: '"your polka-dot dress blows round your legs. Marilyn"',
        poemBPoint:
          'Causley\'s imagery is precise but dreamlike -- the "white cloth" spread over grass, the "thermos" -- ordinary details made luminous by the knowledge that these parents are dead.',
        poemBQuote: '"a white cloth... the same three plates"',
        link: 'Duffy\'s imagery is glamorous and public; Causley\'s is domestic and private. Both use specificity to make the past feel real, but the emotional register differs -- Duffy envies; Causley yearns.',
      },
      {
        topic: 'The poem\'s emotional destination',
        poemAPoint:
          'Duffy ends by literally possessing her mother -- "your ghost clatters toward me" in the mother\'s old shoes. The daughter has taken ownership of the mother\'s past.',
        poemAQuote: '"your ghost clatters toward me... in those red shoes"',
        poemBPoint:
          'Causley ends with the enigmatic "I had not thought that it would be like this" -- a quiet acceptance of crossing over towards his parents, towards death.',
        poemBQuote: '"I had not thought that it would be like this"',
        link: 'Duffy\'s ending is an act of possession; Causley\'s is an act of release. Both poems use memory as a bridge between living and dead, but Duffy pulls the past towards her while Causley moves towards it.',
      },
    ],
    conclusion:
      'Both poems explore how children remember parents they cannot fully reach, but they model opposite responses to that distance. Duffy\'s assertive, possessive memory insists on claiming the mother\'s youth; Causley\'s gentle, luminous memory accepts the separation between living and dead. Together, they show that memory is never neutral -- it is always an act of either taking or letting go.',
  },
  {
    id: 7,
    question:
      'Compare how poets present the power dynamics of love in "The Farmer\'s Bride" and one other poem.',
    poemA: 'The Farmer\'s Bride',
    poemB: 'Sonnet 29 — "I think of thee!"',
    thesis:
      'Both Mew and Barrett Browning present speakers negotiating desire within relationships shaped by power, but where the farmer\'s desire becomes a form of entrapment from which neither partner can escape, Barrett Browning\'s speaker actively dismantles the power of her own fantasies in favour of mutual, embodied love -- revealing how desire can either imprison or liberate depending on whether it recognises the beloved\'s autonomy.',
    paragraphs: [
      {
        topic: 'How the speaker perceives the beloved',
        poemAPoint:
          'The farmer reduces his wife to a series of animal images -- "like a hare", "shy as a leveret" -- projecting wildness onto her rather than understanding her fear.',
        poemAQuote: '"We caught her, fetched her home... like a mouse"',
        poemBPoint:
          'Barrett Browning initially reduces her lover to a tree smothered by her own vine-thoughts, but then actively recognises the problem and demands the real person.',
        poemBQuote: '"the straggling green which hides the wood"',
        link: 'Both speakers risk dehumanising the beloved through their own projections, but Barrett Browning develops self-awareness about this tendency while the farmer does not.',
      },
      {
        topic: 'Agency and voice',
        poemAPoint:
          'The bride never speaks in the poem; her silence is enforced by the dramatic monologue form, which traps the reader inside the farmer\'s perspective.',
        poemAQuote: '"her eyes, her hair, her hair!"',
        poemBPoint:
          'Barrett Browning\'s speaker actively commands her lover using imperatives, asserting female desire and agency in a way that subverts Victorian expectations.',
        poemBQuote: '"Renew thy presence... set thy trunk all bare"',
        link: 'Mew silences the female beloved; Barrett Browning gives the female speaker a commanding voice. The contrast exposes how gender shapes who gets to speak about desire.',
      },
      {
        topic: 'Form as a reflection of the relationship',
        poemAPoint:
          'Mew\'s irregular stanzas and fractured rhythm mirror the farmer\'s deteriorating self-control; the form itself becomes increasingly unstable.',
        poemAQuote: 'The disintegrating final stanza',
        poemBPoint:
          'Barrett Browning\'s Petrarchan sonnet moves from problem to resolution through the volta, enacting the shift from obsession to healthy desire.',
        poemBQuote: '"I will not have my thoughts instead of thee"',
        link: 'Mew\'s form enacts a relationship breaking down; Barrett Browning\'s enacts one becoming healthier. The structural contrast mirrors the emotional trajectory of each poem.',
      },
    ],
    conclusion:
      'Both poems explore how desire interacts with power, but they arrive at opposite destinations. The farmer\'s desire becomes an increasingly desperate possession of a person who cannot escape; Barrett Browning\'s desire evolves into a demand for genuine, mutual presence. Together, they argue that love becomes destructive when it refuses to see the beloved as a separate, autonomous person.',
  },
  {
    id: 8,
    question:
      'Compare how poets present distance in relationships in "Letters from Yorkshire" and one other poem.',
    poemA: 'Letters from Yorkshire',
    poemB: 'Mother, Any Distance',
    thesis:
      'Both Dooley and Armitage present distance as an essential feature of meaningful relationships, but where Dooley celebrates the way letters can sustain intimacy across physical separation, Armitage dramatises the painful process of a son pulling away from his mother -- revealing that distance can be either the medium through which love is expressed or the cost at which independence is won.',
    paragraphs: [
      {
        topic: 'Physical imagery of connection and separation',
        poemAPoint:
          'Dooley uses the letter as a physical object that bridges the gap -- "his knuckles... clearing the garden" are felt through the page, collapsing distance through sensory detail.',
        poemAQuote: '"the garden... clearing... its throat"',
        poemBPoint:
          'Armitage uses the extended metaphor of a tape measure stretching between mother and son -- a physical line of connection that must eventually be broken.',
        poemBQuote: '"the tape / unreels years between us, anchoring"',
        link: 'Both poets use concrete, physical images to embody emotional distance, but Dooley\'s image (the letter) sustains connection while Armitage\'s (the tape measure) dramatises its stretching to breaking point.',
      },
      {
        topic: 'Whether distance is chosen or necessary',
        poemAPoint:
          'The distance in Letters from Yorkshire is geographic and perhaps permanent, but Dooley presents it as the condition under which genuine communication thrives.',
        poemAQuote: '"Is this all there is... that out of the cold... comes a letter"',
        poemBPoint:
          'Armitage\'s distance is developmental and necessary -- the son must separate to become independent, even though the mother "still pinch / the last one-Loss between her finger and thumb".',
        poemBQuote: '"to fall or fly"',
        link: 'Dooley accepts distance as enriching; Armitage presents it as a necessary rupture. Both suggest that some distance is essential to love, but they differ on whether that distance costs or benefits the relationship.',
      },
      {
        topic: 'The ending and emotional resolution',
        poemAPoint:
          'Dooley ends with the affirming image of "our selves... are like a kind of cable", suggesting that invisible emotional connection is stronger than physical presence.',
        poemAQuote: '"feeding and linking... a kind of cable"',
        poemBPoint:
          'Armitage ends with the vertiginous image of being at the "hatch" of independence, facing the choice to "fall or fly" -- the outcome deliberately left unresolved.',
        poemBQuote: '"to fall or fly"',
        link: 'Dooley resolves into connection; Armitage leaves the reader in suspense. The difference reflects the nature of each relationship: sustained adult friendship versus the irreversible moment of a child leaving home.',
      },
    ],
    conclusion:
      'Both poems prove that physical distance need not mean emotional disconnection, but they approach this truth from different angles. Dooley shows that letters can make distance nourishing; Armitage shows that the pain of separation is the price of growth. Together, they reveal that love is not diminished by distance but reshaped by it.',
  },
  {
    id: 9,
    question:
      'Compare how poets present love as joyful in "Singh Song!" and one other poem.',
    poemA: 'Singh Song!',
    poemB: 'Sonnet 29 — "I think of thee!"',
    thesis:
      'Both Nagra and Barrett Browning present love as a force that overwhelms all other concerns, but where Nagra uses humour, dialect, and cultural specificity to celebrate the everyday joy of married love, Barrett Browning uses the Petrarchan sonnet to dramatise the moment when desire for the beloved surpasses every other thought -- revealing that joy in love can be either playful and communal or intense and private.',
    paragraphs: [
      {
        topic: 'Tone and register',
        poemAPoint:
          'Nagra uses phonetic Punjabi-English, humour, and bathos -- the customers are "di worst Indian shop" while the lovers are consumed by each other. The comedy makes the love feel warm and real.',
        poemAQuote: '"my bride... she say to me / is di worst Indian shop / on di whole Indian road"',
        poemBPoint:
          'Barrett Browning\'s tone is passionate and earnest -- there is no irony or comedy, only the intensity of a speaker rejecting fantasy for physical reality.',
        poemBQuote: '"burst, shattered, everywhere!"',
        link: 'Nagra uses humour to normalise love\'s joy; Barrett Browning uses intensity to elevate it. Both are celebrations, but one is public and warm, the other private and fierce.',
      },
      {
        topic: 'Cultural context and subversion',
        poemAPoint:
          'Nagra subverts stereotypes about arranged marriage by presenting a couple giddy with desire and tenderness, using the corner shop as an unlikely romantic setting.',
        poemAQuote: '"my bride... effing at my mum"',
        poemBPoint:
          'Barrett Browning subverts Victorian expectations of female passivity by writing a woman\'s desire openly, using imperatives and sensual imagery.',
        poemBQuote: '"set thy trunk all bare"',
        link: 'Both poets challenge their cultural moment: Nagra counters assumptions about British-Asian life; Barrett Browning counters assumptions about female desire. In both cases, love is the force that breaks through convention.',
      },
      {
        topic: 'Structure and energy',
        poemAPoint:
          'Nagra\'s poem has a loose, playful structure with refrains and speech rhythms that mimic conversation -- the form embodies the casualness and warmth of the relationship.',
        poemAQuote: 'The refrain-like returns to the shop counter',
        poemBPoint:
          'Barrett Browning\'s sonnet builds through enjambment and caesura to a climactic final paradox -- the form mirrors the escalating intensity of desire.',
        poemBQuote: '"I do not think of thee -- I am too near thee"',
        link: 'Nagra\'s open form matches love as daily joy; Barrett Browning\'s tight form matches love as concentrated passion. Both use structure to embody emotion, but the emotions are different facets of love.',
      },
    ],
    conclusion:
      'Both poems present love as overwhelmingly positive, but they define joy differently. Nagra shows love as warm, funny, and embedded in daily life; Barrett Browning shows it as passionate, physical, and transcendent. Together, they prove that love\'s joy is not a single experience but a spectrum from the comfortably domestic to the intensely personal.',
  },
  {
    id: 10,
    question:
      'Compare how poets present the passage of time and its effect on love in "Follower" and one other poem.',
    poemA: 'Follower',
    poemB: 'Before You Were Mine',
    thesis:
      'Both Heaney and Duffy use memory to explore how time reshapes the parent-child relationship, but where Heaney traces a reversal that unsettles him, Duffy reaches backwards to possess a version of her mother that existed before she was born -- revealing that time\'s effect on family love can be experienced as either guilt or as longing for what was lost.',
    paragraphs: [
      {
        topic: 'The parent as a figure of admiration',
        poemAPoint:
          'Heaney\'s father is presented in heroic, physical terms -- his expertise with the plough is rendered with precise, reverent detail.',
        poemAQuote: '"His shoulders globed like a full sail strung"',
        poemBPoint:
          'Duffy\'s mother is presented as glamorous and free -- dancing, laughing, compared to Marilyn Monroe in a pre-motherhood life of excitement.',
        poemBQuote: '"your polka-dot dress blows round your legs. Marilyn"',
        link: 'Both poets idealise a parent in their prime, but Heaney admires skill and strength while Duffy admires freedom and glamour. In both cases, time has diminished what was once impressive.',
      },
      {
        topic: 'The child\'s position',
        poemAPoint:
          'Heaney presents himself as a clumsy child who "stumbled" and was "a nuisance" -- he could never match his father\'s mastery, and this inadequacy shadows the poem.',
        poemAQuote: '"I stumbled in his hob-nailed wake"',
        poemBPoint:
          'Duffy positions herself as an absence who will eventually claim the mother -- "I\'m ten years away" -- her future existence is already consuming the mother\'s freedom.',
        poemBQuote: '"I\'m ten years away from the corner you dress in"',
        link: 'Heaney feels inadequate compared to his parent\'s past; Duffy feels possessive of it. Both perspectives are complicated by guilt: Heaney\'s for not matching his father, Duffy\'s for being the reason her mother\'s freedom ended.',
      },
      {
        topic: 'How time reverses the relationship',
        poemAPoint:
          'The final couplet delivers a devastating reversal: the father who once led now "keeps stumbling / Behind me", and the tone shifts from admiration to discomfort.',
        poemAQuote: '"It is my father who keeps stumbling / Behind me, and will not go away"',
        poemBPoint:
          'Duffy\'s mother becomes a "ghost" whose glamorous past only exists through the daughter\'s memory and imagination -- the mother has been absorbed into the child\'s narrative.',
        poemBQuote: '"your ghost clatters toward me"',
        link: 'Both endings show the parent diminished by time, but the emotional responses differ: Heaney feels burdened; Duffy feels triumphant. The contrast reveals that time\'s reversals in family can be experienced with very different degrees of comfort.',
      },
    ],
    conclusion:
      'Both poems show time transforming the parent-child bond from admiration into something more ambiguous. Heaney\'s poem ends in unease -- the father who was once a hero has become a dependent. Duffy\'s ends in possessive reclamation -- the mother\'s past has been claimed by the daughter\'s imagination. Together, they suggest that growing up always involves reckoning with the parent\'s diminishment, but that reckoning can take the form of guilt, longing, or even a kind of love that looks like ownership.',
  },
]

/* ── Component ─────────────────────────────────────────────────── */

export default function EssayPlansPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Love &amp; Relationships
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-pink-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              AQA GCSE English Literature
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              AQA Only
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Essay Plans: Love &amp; Relationships
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            10 fully worked comparison essay plans for AQA Paper 2 Section B.
            Each plan includes a Grade 9 thesis, three point-by-point
            comparative paragraphs with quotations, and a conclusion. Use these
            as models for structuring your own responses.
          </p>
        </div>
      </section>

      {/* ── Copyright notice ──────────────────────────────────── */}
      <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5">
        <div className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div className="space-y-1">
            <h2 className="text-body-sm font-semibold text-foreground">
              Key quotations only -- read the full poems
            </h2>
            <p className="text-body-xs text-muted-foreground leading-relaxed">
              Short extracts are included under fair dealing for the purpose of
              study and criticism. Always read and annotate the complete texts
              in your AQA anthology.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to use these plans ────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            How to Use These Plans
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">
                Study the structure, not the words
              </h3>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              These plans model how to build a comparative argument. Learn the
              pattern -- thesis, point-by-point paragraphs, linking sentence --
              then apply it to any pairing.
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">
                Adapt for the exam question
              </h3>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              The exam will name one poem and ask you to choose the second. Use
              these plans to practise picking strong pairings and shaping a
              thesis around the specific question wording.
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="size-4 text-clay-600" />
              <h3 className="text-sm font-semibold text-foreground">
                Do not memorise essays
              </h3>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              AQA examiners are trained to spot pre-learned responses.
              Memorising full essays will cap your mark. Instead, internalise
              the thesis-building and paragraph-framing skills demonstrated
              here.
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Target className="size-4 text-violet-400" />
              <h3 className="text-sm font-semibold text-foreground">
                Every paragraph compares
              </h3>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Notice how every paragraph in these plans discusses both poems.
              This is the point-by-point method -- it scores comparison marks in
              every paragraph, not just at the end.
            </p>
          </div>
        </div>
      </section>

      {/* ── Essay plans ───────────────────────────────────────── */}
      <section className="space-y-8">
        {ESSAY_PLANS.map((plan) => (
          <article
            key={plan.id}
            className="rounded-2xl border border-border/60 bg-card overflow-hidden"
          >
            {/* Header */}
            <div className="border-b border-border/40 bg-gradient-to-r from-rose-500/[0.06] to-transparent p-5 sm:p-6">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary" className="text-[0.65rem]">
                  Plan {plan.id}
                </Badge>
                <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20 text-[0.65rem]">
                  {plan.poemA}
                </Badge>
                <span className="text-xs text-muted-foreground">vs</span>
                <Badge className="bg-violet-500/10 text-violet-400 border-violet-500/20 text-[0.65rem]">
                  {plan.poemB}
                </Badge>
              </div>
              <h3 className="text-heading-md font-heading text-foreground">
                {plan.question}
              </h3>
            </div>

            <div className="p-5 sm:p-6 space-y-5">
              {/* Thesis */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                  Grade 9 Thesis
                </p>
                <p className="text-body-sm italic text-foreground/90 leading-relaxed">
                  {plan.thesis}
                </p>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4">
                {plan.paragraphs.map((para, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/40 bg-background/50 p-4"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <h4 className="text-sm font-semibold text-foreground">
                        {para.topic}
                      </h4>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 mb-3">
                      <div className="rounded-lg border border-rose-500/15 bg-rose-500/[0.03] p-3">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-rose-400 mb-1">
                          Poem A
                        </p>
                        <p className="text-body-sm text-muted-foreground leading-relaxed mb-2">
                          {para.poemAPoint}
                        </p>
                        <blockquote className="border-l-2 border-rose-500/30 pl-2.5 text-xs italic text-foreground/80">
                          {para.poemAQuote}
                        </blockquote>
                      </div>

                      <div className="rounded-lg border border-violet-500/15 bg-violet-500/[0.03] p-3">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-violet-400 mb-1">
                          Poem B
                        </p>
                        <p className="text-body-sm text-muted-foreground leading-relaxed mb-2">
                          {para.poemBPoint}
                        </p>
                        <blockquote className="border-l-2 border-violet-500/30 pl-2.5 text-xs italic text-foreground/80">
                          {para.poemBQuote}
                        </blockquote>
                      </div>
                    </div>

                    <div className="rounded-lg border border-amber-500/15 bg-amber-500/[0.03] p-3">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-clay-600 mb-1">
                        Comparative link
                      </p>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {para.link}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  Conclusion
                </p>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {plan.conclusion}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── Next step CTA ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-rose-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Ready to practise comparing poems?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Learn the step-by-step method for writing comparison essays in the
          exam, with paragraph frames and worked examples.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={
            <Link href="/revision/poetry/love-and-relationships/comparison-guide" />
          }
        >
          Comparison Guide
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
