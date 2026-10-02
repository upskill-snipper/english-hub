import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  neckShade,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Tear,
} from './common'

/**
 * Gonzalo, as Ariel describes him to Prospero in Act 5, Scene 1, held with
 * the court in Prospero's spell:
 *
 *   "but chiefly Him you term'd, sir, "the good old lord, Gonzalo". His
 *   tears run down his beard, like winter's drops From eaves of reeds"
 *
 * So: an old man weeping, his tears running down into a full white beard,
 * and hanging in drops from the foot of it as water hangs from the edge of a
 * thatched roof in winter. The beard is cut to hang straight in long
 * strands, like thatch, with its foot cut level like an eave, so the
 * picture is Ariel's own. He says elsewhere "My old bones ache" (Act 3,
 * Scene 3), and the Boatswain calls him "a counsellor" (Act 1, Scene 1).
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a close
 * black cap over the crown, its edge cut in paper; white hair below it at the
 * back of the head and a white brow; a full white beard, cut in paper with
 * its strands in ink; the lines of age; and a counsellor's long dark gown,
 * with no ruff. That the beard is white is the kit's reading of "old": the
 * play does not give its colour. His head is every man's head (MAN_HEAD).
 * There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 6701 (the figure), 6702 to 6706 (its marks), 6710 (the ground).
 */

/** The close black cap over the crown: the kit's GONZALO_CAP at this size. */
const CAP =
  'M44.4 82.6C41.6 48.1 71.3 26.6 103 26.6C132.7 26.6 151 43.5 153.9 70.4' +
  'C120.7 65 76.2 70.3 44.4 82.6Z'
const CAP_EDGE = gouge(47, 76, 151, 64, 2.4, -1.4)

/**
 * White hair below the cap: round the back of the head, ending above the
 * nape in short tufts, and down in front of the ear to the beard. (Hanging
 * straight to the nape in one smooth piece, it read as a veil.)
 */
const HAIR = spline([
  [46, 82, 1],
  [100, 72],
  [128, 69, 1],
  [124, 90],
  [120, 110],
  [116, 128, 1],
  [100, 120],
  [96, 104],
  [86, 100],
  [76, 112],
  [72, 132],
  [70, 150],
  [66, 163],
  [60, 155],
  [54, 168],
  [48, 159],
  [42, 150],
  [39, 126],
  [40, 100],
])

/**
 * The full white beard, from in front of the ear round the jaw, hanging
 * straight in long strands to a level foot like the eave of a thatched roof.
 */
const BEARD = spline([
  [114, 126, 1],
  [124, 144],
  [140, 150],
  [156, 147],
  [166.5, 137, 1],
  [175, 144],
  [180, 162],
  [184, 190],
  [186, 220],
  [188, 252, 1],
  [168, 256],
  [148, 258],
  [128, 256],
  [114, 252, 1],
  [110, 222],
  [106, 190],
  [104, 158],
])
/** The eave of the beard: where the drops hang from. */
const EAVE_Y = 254
const DROPS: [number, number, number][] = [
  [128, EAVE_Y + 14, 1.2],
  [148, EAVE_Y + 16, 1.35],
  [168, EAVE_Y + 14, 1.2],
]

/** The counsellor's long gown over his shoulders. */
const BODY = spline([
  [-12, 336, 1],
  [-6, 294],
  [12, 258],
  [44, 232],
  [80, 220],
  [116, 226],
  [150, 222],
  [182, 234],
  [208, 262],
  [226, 298],
  [234, 336, 1],
])
const FRONT = 'M196 252Q206 292 210 336'

type Marks = {
  hair: string
  beard: string
  moustache: string
  brows: string
  lines: string
  neck: string
  body: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // White hair: fine ink locks on paper, combed back and down.
  const hair =
    locks(
      seed + 1,
      12,
      (t) => [104 - t * 58, 74 + t * 10],
      (t) => [94 - t * 46, 110 + t * 52],
      [0.7, 1.1],
      -6,
    ) +
    locks(
      seed + 2,
      4,
      (t) => [124 - t * 8, 74 + t * 4],
      (t) => [118 - t * 6, 118 + t * 6],
      [0.7, 1],
      -1,
    )

  // The beard in long straight strands, hanging like thatch to its eave.
  const beard =
    locks(
      seed + 3,
      22,
      (t) => [112 + t * 66, 150 - Math.sin(Math.PI * t) * 4],
      (t) => [116 + t * 70, EAVE_Y - 2],
      [0.8, 1.3],
      0,
      0.6,
    ) +
    locks(
      seed + 4,
      8,
      (t) => [110 + t * 14, 136 + t * 14],
      (t) => [114 + t * 10, 220 + t * 30],
      [0.7, 1.1],
      -2,
    )

  // The white moustache falling from under the nose into the beard.
  const moustache =
    'M168 139Q176 142 178.5 152M165.5 141Q172 146 173 156M163 142Q167 149 167 158M160 144Q162 150 161 157'

  // A white brow: short strokes of fine ink.
  let brows = ''
  for (let i = 0; i < 12; i++) {
    const x = 143 + i * 1.9 + between(r, -0.5, 0.5)
    const y = 88.6 + between(r, -0.6, 0.6) - Math.sin((i / 11) * Math.PI) * 1.4
    brows += `M${n(x)} ${n(y)}l${n(between(r, 2.4, 4))} ${n(between(r, -2.6, -0.6))}`
  }

  // The lines of age: the forehead below the cap, the crow's feet, the cheek.
  let lines = 'M142 76Q152 74 163 78'
  for (let i = 0; i < 3; i++)
    lines += `M145 ${n(101 + i * 3)}L${n(136 - between(r, 0, 3))} ${n(98 + i * 4.5)}`
  for (let rad = 12; rad < 22; rad += 3.4)
    lines += arcDashes(r, 150, 118, rad, deg(80), deg(140), [8, 16], [2, 5])

  const neck = neckShade(seed + 5)
  const body = folds(seed + 6, [12, 190], [262, 280], 6)
  const m = { hair, beard, moustache, brows, lines, neck, body }
  marksBySeed.set(seed, m)
  return m
}

