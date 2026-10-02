import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_HAND,
  HEAD_SMALL_YOUNG,
  SHAKE_HAND,
  SMALL_PUPIL,
  SMALL_YOUNG_CUTS,
  gent,
  headAt,
  smallGent,
  type P,
  type Part,
} from './people'

/**
 * Chapter 12, "The Strange Story of Jonathan Small": "Small's story of
 * Agra", the fourteenth moment in the guide's timeline. Small's confession
 * goes back to the night of 1857 in the fort at Agra; the panel is that
 * night at the gate, in the moment before the merchant comes, so the murder
 * is suggested and never shown (the rules in ./people.tsx: no bodies, no
 * killing). Every detail is from the text:
 *
 * - "I was selected to take charge during certain hours of the night of a
 *   small isolated door upon the southwest side of the building. Two Sikh
 *   troopers were placed under my command"; "They were tall ... Mahomet Singh
 *   and Abdullah Khan by name". So the gate is a small arched door in the
 *   fort's great wall of stone, and the two troopers are taller than Small.
 *   The text does not describe their dress, so they wear the turban, the
 *   beard and the long coat of Sikh soldiers of the time, drawn plainly and
 *   with the same care as every face in the kit; the narrator's words for
 *   them are not used.
 * - "I was a raw recruit, and a game-legged one at that"; "this timber toe
 *   strapped to my stump" (his right leg, "just above the knee"). So Small is
 *   nineteen (HEAD_SMALL_YOUNG), his wooden leg on his near side as he faces
 *   right (smallGent), and he holds his musket: "'It is well,' he answered,
 *   handing me back my firelock."
 * - "The rain was still falling steadily ... Brown, heavy clouds were
 *   drifting across the sky, and it was hard to see more than a stone-cast. A
 *   deep moat lay in front of our door, but the water was in places nearly
 *   dried up"; "'We will go to the gate and share the watch with Mahomet
 *   Singh'"; "It was strange to me to be standing there ... waiting for the
 *   man who was coming to his death." So the three stand together on the
 *   stone before the gate in the rain, Mahomet Singh at the door, the moat
 *   below them with pools left in it.
 * - "Suddenly my eye caught the glint of a shaded lantern at the other side
 *   of the moat. It vanished among the mound-heaps, and then appeared again
 *   coming slowly in our direction." "'You will challenge him, Sahib, as
 *   usual,' whispered Abdullah ... 'Have the lantern ready to uncover'". So
 *   the far side is mound-heaps, and in a dip between two of them is the
 *   glint of the merchant's lantern: the spot colour, the one light in the
 *   picture, the man coming to his death. Abdullah Khan leans down to Small to
 *   whisper, and Small holds his own lantern shuttered, ready to uncover.
 *
 * The brown of the clouds is left to the words: the print has no brown.
 *
 * Seeds: 1401 (the clouds), 1402 (the rain), 1403 (the stones), 1404 (the
 * banks), 1405 (the glint).
 */

const W = 860
const H = 340
/** The top of the stone before the gate, where the three men stand. */
const LEDGE = 298
/** The glint of the shaded lantern across the moat. */
const GLINT: P = [706, 222]

