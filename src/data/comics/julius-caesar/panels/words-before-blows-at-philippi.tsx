import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 5, Scene 1: "Words before blows at Philippi", the thirteenth moment in
 * the guide's timeline. The scene runs from the generals' parley to Brutus
 * and Cassius's farewell; the panel draws the farewell, the moment of its
 * quotation, when Antony and Octavius have gone back to their army ("Exeunt
 * Octavius, Antony and their Army"). Every detail is from the scene (the held
 * edition, Project Gutenberg #1522):
 *
 * - "The plains of Philippi"; "You said the enemy would not come down, But
 *   keep the hills and upper regions. It proves not so". So Brutus and
 *   Cassius's army has come down from the hills behind it onto the plain, and
 *   the enemy waits far off across it.
 * - "Their bloody sign of battle is hung out". So a banner hangs over their
 *   army in the spot colour: the sign of battle, the one red thing in the
 *   panel.
 * - Cassius to Messala: "in their steads do ravens, crows, and kites Fly o'er
 *   our heads, and downward look on us, As we were sickly prey". So the sky
 *   over the army is full of birds: ravens and crows with fanned tails, kites
 *   with forked ones. "This morning are they fled away": it is morning.
 * - "For ever, and for ever, farewell, Cassius." "For ever and for ever
 *   farewell, Brutus." So the two generals clasp hands in the foreground,
 *   face to face. They are the kit's Brutus and Cassius (./people.tsx),
 *   bareheaded, in the armour and cloak it gives the generals at Philippi.
 *
 * No sword is drawn: the play's deaths at Philippi are by the sword, and the
 * kit draws none in Act 5. The soldiers of the army are the kit's soldiers in
 * small, cut as a rank of helmets, shields and spears. Nothing is taken from a
 * film or stage production. Seeds: 1301 (the sky and the field), 1302 (the
 * ranks).
 */

const W = 860
const H = 340
const HORIZON = 206

/** A raven or a crow in flight, wings spread, centred on (0, 0), about 38 across. */
const RAVEN =
  'M0 -1C-3 -4 -7 -6 -12 -6.4C-15 -6.6 -17 -5.6 -19 -4L-15.6 -3.4L-18.4 -1.6L-14.6 -1.4L-16.4 0.6L-12.4 0C-8 0.4 -4 1.6 -1.6 3.6L-2.6 8L0 6.6L2.6 8L1.6 3.6C4 1.6 8 0.4 12.4 0L16.4 0.6L14.6 -1.4L18.4 -1.6L15.6 -3.4L19 -4C17 -5.6 15 -6.6 12 -6.4C7 -6 3 -4 0 -1Z'
/** A kite: longer, angled wings and a forked tail. */
const KITE =
  'M0 -1.4C-4 -4.6 -10 -7 -17 -6.6L-21 -5L-17.4 -3.6L-20 -2L-16 -1.8L-17.6 0L-12 -0.2C-8 0 -4 1.2 -1.6 3.4L-4.6 10.4L0 7L4.6 10.4L1.6 3.4C4 1.2 8 0 12 -0.2L17.6 0L16 -1.8L20 -2L17.4 -3.6L21 -5L17 -6.6C10 -7 4 -4.6 0 -1.4Z'

/** The birds over the army: where each is, its size, its tilt, and whether it is a kite. */
const BIRDS: { at: P; s: number; rot: number; kite?: boolean }[] = [
  { at: [292, 30], s: 1.5, rot: -8, kite: true },
  { at: [372, 54], s: 1.15, rot: 6 },
  { at: [180, 80], s: 1.05, rot: 12 },
  { at: [412, 70], s: 1.3, rot: -14 },
  { at: [500, 36], s: 1.1, rot: 4, kite: true },
  { at: [118, 34], s: 0.95, rot: -4 },
  { at: [578, 84], s: 0.9, rot: 10 },
  { at: [292, 112], s: 0.85, rot: -18 },
  { at: [60, 92], s: 0.8, rot: 8, kite: true },
  { at: [636, 40], s: 0.8, rot: -6 },
  { at: [446, 128], s: 0.75, rot: 16 },
  { at: [216, 140], s: 0.7, rot: -10 },
]

/** A path drawn round (0, 0), moved to `at`, scaled and turned. */
function placed(d: string, at: P, s: number, rot: number) {
  const c = Math.cos(deg(rot))
  const si = Math.sin(deg(rot))
  return d.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, xs: string, ys: string) => {
    const x = Number(xs) * s
    const y = Number(ys) * s
    return `${n(at[0] + x * c - y * si)} ${n(at[1] + x * si + y * c)}`
  })
}

