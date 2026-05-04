import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Eye,
  Feather,
  GitCompare,
  Layers,
  Lightbulb,
  ListOrdered,
  MessageSquareQuote,
  PenLine,
  Search,
  Sparkles,
  XCircle,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Unseen poetry — GCSE English Literature revision — The English Hub',
  description:
    'How to read and analyse an unseen poem in your GCSE English Literature exam. Approach, language, structure, comparison framework, practice prompts.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/unseen-poetry',
  },
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── 1. Five-step approach ────────────────────────────────────────────── */

const FIVE_STEPS = [
  {
    title: 'Read the poem twice',
    body: 'First read: follow the poem like a story. What is happening? Who is speaking? What is the mood? Second read: slow down and annotate. Circle striking words, underline imagery, mark shifts in tone. Do not start writing until you have read the poem at least twice.',
  },
  {
    title: 'Identify the big picture',
    body: 'Before you zoom in on techniques, name the poem\'s subject, speaker, and tone in one sentence. For example: "A soldier describes the horror of a gas attack in a bitter, angry tone." This keeps every paragraph anchored to meaning.',
  },
  {
    title: 'Annotate for methods',
    body: 'Work through the poem stanza by stanza. Label techniques in the margin: imagery, metaphor, enjambment, caesura, rhyme, sound effects. Aim for 6-10 annotations. Always note the effect next to the technique -- never just name it.',
  },
  {
    title: 'Plan before you write',
    body: 'Spend 3-5 minutes planning three clear paragraphs. Each paragraph needs: a point about meaning, a short embedded quotation, identification of a method, and analysis of its effect. A quick plan prevents repetition and keeps your answer focused.',
  },
  {
    title: 'Write with the What-How-Why framework',
    body: 'WHAT does the poet do? (identify technique and quote). HOW does it work? (explain the method in detail). WHY does the poet use it? (link to meaning, reader response, or theme). This framework turns feature-spotting into genuine analysis.',
  },
]

/* ── 2. Twenty poetic techniques ──────────────────────────────────────── */

