'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Eye, PenLine, Telescope, Sparkles, ScrollText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ── Extract data ────────────────────────────────────────────────────── */

type ExtractLine = {
  number: number
  text: string
}

type WalkthroughChunk = {
  id: string
  heading: string
  lines: string // human-readable line range
  excerpt: string
  notice: string
  say: string
  zoomOut: string
}

// The opening descriptive passage from Stave 1, broken into numbered display
// lines for the line-numbered reading panel. Public domain (Dickens, 1843).
const extractLines: ExtractLine[] = [
  {
    number: 1,
    text: 'Oh! But he was a tight-fisted hand at the grindstone, Scrooge!',
  },
  {
    number: 2,
    text: 'a squeezing, wrenching, grasping, scraping, clutching,',
  },
  {
    number: 3,
    text: 'covetous, old sinner! Hard and sharp as flint, from which',
  },
  {
    number: 4,
    text: 'no steel had ever struck out generous fire; secret, and',
  },
  {
    number: 5,
    text: 'self-contained, and solitary as an oyster. The cold within',
  },
  {
    number: 6,
    text: 'him froze his old features, nipped his pointed nose,',
  },
  {
    number: 7,
    text: 'shrivelled his cheek, stiffened his gait; made his eyes red,',
  },
  {
    number: 8,
    text: 'his thin lips blue; and spoke out shrewdly in his grating',
  },
  {
    number: 9,
    text: 'voice. A frosty rime was on his head, and on his eyebrows,',
  },
  {
    number: 10,
    text: 'and his wiry chin. He carried his own low temperature',
  },
  {
    number: 11,
    text: 'always about with him; he iced his office in the dog-days;',
  },
  {
    number: 12,
    text: "and didn't thaw it one degree at Christmas.",
  },
  {
    number: 13,
    text: 'External heat and cold had little influence on Scrooge.',
  },
  {
    number: 14,
    text: 'No warmth could warm, no wintry weather chill him.',
  },
  {
    number: 15,
    text: 'No wind that blew was bitterer than he, no falling snow',
  },
  {
    number: 16,
    text: 'was more intent upon its purpose, no pelting rain less',
  },
  {
    number: 17,
    text: "open to entreaty. Foul weather didn't know where to have",
  },
  {
    number: 18,
    text: 'him. The heaviest rain, and snow, and hail, and sleet,',
  },
  {
    number: 19,
    text: 'could boast of the advantage over him in only one respect.',
  },
  {
    number: 20,
    text: 'They often "came down" handsomely, and Scrooge never did.',
  },
  {
    number: 21,
    text: 'Nobody ever stopped him in the street to say, with',
  },
  {
    number: 22,
    text: 'gladsome looks, "My dear Scrooge, how are you? When',
  },
  {
    number: 23,
    text: 'will you come to see me?" No beggars implored him to',
  },
  {
    number: 24,
    text: "bestow a trifle, no children asked him what it was o'clock,",
  },
  {
    number: 25,
    text: 'no man or woman ever once in all his life inquired the way',
  },
  {
    number: 26,
    text: "to such and such a place, of Scrooge. Even the blind men's",
  },
  {
    number: 27,
    text: 'dogs appeared to know him; and when they saw him coming',
  },
  {
    number: 28,
    text: 'on, would tug their owners into doorways and up courts;',
  },
  {
    number: 29,
    text: 'and then would wag their tails as though they said, "No',
  },
  {
    number: 30,
    text: 'eye at all is better than an evil eye, dark master!"',
  },
  {
    number: 31,
    text: 'But what did Scrooge care! It was the very thing he liked.',
  },
  {
    number: 32,
    text: 'To edge his way along the crowded paths of life, warning',
  },
  {
    number: 33,
    text: 'all human sympathy to keep its distance, was what the',
  },
  {
    number: 34,
    text: 'knowing ones call "nuts" to Scrooge. Solitary as an oyster.',
  },
]

