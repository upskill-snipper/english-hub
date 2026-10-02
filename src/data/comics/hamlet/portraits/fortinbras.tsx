import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { CIRCLET } from '../../much-ado-about-nothing/panels/people'
import {
  carry,
  EarCut,
  locks,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
} from './common'

/**
 * Fortinbras, Prince of Norway, from the two descriptions of him the play
 * gives before he ever speaks:
 *
 *   HORATIO: "Now, sir, young Fortinbras, Of unimproved mettle, hot and full,
 *   Hath in the skirts of Norway, here and there, Shark'd up a list of
 *   lawless resolutes" (Act 1, Scene 1)
 *   HAMLET, watching his army pass: "Witness this army of such mass and
 *   charge, Led by a delicate and tender prince, Whose spirit, with divine
 *   ambition puff'd, Makes mouths at the invisible event" (Act 4, Scene 4)
 *
 * So: a young prince, his face fresh and eager, a flush of hot blood in his
 * cheek, in armour at the head of an army whose spears rise behind him.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the youth's
 * head, beardless; his dark hair short under a prince's circlet (the Much Ado
 * kit's CIRCLET, which the kit gives him, carried to this size), in paper; a
 * breastplate over his doublet, dark steel with its rim, ridge and rivets cut
 * in paper, and a cloak behind. Unlike the Ghost's armour, which is pale, his
 * is a living man's, in ink. His rapier stays at his side, out of the
 * picture. The army is the spears behind him, their heads cut in paper, and
 * no one in it is hurt or fighting: they are marching to Poland.
 *
 * RED marks the "hot" in his cheek, laid flat as a flush, and nothing else.
 *
 * He faces left, towards Denmark, so the figure is drawn facing right and
 * flipped.
 *
 * Seeds: 8101 to 8104 (the figure's marks), 8110 (the ground), 8111 (the
 * spears).
 */

/** The prince's circlet: the Much Ado kit's CIRCLET at this size. */
const CROWN = carry(CIRCLET, 0, 4)

/** Short dark hair over the crown of the head and at the nape, under the circlet. In the head's frame. */
const HAIR = spline([
  [156, 70, 1],
  [140, 76],
  [128, 90],
  [123, 106],
  [121, 118, 1],
  [113, 104],
  [101, 98],
  [90, 104],
  [86, 122],
  [84, 144],
  [78, 164, 1],
  [68, 156],
  [58, 168, 1],
  [46, 144],
  [40, 112],
  [42, 80],
  [56, 52],
  [82, 34],
  [112, 27],
  [140, 32],
  [158, 48],
])

/** The doublet at the neck and in the sleeves; the breastplate over the chest. */
const BODY = shoulders(0.98)
const BREASTPLATE = spline([
  [96, 236, 1],
  [124, 240],
  [150, 232],
  [176, 240],
  [198, 262],
  [212, 296],
  [218, 336, 1],
  [110, 336, 1],
  [100, 300],
  [96, 266],
])
/** Its rim at the neck and the arm, its ridge, and the lames at its foot: cut in paper. */
const RIM = 'M98 238Q124 246 152 234Q178 242 196 260'
const ARM_RIM = 'M98 240Q94 270 100 300Q104 318 110 336'
const RIDGE = 'M168 244Q192 282 200 336'
const PLATE_RIVETS: Pt[] = [
  [108, 252],
  [104, 276],
  [106, 300],
  [160, 240],
  [186, 252],
]
/** The cloak behind, from the far shoulder. */
const CLOAK = spline([
  [-14, 336, 1],
  [-10, 294],
  [6, 258],
  [36, 234],
  [70, 222],
  [98, 228],
  [92, 262],
  [86, 300],
  [86, 336, 1],
])
/** The doublet's collar, standing up out of the breastplate. */
const COLLAR = spline([
  [70, 210, 1],
  [104, 216],
  [138, 208, 1],
  [144, 232, 1],
  [104, 240],
  [66, 234, 1],
])

/**
 * "hot and full": the flush, the second block laid flat high on his cheek,
 * well back from the mouth: a soft lozenge, as Desdemona's blush is cut, never
 * strokes, which read as scratches.
 */
const FLUSH =
  'M131.4 121.6C132.2 117.2 139.2 114.8 145.6 116C150.2 117 150.8 121.4 147 123.8C142.4 126.4 133.4 126.2 131.4 121.6Z'

type Marks = { hair: string; nape: string; cloak: string; plate: string; shine: string }

const marks = once((): Marks => {
  const r = rng(8101)
  const hair = locks(
    8102,
    12,
    (t) => [146 - t * 96, 82 - t * 10],
    (t) => [92 - t * 42, 118 + t * 42],
    [0.7, 1.1],
    -6,
  )
  const nape = napeShade(8103, 150, 118, 84, 112)
  let cloak = ''
  for (let i = 0; i < 5; i++) {
    const x = between(r, 6, 80)
    cloak += gouge(x, between(r, 256, 280), x - between(r, 4, 10), 340, between(r, 1, 1.6), 1.2)
  }
  // The light on the curve of the breastplate: contours cut in paper that
  // follow the plate round its swell, widest and brightest at the front,
  // where the light falls, broken and fading towards the arm.
  let plate = ''
  for (let rad = 96; rad < 168; rad += 7)
    plate += arcDashes(r, 60, 330, rad, deg(-74), deg(-6), [10, 26], [3, 3 + (168 - rad) / 9])
  const shine = arc(60, 330, 156, deg(-62), deg(-20))
  return { hair, nape, cloak, plate, shine }
})