const TECHNIQUES = [
  {
    name: 'Alliteration',
    definition: 'Repetition of the same consonant sound at the start of nearby words.',
    example: '"Peter Piper picked a peck of pickled peppers"',
    effect:
      'Creates rhythm, draws attention to a phrase, or mimics a sound. Harsh consonants (b, d, k) can feel aggressive; soft ones (l, m, s) can feel gentle.',
  },
  {
    name: 'Assonance',
    definition: 'Repetition of vowel sounds within nearby words.',
    example: '"the rain in Spain stays mainly on the plain"',
    effect:
      'Creates internal harmony and musicality. Long vowel sounds (oo, ee, ay) can slow the pace and create a mournful or reflective tone.',
  },
  {
    name: 'Sibilance',
    definition: 'Repetition of "s", "sh", "z", or soft "c" sounds.',
    example: '"the lone and level sands stretch far away"',
    effect:
      'Can create a whispering, sinister, or soothing effect depending on context. Often mimics natural sounds like wind or water.',
  },
  {
    name: 'Onomatopoeia',
    definition: 'A word that imitates the sound it describes.',
    example: '"buzz", "crash", "gargling", "guttering"',
    effect:
      'Makes descriptions more vivid and sensory by letting the reader hear the sound. Often used in war poetry for impact.',
  },
  {
    name: 'Metaphor',
    definition: 'An implicit comparison where one thing is said to be another.',
    example: '"Life\'s but a walking shadow" (Macbeth)',
    effect:
      'Creates a strong, direct comparison that shapes how the reader sees the subject. Encourages the reader to transfer qualities from one thing to another.',
  },
  {
    name: 'Extended metaphor',
    definition: 'A metaphor that is sustained across several lines or the whole poem.',
    example: 'Comparing life to a journey across an entire stanza.',
    effect:
      'Builds a detailed, layered comparison. Allows the poet to explore multiple aspects of an idea through a single image.',
  },
  {
    name: 'Simile',
    definition: 'A comparison using "like" or "as".',
    example: '"My love is like a red, red rose" (Burns)',
    effect:
      'Creates a clear, visual comparison. Unlike a metaphor, the simile keeps both things separate, so the reader can consider the gap between them.',
  },
  {
    name: 'Personification',
    definition: 'Giving human qualities to something non-human.',
    example: '"the wind whispered through the trees"',
    effect:
      'Makes abstract ideas or natural forces feel alive and relatable. Can create empathy, menace, or beauty depending on context.',
  },
  {
    name: 'Imagery',
    definition:
      'Language that creates a vivid sensory picture (visual, auditory, tactile, olfactory, gustatory).',
    example: '"a green light at the end of the dock"',
    effect:
      'Helps the reader see, hear, or feel the scene. Engages the senses and makes abstract ideas concrete.',
  },
  {
    name: 'Symbolism',
    definition: 'An object, colour, or image that represents a deeper meaning.',
    example: 'A dove symbolising peace; darkness symbolising evil or ignorance.',
    effect:
      'Adds layers of meaning beyond the literal. Allows the poet to communicate complex ideas concisely.',
  },
  {
    name: 'Caesura',
    definition: 'A pause in the middle of a line, created by punctuation.',
    example: '"Nothing beside remains. Round the decay" (Shelley)',
    effect:
      'Creates emphasis, forces the reader to pause and reflect, or mimics a moment of hesitation or shock. Often marks a shift in thought.',
  },
  {
    name: 'Enjambment',
    definition:
      'A sentence or phrase that runs over from one line to the next without punctuation.',
    example:
      '"I wandered lonely as a cloud / That floats on high o\'er vales and hills" (Wordsworth)',
    effect:
      'Creates momentum and flow, pulls the reader forward, or can create surprise when the meaning shifts at the line break.',
  },
  {
    name: 'End-stopped lines',
    definition: 'A line that ends with punctuation, creating a natural pause.',
    example: '"Tyger Tyger, burning bright,"',
    effect:
      'Creates a sense of completeness, control, or finality. Can slow the pace and give weight to each line.',
  },
  {
    name: 'Rhyme (full, half, internal)',
    definition:
      'Matching sounds at the end of lines (full rhyme), near-matching sounds (half/slant rhyme), or rhyme within a line (internal rhyme).',
    example: 'Full: "bright/night"; Half: "eyes/light"; Internal: "once upon a midnight dreary"',
    effect:
      'Full rhyme creates order and satisfaction. Half rhyme creates unease or instability. Internal rhyme adds pace and musicality.',
  },
  {
    name: 'Repetition',
    definition: 'Repeating a word, phrase, or structure for emphasis.',
    example: '"Tyger Tyger" (Blake); "nothing" repeated in a poem about loss.',
    effect:
      "Creates emphasis, rhythm, or an obsessive quality. Can reinforce a theme or mirror the speaker's emotional state.",
  },
  {
    name: 'Juxtaposition',
    definition: 'Placing two contrasting ideas, images, or words side by side.',
    example: '"King of Kings" beside "Nothing beside remains" (Shelley)',
    effect:
      'Highlights contrast and forces the reader to consider the difference between two things. Creates irony or shock.',
  },
  {
    name: 'Oxymoron',
    definition: 'Two contradictory words placed together.',
    example: '"bitter sweet", "living death", "cold fire"',
    effect:
      'Creates tension, paradox, or complexity. Suggests that an experience contains conflicting emotions or ideas.',
  },
  {
    name: 'Pathetic fallacy',
    definition: 'Using weather, landscape, or nature to reflect human emotions.',
    example: 'A storm during a moment of anger; sunshine during a moment of joy.',
    effect:
      'Externalises internal emotions, making them visible and dramatic. Creates atmosphere and reinforces mood.',
  },
  {
    name: 'Tone and register',
    definition:
      "The attitude or feeling conveyed by the poet's word choices (formal, colloquial, angry, tender, ironic).",
    example: 'Owen\'s bitter, sarcastic tone in "Dulce et Decorum Est".',
    effect:
      "Shapes the reader's emotional response. A shift in tone often signals a turning point in the poem.",
  },
  {
    name: 'Direct address / imperatives',
    definition: 'Speaking directly to the reader or another person, often using commands.',
    example: '"Look on my Works, ye Mighty, and despair!" (Shelley)',
    effect:
      'Creates intimacy, urgency, or confrontation. Commands can be authoritative or desperate depending on context.',
  },
]

/* ── 3. Structure concepts ────────────────────────────────────────────── */

const STRUCTURE_POINTS = [
  {
    term: 'Stanza form',
    guidance:
      'Count the stanzas and the lines per stanza. Regular stanzas (e.g. quatrains, tercets) suggest order and control. Irregular stanzas may reflect chaos, freedom, or shifting emotions. A single-stanza poem can feel relentless or claustrophobic.',
  },
  {
    term: 'Rhyme scheme',
    guidance:
      'Label the end sounds with letters (ABAB, ABBA, etc.). A regular scheme creates harmony and predictability. An irregular or broken scheme can mirror disorder. Note where the rhyme breaks down -- it often coincides with a shift in meaning.',
  },
  {
    term: 'Volta (turning point)',
    guidance:
      'Look for a shift in tone, subject, or perspective -- often at the start of a new stanza or after a caesura. The volta is where the poem changes direction. In a sonnet, it traditionally appears at line 9 (Petrarchan) or the final couplet (Shakespearean).',
  },
  {
    term: 'Line length and rhythm',
    guidance:
      'Long lines can feel expansive, flowing, or breathless. Short lines create emphasis, tension, or abruptness. A sudden change in line length signals a shift in emotion. You do not need to name the metre (iambic pentameter, etc.) unless you are confident -- describing the effect of rhythm is more important.',
  },
  {
    term: 'Enjambment and end-stopping',
    guidance:
      'Enjambment pulls the reader forward and can create urgency, uncertainty, or a sense of overflow. End-stopped lines create pauses and a measured, controlled pace. Notice where the poet switches between them -- the contrast is often meaningful.',
  },
  {
    term: 'Beginning, middle, and end',
    guidance:
      "How does the poem open -- in the middle of action, with a question, with a declaration? How does it end -- with resolution, ambiguity, a return to the beginning, or a final twist? The relationship between opening and closing lines often reveals the poem's argument.",
  },
]

