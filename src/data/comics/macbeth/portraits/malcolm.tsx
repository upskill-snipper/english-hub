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

import { Brooch, mailRings, PH, portraitGround, PortraitRule, PW } from './common'

/**
 * Malcolm, Duncan's elder son. The play never describes his face, but it says
 * twice that he is young: "I am young" (his own words to Macduff, 4.3) and
 * Macbeth's sneer, "What's the boy Malcolm?" (5.3). So he is beardless, the
 * youngest face in the set. The one thing the play puts in his hands is his
 * own order at Birnam Wood (5.4): "Let every soldier hew him down a bough, /
 * And bear’t before him", so he carries a leafy bough before him, the wood
 * that comes to Dunsinane.
 *
 * He wears the mail and pinned cloak of an eleventh-century prince, and no
 * crown: he is hailed king at the very end and will be "crown’d at Scone"
 * after the play is over. There is no red in this plate.
 */

/** The head, young and beardless, facing right in a 0..200 by 0..320 frame. */
export const MALCOLM_HEAD =
  'M66 214C56 192 44 164 42 132C40 98 52 66 78 48C100 32 130 28 150 38C162 46 167 60 167 74C168 82 169 88 170 93L167 100C172 111 178 120 183 129C185 133 183.5 137 179.5 137.5C176 138 173.5 139.5 172.5 142C173.5 145 174 147 172 149.5C171 151 171.5 153 172.5 155C173 158 171.5 160 169.5 161C172 166 173 174 171 181C167 188 156 190 144 189C136 191 131 196 130 200C127 202 127 206 128 210L128 226L68 226Z'
const HAIR =
  'M152 40C144 50 138 62 134 76C126 88 120 100 118 114L112 138C98 150 84 162 70 172L50 178L20 178L20 20L170 20Z'
const EAR =
  'M110 108C99 106 92 114 92 126C92 136 97 144 105 145C110 142 112 134 111 126C111 118 111 112 110 108Z'
export const MALCOLM_BODY =
  'M54 214C32 222 12 240 0 264L-8 322L224 322C218 284 204 260 186 246C174 236 160 230 144 226C124 234 84 232 54 214Z'
const CLOAK =
  'M54 214C32 222 12 240 0 264L-8 322L122 322C116 290 108 266 100 248C94 238 86 230 78 224C70 224 62 220 54 214Z'
const MAIL_CLIP =
  'M78 224C86 230 94 238 100 248C108 266 116 290 122 322L224 322C218 284 204 260 186 246C174 236 160 230 144 226C124 234 98 232 78 224Z'

type Marks = { hair: string; back: string; jaw: string; mail: string; cloak: string }

