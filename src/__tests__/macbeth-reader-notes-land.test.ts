import { describe, it, expect } from 'vitest'

import { macbethText } from '@/data/full-texts/macbeth'
import { CHARACTERS, SCENES, THEMES } from '@/app/revision/texts/macbeth/read/notes'
import { MACBETH_AR } from '@/app/revision/texts/macbeth/read/translations'
import { setForTheViewer } from '@/components/study/set-play-for-the-viewer'

/**
 * The Macbeth reader's notes land on the text they are about.
 *
 * WHAT BROKE (found 26 September 2026, while moving the reader off the Folger
 * Shakespeare Library's text, which Folger licenses for non-commercial use
 * only). The viewer finds each note by searching the scene for the note's
 * `text`, line breaks included. The notes had been typed with spaces where the
 * verse breaks, so 57 of 88 were never found and never shown, on a page whose
 * whole point was its notes. Nothing reported it: a note that matches nothing
 * renders nothing, and nothing looks wrong.
 *
 * So each note must be found in its own scene, character for character, and no
 * note may sit inside or across another, because the viewer cannot draw a
 * highlight inside another highlight and silently drops the inner one.
 */

const plain = (html: string) => html.replace(/<[^>]*>/g, '')
const SCENE_TEXT = new Map(macbethText.sections.map((s) => [s.id, plain(s.content)]))

describe('the reader covers the held edition', () => {
  it('titles every scene, and only scenes that exist', () => {
    expect(Object.keys(SCENES).sort()).toEqual([...SCENE_TEXT.keys()].sort())
  })

  it('has notes to check', () => {
    // An emptied SCENES would pass every check below.
    const notes = Object.values(SCENES).flatMap((s) => s.annotations ?? [])
    expect(notes.length).toBeGreaterThanOrEqual(88)
  })

  it('has an Arabic title for every scene', () => {
    const missing = Object.values(SCENES)
      .map((s) => s.title)
      .filter((t) => !MACBETH_AR[t])
    expect(missing).toEqual([])
  })

  it('has an Arabic description for every character', () => {
    // The translation map is keyed by the English text, so a description
    // reworded in notes.ts and not in translations.ts falls back to English.
    const missing = CHARACTERS.filter((c) => !MACBETH_AR[c.description]).map((c) => c.name)
    expect(missing).toEqual([])
  })
})

describe('every note is on its line', () => {
  it('occurs verbatim in its own scene', () => {
    const missing: string[] = []
    for (const [id, scene] of Object.entries(SCENES)) {
      const text = SCENE_TEXT.get(id) ?? ''
      for (const a of scene.annotations ?? [])
        if (!text.includes(a.text)) missing.push(`${id}: ${a.text.slice(0, 50)}`)
    }
    expect(missing).toEqual([])
  })

  it('and none is hidden inside or across another', () => {
    // The viewer's own rule: spans sorted by start, longest first, and a span
    // that begins before the last one ended is dropped. Identical spans are
    // merged into one tooltip first, so they are allowed.
    const hidden: string[] = []
    for (const [id, scene] of Object.entries(SCENES)) {
      const text = (SCENE_TEXT.get(id) ?? '').toLowerCase()
      const spans = new Map<string, { s: number; e: number; label: string }>()
      for (const a of scene.annotations ?? []) {
        const needle = a.text.toLowerCase()
        for (let at = text.indexOf(needle); at !== -1; at = text.indexOf(needle, at + 1))
          spans.set(`${at}-${at + needle.length}`, {
            s: at,
            e: at + needle.length,
            label: a.text.slice(0, 40),
          })
      }
      let last = -1
      for (const sp of [...spans.values()].sort((x, y) => x.s - y.s || y.e - x.e)) {
        if (sp.s < last) hidden.push(`${id}: ${sp.label}`)
        else last = sp.e
      }
    }
    expect(hidden).toEqual([])
  })

  it('never gives one span two notes of the same kind', () => {
    // The tooltip keys its entries by kind, so two would collide.
    const dupes: string[] = []
    for (const [id, scene] of Object.entries(SCENES)) {
      const seen = new Set<string>()
      for (const a of scene.annotations ?? []) {
        const k = `${a.type}|${a.text}`
        if (seen.has(k)) dupes.push(`${id}: ${a.type} ${a.text.slice(0, 40)}`)
        seen.add(k)
      }
    }
    expect(dupes).toEqual([])
  })
})

