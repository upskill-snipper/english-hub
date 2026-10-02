import { describe, it, expect } from 'vitest'
import type { TextData } from '@/components/study/InteractiveTextViewer'
import {
  isProse,
  setForTheViewer,
  setSectionForTheViewer,
  verseLinesAsBlocks,
  VERSE_CLASS,
  VERSE_LINE_CLASS,
} from '@/components/study/set-play-for-the-viewer'
import { parseSectionHtml } from '@/components/study/section-html'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

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
/** A scene, as against a prologue, a chorus or an epilogue. */
const isScene = (id: string) => /^act[ivxlc]+-scene[ivxlc]+$/.test(id)
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
    const sections = [...PLAYS.values()].flatMap((p) => p.sections)
    expect(sections.filter((s) => isScene(s.id))).toHaveLength(269)
    // And, since 26 September 2026, the nine parts that are not scenes (see
    // "the parts of a play that are not scenes" below): 278 sections in all,
    // nine more than the 269 pinned here until then.
    expect(sections).toHaveLength(278)
  })
})

describe('setting a play out changes no word of it', () => {
  it.each([...PLAYS.keys()])('%s', (slug) => {
    for (const s of play(slug).sections) {
      // The place, then the scene's text with only the italic underscores
      // gone. Line breaks and spaces aside, character for character. A
      // prologue, a chorus or an epilogue has no place.
      const printed = squash(asText(setForTheViewer(s.content, s.setting)))
      const held = squash(`${s.setting ?? ''} ${asText(s.content).replace(/_/g, '')}`)
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
        // Every scene has its place. A prologue, a chorus or an epilogue has
        // none in the edition, and none is invented for it.
        if (isScene(s.id)) {
          expect(s.setting, `${slug} ${s.id} has no place`).toBeTruthy()
          expect(html.startsWith('<p class="mb-4 italic text-muted-foreground">'), s.id).toBe(true)
          expect(asText(html).startsWith(s.setting!), s.id).toBe(true)
        } else expect(s.setting, `${slug} ${s.id} has a place`).toBeUndefined()
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
    //
    // That evening, three more, each read: the Prologues of Romeo and Juliet
    // and Henry V, held for the first time, are verse (425 to 426, 209 to
    // 210), and Hamlet's dumb show, ten lines of description the generator
    // had printed as a speech, is a stage direction now (155 to 154).
    expect(counted).toEqual({
      'a-midsummer-nights-dream': [73, 225],
      'antony-and-cleopatra': [44, 573],
      hamlet: [154, 361],
      'henry-v': [186, 210],
      'julius-caesar': [21, 379],
      'king-lear': [134, 441],
      macbeth: [22, 364],
      'much-ado-about-nothing': [308, 130],
      othello: [83, 460],
      'romeo-and-juliet': [60, 426],
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
    // Capitals with accents too. This knew A to Z only, as the generator did,
    // and so passed while Henry V printed "GRANDPRÉ." as the first line of his
    // speech (found 26 September 2026).
    const NAME = "[A-ZÀ-ÖØ-Þ][A-ZÀ-ÖØ-Þ’' .-]+"
    const heading = new RegExp(`^${NAME}(?:(?:,| and|, and) ${NAME})*\\.?(?: |$)`)
    const unnamed: string[] = []
    for (const [slug, p] of PLAYS)
      for (const s of p.sections)
        for (const m of s.content.matchAll(/<p>([^<\n]*)\n/g))
          if (heading.test(m[1])) unnamed.push(`${slug} ${s.id}: ${m[1].slice(0, 40)}`)
    expect(unnamed).toEqual([])
    expect(scene('henry-v', 'activ-sceneii').content).toContain(
      '<p><strong>GRANDPRÉ</strong>\nWhy do you stay so long',
    )
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
      '<p class="mb-4 verse"> Upon the King! Let us our lives, our souls,<br>\nOur debts, our careful wives,<br>\n',
    )
    expect(set('the-merchant-of-venice', 'actii-scenevii')).toContain(
      '<p class="mb-4 verse">     <em>All that glisters is not gold,<br>\n     Often have you heard that told.<br>\n',
    )
    expect(set('the-tempest', 'actv-scenei')).toContain(
      '<p class="mb-4 verse"> How fares my gracious sir?<br>\nThere are yet missing of your company<br>\n',
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

/**
 * The parts of a play that are not scenes: a prologue, a chorus before an
 * act, an epilogue. Each is a section of its own, where the edition prints it.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). The
 * generator read scenes only. Romeo and Juliet's Prologue, one of the most
 * examined passages in GCSE English Literature, and Henry V's "O for a Muse of
 * fire" are printed above Act I, and were not in the readers at all. A chorus
 * sits between an act's heading and its first scene, and was run on to the end
 * of the scene before it; each epilogue was run on to the last scene under
 * "EPILOGUE" in ordinary type. See parseParts in
 * scripts/fetch-public-domain-play.mjs. The scenes are cut as they were, so
 * their ids, and the progress and notes keyed on them, are unchanged.
 */
describe('the parts of a play that are not scenes', () => {
  /** A play's scene ids in order, from its scenes per act. */
  const scenesOf = (perAct: number[]) => {
    const roman = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii']
    return perAct.flatMap((n, a) =>
      Array.from({ length: n }, (_, s) => `act${roman[a]}-scene${roman[s]}`),
    )
  }
  const ids = (slug: string) => play(slug).sections.map((s) => s.id)
  const without = (list: string[], extra: string[]) => list.filter((id) => !extra.includes(id))

  it('are sections in the order the edition prints them', () => {
    expect(ids('romeo-and-juliet').slice(0, 7)).toEqual([
      'prologue',
      ...scenesOf([5]),
      'actii-chorus',
    ])
    const henry = ids('henry-v')
    expect(henry[0]).toBe('prologue')
    for (const act of ['ii', 'iii', 'iv', 'v'])
      expect(henry.indexOf(`act${act}-chorus`) + 1).toBe(henry.indexOf(`act${act}-scenei`))
    expect(henry.at(-1)).toBe('epilogue')
    expect(ids('the-tempest').at(-1)).toBe('epilogue')
    const titles = play('henry-v')
      .sections.filter((s) => !isScene(s.id))
      .map((s) => s.title)
    expect(titles).toEqual([
      'Prologue',
      'Act II, Chorus',
      'Act III, Chorus',
      'Act IV, Chorus',
      'Act V, Chorus',
      'Epilogue',
    ])
    // Nowhere else: ten plays have none.
    const having = [...PLAYS].filter(([, p]) => p.sections.some((s) => !isScene(s.id)))
    expect(having.map(([slug]) => slug).sort()).toEqual([
      'henry-v',
      'romeo-and-juliet',
      'the-tempest',
    ])
  })

  it('and leave every scene id as it was', () => {
    expect(without(ids('romeo-and-juliet'), ['prologue', 'actii-chorus'])).toEqual(
      scenesOf([5, 6, 5, 5, 3]),
    )
    expect(
      without(ids('henry-v'), [
        'prologue',
        'actii-chorus',
        'actiii-chorus',
        'activ-chorus',
        'actv-chorus',
        'epilogue',
      ]),
    ).toEqual(scenesOf([2, 4, 7, 8, 2]))
    expect(without(ids('the-tempest'), ['epilogue'])).toEqual(scenesOf([2, 2, 3, 1, 1]))
  })

  it('hold the Prologue of Romeo and Juliet, word for word, as a sonnet', () => {
    // The fourteen lines as Project Gutenberg #1513 prints them, copied from
    // that file by script, not typed.
    const LINES: string[] = [
      'Two households, both alike in dignity,',
      'In fair Verona, where we lay our scene,',
      'From ancient grudge break to new mutiny,',
      'Where civil blood makes civil hands unclean.',
      'From forth the fatal loins of these two foes',
      'A pair of star-cross’d lovers take their life;',
      'Whose misadventur’d piteous overthrows',
      'Doth with their death bury their parents’ strife.',
      'The fearful passage of their death-mark’d love,',
      'And the continuance of their parents’ rage,',
      'Which, but their children’s end, nought could remove,',
      'Is now the two hours’ traffic of our stage;',
      'The which, if you with patient ears attend,',
      'What here shall miss, our toil shall strive to mend.',
    ]
    const prologue = scene('romeo-and-juliet', 'prologue')
    expect(prologue.title).toBe('Prologue')
    expect(prologue.content).toBe(
      '<p class="italic text-muted-foreground">Enter Chorus.</p>\n\n' +
        `<p><strong>CHORUS</strong>\n${LINES.join('\n')}</p>\n\n` +
        '<p class="italic text-muted-foreground">[_Exit._]</p>',
    )
    // Set out as verse, one line to a line.
    expect(set('romeo-and-juliet', 'prologue')).toContain(
      `<p class="mb-4 ${VERSE_CLASS}"><strong>CHORUS</strong><br>\n${LINES.join('<br>\n')}</p>`,
    )
  })

  it('and Henry V’s, and each chorus, no longer run on to the scene before', () => {
    expect(asText(scene('henry-v', 'prologue').content)).toMatch(
      /^Enter Chorus\.\n\nCHORUS\nO for a Muse of fire, that would ascend\n/,
    )
    expect(asText(scene('henry-v', 'prologue').content)).toContain(
      'Gently to hear, kindly to judge, our play.',
    )
    for (const [slug, before, opening] of [
      ['romeo-and-juliet', 'acti-scenev', 'Now old desire doth in his deathbed lie'],
      ['henry-v', 'acti-sceneii', 'Now all the youth of England are on fire'],
      ['henry-v', 'actii-sceneiv', 'Thus with imagin’d wing our swift scene flies'],
      ['henry-v', 'actiii-scenevii', 'Now entertain conjecture of a time'],
      ['henry-v', 'activ-sceneviii', 'Vouchsafe to those that have not read the story'],
      ['henry-v', 'actv-sceneii', 'Thus far, with rough and all-unable pen'],
      ['the-tempest', 'actv-scenei', 'Now my charms are all o’erthrown'],
    ]) {
      const next = play(slug).sections[ids(slug).indexOf(before) + 1]
      expect(next.content, `${slug} after ${before}`).toContain(opening)
      expect(scene(slug, before).content, `${slug} ${before}`).not.toContain(opening)
      expect(scene(slug, before).content, `${slug} ${before}`).not.toMatch(/EPILOGUE|ACT [IV]/)
    }
  })
})

/**
 * Stage directions printed at the margin that were printed as speech.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers). Each of
 * these was printed in ordinary type, as though somebody said it. A rule
 * cannot tell most of them from a speech resumed after a direction, so the
 * generator names them (DIRECTIONS_AS_PRINTED), having read all 400 blocks
 * with no speaker and no indent; the dumb show's description, set in italics,
 * is caught by the entrance rule.
 */
describe('a stage direction at the margin is printed as a direction', () => {
  it.each([
    ['hamlet', 'actiii-sceneii', 'Trumpets sound. The dumb show enters.'],
    ['hamlet', 'actiii-sceneii', '_Enter a King and a Queen very lovingly;'],
    ['hamlet', 'actiii-sceneiii', 'The King rises and advances.'],
    ['julius-caesar', 'actiii-scenei', 'Caesar enters the Capitol, the rest following.'],
    ['othello', 'acti-scenei', 'Brabantio appears above at a window.'],
    ['twelfth-night', 'activ-sceneii', 'Malvolio within.'],
    [
      'the-tempest',
      'actv-scenei',
      'Here Prospero discovers Ferdinand and Miranda playing at chess.',
    ],
    ['the-tempest', 'acti-sceneii', 'ARIEL’S SONG.'],
    ['a-midsummer-nights-dream', 'actii-sceneii', 'Fairies sing.'],
    ['much-ado-about-nothing', 'actv-sceneiii', 'Epitaph.'],
    ['much-ado-about-nothing', 'actv-sceneiii', 'Song.'],
  ])('%s %s: "%s"', (slug, id, opening) => {
    expect(scene(slug, id).content).toContain(`<p class="italic text-muted-foreground">${opening}`)
    expect(scene(slug, id).content).not.toContain(`<p>${opening}`)
  })
})

/**
 * Verse carries its hanging indent; prose does not.
 *
 * WHAT BROKE (found 26 September 2026, in a review of the readers on a 390px
 * phone). A long verse line wrapped to the margin, so its end read as the next
 * line of verse, in Hamlet's Act 3, Scene 1 as in Sonnet 116. The indent itself
 * is CSS (src/app/globals.css) and jsdom has no layout, so this holds the
 * markup it hangs on; the words are held by "setting a play out changes no
 * word of it" above.
 *
 * The first fix was one rule, `text-indent: 2em hanging each-line`, looked at
 * in a Chrome new enough to know it. Chromium 145 does not, nor does any
 * Samsung Internet, and there it indented none of the 2,219 wrapped verse
 * lines on the Hamlet reader (measured 27 September 2026). Each line is now a
 * block of its own (VERSE_LINE_CLASS), measured at 390px in Chromium 145 and
 * 148 on Hamlet, King Lear, Macbeth, Romeo and Juliet, Sonnet 116 and My Last
 * Duchess: every wrapped line indented, no line starting indented, no prose
 * indented.
 */
describe('verse is marked for its hanging indent, and prose is not', () => {
  it('every speech in verse, and no speech in prose', () => {
    expect(set('hamlet', 'actiii-scenei')).toContain(
      `<p class="mb-4 ${VERSE_CLASS}"><strong>HAMLET</strong><br>\nTo be, or not to be, that is the question:<br>`,
    )
    // The Porter's prose flows, as it did.
    expect(set('macbeth', 'actii-sceneiii')).toMatch(
      /<p class="mb-4"><strong>PORTER<\/strong><br>\nHere’s a knocking/,
    )
    // Across the thirteen plays: every speech judged verse has the class, and
    // no speech judged prose.
    let verse = 0
    for (const [slug, p] of PLAYS)
      for (const s of p.sections)
        for (const m of setForTheViewer(s.content, s.setting).matchAll(
          /<p class="([^"]*)">([\s\S]*?)<\/p>/g,
        )) {
          if (m[1].includes('italic')) continue
          const lines = m[2]
            .replace(/^<strong>[^<]*<\/strong><br>\n/, '')
            .replace(/<\/?span[^>]*>/g, '')
            .split('\n')
            .map((l) => l.replace(/<br>$/, ''))
          const marked = m[1].split(' ').includes(VERSE_CLASS)
          if (marked) verse++
          expect(marked, `${slug} ${s.id}: ${lines[0].slice(0, 30)}`).toBe(!isProse(lines))
        }
    expect(verse).toBeGreaterThan(10_000)
  })

  it('and the viewer sets each of its lines as a block, adding no text', () => {
    // What the class is for (see VERSE_LINE_CLASS). Every held text, as the
    // reader sets it out, and then as the viewer lays out its verse.
    const LINE = new RegExp(`<span class="${VERSE_LINE_CLASS}">([\\s\\S]*?)</span>`, 'g')
    type Node = ReturnType<typeof parseSectionHtml>['nodes'][number]
    const classes = (n: Node) => (n.kind === 'element' ? (n.className ?? '').split(' ') : [])
    /** Line blocks under `nodes` with no verse block above them. */
    const stray = (nodes: Node[], inVerse: boolean): number =>
      nodes.reduce((sum, n) => {
        if (n.kind !== 'element') return sum
        const here = classes(n).includes(VERSE_LINE_CLASS) && !inVerse ? 1 : 0
        return sum + here + stray(n.children, inVerse || classes(n).includes(VERSE_CLASS))
      }, 0)
    let lines = 0
    let texts = 0
    for (const [path, mod] of Object.entries(MODULES)) {
      const data = Object.values(mod).find(
        (v): v is Held => !!v && typeof v === 'object' && 'sections' in (v as object),
      )!
      const slug = path.replace(/^.*\/(.+)\.ts$/, '$1')
      texts++
      for (const s of data.sections) {
        const shown = setSectionForTheViewer(data.type, s.content, s.setting)
        const laid = verseLinesAsBlocks(shown)
        expect(asText(laid), `${slug} ${s.id}`).toBe(asText(shown))
        expect(verseLinesAsBlocks(laid), `${slug} ${s.id}: twice`).toBe(laid)
        for (const m of laid.matchAll(LINE)) {
          lines++
          // A line ends at a break or at the end of its block, and no tag
          // crosses its edge.
          expect(m[1], `${slug} ${s.id}`).not.toMatch(/<br>[\s\S]/)
          expect((m[1].match(/<em>/g) ?? []).length, `${slug} ${s.id}: ${m[1]}`).toBe(
            (m[1].match(/<\/em>/g) ?? []).length,
          )
        }
        // Prose is left alone: a line block only inside a verse block.
        expect(stray(parseSectionHtml(laid).nodes, false), `${slug} ${s.id}`).toBe(0)
      }
    }
    // 31 since 2 October 2026, when The Great Gatsby joined.
    expect(texts).toBe(31)
    // Every line of verse in the thirteen plays and the poems, and each
    // speaker’s name above a speech in verse: 41,068 on 27 September 2026, of
    // them 9,793 names.
    expect(lines).toBeGreaterThan(40_000)
    // One line of Hamlet's Act 3, Scene 1, as the viewer receives it.
    expect(verseLinesAsBlocks(set('hamlet', 'actiii-scenei'))).toContain(
      `<span class="${VERSE_LINE_CLASS}">To be, or not to be, that is the question:<br></span>\n` +
        `<span class="${VERSE_LINE_CLASS}">Whether ’tis nobler in the mind to suffer<br></span>`,
    )
    // A song set in italics from its first line to its last is closed and
    // opened again at each line's edge.
    expect(verseLinesAsBlocks(set('the-tempest', 'acti-sceneii'))).toContain(
      `<span class="${VERSE_LINE_CLASS}"><em>Come unto these yellow sands,</em><br></span>\n` +
        `<span class="${VERSE_LINE_CLASS}"><em>    And then take hands:</em><br></span>`,
    )
  })

  it('and the stylesheet indents each line, in every browser', () => {
    // Pinned by reading the rule, since jsdom lays nothing out: a line is a
    // block, its first line at the margin and the rest indented under it, with
    // padding and a negative indent. Not `text-indent: 2em hanging each-line`,
    // the first fix, which Samsung Internet drops and Chrome did until 146.
    const css = readFileSync(join(process.cwd(), 'src/app/globals.css'), 'utf8')
    expect(css).toMatch(
      new RegExp(
        `\\.prose-reader \\.${VERSE_LINE_CLASS} \\{\\s*display: block;\\s*padding-inline-start: 2em;\\s*text-indent: -2em;\\s*\\}`,
      ),
    )
    expect(css).toMatch(new RegExp(`\\.prose-reader span\\.${VERSE_CLASS} \\{\\s*display: block;`))
    expect(css.replace(/\/\*[\s\S]*?\*\//g, '')).not.toMatch(/each-line|hanging/)
  })

  it('and the verse a prose speech sings or quotes, in a block of its own', () => {
    const runs: string[] = []
    for (const [slug, p] of PLAYS)
      for (const s of p.sections)
        for (const m of setForTheViewer(s.content, s.setting).matchAll(
          new RegExp(`<span class="${VERSE_CLASS}">([\\s\\S]*?)</span>`, 'g'),
        )) {
          runs.push(`${slug} ${s.id}`)
          // Never cutting an italic in two.
          expect((m[1].match(/<em>/g) ?? []).length).toBe((m[1].match(/<\/em>/g) ?? []).length)
        }
    // Measured 26 September 2026: every one a song or quoted verse.
    expect(runs).toHaveLength(12)
    expect(set('hamlet', 'actii-sceneii')).toContain(
      `<span class="${VERSE_CLASS}">   <em>The rugged Pyrrhus, like th’ Hyrcanian beast,—</em><br>`,
    )
    expect(set('king-lear', 'activ-scenevi')).toContain(
      `<span class="${VERSE_CLASS}">Ay, every inch a king.<br>\nWhen I do stare, see how the subject quakes.<br>`,
    )
  })
})
