import { PAPER } from '@/components/comics/linocut/palette'
import { gouge, n } from '@/components/comics/linocut/carve'

import { prayingHands } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { CutFigure, Person, type ArmPose, type P, type Part } from './people'

/**
 * CLAUDIUS ON HIS KNEES, for "The King at prayer" (Act 3, Scene 3): "Help,
 * angels! Make assay: / Bow, stubborn knees ... [Retires and kneels.]" The
 * kit's `Person` stands; this kneels him.
 *
 * NOT A NEW OUTLINE. Everything above the girdle is the kit's own Claudius
 * (./people.tsx): the same head, beard, crown, fur collar and gown, clipped
 * just below the girdle and set down to the height of a kneeling man's waist,
 * as the Othello kit's KneelingMan sets down its men
 * (src/data/comics/othello/panels/kneel.tsx). Below that this adds only what
 * the pose needs, cut as the kit cuts (a paper halo, the shape in ink, the
 * folds in paper): the skirt of the King's gown over his thighs to the knee
 * on the flags, trailing behind him over his shins, and the soles of his
 * shoes turned up at its hem.
 *
 * WHAT MAKES THE POSE READ (the Julius Caesar and Othello kits found it): a
 * knee forward on the ground and the soles of the feet turned up behind. A
 * gown that simply reaches the floor reads as a short man standing, so the
 * skirt here swells over the knee in front, lies low and long behind, and
 * shows the soles at its end.
 *
 * `at` is the point on the floor under his waist, facing right (or left with
 * `flip`). `uid` makes the clip's id unique.
 */

/** How far a standing gowned man's girdle (hip -90 in the kit) is set down when he kneels. */
const DROP = 38
/** Where the standing figure is cut: just below the girdle, in its own frame. */
const CUT = -84

/**
 * The kneeling skirt, in the kneeling frame: the girdle at about (0, -52),
 * the thigh running forward to the knee at about (26, -6), the gown falling
 * from the knee to the flags and lying back over the shins behind.
 */
const SKIRT =
  'M-14.6 -50C-17 -38 -20 -28 -26 -20C-32 -13 -42 -9 -54 -6.6L-56 0.6L36 0.6C37.6 -3 37 -8 33 -11.6C28 -16 22 -18 17.4 -22C16 -32 15.4 -42 15 -50Z'
const SKIRT_CUTS =
  gouge(-4, -42, -34, -8, 1.8, 1.6) +
  gouge(6, -44, 8, -16, 1.6, -0.6) +
  gouge(14, -18, 33, -6, 1.5, -1) +
  gouge(-48, -2.6, 30, -2.6, 0.9, 0.2)
/** The soles of both shoes, turned up behind the hem, the far one a little higher. */
const SOLES: Part[] = [
  { d: 'M-52 -2.6L-68 -1.4C-71 -6 -70.4 -12.4 -66.6 -15.4L-53.4 -10Z' },
  { d: 'M-48 -8.6L-62.6 -9.4C-65 -14 -63.8 -19.6 -60.4 -22L-50 -14.4Z' },
]
/** The heel and the tread of each sole, cut in paper so they read as soles. */
const SOLE_CUTS =
  gouge(-67.6, -3.4, -68.2, -12.6, 0.8, 0.3) +
  gouge(-62, -11.4, -62.2, -19.4, 0.75, 0.3) +
  gouge(-60, -2.4, -57, -11.4, 0.6)

/**
 * Praying: the forearms raised before the chest to the wrists, and there the
 * two hands pressed together palm to palm, the fingers up: the Romeo and
 * Juliet kit's prayingHands, the one pair of praying hands on the site.
 */
const WRISTS: P = [22, -121]
const PRAYING: { far: ArmPose; near: ArmPose } = {
  far: {
    pts: [
      [-3, -132],
      [10, -108],
      [21, -120],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [5, -132],
      [15, -106],
      [23, -121],
    ],
    hand: 'none',
  },
}
const HANDS = prayingHands(WRISTS, -78, 1.05)

export function KneelingKing({
  uid,
  at,
  scale = 1,
  flip = false,
  headRot = 16,
  crownRed = true,
  arms = PRAYING,
}: {
  uid: string
  at: P
  scale?: number
  flip?: boolean
  headRot?: number
  crownRed?: boolean
  arms?: { far: ArmPose; near: ArmPose }
}) {
  const clip = `${uid}-kneel-king`
  // The kit's size for Claudius (SIZE in ./people.tsx), so the skirt matches the body.
  const s = scale * 1.02
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`}>
      <defs>
        <clipPath id={clip}>
          <rect x={-200} y={-400} width={400} height={400 + CUT} />
        </clipPath>
      </defs>
      <CutFigure parts={[{ d: SKIRT }, ...SOLES]} cuts={SKIRT_CUTS + SOLE_CUTS} />
      <g transform={`translate(0 ${DROP})`}>
        <g clipPath={`url(#${clip})`}>
          <Person
            pose={{
              look: 'claudius',
              head: { rot: headRot },
              eye: 'shut',
              crownRed,
              far: arms.far,
              near: arms.near,
            }}
            at={[0, 0]}
            scale={1 / 1.02}
          >
            {arms === PRAYING && (
              <>
                <CutFigure parts={[HANDS.part]} halo={1.5} />
                <path d={HANDS.cut} transform={HANDS.t} fill={PAPER} />
              </>
            )}
          </Person>
        </g>
      </g>
      {/* the girdle again, where the clip cuts the gown, so the join reads as a belt */}
      <path d={gouge(-14, -52.6, 15, -52, 1.5)} fill={PAPER} />
    </g>
  )
}
