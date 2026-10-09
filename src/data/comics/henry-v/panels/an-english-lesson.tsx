import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { FLEUR, Person, type P } from './people'

/**
 * Act 3, Scene 4: "An English lesson", the eleventh moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1521, src/data/full-texts/henry-v.ts), whose setting is "The
 * French King's palace":
 *
 * - "Enter Katharine and Alice, an old Gentlewoman." Only the two of them are
 *   in the scene, and they are drawn from the kit (./people.tsx): Katharine
 *   with her lit face, her hair loose down her back, the circlet of the
 *   King's children and a gown sprinkled with lilies; Alice in her white veil
 *   and wimple.
 * - "Comment appelez-vous la main en anglais?" "La main? Elle est appelée de
 *   hand." "Et les doigts?" ... "de fingres". So Katharine holds up her own
 *   hand, open, its fingers spread, and looks at it, saying the word, and
 *   Alice leans towards her and points at it as she names it. The arm is bent
 *   and the hand held before her face, never raised straight and flat (which
 *   reads as a salute), and its fingers are cut apart, so it is an open hand
 *   at a glance.
 * - The palace is drawn plainly, as a chamber of 1415: a stone wall, a tall
 *   leaded window between them, so that the hand and the pointing finger are
 *   black against its light, a tiled floor with the window's light lying on
 *   it, and a doorway on the right ("Allons-nous à dîner", the scene's last
 *   words). The spot colour is a hanging on the left wall sprinkled with the
 *   lilies of France, cut in paper: the house the princess belongs to. It is
 *   large and far from any face or hand, so at phone width it stays a hanging.
 *
 * The scene's later words, for the foot and the gown, are the comedy of a
 * word that sounds like a rude French one; Katharine is drawn at her lesson
 * and never in a sexualised way. The quotation is her own recitation, with
 * her slip for "elbow" in it.
 *
 * Seeds: 1101 (wall), 1102 (floor), 1103 (the window's light).
 */

const W = 860
const H = 340
/** Where the floor meets the wall, and where the feet stand. */
const FLOOR = 244
const GROUND = 324

/** The tall leaded window between them: a pointed lancet in the back wall. */
const WIN = { x0: 366, x1: 442, top: 40, spring: 104, sill: 228 }
const WIN_MID = (WIN.x0 + WIN.x1) / 2
const LANCET = `M${WIN.x0} ${WIN.sill}V${WIN.spring}Q${WIN.x0} ${WIN.top + 20} ${WIN_MID} ${WIN.top}Q${WIN.x1} ${WIN.top + 20} ${WIN.x1} ${WIN.spring}V${WIN.sill}Z`
const GLASS = `M${WIN.x0 + 6} ${WIN.sill - 2}V${WIN.spring + 1}Q${WIN.x0 + 6} ${WIN.top + 26} ${WIN_MID} ${WIN.top + 8}Q${WIN.x1 - 6} ${WIN.top + 26} ${WIN.x1 - 6} ${WIN.spring + 1}V${WIN.sill - 2}Z`

/** The hanging on the left wall, and the doorway on the right. */
const HANG = { x0: 60, x1: 184, top: 44, hem: 212 }
const DOOR = { x0: 646, x1: 758, top: 84 }
/** The lit doorway at the far end of the passage beyond it. */
const FAR = { x0: (DOOR.x0 + DOOR.x1) / 2 - 9, x1: (DOOR.x0 + DOOR.x1) / 2 + 9, top: 176 }

const KATHARINE: P = [340, GROUND]
const ALICE: P = [490, GROUND]

