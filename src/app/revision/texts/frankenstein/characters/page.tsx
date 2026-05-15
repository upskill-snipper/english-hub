import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Users, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Frankenstein Characters — Deep Study | The English Hub',
    description:
      'In-depth GCSE character analysis for Frankenstein by Mary Shelley: Victor Frankenstein, The Creature, Robert Walton, Elizabeth Lavenza, Henry Clerval, Justine Moritz, and the De Lacey family.',
  },
  title: 'Frankenstein Characters — Deep Study | The English Hub',
  description:
    'In-depth GCSE character analysis for Frankenstein by Mary Shelley: Victor Frankenstein, The Creature, Robert Walton, Elizabeth Lavenza, Henry Clerval, Justine Moritz, and the De Lacey family.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/frankenstein/characters',
  },
}

// ── Character data ────────────────────────────────────────────────────────────

type CharacterStudy = {
  name: string
  role: string
  analysis: string
  keyQuotes: { quote: string; context: string; analysis: string }[]
  examTip: string
}

const CHARACTERS: CharacterStudy[] = [
  {
    name: 'Victor Frankenstein',
    role: 'Protagonist, narrator, and creator of the Creature',
    analysis:
      'Victor is the novel\'s central figure and its greatest moral failure. Raised in a loving, privileged family in Geneva, he develops an obsessive fascination with the secret of life that drives him to create a living being from dead matter. However, the instant his creation opens its eyes, Victor is overwhelmed by revulsion and abandons it. This single act of parental rejection sets in motion every tragedy in the novel. Victor\'s character embodies the Romantic critique of Enlightenment rationalism: he possesses extraordinary intellect but lacks the emotional and moral wisdom to wield it responsibly. His ambition is inseparable from his narcissism -- he desires not merely to understand nature but to "pour a torrent of light into our dark world," casting himself as a godlike benefactor. Yet when his creation proves imperfect, he feels only disgust and self-pity, never genuine responsibility. Throughout the novel, Victor consistently prioritises his own suffering over the suffering of those he has harmed. He allows Justine to be executed for a murder he knows the Creature committed. He delays creating the female companion, then destroys it, provoking the Creature to murder Elizabeth. Even his final pursuit of the Creature across the Arctic is driven more by vengeance than by justice. Shelley presents Victor as a cautionary figure: brilliant but fatally self-absorbed, a creator who refuses to be a parent.',
    keyQuotes: [
      {
        quote:
          'I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet.',
        context: 'Chapter 5 -- the creation scene',
        analysis:
          'Victor reduces his creation to a "lifeless thing" even before it lives. The phrase "at my feet" establishes a power hierarchy that Victor will immediately flee from the moment the Creature asserts agency. "Spark of being" alludes to both Prometheus and galvanism.',
      },
      {
        quote:
          'I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart.',
        context: 'Chapter 5 -- immediately after creation',
        analysis:
          'The shift from "ardour" to "horror and disgust" is instantaneous. Victor\'s response is aesthetic, not moral: he is repelled by the Creature\'s appearance, not troubled by the ethics of what he has done. Shelley highlights the danger of pursuing a "dream" without considering its real-world consequences.',
      },
      {
        quote:
          'In a fit of enthusiastic madness I created a rational creature and was bound towards him to assure, as far as was in my power, his happiness and well-being. This was my duty.',
        context: "Chapter 24 -- Victor's late admission",
        analysis:
          'Victor finally acknowledges his duty of care, but only in retrospect and only to justify his decision to destroy the female creature. The phrase "enthusiastic madness" rewrites his ambition as insanity, deflecting personal responsibility. His recognition of duty comes too late to prevent any of the novel\'s tragedies.',
      },
    ],
    examTip:
      'When writing about Victor, focus on the gap between what he says and what he does. He claims to feel guilt but never acts on it. This makes him an unreliable narrator whose self-pity the reader should interrogate, not accept.',
  },
  {
    name: 'The Creature',
    role: "Victor's creation, the novel's most complex character",
    analysis:
      'The Creature is Shelley\'s most radical literary achievement: a being who begins life innocent and good but is driven to violence by universal rejection. He is never given a name in the novel, a fact that symbolises his exclusion from human society and identity. Born with the mind of a blank slate (reflecting John Locke\'s theory of the tabula rasa), the Creature learns language, emotion, and morality by secretly observing the De Lacey family. He reads Paradise Lost, Plutarch\'s Lives, and The Sorrows of Young Werther, developing a sophisticated understanding of human values that makes his exclusion from humanity all the more painful. His physical appearance -- eight feet tall, with "yellow skin" that "scarcely covered the work of muscles and arteries beneath" -- provokes immediate horror in every person he encounters, regardless of his actions or intentions. The Creature\'s narrative (Chapters 11-16) is the emotional and philosophical heart of the novel. His eloquence, his capacity for love, and his reasoned arguments about justice and responsibility force the reader to recognise him as more human than monstrous. His turn to violence is presented not as an expression of innate evil but as the inevitable result of total social exclusion. The Creature himself frames it in explicitly philosophical terms: "I was benevolent and good; misery made me a fiend." Shelley uses the Creature to interrogate the concept of monstrosity itself, asking whether it resides in appearance, in action, or in the social conditions that produce violent behaviour.',
    keyQuotes: [
      {
        quote:
          'I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous.',
        context: 'Chapter 10 -- the meeting on the Mer de Glace',
        analysis:
          'The Creature\'s central thesis: moral character is determined by experience, not nature. "Misery made me" uses the passive voice to place responsibility on society. The conditional "Make me happy" is both a plea and an implicit threat, demonstrating the Creature\'s understanding of cause and effect.',
      },
      {
        quote:
          'I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed.',
        context: 'Chapter 10 -- addressing Victor',
        analysis:
          'The allusion to Paradise Lost positions Victor as a negligent God. The crucial phrase "for no misdeed" distinguishes the Creature from Milton\'s Satan: Satan fell through pride and rebellion, but the Creature was cast out despite his innocence. This inverts the expected moral framework and implicates the creator, not the creation.',
      },
      {
        quote:
          'Of my creation and creator I was absolutely ignorant, but I knew that I possessed no money, no friends, no kind of property. I was, besides, endued with a figure hideously deformed and loathsome.',
        context: "Chapter 13 -- the Creature's self-awareness",
        analysis:
          'The Creature catalogues his deprivations with painful clarity. The list "no money, no friends, no kind of property" echoes the language of social contract theory: he possesses none of the things that grant a person standing in society. The final detail -- his appearance -- is presented as an additional injustice rather than a defining characteristic.',
      },
    ],
    examTip:
      'Refer to the character as "the Creature" rather than "the monster" in your essays. This shows critical awareness that Shelley deliberately withholds a name and that "monster" is a label applied by others, not an objective description.',
  },
  {
    name: 'Robert Walton',
    role: 'Arctic explorer, narrator of the frame story',
    analysis:
      "Walton is the novel's third narrator and Victor's most important double. An English explorer driven by an \"ardent curiosity\" and a desire for glory, Walton mirrors Victor's dangerous ambition in a different setting. His letters to his sister Margaret Saville frame the entire narrative and provide the only external perspective on Victor. Walton is lonely, craving \"the company of a man who could sympathise with me,\" and he sees in the dying Victor the ideal companion he has been seeking. This emotional vulnerability makes him a receptive audience for Victor's cautionary tale but also a potentially unreliable transmitter of it: he hero-worships Victor and may be shaping the story accordingly. Walton's most important function is structural and thematic: he represents the reader's position, hearing the story and deciding what to do with its lessons. At the novel's end, Walton faces a choice that mirrors Victor's: his crew demand that he turn the ship back from the ice, abandoning his ambition for their safety. Unlike Victor, Walton relents, suggesting that he has learned from Victor's example. However, the novel leaves it ambiguous whether this is genuine moral growth or merely practical necessity.",
    keyQuotes: [
      {
        quote:
          'I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man.',
        context: 'Letter I -- Walton to Margaret Saville',
        analysis:
          'Walton\'s language of conquest and appetite directly parallels Victor\'s ambition. "Satiate" and "ardent curiosity" frame knowledge-seeking as a hunger, while "imprinted by the foot of man" implies ownership through discovery. Shelley establishes from the first page that this kind of ambition is a pattern, not a one-off aberration.',
      },
      {
        quote:
          'I desire the company of a man who could sympathise with me, whose eyes would reply to mine.',
        context: 'Letter II',
        analysis:
          'Walton\'s loneliness foreshadows the Creature\'s isolation. The intimate detail "whose eyes would reply to mine" suggests a desire for emotional mirroring and recognition -- the very thing the Creature is denied by every human being. Shelley links isolation to ambition: those who pursue extraordinary goals inevitably cut themselves off from ordinary human connection.',
      },
    ],
    examTip:
      "Walton is often overlooked in essays but is essential for understanding the novel's structure. He is the character who must decide whether to heed Victor's warning or repeat his mistakes, making him a figure for the reader themselves.",
  },
  {
    name: 'Elizabeth Lavenza',
    role: "Victor's adopted sister and later his wife",
    analysis:
      "Elizabeth is presented as an ideal of feminine virtue: beautiful, gentle, devoted, and self-sacrificing. She was adopted into the Frankenstein family as a child and raised alongside Victor, who describes her as \"a possession\" given to him by his mother. This disturbing language of ownership reveals the patriarchal framework within which Elizabeth exists. She has no independent story arc; her role in the novel is entirely defined by her relationships with Victor and with the Frankenstein family. She writes letters urging Victor to return home, tends to the family during crises, and pleads for Justine's innocence, but she is never given agency over the novel's central events. Her murder on her wedding night by the Creature is the culmination of this objectification: she dies as a consequence of Victor's actions, a pawn in the conflict between creator and creation. Some critics read Elizabeth as Shelley's critique of the limited roles available to women in Romantic-era society. Others see her passivity as a structural weakness in the novel. Either way, her death is significant because it demonstrates the collateral damage caused by male ambition: Elizabeth is destroyed not by anything she has done but by Victor's refusal to take responsibility for his creation.",
    keyQuotes: [
      {
        quote: 'I have a pretty present for my Victor -- tomorrow he shall have it.',
        context: "Chapter 1 -- Victor's mother presenting Elizabeth to him as a child",
        analysis:
          'Elizabeth is introduced as a "present" -- an object to be given. This language of possession runs through Victor\'s entire description of Elizabeth and reflects the commodification of women in the early nineteenth century. Shelley draws attention to the power imbalance from the very beginning.',
      },
      {
        quote: 'She was the living spirit of love to soften and attract.',
        context: 'Chapter 1 -- Victor describing Elizabeth',
        analysis:
          'Elizabeth is defined entirely through her emotional function for others: she exists to "soften and attract." The description reduces her to a civilising influence rather than an autonomous person, reflecting Mary Wollstonecraft\'s critique (in A Vindication of the Rights of Woman) of women being valued only for their appearance and emotional labour.',
      },
    ],
    examTip:
      "Consider Elizabeth's role in terms of gender politics. You can argue that Shelley uses Elizabeth to expose how women are treated as possessions in a patriarchal society, or you can discuss how her passivity contrasts with the active ambition of the male characters.",
  },
  {
    name: 'Henry Clerval',
    role: "Victor's closest friend",
    analysis:
      "Henry Clerval serves as Victor's moral counterpart. Where Victor is drawn to the dangerous, solitary pursuit of scientific power, Clerval is interested in languages, literature, and \"the moral relations of things.\" He represents the humanistic, empathetic approach to knowledge that Victor has rejected. Clerval is consistently associated with warmth, companionship, and emotional health: he nurses Victor back to health after the creation, and his presence restores Victor's connection to the natural world and to human feeling. Shelley uses Clerval to show what Victor could have been had he not surrendered to his obsession. Clerval's murder by the Creature in Chapter 21 is particularly devastating because it destroys the one person capable of redeeming Victor's humanity. After Clerval's death, Victor becomes increasingly isolated, obsessive, and vengeful -- indistinguishable, in many ways, from the Creature. The parallels between Clerval and the Creature are also significant: both value human connection above all else, and both are destroyed by Victor's ambition.",
    keyQuotes: [
      {
        quote:
          'He was a boy of singular talent and fancy... deeply read in books of chivalry and romance... he composed heroic songs and began to write many a tale of enchantment and knightly adventure.',
        context: "Chapter 2 -- Victor describing Clerval's interests",
        analysis:
          'Clerval\'s love of "chivalry and romance" contrasts sharply with Victor\'s fascination with Agrippa and the alchemists. Where Victor seeks power over nature, Clerval seeks to understand human emotion and moral virtue. Shelley positions the humanities as the antidote to the dangerous ambition of unchecked science.',
      },
      {
        quote:
          'Clerval! Beloved friend! Even now it delights me to record your words and to dwell on the praise of which you are so eminently deserving.',
        context: 'Chapter 18 -- Victor reflecting on Clerval',
        analysis:
          "Victor's praise of Clerval is genuine but also self-serving: by celebrating Clerval's virtues, Victor implicitly measures the distance between what he is and what he should have been. The exclamatory, elegiac tone anticipates Clerval's death and Victor's guilt.",
      },
    ],
    examTip:
      'Clerval is a foil to Victor. Use him to show how Shelley contrasts scientific ambition with humanistic values. Every positive quality Clerval possesses is one that Victor has sacrificed in his pursuit of the secret of life.',
  },
  {
    name: 'Justine Moritz',
    role: 'Servant in the Frankenstein household, wrongly executed',
    analysis:
      "Justine is one of the novel's most tragic figures. A kind, loyal servant who has been virtually adopted by the Frankenstein family, she is framed for the murder of William when the Creature plants Victor's miniature portrait in her pocket. Despite her obvious innocence, Justine is convicted and executed. What makes her death especially damning is Victor's silence: he knows the Creature is responsible but says nothing, fearing that no one would believe his story. Justine's execution exposes the failure of every system of justice in the novel -- legal, moral, and familial. The court convicts an innocent woman on circumstantial evidence; Victor, who possesses the truth, is too cowardly to speak; and the Creature, who committed the crime, has been driven to it by a society that refused him any place. Justine herself is dignified in death, forgiving those who have wronged her. Shelley uses her to demonstrate the real human cost of Victor's irresponsibility: innocent people die because he will not face the consequences of what he has created.",
    keyQuotes: [
      {
        quote:
          'I confessed, that I might obtain absolution; but now that falsehood lies heavier at my heart than all my other sins.',
        context: 'Chapter 8 -- Justine before her execution',
        analysis:
          'Justine was coerced into a false confession by her priest, who threatened her with excommunication. Her recognition that the false confession is worse than any other sin highlights the corruption of religious authority and the impossibility of justice in a world where truth is suppressed. Shelley critiques institutional power alongside individual irresponsibility.',
      },
    ],
    examTip:
      "Justine's execution is a key moment for the theme of justice. It shows how Victor's cowardice creates victims beyond the Creature's direct actions and implicates the entire social order in the production of injustice.",
  },
  {
    name: 'The De Lacey Family',
    role: 'The cottagers whom the Creature secretly observes',
    analysis:
      "The De Lacey family -- the blind father, his son Felix, his daughter Agatha, and Felix's beloved Safie -- represent the possibility of human kindness that the Creature longs for but can never access. By observing them through a chink in the wall, the Creature learns language, emotion, and the principles of social life. He comes to love the family and secretly helps them by gathering firewood and clearing snow. The De Laceys are themselves exiles, having been unjustly stripped of their wealth after Felix helped Safie's father escape from prison. Their own experience of injustice and displacement should make them sympathetic to the Creature's plight, which is why his rejection by Felix is so devastating. When the Creature reveals himself to the blind old man, De Lacey responds with warmth and compassion. But the moment Felix sees the Creature, he attacks him violently, and the family abandons the cottage forever. This scene is the turning point of the Creature's moral development: if even the kindest, most marginalised humans reject him on sight, then there is no place for him in human society. The De Laceys embody Shelley's argument that prejudice based on appearance overrides all other virtues, and that even good people are capable of monstrous cruelty when confronted with difference.",
    keyQuotes: [
      {
        quote:
          'The more I saw of them, the greater became my desire to claim their protection and kindness; my heart yearned to be known and loved by these amiable creatures.',
        context: 'Chapter 12 -- the Creature watching the De Laceys',
        analysis:
          'The Creature\'s "yearning" is presented as a fundamental human need: to be "known and loved." The word "creatures" is significant -- the Creature uses the same word for the De Laceys that Victor uses for him, collapsing the distinction between human and non-human. His desire for recognition is the same desire that drives Walton and Victor.',
      },
      {
        quote:
          'Felix darted forward, and with supernatural force tore me from his father, to whose knees I clung; in a transport of fury, he dashed me to the ground and struck me violently with a stick.',
        context: "Chapter 15 -- the Creature's rejection",
        analysis:
          'The violence of Felix\'s reaction is disproportionate and instinctive. Ironically, Felix displays "supernatural force" -- the same adjective usually applied to the Creature -- suggesting that in this moment, the human is the one behaving monstrously. The Creature clings to De Lacey\'s knees in a posture of supplication, emphasising his vulnerability and innocence.',
      },
    ],
    examTip:
      "The De Lacey episode is essential for the nature-versus-nurture theme. It demonstrates that the Creature's capacity for goodness is real but that society destroys it through prejudice. Use it to argue that monstrosity is socially constructed.",
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FrankensteinCharactersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Frankenstein', url: 'https://theenglishhub.app/revision/texts/frankenstein' },
          {
            name: 'Characters',
            url: 'https://theenglishhub.app/revision/texts/frankenstein/characters',
          },
        ]}
      />
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
              <Users className="mr-1 size-3 text-emerald-400" />
              Character Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Characters — Deep Study
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Frankenstein by Mary Shelley</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Detailed analysis of every major character with key quotations, contextual links, and
            exam tips for top-grade responses.
          </p>
        </div>
      </section>

      {/* Characters */}
      {CHARACTERS.map((ch) => (
        <section key={ch.name}>
          <div className="mb-5 flex items-center gap-3">
            <Users className="size-5 text-emerald-400" />
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">{ch.name}</h2>
              <p className="text-body-sm text-muted-foreground">{ch.role}</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{ch.analysis}</p>
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
              <CardContent className="space-y-5">
                {ch.keyQuotes.map((q, i) => (
                  <div key={i} className="space-y-1.5">
                    <p className="text-body-md font-medium italic text-foreground">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <p className="text-caption uppercase tracking-wide text-primary">{q.context}</p>
                    <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Exam tip */}
            <Card className="bg-primary/5">
              <CardContent className="p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Exam tip</p>
                <p className="text-body-sm text-muted-foreground">{ch.examTip}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Footer */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Frankenstein; or, The Modern Prometheus</em> (1818) by Mary Shelley is in the public
        domain. All quotations are reproduced freely.
      </p>
    </div>
  )
}
