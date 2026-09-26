import { INK, PAPER } from '@/components/comics/linocut/palette'
import { deg, gouge, n, ribbon, type Pt } from '@/components/comics/linocut/carve'

/**
 * The three witches, drawn once and shared by The witches meet (1.1) and The
 * prophecies (1.3), so the same three appear in both.
 *
 * The play describes them only through Banquo, in Act 1, Scene 3:
 *
 *   "What are these, / So wither’d, and so wild in their attire, / That look
 *   not like the inhabitants o’ th’ earth, / And yet are on’t?" ... "each at
 *   once her choppy finger laying / Upon her skinny lips. You should be women,
 *   / And yet your beards forbid me to interpret / That you are so."
 *
 * So: thin, bent figures ("withered"), in shawls and cloaks torn into tatters
 * ("wild in their attire"), with bony, chapped fingers ("choppy"), thin lips,
 * lined faces and straggling beards. Nothing else is invented: no pointed
 * hats, no cauldron (that is Act 4), no warts or hooked noses, and nothing
 * from a film or stage production.
 *
 * Each figure faces right in its own frame, about 160 by 232 with the hem on
 * y = 230, and is placed (and mirrored, to face left) with a transform. The
 * cloak is a black shape with a paper halo, so it reads against a lit sky;
 * the face is lit, a paper profile with its lines cut in ink, framed by the
 * black lip of the shawl. The head is drawn large for the body, because a
 * bent back pushes it forward and because it has to read at phone width.
 */

/**
 * The shawl and cloak: the hooded head pushed forward of a hunched back, the
 * body falling away beneath it to an uneven hem, and the back edge of the
 * shawl torn into tatters.
 */
const BODY =
  'M58 84C62 70 68 60 76 52C84 44 96 40 108 42C118 44 124 50 126 58L118 62L112 106L118 130C110 138 104 146 102 158C100 180 102 204 106 230L98 226L90 232L82 226L74 232L66 226L58 232L50 226L42 231L36 226C36 200 38 170 42 146L36 142L43 136L38 128L46 123L42 114L50 111L47 102L54 100Z'

/**
 * The head, drawn at the size of the first sketch and enlarged by HEAD_AT:
 * the lit face, the lip of the shawl over the back of it, the hair escaping
 * the shawl and the beard.
 */
const HEAD_AT = 'translate(104 58) scale(1.2) translate(-104 -58)'

/** The face in profile: a jutting brow, a long plain nose, thin lips, a sharp chin. */
const FACE =
  'M106 60C112 58 117 61 118.5 66L121 71.5L118 73.4C121.5 77 126 81.5 128 85.5L121.4 86.6L121 89L117.8 90L120.2 91.8C120.6 95 119.4 97.6 117 99.4L104 102C102 88 102 72 106 60Z'

/** The lip of the shawl, drawn over the back of the face. */
const HOOD_LIP =
  'M104 54C112 56 117 60 116 64L109 64C105 76 104 90 107 104L99 106C97 88 98 70 104 54Z'

/** Ink cut into the face: the brow, the eye, and the lines of a withered face. */
const FACE_CUTS = gouge(110.5, 69.4, 119, 71.8, 1.4) + gouge(113, 75.2, 117.6, 75.6, 1.1)
const FACE_LINES =
  'M112.6 73.6Q115.4 72.4 118 73.8M120 81C117.8 84.6 116.8 88 117.2 91.6M118.4 90L114.6 90.6M111.4 74L109 72.6M111.4 76.6L109 77.2M110 80Q108.4 84 109.4 88M108 64L112.6 64.8'

/** "your beards forbid me to interpret / That you are so": straggling strands. */
const BEARD = [
  [
    [116, 96],
    [117.5, 105],
    [116, 113],
    [118, 123],
  ],
  [
    [112.5, 98],
    [112, 107],
    [113.5, 115],
    [112, 125],
  ],
  [
    [108.5, 99],
    [107.5, 108],
    [108.5, 117],
  ],
  [
    [118.5, 94],
    [122, 101],
    [122.5, 110],
  ],
].map((pts) => ribbon(pts as Pt[], 2.5, 0.5, false))

