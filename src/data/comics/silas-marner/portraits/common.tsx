import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * What the Silas Marner portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * hair helpers and the hand are the Jekyll and Hyde portraits' own,
 * re-exported here from ../../jekyll-and-hyde/portraits/ rather than copied,
 * as The Sign of Four's are: a second copy of a helper is a copy that drifts.
 * Only what this novel needs beyond them is defined below.
 *
 * AS GEORGE ELIOT DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn
 * from the held edition (src/data/full-texts/silas-marner.ts) and its
 * docblock quotes the sentences each detail comes from. Eliot describes some
 * people closely (the Squire in Chapter 9, Nancy in Chapter 11, Eppie in
 * Chapter 16) and some hardly at all: of Sarah she says only that she was "a
 * young servant-woman". Where the text gives no face, the sitter is drawn
 * plainly and the markers point only at what it does say; the card's artNote
 * says so.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Part One is set "in the early years of this
 * century", during the war with France, and Part Two sixteen years later, so
 * everyone wears the ordinary dress of the English country in the 1800s and
 * 1820s: a squire's family the tailcoat and white neckcloth, a weaver or a
 * labourer a plain coat and a knotted neckerchief, a village wife a white cap
 * and a kerchief, a girl out of doors a bonnet. Eliot names some clothes
 * (Nancy's "silvery twilled silk", Aaron's "new fustian suit", Eppie's
 * "brown bonnet", Molly's "dingy rags") and those are drawn as she names
 * them. Nothing comes from a film, television or stage production.
 *
 * ONE WAY OF CUTTING A FACE. Every face is cut the same way, in paper, with
 * the same eye, the same ear and the same few lines, and what makes one
 * person differ from another is only what Eliot says of them: Silas's
 * "protuberant" eyes, William Dane's "narrow slanting eyes", the Squire's
 * "knit brow". William's eyes are cut as a narrowed, heavy, sidelong lid on
 * the same eye as everyone else's, which is what the sentence describes (a
 * look of hidden triumph), and nothing else.
 *
 * RED IS NEVER ON A MOUTH OR A CHIN. Twice in the last texts a red mark near
 * a mouth read at a glance as blood (Hyde's anger, Juliet's lips beside the
 * vial). A flush sits on the cheekbone, well clear of the lips, and firelight
 * on a face is a rim along the brow and the nose that stops above the mouth.
 *
 * NEVER DRAWN. Molly Farren's dying in the snow, and Dunstan's skeleton in the
 * drained Stone-pit, are never drawn here or anywhere (see ../index.ts).
 * Molly's portrait shows her alive, as she is when she sets out, with her
 * sleeping child safe in her arms, and nothing of the snow or the opium.
 *
 * Every portrait is drawn in the plate's own coordinates, 332 by 318, so its
 * markers can be read straight off the drawing. A sitter who faces left is
 * drawn facing right and turned over by FACE_LEFT, and their markers are
 * placed with flip().
 */

import { PH, PW, inside, type Knot } from '../../jekyll-and-hyde/portraits/common'

export {
  InnerRule,
  PH,
  PW,
  combedHair,
  hatch,
  inside,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type Knot,
} from '../../jekyll-and-hyde/portraits/common'
export {
  Hand,
  handPaths,
  type HandPaths,
  type HandSpec,
} from '../../jekyll-and-hyde/portraits/hands'

/** Turns a drawing made facing right into one facing left, about the plate's middle. */
export const FACE_LEFT = `matrix(-1 0 0 1 ${PW} 0)`

/** A point drawn facing right, where it prints once the drawing is turned by FACE_LEFT. */
export const flip = ([x, y]: Pt): Pt => [PW - x, y]

/**
 * An eye in profile, looking right, cut as the Sign of Four and Jekyll and
 * Hyde portraits cut theirs: a bold upper lid, a fine lower lid, the pupil
 * forward in the eye, and a paper glint. `at` is the middle of the eye.
 *
 * - `wide` opens it (eagerness, alarm, or Silas's straining stare).
 * - `heavy` drops the upper lid (tiredness, drink, a knowing look).
 * - `slant` tilts the whole eye, its outer corner lower by that many units.
 * - `closed` cuts a sleeping eye: one lid line and lashes.
 * - `bulge` draws the round of the eyeball standing out under the lid, for
 *   Silas's "large brown protuberant eyes".
 */
