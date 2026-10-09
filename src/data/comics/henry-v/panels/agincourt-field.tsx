import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, wedge, type Rng } from '@/components/comics/linocut/carve'

/**
 * The field of Agincourt by day, for the panels of moments 16 to 20 of the
 * guide's timeline (Act 4, Scenes 3 to 8): "The feast of Crispian", "Pistol
 * takes a prisoner", "York, Suffolk and the prisoners", "The boys and the
 * luggage" and "The glove and the count of the dead". All five happen on one
 * field on one day, so its sky, its ground, its banners, its distant ranks and
 * (where they fly) its crows are cut the same way in each. The people are the
 * text's kit (./people.tsx); this file draws only the place.
 *
 * WHAT THE PLAY SAYS OF THE FIELD, and so what is drawn (the held edition,
 * src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 * - It is day, and windy. "The sun doth gild our armour" (Orleans, 4.2); "The
 *   sun is high" (the Constable, 4.2); the English banners are "ragged
 *   curtains" that "our air shakes ... passing scornfully" (Grandpré, 4.2).
 *   So the sky is pale, and every banner flies out on the wind.
 * - The English are worn: "Our gayness and our gilt are all besmirch'd / With
 *   rainy marching in the painful field; / There's not a piece of feather in
 *   our host" (Henry, 4.3); "lank-lean cheeks and war-worn coats" (the Chorus
 *   to Act 4). So their banners are torn at the fly (`banner` with
 *   `ragged`), their men carry no plume, and the ground is trampled mud.
 * - The French are many and bright: "full three-score thousand", "five to
 *   one" (4.3); "The French are bravely in their battles set" (Salisbury,
 *   4.3). So their host (`farHost`) is a long, dense line of helmets and
 *   lances with pennons, cut with the same care as the English and never as a
 *   caricature.
 * - "the knavish crows / Fly o'er them" (Grandpré, 4.2): crows over the
 *   English (`CROW`), before and during the fighting only (moments 16 and
 *   17). Once the dead are spoken of (18 and 19), a crow over the field would
 *   say what those panels do not show, so none flies there.
 *
 * WAR AS THE PLAY STAGES IT. Banners, ranks, faces and the weather: nobody on
 * this field is struck, wounded, dying or dead, and no blade, arrow or shot
 * reaches anyone. The distant ranks stand or move; their lances are upright.
 *
 * Every mark is plain SVG path data, computed once per seed and cached by the
 * panel that asks for it; nothing here draws by itself. Nothing is taken from
 * a film, television or stage production.
 */

export type P = [number, number]

/**
 * A path written round (0, 0) in absolute M, L, Q, C and Z commands only,
 * moved to `at`, scaled by `s`, turned by `rot` degrees and, with `flip`,
 * mirrored left to right. A crow or a tent is written once and placed many
 * times this way, which keeps the plate small.
 */
export function placed(d: string, at: P, s: number, rot = 0, flip = false): string {
  const c = Math.cos(deg(rot))
  const si = Math.sin(deg(rot))
  const f = flip ? -1 : 1
  return d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, xs: string, ys: string) => {
    const x = Number(xs) * s * f
    const y = Number(ys) * s
    return `${n(at[0] + x * c - y * si)} ${n(at[1] + x * si + y * c)}`
  })
}

/** A crow in flight seen from below, wings spread, centred on (0, 0), about 38 across. */
export const CROW =
  'M0 -4.4C1.8 -4.4 2.6 -3 2.4 -1.4C5.2 -3.6 9.2 -5.6 14 -6.6L18.8 -8.6L17.2 -5.8L19.8 -5.2L16.6 -3.4L18.2 -1.8L13.6 -1.2C9.2 -0.4 5.2 1.2 2.6 3.2L3.8 8.8L0.8 7.2L0 9.4L-0.8 7.2L-3.8 8.8L-2.6 3.2C-5.2 1.2 -9.2 -0.4 -13.6 -1.2L-18.2 -1.8L-16.6 -3.4L-19.8 -5.2L-17.2 -5.8L-18.8 -8.6L-14 -6.6C-9.2 -5.6 -5.2 -3.6 -2.4 -1.4C-2.6 -3 -1.8 -4.4 0 -4.4Z'

