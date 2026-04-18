'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ─────────────────────────────────────────────────────── */

const followerPoem: PoemData = {
  title: 'Follower',
  poet: 'Seamus Heaney',
  lines: [
    // Stanza 1
    {
      text: 'My father worked with a horse-plough,',
      annotations: [
        { type: 'Setting', note: 'Opens with manual, pre-industrial farming. The horse-plough places this in a traditional Irish rural world that is already passing.', color: '#3b82f6' },
      ],
    },
    {
      text: 'The shoulders globed like a full sail strung',
      annotations: [
        { type: 'Simile', note: 'Nautical imagery presents the father as powerful and commanding, his shoulders billowing like sails. It elevates manual labour to something heroic.', color: '#10b981' },
      ],
    },
    { text: 'Between the shafts and the furrow.' },
    { text: 'The horses strained at his clicking tongue.' },
    // Stanza break
    { text: '' },
    // Stanza 2
    {
      text: 'An expert. He would set the wing',
      annotations: [
        { type: 'Fragment', note: 'The blunt, two-word sentence is emphatic and definitive. Its brevity mirrors the father\'s no-nonsense, practical character.', color: '#f59e0b' },
      ],
    },
    {
      text: 'And fit the bright steel-pointed sock.',
      annotations: [
        { type: 'Technical language', note: 'Precise ploughing terminology ("wing," "sock," "headrig") demonstrates the father\'s mastery and the son\'s close, admiring observation of his craft.', color: '#8b5cf6' },
      ],
    },
    { text: 'The sod rolled over without breaking.' },
    { text: 'At the headrig, with a single pluck' },
    // Stanza break
    { text: '' },
    // Stanza 3
    {
      text: 'Of reins, the sweating team turned round',
      annotations: [
        { type: 'Enjambment', note: 'The line break between "pluck" and "Of reins" mimics the turning motion of the plough team at the headrig, enacting what it describes.', color: '#10b981' },
      ],
    },
    { text: 'And back into the land. His eye' },
    { text: 'Narrowed and angled at the ground,' },
    {
      text: 'Mapping the furrow exactly.',
      annotations: [
        { type: 'Precision', note: '"Mapping" elevates ploughing to an intellectual skill. "Exactly" reinforces the father\'s perfectionism and mastery of his craft.', color: '#3b82f6' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 4
    {
      text: 'I stumbled in his hobnailed wake,',
      annotations: [
        { type: 'Contrast', note: '"Stumbled" contrasts sharply with the father\'s expert control. "Wake" continues the nautical metaphor \u2014 the father cuts through earth like a ship through water.', color: '#f59e0b' },
      ],
    },
    { text: 'Fell sometimes on the polished sod;' },
    { text: 'Sometimes he rode me on his back' },
    { text: 'Dipping and rising to his plod.' },
    // Stanza break
    { text: '' },
    // Stanza 5
    {
      text: 'I wanted to grow up and plough,',
      annotations: [
        { type: 'Aspiration', note: 'The child\'s simple desire to emulate his father is touching but will ultimately go unfulfilled \u2014 Heaney became a poet, not a farmer.', color: '#3b82f6' },
      ],
    },
    { text: 'To close one eye, stiff my arm.' },
    { text: 'All I ever did was follow' },
    {
      text: 'In his broad shadow round the farm.',
      annotations: [
        { type: 'Metaphor', note: 'The father\'s "broad shadow" represents both his physical dominance and his overwhelming influence on the child\'s identity. The child is literally overshadowed.', color: '#10b981' },
      ],
    },
    // Stanza break
    { text: '' },
    // Stanza 6
    {
      text: 'I was a nuisance, tripping, falling,',
      annotations: [
        { type: 'Listing', note: 'The accumulation of clumsy participles ("tripping, falling, yapping") emphasises the child\'s persistent, awkward presence against the father\'s steady skill.', color: '#8b5cf6' },
      ],
    },
    { text: 'Yapping always. But today' },
    {
      text: 'It is my father who keeps stumbling',
      annotations: [
        { type: 'Volta', note: 'The dramatic reversal: "But today" pivots the entire poem. Now the father "stumbles" \u2014 the same verb used for the child earlier. Ageing has reversed their roles.', color: '#ef4444' },
      ],
    },
    {
      text: 'Behind me, and will not go away.',
      annotations: [
        { type: 'Ambiguity', note: '"Will not go away" resists simple interpretation: frustration, guilt, love, or the haunting presence of memory and family obligation. The monosyllabic finality is devastating.', color: '#f59e0b' },
      ],
    },
  ],
  context: '<p><strong>Seamus Heaney</strong> (1939\u20132013) was a Nobel Prize-winning Irish poet from County Derry, Northern Ireland. He grew up on a farm called Mossbawn and many of his poems explore his <strong>rural childhood</strong> and his complex relationship with his father, Patrick Heaney.</p><p>Heaney felt a deep tension between his father\'s world of <strong>physical, manual labour</strong> and his own path as a <strong>poet and intellectual</strong>. "Follower" captures both his childhood admiration for his father\'s farming skill and his adult guilt at having chosen a different life.</p><p>The poem\'s devastating final stanza reverses the roles: the ageing father now follows the son, perhaps literally (in old age and dependence) or metaphorically (as a persistent presence in Heaney\'s memory and conscience). The poem explores <strong>father-son relationships</strong>, <strong>role reversal</strong>, <strong>admiration and guilt</strong>, and the way <strong>family bonds</strong> shape identity.</p>',
  summary: 'The speaker recalls following his father across the farm as a child, watching in awe as the father expertly controlled a horse-plough. The child stumbled clumsily in his father\'s wake, wanting to grow up to be just like him but always falling short. In the final stanza, the poem shifts dramatically to the present: now it is the ageing father who stumbles behind the son, unable or unwilling to go away. The reversal is both tender and troubling, suggesting guilt, love, and the inescapable weight of family.',
  formAndStructure: 'Form: Six quatrains with an ABAB rhyme scheme (plough/furrow, strung/tongue), giving the poem a steady, measured rhythm that mirrors the regular back-and-forth of ploughing.\n\nStructure: The first five stanzas describe the past (childhood); the final stanza pivots sharply to the present, creating a dramatic volta.\n\nRhyme: Full rhymes and half-rhymes alternate. The half-rhymes create subtle unease beneath the surface regularity.\n\nMonosyllables: The poem is dominated by short, Anglo-Saxon words ("worked," "set," "fit," "fell"), reflecting the plain, physical world of farming.\n\nEnjambment: Lines frequently run on across stanza breaks (e.g. "pluck / Of reins"), mirroring the continuous motion of ploughing and the unbroken chain of family.\n\nVolta: The turn at "But today" in the final stanza is one of the most powerful in GCSE poetry, reversing everything that came before.',
  keyQuotes: [
    { quote: 'The shoulders globed like a full sail strung', analysis: 'The nautical simile presents the father as powerful and commanding, his shoulders billowing like sails. It elevates manual labour to something heroic and grand.', themes: ['Admiration', 'Power', 'Father'] },
    { quote: 'An expert', analysis: 'The blunt, two-word sentence fragment is emphatic and definitive. Its brevity mirrors the father\'s no-nonsense, practical character.', themes: ['Skill', 'Admiration', 'Father'] },
    { quote: 'Mapping the furrow exactly', analysis: '"Mapping" elevates ploughing to a precise, intellectual skill. "Exactly" reinforces the father\'s perfectionism and mastery of his craft.', themes: ['Skill', 'Precision', 'Admiration'] },
    { quote: 'I stumbled in his hobnailed wake', analysis: '"Stumbled" captures the child\'s clumsiness contrasting the father\'s control. "Wake" continues the nautical metaphor \u2014 the father is a ship, the child trailing behind.', themes: ['Following', 'Inadequacy', 'Father-son'] },
    { quote: 'All I ever did was follow', analysis: '"All I ever did" suggests futility and disappointment. The child could only imitate, never match, his father\'s skill. "Follow" becomes the poem\'s key verb.', themes: ['Identity', 'Following', 'Aspiration'] },
    { quote: 'In his broad shadow round the farm', analysis: 'The father\'s "broad shadow" represents both his physical dominance and his overwhelming influence on the child\'s identity.', themes: ['Influence', 'Identity', 'Father'] },
    { quote: 'I was a nuisance, tripping, falling', analysis: 'The self-deprecating tone and accumulation of clumsy participles reveal the speaker\'s sense of inadequacy. He defines his childhood self as a burden.', themes: ['Guilt', 'Inadequacy', 'Childhood'] },
    { quote: 'It is my father who keeps stumbling / Behind me, and will not go away', analysis: 'The devastating reversal: the father\'s verbs echo the child\'s earlier clumsiness. "Will not go away" is ambiguous \u2014 frustration, guilt, love, or haunting memory.', themes: ['Role reversal', 'Ageing', 'Guilt', 'Memory'] },
  ],
  languageDevices: [
    { device: 'Nautical imagery', example: 'globed like a full sail strung / hobnailed wake', effect: 'Comparing the father to a ship elevates him to something powerful and commanding. The child follows in his "wake" like a small vessel trailing a great one.', lineRef: 1 },
    { device: 'Technical jargon', example: 'wing / sock / headrig', effect: 'Precise farming terminology demonstrates the son\'s intimate knowledge of his father\'s craft and his deep, admiring observation of the work.', lineRef: 6 },
    { device: 'Monosyllabic diction', example: 'worked / set / fit / fell / plod', effect: 'Short, blunt Anglo-Saxon words reflect the physical, no-nonsense world of farming and the father\'s practical, unadorned character.', lineRef: 0 },
    { device: 'Enjambment', example: 'single pluck / Of reins', effect: 'The line break enacts the sharp pulling motion of the reins, making the reader physically experience the turn of the plough team.', lineRef: 8 },
    { device: 'Volta', example: 'But today / It is my father who keeps stumbling', effect: 'The conjunction "But" and the shift to present tense create a dramatic reversal. Everything the poem has built is inverted in two lines.', lineRef: 26 },
    { device: 'Repetition with reversal', example: 'stumbled (child) / stumbling (father)', effect: 'The same verb applied to both generations enacts the role reversal structurally. The child\'s past clumsiness becomes the father\'s present frailty.', lineRef: 27 },
    { device: 'Ambiguity', example: 'will not go away', effect: 'The final phrase resists simple interpretation: is it irritation, love, guilt, or the inescapable presence of family? The ambiguity is the poem\'s emotional power.', lineRef: 28 },
  ],
}

/* ── Compare-with poems ────────────────────────────────────────────── */

const comparePoems = [
  {
    title: 'Walking Away',
    poet: 'Cecil Day-Lewis',
    link: '/revision/poetry/love-and-relationships/walking-away',
    reason: 'Both explore father-son relationships and role reversal. Day-Lewis watches his son leave; Heaney\'s father eventually stumbles behind the son. Both capture the pain of changing dynamics.',
    themes: ['Father-son', 'Role reversal', 'Growing up'],
  },
  {
    title: 'Eden Rock',
    poet: 'Charles Causley',
    link: '/revision/poetry/love-and-relationships/eden-rock',
    reason: 'Both are deeply personal poems about a parent. Heaney\'s father is a living presence who becomes a memory; Causley\'s parents are memories who become a living vision.',
    themes: ['Family', 'Memory', 'Parent-child'],
  },
  {
    title: 'The Farmer\'s Bride',
    poet: 'Charlotte Mew',
    link: '/revision/poetry/love-and-relationships/the-farmers-bride',
    reason: 'Both use rural farming settings and dialect to establish voice. Heaney\'s speaker admires his father\'s skill; Mew\'s farmer reveals possessiveness through his rural dialect.',
    themes: ['Rural life', 'Dialect', 'Power dynamics'],
  },
]

/* ── Page component ────────────────────────────────────────────────── */

export default function FollowerPage() {
  return (
    <div className="space-y-8">
      {/* ── Back navigation ──────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Love and Relationships
        </Button>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h1 className="text-heading-lg font-heading text-foreground">Follower</h1>
          <Badge variant="secondary">AQA</Badge>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Seamus Heaney &middot; <em>Death of a Naturalist</em> (1966)
        </p>
      </div>

      {/* ── Theme tokens ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {['Father-son', 'Admiration', 'Role reversal', 'Identity', 'Guilt', 'Ageing'].map(
          (theme) => (
            <Badge key={theme} variant="outline" className="text-xs">
              {theme}
            </Badge>
          ),
        )}
      </div>

      {/* ── Interactive poem viewer ──────────────────────────────── */}
      <StudyTools
        textName="Follower"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InteractivePoemViewer poem={followerPoem} />

      {/* ── Compare with ─────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Compare with</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparePoems.map((cp) => (
            <div
              key={cp.title}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/80 hover:bg-muted/30"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cp.title}</h3>
                  <p className="text-xs text-muted-foreground">{cp.poet}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {cp.reason}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cp.themes.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                render={<Link href={cp.link} />}
              >
                Study {cp.title}
                <ArrowRight className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational
        criticism under UK fair-dealing provisions (Copyright, Designs and
        Patents Act 1988, s.30). No commercial use is intended. All quotations
        remain the intellectual property of the respective rights holders.
      </footer>
    </div>
  )
}
