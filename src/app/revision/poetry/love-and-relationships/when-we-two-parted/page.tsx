'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'

const poemData: PoemData = {
  title: 'When We Two Parted',
  poet: 'Lord Byron',
  lines: [
    { text: 'When we two parted', annotations: [{ type: 'Tone', note: 'The abrupt, matter-of-fact opening establishes a tone of finality. The monosyllabic words create a blunt, clipped rhythm reflecting emotional restraint.', color: '#3b82f6' }] },
    { text: 'In silence and tears,', annotations: [{ type: 'Imagery', note: '"Silence and tears" suggests the relationship ended with grief but also secrecy -- they could not publicly acknowledge their pain.', color: '#f59e0b' }] },
    { text: 'Half broken-hearted', annotations: [{ type: 'Understatement', note: '"Half" is deliberately understated -- Byron minimises his pain, perhaps to protect himself or suggest the other person was less affected.', color: '#8b5cf6' }] },
    { text: 'To sever for years,', annotations: [{ type: 'Structure', note: 'The ABAB rhyme scheme and short lines create a tight, controlled form that mirrors Byron\'s emotional restraint.', color: '#8b5cf6' }] },
    { text: 'Pale grew thy cheek and cold,', annotations: [{ type: 'Imagery', note: 'Death imagery -- "pale" and "cold" foreshadow the death of the relationship and associate the lover with lifelessness.', color: '#f59e0b' }] },
    { text: 'Colder thy kiss;', annotations: [{ type: 'Metaphor', note: 'The cold kiss symbolises the loss of passion and warmth in their relationship. The comparative "colder" intensifies the sense of emotional withdrawal.', color: '#10b981' }] },
    { text: 'Truly that hour foretold', annotations: [{ type: 'Foreshadowing', note: 'Byron suggests that even at the point of parting, there were signs that the relationship was doomed.', color: '#3b82f6' }] },
    { text: 'Sorrow to this.', annotations: [{ type: 'Structure', note: 'The short, clipped line creates a sense of finality. "This" is ambiguous -- it could refer to his current pain or the present moment of writing.', color: '#8b5cf6' }] },
    { text: '' },
    { text: 'The dew of the morning', annotations: [{ type: 'Pathetic fallacy', note: 'The dew could represent tears, connecting nature to human grief. Morning suggests a new beginning tainted by sorrow.', color: '#10b981' }] },
    { text: 'Sunk chill on my brow--', annotations: [{ type: 'Sensory imagery', note: 'Physical coldness mirrors emotional coldness. The "brow" suggests shame and guilt weighing on the speaker.', color: '#f59e0b' }] },
    { text: 'It felt like the warning', annotations: [{ type: 'Tone shift', note: 'The sense of foreboding intensifies -- nature itself seemed to warn Byron of the pain to come.', color: '#3b82f6' }] },
    { text: 'Of what I feel now.', annotations: [{ type: 'Temporal shift', note: 'Byron shifts between past and present, showing the pain has endured. The past event continues to haunt him.', color: '#3b82f6' }] },
    { text: 'Thy vows are all broken,', annotations: [{ type: 'Accusation', note: 'Direct accusation -- the lover broke their promises. "All" emphasises the totality of the betrayal.', color: '#ef4444' }] },
    { text: 'And light is thy fame:', annotations: [{ type: 'Double meaning', note: '"Light" can mean both insubstantial (her reputation is damaged) and frivolous (she treats love lightly). A subtle public shaming.', color: '#f59e0b' }] },
    { text: 'I hear thy name spoken,', annotations: [{ type: 'Context', note: 'Byron\'s lover Lady Frances Webster became the subject of public gossip. Hearing her name spoken caused him shame by association.', color: '#3b82f6' }] },
    { text: 'And share in its shame.', annotations: [{ type: 'Key theme', note: 'Secrecy and shame are central -- Byron cannot publicly acknowledge his grief because the affair was secret, intensifying his suffering.', color: '#ef4444' }] },
    { text: '' },
    { text: 'They name thee before me,', annotations: [{ type: 'Dramatic irony', note: 'Others speak of her without knowing Byron\'s connection. He must hide his reaction, adding layers of pain and isolation.', color: '#8b5cf6' }] },
    { text: 'A knell to mine ear;', annotations: [{ type: 'Metaphor', note: 'A "knell" is a funeral bell -- hearing her name is like a death toll, symbolising the death of their love and his ongoing grief.', color: '#10b981' }] },
    { text: 'A shudder comes o\'er me--', annotations: [{ type: 'Physical reaction', note: 'An involuntary physical response shows that Byron cannot control his grief. The body betrays what the mind tries to suppress.', color: '#f59e0b' }] },
    { text: 'Why wert thou so dear?', annotations: [{ type: 'Rhetorical question', note: 'The rhetorical question reveals vulnerability beneath the controlled exterior. Byron questions why he ever loved so deeply.', color: '#8b5cf6' }] },
    { text: 'They know not I knew thee,', annotations: [{ type: 'Secrecy', note: 'The repetition of "know/knew" emphasises the theme of hidden knowledge. The secret affair means his grief must also be secret.', color: '#3b82f6' }] },
    { text: 'Who knew thee too well:--', annotations: [{ type: 'Ambiguity', note: '"Too well" is deliberately ambiguous -- it could mean he knew her intimately (sexually) or that he understood her true, faithless nature.', color: '#f59e0b' }] },
    { text: 'Long, long shall I rue thee,', annotations: [{ type: 'Repetition', note: 'The repetition of "long" emphasises the enduring nature of his regret. The drawn-out sound mirrors the drawn-out suffering.', color: '#10b981' }] },
    { text: 'Too deeply to tell.', annotations: [{ type: 'Understatement', note: 'The depth of feeling is inexpressible -- language itself is inadequate to convey his grief. This restraint makes the emotion more powerful.', color: '#8b5cf6' }] },
    { text: '' },
    { text: 'If I should meet thee', annotations: [{ type: 'Conditional', note: 'The hypothetical "if" creates tension about a potential future encounter. The poem becomes forward-looking.', color: '#3b82f6' }] },
    { text: 'After long years,', annotations: [{ type: 'Cyclical structure', note: 'Echoes "to sever for years" from stanza one, creating a circular structure that traps the speaker in perpetual grief.', color: '#8b5cf6' }] },
    { text: 'How should I greet thee?--', annotations: [{ type: 'Rhetorical question', note: 'A genuine dilemma -- how do you acknowledge someone you loved secretly? The question has no satisfactory answer.', color: '#8b5cf6' }] },
    { text: 'With silence and tears.', annotations: [{ type: 'Cyclical ending', note: 'The final line echoes line 2, creating a circular structure. Nothing has changed -- the speaker is trapped in the same grief. The poem ends as it began.', color: '#ef4444' }] },
  ],
  context: `<p><strong>Written in 1816</strong>, this poem reflects Byron's secret affair, widely believed to be with <strong>Lady Frances Webster</strong>. The affair had to remain hidden due to social conventions, meaning Byron could not publicly express his grief when it ended.</p>
<p>The poem's emotional restraint is characteristic of Byron's style -- he channels deep feeling through controlled, tight verse forms rather than emotional outpouring. The <strong>Romantic era</strong> valued intense personal emotion, but Byron often expressed this through irony and understatement.</p>
<p>The biographical context adds layers: Byron himself was notorious for scandalous affairs, yet here he presents himself as the wounded party. The poem explores how <strong>secrecy intensifies suffering</strong> -- he cannot share his grief with anyone.</p>`,
  summary: `The speaker reflects on a painful parting from a former lover. The relationship was secret, and its ending brought silence rather than public mourning. He recalls the coldness of their final kiss and the signs that foreshadowed future sorrow.\n\nIn the present, hearing the lover's name spoken by others causes him physical pain -- like a funeral bell. He must hide his reaction because nobody knows of their connection. The poem ends with a hypothetical future meeting, but nothing has changed: he would greet them the same way they parted -- with silence and tears.\n\nThe circular structure reinforces the idea that the speaker is trapped in grief, unable to move forward or find closure.`,
  formAndStructure: `Form: Four stanzas of eight lines each, with a tight ABAB rhyme scheme throughout.\n\nShort lines: Predominantly monosyllabic and disyllabic words create a clipped, restrained rhythm that mirrors emotional suppression.\n\nCyclical structure: The final line ("With silence and tears") echoes the second line ("In silence and tears"), creating a circular poem that traps the speaker in perpetual grief.\n\nRhyme scheme: The regular ABAB pattern creates a sense of control and formality, contrasting with the raw emotion beneath.\n\nEnjambment is minimal -- most lines are end-stopped, creating a halting, measured pace as if the speaker is carefully controlling each word.\n\nTemporal shifts: The poem moves between past (the parting), present (hearing the name), and future (hypothetical meeting), showing grief transcends time.`,
  keyQuotes: [
    { quote: 'In silence and tears', analysis: 'The secrecy of the relationship means the grief must also be silent. "Tears" shows genuine emotion despite the restraint. This phrase bookends the poem, emphasising the cyclical, inescapable nature of the pain.', themes: ['Secrecy', 'Grief', 'Memory'] },
    { quote: 'Half broken-hearted', analysis: 'The understatement of "half" is deliberately ambiguous -- is he minimising his own pain, or suggesting the lover was less affected? Either reading reveals emotional complexity and self-protection.', themes: ['Heartbreak', 'Understatement'] },
    { quote: 'Pale grew thy cheek and cold', analysis: 'Death imagery associates the lover with lifelessness. The physical description suggests the emotional warmth has literally drained from the relationship.', themes: ['Death imagery', 'Loss of love'] },
    { quote: 'Colder thy kiss', analysis: 'The comparative adjective intensifies the coldness. A kiss should be warm and intimate, but this one signals the death of passion and emotional withdrawal.', themes: ['Loss of passion', 'Betrayal'] },
    { quote: 'A knell to mine ear', analysis: 'A knell is a funeral bell -- hearing the lover\'s name is equated with death. The metaphor transforms everyday conversation into a source of profound grief.', themes: ['Death imagery', 'Memory', 'Grief'] },
    { quote: 'They know not I knew thee', analysis: 'The juxtaposition of "know" and "knew" emphasises secrecy. The plosive "k" sounds create a hard, bitter tone. Others\' ignorance intensifies his isolation.', themes: ['Secrecy', 'Isolation'] },
    { quote: 'Long, long shall I rue thee', analysis: 'Repetition of "long" draws out the sound, mirroring the enduring nature of regret. "Rue" is an archaic, formal word that adds weight and gravity.', themes: ['Regret', 'Time', 'Memory'] },
    { quote: 'With silence and tears', analysis: 'The exact repetition of the opening creates a circular structure. Nothing has changed; the speaker is condemned to repeat the same grief. The poem offers no resolution or closure.', themes: ['Cyclical grief', 'Secrecy', 'Hopelessness'] },
  ],
  languageDevices: [
    { device: 'Monosyllabic diction', example: 'When we two parted', effect: 'The predominantly one-syllable words create a blunt, stark rhythm that reflects emotional restraint and the speaker\'s inability to elaborate on his pain.', lineRef: 0 },
    { device: 'Pathetic fallacy', example: 'The dew of the morning / Sunk chill on my brow', effect: 'Nature mirrors human emotion -- the cold dew represents the chill of grief. The natural world becomes a reflection of internal suffering.', lineRef: 9 },
    { device: 'Metaphor (death)', example: 'A knell to mine ear', effect: 'Hearing the lover\'s name is compared to a funeral bell, transforming ordinary conversation into a death knell for their relationship. Elevates personal grief to something solemn and final.', lineRef: 19 },
    { device: 'Repetition', example: 'Long, long shall I rue thee', effect: 'The repeated "long" elongates the line rhythmically, physically enacting the drawn-out nature of regret and making the reader feel the weight of enduring pain.', lineRef: 24 },
    { device: 'Cyclical structure', example: 'In silence and tears / With silence and tears', effect: 'The near-identical opening and closing lines create a circular poem, suggesting the speaker is trapped in a cycle of grief with no possibility of escape or resolution.', lineRef: 30 },
    { device: 'Rhetorical question', example: 'Why wert thou so dear?', effect: 'The unanswerable question reveals vulnerability beneath the controlled surface. Byron questions the very nature of love, finding no rational explanation for the depth of feeling.', lineRef: 21 },
    { device: 'Understatement', example: 'Half broken-hearted', effect: '"Half" deliberately minimises the pain, characteristic of Byron\'s restrained style. The understatement paradoxically intensifies the emotion by implying what remains unsaid.', lineRef: 2 },
    { device: 'Semantic field of cold', example: 'Pale... cold... Colder... chill', effect: 'A sustained semantic field of coldness runs through the poem, contrasting with the expected warmth of love and creating an atmosphere of emotional death.', lineRef: 4 },
  ],
}

