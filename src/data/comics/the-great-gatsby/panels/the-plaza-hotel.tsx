import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { GatsbysCar } from './gatsbys-car'
import { Person, type P } from './people'

/**
 * Chapter VII: "The Plaza Hotel", the eighth moment in the guide's timeline.
 * Its line, "Her voice is full of money", is not said at the Plaza: Gatsby
 * says it to Nick on the Buchanans' drive at East Egg, before they all drive
 * into New York. The guide's moment begins there ("The Buchanans' house in
 * East Egg, then a suite at the Plaza Hotel"), so the panel draws the line
 * where it is spoken, with Gatsby's car waiting to take them to town. The
 * suite itself is left to the words: drawn with this line on it, the picture
 * would put Gatsby's words in the wrong room. Every detail is from the held
 * text (the 1925 first edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "The next day was broiling, almost the last, certainly the warmest, of
 *   the summer." So the sky is bare paper scored with the sun's rays from
 *   the top right corner, where it blazes.
 * - "Daisy's voice got us to our feet and out on to the blazing gravel
 *   drive." "They went up-stairs to get ready while we three men stood there
 *   shuffling the hot pebbles with our feet. A silver curve of the moon
 *   hovered already in the western sky." So the drive is pale gravel, and a
 *   thin crescent moon hangs in the hot sky.
 * - "'Shall we take anything to drink?' called Daisy from an upper window.
 *   'I'll get some whiskey,' answered Tom. He went inside. Gatsby turned to
 *   me rigidly: 'I can't say anything in his house, old sport.' 'She's got
 *   an indiscreet voice,' I remarked. 'It's full of—' I hesitated. 'Her voice
 *   is full of money,' he said suddenly." So Tom is gone indoors and is not
 *   drawn; Daisy, in white with her short dark hair, leans at an upper
 *   window; and on the drive below Gatsby is turned to Nick, the two of them
 *   face to face. "High in a white palace the king's daughter, the golden
 *   girl" is the image it gives Nick: Daisy high in the house above them.
 * - The house is the one Chapter I gives: "a cheerful red-and-white Georgian
 *   Colonial mansion ... drifting up the side in bright vines ... The front
 *   was broken by a line of French windows". So it is brick with white trim,
 *   a white portico, tall French windows along the ground floor, sash
 *   windows above, and vines climbing its end. Its brick is cut in ink, not
 *   printed red, so that the print's one red is Gatsby's suit and the eye
 *   goes to him.
 * - "'Shall we all go in my car?' suggested Gatsby. He felt the hot, green
 *   leather of the seat." So his car stands on the drive behind them: the
 *   shared drawing in ./gatsbys-car.tsx, from its Chapter IV description.
 * - "'An Oxford man!' He was incredulous. 'Like hell he is! He wears a pink
 *   suit.'" (Tom, on the road to town that afternoon.) So Gatsby wears the
 *   pink suit, printed in the spot colour, the kit's `dress: 'red'`
 *   (./people.tsx): a whole suit, cut with its lapels and the paper of the
 *   shirt and the ink of the tie at the neck, so it reads as clothes at
 *   phone width. Nick is in his dark suit.
 *
 * No ray of the sun runs behind the two men, where a stray line would read
 * as something said, or by a hand as something held. Nothing is taken from
 * a film, television or stage production. Seeds: 801 (the sun's rays), 802
 * (the gravel), 803 (the vines).
 */

const W = 860
const H = 340
/** The foot of the house front, where the drive begins. */
const BASE = 246
/** The house: its ends, its cornice and the ridge of its roof. */
const HOUSE = { x0: 14, x1: 424, cornice: 70, ridge: 26 }
/** The portico in the middle of the front. */
const PORCH = { x0: 172, x1: 266, top: 128 }
/** The upper window Daisy calls from. */
const DAISY_WIN = { x: 352, y: 84, w: 40, h: 56 }
const NICK_AT: P = [440, 318]
const GATSBY_AT: P = [512, 314]

