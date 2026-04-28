'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Technique {
  name: string
  category: string
  definition: string
  example: string
  poem: string
  effect: string
  sentenceStarter: string
}

interface FormType {
  name: string
  description: string
  features: string[]
  example: string
  poem: string
  examTip: string
}

/* ------------------------------------------------------------------ */
/*  Categories                                                         */
/* ------------------------------------------------------------------ */

const CATEGORIES = [
  'All',
  'Form Types',
  'Structural Devices',
  'Sound Devices',
  'Figurative Language',
  'Tone & Mood',
] as const

type Category = (typeof CATEGORIES)[number]

/* ------------------------------------------------------------------ */
/*  Data: Form Types                                                   */
/* ------------------------------------------------------------------ */

const FORMS: FormType[] = [
  {
    name: 'Sonnet',
    description:
      'A 14-line poem, traditionally about love, with a tightly controlled rhyme scheme and a volta (turn) that shifts the argument or emotion.',
    features: [
      '14 lines, usually in iambic pentameter',
      'Petrarchan sonnet: octave (ABBAABBA) + sestet (CDECDE or CDCDCD)',
      'Shakespearean sonnet: three quatrains + couplet (ABAB CDCD EFEF GG)',
      'Volta typically at line 9 (Petrarchan) or line 13 (Shakespearean)',
    ],
    example:
      "Elizabeth Barrett Browning's 'Sonnet 29' uses the Petrarchan form to explore how love transforms suffering into joy, with the volta marking the shift from despair to hope.",
    poem: 'Sonnet 29 by Elizabeth Barrett Browning',
    examTip:
      "When a poet chooses the sonnet form, ask WHY. Is it to celebrate love conventionally, or to subvert expectations? Browning uses it sincerely; Shelley's 'Ozymandias' uses a fractured sonnet to mirror the decay of power.",
  },
  {
    name: 'Dramatic Monologue',
    description:
      'A poem written as a speech by a single character, addressed to a silent listener. The speaker inadvertently reveals aspects of their personality that they may not intend to share.',
    features: [
      'Single speaker addressing a silent listener',
      'The speaker reveals their character through what they say and how they say it',
      'Often uses enjambment and caesura to mimic natural speech',
      'Gap between what the speaker intends and what the reader understands',
    ],
    example:
      "Browning's 'My Last Duchess' is the archetypal dramatic monologue. The Duke reveals his possessiveness and implied violence while ostensibly discussing art.",
    poem: 'My Last Duchess by Robert Browning',
    examTip:
      "Focus on the gap between the speaker's self-presentation and what the reader infers. This ironic distance is the key analytical tool for dramatic monologues.",
  },
  {
    name: 'Free Verse',
    description:
      'Poetry without a consistent metre or rhyme scheme. The poet controls rhythm through line breaks, enjambment, and the natural cadence of speech.',
    features: [
      'No fixed metre or rhyme scheme',
      'Line breaks and white space create rhythm and emphasis',
      'Often used for personal, confessional, or contemporary subject matter',
      'Gives the poet freedom to mirror the unpredictability of thought or experience',
    ],
    example:
      "Simon Armitage's 'Remains' uses free verse to capture the fragmented, traumatic memories of a soldier, reflecting how PTSD disrupts ordered thought.",
    poem: 'Remains by Simon Armitage',
    examTip:
      "Do not say free verse has 'no structure'. It has deliberate structural choices -- comment on line breaks, stanza lengths, and how the lack of regular form contributes to meaning.",
  },
  {
    name: 'Ballad',
    description:
      'A narrative poem, often with a regular rhyme scheme (typically ABCB) and a strong rhythmic pattern. Originally an oral form, designed to be sung or recited aloud.',
    features: [
      'Tells a story, often dramatic or tragic',
      'Regular quatrains, usually ABCB rhyme scheme',
      'Alternating tetrameter and trimeter lines',
      'Repetition and refrains for emphasis',
    ],
    example:
      "Tennyson's 'The Charge of the Light Brigade' uses ballad-like rhythm and repetition to commemorate the soldiers, with the galloping metre mimicking horses in battle.",
    poem: 'The Charge of the Light Brigade by Alfred, Lord Tennyson',
    examTip:
      'Comment on how the regularity of the ballad form can create a sense of inevitability, or how it might contrast with chaotic subject matter.',
  },
  {
    name: 'Elegy',
    description:
      'A poem of mourning, typically lamenting the death of a particular person or reflecting on loss and mortality more broadly.',
    features: [
      'Mournful, reflective tone',
      'Often moves from grief to consolation or acceptance',
      'May use pastoral imagery or the natural world as a frame',
      'Formal, measured language',
    ],
    example:
      "Jane Weir's 'Poppies' has elegiac qualities, mourning the departure (and potential loss) of a son to war, using domestic imagery to convey private grief.",
    poem: 'Poppies by Jane Weir',
    examTip:
      "Consider the emotional arc. Does the poem achieve resolution or remain in grief? This tells you about the poet's message regarding loss.",
  },
  {
    name: 'Ode',
    description:
      'A lyric poem addressed to a specific subject, typically written in an elevated style to celebrate or contemplate something. Often meditative and richly descriptive.',
    features: [
      'Addresses a specific subject directly (apostrophe)',
      'Elevated, formal language and tone',
      'Often explores the relationship between beauty, mortality, and art',
      'Variable stanza lengths with complex rhyme schemes',
    ],
    example:
      "Keats's odes are the most famous examples. The ode form elevates its subject, giving it dignity and significance.",
    poem: 'Ode to a Nightingale by John Keats',
    examTip:
      'If a poet writes in the ode tradition, consider what they are elevating and why. The choice of form signals reverence or deep contemplation.',
  },
  {
    name: 'Villanelle',
    description:
      'A 19-line form with five tercets and a final quatrain, built around two repeating refrains. The obsessive repetition creates a sense of circling, unresolvable emotion.',
    features: [
      '19 lines: five tercets + one quatrain',
      'Two alternating refrains (lines 1 and 3 of the first stanza)',
      'ABA rhyme scheme throughout',
      'Refrains gain new meaning through shifting context',
    ],
    example:
      "Dylan Thomas's 'Do Not Go Gentle into That Good Night' uses the villanelle's repetition to convey the desperate plea against death, with each refrain intensifying.",
    poem: 'Do Not Go Gentle into That Good Night by Dylan Thomas',
    examTip:
      'Discuss how the repeated lines change meaning as the poem progresses. The form itself enacts the theme of obsession or inescapability.',
  },
  {
    name: 'Lyric',
    description:
      'A short poem expressing personal thoughts and emotions of a single speaker. Lyric poetry is characterised by musicality, emotional intensity, and a focus on subjective experience rather than narrative.',
    features: [
      'Expresses personal emotions and thoughts',
      'Usually short and musical in quality',
      'Written from a first-person perspective',
      'Focuses on a single moment, feeling, or idea rather than telling a story',
    ],
    example:
      "Shelley's 'Ozymandias', while containing narrative elements, is fundamentally a lyric meditation on power and impermanence, expressing the speaker's reflective response to the ruined statue.",
    poem: 'Ozymandias by Percy Bysshe Shelley',
    examTip:
      "Most GCSE anthology poems are lyric poems. Identify the speaker's emotion and trace how it develops or shifts across the poem.",
  },
  {
    name: 'Narrative',
    description:
      'A poem that tells a story, with a sequence of events, characters, and often a setting. Narrative poetry may use any form but is defined by its storytelling purpose.',
    features: [
      'Tells a story with a beginning, middle, and end (or deliberately disrupts this)',
      'May include characters, dialogue, and setting',
      'Can use any metre or rhyme scheme',
      'Often uses chronological or non-linear structure for effect',
    ],
    example:
      "Ted Hughes's 'Bayonet Charge' narrates a single, terrifying moment of a soldier's charge across a battlefield, using present tense to create immediacy.",
    poem: 'Bayonet Charge by Ted Hughes',
    examTip:
      "When analysing a narrative poem, consider the poet's choice of tense, the pacing of events, and what is left out of the story as well as what is included.",
  },
  {
    name: 'Blank Verse',
    description:
      'Unrhymed iambic pentameter. The most common metre in English poetry and drama, closely approximating the rhythm of natural speech while maintaining a formal, elevated quality.',
    features: [
      'Iambic pentameter (five pairs of unstressed/stressed syllables per line)',
      'No rhyme scheme',
      'Used extensively by Shakespeare, Milton, and Wordsworth',
      'Elevated yet natural-sounding',
    ],
    example:
      "Wordsworth's 'Extract from The Prelude' is written in blank verse, lending the autobiographical narrative a sense of gravity and reflecting the speaker's mature, retrospective voice.",
    poem: 'Extract from The Prelude by William Wordsworth',
    examTip:
      'When the poet disrupts the iambic pentameter, it signals something important. Look for irregular lines and explain what the disruption emphasises.',
  },
]

