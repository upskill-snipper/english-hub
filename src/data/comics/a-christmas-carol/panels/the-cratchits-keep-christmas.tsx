import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { HEAD, headAt } from './cut-figure'
import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave III: "The Cratchits keep Christmas", the eighth moment in the guide's
 * timeline, at the moment the pudding comes in. Every detail is from the text:
 *
 * - The Ghost of Christmas Present: "a jolly Giant, glorious to see; who bore
 *   a glowing torch, in shape not unlike Plenty's horn"; "clothed in one
 *   simple green robe, or mantle, bordered with white fur"; "its capacious
 *   breast was bare"; "Its feet ... were also bare; and on its head it wore
 *   no other covering than a holly wreath, set here and there with shining
 *   icicles. Its dark brown curls were long and free; free as its genial
 *   face, its sparkling eye, its open hand"; "Girded round its middle was an
 *   antique scabbard; but no sword was in it". And "notwithstanding his
 *   gigantic size, he could accommodate himself to any place with ease; and
 *   ... he stood beneath a low roof quite as gracefully": so he stoops in the
 *   Cratchits' doorway under their low beam, where "on the threshold of the
 *   door the Spirit smiled, and stopped to bless Bob Cratchit's dwelling with
 *   the sprinkling of his torch". Scrooge came "holding to his robe", in the
 *   nightcap and dressing-gown he wears in every Spirit's company.
 * - "Bob took Tiny Tim beside him in a tiny corner at the table"; "he bore a
 *   little crutch". Bob came in with "at least three feet of comforter
 *   exclusive of the fringe, hanging down before him"; Peter wears his
 *   "monstrous shirt collar"; Belinda is "brave in ribbons"; the two young
 *   Cratchits "crammed spoons into their mouths"; Martha, who hid behind the
 *   closet door, is up and helping.
 * - The goose is gone: Mrs Cratchit surveys "one small atom of a bone upon the
 *   dish". Then she "entered--flushed, but smiling proudly--with the pudding,
 *   like a speckled cannon-ball, so hard and firm, blazing in half of
 *   half-a-quartern of ignited brandy, and bedight with Christmas holly stuck
 *   into the top." So the pudding is the light of the room, in the spot
 *   colour, and her cheek is flushed. "A great deal of steam!" comes from the
 *   wash-house door, where the copper was.
 *
 * The robe's green cannot be printed and is left to the words. The family are
 * drawn plainly, as the text says they were: "They were not a handsome family;
 * they were not well dressed". Nothing is taken from a film or stage
 * production.
 */

const W = 860
const H = 340

/**
 * The family and their table are drawn at one size and brought forward by
 * S_FAM about the foot of the table, so they read at phone width.
 */
const S_FAM = 1.15
const FAMILY_AT = `translate(526 330) scale(${S_FAM}) translate(-526 -330)`
/** The pudding, the brightest thing in the room, where it prints once scaled. */
const PUDDING: [number, number] = [526 + (500 - 526) * S_FAM, 330 + (134 - 330) * S_FAM]
/** The mouth of the Ghost's torch. */
export const TORCH: [number, number] = [266, 78]

