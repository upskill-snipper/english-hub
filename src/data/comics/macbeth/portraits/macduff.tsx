import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { Brooch, lerp2, mailRings, PH, portraitGround, PortraitRule, PW, strands } from './common'

/**
 * Macduff, Thane of Fife, in England (4.3), at the moment Ross tells him his
 * wife and children have been killed. The play gives him one gesture and no
 * description: Malcolm says "What, man, ne'er pull your hat upon your brows. /
 * Give sorrow words." So his hat is pulled down over his brows, his head is
 * bowed and his eye is lowered, and his own answer to Malcolm's "Dispute it
 * like a man" is the marker: "But I must also feel it as a man".
 *
 * The picture carries the grief and nothing of the killing: no one else is in
 * it, and there is no red. His face, beard and dress are not described, so he
 * is drawn plainly: a short dark beard, a soft cap of the period, a mail shirt
 * under a pinned cloak. He faces left, so the figure is drawn facing right
 * and flipped.
 */

/** Head, hat and beard, facing right in a 0..200 by 0..320 frame, bowed a little. */
export const MACDUFF_HEAD =
  'M62 216C50 194 40 164 38 132C36 98 48 64 76 46C98 32 130 28 150 38C162 46 170 60 172 76L173 92L170 99C175 110 182 121 188 132C190 136 188.5 140 184 140.5C180 141 177 142 175 144L178 156C182 166 183 178 179 188C174 198 164 204 152 206C142 210 136 216 134 226L134 252L64 252Z'
/** The soft cap, pulled down to the brows. */
const HAT =
  'M40 120C30 96 32 66 56 48C80 32 120 26 148 34C166 40 176 56 177 74L178 94C150 90 118 92 88 104C70 110 54 118 40 120Z'
/** Its rolled edge, low over the brow. */
const BRIM =
  'M36 116C62 104 96 90 132 86C150 84 166 86 180 92L181 102C164 97 146 96 128 98C94 102 64 116 40 130Z'
const BEARD =
  'M118 118C120 130 126 140 134 148C146 156 158 160 168 160L178 160C182 168 183 178 179 188C174 198 164 204 152 206C140 208 128 204 120 196C112 186 106 168 108 148C110 134 113 124 118 118Z'
const MOUSTACHE =
  'M175 144C180 147 182 153 181 158C175 160 167 159 160 157C166 154 171 150 175 144Z'
const EAR =
  'M110 114C100 112 94 120 94 130C94 140 99 147 107 148C111 145 113 138 112 130C112 122 112 117 110 114Z'
export const MACDUFF_BODY =
  'M50 228C28 236 8 252 -4 276L-10 332L222 332C216 292 202 268 184 254C172 244 158 238 142 234C122 244 82 244 50 228Z'
const CLOAK =
  'M50 228C28 236 8 252 -4 276L-10 332L120 332C114 300 106 276 98 256C92 246 84 238 76 234C66 234 58 232 50 228Z'
const MAIL_CLIP =
  'M76 234C84 238 92 246 98 256C106 276 114 300 120 332L222 332C216 292 202 268 184 254C172 244 158 238 142 234C122 244 96 244 76 234Z'

type Marks = {
  hat: string
  beard: string
  moustache: string
  back: string
  cheek: string
  mail: string
  cloak: string
}

