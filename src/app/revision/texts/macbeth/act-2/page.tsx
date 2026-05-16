import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, ArrowRight, BookOpen, MessageSquare, Sparkles } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata = {
  openGraph: {
    title: 'Macbeth Act 2 — Scene-by-Scene Analysis | The English Hub',
    description:
      'Detailed GCSE analysis of Macbeth Act 2: the murder of Duncan, guilt and its aftermath, key quotes and language techniques.',
  },
  alternates: { canonical: 'https://theenglishhub.app/revision/texts/macbeth/act-2' },
  title: 'Macbeth Act 2 — Scene-by-Scene Analysis',
  description:
    'Detailed GCSE analysis of Macbeth Act 2: the murder of Duncan, guilt and its aftermath, key quotes and language techniques.',
}

export default async function MacbethAct2Page() {
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
          { name: 'Act 2', url: 'https://theenglishhub.app/revision/texts/macbeth/act-2' },
        ]}
      />
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-red-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />
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
              <BookOpen className="mr-1 size-3 text-red-400" />
              {_tr(`Act 2 — The Murder`)}
            </Badge>
            <Badge variant="outline">4 scenes</Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {_tr(`Macbeth — Act 2: Scene-by-Scene Analysis`)}
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Act 2 is the act of action and immediate consequence. Macbeth murders Duncan, is
            instantly consumed by guilt, and Lady Macbeth takes charge. The natural world convulses
            in response to regicide. This act contains some of the play&apos;s most famous imagery
            of blood, guilt, and sleeplessness.
          </p>
        </div>
      </section>

      {/* Scene 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-red-400" />
            {_tr(`Scene 1 — The Dagger Soliloquy`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              After midnight, Banquo and his son Fleance walk the castle corridors. Banquo is uneasy
              and cannot sleep; he tells Macbeth he has dreamed of the &ldquo;three weird
              sisters.&rdquo; Macbeth dismisses the subject but proposes they discuss the prophecy
              later. Left alone, Macbeth hallucinates a floating dagger pointing towards
              Duncan&apos;s chamber. He delivers the famous &ldquo;Is this a dagger&rdquo;
              soliloquy, questioning whether the vision is real or a projection of his guilty mind.
              A bell rings &mdash; Lady Macbeth&apos;s signal &mdash; and Macbeth goes to commit the
              murder.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `Banquo&apos;s restlessness and dream about the witches show his moral awareness &mdash; he senses something wrong.`,
                )}
              </li>
              <li>
                {_tr(
                  `The dagger hallucination is the last moment of psychological conflict before Macbeth acts.`,
                )}
              </li>
              <li>
                {_tr(
                  `The bell signals the transition from planning to execution &mdash; the irreversible step.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Is this a dagger which I see before me, / The handle toward my hand?&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Rhetorical
                  question &amp; ambiguity. Macbeth questions whether the dagger is real or
                  imagined, dramatising the conflict between reality and hallucination. The handle
                  pointing towards him suggests temptation offering itself willingly &mdash; the
                  murder is being placed in his hands. The ambiguity (supernatural vision or
                  psychological projection?) is never resolved.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Art thou not, fatal vision, sensible / To feeling as to sight? Or art thou
                  but / A dagger of the mind, a false creation / Proceeding from the heat-oppressed
                  brain?&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Internal debate
                  &amp; self-interrogation. Macbeth tries to rationalise the hallucination, testing
                  it against physical senses. &ldquo;Heat-oppressed brain&rdquo; is a medical
                  metaphor suggesting fever or madness. The sequence of questions shows a mind
                  desperately trying to maintain rational control as it slips into disorder.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;I see thee still, / And on thy blade and dudgeon gouts of blood, / Which
                  was not so before.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Visual imagery
                  &amp; foreshadowing. The dagger becomes bloodied before the murder occurs, as if
                  foretelling the crime. &ldquo;Gouts&rdquo; (thick drops) is viscerally specific.
                  The imagery anticipates the obsessive blood symbolism that will dominate the rest
                  of the play.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Witchcraft celebrates / Pale Hecate&rsquo;s offerings, and withered murder,
                  / Alarumed by his sentinel, the wolf, / Whose howl&rsquo;s his watch, thus with
                  his stealthy pace, / With Tarquin&rsquo;s ravishing strides, towards his design /
                  Moves like a ghost.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Classical
                  allusion, personification &amp; semantic field. Macbeth aligns himself with
                  Tarquin (the Roman rapist-king), witchcraft, wolves, and ghosts &mdash; all
                  figures of predatory evil. He is narrating his own transformation from soldier to
                  predator. The heavy, monosyllabic rhythm (&ldquo;moves like a ghost&rdquo;) mimics
                  the slow, stealthy approach.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Hear it not, Duncan, for it is a knell / That summons thee to heaven or to
                  hell.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Rhyming couplet
                  &amp; apostrophe. The couplet closes the soliloquy with a sense of grim finality.
                  &ldquo;Knell&rdquo; is a funeral bell, transforming Lady Macbeth&apos;s signal
                  into a death toll. The antithesis of &ldquo;heaven or to hell&rdquo; captures the
                  moral stakes. Addressing the sleeping Duncan creates dramatic irony &mdash;
                  Macbeth warns the man he is about to kill.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>Macbeth</strong> is at the extreme limit of his psychological endurance. The
              hallucination shows a mind fracturing under moral pressure. Crucially, he proceeds
              despite his terror &mdash; his ambition overrides every warning his conscience
              produces. <strong>Banquo</strong> is troubled by bad dreams but maintains his moral
              integrity, refusing to act on the witches&apos; prophecy. His unease provides a quiet
              contrast to Macbeth&apos;s violent inner turmoil.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              The dagger soliloquy is Shakespeare&apos;s psychological preparation of the audience
              for the murder. Rather than showing the killing directly, he shows us Macbeth&apos;s
              mind as it crosses the final threshold. The soliloquy builds tension through its
              imagery of darkness, witchcraft, and predatory movement, then releases it with the
              decisive couplet and the bell. This technique keeps the focus on psychological rather
              than physical horror.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`The Supernatural`)}</Badge>
              <Badge variant="outline">{_tr(`Guilt &amp; Conscience`)}</Badge>
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 2 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-red-400" />
            {_tr(`Scene 2 — The Murder and Its Aftermath`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              Lady Macbeth waits tensely while Macbeth murders Duncan offstage. He returns carrying
              the bloody daggers, deeply shaken and unable to say &ldquo;Amen&rdquo; when the
              sleeping grooms cried &ldquo;God bless us.&rdquo; He hears a voice cry &ldquo;Sleep no
              more! Macbeth does murder sleep.&rdquo; Lady Macbeth is practical and dismissive,
              telling him &ldquo;a little water clears us of this deed.&rdquo; She takes the daggers
              back to smear the grooms with blood. A knocking at the gate startles them both.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `The murder of Duncan occurs offstage &mdash; Shakespeare focuses on psychological aftermath rather than physical act.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macbeth&apos;s immediate guilt is overwhelming; he is already beginning to unravel.`,
                )}
              </li>
              <li>
                {_tr(
                  `Lady Macbeth takes practical charge, returning the daggers and framing the grooms.`,
                )}
              </li>
              <li>
                {_tr(
                  `The roles reverse: the husband who committed murder is paralysed; the wife who stayed behind takes control.`,
                )}
              </li>
              <li>
                {_tr(
                  `The knocking at the gate marks the return of the external world, trapping the Macbeths in their crime.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Methought I heard a voice cry &lsquo;Sleep no more! / Macbeth does murder
                  sleep.&rsquo;&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Auditory
                  hallucination &amp; personification. Sleep is personified as something that can be
                  murdered. By killing the sleeping Duncan, Macbeth has destroyed his own capacity
                  for rest and peace. This prophecy proves literally true: both Macbeths suffer
                  insomnia, and Lady Macbeth&apos;s sleepwalking in Act 5 is the ultimate
                  fulfilment.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Will all great Neptune&rsquo;s ocean wash this blood / Clean from my
                  hand?&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Hyperbole &amp;
                  classical allusion. The image of an entire ocean unable to cleanse his guilt
                  conveys the enormity of regicide. Neptune, the Roman sea god, evokes the vastness
                  of the ocean. The blood here is both literal and metaphorical &mdash; it
                  represents ineradicable guilt.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;No, this my hand will rather / The multitudinous seas incarnadine, / Making
                  the green one red.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Hyperbole &amp;
                  diction contrast. &ldquo;Multitudinous seas incarnadine&rdquo; is elaborate,
                  Latinate vocabulary that gives way to the stark monosyllables of &ldquo;making the
                  green one red.&rdquo; The shift from complex to simple diction mirrors the raw
                  emotional truth breaking through rhetorical polish. His guilt will stain the whole
                  world, not just his hands.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;A little water clears us of this deed.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Understatement
                  &amp; dramatic irony. Lady Macbeth&apos;s dismissive confidence contrasts sharply
                  with Macbeth&apos;s oceanic guilt. This line will be devastatingly reversed in Act
                  5 when she obsessively washes her hands while sleepwalking, unable to remove the
                  imaginary blood. The irony makes her eventual breakdown all the more powerful.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;I am afraid to think what I have done; / Look on&rsquo;t again I dare
                  not.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Confession &amp;
                  inversion. The warrior who &ldquo;unseamed&rdquo; enemies in battle is now
                  terrified by what he has done. The inversion of bravery and fear shows how murder
                  corrodes identity. The short, broken sentences convey psychological
                  disintegration.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>Macbeth</strong> is immediately consumed by guilt. His language becomes
              fragmented, hallucinatory, and obsessed with blood and sleeplessness. The brave
              warrior is reduced to a trembling wreck. <strong>{_tr(`Lady Macbeth`)}</strong> is at
              her most controlled and competent: she dismisses her husband&apos;s terror, takes
              practical action, and keeps the plan on track. However, her dismissal of guilt
              (&ldquo;a little water&rdquo;) plants the seed of dramatic irony for her own
              breakdown. The power dynamic between them is completely inverted from their usual
              relationship.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              Shakespeare keeps the murder offstage, a bold structural choice that places all
              emphasis on psychological experience. The audience hears about the murder through
              Macbeth&apos;s fragmented, hallucinatory account, making it more horrifying than any
              staged violence could be. The scene is structured as a rapid exchange between a
              disintegrating Macbeth and a controlling Lady Macbeth, creating a tense,
              claustrophobic atmosphere. The persistent knocking at the gate provides external
              pressure and leads directly into the Porter scene.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`Guilt &amp; Conscience`)}</Badge>
              <Badge variant="outline">{_tr(`Gender &amp; Masculinity`)}</Badge>
              <Badge variant="outline">{_tr(`The Supernatural`)}</Badge>
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-red-400" />
            {_tr(`Scene 3 — The Porter and the Discovery`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              A drunken porter answers the knocking at the gate, delivering a darkly comic monologue
              imagining himself as the porter of hell-gate. Macduff and Lennox enter and go to wake
              the king. Macduff discovers Duncan&apos;s body and raises the alarm: &ldquo;O horror,
              horror, horror!&rdquo; In the ensuing chaos, Macbeth kills the two grooms, claiming he
              was overcome by fury. Lady Macbeth faints (or pretends to). Duncan&apos;s sons Malcolm
              and Donalbain decide to flee &mdash; Malcolm to England, Donalbain to Ireland &mdash;
              fearing they may be next.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `The Porter scene provides comic relief while deepening the theme of hell and damnation.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macduff discovers the murder &mdash; his horror is genuine and will fuel his later vengeance.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macbeth&apos;s killing of the grooms eliminates potential witnesses but creates suspicion.`,
                )}
              </li>
              <li>
                {_tr(
                  `Malcolm and Donalbain&apos;s flight inadvertently casts suspicion on them, clearing Macbeth&apos;s path to the throne.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Here&rsquo;s a knocking indeed! If a man were porter of hell-gate, he
                  should have old turning the key.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Dark comedy &amp;
                  dramatic irony. The Porter jokes about being the gatekeeper of hell without
                  knowing that a murder has just occurred within. The irony is that the castle
                  literally has become a hell. His references to an &ldquo;equivocator&rdquo;
                  directly allude to the Gunpowder Plot trials and connect to the play&apos;s theme
                  of deceptive language.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;O horror, horror, horror! Tongue nor heart / Cannot conceive nor name
                  thee!&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Triple repetition
                  &amp; hyperbole. Macduff&apos;s genuine horror contrasts with Macbeth&apos;s
                  performed shock. The claim that the crime surpasses language (&ldquo;tongue nor
                  heart cannot conceive nor name&rdquo;) elevates the murder to an almost
                  metaphysical level of evil.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Had I but died an hour before this chance, / I had lived a blessed
                  time.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Dramatic irony
                  &amp; double meaning. Macbeth&apos;s words are intended as conventional mourning
                  but contain a deeper truth: his life was indeed &ldquo;blessed&rdquo; before the
                  murder, and everything since has been cursed. The audience hears the sincerity
                  beneath the performance.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;Where we are, / There&rsquo;s daggers in men&rsquo;s smiles.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Metaphor.
                  Donalbain captures the atmosphere of danger and deception &mdash; smiling faces
                  hide murderous intent. This compact image encapsulates the play&apos;s entire
                  theme of appearance vs reality in six words.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Character Development`)}</h4>
            <p className="text-muted-foreground">
              <strong>Macduff</strong> is established as morally clear-sighted; his genuine horror
              contrasts with Macbeth&apos;s performance. <strong>Macbeth</strong> improvises under
              pressure, killing the grooms and delivering elaborate speeches of grief, but his
              performance is noticeably over-the-top. <strong>{_tr(`Lady Macbeth`)}</strong> faints
              &mdash; whether genuinely or to divert attention from Macbeth&apos;s suspicious
              behaviour is deliberately ambiguous. <strong>{_tr(`Malcolm and Donalbain`)}</strong>{' '}
              show political shrewdness in recognising the danger and fleeing, though their flight
              will be used against them.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              The Porter scene provides a structural bridge between the murder and its discovery.
              Its comedy releases tension briefly before the horror resumes, but its imagery of hell
              and equivocation deepens rather than interrupts the play&apos;s themes. The discovery
              scene then accelerates the pace dramatically, with multiple short exchanges, raised
              voices, and confused movement. Malcolm and Donalbain&apos;s decision to flee sets up
              the political transition that will crown Macbeth in the next scene.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`Appearance vs Reality`)}</Badge>
              <Badge variant="outline">{_tr(`Kingship &amp; Power`)}</Badge>
              <Badge variant="outline">{_tr(`Guilt &amp; Conscience`)}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 4 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5 text-red-400" />
            {_tr(`Scene 4 — Unnatural Events and Macbeth&apos;s Coronation`)}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">
              Ross and an Old Man discuss the unnatural disturbances that have followed
              Duncan&apos;s murder: darkness at noon, Duncan&apos;s horses eating each other, an owl
              killing a falcon. Macduff reports that Malcolm and Donalbain are suspected of paying
              the grooms to murder their father. Macbeth has been named king and gone to Scone for
              his coronation. Macduff pointedly refuses to attend, choosing instead to go home to
              Fife &mdash; an early signal of his opposition.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Key Events &amp; Turning Points`)}</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>
                {_tr(
                  `The natural world reflects the moral disorder caused by regicide &mdash; the Great Chain of Being is disrupted.`,
                )}
              </li>
              <li>
                {_tr(
                  `Malcolm and Donalbain are blamed for the murder, clearing Macbeth&apos;s path.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macbeth is crowned king &mdash; the prophecy is fulfilled, but at terrible cost.`,
                )}
              </li>
              <li>
                {_tr(
                  `Macduff&apos;s refusal to attend the coronation signals his suspicion and future opposition.`,
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Language Analysis`)}</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;By th&rsquo; clock &rsquo;tis day, / And yet dark night strangles the
                  travelling lamp.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Pathetic fallacy
                  &amp; personification. Unnatural darkness covers the land in daylight.
                  &ldquo;Strangles&rdquo; personifies night as a violent assailant attacking the sun
                  (&ldquo;travelling lamp&rdquo;). The natural disorder mirrors the political
                  disorder &mdash; the rightful king has been murdered, and the universe itself
                  rebels.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;A falcon, towering in her pride of place, / Was by a mousing owl hawked at
                  and killed.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Symbolism &amp;
                  inversion. The falcon (a noble bird, representing Duncan) is killed by an owl (a
                  lowly night bird, representing Macbeth). The natural hierarchy of the animal
                  kingdom is inverted, mirroring how a subject has killed his king. This reflects
                  the Jacobean concept of the Great Chain of Being.
                </p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">
                  &ldquo;&rsquo;Tis unnatural, / Even like the deed that&rsquo;s done.&rdquo;
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground">Technique:</span> Euphemism &amp;
                  thematic statement. The Old Man draws a direct connection between the unnatural
                  events and the &ldquo;unnatural&rdquo; murder. Regicide is not merely a crime but
                  a violation of the divine order that causes cosmic disruption.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Structural Analysis`)}</h4>
            <p className="text-muted-foreground">
              Scene 4 serves as an epilogue to Act 2, stepping outside the castle to show the wider
              impact of Duncan&apos;s murder. The Old Man is a choric figure whose role is to
              provide commentary and establish that the murder has disrupted the entire natural
              order. Macduff&apos;s refusal to attend the coronation is a seed planted for future
              conflict &mdash; Shakespeare is already preparing the audience for the opposition that
              will eventually bring Macbeth down. The scene closes Act 2 on a note of unease rather
              than triumph, signalling that Macbeth&apos;s reign is cursed from its inception.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">{_tr(`Links to Themes`)}</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{_tr(`The Supernatural`)}</Badge>
              <Badge variant="outline">{_tr(`Kingship &amp; Power`)}</Badge>
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
            {_tr(`Practice Exam Questions — Act 2`)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
            <li>
              {_tr(
                `How does Shakespeare use the imagery of blood in Act 2 to explore ideas about guilt? Refer closely to the language of the text in your answer.`,
              )}
            </li>
            <li>
              {_tr(
                `Explore how the relationship between Macbeth and Lady Macbeth shifts in Act 2, Scene 2. How does Shakespeare use language and structure to present this change?`,
              )}
            </li>
            <li>
              &ldquo;In Act 2, Shakespeare presents guilt as an inescapable force that cannot be
              washed away.&rdquo; To what extent do you agree with this reading? Consider the
              responses of both Macbeth and Lady Macbeth.
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" render={<Link href="/revision/texts/macbeth/act-1" />}>
          <ArrowLeft className="size-4 mr-1" /> Act 1
        </Button>
        <Button variant="outline" render={<Link href="/revision/texts/macbeth/act-3" />}>
          Act 3 <ArrowRight className="size-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