/** Grey hair escaping the shawl over the brow and cheek. */
const HAIR = [
  [
    [105, 57],
    [108, 65],
    [107, 76],
  ],
  [
    [104, 64],
    [105.4, 78],
    [104.2, 90],
  ],
].map((pts) => ribbon(pts as Pt[], 2.2, 0.5, false))

export type WitchPose = 'reach' | 'arms' | 'staff' | 'hush' | 'point'

/**
 * Each arm: the upper arm (in the sleeve), the bare forearm, and the angle the
 * hand points. `sleeve` is the ragged cloth hanging from the upper arm.
 */
type Arm = { upper: Pt[]; fore: Pt[]; hand: number; sleeve: string; fist?: boolean }

const ARMS: Record<WitchPose, Arm[]> = {
  reach: [
    {
      upper: [
        [100, 134],
        [114, 122],
        [124, 110],
      ],
      fore: [
        [124, 110],
        [130, 92],
        [134, 74],
      ],
      hand: -72,
      sleeve:
        'M96 128L126 106L128 116L123 126L119 120L115 136L109 126L104 142L99 130L94 140L92 130Z',
    },
  ],
  arms: [
    {
      upper: [
        [104, 130],
        [112, 110],
        [116, 90],
      ],
      fore: [
        [116, 90],
        [118, 68],
        [119, 46],
      ],
      hand: -86,
      sleeve: 'M100 128L112 88L122 90L120 106L117 102L116 120L112 112L110 130L106 120L102 134Z',
    },
    {
      upper: [
        [66, 96],
        [60, 76],
        [58, 58],
      ],
      fore: [
        [58, 58],
        [57, 38],
        [57, 18],
      ],
      hand: -94,
      sleeve: 'M72 98L62 56L52 58L52 74L56 70L58 88L62 80L64 100L68 90L72 104Z',
    },
  ],
  staff: [
    {
      upper: [
        [102, 136],
        [114, 146],
        [126, 148],
      ],
      fore: [
        [126, 148],
        [134, 142],
        [140, 136],
      ],
      hand: -8,
      fist: true,
      sleeve: 'M98 130L128 142L127 154L121 150L119 164L113 154L109 168L104 154L98 162L96 146Z',
    },
  ],
  hush: [
    {
      upper: [
        [102, 138],
        [118, 150],
        [132, 146],
      ],
      fore: [
        [132, 146],
        [133, 126],
        [129, 106],
      ],
      hand: -116,
      sleeve: 'M98 132L128 142L130 154L123 152L121 166L114 156L110 170L104 158L98 166L94 148Z',
    },
  ],
  point: [
    {
      upper: [
        [102, 132],
        [118, 128],
        [132, 122],
      ],
      fore: [
        [132, 122],
        [144, 116],
        [154, 110],
      ],
      hand: -24,
      sleeve:
        'M96 126L134 116L135 126L129 134L125 128L121 144L116 132L111 146L106 134L100 144L96 134Z',
    },
  ],
}

const line = (pts: Pt[]) => 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')

/**
 * "choppy" fingers: four long jointed fingers and a thumb, splayed round
 * `ang` from the wrist at (x, y), as one path for stroking. With `one`, the
 * forefinger alone is straight and the rest are curled: a pointing hand, or a
 * finger laid on the lips.
 */
function fingers(x: number, y: number, ang: number, one = false, len = 14) {
  let d = ''
  const spread = one ? [-4, 30, 44, 58] : [-26, -9, 7, 22]
  for (let i = 0; i < 4; i++) {
    const a = deg(ang + spread[i])
    const curl = one && i > 0
    const k = deg(ang + spread[i] + (curl ? 110 : i % 2 ? 12 : -12))
    const L = len * (curl ? 0.42 : i === 1 || i === 2 || one ? 1 : 0.84)
    const x1 = x + Math.cos(a) * 3.5
    const y1 = y + Math.sin(a) * 3.5
    const x2 = x1 + Math.cos(a) * L * 0.55
    const y2 = y1 + Math.sin(a) * L * 0.55
    const x3 = x2 + Math.cos(k) * L * 0.45
    const y3 = y2 + Math.sin(k) * L * 0.45
    d += `M${n(x1)} ${n(y1)}L${n(x2)} ${n(y2)}L${n(x3)} ${n(y3)}`
  }
  const t = deg(ang - 62)
  d += `M${n(x)} ${n(y)}L${n(x + Math.cos(t) * len * 0.55)} ${n(y + Math.sin(t) * len * 0.55)}`
  return d
}

