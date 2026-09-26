import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'

/**
 * The shared parts of the four Act 5 panels (moments 20 to 23 of the guide's
 * timeline: "Macbeth at bay", "Birnam Wood", "Tomorrow", "Macduff and
 * Macbeth"), so that Dunsinane, its king and the army that comes for him are
 * cut the same way in each.
 *
 * WHAT THE TEXT GIVES, AND SO WHAT IS DRAWN
 * - Macbeth is not described in the play beyond his arms and his hair ("my
 *   fell of hair / Would at a dismal treatise rouse and stir", 5.5). In Act 5
 *   he calls for his armour again and again ("Give me my armour", "Come, put
 *   mine armour on", "Pull 't off, I say", 5.3; "At least we'll die with
 *   harness on our back", 5.5; "Before my body / I throw my warlike shield",
 *   5.8). So he is drawn plainly, in a knee-length mail shirt, a cloak and a
 *   sword, with a short beard and thick hair: the dress of an
 *   eleventh-century Scottish king, not any production's, and the same mail
 *   and beard as his portrait (../portraits/macbeth.tsx).
 * - The spot colour is his crown, the one thing the tyrant still has when "that
 *   which should accompany old age, / As honour, love, obedience, troops of
 *   friends" is gone (5.3). The same red crown lies on the field in the last
 *   panel, where the text has Macduff carry in something that is never drawn.
 * - Dunsinane is a stone castle ("Our castle's strength / Will laugh a siege to
 *   scorn", 5.5), so its rooms are coursed stone with flagged floors.
 *
 * Every shape is plain SVG path data in the carving style of the toolkit
 * (src/components/comics/linocut), computed once and cached: a drawing never
 * changes, and the version reviewed is the version students see. The cuts in
 * the figures come from seed 3105; each panel records its own seeds.
 */

/** A box to fill with marks. */
export type Box = { x0: number; x1: number; y0: number; y1: number }

/**
 * A coursed stone wall: the light-following cuts of `gougeField`, broken into
 * blocks by the joints. Each joint is an ink line (which shows where the
 * light has cut the stone pale) with a thin paper edge above it where the
 * wall is dark, so the courses read at both ends of the light. `clear` marks
 * where the drawing clears the block to paper (the brightest light), so no
 * cuts are wasted under it.
 */
export function stoneWall(
  r: Rng,
  box: Box,
  light: (x: number, y: number) => number,
  course = 26,
  clear?: (x: number, y: number) => boolean,
) {
  let cuts = gougeField(r, box, light, { spacing: 6, len: [16, 60], gap: [5, 16] })
  // A cut under a cleared area would never print, and every one is weight on
  // the page, so drop each gouge that starts inside it.
  if (clear)
    cuts = cuts
      .split('M')
      .filter((c) => {
        if (!c) return false
        const [x, y] = c.split(/[ Q]/).map(Number)
        return !clear(x, y)
      })
      .map((c) => 'M' + c)
      .join('')
  let joints = ''
  let edges = ''
  let row = 0
  for (let y = box.y0 + course * 0.6; y < box.y1 - 4; y += course, row++) {
    // the bed joint, cut as a run of slightly wandering strokes
    let x = box.x0
    while (x < box.x1) {
      const len = between(r, 40, 110)
      const y1 = y + between(r, -0.7, 0.7)
      const y2 = y + between(r, -0.7, 0.7)
      joints += wedge(x, y1, x + len, y2, 2.6, 2.6)
      if (light(x + len / 2, y) < 0.42) edges += gouge(x + 2, y1 - 2.4, x + len - 2, y2 - 2.4, 0.55)
      x += len
    }
    // the head joints, staggered course by course
    let hx = box.x0 + (row % 2 ? 18 : 44) + between(r, -6, 6)
    while (hx < box.x1) {
      const top = y - course + 1.6
      joints += wedge(hx, top, hx + between(r, -1, 1), y, 2.2, 2.4)
      if (light(hx, y - course / 2) < 0.42) edges += gouge(hx - 2.2, top + 2, hx - 2.2, y - 3, 0.5)
      hx += between(r, 46, 70)
    }
  }
  return { cuts, joints, edges }
}

/**
 * A flagged floor on paper: ink joints running back to a vanishing point, and
 * cross joints closing up with distance. `top` is where the floor meets the
 * wall.
 */
