import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { FLEUR, Person, gripHand, type P } from './people'

/**
 * Act 5, Scene 2: "Peace and the wooing", the twenty-third moment in the
 * guide's timeline. "France. A royal palace." Every detail is from the scene
 * in the held edition (src/data/full-texts/henry-v.ts, Project Gutenberg
 * #1521):
 *
 * - "Exeunt all except Henry, Katharine and Alice." So three people are in the
 *   room, and they are the kit's (./people.tsx): Henry in his gown with its
 *   collar of fur and his crown; Katharine with her lit face, her hair loose
 *   down her back, the circlet of the French King's children and a gown
 *   sprinkled with the lilies ("my fair flower-de-luce"); Alice in her white
 *   veil and wimple.
 * - "take me by the hand, and say, Harry of England, I am thine". So Henry,
 *   on the left, speaks, his near hand held out low and open towards her from
 *   a bent arm, black against the window between them.
 * - "I cannot tell", "Is it possible dat I should love de enemy of France?"
 *   So Katharine stands apart from him on the other side of the window, her
 *   hands lowered together before her and her eyes cast down: she does not
 *   take the hand. The quotation is her question.
 * - "Madame my interpreter, what says she?" So Alice stands behind her, one
 *   open hand raised before her as she puts the words into English. (It was
 *   first held out towards Katharine's back, which at phone width read as a
 *   hand pushing her towards Henry.)
 * - "Go, uncle Exeter ... go with the King; And take with you free power to
 *   ratify, Augment, or alter", and the French King's "To re-survey them" (the
 *   articles of peace). While the wooing goes on, the council studies the
 *   terms, so through the open door on the right, in the next room, the
 *   French King sits reading the long paper of the articles and Exeter stands
 *   at his side pointing to a line in it: her father's room, behind her.
 * - "Health and fair time of day". It is day, and the light comes from the
 *   window.
 *
 * The palace is cut as the English lesson cuts the French King's palace
 * (./an-english-lesson.tsx), so that the French court looks the same from
 * panel to panel: a wall of dressed stone, a tall leaded window, a tiled floor
 * with the window's light lying on it, and the spot colour as a hanging on the
 * wall sprinkled with the lilies of France cut in paper, the house Katharine
 * is being asked to leave. It is large and far from every face and hand, so at
 * phone width it stays a hanging.
 *
 * Katharine is never drawn in a sexualised way: she is a princess standing
 * apart, her gown loose and high at the neck, and nobody touches her. The
 * kiss is not drawn. Burgundy, Queen Isabel and the other lords who go with
 * the council are left to the words. Nothing is taken from a film, television
 * or stage production. Seeds: 2301 (the wall), 2303 (the window's light).
 */

const W = 860
const H = 340
/** Where the floor meets the wall, and where the feet stand. */
const FLOOR = 242
const GROUND = 326

/** The tall leaded window between Henry and Katharine. */
const WIN = { x0: 356, x1: 440, top: 36, spring: 96, sill: 220 }
const WIN_MID = (WIN.x0 + WIN.x1) / 2
const lancet = (inset: number) =>
  `M${WIN.x0 + inset} ${WIN.sill - inset / 3}V${WIN.spring + inset / 3}` +
  `Q${WIN.x0 + inset} ${WIN.top + 22 + inset} ${WIN_MID} ${WIN.top + inset * 1.3}` +
  `Q${WIN.x1 - inset} ${WIN.top + 22 + inset} ${WIN.x1 - inset} ${WIN.spring + inset / 3}V${WIN.sill - inset / 3}Z`

/** The hanging on the left wall. */
const HANG = { x0: 40, x1: 158, top: 40, hem: 206 }

/** The door on the right, open on the next room, where the council sits. */
const DOOR = { x0: 694, x1: 826, spring: 142, apex: 110 }
const DOOR_MID = (DOOR.x0 + DOOR.x1) / 2
const doorway = (inset: number) =>
  `M${DOOR.x0 + inset} ${FLOOR}V${DOOR.spring}` +
  `Q${DOOR.x0 + inset} ${DOOR.apex + 12 + inset} ${DOOR_MID} ${DOOR.apex + inset}` +
  `Q${DOOR.x1 - inset} ${DOOR.apex + 12 + inset} ${DOOR.x1 - inset} ${DOOR.spring}V${FLOOR}Z`