describe('the panels quote the held edition', () => {
  // Quotation marks and apostrophes are one mark whichever way they curl, and
  // " / " stands for the edition's line break. Nothing else is forgiven.
  const unify = (s: string) =>
    s
      .replace(/[‘’ʼ]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+\/\s+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  const held = unify(
    macbethText.sections
      .map((s) =>
        plain(s.content).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'),
      )
      .join(' '),
  )
  const quoted = (s: string) => [...s.matchAll(/"([^"]+)"/g)].map((m) => m[1])

  it('in every character key quotation and every piece of theme evidence', () => {
    const missing = [
      ...CHARACTERS.flatMap((c) => c.keyQuotes.flatMap(quoted)),
      ...THEMES.flatMap((t) => t.evidence.flatMap(quoted)),
    ].filter((q) => !held.includes(unify(q)))
    expect(missing).toEqual([])
  })
})

describe('the reader sets the edition out as a play', () => {
  // WHAT BROKE (26 September 2026, seen in the browser with every test above
  // passing). A scene without notes is printed as HTML, where the edition's line
  // breaks are white space, so 16 scenes ran their verse on as prose; and the
  // edition's italic underscores were printed as underscores. See
  // ../components/study/set-play-for-the-viewer.ts, where the repair now lives
  // for every play; every-play-is-set-as-a-play.test.ts checks the other twelve.
  const SET = macbethText.sections.map((s) => ({
    held: s,
    html: setForTheViewer(s.content, s.setting),
  }))
  // The plain text the viewer prints for a scene with notes: tags deleted,
  // entities decoded (InteractiveTextViewer's AnnotatedContent).
  const asText = (html: string) =>
    html
      .replace(/<[^>]*>/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&')

  it('breaks each verse line, and lets prose flow', () => {
    const duncan = SET.find((s) => s.held.id === 'acti-sceneiv')!.html
    expect(duncan).toContain(
      '<strong>DUNCAN</strong><br>\nThere’s no art<br>\nTo find the mind’s construction in the face:<br>\n',
    )
    const porter = SET.find((s) => s.held.id === 'actii-sceneiii')!.html
    const speech =
      /<p class="mb-4"><strong>PORTER<\/strong><br>\nHere’s a knocking[\s\S]*?<\/p>/.exec(
        porter,
      )![0]
    expect(speech.match(/<br>/g)).toHaveLength(1) // after the name, and nowhere in the prose
  })

  it('prints no underscore, and the place of every scene', () => {
    for (const { held, html } of SET) {
      expect(asText(html), held.id).not.toContain('_')
      expect(held.setting, held.id).toBeTruthy()
      expect(
        html.startsWith(`<p class="mb-4 italic text-muted-foreground">${held.setting}</p>`),
      ).toBe(true)
    }
  })

  it('changes no word of the edition', () => {
    for (const { held, html } of SET) {
      const words = asText(html).slice(held.setting!.length).replace(/\s+/g, ' ').trim()
      expect(words, held.id).toBe(
        asText(held.content.replace(/_/g, '')).replace(/\s+/g, ' ').trim(),
      )
    }
  })

  it('and every note is still found in the text the viewer prints', () => {
    const missing: string[] = []
    for (const { held, html } of SET)
      for (const a of SCENES[held.id]?.annotations ?? [])
        if (!asText(html).includes(a.text)) missing.push(`${held.id}: ${a.text.slice(0, 50)}`)
    expect(missing).toEqual([])
  })
})
