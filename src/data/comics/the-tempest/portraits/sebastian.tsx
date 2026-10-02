import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  CROWN,
  CROWN_BAND_LINE,
  folds,
  locks,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  turn,
} from './common'

/**
 * Sebastian, the King's brother, as Antonio sounds him out in Act 2, Scene
 * 1, while the King and Gonzalo sleep:
 *
 *   "And yet methinks I see it in thy face, What thou shouldst be. Th'
 *   occasion speaks thee; and My strong imagination sees a crown Dropping
 *   upon thy head."
 *
 * So: a man looking up, his face lit with what Antonio sees in it, and above
 * him the crown of Naples that Antonio imagines dropping on his head. The
 * crown is not there, so it is cut in outline only, a broken paper line with
 * the dark ground showing through it, as the kit cuts what cannot be seen;
 * three short cuts below it show it falling. It is the King's crown, the one
 * Alonso wears in his portrait (CROWN in ./common.tsx). The play says nothing
 * of Sebastian's looks.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a flat
 * bonnet worn tilted, its band cut in paper (the bonnet of the Merchant
 * kit's Lorenzo, at the size the Lorenzo portrait cuts it), and a short
 * beard, invented only to tell him from Antonio; dark hair at the nape; the
 * small ruff every gentleman in the kit wears, a doublet and a short cloak.
 * His head is every man's head (MAN_HEAD). There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 6901 (the figure), 6902 to 6905 (its marks), 6910 (the ground).
 */

/** His head is lifted, looking up at the crown. */
const ROT = -6

/**
 * The flat bonnet, tilted forward over his brow: the Lorenzo portrait's
 * BONNET (src/data/comics/the-merchant-of-venice/portraits/lorenzo.tsx),
 * which is the kit's LORENZO_BONNET at this size. Copied because that file
 * does not export it; keep the two the same.
 */
const BONNET =
  'M37.5 82.7C24 54.3 53.9 18.8 103.6 15.3C149.7 13.2 183.8 32.3 181.7 57.9' +
  'C153.3 67.8 87.9 74.9 37.5 82.7Z'
const BONNET_BAND = gouge(41, 73.5, 174.6, 55.6, 3.2, -2.8)
const BONNET_LIGHT = gouge(62, 40, 150, 26, 1.3, -3) + gouge(76, 52, 164, 40, 0.9, -2.5)

/** Short dark hair at the nape, below the bonnet. */
const HAIR = spline([
  [60, 82, 1],
  [96, 80],
  [112, 94, 1],
  [100, 100],
  [93, 112],
  [89, 132],
  [78, 146],
  [60, 150],
  [47, 138],
  [41, 110],
  [42, 86, 1],
])

/** A short dark beard, from under the ear along the jaw to the chin. */
const BEARD = spline([
  [108, 132, 1],
  [118, 150],
  [136, 160],
  [154, 160],
  [164, 154, 1],
  [172.5, 156],
  [175, 166],
  [173, 180],
  [164, 190],
  [148, 196],
  [132, 194],
  [116, 180],
  [106, 160],
])
/** The moustache, falling at both ends into the beard. */
const MOUSTACHE = spline([
  [168.5, 135.5, 1],
  [174.5, 140],
  [177, 150],
  [175, 158, 1],
  [167, 153],
  [155, 158, 1],
  [154, 147],
  [161, 139],
])

/** His shoulders in a doublet, and the short cloak over the far shoulder. */
const BODY = spline([
  [-10, 336, 1],
  [-4, 296],
  [14, 262],
  [44, 234],
  [76, 220],
  [112, 226],
  [146, 220],
  [176, 232],
  [202, 258],
  [220, 294],
  [230, 336, 1],
])
const CLOAK = spline([
  [-10, 336, 1],
  [-6, 300],
  [8, 266],
  [36, 238],
  [70, 222],
  [96, 226],
  [86, 252],
  [80, 290],
  [80, 336, 1],
])
const RUFF = ruffBand(74, 152, 204, 226, 6, 0.06)
const BUTTONS: Pt[] = [
  [182, 248],
  [187, 264],
  [192, 280],
  [196, 296],
  [200, 312],
]

/**
 * Where the imagined crown hangs, in the figure's frame: above his head and
 * a little ahead of it, smaller than Alonso's so it fits between the bonnet
 * and the top of the block, tipped as it falls.
 */
const CROWN_T = 'translate(37 -78) scale(0.8) rotate(-8 104 60)'
/** Short cuts below the crown, in its own frame, showing it falling. */
const FALLING =
  gouge(78, 98, 78, 116, 2.4) + gouge(108, 94, 108, 114, 2.4) + gouge(138, 90, 138, 108, 2.4)

