// ─── Examiner tool - text helpers (browser) ─────────────────────────────────

export function tidyText(t: string): string {
  return t
    .replace(/\r\n?/g, '\n')
    .replace(/ /g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function xmlDecode(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h: string) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
}

/** Rich Text Format to plain text, good enough for a pasted mark scheme. */
export function rtfToText(s: string): string {
  return s
    .replace(/\\'([0-9a-fA-F]{2})/g, (_, h: string) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\\par[d]?\b/g, '\n')
    .replace(/\\line\b/g, '\n')
    .replace(/\\tab\b/g, '\t')
    .replace(/\{\\\*[^{}]*\}/g, '')
    .replace(/\\[a-zA-Z]+-?\d*\s?/g, '')
    .replace(/[{}]/g, '')
}

export type SchemeFileKind = 'pdf' | 'docx' | 'doc' | 'rtf' | 'text' | 'unknown'

export function schemeFileKind(file: File): SchemeFileKind {
  const name = file.name.toLowerCase()
  if (name.endsWith('.pdf') || file.type === 'application/pdf') return 'pdf'
  if (name.endsWith('.docx')) return 'docx'
  if (name.endsWith('.doc')) return 'doc'
  if (name.endsWith('.rtf')) return 'rtf'
  if (/\.(txt|md|text|csv)$/.test(name) || file.type.startsWith('text/')) return 'text'
  return 'unknown'
}

export function safeName(fileName: string): string {
  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[\\/:*?"<>|]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100)
}