export function flagFloor(r: Rng, W: number, H: number, top: number, vanish: Pt) {
  let d = ''
  const [vx, vy] = vanish
  for (let xt = -700; xt < W + 700; xt += 58) {
    const xb = vx + (xt - vx) * ((H - vy) / (top - vy))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.35, 0.9))
      d += wedge(
        xt + (xb - xt) * t0,
        top + (H - top) * t0,
        xt + (xb - xt) * t1,
        top + (H - top) * t1,
        0.9 + t0 * 2.6,
        0.9 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  // cross joints: closer together near the wall
  for (let k = 1; k < 6; k++) {
    const t = Math.pow(k / 6, 1.5)
    const y = top + (H - top) * t
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 50, 140)
      d += gouge(x, y + between(r, -0.6, 0.6), x + len, y + between(r, -0.6, 0.6), 0.9 + t * 1.6)
      x += len + between(r, 2, 10)
    }
  }
  // the shadow where the floor meets the wall
  for (let y = top + 1; y < top + 18; y += 3) d += gouge(0, y, W, y, 2.4 - (y - top) * 0.13)
  return d
}

/** A shadow on a paper floor under a standing figure: a few tapering cuts. */
export function footShadow(cx: number, y: number, halfW: number) {
  let d = ''
  for (let k = 0; k < 4; k++) {
    const w = halfW * (1 - k * 0.18)
    d += gouge(cx - w, y + k * 3, cx + w, y + k * 3 + 0.4, 1.8 - k * 0.35)
  }
  return d
}

// ── The crown ────────────────────────────────────────────────────────────────

/**
 * A plain crown in profile: a band with five plain points, in the frame of
 * Macbeth's head below (facing left). Printed in the spot colour wherever it
 * appears.
 *
 * It is the crown of the Act 1 to 3 panels (CROWN in ./inverness-people.tsx),
 * the one Duncan wears and Macbeth takes. REVIEWED 26 September 2026: this
 * kit first gave Macbeth a three-point crown tipped with balls, so from The
 * apparitions on he wore a different crown from the one he wore at the
 * banquet. A reader who knows him by his crown should not have to wonder, so
 * the balls went and the points match.
 */
export const CROWN_BAND =
  'M-18.6 -206.6L9.8 -202.8L10.4 -209.2L11.2 -220.6L5.4 -210.6L2.4 -223.4L-2.2 -211.2L-6.4 -224.2L-10.4 -211.8L-15.4 -222.8L-17.4 -213.2Z'

/**
 * A crown tipped over on the ground: the same plain crown seen from the front
 * (a curved band and five plain points), lying on its side with its points to
 * the left. `at` is where its middle rests. Printed in the
 * spot colour with a fine ink edge, so it holds on paper.
 */
const CROWN_FRONT =
  'M-20 6C-8 10 8 10 20 6L20 -2L22 -18L13 -6L9 -22L4.5 -7L0 -24L-4.5 -7L-9 -22L-13 -6L-22 -18L-20 -2Z'
export function FallenCrown({ at, scale = 1 }: { at: Pt; scale?: number }) {
  const [x, y] = at
  return (
    <g transform={`translate(${x} ${y}) rotate(-78) scale(${scale})`}>
      <path d={CROWN_FRONT} fill={RED} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      {/* the far side of the band, seen through the open crown */}
      <path d="M-19 -1C-8 -5 8 -5 19 -1" fill="none" stroke={INK} strokeWidth={1.8} />
      <path d={gouge(-14, 5, 12, 5.6, 0.9)} fill={PAPER} />
    </g>
  )
}

// ── The men of Act 5 ────────────────────────────────────────────────────────

/**
 * Mail, as a pattern of small cut rings in rows offset by half a ring. One
 * pattern per plate (define it in the drawing's <defs>), filled into every
 * mail shirt, so a field of armed men costs a few hundred bytes rather than
 * thousands of separate rings. It scales and turns with each figure.
 */
export function MailPattern({ uid }: { uid: string }) {
  return (
    <pattern id={`${uid}-mail`} width={4.6} height={8.4} patternUnits="userSpaceOnUse">
      <path
        d="M0.7 2.1a1.6 1.6 0 0 0 3.2 0M-1.6 6.3a1.6 1.6 0 0 0 3.2 0M3 6.3a1.6 1.6 0 0 0 3.2 0"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
    </pattern>
  )
}

/**
 * The body every man in these panels shares, facing left, in its own frame:
 * feet on y = 0, the crown of the head at about y = -218. A knee-length mail
 * shirt split at the front, a cloak behind, legs and boots.
 */
