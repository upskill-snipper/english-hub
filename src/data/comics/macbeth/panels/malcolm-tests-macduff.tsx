import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, HAIR_CUTS, HEAD, type Part } from './cut-figure'
import { HEAD_BEARD } from './inverness-people'

/**
 * Act 4, Scene 3: "Malcolm tests Macduff", the eighteenth moment in the
 * guide's timeline. The details were drawn from the Folger text the guide
 * was first checked against; the quotations below follow the held edition
 * (src/data/full-texts/macbeth.ts):
 *
 * - The scene is in England, where Malcolm has fled and Macduff has come to
 *   find him. It opens with Malcolm's "Let us seek out some desolate shade and
 *   there / Weep our sad bosoms empty." So the three stand in the open
 *   under a great tree. The scene is at the English king's court (a Doctor
 *   comes out from the king in the middle of it), so his palace stands far
 *   off on the horizon.
 * - Ross brings the news: "Your castle is surpris’d; your wife and babes /
 *   Savagely slaughter’d." Malcolm: "What, man! ne’er pull your hat upon your
 *   brows. / Give sorrow words." So Macduff has pulled his hat down over his
 *   eyes, his head is bowed, and one hand is clenched over his heart.
 * - "Dispute it like a man." "I shall do so; / But I must also feel it as a
 *   man." Malcolm, facing him, puts a hand on his shoulder; Ross, who brought
 *   the news, stands behind with his head bowed.
 * - "Be this the whetstone of your sword. Let grief / Convert to anger." So
 *   Macduff's other hand closes on the hilt of his sword, and the spot colour
 *   marks the hilt, and nothing else: the grief that will become his cause.
 * - Macduff calls Macbeth a "hell-kite": "What, all my pretty chickens and
 *   their dam / At one fell swoop?" A kite hangs in the sky over them, black
 *   and small.
 *
 * None of the three is described. They are drawn as the other Macbeth panels
 * draw the Scottish nobles: plain cloaks and tunics, Macduff and Ross bearded
 * (HEAD_BEARD, ./inverness-people.tsx), Malcolm, Duncan's young son, beardless
 * and with no crown, since he is not yet king. Macduff's hat is the soft cap of his
 * portrait (../portraits/macduff.tsx), pulled down over his brows as the line
 * asks. REVIEWED 26 September 2026: it was first drawn as a wide-brimmed hat,
 * so the man in the panel and the man in the portrait wore different hats for
 * the same line; the brim went.
 *
 * Nothing is taken from a film or stage production. Seeds: 1801 (the sky),
 * 1802 (the ground), 1803 (the tree).
 */

const W = 860
const H = 340
const HORIZON = 246

type Marks = {
  sky: string
  ground: string
  hills: string
  canopy: string
  leaves: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // An open English sky, cleared almost to the paper: only ridges of ink are
  // left, thicker overhead and thinning to nothing at the horizon, so the
  // three stand black against the light.
  const dark = (x: number, y: number) =>
    clamp(
      0.5 * Math.pow(1 - y / HORIZON, 1.3) +
        0.04 -
        clamp(1 - Math.hypot(x - 420, y - 170) / 260) * 0.2,
    )
  const sky = gougeField(rng(1801), { x0: 0, x1: W, y0: 4, y1: HORIZON - 14 }, dark, {
    spacing: 7,
    len: [24, 90],
    gap: [8, 26],
    max: 3.4,
  })

  // Far hills along the horizon.
  let hills = `M0 ${HORIZON + 4}`
  for (let x = 0; x <= W; x += 12)
    hills += `L${x} ${n(HORIZON - 5 - 4 * Math.sin(x / 80 + 1) - 2 * Math.sin(x / 27))}`
  hills += `L${W} ${HORIZON + 4}Z`

  // Grass on the near ground: small fans of cuts, larger towards the reader.
  const rg = rng(1802)
  let ground = ''
  for (let y = HORIZON + 10; y < H; y += 10 + (y - HORIZON) * 0.12) {
    const s = 0.5 + (y - HORIZON) / 80
    for (let x = between(rg, -10, 10); x < W; x += between(rg, 30, 60) * s) {
      if (rg() < 0.35) continue
      for (let k = -1; k <= 1; k++) {
        const len = between(rg, 4, 8) * s
        const a = (-90 + k * 15 + between(rg, -6, 6)) * (Math.PI / 180)
        ground += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.5 + s * 0.3)
      }
    }
  }

  // The tree's crown: overlapping rounds, a black mass against the sky, with
  // leaves cut into its lit lower edge.
  const rt = rng(1803)
  const lobes: [number, number, number][] = [
    [40, 34, 56],
    [110, 18, 52],
    [178, 36, 48],
    [236, 62, 38],
    [72, 86, 44],
    [148, 84, 46],
    [206, 102, 30],
    [18, 104, 34],
    [-10, 50, 44],
  ]
  let canopy = ''
  for (const [cx, cy, r] of lobes)
    canopy += `M${n(cx - r)} ${n(cy)}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0Z`
  let leaves = ''
  for (const [cx, cy, r] of lobes) {
    for (let i = 0; i < 9; i++) {
      const a = (between(rt, 20, 160) * Math.PI) / 180
      const d = r * between(rt, 0.55, 0.92)
      const x = cx + Math.cos(a) * d
      const y = cy + Math.sin(a) * d
      leaves += gouge(x - 3, y - 1.5, x + 3, y + 1.5, between(rt, 0.9, 1.5), between(rt, -0.6, 0.6))
    }
  }

  cached = { sky, ground, hills, canopy, leaves }
  return cached
}

