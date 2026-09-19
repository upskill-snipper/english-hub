// ─── Speech kit dictionary shard ───────────────────────────────────────────
// Bilingual labels for the site-wide DictationButton / ReadAloudButton so the
// "speak to type" / "read aloud" affordances match the EN/Khaleeji-Arabic UI.
// Wired into src/lib/i18n/dictionary.ts (import + one line in lookup()).
// ────────────────────────────────────────────────────────────────────────────

export const SPEECH_DICTIONARY: Record<string, { en: string; ar?: string; es?: string }> = {
  'speech.dictate': { en: 'Dictate', ar: 'تحدّث للكتابة', es: 'Dictar' },
  'speech.mic_blocked': {
    en: 'Microphone blocked. Allow microphone access for this site and try again.',
    ar: 'الميكروفون محظور. اسمح بالوصول إلى الميكروفون لهذا الموقع ثم أعد المحاولة.',
    es: 'Micrófono bloqueado. Permite el acceso al micrófono para este sitio e inténtalo de nuevo.',
  },
  'speech.mic_failed': {
    en: 'Dictation could not start. You can still type.',
    ar: 'تعذّر بدء الإملاء. لا يزال بإمكانك الكتابة.',
    es: 'No se pudo iniciar el dictado. Aún puedes escribir.',
  },
  'speech.listening': { en: 'Listening…', ar: 'نسمعك…', es: 'Escuchando…' },
  'speech.read_aloud': { en: 'Read aloud', ar: 'اسمعها بصوت', es: 'Leer en voz alta' },
  'speech.stop': { en: 'Stop', ar: 'وقّف', es: 'Detener' },
}
