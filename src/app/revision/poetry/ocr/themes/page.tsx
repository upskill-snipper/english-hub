'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Lightbulb,
  Heart,
  Swords,
  Clock,
  Mountain,
  Flame,
  Skull,
  Users,
  Fingerprint,
  Leaf,
  Home,
  Eye,
  Shield,
  Brain,
  HandHeart,
  Footprints,
  Scale,
  Cloudy,
  Crown,
  Puzzle,
  PenLine,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ThemePoem {
  title: string
  poet: string
  cluster: string
  note: string
}

interface Theme {
  name: string
  icon: typeof Heart
  iconColour: string
  iconBg: string
  description: string
  poems: ThemePoem[]
}

// ─── Cluster badge styling ───────────────────────────────────────────────────

const CLUSTER_BADGE: Record<string, string> = {
  'Love and Relationships': 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Conflict: 'bg-red-500/15 text-red-300 border-red-500/20',
  'Youth and Age': 'bg-amber-500/15 text-amber-700 border-amber-500/20',
  'Power and the Natural World': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
}

// ─── Theme data ──────────────────────────────────────────────────────────────
//
// Analysis references themes and methods only. No copyrighted poem text
// is reproduced. Students should consult the OCR "Towards a World Unknown"
// anthology (ISBN 9781398384408) for full poems.
// ─────────────────────────────────────────────────────────────────────────────