/* ------------------------------------------------------------------ */
/*  Data: All techniques (structural, sound, figurative, tone)         */
/* ------------------------------------------------------------------ */

const TECHNIQUES: Technique[] = [
  /* ── Structural Devices ──────────────────────────────────────── */
  {
    name: 'Enjambment',
    category: 'Structural Devices',
    definition:
      'When a sentence or phrase runs over from one line to the next without punctuation, creating momentum and reflecting overflow of emotion, breathlessness, or continuity.',
    example:
      '"suddenly he awoke and was running - raw / In raw-seamed hot khaki" -- the line break forces the reader forward',
    poem: 'Bayonet Charge by Ted Hughes',
    effect:
      "The enjambment mirrors the soldier's headlong, uncontrolled charge. The reader is propelled forward across line breaks just as the soldier is propelled forward by fear and duty, with no pause for thought or breath.",
    sentenceStarter:
      'The writer\'s use of enjambment across "[quote]" propels the reader forward, mirroring... This creates a sense of...',
  },
  {
    name: 'Caesura',
    category: 'Structural Devices',
    definition:
      'A pause within a line of poetry, created by punctuation (full stop, comma, dash, semicolon). It can create a dramatic pause, a shift in tone, or a sense of fragmentation.',
    example:
      '"probably armed, possibly not" -- the comma creates a devastating pause between certainty and doubt',
    poem: 'Remains by Simon Armitage',
    effect:
      "Armitage uses caesura to fragment the narrative, reflecting the soldier's fractured memories and psychological trauma. The abrupt pauses mirror the sudden, violent events and the way PTSD disrupts coherent recollection.",
    sentenceStarter:
      'The caesura in "[quote]" forces the reader to pause, creating a moment of... This reflects...',
  },
  {
    name: 'Volta',
    category: 'Structural Devices',
    definition:
      'A turn or shift in a poem where the argument, tone, mood, or perspective changes direction. Most associated with sonnets but can occur in any poem.',
    example:
      "In 'Ozymandias', the volta shifts from describing the statue's power to the vast, empty desert: 'Nothing beside remains.'",
    poem: 'Ozymandias by Percy Bysshe Shelley',
    effect:
      "The volta undercuts Ozymandias's boast by immediately presenting the ironic reality. The turn transforms the poem from a description of power into a meditation on its impermanence.",
    sentenceStarter:
      "The volta at [line/point] marks a shift from... to..., which suggests the poet's intention to...",
  },
  {
    name: 'Stanza',
    category: 'Structural Devices',
    definition:
      'A group of lines forming a unit within a poem, separated by a blank line. Stanza length and regularity (or irregularity) are deliberate structural choices that shape meaning.',
    example:
      "The single continuous stanza of 'My Last Duchess' vs. the fragmenting, irregular stanzas of 'Remains'",
    poem: 'My Last Duchess by Robert Browning',
    effect:
      "The single, unbroken stanza mirrors the Duke's desire for total control. There are no stanza breaks because the Duke allows no interruption, no alternative perspective, no escape from his narrative.",
    sentenceStarter:
      "The poet's use of [regular/irregular/single] stanza structure reflects... This structural choice suggests...",
  },
  {
    name: 'Couplet',
    category: 'Structural Devices',
    definition:
      'Two consecutive lines of poetry that usually rhyme and share the same metre. Often used to conclude a sonnet or poem with a memorable, epigrammatic statement.',
    example:
      "The final couplet of Shakespeare's sonnets delivers a concluding twist or summary; in 'Ozymandias', the poem's final image occupies its closing lines.",
    poem: 'Ozymandias by Percy Bysshe Shelley',
    effect:
      'A couplet creates a sense of resolution, completion, or summary. When a poet places a key idea in a couplet, the rhyme and brevity make it memorable and conclusive.',
    sentenceStarter:
      'The concluding couplet "[quote]" creates a sense of finality, suggesting that the poet wishes to leave the reader with...',
  },
  {
    name: 'Tercet',
    category: 'Structural Devices',
    definition:
      'A three-line stanza or unit. Tercets are the building blocks of villanelles and terza rima, and can create a sense of movement, incompleteness, or tension.',
    example:
      "The five tercets of Dylan Thomas's villanelle 'Do Not Go Gentle into That Good Night' build obsessive repetition before the final quatrain.",
    poem: 'Do Not Go Gentle into That Good Night by Dylan Thomas',
    effect:
      'Tercets create a sense of ongoing movement -- three lines feel less resolved than four, pushing the reader forward. In a villanelle, the tercet structure supports the obsessive, cyclical quality of the form.',
    sentenceStarter:
      "The poet's use of tercets creates a sense of... The three-line structure suggests...",
  },
  {
    name: 'Quatrain',
    category: 'Structural Devices',
    definition:
      'A four-line stanza, the most common stanza form in English poetry. Quatrains provide a balanced, stable structure and can follow various rhyme schemes (ABAB, ABCB, AABB).',
    example:
      "Blake's 'London' uses four quatrains with an ABAB rhyme scheme, creating a controlled, measured structure that contrasts with the chaotic suffering described.",
    poem: 'London by William Blake',
    effect:
      'The regularity of the quatrain creates order and control, which can contrast powerfully with disordered or painful content. The predictable structure can also suggest inevitability or inescapability.',
    sentenceStarter:
      'The regular quatrain structure of the poem creates... This sense of order contrasts with / reinforces...',
  },
  {
    name: 'Sestet',
    category: 'Structural Devices',
    definition:
      'A six-line stanza or the final six lines of a Petrarchan sonnet. In a sonnet, the sestet typically responds to, resolves, or complicates the argument established in the octave.',
    example:
      "In a Petrarchan sonnet, the sestet follows the volta and provides the poem's resolution or counter-argument to the octave's proposition.",
    poem: 'Sonnet 29 by Elizabeth Barrett Browning',
    effect:
      "The sestet provides the poem's emotional or argumentative resolution. After the octave establishes a problem or question, the sestet answers, complicates, or subverts it.",
    sentenceStarter:
      "The sestet shifts the poem's focus from... to..., suggesting that the poet uses the sonnet's structure to...",
  },
  {
    name: 'Octave',
    category: 'Structural Devices',
    definition:
      "An eight-line stanza or the first eight lines of a Petrarchan sonnet. In a sonnet, the octave establishes the poem's central problem, question, or emotional state before the volta introduces a shift.",
    example:
      "In Browning's 'Sonnet 29', the octave establishes the speaker's desolation and longing before the volta at line 9 introduces the transformative power of love.",
    poem: 'Sonnet 29 by Elizabeth Barrett Browning',
    effect:
      'The octave builds anticipation and establishes the emotional or intellectual foundation that the sestet will respond to. Its length gives the poet space to develop a sustained argument or mood.',
    sentenceStarter:
      'The octave establishes... through [technique], creating a foundation that the sestet then [reinforces / subverts / develops]...',
  },
  {
    name: 'End-stop',
    category: 'Structural Devices',
    definition:
      'A line of poetry that ends with punctuation (a full stop, comma, semicolon, or dash), creating a pause and a sense of completion or control. The opposite of enjambment.',
    example:
      "\"I wander thro' each charter'd street.\" -- the full stop at the line's end creates a measured, deliberate pace.",
    poem: 'London by William Blake',
    effect:
      'End-stopped lines create a measured, controlled rhythm. They can suggest certainty, finality, or deliberate emphasis. When combined with short lines, they can feel blunt and confrontational.',
    sentenceStarter:
      'The end-stopped line "[quote]" creates a sense of finality, suggesting... The pause reinforces...',
  },

  /* ── Sound Devices ───────────────────────────────────────────── */
  {
    name: 'Alliteration',
    category: 'Sound Devices',
    definition:
      'The repetition of the same consonant sound at the beginning of closely connected words, creating emphasis, rhythm, or a particular auditory effect.',
    example: "\"stuttering rifles' rapid rattle\" -- the repeated 'r' mimics gunfire",
    poem: 'Anthem for Doomed Youth by Wilfred Owen',
    effect:
      'The harsh alliteration creates an onomatopoeic effect that immerses the reader in the soundscape of battle. The repetition of plosive and fricative sounds mirrors the relentless noise of warfare.',
    sentenceStarter:
      'The alliteration of the [letter] sound in "[quote]" creates a [harsh/soft/rhythmic] effect, which suggests...',
  },
  {
    name: 'Assonance',
    category: 'Sound Devices',
    definition:
      'The repetition of vowel sounds within nearby words, creating internal echoes that affect the mood or pace of a line.',
    example: "\"no trees, no natural shelter\" -- repetition of the short 'o' and long 'ee' sounds",
    poem: 'Storm on the Island by Seamus Heaney',
    effect:
      "Heaney uses assonance to create aural effects that mirror the storm's sounds. The long vowels in certain lines slow the pace, building tension before the explosive violence of the storm hits.",
    sentenceStarter:
      'The assonance of the [vowel] sound in "[quote]" creates a [slow/elongated/mournful] effect, suggesting...',
  },
  {
    name: 'Sibilance',
    category: 'Sound Devices',
    definition:
      "The repetition of 's', 'sh', 'z', or soft 'c' sounds, creating a hissing or whispering effect that can suggest secrecy, menace, softness, or unease.",
    example: "\"smoothed down your shirt's\" -- the repeated 's' sounds create intimacy",
    poem: 'Poppies by Jane Weir',
    effect:
      "The sibilance creates a soft, intimate tone that reflects the mother's tenderness and her quiet, private grief. The whispering quality suggests emotions too painful to voice loudly.",
    sentenceStarter:
      'The sibilance in "[quote]" creates a [soft/sinister/whispering] tone, which reflects...',
  },
  {
    name: 'Onomatopoeia',
    category: 'Sound Devices',
    definition:
      'Words that phonetically imitate or suggest the sound they describe, creating vivid sensory experiences for the reader.',
    example: '"crackled" and "threshing" -- the words themselves sound like what they describe',
    poem: 'Bayonet Charge by Ted Hughes',
    effect:
      "Hughes uses onomatopoeia throughout to immerse the reader in the sensory chaos of battle. Words like 'crackled' and 'threshing' make the violence tangible, forcing the reader to experience the assault on the soldier's senses.",
    sentenceStarter:
      'The onomatopoeic word "[quote]" immerses the reader in the [sound], creating a visceral sense of...',
  },
  {
    name: 'Plosives',
    category: 'Sound Devices',
    definition:
      "Consonant sounds produced by a sudden burst of air: 'b', 'd', 'g', 'p', 't', 'k'. They create a harsh, explosive, or aggressive effect when repeated.",
    example:
      "\"but nothing happens\" -- the repeated 'b' and 't' sounds create a blunt, deadened rhythm",
    poem: 'Exposure by Wilfred Owen',
    effect:
      'The plosive sounds mirror the sudden violence of warfare and the harsh conditions. Their abruptness can also convey frustration, anger, or the brutality of a situation.',
    sentenceStarter:
      'The plosive sounds in "[quote]" create a [harsh/abrupt/violent] effect, mirroring...',
  },
  {
    name: 'Fricatives',
    category: 'Sound Devices',
    definition:
      "Consonant sounds produced by forcing air through a narrow gap: 'f', 'v', 'th', 'sh', 'zh'. They create a softer, more sustained, sometimes threatening effect.",
    example:
      '"flowing flakes that flock" -- the repeated \'f\' sounds create a relentless, suffocating quality',
    poem: 'Exposure by Wilfred Owen',
    effect:
      'The fricative sounds can create a sense of threat, suffocation, or relentless pressure. Their sustained quality contrasts with the abruptness of plosives, suggesting something inescapable rather than sudden.',
    sentenceStarter:
      'The fricative sounds in "[quote]" create a [sustained/threatening/suffocating] quality, suggesting...',
  },
  {
    name: 'Rhythm',
    category: 'Sound Devices',
    definition:
      'The pattern of stressed and unstressed syllables that creates the beat or pulse of a poem. Regular rhythm (metre) can create formality, momentum, or musicality; irregular rhythm can suggest disruption or chaos.',
    example:
      '"HALF a league, HALF a league, HALF a league ONward" -- the opening dactyls give way to the body\'s anapaestic dimeter, with the refrain "Rode the SIX HUN-dred" returning to dactyls; the galloping rhythm mimics horses charging',
    poem: 'The Charge of the Light Brigade by Alfred, Lord Tennyson',
    effect:
      "The relentless rhythm — predominantly anapaestic dimeter with a dactylic refrain — mimics the thundering hooves of the cavalry charge. The unstoppable momentum reflects the soldiers' inability to turn back, driving both them and the reader inexorably forward.",
    sentenceStarter:
      'The [regular/irregular/galloping] rhythm of "[quote]" creates a sense of... This mirrors...',
  },
  {
    name: 'Metre (Iambic Pentameter)',
    category: 'Sound Devices',
    definition:
      'Iambic pentameter consists of five iambs (unstressed-stressed pairs) per line, creating a heartbeat-like rhythm: da-DUM da-DUM da-DUM da-DUM da-DUM. It is the most common metre in English poetry.',
    example:
      '"Shall I / com-PARE / thee TO / a SUM / mer\'s DAY" -- five iambic feet create a natural, speech-like rhythm',
    poem: 'Extract from The Prelude by William Wordsworth',
    effect:
      'Iambic pentameter closely mirrors the natural rhythm of English speech, lending formality without feeling artificial. When poets disrupt it, the irregularity signals emotional disturbance, emphasis, or a shift in meaning.',
    sentenceStarter:
      'The iambic pentameter in "[quote]" creates a [measured/natural/formal] rhythm, which is [maintained / disrupted at the point where...]...',
  },
  {
    name: 'Rhyme Scheme',
    category: 'Sound Devices',
    definition:
      'The pattern of rhyming words at the ends of lines, identified by letters (ABAB, AABB, ABCB). Rhyme can create musicality, link ideas, create satisfaction, or -- when disrupted -- suggest tension.',
    example:
      "Shelley's 'Ozymandias' uses an irregular sonnet rhyme scheme (ABABACDCEDEFEF) that mirrors the decay of the statue",
    poem: 'Ozymandias by Percy Bysshe Shelley',
    effect:
      'The disrupted rhyme scheme prevents the poem from settling into a comfortable pattern, just as the crumbling statue refuses to conform to the grandeur Ozymandias intended. The form itself embodies the theme of impermanence.',
    sentenceStarter:
      'The [regular/irregular/disrupted] rhyme scheme of "[quote]" creates a sense of... This [reinforces / contrasts with]...',
  },

  /* ── Figurative Language in Poetry ───────────────────────────── */
  {
    name: 'Extended Metaphor',
    category: 'Figurative Language',
    definition:
      'A metaphor that is sustained throughout a section of a poem or the entire poem, developing the comparison in detail to explore complex ideas.',
    example:
      "The entire poem 'Tissue' extends the metaphor of paper to represent human civilisation -- religion, commerce, geography, and architecture",
    poem: 'Tissue by Imtiaz Dharker',
    effect:
      'The extended metaphor allows Dharker to connect diverse aspects of human life through a single, unifying image of fragility and transparency, arguing that all human constructs share the same fundamental fragility.',
    sentenceStarter:
      'The poet develops an extended metaphor of [image] throughout the poem, sustained through "[quote]". This creates a layered comparison suggesting...',
  },
  {
    name: 'Conceit',
    category: 'Figurative Language',
    definition:
      'An elaborate, often surprising extended metaphor that draws an unexpected comparison between two very different things. A conceit is intellectually inventive and forces the reader to see a familiar subject in a completely new way.',
    example:
      "In 'Tissue', Dharker's conceit compares all human civilisation -- holy books, maps, receipts, buildings -- to fragile tissue paper. The comparison is unexpected but reveals a profound truth about impermanence.",
    poem: 'Tissue by Imtiaz Dharker',
    effect:
      "The conceit challenges the reader's assumptions by yoking together apparently unrelated ideas. The intellectual surprise of the comparison forces engagement and rewards close reading.",
    sentenceStarter:
      'The poet employs a conceit, comparing [X] to [Y], which is initially surprising but reveals... The unexpected connection suggests...',
  },
  {
    name: 'Symbolism',
    category: 'Figurative Language',
    definition:
      'Using an object, person, or event to represent a deeper, more abstract meaning beyond its literal significance. Symbols carry cultural or contextual weight.',
    example:
      "In 'Poppies', the poppies symbolise both remembrance of the war dead and the mother's personal grief. The poppy is simultaneously public and private.",
    poem: 'Poppies by Jane Weir',
    effect:
      'Symbolism allows the poet to communicate complex, multi-layered meanings through a single, concrete image. Readers can interpret symbols at different levels, creating depth.',
    sentenceStarter:
      'The [object] functions as a symbol of..., suggesting... On a deeper level, it could also represent...',
  },
  {
    name: 'Allegory',
    category: 'Figurative Language',
    definition:
      'A narrative in which characters, events, and settings represent abstract ideas or moral qualities, creating a sustained, secondary meaning beneath the literal story. Unlike symbolism (individual images), allegory operates across the entire text.',
    example:
      "Blake's 'London' can be read as an allegory for the corruption of all human institutions -- the Church, the monarchy, and marriage are all implicated in the 'charter'd' system of control.",
    poem: 'London by William Blake',
    effect:
      'Allegory invites the reader to look beyond the surface narrative and decode a deeper meaning. It allows poets to critique society, politics, or human nature indirectly.',
    sentenceStarter:
      'The poem can be read allegorically, with [element] representing... This allegorical reading suggests that the poet is commenting on...',
  },
  {
    name: 'Pathetic Fallacy',
    category: 'Figurative Language',
    definition:
      "Attributing human emotions to the natural world or weather, so that the landscape reflects or amplifies the emotional state of characters or the poem's mood.",
    example:
      '"dawn massing in the east her melancholy army" -- dawn described as melancholy and threatening',
    poem: 'Exposure by Wilfred Owen',
    effect:
      "Owen makes nature itself mourn alongside the soldiers. The 'melancholy army' of dawn suggests that even the natural world recognises the tragedy, while positioning nature as yet another hostile force.",
    sentenceStarter:
      'The pathetic fallacy in "[quote]" mirrors the [emotion] of the scene by presenting nature as... This suggests...',
  },

  /* ── Tone & Mood ─────────────────────────────────────────────── */
  {
    name: 'Tone',
    category: 'Tone & Mood',
    definition:
      "The attitude or emotional quality conveyed by the poet's choice of words, imagery, and rhythm. Tone reveals how the speaker feels about their subject. It is distinct from mood (how the reader feels).",
    example:
      "The tone of 'Remains' shifts from casual, colloquial storytelling ('On another occasion') to haunted, guilt-ridden confession ('his bloody life in my bloody hands').",
    poem: 'Remains by Simon Armitage',
    effect:
      "The tonal shift is the poem's most powerful device. The initial laddish, matter-of-fact tone makes the later descent into guilt and trauma all the more shocking, as the soldier's bravado cracks under the weight of what he has done.",
    sentenceStarter:
      'The [adjective] tone created by "[quote]" suggests that the speaker feels... This shifts to a more [adjective] tone when...',
  },
  {
    name: 'Mood',
    category: 'Tone & Mood',
    definition:
      'The overall atmosphere or feeling that a poem creates for the reader. Mood is shaped by the combination of imagery, rhythm, sound, and diction working together.',
    example:
      "The opening of 'Exposure' creates a mood of tense, suffocating dread through the description of 'merciless iced east winds that knive us' and the repeated refrain 'but nothing happens'.",
    poem: 'Exposure by Wilfred Owen',
    effect:
      "The mood of dread and paralysis immerses the reader in the soldiers' experience. Owen uses every available tool -- sound, rhythm, imagery -- to make the reader feel the oppressive, numbing wait.",
    sentenceStarter:
      'The poet creates a mood of [adjective] through the use of [technique], such as "[quote]". This makes the reader feel...',
  },
  {
    name: 'Tonal Shift',
    category: 'Tone & Mood',
    definition:
      "A change in the tone or mood within a poem, often marking a turning point in the speaker's attitude, understanding, or emotional state. This may coincide with a structural volta.",
    example:
      "In 'Checking Out Me History', the tone shifts between angry defiance (in the Creole sections) and reverent celebration (when describing Caribbean heroes like Toussaint L'Ouverture).",
    poem: 'Checking Out Me History by John Agard',
    effect:
      "The tonal shifts embody the poem's central conflict between imposed colonial identity and reclaimed cultural heritage. The contrast between anger and reverence shows the speaker's complex emotional response.",
    sentenceStarter:
      "The tone shifts from [adjective] to [adjective] at the point where..., suggesting that the speaker's attitude has changed because...",
  },
  {
    name: 'Register',
    category: 'Tone & Mood',
    definition:
      'The level of formality or informality in the language, shaped by audience, context, and purpose. Register can shift within a poem for deliberate effect.',
    example:
      "Agard's 'Checking Out Me History' shifts between Standard English (for the imposed British curriculum) and Caribbean Creole (for the reclaimed identity).",
    poem: 'Checking Out Me History by John Agard',
    effect:
      "The shift in register is political. Standard English represents the colonial education system; Creole represents the speaker's authentic voice and cultural heritage. The refusal to use only one register asserts that both forms have equal validity.",
    sentenceStarter:
      'The shift in register from [formal/informal] to [formal/informal] in "[quote]" reflects... This suggests the poet views...',
  },
  {
    name: 'Diction',
    category: 'Tone & Mood',
    definition:
      'The specific word choices a poet makes. Analysing diction means examining why a particular word was chosen over alternatives and what connotations it carries.',
    example:
      "Hughes chooses 'raw' in 'raw-seamed hot khaki' rather than 'rough' or 'coarse'. 'Raw' suggests exposed flesh, emotional vulnerability, and unprocessed experience simultaneously.",
    poem: 'Bayonet Charge by Ted Hughes',
    effect:
      'The diction is deliberately visceral and violent. Anglo-Saxon, monosyllabic words feel blunt and brutal, matching the content. Every word choice reveals layers of meaning.',
    sentenceStarter:
      'The poet\'s choice of "[word]" rather than [alternative] is significant because it connotes... This word choice suggests...',
  },
]

