import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { HEAD, headAt } from './cut-figure'
import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave II: "One shadow more", the seventh moment in the guide's timeline.
 * The picture holds the whole scene, left to right as the text tells it:
 *
 * - "a room, not very large or handsome, but full of comfort. Near to the
 *   winter fire sat a beautiful young girl, so like that last that Scrooge
 *   believed it was the same, until he saw her, now a comely matron, sitting
 *   opposite her daughter." The children have gone "up to the top of the
 *   house; where they went to bed", and "the master of the house, having his
 *   daughter leaning fondly on him, sat down with her and her mother at his
 *   own fireside". So: the winter fire in the spot colour, Belle in her chair
 *   on one side of it, her husband in his on the other, their daughter
 *   leaning on him over the chair-back, her hair loose ("let loose waves of
 *   hair") after the children's romp. The toys the porter brought lie on the
 *   hearth: "a doll's frying-pan" and "a fictitious turkey, glued on a wooden
 *   platter".
 * - "'Belle,' said the husband, turning to his wife with a smile, 'I saw an
 *   old friend of yours this afternoon.'" So he turns to her, smiling, and
 *   she laughs "as he laughed".
 * - Then: "he seized the extinguisher-cap, and by a sudden action pressed it
 *   down upon its head. The Spirit dropped beneath it, so that the
 *   extinguisher covered its whole form; but though Scrooge pressed it down
 *   with all his force, he could not hide the light: which streamed from
 *   under it, in an unbroken flood upon the ground." So the Ghost is not seen
 *   at all: only the great cone, Scrooge bearing down on it with both hands,
 *   and the light pouring out under its rim across the floor, towards the
 *   family he has lost.
 *
 * Scrooge wears his "slippers, dressing-gown, and nightcap" as in every
 * Spirit's company: the shared ScroogeNightHead (scrooge-at-night.tsx), the
 * portrait's own head, bent over the cap. No one in the family is described
 * beyond these words, so they wear plain dress of the 1840s. Nothing is taken
 * from a film or stage production.
 */

const W = 860
const H = 340

/** Where the light pours out: the middle of the cap's rim, on the floor. */
const RIM: [number, number] = [524, 298]
const FIRE: [number, number] = [230, 214]

type Marks = {
  wall: string
  floor: string
  flood: string
  surround: string
  joints: string
  cone: string
  gown: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(707)
  // Two lights: the winter fire, and the flood from under the cap, which
  // climbs the wall behind Scrooge.
  const wallLight = (x: number, y: number) => {
    const fire = clamp(1 - Math.hypot(x - FIRE[0], (y - FIRE[1]) * 1.3) / 230) ** 1.1
    const flood = clamp(1 - Math.hypot((x - RIM[0]) / 240, (y - RIM[1]) / 220)) ** 0.7
    return Math.max(fire * 0.95, flood, 0.03)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 6, y1: 242 }, wallLight, {
    spacing: 6.8,
    len: [18, 80],
  })
  const floorLight = (x: number, y: number) => {
    const flood = clamp(1 - Math.hypot((x - RIM[0]) / 340, (y - RIM[1]) / 70)) ** 0.6
    const fire = clamp(1 - Math.hypot((x - FIRE[0]) / 160, (y - 255) / 30)) * 0.8
    return Math.max(flood, fire, 0.04)
  }
  const floor = gougeField(r, { x0: 0, x1: W, y0: 252, y1: 338 }, floorLight, {
    spacing: 5,
    len: [30, 120],
    gap: [3, 14],
    max: 3.6,
  })
  // The flood itself: spokes of light running out along the floor from under
  // the rim, flattened into the floor's perspective.
  let flood = ''
  const f = rng(708)
  for (let a = 0; a < 360; a += 4.8) {
    const ang = deg(a + between(f, -1.5, 1.5))
    const back = Math.sin(ang) < 0
    let rad = between(f, 66, 80)
    const to = back ? 150 : 330
    while (rad < to) {
      const len = between(f, 16, 40)
      const w = clamp(3.4 - rad / 110, 0.5, 3.4)
      const k = back ? 0.16 : 0.2
      flood += gouge(
        RIM[0] + Math.cos(ang) * rad,
        RIM[1] + Math.sin(ang) * rad * k,
        RIM[0] + Math.cos(ang) * (rad + len),
        RIM[1] + Math.sin(ang) * (rad + len) * k,
        w * (back ? 0.6 : 1),
      )
      rad += len + between(f, 4, 12)
    }
  }
  // stone of the fire surround
  let surround = ''
  for (let y = 166; y < 248; y += 6)
    surround += gouge(182, y, 195, y + 0.5, 0.8) + gouge(265, y + 3, 278, y + 3.5, 0.8)
  // floor joints, running to the back of the room
  let joints = ''
  for (let x = -300; x < 1200; x += 34) {
    const xb = 430 + (x - 430) * 1.9
    joints += wedge(x, 252, xb, 340, 0.6, 1.8)
  }
  // the metal of the cap: cuts running down from its knob, catching the light below
  let cone = ''
  const c = rng(709)
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    const bx = 470 + t * 108
    cone += gouge(
      522 + (t - 0.5) * 8,
      214,
      bx,
      290 + Math.sin(t * Math.PI) * 6,
      0.5 + t * 1.6 + between(c, 0, 0.3),
    )
  }
  const gown =
    gouge(700, 236, 716, 300, 1.4, -0.6) +
    gouge(688, 240, 696, 300, 1, -0.4) +
    gouge(662, 190, 676, 228, 1, -0.6)
  cached = { wall, floor, flood, surround, joints, cone, gown }
  return cached
}

