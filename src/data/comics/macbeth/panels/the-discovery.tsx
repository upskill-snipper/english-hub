import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  clamp,
  deg,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, type Part } from './cut-figure'
import { EYE, HEAD_BEARD, HEAD_MACBETH, HEAD_YOUTH, HEAD_WOMAN, VEIL } from './inverness-people'

/**
 * Act 2, Scene 3: "The discovery", the tenth moment in the guide's timeline.
 * The courtyard and stair of The dagger and The murder, at the moment the
 * house is woken. The lines below were first checked against the Folger
 * text and now quote the held edition (src/data/full-texts/macbeth.ts).
 * Every detail is from the play:
 *
 * - "O horror, horror, horror" (Macduff). He has gone up to wake the king and
 *   comes out on the landing with his arms flung up. The door behind him is
 *   open on black: the king's body is never drawn.
 * - "Ring the alarum bell"; "Bell rings." The bell by the stair swings and
 *   rings, and it carries the spot colour: the bell that "invites" Macbeth in
 *   The dagger now raises the house.
 * - "Shake off this downy sleep"; Banquo's "when we have our naked frailties
 *   hid"; and in 2.2, "Get on your nightgown, lest occasion call us / And show
 *   us to be watchers." So the household comes out in night-gowns. At the
 *   stair's foot Macbeth spreads his hands as he explains why he killed the
 *   grooms, Lady Macbeth sways back with a hand to her brow ("Help me hence,
 *   ho"; "Look to the lady"), and Lennox, who came in with Macduff, dressed,
 *   looks up.
 * - "Let's not consort with them" (Malcolm); "There's daggers in men's
 *   smiles" (Donalbain). In front, Duncan's sons stand apart in their
 *   night-gowns, watching the others. Donalbain leans to his brother's ear.
 * - The Porter, who let Macduff and Lennox in, and Banquo are left out for
 *   room. The torch on the wall burns white, as in The murder, so the red is
 *   the bell's alone.
 *
 * Nothing is taken from a film or stage production. Seeds: 1001 (walls),
 * 1002 (torchlight), 1003 (floor), 1004 (the bell's ringing).
 */

const W = 860
const H = 340
const TORCH = { x: 446, y: 92 }

type Marks = { walls: string; glow: string; floor: string; steps: string; ring: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const near = (x: number, y: number) =>
    Math.pow(clamp(1 - Math.hypot((x - TORCH.x) * 0.8, y - TORCH.y) / 330), 1.3)
  const walls = gougeField(
    rng(1001),
    { x0: 0, x1: W, y0: 4, y1: 258 },
    (x, y) => near(x, y) * 0.75,
    {
      spacing: 8.5,
      len: [10, 28],
      gap: [3, 8],
      max: 2.8,
    },
  )
  const glow = rays(rng(1002), TORCH.x, TORCH.y, { from: 16, to: 150, every: 4.8, width: 3 })
  const f = rng(1003)
  const dark = (x: number, y: number) =>
    clamp(Math.hypot((x - TORCH.x) * 0.9, (y - 280) * 2) / 440 + 0.04)
  let floor = gougeField(f, { x0: 0, x1: W, y0: 266, y1: H + 4 }, dark, {
    spacing: 7,
    len: [30, 70],
    gap: [2, 5],
    max: 6,
  })
  for (let xb = -300; xb < 1200; xb += 48) {
    const xt = TORCH.x + (xb - TORCH.x) * 0.3
    floor += wedge(xt, 262, xb, H + 6, 0.5, 1 + dark(xb, H) * 4)
  }
  let steps = ''
  for (let i = 0; i < 8; i++) {
    const x = 604 + i * 17
    const y = 262 - i * 16
    steps += gouge(x + 4, y + 1.5, x + 70, y + 1.5, 2.2 - i * 0.1)
  }
  steps += gouge(740, 135.5, 860, 135.5, 1.6)
  const b = rng(1004)
  let ring = ''
  for (let rad = 18; rad < 44; rad += 8) {
    ring += arcDashes(b, 694, 66, rad, deg(140), deg(220), [6, 12], [3, 6])
    ring += arcDashes(b, 694, 66, rad, deg(-40), deg(40), [6, 12], [3, 6])
  }
  cached = { walls, glow, floor, steps, ring }
  return cached
}

/** A lower stair than the one in The dagger, so the landing and Macduff fit. */
const STAIR = (() => {
  let d = 'M600 340V262'
  for (let i = 0; i < 8; i++) d += `H${617 + i * 17}V${246 - i * 16}`
  return d + 'H868V340Z'
})()

/** A night-gown to the ankles, facing right, feet at (0, 0). */
const GOWN =
  'M-12 -162C-18 -140 -18 -112 -16 -92C-18 -62 -24 -30 -28 -1L30 -1C26 -30 20 -62 17 -92C16 -116 15 -142 11 -160C3 -166 -5 -166 -12 -162Z'