const marksBySeed = new Map<number, Marks>()
function headMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Short dark hair, cut in paper strands, with a rim of light along the edge.
  let hair = ''
  for (let i = 0; i < 38; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 38
    const sx = 150 - t * 32 + between(r, -2, 2)
    const sy = 42 + t * 70 + between(r, -2, 2)
    const ex = 50 + t * 34 + between(r, -4, 4)
    const ey = 66 + t * 100 + between(r, -4, 4)
    hair += gouge(sx, sy, ex, ey, between(r, 0.6, 1.1) * (1.25 - t * 0.5), between(r, -7, -2))
  }
  for (let i = 0; i < 54; i++) {
    const a = deg(between(r, 150, 292))
    const inset = between(r, 3, 10)
    const cx = 104 + Math.cos(a) * (62 - inset)
    const cy = 128 + Math.sin(a) * (94 - inset)
    const tx = -Math.sin(a) * 62
    const ty = Math.cos(a) * 94
    const tl = Math.hypot(tx, ty)
    const L = between(r, 6, 14)
    hair += gouge(
      cx + (tx / tl) * L * 0.5,
      cy + (ty / tl) * L * 0.5,
      cx - (tx / tl) * L * 0.5,
      cy - (ty / tl) * L * 0.5,
      between(r, 0.5, 1) * (inset < 6 ? 1.2 : 0.8),
      between(r, -1, 1),
    )
  }

  let back = ''
  for (let rad = 44; rad < 140; rad += 3.3)
    back += arcDashes(r, 150, 118, rad, deg(100), deg(176), [8, 24], [1.5, 4])
  // A young jaw: one clean line of shadow under it, nothing more.
  let jaw = ''
  jaw += 'M170 181C160 186 140 186 122 176'
  for (let i = 0; i < 7; i++) {
    const y = 186 + i * 3.4
    jaw += `M${n(100 - i * 1.5)} ${n(y)}L${n(150 - i * 5)} ${n(y + 1)}`
  }

  const mail = mailRings(r, { x0: 72, x1: 226, y0: 220, y1: 334 }, 5.4)
  const cloak =
    gouge(42, 244, 16, 320, 2.4, 3) +
    gouge(68, 238, 60, 322, 1.8, 2) +
    gouge(88, 248, 98, 324, 1.4, -1)

  const m = { hair, back, jaw, mail, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Malcolm's head and shoulders, lit from the front, in the 0..200 by 0..320 frame. */
export function MalcolmHead({ uid, seed }: { uid: string; seed: number }) {
  const m = headMarks(seed)
  const headClip = `${uid}-ml-head-${seed}`
  const mailClip = `${uid}-ml-mail-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MALCOLM_HEAD} />
        </clipPath>
        <clipPath id={mailClip}>
          <path d={MAIL_CLIP} />
        </clipPath>
      </defs>
      <g fill={PAPER} stroke={PAPER} strokeWidth={2.6} strokeLinejoin="round">
        <path d={MALCOLM_HEAD} />
        <path d={MALCOLM_BODY} />
      </g>
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.7} />
          <path d={m.jaw} strokeWidth={1.3} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={MALCOLM_BODY} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <g clipPath={`url(#${mailClip})`}>
        <path d={m.mail} fill="none" stroke={PAPER} strokeWidth={0.95} />
      </g>
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <Brooch x={96} y={232} rad={7.5} turn={-24} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 114C99 116 97 124 99 132C100 136 103 138 106 135" strokeWidth={1.6} />
        {/* nostril, the lips of a young face, and the chin */}
        <path d="M175 132C171 129 171 124 176 123" strokeWidth={1.4} />
        <path d="M172.5 142.5L161.5 143.5" strokeWidth={1.8} />
        <path d="M170 150C167 151.5 165 151.5 163 150.5" strokeWidth={1} />
        <path d="M166 162C162 165 162 170 166 173" strokeWidth={LINE.hairline} />
        {/* the line of the jaw, back to below the ear */}
        <path d="M166 187C150 191 132 187 119 173C115 166 112 158 110 150" strokeWidth={1.9} />
        {/* a level brow and a steady eye, looking ahead */}
        <path d="M146 88Q155 85 165 88.5" strokeWidth={3} />
        <path d="M147 98Q154 95 162 98.5" strokeWidth={2.1} />
        <path d="M148.5 104Q155 105 161 102" strokeWidth={1.1} />
      </g>
      <circle cx={156.2} cy={100.2} r={2.7} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
export function MalcolmKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9}>
      <path d={MALCOLM_HEAD} />
      <path d={MALCOLM_BODY} />
    </g>
  )
}

// ── The bough from Birnam Wood, in the portrait's own coordinates ──────────

/** The stem, from the bottom of the plate up in front of him. */
const STEM: Pt[] = [
  [238, 330],
  [246, 280],
  [256, 226],
  [264, 176],
  [272, 124],
  [284, 70],
  [298, 30],
]

