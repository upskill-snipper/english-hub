import { describe, it, expect } from 'vitest'
import type { TextData } from '@/components/study/InteractiveTextViewer'
import { isProse, setForTheViewer } from '@/components/study/set-play-for-the-viewer'
import { parseSectionHtml } from '@/components/study/section-html'

/**
 * Every held play is printed as a play: verse in lines, prose left to flow,
 * each speaker named in bold above the speech, the edition's italics as
 * italics and each scene's place at its head, with no word of the edition
 * changed. Whether or not the scene carries notes.
 *
 * WHAT BROKE (found 26 September 2026, while moving Macbeth to its held
 * edition; every test passed). The shared viewer printed a scene without notes
 * as HTML, where the edition's line breaks are white space, so verse ran on as
 * prose: on first load Hamlet showed 8 of its 20 scenes so ("Before you visit
 * him, to make inquiry Of his behaviour."), Romeo and Juliet 5 of 24. It
 * printed Gutenberg's italic underscores as written ("[_Exeunt._]") and never
 * showed a scene's place. A scene WITH notes was printed as plain text, which
 * kept the line breaks and lost everything else: no bold names, no italics,
 * and prose broken wherever the printer ran out of room. And the generator
 * did not know a joint heading ("MARCELLUS and BARNARDO."), nor four other
 * ways the editions print one, so those names were printed as speech.
 *
 * Macbeth was mended first, in its own reader. The repair now lives in
 * src/components/study/set-play-for-the-viewer.ts and applies to all thirteen.
 * The viewer's side, a scene with notes rendered with its markup, is checked
 * where the viewer is already rendered in a DOM:
 * every-overlay-highlights-something.test.tsx, "a play scene with notes".
 */

type Held = TextData & { sections: (TextData['sections'][number] & { setting?: string })[] }

const MODULES = import.meta.glob<Record<string, unknown>>('../data/full-texts/*.ts', {
  eager: true,
})
const PLAYS = new Map<string, Held>()
for (const [path, mod] of Object.entries(MODULES)) {
  const data = Object.values(mod).find(
    (v): v is Held => !!v && typeof v === 'object' && 'sections' in (v as object),
  )
  if (data?.type === 'play') PLAYS.set(path.replace(/^.*\/(.+)\.ts$/, '$1'), data)
}
const play = (slug: string) => PLAYS.get(slug)!
const scene = (slug: string, id: string) => play(slug).sections.find((s) => s.id === id)!
const set = (slug: string, id: string) => {
  const s = scene(slug, id)
  return setForTheViewer(s.content, s.setting)
}

/** What the viewer finds notes in: tags deleted, entities decoded. */
const asText = (html: string) => parseSectionHtml(html).plain
const squash = (s: string) => s.replace(/\s+/g, ' ').trim()

describe('the plays are all here', () => {
  it('thirteen of them, with every scene', () => {
    // A glob that matched nothing would pass every check below.
    expect(PLAYS.size).toBe(13)
    expect([...PLAYS.values()].reduce((n, p) => n + p.sections.length, 0)).toBe(269)
  })
})

describe('setting a play out changes no word of it', () => {
  it.each([...PLAYS.keys()])('%s', (slug) => {
    for (const s of play(slug).sections) {
      // The place, then the scene's text with only the italic underscores
      // gone. Line breaks and spaces aside, character for character.
      const printed = squash(asText(setForTheViewer(s.content, s.setting)))
      const held = squash(`${s.setting} ${asText(s.content).replace(/_/g, '')}`)
      expect(printed, `${slug} ${s.id}`).toBe(held)
    }
  })
})

