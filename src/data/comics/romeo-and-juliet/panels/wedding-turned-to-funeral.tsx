import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { boards, houseWall } from './house-acts-3-4'
import { engravedSky, footShadow, type P } from './late-scenes-kit'
import { Figure, type Pose } from './late-scenes-people'

/**
 * Act 4, Scenes 4 and 5: "Wedding turned to funeral", the sixteenth moment in
 * the guide's timeline. Every detail is from the scenes, as the held edition
 * prints them (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "Juliet's Chamber; Juliet on the bed." It is the room of "Juliet drinks
 *   the potion" (./juliet-drinks-the-potion.tsx) the next morning, drawn from
 *   the same place so a student knows it again: the arched window on the
 *   left, the chest with the dress chosen for the wedding laid over it, the
 *   four-poster on the right with its scalloped valance, the plaster,
 *   wainscot and boards of Capulet's house (./house-acts-3-4.tsx). Its window,
 *   chest, gown and bed are that panel's shapes; change them together.
 * - SAFEGUARDING: Juliet, a girl of thirteen whom her family believe dead, is
 *   not drawn. The bed's curtains, tied back at the posts the night before,
 *   are loosed and drawn along its side, so the picture carries the moment in
 *   the people round the bed, as the Christmas Carol panels keep Tiny Tim's
 *   stool empty.
 * - "Good faith, 'tis day." "Have I thought long to see this morning's face".
 *   So the window is full of pale early daylight, the room's only light.
 * - The Nurse: "Alas, alas! Help, help! My lady's dead!" So she stands at the
 *   foot of the bed with both hands flung up.
 * - Lady Capulet: "O me, O me! My child, my only life. / Revive, look up, or I
 *   will die with thee." So she is on her knees at the bedside.
 * - Capulet: "Death lies on her like an untimely frost [...] Death, that hath
 *   ta'en her hence to make me wail, / Ties up my tongue and will not let me
 *   speak." So he stands bowed with his hand over his eyes.
 * - "Enter Friar Lawrence and Paris with Musicians." "Come, is the bride ready
 *   to go to church?" So the wedding party has come in on the left, black
 *   against the window: the Friar, who knows she is alive, with his hands
 *   folded in his sleeves; Paris, the bridegroom, with his hand at his heart;
 *   the musicians behind them with a pipe ("we may put up our pipes") and a
 *   rebeck (Hugh Rebeck).
 * - "Our bridal flowers serve for a buried corse, / And all things change
 *   them to the contrary." So a garland of bridal flowers hangs along the
 *   bed's valance, printed in the spot colour: the wedding the room was
 *   dressed for.
 *
 * The people are drawn as in the other late panels (./late-scenes-people.tsx).
 * Nothing is taken from a film or stage production. Seeds: 1601 (wall), 1602
 * (floor), 1603 (sky), 1604 (curtain folds), 1605 (garland).
 */

const W = 860
const H = 340
/** The dado rail and the floor line, as in "Juliet drinks the potion". */
const RAIL = 204
const FLOOR = 272
/** The window's opening, an arch on (112, 96), and its middle: the light comes from here. */
const WIN_PATH = 'M72 196V96A40 40 0 0 1 152 96V196Z'
const WIN: P = [112, 120]

