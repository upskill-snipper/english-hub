import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { SCROOGE_HEAD } from '../scrooge'
import { NIGHTCAP, NIGHTCAP_TASSEL } from './cut-figure'

/**
 * Stave Five: "Christmas morning", the sixteenth moment in the guide's
 * timeline. Of the morning's many scenes this is the first out of doors, the
 * one in which he learns what day it is. Every detail is from the text:
 *
 * - "He was checked in his transports by the churches ringing out the lustiest
 *   peals he had ever heard... Oh, glorious, glorious!" So church towers stand
 *   over the roofs, their bells swung up in the belfries, with rings of sound
 *   cut round them. The bells take the spot colour.
 * - "Running to the window, he opened it, and put out his head. No fog, no
 *   mist; clear, bright, jovial, stirring, cold; cold, piping for the blood to
 *   dance to; Golden sunlight; Heavenly sky". So, unlike every print before
 *   it, this one has no fog: the sky is the bare paper, lit by a sun whose
 *   rays are cut in ink across it. The print cannot show gold, so the sun is
 *   the paper itself.
 * - "'What's to-day!' cried Scrooge, calling downward to a boy in Sunday
 *   clothes, who perhaps had loitered in to look about him. 'EH?' returned the
 *   boy, with all his might of wonder." So the boy stands in the street with
 *   his face turned up and his mouth open, in a plain best jacket and cap.
 * - Scrooge has just "scrambled out of bed", and still wears the nightcap he
 *   wore with the Spirits (the shape the Stave Four panels share, in
 *   ./cut-figure) and the dark dressing-gown of every panel since Marley's
 *   visit: at the end of Stave One he "went straight to bed, without
 *   undressing", and he is not dressed yet ("Scrooge's hands were busy with
 *   his garments all this time"). The first draft put him in a white
 *   night-shirt, which the text never gives him, so the one morning he is
 *   changed he looked like a different man; he is in the same gown now, cut
 *   with a paper edge against the dark house. He is "so fluttered and so glowing with
 *   his good intentions" and "laughing and crying in the same breath", so his
 *   head is his portrait's profile (SCROOGE_HEAD) with the mouth open in a
 *   laugh, and the spot colour glows on his cheek as on Fred's in the first
 *   panel.
 * - Below his window is the street door and its knocker: "the knocker caught
 *   his eye. 'I shall love it, as long as I live!'"
 *
 * Seed 1601.
 */

const W = 860
const H = 340

/** The sun, where the light comes from. */
const SUN: [number, number] = [654, 62]

