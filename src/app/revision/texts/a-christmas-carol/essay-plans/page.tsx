'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Lightbulb,
  Sparkles,
  Quote,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

/* ── Essay plan data ─────────────────────────────────────────────────── */

type Paragraph = {
  point: string
  evidence: string
  analysis: string
}

type EssayPlan = {
  number: number
  question: string
  type: string
  thesisStatement: string
  introduction: string
  paragraphs: Paragraph[]
  conclusion: string
  examTip: string
}

const essayPlans: EssayPlan[] = [
  {
    number: 1,
    question:
      'How does Dickens present the character of Scrooge\'s transformation across the novella?',
    type: 'Character',
    thesisStatement:
      'Dickens presents Scrooge\'s transformation as a structured moral education -- moving from regret, through empathy, to fear -- to argue that even the most hardened hearts can change when forced to confront the truth about themselves and their impact on others.',
    introduction:
      'Open by establishing that A Christmas Carol is fundamentally a story about whether a person can change. Note that Dickens structures the transformation through three supernatural visitations, each targeting a different emotional response. State your thesis: Scrooge\'s change is not sudden but carefully staged -- past produces regret, present produces empathy, and future produces the fear that finally breaks through his defences.',
    paragraphs: [
      {
        point:
          'In Stave 1, Dickens establishes Scrooge as seemingly beyond redemption through aggressive characterisation, making his eventual transformation all the more powerful.',
        evidence:
          '"A squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!" Seven consecutive adjectives define Scrooge entirely by what he takes. His dismissal of the poor as "surplus population" echoes Malthusian economics.',
        analysis:
          'The listing technique overwhelms the reader with evidence of cruelty. The progressive participles create a grinding, mechanical rhythm that mirrors Scrooge\'s dehumanised approach to life. By making Scrooge so extreme in Stave 1, Dickens makes his later transformation dramatic and surprising, while also targeting the real-world attitudes of Victorian capitalists.',
      },
      {
        point:
          'The Ghost of Christmas Past begins Scrooge\'s transformation by generating self-awareness through painful memories, showing the reader (and Scrooge) that his cruelty has a history.',
        evidence:
          '"A solitary child, neglected by his friends, is left there still." Scrooge weeps at his younger self. He watches Belle leave because "another idol has displaced me... a golden one." He defends Fezziwig\'s generosity and admits he wants to speak to his clerk.',
        analysis:
          'Dickens uses the Past to generate sympathy: Scrooge was not born cruel but was made cruel by neglect and loss. Belle\'s biblical language ("idol," "golden") frames greed as spiritual corruption. Scrooge\'s defence of Fezziwig proves his capacity for empathy is buried, not destroyed. The Past creates the psychological foundation for change.',
      },
      {
        point:
          'The Ghost of Christmas Present transforms Scrooge\'s abstract indifference into personal empathy by forcing him to witness the human consequences of his selfishness.',
        evidence:
          'Scrooge asks about Tiny Tim "with an interest he had never felt before." The Ghost throws his own words back: "If he be like to die, he had better do it, and decrease the surplus population." The children Ignorance and Want reveal society\'s hidden suffering.',
        analysis:
          'Dickens makes the transformation hinge on empathy -- feeling FOR another person. When Scrooge\'s abstract economic language is applied to a specific child, it becomes monstrous. The structural echo of "surplus population" is devastating: words that sounded merely callous in Stave 1 become criminal in Stave 3. Scrooge begins to connect his choices to real human suffering.',
      },
    ],
    conclusion:
      'Conclude by discussing Stave 5 as the proof that transformation works. Scrooge\'s change is expressed through action, not just feeling: the turkey, the donation, the raise. Link to Dickens\'s purpose: he wanted his wealthy readers to believe that they, too, could change -- and must. The triple structure (friend, master, man) shows change across every sphere of life.',
    examTip:
      'Do not simply narrate Scrooge\'s journey stave by stave. Focus on HOW Dickens presents the transformation -- through structure (three stages), language (shifting register from cold to warm), and the deliberate contrast between Stave 1 and Stave 5.',
  },
  {
    number: 2,
    question:
      'How does Dickens use the ghosts to present his message about social responsibility?',
    type: 'Character',
    thesisStatement:
      'Dickens uses the three ghosts as a structured moral argument -- each spirit forcing Scrooge (and the reader) to confront a different dimension of social responsibility: the consequences of past indifference, present-day suffering, and the future cost of inaction.',
    introduction:
      'Open by noting that each ghost represents a different approach to persuasion. The Ghost of Christmas Past uses memory and regret. The Ghost of Christmas Present uses confrontation with reality. The Ghost of Christmas Yet to Come uses fear. State your thesis: the ghosts are not random supernatural visitors but a carefully designed argumentative structure.',
    paragraphs: [
      {
        point:
          'The Ghost of Christmas Past shows Scrooge models of social responsibility (Fezziwig) and the personal cost of rejecting them (Belle), establishing what he could and should have been.',
        evidence:
          '"He has the power to render us happy or unhappy; to make our service light or burdensome." Scrooge admits that employers have moral power. He then says, "I should like to be able to say a word or two to my clerk just now."',
        analysis:
          'Dickens uses Fezziwig as a positive model of social responsibility -- an employer who invests in his workers\' happiness with minimal cost. Scrooge\'s instinctive recognition that this matters proves the principle of social responsibility is self-evident. The Past Ghost teaches through comparison: this is what good looks like, and you once knew it.',
      },
      {
        point:
          'The Ghost of Christmas Present confronts Scrooge with the reality of poverty he has been ignoring, including Dickens\'s most explicitly political image: the children Ignorance and Want.',
        evidence:
          '"This boy is Ignorance. This girl is Want. Beware them both... but most of all beware this boy, for on his brow I see that written which is Doom." Also: "If these shadows remain unaltered by the Future, the child will die."',
        analysis:
          'Dickens shifts from personal moral education to political polemic. Ignorance and Want are allegorical -- the capitalised names, the abstract nouns made flesh. The warning about "Doom" targets the Victorian ruling class directly. The conditional "if" about Tiny Tim places responsibility on Scrooge and, by extension, on Dickens\'s readers. This Ghost teaches through confrontation.',
      },
      {
        point:
          'The Ghost of Christmas Yet to Come uses the fear of death -- specifically, of dying unmourned -- to complete the argument: social irresponsibility leads to spiritual death.',
        evidence:
          'The dead man\'s possessions are stolen. No one mourns him. Scrooge sees his own gravestone and pleads: "I will honour Christmas in my heart, and try to keep it all the year." In contrast, Tiny Tim is mourned with devastating love.',
        analysis:
          'The silence of this Ghost is its most powerful feature -- death offers no negotiation. Dickens juxtaposes two deaths: the greedy man (contempt) vs Tiny Tim (love). This is the moral argument made visceral. A life of social irresponsibility produces nothing but contempt; a life of love produces genuine grief. Fear of this contrast completes Scrooge\'s conversion.',
      },
    ],
    conclusion:
      'Conclude by linking all three ghosts to Dickens\'s wider social purpose. The novella was originally planned as a political pamphlet. Dickens chose fiction because he believed stories could change hearts more effectively than arguments. The three ghosts represent three strategies of persuasion -- memory, empathy, and fear -- combined into a single, irresistible moral case.',
    examTip:
      'Compare the three ghosts\' methods explicitly. Use terms like "juxtaposition," "structural echo," and "allegory." For top marks, discuss WHY Dickens ordered them this way -- past first (understanding), present second (empathy), future last (fear).',
  },
  {
    number: 3,
    question:
      'How does Dickens present the theme of poverty in A Christmas Carol?',
    type: 'Theme',
    thesisStatement:
      'Dickens presents poverty not as an abstract social problem but as a lived, specific, emotionally devastating reality -- forcing his middle-class readers to see the poor as individual human beings rather than economic statistics.',
    introduction:
      'Open by establishing the 1843 context: the Poor Law, workhouses, Malthusian economics. Note that Dickens originally planned to write a political pamphlet but chose fiction instead. State your thesis: Dickens\'s method is to make the abstract personal -- to transform "the poor" into the Cratchit family.',
    paragraphs: [
      {
        point:
          'In Stave 1, Dickens presents Scrooge\'s attitude to poverty as representative of the Victorian establishment, using his language to expose the cruelty of utilitarian economics.',
        evidence:
          '"Are there no prisons? Are there no workhouses?" and "If they would rather die, they had better do it, and decrease the surplus population." Scrooge uses the language of policy to dismiss real suffering.',
        analysis:
          'Dickens gives Scrooge Malthusian arguments -- not because Scrooge has studied Malthus, but because these attitudes were so widespread they had become casual. The rhetorical questions are designed to shut down conversation. By putting these words in the mouth of a clearly unsympathetic character, Dickens forces the reader to hear how cruel they sound.',
      },
      {
        point:
          'In Stave 3, Dickens presents the Cratchit family\'s poverty with warmth and dignity, showing that the poor are morally superior to the rich.',
        evidence:
          'The Cratchit dinner -- the small goose, the tiny pudding, Bob\'s fifteen shillings a week. Despite everything, Bob calls Scrooge "the Founder of the Feast" and Tiny Tim says "God bless Us, Every One!" The family\'s love transforms poverty into abundance.',
        analysis:
          'Dickens refuses to present the poor as pitiful or degraded. The Cratchits are joyful, generous, and dignified. Their pudding is small, but "nobody said or thought it was at all a small pudding." Dickens argues that moral wealth (love, gratitude) is more valuable than financial wealth. This subverts the Victorian assumption that poverty indicates moral failure.',
      },
      {
        point:
          'Dickens\'s most explicitly political statement about poverty is the allegory of Ignorance and Want, which turns social critique into supernatural warning.',
        evidence:
          '"This boy is Ignorance. This girl is Want... most of all beware this boy, for on his brow I see that written which is Doom." The children are "yellow, meagre, ragged, scowling, wolfish."',
        analysis:
          'Dickens breaks from narrative into allegory and polemic. The children are dehumanised by poverty -- described in animal terms ("wolfish"). Their names are capitalised as abstract nouns, making them represent all neglected children. "Doom" is a warning to the ruling class: ignore poverty, and society will collapse. This passage was directly inspired by Dickens\'s visit to the ragged schools.',
      },
    ],
    conclusion:
      'Conclude by noting that Scrooge\'s transformation in Stave 5 offers a solution: the wealthy must take personal responsibility. The raised salary, the donation, the turkey are all practical acts. Dickens does not call for revolution but for reform -- individual moral change producing collective social improvement. His method is emotional persuasion, not economic argument.',
    examTip:
      'For top marks, embed context throughout -- don\'t save it for a separate paragraph. Link Scrooge\'s language to Malthus, the Cratchits to the workhouse system, and Ignorance and Want to the 1843 child labour report.',
  },
  {
    number: 4,
    question:
      'How does Dickens present the importance of family in A Christmas Carol?',
    type: 'Theme',
    thesisStatement:
      'Dickens presents family as both the source of the novella\'s warmth and the measure of its moral argument: every scene of joy is a scene of togetherness, and every scene of misery is a scene of isolation.',
    introduction:
      'Open by noting the systematic contrast between isolation and togetherness across the five staves. State your thesis: family is not merely a theme but the structural principle of the novella -- Scrooge\'s journey is from rejection of family to embrace of it.',
    paragraphs: [
      {
        point:
          'Dickens establishes Scrooge\'s isolation in Stave 1 and then reveals its roots in Stave 2, showing that his rejection of family is both symptom and cause of his moral failure.',
        evidence:
          'Stave 1: Scrooge rejects Fred\'s dinner invitation. "Darkness is cheap, and Scrooge liked it." Stave 2: "A solitary child, neglected by his friends, is left there still." Fan\'s arrival provides the only warmth. Belle\'s departure removes the last.',
        analysis:
          'Dickens creates a chronology of isolation: lonely child, abandoned by his father, loved briefly by Fan and Belle, then alone by choice. The lonely schoolboy is the psychological key -- Scrooge\'s adult cruelty is rooted in childhood abandonment. By showing the cause, Dickens makes the reader sympathise with Scrooge even while condemning his behaviour.',
      },
      {
        point:
          'The Cratchit family Christmas dinner is the emotional centrepiece of the novella, presenting family love as the most valuable thing in the world.',
        evidence:
          'The Cratchits\' tiny dinner becomes a feast through love. Bob carries Tiny Tim on his shoulder. Mrs Cratchit serves the pudding to universal delight. Even the toast to Scrooge shows generosity.',
        analysis:
          'Dickens describes the Cratchits with warmth and affection: the family is not idealised but specific -- Martha arrives late, Peter is proud of his new shirt, the youngest children suck their thumbs. The specificity makes them feel real. Their poverty does not diminish their joy; if anything, it intensifies it. Dickens argues that family love is independent of wealth.',
      },
      {
        point:
          'In Stave 4, Dickens uses the contrast between two mourning scenes to prove that family connection is the only legacy that matters.',
        evidence:
          'The dead man (Scrooge) is unmourned -- his possessions stolen, his body unattended. Tiny Tim is mourned with real grief: "My little, little child!" The Cratchit family holds together through their loss.',
        analysis:
          'The juxtaposition is devastating. A life without family produces contempt; a life within family produces love even in death. Bob\'s grief is expressed in heartbreakingly simple language -- repetition of "little" rather than elaborate rhetoric. Dickens argues that human connection is the only thing that survives death.',
      },
    ],
    conclusion:
      'Conclude with Stave 5: Scrooge\'s redemption is marked by his return to family. He attends Fred\'s dinner. He becomes "a second father" to Tiny Tim. The novella\'s structure is circular: from rejection of family (Stave 1) to embrace of family (Stave 5). Dickens\'s message is that isolation is a choice, and it can be un-chosen.',
    examTip:
      'Map the isolation/family contrast systematically across all five staves. The best essays will discuss how Dickens uses STRUCTURE (the stave-by-stave journey) as well as language and characterisation.',
  },
  {
    number: 5,
    question:
      'How does Dickens use structure in A Christmas Carol to convey his message?',
    type: 'Writer\'s Methods',
    thesisStatement:
      'Dickens structures the novella as a three-stage moral education -- past, present, future -- framed by an opening that establishes the problem and a conclusion that proves the solution, creating a narrative arc that mirrors the structure of a moral argument.',
    introduction:
      'Open by noting that Dickens called his chapters "staves" -- a musical term. The novella is structured like a carol: five movements building to a harmonious conclusion. State your thesis: the structure IS the message -- the progression from past through present to future mirrors the process of moral awakening.',
    paragraphs: [
      {
        point:
          'The five-stave structure creates a deliberate narrative arc: problem (Stave 1), three stages of education (Staves 2-4), and resolution (Stave 5), mirroring the structure of classical rhetoric.',
        evidence:
          'Stave 1 establishes every conflict. Staves 2-4 each address a different temporal perspective. Stave 5 resolves every thread opened in Stave 1: the charity collectors, Fred, Bob, and Tiny Tim all receive their resolution.',
        analysis:
          'The circular structure reinforces Dickens\'s argument about change. Every problem introduced in Stave 1 is solved in Stave 5: the rejected invitation is accepted, the denied donation is given, the withheld salary is raised. This structural completeness gives the reader satisfaction and makes the moral case feel watertight. Dickens leaves no loose ends because his argument demands total transformation.',
      },
      {
        point:
          'Dickens uses structural echoes -- repeated words and situations across the staves -- to create irony and measure Scrooge\'s transformation.',
        evidence:
          'Scrooge\'s "decrease the surplus population" in Stave 1 is thrown back at him in Stave 3 by the Ghost. The charity collectors appear in Stave 1 (rejected) and Stave 5 (embraced). Fred\'s invitation is refused in Stave 1 and accepted in Stave 5.',
        analysis:
          'These structural echoes create dramatic irony and track Scrooge\'s moral progress. The "surplus population" echo is the most powerful: the same words, in a different context, produce a completely different emotional response. Dickens shows that meaning depends on empathy -- Scrooge\'s words change not because the words change, but because he now understands what they mean.',
      },
      {
        point:
          'The contrast in pace and tone between Stave 4 (slow, dark, silent) and Stave 5 (fast, bright, joyful) creates a structural emotional release that embodies Scrooge\'s transformation.',
        evidence:
          'Stave 4: the Ghost is silent, the scenes are grim, the pace is heavy. Stave 5: "I am as light as a feather, I am as happy as an angel." Short, breathless sentences. Exclamation marks multiply. The prose itself feels lighter.',
        analysis:
          'Dickens uses the contrast between adjacent staves to make the reader FEEL the transformation physically. The heavy dread of Stave 4 makes the giddy joy of Stave 5 feel earned and exhilarating. This structural technique ensures the reader experiences the emotional arc, not just observes it. The novella\'s form mirrors its content: structure enacts meaning.',
      },
    ],
    conclusion:
      'Conclude by connecting structure to Dickens\'s purpose. The five-stave format, the musical terminology, the circular narrative, and the structural echoes all serve a single goal: to make the argument for moral change as persuasive as possible. Dickens did not choose this structure accidentally -- every element is designed to move the reader from recognition of a problem to belief in a solution.',
    examTip:
      'Writer\'s methods questions reward technical vocabulary. Use terms like "structural echo," "circular narrative," "juxtaposition of pace," "temporal progression," and "narrative arc." Always connect structural choices to Dickens\'s PURPOSE -- structure is not decoration but argument.',
  },
  {
    number: 6,
    question:
      'How does Dickens use symbolism in A Christmas Carol?',
    type: 'Writer\'s Methods',
    thesisStatement:
      'Dickens uses a network of interconnected symbols -- chains, light, fire, and weather -- to make abstract moral concepts viscerally physical, ensuring the reader feels the weight of greed and the warmth of generosity rather than merely understanding them intellectually.',
    introduction:
      'Open by noting that the novella operates simultaneously as a realistic story and as a symbolic morality tale. State your thesis: Dickens\'s symbolism makes the moral argument physical and sensory -- greed has weight (chains), truth has light (the Ghost\'s flame), love has warmth (fire), and moral failure has cold (Scrooge\'s frozen features).',
    paragraphs: [
      {
        point:
          'Marley\'s chain is the novella\'s central symbol, making the abstract consequences of greed tangibly physical.',
        evidence:
          '"I wear the chain I forged in life. I made it link by link, and yard by yard." The chain is made of "cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel."',
        analysis:
          'Every component of the chain is an instrument of commerce -- Dickens literally transforms the tools of capitalism into instruments of eternal punishment. The craftsmanship language ("forged," "link by link") makes greed feel deliberate and cumulative. The chain gives weight to an abstract concept: selfishness is not just wrong but heavy. Scrooge\'s own chain, unseen but growing, hangs over the entire novella.',
      },
      {
        point:
          'The Ghost of Christmas Past\'s light symbolises truth and memory -- things that cannot be permanently suppressed.',
        evidence:
          'The Ghost emits "a bright clear jet of light" from its head. Scrooge forces the extinguisher cap over it, "but he could not hide the light: which streamed from under it, in an unbroken flood upon the ground."',
        analysis:
          'Light versus darkness is the novella\'s most sustained symbolic opposition. Scrooge\'s preference for darkness ("Darkness is cheap, and Scrooge liked it") represents his moral blindness. The Ghost\'s inextinguishable light proves that truth cannot be permanently hidden -- memory will always reassert itself. The extinguisher cap symbolises Scrooge\'s years of suppressing uncomfortable self-knowledge.',
      },
      {
        point:
          'The warmth/cold motif runs through the entire novella, physically embodying the contrast between compassion and cruelty.',
        evidence:
          'Scrooge: "The cold within him froze his old features." The Cratchit home: warm despite poverty. Fred\'s party: full of firelight and laughter. The dead man in Stave 4: cold and alone.',
        analysis:
          'Dickens makes the moral argument sensory. Cold equals isolation and cruelty; warmth equals love and connection. This is pathetic fallacy operating at a structural level -- not just one scene but the entire novella. The Cratchits\' small fire is warmer than Scrooge\'s frozen chambers because warmth comes from love, not money. Scrooge\'s transformation in Stave 5 is marked by warmth: laughter, embraces, the roaring fire at Fred\'s house.',
      },
    ],
    conclusion:
      'Conclude by noting how these symbols work together as a system. Chains = the weight of greed. Light = the truth of memory. Warmth/cold = the presence or absence of love. Dickens constructs a symbolic vocabulary that makes his moral argument physical, visceral, and impossible to ignore. This is why the novella works as emotional persuasion, not just intellectual argument.',
    examTip:
      'For a symbolism essay, choose three interconnected symbols and show how they reinforce each other. Always link symbolism to Dickens\'s purpose -- symbols are not ornamental but argumentative.',
  },
  {
    number: 7,
    question:
      'How does Dickens present the theme of redemption in A Christmas Carol?',
    type: 'Theme',
    thesisStatement:
      'Dickens presents redemption not as a miraculous event but as a process -- a journey through understanding, empathy, and fear that culminates in action, arguing that genuine change requires both internal transformation and external proof.',
    introduction:
      'Open by establishing that the novella asks whether redemption is possible for even the most hardened sinner. State your thesis: Dickens structures redemption as a process with distinct stages, and insists that spiritual change must produce material change -- feeling sorry is not enough without doing something about it.',
    paragraphs: [
      {
        point:
          'Dickens establishes that redemption begins with confronting the truth about oneself, as shown through the Ghost of Christmas Past.',
        evidence:
          'Scrooge weeps at the lonely schoolboy. He defends Fezziwig and admits he wants to speak to Bob. He watches Belle leave. He tries to suppress the Ghost\'s light but fails.',
        analysis:
          'Dickens presents self-awareness as the necessary first stage of redemption. Scrooge must understand HOW he became cruel before he can choose to be different. The Ghost\'s inextinguishable light symbolises truth\'s persistence. Scrooge\'s attempt to suppress it shows his resistance -- redemption is not easy or comfortable. It requires honest confrontation with painful memories.',
      },
      {
        point:
          'Empathy -- the ability to feel another person\'s suffering -- is presented as the crucial middle stage, as shown through the Ghost of Christmas Present.',
        evidence:
          'Scrooge asks about Tiny Tim "with an interest he had never felt before." He is "overcome with penitence and grief" when the Ghost echoes his "surplus population" words. He recoils from Ignorance and Want.',
        analysis:
          'The phrase "an interest he had never felt before" marks the birth of empathy in Scrooge. Dickens presents empathy as a skill that can be learned, not just a feeling that appears. The Ghost teaches empathy through witnessing -- Scrooge sees how others live and begins to understand his connection to them. This is the middle of the redemption process: understanding leads to feeling.',
      },
      {
        point:
          'Dickens insists that redemption is completed only through action, not just feeling -- Stave 5 proves transformation through concrete acts of generosity.',
        evidence:
          'Scrooge sends the turkey, donates to charity, attends Fred\'s dinner, raises Bob\'s salary. He becomes "as good a friend, as good a master, and as good a man, as the good old city knew."',
        analysis:
          'Each act of generosity in Stave 5 directly addresses a failure from Stave 1: the turkey answers the Cratchits\' tiny goose, the donation answers the rejected collectors, the dinner answers Fred\'s refused invitation. Dickens structures redemption as a systematic undoing of past wrongs. The triple "good" emphasises completeness. Crucially, Scrooge\'s change is lasting: he keeps Christmas "all the year."',
      },
    ],
    conclusion:
      'Conclude by linking Scrooge\'s redemption to Dickens\'s social purpose. The novella argues that the wealthy CAN change -- and must. Redemption is presented as joyful, not grim: Scrooge is happier generous than he ever was miserly. Dickens offers his readers both a warning (Marley\'s fate) and a promise (Scrooge\'s joy). The message is hopeful: change is always possible, and it is never too late.',
    examTip:
      'The strongest essays on redemption will discuss the PROCESS rather than just the outcome. Track the stages: self-awareness (Stave 2), empathy (Stave 3), fear (Stave 4), action (Stave 5). Show how Dickens builds each stage on the previous one.',
  },
  {
    number: 8,
    question:
      'How does Dickens use language to present different attitudes to Christmas in A Christmas Carol?',
    type: 'Writer\'s Methods',
    thesisStatement:
      'Dickens uses a deliberate contrast in language -- cold, transactional, and monosyllabic for Scrooge versus warm, effusive, and rhythmic for those who celebrate Christmas -- to make the moral argument audible in the very texture of the prose.',
    introduction:
      'Open by noting that A Christmas Carol is as much about language as it is about Christmas. Dickens uses vocabulary, sentence structure, and rhetorical devices to make the reader HEAR the difference between miserly and generous attitudes. State your thesis: the novella\'s linguistic texture embodies its moral argument.',
    paragraphs: [
      {
        point:
          'Scrooge\'s language in Stave 1 is cold, clipped, and transactional, reflecting his reduction of all human relationships to economic calculations.',
        evidence:
          '"Bah! Humbug!" -- a monosyllabic dismissal. "Are there no prisons? Are there no workhouses?" -- rhetorical questions that shut down conversation. "Decrease the surplus population" -- the language of economics applied to human life.',
        analysis:
          'Dickens gives Scrooge the language of policy and commerce. His words are designed to end conversations, not begin them. "Humbug!" dismisses without engaging. The rhetorical questions are not genuine inquiries but verbal barriers. "Surplus population" is the most chilling example: it turns people into economic data. Dickens shows how language can dehumanise.',
      },
      {
        point:
          'Fred\'s language represents the opposite attitude -- warm, inclusive, and rhythmic -- and his speech about Christmas functions as the novella\'s thesis statement.',
        evidence:
          '"The only time I know of, in the long calendar of the year, when men and women seem by one consent to open their shut-up hearts freely." The sentence is long, flowing, and generous -- mirroring the openness Fred describes.',
        analysis:
          'Fred\'s sentence structure embodies his message. Where Scrooge speaks in clipped fragments, Fred speaks in expansive, cadenced phrases. "Shut-up hearts" uses Scrooge\'s own metaphorical vocabulary (locked doors, closed counting-houses) but inverts it: hearts should be opened, not shut. The rhythm of the sentence -- rising to "open their shut-up hearts freely" -- creates a sense of release and warmth.',
      },
      {
        point:
          'Scrooge\'s language transforms dramatically in Stave 5, shifting from monosyllabic dismissal to breathless, joyful excess, proving that language itself changes when the heart changes.',
        evidence:
          '"I am as light as a feather, I am as happy as an angel, I am as merry as a school-boy. I don\'t know anything. I\'m quite a baby. Never mind. I don\'t care." -- short, giddy, fragmented sentences replacing the cold precision of Stave 1.',
        analysis:
          'The transformation in Scrooge\'s language mirrors his moral transformation. The triple simile ("light... happy... merry") is expansive and generous -- the opposite of "Bah! Humbug!" The breathless short sentences show a man who has lost his need for control and embraced vulnerability. "I\'m quite a baby" is the most un-Scrooge-like thing he could say: he admits ignorance, accepts helplessness, and finds joy in both.',
      },
    ],
    conclusion:
      'Conclude by linking the linguistic contrast to Dickens\'s purpose. The novella\'s language does not just describe attitudes to Christmas -- it enacts them. Cold language creates distance; warm language creates connection. Dickens wrote the novella to change attitudes, and he understood that changing how people speak about the poor is the first step toward changing how they treat them.',
    examTip:
      'This is a strong essay for demonstrating close language analysis. Quote SHORT phrases and analyse them closely rather than quoting long passages. Focus on word choice, sentence structure, and rhetorical devices. Compare specific linguistic features across staves.',
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function EssayPlansPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Study Tools */}
      <StudyTools textName="A Christmas Carol" textType="novella" />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
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
              <FileText className="mr-1 size-3 text-amber-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Essay Plans
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            A Christmas Carol by Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Eight exam-style questions with full PEEL paragraph plans. Each plan
            includes a thesis statement, three structured paragraphs with
            evidence and analysis, a conclusion approach, and an exam technique
            tip.
          </p>
        </div>
      </section>

      {/* Table of contents */}
      <section>
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="mb-4 text-heading-md font-heading text-foreground">
              Jump to a Plan
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {essayPlans.map((ep) => (
                <a
                  key={ep.number}
                  href={`#plan-${ep.number}`}
                  className="group flex items-start gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-foreground/20 hover:bg-muted/40"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {ep.number}
                  </div>
                  <div className="min-w-0">
                    <span className="mb-0.5 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {ep.type}
                    </span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-foreground/90 line-clamp-2">
                      {ep.question}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Essay plans */}
      {essayPlans.map((plan) => (
        <section
          key={plan.number}
          id={`plan-${plan.number}`}
          className="scroll-mt-8 space-y-5"
        >
          {/* Plan header */}
          <div className="flex items-start gap-4 border-b border-border/60 pb-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
              {plan.number}
            </div>
            <div>
              <span className="mb-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {plan.type}
              </span>
              <h2 className="text-heading-lg font-heading text-foreground">
                {plan.question}
              </h2>
            </div>
          </div>

          {/* Thesis */}
          <Card className="bg-primary/[0.03] border-primary/10">
            <CardContent className="p-5">
              <h3 className="mb-2 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                Thesis Statement
              </h3>
              <p className="text-body-sm font-medium text-foreground">
                {plan.thesisStatement}
              </p>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <BookOpen className="size-4 text-blue-400" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground">
              <p>{plan.introduction}</p>
            </CardContent>
          </Card>

          {/* Paragraphs */}
          {plan.paragraphs.map((para, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  Paragraph {i + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-body-sm text-muted-foreground">
                <div>
                  <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                    Point
                  </h4>
                  <p>{para.point}</p>
                </div>
                <div className="rounded-lg border-l-4 border-l-primary/40 bg-muted/30 p-4">
                  <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Quote className="size-3 text-violet-400" />
                    Evidence
                  </h4>
                  <p className="italic text-foreground">{para.evidence}</p>
                </div>
                <div>
                  <h4 className="mb-1 text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                    Analysis
                  </h4>
                  <p>{para.analysis}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Conclusion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <FileText className="size-4 text-emerald-400" />
                Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground">
              <p>{plan.conclusion}</p>
            </CardContent>
          </Card>

          {/* Exam tip */}
          <Card className="bg-amber-500/[0.03] border-amber-500/10">
            <CardContent className="p-5">
              <h4 className="mb-2 text-sm font-semibold text-foreground flex items-center gap-2">
                <Lightbulb className="size-4 text-amber-400" />
                Exam Technique Tip
              </h4>
              <p className="text-body-sm text-muted-foreground">
                {plan.examTip}
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