/* ------------------------------------------------------------------ */
/*  Tone & Mood Vocabulary                                             */
/* ------------------------------------------------------------------ */

const TONE_VOCABULARY = [
  {
    word: 'Elegiac',
    meaning: 'Expressing sorrow or mourning, often with a sense of loss and reflection.',
  },
  {
    word: 'Melancholic',
    meaning: 'Deeply sad and thoughtful; a sustained, quiet sadness rather than acute grief.',
  },
  {
    word: 'Wistful',
    meaning: 'A gentle longing for something lost or unattainable; sad but not despairing.',
  },
  {
    word: 'Nostalgic',
    meaning: 'A bittersweet longing for the past, often idealising what has been lost.',
  },
  {
    word: 'Defiant',
    meaning: 'Bold resistance or challenge; refusing to submit to authority or convention.',
  },
  {
    word: 'Sardonic',
    meaning: 'Mocking or cynical in a way that reveals contempt; darker than sarcasm.',
  },
  {
    word: 'Bitter',
    meaning: 'Resentful and angry, often born from a sense of injustice or betrayal.',
  },
  {
    word: 'Reverent',
    meaning:
      'Showing deep respect, admiration, or awe; often used for sacred or elevated subjects.',
  },
  {
    word: 'Contemplative',
    meaning: 'Quietly thoughtful and reflective; considering something deeply.',
  },
  {
    word: 'Ominous',
    meaning: 'Creating a sense of threat or foreboding; suggesting that something bad is coming.',
  },
  {
    word: 'Plaintive',
    meaning: 'Expressing suffering or sorrow in a way that evokes pity; a mournful quality.',
  },
  {
    word: 'Triumphant',
    meaning: 'Expressing victory, pride, or celebration; a sense of achievement.',
  },
  {
    word: 'Ironic',
    meaning:
      'Conveying a meaning opposite to the literal words; revealing a gap between appearance and reality.',
  },
  { word: 'Sombre', meaning: 'Dark, serious, and grave in tone; oppressively still or mournful.' },
  {
    word: 'Tender',
    meaning: 'Gentle, caring, and emotionally vulnerable; expressing love or affection softly.',
  },
  {
    word: 'Vitriolic',
    meaning: 'Filled with bitter, harsh criticism; aggressively hostile language.',
  },
  {
    word: 'Ambivalent',
    meaning:
      'Expressing conflicting or mixed feelings about a subject; uncertain rather than decisive.',
  },
  {
    word: 'Resolute',
    meaning: 'Firm, determined, and unwavering; expressing conviction or certainty.',
  },
  {
    word: 'Despairing',
    meaning: 'Expressing complete loss of hope; a tone of anguish without consolation.',
  },
  {
    word: 'Celebratory',
    meaning: 'Expressing joy, pride, or praise; honouring and rejoicing in a subject.',
  },
]

