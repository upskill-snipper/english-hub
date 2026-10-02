import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, type Pt } from '@/components/comics/linocut/carve'

import { LORENZO_BONNET } from '../../the-merchant-of-venice/panels/people'
import {
  Buttons,
  capsule,
  carry,
  DOUBLET,
  DOUBLET_BUTTONS,
  DOUBLET_FRONT,
  folds,
  locks,
  MAN_EAR,
  MAN_HEAD,
  MAN_RUFF,
  ManBrow,
  ManEye,
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
} from './common'

/**
 * Rosencrantz, one of Hamlet's two schoolfellows whom the King sends for to
 * find out what troubles him, from what the Queen and Hamlet say:
 *
 *   KING: "Thanks, Rosencrantz and gentle Guildenstern."
 *   QUEEN: "Thanks, Guildenstern and gentle Rosencrantz." (Act 2, Scene 2)
 *   HAMLET: "There's letters seal'd: and my two schoolfellows, Whom I will
 *   trust as I will adders fang'd" (Act 3, Scene 4)
 *
 * So: a young gentleman of the court, plainly a courtier, holding the King's
 * letters, sealed, that he and Guildenstern carry to England. Hamlet's
 * comparison of them to adders stays in his mouth: nothing in the picture is
 * a snake.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every man's
 * head (MAN_HEAD), beardless; dressed exactly as Guildenstern is, a doublet,
 * the small ruff and a short cloak, because the King and Queen cannot tell
 * them apart; told from him only by his cap, a soft flat bonnet tipped
 * forward (the Merchant kit's LORENZO_BONNET, which the kit gives him,
 * carried to this size), and by his bare chin. His dark hair is short at the
 * nape under it.
 *
 * RED is the wax of the seal on the letters and nothing else. The seal is set
 * on the face of the packet, clear of his fingers, which are closed over its
 * lower edge and cut apart.
 *
 * Seeds: 7901 to 7904 (the figure's marks), 7910 (the ground).
 */

/** The soft flat bonnet tipped forward: the Merchant kit's LORENZO_BONNET at this size. */
const BONNET = carry(LORENZO_BONNET, 0, 6)

/** Short dark hair under the bonnet, at the temple and the nape. In the head's frame. */
const HAIR = spline([
  [140, 86, 1],
  [130, 90],
  [124, 102],
  [121, 118, 1],
  [113, 104],
  [101, 98],
  [90, 104],
  [86, 122],
  [82, 146],
  [74, 168, 1],
  [64, 158],
  [54, 170, 1],
  [46, 144],
  [42, 114],
  [44, 92],
])

/** The letters, folded and sealed, held against his breast. */
const PACKET = 'M150 254L208 246L212 288L154 296Z'
const CREASES = 'M152 274L210 266M170 251.6L174 293.4M190 249L193 290.6'
const SEAL: Pt = [182, 271]

/** His forearm in the doublet's sleeve, up from below the block to the packet. */
const SLEEVE = spline([
  [96, 346, 1],
  [106, 322],
  [128, 306],
  [152, 298],
  [164, 300, 1],
  [166, 330, 1],
  [142, 336],
  [126, 350, 1],
])
/** The fingers over the packet's lower edge, cut apart; the hand behind it. */
const FINGERS: [Pt, Pt][] = [
  [
    [160, 311],
    [163, 296],
  ],
  [
    [167, 311],
    [170, 295],
  ],
  [
    [174, 310],
    [177, 294.4],
  ],
  [
    [181, 308],
    [183.6, 295.4],
  ],
]
const FIST = spline([
  [154, 306, 1],
  [188, 302],
  [190, 318],
  [162, 324],
  [152, 320],
])

type Marks = { hair: string; neck: string; body: string; cloak: string }