type Marks = {
  sky: string
  rain: string
  rainNear: string
  stones: string
  bank: string
  mounds: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Heavy clouds, lit faintly from somewhere behind them: banded, lightest
  // low behind the three men's heads, black overhead and dark again over the
  // far side, so the glint shows.
  const band = (y: number) => 0.6 + 0.4 * Math.sin(y / 15 + Math.sin(y / 37) * 2)
  const light = (x: number, y: number) =>
    clamp(0.05 + 1.1 * clamp(1 - Math.hypot((x - 330) * 0.5, (y - 150) * 1.2) / 300) * band(y))
  const sky = gougeField(rng(1401), { x0: 196, x1: W, y0: 6, y1: 262 }, light, {
    spacing: 5.8,
    len: [18, 60],
    max: 4.4,
  })
  // The small, driving rain: short slanting cuts, behind the men and, a few,
  // in front of them low down.
  const r = rng(1402)
  let rain = ''
  let rainNear = ''
  for (let i = 0; i < 150; i++) {
    const x = between(r, 200, W + 20)
    const y = between(r, 8, 300)
    if (x > 600 && y < 64) continue
    const len = between(r, 10, 20)
    rain += gouge(x, y, x - len * 0.3, y + len, 0.42)
  }
  for (let i = 0; i < 24; i++) {
    const x = between(r, 20, W)
    const y = between(r, 300, 334)
    const len = between(r, 8, 14)
    rainNear += gouge(x, y, x - len * 0.3, y + len, 0.4)
  }
  // The fort wall: great courses of stone, the joints cut in paper.
  const s = rng(1403)
  let stones = ''
  for (let y = 22; y < LEDGE; y += 26) {
    stones += gouge(-4, y + between(s, -0.6, 0.6), 198, y + between(s, -0.6, 0.6), 0.7)
    let x = (y / 26) % 2 ? between(s, 6, 24) : between(s, 30, 48)
    while (x < 194) {
      if (!(x > 96 && x < 196 && y > 140)) stones += gouge(x, y + 2, x + 0.4, y + 24, 0.6)
      x += between(s, 44, 64)
    }
  }
  // The near bank falling into the moat, and the far one rising out of it.
  const b = rng(1404)
  let bank = ''
  for (let i = 0; i < 34; i++) {
    const t = between(b, 0, 1)
    const x = 398 + t * 60
    const y = LEDGE + 2 + t * 36 + between(b, -3, 3)
    if (y > H - 4) continue
    bank += gouge(x - 12, y, x + between(b, 4, 14), y + between(b, 1, 3), between(b, 0.5, 1))
  }
  for (let i = 0; i < 26; i++) {
    const x = between(b, 520, 850)
    const y = between(b, 262, 300)
    bank += gouge(x, y, x + between(b, 8, 20), y - between(b, 0, 3), between(b, 0.5, 0.9))
  }
  // "the mound-heaps": dark humps on the far side, with a dip between two of
  // them where the lantern shows.
  const mounds =
    'M500 300C516 282 540 262 572 254C604 248 626 252 648 262C664 240 690 232 712 236C736 240 750 230 776 222C806 214 836 218 866 230L866 300Z'
  const glow = rays(rng(1405), GLINT[0], GLINT[1], { from: 9, to: 54, every: 10, width: 1.8 })
  cached = { sky, rain, rainNear, stones, bank, mounds, glow }
  return cached
}

// ── THE TWO TROOPERS ────────────────────────────────────────────────────────

/**
 * A Sikh trooper's head, in the frame of the shared heads (facing right,
 * centred on (0, 0), crown near y -21, the neck at 26): a full beard from the
 * ear down below the chin, part of the head's own outline, and a moustache.
 * Fill with INK; SIKH_TURBAN on top, then the cuts.
 */
const HEAD_SIKH =
  'M-9 26C-11 20 -16.5 15 -17.4 6C-18.6 -9 -9.6 -21 2.4 -21C11.4 -21 16.2 -16.4 16.4 -10.4L16.6 -6.4L22.6 4.2L17 6L17.6 8.2L16.6 9.6C19.4 11.8 21 16 21.2 20.8C21.4 25.6 19.6 29.8 16.4 32.4C12.8 32.2 8.4 30.6 5 28.6L1 27Z'
/**
 * The turban, wound high over the brow and round the back of the head over
 * the ear, its outline stepped where each turn of the cloth crosses the last.
 */
const SIKH_TURBAN =
  'M16.8 -9.2C17.8 -12.4 18 -16 17.2 -19.4L17.8 -21.4C17.6 -25.4 15.6 -28.6 12.4 -30.4C8 -32.6 1.6 -32.4 -3.6 -30.6L-5.2 -29C-11 -27 -15.6 -22.6 -17.6 -17L-19.4 -15.6C-20.6 -10.6 -19.8 -5.4 -17.6 -1.4L-15.2 3.2L-11.4 1.8C-11.8 -2.6 -10.4 -6.6 -7 -9.4C-2.8 -12.8 3.8 -13.4 10.2 -12.4C12.8 -11.8 15 -10.6 16.8 -9.2Z'
