import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Palette, Swords, Search, Scale, Lightbulb } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { isGcseBoard } from '@/lib/board/board-filter'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { t } from '@/lib/i18n/t'

/* ── Vocabulary data ────────────────────────────────────────────── */

interface VocabWord {
  word: string
  definition: string
  example: string
  synonyms: string[]
}

interface VocabCategory {
  id: string
  title: string
  description: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  words: VocabWord[]
}

const CATEGORIES: VocabCategory[] = [
  {
    id: 'describe',
    title: 'Describe',
    description:
      'Words for creative and descriptive writing -- building atmosphere, setting, and character.',
    icon: Palette,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    words: [
      {
        word: 'Ethereal',
        definition: 'Extremely delicate, light, and airy; seeming too perfect for this world.',
        example: 'An ethereal mist clung to the valley, softening every edge into uncertainty.',
        synonyms: ['otherworldly', 'delicate', 'celestial'],
      },
      {
        word: 'Ominous',
        definition: 'Giving the feeling that something bad is going to happen; threatening.',
        example: 'The ominous silhouette of the tower loomed against the darkening sky.',
        synonyms: ['threatening', 'menacing', 'foreboding'],
      },
      {
        word: 'Dilapidated',
        definition: 'In a state of disrepair or ruin as a result of age or neglect.',
        example: 'The dilapidated cottage sagged beneath the weight of decades of abandonment.',
        synonyms: ['decrepit', 'ramshackle', 'crumbling'],
      },
      {
        word: 'Resplendent',
        definition: 'Dazzlingly beautiful; impressive in appearance.',
        example:
          'The garden was resplendent with colour, every border overflowing with late-summer blooms.',
        synonyms: ['dazzling', 'magnificent', 'radiant'],
      },
      {
        word: 'Palpable',
        definition: 'So intense as to be almost touched or felt physically.',
        example: 'The tension in the room was palpable; nobody dared to speak first.',
        synonyms: ['tangible', 'perceptible', 'unmistakable'],
      },
      {
        word: 'Languid',
        definition: 'Moving or speaking slowly and with little energy; pleasantly lazy.',
        example: 'A languid afternoon heat settled over the fields, slowing everything to a crawl.',
        synonyms: ['unhurried', 'leisurely', 'lethargic'],
      },
      {
        word: 'Cacophony',
        definition: 'A harsh, jarring mixture of sounds; discordant noise.',
        example:
          'The cacophony of the marketplace -- vendors shouting, metal clanging, engines idling -- was overwhelming.',
        synonyms: ['din', 'racket', 'discord'],
      },
      {
        word: 'Luminous',
        definition: 'Giving off light; bright or shining, especially in the dark.',
        example: 'The luminous moon cast silver patterns across the still water.',
        synonyms: ['radiant', 'glowing', 'incandescent'],
      },
      {
        word: 'Desolate',
        definition: 'Empty and bleak; giving an impression of hopeless sadness.',
        example:
          'The desolate landscape stretched endlessly, broken only by the skeletal remains of burnt trees.',
        synonyms: ['barren', 'bleak', 'forsaken'],
      },
      {
        word: 'Visceral',
        definition: 'Relating to deep inward feelings; instinctive rather than rational.',
        example: 'There was a visceral dread in his stomach that no amount of logic could quiet.',
        synonyms: ['gut-level', 'instinctive', 'primal'],
      },
      {
        word: 'Ephemeral',
        definition: 'Lasting for a very short time; fleeting.',
        example:
          'The ephemeral beauty of the cherry blossom made each day of its blooming feel precious.',
        synonyms: ['fleeting', 'transient', 'momentary'],
      },
      {
        word: 'Austere',
        definition: 'Severe or strict in manner or attitude; having no comforts or luxuries.',
        example: 'The austere interior of the chapel was bare except for a single wooden cross.',
        synonyms: ['stark', 'sparse', 'unadorned'],
      },
      {
        word: 'Labyrinthine',
        definition: 'Like a labyrinth; irregularly complex and winding.',
        example: 'The labyrinthine alleyways of the old town confused even the locals.',
        synonyms: ['maze-like', 'convoluted', 'intricate'],
      },
      {
        word: 'Tumultuous',
        definition: 'Making a loud, confused noise; excited, confused, or disorderly.',
        example: 'The tumultuous crowd surged forward as the gates were opened.',
        synonyms: ['turbulent', 'chaotic', 'tempestuous'],
      },
      {
        word: 'Immutable',
        definition: 'Unchanging over time; unable to be changed.',
        example:
          'The mountains stood immutable, indifferent to the centuries that passed beneath them.',
        synonyms: ['unchangeable', 'fixed', 'permanent'],
      },
      {
        word: 'Incandescent',
        definition: 'Emitting light as a result of being heated; intensely bright or passionate.',
        example: 'The incandescent rage in her eyes made him step back involuntarily.',
        synonyms: ['blazing', 'brilliant', 'fierce'],
      },
      {
        word: 'Melancholy',
        definition: 'A deep, persistent sadness; a pensive mood.',
        example: 'A quiet melancholy hung over the house long after the last guest had left.',
        synonyms: ['sadness', 'sorrow', 'wistfulness'],
      },
      {
        word: 'Pristine',
        definition: 'In its original, unspoilt condition; immaculately clean.',
        example: 'The pristine snow lay untouched, a white blanket over every imperfection.',
        synonyms: ['immaculate', 'unspoilt', 'flawless'],
      },
      {
        word: 'Oppressive',
        definition:
          'Weighing heavily on the mind or spirits; causing discomfort by being excessively hot or humid.',
        example: 'The oppressive heat pressed down on the city, draining colour from the streets.',
        synonyms: ['stifling', 'suffocating', 'overbearing'],
      },
      {
        word: 'Evocative',
        definition: 'Bringing strong images, memories, or feelings to mind.',
        example:
          'The evocative scent of woodsmoke transported her instantly to childhood holidays.',
        synonyms: ['suggestive', 'reminiscent', 'atmospheric'],
      },
      {
        word: 'Sombre',
        definition: 'Dark or dull in colour or tone; oppressively serious or sad.',
        example: 'A sombre silence fell over the assembly as the names were read aloud.',
        synonyms: ['gloomy', 'grave', 'solemn'],
      },
      {
        word: 'Verdant',
        definition: 'Green with grass or other rich vegetation; lush.',
        example: 'The verdant hillside was almost impossibly green after weeks of spring rain.',
        synonyms: ['lush', 'green', 'flourishing'],
      },
      {
        word: 'Grotesque',
        definition: 'Comically or repulsively ugly or distorted; incongruous and inappropriate.',
        example:
          'The grotesque gargoyle leered down from the cathedral, its stone mouth frozen in a snarl.',
        synonyms: ['monstrous', 'distorted', 'hideous'],
      },
      {
        word: 'Tranquil',
        definition: 'Free from disturbance; calm and peaceful.',
        example:
          'The tranquil surface of the lake reflected the sky so perfectly it was impossible to tell where water ended and air began.',
        synonyms: ['peaceful', 'serene', 'placid'],
      },
      {
        word: 'Forlorn',
        definition: 'Pitifully sad and abandoned or lonely.',
        example: 'A forlorn coat hung on the back of the door, its owner long since departed.',
        synonyms: ['desolate', 'wretched', 'forsaken'],
      },
    ],
  },
  {
    id: 'argue',
    title: 'Argue',
    description:
      'Words for persuasive and argumentative writing -- building a case, countering objections, and influencing readers.',
    icon: Swords,
    colour: 'text-red-400',
    bgColour: 'bg-red-500/10',
    words: [
      {
        word: 'Compelling',
        definition: 'Evoking interest or attention in a powerfully irresistible way.',
        example:
          'The evidence for climate action is not merely strong -- it is compelling beyond reasonable doubt.',
        synonyms: ['persuasive', 'convincing', 'forceful'],
      },
      {
        word: 'Irrefutable',
        definition: 'Impossible to deny or disprove; undeniable.',
        example:
          'The data presents an irrefutable case for increased investment in mental health services.',
        synonyms: ['undeniable', 'indisputable', 'incontrovertible'],
      },
      {
        word: 'Insidious',
        definition: 'Proceeding in a gradual, subtle way but with very harmful effects.',
        example: 'The insidious influence of social media on body image cannot be underestimated.',
        synonyms: ['stealthy', 'creeping', 'subtle'],
      },
      {
        word: 'Exacerbate',
        definition: 'To make a problem, bad situation, or negative feeling worse.',
        example: 'Cutting funding will only exacerbate the crisis in our schools.',
        synonyms: ['worsen', 'intensify', 'aggravate'],
      },
      {
        word: 'Advocate',
        definition: 'To publicly recommend or support a particular cause or policy.',
        example:
          'I advocate for a system that prioritises student wellbeing alongside academic achievement.',
        synonyms: ['champion', 'promote', 'support'],
      },
      {
        word: 'Undermine',
        definition: 'To erode the base or foundation of something; to weaken gradually.',
        example: 'Such policies undermine the very principles of fairness they claim to uphold.',
        synonyms: ['weaken', 'erode', 'sabotage'],
      },
      {
        word: 'Complacency',
        definition:
          "A feeling of smug or uncritical satisfaction with oneself or one's achievements.",
        example: 'Our complacency in the face of rising inequality is morally indefensible.',
        synonyms: ['smugness', 'self-satisfaction', 'apathy'],
      },
      {
        word: 'Unprecedented',
        definition: 'Never done or known before; without previous example.',
        example: 'We face an unprecedented challenge that demands an unprecedented response.',
        synonyms: ['unparalleled', 'unmatched', 'extraordinary'],
      },
      {
        word: 'Detrimental',
        definition: 'Tending to cause harm; damaging.',
        example:
          "Excessive screen time has a detrimental effect on children's sleep quality and concentration.",
        synonyms: ['harmful', 'damaging', 'injurious'],
      },
      {
        word: 'Inalienable',
        definition: 'Unable to be taken away from or given away by the possessor.',
        example: 'Access to clean water is an inalienable right, not a privilege for the wealthy.',
        synonyms: ['absolute', 'inviolable', 'non-negotiable'],
      },
      {
        word: 'Fallacy',
        definition: 'A mistaken belief based on unsound reasoning; a flawed argument.',
        example:
          'The notion that economic growth automatically benefits everyone is a dangerous fallacy.',
        synonyms: ['misconception', 'myth', 'error'],
      },
      {
        word: 'Perpetuate',
        definition: 'To make something continue indefinitely; to preserve from extinction.',
        example: 'These stereotypes perpetuate harmful narratives about entire communities.',
        synonyms: ['sustain', 'maintain', 'reinforce'],
      },
      {
        word: 'Paradox',
        definition: 'A seemingly contradictory statement that may nonetheless be true.',
        example:
          'It is a cruel paradox that the wealthiest nations often have the most isolated citizens.',
        synonyms: ['contradiction', 'inconsistency', 'anomaly'],
      },
      {
        word: 'Imperative',
        definition: 'Of vital importance; crucial; an essential or urgent thing.',
        example:
          'It is imperative that we act now, before the window of opportunity closes entirely.',
        synonyms: ['essential', 'vital', 'critical'],
      },
      {
        word: 'Proliferation',
        definition: 'Rapid increase in the number or amount of something.',
        example: 'The proliferation of misinformation online poses a direct threat to democracy.',
        synonyms: ['spread', 'expansion', 'multiplication'],
      },
      {
        word: 'Disproportionate',
        definition: 'Too large or too small in comparison with something else; out of proportion.',
        example:
          'The punishment was disproportionate to the offence and served only to alienate the student further.',
        synonyms: ['excessive', 'unequal', 'unbalanced'],
      },
      {
        word: 'Pragmatic',
        definition: 'Dealing with things sensibly and realistically rather than ideologically.',
        example: 'A pragmatic approach would balance environmental goals with economic realities.',
        synonyms: ['practical', 'realistic', 'sensible'],
      },
      {
        word: 'Culpable',
        definition: 'Deserving blame; guilty of wrongdoing.',
        example: 'Those who knew about the risks and said nothing are equally culpable.',
        synonyms: ['blameworthy', 'guilty', 'responsible'],
      },
      {
        word: 'Expedient',
        definition: 'Convenient and practical, although possibly improper or immoral.',
        example:
          'Choosing the expedient solution over the ethical one is precisely how we arrived at this crisis.',
        synonyms: ['convenient', 'advantageous', 'opportunistic'],
      },
      {
        word: 'Unequivocal',
        definition: 'Leaving no doubt; unambiguous; crystal clear.',
        example:
          'The scientific consensus is unequivocal: human activity is driving climate change.',
        synonyms: ['clear', 'definitive', 'absolute'],
      },
      {
        word: 'Myopic',
        definition: 'Lacking imagination, foresight, or intellectual insight; short-sighted.',
        example: 'A myopic focus on short-term profits blinds us to the long-term consequences.',
        synonyms: ['short-sighted', 'narrow-minded', 'blinkered'],
      },
      {
        word: 'Arbitrary',
        definition: 'Based on random choice or personal whim rather than reason or system.',
        example:
          'The decision to exclude certain students appears entirely arbitrary and unjustifiable.',
        synonyms: ['random', 'capricious', 'unprincipled'],
      },
      {
        word: 'Consensus',
        definition: 'A general agreement among a group.',
        example:
          'There is now a broad consensus among educators that rote memorisation alone is insufficient.',
        synonyms: ['agreement', 'accord', 'unanimity'],
      },
      {
        word: 'Superficial',
        definition: 'Existing or occurring at or on the surface; not thorough or deep.',
        example: 'This superficial analysis ignores the systemic causes of the problem.',
        synonyms: ['shallow', 'cursory', 'surface-level'],
      },
      {
        word: 'Categorical',
        definition: 'Unambiguously explicit and direct; unconditional and absolute.',
        example: 'I reject this proposal in the most categorical terms possible.',
        synonyms: ['absolute', 'unqualified', 'emphatic'],
      },
    ],
  },
  {
    id: 'analyse',
    title: 'Analyse',
    description:
      'Words for reading responses -- discussing writer methods, language effects, and structural choices.',
    icon: Search,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    words: [
      {
        word: 'Connotation',
        definition: 'An idea or feeling that a word invokes in addition to its literal meaning.',
        example:
          'The word "lurking" carries connotations of threat and concealment that intensify the sense of danger.',
        synonyms: ['association', 'implication', 'undertone'],
      },
      {
        word: 'Juxtaposition',
        definition: 'The fact of placing two things close together with contrasting effect.',
        example:
          "The juxtaposition of the child's innocence with the violence of the setting heightens the reader's discomfort.",
        synonyms: ['contrast', 'comparison', 'pairing'],
      },
      {
        word: 'Ambiguity',
        definition:
          'The quality of being open to more than one interpretation; inexactness of meaning.',
        example: 'The ambiguity of the ending forces the reader to construct their own meaning.',
        synonyms: ['uncertainty', 'vagueness', 'double meaning'],
      },
      {
        word: 'Semantic field',
        definition: 'A group of words that share a common theme or subject area.',
        example:
          'The semantic field of imprisonment -- "trapped", "caged", "confined" -- reinforces the character\'s sense of entrapment.',
        synonyms: ['lexical field', 'word group', 'thematic cluster'],
      },
      {
        word: 'Foregrounding',
        definition:
          'The act of making something prominent or drawing attention to it through deviation from the norm.',
        example:
          "The writer foregrounds the protagonist's isolation by placing them alone in the opening sentence.",
        synonyms: ['emphasising', 'highlighting', 'spotlighting'],
      },
      {
        word: 'Deliberate',
        definition: 'Done consciously and intentionally; fully considered.',
        example:
          "The writer's deliberate use of fragmented sentences mirrors the character's fractured mental state.",
        synonyms: ['intentional', 'calculated', 'purposeful'],
      },
      {
        word: 'Convey',
        definition: 'To communicate or make known (a meaning, impression, or feeling).',
        example:
          'The extended metaphor conveys the idea that grief is not a single event but a continuous process.',
        synonyms: ['communicate', 'express', 'transmit'],
      },
      {
        word: 'Subvert',
        definition:
          'To undermine the power and authority of an established system or institution; to overturn expectations.',
        example:
          "The writer subverts the reader's expectations by revealing the villain as the narrator.",
        synonyms: ['overturn', 'undermine', 'challenge'],
      },
      {
        word: 'Nuance',
        definition: 'A subtle difference in or shade of meaning, expression, or sound.',
        example: "The nuance of the narrator's tone suggests sympathy rather than condemnation.",
        synonyms: ['subtlety', 'shade', 'refinement'],
      },
      {
        word: 'Implicit',
        definition: 'Suggested though not directly expressed; implied.',
        example: "The writer's criticism of social class is implicit rather than stated outright.",
        synonyms: ['implied', 'unspoken', 'inferred'],
      },
      {
        word: 'Pervasive',
        definition: 'Spreading widely throughout an area or group; present throughout.',
        example:
          'A pervasive sense of unease runs through the entire extract, even in moments of apparent calm.',
        synonyms: ['widespread', 'omnipresent', 'prevalent'],
      },
      {
        word: 'Cumulative',
        definition:
          'Increasing or increased in quantity, degree, or force by successive additions.',
        example:
          'The cumulative effect of these short, sharp sentences creates an almost breathless urgency.',
        synonyms: ['building', 'mounting', 'progressive'],
      },
      {
        word: 'Underpin',
        definition: 'To support or form the basis of an argument, claim, or theory.',
        example:
          'A deep anxiety about mortality underpins the entire poem, even when the surface subject is nature.',
        synonyms: ['support', 'sustain', 'undergird'],
      },
      {
        word: 'Motif',
        definition:
          'A recurring element, image, or idea in a literary work that has symbolic significance.',
        example:
          'The motif of water recurs throughout the novel, representing both cleansing and destruction.',
        synonyms: ['recurring theme', 'pattern', 'leitmotif'],
      },
      {
        word: 'Denote',
        definition: 'To be a sign of; to indicate the literal meaning of a word.',
        example: 'While "winter" denotes a season, here it symbolises the end of the relationship.',
        synonyms: ['signify', 'indicate', 'mean'],
      },
      {
        word: 'Poignant',
        definition: 'Evoking a keen sense of sadness or regret; sharply affecting.',
        example:
          'The most poignant moment occurs when the child reaches for a hand that is no longer there.',
        synonyms: ['moving', 'touching', 'affecting'],
      },
      {
        word: 'Evoke',
        definition: 'To bring or recall (a feeling, memory, or image) to the conscious mind.',
        example:
          'The description of the empty playground evokes a powerful sense of loss and nostalgia.',
        synonyms: ['conjure', 'summon', 'invoke'],
      },
      {
        word: 'Underscore',
        definition: 'To emphasise or draw special attention to.',
        example:
          "The writer's use of silence at this point underscores the magnitude of the revelation.",
        synonyms: ['emphasise', 'highlight', 'stress'],
      },
      {
        word: 'Dichotomy',
        definition:
          'A division or contrast between two things that are represented as entirely different.',
        example:
          'The dichotomy between light and darkness in the extract mirrors the moral conflict within the protagonist.',
        synonyms: ['contrast', 'division', 'opposition'],
      },
      {
        word: 'Encapsulate',
        definition:
          'To express the essential features of something succinctly; to contain or sum up.',
        example: 'This single image encapsulates the central theme of the entire text.',
        synonyms: ['summarise', 'distil', 'embody'],
      },
      {
        word: 'Oscillate',
        definition: 'To move or swing back and forth between two points, positions, or states.',
        example:
          "The narrator's tone oscillates between admiration and resentment, never fully committing to either.",
        synonyms: ['alternate', 'fluctuate', 'waver'],
      },
      {
        word: 'Manifest',
        definition:
          'To display or show a quality or feeling clearly through appearance or actions.',
        example:
          "The character's anxiety manifests physically through the trembling of their hands.",
        synonyms: ['display', 'demonstrate', 'reveal'],
      },
      {
        word: 'Precede',
        definition: 'To come before something in time, order, or position.',
        example:
          'The peaceful description that precedes the violence makes the shift more shocking.',
        synonyms: ['come before', 'lead into', 'preface'],
      },
      {
        word: 'Stark',
        definition: 'Severe or bare in appearance; sharply clear and obvious.',
        example:
          "The stark contrast between the two characters' responses reveals their fundamentally different worldviews.",
        synonyms: ['sharp', 'striking', 'blunt'],
      },
      {
        word: 'Permeate',
        definition: 'To spread throughout something; to pervade.',
        example:
          'A quiet desperation permeates every line of the extract, colouring even the most mundane details.',
        synonyms: ['pervade', 'saturate', 'infuse'],
      },
    ],
  },
  {
    id: 'evaluate',
    title: 'Evaluate',
    description:
      'Words for evaluation questions and comparison -- weighing arguments, making judgements, and expressing degree.',
    icon: Scale,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    words: [
      {
        word: 'Substantiate',
        definition: 'To provide evidence to support or prove the truth of something.',
        example:
          'While the claim is interesting, the writer does little to substantiate it with concrete evidence.',
        synonyms: ['verify', 'confirm', 'corroborate'],
      },
      {
        word: 'Cogent',
        definition: 'Clear, logical, and convincing.',
        example:
          'The argument, while passionately delivered, is not entirely cogent -- several logical gaps remain.',
        synonyms: ['persuasive', 'convincing', 'compelling'],
      },
      {
        word: 'Tenuous',
        definition: 'Very weak or slight; insubstantial.',
        example:
          'The connection between the two claims is tenuous at best, relying on coincidence rather than causation.',
        synonyms: ['weak', 'flimsy', 'doubtful'],
      },
      {
        word: 'Salient',
        definition: 'Most noticeable or important; prominent.',
        example:
          "The most salient point in Source A is the writer's insistence on personal responsibility.",
        synonyms: ['prominent', 'key', 'significant'],
      },
      {
        word: 'Credible',
        definition: 'Able to be believed; convincing and trustworthy.',
        example:
          'Source B offers a more credible account because the writer draws on first-hand experience.',
        synonyms: ['believable', 'plausible', 'trustworthy'],
      },
      {
        word: 'Discernible',
        definition: 'Able to be perceived, noticed, or recognised clearly.',
        example:
          'A discernible shift in tone occurs midway through the extract, moving from nostalgia to bitterness.',
        synonyms: ['noticeable', 'detectable', 'perceptible'],
      },
      {
        word: 'Predominantly',
        definition: 'Mainly; for the most part; in the majority.',
        example:
          "The writer's tone is predominantly sympathetic, though moments of frustration surface occasionally.",
        synonyms: ['mainly', 'largely', 'primarily'],
      },
      {
        word: 'Efficacy',
        definition: 'The ability to produce a desired or intended result; effectiveness.',
        example:
          "The efficacy of the writer's argument depends entirely on whether the reader shares their initial premise.",
        synonyms: ['effectiveness', 'potency', 'success'],
      },
      {
        word: 'Corroborate',
        definition: 'To confirm or give support to a statement, theory, or finding.',
        example:
          'Source B corroborates the central argument of Source A, lending it additional weight.',
        synonyms: ['confirm', 'support', 'validate'],
      },
      {
        word: 'Mitigate',
        definition: 'To make something less severe, serious, or painful.',
        example:
          'While the writer acknowledges the risks, they argue that the benefits mitigate any potential harm.',
        synonyms: ['lessen', 'reduce', 'alleviate'],
      },
      {
        word: 'Contentious',
        definition: 'Causing or likely to cause disagreement or argument; controversial.',
        example: 'This remains a contentious issue, with equally passionate voices on both sides.',
        synonyms: ['controversial', 'debatable', 'divisive'],
      },
      {
        word: 'Prevailing',
        definition: 'Existing at a particular time; current and dominant.',
        example: 'The prevailing view at the time was that children should be seen and not heard.',
        synonyms: ['current', 'dominant', 'widespread'],
      },
      {
        word: 'Divergent',
        definition: 'Tending to be different or develop in different directions.',
        example: 'The two sources offer fundamentally divergent perspectives on the same issue.',
        synonyms: ['differing', 'contrasting', 'opposing'],
      },
      {
        word: 'Purport',
        definition: 'To appear or claim to be or do something, especially falsely.',
        example:
          'The article purports to offer a balanced view, but the selection of evidence reveals a clear bias.',
        synonyms: ['claim', 'profess', 'allege'],
      },
      {
        word: 'Plausible',
        definition: 'Seeming reasonable or probable; believable.',
        example: 'Although plausible on the surface, the argument collapses under closer scrutiny.',
        synonyms: ['believable', 'credible', 'feasible'],
      },
      {
        word: 'Warranted',
        definition: 'Justified or deserved; having adequate grounds.',
        example:
          "The writer's anger is entirely warranted given the severity of the injustice described.",
        synonyms: ['justified', 'deserved', 'merited'],
      },
      {
        word: 'Partisan',
        definition: 'Prejudiced in favour of a particular cause; biased.',
        example: "The writer's approach is too partisan to be taken as objective analysis.",
        synonyms: ['biased', 'one-sided', 'prejudiced'],
      },
      {
        word: 'Conversely',
        definition:
          'Introducing a statement or idea which reverses or contrasts with the previous one.',
        example:
          'Source A celebrates technological progress; conversely, Source B views it with deep suspicion.',
        synonyms: ['on the other hand', 'by contrast', 'alternatively'],
      },
      {
        word: 'Corrosive',
        definition: 'Gradually wearing away or destroying; having a harmful or destructive effect.',
        example:
          'The writer presents apathy as a corrosive force that slowly erodes democratic values.',
        synonyms: ['destructive', 'damaging', 'erosive'],
      },
      {
        word: 'Ostensibly',
        definition: 'As appears or is stated to be true, though not necessarily so; seemingly.',
        example:
          'The policy is ostensibly designed to protect children, but its real effect is to restrict their freedom.',
        synonyms: ['apparently', 'seemingly', 'supposedly'],
      },
      {
        word: 'Reductive',
        definition: 'Tending to present a subject in an oversimplified way.',
        example:
          'To describe the issue as simply a matter of personal choice is reductive and ignores systemic factors.',
        synonyms: ['simplistic', 'oversimplified', 'narrow'],
      },
      {
        word: 'Equivocal',
        definition: 'Open to more than one interpretation; ambiguous or uncertain.',
        example:
          'The evidence is equivocal -- it could support either interpretation depending on the lens applied.',
        synonyms: ['ambiguous', 'uncertain', 'inconclusive'],
      },
      {
        word: 'Pertinent',
        definition: 'Relevant or applicable to a particular matter; apposite.',
        example: 'The most pertinent question is not whether this works, but whether it is right.',
        synonyms: ['relevant', 'applicable', 'germane'],
      },
      {
        word: 'Antithetical',
        definition: 'Directly opposed or contrasted; mutually incompatible.',
        example:
          'The values expressed in Source B are antithetical to those celebrated in Source A.',
        synonyms: ['opposed', 'contrary', 'contradictory'],
      },
      {
        word: 'Nuanced',
        definition: 'Characterised by subtle shades of meaning or expression.',
        example:
          'A more nuanced reading of the text reveals sympathy beneath the apparent criticism.',
        synonyms: ['subtle', 'refined', 'complex'],
      },
    ],
  },
]

