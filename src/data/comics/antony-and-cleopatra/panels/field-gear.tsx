import { INK, PAPER } from '@/components/comics/linocut/palette'
import { deg, gouge, n } from '@/components/comics/linocut/carve'

import type { P } from './people'

/**
 * What the soldiers of Act 4 carry, cut once for the panels of moments 16 to
 * 20 and drawn as children of the kit's `Person` (./people.tsx), in the
 * figure's own frame (facing right, feet at 0, 0).
 *
 * NO SWORD IS CUT HERE, by this play's rule (./people.tsx): five of its deaths
 * come by the characters' own hands, two of them by the sword, so the
 * soldiers carry a spear, a shield or a trumpet, never a blade.
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

/**
 * A spear held upright in the hand at `grip`: a long shaft with a leaf-shaped
 * head, paper with an ink edge so it reads on dark ground and light. Give the
 * arm holding it the hand 'grip'.
 */
export function Spear({ grip, top = -252, foot = -2 }: { grip: P; top?: number; foot?: number }) {
  const x = grip[0]
  const head = `M${n(x)} ${n(top - 22)}C${n(x + 4)} ${n(top - 14)} ${n(x + 3.6)} ${n(top - 6)} ${n(x + 1.4)} ${n(top)}L${n(x - 1.4)} ${n(top)}C${n(x - 3.6)} ${n(top - 6)} ${n(x - 4)} ${n(top - 14)} ${n(x)} ${n(top - 22)}Z`
  return (
    <g>
      <path d={`M${n(x)} ${n(foot)}V${n(top)}`} stroke={PAPER} strokeWidth={5.6} />
      <path d={`M${n(x)} ${n(foot)}V${n(top)}`} stroke={INK} strokeWidth={3} />
      <path d={head} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
    </g>
  )
}

/**
 * A round target, a soldier's shield, carried on the far arm and seen from
 * the front: "Bear our hacked targets like the men that owe them" (4.8).
 * `hacked` bites notches out of its rim and scores its face; nothing is ever
 * drawn on the man behind it. Ink, its rim and boss cut in paper.
 */
export function Target({ at, r = 26, hacked = false }: { at: P; r?: number; hacked?: boolean }) {
  const [cx, cy] = at
  let d = ''
  const k = 32
  for (let i = 0; i < k; i++) {
    const a = (i / k) * Math.PI * 2
    // the hacked rim: three deep bites out of it
    const bite = hacked && (i === 3 || i === 13 || i === 22) ? 0.74 : 1
    d += `${i ? 'L' : 'M'}${n(cx + Math.cos(a) * r * bite)} ${n(cy + Math.sin(a) * r * bite)}`
  }
  d += 'Z'
  // The face is ink with its edge and a small boss cut in paper, and the
  // light on its curve as two arcs: a broad paper ring inside the rim read as
  // a lifebuoy at panel size, and was taken out.
  const arc = (r0: number, a0: number, a1: number) =>
    `M${n(cx + Math.cos(a0) * r0)} ${n(cy + Math.sin(a0) * r0)}A${n(r0)} ${n(r0)} 0 0 1 ${n(cx + Math.cos(a1) * r0)} ${n(cy + Math.sin(a1) * r0)}`
  return (
    <g>
      <path d={d} fill={INK} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" />
      <path
        d={
          arc(r * 0.72, Math.PI * 1.08, Math.PI * 1.42) +
          arc(r * 0.72, Math.PI * 1.58, Math.PI * 1.9)
        }
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={n(r * 0.17)} fill={PAPER} stroke={INK} strokeWidth={1} />
      {hacked && (
        <path
          d={
            gouge(cx - r * 0.66, cy + r * 0.08, cx - r * 0.3, cy + r * 0.5, 1.1) +
            gouge(cx + r * 0.2, cy + r * 0.56, cx + r * 0.62, cy + r * 0.22, 1.1)
          }
          fill={PAPER}
        />
      )}
    </g>
  )
}

/**
 * A long straight trumpet raised to the lips: "Trumpeters, With brazen din
 * blast you the city’s ear" (4.8). From the mouthpiece at `lips` along
 * `angle` (degrees clockwise from the right, so -24 points up and ahead),
 * `len` long, to a flared bell. Paper with an ink edge, and never red: it is
 * at a mouth.
 */
export function Trumpet({
  lips,
  angle = -24,
  len = 96,
}: {
  lips: P
  angle?: number
  len?: number
}) {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    lips[0] + u[0] * x + v[0] * y,
    lips[1] + u[1] * x + v[1] * y,
  ]
  // the tube, then a bell that flares wide over its last fifth
  const tube =
    `M${pt(at(0, -1.8))}L${pt(at(len - 22, -2.2))}Q${pt(at(len - 6, -3))} ${pt(at(len, -11))}` +
    `L${pt(at(len, 11))}Q${pt(at(len - 6, 3))} ${pt(at(len - 22, 2.2))}L${pt(at(0, 1.8))}Z`
  return (
    <g>
      <path d={tube} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path
        d={`M${pt(at(len - 2.4, -9))}L${pt(at(len - 2.4, 9))}`}
        stroke={INK}
        strokeWidth={1.2}
      />
    </g>
  )
}