/** Where the cloth crosses itself, cut in paper, rising from the back to the front. */
const SIKH_TURBAN_CUTS =
  gouge(-16.2, -1, 16.4, -15.6, 0.85, -1.6) +
  gouge(-18, -11, 16.2, -24, 0.8, -1.8) +
  gouge(-13.2, -22.6, 11.8, -29.2, 0.65, -1.2) +
  gouge(-8.6, -6.4, 2.6, -11.8, 0.45, -0.6)
/** His brow, eye, moustache, the line of the beard on the cheek and its strands. */
const SIKH_CUTS =
  gouge(5.6, -8, 15, -7, 1.1) +
  'M7.2 -3.4Q10.4 -5.6 13.4 -3.8Q10.4 -1.6 7.2 -3.4Z' +
  gouge(11.6, 8.4, 19.4, 8.8, 0.7, 0.7) +
  gouge(-1, 4, 4.4, 12.6, 0.4, 0.8) +
  gouge(18.6, 12.4, 19.4, 28.4, 0.5, -1) +
  gouge(16, 12.6, 16.6, 30.4, 0.5, -0.8) +
  gouge(13.2, 12.4, 13.4, 30.6, 0.5, -0.6) +
  gouge(10.4, 13, 10.4, 29.4, 0.45, -0.4) +
  gouge(7.6, 13.4, 7, 27.6, 0.45, -0.2) +
  gouge(4.6, 13, 3.6, 25.6, 0.4, 0)
const SIKH_PUPIL = 'M10.4 -3.6a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 1 0 -2.3 0Z'

/** Mahomet Singh, left "at the gate", standing tall in the doorway, keeping watch across the moat. */
const MAHOMET_HEAD = { d: HEAD_SIKH, at: [150, 92] as P, rot: 0, scale: 1.3 }
const MAHOMET_NECK: P = [142, 132]
const MAHOMET_HIP: P = [138, 214]
const MAHOMET: Part[] = gent({
  facing: 1,
  neck: MAHOMET_NECK,
  hip: MAHOMET_HIP,
  head: MAHOMET_HEAD,
  body: { width: 34, hem: 44, flare: 7 },
  arm: 9,
  leg: 10,
  near: {
    arm: [
      [146, 142],
      [154, 182],
      [158, 220],
    ],
    leg: [
      [140, 214],
      [146, 258],
      [148, LEDGE - 1],
    ],
    hand: { parts: SHAKE_HAND, scale: 0.95, rot: 8 },
  },
  far: {
    arm: [
      [136, 142],
      [130, 182],
      [134, 218],
    ],
    leg: [
      [136, 214],
      [128, 258],
      [124, LEDGE - 1],
    ],
  },
})

/** Abdullah Khan, "the taller ... of the pair", bending to whisper to Small. */
const ABDULLAH_HEAD = { d: HEAD_SIKH, at: [262, 92] as P, rot: 16, scale: 1.34 }
const ABDULLAH_NECK: P = [248, 130]
const ABDULLAH_HIP: P = [232, 212]
const ABDULLAH: Part[] = gent({
  facing: 1,
  neck: ABDULLAH_NECK,
  hip: ABDULLAH_HIP,
  head: ABDULLAH_HEAD,
  body: { width: 36, hem: 46, flare: 7, swing: 2 },
  arm: 9.4,
  leg: 10.4,
  near: {
    arm: [
      [252, 142],
      [264, 180],
      [270, 214],
    ],
    leg: [
      [234, 212],
      [242, 256],
      [246, LEDGE - 1],
    ],
    hand: { parts: SHAKE_HAND, scale: 0.98, rot: 6 },
  },
  far: {
    arm: [
      [244, 142],
      [238, 182],
      [242, 218],
    ],
    leg: [
      [230, 212],
      [220, 256],
      [214, LEDGE - 1],
    ],
  },
})
/** The sash at a trooper's waist: a band cut in paper across his coat, with its two edges. */
const sash = (hip: P, w: number) =>
  `M${hip[0] - w / 2} ${hip[1] - 1}L${hip[0] + w / 2} ${hip[1] - 4}L${hip[0] + w / 2} ${hip[1] - 9}L${hip[0] - w / 2} ${hip[1] - 6}Z`
