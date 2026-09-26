import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, type Part } from './cut-figure'
import { flagFloor, stoneWall } from './dunsinane-kit'
import { HEAD_WOMAN, VEIL } from './inverness-people'

/**
 * Act 5, Scene 1: "The sleepwalking", the nineteenth moment in the guide's
 * timeline. Every detail is from the scene, as the site's reader prints it
 * (src/app/revision/texts/macbeth/read/page.tsx):
 *
 * - "Enter a Doctor of Physic and a Waiting-Gentlewoman." They have watched
 *   two nights for her. The Doctor: "I will set down what comes from her, to
 *   satisfy my remembrance the more strongly." So they stand back in the
 *   shadows on the left, the Doctor writing on a tablet, the Gentlewoman with
 *   her hand at her mouth.
 * - "Enter Lady Macbeth, with a taper." "How came she by that light?" "Why,
 *   it stood by her. She has light by her continually." So the taper stands
 *   by her on its iron stand, the only light in the room: its rays are cut
 *   into the dark stone, and it throws her shadow up the wall behind her.
 * - The Gentlewoman has seen her "rise from her bed, throw her nightgown upon
 *   her". So she walks in a long loose gown, her hair down.
 * - "You see, her eyes are open." "Ay, but their sense are shut." Her eyes
 *   are cut as open rings with nothing in them.
 * - "Look, how she rubs her hands." "It is an accustomed action with her, to
 *   seem thus washing her hands." Her hands are together before her, one
 *   rubbing the other. "Yet here's a spot." The spot colour marks one small
 *   spot on her hand, the blood she sees and nobody else can: a symbol, as
 *   the style guide allows, and no wound.
 * - The castle is Dunsinane, so its walls and floor are cut as in the other
 *   Act 5 panels (./dunsinane-kit.tsx). The scene gives no more of the room.
 *
 * Lady Macbeth's face is HEAD_WOMAN, as in every Macbeth panel she is in
 * (./inverness-people.tsx); tonight she has no veil, and her hair is loose,
 * falling as the veil falls. The Doctor is the older, bareheaded man in a
 * long girdled gown of Macbeth at bay (the same Doctor attends her in 5.3).
 * The Gentlewoman wears a plain gown and a veil. Nobody is described in the
 * text beyond this.
 *
 * The spot colour is the taper's flame and the spot. Nothing is taken from a
 * film or stage production. Seeds: 1901 (the wall), 1902 (the floor), 1903
 * (the taper's rays).
 */

const W = 860
const H = 340
const FLOOR = 262
/** The taper's flame: the only light in the room. */
const FLAME: [number, number] = [340, 146]

type Marks = {
  wall: { cuts: string; joints: string; edges: string }
  floor: string
  rays: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - FLAME[0]) * 0.85, (y - FLAME[1]) * 1.1) / 300), 0.03)
  const wall = stoneWall(rng(1901), { x0: 0, x1: W, y0: 0, y1: FLOOR }, light)
  // The floor is dark but for the pool the taper throws round its stand; the
  // joints of the flags are cut only there.
  const floor = flagFloor(rng(1902), W, H, FLOOR, [FLAME[0], 60])
  const tr = rays(rng(1903), FLAME[0], FLAME[1], { from: 16, to: 132, every: 7, width: 3 })
  cached = { wall, floor, rays: tr }
  return cached
}

// ── Lady Macbeth, facing right in her own frame, feet at (0, 0) ─────────────

const LADY_HEAD_AT = 'translate(4 -188) scale(1.1)'
/** Her hair, loose, falling down her back where the veil falls by day. */
const HAIR =
  'M11 -12C6 -21 -6 -22 -12.5 -15C-18 -8 -19.5 4 -20 16C-21 36 -25 58 -30 82L-26 78L-24 86L-20 80L-17 88L-14 80C-11 62 -8 42 -7 24C-7 10 -5 -1 1 -7.5C5 -11 8.5 -12.5 11 -12Z'