const BODY = {
  cloak: 'M6 -171C20 -170 28 -162 30 -144C33 -110 38 -70 44 -28C31 -22 17 -22 4 -26L8 -100Z',
  neck: 'M-7 -178L6 -180L9 -166L-10 -166Z',
  shirt:
    'M-9 -170C-16 -170 -21 -166 -22 -158C-24 -148 -21 -138 -18 -128C-21 -110 -25 -88 -27 -66L25 -66C23 -88 19 -110 16 -128C19 -140 21 -154 19 -164C16 -170 8 -171 -9 -170Z',
  bootFront: 'M-23.5 -14L-11.5 -14L-11 0L-34 0C-34 -4 -30 -6.5 -24 -8Z',
  bootBack: 'M5.5 -14L17.5 -14L18 0L-5 0C-5 -4 -1 -6.5 5 -8Z',
  scabbard: 'M-3 -124L31 -46',
}
const LEGS = ['M-9 -72L-14 -46L-17.5 -12', 'M9 -72L10 -46L11.5 -12']
/** The grip and cross of a sword worn on the far hip, its hilt forward. */
const SWORD_HILT = 'M-4 -121L-16 -131.5M-14.5 -118.5L-6.5 -128'

/**
 * Heads in profile, facing left, in the body's frame. `beard` is Macbeth's
 * and Macduff's, a short beard; `young` is beardless (Malcolm, the youngest of
 * them); `old` has a long beard to the chest (Siward, "Old Siward" in the
 * stage directions of 5.8).
 */
export const HEADS = {
  beard:
    'M10 -196C11 -206 6 -216 -3 -218C-11 -219 -16 -214 -17.5 -207L-18 -202L-17 -199.5L-22.5 -193.5L-18.8 -191.8L-19.4 -189.2L-18.2 -188.4L-19.6 -186.8C-20.5 -182 -18 -176 -12 -173.5C-6 -173 0 -176 4 -180C6 -184 9 -188 10 -196Z',
  young:
    'M10 -196C11 -206 6 -216 -3 -218C-11 -219 -16 -214 -17.5 -207L-18 -202L-17 -199.5L-22.5 -193.5L-18.8 -191.8L-19.4 -189.2L-18.2 -188.4L-18.9 -186.2C-19 -183 -17.5 -180.6 -14 -180C-9 -179.6 -3 -179 1.5 -180.5C5.5 -183.5 9 -189 10 -196Z',
  old: 'M10 -196C11 -206 6 -216 -3 -218C-11 -219 -16 -214 -17.5 -207L-18 -202L-17 -199.5L-22.5 -193.5L-18.8 -191.8L-19.4 -189.2L-18.2 -188.4L-19.6 -186.8C-21.5 -178 -20 -168 -14 -160C-10.5 -158 -7.5 -161 -5.5 -166C-2.5 -173 2 -178 4.5 -182C7.5 -186.5 9.5 -191 10 -196Z',
}

/** A conical helmet with a nose-guard: the plain helm of the eleventh century. */
const HELM =
  'M-19.4 -202.6L10.8 -199C11.4 -207 8.6 -214.6 2.6 -219.6C-0.6 -222.4 -2.8 -226.4 -3.4 -229.4C-4.6 -226.4 -6.8 -222.6 -10.2 -219.8C-15.6 -215.6 -19.2 -209.6 -19.4 -202.6Z'
const NASAL = 'M-19.6 -203L-21.6 -191L-19.2 -190.6L-17.4 -202.6Z'

/** Arms, in the body's frame: strokes for the limbs, shapes for the hands. */
export type Arms = {
  near?: string
  hand?: string
  far?: string
  farHand?: string
}

export type Look = {
  head: keyof typeof HEADS
  wear: 'crown' | 'helm' | 'bare'
  cloak?: boolean
  /** The hilt of his sword at his hip. */
  hilt?: boolean
  /** A transform for the head alone: a bow or a lift. */
  turn?: string
  /**
   * The rings of the mail shirt. Off for small figures against a pale sky,
   * which read better as solid black, as the reference's figures do.
   */
  mail?: boolean
}

