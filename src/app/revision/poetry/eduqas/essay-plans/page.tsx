'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  FileText,
  GitCompareArrows,
  ChevronDown,
  Lightbulb,
  Quote,
  Info,
  PenLine,
  AlertTriangle,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

/* ── Essay plan data ─────────────────────────────────────────────── */

interface EssayPlan {
  id: number
  title: string
  question: string
  theme: string
  poemA: string
  poetA: string
  poemB: string
  poetB: string
  thesis: string
  paragraphs: {
    topic: string
    poemAPoint: string
    poemAEvidence: string
    poemBPoint: string
    poemBEvidence: string
    comparison: string
  }[]
  conclusion: string
  flag?: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    id: 1,
    title: 'War, Identity and Foreign Land',
    question:
      'Compare how Hardy in "Drummer Hodge" and Owen in "Disabled" present the cost of war on young men.',
    theme: 'War & Conflict',
    poemA: 'Drummer Hodge',
    poetA: 'Thomas Hardy',
    poemB: 'Disabled',
    poetB: 'Wilfred Owen',
    flag: 'Context: Drummer Hodge is set in the Second Boer War (South Africa, 1899) - NOT World War I. Owen\'s "Disabled" is a WWI poem.',
    thesis:
      "Hardy and Owen both expose what war takes from young men, but where Hardy's drummer boy is annihilated by anonymous death in a foreign land, Owen's veteran survives only to suffer a living erasure of identity at home.",
    paragraphs: [
      {
        topic: 'How each poet presents the young soldier',
        poemAPoint:
          'Hardy presents Hodge as a rural English boy reduced to a discarded body in an alien landscape.',
        poemAEvidence:
          '"They throw in Drummer Hodge, to rest / Uncoffined -- just as found" - the brutal verb "throw" and the em-dash strip away every Victorian ritual of mourning.',
        poemBPoint:
          'Owen presents the veteran as a once-vital young man now physically and socially diminished.',
        poemBEvidence:
          'Owen\'s soldier sits "in a wheeled chair, waiting for dark" - the static posture and passive waiting contrast with the youth he has lost. The poem moves between his shattered present and the recruitment-day past.',
        comparison:
          "Both poets reduce their soldier to an object: Hardy's Hodge is \"thrown in\" like rubbish; Owen's veteran is wheeled and handled by others. But Hardy's loss is total and bodily, while Owen's is a slower, conscious erasure the soldier must witness in himself.",
      },
      {
        topic: 'The role of place and belonging',
        poemAPoint:
          'Hardy contrasts Hodge\'s "Wessex home" with the "unknown plain" of South Africa, emphasising his alienation.',
        poemAEvidence:
          '"Fresh from his Wessex home" placed against "the broad Karoo, / The Bush, the dusty loam" - the foreign vocabulary (kopje, veldt, Karoo) marks a landscape Hodge cannot name.',
        poemBPoint:
          'Owen\'s soldier has returned home but finds it just as foreign - women\'s eyes "passed from him to the strong men that were whole".',
        poemBEvidence:
          'The veteran is now invisible in his own town: Owen contrasts a homecoming where some "cheered him home, but not as crowds cheer Goal" - a faint echo of the cheering he once received as a recruit.',
        comparison:
          'For Hardy, place is geographic exile; for Owen, place is social exile. Hodge becomes "portion of that unknown plain"; Owen\'s soldier becomes a stranger in his own street. Both are dislocated by war, but only Owen\'s soldier has to live with it.',
      },
      {
        topic: "Form, structure and the poet's judgement",
        poemAPoint:
          "Hardy uses three tight, ballad-style stanzas that move from burial, to ignorance, to eternal absorption - formal compression mirrors the boy's erasure.",
        poemAEvidence:
          'The closing image - "strange-eyed constellations reign / His stars eternally" - turns alien sky into permanent ownership, with bitter irony: Hodge claims the southern stars only by dying anonymously beneath them.',
        poemBPoint:
          "Owen uses irregular stanzas and a constant shifting between past and present to enact the soldier's broken sense of time.",
        poemBEvidence:
          'The poem ends on a flat, unanswered question - "Why don\'t they come?" - refusing closure, refusing the redemption a sonnet form would offer.',
        comparison:
          'Hardy resolves into a strange, cosmic permanence; Owen refuses resolution altogether. Both poets reject the rhetoric of patriotic sacrifice - Hardy quietly, through irony of place; Owen openly, through the visible suffering of the survivor.',
      },
    ],
    conclusion:
      "Hardy and Owen both expose war as theft - of body, of identity, of belonging. Hardy's Drummer Hodge is the anonymous dead of an imperial war few cared to mourn; Owen's soldier is the living wreckage WWI propaganda preferred to hide. Together they show that war's damage outlasts the battlefield, whether through erasure into foreign earth or through being made invisible at home.",
  },
  {
    id: 2,
    title: 'Love, Possession and the Female Voice',
    question:
      'Compare how Rossetti in "Cousin Kate" and Barrett Browning in Sonnet 29 ("I think of thee") present love.',
    theme: 'Love & Relationships',
    poemA: 'Cousin Kate',
    poetA: 'Christina Rossetti',
    poemB: 'Sonnet 29 ("I think of thee")',
    poetB: 'Elizabeth Barrett Browning',
    thesis:
      'Both Victorian women write love poems in a strong female first-person voice, but Rossetti speaks from the wreckage of love misused, while Barrett Browning speaks from the certainty of love returned - exposing how class and circumstance shape what love is permitted to be.',
    paragraphs: [
      {
        topic: 'How each speaker positions herself in relation to the beloved',
        poemAPoint:
          'Rossetti\'s "cottage maiden" speaks as a woman cast aside, reduced to a possession by the lord\'s power.',
        poemAEvidence:
          '"He wore me like a silken knot, / He changed me like a glove" - the paired similes commodify her, exposing the lord\'s casual, replaceable use of her body and her name.',
        poemBPoint:
          "Barrett Browning's speaker is the active subject of her own thinking, her thoughts climbing and clinging to the absent beloved like vines around a tree.",
        poemBEvidence:
          'Her thoughts "twine and bud about thee" with such abundance she fears they hide him. She then commands the beloved - "Renew thy presence" - to overwhelm her thoughts with himself.',
        comparison:
          "Rossetti's speaker has been an object of someone else's use; Barrett Browning's speaker is the agent of her own desire. Rossetti exposes love as power; Barrett Browning celebrates love as mutual. The contrast is between possession of and possession by.",
      },
      {
        topic: 'The voice of defiance and certainty',
        poemAPoint:
          "Rossetti's speaker turns from grief to fierce defiance, refusing to envy her cousin's respectable marriage.",
        poemAEvidence:
          '"I would have spit into his face / And not have taken his hand" - a startlingly violent line for a Victorian woman speaker. She also claims "a gift you have not got" - her son - turning shame into pride.',
        poemBPoint:
          "Barrett Browning's speaker asserts the demands of her love with equal certainty, even daring to find her own thoughts inadequate next to the beloved's real presence.",
        poemBEvidence:
          'She insists "I do not think of thee - I am too near thee" once he is present - a paradox that makes physical nearness more powerful than imagination.',
        comparison:
          'Both speakers refuse to be passive. Rossetti\'s defiance is born of betrayal; Barrett Browning\'s confidence is born of reciprocal love. Both use the female "I" to assert a self that Victorian convention often muted.',
      },
      {
        topic: 'Form and class context',
        poemAPoint:
          'Rossetti uses ballad-style quatrains and a regular rhyme scheme, drawing on the folk tradition of wronged-women songs.',
        poemAEvidence:
          'The repeated "Why did a great lord find me out" sets up an interrogation of class power - and the contrast between "an unclean thing" and "a dove" maps onto Victorian double standards for women.',
        poemBPoint:
          'Barrett Browning uses the Petrarchan sonnet, claiming a tradition male poets had built around male desire - and turning it to female longing.',
        poemBEvidence:
          'The volta from imagined thoughts to commanded presence - "Drop heavily down - burst, shattered, everywhere!" - uses the sonnet\'s traditional turn to enact a moment of assertive female desire.',
        comparison:
          'Rossetti uses a popular form to expose class injustice; Barrett Browning re-occupies a high-status form to assert female agency. Both use form as a political claim about who is allowed to speak about love.',
      },
    ],
    conclusion:
      'Rossetti and Barrett Browning, writing in the same Victorian decade, give us two poles of female love: the woman wronged and the woman fulfilled. Yet both insist on speaking. Both refuse silence. The comparison shows how love poetry from women in the 1850s-60s could be at once intimate and political - a claim on the right to feel, judge, and answer back.',
  },
  {
    id: 3,
    title: 'Childhood, Parental Love and Memory',
    question:
      'Compare how Clarke in "Catrin" and Heaney in "Blackberry Picking" present memories of childhood.',
    theme: 'Childhood & Nature',
    poemA: 'Catrin',
    poetA: 'Gillian Clarke',
    poemB: 'Blackberry Picking',
    poetB: 'Seamus Heaney',
    thesis:
      "Both poets remember a childhood moment that contained both love and loss, but where Clarke remembers her daughter's birth as the start of an ongoing tug-of-war, Heaney remembers a yearly disappointment that taught him that all hoarded sweetness rots.",
    paragraphs: [
      {
        topic: 'The central memory and its emotional charge',
        poemAPoint:
          'Clarke addresses her daughter directly, recalling the labour-room moment when mother and child were first divided.',
        poemAEvidence:
          'Clarke describes childbirth as a confrontation between mother and child, and uses the famous image of a "red rope of love" - a single physical image for biological connection and emotional struggle. (In-copyright text: short fair-dealing extract.)',
        poemBPoint:
          'Heaney recalls the August ritual of picking blackberries - sweet, plentiful, then inevitably spoiled by rot.',
        poemBEvidence:
          'The first stanza is rich with sensual delight in the fruit\'s ripeness, comparing the first taste to a thickened wine. The second stanza turns to the "stinking juice" of decay - a single fair-dealing reference that crystallises Heaney\'s shift from pleasure to disgust. (In-copyright text: short fair-dealing extract.)',
        comparison:
          "Both poets root the memory in the body - Clarke in the cord between mother and child, Heaney in the staining juice of fruit. But Clarke's memory is of a single charged moment that keeps repeating; Heaney's is of a yearly cycle that repeats only to disappoint.",
      },
      {
        topic: 'The role of parental love and longing',
        poemAPoint:
          "Clarke's love for her daughter is bound up with the painful work of separation - the child must struggle free.",
        poemAEvidence:
          'The poem revisits the rope of attachment as the child grows and seeks her own freedom - the original conflict of the labour ward repeats in adolescence. (In-copyright text: paraphrased.)',
        poemBPoint:
          "Heaney's love is for the lost ideal of perfect, preserved abundance - and he projects a child's grief onto the adult's knowledge that nothing keeps.",
        poemBEvidence:
          "The boy is reduced to grief when the cache spoils each summer, even though he knew it would not last. Heaney captures childhood's doomed optimism - the gap between hope and knowledge. (In-copyright text: paraphrased.)",
        comparison:
          "Clarke's love is for a person; Heaney's love is for an experience. Clarke shows that parental love and conflict are inseparable; Heaney shows that childhood pleasure and disappointment are inseparable. Both find love bound to its own ending.",
      },
      {
        topic: 'Structure and the passage of time',
        poemAPoint:
          'Clarke uses a two-stanza structure that jumps from the birth scene to a later confrontation, collapsing years into a single relationship.',
        poemAEvidence:
          'The shift from the labour-ward scene to an adolescent confrontation at the door makes the whole poem a meditation on continuity - the same struggle, in new forms. (In-copyright text: paraphrased.)',
        poemBPoint:
          'Heaney uses a two-stanza structure that moves from gathering to spoiling - innocence to experience.',
        poemBEvidence:
          "The first stanza's lush imagery and forward motion give way to the second's static disappointment, mirroring how childhood's expectations curdle into knowledge.",
        comparison:
          'Both poets divide the poem into two halves marking a turn from one state to another - Clarke from birth to adolescence, Heaney from harvest to rot. Structure becomes argument: parental love and childhood pleasure are both about learning that nothing stays where it began.',
      },
    ],
    conclusion:
      "Clarke and Heaney both write memory poems that refuse easy nostalgia. Clarke's love is fierce and ongoing; Heaney's is rueful and final. Together they argue that childhood - whether seen from the parent's side or the child's - is the place we first learn that love and loss arrive together.",
  },
  {
    id: 4,
    title: 'War, Honour and the Family',
    question:
      'Compare how Garland in "Kamikaze" and Hardy in "Drummer Hodge" present the cost of war on the family or community.',
    theme: 'War & Conflict',
    poemA: 'Kamikaze',
    poetA: 'Beatrice Garland',
    poemB: 'Drummer Hodge',
    poetB: 'Thomas Hardy',
    flag: 'Context: Drummer Hodge is set in the Second Boer War (South Africa, 1899) - NOT World War I. Kamikaze is set in WWII Japan.',
    thesis:
      "Both Garland and Hardy expose how war separates a soldier from his community, but where Hardy's drummer boy is physically thrown into anonymous foreign earth, Garland's pilot returns alive only to be socially erased by his own family for refusing to die honourably.",
    paragraphs: [
      {
        topic: 'How the soldier is positioned in relation to community',
        poemAPoint:
          "Garland's pilot is told from the daughter's point of view - a man whose return shamed the family that should have welcomed him.",
        poemAEvidence:
          'Garland\'s daughter recalls how the family chose to act "as though he no longer existed" once he turned the plane back - silent ostracism replaces military glory.',
        poemBPoint:
          "Hardy's drummer is buried by anonymous hands, severed from his Wessex community by death and distance.",
        poemBEvidence:
          '"They throw in Drummer Hodge, to rest / Uncoffined -- just as found" - the unnamed "they" stand in for the absent community that should have buried him properly.',
        comparison:
          "Both soldiers are erased - Garland's by social shunning, Hardy's by burial in alien soil. The cruelty in Garland is collective and chosen; the cruelty in Hardy is bureaucratic and structural. Both ask: what is owed to the soldier by the people he came from?",
      },
      {
        topic: 'The pull of home',
        poemAPoint:
          "Garland's pilot is turned by the sight of the sea, fishing boats and the remembered childhood scenes of his coastal home.",
        poemAEvidence:
          'The poem catalogues remembered images - the fishing boats, the safe shore - that overpower the warrior code. Home, paradoxically, becomes the force that ends his honour.',
        poemBPoint:
          "For Hardy's drummer, home is exactly what he has lost. The poem grieves a Wessex landscape he will never see again.",
        poemBEvidence:
          '"Fresh from his Wessex home" places the rural English boy against "the broad Karoo, / The Bush, the dusty loam" - a foreign landscape "Young Hodge the Drummer never knew".',
        comparison:
          "Garland's home pulls the soldier back and saves him from death - but costs him his community. Hardy's home is unreachable - and the soldier is absorbed into foreign earth. In both poems, home is the moral weight against which war is measured.",
      },
      {
        topic: 'Form, voice and the verdict on war',
        poemAPoint:
          'Garland uses a layered narrative - the daughter quotes her mother, who tells the children - distancing us from the pilot himself, mirroring his social erasure.',
        poemAEvidence:
          'The poem closes with the daughter speculating that the pilot, in his shamed silence, may have come to question which would have been the better way to die - a damning thought about a culture that prefers death to dishonour. (In-copyright text: paraphrased.)',
        poemBPoint:
          "Hardy uses tight ballad stanzas and the omniscient third person to mark Hodge's anonymity - the drummer never speaks for himself.",
        poemBEvidence:
          'The closing image - "strange-eyed constellations reign / His stars eternally" - gives bitter cosmic permanence to a boy whose name is barely his own ("Hodge" is rural-English shorthand for any farm lad).',
        comparison:
          "Both poets choose forms that keep the soldier silent - Garland by triple-distancing his voice through women relatives, Hardy by ballad anonymity. The silence is the point: war's moral judgement falls on those who survive to remember.",
      },
    ],
    conclusion:
      'Hardy and Garland both write about wars not their own - Hardy from late-Victorian England looking at South Africa, Garland from late-twentieth-century Britain looking at WWII Japan. Both poets indict the cultures that expect young men to die quietly elsewhere. Both leave us with a soldier whose story is told only by those left behind.',
  },
  {
    id: 5,
    title: "Childhood, Nature and the Poet's Gaze",
    question:
      'Compare how Blake in "The Schoolboy" and Wordsworth in "I Wandered Lonely as a Cloud" present the relationship between people and the natural world.',
    theme: 'Childhood & Nature',
    poemA: 'The Schoolboy',
    poetA: 'William Blake',
    poemB: 'I Wandered Lonely as a Cloud',
    poetB: 'William Wordsworth',
    thesis:
      'Both Romantic poets present nature as a source of joy threatened by adult systems, but Blake speaks in the voice of a caged child longing to escape the schoolroom, while Wordsworth speaks as an adult recollecting how a single natural scene becomes a permanent inner resource.',
    paragraphs: [
      {
        topic: 'Whose voice presents nature, and from what position',
        poemAPoint:
          'Blake gives the poem to the schoolboy himself, who would rather be outdoors than "under a cruel eye outworn".',
        poemAEvidence:
          'The boy describes the "sweet" summer morning when birds and the huntsman\'s horn call him outside - only to be marched into a schoolroom that "drives all joy away".',
        poemBPoint:
          'Wordsworth speaks as the adult poet, looking back on a moment of solitary wandering when the daffodils overwhelmed him.',
        poemBEvidence:
          'Wordsworth describes "a host, of golden daffodils" - and crucially, the adult speaker remembers that "in vacant or in pensive mood" the scene returns to him on his "inward eye".',
        comparison:
          "Blake's child is trapped in the present; Wordsworth's adult uses memory as a refuge. The child longs to be in nature; the adult is consoled by having once been there. Both poets argue nature is the cure - but they differ on whether the cure is access or memory.",
      },
      {
        topic: 'How adult systems intrude on natural joy',
        poemAPoint:
          'Blake makes the schoolroom an explicit enemy of natural growth, asking how a child can "the summer fruits appear" if his bud is "nipped" early.',
        poemAEvidence:
          'The closing stanzas use plant imagery - "buds nipped", "blossoms blown away" - to argue that early formal education ruins the very growth it claims to nurture.',
        poemBPoint:
          'Wordsworth does not name an enemy, but the contrast between the "lonely" wanderer and the dancing crowd of flowers implies the modern adult\'s isolation.',
        poemBEvidence:
          'The simile "lonely as a cloud" frames the speaker as detached, drifting; the daffodils, by contrast, are a "jocund company". Adulthood is implicitly the lonely state nature relieves.',
        comparison:
          "Blake protests directly; Wordsworth implies. Blake argues schooling kills the child's joy; Wordsworth shows that the adult mind, left alone, drifts unless nature plants something in it. Both poets share the Romantic conviction that nature corrects what civilisation breaks.",
      },
      {
        topic: 'Form, voice and Romantic argument',
        poemAPoint:
          "Blake uses regular five-line stanzas with a controlled rhyme scheme - almost the orderliness of the schoolroom he condemns - to make the child's protest formally legible.",
        poemAEvidence:
          'The control of the form mirrors the control the child resents; the protest comes through diction ("dismay", "sigh and dismay", "weary") rather than formal disorder.',
        poemBPoint:
          "Wordsworth uses four six-line stanzas of measured iambic tetrameter to mirror the speaker's wandering pace and the rhythm of recollection.",
        poemBEvidence:
          'The final stanza turns inward - "And then my heart with pleasure fills" - translating the seen scene into the imagined one. Form becomes a model of how nature is internalised.',
        comparison:
          'Both poets use neat, almost song-like forms. Blake uses form to expose the prison; Wordsworth uses form to enact recollection. The forms agree on one thing: nature is what the human mind needs in order to flourish.',
      },
    ],
    conclusion:
      'Blake and Wordsworth - the two great Romantic visionaries of childhood - agree that nature is the proper home of the human spirit, but disagree on access. Blake is angry that children are denied it; Wordsworth is grateful that a single encounter can last a lifetime. Together they show Romantic nature poetry working as both protest and consolation.',
  },
  {
    id: 6,
    title: "Identity, Heritage and the Poet's Voice",
    question:
      'Compare how Ewing in "Origin Story" and McKay in "I Shall Return" present identity and belonging.',
    theme: 'Identity & Voice',
    poemA: 'Origin Story',
    poetA: 'Eve L. Ewing',
    poemB: 'I Shall Return',
    poetB: 'Claude McKay',
    thesis:
      'Both Black diasporic poets reclaim identity through an act of imaginative return, but McKay writes a confident promise to a beloved homeland he will rejoin, while Ewing writes a defiant origin myth for a self the world has tried to define from outside.',
    paragraphs: [
      {
        topic: 'How each speaker constructs the self',
        poemAPoint:
          'Ewing writes a self-authored myth of origin - refusing inherited definitions and inventing her own beginning.',
        poemAEvidence:
          'Ewing builds a personal mythology of Black identity rooted in self-creation rather than the dominant culture\'s narrative - the "origin story" is hers to tell.',
        poemBPoint:
          "McKay's speaker constructs identity through love of a remembered Caribbean homeland (McKay was Jamaican-born, writing in the Harlem Renaissance).",
        poemBEvidence:
          'The speaker repeats "I shall return" as a refrain - promising to return to the streams, the village dances and the "fiddle and fife" of native life. The future-tense vow makes return the centre of the self.',
        comparison:
          'Ewing builds identity by writing a new origin; McKay builds identity by promising a return to an old one. Both poets reject the idea that identity is what others have assigned - but Ewing invents, while McKay remembers.',
      },
      {
        topic: 'The role of place and belonging',
        poemAPoint:
          "Ewing's claim is on the right to define one's own place in history and culture - heritage as creative inheritance.",
        poemAEvidence:
          'The poem assembles fragments of cultural memory - Black women, urban Chicago, ancestors - into a self that belongs because she says it does.',
        poemBPoint:
          "McKay's claim is on a specific landscape - the rivers, the hills, the music of a remembered island.",
        poemBEvidence:
          'The poem repeats "I shall return" as a structural anchor - place is the place the soul returns to, and identity follows.',
        comparison:
          'For Ewing, place is something the self builds; for McKay, place is something the self belongs to. Both insist that identity is not given - it is claimed. The difference is between authorship and homecoming.',
      },
      {
        topic: 'Form, voice and political assertion',
        poemAPoint:
          'Ewing uses contemporary free verse and direct address - the voice of a Black woman speaking on her own terms in 21st-century America.',
        poemAEvidence:
          'The conversational, declarative tone refuses the formal hierarchies of the inherited canon - voice itself becomes an act of self-definition.',
        poemBPoint:
          'McKay uses the sonnet - a high-status European form - and bends it to a Caribbean subject and a diasporic voice.',
        poemBEvidence:
          'The disciplined sonnet form gives the promise of return the weight of an oath; the chosen form is itself a claim on the literary tradition.',
        comparison:
          'Ewing rejects the inherited form to make space for new voice; McKay claims the inherited form to make space for new content. Both moves are political. The comparison shows two generations of Black diasporic poets - McKay (1920s) and Ewing (2010s) - using opposite formal strategies to do related work.',
      },
    ],
    conclusion:
      "McKay and Ewing both insist that Black identity is not something granted from outside - it is authored, remembered, returned to. McKay's sonnet of homecoming and Ewing's contemporary self-mythology are nearly a century apart, but both refuse to let the dominant culture tell the speaker who she is.",
  },
  {
    id: 7,
    title: 'The Gaze, the Observed and the Photograph',
    question:
      'Compare how Ghose in "Decomposition" and Owen in "Disabled" present the way one person looks at another.',
    theme: 'Identity & Voice',
    poemA: 'Decomposition',
    poetA: 'Zulfikar Ghose',
    poemB: 'Disabled',
    poetB: 'Wilfred Owen',
    flag: 'Source confidence note: Decomposition has LOW source confidence in the verified library (CRITICAL_FLAGS #28). Quotation references should be checked against the official Eduqas anthology edition before use.',
    thesis:
      "Both poets examine the moral discomfort of looking at a suffering person, but Ghose interrogates the photographer's aestheticised gaze on a Bombay beggar, while Owen forces the reader to share the disabled veteran's own experience of being looked at and looked past.",
    paragraphs: [
      {
        topic: 'Whose gaze controls the poem',
        poemAPoint:
          "Ghose places the photographer's composing eye at the centre - the poem is a self-critical confession of having framed a man as a picturesque image.",
        poemAEvidence:
          'The speaker reflects on the photograph he took of a beggar sleeping on a Bombay pavement, eventually condemning his own act of treating a person as artistic composition. (Refer to the Eduqas anthology for verified phrasing - see source-confidence flag.)',
        poemBPoint:
          'Owen positions the reader behind the eyes of the wounded veteran, who watches others looking at him and away from him.',
        poemBEvidence:
          'Owen\'s soldier notes that the women\'s eyes "passed from him to the strong men that were whole" - he is the object of a gaze that prefers to look elsewhere.',
        comparison:
          'Ghose interrogates the photographer; Owen interrogates the looker by making the reader inhabit the looked-at. Both poems make the act of seeing a moral act - but they invert the position. Ghose puts us in the camera; Owen puts us in the chair.',
      },
      {
        topic: 'How the suffering body is rendered',
        poemAPoint:
          'Ghose risks aestheticising poverty, then turns the poem itself into the indictment of that aestheticising.',
        poemAEvidence:
          "The poem's self-revision - moving from admiring the photograph to disavowing it - is the moral structure: beauty becomes a charge against the speaker. (Verified phrasing pending; flag applies.)",
        poemBPoint:
          "Owen catalogues the veteran's diminished body in plain, almost clinical phrases that refuse aesthetic consolation.",
        poemBEvidence:
          'The veteran is reduced to "a queer disease" in the eyes of others - the deflating language strips away any patriotic glamour the recruitment poster once promised.',
        comparison:
          'Ghose worries that art beautifies suffering; Owen refuses any beauty at all. The two poets meet at the same ethical question - what does it mean to look? - but Ghose attacks the artist, while Owen attacks the casual viewer.',
      },
      {
        topic: 'Form and the moral weight of seeing',
        poemAPoint:
          'Ghose uses a measured, reflective form that mirrors the act of contemplating a still photograph - the poem is itself a kind of caption.',
        poemAEvidence:
          "The poem's deliberate, considered movement enacts looking-then-judging - form embodies the moral process the poem describes. (Refer to the verified anthology edition for line-level references.)",
        poemBPoint:
          "Owen alternates short and long lines, present and past, to enact the soldier's broken consciousness as he sits being looked at.",
        poemBEvidence:
          'The closing line - "Why don\'t they come?" - leaves the soldier waiting for a gaze that will not arrive, just as the women\'s eyes have already moved on.',
        comparison:
          "Ghose uses form to enact the slow work of moral self-correction; Owen uses form to enact the soldier's suspended exposure. Both poets make form a moral instrument: Ghose to indict the artist, Owen to indict the indifferent crowd.",
      },
    ],
    conclusion:
      'Ghose and Owen both make us examine the politics of looking. Ghose worries that the camera turns suffering into art; Owen forces us to feel suffering refuse to become art. Both poets ask the reader: when you look at a person in pain, what are you doing with what you see?',
  },
  {
    id: 8,
    title: 'Gendered Voice, Class and Defiance',
    question:
      'Compare how Rossetti in "Cousin Kate" and Ewing in "Origin Story" present women speaking back against the world that named them.',
    theme: 'Identity & Voice',
    poemA: 'Cousin Kate',
    poetA: 'Christina Rossetti',
    poemB: 'Origin Story',
    poetB: 'Eve L. Ewing',
    thesis:
      'Across more than 150 years, both Rossetti and Ewing give us a female speaker who refuses the identity society has assigned her - Rossetti\'s "outcast" mother of an illegitimate son in Victorian England, Ewing\'s self-authoring Black woman in 21st-century America.',
    paragraphs: [
      {
        topic: 'How each speaker rejects the label given to her',
        poemAPoint:
          'Rossetti\'s speaker is named "an unclean thing" by her community but refuses to accept the moral hierarchy that gilds her cousin and shames her.',
        poemAEvidence:
          '"The neighbours call you good and pure, / Call me an outcast thing" - the parallelism exposes the labels as social arrangement, not moral truth. She closes with her son: "my shame, my pride".',
        poemBPoint:
          "Ewing's speaker rejects every inherited narrative about Black womanhood and authors her own origin in its place.",
        poemBEvidence:
          'The poem enacts self-naming - the right to decide what one\'s story is. Ewing reframes "origin" itself as something a Black woman writes rather than receives.',
        comparison:
          'Rossetti\'s speaker turns the moral label inside out - "shame" and "pride" sit in the same line. Ewing\'s speaker discards the labelling system altogether. Both moves are defiant; the difference is between subverting the language given and inventing new language.',
      },
      {
        topic: 'How each poet makes voice into power',
        poemAPoint:
          "Rossetti's speaker speaks directly to the cousin who replaced her - addressing the social order in the second person.",
        poemAEvidence:
          'The repeated "O Lady Kate, my cousin Kate" and "O cousin Kate, my love was true" turn the poem into a confrontation rather than a lament - speech itself becomes the act of defiance.',
        poemBPoint:
          "Ewing's speaker addresses the reader, the inherited tradition, and herself simultaneously, making the poem an act of public self-definition.",
        poemBEvidence:
          'The conversational, declarative voice asserts authority over its own subject - the form is the argument: a Black woman authoring her own story in her own register.',
        comparison:
          'Rossetti speaks to a single cousin who stands for a whole social order; Ewing speaks to an audience that includes the dominant culture. Both turn voice into a refusal of imposed identity. Both insist: you do not get to name me.',
      },
      {
        topic: 'Form, time and political stakes',
        poemAPoint:
          'Rossetti uses a folk-ballad form - the form of wronged-woman songs - to put working-class female grievance into the literary record.',
        poemAEvidence:
          'The regular ballad rhythm and rhyme make the speaker\'s anger memorable, almost singable - Rossetti gives a "cottage maiden" the dignity of formal poetry.',
        poemBPoint:
          'Ewing uses contemporary free verse to enact a refusal of inherited literary hierarchies.',
        poemBEvidence:
          "The form's openness mirrors the speaker's claim: identity is not a closed inheritance but an open act of self-construction.",
        comparison:
          'Rossetti uses an old form to give a poor woman literary voice; Ewing breaks form to give a Black woman political voice. Both poets recognise that form itself decides who gets heard. The 1862 ballad and the 21st-century free-verse self-myth do related work: a woman naming herself before the world can finish naming her.',
      },
    ],
    conclusion:
      'Rossetti and Ewing - Victorian and contemporary, English and American, white and Black - share the same fundamental project: a woman speaker takes back the right to define herself. Rossetti does it from inside the moral language of her time; Ewing does it by stepping outside that language entirely. Together they show how poetry has long been a place where the silenced answer back.',
  },
]

