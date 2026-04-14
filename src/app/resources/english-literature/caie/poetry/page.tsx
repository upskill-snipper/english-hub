import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/poetry' },
  title: "Poetry Analysis - Cambridge IGCSE English Literature",
  description:
    "In-depth analysis of Songs of Ourselves poems for Cambridge IGCSE English Literature. 10+ poems with full analysis, comparison techniques, and marking guidance.",
};

/* ─── Poem data ──────────────────────────────────────────────── */

const poems = [
  {
    title: "Sonnet 18 ('Shall I compare thee to a summer's day?')",
    poet: "William Shakespeare",
    themes: ["Love", "Beauty", "Immortality through art", "Time"],
    form: "Shakespearean sonnet (three quatrains and a couplet, ABAB CDCD EFEF GG, iambic pentameter).",
    summary:
      "The speaker considers comparing the beloved to a summer's day but concludes that the beloved surpasses summer because summer is impermanent. The final couplet asserts that the poem itself will immortalise the beloved's beauty.",
    analysis: [
      {
        point: "Opening rhetorical question",
        detail:
          "\"Shall I compare thee to a summer's day?\" immediately sets up the comparison only to dismantle it. The interrogative form creates a conversational, intimate tone.",
      },
      {
        point: "Cataloguing summer's flaws",
        detail:
          "\"Rough winds do shake the darling buds of May\" and \"summer's lease hath all too short a date\" present summer as imperfect and transient. The personification of summer having a 'lease' introduces a legal metaphor suggesting temporary possession.",
      },
      {
        point: "The volta",
        detail:
          "\"But thy eternal summer shall not fade\" marks the turn. The conjunction 'But' pivots the argument: while nature decays, the beloved's beauty is preserved. The oxymoron 'eternal summer' defies the mortality established earlier.",
      },
      {
        point: "Concluding couplet and immortality",
        detail:
          "\"So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.\" The poem's bold claim is that poetry conquers time. The repeated 'So long' creates a conditional that, paradoxically, has now lasted over 400 years, proving its own argument.",
      },
    ],
    keyQuotes: [
      "Shall I compare thee to a summer's day? / Thou art more lovely and more temperate",
      "Rough winds do shake the darling buds of May",
      "But thy eternal summer shall not fade",
      "So long lives this, and this gives life to thee",
    ],
  },
  {
    title: "Ozymandias",
    poet: "Percy Bysshe Shelley",
    themes: ["Power", "Transience", "Pride and hubris", "Art outlasting empires"],
    form: "Irregular sonnet (loosely Petrarchan, with an unconventional rhyme scheme reflecting the ruined statue's broken form).",
    summary:
      "A traveller describes encountering a shattered statue in the desert. The inscription boasts of the ruler Ozymandias's power, but the surrounding emptiness undercuts the claim. The poem meditates on the impermanence of political power.",
    analysis: [
      {
        point: "Framing narrative",
        detail:
          "\"I met a traveller from an antique land\" distances the speaker from the scene through a second-hand account. This layered narration (poet > traveller > sculptor > Ozymandias) mirrors how power becomes diluted over time.",
      },
      {
        point: "The sculptor's skill",
        detail:
          "\"The hand that mocked them, and the heart that fed\" contains a double meaning: 'mocked' means both 'imitated' (sculpted) and 'ridiculed'. The sculptor's art has outlasted the king's empire, subtly asserting the superiority of art over political power.",
      },
      {
        point: "The inscription",
        detail:
          "\"Look on my Works, ye Mighty, and despair!\" is deeply ironic. The imperative and capitalised 'Works' convey Ozymandias's arrogance, but the 'Works' have crumbled. The intended audience ('ye Mighty') should despair not at his power but at the futility of all power.",
      },
      {
        point: "The emptiness",
        detail:
          "\"Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare / The lone and level sands stretch far away.\" The alliteration of 'boundless and bare' and 'lone and level' creates a vast, empty soundscape. The final image is of absence, not presence.",
      },
    ],
    keyQuotes: [
      "Two vast and trunkless legs of stone / Stand in the desert",
      "Half sunk a shattered visage lies, whose frown, / And wrinkled lip, and sneer of cold command",
      "Look on my Works, ye Mighty, and despair!",
      "Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare",
    ],
  },
  {
    title: "The Night of the Scorpion",
    poet: "Nissim Ezekiel",
    themes: ["Suffering", "Community", "Superstition versus reason", "Maternal love"],
    form: "Free verse with long, enjambed lines creating a breathless, narrative rhythm. No regular rhyme scheme.",
    summary:
      "The speaker recalls a night when his mother was stung by a scorpion. Villagers gather, offering prayers and superstitious remedies. The father, a rationalist, tries practical solutions. The mother's only concern on recovery is gratitude that the scorpion stung her rather than her children.",
    analysis: [
      {
        point: "The villagers' response",
        detail:
          "\"They said\" is repeated obsessively, creating a choral, ritualistic effect. The villagers' superstitions (that the poison purifies sin, that suffering reduces evil) are presented without overt mockery but with implicit irony: their words do not help.",
      },
      {
        point: "The father's rationalism",
        detail:
          "\"My father, sceptic, rationalist\" tries 'every curse and blessing, / powder, mixture, herb and hybrid'. The listing technique and juxtaposition of 'curse and blessing' show that even the rationalist, in desperation, resorts to superstition.",
      },
      {
        point: "The mother's selflessness",
        detail:
          "The poem's final three lines are devastatingly simple: \"My mother only said / Thank God the scorpion picked on me / and spared my children.\" After 45 lines of communal noise, her quiet gratitude is the only genuine response. The understatement makes it profoundly moving.",
      },
      {
        point: "Structure and form",
        detail:
          "The poem is essentially one long stanza followed by a three-line conclusion. The lack of stanza breaks mirrors the unrelenting night of suffering, while the brevity of the ending creates a powerful contrast.",
      },
    ],
    keyQuotes: [
      "I remember the night my mother / was stung by a scorpion",
      "they said the scorpion / ... would burn away his sins",
      "My father, sceptic, rationalist",
      "My mother only said / Thank God the scorpion picked on me / and spared my children",
    ],
  },
  {
    title: "Where I Come From",
    poet: "Elizabeth Brewster",
    themes: ["Identity", "Place and belonging", "Nature versus urban life", "Memory"],
    form: "Free verse in two stanzas, contrasting urban and rural environments.",
    summary:
      "The poem contrasts city and rural identities. The first stanza describes city-dwellers who 'carry their cities with them' in the form of urban sensory impressions. The second stanza describes the speaker's rural origins, rich with natural imagery and a sense of rootedness.",
    analysis: [
      {
        point: "Urban imagery",
        detail:
          "\"People carry their landscapes with them / the way they carry their own names\" establishes the central metaphor: identity is shaped by place. The urban landscape is characterised by 'museums, cathedrals, / subways' and the 'smell of traffic'.",
      },
      {
        point: "Rural imagery",
        detail:
          "\"Mine is a world of spruce and birch\" introduces a vivid natural world. The specific tree names create authenticity. The 'smell of horses and cattle' contrasts with the city's 'smell of traffic', suggesting a more organic, grounded identity.",
      },
      {
        point: "Sensory language",
        detail:
          "The poem engages multiple senses: smell ('traffic', 'horses'), sight ('blueberries', 'spring floods'), touch (implied cold of 'ice and snow'). This synaesthesia creates an immersive sense of place.",
      },
      {
        point: "Tone and nostalgia",
        detail:
          "The final image of \"old logs / crumbling in the cellar\" suggests decay and the passage of time. The speaker's landscape is partly a memory, making the poem elegiac as well as celebratory.",
      },
    ],
    keyQuotes: [
      "People carry their landscapes with them / the way they carry their own names",
      "the smell of subways / … the click of machines",
      "Mine is a world of spruce and birch",
      "old wood crumbling in the cellar",
    ],
  },
  {
    title: "Piano",
    poet: "D.H. Lawrence",
    themes: ["Memory and nostalgia", "Childhood", "Loss of innocence", "Music and emotion"],
    form: "Three quatrains with AABB rhyme scheme, creating a song-like, musical quality that mirrors the poem's subject.",
    summary:
      "The speaker hears a woman singing and is involuntarily transported back to childhood memories of sitting under his mother's piano. Despite resisting, he is overwhelmed by nostalgia and weeps for the past.",
    analysis: [
      {
        point: "The trigger of memory",
        detail:
          "\"Softly, in the dusk, a woman is singing to me\" sets a gentle, intimate tone. The music acts as a Proustian trigger, unlocking memories the speaker cannot control. The adverb 'softly' suggests the memory creeps up on him.",
      },
      {
        point: "Resistance and surrender",
        detail:
          "\"In spite of myself, the insidious mastery of song / Betrays me back\" — the speaker fights the pull of nostalgia. 'Insidious' and 'Betrays' are negative words, suggesting he views nostalgia as a weakness. Yet he cannot resist.",
      },
      {
        point: "Childhood detail",
        detail:
          "\"A child sitting under the piano, in the boom of the tinkling strings\" — the juxtaposition of 'boom' and 'tinkling' captures both the physical vibration of the instrument and its delicate sound. The child sits beneath the piano, suggesting smallness and protection.",
      },
      {
        point: "The ending",
        detail:
          "\"The glamour / Of childish days is upon me, my manhood is cast / Down in the flood of remembrance, and I weep like a child.\" The enjambment of 'cast / Down' enacts the fall. 'Manhood' is defeated by childhood memory; the simile 'weep like a child' is both literal and ironic, as weeping makes him childlike again.",
      },
    ],
    keyQuotes: [
      "Softly, in the dusk, a woman is singing to me",
      "the insidious mastery of song / Betrays me back",
      "A child sitting under the piano, in the boom of the tinkling strings",
      "my manhood is cast / Down in the flood of remembrance, and I weep like a child",
    ],
  },
  {
    title: "Hide and Seek",
    poet: "Vernon Scannell",
    themes: ["Childhood", "Isolation", "Growing up", "Loss and abandonment"],
    form: "Free verse, second-person address ('you'), creating immediacy and drawing the reader into the child's experience.",
    summary:
      "A child plays hide and seek, hiding so well that the other children give up looking and leave. The child emerges triumphant to discover everyone has gone. The poem works as an extended metaphor for growing up and finding yourself alone.",
    analysis: [
      {
        point: "Second-person narration",
        detail:
          "\"Call out. Call out just once then hide and seek.\" The imperative verbs and 'you' address make the reader the child. This technique creates a visceral, immediate experience and allows the final revelation to hit harder.",
      },
      {
        point: "Sensory concealment",
        detail:
          "\"The cold wood smells of itself\" and \"the sacks ... smell of seaside\" ground the hiding place in specific textures. The child's world shrinks to what can be sensed in the dark, mimicking the claustrophobic experience.",
      },
      {
        point: "Turning point",
        detail:
          "\"The game is over. / Come out, come out\" — the shift from others calling to silence is abrupt. The child's triumph ('I've won! Here I am!') is immediately undercut by the emptiness.",
      },
      {
        point: "The final line",
        detail:
          "\"The darkening garden watches. Nothing stirs. / But the bushes hold their breath. The sun is gone.\" Pathetic fallacy transforms the garden into something watchful and ominous. 'The sun is gone' works literally (evening) and metaphorically (loss of warmth, innocence, childhood).",
      },
    ],
    keyQuotes: [
      "Call out. Call out just once then hide and seek",
      "The cold wood smells of itself",
      "Yes here I am! Come and own up I've caught you!",
      "The darkening garden watches. Nothing stirs. / But the bushes hold their breath. The sun is gone",
    ],
  },
  {
    title: "Hawk Roosting",
    poet: "Ted Hughes",
    themes: ["Power and control", "Nature", "Violence", "Arrogance"],
    form: "Six four-line stanzas, no rhyme scheme. The controlled form mirrors the hawk's sense of absolute authority.",
    summary:
      "A hawk speaks in first person, describing its position at the top of the natural order. It sees the world as existing for its convenience and asserts its right to kill without justification. The poem can be read as a study of power, dictatorship, or the amoral logic of nature.",
    analysis: [
      {
        point: "First-person perspective",
        detail:
          "\"I sit in the top of the wood, my eyes closed.\" The hawk's 'I' dominates every stanza. The first-person monologue allows no alternative perspective, mirroring the totalitarian nature of absolute power.",
      },
      {
        point: "God-like self-image",
        detail:
          "\"It took the whole of Creation / To produce my foot, my each feather\" — the hawk sees itself as the pinnacle of evolution, the purpose of Creation. The capitalisation of 'Creation' suggests divine origin, elevating the hawk to godlike status.",
      },
      {
        point: "Violence without apology",
        detail:
          "\"I kill where I please because it is all mine\" is chillingly matter-of-fact. The absence of moral language (no guilt, no justification) makes the violence more disturbing. The hawk does not need to explain itself.",
      },
      {
        point: "Political reading",
        detail:
          "\"No arguments assert my right\" and \"I am going to keep things like this\" echo the language of dictatorship. Hughes denied a direct political allegory, but the poem's imagery of unchallenged power invites comparison with totalitarian regimes.",
      },
    ],
    keyQuotes: [
      "I sit in the top of the wood, my eyes closed",
      "It took the whole of Creation / To produce my foot, my each feather",
      "I kill where I please because it is all mine",
      "Nothing has changed since I began. / My eye has permitted no change",
    ],
  },
  {
    title: "Blessing",
    poet: "Imtiaz Dharker",
    themes: ["Water and life", "Poverty", "Community", "Spirituality"],
    form: "Free verse with varying line lengths. Short, sparse opening lines mimic drought; longer lines later mirror the rush of water.",
    summary:
      "In a drought-stricken area, a municipal water pipe bursts. The community rushes to collect water. The poem celebrates this moment of abundance while acknowledging the constant reality of scarcity.",
    analysis: [
      {
        point: "Opening imagery",
        detail:
          "\"The skin cracks like a pod.\" The simile is startling: human skin is compared to dried vegetation, suggesting people and landscape suffer equally. The short sentence mimics the brittleness of drought.",
      },
      {
        point: "Religious language",
        detail:
          "The title 'Blessing' and phrases like 'the voice of a kindly god' frame water as divine gift. 'Congregation' describes the gathering crowd, transforming a burst pipe into a sacred event. For these people, water is miraculous.",
      },
      {
        point: "Sound and movement",
        detail:
          "\"the rush of fortune ... silver crashes to the ground\" — the onomatopoeia and dynamic verbs create a sense of urgent, joyful chaos. The sibilance in 'silver' and 'crashes' mimics the sound of flowing water.",
      },
      {
        point: "The ending",
        detail:
          "\"the small bones of her feet\" — this intimate, fragile image of a child in the water is beautiful but also poignant. The 'small bones' remind us of vulnerability; the blessing is temporary, the poverty enduring.",
      },
    ],
    keyQuotes: [
      "The skin cracks like a pod",
      "the voice of a kindly god",
      "silver crashes to the ground / and the water gathers",
      "over the small bones of her feet",
    ],
  },
  {
    title: "Half-Past Two",
    poet: "U.A. Fanthorpe",
    themes: ["Childhood perception", "Time", "Authority", "Imagination"],
    form: "Free verse with compound words ('schooltime', 'gettinguptime') that mimic a child's invented language.",
    summary:
      "A young child is kept behind after school as punishment but cannot tell the time. The teacher forgets him. Without the structure of clock-time, the child enters a timeless, imaginative space. When the teacher returns, she reimposes adult time, but the child has briefly experienced something transcendent.",
    analysis: [
      {
        point: "Compound time-words",
        detail:
          "\"He knew a lot of time: he knew Gettinguptime, Timeyouwereofftime, Taborrowsmorningtime.\" These invented compounds capture how young children structure their day through events, not numbers. The technique is both humorous and perceptive.",
      },
      {
        point: "The teacher's authority",
        detail:
          "\"She said he'd done Something Very Wrong\" — the capitalisation parodies the teacher's gravity from the child's perspective. The child does not understand the offence; he only understands the emotional weight adults impose.",
      },
      {
        point: "Timelessness",
        detail:
          "\"He was intolerably the clockless land for ever\" — once freed from imposed time, the child experiences a dreamlike state. The adverb 'intolerably' is ambiguous: is the timelessness frightening or liberating? Fanthorpe suggests both.",
      },
      {
        point: "The ending",
        detail:
          "\"And he never forgot how once by not knowing time, / he had been let out into a time outside of Time.\" The capitalised 'Time' (abstract, transcendent) is distinguished from 'time' (mundane, clock-based). The child's ignorance becomes a form of wisdom.",
      },
    ],
    keyQuotes: [
      "He knew Gettinguptime, Timeyouwereofftime",
      "She said he'd done Something Very Wrong",
      "the clockless land for ever",
      "once by not knowing time, / he had been let out into a time outside of Time",
    ],
  },
  {
    title: "Continuum",
    poet: "Allen Curnow",
    themes: ["Creativity and writer's block", "Insomnia", "Self and identity", "The natural world"],
    form: "Free verse with enjambment that mirrors the restless, unresolved movement of the poet's mind.",
    summary:
      "The speaker, unable to sleep, steps outside and contemplates the moon and the act of writing. He struggles with creativity, feeling disconnected from the world and from language itself. The poem is about the difficulty of writing a poem.",
    analysis: [
      {
        point: "Opening line",
        detail:
          "\"The moon rolls over the roof and falls behind / my house\" — the enjambment makes the moon seem to literally fall, creating a sense of instability. The domestic setting ('my house') contrasts with the cosmic scale of the moon.",
      },
      {
        point: "Self-reflexive writing",
        detail:
          "\"A long winded poem about nothing\" — the poet's self-deprecation acknowledges the absurdity of writing about not being able to write. This metapoetic quality (a poem about poetry) is characteristic of the Songs of Ourselves anthology.",
      },
      {
        point: "Disconnection",
        detail:
          "\"I am not in this poem\" — the speaker feels alienated from his own creative output. The statement is paradoxical: he is literally in the poem (he wrote it), yet emotionally absent. This captures the feeling of creative impotence.",
      },
      {
        point: "The ending",
        detail:
          "\"and / close the door behind him on the night\" — the pronoun shift from 'I' to 'him' is significant. The poet steps outside himself, viewing himself in the third person. The closed door suggests resolution, or perhaps just avoidance.",
      },
    ],
    keyQuotes: [
      "The moon rolls over the roof and falls behind / my house",
      "the air / wood-pigeon-cool air",
      "A long winded poem about nothing",
      "close the door behind him on the night",
    ],
  },
  {
    title: "Horses",
    poet: "Edwin Muir",
    themes: ["Childhood memory", "Nature's power", "Awe and fear", "The passage of time"],
    form: "Rhyming couplets in iambic pentameter, giving the poem a stately, measured quality that contrasts with the wild energy of the horses.",
    summary:
      "The speaker recalls childhood memories of seeing heavy farm horses, which appeared terrifying, ancient, and almost mythological. The adult speaker reflects on how the childhood vision of the horses has become a permanent, haunting memory.",
    analysis: [
      {
        point: "Scale and power",
        detail:
          "\"Their conquering hooves which trod the stubble down\" — the verb 'conquering' elevates the horses to warrior-like status. The alliteration of 'hooves' and the heavy stress pattern mimic the rhythmic pounding of their movement.",
      },
      {
        point: "Elemental imagery",
        detail:
          "\"Their eyes as brilliant and as wide as night\" — the simile grants the horses cosmic qualities. They are not merely animals but embodiments of natural power, linked to darkness and vastness.",
      },
      {
        point: "Childhood perspective",
        detail:
          "\"I was a child then, and now I am old\" — the simple temporal contrast frames the poem as retrospective. The childish awe has not faded but crystallised, suggesting some experiences are so powerful they transcend time.",
      },
      {
        point: "Mythological quality",
        detail:
          "The horses take on an almost archetypal quality, moving beyond individual memory into something universal. Muir, influenced by Jung, often used images of horses as symbols of primal energy and the collective unconscious.",
      },
    ],
    keyQuotes: [
      "Those lumbering horses in the steady plough",
      "Their conquering hooves which trod the stubble down",
      "Their eyes as brilliant and as wide as night",
      "Ah, now it fades! It fades! and I must pine",
    ],
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function PoetryAnalysisPage() {
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
            In-depth analysis of poems from Songs of Ourselves, with comparison techniques
            and guidance on how Cambridge marks poetry responses.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── How Cambridge marks poetry ──────────────────────────── */}
        <section aria-labelledby="marking-heading">
          <h2 id="marking-heading" className="text-2xl font-bold text-foreground">
            How Cambridge Marks Poetry Responses
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Band 6 (Excellent) &mdash; 21&ndash;25 marks</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; Demonstrates <strong>critical understanding</strong> and <strong>personal engagement</strong></li>
                <li>&bull; Makes <strong>precise, well-integrated</strong> references to the text</li>
                <li>&bull; Shows sophisticated analysis of <strong>how the writer achieves effects</strong></li>
                <li>&bull; Explores <strong>multiple interpretations</strong> where appropriate</li>
                <li>&bull; Uses <strong>literary terminology accurately</strong> and purposefully</li>
              </ul>
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground">What markers look for</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; <strong>Close reading:</strong> analysis of specific words and phrases, not just general themes</li>
                <li>&bull; <strong>Writer&rsquo;s methods:</strong> how form, structure, and language create meaning</li>
                <li>&bull; <strong>Personal response:</strong> genuine engagement, not formulaic analysis</li>
                <li>&bull; <strong>Comparison:</strong> when comparing poems, sustained and integrated comparison throughout (not &ldquo;poem A then poem B&rdquo;)</li>
                <li>&bull; <strong>Context:</strong> used to illuminate the text, not as a bolt-on paragraph</li>
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
              <h3 className="font-semibold text-foreground">Structuring a Comparison</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Cambridge rewards <strong>integrated comparison</strong>. Rather than writing about
                Poem A and then Poem B, weave your analysis together using connectives such as:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Similarly,",
                  "In contrast,",
                  "While [Poet A] uses..., [Poet B] instead...",
                  "Both poets explore... however...",
                  "Unlike...",
                  "This differs from...",
                  "Equally,",
                  "Whereas...",
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
              <h3 className="font-semibold text-foreground">What to Compare</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>&bull; <strong>Theme:</strong> How does each poem explore the topic? What attitudes does each poet convey?</li>
                <li>&bull; <strong>Tone and mood:</strong> Is the tone celebratory, elegiac, angry, reflective?</li>
                <li>&bull; <strong>Form and structure:</strong> Sonnet vs. free verse? Regular stanzas vs. irregular? How does form support meaning?</li>
                <li>&bull; <strong>Language and imagery:</strong> Metaphor, simile, personification, sound devices &mdash; how do they differ?</li>
                <li>&bull; <strong>Speaker and perspective:</strong> First person vs. third person? Personal vs. dramatic?</li>
                <li>&bull; <strong>Ending:</strong> How does each poem resolve (or refuse to resolve)?</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Example Comparison Pairings</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Time and transience:</strong> &ldquo;Ozymandias&rdquo; and &ldquo;Sonnet 18&rdquo;
                  &mdash; both explore what endures, but Shelley focuses on political power while
                  Shakespeare focuses on love and art.
                </li>
                <li>
                  <strong>Childhood memory:</strong> &ldquo;Piano&rdquo; and &ldquo;Half-Past Two&rdquo;
                  &mdash; both present childhood as a lost world, but Lawrence treats it with aching
                  nostalgia while Fanthorpe uses humour and playful language.
                </li>
                <li>
                  <strong>Power and nature:</strong> &ldquo;Hawk Roosting&rdquo; and &ldquo;Horses&rdquo;
                  &mdash; both present powerful animals, but the hawk is a speaker asserting dominance
                  while the horses are observed with awe by a human speaker.
                </li>
                <li>
                  <strong>Place and identity:</strong> &ldquo;Where I Come From&rdquo; and &ldquo;Blessing&rdquo;
                  &mdash; both connect landscape to human experience, but Brewster explores personal
                  identity while Dharker focuses on community and survival.
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
                  <h3 className="text-lg font-bold text-foreground">
                    {poem.title}
                  </h3>
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
                    <h4 className="text-sm font-semibold text-foreground">Form &amp; Structure</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{poem.form}</p>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Summary</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{poem.summary}</p>
                  </div>

                  {/* Detailed analysis */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Detailed Analysis</h4>
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
                    <h4 className="text-sm font-semibold text-foreground">Key Quotes</h4>
                    <ul className="mt-2 space-y-1.5">
                      {poem.keyQuotes.map((q, qi) => (
                        <li
                          key={qi}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="italic text-muted-foreground">&ldquo;{q}&rdquo;</span>
                        </li>
                      ))}
                    </ul>
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
  );
}