/* ── Main page component ────────────────────────────────────────── */

export default async function VocabularyPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? config?.name ?? 'GCSE English'

  // Board guard: GCSE only
  if (board && !isGcseBoard(board)) {
    redirect('/revision/language')
  }

  const totalWords = CATEGORIES.reduce((sum, cat) => sum + cat.words.length, 0)

  // Localised category title/description chrome, keyed by category id.
  const catCopy: Record<string, { title: string; desc: string }> = {}
  for (const cat of CATEGORIES) {
    catCopy[cat.id] = {
      title: await t(`rev.lang.vocab.cat.${cat.id}.title`),
      desc: await t(`rev.lang.vocab.cat.${cat.id}.desc`),
    }
  }
  const wordsLabel = await t('rev.lang.vocab.words_label')

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumb
        items={[
          { label: await t('rev.lang.hub.breadcrumb_revision'), href: '/revision' },
          { label: await t('rev.lang.hub.breadcrumb_language'), href: '/revision/language' },
          { label: await t('rev.lang.vocab.breadcrumb') },
        ]}
      />

      {/* Header */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/language" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('rev.lang.vocab.back')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <BookOpen className="size-5 text-cyan-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                {await t('rev.lang.vocab.title')}
              </h1>
              {board && (
                <Badge variant="secondary" className="text-xs">
                  {boardName}
                </Badge>
              )}
            </div>
            <p className="text-body-sm text-muted-foreground">
              {totalWords} {await t('rev.lang.vocab.subtitle_suffix')}
            </p>
          </div>
        </div>
      </div>

      {/* How to use tip */}
      <div className="flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" />
        <div className="text-body-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">{await t('rev.lang.vocab.how_label')}</strong>{' '}
          {await t('rev.lang.vocab.how_body_prefix')} {totalWords}{' '}
          {await t('rev.lang.vocab.how_body_suffix')}
        </div>
      </div>

      {/* Category navigation */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-xl border border-border/60 bg-card p-3 text-center transition-colors hover:border-border hover:shadow-card-hover"
          >
            <div
              className={`mx-auto flex size-8 items-center justify-center rounded-lg ${cat.bgColour}`}
            >
              <cat.icon className={`size-4 ${cat.colour}`} />
            </div>
            <p className="mt-2 text-sm font-semibold text-foreground">{catCopy[cat.id].title}</p>
            <p className="text-xs text-muted-foreground">
              {cat.words.length} {wordsLabel}
            </p>
          </a>
        ))}
      </div>

      {/* Category sections */}
      {CATEGORIES.map((cat) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <div className={`flex size-8 items-center justify-center rounded-lg ${cat.bgColour}`}>
              <cat.icon className={`size-4 ${cat.colour}`} />
            </div>
            <div>
              <h2 className="text-heading-md font-heading text-foreground">
                {catCopy[cat.id].title}
              </h2>
              <p className="text-caption text-muted-foreground">{catCopy[cat.id].desc}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cat.words.map((w) => (
              <div
                key={w.word}
                className="rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-border"
              >
                <h3 className="text-sm font-bold text-foreground">{w.word}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{w.definition}</p>
                <div className="mt-2 rounded-lg bg-accent/20 p-2.5">
                  <p className="text-xs text-foreground/80 italic leading-relaxed">
                    &ldquo;{w.example}&rdquo;
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {w.synonyms.map((syn) => (
                    <Badge key={syn} variant="outline" className="text-[10px] px-1.5 py-0">
                      {syn}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
