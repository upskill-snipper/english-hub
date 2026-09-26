import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow, Macbeth, MailPattern, stoneWall } from './dunsinane-kit'

/**
 * Act 5, Scene 3: "Macbeth at bay", the twentieth moment in the guide's
 * timeline. Every detail is from the scene:
 *
 * - "Bring me no more reports; let them fly all: / Till Birnam wood remove to
 *   Dunsinane / I cannot taint with fear." Macbeth stands in the window of his
 *   castle, and Birnam Wood lies far off on the hills behind him: the wood he
 *   trusts cannot move.
 * - "Give me my armour", "Come, put mine armour on; give me my staff", "Pull’t
 *   off, I say", "Bring it after me." He is half-armed, in mail and a
 *   breastplate, his sword at his hip, and his helmet and shield wait on a
 *   chest by the wall.
 * - The Doctor reports that Lady Macbeth is "Not so sick, my lord, / As she is
 *   troubled with thick-coming fancies"; asked to cure her, he answers
 *   "Therein the patient / Must minister to himself." Macbeth: "Throw physic to
 *   the dogs, I’ll none of it." So the Doctor holds out a phial, and
 *   Macbeth flings out his hand against it.
 * - Neither man is described. The Doctor is an older man, bareheaded, in a
 *   plain long girdled gown; Macbeth is drawn as in the other Act 5 panels
 *   (see ./dunsinane-kit.tsx).
 *
 * The spot colour is the crown, the one thing he still holds, and the torch on
 * the wall. Nothing is taken from a film or stage production. Seeds: 2001
 * (wall), 2002 (floor), 2003 (torchlight), 2004 (sky).
 */

const W = 860
const H = 340
const FLOOR = 250

/** Where things stand: the window's centre line, the torch, the two men. */
const WX = 404
const TORCH: [number, number] = [612, 84]
const MAC_AT: [number, number] = [428, 322]
const DOC_AT: [number, number] = [240, 318]

/** The window: an outer arched opening, and the narrower light within its splay. */
const WIN = { outerR: 78, outerTop: 100, innerR: 54, innerTop: 104, sill: 212 }
const OUTER = `M${WX - WIN.outerR} ${WIN.sill + 2}V${WIN.outerTop}A${WIN.outerR} ${WIN.outerR} 0 0 1 ${WX + WIN.outerR} ${WIN.outerTop}V${WIN.sill + 2}Z`
const INNER = `M${WX - WIN.innerR} ${WIN.sill - 6}V${WIN.innerTop}A${WIN.innerR} ${WIN.innerR} 0 0 1 ${WX + WIN.innerR} ${WIN.innerTop}V${WIN.sill - 6}Z`

/** The hills through the window, and Birnam Wood on the far one. */
const FAR_HILL = `M${WX - 56} 176C${WX - 30} 166 ${WX - 6} 166 ${WX + 16} 170C${WX + 34} 173 ${WX + 48} 168 ${WX + 56} 166`
const NEAR_HILL = `M${WX - 56} 192C${WX - 30} 186 ${WX} 188 ${WX + 20} 192C${WX + 36} 195 ${WX + 48} 192 ${WX + 56} 190`
const WOOD =
  'M0 12C-1 6 3 3 6 5C7 0 12 -2 15 2C17 -3 23 -3 25 1C28 -2 33 -1 34 4C38 3 41 7 40 11C28 15 12 15 0 12Z'

type Marks = {
  wall: { cuts: string; joints: string; edges: string }
  floor: string
  splay: string
  clouds: string
  farHill: string
  nearHill: string
  torch: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - WX) * 0.78, y - 124) / 236),
      clamp(1 - Math.hypot(x - TORCH[0], y - TORCH[1] - 8) / 118) * 0.85,
      0.05,
    )
  const wall = stoneWall(rng(2001), { x0: 0, x1: W, y0: 0, y1: FLOOR }, light)
  const floor = flagFloor(rng(2002), W, H, FLOOR, [WX, 70])

  // The splay of the window: ink lines running back to the light, heavier on
  // the left, which is turned away from it.
  let splay = ''
  for (let a = 0; a < 360; a += 4.5) {
    const t = (a * Math.PI) / 180
    const dx = Math.cos(t)
    const dy = Math.sin(t)
    splay += gouge(WX + dx * 40, 128 + dy * 40, WX + dx * 140, 128 + dy * 140, dx < 0 ? 1.6 : 0.7)
  }

  const r = rng(2004)
  let clouds = ''
  for (let i = 0; i < 6; i++) {
    const y = 66 + i * 11 + between(r, -2, 2)
    const x = WX - 60 + between(r, -10, 50)
    clouds += gouge(x, y, x + between(r, 30, 70), y + between(r, -1, 1), 0.7 + i * 0.12)
  }
  let farHill = ''
  for (let x = WX - 60; x < WX + 80; x += 3.4) farHill += `M${n(x)} 164L${n(x - 16)} 212`
  let nearHill = ''
  for (let x = WX - 60; x < WX + 80; x += 2.4) nearHill += `M${n(x)} 184L${n(x - 18)} 212`

  const torch = rays(rng(2003), TORCH[0], TORCH[1], { from: 14, to: 64, every: 7, width: 2.4 })
  const shadows =
    footShadow(MAC_AT[0], MAC_AT[1] + 2, 42) + footShadow(DOC_AT[0], DOC_AT[1] + 2, 36)
  cached = { wall, floor, splay, clouds, farHill, nearHill, torch, shadows }
  return cached
}