/** Arms the panels share. */
export const ARMS = {
  /** Arms at his sides, the near fist by his thigh. */
  down: {
    near: 'M-12 -163C-16 -150 -18 -138 -17 -126C-16 -118 -15 -112 -14 -108',
    hand: 'M-18.5 -110C-19.5 -105 -18 -100 -14.5 -99C-11 -99 -9.5 -103 -10 -108Z',
  },
  /** One arm up, pointing forward and a little above his eyes. */
  point: {
    near: 'M-12 -163C-22 -167 -34 -172 -46 -177C-51 -179 -55 -180.5 -59 -181.5',
    hand: 'M-57 -185C-62 -186.6 -69 -187.8 -75.5 -187.8C-77.6 -187.6 -77.6 -184.8 -75.5 -184.6L-67.5 -183.6L-66.2 -180.4C-64.6 -178 -60 -177.6 -57 -179.6Z',
  },
  /** A sword held straight up above his head: the hail. Draw SWORD_ALOFT as `held`. */
  aloft: {
    near: 'M-12 -163C-18 -176 -22 -190 -24 -204C-25 -212 -25 -217 -25 -221',
    hand: 'M-29.6 -224.8C-30.4 -230 -27.4 -233.4 -24 -233C-20.4 -232.6 -19.4 -228.6 -20.4 -225C-21.8 -222 -27 -222 -29.6 -224.8Z',
  },
  /** Both hands up on the haft of an axe, raised to a bough. Draw AXE as `held`. */
  hew: {
    near: 'M-12 -163C-18 -176 -24 -190 -28 -203',
    hand: 'M-32.6 -206.4C-33.6 -211 -30.8 -214.4 -27.4 -214C-24 -213.4 -23 -209.6 -24 -206.4C-25.4 -203.6 -30 -203.6 -32.6 -206.4Z',
    far: 'M14 -163C8 -172 -4 -182 -14 -190',
    farHand:
      'M-18 -191.4C-19 -196 -16.2 -199.4 -12.8 -199C-9.4 -198.4 -8.4 -194.6 -9.4 -191.4C-10.8 -188.6 -15.4 -188.6 -18 -191.4Z',
  },
  /** One open hand raised before him, palm out: receiving a greeting. */
  greet: {
    near: 'M-12 -163C-22 -168 -30 -176 -34 -188',
    hand: 'M-38.4 -189.4C-40.4 -195 -40 -202 -37.2 -206.4C-35.8 -208.4 -33.6 -207.8 -33.6 -205.6L-33.8 -200.4L-31.6 -205C-30.4 -206.8 -28.2 -206 -28.4 -204L-30 -197.4C-29 -193.6 -30.6 -190 -33.8 -188.2Z',
  },
  /** Both arms forward, holding something upright before him. */
  bear: {
    near: 'M-12 -163C-22 -160 -30 -156 -38 -150',
    hand: 'M-42.6 -153.6C-43.6 -158.2 -40.8 -161.6 -37.4 -161.2C-34 -160.6 -33 -156.8 -34 -153.6C-35.4 -150.8 -40 -150.8 -42.6 -153.6Z',
  },
} satisfies Record<string, Arms>

/** A sword held aloft in the `aloft` fist: cross, grip and a long blade. */
export const SWORD_ALOFT =
  'M-27.2 -236.5L-26.2 -296L-25 -303L-23.8 -296L-22.8 -236.5ZM-33 -237.6H-17V-234.4H-33ZM-26.6 -234.4H-23.4V-222H-26.6Z'
/** An axe in the `hew` hands: the haft, and the blade forward at its head. */
export const AXE =
  'M-3.9 -186.1L-40.9 -223.1L-43.1 -220.9L-6.1 -183.9ZM-35.4 -222.6L-45.6 -206.8C-50.6 -202.6 -58.6 -204.4 -61.6 -210.2C-63.4 -219.4 -57.8 -229.6 -48.6 -233.8L-40.8 -227.6Z'

type Marks = { hair: string; beard: string; old: string; folds: string }
let figMarks: Marks | undefined
function figureMarks(): Marks {
  if (figMarks) return figMarks
  const r = rng(3105)
  // thick hair at the back of the head, swept back to the nape
  let hair = ''
  for (let i = 0; i < 9; i++) {
    const t = i / 8
    const sx = -12 + t * 18 + between(r, -1, 1)
    const sy = -214 + t * 4
    hair += gouge(sx, sy, sx + 6 + t * 4, sy + 14 + t * 8 + between(r, -2, 2), 0.55, 0.8)
  }
  // a short beard, cut as short downward strokes
  let beard = ''
  for (let i = 0; i < 7; i++) {
    const x = -17 + i * 2.6 + between(r, -0.5, 0.5)
    const y = -186 + Math.abs(i - 3) * 1.4
    beard += gouge(x, y, x + 1.6, y + 8 - Math.abs(i - 3) * 1.1, 0.5)
  }
  // an old man's long beard, cut white: long strands to the point
  let old = ''
  for (let i = 0; i < 8; i++) {
    const t = i / 7
    const x = -18 + t * 17 + between(r, -0.6, 0.6)
    old += gouge(x, -186 + t * 2, -14 + t * 6, -164 + t * 2 + between(r, -2, 2), 0.7, 0.6)
  }
  const folds =
    gouge(14, -160, 24, -60, 1, 1.4) +
    gouge(22, -140, 36, -40, 0.9, 1.2) +
    gouge(9, -120, 12, -40, 0.8)
  figMarks = { hair, beard, old, folds }
  return figMarks
}