/** Fortinbras, head and shoulders, in his breastplate, facing right in the 0..240 by 0..332 frame. */
export function FortinbrasFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-for`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-plate`}>
          <path d={BREASTPLATE} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />

      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={YOUTH_JAW} strokeWidth={1.4} />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...YOUTH_EAR} />
      <YouthNoseAndMouth />
      <YouthEye look="open" />
      <path d={FLUSH} fill={RED} />

      {/* "a delicate and tender prince": the prince's circlet, in paper */}
      <path d={CROWN} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M46 72Q100 64 152 74" fill="none" stroke={INK} strokeWidth={1.2} />

      {/* the doublet's collar, and the breastplate over it */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        d={BREASTPLATE}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${id}-plate)`}>
        <path d={m.plate} fill="none" stroke={PAPER} strokeLinecap="round" strokeWidth={1.6} />
        <path d={m.shine} fill="none" stroke={PAPER} strokeLinecap="round" strokeWidth={3.6} />
      </g>
      <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
        <path d={RIM} strokeWidth={4.2} />
        <path d={ARM_RIM} strokeWidth={3.4} />
        <path d={RIDGE} strokeWidth={2.2} />
      </g>
      <g fill={PAPER}>
        {PLATE_RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={2} />
        ))}
      </g>
    </g>
  )
}

/** A thick ink halo round head, circlet and shoulders. */
function FortinbrasKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={YOUTH_HEAD} />
      <path d={HAIR} />
      <path d={CROWN} />
      <path d={BODY} />
      <path d={CLOAK} />
    </g>
  )
}

const P = placing(74, 36, 0.86, true)

/**
 * "this army of such mass and charge": the spears of the marching army
 * behind him, to the right, their shafts and leaf-shaped heads cut in paper,
 * leaning a little with the march.
 */
const army = once(() => {
  const r = rng(8111)
  const spears: { shaft: string; head: string; tip: Pt }[] = []
  for (let i = 0; i < 9; i++) {
    const x = 232 + i * 10.4 + between(r, -2, 2)
    const top = 24 + between(r, 0, 26) + (i % 2) * 20
    const foot: Pt = [x + 14, PH - 8]
    const tip: Pt = [x - 4, top]
    const a = Math.atan2(tip[1] - foot[1], tip[0] - foot[0])
    const ux = Math.cos(a)
    const uy = Math.sin(a)
    const h0: Pt = [tip[0] - ux * 20, tip[1] - uy * 20]
    spears.push({
      shaft: gouge(foot[0], foot[1], h0[0], h0[1], 1.6, 0),
      head: gouge(h0[0], h0[1], tip[0], tip[1], 4.2, 0),
      tip,
    })
  }
  return spears
})

/** The plain beyond the army, the light low ahead of him. */
const ground = once(() =>
  portraitGround('hamlet-fortinbras', 8110, (x, y) =>
    x > 226 ? 0 : clamp(0.12 + ((PW - x - 40) / 280) * 0.8 - (y / PH) * 0.1),
  ),
)

function FortinbrasPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g fill={PAPER}>
        {army().map((s) => (
          <path key={s.shaft} d={s.shaft + s.head} />
        ))}
      </g>
      <g transform={P.transform}>
        <FortinbrasKnockout />
        <FortinbrasFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const fortinbrasPortrait: LinocutArt = { width: PW, height: PH, Draw: FortinbrasPortrait }

const CHEEK_AT = P.to(122, 128)
const SPEAR_AT = (() => {
  const s = army()[0]
  return [Number(n(s.tip[0])), Number(n(s.tip[1] + 12))] as [number, number]
})()
const CROWN_AT = P.to(150, 56)

export const fortinbras: Portrait = {
  name: 'Fortinbras',
  art: fortinbrasPortrait,
  alt: 'A linocut portrait of Fortinbras in profile, facing left: a young, beardless man with an open, eager face and a flush of red on his cheek, his short dark hair under a pale prince’s circlet with points. He wears a dark steel breastplate over his doublet, its rim, ridge and rivets cut in white, and a cloak behind him. Behind him on the right the spears of his marching army rise in a row, their shafts and leaf-shaped heads cut in white against the dark. Three numbered red markers point to his flushed cheek, the spears of the army and his circlet.',
  describedBy: [
    { phrase: 'young Fortinbras, Of unimproved mettle, hot and full', at: CHEEK_AT },
    {
      phrase: 'this army of such mass and charge',
      at: [SPEAR_AT[0] - 34, SPEAR_AT[1]],
      to: SPEAR_AT,
    },
    { phrase: 'a delicate and tender prince', at: [CROWN_AT[0] - 50, CROWN_AT[1]], to: CROWN_AT },
  ],
  where: 'Act 1, Scene 1; Act 4, Scene 4',
  note: 'Fortinbras is the son who acts. His father lost lands to old Hamlet; he raises an army to win them back, then turns it on Poland for a patch of ground. Hamlet, watching it pass, measures his own delay against him, and at the end gives him his dying voice.',
  artNote:
    'The play describes his youth, his hot temper and his army, not his face. His circlet and breastplate are how the panels draw him. Red marks the heat in his cheek.',
}
