import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, FileText, Lightbulb, Quote } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

export const metadata: Metadata = {
  openGraph: {
    title: 'Great Expectations Essay Plans | The English Hub',
    description:
      'Five exam-ready essay plans for Great Expectations by Charles Dickens, covering class, guilt, love, ambition and identity for AQA GCSE English Literature.',
  },
  title: 'Great Expectations Essay Plans | The English Hub',
  description:
    'Five exam-ready essay plans for Great Expectations by Charles Dickens, covering class, guilt, love, ambition and identity for AQA GCSE English Literature.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/great-expectations/essay-plans',
  },
}

type EssayParagraph = {
  pointHeading: string
  topic: string
  quote: string
  analysis: string
  context: string
}

type EssayPlan = {
  id: number
  question: string
  introduction: string
  paragraphs: EssayParagraph[]
  conclusion: string
  examTip: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    id: 1,
    question: 'How does Dickens present ideas about social class in Great Expectations?',
    introduction:
      'Dickens wrote Great Expectations in 1861, at the height of Victorian social stratification, to challenge the assumption that class determines moral worth. Through Pip\'s journey from blacksmith\'s apprentice to London "gentleman" and back, Dickens systematically dismantles the idea that wealth and breeding make a person superior. The novel argues that true gentility lies in conduct — loyalty, compassion and honest labour — rather than in money, manners or social position.',
    paragraphs: [
      {
        pointHeading: 'Class shame is imposed, not innate',
        topic:
          "Dickens shows that Pip's dissatisfaction with his class is not natural but planted by others. Before visiting Satis House, Pip is content at the forge. After meeting Estella, he is consumed by shame about his origins.",
        quote:
          '"He calls the knaves, Jacks, this boy! And what coarse hands he has! And what thick boots!"',
        analysis:
          'Estella reduces Pip to a set of class markers — his vocabulary, his hands, his boots. The tricolon structure ("knaves... hands... boots") creates a relentless accumulation of contempt. The difference between "knaves" and "Jacks" is trivial, yet it carries enormous social power. Dickens exposes how arbitrary these distinctions are: class snobbery is a learned behaviour, taught by Miss Havisham to Estella and now transmitted to Pip.',
        context:
          'Victorian society was rigidly hierarchical. The language you used, the clothes you wore and even the games you played marked your class. Dickens, who experienced poverty as a child in the blacking factory, understood how class shame could be internalised by the vulnerable.',
      },
      {
        pointHeading: 'Gentility is a performance, not an identity',
        topic:
          'Dickens demolishes the fantasy that Pip\'s gentleman status is legitimate by revealing that his money comes from a transported convict. If a convict\'s money can create a "gentleman," then gentility is a costume, not a quality.',
        quote: '"Yes, Pip, dear boy, I\'ve made a gentleman on you! It\'s me wot has done it!"',
        analysis:
          'Magwitch\'s non-standard grammar ("wot," "on you") marks him as lower-class, yet he is the source of Pip\'s genteel life. The irony is devastating: the man who cannot speak like a gentleman has funded one. The verb "made" reduces Pip to a manufactured product — a constructed identity rather than an authentic self. Dickens forces the reader to confront the arbitrary nature of class by showing its machinery exposed.',
        context:
          "The Victorian self-help movement, exemplified by Samuel Smiles's Self-Help (1859), promoted the idea that individuals could rise through hard work. Dickens complicates this by showing that Pip's rise is funded by someone else's labour and that the class system actively prevents genuine mobility for people like Magwitch.",
      },
      {
        pointHeading: 'True worth exists outside the class system',
        topic:
          "Dickens uses Joe Gargery as the novel's moral standard — a man whose worth has nothing to do with wealth, education or social position. Joe is illiterate and socially awkward, but he is the most morally admirable character in the book.",
        quote: '"Pip, dear old chap, life is made of ever so many partings welded together."',
        analysis:
          'Joe uses the language of his trade — "partings welded together" — to express a profound philosophical truth. The metalworking metaphor is both humble and wise: Joe understands that separation is inevitable and must be accepted with grace. His speech demonstrates that moral insight does not require education. Dickens uses Joe\'s forge imagery to suggest that real value is created through honest labour, not through social climbing.',
        context:
          'Dickens places Joe firmly in the tradition of the "noble worker" — a figure who embodies the virtues that the middle and upper classes claim but do not practise. Joe\'s constancy contrasts with the fickleness of characters like Miss Havisham and Compeyson, who have wealth and status but no moral substance.',
      },
    ],
    conclusion:
      "Dickens's critique of class in Great Expectations remains powerful because he attacks the system from every angle: through Pip's corrupted ambition, Magwitch's exposure of gentility as a construction, Joe's quiet demonstration that worth is independent of status, and Compeyson's proof that the law itself is rigged by class. The novel does not argue that class should be ignored — it argues that it should be irrelevant to how we value human beings.",
    examTip:
      'For AQA, always link your analysis to Dickens\'s authorial intentions ("Dickens uses... to show/suggest/argue..."). The examiner wants to see that you understand the novel as a constructed argument, not just a story. Use the word "perhaps" to show you can consider multiple interpretations.',
  },
  {
    id: 2,
    question: 'How does Dickens explore the theme of guilt in Great Expectations?',
    introduction:
      'Guilt is one of the most pervasive emotions in Great Expectations. Dickens presents guilt not as a response to genuine wrongdoing but as a tool of social control: Pip feels guilty for acts of compassion (helping Magwitch), while truly guilty characters (Compeyson, Drummle) feel nothing. The novel argues that Victorian society manufactures guilt in the innocent while protecting the powerful from its consequences.',
    paragraphs: [
      {
        pointHeading: 'Childhood guilt as social control',
        topic:
          'Pip\'s earliest experiences are shaped by guilt imposed on him by Mrs Joe and the adult world. He is made to feel that his very existence is a burden, and when he helps Magwitch by stealing food, his guilt is wildly disproportionate to his "crime."',
        quote:
          '"I was in mortal terror of the young man who wanted my heart and liver; I was in mortal terror of my interlocutor with the ironed leg; I was in mortal terror of myself, from whom an awful promise had been extracted."',
        analysis:
          'The triple repetition of "I was in mortal terror" creates a claustrophobic sense of fear closing in from every direction. Crucially, the third terror is of himself — Pip has been made to fear his own capacity for transgression. Dickens shows that guilt is not about what Pip has done but about what society has taught him to feel. The child who shows compassion to a starving man is made to experience himself as a criminal.',
        context:
          'Victorian children were expected to be obedient and deferential. The Evangelical emphasis on original sin meant that children were often told they were inherently wicked. Dickens, who suffered terribly as a child labourer, consistently attacked the idea that children should be made to feel guilty for existing.',
      },
      {
        pointHeading: 'Guilt follows the innocent, not the guilty',
        topic:
          'Dickens structures the novel so that guilt attaches to the wrong people. Pip carries guilt throughout his life for minor transgressions, while Compeyson — who swindles Miss Havisham and betrays Magwitch — operates without remorse.',
        quote:
          '"I do not recall that I felt any tenderness of conscience in reference to Mrs Joe, when the fear of being found out was lifted off me."',
        analysis:
          "The adult Pip admits, with characteristic honesty, that his guilt about stealing was really fear of punishment, not moral awareness. Dickens distinguishes between genuine conscience and socialised fear: Pip's guilt is manufactured by a punitive upbringing, not by moral sensitivity. The retrospective narration allows Dickens to critique his younger self while also critiquing the system that shaped him.",
        context:
          'The Victorian penal system was built on deterrence through fear rather than rehabilitation. Dickens, a lifelong campaigner for prison reform, argued that punishment without compassion creates criminals rather than preventing crime.',
      },
      {
        pointHeading: 'Guilt as a path to moral growth',
        topic:
          "While Dickens critiques manufactured guilt, he also shows that genuine guilt — the kind that comes from honest self-examination — can be redemptive. Pip's guilt about his treatment of Joe eventually drives his moral reformation.",
        quote: '"It is a most miserable thing to feel ashamed of home."',
        analysis:
          'This is the adult narrator judging his younger self with painful clarity. The word "miserable" carries both its modern meaning (unhappy) and its older meaning (morally wretched). Pip does not excuse his shame — he condemns it. Dickens uses the retrospective voice to show that guilt, honestly confronted, can lead to self-knowledge and moral growth. The simplicity of the sentence — no elaborate imagery, no qualification — gives it the force of a moral verdict.',
        context:
          "Dickens believed in the possibility of redemption — it is the central message of A Christmas Carol and it shapes Great Expectations too. But unlike Scrooge, who changes overnight, Pip's reformation is slow, painful and incomplete, reflecting a more mature understanding of human psychology.",
      },
    ],
    conclusion:
      "Dickens presents guilt in Great Expectations as a complex and often unjust emotion. The guilty go free (Compeyson, Drummle) while the compassionate suffer (Pip, Magwitch). Yet Dickens also shows that guilt, when it stems from genuine self-knowledge rather than social conditioning, can be the beginning of moral recovery. Pip's journey is from manufactured guilt to authentic conscience — from feeling bad about the wrong things to feeling bad about the right things.",
    examTip:
      "When writing about guilt, always distinguish between guilt imposed by others (Mrs Joe, society) and guilt that comes from self-awareness (the adult narrator). This shows the examiner you can handle complexity. Link to Dickens's own childhood experiences for strong contextual marks.",
  },
  {
    id: 3,
    question: "How does Dickens present Pip's relationship with Estella?",
    introduction:
      "Pip's love for Estella is one of literature's great studies in self-destructive passion. Dickens presents it not as a romantic ideal but as a kind of sickness — an obsession rooted in class aspiration rather than genuine connection. Pip loves Estella because she represents everything he has been taught to want: beauty, refinement and social superiority. Estella, raised by Miss Havisham to be incapable of love, is both the object of Pip's desire and the instrument of his punishment.",
    paragraphs: [
      {
        pointHeading: 'Love as class aspiration',
        topic:
          "Pip's love for Estella is inseparable from his desire to rise socially. He does not fall in love with her personality — she is cold, dismissive and explicitly warns him not to love her — but with what she represents: the genteel world of Satis House.",
        quote:
          '"She\'s more beautiful than anybody ever was, and I admire her dreadfully, and I want to be a gentleman on her account."',
        analysis:
          'The word "dreadfully" is revealing: Pip\'s admiration is tinged with dread, not joy. His desire to "be a gentleman on her account" makes explicit the connection between romantic love and social ambition — he wants to become a gentleman not for its own sake but to be worthy of Estella. Dickens shows that in a class-obsessed society, even love becomes transactional: Pip must purchase himself a new identity before he can approach the woman he desires.',
        context:
          'Victorian marriage was deeply entangled with class and economics. Marrying "above one\'s station" was both a fantasy and a social reality — Dickens himself married Catherine Hogarth partly for the social connections her family offered.',
      },
      {
        pointHeading: 'Estella as weapon and victim',
        topic:
          "Dickens presents Estella as both the instrument of Miss Havisham's revenge and its most tragic victim. She is raised to attract and destroy men, but this programming destroys her own capacity for happiness.",
        quote: '"You must know that I have no heart — if that has anything to do with my memory."',
        analysis:
          'Estella\'s self-diagnosis is clinically precise: she identifies her own emotional absence with detached accuracy. The qualifying clause "if that has anything to do with my memory" adds a layer of uncertainty — she is not sure whether her inability to feel is a deficiency or simply a different way of being. Dickens makes her both honest and unknowing: she can describe her condition but cannot feel its horror. The reader feels the tragedy she cannot.',
        context:
          "Miss Havisham's treatment of Estella can be read as emotional abuse. Dickens was interested in how upbringing shapes character — the nature-versus-nurture debate was active in Victorian intellectual life, and Great Expectations is Dickens's most sustained exploration of the question.",
      },
      {
        pointHeading: 'The possibility of redemption through suffering',
        topic:
          'In the revised ending, Dickens allows Estella to acknowledge her own transformation. She has been "bent and broken" by her marriage to Drummle, but this suffering has taught her to feel.',
        quote:
          '"Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but — I hope — into a better shape."',
        analysis:
          'The metaphor of being "bent and broken... into a better shape" draws on the language of metalwork and pottery — crafts that require destruction before creation. The hesitation "I hope" is crucial: Estella is not certain of her own reformation, only hopeful. Dickens avoids a triumphant resolution. The emphasis on "suffering" as a teacher connects Estella\'s arc to Pip\'s: both must be broken before they can be remade. The word "used to be" acknowledges that Pip, too, has changed — his heart is no longer what it was.',
        context:
          'Dickens wrote two endings: in the original, Pip and Estella part permanently; in the revised version, they are reunited ambiguously. The revised ending was written at the suggestion of Bulwer-Lytton, and critics have debated ever since whether it represents artistic compromise or mature hope.',
      },
    ],
    conclusion:
      "Dickens presents Pip and Estella's relationship as a cautionary tale about the intersection of love and class. Pip loves Estella for the wrong reasons, and Estella cannot love at all. Yet the novel also holds open the possibility that suffering can teach what privilege cannot. Whether the revised ending is read as hopeful or bittersweet, Dickens insists that love, to be real, must be earned through self-knowledge and the painful dismantling of illusion.",
    examTip:
      "For a relationship question, always track change over time. Show how the relationship evolves from Pip's initial infatuation (Ch. 8) through Estella's warnings (Ch. 29, 33, 44) to the ambiguous reunion (Ch. 59). The examiner rewards responses that demonstrate understanding of character development across the whole novel.",
  },
  {
    id: 4,
    question:
      "How does Dickens use the character of Magwitch to challenge the reader's assumptions?",
    introduction:
      "Magwitch is the character through whom Dickens most directly confronts the reader's prejudices about class, crime and moral worth. He appears first as a terrifying convict, then vanishes for most of the novel, before returning as the shocking revelation that overturns everything Pip — and the reader — has assumed. Dickens uses Magwitch to argue that the criminal justice system criminalises poverty rather than wickedness, and that genuine moral worth can exist in the people society most despises.",
    paragraphs: [
      {
        pointHeading: 'The convict as victim',
        topic:
          "Dickens carefully constructs Magwitch's backstory to show that he was criminalised by poverty, not by moral deficiency. Magwitch was orphaned, starved and punished for existing before he ever committed a crime.",
        quote:
          '"I was always treated as if I had insisted on being born in opposition to the dictates of reason, religion, and morality."',
        analysis:
          'The elaborate, legalistic phrasing ("in opposition to the dictates of reason, religion, and morality") mimics the language of the courts that condemned Magwitch. He is quoting the system back at itself with devastating irony. The suggestion that he "insisted on being born" makes his very existence a crime — Dickens shows that society punishes the poor for being poor, treating poverty as a moral choice rather than a social condition. The polysyllabic formality contrasts with Magwitch\'s usual rough speech, suggesting he has memorised these words from his own trial.',
        context:
          "The Victorian penal system was notoriously harsh. Transportation to Australia — Magwitch's punishment — was used for offences as minor as theft of food. Dickens campaigned throughout his career for penal reform, arguing that the system created criminals rather than deterring crime.",
      },
      {
        pointHeading: 'The convict as gentleman-maker',
        topic:
          "The revelation that Magwitch is Pip's benefactor forces both Pip and the reader to confront the arbitrary nature of class. If a convict's money can create a gentleman, then the distinction between gentleman and criminal is a matter of funding, not character.",
        quote:
          '"I\'ve come to the old country fur to see my gentleman spend his money like a gentleman. That\'ll be my pleasure."',
        analysis:
          'The repetition of "gentleman" becomes almost satirical: the word has been emptied of meaning by the revelation that gentility can be bought with convict\'s gold. Magwitch\'s possessive pride — "my gentleman" — reveals that he sees Pip as a creation, a trophy, proof that even a despised convict can produce something the world values. Dickens makes the reader uncomfortable: we share Pip\'s instinctive revulsion, and then we must ask ourselves why.',
        context:
          'The idea of the "self-made man" was central to Victorian culture, but Dickens complicates it by showing that Pip is not self-made at all — he is Magwitch-made. The novel challenges the meritocratic myth by revealing that success often depends on hidden systems of patronage and exploitation.',
      },
      {
        pointHeading: 'The convict as moral superior',
        topic:
          'By the end of the novel, Dickens has reversed the moral hierarchy entirely. Magwitch — the convict, the outcast, the man the law says is worthless — demonstrates greater loyalty, generosity and love than any character of higher social standing.',
        quote: '"Dear boy and Pip\'s comrade. You\'re a noble Handel."',
        analysis:
          'Magwitch\'s use of the word "noble" to describe Herbert is deeply significant: he, the man society calls base, is the one who recognises true nobility. His affectionate "dear boy" reveals the genuine love behind his patronage. Dickens forces the reader to accept that moral worth has nothing to do with legal status or social position. Magwitch dies in prison, but he dies loved and at peace — a resolution that the class system would never permit.',
        context:
          'Dickens was influenced by the Romantic tradition that associated virtue with the poor and corruption with the wealthy. But Great Expectations goes beyond simple inversion: Dickens shows that class corrupts everyone it touches, including the well-meaning Pip.',
      },
    ],
    conclusion:
      "Dickens uses Magwitch to systematically dismantle the reader's class prejudices. He begins as a figure of terror, becomes a figure of surprise, and ends as a figure of genuine pathos. His story proves that the Victorian class system is not a natural order but a machine that rewards appearances and punishes those who lack them. Magwitch's final words and peaceful death are Dickens's most powerful argument that human worth is determined by love and loyalty, never by social status.",
    examTip:
      'For a character question, structure your response around how the character develops and what Dickens uses them to argue. Track Magwitch across the novel: terrifying stranger (Ch. 1-5), absent benefactor (implied through Ch. 18-38), shocking revelation (Ch. 39), and dignified death (Ch. 56). Show the examiner that you understand the whole arc.',
  },
  {
    id: 5,
    question:
      'How does Dickens present the idea that identity is shaped by others in Great Expectations?',
    introduction:
      "Great Expectations is fundamentally a novel about how identity is constructed. Pip does not choose who he becomes — he is shaped by Estella's contempt, Miss Havisham's manipulation, Magwitch's ambition, Joe's love and the pressures of Victorian class society. Dickens argues that identity is not innate but built by social forces, and that genuine selfhood can only be achieved through the painful process of recognising and dismantling the false identities others have imposed.",
    paragraphs: [
      {
        pointHeading: 'Others define Pip before he can define himself',
        topic:
          "From the opening chapter, Pip's identity is determined by others. He is named by his sister, defined by his orphan status, and shaped by the expectations that others project onto him.",
        quote:
          '"My father\'s family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip."',
        analysis:
          'The novel\'s opening sentence is an act of identity formation — but a failed one. Pip cannot even pronounce his own name correctly, so he abbreviates himself. The passive construction "came to be called" suggests that his identity is something that happens to him rather than something he creates. Even his name is a diminution — "Pip" is smaller, simpler, less than "Philip Pirrip." Dickens signals from the first line that Pip\'s identity will be shaped by forces beyond his control.',
        context:
          'The Bildungsroman (novel of education/formation) was a popular Victorian genre. Dickens uses and subverts its conventions: where a traditional Bildungsroman shows a hero growing into his true self, Great Expectations shows a hero growing into a false self before painfully recovering his authentic one.',
      },
      {
        pointHeading: 'Social forces construct false identities',
        topic:
          "Pip's \"gentleman\" identity is entirely manufactured — by Magwitch's money, by Jaggers's administration, by London's social conventions. None of it reflects who Pip actually is.",
        quote:
          '"I wished Joe had been rather more genteelly brought up, and then I should have been so too."',
        analysis:
          'Pip wishes for a different upbringing — in effect, he wishes to be a different person. The conditional "should have been" reveals how deeply he has internalised the belief that identity is determined by class. He cannot change Joe, so he wishes Joe had been changed for him. Dickens shows that class ideology distorts not only how we see others but how we see ourselves: Pip has come to believe that his authentic self (the forge, Joe) is his deficient self.',
        context:
          'Victorian society placed enormous emphasis on "breeding" — the idea that character was inherited through family lineage. Dickens challenges this by showing that Pip\'s character is shaped by environment and experience, not by birth.',
      },
      {
        pointHeading: 'Self-knowledge requires dismantling imposed identities',
        topic:
          "Pip can only achieve genuine selfhood once the false identities others have created for him collapse. Magwitch's revelation, the loss of his money, and his illness strip away every constructed layer.",
        quote: '"It is a most miserable thing to feel ashamed of home."',
        analysis:
          'This sentence marks the beginning of Pip\'s authentic self-awareness. The adult narrator looks back on his younger self and delivers a moral verdict in plain, unadorned language. There is no evasion, no excuse-making, no elaborate imagery — just honest self-condemnation. Dickens shows that genuine identity is built through honest self-examination. The word "home" carries enormous weight: it represents not just the forge but Pip\'s authentic origins, the self he rejected in pursuit of a false one.',
        context:
          "The novel was published in serial form in Dickens's own journal, All the Year Round, in 1860-61. The first-person retrospective narration was unusual for Dickens and allows him to explore the gap between who Pip was and who he has become — making identity itself the subject of the narrative.",
      },
    ],
    conclusion:
      'Dickens presents identity in Great Expectations as something constructed by social forces — class, money, upbringing, the expectations of others — rather than something innate. Pip\'s journey is the process of recognising that his "gentleman" identity is a costume and that his authentic self was formed at the forge, in the marshes, in the company of Joe and Biddy. The novel argues that self-knowledge is the hardest and most important form of knowledge, and that it can only be achieved by confronting the false selves that society has built around us.',
    examTip:
      "For a theme-based question on identity, structure your answer around the different identities Pip adopts: forge boy, gentleman, Estella's suitor, Magwitch's creation. Show how each is imposed by others and how Pip must dismantle them to find himself. The retrospective narration is a key technique — the gap between young Pip and adult Pip is itself a commentary on how identity changes over time.",
  },
]

