import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { Brooch, lerp2, PH, portraitGround, PortraitRule, PW, strands } from './common'

/**
 * Banquo. The play never says what he looks like, so he is drawn plainly, as
 * an eleventh-century thane: long hair, a long beard, a cloak pinned with a
 * ring brooch. What the play does say about him is what he will father. The
 * witches tell him "Thou shalt get kings, though thou be none" (1.3), and in
 * 4.1 Macbeth is shown "A show of eight kings". He tells the first "Thou art
 * too like the spirit of Banquo", and each after it is like the first.
 *
 * So he wears no crown, and he looks after eight crowned heads in his own
 * profile (the same outline, smaller and smaller) going away from him into
 * the dark, as his line goes on after him. Their crowns are the only red: Macbeth calls the
 * last "Thou other gold-bound brow", and the print, which has no gold, gives
 * the crowns the spot colour instead.
 *
 * Nothing of his murder in 3.3 or of his ghost's "gory locks" in 3.4 is shown.
 */

/** The head, hair and beard, facing right in a 0..200 by 0..320 frame. */
export const BANQUO_HEAD =
  'M66 226C54 202 44 170 42 134C40 98 52 66 78 48C100 32 130 28 150 36C162 42 168 56 168 70C169 80 170 86 171 92L168 99C174 110 181 120 187 131C189 135 187.5 139 183 139.5C179 140 176 141 174 143L179 155C184 170 186 196 181 220C177 234 169 246 159 252C151 246 145 236 141 226L140 252L68 252Z'
const HAIR =
  'M160 46C150 54 143 66 139 80C128 92 121 102 118 112L112 142C100 160 90 190 82 222L70 252L20 252L20 20L170 20Z'
const BEARD =
  'M118 112C120 124 126 136 134 144C146 154 158 158 166 158L178 159C184 172 186 196 181 220C177 234 169 246 159 252C151 246 145 236 141 226C132 212 118 200 110 184C104 168 104 146 108 130C110 122 114 116 118 112Z'
const MOUSTACHE =
  'M174 143C179 146 181 152 180 157C176 162 170 166 164 170C166 164 162 157 156 153C164 151 170 148 174 143Z'
const EAR =
  'M112 108C101 106 94 114 94 126C94 136 99 144 107 145C112 142 114 134 113 126C113 118 113 112 112 108Z'
export const BANQUO_BODY =
  'M54 240C32 248 12 264 0 288L-8 332L224 332C218 302 204 280 186 266C176 258 164 252 150 248C130 256 86 254 54 240Z'
const FOLDS = [
  [34, 262, 8, 320, 2.4, 3],
  [60, 258, 50, 324, 1.8, 2],
  [92, 262, 96, 326, 1.4, -1],
  [150, 262, 170, 324, 1.8, -2],
  [184, 276, 204, 326, 2.2, -2],
]

type Marks = { hair: string; beard: string; moustache: string; cheek: string; back: string }

const marksBySeed = new Map<number, Marks>()
function headMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Long hair from the crown to the shoulders.
  let hair = ''
  for (let i = 0; i < 40; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 40
    const sx = 150 - t * 34 + between(r, -2, 2)
    const sy = 40 + t * 74 + between(r, -2, 2)
    const ex = 40 + t * 44 + between(r, -5, 5)
    const ey = 110 + t * 136 + between(r, -4, 4)
    hair += gouge(sx, sy, ex, ey, between(r, 0.6, 1.2) * (1.3 - t * 0.5), between(r, -8, -3))
  }
  for (let i = 0; i < 60; i++) {
    const a = deg(between(r, 160, 292))
    const inset = between(r, 3, 11)
    const cx = 104 + Math.cos(a) * (62 - inset)
    const cy = 130 + Math.sin(a) * (98 - inset)
    const tx = -Math.sin(a) * 62
    const ty = Math.cos(a) * 98
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

  // A long beard, cut lighter than Macbeth's so the two men are not confused.
  const beard =
    strands(r, 34, lerp2([118, 116], [168, 158]), lerp2([110, 190], [164, 246]), [0.7, 1.4], 2) +
    strands(r, 18, lerp2([130, 170], [178, 176]), lerp2([140, 226], [172, 238]), [0.6, 1.1], 1.5)
  const moustache = strands(
    r,
    6,
    lerp2([174, 146], [178, 154]),
    lerp2([160, 156], [166, 168]),
    [0.5, 0.8],
    0.6,
  )

  let cheek = ''
  for (let rad = 12; rad < 26; rad += 3.8)
    cheek += arcDashes(r, 150 + between(r, -1, 1), 112, rad, deg(70), deg(140), [8, 20], [2, 5])
  let back = ''
  for (let rad = 40; rad < 150; rad += 3.2)
    back += arcDashes(r, 150, 118, rad, deg(96), deg(178), [8, 24], [1.2, 3.5])

  const m = { hair, beard, moustache, cheek, back }
  marksBySeed.set(seed, m)
  return m
}