/** The nightgown, long and loose, trailing behind her. */
const GOWN =
  'M-10 -168C-20 -164 -25 -152 -25 -136C-26 -106 -30 -72 -36 -38C-40 -22 -46 -8 -52 0L40 0C36 -14 32 -32 29 -52C25 -82 23 -112 22 -134C21 -152 16 -164 8 -168Z'
/** Her two hands before her, the near one rubbing the far. */
const HAND_FAR =
  'M22 -126C27 -131 38 -132 44 -128C47 -125 45 -120 40 -119L26 -118.5C22 -119.5 20 -123 22 -126Z'
const HAND_NEAR =
  'M20 -138C26 -143 38 -144 45 -139C48 -136 47 -130 42 -128L27 -127C22 -128 19 -133 20 -138Z'
const LADY_PARTS: Part[] = [
  { d: GOWN },
  { d: HEAD_WOMAN, t: LADY_HEAD_AT },
  // the far arm, then the near, in wide sleeves
  { d: 'M-2 -156C0 -142 4 -130 12 -126C16 -124 20 -124 25 -124', w: 9 },
  { d: HAND_FAR },
  { d: 'M10 -158C14 -146 14 -136 18 -132C20 -131 23 -131 26 -132', w: 9.5, sep: 1.2 },
  { d: HAND_NEAR },
]
/** Folds of the gown, falling from the shoulders. */
const LADY_CUTS =
  gouge(-12, -150, -34, -8, 1, 1) +
  gouge(-4, -120, -12, -6, 1.1, 0.6) +
  gouge(8, -118, 8, -6, 1, -0.2) +
  gouge(18, -110, 28, -8, 0.9, -0.8) +
  gouge(-16, -100, -42, -6, 0.8, 0.8)
/** Strands of loose hair, the eye's open ring, the brow and the parted lips, in the head's frame. */
const HAIR_STRANDS =
  gouge(-6, -16, -14, 40, 0.55, -1) +
  gouge(-2, -14, -12, 64, 0.5, -1.2) +
  gouge(-12, -4, -22, 72, 0.55, -1.4) +
  gouge(-16, 10, -26, 76, 0.5, -1) +
  gouge(4, -16, -8, -12, 0.45)
const FACE_CUTS =
  gouge(4.5, -7.8, 11.5, -8.4, 0.75, -0.4) + 'M10.6 9.6Q12.4 9 13.4 10.2Q12.4 12.2 10.6 11.4Z'

// ── The watchers, facing right, feet at (0, 0) ──────────────────────────────

/** The Doctor, as in Macbeth at bay: an older man, bareheaded, in a long girdled gown. */
const DOC_GOWN =
  'M-6 -166C-15 -166 -21 -160 -23 -150C-26 -110 -29 -60 -32 -3L30 -3C27 -60 23 -110 19 -150C17 -160 10 -166 -6 -166Z'
const DOC_HEAD =
  'M-9 -186C-11 -195 -5 -200 3 -199C10 -198 13 -194 14 -189L14.4 -185.6L18.8 -180.4L15.2 -179L15.6 -176.4L14.4 -175.6L15 -173.2C14 -169 10 -167 6 -167L3 -164C-3 -166 -7 -173 -9 -186Z'
const DOC_HEAD_TURN = 'rotate(9 0 -166)'
const DOC_PARTS: Part[] = [
  { d: DOC_GOWN },
  { d: 'M16 -4L33 -4C36.5 -2.5 36.5 0 34 0L15 0Z' },
  { d: DOC_HEAD, t: DOC_HEAD_TURN },
  // the far arm, holding the tablet up before him
  { d: 'M-2 -156C0 -140 6 -130 16 -130C22 -132 26 -136 28 -140', w: 8.5 },
  // the near arm, writing on it
  { d: 'M8 -158C14 -146 16 -134 20 -128C24 -126 28 -128 32 -132', w: 9, sep: 1.4 },
]
/** His grey hair combed back, his brow and downcast eye, the folds and girdle of his gown. */
const DOC_CUTS =
  gouge(-12, -150, -18, -10, 1.2, 1.2) +
  gouge(-2, -120, -4, -8, 1, 0.6) +
  gouge(12, -108, 16, -8, 1.1, -1) +
  gouge(16, -156, 20, -118, 0.9, -0.5)
