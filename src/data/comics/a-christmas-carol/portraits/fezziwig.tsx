import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, deg, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * Old Fezziwig, as Dickens describes him in Stave Two, and nothing else:
 *
 *   "Old Fezziwig laid down his pen, and looked up at the clock, which
 *   pointed to the hour of seven. He rubbed his hands; adjusted his capacious
 *   waistcoat; laughed all over himself, from his shoes to his organ of
 *   benevolence; and called out in a comfortable, oily, rich, fat, jovial
 *   voice"
 *
 * And from the paragraph before: "an old gentleman in a Welsh wig, sitting
 * behind such a high desk, that if he had been two inches taller he must have
 * knocked his head against the ceiling".
 *
 * So: a stout old gentleman in profile, facing right, his head tipped back to
 * look up at the clock, which shows seven; laughing, his eye screwed up and
 * his mouth open; his hands together in front of him, rubbing; and the great
 * curve of his waistcoat, the palest thing in the print, with its buttons.
 * On his head is the Welsh wig, which is a knitted woollen cap, not a wig of
 * hair, so it is cut with the ribs of knitting. The "organ of benevolence" is
 * a phrenologist's term for the top of the forehead, which is where the
 * marker for that phrase points.
 *
 * His coat, face and hair are not otherwise described, so they are plain. No
 * spot colour is printed: nothing in the passage is red. Nothing here comes
 * from a film or stage production.
 *
 * Seeds: 1820 for the ground, 1821 for the cuts in the figure.
 */

/**
 * The head is drawn large, facing right, in its own frame, and tipped back
 * to look up at the clock by HEAD_PLACE.
 */
const HEAD_PLACE = 'translate(158 196) rotate(-18) scale(0.8) translate(-160 -205)'
const HEAD =
  'M146 46C170 46 188 58 194 76C197 86 197 94 196 100C198 104 198 108 196 111C202 120 208 128 209 136C210 142 206 146 200 145C199 147 199 149 198 150C204 153 208 155 208 158C202 161 196 163 192 166C198 169 203 172 204 176C204 180 201 182 199 183C202 188 200 196 192 199C196 204 194 212 184 214C170 216 158 208 150 198C140 188 130 180 124 172C112 152 110 100 120 74C126 58 136 46 146 46Z'
/** "a Welsh wig": a knitted cap over the crown, with a rolled band. */
const CAP =
  'M198 84C196 60 178 38 150 36C126 36 108 52 104 76C102 90 106 102 114 110L122 104C134 92 152 86 172 84C182 83 190 83 198 84Z'
const CAP_BAND = 'M114 110C126 96 158 86 200 82L202 96C166 98 136 106 122 122Z'
const EAR = 'M141 118C133 118 130 126 131 134C133 140 137 143 143 142C141 134 142 126 141 118Z'
/** Grey hair below the cap, at the back of the head. */
const HAIR =
  'M122 122C130 112 138 108 146 108C142 122 142 138 146 150C136 156 128 164 124 170C116 156 116 136 122 122Z'

/** A stout body: the coat over the back, the great waistcoat in front. */
const COAT = 'M130 196C104 206 84 230 76 262L70 322L200 322L196 272C188 250 176 226 176 204Z'
const WAISTCOAT =
  'M160 190C188 196 222 212 244 238C262 260 266 290 258 322L180 322C178 290 172 250 164 220C160 208 158 198 160 190Z'
const NECKCLOTH = 'M150 184C164 192 184 196 198 194L194 212C178 212 162 206 150 198Z'
const BUTTONS: Pt[] = [
  [196, 216],
  [210, 236],
  [220, 258],
  [226, 282],
  [228, 306],
]

/** The near arm, bent up to bring the hands together in front of him. */
const ARM: Pt[] = [
  [150, 204],
  [150, 232],
  [166, 250],
  [192, 244],
  [214, 230],
]
/** "He rubbed his hands": two hands pressed together, palm to palm. */
const HANDS =
  'M208 218C214 208 226 204 236 206C244 208 248 214 246 222C244 230 236 236 226 238C216 240 208 236 206 230C204 226 205 222 208 218Z'

/** "looked up at the clock, which pointed to the hour of seven" */
const CLOCK: Pt = [276, 58]

type Marks = {
  ground: string
  ribs: string
  hair: string
  coat: string
  arm: string
  ticks: string
}

