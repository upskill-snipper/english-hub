import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type Pose } from './people'

/**
 * Act 2, Scenes 2 to 6: "Jessica leaves her father", the fourth moment in
 * the guide's timeline. The moment runs over five scenes; the picture is its
 * last, Act 2, Scene 6, when she goes. Every detail is from the held edition
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Enter the masquers, Gratiano and Salarino." GRATIANO: "This is the
 *   penthouse under which Lorenzo / Desired us to make stand." LORENZO: "Here
 *   dwells my father Jew. Ho! who's within?" So it is the street before
 *   Shylock's house at night ("I am glad 'tis night"; "'Tis nine o'clock"),
 *   and Gratiano and Salarino, in the visors of masquers, stand under the
 *   penthouse, the roof over the house's door. Salarino holds a torch, its
 *   flame printed in the spot colour ("We have not spoke us yet of
 *   torch-bearers", 2.4): the one warm light, and the light Jessica is
 *   ashamed to be seen by ("What! must I hold a candle to my shames?").
 * - Shylock is at supper with the Christians ("I am bid forth to supper",
 *   2.5), so he is not drawn. He told her "Lock up my doors ... stop my
 *   house's ears, I mean my casements", so his door is shut and his other
 *   casement is shuttered.
 * - "Enter Jessica above, in boy's clothes." JESSICA: "Here, catch this
 *   casket; it is worth the pains." So Jessica, dressed as a page in the kit's
 *   'jessica-page' (a doublet and a small cap over her hair: "the lovely
 *   garnish of a boy"), leans from the one open casement with her arms held
 *   out, and the casket is in the air between her hands and Lorenzo's.
 * - Lorenzo, in his bonnet, stands in the street below with his face turned
 *   up to her and both hands raised, open, to catch it.
 * - The guide's list for the moment names Launcelet and Shylock too; they
 *   belong to its earlier scenes (2.2 to 2.5), not to this night in the
 *   street, and are left out.
 *
 * Nothing in the picture is demeaning: a young woman leaves her father's
 * house for the man she loves, and the quotation is her own farewell. The
 * people are cut from ./people.tsx; nothing is taken from a film or stage
 * production. Seeds: 1401 (the house), 1402 (the sky), 1403 (the street and
 * the torchlight).
 */

const W = 860
const H = 340
/** Where everyone stands. */
const FEET = 320
/** The foot of the houses, where the paving begins. */
const PAVE = 286
/** Shylock's house front, from here to the right edge. */
const HOUSE = 520
/** Jessica's casement: the opening. */
const CASE = { x0: 610, x1: 686, top: 36, bottom: 118 }
/** The shuttered casement. */
const SHUT = { x0: 764, x1: 834, top: 36, bottom: 118 }
/** The penthouse over the door: the underside of its roof. */
const PENT = { x0: 556, x1: W, top: 132, bottom: 150 }
/** The torch's flame. */
const FLAME: [number, number] = [735, 180]
/** The casket, in the air. */
const CASKET: [number, number] = [528, 104]

const JESSICA: Pose = {
  look: 'jessica-page',
  head: { rot: 12 },
  far: {
    pts: [
      [-3, -130],
      [18, -126],
      [44, -126],
    ],
    hand: 'open',
    deg: 2,
    thumb: 1,
  },
  near: {
    pts: [
      [4, -130],
      [26, -118],
      [52, -112],
    ],
    hand: 'open',
    deg: 12,
    thumb: 1,
  },
}

/**
 * Lorenzo, looking up, both hands raised open to catch the casket. The near
 * arm is carried out in front of him below the chin, so it does not cross his
 * face (raised straight up, it hid his profile).
 */
const LORENZO: Pose = {
  look: 'lorenzo',
  head: { rot: -14 },
  legs: {
    far: [
      [-3, -70],
      [-8, -36],
      [-12, -3],
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
      [14, -158],
      [30, -184],
    ],
    hand: 'open',
    deg: -62,
    thumb: -1,
  },
  near: {
    pts: [
      [4, -128],
      [32, -134],
      [52, -164],
    ],
    hand: 'open',
    deg: -50,
    thumb: -1,
  },
}

/** Gratiano, masked, under the penthouse (flipped), watching. */
const GRATIANO: Pose = {
  look: 'gratiano',
  masked: true,
  head: { rot: -12 },
  far: {
    pts: [
      [-3, -130],
      [-16, -108],
      [-6, -92],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [8, -104],
      [6, -84],
    ],
    hand: 'mitt',
  },
}

/** Salarino, masked (flipped), holding the torch out before him. */
const SALARINO: Pose = {
  look: 'salarino',
  masked: true,
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [18, -110],
      [34, -114],
    ],
    hand: 'mitt',
    deg: -84,
  },
}