/**
 * The Doctor, facing right, in his own frame (feet on y = 0, about 200 tall):
 * a long girdled gown, grey hair, one arm held out with the phial.
 */
const DOC = {
  gown: 'M-6 -166C-15 -166 -21 -160 -23 -150C-26 -110 -29 -60 -32 -3L30 -3C27 -60 23 -110 19 -150C17 -160 10 -166 -6 -166Z',
  head: 'M-9 -186C-11 -195 -5 -200 3 -199C10 -198 13 -194 14 -189L14.4 -185.6L18.8 -180.4L15.2 -179L15.6 -176.4L14.4 -175.6L15 -173.2C14 -169 10 -167 6 -167L3 -164C-3 -166 -7 -173 -9 -186Z',
  sleeve: 'M10 -136L32 -142.5L31 -127C27 -117 16 -115 9.5 -121Z',
  hand: 'M31 -143.5C34 -146.5 39 -146.5 40.5 -143L40.5 -137C38.5 -134 34 -134 32 -136Z',
  shoe: 'M16 -4L33 -4C36.5 -2.5 36.5 0 34 0L15 0Z',
}
const DOC_ARM = 'M6 -158C10 -146 12 -138 14 -131L34 -139'
const DOC_HAIR =
  gouge(4, -197.6, -8, -186, 0.7, -1) +
  gouge(1, -197.4, -9.4, -181, 0.75, -1.2) +
  gouge(-2.6, -196.4, -9.6, -176, 0.7, -1) +
  gouge(-6, -193, -8.4, -172, 0.6, -0.6) +
  gouge(7, -197.4, -4, -190, 0.55, -0.8)
const DOC_HEAD_TURN = 'rotate(9 0 -166)'
const DOC_CUTS =
  gouge(-12, -150, -18, -10, 1.2, 1.2) +
  gouge(-2, -140, -4, -8, 1, 0.6) +
  gouge(10, -112, 16, -8, 1.1, -1) +
  gouge(-20, -120, -26, -30, 0.8, 0.8) +
  gouge(18, -150, 20, -120, 0.7, -0.4)

