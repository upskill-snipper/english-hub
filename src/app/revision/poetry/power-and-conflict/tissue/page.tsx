import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer } from '@/components/study'
import type { PoemData } from '@/components/study'

export const metadata = {
  title: 'Tissue -- Imtiaz Dharker -- The English Hub',
  description:
    'Interactive study guide for Tissue by Imtiaz Dharker. GCSE Power and Conflict poetry analysis with annotations, key quotes, language devices, and comparisons.',
}

/* ── Poem data ──────────────────────────────────────────────────── */

const TISSUE: PoemData = {
  title: 'Tissue',
  poet: 'Imtiaz Dharker',
  lines: [
    // Stanza 1
    { text: 'Paper that lets the light', annotations: [
      { type: 'Metaphor', note: 'Paper becomes a metaphor for human life and structures throughout the poem. Light symbolises truth and understanding.', color: '#f59e0b' },
      { type: 'Enjambment', note: 'The sentence runs across the stanza break, mirroring how paper/life resists neat boundaries.', color: '#a855f7' },
    ] },
    { text: 'shine through, this', annotations: [
      { type: 'Light imagery', note: '"Shine through" suggests transparency and honesty -- Dharker values openness over opacity.', color: '#3b82f6' },
    ] },
    { text: 'is what could alter things.', annotations: [
      { type: 'Imperative tone', note: 'A quiet but confident assertion: paper (and what we record on it) has the power to change the world.', color: '#ef4444' },
    ] },
    { text: 'Paper thinned by age or touching,' },
    { text: '' },
    // Stanza 2
    { text: 'the kind you find in well-used books,' },
    { text: 'the kind you find in the back of', annotations: [
      { type: 'Repetition', note: '"The kind you find" is repeated, creating a listing effect that catalogues paper\'s many forms and uses.', color: '#10b981' },
    ] },
    { text: 'the Koran, where a hand', annotations: [
      { type: 'Cultural reference', note: 'The Koran (Quran) connects to Dharker\'s own Pakistani-Muslim heritage. Religious texts are among the most handled, thinned papers.', color: '#3b82f6' },
    ] },
    { text: 'has written in the names and histories,' },
    { text: '' },
    // Stanza 3
    { text: 'who was born to whom,', annotations: [
      { type: 'Listing', note: 'The list of family records (births, marriages, deaths) shows how paper documents and controls human identity.', color: '#10b981' },
    ] },
    { text: 'the inks, the runs and ruled lines,' },
    { text: 'the, , the perforations' },
    { text: 'that might fly off any day.' },
    { text: '' },
    // Stanza 4
    { text: 'Paper smoothed and stroked and torn' },
    { text: 'living tissue, raise it', annotations: [
      { type: 'Key metaphor', note: '"Living tissue" is the poem\'s central image -- paper is compared to skin/flesh, blurring the boundary between human bodies and the records that define us.', color: '#f59e0b' },
    ] },
    { text: 'to the light, changed into your skin.' },
    { text: '' },
    // Stanza 5 (removed the space in text)
    { text: 'If buildings were paper,', annotations: [
      { type: 'Conditional / Hypothetical', note: 'Dharker imagines a world where solid structures become fragile paper -- questioning the permanence of human power and borders.', color: '#a855f7' },
    ] },
    { text: 'I might feel their drift and pull,' },
    { text: 'gravity as paper does.' },
    { text: '' },
    // Stanza 6
    { text: 'Pages and pages could be', annotations: [
      { type: 'Repetition', note: '"Pages and pages" emphasises the overwhelming volume of bureaucratic records that control lives.', color: '#10b981' },
    ] },
    { text: 'anything could be beautiful,' },
    { text: '' },
    // Stanza 7
    { text: 'borderlines, the marks', annotations: [
      { type: 'Symbolism', note: '"Borderlines" connects to Dharker\'s preoccupation with national borders, identity, and belonging -- drawn on maps (paper) yet controlling real lives.', color: '#3b82f6' },
    ] },
    { text: 'that rivers make, roads,' },
    { text: 'mountain folds,' },
    { text: '' },
    // Stanza 8
    { text: 'Capitals and monoliths,', annotations: [
      { type: 'Symbolism', note: '"Capitals" (capital cities) and "monoliths" represent power, government, and permanence -- yet Dharker reimagines them as paper: fragile and temporary.', color: '#3b82f6' },
    ] },
    { text: 'brought down to' },
    { text: 'near-transparent things,' },
    { text: '' },
    // Stanza 9
    { text: 'Fine slips from grocery shops,' },
    { text: 'records of what we bought,' },
    { text: 'what we could not have.' },
    { text: '' },
    // Stanza 10
    { text: 'Fine slips might design', annotations: [
      { type: 'Extended metaphor', note: 'The poem\'s final stanza shifts to "a grand design" -- paper/tissue as the blueprint for all human structures and identity.', color: '#f59e0b' },
    ] },
    { text: 'a grand design,' },
    { text: 'the design of how we live,' },
    { text: '' },
    // Final single line
    { text: 'turned into your own skin.', annotations: [
      { type: 'Structural isolation', note: 'The final line stands alone, separated from the quatrain structure. It brings the metaphor full circle: paper becomes skin, records become identity, the external becomes the self.', color: '#ef4444' },
      { type: 'Direct address', note: '"Your own skin" uses second person to directly involve the reader, making the theme personal and universal.', color: '#a855f7' },
    ] },
  ],

  context: `<p><strong>Imtiaz Dharker</strong> (b. 1954) is a Pakistani-Scottish poet, artist, and filmmaker. Born in Lahore, Pakistan, she grew up in Glasgow, Scotland, and has also lived in India. Her multicultural background deeply informs her poetry, which frequently explores themes of <strong>identity, borders, belonging, and freedom</strong>.</p>
<p><em>Tissue</em> was published in the collection <strong><em>The terrorist at my table</em></strong> (2006). The collection examines ideas of fear, control, and how we construct meaning. In <em>Tissue</em>, Dharker uses the extended metaphor of <strong>paper</strong> to explore how human beings create structures -- religious texts, maps, border documents, receipts -- that both record and control our lives.</p>
<p>Dharker is interested in the <strong>fragility of these structures</strong>. Paper is thin, transparent, easily torn -- yet the information written on it (birth certificates, passports, money) wields enormous power. The poem asks whether we might reimagine the world if we acknowledged that all human constructs are as delicate as tissue.</p>
<p>Dharker was appointed <strong>Chancellor of Edinburgh University</strong> and has won the Queen's Gold Medal for Poetry (2014), reflecting her significance in contemporary British literature.</p>`,

  summary: `Tissue explores the power and fragility of paper as an extended metaphor for the structures that control human life.

The poem opens by describing paper that has been thinned by use -- the pages of a well-read Koran where family names and histories have been written. Dharker catalogues the many forms paper takes: religious texts, birth records, maps, receipts, and architectural plans.

In the central stanzas, the speaker imagines buildings made of paper, suggesting that grand structures of power (capitals, monoliths, borders) could be reimagined as transparent, fragile things. The poem moves between the everyday (grocery receipts) and the monumental (national borders), showing how all human constructs rely on paper records.

The poem culminates in the idea that paper could design how we live -- and the final, isolated line ("turned into your own skin") equates paper with the human body itself, suggesting that our identities are as constructed and fragile as the documents that define us.

Throughout, Dharker questions human power and permanence, suggesting that acknowledging fragility could "alter things" for the better.`,

  formAndStructure: `FORM: Free verse with no regular rhyme scheme. The lack of a fixed pattern mirrors the poem's argument that rigid structures should be questioned.

STANZA STRUCTURE: Ten quatrains (four-line stanzas) followed by a single isolated final line. The consistency of the quatrains creates an expectation that the final lone line deliberately breaks -- enacting the poem's theme that structures can and should be disrupted.

ENJAMBMENT: Extensive enjambment runs sentences across line and stanza breaks throughout the poem. This creates a flowing, continuous quality, as if meaning (like paper) cannot be contained within neat borders. It also mirrors the transparency of tissue paper -- ideas bleed through boundaries.

FINAL ISOLATED LINE: "turned into your own skin." stands alone, structurally separated from the rest of the poem. This isolation emphasises the transformation from paper to skin and forces the reader to pause on the poem's most important idea: that human identity is constructed and fragile.

SENTENCE STRUCTURE: Many sentences span multiple stanzas, reinforcing the idea that meaning resists containment. The poem uses few full stops, creating a sense of continuous thought.

TONE: Contemplative, quiet, and philosophical. The speaker does not command but suggests ("might," "could"), using conditional language to imagine alternatives rather than demand change.`,

  keyQuotes: [
    {
      quote: 'Paper that lets the light shine through',
      analysis: 'The opening image establishes paper as something transparent and illuminating. Light symbolises truth, understanding, and clarity. Dharker values what is translucent over what is opaque -- suggesting that openness and fragility are strengths, not weaknesses.',
      themes: ['Power of nature', 'Identity', 'Fragility'],
    },
    {
      quote: 'this is what could alter things',
      analysis: 'A bold, quiet assertion of paper\'s transformative power. The modal verb "could" is deliberately tentative -- Dharker suggests possibility rather than certainty, reflecting her preference for openness over rigid authority.',
      themes: ['Power', 'Change', 'Human constructs'],
    },
    {
      quote: 'the back of the Koran, where a hand has written in the names and histories',
      analysis: 'Connects paper to religious and family records. The specificity of the Koran reflects Dharker\'s Pakistani-Muslim heritage. Family records inscribed in holy books show how paper documents identity -- birth, marriage, lineage -- binding personal history to sacred text.',
      themes: ['Identity', 'Religion', 'Heritage'],
    },
    {
      quote: 'living tissue, raise it to the light',
      analysis: 'The central metaphor of the poem. "Living tissue" conflates paper with human skin/flesh, suggesting our identities are as thin and fragile as the documents that define us. "Raise it to the light" echoes the opening and implies scrutiny -- if we examine our structures, we see through them.',
      themes: ['Identity', 'Fragility', 'Power of nature'],
    },
    {
      quote: 'If buildings were paper, I might feel their drift and pull',
      analysis: 'A hypothetical reimagining of solid architecture as fragile paper. "Drift and pull" gives buildings organic, almost living qualities. Dharker challenges the assumed permanence of human constructions, suggesting they should be as flexible and responsive as paper.',
      themes: ['Power', 'Human constructs', 'Fragility'],
    },
    {
      quote: 'borderlines, the marks that rivers make, roads, mountain folds',
      analysis: 'Borders are reimagined as paper creases ("folds"). Dharker conflates man-made borders (political, national) with natural features (rivers, mountains), questioning whether human-imposed divisions are any more permanent than lines on a page.',
      themes: ['Power', 'Conflict', 'Identity'],
    },
    {
      quote: 'Capitals and monoliths, brought down to near-transparent things',
      analysis: 'Centres of political power ("capitals") and permanent structures ("monoliths") are reduced to transparency. Dharker subverts expectations of permanence and power, arguing that even the most imposing human structures are ultimately fragile.',
      themes: ['Power', 'Human constructs', 'Fragility'],
    },
    {
      quote: 'turned into your own skin',
      analysis: 'The final isolated line completes the transformation from paper to body. "Your own skin" uses direct address to make the theme personal: our identities are constructed, layered, and fragile -- as thin as tissue. The line\'s structural isolation enacts the vulnerability it describes.',
      themes: ['Identity', 'Fragility', 'Power of nature'],
    },
  ],

  languageDevices: [
    {
      device: 'Extended metaphor (paper)',
      example: 'Paper that lets the light shine through',
      effect: 'Paper functions as a sustained metaphor throughout the entire poem, representing all human structures -- religious texts, borders, buildings, receipts, skin. By filtering everything through this single image, Dharker argues that all human constructs are fundamentally fragile and interconnected.',
      lineRef: 0,
    },
    {
      device: 'Light imagery',
      example: 'raise it to the light',
      effect: 'Recurring light imagery ("shine through," "raise it to the light," "near-transparent") symbolises truth, clarity, and understanding. Dharker associates transparency with positive transformation, suggesting that seeing through structures of power is liberating.',
      lineRef: 16,
    },
    {
      device: 'Enjambment',
      example: 'the back of / the Koran, where a hand / has written',
      effect: 'Pervasive enjambment runs sentences across lines and stanzas, preventing meaning from being contained within fixed boundaries. This mirrors the poem\'s central argument: that structures (borders, records, identities) should not confine us. The flowing form enacts the transparency of tissue.',
      lineRef: 7,
    },
    {
      device: 'Listing',
      example: 'who was born to whom, the inks, the runs and ruled lines',
      effect: 'Dharker catalogues the many uses of paper (birth records, receipts, maps, architectural plans) through extensive listing. This accumulation shows the sheer scale of paper\'s influence on human life, building a sense of how thoroughly documents control and define us.',
      lineRef: 10,
    },
    {
      device: 'Imperative mood',
      example: 'raise it to the light',
      effect: 'The imperative "raise it" is one of the poem\'s few direct commands, creating a moment of urgency amid the contemplative tone. Dharker instructs the reader to scrutinise the structures that define them, transforming passive observation into active enquiry.',
      lineRef: 16,
    },
    {
      device: 'Symbolism (borders and maps)',
      example: 'borderlines, the marks that rivers make',
      effect: 'Borders symbolise the arbitrary divisions humans impose on the world. By placing "borderlines" alongside natural features like rivers and mountains, Dharker questions whether political boundaries are any more real or permanent than creases in paper.',
      lineRef: 26,
    },
    {
      device: 'Conditional language',
      example: 'If buildings were paper, I might feel',
      effect: 'Modal verbs ("could," "might") and conditional "if" create a tentative, speculative tone. Rather than demanding change, Dharker imagines alternatives -- reflecting a belief that questioning and possibility are more powerful than rigid certainty.',
      lineRef: 19,
    },
    {
      device: 'Semantic field of fragility',
      example: 'thinned, tissue, transparent, torn, slips, drift',
      effect: 'Words associated with thinness and delicacy accumulate throughout, reinforcing the idea that all human structures -- from grand buildings to personal identity -- are fundamentally impermanent and vulnerable.',
      lineRef: 3,
    },
  ],
}

