// @ts-nocheck
// PERF: this deck used to be declared inline in flashcard-data.ts. Because the
// flashcards page is a client component, every inline deck was bundled into that
// route's First Load JS (~600 KB of card text before a student had opened a
// single deck). Each deck now lives in its own module so the loader in
// ../deck-loaders.ts can fetch just this one, on demand.
import type { FlashcardDeck } from '../types'

const deck: FlashcardDeck = {
  id: 'edexcel-relationships-poetry',
  title: 'Edexcel Poetry Anthology - Relationships',
  description:
    '15 poems from the Edexcel Relationships poetry collection with key quotes, themes, and techniques',
  category: 'Literature',
  board: 'Edexcel',
  cards: [
    {
      id: 'erp-1',
      front: 'La Belle Dame Sans Merci - John Keats',
      back: `Key quote: "I met a lady in the meads, / Full beautiful - a faery\'s child"\n\nThemes: Destructive love, power imbalance, enchantment, isolation.\n\nTechniques: Ballad form, archaic language, supernatural imagery, cyclical structure (returns to the pale knight on the hillside).\n\nCompare with: She Walks in Beauty (idealised beauty), Neutral Tones (love that destroys).\n\nVersion note: The Edexcel anthology uses the 1820 "Indicator" version (with "knight-at-arms"), not the 1848 (Milnes) revision (with "wretched wight"). Always quote from the anthology version.`,
    },
    {
      id: 'erp-2',
      front: 'A Child to his Sick Grandfather - Joanna Baillie',
      back: `Key quote: "Grand-dad, they say you\'re old and frail"\n\nThemes: Family love, ageing, innocence vs experience, mortality.\n\nTechniques: Child speaker (naive voice), direct address, contrast between youth and age, simple diction reflecting the child\'s perspective.\n\nCompare with: Nettles (parent-child love), My Father Would Not Show Us (family distance).`,
    },
    {
      id: 'erp-3',
      front: 'She Walks in Beauty - Lord Byron',
      back: `Key quote: "She walks in beauty, like the night / Of cloudless climes and starry skies"\n\nThemes: Idealised beauty, admiration, harmony of inner and outer beauty.\n\nTechniques: Simile, regular metre (iambic tetrameter), antithesis of dark and light, enjambment creating flowing admiration.\n\nCompare with: La Belle Dame Sans Merci (beauty as power), Sonnet 43 (adoration).`,
    },
    {
      id: 'erp-4',
      front: 'A Complaint - William Wordsworth',
      back: `Key quote: "There is a change - and I am poor"\n\nThemes: Loss of love, emotional dependency, change, grief.\n\nTechniques: Extended metaphor of a fountain (love as a water source that dries up), caesura reflecting emotional disruption, shift from abundance to emptiness.\n\nCompare with: Neutral Tones (love ended), One Flesh (emotional distance).`,
    },
    {
      id: 'erp-5',
      front: 'Neutral Tones - Thomas Hardy',
      back: `Key quote: "We stood by a pond that winter day, / And the sun was white, as though chidden of God"\n\nThemes: End of love, bitterness, memory, emotional deadness.\n\nTechniques: Pathetic fallacy (bleached landscape), colour symbolism (white = lifeless), cyclical structure, monosyllabic words creating flat, defeated tone.\n\nCompare with: A Complaint (love lost), One Flesh (emotional distance).`,
    },
    {
      id: 'erp-6',
      front: 'My Last Duchess - Robert Browning',
      back: `Key quote: "That\'s my last Duchess painted on the wall, / Looking as if she were alive"\n\nThemes: Power and control, jealousy, possession, toxic masculinity, objectification.\n\nTechniques: Dramatic monologue, enjambment (Duke\'s controlling speech), iambic pentameter, sinister undertone - "I gave commands; / Then all smiles stopped together."\n\nCompare with: La Belle Dame Sans Merci (power in love), Valentine (unconventional love).`,
    },
    {
      id: 'erp-7',
      front: 'Sonnet 43 - Elizabeth Barrett Browning',
      back: `Key quote: "How do I love thee? Let me count the ways"\n\nThemes: Unconditional love, devotion, spiritual love, eternal love.\n\nTechniques: Petrarchan sonnet form, anaphora ("I love thee"), religious imagery ("Grace," "saints"), hyperbole suggesting love beyond measurement.\n\nCompare with: She Walks in Beauty (admiration), i wanna be yours (devotion).`,
    },
    {
      id: 'erp-8',
      front: '1st Date - She / 1st Date - He - Wendy Cope',
      back: `Key quote (She): "I can\'t believe I\'ve met someone so nice"\nKey quote (He): "She\'s absolutely gorgeous"\n\nThemes: New love, excitement, nervousness, contrasting perspectives.\n\nTechniques: Dual perspective (two companion poems), colloquial language, humour, internal monologue revealing insecurity beneath confidence.\n\nCompare with: Valentine (modern love), Love\'s Dog (conflicting emotions in love).`,
    },
    {
      id: 'erp-9',
      front: 'Valentine - Carol Ann Duffy',
      back: `Key quote: "I give you an onion. / It is a moon wrapped in brown paper"\n\nThemes: Unconventional love, honesty about relationships, love as painful, rejection of cliché.\n\nTechniques: Extended metaphor (onion = love), free verse, imperative verbs ("Take it"), monosyllabic final line - "Lethal" - showing love\'s danger.\n\nCompare with: Sonnet 43 (contrasting view of love), Love\'s Dog (love\'s contradictions).`,
    },
    {
      id: 'erp-10',
      front: 'One Flesh - Elizabeth Jennings',
      back: `Key quote: "Lying apart now, each in a separate bed"\n\nThemes: Long-term love, emotional distance, ageing, loss of passion, memory.\n\nTechniques: Enjambment, religious allusion ("one flesh" from Genesis), oxymoron of closeness and distance, reflective tone, third-person observation of her own parents.\n\nCompare with: Neutral Tones (emotional death), A Complaint (love changed).`,
    },
    {
      id: 'erp-11',
      front: 'i wanna be yours - John Cooper Clarke',
      back: `Key quote: "I wanna be your electric meter / I will not run out"\n\nThemes: Devotion, desire, total commitment, modern love.\n\nTechniques: Extended metaphor (domestic objects = devotion), repetition ("I wanna be your"), lack of punctuation and capitalisation (informal, urgent tone), metaphors escalate from mundane to passionate.\n\nCompare with: Sonnet 43 (total devotion), Valentine (modern love poem).`,
    },
    {
      id: 'erp-12',
      front: "Love's Dog - Jen Hadfield",
      back: `Key quote: "What I love about love is its diamond blaze. / What I hate about love is its diamond blaze."\n\nThemes: Contradictions of love, joy and pain coexisting, duality of emotion.\n\nTechniques: Anaphora ("What I love / What I hate"), antithesis, list structure, repeated syntactic pattern highlighting love\'s paradoxes.\n\nCompare with: Valentine (honest about love\'s pain), 1st Date (excitement of love).`,
    },
    {
      id: 'erp-13',
      front: 'Nettles - Vernon Scannell',
      back: `Key quote: "My son aged three fell in the nettle bed. / \'Bed\' seemed a word of comfort"\n\nThemes: Parental love, protectiveness, futility of shielding children, military imagery.\n\nTechniques: Extended metaphor (nettles = threats to children), military lexis ("regiment," "fierce parade," "fallen dead"), sonnet-like 14 lines, irony of "bed" as comfort vs pain.\n\nCompare with: The Manhunt (love and suffering), A Child to his Sick Grandfather (family bonds).`,
    },
    {
      id: 'erp-14',
      front: 'The Manhunt - Simon Armitage',
      back: `Key quote: "After the first phase, / after passionate nights and intimate days"\n\nThemes: Love and trauma, PTSD, physical and emotional scars, patience, intimacy after war.\n\nTechniques: Extended metaphor (body as damaged landscape), couplets (togetherness), half-rhyme (discord), anatomical language tracing the body, wife\'s perspective showing love as slow recovery.\n\nCompare with: Nettles (love amid pain), One Flesh (physical/emotional distance).`,
    },
    {
      id: 'erp-15',
      front: 'My Father Would Not Show Us - Ingrid de Kok',
      back: `Key quote: "My father would not show us his dying"\n\nThemes: Family relationships, grief, distance, masculinity and vulnerability, death.\n\nTechniques: Negative construction ("would not show"), contrast between what father hides and what speaker reveals, enjambment mirroring life flowing away, restrained tone reflecting the father\'s own restraint.\n\nCompare with: A Child to his Sick Grandfather (family and mortality), One Flesh (emotional distance in family).`,
    },
  ],
}

export default deck