describe('and sets it out as a play', () => {
  it.each([...PLAYS.keys()])(
    '%s: no underscore, every place, every name on its own line',
    (slug) => {
      for (const s of play(slug).sections) {
        const html = setForTheViewer(s.content, s.setting)
        expect(asText(html), `${slug} ${s.id}`).not.toContain('_')
        expect(s.setting, `${slug} ${s.id} has no place`).toBeTruthy()
        expect(html.startsWith('<p class="mb-4 italic text-muted-foreground">'), s.id).toBe(true)
        expect(asText(html).startsWith(s.setting!), s.id).toBe(true)
        const names = html.match(/<\/strong>/g)?.length ?? 0
        expect(html.match(/<\/strong><br>\n/g)?.length ?? 0, `${slug} ${s.id}`).toBe(names)
      }
    },
  )

  it('breaks each line of verse, in scenes with notes and without', () => {
    expect(set('hamlet', 'actii-scenei')).toContain(
      'Before you visit him, to make inquiry<br>\nOf his behaviour.',
    )
    expect(set('romeo-and-juliet', 'actii-sceneii')).toContain(
      'But soft, what light through yonder window breaks?<br>\nIt is the east, and Juliet is the sun!',
    )
    expect(set('the-tempest', 'acti-sceneii')).toContain(
      'It goes on, I see,<br>\nAs my soul prompts it.',
    )
    // A two-line verse speech whose first line is long, which is not enough
    // on its own to be taken for prose.
    expect(set('henry-v', 'activ-sceneviii')).toContain(
      'Give me thy glove, soldier. Look, here is the fellow of it.<br>\n',
    )
  })

  it('lets prose flow, and keeps the lines of a song inside it', () => {
    // Its second line opens with a name, which the lower-case rule alone
    // (Macbeth's reader's first repair) took for verse.
    expect(set('henry-v', 'activ-scenevii')).toContain(
      'I think Alexander the Great was born in Macedon. His father was called\nPhilip of Macedon, as I take it.',
    )
    const peter = /<strong>PETER<\/strong><br>\nO, I cry you mercy[\s\S]*?<\/p>/.exec(
      set('romeo-and-juliet', 'activ-scenev'),
    )![0]
    expect(peter).toContain('I will say for you. It is\n‘music with her silver sound’')
    expect(peter).toContain('sounding.<br>\n      ‘Then music with her silver sound<br>\n')
  })

  it('keeps the lines of the verse a prose speech quotes', () => {
    // Found in a review on 26 September 2026: a prose speech kept only the
    // breaks after lines shorter than 45 characters, so the longer lines of
    // the verse it quotes ran into each other. See `breaksAfter`.
    expect(set('hamlet', 'actii-sceneii')).toContain(
      'Hath now this dread and black complexion smear’d<br>\n   With heraldry more dismal.',
    )
    expect(set('hamlet', 'actv-scenei')).toContain(
      'O, that that earth which kept the world in awe<br>\nShould patch a wall',
    )
    expect(set('king-lear', 'activ-scenevi')).toContain(
      'Let copulation thrive;<br>\nFor Gloucester’s bastard son',
    )
    // A single line that stops early in ordinary prose, where Much Ado's
    // narrower edition leaves one, still flows.
    expect(set('much-ado-about-nothing', 'actii-scenei')).toContain(
      'to the world’s end?\nI will go on the slightest errand',
    )
  })

  it('and lets the printer’s wraps inside a verse speech run on', () => {
    // The same review: a full line before one in lower case is the printer's.
    // Emilia's prose before her verse, and a verse line wrapped because a
    // direction sits in it.
    expect(set('othello', 'activ-sceneiii')).toContain('store the world they\nplayed for.<br>\n')
    expect(set('king-lear', 'acti-scenei')).toContain('may your deeds\napprove,<br>\n')
  })

  it('calls the same speeches prose as when this was measured', () => {
    // Speeches of two lines or more, 26 September 2026: [prose, verse]. A
    // change here is a change to the rule, and the report of it should say
    // which speeches moved and whether they were right to.
    const counted: Record<string, [number, number]> = {}
    for (const [slug, p] of PLAYS) {
      counted[slug] = [0, 0]
      for (const s of p.sections)
        for (const m of s.content
          .replace(/_([^_<>]+)_/g, '<em>$1</em>')
          .matchAll(/<p>([\s\S]*?)<\/p>/g)) {
          const name = /^<strong>[^<]*<\/strong>\n/.exec(m[1])?.[0] ?? ''
          const lines = m[1].slice(name.length).split('\n')
          if (lines.length > 1) counted[slug][isProse(lines) ? 0 : 1]++
        }
    }
    //
    // Later the same day 21 songs and speeches that had been printed as stage
    // directions became speeches (see the generator's spokenThoughIndented):
    // 20 verse and one prose, the Boatswain's "A plague upon this howling!".
    // They are the whole of the change from the first count.
    expect(counted).toEqual({
      'a-midsummer-nights-dream': [73, 225],
      'antony-and-cleopatra': [44, 573],
      hamlet: [155, 361],
      'henry-v': [186, 209],
      'julius-caesar': [21, 379],
      'king-lear': [134, 441],
      macbeth: [22, 364],
      'much-ado-about-nothing': [308, 130],
      othello: [83, 460],
      'romeo-and-juliet': [60, 425],
      'the-merchant-of-venice': [83, 325],
      'the-tempest': [78, 319],
      'twelfth-night': [252, 167],
    })
  })
})

