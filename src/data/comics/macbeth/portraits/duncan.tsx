import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { Brooch, PH, portraitGround, PortraitRule, PW } from './common'

/**
 * Duncan, King of Scotland. The play's only word for how he looks is Lady
 * Macbeth's, remembering him in her sleep: "the old man" (5.1). In 2.2 she
 * says she could not kill him herself because "Had he not resembled / My
 * father as he slept, I had done’t", so he is an old man who could be
 * someone's father: white hair, a long white beard, a mild face.
 *
 * Everything else is plain eleventh-century dress for a king: a crown with
 * five points, the crown he wears in every Macbeth panel (CROWN in
 * ../panels/inverness-people.tsx), and a mantle pinned with a ring brooch.
 * REVIEWED 26 September 2026: the crown first had three points, so the king
 * in the gallery wore a different crown from the king in the panels. The crown takes the
 * spot colour, as the kings' crowns do in Banquo's portrait, because the crown
 * is what the play is about. Nothing of his murder is shown or suggested.
 */

/** The head, white hair and long white beard, facing right in a 0..200 by 0..320 frame. */
export const DUNCAN_HEAD =
  'M64 222C52 200 42 168 40 134C38 98 50 66 76 48C98 32 128 28 148 36C160 42 166 56 166 70C167 80 168 86 169 92L166 99C171 110 178 120 184 130C186 134 184.5 138 180 138.5C176 139 173 140 171 142L177 154C183 170 185 198 179 224C174 240 164 252 152 258C142 252 136 240 132 228L132 256L66 256Z'
const BEARD =
  'M114 116C118 128 124 138 132 146C144 154 156 158 164 158L176 158C183 170 185 198 179 224C174 240 164 252 152 258C142 252 136 240 132 228C122 214 110 200 104 182C100 166 102 146 106 132C108 124 111 119 114 116Z'
const MOUSTACHE =
  'M171 142C176 145 178 150 177 156C172 160 166 164 158 168C160 162 158 156 152 152C160 150 166 147 171 142Z'
const EAR =
  'M110 106C99 104 92 112 92 124C92 134 97 142 105 143C110 140 112 132 111 124C111 116 111 110 110 106Z'
export const DUNCAN_BODY =
  'M52 244C30 252 10 268 -2 292L-10 332L222 332C216 304 202 282 184 268C174 260 162 254 148 250C128 258 86 258 52 244Z'
/** The crown, level round his head just above the brow, and its five points. */
const CROWN =
  'M46 74L154 54L157 65L49 86Z' +
  'M48 73.6L54 54.1L64 70.7ZM71 69.4L77 45.9L87 66.4ZM94 65.1L100 39.6L110 62.2Z' +
  'M117 60.9L123 37.4L133 57.9ZM139 56.8L146 37.3L154 54Z'

type Marks = {
  hair: string
  beard: string
  moustache: string
  brow: string
  wrinkles: string
  back: string
  mantle: string
}

const marksBySeed = new Map<number, Marks>()
function headMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // White hair: fine ink strands over paper, from the hairline over the
  // skull and back to the nape, closer together at the back where the light
  // does not reach.
  let hair = ''
  for (let i = 0; i < 44; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 44
    // along the hairline, from the top of the forehead down to the ear
    const sx = 150 - t * 36 + between(r, -2, 2)
    const sy = 40 + t * 72 + between(r, -2, 2)
    // to the back of the head and the nape
    const a = deg(250 - t * 110)
    const ex = 104 + Math.cos(a) * between(r, 50, 62)
    const ey = 128 + Math.sin(a) * between(r, 84, 96) + t * 20
    const pts: Pt[] = []
    for (let k = 0; k <= 9; k++) {
      const u = k / 9
      pts.push([
        sx + (ex - sx) * u - Math.sin(Math.PI * u) * 8,
        sy + (ey - sy) * u - Math.sin(Math.PI * u) * 12 + Math.sin(u * 6 + i) * 1.2,
      ])
    }
    hair += ribbon(pts, between(r, 0.8, 1.4) * (0.7 + t * 0.6), 0.8)
  }
  // Short strokes along the outer edge, so the dome of the head reads as hair.
  for (let i = 0; i < 70; i++) {
    const a = deg(between(r, 150, 290))
    const cx = 104 + Math.cos(a) * between(r, 54, 62)
    const cy = 130 + Math.sin(a) * between(r, 88, 96)
    const tx = -Math.sin(a)
    const ty = Math.cos(a)
    const L = between(r, 5, 12)
    hair += gouge(
      cx + tx * L,
      cy + ty * L,
      cx - tx * L,
      cy - ty * L,
      between(r, 0.5, 0.9),
      between(r, -0.8, 0.8),
    )
  }

  // A long white beard in waves: ink lines between paper locks.
  let beard = ''
  for (let i = 0; i < 22; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 22
    const x0 = 116 + t * 52 + between(r, -2, 2)
    const y0 = 124 + t * 36 + between(r, -2, 2)
    const x1 = 108 + t * 64 + between(r, -3, 3)
    const y1 = 200 + t * 52 + between(r, -4, 4)
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const u = k / 10
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 7 + i * 0.7) * 2.2, y0 + (y1 - y0) * u])
    }
    beard += ribbon(pts, between(r, 0.8, 1.5), 0.8)
  }
  // The far side of the beard, towards the neck, in shadow.
  for (let i = 0; i < 14; i++) {
    const t = i / 13
    const x0 = 110 + t * 22
    const y0 = 150 + t * 20
    beard += ribbon(
      [
        [x0, y0],
        [x0 + 6, y0 + 30],
        [x0 + 14 + t * 6, y0 + 64 - t * 10],
      ],
      between(r, 1.4, 2.4),
      0.8,
    )
  }
  const moustache =
    ribbon(
      [
        [172, 144],
        [168, 150],
        [162, 156],
        [156, 162],
      ],
      1.4,
      0.8,
    ) +
    ribbon(
      [
        [174, 148],
        [170, 155],
        [165, 161],
        [160, 167],
      ],
      1.2,
      0.8,
    )

  // Bushy white brows: short strokes of ink over paper.
  let brow = ''
  for (let i = 0; i < 12; i++) {
    const x = 146 + i * 1.8 + between(r, -0.5, 0.5)
    brow += `M${n(x)} ${n(90 - Math.sin((i / 11) * Math.PI) * 3)}l${n(between(r, 2, 4))} ${n(between(r, -2.5, 1))}`
  }

  // The lines of age: forehead, crow's feet, the cheek.
  let wrinkles = 'M141 64Q150 61 159 65M139 72Q149 69 161 73M141 80Q150 78 160 81'
  for (let i = 0; i < 4; i++)
    wrinkles += `M144 ${n(100 + i * 2.2)}L${n(135 - between(r, 0, 3))} ${n(96 + i * 4.5)}`
  wrinkles += 'M147 110Q154 113 161 109'
  for (let rad = 12; rad < 24; rad += 3.6)
    wrinkles += arcDashes(r, 146, 112, rad, deg(80), deg(140), [8, 16], [2, 5])

  let back = ''
  for (let rad = 70; rad < 150; rad += 3.4)
    back += arcDashes(r, 150, 118, rad, deg(112), deg(160), [8, 22], [2, 5])

  let mantle = ''
  for (let i = 0; i < 7; i++) {
    const x = between(r, 0, 210)
    mantle += gouge(
      x,
      between(r, 262, 280),
      x + between(r, -16, 14),
      334,
      between(r, 1.2, 2.4),
      between(r, -3, 3),
    )
  }

  const m = { hair, beard, moustache, brow, wrinkles, back, mantle }
  marksBySeed.set(seed, m)
  return m
}

