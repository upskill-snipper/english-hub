import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  InnerRule,
  PH,
  PW,
  capsule,
  combedHair,
  once,
  portraitGround,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * The De Lacey family in their cottage, as the Creature sees them through
 * the chink in the wall of his hovel:
 *
 *   "In one corner, near a small fire, sat an old man ... The silver hair
 *   and benevolent countenance of the aged cottager won my reverence, while
 *   the gentle manners of the girl enticed my love." (Chapter 11)
 *   "Yet she was meanly dressed, a coarse blue petticoat and a linen jacket
 *   being her only garb; her fair hair was plaited, but not adorned: she
 *   looked patient, yet sad." (Chapter 11)
 *   "the younger was slight and graceful in his figure, and his features were
 *   moulded with the finest symmetry; yet his eyes and attitude expressed the
 *   utmost sadness and despondency." (Chapter 11)
 *   "the old man played on his guitar, and the children listened to him--that
 *   I observed the countenance of Felix was melancholy beyond expression"
 *   (Chapter 13)
 *   "The old man, whom I soon perceived to be blind" (Chapter 12)
 *
 * So: the "small room ... whitewashed and clean, but very bare of furniture",
 * its wall cut pale; the small fire in the corner, the one spot of colour; old
 * De Lacey on a stool beside it, in profile facing right, his silver hair cut
 * in paper and combed in ink, his eyes closed (he is blind) and his face
 * gentle, playing the guitar across his knees; Agatha standing, facing him,
 * listening, in a linen jacket cut in paper and a dark petticoat, her
 * fair hair in a plain plait down her back; and Felix standing behind her,
 * slight, his head bowed, his dark hair falling forward, the saddest of the
 * three. The Creature is not in the picture: this is what he sees.
 *
 * The petticoat is blue in the text and prints black; the old man's and
 * Felix's clothes are not described, so they wear the plain dress of poor
 * country people of the time. Nothing here comes from a film or stage
 * production. Hands are cut with every finger apart.
 *
 * Agatha and Felix are drawn facing right and flipped (MIRROR_AG carries x
 * to 500 - x, MIRROR to 480 - x), so they face the old man.
 *
 * Seeds: 4601 for the ground, 4602 for the cuts in the figures.
 */

const MIRROR = 'translate(480 0) scale(-1 1)'
/** Agatha's own mirror, a little further right, so her knees clear her father's. */
const MIRROR_AG = 'translate(500 0) scale(-1 1)'

// ── Old De Lacey, seated, facing right ─────────────────────────────────────

const OLD_HEAD = smooth([
  [86, 152, 1],
  [84, 132],
  [74, 116],
  [72, 96],
  [80, 76],
  [96, 64],
  [116, 62],
  [130, 70],
  [136, 84],
  [137, 94],
  [135.5, 99, 1],
  [139, 107],
  [142.5, 114, 1],
  [139, 116.5],
  [134.5, 117.5, 1],
  [135.5, 121],
  [134.5, 124, 1],
  [135, 127],
  [133, 131],
  [134, 137],
  [130, 142],
  [122, 145],
  [114, 148],
  [112, 152, 1],
])
/** His silver hair, thin on top and falling to his collar behind. */
const OLD_HAIR_PTS: Knot[] = [
  [118, 66],
  [100, 60],
  [82, 68],
  [70, 90],
  [68, 118],
  [74, 144],
  [84, 156, 1],
  [96, 150],
  [96, 126],
  [100, 110],
  [104, 94],
  [112, 80],
]
const OLD_HAIR = smooth(OLD_HAIR_PTS)
const OLD_EAR = smooth([
  [108, 98],
  [103, 96],
  [100, 101],
  [100, 110],
  [103, 116],
  [108, 114],
])
/** His coat and breeches, seated on a stool, the knees forward, the shins down to the floor. */
const OLD_BODY = smooth([
  [64, 148, 1],
  [94, 152],
  [122, 148],
  [138, 162],
  [144, 196],
  [150, 222],
  [178, 226],
  [190, 238],
  [188, 294],
  [200, 300],
  [200, 310, 1],
  [170, 310, 1],
  [168, 252],
  [120, 252],
  [60, 250],
  [52, 204],
  [54, 168],
])
const OLD_COLLAR = 'M96 150L114 150L124 170L108 162Z'
const STOOL_OLD =
  'M48 250L126 250L126 258L48 258ZM54 258L60 258L58 306L52 306ZM112 258L118 258L120 306L114 306Z'

