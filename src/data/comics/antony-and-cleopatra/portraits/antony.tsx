import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  ageLines,
  Armour,
  CLOAK,
  CUIRASS,
  curls,
  EarCut,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  MOUSTACHE,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
} from './common'

/**
 * Antony, from what the play says of him, and from nowhere else:
 *
 *   PHILO: "Those his goodly eyes, That o’er the files and musters of the war
 *   Have glowed like plated Mars ... His captain’s heart, Which in the
 *   scuffles of great fights hath burst The buckles on his breast" (Act 1,
 *   Scene 1)
 *   ENOBARBUS: "Were I the wearer of Antonius’ beard, I would not shave’t
 *   today." (Act 2, Scene 2)
 *   ANTONY: "What, girl! Though grey Do something mingle with our younger
 *   brown, yet ha’ we A brain that nourishes our nerves" (Act 4, Scene 8)
 *   ANTONY: "My very hairs do mutiny, for the white Reprove the brown for
 *   rashness" (Act 3, Scene 11)
 *
 * So: a soldier past his youth, his eye open and level under a dark brow; his
 * thick curling hair and his short curled beard dark, with the grey among
 * them cut as patches of brighter curls, at the back of the head and on the
 * crown, above the ear, at the temple and at the point of the beard, so the
 * grey reads as mingled with the brown and never as an old man's white hair;
 * and on his breast, where Philo says his heart in battle burst them, the
 * buckles of the straps that hold his cuirass. A line or two of age at the
 * eye and across the brow.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx: HEAD_ANTONY,
 * ANTONY_HAIR, GRIZZLE): the Julius Caesar kit's Antony ten years on, his
 * curls on a man's head (MAN_HEAD), with a short beard that curls from the ear
 * round the jaw and is scalloped where it curls below the chin, and a
 * moustache over the lip; in the cuirass of a Roman general with a cloak
 * hanging from his shoulders behind him (./common.tsx: Armour). No sword is
 * drawn. There is no red in this plate but the markers.
 *
 * MARKERS. The eye's comes to it from in front at the eye's height, crossing
 * only the bridge of the nose, as Scrooge's does; the grey's comes to the
 * back of his hair from behind, at its own height; the beard's comes to the
 * point of the beard from in front, at its height, below the lips; the
 * buckles' is on his breast, far from the face. No line crosses his face.
 *
 * Seeds: 1101 to 1105 (the figure's marks), 1106 (the armour), 1107 (the
 * nape), 1110 (the ground).
 */

/**
 * Thick curling hair, close to the head: a scalloped mass a little proud of
 * the skull from the brow over the crown to the nape, its inner edge the
 * hairline round the ear and along the temple, as the Julius Caesar
 * portraits cut his curls (ANTONY_HAIR in the kit).
 */
const CURL_EDGE: Pt[] = [
  [154, 47],
  [140, 33],
  [112, 26],
  [80, 36],
  [56, 60],
  [42, 96],
  [38, 136],
  [44, 168],
  [56, 192],
]
/** Quadratic bumps between successive points, pushed out from (cx, cy). */
function scallop(pts: Pt[], cx: number, cy: number, out: number, split = 2): string {
  let d = ''
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    for (let k = 0; k < split; k++) {
      const t0 = k / split
      const t1 = (k + 1) / split
      const ax = x0 + (x1 - x0) * t0
      const ay = y0 + (y1 - y0) * t0
      const bx = x0 + (x1 - x0) * t1
      const by = y0 + (y1 - y0) * t1
      const ox = (ax + bx) / 2 - cx
      const oy = (ay + by) / 2 - cy
      const L = Math.hypot(ox, oy) || 1
      d += `Q${n((ax + bx) / 2 + (ox / L) * out)} ${n((ay + by) / 2 + (oy / L) * out)} ${n(bx)} ${n(by)}`
    }
  }
  return d
}
const HAIR =
  `M${n(CURL_EDGE[0][0])} ${n(CURL_EDGE[0][1])}` +
  scallop(CURL_EDGE, 104, 118, 8) +
  // the hairline: from the nape up behind the ear, over it to the sideburn,
  // along the temple, and forward to the brow in three small curls
  'C70 196 82 180 86 160C90 140 88 120 94 108C100 100 112 100 121 104' +
  'C121 96 123 86 127 78C125 72 129 66 135 66C137 60 141 57 146 58' +
  'C148 53 152 50 157 52Z'
