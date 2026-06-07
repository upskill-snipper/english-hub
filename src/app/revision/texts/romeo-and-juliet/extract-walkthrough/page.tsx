'use client'

// VERIFIED: Folger Prologue lines 1-14, Arden 2012 (Weis).
// Extract uses Q2/Arden archaic spellings (star-cross'd, misadventur'd, death-mark'd).

import Link from 'next/link'
import { ArrowLeft, BookOpen, Quote, Lightbulb, ScrollText } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ─── Data ───────────────────────────────────────────────────── */

const PROLOGUE_LINES: { number: string; line: string; analysis: string }[] = [
  {
    number: '1',
    line: 'Two households, both alike in dignity,',
    analysis:
      'The opening line establishes social symmetry: the Montagues and Capulets are equals in status and reputation. "Alike in dignity" is loaded with quiet irony - they are also alike in pride, in violence and in the futility of their grudge. The iambic pentameter (di-DUM di-DUM di-DUM di-DUM di-DUM) gives the line the steady, processional weight of a public announcement, fitting for a Chorus addressing the audience directly.',
  },
  {
    number: '2',
    line: 'In fair Verona, where we lay our scene,',
    analysis:
      'The adjective "fair" presents Verona as outwardly beautiful, but the rest of the prologue will reveal the corruption beneath. "Where we lay our scene" is the first of several metatheatrical gestures: the Chorus reminds the audience this is a constructed performance, not unmediated reality. Shakespeare draws on the Italian setting because Italy was associated in the English imagination with passion, vendetta and beauty.',
  },
  {
    number: '3',
    line: 'From ancient grudge break to new mutiny,',
    analysis:
      'The temporal contrast between "ancient" and "new" suggests a feud that constantly regenerates itself. "Break" carries the violence of a wound reopening or a storm bursting. The word "mutiny" is striking - it elevates a private quarrel into something that resembles civil insurrection, anticipating the Prince\'s political concern with public order.',
  },
  {
    number: '4',
    line: 'Where civil blood makes civil hands unclean.',
    analysis:
      'The line\'s power comes from a tricolon built on the word "civil," which Shakespeare uses with brutal ambiguity. "Civil" first means citizens of the same city, then suggests civility (the very thing the feud destroys), and finally implies civil war - Veronese killing Veronese. The chiastic balance ("civil blood... civil hands") makes the violence feel mathematically inevitable. "Unclean" carries Biblical weight, hinting at moral and religious pollution that only sacrifice can wash away.',
  },
  {
    number: '5-6',
    line: "From forth the fatal loins of these two foes / A pair of star-cross'd lovers take their life;",
    analysis:
      'Here Shakespeare delivers the play\'s most famous spoiler. "Fatal loins" fuses birth and death in two words: the lovers are condemned by their parentage. "Star-cross\'d" introduces fate - the stars themselves are working against them - while preparing the audience for Romeo\'s later cry "Then I defy you, stars!" The phrase "take their life" is deliberately ambiguous: it means both "are born" and "kill themselves." The whole tragedy is folded into one line.',
  },
  {
    number: '7-8',
    line: "Whose misadventur'd piteous overthrows / Doth with their death bury their parents' strife.",
    analysis:
      '"Misadventur\'d" softens fate slightly - it suggests bad luck rather than cosmic decree, opening the door to the play\'s sustained tension between fate and human responsibility. "Bury their parents\' strife" makes the lovers\' deaths function as sacrificial: only their corpses, laid in the tomb, can end the feud. The verb "bury" puns chillingly on the literal burials to come.',
  },
  {
    number: '9-10',
    line: "The fearful passage of their death-mark'd love, / And the continuance of their parents' rage,",
    analysis:
      '"Death-mark\'d love" is one of the most arresting compound images in Shakespeare. The hyphen welds love and death into a single concept - they cannot be separated. "Mark\'d" suggests both branded (like cattle for slaughter) and noted (predestined). "Continuance" emphasises that the parents\' rage is what gives the tragedy its duration - without their feud, the lovers\' love would simply be young love.',
  },
  {
    number: '11-12',
    line: "Which, but their children's end, naught could remove, / Is now the two hours' traffic of our stage;",
    analysis:
      'The metatheatrical close. "Two hours\' traffic" reduces the entire tragedy to a commercial transaction with the audience - they have paid for a couple of hours of grief. "Traffic" carries connotations of trade and bustle, reminding the audience that theatre is a business as well as an art. Shakespeare also acknowledges the play\'s compressed timeline: the fictional events take a few days, but the performance takes only two hours.',
  },
  {
    number: '13-14',
    line: 'The which if you with patient ears attend, / What here shall miss, our toil shall strive to mend.',
    analysis:
      'The final couplet of the Shakespearean sonnet (rhyming "attend" / "mend") functions as a humble plea for the audience\'s attention. The closing couplet of a love sonnet usually offers a witty resolution or a declaration of devotion; here, instead, it asks for patience with the actors\' effort. This subverted ending mirrors the larger inversion of the prologue itself: a love sonnet that announces deaths.',
  },
]

