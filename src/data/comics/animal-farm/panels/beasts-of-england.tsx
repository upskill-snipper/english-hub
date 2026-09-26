import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Lantern } from './big-barn'
import { Cow, Dog, Duckling, EYE_CUT, HEAD, Horse, Pig, Sheep } from './people'

/**
 * Chapter 1: "Beasts of England", the third moment in the guide's timeline.
 * The farmyard at night: the big barn pouring out the song, and across the
 * yard Mr Jones at his bedroom window. Every detail is from the text (the
 * held edition, src/data/full-texts/animal-farm.ts):
 *
 * - "the whole farm burst out into 'Beasts of England' in tremendous unison.
 *   The cows lowed it, the dogs whined it, the sheep bleated it, the horses
 *   whinnied it, the ducks quacked it. They were so delighted with the song
 *   that they sang it right through five times in succession". So the barn's
 *   doors stand open on the lantern-lit inside, crowded with animals, heads
 *   up: Boxer with his white stripe and Clover, a cow, a sheep, a dog, a pig
 *   and two ducklings, with Major white on his platform at the back. The song
 *   is drawn as notes in the spot colour, as "The news spreads" draws the
 *   same tune, rising above the doors and the roof and never at an open
 *   mouth, where red would read as blood.
 * - "Unfortunately, the uproar awoke Mr. Jones, who sprang out of bed, making
 *   sure that there was a fox in the yard. He seized the gun which always stood
 *   in a corner of his bedroom, and let fly a charge of number 6 shot into the
 *   darkness." So on the right the farmhouse is dark, and at its upper window
 *   Jones leans out in his nightshirt and fires his gun up into the dark over
 *   the yard: a white burst at the muzzle, and no animal anywhere near its
 *   line. "The pellets buried themselves in the wall of the barn" and hurt
 *   no one, and the picture shows no more than the text: a man firing at a
 *   noise in the dark.
 * - It is early March and the moment is at night: no moon is named, so the sky
 *   is dark, lit only from the barn door.
 *
 * Seeds: 1301 the sky, 1302 the barn's boards, 1303 the lantern's rays, 1304
 * the farmhouse, 1305 the yard, 1306 the flash.
 */

const W = 860
const H = 340

/** The barn's open doorway. */
const DOOR = { x0: 180, x1: 350, y0: 150, y1: 272 }
/** The inside lantern's flame. */
const LAMP: [number, number] = [265, 176]
/** Where the shot leaves the gun. */
const MUZZLE: [number, number] = [540, 94]