describe('the generator names every speaker', () => {
  it('in a joint heading', () => {
    expect(scene('macbeth', 'actii-sceneiii').content).toContain('<strong>MACBETH, LENNOX</strong>')
    expect(scene('hamlet', 'acti-sceneii').content).toContain(
      '<strong>MARCELLUS and BARNARDO</strong>',
    )
    expect(scene('antony-and-cleopatra', 'actii-scenevi').content).toContain(
      '<strong>CAESAR, ANTONY, and LEPIDUS</strong>',
    )
  })

  it('and in the other ways the editions print one', () => {
    expect(scene('hamlet', 'acti-scenei').content).toContain(
      '<strong>BARNARDO</strong>\nIt would be',
    )
    expect(scene('hamlet', 'actiii-sceneii').content).toContain('<strong>All</strong>\nLights')
    expect(scene('much-ado-about-nothing', 'actii-sceneiii').content).toContain(
      '<strong>DON PEDRO</strong>\nYea, marry;',
    )
    expect(scene('romeo-and-juliet', 'actv-sceneiii').content).toContain(
      '<strong>THIRD WATCH</strong>\nHere is a Friar',
    )
    expect(scene('antony-and-cleopatra', 'activ-scenevii').content).toContain(
      '<p class="italic text-muted-foreground">_Sounds retreat far off._</p>\n\n<p><strong>ANTONY</strong>',
    )
  })

  it('so no speech opens with a name in ordinary type', () => {
    const NAME = "[A-Z][A-Z’' .-]+"
    const heading = new RegExp(`^${NAME}(?:(?:,| and|, and) ${NAME})*\\.?(?: |$)`)
    const unnamed: string[] = []
    for (const [slug, p] of PLAYS)
      for (const s of p.sections)
        for (const m of s.content.matchAll(/<p>([^<\n]*)\n/g))
          if (heading.test(m[1])) unnamed.push(`${slug} ${s.id}: ${m[1].slice(0, 40)}`)
    expect(unnamed).toEqual([])
  })

  it('and opens every scene with a direction or a speech, as the edition does', () => {
    // Twelve of the plays opened most scenes with their entrance printed as a
    // speech: Gutenberg's line endings hid the indent (fixed for Macbeth
    // first), and four editions print directions at the margin.
    const opening: string[] = []
    for (const [slug, p] of PLAYS)
      for (const s of p.sections)
        if (!/^(<p class="italic|<p><strong>)/.test(s.content)) opening.push(`${slug} ${s.id}`)
    expect(opening).toEqual([])
    expect(scene('hamlet', 'acti-scenei').content).toMatch(
      /^<p class="italic text-muted-foreground">Enter Francisco and Barnardo, two sentinels\.<\/p>/,
    )
  })

  it('and prints a song or a speech the edition indents as speech, not a direction', () => {
    // Found in a review on 26 September 2026: the editions indent songs,
    // scrolls and the odd resumed speech as they indent directions, and 21 of
    // them were printed in italic with their lines run into one. See
    // spokenThoughIndented in scripts/fetch-public-domain-play.mjs.
    const henry = set('henry-v', 'activ-scenei')
    expect(henry).toContain(
      '<p class="mb-4"> Upon the King! Let us our lives, our souls,<br>\nOur debts, our careful wives,<br>\n',
    )
    expect(set('the-merchant-of-venice', 'actii-scenevii')).toContain(
      '<p class="mb-4">     <em>All that glisters is not gold,<br>\n     Often have you heard that told.<br>\n',
    )
    expect(set('the-tempest', 'actv-scenei')).toContain(
      '<p class="mb-4"> How fares my gracious sir?<br>\nThere are yet missing of your company<br>\n',
    )
    for (const [slug, id, opening] of [
      ['hamlet', 'activ-scenev', 'Then up he rose'],
      ['much-ado-about-nothing', 'actv-sceneiii', 'Pardon, goddess of the night'],
      ['a-midsummer-nights-dream', 'acti-sceneii', 'The raging rocks'],
      ['othello', 'actii-sceneiii', '_King Stephen was a worthy peer'],
    ])
      expect(scene(slug, id).content, `${slug} ${id}`).toMatch(
        new RegExp(`<p>\\s*${opening}[^\\n]*\\n`),
      )
    // A description of two lines is still a direction.
    expect(scene('king-lear', 'actv-sceneiii').content).toContain(
      '<p class="italic text-muted-foreground">The bodies of Goneril and Regan are brought in.</p>',
    )
  })

  it('and keeps a place too long for one line whole', () => {
    expect(scene('the-tempest', 'acti-scenei').setting).toBe(
      'On a ship at sea; a tempestuous noise of thunder and lightning heard.',
    )
  })
})