/** Crows over a stretch of sky: where each is, its size and its tilt. */
export function crows(list: { at: P; s: number; rot: number }[]): string {
  return list.map((b) => placed(CROW, b.at, b.s, b.rot)).join('')
}

/**
 * The sky by day, as ink cuts on a paper ground: horizontal gouges whose
 * weight follows `dark(x, y)`, 0 for clear paper and 1 for heavy cloud.
 * Fill with INK over a PAPER rectangle.
 */
export function daySky(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  dark: (x: number, y: number) => number,
  spacing = 6.4,
): string {
  let d = ''
  for (let y = box.y0; y < box.y1; y += spacing) {
    let x = box.x0 + between(r, -30, 0)
    while (x < box.x1) {
      const len = between(r, 26, 104)
      const D = clamp(dark(x + len / 2, y))
      if (r() < 0.12 + D * 1.1)
        d += gouge(
          x,
          y + between(r, -0.7, 0.7),
          x + len,
          y + between(r, -0.7, 0.7),
          0.45 + D * 2.4 * between(r, 0.75, 1.15),
          between(r, -0.6, 0.6),
        )
      x += len + between(r, 8, 30)
    }
  }
  return d
}

/**
 * Trampled ground after rain, as ink on a paper field: short strokes that
 * thicken and lengthen towards the reader (the bottom of `box`), cut in rows
 * that bend with the ruts of carts and feet. Fill with INK over PAPER.
 */
export function trampledGround(
  r: Rng,
  box: { x0: number; x1: number; y0: number; y1: number },
  weight = 1,
): string {
  let d = ''
  for (let y = box.y0 + 3; y < box.y1; y += 4 + (y - box.y0) * 0.05) {
    const t = clamp((y - box.y0) / (box.y1 - box.y0))
    let x = box.x0 + between(r, -20, 0)
    while (x < box.x1) {
      const len = 8 + t * 34 * between(r, 0.6, 1.3)
      if (r() < 0.55 + t * 0.3)
        d += gouge(
          x,
          y + between(r, -1, 1),
          x + len,
          y + between(r, -1.4, 1.4),
          (0.45 + t * 1.6) * weight * between(r, 0.7, 1.2),
          between(r, -0.8, 0.8),
        )
      x += len + between(r, 6, 22) * (1.2 - t * 0.4)
    }
  }
  return d
}

/**
 * A distant host along a line of ground: a dense band of helmets, a forest of
 * lances above it, and pennons on some of them, all in ink. `y(x)` is the
 * ground the host stands on; `h` the height of a man there; `lance` how far
 * the lances rise above the helmets. Returns the solid band (fill INK, with a
 * thin PAPER stroke to lift it off a dark ground), the lances (stroke INK)
 * and the pennons (fill INK).
 */
export function farHost(
  r: Rng,
  x0: number,
  x1: number,
  y: (x: number) => number,
  o: { h: number; lance: number; every?: number; pennons?: number; rows?: number },
): { band: string; lances: string; pennons: string } {
  const every = o.every ?? o.h * 0.42
  const rows = o.rows ?? 2
  let band = ''
  let lances = ''
  let pennons = ''
  for (let row = 0; row < rows; row++) {
    const lift = (rows - 1 - row) * o.h * 0.34
    const hh = o.h * (1 - (rows - 1 - row) * 0.12)
    // The band: a run of helmets along the top, the bodies merged below.
    const top: P[] = []
    for (let x = x0 + between(r, 0, every); x < x1; x += every * between(r, 0.85, 1.15)) {
      const g = y(x) - lift
      const head = g - hh
      const hw = every * 0.34
      top.push([x - hw, head + hw * 0.9])
      top.push([x - hw * 0.7, head + hw * 0.1])
      top.push([x, head - hw * 0.35])
      top.push([x + hw * 0.7, head + hw * 0.1])
      top.push([x + hw, head + hw * 0.9])
      if (r() < 0.7) {
        const lean = between(r, -0.08, 0.08)
        const lx = x + every * 0.3
        const ly = head + hh * 0.35
        const tx = lx + Math.sin(lean) * (hh * 0.65 + o.lance)
        const ty = ly - Math.cos(lean) * (hh * 0.65 + o.lance)
        lances += `M${n(lx)} ${n(ly)}L${n(tx)} ${n(ty)}`
        if (r() < (o.pennons ?? 0.18)) {
          const pl = o.h * 0.5
          pennons += `M${n(tx)} ${n(ty)}L${n(tx + pl)} ${n(ty + pl * 0.22)}L${n(tx)} ${n(ty + pl * 0.42)}Z`
        }
      }
    }
    if (top.length < 2) continue
    const first = top[0]
    const last = top[top.length - 1]
    band +=
      `M${n(first[0])} ${n(y(first[0]) - lift + 1)}` +
      top.map(([px, py]) => `L${n(px)} ${n(py)}`).join('') +
      `L${n(last[0])} ${n(y(last[0]) - lift + 1)}Z`
  }
  return { band, lances, pennons }
}