/* ── 5. Practice poems ────────────────────────────────────────────────── */

const PRACTICE_POEMS = [
  {
    id: 'ozymandias',
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley (1818)',
    focus: 'Power and its transience',
    poem: `I met a traveller from an antique land,
Who said\u2014"Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away."`,
    questions: [
      'How does Shelley present the power of Ozymandias, and how does he undermine it?',
      'What is the effect of the phrase "Nothing beside remains" appearing immediately after the king\'s boastful inscription?',
      "How does Shelley use the desert setting to reinforce the poem's themes?",
    ],
    modelResponse: `Shelley presents Ozymandias as a ruler who believed his power was eternal, only to have time and nature prove him utterly wrong. The inscription "My name is Ozymandias, King of Kings; / Look on my Works, ye Mighty, and despair!" uses the superlative "King of Kings" and the imperative "Look" to convey absolute authority -- Ozymandias commands other rulers to feel hopeless in comparison. The exclamation mark reinforces his arrogance and certainty.

However, Shelley immediately undercuts this with the devastating caesura in "Nothing beside remains." The blunt, monosyllabic statement stands in stark contrast to the grandiose inscription that preceded it. The full stop mid-line forces the reader to pause and absorb the irony: the "Works" Ozymandias boasted about have completely vanished. This is dramatic irony -- the king intended "despair" as a warning to rivals, but the reader understands it differently: despair because even the greatest human achievements are destroyed by time.

The desert setting reinforces this theme. "The lone and level sands stretch far away" is the poem's final image, and it belongs entirely to nature, not to Ozymandias. The alliterative "l" sounds create a soft, expansive tone, while the sibilance of "sands stretch" evokes the whispering of wind. The desert has erased the king's empire and reclaimed the landscape. Shelley's message is clear: nature and time are more powerful than any human ruler, and pride in earthly power is ultimately foolish.`,
  },
  {
    id: 'daffodils',
    title: 'I Wandered Lonely as a Cloud',
    poet: 'William Wordsworth (1807)',
    focus: 'Nature and memory',
    poem: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed\u2014and gazed\u2014but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,
    questions: [
      'How does Wordsworth use personification to present the daffodils?',
      "What is the significance of the poem's final stanza?",
      'How does Wordsworth contrast loneliness and companionship in this poem?',
    ],
    modelResponse: `Wordsworth uses personification throughout the poem to present the daffodils as living, joyful companions rather than mere flowers. They are described as "dancing in the breeze," "tossing their heads in sprightly dance," and forming "jocund company." The verb "dancing" is repeated across stanzas, creating a sense of sustained, infectious energy. By giving the daffodils human movement and sociability, Wordsworth transforms a simple natural scene into an encounter with living joy -- the daffodils become friends who cure his loneliness.

The final stanza is crucial because it shifts the poem from a past event to its lasting effect. The phrase "they flash upon that inward eye / Which is the bliss of solitude" introduces the idea that memory can be as powerful as the original experience. The verb "flash" suggests suddenness and vividness -- the image returns without warning and with full force. Wordsworth argues that solitude, which began the poem as a negative state ("lonely as a cloud"), can become "bliss" when filled with memories of nature. This is a central Romantic idea: nature nourishes the inner life.

The poem's structure mirrors this journey from isolation to joy. The opening simile, "lonely as a cloud," presents the speaker as detached and aimless. But the daffodils are a "crowd" and a "host" -- words associated with human gatherings. By the final line, "And dances with the daffodils," the speaker is no longer separate from nature but participating in it. The present tense "dances" shows this is not a one-off event but a repeatable, ongoing source of happiness.`,
  },
  {
    id: 'sonnet18',
    title: "Shall I Compare Thee to a Summer's Day? (Sonnet 18)",
    poet: 'William Shakespeare (c. 1609)',
    focus: 'Love and the power of poetry',
    poem: `Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance, or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st;
Nor shall death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
  So long as men can breathe, or eyes can see,
  So long lives this, and this gives life to thee.`,
    questions: [
      'How does Shakespeare use the extended metaphor of summer to praise the beloved?',
      'What is the "turn" (volta) in this sonnet, and how does it change the poem\'s argument?',
      "How does the final couplet complete the poem's argument about poetry and immortality?",
    ],
    modelResponse: `Shakespeare structures the poem as an argument. The opening question, "Shall I compare thee to a summer's day?", seems to propose a flattering comparison -- summer is beautiful, warm, and desirable. But Shakespeare immediately dismantles this comparison by listing summer's flaws: "Rough winds do shake the darling buds of May" and "summer's lease hath all too short a date." The personification of summer as a tenant with a short "lease" emphasises its temporary nature. The metaphor of the sun as "the eye of heaven" whose "gold complexion" is "dimm'd" by clouds shows that even the most beautiful natural phenomena are unreliable. By proving that summer is imperfect, Shakespeare elevates the beloved above nature itself.

The volta arrives at line 9 with "But thy eternal summer shall not fade." The conjunction "But" signals a decisive shift from the octave's catalogue of summer's flaws to the sestet's bold claim of permanence. The phrase "eternal summer" is an oxymoron -- summer is by definition temporary -- yet Shakespeare insists the beloved's beauty will last forever. This is because the beloved's beauty is preserved not in nature but in poetry: "in eternal lines to time thou grow'st." The word "lines" carries a double meaning -- lines of poetry and lines of life -- fusing art with existence.

The final couplet delivers the poem's triumphant conclusion: "So long as men can breathe, or eyes can see, / So long lives this, and this gives life to thee." The repeated structure ("So long...So long") creates a confident, declarative rhythm. "This" refers to the sonnet itself -- Shakespeare claims that the poem will outlast time and give the beloved a form of immortality. The present tense "gives life" makes the claim feel active and ongoing, as though the poem is performing the act of preservation even as we read it. Remarkably, Shakespeare has been proved right: the beloved is still "alive" in these lines over four hundred years later.`,
  },
  {
    id: 'tyger',
    title: 'The Tyger',
    poet: 'William Blake (1794)',
    focus: 'Creation, power, and awe',
    poem: `Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?

In what distant deeps or skies,
Burnt the fire of thine eyes?
On what wings dare he aspire?
What the hand, dare seize the fire?

And what shoulder, & what art,
Could twist the sinews of thy heart?
And when thy heart began to beat,
What dread hand? & what dread feet?

What the hammer? what the chain,
In what furnace was thy brain?
What the anvil? what dread grasp,
Dare its deadly terrors clasp!

When the stars threw down their spears
And water'd heaven with their tears:
Did he smile his work to see?
Did he who made the Lamb make thee?

Tyger Tyger burning bright,
In the forests of the night:
What immortal hand or eye,
Dare frame thy fearful symmetry?`,
    questions: [
      'How does Blake use questions throughout the poem, and what is their effect?',
      "What is the significance of the poem's imagery of fire and industry?",
      'How does the final stanza differ from the first, and why does this matter?',
    ],
    modelResponse: `Blake structures the entire poem as a series of unanswered questions, which is its most powerful feature. The speaker never receives a reply, and the questions grow increasingly urgent: from "What immortal hand or eye / Could frame thy fearful symmetry?" to "Did he who made the Lamb make thee?" The effect is to place the reader in a state of awe and uncertainty. By refusing to provide answers, Blake suggests that the mystery of creation is beyond human understanding. The questions also create a relentless, driving rhythm that mirrors the hammering process of creation described within the poem.

The imagery of fire and industry dominates the middle stanzas. The tiger's creation is described in terms of a blacksmith's forge: "hammer," "chain," "furnace," and "anvil." These words evoke heat, force, and violent labour, suggesting that creating the tiger required immense power and daring. The metaphor of "burning bright" in the opening line links the tiger itself to fire -- it is not just made from fire but is fire: dangerous, beautiful, and destructive. This industrial imagery reflects Blake's awareness of the Industrial Revolution, but more importantly, it presents God (the creator) not as gentle and loving but as a powerful, fearsome craftsman willing to create something terrifying.

The final stanza repeats the first almost exactly, but with one crucial change: "Could frame" becomes "Dare frame." This single word shifts the question from ability to courage. "Could" asks whether the creator was capable; "Dare" asks whether the creator had the audacity. By the end of the poem, Blake has established that creating the tiger was not just an act of skill but an act of boldness -- perhaps even recklessness. The circular structure (returning to the opening) suggests the question remains permanently open, unresolved and haunting.`,
  },
  {
    id: 'dulce',
    title: 'Dulce et Decorum Est',
    poet: 'Wilfred Owen (1920, posthumous)',
    focus: 'War, suffering, and propaganda',
    poem: `Bent double, like old beggars under sacks,
Knock-kneed, coughing like hags, we cursed through sludge,
Till on the haunting flares we turned our backs
And towards our distant rest began to trudge.
Men marched asleep. Many had lost their boots
But limped on, blood-shod. All went lame; all blind;
Drunk with fatigue; deaf to the hoots
Of tired, outstripped Five-Nines that dropped behind.

Gas! Gas! Quick, boys!\u2014An ecstasy of fumbling,
Fitting the clumsy helmets just in time;
But someone still was yelling out and stumbling,
And flound'ring like a man in fire or lime . . .
Dim, through the misty panes and thick green light,
As under a green sea, I saw him drowning.

In all my dreams, before my helpless eyes,
He plunges at me, guttering, choking, drowning.

And if in some smothering dreams you too could pace
Behind the wagon that we flung him in,
And watch the white eyes writhing in his face,
His hanging face, like a devil's sick of sin;
If you could hear, at every jolt, the blood
Come gargling from the froth-corrupted lungs,
Obscene as cancer, bitter as the cud
Of vile, incurable sores on innocent tongues,\u2014
My friend, you would not tell with such high zest
To children ardent for some desperate glory,
The old Lie: Dulce et decorum est
Pro patria mori.`,
    questions: [
      'How does Owen use simile in the opening lines to challenge the idea of the heroic soldier?',
      'What is the effect of the shift in pace between the first stanza and "Gas! Gas! Quick, boys!"?',
      "How does Owen's direct address to the reader in the final stanza strengthen his argument?",
    ],
    modelResponse: `Owen opens with two devastating similes that immediately destroy any romantic image of soldiers: "Bent double, like old beggars under sacks" and "coughing like hags." Soldiers are traditionally presented as young, strong, and upright, but Owen compares them to the most marginalised members of society -- beggars and hags. The adjective "old" is especially powerful because these are young men who have been aged by war. The harsh consonants in "Knock-kneed, coughing" create an ugly, staccato rhythm that mirrors the physical discomfort. Owen is deliberately stripping war of its glamour from the very first line.

The shift at the start of stanza two is one of the most dramatic moments in English poetry. The slow, exhausted pace of "we cursed through sludge" and "began to trudge" is shattered by the exclamatory "Gas! Gas! Quick, boys!" The short, shouted words and exclamation marks create panic and urgency. The phrase "An ecstasy of fumbling" uses "ecstasy" ironically -- it comes from the Greek for "standing outside oneself" and here describes the frantic, out-of-body terror of a gas attack, not joy. The contrast between the trudging rhythm of stanza one and the chaotic urgency of stanza two forces the reader to experience the same shock the soldiers feel.

In the final stanza, Owen addresses the reader directly with "you" and the bitterly ironic "My friend." This is confrontational -- Owen forces civilians and propagandists to witness the death he has described. The conditional structure "if you could...you would not" builds a powerful hypothetical: if you saw what I have seen, you would never repeat the lie that dying for your country is sweet and honourable. By calling "Dulce et decorum est / Pro patria mori" the "old Lie" -- capitalising "Lie" as though it were a proper noun -- Owen elevates his attack from a personal account to a universal moral argument. The Latin phrase, normally associated with classical dignity, is exposed as hollow propaganda.`,
  },
]

