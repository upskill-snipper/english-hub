'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
  FileText,
  Heart,
  Swords,
  Clock,
  Mountain,
  Sparkles,
  Lightbulb,
  PenLine,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// ─── Types ───────────────────────────────────────────────────────────────────

interface EssayPlan {
  id: number
  title: string
  cluster: string
  clusterIcon: typeof Heart
  clusterColour: string
  poemA: string
  poetA: string
  poemB: string
  poetB: string
  thematicFocus: string
  intro: string
  points: {
    topic: string
    poemADetail: string
    poemBDetail: string
  }[]
  conclusion: string
  examTip: string
}

// ─── Essay plan data ─────────────────────────────────────────────────────────
//
// All analysis references themes, methods and context rather than
// reproducing copyrighted text. Students should consult the OCR
// "Towards a World Unknown" anthology (ISBN 9781398384408) for full poems.
// ─────────────────────────────────────────────────────────────────────────────

const ESSAY_PLANS: EssayPlan[] = [
  // ── 1. Love & Relationships ────────────────────────────────────────────────
  {
    id: 1,
    title: 'How do poets present the pain of lost love?',
    cluster: 'Love and Relationships',
    clusterIcon: Heart,
    clusterColour: 'text-pink-400',
    poemA: 'Neutral Tones',
    poetA: 'Thomas Hardy',
    poemB: 'A Complaint',
    poetB: 'William Wordsworth',
    thematicFocus: 'Loss, emotional desolation, memory',
    intro:
      'Both Hardy and Wordsworth explore the aftermath of emotional loss, though Hardy focuses on romantic disillusionment while Wordsworth mourns the death of a friendship. A comparison reveals how each poet uses natural imagery and structure to convey emotional devastation.',
    points: [
      {
        topic: 'Use of natural imagery to mirror emotional states',
        poemADetail:
          'Hardy uses a bleak winter landscape -- a white sun, fallen leaves, a grey pond -- as a pathetic fallacy for the death of love. The natural world is drained of warmth and colour, reflecting inner numbness.',
        poemBDetail:
          'Wordsworth uses the extended metaphor of a fountain that once flowed freely but has now reduced to a mere trickle. The shift from abundance to scarcity mirrors the cooling of affection.',
      },
      {
        topic: 'Structural choices to convey the weight of loss',
        poemADetail:
          'Hardy uses a cyclical structure, returning to the same scene at the end as at the beginning. This circularity traps the speaker in the memory, suggesting that the pain of lost love is inescapable.',
        poemBDetail:
          'Wordsworth builds his argument in a single sustained stanza that gathers emotional force. The lack of breaks creates a sense of relentless, building grief.',
      },
      {
        topic: 'Tone and the speaker\'s attitude to loss',
        poemADetail:
          'Hardy\'s tone is bitterly resigned. The speaker has learned a permanent lesson about love\'s capacity to deceive, and the final image suggests this moment has coloured all subsequent experience.',
        poemBDetail:
          'Wordsworth\'s tone is more openly sorrowful -- he acknowledges what has been lost and grieves for it directly, without Hardy\'s protective cynicism.',
      },
    ],
    conclusion:
      'While both poets present lost love as devastating, Hardy internalises the pain into a permanent scar on memory, whereas Wordsworth expresses grief more openly. Hardy\'s restraint is arguably the more unsettling of the two.',
    examTip:
      'When comparing these poems, focus on the different functions of natural imagery. Hardy\'s landscape is symbolic; Wordsworth\'s fountain is an extended metaphor. Naming the technique precisely shows the examiner you understand poetic method.',
  },
  {
    id: 2,
    title: 'How do poets present intense devotion?',
    cluster: 'Love and Relationships',
    clusterIcon: Heart,
    clusterColour: 'text-pink-400',
    poemA: 'Sonnet 43',
    poetA: 'Elizabeth Barrett Browning',
    poemB: 'She Walks in Beauty',
    poetB: 'Lord Byron',
    thematicFocus: 'Adoration, idealisation, the language of devotion',
    intro:
      'Both Barrett Browning and Byron celebrate the object of their love in elevated, almost reverential language. However, Barrett Browning speaks from personal experience while Byron offers a more detached aesthetic admiration. Comparing their methods reveals different kinds of devotion.',
    points: [
      {
        topic: 'Use of form to express devotion',
        poemADetail:
          'Barrett Browning uses the Petrarchan sonnet form -- a tradition associated with declarations of love -- but adapts it to express a mature, spiritual love that transcends physical attraction. The form itself becomes a symbol of devotion.',
        poemBDetail:
          'Byron uses three regular six-line stanzas with a tight ABABAB rhyme scheme, creating a sense of measured, composed admiration. The controlled form mirrors his reverent but restrained gaze.',
      },
      {
        topic: 'Abstract versus physical imagery',
        poemADetail:
          'Barrett Browning\'s love is defined in abstract, spiritual terms -- depth, breadth, height -- pushing the poem beyond the body into something transcendent. The cumulative listing creates a sense of limitless devotion.',
        poemBDetail:
          'Byron balances light and dark imagery, finding beauty in the meeting point of opposites. His imagery is visual and sensory, rooted in the physical appearance of the woman he describes.',
      },
      {
        topic: 'Context and the speaker\'s position',
        poemADetail:
          'Barrett Browning writes from lived experience; the poem is addressed to her future husband, Robert Browning. This biographical context gives the declaration an authenticity that elevates it beyond convention.',
        poemBDetail:
          'Byron is thought to have written the poem after seeing his cousin at a party. The poem is observation from a distance rather than a personal confession, giving it a cooler, more aesthetic quality.',
      },
    ],
    conclusion:
      'Barrett Browning presents devotion as an all-consuming spiritual commitment, while Byron presents it as a careful, almost painterly appreciation of beauty. Both are intense, but in very different registers.',
    examTip:
      'Linking form to meaning is a hallmark of top-band responses. Note how both poets choose forms traditionally associated with love poetry but use them in distinct ways.',
  },

  // ── 2. Conflict ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'How do poets present the reality of battle?',
    cluster: 'Conflict',
    clusterIcon: Swords,
    clusterColour: 'text-red-400',
    poemA: 'Exposure',
    poetA: 'Wilfred Owen',
    poemB: 'The Charge of the Light Brigade',
    poetB: 'Alfred Lord Tennyson',
    thematicFocus: 'War, suffering, duty, the gap between reality and glory',
    intro:
      'Owen and Tennyson both depict soldiers in extreme danger, yet their perspectives are starkly opposed. Owen dismantles any notion of glory; Tennyson celebrates heroic obedience. Comparing them reveals how poetic form and context shape the reader\'s response to war.',
    points: [
      {
        topic: 'The depiction of the enemy',
        poemADetail:
          'In Owen\'s poem, the real enemy is not the opposing army but the weather itself. The soldiers are slowly killed by cold and boredom rather than combat, undermining any narrative of heroic battle.',
        poemBDetail:
          'Tennyson presents a clearly defined enemy in the Russian guns, creating a dramatic scenario of soldiers riding bravely into the "valley of Death". The enemy provides a stage for heroism.',
      },
      {
        topic: 'Structural and sonic effects',
        poemADetail:
          'Owen uses half-rhyme and a refrain-like repetition of "But nothing happens" to create a sense of stagnation and futility. The form itself enacts the monotony of trench warfare.',
        poemBDetail:
          'Tennyson uses galloping dactylic rhythm and insistent repetition to recreate the momentum of a cavalry charge. The sound of the poem is designed to inspire awe and admiration.',
      },
      {
        topic: 'The poets\' relationship to the conflict',
        poemADetail:
          'Owen wrote from direct experience of the Western Front. His authority comes from having witnessed the suffering he describes, and his poetry is explicitly intended to expose the truth about war.',
        poemBDetail:
          'Tennyson wrote from newspaper reports, never having witnessed the battle himself. His poem was a public response designed to honour the soldiers, written from the perspective of a Poet Laureate.',
      },
    ],
    conclusion:
      'Owen and Tennyson show that the way a poet presents war depends heavily on their relationship to it. Owen\'s first-hand experience produces an anti-war poem; Tennyson\'s distance produces a celebration of duty. Together they demonstrate how context shapes poetic purpose.',
    examTip:
      'When the question asks about "reality", address whose reality is being presented. Owen\'s reality is the soldier\'s; Tennyson\'s is the nation\'s. Making this distinction shows sophisticated thinking.',
  },
  {
    id: 4,
    title: 'How do poets explore prejudice and identity?',
    cluster: 'Conflict',
    clusterIcon: Swords,
    clusterColour: 'text-red-400',
    poemA: 'The Destruction of Sennacherib',
    poetA: 'Lord Byron',
    poemB: 'Cousin Kate',
    poetB: 'Christina Rossetti',
    thematicFocus: 'Power, injustice, the voiceless, moral judgement',
    intro:
      'Both Byron and Rossetti explore situations where power is wielded unjustly, though in very different contexts -- one in the theatre of war, the other in the domestic sphere. Together they show that conflict is not limited to the battlefield.',
    points: [
      {
        topic: 'The source of power and conflict',
        poemADetail:
          'Byron retells a biblical narrative in which divine power destroys an entire army overnight. The conflict is between mortal arrogance and an unstoppable supernatural force, presented with vivid, sweeping imagery.',
        poemBDetail:
          'Rossetti presents a domestic conflict driven by class and gender. The speaker\'s "lord" uses his social power to seduce and abandon her, while her cousin benefits from the same system that punished the speaker.',
      },
      {
        topic: 'Voice and perspective',
        poemADetail:
          'Byron uses a detached, third-person narrative voice with a grandly rhythmic manner. The reader observes from above, like a witness to an epic spectacle, and the Assyrian soldiers are more symbols than individuals.',
        poemBDetail:
          'Rossetti uses a bitter, intimate first-person voice. The speaker addresses her cousin directly, and her anger and pain are personal and specific. This dramatic monologue invites the reader to sympathise.',
      },
      {
        topic: 'How form reinforces meaning',
        poemADetail:
          'Byron\'s anapaestic tetrameter creates a galloping, relentless rhythm that mirrors the speed of divine destruction. The regularity of the form suggests the inevitability of the army\'s defeat.',
        poemBDetail:
          'Rossetti uses a ballad form with a refrain-like structure, echoing folk traditions of wronged women telling their stories. The simplicity of the form makes the injustice feel timeless and universal.',
      },
    ],
    conclusion:
      'Byron and Rossetti both condemn the abuse of power, but from vastly different scales. Byron\'s is cosmic and impersonal; Rossetti\'s is intimate and gendered. Together they demonstrate that conflict can operate at every level of human experience.',
    examTip:
      'Cross-cluster comparisons are not required in the OCR exam, but comparing poems within the Conflict cluster that address different kinds of conflict shows range and independence of thought.',
  },

  // ── 3. Youth & Age ─────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'How do poets present the passing of time?',
    cluster: 'Youth and Age',
    clusterIcon: Clock,
    clusterColour: 'text-amber-400',
    poemA: 'When I Have Fears',
    poetA: 'John Keats',
    poemB: 'Crossing the Bar',
    poetB: 'Alfred Lord Tennyson',
    thematicFocus: 'Mortality, fear, acceptance, time',
    intro:
      'Both Keats and Tennyson confront their own mortality, but their emotional responses could not be more different. Keats is terrified of dying before he can fulfil his potential; Tennyson faces death with calm acceptance. Comparing them reveals contrasting attitudes to time and legacy.',
    points: [
      {
        topic: 'The speaker\'s attitude to death',
        poemADetail:
          'Keats expresses raw fear. His poem catalogues what he stands to lose -- unwritten books, unexperienced love, the beauty of the night sky -- creating a crescendo of anxiety about time running out.',
        poemBDetail:
          'Tennyson is at peace. His extended metaphor of crossing a sandbar into the open sea presents death as a natural transition rather than a loss. He explicitly asks that there be "no moaning" at his departure.',
      },
      {
        topic: 'Use of form and structure',
        poemADetail:
          'Keats writes in a Shakespearean sonnet, using the three quatrains to build mounting fear before the final couplet, which resolves -- or rather dissolves -- into a kind of numb acceptance.',
        poemBDetail:
          'Tennyson uses four short, hymn-like stanzas with an ABAB rhyme scheme. The regularity and brevity create a sense of calm certainty, as if the speaker has already made peace with what is coming.',
      },
      {
        topic: 'Context and biographical connection',
        poemADetail:
          'Keats wrote this poem at 22, already fearing the tuberculosis that would kill him at 25. His fear of dying young is painfully literal, not a poetic conceit.',
        poemBDetail:
          'Tennyson wrote this poem at 80, near the end of a long and celebrated life. He asked that it always be placed last in any collection of his poems, treating it as his farewell.',
      },
    ],
    conclusion:
      'Keats and Tennyson represent opposite ends of the spectrum in confronting mortality. Keats rages against the dying of the light; Tennyson sails calmly into it. Their contrasting life stages make the comparison especially rich.',
    examTip:
      'Biographical context is especially powerful here because both poets are writing about their own deaths. Use it to explain why their attitudes differ, not just to add background information.',
  },
  {
    id: 6,
    title: 'How do poets present the parent-child relationship?',
    cluster: 'Youth and Age',
    clusterIcon: Clock,
    clusterColour: 'text-amber-400',
    poemA: 'On My First Son',
    poetA: 'Ben Jonson',
    poemB: 'The Song of the Old Mother',
    poetB: 'W.B. Yeats',
    thematicFocus: 'Parenthood, sacrifice, grief, generational tension',
    intro:
      'Both Jonson and Yeats explore the emotional weight of parenthood, though Jonson grieves for a child lost to death while Yeats voices the exhaustion of a mother whose labour goes unnoticed. Together they show the range of parental experience from devastating loss to quiet resentment.',
    points: [
      {
        topic: 'The emotional core of the poem',
        poemADetail:
          'Jonson\'s poem is an elegy for his seven-year-old son. The pain is sharpened by the metaphor of the child as his "best piece of poetry" -- a creator mourning the destruction of his finest creation.',
        poemBDetail:
          'Yeats\'s speaker is not grieving a death but a way of life. The old mother\'s daily labour -- kindling fires, cleaning, cooking -- is contrasted with the ease of the young, creating a tone of weary bitterness.',
      },
      {
        topic: 'Use of voice and address',
        poemADetail:
          'Jonson addresses his dead son directly, creating an intimate, one-sided conversation. The second-person address makes the grief immediate and personal.',
        poemBDetail:
          'Yeats uses a first-person dramatic monologue in the voice of the mother herself. Her voice is simple and direct, rooted in the physical world of daily work.',
      },
      {
        topic: 'How each poem handles time',
        poemADetail:
          'Jonson tries to console himself by arguing that his son has escaped the suffering of growing old. Time is the enemy that the child has been spared.',
        poemBDetail:
          'For Yeats\'s speaker, time is a relentless cycle of labour. The daily round of tasks -- fire to fire, dawn to dusk -- creates a sense of time as entrapment.',
      },
    ],
    conclusion:
      'Jonson and Yeats both reveal that parenthood is defined by sacrifice, but Jonson\'s sacrifice is endured in grief while Yeats\'s is endured in exhaustion. Both poems gain power from their simplicity of language.',
    examTip:
      'The question may ask about "relationships" broadly. Framing parent-child relationships as a specific type of relationship shows you can narrow your focus effectively.',
  },

  // ── 4. Power & Natural World ───────────────────────────────────────────────
  {
    id: 7,
    title: 'How do poets present the power of nature?',
    cluster: 'Power and the Natural World',
    clusterIcon: Mountain,
    clusterColour: 'text-emerald-400',
    poemA: 'Ozymandias',
    poetA: 'Percy Bysshe Shelley',
    poemB: 'Ode to the West Wind',
    poetB: 'Percy Bysshe Shelley',
    thematicFocus: 'Nature\'s power, human impermanence, destruction and renewal',
    intro:
      'Both poems are by Shelley, yet they present nature\'s power in different lights. In Ozymandias, nature is a silent destroyer that outlasts human arrogance. In Ode to the West Wind, nature is an active, elemental force that the speaker longs to harness. Comparing two poems by the same poet reveals how context and form shape meaning.',
    points: [
      {
        topic: 'Nature as destroyer versus nature as creator',
        poemADetail:
          'In Ozymandias, nature works through time. The desert has buried an empire and eroded a statue to rubble. Nature\'s power is patient, irresistible, and humbling.',
        poemBDetail:
          'In Ode to the West Wind, nature is both destroyer and preserver simultaneously. The wind scatters dead leaves but also carries seeds. Its power is dynamic and cyclical rather than merely erosive.',
      },
      {
        topic: 'The speaker\'s relationship to nature',
        poemADetail:
          'The speaker of Ozymandias is a detached observer, reporting a traveller\'s story. He stands outside the scene, inviting the reader to draw their own conclusions about human vanity.',
        poemBDetail:
          'The speaker of Ode to the West Wind is passionately engaged with nature, begging the wind to lift him, carry him, and make him its instrument. The relationship is one of desperate identification.',
      },
      {
        topic: 'Form and its effect on meaning',
        poemADetail:
          'Ozymandias is a sonnet -- a compact, controlled form that mirrors the theme of containment and collapse. The fragmented syntax of the inscription mimics the statue\'s physical decay.',
        poemBDetail:
          'Ode to the West Wind uses terza rima, a demanding interlocking rhyme scheme that propels the reader forward, mirroring the unstoppable momentum of the wind itself.',
      },
    ],
    conclusion:
      'Comparing two Shelley poems reveals his range: Ozymandias uses nature to humble human arrogance, while Ode to the West Wind uses nature as a model for creative and political energy. Both demonstrate that nature\'s power dwarfs human ambition.',
    examTip:
      'Comparing two poems by the same poet is a strong strategy. It allows you to argue that differences in form and context produce different meanings even from the same authorial voice.',
  },
  {
    id: 8,
    title: 'How do poets present urban versus rural environments?',
    cluster: 'Power and the Natural World',
    clusterIcon: Mountain,
    clusterColour: 'text-emerald-400',
    poemA: 'London',
    poetA: 'William Blake',
    poemB: 'Composed Upon Westminster Bridge',
    poetB: 'William Wordsworth',
    thematicFocus: 'City, nature, perspective, social criticism',
    intro:
      'Blake and Wordsworth both write about London, yet they see entirely different cities. Blake walks the streets at night and hears suffering; Wordsworth gazes at the skyline at dawn and sees beauty. Together they show how the poet\'s purpose and timing transform the same subject.',
    points: [
      {
        topic: 'What the poet chooses to see',
        poemADetail:
          'Blake focuses on the people of London -- the chimney sweep, the soldier, the harlot. His London is defined by human suffering caused by institutions: the Church, the monarchy, and exploitation.',
        poemBDetail:
          'Wordsworth focuses on the physical city at dawn, before its inhabitants are awake. His London is empty, still, and beautiful -- a landscape rather than a society.',
      },
      {
        topic: 'Language and imagery',
        poemADetail:
          'Blake uses the repeated word "charter\'d" to suggest that even the streets and the river have been claimed and controlled. His imagery is of restriction, suffering, and moral corruption.',
        poemBDetail:
          'Wordsworth uses language normally reserved for natural landscapes -- "majesty", "calm", "bright" -- applying it to the man-made city. This reversal is his central conceit.',
      },
      {
        topic: 'Tone and purpose',
        poemADetail:
          'Blake\'s tone is angry and accusatory. He is writing protest poetry, designed to expose injustice and provoke change.',
        poemBDetail:
          'Wordsworth\'s tone is awestruck and reverent. He is writing a Petrarchan sonnet of praise, designed to capture a single transcendent moment of beauty.',
      },
    ],
    conclusion:
      'Blake and Wordsworth demonstrate that the "same" place can produce opposite poems. Blake sees a political city; Wordsworth sees a natural one. The comparison is a powerful example of how perspective determines meaning.',
    examTip:
      'This pairing works brilliantly for questions about "place" or "environment". Emphasise that neither poet is wrong -- they are writing for different purposes, which is the key analytical point.',
  },

  // ── 5. Cross-cluster (Love + Conflict) ─────────────────────────────────────
  {
    id: 9,
    title: 'How do poets present the conflict within relationships?',
    cluster: 'Love and Relationships / Conflict',
    clusterIcon: Heart,
    clusterColour: 'text-pink-400',
    poemA: 'Neutral Tones',
    poetA: 'Thomas Hardy',
    poemB: 'The Man He Killed',
    poetB: 'Thomas Hardy',
    thematicFocus: 'Inner conflict, disillusionment, the gap between expectation and reality',
    intro:
      'Both poems are by Hardy and both explore a kind of disillusionment -- one romantic, the other military. In Neutral Tones, a relationship has died; in The Man He Killed, a soldier realises the absurdity of killing a stranger. Comparing them reveals Hardy\'s consistent interest in the cruelty of circumstance.',
    points: [
      {
        topic: 'The nature of the conflict',
        poemADetail:
          'The conflict in Neutral Tones is internal and emotional. The speaker revisits a moment when love died and recognises that the relationship had been built on deception.',
        poemBDetail:
          'The conflict in The Man He Killed is both external (the act of killing) and internal (the speaker\'s inability to justify it). The colloquial tone masks a deep moral crisis.',
      },
      {
        topic: 'Use of setting and atmosphere',
        poemADetail:
          'Hardy uses a bleak winter scene -- a white sun, a grey pond, fallen leaves -- to externalise the speaker\'s emotional state. The setting is as dead as the relationship.',
        poemBDetail:
          'Hardy uses the setting of a pub, where the speaker tells his story informally. The casual, domestic setting makes the violence he describes even more jarring by contrast.',
      },
      {
        topic: 'How each poem handles truth and self-deception',
        poemADetail:
          'The speaker of Neutral Tones has been forced to confront an unwelcome truth about love. The poem is a record of disillusionment, and its cold tone suggests the speaker has shut down emotionally.',
        poemBDetail:
          'The speaker of The Man He Killed tries to justify the killing but cannot make his reasoning hold. The repeated hesitations and dashes reveal a man arguing with himself and losing.',
      },
    ],
    conclusion:
      'Hardy consistently presents life as governed by cruel irony -- in love and in war, people are trapped by circumstances beyond their control. Comparing these two poems reveals a worldview, not just a theme.',
    examTip:
      'Comparing two poems by the same poet from different clusters is an advanced move. It lets you discuss authorial voice and worldview, which pushes your analysis towards the top band.',
  },

  // ── 6. Cross-cluster (Youth & Age + Power & Natural World) ─────────────────
  {
    id: 10,
    title: 'How do poets use nature to explore human experience?',
    cluster: 'Youth and Age / Power and the Natural World',
    clusterIcon: Mountain,
    clusterColour: 'text-emerald-400',
    poemA: 'I Remember, I Remember',
    poetA: 'Thomas Hood',
    poemB: 'Inversnaid',
    poetB: 'Gerard Manley Hopkins',
    thematicFocus: 'Nature, childhood, memory, preservation',
    intro:
      'Both Hood and Hopkins celebrate the natural world, but for different reasons. Hood uses nature to evoke the lost paradise of childhood; Hopkins uses it to argue for the preservation of wild places. Together they show nature as both a personal and a political subject.',
    points: [
      {
        topic: 'The role of nature in each poem',
        poemADetail:
          'For Hood, nature is inseparable from childhood memory. Flowers, trees, and sunshine are the furniture of a lost world. Nature is nostalgic -- a backdrop to innocence rather than a subject in its own right.',
        poemBDetail:
          'For Hopkins, nature is the primary subject. The wild stream, the dark pool, and the heathery hillside are described with intense, sensory precision. Nature is celebrated for its own sake.',
      },
      {
        topic: 'Language and technique',
        poemADetail:
          'Hood uses simple, song-like quatrains and anaphora ("I remember, I remember") to create a litany of lost joys. The simplicity of the language mirrors the simplicity of childhood.',
        poemBDetail:
          'Hopkins uses his signature sprung rhythm and compound words to capture the energy of the natural world. His language is dense, inventive, and physically demanding to read, mirroring the wildness he describes.',
      },
      {
        topic: 'The poet\'s message about nature and time',
        poemADetail:
          'Hood\'s message is personal and elegiac: childhood and its natural settings are gone forever, and adulthood is a diminished state. Nature marks what has been lost.',
        poemBDetail:
          'Hopkins\'s message is urgent and public: wild places must be protected from human interference. His final plea is a direct argument for conservation, ahead of its time.',
      },
    ],
    conclusion:
      'Hood and Hopkins both value the natural world deeply, but Hood looks backward in sorrow while Hopkins looks forward in alarm. One mourns a personal loss; the other warns of a collective one.',
    examTip:
      'Cross-cluster comparisons show the examiner you can think independently. Just make sure the thematic link is clear and that you analyse methods, not just content.',
  },
]

