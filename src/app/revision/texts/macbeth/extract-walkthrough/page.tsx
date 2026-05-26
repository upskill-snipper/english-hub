'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Eye,
  Lightbulb,
  PenLine,
  Quote,
  ScrollText,
  Sparkles,
  Telescope,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

// ── Extract data ──────────────────────────────────────────────────────────────

type ExtractLine = {
  n: number
  text: string
}

// VERIFIED: Folger Shakespeare Library digital text - https://www.folger.edu/explore/shakespeares-works/macbeth/read/1/7/
// Cross-checked against Project Gutenberg #1129 First Folio transcription.
const EXTRACT_LINES: ExtractLine[] = [
  { n: 1, text: "If it were done when 'tis done, then 'twere well" },
  { n: 2, text: 'It were done quickly. If th’ assassination' },
  { n: 3, text: 'Could trammel up the consequence, and catch,' },
  { n: 4, text: 'With his surcease, success; that but this blow' },
  { n: 5, text: 'Might be the be-all and the end-all here,' },
  { n: 6, text: 'But here, upon this bank and shoal of time,' },
  { n: 7, text: 'We’d jump the life to come. But in these cases' },
  { n: 8, text: 'We still have judgement here, that we but teach' },
  { n: 9, text: 'Bloody instructions, which, being taught, return' },
  { n: 10, text: 'To plague th’ inventor: this even-handed justice' },
  { n: 11, text: 'Commends th’ ingredience of our poison’d chalice' },
  { n: 12, text: 'To our own lips. He’s here in double trust:' },
  { n: 13, text: 'First, as I am his kinsman and his subject,' },
  { n: 14, text: 'Strong both against the deed; then, as his host,' },
  { n: 15, text: 'Who should against his murderer shut the door,' },
  { n: 16, text: 'Not bear the knife myself. Besides, this Duncan' },
  { n: 17, text: 'Hath borne his faculties so meek, hath been' },
  { n: 18, text: 'So clear in his great office, that his virtues' },
  { n: 19, text: 'Will plead like angels, trumpet-tongued, against' },
  { n: 20, text: 'The deep damnation of his taking-off;' },
  { n: 21, text: 'And pity, like a naked new-born babe,' },
  { n: 22, text: 'Striding the blast, or heaven’s cherubim, hors’d' },
  { n: 23, text: 'Upon the sightless couriers of the air,' },
  { n: 24, text: 'Shall blow the horrid deed in every eye,' },
  { n: 25, text: 'That tears shall drown the wind. I have no spur' },
  { n: 26, text: 'To prick the sides of my intent, but only' },
  { n: 27, text: 'Vaulting ambition, which o’erleaps itself,' },
  { n: 28, text: 'And falls on the other.' },
]

type Segment = {
  range: string
  lines: number[]
  notice: string
  say: string
  zoomOut: string
}

