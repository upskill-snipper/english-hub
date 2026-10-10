import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { mitt } from '../../much-ado-about-nothing/panels/people'
import { Cut, hand, limb, Person, type Part, type Pose } from './people'

/**
 * Chapter 56: "Magwitch's death", the eighteenth moment in the guide's
 * timeline: the prison infirmary, at the moment of the panel's quotation.
 * Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * - "he was removed, after the first day or so, into the infirmary"; "he
 *   would lie placidly looking at the white ceiling". So the room is plain,
 *   with a white ceiling. Its windows are not described: they are drawn as
 *   the high barred windows of a prison, and the day's light falls from them
 *   across the bed.
 * - "He lay on his back, breathing with great difficulty"; "I sat down by his
 *   bed". So Magwitch, the kit's Magwitch at sixty with his hair cut short
 *   ('magwitch60', `cropped`, in ./people.tsx), lies on his back, raised on
 *   piled white pillows at the head of the bed so that his dark head reads
 *   against them, and Pip, grown, sits on the far side of the bed, leaning
 *   over him.
 * - "He smiled, and I understood his touch to mean that he wished to lift my
 *   hand, and lay it on his breast. I laid it there, and he smiled again, and
 *   put both his hands upon it." So Pip's hand lies on the blanket over his
 *   breast, and Magwitch's near arm lies along his side and is folded up on
 *   to his breast, its hand laid over Pip's. From this side his far hand is
 *   hidden under the near one.
 * - "The governor stepped aside, and beckoned the officer away. The change
 *   ... drew back the film from the placid look at the white ceiling, and he
 *   looked most affectionately at me." So his eye is open and his face is
 *   turned up to Pip's, and at the door on the left the governor beckons the
 *   officer out.
 *
 * REDRAWN 10 October 2026, on review. The bed group of the first finished cut
 * laid him back on a low pillow with his face against the dark wall, and
 * started his two forearms just under his chin: at panel size they came out
 * of his throat and crossed his face, so that Pip's hand, reaching to them,
 * read as pressed to the dying man's face, and the hands were nowhere near his
 * breast. Now the pillows are piled high behind his head, his near arm comes
 * from his shoulder along his side, and the hands meet on the blanket about a
 * head's length below his chin, with nothing between his face and Pip's.
 *
 * WHAT IS NOT DRAWN. Nothing after the quotation: his death is not shown, and
 * no caption or alt text describes it. The text has "some other sick
 * prisoners in the room"; a second figure lying still in a bed, in a panel
 * about a death, reads as a body, so it is left out (it was drawn in the
 * first cut and removed on 10 October 2026). The spot colour is not used:
 * no red is near a hand or a face here.
 *
 * Seeds: 5601 (the wall), 5602 (the floor), 5603 (the ceiling), 5604 (the
 * blanket).
 */

const W = 860
const H = 340
/** The white ceiling, and the foot of the wall. */
const CEIL = 28
const BASE = 252
/** The high barred windows. */
const WINDOWS = [
  { x0: 476, x1: 532, y0: 44, y1: 116 },
  { x0: 600, x1: 656, y0: 44, y1: 116 },
]
/**
 * Magwitch's bed, seen a little from above: its foot and head rails, the far
 * and near edges of the mattress, and the floor under its legs.
 */
const BED = { x0: 334, x1: 704, back: 214, front: 248, feet: 314 }
/** The bed group is drawn this much larger about this point, the floor under the bed. */
const BED_GROUP: Pt = [520, 314]
const BED_SCALE = 1.2
/** The door the governor and the officer go to. */
const DOOR = { x0: 34, x1: 98, top: 102 }

/**
 * Magwitch lies on his back, raised on the pillows at the head of the bed, on
 * the right: his hip is here, and his body is turned this far from upright
 * (drawn facing left, so the turn lays him back to the right). His neck comes
 * at about (623, 207) and his head at about (648, 191), in front of PILLOWS.
 */
const MAG_HIP: Pt = [541, 247]
const MAG_TILT = 64
const MS = 1.3
/**
 * The pillows piled against the head rail, the top one large enough that his
 * whole head, face and all, prints black on white against it.
 */
