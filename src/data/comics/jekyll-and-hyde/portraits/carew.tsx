import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, hatch, once, portraitGround, smooth } from './common'

/**
 * Sir Danvers Carew, as the maid at her window sees him in Chapter 4, and
 * nothing else. The paragraph goes on to his murder, which is never drawn:
 * this is the moment before it, and Hyde is not in the picture.
 *
 *   "the lane, which the maid's window overlooked, was brilliantly lit by the
 *   full moon ... she became aware of an aged beautiful gentleman with white
 *   hair, drawing near along the lane ... the older man bowed and accosted
 *   the other with a very pretty manner of politeness ... the moon shone on
 *   his face as he spoke, and the girl was pleased to watch it, it seemed to
 *   breathe such an innocent and old-world kindness of disposition, yet with
 *   something high too, as of a well-founded self-content."
 *
 * So: an old man with a fine, handsome profile and long white hair falling
 * from under his hat to his collar, lit full in the face by the moon, which
 * hangs behind him in a clear sky; his head and shoulders inclined in a bow;
 * a gentle eye and the beginning of a smile ("kindness"), and the chin still
 * carried a little high ("something high too"). No hand is drawn: the bow is
 * the politeness, and a hand held out towards someone out of the picture
 * would only raise the question of what it was doing. He is dressed as a gentleman
 * and a member of Parliament of the 1880s would be (a black frock coat, a
 * high white collar, a dark stock), because his dress is not described; the
 * top hat and the white hair match the Carew of the panels
 * (../panels/people.tsx). There is no red in this plate: nothing in the
 * moment he is drawn in is red, and nothing that follows it is shown.
 * Nothing here comes from a film or stage production.
 *
 * Drawn facing right and mirrored as a whole by MIRROR, so the marker
 * coordinates below are in the printed frame. Seeds: 3701 for the ground,
 * 3702 for the cuts in the figure.
 */

const MIRROR = `matrix(-1 0 0 1 ${PW} 0)`
/** The bow: the head inclined forward, about the base of the neck. */
const BOW_DEG = 12
const BOW = `rotate(${BOW_DEG} 156 240)`
/** A point in the drawing's frame, as printed: bowed if it is on the head, then mirrored. */
const printed = (x: number, y: number, onHead = false): [number, number] => {
  let px = x
  let py = y
  if (onHead) {
    const a = deg(BOW_DEG)
    const dx = x - 156
    const dy = y - 240
    px = 156 + dx * Math.cos(a) - dy * Math.sin(a)
    py = 240 + dx * Math.sin(a) + dy * Math.cos(a)
  }
  return [Math.round((PW - px) * 10) / 10, Math.round(py * 10) / 10]
}

/** A fine old head in profile, facing right, under the brim of his hat. */
const HEAD = smooth([
  [124, 240, 1],
  [122, 214],
  [112, 190],
  [106, 158],
  [108, 120],
  [118, 100],
  [150, 96],
  [190, 96],
  [210, 102],
  [218, 112],
  [222, 122],
  [223.5, 130, 1],
  [218.5, 138],
  [225, 152],
  [233, 165, 1],
  [227, 169],
  [219, 169.5, 1],
  [220.5, 176],
  [218.5, 179, 1],
  [220, 182.5],
  [215.5, 188],
  [220, 198],
  [216, 208],
  [200, 212],
  [188, 220],
  [186, 240, 1],
])
/**
 * "white hair": long and soft below the brim, from the temple round the back
 * of the head and down over the collar, as in the panels. The shadow behind
 * the locks is ink; the locks themselves are cut in paper (LOCKS, below).
 */
const HAIR = smooth([
  [104, 104, 1],
  [154, 104],
  [158, 124],
  [150, 150],
  [146, 190],
  [140, 234],
  [122, 238],
  [102, 224],
  [90, 196],
  [86, 160],
  [90, 126],
])
/**
 * Each lock: where it starts under the brim, where it bends, where its tip
 * falls, and its width. They sweep back and down, the longest behind, and
 * the front ones are laid over the back ones.
 */