/* ------------------------------------------------------------------ */
/*  Comparing Poems: connective phrases and approaches                 */
/* ------------------------------------------------------------------ */

const COMPARISON_CONNECTIVES = {
  similarity: [
    'Similarly, [Poet B] also...',
    'Both poets use [technique] to convey...',
    'In the same way, [Poem B] presents...',
    'Like [Poet A], [Poet B] employs...',
    'This mirrors the approach in [Poem B], where...',
    'Equally, [Poet B] explores [theme] through...',
    'A comparable technique appears in [Poem B], where...',
  ],
  difference: [
    'In contrast, [Poet B] uses...',
    'However, while [Poet A]..., [Poet B]...',
    'Conversely, [Poem B] takes a different approach by...',
    'Unlike [Poet A], who..., [Poet B] instead...',
    'Where [Poet A] presents [theme] as..., [Poet B] suggests it is...',
    'This contrasts sharply with [Poem B], in which...',
    'On the other hand, [Poet B] challenges this by...',
  ],
  development: [
    'Furthermore, [Poet B] develops this idea by...',
    'Building on this, [Poem B] takes the concept further...',
    'While both poets address [theme], [Poet B] complicates it by...',
    'This idea is extended in [Poem B], where...',
    '[Poet B] offers a more nuanced perspective by...',
    'Interestingly, [Poet B] subverts this convention by...',
  ],
}

