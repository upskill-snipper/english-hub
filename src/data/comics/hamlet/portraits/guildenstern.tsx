import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, type Pt } from '@/components/comics/linocut/carve'

import { SALARINO_CAP } from '../../the-merchant-of-venice/panels/people'
import {
  bandAlong,
  Buttons,
  carry,
  DOUBLET,
  DOUBLET_BUTTONS,
  DOUBLET_FRONT,
  folds,
  Hand,
  locks,
  MAN_EAR,
  MAN_HEAD,
  MAN_RUFF,
  ManNoseAndMouth,
  NeckShadow,
  neckShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHORT_CLOAK,
  spline,
  type Digit,
} from './common'

/**
 * Guildenstern, Hamlet's other schoolfellow and the King's other spy, from
 * the two times Hamlet sees through him:
 *
 *   HAMLET: "You were sent for; and there is a kind of confession in your
 *   looks, which your modesties have not craft enough to colour."
 *   GUILDENSTERN: "My lord, we were sent for." (Act 2, Scene 2)
 *   HAMLET: "Will you play upon this pipe?" GUILDENSTERN: "My lord, I
 *   cannot." ... HAMLET: "govern these ventages with your finger and thumb
 *   ... Look you, these are the stops." GUILDENSTERN: "But these cannot I
 *   command to any utterance of harmony. I have not the skill."
 *   (Act 3, Scene 2)
 *
 * So: a young courtier holding the recorder Hamlet has handed him, held
 * awkwardly, away from his mouth, his fingers nowhere near the holes, his
 * look uneasy: the guilt Hamlet reads in his face, and the pipe he cannot
 * play. Hamlet turns it on him: "You would play upon me; you would seem to
 * know my stops".
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every man's
 * head (MAN_HEAD); dressed exactly as Rosencrantz is, a doublet, the small
 * ruff and a short cloak, because the King and Queen cannot tell them apart;
 * told from him only by his cap, a round cap with a turned-up brim (the
 * Merchant kit's SALARINO_CAP, which the kit gives him, carried to this
 * size), and by a short dark beard along the jaw (the kit's, which Barnardo
 * also wears). The recorder is a plain wooden pipe: the beak he would blow
 * into, the window below it, and its finger-holes, the "stops", down its
 * front. There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 8001 to 8005 (the figure's marks), 8010 (the ground).
 */

/** The round cap with a turned-up brim: the Merchant kit's SALARINO_CAP at this size. */
const CAP = carry(SALARINO_CAP, 0, 4)

/** The short dark beard along the jaw and round the chin, without a moustache. */
const BEARD = spline([
  [98, 140, 1],
  [106, 160],
  [118, 178],
  [134, 190],
  [150, 195],
  [163, 192],
  [172, 182],
  [175, 168],
  [172, 160, 1],
  [164, 164],
  [152, 167],
  [138, 164],
  [124, 156],
  [110, 146],
])

/** Short dark hair under the cap, at the temple and the nape. In the head's frame. */
const HAIR = spline([
  [142, 92, 1],
  [130, 94],
  [124, 104],
  [121, 118, 1],
  [113, 104],
  [101, 98],
  [90, 104],
  [86, 122],
  [84, 140],
  [78, 160, 1],
  [68, 152],
  [58, 164, 1],
  [48, 140],
  [42, 116],
  [44, 98],
])

// ── The recorder, held across him, in the figure's frame ─────────────────────

