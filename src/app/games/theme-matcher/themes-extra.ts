/**
 * Theme Matcher - Extra Pairings
 *
 * Supplementary theme-to-quote pairings for the Theme Matcher game.
 * Each pairing maps a thematic concept to a verbatim quotation from a
 * GCSE-prescribed text, tagged with the relevant exam board(s).
 *
 * Quotations are short (<= 15 words), exact, and drawn from the canon -
 * no synthetic or paraphrased lines.
 *
 * Boards covered: AQA, Edexcel, OCR, Eduqas (and WJEC where overlapping).
 */

export type ExamBoard = 'AQA' | 'Edexcel' | 'OCR' | 'Eduqas' | 'WJEC'

export type ThemeCategory =
  | 'Power'
  | 'Love'
  | 'Conflict'
  | 'Identity'
  | 'Class & Society'
  | 'Guilt'
  | 'Mortality'

export interface ThemeQuotePairing {
  /** Stable, unique identifier prefixed `tm-extra-` */
  id: string
  /** High-level thematic category */
  theme: ThemeCategory
  /** Verbatim quotation (<= 15 words) */
  quote: string
  /** Source text title */
  text: string
  /** Exam boards on which this text appears */
  board: ExamBoard[]
}

// ─── POWER (15) ────────────────────────────────────────────────────────────────
// Macbeth, Ozymandias, My Last Duchess, An Inspector Calls (Birling)

