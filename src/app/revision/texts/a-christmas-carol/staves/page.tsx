import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Flame,
  Ghost,
  Sparkles,
  Quote,
  Lightbulb,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'A Christmas Carol — All Five Staves Analysed | The English Hub',
  description:
    'In-depth analysis of every stave in A Christmas Carol by Charles Dickens: plot, language, key quotations and exam-ready commentary.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/texts/a-christmas-carol/staves',
  },
}

/* ── Types ──────────────────────────────────────────────────────────── */

type QuoteAnalysis = {
  quote: string
  context: string
  analysis: string
  devices: string[]
}

type StaveData = {
  number: number
  title: string
  subtitle: string
  summary: string[]
  keyMoments: string[]
  quotes: QuoteAnalysis[]
  languageAnalysis: {
    heading: string
    body: string
  }[]
  thematicSignificance: string
}

/* ── Data ───────────────────────────────────────────────────────────── */

const staves: StaveData[] = [
  {
    number: 1,
    title: "Marley's Ghost",
    subtitle: 'Establishing Scrooge\'s isolation and the supernatural warning',
    summary: [
      'The novella opens with the blunt declaration that "Old Marley was as dead as a door-nail." Dickens establishes an intimate, conversational relationship with the reader from the first paragraph, directly addressing us and debating the aptness of the simile. This technique makes the reader feel personally involved in the moral lesson to come.',
      'We are introduced to Ebenezer Scrooge on Christmas Eve at his counting-house. Dickens uses an extraordinary barrage of negative adjectives to define him: "a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!" The listing technique creates a sense of relentless, mechanical greed. Scrooge is cold in every sense -- he keeps his office freezing, refuses to spend money on coal, and has frozen out all human warmth from his life. The pathetic fallacy is explicit: "The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait."',
      'Three encounters establish Scrooge\'s hostility to Christmas and humanity. His nephew Fred visits with a cheerful invitation to dinner, which Scrooge dismisses with his famous "Bah! Humbug!" Fred\'s speech defending Christmas as "the only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely" provides the novella\'s moral thesis in miniature. Two charity collectors ask for donations for the poor, and Scrooge responds with the callous suggestion that the poor should go to prisons and workhouses, and if they would rather die, "they had better do it, and decrease the surplus population." This directly echoes the Malthusian economics that Dickens despised. Finally, Scrooge grudgingly allows Bob Cratchit a single day off for Christmas, complaining about paying "a day\'s wages for no work."',
      'That evening, Marley\'s ghost appears. The ghost wears a heavy chain "made of cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel." Each link represents a selfish act committed during life. Marley delivers the novella\'s most important moral message: "Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence were, all, my business." He warns Scrooge that three spirits will visit him, offering the chance to escape Marley\'s fate.',
    ],
    keyMoments: [
      'The opening declaration of Marley\'s death establishes the narrative voice',
      'Scrooge\'s description through accumulated adjectives',
      'Fred\'s defence of Christmas as a time of open-hearted generosity',
      'Scrooge\'s dismissal of the charity collectors with Malthusian language',
      'Marley\'s ghost and the chain metaphor',
      'The revelation that Scrooge\'s own chain was "as heavy and as long" seven years ago',
    ],
    quotes: [
      {
        quote: '"Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"',
        context: 'The narrator\'s introduction of Scrooge in the opening pages.',
        analysis: 'Dickens uses a listing technique with seven consecutive adjectives, each suggesting a different type of physical violence or theft. The progressive participles ("-ing" endings) create a relentless, grinding rhythm that mirrors Scrooge\'s mechanical approach to life. The exclamatory sentence and direct address ("Scrooge!") involve the reader as witness. Notice that every adjective describes taking -- Scrooge is defined entirely by what he extracts from the world, never by what he gives.',
        devices: ['Listing', 'Progressive participles', 'Direct address', 'Characterisation'],
      },
      {
        quote: '"The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait."',
        context: 'Describing Scrooge\'s physical appearance.',
        analysis: 'Pathetic fallacy makes Scrooge\'s inner emotional coldness manifest on his body. The "cold within him" is both literal (he is too miserly to heat his rooms) and metaphorical (he has frozen out all human feeling). The verbs "froze," "nipped," "shrivelled," "stiffened" suggest decay and death -- Scrooge is already becoming corpse-like while still alive. This foreshadows the death imagery of Stave Four.',
        devices: ['Pathetic fallacy', 'Metaphor', 'Foreshadowing', 'Verb choice'],
      },
      {
        quote: '"Are there no prisons? Are there no workhouses?"',
        context: 'Scrooge\'s response to the charity collectors.',
        analysis: 'Scrooge parrots the language of Victorian utilitarian policy. The rhetorical questions are intended to dismiss responsibility -- if institutions exist, why should he personally help? Dickens makes the reader hear how cruel this reasoning sounds when spoken aloud by an individual. The Ghost of Christmas Present throws these exact words back at Scrooge in Stave Three, transforming them from dismissal into accusation.',
        devices: ['Rhetorical questions', 'Dramatic irony', 'Political allusion'],
      },
      {
        quote: '"I wear the chain I forged in life. I made it link by link, and yard by yard."',
        context: 'Marley\'s ghost explaining the chain he wears.',
        analysis: 'The chain is Dickens\'s central metaphor for the consequences of selfishness. The craftsmanship language -- "forged," "link by link," "yard by yard" -- makes greed feel deliberate and cumulative. Each selfish act adds weight. The first-person ownership ("I forged," "I made") emphasises personal responsibility. The chain is composed of "cash-boxes, keys, padlocks, ledgers, deeds" -- the very tools of commerce become instruments of eternal punishment.',
        devices: ['Extended metaphor', 'Cumulative imagery', 'Symbolism'],
      },
      {
        quote: '"Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence were, all, my business."',
        context: 'Marley\'s anguished cry to Scrooge.',
        analysis: 'Marley redefines the word "business" from commerce to compassion. This is Dickens\'s thesis statement for the entire novella. The repetition of "my business" with increasing moral weight creates an anaphoric pattern that hammers home the message. The listing of virtues -- "charity, mercy, forbearance, and benevolence" -- contrasts sharply with the earlier listing of Scrooge\'s vices. Marley has learned too late what his true occupation should have been.',
        devices: ['Anaphora', 'Redefinition', 'Listing', 'Contrast'],
      },
    ],
    languageAnalysis: [
      {
        heading: 'Narrative voice and direct address',
        body: 'Dickens opens Stave One by speaking directly to the reader: "There is no doubt that Marley was dead. This must be distinctly understood, or nothing wonderful can come of the story I am going to relate." This conversational, almost conspiratorial tone establishes the narrative as a spoken story -- a fireside tale. It makes the reader feel personally addressed and therefore personally implicated in the moral message. This technique is sustained throughout the novella and is crucial to its persuasive power.',
      },
      {
        heading: 'Accumulation and listing',
        body: 'Stave One is dominated by lists. Scrooge is described through seven consecutive adjectives. The cold is described through four verbs. Marley\'s chain is itemised. This accumulation technique creates an overwhelming effect -- the reader is buried under evidence of Scrooge\'s cruelty just as Marley is buried under the weight of his chain. Dickens uses quantity of language to mirror the quantity of suffering caused by greed.',
      },
      {
        heading: 'Contrast and juxtaposition',
        body: 'The stave is structured around stark contrasts: warmth versus cold, generosity versus miserliness, Fred\'s joy versus Scrooge\'s bitterness. The charity collectors represent the compassionate response to poverty; Scrooge represents the utilitarian response. Dickens does not allow any middle ground -- the moral choice is presented as absolute. This binary structure reflects the novella\'s genre as a morality tale.',
      },
      {
        heading: 'Gothic and supernatural imagery',
        body: 'Marley\'s appearance introduces Gothic elements: the clanking chains, the ghostly face on the door-knocker, the hearse on the staircase. Dickens uses sensory detail to make the supernatural viscerally real -- the sound of chains, the cold wind, the flickering candle. The Gothic serves a moral purpose: the supernatural is terrifying precisely because it reveals spiritual truths that Scrooge has been ignoring.',
      },
    ],
    thematicSignificance: 'Stave One establishes every major theme and conflict in the novella. Scrooge\'s isolation is both cause and consequence of his greed. Fred\'s speech defines Christmas as a moral principle rather than a mere holiday. The charity collectors introduce the theme of social responsibility. Marley\'s ghost provides the supernatural framework and the central metaphor of the chain. Most importantly, Stave One establishes that change is possible -- the spirits are coming not to punish Scrooge but to offer him "a chance and hope" of redemption.',
  },
  {
    number: 2,
    title: 'The First of the Three Spirits',
    subtitle: 'Confronting the past -- memory as the first step toward change',
    summary: [
      'The Ghost of Christmas Past appears as an extraordinary, contradictory figure: it is both old and young, both strong and gentle, with a bright light shining from its head. The spirit carries a cap shaped like an extinguisher, which can dim its light. This light symbolises truth and memory -- things Scrooge has tried to suppress. The ghost\'s physical ambiguity reflects the nature of memory itself: it belongs to every age simultaneously.',
      'The spirit takes Scrooge back to his childhood. The first vision shows young Scrooge as "a solitary child, neglected by his friends," left alone at boarding school during the Christmas holidays while other boys went home. Scrooge weeps at the sight of his younger self. This is the emotional key to the entire novella: Dickens shows that Scrooge\'s cruelty did not emerge from nowhere but grew from loneliness and neglect. Understanding the past is the necessary first step toward transformation.',
      'Scrooge then sees his beloved sister Fan arriving to bring him home, declaring that "Father is so much kinder than he used to be." This brief mention of Scrooge\'s harsh father suggests a cycle of emotional coldness passed down through generations. Fan\'s warmth and love are the antithesis of Scrooge\'s current isolation, and her early death (she is Fred\'s mother) adds poignancy -- Scrooge has rejected the one living link to the person who loved him most.',
      'The vision of Fezziwig\'s warehouse party is crucial. Old Fezziwig, Scrooge\'s former employer, spends only "three or four pounds" on a Christmas party but creates enormous joy. Scrooge himself recognises the power an employer holds: "He has the power to render us happy or unhappy; to make our service light or burdensome." This is a direct comment on Scrooge\'s own treatment of Bob Cratchit and foreshadows his eventual decision to raise Bob\'s salary.',
      'The final and most painful vision shows Belle, Scrooge\'s former fiancee, releasing him from their engagement because "another idol has displaced me... a golden one." The word "idol" carries religious weight -- Scrooge has committed idolatry by worshipping money instead of love. Belle is then shown years later, happily married with children in a warm, loving home. Scrooge sees the domestic happiness he sacrificed for wealth. He begs the spirit to show him no more and forces the extinguisher cap over the ghost\'s head, trying to suppress the light of truth -- but the light cannot be fully extinguished.',
    ],
    keyMoments: [
      'The Ghost of Christmas Past\'s contradictory appearance -- both old and young',
      'Young Scrooge alone at school -- the root of his emotional isolation',
      'Fan\'s arrival and the hint of a cruel father',
      'Fezziwig\'s party and the power of employers to create happiness',
      'Belle\'s departure: "another idol has displaced me"',
      'Scrooge\'s attempt to extinguish the ghost\'s light',
    ],
    quotes: [
      {
        quote: '"A solitary child, neglected by his friends, is left there still."',
        context: 'The narrator describes the vision of young Scrooge alone at school.',
        analysis: 'This is the emotional key to Scrooge\'s entire character. "Solitary" and "neglected" show that his adult isolation began in childhood -- he was not born cold but was made cold by abandonment. "Left there still" is devastating: the child is still waiting, still alone. Dickens implies that the lonely boy is still inside the old miser, buried but not gone. This moment generates the reader\'s sympathy and makes Scrooge\'s redemption feel psychologically real rather than merely magical.',
        devices: ['Pathos', 'Characterisation', 'Symbolism'],
      },
      {
        quote: '"Another idol has displaced me... a golden one."',
        context: 'Belle explains why she is releasing Scrooge from their engagement.',
        analysis: 'Belle identifies money as Scrooge\'s false god. The word "idol" carries deliberate biblical weight -- the worship of a golden idol is one of the most condemned sins in the Old Testament (the Golden Calf). By choosing this word, Dickens frames Scrooge\'s greed as spiritual corruption, not merely a personality flaw. The ellipsis suggests Belle\'s pain and hesitation. "Displaced" is precise: love has not disappeared from Scrooge but has been physically pushed aside by gold.',
        devices: ['Biblical allusion', 'Metaphor', 'Symbolism'],
      },
      {
        quote: '"He has the power to render us happy or unhappy; to make our service light or burdensome; a pleasure or a toil."',
        context: 'Scrooge reflects on Fezziwig\'s generosity as an employer.',
        analysis: 'Scrooge himself articulates the social message of the novella -- that employers have moral power over their workers\' wellbeing. The balanced antithetical pairings ("happy or unhappy," "light or burdensome," "pleasure or a toil") present the choice as binary: there is no neutral position. Fezziwig spent only a few pounds but created genuine joy. This is a direct rebuke to Scrooge\'s treatment of Bob Cratchit and a model for what he must become.',
        devices: ['Antithesis', 'Dramatic irony', 'Social commentary'],
      },
      {
        quote: '"A small matter... to make these silly folks so full of gratitude."',
        context: 'The Ghost comments on Fezziwig\'s modest expenditure.',
        analysis: 'The spirit\'s words test Scrooge. When Scrooge defends Fezziwig\'s generosity, he reveals that he already knows, deep down, that kindness matters more than money. The word "silly" is the spirit\'s provocation -- it echoes the dismissive language Scrooge himself uses about Christmas. Scrooge\'s instinctive defence of Fezziwig proves that his capacity for empathy has not been destroyed, only buried.',
        devices: ['Irony', 'Characterisation', 'Dramatic technique'],
      },
      {
        quote: '"I should like to be able to say a word or two to my clerk just now."',
        context: 'Scrooge\'s reaction after watching Fezziwig.',
        analysis: 'This is Scrooge\'s first moment of moral awakening. He connects the vision of a kind employer (Fezziwig) with his own failure as an employer (to Bob Cratchit). The understated phrasing -- "a word or two" -- shows Scrooge is not yet transformed but is beginning to feel discomfort. Dickens places this realisation early in the journey to show that change is gradual, not instantaneous.',
        devices: ['Understatement', 'Dramatic irony', 'Character development'],
      },
    ],
    languageAnalysis: [
      {
        heading: 'Light and darkness symbolism',
        body: 'The Ghost of Christmas Past emits a bright, clear light from its head, symbolising truth, memory, and self-knowledge. Scrooge attempts to suppress this light by forcing the extinguisher cap over the spirit\'s head, but "he could not hide the light: which streamed from under it." This symbolism is central: Scrooge has spent years trying to suppress uncomfortable truths about his past, but the light of memory cannot be fully extinguished. Truth will always find a way through.',
      },
      {
        heading: 'Emotional register and pathos',
        body: 'Stave Two shifts the tone from the satirical comedy of Stave One to genuine emotional depth. When Scrooge sees his younger self, he weeps; his "lip was trembling." Dickens allows the reader to see vulnerability beneath the hard exterior. This shift is essential to the novella\'s project: we cannot wish for Scrooge\'s redemption unless we first understand his pain. The pathos is never sentimental -- it is grounded in specific, psychologically credible memories.',
      },
      {
        heading: 'Antithesis and moral contrast',
        body: 'The stave is built on contrasts: young Scrooge versus old Scrooge; Fezziwig\'s generosity versus Scrooge\'s miserliness; Belle\'s warmth versus Scrooge\'s coldness; the joy of giving versus the emptiness of hoarding. These antitheses make the moral argument visual and visceral. The reader does not need to be told that generosity is better than greed -- the contrast between Fezziwig\'s party and Scrooge\'s cold counting-house makes it self-evident.',
      },
      {
        heading: 'The significance of naming',
        body: 'The characters in Scrooge\'s past are named (Fan, Fezziwig, Belle), while Scrooge himself is referred to only by his surname throughout most of the novella. This reflects his loss of personal identity -- he has become nothing more than a name on a ledger. The named characters represent the human connections he has severed. It is significant that in Stave Five, when Scrooge is redeemed, he is finally described in human terms: "as good a friend, as good a master, and as good a man."',
      },
    ],
    thematicSignificance: 'Stave Two establishes that Scrooge\'s cruelty has a history and a cause. He was not born miserable -- he was made miserable by neglect, and he chose money over love as a form of self-protection. By showing the reader the lonely child and the rejected lover, Dickens generates the sympathy necessary for the reader to want Scrooge to change. The stave also introduces the crucial idea that employers bear moral responsibility for their workers\' happiness -- a theme that Dickens develops through the Cratchit family in Stave Three.',
  },
  {
    number: 3,
    title: 'The Second of the Three Spirits',
    subtitle: 'Witnessing the present -- empathy as the path to transformation',
    summary: [
      'The Ghost of Christmas Present is a "jolly Giant" dressed in a green robe bordered with white fur, seated on a throne made of turkeys, geese, sausages, mince-pies, plum-puddings, barrels of oysters, cherry-cheeked apples, and immense twelfth-cakes. The abundance is deliberate: this spirit embodies generosity, celebration, and the sharing of plenty. Its torch, shaped like Plenty\'s horn (cornucopia), sprinkles a special incense on the food of the poor, improving their meagre dinners. This detail is Dickens\'s metaphor for the transformative power of the Christmas spirit.',
      'The spirit takes Scrooge to the streets of London on Christmas morning, where even the poorest families are celebrating. The extended description of the food markets, the church bells, and the families hurrying to dinner creates a panoramic portrait of a city united by shared festivity. Dickens is careful to show that joy does not require wealth -- the poorest households celebrate with as much spirit as the richest.',
      'The centrepiece of Stave Three is the Cratchit family\'s Christmas dinner. Bob Cratchit earns only fifteen shillings a week -- desperately poor even by Victorian standards. Their goose is small, their pudding tiny, and the entire family works to prepare the meal. Yet Dickens describes the dinner with such warmth and love that it becomes a feast: "There never was such a goose." The family\'s gratitude transforms poverty into abundance. Tiny Tim, Bob\'s youngest son, sits close to his father, supported by a crutch. His famous line -- "God bless Us, Every One!" -- is a prayer for universal blessing that embodies the selfless generosity Scrooge must learn.',
      'The Ghost warns Scrooge that "if these shadows remain unaltered by the Future, the child will die." The conditional "if" places moral responsibility squarely on Scrooge -- and on the reader. Tiny Tim\'s death is not inevitable; it will happen only if society refuses to care for its most vulnerable. When Scrooge protests, the Ghost throws his own earlier words back at him: "If he be like to die, he had better do it, and decrease the surplus population." This repetition is devastating -- Scrooge is forced to hear his own callousness applied to a specific, loveable child.',
      'The stave\'s most politically charged moment comes near the end. The Ghost reveals two children hidden beneath his robe: "They were a boy and a girl. Yellow, meagre, ragged, scowling, wolfish." They are named Ignorance (the boy) and Want (the girl). The Ghost warns: "Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom." This is Dickens\'s most explicit social message, aimed directly at the Victorian ruling class: if you ignore poverty and deny education, the consequences will destroy society.',
    ],
    keyMoments: [
      'The Ghost of Christmas Present surrounded by abundance',
      'The Cratchit family\'s Christmas dinner',
      'Tiny Tim\'s "God bless Us, Every One!"',
      'The Ghost\'s warning about Tiny Tim\'s death',
      'Scrooge\'s own words thrown back at him',
      'The children Ignorance and Want beneath the Ghost\'s robe',
      'Fred\'s Christmas party and his refusal to give up on Scrooge',
    ],
    quotes: [
      {
        quote: '"Oh, a wonderful pudding! Bob Cratchit said, and calmly too, that he regarded it as the greatest success achieved by Mrs Cratchit since their marriage."',
        context: 'The Cratchit family celebrates their modest Christmas dinner.',
        analysis: 'The comedy and warmth of Bob\'s deadpan compliment disguises the family\'s real poverty. Their pudding is objectively tiny -- Dickens tells us it was "a small one for so large a family" -- but the Cratchits\' love and gratitude transform it into a triumph. Dickens uses this moment to argue that wealth is not the source of happiness; generosity of spirit is. The word "calmly" adds humour -- Bob is performing gravity to honour his wife\'s effort.',
        devices: ['Irony', 'Hyperbole', 'Pathos', 'Characterisation'],
      },
      {
        quote: '"God bless Us, Every One!"',
        context: 'Tiny Tim\'s words at the Christmas dinner.',
        analysis: 'The novella\'s most famous line is a prayer for universal blessing. "Every One" does not exclude -- it includes Scrooge, the poor, the rich, the cruel and the kind. Tiny Tim asks for grace without condition, embodying the selfless Christian charity that Dickens believes should define Christmas. The fact that this prayer comes from the poorest, most vulnerable character in the novella is Dickens\'s sharpest moral point: those with the least give the most.',
        devices: ['Exclamatory sentence', 'Universal prayer', 'Irony', 'Symbolism'],
      },
      {
        quote: '"If these shadows remain unaltered by the Future, the child will die."',
        context: 'The Ghost of Christmas Present warns Scrooge about Tiny Tim.',
        analysis: 'The conditional "if" is the most important word in this sentence. Tiny Tim\'s death is not a prophecy but a warning. The future can be changed -- but only if Scrooge (and by extension, society) chooses to act. "Shadows" suggests that what the ghost shows are possibilities, not certainties. Dickens places moral agency directly in the reader\'s hands: if children like Tiny Tim die, it is because we allow it.',
        devices: ['Conditional clause', 'Foreshadowing', 'Direct moral appeal'],
      },
      {
        quote: '"This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom."',
        context: 'The Ghost reveals two allegorical children hidden beneath his robe.',
        analysis: 'Dickens\'s most explicitly political passage. The children are allegorical -- they represent the consequences of society\'s neglect. "Yellow, meagre, ragged, scowling, wolfish" describes them in animal terms, showing how poverty dehumanises. The warning that Ignorance leads to "Doom" is aimed at the Victorian ruling class: if you deny the poor education and basic welfare, civilisation itself will be destroyed. This passage was directly inspired by Dickens\'s visit to the ragged schools and the 1843 child labour report.',
        devices: ['Allegory', 'Personification', 'Imperative', 'Political polemic'],
      },
      {
        quote: '"If he be like to die, he had better do it, and decrease the surplus population."',
        context: 'The Ghost throws Scrooge\'s own words from Stave One back at him.',
        analysis: 'This is one of the most powerful moments in the novella. Scrooge\'s earlier dismissal of the poor as "surplus population" was abstract and comfortable. Now, applied to Tiny Tim -- a named, loved, specific child -- the words become monstrous. Scrooge is "overcome with penitence and grief." Dickens\'s technique is to make the reader experience the same shock: abstract policies have human consequences. This is the moment Scrooge begins to feel genuine empathy.',
        devices: ['Repetition', 'Dramatic irony', 'Structural echo', 'Pathos'],
      },
    ],
    languageAnalysis: [
      {
        heading: 'Sensory overload and abundance',
        body: 'The opening of Stave Three overwhelms the reader with food imagery. Dickens describes "turkeys, geese, game, poultry, brawn, great joints of meat, sucking-pigs, long wreaths of sausages, mince-pies, plum-puddings, barrels of oysters, red-hot chestnuts, cherry-cheeked apples, juicy oranges, luscious pears, immense twelfth-cakes, and seething bowls of punch." This cornucopia is deliberate: the sheer quantity of food makes generosity feel overwhelming and irresistible. It contrasts sharply with Scrooge\'s cold, bare chambers.',
      },
      {
        heading: 'Warmth versus cold -- sustained motif',
        body: 'The warmth motif that runs through the novella reaches its peak in Stave Three. The Cratchit home is small and poorly furnished but radiates warmth through love and togetherness. The streets of London glow with firelight. Fred\'s party is full of laughter. Every scene of warmth is a scene of human connection; every scene of cold (Scrooge\'s chambers, his counting-house) is a scene of isolation. Dickens makes the metaphor physical and literal.',
      },
      {
        heading: 'The voice of the spirits',
        body: 'The Ghost of Christmas Present speaks with authority and moral weight. When it throws Scrooge\'s own words back at him, it uses Scrooge\'s exact phrasing -- "decrease the surplus population" -- but the changed context transforms the meaning. Repetition with altered context is one of Dickens\'s most powerful rhetorical techniques in this novella. Words that sounded merely callous in Stave One now sound murderous in Stave Three.',
      },
      {
        heading: 'Allegory and political purpose',
        body: 'The children Ignorance and Want are the most overtly allegorical moment in the novella. Their names are capitalised as abstract nouns; they are described as "wretched, abject, frightful, hideous, miserable." Dickens breaks from the narrative to deliver a direct political warning to his readership. The passage reads almost like a pamphlet -- which is fitting, because Dickens originally planned to write a political pamphlet before deciding a story would be more persuasive.',
      },
    ],
    thematicSignificance: 'Stave Three is the emotional and political heart of the novella. The Cratchit dinner proves that happiness comes from love, not wealth. Tiny Tim\'s potential death makes the consequences of Scrooge\'s indifference personal and real. The children Ignorance and Want turn the story from individual moral fable into social critique. Most crucially, Scrooge begins to feel empathy in this stave -- he asks about Tiny Tim\'s future with genuine concern. The Ghost of Christmas Present teaches through witnessing: Scrooge sees how others live and begins to understand his connection to them.',
  },
  {
    number: 4,
    title: 'The Last of the Spirits',
    subtitle: 'Fear of the future -- death as the final motivation for change',
    summary: [
      'The Ghost of Christmas Yet to Come is the most terrifying of the three spirits. It is described as a "solemn Phantom, draped and hooded" in a deep black garment that conceals everything except one outstretched hand. It does not speak a single word throughout the entire stave. Its silence makes it more frightening than either of the previous ghosts -- it offers no comfort, no explanation, and no reassurance. The phantom represents death itself, and its silence reflects the absolute finality of death.',
      'The phantom takes Scrooge to the City of London, where a group of businessmen discuss a recent death with callous indifference. "It\'s likely to be a very cheap funeral," one says, "for upon my life I don\'t know of anybody to go to it." No one mourns the dead man; no one cares. The conversation is chillingly casual -- these men, who are Scrooge\'s peers, treat death as a minor inconvenience. Scrooge does not yet realise they are discussing him.',
      'In a darker scene, Scrooge is taken to Old Joe\'s shop, where a laundress, a charwoman, and an undertaker\'s assistant are selling items stolen from a dead man\'s house. The charwoman has taken his bed curtains -- "he wasn\'t likely to catch cold without \'em" -- and even the shirt he was to be buried in. This grotesque comedy reveals the total absence of love or respect for the dead man. His possessions, accumulated through a lifetime of greed, are picked over by thieves before his body is even cold.',
      'Scrooge begs to see "some tenderness connected with a death" and is shown the Cratchit family mourning Tiny Tim. The contrast is devastating. Where the unknown dead man is robbed and mocked, Tiny Tim is genuinely mourned. Bob can barely speak: "My little, little child! My little child!" The repetition of "little" is heartbreaking in its simplicity. Dickens uses the juxtaposition to prove his point: a life of love is remembered with grief; a life of greed is remembered with contempt.',
      'Finally, Scrooge is led to a churchyard and shown a gravestone bearing his own name. The revelation is the stave\'s climax. Scrooge clings to the phantom\'s robe and makes his desperate vow: "I will honour Christmas in my heart, and try to keep it all the year. I will live in the Past, the Present, and the Future. The Spirits of all Three shall strive within me." The word "try" is significant -- it acknowledges that change requires ongoing effort, not a single dramatic gesture.',
    ],
    keyMoments: [
      'The silent, hooded phantom -- death personified',
      'Businessmen discussing the dead man\'s funeral with indifference',
      'Thieves selling the dead man\'s possessions, including his bed curtains and burial shirt',
      'The Cratchit family mourning Tiny Tim',
      'Bob\'s grief: "My little, little child!"',
      'Scrooge\'s discovery of his own gravestone',
      'Scrooge\'s vow to change: "I will honour Christmas in my heart"',
    ],
    quotes: [
      {
        quote: '"Are these the shadows of the things that Will be, or are they shadows of the things that May be, only?"',
        context: 'Scrooge pleads with the Ghost of Christmas Yet to Come.',
        analysis: 'This question is the philosophical pivot of the entire novella. Scrooge is asking whether the future is fixed or can be changed. The distinction between "Will be" (definite) and "May be" (conditional) is crucial. The novella\'s moral depends on the answer being "may be" -- free will exists, and redemption is always possible. Dickens uses this moment to reject fatalism and assert that every person has the agency to choose a better path.',
        devices: ['Rhetorical question', 'Modal verbs', 'Philosophical argument'],
      },
      {
        quote: '"I will honour Christmas in my heart, and try to keep it all the year."',
        context: 'Scrooge\'s vow at the gravestone.',
        analysis: 'Scrooge\'s promise is not just about the festive season but about maintaining compassion as a permanent way of life. "Honour" carries connotations of reverence and duty. "Try" is the most important word: it adds humility and realism. Scrooge does not claim he will be perfect -- he commits to the effort. "All the year" extends Christmas from a single day to a continuous moral principle. This line answers the question posed by Fred in Stave One about what Christmas really means.',
        devices: ['Promise/vow', 'Metonymy', 'Structural echo'],
      },
      {
        quote: '"The case of this unhappy man might be my own. My life tends that way, now."',
        context: 'Scrooge reflects on the dead man whose possessions are being sold.',
        analysis: 'Scrooge begins to connect the vision to himself, though he has not yet seen the gravestone. "Tends that way" is a careful choice -- his life is moving in this direction but has not yet arrived. There is still time. The word "unhappy" is Scrooge\'s own judgement: he now recognises that a life of greed leads not to security but to misery. This moment of self-awareness is the necessary precursor to his transformation.',
        devices: ['Self-recognition', 'Dramatic irony', 'Foreshadowing'],
      },
      {
        quote: '"Spirit! hear me! I am not the man I was!"',
        context: 'Scrooge pleads at his own gravestone.',
        analysis: 'The exclamatory urgency shows Scrooge\'s desperation. "I am not the man I was" claims transformation in the present tense -- he has already begun to change. The journey through past, present, and future has worked. Scrooge no longer identifies with his former self; he has separated the person he was from the person he chooses to be. The direct address to the silent spirit creates a powerful one-sided dialogue that emphasises Scrooge\'s isolation -- he is pleading with something that cannot or will not answer.',
        devices: ['Exclamatory sentence', 'Present tense', 'Direct address', 'Irony'],
      },
      {
        quote: '"My little, little child! My little child!"',
        context: 'Bob Cratchit mourns Tiny Tim.',
        analysis: 'The heartbreaking simplicity of this line is its power. The repetition of "little" -- four times in two short phrases -- conveys the overwhelming grief of a parent losing a child. There are no elaborate words, no literary flourishes; Bob\'s grief is too raw for eloquence. Dickens uses simple language to create maximum emotional impact. The diminutive "little" also reminds the reader of how small and vulnerable Tiny Tim was, making society\'s failure to protect him feel even more criminal.',
        devices: ['Repetition', 'Pathos', 'Simple diction', 'Diminutive'],
      },
    ],
    languageAnalysis: [
      {
        heading: 'Silence and the unsaid',
        body: 'The Ghost of Christmas Yet to Come never speaks. This silence is the most unsettling feature of Stave Four. The previous ghosts engaged Scrooge in conversation, explained, challenged, even joked. This phantom only points. The silence forces Scrooge -- and the reader -- to draw their own conclusions. It also reflects the nature of death: there is nothing to say, no appeal, no negotiation. The future is the consequence of choices already made, and it speaks for itself.',
      },
      {
        heading: 'Dark comedy and grotesque',
        body: 'The scene at Old Joe\'s shop uses dark comedy to horrifying effect. The thieves joke and barter over a dead man\'s possessions with the same commercial language that Scrooge himself uses. "If he wanted to keep \'em after he was dead, a wicked old screw... why wasn\'t he natural in his lifetime?" The charwoman\'s logic is perversely reasonable, and the humour makes the horror worse. Dickens shows that greed, taken to its logical conclusion, strips away all human dignity.',
      },
      {
        heading: 'Juxtaposition as moral argument',
        body: 'The stave\'s structure is a sustained juxtaposition: the unmourned dead man versus the deeply mourned Tiny Tim. Scrooge explicitly asks to see "tenderness connected with a death," and the spirit obliges -- but the tenderness belongs to the poor family, not to the rich man. The contrast proves that a life of love creates a legacy of grief and memory, while a life of greed creates nothing but contempt. Dickens makes the moral argument through structure rather than statement.',
      },
      {
        heading: 'The gravestone as symbol',
        body: 'The gravestone bearing Scrooge\'s name is the novella\'s most potent symbol. It represents finality -- once dead, Scrooge cannot change, cannot apologise, cannot undo his cruelty. The stone is cold, hard, and permanent -- like the Scrooge of Stave One. But unlike stone, Scrooge is still alive, and living means the possibility of change. The gravestone functions as both threat and motivator: it shows Scrooge what will happen if he does not change, and its very horror drives him to transform.',
      },
    ],
    thematicSignificance: 'Stave Four completes the three-stage moral education. The Ghost of Christmas Past aroused Scrooge\'s regret. The Ghost of Christmas Present aroused his empathy. The Ghost of Christmas Yet to Come arouses his fear. Fear is the final and most powerful motivator -- Scrooge is terrified not just of dying, but of dying unmourned, unloved, and unremembered. The stave proves Dickens\'s central argument: it is never too late to change, but time is limited, and the consequences of inaction are permanent.',
  },
  {
    number: 5,
    title: 'The End of It',
    subtitle: 'Transformation complete -- joy, generosity, and a new life',
    summary: [
      'Scrooge wakes on Christmas morning in his own bed, alive and overflowing with joy. The transformation is immediate and total. He laughs -- something the old Scrooge never did. "I don\'t know anything. I\'m quite a baby. Never mind. I don\'t care. I\'d rather be a baby." The willingness to be ignorant, to be vulnerable, to begin again is the opposite of Scrooge\'s former need for control and certainty. He has been reborn.',
      'Scrooge\'s first act is characteristically excessive: he sends the biggest turkey in the poulterer\'s shop to the Cratchit family, anonymously. He is "chuckling" and delighted by the boy\'s confusion at the enormous bird. This generosity is spontaneous and joyful -- Scrooge gives not out of guilt or duty but out of genuine pleasure in making others happy. The turkey is a direct contrast to the Cratchits\' tiny goose in Stave Three.',
      'He meets the charity collector from Stave One and whispers a donation so large that the man nearly faints. He attends Fred\'s dinner party, where he is welcomed with warmth and forgiveness. He plays games, tells jokes, and is perfectly at home -- the isolation of the past has been completely shattered. Dickens shows redemption not as a solemn duty but as a source of enormous fun.',
      'On Boxing Day, Scrooge arrives at work early and pretends to scold Bob Cratchit for being late, before revealing his true intention: "I\'ll raise your salary, and endeavour to assist your struggling family." This scene is both comic and deeply satisfying. Scrooge uses the language of business -- "salary," "endeavour," "assist" -- but fills it with genuine compassion. The word "struggling" is crucial: Scrooge now sees Bob\'s family not as an abstract category ("the poor") but as specific people with specific needs.',
      'Dickens closes with a summary of Scrooge\'s lasting transformation. He became "as good a friend, as good a master, and as good a man, as the good old city knew." The triple structure -- friend, master, man -- shows that the change is complete in every sphere of life: personal, professional, and moral. Tiny Tim does not die. And Dickens gives the final word to Tim: "God bless Us, Every One!" The novella ends as it must -- with a blessing that excludes no one.',
    ],
    keyMoments: [
      'Scrooge wakes alive and joyful -- "I\'m quite a baby"',
      'The enormous turkey sent anonymously to the Cratchits',
      'The huge donation to the charity collector',
      'Fred\'s dinner party -- Scrooge welcomed and forgiven',
      'Scrooge raises Bob\'s salary: "I\'ll raise your salary"',
      'The narrator\'s summary: "as good a friend, as good a master, and as good a man"',
      'Tiny Tim survives -- "God bless Us, Every One!"',
    ],
    quotes: [
      {
        quote: '"I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy."',
        context: 'Scrooge wakes on Christmas morning, transformed.',
        analysis: 'The triple simile mirrors the triple structure of the ghostly visits. Each comparison undoes one quality of the old Scrooge: "light" replaces heaviness of spirit, "happy" replaces misery, "merry" replaces hostility to joy. The choice of "school-boy" is particularly resonant -- it echoes the lonely child of Stave Two, now reclaimed as a source of joy rather than pain. The anaphoric "I am" repeated three times asserts a new identity with confidence and delight.',
        devices: ['Triple structure', 'Simile', 'Anaphora', 'Structural echo'],
      },
      {
        quote: '"I don\'t know anything. I\'m quite a baby. Never mind. I don\'t care. I\'d rather be a baby."',
        context: 'Scrooge laughing and talking to himself on Christmas morning.',
        analysis: 'Scrooge embraces ignorance and vulnerability -- the exact opposite of his former need for control. "I\'m quite a baby" suggests spiritual rebirth: he is starting again, with a child\'s openness and wonder. The short, breathless sentences reflect his giddy excitement. The old Scrooge would never admit to not knowing; the new Scrooge finds freedom in it. This is Dickens\'s portrait of genuine joy -- unselfconscious, slightly ridiculous, and completely liberated.',
        devices: ['Short sentences', 'Metaphor (rebirth)', 'Characterisation', 'Humour'],
      },
      {
        quote: '"He became as good a friend, as good a master, and as good a man, as the good old city knew."',
        context: 'The narrator summarises Scrooge\'s lasting transformation.',
        analysis: 'The triple structure -- friend, master, man -- proves that Scrooge\'s change is total: personal relationships (friend), professional conduct (master), and moral character (man). The fourfold repetition of "good" reinforces the completeness of the transformation. The phrase "as the good old city knew" connects Scrooge\'s redemption to the wider community -- he is not just privately changed but publicly recognised. The rhythm and balance of the sentence give it the weight of a definitive verdict.',
        devices: ['Triple structure', 'Repetition', 'Parallelism', 'Summary narrative'],
      },
      {
        quote: '"I\'ll raise your salary, and endeavour to assist your struggling family."',
        context: 'Scrooge reveals his true intentions to Bob Cratchit.',
        analysis: 'Scrooge translates his moral transformation into practical action. "Raise your salary" addresses the economic injustice highlighted throughout the novella. "Endeavour" shows effort and commitment. "Struggling" is the key word -- Scrooge now sees Bob\'s family as real people with real difficulties, not as abstractions. This is the moment where personal redemption becomes social reform. Dickens insists that spiritual change must produce material change for those who suffer.',
        devices: ['Direct speech', 'Social commentary', 'Character development'],
      },
      {
        quote: '"He had no further intercourse with Spirits, but lived upon the Total Abstinence Principle, ever afterwards."',
        context: 'The narrator\'s closing observation.',
        analysis: 'A rare moment of Dickensian humour at the novella\'s close. The pun on "Spirits" (ghosts and alcohol) lightens the tone and reassures the reader that Scrooge\'s new life is joyful, not grimly penitent. "Total Abstinence" was a phrase associated with the temperance movement, adding another layer of wordplay. The joke signals that Scrooge\'s transformation is complete -- he can face the future without supernatural intervention. He has internalised the lesson and no longer needs the ghosts.',
        devices: ['Pun', 'Humour', 'Narrative closure'],
      },
    ],
    languageAnalysis: [
      {
        heading: 'Pace, rhythm, and breathless joy',
        body: 'The language of Stave Five is fast, breathless, and joyful. Short sentences pile up: "He dressed himself all in his best, and at last got out into the streets." Exclamation marks multiply. Scrooge\'s speech is giddy and fragmented. The pace contrasts sharply with the slow, heavy dread of Stave Four. Dickens uses rhythm to make the reader feel Scrooge\'s liberation -- the prose itself seems lighter and faster, as if it has been freed from a weight.',
      },
      {
        heading: 'Comedy and humour',
        body: 'Stave Five is the most comic section of the novella. Scrooge laughs at himself, plays tricks on Bob, and delights in the boy\'s confusion about the turkey. The humour is essential: it proves that Scrooge\'s transformation is not a grim duty but a source of genuine pleasure. Dickens understands that goodness must be enjoyable to be sustainable. The comedy also provides emotional relief after the darkness of Stave Four.',
      },
      {
        heading: 'Action and generosity as language',
        body: 'In Stave Five, Scrooge speaks primarily through actions rather than words. He sends the turkey. He donates money. He attends the dinner. He raises Bob\'s salary. Dickens shifts from telling us Scrooge has changed to showing us through concrete acts of generosity. This is a deliberate narrative technique: after four staves of internal emotional journey, the final stave is external and practical. Spiritual transformation must produce real-world results.',
      },
      {
        heading: 'Circular structure and narrative closure',
        body: 'Stave Five completes every narrative thread opened in Stave One. The charity collectors receive their donation. Fred receives his uncle. Bob receives his raise. Tiny Tim is saved. The novella\'s structure is circular: it begins with Scrooge\'s cold isolation and ends with his warm integration into society. The repetition of Tiny Tim\'s "God bless Us, Every One!" bookends the story with a prayer for universal generosity. The final word is "One" -- suggesting unity, wholeness, and the interconnection of all people.',
      },
    ],
    thematicSignificance: 'Stave Five is the proof that redemption works. Dickens shows Scrooge\'s transformation not as a single dramatic moment but as a series of joyful, practical acts of generosity. Each act addresses a specific failure from earlier in the novella: the turkey for the Cratchits\' poor dinner, the donation for the charity collectors, the dinner with Fred, the raise for Bob. The message is that change is not just possible but delightful -- goodness is more enjoyable than selfishness. And by confirming that Tiny Tim does not die, Dickens rewards both Scrooge and the reader with hope.',
  },
]

