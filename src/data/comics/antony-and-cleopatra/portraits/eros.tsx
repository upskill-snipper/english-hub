import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  combedFromCrown,
  CROPPED_HAIR,
  CROPPED_PTS,
  EarCut,
  fringe,
  handPaths,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SpecHand,
  spline,
  Tunic,
  TUNIC,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
} from './common'

/**
 * Eros, Antony's servant, freed by him, on the morning of the second battle
 * (Act 4, Scene 4), from the lines of that scene:
 *
 *   ANTONY: "Eros! Mine armour, Eros!" ... "Come, good fellow, put thine iron
 *   on." (Act 4, Scene 4)
 *   ANTONY: "Rarely, rarely. He that unbuckles this, till we do please To
 *   daff’t for our repose, shall hear a storm. Thou fumblest, Eros, and my
 *   queen’s a squire More tight at this than thou." (Act 4, Scene 4)
 *
 * So: the servant who arms his master, holding up Antony's breastplate, its
 * straps hanging from the shoulders with their buckles, his near hand on its
 * edge and a buckle in his fingers, his eyes down on the work. The play says
 * nothing of his face or his age: he is drawn as the figure kit draws him
 * (../panels/people.tsx: 'eros'), the youth's head (YOUTH_HEAD), beardless,
 * his hair cropped and combed forward (./common.tsx: CROPPED_HAIR), in a plain
 * tunic (Tunic). The breastplate is the plain Roman cuirass the panels arm
 * every soldier in, seen from the front as he holds it up, with nothing on
 * it; no sword is drawn. Nothing of Act 4, Scene 14 is drawn or pointed at.
 * There is no red in this plate but the markers.
 *
 * MARKERS. The armour's sits on the breastplate with no line; "Thou fumblest"
 * comes to his hand from in front, at its height. Neither is near his face.
 *
 * Seeds: 6101 to 6104 (the figure's marks), 6105 (the tunic), 6110 (the
 * ground).
 */

/** The head bowed a little over the work: a turn about the foot of the neck. */
const BOW = 7
const BOW_T = `rotate(${BOW} 112 214)`

/**
 * Antony's breastplate, held up before him and seen from the front: the
 * shoulder pieces, the scoop of the neck, the curves of the armholes and the
 * sides, its foot below the frame. Ink, with its rim and the modelling of the
 * chest cut in paper (PLATE_CUTS) and rivets along the shoulder pieces.
 */
const PLATE = spline([
  [150, 252, 1],
  [166, 246],
  [180, 248, 1],
  [194, 258],
  [208, 248, 1],
  [222, 246],
  [238, 252, 1],
  [236, 268],
  [240, 284],
  [246, 300, 1],
  [248, 344, 1],
  [142, 344, 1],
  [142, 300, 1],
  [148, 284],
  [152, 268],
])
/** The rim round the neck, the line down the breastbone, and the curves of the chest, cut in paper. */
const PLATE_LINES =
  'M182 253Q194 265 206 253' +
  'M194 268L194 340' +
  'M162 284Q178 296 192 290M196 290Q210 296 226 284' +
  'M157 264Q162 282 150 300M231 264Q226 282 238 300'
const PLATE_RIVETS: Pt[] = [
  [158, 253],
  [168, 251],
  [220, 251],
  [230, 253],
]
/** The straps that buckle the plate over the shoulders, hanging from its shoulder pieces. */
const STRAP_FAR = 'M224 250C228 262 230 276 228 290'
const STRAP_NEAR = 'M164 250C160 256 154 262 146 268'
const BUCKLE_FAR: Pt = [228, 293]
const BUCKLE_NEAR: Pt = [149, 264]

/**
 * His near hand, from the foot of the frame, the back of the hand towards us,
 * holding the end of the near strap at its buckle: the fingers apart, the
 * thumb over the strap.
 */
const HAND = handPaths({
  wrist: [
    [104, 300],
    [112, 314],
  ],
  knuckles: [
    [124, 280],
    [128, 284.4],
    [131, 289.4],
    [132.6, 295],
  ],
  tips: [
    [138, 270],
    [142.4, 276],
    [145, 283],
    [145.6, 290.6],
  ],
  width: [6, 6.2, 6, 5.4],
  bow: [-1.2, -1, -0.8, -0.6],
  thumb: { root: [112, 296], tip: [132, 282], width: 6.4, bow: 1.4, front: true },
})
/** The forearm, bare below the tunic's short sleeve, from the foot of the frame to the wrist. */
const FOREARM = spline([
  [70, 344, 1],
  [86, 320],
  [100, 300],
  [106, 296],
  [116, 312],
  [104, 330],
  [96, 344, 1],
])

/** A buckle: a paper frame with an ink rim round its dark opening. */
function Buckle({ at: [x, y] }: { at: Pt }) {
  return (
    <g>
      <rect
        x={x - 6.5}
        y={y - 5.5}
        width={13}
        height={11}
        rx={2.6}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <rect x={x - 3.2} y={y - 2.4} width={6.4} height={4.8} rx={1.2} fill={INK} />
    </g>
  )
}