const SASH_LINES = (hip: P, w: number) =>
  `M${hip[0] - w / 2 + 2} ${hip[1] - 3.6}L${hip[0] + w / 2 - 2} ${hip[1] - 6.4}`

// ── SMALL, NINETEEN, AT THE FRONT ───────────────────────────────────────────

/** A plain cap with a peak, in the frame of the heads. */
const CAP =
  'M-16.4 -10.6C-17 -19.4 -9.4 -25.8 1.4 -25.8C11.2 -25.8 17 -20.8 16.8 -12.8L26 -10.6C23.4 -8.2 19.2 -7.8 15.8 -8.6C6 -10.6 -6.2 -10.8 -16.4 -10.6Z'
const CAP_BAND = gouge(-15.8, -13.8, 16.4, -13.6, 0.85)
/** His black curls showing below the cap, at the nape and over the ear: cut in paper, stroked. */
const CURLS_BELOW_CAP =
  'M-15.6 -5.6Q-14.4 -8.2 -12 -7.2Q-11 -5.8 -12.6 -4.8M-16.4 0.6Q-15.2 -2 -12.8 -1Q-11.8 0.4 -13.4 1.4M-14.8 6.6Q-13.6 4 -11.2 5Q-10.2 6.4 -11.8 7.4M-9.4 -6.8Q-8.2 -9.4 -5.8 -8.4Q-4.8 -7 -6.4 -6'

const SMALL_HEAD = { d: HEAD_SMALL_YOUNG, at: [342, 128] as P, rot: 2, scale: 1.2 }
const SMALL_LAMP_ARM: P[] = [
  [344, 168],
  [352, 200],
  [370, 212],
]
/** His far hand, reaching back to hold the musket grounded behind him. */
const SMALL_GUN_ARM: P[] = [
  [336, 168],
  [322, 190],
  [306, 198],
]
const SMALL = smallGent({
  facing: 1,
  neck: [336, 160],
  hip: [330, 226],
  head: SMALL_HEAD,
  hat: CAP,
  body: { width: 30, hem: 16, flare: 4 },
  arm: 8.6,
  leg: 9.4,
  near: {
    arm: SMALL_LAMP_ARM,
    leg: [
      [334, 226],
      [344, 262],
      [346, LEDGE - 1],
    ],
    hand: { parts: GRIP_HAND, scale: 0.95, rot: 60 },
  },
  far: {
    arm: SMALL_GUN_ARM,
    leg: [
      [326, 226],
      [320, 262],
      [316, LEDGE - 1],
    ],
    hand: { parts: GRIP_HAND, scale: 0.95, rot: 0 },
  },
  peg: { side: 'near', stump: [344, 250], foot: [350, LEDGE - 1] },
})

/**
 * His musket, grounded at his side and held by the barrel, standing clear of
 * his back against the lit clouds: the barrel up past his shoulder, the butt
 * of the stock on the stone.
 *
 * REDRAWN on 2 October 2026 (review). It stood a few units behind his back,
 * so its paper edge ran into the paper outline of his coat and the musket
 * printed as one more line down his back, not as a gun. Now it stands clear
 * of him, between him and Abdullah Khan, and his far hand reaches back to it.
 */
