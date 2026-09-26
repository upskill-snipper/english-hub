import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * The Ghost of Christmas Past, as Dickens describes it in Stave Two, and
 * nothing else. It is "like a child", yet "diminished to a child's
 * proportions" from an old man, and then:
 *
 *   "Its hair, which hung about its neck and down its back, was white as if
 *   with age; and yet the face had not a wrinkle in it, and the tenderest
 *   bloom was on the skin. The arms were very long and muscular; the hands
 *   the same, as if its hold were of uncommon strength. Its legs and feet,
 *   most delicately formed, were, like those upper members, bare. It wore a
 *   tunic of the purest white; and round its waist was bound a lustrous belt,
 *   the sheen of which was beautiful. It held a branch of fresh green holly in
 *   its hand; and, in singular contradiction of that wintry emblem, had its
 *   dress trimmed with summer flowers. But the strangest thing about it was,
 *   that from the crown of its head there sprung a bright clear jet of light,
 *   by which all this was visible; and which was doubtless the occasion of
 *   its using, in its duller moments, a great extinguisher for a cap, which it
 *   now held under its arm."
 *
 * So, from the waist up: a child's proportions (a large head on narrow
 * shoulders), in profile facing right; long white hair falling down its back,
 * and a smooth face with one small flat touch of the spot colour for the
 * bloom on its cheek; a white tunic, trimmed at the neck and the waist with
 * small flowers printed in the spot colour, and a dark belt cut with glints;
 * a long, muscled bare arm holding up a sprig of holly; the great cone of the
 * extinguisher tucked under its other arm; and, springing from its crown, the
 * jet of light, cut as a beam of straight bands with no outline, whose rays
 * spread through the ground, cut lightest round it. A first version drew the
 * jet as a single pointed shape, and it read as a feather worn on the head:
 * light must not have an outline.
 *
 * The flowers' colour is not given, so they take the print's one colour. The
 * holly is "green", which the print cannot show, so its leaves are ink, and
 * the card says so. Nothing here comes from a film or stage production.
 *
 * Seeds: 1820 for the ground, 1821 for the rays and the cuts in the figure.
 */

/** Where the jet of light springs from, and the point its rays spread from. */
const CROWN: Pt = [150, 98]
const SOURCE: Pt = [150, 70]

/**
 * The jet: a beam of light springing straight up from the crown to the top
 * of the block, cut as straight bands that widen as they rise, the middle one
 * almost solid. Straight-edged and without an outline, so it reads as light,
 * not as a plume or anything worn on the head.
 */
function jet(): string {
  const [cx, cy] = CROWN
  let d = wedge(cx, cy + 2, cx, 10, 9, 20)
  for (const k of [-1, 1]) {
    d += wedge(cx + k * 7, cy - 2, cx + k * 22, 10, 2.4, 6)
    d += wedge(cx + k * 11, cy, cx + k * 36, 10, 1.4, 3.6)
    d += wedge(cx + k * 15, cy + 3, cx + k * 50, 12, 0.8, 2.2)
  }
  return d
}

/** The head in profile, facing right: large, smooth, a child's. */
const HEAD =
  'M150 96C174 96 190 108 195 126C197 134 197 140 196 144C197 147 197 149 196 151L205 166C207 169 204 172 200 172C198 172 197 173 197 175C198 178 198 180 197 182C196 183 196 184 197 186C197 189 195 191 194 192C195 198 192 204 184 205C174 207 164 202 158 196C148 190 136 186 128 176C116 158 116 124 128 110C134 102 142 96 150 96Z'
/** White hair from the crown, over the back of the head, down its back. */
const HAIR =
  'M190 108C178 96 158 92 142 96C120 104 110 126 108 152C104 190 96 240 88 306L126 306C124 262 128 226 136 202C142 192 150 186 158 180C150 166 148 150 154 136C160 122 174 112 190 108Z'
const NECK = 'M158 190L154 216L186 216L184 198Z'
const BLOOM = 'M173 170C174 165 181 164 184 167C186 171 183 174 178 174C175 174 172 173 173 170Z'

