import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  inside,
  once,
  rimLight,
  smooth,
  type Knot,
} from './common'

/**
 * Tonga, as Jonathan Small describes him in Chapter 12, and nothing else:
 *
 *   "Tonga—for that was his name—was a fine boatman, and owned a big, roomy
 *   canoe of his own. When I found that he was devoted to me and would do
 *   anything to serve me, I saw my chance of escape. I talked it over with
 *   him. He was to bring his boat round on a certain night to an old wharf
 *   which was never guarded, and there he was to pick me up. I gave him
 *   directions to have several gourds of water and a lot of yams, cocoa-nuts,
 *   and sweet potatoes."
 *
 * and, in the next paragraph, "At the night named he had his boat at the
 * wharf." So: a small man in his own long canoe at night, holding his paddle
 * upright, waiting off the timbers of an old wharf, with the gourds of water
 * and the food stowed in the bow; stars over the water.
 *
 * THIS PORTRAIT NEEDS PARTICULAR CARE, and the rules are in the docblock of
 * ../panels/people.tsx. Watson's description of Tonga in Chapter 10, and the
 * gazetteer Holmes reads aloud in Chapter 8, are written in the racist
 * language of their day, with animal comparisons. Nothing in them is drawn,
 * and none of their words is a quotation, a marker or an alt text here. This
 * passage is the one place in the novel where Tonga is described by what he
 * could do and what he owned, not by what he looked like to the men who
 * feared him, so it is the one he is drawn from.
 *
 * He is drawn as a man, with the same care and the same dignity as every
 * other sitter: the same way of cutting a face (common.tsx), the same eye,
 * the same ear and the same few lines, an alert and steady profile, no
 * exaggerated feature and nothing animal. Small calls him "little Tonga"
 * (Chapter 12), so he is a small man beside a long paddle and a long canoe.
 * His hair is drawn as the figure kit draws it (TONGA_HAIR in
 * ../panels/people.tsx), a full, rounded shock with curls cut all through it,
 * so that he is the same man in every piece; it has no marker, because the
 * only words for it come from the Chapter 10 paragraph that this text's rules
 * keep off the art. Nothing about his dress in the Andamans is described, so
 * his body is cut in ink like every other figure's, with nothing added.
 *
 * There is no red: nothing in the passage asks for it.
 *
 * Seeds: 4601 for the sky, 4602 for the cuts in the figure, 4603 for the
 * water.
 */

/**
 * Where the man is set in the block: the head and the body are drawn in a
 * frame of their own and moved left by FIG, so the paddle stands clear of his
 * face and the bow of the canoe is open to the sky.
 */
const FIG = 'translate(-28 0)'
/** The head, in profile facing right, towards the wharf. */
const HEAD = smooth([
  [118, 204, 1],
  [118, 182],
  [110, 160],
  [103, 130],
  [106, 100],
  [120, 78],
  [142, 64],
  [166, 61],
  [185, 68],
  [196, 82],
  [201, 96],
  [204.5, 106, 1],
  [200.5, 113, 1],
  [205, 121],
  [209.5, 130],
  [213, 137.5, 1],
  [207.5, 140.5],
  [203, 141.5, 1],
  [205.6, 146.5],
  [204.8, 150.5, 1],
  [201, 152.4, 1],
  [204.6, 156],
  [203.2, 160, 1],
  [199.6, 162],
  [201.8, 168],
  [199, 174.5],
  [191, 178.5],
  [180, 179.5],
  [174, 204, 1],
])
/**
 * His hair, as the figure kit cuts it: a full, rounded shock over the crown
 * and the back of the head, standing out a little from the skull, its outer
 * edge tufted; its inner edge is the hairline, over the brow and round
 * behind the ear to the nape.
 */
const HAIR_POLY: [number, number][] = (() => {
  const pts: [number, number][] = []
  for (let a = -46; a >= -236; a -= 7.6) {
    const t = (a * Math.PI) / 180
    pts.push([150 + 70 * Math.cos(t), 122 + 76 * Math.sin(t)])
  }
  return [
    ...pts,
    [116, 190],
    [128, 178],
    [134, 158],
    [136, 138],
    [140, 120],
    [150, 108],
    [160, 104],
    [168, 94],
    [180, 86],
    [194, 84],
  ]
})()
/** The outline of the shock, its outer edge tufted in small bumps. */
const HAIR = (() => {
  const cx = 150
  const cy = 122
  const outer = HAIR_POLY.length - 10
  let d = `M${n(HAIR_POLY[0][0])} ${n(HAIR_POLY[0][1])}`
  for (let i = 1; i < HAIR_POLY.length; i++) {
    const [x0, y0] = HAIR_POLY[i - 1]
    const [x1, y1] = HAIR_POLY[i]
    if (i < outer) {
      const mx = (x0 + x1) / 2
      const my = (y0 + y1) / 2
      const L = Math.hypot(mx - cx, my - cy) || 1
      d += `Q${n(mx + ((mx - cx) / L) * 4)} ${n(my + ((my - cy) / L) * 4)} ${n(x1)} ${n(y1)}`
    } else d += `L${n(x1)} ${n(y1)}`
  }
  return d + 'Z'
})()