type Marks = {
  stone: string
  sky: string
  stars: string
  far: string
  street: string
  glow: string
  door: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1401)
  // The house front at night: ink, its courses of stone cut in paper where
  // the torch and the lit casement reach them.
  const lit = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.2) / 200),
      clamp(1 - Math.hypot(x - 648, y - 80) / 120) * 0.8,
    )
  let stone = ''
  for (let y = 14; y < PAVE - 4; y += 14) {
    let x = HOUSE + between(r, -10, 0)
    while (x < W) {
      const len = between(r, 26, 60)
      const L = lit(x + len / 2, y)
      if (L > 0.05) stone += gouge(x, y + between(r, -0.5, 0.5), x + len, y, 0.5 + L * 1.4)
      x += len + between(r, 2, 6)
    }
    const off = (Math.round(y / 14) % 2) * 20
    for (let x2 = HOUSE + 10 + off; x2 < W; x2 += 40) {
      const L = lit(x2, y + 7)
      if (L > 0.15) stone += gouge(x2, y + 2, x2, y + 12, 0.4 + L * 0.8)
    }
  }
  // The night sky over the street: dark, a few cuts of cloud low down.
  const s = rng(1402)
  // Paler towards the roofs, so the far houses and Lorenzo's raised arms
  // stand black against it.
  const sky = gougeField(
    s,
    { x0: 0, x1: HOUSE, y0: 44, y1: 214 },
    (x, y) => clamp((y - 44) / 130) * 0.88 + 0.04,
    { spacing: 6.4, len: [26, 80], gap: [6, 22], max: 3.4 },
  )
  let stars = ''
  for (let k = 0; k < 26; k++) {
    const x = between(s, 14, HOUSE - 20)
    const y = between(s, 14, 120)
    if (x < 330 && y < 66) continue
    const a = between(s, 1.2, 2.6)
    stars += `M${n(x - a)} ${n(y)}L${n(x + a)} ${n(y)}M${n(x)} ${n(y - a)}L${n(x)} ${n(y + a)}`
  }
  // The far side of the street: a row of dark houses, a lit window or two.
  const far =
    'M-4 290V200H40V184H60V200H120V212H176V176H190V168H206V176H240V208H300V188H352V200H400V180H440V204H524V290Z'
  const t = rng(1403)
  let street = ''
  for (let y = PAVE + 5; y < H; y += 6) {
    let x = between(t, -20, 0)
    while (x < W) {
      const len = between(t, 16, 50)
      const L = clamp(1 - Math.hypot(x + len / 2 - FLAME[0], (y - FEET) * 3) / 340)
      if (t() < 0.34 + L * 0.8)
        street += gouge(x, y, x + len, y + between(t, -0.5, 0.5), 0.7 + L * 2.6)
      x += len + between(t, 6, 18) * (1 - L * 0.5)
    }
  }
  const glow = rays(rng(1404), FLAME[0], FLAME[1], { from: 16, to: 82, every: 10, width: 2.6 })
  let door = ''
  for (const x of [712, 730, 748, 766]) door += gouge(x, 190, x, PAVE - 2, 1.1)
  for (const y of [206, 250])
    for (const x of [704, 722, 740, 758, 776]) door += gouge(x - 1.6, y, x + 1.6, y, 1.3)
  cached = { stone, sky, stars, far, street, glow, door }
  return cached
}

/** The casket in flight: a small chest, tilted, with its bands and lock, and the arc it is thrown along. */
function FlyingCasket() {
  return (
    <g>
      <path
        d="M602 104Q576 86 552 92M598 116Q574 102 552 106"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeDasharray="5 5"
      />
      <g transform={`translate(${CASKET[0]} ${CASKET[1]}) rotate(-18) scale(1.1)`}>
        <path
          d="M-14 8H14V-4C14 -12 -14 -12 -14 -4Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path d="M-14 -3H14M-7 -9V8M7 -9V8" stroke={INK} strokeWidth={1.4} />
        <path d="M-2.4 -1H2.4V5H-2.4Z" fill={INK} />
      </g>
    </g>
  )
}

