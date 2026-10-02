import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 4, Scene 2: "The dark room", the fifteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "A Room in Olivia's House." Maria: "put on this gown and this beard; make
 *   him believe thou art Sir Topas the curate." So Feste is the kit's Sir
 *   Topas: a curate's long dark gown, a close black cap and a long false
 *   beard cut in paper. He says "I am not tall enough to become the function
 *   well": his head comes well below the face at the grate.
 * - "Enter Sir Toby and Maria." Toby: "Jove bless thee, Master Parson", "To
 *   him, Sir Topas", "Well said, Master Parson." So the two of them stand
 *   further back in the room, watching. Feste greets Toby with "Bonos dies":
 *   it is day, and the room is lit by a window in its far wall.
 * - "Malvolio within." ... "They have laid me here in hideous darkness."
 *   The play puts him in a dark place off the stage and does not say how it
 *   is shut. The plainest way to show a man shut in the dark is the door of a
 *   closet, bolted, with a small barred grate in it: behind the bars it is
 *   black, and Malvolio's face is at the grate, his hands round the bars.
 * - Maria: "He sees thee not." So Feste stands to one side of the door, his
 *   head well below Malvolio's, looking up at the grate, one finger raised as
 *   he plays the parson; Malvolio, at the grate, looks out past him.
 *
 * DIGNITY. Malvolio is drawn as a man wronged, not as a madman: upright, his
 * face composed in profile, his beard and hair as the kit cuts them in every
 * panel, and his hands round two of the bars, each finger cut free of the
 * next so that they read as hands holding on, never as fists. Nothing about
 * him is a caricature of madness or of mental illness, and nobody in the
 * picture points or laughs at him. No spot colour: the scene's subject is
 * the absence of light.
 *
 * The people are cut from ./people.tsx; nothing is taken from a film,
 * television or stage production.
 *
 * Seeds: 1501 (the back wall), 1502 (the wainscot), 1503 (the near wall), 1504
 * (the door's planks).
 */

const W = 860
const H = 340
/** The near wall, with the door of the dark room in it, starts here. */
const NEAR_X = 520
/** The back wall's foot, further off, where the floor begins. */
const BACK_FLOOR = 250
/** The door of the dark room, and the grate in it. */
const DOOR = { x0: 592, x1: 806 }
const GRATE = { x0: 630, x1: 774, y0: 26, y1: 140 }
const BARS = [662, 706, 750]
/** Where people stand: Feste close, by the door; Toby and Maria further back. */
const FESTE: P = [476, 338]
const TOBY: P = [150, 300]
const MARIA: P = [244, 300]
/** Malvolio behind the door: his scale, and where his feet would be, under the door. */
const MAL_S = 1.45
const MAL_AT: P = [742 + 3 * MAL_S, 80 + 160 * MAL_S]

type Marks = {
  backWall: string
  wains: string
  floor: string
  nearWall: string
  planks: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit from the window in the back wall, on the left; the
  // plaster is paper, and its shadow is cut in ink, heavier away from the
  // light.
  const shade = (x: number, y: number) => clamp(Math.hypot((x - 90) * 0.7, y - 90) / 560)
  const backWall = gougeField(
    rng(1501),
    { x0: 0, x1: NEAR_X, y0: 4, y1: 186 },
    (x, y) => shade(x, y) * 0.8,
    { spacing: 6.2, len: [20, 70], gap: [10, 30], max: 2.2 },
  )
  let wains = ''
  const w = rng(1502)
  for (let x = 6; x < NEAR_X; x += 11)
    wains += wedge(
      x + between(w, -0.6, 0.6),
      196,
      x + between(w, -0.6, 0.6),
      BACK_FLOOR - 3,
      0.7,
      1 + shade(x, 220) * 2.4,
    )
  // floorboards running from the back wall towards the reader
  let floor = ''
  for (let xt = -300; xt < NEAR_X + 200; xt += 26) {
    const xb = 260 + (xt - 260) * ((H - 120) / (BACK_FLOOR - 120))
    floor += wedge(xt, BACK_FLOOR, xb, H + 4, 0.8, 2.8)
  }
  // the near wall: lit plaster, its shadow deepening to the right
  const nearWall = gougeField(
    rng(1503),
    { x0: NEAR_X, x1: W, y0: 4, y1: H },
    (x) => clamp(0.15 + (x - NEAR_X) / 700),
    { spacing: 6, len: [16, 60], gap: [8, 26], max: 2.4 },
  )
  // the door's planks, lit from the left, and their grain
  const d = rng(1504)
  let planks = ''
  for (let x = DOOR.x0 + 30; x < DOOR.x1 - 8; x += 30)
    planks += gouge(x, -4, x + between(d, -0.5, 0.5), H + 4, 1.4)
  for (let k = 0; k < 34; k++) {
    const x = between(d, DOOR.x0 + 8, DOOR.x1 - 10)
    const y = between(d, 0, H - 20)
    if (x > GRATE.x0 - 10 && x < GRATE.x1 + 10 && y > GRATE.y0 - 30 && y < GRATE.y1 + 6) continue
    planks += gouge(x, y, x + between(d, -1, 1), y + between(d, 16, 36), 0.6)
  }
  cached = { backWall, wains, floor, nearWall, planks }
  return cached
}

/**
 * A hand round an upright bar, seen from outside: four fingers wrapped across
 * the bar, each cut free of the next by a paper gap so the hand reads as
 * fingers holding on, never as a fist; the thumb comes round below them.
 * `side` is the side the fingertips end on (-1 left, 1 right). Stroke it,
 * paper wide and then ink narrow.
 */
function handOnBar(bx: number, y: number, side: 1 | -1) {
  let fingers = ''
  for (let i = 0; i < 4; i++) {
    const fy = y + i * 6.6
    const len = i === 3 ? 10 : 12.5
    fingers += `M${n(bx - side * 8)} ${n(fy)}L${n(bx + side * (len - 8))} ${n(fy + 0.8)}`
  }
  const thumb = `M${n(bx - side * 9)} ${n(y + 27)}L${n(bx + side * 2)} ${n(y + 24.6)}`
  return fingers + thumb
}
const HANDS = handOnBar(BARS[0], 90, -1) + handOnBar(BARS[2], 94, 1)
const BAR_LINES = BARS.map((x) => `M${x} ${GRATE.y0}V${GRATE.y1}`).join('')
const BAR_SHADE = BARS.map((x) => `M${x + 2.2} ${GRATE.y0}V${GRATE.y1}`).join('')

function TheDarkRoom({ uid }: ArtProps) {
  const m = marks()
  const grateClip = `${uid}-grate`
  return (
    <>
      <defs>
        <clipPath id={grateClip}>
          <rect
            x={GRATE.x0}
            y={GRATE.y0}
            width={GRATE.x1 - GRATE.x0}
            height={GRATE.y1 - GRATE.y0}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [700, 90], push: 1.04 })}>
        {/* the room in daylight: the back wall and its window, the wainscot and the boards */}
        <rect x={0} y={0} width={NEAR_X} height={H} fill={PAPER} />
        <path d={m.backWall} fill={INK} />
        <rect x={0} y={186} width={NEAR_X} height={10} fill={INK} />
        <path d={gouge(0, 190, NEAR_X, 190, 1.2)} fill={PAPER} />
        <path d={m.wains} fill={INK} />
        <rect x={0} y={BACK_FLOOR - 3} width={NEAR_X} height={4} fill={INK} />
        <path d={m.floor} fill={INK} />
        <rect x={40} y={78} width={96} height={104} fill={INK} />
        <rect x={48} y={86} width={80} height={88} fill={PAPER} />
        <path d="M88 86V174M48 130H128" stroke={INK} strokeWidth={5} />
        <path d="M48 108H128M48 152H128M68 86V174M108 86V174" stroke={INK} strokeWidth={1.2} />

        {/* Sir Toby and Maria, further back, watching the sport */}
        <Person
          at={TOBY}
          pose={{
            look: 'sir-toby',
            body: { neck: [8, -138], hip: [0, -70] },
            head: { rot: 6 },
            far: {
              pts: [
                [2, -128],
                [-16, -104],
                [-2, -84],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [12, -128],
                [4, -104],
                [12, -86],
              ],
              hand: 'mitt',
            },
          }}
        />
        <Person
          at={MARIA}
          pose={{
            look: 'maria',
            far: {
              pts: [
                [-4, -124],
                [-2, -104],
                [10, -100],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -124],
                [8, -104],
                [-2, -100],
              ],
              hand: 'mitt',
              deg: 180,
            },
          }}
        />

        {/* the near wall, and the door of the dark room in it, shut and bolted */}
        <rect x={NEAR_X} y={0} width={W - NEAR_X} height={H} fill={PAPER} />
        <path d={m.nearWall} fill={INK} />
        <rect x={NEAR_X - 3} y={0} width={5} height={H} fill={INK} />
        <rect x={DOOR.x0 - 12} y={-10} width={DOOR.x1 - DOOR.x0 + 24} height={H + 20} fill={INK} />
        <rect x={DOOR.x0} y={-10} width={DOOR.x1 - DOOR.x0} height={H + 20} fill={PAPER} />
        <path d={m.planks} fill={INK} />
        <rect x={DOOR.x0} y={176} width={DOOR.x1 - DOOR.x0 - 36} height={10} fill={INK} />
        <circle cx={DOOR.x1 - 36} cy={181} r={7} fill={INK} />
        <rect x={DOOR.x1 - 30} y={214} width={24} height={30} fill={INK} />
        <rect
          x={DOOR.x1 - 38}
          y={224}
          width={52}
          height={7}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />

        {/* the grate, the dark within, and Malvolio at it */}
        <rect
          x={GRATE.x0 - 8}
          y={GRATE.y0 - 8}
          width={GRATE.x1 - GRATE.x0 + 16}
          height={GRATE.y1 - GRATE.y0 + 16}
          fill={INK}
        />
        <g clipPath={`url(#${grateClip})`}>
          <Person
            at={MAL_AT}
            scale={MAL_S}
            flip
            pose={{
              look: 'malvolio',
              head: { rot: -4 },
              far: {
                pts: [
                  [-4, -128],
                  [-12, -110],
                  [-10, -96],
                ],
                hand: 'none',
              },
              near: {
                pts: [
                  [5, -128],
                  [14, -110],
                  [12, -96],
                ],
                hand: 'none',
              },
            }}
          />
        </g>
        <g fill="none" strokeLinecap="round">
          <path d={BAR_LINES} stroke={PAPER} strokeWidth={5.4} />
          <path d={BAR_SHADE} stroke={INK} strokeWidth={1.4} />
          {/* his hands round the bars */}
          <path d={HANDS} stroke={PAPER} strokeWidth={9} />
          <path d={HANDS} stroke={INK} strokeWidth={5} />
        </g>

        {/* Feste as Sir Topas, to one side of the door, his head well below Malvolio's */}
        <Person
          at={FESTE}
          scale={1.42}
          pose={{
            look: 'sir-topas',
            head: { rot: -16 },
            far: {
              pts: [
                [-4, -126],
                [-6, -100],
                [6, -92],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -126],
                [28, -114],
                [46, -134],
              ],
              hand: 'finger',
              deg: -66,
            },
          }}
        />
      </g>
    </>
  )
}

export const theDarkRoom: LinocutArt = { width: W, height: H, Draw: TheDarkRoom }
