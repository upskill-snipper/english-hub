import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, n, rng } from '@/components/comics/linocut/carve'

import {
  combedFromCrown,
  ear,
  EarCut,
  FACE,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Toga,
  togaShapes,
  type SP,
} from './common'

/**
 * Cassius, as Caesar sees him at the feast of Lupercal (Act 1, Scene 2):
 *
 *   "Let me have men about me that are fat, Sleek-headed men, and such as
 *   sleep a-nights: Yond Cassius has a lean and hungry look; He thinks too
 *   much: such men are dangerous."
 *
 * and in his next speech, "Would he were fatter!", "that spare Cassius. He
 * reads much, He is a great observer, and he looks Quite through the deeds of
 * men", "Seldom he smiles". So: a long, narrow head, long in the jaw, the
 * cheek fallen in under a hard cheekbone, the temple hollow, a hard straight
 * brow over a deep-set eye that watches, lines across the forehead, a thin
 * mouth that does not smile, and a thin neck corded at the throat.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx: HEAD_CASSIUS,
 * CASSIUS_CUTS, RECEDING_HAIR, `slim`): narrow at the back of the head and
 * long in the jaw, his dark hair cropped and receding from the temple, his
 * neck and shoulders thin, in the toga of a Roman of rank, which the play
 * does not describe. He never smiles in a panel, and does not here.
 *
 * He faces left, towards Brutus, whom he is working on in this scene, so the
 * figure is drawn facing right and flipped. There is no red in this plate.
 *
 * Seeds: 3101 to 3103 (the figure's marks), 3106 (the toga), 3110 (the ground).
 */

/** The outline from the nape over the crown to the top of the brow. */
const SKULL: SP[] = [
  [78, 240],
  [71, 210],
  [61, 180],
  [55, 146],
  [55, 110],
  [64, 77],
  [85, 52],
  [113, 40],
  [140, 41],
]
/** The long, narrow head, facing right in the 0..240 by 0..332 frame. */
const HEAD = spline([
  ...SKULL,
  [157, 53],
  [164, 70],
  [168.5, 86],
  [163, 97, 1],
  [171, 112],
  [180, 128],
  [181.5, 134],
  [176.5, 138.5],
  [168, 140, 1],
  [170, 144.5],
  [171, 148.5],
  [168, 151.5, 1],
  [170, 155.5],
  [167, 159.5, 1],
  [171.5, 173],
  [171, 188],
  [163.5, 194],
  [152, 196],
  [142, 200],
  [136, 208],
  [138.5, 216],
  [134, 225],
  [133, 240],
])
/**
 * Dark hair cropped close and receding from the temple: the hairline set
 * back from the top of the brow, down in front of the ear, round behind it to
 * the nape, and back over the crown along the skull.
 */
const HAIR_PTS: SP[] = [
  [136, 41, 1],
  [127, 50],
  [121, 64],
  [119, 82],
  [120, 96],
  [118, 108, 1],
  [110, 107],
  [101, 116],
  [94, 138],
  [88, 156],
  [80, 170],
  [70, 176, 1],
  [61, 162],
  [56, 142],
  [55, 110],
  [64, 77],
  [85, 52],
  [113, 40],
]
const HAIR = spline(HAIR_PTS)
const EAR = ear(109, 127, 0.96)

type Marks = {
  hair: string
  nape: string
  hollow: string
  socket: string
  temple: string
}

const marks = once((): Marks => {
  // Dark hair: a few fine paper strokes combed forward from the crown,
  // fewer at the nape where the light does not reach.
  const hair = combedFromCrown(3101, HAIR_PTS, [92, 68], 120, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.25 + (x - 60) / 110),
  )
  const nape = napeShade(3102, 150, 122, 70, 124)

  // "a lean and hungry look": the cheek fallen in under the bone, cut as
  // shallow bowls of fine line, as the pilot cuts Scrooge's shrivelled cheek.
  const r = rng(3103)
  let hollow = ''
  for (let rad = 11; rad < 33; rad += 3.1)
    hollow += arcDashes(r, 139 + between(r, -1, 1), 113, rad, deg(56), deg(146), [9, 26], [1.5, 4])
  // The eye deep in its socket: a few arcs of shadow behind it.
  let socket = ''
  for (let rad = 9; rad < 15; rad += 2.6)
    socket += arcDashes(r, 155, 103, rad, deg(176), deg(262), [6, 14], [1.2, 2.6])
  // The temple, fallen in behind the eye.
  let temple = ''
  for (let i = 0; i < 4; i++)
    temple += `M${n(127 + i * 3.2)} ${n(80 + i)}Q${n(123 + i * 3.4)} 92 ${n(129 + i * 3.2)} ${n(104 - i)}`
  return { hair, nape, hollow, socket, temple }
})

