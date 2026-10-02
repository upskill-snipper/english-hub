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
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  ageLines,
  combedFromCrown,
  EarCut,
  fringe,
  MAN_EAR,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  star,
  Toga,
  togaShapes,
  turn,
  type SP,
} from './common'

/**
 * Julius Caesar, from three lines of the play, two of them his own:
 *
 *   CAESAR: "Come on my right hand, for this ear is deaf, And tell me truly
 *   what thou think'st of him." (Act 1, Scene 2)
 *   CASSIUS: "His coward lips did from their colour fly, And that same eye
 *   whose bend doth awe the world Did lose his lustre." (Act 1, Scene 2)
 *   CAESAR: "But I am constant as the northern star, Of whose true-fix'd and
 *   resting quality There is no fellow in the firmament." (Act 3, Scene 1)
 *
 * So: the ear he cannot hear with, which a profile facing right shows (he
 * asks Antony to come to his right hand, so the deaf ear is his left), the
 * eye that the world goes in awe of, level and steady under a strong brow,
 * and ahead of him, in a dark sky of small stars, the one star that keeps its
 * place. The head is lifted a little towards it. The ageing man and the
 * monument are both in the lines, and both are drawn: the lines of his face,
 * and the star.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): his face
 * lined (CAESAR_LINES), as the oldest of the great men and ailing ("He had a
 * fever when he was in Spain", 1.2); his hair cropped short and combed
 * forward to a fringe at the brow (ROMAN_HAIR); the laurel wreath of a
 * general in triumph (LAUREL), cut in paper and never printed in red, since
 * red on a head reads as a wound; clean-shaven; and the toga. He is drawn
 * alive and whole, as everywhere in the gallery. There is no red in this
 * plate.
 *
 * Seeds: 1101 to 1104 and 1106 (the figure's marks), 1105 (the toga), 1110
 * and 1111 (the ground and the stars).
 */

/** The head lifted a little, towards the star: a turn about the neck. */
const LIFT = -4
const LIFT_T = `rotate(${LIFT} 112 214)`
const onHead = turn(112, 214, LIFT)

/**
 * His head: every man's head (MAN_HEAD) with the nose a little higher at the
 * bridge and stronger, the chin firmer and the neck thinner, for an older
 * man who has been ill. Facing right in the 0..240 by 0..332 frame.
 */
const HEAD = spline([
  [70, 230],
  [62, 202],
  [51, 174],
  [44, 142],
  [44, 108],
  [55, 74],
  [78, 50],
  [110, 38],
  [140, 39],
  [158, 52],
  [165, 70],
  [168.5, 87],
  [163.5, 97, 1],
  [171, 110],
  [179.5, 123],
  [181.5, 129.5],
  [176.5, 134],
  [168, 135.5, 1],
  [170.5, 140],
  [172.5, 144.5],
  [169.5, 148, 1],
  [171.8, 152],
  [168.5, 157, 1],
  [173, 166],
  [172, 178],
  [163, 186],
  [149, 191],
  [139, 197],
  [133, 212],
  [132, 230],
])

/** Hair cropped short over the crown and combed forward to a fringe at the brow. */
const HAIR_PTS: SP[] = [
  [160, 57, 1],
  [150, 61],
  [140, 63],
  [131, 67],
  [125, 80],
  [121, 96],
  [117, 108, 1],
  [106, 104],
  [96, 112],
  [90, 132],
  [84, 150],
  [76, 164],
  [62, 172, 1],
  [49, 170],
  [42, 142],
  [43, 108],
  [54, 74],
  [77, 49],
  [110, 37],
  [140, 38],
  [157, 50],
]
const HAIR = spline(HAIR_PTS)

/**
 * The laurel wreath: two rows of leaves along a band from the brow over the
 * temple to the back of the head, pointing back, the upper row turned up and
 * the lower down, as the kit's LAUREL lays them. Paper with an ink edge.
 */
