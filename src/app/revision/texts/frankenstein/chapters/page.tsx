import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Quote, Lightbulb } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  title: 'Frankenstein Key Chapters Analysed | The English Hub',
  description:
    'In-depth GCSE analysis of key chapters in Frankenstein by Mary Shelley: Letters, Chapters 1-5 (creation), Chapter 10 (creature speaks), Chapters 16-17 (the bargain), and Chapters 20-24 (pursuit and destruction).',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/frankenstein/chapters',
  },
}

// ── Chapter data ──────────────────────────────────────────────────────────────

type ChapterAnalysis = {
  heading: string
  subtitle: string
  summary: string
  keyQuotes: { quote: string; analysis: string }[]
  writersMethods: string[]
  themeLinks: string[]
}

const CHAPTERS: ChapterAnalysis[] = [
  {
    heading: 'Walton\'s Letters (Letters I-IV)',
    subtitle: 'The frame narrative and Walton\'s ambition',
    summary:
      'The novel opens with four letters from the explorer Robert Walton to his sister Margaret Saville. Walton is on a voyage to the North Pole, driven by an intense desire for discovery and glory. He writes of his loneliness and longing for a companion who shares his intellectual ambitions. His ship becomes trapped in ice, and the crew spot a gigantic figure on a dog-sled in the distance. Shortly afterwards, they rescue a half-frozen, emaciated man from the ice: Victor Frankenstein. Victor recognises in Walton the same dangerous ambition that destroyed his own life, and begins to tell his story as a cautionary tale. The letters establish the novel\'s nested narrative structure (Walton frames Victor\'s story, which in turn frames the Creature\'s) and introduce the central themes of ambition, isolation, and the pursuit of forbidden knowledge. Walton\'s desire to "tread a land never before imprinted by the foot of man" directly parallels Victor\'s desire to penetrate the secrets of nature, making Walton a double for Victor and a warning that unchecked ambition is a recurring human failing, not an isolated case.',
    keyQuotes: [
      {
        quote: '"I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man."',
        analysis:
          'Walton\'s language of appetite ("satiate") and conquest ("imprinted by the foot of man") frames exploration as possession and consumption. The desire to go where no one has gone before parallels Victor\'s transgression of natural boundaries and establishes ambition as the novel\'s driving force.',
      },
      {
        quote: '"I desire the company of a man who could sympathise with me, whose eyes would reply to mine."',
        analysis:
          'Walton\'s loneliness foreshadows both Victor\'s self-imposed isolation and the Creature\'s desperate need for companionship. Shelley suggests that the desire for connection is fundamental to human well-being, and that its absence drives people toward dangerous substitutes.',
      },
      {
        quote: '"You seek for knowledge and wisdom, as I once did; and I ardently hope that the gratification of your wishes may not be a serpent to sting you, as mine has been."',
        analysis:
          'Victor\'s warning to Walton uses the biblical image of the serpent, connecting the pursuit of knowledge to the Fall of Man. The word "gratification" suggests that intellectual ambition is a form of desire that, like all desires, can corrupt. This line frames the entire novel as a cautionary tale.',
      },
    ],
    writersMethods: [
      'Epistolary frame narrative: the letters-within-a-story structure creates layers of unreliable narration. The reader receives the Creature\'s story filtered through Victor, filtered through Walton, creating deliberate ambiguity about whose version of events to trust.',
      'Doubling: Walton mirrors Victor, establishing the pattern of doubles that runs through the novel (Victor/Creature, Victor/Walton, Creature/Satan, Creature/Adam). Shelley uses doubling to suggest that the boundary between creator and creature, hero and monster, is unstable.',
      'Foreshadowing: Walton\'s ambition and isolation in the opening letters prefigure every major theme. The Arctic setting -- remote, frozen, lifeless -- symbolises the emotional wasteland that unchecked ambition creates.',
    ],
    themeLinks: [
      'Ambition and the pursuit of knowledge',
      'Isolation and the need for companionship',
      'The danger of transgressing natural boundaries',
    ],
  },
  {
    heading: 'Chapters 1-5: Victor\'s Youth and the Creation',
    subtitle: 'From childhood curiosity to the act of creation',
    summary:
      'Victor narrates his idyllic childhood in Geneva, surrounded by a loving family. He describes his early fascination with the outdated works of Cornelius Agrippa, Paracelsus, and Albertus Magnus -- alchemists who sought the elixir of life. His father dismisses these works as "sad trash," but fails to explain why, leaving Victor\'s dangerous curiosity unchecked. At the University of Ingolstadt, Professor Waldman inspires Victor with the idea that modern chemistry has acquired "new and almost unlimited powers" and can "command the thunders of heaven." Victor becomes obsessed with discovering the principle of life itself. Working alone in his laboratory for months, neglecting his family, his health, and all human contact, he assembles a creature from charnel houses and dissecting rooms. The moment of creation in Chapter 5 is the novel\'s climactic scene: Victor succeeds, but the instant the Creature opens its "dull yellow eye," Victor is overwhelmed with disgust and horror at what he has made. He flees the room, abandoning the newborn Creature to fend for itself. Victor falls into a nervous fever, tended by his friend Henry Clerval, and refuses to acknowledge or take responsibility for his creation. These chapters establish Victor\'s fatal pattern: passionate pursuit followed by immediate rejection of the consequences.',
    keyQuotes: [
      {
        quote: '"So much has been done, exclaimed the soul of Frankenstein -- more, far more, will I achieve: treading in the steps already marked, I will pioneer a new way, explore unknown powers, and unfold to the world the deepest mysteries of creation."',
        analysis:
          'Victor\'s grandiose language ("pioneer," "explore," "unfold") casts himself as a heroic explorer, but the phrase "deepest mysteries of creation" implies trespass into God\'s domain. The exclamatory syntax and self-referential "soul of Frankenstein" reveal dangerous narcissism.',
      },
      {
        quote: '"I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet."',
        analysis:
          'The language dehumanises the Creature before it even lives: "lifeless thing" and "at my feet" establish a hierarchy of contempt. "Infuse a spark of being" echoes both Promethean fire-theft and galvanic experiments of the period, grounding the Gothic horror in contemporary science.',
      },
      {
        quote: '"I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs... I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart."',
        analysis:
          'The creation scene pivots on a single moment of revulsion. "Dull yellow eye" reduces the Creature to a single repulsive detail. The shift from "ardour" to "horror and disgust" mirrors the post-partum abandonment that Shelley, who had lost a baby shortly before writing the novel, understood viscerally. Victor\'s failure of responsibility at this instant drives the entire plot.',
      },
      {
        quote: '"How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?"',
        analysis:
          'Victor calls his creation a "catastrophe" and "wretch" within moments of its birth. The word "delineate" suggests the Creature is already being defined by Victor\'s horror rather than by its own nature. Shelley forces the reader to ask: is the Creature monstrous, or has Victor made it so through rejection?',
      },
    ],
    writersMethods: [
      'Gothic atmosphere: Chapter 5 is set on "a dreary night of November" with "the rain pattering dismally against the panes." Shelley uses pathetic fallacy to externalise Victor\'s psychological horror and to create the quintessential Gothic creation scene.',
      'Allusion to Prometheus: Victor\'s attempt to "infuse a spark of being" directly evokes the Promethean myth (the novel\'s subtitle is "The Modern Prometheus"). Like Prometheus, Victor steals creative power from the gods and suffers terrible consequences.',
      'Irresponsible parenthood: Shelley draws a sustained parallel between creation and parenthood. Victor\'s immediate rejection of his "child" is presented as the originating sin that causes all subsequent suffering, reflecting Shelley\'s engagement with her own mother Mary Wollstonecraft\'s arguments about parental duty.',
    ],
    themeLinks: [
      'Creation and responsibility',
      'Dangerous knowledge and ambition',
      'The sublime power of nature versus human overreach',
      'Parental duty and abandonment',
    ],
  },
  {
    heading: 'Chapter 10: The Creature Speaks',
    subtitle: 'The meeting on the Mer de Glace',
    summary:
      'Victor travels to the Alps seeking consolation in the sublime mountain scenery. On the Mer de Glace glacier near Mont Blanc, the Creature appears and confronts him. Victor reacts with fury and disgust, calling the Creature a "vile insect," a "wretched devil," and an "abhorred monster." The Creature, however, speaks with eloquence, dignity, and moral authority that completely upends the reader\'s expectations. He demands that Victor listen to his story: "I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous." The Creature argues that he has been driven to violence not by inherent evil but by rejection, loneliness, and the cruelty of every human being he has encountered. He invokes his rights as Victor\'s creation: "I am thy creature, and I will be even mild and docile to my natural lord and king if thou wilt also perform thy part, the which thou owest me." This chapter is the pivotal turning point of the novel. Shelley gives the Creature a voice and, through his articulate, reasoned plea, forces both Victor and the reader to reconsider who the real monster is. The sublime Alpine setting reinforces the Creature\'s connection to nature and elevates the confrontation to an almost biblical register, with echoes of Milton\'s Satan addressing God and Adam confronting his creator.',
    keyQuotes: [
      {
        quote: '"I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous."',
        analysis:
          'This is the Creature\'s thesis statement and the novel\'s strongest expression of the nature-versus-nurture debate. "Misery made me a fiend" places responsibility for the Creature\'s crimes squarely on society and on Victor. The conditional offer -- "Make me happy, and I shall again be virtuous" -- is both a plea and a challenge, implying that virtue depends on social conditions, not inherent character.',
      },
      {
        quote: '"I am thy creature, and I will be even mild and docile to my natural lord and king if thou wilt also perform thy part, the which thou owest me."',
        analysis:
          'The Creature frames his relationship with Victor in the language of feudal obligation and divine covenant. "Natural lord and king" echoes Milton\'s Paradise Lost, positioning Victor as a negligent God. The phrase "the which thou owest me" asserts that creation carries an absolute duty of care -- a debt Victor has refused to pay.',
      },
      {
        quote: '"All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things!"',
        analysis:
          'The Creature generalises from his experience to a devastating social observation: society despises those it has harmed. The exclamatory syntax and superlative "beyond all living things" convey a loneliness that is absolute and unique. Shelley invites the reader to feel compassion for the Creature rather than fear.',
      },
      {
        quote: '"Remember that I am thy creature; I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed."',
        analysis:
          'The allusion to Paradise Lost is explicit: the Creature compares himself to both Adam (the innocent first creation) and Satan (the outcast). The crucial phrase is "for no misdeed" -- unlike Milton\'s Satan, the Creature did not rebel. His fall was caused entirely by his creator\'s rejection, making Victor, not the Creature, the source of evil.',
      },
    ],
    writersMethods: [
      'The sublime: Shelley sets the confrontation amid the glaciers and peaks of the Alps, drawing on Edmund Burke\'s aesthetic theory. The sublime landscape -- vast, terrifying, awe-inspiring -- reflects the enormity of the moral questions being raised and dwarfs human concerns.',
      'Shifting sympathy: by giving the Creature the most eloquent and reasonable voice in the novel, Shelley deliberately destabilises the reader\'s allegiance. Victor\'s insults ("vile insect," "abhorred monster") sound petty and irrational against the Creature\'s dignified arguments.',
      'Miltonic allusion: the Creature\'s language throughout this chapter echoes Paradise Lost, which he has read and identified with. Shelley uses Milton to elevate the Creature\'s suffering to a cosmic register and to interrogate the ethics of creation itself.',
    ],
    themeLinks: [
      'Nature vs nurture',
      'Creation and responsibility',
      'Isolation and rejection',
      'Monstrosity -- who is the real monster?',
      'The sublime',
    ],
  },
  {
    heading: 'Chapters 16-17: The Bargain',
    subtitle: 'The Creature\'s demand for a companion',
    summary:
      'The Creature continues his narrative. He describes how, after months of secretly observing and helping the De Lacey family, he finally revealed himself to the blind old man, only to be violently attacked and driven away by Felix. Heartbroken by this final rejection, he declares "everlasting war against the species" and travels to Geneva, where he accidentally encounters Victor\'s young brother William. When William reveals his surname, the Creature strangles him in a rage, then frames the innocent Justine Moritz by planting Victor\'s miniature portrait in her pocket. The Creature feels a brief thrill of power but is immediately consumed by misery. He then makes his central demand to Victor: create a female companion for him. He argues that he has been driven to violence only by loneliness and that a mate would allow them both to withdraw from human society forever. "My vices are the children of a forced solitude that I abhor, and my virtues will necessarily arise when I live in communion with an equal." Victor is initially reluctant but is gradually persuaded by the Creature\'s argument, and the chapter ends with Victor agreeing to the bargain. These chapters crystallise the novel\'s central moral question: does Victor owe the Creature a companion? The Creature\'s argument is powerful -- his violence is a direct product of his isolation -- but the demand itself raises unsettling questions about consent, creation, and whether two outcasts could truly find peace.',
    keyQuotes: [
      {
        quote: '"I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on."',
        analysis:
          'The word "abortion" is devastating -- it means something that should never have been born. The Creature has internalised society\'s rejection so completely that he denies his own right to exist. The passive verbs ("spurned at," "kicked," "trampled on") emphasise his powerlessness and victimhood.',
      },
      {
        quote: '"My vices are the children of a forced solitude that I abhor, and my virtues will necessarily arise when I live in communion with an equal."',
        analysis:
          'The Creature uses the language of Enlightenment philosophy, echoing Rousseau\'s argument that humans are naturally good but corrupted by society. "Children of a forced solitude" personifies his vices as products of environment, not nature. The word "necessarily" is key: virtue, he argues, is not a matter of willpower but of social conditions.',
      },
      {
        quote: '"If I have no ties and no affections, hatred and vice must be my portion."',
        analysis:
          'The Creature presents his moral trajectory as an inevitable consequence of rejection. "Ties and affections" are not luxuries but necessities for moral behaviour. This is Shelley\'s most direct statement of the nature-versus-nurture argument: without love, even a being who was "benevolent and good" will become a "fiend."',
      },
      {
        quote: '"I was the slave, not the master, of an impulse which I detested yet could not disobey."',
        analysis:
          'The Creature describes his murder of William as compulsive rather than deliberate, complicating simple moral judgement. The master/slave imagery reverses the expected power dynamic between creator and creature and suggests that violence, once provoked by total rejection, becomes uncontrollable.',
      },
    ],
    writersMethods: [
      'Persuasive rhetoric: the Creature constructs a logical argument for the female companion that is difficult to refute. Shelley gives his rhetoric the force of Enlightenment reason, forcing the reader to engage intellectually as well as emotionally.',
      'Moral complexity: the Creature is simultaneously sympathetic (his loneliness is agonising) and horrifying (he has murdered a child and framed an innocent woman). Shelley refuses to let the reader settle into a comfortable judgement.',
      'Structural parallel: Victor\'s agreement to the bargain mirrors his original act of creation -- he is once again embarking on a project whose consequences he cannot control, driven by a mixture of guilt, fear, and reluctant compassion.',
    ],
    themeLinks: [
      'Isolation and the need for companionship',
      'Nature vs nurture',
      'Justice and injustice',
      'Creation and responsibility',
      'Monstrosity and prejudice',
    ],
  },
  {
    heading: 'Chapters 20-24: Destruction of the Female and the Pursuit',
    subtitle: 'Victor breaks his promise and the Creature\'s vengeance',
    summary:
      'Victor travels to a remote island in Orkney to construct the female creature, but as he works he is paralysed by doubt. He fears that the female might have "feelings and desires of her own" and refuse to comply with the Creature\'s plan. He fears they might breed and create "a race of devils." Looking up, he sees the Creature watching him through the window with a "ghastly grin." In a moment of horror and revulsion, Victor tears the half-finished female to pieces before the Creature\'s eyes. The Creature, devastated, delivers his most chilling threat: "I shall be with you on your wedding-night." Victor interprets this as a threat to his own life, but the Creature means Elizabeth. Victor disposes of the remains at sea, drifts to Ireland, and is arrested for the murder of Henry Clerval, whom the Creature has strangled. After his acquittal, Victor marries Elizabeth, but on their wedding night the Creature fulfils his promise and murders her. Victor\'s father dies of grief shortly afterwards. Victor, now as isolated and wretched as the Creature, dedicates his remaining life to pursuing the Creature across Europe and into the Arctic, where Walton finds him. The pursuit ends with Victor\'s death aboard Walton\'s ship and the Creature\'s final appearance: he mourns over Victor\'s body, expressing genuine grief and self-loathing, then declares he will travel to the "most northern extremity of the globe" and burn himself on a funeral pyre. These closing chapters complete the cycle of creation, abandonment, revenge, and mutual destruction that defines the novel.',
    keyQuotes: [
      {
        quote: '"She might become ten thousand times more malignant than her mate and delight, for its own sake, in murder and wretchedness."',
        analysis:
          'Victor projects his worst fears onto the unfinished female creature. The phrase "for its own sake" attributes motiveless malice to a being that does not yet exist. Victor\'s reasoning reveals his inability to see his creations as anything other than monsters, repeating the prejudice that caused the Creature\'s suffering in the first place.',
      },
      {
        quote: '"I shall be with you on your wedding-night."',
        analysis:
          'The Creature\'s most famous threat is a masterpiece of ambiguity. Victor interprets it as a promise to kill him; it actually means the Creature will kill Elizabeth. The misunderstanding dramatises Victor\'s fatal self-absorption: even at this moment, he cannot imagine that the Creature\'s vengeance will target someone other than himself.',
      },
      {
        quote: '"In a fit of enthusiastic madness I created a rational creature and was bound towards him to assure, as far as was in my power, his happiness and well-being. This was my duty."',
        analysis:
          'Victor finally acknowledges his parental obligation -- but only to justify destroying the female. The phrase "enthusiastic madness" rewrites his earlier "ardour" as insanity. The admission of "duty" is bitterly ironic: Victor recognises the principle of responsibility only when it serves his decision to deny it.',
      },
      {
        quote: '"You are my creator, but I am your master; -- obey!"',
        analysis:
          'The Creature inverts the creator-creation hierarchy. The dash creates a dramatic pause before the imperative "obey!" The power reversal is complete: by refusing responsibility, Victor has given the Creature absolute power over his life. Shelley suggests that abandoned creations do not disappear -- they return with a vengeance.',
      },
      {
        quote: '"I, the miserable and abandoned, am an abortion, to be spurned at, and kicked, and trampled on."',
        analysis:
          'Repeated from the Creature\'s earlier speech, this line gains devastating weight in its final context. The Creature\'s self-description as an "abortion" -- something that should never have existed -- becomes his epitaph, a final indictment of Victor\'s failure as creator and parent.',
      },
    ],
    writersMethods: [
      'Dramatic irony: Victor\'s misinterpretation of the wedding-night threat creates excruciating suspense. The reader may anticipate the truth before Victor does, making his self-absorption all the more damning.',
      'Mirroring: by the final chapters, Victor and the Creature have become mirror images. Both are isolated, grief-stricken, and consumed by vengeance. Shelley collapses the distinction between creator and creation to suggest that monstrosity is relational, not innate.',
      'The Arctic frame: the pursuit ends where the novel began -- in the frozen Arctic. The circular structure reinforces the sense of inevitability and futility. The ice represents the emotional desolation of both characters: frozen, barren, and devoid of human warmth.',
      'Ambiguous ending: the Creature\'s promise to destroy himself is never witnessed. Shelley leaves the reader uncertain whether the Creature actually dies, introducing a final note of Gothic unease.',
    ],
    themeLinks: [
      'Creation and responsibility',
      'Isolation and mutual destruction',
      'Ambition and its consequences',
      'Monstrosity and humanity',
      'Gender and the female creature',
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FrankensteinChaptersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/frankenstein" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Frankenstein
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              19th-Century Novel
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Key Chapters Analysed
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Frankenstein by Mary Shelley
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Deep analysis of the most important chapters for the exam: key quotations,
            writer&apos;s methods, and theme links for each section of the novel.
          </p>
        </div>
      </section>

      {/* Chapter sections */}
      {CHAPTERS.map((ch, idx) => (
        <section key={idx}>
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="size-5 text-emerald-400" />
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">{ch.heading}</h2>
              <p className="text-body-sm text-muted-foreground">{ch.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Summary &amp; Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{ch.summary}</p>
              </CardContent>
            </Card>

            {/* Key Quotes */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Quote className="size-5 text-violet-400" />
                  <CardTitle className="text-heading-md font-heading">Key Quotations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {ch.keyQuotes.map((q, i) => (
                  <div key={i} className="space-y-1.5">
                    <p className="text-body-md font-medium italic text-foreground">
                      &ldquo;{q.quote.replace(/^"|"$/g, '')}&rdquo;
                    </p>
                    <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Writer's Methods */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="size-5 text-amber-400" />
                  <CardTitle className="text-heading-md font-heading">Writer&apos;s Methods</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-body-sm text-muted-foreground">
                  {ch.writersMethods.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-amber-400" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Theme Links */}
            <div className="flex flex-wrap gap-1.5">
              {ch.themeLinks.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Frankenstein; or, The Modern Prometheus</em> (1818) by Mary Shelley is in the
        public domain. All quotations are reproduced freely.
      </p>
    </div>
  )
}
