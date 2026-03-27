"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Quote {
  text: string;
  technique: string;
  analysis: string;
}

interface Poem {
  id: string;
  title: string;
  poet: string;
  date: string;
  context: string;
  summary: string;
  formAndStructure: string;
  quotes: Quote[];
  themes: string[];
  comparisons: string[];
}

/* ------------------------------------------------------------------ */
/*  Data: Edexcel Relationships cluster                                */
/* ------------------------------------------------------------------ */

const POEMS: Poem[] = [
  {
    id: "sonnet-43",
    title: "Sonnet 43",
    poet: "Elizabeth Barrett Browning",
    date: "1850",
    context:
      "Written during Barrett Browning's secret courtship with Robert Browning. She was a semi-invalid controlled by her domineering father, making her declaration of love both radical and deeply personal. Part of the Sonnets from the Portuguese sequence.",
    summary:
      "The speaker attempts to quantify and catalogue the ways she loves her partner. She moves from abstract, spiritual love to the everyday and physical, before concluding that her love will only grow stronger after death. The poem is an unrestrained, sincere celebration of romantic devotion.",
    formAndStructure:
      "Petrarchan sonnet with 14 lines of iambic pentameter. The ABBA ABBA rhyme scheme in the octave creates a sense of completeness and certainty. The anaphoric repetition of 'I love thee' structures each new dimension of love. The sestet shifts to encompass past griefs and childhood faith, suggesting love redeems suffering. No volta disrupts the argument, reflecting unwavering devotion.",
    quotes: [
      {
        text: "How do I love thee? Let me count the ways",
        technique: "Rhetorical question / anaphora",
        analysis:
          "The opening rhetorical question suggests love is so vast it must be systematically catalogued. The verb 'count' implies an attempt to rationalise an irrational emotion, establishing the poem's central tension between measurement and boundlessness.",
      },
      {
        text: "I love thee to the depth and breadth and height / My soul can reach",
        technique: "Spatial metaphor / tricolon",
        analysis:
          "The tricolon of abstract dimensions creates a three-dimensional space for love, suggesting it fills every possible direction. The enjambment into 'My soul can reach' elevates the love from physical to spiritual, implying it extends beyond the material world.",
      },
      {
        text: "I love thee freely, as men strive for Right",
        technique: "Simile / abstract noun",
        analysis:
          "Comparing love to the pursuit of moral justice ('Right') elevates it from personal emotion to a universal, noble cause. The capitalised 'Right' suggests a quasi-religious devotion, free from obligation or coercion.",
      },
      {
        text: "I shall but love thee better after death",
        technique: "Declarative / hyperbole",
        analysis:
          "The final line transcends mortality, asserting that love will intensify beyond the grave. This echoes the Victorian Christian belief in the afterlife while also functioning as a bold, almost defiant, closing statement of eternal commitment.",
      },
    ],
    themes: ["Romantic love", "Devotion", "Spirituality", "Intensity of emotion"],
    comparisons: [
      "La Belle Dame Sans Merci (contrasts: destructive vs. life-affirming love)",
      "Neutral Tones (contrasts: love's death vs. love's transcendence)",
      "One Flesh (contrasts: passionate declaration vs. love fading with time)",
    ],
  },
  {
    id: "la-belle-dame",
    title: "La Belle Dame Sans Merci",
    poet: "John Keats",
    date: "1819",
    context:
      "Written during the Romantic period, when poets valued emotion, nature, and the supernatural. Keats was influenced by medieval ballads and chivalric romance. The title is borrowed from a 15th-century French poem meaning 'The Beautiful Lady Without Mercy'. Keats was also grappling with his own mortality due to tuberculosis.",
    summary:
      "A knight is found alone on a cold hillside, pale and haggard. He recounts meeting a beautiful, supernatural woman who enchanted him with food, song, and declarations of love. She lulled him to sleep, and he dreamed of previous victims warning him of enthrallment. He woke alone on the cold hill, trapped in a cycle of longing.",
    formAndStructure:
      "Literary ballad with twelve quatrains in ABCB rhyme scheme. The shortened fourth line in each stanza creates a halting, unresolved rhythm that mirrors the knight's entrapment. The circular structure (ending where it began on the cold hillside) reinforces the sense of inescapable suffering. The frame narrative (questioner and knight) creates dramatic distance.",
    quotes: [
      {
        text: "O what can ail thee, knight-at-arms, / Alone and palely loitering?",
        technique: "Archaic diction / pathetic fallacy",
        analysis:
          "The medieval register ('thee', 'knight-at-arms') establishes the ballad form and distances the poem from reality. 'Palely loitering' combines physical weakness with aimlessness, suggesting the knight is drained of vitality and purpose by his encounter.",
      },
      {
        text: "I met a lady in the meads, / Full beautiful -- a faery's child",
        technique: "Supernatural imagery / caesura",
        analysis:
          "The dash creates a pause that emphasises the revelation of her otherworldly nature. 'Faery's child' marks her as dangerously beyond the human realm, foreshadowing that the relationship is doomed because it crosses the boundary between mortal and immortal.",
      },
      {
        text: "She looked at me as she did love, / And made sweet moan",
        technique: "Ambiguity / sensory language",
        analysis:
          "The crucial word 'as' introduces ambiguity: does she love him, or merely appear to? This uncertainty is central to the poem's meaning. The 'sweet moan' blends pleasure with pain, hinting at the suffering her seduction will ultimately cause.",
      },
      {
        text: "I saw pale kings and princes too, / Pale warriors, death-pale were they all",
        technique: "Repetition / listing",
        analysis:
          "The triple repetition of 'pale' intensifies the horror of the dream vision. The list of powerful figures (kings, princes, warriors) reduced to ghostly shells shows that no status can protect against destructive love. Their warning is futile, as the knight has already been ensnared.",
      },
    ],
    themes: ["Destructive love", "Power and enthrallment", "Mortality", "The supernatural", "Loss"],
    comparisons: [
      "Sonnet 43 (contrasts: destructive vs. life-giving love)",
      "My Last Duchess (links: male powerlessness vs. male control in love)",
      "The Farmer's Bride (links: desire and possession, unequal relationships)",
    ],
  },
  {
    id: "neutral-tones",
    title: "Neutral Tones",
    poet: "Thomas Hardy",
    date: "1867",
    context:
      "Written early in Hardy's career, reflecting his pessimistic worldview. Hardy lost his Christian faith and was influenced by Darwin's theory of evolution, leading to a bleak vision of human relationships as governed by indifferent natural forces. The poem may draw on his troubled first marriage to Emma Gifford.",
    summary:
      "The speaker recalls a winter scene by a pond where a relationship reached its emotional end. The bleached, colourless landscape mirrors the death of feeling between the lovers. A bitter final stanza returns to the present, showing the memory still haunts the speaker as a lesson about love's deceptions.",
    formAndStructure:
      "Four quatrains with an ABBA rhyme scheme creating a closed, circular feel that mirrors entrapment in the memory. The poem begins and ends at the pond, forming a structural loop. The regular form contrasts with the emotional desolation it describes, as though the speaker is trying to impose order on painful experience. Past tense throughout suggests reflection rather than raw emotion.",
    quotes: [
      {
        text: "We stood by a pond that winter day, / And the sun was white, as though chidden of God",
        technique: "Pathetic fallacy / simile",
        analysis:
          "The drained, 'white' sun strips warmth and colour from the scene, mirroring emotional emptiness. 'Chidden of God' personifies the sun as punished or rebuked, suggesting a universe where even divine forces have withdrawn their blessing from love.",
      },
      {
        text: "Your eyes on me were as eyes that rove / Over tedious riddles of years ago",
        technique: "Simile / enjambment",
        analysis:
          "The lover's wandering gaze reduces the speaker to a 'tedious riddle' -- something once engaging but now merely tiresome. The enjambment across the lines mirrors the restless, unfocused quality of the look, reinforcing emotional disconnection.",
      },
      {
        text: "The smile on your mouth was the deadest thing / Alive enough to have strength to die",
        technique: "Oxymoron / paradox",
        analysis:
          "The paradox of something simultaneously 'deadest' and 'alive' captures the agonising in-between state of a dying relationship. The smile is a hollow performance, alive only in its capacity to wound.",
      },
      {
        text: "And a pond edged with grayish leaves",
        technique: "Pathetic fallacy / colour imagery",
        analysis:
          "The 'grayish' leaves lack even the commitment to be fully grey, embodying the 'neutral tones' of the title. This half-colour reflects the liminal state between love and indifference, where emotion has drained away but memory persists.",
      },
    ],
    themes: ["Loss of love", "Memory and pain", "Nature's indifference", "Deception", "Pessimism"],
    comparisons: [
      "Sonnet 43 (contrasts: love's death vs. eternal devotion)",
      "Winter Swans (contrasts: nature reflecting breakdown vs. reconciliation)",
      "One Flesh (links: love that has lost its vitality)",
    ],
  },
  {
    id: "letters-from-yorkshire",
    title: "Letters from Yorkshire",
    poet: "Maura Doshi",
    date: "2002",
    context:
      "A contemporary poem exploring the relationship between two people living different lives -- one in rural Yorkshire, one in an urban environment. Doshi examines how meaningful connection can be maintained across distance through letters and shared understanding. The poem resists categorisation as purely romantic; the relationship could be familial or platonic.",
    summary:
      "The speaker receives letters from someone in Yorkshire who writes about seasonal changes, nature, and rural life -- planting potatoes, seeing the first lapwings. The speaker contrasts their own screen-based work with the correspondent's physical, outdoor existence. Despite the distance and different lifestyles, the letters create a powerful emotional connection that transcends geography.",
    formAndStructure:
      "Five three-line stanzas in free verse with no rhyme scheme, reflecting the informal, conversational tone of correspondence. The tercets create a neat, letter-like compactness. The present tense gives immediacy, as though the speaker is reading the letter in real time. The lack of quotation marks blurs the boundary between the correspondent's words and the speaker's thoughts, suggesting deep empathy.",
    quotes: [
      {
        text: "he saw the first lapwings, then he/ changed\n his mind about the weather",
        technique: "Enjambment / line break",
        analysis:
          "The line break after 'he' creates a momentary ambiguity, as though something more significant changed. This mirrors how small, everyday observations in the letters carry emotional weight beyond their surface meaning.",
      },
      {
        text: "Is it enough to carry a heart across the weather",
        technique: "Metaphor / rhetorical question",
        analysis:
          "The heart as something physically 'carried' makes emotion tangible and effortful. The rhetorical question reveals the speaker's vulnerability and uncertainty about whether written words can sustain connection across distance.",
      },
      {
        text: "the one who digs and sows and grows",
        technique: "Tricolon / monosyllabic verbs",
        analysis:
          "The three blunt, Anglo-Saxon verbs create a rhythm that mimics physical labour and rootedness in the land. Their simplicity contrasts with the speaker's cerebral, screen-based existence, highlighting the divide between their lifestyles.",
      },
      {
        text: "Still, he sends me word",
        technique: "Adverb / declarative",
        analysis:
          "'Still' carries a double meaning: despite everything (adversative) and continuing without interruption (temporal). The phrase affirms that the connection endures. 'Word' is singular, suggesting each communication is precious and sufficient.",
      },
    ],
    themes: ["Connection across distance", "Nature and rural life", "Communication", "Different ways of living", "Enduring bonds"],
    comparisons: [
      "Walking Away (links: love expressed through separation and distance)",
      "Follower (links: admiration for someone with a different, more physical life)",
      "Eden Rock (links: connection across a divide)",
    ],
  },
  {
    id: "the-farmers-bride",
    title: "The Farmer's Bride",
    poet: "Charlotte Mew",
    date: "1912",
    context:
      "Written in the early 20th century when women had few legal rights in marriage. Mew explores the power imbalance in a rural marriage through the farmer's dramatic monologue. Mew herself lived as a closeted lesbian in repressive Victorian/Edwardian society, which may inform the poem's exploration of desire, isolation, and miscommunication between genders.",
    summary:
      "A farmer narrates the story of his young bride who, after their marriage, became terrified of him and ran away. The village men caught her 'like a hare' and brought her back. She now lives in the house but avoids all contact with him, sleeping alone. The farmer's monologue reveals his growing frustration and desire, culminating in a disturbing final stanza.",
    formAndStructure:
      "Dramatic monologue in irregular stanzas with varying line lengths, reflecting the farmer's agitated, unstable emotional state. The rhyme scheme is loose and shifts, mirroring his loss of control. The poem moves chronologically from marriage to the present, with the stanzas growing shorter and more urgent towards the end, building tension. The dialect voice ('maid', 'We caught her') grounds the poem in rural realism.",
    quotes: [
      {
        text: "We caught her, fetched her home at last / And turned the key upon her, fast",
        technique: "Possessive language / plosive sounds",
        analysis:
          "The collective 'We' implicates the entire community in her captivity. 'Caught' and 'fetched' are verbs used for animals, dehumanising her. The plosive 't' sounds in 'caught', 'fetched', 'turned', 'fast' create a harsh, violent rhythm that mirrors the physical force used against her.",
      },
      {
        text: "Like the shut of a winter's day",
        technique: "Simile / seasonal imagery",
        analysis:
          "Her withdrawal is compared to the abrupt darkness of a winter afternoon -- sudden, cold, and final. The simile conveys the farmer's incomprehension; her retreat is as natural and inevitable as a season changing, yet he cannot understand it.",
      },
      {
        text: "Her eyes, her hair, her hair!",
        technique: "Repetition / exclamatory",
        analysis:
          "The obsessive repetition and exclamation mark reveal the farmer's desire spiralling out of control. He fragments her into body parts, objectifying her. The repetition of 'her hair' suggests fixation that borders on the predatory, making the ending deeply unsettling.",
      },
      {
        text: "Not near, not near!",
        technique: "Repetition / negative construction",
        analysis:
          "This could be read as the bride's plea to keep distance, or the farmer restraining himself. The ambiguity heightens tension. The short, emphatic phrasing contrasts with the longer descriptive lines, marking a moment of crisis.",
      },
    ],
    themes: ["Power and control", "Gender and marriage", "Desire and obsession", "Isolation", "Fear"],
    comparisons: [
      "My Last Duchess (links: male control and possession of women)",
      "La Belle Dame Sans Merci (contrasts: who holds power in the relationship)",
      "Singh Song! (contrasts: joyful mutual love vs. one-sided desire)",
    ],
  },
  {
    id: "walking-away",
    title: "Walking Away",
    poet: "Cecil Day Lewis",
    date: "1962",
    context:
      "Written by Day Lewis about watching his son Sean walk away on his first day at school. The poem was composed years after the event, reflecting on how the memory has stayed with the father. Day Lewis was the Poet Laureate; Sean Day Lewis later became a writer. The poem explores the universal parental experience of letting go.",
    summary:
      "The speaker recalls watching his young son walk away to play a football match at school, almost two decades earlier. The child's uncertain, stumbling steps fill the father with anxiety and grief. The poem moves from this specific memory to a broader meditation on how love requires the painful act of letting someone become independent.",
    formAndStructure:
      "Four five-line stanzas with an ABACA rhyme scheme. The regular structure reflects the father's attempt to contain and understand his emotion through careful retrospection. The poem moves from specific memory (stanza 1) through natural imagery (stanzas 2-3) to philosophical conclusion (stanza 4). Iambic pentameter gives a measured, reflective pace appropriate for looking back over eighteen years.",
    quotes: [
      {
        text: "like a satellite / Wrenched from its orbit, go drifting away",
        technique: "Simile / enjambment",
        analysis:
          "The satellite simile presents the child as leaving the gravitational pull of the parent. 'Wrenched' implies violent, painful separation, while 'drifting' suggests the child's vulnerability once detached. The enjambment across lines mirrors the slow, inevitable process of moving apart.",
      },
      {
        text: "a half-fledged thing set free / Into a wilderness of air",
        technique: "Metaphor / natural imagery",
        analysis:
          "The fledgling metaphor acknowledges the child is not yet fully ready ('half-fledged') but must still be released. 'Wilderness' transforms the familiar school grounds into something vast and threatening from the parent's perspective, revealing the father's protective anxiety.",
      },
      {
        text: "How selfhood begins with a walking away -- / And love is proved in the letting go",
        technique: "Epigram / paradox",
        analysis:
          "The final couplet crystallises the poem's meaning: identity requires separation, and true love is demonstrated not by holding on but by releasing. The paradox challenges possessive love, redefining it as an act of generosity and sacrifice.",
      },
      {
        text: "I can see / You walking away from me towards the school",
        technique: "Present tense / direct address",
        analysis:
          "The shift to present tense ('I can see') makes the eighteen-year-old memory feel immediate and vivid, showing how the moment has imprinted itself permanently on the father. Direct address ('You') creates intimacy, as though speaking to his now-adult son.",
      },
    ],
    themes: ["Parental love", "Letting go", "Memory", "Growing up", "Identity and independence"],
    comparisons: [
      "Follower (links: parent-child relationship, roles reversing over time)",
      "Eden Rock (links: separation between parent and child)",
      "Mother Any Distance (links: letting go and independence)",
    ],
  },
  {
    id: "eden-rock",
    title: "Eden Rock",
    poet: "Charles Causley",
    date: "1988",
    context:
      "Causley wrote this poem late in life, after both his parents had died. The poem imagines a reunion with them in an idealised landscape. Causley never married and remained deeply attached to his mother. 'Eden Rock' is a real place in Cornwall, but the name also evokes the Garden of Eden, suggesting paradise and a pre-lapsarian innocence.",
    summary:
      "The speaker envisions his dead parents at Eden Rock, presented in vivid, specific domestic detail -- his mother's hair, the thermos, the tablecloth. They are young, as the speaker remembers them from childhood. They beckon him to cross a stream to join them, and the poem ends with the ambiguous line 'I had not thought it would be like this', suggesting the crossing represents death.",
    formAndStructure:
      "Four stanzas of varying length in free verse, though with a conversational, unhurried rhythm. The precise domestic details create a realist surface that gradually reveals itself as visionary or supernatural. The present tense makes the vision feel immediate and real. The final single-line stanza stands alone, creating a pause that mirrors the threshold moment of crossing.",
    quotes: [
      {
        text: "Her hair, the colour of wheat, takes on the light",
        technique: "Natural imagery / sensory detail",
        analysis:
          "The specificity of 'the colour of wheat' anchors the mother in the speaker's memory with photographic clarity. 'Takes on the light' gives her an almost luminous, angelic quality, subtly hinting that this is a vision of the afterlife rather than a real memory.",
      },
      {
        text: "The sky whitens as if lit by three suns",
        technique: "Simile / intensifying imagery",
        analysis:
          "The triple suns create an otherworldly, supernatural light that moves the poem from realism into vision. The whitening sky could represent the approach of death or spiritual transcendence, transforming the ordinary picnic scene into something sacred.",
      },
      {
        text: "My father, twenty-five, in the same suit",
        technique: "Precise detail / age specification",
        analysis:
          "Specifying the father's age as twenty-five emphasises that the speaker remembers (or imagines) his parents as younger than himself, reversing the natural order. The 'same suit' grounds the vision in authenticity, as though memory has preserved every detail.",
      },
      {
        text: "I had not thought that it would be like this",
        technique: "Understatement / ambiguity",
        analysis:
          "The understated final line carries enormous weight. 'This' is deliberately vague -- death, reunion, peace? The calm acceptance ('I had not thought') contrasts with the enormity of what 'crossing' implies, suggesting death is not frightening but gently surprising.",
      },
    ],
    themes: ["Memory and loss", "Death and afterlife", "Parental love", "Nostalgia", "Crossing thresholds"],
    comparisons: [
      "Walking Away (links: parent-child bond, separation)",
      "Follower (links: memory of a parent, changing perspective with age)",
      "Before You Were Mine (links: imagining a parent in the past)",
    ],
  },
  {
    id: "follower",
    title: "Follower",
    poet: "Seamus Heaney",
    date: "1966",
    context:
      "Heaney grew up on a farm in rural Northern Ireland. His father, Patrick Heaney, was a cattle dealer and farmer. This poem is from Heaney's first collection, Death of a Naturalist, which frequently explores his rural childhood and his complex relationship with his father's world of physical labour, which Heaney left behind to become a poet.",
    summary:
      "The speaker recalls following his father as he ploughed the fields, admiring his skill and physical mastery. The child stumbled in his father's wake, wanting to be like him but always falling behind. The final stanza reverses the relationship: now the aged father follows the adult son, stumbling and dependent. The poem captures the bittersweet reversal of parent-child roles.",
    formAndStructure:
      "Six quatrains with an ABAB half-rhyme scheme. The regular, four-line stanzas mirror the neat furrows of the ploughed field. The poem is tightly controlled, reflecting the father's precision at work. The final stanza's tonal shift disrupts the admiring tone, creating a sense of guilt and unease. Monosyllabic, Anglo-Saxon diction dominates, grounding the poem in the physicality of farm life.",
    quotes: [
      {
        text: "His shoulders globed like a full sail strung",
        technique: "Simile / visual imagery",
        analysis:
          "The father's body is compared to a ship's sail, suggesting power, control, and forward motion. 'Globed' is an unusual, precise verb that conveys the rounded, muscular bulk of a working man. The nautical imagery elevates manual labour to something heroic and skilful.",
      },
      {
        text: "An expert. He would set the wing / And fit the bright steel-pointed sock",
        technique: "Enjambment / technical lexis",
        analysis:
          "The single-word sentence 'An expert' is emphatic and definitive. The technical ploughing vocabulary ('wing', 'sock', 'headrig') demonstrates the father's specialist knowledge and the son's admiration for it. The enjambment across stanzas mirrors the continuous forward motion of ploughing.",
      },
      {
        text: "I stumbled in his hobnailed wake",
        technique: "Metaphor / tactile imagery",
        analysis:
          "'Hobnailed wake' blends the boot's physicality with a nautical metaphor (a ship's wake), continuing the sailing imagery. 'Stumbled' captures the child's clumsiness and the gap between aspiration and ability. The father's path is literally imprinted in the earth.",
      },
      {
        text: "But today / It is my father who keeps stumbling / Behind me, and will not go away",
        technique: "Role reversal / present tense shift",
        analysis:
          "The shift to present tense ('today') is sudden and jarring. The father now 'stumbles' -- the same verb used for the child earlier -- completing the reversal. 'Will not go away' is ambiguous: affectionate exasperation, guilt at finding a dependent parent burdensome, or the persistence of memory.",
      },
    ],
    themes: ["Admiration and hero-worship", "Parent-child relationships", "Role reversal", "Rural life and labour", "Guilt and responsibility"],
    comparisons: [
      "Walking Away (links: parent watching child, but reversed perspective)",
      "Climbing My Grandfather (links: physical admiration of a male relative)",
      "Mother Any Distance (links: child separating from a parent)",
    ],
  },
  {
    id: "mother-any-distance",
    title: "Mother, any distance",
    poet: "Simon Armitage",
    date: "1993",
    context:
      "From Armitage's collection Book of Matches, where each poem fits on a single match-length. Armitage is a Yorkshire poet known for conversational, accessible verse. The poem captures the specific moment of a young adult measuring rooms in a new house with his mother's help, using this domestic activity as a metaphor for leaving home.",
    summary:
      "The speaker asks his mother to help him measure the rooms of his new home. She holds the tape measure's zero end while he walks away, the tape unreeling between them like an umbilical cord. As he climbs to the loft and looks out of a window at the sky, the poem ends ambiguously with the tape reaching its limit, and the speaker at the point of either falling or flying.",
    formAndStructure:
      "Loosely based on the sonnet form: roughly 14 lines but with irregular structure, reflecting the stretching and straining of the parent-child bond. The poem moves vertically through the house (ground floor to loft to sky), mirroring the child's upward trajectory towards independence. The near-sonnet form is appropriate for a love poem, but its imperfections suggest the relationship is evolving beyond traditional forms.",
    quotes: [
      {
        text: "Mother, any distance greater than a single span / requires a second pair of hands",
        technique: "Direct address / double meaning",
        analysis:
          "The opening directly addresses the mother, establishing intimacy. 'Any distance' is both literal (measuring) and metaphorical (any life stage beyond childhood). 'A second pair of hands' acknowledges dependence while the practical tone underplays the emotional weight.",
      },
      {
        text: "the tape, spool of recording tape, feeding out / unreeling years between us",
        technique: "Extended metaphor / pun",
        analysis:
          "The tape measure becomes a 'recording tape' -- capturing memories -- and an umbilical cord 'feeding out'. 'Unreeling years' condenses a lifetime of gradual separation into the image of the extending tape. The multiple meanings layered onto one object show Armitage's characteristic wordplay.",
      },
      {
        text: "Anchor. Kite",
        technique: "Single-word sentences / contrast",
        analysis:
          "These two monosyllables distil the entire poem into a binary: the mother is the anchor (stability, grounding, weight) and the child is the kite (freedom, flight, risk). The full stops create maximum separation between the words, visually enacting the distance between parent and child.",
      },
      {
        text: "to fall or fly",
        technique: "Alliteration / ambiguity",
        analysis:
          "The alliterative pairing balances two possible outcomes of independence: failure ('fall') or success ('fly'). The ambiguity refuses to resolve, capturing the genuine uncertainty of leaving home. The open ending mirrors the open window the speaker reaches.",
      },
    ],
    themes: ["Growing up and independence", "Parental love", "Letting go", "Risk and freedom", "Home"],
    comparisons: [
      "Walking Away (links: parent letting child go, love proved in separation)",
      "Follower (links: changing parent-child dynamic over time)",
      "Before You Were Mine (links: the child's perspective on the parent)",
    ],
  },
  {
    id: "before-you-were-mine",
    title: "Before You Were Mine",
    poet: "Carol Ann Duffy",
    date: "1993",
    context:
      "Duffy imagines her mother's life as a young woman in 1950s Glasgow before motherhood transformed her. Duffy was the first female and first openly LGBT Poet Laureate. The poem is characteristic of her interest in voice, identity, and the gap between how we imagine others and who they truly are.",
    summary:
      "The speaker addresses her mother, imagining her as a glamorous, carefree young woman laughing with friends on George Square in the decade before the speaker was born. She envisions her mother dancing, wearing high heels, and living with a boldness that motherhood later constrained. The poem's possessive title reveals that the speaker claims ownership over even the time before her existence.",
    formAndStructure:
      "Four five-line stanzas with no regular rhyme scheme. Each stanza is anchored in a specific decade or image, giving the poem a cinematic, snapshot quality. The direct address ('you') sustains an intimate, conversational tone. The present tense used for past events makes the mother's youth feel vivid and immediate, as though the speaker is watching it happen.",
    quotes: [
      {
        text: "I'm not here yet. The thought of me doesn't occur",
        technique: "Dramatic irony / self-awareness",
        analysis:
          "The speaker acknowledges her own absence from the scene she is describing, creating a poignant temporal irony. The blunt 'doesn't occur' suggests the mother's life was complete and joyful without her child, subtly challenging the assumption that motherhood is a woman's ultimate fulfilment.",
      },
      {
        text: "Your polka-dot dress blows round your legs. Marilyn",
        technique: "Allusion / visual imagery",
        analysis:
          "The Marilyn Monroe allusion (the famous subway grate scene from The Seven Year Itch) glamorises the mother, casting her as a film star. The single-word sentence 'Marilyn' is emphatic and idolising, showing the daughter's awe at her mother's former allure.",
      },
      {
        text: "The decade ahead of my loud, possessive yell / was the best one, eh?",
        technique: "Colloquial register / possessive language",
        analysis:
          "The speaker openly admits her birth was a 'possessive yell' that claimed the mother. 'The best one' acknowledges that motherhood diminished her freedom. The colloquial 'eh?' seeks confirmation while also expressing guilt about what was sacrificed.",
      },
      {
        text: "Even then I wanted the bold girl / winking in Portobello, somewhere in Scotland",
        technique: "Temporal paradox / possessive tone",
        analysis:
          "The speaker claims to have wanted her mother 'even then' -- before she existed -- creating an impossible, possessive longing. 'Bold girl' celebrates the mother's confidence and daring, qualities the speaker fears she may have extinguished by being born.",
      },
    ],
    themes: ["Parent-child relationships", "Nostalgia and the past", "Identity and freedom", "Possession", "Glamour and sacrifice"],
    comparisons: [
      "Eden Rock (links: imagining a parent in the past, before the speaker knew them)",
      "Follower (links: admiration for a parent, seen from the child's perspective)",
      "Walking Away (contrasts: parent's perspective vs. child's perspective)",
    ],
  },
  {
    id: "winter-swans",
    title: "Winter Swans",
    poet: "Owen Sheers",
    date: "2005",
    context:
      "Sheers is a Welsh poet whose work frequently draws on landscape and nature. This poem uses the natural world as a lens for examining human relationships. The swans carry mythological and literary associations with love (they mate for life, and their necks form a heart shape), which Sheers both draws on and complicates.",
    summary:
      "A couple walks together after two days of rain, their relationship strained and silent. They stop at a lake and watch swans, which 'mate for life', tipping and righting themselves on the water in a graceful, synchronised movement. The observation becomes a turning point: the couple's hands find each other, and the poem ends with their reconciliation, their hands compared to swans' wings settling after flight.",
    formAndStructure:
      "Six tercets followed by a final couplet. The three-line stanzas reflect the uneasy, unresolved tension between the couple, while the closing couplet (two lines together) enacts their reunion -- two becoming a pair. The poem moves from separation through observation to reconnection, with the swans as the pivot point. Enjambment between stanzas creates a flowing, continuous movement that mirrors the walk.",
    quotes: [
      {
        text: "The clouds had given their all -- / two days of rain and then a break",
        technique: "Pathetic fallacy / double meaning",
        analysis:
          "The weather mirrors the relationship: 'given their all' suggests emotional exhaustion, and 'break' is ambiguous -- a break in the clouds or a break in the relationship. The rain ending hints at the possibility of renewal that the poem will explore.",
      },
      {
        text: "they halved themselves in the water, / water with water, water and water",
        technique: "Repetition / reflection imagery",
        analysis:
          "The swans' reflections create perfect symmetry, 'halving' themselves to become part of the water. The hypnotic repetition of 'water' blurs the boundary between swan and element, individual and partner, suggesting that in a true relationship, identities merge without being lost.",
      },
      {
        text: "like they were working the bellows of some smelter",
        technique: "Simile / industrial imagery",
        analysis:
          "The swans' synchronised movement is compared to bellows stoking a fire, introducing warmth and heat into the cold, rain-soaked landscape. The simile suggests the relationship's warmth is being rekindled, with effort and rhythm required to sustain it.",
      },
      {
        text: "our hands, that had, somehow, parsing the distance between us, / swum the width of a lake",
        technique: "Extended metaphor / enjambment",
        analysis:
          "The hands become swans themselves, having 'swum' the emotional distance. 'Somehow' captures the tentative, almost miraculous quality of reconciliation -- it happened without either partner fully understanding how. 'Parsing' suggests careful, deliberate analysis of the gap between them.",
      },
    ],
    themes: ["Reconciliation", "Nature and relationships", "Distance and closeness", "Trust", "Renewal"],
    comparisons: [
      "Neutral Tones (contrasts: nature reflecting reconciliation vs. love's end)",
      "Sonnet 43 (contrasts: quiet, tentative love vs. passionate declaration)",
      "Letters from Yorkshire (links: connection found through the natural world)",
    ],
  },
  {
    id: "singh-song",
    title: "Singh Song!",
    poet: "Daljit Nagra",
    date: "2007",
    context:
      "Nagra is a British poet of Punjabi heritage. The poem draws on the experience of British-Indian communities, blending Punjabi-inflected English with contemporary British culture. Nagra celebrates hybrid identity and challenges stereotypes of the dutiful corner-shop worker. The exclamation mark in the title suggests joy and exuberance.",
    summary:
      "A young newlywed narrates his life running his parents' corner shop while sneaking upstairs to be with his new bride. The customers complain about the shop's decline ('di prices is high'), but the speaker is consumed by his love. The poem culminates with the couple sitting on the shop roof at night, watching the moon, in a tender and playful scene.",
    formAndStructure:
      "Free verse with a loose, rhythmic structure that echoes both Punjabi oral traditions and the patter of a market seller. Italicised sections represent the customers' complaints, creating a choral, communal voice. The non-standard English ('di', 'vee', 'dat') is not dialect transcription but a deliberate literary creation, celebrating linguistic hybridity. The playful, song-like rhythm matches the title's exclamation of joy.",
    quotes: [
      {
        text: "my bride / she effing at my mum / in all di colours of Punjabi",
        technique: "Humour / cultural imagery",
        analysis:
          "The comic image of the bride swearing at her mother-in-law 'in all di colours of Punjabi' subverts the stereotype of the obedient Asian wife. 'Colours' transforms language into something vivid and visual, celebrating its expressiveness rather than translating it for a Western audience.",
      },
      {
        text: "she is priceless",
        technique: "Pun / double meaning",
        analysis:
          "In the context of a shop poem, 'priceless' works on two levels: she cannot be assigned a monetary value (invaluable), and she is hilariously funny. The pun bridges the commercial world of the shop and the emotional world of the marriage.",
      },
      {
        text: "di moon / is needle-loss / it stitches silver rivers on her face",
        technique: "Metaphor / neologism",
        analysis:
          "The compound 'needle-Loss' (needleless) is Nagra's invention, blending Punjabi English with poetic creativity. The moon stitching light onto the bride's face is both beautiful and homely, connecting celestial imagery to the domestic world of sewing, suggesting love elevates the everyday to the sublime.",
      },
      {
        text: "from di stool each half a rose / and di other half a rose",
        technique: "Repetition / symbolism",
        analysis:
          "Each partner is half a rose, together forming a complete flower. The simple symbolism of wholeness through union is delivered with disarming sincerity. The rose is a universal love symbol, but presented in Nagra's distinctive voice, it feels fresh and earned.",
      },
    ],
    themes: ["Romantic love", "Cultural identity", "Family duty vs. personal desire", "Humour and joy", "Hybrid identity"],
    comparisons: [
      "Sonnet 43 (links: passionate, celebratory love poetry)",
      "The Farmer's Bride (contrasts: mutual joy vs. one-sided desire)",
      "Before You Were Mine (links: tension between family roles and personal identity)",
    ],
  },
  {
    id: "climbing-my-grandfather",
    title: "Climbing My Grandfather",
    poet: "Andrew Waterhouse",
    date: "2000",
    context:
      "Waterhouse was a poet and environmental scientist who died young. This poem uses the extended conceit of mountain climbing to explore the physical and emotional landscape of a grandfather's body. The poem is thought to be written from memory, as the grandfather may have already died, making the 'climb' an act of remembrance and emotional archaeology.",
    summary:
      "The speaker imagines climbing their grandfather's body as though it were a mountain, starting at the feet and working upwards. Each body part reveals something about the grandfather's character and history -- his dusty, earth-stained hands, his thick knees, his warm chest. The climb ends at the summit of his head, where the speaker rests, hearing the grandfather's heart and experiencing a profound, wordless connection.",
    formAndStructure:
      "Single continuous stanza in free verse, with no breaks or sections. The unbroken form mirrors the continuous, uninterrupted climb from foot to head. The lack of stanza breaks also suggests the intimacy of the relationship -- there are no barriers or divisions. Present tense throughout creates immediacy, as though the climb is happening now, even if the grandfather is remembered.",
    quotes: [
      {
        text: "I decide to do it free, without a rope or net",
        technique: "Extended metaphor / risk imagery",
        analysis:
          "Climbing 'free' means without safety equipment, suggesting the speaker approaches this relationship with total vulnerability and trust. There is no emotional protection ('net'), implying the speaker is willing to be fully open. The mountaineering lexis sustains the conceit throughout.",
      },
      {
        text: "the nails are splintered and dirty",
        technique: "Tactile detail / characterisation",
        analysis:
          "The grandfather's rough, working hands are described with unflinching realism rather than sentimentality. The 'splintered and dirty' nails suggest manual labour, connecting him to the earth and to a life of physical work, much like Heaney's father in 'Follower'.",
      },
      {
        text: "the skin of his finger is smooth and thick / like warm leather",
        technique: "Simile / tactile imagery",
        analysis:
          "The leather simile combines warmth, durability, and the sensory memory of touch. Leather is natural, aged, and strong -- qualities projected onto the grandfather himself. The specificity of 'smooth and thick' suggests this is a deeply embodied, physical memory.",
      },
      {
        text: "I can feel wood smoke / rising from his skin",
        technique: "Sensory imagery / synesthesia",
        analysis:
          "Smell and touch merge as the speaker detects wood smoke in the grandfather's skin. This is a powerfully evocative memory-trigger (scent is the sense most linked to memory), suggesting the grandfather is associated with home, hearth, and the outdoors.",
      },
    ],
    themes: ["Family bonds", "Memory and physicality", "Admiration", "Trust and vulnerability", "The body as landscape"],
    comparisons: [
      "Follower (links: physical admiration of a male relative, detailed bodily description)",
      "Eden Rock (links: remembering a family member, crossing into their world)",
      "Walking Away (contrasts: physical closeness vs. letting go)",
    ],
  },
  {
    id: "one-flesh",
    title: "One Flesh",
    poet: "Elizabeth Jennings",
    date: "1966",
    context:
      "Jennings was part of The Movement, a group of 1950s poets who valued clarity and restraint. A devout Catholic, Jennings was deeply influenced by religious ideas of marriage. 'One flesh' is a Biblical phrase (Genesis 2:24) describing how marriage unites two people into one body. The poem observes her elderly parents' marriage with a mixture of tenderness and sadness.",
    summary:
      "The speaker watches her elderly parents lying apart in separate beds, each absorbed in their own solitary activity -- reading, dreaming. Despite their physical and emotional distance, they remain 'one flesh' through decades of shared history. The poem explores the paradox of intimacy that has faded into habit but endures through the bond of time.",
    formAndStructure:
      "Three six-line stanzas with an ABABCC rhyme scheme. The regular, controlled form mirrors the quiet, measured existence of the elderly couple. Each stanza focuses on a different aspect: physical separation (1), emotional distance (2), and the paradox of enduring connection (3). The closing couplets in each stanza provide moments of reflection, like small conclusions within the larger meditation.",
    quotes: [
      {
        text: "Lying apart now, each in a separate bed",
        technique: "Declarative / spatial imagery",
        analysis:
          "The plain, unadorned opening statement presents the physical separation without judgement. 'Now' implies this was not always the case, gesturing towards a past of greater intimacy. The separate beds are a concrete symbol of emotional distance within a marriage that technically endures.",
      },
      {
        text: "Tossed up like flotsam from a former passion",
        technique: "Simile / maritime imagery",
        analysis:
          "The couple are compared to wreckage from a shipwreck -- debris left behind after a storm of passion has passed. 'Former passion' explicitly states that desire has ended, while 'flotsam' suggests they are adrift, carried by currents beyond their control rather than actively navigating their relationship.",
      },
      {
        text: "Strangely apart, yet strangely close together",
        technique: "Paradox / repetition",
        analysis:
          "The repeated 'strangely' captures the speaker's bewilderment at the paradox she observes. The oxymoronic 'apart, yet close' is the poem's central tension: the couple are disconnected in every visible way, yet bound by invisible ties of shared history, habit, and the sacrament of marriage.",
      },
      {
        text: "Whose fire from which I came, has now grown cold",
        technique: "Fire metaphor / personal revelation",
        analysis:
          "The 'fire' of passion that created the speaker has 'grown cold', a deeply personal acknowledgement that she is the product of a desire that no longer exists. This is both poignant and unsettling -- the speaker's existence is proof of a passion her parents can no longer feel.",
      },
    ],
    themes: ["Long-term love", "Ageing and time", "Intimacy and distance", "Marriage", "Memory"],
    comparisons: [
      "Sonnet 43 (contrasts: passionate young love vs. love that has faded with age)",
      "Neutral Tones (links: love that has lost its vitality and warmth)",
      "Winter Swans (contrasts: reconnection vs. quiet, resigned distance)",
    ],
  },
  {
    id: "my-last-duchess",
    title: "My Last Duchess",
    poet: "Robert Browning",
    date: "1842",
    context:
      "Based on the historical Duke Alfonso II of Ferrara, whose first wife Lucrezia de' Medici died in suspicious circumstances in 1561, aged 17. Browning pioneered the dramatic monologue, in which a speaker inadvertently reveals their true character. The poem is set during negotiations for the Duke's next marriage, adding chilling dramatic irony as he discusses how he dealt with his previous wife.",
    summary:
      "The Duke shows a visitor (an envoy negotiating his next marriage) a portrait of his late wife, hidden behind a curtain that only he controls. He complains that the Duchess smiled too easily and equally at everyone, treating his 'nine-hundred-years-old name' as no more special than a sunset or a gift of cherries. He implies he had her killed ('I gave commands; then all smiles stopped together') before smoothly returning to the marriage negotiation.",
    formAndStructure:
      "Dramatic monologue in rhyming couplets (heroic couplets) of iambic pentameter. The couplets create a sense of the Duke's controlled, authoritative speech, yet the heavy enjambment fights against the rhyme, suggesting emotions (jealousy, rage) that strain against his polished surface. The single, unbroken stanza mirrors the Duke's desire for total control -- he will not allow even a stanza break to interrupt his narrative.",
    quotes: [
      {
        text: "That's my last Duchess painted on the wall, / Looking as if she were alive",
        technique: "Possessive pronoun / dramatic irony",
        analysis:
          "The possessive 'my' immediately establishes ownership. 'Last' is chillingly casual, implying a series. 'Looking as if she were alive' is deeply ironic, as the reader gradually understands that she is dead, likely at his command. The portrait is the only form in which he can fully control her.",
      },
      {
        text: "She had / A heart -- how shall I say? -- too soon made glad",
        technique: "Caesura / feigned hesitation",
        analysis:
          "The dashes create a false pause, as though the Duke is searching for the right words, but his speech is actually carefully calculated. Her 'crime' -- being too easily pleased -- reveals his pathological jealousy. He wants her joy to be exclusively his, and her inability to comply was, in his view, punishable by death.",
      },
      {
        text: "I gave commands; / Then all smiles stopped together",
        technique: "Euphemism / caesura",
        analysis:
          "This is the poem's most chilling moment. The vague 'commands' and the abrupt 'stopped' strongly imply murder, but the Duke's refusal to say it directly shows his ability to commit violence while maintaining social decorum. The semicolon creates a cold, efficient pause between order and outcome.",
      },
      {
        text: "Notice Neptune, though, / Taming a sea-horse, thought a rarity",
        technique: "Classical allusion / symbolism",
        analysis:
          "The Duke identifies with Neptune, god of the sea, who 'tames' a seahorse. This reveals his self-image: a powerful figure who masters those beneath him. The seahorse (the next Duchess?) is something to be controlled and displayed, like the portrait. 'Rarity' shows his view of people as collectible objects.",
      },
    ],
    themes: ["Power and control", "Jealousy and possession", "Art and objectification", "Status and pride", "Gender and patriarchy"],
    comparisons: [
      "The Farmer's Bride (links: male desire to control a woman)",
      "La Belle Dame Sans Merci (contrasts: male powerlessness vs. male tyranny)",
      "Sonnet 43 (contrasts: controlling love vs. generous, selfless love)",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Comparison table data                                              */
/* ------------------------------------------------------------------ */

interface ComparisonPair {
  poemA: string;
  poemB: string;
  link: string;
  contrast: string;
}

const COMPARISON_PAIRS: ComparisonPair[] = [
  {
    poemA: "Sonnet 43",
    poemB: "Neutral Tones",
    link: "Both explore romantic love",
    contrast: "Barrett Browning celebrates love's transcendence; Hardy presents love's bitter end. Light vs. colourlessness, faith vs. cynicism.",
  },
  {
    poemA: "Sonnet 43",
    poemB: "One Flesh",
    link: "Both present long-term love",
    contrast: "Barrett Browning's love is passionate and present; Jennings observes love that has faded with age. Declaration vs. silent observation.",
  },
  {
    poemA: "My Last Duchess",
    poemB: "The Farmer's Bride",
    link: "Both feature male speakers who desire control over women",
    contrast: "The Duke is articulate and calculated; the Farmer is inarticulate and increasingly desperate. Both women are silenced.",
  },
  {
    poemA: "My Last Duchess",
    poemB: "La Belle Dame Sans Merci",
    link: "Both explore power dynamics in relationships",
    contrast: "The Duke holds all power and destroys his wife; the knight is powerless, destroyed by the lady. Male control vs. male vulnerability.",
  },
  {
    poemA: "Walking Away",
    poemB: "Follower",
    link: "Both explore parent-child relationships across time",
    contrast: "Day Lewis watches his child leave; Heaney recalls following his father. Both acknowledge the pain of changing roles.",
  },
  {
    poemA: "Walking Away",
    poemB: "Mother Any Distance",
    link: "Both address the process of letting go",
    contrast: "Day Lewis reflects as a parent; Armitage speaks as the child leaving. Both use extended metaphors for separation.",
  },
  {
    poemA: "Eden Rock",
    poemB: "Before You Were Mine",
    link: "Both imagine parents in a time the speaker did not witness",
    contrast: "Causley envisions a reunion after death; Duffy possessively claims her mother's youth. Acceptance vs. desire.",
  },
  {
    poemA: "Eden Rock",
    poemB: "Follower",
    link: "Both recall parents with precise physical detail",
    contrast: "Causley's parents are idealised in death; Heaney's father is admired but the relationship becomes uncomfortable. Nostalgia vs. guilt.",
  },
  {
    poemA: "Winter Swans",
    poemB: "Neutral Tones",
    link: "Both use nature to reflect on a relationship",
    contrast: "Sheers uses swans to show reconciliation; Hardy uses a drained landscape to show love's end. Renewal vs. death of feeling.",
  },
  {
    poemA: "Singh Song!",
    poemB: "The Farmer's Bride",
    link: "Both present marriages",
    contrast: "Nagra celebrates mutual, playful love; Mew depicts a marriage of fear and isolation. Joy vs. entrapment.",
  },
  {
    poemA: "Singh Song!",
    poemB: "Sonnet 43",
    link: "Both are celebrations of romantic love",
    contrast: "Nagra uses humour, dialect, and contemporary setting; Barrett Browning uses the high literary tradition of the Petrarchan sonnet.",
  },
  {
    poemA: "Climbing My Grandfather",
    poemB: "Follower",
    link: "Both admire a male family figure through physical detail",
    contrast: "Waterhouse uses the body-as-landscape conceit; Heaney uses ploughing expertise. Both convey deep respect for working hands.",
  },
  {
    poemA: "Mother Any Distance",
    poemB: "Before You Were Mine",
    link: "Both written from the child's perspective about a parent",
    contrast: "Armitage focuses on separation and risk; Duffy focuses on the mother's lost youth. Independence vs. possession.",
  },
  {
    poemA: "Letters from Yorkshire",
    poemB: "Winter Swans",
    link: "Both explore connection through the natural world",
    contrast: "Doshi's connection is maintained across distance through writing; Sheers's couple reconnect through shared physical presence.",
  },
  {
    poemA: "La Belle Dame Sans Merci",
    poemB: "The Farmer's Bride",
    link: "Both explore desire and entrapment",
    contrast: "Keats's knight is trapped by a supernatural woman; Mew's bride is trapped by a mortal man. Who is the victim changes.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function EdexcelAnthologyPage() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-200">
            Edexcel GCSE English Literature
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Relationships Poetry Anthology
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            In-depth analysis of all 15 poems in the Edexcel Relationships cluster.
            Context, summaries, form and structure, key quotations with technique
            analysis, themes, and comparison guidance.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-card/20 px-4 py-1.5 text-sm font-medium">
              15 Poems
            </span>
            <span className="rounded-full bg-card/20 px-4 py-1.5 text-sm font-medium">
              60+ Key Quotes
            </span>
            <span className="rounded-full bg-card/20 px-4 py-1.5 text-sm font-medium">
              15 Comparison Pairs
            </span>
          </div>
        </div>
      </section>

      {/* Poem analyses */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Poem Analysis</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Click any poem to expand its full analysis.
            </p>
          </div>
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <div className="space-y-4">
          {POEMS.map((poem) => (
            <PoemSectionControlled
              key={poem.id}
              poem={poem}
              forceOpen={expandAll}
            />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Comparison Pairs at a Glance
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Use this table to plan comparison essays. Each pair identifies a
            shared link and the key contrast between the two poems.
          </p>

          {/* Mobile cards */}
          <div className="mt-6 space-y-4 lg:hidden">
            {COMPARISON_PAIRS.map((pair, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-4 shadow-md"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span>{pair.poemA}</span>
                  <svg
                    className="h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  <span>{pair.poemB}</span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Link
                </p>
                <p className="text-sm text-muted-foreground">{pair.link}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Contrast
                </p>
                <p className="text-sm text-muted-foreground">{pair.contrast}</p>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="mt-6 hidden overflow-hidden rounded-xl border border-border bg-card shadow-md lg:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-3 font-semibold">Poem A</th>
                  <th className="px-5 py-3 font-semibold">Poem B</th>
                  <th className="px-5 py-3 font-semibold">Link</th>
                  <th className="px-5 py-3 font-semibold">Key Contrast</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARISON_PAIRS.map((pair, i) => (
                  <tr
                    key={i}
                    className="transition-colors hover:bg-muted"
                  >
                    <td className="px-5 py-3 font-medium text-foreground">
                      {pair.poemA}
                    </td>
                    <td className="px-5 py-3 font-medium text-foreground">
                      {pair.poemB}
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{pair.link}</td>
                    <td className="px-5 py-3 text-muted-foreground">{pair.contrast}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Exam tips */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Exam Tips for Poetry Comparison</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Structure Your Essay",
              text: "Use a thematic approach: pick 3 points of comparison, and for each, analyse both poems. Avoid writing about one poem completely, then the other.",
            },
            {
              title: "Embed Short Quotations",
              text: "Single words or short phrases are more effective than long quotations. They show you can select precisely and weave evidence into your argument.",
            },
            {
              title: "Compare, Don't Describe",
              text: "Use comparative connectives: 'similarly', 'in contrast', 'whereas', 'however'. Every paragraph should reference both poems.",
            },
            {
              title: "Link Context to Meaning",
              text: "Do not narrate the poet's biography. Instead, explain how historical or social context shapes the poem's meaning and the reader's interpretation.",
            },
            {
              title: "Comment on Form and Structure",
              text: "Discuss sonnet form, dramatic monologue, free verse, stanza shape, enjambment, caesura, and volta. Examiners reward structural analysis.",
            },
            {
              title: "Revise Comparison Pairs",
              text: "Learn 2-3 comparison pairs for each poem. Practise writing comparative paragraphs under timed conditions so you can respond flexibly in the exam.",
            },
          ].map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-border bg-card p-5 shadow-md"
            >
              <h3 className="font-semibold text-foreground">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <Link
          href="/resources/poetry"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
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
  );
}

/* ------------------------------------------------------------------ */
/*  Controlled expandable section (responds to Expand All)             */
/* ------------------------------------------------------------------ */

function PoemSectionControlled({
  poem,
  forceOpen,
}: {
  poem: Poem;
  forceOpen: boolean;
}) {
  const [manualOpen, setManualOpen] = useState(false);
  const isOpen = forceOpen || manualOpen;

  return (
    <div className="rounded-xl border border-border bg-card shadow-md transition-shadow hover:shadow-md">
      <button
        onClick={() => setManualOpen(!manualOpen)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        aria-expanded={isOpen}
      >
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-foreground sm:text-xl">
            {poem.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {poem.poet} ({poem.date})
          </p>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t border-border px-5 pb-6 pt-4 sm:px-6">
          {/* Context */}
          <div className="mb-5">
            <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Context
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {poem.context}
            </p>
          </div>

          {/* Summary */}
          <div className="mb-5">
            <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Summary
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {poem.summary}
            </p>
          </div>

          {/* Form and Structure */}
          <div className="mb-5">
            <h4 className="mb-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
              Form &amp; Structure
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {poem.formAndStructure}
            </p>
          </div>

          {/* Key Quotes */}
          <div className="mb-5">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Key Quotes &amp; Analysis
            </h4>
            <div className="space-y-4">
              {poem.quotes.map((q, i) => (
                <div
                  key={i}
                  className="rounded-lg border-l-4 border-primary bg-muted p-4"
                >
                  <p className="font-medium italic text-foreground">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    {q.technique}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {q.analysis}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Themes */}
          <div className="mb-5">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Themes
            </h4>
            <div className="flex flex-wrap gap-2">
              {poem.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Comparison Pairs */}
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Comparison Pairs
            </h4>
            <ul className="space-y-1.5">
              {poem.comparisons.map((comp, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