type Marks = {
  sky: string
  hills: string
  hillCuts: string
  field: string
  ranks: string
  rankCuts: string
  spears: string
  enemy: string
  birds: string
}

/** The hills the army came down from, behind it on the left. */
const HILLS =
  'M-6 170C40 150 96 132 156 130C206 128 246 146 292 162C324 172 356 182 392 190L470 202L540 206H-6Z'

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1301)
  // morning sky: darker overhead, paler at the horizon
  let sky = ''
  for (let y = 6; y < HORIZON - 24; y += 6) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 30, 110)
      const D = clamp(0.66 - y / 280)
      if (r() < D * 1.2)
        sky += gouge(x, y + between(r, -0.6, 0.6), x + len, y + between(r, -0.6, 0.6), 0.3 + D * 2)
      x += len + between(r, 6, 26)
    }
  }
  let hillCuts = ''
  for (let x = -6; x < 560; x += 3.4) hillCuts += `M${n(x)} 124L${n(x - 22)} 210`
  let field = ''
  for (let i = 0; i < 120; i++) {
    const t = Math.pow(r(), 0.8)
    const y = HORIZON + 6 + (H - HORIZON - 10) * t
    const x = between(r, 0, W)
    const len = 6 + t * 20
    field += gouge(x, y, x + len, y + between(r, -1, 1), 0.5 + t * 1.4)
  }
  // Their army: two ranks of the kit's soldiers in small, each a helmet with
  // its crest, a tall curved shield with its boss, the legs below it, and a
  // spear upright beside him.
  const q = rng(1302)
  let ranks = ''
  let rankCuts = ''
  let spears = ''
  const rows = [
    { y: 212, s: 0.62, x0: 8, x1: 300 },
    { y: 232, s: 0.8, x0: -4, x1: 286 },
  ]
  for (const row of rows) {
    const s = row.s
    for (let x = row.x0; x < row.x1; x += 25 * s) {
      const xx = x + between(q, -1.4, 1.4)
      const y = row.y
      // legs, shield, head, helmet and crest
      ranks += `M${n(xx - 5 * s)} ${n(y)}h${n(3.4 * s)}v${n(-16 * s)}h${n(-3.4 * s)}Z`
      ranks += `M${n(xx + 2 * s)} ${n(y)}h${n(3.4 * s)}v${n(-16 * s)}h${n(-3.4 * s)}Z`
      ranks += `M${n(xx - 10 * s)} ${n(y - 14 * s)}C${n(xx - 11 * s)} ${n(y - 30 * s)} ${n(xx - 11 * s)} ${n(y - 40 * s)} ${n(xx - 10 * s)} ${n(y - 52 * s)}L${n(xx + 10 * s)} ${n(y - 52 * s)}C${n(xx + 11 * s)} ${n(y - 40 * s)} ${n(xx + 11 * s)} ${n(y - 30 * s)} ${n(xx + 10 * s)} ${n(y - 14 * s)}Z`
      ranks += `M${n(xx - 7 * s)} ${n(y - 58 * s)}a${n(7 * s)} ${n(7.4 * s)} 0 0 1 ${n(14 * s)} 0v${n(6 * s)}h${n(-14 * s)}Z`
      ranks += `M${n(xx - 6 * s)} ${n(y - 64 * s)}q${n(6 * s)} ${n(-7 * s)} ${n(13 * s)} ${n(-1 * s)}l${n(-2 * s)} ${n(3 * s)}q${n(-5 * s)} ${n(-3 * s)} ${n(-9 * s)} ${n(1.6 * s)}Z`
      rankCuts += gouge(xx - 8 * s, y - 50 * s, xx - 8 * s, y - 16 * s, 0.9 * s)
      rankCuts += `M${n(xx - 2.2 * s)} ${n(y - 33 * s)}a${n(2.2 * s)} ${n(2.2 * s)} 0 1 0 ${n(4.4 * s)} 0a${n(2.2 * s)} ${n(2.2 * s)} 0 1 0 ${n(-4.4 * s)} 0Z`
      rankCuts += gouge(xx - 7 * s, y - 52.6 * s, xx + 7 * s, y - 52.6 * s, 0.8 * s)
      if (q() < 0.7) spears += `M${n(xx + 13 * s)} ${n(y - 2 * s)}V${n(y - 96 * s)}`
    }
  }
  // the enemy, far off across the plain, with their standards
  let enemy = ''
  for (let x = 610; x < 856; x += 4.6) {
    enemy += `M${n(x)} ${HORIZON + 1}v-6`
    if (q() < 0.45) enemy += `M${n(x + 1)} ${HORIZON - 5}v-11`
  }
  for (const x of [652, 724, 802])
    enemy += `M${x} ${HORIZON - 4}V${HORIZON - 30}M${x - 5} ${HORIZON - 28}h10v8h-10Z`
  let birds = ''
  for (const b of BIRDS) birds += placed(b.kite ? KITE : RAVEN, b.at, b.s, b.rot)
  cached = { sky, hills: HILLS, hillCuts, field, ranks, rankCuts, spears, enemy, birds }
  return cached
}

