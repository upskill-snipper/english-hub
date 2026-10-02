import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  EarCut,
  FLAT_BONNET,
  FLAT_BONNET_BAND,
  HAT_NAPE,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  manRuff,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  seams,
  spline,
} from './common'

/**
 * Roderigo, from what the play says of him, every word of it Iago's to his
 * face in Act 1, Scene 3:
 *
 *   "Why, thou silly gentleman!"
 *   "Put money in thy purse; follow thou the wars; defeat thy favour with an
 *   usurped beard; I say, put money in thy purse."
 *
 * and his own complaint in the play's first lines: "thou, Iago, who hast had
 * my purse, As if the strings were thine" (1.1). So: a young gentleman of
 * Venice, rich and earnest, with a plain open face, clean-shaven (Iago tells
 * him to disguise his face, his "favour", with a false beard), and at his
 * girdle the fat purse that Iago empties. "I'll sell all my land" (1.3). He
 * is drawn plainly and with the same care as everyone else: a dupe, not a
 * clown, and nothing in his face is made foolish.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every
 * man's head (MAN_HEAD), lit and beardless; a flat bonnet with its band cut
 * in paper and a long feather curling back from it (RODERIGO_BONNET, the one
 * feather in the play); the small ruff; a doublet and a short cloak; and a
 * fat purse at his girdle, cut in paper. There is no red in this plate but
 * the markers.
 *
 * Seeds: 9501 (the figure's marks), 9510 (the ground).
 */

/** The long feather, sweeping back from the crown of the bonnet and curling down behind his head. */
const FEATHER_SPINE: Pt[] = [
  [108, 22],
  [84, 8],
  [56, 2],
  [28, 8],
  [8, 24],
  [-2, 46],
  [2, 66],
  [12, 76],
]
const FEATHER = ribbon(FEATHER_SPINE, 17, 0.55)
/** His shoulders and chest in a doublet, to the girdle at his waist and a little below. */
const DOUBLET = spline([
  [-2, 344, 1],
  [6, 304],
  [10, 272],
  [22, 245],
  [50, 227],
  [80, 221],
  [110, 225],
  [140, 223],
  [166, 230],
  [190, 250],
  [200, 276],
  [198, 300],
  [206, 344, 1],
])
/** The short cloak, hanging from his shoulders behind him. */
const CLOAK = spline([
  [64, 224, 1],
  [36, 232],
  [12, 252],
  [-4, 290],
  [-10, 344, 1],
  [40, 344, 1],
  [44, 300],
  [56, 262],
  [80, 230, 1],
])
/** The girdle at his waist. */
const GIRDLE = spline([
  [6, 296, 1],
  [80, 299],
  [150, 298],
  [199, 294, 1],
  [199, 303, 1],
  [150, 307],
  [80, 308],
  [6, 305, 1],
])
/** "put money in thy purse": a fat purse at his girdle, its neck drawn tight with strings. */
const PURSE = spline([
  [174, 306, 1],
  [166, 316],
  [162, 330],
  [166, 342],
  [180, 348],
  [196, 342],
  [200, 328],
  [196, 315],
  [189, 306, 1],
])
const PURSE_NECK = spline([
  [172, 300, 1],
  [191, 300, 1],
  [190, 310, 1],
  [173, 310, 1],
])
const PURSE_STRINGS = 'M178 310Q172 322 176 334M184 310Q190 322 186 332'

type Marks = { nape: string; feather: string; body: string; purse: string }

const marks = once((): Marks => {
  const r = rng(9501)
  let nape = ''
  for (let i = 0; i < 14; i++) {
    const x = between(r, 48, 86)
    const y = between(r, 96, 164)
    nape += gouge(x, y, x + between(r, -1, 3), y + between(r, 7, 12), between(r, 0.5, 0.8), 0.6)
  }
  // The barbs of the feather, cut in paper across it from its spine.
  let feather = ''
  for (let i = 1; i < FEATHER_SPINE.length - 1; i++) {
    const [ax, ay] = FEATHER_SPINE[i - 1]
    const [bx, by] = FEATHER_SPINE[i]
    for (let k = 0; k < 3; k++) {
      const t = (k + 0.5) / 3
      const x = ax + (bx - ax) * t
      const y = ay + (by - ay) * t
      feather += gouge(x, y, x + between(r, 2, 5), y + between(r, 4, 7), 0.6, 0.6)
    }
  }
  // the spine itself
  feather += ribbon(FEATHER_SPINE.slice(0, 6), 1.8, 0.7)
  // The doublet's front, the buttons' line, and the folds of the cloak.
  const body =
    gouge(150, 226, 196, 294, 1.2, -2) +
    seams(
      9502,
      [
        [
          [16, 262],
          [6, 340],
        ],
        [
          [30, 246],
          [24, 340],
        ],
        [
          [104, 236],
          [114, 290],
        ],
        [
          [70, 244],
          [80, 292],
        ],
      ],
      [1, 1.5],
    )
  // The purse: its seams and the light on its belly.
  const purse = gouge(170, 320, 174, 340, 0.9, -1) + gouge(194, 320, 190, 338, 0.7, 1)
  return { nape, feather, body, purse }
})