/** Banquo's head and shoulders, lit from the front, in the 0..200 by 0..320 frame. */
export function BanquoHead({ uid, seed }: { uid: string; seed: number }) {
  const m = headMarks(seed)
  const clip = `${uid}-bq-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={BANQUO_HEAD} />
        </clipPath>
      </defs>
      <g fill={PAPER} stroke={PAPER} strokeWidth={2.6} strokeLinejoin="round">
        <path d={BANQUO_HEAD} />
        <path d={BANQUO_BODY} />
      </g>
      <g clipPath={`url(#${clip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.7} />
          <path d={m.cheek} strokeWidth={0.95} />
          <path d="M143 60Q152 57 161 61M141 70Q151 67 163 71" strokeWidth={1.1} />
          <path d="M170 136C164 140 160 146 158 152" strokeWidth={1.4} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={BANQUO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={FOLDS.map(([a, b, c, d, w, k]) => gouge(a, b, c, d, w, k)).join('')} fill={PAPER} />
      <Brooch x={122} y={262} rad={8} turn={-10} />
      <g clipPath={`url(#${clip})`}>
        <path d={BEARD} fill={INK} />
        <path d={m.beard} fill={PAPER} />
      </g>
      <path d={BANQUO_HEAD} fill="none" stroke={PAPER} strokeWidth={1.2} />
      <path d={MOUSTACHE} fill={INK} />
      <path d={m.moustache} fill={PAPER} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M108 114C101 116 99 124 101 132C102 136 105 138 108 135" strokeWidth={1.7} />
        <path d="M106 120C103 124 103 128 105 131" strokeWidth={1} />
        <path d="M179 137C174 134 174 128 180 127" strokeWidth={1.5} />
        <path d="M147 90Q157 86 167 91" strokeWidth={3.2} />
        <path d="M148 101Q155 97.5 164 101" strokeWidth={2.2} />
        <path d="M150 107Q157 108 163 104.5" strokeWidth={1.2} />
        <path d="M151 113Q157 115 162 112" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={158} cy={103} r={2.8} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
export function BanquoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9}>
      <path d={BANQUO_HEAD} />
      <path d={BANQUO_BODY} />
    </g>
  )
}

// ── The show of eight kings ────────────────────────────────────────────────

/**
 * One of the eight kings: Banquo's own outline cut off at the bust, since the
 * first is "too like the spirit of Banquo" and the rest are like the first,
 * with a plain crown of three points on the brow. In the head's frame.
 */
const KING_BUST =
  'M60 206C50 186 42 164 42 134C40 98 52 66 78 48C100 32 130 28 150 36C162 42 168 56 168 70C169 80 170 86 171 92L168 99C174 110 181 120 187 131C189 135 187.5 139 183 139.5C179 140 176 141 174 143L179 155C183 166 184 180 180 192C174 202 160 208 146 206C120 214 86 216 60 206Z'
/** The lit front of a king's face, from brow to beard. */
const KING_PROFILE =
  'M166 64C168 74 170 84 171 92L168 99C174 110 181 120 187 131C189 135 187.5 139 183 139.5C179 140 176 141 174 143L179 155C183 166 184 180 180 192'
const CROWN =
  'M54 70L158 46L163 68L59 94Z' + 'M70 68L63 26L93 62ZM105 60L107 14L130 56ZM139 52L152 8L162 50Z'
const KING_EYE = gouge(146, 104, 166, 101, 5, -0.8)

