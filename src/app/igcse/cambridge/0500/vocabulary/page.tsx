import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  BookOpen,
  Sparkles,
  Leaf,
  Swords,
  Heart,
  Users,
  FlaskConical,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Vocabulary Builder — IGCSE Language A 0500',
    description:
      '100 challenging vocabulary words commonly found in Cambridge IGCSE 0500 passages, organised by theme. Each with definition, example sentence, and synonym.',
  },
  title: 'Vocabulary Builder — IGCSE Language A 0500',
  description:
    '100 challenging vocabulary words commonly found in Cambridge IGCSE 0500 passages, organised by theme. Each with definition, example sentence, and synonym.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/vocabulary',
  },
}

type VocabWord = {
  word: string
  definition: string
  example: string
  synonym: string
}

type VocabTheme = {
  theme: string
  description: string
  icon: 'nature' | 'conflict' | 'emotion' | 'society' | 'science'
  words: VocabWord[]
}

const themes: VocabTheme[] = [
  {
    theme: 'Nature and landscape',
    description:
      'Words that appear in travel writing, descriptive passages, and environmental texts.',
    icon: 'nature',
    words: [
      {
        word: 'verdant',
        definition: 'Rich green in colour; lush with vegetation.',
        example: 'The verdant hillside was streaked with wildflowers after the spring rains.',
        synonym: 'lush',
      },
      {
        word: 'arid',
        definition: 'Extremely dry; having little or no rainfall.',
        example: 'The arid plains stretched for miles without a single tree to break the horizon.',
        synonym: 'parched',
      },
      {
        word: 'pristine',
        definition: 'In its original, unspoilt condition; perfectly clean.',
        example: 'The lake was pristine, its surface reflecting the mountains without a ripple.',
        synonym: 'unspoilt',
      },
      {
        word: 'barren',
        definition: 'Too poor in quality to produce vegetation; empty and lifeless.',
        example: 'After the fire, the forest floor was barren, reduced to black ash and silence.',
        synonym: 'desolate',
      },
      {
        word: 'tempestuous',
        definition: 'Characterised by strong, turbulent winds and storms.',
        example: 'The tempestuous sea hurled waves against the harbour wall with relentless force.',
        synonym: 'stormy',
      },
      {
        word: 'luminous',
        definition: 'Giving off light; bright or shining, especially in the dark.',
        example: 'The luminous moon hung low over the water, casting a silver path across the bay.',
        synonym: 'radiant',
      },
      {
        word: 'undulating',
        definition: 'Moving with a smooth, wave-like motion; rising and falling.',
        example:
          'The undulating landscape of the Downs made the walk both challenging and beautiful.',
        synonym: 'rolling',
      },
      {
        word: 'ethereal',
        definition: 'Extremely delicate, light, and otherworldly.',
        example:
          'An ethereal mist clung to the valley floor, blurring the line between land and air.',
        synonym: 'otherworldly',
      },
      {
        word: 'rugged',
        definition: 'Having a rough, uneven surface or terrain.',
        example: 'The rugged coastline was a maze of jagged rocks and hidden coves.',
        synonym: 'craggy',
      },
      {
        word: 'stagnant',
        definition: 'Having no current or flow; still and often foul-smelling.',
        example: 'The stagnant pond was covered in a thick layer of green algae.',
        synonym: 'motionless',
      },
      {
        word: 'canopy',
        definition: 'The uppermost layer of branches and leaves in a forest.',
        example:
          'Sunlight barely penetrated the dense canopy, leaving the forest floor in permanent twilight.',
        synonym: 'covering',
      },
      {
        word: 'terrain',
        definition: 'A stretch of land, especially with regard to its physical features.',
        example: 'The mountainous terrain made progress painfully slow for the expedition team.',
        synonym: 'landscape',
      },
      {
        word: 'tranquil',
        definition: 'Free from disturbance; calm and peaceful.',
        example: 'The tranquil garden was the only place she could think clearly.',
        synonym: 'serene',
      },
      {
        word: 'torrential',
        definition: 'Falling in large amounts and with great force (of rain).',
        example: 'Torrential rain had turned the path into a river of brown water within minutes.',
        synonym: 'heavy',
      },
      {
        word: 'silhouette',
        definition: 'The dark shape and outline of something visible against a lighter background.',
        example: 'The silhouette of the lighthouse stood sharp against the orange sky.',
        synonym: 'outline',
      },
      {
        word: 'iridescent',
        definition: 'Showing luminous colours that seem to change when seen from different angles.',
        example:
          'The oil on the puddle was iridescent, shifting from purple to green as she moved.',
        synonym: 'shimmering',
      },
      {
        word: 'precipitous',
        definition: 'Dangerously high or steep.',
        example: 'The precipitous cliff dropped away to the rocks below without warning.',
        synonym: 'sheer',
      },
      {
        word: 'permeate',
        definition: 'To spread throughout; to pervade.',
        example: 'The scent of jasmine permeated the evening air, rich and almost overwhelming.',
        synonym: 'pervade',
      },
      {
        word: 'parched',
        definition: 'Extremely dry, especially due to hot weather or lack of rain.',
        example: 'The parched earth cracked in the heat like the surface of an old painting.',
        synonym: 'desiccated',
      },
      {
        word: 'sublime',
        definition: 'Of outstanding spiritual, intellectual, or moral worth; awe-inspiring.',
        example:
          "The view from the summit was sublime, reducing the valley below to a child's model.",
        synonym: 'magnificent',
      },
    ],
  },
  {
    theme: 'Conflict and tension',
    description:
      'Words found in war narratives, adventure passages, and texts about disagreement or struggle.',
    icon: 'conflict',
    words: [
      {
        word: 'relentless',
        definition: 'Unceasingly intense; harsh and unyielding.',
        example:
          'The relentless bombardment continued through the night, shaking the walls of the shelter.',
        synonym: 'unceasing',
      },
      {
        word: 'ominous',
        definition: 'Giving the impression that something bad is about to happen.',
        example:
          'An ominous silence fell over the crowd as the judge prepared to deliver the verdict.',
        synonym: 'threatening',
      },
      {
        word: 'antagonist',
        definition: 'A person who actively opposes or is hostile to someone.',
        example: 'The antagonist in the story was not a villain but a man driven by grief.',
        synonym: 'adversary',
      },
      {
        word: 'volatile',
        definition: 'Liable to change rapidly and unpredictably, especially for the worse.',
        example:
          'The political situation remained volatile, with protests erupting daily across the capital.',
        synonym: 'unstable',
      },
      {
        word: 'formidable',
        definition: 'Inspiring fear or respect through being impressively powerful.',
        example:
          'She was a formidable debater, capable of dismantling an argument in a single sentence.',
        synonym: 'imposing',
      },
      {
        word: 'futile',
        definition: 'Incapable of producing any useful result; pointless.',
        example:
          "Their attempts to breach the walls proved futile against the fortress's thick stone.",
        synonym: 'pointless',
      },
      {
        word: 'insidious',
        definition: 'Proceeding in a gradual, subtle way but with harmful effects.',
        example:
          'The insidious spread of propaganda went unnoticed until it was too late to counter.',
        synonym: 'treacherous',
      },
      {
        word: 'defiant',
        definition: 'Showing bold resistance to authority or opposition.',
        example:
          'She remained defiant even after the judge had sentenced her, meeting his gaze without flinching.',
        synonym: 'rebellious',
      },
      {
        word: 'turmoil',
        definition: 'A state of great disturbance, confusion, or uncertainty.',
        example: 'The country was in turmoil following the sudden collapse of the government.',
        synonym: 'upheaval',
      },
      {
        word: 'harrowing',
        definition: 'Acutely distressing; extremely painful to experience or witness.',
        example: 'The survivors gave harrowing accounts of the shipwreck that left many in tears.',
        synonym: 'traumatic',
      },
      {
        word: 'belligerent',
        definition: 'Hostile and aggressive; eager to fight.',
        example: 'His belligerent tone made it clear that negotiation was no longer an option.',
        synonym: 'combative',
      },
      {
        word: 'capitulate',
        definition: 'To cease to resist an opponent or an unwelcome demand; to surrender.',
        example: 'After months of siege, the garrison was forced to capitulate due to starvation.',
        synonym: 'surrender',
      },
      {
        word: 'subjugate',
        definition: 'To bring under domination or control, especially by conquest.',
        example:
          'The empire sought to subjugate every neighbouring territory through military force.',
        synonym: 'conquer',
      },
      {
        word: 'reprieve',
        definition: 'A cancellation or postponement of punishment; temporary relief.',
        example: 'The ceasefire offered a brief reprieve from the constant shelling.',
        synonym: 'respite',
      },
      {
        word: 'tenacious',
        definition: 'Holding firmly to something; persistent and determined.',
        example:
          'The tenacious defenders held the bridge for three days against overwhelming odds.',
        synonym: 'persistent',
      },
      {
        word: 'provocative',
        definition: 'Causing anger, annoyance, or another strong reaction, often deliberately.',
        example:
          'His provocative remarks about the treaty were calculated to disrupt the negotiations.',
        synonym: 'inflammatory',
      },
      {
        word: 'retaliate',
        definition: 'To make an attack in return for a similar attack.',
        example: 'The government vowed to retaliate swiftly against any further aggression.',
        synonym: 'strike back',
      },
      {
        word: 'besiege',
        definition:
          'To surround a place with armed forces in order to capture it or force surrender.',
        example: 'The castle had been besieged for six weeks before supplies finally ran out.',
        synonym: 'encircle',
      },
      {
        word: 'ruthless',
        definition: 'Having no compassion or pity; merciless.',
        example:
          'The general was ruthless in his pursuit of victory, regardless of the human cost.',
        synonym: 'merciless',
      },
      {
        word: 'impasse',
        definition: 'A situation in which no progress is possible; a deadlock.',
        example: 'The peace talks reached an impasse when neither side would concede territory.',
        synonym: 'deadlock',
      },
    ],
  },
  {
    theme: 'Emotion and character',
    description:
      'Words used to describe feelings, personality, and psychological states in literary and non-fiction passages.',
    icon: 'emotion',
    words: [
      {
        word: 'melancholy',
        definition: 'A deep, pensive sadness with no obvious cause.',
        example:
          'A quiet melancholy settled over her as she watched the last train leave the station.',
        synonym: 'wistful',
      },
      {
        word: 'euphoria',
        definition: 'A feeling of intense excitement and happiness.',
        example: 'The euphoria of the crowd was palpable as the final goal was scored.',
        synonym: 'elation',
      },
      {
        word: 'apprehension',
        definition: 'Anxiety or fear that something bad will happen.',
        example: 'She climbed the stairs with growing apprehension, unsure of what awaited her.',
        synonym: 'dread',
      },
      {
        word: 'stoic',
        definition: 'Enduring pain and hardship without showing feelings or complaining.',
        example:
          'He remained stoic throughout the ceremony, his face betraying nothing of his grief.',
        synonym: 'impassive',
      },
      {
        word: 'contempt',
        definition: 'The feeling that a person or thing is worthless or beneath consideration.',
        example: 'She looked at the broken promise with undisguised contempt.',
        synonym: 'disdain',
      },
      {
        word: 'benevolent',
        definition: 'Well-meaning and kindly; showing goodwill.',
        example:
          'The benevolent stranger offered her umbrella without a word and disappeared into the crowd.',
        synonym: 'kind-hearted',
      },
      {
        word: 'resentment',
        definition: 'Bitter indignation at having been treated unfairly.',
        example: 'Years of resentment had quietly eroded what had once been a close friendship.',
        synonym: 'bitterness',
      },
      {
        word: 'nostalgia',
        definition: 'A sentimental longing for the past.',
        example:
          'The photograph filled him with nostalgia for a childhood he had almost forgotten.',
        synonym: 'longing',
      },
      {
        word: 'indifferent',
        definition: 'Having no particular interest or sympathy; unconcerned.',
        example: 'He was indifferent to the applause, already thinking about the next performance.',
        synonym: 'apathetic',
      },
      {
        word: 'resilient',
        definition: 'Able to recover quickly from difficult conditions.',
        example:
          'The community proved remarkably resilient, rebuilding within months of the flood.',
        synonym: 'tough',
      },
      {
        word: 'exasperation',
        definition: 'A feeling of intense irritation or annoyance.',
        example:
          'She sighed with exasperation as the printer jammed for the third time that morning.',
        synonym: 'frustration',
      },
      {
        word: 'remorse',
        definition: 'Deep regret or guilt for a wrong committed.',
        example: 'The remorse in his voice was unmistakable as he apologised for his outburst.',
        synonym: 'guilt',
      },
      {
        word: 'enigmatic',
        definition: 'Difficult to interpret or understand; mysterious.',
        example: 'She gave an enigmatic smile that left him wondering what she truly meant.',
        synonym: 'mysterious',
      },
      {
        word: 'candid',
        definition: 'Truthful and straightforward; frank.',
        example: 'His candid assessment of the situation surprised everyone in the room.',
        synonym: 'frank',
      },
      {
        word: 'despondent',
        definition: 'In low spirits from loss of hope or courage.',
        example:
          'After months of rejection letters, she grew increasingly despondent about her future.',
        synonym: 'dejected',
      },
      {
        word: 'compassion',
        definition: 'Sympathetic concern for the sufferings or misfortunes of others.',
        example:
          'The nurse treated every patient with the same quiet compassion, regardless of the hour.',
        synonym: 'empathy',
      },
      {
        word: 'insolent',
        definition: 'Showing a rude and arrogant lack of respect.',
        example: 'The insolent reply earned him a week of detentions and a letter home.',
        synonym: 'impudent',
      },
      {
        word: 'wistful',
        definition: 'Having or showing a feeling of vague or regretful longing.',
        example:
          'She cast a wistful glance at the playground where she had spent every afternoon as a child.',
        synonym: 'yearning',
      },
      {
        word: 'obstinate',
        definition: "Stubbornly refusing to change one's opinion or course of action.",
        example:
          'The obstinate child refused to eat anything that was not precisely the right shade of orange.',
        synonym: 'stubborn',
      },
      {
        word: 'magnanimous',
        definition: 'Generous or forgiving, especially towards a rival or less powerful person.',
        example:
          'In a magnanimous gesture, the winner dedicated his medal to the opponent who had trained him.',
        synonym: 'generous',
      },
    ],
  },
  {
    theme: 'Society and culture',
    description:
      'Words from argumentative, discursive, and informative texts about social issues, communities, and cultural change.',
    icon: 'society',
    words: [
      {
        word: 'ubiquitous',
        definition: 'Present, appearing, or found everywhere.',
        example: 'Smartphones have become ubiquitous, visible in every pocket and on every table.',
        synonym: 'omnipresent',
      },
      {
        word: 'disparity',
        definition: 'A great difference, especially one that is seen as unfair.',
        example:
          'The disparity between the richest and poorest neighbourhoods was visible from the bus window.',
        synonym: 'inequality',
      },
      {
        word: 'affluent',
        definition: 'Having a great deal of money; wealthy.',
        example:
          'The affluent suburb was separated from the industrial district by a six-lane highway.',
        synonym: 'prosperous',
      },
      {
        word: 'marginalised',
        definition: 'Treated as insignificant or pushed to the edges of society.',
        example:
          'The report highlighted how marginalised communities were disproportionately affected by the cuts.',
        synonym: 'excluded',
      },
      {
        word: 'consensus',
        definition: 'A general agreement among a group of people.',
        example:
          'After hours of debate, the committee finally reached a consensus on the new policy.',
        synonym: 'agreement',
      },
      {
        word: 'bureaucracy',
        definition:
          'A system of government or administration marked by excessive paperwork and rigid procedures.',
        example: 'The application was delayed for months by unnecessary bureaucracy.',
        synonym: 'red tape',
      },
      {
        word: 'indigenous',
        definition: 'Originating or occurring naturally in a particular place; native.',
        example:
          'The indigenous communities had lived in the region for thousands of years before colonisation.',
        synonym: 'native',
      },
      {
        word: 'secular',
        definition: 'Not connected with religious or spiritual matters.',
        example: 'The school adopted a secular curriculum that respected all faiths equally.',
        synonym: 'non-religious',
      },
      {
        word: 'philanthropy',
        definition:
          'The desire to promote the welfare of others, often through generous donations.',
        example: 'Her philanthropy funded scholarships for over a hundred students each year.',
        synonym: 'charity',
      },
      {
        word: 'disenfranchised',
        definition: 'Deprived of power, rights, or opportunities.',
        example:
          'The disenfranchised workers organised a strike to demand fair wages and safer conditions.',
        synonym: 'disempowered',
      },
      {
        word: 'precedent',
        definition:
          'An earlier event or action regarded as an example or guide for future situations.',
        example: "The court's decision set a precedent that would shape policy for decades.",
        synonym: 'model',
      },
      {
        word: 'pragmatic',
        definition: 'Dealing with things sensibly and realistically rather than idealistically.',
        example:
          'The mayor took a pragmatic approach, focusing on achievable improvements rather than grand plans.',
        synonym: 'practical',
      },
      {
        word: 'advocate',
        definition: 'A person who publicly supports or recommends a particular cause or policy.',
        example: "She was a passionate advocate for children's literacy programmes in rural areas.",
        synonym: 'champion',
      },
      {
        word: 'scrutiny',
        definition: 'Critical observation or examination.',
        example: "The company's finances were placed under intense scrutiny following the scandal.",
        synonym: 'inspection',
      },
      {
        word: 'complacency',
        definition:
          'A feeling of smug self-satisfaction, especially when unaware of potential dangers.',
        example: 'Complacency about safety standards led directly to the preventable disaster.',
        synonym: 'self-satisfaction',
      },
      {
        word: 'rhetoric',
        definition: 'Language designed to persuade or impress, often regarded as insincere.',
        example: "Beyond the politician's rhetoric, there were few concrete proposals for change.",
        synonym: 'oratory',
      },
      {
        word: 'assimilate',
        definition: 'To absorb and integrate into a wider society or culture.',
        example:
          'Immigrants were expected to assimilate quickly, often at the cost of their own traditions.',
        synonym: 'integrate',
      },
      {
        word: 'autonomous',
        definition: 'Having the freedom to govern itself or control its own affairs.',
        example:
          'The region demanded to become autonomous, with its own parliament and tax system.',
        synonym: 'self-governing',
      },
      {
        word: 'infrastructure',
        definition:
          'The basic physical structures and facilities needed for a society to function.',
        example: "Decades of underinvestment had left the country's infrastructure crumbling.",
        synonym: 'framework',
      },
      {
        word: 'egalitarian',
        definition: 'Believing in or based on the principle that all people are equal.',
        example:
          'The school prided itself on an egalitarian ethos where every voice carried equal weight.',
        synonym: 'equal',
      },
    ],
  },
  {
    theme: 'Science and discovery',
    description:
      'Words from informational texts about technology, exploration, medicine, and the natural world.',
    icon: 'science',
    words: [
      {
        word: 'phenomenon',
        definition: 'A fact or event that can be observed and studied.',
        example:
          'The Northern Lights are a natural phenomenon caused by charged particles from the sun.',
        synonym: 'occurrence',
      },
      {
        word: 'hypothesis',
        definition:
          'A proposed explanation made on the basis of limited evidence, used as a starting point for investigation.',
        example:
          "Darwin's hypothesis about natural selection was initially met with fierce opposition.",
        synonym: 'theory',
      },
      {
        word: 'exponential',
        definition: 'Increasing at a faster and faster rate.',
        example:
          "The exponential growth of the city's population had outpaced its ability to build new housing.",
        synonym: 'rapid',
      },
      {
        word: 'catalyst',
        definition: 'Something that speeds up a process or provokes change.',
        example: 'The factory closure was the catalyst for widespread protests across the region.',
        synonym: 'trigger',
      },
      {
        word: 'unprecedented',
        definition: 'Never done or known before; without previous example.',
        example:
          'The floods were unprecedented in their scale, affecting areas that had never been at risk.',
        synonym: 'unparalleled',
      },
      {
        word: 'empirical',
        definition: 'Based on observation or experience rather than theory or logic.',
        example: 'The study relied on empirical evidence gathered over a ten-year period.',
        synonym: 'observed',
      },
      {
        word: 'innovative',
        definition: 'Featuring new methods or ideas; advanced and original.',
        example:
          "The company's innovative approach to recycling turned waste plastic into building material.",
        synonym: 'pioneering',
      },
      {
        word: 'obsolete',
        definition: 'No longer produced or used; out of date.',
        example:
          'The technology that had seemed revolutionary ten years ago was now entirely obsolete.',
        synonym: 'outdated',
      },
      {
        word: 'detrimental',
        definition: 'Tending to cause harm or damage.',
        example:
          'The report concluded that the chemicals were detrimental to both wildlife and human health.',
        synonym: 'harmful',
      },
      {
        word: 'sustainable',
        definition:
          'Able to be maintained at a certain rate or level without depleting natural resources.',
        example:
          'Sustainable farming practices were adopted to preserve the soil for future generations.',
        synonym: 'viable',
      },
      {
        word: 'proliferate',
        definition: 'To increase rapidly in number; to multiply.',
        example:
          'Misinformation about the vaccine began to proliferate across social media platforms.',
        synonym: 'multiply',
      },
      {
        word: 'rudimentary',
        definition: 'Involving or limited to basic principles; at an early stage of development.',
        example:
          'Their equipment was rudimentary -- a compass, a hand-drawn map, and a length of rope.',
        synonym: 'basic',
      },
      {
        word: 'paradox',
        definition: 'A seemingly contradictory statement that may nonetheless be true.',
        example:
          'It is a paradox that the more connected we become digitally, the more isolated we feel.',
        synonym: 'contradiction',
      },
      {
        word: 'meticulous',
        definition: 'Showing great attention to detail; very careful and precise.',
        example:
          'The scientist was meticulous in her recording, noting every measurement to the nearest millimetre.',
        synonym: 'thorough',
      },
      {
        word: 'enigma',
        definition: 'Something that is mysterious, puzzling, or difficult to understand.',
        example: "The disappearance of the colony remains one of history's greatest enigmas.",
        synonym: 'mystery',
      },
      {
        word: 'corroborate',
        definition: 'To confirm or give support to a statement, theory, or finding.',
        example: "Satellite images corroborated the ground team's reports of deforestation.",
        synonym: 'confirm',
      },
      {
        word: 'tangible',
        definition: 'Clear and definite; real and able to be perceived.',
        example:
          'The benefits of the new system were tangible -- waiting times fell by thirty per cent.',
        synonym: 'concrete',
      },
      {
        word: 'synthesise',
        definition: 'To combine a number of things into a coherent whole.',
        example:
          'The researcher was able to synthesise data from twelve different studies into a single conclusion.',
        synonym: 'combine',
      },
      {
        word: 'pivotal',
        definition: 'Of crucial importance in relation to the development of something.',
        example: 'The discovery of penicillin was a pivotal moment in the history of medicine.',
        synonym: 'crucial',
      },
      {
        word: 'mitigate',
        definition: 'To make less severe, serious, or painful.',
        example:
          'Flood barriers were built to mitigate the impact of future storms on coastal communities.',
        synonym: 'alleviate',
      },
    ],
  },
]