type Marks = {
  skyRays: string
  skyEdge: string
  sunSpikes: string
  wall: string
  bricks: string
  street: string
  sound: string
  shirt: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1601)

  // "Golden sunlight; Heavenly sky": the sky is the paper, and the sun's rays
  // are cut across it in ink, fine near the sun and heavier far from it, so
  // the light seems to pour out of the one bright place.
  let skyRays = ''
  let k = 0
  for (let a = 0; a < 360; a += between(r, 4.6, 6.4), k++) {
    const ang = deg(a)
    // Long and short rays in turn, as a cutter lays out a sunburst.
    let rad = k % 2 ? between(r, 44, 56) : between(r, 80, 110)
    while (rad < 640) {
      const len = between(r, 50, 130)
      const w0 = 0.4 + rad / 190
      skyRays += wedge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        w0,
        w0 + len / 150,
      )
      rad += len + between(r, 6, 16)
    }
  }
  // The sun's own short spikes, in ink round the disc.
  let sunSpikes = ''
  for (let a = 0; a < 360; a += 22.5) {
    const ang = deg(a + 11)
    const c = Math.cos(ang)
    const s = Math.sin(ang)
    sunSpikes += `M${n(SUN[0] + c * 30)} ${n(SUN[1] + s * 30)}L${n(SUN[0] + c * 40 - s * 3.4)} ${n(SUN[1] + s * 40 + c * 3.4)}L${n(SUN[0] + c * 40 + s * 3.4)} ${n(SUN[1] + s * 40 - c * 3.4)}Z`
  }
  // A band of ink along the top edge, broken, so the sky sits in the block.
  let skyEdge = ''
  for (let y = 8; y < 30; y += 6) {
    let x = 276 + between(r, -10, 0)
    while (x < W) {
      const len = between(r, 30, 100)
      const L = clamp(1 - Math.hypot(x - SUN[0], y - SUN[1]) / 300)
      if (r() > 0.2 + L) skyEdge += gouge(x, y, x + len, y, 1.6 - (y - 8) / 20)
      x += len + between(r, 10, 30)
    }
  }

  // Scrooge's house front, in shadow: brick courses, faint, catching a little
  // light at the corner.
  let wall = ''
  for (let y = 10; y < 296; y += 7) {
    let x = 4 + between(r, -12, 0)
    while (x < 274) {
      const len = between(r, 10, 30)
      const L = clamp((x - 170) / 110, 0.1, 0.9)
      if (r() < 0.2 + L * 0.5) wall += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.4 + L)
      x += len + between(r, 6, 20)
    }
  }

  // The house fronts across the street, full in the sun: pale, with a few
  // courses of brick in ink.
  let bricks = ''
  for (let y = 250; y < 288; y += 6) {
    let x = 278 + between(r, -10, 0)
    while (x < W) {
      const len = between(r, 14, 50)
      if (r() < 0.55) bricks += gouge(x, y, x + len, y, 0.7)
      x += len + between(r, 6, 24)
    }
  }

  // The street: paper setts with ink joints.
  let street = ''
  for (let row = 0; row < 6; row++) {
    const y = 300 + row * 6.8
    let x = 276 + between(r, -10, 0)
    while (x < W) {
      const len = between(r, 10, 18) + row * 1.4
      street += gouge(x, y, x + len, y + between(r, -0.3, 0.3), 0.7 + row * 0.14)
      x += len + between(r, 3, 6)
    }
  }

  // "ding, dong, bell": rings of sound round the two belfries.
  let sound = ''
  for (const [cx, cy, k] of [
    [432, 132, 3],
    [790, 160, 2],
  ] as const)
    for (let i = 0; i < k; i++) {
      const rad = 32 + i * 11
      sound += arcDashes(r, cx, cy, rad, deg(196), deg(250), [8, 16], [4, 8])
      sound += arcDashes(r, cx, cy, rad, deg(290), deg(344), [8, 16], [4, 8])
    }

  // Folds in his dressing-gown, cut in paper.
  const shirt =
    gouge(220, 186, 214, 222, 1, 1) +
    gouge(234, 180, 234, 222, 1, 0.5) +
    gouge(266, 180, 274, 222, 1, -1) +
    gouge(280, 190, 300, 200, 0.9, -1)

  cached = { skyRays, skyEdge, sunSpikes, wall, bricks, street, sound, shirt }
  return cached
}

/** Roofs, chimneys and the two church towers against the sky, as one ink shape. */
const SKYLINE =
  'M276 248V214L292 202V190H300V202L314 214H352L372 198L392 214V164H404V124L418 108V92L432 40L446 92V108L460 124V164H472V214H500L522 196L544 214V202H552V190H562V202H572V214H600V206L626 188L652 206V214H684V200H694V190H704V200H714V214H736L756 200H768V156L780 144V124L790 94L800 124V144L812 156V214H830L846 202L860 212V248Z'
/** The belfry openings, cut out of the towers. */
const BELFRIES =
  'M412 156V134Q412 124 420 122Q428 124 428 134V156ZM436 156V134Q436 124 444 122Q452 124 452 134V156ZM778 184V168Q778 160 784 158Q790 160 790 168V184ZM792 184V168Q792 160 798 158Q804 160 804 168V184Z'