type Marks = { hair: string; beard: string; body: string; cloak: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(106 - t * 56, 96 + t * 6, 90 - t * 30, 140 + t * 4, 0.9 + r() * 0.3, -2)
  }
  const beard = locks(
    seed + 1,
    16,
    (t) => [110 + t * 58, 138 + t * 16],
    (t) => [124 + t * 44, 186 + Math.sin(Math.PI * t) * 8],
    [0.9, 1.4],
    -2,
  )
  const body = folds(seed + 2, [104, 178], [256, 272], 4)
  const cloak = folds(seed + 3, [4, 74], [258, 280], 5)
  const m = { hair, beard, body, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Sebastian, looking up, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function SebastianFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const beardClip = `${uid}-seb-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      {/* "a crown Dropping upon thy head": the crown Antonio imagines, in outline */}
      <g transform={CROWN_T}>
        <path
          d={CROWN}
          fill="none"
          stroke={PAPER}
          strokeWidth={3}
          strokeDasharray="9 5"
          strokeLinejoin="round"
        />
        <path
          d={CROWN_BAND_LINE}
          fill="none"
          stroke={PAPER}
          strokeWidth={2}
          strokeDasharray="7 5"
        />
        <path d={FALLING} fill={PAPER} />
      </g>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.8} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-seb-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={PAPER} />
        </g>
        <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1.1} strokeLinejoin="round" />
        <path
          d="M171 139Q175 146 174.5 154M167.5 139.5Q170 146 168.5 151M163 141Q164 147 160 153"
          fill="none"
          stroke={PAPER}
          strokeWidth={0.8}
          strokeLinecap="round"
        />
        <path
          d="M172.5 128C168.5 125.5 168.5 120 174 119"
          fill="none"
          stroke={INK}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d={BONNET}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={BONNET_LIGHT} fill={PAPER} />
        <path d={BONNET_BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
        <ManBrow w={2.8} raise={1.5} />
        {/* "I see it in thy face": looking up at what he should be */}
        <ManEye look="up" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, bonnet, beard and shoulders. */
export function SebastianKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={BONNET} />
        <path d={BEARD} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(52, 70, 0.84, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Another part of the island: the light ahead of him, and the ground kept
  // dark where the crown hangs, so its broken outline stands clear.
  ground = portraitGround('tempest-sebastian', 6910, (x, y) =>
    clamp((0.1 + ((PW - x - 50) / 280) * 0.7) * (y < 96 ? 0.25 : 1)),
  )
  return ground
}

function SebastianPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <SebastianKnockout />
        <SebastianFigure uid={uid} seed={6901} />
      </g>
      <PortraitRule />
    </>
  )
}

export const sebastianPortrait: LinocutArt = { width: PW, height: PH, Draw: SebastianPortrait }

/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. A line to the cheek comes from behind
 * the head or from straight below the cheek, never across the lips.
 */
const FACE_AT = onTurnedHead(P, ROT, 138, 116)
const CROWN_AT = P.to(128, -26)

export const sebastian: Portrait = {
  name: 'Sebastian',
  art: sebastianPortrait,
  alt: 'A linocut portrait of Sebastian in profile, facing left, his head lifted and his eye looking up: a man with a short dark beard and moustache, in a flat dark bonnet tilted forward over his brow with a white band round it, short dark hair at his nape, a small white ruff, a dark doublet with pale buttons and a short dark cloak over his far shoulder. Above his head, a little ahead of him, hangs a crown with five tall points, drawn only as a broken white outline with the dark showing through it, and three short white strokes below it show it falling towards him. Two numbered red markers point to his face and the crown.',
  describedBy: [
    { phrase: 'I see it in thy face', at: [FACE_AT[0] + 84, FACE_AT[1] + 2], to: FACE_AT },
    {
      phrase: 'a crown Dropping upon thy head',
      at: [CROWN_AT[0] + 78, CROWN_AT[1] + 8],
      to: CROWN_AT,
    },
  ],
  where: 'Act 2, Scene 1',
  passage:
    'And yet methinks I see it in thy face, What thou shouldst be. Th’ occasion speaks thee; and My strong imagination sees a crown Dropping upon thy head.',
  note: 'While the King sleeps, Antonio tells Sebastian he can see in his face what he should be, and pictures the crown of Naples falling on his head. It is the crime Antonio once committed against his own brother, and Sebastian agrees to it.',
  artNote:
    'The play does not describe his looks. His flat bonnet and short beard are how the panels tell him from Antonio; the crown is the one Antonio imagines, cut only in outline because it is not there.',
}
