'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

const sennacherib: PoemData = {
  title: 'The Destruction of Sennacherib',
  poet: 'Lord Byron',
  lines: [
    {
      text: 'The Assyrian came down like the wolf on the fold,',
      annotations: [
        {
          type: 'Simile',
          note: 'The Assyrian army is compared to a wolf attacking sheep. The simile casts the invaders as predatory animals and the Israelites as helpless prey.',
          color: '#10b981',
        },
        {
          type: 'Anapaestic rhythm',
          note: 'The galloping anapaestic tetrameter (da-da-DUM) imitates the thunder of cavalry hooves. The pace is set from the very first line.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And his cohorts were gleaming in purple and gold;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Purple and gold" suggest Assyrian wealth and imperial power. The colours dazzle the eye and remind us how confident and proud the army is at the start.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the sheen of their spears was like stars on the sea,',
      annotations: [
        {
          type: 'Simile',
          note: 'The army\u2019s polished spears glitter like stars reflected on water. The image is beautiful, suggesting awe and danger held together.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Byron makes the army look almost cosmic in its scale before he destroys it. The grandeur sharpens the irony of the fall.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'When the blue wave rolls nightly on deep Galilee.',
      annotations: [
        {
          type: 'Setting',
          note: 'Galilee anchors the poem in the Holy Land and gives the conflict a biblical scale. "Nightly" creates a sense of timelessness.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'Like the leaves of the forest when Summer is green,',
      annotations: [
        {
          type: 'Simile',
          note: 'The army at full strength is like a forest in midsummer \u2014 lush, vast, alive. The image is one of irresistible abundance.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'That host with their banners at sunset were seen:',
      annotations: [
        {
          type: 'Time marker',
          note: '"Sunset" sets up the contrast that follows. The army is at its peak just as day ends \u2014 a hint that night, and disaster, is coming.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Like the leaves of the forest when Autumn hath blown,',
      annotations: [
        {
          type: 'Volta',
          note: 'The same simile is repeated, but now in autumn. Byron compresses the army\u2019s rise and fall into two consecutive seasons. The reversal is total.',
          color: '#f59e0b',
        },
        {
          type: 'Key quote',
          note: 'The mirroring of "Like the leaves of the forest" turns the poem on a single seasonal pivot. Power dies as quickly as leaves.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'That host on the morrow lay withered and strown.',
      annotations: [
        {
          type: 'Imagery',
          note: '"Withered and strown" turns the soldiers into dead leaves on the ground \u2014 anonymous, scattered, lifeless. Their grandeur is gone overnight.',
          color: '#ef4444',
        },
      ],
    },
    { text: '' },
    {
      text: 'For the Angel of Death spread his wings on the blast,',
      annotations: [
        {
          type: 'Personification',
          note: 'The Angel of Death is a biblical figure (2 Kings 19) sent by God to destroy Sennacherib\u2019s army. Personifying him makes the divine intervention feel sudden and vivid.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: 'Byron names the killer. The agent of destruction is divine, not human \u2014 the Israelites do not lift a sword.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And breathed in the face of the foe as he passed;',
      annotations: [
        {
          type: 'Imagery',
          note: 'A single breath kills an entire army. The action is almost gentle \u2014 no battle, no struggle. Death is intimate and instantaneous.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the eyes of the sleepers waxed deadly and chill,',
      annotations: [
        {
          type: 'Diction',
          note: '"Waxed deadly and chill" uses old, almost funereal language. The soldiers do not wake \u2014 their eyes simply glaze and freeze.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And their hearts but once heaved, and for ever grew still!',
      annotations: [
        {
          type: 'Caesura',
          note: 'The comma after "heaved" creates a pause that mimics the final, single beat of the heart. The exclamation mark drives the moment home.',
          color: '#a855f7',
        },
      ],
    },
    { text: '' },
    {
      text: 'And there lay the steed with his nostril all wide,',
      annotations: [
        {
          type: 'Imagery',
          note: 'Byron zooms in on a single dead horse. The "wide" nostril shows the moment of death frozen forever.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'But through it there roll\u2019d not the breath of his pride;',
      annotations: [
        {
          type: 'Pride motif',
          note: '"Pride" links the horse to the Assyrian army\u2019s arrogance. The breath of life and the breath of pride are the same \u2014 both gone.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And the foam of his gasping lay white on the turf,',
      annotations: [
        {
          type: 'Visual detail',
          note: 'The white foam is a small, vivid detail that makes the death feel real and physical, not allegorical.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And cold as the spray of the rock-beating surf.',
      annotations: [
        {
          type: 'Simile',
          note: 'The dead horse\u2019s foam is "cold as the spray" of sea against rock \u2014 Byron returns to water imagery, linking the army\u2019s fall to natural forces.',
          color: '#10b981',
        },
      ],
    },
    { text: '' },
    {
      text: 'And there lay the rider distorted and pale,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Distorted and pale" reduces the proud cavalryman to a twisted corpse. The fall from "purple and gold" is now complete.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'With the dew on his brow, and the rust on his mail:',
      annotations: [
        {
          type: 'Decay motif',
          note: 'The dew and the rust both suggest abandonment. Nature is already reclaiming the body, just as it will reclaim the army\u2019s glory.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the tents were all silent, the banners alone,',
      annotations: [
        {
          type: 'Sound',
          note: 'The "silent" tents make us hear what is missing: shouts, hoofbeats, life. The banners stand alone with no soldiers to carry them.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'The lances unlifted, the trumpet unblown.',
      annotations: [
        {
          type: 'Anaphora',
          note: 'The triple "the... un-" pattern hammers home the absence of action. War has stopped because no one is left to fight it.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Byron creates a battlefield without battle. The silence is the loudest moment in the poem.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },
    {
      text: 'And the widows of Ashur are loud in their wail,',
      annotations: [
        {
          type: 'Aftermath',
          note: 'For the first time in the poem we hear human voices \u2014 but only the cries of grieving widows. The cost of imperial ambition is borne by women left behind.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And the idols are broke in the temple of Baal;',
      annotations: [
        {
          type: 'Religion',
          note: 'The Assyrian gods themselves have been smashed. Byron suggests the defeat is religious as well as military: their worship was powerless against the God of Israel.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And the might of the Gentile, unsmote by the sword,',
      annotations: [
        {
          type: 'Irony',
          note: '"Unsmote by the sword" \u2014 the army was defeated without anyone striking a blow. The mighty empire is destroyed by a single divine breath.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Hath melted like snow in the glance of the Lord!',
      annotations: [
        {
          type: 'Closing simile',
          note: 'The empire melts "like snow in the glance of the Lord" \u2014 a single look from God is enough. The exclamation mark seals the moral with thunderous finality.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Byron compresses the whole story into one image: divine power makes human power vanish like spring snow.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Lord Byron (1788&ndash;1824)</h3>
    <p>George Gordon, Lord Byron, was one of the most famous Romantic poets, notorious for his scandalous personal life and his radical politics. He was deeply interested in heroism, power and the relationship between human ambition and divine or natural force.</p>

    <h3>Hebrew Melodies (1815)</h3>
    <p>"The Destruction of Sennacherib" was published in <em>Hebrew Melodies</em>, a collection set to traditional Jewish music by the composer Isaac Nathan. The poems retell stories from the Hebrew Bible and reflect Byron\u2019s sympathy for oppressed peoples and his fascination with Old Testament drama.</p>

    <h3>Biblical source: 2 Kings 19</h3>
    <p>The poem dramatises a story from 2 Kings 19. Sennacherib, king of Assyria, besieges Jerusalem during the reign of Hezekiah. The Bible says that "the angel of the Lord went out, and smote in the camp of the Assyrians a hundred fourscore and five thousand" \u2014 the entire army died in a single night, without battle.</p>

    <h3>Romantic context</h3>
    <p>Byron was writing in the aftermath of the Napoleonic Wars (1803&ndash;1815). The collapse of Napoleon\u2019s seemingly invincible army would have been very recent in Byron\u2019s readers\u2019 minds. The poem can be read as a commentary on the fragility of all earthly empires \u2014 ancient or modern.</p>
  `,

  summary: `Stanzas 1\u20132: Byron describes the Assyrian army at its most magnificent. They sweep down "like the wolf on the fold" in shining purple and gold, their spears glittering like stars on the sea. They are compared to a forest in summer \u2014 vast, lush, irresistible.

Stanza 2 turn: The same forest simile is repeated, but now in autumn. By the morning, the army lies "withered and strown" like fallen leaves. Two seasons in two lines: the rise and fall of empire compressed into a single image.

Stanza 3: Byron names the agent of destruction. The Angel of Death (from 2 Kings 19) spreads his wings on the wind and breathes in the face of the soldiers. They die in their sleep \u2014 their hearts beat once and stop forever.

Stanzas 4\u20135: Byron zooms in on a dead horse and a dead rider. The horse\u2019s nostril is wide but no breath comes through; the rider lies pale and distorted, dew on his brow and rust on his armour. The tents are silent; the banners stand alone.

Stanza 6: We hear, for the first time, human voices \u2014 the wails of the Assyrian widows back home in Ashur. Their idols are smashed; their empire has been destroyed without a sword being lifted. The poem ends with the army melting "like snow in the glance of the Lord".

Overall meaning: A poem about the fragility of human power. The mightiest empire on earth is wiped out in a single night by a single divine action. The cavalry never fights; the Israelites never strike. Byron uses biblical narrative to dramatise how easily proud, dazzling power can be undone.`,

  formAndStructure: `Form: Six quatrains in rhyming couplets (AABB throughout). The neat, song-like structure suits the poem\u2019s origins in <em>Hebrew Melodies</em>, which were intended to be sung.

Metre: Anapaestic tetrameter (four anapaests per line: da-da-DUM da-da-DUM da-da-DUM da-da-DUM). The galloping rhythm imitates the sound of cavalry charging, then continues even after the army is destroyed \u2014 making the silence at the end feel ironic.

Rhyme scheme: AABB couplets give the poem the feel of a chant or ballad. The couplets close the action down repeatedly, mirroring how each step of the destruction completes itself.

Structural shape: The poem moves from grandeur (stanzas 1\u20132) to destruction (stanza 3) to aftermath (stanzas 4\u20136). The pivot is the repeated forest simile in stanza 2: summer becomes autumn in a single line.

Caesura and end-stopping: Most lines are end-stopped, giving the poem a steady, marching pulse. The pauses inside lines (especially in stanza 3) make individual deaths feel deliberate and vivid.

Anaphora: Phrases like "And there lay the steed", "And there lay the rider", "And the tents... And the lances..." build a rhythmic cataloguing of devastation, like a list of war casualties.`,

  keyQuotes: [
    {
      quote: 'The Assyrian came down like the wolf on the fold',
      analysis:
        'The opening simile sets up the predator-prey dynamic. The wolf is animalistic, hungry, dangerous; the fold is helpless and vulnerable. Byron makes us feel the threat of the army before he overturns it. The line\u2019s anapaestic rhythm gallops, imitating cavalry on the move.',
      themes: ['War', 'Power', 'Predator and prey'],
    },
    {
      quote: 'the sheen of their spears was like stars on the sea',
      analysis:
        'A beautiful, almost peaceful image of military might. By making the spears as cosmic as starlight, Byron raises the army\u2019s stature \u2014 only to make their fall more devastating in the next stanza.',
      themes: ['Power', 'Beauty', 'War'],
    },
    {
      quote: 'Like the leaves of the forest when Autumn hath blown',
      analysis:
        'The mirror of the summer simile in the previous stanza. The same forest, the same syntax \u2014 but a different season. Byron compresses the rise and fall of empire into a single seasonal turn. The army is reduced to dead leaves overnight.',
      themes: ['Decay', 'Time', 'Power'],
    },
    {
      quote: 'For the Angel of Death spread his wings on the blast',
      analysis:
        'Byron names the killer. The Angel of Death is a biblical figure who carries out God\u2019s judgement. "Wings on the blast" links the angel to the wind, making divine punishment feel as natural and unstoppable as a storm.',
      themes: ['Religion', 'Power', 'Death'],
    },
    {
      quote: 'their hearts but once heaved, and for ever grew still',
      analysis:
        'The most intimate image of death in the poem. After the cosmic similes, Byron shrinks the focus to a single heartbeat. The caesura ("heaved, and") mimics the final pulse before stillness. The line is quiet, almost gentle \u2014 there is no struggle.',
      themes: ['Death', 'Stillness', 'War'],
    },
    {
      quote: 'The lances unlifted, the trumpet unblown',
      analysis:
        'Anaphora and the prefix "un-" build a battlefield defined by absence. The weapons of war remain on the ground; the trumpet that should signal the charge is silent. Byron paints a war scene with no war \u2014 only its objects, and the silence around them.',
      themes: ['Silence', 'Aftermath', 'War'],
    },
    {
      quote: 'And the might of the Gentile, unsmote by the sword',
      analysis:
        'The poem\u2019s central irony. Sennacherib\u2019s army was the mightiest in the ancient world, yet not a single blow was struck. "Unsmote" sounds biblical and emphasises the absence of human violence \u2014 it is divine power, not Israelite swords, that destroys them.',
      themes: ['Irony', 'Power', 'Religion'],
    },
    {
      quote: 'Hath melted like snow in the glance of the Lord',
      analysis:
        'The closing simile. The mighty empire melts not in fire or blood but at a single look from God. The image is delicate and almost weightless \u2014 the precise opposite of the army\u2019s armoured grandeur. Byron lets the contrast carry the moral.',
      themes: ['Religion', 'Power', 'Transience'],
    },
  ],

  languageDevices: [
    {
      device: 'Anapaestic tetrameter',
      example: 'The Assyrian came down like the wolf on the fold',
      effect:
        'The four-beat anapaestic rhythm imitates galloping cavalry. The metre is so insistent that it carries the reader along on the army\u2019s charge \u2014 until the destruction stanza, where the same beat starts to feel hollow and unstoppable.',
      lineRef: 0,
    },
    {
      device: 'Repeated simile',
      example: 'Like the leaves of the forest when Summer is green / Like the leaves of the forest when Autumn hath blown',
      effect:
        'Byron repeats the same syntactic frame with one season swapped for another. The repetition itself dramatises the speed of the fall: the army goes from summer to autumn in two lines. The form embodies the meaning.',
      lineRef: 6,
    },
    {
      device: 'Personification',
      example: 'For the Angel of Death spread his wings on the blast',
      effect:
        'Death is given a body \u2014 wings, a face, breath. By personifying the destroyer, Byron makes divine intervention feel immediate and almost physical. The Angel acts as the agent of God\u2019s judgement on imperial pride.',
      lineRef: 10,
    },
    {
      device: 'Anaphora',
      example: 'And there lay the steed... And there lay the rider...',
      effect:
        'The repetition of "And there lay" turns the battlefield into a slow camera pan across corpses. Each instance forces the reader to look at one more death. The cumulative effect is overwhelming.',
      lineRef: 14,
    },
    {
      device: 'Religious diction',
      example: 'the temple of Baal / the glance of the Lord',
      effect:
        'Byron uses Old Testament vocabulary throughout. The "temple of Baal" represents pagan worship; "the glance of the Lord" represents the true God. The contrast frames the destruction as a religious as well as a military victory.',
      lineRef: 23,
    },
    {
      device: 'Caesura',
      example: 'their hearts but once heaved, and for ever grew still!',
      effect:
        'The mid-line pause after "heaved" mimics the moment of stillness when the heart stops. The caesura is enacted physically by the comma; the exclamation mark seals the moment.',
      lineRef: 13,
    },
  ],
}

const comparisons = [
  {
    title: 'The Charge of the Light Brigade',
    poet: 'Alfred Lord Tennyson',
    href: '/revision/poetry/edexcel/conflict',
    reason:
      'Both poems use galloping metre and dramatic vocabulary to stage cavalry warfare. Tennyson celebrates human heroism in the face of death; Byron celebrates divine power that needs no heroism at all. Compare the moral framing of war.',
    themes: ['War', 'Power', 'Death'],
  },
  {
    title: 'Exposure',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/edexcel/conflict',
    reason:
      'Both poems show soldiers killed by something other than weapons \u2014 Byron by divine intervention, Owen by the freezing weather. Compare how each poet uses non-human forces to expose human powerlessness.',
    themes: ['War', 'Suffering', 'Nature vs man'],
  },
  {
    title: 'A Poison Tree',
    poet: 'William Blake',
    href: '/revision/poetry/edexcel/conflict/a-poison-tree',
    reason:
      'Both poems use biblical imagery to dramatise destruction. Byron stages divine punishment of an empire; Blake stages a private act of suppressed rage. Compare how religious frameworks shape each poet\u2019s view of revenge.',
    themes: ['Religion', 'Anger', 'Death'],
  },
]

export default function SennacheribPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/edexcel/conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Conflict cluster
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              The Destruction of Sennacherib
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Lord Byron &middot; Edexcel Conflict anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">Edexcel</Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="The Destruction of Sennacherib"
        textType="poem"
        examBoard="Edexcel"
        cluster="Conflict"
        variant="compact"
      />
      <InteractivePoemViewer poem={sennacherib} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings with The Destruction of Sennacherib from the Edexcel Conflict cluster.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[0.7rem] leading-relaxed text-muted-foreground">
        <p>
          &ldquo;The Destruction of Sennacherib&rdquo; by Lord Byron (1815) is in the
          public domain. All quotations on this page are used for the purpose of
          criticism, review and educational study under fair dealing (s.30
          Copyright, Designs and Patents Act 1988).
        </p>
      </footer>
    </div>
  )
}