const MUSKET = 'M298.4 296L300.6 200L302.6 136'
const MUSKET_STOCK = 'M292.4 297.6L304.4 297.6L302.8 252L298 249.4Z'
/** The barrel's bands and the lock, cut in paper. */
const MUSKET_CUTS = 'M299.6 210L301.4 210M301 176L302.6 176M301.6 152L303 152'
/**
 * "the lantern ready to uncover": a dark lantern, hung from his hand by its
 * ring, its shutter closed, so it gives no light. Cut to the same shape as
 * the carriage lamp of "The locked room at Pondicherry Lodge" (a pointed top
 * and a ring), so it reads as a lantern; its glass is covered.
 *
 * REDRAWN on 2 October 2026 (review). It was a flat-topped box under a bail
 * handle, which at panel size read as a mug or a pail.
 */
const LANTERN_AT = 'translate(368.6 245) scale(0.7)'

function SmallsStoryOfAgra({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  const mh = headAt(1, MAHOMET_HEAD.at, MAHOMET_HEAD.rot, MAHOMET_HEAD.scale)
  const ah = headAt(1, ABDULLAH_HEAD.at, ABDULLAH_HEAD.rot, ABDULLAH_HEAD.scale)
  const sh = headAt(1, SMALL_HEAD.at, SMALL_HEAD.rot, SMALL_HEAD.scale)
  const [gx, gy] = GLINT
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <path d={`M198 0H${W}V300H198Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        {/* the heavy clouds, and the rain falling */}
        <g clipPath={`url(#${skyClip})`}>
          <g className="lc-drift">
            <path d={m.sky} fill={PAPER} />
          </g>
          <path d={m.rain} fill={PAPER} />
        </g>

        {/* the far side: mound-heaps, and in the dip between two of them the glint of a lantern */}
        <path d={m.glow} fill={PAPER} />
        <path d={m.mounds} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={`M${gx - 6} ${gy + 9}V${gy - 4}Q${gx} ${gy - 11} ${gx + 6} ${gy - 4}V${gy + 9}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8, delay: 0.5 })}
          d={`M${gx} ${gy + 6}C${gx - 3.6} ${gy + 4} ${gx - 3} ${gy - 1} ${gx} ${gy - 6}C${gx + 3} ${gy - 1} ${gx + 3.6} ${gy + 4} ${gx} ${gy + 6}Z`}
          fill={RED}
        />

        {/* the moat, nearly dry, its pools catching what light there is */}
        <path d={`M392 ${LEDGE}L470 ${H + 6}H600L640 300H500L470 ${LEDGE}Z`} fill={INK} />
        <path
          d="M478 318C500 312 540 312 566 316C552 322 508 323 478 318ZM540 330C560 326 590 326 610 329C596 334 562 335 540 330Z"
          fill={PAPER}
        />
        <path
          d="M494 318.6a5 1.3 0 1 0 10 0a5 1.3 0 1 0 -10 0ZM528 317.4a4 1 0 1 0 8 0a4 1 0 1 0 -8 0ZM570 329.6a5 1.3 0 1 0 10 0a5 1.3 0 1 0 -10 0Z"
          fill="none"
          stroke={INK}
          strokeWidth={0.9}
        />
        <path d={m.bank} fill={PAPER} />

        {/* the fort wall, and its small door */}
        <rect x={-6} y={-6} width={204} height={LEDGE + 6} fill={INK} />
        <path d={m.stones} fill={PAPER} />
        <path d={`M198 -6V${LEDGE}`} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={`M96 ${LEDGE}V176Q96 124 146 124Q196 124 196 176V${LEDGE}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path
          d={`M106 ${LEDGE}V180Q106 136 146 136Q186 136 186 180V${LEDGE}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.hairline}
        />

        {/* the stone before the gate, and the bank falling into the moat */}
        <path d={`M-6 ${LEDGE}H392L470 ${H + 6}H-6Z`} fill={INK} />
        <rect x={-6} y={LEDGE} width={398} height={5} fill={PAPER} />
        <path d={`M392 ${LEDGE + 2}L470 ${H + 6}`} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(20, 318, 380, 320, 0.7) + gouge(40, 334, 420, 335, 0.6)} fill={PAPER} />

        {/* Mahomet Singh, at the gate */}
        <Figure parts={MAHOMET}>
          <g transform={mh}>
            <path d={SIKH_TURBAN} fill={INK} stroke={PAPER} strokeWidth={1.1} />
            <path d={SIKH_TURBAN_CUTS + SIKH_CUTS} fill={PAPER} />
            <path d={SIKH_PUPIL} fill={INK} />
          </g>
          <path
            d={
              sash(MAHOMET_HIP, 30) +
              gouge(132, 150, 128, 202, 0.9, 1) +
              gouge(150, 222, 160, 254, 0.8, -1)
            }
            fill={PAPER}
          />
          <path d={SASH_LINES(MAHOMET_HIP, 30)} stroke={INK} strokeWidth={0.8} />
        </Figure>

        {/* Abdullah Khan, bending to whisper */}
        <Figure parts={ABDULLAH}>
          <g transform={ah}>
            <path d={SIKH_TURBAN} fill={INK} stroke={PAPER} strokeWidth={1.1} />
            <path d={SIKH_TURBAN_CUTS + SIKH_CUTS} fill={PAPER} />
            <path d={SIKH_PUPIL} fill={INK} />
          </g>
          <path
            d={
              sash(ABDULLAH_HIP, 32) +
              gouge(238, 150, 228, 200, 0.9, 1) +
              gouge(246, 222, 258, 254, 0.8, -1)
            }
            fill={PAPER}
          />
          <path d={SASH_LINES(ABDULLAH_HIP, 32)} stroke={INK} strokeWidth={0.8} />
        </Figure>

        {/* Small: the musket grounded, the lantern shuttered, the wooden leg */}
        <path
          d={MUSKET}
          fill="none"
          stroke={PAPER}
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d={MUSKET_STOCK} fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round" />
        <path
          d={MUSKET}
          fill="none"
          stroke={INK}
          strokeWidth={4.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d={MUSKET_STOCK} fill={INK} />
        <path d="M299.4 290L301.8 172" stroke={PAPER} strokeWidth={0.9} />
        <path d={MUSKET_CUTS} stroke={PAPER} strokeWidth={1.2} />
        {/* the dark lantern, drawn before him so his fist closes over its ring */}
        <g transform={LANTERN_AT}>
          <path d="M-11 22H11L9 -16H-9Z" fill={INK} stroke={PAPER} strokeWidth={2.2} />
          <path d="M-12 -16L0 -26L12 -16Z" fill={INK} stroke={PAPER} strokeWidth={1.6} />
          <path d="M-5 -26Q0 -36 5 -26" fill="none" stroke={PAPER} strokeWidth={4.4} />
          <path d="M-5 -26Q0 -36 5 -26" fill="none" stroke={INK} strokeWidth={2.4} />
          {/* the shutter, closed over the glass, and its catch */}
          <rect
            x={-6}
            y={-11}
            width={12}
            height={24}
            rx={1.5}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.6}
          />
          <circle cx={3} cy={1} r={1.5} fill={PAPER} />
          <rect x={-12} y={20} width={24} height={4} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        </g>
        <Figure parts={SMALL.parts}>
          <g transform={sh}>
            <path d={SMALL_YOUNG_CUTS + CAP_BAND} fill={PAPER} />
            <path d={SMALL_PUPIL} fill={INK} />
            <path
              d={CURLS_BELOW_CAP}
              fill="none"
              stroke={PAPER}
              strokeWidth={0.9}
              strokeLinecap="round"
            />
          </g>
          <path d={SMALL.straps} stroke={PAPER} strokeWidth={0.9} />
          <path d={gouge(330, 176, 326, 220, 0.8, 0.8)} fill={PAPER} />
        </Figure>
        <path d={SMALL.peg} fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round" />
        <path d={SMALL.peg} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={SMALL.grain} stroke={INK} strokeWidth={0.8} />

        {/* the rain, a few streaks in front, low down */}
        <path d={m.rainNear} fill={PAPER} />
      </g>
    </>
  )
}

export const smallsStoryOfAgra: LinocutArt = { width: W, height: H, Draw: SmallsStoryOfAgra }