/* ── Page component ───────────────────────────────────────────────── */

export default function EduqasEssayPlansPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/poetry/eduqas" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Eduqas Poetry
          </Button>

          <Badge variant="secondary" className="mb-4">
            <PenLine className="mr-1 size-3" />
            Eduqas Essay Plans
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Comparison Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {ESSAY_PLANS.length} fully planned comparison essays drawn from the Eduqas GCSE 2025
            anthology. Each plan provides a comparative question, a thesis, three comparative
            paragraphs with evidence, and a conclusion.
          </p>

          <div className="mt-5 flex items-start gap-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 p-3 max-w-2xl">
            <Info className="mt-0.5 size-4 shrink-0 text-emerald-400" />
            <p className="text-caption text-muted-foreground">
              <strong className="text-foreground">Note:</strong> These essay plans are aligned to
              the <strong className="text-foreground">Eduqas GCSE 2025 anthology</strong> (12
              poems). Plans for the legacy 18-poem anthology have been retired.
            </p>
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-lg bg-blue-500/5 border border-blue-500/10 p-3 max-w-2xl">
            <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
            <p className="text-caption text-muted-foreground">
              The Eduqas Component 1 Section B exam names one poem and asks you to compare it with
              another of your choice from the anthology. These plans show you how to structure a
              high-mark comparison with evidence from both poems.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to use these plans ───────────────────────────────── */}
      <section>
        <Card className="mb-8">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                <Lightbulb className="size-5 text-clay-600" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-heading-sm font-heading text-foreground">
                    How to use these essay plans
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    These are model plans, not model answers. Use them to practise structuring your
                    own comparisons, not to memorise and reproduce.
                  </p>
                </div>
                <ul className="grid gap-2 text-body-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    Read the question, then the thesis -- the thesis states the argument the whole
                    essay will prove
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    Each paragraph compares both poems on the same idea
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    For poems still in copyright (Catrin, Blackberry Picking, Kamikaze, Origin
                    Story, Decomposition), evidence is given as brief paraphrase or short
                    fair-dealing references -- not full quotations
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="mt-0.5 size-4 shrink-0 text-clay-600" />
                    The conclusion draws the comparison together and links to the bigger picture
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Essay plans ──────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            All {ESSAY_PLANS.length} Essay Plans
          </h2>
        </div>

        {ESSAY_PLANS.map((plan) => (
          <EssayPlanCard key={plan.id} plan={plan} />
        ))}
      </section>

      {/* ── Copyright footer ─────────────────────────────────────── */}
      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        All quotations are brief references for the purpose of private study and educational
        criticism under UK fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30).
        Full poem texts are not reproduced. All quotations remain the intellectual property of the
        respective rights holders. For full anthology text, students should consult the
        board-licensed Eduqas Poetry Anthology.
      </footer>
    </div>
  )
}

