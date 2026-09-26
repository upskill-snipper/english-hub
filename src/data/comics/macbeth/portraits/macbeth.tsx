import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  rng,
} from '@/components/comics/linocut/carve'

import { Brooch, lerp2, mailRings, PH, portraitGround, PortraitRule, PW, strands } from './common'

/**
 * Macbeth, as the play describes him. It describes his deeds far more than his
 * face, so the head is plain: a man in his prime, dark-haired and bearded, in
 * the mail shirt and pinned cloak of an eleventh-century Scottish thane. What
 * the markers point to is what the play says:
 *
 * - "O valiant cousin! worthy gentleman" (Duncan, 1.2): the soldier, so the
 *   mail shirt.
 * - "Is this a dagger which I see before me, / The handle toward my hand?"
 *   (2.1): the dagger hangs in the air before his face, handle towards him.
 * - "And on thy blade and dudgeon, gouts of blood" (2.1): three drops in the
 *   spot colour on the blade, and nothing more. The dagger is a vision; there
 *   is no wound anywhere in the picture.
 * - "Fie, my lord, fie! a soldier, and afeard?" (Lady Macbeth, 5.1, reliving
 *   that night): the eye wide and the brow lifted.
 *
 * The dagger is the only light in the plate: the ground is cut brightest round
 * it, as if the vision lit his face.
 */

/** The whole head, hair and beard included, facing right in a 0..200 by 0..320 frame. */
export const MACBETH_HEAD =
  'M64 214C54 196 42 164 40 130C38 96 50 64 76 46C98 30 128 26 148 34C160 40 166 54 166 68C167 78 169 84 170 90L167 97C171 108 179 118 186 128C188.5 132 187 136 182 137C178 138 175 139 173 141L178 153C176 156 175 157 176 159C181 166 182 180 180 188C178 198 170 206 156 208C146 210 138 214 136 222L136 246L66 246Z'
const HAIR =
  'M150 36C142 50 136 66 132 80C124 90 118 100 116 112L108 140C96 150 84 170 72 196L58 208L20 208L20 20L160 20Z'
const BEARD =
  'M116 112C118 124 124 134 132 142C144 152 156 156 164 156L176 159C181 166 182 180 180 188C178 198 170 206 156 208C140 211 126 206 118 196C110 184 106 164 108 140C110 128 113 118 116 112Z'
const MOUSTACHE =
  'M173 141C177 144 179 149 178 153C172 154.5 164 153 157 151C163 148 169 146 173 141Z'
const EAR =
  'M110 106C99 104 92 112 92 124C92 134 97 142 105 143C110 140 112 132 111 124C111 116 111 110 110 106Z'
/** Mail shirt and cloak, the shoulders the portrait stands on. */
export const MACBETH_BODY =
  'M52 236C30 244 10 260 -2 284L-10 330L220 330C214 300 200 276 184 262C172 252 158 244 142 238C122 248 82 248 52 236Z'
const CLOAK =
  'M52 236C30 244 10 260 -2 284L-10 330L118 330C112 306 104 284 96 264C92 254 84 246 76 242C68 242 60 240 52 236Z'
const MAIL_CLIP =
  'M76 242C84 246 92 254 96 264C104 284 112 306 118 330L220 330C214 300 200 276 184 262C172 252 158 244 142 238C122 248 96 248 76 242Z'

type Marks = {
  hair: string
  beard: string
  moustache: string
  cheek: string
  back: string
  throat: string
  mail: string
  cloak: string
}