const SEGMENTS: Segment[] = [
  {
    range: 'Lines 1-7',
    lines: [1, 2, 3, 4, 5, 6, 7],
    notice:
      // VERIFIED: https://www.folger.edu/explore/shakespeares-works/macbeth/read/1/7/ - three "done"s in lines 1-2, fourth idea picked up in "we’d jump the life to come"
      'Macbeth opens with a tangle of monosyllabic conditionals - "If it were done when ’tis done." The repetition of "done" three times in two lines, the hesitant "if", and the choked-off rhythm reveal a mind trying to outrun itself. The image of "this bank and shoal of time" makes mortal life a precarious sandbar between two oceans of eternity.',
    say: 'Shakespeare uses anaphoric repetition and stacked conditional clauses to dramatise Macbeth’s avoidance: he cannot bring himself to name the murder, so he hides it inside the abstract verb "done". The metaphor of life as a "bank and shoal" dwarfs the political prize ("the be-all and the end-all") against the immensity of the afterlife, a classical and Christian image of judgement looming on either side.',
    zoomOut:
      'This is the first sustained soliloquy in which Macbeth interrogates the regicide intellectually rather than emotionally. It marks a hinge in the ambition arc: the witches gave him the prophecy, Lady Macbeth gave him the dagger, but here he gives himself the rationale - and finds it cannot hold. The stalled syntax foreshadows the broken sleep ("Macbeth does murder sleep") that will pursue him from Act 2 onwards.',
  },
  {
    range: 'Lines 7-12',
    lines: [7, 8, 9, 10, 11, 12],
    notice:
      'The vocabulary shifts to the legal and the pedagogical: "judgement", "teach", "instructions", "even-handed justice". Macbeth imagines a moral universe that returns its lessons to the giver. The "poison’d chalice" image then collapses law, religion and feast into a single object - a perversion of the Eucharist offered back to its mixer.',
    say: 'Shakespeare layers semantic fields of justice and sacrament so that ethics and theology speak in one voice: secular and divine law agree that murder will recoil. The "poison’d chalice" is a polysemous symbol - the cup of communion turned into the cup of vengeance, prefiguring Macbeth’s own banquet in Act 3 where Banquo’s ghost takes the seat meant for celebration.',
    zoomOut:
      'The cup that returns "to our own lips" is the play’s clearest articulation of cosmic order: divinely ordained kingship is protected by a moral physics. Audiences in 1606, fresh from the Gunpowder Plot trials, would hear this as orthodoxy. The image will be answered structurally by Lady Macbeth’s sleepwalking ("All the perfumes of Arabia") and by Macbeth’s own "tedious" wading in blood.',
  },
  {
    range: 'Lines 12-16',
    lines: [12, 13, 14, 15, 16],
    notice:
      'Macbeth catalogues his obligations: "kinsman", "subject", "host". The triple structure builds like a legal indictment against himself. The brutal image of carrying "the knife myself" pierces the abstraction of the previous lines - suddenly the soliloquy contains a weapon.',
    say: 'The tricolon enumerates the social contracts Duncan’s death will shatter: blood loyalty (kinsman), political loyalty (subject), and the sacred Jacobean code of hospitality (host). Shakespeare uses asyndeton ("First… then… Besides") to make the list feel both methodical and cumulative; each clause tightens the moral noose. The shift from prosecutorial syntax to the concrete "knife" is deliberate - abstraction can be argued with, an instrument cannot.',
    zoomOut:
      'Hospitality is a load-bearing theme: Duncan’s arrival in 1.6 calls Inverness a "pleasant seat" with "sweet" air, the audience already knowing it is a death-trap. By naming the breach himself, Macbeth confirms what the play’s dramatic irony has been showing. This makes his subsequent action knowing rather than misled - essential evidence for any argument about personal responsibility versus supernatural compulsion.',
  },
  {
    range: 'Lines 16-21',
    lines: [16, 17, 18, 19, 20, 21],
    notice:
      'Duncan is canonised in real time. "Meek", "clear", "virtues", "angels", "trumpet-tongued" - the diction is liturgical, almost hagiographic. The phrase "deep damnation" lands as the moral antithesis: Macbeth has already named his soul’s destination.',
    say: 'Shakespeare uses sustained celestial imagery to elevate Duncan into a Christ-like sacrificial figure. The "trumpet-tongued" angels echo Revelation, casting the regicide as eschatological rather than merely political. Plosive alliteration in "deep damnation" makes the consequence aurally heavier than anything the soliloquy has reasoned its way towards.',
    zoomOut:
      'The play locates kingship in divine right - a doctrine James I had codified in his own writings on monarchy. To kill Duncan is therefore not just a crime but an act of cosmic disorder, which is exactly what Lennox describes in 2.3 ("the night has been unruly… strange screams of death"). Macbeth’s own diction here predicts the universe’s recoil.',
  },
  {
    range: 'Lines 21-25',
    lines: [21, 22, 23, 24, 25],
    notice:
      'The astonishing extended simile: pity becomes "a naked new-born babe / Striding the blast", and cherubim ride "the sightless couriers of the air". A vulnerable infant somehow strides a hurricane; tears literally drown the wind.',
    say: 'Shakespeare yokes opposites - fragility and vastness, helplessness and apocalypse - in a metaphysical conceit that makes pity itself a force of nature. The paradox of a "naked new-born babe" wielding cosmic power dramatises a central Shakespearean conviction: moral feeling is the most powerful agent in the universe, even when it appears the weakest. The hyperbole "tears shall drown the wind" inverts elemental hierarchies; weeping out-roars the storm.',
    zoomOut:
      'The babe image returns hauntingly across the play - in Lady Macbeth’s "I have given suck" (1.7), in the bloody child apparition (4.1), in Macduff’s "untimely ripp’d" birth (5.8). Babies in Macbeth carry moral weight Macbeth cannot defeat. The very imagery he conjures here as a deterrent will, in the form of Macduff, eventually kill him.',
  },
  {
    range: 'Lines 25-28',
    lines: [25, 26, 27, 28],
    notice:
      'The soliloquy collapses into the equestrian metaphor: "I have no spur / To prick the sides of my intent, but only / Vaulting ambition, which o’erleaps itself, / And falls on the other." The enjambment between "itself" and "And falls" enacts the fall.',
    say: 'Shakespeare gives Macbeth the play’s most self-diagnostic image: ambition as an over-eager rider who leaps too high and is thrown. The metaphor is brutally honest - he has just spent twenty-five lines listing reasons not to act, and admits he has none of his own to act. Crucially, the sentence breaks before completing: "falls on the other - " what? The line is famously incomplete, its silence filled by Lady Macbeth’s entrance. Shakespeare lets dramaturgy finish the thought.',
    zoomOut:
      'This is the thesis statement of the entire tragedy. Macbeth knows he has no motive but ambition, knows ambition will destroy him, and proceeds anyway - which is the precise definition of a tragic hero in Aristotelian terms. The interrupted line foreshadows every later moment Lady Macbeth supplies the will Macbeth lacks, until in Act 5 he is left alone to face the consequences ("Tomorrow, and tomorrow, and tomorrow") with the throne but nothing else.',
  },
]

