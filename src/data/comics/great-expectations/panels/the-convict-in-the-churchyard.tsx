import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'

/**
 * Chapter 1: "The convict in the churchyard", the first moment in the
 * guide's timeline, at the instant the convict starts up. Every detail is from
 * the chapter in the held text (src/data/full-texts/great-expectations.ts):
 *
 * - "Ours was the marsh country, down by the river"; "a memorable raw
 *   afternoon towards evening"; "this bleak place overgrown with nettles was
 *   the churchyard"; "the dark flat wilderness beyond the churchyard,
 *   intersected with dykes and mounds and gates, with scattered cattle
 *   feeding on it, was the marshes; and that the low leaden line beyond was
 *   the river". So the churchyard is rank with nettles, and beyond its low
 *   wall the marshes lie flat and dark, cut with dykes, a gate and a mound,
 *   with cattle on them, and the river is a pale level line.
 * - "the sky was just a row of long angry red lines and dense black lines
 *   intermixed"; "the beacon by which the sailors steered—like an unhooped
 *   cask upon a pole". The sky is printed as that row of lines, the angry ones
 *   in the spot colour, low and clear of every face, and the beacon stands on
 *   the river's edge. The gibbet that stands beside it in the same sentence
 *   is left out: it is not needed to tell the moment, and the panel is for
 *   children.
 * - "Philip Pirrip, late of this parish, and also Georgiana wife of the
 *   above"; "five little stone lozenges, each about a foot and a half long,
 *   which were arranged in a neat row beside their grave"; "the small bundle
 *   of shivers growing afraid of it all and beginning to cry, was Pip". So
 *   Pip stands at his parents' headstone, the five little stones in a row
 *   beside the grave, a tear on his cheek, his eyes wide and his brows up as
 *   he starts back from the voice, one hand up before him and the other flung
 *   back.
 * - "a man started up from among the graves at the side of the church porch";
 *   "A fearful man, all in coarse grey, with a great iron on his leg. A man
 *   with no hat, and with broken shoes, and with an old rag tied round his
 *   head"; "who limped, and shivered, and glared and growled". So the convict
 *   is caught rising from a crouch among the stones just beside the porch,
 *   one knee still on the ground, pushing himself up on a headstone, his
 *   other arm clutched across his chest against the cold: coarse grey,
 *   bareheaded but for the rag, the leg-iron plain on his shin, glaring at
 *   the boy across the graves. The church has its porch and its steeple ("I
 *   saw the steeple under my feet") with the weather-cock the church jumps
 *   over.
 *
 * SAFEGUARDING (../index.ts). The convict has only just risen, and the graves
 * stand between him and the boy: he does not touch Pip, and no hand reaches
 * for him. Nothing in the chapter after this instant (the seizing, the
 * turning upside down, the threats) is drawn, and the quotation is the
 * narrator's description of the man, not his threat.
 *
 * Seeds: 1101 (the sky), 1102 (the marshes), 1103 (the church's stone), 1104
 * (the nettles and grass), 1105 (the wall), 1106 (the lines of the sky).
 */

const W = 860
const H = 340
/** The far edge of the marshes, and the wall of the churchyard. */
const HORIZON = 214
const WALL = { top: 248, foot: 262 }
/** The church, at the left: its tower and spire, the nave and the porch. */
const TOWER = { x0: 24, x1: 88, top: 80, tip: 36 }
const NAVE = { x0: 88, x1: 204, ridge: 130, eave: 160 }
const PORCH = { x0: 150, x1: 226, eave: 198, gable: 164 }
/** Pip's parents' headstone, and the five little stones beside their grave. */
const STONE = { x0: 578, x1: 644, top: 194, foot: 306 }

