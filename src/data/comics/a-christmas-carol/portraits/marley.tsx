import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * Marley's Ghost, as Dickens describes him in Stave One, and nothing else:
 *
 *   "The same face: the very same. Marley in his pigtail, usual waistcoat,
 *   tights and boots; the tassels on the latter bristling, like his pigtail,
 *   and his coat-skirts, and the hair upon his head. The chain he drew was
 *   clasped about his middle. It was long, and wound about him like a tail;
 *   and it was made (for Scrooge observed it closely) of cash-boxes, keys,
 *   padlocks, ledgers, deeds, and heavy purses wrought in steel. His body was
 *   transparent; so that Scrooge, observing him, and looking through his
 *   waistcoat, could see the two buttons on his coat behind."
 *
 * And from the two paragraphs round it: "the folded kerchief bound about its
 * head and chin", "its death-cold eyes"; on the knocker, "ghostly spectacles
 * turned up on its ghostly forehead", and eyes "wide open" but "perfectly
 * motionless".
 *
 * So: an old face in profile, facing left, towards the Scrooge portrait,
 * with the kerchief bound over the crown and under the chin, the spectacles
 * pushed up, a wide, fixed eye with no glint in it, the hair bristling off
 * the back of the head and the pigtail standing out stiff behind. The body
 * faces us, so that Scrooge's view through the waistcoat can be drawn: the
 * waistcoat is only a broken outline, and inside it is what lies behind it,
 * the back of his coat, with its seam, its two buttons and the top of its
 * vent. The chain is wound round his middle and trails away like a tail, hung
 * with the six things Dickens names, each cut as a pale steel shape.
 *
 * The bandage is shown as the text first shows it, bound, and his jaw stays
 * shut: the moment it drops is not drawn. No spot colour is printed on the
 * figure; the text gives him a "livid colour" and a "dismal light", neither of
 * which is red. Nothing here comes from a film or stage production.
 *
 * Seeds: 1843 for the ground, 1844 for the cuts in the figure.
 */

// ── The head, in profile, facing left ─────────────────────────────────────

const HEAD =
  'M150 30C128 30 114 40 110 54C106 64 104 74 104 82C103 86 105 88 106 90C100 98 90 106 84 113C81 116 84 119 89 119C92 119 95 119 97 120C97 123 96 125 97 127C98 129 97 131 98 133C99 135 98 137 97 139C96 145 100 151 110 153C124 155 140 153 152 147C160 143 168 141 176 141C190 141 202 133 210 119C218 101 214 65 196 45C184 35 166 30 150 30Z'
/** The hair behind the kerchief, grey and stirred "as if by breath or hot air". */
const HAIR =
  'M184 37C194 42 203 52 207 64C213 84 213 104 208 120C202 130 194 136 186 139L182 139C187 110 188 70 184 37Z'
const NECK = 'M140 140L136 176L192 176L186 136Z'

/** The folded kerchief, from the knot on the crown to under the chin. */
const KERCHIEF_SPINE: Pt[] = [
  [166, 30],
  [172, 50],
  [175, 78],
  [172, 106],
  [162, 132],
  [142, 151],
  [120, 158],
  [102, 154],
]

/** The stiff pigtail and the bow that ties it. */
const PIGTAIL_SPINE: Pt[] = [
  [204, 124],
  [220, 130],
  [236, 136],
  [252, 144],
  [266, 154],
]
const BOW =
  'M206 124C204 112 196 106 192 110C188 114 196 122 206 124ZM206 124C198 130 194 140 198 142C203 145 206 134 206 124Z'

// ── The body, facing us ───────────────────────────────────────────────────

/** The coat, and the waistcoat: only its outline, since it can be seen through. */
const WAISTCOAT = 'M142 176L190 176L204 266L184 276L166 268L148 276L128 266Z'
const COAT =
  'M140 160C110 164 82 176 66 196C52 216 46 250 42 290C38 302 30 312 20 318L312 318C302 312 294 302 290 290C286 250 280 216 266 196C250 176 222 164 192 160Z'