/** Gonzalo, weeping, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function GonzaloFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const headClip = `${uid}-gon-head-${seed}`
  const hairClip = `${uid}-gon-hair-${seed}`
  const beardClip = `${uid}-gon-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      {/* the counsellor's long gown */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRONT} fill="none" stroke={PAPER} strokeWidth={LINE.bold} strokeLinecap="round" />
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK}>
        <path d={m.lines} strokeWidth={LINE.hairline} />
        <path d={m.neck} strokeWidth={1.3} />
      </g>
      {/* "the good old lord": white hair under the close black cap */}
      <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={INK} />
      </g>
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={CAP_EDGE} fill={PAPER} />
      {/* "His tears run down his beard": the full white beard, hanging like thatch */}
      <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={INK} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.moustache} strokeWidth={1.2} />
        {/* the nostril */}
        <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
        <path d={m.brows} strokeWidth={1.1} />
      </g>
      <ManEye look="down" />
      {/* a tear on his cheek, running down into the beard */}
      <Tear x={133} y={132} s={1.05} track={18} />
      {/* "like winter's drops From eaves of reeds": drops hanging at the beard's foot */}
      {DROPS.map(([x, y, s]) => (
        <Tear key={`${x}`} x={x} y={y} s={s} />
      ))}
    </g>
  )
}

/** A thick ink halo round head, cap, beard and shoulders. */
export function GonzaloKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={CAP} />
      <path d={HAIR} />
      <path d={BEARD} />
      <path d={BODY} />
    </g>
  )
}

const P = placing(46, 36, 0.88, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The lime grove where the court is held, the light ahead of him, to the left.
  ground = portraitGround('tempest-gonzalo', 6710, (x, y) =>
    clamp(0.1 + ((PW - x - 50) / 280) * 0.82 - (y / PH) * 0.12),
  )
  return ground
}

function GonzaloPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <GonzaloKnockout />
        <GonzaloFigure uid={uid} seed={6701} />
      </g>
      <PortraitRule />
    </>
  )
}

export const gonzaloPortrait: LinocutArt = { width: PW, height: PH, Draw: GonzaloPortrait }

const HAIR_AT = P.to(58, 150)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. A line to the cheek comes from behind
 * the head or from straight below the cheek, never across the lips.
 */
const TEAR_MARK = P.to(133, 130)
const DROP_AT: Pt = P.to(DROPS[1][0], DROPS[1][1] - 2)

export const gonzalo: Portrait = {
  name: 'Gonzalo',
  art: gonzaloPortrait,
  alt: 'A linocut portrait of Gonzalo in profile, facing left: an old man weeping, his eye lowered under a white brow, with the lines of age on his forehead, at his eye and on his cheek. A close black cap covers the top of his head, and white hair shows below it at the back of his head and in front of his ear. A full white beard and moustache hang from his jaw in long straight strands, like thatch, to a level edge at his chest. A tear runs down his cheek towards the beard, and three drops hang from the edge of the beard like water from the eaves of a thatched roof. He wears a long dark gown. Three numbered red markers point to his white hair, the tear on his cheek and the drops at the foot of his beard.',
  describedBy: [
    { phrase: 'the good old lord, Gonzalo', at: [HAIR_AT[0] + 40, HAIR_AT[1] - 84], to: HAIR_AT },
    {
      phrase: 'His tears run down his beard',
      at: [TEAR_MARK[0] + 54, TEAR_MARK[1] - 44],
      to: TEAR_MARK,
    },
    {
      phrase: 'like winter’s drops From eaves of reeds',
      at: [DROP_AT[0] - 60, DROP_AT[1] + 6],
      to: DROP_AT,
    },
  ],
  where: 'Act 5, Scene 1',
  passage:
    'Him you term’d, sir, “the good old lord, Gonzalo”. His tears run down his beard, like winter’s drops From eaves of reeds; your charm so strongly works ’em, That if you now beheld them, your affections Would become tender.',
  note: 'Ariel describes the court held in Prospero’s spell. Gonzalo, who saved Prospero and Miranda twelve years before, is weeping over the others, and Ariel’s report of them turns Prospero from vengeance to forgiveness.',
  artNote:
    'The play gives his age and his beard; that the beard is white is the print’s reading of “old”, as in the panels. His close cap and long gown are the panels’ too, the dress of an old counsellor of the time.',
}