const THEMES: Theme[] = [
  {
    name: 'Love and Devotion',
    icon: Heart,
    iconColour: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    description:
      'Romantic love, adoration, and the language of devotion. Poets explore love as spiritual transcendence, physical beauty, playful commitment, and raw vulnerability.',
    poems: [
      {
        title: 'Sonnet 43',
        poet: 'Elizabeth Barrett Browning',
        cluster: 'Love and Relationships',
        note: 'Love as a spiritual, limitless force measured in abstract dimensions.',
      },
      {
        title: 'She Walks in Beauty',
        poet: 'Lord Byron',
        cluster: 'Love and Relationships',
        note: 'Reverent admiration of beauty that harmonises darkness and light.',
      },
      {
        title: 'i wanna be yours',
        poet: 'John Cooper Clarke',
        cluster: 'Love and Relationships',
        note: 'Devotion expressed through everyday objects in a punk-poetry register.',
      },
      {
        title: 'Valentine',
        poet: 'Carol Ann Duffy',
        cluster: 'Love and Relationships',
        note: 'Love as honest and painful, rejecting cliched romantic gestures.',
      },
    ],
  },
  {
    name: 'Loss and Grief',
    icon: Skull,
    iconColour: 'text-slate-400',
    iconBg: 'bg-slate-500/10',
    description:
      'The pain of losing someone through death, distance, or emotional withdrawal. Poets explore how grief reshapes identity and how memory preserves the lost.',
    poems: [
      {
        title: 'Neutral Tones',
        poet: 'Thomas Hardy',
        cluster: 'Love and Relationships',
        note: 'A bleak winter scene mirrors the death of a relationship, with loss permanently scarring memory.',
      },
      {
        title: 'A Complaint',
        poet: 'William Wordsworth',
        cluster: 'Love and Relationships',
        note: 'Grief for a cooled friendship, expressed through a dwindling fountain metaphor.',
      },
      {
        title: 'She Dwelt Among the Untrodden Ways',
        poet: 'William Wordsworth',
        cluster: 'Love and Relationships',
        note: 'An elegy for an unknown woman whose death matters only to the speaker.',
      },
      {
        title: 'Long Distance II',
        poet: 'Tony Harrison',
        cluster: 'Love and Relationships',
        note: 'A father maintains domestic rituals for his dead wife; the son discovers he does the same.',
      },
      {
        title: 'On My First Son',
        poet: 'Ben Jonson',
        cluster: 'Youth and Age',
        note: "A father's anguished elegy for his seven-year-old child.",
      },
      {
        title: 'Poppies',
        poet: 'Jane Weir',
        cluster: 'Conflict',
        note: "A mother's grief conveyed through sensory domestic details as her son leaves for war.",
      },
      {
        title: 'What Were They Like?',
        poet: 'Denise Levertov',
        cluster: 'Conflict',
        note: 'Collective grief for an entire culture destroyed by war.',
      },
      {
        title: 'From a Mother in a Refugee Camp',
        poet: 'Chinua Achebe',
        cluster: 'Power and the Natural World',
        note: "A mother's tender, doomed act of care for her dying child in a refugee camp.",
      },
    ],
  },
  {
    name: 'Conflict and War',
    icon: Swords,
    iconColour: 'text-red-400',
    iconBg: 'bg-red-500/10',
    description:
      'The experience of warfare from multiple perspectives: soldiers in the trenches, observers at home, victims of violence, and photographers who document it.',
    poems: [
      {
        title: 'Exposure',
        poet: 'Wilfred Owen',
        cluster: 'Conflict',
        note: 'The slow death of soldiers through cold and inaction rather than enemy fire.',
      },
      {
        title: 'The Charge of the Light Brigade',
        poet: 'Alfred Lord Tennyson',
        cluster: 'Conflict',
        note: 'Heroic duty celebrated in galloping rhythm; soldiers ride knowingly into death.',
      },
      {
        title: 'The Destruction of Sennacherib',
        poet: 'Lord Byron',
        cluster: 'Conflict',
        note: 'Divine power annihilates an invading army in vivid, sweeping imagery.',
      },
      {
        title: 'The Man He Killed',
        poet: 'Thomas Hardy',
        cluster: 'Conflict',
        note: "A soldier's colloquial, halting attempt to justify killing another human being.",
      },
      {
        title: 'War Photographer',
        poet: 'Carole Satyamurti',
        cluster: 'Conflict',
        note: "The moral cost of documenting other people's suffering for a distant audience.",
      },
      {
        title: 'Belfast Confetti',
        poet: 'Ciaran Carson',
        cluster: 'Conflict',
        note: 'Urban violence in Belfast rendered through fragmented punctuation and syntax.',
      },
    ],
  },
  {
    name: 'Identity and Belonging',
    icon: Fingerprint,
    iconColour: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    description:
      'Questions of selfhood, cultural heritage, class, race, and where a person fits in society. Poets challenge labels and assert their right to self-definition.',
    poems: [
      {
        title: 'Half-caste',
        poet: 'John Agard',
        cluster: 'Conflict',
        note: 'A defiant, witty dismantling of a racial slur, celebrating mixed heritage.',
      },
      {
        title: 'No Problem',
        poet: 'Benjamin Zephaniah',
        cluster: 'Conflict',
        note: 'A dub-rhythmed assertion of self against racial stereotyping.',
      },
      {
        title: 'The Class Game',
        poet: 'Mary Casey',
        cluster: 'Conflict',
        note: 'A Liverpudlian working-class voice fires back at middle-class snobbery.',
      },
      {
        title: 'Honour Killing',
        poet: 'Imtiaz Dharker',
        cluster: 'Conflict',
        note: 'A woman strips away cultural expectations to find her true self beneath.',
      },
      {
        title: 'Flag',
        poet: 'John Agard',
        cluster: 'Conflict',
        note: 'An interrogation of national identity and the dangerous power of symbols.',
      },
      {
        title: 'The \u00c9migr\u00e9e',
        poet: 'Carol Rumens',
        cluster: 'Youth and Age',
        note: 'A woman clings to a sunlit memory of the homeland she can never return to.',
      },
      {
        title: 'Taller',
        poet: 'Toby Campion',
        cluster: 'Love and Relationships',
        note: 'A young speaker reflects on identity, family, and growing into himself.',
      },
      {
        title: 'Lineage',
        poet: 'Margaret Walker',
        cluster: 'Youth and Age',
        note: 'A granddaughter celebrates the strength of her foremothers and questions her own.',
      },
    ],
  },
  {
    name: 'Power and Authority',
    icon: Crown,
    iconColour: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    description:
      'Human power structures -- political, military, social, and domestic. Poets examine who holds power, how it is maintained, and what happens when it crumbles.',
    poems: [
      {
        title: 'Ozymandias',
        poet: 'Percy Bysshe Shelley',
        cluster: 'Power and the Natural World',
        note: 'A shattered statue reveals the futility of tyrannical power against time.',
      },
      {
        title: 'London',
        poet: 'William Blake',
        cluster: 'Power and the Natural World',
        note: 'Institutional power -- Church, monarchy, commerce -- mapped onto the streets of London.',
      },
      {
        title: 'Cousin Kate',
        poet: 'Christina Rossetti',
        cluster: 'Conflict',
        note: "A lord's sexual and social power exploits a lower-class woman.",
      },
      {
        title: 'The Charge of the Light Brigade',
        poet: 'Alfred Lord Tennyson',
        cluster: 'Conflict',
        note: 'Military authority sends soldiers to certain death; duty is unquestioned.',
      },
      {
        title: 'Living Space',
        poet: 'Imtiaz Dharker',
        cluster: 'Power and the Natural World',
        note: 'Human resilience in the face of poverty and precarious living conditions.',
      },
    ],
  },
  {
    name: 'Nature and Environment',
    icon: Leaf,
    iconColour: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    description:
      'The natural world as a source of beauty, terror, and spiritual meaning. Poets celebrate wilderness, mourn its destruction, and use it to reflect human states.',
    poems: [
      {
        title: 'Ode to the West Wind',
        poet: 'Percy Bysshe Shelley',
        cluster: 'Power and the Natural World',
        note: 'The wind as destroyer and preserver -- a force of creative and political renewal.',
      },
      {
        title: 'Inversnaid',
        poet: 'Gerard Manley Hopkins',
        cluster: 'Power and the Natural World',
        note: 'A passionate plea to preserve wild places from human interference.',
      },
      {
        title: 'The Eagle',
        poet: 'Alfred Lord Tennyson',
        cluster: 'Power and the Natural World',
        note: 'A miniature portrait of a majestic bird poised between earth, sea, and sky.',
      },
      {
        title: 'Composed Upon Westminster Bridge',
        poet: 'William Wordsworth',
        cluster: 'Power and the Natural World',
        note: 'A city at dawn described in the language of natural beauty.',
      },
      {
        title: 'The Prelude (extract) - 1799 two-part Prelude (Part First, lines 81-129)',
        poet: 'William Wordsworth',
        cluster: 'Power and the Natural World',
        note: "Nature as a terrifying, educative force that dwarfs human confidence. OCR prescribes the 1799 two-part Prelude (Part First, lines 81-129), drafted in Wordsworth's lifetime but unpublished until 1973 - not the 1850 posthumous Prelude used by AQA. The wording is materially different; never cross-quote between versions.",
      },
      {
        title: 'Wind',
        poet: 'Ted Hughes',
        cluster: 'Power and the Natural World',
        note: 'Violent wind besieges a house, testing the boundary between safety and chaos.',
      },
      {
        title: 'Storm on the Island',
        poet: 'Seamus Heaney',
        cluster: 'Power and the Natural World',
        note: 'A community braces against a storm; the absence of trees becomes its own threat.',
      },
      {
        title: 'Snow',
        poet: 'Louis MacNeice',
        cluster: 'Power and the Natural World',
        note: 'A sudden snowfall reveals the overwhelming variety and strangeness of the world.',
      },
      {
        title: 'Below the Green Corrie',
        poet: 'Norman MacCaig',
        cluster: 'Power and the Natural World',
        note: "Highland mountains personified as bandits who demand the speaker's life and praise.",
      },
      {
        title: 'At a Potato Digging',
        poet: 'Seamus Heaney',
        cluster: 'Power and the Natural World',
        note: 'Modern farmers digging potatoes are haunted by the folk memory of the Irish Famine.',
      },
    ],
  },
  {
    name: 'Memory and Nostalgia',
    icon: Brain,
    iconColour: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    description:
      'The power of memory to preserve, distort, and haunt. Poets explore nostalgia for childhood, the pain of remembering, and the gap between past and present.',
    poems: [
      {
        title: 'I Remember, I Remember',
        poet: 'Thomas Hood',
        cluster: 'Youth and Age',
        note: 'A litany of lost childhood joys contrasted with the diminished present.',
      },
      {
        title: 'Piano',
        poet: 'D.H. Lawrence',
        cluster: 'Youth and Age',
        note: 'A song carries the speaker back to the lost intimacy of childhood.',
      },
      {
        title: 'Neutral Tones',
        poet: 'Thomas Hardy',
        cluster: 'Love and Relationships',
        note: "A single bitter memory of a relationship's death colours all subsequent experience.",
      },
      {
        title: 'On an Old Song',
        poet: 'Douglas Dunn',
        cluster: 'Youth and Age',
        note: 'A folk tune unlocks a meditation on time, memory, and past generations.',
      },
      {
        title: 'Where They Lived',
        poet: 'Norman MacCaig',
        cluster: 'Youth and Age',
        note: 'An empty house haunted by the absence of those who once filled it.',
      },
      {
        title: 'The \u00c9migr\u00e9e',
        poet: 'Carol Rumens',
        cluster: 'Youth and Age',
        note: 'Idealised memory of a homeland that may no longer exist as the speaker remembers it.',
      },
    ],
  },
  {
    name: 'Childhood and Growing Up',
    icon: Footprints,
    iconColour: 'text-clay-600',
    iconBg: 'bg-amber-500/10',
    description:
      'The innocence and freedom of childhood, the pain of growing up, and the moment when a child steps away from a parent.',
    poems: [
      {
        title: 'I Remember, I Remember',
        poet: 'Thomas Hood',
        cluster: 'Youth and Age',
        note: 'Childhood remembered as a lost paradise of unselfconscious joy.',
      },
      {
        title: 'To My Nine-Year-Old Self',
        poet: 'Helen Dunmore',
        cluster: 'Youth and Age',
        note: 'An adult writes an apologetic letter to her younger, braver self.',
      },
      {
        title: 'Walking Away',
        poet: 'C. Day-Lewis',
        cluster: 'Youth and Age',
        note: 'A father watches his son walk away into independence for the first time.',
      },
      {
        title: 'Little Boy Crying',
        poet: 'Mervyn Morris',
        cluster: 'Youth and Age',
        note: 'A father watches his small son rage after a smack and confronts the pain of discipline.',
      },
      {
        title: 'Piano',
        poet: 'D.H. Lawrence',
        cluster: 'Youth and Age',
        note: 'A grown man is reduced to tears by a childhood memory of his mother.',
      },
      {
        title: 'A Child to his Sick Grandfather',
        poet: 'Joanna Baillie',
        cluster: 'Love and Relationships',
        note: 'A child speaks tenderly to his dying grandfather, blending innocence with grief.',
      },
    ],
  },
  {
    name: 'Parent-Child Relationships',
    icon: HandHeart,
    iconColour: 'text-rose-400',
    iconBg: 'bg-rose-500/10',
    description:
      'The bond between parent and child explored from both sides -- the protectiveness, sacrifice, tension, and inevitable separation that parenthood brings.',
    poems: [
      {
        title: 'On My First Son',
        poet: 'Ben Jonson',
        cluster: 'Youth and Age',
        note: 'A father\'s elegy for his child, described as his "best piece of poetry".',
      },
      {
        title: 'The Song of the Old Mother',
        poet: 'W.B. Yeats',
        cluster: 'Youth and Age',
        note: "A mother's weariness contrasted with the idleness of her children.",
      },
      {
        title: 'Follower',
        poet: 'Seamus Heaney',
        cluster: 'Youth and Age',
        note: 'A son worships his ploughman father as a child; the roles reverse as the father ages.',
      },
      {
        title: 'Walking Away',
        poet: 'C. Day-Lewis',
        cluster: 'Youth and Age',
        note: 'The painful act of letting a child go as an expression of love.',
      },
      {
        title: 'Little Boy Crying',
        poet: 'Mervyn Morris',
        cluster: 'Youth and Age',
        note: 'Parental discipline as a form of necessary but painful love.',
      },
      {
        title: 'Catrin',
        poet: 'Gillian Clarke',
        cluster: 'Conflict',
        note: 'A mother remembers the moment of birth and the ongoing tug-of-war with her daughter.',
      },
      {
        title: 'Nettles',
        poet: 'Vernon Scannell',
        cluster: 'Love and Relationships',
        note: "A father's fury after his son is stung becomes a meditation on protective love.",
      },
      {
        title: 'Poppies',
        poet: 'Jane Weir',
        cluster: 'Conflict',
        note: "A mother's quiet grief expressed through domestic rituals and sensory detail.",
      },
      {
        title: 'Lineage',
        poet: 'Margaret Walker',
        cluster: 'Youth and Age',
        note: 'The strength of foremothers celebrated; the speaker questions her own resilience.',
      },
    ],
  },
  {
    name: 'Mortality and the Passage of Time',
    icon: Clock,
    iconColour: 'text-clay-600',
    iconBg: 'bg-orange-500/10',
    description:
      'Confrontations with death and ageing. Poets explore the fear of dying young, the acceptance of old age, and the way time transforms everything.',
    poems: [
      {
        title: 'When I Have Fears',
        poet: 'John Keats',
        cluster: 'Youth and Age',
        note: 'Keats confronts his terror of dying before fulfilling his poetic potential.',
      },
      {
        title: 'Crossing the Bar',
        poet: 'Alfred Lord Tennyson',
        cluster: 'Youth and Age',
        note: 'Death accepted calmly as a sea voyage towards a meeting with the divine.',
      },
      {
        title: 'Death the Leveller',
        poet: 'James Shirley',
        cluster: 'Youth and Age',
        note: 'Death as the great equaliser -- no power or rank can prevent it.',
      },
      {
        title: 'Ozymandias',
        poet: 'Percy Bysshe Shelley',
        cluster: 'Power and the Natural World',
        note: 'Time reduces even the greatest tyrant to dust and rubble.',
      },
      {
        title: 'The Song of the Old Mother',
        poet: 'W.B. Yeats',
        cluster: 'Youth and Age',
        note: "The dying of the fire as a metaphor for the speaker's fading vitality.",
      },
      {
        title: 'One Flesh',
        poet: 'Elizabeth Jennings',
        cluster: 'Love and Relationships',
        note: 'Aged parents observed from a distance, their emotional and physical decline.',
      },
    ],
  },
  {
    name: 'Prejudice and Injustice',
    icon: Scale,
    iconColour: 'text-clay-600',
    iconBg: 'bg-yellow-500/10',
    description:
      'Poets challenge racism, class prejudice, gender inequality, and cultural imperialism. These poems are acts of protest that demand recognition and justice.',
    poems: [
      {
        title: 'Half-caste',
        poet: 'John Agard',
        cluster: 'Conflict',
        note: 'A witty, furious challenge to racial categorisation.',
      },
      {
        title: 'No Problem',
        poet: 'Benjamin Zephaniah',
        cluster: 'Conflict',
        note: 'Racial profiling answered with resilience and rhythmic defiance.',
      },
      {
        title: 'The Class Game',
        poet: 'Mary Casey',
        cluster: 'Conflict',
        note: 'Class snobbery challenged head-on in a working-class Liverpool voice.',
      },
      {
        title: 'Cousin Kate',
        poet: 'Christina Rossetti',
        cluster: 'Conflict',
        note: 'Gender and class exploitation -- a woman discarded by a powerful lord.',
      },
      {
        title: 'London',
        poet: 'William Blake',
        cluster: 'Power and the Natural World',
        note: 'Systemic injustice visible in every face and street of the capital.',
      },
      {
        title: 'What Were They Like?',
        poet: 'Denise Levertov',
        cluster: 'Conflict',
        note: 'Cultural imperialism: the destruction of an entire civilisation through war.',
      },
    ],
  },
  {
    name: 'Place and Home',
    icon: Home,
    iconColour: 'text-teal-400',
    iconBg: 'bg-teal-500/10',
    description:
      'The significance of place -- cities, landscapes, homeland, and the idea of home. Poets explore what it means to belong to a place, to leave one, or to lose one.',
    poems: [
      {
        title: 'London',
        poet: 'William Blake',
        cluster: 'Power and the Natural World',
        note: 'London as a map of human suffering and institutional oppression.',
      },
      {
        title: 'Composed Upon Westminster Bridge',
        poet: 'William Wordsworth',
        cluster: 'Power and the Natural World',
        note: 'London at dawn as a moment of transcendent, silent beauty.',
      },
      {
        title: 'The \u00c9migr\u00e9e',
        poet: 'Carol Rumens',
        cluster: 'Youth and Age',
        note: 'A sunlit homeland preserved in memory against a darker present reality.',
      },
      {
        title: 'Belfast Confetti',
        poet: 'Ciaran Carson',
        cluster: 'Conflict',
        note: 'Belfast as a city made unreadable by violence -- streets become dead ends.',
      },
      {
        title: 'Where They Lived',
        poet: 'Norman MacCaig',
        cluster: 'Youth and Age',
        note: 'An empty house as a metaphor for absence, the traces that people leave on a place.',
      },
      {
        title: 'At a Potato Digging',
        poet: 'Seamus Heaney',
        cluster: 'Power and the Natural World',
        note: 'Irish land haunted by the historical memory of famine.',
      },
    ],
  },
  {
    name: 'The Power of Art and Language',
    icon: PenLine,
    iconColour: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
    description:
      'Poems that reflect on their own medium -- the power of words, music, and art to preserve, transform, and challenge.',
    poems: [
      {
        title: 'Ozymandias',
        poet: 'Percy Bysshe Shelley',
        cluster: 'Power and the Natural World',
        note: "The sculptor's art outlasts the tyrant's empire -- art as a form of preservation.",
      },
      {
        title: 'When I Have Fears',
        poet: 'John Keats',
        cluster: 'Youth and Age',
        note: 'The fear of dying before writing the poetry the speaker feels inside him.',
      },
      {
        title: 'On My First Son',
        poet: 'Ben Jonson',
        cluster: 'Youth and Age',
        note: 'The child described as the father\'s "best piece of poetry" -- art and life entwined.',
      },
      {
        title: 'Half-caste',
        poet: 'John Agard',
        cluster: 'Conflict',
        note: 'Language itself is the battleground -- the speaker reclaims the power to name himself.',
      },
      {
        title: 'Belfast Confetti',
        poet: 'Ciaran Carson',
        cluster: 'Conflict',
        note: 'Punctuation becomes shrapnel -- the poet makes language and violence inseparable.',
      },
    ],
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function OCRThemesPage() {
  const t = useT()
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
          {t('poetry_hub.ocr.back_to_anthology')}
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
              {t('poetry_hub.ocr.badge_anthology')}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {t('poetry_hub.ocr.themes.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {t('poetry_hub.ocr.themes.lead')}
          </p>
        </div>
      </section>

      {/* ── How to use ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-600" />
          <div>
            <h2 className="text-heading-sm font-heading text-foreground">
              {t('poetry_hub.ocr.themes.how_title')}
            </h2>
            <ul className="mt-2 space-y-1.5 text-body-sm text-muted-foreground leading-relaxed">
              <li>
                Each theme lists every poem in the anthology that engages with it, across all 4
                clusters. The cluster each poem belongs to is shown with a coloured badge.
              </li>
              <li>
                In the exam you compare poems from your own cluster. Use this page to find pairings
                within your cluster that share a theme but treat it differently.
              </li>
              <li>
                Many poems appear under multiple themes -- this is deliberate. A strong essay
                recognises that poems are thematically complex.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Theme sections ────────────────────────────────────────────── */}
      {THEMES.map((theme) => (
        <section key={theme.name}>
          <div className="mb-5 flex items-center gap-3">
            <div className={`flex size-10 items-center justify-center rounded-xl ${theme.iconBg}`}>
              <theme.icon className={`size-5 ${theme.iconColour}`} />
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">{theme.name}</h2>
              <p className="text-caption text-muted-foreground">
                {theme.poems.length}{' '}
                {theme.poems.length === 1
                  ? t('poetry_hub.ocr.themes.poem_singular')
                  : t('poetry_hub.ocr.themes.poem_plural')}
              </p>
            </div>
          </div>

          <p className="mb-4 text-body-sm text-muted-foreground leading-relaxed">
            {theme.description}
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {theme.poems.map((poem) => (
              <div
                key={`${theme.name}-${poem.title}-${poem.poet}`}
                className="rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-border"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{poem.title}</h3>
                    <p className="text-caption text-muted-foreground">{poem.poet}</p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[0.6rem] font-medium ${
                      CLUSTER_BADGE[poem.cluster] ?? 'bg-muted text-muted-foreground border-border'
                    }`}
                  >
                    {poem.cluster}
                  </span>
                </div>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{poem.note}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* ── Copyright note ────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          {t('poetry_hub.ocr.themes.notes_title')}
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          These theme descriptions discuss ideas, methods and context rather than reproducing
          copyrighted poem text. You will need a copy of the OCR <em>Towards a World Unknown</em>{' '}
          anthology (ISBN 9781398384408) to read the full poems. Public-domain poems have full
          annotated study pages available on this site.
        </p>
      </section>

      {/* ── Back CTA ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-heading-lg font-heading text-foreground">
          {t('poetry_hub.ocr.themes.explore_more')}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Try our essay plans for ready-made comparison structures, or learn how to write a top-band
          comparison essay.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="default"
            size="lg"
            render={<Link href="/revision/poetry/ocr/essay-plans" />}
          >
            {t('poetry_hub.ocr.cg.essay_plans_cta')}
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            render={<Link href="/revision/poetry/ocr/comparison-guide" />}
          >
            {t('poetry_hub.ocr.themes.comparison_guide_cta')}
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/revision/poetry/ocr" />}>
            {t('poetry_hub.ocr.back_to_anthology')}
          </Button>
        </div>
      </section>
    </div>
  )
}