const FRIAR: Pose = {
  look: 'friar',
  head: { at: [3, -176], rot: 4 },
  far: {
    arm: [
      [-3, -149],
      [2, -118],
      [15, -113],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [10, -117],
      [21, -111],
    ],
    hand: 'cup',
  },
}
const PARIS: Pose = {
  look: 'paris',
  head: { at: [3, -176], rot: -4 },
  far: {
    arm: [
      [-3, -149],
      [-6, -118],
      [-3, -94],
    ],
    hand: 'open',
    thumb: -1,
  },
  near: {
    arm: [
      [6, -147],
      [18, -122],
      [10, -136],
    ],
    hand: 'open',
    deg: -150,
    thumb: 1,
  },
  legs: {
    far: [
      [-5, -84],
      [-4, -46],
      [-8, 0],
    ],
    near: [
      [6, -84],
      [12, -46],
      [12, 0],
    ],
  },
  cloak: 3,
}
const PIPER: Pose = {
  look: 'youth',
  head: { at: [3, -176], rot: -6 },
  far: {
    arm: [
      [-3, -149],
      [10, -132],
      [22, -158],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [16, -128],
      [26, -150],
    ],
    hand: 'cup',
  },
  legs: {
    far: [
      [-5, -84],
      [-6, -46],
      [-8, 0],
    ],
    near: [
      [6, -84],
      [8, -46],
      [10, 0],
    ],
  },
}
const FIDDLER: Pose = {
  look: 'youth',
  head: { at: [3, -176], rot: 8 },
  far: {
    arm: [
      [-3, -149],
      [12, -140],
      [22, -156],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [14, -122],
      [30, -128],
    ],
    hand: 'cup',
  },
  legs: {
    far: [
      [-5, -84],
      [-6, -46],
      [-8, 0],
    ],
    near: [
      [6, -84],
      [8, -46],
      [10, 0],
    ],
  },
}
const CAPULET: Pose = {
  look: 'capulet',
  head: { at: [4, -172], rot: 22 },
  eye: 'none',
  far: {
    arm: [
      [-3, -149],
      [-7, -118],
      [-4, -94],
    ],
    hand: 'open',
    thumb: -1,
  },
  near: {
    arm: [
      [6, -147],
      [27, -142],
      [22, -168],
    ],
    hand: 'open',
    deg: -112,
    thumb: 1,
  },
  body: { hem: 30, stoop: 3 },
}
const NURSE: Pose = {
  look: 'nurse',
  head: { at: [7, -170], rot: -10 },
  far: {
    arm: [
      [-3, -147],
      [10, -160],
      [14, -188],
    ],
    hand: 'spread',
    deg: -80,
    thumb: -1,
  },
  near: {
    arm: [
      [6, -145],
      [26, -150],
      [32, -176],
    ],
    hand: 'spread',
    deg: -70,
    thumb: -1,
  },
  body: { hem: 36, stoop: 5, top: -152 },
}
/** Lady Capulet on her knees: one hand on the coverlet, the other at her face. */
const LADY: Pose = {
  look: 'lady',
  head: { at: [6, -128], rot: 18 },
  eye: 'down',
  far: {
    arm: [
      [-2, -104],
      [10, -110],
      [16, -126],
    ],
    hand: 'open',
    deg: -80,
    thumb: -1,
  },
  near: {
    arm: [
      [6, -102],
      [24, -94],
      [40, -104],
    ],
    hand: 'open',
    deg: -14,
    thumb: -1,
  },
  body: { hem: 40, top: -110 },
}

const AT = {
  piper: [18, 294] as P,
  fiddler: [58, 292] as P,
  friar: [112, 324] as P,
  paris: [184, 322] as P,
  capulet: [318, 326] as P,
  nurse: [424, 324] as P,
  lady: [566, 322] as P,
}

type Marks = {
  plaster: string
  wains: string
  floor: string
  sky: string
  folds: string
  cover: string
  garland: { flowers: [number, number][]; string: string; leaves: string }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // the morning light comes in at the window, on the left
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot(x - WIN[0], (y - WIN[1]) * 1.1) / 520) ** 0.9, 0.05)
  const wall = houseWall(rng(1601), W, RAIL, FLOOR, light, (x) => x > 460)
  // nothing is cut where the window or the bed covers the wall: every cut is
  // weight on the page
  const plaster = wall.plaster
    .split('M')
    .filter((c) => {
      if (!c) return false
      const [x, y] = c.split(/[ Q]/).map(Number)
      return !(x > 462 || (x > 56 && x < 168 && y > 40 && y < 206))
    })
    .map((c) => 'M' + c)
    .join('')
  const floor = boards(rng(1602), W, H, FLOOR, [430, 40])
  // the early sky in the window: clear low down, a few bars of cloud above
  const sky = engravedSky(rng(1603), { x0: 72, x1: 152, y0: 56, y1: 196 }, (_x, y) =>
    clamp(0.55 - (y - 56) / 200),
  )
  // the curtains loosed and drawn along the bed's side: heavy folds from the
  // valance down to the coverlet
  const r = rng(1604)
  let folds = ''
  for (let x = 494; x < 822; x += between(r, 13, 20)) {
    folds += gouge(x, 76, x + between(r, -3, 3), 208, between(r, 1.1, 2), between(r, -2, 2))
    if (r() < 0.45) folds += gouge(x + 6, 90, x + 5 + between(r, -3, 3), 200, 0.7, 1)
  }
  // the folds of the white coverlet where it hangs over the side of the bed
  let cover = ''
  for (let x = 512; x < 820; x += 38)
    cover += gouge(x, 220, x + between(r, -4, 4), 250, 1, between(r, -1.5, 1.5))
  // the garland: flowers on a swag along the valance, dipping between ties
  const g = rng(1605)
  const swag = (x: number) => 80 + Math.abs(Math.sin(((x - 484) / 86) * Math.PI)) * 11
  const flowers: [number, number][] = []
  for (let x = 494; x < 828; x += 22)
    flowers.push([n2(x + between(g, -2, 2)), n2(swag(x) + between(g, -1, 1))])
  let str = `M484 ${swag(484)}`
  for (let x = 490; x <= 828; x += 6) str += `L${x} ${n(swag(x))}`
  let leaves = ''
  for (const [x, y] of flowers)
    leaves += gouge(x + 6, y + 1, x + 12, y - 3, 1.5) + gouge(x + 6, y + 2, x + 12, y + 6, 1.4)
  cached = {
    plaster,
    wains: wall.wains,
    floor,
    sky,
    folds,
    cover,
    garland: { flowers, string: str, leaves },
  }
  return cached
}