const marksBySeed = new Map<number, Marks>()
function headMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Dark hair swept back from the hairline over the crown to the nape: white
  // strands cut through the ink, thicker where the light from the front falls.
  let hair = ''
  for (let i = 0; i < 46; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 46
    const a = deg(250 - t * 60)
    const sx = 150 - t * 36 + between(r, -2, 2) + Math.cos(a) * 0
    const sy = 40 + t * 72 + between(r, -2, 2)
    const ex = 48 + t * 26 + between(r, -5, 5)
    const ey = 70 + t * 128 + between(r, -4, 4)
    const w = between(r, 0.6, 1.1) * (1.25 - t * 0.5)
    hair += gouge(sx, sy, ex, ey, w, between(r, -7, -2))
  }
  // A rim of light along the outer edge of the hair, strands running with the
  // curve of the skull, so the head reads as hair and not as a hood.
  for (let i = 0; i < 64; i++) {
    const a = deg(between(r, 150, 292))
    const inset = between(r, 3, 11)
    const cx = 104 + Math.cos(a) * (64 - inset)
    const cy = 128 + Math.sin(a) * (96 - inset)
    const tx = -Math.sin(a) * 64
    const ty = Math.cos(a) * 96
    const tl = Math.hypot(tx, ty)
    const L = between(r, 7, 18)
    hair += gouge(
      cx + (tx / tl) * L * 0.5,
      cy + (ty / tl) * L * 0.5,
      cx - (tx / tl) * L * 0.5,
      cy - (ty / tl) * L * 0.5,
      between(r, 0.5, 1) * (inset < 6 ? 1.2 : 0.8),
      between(r, -1, 1),
    )
  }

  const beard =
    strands(r, 26, lerp2([118, 116], [164, 157]), lerp2([112, 170], [170, 200]), [0.55, 1.1], 1.4) +
    strands(r, 12, lerp2([122, 160], [172, 170]), lerp2([124, 200], [158, 207]), [0.5, 0.9], 1)
  const moustache = strands(
    r,
    5,
    lerp2([172, 144], [176, 151]),
    lerp2([158, 150], [168, 153]),
    [0.45, 0.7],
    0.5,
  )

  // "shrivelled" is Scrooge's; Macbeth's cheek is only shadowed under the bone.
  let cheek = ''
  for (let rad = 12; rad < 26; rad += 3.8)
    cheek += arcDashes(r, 148 + between(r, -1, 1), 110, rad, deg(70), deg(140), [8, 20], [2, 5])

  // The back of the jaw and the side of the neck, away from the light.
  let back = ''
  for (let rad = 40; rad < 140; rad += 3.3)
    back += arcDashes(r, 150, 118, rad, deg(100), deg(176), [8, 24], [1.5, 4])

  let throat = ''
  for (let y = 212; y < 246; y += 3.6) throat += `M${n(96)} ${n(y)}L${n(134)} ${n(y + 2.4)}`

  const mail = mailRings(r, { x0: 70, x1: 222, y0: 240, y1: 332 }, 5.4)
  const cloak =
    gouge(40, 264, 14, 318, 2.4, 3) +
    gouge(66, 260, 58, 320, 1.8, 2) +
    gouge(86, 268, 96, 322, 1.4, -1) +
    gouge(24, 272, 4, 302, 1.2, 1)

  const m = { hair, beard, moustache, cheek, back, throat, mail, cloak }
  marksBySeed.set(seed, m)
  return m
}

/**
 * Macbeth's head and shoulders, lit from the front, in the 0..200 by 0..320
 * frame. `afeard` opens the eye and lifts the brow. Place it with a transform
 * on a parent <g>, over MacbethKnockout.
 */
