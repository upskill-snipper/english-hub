import type { ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'

import {
  COIF as NURSE_COIF,
  COIF_EDGE,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_NURSE,
  PARIS_BAND,
  PARIS_CAP,
  PARIS_HAIR,
  ROMEO_CURLS,
  ROMEO_HAIR,
  TONSURE,
  TONSURE_SHINE,
  TONSURE_STRANDS,
  VEIL_BAND,
  WHITE_BROW,
} from './acts-3-4-kit'
import {
  CAP,
  CAP_BAND,
  CIRCLET,
  COWL,
  COWL_CUTS,
  Cut,
  DOUBLET,
  DOUBLET_CUTS,
  EYE,
  EYE_DOWN,
  HAIR_CUTS,
  HEAD_MAN,
  HEAD_WOMAN,
  HEAD_YOUTH,
  HOOD_UP,
  MORION,
  OLD_BEARD,
  OLD_HAIR,
  VEIL,
  boot,
  cloak,
  cloakCuts,
  endAngle,
  fistCuts,
  gown,
  gownFolds,
  hand,
  line,
  shoe,
  smooth,
  type HandKind,
  type P,
  type Part,
} from './late-scenes-kit'
import { sheathed } from './verona-kit'

/**
 * The people of the last five moments, built from a pose: who they are (the
 * `look`, which sets the head, headwear and dress) and where their joints are.
 * One builder for all of them, so that Friar Lawrence has the same habit,
 * hood and tonsure in the four panels he is in, and Capulet the same cap and
 * beard in two.
 *
 * ONE OUTLINE PER PERSON ACROSS THE PLAY. Other artists drew these people
 * first, so their heads are taken from the kits of the earlier panels and not
 * redrawn: Romeo's curls, Paris's bonnet, the Nurse's coif, Capulet's full
 * white beard and white brow, Lady Capulet's veil band and the Friar's
 * tonsure from ./acts-3-4-kit.tsx. Capulet's cap, Montague's white hair and
 * beard and the Prince's circlet and dark beard are this file's and
 * ./late-scenes-kit.tsx's, and the earlier panels take them from here. The
 * Prince's circlet is printed in the spot colour, as it is in "A brawl in the
 * streets", so he is known by it.
 *
 * WHO IS NEW HERE. Balthasar, Romeo's man, is not described: a young servant
 * in a plain cap, booted for riding post ("presently took post", 5.1). Friar
 * John is of Lawrence's order ("Holy Franciscan Friar! Brother", 5.2), so he
 * wears the same habit, with his hood up, just in from the street. The
 * musicians and the Watch are not described: young men in doublets, and
 * watchmen in iron caps. Nothing is taken from a film or stage production.
 */

/** Who a figure is. */
export type Look =
  | 'friar'
  | 'friar-hood'
  | 'capulet'
  | 'montague'
  | 'prince'
  | 'lady'
  | 'nurse'
  | 'romeo'
  | 'paris'
  | 'youth'
  | 'servant'
  | 'watch'

type Arm = { arm: P[]; hand?: HandKind; deg?: number; thumb?: 1 | -1 }

/** A pose in the figure's own frame: facing right, feet at (0, 0), about 196 tall. */
export interface Pose {
  look: Look
  /** The head's centre, its tilt in degrees (forward is positive) and its scale. */
  head?: { at?: P; rot?: number; s?: number }
  /** Arms from the shoulder through the elbow to the wrist, with the hand at the wrist. */
  far?: Arm
  near?: Arm
  /** Legs from the hip through the knee to the foot, for the men in doublets. */
  legs?: { far: P[]; near: P[] }
  /** A gown's hem half-width, how far the hem leans, how far the back is bowed. */
  body?: { hem?: number; lean?: number; stoop?: number; top?: number }
  /** A short cloak on the back, and how far it swings. */
  cloak?: number
  eye?: 'open' | 'down' | 'none'
  /** Bareheaded: no cap (Balthasar with his cap in his hand). */
  bare?: boolean
  /** A sword sheathed at the hip, as Romeo wears his in every panel (./verona-kit.tsx). */
  sword?: boolean
}

/** A short dark beard along the jaw, for the Prince. */
export const HEAD_BEARD =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L18 9C19 14 17 20 12 23C9 24.5 7 24 5.5 23Z'
/**
 * The strands of that beard, cut along the jaw from the ear to the chin, and
 * the line of the mouth above them. A dark beard on an ink head is otherwise
 * only a squarer chin: the review of 26 September 2026 found the Prince's and
 * the Chorus's beards, named in their alt text, invisible at panel size. Cut
 * in the figure's edge colour, in the head's frame.
 */
export const BEARD_CUTS =
  gouge(-3, 4, 0, 15, 1, -0.6) +
  gouge(3.5, 11, 5.5, 21, 1.1, -0.4) +
  gouge(9, 13, 10.5, 22, 1.1, -0.2) +
  gouge(14, 12.5, 15, 19.5, 1) +
  gouge(13, 9.6, 18.2, 9.2, 0.8)

/** Balthasar's cap: a plain round cap with a turned-up brim. */
export const SERVANT_CAP =
  'M-17 -5C-19 -14 -12 -23 -1 -24C9 -25 16 -20 17.5 -12L19 -9C12 -8 2 -8.5 -6 -8C-11 -7.6 -14.5 -6.5 -17 -5Z'

const GOWNED: Look[] = ['friar', 'friar-hood', 'capulet', 'montague', 'prince', 'lady', 'nurse']
const rad = (d: number) => (d * Math.PI) / 180
const r1 = (v: number) => Math.round(v * 10) / 10

/** A friar's wide sleeve, flaring at the wrist. */
function cuff(a: Arm): Part {
  const w = a.arm[a.arm.length - 1]
  const d = rad(endAngle(a.arm))
  const u: P = [Math.cos(d), Math.sin(d)]
  const v: P = [-u[1], u[0]]
  const b: P = [w[0] - u[0] * 8, w[1] - u[1] * 8]
  const q = (p: P) => `${r1(p[0])} ${r1(p[1])}`
  return {
    d: `M${q([b[0] + v[0] * 5.5, b[1] + v[1] * 5.5])}L${q([w[0] + v[0] * 8.5, w[1] + v[1] * 8.5])}L${q([w[0] - v[0] * 8.5, w[1] - v[1] * 8.5])}L${q([b[0] - v[0] * 5.5, b[1] - v[1] * 5.5])}Z`,
  }
}

/** A friar's sandalled foot showing at the hem, toes to the right. */
const sandal = (x: number): Part => ({
  d: `M${r1(x)} -5L${r1(x + 16)} -4C${r1(x + 20)} -3 ${r1(x + 20)} 1 ${r1(x + 16)} 1L${r1(x)} 1Z`,
})

function headOf(look: Look) {
  if (look === 'youth') return HEAD_YOUTH
  if (look === 'prince') return HEAD_BEARD
  if (look === 'lady') return HEAD_WOMAN
  if (look === 'nurse') return HEAD_NURSE
  return HEAD_MAN
}

export function build(p: Pose) {
  const look = p.look
  const gowned = GOWNED.includes(look)
  const friar = look === 'friar' || look === 'friar-hood'
  const woman = look === 'lady' || look === 'nurse'
  const h = p.head ?? {}
  const hAt = h.at ?? [3, -176]
  const headT = `translate(${hAt[0]} ${hAt[1]}) rotate(${h.rot ?? 0}) scale(${h.s ?? 1})`
  const armW = friar ? 11 : woman ? 8 : 8.6
  const handOf = (a: Arm) => {
    if (!a.hand) return []
    const wrist = a.arm[a.arm.length - 1]
    return hand(a.hand, wrist, a.deg ?? endAngle(a.arm), 1, a.thumb ?? 1)
  }
  const armParts = (a: Arm, near: boolean): Part[] => [
    { d: smooth(a.arm), w: armW, sep: near ? 1.4 : undefined },
    ...(friar ? [cuff(a)] : []),
    ...handOf(a),
  ]
  const legParts = ([hip, knee, foot]: P[]): Part[] =>
    look === 'servant'
      ? [{ d: line([hip, knee]), w: 8.6 }, ...boot(knee, foot)]
      : [{ d: line([hip, knee, [foot[0], foot[1] - 5]]), w: 8 }, shoe(foot)]
  const b = p.body ?? {}
  const hem = b.hem ?? (woman ? 36 : friar ? 30 : 28)
  const top = b.top ?? -156
  const lean = b.lean ?? 0
  const hat = !p.bare

  const parts: Part[] = []
  if (p.far) parts.push(...armParts(p.far, false))
  if (p.legs) parts.push(...legParts(p.legs.far))
  if (p.cloak !== undefined) parts.push({ d: cloak(p.cloak) })
  if (friar) parts.push(sandal(hem * 0.42 + lean), sandal(-hem * 0.3 + lean))
  const sword = p.sword ? sheathed([0, -92], 1, 76) : undefined
  if (sword) parts.push(sword.scabbard)
  parts.push({ d: gowned ? gown({ top, hem, lean, stoop: b.stoop ?? 0 }) : DOUBLET })
  if (p.legs) parts.push(...legParts(p.legs.near))
  if (look === 'friar') parts.push({ d: COWL })
  if (look === 'lady') parts.push({ d: VEIL, t: headT })
  if (look === 'friar-hood') parts.push({ d: HOOD_UP, t: headT })
  if (look === 'montague') parts.push({ d: OLD_BEARD, t: headT })
  if (look === 'capulet') parts.push({ d: FULL_BEARD, t: headT })
  if (look === 'romeo') parts.push({ d: ROMEO_HAIR, t: headT })
  if (look === 'paris') parts.push({ d: PARIS_HAIR, t: headT })
  parts.push({ d: headOf(look), t: headT })
  if (hat && look === 'capulet') parts.push({ d: CAP, t: headT })
  if (hat && look === 'paris') parts.push({ d: PARIS_CAP, t: headT })
  if (hat && look === 'prince') parts.push({ d: CIRCLET, t: headT })
  if (hat && look === 'watch') parts.push({ d: MORION, t: headT })
  if (hat && look === 'servant') parts.push({ d: SERVANT_CAP, t: headT })
  if (look === 'nurse') parts.push({ d: NURSE_COIF, t: headT })
  if (p.near) parts.push(...armParts(p.near, true))

  let cuts = ''
  if (gowned) cuts += gownFolds({ top, hem, lean })
  else cuts += DOUBLET_CUTS
  if (look === 'friar') cuts += COWL_CUTS
  // the Nurse's apron: its edge and the tie at her waist
  if (look === 'nurse')
    cuts += gouge(6, -96, 26 + lean * 0.8, -8, 1.2, -1) + gouge(-2, -99, 28, -98, 0.9)
  // the Prince's chain of office, hung across his gown
  if (look === 'prince')
    cuts += gouge(-9, -150, 13, -124, 0.9, 3) + gouge(-4, -151, 14, -134, 0.7, 2)
  if (p.cloak !== undefined) cuts += cloakCuts(p.cloak)
  for (const a of [p.far, p.near])
    if (a?.hand === 'fist') cuts += fistCuts(a.arm[a.arm.length - 1], a.deg ?? endAngle(a.arm))
  return { parts, cuts, headT, lean, hat, hilt: sword?.hilt }
}

/**
 * A figure placed with its feet at `at`, scaled, turned to face left with
 * `flip`, and leant with `tilt`. The features are cut on top; `children` are
 * drawn last in the figure's own frame (a lantern, a letter, a lit face).
 */
export function Figure({
  pose,
  at,
  scale = 1,
  flip = false,
  tilt = 0,
  tone = 'ink',
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  /** Degrees the whole figure leans about its feet: negative leans back. */
  tilt?: number
  tone?: 'ink' | 'paper'
  children?: ReactNode
}) {
  const { parts, cuts, headT, lean, hat, hilt } = build(pose)
  const look = pose.look
  const fg = tone === 'ink' ? INK : PAPER
  const edge = tone === 'ink' ? PAPER : INK
  const eye = pose.eye ?? 'open'
  const friar = look === 'friar' || look === 'friar-hood'
  return (
    <Cut
      parts={parts}
      cuts={cuts}
      tone={tone}
      transform={`translate(${at[0]} ${at[1]}) scale(${flip ? -scale : scale} ${scale})${tilt ? ` rotate(${tilt})` : ''}`}
    >
      {friar && (
        // the knotted cord at the waist, its end hanging, as in "Banished"
        <>
          <path
            d={`M-15 -98C-4 -96 8 -96 17 -99M6 -97C${r1(6 + lean * 0.2)} -76 ${r1(5 + lean * 0.3)} -58 ${r1(6 + lean * 0.4)} -40`}
            stroke={edge}
            strokeWidth={1.8}
            fill="none"
          />
          <g fill={edge}>
            <circle cx={r1(6 + lean * 0.1)} cy={-78} r={2.4} />
            <circle cx={r1(5.5 + lean * 0.25)} cy={-60} r={2.4} />
            <circle cx={r1(6 + lean * 0.4)} cy={-40} r={2.6} />
          </g>
        </>
      )}
      <g transform={headT}>
        {look === 'capulet' && (
          <>
            <path d={FULL_BEARD} fill={edge} stroke={fg} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={fg} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={edge} />
          </>
        )}
        {look === 'montague' && (
          <>
            <path d={OLD_BEARD} fill={edge} stroke={fg} strokeWidth={1.3} strokeLinejoin="round" />
            <path d={OLD_HAIR} fill={edge} stroke={fg} strokeWidth={1.3} strokeLinejoin="round" />
            <path
              d="M15 10C16 17 15 24 12 30M11.5 18C12 23 11 27 9.5 30.5"
              fill="none"
              stroke={fg}
              strokeWidth={0.8}
            />
          </>
        )}
        {look === 'nurse' && (
          <>
            <path d={NURSE_COIF} fill={edge} />
            <path d={COIF_EDGE} fill="none" stroke={fg} strokeWidth={1.2} />
          </>
        )}
        {look === 'capulet' && hat && <path d={CAP_BAND} fill={edge} />}
        {look === 'prince' && <path d={BEARD_CUTS} fill={edge} />}
        {look === 'lady' && <path d={VEIL_BAND} fill={edge} />}
        {look === 'romeo' && <path d={ROMEO_CURLS} fill={edge} />}
        {look === 'paris' && hat && <path d={PARIS_BAND} fill={edge} />}
        {look === 'servant' && hat && (
          // the turned-up brim of Balthasar's cap, so it reads as a cap
          <path d={gouge(-16, -7.5, 18, -11, 1, -0.6)} fill={edge} />
        )}
        {(look === 'youth' || (look === 'servant' && !hat)) && <path d={HAIR_CUTS} fill={edge} />}
        {look === 'friar' && (
          <>
            <path d={TONSURE} fill={edge} />
            <path d={TONSURE_SHINE} fill={edge} />
            <path d={TONSURE_STRANDS} fill="none" stroke={fg} strokeWidth={0.9} />
          </>
        )}
        {look === 'friar-hood' && (
          <path d={gouge(13, -12, 1, 22, 0.8, 2) + gouge(-6, -22, -20, 12, 0.8, 2.4)} fill={edge} />
        )}
        {look === 'prince' && hat && (
          <path d={CIRCLET} fill={RED} stroke={fg} strokeWidth={1.4} strokeLinejoin="round" />
        )}
        {eye !== 'none' && <path d={eye === 'down' ? EYE_DOWN : EYE} fill={edge} />}
      </g>
      {hilt && <path d={hilt} fill={edge} stroke={fg} strokeWidth={0.8} />}
      {children}
    </Cut>
  )
}