const marksBySeed = new Map<number, Marks>()
function headMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The soft cap: slack folds of cloth running round it, not up it.
  let hat = ''
  for (let i = 0; i < 5; i++) {
    const y = 48 + i * 11 + between(r, -2, 2)
    const x0 = 56 + i * 3 + between(r, 0, 10)
    const x1 = 160 - i * 2 - between(r, 0, 16)
    hat += gouge(x0, y + 14 - i * 1.5, x1, y - 4 + i * 2, between(r, 1.2, 2.2), between(r, 3, 6))
  }
  hat += gouge(70, 44, 120, 30, 1.6, 4)

  const beard =
    strands(r, 24, lerp2([120, 122], [168, 160]), lerp2([112, 170], [168, 202]), [0.5, 1], 1) +
    strands(r, 10, lerp2([126, 176], [174, 180]), lerp2([126, 200], [156, 205]), [0.45, 0.8], 0.8)
  const moustache = strands(
    r,
    5,
    lerp2([175, 147], [179, 155]),
    lerp2([162, 156], [170, 158]),
    [0.45, 0.7],
    0.5,
  )

  let back = ''
  for (let rad = 40; rad < 150; rad += 3.2)
    back += arcDashes(r, 150, 122, rad, deg(98), deg(176), [8, 24], [1.2, 3.5])
  // The shadow of the brim over the eye and cheek.
  let cheek = ''
  for (let rad = 10; rad < 26; rad += 3.4)
    cheek += arcDashes(r, 150, 114, rad, deg(60), deg(140), [8, 18], [2, 5])

  const mail = mailRings(r, { x0: 70, x1: 224, y0: 232, y1: 334 }, 5.4)
  const cloak =
    gouge(38, 256, 12, 320, 2.4, 3) +
    gouge(64, 250, 56, 322, 1.8, 2) +
    gouge(86, 260, 96, 324, 1.4, -1)

  const m = { hat, beard, moustache, back, cheek, mail, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Macduff's head and shoulders, hat pulled down, in the 0..200 by 0..320 frame. */
export function MacduffHead({ uid, seed }: { uid: string; seed: number }) {
  const m = headMarks(seed)
  const headClip = `${uid}-md-head-${seed}`
  const mailClip = `${uid}-md-mail-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MACDUFF_HEAD} />
        </clipPath>
        <clipPath id={mailClip}>
          <path d={MAIL_CLIP} />
        </clipPath>
      </defs>
      <g fill={PAPER} stroke={PAPER} strokeWidth={2.6} strokeLinejoin="round">
        <path d={MACDUFF_HEAD} />
        <path d={HAT} />
        <path d={BRIM} />
        <path d={MACDUFF_BODY} />
      </g>
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.7} />
          <path d={m.cheek} strokeWidth={1} />
          <path d="M172 136C166 140 162 146 160 152" strokeWidth={1.4} />
        </g>
        <path d={BEARD} fill={INK} />
        <path d={m.beard} fill={PAPER} />
        {/* the back of the head below the cap: short dark hair */}
        <path
          d="M40 120C54 118 70 110 88 104L112 110L108 142C98 160 86 184 72 206L62 216L20 216Z"
          fill={INK}
        />
      </g>
      <path d={MACDUFF_BODY} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <g clipPath={`url(#${mailClip})`}>
        <path d={m.mail} fill="none" stroke={PAPER} strokeWidth={0.95} />
      </g>
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <Brooch x={94} y={248} rad={7.5} turn={-24} />
      <path d={HAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.hat} fill={PAPER} />
      {/* the shadow the brim throws across the brow and eye */}
      <path d="M128 98C146 96 164 97 181 102L178 112C164 108 146 108 128 110Z" fill={INK} />
      <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d="M44 120C70 108 100 96 132 92C150 90 166 91 178 96"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.1}
      />
      <path d={MOUSTACHE} fill={INK} />
      <path d={m.moustache} fill={PAPER} />
      <path d={gouge(166, 162, 179, 162, 1.2, 0.6)} fill={PAPER} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M107 120C101 122 99 130 101 137C102 141 105 142 108 139" strokeWidth={1.6} />
        <path d="M180 139C175 136 175 130 181 129" strokeWidth={1.5} />
        {/* the eye lowered: a heavy lid, and the line of grief under it */}
        <path d="M150 116Q158 120 166 116" strokeWidth={2.4} />
        <path d="M152 121Q158 123.5 164 120.5" strokeWidth={1} />
        <path d="M154 127Q159 129 164 126" strokeWidth={LINE.hairline} />
      </g>
    </g>
  )
}

/** A thick ink halo round head, hat and shoulders. */
export function MacduffKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MACDUFF_HEAD} />
      <path d={HAT} />
      <path d={BRIM} />
      <path d={MACDUFF_BODY} />
    </g>
  )
}

/** Figure frame to portrait: flipped so he faces left, the head bowed a little. */
const S = 1.1
const DX = 8
const DY = 8
const BOW = 10
const PLACE = `translate(${PW} 0) scale(-1 1) translate(${DX} ${DY}) scale(${S}) rotate(${BOW} 110 230)`
/** A point in the figure's frame, in the portrait's coordinates. */
function toPortrait(x: number, y: number): [number, number] {
  const a = deg(BOW)
  const rx = 110 + (x - 110) * Math.cos(a) - (y - 230) * Math.sin(a)
  const ry = 230 + (x - 110) * Math.sin(a) + (y - 230) * Math.cos(a)
  return [PW - (DX + rx * S), DY + ry * S]
}

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A grey, even light, falling from above: no source, no drama.
  ground = portraitGround('macduff', 1057, (x, y) =>
    clamp(0.5 - (y / PH) * 0.38 + (x < 120 ? 0.1 : 0)),
  )
  return ground
}

function MacduffPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={PLACE}>
        <MacduffKnockout />
        <MacduffHead uid={uid} seed={1057} />
      </g>
      <PortraitRule />
    </>
  )
}

export const macduffPortrait: LinocutArt = { width: PW, height: PH, Draw: MacduffPortrait }

const EYE_AT = toPortrait(160, 119)

export const macduff: Portrait = {
  name: 'Macduff',
  art: macduffPortrait,
  alt: 'A linocut portrait of Macduff in profile, facing left, his head bowed: a man with a short dark beard, a soft dark cap pulled down low over his brows, and a mail shirt under a cloak pinned with a ring brooch. The brim throws a shadow across his eye, which is lowered, heavy-lidded, in grief. One numbered red marker points to his lowered eye.',
  describedBy: [{ phrase: 'But I must also feel it as a man', at: [48, 176], to: EYE_AT }],
  where: 'Act 4, Scene 3',
  note: 'Told that his wife and children have been murdered, Macduff pulls his hat down over his eyes. When Malcolm tells him to “Dispute it like a man”, he answers that he must feel it first.',
  artNote:
    'The play describes only the gesture, not the man, so his beard, cap and mail are the plain dress of an eleventh-century thane.',
}