export function MacbethHead({
  uid,
  seed,
  afeard = false,
}: {
  uid: string
  seed: number
  afeard?: boolean
}) {
  const m = headMarks(seed)
  const headClip = `${uid}-mb-head-${seed}`
  const mailClip = `${uid}-mb-mail-${seed}`
  const up = afeard ? -3 : 0
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MACBETH_HEAD} />
        </clipPath>
        <clipPath id={mailClip}>
          <path d={MAIL_CLIP} />
        </clipPath>
      </defs>
      {/* the paper edge carved round the dark shapes, so they lift off the ground */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={2.6} strokeLinejoin="round">
        <path d={MACBETH_HEAD} />
        <path d={MACBETH_BODY} />
      </g>
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.7} />
          <path d={m.throat} strokeWidth={1.5} />
          <path d={m.cheek} strokeWidth={0.95} />
          {/* the lined brow: two furrows, deeper when afraid */}
          <path
            d={`M142 ${60 + up}Q151 ${56 + up} 160 ${61 + up}M140 ${70 + up}Q150 ${66 + up} 162 ${71 + up}`}
            strokeWidth={1.2}
          />
          <path d="M134 84Q131 96 134 106M139 80Q137 92 140 102" strokeWidth={LINE.hairline} />
          {/* nostril to mouth */}
          <path d="M168 134C162 138 158 142 156 148" strokeWidth={1.4} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
        <path d={BEARD} fill={INK} />
        <path d={m.beard} fill={PAPER} />
      </g>
      <path d={MACBETH_BODY} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <g clipPath={`url(#${mailClip})`}>
        <path d={m.mail} fill="none" stroke={PAPER} strokeWidth={0.95} />
      </g>
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <Brooch x={92} y={254} rad={7.5} turn={-24} />
      <path d={MOUSTACHE} fill={INK} />
      <path d={m.moustache} fill={PAPER} />
      {/* the lower lip, a sliver of paper between moustache and beard */}
      <path d={gouge(163, 156.5, 177, 157.5, 1.3, 0.8)} fill={PAPER} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 112C99 114 97 122 99 130C100 134 103 136 106 133" strokeWidth={1.7} />
        <path d="M104 118C101 122 101 126 103 129" strokeWidth={1} />
        {/* nostril */}
        <path d="M177 134C172 131 172 125 178 124" strokeWidth={1.5} />
        {/* brow and lids */}
        <path d={`M145 ${88 + up}Q155 ${83 + up} 166 ${88 + up}`} strokeWidth={3.4} />
        <path
          d={afeard ? 'M145.5 97Q153 90 163 96.5' : 'M146 99Q153 95.5 162 99'}
          strokeWidth={2.2}
        />
        <path
          d={afeard ? 'M147.5 106Q155 108.5 162 103' : 'M148 105Q155 106 161 102.5'}
          strokeWidth={1.3}
        />
        <path d="M149 111Q155 113 160 110" strokeWidth={LINE.hairline} />
      </g>
      <circle
        cx={afeard ? 156.4 : 155.8}
        cy={afeard ? 100.4 : 101}
        r={afeard ? 2.7 : 2.9}
        fill={INK}
      />
    </g>
  )
}

/** A thick ink halo round head and shoulders, to lift them off a cut ground. */
export function MacbethKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9}>
      <path d={MACBETH_HEAD} />
      <path d={MACBETH_BODY} />
    </g>
  )
}

// ── The dagger of the mind ─────────────────────────────────────────────────

/** In the portrait's own coordinates: the pommel and the point. */
const POMMEL: [number, number] = [238, 70]
const POINT: [number, number] = [298, 212]
const ANGLE = Math.atan2(POINT[1] - POMMEL[1], POINT[0] - POMMEL[0])
const LEN = Math.hypot(POINT[0] - POMMEL[0], POINT[1] - POMMEL[1])

/** A point `d` along the dagger's axis from the pommel, `s` to its side. */
function onDagger(d: number, s = 0): [number, number] {
  const c = Math.cos(ANGLE)
  const si = Math.sin(ANGLE)
  return [POMMEL[0] + c * d - si * s, POMMEL[1] + si * d + c * s]
}
const pt = (d: number, s = 0) => {
  const [x, y] = onDagger(d, s)
  return `${n(x)} ${n(y)}`
}

const DAGGER = {
  blade: `M${pt(36, -6.5)}L${pt(LEN - 26, -4)}L${pt(LEN)}L${pt(LEN - 26, 4)}L${pt(36, 6.5)}Z`,
  guard: `M${pt(29, -17)}Q${pt(31, -19)} ${pt(35, -18)}L${pt(36, 18)}Q${pt(31, 19)} ${pt(29, 17)}Z`,
  grip: `M${pt(8, -4)}L${pt(29, -4.8)}L${pt(29, 4.8)}L${pt(8, 4)}Z`,
  ridge: `M${pt(40)}L${pt(LEN - 10)}`,
  wraps: [12, 17, 22].map((d) => `M${pt(d, -4.4)}L${pt(d + 3, 4.4)}`).join(''),
}
const POMMEL_AT = onDagger(2)