/**
 * The guitar across his knees: a waisted body at his lap, its neck rising
 * towards his shoulder. Built from its two bouts, so it keeps a guitar's shape.
 */
const G_LOW: Pt = [160, 228]
const G_UP: Pt = [126, 204]
const G_AXIS = Math.atan2(G_UP[1] - G_LOW[1], G_UP[0] - G_LOW[0])
const onAxis = (c: Pt, r: number, deg0: number): Knot => {
  const a = G_AXIS + (deg0 * Math.PI) / 180
  return [
    Math.round((c[0] + Math.cos(a) * r) * 10) / 10,
    Math.round((c[1] + Math.sin(a) * r) * 10) / 10,
  ]
}
const GUITAR = smooth([
  onAxis(G_UP, 18, 0),
  onAxis(G_UP, 18, 50),
  onAxis(G_UP, 18, 100),
  onAxis([(G_UP[0] + G_LOW[0]) / 2, (G_UP[1] + G_LOW[1]) / 2], 14, 90),
  onAxis(G_LOW, 25, 70),
  onAxis(G_LOW, 25, 125),
  onAxis(G_LOW, 25, 180),
  onAxis(G_LOW, 25, 235),
  onAxis(G_LOW, 25, 290),
  onAxis([(G_UP[0] + G_LOW[0]) / 2, (G_UP[1] + G_LOW[1]) / 2], 14, 270),
  onAxis(G_UP, 18, 260),
  onAxis(G_UP, 18, 310),
])
const NECK_FROM = onAxis(G_UP, 16, 0)
const NECK_TO: Pt = [70, 162]
const GUITAR_NECK = capsule(NECK_FROM[0], NECK_FROM[1], NECK_TO[0], NECK_TO[1], 7.5)
const HEADSTOCK = 'M73 160L58 152L56 160L70 168Z'
const SOUNDHOLE_C: Pt = [134, 210]
const BRIDGE = (() => {
  const [x, y] = onAxis(G_LOW, 10, 180)
  return capsule(x - 4, y + 5, x + 4, y - 5, 3.2)
})()
const STRINGS = (() => {
  const [bx, by] = onAxis(G_LOW, 10, 180)
  let d = ''
  for (const k of [-2, 0, 2])
    d += `M${n(bx + k)} ${n(by + k * 0.6)}L${n(NECK_TO[0] + k * 0.6)} ${n(NECK_TO[1] + k)}`
  return d
})()

/** His hand on the neck, the fingers across the strings, and his hand at the bridge. */
const FRET_PALM = smooth([
  [80, 180],
  [84, 170],
  [94, 168],
  [102, 174],
  [100, 184],
  [90, 188],
])
const FRET_FINGERS: [Pt, Pt, number][] = [
  [[86, 168], [80, 160], 5],
  [[93, 168], [89, 159], 5],
  [[100, 172], [97, 162], 4.8],
]
const PICK_PALM = smooth([
  [156, 214],
  [166, 210],
  [176, 214],
  [178, 222],
  [170, 226],
  [158, 224],
])
const PICK_FINGERS: [Pt, Pt, number][] = [
  [[160, 222], [156, 234], 4.8],
  [[166, 224], [164, 236], 4.8],
  [[172, 224], [172, 235], 4.6],
  [[177, 219], [183, 228], 4.8],
]

// ── Agatha, standing, facing him (drawn facing right, mirrored) ────────────