/** Cassius, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function CassiusFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-cs-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
        <path d={m.hollow} strokeWidth={1} />
        <path d={m.socket} strokeWidth={0.95} />
        <path d={m.temple} strokeWidth={LINE.hairline} />
        {/* the hard cheekbone, and the cords of the thin neck */}
        <path d="M121 116Q136 109 151 114" strokeWidth={1.5} />
        <path
          d="M124 172C127 190 132 204 136 220M113 180C115 196 118 210 121 228"
          strokeWidth={1.1}
        />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <EarCut {...EAR} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* "He thinks too much": lines across the forehead */}
        <path
          d="M140 56Q149 53.5 158 57M139 65Q149 62.5 161 66M141 73.5Q150 72 161 75"
          strokeWidth={1.15}
        />
        {/* the hard, straight brow */}
        <path d="M141 87.5L167 89.5" strokeWidth={FACE.brow + 0.8} />
        {/* the deep-set, watching eye under a heavy lid */}
        <path d="M146.5 100.5Q154.5 97.5 163 101" strokeWidth={FACE.lid + 0.4} />
        <path d="M148 106Q154.5 107.8 161.5 104.6" strokeWidth={FACE.lower} />
        {/* nostril, the deep fold to the mouth, the thin unsmiling mouth */}
        <path d="M176.5 130.5C172.5 127.5 172.5 122.5 178 121.5" strokeWidth={FACE.nostril} />
        <path d="M168.5 124Q158 136 161 153" strokeWidth={1.3} />
        <path d="M169.5 151.6L161.5 152.6" strokeWidth={FACE.lips} />
        <path d="M162 152.4Q159.6 154.4 159.4 157.6" strokeWidth={FACE.crease} />
        <path d="M168.6 166Q163.6 168 164.6 173" strokeWidth={LINE.hairline} />
        {/* the long jaw, hard and close under the skin */}
        <path d="M166 192C151 197 134 191 124 175C119 167 116 157 114 149" strokeWidth={1.7} />
      </g>
      <circle cx={156} cy={103} r={2.4} fill={INK} />
      <Toga seed={3106} slim={0.88} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function CassiusKnockout() {
  const t = togaShapes(3106, 0.88)
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HEAD} />
      <path d={HAIR} />
      <path d={t.body} />
    </g>
  )
}

const P = placing(26, 2, 0.98, true)

const ground = once(() =>
  // Daylight at the Lupercal, ahead of him, to the left.
  portraitGround('jc-cassius', 3110, (x, y) =>
    clamp(0.1 + ((PW - x - 50) / 270) * 0.85 - (y / PH) * 0.12),
  ),
)

function CassiusPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <CassiusKnockout />
        <CassiusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const cassiusPortrait: LinocutArt = { width: PW, height: PH, Draw: CassiusPortrait }

const CHEEK_AT = P.to(138, 132)
const BROW_AT = P.to(150, 64)
const EYE_AT = P.to(157, 103)

export const cassius: Portrait = {
  name: 'Cassius',
  art: cassiusPortrait,
  alt: 'A linocut portrait of Cassius in profile, facing left: a lean man with a long, narrow head and a long jaw, his dark hair cropped close and receding from the temple, his cheek fallen in under a hard cheekbone, a hard straight brow over a deep-set, watching eye, three lines across his forehead, a thin mouth that does not smile and a thin, corded neck. He wears a dark toga drawn over one shoulder. Three numbered red markers point to his hollow cheek, his lined forehead and his eye.',
  describedBy: [
    // The cheek marker sits on the hollow cheek with no line, as the pilot's
    // "shrivelled his cheek" marker sits on Scrooge's; the brow marker comes
    // from in front of the forehead, as his eye marker does. (Checked 2 October
    // 2026: the cheek line first ran up his jaw from below and the brow line
    // down across his forehead from the crown, two red strokes on his skin
    // that read as cuts.)
    { phrase: 'a lean and hungry look', at: CHEEK_AT },
    { phrase: 'He thinks too much', at: [BROW_AT[0] - 40, BROW_AT[1] - 18], to: BROW_AT },
    { phrase: 'such men are dangerous', at: [EYE_AT[0] - 70, EYE_AT[1] - 8], to: EYE_AT },
  ],
  where: 'Act 1, Scene 2',
  passage:
    'Let me have men about me that are fat, Sleek-headed men, and such as sleep a-nights: Yond Cassius has a lean and hungry look; He thinks too much: such men are dangerous.',
  note: 'Caesar reads Cassius at a glance, and reads him rightly: the thin face is the outward sign of a mind that will not rest. Antony laughs the warning off.',
  artNote:
    'The play gives his face and nothing of his dress, so he wears the toga of a Roman of rank, as he does in the panels.',
}