/** His shoulders and body, upright in the canoe, down to the gunwale. */
const BODY = smooth([
  [52, 270, 1],
  [56, 238],
  [76, 218],
  [104, 206],
  [124, 202],
  [174, 202],
  [192, 212],
  [202, 232],
  [206, 270, 1],
])
/** The near arm, from the shoulder to the hand on the paddle, in the block's own frame. */
const ARM = smooth([
  [56, 228],
  [76, 214],
  [96, 226],
  [130, 238],
  [186, 212],
  [218, 194, 1],
  [226, 212, 1],
  [194, 238],
  [140, 262],
  [100, 262],
  [68, 248],
])
/**
 * "a fine boatman": the paddle held upright, the shaft long against the sky,
 * the blade down in the water by the canoe. Cut in paper, as pale wood.
 */
const SHAFT = 'M226.4 26L232.2 26L238.4 290L232.6 290Z'
const GRIP = 'M222.6 18L236 18L235.4 27L223.2 27Z'
const BLADE =
  'M228.8 268C236 264 244 268 246 286L244.6 318L229.6 318L227 286C226.6 278 227 272 228.8 268Z'
/**
 * His hand round the shaft, each finger its own cut, curled round the wood
 * and apart from the next, so the grip does not read as a fist.
 */
const KNUCKLES = 'M216.6 194.4Q224 190 229.6 193.2L231.6 211.6Q225.6 214.4 219.4 212.2Z'
const FINGERS = [
  'M229 194.6Q236.6 195.4 236.4 199.6',
  'M229.6 199Q237.2 199.8 237 204',
  'M230.2 203.4Q237.8 204.2 237.6 208.4',
  'M230.6 207.8Q237.6 208.6 237.4 212.4',
]
const THUMB = 'M220 194Q224 186.6 231 186.4'

/**
 * "a big, roomy canoe of his own": a long, deep hull lying across the block,
 * its bow raised and run up alongside the wharf.
 */
const CANOE = smooth([
  [2, 240, 1],
  [40, 250],
  [120, 255],
  [200, 253],
  [262, 244],
  [302, 226, 1],
  [298, 246],
  [282, 268],
  [232, 286],
  [120, 292],
  [40, 286],
  [2, 276, 1],
])
/** The inside of the far side of the hull, seen over the near gunwale. */
const HOLD = 'M30 246Q120 248 220 242Q270 236 300 228Q284 244 244 252Q140 258 40 252Z'

/**
 * "several gourds of water": three round gourds with narrow necks, stowed in
 * the bow, cut in paper; and "a lot of yams, cocoa-nuts, and sweet
 * potatoes" heaped beside them.
 */
const GOURDS: { cx: number; cy: number; r: number }[] = [
  { cx: 252, cy: 236, r: 10 },
  { cx: 271, cy: 232, r: 9 },
  { cx: 238, cy: 242, r: 8 },
]
const NUTS: { cx: number; cy: number; rx: number; ry: number; a: number }[] = [
  { cx: 286, cy: 236, rx: 6.6, ry: 5.8, a: 0 },
  { cx: 276, cy: 244, rx: 9, ry: 4.2, a: -14 },
  { cx: 290, cy: 228, rx: 5.6, ry: 5, a: 0 },
]

/**
 * "an old wharf which was never guarded": weathered piles standing in the
 * water, braced, with a deck of planks across them.
 */
const DECK = 'M284 150L334 146L334 162L284 166Z'
const PILES = ['M292 164L304 163L306 330L293 330Z', 'M318 162L330 161L331 330L319 330Z']
const BRACE = 'M298 180L326 222L326 232L296 192Z'

type Marks = {
  sky: string
  stars: string
  water: string
  hair: string
  neck: string
  body: string
  wood: string
}

