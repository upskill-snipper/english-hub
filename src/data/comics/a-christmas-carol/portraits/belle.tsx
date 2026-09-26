import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, between, deg, gouge, n, rays, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * Belle, as Dickens describes her in Stave Two, and nothing else:
 *
 *   "He was not alone, but sat by the side of a fair young girl in a
 *   mourning-dress: in whose eyes there were tears, which sparkled in the
 *   light that shone out of the Ghost of Christmas Past."
 *
 * So: a young woman in profile, facing left, towards the young Scrooge she
 * sits beside; her hair light, since "fair" may mean her colouring as well as
 * her looks, and worn plainly, smoothed back over the ear to a small knot
 * behind the crown; a plain black mourning dress with a high neck, cut with
 * only a few dull
 * folds because mourning cloth does not shine; a tear on her cheek, with a
 * sparkle cut round it; and the light that makes it sparkle coming from the
 * top left, from the Ghost, cut in rays across the ground.
 *
 * The text does not describe her hair or dress beyond this, so they are plain.
 * An earlier draft gave her ringlets and a large knot at the side of the head;
 * the ringlets read as beads and the knot as a costume from a film, so both
 * went. No spot colour is printed: nothing in the passage is red. Nothing
 * here comes from a film or stage production.
 *
 * Drawn facing right and mirrored as a whole by MIRROR, like the Fred
 * portrait, so the marker coordinates below are in the mirrored (printed)
 * frame. The head is drawn in its own frame and enlarged by HEAD_PLACE.
 * Seeds: 1829 for the ground, 1830 for the light and the cuts.
 */

const MIRROR = `matrix(-1 0 0 1 ${PW} 0)`
const HEAD_PLACE = 'translate(176 34) scale(1.4) translate(-186 -58)'

/** Where the Ghost's light comes from, in the drawing's own (unmirrored) frame. */
const LIGHT_AT: Pt = [318, 16]

// ── In the head's own frame ──────────────────────────────────────────────

const HEAD =
  'M186 58C212 58 228 74 232 94C234 102 234 108 233 112C234 114 234 116 233 118L241 134C242 136 240 138 237 138C235 138 234 139 234 140C235 143 236 145 235 147C234 148 234 149 235 150C236 152 235 155 233 156C232 158 232 160 233 162C233 168 228 173 220 173C208 173 198 168 190 160C182 152 172 146 164 140C152 124 150 92 160 74C166 64 176 58 186 58Z'
/** Fair hair, smoothed back from the brow over the ear to the knot. */
const HAIR =
  'M227 80C220 61 204 53 186 53C165 53 151 66 147 84C143 101 145 121 153 134C160 144 170 150 184 150C190 142 195 131 198 120C202 110 206 100 212 92C216 86 221 82 227 80Z'
/** Points along the hair's front edge, brow to nape, where the strands start. */
const HAIRLINE: Pt[] = [
  [226, 81],
  [214, 90],
  [206, 102],
  [200, 116],
  [193, 134],
  [184, 149],
]
/** The knot, at the back of the crown, mostly behind the head. */
const KNOT: Pt = [144, 82]

// ── In the drawing's frame ───────────────────────────────────────────────

const NECK = 'M192 180L190 226L228 226L230 196Z'
/** The mourning dress: a high black collar, the shoulders, a puffed sleeve. */
const DRESS =
  'M150 246C124 254 106 274 100 300L96 330L290 330L286 298C280 270 262 252 236 244C222 238 204 236 188 238C174 238 160 240 150 246Z'
const COLLAR = 'M186 210C198 218 220 218 232 210L238 240C222 248 196 248 180 240Z'
const SLEEVE =
  'M128 252C108 262 96 290 98 318L100 330L170 330C168 304 162 280 156 264C150 254 140 250 128 252Z'

type Marks = {
  ground: string
  light: string
  hairLines: string
  knot: string
  folds: string
  shade: string
}

const marks = once<Marks>(() => {
  const [lx, ly] = LIGHT_AT
  // In print the light is top left; the ground is drawn unmirrored.
  const ground = portraitGround(1829, (x, y) => 1.05 - Math.hypot(x - (PW - lx), y - ly) / 300)
  const r = rng(1830)
  const light = rays(r, lx, ly, { from: 30, to: 330, every: 4, width: 6 })

  // Smooth fair hair: close fine lines combed back from the brow and over
  // the ear to the knot, dense enough to read as hair against the face.
  let hairLines = ''
  for (let i = 0; i < 40; i++) {
    const t = i / 39
    const seg = Math.min(HAIRLINE.length - 2, Math.floor(t * (HAIRLINE.length - 1)))
    const u = t * (HAIRLINE.length - 1) - seg
    const [ax, ay] = HAIRLINE[seg]
    const [bx, by] = HAIRLINE[seg + 1]
    const x0 = ax + (bx - ax) * u - 1.5
    const y0 = ay + (by - ay) * u
    const x1 = 156 + between(r, -2, 2) - Math.sin(t * Math.PI) * 6
    const y1 = 80 + t * 44
    // The top strands arch over the crown; the lower ones run straight back.
    const cx = 196 - t * 16
    const cy = 36 + t * 92
    hairLines += `M${n(x0)} ${n(y0)}Q${n(cx)} ${n(cy)} ${n(x1)} ${n(y1)}`
  }
  // and a few more along the outline of the crown, to fill it
  for (let i = 0; i < 6; i++)
    hairLines += `M${n(222 - i * 2)} ${n(74 + i * 1.5)}Q${n(186 - i * 2)} ${n(44 + i * 5)} ${n(156 + i)} ${n(82 + i * 2)}`
  // The knot at the back: a coil.
  let knot = ''
  for (let rad = 3.5; rad < 15; rad += 3.4)
    knot += arc(KNOT[0], KNOT[1], rad, deg(rad * 22), deg(rad * 22 + 290))

  // Mourning cloth: dull, so only a few folds are cut.
  const folds =
    gouge(262, 272, 276, 322, 1.6, -1.5) +
    gouge(232, 262, 238, 322, 1.1, -1) +
    gouge(204, 262, 202, 318, 0.9) +
    gouge(126, 276, 118, 322, 1.3, 1) +
    gouge(146, 270, 150, 322, 0.9, -1)
  // The shadow under her jaw, on the side of the neck turned from the light.
  let shade = ''
  for (let y = 176; y < 196; y += 3.6)
    shade += `M${n(176 + (y - 176) * 0.2)} ${n(y)}L${n(204 - (y - 176) * 0.5)} ${n(y + 2)}`

  return { ground, light, hairLines, knot, folds, shade }
})