type Marks = {
  sky: string
  boards: string
  roof: string
  inside: string
  house: string
  yard: string
  flash: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The night sky: a few long cuts, faintly lighter over the barn door and
  // round the flash.
  const sky = gougeField(
    rng(1301),
    { x0: 0, x1: W, y0: 8, y1: 130 },
    (x, y) =>
      Math.max(
        0.05,
        clamp(0.5 - Math.hypot(x - MUZZLE[0], (y - MUZZLE[1]) * 1.3) / 200),
        clamp(0.3 - Math.hypot(x - 265, y - 150) / 500),
      ),
    { spacing: 8, len: [20, 70], gap: [10, 34], max: 2.6 },
  )
  // The barn's weatherboards: long horizontal cuts, lit from the doorway.
  const r = rng(1302)
  let boards = ''
  for (let y = 124; y < 272; y += 7) {
    let x = 34 + between(r, 0, 20)
    while (x < 506) {
      const len = between(r, 40, 110)
      const end = Math.min(x + len, 506)
      const mid = (x + end) / 2
      const L = clamp(1 - Math.abs(mid - 265) / 260) * clamp(1 - Math.abs(y - 210) / 140)
      if (mid < DOOR.x0 - 60 || mid > DOOR.x1 + 60 || y < DOOR.y0 - 10)
        boards += gouge(x, y, end, y + between(r, -0.6, 0.6), 0.5 + L * 1.6)
      x = end + between(r, 6, 20)
    }
  }
  // The roof: long cuts along its slope.
  let roof = ''
  for (let y = 50; y < 116; y += 6.5) {
    let x = 40 + (116 - y) * 0.3 + between(r, 0, 16)
    const x1 = 500 - (116 - y) * 0.3
    while (x < x1) {
      const len = between(r, 30, 90)
      roof += gouge(x, y, Math.min(x + len, x1), y + between(r, -0.4, 0.4), 0.5 + (y - 50) / 110)
      x += len + between(r, 8, 24)
    }
  }
  const inside = rays(rng(1303), LAMP[0], LAMP[1], { from: 20, to: 110, every: 7, width: 3.2 })
  // The farmhouse: brick courses, barely lit.
  const h = rng(1304)
  let house = ''
  for (let y = 128; y < 272; y += 6.2) {
    let x = 588 + between(h, 0, 14)
    while (x < 852) {
      const len = between(h, 12, 26)
      if (h() < 0.42) house += gouge(x, y, x + len, y, between(h, 0.35, 0.7))
      x += len + between(h, 4, 8)
    }
  }
  // The yard: cobbles and ruts, a little light on them from the door.
  const y2 = rng(1305)
  let yard = ''
  for (let i = 0; i < 160; i++) {
    const x = between(y2, 0, W)
    const y = between(y2, 280, H - 8)
    const L = clamp(1 - Math.hypot(x - 265, (y - 280) * 2) / 280)
    if (y2() < 0.2 + L)
      yard += gouge(x, y, x + between(y2, 6, 16), y + between(y2, -1, 1), 0.5 + L * 1.4)
  }
  const flash = rays(rng(1306), MUZZLE[0], MUZZLE[1], { from: 6, to: 46, every: 16, width: 2.6 })
  cached = { sky, boards, roof, inside, house, yard, flash }
  return cached
}

/** One quaver, head at (0, 0). */
const QUAVER =
  'M-3.6 1.2C-4.4 -1 -2 -2.8 0.8 -2.8C3.4 -2.8 4.4 -0.8 3.6 1C2.8 2.8 -2.8 3.4 -3.6 1.2Z' +
  'M2.6 -1.4L2.6 -17.4L4.2 -17.4L4.2 -1Z' +
  'M4.2 -17.4C5.4 -13.4 10 -12.8 9.2 -6.4C8.4 -9.4 6.6 -11 4.2 -11.6Z'
/** Two quavers on a beam. */
const BEAMED =
  'M-3.6 1.2C-4.4 -1 -2 -2.8 0.8 -2.8C3.4 -2.8 4.4 -0.8 3.6 1C2.8 2.8 -2.8 3.4 -3.6 1.2Z' +
  'M8.4 -1.8C7.6 -4 10 -5.8 12.8 -5.8C15.4 -5.8 16.4 -3.8 15.6 -2C14.8 -0.2 9.2 0.4 8.4 -1.8Z' +
  'M2.6 -1.4L2.6 -17.4L4.2 -17.4L4.2 -1ZM14.6 -4.4L14.6 -20.4L16.2 -20.4L16.2 -4Z' +
  'M2.6 -17.6L16.2 -20.8L16.2 -16.6L2.6 -13.4Z'
/** The song rising from the doorway and over the roof: [x, y, scale, beamed, delay]. */
const NOTES: [number, number, number, boolean, number][] = [
  [196, 132, 1.1, false, 0.9],
  [232, 112, 1.15, true, 1.1],
  [300, 120, 1.1, false, 1.25],
  [336, 102, 1.1, true, 1.4],
  [130, 30, 1.05, true, 1.5],
  [200, 20, 1, false, 1.7],
  [300, 34, 1.1, true, 1.6],
  [392, 24, 1, false, 1.85],
  [456, 40, 1.05, false, 2],
]

/** Jones's hair, over the kit's HEAD: plain and dark, nothing the text does not say. */
const JONES_HAIR =
  'M-15.4 2C-17 -10 -9 -20 2 -20C9 -20 13.6 -16 14 -10.6C9 -13.6 2 -14 -4 -11C-8 -8.6 -10 -3 -9.6 4C-11.6 5 -14 4.6 -15.4 2Z'