/** A gnarled staff, for the third witch. */
const STAFF = ribbon(
  [
    [142, 92],
    [144, 150],
    [141, 196],
    [145, 236],
  ],
  6.4,
  0.2,
  false,
)

/** The folds of the cloak, cut in the ink; they stop above the fog. */
const FOLDS =
  gouge(52, 150, 48, 212, 1, -0.8) +
  gouge(72, 150, 70, 216, 1.1, -0.6) +
  gouge(90, 162, 94, 214, 0.9, 0.5)

/**
 * One witch, facing right. `pose` sets the arms: reaching up to the storm,
 * both arms raised, leaning on a staff, a finger on the lips, or pointing.
 */
export function Witch({ pose }: { pose: WitchPose }) {
  const arms = ARMS[pose]
  const hands = arms
    .map((a) => {
      const [x, y] = a.fore[a.fore.length - 1]
      return a.fist ? '' : fingers(x, y, a.hand, pose === 'hush' || pose === 'point')
    })
    .join('')
  const inkShapes = [BODY, ...arms.map((a) => a.sleeve)]
  const staff = pose === 'staff'
  // A hand laid on the lips is drawn over the face; every other hand is
  // drawn with the body, under it.
  const overFace = pose === 'hush'
  const foreHalo = (
    <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
      {arms.map((a) => (
        <path
          key={line(a.fore)}
          d={overFace ? line(a.fore) : line(a.upper) + line(a.fore)}
          strokeWidth={9.4}
        />
      ))}
      <path d={hands} strokeWidth={5.8} />
    </g>
  )
  const foreInk = (
    <>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {arms.map((a) => (
          <path key={line(a.fore)} d={line(a.fore)} strokeWidth={5.4} />
        ))}
        <path d={hands} strokeWidth={2.4} />
      </g>
      {arms.map((a) => {
        const [x, y] = a.fore[a.fore.length - 1]
        return <circle key={`${x}-${y}`} cx={x} cy={y} r={a.fist ? 5.6 : 3.8} fill={INK} />
      })}
    </>
  )
  return (
    <g>
      {/* the paper halo round the whole figure */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        {inkShapes.map((d) => (
          <path key={d} d={d} />
        ))}
        {staff && <path d={STAFF} />}
      </g>
      <path d={BEARD.join('')} transform={HEAD_AT} fill={PAPER} stroke={PAPER} strokeWidth={5} />
      {!overFace && foreHalo}
      {/* the figure in ink */}
      <g fill={INK}>
        {staff && <path d={STAFF} />}
        {inkShapes.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={BEARD.join('')} transform={HEAD_AT} fill={INK} stroke={INK} strokeWidth={2.4} />
      <path d={FOLDS} fill={PAPER} />
      {!overFace && foreInk}
      {staff && (
        <path
          d="M136 130Q143 128 146 132M136 135Q143 133 146 137M136 140Q143 138 146 142"
          stroke={PAPER}
          strokeWidth={0.9}
          fill="none"
        />
      )}
      {/* the lit face, its lines cut in ink, the shawl's lip over it */}
      <g transform={HEAD_AT}>
        <path d={FACE} fill={PAPER} />
        <path d={FACE_CUTS} fill={INK} />
        <path d={FACE_LINES} fill="none" stroke={INK} strokeWidth={0.85} strokeLinecap="round" />
        <g fill={PAPER}>
          {HAIR.map((d) => (
            <path key={d} d={d} />
          ))}
          {BEARD.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d={HOOD_LIP} fill={INK} />
        <path d={gouge(104, 56, 102, 104, 0.8, -1.6)} fill={PAPER} />
      </g>
      {overFace && foreHalo}
      {overFace && foreInk}
    </g>
  )
}