type Bough = { stem: string; leaves: string; veins: string; halo: string }
let bough: Bough | undefined
function boughMarks(): Bough {
  if (bough) return bough
  const r = rng(504)
  const at = (t: number): Pt => {
    const f = t * (STEM.length - 1)
    const i = Math.min(STEM.length - 2, Math.floor(f))
    const u = f - i
    return [
      STEM[i][0] + (STEM[i + 1][0] - STEM[i][0]) * u,
      STEM[i][1] + (STEM[i + 1][1] - STEM[i][1]) * u,
    ]
  }
  let stem = ''
  for (let i = 0; i < STEM.length - 1; i++)
    stem += gouge(STEM[i][0], STEM[i][1], STEM[i + 1][0], STEM[i + 1][1], 4.2 - i * 0.6, 0.5)
  let leaves = ''
  let veins = ''
  let halo = ''
  for (let i = 0; i < 34; i++) {
    const t = 0.24 + (i / 33) * 0.76
    const [x, y] = at(t)
    const [x2, y2] = at(Math.min(1, t + 0.02))
    const up = Math.atan2(y2 - y, x2 - x)
    const side = i % 2 ? 1 : -1
    const a = up + side * deg(between(r, 38, 62))
    const len = between(r, 24, 34) * (1.1 - t * 0.4)
    const ex = x + Math.cos(a) * len
    const ey = y + Math.sin(a) * len
    const w = len * between(r, 0.3, 0.38)
    leaves += gouge(x, y, ex, ey, w, side * between(r, 0.5, 1.5))
    halo += gouge(x, y, ex, ey, w + 5, side * between(r, 0.5, 1.5))
    veins += `M${n(x)} ${n(y)}L${n(x + (ex - x) * 0.85)} ${n(y + (ey - y) * 0.85)}`
  }
  bough = { stem, leaves, veins, halo }
  return bough
}

const S = 1.08
const DX = -4
const DY = 10
const PLACE = `translate(${DX} ${DY}) scale(${S})`
const toPortrait = (x: number, y: number): [number, number] => [DX + x * S, DY + y * S]

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Morning light ahead of him, where the army is going.
  ground = portraitGround('malcolm', 1057, (x, y) =>
    clamp(0.1 + ((x - 40) / 290) * 0.85 - (y / PH) * 0.12),
  )
  return ground
}

function MalcolmPortrait({ uid }: ArtProps) {
  const b = boughMarks()
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={PLACE}>
        <MalcolmKnockout />
        <MalcolmHead uid={uid} seed={1057} />
      </g>
      {/* the bough he bears before him: an ink halo, then the leaves cut out of it */}
      <path d={b.halo} fill={INK} />
      <path d={b.stem} fill={INK} stroke={INK} strokeWidth={5} />
      <path d={b.leaves} fill={PAPER} />
      <path d={b.veins} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d={b.stem} fill={PAPER} />
      <PortraitRule />
    </>
  )
}

export const malcolmPortrait: LinocutArt = { width: PW, height: PH, Draw: MalcolmPortrait }

const FACE_AT = toPortrait(158, 128)

export const malcolm: Portrait = {
  name: 'Malcolm',
  art: malcolmPortrait,
  alt: 'A linocut portrait of Malcolm in profile, facing right: a young, beardless man with short dark hair and a steady look ahead, in a mail shirt with a cloak pinned by a ring brooch. Before him, held up from below the picture, a leafy bough cut from a tree rises past his face to the top. Two numbered red markers point to his young face and to the bough.',
  describedBy: [
    { phrase: 'the boy Malcolm', at: [216, 70], to: FACE_AT },
    { phrase: 'Let every soldier hew him down a bough', at: [306, 206], to: [272, 170] },
  ],
  where: 'Act 5, Scene 3; Act 5, Scene 4',
  note: 'Macbeth sneers at him as a boy. The boy’s order at Birnam Wood, that every soldier should cut a bough and carry it, is what makes the wood move to Dunsinane.',
  artNote:
    'The play never describes his face or dress; he wears no crown because he is only hailed king in the last scene.',
}
