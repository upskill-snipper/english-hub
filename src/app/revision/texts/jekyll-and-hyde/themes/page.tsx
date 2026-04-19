'use client'

import Link from 'next/link'
import { ArrowLeft, Lightbulb, Quote, BookOpen } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ─── Types ──────────────────────────────────────────────────── */

type ThemeStudy = {
  title: string
  overview: string
  detailed: string
  keyQuotes: { quote: string; speaker: string; analysis: string }[]
  contextLink: string
  essayTip: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const THEMES: ThemeStudy[] = [
  {
    title: 'Duality of Man',
    overview:
      'The central theme: every human being contains both good and evil. Jekyll\'s experiment attempts to separate the two, with catastrophic results.',
    detailed:
      'Jekyll describes man as "not truly one, but truly two," and goes even further to speculate that we are "a mere polity of multifarious, incongruous and independent denizens" -- multiple warring selves rather than a unified identity. His experiment is an attempt to resolve this internal conflict by giving each side its own body. Stevenson argues that duality is not a flaw to be cured but a fundamental condition of being human. The horror arises not from Hyde\'s existence but from Jekyll\'s belief that he can neatly divide the self, when in reality the two sides are inseparable. The novella\'s structure itself embodies duality: the first eight chapters are a third-person detective mystery; the final two are first-person confessions. Jekyll\'s house has a respectable front entrance and a sinister back door; London is split between fog-shrouded streets and well-lit drawing rooms. Every element of the text mirrors the theme. Stevenson ultimately warns that denying one half of our nature -- as Victorian society demanded -- only makes it more dangerous. Repression does not eliminate the dark side; it concentrates and distorts it.',
    keyQuotes: [
      {
        quote: 'Man is not truly one, but truly two.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Jekyll\'s central thesis, delivered with the force of a scientific axiom. The declarative structure ("not... but") presents duality as fact, not theory. Yet Jekyll then speculates that man may be "truly" multiple selves, suggesting that identity is even more fragmented than a simple binary.',
      },
      {
        quote: 'I learned to recognise the thorough and primitive duality of man.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'The word "primitive" makes duality primal and ancient -- it predates civilisation and cannot be civilised away. "Thorough" means complete: there is no aspect of human nature untouched by this division. Stevenson anticipates Freud\'s later theories about the unconscious.',
      },
      {
        quote: 'I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Passive constructions ("losing hold," "becoming incorporated") suggest the process has become involuntary. The repetition of "slowly" creates a creeping rhythm that mirrors the gradual takeover. Jekyll is no longer choosing Hyde; Hyde is consuming Jekyll.',
      },
    ],
    contextLink:
      'Darwin\'s On the Origin of Species (1859) had challenged the idea that humans were created by God and distinct from animals. The fear that a beast lurked beneath the civilised surface was widespread in Victorian culture. Stevenson\'s novella dramatises this anxiety: Hyde is the animal within the gentleman, the evolutionary past erupting into the civilised present.',
    essayTip:
      'When writing about duality, go beyond the obvious Jekyll/Hyde split. Show how duality operates at every level: the setting (front door vs back door), the structure (mystery vs confession), and even minor characters (Utterson\'s "rugged countenance" concealing genuine warmth). This demonstrates structural analysis.',
  },
  {
    title: 'Repression and Victorian Society',
    overview:
      'Victorian gentlemen were expected to suppress all base desires behind a mask of respectability. Stevenson argues that this repression creates the very monstrosity it fears.',
    detailed:
      'The novella is populated entirely by respectable, repressed gentlemen. Utterson is "lean, long, dusty, dreary" and drinks gin to "mortify a taste for vintages." Jekyll describes his "imperious desire" for pleasure and the "morbid sense of shame" that accompanies it. Even Enfield instinctively suppresses disturbing information ("the more it looks like Queer Street, the less I ask"). Stevenson presents Victorian respectability not as genuine virtue but as performance: these men have learned to hide their desires rather than examine them. Jekyll\'s experiment is the logical extreme of this culture. Rather than integrating his darker impulses into a healthy whole, he tries to quarantine them in a separate body. The result is Hyde: pure, concentrated evil, unrestrained by conscience or social convention. Stevenson\'s argument is that repression does not work. The "certain impatient gaiety of disposition" that Jekyll confesses to feeling is not inherently evil -- it is a normal range of human desire. By forcing such desires underground, Victorian society ensures they emerge in distorted and dangerous forms. The novella is a critique of hypocrisy at the social level: the gentlemen who maintain spotless public reputations are the same men who harbour private secrets they will go to extraordinary lengths to conceal.',
    keyQuotes: [
      {
        quote: 'I concealed my pleasures; and... when I reached years of reflection... I stood already committed to a profound duplicity of life.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Jekyll admits that concealment -- not pleasure itself -- was his defining behaviour. "Profound duplicity" indicts not only Jekyll but the entire social system that taught him to hide his desires. Stevenson shows that hypocrisy is systemic, not individual.',
      },
      {
        quote: 'Many a man would have even blazoned such irregularities as I was guilty of; but from the high views that I had set before me, I regarded and hid them with an almost morbid sense of shame.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Jekyll\'s "irregularities" are never specified -- Stevenson deliberately leaves them vague, forcing the reader to imagine the worst. "Morbid sense of shame" connects shame itself to illness. The irony is that Jekyll\'s "high views" produce, not prevent, his downfall.',
      },
      {
        quote: 'No sir, I make it a rule of mine: the more it looks like Queer Street, the less I ask.',
        speaker: 'Enfield -- Chapter 1',
        analysis:
          'Enfield\'s "rule" of deliberate ignorance embodies the culture of silence. "Queer Street" (Victorian slang for trouble) is precisely where questions are most needed, yet the code demands silence. Stevenson shows how this self-imposed blindness enables evil to flourish.',
      },
    ],
    contextLink:
      'Victorian London was a city of stark contrasts. Wealthy gentlemen frequented the same neighbourhoods as opium dens and prostitutes. The "double life" was not merely a literary conceit but a documented social phenomenon. Oscar Wilde\'s trials (1895, nine years after the novella) exposed the gap between public respectability and private conduct at the highest levels of society.',
    essayTip:
      'Always connect repression to the theme of duality. Show that Jekyll\'s experiment is not just a scientific failure but a social one: he tries to separate his desires because society has taught him they are shameful. This positions the novella as a critique of Victorian culture, not just a Gothic horror story.',
  },
  {
    title: 'Science and Morality',
    overview:
      'Jekyll\'s experiment raises the question: just because science can do something, should it? Stevenson presents unregulated science as dangerously amoral.',
    detailed:
      'Jekyll is a man of science who crosses a boundary that his colleague Lanyon dismisses as "unscientific balderdash." The disagreement between them represents a fundamental split in Victorian attitudes to knowledge. Lanyon represents cautious, empirical science that stays within established frameworks; Jekyll represents the Romantic, ambitious strain that pushes into forbidden territory. Stevenson does not condemn science itself, but he insists that science without moral reflection is catastrophically dangerous. Jekyll\'s experiment succeeds technically -- the potion works -- but it fails ethically because he never considers whether separating human nature is right, only whether it is possible. The scientific process in the novella is also presented as dangerously solitary. Jekyll works alone, in secret, without peer review or ethical oversight. His isolation mirrors Victor Frankenstein\'s (a text Stevenson knew well), and the result is the same: an uncontrolled creation that destroys its creator. The fact that the crucial ingredient runs out because of an unknown impurity in the original salt adds a note of absurd contingency: the greatest ethical crisis in the novella hinges on a chemical accident.',
    keyQuotes: [
      {
        quote: 'I hesitated long before I put this theory to the test of practice.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Jekyll acknowledges hesitation but ultimately proceeds anyway. "Theory" versus "practice" marks the critical boundary between thinking about evil and enacting it. His hesitation shows he recognised the danger, making his decision to continue more morally culpable, not less.',
      },
      {
        quote: 'The temptation of a discovery so singular and profound at last overcame the suggestions of alarm.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'The language of "temptation" and "overcoming" moral "alarm" frames the scientific decision in religious terms. Jekyll is a secular Eve, unable to resist the forbidden fruit of knowledge. Stevenson suggests that unrestrained curiosity is itself a form of sin.',
      },
      {
        quote: 'It was on the moral side, and in my own person, that I learned to recognise the thorough and primitive duality of man.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Jekyll claims his discovery was moral, not scientific -- about the nature of the self, not the nature of chemistry. Yet he treats it as a scientific problem with a chemical solution. This category error is the root of his failure: he applies a scientific method to a moral question.',
      },
    ],
    contextLink:
      'The late Victorian era saw explosive advances in science -- Darwin\'s evolution, Pasteur\'s germ theory, developments in chemistry and physics. But these advances also provoked anxiety about "playing God." Stevenson\'s novella joins Mary Shelley\'s Frankenstein and H.G. Wells\'s The Island of Doctor Moreau in a literary tradition questioning whether scientific progress without ethical boundaries leads to disaster.',
    essayTip:
      'Distinguish between science and morality in Jekyll\'s experiment. He is a brilliant scientist who asks "can I?" without asking "should I?" This distinction is the key to analysing Stevenson\'s critique of Victorian scientific ambition.',
  },
  {
    title: 'Good vs Evil',
    overview:
      'Hyde embodies pure, undiluted evil. But Stevenson complicates a simple moral reading: Jekyll is not purely good, and evil is presented as seductive, not merely repulsive.',
    detailed:
      'Hyde is pure malice: he tramples a child, murders an old man, and feels no remorse. He represents evil stripped of social restraint. Yet Stevenson complicates the picture. Jekyll is not purely good -- he admits to "a certain impatient gaiety of disposition" and confesses that he enjoyed the freedom Hyde gave him. The first transformation feels "incredibly sweet": evil is experienced as liberation, not horror. This is Stevenson\'s most disturbing insight: evil is attractive. Hyde feels "younger, lighter, happier" than Jekyll because he is unburdened by conscience. The novella asks whether goodness maintained only by repression is genuine goodness at all. Jekyll\'s "good" side is not naturally virtuous but socially constrained -- he is good because he fears shame, not because he loves virtue. When the constraint is removed, he revels in evil. Stevenson argues that the line between good and evil runs through every individual, not between individuals. The respectable gentlemen of the novella are not the opposite of Hyde; they are his hiding place.',
    keyQuotes: [
      {
        quote: 'All human beings, as we meet them, are commingled out of good and evil.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Jekyll\'s statement is both a philosophical truth and an unintended self-indictment. "Commingled" means thoroughly mixed -- the two cannot be separated, which is precisely what his experiment fatally attempts. The universal claim ("all human beings") extends the novella\'s argument beyond Jekyll to encompass the reader.',
      },
      {
        quote: 'I felt younger, lighter, happier in body; within I was conscious of a heady recklessness, a current of disordered sensual images running like a mill-race in my fancy.',
        speaker: 'Jekyll as Hyde -- Chapter 10',
        analysis:
          'The first transformation is described in positive, even exhilarating terms. Evil feels good. "Heady recklessness" suggests intoxication; "sensual images running like a mill-race" conveys wild, uncontrollable pleasure. Stevenson makes evil seductive to explain why it is so hard to resist.',
      },
      {
        quote: 'The pleasures which I made haste to seek in my disguise were, as I have said, undignified; I would scarce use a harder term.',
        speaker: 'Jekyll -- Chapter 10',
        analysis:
          'Jekyll euphemises his sins as merely "undignified." The vagueness is strategic: Stevenson forces the reader to imagine the worst. "I would scarce use a harder term" is either genuine self-assessment or self-deceptive minimisation. The ambiguity is deliberate.',
      },
    ],
    contextLink:
      'Victorian Christianity preached a clear division between good and evil, virtue and sin. The evangelical movement emphasised personal morality and the constant battle against temptation. Stevenson\'s novella challenges this binary by showing that good and evil are intertwined within every person, and that the attempt to separate them is the most dangerous act of all.',
    essayTip:
      'Avoid simplistic "Jekyll is good, Hyde is evil" arguments. The best essays show that Jekyll is not purely good -- he enjoys being Hyde and only regrets the loss of control. This complicates the moral framework and demonstrates sophisticated reading.',
  },
  {
    title: 'Secrecy and Silence',
    overview:
      'The novella is structured around secrets: locked doors, sealed letters, private laboratories, and gentlemen who refuse to ask questions.',
    detailed:
      'Every major character in the novella keeps secrets. Jekyll hides his experiment. Utterson suppresses his suspicions. Enfield makes it a rule not to ask questions. Lanyon seals his account in a letter not to be opened until Jekyll\'s death or disappearance. The culture of secrecy is not presented as evil in itself but as a social mechanism that enables evil to flourish. The novella\'s structure replicates this culture of concealment: information is withheld from the reader just as it is withheld by the characters. We learn the truth only in the final two chapters, through posthumous documents. Stevenson embeds the theme in the physical setting too: Jekyll\'s house has a public front and a private back; his laboratory is a locked room; the door Hyde uses has "neither bell nor knocker." Locked doors, sealed envelopes, and private cabinets are the architecture of secrecy. The novella asks whether the Victorian gentleman\'s code of discretion -- which values reputation above truth -- is complicit in the crimes it refuses to investigate. Utterson\'s loyalty to Jekyll is admirable, but it also delays the revelation that might have saved lives.',
    keyQuotes: [
      {
        quote: 'If he be Mr Hyde, I shall be Mr Seek.',
        speaker: 'Utterson -- Chapter 2',
        analysis:
          'The pun encapsulates the novella\'s structure: Hyde hides, and the reader must seek. The children\'s game reference trivialises the search, which is ironic given its deadly stakes. Stevenson uses wordplay to embed the theme of concealment in the very language of the text.',
      },
      {
        quote: 'The door, which was equipped with neither bell nor knocker, was blistered and distained.',
        speaker: 'Narrator -- Chapter 1',
        analysis:
          'The sinister door -- Hyde\'s entrance -- lacks any means of announcing a visitor. It is designed for secrecy, not welcome. "Blistered and distained" suggests moral decay made physical. The door is the novella\'s most potent symbol: a threshold between the respectable and the hidden.',
      },
      {
        quote: 'Let us make a bargain never to refer to this again.',
        speaker: 'Enfield -- Chapter 1',
        analysis:
          'The "bargain" formalises silence as a social contract between gentlemen. "Never" is absolute: disturbing knowledge must be permanently suppressed. Stevenson shows that Victorian discretion is not merely a social courtesy but an active conspiracy to ignore evil.',
      },
    ],
    contextLink:
      'Victorian society placed enormous value on reputation and public appearance. Scandals were career-ending. The male-only social world of the novella (there are virtually no women characters with agency) reflects a homosocial culture where men protected each other\'s secrets as a matter of honour. The Criminal Law Amendment Act of 1885, passed just a year before publication, criminalised certain private behaviours, making secrecy not just a social preference but a legal necessity.',
    essayTip:
      'Show how secrecy operates at every level of the text: character behaviour, narrative structure, and physical setting. The best essays demonstrate that Stevenson does not simply depict secrecy but makes the reader experience it through the novella\'s delayed revelations.',
  },
  {
    title: 'Violence and Respectability',
    overview:
      'Hyde\'s violence shatters the surface of Victorian respectability, revealing the savagery that civilisation conceals.',
    detailed:
      'The two major acts of violence in the novella -- the trampling of the girl and the murder of Sir Danvers Carew -- are positioned against backgrounds of extreme respectability. Hyde tramples the child in a "quiet" street and then enters a "respectable" door to produce a cheque signed by a "well-known" gentleman. Carew is murdered while apparently asking for directions in a "particularly quiet" neighbourhood. Stevenson creates a pattern of violence erupting from calm surfaces, mirroring the central metaphor of Hyde erupting from Jekyll. Hyde\'s violence also escalates, tracking the novella\'s darkening tone. The trampling is cruel but survivable; the Carew murder is savage and fatal. The maid\'s description -- "with ape-like fury, he was trampling his victim underfoot and hailing down a storm of blows" -- connects Hyde to the evolutionary anxiety of the period: the ape within the gentleman. The broken cane, snapping in half from the force of the blows, becomes a physical symbol of civilised restraint shattered by uncontrollable rage. Stevenson argues that violence is not an aberration in Victorian society but a suppressed constant, always present beneath the polished surface.',
    keyQuotes: [
      {
        quote: 'With ape-like fury, he was trampling his victim underfoot and hailing down a storm of blows, under which the bones were audibly shattered.',
        speaker: 'Narrator -- Chapter 4',
        analysis:
          '"Ape-like" connects Hyde to evolutionary regression. "Storm of blows" uses a natural disaster metaphor, presenting violence as an elemental force. "Audibly shattered" forces the reader to hear the violence. Stevenson makes the murder visceral and inescapable.',
      },
      {
        quote: 'The stick... had broken in the middle under the stress of this insensate cruelty.',
        speaker: 'Narrator -- Chapter 4',
        analysis:
          'The cane -- a gentleman\'s accessory -- breaks under the force of uncivilised violence. The symbol is precise: the instrument of respectability is destroyed by the rage it conceals. "Insensate" means senseless, beyond reason -- violence has left the realm of the human.',
      },
      {
        quote: 'He broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on... like a madman.',
        speaker: 'Narrator -- Chapter 4',
        analysis:
          'The metaphor "flame of anger" connects rage to fire -- destructive, consuming, and beyond control. "Stamping" and "brandishing" are physical, primitive actions. "Like a madman" removes Hyde from the category of the rational. Stevenson strips away every civilised veneer to expose pure aggression.',
      },
    ],
    contextLink:
      'Jack the Ripper\'s murders in 1888, two years after the novella\'s publication, eerily echoed Stevenson\'s themes: a seemingly respectable killer operating in the fog-shrouded streets of London. The novella anticipated the era\'s anxiety about who might be hiding behind a civilised exterior. Victorian London was also a place of stark inequality, with violent crime concentrated in impoverished areas that wealthy gentlemen could easily pretend did not exist.',
    essayTip:
      'Link violence to the theme of duality. Show how Stevenson positions every act of violence against a background of calm respectability, creating a structural contrast that mirrors the Jekyll/Hyde relationship. The best essays analyse how Stevenson makes the reader feel the shock of violence erupting from normality.',
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default function JekyllAndHydeThemesPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Dr Jekyll and Mr Hyde", url: "https://theenglishhub.app/revision/texts/jekyll-and-hyde" },
          { name: "Themes", url: "https://theenglishhub.app/revision/texts/jekyll-and-hyde/themes" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Jekyll and Hyde" textType="novella" />

        {/* Hero */}
        <section className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/jekyll-and-hyde" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Jekyll and Hyde
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <Lightbulb className="mr-1 size-3 text-clay-600" />
                Theme Analysis
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                AQA / Edexcel / OCR / Eduqas
              </Badge>
            </div>

            <h1 className="text-display-sm font-heading text-foreground sm:text-display">
              Themes — Deep Study
            </h1>
            <p className="mt-2 text-body-lg text-muted-foreground">
              Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson
            </p>
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              Comprehensive analysis of the six key themes with quotations, contextual
              links, and exam strategies for top-grade responses.
            </p>
          </div>
        </section>

        {/* Themes */}
        <div className="mt-10 space-y-10">
          {THEMES.map((t) => (
            <section key={t.title}>
              <div className="mb-5 flex items-center gap-3">
                <Lightbulb className="size-5 text-clay-600" />
                <div>
                  <h2 className="text-heading-lg font-heading text-foreground">{t.title}</h2>
                  <p className="text-body-sm text-muted-foreground">{t.overview}</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Detailed analysis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">Detailed Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-body-sm text-muted-foreground">
                    <p>{t.detailed}</p>
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
                    {t.keyQuotes.map((q, i) => (
                      <div key={i} className="space-y-1.5">
                        <p className="text-body-md font-medium italic text-foreground">
                          &ldquo;{q.quote}&rdquo;
                        </p>
                        <p className="text-caption uppercase tracking-wide text-primary">
                          {q.speaker}
                        </p>
                        <p className="text-body-sm text-muted-foreground">{q.analysis}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Context link */}
                <Card className="border-l-4 border-l-emerald-400">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="size-4 text-emerald-400" />
                      <p className="text-sm font-semibold text-foreground">Context link</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{t.contextLink}</p>
                  </CardContent>
                </Card>

                {/* Essay tip */}
                <Card className="bg-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="size-4 text-clay-600" />
                      <p className="text-sm font-semibold text-foreground">Essay tip</p>
                    </div>
                    <p className="text-body-sm text-muted-foreground">{t.essayTip}</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          <em>Strange Case of Dr Jekyll and Mr Hyde</em> (1886) by Robert Louis Stevenson
          is in the public domain. All quotations are reproduced freely.
        </p>
      </div>
    </div>
  )
}