const GOWN_CUTS =
  gouge(-2, -126, -8, -8, 1, 0.8) +
  gouge(8, -96, 14, -8, 0.9, -0.6) +
  gouge(-12, -84, -20, -8, 0.9, 1)
/** Bare feet under a gown. */
const FEET = 'M4 -3L20 -3L25 0L4 0ZM-18 -3L-6 -3L-4 0L-20 0Z'

// ── Duncan's sons, apart in front ───────────────────────────────────────────
const MALCOLM_HEAD = 'translate(4 -181) scale(0.95)'
const MALCOLM: Part[] = [
  { d: GOWN },
  { d: FEET },
  { d: HEAD_YOUTH, t: MALCOLM_HEAD },
  // a hand clutching the gown at his chest
  { d: 'M10 -150C13 -134 17 -124 23 -122L27 -130', w: 7.4, sep: 1.4 },
  { d: 'M23 -135C26 -137 30 -135 30 -131C30 -127 26 -125 23 -127Z' },
]
const DONALBAIN_HEAD = 'translate(4 -181) rotate(6) scale(0.95)'
const DONALBAIN: Part[] = [
  { d: GOWN },
  { d: FEET },
  { d: HEAD_YOUTH, t: DONALBAIN_HEAD },
  // the hand raised beside his mouth as he whispers
  { d: 'M9 -152C19 -146 27 -150 25 -165', w: 7, sep: 1.4 },
  { d: 'M21 -174C25 -176 29 -173 29 -168C28 -164 24 -163 21 -165Z' },
]

// ── The household at the foot of the stair ───────────────────────────────────
const MACBETH_HEAD = 'translate(4 -181) scale(0.95)'
const MACBETH: Part[] = [
  { d: GOWN },
  { d: FEET },
  { d: HEAD_MACBETH, t: MACBETH_HEAD },
  // his hands spread as he speaks
  { d: 'M10 -152C22 -148 34 -146 46 -152', w: 7.6, sep: 1.4 },
  {
    d: 'M44 -157C47 -160 52 -161 57 -160L57.5 -157.5L52 -157L58 -155L57.5 -152.5L51 -153C48 -151 45 -151 44 -153Z',
  },
]
const LADY_HEAD = 'translate(8 -178) rotate(-22) scale(0.95)'
const LADY: Part[] = [
  { d: GOWN },
  { d: HEAD_WOMAN, t: LADY_HEAD },
  { d: VEIL, t: LADY_HEAD, sep: 1.2 },
  // the back of her hand to her brow
  { d: 'M12 -150C26 -154 32 -168 26 -186', w: 6.8, sep: 1.3 },
  { d: 'M20 -194C24 -198 30 -196 31 -191C30 -187 25 -186 22 -188Z' },
]
const LENNOX_HEAD = 'translate(4 -181) rotate(-18) scale(0.95)'
const LENNOX: Part[] = [
  { d: 'M-6 -166C-22 -146 -30 -104 -34 -46L-12 -44C-12 -86 -10 -126 -2 -156Z' },
  { d: 'M-5 -56L-6 -8', w: 10.5 },
  { d: 'M9 -56L14 -8', w: 10.5 },
  { d: 'M-13 -11L-2 -11L2 -4L2 0L-15 0Z' },
  { d: 'M8 -11L19 -11L27 -4L27 0L8 0Z' },
  {
    d: 'M-10 -164C-18 -140 -18 -112 -15 -92L-20 -52L24 -52L17 -92C16 -116 14 -142 10 -162C2 -168 -4 -168 -10 -164Z',
  },
  { d: HEAD_BEARD, t: LENNOX_HEAD },
]
const TUNIC_CUTS = gouge(-15, -95, 17, -95, 1.1) + gouge(0, -128, -4, -58, 1, 0.8)

// ── Macduff on the landing: "O horror, horror, horror" ──────────────────────
const MACDUFF_HEAD = 'translate(2 -181) rotate(-16) scale(0.95)'
const MACDUFF: Part[] = [
  { d: 'M-6 -166C-22 -146 -30 -104 -34 -46L-12 -44C-12 -86 -10 -126 -2 -156Z' },
  { d: 'M-5 -56L-8 -8', w: 10.5 },
  { d: 'M9 -56L16 -8', w: 10.5 },
  { d: 'M-15 -11L-4 -11L0 -4L0 0L-17 0Z' },
  { d: 'M10 -11L21 -11L29 -4L29 0L10 0Z' },
  {
    d: 'M-10 -164C-18 -140 -18 -112 -15 -92L-20 -52L24 -52L17 -92C16 -116 14 -142 10 -162C2 -168 -4 -168 -10 -164Z',
  },
  { d: HEAD_BEARD, t: MACDUFF_HEAD },
  { d: 'M-6 -156C-16 -176 -20 -196 -18 -216', w: 8.4, sep: 1.4 },
  { d: 'M10 -154C20 -174 26 -194 26 -216', w: 8.4, sep: 1.4 },
  {
    d: 'M-23 -217C-24 -222 -22 -228 -19 -230L-17 -229L-17 -224L-14 -231L-12 -230L-13 -222L-10 -226L-8 -224L-12 -216C-15 -213 -20 -213 -23 -217Z',
  },
  {
    d: 'M21 -217C20 -222 22 -228 25 -230L27 -229L27 -224L30 -231L32 -230L31 -222L34 -226L36 -224L32 -216C29 -213 24 -213 21 -217Z',
  },
]