/** Figure frame to portrait: Banquo on the left, looking after his line. */
const S = 0.96
const DX = -4
const DY = 22
const PLACE = `translate(${DX} ${DY}) scale(${S})`
const toPortrait = (x: number, y: number): [number, number] => [DX + x * S, DY + y * S]

/** The eight kings: [x, y, scale] of each head in the portrait, nearest first. */
const KINGS: [number, number, number][] = (() => {
  const out: [number, number, number][] = []
  for (let i = 0; i < 8; i++) {
    const t = i / 7
    const ease = 1 - (1 - t) ** 1.6
    out.push([234 + ease * 72, 246 - ease * 212, 0.34 * (1 - t * 0.68)])
  }
  return out
})()

let cuts: string | undefined
function portraitCuts() {
  if (cuts) return cuts
  // The vision lights the dark along the line of kings, and his face.
  cuts = portraitGround('banquo', 1603, (x, y) =>
    clamp(0.08 + 0.9 * Math.max(0, 1 - Math.hypot(x - 262, (y - 130) * 0.8) / 130) ** 1.3),
  )
  return cuts
}

const kingAt = ([x, y, s]: [number, number, number]) =>
  `translate(${n(x)} ${n(y)}) scale(${s.toFixed(3)}) translate(-112 -122)`

/**
 * One of the kings, facing right like Banquo and centred on the head: a black
 * bust with a paper edge, the front of the face lit by the vision, an eye cut
 * in paper, and the red crown.
 */
function King({ at }: { at: [number, number, number] }) {
  const w = 1 / at[2]
  return (
    <g transform={kingAt(at)}>
      <path d={KING_BUST} fill={INK} stroke={INK} strokeWidth={10 * w} />
      <path d={KING_BUST} fill={INK} stroke={PAPER} strokeWidth={2.2 * w} />
      <path d={KING_PROFILE} fill="none" stroke={PAPER} strokeWidth={5 * w} strokeLinecap="round" />
      <path d={KING_EYE} fill={PAPER} />
      <path d={CROWN} fill={RED} stroke={INK} strokeWidth={1.6 * w} strokeLinejoin="round" />
    </g>
  )
}

function BanquoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      {/* the farthest king first, so each nearer one is cut over the one behind */}
      {[...KINGS].reverse().map((k) => (
        <King key={k[2]} at={k} />
      ))}
      <g transform={PLACE}>
        <BanquoKnockout />
        <BanquoHead uid={uid} seed={33} />
      </g>
      <PortraitRule />
    </>
  )
}

export const banquoPortrait: LinocutArt = { width: PW, height: PH, Draw: BanquoPortrait }

const BROW_AT = toPortrait(112, 44)
const KINGS_AT: [number, number] = [KINGS[2][0] - 6, KINGS[2][1] - 14]

export const banquo: Portrait = {
  name: 'Banquo',
  art: banquoPortrait,
  alt: 'A linocut portrait of Banquo in profile, facing right: a man with long hair to his shoulders and a long beard, bareheaded, in a dark cloak pinned with a ring brooch. Ahead of him, climbing away into the dark at the top right, goes a line of eight smaller heads with his own profile, each smaller and farther than the last, each wearing a red crown. Two numbered red markers point to his bare head and to the line of crowned heads.',
  // Both markers come from the one line of 1.3, split where the picture
  // splits: the bare head, then the kings. The second was "A show of eight
  // kings", a stage direction in 4.1; the comics test checks marker phrases
  // against the guide's verified quotations, which hold 1.3 but not that
  // direction, so the portrait was held back until it pointed at words the
  // guide can vouch for (26 September 2026).
  describedBy: [
    { phrase: 'though thou be none', at: [BROW_AT[0], 24], to: BROW_AT },
    { phrase: 'Thou shalt get kings', at: [306, 206], to: KINGS_AT },
  ],
  where: 'Act 1, Scene 3',
  note: 'The witches promise Macbeth the crown and Banquo the future. Banquo never wears a crown; the kings who come after him are his descendants, the first of them “too like the spirit of Banquo”.',
  artNote:
    'The play does not describe Banquo, so he is drawn plainly. Macbeth calls one of the kings a “gold-bound brow”; the print has no gold, so their crowns are red.',
}