/**
 * A banner on its staff, flying out on the wind towards `dir` (1 to the right,
 * -1 to the left) from the head of the staff at `top`. The cloth is `len`
 * long and `depth` deep, and waves; with `ragged` its fly is torn into
 * tongues, as the English banners are ("Their ragged curtains poorly are let
 * loose", 4.2), and with `tail` it ends in a swallowtail, as a standard does.
 *
 * `at(u, v)` maps a point of the cloth (u along it from the staff, v down
 * it, both 0 to 1) onto the drawing, so a device can be laid on it that
 * waves with it: a cross, a lily, a stripe.
 */
export function banner(
  r: Rng,
  top: P,
  o: {
    len: number
    depth: number
    dir?: 1 | -1
    ragged?: boolean
    tail?: boolean
    wave?: number
    droop?: number
  },
): { cloth: string; at: (u: number, v: number) => P } {
  const dir = o.dir ?? 1
  const amp = o.wave ?? o.depth * 0.12
  const droop = o.droop ?? o.depth * 0.18
  const at = (u: number, v: number): P => [
    top[0] + dir * u * o.len,
    top[1] + v * o.depth + droop * u * u + amp * Math.sin(u * Math.PI * 2.2),
  ]
  const steps = 14
  let d = `M${n(top[0])} ${n(top[1])}`
  for (let i = 1; i <= steps; i++) {
    const [x, y] = at(i / steps, 0)
    d += `L${n(x)} ${n(y)}`
  }
  if (o.tail) {
    const [mx, my] = at(0.78, 0.5)
    const [bx, by] = at(1, 1)
    d += `L${n(mx)} ${n(my)}L${n(bx)} ${n(by)}`
  } else if (o.ragged) {
    // tongues of torn cloth down the fly, each a different length
    const k = 5
    for (let i = 0; i < k; i++) {
      const v0 = i / k
      const v1 = (i + 1) / k
      const back = between(r, 0.06, 0.2)
      const [ax, ay] = at(1 - back * 0.4, v0 + (v1 - v0) * 0.3)
      const [bx, by] = at(1 - back, v0 + (v1 - v0) * 0.55)
      const [cx, cy] = at(1 - between(r, 0, 0.05), v1)
      d += `L${n(ax)} ${n(ay)}L${n(bx)} ${n(by)}L${n(cx)} ${n(cy)}`
    }
  } else {
    const [bx, by] = at(1, 1)
    d += `L${n(bx)} ${n(by)}`
  }
  for (let i = steps - 1; i >= 0; i--) {
    const [x, y] = at(i / steps, 1)
    d += `L${n(x)} ${n(y)}`
  }
  return { cloth: d + 'Z', at }
}

/**
 * A band across a banner's cloth, from (u0, v0) to (u1, v1) in the cloth's own
 * coordinates, `w` wide in v (a bar along the cloth) or in u (a bar down it):
 * the arms of a cross, which wave with the cloth.
 */
export function clothBand(
  at: (u: number, v: number) => P,
  along: boolean,
  from: number,
  to: number,
  centre: number,
  w: number,
): string {
  const steps = 10
  const pts: P[] = []
  const back: P[] = []
  for (let i = 0; i <= steps; i++) {
    const t = from + ((to - from) * i) / steps
    if (along) {
      pts.push(at(t, centre - w / 2))
      back.push(at(t, centre + w / 2))
    } else {
      pts.push(at(centre - w / 2, t))
      back.push(at(centre + w / 2, t))
    }
  }
  const all = [...pts, ...back.reverse()]
  return 'M' + all.map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}