/** "gouts of blood": three drops on the blade, running towards the point. */
const GOUTS = [
  [70, 2, 3.4],
  [91, -1.6, 2.9],
  [109, 1.2, 2.5],
]
  .map(([d, s, rad]) => {
    const [lx, ly] = onDagger(d, s - rad)
    const [rx, ry] = onDagger(d, s + rad)
    return `M${n(lx)} ${n(ly)}A${n(rad)} ${n(rad)} 0 1 1 ${n(rx)} ${n(ry)}L${pt(d + rad * 2.8, s)}Z`
  })
  .join('')

let cuts: { ground: string; aura: string } | undefined
function portraitCuts() {
  if (cuts) return cuts
  const [cx, cy] = onDagger(LEN * 0.5)
  const ground = portraitGround('macbeth', 1606, (x, y) => {
    const d = Math.hypot(x - cx, (y - cy) * 0.8)
    return 0.07 + clamp(1 - d / 140) ** 1.3
  })
  // The vision's light: broken spokes cut outwards from the blade.
  const aura = rays(rng(2106), cx, cy, { from: 34, to: 104, every: 6.5, width: 2.8 })
  cuts = { ground, aura }
  return cuts
}

/** The head's place in the portrait. */
const PLACE = 'translate(4 -6) scale(1.12)'

function MacbethPortrait({ uid }: ArtProps) {
  return (
    <>
      <defs>
        <clipPath id={`${uid}-mb-aura`}>
          <rect x={214} y={10} width={PW - 224} height={PH - 20} />
        </clipPath>
      </defs>
      <path d={portraitCuts().ground} fill={PAPER} />
      <g clipPath={`url(#${uid}-mb-aura)`}>
        <path d={portraitCuts().aura} fill={PAPER} />
      </g>
      <g transform={PLACE}>
        <MacbethKnockout />
      </g>
      <g transform={PLACE}>
        <MacbethHead uid={uid} seed={7} afeard />
      </g>
      {/* the dagger: an ink halo first, so it floats clear of the cuts */}
      <g stroke={INK} strokeWidth={10} strokeLinejoin="round" fill={INK}>
        <path d={DAGGER.blade} />
        <path d={DAGGER.guard} />
        <path d={DAGGER.grip} />
        <circle cx={POMMEL_AT[0]} cy={POMMEL_AT[1]} r={7} />
      </g>
      <g fill={PAPER}>
        <path d={DAGGER.blade} />
        <path d={DAGGER.guard} />
        <path d={DAGGER.grip} />
        <circle cx={POMMEL_AT[0]} cy={POMMEL_AT[1]} r={6.4} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d={DAGGER.ridge} strokeWidth={1.2} />
        <path d={DAGGER.wraps} strokeWidth={1.5} />
      </g>
      <path d={GOUTS} fill={RED} />
      <PortraitRule />
    </>
  )
}

export const macbethPortrait: LinocutArt = { width: PW, height: PH, Draw: MacbethPortrait }

export const macbeth: Portrait = {
  name: 'Macbeth',
  art: macbethPortrait,
  alt: 'A linocut portrait of Macbeth in profile, facing right: a man in his prime with dark swept-back hair and a full dark beard, in a mail shirt with a cloak pinned by a ring brooch. His eye is wide and his brow lifted. In the air before his face hangs a pale dagger, its handle towards him and its point away, lighting the dark around it, with three small red drops on the blade. Four numbered red markers point to his mail shirt, his staring eye, the dagger and the drops on its blade.',
  describedBy: [
    { phrase: 'O valiant cousin! worthy gentleman!', at: [196, 298] },
    { phrase: 'a soldier, and afeard', at: [196, 52], to: [180, 102] },
    { phrase: 'Is this a dagger which I see before me', at: [300, 90], to: [268, 128] },
    { phrase: 'gouts of blood', at: [306, 138], to: [285, 158] },
  ],
  where: 'Act 1, Scene 2; Act 2, Scene 1; Act 5, Scene 1',
  note: 'The play tells us what Macbeth does, not what he looks like. Before we meet him he is the brave soldier; by the end of Act 2 he is seeing a dagger no one else can see.',
  artNote:
    'Shakespeare never describes his face or dress, so he wears the plain mail and cloak of an eleventh-century thane.',
}