const FORM_NOTES: { title: string; body: string }[] = [
  {
    title: 'A Shakespearean sonnet for a tragedy',
    body: 'The most striking choice Shakespeare makes is to write his prologue as a fourteen-line Shakespearean sonnet (three quatrains rhyming ABAB CDCD EFEF and a closing couplet GG). The sonnet was, in the 1590s, the dominant form of love poetry - the form in which Sidney, Spenser and Shakespeare himself courted real or imagined mistresses. By using it as the gateway to a tragedy, Shakespeare immediately fuses the language of love with the announcement of death. The audience is told from the very first moments that this play will be a love poem with corpses.',
  },
  {
    title: 'Iambic pentameter as public voice',
    body: "The whole prologue is in regular iambic pentameter - five unstressed/stressed feet per line. The metre gives the Chorus the formal, ceremonial register of someone making a public announcement. Unlike the more fluid, broken rhythms of the play's later soliloquies, the prologue moves with the steady tread of inevitability, which suits its subject: a tragedy whose ending is already known.",
  },
  {
    title: 'The immediate spoiler',
    body: 'Shakespeare does something extraordinary: he tells the audience the ending before the play begins. "Star-cross\'d lovers take their life" and "death-mark\'d love" remove all suspense. This converts the experience of watching the play from "what will happen?" into "how, and when, and why?" Every moment of hope is shadowed by the audience\'s knowledge of the inevitable end - dramatic irony on the largest possible scale.',
  },
  {
    title: 'The tricolon on "civil"',
    body: '"Civil blood makes civil hands unclean" is the prologue\'s most quoted line because of how Shakespeare loads the word "civil" with three simultaneous meanings: of the same city, civilised, and civil-war. The tricolon turns a single adjective into a moral indictment. The Veronese are killing their fellow citizens (civil blood), violating the very civilisation they claim to embody (civil hands), and turning the city into a war zone (civil war).',
  },
  {
    title: 'Metatheatre and the two-hour traffic',
    body: 'The prologue\'s closing image - "the two hours\' traffic of our stage" - is openly metatheatrical. Shakespeare reminds the audience they are watching a play, not witnessing reality. This is a confident gesture from a playwright who trusts his audience to know that artificial form (sonnet, stage, two hours) can carry real emotional truth. It also disarms criticism in advance: if the play feels rushed, that is the necessary condition of theatre itself.',
  },
]

const MODEL_PARAGRAPH = `The Prologue\'s most striking effect comes from the collision between its form and its content: Shakespeare borrows the love sonnet - the dominant form of Elizabethan amorous poetry - to announce a tragedy of death and feud, and that contradiction sets up the central paradox the play will spend five acts unfolding. The fourteen lines of regular iambic pentameter, organised into the familiar Shakespearean pattern of three quatrains and a closing couplet, carry all the formal expectations of a Petrarchan love poem; an Elizabethan audience would have heard the metre and immediately anticipated declarations of devotion. Instead, Shakespeare fills the form with violence, inheritance and inevitable death, fusing love and death into the unforgettable compound "death-mark\'d love" - a hyphen that welds the two ideas into a single inseparable concept. The tricolon on "civil" - "civil blood makes civil hands unclean" - pushes this contradiction further still, exposing how the very citizens who claim to embody civilisation are slaughtering each other. By spoiling the ending in the opening line ("star-cross\'d lovers take their life"), Shakespeare converts the audience\'s experience from suspense into tragic irony: every moment of hope in the play to come will be shadowed by the prologue\'s grim certainty. The metatheatrical close ("the two hours\' traffic of our stage") admits the artifice of what we are about to witness, but the form itself argues otherwise: a love sonnet that announces deaths is the perfect emblem of a love that cannot survive the world that produces it.`