/** The hair as a polygon, for scattering the curls inside it. */
const HAIR_POLY: Pt[] = [
  ...CURL_EDGE,
  [70, 196],
  [86, 160],
  [90, 130],
  [94, 108],
  [112, 101],
  [121, 104],
  [124, 88],
  [130, 70],
  [146, 58],
  [157, 52],
]

/**
 * THE BEARD, short and curled: from the sideburn in front of the ear along
 * the cheek to the corner of the mouth, under the lower lip, then round the
 * chin and under the jaw in a scalloped edge of curls a little proud of the
 * face, and back up the line of the jaw to the ear. The moustache is
 * ./common.tsx's MOUSTACHE; the lower lip between them is left in paper.
 */
const BEARD_CURL_EDGE: Pt[] = [
  [168, 157],
  [174.5, 159.4],
  [178.4, 166],
  [179.4, 174],
  [177, 182],
  [171, 188],
  [161.6, 192],
  [151, 194.6],
  [140, 195],
  [131, 190.4],
]
const BEARD =
  'M113 105C115 104.6 117 104.2 119 104C120.4 108 121 112 122 116C123.6 120.4 125 124.4 127 128' +
  'C129.6 131.6 132 134.6 135 137C138.4 139.4 141.6 141.6 145 143.4C148 145 150.6 146.2 153 147.6' +
  'C154.8 149.2 156 150.8 157.4 152.4C159 153.6 160.4 154.4 162 155.2C164 156 166 156.6 168 157' +
  scallop(BEARD_CURL_EDGE, 150, 168, 3.4, 1) +
  'C128 187 125.4 184 123 180.6C120.6 176.6 118.6 172.4 117 168C115.2 163.4 114 158.6 113 154' +
  'C112 148.6 111.4 143.4 111 138C110.8 132.6 110.8 127.4 111 122C111.4 116 112 110.4 113 105Z'
const BEARD_POLY: Pt[] = [
  [113, 105],
  [119, 104],
  [127, 128],
  [145, 143.4],
  [157.4, 152.4],
  [168, 157],
  ...BEARD_CURL_EDGE.slice(1),
  [123, 180.6],
  [113, 154],
  [111, 122],
]

/** The straps over his shoulders, each fastened on his breast with a buckle. */
const STRAPS = 'M114 236C126 244 140 258 152 272M150 228C162 236 172 248 180 262'
const BUCKLES: Pt[] = [
  [155, 276],
  [183, 266],
]

/** Where the grey is cut thickest: the back of the head, above the ear, the temple, the beard's point. */
const GREY_ZONES: { c: Pt; rx: number; ry: number }[] = [
  { c: [56, 128], rx: 13, ry: 24 },
  { c: [98, 92], rx: 13, ry: 9 },
  { c: [122, 74], rx: 7, ry: 15 },
  { c: [70, 52], rx: 14, ry: 8 },
]
const inGrey = (x: number, y: number) =>
  GREY_ZONES.some(({ c, rx, ry }) => ((x - c[0]) / rx) ** 2 + ((y - c[1]) / ry) ** 2 < 1)

type Marks = {
  curls: string
  grey: string
  beard: string
  beardGrey: string
  moustache: string
  age: string
  nape: string
}

