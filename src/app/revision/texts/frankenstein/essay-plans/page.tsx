import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, FileText, Quote, Lightbulb } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Frankenstein Essay Plans — GCSE Revision | The English Hub',
  description:
    'Five model GCSE essay plans for Frankenstein by Mary Shelley covering creation, monstrosity, isolation, ambition, and the Creature as a sympathetic figure.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/frankenstein/essay-plans',
  },
}

// ── Essay plan data ───────────────────────────────────────────────────────────

type Paragraph = {
  pointLabel: string
  point: string
  quote: string
  quoteSource: string
  analysis: string
  contextLink: string
}

type EssayPlan = {
  question: string
  introduction: string
  paragraphs: Paragraph[]
  conclusion: string
}

const ESSAY_PLANS: EssayPlan[] = [
  {
    question: 'How does Shelley present the theme of creation and responsibility in Frankenstein?',
    introduction:
      "In Frankenstein, Mary Shelley presents creation without responsibility as the most dangerous act a person can commit. Through Victor's abandonment of the Creature at the moment of its birth, his refusal to acknowledge his duty of care, and the devastating chain of consequences that follows, Shelley argues that the act of creation -- whether scientific, parental, or divine -- carries an absolute moral obligation that cannot be evaded. The novel draws on the Prometheus myth, Milton's Paradise Lost, and contemporary debates about scientific ethics to construct a powerful indictment of intellectual arrogance detached from moral wisdom.",
    paragraphs: [
      {
        pointLabel: 'Paragraph 1',
        point:
          "Victor's immediate abandonment of the Creature at birth establishes the novel's central moral failure.",
        quote:
          'I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart.',
        quoteSource: 'Victor -- Chapter 5',
        analysis:
          'The pivotal shift from "ardour" to "horror and disgust" dramatises Victor\'s irresponsibility. His response is aesthetic, not moral: he is repelled by what the Creature looks like, not by the ethics of what he has done. The word "dream" is crucial -- Victor pursued an idealised vision and rejected the flawed reality. Shelley, who lost her first child shortly before writing the novel, understood the stakes of parental abandonment. The creation scene can be read as a birth scene in which the parent flees, establishing the pattern of neglect that drives the entire plot.',
        contextLink:
          "Mary Shelley's mother, Mary Wollstonecraft, died giving birth to her. Shelley's own first child died after eleven days. The novel's obsession with failed parenthood reflects these personal experiences and engages with Wollstonecraft's arguments about parental duty in A Vindication of the Rights of Woman.",
      },
      {
        pointLabel: 'Paragraph 2',
        point:
          'The Creature articulates the rights of a creation and the duties of a creator, positioning Victor as a negligent God.',
        quote:
          'I ought to be thy Adam, but I am rather the fallen angel, whom thou drivest from joy for no misdeed.',
        quoteSource: 'The Creature -- Chapter 10',
        analysis:
          'The allusion to Paradise Lost transforms the Creature\'s complaint into a theological argument. Victor is cast as a creator-God who has failed his creation; the Creature should be his "Adam" (innocent, beloved) but has been treated as his Satan (rejected, punished). The phrase "for no misdeed" is the key ethical distinction: Milton\'s Satan fell through pride and rebellion, but the Creature was cast out for the crime of being born. Shelley uses the Miltonic framework to argue that creation without love is worse than no creation at all.',
        contextLink:
          'The novel\'s subtitle, "The Modern Prometheus," connects Victor to the Titan who stole fire from the gods. Shelley draws on both the classical Prometheus myth and its Romantic reinterpretation by her husband Percy Shelley to explore the consequences of transgressing natural limits.',
      },
      {
        pointLabel: 'Paragraph 3',
        point:
          "Victor's late acknowledgement of duty comes too late and is used to justify further irresponsibility.",
        quote:
          'In a fit of enthusiastic madness I created a rational creature and was bound towards him to assure, as far as was in my power, his happiness and well-being. This was my duty.',
        quoteSource: 'Victor -- Chapter 24',
        analysis:
          'Victor finally articulates the principle of parental responsibility, but only in retrospect. "Enthusiastic madness" retroactively reframes his ambition as temporary insanity, deflecting personal culpability. More damningly, Victor uses this acknowledgement of duty to justify destroying the female creature -- arguing that his duty to humanity outweighs his duty to the Creature. Shelley exposes the self-serving nature of Victor\'s moral reasoning: he invokes responsibility only when it serves his decision to deny it.',
        contextLink:
          "The novel was written during a period of rapid scientific advancement. Galvanic experiments and Humphry Davy's lectures on chemistry raised questions about the ethical limits of scientific discovery. Shelley anticipates modern bioethics debates about the responsibilities of scientists toward the consequences of their research.",
      },
    ],
    conclusion:
      "Shelley uses the relationship between Victor and the Creature to argue that creation is the most serious moral act a person can undertake, carrying obligations that cannot be abandoned or delegated. By structuring the novel as a cautionary tale -- filtered through Walton, who faces the same temptation -- Shelley ensures that the question of responsibility is addressed not only to Victor but to the reader. The novel's enduring power lies in its insistence that the act of bringing something into existence, whether a child, a scientific discovery, or an artificial being, demands a lifetime of care.",
  },
  {
    question:
      'How does Shelley use the character of the Creature to explore ideas about monstrosity?',
    introduction:
      'Shelley presents monstrosity as a social construction rather than an inherent quality. Through the Creature\'s narrative -- his innocence at birth, his education through the De Lacey family, and his descent into violence after systematic rejection -- she argues that society creates monsters by refusing to accept difference. The novel\'s central question is not "What makes a monster?" but "Who makes a monster?" -- and the answer, consistently, is Victor and the society he represents.',
    paragraphs: [
      {
        pointLabel: 'Paragraph 1',
        point: 'The Creature is born innocent, undermining the idea that monstrosity is inherent.',
        quote:
          'I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous.',
        quoteSource: 'The Creature -- Chapter 10',
        analysis:
          'The Creature\'s thesis statement divides his moral life into two phases: benevolence before rejection and fiendishness after it. "Misery made me" uses the passive voice to locate responsibility outside himself. The conditional promise "Make me happy, and I shall again be virtuous" implies that moral character is not fixed but responsive to circumstances. Shelley draws on John Locke\'s theory of the tabula rasa: the Creature\'s mind begins as a blank slate, and experience writes upon it. His monstrosity is not born but made.',
        contextLink:
          "Jean-Jacques Rousseau argued that humans are naturally good but corrupted by society. Shelley's parents, Wollstonecraft and Godwin, developed this argument further. The Creature's trajectory from innocence to violence dramatises the Rousseauian position that social exclusion, not inherent evil, produces destructive behaviour.",
      },
      {
        pointLabel: 'Paragraph 2',
        point:
          "Victor's language creates the Creature as a monster before he has done anything monstrous.",
        quote:
          'How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?',
        quoteSource: 'Victor -- Chapter 5',
        analysis:
          'Victor calls his creation a "catastrophe" and "wretch" at the moment of its birth, before it has taken a single action. The word "delineate" means to describe or outline -- the Creature is being defined by Victor\'s disgust rather than by its own nature. Shelley forces the reader to ask whether the Creature is monstrous or whether Victor\'s language and assumptions make it so. This is a key insight for the exam: monstrosity is imposed through discourse, not discovered in nature.',
        contextLink:
          'The pseudo-science of physiognomy, popularised by Lavater in the late eighteenth century, claimed that physical appearance revealed moral character. Shelley challenges this assumption directly: the Creature looks monstrous but is morally superior to Victor in many ways.',
      },
      {
        pointLabel: 'Paragraph 3',
        point:
          "By the novel's end, Victor has become the mirror image of the Creature, collapsing the distinction between man and monster.",
        quote: 'I was hurried away by fury; revenge alone endowed me with strength and composure.',
        quoteSource: 'Victor -- Chapter 24',
        analysis:
          'Victor describes himself in language indistinguishable from the Creature\'s: fury, vengeance, the suppression of all other feeling. The phrase "hurried away" suggests possession rather than agency. Shelley uses the technique of mirroring to show that monstrosity is relational, not fixed: Victor and the Creature have made each other monstrous through the cycle of abandonment, rejection, and revenge. The reader can no longer identify which one is "the monster."',
        contextLink:
          'Gothic literature frequently uses the "double" or doppelganger to explore the darker aspects of human identity. Shelley anticipates Stevenson\'s Jekyll and Hyde (1886) by decades in her use of the creator/creature pair to argue that civilisation and monstrosity are not opposites but two sides of the same coin.',
      },
    ],
    conclusion:
      "Shelley's Frankenstein dismantles the comfortable assumption that monstrosity is something that belongs to others. By giving the Creature the novel's most eloquent and morally coherent voice, and by showing Victor's progressive descent into behaviour that mirrors the Creature's, Shelley argues that monstrosity is produced by social conditions -- by rejection, prejudice, and the refusal to take responsibility for those we have harmed. The novel's enduring challenge to the reader is to recognise that the real monsters are not those who look different but those who refuse to look beyond appearances.",
  },
  {
    question: 'How does Shelley present isolation in Frankenstein?',
    introduction:
      "Shelley presents isolation as both the cause and the consequence of the novel's tragedies. Every major character -- Victor, the Creature, and Walton -- suffers from a profound loneliness that shapes their actions and drives the plot. Through the three nested narratives, Shelley argues that human beings cannot survive without connection, and that ambition pursued in isolation inevitably leads to moral collapse and destruction.",
    paragraphs: [
      {
        pointLabel: 'Paragraph 1',
        point: "Victor's self-imposed isolation during the creation destroys his moral compass.",
        quote:
          'I shunned the face of man; all sound of joy or complacency was torture to me; solitude was my only consolation -- deep, dark, deathlike solitude.',
        quoteSource: 'Victor -- Chapter 9',
        analysis:
          'The triple adjective "deep, dark, deathlike" links solitude to death through alliteration and semantic intensification. Victor\'s isolation is self-imposed but no less destructive for that. "Shunned the face of man" inverts the Creature\'s experience: while the Creature is rejected by others, Victor rejects others voluntarily. Shelley suggests that both forms of isolation produce the same moral desolation -- the inability to feel empathy, to judge one\'s own actions, or to maintain human relationships.',
        contextLink:
          'The Romantic movement celebrated solitude as a source of artistic inspiration (Wordsworth\'s "I wandered lonely as a cloud"), but Shelley presents its dark side. Her husband Percy\'s poem "Alastor" (1816) warns that the poet\'s pursuit of an ideal vision in solitude leads to self-destruction. Frankenstein dramatises this warning on a larger scale.',
      },
      {
        pointLabel: 'Paragraph 2',
        point:
          "The Creature's isolation is forced upon him and transforms him from innocent to violent.",
        quote:
          'All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things!',
        quoteSource: 'The Creature -- Chapter 10',
        analysis:
          'The Creature generalises from his personal experience to a devastating social truth: society does not comfort the wretched but hates them for their wretchedness. The rhetorical question and the superlative "beyond all living things" convey an isolation that is absolute and unprecedented. The Creature is not merely lonely -- he is the only one of his kind, permanently excluded from every form of human community. Shelley uses his isolation to argue that social exclusion is a form of violence that produces further violence in return.',
        contextLink:
          "Shelley was influenced by her father William Godwin's political philosophy, which argued that crime is produced by unjust social conditions rather than inherent wickedness. The Creature's descent into violence after total social exclusion dramatises Godwin's thesis.",
      },
      {
        pointLabel: 'Paragraph 3',
        point:
          "Walton's isolation frames the entire narrative and offers a possible escape from the cycle.",
        quote:
          'I desire the company of a man who could sympathise with me, whose eyes would reply to mine.',
        quoteSource: 'Walton -- Letter II',
        analysis:
          "Walton's loneliness mirrors both Victor's and the Creature's, establishing isolation as a universal condition in the novel. The specific desire for \"eyes that would reply to mine\" expresses the need for recognition and emotional reciprocity. However, Walton's isolation, unlike Victor's or the Creature's, is ultimately resolved: he agrees to turn his ship around at his crew's request, choosing human connection over solitary ambition. Shelley suggests that isolation is not inevitable -- it can be overcome by listening to others and accepting the limits of individual aspiration.",
        contextLink:
          'The Arctic setting functions as a symbol of ultimate isolation: frozen, lifeless, devoid of human civilisation. Shelley uses it to represent the endpoint of unchecked ambition -- a place where nothing grows and no one can survive alone.',
      },
    ],
    conclusion:
      "Shelley uses the novel's three-layered narrative structure to show isolation from three perspectives: the self-imposed isolation of the ambitious creator, the enforced isolation of the rejected outcast, and the chosen isolation of the explorer who may still turn back. By linking all three, she argues that isolation is the root cause of the novel's tragedies: it destroys empathy, enables moral blindness, and transforms otherwise good people into figures capable of terrible acts. The novel's implicit message is that human beings are social creatures who need connection to remain moral, and that any ambition that severs those connections is ultimately self-destructive.",
  },
  {
    question: 'How does Shelley present ambition as dangerous in Frankenstein?',
    introduction:
      "In Frankenstein, Shelley presents ambition as a force that begins as noble aspiration but becomes catastrophic when it overrides moral judgement and human connection. Through Victor's obsessive pursuit of the secret of life and Walton's parallel quest for the North Pole, she argues that ambition without responsibility, empathy, and self-awareness leads inevitably to destruction -- not only of the ambitious individual but of everyone around them.",
    paragraphs: [
      {
        pointLabel: 'Paragraph 1',
        point:
          "Victor's ambition is initially presented in heroic terms, but Shelley embeds warnings that the reader should recognise even if Victor does not.",
        quote:
          'A new species would bless me as its creator and source; many happy and excellent natures would owe their being to me.',
        quoteSource: 'Victor -- Chapter 4',
        analysis:
          'Victor imagines himself worshipped by his creations, casting himself as a benevolent deity. The phrase "bless me as its creator and source" reveals the narcissism beneath the altruism: Victor wants gratitude, not merely to do good. "Owe their being to me" frames creation as a debt relationship, foreshadowing the Creature\'s later demand that Victor "perform thy part, the which thou owest me." Shelley sets up a devastating irony: the "blessing" Victor expects becomes the curse that destroys his life.',
        contextLink:
          'The Romantic period celebrated the genius who transcended ordinary human limitations. Byron, Percy Shelley, and others cultivated an image of the exceptional individual unbound by convention. Mary Shelley challenges this cult of genius by showing its destructive consequences.',
      },
      {
        pointLabel: 'Paragraph 2',
        point: 'Ambition isolates Victor from the people who could have tempered his obsession.',
        quote:
          'I wished, as it were, to procrastinate all that related to my feelings of affection until the great object, which swallowed up every habit of my nature, should be completed.',
        quoteSource: 'Victor -- Chapter 4',
        analysis:
          'The verb "swallowed up" presents ambition as a consuming force, an appetite that devours Victor\'s emotional life. "Procrastinate all that related to my feelings" means deferring love, family, and friendship indefinitely. Shelley argues that ambition that requires the sacrifice of human connection is inherently dangerous: Victor\'s isolation during the creation is the condition that allows him to proceed without moral reflection.',
        contextLink:
          "Humphry Davy's lectures on chemistry, which Shelley read, proclaimed science's power to \"interrogate Nature with power\" and master the natural world. Professor Waldman's seductive lecture in the novel echoes Davy, suggesting that scientific ambition is a cultural phenomenon, not just an individual failing.",
      },
      {
        pointLabel: 'Paragraph 3',
        point:
          'Walton provides a structural parallel and a potential alternative: ambition that can be checked.',
        quote:
          'You seek for knowledge and wisdom, as I once did; and I ardently hope that the gratification of your wishes may not be a serpent to sting you, as mine has been.',
        quoteSource: 'Victor -- Letter IV',
        analysis:
          'Victor warns Walton using the image of the serpent, connecting knowledge to the Fall of Man. "Gratification" frames knowledge-seeking as appetite, something pleasurable that may prove lethal. The warning is also an act of self-awareness: Victor finally sees his own pattern clearly enough to articulate it for someone else. Walton\'s eventual decision to turn back suggests that the cautionary tale has worked, at least for one listener.',
        contextLink:
          "The novel was conceived during the famous ghost-story competition at the Villa Diodati in 1816, surrounded by some of the most ambitious minds of the Romantic era. Shelley's decision to write a cautionary tale about ambition, in the company of Byron and Percy Shelley, is itself a remarkable act of intellectual independence.",
      },
    ],
    conclusion:
      "Shelley structures the entire novel as a warning about ambition: Victor tells his story to Walton so that Walton will not repeat his mistakes. The nested narratives create a chain of transmission -- from Victor to Walton to the reader -- that makes the cautionary message inescapable. Shelley does not condemn ambition outright; Clerval's humanistic ambitions are presented positively, and even Walton's quest is not inherently wrong. What she condemns is ambition pursued without moral wisdom, without accountability, and without the willingness to accept the limits of human power.",
  },
  {
    question: 'To what extent is the Creature presented as a sympathetic figure in Frankenstein?',
    introduction:
      "Shelley constructs the Creature as an overwhelmingly sympathetic figure for most of the novel. Through his eloquent first-person narrative, his capacity for love and moral reasoning, and the relentless cruelty of his treatment by every human he encounters, Shelley challenges the reader's assumptions about monstrosity and forces a recognition that sympathy should be determined by experience and character, not by appearance.",
    paragraphs: [
      {
        pointLabel: 'Paragraph 1',
        point:
          "The Creature's narrative reveals a being of extraordinary sensitivity and a genuine desire for human connection.",
        quote:
          'The more I saw of them, the greater became my desire to claim their protection and kindness; my heart yearned to be known and loved by these amiable creatures.',
        quoteSource: 'The Creature -- Chapter 12',
        analysis:
          'The Creature\'s "yearning" for love is presented as a fundamental need, not a calculated strategy. The word "creatures" is significant: the Creature uses the same word for the De Laceys that others use for him, unconsciously asserting his kinship with humanity. "Known and loved" are not luxuries but psychological necessities -- Shelley, drawing on her parents\' philosophical writings, argues that recognition is the foundation of moral life.',
        contextLink:
          "The Creature's desire for recognition connects to Wollstonecraft's and Godwin's arguments that social exclusion produces moral degradation. His education through observation of the De Laceys echoes Rousseau's Emile, which argues that natural learning produces moral beings.",
      },
      {
        pointLabel: 'Paragraph 2',
        point:
          "The Creature's violence is presented as a response to extreme provocation, not as evidence of inherent evil.",
        quote:
          'My vices are the children of a forced solitude that I abhor, and my virtues will necessarily arise when I live in communion with an equal.',
        quoteSource: 'The Creature -- Chapter 17',
        analysis:
          'The Creature separates his actions from his nature: his "vices" are not innate but produced by circumstances ("forced solitude"). The metaphor "children of" personifies his faults as offspring of his environment, using the language of parenthood that pervades the novel. "Necessarily" insists on a deterministic relationship between social conditions and moral outcomes: give the Creature companionship, and virtue will inevitably follow. Shelley invites the reader to extend sympathy precisely because the Creature\'s violence is explicable, not random.',
        contextLink:
          "Godwin's Enquiry Concerning Political Justice (1793) argued that human character is entirely determined by circumstances. The Creature's argument that his moral nature depends on his social conditions is a direct dramatisation of Godwinian philosophy.",
      },
      {
        pointLabel: 'Paragraph 3',
        point:
          "However, Shelley complicates the reader's sympathy by presenting the Creature's violence in its full horror.",
        quote:
          'I, the miserable and the abandoned, am an abortion, to be spurned at, and kicked, and trampled on.',
        quoteSource: 'The Creature -- Walton in Continuation',
        analysis:
          "Delivered to Walton in the novel's closing scene, the Creature's self-description as an \"abortion\" -- something that should never have existed -- is simultaneously pathetic and disturbing. The reader feels intense sympathy for his suffering, but must also reckon with the fact that he has murdered a child, caused an innocent woman's execution, and killed Victor's closest friend and wife. Shelley does not resolve this tension: the Creature remains sympathetic and horrifying at the same time, forcing the reader to hold both responses simultaneously. This moral complexity is what distinguishes the novel from simpler Gothic horror.",
        contextLink:
          'The Gothic tradition typically presents its monsters as wholly evil. Shelley breaks with this convention by giving the Creature interiority, eloquence, and a moral argument. In doing so, she anticipates modern debates about criminal responsibility, rehabilitation, and the social causes of violence.',
      },
    ],
    conclusion:
      "Shelley presents the Creature as a deeply sympathetic figure whose violence, though real, is explicable as the product of total social exclusion. By giving him the novel's most articulate and morally coherent voice, she challenges the reader to extend sympathy across the boundary of physical difference. However, Shelley does not simplify the question: the Creature's murders are genuine atrocities, and the reader must grapple with the tension between understanding his motives and condemning his actions. This refusal to resolve the moral complexity is what makes Frankenstein a great novel rather than a simple morality tale.",
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function FrankensteinEssayPlansPage() {
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
            name: 'Essay Plans',
            url: 'https://theenglishhub.app/revision/texts/frankenstein/essay-plans',
          },
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
            render={<Link href="/revision/texts/frankenstein" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Frankenstein
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <FileText className="mr-1 size-3 text-blue-400" />
              Essay Plans
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Model Essay Plans
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">Frankenstein by Mary Shelley</p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            Five exam-ready essay plans with introductions, three-paragraph structures, embedded
            quotations, analysis, context, and conclusions.
          </p>
        </div>
      </section>

      {/* Essay Plans */}
      {ESSAY_PLANS.map((plan, idx) => (
        <section key={idx}>
          <div className="mb-5 flex items-center gap-3">
            <FileText className="size-5 text-blue-400" />
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">Essay {idx + 1}</h2>
              <p className="text-body-sm font-medium text-muted-foreground italic">
                &ldquo;{plan.question}&rdquo;
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{plan.introduction}</p>
              </CardContent>
            </Card>

            {/* Paragraphs */}
            {plan.paragraphs.map((para, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-heading-md font-heading">
                    {para.pointLabel}: {para.point}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Quote */}
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <Quote className="mt-0.5 size-4 shrink-0 text-violet-400" />
                      <p className="text-body-md font-medium italic text-foreground">
                        &ldquo;{para.quote}&rdquo;
                      </p>
                    </div>
                    <p className="text-caption uppercase tracking-wide text-primary pl-6">
                      {para.quoteSource}
                    </p>
                  </div>

                  {/* Analysis */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Analysis</p>
                    <p className="text-body-sm text-muted-foreground">{para.analysis}</p>
                  </div>

                  {/* Context */}
                  <div className="rounded-lg border-l-4 border-l-emerald-400 bg-muted/30 p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Context link</p>
                    <p className="text-body-sm text-muted-foreground">{para.contextLink}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Conclusion */}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-heading-md font-heading">Conclusion</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm text-muted-foreground">
                <p>{plan.conclusion}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Exam strategy tip */}
      <section>
        <Card className="border-l-4 border-l-amber-400">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="size-5 text-clay-600" />
              <p className="text-sm font-semibold text-foreground">General exam strategy</p>
            </div>
            <ul className="space-y-2 text-body-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-amber-400" />
                <span>
                  Use short, embedded quotations rather than long block quotes. Weave them into your
                  sentences so they feel like natural evidence, not add-ons.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-amber-400" />
                <span>
                  Always name the writer: say &ldquo;Shelley presents&rdquo; or &ldquo;Shelley
                  uses,&rdquo; not &ldquo;the book says.&rdquo; This shows awareness of authorial
                  intent.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-amber-400" />
                <span>
                  Context should support your argument, not replace it. A brief sentence linking a
                  quotation to Shelley&apos;s life or the Romantic period is more effective than a
                  paragraph of background information.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-amber-400" />
                <span>
                  End each paragraph by linking back to the question. This keeps your argument
                  focused and shows the examiner that every point serves your thesis.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        <em>Frankenstein; or, The Modern Prometheus</em> (1818) by Mary Shelley is in the public
        domain. All quotations are reproduced freely.
      </p>
    </div>
  )
}