const walkthrough: WalkthroughChunk[] = [
  {
    id: 'asyndetic-list',
    heading: '1. The asyndetic list of adjectives',
    lines: 'Lines 1-3',
    excerpt: '"a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!"',
    // VERIFIED: Project Gutenberg #46, Stave 1 - list reads "squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!" - five present participles followed by two adjectives ("covetous", "old")
    notice:
      'Dickens piles up five present participles and two adjectives without conjunctions (asyndetic listing). The five "-ing" verbs at the head of the list keep the rhythm relentless and ongoing, and almost every one names an act of physical force or theft: squeezing, wrenching, grasping, scraping, clutching.',
    say: 'Dickens uses an asyndetic list of violent participles to characterise Scrooge as a man defined by perpetual extraction, the breathless rhythm of "squeezing, wrenching, grasping" mimicking the unending, grinding labour of the miser at his "grindstone".',
    zoomOut:
      'In 1843 Dickens was writing in direct response to a parliamentary report on child labour and the lived effects of the 1834 New Poor Law. By opening with a portrait of a man whose entire being is reduced to acts of taking, Dickens establishes Scrooge as an embodiment of laissez-faire capitalism, the very mindset the novella will set out to reform.',
  },
  {
    id: 'flint-simile',
    heading: '2. "Hard and sharp as flint"',
    lines: 'Lines 3-5',
    excerpt:
      '"Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster."',
    notice:
      'Two similes work in tension. Flint is mineral, edged and unyielding; an oyster is sealed and defensive. The phrase "no steel had ever struck out generous fire" extends the flint image and quietly hints at the possibility of fire (warmth, generosity) if only the right pressure were applied.',
    say: 'The paired similes present Scrooge as both weapon and shell: "hard and sharp as flint" suggests a capacity to wound others, while "solitary as an oyster" frames his isolation as self-protective. The conditional "no steel had ever struck out generous fire" subtly foreshadows the spiritual ignition that the three Spirits will eventually achieve.',
    zoomOut:
      "Flint and oyster are both natural, common images that any Victorian reader would understand. By rooting Scrooge's coldness in everyday objects, Dickens implies that this kind of selfishness is not exotic or rare but ordinary, a recognisable feature of the commercial city Dickens saw around him.",
  },
  {
    id: 'pathetic-fallacy',
    heading: '3. The cold within him',
    lines: 'Lines 5-12',
    excerpt:
      '"The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait..."',
    notice:
      'Dickens inverts pathetic fallacy. Normally external weather mirrors a character\'s mood; here, Scrooge\'s inner coldness produces external symptoms. A cumulative list of verbs, "froze... nipped... shrivelled... stiffened... made", physically deforms him. The triadic image "iced his office in the dog-days" pushes the imagery to its logical extreme.',
    say: 'Dickens reverses pathetic fallacy so that Scrooge\'s spiritual coldness physically reshapes him, the verbs "froze", "nipped" and "shrivelled" turning emotional withdrawal into bodily decay; the hyperbolic "iced his office in the dog-days" insists that his miserliness is not seasonal but constitutional.',
    zoomOut:
      "Victorian readers were deeply alert to the moral significance of bodily appearance: physiognomy, the reading of character from the face, was a popular pseudo-science. Dickens uses that cultural assumption to suggest that a closed heart leaves visible traces. The point connects to the wider novella: by Stave 5, Scrooge's body itself laughs and dances, signalling inner reform through outward change.",
  },
  {
    id: 'weather-comparison',
    heading: '4. Worse than the weather',
    lines: 'Lines 13-20',
    excerpt:
      '"No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty."',
    notice:
      'A triple negative-comparative structure ("No wind... no falling snow... no pelting rain...") sets up a parallel grammar that Dickens then closes with a pun: weather "came down" handsomely (in rain or snow), but Scrooge "never did" (never came down with money or kindness).',
    say: 'The anaphoric triplet of negative comparatives elevates Scrooge above the elements themselves, making him bitterer than the wind and less open to entreaty than rain; the closing pun on "came down" undercuts this elemental grandeur with a sly economic joke, reminding readers that his cruelty is, at heart, a refusal to part with money.',
    zoomOut:
      'Charity in Dickens\'s London was largely private and depended on the personal generosity of the wealthy. The pun on "came down" lands sharply because Dickens\'s middle-class readers would recognise the social expectation that those with means should "come down" with a donation. Scrooge represents the failure of that voluntary system, the failure that Dickens believed required moral, not just legal, reform.',
  },
  {
    id: 'social-erasure',
    heading: '5. The empty street',
    lines: 'Lines 21-30',
    excerpt:
      '"Nobody ever stopped him in the street... No beggars implored him to bestow a trifle, no children asked him what it was o\'clock... Even the blind men\'s dogs appeared to know him."',
    notice:
      'A second cluster of negatives ("Nobody... No beggars... no children... no man or woman") catalogues every kind of human exchange Scrooge has lost. Dickens then escalates with the strange comic image of guide dogs steering their blind owners away from him.',
    say: 'Dickens builds a cumulative inventory of social absences, "no beggars", "no children", "no man or woman", to suggest that Scrooge has effectively erased himself from the human community; the surreal detail of the blind men\'s dogs avoiding him grants animals a moral perception sharper than his own, intensifying the reader\'s judgement.',
    zoomOut:
      "For Dickens, the city street is the great moral space, the place where rich and poor, beggar and merchant, child and adult are forced to encounter one another. To be unrecognised in the street is, in Dickens's moral universe, to be spiritually dead. This sets up the contrast with Stave 5, where the reformed Scrooge greets strangers, children and beggars on these very same streets.",
  },
  {
    id: 'oyster-frame',
    heading: '6. "Solitary as an oyster" (return)',
    lines: 'Lines 31-34',
    excerpt:
      '"To edge his way along the crowded paths of life, warning all human sympathy to keep its distance, was what the knowing ones call \'nuts\' to Scrooge. Solitary as an oyster."',
    notice:
      'Dickens closes the passage by repeating the oyster simile from line 5, framing the whole portrait in a structural envelope. The colloquial phrase "nuts to Scrooge" introduces an ironic, almost amused narrator who treats Scrooge\'s self-imposed isolation as a perverse pleasure.',
    say: "The ring composition closes with the oyster simile that opened the passage, reinforcing Scrooge's self-enclosure as the defining feature of his character; the narrator's sardonic register, \"what the knowing ones call 'nuts' to Scrooge\", invites the reader to view his isolation not with pity but with critical distance.",
    zoomOut:
      'The framing simile establishes a structural promise the novella will later keep: an oyster, after all, contains a pearl. Dickens hints from the very first description that something valuable lies hidden inside Scrooge, waiting to be prised open. The reformist purpose of the novella, written in part to advocate for education and welfare for the Victorian poor, depends on that quiet possibility.',
  },
]

