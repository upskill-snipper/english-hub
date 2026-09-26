import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, flame, once, portraitGround, rimLight, smooth } from './common'

/**
 * The Creature, as Victor sees him in Chapter 5 by "the glimmer of the
 * half-extinguished light", and nothing else:
 *
 *   "His limbs were in proportion, and I had selected his features as
 *   beautiful. Beautiful!--Great God! His yellow skin scarcely covered the
 *   work of muscles and arteries beneath; his hair was of a lustrous black,
 *   and flowing; his teeth of a pearly whiteness; but these luxuriances only
 *   formed a more horrid contrast with his watery eyes, that seemed almost of
 *   the same colour as the dun white sockets in which they were set, his
 *   shrivelled complexion and straight black lips."
 *
 * So: a face in profile whose FEATURES ARE REGULAR (Victor chose them "as
 * beautiful"; the horror is in the contrast, not in a misshapen head), with
 * long black hair swept back from a high brow and falling past the shoulder,
 * cut with the light running along it for "lustrous". The skin is paper, and
 * the "work of muscles and arteries beneath" shows through it as fine cut
 * lines: the cords of the neck, the grain of the jaw muscle, one branching
 * artery at the temple. Nothing is opened or flayed, and there is no red on
 * him at all. "Shrivelled" is cut as fine creases at the eye and the cheek,
 * and none across the brow (see the creases in marks()). The eye is almost the same pale tone as the hatched socket round
 * it, with no dark iris and a wet glint on the lower lid. The lips are two
 * straight black bars, parted on a narrow band of white teeth.
 *
 * His size is from Chapter 4 ("a gigantic stature; that is to say, about eight
 * feet in height, and proportionably large"): his head fills the block to its
 * top and his shoulders run out of both sides. The candle, "nearly burnt out",
 * is the one spot of colour, small beside him. His plain dark cloak is the
 * panels' (../panels/people.tsx), from Chapter 11 ("I had covered myself with
 * some clothes"; later "a huge cloak"); the text does not describe it.
 * NOTHING HERE COMES FROM A FILM: no flat-topped head, no bolts in the neck,
 * no stitches, no green skin.
 *
 * He is the panels' Creature, larger: the same rounded skull, the hair from a
 * hairline at the temple back behind the ear and down past the shoulders, the
 * heavy brow, the pale eye with only a small pupil, the straight black lips.
 * The kit warns that too many cuts on his face read as flayed or as an old
 * man's, so the lines in the skin are kept to the neck, the jaw and one
 * artery, and the creases to the eye and the cheek.
 *
 * Seeds: 4101 for the ground, 4102 for the cuts in the figure.
 */

/** The head in profile, facing right: a high crown, a straight nose, a long jaw, a thick neck. */
const HEAD = smooth([
  [132, 300, 1],
  [134, 240],
  [124, 190],
  [110, 140],
  [112, 90],
  [130, 48],
  [166, 20],
  [210, 12],
  [240, 24],
  [256, 50],
  [263, 76],
  [265.5, 94],
  [263, 104],
  [259, 109, 1],
  [264, 122],
  [270, 134],
  [276.5, 145, 1],
  [271, 149.5],
  [262, 151, 1],
  [261.5, 154],
  [264, 156.2, 1],
  [263.8, 166.8, 1],
  [259, 172.5],
  [264.5, 186],
  [263.5, 200],
  [252, 209.5],
  [230, 212],
  [215, 214, 1],
  [218, 240],
  [224, 270],
  [230, 300, 1],
])

/** Long black hair swept back from a high brow, behind the ear and down past the shoulder. */
const HAIR = smooth([
  [238, 27, 1],
  [222, 33],
  [210, 46],
  [204, 64],
  [201, 86],
  [196, 101],
  [180, 103],
  [171, 114],
  [168, 146],
  [164, 180],
  [157, 212],
  [151, 246],
  [150, 282],
  [156, 330, 1],
  [28, 330, 1],
  [42, 290],
  [64, 240],
  [82, 190],
  [94, 140],
  [98, 96],
  [114, 54],
  [148, 20],
  [196, 4],
  [226, 10],
  [246, 20],
])