/** The tree's trunk and its two great boughs. */
const TRUNK = ribbon(
  [
    [98, 262],
    [96, 220],
    [100, 170],
    [104, 130],
    [110, 96],
  ],
  30,
  0.25,
  false,
)
const BOUGHS = [
  ribbon(
    [
      [104, 140],
      [140, 118],
      [176, 104],
      [210, 98],
    ],
    12,
    0.4,
    false,
  ),
  ribbon(
    [
      [100, 150],
      [70, 128],
      [44, 116],
    ],
    10,
    0.4,
    false,
  ),
]
const TRUNK_CUTS =
  gouge(92, 250, 94, 150, 1.4, -0.6) +
  gouge(102, 244, 106, 170, 1, 0.4) +
  gouge(108, 150, 112, 104, 0.9)

/** The English king's palace, far off on the horizon: walls, towers and a hall. */
const PALACE =
  'M596 247V232H604V222L608 216L612 222V232H628V226H652V214L660 206L668 214V226H690V232H702V220L706 214L710 220V232H716V247Z'

/** A kite hanging in the wind, wings spread and forked tail, about 34 wide. */
const KITE =
  'M0 0C-3 -1.5 -8 -2 -13 -1L-17 -3.5L-14 0.4C-8 1.6 -3 2.4 -1 3L-2 8L-4.5 12L0 10.2L4.5 12L2 8L1 3C3 2.4 8 1.6 14 0.4L17 -3.5L13 -1C8 -2 3 -1.5 0 0Z'

// ── The three, each facing right in their own frame, feet at (0, 0) ────────

/** Legs and boots, shared by the three: feet at (0, 0), the tunic's hem at y = -64. */
const LEGS: Part[] = [
  { d: 'M-6 -70C-8 -50 -10 -28 -11 -7', w: 10 },
  { d: 'M9 -70C11 -50 13 -28 15 -7', w: 10 },
  { d: 'M-21 -10L-5 -10L-4 0L-24 0C-24 -4 -23 -8 -21 -10Z' },
  { d: 'M9 -10L21 -10C26 -8 29 -4 29 0L9 0Z' },
]

/**
 * Macduff, bent forward in grief: his cap pulled down over his eyes, one hand pressed to his face, the other closed on his sword's hilt.
 */
const MACDUFF_HEAD_AT = 'translate(15 -186) rotate(34) scale(1.14)'
/**
 * The soft cap of his portrait, in the head's frame: a slack crown of cloth
 * and a rolled edge pulled down over the eyes.
 */
const MACDUFF_HAT =
  'M-17.5 -1C-20 -11 -16 -22 -6 -25.5C4 -28.5 14 -24.5 17 -16L18.5 -8.5C19.8 -5.5 19.8 -2.4 18 -0.6C8 -2.6 -6 -2 -17.5 -1Z'
