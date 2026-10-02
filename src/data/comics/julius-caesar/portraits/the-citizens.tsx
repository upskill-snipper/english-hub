import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import { blossom } from '../panels/rome'
import {
  capsule,
  combedFromCrown,
  ear,
  fringe,
  MAN_HEAD,
  once,
  PH,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  WOMAN_HEAD,
  type SP,
} from './common'

/**
 * The citizens of Rome, the crowd the tribunes scold and Antony moves, from
 * what the play says to them and of them:
 *
 *   MARULLUS: "Where is thy leather apron and thy rule? What dost thou with
 *   thy best apparel on?" (Act 1, Scene 1)
 *   MARULLUS: "And do you now strew flowers in his way, That comes in triumph
 *   over Pompey's blood?" (Act 1, Scene 1)
 *   ANTONY: "You are not wood, you are not stones, but men" (Act 3, Scene 2)
 *
 * So: two working men of Rome in their holiday best, the carpenter without
 * his apron and the cobbler holding up flowers for Caesar's triumph, side by
 * side in the crowd and turned the same way, listening, with more of the
 * crowd behind them, a woman among them under her palla. They are drawn with
 * the same care as the senators, plain and ordinary, and not as a caricature:
 * none of the names the tribunes and Casca call them is drawn or quoted.
 *
 * They are drawn as the figure kit draws them (../panels/people.tsx): the
 * carpenter bareheaded, his hair cropped and combed forward (ROMAN_HAIR); the
 * cobbler, "a saucy fellow", in his tall felt cap (CAP), with a grin (GRIN);
 * a woman of the crowd under her palla (PALLA); everyone in a plain tunic,
 * the carpenter's holiday best shown by the woven band at its neck. The
 * flowers are the panels' (`blossom` in ../panels/rome.tsx), five petals in
 * the spot colour, as the crowd holds them in the first two panels; they are
 * held low, at the chest, well clear of any face.
 *
 * Every head is every man's or woman's head in these portraits, drawn
 * smaller; its features are cut with lines thickened by the same amount, so
 * that they hold at phone width.
 *
 * Seeds: 8101 to 8104 (the figures' marks), 8110 (the ground).
 */

/** Where each sitter stands: their own 0..240 by 0..332 frame, scaled and moved. */
type Place = { x: number; y: number; s: number }
const CARPENTER: Place = { x: -6, y: 26, s: 0.66 }
const COBBLER: Place = { x: 100, y: 58, s: 0.7 }
/** The crowd behind, in silhouette: smaller heads, further back. */
const CROWD: (Place & { woman?: boolean })[] = [
  { x: 196, y: 6, s: 0.44, woman: true },
  { x: 116, y: -4, s: 0.42 },
  { x: 252, y: 34, s: 0.42 },
]

const placeT = (p: Place) => `translate(${p.x} ${p.y}) scale(${p.s})`
const at = (p: Place, x: number, y: number): [number, number] => [
  Math.round((p.x + x * p.s) * 10) / 10,
  Math.round((p.y + y * p.s) * 10) / 10,
]

/** A body that runs past the foot of the plate, however high it stands. */
const BODY = shoulders(1, 0).replace(/336/g, '520')

/** Cropped hair, combed forward to a fringe at the brow (the carpenter). */
const CROP_PTS: SP[] = [
  [159, 56, 1],
  [148, 60],
  [137, 62],
  [129, 68],
  [124, 82],
  [120, 98],
  [116, 108, 1],
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
]
/**
 * The cobbler's short hair below his cap, round behind the ear to the nape.
 * Its top edge runs up under the cap's lower edge, which is drawn over it, so
 * no bare scalp shows between them: a strip of paper there, edged by the two
 * outlines, was the white band that read as a bandage (see CAP).
 */