const COMPARISON_APPROACHES = [
  {
    name: 'Alternating Method (Recommended)',
    description:
      'Discuss both poems together, point by point. For each analytical point, examine how Poem A addresses it, then immediately compare Poem B. This method produces the strongest, most integrated comparisons.',
    structure: [
      'Point 1: Poem A technique/idea -> Poem B comparison',
      'Point 2: Poem A technique/idea -> Poem B comparison',
      'Point 3: Poem A technique/idea -> Poem B comparison',
    ],
    tip: 'This is what examiners reward most highly. Every paragraph should mention both poems.',
  },
  {
    name: 'Thematic Comparison',
    description:
      'Organise your essay by theme rather than by poem. Each paragraph addresses a shared theme and analyses how both poets treat it differently.',
    structure: [
      'Theme 1 (e.g., Power): How Poet A presents it -> How Poet B presents it',
      "Theme 2 (e.g., Loss): Poet A's approach -> Poet B's approach",
      'Theme 3 (e.g., Memory): Poet A -> Poet B, with a conclusion on which is more effective',
    ],
    tip: 'Good for poems that share clear thematic ground. Ensure you still analyse techniques, not just themes.',
  },
  {
    name: 'Block Method (Use Cautiously)',
    description:
      'Write about one poem fully, then the other, linking back to the first. This can feel disjointed and is only appropriate if the poems are very different.',
    structure: [
      'Poem A: Full analysis (3-4 points)',
      'Poem B: Full analysis, with explicit links back to Poem A in every paragraph',
    ],
    tip: 'Avoid this if possible. It often leads to two separate essays rather than a genuine comparison. If you must use it, every Poem B paragraph must reference Poem A.',
  },
]