function JessicaLeaves({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-case`
  return (
    <>
      <defs>
        {/* Jessica is seen in her casement, and her arms reach out over the wall beside it. */}
        <clipPath id={clip}>
          <rect x={540} y={CASE.top} width={CASE.x1 - 540} height={CASE.bottom - CASE.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 150], push: 1.03 })}>
        {/* the night sky, its stars, and the far side of the street */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        <path d={m.far} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        {/* a few windows still lit across the street */}
        <path
          d="M56 222h9v13h-9zM72 222h9v13h-9zM214 196h9v13h-9zM322 218h9v13h-9zM470 226h9v13h-9zM148 250h9v13h-9z"
          fill={PAPER}
        />

        {/* Shylock's house front */}
        <rect x={HOUSE} y={0} width={W - HOUSE} height={PAVE} fill={INK} />
        <path d={m.stone} fill={PAPER} />
        <rect x={HOUSE - 3} y={0} width={3} height={PAVE} fill={PAPER} />
        {/* the shuttered casement: "stop my house's ears" */}
        <rect
          x={SHUT.x0 - 6}
          y={SHUT.top - 6}
          width={SHUT.x1 - SHUT.x0 + 12}
          height={SHUT.bottom - SHUT.top + 12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(SHUT.x0 + 8, SHUT.top + 6, SHUT.x0 + 8, SHUT.bottom - 6, 1.2) +
            gouge(SHUT.x0 + 22, SHUT.top + 6, SHUT.x0 + 22, SHUT.bottom - 6, 1.2) +
            gouge(SHUT.x1 - 22, SHUT.top + 6, SHUT.x1 - 22, SHUT.bottom - 6, 1.2) +
            gouge(SHUT.x1 - 8, SHUT.top + 6, SHUT.x1 - 8, SHUT.bottom - 6, 1.2)
          }
          fill={PAPER}
        />
        <path
          d={`M${(SHUT.x0 + SHUT.x1) / 2} ${SHUT.top}V${SHUT.bottom}`}
          stroke={PAPER}
          strokeWidth={2}
        />
        {/* Jessica's casement, open, the room behind it lit */}
        <rect
          x={CASE.x0 - 6}
          y={CASE.top - 6}
          width={CASE.x1 - CASE.x0 + 12}
          height={CASE.bottom - CASE.top + 12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={CASE.x0}
          y={CASE.top}
          width={CASE.x1 - CASE.x0}
          height={CASE.bottom - CASE.top}
          fill={PAPER}
        />
        {/* the open leaf of the casement, swung out */}
        <path
          d={`M${CASE.x1} ${CASE.top}L${CASE.x1 + 26} ${CASE.top + 10}V${CASE.bottom + 6}L${CASE.x1} ${CASE.bottom}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${CASE.x1 + 6} ${CASE.top + 12}L${CASE.x1 + 20} ${CASE.top + 17}V${CASE.bottom - 6}L${CASE.x1 + 6} ${CASE.bottom - 10}Z`}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <g clipPath={`url(#${clip})`}>
          <Person pose={JESSICA} at={[650, 204]} scale={1.02} flip />
        </g>
        {/* the sill */}
        <path
          d={`M${CASE.x0 - 14} ${CASE.bottom}H${CASE.x1 + 14}V${CASE.bottom + 7}H${CASE.x0 - 14}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />

        {/* the door, shut: "I will make fast the doors" */}
        <path
          d={`M700 ${PAVE}V194Q740 176 780 194V${PAVE}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path d={m.door} fill={PAPER} />
        {/* the torch's light across the house front */}
        <path d={m.glow} fill={PAPER} />
        {/* the penthouse: the roof over the door, on its brackets */}
        <path
          d={`M${PENT.x0} ${PENT.bottom}L${PENT.x0 + 10} ${PENT.top}H${PENT.x1}V${PENT.bottom}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(PENT.x0 + 14, PENT.top + 6, PENT.x1, PENT.top + 6, 1.1) +
            gouge(PENT.x0 + 8, PENT.top + 12, PENT.x1, PENT.top + 12, 1.1)
          }
          fill={PAPER}
        />
        <path
          d={`M${PENT.x0 + 18} ${PENT.bottom}L${PENT.x0 + 18} ${PENT.bottom + 14}L${PENT.x0 + 34} ${PENT.bottom}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />

        {/* the street */}
        <rect x={0} y={PAVE} width={W} height={H - PAVE} fill={INK} />
        <path d={m.street} fill={PAPER} />
        <rect x={0} y={PAVE} width={W} height={2.4} fill={PAPER} />
        <path d={footShadow(424, FEET + 2, 26)} fill={INK} />

        <Person pose={GRATIANO} at={[646, FEET]} scale={0.95} flip />
        <Person pose={SALARINO} at={[770, FEET]} scale={0.95} flip />
        {/* the torch in Salarino's hand: its staff, the cup, and a flame of
            several tongues (one smooth drop of red was tried first, and at
            panel size it read as a drop of blood) */}
        <g transform={`translate(${FLAME[0]} ${FLAME[1]})`}>
          <path d="M3 34L0 4" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
          <path d="M3 34L0 4" stroke={INK} strokeWidth={4} strokeLinecap="round" />
          <path
            d="M-7 0H7L4.4 6H-4.4Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          <g className="lc-flicker" style={timing({ dur: 0.9 })}>
            <path
              d="M-8 0C-12 -7 -9 -14 -5 -18C-5 -13 -3 -11 -1 -11C-2 -18 0 -25 4 -30C5 -23 9 -19 10 -13C11 -8 10 -3 8 0Z"
              fill={RED}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            <path d="M-2 -2C-4 -5 -3 -8 -1 -10C0 -7 2 -6 3 -8C4 -5 4 -3 3 -2Z" fill={PAPER} />
          </g>
        </g>
        <Person pose={LORENZO} at={[424, FEET]} scale={1.02} />
        <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 0.8 })}>
          <FlyingCasket />
        </g>
      </g>
    </>
  )
}

export const jessicaLeavesHerFather: LinocutArt = { width: W, height: H, Draw: JessicaLeaves }
