'use client'

import { InteractiveTextViewer, type TextData } from '@/components/study/InteractiveTextViewer'
import { macbethText } from '@/data/full-texts/macbeth'
import { useLocale } from '@/lib/i18n/use-locale'
import { CHARACTERS, CONTEXT_NOTES, SCENES, THEMES } from './notes'
import { setForTheViewer } from '@/components/study/set-play-for-the-viewer'
import { translateMacbethData } from './translations'

/**
 * The complete Macbeth, with the notes and panels this reader has always had.
 *
 * The play is the held edition, src/data/full-texts/macbeth.ts (Project
 * Gutenberg #1533), imported and never retyped. Until 26 September 2026 this
 * file carried twelve of its scenes typed in by hand, in the Folger Shakespeare
 * Library's wording, which Folger licenses for non-commercial use only; see
 * ./notes.ts for that, and for the 57 notes that had never been shown.
 *
 * WHY NOT FullTextReader, which the other plays use. That component exists for
 * texts with no authored commentary of their own, and this one has it: 88
 * hand-written notes on twelve scenes, and character, theme and context
 * panels. So the viewer is mounted directly, as before, and it does not draw
 * on src/data/text-annotations.generated.ts, which is why that file has no
 * Macbeth entry and the generator was not rerun. The authored layer in
 * ./notes.ts is merged onto the held scenes by id. A scene with no entry there
 * keeps the edition's own heading rather than disappearing. Each scene's HTML
 * is set out first by src/components/study/set-play-for-the-viewer.ts, which
 * says why: without it 16 scenes printed their verse as run-on prose. That
 * repair was made here first, for this reader alone, and moved there on 26
 * September 2026 so that FullTextReader gives every other play the same.
 */
const macbethData: TextData = {
  ...macbethText,
  sections: macbethText.sections.map((held) => {
    const section = { ...held, content: setForTheViewer(held.content, held.setting) }
    const scene = SCENES[section.id]
    return scene ? { ...section, title: scene.title, annotations: scene.annotations } : section
  }),
  characters: CHARACTERS,
  themes: THEMES,
  contextNotes: CONTEXT_NOTES,
}

export default function MacbethReadPage() {
  // Apply Khaleeji Arabic to the user-facing metadata (section titles,
  // character + theme names and descriptions, contextNotes). The play
  // text inside each section's `content` field stays in English - it
  // IS the Shakespeare source the student is reading.
  const locale = useLocale()
  const data = translateMacbethData(macbethData, locale)
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* A new key, not "macbeth". The viewer stores the ids of the scenes a
          reader has ticked and counts them without checking they still exist,
          so the old reader's eleven ids ("act1-scene1", which also held Scene
          2) would have shown a returning student as eleven scenes through a
          play whose scenes they had never opened here. */}
      <InteractiveTextViewer data={data} storageKey="macbeth-full-text" />
    </div>
  )
}
