import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, type Pt } from '@/components/comics/linocut/carve'

import { HORATIO_CAP, PLAIN_BAND } from '../panels/people'
import {
  capsule,
  carry,
  folds,
  locks,
  MAN_EAR,
  MAN_HEAD,
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
  spline,
} from './common'

/**
 * Horatio, Hamlet's friend and fellow-student from Wittenberg, from what is
 * said to him:
 *
 *   MARCELLUS, on the platform: "Thou art a scholar; speak to it, Horatio."
 *   (Act 1, Scene 1)
 *   HAMLET, before the play: "Nay, do not think I flatter; For what
 *   advancement may I hope from thee, That no revenue hast, but thy good
 *   spirits To feed and clothe thee? ... Give me that man That is not
 *   passion's slave, and I will wear him In my heart's core" (Act 3, Scene 2)
 *
 * So: a scholar with a book, plainly dressed, a poor man with "no revenue"
 * but his good spirits, his face steady and calm, the one man in the play
 * Hamlet trusts.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every man's
 * head (MAN_HEAD), beardless, as a student; a scholar's cap, a close cap
 * under a flat square top that stands out beyond it front and back (the
 * kit's HORATIO_CAP, carried to this size), his dark hair short under it; a
 * plain white band at the neck (the kit's
 * PLAIN_BAND at this size) and a scholar's plain dark gown over his doublet,
 * with no ornament at all. The book is a plain one, closed, held against his
 * breast, his fingers over its edge and cut apart. There is no red in this
 * plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 7801 to 7804 (the figure's marks), 7810 (the ground).
 */

/**
 * The scholar's cap: the kit's HORATIO_CAP at this size, so the cap on the
 * card is the cap in every panel. (The Merchant kit's DOCTOR_CAP was cut here
 * first: the tall cap the figure kit had already given up because at panel
 * size it read as a fez, so the portrait and the panels gave him two
 * different hats. Reviewed 2 October 2026.)
 */
const CAP = carry(HORATIO_CAP, 0, -2)
/** The edge of its flat top, and the band at the foot of the close cap, cut in paper. */
const CAP_CUTS = gouge(30, 26.6, 176, 27.4, 1.2, -0.4) + gouge(45, 67.4, 158, 61.2, 1.5, -0.8)
/** The plain white band at the neck: the kit's PLAIN_BAND at this size. */
const BAND = carry(PLAIN_BAND)

/** Short dark hair under the cap, at the temple and the nape. In the head's frame. */
const HAIR = spline([
  [146, 82, 1],
  [138, 84],
  [128, 92],
  [122, 106],
  [121, 118, 1],
  [113, 104],
  [101, 98],
  [90, 104],
  [86, 122],
  [82, 146],
  [74, 166, 1],
  [64, 158],
  [54, 168, 1],
  [46, 142],
  [42, 112],
  [44, 88],
])

/** His shoulders in the scholar's gown. */
const BODY = spline([
  [-14, 336, 1],
  [-8, 292],
  [10, 256],
  [42, 232],
  [76, 220],
  [112, 226],
  [146, 222],
  [178, 234],
  [204, 260],
  [222, 296],
  [230, 336, 1],
])
/** The gown's open front over the doublet, a strip of the doublet showing. */
const DOUBLET = spline([
  [150, 230, 1],
  [178, 236],
  [196, 270],
  [206, 336, 1],
  [178, 336, 1],
  [170, 280],
])

/** The book, closed, held against his breast: its cover towards us, a plain tooled border. */
const BOOK = 'M150 250L196 244L204 306L158 312Z'
const BOOK_RULE = 'M156.6 256.4L190.4 252L197 300.4L163.4 305Z'
const BOOK_PAGES = 'M196 244L203 247L211 308L204 306Z'
const BOOK_LEAVES =
  'M198.4 254L204.6 256.4M199.6 264L205.8 266.2M200.8 274L207 276M202 284L208.2 285.8M203.2 294L209.4 295.6'