const MACDUFF_PARTS: Part[] = [
  {
    d: 'M-8 -172C-24 -168 -34 -146 -38 -118C-42 -90 -44 -60 -46 -30L-28 -34C-26 -60 -24 -90 -20 -118Z',
  },
  { d: 'M8 -98L-36 -40', w: 5, sep: 1.2 },
  ...LEGS,
  {
    d: 'M-8 -172C-18 -168 -24 -156 -24 -142C-24 -126 -22 -112 -20 -98C-23 -88 -25 -76 -27 -64L27 -64C25 -76 23 -88 22 -98C25 -114 28 -130 28 -146C28 -160 22 -170 12 -174Z',
  },
  { d: HEAD_BEARD, t: MACDUFF_HEAD_AT },
  { d: MACDUFF_HAT, t: MACDUFF_HEAD_AT },
  // the far arm: its hand clenched over his heart
  { d: 'M4 -160C0 -146 2 -132 10 -130C16 -132 20 -138 22 -144', w: 7.5, sep: 1.4 },
  {
    d: 'M17 -150C21 -154 27 -153 29 -148C30 -143 26 -139 21 -139C17 -140 15 -146 17 -150Z',
    sep: 1.2,
  },
  // the near arm, down to the hilt
  { d: 'M16 -160C24 -146 26 -128 22 -110', w: 9, sep: 1.6 },
]
const MACDUFF_CUTS =
  gouge(-18, -150, -40, -36, 1.1, 0.8) +
  gouge(-6, -94, -12, -68, 0.9, 0.4) +
  gouge(10, -94, 14, -68, 0.8, -0.3) +
  gouge(-20, -97, 22, -99, 0.8) +
  gouge(-12, -150, -16, -104, 0.9, 0.5)

/** Ross, standing back: head bowed, his hands clasped before him. */
const ROSS_HEAD_AT = 'translate(5 -190) rotate(16) scale(1.1)'
const ROSS_PARTS: Part[] = [
  { d: 'M-10 -174C-26 -168 -34 -140 -38 -110C-42 -82 -44 -52 -46 -24L-28 -28L-22 -110Z' },
  ...LEGS,
  {
    d: 'M-10 -174C-20 -170 -25 -158 -25 -144C-25 -126 -23 -112 -21 -98C-23 -88 -25 -76 -27 -64L27 -64C25 -76 23 -88 21 -98C23 -112 25 -126 25 -144C25 -158 20 -170 10 -174Z',
  },
  { d: HEAD_BEARD, t: ROSS_HEAD_AT },
  { d: 'M12 -164C22 -148 24 -130 20 -114C18 -110 14 -110 10 -112', w: 8.5, sep: 1.4 },
  { d: 'M5 -118C9 -122 16 -121 18 -116C19 -111 15 -107 9 -108C6 -109 4 -114 5 -118Z' },
]
const ROSS_CUTS =
  gouge(-18, -150, -36, -30, 1, 0.8) +
  gouge(-4, -94, -10, -68, 0.9, 0.4) +
  gouge(-21, -97, 21, -99, 0.8)

/** Malcolm, upright, one hand on Macduff's shoulder, the other clenched. */
const MALCOLM_HEAD_AT = 'translate(3 -196) rotate(-4) scale(1.12)'
const MALCOLM_PARTS: Part[] = [
  { d: 'M-10 -178C-26 -172 -34 -144 -38 -114C-42 -86 -44 -56 -46 -28L-28 -32L-22 -114Z' },
  ...LEGS,
  {
    d: 'M-10 -178C-20 -174 -25 -162 -25 -148C-25 -128 -23 -112 -21 -98C-23 -88 -25 -76 -27 -64L27 -64C25 -76 23 -88 21 -98C23 -112 25 -128 25 -148C25 -162 20 -174 10 -178Z',
  },
  { d: HEAD, t: MALCOLM_HEAD_AT },
  // the far arm, its fist clenched before his chest
  { d: 'M-4 -164C-10 -150 -10 -134 -4 -128C2 -130 6 -138 8 -146', w: 8, sep: 1.4 },
  { d: 'M3 -152C6 -156 12 -155 14 -151C15 -146 12 -142 7 -142C3 -143 1 -148 3 -152Z', sep: 1.2 },
  // the near arm, out to Macduff's shoulder
  { d: 'M14 -168C24 -160 36 -152 46 -150', w: 9, sep: 1.6 },
  { d: 'M43 -155C48 -158 55 -157 59 -153L58 -146C53 -144 47 -144 43 -146Z' },
]
const MALCOLM_CUTS =
  gouge(-18, -152, -36, -34, 1, 0.8) +
  gouge(-4, -94, -10, -68, 0.9, 0.4) +
  gouge(-21, -97, 21, -99, 0.8) +
  gouge(-12, -140, -14, -104, 0.8, 0.4)

