import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { deg, n } from '@/components/comics/linocut/carve'

/**
 * Two things held in the play's last scene (Act 5, Scene 3), for the panels of
 * its last three moments: the trumpet that sounds for the duel, and the feather
 * Lear holds up for Cordelia's breath. The swords, the mail and Edgar's closed
 * helm are the figure kit's (./people.tsx: `Sword`, `armed`, `helm`). Drawn
 * plainly; the play names these things and describes none of them, and
 * nothing is taken from a film or stage production.
 *
 * - "Let the trumpet sound" ... "Third trumpet. Trumpet answers within. Enter
 *   Edgar, armed, preceded by a trumpet" ... "Trumpets, speak!": a long
 *   straight trumpet (`Trumpet`).
 * - "This feather stirs; she lives!": a small feather (`Feather`), drawn a
 *   little larger than life so it reads at panel size.
 */

export type P = [number, number]

/** A point `x` along and `y` across a direction `a` (degrees clockwise from the right) from `o`. */
function frame(o: P, a: number) {
  const u: P = [Math.cos(deg(a)), Math.sin(deg(a))]
  const v: P = [-u[1], u[0]]
  return (x: number, y: number): P => [o[0] + u[0] * x + v[0] * y, o[1] + u[1] * x + v[1] * y]
}
const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

/**
 * A long straight trumpet, from the mouthpiece at `mouth` along `angle`: the
 * tube, a boss halfway, and the bell flaring at the end. Ink, with a paper
 * halo so it reads against the sky and the people, and a paper line of light
 * along the tube.
 */
export function Trumpet({ mouth, angle, len = 74 }: { mouth: P; angle: number; len?: number }) {
  const at = frame(mouth, angle)
  const tube =
    `M${pt(at(0, -1.8))}L${pt(at(len - 16, -1.6))}Q${pt(at(len - 4, -2.6))} ${pt(at(len, -8))}` +
    `L${pt(at(len, 8))}Q${pt(at(len - 4, 2.6))} ${pt(at(len - 16, 1.6))}L${pt(at(0, 1.8))}Z`
  const m = len * 0.45
  const boss = `M${pt(at(m - 2.4, -3))}L${pt(at(m + 2.4, -3))}L${pt(at(m + 2.4, 3))}L${pt(at(m - 2.4, 3))}Z`
  return (
    <g>
      <path d={tube + boss} fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round" />
      <path d={tube + boss} fill={INK} />
      <path d={`M${pt(at(4, -0.4))}L${pt(at(len - 18, -0.4))}`} stroke={PAPER} strokeWidth={0.9} />
      <path
        d={`M${pt(at(len - 1.2, -6.4))}L${pt(at(len - 1.2, 6.4))}`}
        stroke={PAPER}
        strokeWidth={1}
      />
    </g>
  )
}

/**
 * A small feather held at its quill at `quill`, pointing along `angle`. What
 * tells a feather from a leaf at panel size (two first drafts with a smooth
 * edge read as a leaf, then a spoon): the bare quill below the vane, the vane
 * narrower on one side than the other, and its edge a saw of barb ends
 * slanting towards the tip, with a gap on each side where the barbs have
 * parted. Paper with an ink edge, the barbs cut back in ink. `len` is larger
 * than life: a real feather would vanish at panel size.
 */
export function Feather({ quill, angle, len = 30 }: { quill: P; angle: number; len?: number }) {
  const at = frame(quill, angle)
  const L = len
  // Each side of the vane is a row of barbs slanting towards the tip, so its
  // edge is a saw of their ends, not a smooth leaf's edge; one gap on each
  // side where the barbs have parted. The narrow side above the shaft (-y),
  // the broad side below.
  const side = (sign: 1 | -1, width: number, gap: number) => {
    const pts: P[] = []
    const steps = 9
    for (let k = 0; k <= steps; k++) {
      const t = 0.3 + (k / steps) * 0.68
      const swell = Math.sin(Math.PI * Math.min(1, (t - 0.28) / 0.74)) ** 0.6
      const w = width * L * swell * (Math.abs(t - gap) < 0.04 ? 0.35 : 1)
      // the end of a barb, out and forward, then back in towards the shaft
      pts.push(at(L * (t + 0.03), sign * w), at(L * (t + 0.06), sign * w * 0.72))
    }
    return pts
  }
  const top = side(-1, 0.1, 0.58)
  const bottom = side(1, 0.15, 0.7)
  const vane =
    `M${pt(at(L * 0.3, 0))}` +
    top.map((q) => `L${pt(q)}`).join('') +
    `L${pt(at(L, 0))}` +
    bottom
      .reverse()
      .map((q) => `L${pt(q)}`)
      .join('') +
    'Z'
  let barbs = ''
  for (let k = 0; k < 8; k++) {
    const t = 0.34 + k * 0.08
    barbs += `M${pt(at(L * t, 0))}L${pt(at(L * (t + 0.07), -L * 0.075))}`
    barbs += `M${pt(at(L * t, 0))}L${pt(at(L * (t + 0.09), L * 0.11))}`
  }
  return (
    <g>
      <path d={vane} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={barbs} fill="none" stroke={INK} strokeWidth={0.75} strokeLinecap="round" />
      {/* the shaft, bare below the vane and running up it nearly to the tip */}
      <path
        d={`M${pt(at(0, 0))}Q${pt(at(L * 0.5, -L * 0.02))} ${pt(at(L * 0.93, 0))}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3.2}
        strokeLinecap="round"
      />
      <path
        d={`M${pt(at(0, 0))}Q${pt(at(L * 0.5, -L * 0.02))} ${pt(at(L * 0.93, 0))}`}
        fill="none"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
  )
}