type Marks = {
  sky: string
  skyLines: string
  redLines: string
  marsh: string
  dykes: string
  church: string
  porch: string
  slates: string
  wall: string
  wallJoints: string
  ground: string
  nettles: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky, light low down where the sun has gone, dark above.
  const skyLight = (_x: number, y: number) => clamp((y - 6) / (HORIZON - 96))
  const sky = gougeField(rng(1101), { x0: 0, x1: W, y0: 2, y1: HORIZON }, skyLight, {
    spacing: 6.2,
    len: [70, 220],
    gap: [3, 10],
    max: 6.8,
  })
  // "dense black lines": long level ribbons across the light lower sky.
  const s = rng(1106)
  let skyLines = ''
  for (let k = 0; k < 8; k++) {
    const y = 124 + k * 11 + between(s, -2, 2)
    const x = between(s, -40, 640)
    const len = between(s, 140, 360)
    skyLines += ribbon(
      wave(x, x + len, y, 0.6, 140, between(s, 0, 6), 18),
      between(s, 1.2, 2.4),
      0.7,
    )
  }
  // "long angry red lines": low in the sky, between and beyond the figures,
  // well clear of every face.
  const red: [number, number, number][] = [
    [100, 232, 112],
    [380, 560, 104],
    [664, 852, 172],
    [700, 860, 188],
    [650, 800, 156],
  ]
  let redLines = ''
  for (const [a, b, y] of red)
    redLines += ribbon(wave(a, b, y, 0.5, 120, between(s, 0, 6), 16), between(s, 1.8, 2.6), 0.6)
  // The marshes: dark, with level dykes catching the last light.
  const m = rng(1102)
  const marshLight = (_x: number, y: number) => clamp(0.32 - (y - HORIZON) / 90)
  const marsh = gougeField(m, { x0: 0, x1: W, y0: HORIZON + 3, y1: WALL.top }, marshLight, {
    spacing: 5.4,
    len: [30, 110],
    gap: [8, 30],
    max: 2,
  })
  let dykes = ''
  for (const [a, b, y] of [
    [230, 470, 222],
    [520, 860, 226],
    [300, 640, 234],
    [660, 860, 240],
  ] as [number, number, number][])
    dykes += gouge(a, y, b, y + between(m, -0.6, 0.6), 0.9)
  // The church's dressed stone, in the shadow of the evening: short courses,
  // cut lighter on the porch, which stands nearest.
  const c = rng(1103)
  const church = gougeField(c, { x0: TOWER.x0, x1: NAVE.x1, y0: TOWER.top + 4, y1: H }, () => 0.2, {
    spacing: 11,
    len: [8, 18],
    gap: [8, 16],
    max: 1.4,
  })
  const porch = gougeField(
    c,
    { x0: PORCH.x0 + 3, x1: PORCH.x1 - 3, y0: PORCH.eave + 6, y1: H },
    () => 0.42,
    {
      spacing: 10,
      len: [8, 16],
      gap: [5, 10],
      max: 1.5,
    },
  )
  let slates = ''
  for (let y = NAVE.ridge + 6; y < NAVE.eave - 2; y += 6)
    slates += gouge(NAVE.x0 + between(c, 2, 10), y, NAVE.x1 - between(c, 2, 10), y, 0.7)
  // The low wall: its top lit, its face cut in courses.
  const w = rng(1105)
  const wall = gougeField(w, { x0: PORCH.x1, x1: W, y0: WALL.top + 4, y1: WALL.foot }, () => 0.42, {
    spacing: 4.6,
    len: [8, 26],
    gap: [3, 9],
    max: 1.6,
  })
  let wallJoints = ''
  for (let x = PORCH.x1 + 10; x < W; x += between(w, 16, 28))
    wallJoints += `M${n(x)} ${WALL.top + 3}V${n(WALL.foot - between(w, 0, 3))}`
  // The rank ground of the churchyard: tufts of grass cut in paper, and nettles.
  const g = rng(1104)
  const groundLight = (_x: number, y: number) => clamp(0.3 - (y - WALL.foot) / 220)
  let ground = gougeField(g, { x0: 0, x1: W, y0: WALL.foot + 4, y1: H }, groundLight, {
    spacing: 8,
    len: [8, 20],
    gap: [10, 30],
    max: 1.4,
  })
  for (let k = 0; k < 44; k++) {
    const x = between(g, 0, W)
    const y = between(g, WALL.foot + 6, H - 4)
    const hgt = between(g, 6, 14)
    for (let j = -1; j <= 1; j++)
      ground += gouge(x, y, x + j * between(g, 2, 5), y - hgt * between(g, 0.7, 1), 0.7)
  }
  let nettles = ''
  const nettle = (x: number, y: number, hgt: number) => {
    nettles += gouge(x, y, x + between(g, -3, 3), y - hgt, 0.9)
    for (let t = 0.3; t < 1; t += 0.22) {
      const sx = x + t * between(g, -2, 2)
      const sy = y - hgt * t
      const L = 7 + (1 - t) * 6
      nettles +=
        gouge(sx, sy, sx - L, sy - L * 0.55, 1.6, 0.6) +
        gouge(sx, sy, sx + L, sy - L * 0.6, 1.6, -0.6)
    }
    nettles += gouge(x, y - hgt, x + between(g, -2, 2), y - hgt - 8, 1.4)
  }
  for (const [x0, x1, y] of [
    [6, 140, 334],
    [384, 520, 336],
    [470, 520, 300],
    [690, 860, 338],
    [800, 856, 300],
  ] as [number, number, number][])
    for (let x = x0; x < x1; x += between(g, 18, 30))
      nettle(x, y + between(g, -6, 4), between(g, 18, 34))
  cached = {
    sky,
    skyLines,
    redLines,
    marsh,
    dykes,
    church,
    porch,
    slates,
    wall,
    wallJoints,
    ground,
    nettles,
  }
  return cached
}

