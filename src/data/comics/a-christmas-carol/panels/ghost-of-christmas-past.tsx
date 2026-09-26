import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rays, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The Ghost of Christmas Past, as Stave Two describes it, for every panel it
 * is in. Drawn once, facing right, in its own frame (its feet on y 310, its
 * figure between x 50 and 106) and placed with a transform, so it is the same
 * spirit in each panel.
 *
 *   "It was a strange figure--like a child: yet not so like a child as like an
 *   old man, viewed through some supernatural medium, which gave him the
 *   appearance of having receded from the view, and being diminished to a
 *   child's proportions. Its hair, which hung about its neck and down its
 *   back, was white as if with age; and yet the face had not a wrinkle in it,
 *   and the tenderest bloom was on the skin. The arms were very long and
 *   muscular ... Its legs and feet, most delicately formed, were, like those
 *   upper members, bare. It wore a tunic of the purest white; and round its
 *   waist was bound a lustrous belt, the sheen of which was beautiful. It held
 *   a branch of fresh green holly in its hand; and ... had its dress trimmed
 *   with summer flowers. But the strangest thing about it was, that from the
 *   crown of its head there sprung a bright clear jet of light, by which all
 *   this was visible".
 *
 * So: a child's height, white hair over its crown and down its back, a smooth
 * face whose bloom takes a touch of the spot colour, long bare arms, bare legs
 * and feet, a white tunic with flowers at hem and neck, a dark belt cut with
 * glints, a holly branch, and a jet of light springing from its crown with
 * rays round it. The holly's green is left to the words.
 *
 * Two poses: `point`, one hand on Scrooge's arm behind it and the long arm
 * pointing ahead (the schoolroom: "The Spirit touched him on the arm, and
 * pointed"), and `watch`, arms down, holly in hand, looking ahead (Fezziwig's:
 * "it was looking full upon him, while the light upon its head burnt very
 * clear").
 *
 * Seed 414 for its light and belt.
 */

const SHAPE = {
  head: 'M78 156C86 156 92 160 93 166L94 169L97 173.5L94 174.5L94.6 177C94 178.4 93 179 92 179.4L92.4 181C91 184 87 185.4 83 185.4C76 185.4 68 182 66 174C64 164 70 156 78 156Z',
  tunic:
    'M70 186C66 188 64 194 64 200C62 222 60 244 58 264L104 264C102 244 98 222 96 200C96 194 94 188 88 186Z',
  /** White hair over the crown, swept back to hang down its back. */
  crown:
    'M86.5 158.5C80 155.5 72 157 68 163M88 160.5C80 159.5 73 162 69.5 169M89 163C82 163 76 167 72 175M79 157C74 160 71 164 70 170',
  legs: 'M72 262L70 306L60 310M90 262L94 306L104 310',
  jet: 'M76 156C71 134 75 110 80 78C85 110 89 134 84 156Z',
}
const HAIR: Pt[][] = [
  [
    [74, 157],
    [64, 170],
    [60, 190],
    [60, 212],
    [58, 234],
  ],
  [
    [78, 157],
    [72, 174],
    [69, 194],
    [68, 216],
  ],
  [
    [70, 160],
    [61, 176],
    [55, 196],
    [53, 220],
  ],
  [
    [68, 166],
    [58, 184],
    [52, 204],
  ],
]

/** One holly leaf: spiked, with a cut midrib. */
function hollyLeaf(x: number, y: number, ang: number, len = 13) {
  const c = Math.cos(ang)
  const s = Math.sin(ang)
  const P = (u: number, v: number) => `${n(x + u * c - v * s)} ${n(y + u * s + v * c)}`
  return `M${P(0, 0)}L${P(3, -4)}L${P(4.5, -2.5)}L${P(7, -5.5)}L${P(8, -3)}L${P(11, -4.5)}L${P(len, 0)}L${P(11, 4.5)}L${P(8, 3)}L${P(7, 5.5)}L${P(4.5, 2.5)}L${P(3, 4)}Z`
}

type Pose = {
  /** Arms as strokes from the shoulder to the hand. */
  arms: string[]
  /** Hands, as small paper shapes. */
  hands: string[]
  /** The holly's stem, and its leaves. */
  stem: string
  holly: string
}

const POSES: Record<'point' | 'watch', Pose> = {
  point: {
    arms: ['M74 196C60 204 40 210 20 212', 'M90 194C120 190 150 188 190 187'],
    hands: [
      'M22 208C16 207 13 211 15 215C17 218 21 218 23 216Z',
      'M188 183C194 181 198 185 196 189C194 192 190 192 188 190Z',
    ],
    stem: 'M194 186L222 180',
    holly:
      hollyLeaf(196, 186, -0.2) +
      hollyLeaf(202, 184, -1.1) +
      hollyLeaf(206, 184, 0.6) +
      hollyLeaf(214, 181, -0.4, 11),
  },
  watch: {
    arms: ['M70 194C64 212 62 230 64 248', 'M90 194C98 210 104 226 108 242'],
    hands: [
      'M61 247C59 253 62 257 66 256C69 255 70 251 68 247Z',
      'M105 241C103 247 106 251 110 250C113 249 114 245 112 241Z',
    ],
    stem: 'M110 250L116 276',
    holly:
      hollyLeaf(111, 256, 1.1) +
      hollyLeaf(113, 262, 0.2) +
      hollyLeaf(114, 266, 2) +
      hollyLeaf(116, 272, 1.3, 11),
  },
}

type Marks = { light: string; belt: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(414)
  const light = rays(r, 80, 114, { from: 20, to: 118, every: 6, width: 3 })
  // The lustrous belt, "now in one part and now in another" sparkling.
  let belt = ''
  for (let x = 67; x < 97; x += 4.4)
    belt += gouge(x, 216 + between(r, -0.6, 0.6), x + 2.6, 215.4, 0.9)
  cached = { light, belt }
  return cached
}

export function GhostOfChristmasPast({ pose }: { pose: 'point' | 'watch' }) {
  const m = marks()
  const p = POSES[pose]
  return (
    <g>
      {/* the bright clear jet of light from the crown of its head */}
      <path
        className="lc-fade-in"
        style={timing({ delay: 0.4, dur: 1.4 })}
        d={m.light}
        fill={PAPER}
      />
      {/* four flickers of 0.8s after 0.4s end at 3.6s; the first draft's 1s
          after 0.6s ran to 4.6s, past the style guide's four seconds */}
      <path
        className="lc-flicker"
        style={timing({ dur: 0.8, delay: 0.4 })}
        d={SHAPE.jet}
        fill={PAPER}
      />
      {/* white hair hanging about its neck and down its back */}
      <g fill={PAPER} stroke={INK} strokeWidth={1.2}>
        {HAIR.map((pts) => (
          <path key={pts[0].join()} d={ribbon(pts, 10, 0.6, false)} />
        ))}
      </g>
      {/* bare legs and feet */}
      <path
        d={SHAPE.legs}
        fill="none"
        stroke={INK}
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={SHAPE.legs}
        fill="none"
        stroke={PAPER}
        strokeWidth={4.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* the tunic of the purest white, trimmed with summer flowers */}
      <path d={SHAPE.tunic} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
      <path d="M74 220L72 262M88 220L92 262" stroke={INK} strokeWidth={LINE.hairline} />
      <g fill="none" stroke={INK} strokeWidth={1}>
        {[62, 72, 82, 92, 101].map((x) => (
          <g key={x}>
            <circle cx={x} cy={258} r={2.6} />
            <circle cx={x} cy={258} r={0.6} fill={INK} />
          </g>
        ))}
        {[72, 80, 88].map((x) => (
          <circle key={x} cx={x} cy={190} r={2.2} />
        ))}
      </g>
      {/* the lustrous belt */}
      <path d="M65 212H97V219H65Z" fill={INK} />
      <path d={m.belt} fill={PAPER} />
      {/* the long bare arms */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {p.arms.map((d) => (
          <g key={d}>
            <path d={d} stroke={INK} strokeWidth={8.4} />
            <path d={d} stroke={PAPER} strokeWidth={5.4} />
          </g>
        ))}
      </g>
      <g fill={PAPER} stroke={INK} strokeWidth={1.2}>
        {p.hands.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {/* the fresh holly in its hand */}
      <path d={p.stem} stroke={INK} strokeWidth={1.6} />
      <path d={p.holly} fill={INK} stroke={PAPER} strokeWidth={1} />
      {/* a face without a wrinkle, and the tenderest bloom on the skin */}
      <path d={SHAPE.head} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
      <path
        d={SHAPE.crown}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path d="M87.4 166.4Q89.6 164.6 92 166" fill="none" stroke={INK} strokeWidth={1.3} />
      <circle cx={90} cy={168.2} r={1.3} fill={INK} />
      <path d="M90 180.6Q91.6 181.4 93 180.4" fill="none" stroke={INK} strokeWidth={1} />
      <ellipse cx={84} cy={175} rx={3.2} ry={2.4} fill={RED} />
    </g>
  )
}

/** Where the light springs from, in the Ghost's own frame: for a panel's light function. */
export const GHOST_PAST_CROWN: Pt = [80, 150]