/** Duncan's head and shoulders, crowned, in the 0..200 by 0..320 frame. */
export function DuncanHead({ uid, seed }: { uid: string; seed: number }) {
  const m = headMarks(seed)
  const clip = `${uid}-dn-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={DUNCAN_HEAD} />
        </clipPath>
      </defs>
      <path d={DUNCAN_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.mantle} fill={PAPER} />
      <Brooch x={112} y={276} rad={8} turn={-18} />
      <path d={DUNCAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        {/* the back of the neck, turned from the light */}
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        <path d={m.hair} fill={INK} />
        <path d={m.beard} fill={INK} />
      </g>
      <path d={MOUSTACHE} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={m.moustache} fill={INK} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 112C99 114 97 122 99 130C100 134 103 136 106 133" strokeWidth={1.6} />
        <path d={m.wrinkles} strokeWidth={LINE.hairline} />
        <path d={m.brow} strokeWidth={1.1} />
        {/* nostril, and the mild, heavy-lidded eye */}
        <path d="M176 133C171 130 171 124 177 123" strokeWidth={1.5} />
        <path d="M146 99Q153 96 162 99.5" strokeWidth={2.2} />
        <path d="M146.5 97Q153 94.5 160 96.5" strokeWidth={1} />
        <path d="M148 104.5Q155 106 161 102.5" strokeWidth={1.1} />
        {/* where beard meets cheek */}
        <path d="M114 116C118 128 124 138 132 146C142 153 152 157 162 158" strokeWidth={1.2} />
      </g>
      <circle cx={155.4} cy={101.2} r={2.5} fill={INK} />
      <path d={CROWN} fill={RED} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
export function DuncanKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={DUNCAN_HEAD} />
      <path d={DUNCAN_BODY} />
      <path d={CROWN} />
    </g>
  )
}

const S = 1.08
const DX = 8
const DY = 6
const PLACE = `translate(${DX} ${DY}) scale(${S})`
const toPortrait = (x: number, y: number): [number, number] => [DX + x * S, DY + y * S]

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Daylight from in front of him: "This castle hath a pleasant seat" is his.
  ground = portraitGround('duncan', 1040, (x, y) =>
    clamp(0.06 + ((x - 60) / 280) * 0.95 - (y / PH) * 0.15),
  )
  return ground
}

function DuncanPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={PLACE}>
        <DuncanKnockout />
        <DuncanHead uid={uid} seed={1040} />
      </g>
      <PortraitRule />
    </>
  )
}

export const duncanPortrait: LinocutArt = { width: PW, height: PH, Draw: DuncanPortrait }

const BEARD_AT = toPortrait(150, 206)

export const duncan: Portrait = {
  name: 'Duncan',
  art: duncanPortrait,
  alt: 'A linocut portrait of King Duncan in profile, facing right: an old man with white hair, bushy white brows, a lined face with a mild, heavy-lidded eye, and a long white beard falling in waves over a dark mantle pinned with a ring brooch. On his head is a plain crown with five points, printed in red. One numbered red marker points to his white beard.',
  describedBy: [{ phrase: 'the old man', at: [BEARD_AT[0] + 72, BEARD_AT[1] + 18], to: BEARD_AT }],
  where: 'Act 5, Scene 1',
  note: 'Lady Macbeth, walking in her sleep, remembers the king only as “the old man”. In Act 2 she could not kill him herself: “Had he not resembled / My father as he slept, I had done’t.”',
  artNote:
    'Nothing else in the play describes the living king, so his crown, mantle and brooch are the plain dress of an eleventh-century king.',
}
