import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'

/* ── SEO ────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    'The Charge of the Light Brigade -- Alfred Lord Tennyson | Power & Conflict Poetry | The English Hub',
  description:
    'Interactive GCSE revision for The Charge of the Light Brigade by Alfred Lord Tennyson. Annotated poem, key quotes, language devices, form & structure, and comparison poems.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade',
  },
  openGraph: {
    title:
      'The Charge of the Light Brigade -- Tennyson | GCSE Poetry Revision',
    description:
      'Full interactive study guide for The Charge of the Light Brigade: stanza-by-stanza summary, context, key quotes, language analysis and comparison poems.',
  },
}

/* ── Poem data ──────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'The Charge of the Light Brigade',
  poet: 'Alfred Lord Tennyson',

  /* ── Full text: 6 stanzas ─────────────────────────────────────── */
  lines: [
    /* Stanza 1 */
    { text: 'Half a league, half a league,', annotations: [
      { type: 'Dactylic metre', note: 'The stressed-unstressed-unstressed rhythm imitates the galloping of horses charging forward.', color: '#a855f7' },
      { type: 'Repetition', note: 'Triple repetition of "half a league" creates a relentless forward momentum, mirroring the unstoppable charge.', color: '#f59e0b' },
    ] },
    { text: 'Half a league onward,' },
    { text: 'All in the valley of Death', annotations: [
      { type: 'Biblical allusion', note: 'Echoes Psalm 23 ("the valley of the shadow of death"), framing the battlefield as a place of inevitable death.', color: '#3b82f6' },
      { type: 'Personification', note: 'Death is capitalised and personified as a looming presence that the soldiers ride directly towards.', color: '#10b981' },
    ] },
    { text: '\u2003\u2003Rode the six hundred.' },
    { text: '\u201CForward, the Light Brigade!' },
    { text: 'Charge for the guns!\u201D he said.' },
    { text: 'Into the valley of Death', annotations: [
      { type: 'Refrain', note: 'The repetition of "the valley of Death" reinforces that every soldier knows the likely outcome, yet they press on.', color: '#f59e0b' },
    ] },
    { text: '\u2003\u2003Rode the six hundred.' },
    { text: '' },

    /* Stanza 2 */
    { text: '\u201CForward, the Light Brigade!\u201D', annotations: [
      { type: 'Direct speech', note: 'The command is repeated from Stanza 1, emphasising duty and obedience as central values.', color: '#3b82f6' },
    ] },
    { text: 'Was there a man dismay\u2019d?' },
    { text: 'Not tho\u2019 the soldier knew', annotations: [
      { type: 'Rhetorical question + enjambment', note: 'The question and its answer run across lines, suggesting the soldiers\u2019 courage was instinctive and immediate.', color: '#10b981' },
    ] },
    { text: '\u2003\u2003Some one had blunder\u2019d.' },
    { text: 'Theirs not to make reply,', annotations: [
      { type: 'Anaphora', note: '"Theirs not to..." is repeated three times, hammering home the soldiers\u2019 total obedience and lack of agency.', color: '#f59e0b' },
    ] },
    { text: 'Theirs not to reason why,' },
    { text: 'Theirs but to do and die.' },
    { text: 'Into the valley of Death' },
    { text: '\u2003\u2003Rode the six hundred.' },
    { text: '' },

    /* Stanza 3 */
    { text: 'Cannon to right of them,', annotations: [
      { type: 'Repetition / listing', note: 'The repeated structure "Cannon to right / left / in front" surrounds the reader just as the cannons surround the soldiers, creating a sense of entrapment.', color: '#f59e0b' },
    ] },
    { text: 'Cannon to left of them,' },
    { text: 'Cannon in front of them' },
    { text: '\u2003\u2003Volley\u2019d and thunder\u2019d;', annotations: [
      { type: 'Onomatopoeia', note: '"Volley\u2019d and thunder\u2019d" recreates the deafening sounds of gunfire and cannon blasts, immersing the reader in the chaos of battle.', color: '#10b981' },
    ] },
    { text: 'Storm\u2019d at with shot and shell,', annotations: [
      { type: 'Metonymy / metaphor', note: '"Storm\u2019d" compares the barrage to a natural storm, implying the attack was overwhelming and beyond human control.', color: '#10b981' },
    ] },
    { text: 'Boldly they rode and well,' },
    { text: 'Into the jaws of Death,', annotations: [
      { type: 'Personification', note: 'Death is given "jaws" like a predatory beast, suggesting the soldiers are being consumed by the battle.', color: '#10b981' },
      { type: 'Metonymy', note: '"Jaws of Death" and "mouth of Hell" use body parts to represent abstract concepts of mortality and suffering.', color: '#ef4444' },
    ] },
    { text: 'Into the mouth of Hell' },
    { text: '\u2003\u2003Rode the six hundred.' },
    { text: '' },

    /* Stanza 4 */
    { text: 'Flash\u2019d all their sabres bare,', annotations: [
      { type: 'Imagery', note: 'The visual flash of drawn swords conveys both the bravery and the futility of cavalry with swords against cannon.', color: '#3b82f6' },
    ] },
    { text: 'Flash\u2019d as they turn\u2019d in air' },
    { text: 'Sabring the gunners there,' },
    { text: 'Charging an army, while', annotations: [
      { type: 'Enjambment', note: 'The line runs on, reflecting the continuous, unrelenting momentum of the charge.', color: '#a855f7' },
    ] },
    { text: '\u2003\u2003All the world wonder\u2019d.' },
    { text: 'Plunged in the battery-smoke' },
    { text: 'Right thro\u2019 the line they broke;' },
    { text: 'Cossack and Russian' },
    { text: 'Reel\u2019d from the sabre-stroke' },
    { text: 'Shatter\u2019d and sunder\u2019d.' },
    { text: 'Then they rode back, but not' },
    { text: '\u2003\u2003Not the six hundred.', annotations: [
      { type: 'Structural shift', note: 'The refrain changes from "Rode the six hundred" to "Not the six hundred," marking the devastating losses. The repetition of "not" underscores the tragedy.', color: '#a855f7' },
    ] },
    { text: '' },

    /* Stanza 5 */
    { text: 'Cannon to right of them,', annotations: [
      { type: 'Mirrored structure', note: 'Stanza 5 mirrors Stanza 3, but now the soldiers are retreating. The repeated cannon lines show the danger has not diminished.', color: '#a855f7' },
    ] },
    { text: 'Cannon to left of them,' },
    { text: 'Cannon behind them', annotations: [
      { type: 'Shift in preposition', note: '"Behind" replaces "in front," confirming the soldiers have turned back and are now fleeing through the same deadly corridor.', color: '#f59e0b' },
    ] },
    { text: '\u2003\u2003Volley\u2019d and thunder\u2019d;' },
    { text: 'Storm\u2019d at with shot and shell,' },
    { text: 'While horse and hero fell.' },
    { text: 'They that had fought so well' },
    { text: 'Came thro\u2019 the jaws of Death,', annotations: [
      { type: 'Personification', note: '"Came thro\u2019" suggests the survivors have passed through death itself and emerged, battered, on the other side.', color: '#10b981' },
    ] },
    { text: 'Back from the mouth of Hell,' },
    { text: 'All that was left of them,' },
    { text: '\u2003\u2003Left of six hundred.' },
    { text: '' },

    /* Stanza 6 */
    { text: 'When can their glory fade?', annotations: [
      { type: 'Rhetorical question', note: 'Tennyson directly addresses the reader, demanding that the soldiers be remembered. The implied answer is "never."', color: '#10b981' },
    ] },
    { text: 'O the wild charge they made!' },
    { text: '\u2003\u2003All the world wonder\u2019d.' },
    { text: 'Honour the charge they made!' },
    { text: 'Honour the Light Brigade,', annotations: [
      { type: 'Imperative / anaphora', note: 'The repeated imperative "Honour" is a direct command to the reader, transforming the poem into a public memorial.', color: '#f59e0b' },
    ] },
    { text: '\u2003\u2003Noble six hundred!' },
  ],

  /* ── Context ─────────────────────────────────────────────────── */
  context: `<p><strong>The Crimean War (1853\u20131856)</strong> was fought between Russia and an alliance of Britain, France, the Ottoman Empire and Sardinia. It was one of the first wars to be covered by newspaper reporters and photographers, bringing the reality of conflict directly to the British public.</p>
<p><strong>The Battle of Balaclava (25 October 1854)</strong> saw a catastrophic miscommunication in the British chain of command. Lord Raglan intended the Light Brigade to prevent Russians from removing captured guns from a redoubt, but a vague order\u2014carried by Captain Nolan\u2014was misinterpreted by Lord Lucan and Lord Cardigan. The Light Brigade of roughly 670 cavalrymen charged directly into a valley flanked on three sides by Russian cannon.</p>
<p>Of the approximately 670 men who charged, around <strong>110 were killed, 161 wounded, and dozens captured</strong>. The charge lasted only about twenty minutes but became one of the most infamous military blunders in British history.</p>
<p><strong>Alfred Lord Tennyson</strong> (1809\u20131892) was <strong>Poet Laureate</strong> at the time, a role that carried an expectation to respond to national events. He composed the poem on <strong>2 December 1854</strong>, reportedly in just a few minutes after reading a report in <em>The Times</em> newspaper by W. H. Russell. The phrase <em>\u201Csome one had blunder\u2019d\u201D</em> comes directly from that report.</p>
<p>Tennyson\u2019s poem was published in <em>The Examiner</em> on 9 December 1854, just weeks after the battle. He later sent 1,000 copies to soldiers in the Crimea at their request, showing that the poem served a <strong>morale-boosting and memorialising function</strong>.</p>`,

  /* ── Summary ─────────────────────────────────────────────────── */
  summary: `STANZA 1: The poem opens with the Light Brigade riding forward into "the valley of Death." A commanding officer gives the order to charge. The repetition of "half a league" creates a sense of relentless momentum.

STANZA 2: The soldiers are aware that someone has made a terrible mistake ("Some one had blunder\u2019d"), yet they do not question or disobey the order. Tennyson emphasises their duty: "Theirs not to reason why, / Theirs but to do and die."

STANZA 3: The soldiers are surrounded on three sides by Russian cannon. Tennyson uses onomatopoeia ("Volley\u2019d and thunder\u2019d") and personification ("jaws of Death," "mouth of Hell") to convey the overwhelming danger they face.

STANZA 4: This is the climax of the charge. The soldiers break through the Russian lines with their sabres, and the world watches in astonishment. However, Tennyson immediately undercuts this triumph: "Then they rode back, but not / Not the six hundred." Many have been killed.

STANZA 5: The survivors retreat through the same deadly corridor of cannon fire. This stanza mirrors Stanza 3 in structure, but "in front" becomes "behind," showing the soldiers are now fleeing. "While horse and hero fell" emphasises the continuing losses.

STANZA 6: Tennyson shifts from narrative to direct address. He commands the reader to "Honour the charge they made" and remember the "Noble six hundred." The poem ends as a public memorial and a call to never forget their sacrifice.`,

  /* ── Form & Structure ────────────────────────────────────────── */
  formAndStructure: `METRE: The poem uses a dactylic dimeter/trimeter rhythm (one stressed syllable followed by two unstressed: DUM-da-da). This galloping metre mimics the sound of horses\u2019 hooves, pulling the reader forward at the pace of the charge itself.

STANZA LENGTH: The six stanzas vary in length (8, 9, 9, 12, 11, 6 lines), reflecting the arc of the charge. The longest stanza (4) is the climax of battle; the shortest (6) is the memorial conclusion, mirroring how fewer soldiers remain.

REFRAIN: The repeated line "Rode the six hundred" anchors each stanza but changes through the poem: "Rode the six hundred" \u2192 "Not the six hundred" \u2192 "Left of six hundred" \u2192 "Noble six hundred." This progression tracks the narrative from charge to loss to tribute.

REPETITION: Tennyson uses extensive repetition at every level\u2014words ("cannon," "valley of Death"), phrases ("Theirs not to"), and whole lines. This creates a hypnotic, incantatory quality, as though the poem itself is a drumbeat or a memorial chant.

RHYME: The poem uses irregular rhyme (often couplets or triplets) rather than a fixed scheme. This gives it a ballad-like quality suited to oral recitation and public memorial.

NARRATIVE ARC: The poem follows a clear chronological structure: the order to charge (1\u20132), the charge itself (3\u20134), the retreat (5), and the memorial (6). This mirrors the trajectory of the battle itself.

VOLTA: The shift from Stanza 5 to Stanza 6 marks a turn from narrative to exhortation\u2014Tennyson stops telling the story and starts commanding the reader to remember.`,

  /* ── Key Quotes ──────────────────────────────────────────────── */
  keyQuotes: [
    {
      quote: 'Half a league, half a league, / Half a league onward',
      analysis:
        'The dactylic repetition creates a galloping rhythm that propels the reader forward. "League" is an archaic unit of distance, lending the poem a timeless, epic quality. The triple repetition suggests the charge is unstoppable and inevitable.',
      themes: ['Power of war', 'Duty'],
    },
    {
      quote: 'Into the valley of Death',
      analysis:
        'An allusion to Psalm 23. The capitalised "Death" personifies it as a force the soldiers ride towards knowingly. The phrase recurs as a refrain, binding the poem together and reinforcing the inescapable danger.',
      themes: ['Reality of conflict', 'Death', 'Religion'],
    },
    {
      quote: 'Some one had blunder\u2019d',
      analysis:
        'A deliberately understated acknowledgement of the catastrophic military error. Tennyson uses the vague "Some one" to avoid naming individuals, keeping the focus on the soldiers\u2019 sacrifice rather than assigning blame to commanding officers.',
      themes: ['Power of authority', 'Human cost of war'],
    },
    {
      quote: 'Theirs not to make reply, / Theirs not to reason why, / Theirs but to do and die',
      analysis:
        'The anaphora ("Theirs not to") and the rhyming couplet "why/die" encapsulate the soldiers\u2019 absolute obedience. It is simultaneously admiring (they were courageous) and tragic (obedience led to death). The monosyllabic "do and die" has a blunt finality.',
      themes: ['Duty and honour', 'Power of authority', 'Conflict'],
    },
    {
      quote: 'Cannon to right of them, / Cannon to left of them, / Cannon in front of them',
      analysis:
        'The listing and repetition physically surround the reader with danger, mirroring the soldiers\u2019 entrapment. The prepositions "right," "left," "front" make the hopelessness of the situation spatially concrete.',
      themes: ['Reality of conflict', 'Helplessness', 'Death'],
    },
    {
      quote: 'Into the jaws of Death, / Into the mouth of Hell',
      analysis:
        'Death and Hell are personified as devouring beasts. "Jaws" and "mouth" suggest the soldiers are being consumed. The paired personifications elevate the battle to a mythic struggle between humanity and death itself.',
      themes: ['Death', 'Power of nature', 'Conflict'],
    },
    {
      quote: 'Then they rode back, but not / Not the six hundred',
      analysis:
        'The enjambment forces a pause before the devastating "Not the six hundred." The double negative and the repetition of "not" make the loss hit harder. The refrain has changed\u2014this structural shift marks the human cost.',
      themes: ['Loss', 'Reality of conflict', 'Human cost of war'],
    },
    {
      quote: 'When can their glory fade? / O the wild charge they made!',
      analysis:
        'The rhetorical question demands the answer "never." "Wild" is ambiguous\u2014it suggests both bravery and recklessness. Tennyson insists the charge should be remembered for its courage, not its futility.',
      themes: ['Memory and remembrance', 'Honour', 'Glory'],
    },
    {
      quote: 'Honour the charge they made! / Honour the Light Brigade, / Noble six hundred!',
      analysis:
        'The imperative "Honour" directly commands the reader to remember. "Noble" redefines the soldiers\u2019 refrain\u2014they are no longer just "six hundred" but "Noble six hundred." Tennyson transforms the poem into a permanent memorial.',
      themes: ['Memory and remembrance', 'Honour', 'Duty'],
    },
  ],

  /* ── Language Devices ────────────────────────────────────────── */
  languageDevices: [
    {
      device: 'Anaphora',
      example: 'Theirs not to make reply, / Theirs not to reason why, / Theirs but to do and die',
      effect:
        'The triple repetition of "Theirs" at the start of successive lines hammers home the soldiers\u2019 total lack of agency. They cannot question; they can only obey. The anaphora creates a list-like rhythm that mirrors the mechanical nature of following orders without thought.',
      lineRef: 13,
    },
    {
      device: 'Repetition',
      example: 'Cannon to right of them, / Cannon to left of them, / Cannon in front of them',
      effect:
        'The relentless repetition of "Cannon" physically encloses the reader, recreating the claustrophobia and inescapable danger faced by the soldiers. It also gives the poem a chant-like, incantatory quality suited to public recitation and memorial.',
      lineRef: 19,
    },
    {
      device: 'Personification of Death',
      example: 'Into the jaws of Death, / Into the mouth of Hell',
      effect:
        'Death and Hell are given physical, predatory features ("jaws," "mouth"), transforming them from abstract concepts into devouring beasts. This elevates the soldiers\u2019 sacrifice to a mythic level and emphasises how they willingly rode towards destruction.',
      lineRef: 25,
    },
    {
      device: 'Metonymy',
      example: 'Storm\u2019d at with shot and shell',
      effect:
        '"Shot and shell" stands in for the full arsenal of the Russian army. The use of concrete, tactile nouns makes the abstract violence of war physically immediate. "Storm\u2019d" itself is a metaphor comparing gunfire to a force of nature.',
      lineRef: 23,
    },
    {
      device: 'Onomatopoeia',
      example: 'Volley\u2019d and thunder\u2019d',
      effect:
        'The harsh, explosive sounds of "volley\u2019d" and "thunder\u2019d" recreate the aural chaos of the battlefield. The reader is not just told about the noise but made to hear it through the poem\u2019s own sonic texture.',
      lineRef: 22,
    },
    {
      device: 'Rhetorical questions',
      example: 'Was there a man dismay\u2019d? ... When can their glory fade?',
      effect:
        'The rhetorical questions in Stanzas 2 and 6 engage the reader directly. The first implies "no" (no man was dismayed), praising the soldiers\u2019 courage. The second demands "never," turning the reader into an active participant in the act of remembrance.',
      lineRef: 10,
    },
    {
      device: 'Imperative verbs',
      example: 'Honour the charge they made! / Honour the Light Brigade',
      effect:
        'Tennyson shifts from third-person narrative to second-person command. The imperative "Honour" transforms the poem from a story about the past into a demand upon the present reader\u2014it is not enough to know what happened; you must actively remember and revere it.',
      lineRef: 53,
    },
    {
      device: 'Diminishing refrain',
      example: 'Rode the six hundred \u2192 Not the six hundred \u2192 Left of six hundred \u2192 Noble six hundred',
      effect:
        'The evolving refrain tracks the arc of the poem: from the full brigade charging, to the devastating losses, to the few survivors, to the final elevation of their sacrifice. The structural change within the refrain itself tells the story of the battle.',
      lineRef: 7,
    },
  ],
}