const COBBLER_HAIR = spline([
  [128, 68, 1],
  [121, 84],
  [118, 98],
  [114, 108, 1],
  [104, 104],
  [94, 112],
  [88, 132],
  [82, 150],
  [74, 164],
  [62, 170, 1],
  [48, 160],
  [43, 130],
  [42, 94, 1],
  [62, 80],
  [96, 72],
])
/**
 * The cobbler's felt cap, the kit's CAP (../panels/people.tsx) at the size of
 * a portrait: tall and soft, rising to a rounded point above the crown, so
 * its outline is not the head's. Its rolled brim is one paper cut above the
 * lower edge (CAP_ROLL), with ink below it, and one fold runs down from the
 * point (CAP_FOLD).
 *
 * WHY IT IS TALL (reviewed 2 October 2026). It was first cut close and round
 * on the crown, with a paper band along its lower edge, and the hair below
 * stopped short of that edge, leaving a strip of bare scalp. Between the dark
 * cap and the dark hair, band and scalp together read as a white headband, a
 * bandage, and marker 3's red line ran down out of it across his brow and
 * past his eye. The kit had already found the same thing in the panels ("its
 * band read as a headband on a bare head"), which is why its cap is tall; the
 * hair now runs up under the cap (COBBLER_HAIR).
 */
const CAP = spline([
  [163, 64, 1],
  [167, 44],
  [161, 22],
  [146, 6],
  [124, -1],
  [102, 3],
  [82, 16],
  [64, 36],
  [51, 62],
  [44, 94, 1],
  [82, 84],
  [124, 73],
])
/** Stopped short of both edges, so it is a cut in the cap and never a band round the head. */
const CAP_ROLL = gouge(60, 80, 148, 57, 2.2, -1.8)
const CAP_FOLD = gouge(120, 6, 96, 52, 2, 2.4)
/** The woman's head under her palla, in silhouette. */
const PALLA_HEAD = spline([
  [166, 66, 1],
  [156, 40],
  [122, 24],
  [82, 30],
  [52, 54],
  [36, 96],
  [30, 144],
  [24, 200],
  [10, 250],
  [-10, 330, 1],
  [200, 330, 1],
  [178, 240],
  [150, 206],
  [140, 180],
  [164, 166],
  [166, 150],
  [163, 147, 1],
  [166.5, 141],
  [163.5, 137, 1],
  [168, 133],
  [166.5, 127, 1],
  [174.5, 124.5],
  [176, 119],
  [169, 108],
  [163, 97, 1],
  [165.5, 89],
  [164, 76],
])
const MAN_EAR = ear(104, 124)

/** The woven band at the neck of the carpenter's best tunic: two paper edges and a zigzag between. */
const BAND_TOP = 'M70 222C98 240 140 242 170 226'
const BAND_FOOT = 'M66 236C96 256 142 258 174 240'
const BAND_WEAVE = (() => {
  let d = ''
  for (let i = 0; i <= 12; i++) {
    const t = i / 12
    const x = 68 + t * 104
    const y = 229 + Math.sin(t * Math.PI) * 18 + (i % 2 ? 4 : -4) - t * 2
    d += (i ? 'L' : 'M') + `${n(x)} ${n(y)}`
  }
  return d
})()

/**
 * A man's face, cut with lines thickened by `k`: the brow, the eye, nostril,
 * mouth (level, or turned up in a grin), the jaw.
 */
function ManFace({ k, grin = false }: { k: number; grin?: boolean }) {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M143.5 88.5Q153 85 165.5 88.5" strokeWidth={2.4 * k} />
      <path
        d={grin ? 'M146 99Q154 94.5 162.5 98.5' : 'M146 98Q154 94 162.5 98'}
        strokeWidth={1.9 * k}
      />
      <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.2 * k} />
      {grin ? (
        <>
          <path d="M170 147Q165 150.5 160.6 146" strokeWidth={1.4 * k} />
          <path d="M162 124Q156 132 157.6 142" strokeWidth={0.9 * k} />
          <path d="M145 100L139.4 98M145 103.6L140 106" strokeWidth={0.8 * k} />
        </>
      ) : (
        <path d="M170 148.2L162.6 148.8" strokeWidth={1.4 * k} />
      )}
      <path d="M108 150C118 168 140 182 167 183" strokeWidth={1.1 * k} />
    </g>
  )
}