type Marks = {
  wall: string
  floorDark: string
  floorLit: string
  pool: string
  leads: string
  glow: string
  hang: string
  hangFolds: string
  lilies: string
  fringe: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The light is the window's: brightest on the wall round it, falling off
  // towards the corners.
  const light = (x: number, y: number) =>
    Math.max(0.04, clamp(1 - Math.hypot((x - WIN_MID) * 0.62, (y - 140) * 1.1) / 250) * 0.95)
  const wall = gougeField(
    rng(1101),
    { x0: 0, x1: W, y0: 6, y1: FLOOR - 6 },
    (x, y) =>
      x > WIN.x0 - 4 && x < WIN.x1 + 4 && y > WIN.top - 4 && y < WIN.sill + 6 ? 0 : light(x, y),
    { spacing: 6.4, len: [16, 64], gap: [6, 22], max: 3.6 },
  )

  // The floor: tiles in perspective towards a point behind the window. The
  // window's light lies on it in a pool that widens towards us; in the pool
  // the tiles are paper with ink joints, outside it ink with paper joints.
  const r = rng(1102)
  const vp: P = [WIN_MID, 40]
  let joints = ''
  for (let xt = -900; xt <= 1800; xt += 46) {
    const k = (H - vp[1]) / (FLOOR - vp[1])
    const xb = vp[0] + (xt - vp[0]) * k
    joints += `M${n(vp[0] + (xt - vp[0]) * ((FLOOR - vp[1]) / (FLOOR - vp[1])))} ${FLOOR}L${n(xb)} ${H}`
  }
  for (let i = 0, y = FLOOR + 6; y < H; i++) {
    joints += `M0 ${n(y)}H${W}`
    y += 7 + i * 4.2
  }
  const pool = `M${WIN.x0 + 4} ${FLOOR}L${WIN.x1 - 4} ${FLOOR}L${WIN.x1 + 120} ${H}L${WIN.x0 - 70} ${H}Z`
  // a few lighter cuts across the dark floor at the pool's edges: the light spreading
  let floorDark = ''
  for (let i = 0; i < 46; i++) {
    const y = between(r, FLOOR + 6, H - 4)
    const t = (y - FLOOR) / (H - FLOOR)
    const edgeL = WIN.x0 + 4 - t * 74
    const edgeR = WIN.x1 - 4 + t * 124
    const left = r() < 0.5
    const x0 = left ? edgeL - between(r, 8, 90) * (0.4 + t) : edgeR + between(r, 4, 30)
    const len = between(r, 10, 40) * (0.5 + t)
    floorDark += gouge(x0, y, x0 + len, y + between(r, -0.6, 0.6), 0.5 + t * 1.2)
  }

  // The window's leads: diamond quarries, and two iron bars across.
  let leads = ''
  for (let k = -12; k <= 12; k++) {
    const x = WIN_MID + k * 12
    leads += `M${x - 90} ${WIN.sill + 40}L${x + 90} ${WIN.sill - 260}`
    leads += `M${x + 90} ${WIN.sill + 40}L${x - 90} ${WIN.sill - 260}`
  }
  // Light spilling from the window over the sill and down the wall below it.
  const g = rng(1103)
  let glow = ''
  for (let i = 0; i < 26; i++) {
    const a = between(g, -0.5, 0.5)
    const len = between(g, 6, 18)
    const x = WIN_MID + between(g, -38, 38)
    const y = WIN.sill + 8 + between(g, 0, 8)
    glow += gouge(x, y, x + a * len, y + len, 0.5 + between(g, 0, 0.9))
  }

  // The hanging: a red cloth on a rod, its hem falling in folds, sprinkled
  // with the lilies of France cut in paper, a fringe along the hem.
  const folds = [HANG.x0, 88, 116, 142, 166, HANG.x1]
  let hang = `M${HANG.x0} ${HANG.top}H${HANG.x1}V${HANG.hem}`
  for (let i = folds.length - 1; i > 0; i--) {
    const a = folds[i]
    const b = folds[i - 1]
    hang += `Q${n((a + b) / 2)} ${HANG.hem + (i % 2 ? 9 : 3)} ${b} ${HANG.hem}`
  }
  hang += 'Z'
  let hangFolds = ''
  for (const x of folds.slice(1, -1))
    hangFolds += wedge(x, HANG.top + 4, x + 1.5, HANG.hem + 4, 0.6, 2.6)
  let lilies = ''
  const place = (d: string, at: P, s: number) =>
    d.replace(
      /(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,
      (_, xs: string, ys: string) => `${n(at[0] + Number(xs) * s)} ${n(at[1] + Number(ys) * s)}`,
    )
  ;[
    [80, 70],
    [122, 70],
    [164, 70],
    [101, 112],
    [143, 112],
    [80, 154],
    [122, 154],
    [164, 154],
    [101, 194],
    [143, 194],
  ].forEach(([x, y]) => (lilies += place(FLEUR, [x, y], 2.1)))
  let fringe = ''
  for (let x = HANG.x0 + 3; x < HANG.x1 - 1; x += 5) {
    const i = folds.findIndex((f) => f >= x)
    const y = HANG.hem + (i % 2 ? 6 : 2) + 2
    fringe += `M${x} ${n(y)}v7`
  }

  // Their shadows, thrown towards us by the window behind them.
  const shadows =
    `M${KATHARINE[0] - 26} ${GROUND + 1}C${KATHARINE[0] - 40} ${H - 6} ${KATHARINE[0] - 50} ${H + 4} ${KATHARINE[0] - 58} ${H + 6}L${KATHARINE[0] + 2} ${H + 6}C${KATHARINE[0] + 6} ${H - 4} ${KATHARINE[0] + 14} ${GROUND + 8} ${KATHARINE[0] + 24} ${GROUND + 1}Z` +
    `M${ALICE[0] - 22} ${GROUND + 1}C${ALICE[0] - 14} ${H - 6} ${ALICE[0] - 4} ${H + 4} ${ALICE[0] + 4} ${H + 6}L${ALICE[0] + 62} ${H + 6}C${ALICE[0] + 48} ${H - 4} ${ALICE[0] + 40} ${GROUND + 8} ${ALICE[0] + 30} ${GROUND + 1}Z`

  cached = {
    wall,
    floorDark,
    floorLit: joints,
    pool,
    leads,
    glow,
    hang,
    hangFolds,
    lilies,
    fringe,
    shadows,
  }
  return cached
}

function EnglishLesson({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass`, pool: `${uid}-pool`, dark: `${uid}-dark` }
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <path d={GLASS} />
        </clipPath>
        <clipPath id={id.pool}>
          <path d={m.pool} />
        </clipPath>
        <clipPath id={id.dark}>
          <path d={`M0 ${FLOOR}H${W}V${H}H0Z${m.pool}`} clipRule="evenodd" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
        {/* the stone wall, lit round the window */}
        <path d={m.wall} fill={PAPER} />

        {/* the floor: dark tiles, and the window's light lying across them */}
        <path d={m.pool} fill={PAPER} />
        <g clipPath={`url(#${id.pool})`}>
          <path d={m.floorLit} stroke={INK} strokeWidth={LINE.carve} fill="none" />
        </g>
        <g clipPath={`url(#${id.dark})`}>
          <path d={m.floorLit} stroke={PAPER} strokeWidth={LINE.fine} fill="none" />
          <path d={m.floorDark} fill={PAPER} />
        </g>
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <path d={m.shadows} fill={INK} />

        {/* the hanging, with the lilies of France */}
        <path
          d={`M${HANG.x0 - 8} ${HANG.top - 4}H${HANG.x1 + 8}`}
          stroke={PAPER}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <path
          d={`M${HANG.x0 - 8} ${HANG.top - 4}H${HANG.x1 + 8}`}
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <circle cx={HANG.x0 - 9} cy={HANG.top - 4} r={4} fill={PAPER} />
        <circle cx={HANG.x1 + 9} cy={HANG.top - 4} r={4} fill={PAPER} />
        <path d={m.hang} fill={RED} stroke={PAPER} strokeWidth={2} strokeLinejoin="round" />
        <path d={m.hangFolds} fill={INK} />
        <path d={m.lilies} fill={PAPER} />
        <path d={m.fringe} stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />

        {/* the leaded window, its light spilling over the sill */}
        <path d={LANCET} fill={PAPER} />
        <path d={GLASS} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.leads} stroke={INK} strokeWidth={LINE.hairline} fill="none" />
          <path
            d={`M${WIN.x0} 120H${WIN.x1}M${WIN.x0} 176H${WIN.x1}`}
            stroke={INK}
            strokeWidth={LINE.carve}
          />
        </g>
        <rect x={WIN.x0 - 10} y={WIN.sill} width={WIN.x1 - WIN.x0 + 20} height={7} fill={PAPER} />
        <rect x={WIN.x0 - 10} y={WIN.sill + 7} width={WIN.x1 - WIN.x0 + 20} height={2} fill={INK} />
        <path d={m.glow} fill={PAPER} />

        {/* the doorway on the right, to the rooms beyond */}
        <path
          d={`M${DOOR.x0} ${FLOOR}V${DOOR.top + 40}Q${DOOR.x0} ${DOOR.top} ${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top - 6}Q${DOOR.x1} ${DOOR.top} ${DOOR.x1} ${DOOR.top + 40}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={7}
        />
        <path
          d={`M${DOOR.x0 + 12} ${FLOOR}V${DOOR.top + 46}Q${DOOR.x0 + 12} ${DOOR.top + 14} ${(DOOR.x0 + DOOR.x1) / 2} ${DOOR.top + 8}Q${DOOR.x1 - 12} ${DOOR.top + 14} ${DOOR.x1 - 12} ${DOOR.top + 46}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* far along the passage, a lit doorway */}
        <path
          d={`M${FAR.x0} 238V${FAR.top + 12}Q${FAR.x0} ${FAR.top + 2} ${(FAR.x0 + FAR.x1) / 2} ${FAR.top}Q${FAR.x1} ${FAR.top + 2} ${FAR.x1} ${FAR.top + 12}V238Z`}
          fill={PAPER}
        />
        <path
          d={`M${DOOR.x0 + 4} ${FLOOR}L${FAR.x0} 238M${DOOR.x1 - 4} ${FLOOR}L${FAR.x1} 238`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* Katharine, her hand held up before her face: "de hand" */}
        <Person
          at={KATHARINE}
          scale={1.55}
          pose={{
            look: 'katharine',
            head: { rot: -3 },
            mouth: 'open',
            far: {
              pts: [
                [-3, -122],
                [-6, -100],
                [-3, -79],
              ],
            },
            near: {
              pts: [
                [3, -122],
                [17, -106],
                [31, -130],
              ],
              hand: 'open',
              deg: -78,
              thumb: -1,
              size: 15,
            },
          }}
        />

        {/* Alice, leaning in, pointing at the hand as she names it */}
        <Person
          at={ALICE}
          scale={1.55}
          flip
          pose={{
            look: 'alice',
            body: { neck: [5, -130] },
            head: { rot: 6 },
            far: {
              pts: [
                [-1, -122],
                [-2, -100],
                [2, -80],
              ],
            },
            near: {
              pts: [
                [7, -121],
                [20, -106],
                [40, -120],
              ],
              hand: 'point',
              deg: -12,
            },
          }}
        />
      </g>
    </>
  )
}

export const englishLesson: LinocutArt = { width: W, height: H, Draw: EnglishLesson }