function Doctor({ at, scale }: { at: [number, number]; scale: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${scale})`}>
      {/* the paper halo */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        <path d={DOC.gown} />
        <path d={DOC.shoe} />
        <path d={DOC.sleeve} />
        <path d={DOC.hand} />
        <g transform={DOC_HEAD_TURN}>
          <path d={DOC.head} />
        </g>
      </g>
      <path d={DOC_ARM} fill="none" stroke={PAPER} strokeWidth={12.4} strokeLinecap="round" />
      {/* the figure in ink */}
      <path d={DOC.shoe} fill={INK} />
      <path d={DOC.gown} fill={INK} />
      <path d={DOC_CUTS} fill={PAPER} />
      <path d="M-19.5 -110C-6 -106 8 -106 19.5 -110" fill="none" stroke={PAPER} strokeWidth={1.8} />
      <path d="M-4 -107.5L-6 -86" stroke={PAPER} strokeWidth={1.2} />
      <g transform={DOC_HEAD_TURN}>
        <path d={DOC.head} fill={INK} />
        {/* grey hair, combed back from a high forehead */}
        <path d={DOC_HAIR} fill={PAPER} />
        {/* the brow, the eye cast down, the lines of an older face */}
        <path d={gouge(5, -187.5, 13, -187, 0.9)} fill={PAPER} />
        <path d={gouge(7.5, -183.2, 11.5, -182.2, 0.7, 0.3)} fill={PAPER} />
        <path d={gouge(6, -179, 9, -171, 0.5, -0.3)} fill={PAPER} />
      </g>
      <path d={DOC_ARM} fill="none" stroke={PAPER} strokeWidth={12.4} strokeLinecap="round" />
      <path d={DOC_ARM} fill="none" stroke={INK} strokeWidth={9} strokeLinecap="round" />
      <path d={DOC.sleeve} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={gouge(14, -130, 26, -122, 0.7)} fill={PAPER} />
      <path d={DOC.hand} fill={INK} />
      {/* the physic: a small glass phial, held up to the king */}
      <circle cx={40} cy={-152} r={9.2} fill={INK} />
      <rect x={36.2} y={-168} width={7.6} height={12} fill={INK} />
      <circle cx={40} cy={-152} r={6.6} fill={PAPER} />
      <rect x={38.2} y={-166} width={3.6} height={10} fill={PAPER} />
      <rect x={37.2} y={-167.6} width={5.6} height={2.2} fill={PAPER} />
      <path d="M34.2 -151.4H45.8" stroke={INK} strokeWidth={1.2} />
      <path d="M35.4 -148.2H44.6M37 -145.4H43" stroke={INK} strokeWidth={0.9} />
    </g>
  )
}

function MacbethAtBay({ uid }: ArtProps) {
  const m = marks()
  const id = { splay: `${uid}-splay`, inner: `${uid}-inner` }
  const [tx, ty] = TORCH
  return (
    <>
      <defs>
        <MailPattern uid={uid} />
        <clipPath id={id.splay}>
          <path d={OUTER + INNER} clipRule="evenodd" />
        </clipPath>
        <clipPath id={id.inner}>
          <path d={INNER} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [MAC_AT[0], 130], push: 1.03 })}>
        {/* the coursed stone of Dunsinane, lit from the window and the torch */}
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={INK} />
        <path d={m.wall.edges} fill={PAPER} />
        <path d={m.torch} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the window, deep in the wall, on the hills towards Birnam */}
        <path d={OUTER} fill={PAPER} />
        <g clipPath={`url(#${id.splay})`}>
          <path d={m.splay} fill={INK} />
        </g>
        <path d={OUTER} fill="none" stroke={INK} strokeWidth={3} />
        <path d={INNER} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <g clipPath={`url(#${id.inner})`}>
          <path d={m.clouds} fill={INK} />
          <path d={`${FAR_HILL}V212H${WX - 56}Z`} fill={PAPER} />
          <path d={m.farHill} stroke={INK} strokeWidth={LINE.hairline} />
          <path d={FAR_HILL} fill="none" stroke={INK} strokeWidth={1.4} />
          {/* Birnam Wood, far off on the hill */}
          <g transform={`translate(${WX - 52} 158)`}>
            <path d={WOOD} fill={INK} />
            <path d="M5 12V18M12 13V19M19 13V19M26 13V19M33 12V18" stroke={INK} strokeWidth={1.6} />
          </g>
          <path d={`${NEAR_HILL}V212H${WX - 56}Z`} fill={PAPER} />
          <path d={m.nearHill} stroke={INK} strokeWidth={1.1} />
          <path d={NEAR_HILL} fill="none" stroke={INK} strokeWidth={1.6} />
        </g>
        <rect x={WX - 88} y={WIN.sill} width={176} height={7} fill={PAPER} />
        <rect x={WX - 88} y={WIN.sill + 7} width={176} height={2} fill={INK} />

        {/* the torch in its iron bracket */}
        <path
          d={`M${tx - 10} ${ty + 48}H${tx + 10}M${tx} ${ty + 48}V${ty + 58}L${tx - 8} ${ty + 66}`}
          stroke={INK}
          strokeWidth={4}
          fill="none"
        />
        <path d={`M${tx - 10} ${ty + 48}H${tx + 10}`} stroke={PAPER} strokeWidth={1} />
        <path
          d={`M${tx + 3} ${ty + 52}L${tx - 5} ${ty + 14}`}
          stroke={INK}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <path
          d={`M${tx - 11} ${ty + 12}L${tx} ${ty + 10}L${tx + 2} ${ty + 18}L${tx - 9} ${ty + 20}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9, delay: 0.2 })}
          d={`M${tx - 5} ${ty + 12}C${tx - 13} ${ty + 6} ${tx - 12} ${ty - 4} ${tx - 7} ${ty - 12}C${tx - 6} ${ty - 6} ${tx - 3} ${ty - 5} ${tx - 2} ${ty - 10}C${tx + 3} ${ty - 4} ${tx + 4} ${ty + 6} ${tx - 5} ${ty + 12}Z`}
          fill={RED}
        />

        {/* his armour, waiting on a chest: the helmet and the shield */}
        <path d="M676 238H796V286H676Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M672 232H800V240H672Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(682, 252, 792, 252, 1) + gouge(682, 272, 792, 272, 1)} fill={PAPER} />
        <path d="M698 240V286M774 240V286" stroke={PAPER} strokeWidth={1.2} />
        <path
          d="M704 232C702 216 708 202 722 198C736 202 742 216 740 232Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M704 224H740" stroke={PAPER} strokeWidth={1.4} />
        <path d="M720 222V233" stroke={PAPER} strokeWidth={3.4} />
        <path d="M720 222V233" stroke={INK} strokeWidth={1.8} />
        <path d={gouge(712, 206, 710, 222, 0.9, 0.5)} fill={PAPER} />
        <circle cx={812} cy={254} r={32} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <circle cx={812} cy={254} r={26} fill="none" stroke={PAPER} strokeWidth={1.2} />
        <circle cx={812} cy={254} r={6.6} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d={gouge(791, 237, 801, 227, 1.2) + gouge(823, 281, 833, 269, 0.9)} fill={PAPER} />

        <Doctor at={DOC_AT} scale={1.1} />
        <Macbeth uid={uid} at={MAC_AT} scale={1.16} pose="fling" />
      </g>
    </>
  )
}

export const macbethAtBay: LinocutArt = { width: W, height: H, Draw: MacbethAtBay }
