import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
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
import { timing } from '@/components/comics/linocut/timing'

import { InnerRule, PH, PW, once, portraitGround, smooth } from './common'

/**
 * Mr Jones, as the book opens, and nothing else:
 *
 *   "Mr. Jones, of the Manor Farm, had locked the hen-houses for the night,
 *   but was too drunk to remember to shut the pop-holes. With the ring of
 *   light from his lantern dancing from side to side, he lurched across the
 *   yard, kicked off his boots at the back door, drew himself a last glass of
 *   beer from the barrel in the scullery, and made his way up to bed, where
 *   Mrs. Jones was already snoring." (Chapter 1)
 *
 * Orwell never describes his face or his build, so he is drawn plainly, as
 * the figure kit draws him (../panels/people.tsx): a countryman of the 1940s,
 * bare-headed, in shirt-sleeves and a black waistcoat, dark trousers and
 * boots, and nothing about his face is exaggerated. What the passage gives is
 * what he does, so that is what is drawn: the dark yard at night; the
 * hen-house on the left, its door padlocked but its two pop-holes, the hens'
 * small doors at its foot, left open; and Jones lurching across the yard off
 * balance, leaning back, his lantern swinging out at arm's length. Its flame
 * is printed in the spot colour, its ring of light cut in paper round it, and
 * the arcs of its swing cut beside it. His free hand is held out low and
 * open, fingers apart, to steady himself: never raised. Nothing here comes
 * from a film or stage production.
 *
 * Seeds: 6001 for the ground, 6002 for the cuts.
 */

/** Where the lantern hangs from his hand, in his frame, and where it is seen once he leans. */
const LAMP: Pt = [270, 214]
const LAMP_SEEN: Pt = [252, 212]
const YARD = 276

/** The whole figure leans back, off balance, about his feet. */
const LEAN = 'rotate(-8 212 292)'

/** His head in profile, facing right, tipped a little back. */
const HEAD = smooth([
  [196, 62],
  [199, 46],
  [210, 37],
  [224, 37],
  [233, 46],
  [236, 55],
  [242, 64, 1],
  [237, 67],
  [237, 73],
  [232, 79],
  [224, 84],
  [213, 84],
  [205, 80],
  [199, 72],
])
/** His hair: dark, a little untidy, over the top and back of the head. */
const HAIR = smooth([
  [194, 66],
  [196, 44],
  [209, 31],
  [226, 31],
  [237, 42],
  [235, 50],
  [222, 44],
  [211, 48],
  [206, 60],
  [202, 74],
])
/** The torso: his shirt shows at the neck, the black waistcoat over it. */
const SHIRT = smooth([
  [192, 96],
  [206, 88],
  [222, 88],
  [234, 96],
  [236, 176, 1],
  [194, 176, 1],
])
const WAISTCOAT = smooth([
  [192, 98],
  [204, 92, 1],
  [214, 116],
  [224, 92, 1],
  [236, 100],
  [238, 180, 1],
  [192, 180, 1],
])
/** The limbs, as joints: shoulder, elbow, wrist; hip, knee, ankle. */
const ARM_NEAR = 'M228 100L248 138L266 172'
const ARM_FAR = 'M196 100L178 130L160 150'
const LEG_NEAR = 'M228 180L252 228L262 280'
const LEG_FAR = 'M202 182L186 232L162 280'
const BOOTS = 'M252 276L270 274L290 286L290 294L252 294ZM152 276L170 280L168 294L136 294L138 286Z'

/** The hen-house on the left: its wall, its roof, its door. */
const HENHOUSE = 'M8 110L108 86L130 104L130 276L8 276Z'
const ROOF = 'M0 118L110 80L136 102L136 110L110 90L0 128Z'
const DOOR = 'M40 150L84 146L84 250L40 252Z'
/** The two pop-holes at its foot, left open: dark arches with their slides pulled up. */
const POPHOLES: Pt[] = [
  [26, 276],
  [106, 276],
]

type Marks = {
  ground: string
  light: string
  ring: string
  swing: string
  boards: string
  yard: string
}

