// ─── Speech kit dictionary shard ───────────────────────────────────────────
// Bilingual labels for the site-wide DictationButton / ReadAloudButton so the
// "speak to type" / "read aloud" affordances match the EN/Khaleeji-Arabic UI.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const SPEECH_DICTIONARY: Record<string, { en: string; ar?: string }> = {
  'speech.dictate': { en: 'Dictate', ar: 'تحدّث للكتابة' },
  'speech.listening': { en: 'Listening…', ar: 'نسمعك…' },
  'speech.read_aloud': { en: 'Read aloud', ar: 'اسمعها بصوت' },
  'speech.stop': { en: 'Stop', ar: 'وقّف' },
}