type Marks = { crop: string; fringe: string; tunics: string; cobblerHair: string }

const marks = once((): Marks => {
  const crop = combedFromCrown(8101, CROP_PTS, [100, 74], 70, [7, 13], [0.9, 1.4])
  const edge = fringe([156, 58], [133, 66], 5, 10, 8102)
  const r = rng(8103)
  // Folds of the tunics, cut in paper in each sitter's own frame.
  let tunics = ''
  for (let i = 0; i < 5; i++) {
    const x = between(r, 20, 220)
    tunics += gouge(x, between(r, 266, 292), x + between(r, -8, 8), 420, between(r, 1.6, 2.4), 1.4)
  }
  const cobblerHair = combedFromCrown(
    8104,
    [
      [122, 82],
      [114, 108],
      [94, 112],
      [82, 150],
      [62, 170],
      [43, 130],
      [46, 96],
    ],
    [96, 74],
    34,
    [7, 12],
    [0.9, 1.3],
  )
  return { crop, fringe: edge, tunics, cobblerHair }
})

/** The flowers the cobbler holds up: a bunch in the spot colour on paper stems, at his chest. */
const POSY: Pt = [250, 268]
const posy = once(() => {
  const heads: Pt[] = []
  let stems = ''
  const spread = [-122, -104, -88, -72, -56]
  const lens = [30, 38, 42, 36, 28]
  spread.forEach((a, i) => {
    const t = (a * Math.PI) / 180
    const tip: Pt = [POSY[0] + Math.cos(t) * lens[i], POSY[1] + Math.sin(t) * lens[i]]
    stems += `M${n(POSY[0])} ${n(POSY[1] + 24)}L${n(tip[0])} ${n(tip[1])}`
    heads.push(tip)
  })
  return { stems, petals: heads.map(([x, y]) => blossom(x, y, 4.4)).join(''), hearts: heads }
})

/** The two sitters and the crowd behind them. */
function Citizens() {
  const m = marks()
  const p = posy()
  return (
    <g>
      {/* the crowd behind, in silhouette: two men and a woman under her palla */}
      {CROWD.map((c) => (
        <g key={c.x} transform={placeT(c)}>
          <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve / c.s} />
          {c.woman ? (
            <path d={PALLA_HEAD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve / c.s} />
          ) : (
            <path d={MAN_HEAD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve / c.s} />
          )}
        </g>
      ))}

      {/* the carpenter, bareheaded, his hair cropped and combed forward */}
      <g transform={placeT(CARPENTER)}>
        <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve / CARPENTER.s} />
        <path d={m.tunics} fill={PAPER} />
        <path d={MAN_HEAD} fill={PAPER} stroke={INK} strokeWidth={1.4 / CARPENTER.s} />
        <path
          d={spline(CROP_PTS)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve / CARPENTER.s}
        />
        <path d={m.crop} fill={PAPER} />
        <path d={m.fringe} fill={INK} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3 / CARPENTER.s} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.3 / CARPENTER.s} />
        <ManFace k={1 / CARPENTER.s} />
        <circle cx={155.4} cy={100.2} r={2.4 / CARPENTER.s} fill={INK} />
        {/* "thy best apparel": the woven band at the neck of his tunic */}
        <path d={BAND_TOP} fill="none" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
        <path d={BAND_FOOT} fill="none" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
        <path d={BAND_WEAVE} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinejoin="round" />
      </g>

      {/* the cobbler, in his felt cap, grinning */}
      <g transform={placeT(COBBLER)}>
        <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve / COBBLER.s} />
        <path d={m.tunics} fill={PAPER} transform="translate(-30 0)" />
        <path d={MAN_HEAD} fill={PAPER} stroke={INK} strokeWidth={1.4 / COBBLER.s} />
        <path d={COBBLER_HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve / COBBLER.s} />
        <path d={m.cobblerHair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3 / COBBLER.s} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.3 / COBBLER.s} />
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve / COBBLER.s} />
        <path d={CAP_ROLL + CAP_FOLD} fill={PAPER} />
        <ManFace k={1 / COBBLER.s} grin />
        <circle cx={155.2} cy={100} r={2.4 / COBBLER.s} fill={INK} />
        <path
          d="M84 226C104 238 138 240 160 228"
          fill="none"
          stroke={PAPER}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
      </g>

      {/* "strew flowers in his way": the cobbler's flowers, held up at his chest */}
      <path d={p.stems} stroke={PAPER} strokeWidth={4.2} strokeLinecap="round" fill="none" />
      <path d={p.stems} stroke={INK} strokeWidth={1.8} strokeLinecap="round" fill="none" />
      <path d={p.petals} fill={RED} stroke={INK} strokeWidth={1} />
      <g fill={INK}>
        {p.hearts.map(([x, y]) => (
          <circle key={`${x} ${y}`} cx={n(x)} cy={n(y)} r={1.7} />
        ))}
      </g>
      {/* his hand round the stems: four fingers closed over them, each cut apart, and the thumb */}
      <g fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round">
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={capsule(
              POSY[0] - 9,
              POSY[1] + 19 + i * 5.4,
              POSY[0] + 8.5,
              POSY[1] + 19.6 + i * 5.4,
              5.6,
            )}
          />
        ))}
        <path d={capsule(POSY[0] + 6, POSY[1] + 36, POSY[0] + 2, POSY[1] + 16, 5.8)} />
      </g>
    </g>
  )
}