/** His forearm in the gown's wide sleeve, up from below the block to the book. */
const SLEEVE = spline([
  [96, 346, 1],
  [104, 322],
  [128, 306],
  [158, 298],
  [170, 300, 1],
  [172, 330, 1],
  [146, 336],
  [126, 350, 1],
])
/** The fingers over the book's lower edge, cut apart, the hand itself below and behind it. */
const FINGERS: [Pt, Pt][] = [
  [
    [166, 318],
    [170, 304],
  ],
  [
    [173, 318],
    [177, 303],
  ],
  [
    [180, 317],
    [184, 302.6],
  ],
  [
    [187, 315],
    [190, 303.6],
  ],
]
const FIST = spline([
  [160, 312, 1],
  [194, 308],
  [196, 324],
  [168, 330],
  [158, 326],
])

type Marks = { hair: string; neck: string; body: string; doublet: string }

const marks = once((): Marks => {
  const hair = locks(
    7802,
    12,
    (t) => [140 - t * 92, 86 + t * 2],
    (t) => [92 - t * 40, 124 + t * 40],
    [0.7, 1.1],
    -6,
  )
  const neck = neckShade(7803)
  const body = folds(7804, [14, 140], [262, 290], 7)
  const doublet = gouge(184, 262, 196, 334, 0.9, -0.6)
  return { hair, neck, body, doublet }
})

/** Horatio, head and shoulders, with his book, facing right in the 0..240 by 0..332 frame. */
export function HoratioFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-hor`
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
      {/* "no revenue ... To feed and clothe thee": a plain gown, no ornament */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={DOUBLET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.doublet} fill={PAPER} />

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
      {/* "not passion's slave": the face steady, the eye level */}
      <ManNoseAndMouth />
      <ManBrow w={2.6} />
      <ManEye look="open" />

      {/* the scholar's square cap */}
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={CAP_CUTS} fill={PAPER} />

      {/* the plain white band at his neck */}
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />

      {/* "Thou art a scholar": the book held against his breast */}
      <path
        d={BOOK_PAGES}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path d={BOOK_LEAVES} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={BOOK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={BOOK_RULE} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={FIST} fill={INK} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
      <path d={FIST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {FINGERS.map(([a, b]) => (
        <g key={`${a[0]}`}>
          <path d={capsule(a[0], a[1], b[0], b[1], 6.6)} fill={INK} />
          <path
            d={capsule(a[0], a[1], b[0], b[1], 5.4)}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
          />
        </g>
      ))}
    </g>
  )
}

/** A thick ink halo round head, cap and shoulders. */
function HoratioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={CAP} />
      <path d={BODY} />
    </g>
  )
}

const P = placing(40, 18, 0.88, true)

/** Night on the platform gives way to the room he reads in: the light ahead of him, to the left. */
const ground = once(() =>
  portraitGround('hamlet-horatio', 7810, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  ),
)

function HoratioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <HoratioKnockout />
        <HoratioFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const horatioPortrait: LinocutArt = { width: PW, height: PH, Draw: HoratioPortrait }

const BOOK_AT = P.to(178, 272)
const GOWN_AT = P.to(60, 290)
const FACE_AT = P.to(140, 126)

export const horatio: Portrait = {
  name: 'Horatio',
  art: horatioPortrait,
  alt: 'A linocut portrait of Horatio in profile, facing left: a beardless man with a calm, steady face and a level eye, his short dark hair under a black scholar’s cap with a flat square top. He wears a plain white band at his neck and a plain dark scholar’s gown, open over a dark doublet, with no ornament. Against his breast he holds a closed book, its cover dark with a plain white border, his fingers over its lower edge. Three numbered red markers point to the book, his plain gown and his steady face.',
  describedBy: [
    { phrase: 'Thou art a scholar', at: [BOOK_AT[0] - 54, BOOK_AT[1] + 10], to: BOOK_AT },
    {
      phrase: 'That no revenue hast, but thy good spirits To feed and clothe thee',
      at: [GOWN_AT[0] + 30, GOWN_AT[1] - 60],
      to: GOWN_AT,
    },
    { phrase: 'not passion’s slave', at: FACE_AT },
  ],
  where: 'Act 1, Scene 1; Act 3, Scene 2',
  note: 'Horatio is a scholar and a sceptic, the one the soldiers bring to question the Ghost. Hamlet praises him because he is poor and so needs no flattery, and because he is ruled by judgement, not by passion: everything Hamlet fears he is not himself.',
  artNote:
    'The play calls him a scholar and a poor man, and never describes his face. His square cap, white band and plain gown are how the panels draw him, and he is beardless, as a student.',
}
