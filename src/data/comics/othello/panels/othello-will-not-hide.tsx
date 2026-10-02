import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, TorchFlame, limb, rapier, type P, type Pose } from './people'
import {
  H,
  W,
  chimney,
  glowFrom,
  gothicArch,
  lights,
  nightSky,
  nightStreet,
  stars,
  stoneByNight,
} from './venice-night'

/**
 * Act 1, Scene 2: "Othello will not hide", the second moment in the guide's
 * timeline, and Othello's first entrance. Every detail is from the scene, as
 * the held edition prints it (src/data/full-texts/othello.ts):
 *
 * - "Venice. Another street." Night: "The goodness of the night upon you,
 *   friends!" So the street of the first panel's city (./venice-night.tsx),
 *   house fronts of stone with pointed windows under a dark sky, and a deep
 *   arch through to the next street.
 * - IAGO: "You were best go in." OTHELLO: "Not I; I must be found. / My parts,
 *   my title, and my perfect soul / Shall manifest me rightly." So he stands
 *   in the open, in the middle of the street, in front of the arch, where the
 *   light is: upright, his own sword still in its scabbard at his side. He is
 *   drawn as the kit draws him (./people.tsx), a Black general of Venice,
 *   with the same dignity as every figure.
 * - "Enter Brabantio, Roderigo and Officers with torches and weapons." "They
 *   draw on both sides." So on the right Brabantio, old, white-bearded, in
 *   his senator's gown and cap, points at Othello and calls out; Roderigo,
 *   beside him in his feathered bonnet, holds up his drawn sword; behind them
 *   an officer holds up a torch and another a halberd. On the left are those
 *   "of my inclining": an officer of the Duke's with a torch ("Enter Cassio
 *   and Officers with torches"), Cassio with his sword drawn and lowered, and
 *   Iago with his sword up, facing Roderigo: "You, Roderigo! Come, sir, I am
 *   for you."
 * - OTHELLO: "Keep up your bright swords, for the dew will rust them. / Good
 *   signior, you shall more command with years / Than with your weapons."
 *   So he holds out his near hand, open and low, palm down, towards the
 *   drawn blades and the old man: the gesture that stops the fight. The blades
 *   are cut in paper, "bright", and every one is held up and apart: none is
 *   near anyone's body.
 * - The torches are the only red: two flames, one on each side of the
 *   street, and their light cut into the stone, the arch and the paving
 *   round them.
 *
 * Brabantio's accusations in this scene are not quoted or drawn; the
 * quotation is Othello's own line. Nothing is taken from a film or stage
 * production. Seeds: 4201 (sky), 4202 (stars), 4203 (house fronts), 4204
 * (street), 4205 (the arch), 4206 to 4208 (torchlight).
 */

const FEET = 324
const PAVE = 262
/** The arch through to the next street, behind Othello. */
const ARCH = { x0: 352, x1: 508, top: 84 }
/** The torches' flames, in the drawing's coordinates (for their light on the stone). */
const FLAME_L: P = [76, 126]
const FLAME_R: P = [770, 120]

const OTHELLO: Pose = {
  look: 'othello',
  legs: {
    far: [
      [-3, -70],
      [-8, -36],
      [-11, -3],
    ],
    near: [
      [3, -70],
      [9, -36],
      [13, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [24, -114],
      [45, -106],
    ],
    hand: 'open',
    deg: 18,
    thumb: -1,
    spread: 20,
  },
}

/** Iago, facing Roderigo across the street, his sword up. */
const IAGO: Pose = {
  look: 'iago',
  head: { rot: -4 },
  legs: {
    far: [
      [-3, -70],
      [-14, -38],
      [-22, -3],
    ],
    near: [
      [3, -70],
      [15, -40],
      [22, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-18, -114],
      [-28, -100],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [24, -120],
      [38, -132],
    ],
    hand: 'mitt',
    deg: -60,
  },
}

/** Cassio, his sword drawn and lowered, watching his general. */
const CASSIO: Pose = {
  look: 'cassio',
  cloak: 2,
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [14, -106],
      [26, -92],
    ],
    hand: 'mitt',
    deg: 70,
  },
}

/** An officer of the Duke's, holding a torch up (flipped for the right-hand side). */
const TORCHBEARER: Pose = {
  look: 'officer',
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [16, -148],
      [20, -168],
    ],
    hand: 'mitt',
    deg: -88,
  },
}