type Marks = {
  wall: string
  doorLight: string
  glow: string
  sprinkles: [number, number, number][]
  steam: string
  cloth: string
  beam: string
  boards: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(808)
  const wallLight = (x: number, y: number) => {
    const pud = clamp(1 - Math.hypot(x - PUDDING[0], (y - PUDDING[1]) * 1.1) / 240) ** 1.1
    const torch = clamp(1 - Math.hypot(x - TORCH[0], y - TORCH[1]) / 120) * 0.8
    return Math.max(pud, torch, 0.04)
  }
  const wall = gougeField(r, { x0: 214, x1: W, y0: 32, y1: 226 }, wallLight, {
    spacing: 6.8,
    len: [18, 80],
  })
  // Daylight in the open doorway behind the Ghost, so his robe stands dark
  // against it: cut only where it shows, beside his robe and over his shoulders.
  const doorLit = (x: number, y: number) =>
    clamp(0.9 - Math.abs(x - 115) / 300 - Math.abs(y - 170) / 800)
  const doorCut = { spacing: 7.6, len: [24, 70] as [number, number], max: 4.8 }
  const doorLight =
    gougeField(r, { x0: 24, x1: 62, y0: 40, y1: 322 }, doorLit, doorCut) +
    gougeField(r, { x0: 62, x1: 206, y0: 40, y1: 110 }, doorLit, doorCut)
  const glow = rays(rng(81), PUDDING[0], PUDDING[1] - 8, {
    from: 34,
    to: 118,
    every: 7,
    width: 3.4,
  })
  // "the sprinkling of his torch": drops falling over the room from its mouth
  const s = rng(83)
  const sprinkles: [number, number, number][] = []
  for (let i = 0; i < 22; i++) {
    const t = between(s, 0.05, 1)
    sprinkles.push([
      TORCH[0] + 12 + t * 120 + between(s, -8, 8),
      TORCH[1] + 12 + t * t * 90 + between(s, -10, 12),
      between(s, 0.9, 1.8),
    ])
  }
  // "A great deal of steam!": a few loose wisps rising in the wash-house door
  const w = rng(84)
  let steam = ''
  for (let i = 0; i < 6; i++) {
    const y = 84 + i * 22 + between(w, -4, 4)
    const x0 = 764 + between(w, -6, 10)
    const pts: [number, number][] = []
    for (let k = 0; k <= 9; k++) pts.push([x0 + k * 9, y + Math.sin(k * 0.9 + i) * 4 - k * 1.4])
    steam += ribbon(pts, between(w, 3.4, 6.4), 0.8)
  }
  // folds in the cloth's fall
  const f = rng(85)
  let cloth = ''
  for (let x = 356; x < 700; x += between(f, 14, 26))
    cloth += gouge(x, 244, x + between(f, -3, 3), 288, between(f, 0.4, 0.8))
  // the grain of the low beam, and the floorboards
  let beam = ''
  for (let y = 12; y < 26; y += 4.4)
    beam += gouge(0, y, W, y + between(f, -1, 1), 0.5, between(f, -0.5, 0.5))
  let boards = ''
  for (let y = 306; y < 338; y += 7)
    boards += gouge(214, y, W, y + between(f, -1, 1), 0.7 + (y - 306) / 30)
  cached = {
    wall,
    doorLight,
    glow,
    sprinkles,
    steam,
    cloth,
    beam,
    boards,
  }
  return cached
}