const TUNIC = 'M152 208C132 212 118 224 114 242L108 318L234 318L228 242C224 224 210 212 190 208Z'
const BELT = 'M110 290C150 295 196 295 232 288L233 304C196 311 150 311 109 306Z'

/**
 * The far arm reaches out, long, to hold up the holly; the near arm is bent
 * over the extinguisher, holding it against its side.
 */
const FAR_ARM: Pt[] = [
  [206, 230],
  [222, 250],
  [236, 262],
  [250, 246],
  [262, 224],
  [270, 202],
]
const NEAR_ARM: Pt[] = [
  [168, 226],
  [162, 246],
  [160, 264],
  [174, 276],
  [192, 280],
]
const FAR_HAND = 'M262 196C264 184 276 180 282 188C286 196 282 206 272 208C264 208 260 202 262 196Z'
const NEAR_HAND =
  'M188 270C196 264 208 268 208 278C208 288 198 292 190 290C184 288 182 276 188 270Z'

/** "a great extinguisher for a cap": a cone, held under its arm, point behind. */
const EXTINGUISHER = 'M200 244L108 290C104 292 104 298 109 299L206 300Z'
const EXTINGUISHER_RIM =
  'M198 240C208 242 216 262 214 288C213 298 206 304 202 300C194 284 192 252 198 240Z'

/** The holly: its stem, and spiked leaves along it. */
const STEM: Pt[] = [
  [272, 192],
  [280, 170],
  [290, 146],
  [298, 122],
  [302, 104],
]
function hollyLeaf(x: number, y: number, a: number, s: number): string {
  // A leaf pointing along `a`, from its stalk: sharp spines along both edges.
  const c = Math.cos(a)
  const si = Math.sin(a)
  const P = (u: number, v: number): string =>
    `${n(x + (u * c - v * si) * s)} ${n(y + (u * si + v * c) * s)}`
  return `M${P(0, 0)}L${P(2.5, 3.6)}L${P(4.6, 3)}L${P(7, 4.7)}L${P(9.4, 3.3)}L${P(12, 4.3)}L${P(14.4, 2.4)}L${P(17, 0)}L${P(14.4, -2.4)}L${P(12, -4.3)}L${P(9.4, -3.3)}L${P(7, -4.7)}L${P(4.6, -3)}L${P(2.5, -3.6)}Z`
}
const LEAVES: [number, number, number, number][] = [
  [278, 178, -2.5, 1.2],
  [284, 160, -0.5, 1.25],
  [292, 140, -2.7, 1.15],
  [297, 124, -0.3, 1.1],
  [302, 106, -1.4, 1.05],
]

/** A small five-petalled flower, for the summer flowers on its dress. */
function flower(x: number, y: number, s: number): string {
  let d = ''
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2
    const px = x + Math.cos(a) * s * 1.05
    const py = y + Math.sin(a) * s * 1.05
    const r = s * 0.72
    d += `M${n(px - r)} ${n(py)}a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0Z`
  }
  return d
}
/** Round the neck, and along the top of the belt. */
const FLOWERS: Pt[] = [
  [146, 217],
  [158, 222],
  [171, 225],
  [184, 223],
  [196, 218],

  [216, 283],
  [226, 280],
]

type Marks = {
  ground: string
  light: string
  hairLines: string
  folds: string
  sheen: string
  front: string
  back: string
  muscle: string
  cone: string
  jet: string
}