function BellePortrait(_: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={MIRROR}>
        {/* "the light that shone out of the Ghost of Christmas Past" */}
        <path d={m.light} fill={PAPER} />
        {/* The ink halo that lifts her off the lit ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <g transform={HEAD_PLACE}>
            <path d={HEAD} />
            <path d={HAIR} />
            <circle cx={KNOT[0]} cy={KNOT[1]} r={16} />
          </g>
          <path d={NECK} />
          <path d={DRESS} />
        </g>
        <path d={DRESS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path
          d={SLEEVE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.folds} fill={PAPER} />
        <path d={NECK} fill={PAPER} />
        <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <g transform={HEAD_PLACE}>
          <path d={HEAD} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
          <path d={m.shade} fill="none" stroke={INK} strokeWidth={0.7} strokeLinecap="round" />
          <circle cx={KNOT[0]} cy={KNOT[1]} r={16} fill={PAPER} stroke={INK} strokeWidth={1.8} />
          <path d={m.knot} fill="none" stroke={INK} strokeWidth={0.9} />
          <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
          <path d={m.hairLines} fill="none" stroke={INK} strokeWidth={0.7} strokeLinecap="round" />
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            {/* a young face: a fine brow, the eye cast down, lashes, a sad mouth */}
            <path d="M208 100Q217 96 228 100.5" strokeWidth={1.7} />
            <path d="M210 112.5Q218 107.5 227 112.5" strokeWidth={2} />
            <path
              d="M227 112.5L229.8 110.6M224.6 110.4L226.6 107.4M221.8 109.4L222.8 106M218.8 109.4L219 106"
              strokeWidth={0.75}
            />
            <path d="M212 117Q219 119 226 116" strokeWidth={0.75} />
            <path d="M238 135C236.5 133.5 234.5 134 234.5 136.5" strokeWidth={1.1} />
            <path d="M235 147.5Q231 147 228 149" strokeWidth={0.8} />
            <path d="M235 150Q231 151.5 227 153.5" strokeWidth={1.4} />
            <path d="M234 155Q231 156 229 155.5" strokeWidth={0.7} />
            <path d="M222 164Q226 166 230 164" strokeWidth={0.7} />
          </g>
          <circle cx={222} cy={113.8} r={2.4} fill={INK} />
          {/* "in whose eyes there were tears": one on her cheek, below the eye */}
          <path d="M219.5 118Q220.5 121 221.4 123.5" fill="none" stroke={INK} strokeWidth={0.6} />
          <path
            d="M222 123C223.6 126.2 225 128.6 225 130.6C225 132.8 223.6 134 222 134C220.4 134 219 132.8 219 130.6C219 128.6 220.4 126.2 222 123Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1}
          />
          <circle cx={223} cy={129.8} r={0.8} fill={INK} />
        </g>
        {/* "which sparkled in the light": the sparkle, cut round the tear. */}
        <g
          className="lc-fade-in"
          style={timing({ delay: 1, dur: 0.8 })}
          fill="none"
          stroke={INK}
          strokeWidth={1.1}
          strokeLinecap="round"
        >
          <path d="M232 124L237 119M235 132L241 132M232 140L236 144M220 141L217 145" />
        </g>
      </g>
      <InnerRule />
    </>
  )
}

export const belleArt: LinocutArt = { width: PW, height: PH, Draw: BellePortrait }

export const bellePortrait: Portrait = {
  name: 'Belle',
  art: belleArt,
  alt: "A linocut portrait of Belle, drawn from Dickens's description in Stave Two: a young woman in profile, facing left, with light, smooth hair drawn back over her ear into a small coiled knot behind the crown. She wears a plain black mourning dress with a high black collar. Her eyes are cast down, and a single tear lies on her cheek under her eye, with small lines of sparkle cut round it. Light shines on her from the top left, from the Ghost of Christmas Past, cut in rays across the dark background. Four numbered red markers point to her fair hair, her mourning dress, the tear, and the light that makes it sparkle.",
  describedBy: [
    { phrase: 'a fair young girl', at: [190, 26], to: [150, 52] },
    { phrase: 'in a mourning-dress', at: [52, 282], to: [92, 276] },
    { phrase: 'in whose eyes there were tears', at: [44, 214], to: [102, 146] },
    {
      phrase: 'sparkled in the light that shone out of the Ghost of Christmas Past',
      at: [40, 126],
      to: [92, 138],
    },
  ],
  where: 'Stave Two',
  passage:
    'He was not alone, but sat by the side of a fair young girl in a mourning-dress: in whose eyes there were tears, which sparkled in the light that shone out of the Ghost of Christmas Past.',
  note: 'Belle is in tears before she says a word. She has come to release Scrooge from their engagement because, in her words, “Another idol has displaced me”.',
}