/** Behind the waistcoat, the back of the coat: its centre seam and the top of its vent. */
const COAT_BACK = 'M166 196L166 230M160 246L156 268M172 246L176 268'
const NECKCLOTH =
  'M136 150C150 158 176 158 192 150L196 170C184 180 172 186 166 196C160 186 148 180 134 170Z'

/** "the two buttons on his coat behind", seen through the waistcoat. */
const BACK_BUTTONS: Pt[] = [
  [153, 238],
  [179, 238],
]

// ── The chain, and what it is made of ─────────────────────────────────────

/** Round his middle, then away past his side like a tail. */
const CHAIN_PATH: Pt[] = [
  [54, 262],
  [100, 270],
  [150, 276],
  [200, 274],
  [250, 266],
  [282, 258],
  [292, 272],
  [276, 290],
  [240, 300],
  [200, 304],
]

/** Points evenly spaced along a polyline, with the direction there. */
function along(pts: Pt[], step: number): { x: number; y: number; a: number }[] {
  const out: { x: number; y: number; a: number }[] = []
  let carry = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    const a = Math.atan2(by - ay, bx - ax)
    let t = carry
    while (t < L) {
      out.push({ x: ax + ((bx - ax) * t) / L, y: ay + ((by - ay) * t) / L, a })
      t += step
    }
    carry = t - L
  }
  return out
}

/** An ellipse as path data, rotated by `a` radians. */
function ellipse(cx: number, cy: number, rx: number, ry: number, a: number): string {
  const c = Math.cos(a)
  const s = Math.sin(a)
  const p = (t: number) => [
    cx + rx * Math.cos(t) * c - ry * Math.sin(t) * s,
    cy + rx * Math.cos(t) * s + ry * Math.sin(t) * c,
  ]
  const [x0, y0] = p(0)
  const [x1, y1] = p(Math.PI)
  const deg0 = (a * 180) / Math.PI
  return `M${n(x0)} ${n(y0)}A${n(rx)} ${n(ry)} ${n(deg0)} 1 1 ${n(x1)} ${n(y1)}A${n(rx)} ${n(ry)} ${n(deg0)} 1 1 ${n(x0)} ${n(y0)}Z`
}

/** The six things on the chain, as paper shapes; `detail` is cut back in ink. */
const THINGS: { shape: string; detail: string }[] = [
  // a ledger, hanging open-edged, bands on its spine
  {
    shape: 'M58 266L84 272L78 306L52 300Z',
    detail: 'M61 270L55 298M66 280L80 283M65 286L79 289M64 292L78 295',
  },
  // a padlock: the shackle is cut as its own ring, below
  {
    shape:
      'M100 284C100 282 102 281 104 281L120 281C122 281 124 282 124 284L125 302C125 305 123 306 121 306L103 306C101 306 99 305 99 302Z',
    detail: 'M112 289A2.4 2.4 0 1 0 112.1 289M112 291L112 298',
  },
  // a heavy purse, drawn shut at the neck
  {
    shape:
      'M144 276L166 276L160 284C172 290 174 304 164 309C156 312 150 312 144 309C134 304 136 290 150 284Z',
    detail:
      'M149 284L161 284M150 277L151 283M155 277L155 283M160 277L159 283M146 298Q155 303 164 298',
  },
  // a cash-box
  {
    shape: 'M198 282L228 280L230 302L200 304Z',
    detail: 'M198 288L229 286M212 292L214 298M206 283L220 282',
  },
  // a key: its bow, its shaft and its bit
  {
    shape:
      'M244 269A10 10 0 1 1 243.9 269ZM244 274.5A4.5 4.5 0 1 0 244.1 274.5ZM251 283L276 295L280 289L286 292L282 300L277 298L275 302L269 299L248 290Z',
    detail: 'M262 290L265 292',
  },
  // a deed, rolled and tied
  {
    shape: 'M276 290L300 280A6 6 0 0 1 305 291L281 301A6 6 0 0 1 276 290Z',
    detail: 'M300 280A6 6 0 0 1 305 291A3 3 0 0 1 302.5 285.5M288 286L292 296',
  },
]