const AG_HEAD = smooth([
  [226, 192, 1],
  [223, 178],
  [215, 166],
  [213, 148],
  [219, 132],
  [232, 123],
  [248, 122],
  [260, 130],
  [264, 141],
  [264.5, 149],
  [262.5, 153, 1],
  [265.5, 159],
  [268.5, 164.5, 1],
  [265.5, 166.5],
  [261.5, 167.2, 1],
  [262.2, 170],
  [261.4, 172.5, 1],
  [262, 175],
  [259.4, 178.5],
  [260.2, 182],
  [256, 186],
  [248, 188],
  [244, 192, 1],
])
/** Her fair hair, drawn back plain from the brow into a plait. */
const AG_HAIR_PTS: Knot[] = [
  [258, 128],
  [244, 118],
  [226, 118],
  [212, 130],
  [208, 150],
  [212, 170],
  [222, 178, 1],
  [226, 160],
  [232, 146],
  [244, 136],
  [256, 134],
]
const AG_HAIR = smooth(AG_HAIR_PTS)
/** The plait down her back: a chain of small lobes, each cut apart. */
const PLAIT = (() => {
  let d = ''
  for (let i = 0; i < 7; i++) {
    const y = 172 + i * 9
    const x = 214 - i * 1.2
    const side = i % 2 ? 1 : -1
    d += `M${n(x)} ${n(y)}q${n(side * 7)} ${n(3)} ${n(side * 2)} ${n(10)}q${n(-side * 6)} ${n(-2)} ${n(-side * 2)} ${n(-10)}Z`
  }
  return d
})()
/** Her linen jacket, and her dark petticoat, standing. */
const AG_JACKET = smooth([
  [222, 188, 1],
  [246, 190],
  [262, 202],
  [266, 222],
  [262, 232, 1],
  [214, 232, 1],
  [212, 206],
])
const AG_SKIRT = smooth([
  [214, 228, 1],
  [262, 228],
  [270, 250],
  [276, 290],
  [282, 312, 1],
  [204, 312, 1],
  [208, 262],
])
/** Her hands in her lap, over her work: a fold of linen, the fingers apart. */
const AG_WORK = 'M262 238L286 236L288 250L262 252Z'
const AG_FINGERS: [Pt, Pt, number][] = [
  [[266, 240], [278, 236], 4.4],
  [[266, 245], [279, 242], 4.4],
  [[266, 250], [278, 248], 4.2],
]
const AG_HANDBACK = smooth([
  [256, 236],
  [266, 236],
  [270, 244],
  [266, 252],
  [256, 252],
])

// ── Felix, standing behind her, his head bowed (drawn facing right, mirrored) ──

const FX_HEAD = smooth([
  [172, 104, 1],
  [168, 90],
  [160, 78],
  [160, 60],
  [168, 46],
  [182, 38],
  [198, 38],
  [208, 46],
  [213, 58],
  [214.5, 66],
  [213, 70, 1],
  [217, 76],
  [220, 81, 1],
  [217, 83.5],
  [213, 84, 1],
  [213.5, 87],
  [212.4, 89.5, 1],
  [213, 92],
  [210, 96],
  [211, 100],
  [206, 104],
  [196, 106],
  [192, 110, 1],
])
/** His dark hair, falling forward as he bows his head. */
const FX_HAIR = smooth([
  [212, 60, 1],
  [206, 44],
  [192, 34],
  [174, 34],
  [160, 44],
  [154, 62],
  [156, 84],
  [164, 96, 1],
  [170, 84],
  [176, 72],
  [190, 64],
  [204, 64],
])
const FX_BODY = smooth([
  [160, 330, 1],
  [158, 200],
  [160, 140],
  [168, 112],
  [190, 104],
  [208, 110],
  [218, 140],
  [220, 200],
  [216, 330, 1],
])
const FX_COLLAR = 'M176 106L196 104L204 116L186 122Z'
const FX_ROT = 'rotate(14 190 104)'

// ── The corner fire ────────────────────────────────────────────────────────

const HEARTH = 'M10 244L46 236L46 312L10 312Z'
const FLAMES = [
  'M16 300C14 292 17 286 21 281C22 286 24 288 25 290C26 283 29 278 32 273C33 280 36 285 37 291C38 288 40 287 41 286C42 292 42 297 40 300Z',
]
const LOGS = 'M14 302L42 298L43 304L15 308Z'

type Marks = {
  ground: string
  wall: string
  floor: string
  oldHair: string
  oldCoat: string
  agHair: string
  agSkirt: string
  agJacket: string
  fxHair: string
  fxBody: string
  guitar: string
}