// ─── Cluster badge colours ───────────────────────────────────────────────────

const CLUSTER_BADGE: Record<string, string> = {
  'Love and Relationships': 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Conflict: 'bg-red-500/15 text-red-300 border-red-500/20',
  'Youth and Age': 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  'Power and the Natural World':
    'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  'Love and Relationships / Conflict':
    'bg-violet-500/15 text-violet-300 border-violet-500/20',
  'Youth and Age / Power and the Natural World':
    'bg-teal-500/15 text-teal-300 border-teal-500/20',
}

// ─── Expandable plan card ────────────────────────────────────────────────────

function EssayPlanCard({ plan }: { plan: EssayPlan }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-border/60 bg-card transition-all duration-200 hover:border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <PenLine className="size-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-heading-md font-heading text-foreground pr-8">
            {plan.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${
                CLUSTER_BADGE[plan.cluster] ??
                'bg-muted text-muted-foreground border-border'
              }`}
            >
              {plan.cluster}
            </span>
            <span className="text-caption text-muted-foreground">
              {plan.poemA} vs {plan.poemB}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-border/40 px-5 pb-6 pt-5 sm:px-6">
          {/* Thematic focus */}
          <div className="mb-5 rounded-xl bg-muted/30 p-4">
            <p className="text-caption font-semibold uppercase tracking-wider text-muted-foreground">
              Thematic focus
            </p>
            <p className="mt-1 text-body-sm text-foreground">
              {plan.thematicFocus}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              Introduction
            </h4>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              {plan.intro}
            </p>
          </div>

          {/* Main body points */}
          <div className="mb-6 space-y-5">
            {plan.points.map((point, i) => (
              <div key={i} className="rounded-xl border border-border/40 bg-background/50 p-4">
                <h4 className="mb-3 text-sm font-semibold text-foreground">
                  Point {i + 1}: {point.topic}
                </h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="mb-1 text-caption font-semibold text-primary">
                      {plan.poemA} ({plan.poetA})
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {point.poemADetail}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-caption font-semibold text-primary">
                      {plan.poemB} ({plan.poetB})
                    </p>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {point.poemBDetail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mb-5">
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              Conclusion
            </h4>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              {plan.conclusion}
            </p>
          </div>

          {/* Exam tip */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
            <div className="flex items-start gap-2">
              <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-400" />
              <div>
                <p className="text-caption font-semibold text-amber-300">
                  Exam tip
                </p>
                <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                  {plan.examTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function OCREssayPlansPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back nav ──────────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to OCR Anthology
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              OCR Towards a World Unknown
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Poetry Comparison Essay Plans
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            10 ready-made essay plans covering all 4 OCR clusters. Each plan
            pairs two poems, provides a three-point structure with side-by-side
            analysis, and includes an exam tip.
          </p>
        </div>
      </section>

      {/* ── How to use ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-400" />
          <div>
            <h2 className="text-heading-sm font-heading text-foreground">
              How to use these plans
            </h2>
            <ul className="mt-2 space-y-1.5 text-body-sm text-muted-foreground leading-relaxed">
              <li>
                Each plan follows a proven comparison structure: shared theme,
                three analytical points comparing both poems, and a conclusion
                that weighs up the differences.
              </li>
              <li>
                Use them as starting points -- adapt the points to your own
                interpretation and add your own quotation analysis from the
                anthology.
              </li>
              <li>
                The OCR exam asks you to compare poems from the cluster you have
                studied. Cross-cluster plans (marked below) are included for
                additional practice but will not appear as exam questions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Essay plans ───────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            All 10 Essay Plans
          </h2>
        </div>

        <div className="space-y-4">
          {ESSAY_PLANS.map((plan) => (
            <EssayPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      {/* ── Copyright note ────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          A note on quotations
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          These essay plans discuss themes, methods and context rather than
          reproducing copyrighted poem text. To complete your essays you will
          need to select and analyse your own quotations from the OCR{' '}
          <em>Towards a World Unknown</em> anthology (ISBN 9781398384408).
          Public-domain poems have full study pages available on this site.
        </p>
      </section>

      {/* ── Back CTA ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Explore the anthology
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Head back to the OCR hub to study individual poems, explore themes, or
          learn how to write a comparison essay.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry/ocr" />}
        >
          Back to OCR Anthology
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