const DOC_FACE_CUTS =
  gouge(4, -197.6, -8, -186, 0.7, -1) +
  gouge(1, -197.4, -9.4, -181, 0.75, -1.2) +
  gouge(-2.6, -196.4, -9.6, -176, 0.7, -1) +
  gouge(5, -187.5, 13, -187, 0.9) +
  gouge(7.5, -183.2, 11.5, -182.2, 0.7, 0.3)

/** The Gentlewoman: a plain gown and a veil, her hand at her mouth. */
const GENT_HEAD_AT = 'translate(4 -176) scale(1.02)'
const GENT_PARTS: Part[] = [
  {
    d: 'M-9 -156C-18 -152 -22 -142 -22 -128C-23 -96 -26 -60 -30 -24C-32 -14 -34 -6 -36 0L32 0C30 -10 28 -22 26 -40C23 -70 21 -100 20 -124C19 -142 15 -152 8 -156Z',
  },
  { d: HEAD_WOMAN, t: GENT_HEAD_AT },
  { d: VEIL, t: GENT_HEAD_AT },
  { d: 'M8 -146C16 -136 20 -150 18 -164C18 -168 18 -170 17 -172', w: 7.5, sep: 1.4 },
  { d: 'M13 -176C16 -180 22 -180 24 -176L23 -169C20 -166 16 -166 14 -169Z' },
]
const GENT_CUTS =
  gouge(-10, -140, -26, -8, 1, 0.8) +
  gouge(2, -120, 2, -6, 1, -0.2) +
  gouge(-20, -114, 20, -116, 0.7)

/** Where each stands: [x, y of feet]. Lady Macbeth faces left, towards them. */
const LADY_AT: [number, number] = [486, 324]
const DOC_AT: [number, number] = [170, 320]
const GENT_AT: [number, number] = [96, 316]

/** The pool of light on the floor round the taper's stand. */
const POOL = `M${FLAME[0] - 250} ${H}C${FLAME[0] - 200} ${FLOOR + 14} ${FLAME[0] - 90} ${FLOOR + 2} ${FLAME[0] + 40} ${FLOOR + 2}C${FLAME[0] + 170} ${FLOOR + 2} ${FLAME[0] + 290} ${FLOOR + 16} ${FLAME[0] + 350} ${H}Z`