/** The bells, swung up mid-peal. */
const BELLS =
  'M414 150C414 142 416 134 420 132C424 134 426 142 426 150Z' +
  'M438 148C440 140 444 134 448 134C450 138 450 144 448 152Z' +
  'M780 180C780 174 782 168 784 167C786 168 788 174 788 180Z' +
  'M794 178C795 173 798 168 800 168C802 171 802 175 801 180Z'
/** The windows of the houses across the street. */
const FRONT_WINDOWS = [300, 362, 424, 486, 610, 672, 734, 796]

/**
 * Scrooge's house on the left, in shadow: the wall, the open sash window he
 * leans out of, and the street door with its knocker below.
 */
const HOUSE = 'M0 0H276V300H0Z'

/**
 * Scrooge leaning out over the sill: his dressing-gown, one hand on the sill,
 * the other arm flung out towards the boy with the hand open.
 */
const SHIRT =
  'M204 226C204 206 208 192 216 182C222 174 232 168 244 166L258 165C268 167 276 175 280 186C284 198 286 212 286 226Z'
/** The gown's crossed collar, cut in paper, as in the other night panels. */
const SHIRT_NECK = 'M240 167L252 190L262 166M252 190L246 222'
const ARMS: [string, number][] = [
  ['M274 180C284 188 294 194 304 200C312 204 318 208 324 212', 14],
  ['M214 188C204 196 194 204 184 212', 13],
]
const HANDS =
  // the open hand, palm down, fingers towards the boy
  'M322 206C328 204 334 206 338 210L350 214C352 215 352 218 350 218L340 217L350 222C352 223 351 226 349 226L339 222L346 228C347 230 345 232 343 231L334 226C328 226 322 222 320 216Z' +
  // the hand on the sill
  'M168 208C174 204 182 206 184 212L182 220L166 220C164 216 164 212 168 208Z'
/** His head: SCROOGE_HEAD, 60 units tall, put out of the window and tipped down to the boy. */
const HEAD_AT = 'translate(262 132) rotate(16) scale(0.355) translate(-110 -116)'
/** His neck, in the head's frame, down into the open shirt. */
const NECK = 'M62 186C64 204 64 222 60 242L126 242C118 222 114 204 112 186Z'

/** The boy, in the street, face turned up: cap, short jacket, trousers. */
const BOY_BODY =
  'M552 246C547 252 545 262 545 274L547 292L573 292L575 274C575 262 573 252 568 246C564 244 556 244 552 246Z'
const BOY_LEGS: [string, number][] = [
  ['M552 290L550 314', 8],
  ['M568 290L572 314', 8],
]
const BOY_ARMS: [string, number][] = [
  ['M550 252C543 262 541 274 541 286', 6.5],
  ['M570 252C577 260 581 270 582 280', 6.5],
]
/** His head tipped back, face up and to the left. */
const BOY_HEAD =
  'M548 230C546 222 552 216 560 216C568 217 572 224 571 232C570 240 564 244 558 243C552 242 549 237 548 230Z'
const BOY_CAP =
  'M556 217C560 212 568 212 572 217C575 222 574 228 571 232L566 226C564 222 560 220 556 217Z'
const BOY_PEAK = 'M556 217L548 213L550 219Z'
/** His head tipped back to look up at the window. */
const BOY_HEAD_AT = 'rotate(18 560 244)'
const BOY_BOOTS =
  'M545 311H555V318H542C542 315 543 312 545 311ZM568 311H577C580 312 581 315 581 318H568Z'