/* ------------------------------------------------------------------ */
/*  Writing about Form and Structure guide                              */
/* ------------------------------------------------------------------ */

const FORM_STRUCTURE_GUIDE = [
  {
    heading: 'Name the form and explain WHY',
    description:
      "Do not just identify the form ('this is a sonnet'). Explain why the poet chose this form and how it contributes to meaning.",
    good: "Shelley's choice of the sonnet form for 'Ozymandias' is significant: the constrained 14-line structure mirrors the rigid control Ozymandias attempted to impose, while the irregular rhyme scheme enacts the decay of that control.",
    weak: 'This poem is a sonnet with 14 lines.',
  },
  {
    heading: 'Comment on what is absent',
    description:
      'Sometimes the absence of structural features is as significant as their presence. No rhyme, no regular metre, no stanza breaks -- these are all deliberate choices.',
    good: "Armitage's decision to write 'Remains' in free verse, without regular stanza lengths or a rhyme scheme, mirrors the soldier's psychological fragmentation. The lack of formal structure reflects a mind unable to impose order on traumatic memories.",
    weak: 'The poem has no rhyme scheme.',
  },
  {
    heading: 'Link structure to meaning',
    description:
      "Every structural comment should answer the question 'so what?' How does this structural choice affect the reader or reinforce the poem's themes?",
    good: "The enjambment across 'raw / In raw-seamed hot khaki' propels the reader forward without pause, recreating the breathless, involuntary momentum of the soldier's charge. The reader experiences the same loss of control.",
    weak: 'There is enjambment between lines 3 and 4.',
  },
  {
    heading: 'Analyse shifts and patterns',
    description:
      'Look for changes in stanza length, metre, or line length. Where does the poem speed up, slow down, or break its own pattern? These moments are rich for analysis.',
    good: "The shortened final stanza of 'Exposure' -- just two lines instead of the usual five -- mirrors the soldiers' diminished lives. The structure itself enacts the poem's message: war reduces everything.",
    weak: 'The last stanza is shorter than the others.',
  },
]

/* ------------------------------------------------------------------ */
/*  PEEL structure guide                                               */
/* ------------------------------------------------------------------ */

const PEEL_STEPS = [
  {
    letter: 'P',
    label: 'Point',
    description:
      'Make a clear analytical point that directly answers the question. This should be an argument, not a description.',
    example: "Shelley presents power as inherently transient and self-defeating in 'Ozymandias'.",
    tip: 'Your point should be debatable -- an interpretation, not a fact.',
  },
  {
    letter: 'E',
    label: 'Evidence',
    description:
      'Embed a short, relevant quotation from the poem that supports your point. Integrate it grammatically into your sentence.',
    example:
      "This is conveyed through the 'shattered visage' that 'lies' half-buried in the desert, surrounded by 'nothing beside remains'.",
    tip: 'Short quotes (2-5 words) are easier to embed and analyse than long block quotes.',
  },
  {
    letter: 'E',
    label: 'Explain',
    description:
      'Analyse HOW the language/technique creates meaning. Name the technique, explain its effect, and link back to your point.',
    example:
      "The past participle 'shattered' emphasises the violence of the statue's destruction, implying that power does not simply fade but is actively broken.",
    tip: "This is where the marks are. Go deeper than 'this shows...' -- explain WHY the poet chose this specific word/technique.",
  },
  {
    letter: 'L',
    label: 'Link',
    description:
      "Link your analysis to the wider themes, the poet's intentions, context, or the question. This elevates your answer from analysis to argument.",
    example:
      "Shelley, writing during the Romantic period's critique of tyranny, uses Ozymandias as a warning: no matter how absolute power seems, time will reduce it to ruins.",
    tip: 'Context should illuminate meaning, not replace analysis.',
  },
]

/* ------------------------------------------------------------------ */
/*  Expandable section component                                       */
/* ------------------------------------------------------------------ */

