'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

const sheWalksInBeauty: PoemData = {
  title: 'She Walks in Beauty',
  poet: 'Lord Byron',
  lines: [
    {
      text: 'She walks in beauty, like the night',
      annotations: [
        {
          type: 'Simile',
          note: 'The opening simile is unusual: women are usually compared to daylight or sunshine. By comparing her to "the night", Byron suggests a darker, mysterious, more sophisticated kind of beauty -- one rooted in calmness rather than brightness.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The poem\'s most famous line. "Walks in beauty" makes beauty something she carries with her, not just a quality she possesses.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Of cloudless climes and starry skies;',
      annotations: [
        {
          type: 'Imagery',
          note: 'A clear night sky full of stars -- Byron specifies "cloudless" so that nothing dims her beauty. The imagery is celestial, lifting her above the everyday world.',
          color: '#10b981',
        },
        {
          type: 'Alliteration',
          note: 'The repeated soft "c" and "s" sounds ("cloudless climes", "starry skies") create a hushed, reverent tone, as though Byron does not want to break the spell of describing her.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And all that\'s best of dark and bright',
      annotations: [
        {
          type: 'Juxtaposition',
          note: 'Byron pairs opposites -- "dark and bright" -- to suggest balance. She is not extreme in either direction; she combines the best of both.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Meet in her aspect and her eyes;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Aspect" means appearance or expression. Her eyes are singled out as the meeting place of light and dark -- the windows of the soul where her inner harmony is most visible.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Thus mellowed to that tender light',
      annotations: [
        {
          type: 'Tone',
          note: '"Mellowed" and "tender" suggest softness rather than dazzling brightness. Byron praises a quiet, gentle beauty rather than a bold, fiery one.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Which heaven to gaudy day denies.',
      annotations: [
        {
          type: 'Contrast',
          note: '"Gaudy day" -- bright daylight is dismissed as showy and vulgar. Heaven (a divine source) reserves this softer light for night, and so for her.',
          color: '#ef4444',
        },
        {
          type: 'Religious diction',
          note: '"Heaven" elevates her beauty to a divine gift, almost sacred. The contrast with "gaudy" makes ostentatious beauty feel cheap by comparison.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'One shade the more, one ray the less,',
      annotations: [
        {
          type: 'Balance',
          note: 'A perfectly balanced line: shade vs ray, more vs less. Byron suggests her beauty is so finely tuned that even the smallest change would spoil it.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The exquisite mathematical precision of her beauty. Any alteration -- one more shadow, one less highlight -- would damage perfection.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Had half impaired the nameless grace',
      annotations: [
        {
          type: 'Diction',
          note: '"Nameless grace" -- her beauty cannot be reduced to a single feature or named quality. There is something indefinable about it, beyond words.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Which waves in every raven tress,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Raven tress" -- her hair is jet-black, like a raven\'s feathers. This reinforces the night imagery from stanza one. "Waves" gives her hair a living, flowing quality.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Or softly lightens o\'er her face;',
      annotations: [
        {
          type: 'Light imagery',
          note: '"Softly lightens" -- gentle light playing over her face. Byron continues the contrast of light and dark introduced in stanza one.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Where thoughts serenely sweet express',
      annotations: [
        {
          type: 'Inner beauty',
          note: 'The poem now turns inward. Her thoughts are "serenely sweet" -- peaceful and kind. Byron is emphasising that her beauty reflects an inner moral calm, not just outward looks.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'How pure, how dear their dwelling place.',
      annotations: [
        {
          type: 'Religious diction',
          note: '"Pure", "dear", "dwelling place" -- this language is almost sacred. Her mind is described as a kind of holy temple where pure thoughts live.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'And on that cheek, and o\'er that brow,',
      annotations: [
        {
          type: 'Structure',
          note: 'The final stanza zooms in on her face -- cheek, brow, smile. After two stanzas of abstract praise, Byron grounds his admiration in physical detail.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'So soft, so calm, yet eloquent,',
      annotations: [
        {
          type: 'Adjectives',
          note: '"Soft", "calm", "eloquent" -- a triad of adjectives praising gentleness. "Eloquent" is interesting: her face speaks without words.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The smiles that win, the tints that glow,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Smiles that win" -- captivating, charming. "Tints that glow" -- the warm colour in her cheeks. Light still shines from her, even in this final stanza.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'But tell of days in goodness spent,',
      annotations: [
        {
          type: 'Moral message',
          note: 'Her beauty is the result of a virtuous life. Byron makes a moral claim: a good life produces a beautiful face. Inner goodness becomes outer beauty.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The crucial line that turns the poem into something more than physical description. Outer beauty reflects inner virtue.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'A mind at peace with all below,',
      annotations: [
        {
          type: 'Moral message',
          note: '"At peace with all below" -- in harmony with everyone around her. She holds no grudges and disturbs no one.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'A heart whose love is innocent!',
      annotations: [
        {
          type: 'Closure',
          note: 'The poem ends emphatically on "innocent" -- a single word that crowns the praise. Crucially, Byron presents this love as pure and non-sexual, surprising for a poet famous for scandal.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The exclamation mark is the only one in the poem. After 17 lines of quiet admiration, this final line bursts out with conviction.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Lord Byron (1788--1824)</h3>
    <p>George Gordon, Lord Byron, was one of the most famous of the English Romantic poets. He was notorious in his own lifetime for his many love affairs, his political radicalism, and his striking good looks. He died fighting for Greek independence at 36 and became a kind of literary celebrity unlike any poet before him.</p>

    <h3>The Romantics</h3>
    <p>Romantic poetry valued emotion, nature, individual experience and beauty. Byron is part of the "second generation" of Romantics, alongside Shelley and Keats. Unlike Wordsworth, who focused on nature and ordinary life, Byron is often more dramatic, witty and worldly.</p>

    <h3>Composition (1814)</h3>
    <p>Byron is said to have written "She Walks in Beauty" the morning after meeting his cousin by marriage, <strong>Mrs Anne Beatrix Wilmot</strong>, at a party in London. She was wearing a black mourning dress decorated with sparkling spangles -- the literal source of the contrast between dark and bright that runs through the poem. Despite Byron's reputation, the relationship was not romantic; the poem celebrates her beauty with admiration rather than desire.</p>

    <h3>Hebrew Melodies</h3>
    <p>The poem was published in 1815 as part of <em>Hebrew Melodies</em>, a collection of lyrics Byron wrote to be set to traditional Jewish music. The collection's tone is generally serious, reverent and reflective -- which is why this poem feels more spiritual than sensual.</p>
  `,

  summary: `Stanza 1: The speaker compares the woman to "the night / Of cloudless climes and starry skies" -- a night sky that is both dark and full of stars. The "best of dark and bright" meet in her face and eyes, creating a soft, mellow beauty unlike harsh daylight.

Stanza 2: The balance of light and shadow in her appearance is so perfect that any change would damage her grace. Her dark, wavy hair frames her face. The poem now turns inward: her face expresses "thoughts serenely sweet", suggesting the purity of her inner mind.

Stanza 3: The speaker focuses on her cheek, brow and smiles. Her face is "soft", "calm", "eloquent". The poem ends with a moral claim: this outer beauty is the result of "days in goodness spent" -- her physical beauty reflects a virtuous mind, a peaceful heart, and a love that is innocent.

Overall meaning: The poem is a sustained praise of a woman whose beauty combines outer attractiveness with inner moral calm. Byron argues that true beauty is not just visual but ethical -- the product of a life lived well and a mind at peace.`,

  formAndStructure: `Form: Three six-line stanzas (sestets), each rhyming ABABAB. The rhyme scheme is regular and tightly controlled, creating a sense of harmony and balance that mirrors the woman's poised beauty.

Metre: Iambic tetrameter (four iambs per line, eight syllables). The rhythm is steady and gentle -- like a slow, dignified walk. This deliberate, even rhythm matches the calmness Byron is praising.

Stanza progression: The poem moves from outer description (stanza 1: dark and light), to physical features and inner thoughts (stanza 2: hair, mind), to a moral conclusion (stanza 3: virtue produces beauty). Byron deepens the praise as the poem progresses: looks, then mind, then character.

Symmetry: Many lines are internally balanced -- "One shade the more, one ray the less" -- mirroring the perfect balance of features Byron is describing. Form and content reinforce each other.

Sound: Soft consonants ("s", "l", "m") dominate, creating a hushed, almost reverent tone. There is no harshness anywhere in the poem.

Tone: Calm, admiring, reverent. Byron resists the temptation to be passionate or sensual; instead, the tone is serene throughout, ending with the quiet exclamation "innocent!"`,

  keyQuotes: [
    {
      quote: 'She walks in beauty, like the night',
      analysis:
        'The opening simile is striking because it links a woman with "the night" rather than the day. Night is dark, mysterious and quiet -- so the comparison suggests a serene, sophisticated beauty. "Walks in beauty" makes beauty something she carries with her, as natural as movement.',
      themes: ['Beauty', 'Nature imagery', 'Idealised love'],
    },
    {
      quote: 'all that\'s best of dark and bright',
      analysis:
        'Byron praises her by uniting opposites. She is neither too bright nor too dark; she combines the best of both. This argues that beauty is about harmony and balance, not extremes -- a fundamentally Romantic idea.',
      themes: ['Balance', 'Harmony', 'Beauty'],
    },
    {
      quote: 'One shade the more, one ray the less, / Had half impaired the nameless grace',
      analysis:
        'A perfectly balanced couplet. The slightest change -- "one shade more", "one ray less" -- would damage her beauty, suggesting it is mathematically perfect. "Nameless grace" admits that her beauty has a mysterious, indefinable quality beyond simple description.',
      themes: ['Perfection', 'Beauty', 'Mystery'],
    },
    {
      quote: 'thoughts serenely sweet express / How pure, how dear their dwelling place',
      analysis:
        'The poem turns inward. Her face is described as the "dwelling place" of pure thoughts, which is almost religious diction -- like describing a temple or shrine. Her outer beauty is now read as evidence of an inner spiritual purity.',
      themes: ['Inner beauty', 'Spirituality', 'Virtue'],
    },
    {
      quote: 'tell of days in goodness spent',
      analysis:
        'A direct moral claim: her face shows that she has lived a good life. Byron is arguing that virtue produces beauty -- a goodness inside reveals itself outside. This moves the poem beyond physical description to ethical praise.',
      themes: ['Virtue', 'Inner beauty', 'Moral life'],
    },
    {
      quote: 'A heart whose love is innocent!',
      analysis:
        'The poem\'s only exclamation mark, on its final word. After 17 lines of restrained admiration, the speaker bursts out with conviction. Crucially, the love is "innocent" -- not sexual, not possessive. Coming from the famously scandalous Byron, this insistence on purity is remarkable.',
      themes: ['Innocence', 'Spiritual love', 'Idealisation'],
    },
  ],

  languageDevices: [
    {
      device: 'Simile',
      example: 'She walks in beauty, like the night',
      effect:
        'The opening simile aligns the woman with the calm, dark beauty of a starry night. Unusually, women are normally compared to sunlight or day -- the night comparison gives her a mysterious, sophisticated quality.',
      lineRef: 0,
    },
    {
      device: 'Juxtaposition',
      example: 'all that\'s best of dark and bright',
      effect:
        'Byron pairs opposites to suggest harmony. Her beauty is not extreme; it lies in the perfect balance of light and shadow, an ideal mid-point between extremes.',
      lineRef: 2,
    },
    {
      device: 'Religious diction',
      example: 'How pure, how dear their dwelling place',
      effect:
        'Byron uses sacred language ("pure", "dwelling place") to describe her mind. This elevates her beyond ordinary praise -- her face becomes almost a holy site.',
      lineRef: 11,
    },
    {
      device: 'Alliteration',
      example: 'cloudless climes and starry skies',
      effect:
        'Soft "c" and "s" sounds create a hushed, almost reverent atmosphere. The sound of the line is gentle and breathy, matching the gentleness of the beauty being described.',
      lineRef: 1,
    },
    {
      device: 'Personification',
      example: 'thoughts serenely sweet express',
      effect:
        'Her thoughts "express" themselves through her face, as if they have a life of their own. This makes her inner mind visible to the reader through her outer features.',
      lineRef: 10,
    },
    {
      device: 'Tonal contrast',
      example: 'mellowed to that tender light / Which heaven to gaudy day denies',
      effect:
        'The contrast between "tender light" and "gaudy day" devalues showy, ostentatious beauty in favour of soft, refined beauty. "Gaudy" is the only harsh word in the poem -- and it is used to dismiss its opposite.',
      lineRef: 5,
    },
    {
      device: 'Caesura and balance',
      example: 'One shade the more, one ray the less',
      effect:
        'The pause in the middle of the line creates two perfectly balanced halves. The grammatical balance mirrors the visual balance Byron is describing -- form embodies content.',
      lineRef: 6,
    },
  ],
}

const comparisons = [
  {
    title: 'Neutral Tones',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/ocr/love-and-relationships/neutral-tones',
    reason:
      'A striking contrast: Byron celebrates a beautiful, virtuous woman; Hardy mourns a colourless, dead love. Both use light/dark imagery, but to opposite emotional ends.',
    themes: ['Light and dark', 'Imagery', 'Contrasting moods'],
  },
]

export default function SheWalksInBeautyPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Love and Relationships
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              She Walks in Beauty
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Lord Byron &middot; Love and Relationships cluster
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              OCR
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="She Walks in Beauty"
        textType="poem"
        examBoard="OCR"
        cluster="Love and Relationships"
        variant="compact"
      />
      <InteractivePoemViewer poem={sheWalksInBeauty} />

      <section className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The text of &ldquo;She Walks in Beauty&rdquo; is in the public domain. All annotations
          and critical commentary on this page are original to english-hub and are provided for
          private study and educational purposes under the fair dealing provisions of the
          Copyright, Designs and Patents Act 1988.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The OCR exam asks you to compare two poems from your cluster. These are strong pairings
          for She Walks in Beauty.
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
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {c.reason}
              </p>
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
    </div>
  )
}