function Halo({ d, w = 3.2 }: { d: string; w?: number }) {
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

/** Hair on the shared HEAD's frame (facing left): short, gathered back, or curly and long. */
export const HAIR_SHORT =
  'M-10.5 -7.5C-9 -14 -3 -17.5 3 -17.5C10 -17.5 14 -12 13.5 -3L11 1.5C9.5 -2 6.5 -4.8 2.5 -5.8C-2 -6.8 -6.5 -7.2 -10.5 -7.5Z'
export const HAIR_BACK =
  'M-10.5 -7C-9 -14 -3 -17.5 3 -17.5C10 -17.5 14.5 -12 14.5 -4C14.5 1 13.5 5 11.5 8.5L7.5 8C8 4 7 0.5 4 -2C0.5 -4.6 -5 -6.2 -10.5 -7ZM12 -8.5C16 -9.5 19.5 -6.5 19 -2.5C18.5 1 15 2.5 12.5 1.5Z'
const HAIR_CURLS =
  'M-10.5 -7.5C-11 -13 -6 -17 -1 -18.5C2 -21 7 -21 9 -18.5C13 -19 17 -15 16.5 -11C19.5 -8 19.5 -3 17 0C19 4 18 9 15 11L10 12C9 7 8 3 5 0C1 -4 -5 -6.5 -10.5 -7.5Z'

/** A bust behind the table: shoulders at `sy`, `w` wide, down to the table-top. */
function bust(cx: number, sy: number, w: number): string {
  const h = w / 2
  return `M${n(cx - h + 3)} ${n(sy + 2)}C${n(cx - h / 2)} ${n(sy - 3)} ${n(cx + h / 2)} ${n(sy - 3)} ${n(cx + h - 3)} ${n(sy + 2)}C${n(cx + h)} ${n(sy + 12)} ${n(cx + h + 1)} ${n(sy + 22)} ${n(cx + h + 1)} 228H${n(cx - h - 1)}C${n(cx - h - 1)} ${n(sy + 22)} ${n(cx - h)} ${n(sy + 12)} ${n(cx - h + 3)} ${n(sy + 2)}Z`
}

/**
 * A lit face on the shared HEAD (cut-figure.tsx): paper, ink halo, hair, and
 * a few cut features, in the head's own frame (facing left). Placed with
 * headAt(), which flips it to face right. Reused by "A vacant seat".
 */
export function LitFace({
  at,
  hair,
  smile = false,
  shut = false,
  flush = false,
  spoon = false,
  sad = false,
}: {
  at: string
  hair: string
  smile?: boolean
  shut?: boolean
  flush?: boolean
  spoon?: boolean
  sad?: boolean
}) {
  const mouth = smile
    ? 'M-11.6 7.2Q-9.6 9.8 -7 8.2'
    : sad
      ? 'M-11.6 8.6Q-9.6 7 -7.4 8.4'
      : 'M-11.4 8L-8.4 7.8'
  return (
    <g transform={at}>
      <path d={HEAD} fill={INK} stroke={INK} strokeWidth={4.4} strokeLinejoin="round" />
      <path d={HEAD} fill={PAPER} />
      <path d={hair} fill={INK} />
      {flush && <ellipse cx={-4.6} cy={4.4} rx={3.4} ry={2.4} fill={RED} />}
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path
          d={sad ? 'M-9.5 -6.4Q-6.5 -5.4 -3.5 -6.8' : 'M-9.5 -5.2Q-6.5 -6.8 -3.5 -5.6'}
          strokeWidth={1.4}
        />
        {shut ? (
          <path d="M-8.6 -1.6Q-6.4 0 -4.2 -1.4" strokeWidth={1.2} />
        ) : (
          <path d="M-8.6 -1.8Q-6.4 -3 -4.2 -1.8" strokeWidth={1.2} />
        )}
        <path d={mouth} strokeWidth={1.2} />
        <path d="M3 -1C0.5 -1 0 3.5 2.5 4.5" strokeWidth={1.1} />
      </g>
      {!shut && <circle cx={-6.6} cy={-1.2} r={1.1} fill={INK} />}
      {spoon && (
        <path d="M-11 8L-21 5.4" stroke={PAPER} strokeWidth={2} strokeLinecap="round" fill="none" />
      )}
    </g>
  )
}

// ── The Ghost of Christmas Present, stooping in the doorway ────────────────

const GHOST_ROBE =
  'M84 108C104 92 150 90 180 104C196 116 204 142 206 172C208 214 210 262 216 314L46 316C50 272 54 226 58 184C62 150 68 124 84 108Z'
/** "its capacious breast was bare": the robe open at the neck, edged with fur. */
const GHOST_BREAST =
  'M162 100C172 100 180 104 186 110C184 128 180 142 174 152C170 136 166 118 162 100Z'
const GHOST_FUR_EDGE = 'M186 110C184 128 180 142 174 152'
const GHOST_HEAD = headAt(160, 70, 58, true, 12)
/** His long curls, falling behind his head to his shoulders: round locks, [cx, cy, r]. */
const GHOST_CURLS: [number, number, number][] = [
  [142, 44, 8],
  [133, 50, 8.5],
  [126, 60, 9],
  [121, 72, 9],
  [119, 85, 9.5],
  [119, 98, 9.5],
  [121, 111, 9],
  [128, 121, 8.5],
  [132, 66, 8],
  [130, 80, 8.5],
  [131, 94, 8.5],
  [133, 107, 8],
  [140, 116, 7],
]
const GHOST_ARM = 'M184 120C204 118 222 110 240 100'
const GHOST_HAND = 'M236 94C242 90 250 92 252 98C252 104 246 108 240 107C236 105 234 100 236 94Z'
/** "a glowing torch, in shape not unlike Plenty's horn". */
const TORCH_HORN =
  'M242 102C242 96 246 92 250 88C254 84 258 76 256 68L274 76C272 84 266 92 258 98C254 102 248 106 242 102Z'
const TORCH_FLAME =
  'M258 70C256 62 260 54 264 48C266 54 270 58 272 64C274 58 278 54 280 52C282 60 280 68 276 74Z'
/** "open hand": the other hand, held out at his side. */
const GHOST_LEFT_ARM = 'M80 132C70 160 64 184 60 206'
const GHOST_OPEN_HAND =
  'M58 204C53 208 51 216 53 222C55 227 62 227 64 222L66 213C68 208 66 204 62 202Z'
/** The empty scabbard at his girdle, its sheath "eaten up with rust". */
const GIRDLE = 'M58 192C100 200 150 200 206 192L207 200C150 208 100 208 57 200Z'
const SCABBARD = 'M120 198L128 196L162 284L156 288Z'
const GHOST_FEET = [
  'M152 314C158 311 170 311 178 314C182 316 182 320 178 321L150 321Z',
  'M104 314C110 311 122 311 128 314C132 316 132 320 128 321L100 321Z',
]
/**
 * The holly wreath with shining icicles, in the head's frame. Its berries take
 * the spot colour, as in "Fred's party": the Spirit's holly in Stave III has
 * "bright gleaming berries".
 */
const WREATH_LEAVES = [
  'M-13 -8.5L-11 -11L-9 -10L-7 -12.4L-5 -11.4L-3 -13.2L-4 -10L-6.5 -8.6L-9 -9L-11 -7.6Z',
  'M-4 -13L-2 -15.4L0 -14.4L2 -16.4L4 -15.2L6 -16.6L5.4 -13.6L3 -12.4L0.4 -12.8L-2 -11.8Z',
  'M5 -15L7.4 -16.8L9 -15.4L11.4 -16.4L12.6 -14.6L15 -14.8L13.6 -12.2L11 -11.8L8.6 -12.8L6.4 -12Z',
  'M13 -13L15.6 -13.8L16.4 -11.8L19 -11.6L18.8 -9.2L20.6 -7.6L18 -6.8L16 -8.2L14.6 -10Z',
]
const WREATH_BERRIES: [number, number][] = [
  [-4.6, -11.6],
  [4.6, -13.6],
  [13.4, -12.2],
]
const ICICLES =
  'M-9 -8.4L-8.3 -3.6L-7.6 -8.6ZM1 -12.4L1.7 -7.8L2.4 -12.6ZM10 -11.8L10.7 -7.4L11.4 -11.8ZM17 -7.4L17.6 -3.6L18.2 -7.4Z'

type GhostMarks = { robe: string; curls: string; fur: string; torchRays: string }
let ghostCached: GhostMarks | undefined
function ghostMarks(): GhostMarks {
  if (ghostCached) return ghostCached
  const f = rng(86)
  // the robe: long folds catching the daylight behind him
  let robe = ''
  for (let i = 0; i < 5; i++) {
    const x = 66 + i * 18 + between(f, -3, 3)
    robe += gouge(x + 12, 150 + i * 6, x + between(f, -6, 0), 312, 0.8 + (i < 2 ? 0.8 : 0), 0.8)
  }
  // his dark brown curls, long and free: a spiral cut into each lock
  let curls = ''
  for (const [cx, cy, rad] of GHOST_CURLS) {
    const a = between(f, 0, 6)
    const k = rad * 0.55
    curls += `M${n(cx + Math.cos(a) * k)} ${n(cy + Math.sin(a) * k)}A${n(k)} ${n(k)} 0 1 1 ${n(cx - Math.cos(a) * k * 0.3)} ${n(cy - Math.sin(a) * k * 0.3)}`
  }
  // white fur along the front edge of the robe and round its hem
  let fur = ''
  for (let i = 0; i < 24; i++) {
    const t = i / 23
    fur += `M${n(184 + t * 14 + between(f, -1, 1))} ${n(116 + t * 194)}l${n(between(f, -3, 3))} 3.4`
  }
  for (let x = 48; x < 214; x += 5) fur += `M${n(x)} 308l${n(between(f, -1.5, 1.5))} 7`
  const torchRays = rays(rng(82), TORCH[0], TORCH[1] - 4, {
    from: 14,
    to: 50,
    every: 10,
    width: 2.6,
  })
  ghostCached = { robe, curls, fur, torchRays }
  return ghostCached
}

/**
 * The Ghost of Christmas Present as this panel draws him, stooping, his torch
 * held out: exported so that "A vacant seat" shows the same giant. `stern`
 * lowers his brows and straightens his mouth, for the rebuke ("forbear that
 * wicked cant"). Drawn in this panel's coordinates; place it with a
 * transform. Its torch's mouth is at TORCH.
 */
export function GhostOfPresent({ stern = false }: { stern?: boolean }) {
  const g = ghostMarks()
  return (
    <g>
      <Halo d={GHOST_ROBE} w={3.4} />
      <Limb d={GHOST_LEFT_ARM} w={18} halo={3.4} />
      <path d={GHOST_ROBE} fill={INK} />
      <path d={g.robe} fill={PAPER} />
      <path d={GHOST_BREAST} fill={PAPER} />
      <path d={GHOST_FUR_EDGE} fill="none" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
      <path d="M186 112L200 312" stroke={PAPER} strokeWidth={7} />
      <path d="M46 311H216" stroke={PAPER} strokeWidth={8} />
      <path d={g.fur} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={GIRDLE} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={SCABBARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M132 212L136 214M140 232L143 233M148 254L151 255" stroke={PAPER} strokeWidth={1.2} />
      <Limb d={GHOST_LEFT_ARM} w={18} />
      <Knock d={GHOST_OPEN_HAND} w={3} />
      <path d={GHOST_OPEN_HAND} fill={PAPER} />
      {GHOST_FEET.map((d) => (
        <g key={d}>
          <Knock d={d} w={3} />
          <path d={d} fill={PAPER} />
        </g>
      ))}
      <g fill={PAPER}>
        {GHOST_CURLS.map(([x, y, rad]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={rad + 1.7} />
        ))}
      </g>
      <g fill={INK}>
        {GHOST_CURLS.map(([x, y, rad]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={rad} />
        ))}
      </g>
      <path d={g.curls} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
      <g transform={GHOST_HEAD.at}>
        <path d={HEAD} fill={INK} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
        <path d={HEAD} fill={PAPER} />
        <path d={HAIR_CURLS} fill={INK} />
        <path
          d="M2 -15q2 -2.4 4 0M9 -14q2 -2.4 4 0M12 -6q2 -2.4 4 0M6 -9q2 -2.4 4 0"
          fill="none"
          stroke={PAPER}
          strokeWidth={0.8}
        />
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path
            d={stern ? 'M-9.8 -4.4Q-6.6 -6 -3.4 -6.8' : 'M-9.6 -5.6Q-6.4 -7.2 -3.4 -6'}
            strokeWidth={stern ? 1.4 : 1}
          />
          <path d="M-8.8 -1.8Q-6.4 -3.4 -4 -1.8" strokeWidth={0.9} />
          <path d={stern ? 'M-12 7.8L-7 7.6' : 'M-12 6.8Q-9.4 10.4 -6.4 8.2'} strokeWidth={0.9} />
          {!stern && <path d="M-6 3.6Q-4 5.6 -2 4" strokeWidth={0.6} />}
          <path d="M3 -1C0.5 -1 0 3.5 2.5 4.5" strokeWidth={0.8} />
        </g>
        <circle cx={-6.4} cy={-1.4} r={0.9} fill={INK} />
        <path d="M-5.6 -2.6L-5 -3.2" stroke={PAPER} strokeWidth={0.5} />
        <g transform="translate(3 -12) scale(1.3) translate(-3 12)">
          <path d={ICICLES} fill={PAPER} stroke={INK} strokeWidth={0.4} />
          {WREATH_LEAVES.map((d) => (
            <path
              key={d}
              d={d}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.6}
              strokeLinejoin="round"
            />
          ))}
          <path
            d="M-11.4 -9.2L-4.4 -11.2M-2.6 -13.4L4.4 -14.4M6.6 -14.4L13.4 -13.6M15 -11.6L19 -8.4"
            stroke={INK}
            strokeWidth={0.4}
          />
          <g fill={RED}>
            {WREATH_BERRIES.map(([x, y]) => (
              <circle key={`${x}`} cx={x} cy={y} r={1.2} />
            ))}
          </g>
        </g>
      </g>
      <Limb d={GHOST_ARM} w={16} halo={3.4} />
      <g className="lc-fade-in" style={timing({ delay: 0.2, dur: 1 })}>
        <path d={g.torchRays} fill={PAPER} />
      </g>
      <Knock d={TORCH_HORN} w={3} />
      <path d={TORCH_HORN} fill={PAPER} />
      <path
        d="M250 96C256 90 262 84 266 76M246 100C252 96 258 92 262 86"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.85, delay: 0.2 })}
        d={TORCH_FLAME}
        fill={RED}
      />
      <Knock d={GHOST_HAND} w={3} />
      <path d={GHOST_HAND} fill={PAPER} />
    </g>
  )
}