function ExpandableSection({
  title,
  badge,
  children,
  defaultOpen = false,
}: {
  title: string
  badge?: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-base font-bold text-foreground">{title}</h3>
          {badge && (
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 py-5">{children}</div>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Search icon                                                        */
/* ------------------------------------------------------------------ */

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5 text-muted-foreground"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PoetryTechniquesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  /* ── Filtering logic ───────────────────────────────────── */

  const query = searchQuery.toLowerCase().trim()

  const filteredForms = useMemo(() => {
    return FORMS.filter((f) => {
      if (activeCategory !== 'All' && activeCategory !== 'Form Types') return false
      if (!query) return true
      return (
        f.name.toLowerCase().includes(query) ||
        f.description.toLowerCase().includes(query) ||
        f.features.some((feat) => feat.toLowerCase().includes(query)) ||
        f.poem.toLowerCase().includes(query)
      )
    })
  }, [query, activeCategory])

  const filteredTechniques = useMemo(() => {
    return TECHNIQUES.filter((t) => {
      if (activeCategory !== 'All' && t.category !== activeCategory) return false
      if (!query) return true
      return (
        t.name.toLowerCase().includes(query) ||
        t.definition.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query) ||
        t.poem.toLowerCase().includes(query) ||
        t.example.toLowerCase().includes(query)
      )
    })
  }, [query, activeCategory])

  const filteredToneVocab = useMemo(() => {
    if (activeCategory !== 'All' && activeCategory !== 'Tone & Mood') return []
    if (!query) return TONE_VOCABULARY
    return TONE_VOCABULARY.filter(
      (t) => t.word.toLowerCase().includes(query) || t.meaning.toLowerCase().includes(query),
    )
  }, [query, activeCategory])

  const showForms = filteredForms.length > 0
  const showTechniques = filteredTechniques.length > 0
  const showToneVocab =
    filteredToneVocab.length > 0 && (activeCategory === 'All' || activeCategory === 'Tone & Mood')

  const totalResults =
    filteredForms.length +
    filteredTechniques.length +
    (showToneVocab ? filteredToneVocab.length : 0)

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Poetry Skills
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Poetry Analysis Techniques
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete guide to every poetic form, structural device, sound technique, and
            figurative language method you need for GCSE English Literature. Each technique includes
            a definition, a real example from a GCSE poem, its effect, and a sentence starter for
            your exam.
          </p>
        </div>
      </section>

      {/* Search + Filter Bar */}
      <section className="border-b border-border bg-card sticky top-0 z-20 shadow-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          {/* Search input */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search techniques, poems, or definitions..."
              className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-muted-foreground"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="mt-3 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          {query && (
            <p className="mt-2 text-xs text-muted-foreground">
              {totalResults} result{totalResults !== 1 ? 's' : ''} found
              {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
            </p>
          )}
        </div>

        {/* Section navigation */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto pb-3 text-sm font-medium">
            <a
              href="#form-types"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              Form Types
            </a>
            <a
              href="#structural-devices"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              Structural Devices
            </a>
            <a
              href="#sound-devices"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              Sound Devices
            </a>
            <a
              href="#figurative-language"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              Figurative Language
            </a>
            <a
              href="#tone-mood"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              Tone &amp; Mood
            </a>
            <a
              href="#form-structure-guide"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              Writing About Form
            </a>
            <a
              href="#comparing-poems"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              Comparing Poems
            </a>
            <a
              href="#peel-paragraphs"
              className="whitespace-nowrap text-primary hover:text-accent transition-colors"
            >
              PEEL Paragraphs
            </a>
          </div>
        </div>
      </section>

      {/* ── Form Types ─────────────────────────────────────────── */}
      {showForms && (
        <section id="form-types" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Form Types</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Form is the type of poem. Identifying the form is essential for AO2 -- but you must
            explain <em>why</em> the poet chose this form and how it contributes to meaning.
          </p>

          <div className="mt-8 space-y-4">
            {filteredForms.map((form) => (
              <ExpandableSection key={form.name} title={form.name} badge="Form">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{form.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                    <ul className="space-y-1.5">
                      {form.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h4 className="text-sm font-semibold text-primary mb-1">GCSE Example</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{form.example}</p>
                    <p className="mt-1 text-xs text-muted-foreground">From: {form.poem}</p>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-4">
                    <h4 className="text-sm font-semibold text-primary mb-1">Exam Tip</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{form.examTip}</p>
                  </div>
                </div>
              </ExpandableSection>
            ))}
          </div>
        </section>
      )}

      {/* ── Technique Sections ─────────────────────────────────── */}
      {(['Structural Devices', 'Sound Devices', 'Figurative Language', 'Tone & Mood'] as const).map(
        (sectionCategory) => {
          const sectionTechniques = filteredTechniques.filter((t) => t.category === sectionCategory)
          if (sectionTechniques.length === 0) return null

          const sectionId = sectionCategory.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')

          const bgClass =
            sectionCategory === 'Sound Devices' || sectionCategory === 'Tone & Mood'
              ? 'bg-muted'
              : ''

          return (
            <section
              key={sectionCategory}
              id={sectionId}
              className={`${bgClass} px-4 py-12 sm:px-6 lg:px-8`}
            >
              <div className="mx-auto max-w-6xl">
                <h2 className="text-2xl font-bold text-foreground">{sectionCategory}</h2>
                <p className="mt-2 max-w-3xl text-muted-foreground">
                  {sectionCategory === 'Structural Devices' &&
                    'How the poem is organised: line breaks, stanza shapes, and the architecture that gives the poem its form.'}
                  {sectionCategory === 'Sound Devices' &&
                    "The sounds a poem makes when read aloud. Sound devices are often overlooked but can be the key to unlocking a poem's meaning."}
                  {sectionCategory === 'Figurative Language' &&
                    "The poet's use of comparison, symbolism, and indirect meaning to create layers of interpretation."}
                  {sectionCategory === 'Tone & Mood' &&
                    'The attitude of the speaker (tone) and the atmosphere created for the reader (mood). Precise vocabulary is essential.'}
                </p>

                <div className="mt-8 space-y-4">
                  {sectionTechniques.map((tech) => (
                    <ExpandableSection key={tech.name} title={tech.name} badge={tech.category}>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">Definition</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tech.definition}
                          </p>
                        </div>

                        <div className="rounded-lg bg-muted p-4">
                          <h4 className="text-sm font-semibold text-foreground mb-1">Example</h4>
                          <p className="text-sm text-muted-foreground italic">{tech.example}</p>
                          <p className="mt-1 text-xs text-muted-foreground">From: {tech.poem}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">Effect</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {tech.effect}
                          </p>
                        </div>

                        <div className="rounded-lg bg-primary/10 border border-primary/20 p-4">
                          <h4 className="text-sm font-semibold text-primary mb-1">
                            Sentence Starter for Exams
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed italic">
                            {tech.sentenceStarter}
                          </p>
                        </div>
                      </div>
                    </ExpandableSection>
                  ))}
                </div>
              </div>
            </section>
          )
        },
      )}

      {/* ── Tone & Mood Vocabulary ─────────────────────────────── */}
      {showToneVocab && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-foreground">Tone and Mood Vocabulary</h3>
          <p className="mt-2 max-w-3xl text-muted-foreground text-sm">
            Use these precise adjectives in your exam instead of vague words like &quot;sad&quot;,
            &quot;happy&quot;, or &quot;angry&quot;. Examiners reward specificity.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredToneVocab.map((item) => (
              <div
                key={item.word}
                className="rounded-lg border border-border bg-card p-4 shadow-md"
              >
                <h4 className="font-bold text-primary">{item.word}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── How to Write About Form and Structure ──────────────── */}
      {(activeCategory === 'All' ||
        activeCategory === 'Form Types' ||
        activeCategory === 'Structural Devices') &&
        !query && (
          <section
            id="form-structure-guide"
            className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-foreground">
                How to Write About Form and Structure
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                Many students struggle to write about form and structure because they stop at
                identification. These four principles will help you turn observation into analysis.
              </p>

              <div className="mt-8 space-y-6">
                {FORM_STRUCTURE_GUIDE.map((item, i) => (
                  <div
                    key={item.heading}
                    className="rounded-xl border border-border bg-card p-6 shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-foreground">{item.heading}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-3">
                            <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
                              Strong example
                            </p>
                            <p className="text-sm text-muted-foreground italic leading-relaxed">
                              {item.good}
                            </p>
                          </div>
                          <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3">
                            <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">
                              Weak example
                            </p>
                            <p className="text-sm text-muted-foreground italic leading-relaxed">
                              {item.weak}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* ── How to Compare Poems ───────────────────────────────── */}
      {activeCategory === 'All' && !query && (
        <section id="comparing-poems" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">How to Compare Poems</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Comparison is a high-value skill tested in every GCSE Literature exam. The key is to
            integrate your comparison rather than writing about two poems separately.
          </p>

          {/* Structural Approaches */}
          <h3 className="mt-10 text-xl font-bold text-foreground">Structural Approaches</h3>
          <div className="mt-4 space-y-4">
            {COMPARISON_APPROACHES.map((approach) => (
              <ExpandableSection
                key={approach.name}
                title={approach.name}
                defaultOpen={approach.name.includes('Alternating')}
              >
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Structure</h4>
                    <ul className="space-y-1.5">
                      {approach.structure.map((s, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-primary/10 p-3">
                    <p className="text-xs font-semibold text-primary">Tip: {approach.tip}</p>
                  </div>
                </div>
              </ExpandableSection>
            ))}
          </div>

          {/* Connective Phrases */}
          <h3 className="mt-10 text-xl font-bold text-foreground">
            Connective Phrases for Comparison
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Use these phrases to create smooth, integrated comparisons. Vary your connectives to
            avoid repetition.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Similarity */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">
                Showing Similarity
              </h4>
              <ul className="space-y-2">
                {COMPARISON_CONNECTIVES.similarity.map((phrase, i) => (
                  <li key={i} className="text-sm text-muted-foreground italic leading-relaxed">
                    {phrase}
                  </li>
                ))}
              </ul>
            </div>

            {/* Difference */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">Showing Difference</h4>
              <ul className="space-y-2">
                {COMPARISON_CONNECTIVES.difference.map((phrase, i) => (
                  <li key={i} className="text-sm text-muted-foreground italic leading-relaxed">
                    {phrase}
                  </li>
                ))}
              </ul>
            </div>

            {/* Development */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h4 className="font-bold text-primary mb-3">Developing Ideas</h4>
              <ul className="space-y-2">
                {COMPARISON_CONNECTIVES.development.map((phrase, i) => (
                  <li key={i} className="text-sm text-muted-foreground italic leading-relaxed">
                    {phrase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── PEEL Paragraph Structure ───────────────────────────── */}
      {activeCategory === 'All' && !query && (
        <section id="peel-paragraphs" className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground">
              PEEL Paragraph Structure for Poetry
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">
              The PEEL structure gives your poetry analysis clarity and depth. Every analytical
              paragraph should follow this pattern to hit all the assessment objectives.
            </p>

            <div className="mt-8 space-y-6">
              {PEEL_STEPS.map((step) => (
                <div
                  key={step.letter + step.label}
                  className="rounded-xl border border-border bg-card p-6 shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                      {step.letter}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">{step.label}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mt-3 rounded-lg bg-primary/10 p-4">
                        <p className="text-sm font-semibold text-primary mb-1">Example</p>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                          {step.example}
                        </p>
                      </div>

                      <div className="mt-3 rounded-lg bg-primary/10 p-3">
                        <p className="text-xs font-semibold text-primary">Tip: {step.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Full model paragraph */}
            <div className="mt-10 rounded-xl border-2 border-accent bg-card p-6 shadow-md">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Complete Model PEEL Paragraph
              </h3>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">[Point]</strong> Shelley presents power as
                  inherently transient and self-defeating in &lsquo;Ozymandias&rsquo;.{' '}
                  <strong className="text-primary">[Evidence]</strong> This is conveyed through the
                  &lsquo;shattered visage&rsquo; that &lsquo;lies&rsquo; half-buried in the desert,
                  surrounded by a landscape where &lsquo;nothing beside remains&rsquo;.{' '}
                  <strong className="text-primary">[Explain]</strong> The past participle
                  &lsquo;shattered&rsquo; emphasises the violence of the statue&rsquo;s destruction,
                  implying that power does not simply fade but is actively broken. The verb
                  &lsquo;lies&rsquo; personifies the ruined face, suggesting that the king&rsquo;s
                  arrogant expression has been reduced to something prostrate and defeated. The
                  declarative &lsquo;nothing beside remains&rsquo; is devastating in its simplicity,
                  using the finality of the monosyllabic words to mirror the totality of
                  Ozymandias&rsquo;s erasure. <strong className="text-primary">[Link]</strong>{' '}
                  Shelley, writing during the Romantic period&rsquo;s critique of tyranny, uses
                  Ozymandias as a warning to contemporary rulers: no matter how absolute their power
                  seems, time will reduce it to ruins.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Exam Tips ──────────────────────────────────────────── */}
      {activeCategory === 'All' && !query && (
        <section
          id="exam-tips"
          className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground">Exam Tips for Poetry Analysis</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Do not feature-spot',
                  text: "Listing techniques without analysis ('there is alliteration in line 3') scores poorly. Always explain the EFFECT of the technique and link it to meaning.",
                },
                {
                  title: 'Analyse individual words',
                  text: 'The best answers zoom in on specific word choices. Ask: why did the poet choose THIS word? What are its connotations? What alternatives could they have used?',
                },
                {
                  title: 'Comment on what is absent',
                  text: 'Sometimes what a poet leaves OUT is as important as what they include. No rhyme scheme? No regular metre? No resolution? These are deliberate choices worth analysing.',
                },
                {
                  title: 'Use tentative language',
                  text: "Phrases like 'perhaps suggests', 'could imply', 'might reflect' show the examiner you understand that poems have multiple interpretations.",
                },
                {
                  title: 'Structure your comparison',
                  text: 'For comparison questions, use an alternating structure (poem A point 1, poem B point 1, poem A point 2, poem B point 2) rather than writing about one poem then the other.',
                },
                {
                  title: 'Read the poem aloud (in your head)',
                  text: "Many effects -- rhythm, assonance, sibilance, onomatopoeia -- only become apparent when you hear the poem. Silently 'hear' the sounds as you read.",
                },
              ].map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl bg-card border border-border p-5 shadow-md"
                >
                  <h3 className="font-semibold text-primary">{tip.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── No results ─────────────────────────────────────────── */}
      {query && totalResults === 0 && (
        <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground text-lg">
            No techniques found for &quot;{searchQuery}&quot;
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setActiveCategory('All')
            }}
            className="mt-4 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            Clear search and filters
          </button>
        </section>
      )}

      {/* Back link */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/resources/poetry"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Back to Poetry Hub
        </Link>
      </section>
    </>
  )
}