/* ── Page ───────────────────────────────────────────────────────────── */

export default async function StavesPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "A Christmas Carol", url: "https://theenglishhub.app/revision/texts/a-christmas-carol" },
          { name: "Stave-by-Stave Analysis", url: "https://theenglishhub.app/revision/texts/a-christmas-carol/staves" },
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/a-christmas-carol" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to A Christmas Carol
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-blue-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A Christmas Carol -- All Five Staves
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            In-depth analysis of every stave: plot, language, key quotations and
            exam-ready commentary
          </p>
          <p className="mt-4 max-w-2xl text-body-sm text-muted-foreground">
            Dickens called the chapters of his novella &ldquo;staves&rdquo; -- a
            musical term meaning the lines on which notes are written. This
            choice reflects the structure of a carol: each stave builds on the
            last to form a harmonious whole, with a message of redemption and
            joy.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Jump to a Stave
          </h2>
        </div>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {staves.map((s) => (
                <a
                  key={s.number}
                  href={`#stave-${s.number}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20 hover:bg-muted/40"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {s.number}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground group-hover:text-foreground/90 truncate">
                      {s.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {s.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Each stave */}
      {staves.map((stave) => (
        <section
          key={stave.number}
          id={`stave-${stave.number}`}
          className="scroll-mt-8 space-y-6"
        >
          {/* Stave header */}
          <div className="flex items-center gap-4 border-b border-border/60 pb-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
              {stave.number}
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">
                Stave {stave.number}: {stave.title}
              </h2>
              <p className="text-body-sm text-muted-foreground">
                {stave.subtitle}
              </p>
            </div>
          </div>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <BookOpen className="size-4 text-blue-400" />
                Summary and Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-body-sm text-muted-foreground">
              {stave.summary.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </CardContent>
          </Card>

          {/* Key moments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Flame className="size-4 text-clay-600" />
                Key Moments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                {stave.keyMoments.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {m}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Key quotes with analysis */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Quote className="size-4 text-violet-400" />
              <h3 className="text-heading-md font-heading text-foreground">
                Key Quotations
              </h3>
            </div>
            <div className="grid gap-4">
              {stave.quotes.map((q, i) => (
                <Card key={i}>
                  <CardContent className="space-y-3 p-5">
                    <p className="text-body-md font-medium italic text-foreground">
                      {q.quote}
                    </p>
                    <p className="text-xs text-primary">{q.context}</p>
                    <p className="text-body-sm text-muted-foreground">
                      {q.analysis}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {q.devices.map((d) => (
                        <span
                          key={d}
                          className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Language analysis */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="size-4 text-clay-600" />
              <h3 className="text-heading-md font-heading text-foreground">
                Language Analysis
              </h3>
            </div>
            <Card>
              <CardContent className="space-y-5 p-6 sm:p-8 text-body-sm text-muted-foreground">
                {stave.languageAnalysis.map((la) => (
                  <div key={la.heading}>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">
                      {la.heading}
                    </h4>
                    <p>{la.body}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Thematic significance */}
          <Card className="bg-primary/[0.03] border-primary/10">
            <CardContent className="p-5 sm:p-6">
              <h4 className="mb-2 text-sm font-semibold text-foreground flex items-center gap-2">
                <Ghost className="size-4 text-primary/70" />
                Thematic Significance
              </h4>
              <p className="text-body-sm text-muted-foreground">
                {stave.thematicSignificance}
              </p>
            </CardContent>
          </Card>
        </section>
      ))}

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        A Christmas Carol by Charles Dickens (1843) is in the public domain.
        Quotations are reproduced freely as the text is no longer subject to
        copyright.
      </p>
    </div>
  )
}