const marks = once<Marks>(() => {
  // "whitewashed and clean, but very bare": the wall cut pale, brightest by
  // the fire; the floor dark.
  const ground = portraitGround(4601, (x, y) => (y > 256 ? 0.14 : 0))
  const r = rng(4602)
  // The whitewashed wall is the palest thing in the room: paper, with the
  // brush of the whitewash left as fine broken lines of ink, heavier away
  // from the fire.
  let wall = ''
  for (let y = 14; y < 254; y += 6.5) {
    let x = 10 + between(r, 0, 20)
    while (x < 322) {
      const len = between(r, 14, 46)
      const shade = clamp((x - 40) / 300) * 0.7 + clamp((260 - y) / 260) * 0.3
      if (r() < 0.35 + shade * 0.5)
        wall += gouge(x, y + between(r, -0.6, 0.6), Math.min(x + len, 322), y, 0.25 + shade * 0.55)
      x += len + between(r, 8, 22)
    }
  }
  let floor = ''
  for (let y = 262; y < 312; y += 7) floor += gouge(10, y, 322, y + between(r, -1, 1), 0.6)

  // Silver hair: paper, combed in fine ink, falling to the collar.
  const oldHair = combedHair(r, OLD_HAIR_PTS, [104, 112], 70, [5, 10], 128)
  const oldCoat =
    gouge(62, 180, 58, 244, 1.4, 1) +
    gouge(128, 168, 138, 214, 1.2, -1) +
    gouge(176, 240, 176, 292, 1.1, 0.5)

  // Agatha's fair hair, drawn back plain: a few ink lines towards the plait.
  let agHair = ''
  for (let i = 0; i < 9; i++) {
    const t = i / 8
    agHair += `M${n(256 - t * 8)} ${n(132 - t * 12)}Q${n(234 - t * 14)} ${n(128 + t * 4)} ${n(218 + t * 2)} ${n(150 + t * 24)}`
  }
  const agSkirt =
    gouge(222, 244, 216, 306, 1.2, 1) +
    gouge(250, 240, 252, 306, 1.2, 0.5) +
    gouge(276, 250, 282, 306, 1.4, -1)
  const agJacket =
    'M232 196C236 208 238 220 236 230M252 196C254 208 256 220 254 230M222 198L230 232'

  // Felix's dark hair: paper strands falling forward.
  const fxHair = strands(
    r,
    14,
    (t) => [206 - t * 40, 40 + t * 6],
    (t) => [196 - t * 30, 62 + t * 30],
    [0.4, 0.8],
    1.4,
  )
  const fxBody = gouge(176, 140, 172, 320, 1.2, 1) + gouge(206, 136, 208, 320, 1, -0.6)

  // The guitar's grain, and the frets along its neck.
  let guitar = ''
  for (let i = 1; i < 7; i++) {
    const t = i / 7
    const x = NECK_FROM[0] + (NECK_TO[0] - NECK_FROM[0]) * t
    const y = NECK_FROM[1] + (NECK_TO[1] - NECK_FROM[1]) * t
    guitar += `M${n(x - 2)} ${n(y + 3)}L${n(x + 2)} ${n(y - 3)}`
  }

  return {
    ground,
    wall,
    floor,
    oldHair,
    oldCoat,
    agHair,
    agSkirt,
    agJacket,
    fxHair,
    fxBody,
    guitar,
  }
})

/** Fingers as separate capsules, each with an ink rim so they never merge. */
function Fingers({ list }: { list: [Pt, Pt, number][] }) {
  return (
    <g>
      {list.map(([a, b, w]) => {
        const d = capsule(a[0], a[1], b[0], b[1], w)
        return <path key={d} d={d} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      })}
    </g>
  )
}

