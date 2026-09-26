import { describe, it, expect } from 'vitest'

import { animalFarmText } from '@/data/full-texts/animal-farm'
import { doNotGoGentleIntoThatGoodNightText } from '@/data/full-texts/do-not-go-gentle-into-that-good-night'
import { hamletText } from '@/data/full-texts/hamlet'
import { macbethText } from '@/data/full-texts/macbeth'
import { passage, playPassage, poemLines } from '@/lib/study-guides/passage'

/**
 * The helpers that let a guide print a passage without typing it. What they
 * must never do is return something other than the edition: a passage that
 * drifted, or a poem with a line merged or dropped.
 */
describe('poemLines', () => {
  it('returns the villanelle as 19 lines in six stanzas', () => {
    const lines = poemLines(doNotGoGentleIntoThatGoodNightText)
    expect(lines.filter(Boolean)).toHaveLength(19)
    expect(lines.filter((l) => l === '')).toHaveLength(5)
    // The stanza breaks fall after lines 3, 6, 9, 12 and 15.
    expect(lines.map((l, i) => (l === '' ? i : -1)).filter((i) => i >= 0)).toEqual([
      3, 7, 11, 15, 19,
    ])
  })
})

describe('passage', () => {
  it('cuts whole paragraphs between two anchors', () => {
    const p = passage(
      animalFarmText,
      'section-1',
      'Mr. Jones, of the Manor Farm',
      'Mr. Jones, of the Manor Farm',
    )
    expect(p.startsWith('Mr. Jones, of the Manor Farm')).toBe(true)
    expect(p).not.toContain('\n\n')
    expect(p).not.toMatch(/<|&amp;/)
  })

  it('throws rather than drift when an anchor is missing or out of order', () => {
    expect(() =>
      passage(animalFarmText, 'section-1', 'no such phrase anywhere', 'Manor Farm'),
    ).toThrow()
    expect(() => passage(animalFarmText, 'section-99', 'Manor Farm', 'Manor Farm')).toThrow()
    // "Beasts of England" is first sung later in Chapter 1 than the opening line.
    expect(() =>
      passage(animalFarmText, 'section-1', 'Beasts of England', 'Mr. Jones, of the Manor Farm'),
    ).toThrow()
  })
})

describe('playPassage', () => {
  // The Macbeth guide prints all five of its extracts through this, so what it
  // must never do is set a stage direction as speech, lose a speaker, or mark
  // the printer's prose line breaks as verse.
  it('names each speaker and brackets each stage direction', () => {
    const p = playPassage(
      macbethText,
      'actv-sceneiii',
      'Bring me no more reports',
      'Which the poor heart would fain deny',
    )
    expect(p.startsWith('MACBETH: Bring me no more reports; let them fly all: / Till Birnam')).toBe(
      true,
    )
    expect(p).toContain(' / [Enter a Servant.] / The devil damn thee black')
    expect(p).toContain(' / SERVANT: Soldiers, sir. / MACBETH: Go prick thy face')
    expect(p).toContain(' / [Exit Servant.] / Seyton!')
    expect(p).not.toMatch(/_|<|\n/)
  })

  it('prints a soliloquy without a name, and keeps the lines after a direction', () => {
    const p = playPassage(
      macbethText,
      'actii-scenei',
      'Is this a dagger which I see before me',
      'That summons thee to heaven or to hell',
    )
    expect(
      p.startsWith('Is this a dagger which I see before me, / The handle toward my hand?'),
    ).toBe(true)
    expect(p).toContain(' / [A bell rings.] / I go, and it is done.')
    expect(p.endsWith('That summons thee to heaven or to hell.')).toBe(true)
  })

  it('joins prose as prose', () => {
    const p = playPassage(
      macbethText,
      'actv-scenei',
      'Yet here’s a spot',
      'What’s done cannot be undone',
      {
        prose: true,
      },
    )
    // The edition breaks this sentence after "will"; as verse it would read "will / not".
    expect(p).toContain('all the perfumes of Arabia will not sweeten this little hand')
    expect(p).toContain(' / DOCTOR: What a sigh is there!')
  })

  it('names a joint speaker, and one printed in small letters', () => {
    // Bolded since the plays were regenerated on 26 September 2026; capitals
    // alone do not describe "MARCELLUS and BARNARDO" or Hamlet's "Both", and
    // before this they were printed as the first line of what was said.
    const p = playPassage(
      hamletText,
      'acti-sceneii',
      'Hold you the watch tonight',
      'Arm’d, my lord',
    )
    expect(p).toContain(' / MARCELLUS and BARNARDO: We do, my lord. / HAMLET: Arm’d, say you?')
    expect(p.endsWith('Both: Arm’d, my lord.')).toBe(true)
  })
})