// ── Scrooge, holding to his robe ───────────────────────────────────────────

const SCROOGE_GOWN =
  'M222 196C234 192 246 194 254 202C258 220 258 240 256 262C256 282 258 302 260 320L212 322C214 300 216 280 214 260C212 240 214 216 222 196Z'
const SCROOGE_ARM = 'M226 212C218 226 212 238 208 250'
const SCROOGE_HAND =
  'M202 248C206 244 212 245 214 250C214 256 208 259 203 257C200 255 200 251 202 248Z'
const SCROOGE_SLIPPER = 'M240 318C246 316 258 316 264 319L263 324H238Z'
const SCROOGE_HEAD_AT = 'translate(242 174) scale(0.26) translate(-110 -116)'

// ── The family at their table ──────────────────────────────────────────────

const TABLE_TOP = 'M352 224H700L708 238H344Z'
const CLOTH =
  'M344 238H708V288C696 292 684 288 672 292C648 296 624 290 600 293C572 296 544 290 516 293C488 296 460 290 432 293C404 296 376 290 344 292Z'
const TABLE_LEGS = ['M356 292V330', 'M696 292V330']

type Sitter = {
  body: string
  head: { at: string }
  hair: string
  smile?: boolean
  spoon?: boolean
}
const SITTERS: [string, Sitter][] = [
  [
    'Tim',
    { body: bust(370, 204, 26), head: headAt(370, 190, 21, true), hair: HAIR_SHORT, smile: true },
  ],
  [
    'Bob',
    { body: bust(412, 186, 40), head: headAt(412, 168, 28, true), hair: HAIR_SHORT, smile: true },
  ],
  ['Peter', { body: bust(460, 188, 38), head: headAt(458, 170, 27, true), hair: HAIR_SHORT }],
  [
    'Belinda',
    { body: bust(606, 196, 32), head: headAt(606, 180, 23), hair: HAIR_BACK, smile: true },
  ],
  [
    'young1',
    { body: bust(642, 204, 26), head: headAt(642, 190, 20), hair: HAIR_SHORT, spoon: true },
  ],
  [
    'young2',
    { body: bust(676, 206, 26), head: headAt(676, 192, 19), hair: HAIR_BACK, spoon: true },
  ],
]