const marks = once((): Marks => {
  // The curls: small crescents cut in paper, turning every way, brighter
  // towards the light ahead of him, and thinner where the grey is cut.
  const r = rng(1101)
  let hair = ''
  for (let i = 0, tries = 0; i < 150 && tries < 6000; tries++) {
    const x = between(r, 30, 168)
    const y = between(r, 20, 204)
    const ex = (x - 100) / 64
    const ey = (y - 112) / 88
    if (ex * ex + ey * ey >= 1) continue
    if (x > 90 && y > 102) continue
    if (x > 124 && y > 62) continue
    const a = between(r, 0, Math.PI * 2)
    const L = between(r, 6, 11)
    const light = clamp((x - 30) / 140)
    hair += gouge(
      x,
      y,
      x + Math.cos(a) * L,
      y + Math.sin(a) * L,
      between(r, 0.8, 1.2) * (0.7 + light * 0.7),
      between(r, 2.4, 3.6) * (r() < 0.5 ? -1 : 1),
    )
    i++
  }
  // "Though grey Do something mingle with our younger brown": in the grey
  // places, more curls and fuller ones, so those patches print lighter than
  // the dark of the rest, the brown and the grey mingled.
  // Each grey curl is kept clear of the last ones, so they print as curls and
  // not as crossed cuts that read as sparks.
  const r2 = rng(1102)
  let grey = ''
  const placed: Pt[] = []
  for (let i = 0, tries = 0; i < 46 && tries < 8000; tries++) {
    const x = between(r2, 36, 140)
    const y = between(r2, 36, 156)
    if (!inGrey(x, y)) continue
    if (placed.some(([px, py]) => Math.hypot(px - x, py - y) < 6.4)) continue
    placed.push([x, y])
    const a = between(r2, 0, Math.PI * 2)
    const L = between(r2, 5, 8)
    grey += gouge(
      x - (Math.cos(a) * L) / 2,
      y - (Math.sin(a) * L) / 2,
      x + (Math.cos(a) * L) / 2,
      y + (Math.sin(a) * L) / 2,
      between(r2, 1.2, 1.7),
      between(r2, 2.2, 3) * (r2() < 0.5 ? -1 : 1),
    )
    i++
  }
  // The beard's curls: small open rounds of paper, more towards the light.
  const beard = curls(1103, BEARD_POLY, 120, [1.4, 2.4], (x) => clamp((x - 108) / 70))
  // The grey in the beard: fuller curls at its point, below the chin.
  const r3 = rng(1104)
  let beardGrey = ''
  for (let i = 0; i < 12; i++) {
    const x = between(r3, 152, 174)
    const y = between(r3, 168, 189)
    const a = between(r3, 0, Math.PI * 2)
    beardGrey += gouge(x, y, x + Math.cos(a) * 5, y + Math.sin(a) * 5, between(r3, 1, 1.4), 1.8)
  }
  // The moustache: its hairs combed down and out over the lip.
  let moustache = ''
  for (let i = 0; i < 5; i++) {
    const x = 159.6 + i * 2.9
    moustache += gouge(x, 139.6 + i * 0.4, x + 2.4, 148, 0.55, 0.3)
  }
  const nape = napeShade(1107, 150, 118, 66, 124)
  const age = ageLines(1105, 2)
  return { curls: hair, grey, beard, beardGrey, moustache, age, nape }
})