/**
 * One man, cut as the reference cuts Fred: a paper halo round every part so
 * he reads as one shape with a single carved outline, then the parts in ink,
 * then the white cuts. `held` is drawn under the near arm (a sword's grip in
 * the fist); `children` over everything. Needs <MailPattern uid> in the
 * plate's <defs>.
 */
export function Warrior({
  uid,
  at,
  scale = 1,
  flip = false,
  look,
  arms,
  held,
  children,
}: {
  uid: string
  at: Pt
  scale?: number
  flip?: boolean
  look: Look
  arms: Arms
  held?: ReactNode
  children?: ReactNode
}) {
  const m = figureMarks()
  const head = HEADS[look.head]
  const turn = look.turn
  const halo = { fill: PAPER, stroke: PAPER, strokeWidth: 3.4, strokeLinejoin: 'round' as const }
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${flip ? -scale : scale} ${scale})`}>
      {/* the paper halo round the whole figure */}
      <g {...halo}>
        {look.cloak && <path d={BODY.cloak} />}
        {[BODY.shirt, BODY.neck, BODY.bootFront, BODY.bootBack].map((d) => (
          <path key={d} d={d} />
        ))}
        <g transform={turn}>
          <path d={head} />
          {look.wear === 'crown' && <path d={CROWN_BAND} />}
          {look.wear === 'helm' && <path d={HELM + NASAL} />}
        </g>
        {arms.hand && <path d={arms.hand} />}
        {arms.farHand && <path d={arms.farHand} />}
      </g>
      <g fill="none" stroke={PAPER} strokeLinecap="round">
        {LEGS.map((d) => (
          <path key={d} d={d} strokeWidth={15.4} />
        ))}
        {arms.near && <path d={arms.near} strokeWidth={13.4} />}
        {arms.far && <path d={arms.far} strokeWidth={13} />}
        <path d={BODY.scabbard} strokeWidth={9} />
      </g>
      {/* behind the body: the cloak and the scabbard */}
      {look.cloak && (
        <>
          <path d={BODY.cloak} fill={INK} />
          <path d={m.folds} fill={PAPER} />
        </>
      )}
      <path d={BODY.scabbard} stroke={INK} strokeWidth={5.6} strokeLinecap="round" />
      <g fill="none" stroke={INK} strokeWidth={12} strokeLinecap="round">
        {LEGS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={BODY.bootFront} fill={INK} />
      <path d={BODY.bootBack} fill={INK} />
      <path d={gouge(-13, -62, -16, -30, 0.8, 0.5) + gouge(8, -62, 9, -32, 0.7)} fill={PAPER} />
      <path d={BODY.neck} fill={INK} />
      <path d={BODY.shirt} fill={INK} />
      {/* the mail, the belt, the hem, and the slit at the front of the skirt */}
      {look.mail !== false && <path d={BODY.shirt} fill={`url(#${uid}-mail)`} />}
      <path
        d="M-19.6 -128.6C-8 -126 6 -126 16.6 -128.6"
        fill="none"
        stroke={INK}
        strokeWidth={5.4}
      />
      <path
        d="M-19.6 -128.6C-8 -126 6 -126 16.6 -128.6"
        fill="none"
        stroke={PAPER}
        strokeWidth={2.2}
      />
      <rect x={-6} y={-130.6} width={5} height={4.4} fill={INK} stroke={PAPER} strokeWidth={0.9} />
      <path d="M-27 -66.4L25 -66.4" stroke={PAPER} strokeWidth={1.4} />
      <path d="M-3 -66L-3.6 -88" stroke={INK} strokeWidth={3} />
      <path d="M-3 -66L-3.6 -88" stroke={PAPER} strokeWidth={1.2} />
      {look.hilt && (
        <>
          {/* the hilt of his sword, standing forward from the far hip */}
          <path d={SWORD_HILT} fill="none" stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
          <path d={SWORD_HILT} fill="none" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
          <circle cx={-17.6} cy={-133.4} r={3.6} fill={INK} stroke={PAPER} strokeWidth={1.3} />
        </>
      )}
      {/* the far arm, cut free of the body by its own paper edge */}
      {arms.far && (
        <>
          <path d={arms.far} fill="none" stroke={PAPER} strokeWidth={12.6} strokeLinecap="round" />
          <path d={arms.far} fill="none" stroke={INK} strokeWidth={9.4} strokeLinecap="round" />
        </>
      )}
      {arms.farHand && <path d={arms.farHand} fill={INK} stroke={PAPER} strokeWidth={1} />}
      <g transform={turn}>
        <path d={head} fill={INK} />
        {/* brow, eye, the line of the cheek, the ear */}
        <path d={gouge(-18.4, -203.6, -9, -204.6, 1.1, -0.3)} fill={PAPER} />
        <path d={gouge(-15.2, -199.2, -10.6, -199.6, 0.85)} fill={PAPER} />
        <path d={gouge(-13.5, -193, -7, -185.5, 0.6, 0.4)} fill={PAPER} />
        <path
          d="M1.2 -199.5C4.5 -199 5 -193.5 2 -192.5"
          fill="none"
          stroke={PAPER}
          strokeWidth={0.9}
        />
        {look.wear !== 'helm' && <path d={m.hair} fill={PAPER} />}
        {look.head === 'beard' && <path d={m.beard} fill={PAPER} />}
        {look.head === 'old' && <path d={m.old} fill={PAPER} />}
        {look.wear === 'crown' && (
          <>
            <path d={CROWN_BAND} fill={RED} />
            <path d="M-17.8 -208.6L9.6 -204.8" stroke={INK} strokeWidth={0.9} />
          </>
        )}
        {look.wear === 'helm' && (
          <>
            <path d={HELM} fill={INK} stroke={PAPER} strokeWidth={1} />
            <path d="M-19 -204.4L10.4 -200.8" stroke={PAPER} strokeWidth={1.4} />
            <path d={gouge(-12, -210, -4, -224, 1, -0.6)} fill={PAPER} />
            <path d={NASAL} fill={INK} stroke={PAPER} strokeWidth={0.9} />
          </>
        )}
      </g>
      {held}
      {/* the near arm, over everything */}
      {arms.near && (
        <>
          <path d={arms.near} fill="none" stroke={PAPER} strokeWidth={12.8} strokeLinecap="round" />
          <path d={arms.near} fill="none" stroke={INK} strokeWidth={9.6} strokeLinecap="round" />
        </>
      )}
      {arms.hand && <path d={arms.hand} fill={INK} />}
      {children}
    </g>
  )
}