/* ─── Page ───────────────────────────────────────────────────── */

export default function RomeoAndJulietExtractWalkthroughPage() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Romeo and Juliet',
            url: 'https://theenglishhub.app/revision/texts/romeo-and-juliet',
          },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/romeo-and-juliet/extract-walkthrough',
          },
        ]}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative mt-2 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/romeo-and-juliet" />}
            >
              <ArrowLeft className="size-3.5" />
              {t('rev.texts.common.back_to_text').replace('{text}', 'Romeo and Juliet')}
            </Button>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <ScrollText className="mr-1 size-3 text-clay-600 dark:text-clay-300" />
                {t('rev.texts.rj.extract.badge')}
              </Badge>
              <Badge variant="outline">{t('rev.texts.rj.extract.public_domain_badge')}</Badge>
              <Badge variant="outline">{t('rev.texts.rj.extract.sonnet_form_badge')}</Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('rev.texts.rj.extract.title')}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {t('rev.texts.rj.extract.intro')}
            </p>
          </div>
        </section>

        {/* Full extract */}
        <section className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="size-5 text-clay-600 dark:text-clay-300" />
                {t('rev.texts.rj.extract.full_extract_h')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">
                {t('rev.texts.rj.extract.full_extract_source')}
              </p>
              <blockquote className="rounded-lg border-l-4 border-amber-500/40 bg-amber-500/10 p-5 font-heading text-base leading-relaxed text-foreground sm:text-lg">
                Two households, both alike in dignity,
                <br />
                In fair Verona, where we lay our scene,
                <br />
                From ancient grudge break to new mutiny,
                <br />
                Where civil blood makes civil hands unclean.
                <br />
                From forth the fatal loins of these two foes
                <br />
                A pair of star-cross&apos;d lovers take their life;
                <br />
                Whose misadventur&apos;d piteous overthrows
                <br />
                Doth with their death bury their parents&apos; strife.
                <br />
                The fearful passage of their death-mark&apos;d love,
                <br />
                And the continuance of their parents&apos; rage,
                <br />
                Which, but their children&apos;s end, naught could remove,
                <br />
                Is now the two hours&apos; traffic of our stage;
                <br />
                The which if you with patient ears attend,
                <br />
                What here shall miss, our toil shall strive to mend.
              </blockquote>
            </CardContent>
          </Card>
        </section>

        {/* Line-by-line */}
        <section className="mt-10">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight">
            <BookOpen className="size-5 text-clay-600 dark:text-clay-300" />
            {t('rev.texts.rj.extract.line_by_line_h')}
          </h2>
          <div className="space-y-4">
            {PROLOGUE_LINES.map((line) => (
              <Card key={line.number} className="overflow-hidden">
                <CardHeader className="bg-amber-500/10 pb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm font-semibold text-amber-700 dark:text-amber-300">
                      L{line.number}
                    </span>
                    <CardTitle className="font-heading text-base font-medium italic leading-snug sm:text-lg">
                      {line.line}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {line.analysis}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Form notes */}
        <section className="mt-12">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Lightbulb className="size-5 text-clay-600" />
            {t('rev.texts.rj.extract.form_sound_h')}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {FORM_NOTES.map((note) => (
              <Card key={note.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{note.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Model paragraph */}
        <section className="mt-12">
          <Card className="border-violet-500/20 bg-gradient-to-br from-violet-500/[0.06] to-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ScrollText className="size-5 text-violet-700 dark:text-violet-300" />
                {t('rev.texts.rj.extract.model_para_h')}
              </CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                {t('rev.texts.rj.extract.model_para_desc')}
              </p>
            </CardHeader>
            <CardContent>
              <p className="font-heading text-base leading-relaxed text-foreground sm:text-[1.05rem]">
                {MODEL_PARAGRAPH}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                {t('rev.texts.rj.extract.approx_words')}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Back link */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" render={<Link href="/revision/texts/romeo-and-juliet" />}>
            <ArrowLeft className="size-3.5" />
            {t('rev.texts.rj.extract.back_hub')}
          </Button>
        </div>
      </div>
    </div>
  )
}
