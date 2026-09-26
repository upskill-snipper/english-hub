import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { GHOST_PAST_CROWN, GhostOfChristmasPast } from './ghost-of-christmas-past'
import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave Two: "The lonely schoolboy", the fourth moment in the guide's
 * timeline. Every detail is from the text:
 *
 * - "a door at the back of the house ... disclosed a long, bare, melancholy
 *   room, made barer still by lines of plain deal forms and desks. At one of
 *   these a lonely boy was reading near a feeble fire; and Scrooge sat down
 *   upon a form, and wept to see his poor forgotten self as he used to be." So
 *   the room runs the width of the panel, a line of empty forms and desks
 *   between old Scrooge on the first form and the boy at the last, reading by
 *   a small fire: the spot colour, the only warmth in the room.
 * - "The Spirit touched him on the arm, and pointed to his younger self,
 *   intent upon his reading." So one hand is on Scrooge's arm and one long
 *   arm points across the room.
 * - The Ghost: "like a child ... diminished to a child's proportions. Its
 *   hair, which hung about its neck and down its back, was white as if with
 *   age; and yet the face had not a wrinkle in it, and the tenderest bloom was
 *   on the skin. The arms were very long and muscular ... Its legs and feet,
 *   most delicately formed, were, like those upper members, bare. It wore a
 *   tunic of the purest white; and round its waist was bound a lustrous belt
 *   ... It held a branch of fresh green holly in its hand; and ... had its dress
 *   trimmed with summer flowers. ... from the crown of its head there sprung a
 *   bright clear jet of light, by which all this was visible". So: child-sized
 *   beside the seated man, white hair down its back, a smooth face with a
 *   touch of the spot colour for its bloom, long bare arms, bare legs and
 *   feet, a white tunic with flowers at its hem, a belt that glitters, a
 *   holly branch in the pointing hand, and a jet of light rising from its
 *   head that lights the corner. The holly's green is left to the words.
 * - Scrooge is "clad but lightly in his slippers, dressing-gown, and
 *   nightcap", so he wears them here (scrooge-at-night.tsx), and his tears
 *   are on his cheek.
 * - Through the windows, "the dull yard behind", "the half-thawed water-spout"
 *   and "one despondent poplar", on "a clear, cold, winter day, with snow upon
 *   the ground".
 *
 * The boy is not described beyond his reading, so he is a plain boy in a
 * short jacket, bent over his book.
 *
 * Seeds: 404 for the room, 414 for the Ghost's light, 424 for the yard.
 */

const W = 860
const H = 340
/** Where the Ghost stands: its figure is drawn at x 58 to 104 and moved by this. */
const GHOST_DX = 196
/** The top of the Ghost's head, where its light springs from. */
const JET: Pt = [GHOST_PAST_CROWN[0] + GHOST_DX, GHOST_PAST_CROWN[1]]

type Marks = {
  wall: string
  floor: string
  panels: string
  sky: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(404)
  // Lit by the Ghost's light at the left, the two windows, and faintly the fire.
  const light = (x: number, y: number) => {
    const g = clamp(1 - Math.hypot(x - JET[0], (y - JET[1]) * 1.2) / 300)
    const w1 = clamp(1 - Math.hypot((x - 64) * 0.9, y - 96) / 150) * 0.7
    const w2 = clamp(1 - Math.hypot((x - 432) * 0.9, y - 96) / 150) * 0.7
    const f = clamp(1 - Math.hypot(x - 790, y - 220) / 110) * 0.45
    return Math.max(g, w1, w2, f, 0.04)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 150 }, light, { spacing: 6.4 })

  // Tall panelling below: upright cuts, heavier where the light falls.
  let panels = ''
  for (let x = 4; x < W; x += 7) {
    const L = light(x, 190)
    panels += wedge(
      x + between(r, -0.5, 0.5),
      160,
      x + between(r, -0.5, 0.5),
      232,
      0.4,
      0.6 + L * 3,
    )
  }

  // Floor: paper boards, ink joints running to a vanishing point.
  let floor = ''
  const V = [440, 60]
  for (let xt = -700; xt < 1600; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (244 - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        244 + (H - 244) * t0,
        xt + (xb - xt) * t1,
        244 + (H - 244) * t1,
        0.7 + t0 * 2.6,
        0.7 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = 245; y < 262; y += 3) floor += gouge(0, y, W, y, 2.4 - (y - 245) * 0.13)

  // The cold sky over the yard, hatched.
  const y2 = rng(424)
  let sky = ''
  for (let y = 40; y < 104; y += 4)
    sky += gouge(16, y + between(y2, -0.5, 0.5), 480, y, 0.5 + (104 - y) / 90)

  cached = { wall, floor, panels, sky }
  return cached
}