/**
 * A figure in one flat colour, with no cuts: the shape it throws as a
 * shadow. Same frame, looks and arms as `Warrior`.
 */
export function WarriorSilhouette({
  look,
  arms,
  fill = INK,
}: {
  look: Look
  arms: Arms
  fill?: string
}) {
  return (
    <g fill={fill}>
      {look.cloak && <path d={BODY.cloak} />}
      {[BODY.shirt, BODY.neck, BODY.bootFront, BODY.bootBack].map((d) => (
        <path key={d} d={d} />
      ))}
      {arms.hand && <path d={arms.hand} />}
      <g transform={look.turn}>
        <path d={HEADS[look.head]} />
        {look.wear === 'crown' && <path d={CROWN_BAND} />}
        {look.wear === 'helm' && <path d={HELM + NASAL} />}
      </g>
      <g fill="none" stroke={fill} strokeLinecap="round">
        {LEGS.map((d) => (
          <path key={d} d={d} strokeWidth={12} />
        ))}
        {arms.near && <path d={arms.near} strokeWidth={9.6} />}
        {arms.far && <path d={arms.far} strokeWidth={9.4} />}
      </g>
    </g>
  )
}

// ── Macbeth ──────────────────────────────────────────────────────────────────

/**
 * Macbeth: the bearded head, the red crown, the cloak. Two poses: `fling`,
 * one hand thrown out to push something away, his sword at his hip; and
 * `reach`, head bowed and one open hand held out low towards something before
 * him.
 */