export default async function GreatExpectationsEssayPlansPage() {
  const board = await getServerBoard()
  if (board && board !== 'aqa') {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/great-expectations" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Great Expectations
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              19th-Century Novel
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Essay Plans
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Great Expectations — Charles Dickens
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Five model essay plans for AQA GCSE English Literature, each with a structured
            introduction, three analytical paragraphs with embedded quotation and context, and a
            strong conclusion.
          </p>
        </div>
      </section>

      {/* Essay Plan Cards */}
      <div className="space-y-10">
        {ESSAY_PLANS.map((plan) => (
          <Card key={plan.id} className="overflow-hidden">
            <CardHeader className="border-b border-border/40 bg-muted/30">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">
                  <FileText className="mr-1 size-3" />
                  Essay {plan.id}
                </Badge>
              </div>
              <CardTitle className="text-heading-md font-heading leading-snug">
                {plan.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6 sm:p-8">
              {/* Introduction */}
              <div>
                <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Lightbulb className="size-4 text-clay-600" />
                  Introduction
                </h3>
                <p className="text-body-sm text-muted-foreground">{plan.introduction}</p>
              </div>

              {/* Paragraphs */}
              {plan.paragraphs.map((para, i) => (
                <div
                  key={i}
                  className="space-y-3 rounded-xl border border-border/60 bg-background/50 p-5"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    Paragraph {i + 1}: {para.pointHeading}
                  </h3>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
                      Point
                    </p>
                    <p className="text-body-sm text-muted-foreground">{para.topic}</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-3">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-violet-400">
                      <Quote className="mr-1 inline size-3" />
                      Quotation
                    </p>
                    <p className="text-body-sm font-medium italic text-foreground">{para.quote}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
                      Analysis
                    </p>
                    <p className="text-body-sm text-muted-foreground">{para.analysis}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
                      Context
                    </p>
                    <p className="text-body-sm text-muted-foreground">{para.context}</p>
                  </div>
                </div>
              ))}

              {/* Conclusion */}
              <div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Conclusion</h3>
                <p className="text-body-sm text-muted-foreground">{plan.conclusion}</p>
              </div>

              {/* Exam Tip */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">AQA exam tip</h3>
                <p className="text-body-sm text-muted-foreground">{plan.examTip}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Great Expectations by Charles Dickens (1861) is in the public domain. Quotations are
        reproduced freely as the text is no longer subject to copyright.
      </p>
    </div>
  )
}