/** A staff: a tapering wedge from its foot to its head, with a small finial. */
export function staff(foot: P, top: P, w = 3.4): string {
  const [x, y] = top
  return wedge(foot[0], foot[1], x, y, w, w * 0.7) + gouge(x, y + 2, x, y - 7, w * 0.55)
}

// ── The luggage of the English camp ──────────────────────────────────────────
// "I must stay with the lackeys with the luggage of our camp" (the Boy, 4.4);
// "they have burned and carried away all that was in the King's tent" (Gower,
// 4.7). The camp is tents and two-wheeled baggage carts, the plain ones of the
// century; nothing in it is described, and nothing is taken from a film.

/**
 * A two-wheeled baggage cart side on, its shafts down to the ground in front,
 * with the foot of its wheel on y 0 and its middle on x 0, about 70 long, in
 * its own frame: `body` and `shafts` are ink, `slats` the paper cuts of its
 * boards, and the wheel is `WHEEL` placed at `wheelAt`.
 */
export const CART = {
  body: 'M-34 -36L30 -36L28 -18L-32 -18Z',
  rail: 'M-35 -40L31 -40L31 -36L-35 -36Z',
  shafts: 'M28 -24L62 -4L60 0L26 -20Z',
  slats:
    gouge(-28, -27.4, 24, -27.4, 1) + gouge(-14, -34, -14, -21, 0.9) + gouge(8, -34, 8, -21, 0.9),
  wheelAt: [-4, -15] as P,
}
/** A cart wheel of radius 15 centred on (0, 0): the rim and hub in ink, the spaces between six spokes cut in paper. */
export const WHEEL = (() => {
  let gaps = ''
  for (let k = 0; k < 6; k++) {
    const a0 = deg(k * 60 + 8)
    const a1 = deg(k * 60 + 52)
    const am = deg(k * 60 + 30)
    gaps +=
      `M${n(Math.cos(a0) * 4.6)} ${n(Math.sin(a0) * 4.6)}` +
      `L${n(Math.cos(a0) * 11.4)} ${n(Math.sin(a0) * 11.4)}` +
      `Q${n(Math.cos(am) * 12.6)} ${n(Math.sin(am) * 12.6)} ${n(Math.cos(a1) * 11.4)} ${n(Math.sin(a1) * 11.4)}` +
      `L${n(Math.cos(a1) * 4.6)} ${n(Math.sin(a1) * 4.6)}Z`
  }
  return { disc: 'M-15 0a15 15 0 1 0 30 0a15 15 0 1 0 -30 0Z', gaps }
})()

/**
 * The camp far off along a line of ground: a few small tents and carts, all
 * ink with a paper edge, for a panel where it is only glimpsed. Returns the
 * shapes and the pole tops, so a pennon can be flown from one.
 */
export function farLuggage(r: Rng, x0: number, x1: number, ground: number, s = 1) {
  let shapes = ''
  let cuts = ''
  const poles: P[] = []
  let x = x0
  let tent = true
  while (x < x1) {
    if (tent) {
      const h = between(r, 20, 28) * s
      const w = h * between(r, 0.62, 0.8)
      shapes += `M${n(x - w)} ${ground}L${n(x - w * 0.7)} ${n(ground - h * 0.5)}L${n(x)} ${n(ground - h)}L${n(x + w * 0.7)} ${n(ground - h * 0.5)}L${n(x + w)} ${ground}Z`
      shapes += wedge(x, ground - h + 1, x, ground - h - 6 * s, 1.6 * s, 1.2 * s)
      cuts += `M${n(x - 2.4 * s)} ${ground}L${n(x)} ${n(ground - h * 0.55)}L${n(x + 2.4 * s)} ${ground}Z`
      poles.push([x, ground - h - 6 * s])
      x += w * 2 + between(r, 4, 12) * s
    } else {
      const k = 0.36 * s
      const at = (px: number, py: number) => `${n(x + px * k)} ${n(ground + py * k)}`
      shapes += `M${at(-34, -36)}L${at(30, -36)}L${at(28, -18)}L${at(-32, -18)}Z`
      shapes += `M${at(28, -24)}L${at(62, -4)}L${at(60, 0)}L${at(26, -20)}Z`
      const [wx, wy] = [x - 4 * k, ground - 15 * k]
      shapes += `M${n(wx - 15 * k)} ${n(wy)}a${n(15 * k)} ${n(15 * k)} 0 1 0 ${n(30 * k)} 0a${n(15 * k)} ${n(15 * k)} 0 1 0 ${n(-30 * k)} 0Z`
      cuts +=
        gouge(wx - 9 * k, wy, wx + 9 * k, wy, 0.8 * s) +
        gouge(wx, wy - 9 * k, wx, wy + 9 * k, 0.8 * s)
      x += 64 * k + between(r, 6, 14) * s
    }
    tent = r() < 0.5 ? !tent : tent
  }
  return { shapes, cuts, poles }
}