/** Where the two generals stand, and how big they are. */
const BRUTUS_AT: P = [344, 322]
const CASSIUS_AT: P = [446, 322]
const SCALE = 1.2

function WordsBeforeBlows({ uid }: ArtProps) {
  const m = marks()
  const id = { hills: `${uid}-hills` }
  return (
    <>
      <defs>
        <clipPath id={id.hills}>
          <path d={m.hills} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 220], push: 1.03 })}>
        {/* the morning sky, the hills and the plain */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.hills} fill={PAPER} />
        <g clipPath={`url(#${id.hills})`}>
          <path d={m.hillCuts} stroke={INK} strokeWidth={LINE.fine} />
        </g>
        <path d={m.hills} fill="none" stroke={INK} strokeWidth={1.6} />
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.field} fill={INK} />
        <path d={m.enemy} stroke={INK} strokeWidth={1.5} fill={INK} />

        {/* their army, and the bloody sign of battle hung out over it */}
        <path d={m.spears} stroke={INK} strokeWidth={1.8} />
        <path d="M232 214V44" stroke={PAPER} strokeWidth={6.4} />
        <path d="M232 214V44" stroke={INK} strokeWidth={3.6} />
        <path d="M212 50H252" stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
        <path d="M212 50H252" stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
        <path d="M215 52H249V100L232 92L215 100Z" fill={RED} />
        <path d={m.ranks} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
        <path d={m.rankCuts} fill={PAPER} />

        {/* ravens, crows and kites over their heads */}
        <path d={m.birds} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />

        {/* Brutus and Cassius, hand in hand: "For ever, and for ever, farewell" */}
        <Person
          pose={{
            look: 'cassius',
            dress: 'armour',
            near: {
              pts: [
                [5, -130],
                [16, -108],
                [34, -103],
              ],
              hand: 'grip',
              deg: -4,
            },
          }}
          at={CASSIUS_AT}
          scale={SCALE}
          flip
        />
        <Person
          pose={{
            look: 'brutus',
            dress: 'armour',
            far: {
              pts: [
                [-4, -131],
                [12, -108],
                [32, -104],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
            near: {
              pts: [
                [5, -130],
                [11, -106],
                [17, -86],
              ],
              hand: 'mitt',
            },
          }}
          at={BRUTUS_AT}
          scale={SCALE}
        />
      </g>
    </>
  )
}

export const wordsBeforeBlows: LinocutArt = { width: W, height: H, Draw: WordsBeforeBlows }