/* ── Comparison poems ──────────────────────────────────────────── */

const comparisons = [
  {
    poem: 'Exposure',
    poet: 'Wilfred Owen',
    link: '/revision/poetry/power-and-conflict/exposure',
    points: [
      'Both poems depict the suffering of soldiers, but Tennyson glorifies their sacrifice while Owen emphasises futility and the monotony of waiting to die.',
      'Tennyson\u2019s galloping rhythm conveys action and heroism; Owen\u2019s half-rhymes and slow pace create exhaustion and hopelessness.',
      'Tennyson was Poet Laureate writing from home; Owen was a soldier writing from the trenches\u2014their perspectives on duty and honour differ fundamentally.',
    ],
  },
  {
    poem: 'Bayonet Charge',
    poet: 'Ted Hughes',
    link: '/revision/poetry/power-and-conflict/bayonet-charge',
    points: [
      'Both poems depict a charge into battle, but Tennyson focuses on collective heroism while Hughes focuses on one individual soldier\u2019s terror and confusion.',
      'Tennyson\u2019s regular, driving rhythm celebrates duty; Hughes\u2019 disjointed enjambment and caesura convey panic and the breakdown of patriotic ideals.',
      'Tennyson never questions the value of the charge; Hughes shows how abstract concepts like "honour" dissolve when faced with the reality of combat.',
    ],
  },
  {
    poem: 'Remains',
    poet: 'Simon Armitage',
    link: '/revision/poetry/power-and-conflict/remains',
    points: [
      'Tennyson celebrates soldiers as collectively noble; Armitage depicts an individual soldier haunted by guilt and PTSD after killing.',
      'Both poems explore the lasting impact of conflict, but from opposite angles: Tennyson wants society to remember; Armitage\u2019s speaker cannot forget.',
      'Tennyson uses formal, elevated language; Armitage uses colloquial, conversational diction to create a modern, confessional tone.',
    ],
  },
]