/** An old headstone with a rounded top. */
function headstone(x0: number, x1: number, top: number, foot: number) {
  const r = (x1 - x0) / 2
  return `M${x0} ${foot}V${top + r}A${r} ${r} 0 0 1 ${x1} ${top + r}V${foot}Z`
}

/** A beast grazing, its head down, facing right, at (x, y) its feet: tiny, far off. */
const COW =
  'M0 0V-6H-1.6V-12C-1.6 -14 0.6 -15 3 -15H14C16.4 -15 18 -13.4 19 -11.6L23 -8.4C24 -7.6 23.4 -6 22 -6.4L19 -7.6L18 -6V0H16V-6H4V0Z'

function ConvictInTheChurchyard({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sky`
  const { x0: tx0, x1: tx1, top: tt, tip } = TOWER
  const mid = (tx0 + tx1) / 2
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
        {/* the evening sky: "long angry red lines and dense black lines intermixed" */}
        <g clipPath={`url(#${clip})`}>
          <path d={m.sky} fill={PAPER} />
          <g className="lc-drift-r" style={timing({ dur: 3.4 })}>
            <path d={m.skyLines} fill={INK} />
            <path d={m.redLines} fill={RED} />
          </g>
        </g>

        {/* the river, "the low leaden line beyond", and the beacon on its edge */}
        <rect x={360} y={HORIZON - 4} width={W - 360} height={4} fill={PAPER} />
        <path d={`M360 ${HORIZON - 1.5}H${W}`} stroke={INK} strokeWidth={1} />
        <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
          <rect x={785} y={166} width={3} height={HORIZON - 166} />
          <path d="M778 150C778 146 796 146 796 150L798 166C798 170 776 170 776 166Z" />
        </g>
        <path d="M779 157H795" stroke={PAPER} strokeWidth={0.9} />

        {/* the marshes: dykes, a gate, a mound, and scattered cattle feeding */}
        <rect x={0} y={HORIZON} width={W} height={WALL.top - HORIZON + 2} fill={INK} />
        <path d={m.marsh} fill={PAPER} />
        <path d={m.dykes} fill={PAPER} />
        <path
          d="M650 236V226M672 236V226M650 229H672M650 233H672"
          stroke={PAPER}
          strokeWidth={1.3}
        />
        <path d="M430 238Q452 224 476 238Z" fill={INK} stroke={PAPER} strokeWidth={1.1} />
        <g fill={INK} stroke={PAPER} strokeWidth={1}>
          <path d={COW} transform="translate(404 232) scale(0.9)" />
          <path d={COW} transform="translate(706 238) scale(-1 1)" />
          <path d={COW} transform="translate(742 230) scale(0.8)" />
        </g>

        {/* the low wall of the churchyard */}
        <rect
          x={PORCH.x1}
          y={WALL.top}
          width={W - PORCH.x1}
          height={WALL.foot - WALL.top}
          fill={INK}
        />
        <path d={m.wall} fill={PAPER} />
        <path d={m.wallJoints} stroke={INK} strokeWidth={1.2} />
        <rect x={PORCH.x1} y={WALL.top - 2} width={W - PORCH.x1} height={4} fill={PAPER} />

        {/* the ground of the churchyard */}
        <rect x={0} y={WALL.foot} width={W} height={H - WALL.foot} fill={INK} />
        <path d={m.ground} fill={PAPER} />

        {/* the church: the tower and its steeple with the weather-cock */}
        <path d={`M${tx0} ${H}V${tt}H${tx1}V${H}Z`} fill={INK} />
        <path
          d={`M${tx0 - 5} ${tt}L${mid} ${tip}L${tx1 + 5} ${tt}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={gouge(mid - 2, tip + 12, tx0 + 6, tt - 4, 0.9)} fill={PAPER} />
        <path d={`M${mid} ${tip}V24`} stroke={PAPER} strokeWidth={1.4} />
        <path
          d={`M${mid - 7} 21.4C${mid - 4} 17.6 ${mid + 1} 17.4 ${mid + 3} 20C${mid + 5} 18.2 ${mid + 8} 18.6 ${mid + 8} 21.4L${mid + 6} 24.4H${mid - 5}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        {/* the nave: its slated roof and its wall */}
        <path d={`M${NAVE.x0} ${H}V${NAVE.eave}H${NAVE.x1}V${H}Z`} fill={INK} />
        <path
          d={`M${NAVE.x0} ${NAVE.eave}L${NAVE.x0} ${NAVE.ridge}H${NAVE.x1 - 14}L${NAVE.x1 + 4} ${NAVE.eave}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.slates} fill={PAPER} />
        <path d={m.church} fill={PAPER} />
        <path
          d={`M${tx0} ${tt}V${H}M${tx1} ${tt}V${NAVE.ridge}M${NAVE.x0} ${NAVE.eave}H${NAVE.x1 + 4}`}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          fill="none"
        />
        {/* the tower's slit window and the nave's lancet */}
        <path d="M49 104Q56 92 63 104V132H49Z" fill={INK} stroke={PAPER} strokeWidth={1.5} />
        <path d="M110 196Q120 178 130 196V236H110Z" fill={INK} stroke={PAPER} strokeWidth={1.5} />
        <path d="M120 182V236M110 208H130" stroke={PAPER} strokeWidth={1} />
        {/* the porch: a gabled roof over a dark arched doorway */}
        <rect
          x={PORCH.x0}
          y={PORCH.eave}
          width={PORCH.x1 - PORCH.x0}
          height={H - PORCH.eave}
          fill={INK}
        />
        <path d={m.porch} fill={PAPER} />
        <path
          d={`M${PORCH.x0 - 7} ${PORCH.eave + 2}L${(PORCH.x0 + PORCH.x1) / 2} ${PORCH.gable}L${PORCH.x1 + 7} ${PORCH.eave + 2}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={`M${PORCH.x0} ${PORCH.eave + 2}V${H}M${PORCH.x1} ${PORCH.eave + 2}V${H}`}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M168 304V236Q188 212 208 236V304Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path d="M176 304V240Q188 224 200 240V304" fill="none" stroke={PAPER} strokeWidth={1} />

        {/* the graves among which he starts up, at the side of the porch */}
        <g fill={PAPER} stroke={INK} strokeWidth={1.4}>
          <path d={headstone(240, 282, 230, 318)} transform="rotate(-4 261 318)" />
          <path d={headstone(368, 398, 256, 318)} transform="rotate(8 383 318)" />
          <path d="M432 320V270H460V320Z" transform="rotate(-4 446 320)" />
          <path d={headstone(806, 840, 246, 318)} transform="rotate(5 823 318)" />
        </g>
        <path
          d={
            gouge(248, 264, 274, 262, 0.7) +
            gouge(250, 274, 272, 273, 0.7) +
            gouge(374, 278, 392, 280, 0.6) +
            gouge(438, 286, 454, 286, 0.6) +
            gouge(812, 268, 834, 270, 0.6)
          }
          fill={INK}
        />
        {/* mounds of the graves */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
          <path d="M224 322Q262 304 300 322Z" />
          <path d="M350 324Q392 306 440 324Z" />
          <path d="M620 316Q680 298 744 316Z" />
        </g>

        {/* "Philip Pirrip, late of this parish, and also Georgiana wife of the above" */}
        <path
          d={headstone(STONE.x0, STONE.x1, STONE.top, STONE.foot)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.6}
        />
        <g fill={INK} fontFamily={SERIF} fontSize={9} letterSpacing={0.6}>
          <text x={597} y={240} textLength={38} lengthAdjust="spacingAndGlyphs">
            PHILIP
          </text>
          <text x={597} y={253} textLength={38} lengthAdjust="spacingAndGlyphs">
            PIRRIP
          </text>
        </g>
        <path d={gouge(598, 264, 634, 264, 0.6) + gouge(602, 274, 630, 274, 0.6)} fill={INK} />
        {/* "five little stone lozenges ... arranged in a neat row beside their grave" */}
        <g fill={PAPER} stroke={INK} strokeWidth={1.3}>
          {[656, 680, 704, 728, 752].map((x) => (
            <path key={x} d={`M${x} 320L${x + 10} 313L${x + 20} 320L${x + 10} 327Z`} />
          ))}
        </g>

        {/* the nettles */}
        <path d={m.nettles} fill={PAPER} />

        {/* the convict, starting up from among the graves */}
        <Person
          at={[300, 324]}
          scale={1.24}
          pose={{
            look: 'magwitch',
            body: { neck: [8, -112], hip: [0, -48] },
            head: { at: [19, -133], rot: 8 },
            iron: 'near',
            legs: {
              far: [
                [-3, -48],
                [-8, -6],
                [-36, -4],
              ],
              near: [
                [3, -48],
                [30, -50],
                [31, -3],
              ],
            },
            far: {
              pts: [
                [2, -106],
                [-16, -88],
                [-30, -72],
              ],
              hand: 'mitt',
              deg: 112,
            },
            near: {
              pts: [
                [10, -106],
                [27, -86],
                [12, -94],
              ],
              hand: 'mitt',
              deg: 196,
            },
          }}
        >
          {/* "broken shoes": the toe of the boot split */}
          <path d="M38 -4.6L41.6 -1.6L42.6 -5.4Z" fill={PAPER} />
        </Person>

        {/* Pip, at his parents' grave, starting back in fright */}
        <Person
          at={[552, 330]}
          scale={1.36}
          flip
          pose={{
            look: 'pip',
            age: 'child',
            eye: 'wide',
            brow: 'up',
            tear: true,
            body: { neck: [-6, -84], hip: [0, -46] },
            head: { at: [-4, -101], rot: -10 },
            legs: {
              far: [
                [-2, -46],
                [-10, -24],
                [-18, -3],
              ],
              near: [
                [2, -46],
                [8, -24],
                [10, -3],
              ],
            },
            far: {
              pts: [
                [-9, -80],
                [-19, -64],
                [-24, -48],
              ],
              hand: 'open',
              deg: 112,
              size: 12,
              spread: 20,
            },
            near: {
              pts: [
                [-3, -80],
                [10, -70],
                [19, -84],
              ],
              hand: 'open',
              deg: -52,
              thumb: -1,
              size: 13,
              spread: 20,
            },
          }}
        />
      </g>
    </>
  )
}

export const theConvictInTheChurchyard: LinocutArt = {
  width: W,
  height: H,
  Draw: ConvictInTheChurchyard,
}