const LOCKS: [Pt, Pt, Pt, number][] = [
  [[108, 108], [84, 140], [92, 194], 9],
  [[118, 108], [94, 152], [100, 210], 10],
  [[128, 108], [106, 162], [110, 224], 10],
  [[138, 110], [120, 170], [122, 234], 9.5],
  [[148, 112], [134, 172], [134, 232], 8.5],
  [[156, 122], [146, 170], [144, 214], 7],
  [[192, 106], [186, 116], [183, 127], 6],
  [[182, 108], [176, 118], [172, 128], 6],
]
const EAR = smooth([
  [166, 136],
  [155, 138],
  [151, 154],
  [155, 170],
  [165, 175],
  [171, 165],
  [172, 148],
])
/** His top hat, worn: a tall crown and a curled brim. */
const CROWN = smooth([
  [128, 104, 1],
  [124, 66],
  [122, 32, 1],
  [214, 30, 1],
  [212, 66],
  [210, 102, 1],
])
const HAT_TOP = 'M122 32C122 25 214 23 214 30C214 37 122 39 122 32Z'
const BAND = smooth([
  [127, 88, 1],
  [211, 86, 1],
  [210, 102, 1],
  [128, 104, 1],
])
const BRIM = smooth([
  [104, 108],
  [116, 100],
  [170, 103],
  [224, 99],
  [238, 106],
  [224, 112],
  [170, 110],
  [116, 113],
])
const COAT = smooth([
  [36, 330, 1],
  [42, 292],
  [66, 264],
  [104, 250],
  [128, 244],
  [162, 256],
  [196, 252],
  [222, 262],
  [242, 292],
  [250, 330, 1],
])
const COLLAR = smooth([
  [122, 234, 1],
  [156, 246],
  [188, 234, 1],
  [192, 252, 1],
  [156, 262],
  [120, 252, 1],
])
const STOCK = smooth([
  [176, 250, 1],
  [198, 246, 1],
  [202, 262],
  [192, 270],
  [182, 264],
])
const LAPEL = smooth([
  [160, 262, 1],
  [184, 266, 1],
  [204, 330, 1],
  [182, 330, 1],
  [170, 294],
])

/** "brilliantly lit by the full moon" */
const MOON_AT: [number, number] = [294, 50]

type Marks = {
  ground: string
  glow: string
  moon: string
  locks: string[]
  hair: string
  back: string
  lines: string
  neck: string
  coat: string
  sheen: string
}