type Marks = {
  sky: string
  bricks: string
  gravel: string
  vines: string
  vineLeaves: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "The next day was broiling, almost the last, certainly the warmest, of
  // the summer": the sky is the bare paper, scored with the sun's rays in
  // ink from the corner where it blazes.
  const r = rng(801)
  let sky = ''
  const SUN: P = [W + 40, -40]
  for (let a = 96; a < 178; a += between(r, 3.2, 5.2)) {
    const ang = deg(a)
    let rad = between(r, 90, 150)
    while (rad < 820) {
      const len = between(r, 40, 120)
      // No ray runs behind the two men, head or body: by a head a stray line
      // reads as something said, and by a hand as something held. (Kept off
      // their heads alone at first, the rays ran on behind their bodies, and
      // one ended beside Gatsby's hand like a stick he was holding, 9
      // October 2026.) Tested along the whole ray, not at its middle only.
      let behind = false
      for (let k = 0, steps = Math.ceil(len / 6); k <= steps && !behind; k++) {
        const x = SUN[0] + Math.cos(ang) * (rad + (len * k) / steps)
        const y = SUN[1] + Math.sin(ang) * (rad + (len * k) / steps)
        behind = Math.hypot((x - 476) / 110, (y - 140) / 70) < 1 || (x > 404 && x < 552 && y > 100)
      }
      if (behind) {
        rad += len + between(r, 20, 60)
        continue
      }
      sky += wedge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        0.3 + rad / 500,
        0.3 + (rad + len) / 500,
      )
      rad += len + between(r, 20, 60)
    }
  }

  // Brick, "a cheerful red-and-white Georgian Colonial mansion" (Chapter I):
  // courses of ink with paper joints, because the one red of this print is
  // kept for Gatsby's pink suit.
  let bricks = ''
  for (let y = HOUSE.cornice + 6, k = 0; y < BASE; y += 5.2, k++) {
    bricks += `M${HOUSE.x0} ${n(y)}H${HOUSE.x1}`
    for (let x = HOUSE.x0 + (k % 2 ? 6 : 0); x < HOUSE.x1; x += 12) bricks += `M${n(x)} ${n(y)}v5.2`
  }

  // "the blazing gravel drive", "the hot pebbles": pale gravel with specks.
  const g = rng(802)
  let gravel = ''
  for (let i = 0; i < 520; i++) {
    const y = BASE + 6 + Math.pow(g(), 0.8) * (H - BASE - 6)
    const x = between(g, 0, W)
    const near = (y - BASE) / (H - BASE)
    const len = 1 + near * 3
    gravel += gouge(x, y, x + len, y + between(g, -0.4, 0.4), 0.3 + near * 0.8)
  }

  // "drifting up the side in bright vines": vines climbing the house's end.
  const v = rng(803)
  let vines = ''
  let vineLeaves = ''
  for (let k = 0; k < 5; k++) {
    let x = HOUSE.x1 - 3 - k * 4.4
    let y = BASE
    vines += `M${n(x)} ${n(y)}`
    const tall = between(v, 80, 170)
    while (y > BASE - tall) {
      x = clamp(x + between(v, -4, 4), DAISY_WIN.x + DAISY_WIN.w + 10, HOUSE.x1 - 2)
      y -= between(v, 7, 13)
      vines += `L${n(x)} ${n(y)}`
      if (v() < 0.7) vineLeaves += gouge(x, y, x + between(v, -7, 7), y - between(v, 2, 5), 1.6)
    }
  }

  cached = { sky, bricks, gravel, vines, vineLeaves }
  return cached
}

/**
 * A French window, "a line of French windows" (Chapter I): a pair of tall
 * glazed doors to the ground, in a white frame, `w` by `h`.
 */
function FrenchWindow({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  let bars = `M${x + w / 2} ${y}V${y + h}`
  for (let k = 1; k < 4; k++) bars += `M${x} ${n(y + (h * k) / 4)}H${x + w}`
  return (
    <g>
      <rect x={x - 4} y={y - 4} width={w + 8} height={h + 4} fill={PAPER} />
      <rect x={x} y={y} width={w} height={h} fill={INK} />
      <path d={bars} stroke={PAPER} strokeWidth={2} />
    </g>
  )
}

/** A sash window with its white frame, `w` by `h`. */
function Sash({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x - 4} y={y - 4} width={w + 8} height={h + 8} fill={PAPER} />
      <rect x={x} y={y} width={w} height={h} fill={INK} />
      <path
        d={`M${x} ${y + h / 2}H${x + w}M${x + w / 2} ${y}V${y + h}`}
        stroke={PAPER}
        strokeWidth={2}
      />
      <rect x={x - 7} y={y + h + 3} width={w + 14} height={4} fill={PAPER} />
    </g>
  )
}