type Marks = {
  ground: string
  kerchief: string
  folds: string
  pigtail: string
  plaits: string
  hairCuts: string
  bristles: string
  face: string
  links: string
  coat: string
}

const marks = once<Marks>(() => {
  const ground = portraitGround(1843, (x) => 0.12 + (1 - x / PW) * 0.8)
  const r = rng(1844)

  const kerchief = ribbon(KERCHIEF_SPINE, 15, 0, true)
  let folds = ''
  for (let i = 1; i < KERCHIEF_SPINE.length - 2; i++) {
    const [x, y] = KERCHIEF_SPINE[i]
    folds += `M${n(x - 5)} ${n(y + 3)}Q${n(x)} ${n(y + 7)} ${n(x + 5)} ${n(y + 2)}`
  }

  const pigtail = ribbon(PIGTAIL_SPINE, 17, 0.35, false)
  // The plait: paper lozenges leaning alternately left and right of the spine.
  let plaits = ''
  along(PIGTAIL_SPINE, 6).forEach((p, i, all) => {
    const w = 7.5 * (1 - (i / all.length) * 0.6)
    const lean = p.a + (i % 2 ? 0.7 : -0.7)
    const side = (i % 2 ? 1 : -1) * w * 0.3
    const cx = p.x + Math.cos(p.a + Math.PI / 2) * side
    const cy = p.y + Math.sin(p.a + Math.PI / 2) * side
    plaits += gouge(
      cx - Math.cos(lean) * w * 0.6,
      cy - Math.sin(lean) * w * 0.6,
      cx + Math.cos(lean) * w * 0.6,
      cy + Math.sin(lean) * w * 0.6,
      w * 0.3,
    )
  })

  // Grey hair behind the kerchief: fine strands swept back, cut in paper.
  let hairCuts = ''
  for (let i = 0; i < 22; i++) {
    const y0 = 40 + i * 4.4 + between(r, -1, 1)
    const x0 = 176 + between(r, 0, 5)
    hairCuts += gouge(
      x0,
      y0,
      x0 + between(r, 16, 30),
      y0 + between(r, -4, 6),
      between(r, 0.5, 0.95),
    )
  }
  // "bristling ... and the hair upon his head": tufts standing off the skull.
  let bristles = ''
  for (let i = 0; i < 26; i++) {
    const a = deg(between(r, -80, 60))
    const x = 172 + Math.cos(a) * 44
    const y = 88 + Math.sin(a) * 56
    const len = between(r, 7, 16)
    bristles += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, between(r, 0.9, 1.6))
  }
  const tuft = PIGTAIL_SPINE[PIGTAIL_SPINE.length - 1]
  for (let i = 0; i < 7; i++) {
    const a = deg(between(r, 10, 70))
    const len = between(r, 8, 15)
    bristles += gouge(
      tuft[0] - 2,
      tuft[1] - 2,
      tuft[0] + Math.cos(a) * len,
      tuft[1] + Math.sin(a) * len,
      1.1,
    )
  }

  // An old face, as on the Scrooge head: a lined forehead, a hollow under the
  // cheekbone, the fold beside the mouth, a shadowed jaw.
  let face = ''
  for (let rad = 12; rad < 24; rad += 3.6)
    face += arcDashes(r, 126 + between(r, -1, 1), 102, rad, deg(50), deg(130), [8, 18], [2, 5])
  face += 'M112 60Q120 57 128 60M110 68Q119 65 128 68M110 76Q118 74 126 76'
  face += 'M101 108C106 114 108 120 105 128M116 100Q121 104 126 102'
  for (let y = 142; y < 152; y += 3.4)
    face += `M${n(116)} ${n(y + 4)}L${n(148 - (y - 142) * 2)} ${n(y)}`
  // The side of the face falls into shadow towards the kerchief: a sunken
  // temple, the bag under the eye, and the hollow above the jaw.
  for (let i = 0; i < 6; i++)
    face += `M${n(146 + i * 3.2)} ${n(62 + i)}Q${n(141 + i * 3.2)} 82 ${n(149 + i * 3.2)} ${n(100 - i)}`
  face += 'M110 103Q116 108 125 104M112 108Q118 111 124 109'
  for (let i = 0; i < 5; i++)
    face += `M${n(154 + i * 2.8)} ${n(108 + i)}C${n(152 + i * 2.8)} 120 ${n(148 + i * 2.6)} 130 ${n(140 + i * 3)} ${n(140 - i * 0.5)}`

  let links = ''
  along(CHAIN_PATH, 9).forEach((p, i) => {
    links += i % 2 ? ellipse(p.x, p.y, 5.6, 3.6, p.a) : ellipse(p.x, p.y, 5.6, 1.2, p.a)
  })

  // Folds of the coat, and "his coat-skirts" bristling out at the hem.
  const coat =
    gouge(82, 212, 64, 300, 2, 2) +
    gouge(100, 200, 92, 250, 1.4, 1) +
    gouge(250, 212, 270, 300, 2, -2) +
    gouge(232, 200, 240, 250, 1.4, -1) +
    gouge(40, 300, 22, 312, 1.4) +
    gouge(292, 300, 310, 312, 1.4) +
    gouge(118, 186, 128, 246, 1) +
    gouge(214, 186, 204, 246, 1)

  return { ground, kerchief, folds, pigtail, plaits, hairCuts, bristles, face, links, coat }
})