const marks = once<Marks>(() => {
  // A cloudless night, lit by the full moon from the upper right.
  const ground = portraitGround(3701, (x, y) =>
    clamp(1.05 - Math.hypot(x - MOON_AT[0], y - MOON_AT[1]) / 230),
  )
  const r = rng(3702)
  const glow = rays(r, MOON_AT[0], MOON_AT[1], { from: 30, to: 80, every: 8, width: 1.8 })
  // The moon's own marks, faint.
  const moon =
    arcDashes(r, MOON_AT[0] - 6, MOON_AT[1] - 4, 8, deg(0), deg(360), [4, 8], [3, 6]) +
    arcDashes(r, MOON_AT[0] + 7, MOON_AT[1] + 6, 5, deg(0), deg(360), [3, 6], [3, 5])
  // White hair: each lock a tapered ribbon of paper, with fine ink strands
  // along it, falling from under the brim to the collar.
  const locks: string[] = []
  let hair = ''
  for (const [a, b, c, w] of LOCKS) {
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const t = k / 10
      pts.push([
        (1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * b[0] + t * t * c[0],
        (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * b[1] + t * t * c[1],
      ])
    }
    locks.push(ribbon(pts, w, 0.55, false))
    for (let j = -1; j <= 1; j += 2) {
      const o = j * w * 0.2
      hair += `M${n(a[0] + o)} ${n(a[1] + 3)}Q${n(b[0] + o + between(r, -1, 1))} ${n(b[1])} ${n(c[0] + o * 0.3)} ${n(c[1] - 8)}`
    }
  }
  // The side of his head turned from the moon.
  let back = ''
  for (let rad = 30; rad < 60; rad += 3.6)
    back += arcDashes(r, 190, 164, rad, deg(112), deg(160), [8, 18], [2, 6])
  // An old face, but a fine one: a few lines only.
  let lines = arcDashes(r, 206, 150, 20, deg(78), deg(146), [14, 26], [3, 6])
  lines += 'M200 138L193 136M200 141L194 144M199 144L195 148'
  const neck = hatch(r, { x0: 124, x1: 192, y0: 216, y1: 240 }, 5, 0.08)
  const coat =
    gouge(62, 278, 52, 318, 2.2, 2) +
    gouge(92, 266, 84, 318, 1.6, 1.5) +
    gouge(128, 268, 124, 318, 1.1, -1)
  // Sheen on the silk of the hat, where the moonlight catches it.
  let sheen = ''
  for (let i = 0; i < 10; i++) {
    const x = 204 - i * 7 + between(r, -1, 1)
    sheen += gouge(x, 40 + between(r, 0, 6), x + 1.5, 82 - between(r, 0, 6), 1.8 - i * 0.14)
  }
  return { ground, glow, moon, locks, hair, back, lines, neck, coat, sheen }
})

function CarewPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-cw-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <g transform={MIRROR}>
        <path d={m.ground} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        <circle cx={MOON_AT[0]} cy={MOON_AT[1]} r={24} fill={PAPER} stroke={INK} strokeWidth={4} />
        <path d={m.moon} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
        {/* the ink halo that lifts him off the ground */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={COAT} />
          <g transform={BOW}>
            <path d={HEAD} />
            <path d={HAIR} />
            <path d={CROWN} />
            <path d={BRIM} />
          </g>
        </g>
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <g transform={BOW}>
          {/* "the moon shone on his face": bare paper, lit full */}
          <path d={HEAD} fill={PAPER} />
          <g clipPath={`url(#${headClip})`}>
            <g fill="none" stroke={INK} strokeLinecap="round">
              <path d={m.back} strokeWidth={1.2} />
              <path d={m.lines} strokeWidth={LINE.hairline} />
              <path d={m.neck} strokeWidth={1} />
            </g>
          </g>
          {/* "white hair": locks cut in paper over their own shadow */}
          <path d={HAIR} fill={INK} />
          {m.locks.map((d) => (
            <path
              key={d}
              d={d}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
          ))}
          <path
            d={m.hair}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
          <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.9} strokeLinejoin="round" />
          <path
            d="M164 145C158 147 157 159 160 166C162 169 165 168 166 164"
            fill="none"
            stroke={INK}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            {/* the jaw of an old man, carried a little high */}
            <path d="M216 208C200 214 182 210 172 196C167 188 166 178 166 170" strokeWidth={1.7} />
            {/* a white brow, cut as bristles, and a gentle eye */}
            <path
              d="M203 125l4 -2.6M208 124l4 -2.4M213 123.5l4 -2.2M218 124l3.4 -1.6"
              strokeWidth={1.2}
            />
            <path d="M205 133Q212 129.5 219.5 132.5" strokeWidth={2.1} />
            <path d="M206.5 136.5Q212.5 138.8 218.5 136" strokeWidth={LINE.fine} />
            {/* the nostril, and the beginning of a smile */}
            <path d="M227 166C223.5 163.5 223 159.5 225.5 157" strokeWidth={1.3} />
            <path d="M219 161C213 169 212 177 214 183" strokeWidth={LINE.hairline} />
            <path d="M218.5 179C214 179.6 211 178.4 209 175.5" strokeWidth={1.6} />
            <path d="M216.5 186Q214 187.4 212 186" strokeWidth={LINE.hairline} />
          </g>
          <circle cx={213.4} cy={134} r={2.2} fill={INK} />
          <circle cx={214.1} cy={133.3} r={0.75} fill={PAPER} />
          <path d={CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={m.sheen} fill={PAPER} />
          <path d={HAT_TOP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
          <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        </g>
        <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={STOCK} fill={INK} stroke={PAPER} strokeWidth={1} />
      </g>
      <InnerRule />
    </>
  )
}

export const carewArt: LinocutArt = { width: PW, height: PH, Draw: CarewPortrait }

export const carew: Portrait = {
  name: 'Sir Danvers Carew',
  art: carewArt,
  alt: "A linocut portrait of Sir Danvers Carew on a clear night, drawn from the maid's description in Chapter 4: an old gentleman in a tall silk top hat, seen in profile facing left, with a fine, handsome face and long white hair falling from under his hat to his collar. He is lit full in the face by a bright full moon that hangs behind him with rays of light cut round it. He inclines his head and shoulders in a polite bow, with a gentle eye and the beginning of a smile. He wears a black frock coat, a high white collar and a dark stock. No one else is in the picture. Four numbered red markers point to his white hair, his bowed head, his moonlit face and his kindly eye.",
  describedBy: [
    {
      phrase: 'an aged beautiful gentleman with white hair',
      at: printed(60, 210),
      to: printed(116, 206, true),
    },
    {
      phrase: 'the older man bowed and accosted the other with a very pretty manner of politeness',
      at: printed(72, 292),
      to: printed(148, 250),
    },
    { phrase: 'the moon shone on his face', at: printed(270, 204), to: printed(222, 188, true) },
    {
      phrase: 'innocent and old-world kindness of disposition',
      at: printed(266, 150),
      to: printed(218, 138, true),
    },
  ],
  where: 'Chapter 4',
  note: 'Carew is drawn as all courtesy and kindness, the opposite of the man he meets. The maid sees him only for a moment, and the moment is the last thing that is gentle in the chapter.',
  artNote:
    'His murder, which follows in the same paragraph, is never drawn; so the card prints only these phrases, not the passage. His dress is not described, so it is the plain dress of a gentleman of the 1880s.',
}