const marks = once<Marks>(() => {
  const [sx, sy] = SOURCE
  // Everything is lit from the jet: the ground is cut widest nearest it.
  const ground = portraitGround(1820, (x, y) => 0.9 - Math.hypot(x - sx, y - sy) / 300)
  const r = rng(1821)
  const light = rays(r, sx, sy, { from: 58, to: 330, every: 4.4, width: 6.6 })

  // Long white hair: fine ink lines flowing from the crown down the back.
  let hairLines = ''
  for (let i = 0; i < 18; i++) {
    const t = i / 17
    const x0 = 184 - t * 50 + between(r, -2, 2)
    const y0 = 104 + t * 8
    const x1 = 94 + t * 36 + between(r, -2, 2)
    const y1 = 300 - t * 110 + between(r, -4, 4)
    hairLines += `M${n(x0)} ${n(y0)}C${n(x0 - 30)} ${n(y0 + 20)} ${n(x1 + 8)} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`
  }

  // The tunic's folds, falling from the neck and gathered at the belt.
  let folds = ''
  for (let i = 0; i < 6; i++) {
    const x = 134 + i * 16 + between(r, -2, 2)
    folds += `M${n(x)} ${n(236 + between(r, 0, 8))}Q${n(x + 3)} 262 ${n(x - 2 + i)} ${n(288)}`
  }

  // "a lustrous belt, the sheen of which was beautiful": glints cut into it.
  let sheen = ''
  for (let i = 0; i < 9; i++) {
    const x = 118 + i * 13 + between(r, -2, 2)
    const y = 298 + between(r, -1.5, 1.5)
    sheen += gouge(x - 5, y, x + 5, y, 1.4) + gouge(x, y - 5, x, y + 5, 1)
  }

  // "The arms were very long and muscular": thick, and cut with the swell of
  // the muscle.
  const front = ribbon(FAR_ARM, 21, 0.2, false)
  const back = ribbon(NEAR_ARM, 21, 0.2, false)
  const muscle =
    'M226 250Q236 256 240 262M246 252Q258 238 262 222M252 238Q258 228 261 218M160 240Q156 252 160 264M172 268Q180 272 190 272M163 232L157 236M161 240L155 245M160 249L154 254M160 258L155 263M163 266L159 271'

  let cone = ''
  for (let i = 0; i < 4; i++)
    cone += gouge(192 - i * 2, 252 + i * 10, 124 + i * 3, 288 + i * 2.4, 1.9 - i * 0.3)

  return { ground, light, hairLines, folds, sheen, front, back, muscle, cone, jet: jet() }
})

function GhostOfChristmasPastPortrait(_: ArtProps) {
  const m = marks()
  const leafVein = (x: number, y: number, a: number, s: number) =>
    `M${n(x)} ${n(y)}L${n(x + Math.cos(a) * 14 * s)} ${n(y + Math.sin(a) * 14 * s)}`
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <path d={m.light} fill={PAPER} />
      {/* The ink halo that lifts the lit figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round">
        <path d={HAIR} />
        <path d={HEAD} />
        <path d={TUNIC} />
        <path d={m.front} />
        <path d={m.back} />
        <path d={FAR_HAND} />
        <path d={EXTINGUISHER} />
        {LEAVES.map(([x, y, a, s]) => (
          <path key={`k${x}`} d={hollyLeaf(x, y, a, s)} />
        ))}
      </g>
      {/* "from the crown of its head there sprung a bright clear jet of light" */}
      <g className="lc-flicker" style={timing({ delay: 0.3, dur: 0.8 })}>
        <path d={m.jet} fill={PAPER} />
      </g>
      {/* The far arm, reaching out from behind the body with the holly. */}
      <path d={m.front} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={TUNIC} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={m.folds} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <path d={BELT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.sheen} fill={PAPER} />
      <path d={NECK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path
        d={m.hairLines}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* The extinguisher, held against its side under the near arm. */}
      <path
        d={EXTINGUISHER}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.cone} fill={PAPER} />
      <circle cx={104} cy={294.5} r={4.8} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={EXTINGUISHER_RIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.back} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={NEAR_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <g fill={RED}>
        {FLOWERS.map(([x, y]) => (
          <path key={`${x}-${y}`} d={flower(x, y, 3.6)} />
        ))}
      </g>
      <g fill={PAPER}>
        {FLOWERS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.3} />
        ))}
      </g>
      <path d={HEAD} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      {/* The hair falls over the back of the head, from a hairline at the brow. */}
      <path
        d="M190 108C178 116 164 126 156 140C150 154 152 170 158 180C146 176 134 166 128 150C122 128 130 108 150 100C164 96 180 100 190 108Z"
        fill={PAPER}
      />
      <path
        d="M190 108C178 116 164 126 156 140C150 154 152 170 158 180M184 104C166 110 150 124 146 146M176 101C158 106 142 120 138 142M164 98C148 104 136 116 132 136"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* "the tenderest bloom was on the skin" */}
      <path d={BLOOM} fill={RED} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M177 137Q186 133 195 138" strokeWidth={1.8} />
        <path d="M179 146Q186 142.5 193 146" strokeWidth={2.2} />
        <path d="M180.5 151Q186.5 153 192.5 150" strokeWidth={LINE.hairline} />
        <path d="M197 184.5L190 185" strokeWidth={1.6} />
        <path d="M200 165C197 163.5 194.5 164.5 194.5 167.5" strokeWidth={LINE.fine} />
        <path d="M186 196Q190 198 193 196" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={190} cy={147.4} r={2.6} fill={INK} />
      <circle cx={190.9} cy={146.5} r={0.8} fill={PAPER} />
      <path d={m.muscle} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      {/* "It held a branch of fresh green holly in its hand" */}
      <path d={ribbon(STEM, 3.6, 0, true)} fill={INK} stroke={PAPER} strokeWidth={1} />
      {LEAVES.map(([x, y, a, s]) => (
        <g key={`l${x}`}>
          <path
            d={hollyLeaf(x, y, a, s)}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={leafVein(x, y, a, s)} stroke={PAPER} strokeWidth={LINE.fine} />
        </g>
      ))}
      <path d={FAR_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path
        d="M266 190Q272 188 278 192M265 196Q271 194 277 198M266 202Q271 200 276 203"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <InnerRule />
    </>
  )
}