/** The pipe's axis, from its foot, behind his hand, to the beak, forward. */
const FOOT: Pt = [116, 302]
const BEAK: Pt = [238, 270]
const RA = Math.atan2(BEAK[1] - FOOT[1], BEAK[0] - FOOT[0])
const RL = Math.hypot(BEAK[0] - FOOT[0], BEAK[1] - FOOT[1])
const onPipe = (d: number, s = 0): Pt => [
  FOOT[0] + Math.cos(RA) * d - Math.sin(RA) * s,
  FOOT[1] + Math.sin(RA) * d + Math.cos(RA) * s,
]
const PIPE = bandAlong([onPipe(0), onPipe(RL - 14)], 9)
/** The beak, narrowing and cut away under its tip. */
const BEAK_SHAPE = (() => {
  const a = onPipe(RL - 16, -4.6)
  const b = onPipe(RL, -2.6)
  const c = onPipe(RL - 2, 1.4)
  const d = onPipe(RL - 16, 4.6)
  return `M${n(a[0])} ${n(a[1])}L${n(b[0])} ${n(b[1])}L${n(c[0])} ${n(c[1])}L${n(d[0])} ${n(d[1])}Z`
})()
/** The turned rings at the joints. */
const RINGS = [30, RL - 40].map((d) => bandAlong([onPipe(d), onPipe(d + 4)], 11)).join('')
/** The window under the beak, and "the stops": seven holes down its upper side. */
const WINDOW = (() => {
  const [x, y] = onPipe(RL - 30, -1.6)
  return `M${n(x - 3)} ${n(y - 1.6)}L${n(x + 3)} ${n(y - 2.6)}L${n(x + 3.4)} ${n(y + 0.4)}L${n(x - 2.6)} ${n(y + 1.4)}Z`
})()
const STOPS: Pt[] = [44, 54, 64, 74, 84, 94, 104].map((d) => onPipe(d, -1.4))

/**
 * His hand closed round the foot of the pipe, the back of it towards us, the
 * fingers across the pipe and cut apart, nowhere near the stops.
 */
const HAND_AT = onPipe(16, 12)
const HAND_ROT = (RA * 180) / Math.PI - 90
const PALM = spline([
  [-2, -11],
  [7, -13],
  [14, -10],
  [15, 0],
  [14, 11],
  [6, 13],
  [-2, 10],
])
const DIGITS: Digit[] = [
  { from: [10, 10], to: [24, 10.4], w: 6 },
  { from: [10, 4], to: [25.6, 4.2], w: 6.2 },
  { from: [10, -2], to: [25.6, -2], w: 6.2 },
  { from: [10, -8], to: [24, -8.2], w: 6 },
  { from: [2, -10], to: [17, -15.4], w: 6.6 },
]
const KNUCKLES = 'M11.6 -10.4L11.6 12.6'
/** His forearm in the doublet's sleeve, up from below the block to the hand. */
const SLEEVE = spline([
  [70, 346, 1],
  [80, 326],
  [96, 316],
  [112, 314, 1],
  [118, 340, 1],
  [100, 350, 1],
])

type Marks = {
  hair: string
  beard: string
  neck: string
  body: string
  cloak: string
  grain: string
}

const marks = once((): Marks => {
  const hair = locks(
    8002,
    11,
    (t) => [136 - t * 88, 96 - t * 2],
    (t) => [88 - t * 38, 126 + t * 30],
    [0.7, 1.1],
    -6,
  )
  const beard = locks(
    8003,
    7,
    (t) => [106 + t * 62, 152 + t * 14],
    (t) => [122 + t * 40, 184 + t * 6],
    [0.5, 0.8],
    2,
  )
  const neck = neckShade(8004)
  const body = folds(8005, [110, 196], [262, 288], 4)
  const cloak = folds(8006, [2, 84], [262, 290], 5)
  const grain =
    gouge(...onPipe(4, 1.6), ...onPipe(26, 1.6), 0.5) +
    gouge(...onPipe(38, 2), ...onPipe(98, 2), 0.5)
  return { hair, beard, neck, body, cloak, grain }
})

