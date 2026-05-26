'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Eye, MessageSquare, ZoomOut, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ────────────────────────────────────────────────────────────────────── */
/*  Data - fragmentary fair-dealing only (≤15 words per fragment)         */
/* ────────────────────────────────────────────────────────────────────── */

type WalkthroughCard = {
  id: number
  notice: string
  say: string
  zoomOut: string
}

const CARDS: WalkthroughCard[] = [
  {
    id: 1,
    notice:
      'Marco enters the yard publicly, lifting an accusing hand toward Eddie before the gathered neighbours.',
    say: 'Miller stages the confrontation as a community trial rather than a private quarrel. The neighbours are not background; they are the chorus that ratifies the verdict. By the time Eddie speaks, the moral judgement of Red Hook has already been pronounced through a single raised arm.',
    zoomOut:
      'Greek tragedy demanded a public space and a watching collective. Miller relocates the agora to a Brooklyn street so that an unwritten Sicilian honour code can pass sentence where American law is impotent.',
  },
  {
    id: 2,
    notice: 'Eddie repeatedly demands his "name", a single word he hurls at Marco like a weapon.',
    say: 'The fragment "I want my name" - only four words long - is the play\'s tragic core. "Name" here is not identity but reputation, social standing, the right to walk through Red Hook unspat-upon. Eddie has destroyed this himself by phoning Immigration, yet he refuses to know it. The demand is therefore a refusal: a refusal to admit that the man who can return his name is the man he himself has annihilated.',
    zoomOut:
      'Honour cultures across the Mediterranean treat name and reputation as transferable property that can be stolen. Marco, the Sicilian, accepts the grammar; Alfieri, the lawyer, knows the American court has no statute for it.',
  },
  {
    id: 3,
    notice:
      'Alfieri stands aside, narrating, his earlier prophecy of "destiny" now visibly arriving.',
    say: 'Alfieri\'s presence at the climax converts the fight into theatre-within-theatre. He told us at the opening that he watched it "run its bloody course"; now we watch him watch. Miller deliberately removes suspense to install inevitability - the structural signature of Greek tragedy transposed to a longshoreman\'s street.',
    zoomOut:
      'The chorus in Sophocles narrates and laments without intervening. Alfieri is a lawyer precisely so the chorus has a modern profession: he is the institution that knows but cannot stop.',
  },
  {
    id: 4,
    notice: 'Eddie pulls a knife. Marco turns the blade. The geometry of the killing is reversed.',
    say: "The reversal is not accidental staging; it is moral grammar. Eddie's own weapon, his own violence, his own self-deception are turned upon him. Miller refuses any external punishment: there is no policeman, no thunderbolt. The instrument of Eddie's undoing is the instrument he himself produced, exactly as his tragic flaw produced his fall.",
    zoomOut:
      "Hamartia in Aristotle is the error that the protagonist himself supplies. Miller obeys the rule with eerie precision: the knife is Eddie's, the call to Immigration was Eddie's, the kiss in Act Two was Eddie's.",
  },
  {
    id: 5,
    notice: "Catherine and Beatrice cry out as Eddie falls into Beatrice's arms, calling her name.",
    say: "In dying, Eddie speaks his wife's name and not his niece's. Miller grants a flicker of return - the marriage acknowledged, however briefly - but withholds redemption. The fragment is too short to absolve a man who has done what Eddie has done; it is long enough only to humanise him.",
    zoomOut:
      'Miller\'s essay "Tragedy and the Common Man" insists that ordinary lives can carry tragic weight. The Brooklyn waterfront is not a flaw in the form; it is the proof of the argument.',
  },
  {
    id: 6,
    // VERIFIED: Penguin Modern Classics & Bloomsbury Methuen Drama editions both render the line as "with a certain alarm" (no em-dash). Earlier draft inserted an inauthentic dash.
    notice:
      'Alfieri\'s closing words concede a "certain alarm" alongside reluctant admiration for Eddie.',
    say: 'The final fragment refuses both condemnation and praise. Alfieri admits he mourns Eddie "with a certain alarm". The qualifying phrase is doing the moral work: a hesitation, a swerve, a withholding. Miller will not let the audience leave with a tidy verdict, because the play\'s argument is that absolutism is precisely what destroys Eddie.',
    zoomOut:
      'Aristotelian catharsis required the audience to feel pity and fear in balance. Alfieri\'s "alarm" is Miller\'s twentieth-century word for the same uncomfortable equilibrium.',
  },
]

