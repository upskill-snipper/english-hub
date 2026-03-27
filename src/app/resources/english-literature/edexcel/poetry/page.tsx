import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/poetry' },
  title: "Edexcel Poetry Anthology — Relationships and Conflict Clusters",
  description:
    "Full analysis of all 30 poems in the Edexcel GCSE English Literature poetry anthology. Relationships and Conflict clusters with themes, language analysis, structure, and comparison ideas.",
};

/* ─── Data ───────────────────────────────────────────────────── */

interface PoemAnalysis {
  title: string;
  poet: string;
  summary: string;
  themes: string;
  language: string;
  structure: string;
  keyQuotes: string[];
  comparisonLinks: string;
}

const RELATIONSHIPS_POEMS: PoemAnalysis[] = [
  {
    title: "Sonnet 43",
    poet: "Elizabeth Barrett Browning",
    summary: "A passionate declaration of love. The speaker lists the many ways she loves her beloved, comparing her love to everyday necessities and spiritual ideals. Written during Barrett Browning's secret courtship with Robert Browning.",
    themes: "Romantic love, devotion, spirituality, the inadequacy of language to express love",
    language: "Anaphora ('I love thee') creates an incantatory, overwhelming effect. Religious language ('Grace,' 'soul') elevates love to a spiritual plane. Abstract concepts ('depth and breadth and height') suggest love transcends physical measurement.",
    structure: "Petrarchan sonnet with an octave and sestet. The traditional love sonnet form reinforces the poem's sincerity. Iambic pentameter gives a steady, heartfelt rhythm. Enjambment creates a breathless, flowing quality.",
    keyQuotes: [
      '"How do I love thee? Let me count the ways"',
      '"I love thee to the depth and breadth and height my soul can reach"',
      '"I love thee with the breath, smiles, tears, of all my life"',
    ],
    comparisonLinks: "Compare with 'Valentine' (unconventional vs conventional love), 'i wanna be yours' (modern declaration), or 'She Walks in Beauty' (idealised love).",
  },
  {
    title: "Love's Philosophy",
    poet: "Percy Bysshe Shelley",
    summary: "The speaker uses examples from nature (rivers meeting the sea, winds mingling) to argue that everything in nature is united — so why won't the beloved kiss him? A persuasive, playful love poem.",
    themes: "Desire, persuasion, nature and love, rejection",
    language: "Personification of nature ('the fountains mingle,' 'the winds of heaven mix') suggests love is natural and inevitable. Rhetorical question ('What are all these kissings worth, if thou kiss not me?') is both charming and slightly manipulative.",
    structure: "Two short stanzas with an ABAB rhyme scheme. The regular rhythm creates a song-like, persuasive tone. Each stanza builds an argument then ends with a rhetorical question, mirroring the speaker's repeated attempts.",
    keyQuotes: [
      '"The fountains mingle with the river and the rivers with the ocean"',
      '"Nothing in the world is single; all things by a law divine in another\'s being mingle"',
      '"What are all these kissings worth, if thou kiss not me?"',
    ],
    comparisonLinks: "Compare with 'Sonnet 43' (requited vs unrequited love), 'La Belle Dame sans Merci' (the power dynamics of love), or '1st Date — She / 1st Date — He' (anticipation and desire).",
  },
  {
    title: "Sonnet 29",
    poet: "Edna St Vincent Millay",
    summary: "The speaker reflects on a past love, acknowledging that the memory of love fades over time. She uses imagery of seasons and nature to show that even intense emotions diminish. A bittersweet, mature meditation on lost love.",
    themes: "Memory, loss, the transience of love, acceptance",
    language: "Seasonal imagery ('summer,' 'autumn') represents the cycle of love — its peak and decline. 'I only know that summer sang in me a little while, that in me sings no more' uses synaesthesia (singing/summer) to convey joy that has become silent.",
    structure: "Shakespearean sonnet. The final couplet offers a resigned but dignified acceptance rather than the traditional resolution. The sonnet form creates irony — a love poem about love's ending.",
    keyQuotes: [
      '"I only know that summer sang in me a little while, that in me sings no more"',
      '"What lips my lips have kissed, and where, and why, I have forgotten"',
      '"I cannot say what loves have come and gone"',
    ],
    comparisonLinks: "Compare with 'One Flesh' (love fading over time), 'Sonnet 43' (enduring vs fading love), or 'La Belle Dame sans Merci' (love and loss).",
  },
  {
    title: "My Last Duchess",
    poet: "Robert Browning",
    summary: "A dramatic monologue in which the Duke of Ferrara shows a visitor a portrait of his late wife. He reveals that he had her killed because she smiled at others and did not show him enough exclusive devotion. A chilling study of power, jealousy, and control.",
    themes: "Power and control, jealousy, objectification of women, pride, art and possession",
    language: "The Duke speaks in controlled, sophisticated language, but his monstrous nature is revealed through hints: 'I gave commands; then all smiles stopped together.' Possessive language ('My Last Duchess,' 'my gift of a nine-hundred-years-old name') shows he treats his wife as property.",
    structure: "Dramatic monologue in rhyming couplets. The couplets impose order — reflecting the Duke's desire for control. Enjambment creates a conversational flow that masks the horror of his revelations. The single stanza suggests the Duke's unbroken power.",
    keyQuotes: [
      '"That\'s my last Duchess painted on the wall, looking as if she were alive"',
      '"I gave commands; then all smiles stopped together"',
      '"She had a heart — how shall I say? — too soon made glad"',
      '"as if she ranked my gift of a nine-hundred-years-old name with anybody\'s gift"',
    ],
    comparisonLinks: "Compare with 'Cousin Kate' (Conflict cluster — men controlling women), 'Singh Song!' (contrasting loving relationships), or 'Valentine' (love and possession).",
  },
  {
    title: "La Belle Dame sans Merci",
    poet: "John Keats",
    summary: "A medieval ballad about a knight who meets a beautiful, supernatural woman. She enchants him, but when he wakes, he finds himself alone on a cold hillside, 'palely loitering.' The woman has drained him of life. Love is presented as dangerous and destructive.",
    themes: "Dangerous love, enchantment, nature, mortality, the femme fatale",
    language: "Archaic language ('thee,' 'hath') creates a timeless, mythical atmosphere. Nature imagery shifts from beauty ('fragrant zone,' 'honey wild') to desolation ('the sedge has withered,' 'no birds sing'). The contrast mirrors the knight's experience of love.",
    structure: "Ballad form with quatrains and an ABCB rhyme scheme. The final stanza echoes the opening, creating a circular, trapped structure — the knight is stuck in his suffering. Short final lines in each stanza create a haunting, incomplete effect.",
    keyQuotes: [
      '"I met a lady in the meads, full beautiful — a faery\'s child"',
      '"She looked at me as she did love, and made sweet moan"',
      '"I saw pale kings and princes too, pale warriors, death-pale were they all"',
      '"And no birds sing"',
    ],
    comparisonLinks: "Compare with 'My Last Duchess' (destructive relationships), 'Love\'s Philosophy' (desire), or 'Sonnet 29' (love and loss).",
  },
  {
    title: "She Walks in Beauty",
    poet: "Lord Byron",
    summary: "The speaker admires a woman's beauty, which combines darkness and light in perfect harmony. Her external beauty reflects inner goodness and purity. A poem of idealised, reverential admiration rather than passionate desire.",
    themes: "Beauty, harmony, idealisation, inner vs outer beauty",
    language: "Antithesis ('dark and bright') creates balance and harmony. Light imagery ('starry skies,' 'tender light') suggests ethereal, almost divine beauty. The woman is compared to night rather than day — unconventional but emphasising her unique quality.",
    structure: "Three sestets with an ABABAB rhyme scheme. The regular rhythm and rhyme mirror the harmony the speaker finds in the woman. The poem moves from external appearance to inner character, suggesting true beauty encompasses both.",
    keyQuotes: [
      '"She walks in beauty, like the night of cloudless climes and starry skies"',
      '"And all that\'s best of dark and bright meet in her aspect and her eyes"',
      '"A mind at peace with all below, a heart whose love is innocent"',
    ],
    comparisonLinks: "Compare with 'Sonnet 43' (admiration and love), 'My Last Duchess' (how men view women), or 'Valentine' (unconventional beauty).",
  },
  {
    title: "A Child to His Sick Grandfather",
    poet: "Joanna Baillie",
    summary: "A child speaks lovingly to their dying grandfather, promising to care for him as he once cared for them. The child does not fully understand death, making the poem both tender and heartbreaking. The reversal of care between generations is its emotional core.",
    themes: "Family love, ageing, death, innocence, role reversal",
    language: "Simple, childlike diction reflects the speaker's youth and innocence. Questions ('Grand-dad, they say you\'re old and frail') show the child's attempt to understand. Tender promises ('I\'ll bring my chair') create pathos through the gap between what the child offers and what the grandfather faces.",
    structure: "Regular stanzas with a simple rhyme scheme suitable for a child's voice. The steady rhythm creates a gentle, soothing tone — as if the child is comforting the grandfather.",
    keyQuotes: [
      '"Grand-dad, they say you\'re old and frail"',
      '"I\'ll bring my chair and sit beside you"',
      '"You used to smile and stroke my head"',
    ],
    comparisonLinks: "Compare with 'Climbing My Grandfather' (grandparent relationships), 'Nettles' (parent-child bonds), or 'One Flesh' (ageing and love).",
  },
  {
    title: "1st Date — She / 1st Date — He",
    poet: "Wendy Cope",
    summary: "Two companion poems presenting a first date from both perspectives. Both speakers are nervous and self-conscious. The humour and warmth come from recognising their shared anxiety. The dual perspective shows love's vulnerability and universality.",
    themes: "New love, nervousness, self-doubt, hope, vulnerability",
    language: "Conversational, modern language creates authenticity. Internal monologue reveals hidden insecurities beneath composed exteriors. Humour ('Should I have worn the other dress?') makes the anxiety relatable and endearing.",
    structure: "Two separate poems designed to be read together. The parallel structure highlights similarities between the two perspectives, suggesting connection despite nervousness. Short lines create a breathless, anxious pace.",
    keyQuotes: [
      '"I nearly didn\'t come"',
      '"Perhaps I should have worn the other dress"',
      '"I think she likes me"',
    ],
    comparisonLinks: "Compare with 'Love\'s Philosophy' (anticipation), 'Singh Song!' (joyful love), or 'Sonnet 43' (established vs new love).",
  },
  {
    title: "Valentine",
    poet: "Carol Ann Duffy",
    summary: "Instead of traditional Valentine's gifts, the speaker gives an onion as a symbol of love — it has layers, makes you cry, and its scent clings persistently. An anti-romantic poem that argues real love is complex, honest, and sometimes painful.",
    themes: "Unconventional love, honesty, possession, the inadequacy of cliches",
    language: "Extended metaphor of the onion works on multiple levels: layers (complexity), tears (pain), light (hope), clinging scent (lasting impact). The imperative 'Take it' becomes increasingly aggressive, hinting at love's possessive dark side. Rejection of cliches ('Not a red rose or a satin heart') asserts authenticity.",
    structure: "Free verse with irregular line lengths mirrors the unpredictability of real love. Single-word lines ('Lethal') create dramatic emphasis. The poem grows darker towards the end, subverting romantic expectations.",
    keyQuotes: [
      '"Not a red rose or a satin heart"',
      '"I give you an onion. It is a moon wrapped in brown paper"',
      '"It will blind you with tears like a lover"',
      '"Its scent will cling to your fingers, cling to your knife"',
      '"Lethal"',
    ],
    comparisonLinks: "Compare with 'Sonnet 43' (traditional vs unconventional love), 'Love\'s Dog' (honest portrayal of love), or 'My Last Duchess' (love and possession).",
  },
  {
    title: "One Flesh",
    poet: "Elizabeth Jennings",
    summary: "The speaker observes her elderly parents lying apart in bed, their passion long faded. They are physically close but emotionally distant — 'one flesh' in name only. A melancholic reflection on how time erodes even deep love.",
    themes: "Ageing, fading love, loneliness within marriage, time, memory",
    language: "Religious allusion ('one flesh' from Genesis) creates irony — they are legally united but emotionally separated. Simile ('like a survey') suggests clinical detachment. Gentle, quiet language ('Tossing up,' 'light') creates a hushed, sad atmosphere.",
    structure: "Three regular sestets with a measured rhythm reflecting the calm but sad tone. The regularity suggests routine and monotony. The final line — 'Whose fire from which I came has now grown cold' — is a quiet devastation.",
    keyQuotes: [
      '"Lying apart now, each in a separate bed"',
      '"Do they know they\'re old, these two who are my father and my mother?"',
      '"Whose fire from which I came has now grown cold"',
    ],
    comparisonLinks: "Compare with 'Sonnet 29' (love fading), 'Sonnet 43' (enduring love as contrast), or 'A Child to His Sick Grandfather' (family and ageing).",
  },
  {
    title: "i wanna be yours",
    poet: "John Cooper Clarke",
    summary: "A modern, playful love poem in which the speaker offers to be everyday objects for their beloved — a vacuum cleaner, a Ford Cortina, a raincoat. Beneath the humour is genuine devotion and vulnerability.",
    themes: "Devotion, desire, vulnerability, everyday love",
    language: "Domestic, ordinary imagery (vacuum cleaner, electric heater) rejects romantic cliches. Repetition of 'I wanna be yours' creates an insistent, almost desperate tone. Simple, accessible language reflects the universality of the desire to belong to someone.",
    structure: "Irregular stanzas with a refrain. The repetition creates a song-like quality (it was later set to music by the Arctic Monkeys). The accumulation of metaphors builds intensity.",
    keyQuotes: [
      '"I wanna be your vacuum cleaner, breathing in your dust"',
      '"I wanna be your electric meter, I will not run out"',
      '"I wanna be yours"',
      '"deep deep deep deep deep deep ocean"',
    ],
    comparisonLinks: "Compare with 'Sonnet 43' (declarations of love), 'Valentine' (unconventional love imagery), or 'Love\'s Philosophy' (desire for union).",
  },
  {
    title: "Love's Dog",
    poet: "Jen Hadfield",
    summary: "A poem that presents love as a contradictory experience — both joyful and painful. Each stanza pairs a positive with a negative, showing that love encompasses the full range of human emotion.",
    themes: "The contradictions of love, joy and pain, honesty about relationships",
    language: "Contrasting pairs ('the spoor of badgers / the sniff of divorce') juxtapose beauty and ugliness. Animal and nature imagery ground love in the physical, instinctive world. The dog metaphor suggests love is loyal but unpredictable.",
    structure: "Short couplets create a rhythmic back-and-forth between positive and negative — structurally enacting love's contradictions. No resolution is offered; the poem simply presents love's complexity.",
    keyQuotes: [
      '"What I love about love is its diamond absolutes"',
      '"What I hate about love is its dog, its stink, its whine"',
      '"the lipping wood pigeon"',
    ],
    comparisonLinks: "Compare with 'Valentine' (honest, unsentimental love), 'One Flesh' (love's disappointments), or 'Sonnet 43' (idealised love as contrast).",
  },
  {
    title: "Nettles",
    poet: "Vernon Scannell",
    summary: "A father describes his son falling into a bed of nettles and being stung. He comforts the boy, then attacks the nettles with military fury — but they grow back. An extended metaphor for a parent's inability to protect a child from life's pain.",
    themes: "Parental love, protection, pain, the futility of trying to shield children from harm",
    language: "Military metaphor throughout: 'regiment of spite,' 'fallen dead,' 'tall recruits.' The father's response to nettles mirrors a soldier fighting an enemy. This connects to Scannell's own experience as a WWII soldier and suggests the world is a hostile, dangerous place for children.",
    structure: "A single stanza of 16 lines with a regular rhyme scheme (couplets). The containment in one stanza mirrors the father's attempt to contain the threat. The final couplet, where the nettles grow back, undermines his efforts.",
    keyQuotes: [
      '"My son would often feel sharp wounds again"',
      '"a regiment of spite behind the shed"',
      '"tall recruits... called up... stood sharp beneath the window"',
    ],
    comparisonLinks: "Compare with 'Climbing My Grandfather' (family bonds), 'A Child to His Sick Grandfather' (intergenerational love), or 'Catrin' (Conflict — parent-child tension).",
  },
  {
    title: "Climbing My Grandfather",
    poet: "Andrew Waterhouse",
    summary: "The speaker imagines climbing their grandfather like a mountain — from his shoes up to his head. The extended metaphor allows an intimate exploration of the grandfather's physical features and the love they represent.",
    themes: "Family love, memory, admiration, physical intimacy, exploration",
    language: "Extended mountaineering metaphor transforms the grandfather into a landscape. Sensory detail ('the skin of his finger is smooth and thick,' 'his dusty, bald head') creates an intimate, tactile portrait. The grandfather becomes monumental — literally larger than life.",
    structure: "Free verse with no stanza breaks — one continuous climb, reflecting the unbroken connection between speaker and grandfather. Enjambment creates a sense of continuous movement upwards.",
    keyQuotes: [
      '"I decide to do it free, without a rope or net"',
      '"his thick fingers... old and smooth"',
      '"I place my ear against his chest and hear the good workings of his heart"',
    ],
    comparisonLinks: "Compare with 'A Child to His Sick Grandfather' (grandparent love), 'Nettles' (family bonds), or 'One Flesh' (physical observation of family members).",
  },
  {
    title: "Singh Song!",
    poet: "Daljit Nagra",
    summary: "A Punjabi shopkeeper describes his love for his new bride while his father's shop falls into disrepair. He abandons his duties to be with her — their love is vibrant, humorous, and culturally rich. The poem celebrates multicultural Britain and joyful, irreverent love.",
    themes: "Love and marriage, cultural identity, duty vs desire, joy, multicultural Britain",
    language: "Phonetic spelling of Punjabi-accented English ('di,' 'vee') celebrates the speaker's cultural identity. Humour and irreverence ('She's made of honey... she's a Sikh') create warmth. Vivid, sensory language makes their love tangible and alive.",
    structure: "Irregular stanzas mixing narrative and dialogue. The refrain-like returns to the shop create comic contrast between duty and desire. The poem shifts between public (the shop) and private (their intimate moments).",
    keyQuotes: [
      '"my bride she hav a red crew cut"',
      '"at di dairy milk dat cost a pound"',
      '"ve drown in each other\'s eyes"',
      '"I tell her dat she is di \'World\'s Best Wife\'"',
    ],
    comparisonLinks: "Compare with 'i wanna be yours' (joyful devotion), 'Valentine' (unconventional love), or 'My Last Duchess' (contrasting attitudes to wives).",
  },
];