function Halo({ d, w = LINE.carve * 2 }: { d: string; w?: number }) {
  return <path d={d} fill={PAPER} stroke={PAPER} strokeWidth={w} strokeLinejoin="round" />
}
function Knock({ d, w = 5 }: { d: string; w?: number }) {
  return <path d={d} fill={INK} stroke={INK} strokeWidth={w} strokeLinejoin="round" />
}
function Limb({
  d,
  w,
  halo = 0,
  color = INK,
}: {
  d: string
  w: number
  halo?: number
  color?: string
}) {
  return (
    <>
      {halo > 0 && (
        <path
          d={d}
          fill="none"
          stroke={PAPER}
          strokeWidth={w + halo}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={w}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

/**
 * A lit face on the shared HEAD (cut-figure.tsx), in its own frame facing
 * left: paper, with an ink halo, hair over it, and a few cut features. Hair
 * is ink, or with `fair` (its strands) paper cut round in ink: Belle and her
 * daughter are fair, as Belle is in her portrait and in "Belle releases him".
 * The first draft inked their hair dark, so the matron here was not the girl
 * of the panel before, whom the text says she is.
 */
function Face({
  at,
  hair,
  fair,
  smile = false,
  laugh = false,
  down = false,
}: {
  at: string
  hair: string
  fair?: string
  smile?: boolean
  laugh?: boolean
  down?: boolean
}) {
  return (
    <g transform={at}>
      <path d={HEAD} fill={INK} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
      <path d={HEAD} fill={PAPER} />
      {fair ? (
        <>
          <path d={hair} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <path d={fair} fill="none" stroke={INK} strokeWidth={0.7} strokeLinecap="round" />
        </>
      ) : (
        <path d={hair} fill={INK} />
      )}
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d="M-9.5 -5.2Q-6.5 -6.8 -3.5 -5.6" strokeWidth={1.3} />
        {laugh || down ? (
          <path d="M-8.6 -1.6Q-6.4 0 -4.2 -1.4" strokeWidth={1.1} />
        ) : (
          <path d="M-8.6 -1.8Q-6.4 -3 -4.2 -1.8" strokeWidth={1.1} />
        )}
        <path
          d={smile || laugh ? 'M-11.6 7.4Q-9.6 9.6 -7.2 8.2' : 'M-11.4 8L-8.4 7.8'}
          strokeWidth={1.1}
        />
        <path d="M3 -1C0.5 -1 0 3.5 2.5 4.5" strokeWidth={1} />
      </g>
      {!laugh && !down && <circle cx={-6.6} cy={-1.2} r={1} fill={INK} />}
    </g>
  )
}

/** Hair on the shared HEAD's frame. */
const BELLE_HAIR =
  'M-10.5 -7C-9 -14 -3 -17.5 3 -17.5C10 -17.5 14.5 -12 14.5 -4C14.5 1 13.5 5 11.5 8.5L7.5 8C8 4 7 0.5 4 -2C0.5 -4.6 -5 -6.2 -10.5 -7ZM12 -8.5C16 -9.5 19.5 -6.5 19 -2.5C18.5 1 15 2.5 12.5 1.5Z'
const HUSBAND_HAIR =
  'M-10.5 -7.5C-9 -14 -3 -17.5 3 -17.5C10 -17.5 14 -12 13.5 -3L11 1.5C9.5 -2 6.5 -4.8 2.5 -5.8C-2 -6.8 -6.5 -7.2 -10.5 -7.5ZM2.5 -5.8C3 -2 3.5 2 2.8 5L5.5 4C6 0 5.5 -3 4.5 -5.5Z'
/** Strands cut in Belle's fair hair: over the crown, and round the knot. */
const BELLE_STRANDS = 'M-6 -11.5Q2 -16 10 -12M-3 -8Q5 -12 12 -5.5M13.5 -6Q17 -5 16.5 -1.5'
/** Loose, long hair, falling down her back and over the chair. */
const DAUGHTER_HAIR =
  'M-10.5 -7C-9 -14 -3 -17.5 3 -17.5C10 -17.5 15 -12 15.5 -4C16.5 8 18 20 20 34C21 42 20 48 16 52C14 44 12 36 9 28C8 20 7 12 5 6C4 1 2 -2 -2 -4C-5 -5.5 -8 -6.5 -10.5 -7Z'
/** Strands cut in the daughter's fair hair, over the crown and down her back. */
const DAUGHTER_STRANDS = 'M-6 -11.5Q3 -16 11 -10.5M8 -3Q11 14 15.5 38M11.5 -6Q14 12 18 32'

/** The family are drawn at one size and brought forward, in front of the hearth. */
const S_FAM = 1.25
const FAMILY_AT = `translate(236 290) scale(${S_FAM}) translate(-230 -250)`

// ── Belle, the comely matron, in her chair left of the fire ────────────────

const BELLE_CHAIR = 'M70 164C70 156 78 152 86 154L90 222H150V232H74Z'
const BELLE_CHAIR_LEGS = ['M80 232V251', 'M146 232V251']
const BELLE_SKIRT =
  'M104 206C116 204 128 204 136 208C146 212 154 218 160 226C164 234 166 242 168 250L104 250C102 238 101 222 104 206Z'
const BELLE_BODICE =
  'M106 170C112 165 122 165 129 170C132 182 133 196 132 210L104 210C103 196 103 182 106 170Z'
const BELLE_COLLAR = 'M108 168C114 172 122 172 129 168L127 175C121 178 114 178 109 175Z'
const BELLE_ARM = 'M125 176C129 188 131 196 133 202C137 208 141 211 147 213'
const BELLE_HAND = 'M145 209C150 208 155 210 157 213C155 216 150 217 145 216Z'
const BELLE_HEAD = headAt(120, 145, 29, true)

// ── Her husband in his chair right of the fire, turning to her ─────────────

const CHAIR_BACK = 'M372 150C372 144 380 142 386 146L390 224H374Z'
const CHAIR_SEAT = 'M330 218H392V226H330Z'
const CHAIR_LEGS = ['M336 226V251', 'M386 226V251']
const HUSBAND_BODY =
  'M344 164C352 159 364 159 372 164C377 180 379 200 377 222L342 224C340 204 340 184 344 164Z'
const HUSBAND_THIGH = 'M350 218C338 219 326 220 316 222'
const HUSBAND_SHINS = ['M316 222C315 232 314 241 313 247', 'M330 223C329 232 328 241 327 247']
const HUSBAND_SHOES = [
  'M304 245C308 243 314 243 318 245L318 251H302Z',
  'M318 245C322 243 328 243 332 245L332 251H316Z',
]
const HUSBAND_HEAD = headAt(352, 146, 30)
const HUSBAND_STOCK = 'M345 158C350 162 358 163 364 160L365 166C358 169 350 168 345 165Z'

// ── Their daughter on a footstool at his knee, leaning on him ──────────────

const STOOL = 'M280 238H314V244H280ZM284 244V251M310 244V251'
const DAUGHTER_SKIRT =
  'M292 212C300 210 308 211 314 214C318 222 322 230 326 238L272 240C278 232 284 222 292 212Z'
const DAUGHTER_BODY =
  'M293 186C299 181 307 181 312 186C315 196 315 206 314 214L292 214C290 204 290 194 293 186Z'
const DAUGHTER_HEAD = headAt(309, 170, 26, true, 16)
/** His hand on her shoulder. */
const HUSBAND_ARM = 'M356 174C348 186 334 192 318 192'
const HUSBAND_HAND = 'M310 188C314 185 320 186 322 190C321 195 315 197 311 195Z'

// ── The fire and the hearth ────────────────────────────────────────────────

const SURROUND =
  'M178 160H282V250H262V196C262 187 255 183 247 183H213C205 183 198 187 198 196V250H178Z'
const FLAMES = [
  'M209 234C207 224 212 217 216 210C218 217 223 223 221 234Z',
  'M219 234C217 221 224 210 230 201C234 212 240 222 238 234Z',
  'M236 234C236 225 241 218 245 212C247 219 252 225 250 234Z',
]
const COALS = 'M206 234C208 229 215 228 220 231C226 227 235 227 241 231C247 228 253 230 255 234Z'
/** The porter's toys: a doll's frying-pan, and a turkey glued on a wooden platter. */
const PLATTER = 'M194 272C194 267 226 267 226 272C226 277 194 277 194 272Z'
const TOY_TURKEY =
  'M201 270C201 263 208 259 215 260C220 260 222 263 221 266L225 262L226 267L220 271Z'
const PAN =
  'M236 276C236 272 246 272 246 276C246 280 236 280 236 276ZM246 275.2L258 273L258.5 275L246.5 277.4Z'

// ── The extinguisher-cap and Scrooge ───────────────────────────────────────

const CONE = 'M522 204L592 294Q524 308 456 294Z'
const KNOB = 'M522 190C515 190 512 195 514 200C516 205 528 205 530 200C532 195 529 190 522 190Z'
const RIM_LINE = 'M456 294Q524 308 592 294'
const OLD_GOWN =
  'M600 150C614 142 634 144 648 152C664 164 676 186 682 210C692 240 704 272 718 304L628 306C632 282 636 258 640 238C632 222 620 198 608 180C601 170 597 160 600 150Z'
const OLD_ARMS = ['M618 164C592 174 564 186 540 196', 'M604 156C582 166 558 178 536 188']
const OLD_FISTS = [
  'M526 190C531 186 539 187 542 192C544 198 541 204 535 205C529 205 525 201 525 196Z',
  'M528 182C533 179 540 180 543 184C545 189 542 194 536 195C531 195 527 192 527 187Z',
]
const OLD_SLIPPERS = [
  'M618 302C626 300 640 300 646 303L645 310H614Z',
  'M700 304C708 302 722 302 728 305L727 312H696Z',
]
const OLD_HEAD_AT = 'translate(594 128) rotate(-30) scale(-0.3 0.3) translate(-110 -116)'

/** The door of the parlour, where the father came home. */
const DOOR = 'M760 64H842V250H760Z'

function OneShadowMore({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-cone`
  return (
    <g className="lc-push" style={timing({ origin: [470, 220], push: 1.03 })}>
      <defs>
        <clipPath id={clip}>
          <path d={CONE} />
        </clipPath>
      </defs>
      {/* the parlour wall and floor, lit by the fire and by the flood */}
      <path d={m.wall} fill={PAPER} />
      <rect x={0} y={242} width={W} height={8} fill={PAPER} />
      <rect x={0} y={246} width={W} height={1.4} fill={INK} />
      <path d={m.floor} fill={PAPER} />
      <path d={m.joints} fill={INK} />

      {/* the door */}
      <path d={DOOR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d="M770 76H832V148H770ZM770 160H832V238H770Z"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <circle cx={768} cy={160} r={2.4} fill={PAPER} />

      {/* the winter fire */}
      <rect x={166} y={150} width={128} height={9} fill={PAPER} />
      <rect x={166} y={159} width={128} height={1.6} fill={INK} />
      <path d={SURROUND} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.surround} fill={PAPER} />
      <path
        d="M204 242H256M206 248H254M212 234V250M248 234V250"
        stroke={PAPER}
        strokeWidth={2}
        fill="none"
      />
      <g fill={RED}>
        <path d={COALS} />
        {FLAMES.map((d, i) => (
          <path
            key={d}
            className="lc-flicker"
            style={timing({ dur: 0.75 + i * 0.05, delay: 0.1 + i * 0.1 })}
            d={d}
          />
        ))}
      </g>
      <path d="M164 250H296L304 262H156Z" fill={PAPER} />
      <path d="M156 262H304" stroke={INK} strokeWidth={1.6} />
      {/* the toys on the hearth-rug */}
      <path d={PLATTER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TOY_TURKEY} fill={INK} stroke={PAPER} strokeWidth={0.9} />
      <path d={PAN} fill={INK} stroke={PAPER} strokeWidth={0.9} />

      <g transform={FAMILY_AT}>
        {/* Belle, laughing as he laughed */}
        <Halo d={BELLE_CHAIR} />
        {BELLE_CHAIR_LEGS.map((d) => (
          <Limb key={d} d={d} w={4} halo={3.2} />
        ))}
        <path d={BELLE_CHAIR} fill={INK} />
        <Halo d={BELLE_SKIRT} />
        <Halo d={BELLE_BODICE} />
        <path d={BELLE_SKIRT} fill={INK} />
        <path d={BELLE_BODICE} fill={INK} />
        <path
          d={
            gouge(138, 214, 150, 248, 1.2, -0.4) +
            gouge(128, 214, 132, 248, 0.9) +
            gouge(122, 176, 126, 204, 0.8, -0.3)
          }
          fill={PAPER}
        />
        <Limb d={BELLE_ARM} w={8} halo={3.2} />
        <Knock d={BELLE_HAND} w={3} />
        <path d={BELLE_HAND} fill={PAPER} />
        <path d="M117 154L118 168L125 168L125 154Z" fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={BELLE_COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <Face at={BELLE_HEAD.at} hair={BELLE_HAIR} fair={BELLE_STRANDS} laugh />

        {/* her husband, turning to her with a smile */}
        <Halo d={CHAIR_BACK} />
        <Halo d={CHAIR_SEAT} />
        {CHAIR_LEGS.map((d) => (
          <Limb key={d} d={d} w={4} halo={2.6} />
        ))}
        <path d={CHAIR_BACK} fill={INK} />
        <path d={CHAIR_SEAT} fill={INK} />
        <Halo d={HUSBAND_BODY} />
        {HUSBAND_SHINS.map((d) => (
          <Limb key={d} d={d} w={8} halo={3.2} />
        ))}
        <Limb d={HUSBAND_THIGH} w={13} halo={3.2} />
        {HUSBAND_SHOES.map((d) => (
          <Halo key={d} d={d} />
        ))}
        {HUSBAND_SHINS.map((d) => (
          <Limb key={d} d={d} w={8} />
        ))}
        {HUSBAND_SHOES.map((d) => (
          <path key={d} d={d} fill={INK} />
        ))}
        <Limb d={HUSBAND_THIGH} w={13} />
        <path d={HUSBAND_BODY} fill={INK} />
        <path d={gouge(348, 170, 346, 214, 1, 0.6) + gouge(354, 168, 353, 206, 0.7)} fill={PAPER} />
        <path d="M350 156L351 164L360 164L360 154Z" fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={HUSBAND_STOCK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <Face at={HUSBAND_HEAD.at} hair={HUSBAND_HAIR} smile />

        {/* their daughter, leaning fondly on him, her hair let loose */}
        <path d={STOOL} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path
          d={DAUGHTER_SKIRT}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path d="M298 216L290 238M306 216L304 238M312 218L318 238" stroke={INK} strokeWidth={0.7} />
        <path d={DAUGHTER_BODY} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d="M300 190L299 212M306 190L307 212" stroke={INK} strokeWidth={0.6} />
        <Face at={DAUGHTER_HEAD.at} hair={DAUGHTER_HAIR} fair={DAUGHTER_STRANDS} down />
        <Limb d={HUSBAND_ARM} w={8} halo={2.6} />
        <Knock d={HUSBAND_HAND} w={2.4} />
        <path d={HUSBAND_HAND} fill={PAPER} />
      </g>

      {/* "he could not hide the light: which streamed from under it, in an unbroken flood upon the ground" */}
      <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.8 })}>
        <path d={m.flood} fill={PAPER} />
      </g>
      <ellipse cx={RIM[0]} cy={RIM[1] + 4} rx={74} ry={12} fill={PAPER} />
      <g className="lc-glow" style={timing({ delay: 0.3 })}>
        <ellipse
          cx={RIM[0]}
          cy={RIM[1] + 4}
          rx={96}
          ry={16}
          fill="none"
          stroke={PAPER}
          strokeWidth={2.2}
        />
      </g>

      {/* the extinguisher-cap, the Ghost wholly under it */}
      <path d={CONE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${clip})`}>
        <path d={m.cone} fill={PAPER} />
      </g>
      <path d={RIM_LINE} fill="none" stroke={PAPER} strokeWidth={3.4} />
      <path d={KNOB} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />

      {/* Scrooge, bearing down on it with all his force */}
      <Halo d={OLD_GOWN} />
      {OLD_SLIPPERS.map((d) => (
        <Halo key={d} d={d} />
      ))}
      <path d={OLD_GOWN} fill={INK} />
      {OLD_SLIPPERS.map((d) => (
        <path key={d} d={d} fill={INK} />
      ))}
      <path d={m.gown} fill={PAPER} />
      <path
        d="M604 162C614 176 626 196 636 222M646 214C660 214 672 212 684 208"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      {OLD_ARMS.map((d) => (
        <Limb key={d} d={d} w={13} halo={3.2} />
      ))}
      {OLD_FISTS.map((d) => (
        <Knock key={d} d={d} w={3} />
      ))}
      {OLD_FISTS.map((d) => (
        <path key={d} d={d} fill={PAPER} />
      ))}
      <path
        d="M531 190Q534 194 532 199M536 189Q539 193 537 198M533 183Q536 186 535 190M538 182Q541 185 540 189"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <g transform={OLD_HEAD_AT}>
        <ScroogeNightHead uid={uid} seed={71} />
      </g>
    </g>
  )
}

export const oneShadowMore: LinocutArt = { width: W, height: H, Draw: OneShadowMore }