/** A small eye cut in a head's own frame. */
const EYE = gouge(8.2, -4.2, 12.4, -4.4, 0.8)

/** Where each stands: [x, y of feet]. Malcolm faces left. */
const ROSS_AT: Pt = [214, 318]
const MACDUFF_AT: Pt = [390, 322]
const MALCOLM_AT: Pt = [472, 320]

function MalcolmTestsMacduff(_: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [360, 170], push: 1.03 })}>
        {/* the open sky of England, and the king's palace far off */}
        <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={PALACE} fill={INK} />
        <path
          d="M612 238V244M624 238V244M660 236V244M690 238V244"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d={m.hills} fill={INK} />
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={INK} />
        <path d={m.ground} fill={PAPER} />

        {/* the kite, hanging in the wind over them */}
        <g className="lc-drift-r" style={timing({ delay: 0.3 })}>
          <path d={KITE} transform="translate(560 64) rotate(-8) scale(1.1)" fill={INK} />
        </g>

        {/* the desolate shade */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round">
          {BOUGHS.map((d) => (
            <path key={d} d={d} />
          ))}
          <path d={TRUNK} />
        </g>
        <path d={TRUNK_CUTS} fill={PAPER} />
        <path d={m.canopy} fill={INK} />
        <path d={m.leaves} fill={PAPER} />

        {/* Ross, who brought the news */}
        <CutFigure
          parts={ROSS_PARTS}
          cuts={ROSS_CUTS}
          transform={`translate(${ROSS_AT[0]} ${ROSS_AT[1]}) scale(0.95)`}
        >
          <path d={HAIR_CUTS + EYE} transform={ROSS_HEAD_AT} fill={PAPER} />
        </CutFigure>

        {/* Macduff, his hat pulled down over his brows */}
        <CutFigure
          parts={MACDUFF_PARTS}
          cuts={MACDUFF_CUTS}
          transform={`translate(${MACDUFF_AT[0]} ${MACDUFF_AT[1]})`}
        >
          <path
            d="M-17 -5.6Q0 -8 18.6 -5.2"
            transform={MACDUFF_HEAD_AT}
            fill="none"
            stroke={PAPER}
            strokeWidth={1}
          />
          {/* the hilt under his hand: the grief that will whet his sword */}
          <path d="M4 -92L18 -106" stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
          <path d="M4 -92L18 -106" stroke={RED} strokeWidth={3.6} strokeLinecap="round" />
          <path d="M12 -97L20 -118" stroke={RED} strokeWidth={4} strokeLinecap="round" />
          <circle cx={21} cy={-121} r={3.6} fill={RED} />
          <path
            d="M17 -116C22 -117 27 -113 27 -108C27 -103 22 -100 18 -102C15 -104 14 -112 17 -116Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
        </CutFigure>

        {/* Malcolm, facing him: "Dispute it like a man" */}
        <g transform={`translate(${MALCOLM_AT[0]} ${MALCOLM_AT[1]}) scale(-1 1)`}>
          <CutFigure parts={MALCOLM_PARTS} cuts={MALCOLM_CUTS}>
            <path d={HAIR_CUTS + EYE} transform={MALCOLM_HEAD_AT} fill={PAPER} />
          </CutFigure>
        </g>
      </g>
    </>
  )
}

export const malcolmTestsMacduff: LinocutArt = { width: W, height: H, Draw: MalcolmTestsMacduff }