const POSES = {
  fling: {
    arms: {
      near: 'M-12 -163C-24 -159 -34 -155 -42 -155C-50 -157 -57 -162 -63 -167',
      hand: 'M-60.5 -163.5L-63.5 -171.5L-69.5 -180L-71.8 -178.6L-67.8 -171.4L-75 -177.8L-77 -175.9L-70.6 -168.8L-78.6 -172L-79.6 -169.6L-71.2 -165.2L-77.8 -164.6L-77.8 -162L-67.6 -160.4Z',
    },
    turn: undefined,
  },
  reach: {
    arms: {
      near: 'M-12 -163C-20 -156 -28 -148 -34 -144C-40 -141 -46 -140.5 -51 -141',
      hand: 'M-49 -145.4C-54 -147.4 -61 -147.8 -66 -146.2C-68 -145.4 -68 -143.4 -66 -142.8L-60 -141.8L-65.4 -139.6C-66.4 -138.6 -65.8 -137 -64.4 -137L-56 -137.6C-53 -136 -50 -136.2 -48 -138.2ZM-52 -145.6L-55.6 -151.4C-56.6 -152.4 -58.2 -151.6 -57.8 -150.2L-55.8 -144.8Z',
    },
    turn: 'rotate(-10 0 -176)',
  },
} satisfies Record<string, { arms: Arms; turn?: string }>
export type MacbethPose = keyof typeof POSES

const macbethLook = (pose: MacbethPose): Look => ({
  head: 'beard',
  wear: 'crown',
  cloak: true,
  hilt: pose === 'fling',
  turn: POSES[pose].turn,
})

export function Macbeth({
  uid,
  at,
  scale = 1,
  pose,
}: {
  uid: string
  at: Pt
  scale?: number
  pose: MacbethPose
}) {
  return (
    <Warrior uid={uid} at={at} scale={scale} look={macbethLook(pose)} arms={POSES[pose].arms} />
  )
}

/**
 * Macbeth's shadow shape. With `arm={false}` the near arm is left out, as if
 * held in line with the light: the shadow of a reaching arm falls back under
 * the arm itself and reads as a second hand.
 */
export function MacbethSilhouette({
  pose,
  fill = INK,
  arm = true,
}: {
  pose: MacbethPose
  fill?: string
  arm?: boolean
}) {
  const arms = POSES[pose].arms
  return <WarriorSilhouette look={macbethLook(pose)} arms={arm ? arms : {}} fill={fill} />
}

// ── Birnam Wood, the field and the sky ──────────────────────────────────────

/**
 * A tree's crown, or a whole wood's: a mass of overlapping rounds with a leafy
 * edge, and small paper leaf cuts inside, thicker towards the light. Fill
 * `mass` INK, then `cuts` PAPER.
 */