/* ── Page ────────────────────────────────────────────────────────────── */

export default function ExtractWalkthroughPage() {
  const t = useT()
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          {
            name: 'Set Texts',
            url: 'https://theenglishhub.app/revision/texts',
          },
          {
            name: 'A Christmas Carol',
            url: 'https://theenglishhub.app/revision/texts/a-christmas-carol',
          },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/a-christmas-carol/extract-walkthrough',
          },
        ]}
      />

      {/* Study Tools */}
      <StudyTools textName="A Christmas Carol" textType="novella" />

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
            {t('rev.texts.acc.back')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <ScrollText className="mr-1 size-3 text-blue-400" />
              {t('rev.texts.acc.extract.badge')}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              AQA / Edexcel / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {t('rev.texts.acc.extract.title')}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {t('rev.texts.acc.extract.byline')}
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            {t('rev.texts.acc.extract.intro')}
          </p>
        </div>
      </section>

      {/* Context */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-heading-md font-heading flex items-center gap-2">
              <BookOpen className="size-5 text-blue-400" />
              {t('rev.texts.acc.extract.where_sits_h')}
            </CardTitle>
            <CardDescription>{t('rev.texts.acc.extract.where_sits_desc')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-body-sm text-muted-foreground">
            <p>
              The passage falls within the first few pages of Stave 1, before the arrival of Fred,
              the charity collectors or Marley's ghost. Dickens has just told us that Scrooge knows
              Marley is dead "as a door-nail" and now turns the narrator's full attention onto the
              living partner. There is no dialogue and no event, only description.
            </p>
            <p>
              The function of the passage is therefore expository: Dickens is establishing the moral
              and emotional baseline against which every later transformation will be measured.
              Almost every image in this opening, coldness, isolation, the closed shell, the
              unstruck flint, will be answered by an inverse image in Stave 5.
            </p>
            <p>
              For exam purposes this extract is unusually generous: it offers clearly labelled
              methods (similes, listing, pathetic fallacy, cumulative negatives) and a tight
              thematic focus (greed, isolation, social responsibility) that maps directly onto the
              most common question stems on Scrooge's character.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* The Extract */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-heading-md font-heading flex items-center gap-2">
              <ScrollText className="size-5 text-violet-400" />
              {t('rev.texts.common.the_extract')}
            </CardTitle>
            <CardDescription>{t('rev.texts.acc.extract.the_extract_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border/60 bg-muted/20 p-4 sm:p-6">
              <ol className="font-serif text-body-md leading-relaxed text-foreground">
                {extractLines.map((line) => (
                  <li key={line.number} className="grid grid-cols-[2.25rem_1fr] gap-3 py-0.5">
                    <span
                      aria-hidden="true"
                      className="select-none text-right font-mono text-xs text-muted-foreground/70 pt-1"
                    >
                      {line.number}
                    </span>
                    <span>{line.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Walkthrough */}
      <section className="space-y-5">
        <div className="mb-2 flex items-center gap-3">
          <Telescope className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('rev.texts.acc.extract.walkthrough_h')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground max-w-3xl">
          {t('rev.texts.acc.extract.walkthrough_intro')}
        </p>

        {walkthrough.map((chunk) => (
          <Card key={chunk.id} id={chunk.id} className="scroll-mt-8">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-heading-md font-heading">{chunk.heading}</CardTitle>
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {chunk.lines}
                </Badge>
              </div>
              <CardDescription className="font-serif italic text-foreground/90">
                {chunk.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-body-sm text-muted-foreground">
              <div className="rounded-lg border-l-4 border-l-blue-400/60 bg-muted/30 p-4">
                <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Eye className="size-4 text-blue-400" />
                  {t('rev.texts.common.notice')}
                </h3>
                <p>{chunk.notice}</p>
              </div>
              <div className="rounded-lg border-l-4 border-l-violet-400/60 bg-muted/30 p-4">
                <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <PenLine className="size-4 text-violet-400" />
                  {t('rev.texts.common.say')}
                </h3>
                <p className="italic text-foreground/90">{chunk.say}</p>
              </div>
              <div className="rounded-lg border-l-4 border-l-clay-500/60 bg-muted/30 p-4">
                <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Telescope className="size-4 text-clay-600" />
                  {t('rev.texts.common.zoom_out')}
                </h3>
                <p>{chunk.zoomOut}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Model paragraph */}
      <section>
        <div className="mb-3 flex items-center gap-3">
          <PenLine className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('rev.texts.common.model_paragraph_h')}
          </h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-heading-md font-heading">
              How does Dickens characterise Scrooge in the opening of Stave 1?
            </CardTitle>
            <CardDescription>{t('rev.texts.acc.extract.model_para_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border-l-4 border-l-primary/40 bg-muted/30 p-5 text-body-md leading-relaxed text-foreground/90">
              <p>
                Dickens characterises Scrooge in the opening of Stave 1 as a man whose entire moral
                being has contracted around the act of accumulation, yet he plants, even in this
                most damning portrait, the conditions of his eventual change. The asyndetic list of
                participles, "squeezing, wrenching, grasping, scraping, clutching, covetous",
                reduces Scrooge to a sequence of extractive verbs, each one an act of taking from
                another; the breathless rhythm enacts the very grinding labour of the "grindstone"
                Dickens compares him to. The simile that follows, "hard and sharp as flint, from
                which no steel had ever struck out generous fire", is more ambivalent than it first
                appears: flint is hard, but flint is also the source of fire, and the conditional
                "had ever" leaves open the possibility that the right pressure, the steel of the
                three Spirits, will yet ignite Scrooge into "generous" warmth. Dickens then inverts
                pathetic fallacy so that Scrooge's inner coldness physically deforms him, "froze his
                old features, nipped his pointed nose, shrivelled his cheek", insisting that
                emotional withdrawal leaves bodily traces a Victorian readership trained in
                physiognomy could not miss. The framing simile, "solitary as an oyster", repeated at
                the end of the passage, seals the portrait while also pointing past it: oysters,
                after all, contain pearls. Written in 1843 against the backdrop of the New Poor Law
                and Dickens's campaign for the education of the poor, this opening is engineered to
                make Scrooge's isolation feel both culpable and curable, the necessary darkness
                against which the novella's reformist hope can shine.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {t('rev.texts.acc.extract.public_domain')}
      </p>
    </div>
  )
}