/* ── Theme tokens ──────────────────────────────────────────────── */

const themes = [
  'Power of authority',
  'Duty and honour',
  'Reality of conflict',
  'Death',
  'Memory and remembrance',
  'Patriotism',
  'Human cost of war',
  'Heroism',
]

/* ── Page ───────────────────────────────────────────────────────── */

export default function ChargeOfTheLightBrigadePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
      {/* ── Back link ───────────────────────────────────────────── */}
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/revision/poetry/power-and-conflict" />}>
          &larr; Power &amp; Conflict Anthology
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <header className="space-y-2">
        <h1 className="text-heading-lg text-foreground">
          The Charge of the Light Brigade
        </h1>
        <p className="text-lg text-muted-foreground">
          Alfred Lord Tennyson (1854)
        </p>
        <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">AQA</Badge>
      </header>

      {/* ── Theme tokens ────────────────────────────────────────── */}
      <section aria-label="Themes" className="flex flex-wrap gap-2">
        {themes.map((t) => (
          <span
            key={t}
            className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
          >
            {t}
          </span>
        ))}
      </section>

      {/* ── Interactive poem viewer ─────────────────────────────── */}
      <StudyTools
        textName="The Charge of the Light Brigade"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />
      <InteractivePoemViewer poem={poem} />

      {/* ── Comparison poems ────────────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="text-heading-md text-foreground">
          Compare with other poems
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <div
              key={c.poem}
              className="flex flex-col rounded-xl border border-border bg-card p-5"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {c.poem}
              </h3>
              <p className="mb-3 text-xs text-muted-foreground">{c.poet}</p>

              <ul className="mb-4 flex-1 space-y-2">
                {c.points.map((p, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-card-foreground"
                  >
                    <span className="mr-1.5 text-primary">&bull;</span>
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.poem} &rarr;
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-6 text-center">
        <h2 className="text-heading-md text-foreground mb-2">
          Test your knowledge
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Put what you&apos;ve learned into practice with our Power &amp;
          Conflict poetry quiz.
        </p>
        <Button render={<Link href="/revision/quiz" />}>
          Start quiz
        </Button>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        Public domain &mdash; quotations from The Charge of the Light Brigade by Alfred Lord Tennyson reproduced freely.
      </p>
    </div>
  )
}