/** Roderigo to the waist, facing right in the 0..240 by 0..332 frame. */
export function RoderigoFigure({ uid }: { uid: string }) {
  const m = marks()
  const napeClip = `${uid}-rod-nape`
  const RUFF = manRuff()
  return (
    <g>
      <defs>
        <clipPath id={napeClip}>
          <path d={HAT_NAPE} />
        </clipPath>
      </defs>
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={DOUBLET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      {/* the buttons down the front of the doublet */}
      {[
        [162, 246],
        [172, 262],
        [180, 278],
      ].map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={2.6}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
      ))}
      <path d={GIRDLE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={PURSE} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={m.purse} fill={INK} />
      <path d={PURSE_NECK} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={PURSE_STRINGS} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-rod`} />
      <path d={HAT_NAPE} fill={INK} />
      <g clipPath={`url(#${napeClip})`}>
        <path d={m.nape} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <ManBrow w={2.6} raise={1} />
      <ManEye look="open" />
      {/* the bonnet and its feather, the one feather in the play */}
      <path d={FEATHER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.feather} fill={PAPER} />
      <path
        d={FLAT_BONNET}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={FLAT_BONNET_BAND} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

/** A thick ink halo round the figure. */
function RoderigoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={FEATHER} />
      <path d={FLAT_BONNET} />
      <path d={MAN_HEAD} />
      <path d={CLOAK} />
      <path d={DOUBLET} />
      <path d={PURSE} />
    </g>
  )
}

const P = placing(58, 7, 0.86)

const ground = once(() =>
  // A street in Venice: the light ahead of him, to the right.
  portraitGround('othello-roderigo', 9510, (x, y) =>
    clamp(0.12 + ((x - 80) / 240) * 0.9 - (y / PH) * 0.1),
  ),
)

function RoderigoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <RoderigoKnockout />
        <RoderigoFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const roderigoPortrait: LinocutArt = { width: PW, height: PH, Draw: RoderigoPortrait }

const EYE_AT = P.to(MAN_EYE[0] + 1, MAN_EYE[1])
const PURSE_AT = P.to(181, 326)
/** The bare chin, reached from below and behind so the line never crosses the mouth. */
const CHIN_AT = P.to(160, 178)

export const roderigo: Portrait = {
  name: 'Roderigo',
  art: roderigoPortrait,
  alt: 'A linocut portrait of Roderigo in profile, facing right, drawn to the waist: a young, clean-shaven gentleman with a plain, open face, his eye open and his brow a little raised. He wears a flat dark bonnet tilted over his brow, with a pale band and a long dark feather sweeping back from it and curling down behind his head, a small white ruff, a dark doublet with pale buttons down the front and a short dark cloak behind his shoulders. At his girdle hangs a fat white purse, its neck drawn tight with strings. Three numbered red markers point to his eye, the purse and his bare chin.',
  describedBy: [
    { phrase: 'thou silly gentleman', at: [EYE_AT[0] + 44, EYE_AT[1] - 34], to: EYE_AT },
    { phrase: 'put money in thy purse', at: [PURSE_AT[0] + 44, PURSE_AT[1] - 28], to: PURSE_AT },
    {
      phrase: 'defeat thy favour with an usurped beard',
      at: [CHIN_AT[0] - 30, CHIN_AT[1] + 60],
      to: CHIN_AT,
    },
  ],
  where: 'Act 1, Scene 3',
  note: 'Roderigo pays Iago to win Desdemona for him, and Iago keeps the money. “Put money in thy purse,” Iago tells him again and again, and empties it.',
  artNote:
    'The play says only that he is a rich young gentleman of Venice. He is drawn as the panels draw him: beardless, since Iago tells him to disguise his face with a false beard, in a feathered bonnet, with his purse at his girdle.',
}
