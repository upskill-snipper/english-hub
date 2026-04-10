'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study'

const poemData: PoemData = {
  title: "Love's Philosophy",
  poet: 'Percy Bysshe Shelley',
  lines: [
    { text: 'The fountains mingle with the river', annotations: [{ type: 'Natural imagery', note: 'Shelley opens with an image of water flowing together naturally. Fountains and rivers merging is presented as inevitable -- a law of nature.', color: '#3b82f6' }] },
    { text: 'And the rivers with the ocean,', annotations: [{ type: 'Scale', note: 'The imagery expands from small (fountains) to vast (ocean), building a persuasive argument that union is universal at every scale.', color: '#10b981' }] },
    { text: 'The winds of heaven mix for ever', annotations: [{ type: 'Personification', note: '"Winds of heaven" elevates the natural world to something divine. "Mix for ever" implies eternal, sacred union.', color: '#8b5cf6' }] },
    { text: 'With a sweet emotion;', annotations: [{ type: 'Personification', note: 'Nature is given human feeling -- "sweet emotion". Shelley blurs the boundary between the natural and the emotional to suggest love is as natural as wind.', color: '#8b5cf6' }] },
    { text: 'Nothing in the world is single;', annotations: [{ type: 'Key argument', note: 'A bold, universal statement -- Shelley\'s central thesis. Everything in nature exists in pairs, making solitude unnatural.', color: '#ef4444' }] },
    { text: 'All things by a law divine', annotations: [{ type: 'Religious language', note: '"Law divine" gives his argument spiritual authority. Union is not just natural but ordained by God -- a powerful persuasive tactic.', color: '#f59e0b' }] },
    { text: 'In one spirit meet and mingle.', annotations: [{ type: 'Sibilance', note: 'The soft "s" and "m" sounds in "spirit", "meet", "mingle" create a gentle, seductive musicality that mirrors the merging he describes.', color: '#10b981' }] },
    { text: 'Why not I with thine?--', annotations: [{ type: 'Rhetorical question', note: 'The stanza\'s climax. After building evidence from nature, Shelley challenges the beloved: if everything else unites, why should they be different? The dash suggests an expectant pause.', color: '#ef4444' }] },
    { text: '' },
    { text: 'See the mountains kiss high heaven', annotations: [{ type: 'Personification', note: '"Kiss" personifies the mountains, using romantic and physical language. The image of earth meeting sky suggests the union of different elements.', color: '#8b5cf6' }] },
    { text: 'And the waves clasp one another;', annotations: [{ type: 'Personification', note: '"Clasp" suggests an embrace -- waves holding each other. Shelley continues to project human affection onto the natural world.', color: '#8b5cf6' }] },
    { text: 'No sister-flower would be forgiven', annotations: [{ type: 'Anthropomorphism', note: 'Even flowers would be morally wrong ("not forgiven") to reject their counterpart. Shelley frames rejection of love as a kind of sin.', color: '#f59e0b' }] },
    { text: 'If it disdained its brother;', annotations: [{ type: 'Family metaphor', note: '"Sister" and "brother" create familial bonds in nature, suggesting that all living things are connected and obligated to love.', color: '#f59e0b' }] },
    { text: 'And the sunlight clasps the earth', annotations: [{ type: 'Imagery', note: 'The grandest image yet -- sunlight embracing the entire earth. The scale of the examples has grown through the poem, building persuasive momentum.', color: '#3b82f6' }] },
    { text: 'And the moonbeams kiss the sea:', annotations: [{ type: 'Parallelism', note: 'The parallel structure ("And the... clasps/kiss the...") creates a rhythmic momentum that feels irresistible, mirroring Shelley\'s persuasive intent.', color: '#10b981' }] },
    { text: 'What is all this sweet work worth', annotations: [{ type: 'Rhetorical question', note: 'Shelley questions the value of all natural beauty if human love is denied. "Sweet work" frames nature as God\'s craftsmanship.', color: '#ef4444' }] },
    { text: 'If thou kiss not me?', annotations: [{ type: 'Climax', note: 'The poem\'s final, direct plea. "Thou" addresses the beloved intimately. The monosyllabic simplicity of "kiss not me" contrasts with the elaborate natural imagery, making the request feel raw and honest.', color: '#ef4444' }] },
  ],
  context: `<p><strong>Percy Bysshe Shelley (1792-1822)</strong> was a key figure of the <strong>Romantic movement</strong>, which celebrated nature, emotion, and individual expression. This poem was likely written around <strong>1819</strong>.</p>
<p>The poem functions as a <strong>persuasion poem</strong> (or "seduction poem") -- Shelley builds an elaborate argument from nature to convince his beloved to return his affection. This tradition dates back to the <strong>carpe diem</strong> poetry of the Renaissance.</p>
<p>Shelley was known for his radical views on love and marriage. He believed love should be <strong>free and unconstrained</strong> by social conventions. The poem reflects his philosophical belief that love is a <strong>natural force</strong> that humans should not resist.</p>
<p>The poem also engages with Romantic ideas about the <strong>interconnectedness of all nature</strong> -- a philosophy that saw humans as part of the natural world rather than separate from it.</p>`,
  summary: `The speaker uses examples from nature to argue that everything in the world exists in union -- rivers merge with oceans, winds blend together, mountains touch the sky. He claims this is "a law divine", making union a spiritual imperative.\n\nHaving built his case, he asks a simple rhetorical question: if everything in nature comes together, why should the beloved refuse him?\n\nThe second stanza escalates the argument with grander imagery -- sunlight clasping the earth, moonbeams kissing the sea -- before ending with a direct, almost pleading question: what is the point of all this natural beauty if the beloved will not love him?\n\nThe poem is essentially an elaborate argument for love, using nature as evidence. Whether it is charming or manipulative depends on interpretation.`,
  formAndStructure: `Form: Two stanzas of eight lines each, creating a balanced, symmetrical structure that mirrors the poem's argument about natural pairing.\n\nRhyme scheme: ABABCDCD in both stanzas -- the regular, predictable pattern creates a sense of natural order and inevitability that supports Shelley's argument.\n\nRhetorical questions: Each stanza builds to a climactic rhetorical question (lines 8 and 16-17). The structure is persuasive -- evidence followed by conclusion.\n\nEscalation: The imagery grows in scale from fountains to rivers to ocean, then from mountains to sunlight to moonbeams, building persuasive momentum.\n\nList structure: The accumulation of natural examples creates a sense of overwhelming evidence, making the argument feel irresistible.\n\nEnding: The final line is notably shorter and simpler than the rest, creating bathos -- the grand natural argument resolves into a simple, human plea.`,
  keyQuotes: [
    { quote: 'The fountains mingle with the river', analysis: 'Opens the poem with natural imagery of union. "Mingle" suggests a gentle, willing merging -- not forced but natural and inevitable.', themes: ['Nature', 'Union', 'Harmony'] },
    { quote: 'Nothing in the world is single', analysis: 'A bold universal claim that forms the poem\'s thesis. Shelley states it as absolute fact, leaving no room for counter-argument. Isolation is presented as unnatural.', themes: ['Argument', 'Natural law', 'Loneliness'] },
    { quote: 'All things by a law divine', analysis: '"Law divine" elevates the argument from natural observation to spiritual imperative. Rejecting love becomes not just unnatural but ungodly.', themes: ['Religion', 'Natural law', 'Persuasion'] },
    { quote: 'Why not I with thine?', analysis: 'The stanza\'s climactic question. After extensive evidence from nature, the simple personal plea feels both logical and emotionally vulnerable.', themes: ['Desire', 'Persuasion', 'Vulnerability'] },
    { quote: 'See the mountains kiss high heaven', analysis: '"Kiss" personifies mountains with romantic action. "See" is an imperative, directing the beloved to observe the evidence. The imagery is grand and romantic.', themes: ['Personification', 'Romance', 'Nature'] },
    { quote: 'No sister-flower would be forgiven', analysis: 'Shelley frames the rejection of love as morally wrong -- even sinful. The familial language ("sister", "brother") creates obligation.', themes: ['Morality', 'Guilt', 'Persuasion'] },
    { quote: 'And the sunlight clasps the earth', analysis: 'The grandest image -- light itself embracing the planet. "Clasps" implies a firm, warm hold, suggesting love is all-encompassing and unavoidable.', themes: ['Nature', 'Scale', 'Union'] },
    { quote: 'If thou kiss not me?', analysis: 'The final plea is devastatingly simple after the elaborate natural imagery. The monosyllabic words strip away all pretence, revealing raw human desire beneath the philosophical argument.', themes: ['Desire', 'Vulnerability', 'Simplicity'] },
  ],
  languageDevices: [
    { device: 'Personification', example: 'the mountains kiss high heaven', effect: 'By giving human romantic actions to nature, Shelley argues that love is woven into the fabric of the natural world, making human love equally inevitable.', lineRef: 9 },
    { device: 'Rhetorical question', example: 'Why not I with thine?', effect: 'The question is designed to be unanswerable. After presenting overwhelming natural evidence, Shelley implies the only logical response is to accept his love.', lineRef: 7 },
    { device: 'Sibilance', example: 'In one spirit meet and mingle', effect: 'The soft "s" and "m" sounds create a seductive, flowing musicality that enacts the gentle merging Shelley describes, appealing to the senses.', lineRef: 6 },
    { device: 'Semantic field of union', example: 'mingle, mix, meet, clasp, kiss', effect: 'A sustained vocabulary of coming-together runs through the poem, creating a cumulative sense of inevitability around the theme of union.', lineRef: 0 },
    { device: 'Parallelism', example: 'And the sunlight clasps... / And the moonbeams kiss...', effect: 'The repeated grammatical structure creates rhythmic momentum, making each new example feel like further irrefutable proof in a logical argument.', lineRef: 13 },
    { device: 'Religious language', example: 'a law divine', effect: 'By invoking divine authority, Shelley elevates his argument beyond personal desire to a cosmic principle. Rejecting love becomes an act against God\'s design.', lineRef: 5 },
    { device: 'Bathos / tonal shift', example: 'If thou kiss not me?', effect: 'The grand, cosmic imagery suddenly collapses into a simple personal plea. This shift reveals vulnerability beneath the confident rhetoric and grounds the poem in genuine human feeling.', lineRef: 16 },
    { device: 'List / accumulation', example: 'fountains... rivers... ocean... winds', effect: 'The piling up of natural examples creates a sense of overwhelming evidence, making Shelley\'s argument feel logically irresistible.', lineRef: 0 },
  ],
}

const COMPARE_POEMS = [
  { title: 'When We Two Parted', href: '/revision/poetry/love-and-relationships/when-we-two-parted', reason: 'Contrasting Romantic perspectives -- Shelley celebrates love\'s potential; Byron mourns its death.' },
  { title: 'Sonnet 29', href: '/revision/poetry/love-and-relationships/sonnet-29', reason: 'Both use natural imagery to express desire, but EBB writes from a position of reciprocated love.' },
  { title: 'Neutral Tones', href: '/revision/poetry/love-and-relationships/neutral-tones', reason: 'Hardy\'s bleak rejection of love provides a stark contrast to Shelley\'s optimistic persuasion.' },
]

export default function LovesPhilosophyPage() {
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
