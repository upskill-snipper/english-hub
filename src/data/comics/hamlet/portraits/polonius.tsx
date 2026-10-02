import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import { POLONIUS_CAP } from '../panels/people'
import {
  ageLines,
  carry,
  folds,
  locks,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  neckShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
} from './common'

/**
 * Polonius, the King's old counsellor, Ophelia's and Laertes's father, from
 * Act 2, Scene 2, where Hamlet, pretending to read, describes him to his face,
 * and where Polonius plans the trick he will play twice:
 *
 *   HAMLET: "Slanders, sir. For the satirical slave says here that old men
 *   have grey beards; that their faces are wrinkled; their eyes purging thick
 *   amber and plum-tree gum; and that they have a plentiful lack of wit,
 *   together with most weak hams."
 *   POLONIUS, to the King: "At such a time I'll loose my daughter to him. Be
 *   you and I behind an arras then, Mark the encounter."
 *
 * So: an old man with a grey beard and a lined face, his eye bright and
 * watchful, beside the arras, the hanging tapestry of a room in the castle,
 * that he means to hide behind and listen. He stands in front of it, alive
 * and attentive; he is never drawn behind it, where he dies in Act 3, Scene
 * 4, and nothing in the picture touches that.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every man's
 * head (MAN_HEAD), old, with the lines of age; a full white beard and the
 * white hair at the nape (the Romeo and Juliet kit's FULL_BEARD and OLD_HAIR,
 * which the kit gives him, carried to this size); a white brow; the flat
 * black bonnet worn level (the kit's POLONIUS_CAP at this size), its band cut
 * in paper; a counsellor's long dark gown with a falling collar. "grey" in a
 * print of one ink is paper with ink strands through it. There is no red in
 * this plate.
 *
 * The arras is cut as the room's ground behind him: the tapestry's folds
 * falling from a rod, and the border woven along its edge, cut in paper.
 *
 * Seeds: 7601 to 7606 (the figure's marks), 7610 and 7611 (the ground and
 * the arras).
 */

/** The flat black bonnet worn level: the kit's POLONIUS_CAP at this size. */
const BONNET = carry(POLONIUS_CAP)
/**
 * "old men have grey beards": the full white beard, long, to a point below
 * the chin, with the moustache over the lip. The kit's FULL_BEARD, carried to
 * this size point for point, left a notch beside the mouth that read as a
 * hole in the face; so it is cut here as one long beard from below the ear,
 * and the moustache is its own shape.
 */
const BEARD = spline([
  [101, 140, 1],
  [102, 156],
  [108, 176],
  [118, 204],
  [128, 230],
  [138, 252, 1],
  [150, 244],
  [160, 226],
  [168, 204],
  [173, 184],
  [174, 168],
  [170, 158, 1],
  [160, 160],
  [150, 158],
  [140, 150],
  [128, 142],
  [114, 140],
])
const MOUSTACHE = spline([
  [169, 136, 1],
  [174, 141],
  [172.6, 147],
  [166, 150],
  [156, 153],
  [146, 152, 1],
  [155, 145],
  [163, 139],
])
/** The white hair at the nape, under the bonnet, its ends uneven. */
const NAPE = spline([
  [42, 82, 1],
  [38, 110],
  [40, 140],
  [46, 168],
  [54, 194, 1],
  [61, 184, 1],
  [67, 199, 1],
  [73, 186, 1],
  [80, 196, 1],
  [84, 174],
  [84, 146],
  [86, 120],
  [92, 100],
  [100, 84, 1],
  [80, 77],
  [60, 78],
])

/** His shoulders in the long gown, a little stooped. */
const BODY = spline([
  [-14, 336, 1],
  [-8, 290],
  [8, 254],
  [38, 230],
  [72, 220],
  [104, 226],
  [134, 230],
  [156, 230],
  [184, 244],
  [206, 270],
  [220, 304],
  [226, 336, 1],
])
/** The falling collar of the gown, over the shoulders. */
const COLLAR = spline([
  [16, 254, 1],
  [44, 232],
  [76, 222],
  [104, 228],
  [124, 232, 1],
  [118, 252],
  [94, 248],
  [66, 252],
  [38, 266, 1],
])