function ThePlazaHotel({ uid }: ArtProps) {
  const m = marks()
  const upper = [48, 118, 200, 282]
  const lower = [48, 118, 282, 352]
  return (
    <>
      <defs>
        <clipPath id={`${uid}-win`}>
          <rect x={DAISY_WIN.x} y={DAISY_WIN.y} width={DAISY_WIN.w} height={DAISY_WIN.h + 2} />
        </clipPath>
        <clipPath id={`${uid}-front`}>
          <rect
            x={HOUSE.x0}
            y={HOUSE.cornice}
            width={HOUSE.x1 - HOUSE.x0}
            height={BASE - HOUSE.cornice}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
        {/* the broiling sky */}
        <rect x={0} y={0} width={W} height={BASE} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* "A silver curve of the moon hovered already in the western sky" */}
        <path
          d="M478 30A15 15 0 1 0 486 58A12 12 0 1 1 478 30Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />

        {/* the Buchanans' house: brick, white trim, a white portico */}
        <path
          d={`M${HOUSE.x0 - 6} ${HOUSE.cornice}L${HOUSE.x0 + 40} ${HOUSE.ridge}H${HOUSE.x1 - 40}L${HOUSE.x1 + 6} ${HOUSE.cornice}Z`}
          fill={INK}
        />
        {[90, 344].map((x) => (
          <rect
            key={x}
            x={x}
            y={HOUSE.ridge - 16}
            width={16}
            height={22}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
        ))}
        {[120, 220, 316].map((x) => (
          <path
            key={x}
            d={`M${x - 12} ${HOUSE.cornice - 4}V${HOUSE.cornice - 24}L${x} ${HOUSE.cornice - 34}L${x + 12} ${HOUSE.cornice - 24}V${HOUSE.cornice - 4}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.bold}
          />
        ))}
        <rect
          x={HOUSE.x0}
          y={HOUSE.cornice}
          width={HOUSE.x1 - HOUSE.x0}
          height={BASE - HOUSE.cornice}
          fill={INK}
        />
        <g clipPath={`url(#${uid}-front)`}>
          <path d={m.bricks} stroke={PAPER} strokeWidth={0.8} fill="none" />
        </g>
        <rect
          x={HOUSE.x0 - 8}
          y={HOUSE.cornice - 2}
          width={HOUSE.x1 - HOUSE.x0 + 16}
          height={8}
          fill={PAPER}
        />
        {upper.map((x) => (
          <Sash key={`u${x}`} x={x} y={84} w={40} h={56} />
        ))}
        {lower.map((x) => (
          <FrenchWindow key={`l${x}`} x={x} y={160} w={40} h={BASE - 166} />
        ))}
        {/* Daisy's window, open, Daisy leaning out to call down */}
        <rect
          x={DAISY_WIN.x - 4}
          y={DAISY_WIN.y - 4}
          width={DAISY_WIN.w + 8}
          height={DAISY_WIN.h + 8}
          fill={PAPER}
        />
        <rect x={DAISY_WIN.x} y={DAISY_WIN.y} width={DAISY_WIN.w} height={DAISY_WIN.h} fill={INK} />
        <rect
          x={DAISY_WIN.x - 7}
          y={DAISY_WIN.y + DAISY_WIN.h + 3}
          width={DAISY_WIN.w + 14}
          height={4}
          fill={PAPER}
        />
        <g clipPath={`url(#${uid}-win)`}>
          <Person
            at={[DAISY_WIN.x + 16, DAISY_WIN.y + 126]}
            scale={0.62}
            pose={{
              look: 'daisy',
              body: { neck: [8, -132], hip: [0, -80] },
              near: {
                pts: [
                  [10, -126],
                  [24, -110],
                  [30, -96],
                ],
              },
            }}
          />
        </g>
        <rect
          x={DAISY_WIN.x - 7}
          y={DAISY_WIN.y + DAISY_WIN.h + 3}
          width={DAISY_WIN.w + 14}
          height={4}
          fill={PAPER}
        />
        {/* the portico */}
        <path
          d={`M${PORCH.x0 - 10} ${PORCH.top}L${(PORCH.x0 + PORCH.x1) / 2} ${PORCH.top - 26}L${PORCH.x1 + 10} ${PORCH.top}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <rect
          x={PORCH.x0 - 8}
          y={PORCH.top}
          width={PORCH.x1 - PORCH.x0 + 16}
          height={8}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <rect
          x={PORCH.x0 + 22}
          y={PORCH.top + 8}
          width={PORCH.x1 - PORCH.x0 - 44}
          height={BASE - PORCH.top - 16}
          fill={INK}
        />
        {[PORCH.x0, PORCH.x0 + 14, PORCH.x1 - 24, PORCH.x1 - 10].map((x) => (
          <rect
            key={x}
            x={x}
            y={PORCH.top + 8}
            width={10}
            height={BASE - PORCH.top - 14}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
          />
        ))}
        <rect
          x={PORCH.x0 - 12}
          y={BASE - 8}
          width={PORCH.x1 - PORCH.x0 + 24}
          height={8}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={m.vines} stroke={PAPER} strokeWidth={1.2} fill="none" />
        <path d={m.vineLeaves} fill={PAPER} />

        {/* the blazing gravel drive */}
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
        <path d={m.gravel} fill={INK} />

        {/* Gatsby's car, waiting on the drive to take them to town */}
        <GatsbysCar at={[560, 302]} scale={0.92} />

        {/* Nick, and Gatsby in his pink suit, turned to him */}
        <Person at={NICK_AT} pose={{ look: 'nick' }} />
        <Person
          at={GATSBY_AT}
          flip
          pose={{
            look: 'gatsby',
            dress: 'red',
            far: {
              pts: [
                [-4, -132],
                [-8, -106],
                [-4, -82],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const thePlazaHotel: LinocutArt = { width: W, height: H, Draw: ThePlazaHotel }