/** The far room: where its floor meets its far wall. */
const FAR_FLOOR = 222
const FAR_FEET = 238

const HENRY: P = [300, GROUND]
const KATHARINE: P = [494, GROUND]
const ALICE: P = [612, GROUND]
const FRENCH_KING: P = [800, FAR_FEET]
const EXETER: P = [734, FAR_FEET]

type Marks = {
  wall: string
  joints: string
  pool: string
  leads: string
  glow: string
  hang: string
  hangFolds: string
  lilies: string
  fringe: string
  farFloor: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The light is the window's, brightest on the wall round it, with a little
  // from the open door; it falls off towards the corners.
  const light = (x: number, y: number) =>
    Math.max(
      0.04,
      clamp(1 - Math.hypot((x - WIN_MID) * 0.6, (y - 130) * 1.1) / 260) * 0.95,
      clamp(1 - Math.hypot((x - DOOR_MID) * 0.9, (y - 200) * 1.2) / 150) * 0.5,
    )
  const wall = gougeField(
    rng(2301),
    { x0: 0, x1: W, y0: 6, y1: FLOOR - 6 },
    (x, y) => {
      if (x > WIN.x0 - 14 && x < WIN.x1 + 14 && y > WIN.top - 12 && y < WIN.sill + 10) return 0
      if (x > DOOR.x0 - 14 && x < DOOR.x1 + 14 && y > DOOR.apex - 14) return 0
      if (x > HANG.x0 - 8 && x < HANG.x1 + 8 && y > HANG.top - 8 && y < HANG.hem + 14) return 0
      return light(x, y)
    },
    { spacing: 6.4, len: [16, 64], gap: [6, 22], max: 3.6 },
  )

  // The floor: tiles in perspective towards a point behind the window, their
  // joints cut in paper on the dark floor and printed in ink where the
  // window's light lies on it.
  const vp: P = [WIN_MID, 40]
  let joints = ''
  for (let xt = -900; xt <= 1800; xt += 46) {
    const k = (H - vp[1]) / (FLOOR - vp[1])
    joints += `M${n(xt)} ${FLOOR}L${n(vp[0] + (xt - vp[0]) * k)} ${H}`
  }
  for (let i = 0, y = FLOOR + 6; y < H; i++) {
    joints += `M0 ${n(y)}H${W}`
    y += 7 + i * 4.2
  }
  const pool =
    `M${WIN.x0 + 6} ${FLOOR}L${WIN.x1 - 6} ${FLOOR}L${WIN.x1 + 96} ${H}L${WIN.x0 - 64} ${H}Z` +
    `M${DOOR.x0 + 14} ${FLOOR}L${DOOR.x1 - 14} ${FLOOR}L${DOOR.x1 + 30} ${H}L${DOOR.x0 - 40} ${H}Z`

  // The window's leads, in diamond quarries, and the light spilling over the
  // sill and down the wall below it.
  let leads = ''
  for (let k = -14; k <= 14; k++) {
    const x = WIN_MID + k * 12
    leads += `M${x - 100} ${WIN.sill + 40}L${x + 100} ${WIN.sill - 290}`
    leads += `M${x + 100} ${WIN.sill + 40}L${x - 100} ${WIN.sill - 290}`
  }
  const g = rng(2303)
  let glow = ''
  for (let i = 0; i < 24; i++) {
    const a = between(g, -0.5, 0.5)
    const len = between(g, 6, 16)
    const x = WIN_MID + between(g, -36, 36)
    const y = WIN.sill + 9 + between(g, 0, 6)
    glow += gouge(x, y, x + a * len, y + len, 0.5 + between(g, 0, 0.9))
  }

  // The hanging: a red cloth on a rod, its hem falling in folds, sprinkled
  // with the lilies of France cut in paper, a fringe along the hem.
  const folds = [HANG.x0, 70, 99, 128, HANG.x1]
  let hang = `M${HANG.x0} ${HANG.top}H${HANG.x1}V${HANG.hem}`
  for (let i = folds.length - 1; i > 0; i--) {
    const a = folds[i]
    const b = folds[i - 1]
    hang += `Q${n((a + b) / 2)} ${HANG.hem + 9} ${b} ${HANG.hem}`
  }
  hang += 'Z'
  let hangFolds = ''
  for (const x of folds.slice(1, -1))
    hangFolds += gouge(x, HANG.top + 6, x + 0.5, HANG.hem - 1, 1.2, 0.3)
  let lilies = ''
  const place = (cx: number, cy: number, s: number) =>
    FLEUR.replace(
      /(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,
      (_, xs: string, ys: string) => `${n(cx + Number(xs) * s)} ${n(cy + Number(ys) * s)}`,
    )
  for (let row = 0; row < 4; row++) {
    const y = HANG.top + 26 + row * 40
    const xs = row % 2 ? [70, 128] : [55, 99, 143]
    for (const x of xs) lilies += place(x, y, 1.9)
  }
  let fringe = ''
  for (let x = HANG.x0 + 3; x < HANG.x1; x += 5.4) {
    const t = ((x - HANG.x0) % 29) / 29
    const y = HANG.hem + 4 * Math.sin(t * Math.PI) + 2
    fringe += `M${n(x)} ${n(y)}V${n(y + 7)}`
  }

  // The far room's floor, its boards running away from the door.
  let farFloor = ''
  for (let x = DOOR.x0 - 40; x < DOOR.x1 + 40; x += 14)
    farFloor += gouge(x, FAR_FLOOR + 1, DOOR_MID + (x - DOOR_MID) * 1.9, FLOOR, 0.7)

  // The shadows the three cast on the floor, falling towards us.
  let shadows = ''
  for (const [x, w] of [
    [HENRY[0] + 6, 34],
    [KATHARINE[0] - 6, 34],
    [ALICE[0] - 4, 32],
  ] as P[])
    for (let k = 0; k < 3; k++)
      shadows += gouge(
        x - w + k * 4,
        GROUND + 1 + k * 2.6,
        x + w - k * 4,
        GROUND + 1.6 + k * 2.6,
        1.5 - k * 0.3,
      )

  cached = { wall, joints, pool, leads, glow, hang, hangFolds, lilies, fringe, farFloor, shadows }
  return cached
}

/**
 * The articles of peace, in the French King's hands: a long sheet held up
 * before him, its lines of writing ruled across it, in his own frame (facing
 * right before he is turned to face left).
 */
const ARTICLES = 'M30 -118L50 -116L49 -74L29 -76Z'
const ARTICLE_LINES = [-110, -104, -98, -92, -86, -80]
  .map((y) => `M${33} ${y}L${46} ${y + 1.4}`)
  .join('')

function PeaceAndTheWooing({ uid }: ArtProps) {
  const m = marks()
  const id = { glass: `${uid}-glass`, pool: `${uid}-pool`, door: `${uid}-door` }
  return (
    <>
      <defs>
        <clipPath id={id.glass}>
          <path d={lancet(6)} />
        </clipPath>
        <clipPath id={id.pool}>
          <path d={m.pool} />
        </clipPath>
        <clipPath id={id.door}>
          <path d={doorway(8)} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 220], push: 1.03 })}>
        {/* the stone wall, lit from the window */}
        <path d={m.wall} fill={PAPER} />

        {/* the floor: dark tiles with paper joints, the light lying on it */}
        <path d={m.joints} stroke={PAPER} strokeWidth={LINE.fine} fill="none" />
        <g clipPath={`url(#${id.pool})`}>
          <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
          <path d={m.joints} stroke={INK} strokeWidth={LINE.fine} fill="none" />
        </g>
        <path d={`M0 ${FLOOR}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />

        {/* the hanging of France on the left wall */}
        <path
          d={`M${HANG.x0 - 10} ${HANG.top - 4}H${HANG.x1 + 10}`}
          stroke={PAPER}
          strokeWidth={3.4}
          strokeLinecap="round"
        />
        <circle cx={HANG.x0 - 10} cy={HANG.top - 4} r={4} fill={PAPER} />
        <circle cx={HANG.x1 + 10} cy={HANG.top - 4} r={4} fill={PAPER} />
        <path d={m.hang} fill={RED} stroke={PAPER} strokeWidth={2} strokeLinejoin="round" />
        <path d={m.hangFolds} fill={INK} />
        <path d={m.lilies} fill={PAPER} />
        <path d={m.fringe} stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />

        {/* the leaded window, its light spilling over the sill */}
        <path d={lancet(0)} fill={PAPER} />
        <path d={lancet(6)} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.leads} stroke={INK} strokeWidth={LINE.hairline} fill="none" />
          <path
            d={`M${WIN.x0} 118H${WIN.x1}M${WIN.x0} 172H${WIN.x1}`}
            stroke={INK}
            strokeWidth={LINE.carve}
          />
        </g>
        <rect x={WIN.x0 - 10} y={WIN.sill} width={WIN.x1 - WIN.x0 + 20} height={7} fill={PAPER} />
        <rect x={WIN.x0 - 10} y={WIN.sill + 7} width={WIN.x1 - WIN.x0 + 20} height={2} fill={INK} />
        <path d={m.glow} fill={PAPER} />

        {/* the open door, and the next room, where the council reads the articles */}
        <path d={doorway(0)} fill={PAPER} />
        <path d={doorway(8)} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${id.door})`}>
          <path d={`M${DOOR.x0} ${FAR_FLOOR}H${DOOR.x1}`} stroke={INK} strokeWidth={LINE.carve} />
          <path d={m.farFloor} fill={INK} />
          {/* the French King on his chair, the articles in his hands */}
          <path
            d={`M${FRENCH_KING[0] - 4} ${FAR_FEET}V${FAR_FEET - 30}H${FRENCH_KING[0] + 22}V${FAR_FEET}M${FRENCH_KING[0] + 18} ${FAR_FEET - 30}V${FAR_FEET - 64}`}
            stroke={INK}
            strokeWidth={3}
            fill="none"
          />
          <Person
            at={FRENCH_KING}
            scale={0.62}
            flip
            pose={{
              look: 'french-king',
              seated: { seat: 48 },
              eye: 'down',
              head: { rot: 10 },
              far: {
                pts: [
                  [-3, -96],
                  [10, -84],
                  [30, -100],
                ],
                hand: 'none',
              },
              near: {
                pts: [
                  [3, -96],
                  [16, -84],
                  [32, -96],
                ],
                hand: 'none',
              },
            }}
          >
            <path d={ARTICLES} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
            <path d={ARTICLE_LINES} stroke={INK} strokeWidth={1} />
            <path
              d={gripHand([30, -100], -80, 1.1).d + gripHand([32, -96], -84, 1.1).d}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1.2}
            />
          </Person>
          {/* Exeter at his side, pointing to a line */}
          <Person
            at={EXETER}
            scale={0.62}
            pose={{
              look: 'exeter',
              head: { rot: 8 },
              near: {
                pts: [
                  [5, -128],
                  [22, -110],
                  [42, -112],
                ],
                hand: 'point',
                deg: 4,
              },
            }}
          />
        </g>
        <path d={m.shadows} fill={INK} />

        {/* Henry, his hand held out low to her: "take me by the hand" */}
        <Person
          at={HENRY}
          scale={1.24}
          pose={{
            look: 'henry',
            mouth: 'open',
            head: { rot: 2 },
            far: {
              pts: [
                [-3, -130],
                [-6, -104],
                [-4, -80],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [15, -102],
                [40, -91],
              ],
              hand: 'open',
              deg: -6,
              thumb: -1,
            },
          }}
        />

        {/* Katharine, apart from him, her hands lowered together and her eyes cast down */}
        <Person
          at={KATHARINE}
          scale={1.25}
          flip
          pose={{
            look: 'katharine',
            eye: 'down',
            head: { rot: 8 },
            far: {
              pts: [
                [-3, -122],
                [-1, -100],
                [9, -91],
              ],
              deg: 56,
            },
            near: {
              pts: [
                [3, -122],
                [6, -100],
                [12, -92],
              ],
              deg: 62,
            },
          }}
        />

        {/* Alice, putting the words into English */}
        <Person
          at={ALICE}
          scale={1.24}
          flip
          pose={{
            look: 'alice',
            mouth: 'open',
            far: {
              pts: [
                [-1, -124],
                [-2, -102],
                [2, -82],
              ],
            },
            near: {
              pts: [
                [5, -124],
                [12, -102],
                [23, -110],
              ],
              hand: 'open',
              deg: -48,
              thumb: -1,
              size: 13.5,
            },
          }}
        />
      </g>
    </>
  )
}

export const peaceAndTheWooing: LinocutArt = { width: W, height: H, Draw: PeaceAndTheWooing }