const PILLOWS = [
  'M594 252C590 238 596 226 612 224L688 226C700 228 704 240 701 252Z',
  'M600 230C594 214 602 200 620 198L690 200C702 202 704 216 700 230Z',
  'M606 206C598 186 606 160 628 156L686 160C700 162 704 182 698 206Z',
]
/** Pip sits on the far side of the bed, leaning over him. */
const PIP_AT: Pt = [470, 312]
const PS = 1.3

/** The light from the high windows, falling down to the left across the bed. */
function shaft(x: number, y: number) {
  let best = 0
  for (const w of WINDOWS) {
    const u = x + (y - w.y1) * 0.3
    if (y > w.y0) {
      const c = (w.x0 + w.x1) / 2
      const half = (w.x1 - w.x0) / 2 + 6
      best = Math.max(best, clamp((half - Math.abs(u - c)) / 12))
    }
  }
  return best
}

function light(x: number, y: number) {
  return clamp(0.16 + shaft(x, y) * 0.78 - Math.abs(x - 560) / 3200)
}

type Marks = { wall: string; floor: string; ceiling: string; flags: string; folds: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(5601), { x0: 0, x1: W, y0: CEIL + 6, y1: BASE }, light, {
    spacing: 6,
    len: [18, 60],
    gap: [5, 16],
    max: 3.6,
  })
  const floor = gougeField(
    rng(5602),
    { x0: 0, x1: W, y0: BASE + 4, y1: H },
    (x, y) => light(x, y) * 0.85,
    { spacing: 6.4, len: [22, 70], gap: [6, 18], max: 3.2 },
  )
  // The white ceiling: paper, with a few cuts of shade.
  const rc = rng(5603)
  let ceiling = ''
  for (let y = 6; y < CEIL - 2; y += 6) {
    let x = between(rc, -20, 0)
    while (x < W) {
      const len = between(rc, 40, 120)
      if (rc() < 0.3) ceiling += gouge(x, y, x + len, y, 0.5)
      x += len + between(rc, 30, 80)
    }
  }
  // Joints of the stone flags.
  let flags = ''
  for (let y = BASE + 18; y < H; y += 26) flags += `M0 ${y}H${W}`
  // The folds of Magwitch's blanket, falling over the side of the bed.
  const rb = rng(5604)
  let folds = ''
  for (let x = BED.x0 + 22; x < 566; x += between(rb, 22, 36))
    folds += `M${n(x)} ${BED.front}Q${n(x - 3)} ${BED.front + 12} ${n(x - 2 + between(rb, -3, 3))} ${BED.front + 24}`
  cached = { wall, floor, ceiling, flags, folds }
  return cached
}

/**
 * Magwitch, drawn upright and facing right in his own frame, then flipped and
 * laid back on the pillows, his head turned up to Pip. Only his head, neck
 * and shoulders show above the blanket; his arms are kept along his body,
 * under it, and the near one is drawn again over the blanket (MAG_ARM).
 */
const MAGWITCH: Pose = {
  look: 'magwitch60',
  cropped: true,
  neckerchief: false,
  head: { rot: 6 },
  legs: {
    far: [
      [-2, -70],
      [-2, -36],
      [-2, -3],
    ],
    near: [
      [2, -70],
      [2, -36],
      [2, -3],
    ],
  },
  near: {
    pts: [
      [0, -128],
      [0, -104],
      [0, -84],
    ],
    hand: 'none',
  },
  far: {
    pts: [
      [0, -128],
      [0, -104],
      [0, -84],
    ],
    hand: 'none',
  },
  eye: 'open',
}

/**
 * Pip, on the far side of the bed, leaning over him, his near arm reaching
 * down to Magwitch's breast. The figure is clipped at the top of the bed, so
 * the arm is drawn again over the blanket (PIP_ARM), along the same line.
 */