function Sleepwalking({ uid }: ArtProps) {
  const m = marks()
  const pool = `${uid}-pool`
  const ladyAt = `translate(${LADY_AT[0]} ${LADY_AT[1]}) scale(-1 1)`
  return (
    <>
      <defs>
        <clipPath id={pool}>
          <path d={POOL} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [FLAME[0] + 60, 170], push: 1.03 })}>
        {/* the stone room at Dunsinane, lit by one taper */}
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={INK} />
        <path d={m.wall.edges} fill={PAPER} />
        <path d={m.rays} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={POOL} fill={PAPER} />
        <g clipPath={`url(#${pool})`}>
          <path d={m.floor} fill={INK} />
        </g>

        {/* the arch she came through, dark behind her */}
        <path
          d="M664 262V140A58 58 0 0 1 780 140V262Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <path
          d="M672 262V142A50 50 0 0 1 772 142V262"
          fill="none"
          stroke={PAPER}
          strokeWidth={0.9}
        />

        {/* her shadow, thrown up the wall behind her by the taper */}
        <g
          transform={`translate(${LADY_AT[0] + 118} ${LADY_AT[1] - 60}) scale(-1.28 1.28)`}
          fill={INK}
        >
          <path d={GOWN} />
          <path d={HAIR} transform={LADY_HEAD_AT} />
          <path d={HEAD_WOMAN} transform={LADY_HEAD_AT} />
        </g>

        {/* the taper on its stand */}
        <path
          d={`M${FLAME[0]} 170V300M${FLAME[0] - 14} 312L${FLAME[0]} 296L${FLAME[0] + 14} 312`}
          stroke={INK}
          strokeWidth={4.4}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={`M${FLAME[0] - 12} 170H${FLAME[0] + 12}L${FLAME[0] + 8} 176H${FLAME[0] - 8}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <rect
          x={FLAME[0] - 4}
          y={FLAME[1] + 10}
          width={8}
          height={160 - FLAME[1]}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <circle
          className="lc-glow"
          cx={FLAME[0]}
          cy={FLAME[1]}
          r={13}
          fill="none"
          stroke={RED}
          strokeWidth={1.3}
        />
        <path
          className="lc-flicker"
          d={`M${FLAME[0]} ${FLAME[1] + 10}C${FLAME[0] - 5} ${FLAME[1] + 5} ${FLAME[0] - 4} ${FLAME[1] - 2} ${FLAME[0]} ${FLAME[1] - 12}C${FLAME[0] + 4} ${FLAME[1] - 2} ${FLAME[0] + 5} ${FLAME[1] + 5} ${FLAME[0]} ${FLAME[1] + 10}Z`}
          fill={RED}
        />

        {/* the Gentlewoman and the Doctor, watching from the shadows */}
        <CutFigure
          parts={GENT_PARTS}
          cuts={GENT_CUTS}
          transform={`translate(${GENT_AT[0]} ${GENT_AT[1]}) scale(0.96)`}
        >
          <path d={gouge(5.5, -3.2, 10, -3.6, 0.8)} transform={GENT_HEAD_AT} fill={PAPER} />
        </CutFigure>
        <CutFigure
          parts={DOC_PARTS}
          cuts={DOC_CUTS}
          transform={`translate(${DOC_AT[0]} ${DOC_AT[1]}) scale(1.04)`}
        >
          <path d={DOC_FACE_CUTS} transform={DOC_HEAD_TURN} fill={PAPER} />
          {/* the tablet he writes on, and his pen */}
          <path d="M22 -152L40 -146L34 -124L16 -130Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path
            d="M22 -144L34 -140M21 -139L33 -135M20 -134L28 -131.5"
            stroke={INK}
            strokeWidth={0.8}
          />
          <path d="M30 -130L40 -146" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
        </CutFigure>

        {/* Lady Macbeth, asleep with her eyes open, washing her hands */}
        <g transform={ladyAt}>
          <CutFigure parts={LADY_PARTS} cuts={LADY_CUTS} tone="paper" halo={1.8}>
            <g transform={LADY_HEAD_AT}>
              <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
              <path d={HAIR_STRANDS} fill={PAPER} />
              <path d={FACE_CUTS} fill={INK} />
              <circle cx={8.4} cy={-3.4} r={2.2} fill={PAPER} stroke={INK} strokeWidth={1.1} />
            </g>
            {/* the fingers of the rubbing hand, and the hand beneath it */}
            <path
              d="M29 -139.5L45 -138.5M29 -135.5L46 -134M29 -131.5L44 -130.2M24 -126.5L44 -125.5M28 -122.5L42 -121.8"
              stroke={INK}
              strokeWidth={0.9}
              strokeLinecap="round"
            />
            {/* "Yet here's a spot." */}
            <circle
              className="lc-glow"
              style={timing({ delay: 0.4 })}
              cx={36}
              cy={-135}
              r={3.3}
              fill={RED}
            />
          </CutFigure>
        </g>
      </g>
    </>
  )
}

export const theSleepwalking: LinocutArt = { width: W, height: H, Draw: Sleepwalking }
