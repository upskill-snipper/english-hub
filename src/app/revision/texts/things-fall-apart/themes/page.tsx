'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  Flame,
  Quote,
  Lightbulb,
  Swords,
  Shield,
  Church,
  Scale,
  MessageSquareQuote,
  Compass,
  Crown,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ── Theme data ──────────────────────────────────────────────────────── */

type ThemeQuote = {
  text: string
  speaker: string
  part: string
}

type PartEvidence = {
  part: string
  evidence: string
}

type ThemeData = {
  title: string
  icon: typeof Swords
  iconColour: string
  definition: string
  overview: string
  partEvidence: PartEvidence[]
  keyQuotes: ThemeQuote[]
  contextLinks: string[]
  essayTips: string[]
}

const themes: ThemeData[] = [
  {
    title: 'Tradition vs Change',
    icon: Swords,
    iconColour: 'text-clay-500',
    definition:
      'The central tension between the established Igbo way of life and the forces -- both internal and external -- that challenge and ultimately dismantle it.',
    overview:
      'Achebe refuses to present Igbo tradition as static or perfect. The first part of the novel establishes a complex, functioning society with its own internal debates: Obierika questions the custom of abandoning twins; characters discuss whether the Oracle was right about Ikemefuna. This internal capacity for change is crucial because it disproves the colonial assumption that Igbo culture was primitive or stagnant. The tragedy is not that change arrives but that it arrives from outside, imposed by a power that has no interest in understanding what it replaces. Achebe shows that the Igbo were capable of reform from within -- a slower, kinder process that colonialism forecloses.',
    partEvidence: [
      {
        part: 'Part 1 (Chapters 1-13)',
        evidence:
          "Igbo culture is shown in full complexity: the Week of Peace, the egwugwu courts, the Oracle, the New Yam Festival. But cracks are visible. Obierika questions the exile law and the abandonment of twins. The killing of Ikemefuna reveals a tradition that can demand cruelty. Change is possible from within, but the culture's rigidity (embodied in Okonkwo) resists it.",
      },
      {
        part: 'Part 2 (Chapters 14-19)',
        evidence:
          'The missionaries arrive in Mbanta and win converts among the outcasts -- osu, mothers of twins, those the culture has marginalised. Achebe shows that Christianity does not conquer a strong culture but exploits its fault lines. The destruction of Abame demonstrates the violent consequences of resisting change through ignorance.',
      },
      {
        part: 'Part 3 (Chapters 20-25)',
        evidence:
          "Okonkwo returns to find Umuofia transformed. The church, the court, and the trading post have replaced clan governance. The elders are arrested and humiliated. Okonkwo's violent response fails because the clan is no longer united. Tradition has lost not because it was weak but because it was divided.",
      },
    ],
    keyQuotes: [
      {
        text: '"He has put a knife on the things that held us together and we have fallen apart."',
        speaker: 'Obierika',
        part: 'Part 3, Chapter 20',
      },
      {
        text: '"The world has no end, and what is good among one people is an abomination with others."',
        speaker: 'Uchendu',
        part: 'Part 2, Chapter 15',
      },
      {
        text: '"Does the white man understand our custom about land?"',
        speaker: 'Obierika',
        part: 'Part 3, Chapter 20',
      },
      {
        text: '"The clan was like a lizard; if it lost its tail it soon grew another."',
        speaker: 'Narrator',
        part: 'Part 1, Chapter 13',
      },
    ],
    contextLinks: [
      'The Berlin Conference of 1884-85 divided Africa among European powers without any African representation. British colonialism in Nigeria used missionaries as a strategic opening wedge, followed by administrators and soldiers.',
      'Achebe wrote Things Fall Apart partly to show that pre-colonial African societies were not waiting to be "civilised" -- they were already complex, self-governing and capable of internal reform.',
      'The Igbo clan system was democratic and decentralised: decisions were made by councils of elders, not by kings. Colonialism replaced this with authoritarian structures.',
    ],
    essayTips: [
      "The strongest essays discuss both internal and external challenges to tradition. Achebe does not present Igbo culture as perfect -- Obierika's questions prove it was already evolving.",
      "Discuss the novel's structure: Part 1 establishes what will be lost; Parts 2-3 show it being lost. This structural movement IS the theme.",
      "Avoid the trap of presenting the Igbo as helpless victims. Achebe shows the culture's strengths precisely to make its destruction feel like a genuine loss, not an inevitable progress.",
      'Compare the slow internal change represented by Obierika with the violent external change imposed by the District Commissioner. Which does Achebe value?',
    ],
  },
  {
    title: 'Masculinity & Fear',
    icon: Shield,
    iconColour: 'text-ochre-500',
    definition:
      "Okonkwo's equation of manhood with violence and emotional suppression -- a personal flaw that Achebe shows has cultural roots and cultural consequences.",
    overview:
      "Okonkwo's terror of being like his father Unoka drives every major decision he makes. He beats his wives, kills Ikemefuna, and disowns Nwoye because he is afraid of being thought weak. Achebe is careful to show that this is not merely a personality trait but a product of a culture that prizes masculine achievement above all else. However, he also shows that the culture is more nuanced than Okonkwo realises: Obierika refuses to participate in Ikemefuna's killing without losing status. The title system rewards achievement, but it does not require cruelty. Okonkwo's tragedy is that he takes the culture's values to a destructive extreme that the culture itself does not demand.",
    partEvidence: [
      {
        part: 'Part 1 (Chapters 1-13)',
        evidence:
          "Okonkwo is introduced through his opposition to Unoka. He beats Ojiugo during the Week of Peace. He kills Ikemefuna despite Obierika's warning, afraid of appearing weak. He suppresses all emotion except anger. Nwoye's gentleness fills him with contempt and fear.",
      },
      {
        part: 'Part 2 (Chapters 14-19)',
        evidence:
          'In exile, Okonkwo is forced into his "motherland" -- a concept Uchendu explores with the "Mother is Supreme" speech. Okonkwo refuses to accept the nurturing role of the mother\'s homeland. Nwoye\'s conversion to Christianity is, for Okonkwo, the ultimate failure of masculinity: "Living fire begets cold, impotent ash."',
      },
      {
        part: 'Part 3 (Chapters 20-25)',
        evidence:
          "Okonkwo's response to colonialism is violence -- the only tool his masculinity allows. He kills the court messenger and is confused when the clan does not follow. His suicide is the final contradiction: an act of submission by a man who lived to dominate.",
      },
    ],
    keyQuotes: [
      {
        text: '"He was afraid of being thought weak."',
        speaker: 'Narrator',
        part: 'Part 1, Chapter 2',
      },
      {
        text: '"When did you become a shivering old woman?"',
        speaker: 'Okonkwo to himself',
        part: 'Part 1, Chapter 7',
      },
      {
        text: '"She should have been a boy."',
        speaker: 'Okonkwo on Ezinma',
        part: 'Part 1, Chapter 8',
      },
      {
        text: '"Living fire begets cold, impotent ash."',
        speaker: "Narrator on Okonkwo's view of Nwoye",
        part: 'Part 2, Chapter 17',
      },
    ],
    contextLinks: [
      'The Igbo title system rewarded men who accumulated yams, wives, and social prestige. But it also valued oratory, wisdom, and diplomacy -- qualities Okonkwo lacks.',
      'Achebe has said he intended Okonkwo to represent a particular kind of response to colonial pressure, not the only possible Igbo response. Obierika represents the alternative.',
      'The concept of "Mother is Supreme" (Nneka), introduced by Uchendu, suggests that Igbo culture had a counterbalance to masculine dominance that Okonkwo refuses to accept.',
    ],
    essayTips: [
      'Always distinguish between what the culture values and what Okonkwo believes the culture values. He takes masculine achievement to an extreme the culture does not require.',
      'Discuss the "Mother is Supreme" speech by Uchendu as Achebe\'s internal critique of Okonkwo\'s masculinity.',
      'Link Okonkwo\'s fear of weakness to his suicide: the man who lived to avoid appearing weak ends with the "most abominable" act in Igbo culture. His fear destroys him completely.',
      'Compare Okonkwo and Obierika to show that Achebe offers an alternative model of Igbo masculinity -- one that includes reflection and moral courage.',
    ],
  },
  {
    title: 'Colonialism & Cultural Destruction',
    icon: Flame,
    iconColour: 'text-clay-600',
    definition:
      'The systematic dismantling of Igbo society through religion, law, commerce, and narrative control.',
    overview:
      "Achebe devotes the first two-thirds of the novel to building a vivid, functioning Igbo world so that the reader feels its destruction as a genuine loss. Colonialism in Things Fall Apart operates in stages: first the missionaries (Mr Brown), then the zealots (Reverend Smith), then the administrators (the District Commissioner). Each stage depends on the one before it. The church creates converts who become disconnected from the clan; the court creates a legal system that overrides clan justice; the trading post creates economic dependence. Achebe's masterful final paragraph -- the District Commissioner reducing Okonkwo's life to \"a reasonable paragraph\" -- shows that colonialism's deepest violence is narrative: the power to tell someone else's story on your own terms.",
    partEvidence: [
      {
        part: 'Part 1 (Chapters 1-13)',
        evidence:
          'No colonial presence. The entire section exists to show what will be lost: the complexity of clan governance, the richness of oral culture, the functioning justice system. Achebe establishes the humanity and sophistication of Igbo life as a precondition for the reader to feel the tragedy of its destruction.',
      },
      {
        part: 'Part 2 (Chapters 14-19)',
        evidence:
          'Missionaries arrive in Mbanta and win converts among the marginalised: osu, mothers of twins, the disillusioned. The destruction of Abame -- a village wiped out after killing a white man -- foreshadows the violence that underlies the colonial project. The church in the Evil Forest survives, undermining Igbo cosmology.',
      },
      {
        part: 'Part 3 (Chapters 20-25)',
        evidence:
          'Umuofia now has a church, a court, a trading post, and a prison. The egwugwu court has been replaced by the Commissioner\'s court, where translators and clerks wield power. Elders are arrested and beaten. Okonkwo\'s suicide becomes a paragraph in a book titled "The Pacification of the Primitive Tribes of the Lower Niger."',
      },
    ],
    keyQuotes: [
      {
        text: '"The Pacification of the Primitive Tribes of the Lower Niger."',
        speaker: "District Commissioner's book title",
        part: 'Part 3, Chapter 25',
      },
      {
        text: '"He has put a knife on the things that held us together and we have fallen apart."',
        speaker: 'Obierika',
        part: 'Part 3, Chapter 20',
      },
      {
        text: '"The white man is very clever... Now he has won our brothers, and our clan can no longer act like one."',
        speaker: 'Obierika',
        part: 'Part 3, Chapter 20',
      },
    ],
    contextLinks: [
      "Achebe wrote Things Fall Apart as a direct response to European novels -- particularly Joseph Conrad's Heart of Darkness (1899) -- that depicted Africa as a blank, savage backdrop for European stories.",
      'British colonial policy in Nigeria used "indirect rule," co-opting local leaders and customs when convenient and overriding them when not. The District Commissioner\'s court in the novel reflects this system.',
      'Achebe\'s title comes from W.B. Yeats\'s poem "The Second Coming" (1919): "Things fall apart; the centre cannot hold." By using a European poem to frame an African tragedy, Achebe inserts his story into the canon it critiques.',
    ],
    essayTips: [
      "The novel's structure is its argument: Part 1 builds the world; Parts 2-3 destroy it. Discuss this structural movement as Achebe's technique.",
      "The District Commissioner's book title is the novel's sharpest weapon. It shows that colonialism's ultimate violence is narrative: deciding whose story matters and how it is told.",
      'Discuss how colonialism exploits internal divisions. It does not conquer a united people; it divides them first through religion and then governs the fragments.',
      "Always link back to Achebe's purpose: he wrote Things Fall Apart to reclaim African narrative from European control.",
    ],
  },
  {
    title: 'Religion',
    icon: Church,
    iconColour: 'text-sage-500',
    definition:
      'The collision between Igbo spirituality -- a sophisticated system of gods, ancestors, and personal chi -- and the Christianity brought by the missionaries.',
    overview:
      'Achebe presents Igbo religion not as primitive superstition but as a functioning spiritual system that governs law, morality, and community life. The Oracle, the egwugwu, the chi, the osu caste, the ogbanje belief, the Week of Peace -- all are shown as integral to social order. Christianity does not replace an empty space; it displaces an existing system. Achebe is equally clear-eyed about both religions: Igbo spirituality demands the killing of Ikemefuna and the abandonment of twins; Christianity brings schools and hospitals but also cultural destruction. Neither is idealised. The novel asks not which religion is "right" but what happens when one is imposed on the other by force.',
    partEvidence: [
      {
        part: 'Part 1 (Chapters 1-13)',
        evidence:
          "Igbo religion is shown in full operation: the Oracle of the Hills and Caves, the egwugwu who dispense justice, the Week of Peace, the New Yam Festival, the concept of chi. Religion is not separate from governance -- it IS governance. The killing of Ikemefuna shows that the Oracle's authority is absolute, even when individuals question it.",
      },
      {
        part: 'Part 2 (Chapters 14-19)',
        evidence:
          'Missionaries arrive and are given land in the Evil Forest, expected to die. When they survive, Igbo cosmology is undermined. Mr Brown debates theology with Akunna -- a scene that shows the two systems as intellectual equals. Converts are drawn from those the religion has marginalised: osu, mothers of twins. Nwoye converts not from theological conviction but from emotional need.',
      },
      {
        part: 'Part 3 (Chapters 20-25)',
        evidence:
          'Enoch unmasks an egwugwu -- an act of profound sacrilege that collapses the boundary between sacred and profane. The clan burns the church in response, but the District Commissioner punishes them for it. Colonial power backs one religion and criminalises the other.',
      },
    ],
    keyQuotes: [
      {
        text: '"Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."',
        speaker: 'Narrator',
        part: 'Part 1, Chapter 1',
      },
      {
        text: '"He felt a relief within as the hymn poured into his parched soul."',
        speaker: 'Narrator on Nwoye',
        part: 'Part 2, Chapter 16',
      },
      {
        text: '"The world has no end, and what is good among one people is an abomination with others."',
        speaker: 'Uchendu',
        part: 'Part 2, Chapter 15',
      },
    ],
    contextLinks: [
      'Igbo traditional religion is polytheistic, with a supreme god (Chukwu), earth goddess (Ani), and numerous lesser spirits. Achebe simplifies this for the novel but maintains its essential complexity.',
      "Christian missions in Nigeria operated schools and hospitals as conversion tools. Education was conditional on church attendance. Mr Brown's school reflects this strategy.",
      "The osu (outcast) caste system was a genuine source of injustice within Igbo society. Achebe acknowledges this: Christianity's appeal to the osu is legitimate, even if its larger project is destructive.",
    ],
    essayTips: [
      'The Akunna-Brown debate in Chapter 21 is crucial. Achebe shows the two theologies as equally sophisticated -- a point that undermines the colonial claim of bringing "civilisation" to the "primitive."',
      'Discuss why the church in the Evil Forest is a pivotal moment: its survival challenges the cosmological foundations of Igbo belief.',
      "Link Nwoye's conversion to religion's emotional function. Christianity offers him comfort that his father's world cannot provide. This is personal, not theological.",
      'Always connect religion to power. The District Commissioner backs the church with force; religion and colonialism are inseparable in the novel.',
    ],
  },
  {
    title: 'Fate & Chi',
    icon: Compass,
    iconColour: 'text-teal-500',
    definition:
      'The Igbo concept of chi -- personal god or spiritual double -- and the tension between individual agency and forces beyond human control.',
    overview:
      'In Igbo cosmology, every person has a chi -- a personal spirit that shapes their destiny. The relationship between a person and their chi is complex: "When a man says yes his chi says yes also," suggesting that willpower can influence fate, but the novel also presents cases where chi seems to override human effort. Okonkwo believes passionately that a man can shape his own destiny through hard work and violence. But Achebe repeatedly undercuts this belief: Okonkwo\'s gun explodes accidentally, killing a boy; his crops fail; his exile separates him from the very community he spent his life building. The novel asks whether Okonkwo is a man fighting against his chi or a man whose chi was set against him from the start.',
    partEvidence: [
      {
        part: 'Part 1 (Chapters 1-13)',
        evidence:
          'Unoka is said to have a bad chi. Okonkwo\'s success is attributed partly to his chi and partly to his effort. The accidental killing during Ezeudu\'s funeral -- the crime that sends Okonkwo into exile -- is a "female" murder (unintentional), suggesting fate rather than choice.',
      },
      {
        part: 'Part 2 (Chapters 14-19)',
        evidence:
          'Uchendu tells Okonkwo that "Mother is Supreme" and that exile has a purpose. Okonkwo resists this philosophy, but his inability to control events in Umuofia while absent suggests his chi is indeed working against him.',
      },
      {
        part: 'Part 3 (Chapters 20-25)',
        evidence:
          'Okonkwo returns expecting to reclaim his position but finds the world has moved on. His final act -- killing the messenger -- produces no uprising. His chi and his will are finally and definitively at odds.',
      },
    ],
    keyQuotes: [
      {
        text: '"When a man says yes his chi says yes also."',
        speaker: 'Narrator (Igbo proverb)',
        part: 'Part 1, Chapter 4',
      },
      {
        text: '"A man could not rise beyond the destiny of his chi."',
        speaker: 'Narrator',
        part: 'Part 2, Chapter 14',
      },
      {
        text: '"Okonkwo was clearly cut out for great things."',
        speaker: 'Narrator',
        part: 'Part 1, Chapter 1',
      },
    ],
    contextLinks: [
      'The concept of chi is central to Igbo philosophy. It resembles the Western idea of fate but is more personal -- your chi is your spiritual double, intimately connected to your choices and character.',
      'Achebe explored the chi concept further in his essay "Chi in Igbo Cosmology" (1975), arguing that chi represents the negotiation between individual will and cosmic order.',
      'The novel\'s title, from Yeats\'s "The Second Coming," introduces a European concept of cyclical fate alongside the Igbo concept of chi. Both suggest that forces larger than individuals shape history.',
    ],
    essayTips: [
      'The proverb "When a man says yes his chi says yes also" is contradicted by much of what happens to Okonkwo. Discuss whether Achebe presents chi as real or as a cultural explanation for events beyond human control.',
      "Compare Okonkwo's relationship with his chi to the concept of the tragic hero whose fate is sealed by a fatal flaw. Achebe draws on both Igbo and Western traditions.",
      'Link chi to colonialism: is colonialism itself an expression of a collective fate, or could it have been resisted? Achebe leaves this question open.',
    ],
  },
  {
    title: 'Language & Communication',
    icon: MessageSquareQuote,
    iconColour: 'text-ochre-400',
    definition:
      'Proverbs as cultural markers, the political act of writing in English, and the violence of colonial language.',
    overview:
      'Achebe saturates the novel with Igbo proverbs, songs, and conversational rituals. "Proverbs are the palm-oil with which words are eaten," the narrator tells us early on, establishing that language in Igbo culture is not merely functional but artistic. Each proverb encodes generations of accumulated wisdom and demonstrates the culture\'s intellectual sophistication. Achebe writes in English but infuses it with Igbo rhythms, idioms, and structures -- a deliberate political act. He later wrote that he chose English because "the price a world language must be prepared to pay is submission to many different kinds of use." The novel\'s final paragraph -- the Commissioner\'s reductive book title -- shows colonial language as an instrument of erasure: the power to name is the power to control.',
    partEvidence: [
      {
        part: 'Part 1 (Chapters 1-13)',
        evidence:
          'Proverbs permeate every conversation: "When the moon is shining the cripple becomes hungry for a walk"; "A toad does not run in the daytime for nothing." Achebe uses them to demonstrate the culture\'s rhetorical sophistication and to embed the reader in an Igbo linguistic world.',
      },
      {
        part: 'Part 2 (Chapters 14-19)',
        evidence:
          'Uchendu\'s proverbs during the kinship gathering demonstrate that language carries philosophy: "Mother is Supreme" is expressed through story and metaphor, not abstract argument. The missionaries\' hymns operate differently -- they bypass intellect and appeal directly to emotion.',
      },
      {
        part: 'Part 3 (Chapters 20-25)',
        evidence:
          "The court messengers and interpreters introduce a new, colonial language. The kotma (court messenger) mediates between cultures but serves the coloniser. The Commissioner's book title replaces the rich, proverbial language of the Igbo with the flat, bureaucratic language of empire.",
      },
    ],
    keyQuotes: [
      {
        text: '"Among the Igbo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."',
        speaker: 'Narrator',
        part: 'Part 1, Chapter 1',
      },
      {
        text: '"When the moon is shining the cripple becomes hungry for a walk."',
        speaker: 'Igbo proverb',
        part: 'Part 1, Chapter 1',
      },
      {
        text: '"The Pacification of the Primitive Tribes of the Lower Niger."',
        speaker: "District Commissioner's book title",
        part: 'Part 3, Chapter 25',
      },
    ],
    contextLinks: [
      'Achebe chose to write in English deliberately, arguing that an African writer could "subvert" the colonial language by bending it to express African realities. This sparked a debate with Ngugi wa Thiong\'o, who argued that African writers should write in African languages.',
      'Igbo oral tradition is one of the richest in West Africa. Proverbs, folktales, and songs encode law, history, and philosophy. Achebe preserves this tradition within the English text.',
      "The Commissioner's reductive language at the novel's end mirrors real colonial texts. The title closely resembles actual British colonial publications of the period.",
    ],
    essayTips: [
      'The "palm-oil" metaphor is one of the most quotable lines in the novel. Use it to argue that Achebe presents Igbo culture as intellectually sophisticated from the very first page.',
      "Discuss the irony of Achebe writing in English: he uses the coloniser's language to tell the story the coloniser could never tell. The novel is itself an act of linguistic reclamation.",
      "Compare the richness of Igbo proverbial language with the flat bureaucratic language of the Commissioner's book title. This contrast is Achebe's sharpest commentary on colonial narrative.",
      'Link language to power: whoever controls the narrative controls history. Things Fall Apart exists to wrest narrative control back from the coloniser.',
    ],
  },
  {
    title: 'Justice & Power',
    icon: Crown,
    iconColour: 'text-sage-600',
    definition:
      'The contrast between the democratic, tradition-based justice of the clan and the authoritarian, alien justice imposed by colonial law.',
    overview:
      "Igbo justice in the novel operates through community consensus, the egwugwu court, and the authority of elders and the Oracle. It is not perfect -- the killing of Ikemefuna, the exile of Okonkwo for an accidental killing, the abandonment of twins -- but it is organic, understood, and participatory. Colonial justice, by contrast, is imposed from outside by men who do not understand local customs, enforced through violence and imprisonment. The District Commissioner's court uses interpreters and clerks as intermediaries, creating new hierarchies of power. Achebe does not idealise clan justice but insists that it is a functioning system replaced by something worse: a system that serves the coloniser's interests while claiming to serve universal law.",
    partEvidence: [
      {
        part: 'Part 1 (Chapters 1-13)',
        evidence:
          "The egwugwu court settles the dispute between Uzowulu and his wife's family. The process is public, participatory, and draws on tradition. Okonkwo's beating of Ojiugo during the Week of Peace is punished swiftly. The exile for accidental killing is severe but follows established law.",
      },
      {
        part: 'Part 2 (Chapters 14-19)',
        evidence:
          'The destruction of Abame shows colonial "justice" at its most brutal: an entire village destroyed in response to one killing. The missionaries\' presence begins to create a parallel authority that competes with clan governance.',
      },
      {
        part: 'Part 3 (Chapters 20-25)',
        evidence:
          "The Commissioner's court has replaced the egwugwu. The kotma use their positions for corruption and abuse. The elders are arrested, shaved, and beaten. Colonial justice is shown to be neither just nor legal by any standard the Igbo would recognise.",
      },
    ],
    keyQuotes: [
      {
        text: '"Does the white man understand our custom about land?"',
        speaker: 'Obierika',
        part: 'Part 3, Chapter 20',
      },
      {
        text: '"We cannot leave the matter in his hands because he does not understand our customs."',
        speaker: 'Ogbuefi Ekwueme',
        part: 'Part 3, Chapter 23',
      },
      {
        text: '"He has put a knife on the things that held us together and we have fallen apart."',
        speaker: 'Obierika',
        part: 'Part 3, Chapter 20',
      },
    ],
    contextLinks: [
      'British "indirect rule" in Nigeria co-opted local leaders where possible and created new ones (warrant chiefs) where necessary. The native courts in the novel reflect this system.',
      'The Igbo had no centralised monarchy or hierarchical state. Their democratic clan system was poorly understood by British administrators who expected to find kings to negotiate with.',
      'The novel was written in the context of Nigerian independence (1960). Achebe was arguing that Nigerians had governed themselves effectively before colonialism and could do so again.',
    ],
    essayTips: [
      "Compare the egwugwu court (Chapter 10) with the Commissioner's court (Chapter 23). The first is public, participatory, and rooted in shared understanding; the second is imposed, authoritarian, and ignorant of local customs.",
      'Discuss the role of the kotma as intermediaries who serve colonial power while exploiting their own people. Achebe shows that colonialism creates new hierarchies even as it claims to bring equality.',
      'Link justice to narrative: the Commissioner\'s power to judge is also the power to narrate. His book title is the ultimate judicial sentence -- it defines the Igbo as "primitive" and their pacification as progress.',
      'Address the imperfections of clan justice honestly. Achebe does not hide them (twins, the osu, Ikemefuna). The strongest essays acknowledge these while arguing that an imperfect system rooted in understanding is preferable to an alien system rooted in force.',
    ],
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function ThemesPage() {
  return (
    <div className="space-y-10 bg-cream-50 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Things Fall Apart',
            url: 'https://theenglishhub.app/revision/texts/things-fall-apart',
          },
          {
            name: 'Themes',
            url: 'https://theenglishhub.app/revision/texts/things-fall-apart/themes',
          },
        ]}
      />
      {/* Study Tools */}
      <StudyTools textName="Things Fall Apart" textType="novel" examBoard="IGCSE Edexcel" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-clay-400/[0.06] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-clay-400/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-ochre-400/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/things-fall-apart" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Things Fall Apart
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-clay-500" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              IGCSE Edexcel
            </Badge>
          </div>

          <h1 className="font-serif text-display-sm text-foreground sm:text-display">
            Theme Analysis
          </h1>
          <p className="mt-2 text-body-lg italic text-clay-600">
            Things Fall Apart by Chinua Achebe
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Seven major themes explored in depth: definition, evidence from each part of the novel,
            key quotations, links to historical context, and essay planning tips for exam success.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 font-serif text-heading-md text-foreground">Jump to a Theme</h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {themes.map((th) => {
                const Icon = th.icon
                return (
                  <a
                    key={th.title}
                    href={`#${th.title.toLowerCase().replace(/[\s&]+/g, '-')}`}
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20 hover:bg-muted/40"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-clay-400/10">
                      <Icon className={`size-4 ${th.iconColour}`} />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-foreground/90 truncate">
                      {th.title}
                    </p>
                  </a>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Themes */}
      {themes.map((theme) => {
        const Icon = theme.icon
        return (
          <section
            key={theme.title}
            id={theme.title.toLowerCase().replace(/[\s&]+/g, '-')}
            className="scroll-mt-8 space-y-5"
          >
            {/* Theme header */}
            <div className="flex items-center gap-4 border-b border-border/60 pb-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-clay-400/10">
                <Icon className={`size-5 ${theme.iconColour}`} />
              </div>
              <div>
                <h2 className="font-serif text-heading-lg text-foreground">{theme.title}</h2>
                <p className="text-body-sm italic text-clay-600">{theme.definition}</p>
              </div>
            </div>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif text-heading-md">
                  <BookOpen className="size-4 text-clay-500" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{theme.overview}</p>
              </CardContent>
            </Card>

            {/* Evidence from each part */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif text-heading-md">
                  <Flame className="size-4 text-ochre-500" />
                  Evidence Across the Novel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-body-sm text-muted-foreground">
                {theme.partEvidence.map((pe) => (
                  <div key={pe.part}>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">{pe.part}</h4>
                    <p>{pe.evidence}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key quotes */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Quote className="size-4 text-clay-500" />
                <h3 className="font-serif text-heading-md text-foreground">Key Quotations</h3>
              </div>
              <div className="grid gap-3">
                {theme.keyQuotes.map((q, i) => (
                  <div key={i} className="rounded-lg border-l-4 border-l-clay-500 bg-cream-100 p-4">
                    <p className="font-serif font-medium italic text-foreground">{q.text}</p>
                    <p className="mt-1 text-xs font-mono text-clay-600">
                      {q.speaker} -- {q.part}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Context links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif text-heading-md">
                  <BookOpen className="size-4 text-teal-500" />
                  Links to Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-body-sm text-muted-foreground">
                  {theme.contextLinks.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Essay tips */}
            <Card className="bg-primary/[0.03] border-primary/10">
              <CardContent className="p-5 sm:p-6">
                <h4 className="mb-3 text-sm font-semibold text-foreground flex items-center gap-2">
                  <Lightbulb className="size-4 text-amber-400" />
                  Essay Planning Tips
                </h4>
                <ul className="list-disc space-y-2 pl-4 text-body-sm text-muted-foreground">
                  {theme.essayTips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )
      })}

      {/* Fair dealing notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Short quotations reproduced under the fair dealing provision of the Copyright, Designs and
        Patents Act 1988 for criticism and review. Full text available from your school or local
        library.
      </p>
    </div>
  )
}