export function ProfileEye({
  at,
  s = 1,
  wide = false,
  heavy = false,
  slant = 0,
  closed = false,
  bulge = false,
  glint = true,
  look = 0,
}: {
  at: Pt
  s?: number
  wide?: boolean
  heavy?: boolean
  slant?: number
  closed?: boolean
  bulge?: boolean
  glint?: boolean
  /** Moves the pupil along the eye: + forward, - back (a sidelong look). */
  look?: number
}) {
  const [x, y] = at
  const lift = wide ? -2.2 : heavy ? 1.8 : 0
  // The outer (back) corner is at x - 7.5; `slant` lowers it and lifts the front.
  const t = (dx: number) => (-dx / 15) * slant
  const P = (dx: number, dy: number) => `${n(x + dx * s)} ${n(y + (dy + t(dx)) * s)}`
  if (closed)
    return (
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d={`M${P(-7, 1.5)}Q${P(0, 4.5)} ${P(7, 1)}`} strokeWidth={2.2 * Math.min(1, s)} />
        <path
          d={`M${P(-4, 3.6)}L${P(-5, 6.6)}M${P(-0.5, 4.3)}L${P(-1, 7.4)}M${P(3, 3.8)}L${P(3.2, 6.8)}`}
          strokeWidth={LINE.hairline}
        />
      </g>
    )
  const upper = `M${P(-7.5, 1)}Q${P(0.5, -4.2 + lift)} ${P(8, -0.4)}`
  const lower = `M${P(-5.5, 4.6)}Q${P(1, 6.2 + (wide ? 1.2 : 0))} ${P(7, 3)}`
  const px = x + (4 + look) * s
  const py = y + ((heavy ? 1.8 : 1.2) + t(4 + look)) * s
  const r = (wide ? 3.1 : 2.8) * s
  return (
    <g>
      {bulge && (
        <path
          d={`M${P(-6, -1)}Q${P(4, -9.5)} ${P(11, 0.5)}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinecap="round"
        />
      )}
      <path
        d={upper}
        fill="none"
        stroke={INK}
        strokeWidth={2.4 * Math.min(1, s)}
        strokeLinecap="round"
      />
      <path d={lower} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <circle cx={n(px)} cy={n(py)} r={n(r)} fill={INK} />
      {glint && <circle cx={n(px + 1.1 * s)} cy={n(py - 1.1 * s)} r={n(1.1 * s)} fill={PAPER} />}
    </g>
  )
}

/**
 * An ear, as the Jekyll and Hyde portraits cut it: an outline in bold and one
 * fine inner fold. `at` is the top of the ear's front edge; `h` its height.
 */
export function ProfileEar({ at, h = 50 }: { at: Pt; h?: number }) {
  const [x, y] = at
  const k = h / 50
  const outer = `M${n(x)} ${n(y)}C${n(x - 12 * k)} ${n(y - 1 * k)} ${n(x - 17 * k)} ${n(y + 16 * k)} ${n(x - 14 * k)} ${n(y + 32 * k)}C${n(x - 11 * k)} ${n(y + 46 * k)} ${n(x - 3 * k)} ${n(y + 52 * k)} ${n(x + 4 * k)} ${n(y + 46 * k)}C${n(x + 6 * k)} ${n(y + 38 * k)} ${n(x + 6 * k)} ${n(y + 20 * k)} ${n(x)} ${n(y)}Z`
  const inner = `M${n(x - 2 * k)} ${n(y + 9 * k)}C${n(x - 8 * k)} ${n(y + 11 * k)} ${n(x - 9 * k)} ${n(y + 25 * k)} ${n(x - 6 * k)} ${n(y + 33 * k)}C${n(x - 4 * k)} ${n(y + 36 * k)} ${n(x - 1 * k)} ${n(y + 35 * k)} ${n(x)} ${n(y + 31 * k)}`
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={outer} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={inner} fill="none" stroke={INK} strokeWidth={1.3} />
    </g>
  )
}

/**
 * Colour in a face, in the spot colour: a flat patch on the cheekbone, a
 * little flattened along its lower edge, as Lanyon's "red-faced" flush and
 * the Ghost of Christmas Past's bloom are printed. Nancy's bloom, Dolly's
 * fresh complexion, Priscilla's face "made blowsy by cold and damp" and
 * Dunstan's "flushed face" all use it, larger or smaller. Keep it on the
 * cheekbone, well clear of the mouth and chin, where red reads as blood.
 *
 * WHY A PATCH. The panels first cut Dunstan's flush as three slanting
 * strokes. At portrait size the same strokes were tried twice on 2 October
 * 2026, level and then steep, and both read as scratches on the cheek; a
 * round red cheek had already read on Hyde as a clown's. The review that day
 * found the panel's strokes read as scratches too, so DUNSTAN_FLUSH in
 * ../panels/people.tsx is now a patch as well. `at` is its middle,
 * `w` and `h` its size; it leans back towards the ear by `tilt` degrees.
 */
export function Bloom({ at, w, h, tilt = 12 }: { at: Pt; w: number; h: number; tilt?: number }) {
  const [x, y] = at
  const k = 0.5523
  const a = w / 2
  const b = h / 2
  // An ellipse a little flattened on its lower edge, so it reads as colour on
  // a cheekbone and not as a disc.
  const d =
    `M${n(-a)} 0C${n(-a)} ${n(-b * k * 1.1)} ${n(-a * k)} ${n(-b)} 0 ${n(-b)}` +
    `C${n(a * k)} ${n(-b)} ${n(a)} ${n(-b * k)} ${n(a)} 0` +
    `C${n(a)} ${n(b * k * 0.8)} ${n(a * k)} ${n(b * 0.8)} 0 ${n(b * 0.8)}` +
    `C${n(-a * k)} ${n(b * 0.8)} ${n(-a)} ${n(b * k * 0.8)} ${n(-a)} 0Z`
  return <path d={d} fill={RED} transform={`translate(${n(x)} ${n(y)}) rotate(${tilt})`} />
}

/**
 * The diagonal ribs of a twilled cloth (Nancy's "silvery twilled silk",
 * Aaron's fustian) as stroke-only path data across a box; clip it to the
 * garment. `every` is the gap between ribs, `rise` their slope.
 */
export function twill(
  box: { x0: number; x1: number; y0: number; y1: number },
  every: number,
  rise = 0.7,
): string {
  let d = ''
  const span = box.x1 - box.x0
  for (let c = box.y0 - span * rise; c < box.y1; c += every)
    d += `M${n(box.x0)} ${n(c + span * rise)}L${n(box.x1)} ${n(c)}`
  return d
}

/**
 * The ground behind a sitter, cut as portraitGround cuts it, but split in two:
 * the cuts for which `red(x, y)` is true print in the spot colour, the rest
 * in paper. For firelight that fills part of a room (Silas at his hearth,
 * Godfrey with his back to the fire): the light is printed as the lit
 * ground, never as a mark on a face, where red reads as blood.
 */
export function splitGround(
  seed: number,
  light: (x: number, y: number) => number,
  red: (x: number, y: number) => boolean,
): { paper: string; red: string } {
  const r = rng(seed)
  let paper = ''
  let spot = ''
  for (let y = 12; y < PH - 8; y += 5.2) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 20, 90)
      const end = Math.min(x + len, PW - 10)
      const mx = (x + end) / 2
      const L = Math.max(0, Math.min(1, light(mx, y)))
      if (L > 0.02) {
        const cut = gouge(
          x,
          y + between(r, -0.5, 0.5),
          end,
          y + between(r, -0.5, 0.5),
          0.3 + L * 2.4 * between(r, 0.7, 1.1),
        )
        if (red(mx, y)) spot += cut
        else paper += cut
      }
      x += len + between(r, 4, 12)
    }
  }
  return { paper, red: spot }
}

/** A flame: a pointed teardrop from its base (x, y) up to its tip, h high. */
export function flame(x: number, y: number, h: number, lean = 0): string {
  const w = h * 0.34
  return (
    `M${n(x)} ${n(y)}C${n(x - w)} ${n(y - h * 0.18)} ${n(x - w * 0.8)} ${n(y - h * 0.62)} ${n(x + lean)} ${n(y - h)}` +
    `C${n(x + w * 0.9)} ${n(y - h * 0.6)} ${n(x + w)} ${n(y - h * 0.2)} ${n(x)} ${n(y)}Z`
  )
}

/**
 * A head drawn in its own frame, put on the plate: turned `rot` degrees about
 * `pivot` (clockwise bows a face that looks right), scaled by `s`, and moved
 * so its origin lands at `o`. For a sitter drawn smaller than the block, as a
 * half-length figure is (Godfrey with his hands in his pockets, Molly with her
 * child): the head keeps the proportions of the others, and every line is
 * still given its width in the plate's own units, so a hairline stays a
 * hairline however small the head.
 *
 * `p(x, y)` writes a point as path text; `knots` places an outline for smooth().
 */
export function placer(o: Pt, s: number, rot = 0, pivot: Pt = [0, 0]) {
  const c = Math.cos((rot * Math.PI) / 180)
  const si = Math.sin((rot * Math.PI) / 180)
  const pt = ([x, y]: Pt): Pt => {
    const dx = x - pivot[0]
    const dy = y - pivot[1]
    return [o[0] + (pivot[0] + dx * c - dy * si) * s, o[1] + (pivot[1] + dx * si + dy * c) * s]
  }
  const p = (x: number, y: number) => {
    const [px, py] = pt([x, y])
    return `${n(px)} ${n(py)}`
  }
  const knots = (ks: Knot[]): Knot[] =>
    ks.map((k) => {
      const [x, y] = pt([k[0], k[1]])
      return k[2] ? [x, y, 1] : [x, y]
    })
  return { pt, p, knots, s }
}

/**
 * ONE HEAD FOR EVERY WOMAN, as every face is cut the same way: a young
 * woman's head in profile, facing right, in the frame the men's heads are
 * drawn in, a little smaller than theirs. Each woman's portrait starts from
 * this and changes only what Eliot gives her (Nancy's small, fine features,
 * Dolly's fuller face, Priscilla taking after her father), so that the
 * likeness between the sisters, and between Eppie and no one else, is the
 * text's and not an accident of drawing. Landmarks: the eye at about (217,
 * 130), the brow over it from 204 to 224 at y 119, the top of the ear at
 * (160, 118), the corner of the mouth at (229, 176.5), the chin at (228.5,
 * 194), the tip of the nose at (241, 163).
 */
export const WOMAN_HEAD: Knot[] = [
  [128, 252, 1],
  [124, 228],
  [112, 204],
  [104, 172],
  [102, 136],
  [110, 100],
  [128, 72],
  [156, 56],
  [186, 54],
  [208, 64],
  [222, 84],
  [228, 106],
  [228.5, 120],
  [225, 128],
  [229, 140],
  [236, 154],
  [241, 163, 1],
  [236, 167],
  [230, 168, 1],
  [231.5, 173],
  [229, 176.5, 1],
  [230.5, 180.5],
  [226, 186],
  [228.5, 194],
  [223, 203],
  [208, 208],
  [200, 220],
  [200, 252, 1],
]

/** A head's landmarks moved: each [index, dx, dy] nudges one knot of `base`. */
export function nudge(base: Knot[], moves: [number, number, number][]): Knot[] {
  const out = base.map((k): Knot => (k[2] ? [k[0], k[1], 1] : [k[0], k[1]]))
  for (const [i, dx, dy] of moves) {
    const k = out[i]
    out[i] = k[2] ? [k[0] + dx, k[1] + dy, 1] : [k[0] + dx, k[1] + dy]
  }
  return out
}

/**
 * Scallops along a spine, on its outer side: the frilled edge of a cap, a
 * lace tucker. Stroke it. (Sarah's portrait cut it first.)
 */
export function scallops(spine: Pt[], depth: number, every: number): string {
  let d = ''
  for (let i = 0; i < spine.length - 1; i++) {
    const [ax, ay] = spine[i]
    const [bx, by] = spine[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    const nx = (by - ay) / L
    const ny = -(bx - ax) / L
    for (let t = 0; t < L - 0.1; t += every) {
      const x0 = ax + ((bx - ax) * t) / L
      const y0 = ay + ((by - ay) * t) / L
      const t1 = Math.min(t + every, L)
      const x1 = ax + ((bx - ax) * t1) / L
      const y1 = ay + ((by - ay) * t1) / L
      const cx = (x0 + x1) / 2 + nx * depth
      const cy = (y0 + y1) / 2 + ny * depth
      d += `M${n(x0)} ${n(y0)}Q${n(cx)} ${n(cy)} ${n(x1)} ${n(y1)}`
    }
  }
  return d
}

/**
 * Curls cut as short open rings scattered through `outline` (its landmarks,
 * as given to smooth()): Godfrey's cropped fair hair, a child's curls. Each is
 * most of a circle, turned at random, so the hair reads as curling and not as
 * a pattern of dots. Stroke with INK on paper hair, at about a hairline.
 */
export function curlMarks(
  r: Rng,
  outline: Knot[],
  count: number,
  radius: [number, number],
): string {
  const poly = outline.map(([x, y]): Pt => [x, y])
  const xs = poly.map((p) => p[0])
  const ys = poly.map((p) => p[1])
  let d = ''
  for (let i = 0, tries = 0; i < count && tries < count * 60; tries++) {
    const x = between(r, Math.min(...xs), Math.max(...xs))
    const y = between(r, Math.min(...ys), Math.max(...ys))
    if (!inside(poly, x, y)) continue
    const rad = between(r, radius[0], radius[1])
    const a0 = between(r, 0, Math.PI * 2)
    const a1 = a0 + between(r, 3.6, 4.8)
    const p0: Pt = [x + Math.cos(a0) * rad, y + Math.sin(a0) * rad]
    const p1: Pt = [x + Math.cos(a1) * rad, y + Math.sin(a1) * rad]
    d += `M${n(p0[0])} ${n(p0[1])}A${n(rad)} ${n(rad)} 0 1 1 ${n(p1[0])} ${n(p1[1])}`
    i++
  }
  return d
}