const ground = once(() =>
  // Daylight on a holiday, ahead of them, to the right.
  portraitGround('jc-citizens', 8110, (x, y) =>
    clamp(0.1 + ((x - 60) / 270) * 0.85 - (y / PH) * 0.1),
  ),
)

function CitizensPortrait(_: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <Citizens />
      <PortraitRule />
    </>
  )
}

export const citizensPortrait: LinocutArt = { width: PW, height: PH, Draw: CitizensPortrait }

const BAND_AT = at(CARPENTER, 112, 244)
/** The cobbler's eye: marker 3 comes to it level from in front of his face. */
const FACE_AT = at(COBBLER, 155.2, 100)

export const theCitizens: Portrait = {
  name: 'The citizens',
  art: citizensPortrait,
  alt: 'A linocut portrait of two working men of Rome in a crowd, side by side in profile and both facing right, listening, with more of the crowd behind them in dark silhouette, among them a woman with a mantle over her head. On the left a carpenter, bareheaded, his dark hair cropped short and combed forward, wears a tunic with a woven band at the neck, his holiday best. On the right a cobbler in a tall, soft felt cap is grinning, and holds up a bunch of flowers printed red at his chest. Three numbered red markers point to the carpenter’s best tunic, the flowers and the cobbler’s face.',
  describedBy: [
    { phrase: 'thy best apparel', at: [BAND_AT[0] - 24, BAND_AT[1] + 46], to: BAND_AT },
    {
      phrase: 'strew flowers in his way',
      at: [POSY[0] + 30, POSY[1] - 62],
      to: [POSY[0] + 6, POSY[1] - 40],
    },
    // Level with the eye and from in front, as Caesar's eye marker comes, so
    // the line crosses only the brow of the nose: from above, it ran down
    // across his forehead and past his eye like a cut.
    { phrase: 'you are not stones, but men', at: [FACE_AT[0] + 54, FACE_AT[1] - 6], to: FACE_AT },
  ],
  where: 'Act 1, Scene 1; Act 3, Scene 2',
  note: 'Marullus calls the crowd stones for cheering Caesar; in the Forum Antony tells them they are not stones but men, and moves them to riot. Both speakers know the crowd can be turned, and the play shows it turning.',
  artNote:
    'The play names only their trades and their holiday clothes. They are drawn as ordinary working Romans in tunics, the cobbler in his felt cap, as in the panels, and the flowers they strew for Caesar are red.',
}