const themeIcons = {
  nature: Leaf,
  conflict: Swords,
  emotion: Heart,
  society: Users,
  science: FlaskConical,
}

export default async function VocabularyPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/0500" />}
        className="gap-1"
      >
        <ChevronLeft className="size-4" />
        0500 hub
      </Button>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE 0500
            </Badge>
            <Badge variant="secondary">100 words</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Vocabulary builder
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            100 challenging words commonly found in Cambridge 0500 reading passages, organised into
            five themes. Learn the definition, see it used in context, and note a synonym you can
            use in your own writing. Strong vocabulary is rewarded in both Paper 1 (language
            analysis, summary) and Paper 2 (composition).
          </p>
        </div>
      </section>

      {/* ── Theme navigation ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {themes.map((t) => {
          const Icon = themeIcons[t.icon]
          return (
            <a
              key={t.theme}
              href={`#${t.icon}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
            >
              <Icon className="size-3.5" />
              {t.theme}
            </a>
          )
        })}
      </div>

      {/* ── Themes ────────────────────────────────────────────────────── */}
      {themes.map((t) => {
        const Icon = themeIcons[t.icon]
        return (
          <section key={t.theme} id={t.icon} className="space-y-5 scroll-mt-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <div>
                <h2 className="text-heading-lg font-heading text-foreground">{t.theme}</h2>
                <p className="text-body-xs text-muted-foreground">{t.description}</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {t.words.map((w) => (
                <Card key={w.word}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-heading-sm font-heading">{w.word}</CardTitle>
                      <Badge variant="secondary" className="text-body-xs shrink-0">
                        syn: {w.synonym}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-body-sm text-muted-foreground">{w.definition}</p>
                    <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                      <p className="text-body-xs italic text-foreground">{w.example}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      })}

      {/* ── Study tips ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">How to use this list</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="mb-2 text-body-md font-semibold text-foreground">
              For Paper 1 (Reading)
            </h3>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li>Recognising these words in a passage speeds up comprehension.</li>
              <li>
                In Q2, use precise vocabulary to describe effects: &quot;ominous connotations&quot;
                is stronger than &quot;it sounds bad.&quot;
              </li>
              <li>
                In Q3, use synonyms from this list to rephrase passage ideas in your own words.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="mb-2 text-body-md font-semibold text-foreground">
              For Paper 2 (Writing)
            </h3>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li>
                Use words from this list naturally in your compositions -- do not force them in.
              </li>
              <li>
                One well-placed ambitious word per paragraph is better than five awkward ones.
              </li>
              <li>
                In directed writing, match the register: &quot;pragmatic&quot; suits a formal
                letter; &quot;luminous&quot; suits a descriptive piece.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500
      </p>
    </div>
  )
}