/* ── Essay plan card component ───────────────────────────────────── */

function EssayPlanCard({ plan }: { plan: EssayPlan }) {
  return (
    <details className="group rounded-2xl border border-border/60 bg-card transition-all duration-200 open:border-border open:shadow-card-hover">
      <summary className="flex cursor-pointer items-start gap-4 p-5 sm:p-6 list-none [&::-webkit-details-marker]:hidden">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <FileText className="size-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
              Eduqas
            </Badge>
            <Badge variant="outline" className="text-[0.65rem]">
              {plan.theme}
            </Badge>
          </div>
          <h3 className="text-heading-md font-heading text-foreground">
            {plan.id}. {plan.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{plan.poemA}</span>
            <GitCompareArrows className="size-3.5" />
            <span className="font-medium text-foreground">{plan.poemB}</span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {plan.poetA} vs {plan.poetB}
          </p>
        </div>
        <ChevronDown className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="border-t border-border/60 px-5 pb-6 pt-5 sm:px-6 space-y-6">
        {/* Question */}
        <div className="rounded-lg bg-amber-500/5 border border-amber-500/10 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-clay-600 mb-2">
            Comparative Question
          </h4>
          <p className="text-body-sm text-foreground leading-relaxed italic">{plan.question}</p>
        </div>

        {/* Optional flag */}
        {plan.flag && (
          <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 p-3">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-clay-600" />
            <p className="text-xs text-foreground/90 leading-relaxed">{plan.flag}</p>
          </div>
        )}

        {/* Thesis */}
        <div className="rounded-lg bg-primary/5 border border-primary/10 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Thesis / Argument
          </h4>
          <p className="text-body-sm text-foreground leading-relaxed">{plan.thesis}</p>
        </div>

        {/* Paragraphs */}
        {plan.paragraphs.map((para, i) => (
          <div key={i} className="space-y-3">
            <h4 className="flex items-center gap-2 text-heading-sm font-heading text-foreground">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                {i + 1}
              </span>
              {para.topic}
            </h4>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* Poem A */}
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3 space-y-2">
                <p className="text-xs font-semibold text-foreground">{plan.poemA}</p>
                <p className="text-body-sm text-muted-foreground">{para.poemAPoint}</p>
                <div className="flex items-start gap-2 rounded bg-card p-2">
                  <Quote className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {para.poemAEvidence}
                  </p>
                </div>
              </div>

              {/* Poem B */}
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3 space-y-2">
                <p className="text-xs font-semibold text-foreground">{plan.poemB}</p>
                <p className="text-body-sm text-muted-foreground">{para.poemBPoint}</p>
                <div className="flex items-start gap-2 rounded bg-card p-2">
                  <Quote className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    {para.poemBEvidence}
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison link */}
            <div className="flex items-start gap-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 p-3">
              <GitCompareArrows className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Comparison: </span>
                {para.comparison}
              </p>
            </div>
          </div>
        ))}

        {/* Conclusion */}
        <div className="rounded-lg bg-violet-500/5 border border-violet-500/10 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
            Conclusion
          </h4>
          <p className="text-body-sm text-muted-foreground leading-relaxed">{plan.conclusion}</p>
        </div>
      </div>
    </details>
  )
}