const marks = once<Marks>(() => {
  const [cx, cy] = CLOCK
  const ground = portraitGround(1820, (x, y) => 0.95 - Math.hypot(x - cx, y - cy) / 330)
  const r = rng(1821)

  // The knitting of the cap: ribs running up from the band to the crown.
  let ribs = ''
  for (let i = 0; i < 14; i++) {
    const t = i / 13
    const x0 = 118 + t * 78
    const y0 = 104 - Math.sin(t * Math.PI) * 14 - t * 10
    const x1 = 132 + t * 38
    const y1 = 44 + Math.abs(t - 0.45) * 22
    ribs += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + 4)} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`
  }
  for (let i = 0; i < 16; i++) {
    const x = 118 + i * 5.2
    ribs += `M${n(x)} ${n(108 - i * 1.1)}L${n(x + 1.5)} ${n(118 - i * 1.4)}`
  }

  let hair = ''
  for (let i = 0; i < 8; i++)
    hair += gouge(142 - i * 2, 114 + i * 5, 124 + between(r, 0, 3), 128 + i * 5.5, 0.5)

  const coat =
    gouge(96, 250, 84, 318, 2, 2) +
    gouge(120, 238, 114, 318, 1.4, 1) +
    gouge(170, 240, 184, 318, 1.2, -1)
  const arm = ribbon(ARM, 24, 0.2, false)

  let ticks = ''
  for (let i = 0; i < 12; i++) {
    const a = deg(i * 30 - 90)
    const r0 = i % 3 ? 20 : 17
    ticks += `M${n(cx + Math.cos(a) * r0)} ${n(cy + Math.sin(a) * r0)}L${n(cx + Math.cos(a) * 23)} ${n(cy + Math.sin(a) * 23)}`
  }
  return { ground, ribs, hair, coat, arm, ticks }
})

function FezziwigPortrait(_: ArtProps) {
  const m = marks()
  const [cx, cy] = CLOCK
  // Seven o'clock: the minute hand at twelve, the hour hand at seven.
  const hour = deg(7 * 30 - 90)
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      {/* The clock he looks up at. */}
      <circle cx={cx} cy={cy} r={34} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <circle cx={cx} cy={cy} r={27} fill={PAPER} />
      <path d={m.ticks} stroke={INK} strokeWidth={LINE.bold} />
      <path
        d={`M${cx} ${cy}L${cx} ${cy - 21}M${cx} ${cy}L${n(cx + Math.cos(hour) * 14)} ${n(cy + Math.sin(hour) * 14)}`}
        stroke={INK}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={2.6} fill={INK} />
      {/* The ink halo round him. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <g transform={HEAD_PLACE}>
          <path d={HEAD} />
          <path d={CAP} />
        </g>
        <path d={COAT} />
        <path d={WAISTCOAT} />
        <path d={m.arm} />
        <path d={HANDS} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.coat} fill={PAPER} />
      {/* "adjusted his capacious waistcoat" */}
      <path
        d={WAISTCOAT}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path
        d="M176 214Q206 232 222 272M172 236Q194 256 204 300M236 244Q250 270 248 312"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <g fill={INK}>
        {BUTTONS.map(([x, y]) => (
          <circle key={y} cx={x} cy={y} r={3.2} />
        ))}
      </g>
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g transform={HEAD_PLACE}>
        <path
          d={HEAD}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold * 1.25}
          strokeLinejoin="round"
        />
        <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.hair} fill={INK} />
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* "laughed all over himself": the eye screwed shut, brows up,
              cheeks lifted, the mouth open, the chins shaking */}
          <path d="M172 92Q184 84 198 92" strokeWidth={4} />
          <path d="M175 108Q184 100 194 108" strokeWidth={3.4} />
          <path d="M172 106L163 102M172 112L162 113M173 118L165 124" strokeWidth={1.6} />
          <path d="M178 118C168 126 168 142 184 148" strokeWidth={1.8} />
          <path d="M160 132Q162 150 176 162" strokeWidth={1.1} />
          <path d="M200 136C197 132 193 134 193 138" strokeWidth={2.2} />
          <path d="M186 206Q194 208 198 204M178 196Q188 200 194 196" strokeWidth={1.4} />
          <path d="M150 156Q156 176 172 188" strokeWidth={1.4} />
          <path d="M146 64Q162 60 178 66M146 74Q160 70 176 76" strokeWidth={1.2} />
        </g>
        <path d="M192 166L208 158C209 164 207 171 204 176C200 172 196 169 192 166Z" fill={INK} />
        <path d="M196 164L207 159L207 161.6L197 166Z" fill={PAPER} />
        <path
          d="M199 146C195 154 191 160 192 166"
          fill="none"
          stroke={INK}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={2} strokeLinejoin="round" />
        <path d={m.ribs} fill="none" stroke={PAPER} strokeWidth={1.3} />
        <path d={CAP_BAND} fill={INK} stroke={PAPER} strokeWidth={2} strokeLinejoin="round" />
      </g>
      <path d={m.arm} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d="M154 226Q156 240 166 246" fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={HANDS} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path
        d="M214 218Q226 214 240 216M212 224Q226 222 242 224M216 230Q228 230 238 230"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <InnerRule />
    </>
  )
}

export const fezziwigArt: LinocutArt = { width: PW, height: PH, Draw: FezziwigPortrait }

export const fezziwigPortrait: Portrait = {
  name: 'Fezziwig',
  art: fezziwigArt,
  alt: "A linocut portrait of old Fezziwig, drawn from Dickens's description in Stave Two: a stout old gentleman in profile, facing right, his head tipped back to look up at a round clock in the top corner, whose hands show seven o'clock. He is laughing, his eye screwed shut, his cheek lifted, his mouth open and his double chin creased. On his head is a knitted woollen cap with a rolled band, the Welsh wig. His hands are pressed together in front of him, rubbing, and below them his pale, enormous waistcoat curves out, with a row of dark buttons, under a dark coat. Four numbered red markers point to his hands, his waistcoat, the top of his forehead, and his open mouth.",
  describedBy: [
    { phrase: 'He rubbed his hands', at: [292, 196], to: [244, 214] },
    { phrase: 'adjusted his capacious waistcoat', at: [296, 272], to: [254, 272] },
    {
      phrase: 'laughed all over himself, from his shoes to his organ of benevolence',
      at: [212, 58],
      to: [172, 106],
    },
    { phrase: 'a comfortable, oily, rich, fat, jovial voice', at: [240, 136], to: [188, 152] },
  ],
  where: 'Stave Two',
  passage:
    'Old Fezziwig laid down his pen, and looked up at the clock, which pointed to the hour of seven. He rubbed his hands; adjusted his capacious waistcoat; laughed all over himself, from his shoes to his organ of benevolence; and called out in a comfortable, oily, rich, fat, jovial voice:',
  note: 'Every verb is generous and bodily: rubbed, adjusted, laughed, called. Fezziwig is the kind of master Scrooge could have become, and did not.',
  artNote:
    'His cap is the “Welsh wig” of the paragraph before: a knitted woollen cap, not a wig of hair. The “organ of benevolence” is a phrenologist’s name for the top of the forehead.',
}