/* ── 6. Comparison method ─────────────────────────────────────────────── */

const COMPARISON_STEPS = [
  {
    step: 'Find a shared theme',
    detail:
      'Before you write, identify one clear theme that both poems share (e.g. power, loss, nature, conflict). State this in your opening sentence. Everything you write should connect back to this theme.',
  },
  {
    step: 'Use a point-by-point structure',
    detail:
      'Do NOT write about Poem A for half your answer and then Poem B. Instead, make a point about both poems in each paragraph. For example: "Both poets explore the destructive nature of power, but while Shelley presents power as ultimately futile, Blake presents it as corrupting."',
  },
  {
    step: 'Compare methods, not just ideas',
    detail:
      'The examiner rewards comparison of HOW poets write, not just WHAT they write about. Compare specific techniques: "Shelley uses dramatic irony to undermine power, whereas Blake uses repetition to emphasise its oppressive nature."',
  },
  {
    step: 'Use comparison connectives',
    detail:
      'Link poems with: similarly, likewise, in contrast, whereas, on the other hand, however, both poets, while Poet A...Poet B, unlike. Aim for at least one comparison connective per paragraph.',
  },
  {
    step: 'Comment on different effects',
    detail:
      'Even when poets use similar techniques, they often create different effects. Note this: "Both poets use enjambment, but Wordsworth uses it to create a sense of freedom and overflow, while Owen uses it to convey breathless panic."',
  },
]