/** Antony, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function AntonyFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-an-head`
  const hairClip = `${uid}-an-hair`
  const beardClip = `${uid}-an-beard`
  const lipClip = `${uid}-an-lip`
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
        <clipPath id={lipClip}>
          <path d={MOUSTACHE} />
        </clipPath>
      </defs>
      <Armour seed={1106} />
      {/* the straps over his shoulders and the buckles on his breast */}
      <path d={STRAPS} fill="none" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
      <path d={STRAPS} fill="none" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
      {BUCKLES.map(([x, y]) => (
        <g key={`${x}-${y}`} transform={`rotate(38 ${x} ${y})`}>
          <rect
            x={x - 7.5}
            y={y - 6}
            width={15}
            height={12}
            rx={3}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
          />
          <rect x={x - 3.6} y={y - 2.6} width={7.2} height={5.2} rx={1.4} fill={INK} />
          <path d={`M${x} ${y - 6}V${y + 6}`} stroke={PAPER} strokeWidth={1.6} />
        </g>
      ))}
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-an`} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.age} strokeWidth={LINE.hairline} />
        <path d={m.nape} strokeWidth={1.5} />
      </g>
      {/* the hair, its curls, and the grey among them */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.curls} fill={PAPER} />
        <path d={m.grey} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      {/* the curled beard and the moustache, the lower lip left in paper between them */}
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        <path d={m.beardGrey} fill={PAPER} />
      </g>
      <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />
      <g clipPath={`url(#${lipClip})`}>
        <path d={m.moustache} fill={PAPER} />
      </g>
      <ManBrow w={3} />
      <ManEye look="open" />
    </g>
  )
}

/** A thick ink halo round head, hair, beard and shoulders. */
function AntonyKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={CLOAK} />
      <path d={CUIRASS} />
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={BEARD} />
    </g>
  )
}

const P = placing(34, -4, 1)

const ground = once(() =>
  // A room of the palace at Alexandria by day, the light ahead of him.
  portraitGround('ac-antony', 1110, (x, y) =>
    clamp(0.12 + ((x - 50) / 270) * 0.86 - (y / PH) * 0.12),
  ),
)

function AntonyPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <AntonyKnockout />
        <AntonyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const antonyPortrait: LinocutArt = { width: PW, height: PH, Draw: AntonyPortrait }

const EYE_AT = P.to(156, 100.4)
const GREY_AT = P.to(46, 128)
const BEARD_AT = P.to(180.6, 177)
const BUCKLE_AT = P.to(...BUCKLES[0])

export const antony: Portrait = {
  name: 'Antony',
  art: antonyPortrait,
  alt: 'A linocut portrait of Antony in profile, facing right: a soldier past his youth, with an open, level eye under a dark brow, a line or two of age at the eye and across the forehead, thick dark curling hair, and a short dark beard that curls round his jaw and chin, with a moustache over his lip. Among the dark curls of his hair and at the point of his beard, patches of lighter curls are cut for grey. He wears a dark cuirass, its rim and riveted shoulder guard cut in white, with two straps fastened by pale buckles on his breast, and a dark cloak hanging from his shoulders behind him. Four numbered red markers point to his eye, the grey at the back of his hair, his beard and the buckles on his breast.',
  describedBy: [
    { phrase: 'Those his goodly eyes', at: [EYE_AT[0] + 62, EYE_AT[1]], to: EYE_AT },
    {
      phrase: 'Though grey Do something mingle with our younger brown',
      at: [GREY_AT[0] - 30, GREY_AT[1]],
      to: GREY_AT,
    },
    {
      phrase: 'Were I the wearer of Antonius’ beard',
      at: [BEARD_AT[0] + 46, BEARD_AT[1]],
      to: BEARD_AT,
    },
    {
      phrase: 'burst The buckles on his breast',
      at: [BUCKLE_AT[0] + 52, BUCKLE_AT[1] + 30],
      to: BUCKLE_AT,
    },
  ],
  where: 'Act 1, Scene 1; Act 2, Scene 2; Act 4, Scene 8',
  note: 'The play opens with a Roman’s verdict: the eyes that once glowed over the army now look only at Cleopatra, and the heart that burst the buckles of his armour has given up all restraint. Antony knows he is going grey, and boasts after his last victory that he can still fight like a young man. A strong answer weighs the soldier he was against the lover he is.',
  artNote:
    'Enobarbus gives him a beard and Antony gives himself the grey. The print cannot show brown, so his hair and beard are ink, with the grey cut into them as lighter curls. His curls and his armour are the panels’, and the play does not describe the armour.',
}