/** The ear, just clear of the hair. */
const EAR = smooth([
  [198, 112],
  [190, 108],
  [184, 114],
  [183, 128],
  [186, 142],
  [193, 150],
  [200, 146],
  [202, 128],
])

/** His cloak over the great shoulders, both sides running out of the block. */
const COAT = smooth([
  [-12, 330, 1],
  [-12, 256],
  [30, 244],
  [90, 238],
  [150, 244],
  [190, 256],
  [226, 270],
  [258, 284],
  [282, 304],
  [292, 330, 1],
])

/** The straight black lips, parted on a band of teeth. */
const UPPER_LIP = 'M242 159.2Q252 156.9 264.2 156.4L264 159.4Q252 159.6 242.4 160.6Z'
const TEETH_GAPS = 'M253 159.8L253 161.8M258.6 159.6L258.6 161.6'
const LOWER_LIP = 'M242.4 161.6Q252 162.2 264 161.9L263.6 166.8Q252 167 242 163.2Z'

/** The white of the eye, between the lids. */
const EYE = 'M241.5 110Q248.5 105.4 256 109L255.5 114.6Q250 118.2 243.5 116.6Z'

/** The candle, nearly burnt out, on its dish at the foot of the block. */
const CANDLE = 'M293 285L305 285L305 300L293 300Z'
const DISH = 'M276 300C276 297 322 297 322 300L320 305C306 308 292 308 278 305Z'
const FLAME = flame(299, 283, 20, 1)

type Marks = {
  ground: string
  rays: string
  hair: string
  hairRim: string
  coat: string
  neck: string
  jaw: string
  artery: string
  socket: string
  creases: string
}