export function canopy(
  r: Rng,
  clusters: [number, number, number][],
  light: (x: number, y: number) => number,
  cutsPer = 22,
  edgeLeaves = 7,
) {
  let mass = ''
  let cuts = ''
  for (const [cx, cy, rad] of clusters) {
    mass += `M${n(cx - rad)} ${n(cy)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
    // leaves standing off the edge of each round
    for (let k = 0; k < edgeLeaves; k++) {
      const a = between(r, 0, Math.PI * 2)
      const x = cx + Math.cos(a) * rad
      const y = cy + Math.sin(a) * rad
      mass += gouge(x, y, x + Math.cos(a) * 8, y + Math.sin(a) * 8, 2.6)
    }
    for (let k = 0; k < cutsPer; k++) {
      const a = between(r, 0, Math.PI * 2)
      const d = Math.sqrt(r()) * rad * 0.92
      const x = cx + Math.cos(a) * d
      const y = cy + Math.sin(a) * d
      const L = light(x, y)
      if (r() > 0.15 + L * 0.85) continue
      const t = between(r, -0.9, 0.9)
      cuts += gouge(x, y, x + Math.cos(t) * 6, y + Math.sin(t) * 6 - 2, 0.5 + L * 1.4)
    }
  }
  return { mass, cuts }
}

/**
 * A pale sky engraved with ink: rows of horizontal cuts that thicken towards
 * the top, the reverse of `gougeField` on a black ground. Fill INK over a
 * PAPER sky. `dark(x, y)` is 0 (clear) to 1 (heavy).
 */
export function engravedSky(r: Rng, box: Box, dark: (x: number, y: number) => number) {
  let d = ''
  for (let y = box.y0 + 3; y < box.y1; y += 6) {
    let x = box.x0 + between(r, -30, 0)
    while (x < box.x1) {
      const len = between(r, 30, 110)
      const D = dark(x + len / 2, y)
      if (r() < D * 1.1)
        d += gouge(x, y + between(r, -0.6, 0.6), x + len, y + between(r, -0.6, 0.6), 0.3 + D * 2.1)
      x += len + between(r, 6, 26)
    }
  }
  return d
}

/** Grass and furrows on a paper field: short ink ticks, thicker nearer. */
export function fieldMarks(r: Rng, box: Box, count: number) {
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = Math.pow(r(), 0.8)
    const y = box.y0 + (box.y1 - box.y0) * t
    const x = between(r, box.x0, box.x1)
    const len = 6 + t * 16
    d += gouge(x, y, x + len, y + between(r, -1, 1), 0.5 + t * 1.3)
  }
  return d
}

/**
 * A soldier walking behind the bough he carries, "bear 't before him": only
 * his legs in mid-stride and the skirt of his mail show below it. Same frame
 * as `Warrior`, facing left; flip him to walk right. The bough is a small
 * crown of leaves on a stem, cut like the trees of the wood it came from.
 */
const STRIDE = {
  legs: ['M-9 -72L-19 -40L-27 -12', 'M9 -72L16 -40L22 -14'],
  bootFront: 'M-32.5 -16L-21.5 -16L-20.5 0L-43.5 0C-43.5 -4 -39.5 -6.5 -33.5 -8Z',
  bootBack: 'M16.6 -18.4L27.6 -15.6L25.6 -1.4L4.4 -4.8C5.6 -8.6 9.4 -10.4 15 -10.8Z',
  arm: 'M-12 -163C-18 -158 -22 -154 -25 -150',
  fist: 'M-31.6 -153.4C-32.6 -158 -29.8 -161.4 -26.4 -161C-23 -160.4 -22 -156.6 -23 -153.4C-24.4 -150.6 -29 -150.6 -31.6 -153.4Z',
}
/** The leaves of a carried bough, held up before the face and shoulders. */
const BOUGH_ROUNDS: [number, number, number][] = [
  [-20, -234, 24],
  [-44, -214, 21],
  [2, -214, 21],
  [-26, -190, 23],
  [-2, -184, 18],
  [-50, -186, 17],
]

export function boughCrown(seed: number) {
  const r = rng(seed)
  const crown = canopy(r, BOUGH_ROUNDS, (x, y) => clamp(0.55 - (y + 240) / 160), 6, 4)
  const stem = ribbon(
    [
      [-29, -124],
      [-28, -150],
      [-25, -180],
      [-22, -214],
    ],
    5,
    0.4,
    false,
  )
  return { ...crown, stem }
}

export function Bearer({
  at,
  scale = 1,
  flip = false,
  crown,
}: {
  at: Pt
  scale?: number
  flip?: boolean
  crown: { mass: string; cuts: string; stem: string }
}) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${flip ? -scale : scale} ${scale})`}>
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        <path d={BODY.shirt} />
        <path d={STRIDE.bootFront} />
        <path d={STRIDE.bootBack} />
      </g>
      <g fill="none" stroke={PAPER} strokeWidth={15.4} strokeLinecap="round">
        {STRIDE.legs.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={INK} strokeWidth={12} strokeLinecap="round">
        {STRIDE.legs.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={STRIDE.bootFront} fill={INK} />
      <path d={STRIDE.bootBack} fill={INK} />
      <path d={BODY.shirt} fill={INK} />
      <path
        d="M-19.6 -128.6C-8 -126 6 -126 16.6 -128.6"
        fill="none"
        stroke={PAPER}
        strokeWidth={2}
      />
      <path d="M-27 -66.4L25 -66.4" stroke={PAPER} strokeWidth={1.6} />
      <path d="M-3 -66L-3.6 -88" stroke={PAPER} strokeWidth={1.4} />
      <path d={STRIDE.arm} fill="none" stroke={PAPER} strokeWidth={12.8} strokeLinecap="round" />
      <path d={STRIDE.arm} fill="none" stroke={INK} strokeWidth={9.6} strokeLinecap="round" />
      {/* the bough, with one carved outline round the whole of it */}
      <g fill={INK} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round" paintOrder="stroke">
        <path d={crown.stem} />
        <path d={crown.mass} />
      </g>
      <path d={crown.cuts} fill={PAPER} />
      <path d={STRIDE.fist} fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}
