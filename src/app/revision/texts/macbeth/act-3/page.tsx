import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, ArrowRight, BookOpen, MessageSquare, Sparkles } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Macbeth Act 3 — Scene-by-Scene Analysis | The English Hub',
  description:
    'Detailed GCSE analysis of Macbeth Act 3: Banquo\'s murder, the banquet ghost, paranoia and tyranny, key quotes and language techniques.',
}

export default async function MacbethAct3Page() {
  const board = await getServerBoard()
  if (board && !['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'].includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="relative">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground" render={<Link href="/revision/texts/macbeth" />}>
            <ArrowLeft className="size-3.5" />
            Back to Macbeth overview
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary"><BookOpen className="mr-1 size-3 text-clay-600" />Act 3 — Paranoia &amp; Tyranny</Badge>
            <Badge variant="outline">6 scenes</Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">Macbeth — Act 3: Scene-by-Scene Analysis</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Act 3 marks Macbeth&apos;s transformation from reluctant murderer to active tyrant. He now takes the initiative in ordering killings, no longer needing Lady Macbeth&apos;s persuasion. Banquo&apos;s murder and the ghost at the banquet reveal a king consumed by paranoia, while Lady Macbeth begins her decline from commanding partner to helpless observer.
          </p>
        </div>
      </section>

      {/* Scene 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-clay-600" />Scene 1 — Macbeth Plans Banquo&apos;s Murder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">Banquo, alone, reflects that Macbeth now has everything the witches promised and suspects he &ldquo;play&rsquo;dst most foully for&rsquo;t.&rdquo; He also recalls the prophecy that his descendants will be kings. Macbeth, now king, interrogates Banquo about his travel plans, then dismisses the court. In a soliloquy, Macbeth reveals his fear of Banquo&apos;s &ldquo;royalty of nature&rdquo; and the prophecy that Banquo&apos;s children will inherit the throne. He summons two murderers and persuades them to kill Banquo and his son Fleance.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Key Events &amp; Turning Points</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Macbeth acts independently for the first time, ordering murder without Lady Macbeth&apos;s involvement.</li>
              <li>His motivation shifts from ambition to fear &mdash; he kills not to gain the throne but to keep it.</li>
              <li>He uses the same technique Lady Macbeth used on him: questioning the murderers&apos; manhood.</li>
              <li>Banquo&apos;s suspicion that Macbeth &ldquo;play&rsquo;dst most foully&rdquo; makes him a threat to the regime.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Language Analysis</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Thou hast it now: King, Cawdor, Glamis, all, / As the weird women promised, and I fear / Thou play&rsquo;dst most foully for&rsquo;t.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> List structure &amp; euphemism. Banquo&apos;s listing mirrors the witches&apos; original prophecy. &ldquo;Play&rsquo;dst most foully&rdquo; is a deliberate understatement for murder &mdash; even Banquo cannot bring himself to name the crime directly. The verb &ldquo;play&rsquo;dst&rdquo; suggests performance and deception.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;To be thus is nothing, / But to be safely thus.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Antithesis &amp; paradox. Being king means nothing without security. This captures the tragic irony of Macbeth&apos;s situation: he has achieved his ambition but cannot enjoy it. The word &ldquo;safely&rdquo; is ironic &mdash; safety through murder is no safety at all.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Upon my head they placed a fruitless crown / And put a barren sceptre in my grip.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Metaphor &amp; semantic field of infertility. &ldquo;Fruitless&rdquo; and &ldquo;barren&rdquo; suggest sterility &mdash; Macbeth&apos;s line will not inherit the throne. The imagery connects to the unnatural disruption caused by regicide: Macbeth has seized power but cannot reproduce it naturally. He is a dead end.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;There is none but he / Whose being I do fear; and under him / My genius is rebuked.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Classical allusion. &ldquo;Genius&rdquo; here means guardian spirit (the Roman concept). Macbeth admits that Banquo&apos;s moral superiority diminishes him. His &ldquo;royalty of nature&rdquo; &mdash; innate nobility &mdash; is everything Macbeth&apos;s stolen kingship lacks.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Character Development</h4>
            <p className="text-muted-foreground"><strong>Macbeth</strong> has evolved from hesitant killer to calculating tyrant. He no longer agonises over murder &mdash; he plans it coldly and uses manipulation (questioning the murderers&apos; manhood) just as Lady Macbeth once manipulated him. This mirroring shows how corruption is self-replicating. <strong>Banquo</strong> suspects the truth but does not act on it, raising questions about his own moral courage. He knows Macbeth may have committed murder yet chooses silence rather than confrontation.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Structural Analysis</h4>
            <p className="text-muted-foreground">This scene marks a structural turning point: Macbeth now drives the plot independently, without Lady Macbeth&apos;s input. The pattern of &ldquo;prophecy &rarr; anxiety &rarr; violence&rdquo; repeats, but this time Macbeth moves through it more quickly and with less moral anguish. The acceleration of his descent into tyranny mirrors the play&apos;s accelerating pace.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Links to Themes</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Ambition</Badge>
              <Badge variant="outline">Kingship &amp; Power</Badge>
              <Badge variant="outline">Gender &amp; Masculinity</Badge>
              <Badge variant="outline">The Supernatural</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 2 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-clay-600" />Scene 2 — &ldquo;Nought&rsquo;s Had, All&rsquo;s Spent&rdquo;</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">Lady Macbeth, alone, reveals her own discontent: &ldquo;Nought&rsquo;s had, all&rsquo;s spent, / Where our desire is got without content.&rdquo; Macbeth enters and confesses he is tortured by &ldquo;terrible dreams&rdquo; and envies Duncan, who &ldquo;sleeps well&rdquo; in death. He hints at a plan against Banquo but does not share the details with Lady Macbeth, telling her to &ldquo;be innocent of the knowledge, dearest chuck.&rdquo;</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Key Events &amp; Turning Points</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Lady Macbeth&apos;s private admission of unhappiness shows the crown has brought no satisfaction.</li>
              <li>Macbeth excludes Lady Macbeth from his plans &mdash; their partnership is fracturing.</li>
              <li>The power dynamic shifts: Macbeth is now the active plotter, Lady Macbeth the passive observer.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Language Analysis</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Nought&rsquo;s had, all&rsquo;s spent, / Where our desire is got without content.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Rhyming couplet &amp; paradox. The rhyme (&ldquo;spent/content&rdquo;) gives the observation a proverbial quality, making it sound like a universal truth. They have gained everything but possess nothing of value. This line encapsulates the entire moral of the play in two lines.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;O, full of scorpions is my mind, dear wife!&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Metaphor &amp; contrast. Macbeth&apos;s mind is filled with stinging, poisonous creatures &mdash; paranoid thoughts that torment him constantly. The tender address &ldquo;dear wife&rdquo; creates a poignant contrast with the violent imagery, showing a man reaching for comfort while consumed by horror.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Duncan is in his grave; / After life&rsquo;s fitful fever he sleeps well.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Irony &amp; metaphor. Macbeth envies the man he murdered, recognising that Duncan has found the peace that he himself can never have. Life is reduced to a &ldquo;fitful fever&rdquo; &mdash; restless, painful, and temporary. The sleep motif returns: Macbeth murdered sleep and now envies the sleep of the dead.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Be innocent of the knowledge, dearest chuck.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Dramatic irony &amp; patronising register. The affectionate term &ldquo;chuck&rdquo; is incongruously casual in the context of murder planning. Macbeth is now protecting Lady Macbeth from knowledge she once demanded, reversing their earlier dynamic. His exclusion of her marks the beginning of their psychological separation.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Character Development</h4>
            <p className="text-muted-foreground"><strong>Lady Macbeth</strong> is diminished. The woman who orchestrated Duncan&apos;s murder is now kept ignorant of her husband&apos;s plans. Her soliloquy reveals the emptiness of their achievement. <strong>Macbeth</strong> has become the dominant partner, but his dominance is fuelled by madness rather than strength. His language oscillates between paranoid violence and desperate tenderness.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Structural Analysis</h4>
            <p className="text-muted-foreground">This intimate scene between the Macbeths reveals the private cost of their public power. It functions as a quiet interlude between the planning of Banquo&apos;s murder and its execution, allowing the audience to see that the crown has brought no happiness. The fracturing of the Macbeths&apos; partnership foreshadows their complete separation by Act 5.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Links to Themes</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Guilt &amp; Conscience</Badge>
              <Badge variant="outline">Ambition</Badge>
              <Badge variant="outline">Gender &amp; Masculinity</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-clay-600" />Scene 3 — Banquo&apos;s Murder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">Three murderers (a third has been added by Macbeth) ambush Banquo and Fleance near the castle. Banquo is killed, but Fleance escapes into the darkness. The murderers&apos; light is extinguished during the attack.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Key Events &amp; Turning Points</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Banquo is murdered &mdash; Macbeth&apos;s descent into tyranny deepens.</li>
              <li>Fleance&apos;s escape is crucial: the witches&apos; prophecy that Banquo&apos;s descendants will be kings remains intact.</li>
              <li>The third murderer&apos;s identity is never explained, creating interpretive ambiguity.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Language Analysis</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;O treachery! Fly, good Fleance, fly, fly, fly!&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Repetition &amp; imperative. Banquo&apos;s dying words are not for himself but for his son. The triple repetition of &ldquo;fly&rdquo; conveys desperate urgency. His selfless final act contrasts with Macbeth&apos;s self-serving violence.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Who did strike out the light?&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Symbolism. The light being extinguished during the murder is literal (their torch goes out) but also symbolic: goodness and moral clarity are being snuffed out. Light/dark imagery pervades the play, and this moment shows darkness triumphing.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Structural Analysis</h4>
            <p className="text-muted-foreground">This short, violent scene mirrors the offstage murder of Duncan but shows it directly for the first time. Shakespeare is demonstrating that Macbeth&apos;s violence has become more overt. Fleance&apos;s escape is a structural necessity &mdash; it preserves the witches&apos; prophecy and ensures Macbeth&apos;s insecurity continues. The incomplete success torments Macbeth in the next scene.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Links to Themes</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">The Supernatural</Badge>
              <Badge variant="outline">Kingship &amp; Power</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 4 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-clay-600" />Scene 4 — The Banquet and Banquo&apos;s Ghost</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">At a formal banquet, Macbeth learns from the murderer that Banquo is dead but Fleance has escaped. Macbeth takes his seat only to find Banquo&apos;s ghost occupying his place. Macbeth reacts with terror, raving at the empty chair while the assembled lords watch in alarm. Lady Macbeth attempts to control the situation, questioning his manhood and dismissing his behaviour as a temporary fit. The ghost appears and vanishes twice. The banquet collapses and the lords depart. Macbeth resolves to visit the witches again. He notes that Macduff has refused his invitation, escalating his suspicion.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Key Events &amp; Turning Points</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Banquo&apos;s ghost appears &mdash; either supernatural visitation or Macbeth&apos;s guilt made visible.</li>
              <li>Macbeth&apos;s public breakdown reveals his guilt to the Scottish lords, undermining his authority.</li>
              <li>Lady Macbeth&apos;s attempt to maintain appearances fails &mdash; she is losing control of her husband and the situation.</li>
              <li>Macbeth resolves to visit the witches again, seeking security through deeper engagement with the supernatural.</li>
              <li>Macduff&apos;s absence is noted, marking him as Macbeth&apos;s next target.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Language Analysis</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;I am in blood / Stepp&rsquo;d in so far that, should I wade no more, / Returning were as tedious as go o&rsquo;er.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Extended metaphor. Guilt is imagined as a river of blood Macbeth has waded halfway across. The word &ldquo;tedious&rdquo; is chillingly understated &mdash; returning to virtue has become merely inconvenient. This metaphor suggests moral entrapment: once past a certain point, the cost of redemption feels equal to the cost of continued evil.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Thou canst not say I did it; never shake / Thy gory locks at me.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Dramatic irony &amp; apostrophe. Macbeth addresses the ghost that only he can see, publicly revealing his guilt while trying to deny it. &ldquo;Gory locks&rdquo; is viscerally physical, making the ghost&apos;s presence graphic. The lords see a king raving at an empty chair, which is politically devastating.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;It will have blood, they say: blood will have blood.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Repetition &amp; proverbial statement. The repetition of &ldquo;blood&rdquo; creates a sense of inescapable cycle. Violence begets violence. Macbeth recognises the pattern but sees no way out except more violence &mdash; this is the logic of tyranny.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;Are you a man?&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Rhetorical question &amp; gender manipulation. Lady Macbeth echoes her Act 1 tactic of questioning Macbeth&apos;s masculinity, but it is less effective now. Her power over him is waning. The question also ironically suggests that Macbeth&apos;s behaviour has made him less than a man.</p>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;I am a man again.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Irony. When the ghost vanishes, Macbeth claims to be restored. But the audience knows he is less of a man with each crime. The line echoes the gender debate from Act 1 &mdash; Lady Macbeth&apos;s definition of manhood through violence has led to psychological destruction rather than strength.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Character Development</h4>
            <p className="text-muted-foreground"><strong>Macbeth</strong> is publicly exposed. His attempt to play the gracious king at the banquet disintegrates when his private guilt erupts into public view. The scene shows a man whose inner and outer worlds can no longer be kept separate. <strong>Lady Macbeth</strong> attempts to manage the crisis, but her power is visibly diminishing. She can question his manhood, but she can no longer control his actions or his mind. The banquet marks the point where she becomes a secondary figure in the tragedy.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Structural Analysis</h4>
            <p className="text-muted-foreground">The banquet scene is the climax of Act 3 and, arguably, of the entire play. It is a public spectacle that collapses into private nightmare. Structurally, it mirrors the Porter scene &mdash; a social gathering interrupted by the consequences of murder. The ghost&apos;s appearance (and whether it is real or imagined) links to the dagger hallucination in Act 2, creating a pattern of escalating supernatural or psychological disturbance. After this scene, Macbeth&apos;s reign becomes openly tyrannical.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Links to Themes</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Guilt &amp; Conscience</Badge>
              <Badge variant="outline">The Supernatural</Badge>
              <Badge variant="outline">Appearance vs Reality</Badge>
              <Badge variant="outline">Kingship &amp; Power</Badge>
              <Badge variant="outline">Gender &amp; Masculinity</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 5 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-clay-600" />Scene 5 — Hecate&apos;s Intervention</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">Hecate, the goddess of witchcraft, reprimands the three witches for dealing with Macbeth without her involvement. She instructs them to prepare more deceptive apparitions that will give Macbeth false confidence. This scene is widely considered to be a later addition by Thomas Middleton rather than Shakespeare.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Language Analysis</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;And you all know, security / Is mortals&rsquo; chiefest enemy.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Proverbial statement &amp; dramatic irony. &ldquo;Security&rdquo; here means overconfidence. Hecate reveals the witches&apos; strategy: make Macbeth feel invincible so he drops his guard. This is precisely what happens in Act 4 &mdash; the prophecies give Macbeth false security that leads to his downfall.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Structural Analysis</h4>
            <p className="text-muted-foreground">Most scholars believe this scene was added by Middleton for a later revival and is not by Shakespeare. Its rhyming couplets and song-like quality differ from the witches&apos; scenes elsewhere. However, for GCSE purposes, it reveals the supernatural intention behind the Act 4 prophecies: they are designed to deceive, not inform. This makes Macbeth&apos;s trust in them all the more tragic.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Links to Themes</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">The Supernatural</Badge>
              <Badge variant="outline">Appearance vs Reality</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scene 6 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Sparkles className="size-5 text-clay-600" />Scene 6 — Lennox&apos;s Suspicions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Summary</h4>
            <p className="text-muted-foreground">Lennox speaks ironically about the &ldquo;convenient&rdquo; deaths surrounding Macbeth, making it clear that the nobles suspect him. A lord reports that Macduff has gone to England to join Malcolm and seek military aid from King Edward. Macbeth is now openly feared rather than respected.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Language Analysis</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <p className="font-medium">&ldquo;The son of Duncan / Lives in the English court and is received / Of the most pious Edward with such grace.&rdquo;</p>
                <p className="text-sm text-muted-foreground mt-1"><span className="font-medium text-foreground">Technique:</span> Contrast. &ldquo;Pious Edward&rdquo; (the English king) is presented as a model of legitimate, God-blessed rule, contrasting sharply with Macbeth&apos;s tyranny. This sets up the political resolution: legitimate kingship in England will restore legitimate kingship in Scotland.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Structural Analysis</h4>
            <p className="text-muted-foreground">This scene shifts perspective from Macbeth&apos;s court to his opponents. Lennox&apos;s ironic commentary shows that Macbeth&apos;s crimes are no longer secret. The scene establishes the political forces that will challenge Macbeth in Acts 4 and 5, building towards the play&apos;s resolution. It closes Act 3 by showing that Macbeth&apos;s power is already being undermined.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Links to Themes</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Kingship &amp; Power</Badge>
              <Badge variant="outline">Appearance vs Reality</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><MessageSquare className="size-5 text-blue-400" />Practice Exam Questions — Act 3</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
            <li>How does Shakespeare present Macbeth as an increasingly isolated and paranoid ruler in Act 3? Refer closely to language, form, and structure in your answer.</li>
            <li>Explore how Shakespeare uses the banquet scene (Act 3, Scene 4) to dramatise the consequences of guilt. Consider how the scene would affect an audience.</li>
            <li>&ldquo;By Act 3, the relationship between Macbeth and Lady Macbeth has fundamentally changed.&rdquo; How far do you agree with this statement? Refer closely to the text in your answer.</li>
          </ol>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" render={<Link href="/revision/texts/macbeth/act-2" />}>
          <ArrowLeft className="size-4 mr-1" /> Act 2
        </Button>
        <Button variant="outline" render={<Link href="/revision/texts/macbeth/act-4" />}>
          Act 4 <ArrowRight className="size-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}