/* ── 7. Common mistakes ───────────────────────────────────────────────── */

const COMMON_MISTAKES = [
  {
    mistake: 'Feature-spotting without analysis',
    fix: "Never just name a technique. Always explain HOW it works and WHY the poet uses it. \"The poet uses alliteration\" earns almost no marks. \"The harsh alliterative 'd' sounds in 'dark, despairing death' create a heavy, oppressive tone that mirrors the speaker's grief\" earns significantly more.",
  },
  {
    mistake: 'Retelling the poem',
    fix: 'Do not narrate what happens in the poem line by line. The examiner has read it. Instead, select key moments and analyse the language and structure choices the poet makes.',
  },
  {
    mistake: 'Ignoring structure entirely',
    fix: 'Many students write only about language. You must comment on structure: stanza form, line length, enjambment, caesura, rhyme scheme, and volta. Structure carries meaning and examiners look for it specifically.',
  },
  {
    mistake: "Writing about the poet's life instead of the poem",
    fix: 'Biographical context (e.g. "Owen fought in WW1") can earn marks only if you link it to the poem\'s meaning. Do not write a paragraph about the poet\'s biography. Focus on the text in front of you.',
  },
  {
    mistake: 'Using vague language',
    fix: 'Avoid "this makes the reader feel sad" or "this creates a good effect." Be precise: what specific emotion? What kind of effect? "The abrupt caesura creates a jarring pause that forces the reader to confront the finality of death" is far stronger.',
  },
  {
    mistake: 'Forgetting to embed quotations',
    fix: 'Do not copy out whole lines and then comment on them. Weave short quotations (2-5 words) into your sentences: Owen describes the soldiers as "Bent double, like old beggars," immediately stripping them of dignity.',
  },
  {
    mistake: 'Only writing about one part of the poem',
    fix: "Cover the whole poem. If you only analyse the first stanza, you miss the volta, the ending, and the poem's overall argument. Your annotations should span the entire text.",
  },
  {
    mistake: 'Saying "the poet uses this to engage the reader"',
    fix: 'This is a filler phrase that says nothing specific. Instead, explain what the reader thinks, feels, or understands as a result of the technique. How does their perspective change?',
  },
  {
    mistake: 'Not planning before writing',
    fix: 'Rushing into writing without a plan leads to repetition, weak structure, and missed points. Spend 3-5 minutes identifying your three best points and selecting quotations for each.',
  },
  {
    mistake: 'Treating the comparison question as two separate essays',
    fix: 'In a comparison question, you must compare throughout. Every paragraph should reference both poems. Use comparison connectives (similarly, whereas, in contrast) to link your analysis.',
  },
]

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function UnseenPoetryGuidePage() {
  return (
    <div className="space-y-12 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Comprehensive Guide
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Eye className="mr-1 size-3" />
              All Exam Boards
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Unseen Poetry Guide
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Everything you need to approach, analyse, and write about a poem you have never seen
            before. A five-step method, twenty key techniques, five practice poems with model
            responses, and the most common mistakes to avoid.
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION 1: FIVE-STEP APPROACH
          ================================================================ */}
      <section id="five-step-approach">
        <div className="mb-5 flex items-center gap-3">
          <ListOrdered className="size-5 text-violet-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">The five-step approach</h2>
            <p className="text-body-sm text-muted-foreground">
              Follow these steps in order on every unseen poem.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FIVE_STEPS.map((step, idx) => (
            <Card
              key={step.title}
              className="transition-all hover:border-border hover:shadow-card-hover"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-semibold text-violet-300">
                    {idx + 1}
                  </div>
                  <CardTitle className="text-heading-md font-heading">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================================================================
          SECTION 2: TWENTY POETIC TECHNIQUES
          ================================================================ */}
      <section id="techniques">
        <div className="mb-5 flex items-center gap-3">
          <Search className="size-5 text-clay-600" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Key techniques to look for
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Twenty poetic techniques you should be able to identify and analyse in any unseen
              poem.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {TECHNIQUES.map((t, idx) => (
            <Card
              key={t.name}
              size="sm"
              className="transition-all hover:border-border hover:shadow-card-hover"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-md bg-amber-500/10 text-xs font-semibold text-amber-700">
                    {idx + 1}
                  </div>
                  <CardTitle className="text-heading-sm font-heading">{t.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-body-sm text-muted-foreground leading-relaxed">{t.definition}</p>
                <p className="rounded-lg border border-border/40 bg-background/40 px-3 py-2 text-xs italic text-muted-foreground">
                  {t.example}
                </p>
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                  <span className="font-medium text-muted-foreground">Effect: </span>
                  {t.effect}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================================================================
          SECTION 3: HOW TO WRITE ABOUT STRUCTURE
          ================================================================ */}
      <section id="structure">
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-blue-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              How to write about structure
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Structure is not just &ldquo;how the poem looks on the page.&rdquo; It is how the poet
              organises meaning. Here are the structural features to look for and how to discuss
              them.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="space-y-5">
              {STRUCTURE_POINTS.map((s) => (
                <div key={s.term} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-400" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.term}</p>
                    <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                      {s.guidance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4 border-violet-500/20 bg-violet-500/[0.03]">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-0.5 size-4 shrink-0 text-violet-400" />
              <div>
                <p className="text-sm font-semibold text-foreground">Examiner tip</p>
                <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                  A strong structural point often earns more marks than a language point because
                  fewer students attempt them. Even a simple observation like &ldquo;The poem is a
                  single stanza with no breaks, which creates a relentless, claustrophobic effect
                  that mirrors the speaker&rsquo;s inability to escape&rdquo; can be very effective.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ================================================================
          SECTION 4: HOW TO WRITE ABOUT LANGUAGE (WHAT-HOW-WHY)
          ================================================================ */}
      <section id="language">
        <div className="mb-5 flex items-center gap-3">
          <PenLine className="size-5 text-emerald-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              How to write about language
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Use the What-How-Why framework to turn feature-spotting into genuine analysis.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-emerald-500/20 bg-emerald-500/[0.03]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-sm font-bold text-emerald-300">
                  W
                </div>
                <CardTitle className="text-heading-md font-heading">What</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                What does the poet do? Identify the technique and embed a short quotation. Be
                specific: not just &ldquo;imagery&rdquo; but &ldquo;visual imagery of decay&rdquo;
                or &ldquo;violent metaphor.&rdquo;
              </p>
              <p className="mt-3 rounded-lg border border-border/40 bg-background/40 px-3 py-2 text-xs italic text-muted-foreground">
                &ldquo;Owen uses the simile &lsquo;like old beggars under sacks&rsquo; to describe
                the soldiers.&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/20 bg-emerald-500/[0.03]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-sm font-bold text-emerald-300">
                  H
                </div>
                <CardTitle className="text-heading-md font-heading">How</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                How does the technique work? Explain the mechanics: what does the comparison
                suggest? What associations does the word carry? How does the sound or rhythm create
                an effect?
              </p>
              <p className="mt-3 rounded-lg border border-border/40 bg-background/40 px-3 py-2 text-xs italic text-muted-foreground">
                &ldquo;Beggars are associated with poverty, age, and suffering &mdash; the opposite
                of the strong, heroic soldier image that propaganda promoted.&rdquo;
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-500/20 bg-emerald-500/[0.03]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-sm font-bold text-emerald-300">
                  Y
                </div>
                <CardTitle className="text-heading-md font-heading">Why</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                Why does the poet use this technique here? Link to the poem&rsquo;s theme, the
                speaker&rsquo;s feelings, or the reader&rsquo;s response. This is where you show
                understanding of meaning.
              </p>
              <p className="mt-3 rounded-lg border border-border/40 bg-background/40 px-3 py-2 text-xs italic text-muted-foreground">
                &ldquo;Owen strips the soldiers of dignity to challenge the reader&rsquo;s
                assumptions about war and expose the reality behind patriotic rhetoric.&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-4">
          <CardContent className="p-5 sm:p-6">
            <p className="text-sm font-semibold text-foreground mb-3">
              Full example paragraph (What-How-Why combined)
            </p>
            <blockquote className="border-l-2 border-emerald-500/40 pl-4 text-body-sm text-muted-foreground leading-relaxed">
              Owen uses the simile &ldquo;like old beggars under sacks&rdquo; to describe soldiers
              returning from the front line. Beggars are associated with poverty, exhaustion, and
              social rejection &mdash; the complete opposite of the heroic, upright soldier
              celebrated in wartime propaganda. By comparing young soldiers to elderly, broken
              figures, Owen strips them of the dignity and glory that pro-war rhetoric had promised.
              This forces the reader to confront the physical and emotional destruction that war
              inflicts, setting up the poem&rsquo;s central argument that the Latin motto
              &ldquo;Dulce et decorum est pro patria mori&rdquo; is a lie.
            </blockquote>
          </CardContent>
        </Card>
      </section>

      {/* ================================================================
          SECTION 5: PRACTICE POEMS
          ================================================================ */}
      <section id="practice-poems">
        <div className="mb-5 flex items-center gap-3">
          <Feather className="size-5 text-rose-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Practice poems with model responses
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Five public domain poems with guided analysis questions. Try to answer the questions
              yourself before revealing the model response.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {PRACTICE_POEMS.map((p) => (
            <Card key={p.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
                    <BookOpen className="size-5 text-rose-400" />
                  </div>
                  <div>
                    <CardTitle className="text-heading-md font-heading">{p.title}</CardTitle>
                    <p className="text-xs text-muted-foreground">{p.poet}</p>
                  </div>
                  <Badge variant="outline" className="text-muted-foreground text-[0.65rem]">
                    Focus: {p.focus}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* The poem text */}
                <div className="rounded-xl border border-border/40 bg-background/40 p-4 sm:p-5">
                  <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed text-foreground/90">
                    {p.poem}
                  </pre>
                </div>

                {/* Guided questions */}
                <div>
                  <p className="mb-3 text-sm font-semibold text-foreground flex items-center gap-2">
                    <MessageSquareQuote className="size-4 text-clay-600" />
                    Analysis questions
                  </p>
                  <ol className="list-decimal space-y-2 pl-5">
                    {p.questions.map((q, idx) => (
                      <li key={idx} className="text-body-sm text-muted-foreground leading-relaxed">
                        {q}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Model response (collapsible) */}
                <details className="group rounded-xl border border-border/40 bg-background/40">
                  <summary className="flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-semibold text-foreground select-none hover:bg-muted/40 rounded-xl transition-colors">
                    <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-open:rotate-90" />
                    Reveal model response
                  </summary>
                  <div className="border-t border-border/40 px-4 py-4 sm:px-5">
                    <div className="prose-sm max-w-none">
                      {p.modelResponse.split('\n\n').map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="mb-4 text-body-sm text-muted-foreground leading-relaxed last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================================================================
          SECTION 6: COMPARISON TECHNIQUE
          ================================================================ */}
      <section id="comparison">
        <div className="mb-5 flex items-center gap-3">
          <GitCompare className="size-5 text-cyan-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              How to compare two unseen poems
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Many exam boards include a comparison question. Follow these five steps to structure a
              strong comparative response.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {COMPARISON_STEPS.map((c, idx) => (
            <Card
              key={c.step}
              size="sm"
              className="transition-all hover:border-border hover:shadow-card-hover"
            >
              <CardContent className="flex items-start gap-4 p-4 sm:p-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-sm font-semibold text-cyan-300">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.step}</p>
                  <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-4">
          <CardContent className="p-5 sm:p-6">
            <p className="text-sm font-semibold text-foreground mb-3">
              Example comparison paragraph
            </p>
            <blockquote className="border-l-2 border-cyan-500/40 pl-4 text-body-sm text-muted-foreground leading-relaxed">
              Both Shelley and Owen explore the destructive consequences of power, but they focus on
              different types of destruction. In &ldquo;Ozymandias,&rdquo; Shelley uses dramatic
              irony to show how political power is destroyed by time: the boastful inscription
              &ldquo;Look on my Works, ye Mighty, and despair!&rdquo; is undercut by the image of
              &ldquo;lone and level sands&rdquo; stretching endlessly around the ruined statue. The
              destruction is quiet and gradual &mdash; nature has simply erased the king. In
              contrast, Owen presents the destruction of power through its effect on individual
              human bodies. The simile &ldquo;like old beggars under sacks&rdquo; shows soldiers
              physically broken by the power of the state that sent them to war. While
              Shelley&rsquo;s tone is detached and ironic, Owen&rsquo;s is angry and urgent,
              addressing the reader directly with &ldquo;My friend, you would not tell...the old
              Lie.&rdquo; Both poets ultimately argue that power built on suffering or arrogance
              cannot endure, but Owen makes the human cost viscerally present in a way that
              Shelley&rsquo;s historical perspective does not.
            </blockquote>
          </CardContent>
        </Card>
      </section>

      {/* ================================================================
          SECTION 7: COMMON MISTAKES
          ================================================================ */}
      <section id="common-mistakes">
        <div className="mb-5 flex items-center gap-3">
          <AlertTriangle className="size-5 text-red-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">Ten common mistakes</h2>
            <p className="text-body-sm text-muted-foreground">
              These are the errors examiners see most often. Avoiding them will immediately improve
              your grade.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {COMMON_MISTAKES.map((m, idx) => (
            <Card
              key={idx}
              size="sm"
              className="transition-all hover:border-border hover:shadow-card-hover"
            >
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-start gap-3 mb-2">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-red-400" />
                  <p className="text-sm font-semibold text-foreground">{m.mistake}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{m.fix}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Back to Poetry CTA ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-violet-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Ready to study the anthology?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Head back to the Poetry hub to explore Power and Conflict, Love and Relationships, and
          your full set of anthology poems.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry" />}
        >
          Back to Poetry Hub
          <ArrowRight className="size-4" />
        </Button>
      </section>

      {/* ── Public domain notice ──────────────────────────────────── */}
      <p className="text-xs text-muted-foreground border-t border-border/60 pt-4">
        All poems on this page are in the public domain. &ldquo;Ozymandias&rdquo; by Percy Bysshe
        Shelley (1818), &ldquo;I Wandered Lonely as a Cloud&rdquo; by William Wordsworth (1807),
        &ldquo;Sonnet 18&rdquo; by William Shakespeare (c.&nbsp;1609), &ldquo;The Tyger&rdquo; by
        William Blake (1794), and &ldquo;Dulce et Decorum Est&rdquo; by Wilfred Owen (1920,
        posthumous). Quotations are reproduced freely for educational purposes.
      </p>
    </div>
  )
}