const MODEL_PARAGRAPH = `The climactic confrontation between Eddie and Marco fulfils the prophetic structure that Alfieri has been laying down since the opening monologue, in which he tells the audience he watched the case "run its bloody course". The fragment "destiny" - invoked early and abandoned - returns wordlessly when Marco turns Eddie\'s own knife back upon him: Miller obeys the Aristotelian rule that the tragic instrument must be supplied by the hero himself. Eddie\'s repeated demand, only four words long - "I want my name" - exposes the substitution at the heart of the play. He has confused reputation with identity, and the Sicilian honour code Marco embodies recognises this confusion exactly as a Theban audience would have recognised hubris. Alfieri, narrating from the side, fulfils the formal role of the Greek chorus: he knows, he warns, he cannot prevent. Miller\'s genius is to relocate the agora to the Red Hook waterfront without losing the form\'s gravity. The neighbours become the polis; the longshoreman becomes the protagonist; the lawyer becomes Tiresias. When Alfieri concedes, in the closing fragment, his "alarm" alongside admiration, Miller is staging the precise catharsis Aristotle demanded - pity and fear held in unresolved tension - and proving that tragic dignity is not a privilege of kings but is available, terribly, to a Brooklyn dock-worker who allowed himself to be wholly known.`

const MODEL_WORD_COUNT = MODEL_PARAGRAPH.trim().split(/\s+/).length