const marks = once<Marks>(() => {
  // The only light is the candle at the lower right; the room is dark.
  const ground = portraitGround(4101, (x, y) => {
    const d = Math.hypot(x - 299, (y - 280) * 1.2)
    return 0.03 + clamp(1 - d / 300) ** 1.6
  })
  const r = rng(4102)

  // A little light round the flame, cut as short broken spokes.
  let rays = ''
  for (let a = 180; a < 360; a += 11) {
    const ang = deg(a + between(r, -3, 3))
    const rad = between(r, 16, 22)
    const len = between(r, 7, 13)
    rays += gouge(
      299 + Math.cos(ang) * rad,
      274 + Math.sin(ang) * rad,
      299 + Math.cos(ang) * (rad + len),
      274 + Math.sin(ang) * (rad + len),
      0.9,
    )
  }

  // "a lustrous black, and flowing": long waving ribbons of light from the
  // brow back over the crown and down past the shoulder.
  let hair = ''
  for (let i = 0; i < 30; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 30
    const x0 = 232 - t * 124 + between(r, -3, 3)
    const y0 = 22 + Math.abs(t - 0.3) * 30 + between(r, 0, 8)
    const x1 = 158 - t * 116 + between(r, -6, 6)
    const y1 = 300 + between(r, 0, 30)
    const ph = between(r, 0, 6)
    const pts: Pt[] = []
    for (let k = 0; k <= 18; k++) {
      const u = k / 18
      const bulge = Math.sin(Math.PI * u) * (t - 0.15) * -30
      pts.push([x0 + (x1 - x0) * u + bulge + Math.sin(u * 8 + ph) * 3.2, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 0.8, 1.5) * (1.3 - t * 0.6), 0.8)
  }
  // The shine along the crown.
  const hairRim = rimLight(r, { cx: 180, cy: 116, rx: 80, ry: 106 }, 200, 300, 36, 1.3)

  // The cloak: a few long folds, catching the candle on the right.
  const coat =
    gouge(24, 262, 10, 322, 2, 2) +
    gouge(58, 254, 50, 322, 1.5, 1.5) +
    gouge(262, 292, 276, 324, 2.2, -1.5) +
    gouge(244, 290, 252, 326, 1.8, -1) +
    gouge(226, 290, 228, 326, 1.2, 0.6) +
    gouge(206, 292, 204, 326, 1, 0.6)

  // "the work of muscles and arteries beneath": the long cord of the neck
  // from behind the ear to the collar, the vein across it, the throat, cut
  // as fine lines in the skin, never opened.
  let neck = ''
  for (let i = 0; i < 7; i++) {
    const x = 184 + i * 3.6 + between(r, -0.6, 0.6)
    neck += `M${n(x)} ${n(160 + i * 4)}C${n(x + 8)} ${n(196 + i * 2)} ${n(x + 20)} ${n(226)} ${n(x + 30 + i * 0.6)} ${n(262)}`
  }
  neck += 'M178 196C184 214 186 234 184 256M181 214C176 222 172 226 166 228'
  neck += 'M220 226C216 238 217 250 221 262M224 230C222 240 223 250 226 258'

  // The jaw muscle, from the cheekbone down to the angle of the jaw.
  let jaw = ''
  for (let i = 0; i < 6; i++) {
    const t = i / 5
    jaw += `M${n(214 + t * 24)} ${n(136 + t * 3)}C${n(211 + t * 21)} ${n(156)} ${n(208 + t * 18)} ${n(174)} ${n(206 + t * 18 + between(r, -1, 1))} ${n(196 - t * 4)}`
  }

  // One artery at the temple, branching as it climbs from the ear. Its
  // branches climb with it: they first ran forward, level, across the
  // temple, and with the brow creases below them made five lines across his
  // forehead, which at phone size read as the scar of the films.
  const artery =
    'M206 106C203 94 208 84 205 72C203 64 206 56 212 48' +
    'M205 86C209 80 212 74 213 66M205 96C209 92 213 89 217 86'

  // The socket, hatched to the dun tone of the eye it holds.
  let socket = ''
  for (let i = 0; i < 8; i++) {
    const y = 103.5 + i * 2.6
    socket += `M${n(238 + between(r, -1, 1))} ${n(y)}L${n(257 + between(r, -1, 1))} ${n(y + 1)}`
  }

  // "his shrivelled complexion": fine creases at the corner of the eye, under
  // it and down the cheek. None across the brow (27 September 2026): two were
  // cut there, and lines across the Creature's forehead are what this text's
  // rules forbid, the stitches of the films.
  let creases = ''
  for (let rad = 14; rad < 34; rad += 4.6)
    creases += arcDashes(r, 262, 126, rad, deg(100), deg(172), [6, 16], [2, 5])
  creases += 'M238 110L229 108M238 114L228 116M239 118L231 124'
  creases += 'M247 170C243 176 244 184 249 190M254 184Q257 187 259 192'

  return { ground, rays, hair, hairRim, coat, neck, jaw, artery, socket, creases }
})

function TheCreature({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-cr-head`
  const hairClip = `${uid}-cr-hair`
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
      <path d={m.ground} fill={PAPER} />
      <path d={m.rays} fill={PAPER} />
      {/* the ink halo that lifts him off the ground */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <path d={HEAD} />
        <path d={HAIR} />
      </g>
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={0.9} />
        <path d={m.jaw} strokeWidth={0.7} />
        <path d={m.artery} strokeWidth={1} />
        <path d={m.socket} strokeWidth={LINE.hairline} />
        <path d={m.creases} strokeWidth={0.9} />
        {/* the shadow under the jaw, where the candle cannot reach */}
        <path d="M214 215C230 217 246 213 256 205" strokeWidth={1.4} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      {/* the cloak drawn up round the base of his neck */}
      <path
        d="M150 250C180 262 212 274 244 282"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.hairRim} fill={PAPER} />
      </g>
      {/* the eye itself is left as pale as the socket round it */}
      <path d={EYE} fill={PAPER} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M197 118C191 118 188 126 190 134C191 139 194 141 197 139" strokeWidth={1.1} />
        {/* the heavy black brow, as black as his hair */}
        <path d="M236 101Q250 93 265 99" strokeWidth={3.6} />
        {/* the lids of a pale eye */}
        <path d="M241.5 110Q248.5 105.4 256 109" strokeWidth={2.2} />
        <path d="M243.5 116.6Q250 118.2 255.5 114.6" strokeWidth={LINE.fine} />
        <path d="M255 109.5L257.5 108" strokeWidth={1.2} />
        {/* the iris is almost the colour of the socket: a faint ring, no dark */}
        <path d="M248.2 109A3.8 3.8 0 0 0 249.8 116.2" strokeWidth={0.7} />
        {/* the nostril */}
        <path d="M268.5 146.5C264.5 144.5 264.5 139.5 268.5 137.5" strokeWidth={1.5} />
      </g>
      <circle cx={251.4} cy={112.6} r={1} fill={INK} />
      {/* "watery": a wet glint along the lower lid */}
      <path d="M245.5 115.4Q249.5 116.6 253.5 114.6" stroke={PAPER} strokeWidth={1} fill="none" />
      {/* the straight black lips, and the teeth between them */}
      <path d={UPPER_LIP} fill={INK} />
      <path d={TEETH_GAPS} stroke={INK} strokeWidth={0.5} />
      <path d={LOWER_LIP} fill={INK} />
      <path
        d="M242.6 159.4C239.6 160.4 239.4 162.6 241.6 163.6"
        fill="none"
        stroke={INK}
        strokeWidth={1.1}
        strokeLinecap="round"
      />
      {/* the candle, nearly burnt out */}
      <path d={DISH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={CANDLE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d="M299 285L299 280" stroke={INK} strokeWidth={1.2} />
      <path
        d={FLAME}
        fill={RED}
        className="lc-flicker"
        // four 0.9 s flickers after the delay: all done by 4 s
        style={timing({ delay: 0.3 })}
      />
      <InnerRule />
    </>
  )
}

export const theCreatureArt: LinocutArt = { width: PW, height: PH, Draw: TheCreature }

// The markers for his teeth and lips stop a few units short of his mouth, so
// no red touches it: red on a mouth reads as blood at a glance.
export const theCreature: Portrait = {
  name: 'The Creature',
  art: theCreatureArt,
  alt: "A linocut portrait of the Creature in profile, facing right, drawn from Victor's description in Chapter 5. He is so large that his head reaches the top of the picture and his shoulders run out of both sides. His features are regular: a high forehead, a straight nose, a long jaw. Long, glossy black hair is swept back from his brow, behind his ear and down past his shoulder. Through his pale skin fine lines show the cords of his neck, the grain of his jaw muscle and a branching artery at his temple. Fine creases wrinkle the skin round his eye and down his cheek. His eye is pale, hardly darker than the hatched socket round it, with a wet glint on the lower lid. His lips are two straight black bars, parted on a narrow band of white teeth. A plain dark cloak covers his shoulders. Below him, at the right, a candle burnt almost to its dish has a small flame printed in red. Five numbered red markers point to his neck, his hair, his teeth, his eye and his lips.",
  describedBy: [
    {
      phrase: 'His yellow skin scarcely covered the work of muscles and arteries beneath',
      at: [150, 196],
      to: [196, 206],
    },
    { phrase: 'his hair was of a lustrous black, and flowing', at: [36, 120], to: [88, 150] },
    { phrase: 'his teeth of a pearly whiteness', at: [304, 146], to: [275, 160.6] },
    {
      phrase: 'his watery eyes, that seemed almost of the same colour as the dun white sockets',
      at: [300, 76],
      to: [252, 112],
    },
    {
      phrase: 'his shrivelled complexion and straight black lips',
      at: [300, 214],
      to: [275, 167],
    },
  ],
  where: 'Chapter 5',
  passage:
    'His yellow skin scarcely covered the work of muscles and arteries beneath; his hair was of a lustrous black, and flowing; his teeth of a pearly whiteness; but these luxuriances only formed a more horrid contrast with his watery eyes, that seemed almost of the same colour as the dun white sockets in which they were set, his shrivelled complexion and straight black lips.',
  note: 'Victor chose each feature as beautiful, and the horror is in the mix: lustrous hair and pearly teeth beside watery eyes and black lips. He is describing a being a few minutes old, and he runs from the room.',
  artNote:
    'The print has no yellow, so his skin is paper and its colour is left to the words. His great height is from Chapter 4, where Victor makes him “about eight feet in height”. He is drawn only from these words: none of the flat head, bolts, stitches or green skin of the films.',
}
