import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'

import {
  Brooch,
  folds,
  MAN_EAR,
  MAN_HEAD,
  napeShade,
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
} from './common'

/**
 * The Duke of Cornwall, Regan's husband, as Gloucester warns Lear of him in
 * Act 2, Scene 4, when the Duke will not come out to the King:
 *
 *   "My dear lord, You know the fiery quality of the Duke; How unremovable
 *   and fix'd he is In his own course."
 *
 * Lear takes up the word at once: "Fiery? The fiery Duke". So: a hot temper
 * and a fixed will, in a hard face. The play gives nothing of his looks.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): he frowns,
 * his brow drawn down towards the nose, and he has a dark pointed beard with
 * the moustache, in ink, its strands and the line of the mouth cut in paper,
 * invented only to tell the two dukes apart; his dark hair is short. A duke's
 * tunic and a cloak, pinned at the shoulder. His head is every man's head
 * (MAN_HEAD), carried forward a little. Nothing in the portrait points to
 * what he does to Gloucester in Act 3, Scene 7, and there is no red in this
 * plate: the kit never flushes a bearded face, and "fiery" is left to the
 * words.
 *
 * MARKERS. "the fiery quality of the Duke" sits on his cheek, above the
 * beard, with no line. The eye's marker comes to it from in front of him at
 * its own height: no line crosses his face.
 *
 * Seeds: 8101 to 8104 (the figure's marks), 8110 (the ground).
 */

/** His head is carried forward a little. */
const ROT = 3

/** His short dark hair, close to the head from the brow to the nape, and in front of the ear. */
const HAIR = spline([
  [154, 56, 1],
  [148, 42],
  [130, 32],
  [104, 28],
  [78, 34],
  [56, 50],
  [43, 74],
  [38, 104],
  [40, 130],
  [46, 150],
  [56, 166, 1],
  [70, 160],
  [82, 150],
  [90, 134],
  [96, 116],
  [104, 104],
  [116, 100],
  [124, 112, 1],
  [127, 94],
  [132, 78],
  [142, 64],
])
/** The dark pointed beard, from the sideburn along the jaw to a point below the chin, with the moustache. */
const BEARD = spline([
  [124, 112, 1],
  [130, 132],
  [142, 140],
  [156, 141],
  [165.5, 136.6, 1],
  [173, 141],
  [176, 152],
  [177, 166],
  [176, 182],
  [174, 198],
  [170, 216, 1],
  [160, 206],
  [146, 194],
  [132, 182],
  [122, 166],
  [117, 148],
  [118, 128],
])

/** His shoulders in a tunic. */
const BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 260],
  [44, 236],
  [80, 226],
  [116, 230],
  [150, 226],
  [182, 238],
  [206, 264],
  [220, 298],
  [226, 336, 1],
])
/** The cloak over his far shoulder and down his back, pinned at the near shoulder. */
const CLOAK = spline([
  [-14, 336, 1],
  [-8, 294],
  [8, 258],
  [36, 236],
  [68, 226],
  [98, 228],
  [124, 242, 1],
  [106, 260],
  [86, 290],
  [70, 336, 1],
])

type Marks = { hair: string; beard: string; nape: string; tunic: string; cloak: string }

const marks = once((): Marks => {
  const r = rng(8101)
  // The short hair: short strokes cut in paper, lying back from the brow
  // over the crown and down to the nape.
  let hair = ''
  for (let i = 0, tries = 0; i < 46 && tries < 2000; tries++) {
    const x = between(r, 42, 150)
    const y = between(r, 34, 160)
    const ex = (x - 100) / 60
    const ey = (y - 100) / 70
    if (ex * ex + ey * ey > 0.85) continue
    if (x > 92 && y > 96) continue
    if (x > 130 && y > 66) continue
    const a = Math.atan2(y - 140, x - 140) + Math.PI / 2 + between(r, -0.2, 0.2)
    const L = between(r, 8, 14)
    hair += gouge(
      x,
      y,
      x - Math.cos(a) * L,
      y - Math.sin(a) * L,
      between(r, 0.6, 0.9),
      between(r, -1, 1),
    )
    i++
  }
  // The beard's strands, cut in paper, drawing down to its point, and the
  // moustache's line, and the line of the mouth between them.
  let beard = ''
  for (let i = 0; i < 9; i++) {
    const t = (i + 0.5) / 9
    const x0 = 122 + t * 48
    const y0 = 132 + Math.sin(t * Math.PI) * 10
    beard += gouge(x0, y0, 150 + t * 18, 196 + t * 14, between(r, 0.7, 1), -1.2 + t)
  }
  beard +=
    gouge(169, 139.6, 176.6, 150.6, 0.8, -0.6) +
    gouge(165.4, 141.6, 171, 152.6, 0.75, -0.4) +
    gouge(176.6, 155.6, 166.4, 156.6, 1, 0)
  const nape = napeShade(8104, 150, 116, 74, 118)
  const tunic = folds(8102, [132, 220], [274, 286], 3)
  const cloak = folds(8103, [-4, 76], [260, 274], 4)
  return { hair, beard, nape, tunic, cloak }
})