const marks = once<Marks>(() => {
  // A clear night: dark overhead, a little lighter along the horizon.
  const sky = gougeField(
    rng(4601),
    { x0: 8, x1: PW - 8, y0: 12, y1: 228 },
    (_x, y) => clamp(0.02 + ((y - 30) / 200) * 0.32),
    { spacing: 5.6, len: [16, 60], max: 2.8 },
  )
  const r = rng(4602)
  let stars = ''
  for (let i = 0; i < 46; i++) {
    const x = between(r, 14, PW - 14)
    const y = between(r, 14, 150)
    // none on the head, the paddle or the wharf
    if (x > 64 && x < 192 && y > 50) continue
    if (x > 216 && x < 244) continue
    if (x > 278 && y > 140) continue
    const s = between(r, 0.7, 1.7)
    stars += `M${n(x - s)} ${n(y)}a${n(s)} ${n(s)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s)} 0 1 0 ${n(-2 * s)} 0Z`
    if (s > 1.45) stars += gouge(x - 5, y, x + 5, y, 0.4) + gouge(x, y - 5, x, y + 5, 0.4)
  }
  // The water: ripples cut across it, brighter towards the wharf.
  const water = gougeField(
    rng(4603),
    { x0: 4, x1: PW - 4, y0: 268, y1: PH - 6 },
    (x) => clamp(0.18 + (x / PW) * 0.5),
    { spacing: 5.2, len: [10, 40], max: 3.2 },
  )
  // The shock of hair: curls turned every way, cut all through it, as the
  // kit cuts TONGA_HAIR_CUTS, and light caught on its edge.
  let hair = ''
  for (let i = 0, tries = 0; i < 230 && tries < 8000; tries++) {
    const x = between(r, 80, 206)
    const y = between(r, 44, 196)
    if (!inside(HAIR_POLY, x, y)) continue
    const s = between(r, 2, 3.2)
    const a = between(r, 0, Math.PI * 2)
    hair += `M${n(x + Math.cos(a) * s)} ${n(y + Math.sin(a) * s)}A${n(s)} ${n(s)} 0 0 1 ${n(x + Math.cos(a + 2.4) * s)} ${n(y + Math.sin(a + 2.4) * s)}`
    i++
  }
  const rim = rimLight(r, { cx: 150, cy: 122, rx: 70, ry: 76 }, 175, 300, 34, 0.9)
  // A soft shadow under the jaw: two short curved cuts. No bands across
  // the neck, front or back: on this figure, stripes there could be misread
  // as rings worn round the neck, and the text gives him none.
  const neck = 'M156 184Q164 192 160 202M163 186Q170 193 167 202'

  const body = gouge(70, 236, 62, 268, 1.6, 1.5) + gouge(186, 220, 198, 262, 1.1, -1.5)
  // The grain of the old timbers.
  let wood = ''
  for (const x of [297, 323])
    for (let y = 176; y < 318; y += 20) wood += gouge(x, y, x + 1, y + 12, 0.6)
  wood += gouge(288, 155, 330, 152, 0.7) + gouge(288, 160, 330, 157, 0.5)
  return { sky, stars, water, hair: hair + rim, neck, body, wood }
})

function TongaPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-tg-head`
  const hairClip = `${uid}-tg-hair`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* the night sky and its stars, and the water */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.stars} fill={PAPER} />
      <path d={m.water} fill={PAPER} />
      {/* "an old wharf which was never guarded" */}
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        <path d={BRACE} />
        {PILES.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d={DECK} />
      </g>
      <path d={m.wood} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} transform={FIG} />
        <path d={HAIR} transform={FIG} />
        <path d={BODY} transform={FIG} />
        <path d={ARM} />
      </g>
      <g transform={FIG}>
        <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.body} fill={PAPER} />
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.neck} strokeWidth={0.9} />
          </g>
        </g>
        {/* the shock of hair, as the kit cuts it, lifted off the night by a paper edge */}
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round" />
        </g>
        <ProfileEar at={[156, 112]} h={36} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw, back to below the ear */}
          <path d="M197 176C187 179 178 176 172 168C168 161 166 153 166 146" strokeWidth={1.6} />
          {/* a level brow */}
          <path d="M182 103Q192 99 204 101.5" strokeWidth={3} />
          {/* the nostril, the line past the mouth, the lips */}
          <path d="M208.5 139.6C204.5 138.6 203.8 134 206.4 131.6" strokeWidth={1.4} />
          <path d="M201 128C195.5 134 193.5 141 194.5 148" strokeWidth={1.2} />
          <path d="M204.8 150.6L196.6 150.2" strokeWidth={1.8} />
          <path d="M202.6 158Q200.2 159.6 198.4 158.8" strokeWidth={LINE.hairline} />
        </g>
        {/* an alert eye, looking out to the wharf */}
        <ProfileEye at={[192, 114]} s={1.05} />
      </g>
      {/* "a big, roomy canoe of his own" */}
      <path d={HOLD} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* "several gourds of water", and the food heaped beside them */}
      {NUTS.map((u) => (
        <g key={u.cx} transform={`rotate(${u.a} ${u.cx} ${u.cy})`}>
          <ellipse
            cx={u.cx}
            cy={u.cy}
            rx={u.rx}
            ry={u.ry}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <path
            d={`M${n(u.cx - u.rx * 0.5)} ${n(u.cy - u.ry * 0.4)}Q${n(u.cx)} ${n(u.cy - u.ry * 0.9)} ${n(u.cx + u.rx * 0.5)} ${n(u.cy - u.ry * 0.4)}`}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
          />
        </g>
      ))}
      {GOURDS.map((g) => (
        <g key={g.cx}>
          <circle cx={g.cx} cy={g.cy} r={g.r} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path
            d={`M${n(g.cx - g.r * 0.3)} ${n(g.cy - g.r * 0.85)}L${n(g.cx - g.r * 0.24)} ${n(g.cy - g.r * 1.55)}L${n(g.cx + g.r * 0.24)} ${n(g.cy - g.r * 1.55)}L${n(g.cx + g.r * 0.3)} ${n(g.cy - g.r * 0.85)}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
          <path
            d={`M${n(g.cx - g.r * 0.55)} ${n(g.cy - g.r * 0.1)}Q${n(g.cx - g.r * 0.4)} ${n(g.cy + g.r * 0.6)} ${n(g.cx + g.r * 0.1)} ${n(g.cy + g.r * 0.7)}`}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
          />
        </g>
      ))}
      <path d={CANOE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d="M10 258Q120 268 236 248M14 270Q120 280 222 266"
        fill="none"
        stroke={PAPER}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* the near arm, the paddle and his hand round it */}
      <path d={BLADE} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d="M236.8 276L237.6 314" fill="none" stroke={INK} strokeWidth={1} />
      <path d={SHAFT} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={GRIP} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={ARM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d={THUMB} fill="none" stroke={INK} strokeWidth={8.4} />
        <path d={THUMB} fill="none" stroke={PAPER} strokeWidth={5} />
        <path d={KNUCKLES} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        {FINGERS.map((d) => (
          <g key={d}>
            <path d={d} fill="none" stroke={INK} strokeWidth={7.2} />
            <path d={d} fill="none" stroke={PAPER} strokeWidth={4} />
          </g>
        ))}
      </g>
      {/* ripples round the blade where it enters the water */}
      <path
        d="M216 296Q236 292 256 296M220 304Q238 300 254 304"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <InnerRule />
    </>
  )
}

export const tongaArt: LinocutArt = { width: PW, height: PH, Draw: TongaPortrait }

export const tonga: Portrait = {
  name: 'Tonga',
  art: tongaArt,
  alt: 'A linocut portrait of Tonga in profile, facing right, drawn from Jonathan Small’s words in Chapter 12: a small man with a full, rounded shock of curly hair and a calm, alert face, sitting upright in a long, deep canoe at night and holding a tall paddle upright in one hand, its blade down in the dark water. In the bow beside him are three round gourds of water and a small heap of yams and coconuts. On the right, the weathered piles and plank deck of an old wharf stand in the water, and stars are cut in the sky above. Five numbered red markers point to his hand on the paddle, the canoe, the gourds, the food and the wharf.',
  describedBy: [
    { phrase: 'a fine boatman', at: [262, 152], to: [236, 194] },
    { phrase: 'a big, roomy canoe of his own', at: [30, 306], to: [60, 282] },
    { phrase: 'an old wharf which was never guarded', at: [310, 118], to: [310, 148] },
    { phrase: 'several gourds of water', at: [258, 196], to: [254, 224] },
    { phrase: 'yams, cocoa-nuts, and sweet potatoes', at: [300, 300], to: [284, 246] },
  ],
  where: 'Chapter 12',
  passage:
    'Tonga—for that was his name—was a fine boatman, and owned a big, roomy canoe of his own. When I found that he was devoted to me and would do anything to serve me, I saw my chance of escape. I talked it over with him. He was to bring his boat round on a certain night to an old wharf which was never guarded, and there he was to pick me up. I gave him directions to have several gourds of water and a lot of yams, cocoa-nuts, and sweet potatoes.',
  note: 'Tonga is never given a word of his own in the novel: everything we know of him is what other men say. These are the kindest words in the book about him, and even they describe him by what he could do for Small. Elsewhere Watson and Holmes describe him in the racist language of their time, which an answer should analyse, not repeat.',
  artNote:
    'Small’s words are the only description of Tonga in the novel that is not written in the racist language of the time, so the markers point only to them. His hair is drawn as the panels of this novel draw it, so that he is the same man in every picture, and his face is cut in the same way as every other face in these portraits.',
}