const marks = once<Marks>(() => {
  // Night: the ground almost black, lifting only round the lantern.
  const ground = portraitGround(6001, (x, y) =>
    clamp(0.75 - Math.hypot(x - LAMP_SEEN[0], y - LAMP_SEEN[1]) / 160),
  )
  const r = rng(6002)
  // "the ring of light from his lantern": a ring of broken paper cuts round
  // it, and its rays across the yard.
  const light = rays(r, LAMP_SEEN[0], LAMP_SEEN[1], { from: 32, to: 120, every: 7, width: 2.8 })
  const ring =
    arcDashes(r, LAMP_SEEN[0], LAMP_SEEN[1], 30, 0, Math.PI * 2, [8, 18], [3, 7]) +
    arcDashes(r, LAMP_SEEN[0], LAMP_SEEN[1], 37, 0, Math.PI * 2, [6, 14], [5, 10])
  // "dancing from side to side": the arcs of its swing.
  const swing =
    arc(218, 104, 150, deg(44), deg(58)) +
    arc(218, 104, 160, deg(46), deg(56)) +
    arc(218, 104, 140, deg(74), deg(86))
  // The boards of the hen-house, lit a little on the lantern's side.
  let boards = ''
  for (let x = 16; x < 128; x += 11)
    boards += gouge(x + between(r, -1, 1), 104 - x * 0.2, x + between(r, -1, 1), 270, 0.4 + x / 200)
  // The yard: cobbles and ruts caught by the light.
  let yard = ''
  for (let y = YARD + 6; y < PH - 10; y += 6)
    for (let x = 10 + between(r, 0, 10); x < PW - 10; x += between(r, 16, 30)) {
      const L = clamp(0.9 - Math.hypot(x - LAMP_SEEN[0], y - YARD) / 140)
      if (L > 0.05) yard += gouge(x, y, x + between(r, 8, 16), y + between(r, -1, 1), 0.4 + L * 1.8)
    }
  return { ground, light, ring, swing, boards, yard }
})

function MrJonesPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-jo-head`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.light} fill={PAPER} />
      <path d={m.yard} fill={PAPER} />
      {/* the hen-house, locked, with its pop-holes left open */}
      <path d={HENHOUSE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.boards} fill={PAPER} />
      <path d={ROOF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={DOOR} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      <g stroke={PAPER} strokeWidth={1.6} fill="none">
        <path d="M84 196L92 196L92 206L84 206" />
        <path d="M86 196Q88 188 90 196" />
      </g>
      {POPHOLES.map(([x, y]) => (
        <g key={x}>
          {/* the open hole: black inside a paper frame */}
          <path
            d={`M${x - 11} ${y}L${x - 11} ${y - 18}Q${x} ${y - 30} ${x + 11} ${y - 18}L${x + 11} ${y}Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.bold}
          />
          {/* its slide, pulled up in its runners and left there */}
          <path
            d={`M${x - 15} ${y - 56}L${x - 15} ${y - 22}M${x + 15} ${y - 56}L${x + 15} ${y - 22}`}
            stroke={PAPER}
            strokeWidth={1.6}
          />
          <rect
            x={x - 12}
            y={y - 54}
            width={24}
            height={20}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
          <path d={`M${x - 8} ${y - 44}L${x + 8} ${y - 44}`} stroke={PAPER} strokeWidth={1} />
        </g>
      ))}
      {/* the swing of the lantern, and its ring of light */}
      <path d={m.swing} fill="none" stroke={PAPER} strokeWidth={LINE.bold} strokeLinecap="round" />
      <path
        d={m.ring}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.bold}
        className="lc-glow"
        style={timing({ delay: 0.3 })}
      />
      <g transform={LEAN}>
        {/* a paper edge round him, against the dark */}
        <g fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={WAISTCOAT} />
          <path d={BOOTS} />
        </g>
        <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
          <path d={LEG_NEAR} strokeWidth={26} />
          <path d={LEG_FAR} strokeWidth={26} />
          <path d={ARM_FAR} strokeWidth={20} />
        </g>
        {/* the far arm in its shirt-sleeve, the hand held out low and open */}
        <path
          d={ARM_FAR}
          fill="none"
          stroke={INK}
          strokeWidth={16}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={ARM_FAR}
          fill="none"
          stroke={PAPER}
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M178 130L172 134" stroke={INK} strokeWidth={1} />
        <g strokeLinecap="round" fill="none">
          <path
            d="M156 152L144 162M158 155L146 166M161 157L151 169M164 157L158 170"
            stroke={INK}
            strokeWidth={5.4}
          />
          <path
            d="M156 152L144 162M158 155L146 166M161 157L151 169M164 157L158 170"
            stroke={PAPER}
            strokeWidth={3.2}
          />
        </g>
        <path
          d="M152 146C148 150 150 158 156 160C162 162 166 158 166 154C166 148 158 144 152 146Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path d="M152 148L144 146" stroke={INK} strokeWidth={5.4} strokeLinecap="round" />
        <path d="M152 148L144 146" stroke={PAPER} strokeWidth={3.2} strokeLinecap="round" />
        {/* the legs, spread wide and bent, and the boots */}
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={LEG_FAR} strokeWidth={21} />
          <path d={LEG_NEAR} strokeWidth={21} />
        </g>
        <path
          d="M252 228L258 262M186 232L174 262"
          stroke={PAPER}
          strokeWidth={1.1}
          strokeLinecap="round"
        />
        <path d={BOOTS} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={WAISTCOAT} fill={INK} />
        <g fill={PAPER}>
          <circle cx={214} cy={128} r={2} />
          <circle cx={214} cy={144} r={2} />
          <circle cx={214} cy={160} r={2} />
        </g>
        <path d="M194 176L238 176" stroke={PAPER} strokeWidth={1} />
        {/* the neck, and the head, lit from below by the lantern */}
        <path d="M210 80L210 94L224 94L224 80Z" fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d="M204 92L214 100L224 92" fill="none" stroke={INK} strokeWidth={1.2} />
        <path d={HEAD} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${clip})`}>
          <path d={HAIR} fill={INK} />
          <path
            d="M198 54L208 42M202 64L212 50M210 38L222 33M218 38L230 36"
            stroke={PAPER}
            strokeWidth={1}
            strokeLinecap="round"
          />
          {/*
            the shadow under the jaw, in short strokes along its edge. It was
            first two long lines across the lower face, level with the mouth,
            and at card size they read as a strap or a mask over his face
            (review, 27 September 2026).
          */}
          <path
            d="M208 79L211 75M213 82L216 78M218 84L221 80"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the ear */}
          <path d="M210 56C205 57 204 66 208 70C210 71 212 70 212 68" strokeWidth={1.6} />
          {/* a heavy lid, the nostril, and the mouth slack */}
          <path d="M224 55Q230 53 235 57" strokeWidth={2.2} />
          <path d="M225 59Q230 60 234 58" strokeWidth={1.1} />
          <path d="M237 69C234 69 233 67 234 65" strokeWidth={1.1} />
          <path d="M235 75Q230 77 225 75" strokeWidth={1.4} />
        </g>
        <circle cx={231} cy={58} r={1.4} fill={INK} />
        {/* the near arm, swung out, the lantern hanging from the hand */}
        <path
          d={ARM_NEAR}
          fill="none"
          stroke={PAPER}
          strokeWidth={20}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={ARM_NEAR}
          fill="none"
          stroke={INK}
          strokeWidth={16}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={ARM_NEAR}
          fill="none"
          stroke={PAPER}
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M248 138L242 140" stroke={INK} strokeWidth={1} />
        <g transform={`translate(${LAMP[0]} ${LAMP[1]}) rotate(12 0 -34)`}>
          <path d="M-8 -22Q0 -38 8 -22" fill="none" stroke={INK} strokeWidth={3.6} />
          <path d="M-8 -22Q0 -38 8 -22" fill="none" stroke={PAPER} strokeWidth={1.8} />
          <path d="M-12 -18L12 -18L8 -24L-8 -24Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
          <rect
            x={-11}
            y={-18}
            width={22}
            height={30}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
          <path
            d="M-5 8C-8 1 -4 -6 0 -11C4 -6 8 1 5 8C3 11 -3 11 -5 8Z"
            fill={RED}
            className="lc-flicker"
            style={timing({ delay: 0.4 })}
          />
          <path d="M-11 -18L-11 12M11 -18L11 12M0 -18L0 -13" stroke={INK} strokeWidth={2} />
          <path d="M-14 12L14 12L10 18L-10 18Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
          {/* his fingers round the handle */}
          <path
            d="M-6 -40C-2 -44 4 -42 6 -38C6 -34 2 -32 -2 -33C-5 -34 -7 -37 -6 -40Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <path d="M-3 -34L-1 -38M1 -33L3 -37" stroke={INK} strokeWidth={0.9} />
        </g>
      </g>
      <InnerRule />
    </>
  )
}

export const mrJonesArt: LinocutArt = { width: PW, height: PH, Draw: MrJonesPortrait }

export const mrJones: Portrait = {
  name: 'Mr Jones',
  art: mrJonesArt,
  alt: "A linocut portrait of Mr Jones crossing his farmyard at night, as the book opens: a plain countryman, bare-headed, in shirt-sleeves, a black waistcoat, dark trousers and boots, lurching off balance and leaning back, his free hand held out low and open to steady himself. At arm's length he swings a lantern whose flame is printed in red; a ring of light is cut round it, rays cross the dark yard, and arcs show its swing. On the left stands the hen-house, its door padlocked, but at its foot its two small pop-holes are open, their slides left pulled up. Three numbered red markers point to the open pop-holes, the lantern and Jones himself.",
  describedBy: [
    { phrase: 'too drunk to remember to shut the pop-holes', at: [66, 300], to: [30, 266] },
    {
      phrase: 'the ring of light from his lantern dancing from side to side',
      at: [306, 150],
      to: [278, 188],
    },
    { phrase: 'he lurched across the yard', at: [150, 70], to: [198, 118] },
  ],
  where: 'Chapter 1',
  passage:
    'Mr. Jones, of the Manor Farm, had locked the hen-houses for the night, but was too drunk to remember to shut the pop-holes. With the ring of light from his lantern dancing from side to side, he lurched across the yard, kicked off his boots at the back door, drew himself a last glass of beer from the barrel in the scullery, and made his way up to bed, where Mrs. Jones was already snoring.',
  note: 'The book opens on a careless, drunken master, and the animals meet as soon as he is asleep. By Chapter 10 Napoleon lives in his house and has taken his place, down to the whip.',
  artNote:
    'Orwell never describes his face or his clothes, so he is drawn plainly, as a countryman of the 1940s; the markers point only at what the text says he does.',
}