/** A plain deal form: a bench, side on. */
function Form({ x, w }: { x: number; w: number }) {
  return (
    <g>
      <path d={`M${x} 250H${x + w}V256H${x}Z`} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path
        d={`M${x + 8} 256L${x + 4} 300M${x + w - 8} 256L${x + w - 4} 300`}
        stroke={INK}
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path d={gouge(x + 4, 251.5, x + w - 4, 251.5, 0.8)} fill={PAPER} />
    </g>
  )
}

/** A plain deal desk, its lid sloping towards the form behind it. */
function Desk({ x, w }: { x: number; w: number }) {
  return (
    <g>
      <path
        d={`M${x} 214L${x + w} 204L${x + w} 244L${x} 244Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={`M${x + 6} 244V304M${x + w - 6} 244V304`}
        stroke={INK}
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path d={gouge(x, 213, x + w, 203, 1.2)} fill={PAPER} />
      <path d={gouge(x + 10, 226, x + w - 10, 224, 0.9)} fill={PAPER} />
    </g>
  )
}

/** The boy, bent over his book on the last form, near the fire. */
const BOY = {
  body: 'M636 206C628 206 622 212 620 222C618 232 618 242 620 250L656 252L676 252C680 252 682 256 680 260L676 290L684 290L688 256C690 246 684 242 676 242L650 242C650 232 648 222 646 214C644 208 640 206 636 206Z',
  head: 'M644 186C652 184 660 188 662 196C664 202 662 208 656 211C650 214 642 212 638 206C634 198 636 188 644 186Z',
  arm: 'M640 216C646 226 654 232 664 234L676 230',
}

function Boy() {
  return (
    <g>
      <path
        d={BOY.body}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={BOY.head} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* his face bent to the page, lit from it */}
      <path
        d="M656 193C660 196 662 200 662 203L664.5 206L662 207C661 209.5 659 211 656 211.5C653 211 651 208 651 205C651 200 653 196 656 193Z"
        fill={PAPER}
      />
      <path
        d="M656 201.5Q658 203.5 660 202.6M657.5 208.6Q659 209.4 660.4 208.4"
        stroke={INK}
        strokeWidth={1}
        fill="none"
      />
      <path d="M640 192C644 186 652 185 658 188" stroke={PAPER} strokeWidth={1} fill="none" />
      <path d="M646 198C643 199 643 204 646 205" stroke={PAPER} strokeWidth={1.2} fill="none" />
      <path d={BOY.arm} fill="none" stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
      <path d={BOY.arm} fill="none" stroke={INK} strokeWidth={6.4} strokeLinecap="round" />
      {/* the open book on the desk, and his hand on it */}
      <path d="M664 222L678 216L682 228L668 234Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      <path d="M678 216L694 214L694 226L682 228Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      <path
        d="M668 225L678 221M669 229L679 225M683 219L691 218M683 223L691 222"
        stroke={INK}
        strokeWidth={0.8}
      />
      <path d={gouge(626, 222, 624, 246, 1.1, 0.8)} fill={PAPER} />
    </g>
  )
}

function LonelySchoolboy({ uid }: ArtProps) {
  const m = marks()
  const id = { win1: `${uid}-win1`, win2: `${uid}-win2` }
  return (
    <>
      <defs>
        <clipPath id={id.win1}>
          <rect x={24} y={32} width={80} height={112} />
        </clipPath>
        <clipPath id={id.win2}>
          <rect x={392} y={32} width={80} height={112} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [640, 220], push: 1.035 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={151} width={W} height={5} fill={PAPER} />
        <path d={m.panels} fill={PAPER} />
        <rect x={0} y={234} width={W} height={10} fill={PAPER} />
        <rect x={0} y={238} width={W} height={1.4} fill={INK} />
        <rect x={0} y={244} width={W} height={H - 244} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* two windows on the dull yard: snow, the water-spout, the poplar */}
        {[
          [24, id.win1],
          [392, id.win2],
        ].map(([x, clip]) => (
          <g key={clip as string}>
            <rect x={(x as number) - 8} y={24} width={96} height={128} fill={INK} />
            <rect x={x as number} y={32} width={80} height={112} fill={PAPER} />
            <g clipPath={`url(#${clip})`}>
              <path d={m.sky} fill={INK} />
              {/* snow on the ground of the yard, and its far wall */}
              <path d={`M${x} 118H${(x as number) + 80}V144H${x}Z`} fill={PAPER} />
              <path d={`M${x} 112H${(x as number) + 80}V118H${x}Z`} fill={INK} />
              <path
                d={`M${x} 114H${(x as number) + 80}`}
                stroke={PAPER}
                strokeWidth={1}
                strokeDasharray="6 4"
              />
            </g>
          </g>
        ))}
        {/* the half-thawed water-spout and the empty store-house door */}
        <path d="M42 32V100H54V112" fill="none" stroke={INK} strokeWidth={3.4} />
        <path d="M50 112C50 116 56 116 56 112" fill="none" stroke={INK} strokeWidth={1.4} />
        <path d="M74 70H96V112H74Z" fill={INK} />
        <path d="M78 74H92V110H78Z" fill="none" stroke={PAPER} strokeWidth={1} />
        {/* one despondent poplar, leafless */}
        <g stroke={INK} fill="none" strokeLinecap="round">
          <path d="M432 118V40" strokeWidth={3} />
          <path
            d="M432 100L424 84M432 96L440 78M432 84L426 66M432 78L438 60M432 66L428 50M432 60L436 46M432 52L430 40"
            strokeWidth={1.4}
          />
        </g>
        <g fill={INK}>
          {[24, 392].map((x) => (
            <g key={x}>
              <rect x={x + 38} y={32} width={4} height={112} />
              <rect x={x} y={86} width={80} height={5} />
              <rect x={x} y={58} width={80} height={2.4} />
              <rect x={x} y={114} width={80} height={2.4} />
            </g>
          ))}
        </g>
        <rect x={12} y={148} width={104} height={6} fill={PAPER} />
        <rect x={380} y={148} width={104} height={6} fill={PAPER} />

        {/* a feeble fire, in a small grate at the far end */}
        <rect x={744} y={150} width={92} height={94} fill={PAPER} />
        <rect x={740} y={146} width={100} height={5} fill={INK} />
        <path d="M758 244V190Q758 176 772 176H808Q822 176 822 190V244Z" fill={INK} />
        <path
          d="M770 236H810M772 230H808M774 230V240M806 230V240"
          stroke={PAPER}
          strokeWidth={1.3}
        />
        <g fill={RED}>
          <path d="M778 230C779 226 784 225 787 227C790 224 796 225 798 229Z" />
          {/* three 1.2s breaths after 0.3s end at 3.9s; after 0.6s they ran past four seconds */}
          <path
            className="lc-glow"
            style={timing({ delay: 0.3 })}
            d="M786 227C785 223 787 220 789 217C791 220 792 223 791 227Z"
          />
        </g>
        <path d={gouge(748, 160, 748, 240, 1.2) + gouge(832, 160, 832, 240, 1.2)} fill={INK} />

        {/* the line of plain deal forms and desks */}
        <Form x={112} w={128} />
        <Desk x={338} w={70} />
        <Form x={422} w={86} />
        <Desk x={516} w={66} />
        <Form x={596} w={78} />
        <Desk x={666} w={66} />
        <Boy />

        <OldScrooge uid={uid} />
        <g transform={`translate(${GHOST_DX} 0)`}>
          <GhostOfChristmasPast pose="point" />
        </g>
      </g>
    </>
  )
}