/** The little crutch, leaning at Tim's corner of the table. */
const CRUTCH = 'M346 196L342 300'
const CRUTCH_TOP = 'M339 196H353'
/** Bob's comforter: round his neck, and one long fringed end down his front. */
const COMFORTER = 'M398 184C406 188 418 188 426 184L427 190C418 194 406 194 398 190Z'
/** Peter's collars, up to his ears. */
const COLLARS = 'M447 188L451 175L458 186ZM462 186L468 173L473 188Z'

/** Mrs Cratchit, standing behind the table, holding out the pudding. */
const MRS_BODY =
  'M532 138C542 132 558 132 566 140C572 154 574 174 574 194C574 206 574 216 572 226H528C526 208 524 190 524 172C524 158 526 146 532 138Z'
const MRS_HEAD = headAt(548, 114, 28)
const MRS_ARMS = ['M536 150C528 156 522 152 516 148', 'M544 154C534 164 526 160 520 154']
const MRS_RIBBON = 'M558 140L564 134L568 140L564 144ZM568 140L574 136L574 144Z'
const PLATE = 'M476 152C476 148 524 148 524 152C524 156 476 156 476 152Z'
/** "like a speckled cannon-ball, so hard and firm". */
const PUD_BALL = 'M484 150C482 138 490 128 500 128C510 128 518 138 516 150Z'
const PUD_SPECKS: [number, number][] = [
  [490, 142],
  [496, 136],
  [504, 144],
  [510, 138],
  [498, 147],
  [492, 134],
  [506, 132],
  [512, 146],
]
const PUD_HOLLY = [
  'M498 128L495 122L498 121L497 116L501 118L503 114L505 119L508 118L506 123L504 128Z',
  'M502 126L506 120L509 122L512 118L514 122L517 122L514 126L508 129Z',
]
/** "blazing in half of half-a-quartern of ignited brandy" */
const PUD_FLAMES = [
  'M484 146C480 138 484 130 488 124C490 130 494 134 492 146Z',
  'M508 136C508 126 514 118 518 112C520 120 524 126 520 138Z',
  'M490 132C488 122 492 112 496 106C498 114 502 120 500 130Z',
]

