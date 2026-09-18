// ─── Examiner tool - script pages in the browser ────────────────────────────
//
// A page is a photograph (or a rasterised PDF page) held as a data URL. Two
// derived renderings are cached on the page object: a thumbnail and the
// processed image that goes to the model - rotated, resized so its long edge
// is MAIN_EDGE pixels, optionally contrast-stretched so faint pencil reads as
// ink, and re-encoded as JPEG. Nothing here touches the network.
// ────────────────────────────────────────────────────────────────────────────

import { rasterisePdf } from './pdf'

export interface SplitDetect {
  starts_new_script: boolean
  candidate_name: string
  candidate_number: string
  confidence: number
  evidence: string
}

export interface ScriptPage {
  id: number
  name: string
  /** Original data URL as loaded. */
  src: string
  /** Rotation in degrees, multiples of 90. */
  rot: number
  w: number
  h: number
  /** Processed JPEG data URL for the model; null until computed. */
  proc: string | null
  /** Thumbnail JPEG data URL; null until computed. */
  thumb: string | null
  /** Bulk mode: this page starts a new candidate. */
  boundary: boolean
  /** Bulk mode: what the split classifier said about this page. */
  detect: SplitDetect | null
}

let nextId = 1

/** Long edge of the image sent to the model. Handwriting stays legible at this size. */
export const MAIN_EDGE = 1400
export const THUMB_EDGE = 220
const JPEG_QUALITY = 0.85

export function fileToDataUrl(file: Blob, name = 'file'): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(String(r.result))
    r.onerror = () => reject(new Error(`Could not read ${name}`))
    r.readAsDataURL(file)
  })
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () =>
      reject(
        new Error(
          'That file is not an image this browser can open. HEIC photographs from an iPhone need converting to JPEG first.',
        ),
      )
    img.src = src
  })
}

async function pageFromDataUrl(src: string, name: string): Promise<ScriptPage> {
  const img = await loadImage(src)
  return {
    id: nextId++,
    name,
    src,
    rot: 0,
    w: img.naturalWidth,
    h: img.naturalHeight,
    proc: null,
    thumb: null,
    boundary: false,
    detect: null,
  }
}

/**
 * Turn dropped files into pages. Images become one page each; a PDF becomes
 * one page per PDF page. Problems are reported through onWarn and do not stop
 * the other files.
 */
export async function filesToPages(
  files: Iterable<File>,
  onWarn: (message: string) => void,
): Promise<ScriptPage[]> {
  const out: ScriptPage[] = []
  for (const f of files) {
    try {
      if (/\.pdf$/i.test(f.name) || f.type === 'application/pdf') {
        const blobs = await rasterisePdf(await f.arrayBuffer(), MAIN_EDGE)
        if (!blobs.length) throw new Error(`No pages could be read from ${f.name}.`)
        let n = 0
        for (const blob of blobs) {
          n++
          out.push(await pageFromDataUrl(await fileToDataUrl(blob, f.name), `${f.name} p${n}`))
        }
        continue
      }
      if (f.type && !f.type.startsWith('image/')) {
        onWarn(
          `${f.name} is not a picture. Upload photographs or scans (JPG or PNG), or a scanned PDF.`,
        )
        continue
      }
      out.push(await pageFromDataUrl(await fileToDataUrl(f, f.name), f.name))
    } catch (e) {
      onWarn(e instanceof Error ? e.message : String(e))
    }
  }
  return out
}

/**
 * Grey-scale and stretch the contrast so faint pencil on cream paper becomes
 * dark ink on white. Percentile-based so a photograph with a dark table edge
 * does not blow out the page.
 */