const PIP_NEAR: Pt[] = [
  [30, -100],
  [45, -90],
  [60, -84],
]
const PIP: Pose = {
  look: 'pip',
  age: 'man',
  body: { neck: [28, -106], hip: [0, -46] },
  head: { at: [42, -126], rot: 22 },
  legs: {
    far: [
      [-2, -46],
      [32, -48],
      [30, -3],
    ],
    near: [
      [2, -46],
      [36, -47],
      [36, -3],
    ],
  },
  near: { pts: PIP_NEAR, hand: 'none' },
  far: {
    pts: [
      [24, -102],
      [30, -80],
      [36, -62],
    ],
    hand: 'none',
  },
  eye: 'open',
}

/** A point in Pip's frame, in the panel's. */
const inPip = ([x, y]: Pt): Pt => [PIP_AT[0] + x * PS, PIP_AT[1] + y * PS]

/**
 * The hands on his breast, in the panel's frame. He lies on his back and is
 * seen from the side, so his breast is the top of the blanket over his
 * chest, about a head's length below his chin. Pip's forearm comes over it
 * from the far side of the bed and his hand lies on it, the fingers together;
 * Magwitch's near arm comes from his shoulder, down along his side over the
 * end of the blanket, and folds up on to his breast, its hand laid over Pip's
 * and pointing away from both their faces, lifted off it by its paper edge.
 * (Three earlier cuts went wrong at panel size: plain bars that read as rods
 * coming out of the pillow; spread fingers at his side that read as reaching
 * up to Pip's face; and forearms that started under his chin and crossed his
 * face. 10 October 2026.)
 */
const PIP_WRIST = inPip(PIP_NEAR[2])
const PIP_ARM: Part[] = [
  { d: limb(PIP_NEAR.map(inPip)), w: 8.6 * PS },
  ...hand(PIP_WRIST, 8, { size: 17, spread: 5, thumb: 1 }),
]
/** Magwitch's near arm: his shoulder, his elbow at his side, his wrist on his breast. */
const MAG_NEAR: Pt[] = [
  [608, 216],
  [582, 232],
  [564, 210],
]
const MAG_ARM: Part[] = [
  { d: limb(MAG_NEAR), w: 9.6 * MS, sep: 1.6 },
  { ...mitt(MAG_NEAR[2], 212, 1.3), sep: 1.6 },
]

/** The governor, stepped aside, showing the officer the way out; the officer going. */
const GOVERNOR: Pose = {
  look: 'man',
  hat: 'top',
  near: {
    pts: [
      [3, -126],
      [18, -104],
      [34, -100],
    ],
    hand: 'open',
    deg: -10,
  },
  eye: 'open',
}
const OFFICER: Pose = {
  look: 'man',
  legs: {
    far: [
      [-3, -70],
      [-10, -36],
      [-16, -3],
    ],
    near: [
      [3, -70],
      [12, -36],
      [16, -3],
    ],
  },
  eye: 'open',
}