type Marks = {
  beard: string
  moustache: string
  nape: string
  brows: string
  age: string
  neck: string
  body: string
  band: string
}

const marks = once((): Marks => {
  const r = rng(7601)
  // Ink strands through the white beard, falling to its point.
  const beard = locks(
    7602,
    16,
    (t) => [100 + t * 68, 134 + t * 28],
    (t) => [120 + t * 32, 234 + t * 14],
    [0.6, 1],
    3,
    1,
  )
  const moustache = locks(
    7607,
    4,
    (t) => [168 + t * 4, 139 + t * 6],
    (t) => [150 + t * 10, 151 + t * 1],
    [0.5, 0.8],
    1,
  )
  const nape = locks(
    7603,
    8,
    (t) => [46 + t * 44, 84 + t * 2],
    (t) => [52 + t * 26, 188 + t * 6],
    [0.6, 0.9],
    -3,
  )
  // A white brow: short strokes of fine ink, no solid bar.
  let brows = ''
  for (let i = 0; i < 12; i++) {
    const x = 143 + i * 1.9 + between(r, -0.5, 0.5)
    const y = 89 + between(r, -0.6, 0.6) - Math.sin((i / 11) * Math.PI) * 1.8
    brows += `M${n(x)} ${n(y)}l${n(between(r, 2.4, 4))} ${n(between(r, -2.6, -0.6))}`
  }
  const age = ageLines(7604, 2)
  const neck = neckShade(7605)
  const body = folds(7606, [20, 210], [262, 290], 8)
  const band = gouge(34, 73, 171, 57.4, 2.4, -1.2)
  return { beard, moustache, nape, brows, age, neck, body, band }
})

/** Polonius, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function PoloniusFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-pol`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-beard`}>
          <path d={BEARD} />
        </clipPath>
        <clipPath id={`${id}-nape`}>
          <path d={NAPE} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={1.3} />
        <path d={m.age} strokeWidth={LINE.hairline} />
      </g>
      {/* the white hair at the nape */}
      <path d={NAPE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-nape)`}>
        <path d={m.nape} fill={INK} />
      </g>
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
        <path d={m.brows} strokeWidth={1.1} />
      </g>
      {/* his eye bright and watchful under the white brow */}
      <ManEye look="open" />

      {/* "old men have grey beards": white, with ink strands */}
      <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-beard)`}>
        <path d={m.beard} fill={INK} />
      </g>
      <path d={MOUSTACHE} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={m.moustache} fill={INK} />

      {/* the flat black bonnet worn level, its band cut in paper */}
      <path d={BONNET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.band} fill={PAPER} />

      {/* the gown's falling collar */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d="M40 256Q76 236 116 240" fill="none" stroke={PAPER} strokeWidth={1} />
    </g>
  )
}

/** A thick ink halo round head, bonnet, beard and shoulders. */
function PoloniusKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={NAPE} />
      <path d={BONNET} />
      <path d={BEARD} />
      <path d={BODY} />
    </g>
  )
}

const P = placing(84, 22, 0.86)

/** The arras: where its edge falls, behind him, and the rod it hangs from. */
const ARRAS_EDGE = 128
const ROD_Y = 20