/** Old Scrooge on the first form, in dressing-gown and nightcap, weeping. */
function OldScrooge({ uid }: { uid: string }) {
  return (
    <g>
      <path
        d="M168 200C156 210 150 228 150 250L234 250L238 262C242 276 244 290 242 302L256 302C258 288 256 272 252 258C250 250 244 246 236 246L214 244C216 232 214 218 206 208C196 198 180 196 168 200Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(160, 218, 158, 246, 1.3, 1) +
          gouge(176, 212, 174, 238, 0.9) +
          gouge(222, 250, 240, 290, 1, -0.8)
        }
        fill={PAPER}
      />
      {/* his hands clasped on his knee */}
      <path
        d="M186 214C194 226 206 236 220 240"
        fill="none"
        stroke={PAPER}
        strokeWidth={13.4}
        strokeLinecap="round"
      />
      <path
        d="M186 214C194 226 206 236 220 240"
        fill="none"
        stroke={INK}
        strokeWidth={10.4}
        strokeLinecap="round"
      />
      <path
        d="M218 234C224 230 232 232 234 238C235 243 230 247 224 246C220 245 217 241 218 234Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d="M224 234L226 244M229 234L230 243" stroke={INK} strokeWidth={0.9} />
      <path
        d="M240 302H262C268 302 270 306 268 310H240Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* bowed, weeping, watching the boy */}
      <g transform="translate(150 122) rotate(12 32 78) scale(0.36)">
        <ScroogeNightHead uid={uid} seed={41} tears />
      </g>
    </g>
  )
}

export const lonelySchoolboy: LinocutArt = { width: W, height: H, Draw: LonelySchoolboy }