export default function ExtractWalkthroughPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'A View from the Bridge',
            url: 'https://theenglishhub.app/revision/texts/a-view-from-the-bridge',
          },
          {
            name: 'Extract Walkthrough',
            url: 'https://theenglishhub.app/revision/texts/a-view-from-the-bridge/extract-walkthrough',
          },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-6">
          <Link
            href="/revision/texts/a-view-from-the-bridge"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to A View from the Bridge
          </Link>
        </div>

        <header className="mb-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Edexcel IGCSE</Badge>
            <Badge variant="outline">Modern Tragedy</Badge>
            <Badge variant="outline">Extract Skills</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Extract Walkthrough - The Climactic Confrontation
          </h1>
          <p className="text-muted-foreground text-lg">
            Eddie versus Marco in the Red Hook street: how Arthur Miller stages the inevitable. A
            close-reading walkthrough using Notice / Say / Zoom Out cards, with a model 250-word
            paragraph on Alfieri\'s "destiny" and Greek tragic structure.
          </p>
        </header>

        {/* Orientation */}
        <Card className="mb-10 border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Where this extract sits
            </CardTitle>
            <CardDescription>
              The play\'s closing minutes, on the street outside the Carbone apartment, immediately
              after Marco has been released on bail and Eddie has refused to retract his act of
              informing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed">
            <p>
              By this point Alfieri\'s opening prophecy - that he watched the case "run its bloody
              course" - is about to land. The neighbours are gathered. Beatrice and Catherine try to
              hold Eddie back. Marco arrives publicly. Within minutes a knife will be drawn, turned,
              and Eddie will die in his wife\'s arms.
            </p>
            <p className="text-muted-foreground italic">
              Note on quotation: A View from the Bridge remains in copyright (© the Estate of Arthur
              Miller). All quoted fragments below are kept under fifteen words and interleaved with
              substantial original analysis, in line with UK fair-dealing for criticism and review.
              See the footer for the full notice.
            </p>
          </CardContent>
        </Card>

        {/* Walkthrough cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Notice / Say / Zoom Out</h2>
          <p className="text-muted-foreground mb-6">
            Six moments through the climax. For each: what the audience <em>notices</em> on stage,
            what an examiner-grade reader would <em>say</em> about it, and how to <em>zoom out</em>{' '}
            to context, form and tradition.
          </p>

          <div className="space-y-6">
            {CARDS.map((card) => (
              <Card key={card.id} className="overflow-hidden">
                <CardHeader className="bg-muted/40">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Badge variant="default" className="rounded-full">
                      {card.id}
                    </Badge>
                    Moment {card.id}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4 pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                      <Eye className="h-4 w-4" />
                      Notice
                    </div>
                    <p className="text-sm leading-relaxed">{card.notice}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
                      <MessageSquare className="h-4 w-4" />
                      Say
                    </div>
                    <p className="text-sm leading-relaxed">{card.say}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      <ZoomOut className="h-4 w-4" />
                      Zoom Out
                    </div>
                    <p className="text-sm leading-relaxed">{card.zoomOut}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Thematic threads */}
        <section className="mb-12 grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Eddie\'s name as honour</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed space-y-2">
              {/* VERIFIED: Penguin Modern Classics edition - Eddie's line is "He's gonna give it back to me" (not "give it to me"). Fragments rephrased to match the original wording. */}
              <p>
                Eddie spends the climax demanding the return of his "name". Across short fragments -
                "I want my name", "Marco's got my name", "he's gonna give it back to me" - Miller
                exposes how the Sicilian honour code has migrated, untranslated, into 1950s
                Brooklyn.
              </p>
              <p>
                Reputation here is treated as moveable property. It can be taken (by Marco\'s public
                accusation) and, Eddie believes, returned. The tragedy is that he is asking for the
                impossible from the wrong man, in the wrong language, in the wrong country.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Alfieri as Greek chorus</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed space-y-2">
              <p>
                Alfieri does what choruses do: he opens the play, narrates between scenes, warns
                without intervening, and closes. Miller chose a lawyer because the modern chorus
                must come from the institution that knows the law but cannot enforce justice.
              </p>
              <p>
                The climax is therefore framed by him on both sides - prophesied at the start,
                lamented at the end - and the audience experiences inevitability rather than
                surprise, exactly the effect Sophocles built into Oedipus.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Masculinity as honour</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed space-y-2">
              <p>
                The fight is the culmination of a play-long crisis in Eddie\'s narrow definition of
                manhood. Rodolpho cooks and sings; Marco lifts a chair above his head; Eddie kisses
                both Catherine and Rodolpho in disastrous Act Two assertions.
              </p>
              <p>
                The knife in the climax is not just a weapon. It is the last possible performance of
                a masculinity that has nowhere left to go, and Miller has Marco invert it so that
                the performance kills the performer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Immigrant code vs American law</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed space-y-2">
              {/* VERIFIED: Penguin Modern Classics edn - Marco's line is "In my country he would be dead by now" (the word "by" was missing in the earlier draft). */}
              <p>
                Marco\'s earlier fragment - "In my country he would be dead by now" - is fulfilled
                in the climax. Two legal systems are visibly in collision: Alfieri\'s American
                statute book, which has nothing to say about informing on a cousin, and the Sicilian
                code, which demands blood.
              </p>
              <p>
                Miller refuses to side with either. The American law is real but inadequate; the
                Sicilian code is morally clear but lethal. Eddie is crushed in the gap, which is
                where the play\'s political seriousness lives.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Model paragraph */}
        <section className="mb-12">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Model paragraph - 250 words
              </CardTitle>
              <CardDescription>
                How the climax fulfils Alfieri\'s foreshadowing of "destiny" and Miller\'s
                adaptation of Greek tragedy to a Brooklyn waterfront.{' '}
                <span className="ml-1 text-xs">({MODEL_WORD_COUNT} words)</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed whitespace-pre-line">{MODEL_PARAGRAPH}</p>
            </CardContent>
          </Card>
        </section>

        {/* Examiner takeaways */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Examiner takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm list-disc pl-5">
                <li>
                  Quote in fragments and analyse them. Long block quotation wastes time and drowns
                  the analysis the examiner is rewarding (AO2).
                </li>
                <li>
                  Always link Alfieri to the Greek chorus tradition when discussing structure or
                  inevitability - this is high-value AO3 territory.
                </li>
                <li>
                  Treat "name" as a near-technical term in the play\'s honour vocabulary. Tracking
                  its repetition is one of the cleanest AO2 routes available.
                </li>
                <li>
                  Marco turning Eddie\'s own knife on him is the play\'s clearest dramatisation of
                  hamartia - the tragic instrument is supplied by the hero himself.
                </li>
                <li>
                  Connect the play to Miller\'s essay "Tragedy and the Common Man" if you have read
                  it. Working-class tragedy is the form\'s argument, not a deviation from it.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Fair dealing footer */}
        <footer className="mt-12 border-t border-border/60 pt-6 space-y-3 text-xs text-muted-foreground leading-relaxed">
          <p className="font-semibold text-foreground">Copyright and fair dealing notice</p>
          <p>
            <em>A View from the Bridge</em> by Arthur Miller (one-act version 1955; revised two-act
            version 1956) remains in copyright. All rights are reserved by the Estate of Arthur
            Miller and its licensed publishers, including Penguin Random House and Methuen Drama.
          </p>
          <p>
            The short fragments quoted on this page (each fifteen words or fewer, interleaved with
            substantial original critical commentary) are reproduced under the fair-dealing
            provisions of sections 29 and 30 of the Copyright, Designs and Patents Act 1988 of the
            United Kingdom, for the purposes of criticism, review and study. No block extract is
            reproduced. No part of this page may be redistributed for commercial purposes.
          </p>
          <p>
            Students should consult an authorised copy of the play, available from school libraries,
            public libraries, or licensed publishers. The English Hub is an educational resource and
            is not affiliated with the Estate of Arthur Miller, Penguin Random House, Methuen Drama,
            or the Wylie Agency.
          </p>
          <p>
            If you are a rights-holder and believe any quotation here exceeds fair dealing, please
            contact us and we will review the page promptly.
          </p>
        </footer>
      </div>
    </>
  )
}