const WREATH = (() => {
  const a: Pt = [161, 66]
  const c: Pt = [110, 38]
  const b: Pt = [48, 106]
  const at = (t: number): Pt => [
    (1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0],
    (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1],
  ]
  let leaves = ''
  let ribs = ''
  const count = 10
  for (let i = 0; i < count; i++) {
    const t = 0.02 + (i / (count - 1)) * 0.9
    const p = at(t)
    const q = at(Math.min(1, t + 0.02))
    const back = Math.atan2(q[1] - p[1], q[0] - p[0])
    for (const side of [-1, 1]) {
      const ang = back + side * deg(30)
      const len = 19
      const tip: Pt = [p[0] + Math.cos(ang) * len, p[1] + Math.sin(ang) * len]
      leaves += gouge(p[0], p[1], tip[0], tip[1], 4.6, side * 0.8)
      ribs += `M${n(p[0] + Math.cos(ang) * 3)} ${n(p[1] + Math.sin(ang) * 3)}L${n(p[0] + Math.cos(ang) * (len - 5))} ${n(p[1] + Math.sin(ang) * (len - 5))}`
    }
  }
  return { leaves, ribs }
})()

type Marks = { hair: string; fringe: string; nape: string; age: string; socket: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(1101, HAIR_PTS, [100, 74], 130, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  const edge = fringe([156, 58], [133, 66], 6, 9, 1102)
  const nape = napeShade(1103, 150, 118, 72, 128)
  const age = ageLines(1104, 3)
  const r = rng(1106)
  let socket = ''
  for (let rad = 9; rad < 15; rad += 2.6)
    socket += arcDashes(r, 155, 100, rad, deg(178), deg(258), [6, 14], [1.2, 2.6])
  for (let i = 0; i < 3; i++)
    socket += `M${n(127 + i * 3.2)} ${n(80 + i)}Q${n(123 + i * 3.4)} 92 ${n(129 + i * 3.2)} ${n(104 - i)}`
  return { hair, fringe: edge, nape, age, socket }
})

/** Caesar, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function CaesarFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-jc-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <g transform={LIFT_T}>
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.5} />
          {/* the lines of age: forehead, the eye's corner, the cheek */}
          <path d={m.age} strokeWidth={1.05} />
          {/* the eye deep under the brow, the hollow of the temple and the cheek */}
          <path d={m.socket} strokeWidth={0.95} />
          {/* the jaw, the slack under it, and the cords and creases of an old neck */}
          <path d="M108 150C118 170 140 183 166 184" strokeWidth={1.5} />
          <path d="M126 188Q142 196 158 192M118 196Q136 206 150 204" strokeWidth={LINE.hairline} />
          <path
            d="M124 198C127 210 129 220 130 232M110 198C112 212 113 222 113 234"
            strokeWidth={1}
          />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={m.fringe} fill={INK} />
        <EarCut {...MAN_EAR} />
        <path
          d={WREATH.leaves}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.1}
          strokeLinejoin="round"
        />
        <path d={WREATH.ribs} fill="none" stroke={INK} strokeWidth={0.7} strokeLinecap="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the heavy brow, level over the eye */}
          <path d="M142.5 88.5Q153 84 166.5 88" strokeWidth={3.4} />
          {/* "that same eye whose bend doth awe the world": steady, lifted to the star */}
          <path d="M146 97Q154 91.6 162.6 96.4" strokeWidth={2.4} />
          <path d="M147.6 103.6Q154.6 106 161 102.4" strokeWidth={1.1} />
          <path d="M148 108.4Q155 111.4 161.4 107.4" strokeWidth={LINE.hairline} />
          {/* nostril; the deep fold to the mouth; the mouth set, turned down at the corner */}
          <path d="M175 127C171 124.5 171 119.5 176.5 118.5" strokeWidth={1.5} />
          <path d="M167 122Q156.6 133 160 149" strokeWidth={1.4} />
          <path d="M169.4 148.2L161.6 149" strokeWidth={1.8} />
          <path d="M162 149Q159.8 151 159.6 154.4" strokeWidth={1} />
          <path d="M167.4 163Q162.4 165 163.4 170" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={157} cy={97.8} r={2.7} fill={INK} />
      </g>
      <Toga seed={1105} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function CaesarKnockout() {
  const t = togaShapes(1105)
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={LIFT_T}>
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={WREATH.leaves} />
      </g>
      <path d={t.body} />
    </g>
  )
}

