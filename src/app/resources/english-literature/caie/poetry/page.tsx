import { t as _trServer } from '@/lib/i18n/t'
import { STRINGS as _EAL_STRINGS } from './content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Cambridge IGCSE Poetry: Songs of Ourselves',
    description:
      'In-depth analysis of Songs of Ourselves poems for Cambridge IGCSE English Literature. 10+ poems with full analysis, comparison techniques, and marking guidance.',
    images: [
      {
        url: '/api/og?title=Cambridge+IGCSE+Poetry%3A+Songs+of+Ourselves',
        width: 1200,
        height: 630,
        alt: 'Cambridge IGCSE Poetry: Songs of Ourselves',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/poetry' },
  title: 'Cambridge IGCSE Poetry: Songs of Ourselves',
  description:
    'In-depth analysis of Songs of Ourselves poems for Cambridge IGCSE English Literature. 10+ poems with full analysis, comparison techniques, and marking guidance.',
}

/* ─── Poem data ──────────────────────────────────────────────── */

const poems = [
  {
    title: "Sonnet 18 ('Shall I compare thee to a summer's day?')",
    poet: 'William Shakespeare',
    themes: ['Love', 'Beauty', 'Immortality through art', 'Time'],
    form: 'Shakespearean sonnet (three quatrains and a couplet, ABAB CDCD EFEF GG, iambic pentameter).',
    summary:
      "The speaker considers comparing the beloved to a summer's day but concludes that the beloved surpasses summer because summer is impermanent. The final couplet asserts that the poem itself will immortalise the beloved's beauty.",
    analysis: [
      {
        point: 'Opening rhetorical question',
        detail:
          '"Shall I compare thee to a summer\'s day?" immediately sets up the comparison only to dismantle it. The interrogative form creates a conversational, intimate tone.',
      },
      {
        point: "Cataloguing summer's flaws",
        detail:
          '"Rough winds do shake the darling buds of May" and "summer\'s lease hath all too short a date" present summer as imperfect and transient. The personification of summer having a \'lease\' introduces a legal metaphor suggesting temporary possession.',
      },
      {
        point: 'The volta',
        detail:
          "\"But thy eternal summer shall not fade\" marks the turn. The conjunction 'But' pivots the argument: while nature decays, the beloved's beauty is preserved. The oxymoron 'eternal summer' defies the mortality established earlier.",
      },
      {
        point: 'Concluding couplet and immortality',
        detail:
          "\"So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.\" The poem's bold claim is that poetry conquers time. The repeated 'So long' creates a conditional that, paradoxically, has now lasted over 400 years, proving its own argument.",
      },
    ],
    keyQuotes: [
      "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate",
      'Rough winds do shake the darling buds of May',
      'But thy eternal summer shall not fade',
      'So long lives this, and this gives life to thee',
    ],
  },
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    themes: ['Power', 'Transience', 'Pride and hubris', 'Art outlasting empires'],
    form: "Irregular sonnet (loosely Petrarchan, with an unconventional rhyme scheme reflecting the ruined statue's broken form).",
    summary:
      "A traveller describes encountering a shattered statue in the desert. The inscription boasts of the ruler Ozymandias's power, but the surrounding emptiness undercuts the claim. The poem meditates on the impermanence of political power.",
    analysis: [
      {
        point: 'Framing narrative',
        detail:
          '"I met a traveller from an antique land" distances the speaker from the scene through a second-hand account. This layered narration (poet > traveller > sculptor > Ozymandias) mirrors how power becomes diluted over time.',
      },
      {
        point: "The sculptor's skill",
        detail:
          "\"The hand that mocked them, and the heart that fed\" contains a double meaning: 'mocked' means both 'imitated' (sculpted) and 'ridiculed'. The sculptor's art has outlasted the king's empire, subtly asserting the superiority of art over political power.",
      },
      {
        point: 'The inscription',
        detail:
          "\"Look on my Works, ye Mighty, and despair!\" is deeply ironic. The imperative and capitalised 'Works' convey Ozymandias's arrogance, but the 'Works' have crumbled. The intended audience ('ye Mighty') should despair not at his power but at the futility of all power.",
      },
      {
        point: 'The emptiness',
        detail:
          "\"Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare / The lone and level sands stretch far away.\" The alliteration of 'boundless and bare' and 'lone and level' creates a vast, empty soundscape. The final image is of absence, not presence.",
      },
    ],
    keyQuotes: [
      'Two vast and trunkless legs of stone / Stand in the desert',
      'Half sunk a shattered visage lies, whose frown, / And wrinkled lip, and sneer of cold command',
      'Look on my Works, ye Mighty, and despair!',
      'Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare',
    ],
  },
  {
    // Rewritten 2 October 2026. The card quoted 48 words of a poem in copyright whose share
    // here is 20, one quotation ran three lines, and it had the villagers saying the scorpion's
    // own sins would burn away: they hope the pain will burn away the sins of the mother's
    // previous birth. Cambridge's printing is not held here; quotations are checked against
    // the text AllPoetry prints.
    title: 'The Night of the Scorpion',
    poet: 'Nissim Ezekiel',
    themes: ['Suffering', 'Community', 'Superstition versus reason', 'Maternal love'],
    form: 'Free verse with long, enjambed lines creating a breathless, narrative rhythm. No regular rhyme scheme.',
    summary:
      "The speaker recalls a night when his mother was stung by a scorpion. Villagers gather, offering prayers and superstitious remedies. The father, a rationalist, tries practical solutions. The mother's only concern on recovery is gratitude that the scorpion stung her rather than her children.",
    analysis: [
      {
        point: "The villagers' response",
        detail:
          "'they said' is repeated through the villagers' prayers, giving them a choral, ritual sound. Their hopes, that her pain will burn away the sins of a previous birth and cleanse her body of its desires, are reported without open mockery but with implicit irony: their words do not help.",
      },
      {
        point: "The father's rationalism",
        detail:
          '"My father, sceptic, rationalist" tries every remedy he can find, from \'curse and blessing\' to paraffin set alight on the bitten toe. That even the rationalist turns to superstition in desperation shows how fear levels everyone.',
      },
      {
        point: "The mother's selflessness",
        detail:
          'The poem ends with the mother\'s only words once the pain has passed: "Thank God the scorpion picked on me / And spared my children." After the crowd\'s noise, her quiet gratitude is the only response that thinks of others. The understatement makes it profoundly moving.',
      },
      {
        point: 'Structure and form',
        detail:
          "The long, unrhymed lines pile up the night's events, the crowd, the candles, the rain and the remedies, then the mother's words are set apart in three short lines. The brevity of the ending creates a powerful contrast.",
      },
    ],
    keyQuotes: [
      'My father, sceptic, rationalist',
      'Thank God the scorpion picked on me / And spared my children',
    ],
  },
  {
    // Rewritten 2 October 2026. Almost every quotation on this card was not Brewster's: "People
    // carry their landscapes with them / the way they carry their own names", "Mine is a world
    // of spruce and birch" and "old wood crumbling in the cellar" are not in the poem, and it
    // has three stanzas, not two. Cambridge's printing is not held here; quotations are checked
    // against the text Poetry Prof prints.
    title: 'Where I Come From',
    poet: 'Elizabeth Brewster',
    themes: ['Identity', 'Place and belonging', 'Nature versus urban life', 'Memory'],
    form: "Free verse in three stanzas: the city, the speaker's own rural home, and a closing two-line image.",
    summary:
      "The poem begins from the idea that people are shaped by the places they come from. The first stanza describes what city people carry with them, the smells and sights of urban life. The second turns to the speaker's own rural origins, full of woods, farms and hard winters, and the short last stanza brings that cold landscape back into the mind.",
    analysis: [
      {
        point: 'The opening idea',
        detail:
          '"People are made of places" states the poem\'s central idea in five plain words: identity is shaped by where we come from. The rest of the poem tests it on two very different kinds of place.',
      },
      {
        point: 'Urban imagery',
        detail:
          "The city is caught through its smells: smog, tulips in tidy beds, a museum, glue factories, the 'smell of subways' at rush hour. Even nature and art are neatly arranged, suggesting a controlled, second-hand world.",
      },
      {
        point: 'Rural imagery',
        detail:
          'Where the speaker comes from, people "carry woods in their minds": pine woods, blueberry patches, old, unpainted farmhouses, hens, battered schoolhouses. The detail is homely and a little worn, rooted rather than polished.',
      },
      {
        point: 'Seasons and the ending',
        detail:
          'The seasons that matter there are spring and winter, "ice and the breaking of ice". In the last two lines the cold of home blows back into the speaker\'s mind: the remembered landscape is still part of who they are.',
      },
    ],
    keyQuotes: [
      'People are made of places',
      'carry woods in their minds',
      'ice and the breaking of ice',
    ],
  },
  // Piano. Every quotation here is cut from the held edition
  // (src/data/full-texts/piano.ts, from New Poems, 1918). Until 2 October
  // 2026 this entry printed "tinkling strings" for the poem's
  // "tingling strings" (the tinkling piano is line 8's, not the strings of
  // line 3), and its analysis read the wrong word; it also added an "and"
  // before "I weep like a child", in the analysis and in the key quotation.
  {
    title: 'Piano',
    poet: 'D.H. Lawrence',
    themes: ['Memory and nostalgia', 'Childhood', 'Loss of innocence', 'Music and emotion'],
    form: "Three quatrains with AABB rhyme scheme, creating a song-like, musical quality that mirrors the poem's subject.",
    summary:
      "The speaker hears a woman singing and is involuntarily transported back to childhood memories of sitting under his mother's piano. Despite resisting, he is overwhelmed by nostalgia and weeps for the past.",
    analysis: [
      {
        point: 'The trigger of memory',
        detail:
          '"Softly, in the dusk, a woman is singing to me" sets a gentle, intimate tone. The music acts as a Proustian trigger, unlocking memories the speaker cannot control. The adverb \'softly\' suggests the memory creeps up on him.',
      },
      {
        point: 'Resistance and surrender',
        detail:
          "\"In spite of myself, the insidious mastery of song / Betrays me back\" - the speaker fights the pull of nostalgia. 'Insidious' and 'Betrays' are negative words, suggesting he views nostalgia as a weakness. Yet he cannot resist.",
      },
      {
        point: 'Childhood detail',
        detail:
          "\"A child sitting under the piano, in the boom of the tingling strings\" - the juxtaposition of 'boom' and 'tingling' sets the deep resonance of the instrument against a sensation felt on the skin, so that the child feels the music as well as hearing it. The child sits beneath the piano, suggesting smallness and protection.",
      },
      {
        point: 'The ending',
        detail:
          "\"The glamour / Of childish days is upon me, my manhood is cast / Down in the flood of remembrance, I weep like a child for the past.\" The enjambment of 'cast / Down' enacts the fall. 'Manhood' is defeated by childhood memory; the simile 'weep like a child' is both literal and ironic, as weeping makes him childlike again.",
      },
    ],
    keyQuotes: [
      'Softly, in the dusk, a woman is singing to me',
      'the insidious mastery of song / Betrays me back',
      'A child sitting under the piano, in the boom of the tingling strings',
      'my manhood is cast / Down in the flood of remembrance, I weep like a child for the past',
    ],
  },
  {
    // Rewritten 2 October 2026 from the poem as the Pearson Edexcel International GCSE English Anthology, Issue 8 (p. 58)
    // prints it. Cambridge's printing is not held here. Until then most of this card's
    // quotations were not Scannell's: "Call out just once then hide and seek", "The cold wood
    // smells of itself" and "The game is over. / Come out, come out" are not in the poem, and
    // the line it quoted as the last is not.
    title: 'Hide and Seek',
    poet: 'Vernon Scannell',
    themes: ['Childhood', 'Isolation', 'Growing up', 'Loss and abandonment'],
    form: "Second-person address ('you') throughout, creating immediacy and drawing the reader into the child's experience. Rhyme comes and goes rather than following a fixed pattern.",
    summary:
      'A child plays hide and seek, hiding so well that the other children give up looking and leave. The child emerges triumphant to discover everyone has gone. The poem works as an extended metaphor for growing up and finding yourself alone.',
    analysis: [
      {
        point: 'Second-person narration',
        detail:
          "The poem opens with the child's shout, \"I'm ready! Come and find me!\" The imperatives and the address to 'you' make the reader the child, so the final discovery happens to us as well.",
      },
      {
        point: 'Sensory concealment',
        detail:
          '"The sacks in the toolshed smell like the seaside" grounds the hiding place in smell and texture. The child\'s world shrinks to what can be sensed in the dark: a cold floor, damp sand, the hush of the searchers at the door.',
      },
      {
        point: 'Turning point',
        detail:
          'The child bursts out to claim victory, "I\'ve won! / Here I am!", but the shout meets silence: the garden watches and "Nothing stirs". The triumph is immediately undercut by the emptiness.',
      },
      {
        point: 'The final line',
        detail:
          '"Yes, here you are. But where are they who sought you?" The closing question turns the game into something lonelier: the child has won, and is alone. Read as a metaphor, it suggests the isolation of growing up.',
      },
    ],
    keyQuotes: [
      "I'm ready! Come and find me!",
      'The sacks in the toolshed smell like the seaside',
      "I've won! / Here I am!",
      'Yes, here you are. But where are they who sought you?',
    ],
  },
  {
    // 2 October 2026: the card quoted 59 words of a poem in copyright whose share here is 20.
    // Cambridge's printing is not held here; the quotations kept are checked against the text
    // WJEC prints on its own resource site.
    title: 'Hawk Roosting',
    poet: 'Ted Hughes',
    themes: ['Power and control', 'Nature', 'Violence', 'Arrogance'],
    form: "Six four-line stanzas, no rhyme scheme. The controlled form mirrors the hawk's sense of absolute authority.",
    summary:
      'A hawk speaks in first person, describing its position at the top of the natural order. It sees the world as existing for its convenience and asserts its right to kill without justification. The poem can be read as a study of power, dictatorship, or the amoral logic of nature.',
    analysis: [
      {
        point: 'First-person perspective',
        detail:
          "The hawk's 'I' dominates every stanza, from the opening, where the bird sits at the summit of the wood, eyes shut. The first-person monologue allows no alternative perspective, mirroring the totalitarian nature of absolute power.",
      },
      {
        point: 'God-like self-image',
        detail:
          "The hawk claims that the whole of 'Creation' was needed to produce its foot and each of its feathers, seeing itself as the pinnacle of the natural order. The capital C gives the word a religious weight, elevating the hawk to godlike status.",
      },
      {
        point: 'Violence without apology',
        detail:
          '"I kill where I please because it is all mine" is chillingly matter-of-fact. The absence of moral language (no guilt, no justification) makes the violence more disturbing. The hawk does not need to explain itself.',
      },
      {
        point: 'Political reading',
        detail:
          '"No arguments assert my right", and the closing vow to keep things as they are, echo the language of dictatorship. Hughes denied a direct political allegory, but the poem\'s imagery of unchallenged power invites comparison with totalitarian regimes.',
      },
    ],
    keyQuotes: ['I kill where I please because it is all mine', 'No arguments assert my right'],
  },
  {
    // Rewritten 2 October 2026 from the poem as the Pearson Edexcel International GCSE English Anthology, Issue 8 (p. 53)
    // prints it. Cambridge's printing is not held here. Until then the card quoted 33 words of
    // a 100-word poem in copyright, more than twice its share of 15, and two quotations were not
    // Dharker's: the poem ends "over their small bones", of the children, not "the small bones of
    // her feet", and the water does not "gather".
    title: 'Blessing',
    poet: 'Imtiaz Dharker',
    themes: ['Water and life', 'Poverty', 'Community', 'Spirituality'],
    form: 'Free verse with varying line lengths. Short, sparse opening lines mimic drought; longer lines later mirror the rush of water.',
    summary:
      'In a drought-stricken area, a municipal water pipe bursts. The community rushes to collect water. The poem celebrates this moment of abundance while acknowledging the constant reality of scarcity.',
    analysis: [
      {
        point: 'Opening imagery',
        detail:
          '"The skin cracks like a pod." The simile is startling: human skin is compared to dried vegetation, suggesting people and landscape suffer equally. The short sentence mimics the brittleness of drought.',
      },
      {
        point: 'Religious language',
        detail:
          "The title, the drip of water imagined as the voice of a god, and the crowd that gathers as 'a congregation' frame water as a divine gift, turning a burst pipe into a sacred event. For these people, water is miraculous.",
      },
      {
        point: 'Sound and movement',
        detail:
          'When the municipal pipe bursts, "silver crashes to the ground" and the flow turns into a roar: the dynamic verbs create a sense of urgent, joyful chaos, and the sibilance of \'silver\' mimics the sound of rushing water.',
      },
      {
        point: 'The ending',
        detail:
          "The poem ends with the blessing singing over the children's 'small bones'. The image is beautiful but also poignant: the small bones remind us of vulnerability; the blessing is temporary, the poverty enduring.",
      },
    ],
    keyQuotes: ['The skin cracks like a pod', 'silver crashes to the ground'],
    rights:
      '© Bloodaxe Books - fair-dealing extract. Imtiaz Dharker is a Pakistani-born British poet; raised in Glasgow; divides time between London and Mumbai.',
  },
  {
    // Rewritten 2 October 2026 from the poem as the Pearson Edexcel International GCSE English Anthology, Issue 8 (p. 56)
    // prints it. Cambridge's printing is not held here. Until then most of this card's
    // quotations were not Fanthorpe's: "Taborrowsmorningtime", "He was intolerably the
    // clockless land for ever" and "he had been let out into a time outside of Time" are not
    // in the poem, and the boy is kept in until half-past two, not after school.
    title: 'Half-Past Two',
    poet: 'U.A. Fanthorpe',
    themes: ['Childhood perception', 'Time', 'Authority', 'Imagination'],
    form: "Free verse with compound words ('schooltime', 'Gettinguptime') that mimic a child's invented language.",
    summary:
      'A young child is told to stay in the classroom as a punishment until half-past two, but cannot tell the time. The teacher forgets him. Without the structure of clock-time, the child enters a timeless, imaginative space. When the teacher returns, she slots him back into ordinary time, but the child has briefly experienced something transcendent.',
    analysis: [
      {
        point: 'Compound time-words',
        detail:
          '"Gettinguptime, timeyouwereofftime": these invented compounds capture how young children structure their day through events, not numbers. The technique is both humorous and perceptive.',
      },
      {
        point: "The teacher's authority",
        detail:
          "\"And She said he'd done / Something Very Wrong\" - the capitals parody the teacher's gravity from the child's perspective. The child does not understand the offence; he only understands the emotional weight adults impose.",
      },
      {
        point: 'Timelessness',
        detail:
          'Unable to read the clockface, the child escapes "into the clockless land for ever", a dreamlike state outside adult time. Fanthorpe makes the timelessness both frightening and liberating.',
      },
      {
        point: 'The ending',
        detail:
          'Back in ordinary time, "he never forgot how once by not knowing time" he had escaped it. The child\'s ignorance becomes a kind of freedom, kept for life.',
      },
    ],
    keyQuotes: [
      'Gettinguptime, timeyouwereofftime',
      "And She said he'd done / Something Very Wrong",
      'into the clockless land for ever',
      'he never forgot how once by not knowing time',
    ],
  },
  {
    // Rewritten 2 October 2026. Three of this card's quotations were not Curnow's: "A long
    // winded poem about nothing", "I am not in this poem" and "the air / wood-pigeon-cool air"
    // are not in the poem. Cambridge's printing is not held here; quotations are checked against
    // the text Carol Naylor's teaching blog prints.
    title: 'Continuum',
    poet: 'Allen Curnow',
    themes: ["Creativity and writer's block", 'Insomnia', 'Self and identity', 'The natural world'],
    form: "Free verse with enjambment that mirrors the restless, unresolved movement of the poet's mind.",
    summary:
      'The speaker, unable to sleep, goes outside barefoot under the moon, watches the night sky and feels the cold, then gives up and goes back indoors. The moon is a metaphor for the speaker himself, and the poem is about the restless, interrupted work of writing.',
    analysis: [
      {
        point: 'Opening line',
        detail:
          '"The moon rolls over the roof and falls behind / my house" - the enjambment makes the moon seem to literally fall, creating a sense of instability. The domestic setting contrasts with the cosmic scale of the moon.',
      },
      {
        point: 'The moon as metaphor',
        detail:
          'The next lines withdraw the image: "I am talking about myself". This self-reflexive turn tells the reader that the moon stands for the poet, and the poem becomes a poem about its own making.',
      },
      {
        point: 'Restlessness',
        detail:
          'Unable to settle, the speaker goes out barefoot and watches clouds cross the dark sky while the cold rises in him. The broken, enjambed lines enact a mind that cannot rest.',
      },
      {
        point: 'The ending',
        detail:
          "In the last stanza the speaker gives up and goes back to bed, closing the door on 'the author' as if he were someone else. The shift into the third person suggests the poet watching himself: resolution, or perhaps just avoidance.",
      },
    ],
    keyQuotes: [
      'The moon rolls over the roof and falls behind / my house',
      'I am talking about myself',
    ],
  },
  {
    // 2 October 2026: the card quoted 44 words of a poem in copyright whose share here is 20,
    // and "I was a child then, and now I am old" is not in the poem. Cambridge's printing is not
    // held here; quotations are checked against the text Poem Hunter prints.
    title: 'Horses',
    poet: 'Edwin Muir',
    themes: ['Childhood memory', "Nature's power", 'Awe and fear', 'The passage of time'],
    form: 'Rhyming couplets in iambic pentameter, giving the poem a stately, measured quality that contrasts with the wild energy of the horses.',
    summary:
      'The speaker recalls childhood memories of seeing heavy farm horses, which appeared terrifying, ancient, and almost mythological. The adult speaker reflects on how the childhood vision of the horses has become a permanent, haunting memory.',
    analysis: [
      {
        point: 'Scale and power',
        detail:
          '"Their conquering hooves which trod the stubble down" - the word \'conquering\' elevates the horses to warrior-like status, and the heavy stresses mimic the rhythmic pounding of their movement.',
      },
      {
        point: 'Elemental imagery',
        detail:
          "Later the horses' eyes are likened to the night, vast and brilliant, with a terrible, end-of-the-world glow. They are not merely animals but embodiments of natural power, linked to darkness and vastness.",
      },
      {
        point: 'Childhood perspective',
        detail:
          'The adult speaker wonders why the horses suddenly seem so terrible, and whether "some childish hour has come again". The awe of childhood returns rather than fading, suggesting some experiences are so powerful they outlast time.',
      },
      {
        point: 'Mythological quality',
        detail:
          'The horses take on an almost archetypal quality, moving beyond individual memory into something universal. Muir, influenced by Jung, often used images of horses as symbols of primal energy and the collective unconscious.',
      },
    ],
    keyQuotes: [
      'Their conquering hooves which trod the stubble down',
      'Perhaps some childish hour has come again',
      'Ah, now it fades!',
    ],
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default async function PoetryAnalysisPage() {
  // Resolve AR via server-side t() helper + content.ts fallback
  const _hdrs = await (await import('next/headers')).headers()
  const _lang = _hdrs.get('x-lang') === 'ar' ? 'ar' : 'en'
  const _tr = (en: string): string => {
    if (_lang !== 'ar') return en
    for (const v of Object.values(_EAL_STRINGS)) if (v.en === en) return v.ar || en
    return en
  }
  // Note: this server component reads from content.ts directly; the
  // server-side t() helper resolves the locale from the request header.

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Poetry Analysis
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            In-depth analysis of poems from Songs of Ourselves, with comparison techniques and
            guidance on how Cambridge marks poetry responses.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Cambridge syllabus set-text notice ─────────────────────── */}
        <div className="mb-10 rounded-lg border border-amber-500/30 bg-amber-500/10 p-5 text-sm text-foreground">
          <p className="font-semibold">{_tr(`Set-text notice`)}</p>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            This cluster is based on the Cambridge IGCSE 0475 syllabus{' '}
            <em>{_tr(`Songs of Ourselves`)}</em> Vol&nbsp;1 Part&nbsp;4 plus the Ted Hughes cluster
            (<em>{_tr(`The Thought-Fox`)}</em>, <em>{_tr(`Hawk Roosting`)}</em>, <em>Wind</em>).
            Cambridge International rotates set texts every two years &mdash; always confirm via{' '}
            <a
              href="https://www.cambridgeinternational.org/syllabus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridgeinternational.org/syllabus
            </a>{' '}
            before relying on this list for the current exam window. The poems analysed below are
            legacy reference choices from the wider <em>{_tr(`Songs of Ourselves`)}</em> anthology
            &mdash; use them as templates for technique, comparison, and AO coverage.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            <strong className="text-foreground">{_tr(`Cluster rights:`)}</strong> Four poems in the
            verified Vol&nbsp;1 Part&nbsp;4 + Hughes clusters are in copyright (Atwood, Auden,
            Hughes&nbsp;&times;3). Quotations are short fair-dealing extracts. Anthology publisher:
            Cambridge University Press (
            <a
              href="https://www.cambridge.org/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
            >
              cambridge.org/permissions
            </a>
            ).
          </p>
        </div>

        {/* ── How Cambridge marks poetry ──────────────────────────── */}
        <section aria-labelledby="marking-heading">
          <h2 id="marking-heading" className="text-2xl font-bold text-foreground">
            How Cambridge Marks Poetry Responses
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">
                Band 6 (Excellent) &mdash; 21&ndash;25 marks
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; Demonstrates <strong>critical understanding</strong> and{' '}
                  <strong>personal engagement</strong>
                </li>
                <li>
                  &bull; Makes <strong>precise, well-integrated</strong> references to the text
                </li>
                <li>
                  &bull; Shows sophisticated analysis of{' '}
                  <strong>how the writer achieves effects</strong>
                </li>
                <li>
                  &bull; Explores <strong>multiple interpretations</strong> where appropriate
                </li>
                <li>
                  &bull; Uses <strong>literary terminology accurately</strong> and purposefully
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground">{_tr(`What markers look for`)}</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; <strong>{_tr(`Close reading:`)}</strong> analysis of specific words and
                  phrases, not just general themes
                </li>
                <li>
                  &bull; <strong>{_tr(`Writer’s methods:`)}</strong> how form, structure, and
                  language create meaning
                </li>
                <li>
                  &bull; <strong>{_tr(`Personal response:`)}</strong> genuine engagement, not
                  formulaic analysis
                </li>
                <li>
                  &bull; <strong>Comparison:</strong> when comparing poems, sustained and integrated
                  comparison throughout (not &ldquo;poem A then poem B&rdquo;)
                </li>
                <li>
                  &bull; <strong>Context:</strong> used to illuminate the text, not as a bolt-on
                  paragraph
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Comparison techniques ───────────────────────────────── */}
        <section aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="text-2xl font-bold text-foreground">
            Comparison Techniques
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">{_tr(`Structuring a Comparison`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cambridge rewards <strong>integrated comparison</strong>. Rather than writing about
                Poem A and then Poem B, weave your analysis together using connectives such as:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Similarly,',
                  'In contrast,',
                  'While [Poet A] uses..., [Poet B] instead...',
                  'Both poets explore... however...',
                  'Unlike...',
                  'This differs from...',
                  'Equally,',
                  'Whereas...',
                ].map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">{_tr(`What to Compare`)}</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>
                  &bull; <strong>Theme:</strong> How does each poem explore the topic? What
                  attitudes does each poet convey?
                </li>
                <li>
                  &bull; <strong>{_tr(`Tone and mood:`)}</strong> Is the tone celebratory, elegiac,
                  angry, reflective?
                </li>
                <li>
                  &bull; <strong>{_tr(`Form and structure:`)}</strong> Sonnet vs. free verse?
                  Regular stanzas vs. irregular? How does form support meaning?
                </li>
                <li>
                  &bull; <strong>{_tr(`Language and imagery:`)}</strong> Metaphor, simile,
                  personification, sound devices &mdash; how do they differ?
                </li>
                <li>
                  &bull; <strong>{_tr(`Speaker and perspective:`)}</strong> First person vs. third
                  person? Personal vs. dramatic?
                </li>
                <li>
                  &bull; <strong>Ending:</strong> How does each poem resolve (or refuse to resolve)?
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">
                {_tr(`Example Comparison Pairings`)}
              </h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Time and transience:</strong> &ldquo;Ozymandias&rdquo; and &ldquo;Sonnet
                  18&rdquo; &mdash; both explore what endures, but Shelley focuses on political
                  power while Shakespeare focuses on love and art.
                </li>
                <li>
                  <strong>Childhood memory:</strong> &ldquo;Piano&rdquo; and &ldquo;Half-Past
                  Two&rdquo; &mdash; both present childhood as a lost world, but Lawrence treats it
                  with aching nostalgia while Fanthorpe uses humour and playful language.
                </li>
                <li>
                  <strong>{_tr(`Power and nature:`)}</strong> &ldquo;Hawk Roosting&rdquo; and
                  &ldquo;Horses&rdquo; &mdash; both present powerful animals, but the hawk is a
                  speaker asserting dominance while the horses are observed with awe by a human
                  speaker.
                </li>
                <li>
                  <strong>Place and identity:</strong> &ldquo;Where I Come From&rdquo; and
                  &ldquo;Blessing&rdquo; &mdash; both connect landscape to human experience, but
                  Brewster explores personal identity while Dharker focuses on community and
                  survival.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Poem analyses ──────────────────────────────────────── */}
        <section aria-labelledby="poems-heading">
          <h2 id="poems-heading" className="text-2xl font-bold text-foreground">
            Poem-by-Poem Analysis ({poems.length} Poems)
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each analysis covers form, themes, key quotes, and detailed commentary suitable for
            Cambridge IGCSE responses.
          </p>

          <div className="mt-8 space-y-10">
            {poems.map((poem, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-border bg-card shadow-md overflow-hidden"
              >
                {/* Poem header */}
                <div className="border-b border-border bg-gradient-to-r from-primary/5 to-transparent px-5 py-4 sm:px-6">
                  <h3 className="text-lg font-bold text-foreground">{poem.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">by {poem.poet}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {poem.themes.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-5 px-5 py-5 sm:px-6">
                  {/* Form */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {_tr(`Form & Structure`)}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">{poem.form}</p>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Summary</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{poem.summary}</p>
                  </div>

                  {/* Detailed analysis */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {_tr(`Detailed Analysis`)}
                    </h4>
                    <div className="mt-2 space-y-3">
                      {poem.analysis.map((a, ai) => (
                        <div key={ai} className="rounded-lg bg-muted p-3">
                          <p className="text-sm font-medium text-foreground">{a.point}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key quotes */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{_tr(`Key Quotes`)}</h4>
                    <ul className="mt-2 space-y-1.5">
                      {poem.keyQuotes.map((q, qi) => (
                        <li key={qi} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="italic text-muted-foreground">&ldquo;{q}&rdquo;</span>
                        </li>
                      ))}
                    </ul>
                    {'rights' in poem && (poem as { rights?: string }).rights ? (
                      <p className="mt-3 text-xs text-muted-foreground italic">
                        {(poem as { rights?: string }).rights}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>
    </>
  )
}
