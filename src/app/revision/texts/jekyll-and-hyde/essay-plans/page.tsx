import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Feather, Lightbulb, Quote, Target } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Essay Plans — GCSE | The English Hub',
  description:
    'Five GCSE essay plans for Strange Case of Dr Jekyll and Mr Hyde: duality, Hyde as frightening, setting and atmosphere, the Jekyll-Hyde relationship, and secrecy.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde/essay-plans',
  },
}

/* ─── Types ──────────────────────────────────────────────────── */

type ParagraphPlan = {
  pointLabel: string
  topic: string
  quotations: string[]
  analysis: string
  context: string
}

type EssayPlan = {
  id: string
  question: string
  thesisStatement: string
  introduction: string
  paragraphs: ParagraphPlan[]
  conclusion: string
  examTip: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const essayPlans: EssayPlan[] = [
  /* ── Essay 1: Duality ──────────────────────────────────────── */
  {
    id: 'duality',
    question: 'How does Stevenson present the theme of duality?',
    thesisStatement:
      'Stevenson presents duality as an inescapable condition of human nature, using Jekyll\'s experiment to argue that attempting to separate good and evil only strengthens the darker side. Through characterisation, setting, and structure, the novella suggests that Victorian society\'s demand for moral perfection creates the very monstrosity it fears.',
    introduction:
      'Open with context: Stevenson wrote the novella in 1886, during a period of intense Victorian respectability when gentlemen were expected to suppress all base desires. Introduce the thesis that duality is not a flaw to be cured but a fundamental truth about human nature. Briefly reference Jekyll\'s philosophical statement that "man is not truly one, but truly two" as the novella\'s central argument.',
    paragraphs: [
      {
        pointLabel: 'Point 1',
        topic: 'Jekyll\'s philosophical recognition of duality',
        quotations: [
          '"I learned to recognise the thorough and primitive duality of man"',
          '"man is not truly one, but truly two"',
        ],
        analysis:
          'Analyse the word "primitive" — it suggests duality is not modern corruption but something primal and ancient, predating civilisation. The declarative "not truly one, but truly two" has the force of a scientific axiom. Jekyll goes even further, speculating that man is "a mere polity of multifarious, incongruous and independent denizens," suggesting that identity is even more fragmented than a binary. Stevenson anticipates Freud\'s later theories of the id, ego, and superego.',
        context:
          'Link to Darwin\'s theory of evolution (1859), which had challenged the idea that humans were created by God and distinct from animals. The fear that the beast lurked beneath the civilised surface was widespread in Victorian culture.',
      },
      {
        pointLabel: 'Point 2',
        topic: 'Physical duality in Jekyll\'s transformation',
        quotations: [
          '"I felt younger, lighter, happier in body"',
          '"I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse"',
        ],
        analysis:
          'The initial transformation is described with positive language ("younger, lighter, happier"), creating an oxymoron with the moral horror of Hyde. This shows why duality is dangerous: the evil side feels liberating. The later quotation uses passive constructions ("losing hold," "becoming incorporated") to suggest the process has become involuntary, like addiction. The repetition of "slowly" creates a creeping, insidious rhythm.',
        context:
          'Relate to Victorian double lives: many outwardly respectable gentlemen frequented opium dens and prostitutes. Jekyll\'s potion is a chemical version of the double life already being lived across London.',
      },
      {
        pointLabel: 'Point 3',
        topic: 'Setting as a mirror of duality',
        quotations: [
          '"the door, which was equipped with neither bell nor knocker, was blistered and distained"',
          '"the fog still slept on the wing above the drowned city"',
        ],
        analysis:
          'Jekyll\'s house has a respectable front entrance and a neglected back door — the architecture physically embodies the duality theme. The sinister door (blistered, distained) is the entrance Hyde uses, while Jekyll enters through the handsome front. The fog that pervades London mirrors moral obscurity: the city cannot see itself clearly. The personified fog "sleeping" over a "drowned" city suggests society is submerged in its own concealment.',
        context:
          'London in the 1880s was a city of stark contrasts: grand mansions and slums existed side by side. Stevenson uses this real geography to reinforce the idea that duality is built into the fabric of civilisation, not just individual people.',
      },
      {
        pointLabel: 'Point 4',
        topic: 'Structural duality — the novella\'s form',
        quotations: [
          '"If he be Mr Hyde, I shall be Mr Seek"',
          '"I bring the life of that unhappy Henry Jekyll to an end"',
        ],
        analysis:
          'The novella itself has a dual structure: the first eight chapters are a detective mystery narrated in the third person; the final two are first-person confessions. Utterson\'s pun "Hyde/Seek" frames the whole narrative as a game of concealment. Jekyll\'s final line refers to himself in the third person ("that unhappy Henry Jekyll"), showing that even at the end he cannot unify his fractured identity. The structure mirrors the theme: truth is hidden behind layers of narrative, just as Hyde is hidden behind Jekyll.',
        context:
          'Stevenson wrote the novella during a period when Gothic fiction was evolving from remote, castle-based settings (Shelley, Poe) to urban, psychological horror. The dual structure reflects this evolution: external mystery gives way to internal confession.',
      },
    ],
    conclusion:
      'Synthesise the argument: Stevenson presents duality not as an aberration but as the human condition. Jekyll\'s tragedy is not that he has a dark side but that he tries to isolate it, and in doing so makes it uncontrollable. The novella warns that a society which demands perfection will produce monsters, because the things people refuse to acknowledge grow stronger in secret. End with the idea that duality cannot be resolved — only accepted.',
    examTip:
      'This question appears on almost every exam board. Always link duality to Victorian context (respectability, hypocrisy, Darwin). Show the examiner you understand duality as structural (the novella\'s form) as well as thematic (characters and setting). Use the word "Stevenson" regularly to keep the focus on the writer\'s craft.',
  },

  /* ── Essay 2: Hyde as Frightening ──────────────────────────── */
  {
    id: 'hyde-frightening',
    question: 'How is Hyde presented as frightening?',
    thesisStatement:
      'Stevenson makes Hyde frightening not through specific physical description but through his indefinability, his escalating violence, and the visceral reactions he provokes in others. Hyde represents something more terrifying than a conventional villain: he is the part of human nature that civilisation cannot name, control, or destroy.',
    introduction:
      'Open with context: Victorian Gothic literature often made evil external and exotic (foreign settings, supernatural villains). Stevenson does something more disturbing — he places evil inside a respectable London gentleman. Introduce the thesis that Hyde\'s true horror lies in his resistance to rational description and categorisation.',
    paragraphs: [
      {
        pointLabel: 'Point 1',
        topic: 'Hyde\'s indefinability — evil that cannot be named',
        quotations: [
          '"He is not easy to describe. There is something wrong with his appearance; something displeasing, something downright detestable"',
          '"I never saw a man I so disliked, and yet I scarce know why"',
        ],
        analysis:
          'Enfield\'s inability to describe Hyde is itself the source of terror. The tricolon "displeasing... something downright detestable" escalates from mild to extreme, yet each term remains vague. The phrase "I scarce know why" suggests Hyde triggers an instinctive, pre-rational revulsion that language cannot capture. Stevenson makes the reader\'s imagination do the work, which is always more effective than explicit description.',
        context:
          'Link to Victorian physiognomy — the pseudo-science of reading character from facial features. Hyde\'s face should be readable, but it resists interpretation. This challenges the Victorian belief that evil can be identified, classified, and controlled.',
      },
      {
        pointLabel: 'Point 2',
        topic: 'Hyde\'s escalating violence',
        quotations: [
          '"trampled calmly over the child\'s body and left her screaming on the ground"',
          '"with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows"',
        ],
        analysis:
          'Hyde\'s violence escalates from trampling a child (Chapter 1) to frenzied murder (Chapter 4). In the first incident, the adverb "calmly" is the most chilling word: Hyde feels nothing. By the Carew murder, "ape-like fury" replaces calm detachment with animalistic rage, suggesting evil grows more extreme when indulged. The metaphor "storm of blows" removes human agency entirely — Hyde has become a force of nature, beyond reason or restraint.',
        context:
          'Connect to Darwin: the simile "ape-like" invokes fears of evolutionary regression. Victorian audiences feared that the primitive lurked beneath civilisation. Hyde\'s increasing violence dramatises the theory that evil, once freed, returns humanity to its animal origins.',
      },
      {
        pointLabel: 'Point 3',
        topic: 'Reactions of others — Hyde as mirror of fear',
        quotations: [
          '"Satan\'s signature upon a face"',
          '"gave me one look, so ugly that it brought out the sweat on me like running"',
        ],
        analysis:
          'Stevenson makes Hyde frightening primarily through other characters\' reactions. Utterson\'s metaphor "Satan\'s signature" frames Hyde in Biblical terms — he is diabolical evil made flesh. Enfield\'s physical response ("sweat... like running") makes fear bodily and involuntary. Hyde provokes the same reaction in everyone, regardless of their temperament, suggesting he triggers a universal, primal recognition of evil.',
        context:
          'In Christian theology, Satan is the original deceiver. By associating Hyde with Satan, Stevenson taps into deeply rooted religious fears. For a Victorian audience, this would be far more frightening than any physical description.',
      },
      {
        pointLabel: 'Point 4',
        topic: 'Hyde\'s physical smallness and deformity',
        quotations: [
          '"Mr Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation"',
          '"the man seems hardly human! Something troglodytic"',
        ],
        analysis:
          'Hyde\'s small size is significant: he is "dwarfish" because he represents the part of Jekyll that has been repressed and underdeveloped. The paradox of "deformity without any nameable malformation" makes Hyde uncanny — wrong in a way that defies categorisation. The word "troglodytic" (cave-dwelling) suggests Hyde is a throwback to a pre-civilised state, connecting to anxieties about degeneration and racial decline.',
        context:
          'Link to Victorian fears about degeneration — the theory that civilised humans could regress to earlier evolutionary stages. Hyde\'s smallness grows throughout the novella as he becomes more dominant, suggesting evil expands when fed.',
      },
    ],
    conclusion:
      'Synthesise: Stevenson makes Hyde frightening because he cannot be described, classified, or contained. He is not a monster from outside — he is inside every respectable person. His escalating violence shows that evil grows when indulged, and the universal revulsion he provokes suggests that everyone instinctively recognises the Hyde within themselves. The true horror of the novella is not Hyde\'s existence but the realisation that he was always there, waiting.',
    examTip:
      'When answering "How is X presented?" questions, keep the focus on Stevenson\'s methods: language, structure, and form. Don\'t just describe what Hyde does — analyse how Stevenson constructs the fear through other characters\' reactions, animal imagery, and deliberate vagueness. The best answers will link to Victorian context (Darwin, physiognomy, respectability).',
  },

  /* ── Essay 3: Setting and Atmosphere ───────────────────────── */
  {
    id: 'setting-atmosphere',
    question: 'How does Stevenson use setting to create atmosphere?',
    thesisStatement:
      'Stevenson uses the contrasting geography of London, the pervasive fog, and the symbolic architecture of Jekyll\'s house to create an atmosphere of concealment, moral ambiguity, and Gothic dread. The setting is not merely a backdrop but an active participant in the novella\'s exploration of duality and repression.',
    introduction:
      'Open with context: Stevenson relocated Gothic horror from remote castles and foreign landscapes to the streets of London, making the terror domestic and inescapable. Introduce the thesis that setting mirrors character and theme throughout the novella. Briefly note the novella\'s debt to the tradition of urban Gothic pioneered by Dickens.',
    paragraphs: [
      {
        pointLabel: 'Point 1',
        topic: 'London\'s dual geography — respectable fronts and dark alleys',
        quotations: [
          '"street shone out in contrast to its dingy neighbourhood, like a fire in a forest"',
          '"a certain sinister block of building thrust forward its gable on the street"',
        ],
        analysis:
          'London is presented as a city of stark contrasts, mirroring the Jekyll-Hyde duality. The simile "like a fire in a forest" suggests the respectable street is an island of light surrounded by darkness, vulnerable to being consumed. The personification of the building "thrusting forward" gives it an aggressive, intrusive quality, as though the disreputable is forcing itself into the respectable. Stevenson makes geography moral: place reflects character.',
        context:
          'Victorian London genuinely contained extreme contrasts: grand townhouses stood streets away from slums. The East End/West End divide was a spatial expression of class inequality. Stevenson exploits this real geography to make his Gothic symbolism feel authentic.',
      },
      {
        pointLabel: 'Point 2',
        topic: 'Fog as concealment and moral blindness',
        quotations: [
          '"the fog still slept on the wing above the drowned city"',
          '"a great chocolate-coloured pall lowered over heaven"',
        ],
        analysis:
          'Fog is the novella\'s most pervasive atmospheric device. The personified fog "sleeping" creates a sense of torpor and wilful ignorance, while the verb "drowned" suggests London is suffocating under its own secrecy. The "chocolate-coloured pall" turns fog into a funeral shroud ("pall") that "lowered over heaven" — blocking the divine light of moral clarity. Stevenson uses pathetic fallacy not just for atmosphere but as a metaphor for Victorian society\'s refusal to see uncomfortable truths.',
        context:
          'London\'s real "pea-souper" fogs were caused by coal pollution and were a genuine public health crisis. Stevenson turns a physical phenomenon into a moral symbol. The fog also connects to the Jack the Ripper murders (1888), which occurred shortly after publication and in similar fog-shrouded streets.',
      },
      {
        pointLabel: 'Point 3',
        topic: 'Jekyll\'s house — architecture as symbol of duality',
        quotations: [
          '"the door, which was equipped with neither bell nor knocker, was blistered and distained"',
          '"the hall, when they entered it, was brightly lighted up; the fire was built high"',
        ],
        analysis:
          'Jekyll\'s house has two faces: a handsome front door on a respectable square, and a neglected back door in a side street. This architectural duality physically embodies the Jekyll-Hyde theme. The back door (blistered, distained, no bell or knocker) represents the hidden, disreputable self: it refuses to welcome scrutiny. The warm, bright interior of the main house provides false comfort — the fireside domesticity conceals the horror of the laboratory behind.',
        context:
          'Many Victorian townhouses had separate entrances for servants and tradesmen. Stevenson transforms this class convention into a symbol of psychological compartmentalisation. The architecture of respectability literally has a back door to vice.',
      },
      {
        pointLabel: 'Point 4',
        topic: 'The laboratory — Gothic space of transgression',
        quotations: [
          '"the theatre... once crowded with eager students and now lying gaunt and silent"',
          '"the cabinet... furnished, among other things, with a cheval glass... the fire burned in the grate... and on the table lay the remains of an altered experiment"',
        ],
        analysis:
          'The laboratory is a classic Gothic space: isolated, secret, and associated with forbidden knowledge. The word "theatre" carries a double meaning (medical lecture theatre and stage for transformation). Its emptiness ("gaunt and silent") makes it tomb-like. The "cheval glass" (full-length mirror) is symbolically crucial — it is where Jekyll confronts his transformed reflection. Stevenson concentrates the novella\'s horror in this single room, making it the physical location of duality.',
        context:
          'Link to Mary Shelley\'s Frankenstein (1818): both texts feature scientists whose private laboratories become sites of monstrous creation. Stevenson updates the Gothic laboratory from a remote castle to a London townhouse, making the horror mundane and domestic.',
      },
    ],
    conclusion:
      'Synthesise: Stevenson\'s London is not just a setting but a reflection of the novella\'s moral landscape. Every aspect of the physical environment — the contrasting streets, the suffocating fog, the dual-faced house, the abandoned laboratory — mirrors the internal conflict between respectability and repression. The atmosphere of concealment and dread is built into the very geography of the city, suggesting that duality is not just a personal condition but a social one, woven into the fabric of Victorian civilisation.',
    examTip:
      'For setting questions, always connect place to theme. Don\'t just describe what the setting looks like — analyse what it represents. Use the term "pathetic fallacy" for the fog, and "symbolism" for the door and laboratory. Show the examiner you understand that setting is a deliberate authorial choice, not an accident. Reference "Stevenson presents" or "Stevenson creates" regularly.',
  },

  /* ── Essay 4: Relationship between Jekyll and Hyde ──────────── */
  {
    id: 'relationship',
    question: 'How does Stevenson present the relationship between Jekyll and Hyde?',
    thesisStatement:
      'Stevenson presents the Jekyll-Hyde relationship as simultaneously one of creator and creation, self and shadow, and addict and substance. The relationship evolves from control to dependency and finally to destruction, dramatising the idea that the parts of ourselves we try to separate and suppress will ultimately consume us.',
    introduction:
      'Open with context: the novella was written in three days during a fever dream, and its structure mirrors the compulsive, uncontrollable nature of Jekyll\'s relationship with Hyde. Introduce the thesis that the "relationship" is really a war within a single self, and that Stevenson uses it to explore Victorian anxieties about repression, addiction, and loss of control.',
    paragraphs: [
      {
        pointLabel: 'Point 1',
        topic: 'Phase 1: Creator and creation — Jekyll in control',
        quotations: [
          '"I felt younger, lighter, happier in body; within I was conscious of a heady recklessness"',
          '"Think of it — I did not even exist!"',
        ],
        analysis:
          'Initially, Jekyll creates and controls Hyde. The first transformation brings positive sensations ("younger, lighter, happier"), framing Hyde as a source of liberation. The exclamation "I did not even exist!" reveals the thrill of anonymity: Hyde has no social identity, no history, no accountability. Jekyll treats Hyde as a costume he can put on and take off. The word "heady" suggests intoxication, foreshadowing the addiction to come.',
        context:
          'Link to Victorian double lives: gentlemen could visit music halls, opium dens, and brothels while maintaining their public respectability. Hyde is a chemical version of this already-existing social practice. Jekyll\'s initial excitement mirrors the seductive appeal of secret transgression.',
      },
      {
        pointLabel: 'Point 2',
        topic: 'Phase 2: Dependency — the balance shifts',
        quotations: [
          '"I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse"',
          '"the moment I choose, I can be rid of Mr Hyde"',
        ],
        analysis:
          'The relationship shifts from choice to compulsion. The passive constructions ("losing hold," "becoming incorporated") make the process sound involuntary — Jekyll is being absorbed by Hyde, not the other way around. The dramatic irony of "the moment I choose, I can be rid of Mr Hyde" is devastating: Jekyll believes he is in control at the very moment he is losing it. The repetition of "slowly" creates a creeping sense of inevitability.',
        context:
          'Stevenson drew on contemporary awareness of addiction, particularly to laudanum (opium dissolved in alcohol), which was widely available and increasingly recognised as destructive. The pattern of initial pleasure, growing dependency, and loss of control mirrors the trajectory of substance addiction.',
      },
      {
        pointLabel: 'Point 3',
        topic: 'Phase 3: Parasitic inversion — Hyde grows dominant',
        quotations: [
          '"He, I say — I cannot say, I"',
          '"It was Hyde, after all, and Hyde alone, that was guilty. Jekyll was no worse; he woke again to his good qualities seemingly unimpaired"',
        ],
        analysis:
          'The pronoun confusion ("He, I say — I cannot say, I") dramatises the collapse of identity. Jekyll can no longer distinguish himself from Hyde grammatically, let alone psychologically. The second quotation shows Jekyll\'s desperate self-deception: he externalises all guilt onto Hyde to preserve his self-image. But the reader understands that this separation is precisely the delusion that created Hyde in the first place. The relationship has become parasitic: Hyde feeds on Jekyll\'s identity.',
        context:
          'Link to Freud\'s later theory of the id, ego, and superego. Jekyll\'s attempt to separate the id (instinctual desire) from the superego (moral conscience) only empowers the id. Stevenson anticipates the psychoanalytic insight that repression creates the return of the repressed.',
      },
      {
        pointLabel: 'Point 4',
        topic: 'Phase 4: Mutual destruction — the final entrapment',
        quotations: [
          '"I bring the life of that unhappy Henry Jekyll to an end"',
          '"I had voluntarily stripped myself of all those balancing instincts by which even the worst of us continues to walk with some degree of steadiness among temptations"',
        ],
        analysis:
          'Jekyll\'s final line refers to himself in the third person ("that unhappy Henry Jekyll"), as though he is already dead. The word "unhappy" carries immense pathos. The metaphor of "balancing instincts" frames morality as equilibrium rather than pure goodness — by removing the balance, Jekyll made himself incapable of resisting evil. The relationship ends in mutual destruction: Hyde dies by suicide in Jekyll\'s body. They can neither separate nor coexist.',
        context:
          'The Gothic tradition of the "double" (doppelganger) always ends in destruction. Stevenson follows Poe and Shelley in suggesting that the alter ego, once created, cannot be controlled or killed without destroying the self. The relationship is a warning about the hubris of trying to engineer human nature.',
      },
    ],
    conclusion:
      'Synthesise: Stevenson presents the Jekyll-Hyde relationship as a trajectory from control to consumption. Jekyll begins as the master and ends as the victim. The relationship dramatises the central argument of the novella: that duality cannot be resolved by separation. Attempting to isolate and indulge the dark side does not purify the good side — it empowers the darkness until it takes over completely. The death of both Jekyll and Hyde in the same body is the ultimate expression of their inseparability.',
    examTip:
      'This question is really about duality, but framed as a "relationship." Structure your answer chronologically (control, dependency, inversion, destruction) to show Jekyll\'s decline as a journey. Always use the term "Stevenson presents" to keep the focus on authorial craft. The best answers will discuss pronouns and narrative voice as well as plot events.',
  },

  /* ── Essay 5: Secrecy ──────────────────────────────────────── */
  {
    id: 'secrecy',
    question: 'How does Stevenson explore the theme of secrecy?',
    thesisStatement:
      'Stevenson presents secrecy not simply as individual concealment but as the organising principle of Victorian society. Through locked doors, sealed letters, withheld confessions, and the novella\'s own structure, Stevenson argues that a culture obsessed with reputation inevitably produces the very monsters it tries to hide.',
    introduction:
      'Open with context: Victorian society placed enormous value on reputation and discretion. Gentlemen were expected to keep up appearances at all costs. Introduce the thesis that secrecy in the novella operates on multiple levels — personal, social, and structural — and that Stevenson uses the detective narrative form to dramatise the destructive consequences of a culture that prioritises concealment over truth.',
    paragraphs: [
      {
        pointLabel: 'Point 1',
        topic: 'Characters\' complicity in secrecy',
        quotations: [
          '"let us make a bargain never to refer to this again"',
          '"If he be Mr Hyde, I shall be Mr Seek"',
        ],
        analysis:
          'Enfield\'s proposal to "never refer to this again" after witnessing Hyde\'s assault reveals the reflexive Victorian instinct to suppress scandal. Both gentlemen agree to silence, prioritising discretion over justice. Utterson\'s pun "Mr Seek" is darkly ironic: he wants to uncover Hyde\'s secret, but throughout the novella he also avoids confronting the truths he finds. Every gentleman in the story keeps secrets — Utterson suppresses the handwriting evidence, Lanyon seals his letter, Jekyll conceals his double life.',
        context:
          'Victorian society operated on codes of discretion. Gentlemen\'s clubs, private dinners, and professional confidentiality created a structure in which uncomfortable truths could be buried. Stevenson dramatises how this culture of silence enables evil to flourish unchecked.',
      },
      {
        pointLabel: 'Point 2',
        topic: 'Locked doors and sealed documents as symbols of secrecy',
        quotations: [
          '"the door, which was equipped with neither bell nor knocker, was blistered and distained"',
          '"a sealed enclosure... not to be opened till the death or disappearance of Dr Henry Jekyll"',
        ],
        analysis:
          'The novella is full of physical barriers to truth: locked doors, sealed letters, closed drawers. The sinister back door has no bell or knocker — it resists contact and scrutiny. Lanyon\'s sealed letter defers revelation beyond death, reflecting a society where truth can only emerge when it is too late to act on it. These physical objects embody the psychological barriers characters maintain against self-knowledge and honest communication.',
        context:
          'The epistolary tradition (novels told through letters) was well established in Gothic fiction. Stevenson uses letters and documents as symbols of delayed truth. The final two chapters are literally sealed confessions, readable only after the characters who wrote them are dead.',
      },
      {
        pointLabel: 'Point 3',
        topic: 'The structure of the novella as secrecy',
        quotations: [
          '"Henry Jekyll\'s Full Statement of the Case"',
          '"what he told me in the next hour, I cannot bring my mind to set on paper"',
        ],
        analysis:
          'The novella\'s structure enacts its own theme of secrecy. The central truth — that Jekyll and Hyde are the same person — is withheld from the reader until the final two chapters. Even Lanyon\'s narrative withholds part of the truth: "I cannot bring my mind to set on paper" suggests there are horrors the text itself refuses to name. Stevenson forces the reader to experience the same frustration and gradual revelation as Utterson, making secrecy a structural experience as well as a thematic one.',
        context:
          'The novella was published in the era of sensational journalism and detective fiction (Conan Doyle\'s Sherlock Holmes first appeared in 1887). Stevenson exploits the detective narrative\'s pattern of concealment and revelation to create a story that is formally about the discovery of a secret.',
      },
      {
        pointLabel: 'Point 4',
        topic: 'Secrecy as self-destruction',
        quotations: [
          '"I concealed my pleasures... I stood already committed to a profound duplicity of life"',
          '"I have been doomed to such a dreadful shipwreck: that man is not truly one, but truly two"',
        ],
        analysis:
          'Jekyll\'s confession reveals that secrecy was his original sin — long before the potion, he was "committed to a profound duplicity of life." The word "concealed" implies a deliberate, sustained act of hiding, while "committed" suggests it has become an inescapable obligation. The metaphor of "shipwreck" presents the outcome as catastrophic and total. Stevenson argues that secrecy does not protect the self — it fractures it. The potion merely literalises the psychological damage that concealment was already causing.',
        context:
          'Link to Oscar Wilde\'s The Picture of Dorian Gray (1890), published four years later, which explores a similar theme of hidden vice destroying a double life. Both texts suggest that Victorian secrecy is not a defence mechanism but a form of slow self-destruction.',
      },
    ],
    conclusion:
      'Synthesise: Stevenson presents secrecy as the engine of the novella\'s tragedy. Every character participates in concealment, from Enfield\'s pact of silence to Utterson\'s suppression of evidence to Jekyll\'s lifelong duplicity. The novella itself withholds its central truth until the final pages, making the reader complicit in the culture of secrecy it critiques. Stevenson\'s ultimate argument is that secrecy does not protect — it produces monsters. The things a society refuses to acknowledge do not disappear; they grow stronger in the dark.',
    examTip:
      'Secrecy is closely linked to reputation, Victorian context, and structure. Show the examiner you can analyse the novella\'s form (how information is withheld and revealed) as well as its content. The best responses will argue that secrecy is both a theme explored by the characters and a structural technique used by Stevenson to control the reader\'s experience. Use the term "Stevenson withholds" or "Stevenson reveals" to maintain the writer focus.',
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default async function JekyllEssayPlansPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
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
          { name: "Dr Jekyll and Mr Hyde", url: "https://theenglishhub.app/revision/texts/jekyll-and-hyde" },
          { name: "Essay Plans", url: "https://theenglishhub.app/revision/texts/jekyll-and-hyde/essay-plans" },
        ]}
      />
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Revision', href: '/revision' },
          { label: 'Texts', href: '/revision/texts' },
          { label: 'Jekyll and Hyde', href: '/revision/texts/jekyll-and-hyde' },
          { label: 'Essay Plans' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/jekyll-and-hyde" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to study guide
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Feather className="mr-1 size-3 text-violet-400" />
              Essay Plans
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            GCSE Essay Plans
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Strange Case of Dr Jekyll and Mr Hyde — Robert Louis Stevenson (1886)
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Five complete essay plans with thesis statements, paragraph-by-paragraph
            breakdowns, key quotations, analysis, contextual links, and exam tips.
          </p>
        </div>
      </section>

      {/* Essay navigation */}
      <section>
        <Card>
          <CardContent className="p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Jump to essay
            </p>
            <div className="flex flex-col gap-2">
              {essayPlans.map((ep, i) => (
                <a
                  key={ep.id}
                  href={`#essay-${ep.id}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-violet-500/10 text-[10px] font-bold text-violet-400">
                    {i + 1}
                  </span>
                  {ep.question}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Essays */}
      {essayPlans.map((ep, essayIdx) => (
        <section key={ep.id} id={`essay-${ep.id}`} className="scroll-mt-8 space-y-5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-400">
              {essayIdx + 1}
            </span>
            <h2 className="text-heading-lg font-heading text-foreground">
              {ep.question}
            </h2>
          </div>

          {/* Thesis */}
          <Card className="border-violet-500/20 bg-violet-500/[0.03]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Target className="size-4 text-violet-400" />
                Thesis Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-foreground font-medium italic">
              {ep.thesisStatement}
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
              {ep.introduction}
            </CardContent>
          </Card>

          {/* Paragraphs */}
          {ep.paragraphs.map((para, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                  <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] font-bold text-emerald-400">
                    {i + 1}
                  </span>
                  {para.pointLabel}: {para.topic}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Quotations */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Quotations
                  </p>
                  <div className="space-y-1.5">
                    {para.quotations.map((q, qi) => (
                      <p key={qi} className="text-body-sm font-medium italic text-foreground">
                        {q}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Analysis */}
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Analysis
                  </p>
                  <p className="text-body-sm text-muted-foreground">{para.analysis}</p>
                </div>

                {/* Context */}
                <div className="rounded-lg border border-border/40 bg-amber-500/[0.03] p-3">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-clay-600">
                    Contextual Link
                  </p>
                  <p className="text-body-sm text-muted-foreground">{para.context}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Conclusion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Lightbulb className="size-4 text-clay-600" />
                Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground">
              {ep.conclusion}
            </CardContent>
          </Card>

          {/* Exam Tip */}
          <Card className="border-blue-500/20 bg-blue-500/[0.03]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Target className="size-4 text-blue-400" />
                Exam Tip
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground">
              {ep.examTip}
            </CardContent>
          </Card>

          {/* Divider between essays */}
          {essayIdx < essayPlans.length - 1 && (
            <div className="border-t border-border/40 pt-4" />
          )}
        </section>
      ))}

      {/* Navigation CTA */}
      <section className="flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/jekyll-and-hyde/chapters" />}>
          <BookOpen className="size-3.5" />
          Chapter Analysis
        </Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/jekyll-and-hyde/key-quotes" />}>
          <Quote className="size-3.5" />
          Key Quotes by Theme
        </Button>
        <Button variant="outline" size="sm" render={<Link href="/revision/texts/jekyll-and-hyde" />}>
          <ArrowLeft className="size-3.5" />
          Study Guide Overview
        </Button>
      </section>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground border-t border-border/60 pt-4">
        <em>Strange Case of Dr Jekyll and Mr Hyde</em> (1886) by Robert Louis
        Stevenson is in the public domain. Quotations are reproduced freely.
      </p>
    </div>
  )
}