function TheDiscovery({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [220, 130], push: 1.03 })}>
        <path d={m.walls} fill={PAPER} />
        <path d={gouge(150, 261, 760, 261, 1.6)} fill={PAPER} />
        <rect x={0} y={262} width={W} height={H - 262} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the torch on the wall, burning white as in The murder */}
        <path d={m.glow} fill={PAPER} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          <path d={`M${TORCH.x - 7} ${TORCH.y + 4}h14l-3 13h-8Z`} />
          <rect x={TORCH.x - 2} y={TORCH.y + 17} width={4} height={16} />
        </g>
        <path
          className="lc-flicker"
          d={`M${TORCH.x} ${TORCH.y + 5}C${TORCH.x - 7} ${TORCH.y} ${TORCH.x - 6} ${TORCH.y - 9} ${TORCH.x} ${TORCH.y - 22}C${TORCH.x + 6} ${TORCH.y - 9} ${TORCH.x + 7} ${TORCH.y} ${TORCH.x} ${TORCH.y + 5}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />

        {/* the stair, the king's door open on black, and Macduff before it */}
        <path d={STAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.steps} fill={PAPER} />
        <path d="M772 136V70Q772 44 806 42Q840 44 840 70V136Z" fill={PAPER} />
        <path d="M778 136V72Q778 50 806 48Q834 50 834 72V136Z" fill={INK} />
        <path d="M778 136V72L764 64V142Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <CutFigure
          parts={MACDUFF}
          cuts={TUNIC_CUTS}
          halo={3}
          transform="translate(790 134) scale(-0.5 0.5)"
        >
          <path d={EYE} transform={MACDUFF_HEAD} fill={PAPER} />
        </CutFigure>

        {/* the alarum bell, swinging and ringing */}
        <path d="M694 4V44" stroke={PAPER} strokeWidth={LINE.fine} />
        <g className="lc-fade-in" style={timing({ delay: 1.2, dur: 0.6 })}>
          <path
            d={m.ring}
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.bold}
            strokeLinecap="round"
          />
        </g>
        <g transform="rotate(16 694 44)">
          <path
            d="M684 72C684 60 687 50 694 50C701 50 704 60 704 72L707 76H681Z"
            fill={RED}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path d="M694 44V50" stroke={PAPER} strokeWidth={LINE.bold} />
          <circle cx={694} cy={80} r={3} fill={RED} stroke={PAPER} strokeWidth={LINE.fine} />
        </g>

        {/* the household at the foot of the stair */}
        <CutFigure
          parts={LENNOX}
          cuts={TUNIC_CUTS}
          halo={2}
          transform="translate(392 304) scale(0.78)"
        >
          <path d={EYE} transform={LENNOX_HEAD} fill={PAPER} />
        </CutFigure>
        <CutFigure
          parts={MACBETH}
          cuts={GOWN_CUTS}
          halo={2}
          transform="translate(490 304) scale(-0.8 0.8)"
        >
          <path d={EYE} transform={MACBETH_HEAD} fill={PAPER} />
        </CutFigure>
        <CutFigure
          parts={LADY}
          cuts={GOWN_CUTS}
          halo={2}
          transform="translate(560 304) scale(-0.78 0.78) rotate(-9)"
        >
          <path d={EYE} transform={LADY_HEAD} fill={PAPER} />
        </CutFigure>

        {/* Duncan's sons, apart, watching them */}
        <CutFigure
          parts={DONALBAIN}
          cuts={GOWN_CUTS}
          halo={1.3}
          transform="translate(146 340) rotate(11) scale(1.26)"
        >
          <path d={EYE} transform={DONALBAIN_HEAD} fill={PAPER} />
        </CutFigure>
        <CutFigure
          parts={MALCOLM}
          cuts={GOWN_CUTS}
          halo={1.25}
          transform="translate(236 340) scale(1.3)"
        >
          <path d={EYE} transform={MALCOLM_HEAD} fill={PAPER} />
        </CutFigure>
      </g>
    </>
  )
}

export const theDiscovery: LinocutArt = { width: W, height: H, Draw: TheDiscovery }