export function enhanceInk(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const d = ctx.getImageData(0, 0, w, h)
  const a = d.data
  const hist = new Uint32Array(256)
  for (let i = 0; i < a.length; i += 4) {
    const g = (a[i]! * 0.299 + a[i + 1]! * 0.587 + a[i + 2]! * 0.114) | 0
    a[i] = a[i + 1] = a[i + 2] = g
    hist[g]!++
  }
  const total = w * h
  let acc = 0
  let lo = 0
  let hi = 255
  for (let i = 0; i < 256; i++) {
    acc += hist[i]!
    if (acc > total * 0.01) {
      lo = i
      break
    }
  }
  acc = 0
  for (let i = 255; i >= 0; i--) {
    acc += hist[i]!
    if (acc > total * 0.08) {
      hi = i
      break
    }
  }
  if (hi - lo < 40) hi = Math.min(255, lo + 40)
  const range = hi - lo
  const lut = new Uint8Array(256)
  for (let i = 0; i < 256; i++) {
    let v = (i - lo) / range
    v = v < 0 ? 0 : v > 1 ? 1 : v
    v = Math.pow(v, 0.85)
    lut[i] = (v * 255) | 0
  }
  for (let i = 0; i < a.length; i += 4) {
    const v = lut[a[i]!]!
    a[i] = a[i + 1] = a[i + 2] = v
  }
  ctx.putImageData(d, 0, 0)
}

export async function renderPage(
  p: ScriptPage,
  maxEdge: number,
  enhance: boolean,
): Promise<string> {
  const img = await loadImage(p.src)
  const rot = ((p.rot % 360) + 360) % 360
  let w = img.naturalWidth
  let h = img.naturalHeight
  if (rot === 90 || rot === 270) [w, h] = [h, w]
  const scale = Math.min(1, maxEdge / Math.max(w, h))
  const cw = Math.max(1, Math.round(w * scale))
  const ch = Math.max(1, Math.round(h * scale))
  const canvas = document.createElement('canvas')
  canvas.width = cw
  canvas.height = ch
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) throw new Error('Canvas is not available in this browser.')
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, cw, ch)
  ctx.save()
  ctx.translate(cw / 2, ch / 2)
  ctx.rotate((rot * Math.PI) / 180)
  const dw = rot === 90 || rot === 270 ? ch : cw
  const dh = rot === 90 || rot === 270 ? cw : ch
  ctx.drawImage(img, -dw / 2, -dh / 2, dw, dh)
  ctx.restore()
  if (enhance) enhanceInk(ctx, cw, ch)
  return canvas.toDataURL('image/jpeg', JPEG_QUALITY)
}

export function invalidate(p: ScriptPage): void {
  p.proc = null
  p.thumb = null
}

export async function ensureThumb(p: ScriptPage, enhance: boolean): Promise<string> {
  if (!p.thumb) p.thumb = await renderPage(p, THUMB_EDGE, enhance)
  return p.thumb
}

export async function ensureProcessed(p: ScriptPage, enhance: boolean): Promise<string> {
  if (!p.proc) p.proc = await renderPage(p, MAIN_EDGE, enhance)
  return p.proc
}

export function base64Of(dataUrl: string): string {
  const i = dataUrl.indexOf(',')
  return i >= 0 ? dataUrl.slice(i + 1) : dataUrl
}

/**
 * Group base64 page strings into request batches that each fit under the
 * server's body ceiling and page count. A long script is transcribed in
 * batches and the transcripts concatenated; [page N] markers are renumbered by
 * the caller.
 */
export function batchPages(
  pages: readonly string[],
  maxBytes: number,
  maxCount: number,
): string[][] {
  const batches: string[][] = []
  let current: string[] = []
  let size = 0
  for (const p of pages) {
    if (current.length && (size + p.length > maxBytes || current.length >= maxCount)) {
      batches.push(current)
      current = []
      size = 0
    }
    current.push(p)
    size += p.length
  }
  if (current.length) batches.push(current)
  return batches
}

/** Renumber [page N] markers so a batched transcript counts from `offset + 1`. */
export function renumberPages(text: string, offset: number): string {
  return text.replace(/\[page\s+(\d+)\]/gi, (_, n: string) => `[page ${Number(n) + offset}]`)
}