/** Cornwall, head and shoulders, facing right in the 0..240 by 0..336 frame. */
export function CornwallFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-cor-hair`
  const beardClip = `${uid}-cor-beard`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.tunic} fill={PAPER} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <Brooch x={116} y={242} rad={6.4} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        {/* the neck behind the beard, in shadow, and arcs of shade down its back */}
        <path d="M106 150L120 140L128 188L138 232L96 238Z" fill={INK} />
        <path d={m.nape} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        {/* the dark pointed beard and moustache, cut with paper strands */}
        <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={PAPER} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the nostril, and the fold from it, deep */}
          <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
          <path d="M165 124Q159 130 158.6 137" strokeWidth={1.2} />
          {/* "How unremovable and fix'd he is": the brow drawn down hard towards the nose */}
          <path d="M143 84Q153 84 165.6 92" strokeWidth={3} />
          <path d="M163.4 85.6L166 91.6M160.6 86.4L162.4 90.6" strokeWidth={1} />
          {/* the eye fixed ahead under it, the lower lid drawn up */}
          <path d="M146 98Q154 95.6 162.6 98.4" strokeWidth={2.4} />
          <path d="M147.6 103Q154.6 103.4 161 101" strokeWidth={1.3} />
          {/* the crease of the cheek */}
          <path d="M146 112Q141 118 140 126" strokeWidth={0.9} />
        </g>
        <circle cx={156} cy={100} r={2.6} fill={INK} />
      </g>
    </g>
  )
}

/** A thick ink halo round head, hair, beard and shoulders. */
function CornwallKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BODY} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
        <path d={BEARD} />
      </g>
    </g>
  )
}

const P = placing(50, 2, 1.0)

const ground = once(() =>
  // Gloucester's castle, the light ahead of him.
  portraitGround('lear-cornwall', 8110, (x, y) =>
    clamp(0.08 + ((x - 50) / 270) * 0.82 - (y / PH) * 0.12),
  ),
)

function CornwallPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <CornwallKnockout />
        <CornwallFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const cornwallPortrait: LinocutArt = { width: PW, height: PH, Draw: CornwallPortrait }

const CHEEK_AT = onTurnedHead(P, ROT, 138, 120)
const EYE_AT = onTurnedHead(P, ROT, 163, 99)

export const cornwall: Portrait = {
  name: 'Cornwall',
  art: cornwallPortrait,
  alt: 'A linocut portrait of the Duke of Cornwall in profile, facing right: a man with a hard face, his brow drawn down towards his nose in a frown, his eye fixed ahead under it, and a dark pointed beard and moustache. His dark hair is short. He wears a dark tunic and a cloak over his far shoulder, pinned with a ring brooch. Two numbered red markers point to his cheek and his eye.',
  describedBy: [
    { phrase: 'the fiery quality of the Duke', at: CHEEK_AT },
    {
      phrase: 'How unremovable and fix’d he is',
      at: [EYE_AT[0] + 50, EYE_AT[1] - 2],
      to: EYE_AT,
    },
  ],
  where: 'Act 2, Scene 4',
  passage:
    'My dear lord, You know the fiery quality of the Duke; How unremovable and fix’d he is In his own course.',
  note: 'Gloucester warns Lear of the Duke’s temper. Cornwall puts the King’s messenger in the stocks, and with Regan he is the cruellest power in the play.',
  artNote:
    'The play describes his temper and not his looks: he is drawn as the panels draw him, frowning, with a dark pointed beard. His “fiery quality” is left to the words, with no red on his face.',
}
