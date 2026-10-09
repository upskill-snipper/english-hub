import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  bandAlong,
  folds,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Tear,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanNeckShadow,
} from './common'

/**
 * Mistress Quickly, the Hostess, Pistol's wife, as her husband names her and
 * bids her goodbye before the tavern in London:
 *
 *   PISTOL: "I have, and I will hold, the quondam Quickly For the only she"
 *   (Act 2, Scene 1)
 *   PISTOL, leaving for France: "Go, clear thy crystals." (Act 2, Scene 3)
 *
 * "Quondam" is "former": she was Nell Quickly, and is Pistol's wife now.
 * "Clear thy crystals" is "dry your eyes": she has just told them how
 * Falstaff died, and her husband is going to the war. So her eyes are wet and
 * a tear is on her cheek. The play says nothing of her face.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx, 'hostess'):
 * the woman's head (WOMAN_HEAD) in a married woman's white linen coif, framing
 * her face from the brow to under the chin, tied there with a band, and
 * falling behind her to the nape (the Romeo and Juliet kit's COIF, cut at this
 * size as the Nurse's portrait cuts hers); and a dark gown. Her apron is below
 * the foot of the block. Her brow is lifted at its inner end, and the tear is
 * cut in paper with an ink rim, as Exeter's is.
 *
 * THE COIF'S BORDER, turned back round her face, is a band of doubled linen
 * with an ink edge on both sides, and its creases are few and straight. Cut
 * first as a plain white fall with long curving folds, it read as long pale
 * hair.
 *
 * "London. Before a tavern." (2.3): behind her, the timbers of the tavern's
 * front, a post and a rail, and a window with its lattice cut in paper. It is day, the light ahead of her. There is no red in
 * this plate. Nothing of Falstaff is drawn.
 *
 * MARKERS. "the quondam Quickly" comes to her coif from behind, at its own
 * height: the married woman's linen is what the word "quondam" has changed;
 * "Go, clear thy crystals" comes to her eye from in front, at its own height.
 * No line crosses her face.
 *
 * Seeds: 10201 (the gown), 10210 (the ground), 10211 (the timbers).
 */

/**
 * The coif: white linen over the whole head, framing the face, and falling
 * behind to the nape and the top of the shoulders, square at its foot.
 */
const COIF = spline([
  [159, 62, 1],
  [158, 44],
  [142, 27],
  [110, 19],
  [76, 26],
  [52, 46],
  [40, 78],
  [36, 118],
  [36, 160],
  [34, 200],
  [30, 236, 1],
  [70, 240, 1],
  [84, 222],
  [98, 206],
  [112, 194],
  [122, 184, 1],
  [119, 160],
  [118, 132],
  [120, 106],
  [126, 84],
  [140, 70],
])
/** Its border, turned back round the face, just inside the opening. */
const COIF_BORDER: Pt[] = [
  [155.4, 57.6],
  [143.6, 62.6],
  [131, 71.6],
  [121.4, 87.6],
  [115.4, 109.6],
  [113.6, 136],
  [114.4, 162],
  [117.4, 183],
]
/** The creases of the linen: a few straight ones where it falls behind, and one over the crown. */
const COIF_FOLDS = 'M60 120L56 236M80 132L78 238M98 150L98 212M50 62Q76 38 112 30M44 96Q48 70 64 52'
/** The hem along the foot of the fall, stitched a little above its edge. */
const COIF_HEM = 'M32.6 229.4Q51 231.4 72.6 233.6'
/** The band's knot under the ear, and its two ends hanging from it. */
const KNOT: [number, number] = [118.6, 184.6]
const TIE_ENDS =
  'M116.4 186.4L109.4 207.6L115 209L120 189Z' + 'M120.6 187.6L123.6 209.6L129 207.6L123.4 186.4Z'
/** The band tied under her chin. */
const CHIN_BAND = spline([
  [118, 176, 1],
  [136, 182],
  [152, 179],
  [165, 168, 1],
  [167, 176],
  [155, 187],
  [136, 191],
  [116, 186, 1],
])

/** Her shoulders in a dark gown. */
const GOWN = spline([
  [-6, 346, 1],
  [0, 300],
  [18, 266],
  [50, 244],
  [84, 234],
  [114, 238],
  [142, 232],
  [168, 244],
  [190, 268],
  [204, 302],
  [210, 346, 1],
])
/** The neck of the gown, cut in paper. */
const NECK_TRIM = 'M96 238Q120 246 146 234'

// ── The tavern's front behind her, in the portrait's own frame ──────────────

/** A post and a rail of the timber frame. */
const TIMBERS = 'M12 152H124V164H12Z' + 'M30 10H44V152H30Z'
/** The window, its frame cut in paper. */
const WINDOW = 'M54 22H114V96H54Z'

/** The window's lattice: lead lines crossing on the diagonal, cut in paper. */
const lattice = once(() => {
  let d = ''
  for (let k = -80; k < 80; k += 12) {
    d += `M${54 + k} 22L${54 + k + 74} 96`
    d += `M${114 - k} 22L${114 - k - 74} 96`
  }
  return d
})

type Marks = { gown: string; grain: string }