// ── Page component ────────────────────────────────────────────────────────────

export default function MacbethExtractWalkthroughPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/revision/texts/macbeth' },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/macbeth/extract-walkthrough',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="AQA" />

        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4 -ml-2 text-muted-foreground"
              render={<Link href="/revision/texts/macbeth" />}
            >
              <ArrowLeft className="size-3.5" />
              Back to Macbeth overview
            </Button>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                <ScrollText className="mr-1 size-3 text-violet-400" />
                Extract Walkthrough
              </Badge>
              <Badge variant="outline">Act 1, Scene 7</Badge>
              <Badge variant="outline">Lines 1-28</Badge>
              <Badge variant="outline">AQA-style</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Macbeth’s &ldquo;If it were done&rdquo; soliloquy &mdash; line-by-line walkthrough
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A worked AQA-style extract analysis of Macbeth’s first great soliloquy. For each
              segment you get what to <em>notice</em>, what to <em>say</em> in AO2 method language,
              and how to <em>zoom out</em> to the wider play.
            </p>
          </div>
        </section>

        {/* Brief context */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="size-5 text-violet-400" />
              Where we are in the play
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              We are at the start of Act 1, Scene 7, inside Macbeth’s castle at Inverness. King
              Duncan has arrived as an honoured guest and a banquet is underway offstage. Macbeth
              slips out alone to think.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lady Macbeth has already received his letter (1.5), invoked the spirits to
              &ldquo;unsex&rdquo; her, and resolved that Duncan must die that very night. Macbeth
              has been named Thane of Cawdor, has heard the witches’ prophecy that he &ldquo;shalt
              be king hereafter,&rdquo; and has aside-confessed his &ldquo;black and deep
              desires&rdquo; (1.4).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the moments after this soliloquy ends, Lady Macbeth enters and shames him back into
              the plan with the lines &ldquo;When you durst do it, then you were a man.&rdquo; By
              the end of the scene the murder is fixed. This soliloquy is therefore the last point
              at which Macbeth could turn back - and the place where he proves to himself that he
              should.
            </p>
          </CardContent>
        </Card>

        {/* The full extract */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Quote className="size-5 text-amber-500" />
              The extract
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Macbeth, alone. Act 1, Scene 7, lines 1-28.
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border/60 bg-muted/20 p-5 sm:p-6">
              <ol className="space-y-1 font-heading text-base leading-loose sm:text-lg">
                {EXTRACT_LINES.map((line) => (
                  <li key={line.n} className="flex gap-4 sm:gap-6">
                    <span className="w-6 shrink-0 select-none text-right text-xs text-muted-foreground/60 tabular-nums">
                      {line.n}
                    </span>
                    <span>{line.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-3 text-xs text-muted-foreground/70">
              Text from <em>Macbeth</em>, Act 1 Scene 7. Public domain.
            </p>
          </CardContent>
        </Card>

        {/* Walkthrough */}
        <section className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Segment-by-segment</h2>
          <p className="text-sm text-muted-foreground">
            For each chunk: what to <strong>notice</strong>, what to <strong>say</strong>, how to{' '}
            <strong>zoom out</strong>.
          </p>
        </section>

        {SEGMENTS.map((seg, idx) => {
          const segLines = EXTRACT_LINES.filter((l) => seg.lines.includes(l.n))
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="size-5 text-violet-400" />
                  {seg.range}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Re-quoted lines */}
                <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                  <ol className="space-y-1 font-heading text-base leading-loose">
                    {segLines.map((line) => (
                      <li key={line.n} className="flex gap-4">
                        <span className="w-6 shrink-0 select-none text-right text-xs text-muted-foreground/60 tabular-nums">
                          {line.n}
                        </span>
                        <span>{line.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Notice */}
                <div>
                  <h4 className="mb-1 flex items-center gap-1.5 font-semibold">
                    <Eye className="size-4 text-violet-400" /> Notice
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{seg.notice}</p>
                </div>

                {/* Say */}
                <div>
                  <h4 className="mb-1 flex items-center gap-1.5 font-semibold">
                    <PenLine className="size-4 text-amber-500" /> Say (AO2)
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{seg.say}</p>
                </div>

                {/* Zoom out */}
                <div className="rounded-lg border border-violet-500/20 bg-violet-500/[0.04] p-4">
                  <h4 className="mb-1 flex items-center gap-1.5 font-semibold text-violet-700 dark:text-violet-300">
                    <Telescope className="size-4" /> Zoom out
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{seg.zoomOut}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}

        {/* Model paragraph */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="size-5 text-amber-500" />
              Model paragraph &mdash; how this extract reveals ambition
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              ~250 words. A single tightly-argued paragraph that braids language, structure and
              context into one thesis on ambition.
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-5 leading-relaxed text-foreground">
              <p>
                Shakespeare uses Macbeth’s &ldquo;If it were done&rdquo; soliloquy to expose
                ambition as a force its possessor recognises and yet cannot resist. The opening
                threefold repetition of &ldquo;done&rdquo; is a verbal flinch: Macbeth refuses to
                name the murder, hiding it inside an abstract verb, which dramatises ambition’s
                first effect - the corruption of language itself. The speech then constructs a
                meticulous moral argument against the deed. Through the legal lexis of
                &ldquo;judgement,&rdquo; &ldquo;instructions&rdquo; and &ldquo;even-handed
                justice,&rdquo; and the sacramental image of the &ldquo;poison’d chalice&rdquo;
                returning to the mixer’s lips, Shakespeare lets Macbeth voice the play’s cosmic
                order: ambition that violates divinely ordained kingship will recoil. He then
                catalogues his three duties - &ldquo;kinsman,&rdquo; &ldquo;subject,&rdquo;
                &ldquo;host&rdquo; - and canonises Duncan with celestial diction
                (&ldquo;trumpet-tongued&rdquo; angels, &ldquo;cherubim&rdquo;), so that the
                metaphysical conceit of pity as &ldquo;a naked new-born babe / Striding the
                blast&rdquo; can deliver its verdict: moral feeling will out-roar ambition’s storm.
                And yet, devastatingly, Macbeth concludes with the equestrian metaphor of
                &ldquo;Vaulting ambition, which o’erleaps itself, / And falls on the other.&rdquo;
                The enjambment enacts the fall; the unfinished final line leaves ambition hanging in
                mid-air, waiting for Lady Macbeth’s entrance to push it over. This is the play’s
                tragic engine in miniature: a man who has reasoned himself out of regicide and will
                commit it anyway, because ambition, once acknowledged, has already won.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 pb-4">
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/key-quotes" />}>
            <ArrowLeft className="size-4 mr-1" /> Key Quotes
          </Button>
          <Button variant="outline" render={<Link href="/revision/texts/macbeth/essay-plans" />}>
            Essay Plans <BookOpen className="size-4 ml-1" />
          </Button>
        </div>

        {/* Fair-dealing footer */}
        <p className="pb-8 text-xs text-muted-foreground/70 leading-relaxed">
          Extract from <em>Macbeth</em> by William Shakespeare (c. 1606), Act 1 Scene 7, lines 1-28
          - in the public domain. Commentary, segmentation and model paragraph are original
          educational analysis intended for study and revision under fair-dealing provisions for
          criticism, review and quotation.
        </p>
      </div>
    </div>
  )
}