export const ghostOfChristmasPastArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: GhostOfChristmasPastPortrait,
}

export const ghostOfChristmasPastPortrait: Portrait = {
  name: 'Ghost of Christmas Past',
  art: ghostOfChristmasPastArt,
  alt: "A linocut portrait of the Ghost of Christmas Past, drawn from Dickens's description in Stave Two, seen from the waist up: a figure with the large head and narrow shoulders of a child, in profile and facing right. Long white hair falls from the top of its head down its back, but its face is smooth, with a small red flush on the cheek. It wears a plain white tunic trimmed at the neck and the waist with small red flowers, and a dark belt that glints. Its bare, long, muscled arm holds up a sprig of dark, spiky holly leaves, and under its other arm it holds a great cone-shaped extinguisher. A tall beam of white light springs straight up from the top of its head, and rays of light spread from it through the dark background. Six numbered red markers point to the white hair, the smooth face, the holly, the flowers on its dress, the jet of light and the extinguisher.",
  describedBy: [
    { phrase: 'was white as if with age', at: [52, 186], to: [96, 214] },
    { phrase: 'the face had not a wrinkle in it', at: [238, 120], to: [204, 148] },
    {
      phrase: 'It held a branch of fresh green holly in its hand',
      at: [304, 222],
      to: [288, 176],
    },
    { phrase: 'had its dress trimmed with summer flowers', at: [246, 300], to: [226, 284] },
    { phrase: 'a bright clear jet of light', at: [210, 40], to: [158, 52] },
    { phrase: 'a great extinguisher for a cap', at: [58, 262], to: [110, 288] },
  ],
  where: 'Stave Two',
  passage:
    'Its hair, which hung about its neck and down its back, was white as if with age; and yet the face had not a wrinkle in it, and the tenderest bloom was on the skin. The arms were very long and muscular; the hands the same, as if its hold were of uncommon strength. Its legs and feet, most delicately formed, were, like those upper members, bare. It wore a tunic of the purest white; and round its waist was bound a lustrous belt, the sheen of which was beautiful. It held a branch of fresh green holly in its hand; and, in singular contradiction of that wintry emblem, had its dress trimmed with summer flowers. But the strangest thing about it was, that from the crown of its head there sprung a bright clear jet of light, by which all this was visible; and which was doubtless the occasion of its using, in its duller moments, a great extinguisher for a cap, which it now held under its arm.',
  note: 'Every detail comes in opposites: old and young, winter holly and summer flowers, a light and the cap that can put it out. At the end of the stave Scrooge presses that cap down on it, and still cannot hide the light.',
  artNote:
    'The holly is green in the text; the print has only black and one red, so its leaves are black and the red is kept for the flowers and the bloom on its cheek.',
}