/**
 * A horseman far off, side on and facing right, his lance upright with a
 * pennon: "the horsemen on yond hill" (Henry, 4.7). About 44 long and 60 high
 * to the lance's head, the hoofs on y 0, centred on x 0. `body` is the horse
 * and rider (fill INK): the horse's neck arched forward to a head with an ear
 * and a muzzle, so that it reads as a horse (the first cut, with its neck
 * straight up, read as a camel, 9 October 2026), and the rider in a pointed
 * bascinet. `legs` is the horse's legs and tail, the rider's leg and arm and
 * the lance (stroke INK), for placing with `placed`.
 */
export const HORSEMAN = {
  body:
    'M-14.6 -18.6C-15 -21.6 -11.4 -23.2 -6.4 -22.8L6.6 -22.8C9.4 -23 11.6 -24.6 13.4 -27.4L16.4 -32.2L16.8 -35.6L18.8 -33.2C21 -32.2 22.8 -29.8 24.4 -27.2L25.4 -25.2C25 -23.8 23.6 -23.4 22.4 -24L19.2 -25.8C17.8 -23.4 16.6 -20.6 15.2 -17.6C13.4 -14.4 10.4 -12.6 5.4 -12.4L-8 -12.4C-12.4 -12.6 -14.4 -15 -14.6 -18.6Z' +
    'M-3.6 -21.8L-2.4 -33.4L2.8 -33.4L3.8 -21.8Z' +
    'M-2.4 -35C-2.4 -38.4 -0.6 -40.6 0.4 -41.8C1.4 -40.6 3 -38.4 3 -35C3 -33.6 1.8 -33 0.3 -33C-1.2 -33 -2.4 -33.6 -2.4 -35Z' +
    'M7.4 -60L16 -57.4L7.6 -54.8Z',
  legs:
    'M10.8 -14L12.6 -0.6M7.6 -13L6.2 -0.6M-7.4 -13.2L-8.2 -0.6M-11.4 -14.4L-13.4 -0.6' +
    'M-14.4 -19.6C-17.6 -17.6 -18.8 -13.6 -19 -9.4M0.4 -22L2.6 -14.4M2.6 -30L6.2 -24M4.4 -14L7.4 -60',
}

/**
 * Smoke going up from a fire at `from`, cut as the sky is: a column of short
 * horizontal gouges in ink, close together and heavy low down where it is
 * thick, wider and thinner as it climbs and leans with the wind (`lean` units
 * across for each unit up). Fill INK on the pale sky.
 */
export function smoke(r: Rng, from: P, o: { rise: number; lean: number; width?: number }): string {
  let d = ''
  const w0 = o.width ?? 14
  for (let up = 0; up < o.rise; up += 3.6) {
    const t = up / o.rise
    const cx = from[0] + o.lean * up + Math.sin(t * 9 + 1.3) * (2 + t * 8)
    const half = w0 / 2 + t * 46
    const cy = from[1] - up
    let x = cx - half + between(r, -4, 4)
    while (x < cx + half) {
      const len = between(r, 6, 16) * (0.8 + t)
      const edge = 1 - Math.abs(x + len / 2 - cx) / half
      if (r() < 0.35 + edge * (1 - t * 0.6) * 1.2)
        d += gouge(
          x,
          cy + between(r, -0.6, 0.6),
          x + len,
          cy + between(r, -0.6, 0.6),
          0.7 + edge * (1 - t * 0.7) * 2.2,
        )
      x += len + between(r, 1.6, 5) + t * 5
    }
  }
  return d
}