const COMPARE_POEMS = [
  { title: 'Neutral Tones', href: '/revision/poetry/love-and-relationships/neutral-tones', reason: 'Both explore the painful end of love with cold, bleak imagery and cyclical structures.' },
  { title: "Love's Philosophy", href: '/revision/poetry/love-and-relationships/loves-philosophy', reason: 'Contrasting perspective -- Shelley celebrates love\'s potential while Byron mourns its death.' },
  { title: "Porphyria's Lover", href: '/revision/poetry/love-and-relationships/porphyrias-lover', reason: 'Both explore secret, forbidden relationships but with vastly different responses to loss.' },
]

export default function WhenWeTwoPartedPage() {
  return (
    <div className="space-y-6">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
        <div className="flex items-center gap-3 mb-1">
          <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">Love &amp; Relationships</Badge>
          <Badge variant="outline">AQA Anthology</Badge>
        </div>
      </div>

      <StudyTools
        textName="When We Two Parted"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InteractivePoemViewer poem={poemData} />

      {/* Compare With Section */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-heading-sm font-heading text-foreground mb-3">Compare With</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {COMPARE_POEMS.map((p) => (
            <div key={p.title} className="rounded-lg border border-border/60 bg-muted/30 p-3.5">
              <p className="text-sm font-medium text-foreground mb-1">{p.title}</p>
              <p className="text-xs text-muted-foreground mb-2.5">{p.reason}</p>
              <Button
                variant="outline"
                size="xs"
                render={<Link href={p.href} />}
              >
                Study poem
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