const marks = once((): Marks => {
  const hair = locks(
    7902,
    12,
    (t) => [134 - t * 86, 90 - t * 2],
    (t) => [90 - t * 40, 124 + t * 42],
    [0.7, 1.1],
    -6,
  )
  const neck = neckShade(7903)
  const body = folds(7904, [110, 196], [262, 288], 4)
  const cloak = folds(7905, [2, 84], [262, 290], 5)
  return { hair, neck, body, cloak }
})

/** Rosencrantz, head and shoulders, with the letters, facing right in the 0..240 by 0..332 frame. */
export function RosencrantzFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-ros`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
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
      <ManBrow w={2.6} />
      <ManEye look="open" />

      {/* the flat bonnet, tipped forward, its band cut in paper */}
      <path d={BONNET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={gouge(40, 86, 178, 64, 1.8, -1.6)} fill={PAPER} />

      {/* "gentle Rosencrantz": the small ruff of a gentleman */}
      <path d={MAN_RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={MAN_RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />

      {/* "There's letters seal'd" */}
      <path d={PACKET} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
      <path d={PACKET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={CREASES} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <circle cx={SEAL[0]} cy={SEAL[1]} r={7.4} fill={RED} stroke={INK} strokeWidth={1.2} />
      {/* the impression of the King's signet in the wax */}
      <circle cx={SEAL[0]} cy={SEAL[1]} r={3.4} fill="none" stroke={INK} strokeWidth={1} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={FIST} fill={INK} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
      <path d={FIST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {FINGERS.map(([a, b]) => (
        <g key={`${a[0]}`}>
          <path d={capsule(a[0], a[1], b[0], b[1], 6.4)} fill={INK} />
          <path
            d={capsule(a[0], a[1], b[0], b[1], 5.2)}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
          />
        </g>
      ))}
    </g>
  )
}

/** A thick ink halo round head, bonnet and shoulders. */
function RosencrantzKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={BONNET} />
      <path d={DOUBLET} />
      <path d={SHORT_CLOAK} />
    </g>
  )
}

const P = placing(34, 16, 0.88)

/** A room of the castle, the light ahead of him. */
const ground = once(() =>
  portraitGround('hamlet-rosencrantz', 7910, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  ),
)

function RosencrantzPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <RosencrantzKnockout />
        <RosencrantzFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const rosencrantzPortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: RosencrantzPortrait,
}

const RUFF_AT = P.to(150, 214)
const FACE_AT = P.to(140, 124)
const SEAL_AT = P.to(SEAL[0] + 7, SEAL[1] - 2)

export const rosencrantz: Portrait = {
  name: 'Rosencrantz',
  art: rosencrantzPortrait,
  alt: 'A linocut portrait of Rosencrantz in profile, facing right: a beardless young man with a level eye, his short dark hair under a soft, flat black bonnet tipped forward, with a white band. He wears a small white ruff, a dark doublet buttoned down the front and a short cloak over his far shoulder. Against his breast he holds a folded packet of letters, cut in white with its creases in black, sealed with a round seal printed in red, his fingers over its lower edge. Three numbered red markers point to his ruff, his face and the red seal.',
  describedBy: [
    { phrase: 'gentle Rosencrantz', at: [RUFF_AT[0] + 66, RUFF_AT[1] - 18], to: RUFF_AT },
    { phrase: 'my two schoolfellows', at: FACE_AT },
    { phrase: 'There’s letters seal’d', at: [SEAL_AT[0] + 56, SEAL_AT[1] + 8], to: SEAL_AT },
  ],
  where: 'Act 2, Scene 2; Act 3, Scene 4',
  note: 'The King and Queen thank “Rosencrantz and gentle Guildenstern”, then “Guildenstern and gentle Rosencrantz”, as if the two were one. Old schoolfellows turned the King’s spies, they carry his sealed letters to England without knowing they order Hamlet’s death.',
  artNote:
    'The play never describes him and barely tells the two apart. His bonnet, bare chin and courtier’s dress are how the panels draw him. The red is the wax of the King’s seal.',
}
