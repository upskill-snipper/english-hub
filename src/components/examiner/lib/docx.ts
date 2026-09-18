// ─── Examiner tool - read a Word .docx in the browser ───────────────────────
//
// A .docx is a zip of XML. This reads the central directory, inflates
// word/document.xml (plus footnotes and endnotes) with the browser's own
// DecompressionStream, and strips the XML down to paragraphs and table cells.
// No library, no upload: the file never leaves the teacher's machine, which is
// the point - a mark scheme file is often the board's own document.
// ────────────────────────────────────────────────────────────────────────────

import { tidyText, xmlDecode } from './text'

interface ZipEntry {
  name: string
  method: number
  compressedSize: number
  localHeaderOffset: number
}

function readEntries(bytes: Uint8Array): Record<string, ZipEntry> {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  // End of central directory record: signature 0x06054b50, scanned from the tail.
  let eocd = -1
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 70_000); i--) {
    if (view.getUint32(i, true) === 0x06054b50) {
      eocd = i
      break
    }
  }
  if (eocd < 0) throw new Error('Not a zip file')
  const count = view.getUint16(eocd + 10, true)
  let offset = view.getUint32(eocd + 16, true)
  const entries: Record<string, ZipEntry> = {}
  for (let n = 0; n < count; n++) {
    if (view.getUint32(offset, true) !== 0x02014b50) break
    const method = view.getUint16(offset + 10, true)
    const compressedSize = view.getUint32(offset + 20, true)
    const nameLen = view.getUint16(offset + 28, true)
    const extraLen = view.getUint16(offset + 30, true)
    const commentLen = view.getUint16(offset + 32, true)
    const localHeaderOffset = view.getUint32(offset + 42, true)
    const name = new TextDecoder().decode(bytes.subarray(offset + 46, offset + 46 + nameLen))
    entries[name] = { name, method, compressedSize, localHeaderOffset }
    offset += 46 + nameLen + extraLen + commentLen
  }
  return entries
}

async function inflateRaw(data: Uint8Array): Promise<Uint8Array> {
  if (typeof DecompressionStream === 'undefined') {
    throw new Error(
      'This browser cannot unpack Word files. Save the scheme as PDF or paste the text.',
    )
  }
  const ds = new DecompressionStream('deflate-raw')
  const writer = ds.writable.getWriter()
  void writer.write(data as unknown as BufferSource)
  void writer.close()
  const buf = await new Response(ds.readable).arrayBuffer()
  return new Uint8Array(buf)
}

async function readEntry(bytes: Uint8Array, e: ZipEntry): Promise<string> {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const o = e.localHeaderOffset
  if (view.getUint32(o, true) !== 0x04034b50) throw new Error('Corrupt zip entry')
  const nameLen = view.getUint16(o + 26, true)
  const extraLen = view.getUint16(o + 28, true)
  const start = o + 30 + nameLen + extraLen
  const raw = bytes.subarray(start, start + e.compressedSize)
  const out = e.method === 8 ? await inflateRaw(raw) : e.method === 0 ? raw : null
  if (!out) throw new Error('Unsupported compression inside the Word file')
  return new TextDecoder().decode(out)
}

function docxXmlToText(xml: string): string {
  let body = xml
  const m = /<w:body[^>]*>([\s\S]*)<\/w:body>/.exec(xml)
  if (m) body = m[1]!
  body = body
    .replace(/<w:tab\b[^>]*\/?>/g, '\t')
    .replace(/<w:br\b[^>]*\/?>/g, '\n')
    .replace(/<w:cr\b[^>]*\/?>/g, '\n')
    .replace(/<\/w:tc>/g, '\t')
    .replace(/<\/w:tr>/g, '\n')
    .replace(/<\/w:p>/g, '\n')
    .replace(/<w:lastRenderedPageBreak[^>]*\/?>/g, '')
    .replace(/<[^>]+>/g, '')
  return tidyText(xmlDecode(body).replace(/\t\n/g, '\n'))
}

export async function readDocx(buf: ArrayBuffer): Promise<{ text: string; warnings: string[] }> {
  const bytes = new Uint8Array(buf)
  const entries = readEntries(bytes)
  if (!entries['word/document.xml']) {
    if (entries['[Content_Types].xml']) throw new Error('That Office file is not a Word document.')
    throw new Error(
      'Not a .docx file. If it is an older .doc, open it in Word and use Save As to make a .docx or PDF.',
    )
  }
  let text = docxXmlToText(await readEntry(bytes, entries['word/document.xml']))
  for (const extra of ['word/footnotes.xml', 'word/endnotes.xml']) {
    const e = entries[extra]
    if (!e) continue
    const t = docxXmlToText(await readEntry(bytes, e)).replace(/^\s+/, '')
    if (t.length > 40)
      text += `\n\n--- ${extra.includes('foot') ? 'Footnotes' : 'Endnotes'} ---\n${t}`
  }
  return { text, warnings: [] }
}