const CONFLICT_POEMS: PoemAnalysis[] = [
  {
    title: "The Charge of the Light Brigade",
    poet: "Alfred Lord Tennyson",
    summary: "Tennyson commemorates the disastrous cavalry charge at the Battle of Balaclava (1854) during the Crimean War. 600 British soldiers charged into Russian cannon fire due to a miscommunicated order. The poem honours their bravery while implicitly criticising the military blunder.",
    themes: "War, heroism, duty, the futility of war, honour",
    language: "Repetition ('Cannon to the right... left... in front') creates the surrounding danger. Onomatopoeia ('Volleyed and thundered') evokes the noise of battle. The rhetorical question 'When can their glory fade?' demands the reader honour the soldiers.",
    structure: "Dactylic rhythm mimics the galloping of horses. Six stanzas of varying length create an irregular, chaotic feel reflecting battle. Repetition of 'the six hundred' memorialises the soldiers as a collective.",
    keyQuotes: [
      '"Into the valley of Death rode the six hundred"',
      '"Theirs not to reason why, theirs but to do and die"',
      '"Cannon to the right of them, cannon to the left of them"',
      '"When can their glory fade?"',
    ],
    comparisonLinks: "Compare with 'Exposure' (suffering in war), 'The Destruction of Sennacherib' (battle imagery), or 'Poppies' (aftermath of war).",
  },
  {
    title: "Exposure",
    poet: "Wilfred Owen",
    summary: "Soldiers in WWI trenches endure extreme cold, waiting for an attack that never comes. The real enemy is not the opposing army but the weather — 'the merciless iced east winds that knive us.' Owen shows war as monotonous suffering rather than heroic action.",
    themes: "The reality of war, suffering, nature as enemy, futility, the forgotten soldier",
    language: "Personification of weather ('winds that knive us,' 'dawn massing in the east her melancholy army') makes nature a hostile force. Half-rhyme (knife/knive, silent/salient) creates unease and incompleteness. The refrain 'But nothing happens' emphasises futility and monotony.",
    structure: "Eight stanzas of five lines, each ending with a shortened final line. The truncated lines enact the soldiers' diminishment. The regular structure contrasts with the chaos of their experience. Circular structure — the poem ends as it begins.",
    keyQuotes: [
      '"Our brains ache, in the merciless iced east winds that knive us"',
      '"But nothing happens"',
      '"We only know war lasts, rain soaks, and clouds sag stormy"',
      '"For love of God seems dying"',
    ],
    comparisonLinks: "Compare with 'The Charge of the Light Brigade' (contrasting attitudes to war), 'War Photographer' (witnessing suffering), or 'What Were They Like?' (war's destruction).",
  },
  {
    title: "Catrin",
    poet: "Gillian Clarke",
    summary: "A mother addresses her daughter, recalling the intense physical connection of childbirth and the conflict that defined their relationship from the very beginning. The umbilical cord becomes a 'rope' — a bond that is both loving and combative.",
    themes: "Parent-child conflict, love and separation, independence, the bond of motherhood",
    language: "The metaphor of the 'red rope of love' simultaneously represents connection (umbilical cord) and conflict (a tug-of-war). Military language ('confrontation,' 'fought') frames the mother-child relationship as a battle. 'Tight red rope' suggests intensity and inescapability.",
    structure: "Two stanzas: the first describes the birth, the second a present-day conflict over skating. The gap between stanzas represents the passage of time, but the conflict remains the same — love expressed through opposition.",
    keyQuotes: [
      '"I can remember you, child, as I stood in a hot, white room"',
      '"the tight red rope of love which we both fought over"',
      '"Neither won nor lost the struggle"',
    ],
    comparisonLinks: "Compare with 'Nettles' (Relationships — parental love), 'Poppies' (mother and child), or 'Half-caste' (identity and conflict).",
  },
  {
    title: "War Photographer",
    poet: "Carol Ann Duffy",
    summary: "A war photographer develops his photographs in his darkroom after returning from a conflict zone. The contrast between the suffering he has witnessed and the comfortable indifference of people at home haunts him. The poem critiques society's response to images of war.",
    themes: "The reality of war, media and desensitisation, guilt, the gap between suffering and comfort",
    language: "Religious language ('a priest preparing to intone a Mass') elevates the photographer's work to something sacred. Sensory imagery ('running children in a nightmare heat') makes distant suffering immediate. 'A hundred agonies in black and white' reduces human pain to newspaper copy.",
    structure: "Four regular sestets with a measured, controlled rhythm — reflecting the photographer's disciplined, methodical work. The rhyme scheme (ABBCDD) creates order, contrasting with the chaos he has witnessed.",
    keyQuotes: [
      '"In his darkroom he is finally alone with spools of suffering set out in ordered rows"',
      '"A hundred agonies in black and white"',
      '"The reader\'s eyeballs prick with tears between the bath and pre-lunch beers"',
      '"He remembers the cries of this man\'s wife"',
    ],
    comparisonLinks: "Compare with 'Exposure' (suffering in war), 'What Were They Like?' (the impact of war on civilians), or 'Poppies' (personal response to war).",
  },
  {
    title: "Belfast Confetti",
    poet: "Ciaran Carson",
    summary: "The speaker is caught in a bomb explosion during the Troubles in Belfast. Punctuation marks become shrapnel — the poem enacts the confusion and terror of a sudden bombing. Language itself breaks down under the pressure of violence.",
    themes: "Political conflict, terrorism, confusion, language and violence, identity",
    language: "Punctuation marks as weapons ('Nuts, bolts, nails, car-keys. A fount of broken type. And the explosion itself — an asterisk on the map') brilliantly conflates the writer's tools with instruments of destruction. Questions pile up ('What is my name? Where am I?') showing loss of identity in chaos.",
    structure: "Two stanzas of increasing fragmentation. Sentences break apart, mimicking the explosion's impact. Enjambment and caesura create a stuttering, disrupted rhythm — the reader experiences the speaker's disorientation.",
    keyQuotes: [
      '"Suddenly as the riot squad moved in it was raining exclamation marks"',
      '"a fount of broken type"',
      '"I know this labyrinth so well... every blocked-off end street"',
      '"What is my name? Where am I?"',
    ],
    comparisonLinks: "Compare with 'The Charge of the Light Brigade' (being trapped in conflict), 'Exposure' (soldiers' experiences), or 'Half-caste' (identity and cultural conflict).",
  },
  {
    title: "The Destruction of Sennacherib",
    poet: "Lord Byron",
    summary: "Byron retells the biblical story (2 Kings 19) of the Assyrian King Sennacherib's army being destroyed by God's angel as they attack Jerusalem. The poem celebrates divine power and the fall of a tyrant.",
    themes: "Power, divine justice, destruction, hubris",
    language: "Vivid simile ('The Assyrian came down like the wolf on the fold') creates a menacing, predatory image. Colour imagery shifts from gold and purple (power) to pale and cold (death). The contrast dramatises the swiftness of destruction.",
    structure: "Four-line stanzas with anapestic tetrameter — a galloping rhythm that mirrors the approaching army, then abruptly shifts when God intervenes. The regular form contains the violence within a controlled structure.",
    keyQuotes: [
      '"The Assyrian came down like the wolf on the fold, and his cohorts were gleaming in purple and gold"',
      '"And the sheen of their spears was like stars on the sea"',
      '"the Angel of Death spread his wings on the blast"',
    ],
    comparisonLinks: "Compare with 'The Charge of the Light Brigade' (battle), 'Hawk Roosting' (power), or 'A Poison Tree' (destruction).",
  },
  {
    title: "Half-caste",
    poet: "John Agard",
    summary: "Agard challenges the term 'half-caste' (used to describe mixed-race people) by showing its absurdity. If being mixed makes you 'half,' then Picasso, Tchaikovsky, and the English weather are all 'half-caste' too. A powerful poem about racism, identity, and language.",
    themes: "Racism, identity, language and power, cultural pride",
    language: "Caribbean dialect and phonetic spelling ('Explain yuself / wha yu mean') assert cultural identity and reject Standard English as the only valid form. Humour and irony ('I close half-a-eye') expose the absurdity of racial categorisation. Extended metaphor of 'half' challenges the logic of prejudice.",
    structure: "No punctuation, minimal capitalisation, and run-on lines create a flowing, speech-like rhythm. The poem demands to be read aloud. The lack of full stops suggests the speaker's argument is ongoing and unresolved.",
    keyQuotes: [
      '"Explain yuself, wha yu mean when yu say half-caste"',
      '"yu mean when Picasso mix red an green is a half-caste canvas?"',
      '"I half-caste human being, cast half-a-shadow"',
      '"come back tomorrow wid de whole of yu eye an de whole of yu ear"',
    ],
    comparisonLinks: "Compare with 'No Problem' (racism and identity), 'The Class Game' (prejudice based on class), or 'Catrin' (identity and conflict).",
  },
  {
    title: "A Poison Tree",
    poet: "William Blake",
    summary: "The speaker describes how unexpressed anger grows into something deadly. When angry with a friend, he talks it out and the anger ends. When angry with a foe, he suppresses it — the anger grows into a poisonous tree that kills the enemy. An allegory about the dangers of repression.",
    themes: "Anger, repression, deception, revenge, the corruption of innocence",
    language: "Extended metaphor of a tree transforms anger into something organic that grows when 'watered' with fears and tears. Biblical allusion to the Garden of Eden (the apple, the tree) suggests that repressed anger is a form of original sin. Simple, nursery-rhyme language creates a deceptively innocent surface.",
    structure: "Four quatrains with an AABB rhyme scheme. The sing-song quality creates an unsettling contrast with the dark content. The regular structure mirrors the methodical, deliberate nature of the speaker's deception.",
    keyQuotes: [
      '"I was angry with my friend: I told my wrath, my wrath did end"',
      '"I was angry with my foe: I told it not, my wrath did grow"',
      '"And I waterd it in fears, night and morning with my tears"',
      '"And my foe beheld it shine, and he knew that it was mine"',
    ],
    comparisonLinks: "Compare with 'Hawk Roosting' (controlled violence), 'Cousin Kate' (bitterness), or 'The Destruction of Sennacherib' (destruction).",
  },
  {
    title: "The Man He Killed",
    poet: "Thomas Hardy",
    summary: "A soldier reflects on killing an enemy in battle. He realises that in other circumstances, they might have been friends sharing a drink at an inn. The poem exposes the arbitrary nature of warfare — the enemy is simply a man who enlisted for the same reasons you did.",
    themes: "The futility of war, shared humanity, chance, guilt",
    language: "Colloquial, conversational language ('Yes; quaint and curious war is!') creates an ordinary, everyman voice. The hesitation and repetition ('because — because') show the speaker struggling to justify the killing. Understatement ('quaint and curious') reveals inadequacy of language to process trauma.",
    structure: "Five quatrains with a regular ABAB rhyme scheme and ballad-like rhythm. The simple form contrasts with the complex moral questions. The third stanza's hesitations disrupt the rhythm, reflecting the speaker's moral uncertainty.",
    keyQuotes: [
      '"Had he and I but met by some old ancient inn, we should have sat us down to wet right many a nipperkin!"',
      '"I shot him dead because — because — he was my foe"',
      '"Yes; quaint and curious war is!"',
    ],
    comparisonLinks: "Compare with 'Exposure' (the reality of war), 'War Photographer' (reflecting on conflict), or 'The Charge of the Light Brigade' (duty in war).",
  },
  {
    title: "Cousin Kate",
    poet: "Christina Rossetti",
    summary: "A fallen woman addresses her cousin Kate, who married the lord who seduced and abandoned the speaker. Despite her shame, the speaker has something Kate does not — a son and heir. The poem critiques Victorian sexual double standards and male power over women.",
    themes: "Betrayal, gender inequality, sexual double standards, power, motherhood",
    language: "Natural imagery ('dove' vs 'unclean thing') reflects the speaker's fall from innocence. Bitter, accusatory tone ('You grew more fair than I') reveals jealousy and hurt. The lord is compared to a hunter who 'lured' the speaker — she is prey, not a willing participant.",
    structure: "Six octave stanzas with a regular rhyme scheme. The ballad form suits the storytelling nature. The final stanza's triumphant tone ('my fair-haired son') offers a twist — the rejected woman holds the ultimate power.",
    keyQuotes: [
      '"He lured me to his palace home... he wore me like a silken knot, he changed me like a glove"',
      '"So now I moan, an unclean thing, who might have been a dove"',
      '"Yet I\'ve a gift you have not got, and seem not like to get"',
    ],
    comparisonLinks: "Compare with 'My Last Duchess' (Relationships — male power), 'Half-caste' (prejudice and identity), or 'The Class Game' (social inequality).",
  },
  {
    title: "No Problem",
    poet: "Benjamin Zephaniah",
    summary: "The speaker responds to racism with defiance and confidence, asserting their identity and worth despite being stereotyped and excluded. The poem challenges racist assumptions while celebrating black British identity.",
    themes: "Racism, identity, resilience, cultural pride, defiance",
    language: "Caribbean dialect ('I am not de problem') asserts cultural identity. Repetition of 'I am not de problem' is both a refutation and a declaration of self-worth. Direct address ('you') confronts the racist directly.",
    structure: "Free verse with a rhythmic, spoken-word quality. The repetitive structure builds confidence and defiance. The poem is designed to be performed, reflecting Zephaniah's dub poetry tradition.",
    keyQuotes: [
      '"I am not de problem"',
      '"I am born in England, I am not de problem"',
      '"Black is not de problem"',
    ],
    comparisonLinks: "Compare with 'Half-caste' (racism and identity), 'The Class Game' (prejudice), or 'Belfast Confetti' (identity under threat).",
  },
  {
    title: "What Were They Like?",
    poet: "Denise Levertov",
    summary: "A question-and-answer poem about the Vietnamese people after their culture has been destroyed by war. The questions ask about customs, art, and daily life; the answers reveal that everything has been obliterated. A devastating anti-war poem.",
    themes: "War and cultural destruction, loss, memory, the dehumanisation of war",
    language: "The past tense ('their light hearts turned to stone') emphasises irreversible loss. Poetic imagery in the questions ('Did they use bone and ivory, jade and silver, for ornament?') contrasts with the blunt, devastating answers ('Sir, their light hearts turned to stone'). 'Sir' is bitterly ironic — addressing the powerful who caused the destruction.",
    structure: "Two stanzas: six numbered questions, then six numbered answers. The formal, bureaucratic structure (like a government report) creates cold detachment that makes the human loss more shocking.",
    keyQuotes: [
      '"Sir, their light hearts turned to stone"',
      '"It is not remembered whether in gardens stone lanterns illumined pleasant ways"',
      '"Who can say? It is silent now"',
    ],
    comparisonLinks: "Compare with 'War Photographer' (the impact of war on people), 'Exposure' (suffering), or 'Poppies' (loss and remembrance).",
  },
  {
    title: "The Class Game",
    poet: "Mary Casey",
    summary: "The speaker challenges class prejudice by asking how the reader judges class — by accent, vocabulary, address, or clothing. She proudly asserts her working-class identity and challenges the assumption that middle-class is 'better.'",
    themes: "Class prejudice, identity, language and power, pride, social inequality",
    language: "Juxtaposition of working-class and middle-class language ('dinner' vs 'luncheon,' 'serviette' vs 'napkin') exposes how language is used to judge people. Direct, confrontational tone ('How can you tell what class I\'m from?') challenges the reader. Working-class dialect is presented with pride, not shame.",
    structure: "Free verse with a conversational, spoken quality. Rhetorical questions drive the argument. The accumulation of class markers creates an overwhelming case against prejudice.",
    keyQuotes: [
      '"How can you tell what class I\'m from?"',
      '"I say \'din-din\' instead of \'dinner\'"',
      '"And I\'m proud of the class that I come from"',
    ],
    comparisonLinks: "Compare with 'Half-caste' (prejudice based on identity), 'No Problem' (defiance against discrimination), or 'Cousin Kate' (class and power).",
  },
  {
    title: "Poppies",
    poet: "Jane Weir",
    summary: "A mother describes the experience of her son leaving for war. She smooths his uniform, notices poppies on his lapel, and after he leaves, walks to a war memorial hoping to hear his voice. A deeply personal, emotional anti-war poem focused on loss and grief.",
    themes: "Loss, grief, motherhood, memory, war",
    language: "Domestic imagery ('smoothed down your shirt's collar') juxtaposes the ordinary with the military. Textile and craft imagery ('bandaged,' 'pinned,' 'crimped') connects to the mother's domestic world. Sensory detail ('I wanted to graze my nose across the tip of your nose') conveys physical longing and intimacy.",
    structure: "Free verse with long, enjambed sentences that flow like thought or memory. No regular stanza pattern reflects the mother's uncontained grief. The poem moves between past and present, memory and reality.",
    keyQuotes: [
      '"I pinned one onto your lapel, crimped petals, spasms of paper red"',
      '"I wanted to graze my nose across the tip of your nose"',
      '"I traced the date with my finger, leaned against it like a wishbone"',
    ],
    comparisonLinks: "Compare with 'War Photographer' (personal response to war), 'Catrin' (mother-child bond), or 'Exposure' (the reality of war).",
  },
  {
    title: "Hawk Roosting",
    poet: "Ted Hughes",
    summary: "A hawk speaks in first person, describing its absolute power and control. It sits atop a tree surveying its domain, believing the world was created for its benefit. The poem can be read as an exploration of nature's violence or as an allegory for tyranny and dictatorship.",
    themes: "Power, control, nature's violence, arrogance, tyranny",
    language: "First-person narration gives the hawk an unsettling human-like consciousness. Declarative sentences ('I kill where I please because it is all mine') convey absolute authority. No metaphor or simile — the hawk speaks in literal terms, suggesting raw, unadorned power needs no embellishment.",
    structure: "Six regular quatrains with a controlled, measured rhythm reflecting the hawk's composed authority. The lack of rhyme scheme suggests the hawk is beyond rules or conventions. End-stopped lines create finality — each statement is an absolute.",
    keyQuotes: [
      '"I sit in the top of the wood, my eyes closed"',
      '"I kill where I please because it is all mine"',
      '"Nothing has changed since I began. My eye has permitted no change"',
      '"No arguments assert my right"',
    ],
    comparisonLinks: "Compare with 'My Last Duchess' (Relationships — power and control), 'The Destruction of Sennacherib' (divine vs earthly power), or 'A Poison Tree' (controlled aggression).",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

function PoemCard({ poem }: { poem: PoemAnalysis }) {
  return (
    <div className="rounded-xl border border-border p-6 shadow-md">
      <h3 className="text-xl font-bold text-foreground">{poem.title}</h3>
      <p className="text-sm font-medium text-primary">{poem.poet}</p>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {poem.summary}
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Themes
          </h4>
          <p className="mt-1 text-sm text-muted-foreground">{poem.themes}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Language Analysis
          </h4>
          <p className="mt-1 text-sm text-muted-foreground">{poem.language}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Structure &amp; Form
          </h4>
          <p className="mt-1 text-sm text-muted-foreground">{poem.structure}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
            Key Quotes
          </h4>
          <ul className="mt-1 space-y-1">
            {poem.keyQuotes.map((q) => (
              <li key={q} className="text-sm italic text-muted-foreground">{q}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-blue-50 p-3">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground">
            Comparison Ideas
          </h4>
          <p className="mt-1 text-sm text-muted-foreground">{poem.comparisonLinks}</p>
        </div>
      </div>
    </div>
  );
}

export default function PoetryPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/edexcel"
            className="text-sm text-white/70 hover:text-white"
          >
            &larr; Edexcel English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Poetry Anthology — Full Analysis
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Edexcel GCSE English Literature &middot; Paper 2, Section B
            <br />
            Relationships &amp; Conflict Clusters — All 30 Poems
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ─────────────────────────────────────────── */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Relationships Cluster</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {RELATIONSHIPS_POEMS.map((p) => (
                  <li key={p.title}>
                    <a
                      href={`#rel-${p.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      className="text-primary hover:underline"
                    >
                      {p.title} — {p.poet}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Conflict Cluster</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {CONFLICT_POEMS.map((p) => (
                  <li key={p.title}>
                    <a
                      href={`#con-${p.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      className="text-primary hover:underline"
                    >
                      {p.title} — {p.poet}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* ── Exam overview ─────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            How the Poetry Anthology Works
          </h2>
          <div className="mt-4 rounded-xl bg-muted p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              Your school will have studied <strong>one cluster</strong> —
              either Relationships or Conflict. In the exam, one poem from your
              cluster will be <strong>printed on the paper</strong>, and you
              will be asked to compare it with <strong>another poem of your
              choice</strong> from the same cluster (from memory).
            </p>
            <p>
              The question will focus on how the poets present a particular
              theme or idea. You must compare <strong>methods</strong>
              (language, structure, form) as well as content. The comparison
              is worth <strong>24 marks</strong> (AO1, AO2, AO3).
            </p>
            <p>
              <strong>Top tip:</strong> For each poem, prepare 2-3 comparison
              partners so you are never caught out by the named poem.
            </p>
          </div>
        </section>

        {/* ── Relationships cluster ─────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Relationships Cluster — Full Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            15 poems exploring different types of relationships: romantic love,
            family bonds, desire, loss, and the complexities of human
            connection.
          </p>

          <div className="mt-6 space-y-8">
            {RELATIONSHIPS_POEMS.map((poem) => (
              <div
                key={poem.title}
                id={`rel-${poem.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="scroll-mt-20"
              >
                <PoemCard poem={poem} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Conflict cluster ──────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Conflict Cluster — Full Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            15 poems exploring different types of conflict: war, political
            violence, personal battles, prejudice, inner turmoil, and the
            struggle for identity.
          </p>

          <div className="mt-6 space-y-8">
            {CONFLICT_POEMS.map((poem) => (
              <div
                key={poem.title}
                id={`con-${poem.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="scroll-mt-20"
              >
                <PoemCard poem={poem} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison technique ──────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            How to Write a Poetry Comparison
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Recommended Structure
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                  <span>
                    <strong>Introduction</strong> — briefly state how both poems present the named theme. Identify a key similarity or difference.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                  <span>
                    <strong>Comparative paragraphs (3-4)</strong> — each paragraph should discuss both poems. Compare a specific technique or idea, using comparative connectives (&quot;Similarly,&quot; &quot;In contrast,&quot; &quot;Whereas,&quot; &quot;Both poets&quot;).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                  <span>
                    <strong>Analyse methods</strong> — don&apos;t just compare what the poems say, but how they say it. Compare language choices, structural techniques, form, tone, and imagery.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                  <span>
                    <strong>Include context where relevant</strong> — when and why was the poem written? How does the poet&apos;s background inform the poem? (AO3)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">5</span>
                  <span>
                    <strong>Brief conclusion</strong> — which poem is more effective? Or how do they complement each other?
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border-2 border-primary bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Useful Comparison Connectives
              </h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground">Similarities</h4>
                  <ul className="mt-2 space-y-1">
                    <li>Similarly, [poet] also...</li>
                    <li>Both poets present...</li>
                    <li>Like [poem A], [poem B] also...</li>
                    <li>In the same way...</li>
                    <li>This idea is echoed in...</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Differences</h4>
                  <ul className="mt-2 space-y-1">
                    <li>In contrast, [poet]...</li>
                    <li>Whereas [poem A]..., [poem B]...</li>
                    <li>However, [poet] takes a different approach...</li>
                    <li>Unlike [poem A]...</li>
                    <li>On the other hand...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