/** Roderigo (flipped), his sword held up. */
const RODERIGO: Pose = {
  look: 'roderigo',
  mouth: 'open',
  cloak: 5,
  legs: {
    far: [
      [-3, -70],
      [-12, -37],
      [-18, -3],
    ],
    near: [
      [3, -70],
      [12, -38],
      [17, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-16, -110],
      [-22, -94],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -124],
      [34, -140],
    ],
    hand: 'mitt',
    deg: -64,
  },
}

/** Brabantio (flipped), in his gown and cap, pointing at Othello. */
const BRABANTIO: Pose = {
  look: 'brabantio',
  mouth: 'open',
  head: { rot: -3 },
  far: {
    pts: [
      [-3, -130],
      [-8, -104],
      [-4, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -130],
      [25, -122],
      [46, -126],
    ],
    hand: 'point',
    deg: -6,
    thumb: -1,
  },
}

/** An officer (flipped) holding a halberd upright. */
const HALBERDIER: Pose = {
  look: 'officer',
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [16, -112],
      [16, -96],
    ],
    hand: 'mitt',
    deg: -90,
  },
}

/** A torch held in the hand, in the figure's frame: its shaft and its flame. */
function HeldTorch({ grip, top }: { grip: P; top: P }) {
  const shaft = limb([[grip[0] - 0.4, grip[1] + 8], top])
  return (
    <>
      <path d={shaft} stroke={PAPER} strokeWidth={6.6} strokeLinecap="round" fill="none" />
      <path d={shaft} stroke={INK} strokeWidth={3.4} strokeLinecap="round" fill="none" />
      <TorchFlame at={[top[0], top[1] - 1]} s={1.15} />
    </>
  )
}

/** A drawn rapier in the hand, in the figure's frame: its bright blade cut in paper. */
function Blade({ grip, angle, len = 104 }: { grip: P; angle: number; len?: number }) {
  return (
    <path
      d={rapier(grip, angle, len)}
      fill={PAPER}
      stroke={INK}
      strokeWidth={1.1}
      strokeLinejoin="round"
    />
  )
}

/** A halberd held upright, in the figure's frame: the pole, the axe and the spike. */
function Halberd({ x }: { x: number }) {
  const pole = limb([
    [x, -4],
    [x, -236],
  ])
  const head =
    `M${n(x - 1.6)} -224C${n(x + 8)} -232 ${n(x + 16)} -230 ${n(x + 20)} -222C${n(x + 16)} -214 ${n(x + 8)} -212 ${n(x - 1.6)} -216Z` +
    `M${n(x - 2)} -236L${n(x)} -258L${n(x + 2)} -236Z` +
    `M${n(x - 1.6)} -222L${n(x - 10)} -218L${n(x - 1.6)} -216Z`
  return (
    <>
      <path d={pole} stroke={PAPER} strokeWidth={6.2} strokeLinecap="round" fill="none" />
      <path d={pole} stroke={INK} strokeWidth={3} strokeLinecap="round" fill="none" />
      <path d={head} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
    </>
  )
}

type Marks = {
  sky: string
  stars: string
  stone: string
  arch: string
  street: string
  glowL: string
  glowR: string
}

const torchLight = lights(glowFrom(FLAME_L, 230, 1.1), glowFrom(FLAME_R, 230, 1.1))

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = nightSky(4201, { x0: 0, x1: W, y0: 20, y1: 70 }, 0.5)
  const st = stars(4202, { x0: 340, x1: 840, y0: 8, y1: 44 }, 12)
  const stone = stoneByNight(4203, { x0: 0, x1: W, y0: 40, y1: PAVE }, (x, y) => {
    const L = torchLight(x, y)
    return L > 0.3 ? L : 0
  })
  // The arch through to the next street: the deep passage is lit, so it is
  // paper, darkening only at its sides and under its head, and Othello
  // stands black against it. (Cut the other way, as paper gouges on ink, it
  // printed mid-grey and he did not stand out.) Fill INK over PAPER.
  const mid = (ARCH.x0 + ARCH.x1) / 2
  const arch = gougeField(
    rng(4205),
    { x0: ARCH.x0, x1: ARCH.x1, y0: ARCH.top, y1: PAVE },
    (x, y) => clamp((Math.abs(x - mid) - 34) / 60 + Math.max(0, 128 - y) / 70) * 0.9,
    { spacing: 6, len: [14, 50], gap: [6, 18], max: 3.4 },
  )
  const street = nightStreet(4204, { x0: 0, x1: W, y0: PAVE + 2, y1: H }, (x, y) =>
    Math.max(torchLight(x, y - 70) * 0.9, clamp(1 - Math.abs(x - 430) / 170) * 0.55, 0.06),
  )
  const glowL = rays(rng(4206), FLAME_L[0], FLAME_L[1] - 8, {
    from: 22,
    to: 64,
    every: 13,
    width: 2,
  })
  const glowR = rays(rng(4207), FLAME_R[0], FLAME_R[1] - 8, {
    from: 22,
    to: 64,
    every: 13,
    width: 2,
  })
  cached = { sky, stars: st, stone, arch, street, glowL, glowR }
  return cached
}