function MarleyPortrait(_: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo round the figure; the waistcoat is left open. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={m.kerchief} />
        <path d={m.pigtail} />
        <path d={COAT} />
      </g>
      <path d={m.bristles} fill={PAPER} />
      <path d={m.pigtail} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.plaits} fill={PAPER} />
      <path d={BOW} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      {/* "His body was transparent": the waistcoat is a broken outline, its
          buttons rings, and through it the back of the coat, with its seam,
          its vent and its two buttons. */}
      <path
        d={WAISTCOAT}
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeDasharray="7 5"
        strokeLinejoin="round"
      />
      <g fill="none" stroke={PAPER} strokeWidth={LINE.hairline} strokeDasharray="2 2">
        {[190, 206, 222, 258].map((y) => (
          <circle key={y} cx={166} cy={y} r={2.6} />
        ))}
      </g>
      <path d={COAT_BACK} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
      {BACK_BUTTONS.map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r={7.5} fill={PAPER} stroke={INK} strokeWidth={2.4} />
          <circle cx={x} cy={y} r={4.2} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
          <g fill={INK}>
            <circle cx={x - 1.6} cy={y - 1.6} r={0.9} />
            <circle cx={x + 1.6} cy={y - 1.6} r={0.9} />
            <circle cx={x - 1.6} cy={y + 1.6} r={0.9} />
            <circle cx={x + 1.6} cy={y + 1.6} r={0.9} />
          </g>
        </g>
      ))}
      <path d={NECK} fill={PAPER} />
      <path d="M150 150L148 172M176 146L180 170" fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M150 160Q166 168 182 160M146 166Q166 176 186 166M160 176L166 194L172 176"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={HEAD} fill={PAPER} />
      <path d={HAIR} fill={INK} />
      <path d={m.hairCuts} fill={PAPER} />
      <path d={m.face} fill="none" stroke={INK} strokeWidth={0.95} strokeLinecap="round" />
      <path
        d="M128 36Q140 40 150 48M136 33Q148 38 158 46M146 31Q156 36 163 44M121 42Q130 44 138 50"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril, thin shut mouth, chin */}
        <path d="M92 113C95 110 99 111 100 115" strokeWidth={1.5} />
        <path d="M99 127.5L109 127.5" strokeWidth={1.8} />
        <path d="M100 140Q104 142 107 140" strokeWidth={LINE.fine} />
        {/* the brow, and the wide, fixed eye */}
        <path d="M104 84Q113 78 124 83" strokeWidth={3.2} />
        <path d="M107.5 93Q114 86 122.5 92" strokeWidth={2.2} />
        <path d="M108.5 99Q115 104.5 122 98.5" strokeWidth={1.6} />
      </g>
      <circle cx={112.4} cy={95.4} r={3.5} fill={INK} />
      {/* "ghostly spectacles turned up on its ghostly forehead" */}
      <g fill="none" stroke={INK} strokeWidth={LINE.bold}>
        <ellipse cx={125} cy={51} rx={8} ry={5.5} transform="rotate(-12 125 51)" />
        <path d="M133 49L170 55" strokeWidth={LINE.fine * 1.4} />
      </g>
      {/* "the folded kerchief bound about its head and chin" */}
      <path d={m.kerchief} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.folds} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      {/* The chain, and the things it is made of. */}
      <path d={m.links} fill="none" stroke={INK} strokeWidth={4.4} />
      <path d={m.links} fill="none" stroke={PAPER} strokeWidth={1.8} />
      {/* the padlock's shackle */}
      <path d={arc(112, 283, 8, deg(180), deg(360))} fill="none" stroke={INK} strokeWidth={7} />
      <path d={arc(112, 283, 8, deg(180), deg(360))} fill="none" stroke={PAPER} strokeWidth={3.4} />
      {THINGS.map((t) => (
        <g key={t.shape}>
          <path
            d={t.shape}
            fill={PAPER}
            fillRule="evenodd"
            stroke={INK}
            strokeWidth={3}
            strokeLinejoin="round"
          />
          <path d={t.shape} fill={PAPER} fillRule="evenodd" />
          <path d={t.detail} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        </g>
      ))}
      <InnerRule />
    </>
  )
}