/**
 * The King's tent after the French runaways: "they have burned and carried
 * away all that was in the King's tent" (Gower, 4.7). A great round tent with
 * the near half of its canvas burned away to a ragged, charred edge, so that
 * its pole stands bare; a torn flap hangs from the peak. What is left is
 * charred, so it is cut in ink, a black shape against the sky. In its own
 * frame: the middle of its foot at (0, 0), about 150 across and 130 high.
 * `canvas` (fill INK) is the half still standing and the hanging flap, `seams`
 * its seams, its hem and the holes scorched along the burned edge (fill
 * PAPER), `pole` the bare pole (fill INK, edged in paper). The fire still
 * burning at its foot is drawn by the panel, in the spot colour.
 */
export const BURNT_TENT = {
  canvas:
    'M6 -124C-14 -102 -44 -70 -76 -38L-80 -2L-12 -2L-16 -14L-8 -22L-14 -36L-4 -46L-10 -60L0 -72L-4 -86L4 -98L1 -112Z' +
    'M8 -122C16 -110 22 -96 25 -80L21 -84L18 -72C16 -90 12 -106 6 -118Z',
  seams:
    wedge(-70, -6, 3, -118, 2.2, 0.4) +
    wedge(-50, -6, 3, -118, 2, 0.4) +
    wedge(-30, -8, 3, -116, 1.6, 0.4) +
    // the hem along its foot, and the scorched holes near the burned edge
    gouge(-78, -10, -16, -9, 1.4) +
    'M-24 -30L-20 -38L-18 -28ZM-16 -64L-12 -72L-11 -62ZM-6 -92L-3 -100L-2 -90Z',
  pole: wedge(-2, 0, 10, -132, 4.6, 3.2) + 'M7 -134L14 -133L13 -128L7 -129Z',
}

/** An open chest side on, its lid thrown back and nothing in it, the foot of its front at (0, 0), about 46 long. */
export const EMPTY_CHEST = {
  box: 'M-23 0L-23 -24L23 -24L23 0Z',
  lid: 'M-23 -24L-30 -48L-26 -50L-19 -26Z',
  inside: 'M-19 -22L19 -22L19 -14L-19 -14Z',
  bands: gouge(-17, -24, -17, 0, 1.1) + gouge(17, -24, 17, 0, 1.1) + gouge(-21, -8, 21, -8, 0.9),
}

/**
 * The King's pavilion by day, for "Before King Henry's pavilion" (4.8): a
 * great round tent of pale canvas, its wall and conical roof cut in paper with
 * an ink edge, the seams and the shadowed side in ink, a scalloped valance
 * under the eaves and the door open on the dark inside. In its own frame: the
 * middle of the foot of its wall at (0, 0), about 170 across and 170 high to
 * the head of its pole (POLE_TOP, where the panel flies its pennon).
 */
export const PAVILION = (() => {
  const wall = 'M-80 0L-77 -66L77 -66L80 0Z'
  const roof = 'M-90 -62C-62 -80 -30 -108 0 -146C30 -108 62 -80 90 -62Z'
  let valance = 'M-90 -66L90 -66L90 -60'
  for (let i = 0; i < 12; i++) {
    const x = 90 - 15 * i
    valance += `Q${n(x - 7.5)} -48 ${n(x - 15)} -60`
  }
  valance += 'Z'
  let seams = ''
  for (let x = -70; x <= 70; x += 14) {
    // darker on the far (left) side, away from the light
    const away = clamp((70 - x) / 140)
    seams += wedge(x, -2, x * 0.96, -64, 0.6 + away * 2.6, 0.5)
  }
  for (let x = -84; x <= 84; x += 14) {
    const away = clamp((84 - x) / 168)
    seams += wedge(x, -68, 0, -142, 0.7 + away * 2.8, 0.2)
  }
  return {
    wall,
    roof,
    valance,
    seams,
    door: 'M-22 0L-6 -64L6 -64L22 0Z',
    flaps: 'M-22 0L-6 -64L-13 -36L-34 0ZM22 0L6 -64L13 -36L34 0Z',
    pole: 'M0 -146V-178',
  }
})()
export const POLE_TOP: P = [0, -178]