/** Guildenstern, head and shoulders, with the recorder, facing right in the 0..240 by 0..332 frame. */
export function GuildensternFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-gui`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-beard`}>
          <path d={BEARD} />
        </clipPath>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <path d={DOUBLET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={DOUBLET_FRONT} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      <Buttons pts={DOUBLET_BUTTONS} r={2.7} />
      <path
        d={SHORT_CLOAK}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.cloak} fill={PAPER} />

      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${id}-ns`} />
      <g clipPath={`url(#${id}-head)`}>
        <path d={m.neck} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <ManNoseAndMouth />
      {/* "a kind of confession in your looks": the brow drawn together, the eye sliding away */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M143 87.4Q151 85.6 157.6 87.8Q161.4 89.4 165 92" strokeWidth={2.6} />
        <path d="M146 99Q154 96.4 162.4 99.4" strokeWidth={2.3} />
        <path d="M147.6 104.2Q154.6 106.4 161 103.4" strokeWidth={1.1} />
      </g>
      <circle cx={151.4} cy={101.2} r={2.6} fill={INK} />
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-beard)`}>
        <path d={m.beard} fill={PAPER} />
      </g>

      {/* the round cap with its brim turned up, the brim's edge cut in paper */}
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={gouge(42, 92, 166, 78, 1.8, -1.4)} fill={PAPER} />

      <path d={MAN_RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={MAN_RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />

      {/* "Will you play upon this pipe?": the recorder, held away from him */}
      <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
        <path d={PIPE} />
        <path d={BEAK_SHAPE} />
      </g>
      <path d={PIPE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.grain} fill={INK} />
      <path
        d={BEAK_SHAPE}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path d={RINGS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={WINDOW} fill={INK} />
      <g fill={INK}>
        {STOPS.map(([x, y]) => (
          <circle key={`${x}`} cx={n(x)} cy={n(y)} r={2} />
        ))}
      </g>
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <Hand
        transform={`translate(${n(HAND_AT[0])} ${n(HAND_AT[1])}) rotate(${n(HAND_ROT)})`}
        palm={PALM}
        digits={DIGITS}
        lines={KNUCKLES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round head, cap, shoulders and pipe. */
function GuildensternKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={CAP} />
      <path d={BEARD} />
      <path d={DOUBLET} />
      <path d={SHORT_CLOAK} />
      <path d={PIPE} />
      <path d={BEAK_SHAPE} />
    </g>
  )
}

const P = placing(40, 16, 0.88, true)

/** The hall after the play, the light ahead of him, to the left. */
const ground = once(() =>
  portraitGround('hamlet-guildenstern', 8010, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  ),
)

function GuildensternPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <GuildensternKnockout />
        <GuildensternFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const guildensternPortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: GuildensternPortrait,
}

const FACE_AT = P.to(140, 126)
const PIPE_AT = P.to(...onPipe(RL - 22))
const STOPS_AT = P.to(...onPipe(74, -5))

export const guildenstern: Portrait = {
  name: 'Guildenstern',
  art: guildensternPortrait,
  alt: 'A linocut portrait of Guildenstern in profile, facing left: a young man with a short dark beard along his jaw, his brow drawn together and his eye sliding away, uneasy. His short dark hair is under a round black cap with a turned-up brim, edged in white. He wears a small white ruff, a dark doublet buttoned down the front and a short cloak over his far shoulder. In one hand he holds a recorder, a plain pale wooden pipe, low across his body and away from his mouth, his hand round its foot and nowhere near its row of finger-holes. Three numbered red markers point to his face, the recorder and its finger-holes.',
  describedBy: [
    { phrase: 'a kind of confession in your looks', at: FACE_AT },
    {
      phrase: 'Will you play upon this pipe?',
      at: [PIPE_AT[0] - 10, PIPE_AT[1] - 46],
      to: PIPE_AT,
    },
    { phrase: 'these are the stops', at: [STOPS_AT[0] - 34, STOPS_AT[1] + 30], to: STOPS_AT },
  ],
  where: 'Act 2, Scene 2; Act 3, Scene 2',
  note: 'Guildenstern cannot hide that the King sent for him, and cannot play the recorder Hamlet hands him. Hamlet makes the pipe his rebuke: “you would play upon me; you would seem to know my stops”, but he is harder to play than any pipe.',
  artNote:
    'The play never describes his face. His round cap, short beard and courtier’s dress are how the panels draw him, to tell him from Rosencrantz. The recorder’s “stops” are its finger-holes.',
}