function ChristmasMorning({ uid }: ArtProps) {
  const m = marks()
  const id = {
    house: `${uid}-house`,
  }
  return (
    <>
      <defs>
        <clipPath id={id.house}>
          <path d={HOUSE} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 170], push: 1.03 })}>
        {/* "Golden sunlight; Heavenly sky" */}
        <rect x={276} y={0} width={W - 276} height={250} fill={PAPER} />
        <path d={m.skyRays} fill={INK} />
        <path d={m.skyEdge} fill={INK} />
        <circle cx={SUN[0]} cy={SUN[1]} r={34} fill={PAPER} />
        <path d={m.sunSpikes} fill={INK} />
        <circle cx={SUN[0]} cy={SUN[1]} r={25} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />

        {/* the roofs and the towers, the bells mid-peal */}
        <path d={SKYLINE} fill={INK} />
        <path d={BELFRIES} fill={PAPER} />
        <path d={BELLS} fill={RED} />
        <path
          d="M420 130V126M444 132V126M784 165V162M798 166V162"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path
          className="lc-glow"
          d={m.sound}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinecap="round"
        />
        <path
          d={
            gouge(432, 46, 432, 104, 0.8) +
            gouge(790, 100, 790, 140, 0.7) +
            gouge(398, 170, 398, 212, 0.8) +
            gouge(466, 170, 466, 212, 0.8)
          }
          fill={PAPER}
        />

        {/* the houses across the street, in the sun, and the street */}
        <rect x={276} y={244} width={W - 276} height={48} fill={PAPER} />
        <path d="M276 244H860" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.bricks} fill={INK} />
        <g fill={INK}>
          {FRONT_WINDOWS.map((x) => (
            <rect key={x} x={x} y={252} width={24} height={32} />
          ))}
        </g>
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          {FRONT_WINDOWS.map((x) => (
            <path key={x} d={`M${x + 12} 252v32M${x} 268h24`} />
          ))}
        </g>
        <rect x={276} y={290} width={W - 276} height={6} fill={INK} />
        <rect x={276} y={296} width={W - 276} height={H - 296} fill={PAPER} />
        <path d={m.street} fill={INK} />

        {/* the boy in Sunday clothes, looking up with all his might of wonder */}
        <g fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round">
          <path d={BOY_BODY} />
          <path d={BOY_HEAD} transform={BOY_HEAD_AT} />
          <path d={BOY_CAP} transform={BOY_HEAD_AT} />
          <path d={BOY_BOOTS} />
        </g>
        <g fill="none" stroke={PAPER} strokeLinecap="round">
          {[...BOY_LEGS, ...BOY_ARMS].map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w + 3.6} />
          ))}
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round">
          {[...BOY_LEGS, ...BOY_ARMS].map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w} />
          ))}
        </g>
        <path d={BOY_BODY} fill={INK} />
        <path d="M556 246L558 258L562 246Z" fill={PAPER} />
        <path d={gouge(566, 256, 570, 288, 0.8, -0.5)} fill={PAPER} />
        <path d={BOY_BOOTS} fill={INK} />
        <g transform={BOY_HEAD_AT}>
          <path d={BOY_HEAD} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path d={BOY_CAP} fill={INK} />
          <path d={BOY_PEAK} fill={INK} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <circle cx={554} cy={225} r={1.5} fill={INK} />
          <ellipse cx={553} cy={234.4} rx={1.6} ry={2.2} fill={INK} />
          <path d="M564 228C562 230 563 233 565 234" stroke={INK} strokeWidth={1.1} fill="none" />
        </g>

        {/* Scrooge's house, in shadow, and the door with its knocker */}
        <path d={HOUSE} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        <path d="M275 0V300" stroke={PAPER} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${id.house})`}>
          <path d="M140 44H268V224H140Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d="M148 52H260V132H148Z" fill={PAPER} />
          <path
            d="M148 52H260V132H148ZM185.3 52V132M222.6 52V132M148 92H260"
            fill="none"
            stroke={INK}
            strokeWidth={3}
          />
          <path
            d={
              gouge(154, 60, 180, 84, 1.2) +
              gouge(192, 62, 216, 84, 1.2) +
              gouge(228, 60, 254, 84, 1.2) +
              gouge(160, 100, 178, 124, 0.9)
            }
            fill={INK}
          />
          <path d="M136 224H272V232H136Z" fill={PAPER} />
          <path d="M136 232H272" stroke={INK} strokeWidth={1.4} />
          {/* the street door and the knocker */}
          <path d="M44 300V226H124V300" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d="M40 222Q84 204 128 222" fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
          <path d="M52 234H116V300H52Z" fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
          <path d="M84 234V300" stroke={PAPER} strokeWidth={LINE.fine} />
          <circle cx={84} cy={262} r={7} fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
          <circle cx={84} cy={253} r={3.6} fill={PAPER} />
        </g>
        {/* three steps down to the street */}
        <path d="M30 300H138V308H30ZM22 308H146V316H22ZM14 316H154V324H14Z" fill={PAPER} />
        <path d="M30 308H138M22 316H146M14 324H154" stroke={INK} strokeWidth={1.2} />
        <rect x={0} y={324} width={276} height={H - 324} fill={INK} />
        <path d="M0 300H14M154 300H276V340" fill="none" stroke={PAPER} strokeWidth={LINE.carve} />

        {/* Scrooge, leaning out into the sunlight in his dressing-gown */}
        <path d={SHIRT} fill={PAPER} stroke={PAPER} strokeWidth={6.8} strokeLinejoin="round" />
        <g fill="none" stroke={PAPER} strokeLinecap="round">
          {ARMS.map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w + 6.8} />
          ))}
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round">
          {ARMS.map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w} />
          ))}
        </g>
        <path d={SHIRT} fill={INK} />
        <path d={m.shirt} fill={PAPER} />
        <path
          d={SHIRT_NECK}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        {/* the sill, over the foot of the shirt: he leans out across it */}
        <path d="M136 224H272V232H136Z" fill={PAPER} />
        <path d="M136 232H272M136 224H272" stroke={INK} strokeWidth={1.4} />
        <path d={gouge(282, 190, 312, 206, 0.9, -0.6)} fill={PAPER} />
        <path d={HANDS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <g transform={HEAD_AT}>
          <path d={NECK} fill={PAPER} stroke={INK} strokeWidth={8} />
          <path d={SCROOGE_HEAD} fill={INK} stroke={INK} strokeWidth={10} />
          <path d={SCROOGE_HEAD} fill={PAPER} />
          <path d={NECK} fill={PAPER} />
          {/* the eye creased with laughing, the mouth open in the laugh */}
          <path
            d="M145 107Q154 99 163 106"
            fill="none"
            stroke={INK}
            strokeWidth={5.5}
            strokeLinecap="round"
          />
          <path
            d="M137 104L128 106M139 110L130 115"
            fill="none"
            stroke={INK}
            strokeWidth={3.2}
            strokeLinecap="round"
          />
          <path
            d="M166 150C160 160 148 164 138 158C142 168 154 172 162 166C166 162 168 156 166 150Z"
            fill={INK}
          />
          <path
            d="M96 106C86 108 84 122 92 132M128 120C138 132 142 146 136 158"
            fill="none"
            stroke={INK}
            strokeWidth={4}
            strokeLinecap="round"
          />
          <path d="M173 136C169 131 171 125 177 125" fill="none" stroke={INK} strokeWidth={3.6} />
          {/* "so glowing with his good intentions" */}
          <ellipse cx={114} cy={134} rx={13} ry={9} fill={RED} />
          <path d={NIGHTCAP} fill={PAPER} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
          <path
            d="M56 50C42 76 30 104 20 136"
            fill="none"
            stroke={INK}
            strokeWidth={3}
            strokeLinecap="round"
          />
          <path d={NIGHTCAP_TASSEL} fill={PAPER} stroke={INK} strokeWidth={4} />
        </g>
      </g>
    </>
  )
}

export const christmasMorning: LinocutArt = { width: W, height: H, Draw: ChristmasMorning }