const P = placing(4, 10, 0.98)

/** The northern star, ahead of him and above, in the portrait's own coordinates. */
const STAR: Pt = [276, 58]

const sky = once(() => {
  // A night sky lit only round the star: the ground's cuts widest there.
  const ground = portraitGround('jc-caesar', 1110, (x, y) => {
    const d = Math.hypot(x - STAR[0], (y - STAR[1]) * 1.1)
    return clamp(0.95 * Math.max(0, 1 - d / 170) ** 1.5)
  })
  const r = rng(1111)
  // "The skies are painted with unnumber'd sparks": small stars, kept off
  // the figure and clear of the northern star.
  let sparks = ''
  const placed: Pt[] = []
  for (let tries = 0; placed.length < 16 && tries < 600; tries++) {
    const x = between(r, 22, PW - 22)
    const y = between(r, 22, 210)
    if (x < 214 && y > 30) continue
    if (Math.hypot(x - STAR[0], y - STAR[1]) < 34) continue
    if (placed.some(([px, py]) => Math.hypot(px - x, py - y) < 22)) continue
    placed.push([x, y])
    sparks += star(x, y, between(r, 1.8, 3.2))
  }
  const glow = rays(r, STAR[0], STAR[1], { from: 14, to: 52, every: 15, width: 2.2 })
  return { ground, sparks, glow, north: star(STAR[0], STAR[1], 10) }
})

function CaesarPortrait({ uid }: ArtProps) {
  const s = sky()
  return (
    <>
      <path d={s.ground} fill={PAPER} />
      <path d={s.glow} fill={PAPER} />
      <path d={s.sparks} fill={PAPER} />
      <circle cx={STAR[0]} cy={STAR[1]} r={4.6} fill={PAPER} />
      <path d={s.north} fill={PAPER} />
      <g transform={P.transform}>
        <CaesarKnockout />
        <CaesarFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const caesarPortrait: LinocutArt = { width: PW, height: PH, Draw: CaesarPortrait }

const EAR_AT = P.to(...onHead(103, 125))
const EYE_AT = P.to(...onHead(155, 98))

export const juliusCaesar: Portrait = {
  name: 'Julius Caesar',
  art: caesarPortrait,
  alt: 'A linocut portrait of Julius Caesar in profile, facing right, his head lifted a little: an older, clean-shaven man with lines across his forehead, at the corner of his eye and down his cheek, his hair cropped short and combed forward to a fringe, a wreath of laurel leaves cut in white round his head, and a dark toga drawn over his shoulder. His eye, steady under a heavy brow, looks up towards a bright star with rays in the dark sky ahead of him, among a scatter of smaller stars. Three numbered red markers point to his ear, his eye and the bright star.',
  describedBy: [
    { phrase: 'this ear is deaf', at: [30, 214], to: EAR_AT },
    // Level with the eye, so the line crosses only the brow of the nose.
    {
      phrase: 'that same eye whose bend doth awe the world',
      at: [EYE_AT[0] + 58, EYE_AT[1] - 2],
      to: EYE_AT,
    },
    { phrase: 'constant as the northern star', at: [STAR[0] + 4, STAR[1] + 52], to: STAR },
  ],
  where: 'Act 1, Scene 2; Act 3, Scene 1',
  note: 'Caesar speaks of himself as the one star in the sky that never moves; in his first scene he asks Antony to come round to his right side, because his left ear is deaf. Shakespeare keeps the public name and the ageing man side by side.',
  artNote:
    'The play does not describe his face or his clothes. He wears the laurel wreath and the toga he wears in the panels, and the lines of age the panels give him; the wreath is cut in white, never red.',
}