/** The roofline of the street against the sky, with chimneys. Fill INK. */
const ROOFS =
  `M0 ${PAVE}V52H120V44H330V34H530V48H700V40H${W}V${PAVE}Z` +
  chimney(64, 22, 52) +
  chimney(262, 14, 44) +
  chimney(612, 22, 48) +
  chimney(808, 18, 40)
/** Pointed windows in the house fronts, dark, their frames cut in paper. */
const WINDOWS =
  gothicArch(30, 62, 70, 128) +
  gothicArch(150, 182, 70, 128) +
  gothicArch(240, 272, 66, 124) +
  gothicArch(560, 592, 70, 128) +
  gothicArch(660, 692, 64, 122) +
  gothicArch(800, 832, 64, 122)

function OthelloWillNotHide({ uid }: ArtProps) {
  const m = marks()
  const archD = gothicArch(ARCH.x0, ARCH.x1, ARCH.top, PAVE, 0.62)
  const clip = `${uid}-arch`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={archD} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
        {/* the sky over the street, and the house fronts, lit by the torches */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        <path d={ROOFS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.stone} fill={PAPER} />
        <path d={WINDOWS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M46 78V128M166 78V128M256 74V124M576 78V128M676 72V122M816 72V122"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d={`M0 146H${ARCH.x0 - 10}M${ARCH.x1 + 10} 146H${W}`}
          stroke={PAPER}
          strokeWidth={2}
        />
        {/* the arch through to the next street, the passage lit */}
        <path d={archD} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${clip})`}>
          <rect
            x={ARCH.x0}
            y={ARCH.top}
            width={ARCH.x1 - ARCH.x0}
            height={PAVE - ARCH.top}
            fill={PAPER}
          />
          <path d={m.arch} fill={INK} />
        </g>
        <path d={m.glowL + m.glowR} fill={PAPER} />

        {/* the street */}
        <rect x={0} y={PAVE} width={W} height={H - PAVE} fill={INK} />
        <path d={m.street} fill={PAPER} />
        <rect x={0} y={PAVE} width={W} height={2.4} fill={PAPER} />

        {/* those of Othello's side: an officer with a torch, Cassio, Iago */}
        <Person pose={TORCHBEARER} at={[58, FEET]} scale={1.02}>
          <HeldTorch grip={[20, -168]} top={[18, -196]} />
        </Person>
        <Person pose={CASSIO} at={[148, FEET]} scale={1.05}>
          <Blade grip={[27, -90]} angle={92} len={74} />
        </Person>
        <Person pose={IAGO} at={[238, FEET]} scale={1.05}>
          <Blade grip={[39, -134]} angle={-52} len={92} />
        </Person>

        {/* Othello in the open, before the arch: "Keep up your bright swords" */}
        <Person pose={OTHELLO} at={[424, FEET]} scale={1.08} />

        {/* Brabantio's party: Roderigo, Brabantio, an officer with a torch, a halberd */}
        <Person pose={HALBERDIER} at={[842, FEET]} scale={1.0} flip>
          <Halberd x={16} />
        </Person>
        <Person pose={TORCHBEARER} at={[762, FEET]} scale={1.0} flip>
          <HeldTorch grip={[20, -168]} top={[22, -196]} />
        </Person>
        <Person pose={BRABANTIO} at={[680, FEET]} scale={1.05} flip />
        <Person pose={RODERIGO} at={[588, FEET]} scale={1.04} flip>
          <Blade grip={[35, -142]} angle={-68} len={80} />
        </Person>
      </g>
    </>
  )
}

export const othelloWillNotHide: LinocutArt = { width: W, height: H, Draw: OthelloWillNotHide }