const n2 = (v: number) => Math.round(v * 10) / 10

/** A flower of the garland: five petals round a dark heart, in the spot colour. */
function flower(x: number, y: number) {
  let d = ''
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 - Math.PI / 2
    const cx = x + Math.cos(a) * 3
    const cy = y + Math.sin(a) * 3
    d += `M${n(cx - 2.6)} ${n(cy)}a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0Z`
  }
  return d
}

function WeddingTurnedToFuneral({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  let valance = 'M470 50H840V64'
  for (let x = 840; x > 470; x -= 18.5) valance += `Q${n(x - 9.25)} 74 ${n(x - 18.5)} 64`
  valance += 'Z'
  return (
    <>
      <defs>
        <clipPath id={win}>
          <path d={WIN_PATH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [330, 170], push: 1.03 })}>
        {/* Juliet's chamber in the morning: plaster, rail and wainscot */}
        <path d={m.plaster} fill={PAPER} />
        <rect x={0} y={RAIL - 6} width={460} height={6} fill={PAPER} />
        <rect x={0} y={RAIL} width={460} height={1.6} fill={INK} />
        <path d={m.wains} fill={PAPER} />
        {/* the window, full of pale early daylight */}
        <path d="M60 204V96A52 52 0 0 1 164 96V204Z" fill={PAPER} />
        <path d="M66 200V96A46 46 0 0 1 158 96V200Z" fill={INK} />
        <path d={WIN_PATH} fill={PAPER} />
        <g clipPath={`url(#${win})`}>
          <path d={m.sky} fill={INK} />
        </g>
        <path d="M112 56V196M72 132H152" stroke={INK} strokeWidth={2.6} />
        <rect x={56} y={196} width={112} height={8} fill={PAPER} />
        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the chest, and the dress chosen for the wedding still laid over it */}
        <path d="M196 300V246H318V300Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M192 246C192 236 200 232 210 232H304C314 232 322 236 322 246Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g stroke={INK} strokeWidth={1.2} strokeLinejoin="round" fill={PAPER}>
          <path d="M206 240C204 252 204 262 208 272L220 270C218 260 218 250 220 242Z" />
          <path d="M308 240C310 252 310 262 306 272L294 270C296 260 296 250 294 242Z" />
          <path d="M238 244L276 244C286 260 296 280 306 298L208 298C218 280 228 260 238 244Z" />
          <path d="M226 238C230 230 238 228 246 230C252 234 262 234 268 230C276 228 284 230 288 238L276 244H238Z" />
        </g>
        <path
          d={
            gouge(246, 250, 232, 294, 0.8, 0.6) +
            gouge(257, 250, 256, 294, 0.8, 0) +
            gouge(268, 250, 282, 294, 0.8, -0.6) +
            gouge(238, 244.5, 276, 244.5, 0.9)
          }
          fill={INK}
        />

        {/* the bed: its canopy, valance and posts, the curtains drawn along its side */}
        <path d="M482 64H828V216H482Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.folds} fill={PAPER} />
        <path
          d={valance}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <rect
          x={462}
          y={40}
          width={386}
          height={12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M476 52V282M834 52V282" stroke={PAPER} strokeWidth={10} />
        <path d="M476 52V282M834 52V282" stroke={INK} strokeWidth={7} />
        {/* the white coverlet, hanging over the side below the curtains */}
        <path d="M480 212H830V258H480Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M482 214H828V250C816 256 804 248 792 254C780 260 766 250 754 256C742 262 728 250 716 256C704 262 690 250 678 256C666 262 652 250 640 256C628 262 614 250 602 256C590 262 576 250 564 256C552 262 538 250 526 256C514 262 498 252 482 256Z"
          fill={PAPER}
        />
        <path d={m.cover} fill={INK} />
        <path d="M484 258V278M826 258V278" stroke={INK} strokeWidth={8} />
        <path
          d={Array.from({ length: 12 }, (_, i) =>
            wedge(500 + i * 28, 262, 506 + i * 28, 272, 1, 0.4),
          ).join('')}
          fill={INK}
        />
        {/* "Our bridal flowers serve for a buried corse" */}
        <path d={m.garland.string} fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path d={m.garland.leaves} fill={PAPER} />
        <g fill={RED} stroke={INK} strokeWidth={0.6}>
          {m.garland.flowers.map(([x, y]) => (
            <path key={x} d={flower(x, y)} />
          ))}
        </g>
        <g fill={INK}>
          {m.garland.flowers.map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r={1.6} />
          ))}
        </g>

        {/* shadows at their feet */}
        <path
          d={
            footShadow(AT.friar[0] + 4, AT.friar[1] + 2, 34) +
            footShadow(AT.paris[0], AT.paris[1] + 2, 26) +
            footShadow(AT.capulet[0], AT.capulet[1] + 2, 34) +
            footShadow(AT.nurse[0] - 4, AT.nurse[1] + 2, 38) +
            footShadow(AT.lady[0] + 4, AT.lady[1] + 2, 44)
          }
          fill={INK}
        />

        {/* the musicians, behind, at the edge of the room: a pipe and a rebeck */}
        <Figure pose={PIPER} at={AT.piper} scale={0.8}>
          <path d="M24 -150L52 -186" stroke={INK} strokeWidth={4.4} strokeLinecap="round" />
          <path d="M50 -184L58 -194" stroke={INK} strokeWidth={7} strokeLinecap="round" />
          <path
            d="M31 -160L33 -162M37 -168L39 -170M43 -176L45 -178"
            stroke={PAPER}
            strokeWidth={1.4}
          />
        </Figure>
        <Figure pose={FIDDLER} at={AT.fiddler} scale={0.8}>
          <path
            d="M14 -166C10 -160 12 -150 20 -148C26 -146 30 -150 34 -148C40 -146 44 -150 42 -158C40 -166 32 -170 26 -170C21 -170 17 -169 14 -166Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
          <path d="M40 -160L60 -170" stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
          <path d="M22 -162L36 -156M22 -158L36 -152" stroke={PAPER} strokeWidth={0.8} />
          <path d="M8 -140L50 -168" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        </Figure>

        {/* the Friar, who knows she lives, his hands folded in his sleeves */}
        <Figure pose={FRIAR} at={AT.friar} scale={1.04} />
        {/* Paris, the bridegroom, his hand at his heart */}
        <Figure pose={PARIS} at={AT.paris} scale={1.02} />
        {/* Capulet, his hand over his eyes: "Ties up my tongue" */}
        <Figure pose={CAPULET} at={AT.capulet} scale={1.06} />
        {/* the Nurse at the foot of the bed: "Alas, alas! Help, help!" */}
        <Figure pose={NURSE} at={AT.nurse} scale={1} flip />
        {/* Lady Capulet on her knees at the bedside */}
        <Figure pose={LADY} at={AT.lady} scale={1.04} />
      </g>
    </>
  )
}

export const weddingTurnedToFuneral: LinocutArt = {
  width: W,
  height: H,
  Draw: WeddingTurnedToFuneral,
}