/** Martha, standing at the end of the table. */
const MARTHA_DRESS =
  'M716 166C722 161 736 161 742 166C746 190 748 214 748 236C752 262 756 296 760 330H702C706 296 710 262 712 236C712 214 712 190 716 166Z'
const MARTHA_HEAD = headAt(728, 150, 26)
const MARTHA_ARM = 'M722 176C716 190 712 204 708 214'

/** The wash-house door behind them, with the copper's steam. */
const WASH_DOOR = 'M766 62H848V226H766Z'

function CratchitsKeepChristmas({ uid }: ArtProps) {
  const m = marks()
  const washClip = `${uid}-wash`
  const pudClip = `${uid}-pud`
  return (
    <g className="lc-push" style={timing({ origin: [500, 170], push: 1.03 })}>
      <defs>
        <clipPath id={washClip}>
          <path d={WASH_DOOR} />
        </clipPath>
        <clipPath id={pudClip}>
          <path d={PUD_BALL} />
        </clipPath>
      </defs>
      {/* the low room: its beam, its wall lit by the pudding, the open doorway */}
      <path d={m.wall} fill={PAPER} />
      <rect x={0} y={8} width={W} height={22} fill={INK} />
      <path d={m.beam} fill={PAPER} />
      <rect x={0} y={30} width={W} height={2} fill={PAPER} />
      <path d={m.doorLight} fill={PAPER} />
      <rect x={0} y={226} width={W} height={4} fill={INK} />
      <path d={m.boards} fill={PAPER} />
      <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.4 })}>
        <path d={m.glow} fill={PAPER} />
      </g>

      {/* the wash-house door, and the steam from the copper */}
      <path d={WASH_DOOR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${washClip})`}>
        <g className="lc-drift-r" style={timing({ dur: 3 })}>
          <path d={m.steam} fill={PAPER} />
        </g>
      </g>

      {/* the family at the table */}
      <g transform={FAMILY_AT}>
        {SITTERS.map(([k, s]) => (
          <g key={k}>
            <Halo d={s.body} w={3} />
            <path d={s.body} fill={INK} />
          </g>
        ))}
        <path
          d={gouge(404, 196, 402, 222, 0.8, 0.4) + gouge(452, 198, 450, 222, 0.8, 0.4)}
          fill={PAPER}
        />
        <path d={COMFORTER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d={ribbon(
            [
              [421, 189],
              [423, 202],
              [424, 214],
              [425, 226],
            ],
            7,
            0.3,
            false,
          )}
          fill={PAPER}
        />
        <path
          d="M422 226L421.5 231M425 226L425 231M428 226L428.5 231"
          stroke={PAPER}
          strokeWidth={1}
        />
        {SITTERS.map(([k, s]) => (
          <LitFace key={k} at={s.head.at} hair={s.hair} smile={s.smile} spoon={s.spoon} />
        ))}
        <path d={COLLARS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        {/* ribbons in Belinda's hair */}
        <path
          d="M608 170L614 166L614 174ZM614 170L620 166L620 174Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.8}
        />

        {/* Martha, at the end of the table */}
        <Halo d={MARTHA_DRESS} />
        <path d={MARTHA_DRESS} fill={INK} />
        <path
          d={gouge(740, 180, 752, 324, 1.2, -0.6) + gouge(730, 200, 734, 324, 0.8)}
          fill={PAPER}
        />
        <Limb d={MARTHA_ARM} w={8} halo={3} />
        <LitFace at={MARTHA_HEAD.at} hair={HAIR_BACK} smile />

        {/* Mrs Cratchit, flushed but smiling proudly, with the pudding */}
        <Halo d={MRS_BODY} w={3} />
        <path d={MRS_BODY} fill={INK} />
        <path
          d={gouge(560, 150, 568, 222, 1.2, -0.6) + gouge(552, 156, 556, 222, 0.8)}
          fill={PAPER}
        />
        <path d={MRS_RIBBON} fill={PAPER} />
        {MRS_ARMS.map((d) => (
          <Limb key={d} d={d} w={8} halo={2.8} />
        ))}
        <LitFace at={MRS_HEAD.at} hair={HAIR_BACK} smile flush />
        <path d={PLATE} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <Knock d={PUD_BALL} w={3} />
        <path d={PUD_BALL} fill={INK} />
        <g clipPath={`url(#${pudClip})`} fill={PAPER}>
          {PUD_SPECKS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={1.3} />
          ))}
        </g>
        <g fill={RED}>
          {PUD_FLAMES.map((d, i) => (
            <path
              key={d}
              className="lc-flicker"
              style={timing({ dur: 0.7 + i * 0.05, delay: 0.2 + i * 0.1 })}
              d={d}
            />
          ))}
        </g>
        {PUD_HOLLY.map((d) => (
          <path key={d} d={d} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        ))}

        {/* the table, the cloth, the dish with one small atom of a bone */}
        <path d={TABLE_TOP} fill={PAPER} />
        <path d="M352 224H700" stroke={INK} strokeWidth={1.2} />
        <path d={CLOTH} fill={PAPER} />
        <path d={m.cloth} fill={INK} />
        <path d="M344 238H708" stroke={INK} strokeWidth={1.6} />
        {TABLE_LEGS.map((d) => (
          <Limb key={d} d={d} w={8} halo={3} />
        ))}
        <g fill="none" stroke={INK} strokeWidth={LINE.fine}>
          {[384, 424, 604, 644, 680].map((x) => (
            <ellipse key={x} cx={x} cy={231} rx={13} ry={3.2} />
          ))}
          <ellipse cx={520} cy={231.5} rx={30} ry={5} />
        </g>
        <path
          d="M512 230.5L526 229.6M512 230.5L509 228.8M512 230.5L509.5 232.4"
          stroke={INK}
          strokeWidth={1.4}
          strokeLinecap="round"
        />
        <path d="M458 232C458 226 472 226 472 232Z" fill={INK} />
        <Limb d={CRUTCH} w={3} halo={2.6} />
        <Limb d={CRUTCH_TOP} w={3.4} halo={2.6} />
      </g>

      {/* the Ghost, stooping under the low beam, blessing the house */}
      <GhostOfPresent />
      <g className="lc-fade-in" style={timing({ delay: 1, dur: 1.6 })} fill={PAPER}>
        {m.sprinkles.map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} />
        ))}
      </g>

      {/* Scrooge, holding to his robe */}
      <Halo d={SCROOGE_GOWN} />
      <Halo d={SCROOGE_SLIPPER} />
      <path d={SCROOGE_GOWN} fill={INK} />
      <path d={SCROOGE_SLIPPER} fill={INK} />
      <path
        d={gouge(248, 214, 252, 316, 1.1, -0.4) + gouge(240, 240, 242, 316, 0.7)}
        fill={PAPER}
      />
      <path
        d="M224 200C232 210 240 220 246 236M214 262C228 266 244 266 256 262"
        fill="none"
        stroke={PAPER}
        strokeWidth={1}
      />
      <Limb d={SCROOGE_ARM} w={11} halo={3} />
      <Knock d={SCROOGE_HAND} w={2.4} />
      <path d={SCROOGE_HAND} fill={PAPER} />
      <g transform={SCROOGE_HEAD_AT}>
        <ScroogeNightHead uid={uid} seed={81} />
      </g>
    </g>
  )
}

export const cratchitsKeepChristmas: LinocutArt = {
  width: W,
  height: H,
  Draw: CratchitsKeepChristmas,
}