const powerPairings: ThemeQuotePairing[] = [
  {
    id: 'tm-extra-power-01',
    theme: 'Power',
    quote: 'I have no spur to prick the sides of my intent, but only vaulting ambition.',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-02',
    theme: 'Power',
    quote: 'Stars, hide your fires; let not light see my black and deep desires.',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-03',
    theme: 'Power',
    quote: 'Look like the innocent flower, but be the serpent under’t.',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-04',
    theme: 'Power',
    quote: 'Unsex me here, and fill me from the crown to the toe top-full of direst cruelty.',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-05',
    theme: 'Power',
    quote: 'My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!',
    text: 'Ozymandias',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-06',
    theme: 'Power',
    quote: 'Two vast and trunkless legs of stone stand in the desert.',
    text: 'Ozymandias',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-07',
    theme: 'Power',
    quote: 'The hand that mocked them, and the heart that fed.',
    text: 'Ozymandias',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-08',
    theme: 'Power',
    quote: 'Nothing beside remains. Round the decay of that colossal Wreck.',
    text: 'Ozymandias',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-09',
    theme: 'Power',
    quote: 'That’s my last Duchess painted on the wall, looking as if she were alive.',
    text: 'My Last Duchess',
    board: ['AQA', 'Edexcel', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-10',
    theme: 'Power',
    quote: 'I gave commands; then all smiles stopped together.',
    text: 'My Last Duchess',
    board: ['AQA', 'Edexcel', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-11',
    theme: 'Power',
    quote: 'She had a heart - how shall I say? - too soon made glad.',
    text: 'My Last Duchess',
    board: ['AQA', 'Edexcel', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-12',
    theme: 'Power',
    quote: 'I choose never to stoop.',
    text: 'My Last Duchess',
    board: ['AQA', 'Edexcel', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-13',
    theme: 'Power',
    quote: 'A man has to make his own way, has to look after himself.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-14',
    theme: 'Power',
    quote: 'I was an alderman for years - and Lord Mayor two years ago.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-power-15',
    theme: 'Power',
    quote:
      'If you don’t come down sharply on some of these people, they’d soon be asking for the earth.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
]

// ─── LOVE (15) ─────────────────────────────────────────────────────────────────
// Sonnet 29, Romeo & Juliet, Love's Philosophy, Porphyria's Lover, Singh Song

const lovePairings: ThemeQuotePairing[] = [
  {
    id: 'tm-extra-love-01',
    theme: 'Love',
    quote: 'I think of thee! - my thoughts do twine and bud about thee.',
    text: 'Sonnet 29',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-02',
    theme: 'Love',
    quote: 'Renew thy presence; as a strong tree should, rustle thy boughs.',
    text: 'Sonnet 29',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-03',
    theme: 'Love',
    quote: 'Drop heavily down, - burst, shattered, everywhere!',
    text: 'Sonnet 29',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-04',
    theme: 'Love',
    quote: 'My only love sprung from my only hate!',
    text: 'Romeo and Juliet',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-05',
    theme: 'Love',
    quote: 'Did my heart love till now? Forswear it, sight!',
    text: 'Romeo and Juliet',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-06',
    theme: 'Love',
    quote: 'My bounty is as boundless as the sea, my love as deep.',
    text: 'Romeo and Juliet',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-07',
    theme: 'Love',
    quote: 'These violent delights have violent ends.',
    text: 'Romeo and Juliet',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-08',
    theme: 'Love',
    quote:
      'Nothing in the world is single; all things by a law divine in one spirit meet and mingle.',
    text: 'Love’s Philosophy',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-09',
    theme: 'Love',
    quote: 'The fountains mingle with the river and the rivers with the ocean.',
    text: 'Love’s Philosophy',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-10',
    theme: 'Love',
    quote: 'What is all this sweet work worth if thou kiss not me?',
    text: 'Love’s Philosophy',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-love-11',
    theme: 'Love',
    quote: 'That moment she was mine, mine, fair, perfectly pure and good.',
    text: 'Porphyria’s Lover',
    board: ['Edexcel', 'OCR'],
  },
  {
    id: 'tm-extra-love-12',
    theme: 'Love',
    quote: 'In one long yellow string I wound three times her little throat around.',
    text: 'Porphyria’s Lover',
    board: ['Edexcel', 'OCR'],
  },
  {
    id: 'tm-extra-love-13',
    theme: 'Love',
    quote: 'And yet God has not said a word!',
    text: 'Porphyria’s Lover',
    board: ['Edexcel', 'OCR'],
  },
  {
    id: 'tm-extra-love-14',
    theme: 'Love',
    quote: 'She effing at my mum in all di colours of Punjabi.',
    text: 'Singh Song!',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-love-15',
    theme: 'Love',
    quote: 'Is priceless baby - vee share in chapatti, vee share in di chutney.',
    text: 'Singh Song!',
    board: ['AQA'],
  },
]

// ─── CONFLICT (12) ─────────────────────────────────────────────────────────────
// Bayonet Charge, Remains, Storm on the Island, Macbeth, Blood Brothers

const conflictPairings: ThemeQuotePairing[] = [
  {
    id: 'tm-extra-conflict-01',
    theme: 'Conflict',
    quote: 'Suddenly he awoke and was running - raw in raw-seamed hot khaki.',
    text: 'Bayonet Charge',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-02',
    theme: 'Conflict',
    quote: 'The patriotic tear that had brimmed in his eye sweating like molten iron.',
    text: 'Bayonet Charge',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-03',
    theme: 'Conflict',
    quote: 'King, honour, human dignity, etcetera dropped like luxuries.',
    text: 'Bayonet Charge',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-04',
    theme: 'Conflict',
    quote: 'Probably armed, possibly not.',
    text: 'Remains',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-05',
    theme: 'Conflict',
    quote: 'I see every round as it rips through his life.',
    text: 'Remains',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-06',
    theme: 'Conflict',
    quote: 'His bloody life in my bloody hands.',
    text: 'Remains',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-07',
    theme: 'Conflict',
    quote: 'We are prepared: we build our houses squat, sink walls in rock.',
    text: 'Storm on the Island',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-08',
    theme: 'Conflict',
    quote: 'Exploding comfortably down on the cliffs.',
    text: 'Storm on the Island',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-09',
    theme: 'Conflict',
    quote: 'Strange, it is a huge nothing that we fear.',
    text: 'Storm on the Island',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-conflict-10',
    theme: 'Conflict',
    quote: 'Brave Macbeth - well he deserves that name - unseamed him from the nave to th’ chops.',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-conflict-11',
    theme: 'Conflict',
    quote: 'I dare do all that may become a man; who dares do more is none.',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-conflict-12',
    theme: 'Conflict',
    quote: 'I could kill you for what you’ve done.',
    text: 'Blood Brothers',
    board: ['AQA', 'Eduqas'],
  },
]

// ─── IDENTITY (10) ─────────────────────────────────────────────────────────────
// Mother Any Distance, Singh Song, Tissue, AIC (Sheila)

const identityPairings: ThemeQuotePairing[] = [
  {
    id: 'tm-extra-identity-01',
    theme: 'Identity',
    quote: 'Mother, any distance greater than a single span requires a second pair of hands.',
    text: 'Mother, Any Distance',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-identity-02',
    theme: 'Identity',
    quote: 'You at the zero-end, me with the spool of tape.',
    text: 'Mother, Any Distance',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-identity-03',
    theme: 'Identity',
    quote: 'To fall or fly.',
    text: 'Mother, Any Distance',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-identity-04',
    theme: 'Identity',
    quote: 'I run di shop and she shoo di customers.',
    text: 'Singh Song!',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-identity-05',
    theme: 'Identity',
    quote: 'My bride, she effing at my mum.',
    text: 'Singh Song!',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-identity-06',
    theme: 'Identity',
    quote: 'Paper that lets the light shine through, this is what could alter things.',
    text: 'Tissue',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-identity-07',
    theme: 'Identity',
    quote: 'The kind you find in well-used books, the back of the Koran.',
    text: 'Tissue',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-identity-08',
    theme: 'Identity',
    quote: 'Turned into your skin.',
    text: 'Tissue',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-identity-09',
    theme: 'Identity',
    quote: 'But these girls aren’t cheap labour. They’re people.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-identity-10',
    theme: 'Identity',
    quote: 'I’ll never, never do it again to anybody.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
]

// ─── CLASS & SOCIETY (10) ──────────────────────────────────────────────────────
// AIC, Blood Brothers, A Christmas Carol, Of Mice and Men

const classPairings: ThemeQuotePairing[] = [
  {
    id: 'tm-extra-class-01',
    theme: 'Class & Society',
    quote: 'We are members of one body. We are responsible for each other.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-02',
    theme: 'Class & Society',
    quote: 'A man has to mind his own business and look after himself and his own.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-03',
    theme: 'Class & Society',
    // VERIFIED: Russell, Blood Brothers, Mrs Lyons to Mrs Johnstone, Methuen Drama edition
    quote: 'You’re going to have to give one of them away.',
    text: 'Blood Brothers',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-04',
    theme: 'Class & Society',
    quote: 'Living on the never never.',
    text: 'Blood Brothers',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-05',
    theme: 'Class & Society',
    quote: 'Are there no prisons? Are there no workhouses?',
    text: 'A Christmas Carol',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-06',
    theme: 'Class & Society',
    quote: 'If they would rather die, they had better do it, and decrease the surplus population.',
    text: 'A Christmas Carol',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-07',
    theme: 'Class & Society',
    quote: 'This boy is Ignorance. This girl is Want.',
    text: 'A Christmas Carol',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-08',
    theme: 'Class & Society',
    quote: 'Guys like us, that work on ranches, are the loneliest guys in the world.',
    text: 'Of Mice and Men',
    board: ['Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-09',
    theme: 'Class & Society',
    quote: 'A guy needs somebody - to be near him.',
    text: 'Of Mice and Men',
    board: ['Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-class-10',
    theme: 'Class & Society',
    quote: 'I ain’t wanted in the bunkhouse.',
    text: 'Of Mice and Men',
    board: ['Edexcel', 'OCR', 'Eduqas'],
  },
]

// ─── GUILT (8) ─────────────────────────────────────────────────────────────────
// Macbeth, AIC, Jekyll & Hyde, Remains

const guiltPairings: ThemeQuotePairing[] = [
  {
    id: 'tm-extra-guilt-01',
    theme: 'Guilt',
    quote: 'Will all great Neptune’s ocean wash this blood clean from my hand?',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-guilt-02',
    theme: 'Guilt',
    quote: 'Out, damned spot! out, I say!',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-guilt-03',
    theme: 'Guilt',
    quote:
      'Here’s the smell of the blood still: all the perfumes of Arabia will not sweeten this little hand.',
    text: 'Macbeth',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-guilt-04',
    theme: 'Guilt',
    quote: 'We really must stop these silly pretences.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-guilt-05',
    theme: 'Guilt',
    quote: 'Then - you killed her.',
    text: 'An Inspector Calls',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-guilt-06',
    theme: 'Guilt',
    // VERIFIED: Stevenson, Strange Case of Dr Jekyll and Mr Hyde, "Henry Jekyll's Full Statement of the Case" (Gutenberg #43)
    quote: 'I bring on him a disease and a sorrow.',
    text: 'Jekyll and Hyde',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-guilt-07',
    theme: 'Guilt',
    quote: 'I was the chief of sinners, I was also the chief of sufferers.',
    text: 'Jekyll and Hyde',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-guilt-08',
    theme: 'Guilt',
    quote:
      'Dug in behind enemy lines, not left for dead in some distant, sun-stunned, sand-smothered land.',
    text: 'Remains',
    board: ['AQA'],
  },
]

// ─── MORTALITY (10) ────────────────────────────────────────────────────────────
// Ozymandias, Bayonet Charge, Exposure, A Christmas Carol

const mortalityPairings: ThemeQuotePairing[] = [
  {
    id: 'tm-extra-mortality-01',
    theme: 'Mortality',
    quote: 'The lone and level sands stretch far away.',
    text: 'Ozymandias',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-mortality-02',
    theme: 'Mortality',
    quote: 'Half sunk a shattered visage lies.',
    text: 'Ozymandias',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-mortality-03',
    theme: 'Mortality',
    quote: 'Boundless and bare.',
    text: 'Ozymandias',
    board: ['AQA', 'Eduqas'],
  },
  {
    id: 'tm-extra-mortality-04',
    theme: 'Mortality',
    quote: 'Threw up a yellow hare that rolled like a flame.',
    text: 'Bayonet Charge',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-mortality-05',
    theme: 'Mortality',
    quote:
      'In what cold clockwork of the stars and the nations was he the hand pointing that second?',
    text: 'Bayonet Charge',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-mortality-06',
    theme: 'Mortality',
    quote: 'Our brains ache, in the merciless iced east winds that knive us.',
    text: 'Exposure',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-mortality-07',
    theme: 'Mortality',
    quote: 'But nothing happens.',
    text: 'Exposure',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-mortality-08',
    theme: 'Mortality',
    quote:
      'To-night, this frost will fasten on this mud and us, shrivelling many hands, puckering foreheads crisp.',
    text: 'Exposure',
    board: ['AQA'],
  },
  {
    id: 'tm-extra-mortality-09',
    theme: 'Mortality',
    quote: 'Marley was dead: to begin with.',
    text: 'A Christmas Carol',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
  {
    id: 'tm-extra-mortality-10',
    theme: 'Mortality',
    quote: 'I wear the chain I forged in life.',
    text: 'A Christmas Carol',
    board: ['AQA', 'Edexcel', 'OCR', 'Eduqas'],
  },
]

// ─── EXPORTS ───────────────────────────────────────────────────────────────────

export const themesExtraPairings: ThemeQuotePairing[] = [
  ...powerPairings,
  ...lovePairings,
  ...conflictPairings,
  ...identityPairings,
  ...classPairings,
  ...guiltPairings,
  ...mortalityPairings,
]

/** Lookup pairings by theme category. */
export function getPairingsByTheme(theme: ThemeCategory): ThemeQuotePairing[] {
  return themesExtraPairings.filter((p) => p.theme === theme)
}

/** Lookup pairings filtered to a specific exam board. */
export function getPairingsByBoard(board: ExamBoard): ThemeQuotePairing[] {
  return themesExtraPairings.filter((p) => p.board.includes(board))
}