/* ── Comparison poems ───────────────────────────────────────────── */

const COMPARISONS = [
  {
    poem: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    slug: 'ozymandias',
    link: 'Both poems explore the impermanence of human power. Ozymandias shows a once-mighty ruler\'s monument crumbled to nothing; Tissue argues that all human structures are as fragile as paper. However, Shelley focuses on a single historical example of fallen power, while Dharker takes a broader, more philosophical view, suggesting that all constructs -- borders, buildings, identities -- are temporary.',
    themes: ['Power', 'Human constructs', 'Fragility'],
  },
  {
    poem: 'The Emigr\u00e9e',
    poet: 'Carol Rumens',
    slug: 'the-emigree',
    link: 'Both poets explore identity, borders, and belonging. The Emigr\u00e9e presents a speaker who clings to an idealised memory of a homeland despite political change; Tissue questions whether borders and national identities are as fixed as they seem. Dharker imagines dismantling borders, while Rumens shows how they persist in memory and emotion.',
    themes: ['Identity', 'Conflict', 'Power'],
  },
  {
    poem: 'Checking Out Me History',
    poet: 'John Agard',
    slug: 'checking-out-me-history',
    link: 'Both poems examine how written records shape identity. Agard protests the way colonial education erased Black Caribbean history from the curriculum; Dharker considers more broadly how paper records (birth certificates, religious texts, maps) construct and control identity. Both poets question who controls the narrative, but Agard is explicitly political and angry, while Dharker is contemplative and philosophical.',
    themes: ['Identity', 'Power', 'Heritage'],
  },
]

/* ── Theme tokens ───────────────────────────────────────────────── */

const THEMES = [
  'Power',
  'Identity',
  'Fragility',
  'Human constructs',
  'Conflict',
  'Heritage',
  'Nature vs. civilisation',
]

/* ── Page component ─────────────────────────────────────────────── */

export default function TissuePage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb / back */}
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
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Tissue</h1>
            <p className="text-body-sm text-muted-foreground">
              by Imtiaz Dharker -- Power and Conflict Anthology
            </p>
          </div>
        </div>
      </div>

      {/* Theme tokens */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>

      {/* Interactive poem viewer */}
      <InteractivePoemViewer poem={TISSUE} />

      {/* Comparisons */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">
          Compare with other poems
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.slug}
              className="rounded-xl border border-border bg-card p-5 space-y-3"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">{c.poem}</h3>
                <p className="text-xs text-muted-foreground">{c.poet}</p>
              </div>
              <p className="text-sm text-card-foreground leading-relaxed">
                {c.link}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={
                  <Link
                    href={`/revision/poetry/power-and-conflict/${c.slug}`}
                  />
                }
              >
                Study {c.poem}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