const marks = once((): Marks => {
  const gown = folds(10201, [16, 196], [292, 306], 6, 346)
  // The grain of the old timbers, cut in paper along them.
  const r = rng(10211)
  let grain = ''
  for (let i = 0; i < 5; i++) {
    const x = 32 + between(r, 0, 10)
    grain += gouge(
      x,
      14 + between(r, 0, 30),
      x + between(r, -1, 1),
      140 - between(r, 0, 30),
      0.6,
      0.4,
    )
  }
  for (let i = 0; i < 3; i++) {
    const y = 155 + between(r, 0, 6)
    grain += gouge(16 + between(r, 0, 20), y, 118 - between(r, 0, 20), y, 0.6, 0.3)
  }
  return { gown, grain }
})

/** The Hostess, head and shoulders, facing right in the 0..240 by 0..346 frame. */
export function HostessFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-hos`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-coif`}>
          <path d={COIF} />
        </clipPath>
      </defs>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={id} />
      <path d={NECK_TRIM} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
      {/* the married woman's linen coif, its creases, and its border turned back round the face */}
      <path d={COIF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-coif)`}>
        <path d={COIF_FOLDS} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      </g>
      <path
        d={bandAlong(COIF_BORDER, 9)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
      <path d={COIF_HEM} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      {/* the band tied under her chin, its knot and its ends below the ear */}
      <path d={TIE_ENDS} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path
        d={CHIN_BAND}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <circle cx={KNOT[0]} cy={KNOT[1]} r={3.6} fill={PAPER} stroke={INK} strokeWidth={1.1} />
      {/* her face: nostril, lips, chin, and the brow lifted at its inner end */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
        <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
        <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
        <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        <path d="M143 85Q151 83 160.6 79.4" strokeWidth={2.1} />
        {/* "clear thy crystals": the eye wet, the lower lid full */}
        <path d="M145 94.5Q152.5 90.6 160.5 94.4" strokeWidth={2.2} />
        <path d="M146.4 99.6Q153 102.4 159.6 98.8" strokeWidth={1.1} />
        <path d="M147.4 102.4Q153 105 158.6 101.8" strokeWidth={0.8} />
      </g>
      <circle cx={WOMAN_EYE[0] + 0.6} cy={WOMAN_EYE[1] + 0.8} r={2.5} fill={INK} />
      <circle cx={WOMAN_EYE[0] + 1.4} cy={WOMAN_EYE[1]} r={0.75} fill={PAPER} />
      <Tear x={150} y={121} s={0.9} track={9} />
    </g>
  )
}

/** A thick ink halo round her coif, face and shoulders. */
function HostessKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={COIF} />
      <path d={WOMAN_HEAD} />
      <path d={CHIN_BAND} />
      <path d={TIE_ENDS} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(74, 8, 0.94)

const ground = once(() =>
  // The plaster of the tavern's front by day, the light ahead of her.
  portraitGround('hv-mistress-quickly', 10210, (x, y) =>
    clamp(0.16 + ((x - 40) / 280) * 0.78 - (y / PH) * 0.12),
  ),
)

function HostessPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        <clipPath id={`${uid}-hos-win`}>
          <path d={WINDOW} />
        </clipPath>
      </defs>
      <path d={ground()} fill={PAPER} />
      {/* the tavern's front: its timbers, and the window with its lattice */}
      <path d={TIMBERS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.grain} fill={PAPER} />
      <path d={WINDOW} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      <g clipPath={`url(#${uid}-hos-win)`}>
        <path d={lattice()} fill="none" stroke={PAPER} strokeWidth={1.2} />
      </g>
      <g transform={P.transform}>
        <HostessKnockout />
        <HostessFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mistressQuicklyPortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: HostessPortrait,
}

const COIF_AT = P.to(38, 112)
const EYE_AT = P.to(WOMAN_EYE[0] + 3, WOMAN_EYE[1] + 1)

export const mistressQuickly: Portrait = {
  name: 'Mistress Quickly',
  art: mistressQuicklyPortrait,
  alt: 'A linocut portrait of Mistress Quickly, the Hostess, in profile, facing right, before the timbered front of a tavern with a latticed window. She wears a white linen coif, its border turned back round her face, that covers her hair and ears, is tied with a band under her chin, knotted below the ear, and falls behind her to the nape, and a dark gown. Her brow is lifted in sorrow, her eye is wet, and a tear runs down her cheek. Two numbered red markers point to her coif and her eye.',
  describedBy: [
    { phrase: 'the quondam Quickly', at: [COIF_AT[0] - 36, COIF_AT[1] - 6], to: COIF_AT },
    { phrase: 'Go, clear thy crystals', at: [EYE_AT[0] + 52, EYE_AT[1] - 8], to: EYE_AT },
  ],
  where: 'Act 2, Scene 1; Act 2, Scene 3',
  note: 'The Hostess, Nell Quickly, keeps a house in London, where Sir John Falstaff lies ill, and has married Pistol. In Act 2, Scene 3 she tells the others how Falstaff died, gently and comically, and then says goodbye to her husband as he leaves for France.',
  artNote:
    'The play does not describe her looks. Her linen coif is how a married woman of 1415 covered her hair, and how the panels draw her; the tear is drawn from Pistol’s “clear thy crystals”.',
}