type Marks = { hair: string; fringe: string; nape: string; plate: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(6101, CROPPED_PTS, [100, 70], 105, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  const edge = fringe([157, 56], [134, 64], 6, 8, 6102)
  const nape = napeShade(6103, 150, 118, 66, 120)
  // The morning light on the breastplate's polished front: rows of cuts
  // across it, fuller towards the light ahead of him, so the plate prints as
  // a lit, cut grey and stands clear of the solid black of his tunic.
  const r = rng(6104)
  let plate = ''
  for (let y = 250; y < 340; y += 4.2) {
    let x = 136 + between(r, 0, 6)
    while (x < 250) {
      const len = between(r, 8, 22)
      const L = clamp(0.25 + (x - 140) / 120)
      plate += gouge(
        x,
        y + between(r, -0.4, 0.4),
        x + len,
        y + between(r, -0.4, 0.4),
        0.35 + L * 1.25,
      )
      x += len + between(r, 2, 6)
    }
  }
  return { hair, fringe: edge, nape, plate }
})

/** Eros, head and shoulders, holding up Antony's breastplate, facing right in the 0..240 by 0..332 frame. */
export function ErosFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-er-head`
  const plateClip = `${uid}-er-plate`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={plateClip}>
          <path d={PLATE} />
        </clipPath>
      </defs>
      <Tunic seed={6105} />
      <g transform={BOW_T}>
        <path d={YOUTH_HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.5} />
          <path d={YOUTH_JAW} strokeWidth={1.5} />
        </g>
        <path
          d={CROPPED_HAIR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.hair} fill={PAPER} />
        <path d={m.fringe} fill={INK} />
        <EarCut {...YOUTH_EAR} />
        <YouthNoseAndMouth />
        <YouthEye look="down" brow={2.6} />
      </g>
      {/* Antony's breastplate, held up before him */}
      <path d={PLATE} fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round" />
      <path d={PLATE} fill={INK} stroke={PAPER} strokeWidth={2.2} strokeLinejoin="round" />
      <g clipPath={`url(#${plateClip})`}>
        <path d={m.plate} fill={PAPER} />
        <path d={PLATE_LINES} fill="none" stroke={INK} strokeWidth={4.2} strokeLinecap="round" />
        <path d={PLATE_LINES} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
      </g>
      <g fill={PAPER}>
        {PLATE_RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.8} />
        ))}
      </g>
      {/* the straps over the shoulders, and their buckles */}
      <g fill="none" strokeLinecap="round">
        <path d={STRAP_FAR + STRAP_NEAR} stroke={PAPER} strokeWidth={6.6} />
        <path d={STRAP_FAR + STRAP_NEAR} stroke={INK} strokeWidth={3.4} />
      </g>
      <Buckle at={BUCKLE_FAR} />
      {/* his near arm, bare below the sleeve, and his hand at the buckle */}
      <path d={FOREARM} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <SpecHand paths={HAND} />
      <Buckle at={BUCKLE_NEAR} />
    </g>
  )
}

/** A thick ink halo round head, shoulders and the breastplate. */
function ErosKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={TUNIC} />
      <path d={PLATE} />
      <g transform={BOW_T}>
        <path d={YOUTH_HEAD} />
        <path d={CROPPED_HAIR} />
      </g>
    </g>
  )
}

const P = placing(30, 2, 0.94)

const ground = once(() =>
  // Morning in the palace at Alexandria, the light ahead of him.
  portraitGround('ac-eros', 6110, (x, y) => clamp(0.12 + ((x - 50) / 270) * 0.84 - (y / PH) * 0.1)),
)

function ErosPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <ErosKnockout />
        <ErosFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const erosPortrait: LinocutArt = { width: PW, height: PH, Draw: ErosPortrait }

const ARMOUR_AT = P.to(214, 314)
const HAND_AT = P.to(138, 284)

export const eros: Portrait = {
  name: 'Eros',
  art: erosPortrait,
  alt: "A linocut portrait of Eros in profile, facing right, head and shoulders: a young, beardless man with his dark hair cropped short and combed forward, in a plain dark tunic, his head bent and his eyes cast down on his work. Before him he holds up Antony's breastplate, seen from the front, dark, with its rim and the curves of the chest cut in white and rivets along its shoulders; its straps hang from the shoulders, each with a pale buckle. His bare near arm comes up from below, and his hand, its fingers apart, holds the end of one strap at its buckle. Two numbered red markers point to the breastplate and his hand.",
  describedBy: [
    { phrase: 'Eros! Mine armour, Eros!', at: ARMOUR_AT },
    { phrase: 'Thou fumblest, Eros', at: [HAND_AT[0] - 56, HAND_AT[1]], to: HAND_AT },
  ],
  where: 'Act 4, Scene 4',
  note: 'Eros is the servant Antony freed, the one he calls for when he arms for battle, and he stays loyal to the end. Antony teases him for fumbling with the buckles while Cleopatra does the job better: a rare moment of happiness on the morning of a battle.',
  artNote:
    'The play does not describe him. He is drawn as the panels draw him, young and beardless with cropped hair, in a plain tunic; the breastplate is the plain armour the panels give every soldier.',
}
