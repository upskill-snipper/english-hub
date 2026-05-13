import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Feather,
  Lightbulb,
  MessageSquare,
  Sparkles,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata = {
  title: 'Macbeth Act 1 — Scene-by-Scene Analysis | The English Hub',
  description:
    'Detailed GCSE analysis of Macbeth Act 1: scene-by-scene summary, key quotes, language techniques, character development and structural analysis.',
}

export default async function MacbethAct1Page() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  const board = await getServerBoard()
  if (board && !['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'].includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/revision/texts/macbeth' },
          { name: 'Act 1', url: 'https://theenglishhub.app/revision/texts/macbeth/act-1' },
        ]}
      />
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
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
              <BookOpen className="mr-1 size-3 text-violet-400" />
              {_tr(`Act 1 — Exposition &amp; Temptation`)}
            </Badge>
            <Badge variant="outline">7 scenes</Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {_tr(`Macbeth — Act 1: Scene-by-Scene Analysis`)}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Act 1 establishes the world of the play, introduces the supernatural, and traces
            Macbeth&apos;s journey from loyal warrior to a man on the brink of regicide. It is the
            act of temptation, persuasion, and moral deterioration.
          </p>
        </div>
      </section>

      {/* Scene 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-violet-400" />
            {_tr(`Scene 1 — The Witches&apos; Opening`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              Thunder and lightning. Three witches meet on a desolate heath and plan to reconvene
              &ldquo;when the battle&rsquo;s lost and won&rdquo; to meet Macbeth. They depart with
              the chant: &ldquo;Fair is foul, and foul is fair, / Hover through the fog and filthy
              air.&rdquo;
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `The play opens with disorder: thunder, lightning, and morally ambiguous beings rather than the court or king.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macbeth is named before he appears, immediately linking him to the witches&apos; world.`,
                )}
              </li>
              <li>
                {_tr(
                  `The paradox &ldquo;when the battle&rsquo;s lost and won&rdquo; introduces the theme of equivocation.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Fair is foul, and foul is fair.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Chiasmus &amp;
                  paradox. The reversed grammatical structure mirrors the moral inversion at the
                  heart of the play. What appears good is evil; what appears evil may serve a
                  purpose. This single line establishes the central thematic tension.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Hover through the fog and filthy air.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Alliteration
                  (&ldquo;fog&rdquo; / &ldquo;filthy&rdquo;) and pathetic fallacy. The alliterative
                  &lsquo;f&rsquo; sounds create a hissing, sinister tone. The fog symbolises moral
                  confusion and obscured vision &mdash; no one in this play will see clearly.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;When the battle&rsquo;s lost and won.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Paradox. A battle
                  cannot be simultaneously lost and won, yet the witches see both sides. This
                  signals their perspective outside normal human logic and introduces the idea that
                  every victory in this play will also be a defeat.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              Shakespeare opens with the witches rather than the king to immediately destabilise the
              audience&apos;s expectations. In a play about kingship and divine order, beginning
              with agents of chaos signals that the natural hierarchy is already under threat. The
              short scene (only 13 lines) functions as a prologue, creating an atmosphere of dread
              before any human character appears. The trochaic tetrameter (&ldquo;When shall we
              three meet again&rdquo;) sets the witches apart rhythmically from the iambic
              pentameter of the court, marking them as beings outside the natural order.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`The Supernatural`)}</Badge>
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
              <Badge variant="outline">{_tr(`Fate vs Free Will`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 2 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-violet-400" />
            {_tr(`Scene 2 — The Battlefield Report`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              King Duncan receives news of the battle from a bleeding sergeant. Macbeth has fought
              heroically, killing the rebel Macdonwald by unseaming him &ldquo;from the nave to
              th&rsquo; chops.&rdquo; The Thane of Cawdor has betrayed Scotland and sided with
              Norway. Duncan orders Cawdor&apos;s execution and bestows the title on Macbeth as a
              reward.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `Macbeth is praised as &ldquo;brave Macbeth&rdquo; and &ldquo;Bellona&rsquo;s bridegroom&rdquo; before we meet him.`,
                )}
              </li>
              <li>
                {_tr(
                  `Duncan&apos;s transfer of the Cawdor title unknowingly fulfils the witches&apos; first prophecy.`,
                )}
              </li>
              <li>
                {_tr(`The treason of the original Cawdor foreshadows Macbeth&apos;s own betrayal.`)}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Unseamed him from the nave to th&rsquo; chops.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Violent imagery
                  &amp; metaphor. &ldquo;Unseamed&rdquo; is a tailoring metaphor &mdash; Macbeth has
                  ripped his enemy open like fabric. The graphic brutality establishes Macbeth as
                  capable of extreme violence, which becomes significant when that capacity is
                  turned against innocent targets.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Bellona&rsquo;s bridegroom&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Classical allusion
                  &amp; metaphor. Bellona was the Roman goddess of war. Calling Macbeth her
                  &ldquo;bridegroom&rdquo; elevates him to a near-divine warrior. This creates the
                  maximum dramatic height from which he will later fall.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;What he hath lost, noble Macbeth hath won.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Dramatic irony
                  &amp; antithesis. Duncan&apos;s line echoes the witches&apos; &ldquo;lost and
                  won&rdquo; from Scene 1, linking the court to the supernatural without
                  Duncan&apos;s knowledge. It also foreshadows that Macbeth may follow the same
                  treacherous path as the previous Cawdor.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>Duncan</strong> is established as a generous, trusting king who rewards
              loyalty lavishly. His character flaw &mdash; excessive trust &mdash; is already
              visible in his immediate willingness to elevate Macbeth. <strong>Macbeth</strong> is
              presented entirely through others&apos; reports, building him as a heroic figure
              before the audience sees him conflicted.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              This scene serves as exposition, establishing Macbeth&apos;s reputation before we
              witness his corruption. Shakespeare uses the &ldquo;reported action&rdquo; technique
              &mdash; we hear about the battle rather than seeing it &mdash; which keeps focus on
              language and character rather than spectacle. The scene also establishes the theme of
              deceptive appearances: the previous Cawdor seemed loyal but was a traitor, directly
              foreshadowing the new Cawdor&apos;s trajectory.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`Kingship &amp; Power`)}</Badge>
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
              <Badge variant="outline">{_tr(`Gender &amp; Masculinity`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-violet-400" />
            {_tr(`Scene 3 — The Prophecy`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              The witches meet Macbeth and Banquo on the heath. They hail Macbeth as Thane of
              Glamis, Thane of Cawdor, and &ldquo;king hereafter.&rdquo; They tell Banquo he will be
              &ldquo;lesser than Macbeth, and greater&rdquo; and that his descendants will be kings.
              Ross arrives to confirm Macbeth has been named Thane of Cawdor. Macbeth, shaken by the
              accuracy of the first prophecy, delivers his first aside about &ldquo;murder yet is
              but fantastical&rdquo; &mdash; already imagining regicide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(`The central prophecy is delivered, setting the entire plot in motion.`)}
              </li>
              <li>
                {_tr(
                  `The Cawdor title is confirmed, lending credibility to the kingship prophecy.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macbeth&apos;s aside reveals that the thought of murder is already forming &mdash; he is not purely a victim of manipulation.`,
                )}
              </li>
              <li>
                {_tr(
                  `Banquo&apos;s cautious response provides a moral contrast to Macbeth&apos;s excited reaction.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;So foul and fair a day I have not seen.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Dramatic irony
                  &amp; verbal echo. Macbeth&apos;s first words in the play unconsciously echo the
                  witches&apos; chant from Scene 1. Before he even meets them, his language is
                  already aligned with theirs, suggesting a pre-existing connection to darkness.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;The instruments of darkness tell us truths, / Win us with honest trifles,
                  to betray&rsquo;s / In deepest consequence.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Metaphor &amp;
                  foreshadowing. Banquo recognises that the witches use small truths as bait for
                  greater deceptions. &ldquo;Instruments of darkness&rdquo; personifies evil as
                  deliberate and strategic. This warning, which Macbeth ignores, makes Banquo the
                  voice of reason.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;This supernatural soliciting / Cannot be ill, cannot be good.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Antithesis &amp;
                  soliloquy. The balanced structure (&ldquo;cannot be ill, cannot be good&rdquo;)
                  dramatises Macbeth&apos;s moral confusion. He is caught between his conscience and
                  his desire, unable to categorise the prophecy as either. This indecision is the
                  seed of his tragedy.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;If chance will have me king, why, chance may crown me / Without my
                  stir.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Personification
                  &amp; irony. Macbeth briefly considers letting fate take its course without
                  action. The word &ldquo;stir&rdquo; is a deliberate understatement for murder.
                  This moment of passivity will be overridden by Lady Macbeth&apos;s persuasion in
                  later scenes.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Lesser than Macbeth, and greater. / Not so happy, yet much happier.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Paradox &amp;
                  riddle. The witches&apos; prophecy for Banquo is deliberately ambiguous and
                  contradictory. The paradoxes reflect the equivocating nature of the supernatural
                  and prove true: Banquo is lesser in rank but greater in moral stature; less
                  fortunate in life but happier in conscience.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>Macbeth</strong> is immediately captivated by the prophecy and begins
              imagining murder in his first aside &mdash; revealing a pre-existing ambition that the
              witches merely awaken. <strong>Banquo</strong> responds with healthy scepticism,
              acting as a moral foil. His caution highlights Macbeth&apos;s moral weakness by
              contrast. <strong>Ross</strong> functions as a messenger whose confirmation of the
              Cawdor title serves as the catalyst for Macbeth&apos;s growing belief in the prophecy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              This is the play&apos;s inciting incident. The prophecy creates the central dramatic
              question: will Macbeth act on it? Shakespeare uses the aside and soliloquy to give the
              audience access to Macbeth&apos;s inner conflict, establishing the intimate
              psychological focus that distinguishes this tragedy. The rapid confirmation of the
              Cawdor prophecy creates momentum &mdash; if one prophecy comes true immediately, the
              kingship prophecy feels inevitable.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`The Supernatural`)}</Badge>
              <Badge variant="outline">Ambition</Badge>
              <Badge variant="outline">{_tr(`Fate vs Free Will`)}</Badge>
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 4 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-violet-400" />
            {_tr(`Scene 4 — Duncan Names His Heir`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              At the palace, Duncan receives confirmation that the former Thane of Cawdor has been
              executed and &ldquo;died as one that had been studied in his death.&rdquo; Duncan
              reflects on the impossibility of reading character from appearance. He praises Macbeth
              and Banquo lavishly, then names his son Malcolm as Prince of Cumberland &mdash; heir
              to the throne. This represents a direct obstacle to Macbeth&apos;s ambition, and
              Macbeth responds with a dark aside.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `Duncan names Malcolm as his heir, blocking Macbeth&apos;s path to the throne and forcing him to consider active intervention rather than passive waiting.`,
                )}
              </li>
              <li>
                {_tr(
                  `Duncan&apos;s comments about the treacherous Cawdor create devastating dramatic irony &mdash; the new Cawdor stands before him, already contemplating murder.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macbeth shifts from &ldquo;chance may crown me&rdquo; to actively desiring dark action.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;There&rsquo;s no art / To find the mind&rsquo;s construction in the
                  face.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Dramatic irony.
                  Duncan speaks about the impossibility of reading treachery in someone&apos;s
                  appearance &mdash; at the exact moment he is placing absolute trust in Macbeth.
                  The irony is compounded because Duncan has just been betrayed by one Cawdor and is
                  about to be betrayed by the next.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Stars, hide your fires; / Let not light see my black and deep
                  desires.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Apostrophe,
                  light/dark imagery &amp; rhyming couplet. Macbeth directly addresses the stars,
                  asking heaven to look away. The opposition of &ldquo;fires&rdquo; (light,
                  goodness) and &ldquo;black&rdquo; (darkness, evil) externalises his inner
                  conflict. The rhyming couplet gives the aside a decisive, spell-like quality
                  &mdash; as if speaking the words makes the commitment real.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;He was a gentleman on whom I built / An absolute trust.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Dramatic irony.
                  Duncan expresses total trust in the former Cawdor, then immediately does the same
                  with the new Cawdor. The word &ldquo;absolute&rdquo; emphasises how completely
                  Duncan fails to learn from experience.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>Duncan</strong> displays the generosity and trust that define him, but also
              the naivety that makes him vulnerable. His failure to learn from Cawdor&apos;s
              betrayal is his tragic weakness. <strong>Macbeth</strong> makes a critical
              psychological shift: he moves from passive contemplation (&ldquo;chance may crown
              me&rdquo;) to active desire. Malcolm&apos;s appointment as heir transforms the
              prophecy from a comfortable possibility into something requiring violent action.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              This scene raises the dramatic stakes. Until now, Macbeth could wait passively for the
              prophecy to fulfil itself. Malcolm&apos;s appointment eliminates that option, creating
              urgency and forcing Macbeth towards active villainy. The juxtaposition of
              Duncan&apos;s public praise with Macbeth&apos;s private asides creates a gap between
              surface and depth that mirrors the play&apos;s central theme.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
              <Badge variant="outline">Ambition</Badge>
              <Badge variant="outline">{_tr(`Kingship &amp; Power`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 5 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-violet-400" />
            {_tr(`Scene 5 — Lady Macbeth&apos;s Ambition`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              Lady Macbeth reads a letter from Macbeth describing the witches&apos; prophecy. She
              immediately resolves that Macbeth must become king but fears he is &ldquo;too full
              o&rsquo; th&rsquo; milk of human kindness&rdquo; to take the necessary action. She
              calls on dark spirits to &ldquo;unsex me here&rdquo; and fill her with cruelty. When a
              messenger announces that Duncan will visit their castle that night, she sees her
              opportunity. Macbeth arrives and she begins her persuasion.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `Lady Macbeth is introduced as a force of will who immediately grasps the opportunity and its obstacles.`,
                )}
              </li>
              <li>
                {_tr(
                  `Her invocation of spirits parallels the witches, aligning her with supernatural evil.`,
                )}
              </li>
              <li>
                {_tr(
                  `She takes charge of the murder plot, instructing Macbeth to &ldquo;look like th&rsquo; innocent flower, / But be the serpent under&rsquo;t.&rdquo;`,
                )}
              </li>
              <li>
                {_tr(`Duncan&apos;s visit to their castle creates the opportunity for murder.`)}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Yet do I fear thy nature; / It is too full o&rsquo; th&rsquo; milk of human
                  kindness.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Metaphor.
                  &ldquo;Milk&rdquo; associates kindness with femininity and nurturing. Lady Macbeth
                  sees her husband&apos;s conscience as a weakness to be overcome. Ironically, her
                  assessment reveals that she understands his fundamental decency &mdash; she must
                  actively corrupt it.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Unsex me here, / And fill me from the crown to the toe top-full / Of direst
                  cruelty.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Imperative verbs,
                  invocation &amp; imagery. &ldquo;Unsex&rdquo; demands the removal of all feminine
                  compassion. The image of being filled &ldquo;from the crown to the toe&rdquo; with
                  cruelty suggests a total bodily possession, paralleling demonic possession. The
                  invocation of &ldquo;murdering ministers&rdquo; and &ldquo;thick night&rdquo;
                  aligns her with the witches&apos; supernatural realm.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Come, thick night, / And pall thee in the dunnest smoke of hell.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Imperative,
                  darkness imagery &amp; religious language. Lady Macbeth asks darkness to conceal
                  her actions from heaven. &ldquo;Pall&rdquo; evokes a funeral shroud, foreshadowing
                  death. The reference to &ldquo;hell&rdquo; explicitly aligns the planned murder
                  with damnation.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Look like th&rsquo; innocent flower, / But be the serpent
                  under&rsquo;t.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Biblical allusion
                  &amp; simile. The serpent alludes to the temptation of Eve in the Garden of Eden,
                  casting Duncan as innocent Adam and the Macbeths as agents of the devil. This
                  compact instruction encapsulates the appearance vs reality theme.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Come to my woman&rsquo;s breasts, / And take my milk for gall.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Imperative &amp;
                  disturbing imagery. Lady Macbeth asks the spirits to replace nurturing breast milk
                  with bitter poison (&ldquo;gall&rdquo;). This violent rejection of maternal
                  instinct makes her ambition seem unnatural and transgressive, reinforcing the
                  theme of nature disrupted.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>{_tr(`Lady Macbeth`)}</strong> is introduced as the play&apos;s most dynamic
              character. Her soliloquy reveals formidable intelligence, ruthless ambition, and a
              willingness to invoke supernatural evil. She immediately takes charge of the plot,
              relegating Macbeth to a subordinate role. Her language is more decisive and commanding
              than his &mdash; she uses imperatives where he uses questions. However, her need to
              call on spirits to suppress her femininity reveals that cruelty does not come
              naturally to her &mdash; a crucial point for understanding her later breakdown.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              This scene transfers dramatic energy from Macbeth to Lady Macbeth. While Macbeth has
              been wavering, she acts with immediate decisiveness. The soliloquy mirrors
              Macbeth&apos;s asides but surpasses them in intensity and commitment, establishing her
              as the driving force behind the murder. Structurally, the scene moves the plot from
              abstract temptation to concrete planning.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`Gender &amp; Masculinity`)}</Badge>
              <Badge variant="outline">Ambition</Badge>
              <Badge variant="outline">{_tr(`The Supernatural`)}</Badge>
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 6 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-violet-400" />
            {_tr(`Scene 6 — Duncan Arrives at Inverness`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              Duncan arrives at Macbeth&apos;s castle (Inverness) and praises its pleasant location.
              Banquo notes that the house martin &mdash; a bird associated with domestic peace
              &mdash; nests there, suggesting a safe and welcoming environment. Lady Macbeth greets
              Duncan with elaborate courtesy and performs the role of the perfect hostess.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `Duncan&apos;s praise of the castle is deeply ironic &mdash; he is entering the site of his murder.`,
                )}
              </li>
              <li>
                {_tr(
                  `Lady Macbeth successfully performs the role of gracious host, demonstrating her skill at deception.`,
                )}
              </li>
              <li>
                {_tr(
                  `The scene&apos;s tranquil surface contrasts with the violence planned beneath it.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;This castle hath a pleasant seat; the air / Nimbly and sweetly recommends
                  itself / Unto our gentle senses.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Dramatic irony
                  &amp; sensory language. Duncan finds the air &ldquo;sweet&rdquo; at the very place
                  where he will be murdered. The gentle, pleasant language of this scene creates a
                  calm surface that masks the violence beneath &mdash; the ultimate expression of
                  &ldquo;fair is foul.&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;The temple-haunting martlet&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Symbolism &amp;
                  dramatic irony. Banquo observes that the martin (a bird associated with churches
                  and sanctuaries) nests at the castle, suggesting sanctity and safety. The word
                  &ldquo;temple&rdquo; is ironic: the castle is about to become a site of
                  sacrilegious murder rather than sacred sanctuary.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              This short, peaceful scene functions as the calm before the storm. Shakespeare
              deliberately creates a tone of domestic tranquillity to heighten the horror of what
              follows. The scene also demonstrates Lady Macbeth&apos;s ability to perform innocence
              &mdash; she follows her own advice to &ldquo;look like th&rsquo; innocent
              flower&rdquo; with complete success. Duncan&apos;s trusting nature makes him an easy
              victim.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
              <Badge variant="outline">{_tr(`Kingship &amp; Power`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 7 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-violet-400" />
            {_tr(`Scene 7 — &ldquo;If It Were Done&rdquo; &mdash; The Decision`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              Macbeth delivers his famous soliloquy weighing the reasons for and against murdering
              Duncan. He concludes he has no justification except &ldquo;vaulting ambition.&rdquo;
              He tells Lady Macbeth they will proceed no further. She responds with a devastating
              attack on his manhood, describing how she would dash her own baby&apos;s brains out
              rather than break such a promise. She lays out the practical plan: get Duncan&apos;s
              guards drunk, murder Duncan in his sleep, smear the guards with blood. Macbeth,
              overwhelmed by her force of will, agrees.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `Macbeth decides against the murder &mdash; then is persuaded back by Lady Macbeth.`,
                )}
              </li>
              <li>
                {_tr(`This is the turning point of Act 1: the decision to kill Duncan is made.`)}
              </li>
              <li>
                {_tr(
                  `Lady Macbeth&apos;s manipulation of gender expectations is at its most powerful.`,
                )}
              </li>
              <li>{_tr(`The practical plan for the murder is established.`)}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;If it were done when &rsquo;tis done, then &rsquo;twere well / It were done
                  quickly.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Euphemism &amp;
                  conditional syntax. Macbeth cannot name the murder directly, using
                  &ldquo;it&rdquo; and &ldquo;done&rdquo; as evasions. The tangled syntax of the
                  conditional (&ldquo;if... when... then... &rsquo;twere&rdquo;) mirrors his
                  psychological confusion. He tries to reduce murder to a simple transaction but
                  cannot.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;I have no spur / To prick the sides of my intent, but only / Vaulting
                  ambition, which o&rsquo;erleaps itself / And falls on the other.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Extended metaphor.
                  Macbeth compares his motivation to a horse rider who leaps too ambitiously and
                  falls on the other side. The image of overreaching and falling perfectly describes
                  the tragic arc of the entire play. He has diagnosed his own destruction but
                  proceeds anyway.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;When you durst do it, then you were a man; / And to be more than what you
                  were, you would / Be so much more the man.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Manipulation
                  through gender expectations. Lady Macbeth redefines masculinity as the willingness
                  to commit violence, shaming Macbeth into acting against his conscience. This
                  weaponisation of gender norms is central to the play&apos;s exploration of toxic
                  masculinity.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;I dare do all that may become a man; / Who dares do more is none.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Antithesis &amp;
                  moral reasoning. Macbeth&apos;s retort offers a nobler definition of manhood: true
                  masculinity has limits, and exceeding them makes one less than human. Tragically,
                  he abandons this position within minutes.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;I have given suck, and know / How tender &rsquo;tis to love the babe that
                  milks me; / I would, while it was smiling in my face, / Have plucked my nipple
                  from his boneless gums / And dashed the brains out, had I so sworn.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Hyperbolic imagery
                  &amp; shocking contrast. Lady Macbeth uses the most horrifying image imaginable
                  &mdash; killing her own nursing baby &mdash; to demonstrate her commitment. The
                  juxtaposition of tender maternal language (&ldquo;tender,&rdquo;
                  &ldquo;smiling,&rdquo; &ldquo;boneless gums&rdquo;) with extreme violence
                  (&ldquo;dashed the brains out&rdquo;) is designed to shame Macbeth into matching
                  her resolve.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;False face must hide what the false heart doth know.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Alliteration &amp;
                  rhyming couplet. The repeated &ldquo;false&rdquo; emphasises the theme of
                  deception, while the couplet gives the line a sense of dark resolution. Macbeth
                  has accepted the need for hypocrisy &mdash; a fundamental moral surrender.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>Macbeth</strong> shows genuine moral awareness in his soliloquy: he
              understands that Duncan is a good king, that murder will bring consequences, and that
              his only motive is ambition. His decision to stop is overridden by Lady Macbeth, but
              the audience has seen that he knows what he is doing is wrong.{' '}
              <strong>{_tr(`Lady Macbeth`)}</strong> demonstrates her most extreme persuasive power,
              using emotional manipulation, gender shaming, and the baby-killing image to bludgeon
              her husband into compliance. Her complete control of the practical plan shows her as
              the operational mastermind of the murder.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              Scene 7 is the climax of Act 1. The act has built systematically from prophecy through
              temptation to decision. Macbeth&apos;s soliloquy represents the last moment where he
              could turn back, and Lady Macbeth&apos;s intervention pushes him past the point of no
              return. The scene ends with the couple united in purpose, but their unity is built on
              moral corruption &mdash; it will not survive the consequences. The rhyming couplet at
              the end provides a sense of grim resolution and formal closure to the act.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Ambition</Badge>
              <Badge variant="outline">{_tr(`Gender &amp; Masculinity`)}</Badge>
              <Badge variant="outline">{_tr(`Guilt &amp; Conscience`)}</Badge>
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="size-5 text-blue-400" />
            {_tr(`Practice Exam Questions — Act 1`)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
            <li>
              {_tr(
                `Starting with the witches&apos; opening scene, explore how Shakespeare uses the supernatural to create a sense of moral disorder in Act 1. Refer closely to the language of the text in your answer.`,
              )}
            </li>
            <li>
              {_tr(
                `How does Shakespeare present the relationship between Macbeth and Lady Macbeth in Act 1? Consider the power dynamics, language choices, and gender expectations they negotiate.`,
              )}
            </li>
            <li>
              &ldquo;Macbeth&apos;s downfall begins the moment he hears the prophecy.&rdquo; Using
              Act 1 as your focus, to what extent do you agree with this view? Consider alternative
              readings in your answer.
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" render={<Link href="/revision/texts/macbeth" />}>
          <ArrowLeft className="size-4 mr-1" /> Overview
        </Button>
        <Button variant="outline" render={<Link href="/revision/texts/macbeth/act-2" />}>
          Act 2 <ArrowRight className="size-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