function TheDeLaceyFamily({ uid }: ArtProps) {
  const m = marks()
  const oldHairClip = `${uid}-dl-oldhair`
  const agHairClip = `${uid}-dl-aghair`
  const fxHairClip = `${uid}-dl-fxhair`
  return (
    <>
      <defs>
        <clipPath id={oldHairClip}>
          <path d={OLD_HAIR} />
        </clipPath>
        <clipPath id={agHairClip}>
          <path d={AG_HAIR} />
        </clipPath>
        <clipPath id={fxHairClip}>
          <path d={FX_HAIR} />
        </clipPath>
        <clipPath id={`${uid}-dl-neck`}>
          <path d={GUITAR_NECK} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.floor} fill={PAPER} />
      <path d="M8 8L324 8L324 256L8 256Z" fill={PAPER} />
      <path d={m.wall} fill={INK} />
      <path d="M8 256L324 256" stroke={INK} strokeWidth={LINE.bold} />
      {/* the small fire in the corner */}
      <path d={HEARTH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {FLAMES.map((d) => (
        <path
          key={d}
          d={d}
          fill={RED}
          className="lc-flicker"
          // four 0.9 s flickers after the delay: all done by 4 s
          style={timing({ delay: 0.3 })}
        />
      ))}
      <path d={LOGS} fill={INK} stroke={PAPER} strokeWidth={1} />

      {/* Felix, standing behind, his head bowed */}
      <g transform={MIRROR}>
        <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
          <path d={FX_BODY} />
          <g transform={FX_ROT}>
            <path d={FX_HEAD} />
            <path d={FX_HAIR} />
          </g>
        </g>
        <path d={FX_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.fxBody} fill={PAPER} />
        <path d={FX_COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g transform={FX_ROT}>
          <path d={FX_HEAD} fill={PAPER} />
          <path d={FX_HAIR} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
          <g clipPath={`url(#${fxHairClip})`}>
            <path d={m.fxHair} fill={PAPER} />
          </g>
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            {/* brows drawn up in the middle, the eye cast down, the mouth turned down */}
            <path d="M196 64Q204 60 212 65" strokeWidth={2} />
            <path d="M199 72Q205 69.5 211 72.5" strokeWidth={1.8} />
            <path d="M200.5 77Q205.5 78.5 210 76" strokeWidth={LINE.hairline} />
            <path d="M216 81C213.5 80 213.5 77 216 76" strokeWidth={1.1} />
            <path d="M212.6 88.6L206.5 89.4L205 91.6" strokeWidth={1.4} />
            <path d="M184 76C182 70 186 66 190 68C192 72 190 78 186 80" strokeWidth={1.2} />
          </g>
          <circle cx={206} cy={74.6} r={1.8} fill={INK} />
        </g>
      </g>

      {/* Agatha, standing, facing him */}
      <g transform={MIRROR_AG}>
        <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
          <path d={AG_SKIRT} />
          <path d={AG_JACKET} />
          <path d={AG_HEAD} />
          <path d={AG_HAIR} />
          <path d={PLAIT} />
        </g>
        <path d={AG_SKIRT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.agSkirt} fill={PAPER} />
        <path d={AG_JACKET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.agJacket} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d={AG_HEAD} fill={PAPER} />
        <path d={AG_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <g clipPath={`url(#${agHairClip})`}>
          <path d={m.agHair} fill="none" stroke={INK} strokeWidth={0.9} />
        </g>
        <path d={PLAIT} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* "patient, yet sad": a level brow, the eye lowered, the mouth still */}
          <path d="M246 141Q253 138 261 141" strokeWidth={1.7} />
          <path d="M249 147.5Q255 144.5 261 148" strokeWidth={1.7} />
          <path d="M250.5 151.8Q255.5 153.2 260 151" strokeWidth={LINE.hairline} />
          <path d="M264 162C261.5 161 261.5 158 264 157" strokeWidth={1.1} />
          <path d="M261.5 170.6L255.5 171" strokeWidth={1.4} />
          <path d="M234 152C230 153 229 161 232 164" strokeWidth={1.2} />
        </g>
        <circle cx={256} cy={149.8} r={1.8} fill={INK} />
        <path d={AG_WORK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={AG_HANDBACK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <Fingers list={AG_FINGERS} />
      </g>

      {/* Old De Lacey, on his stool, playing */}
      <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
        <path d={OLD_BODY} />
        <path d={OLD_HEAD} />
        <path d={OLD_HAIR} />
        <path d={GUITAR} />
        <path d={GUITAR_NECK + HEADSTOCK} />
      </g>
      <path d={STOOL_OLD} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={OLD_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.oldCoat} fill={PAPER} />
      <path d={OLD_COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={OLD_HEAD} fill={PAPER} />
      <path d={OLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <g clipPath={`url(#${oldHairClip})`}>
        <path d={m.oldHair} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={OLD_EAR} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a benevolent old face: the eyes closed, for he is blind; a smile */}
        <path d="M118 90Q126 86 134 90" strokeWidth={1.8} />
        <path d="M121 99Q127 102.5 133 99" strokeWidth={1.8} />
        <path d="M120 95Q126 93 132 95" strokeWidth={LINE.hairline} />
        <path d="M122 104L118 108M124 106L121 110" strokeWidth={0.8} />
        <path d="M139 115C136 114 136 110 139 109" strokeWidth={1.1} />
        <path d="M134.5 124.2L128.5 124Q126.5 122.6 126 120.6" strokeWidth={1.4} />
        <path d="M129 112Q124 118 126 123" strokeWidth={0.9} />
        <path d="M116 132C120 138 126 142 132 142" strokeWidth={0.9} />
      </g>
      {/* the guitar, and his hands on it */}
      <path d={GUITAR} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path d={GUITAR_NECK} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={HEADSTOCK} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={m.guitar} fill="none" stroke={PAPER} strokeWidth={1} />
      <circle cx={SOUNDHOLE_C[0]} cy={SOUNDHOLE_C[1]} r={6.4} fill={INK} />
      <path d={BRIDGE} fill={INK} />
      <path d={STRINGS} fill="none" stroke={INK} strokeWidth={0.6} />
      <path
        d={STRINGS}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.5}
        clipPath={`url(#${uid}-dl-neck)`}
      />
      <path d={FRET_PALM} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Fingers list={FRET_FINGERS} />
      <path d={PICK_PALM} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Fingers list={PICK_FINGERS} />
      <InnerRule />
    </>
  )
}

export const theDeLaceyFamilyArt: LinocutArt = { width: PW, height: PH, Draw: TheDeLaceyFamily }

const AG_PLAIT: Pt = [500 - 212, 196]
/** His cheek, reached from behind and below, so the marker's line keeps clear of the eye and mouth. */
const FELIX_FACE: Pt = [283, 94]

export const theDeLaceyFamily: Portrait = {
  name: 'The De Lacey family',
  art: theDeLaceyFamilyArt,
  alt: "A linocut portrait of the De Lacey family in their bare, whitewashed cottage, with a small fire printed in red in the corner at the left. Old De Lacey sits on a stool beside it in profile, facing right: an old man with thin silver hair falling to his collar, his eyes closed, for he is blind, and a gentle smile, playing a guitar that lies across his knees, one hand on its neck and the other over the strings. Facing him stands his daughter Agatha, listening, in a pale linen jacket and a dark petticoat, her fair hair drawn back plain into a plait down her back, her hands in her lap over a fold of linen. Behind her stands her brother Felix, slight, in a dark coat, his head bowed and his dark hair falling forward, his face sad. Four numbered red markers point to the old man's silver hair, the guitar, Agatha's plait and Felix's face.",
  describedBy: [
    {
      phrase: 'The silver hair and benevolent countenance of the aged cottager',
      at: [44, 62],
      to: [84, 96],
    },
    { phrase: 'the old man played on his guitar', at: [110, 286], to: [146, 234] },
    { phrase: 'her fair hair was plaited, but not adorned', at: [310, 240], to: AG_PLAIT },
    {
      phrase: 'the countenance of Felix was melancholy beyond expression',
      at: [314, 124],
      to: FELIX_FACE,
    },
  ],
  where: 'Chapters 11 and 13',
  note: 'The Creature watches them for months through a chink in the wall, and learns from them what a family is: love, work, music and grief. When he at last speaks to them, only the blind father receives him kindly.',
  artNote:
    'Shelley gives Agatha “a coarse blue petticoat and a linen jacket”; the print cannot show blue, so the petticoat is black. The men’s clothes are not described, so they wear the plain dress of poor country people of the time.',
}