/**
 * Mr Jones at his window, facing left: the kit's head, his nightshirt, and
 * the gun at his shoulder, raised into the dark. Drawn in the panel's own
 * coordinates.
 */
function Jones() {
  const headT = 'translate(634 139) scale(-0.62 0.62)'
  return (
    <g>
      {/* the paper halo round head, arms and gun */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        <path d={HEAD} transform={headT} />
      </g>
      <path
        d="M646 170C636 164 626 160 612 158L604 156"
        stroke={PAPER}
        strokeWidth={10}
        fill="none"
        strokeLinecap="round"
      />
      {/* the nightshirt: white, leaning out over the sill */}
      <path
        d="M616 160C626 156 640 156 650 160C656 166 660 176 660 184L612 184C611 176 612 166 616 160Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path d="M624 162L630 172M640 160L644 176" stroke={INK} strokeWidth={0.9} fill="none" />
      {/* his face, lit white by the flash, and his hair dark */}
      <path d={HEAD} transform={headT} fill={PAPER} stroke={INK} strokeWidth={2.2} />
      <g transform={headT} fill={INK}>
        <path d={JONES_HAIR} />
        <path d={EYE_CUT} />
        <path d="M8 11.4L13.6 11" stroke={INK} strokeWidth={1.6} />
      </g>
      {/* the gun: stock at his shoulder, barrels raised out of the window */}
      <path
        d={`M638 164L620 156L${MUZZLE[0] + 4} ${MUZZLE[1] + 3}`}
        stroke={PAPER}
        strokeWidth={6.4}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M638 164L620 156L${MUZZLE[0] + 4} ${MUZZLE[1] + 3}`}
        stroke={INK}
        strokeWidth={3.6}
        fill="none"
        strokeLinecap="round"
      />
      <path d="M646 170L633 162L637 156L650 163Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      {/* his arms along the gun, in the white sleeves of the nightshirt */}
      <path
        d="M640 164C632 164 624 162 616 158M650 168C640 158 628 150 606 146"
        stroke={INK}
        strokeWidth={6.6}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M640 164C632 164 624 162 616 158M650 168C640 158 628 150 606 146"
        stroke={PAPER}
        strokeWidth={4.2}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={614} cy={157.4} r={2.6} fill={PAPER} stroke={INK} strokeWidth={1.1} />
      <circle cx={604} cy={145.6} r={2.6} fill={PAPER} stroke={INK} strokeWidth={1.1} />
    </g>
  )
}

function BeastsOfEngland({ uid }: ArtProps) {
  const m = marks()
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={door}>
          <rect x={DOOR.x0} y={DOOR.y0} width={DOOR.x1 - DOOR.x0} height={DOOR.y1 - DOOR.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 180], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />

        {/* the big barn: its roof, its boards and its open doors */}
        <path d="M34 118L70 42H468L506 118Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.roof} fill={PAPER} />
        <rect x={30} y={116} width={480} height={6} fill={PAPER} />
        <rect x={34} y={122} width={472} height={150} fill={INK} />
        <path d={m.boards} fill={PAPER} />
        <path d="M34 122V272M506 122V272" stroke={PAPER} strokeWidth={LINE.carve} />

        {/* inside: the lantern-lit barn, crowded with the singing animals */}
        <g clipPath={`url(#${door})`}>
          <rect
            x={DOOR.x0}
            y={DOOR.y0}
            width={DOOR.x1 - DOOR.x0}
            height={DOOR.y1 - DOOR.y0}
            fill={INK}
          />
          <path d={m.inside} fill={PAPER} />
          {/* the platform at the far end, and Major on it */}
          <rect x={DOOR.x0} y={230} width={DOOR.x1 - DOOR.x0} height={3} fill={PAPER} />
          <Pig at={[262, 232]} s={0.4} kind="major" pose="lie" mouthOpen />
          <Lantern at={LAMP} cordTop={150} />
          {/* Clover and Boxer, heads thrown up, singing */}
          <Horse at={[190, 282]} s={0.6} who="clover" headDown={-30} uid={uid} />
          <Horse at={[342, 284]} s={0.63} who="boxer" headDown={-30} face={-1} />
          {/* in front: a cow, a pig, a dog and a sheep, and the ducks at the sill */}
          <g transform="rotate(-14 200 272)">
            <Cow at={[190, 276]} s={0.5} />
          </g>
          <Pig at={[246, 272]} s={0.42} mouthOpen />
          <Dog at={[312, 272]} s={0.78} face={-1} />
          <Sheep at={[290, 274]} s={1.05} face={-1} />
          <Duckling at={[214, 272]} s={0.62} />
          <Duckling at={[226, 273]} s={0.62} />
        </g>
        <path
          d={`M${DOOR.x0} ${DOOR.y1}V${DOOR.y0}H${DOOR.x1}V${DOOR.y1}`}
          stroke={PAPER}
          strokeWidth={LINE.bold}
          fill="none"
        />
        {/* the two doors, thrown open */}
        <path
          d="M180 150L136 160V286L180 272ZM350 150L394 160V286L350 272Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={
            wedge(158, 156, 158, 280, 1, 1) +
            wedge(372, 156, 372, 280, 1, 1) +
            gouge(140, 214, 178, 206, 0.8) +
            gouge(352, 206, 390, 214, 0.8)
          }
          fill={PAPER}
        />

        {/* the farmhouse, dark, with Jones at the bedroom window */}
        <path d="M580 124L612 64H824L856 124Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M654 64V36H676V64M784 64V40H804V64"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect x={586} y={124} width={268} height={148} fill={INK} />
        <path d={m.house} fill={PAPER} />
        <path d="M586 124V272M854 124" stroke={PAPER} strokeWidth={LINE.carve} />
        {/* the other windows, black: the house is asleep */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <rect x={706} y={134} width={40} height={42} />
          <rect x={782} y={134} width={40} height={42} />
          <rect x={612} y={204} width={44} height={46} />
          <rect x={782} y={204} width={40} height={46} />
          <rect x={712} y={206} width={34} height={66} />
        </g>
        <path
          d="M726 134V176M706 155H746M802 134V176M782 155H822M634 204V250M612 227H656M802 204V250M782 227H822"
          stroke={PAPER}
          strokeWidth={1}
        />
        {/* Jones's window, open, with him leaning out of it */}
        <rect
          x={604}
          y={132}
          width={52}
          height={52}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={604}
          y={118}
          width={52}
          height={14}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <Jones />
        <rect x={598} y={184} width={64} height={5} fill={PAPER} />

        {/* the shot, into the darkness */}
        <g className="lc-fade-in" style={timing({ delay: 2.4, dur: 0.3 })}>
          <path d={m.flash} fill={PAPER} />
          <path
            d={`M${MUZZLE[0] + 6} ${MUZZLE[1] + 4}L${MUZZLE[0] - 12} ${MUZZLE[1] - 8}L${MUZZLE[0] - 2} ${MUZZLE[1] + 8}L${MUZZLE[0] - 16} ${MUZZLE[1] + 4}Z`}
            fill={PAPER}
          />
        </g>

        {/* the yard between them */}
        <rect x={0} y={272} width={W} height={3} fill={PAPER} />
        <path d={m.yard} fill={PAPER} />

        {/* the song */}
        {NOTES.map(([x, y, s, beamed, delay]) => (
          <g key={`${x}-${y}`} className="lc-rise" style={timing({ delay, dur: 1.1 })}>
            <path
              d={beamed ? BEAMED : QUAVER}
              transform={`translate(${n(x)} ${n(y)}) scale(${s})`}
              fill={RED}
              stroke={INK}
              strokeWidth={0.8}
            />
          </g>
        ))}
      </g>
    </>
  )
}

export const beastsOfEngland: LinocutArt = { width: W, height: H, Draw: BeastsOfEngland }