/** The room's ground, lit ahead of him; the arras behind him is cut on its own. */
const cuts = once(() => {
  const ground = portraitGround('hamlet-polonius', 7610, (x, y) =>
    x < ARRAS_EDGE ? 0 : clamp(0.12 + ((x - ARRAS_EDGE) / 220) * 0.8 - (y / PH) * 0.1),
  )
  const r = rng(7611)
  // The tapestry's folds, falling from the rod in long soft curves, cut in
  // paper: the light on the round of each fold, the shadow between left in
  // ink. Each hangs from a ring on the rod.
  let folds = ''
  const rings: Pt[] = []
  for (let i = 0; i < 7; i++) {
    const x = 20 + i * 15.6 + between(r, -1.5, 1.5)
    rings.push([x, ROD_Y])
    const pts: Pt[] = []
    for (let k = 0; k <= 16; k++) {
      const u = k / 16
      pts.push([x + Math.sin(u * Math.PI * 1.6 + i * 0.9) * 3.2, ROD_Y + 6 + u * (PH - ROD_Y - 16)])
    }
    folds += ribbon(pts, between(r, 3, 4.4), 0.6)
  }
  // Two woven bands across it, near the top and near the foot: a pair of
  // rules with a zigzag between, so the hanging reads as woven cloth.
  let bands = ''
  for (const y of [58, 262]) {
    bands += `M14 ${y}L${ARRAS_EDGE - 16} ${y}M14 ${y + 12}L${ARRAS_EDGE - 16} ${y + 12}`
    let z = `M14 ${y + 6}`
    for (let x = 14, k = 0; x < ARRAS_EDGE - 18; x += 6, k++)
      z += `L${x + 6} ${k % 2 ? y + 9 : y + 3}`
    bands += z
  }
  // The woven border along its edge: a band with lozenges in it.
  let lozenges = ''
  for (let y = ROD_Y + 16; y < PH - 14; y += 16)
    lozenges += `M${ARRAS_EDGE - 9} ${n(y)}l5 -6l5 6l-5 6Z`
  return { ground, folds, rings, bands, lozenges }
})

function PoloniusPortrait({ uid }: ArtProps) {
  const c = cuts()
  return (
    <>
      <path d={c.ground} fill={PAPER} />
      {/* "Be you and I behind an arras then": the tapestry, behind him */}
      <path d={c.folds} fill={PAPER} />
      <path d={c.bands} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
      <rect
        x={ARRAS_EDGE - 14}
        y={ROD_Y + 4}
        width={10}
        height={PH - ROD_Y - 14}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={c.lozenges} fill={INK} />
      <path
        d={`M${ARRAS_EDGE - 2} ${ROD_Y + 2}L${ARRAS_EDGE - 2} ${PH - 10}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <rect
        x={10}
        y={ROD_Y - 4}
        width={ARRAS_EDGE - 6}
        height={8}
        rx={4}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <g fill="none" stroke={INK} strokeWidth={1.4}>
        {c.rings.map(([x, y]) => (
          <circle key={x} cx={x} cy={y + 3} r={3.4} />
        ))}
      </g>
      <g transform={P.transform}>
        <PoloniusKnockout />
        <PoloniusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const poloniusPortrait: LinocutArt = { width: PW, height: PH, Draw: PoloniusPortrait }

const BEARD_AT = P.to(132, 214)
const FACE_AT = P.to(136, 120)

export const polonius: Portrait = {
  name: 'Polonius',
  art: poloniusPortrait,
  alt: 'A linocut portrait of Polonius in profile, facing right: an old man with a lined face, a white brow and a bright, watchful eye, a long white beard streaked with fine black strands, and white hair at the nape under a flat black bonnet with a white band. He wears a dark counsellor’s gown with a falling collar. Behind him on the left hangs an arras, a tapestry in heavy folds from a rod, with a border of lozenges woven down its edge. Three numbered red markers point to his beard, his lined face and the arras.',
  describedBy: [
    { phrase: 'old men have grey beards', at: BEARD_AT },
    { phrase: 'their faces are wrinkled', at: FACE_AT },
    { phrase: 'Be you and I behind an arras then', at: [44, 92], to: [76, 120] },
  ],
  where: 'Act 2, Scene 2',
  note: 'Hamlet mocks Polonius to his face, pretending to read a satire on old men. Polonius, sure he has found the cause of Hamlet’s madness, plans to hide behind the arras with the King and watch. He hides there twice, and the second time it costs him his life.',
  artNote:
    'The play gives his age, his beard and his lined face, through Hamlet’s mockery. His bonnet and gown are how the panels draw him. He stands before the arras and is never drawn behind it.',
}