function MagwitchsDeath({ uid }: ArtProps) {
  const m = marks()
  const id = { pip: `${uid}-pip` }
  const [hx, hy] = MAG_HIP
  // His frame's hip is 70 units above his feet, at his scale and size.
  const lift = n(70 * MS * 1.03)
  const id2 = { mag: `${uid}-mag` }
  return (
    <>
      <defs>
        {/* Only his head and shoulders show above the blanket. */}
        <clipPath id={id2.mag}>
          <rect x={596} y={0} width={W - 596} height={H} />
        </clipPath>
        {/* Pip shows above the bed; it hides the chair and his legs. */}
        <clipPath id={id.pip}>
          <rect x={0} y={0} width={W} height={BED.back + 2} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 210], push: 1.03 })}>
        {/* the white ceiling */}
        <rect x={0} y={0} width={W} height={CEIL} fill={PAPER} />
        <path d={m.ceiling} fill={INK} />
        <rect x={0} y={CEIL} width={W} height={5} fill={INK} />
        {/* the wall, lit in two shafts from the high windows */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={BASE} width={W} height={4} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.flags} stroke={INK} strokeWidth={2} />
        {/* the windows, barred */}
        {WINDOWS.map((w) => (
          <g key={w.x0}>
            <rect
              x={w.x0 - 6}
              y={w.y0 - 6}
              width={w.x1 - w.x0 + 12}
              height={w.y1 - w.y0 + 12}
              fill={INK}
            />
            <rect x={w.x0} y={w.y0} width={w.x1 - w.x0} height={w.y1 - w.y0} fill={PAPER} />
            <path
              d={
                [0.25, 0.5, 0.75]
                  .map((t) => `M${w.x0 + (w.x1 - w.x0) * t} ${w.y0}V${w.y1}`)
                  .join('') + `M${w.x0} ${(w.y0 + w.y1) / 2}H${w.x1}`
              }
              stroke={INK}
              strokeWidth={4}
            />
          </g>
        ))}

        {/* the door, and the governor and the officer going to it */}
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={BASE - DOOR.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <Person pose={OFFICER} at={[116, 262]} scale={0.84} flip />
        <Person pose={GOVERNOR} at={[176, 262]} scale={0.84} flip />

        {/* The bed and the two of them, drawn a fifth larger about the floor
            under the bed, so that they read at phone width; Pip's head comes
            against the lit window. */}
        <g
          transform={`translate(${BED_GROUP[0]} ${BED_GROUP[1]}) scale(${BED_SCALE}) translate(${-BED_GROUP[0]} ${-BED_GROUP[1]})`}
        >
          {/* Pip, leaning over the bed */}
          <g clipPath={`url(#${id.pip})`}>
            <Person pose={PIP} at={PIP_AT} scale={PS} />
          </g>

          {/* Magwitch's bed: the head rail, the piled pillows, him, the blanket */}
          <g fill={INK} stroke={PAPER} strokeWidth={1.6}>
            <rect x={BED.x1 - 4} y={BED.back - 64} width={8} height={BED.feet - BED.back + 64} />
          </g>
          {/* the side of the mattress under the pillows, where the blanket does not reach */}
          <rect
            x={596}
            y={BED.front - 2}
            width={BED.x1 - 600}
            height={30}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <g fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round">
            {PILLOWS.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <g clipPath={`url(#${id2.mag})`}>
            <g transform={`translate(${hx} ${hy}) rotate(${MAG_TILT}) translate(0 ${lift})`}>
              <Person pose={MAGWITCH} at={[0, 0]} scale={MS} flip />
            </g>
          </g>
          {/* the blanket, drawn up over his chest and falling over the side of the bed */}
          <path
            d={`M${BED.x0 + 2} ${BED.front + 26}L${BED.x0 + 2} ${BED.back + 6}C${BED.x0 + 8} ${BED.back - 10} ${BED.x0 + 24} ${BED.back - 14} ${BED.x0 + 36} ${BED.back - 4}C${BED.x0 + 86} ${BED.back - 2} ${BED.x0 + 146} ${BED.back - 4} 520 ${BED.back - 8}C548 ${BED.back - 12} 566 ${BED.back - 22} 588 ${BED.back - 21}C596 ${BED.back - 20} 601 ${BED.back - 14} 601 ${BED.back - 4}L601 ${BED.front + 26}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
          <path d={`M${BED.x0 + 2} ${BED.front}L594 ${BED.front}`} stroke={INK} strokeWidth={1.2} />
          <path d={m.folds} fill="none" stroke={INK} strokeWidth={1} />
          {/* Pip's hand on his breast, and Magwitch's hand laid over it */}
          <Cut parts={PIP_ARM} />
          <Cut parts={[MAG_ARM]} />
          {/* the bed's foot rail and its side */}
          <g fill={INK} stroke={PAPER} strokeWidth={1.6}>
            <rect x={BED.x0 - 6} y={BED.back - 26} width={8} height={BED.feet - BED.back + 26} />
            <rect x={BED.x0} y={BED.front + 26} width={BED.x1 - BED.x0} height={12} />
          </g>
        </g>
      </g>
    </>
  )
}

export const magwitchsDeath: LinocutArt = { width: W, height: H, Draw: MagwitchsDeath }