export const marleyArt: LinocutArt = { width: PW, height: PH, Draw: MarleyPortrait }

export const marleyPortrait: Portrait = {
  name: 'Jacob Marley',
  art: marleyArt,
  alt: "A linocut portrait of Marley's Ghost, drawn from Dickens's description in Stave One. His old face is in profile, facing left, with a long nose, a thin shut mouth and one wide, staring eye with no light in it. A folded white kerchief is bound over the top of his head and under his chin, knotted on the crown, and a pair of spectacles is pushed up on his forehead. His grey hair bristles off the back of his head, and a stiff plaited pigtail tied with a bow sticks out behind. His body faces us in a dark coat and a white neckcloth, but his waistcoat is only a broken white outline: through it can be seen the back of his coat, with its seam and the two large buttons at the waist. A chain is wound round his middle and trails away like a tail, hung with a ledger, a padlock, a heavy purse, a cash-box, a key and a rolled deed. Four numbered red markers point to his pigtail, the chain round his middle, the things on the chain, and the two buttons seen through his waistcoat.",
  describedBy: [
    { phrase: 'Marley in his pigtail', at: [298, 132], to: [262, 158] },
    { phrase: 'The chain he drew was clasped about his middle', at: [34, 238], to: [56, 262] },
    {
      phrase: 'cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel',
      at: [238, 234],
      to: [226, 280],
    },
    { phrase: 'could see the two buttons on his coat behind', at: [110, 222], to: [146, 236] },
  ],
  where: 'Stave One',
  passage:
    'The same face: the very same. Marley in his pigtail, usual waistcoat, tights and boots; the tassels on the latter bristling, like his pigtail, and his coat-skirts, and the hair upon his head. The chain he drew was clasped about his middle. It was long, and wound about him like a tail; and it was made (for Scrooge observed it closely) of cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel. His body was transparent; so that Scrooge, observing him, and looking through his waistcoat, could see the two buttons on his coat behind.',
  note: 'Marley wears his business. The chain is made of the things of his trade, and he tells Scrooge he forged it himself in life, link by link.',
  artNote:
    'Dickens says the Ghost is transparent. The print shows it where Scrooge looks: the waistcoat is only a broken outline, and through it you see the back of his coat.',
}
