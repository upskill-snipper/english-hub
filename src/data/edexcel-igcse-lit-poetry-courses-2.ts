// @ts-nocheck
import type { CourseData, CourseModule, CourseQuiz } from './courses';

// ═══════════════════════════════════════════════════════════════════════════════
// Edexcel IGCSE Literature — Poetry Anthology Set 2  (Pearson 4ET1)
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// 1. La Belle Dame sans Merci — John Keats
// ─────────────────────────────────────────────────────────────────────────────

const laBelleDameModules: CourseModule[] = [
  {
    id: 'igp2-labelle-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>La Belle Dame sans Merci — John Keats (1819)</h2>

<h3>Context</h3>
<p>John Keats (1795–1821) was one of the principal figures of the English Romantic movement. He died of tuberculosis at just twenty-five, yet produced some of the most enduring poetry in the English language. <strong>"La Belle Dame sans Merci"</strong> (French for "The Beautiful Lady Without Mercy") was composed in April 1819, the same extraordinarily productive period that yielded his great odes.</p>

<p>The title is borrowed from a medieval poem by Alain Chartier (1424). Keats was deeply influenced by medieval romance and balladry, and the poem imitates the form and atmosphere of the traditional ballad. At the time of writing, Keats was falling in love with Fanny Brawne, but was also acutely aware of his deteriorating health and his inability to provide for a wife. This tension between desire and doom pervades the poem.</p>

<div class="key-term"><strong>Key Term: Literary Ballad</strong> — A poem written in deliberate imitation of the traditional folk ballad form. Literary ballads use simple language, repetition, and narrative to tell a story, but are composed by a known author rather than emerging from oral tradition.</div>

<h3>Overview of the Poem</h3>
<p>The poem is structured as a dialogue. An unnamed speaker encounters a "knight-at-arms" who is "alone and palely loitering" in a barren landscape. The knight then narrates his encounter with a mysterious, beautiful woman — "a faery's child" — who enchanted him with her beauty and song, took him to her cave, and lulled him to sleep. In a dream, pale kings and warriors warned him that "La Belle Dame sans Merci" had him in her thrall. He awoke on "the cold hill's side," alone, and has remained there ever since.</p>

<p>The poem operates on multiple levels. On the surface, it is a tale of supernatural seduction. Beneath that, it explores the <strong>destructive potential of desire</strong>, the <strong>transience of beauty and pleasure</strong>, and the <strong>paralysis that follows loss</strong>. The knight is trapped between the mortal world, which now seems barren to him, and the enchanted world, which he can never re-enter.</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Desire and enthralment:</strong> The knight is completely consumed by the lady's beauty. His love becomes a kind of captivity — he is unable to act or move on.</li>
  <li><strong>Mortality and transience:</strong> The withered landscape and the "death-pale" figures in the dream suggest that beauty and pleasure are fleeting and ultimately lead to suffering.</li>
  <li><strong>Nature and the seasons:</strong> The setting — "The sedge has wither'd from the lake, / And no birds sing" — mirrors the knight's emotional desolation. Autumn and winter symbolise decay.</li>
  <li><strong>The femme fatale:</strong> The lady is an archetype of the dangerous, beautiful woman whose allure leads men to destruction. Keats draws on centuries of literary tradition.</li>
  <li><strong>Isolation and loss:</strong> The knight is left utterly alone, unable to return to normal life. His experience has severed him from the human world.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing context, avoid simply listing biographical facts. Instead, link Keats's personal circumstances — his illness, his love for Fanny Brawne, his awareness of mortality — directly to the themes of the poem. For example: "Keats's own experience of desiring what he could not possess is reflected in the knight's enthralment."</div>
`,
    quiz: [
      {
        id: 'igp2-labelle-m1-q1',
        question: 'What does the French title "La Belle Dame sans Merci" mean?',
        options: [
          'The Beautiful Lady of the Lake',
          'The Beautiful Lady Without Mercy',
          'The Beautiful Lady Without Fear',
          'The Beautiful Lady of Sorrow',
        ],
        correct: 1,
        explanation:
          'The title translates as "The Beautiful Lady Without Mercy," establishing the central figure as both alluring and cruel — a femme fatale who enchants and then abandons her victims.',
      },
      {
        id: 'igp2-labelle-m1-q2',
        question:
          'Which literary tradition does Keats draw upon in this poem?',
        options: [
          'The epic tradition of Homer and Virgil',
          'The Augustan tradition of Pope and Dryden',
          'The medieval ballad and romance tradition',
          'The Metaphysical tradition of Donne and Herbert',
        ],
        correct: 2,
        explanation:
          'Keats deliberately imitates the medieval ballad form, using simple quatrains, archaic language, and a narrative of supernatural enchantment drawn from romance tradition.',
      },
      {
        id: 'igp2-labelle-m1-q3',
        question:
          'What personal context is relevant to Keats\'s writing of this poem?',
        options: [
          'He had recently returned from travelling in Italy',
          'He was falling in love with Fanny Brawne while suffering from tuberculosis',
          'He was grieving the death of his close friend Shelley',
          'He was celebrating his first published collection of poems',
        ],
        correct: 1,
        explanation:
          'Keats was deeply in love with Fanny Brawne but acutely aware of his declining health and inability to provide for her. This tension between desire and mortality pervades the poem.',
      },
    ],
  },
  {
    id: 'igp2-labelle-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — La Belle Dame sans Merci</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "O what can ail thee, knight-at-arms, / Alone and palely loitering?"</strong><br/>
The opening question immediately establishes mystery. The adverb <em>palely</em> suggests illness or death, while <em>loitering</em> implies purposelessness — the knight has been drained of vitality and direction. The archaic address "knight-at-arms" evokes the chivalric tradition, heightening the sense of a noble figure brought low.</p>

<p><strong>2. "The sedge has wither'd from the lake, / And no birds sing"</strong><br/>
This couplet uses <strong>pathetic fallacy</strong> to mirror the knight's inner desolation. The withered sedge and silent birds create a landscape stripped of life and beauty — reflecting the emotional wasteland left after enchantment fades. The short, declarative clause "And no birds sing" has a finality that emphasises total absence.</p>

<p><strong>3. "I met a lady in the meads, / Full beautiful — a faery's child"</strong><br/>
The dash before "a faery's child" creates a moment of revelation. She is not merely human — she belongs to the supernatural world. The word <em>meads</em> (meadows) is deliberately archaic, placing the encounter in a timeless, otherworldly setting.</p>

<p><strong>4. "Her hair was long, her foot was light, / And her eyes were wild"</strong><br/>
The tricolon of physical description builds from conventional beauty (long hair) through ethereal grace (light foot) to something unsettling: <em>wild</em> eyes. The adjective <em>wild</em> disrupts the courtly portrait and hints at danger — she is untameable and unpredictable.</p>

<p><strong>5. "She look'd at me as she did love, / And made sweet moan"</strong><br/>
The crucial phrase is <em>as she did love</em> — not "because she loved" but "as if she loved." The word <em>as</em> introduces ambiguity: her affection may be genuine or performative. This single word is the hinge on which the poem's tragedy turns.</p>

<p><strong>6. "And there she lulled me asleep"</strong><br/>
The verb <em>lulled</em> suggests gentle, maternal comfort, but also carries connotations of deception — to lull someone into a false sense of security. Sleep here becomes a metaphor for vulnerability and loss of agency.</p>

<p><strong>7. "I saw pale kings and princes too, / Pale warriors, death-pale were they all"</strong><br/>
The repetition of <em>pale</em> three times, intensifying to the compound <em>death-pale</em>, creates a haunting crescendo. These are the lady's previous victims — men of power reduced to ghostly warnings. The word <em>pale</em> connects back to the knight's own pallor in the opening stanza.</p>

<p><strong>8. "I saw their starved lips in the gloam, / With horrid warning gaped wide"</strong><br/>
<em>Starved lips</em> suggests both hunger and deprivation — the victims are eternally unfulfilled. The word <em>gloam</em> (twilight) places the vision in a liminal space between waking and sleeping, life and death. <em>Gaped wide</em> creates a grotesque, almost silent-scream image.</p>

<div class="key-term"><strong>Key Term: Ambiguity</strong> — When a word, phrase, or situation can be interpreted in more than one way. Keats uses ambiguity throughout the poem — is the lady malicious or simply supernatural? Is the knight a victim or complicit in his own enchantment?</div>

<h3>Imagery Patterns</h3>
<ul>
  <li><strong>Colour imagery:</strong> Paleness dominates — pale knight, pale kings, death-pale warriors. This is contrasted with the lady's sensory richness (flowers, honey, manna dew). The poem moves from colour to colourlessness, from life to death.</li>
  <li><strong>Natural imagery:</strong> The withered landscape frames the poem, while the enchanted world is lush with "roots of relish sweet" and "honey wild." Nature reflects both enchantment and its aftermath.</li>
  <li><strong>Sensory language:</strong> The lady appeals to all senses — sight (beauty), sound (singing), taste (honey, manna), touch (the garland, the kisses). This total sensory immersion makes the subsequent deprivation more devastating.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The word <em>as</em> in "as she did love" is one of the most important words in the poem. In an exam, zooming into single words and exploring their ambiguity demonstrates the kind of close reading that examiners reward at the highest levels.</div>
`,
    quiz: [
      {
        id: 'igp2-labelle-m2-q1',
        question:
          'What technique is used in "The sedge has wither\'d from the lake, / And no birds sing"?',
        options: [
          'Personification',
          'Pathetic fallacy',
          'Hyperbole',
          'Oxymoron',
        ],
        correct: 1,
        explanation:
          'The withered, lifeless landscape mirrors the knight\'s emotional desolation — this is pathetic fallacy, where the natural environment reflects the character\'s inner state.',
      },
      {
        id: 'igp2-labelle-m2-q2',
        question:
          'Why is the word "as" significant in "She look\'d at me as she did love"?',
        options: [
          'It confirms that the lady truly loved the knight',
          'It introduces ambiguity — she appeared to love him but may not have',
          'It is an example of archaic grammar with no special meaning',
          'It compares the lady to another character in the poem',
        ],
        correct: 1,
        explanation:
          '"As" means "as if" — it introduces uncertainty about whether the lady\'s love was genuine or a deception. This ambiguity is central to the poem\'s meaning.',
      },
      {
        id: 'igp2-labelle-m2-q3',
        question:
          'What effect does the repetition of "pale" in stanza 10 create?',
        options: [
          'It suggests the kings are physically cold',
          'It creates a haunting crescendo that links the victims to the knight\'s own pallor',
          'It emphasises the beauty of the supernatural world',
          'It shows that the knight is imagining things',
        ],
        correct: 1,
        explanation:
          'The triple repetition — "pale kings," "Pale warriors," "death-pale" — intensifies the horror and connects the dream-victims to the knight himself, who was described as "palely loitering" at the start.',
      },
    ],
  },
  {
    id: 'igp2-labelle-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — La Belle Dame sans Merci</h2>

<h3>Ballad Form</h3>
<p>Keats writes in <strong>ballad stanzas</strong> — quatrains (four-line stanzas) with an ABCB rhyme scheme. This form traditionally belonged to oral storytelling: folk ballads about love, death, and the supernatural were sung or recited. By adopting this form, Keats places his poem within a long tradition of tales about dangerous enchantment.</p>

<p>However, Keats modifies the standard ballad metre. In a traditional ballad, lines alternate between tetrameter (four stressed syllables) and trimeter (three stressed syllables). Keats follows this pattern for the first three lines of each stanza but <strong>shortens the fourth line dramatically</strong>, often to just four or five syllables. This truncation creates a sense of incompleteness — each stanza trails off, mirroring the knight's unfulfilled desire and the story's lack of resolution.</p>

<h3>Structural Organisation</h3>
<ul>
  <li><strong>Stanzas 1–3 (Frame narrative):</strong> The unnamed speaker questions the knight. The setting is established as bleak and autumnal. The knight is presented as a figure of suffering.</li>
  <li><strong>Stanzas 4–8 (The enchantment):</strong> The knight narrates his meeting with the lady. The tone shifts to one of wonder and sensory richness. Each stanza escalates the intimacy: meeting → garlands → riding → feeding → the cave.</li>
  <li><strong>Stanzas 9–11 (The dream and awakening):</strong> The knight dreams of the lady's previous victims, wakes on the cold hillside, and is left in desolation.</li>
  <li><strong>Stanza 12 (Circular return):</strong> The final stanza echoes the opening — "And this is why I sojourn here, / Alone and palely loitering" — returning us to the present and the barren landscape.</li>
</ul>

<h3>Circular Structure</h3>
<p>The poem begins and ends in the same place: the cold hillside with its withered sedge and silent birds. This <strong>circular structure</strong> reinforces the knight's entrapment. He is caught in an endless loop — unable to move forward, unable to return to the enchanted world. The repetition of the opening imagery in the final stanza suggests he will remain here indefinitely, replaying his experience without resolution.</p>

<h3>Narrative Voice and Dialogue</h3>
<p>The poem uses a <strong>frame narrative</strong>: an unnamed questioner speaks in stanzas 1–3, and the knight takes over from stanza 4 onward. This structure distances us from the events — we hear the knight's story second-hand, through his own subjective account. This raises questions about reliability: is the knight an innocent victim, or has his obsession distorted his perception?</p>

<p>The shift from third-person observation to first-person narration also mirrors the knight's journey from the external world into the private, interior world of enchantment. When the narration returns to the frame, the contrast between the two worlds is stark.</p>

<h3>The Shortened Fourth Line</h3>
<p>This is one of the poem's most distinctive formal features. Compare:</p>
<ul>
  <li>"O what can ail thee, knight-at-arms" (8 syllables)</li>
  <li>"Alone and palely loitering?" (8 syllables)</li>
  <li>"The sedge has wither'd from the lake" (8 syllables)</li>
  <li>"And no birds sing" (4 syllables)</li>
</ul>
<p>The sudden contraction of the fourth line creates a <strong>dying fall</strong> — the rhythm drops away, leaving a gap or silence. This echoes the themes of loss, absence, and incompleteness that pervade the poem.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The shortened fourth line is a gift for exam analysis. Link it explicitly to meaning: "Keats truncates the final line of each stanza, creating a rhythmic dying fall that mirrors the knight's emotional depletion and the fading of the enchantment." This connects form to meaning — exactly what examiners reward.</div>
`,
    quiz: [
      {
        id: 'igp2-labelle-m3-q1',
        question:
          'What is the effect of the shortened fourth line in each stanza?',
        options: [
          'It speeds up the pace of the poem',
          'It creates a dying fall that mirrors loss and incompleteness',
          'It makes the poem easier to sing as a song',
          'It emphasises the power of the lady',
        ],
        correct: 1,
        explanation:
          'The dramatically shortened fourth line creates a sense of trailing off — a dying fall — that echoes the knight\'s depletion and the fading of enchantment. Each stanza feels incomplete, just as the knight\'s experience is.',
      },
      {
        id: 'igp2-labelle-m3-q2',
        question: 'What is the significance of the poem\'s circular structure?',
        options: [
          'It shows the knight has learned from his experience',
          'It suggests the knight is trapped in an endless cycle of loss',
          'It indicates the lady will return to him',
          'It demonstrates that time has passed since the enchantment',
        ],
        correct: 1,
        explanation:
          'The final stanza echoes the opening, returning us to the same barren hillside. This circularity suggests the knight is trapped — unable to move on, endlessly reliving his loss.',
      },
      {
        id: 'igp2-labelle-m3-q3',
        question: 'Why does Keats use a frame narrative in this poem?',
        options: [
          'To make the poem longer and more complex',
          'To show that the unnamed speaker is the real protagonist',
          'To distance us from the events and raise questions about the knight\'s reliability',
          'To allow two different rhyme schemes to be used',
        ],
        correct: 2,
        explanation:
          'The frame narrative distances us from the enchantment — we hear the story second-hand through the knight\'s subjective account, which raises questions about whether his perception has been distorted by obsession.',
      },
    ],
  },
  {
    id: 'igp2-labelle-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — La Belle Dame sans Merci</h2>

<h3>Typical Exam Questions</h3>
<p>For the Edexcel IGCSE Literature exam (4ET1), you may be asked to analyse a specific poem in detail or to compare two poems. Typical questions on this poem might include:</p>
<ul>
  <li>"How does Keats present the theme of love in 'La Belle Dame sans Merci'?"</li>
  <li>"Explore how Keats creates a sense of loss and isolation in this poem."</li>
  <li>"How does Keats use form and structure to convey meaning in 'La Belle Dame sans Merci'?"</li>
</ul>

<h3>Planning Your Response</h3>
<p>Before writing, spend 3–5 minutes planning. Identify:</p>
<ol>
  <li><strong>Your argument:</strong> What is the poem fundamentally about? For example: "Keats presents love as a destructive force that strips the knight of agency and leaves him permanently suspended between two worlds."</li>
  <li><strong>3–4 key quotations</strong> that support your argument.</li>
  <li><strong>Techniques to analyse:</strong> Form (ballad, shortened line), language (ambiguity, sensory imagery), structure (circular, frame narrative).</li>
  <li><strong>Context:</strong> One or two relevant contextual points woven into your analysis.</li>
</ol>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Keats presents love as an annihilating force that strips the knight of identity and purpose. The lady's allure operates through total sensory immersion — "She found me roots of relish sweet, / And honey wild, and manna dew" — where the listing of exotic, natural delicacies suggests a pleasure so overwhelming it becomes intoxicating. The biblical connotation of "manna" elevates the lady's gifts to the divine, implying the knight experiences her love as a form of transcendence. However, this ecstasy is revealed as entrapment when the knight awakes "On the cold hill's side" — the stark monosyllables and the adjective "cold" brutally contrast the warmth of the enchantment. Keats reinforces this entrapment through the poem's circular structure: the final stanza returns us to the opening's "wither'd sedge" and absent birdsong, suggesting the knight is caught in an endless loop of loss. Writing during a period when his own love for Fanny Brawne was shadowed by his awareness of his fatal illness, Keats may be exploring the Romantic fear that the intensity of desire is inseparable from the certainty of its loss.</p>
</div>

<h3>What Makes This Effective?</h3>
<ul>
  <li><strong>Conceptualised argument:</strong> The paragraph is driven by the idea that love is "annihilating" — every point connects to this thesis.</li>
  <li><strong>Embedded quotations:</strong> Short quotations are woven into the sentence structure, not dropped in as separate blocks.</li>
  <li><strong>Language analysis:</strong> Individual words ("manna," "cold") are examined for their connotations and effects.</li>
  <li><strong>Form and structure:</strong> The circular structure is identified and linked to the theme of entrapment.</li>
  <li><strong>Context:</strong> Keats's personal circumstances are integrated into the literary argument, not presented as a separate biographical paragraph.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Retelling the story of the poem — "The knight meets a lady and she takes him to a cave." This earns no analytical marks. Always focus on <em>how</em> Keats creates meaning through his language, form, and structural choices.</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"Alone and palely loitering"</li>
  <li>"The sedge has wither'd from the lake, / And no birds sing"</li>
  <li>"Full beautiful — a faery's child"</li>
  <li>"Her eyes were wild"</li>
  <li>"She look'd at me as she did love"</li>
  <li>"I saw pale kings and princes too, / Pale warriors, death-pale were they all"</li>
  <li>"On the cold hill's side"</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Seven well-chosen quotations, thoroughly analysed, will score far higher than fifteen quotations merely listed. Quality of analysis always trumps quantity of evidence.</div>
`,
    quiz: [
      {
        id: 'igp2-labelle-m4-q1',
        question:
          'What should be the first step when planning an exam response on a poem?',
        options: [
          'Write down every quotation you can remember',
          'Establish your overarching argument about the poem\'s meaning',
          'List all the literary devices in the poem',
          'Write a paragraph about the poet\'s biography',
        ],
        correct: 1,
        explanation:
          'Starting with a clear, conceptualised argument gives your essay direction and coherence. Every paragraph should connect back to this central thesis.',
      },
      {
        id: 'igp2-labelle-m4-q2',
        question:
          'How should context be used in an IGCSE Literature essay?',
        options: [
          'As a separate introductory paragraph before the analysis',
          'Only in the conclusion to round off the essay',
          'Integrated into the literary analysis, linked to the writer\'s choices',
          'Context is not required for the IGCSE Literature exam',
        ],
        correct: 2,
        explanation:
          'Context should be woven into your analysis — for example, linking Keats\'s personal experience of mortality to the poem\'s themes — rather than presented as a detached biographical paragraph.',
      },
      {
        id: 'igp2-labelle-m4-q3',
        question:
          'Which of these is the strongest analytical statement about the poem?',
        options: [
          'Keats uses a metaphor when he talks about the lady',
          'The knight meets a beautiful lady and falls in love with her',
          'The circular structure traps the knight in an endless loop of loss, mirroring the inescapability of desire',
          'The poem is set in autumn, which is a season',
        ],
        correct: 2,
        explanation:
          'This statement identifies a structural feature (circular structure), names its effect (trapping the knight), and links it to a theme (inescapability of desire). It connects form to meaning — the hallmark of top-band analysis.',
      },
    ],
  },
];

const laBelleDameCourse: CourseData = {
  id: 'igcse-lit-poem-la-belle-dame',
  title: '"La Belle Dame sans Merci" — John Keats',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of Keats\'s "La Belle Dame sans Merci" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: laBelleDameModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. Poem at Thirty-Nine — Alice Walker
// ─────────────────────────────────────────────────────────────────────────────

const poemAtThirtyNineModules: CourseModule[] = [
  {
    id: 'igp2-thirty9-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>Poem at Thirty-Nine — Alice Walker (1984)</h2>

<h3>Context</h3>
<p>Alice Walker (born 1944) is an American novelist, poet, and activist, best known for her Pulitzer Prize-winning novel <em>The Color Purple</em> (1982). She grew up in rural Georgia as the eighth child of African American sharecroppers. Her father, Willie Lee Walker, was a significant influence on her life — he valued education, storytelling, and self-reliance despite the poverty and racial oppression the family endured.</p>

<p>"Poem at Thirty-Nine" was published in the collection <em>Horses Make a Landscape Look More Beautiful</em> (1984). It is a deeply personal elegy for Walker's father, who had died in 1973. The poem reflects on their relationship, her grief at his absence, and the ways in which she has inherited and transformed his values. Walker was thirty-nine when she wrote it — old enough to recognise how profoundly her father shaped her identity.</p>

<div class="key-term"><strong>Key Term: Elegy</strong> — A poem of serious reflection, typically mourning the dead. Elegies move through grief toward acceptance or celebration. Walker's poem is elegiac in tone but avoids despair, ultimately celebrating her father's legacy.</div>

<h3>Overview of the Poem</h3>
<p>The poem opens with the simple declaration "How I miss my father." Walker then reflects on specific things her father taught her — cooking, the value of money, writing, generosity. She recognises that she has become like him in many ways ("cooking, writing, chopping wood, staring into the fire") but has also forged her own identity. The poem concludes with the imagined response of her father, who would have "admired / the survey of works / I have accomplished."</p>

<p>The poem is notable for its <strong>free verse form</strong>, its <strong>conversational tone</strong>, and its use of <strong>listing</strong> to catalogue the father's influence. It moves between past and present, memory and reflection, grief and celebration.</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Parent-child relationships:</strong> The poem explores the deep bond between father and daughter, showing how parental influence shapes identity long after death.</li>
  <li><strong>Memory and grief:</strong> Walker moves from the pain of loss ("How I miss my father") to a celebration of what he gave her. Memory becomes a way of keeping the dead alive.</li>
  <li><strong>Identity and inheritance:</strong> Walker has absorbed her father's values — generosity, creativity, hard work — but has also become her own person. She is both his continuation and her own creation.</li>
  <li><strong>Gender and expectation:</strong> The poem implicitly challenges gender norms. Walker's father taught her skills (cooking, financial independence) that empowered her, and she has used them in ways that go beyond traditional expectations.</li>
  <li><strong>Writing and creativity:</strong> Writing is presented as a shared bond — her father "wrote so beautifully" and Walker has made writing her life's work. Creativity is a form of inheritance.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Walker's poem works well in comparison questions about parent-child relationships or memory. Be prepared to compare it with other poems in the anthology that deal with family bonds, loss, or the passage of time.</div>
`,
    quiz: [
      {
        id: 'igp2-thirty9-m1-q1',
        question:
          'What kind of poem is "Poem at Thirty-Nine"?',
        options: [
          'A dramatic monologue addressed to a living person',
          'A sonnet about romantic love',
          'An elegy reflecting on the death of Walker\'s father',
          'A protest poem about racial injustice',
        ],
        correct: 2,
        explanation:
          'The poem is an elegy — a reflective poem mourning Walker\'s father, who died in 1973. It moves from grief to celebration of his legacy and influence on her life.',
      },
      {
        id: 'igp2-thirty9-m1-q2',
        question:
          'What was Alice Walker\'s father\'s background?',
        options: [
          'He was a university professor in Atlanta',
          'He was an African American sharecropper in rural Georgia',
          'He was a published poet and novelist',
          'He was a civil rights lawyer in Mississippi',
        ],
        correct: 1,
        explanation:
          'Walker\'s father was a sharecropper — a poor farmer who worked land owned by someone else. Despite poverty and racial oppression, he valued education, creativity, and generosity.',
      },
      {
        id: 'igp2-thirty9-m1-q3',
        question:
          'What is the poem\'s overall emotional arc?',
        options: [
          'From happiness to despair',
          'From anger to forgiveness',
          'From grief and missing her father to celebrating his legacy',
          'From confusion to understanding',
        ],
        correct: 2,
        explanation:
          'The poem opens with the pain of loss — "How I miss my father" — but moves toward celebration, recognising how her father\'s values live on in her work and character.',
      },
    ],
  },
  {
    id: 'igp2-thirty9-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — Poem at Thirty-Nine</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "How I miss my father."</strong><br/>
The poem opens with stark simplicity. The exclamatory <em>How</em> conveys the depth of emotion, while the plain, monosyllabic language avoids sentimentality. This directness is characteristic of Walker's style — she trusts simple words to carry profound feeling.</p>

<p><strong>2. "He taught me how / to pay attention"</strong><br/>
The enjambment across the line break enacts the very attentiveness it describes — the reader must "pay attention" to follow the meaning across the line. The phrase "pay attention" frames awareness as something valuable, something worth investing in.</p>

<p><strong>3. "He would have grown / to admire / the survey of works"</strong><br/>
The verb <em>grown</em> is significant — it suggests Walker's father would have needed to expand his understanding to appreciate her achievements. This implies a generational or cultural gap that love would have bridged. The formal word <em>survey</em> lends dignity to her accomplishments.</p>

<p><strong>4. "cooking, writing, chopping wood, staring into the fire"</strong><br/>
This <strong>list</strong> mixes the domestic and the creative, the physical and the contemplative. Cooking and chopping wood are her father's activities; writing is her own; staring into the fire is shared reflection. The list structure implies that all these activities are equally valuable — there is no hierarchy between manual labour and intellectual work.</p>

<p><strong>5. "He taught me that / money was / not that / important"</strong><br/>
The heavy enjambment breaks this sentence across four lines, slowing the reader down and emphasising each element. The fragmented line breaks mirror the careful, deliberate way a parent teaches a child — one idea at a time.</p>

<p><strong>6. "He would have laughed"</strong><br/>
The conditional tense (<em>would have</em>) is poignant — it imagines a reaction that can never happen. Yet the imagined laughter is warm, not mocking. Walker creates a living presence from absence, keeping her father alive through imagination.</p>

<p><strong>7. "seasoning / none of my meals the same way twice"</strong><br/>
Cooking becomes a metaphor for creativity and individuality. Just as Walker never repeats a recipe, she never repeats her father's life exactly — she has taken his ingredients (his values) and made something uniquely her own. The word <em>seasoning</em> also suggests adding flavour and richness to experience.</p>

<h3>Language Features</h3>
<ul>
  <li><strong>Simple, conversational diction:</strong> Walker uses everyday language — "cooking," "money," "laughed" — creating intimacy and authenticity. The poem feels like a private conversation.</li>
  <li><strong>Listing:</strong> The accumulation of activities and memories builds a portrait of the father through concrete details rather than abstract praise.</li>
  <li><strong>Conditional tense:</strong> "He would have..." structures express simultaneous presence and absence — the father is imagined vividly but is irrevocably gone.</li>
  <li><strong>Metaphor through everyday actions:</strong> Cooking, writing, and paying attention become metaphors for how we inherit, transform, and pass on identity.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Walker's simplicity is deliberate, not accidental. In your analysis, explain <em>why</em> simple language is effective here — it mirrors the honest, unpretentious relationship between father and daughter, and it trusts the reader to feel the emotion without being told what to feel.</div>
`,
    quiz: [
      {
        id: 'igp2-thirty9-m2-q1',
        question:
          'What does the cooking imagery in the poem symbolise?',
        options: [
          'Walker\'s desire to become a professional chef',
          'The domestic role expected of women in the 1980s',
          'Creativity and individuality — taking inherited values and making something new',
          'The poverty of Walker\'s childhood',
        ],
        correct: 2,
        explanation:
          '"Seasoning none of my meals the same way twice" uses cooking as a metaphor for creativity — Walker has taken her father\'s "ingredients" (his values and teachings) and transformed them into something uniquely her own.',
      },
      {
        id: 'igp2-thirty9-m2-q2',
        question:
          'What is the effect of the conditional tense ("He would have...")?',
        options: [
          'It shows Walker is uncertain about her memories',
          'It creates a sense of simultaneous presence and absence — imagining what can never happen',
          'It suggests the father is still alive but estranged',
          'It distances Walker from her emotions',
        ],
        correct: 1,
        explanation:
          'The conditional tense imagines the father\'s reactions vividly while reminding us that he is gone. It creates a poignant blend of presence and absence, keeping him alive through imagination.',
      },
      {
        id: 'igp2-thirty9-m2-q3',
        question:
          'Why is the opening line "How I miss my father" effective?',
        options: [
          'It uses elaborate figurative language to express grief',
          'Its stark simplicity conveys deep emotion without sentimentality',
          'It rhymes with the next line, creating a musical effect',
          'It addresses the reader directly, breaking the fourth wall',
        ],
        correct: 1,
        explanation:
          'The monosyllabic, plain language trusts simple words to carry profound feeling. Walker avoids sentimentality, letting the directness of "How I miss my father" speak for itself.',
      },
    ],
  },
  {
    id: 'igp2-thirty9-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — Poem at Thirty-Nine</h2>

<h3>Free Verse</h3>
<p>Walker writes in <strong>free verse</strong> — there is no regular rhyme scheme, no fixed metre, and no uniform stanza length. This form reflects the poem's personal, conversational tone. Free verse allows Walker to shape each line around the natural rhythms of speech and thought, creating a sense of spontaneity and honesty. The lack of formal constraints mirrors the freedom Walker has found as an adult — she is no longer bound by her father's world, even as she carries his values forward.</p>

<h3>Enjambment</h3>
<p>Enjambment is the poem's most prominent structural feature. Lines frequently break mid-sentence or mid-phrase:</p>
<ul>
  <li>"He taught me how / to pay attention" — the break enacts attentiveness.</li>
  <li>"money was / not that / important" — the fragmented breaks slow the reader, mimicking careful instruction.</li>
  <li>"He would have grown / to admire" — the break between "grown" and "to admire" creates a pause that emphasises the idea of growth and change.</li>
</ul>
<p>This pervasive enjambment creates a <strong>flowing, meditative quality</strong> — thoughts spill across line breaks just as memories flow unpredictably through the mind. It also forces the reader to keep moving forward, just as Walker herself has moved forward from grief.</p>

<h3>Short Lines</h3>
<p>Many lines are very short — sometimes just two or three words. This gives individual words and phrases extra weight. When Walker writes "How I miss my father," the short line isolates the emotion, making it impossible to skim over. Short lines also create <strong>white space</strong> on the page, which visually represents the absences and silences in the relationship.</p>

<h3>Structural Movement</h3>
<p>The poem moves through several emotional phases:</p>
<ol>
  <li><strong>Loss:</strong> "How I miss my father" — raw grief stated directly.</li>
  <li><strong>Memory:</strong> Recollections of what her father taught her — cooking, money, attention.</li>
  <li><strong>Recognition:</strong> Walker sees herself in her father's habits — "cooking, writing, chopping wood."</li>
  <li><strong>Imagination:</strong> She imagines his response to her adult life — "He would have laughed," "He would have admired."</li>
  <li><strong>Celebration:</strong> The poem concludes with warmth rather than despair, affirming that her father's legacy lives on in her.</li>
</ol>
<p>This movement from grief to celebration is characteristic of the elegiac tradition. Walker does not deny her loss, but she transforms it into something life-affirming.</p>

<h3>Absence of Punctuation</h3>
<p>The poem uses minimal punctuation — few full stops, no speech marks, sparse commas. This creates a <strong>stream-of-consciousness</strong> effect, as though Walker is thinking aloud. It also blurs the boundaries between past and present, memory and imagination, reflecting how grief dissolves the distinction between then and now.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When writing about free verse, never say "the poem has no structure." Free verse is a deliberate structural choice. Explain <em>why</em> Walker chose it — the conversational intimacy, the freedom to shape lines around meaning, the connection to speech rhythms.</div>
`,
    quiz: [
      {
        id: 'igp2-thirty9-m3-q1',
        question: 'Why does Walker use free verse in this poem?',
        options: [
          'Because she was unable to write in regular metre',
          'To create a conversational, intimate tone that mirrors natural thought and speech',
          'To make the poem shorter and easier to read',
          'Because free verse was required by her publisher',
        ],
        correct: 1,
        explanation:
          'Free verse allows Walker to shape lines around the natural rhythms of speech and thought, creating intimacy and authenticity. The lack of formal constraints mirrors the personal, reflective nature of the poem.',
      },
      {
        id: 'igp2-thirty9-m3-q2',
        question:
          'What is the effect of the heavy enjambment in "money was / not that / important"?',
        options: [
          'It makes the line difficult to understand',
          'It slows the reader down, mimicking the careful way a parent teaches a child',
          'It creates a rhyme between "was" and "that"',
          'It shows Walker disagreed with her father about money',
        ],
        correct: 1,
        explanation:
          'The fragmented line breaks force the reader to pause on each element, recreating the deliberate, patient way a father imparts wisdom to a child. The form enacts the content.',
      },
      {
        id: 'igp2-thirty9-m3-q3',
        question:
          'What is the poem\'s overall structural movement?',
        options: [
          'From celebration to grief',
          'From the present to the distant past',
          'From grief and loss to recognition and celebration of her father\'s legacy',
          'From anger at her father to eventual forgiveness',
        ],
        correct: 2,
        explanation:
          'The poem moves from raw grief ("How I miss my father") through memory and recognition to celebration — Walker affirms that her father\'s values live on in her. This grief-to-celebration arc is characteristic of the elegiac tradition.',
      },
    ],
  },
  {
    id: 'igp2-thirty9-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — Poem at Thirty-Nine</h2>

<h3>Typical Exam Questions</h3>
<ul>
  <li>"How does Walker present the relationship between father and daughter in 'Poem at Thirty-Nine'?"</li>
  <li>"Explore how Walker conveys a sense of loss and celebration in this poem."</li>
  <li>"How does Walker use structure to convey meaning in 'Poem at Thirty-Nine'?"</li>
</ul>

<h3>Planning Your Response</h3>
<ol>
  <li><strong>Argument:</strong> For example: "Walker presents her father's death not as an ending but as a transformation — his values have been absorbed into her identity, making grief inseparable from gratitude."</li>
  <li><strong>Key quotations:</strong> "How I miss my father," "He taught me how / to pay attention," "seasoning none of my meals the same way twice," "He would have laughed."</li>
  <li><strong>Techniques:</strong> Free verse, enjambment, listing, conditional tense, cooking metaphor, simple diction.</li>
  <li><strong>Context:</strong> Walker's childhood in rural Georgia, her father's role as sharecropper and storyteller, the significance of writing as inherited craft.</li>
</ol>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Walker transforms grief into celebration by showing how her father's values have become inseparable from her own identity. The extended cooking metaphor — "seasoning none of my meals the same way twice" — presents inheritance not as passive repetition but as creative transformation: Walker has taken her father's "ingredients" (his teachings about generosity, attention, and creativity) and made something uniquely her own. The free verse form reinforces this theme of individual expression — just as Walker refuses to season her meals "the same way twice," she refuses to constrain her poem within a fixed form, asserting her artistic independence. Yet the pervasive enjambment — "He taught me how / to pay attention" — also enacts connection, as meaning flows across line breaks just as values flow across generations. The conditional tense in "He would have laughed" is particularly poignant, creating a vivid imagined presence that simultaneously affirms and denies the father's continued existence. Walker, whose father was a sharecropper who valued education and storytelling despite poverty, elevates his everyday teachings to the status of a profound legacy — suggesting that the most important inheritances are not material but moral.</p>
</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"How I miss my father"</li>
  <li>"He taught me how / to pay attention"</li>
  <li>"money was / not that / important"</li>
  <li>"cooking, writing, chopping wood, staring into the fire"</li>
  <li>"seasoning none of my meals the same way twice"</li>
  <li>"He would have laughed"</li>
  <li>"He would have grown / to admire"</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When comparing this poem with others, look for connections around parent-child relationships, memory, identity, and the passage of time. Walker's warm, celebratory tone contrasts effectively with poems that present more conflicted or painful family relationships.</div>
`,
    quiz: [
      {
        id: 'igp2-thirty9-m4-q1',
        question:
          'Which of these is the strongest conceptualised argument about the poem?',
        options: [
          'Alice Walker writes about her father who died',
          'The poem uses free verse and enjambment throughout',
          'Walker presents inheritance as creative transformation — her father\'s values live on, reshaped by her own identity',
          'The poem lists things Walker\'s father taught her',
        ],
        correct: 2,
        explanation:
          'This is a conceptualised argument because it identifies a central idea (inheritance as transformation) and explains its significance. The other options are observations or descriptions, not arguments.',
      },
      {
        id: 'igp2-thirty9-m4-q2',
        question:
          'How does the cooking metaphor function in an analytical essay?',
        options: [
          'It provides biographical information about Walker\'s childhood',
          'It links to the theme of identity — showing how Walker transforms inherited values into something uniquely her own',
          'It demonstrates that Walker preferred cooking to writing',
          'It is only relevant if the exam question specifically mentions food',
        ],
        correct: 1,
        explanation:
          'The cooking metaphor is versatile — it connects to themes of identity, inheritance, creativity, and individuality. It shows Walker taking her father\'s "ingredients" and making something new.',
      },
      {
        id: 'igp2-thirty9-m4-q3',
        question:
          'What is the most effective way to use context in an essay on this poem?',
        options: [
          'Write a separate paragraph about Walker\'s biography before beginning analysis',
          'Mention context only in the conclusion',
          'Integrate contextual points into the analysis, linking them to Walker\'s choices',
          'Avoid context entirely and focus only on language',
        ],
        correct: 2,
        explanation:
          'Context should be woven into your analysis — for example, linking Walker\'s father\'s life as a sharecropper to the poem\'s theme that moral inheritance matters more than material wealth.',
      },
    ],
  },
];

const poemAtThirtyNineCourse: CourseData = {
  id: 'igcse-lit-poem-at-thirty-nine',
  title: '"Poem at Thirty-Nine" — Alice Walker',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of Alice Walker\'s "Poem at Thirty-Nine" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: poemAtThirtyNineModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. War Photographer — Carol Ann Duffy
// ─────────────────────────────────────────────────────────────────────────────

const warPhotographerModules: CourseModule[] = [
  {
    id: 'igp2-warpho-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>War Photographer — Carol Ann Duffy (1985)</h2>

<h3>Context</h3>
<p>Carol Ann Duffy (born 1955) is a Scottish poet who served as the UK's Poet Laureate from 2009 to 2019. "War Photographer" was published in her 1985 collection <em>Standing Female Nude</em>. The poem was inspired by Duffy's friendship with war photographers, particularly Don McCullin and Philip Jones Griffiths, who documented conflicts in Vietnam, Northern Ireland, Cambodia, and other war zones.</p>

<p>Duffy was struck by the moral dilemma these photographers faced: they witnessed terrible suffering but had to maintain professional detachment to do their job. They then returned to comfortable, peaceful England — a country that consumed their images over Sunday newspapers and quickly forgot. The poem explores the gap between the reality of war and the way it is received in the safety of home.</p>

<div class="key-term"><strong>Key Term: Dramatic Monologue</strong> — A poem spoken by a single character (not the poet) to a silent audience. While "War Photographer" is not a pure dramatic monologue, Duffy uses a close third-person perspective that gives us intimate access to the photographer's thoughts and feelings.</div>

<h3>Overview of the Poem</h3>
<p>The poem follows a war photographer as he develops photographs in his darkroom after returning from a conflict zone. The poem is structured around the contrast between the quiet, ordered darkroom and the chaotic horror of what the photographs depict. As the images develop, memories of suffering resurface. The final stanza shifts to the editor selecting images for the newspaper, and the readers who will see them briefly — "between the bath and pre-lunch beers" — before turning the page.</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Suffering and indifference:</strong> The poem's central tension is between the reality of war and the comfortable detachment of those who view it from safety.</li>
  <li><strong>The role of the photographer:</strong> Is the photographer a witness, an artist, an exploiter, or all three? Duffy explores the moral complexity of recording suffering.</li>
  <li><strong>Memory and trauma:</strong> The developing photographs trigger painful memories that the photographer cannot escape, even in peaceful England.</li>
  <li><strong>Rural England vs war zones:</strong> The contrast between "ordinary pain" in England and the extreme suffering of war highlights Western complacency.</li>
  <li><strong>The media and desensitisation:</strong> The poem critiques a culture that consumes images of suffering without being moved to action.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not assume the poem is anti-photographer. Duffy is sympathetic to the photographer — he is presented as deeply affected by what he has witnessed. Her critique is directed at the public who view his images without truly engaging with the suffering they depict.</div>
`,
    quiz: [
      {
        id: 'igp2-warpho-m1-q1',
        question:
          'Who inspired Duffy to write "War Photographer"?',
        options: [
          'Soldiers she met during a war',
          'War photographers such as Don McCullin whom she knew personally',
          'A newspaper editor who published war images',
          'Victims of conflict she encountered while travelling',
        ],
        correct: 1,
        explanation:
          'Duffy was inspired by her friendships with war photographers like Don McCullin and Philip Jones Griffiths, who documented conflicts around the world and faced moral dilemmas about their role.',
      },
      {
        id: 'igp2-warpho-m1-q2',
        question:
          'What is the poem\'s central tension?',
        options: [
          'The conflict between two rival photographers',
          'The gap between the reality of war and the comfortable detachment of those who view it from safety',
          'The photographer\'s desire to stop working and retire',
          'The difference between colour and black-and-white photography',
        ],
        correct: 1,
        explanation:
          'The poem explores the stark contrast between the suffering witnessed in war zones and the indifference of the comfortable English public who briefly glance at the resulting photographs.',
      },
      {
        id: 'igp2-warpho-m1-q3',
        question:
          'What is the setting of the poem?',
        options: [
          'A battlefield in Vietnam',
          'A newspaper office in London',
          'A darkroom where the photographer develops his images',
          'A hospital in a conflict zone',
        ],
        correct: 2,
        explanation:
          'The poem is set in the photographer\'s darkroom as he develops his images. This quiet, ordered setting contrasts sharply with the chaotic suffering recorded in the photographs.',
      },
    ],
  },
  {
    id: 'igp2-warpho-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — War Photographer</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "In his darkroom he is finally alone / with spools of suffering set out in ordered rows."</strong><br/>
The poem opens with the photographer in his darkroom — a space of solitude and control. The alliterative phrase <em>spools of suffering</em> reduces human agony to physical objects (film spools), while <em>ordered rows</em> contrasts sharply with the chaos of war. The word <em>finally</em> suggests relief at being alone, but also exhaustion. There is an implicit comparison between the ordered rows of film and rows of graves.</p>

<p><strong>2. "The only light is red and softly glows, / as though this were a church and he a priest preparing to intone a Mass."</strong><br/>
The <strong>extended simile</strong> comparing the darkroom to a church elevates the photographer's work to a sacred ritual. The red safelight becomes liturgical; developing photographs becomes a form of worship or memorial. The verb <em>intone</em> suggests solemn, ritualistic speech — the photographer is giving voice to the dead. This religious imagery implies that bearing witness to suffering is a moral duty, not just a job.</p>

<p><strong>3. "Belfast. Beirut. Phnom Penh."</strong><br/>
Three place names, three conflicts, compressed into a single line of staccato monosyllables and short words. The <strong>tricolon</strong> creates a litany of suffering — a list so long it has become routine. The full stops after each name create caesurae that isolate each location, giving each its own weight while also suggesting the relentless accumulation of wars.</p>

<p><strong>4. "All flesh is grass"</strong><br/>
A direct biblical allusion (Isaiah 40:6, 1 Peter 1:24) meaning that all human life is temporary and fragile. The photographer reflects on mortality while handling images of the dead. The allusion gives his work a spiritual dimension — he is not merely recording events but contemplating the human condition.</p>

<p><strong>5. "a half-formed ghost"</strong><br/>
As the photograph develops in the chemical solution, the image emerges gradually — Duffy describes it as a <em>half-formed ghost</em>. This metaphor works on multiple levels: the person in the photograph may literally be dead (a ghost); the image is emerging from blankness like an apparition; and the photographer is haunted by what he has seen.</p>

<p><strong>6. "he remembers the cries / of this man's wife"</strong><br/>
The enjambment across the line break delays the revelation — we hear "cries" before learning whose cries they are. The specificity of "this man's wife" individualises the suffering, resisting the dehumanisation that occurs when victims become statistics.</p>

<p><strong>7. "The reader's eyeballs prick / with tears between the bath and pre-lunch beers."</strong><br/>
The juxtaposition of tears with the comfortable domestic routine — "bath and pre-lunch beers" — is devastating. The tears are brief and shallow; the readers feel a momentary pang before returning to their comfortable lives. <em>Prick</em> suggests the reaction is minor and fleeting, like a pinprick rather than a wound.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The religious imagery (church, priest, Mass, "All flesh is grass") is a through-line in the poem. Track it across stanzas to show how Duffy systematically constructs the photographer as a secular priest who bears witness to suffering the public would rather ignore.</div>
`,
    quiz: [
      {
        id: 'igp2-warpho-m2-q1',
        question:
          'What is the effect of the simile comparing the darkroom to a church?',
        options: [
          'It suggests the photographer is deeply religious',
          'It elevates his work to a sacred ritual of bearing witness to suffering',
          'It shows the darkroom is a cold, unwelcoming space',
          'It implies photography is more important than religion',
        ],
        correct: 1,
        explanation:
          'The church simile gives the photographer\'s work moral and spiritual weight — developing photographs becomes a form of memorial, and the photographer becomes a "priest" who intones a "Mass" for the dead.',
      },
      {
        id: 'igp2-warpho-m2-q2',
        question:
          'What does "Belfast. Beirut. Phnom Penh." achieve through its structure?',
        options: [
          'It shows the photographer has only visited three countries',
          'The tricolon and full stops create a litany of suffering, suggesting the relentless accumulation of wars',
          'It is a list of places where the photographer wants to visit next',
          'It demonstrates the photographer\'s geographical knowledge',
        ],
        correct: 1,
        explanation:
          'The three place names, separated by full stops, create a staccato litany — each caesura isolates a separate conflict, while the list format suggests wars have become so numerous they blur together.',
      },
      {
        id: 'igp2-warpho-m2-q3',
        question:
          'What is the effect of "between the bath and pre-lunch beers"?',
        options: [
          'It shows the readers are alcoholics',
          'It contrasts the readers\' comfortable routine with the suffering in the photographs, highlighting indifference',
          'It describes the photographer\'s own weekend habits',
          'It suggests the newspaper is published at lunchtime',
        ],
        correct: 1,
        explanation:
          'The juxtaposition of momentary tears with a comfortable domestic routine exposes the shallowness of the public\'s response — suffering is consumed briefly before being dismissed in favour of everyday pleasures.',
      },
    ],
  },
  {
    id: 'igp2-warpho-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — War Photographer</h2>

<h3>Regular Form</h3>
<p>The poem consists of four stanzas, each with six lines. This <strong>regular, controlled form</strong> mirrors the photographer's attempt to impose order on chaos — just as he arranges his spools in "ordered rows," Duffy arranges her poem in neat, uniform stanzas. The form reflects the professional discipline required to photograph suffering without breaking down.</p>

<p>However, this surface order is disrupted by the emotional content. The tension between the controlled form and the disturbing subject matter mirrors the photographer's own internal conflict — maintaining professionalism while being deeply affected by what he witnesses.</p>

<h3>Rhyme Scheme</h3>
<p>The poem uses a loose rhyme scheme (approximately ABBCDD in each stanza), though the rhymes are often half-rhymes or slant rhymes. This near-regularity suggests control that is not quite complete — the form almost holds together but not perfectly, reflecting the photographer's composure that is always on the verge of cracking.</p>

<h3>Structural Movement</h3>
<ol>
  <li><strong>Stanza 1 — The darkroom:</strong> The photographer is alone, preparing to develop his images. The tone is solemn and ritualistic (church simile). The setting is established as a space of quiet contemplation.</li>
  <li><strong>Stanza 2 — Memory intrudes:</strong> As he works, the photographer's memories surface. "Belfast. Beirut. Phnom Penh." catalogues the conflicts he has covered. The biblical allusion "All flesh is grass" introduces mortality.</li>
  <li><strong>Stanza 3 — The image develops:</strong> A specific photograph emerges — a "half-formed ghost." The photographer remembers "the cries of this man's wife." Individual suffering breaks through professional detachment.</li>
  <li><strong>Stanza 4 — The public's response:</strong> The perspective shifts outward to the editor and the readers. The poem ends with the photographer flying back to another conflict — "they do not care" — a bleak, unresolved conclusion.</li>
</ol>

<h3>Shift in Perspective</h3>
<p>The poem moves from the private, interior world of the photographer (stanzas 1–3) to the public world of media consumption (stanza 4). This structural shift is crucial: it forces the reader to confront their own position. We have been inside the photographer's mind, sharing his pain — and then we are shown the indifferent readers who glance at his work and move on. The reader of the poem is implicitly challenged: are you like those newspaper readers?</p>

<h3>Enjambment and Caesura</h3>
<p>Duffy uses enjambment to create moments of suspense and revelation — "he remembers the cries / of this man's wife" delays the human cost across the line break. Caesurae, particularly in "Belfast. Beirut. Phnom Penh," create pauses that isolate and emphasise individual elements. The interplay of flow and interruption mirrors the photographer's experience: memories intrude suddenly into the controlled process of developing photographs.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The controlled, regular form is not just a technical feature — it is part of the poem's meaning. Always link it to the photographer's need for professional composure and the contrast between external order and internal turmoil.</div>
`,
    quiz: [
      {
        id: 'igp2-warpho-m3-q1',
        question:
          'Why does Duffy use a regular six-line stanza form?',
        options: [
          'Because she always writes in six-line stanzas',
          'To mirror the photographer\'s attempt to impose order on the chaos of war',
          'To make the poem easier to memorise for exams',
          'Because the poem describes six different photographs',
        ],
        correct: 1,
        explanation:
          'The regular, controlled form reflects the photographer\'s professional discipline — his need to impose order on chaotic, disturbing material. The tension between neat form and disturbing content mirrors his internal conflict.',
      },
      {
        id: 'igp2-warpho-m3-q2',
        question:
          'What is significant about the shift in perspective in stanza 4?',
        options: [
          'It introduces a new character, the photographer\'s assistant',
          'It moves from the photographer\'s private world to the public\'s indifferent consumption, implicating the reader',
          'It returns to the opening scene in the darkroom',
          'It shifts from third person to first person narration',
        ],
        correct: 1,
        explanation:
          'The shift from the photographer\'s intimate experience to the public\'s casual consumption forces the reader to confront their own potential indifference. After sharing the photographer\'s pain, we see how easily it is dismissed.',
      },
      {
        id: 'igp2-warpho-m3-q3',
        question:
          'How do the half-rhymes in the poem contribute to meaning?',
        options: [
          'They show Duffy could not find perfect rhymes',
          'They suggest control that is not quite complete — composure always on the verge of cracking',
          'They make the poem sound more like a song',
          'They have no particular significance',
        ],
        correct: 1,
        explanation:
          'The near-regular rhyme scheme that doesn\'t quite hold together mirrors the photographer\'s composure — he maintains professionalism, but his control is imperfect and always threatened by the horror of what he has witnessed.',
      },
    ],
  },
  {
    id: 'igp2-warpho-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — War Photographer</h2>

<h3>Typical Exam Questions</h3>
<ul>
  <li>"How does Duffy present the effects of conflict in 'War Photographer'?"</li>
  <li>"Explore how Duffy creates sympathy for the war photographer."</li>
  <li>"How does Duffy use imagery to convey the poem's themes?"</li>
  <li>"Compare Duffy's presentation of suffering with another poem you have studied."</li>
  <li>"What is Duffy's critique in this poem, and how does she convey it?"</li>
</ul>

<h3>Quotation Bank — Key Quotes Organised by Theme</h3>
<div class="quotation-bank">
<table>
<tr>
  <td><strong>The photographer as sacred figure</strong></td>
  <td>"as though this were a church and he a priest preparing to intone a Mass"</td>
  <td>Religious imagery elevates photography to a spiritual act; "intone" = solemn, ritualistic</td>
</tr>
<tr>
  <td><strong>Suffering transformed to commodity</strong></td>
  <td>"spools of suffering set out in ordered rows"</td>
  <td>Alliteration of "s"; "ordered rows" suggests industrial processing of human pain</td>
</tr>
<tr>
  <td><strong>The geographic catalogue of conflict</strong></td>
  <td>"Belfast. Beirut. Phnom Penh."</td>
  <td>Staccato listing; places reduced to single names; implying endless cycle of wars</td>
</tr>
<tr>
  <td><strong>The biblical echo</strong></td>
  <td>"All flesh is grass"</td>
  <td>Quote from Isaiah 40:6; universal human mortality; the photographer's work documents inevitable death</td>
</tr>
<tr>
  <td><strong>The victim's presence</strong></td>
  <td>"a half-formed ghost"</td>
  <td>The developing photograph; "ghost" suggests haunting quality; the dead returning to haunt viewers</td>
</tr>
<tr>
  <td><strong>Sound of suffering erased</strong></td>
  <td>"the cries / of this man's wife"</td>
  <td>Enjambment breaks the cry; sound exists but is unheard; photography cannot capture sound</td>
</tr>
<tr>
  <td><strong>The readers' casual indifference</strong></td>
  <td>"between the bath and pre-lunch beers"</td>
  <td>Precise domestic details; readers' routines bracket their moment of seeing suffering</td>
</tr>
<tr>
  <td><strong>Distance and impact</strong></td>
  <td>"a field / beneath a nightmare sky"</td>
  <td>Enjambment; "nightmare sky" conveys horror; beauty and violence coexist</td>
</tr>
</table>
</div>

<h3>Grade 9 Insights — What Examiners Reward</h3>
<div class="grade9-insight">
<p><strong>The Gap is the Poem's Subject:</strong> Duffy is not primarily concerned with the war itself or the photographer's experience (though she presents both sympathetically). She is concerned with the <em>gap</em> between witness and viewer, between the photographer's sacred work and the public's casual consumption. High-scoring responses identify this gap and track how Duffy creates it linguistically. The shift from the photographer's careful, ritual language to the readers' domestic language ("bath," "beers") is crucial.</p>

<p><strong>Religious Language is Structural:</strong> The "church" and "priest" simile is not ornamental. It runs through the poem: "Mass," "All flesh is grass" (biblical), "intone" (liturgical chant). This sustained religious register elevates the photographer's work while simultaneously condemning the readers' failure to treat the suffering with equivalent reverence. Examiners reward essays that track this pattern.</p>

<p><strong>Collocation and Juxtaposition Are Tools:</strong> Notice how Duffy juxtaposes the photographer's solemnity with the readers' superficiality: "between the bath and pre-lunch beers." These are not random domestic details — they represent the reader's routine continuing uninterrupted. Similarly, "spools of suffering set out in ordered rows" — the oxymoron of orderliness applied to suffering — reveals how photography both preserves and sterilises human pain.</p>

<p><strong>Context Sharpens the Critique:</strong> The 1980s context (Northern Ireland, Middle East crises) is vital. Duffy is responding to a specific moment of media saturation. Her critique is not that photographs of war are bad, but that constant exposure has produced <em>desensitisation</em>. The readers' tears ("eyeballs prick") are real but brief — they don't lead to action or genuine solidarity.</p>
</div>

<h3>Model Paragraph 1: The Sacred vs. The Profane</h3>
<div class="model-response">
<p>Duffy constructs the war photographer as a morally serious figure whose suffering is ignored by the comfortable society he serves. The extended simile comparing his darkroom to "a church" and the photographer to "a priest preparing to intone a Mass" elevates his work from mere journalism to a sacred act of witness. The verb "intone" — meaning to chant in a solemn, ritualistic manner — implies that developing photographs is a form of prayer for the dead, performed with reverence in a consecrated space. The religious register continues: "All flesh is grass" echoes Isaiah and emphasises universal mortality; the developing photograph becomes "a half-formed ghost," as if the dead are being summoned back to testify. Yet this sacred work is met with profane indifference. When readers' "eyeballs prick / with tears between the bath and pre-lunch beers," the juxtaposition is devastating: the moment of emotional response is bracketed by mundane domesticity. The tears are real but momentary — they do not interrupt the reader's routine. Duffy, writing during an era of media saturation, suggests that constant exposure to suffering has produced not compassion but a kind of emotional tourism: we feel briefly and move on.</p>
</div>

<h3>Model Paragraph 2: Photography as Both Preservation and Erasure</h3>
<div class="model-response">
<p>A sophisticated reading recognises that Duffy presents photography as fundamentally paradoxical: it preserves suffering while simultaneously rendering it consumable. The "spools of suffering set out in ordered rows" presents an oxymoron — the orderliness of cataloguing applied to human pain. Photography orders, categorises, and aestheticises; it transforms three-dimensional human anguish into two-dimensional images. The staccato catalogue "Belfast. Beirut. Phnom Penh." — places reduced to mere names — exemplifies this reduction: whole conflicts are compressed into three words. Furthermore, the photograph cannot capture the most essential dimension of suffering: "the cries / of this man's wife." The enjambment breaks the cry across lines, emphasising that sound — the most immediate expression of grief — is absent from the photograph. The medium preserves the visual while inevitably erasing the auditory, the visceral, the unbearably present. Duffy's critique, then, is not anti-photography but anti-complacency: the photographer works with integrity within an inherently limited medium; the public's failure is to treat the image as sufficient testimony rather than as a gateway to deeper engagement.</p>
</div>

<h3>Model Paragraph 3: Structural Shift and Narrative Perspective</h3>
<div class="model-response">
<p>Duffy's most powerful technique is her manipulation of narrative perspective. The first three stanzas are dominated by the photographer's interiority — we enter his thoughts, his rituals, his reverence. The language is precise, formal, almost liturgical. But the final stanza abruptly shifts to the readers' perspective: "their eyeballs prick" (second person, momentary emotion) and the transition to the domestic sphere ("bath," "beers," "Sunday supplements") represents a tonal collapse. The shift from the darkroom's sacred space to the reader's casual Sunday is enacted structurally: the poem moves us from depth to surface, from ritual to routine. This structural shift argues that suffering is not inherently invisible; the photographer works to make it visible. Rather, our collective culture — the culture of casual consumption — makes visibility into invisibility. We see the image and forget. Duffy's critique is ultimately not of conflict or journalism but of a reading public that has been trained to consume images of suffering without allowing them to disturb our comfort. The poem's power resides in how it uses form to enact this critique.</p>
</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"spools of suffering set out in ordered rows"</li>
  <li>"as though this were a church and he a priest preparing to intone a Mass"</li>
  <li>"Belfast. Beirut. Phnom Penh."</li>
  <li>"All flesh is grass"</li>
  <li>"a half-formed ghost"</li>
  <li>"the cries / of this man's wife"</li>
  <li>"between the bath and pre-lunch beers"</li>
  <li>"a field / beneath a nightmare sky"</li>
  <li>"The readers' eyeballs prick with tears"</li>
</ol>

<h3>Comparison Pairings</h3>
<ul>
  <li><strong>With "Remember" (Christina Rossetti):</strong> Both poems address the viewer's/reader's responsibility. Rossetti explores how to hold memory without causing grief; Duffy explores how to witness suffering without becoming indifferent. Both challenge the reader to reconsider passive consumption.</li>
  <li><strong>With "Do not go gentle into that good night" (Dylan Thomas):</strong> Thomas writes about death with rage; Duffy writes about witnessing death with solemnity. Both engage with mortality, but Duffy adds a layer of critique about how society processes death imagery.</li>
  <li><strong>With "Half-caste" (John Agard):</strong> Both poems critique how society's routines and language mask injustice. Agard critiques linguistic racism; Duffy critiques how media consumption of suffering reflects moral failure.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing that the poem is about the horrors of war. It is not — it is about the <em>response</em> to war, specifically the gap between those who witness suffering and those who consume images of it. Keep your argument focused on this distinction. Similarly, avoid suggesting the photographer is complicit; he is presented sympathetically. The critique is directed at the readers and the culture that trains them.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Track the shift from the photographer's perspective to the readers' perspective. This is a structural argument: Duffy moves us from depth to surface, from sacred to profane. Show how this shift is enacted through language, tone, and imagery. Essays that identify and analyse this structural shift score highly because they demonstrate sensitivity to how meaning is created through form.</div>
`,
    quiz: [
      {
        id: 'igp2-warpho-m4-q1',
        question:
          'What is the poem primarily critiquing?',
        options: [
          'The photographer for exploiting suffering',
          'The military for causing wars',
          'A comfortable society that consumes images of suffering without genuine engagement',
          'The newspaper industry for underpaying photographers',
        ],
        correct: 2,
        explanation:
          'Duffy\'s critique is directed at the public who view images of suffering briefly and move on. The photographer is presented sympathetically — it is the readers\' indifference that the poem condemns.',
      },
      {
        id: 'igp2-warpho-m4-q2',
        question:
          'How should religious imagery be discussed in an essay on this poem?',
        options: [
          'As a single isolated point in one paragraph',
          'As a through-line tracked across the poem, showing how Duffy systematically constructs the photographer as a secular priest',
          'Only if the exam question mentions religion',
          'As evidence that Duffy is a religious poet',
        ],
        correct: 1,
        explanation:
          'The religious imagery (church, priest, Mass, "All flesh is grass") runs through the poem and should be tracked as a pattern. Showing how it develops across stanzas demonstrates sophisticated structural awareness.',
      },
      {
        id: 'igp2-warpho-m4-q3',
        question:
          'Which comparison would work well with "War Photographer" in a comparison question?',
        options: [
          'A poem about romantic love',
          'A poem about the natural landscape',
          'A poem that also explores suffering, conflict, or the gap between experience and observation',
          'A poem about childhood memories',
        ],
        correct: 2,
        explanation:
          'Effective comparisons share thematic ground — poems about conflict, suffering, indifference, or the tension between personal experience and public perception would pair well with "War Photographer."',
      },
    ],
  },
];

const warPhotographerCourse: CourseData = {
  id: 'igcse-lit-poem-war-photographer',
  title: '"War Photographer" — Carol Ann Duffy',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of Carol Ann Duffy\'s "War Photographer" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: warPhotographerModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. The Tyger — William Blake
// ─────────────────────────────────────────────────────────────────────────────

const theTygerModules: CourseModule[] = [
  {
    id: 'igp2-tyger-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>The Tyger — William Blake (1794)</h2>

<h3>Context</h3>
<p>William Blake (1757–1827) was an English poet, painter, and printmaker. He was a radical visionary who rejected the rationalism of the Enlightenment and the institutional power of the Church and State. "The Tyger" was published in <em>Songs of Experience</em> (1794), the companion volume to <em>Songs of Innocence</em> (1789). Together, these collections explore "the two contrary states of the human soul."</p>

<p>"The Tyger" is the counterpart to "The Lamb" from <em>Songs of Innocence</em>. Where "The Lamb" presents a gentle, benevolent Creator associated with Christ and pastoral innocence, "The Tyger" confronts the terrifying possibility that the same God who made the lamb also made the predator. Blake composed the poem during the French Revolution (1789–1799), a period of violent upheaval that forced intellectuals to reconsider the nature of power, creation, and destruction.</p>

<div class="key-term"><strong>Key Term: Songs of Innocence and Experience</strong> — Blake's paired poetry collections exploring two perspectives on the world. Innocence represents childhood, trust, and simplicity; Experience represents adult awareness of suffering, oppression, and moral complexity.</div>

<h3>Overview of the Poem</h3>
<p>The poem consists of six quatrains, structured entirely as a series of unanswered questions addressed to the tiger (or, through the tiger, to its Creator). The speaker asks: who could have created something so fearsome and beautiful? What kind of God would make both the lamb and the tiger? The questions are never answered — the poem is an act of awe, terror, and theological inquiry.</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Creation and the Creator:</strong> The central question — what kind of Creator would make the tiger? — challenges simple notions of a benevolent God.</li>
  <li><strong>Good and evil:</strong> If God made both the lamb and the tiger, innocence and violence are both part of the divine plan. This is profoundly unsettling.</li>
  <li><strong>Awe and terror (the Sublime):</strong> The tiger inspires both admiration and fear — the Romantic concept of the Sublime, where beauty and terror coexist.</li>
  <li><strong>Power and energy:</strong> The tiger embodies raw, primal energy. Blake associates this with revolution, creativity, and the untameable forces of nature.</li>
  <li><strong>Innocence vs Experience:</strong> The poem belongs to <em>Experience</em> — it is the adult's terrified awareness that the world contains violence and suffering, not just the lamb's gentleness.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always mention the relationship between "The Tyger" and "The Lamb." Blake designed them as companion poems — discussing one without the other misses the fundamental point about the coexistence of innocence and experience.</div>
`,
    quiz: [
      {
        id: 'igp2-tyger-m1-q1',
        question:
          'Which collection does "The Tyger" belong to?',
        options: [
          'Songs of Innocence (1789)',
          'Songs of Experience (1794)',
          'Lyrical Ballads (1798)',
          'The Marriage of Heaven and Hell (1790)',
        ],
        correct: 1,
        explanation:
          '"The Tyger" belongs to Songs of Experience, which presents the adult\'s awareness of suffering, violence, and moral complexity — the "contrary state" to the childlike trust of Songs of Innocence.',
      },
      {
        id: 'igp2-tyger-m1-q2',
        question:
          'What is the companion poem to "The Tyger"?',
        options: [
          '"London"',
          '"The Chimney Sweeper"',
          '"The Lamb"',
          '"Holy Thursday"',
        ],
        correct: 2,
        explanation:
          '"The Lamb" from Songs of Innocence presents a gentle, benevolent Creator. "The Tyger" is its counterpart, asking whether the same God could have made both the gentle lamb and the fearsome predator.',
      },
      {
        id: 'igp2-tyger-m1-q3',
        question:
          'What historical event provides important context for the poem?',
        options: [
          'The English Civil War',
          'The Industrial Revolution',
          'The French Revolution',
          'The Napoleonic Wars',
        ],
        correct: 2,
        explanation:
          'Blake wrote "The Tyger" during the French Revolution (1789–1799), a period of violent upheaval that raised urgent questions about power, destruction, and whether violence could be a force for liberation.',
      },
    ],
  },
  {
    id: 'igp2-tyger-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — The Tyger</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "Tyger Tyger, burning bright, / In the forests of the night"</strong><br/>
The opening apostrophe addresses the tiger directly, establishing an incantatory, almost hymn-like tone. The verb <em>burning</em> transforms the tiger from animal to elemental force — fire, energy, destruction. <em>Forests of the night</em> places the tiger in darkness, suggesting mystery, danger, and the unknown. The trochaic metre (<strong>TY</strong>-ger <strong>TY</strong>-ger <strong>BURN</strong>-ing <strong>BRIGHT</strong>) creates a hammering, relentless rhythm like a heartbeat or a forge.</p>

<p><strong>2. "What immortal hand or eye, / Could frame thy fearful symmetry?"</strong><br/>
The question is directed not at the tiger but at its Creator — whose <em>immortal hand or eye</em> designed this creature? The word <em>frame</em> suggests both artistic composition and physical construction. <em>Fearful symmetry</em> is a key oxymoronic phrase: the tiger is both terrifying and perfectly proportioned, both dangerous and beautiful. This captures the Sublime — beauty fused with terror.</p>

<p><strong>3. "In what distant deeps or skies, / Burnt the fire of thine eyes?"</strong><br/>
<em>Distant deeps or skies</em> — the alliterative pairing of "deeps" (hell) and "skies" (heaven) suggests the tiger's origins could be either infernal or divine, or both. The Creator is associated with extreme, cosmic locations. <em>Burnt the fire</em> continues the fire imagery, linking creation to combustion and energy.</p>

<p><strong>4. "What the hammer? what the chain, / In what furnace was thy brain?"</strong><br/>
The <strong>industrial imagery</strong> — hammer, chain, furnace, anvil — presents the Creator as a blacksmith forging the tiger in fire. This evokes both divine craft and the violence of the Industrial Revolution, which Blake witnessed in London. The tiger's brain is forged, not grown — it is the product of deliberate, powerful design.</p>

<p><strong>5. "Did he smile his work to see? / Did he who made the Lamb make thee?"</strong><br/>
This is the poem's pivotal question. The verb <em>smile</em> is unsettling — did the Creator take pleasure in making something so dangerous? The direct reference to the Lamb (capitalised, evoking Christ as well as the companion poem) forces the theological crisis: if the same God made both, then creation includes both innocence and violence by design.</p>

<p><strong>6. "Tyger Tyger burning bright" (final stanza)</strong><br/>
The final stanza repeats the first almost exactly, but with one crucial change: "Could frame" becomes "Dare frame." The shift from <em>could</em> (ability) to <em>dare</em> (courage/audacity) intensifies the question. It is no longer about whether the Creator was capable of making the tiger, but whether the Creator had the audacity to do so — knowing the consequences.</p>

<h3>Imagery Patterns</h3>
<ul>
  <li><strong>Fire imagery:</strong> "burning," "fire," "furnace," "burnt" — fire is creation, destruction, energy, and illumination simultaneously. The tiger is made of fire.</li>
  <li><strong>Industrial imagery:</strong> Hammer, chain, furnace, anvil — the Creator as craftsman or blacksmith, forging the tiger through violent labour.</li>
  <li><strong>Cosmic imagery:</strong> "distant deeps or skies," "the stars threw down their spears" — the poem operates on a cosmic scale, linking the tiger's creation to the forces that shaped the universe.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The change from "Could" to "Dare" in the final stanza is one of the most important single-word changes in English poetry. Always discuss it — it shows Blake intensifying his question from capability to morality.</div>
`,
    quiz: [
      {
        id: 'igp2-tyger-m2-q1',
        question:
          'What does "fearful symmetry" mean?',
        options: [
          'The tiger is afraid of its own reflection',
          'The tiger is both terrifying and perfectly proportioned — beauty fused with terror',
          'The tiger\'s stripes are not symmetrical',
          'The poet is afraid to write about the tiger',
        ],
        correct: 1,
        explanation:
          '"Fearful symmetry" is an oxymoronic phrase that captures the Sublime — the tiger is simultaneously terrifying and beautiful, dangerous and perfectly designed. It encapsulates the poem\'s central paradox.',
      },
      {
        id: 'igp2-tyger-m2-q2',
        question:
          'Why is the change from "Could frame" to "Dare frame" significant?',
        options: [
          'It corrects a grammatical error in the first stanza',
          'It shifts the question from capability to morality — from whether the Creator could make the tiger to whether it was right to do so',
          'It shows the speaker has become less afraid of the tiger',
          'It changes the rhyme scheme of the poem',
        ],
        correct: 1,
        explanation:
          'The shift from "could" (ability) to "dare" (audacity/courage) transforms the question. It is no longer about God\'s power but about God\'s moral responsibility — did the Creator dare to make something so dangerous?',
      },
      {
        id: 'igp2-tyger-m2-q3',
        question:
          'What does the industrial imagery (hammer, furnace, anvil) suggest about the Creator?',
        options: [
          'The Creator is weak and cannot control the tiger',
          'The Creator is a gentle, nurturing figure',
          'The Creator is a powerful craftsman who forged the tiger through violent labour',
          'The Creator is a scientist conducting experiments',
        ],
        correct: 2,
        explanation:
          'The blacksmith imagery presents creation as violent, powerful craft — the tiger is hammered into existence in a furnace of fire. This evokes both divine power and the Industrial Revolution Blake witnessed.',
      },
    ],
  },
  {
    id: 'igp2-tyger-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — The Tyger</h2>

<h3>Rhyming Couplets and Quatrains</h3>
<p>The poem is composed of six quatrains (four-line stanzas) with <strong>rhyming couplets</strong> (AABB). This regular, insistent pattern creates a <strong>hammering rhythm</strong> that mirrors the industrial imagery of the poem — the repeated beats evoke the blacksmith's hammer striking the anvil. The regularity also gives the poem an incantatory, almost spell-like quality, as though the speaker is performing a ritual of inquiry.</p>

<h3>Trochaic Metre</h3>
<p>The dominant metre is <strong>trochaic tetrameter</strong> — a pattern of stressed-unstressed syllables repeated four times per line: <strong>TY</strong>-ger <strong>TY</strong>-ger <strong>BURN</strong>-ing <strong>BRIGHT</strong>. This falling rhythm creates a relentless, driving pulse that contrasts with the more common iambic metre of English poetry. The trochaic pattern is associated with urgency, intensity, and incantation — it drives the questions forward without pause.</p>

<h3>Interrogative Structure</h3>
<p>The most striking structural feature is that the entire poem is composed of questions — and none are answered. This <strong>interrogative structure</strong> creates a sense of irresolution and awe. The speaker cannot comprehend the tiger's creation; the questions accumulate, building pressure without release. The absence of answers suggests that the mystery of creation is beyond human understanding.</p>

<p>The questions escalate in intensity:</p>
<ul>
  <li>Stanza 1: Who <em>could</em> make this creature? (capability)</li>
  <li>Stanzas 2–4: How was it made? (process — wings, hands, furnace, hammer)</li>
  <li>Stanza 5: Did the Creator <em>smile</em>? Did the same God make the Lamb? (morality and theology)</li>
  <li>Stanza 6: Who <em>dared</em> make this creature? (audacity — the question is intensified)</li>
</ul>

<h3>Circular Structure</h3>
<p>The poem begins and ends with almost the same stanza, creating a <strong>circular structure</strong>. However, the change from "Could" to "Dare" means the circle is not exact — the poem has progressed. The speaker begins by wondering about the Creator's ability and ends by questioning the Creator's audacity. This slight but crucial change suggests that contemplating the tiger has deepened the speaker's awareness of its implications.</p>

<h3>Symmetry</h3>
<p>The poem itself exhibits the "fearful symmetry" it describes. The six stanzas mirror each other (stanza 1 matches stanza 6; stanza 2 mirrors stanza 5 in its cosmic imagery). This structural symmetry reflects the tiger's own symmetrical beauty, while the questions that disrupt the surface create the "fearful" element — beneath the perfect form lies an unanswerable moral challenge.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The fact that the poem contains only questions (and no answers) is essential to discuss. Link it to Blake's purpose: he is not trying to answer the question of evil — he is forcing the reader to confront it.</div>
`,
    quiz: [
      {
        id: 'igp2-tyger-m3-q1',
        question:
          'What effect does the trochaic metre create?',
        options: [
          'A gentle, soothing rhythm like a lullaby',
          'A relentless, hammering pulse that mirrors the blacksmith imagery and creates urgency',
          'An irregular, unpredictable rhythm that confuses the reader',
          'A slow, meditative pace that encourages reflection',
        ],
        correct: 1,
        explanation:
          'The trochaic tetrameter (stressed-unstressed) creates a driving, relentless rhythm that evokes the hammer blows of the forge. It gives the poem urgency and intensity, propelling the questions forward without pause.',
      },
      {
        id: 'igp2-tyger-m3-q2',
        question:
          'Why is it significant that the poem consists entirely of questions?',
        options: [
          'Because Blake could not find the answers',
          'Because the mystery of creation is beyond human comprehension — the unanswered questions create awe and irresolution',
          'Because Blake wanted readers to answer the questions themselves',
          'Because questions are easier to write than statements',
        ],
        correct: 1,
        explanation:
          'The interrogative structure creates a sense of irresolution and overwhelming awe. The questions accumulate without answers, suggesting that the paradox of a Creator who makes both lamb and tiger is ultimately beyond human understanding.',
      },
      {
        id: 'igp2-tyger-m3-q3',
        question:
          'How does the circular structure work in this poem?',
        options: [
          'The first and last stanzas are identical, showing nothing has changed',
          'The first and last stanzas are almost identical, but "Could" becomes "Dare," showing the speaker\'s deepened awareness',
          'The poem ends in the middle and loops back to the beginning',
          'Each stanza repeats the previous one with minor changes',
        ],
        correct: 1,
        explanation:
          'The near-repetition creates a circle, but the change from "Could" to "Dare" shows progression. The speaker has moved from questioning the Creator\'s ability to questioning the Creator\'s moral audacity — contemplating the tiger has deepened the inquiry.',
      },
    ],
  },
  {
    id: 'igp2-tyger-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — The Tyger</h2>

<h3>Typical Exam Questions</h3>
<ul>
  <li>"How does Blake present ideas about power and creation in 'The Tyger'?"</li>
  <li>"Explore how Blake creates a sense of awe in this poem."</li>
  <li>"How does Blake use form and structure to convey meaning in 'The Tyger'?"</li>
  <li>"What does the Tyger represent, and how does Blake's language convey this?"</li>
  <li>"Compare Blake's presentation of creation in 'The Tyger' with 'The Lamb.'"</li>
</ul>

<h3>Quotation Bank — Key Quotes with Contextual Analysis</h3>
<div class="quotation-bank">
<table>
<tr>
  <td><strong>Opening incantation</strong></td>
  <td>"Tyger Tyger, burning bright, / In the forests of the night"</td>
  <td>Repetition creates incantatory effect; "burning bright" = both beautiful and dangerous; contradiction established immediately</td>
</tr>
<tr>
  <td><strong>Paradoxical beauty</strong></td>
  <td>"Could frame thy fearful symmetry?"</td>
  <td>"Fearful symmetry" = oxymoron; beauty and terror inseparable; beauty can be terrible; perfection can terrify</td>
</tr>
<tr>
  <td><strong>Divine origin questioned</strong></td>
  <td>"In what distant deeps or skies, / Burnt the fire of thine eyes?"</td>
  <td>"Fire" = both divine spark and primal violence; location "distant" suggests otherness; creation is remote from human understanding</td>
</tr>
<tr>
  <td><strong>Industrial creation</strong></td>
  <td>"What the hammer? what the chain, / In what furnace was thy brain?"</td>
  <td>Industrial imagery replaces pastoral; Creator is a blacksmith, not a gentle gardener; violence in creation</td>
</tr>
<tr>
  <td><strong>Creator's intention</strong></td>
  <td>"Did he smile his work to see? / Did he laugh at the slaughter?"</td>
  <td>Questions whether Creator takes pleasure in violence he creates; theological crisis deepens</td>
</tr>
<tr>
  <td><strong>The theological centre</strong></td>
  <td>"Did he who made the Lamb make thee?"</td>
  <td>Reference to companion poem; capitalised "Lamb"; ultimate paradox: same Creator made both innocence and violence</td>
</tr>
<tr>
  <td><strong>Repetition of opening</strong></td>
  <td>"Tyger Tyger, burning bright"</td>
  <td>Returns to opening but with new weight; readers now understand the paradox the speaker could only question</td>
</tr>
<tr>
  <td><strong>Final question</strong></td>
  <td>"Dare frame thy fearful symmetry?"</td>
  <td>Shift from "Could" to "Dare" — active choice; raises stakes; final uncertainty about the Creator's audacity</td>
</tr>
</table>
</div>

<h3>Grade 9 Insights — What Examiners Reward</h3>
<div class="grade9-insight">
<p><strong>The Tyger as Symbol, Not Creature:</strong> Students who score highly do not describe the tiger's physical appearance. They engage with symbolism: the tiger represents primal creative energy, the violent forces that cannot be controlled, the coexistence of beauty and terror in the natural world. High-scoring responses ask: What does the tiger represent in Blake's theology? What does it tell us about creation itself?</p>

<p><strong>Form Enacts Meaning:</strong> Blake's choice of trochaic tetrameter (seven syllables per line, stressed on the first syllable) is not accidental. The falling, pounding rhythm ("TY-ger TY-ger BURN-ing BRIGHT") mimics a hammer's blows, reinforcing the industrial imagery of the poem. The repetitive, almost aggressive rhythm mirrors the tiger's fierce power. Examiners reward essays that explain how metrical choice supports meaning.</p>

<p><strong>The Theological Crisis is Central:</strong> "Did he who made the Lamb make thee?" is not a casual question. It articulates a fundamental Christian paradox: How can a benevolent God create both innocence (the Lamb) and violence (the Tyger)? This is theodicy — the attempt to reconcile God's goodness with the existence of evil and suffering. Contextual sophistication means understanding that Blake, writing during the French Revolution, saw this paradox played out in real time: revolutionary ideals promised liberation but through violence.</p>

<p><strong>Uncertainty Matters:</strong> Notice that the poem ends with a question, not an answer. Blake offers no resolution to the paradox. This is philosophically honest and theologically complex. Essays that embrace this uncertainty and discuss why Blake chooses not to resolve it demonstrate mature thinking.</p>
</div>

<h3>Model Paragraph 1: Power and Paradox</h3>
<div class="model-response">
<p>Blake presents creation as an act of terrifying audacity through the poem's relentless accumulation of unanswered questions. The industrial imagery — "What the hammer? what the chain, / In what furnace was thy brain?" — depicts the Creator as a blacksmith forging the tiger through violent, physical labour, with the staccato questions mirroring the rhythmic blows of a hammer on an anvil. This Creator is not the gentle shepherd of "The Lamb" but a figure of awesome, almost reckless power. The Creator actively makes dangerous things; he does not merely permit them to exist. Moreover, the central paradox, "Could frame thy fearful symmetry?" uses an oxymoron — "fearful" (terrifying) and "symmetry" (orderly, balanced) — to suggest that beauty and terror are inseparable. The tiger's perfection is precisely what makes it dangerous. Blake's point is profound: if the Creator could make the tiger any differently, he would; but the tiger's fearfulness is inherent to its beauty. Creation is not a process of careful control but of dangerous making — the Creator takes risks, makes things that might hurt him or humanity.</p>
</div>

<h3>Model Paragraph 2: The Theological Crisis</h3>
<div class="model-response">
<p>The poem's deepest meaning emerges in the penultimate stanza: "Did he who made the Lamb make thee?" This question crystallises a theological crisis that Blake explores throughout. In Songs of Innocence, "The Lamb" presents a benevolent Creator, gentle and nurturing. But if the same Creator made both the Lamb and the Tyger, how can we maintain our faith in benevolence? The capitals — "He" for the Creator, "Lamb" for innocence — signal that both are sacred, yet fundamentally opposed. Blake is articulating theodicy: the ancient problem of reconciling God's goodness with the existence of violence, suffering, and predatory power in nature. The irresolution of the question is crucial. Blake offers no answer, no reconciliation. Instead, he forces the reader to sit with the paradox. This is particularly resonant given Blake's historical context: writing in 1794, during the French Revolution, Blake witnessed how revolutionary ideals (the promise of liberation) required revolutionary violence. Creation and destruction are intertwined; innocence and violence cannot be separated. The poem's refusal to resolve the paradox is philosophically honest.</p>
</div>

<h3>Model Paragraph 3: Form, Sound, and Meaning</h3>
<div class="model-response">
<p>Blake's choice of trochaic tetrameter — a seven-syllable line with stress falling on the first syllable — creates a pounding, falling rhythm that enacts the poem's meaning: "TY-ger TY-ger BURN-ing BRIGHT / in the FOR-ests OF the NIGHT." This rhythm is relentless, almost aggressive; it does not allow the reader to rest comfortably. The repetition of "Tyger Tyger" at opening and closing adds to this hammering effect, as if the name itself must be beaten into our consciousness. Furthermore, the rhyme scheme (AABB couplets) creates tight, enclosed units of meaning — each couplet feels complete, even as the overall message remains incomplete. The initial anaphora — the repeated "What" questions — creates a staccato effect that mirrors industrial labour: "What the hammer? what the chain, / In what furnace was thy brain?" The rapid-fire questions feel like hammer blows. All of these formal choices work together: Blake's form is not ornamental but essential. The sound and structure of the poem embody the tiger's power and the creative violence Blake is attempting to convey.</p>
</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"Tyger Tyger, burning bright, / In the forests of the night"</li>
  <li>"Could frame thy fearful symmetry?"</li>
  <li>"In what distant deeps or skies, / Burnt the fire of thine eyes?"</li>
  <li>"What the hammer? what the chain, / In what furnace was thy brain?"</li>
  <li>"Did he smile his work to see?"</li>
  <li>"Did he laugh at the slaughter?"</li>
  <li>"Did he who made the Lamb make thee?"</li>
  <li>"Dare frame thy fearful symmetry?"</li>
</ol>

<h3>Comparison Pairings</h3>
<ul>
  <li><strong>With "The Lamb" (William Blake):</strong> Essential. Compare how Blake presents two contrasting aspects of creation. "The Lamb" is gentle, innocent, celebratory; "The Tyger" is violent, terrible, questioning. Together they reveal Blake's complex theology. Both poems are in Blake's <em>Songs</em> — compare how the form differs to express different truths.</li>
  <li><strong>With "Do not go gentle into that good night" (Dylan Thomas):</strong> Both explore powerful forces and human response. Thomas's speaker rages against dying; Blake questions the Creator's authority to make dangerous things. Both deal with conflict between human will and external power.</li>
  <li><strong>With "War Photographer" (Carol Ann Duffy):</strong> Both poems wrestle with awe and terror. The photographer witnesses terrible beauty (suffering photographed); Blake presents terrible beauty as the tiger. Both ask: how do we respond when beauty and violence coexist?</li>
</ul>

<h3>Key Context: Blake and the French Revolution</h3>
<p>Blake was writing in 1794, the year of the French Revolution's Terror. The promise of liberation was being enacted through violence; the ideals of liberty and equality were being pursued through bloodshed. This historical moment deeply shaped "The Tyger." The poem asks: Is violent creation necessary? Can benevolent outcomes come from violent means? Blake's answer — articulated through the paradox of the tiger — is that creation itself is inherently violent, paradoxical, and ineradicable. The tiger cannot be unmade because the Creator chose to make it. This is both celebration (the tiger's power is real and awesome) and lament (the coexistence of violence and beauty cannot be resolved).</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the poem as simply being "about a tiger." The tiger is a symbol — for primal energy, for the violent side of creation, for the forces (revolutionary, natural, divine) that cannot be tamed. Your essay must engage with what the tiger represents, not describe the animal. Similarly, avoid saying the poem "celebrates" or "condemns" the tiger — Blake's stance is more complex: he awe-struck, troubled, questioning.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Spend time on the comparison with "The Lamb." Examiners are looking for essays that recognise both poems and use them to illuminate each other. Show how Blake uses two contrasting poems to explore the paradox of divine creation. This demonstrates sophisticated contextual understanding and elevates your response above those that treat "The Tyger" in isolation.</div>
`,
    quiz: [
      {
        id: 'igp2-tyger-m4-q1',
        question:
          'What is the most important thing to remember when writing about "The Tyger" in an exam?',
        options: [
          'Describe the tiger\'s physical appearance in detail',
          'Focus on the tiger as a symbol — for creation, power, and the paradox of good and evil',
          'Compare it only with other animal poems',
          'Write about Blake\'s painting technique',
        ],
        correct: 1,
        explanation:
          'The tiger is a symbol, not a subject for nature description. Exam responses must engage with what it represents: the violent side of creation, the Sublime, and the theological question of how a benevolent Creator could make something dangerous.',
      },
      {
        id: 'igp2-tyger-m4-q2',
        question:
          'How should "The Lamb" be used when writing about "The Tyger"?',
        options: [
          'It should never be mentioned',
          'It should be discussed as the companion poem that establishes the innocence the tiger threatens',
          'It should only be mentioned if the exam question asks about it',
          'It should be the main focus of the essay',
        ],
        correct: 1,
        explanation:
          '"The Lamb" is essential context — it represents the innocent, benevolent side of creation. The theological crisis of "The Tyger" only makes sense when you understand that the same Creator supposedly made both.',
      },
      {
        id: 'igp2-tyger-m4-q3',
        question:
          'Which contextual point is most relevant to an essay on this poem?',
        options: [
          'Blake was a vegetarian',
          'The French Revolution made Blake consider the relationship between creation and destruction',
          'Tigers were a popular subject in 18th-century poetry',
          'Blake never visited a zoo',
        ],
        correct: 1,
        explanation:
          'The French Revolution is the most relevant context — it was a period when creative and destructive energy were inseparable (liberation through violence), mirroring the tiger\'s paradoxical "fearful symmetry."',
      },
    ],
  },
];

const theTygerCourse: CourseData = {
  id: 'igcse-lit-poem-the-tyger',
  title: '"The Tyger" — William Blake',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of William Blake\'s "The Tyger" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: theTygerModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. My Last Duchess — Robert Browning
// ─────────────────────────────────────────────────────────────────────────────

const myLastDuchessModules: CourseModule[] = [
  {
    id: 'igp2-duchess-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>My Last Duchess — Robert Browning (1842)</h2>

<h3>Context</h3>
<p>Robert Browning (1812–1889) was one of the foremost Victorian poets, celebrated for perfecting the <strong>dramatic monologue</strong> — a form in which a single speaker addresses a silent listener, inadvertently revealing their own character. "My Last Duchess" was published in <em>Dramatic Lyrics</em> (1842) and is based on historical figures.</p>

<p>The speaker is widely identified as <strong>Alfonso II, Duke of Ferrara</strong> (1533–1597), an Italian Renaissance nobleman. His first wife, Lucrezia de' Medici, died in 1561 at the age of seventeen under suspicious circumstances — possibly poisoned. Shortly after her death, Alfonso began negotiations to marry the niece of the Count of Tyrol. In the poem, the Duke is showing a portrait of his deceased wife to an envoy who has come to negotiate the new marriage.</p>

<div class="key-term"><strong>Key Term: Dramatic Monologue</strong> — A poem in which a single speaker (not the poet) addresses a silent listener. The speaker unintentionally reveals aspects of their character — often negative ones — through what they say and how they say it. The reader must "read between the lines."</div>

<h3>Overview of the Poem</h3>
<p>The Duke shows the envoy a painting of his "last Duchess," hidden behind a curtain that only he controls. He describes her beauty and her tendency to be pleased by everything — compliments, a sunset, a gift of cherries, the mule she rode. He found this democratic generosity intolerable: she did not reserve her smiles exclusively for him. He "gave commands; / Then all smiles stopped together." The Duchess was silenced — likely killed. The Duke then moves on to discuss the dowry for his next bride, casually pointing out a bronze statue of Neptune as they descend the stairs.</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Power and control:</strong> The Duke seeks absolute control over his wife, her image, and the narrative. The portrait, hidden behind a curtain only he can draw, symbolises his desire to possess and regulate.</li>
  <li><strong>Jealousy and possessiveness:</strong> The Duke resents that the Duchess's joy was not exclusively his. Her warmth toward others is reinterpreted as a personal insult.</li>
  <li><strong>Art and objectification:</strong> The Duke prefers the portrait to the living woman — the painting can be controlled, silenced, and displayed on his terms.</li>
  <li><strong>Appearance vs reality:</strong> The Duke presents himself as reasonable and refined, but his words reveal cruelty, arrogance, and probable murder.</li>
  <li><strong>Patriarchal power:</strong> The poem exposes the extreme consequences of patriarchal ownership of women. The Duchess has no voice — the Duke speaks for her, about her, and over her.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The Duke never explicitly says he killed the Duchess. The phrase "I gave commands; / Then all smiles stopped together" is deliberately ambiguous. In your essay, discuss this ambiguity — it reveals the Duke's chilling ability to euphemise violence.</div>
`,
    quiz: [
      {
        id: 'igp2-duchess-m1-q1',
        question:
          'Who is the historical figure the Duke is based on?',
        options: [
          'Lorenzo de\' Medici, ruler of Florence',
          'Alfonso II, Duke of Ferrara, whose first wife died under suspicious circumstances',
          'Cosimo de\' Medici, patron of the arts',
          'Cesare Borgia, son of Pope Alexander VI',
        ],
        correct: 1,
        explanation:
          'The Duke is based on Alfonso II of Ferrara, whose first wife Lucrezia de\' Medici died at seventeen, possibly poisoned. He was negotiating a new marriage shortly afterward — the situation the poem dramatises.',
      },
      {
        id: 'igp2-duchess-m1-q2',
        question:
          'What is a dramatic monologue?',
        options: [
          'A poem written as a dialogue between two characters',
          'A poem in which a single speaker addresses a silent listener, unintentionally revealing their character',
          'A poem that dramatises a historical battle',
          'A poem recited on stage with music',
        ],
        correct: 1,
        explanation:
          'In a dramatic monologue, a single speaker (not the poet) talks to a silent listener. The key feature is that the speaker reveals more about themselves than they intend — the reader must read between the lines.',
      },
      {
        id: 'igp2-duchess-m1-q3',
        question:
          'Why does the Duke dislike the Duchess?',
        options: [
          'She was unfaithful to him with another nobleman',
          'She was too kind and generous with her smiles, treating everyone equally rather than reserving her favour for him',
          'She refused to sit for the portrait',
          'She openly criticised him in public',
        ],
        correct: 1,
        explanation:
          'The Duke resents that the Duchess was pleased by everything — sunsets, gifts, compliments — and did not reserve her joy exclusively for him. Her democratic generosity threatened his need for exclusive possession.',
      },
    ],
  },
  {
    id: 'igp2-duchess-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — My Last Duchess</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "That's my last Duchess painted on the wall, / Looking as if she were alive."</strong><br/>
The possessive pronoun <em>my</em> establishes ownership from the first word. <em>Last</em> is chillingly matter-of-fact — she is the previous model, implying there will be a next one. The phrase <em>as if she were alive</em> simultaneously praises the painting's realism and reminds us that the real woman is dead. The subjunctive <em>were</em> confirms her death.</p>

<p><strong>2. "since none puts by / The curtain I have drawn for you, but I"</strong><br/>
The curtain is a symbol of control — the Duke alone decides who sees the Duchess's image. The emphatic <em>but I</em>, placed at the end of the clause, asserts exclusive authority. In life, he could not control her smiles; in death, he controls even who may look at her.</p>

<p><strong>3. "She had / A heart — how shall I say? — too soon made glad"</strong><br/>
The parenthetical <em>how shall I say?</em> is a masterpiece of false modesty. The Duke pretends to search for the right words, as though reluctant to criticise — but his complaint is precise and deliberate. <em>Too soon made glad</em> reframes warmth and joy as faults. The Duke pathologises happiness itself.</p>

<p><strong>4. "she ranked / My gift of a nine-hundred-years-old name / With anybody's gift."</strong><br/>
The enjambment across "ranked / My gift" creates a falling rhythm that enacts the Duke's sense of degradation. His "nine-hundred-years-old name" — his aristocratic lineage — is presented as the ultimate gift, and the Duchess's failure to value it above "anybody's gift" (a sunset, cherries) is, in his view, an unforgivable slight. The possessive <em>My</em> is capitalised, asserting his self-importance.</p>

<p><strong>5. "I gave commands; / Then all smiles stopped together."</strong><br/>
The most chilling lines in the poem. <em>Gave commands</em> is a euphemism — the Duke cannot or will not say what he actually did. The passive construction distances him from the act. <em>All smiles stopped</em> could mean she was silenced, sent away, or killed. The ambiguity is deliberate — the Duke controls the narrative just as he controlled the Duchess.</p>

<p><strong>6. "Notice Neptune, though, / Taming a sea-horse, thought a rarity"</strong><br/>
The Duke casually draws attention to another art object as they leave. The bronze of <strong>Neptune taming a sea-horse</strong> is a final, telling symbol: Neptune, god of the sea, dominating a smaller creature. The Duke identifies with Neptune — he tames, controls, possesses. The Duchess was his sea-horse. The word <em>taming</em> reveals that the Duke sees relationships as exercises of power.</p>

<h3>Language Patterns</h3>
<ul>
  <li><strong>Possessive language:</strong> "my last Duchess," "my gift," "my favour" — the Duke speaks in terms of ownership.</li>
  <li><strong>Euphemism:</strong> "I gave commands" avoids directly naming the violence. The Duke's civilised language masks barbaric actions.</li>
  <li><strong>Parenthetical asides:</strong> "how shall I say?" and "if she let / Herself be lessoned so" create a false impression of moderation and reasonableness.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Pay close attention to what the Duke does <em>not</em> say. His euphemisms, pauses, and deflections are as revealing as his direct statements. Analysing silences and omissions demonstrates sophisticated reading.</div>
`,
    quiz: [
      {
        id: 'igp2-duchess-m2-q1',
        question:
          'What does the curtain over the portrait symbolise?',
        options: [
          'The Duke\'s desire to protect the painting from sunlight',
          'The Duke\'s control — he alone decides who sees the Duchess\'s image',
          'The Duchess\'s modesty during her lifetime',
          'A mourning custom of the Renaissance period',
        ],
        correct: 1,
        explanation:
          'The curtain symbolises the Duke\'s obsessive need for control. In life, he could not control the Duchess\'s smiles; in death, he controls even who may look at her portrait.',
      },
      {
        id: 'igp2-duchess-m2-q2',
        question:
          'What does the Neptune statue at the end of the poem represent?',
        options: [
          'The Duke\'s interest in Greek mythology',
          'A gift from the Duchess before she died',
          'The Duke\'s identification with a powerful god who tames and controls',
          'The envoy\'s wealth and artistic taste',
        ],
        correct: 2,
        explanation:
          'Neptune taming a sea-horse mirrors the Duke\'s own desire to tame and control. He identifies with the powerful god dominating a smaller creature — revealing that he sees relationships as exercises of power.',
      },
      {
        id: 'igp2-duchess-m2-q3',
        question:
          'Why is "I gave commands; Then all smiles stopped together" so effective?',
        options: [
          'Because it directly states that the Duke killed the Duchess',
          'Because the euphemism and ambiguity reveal the Duke\'s chilling ability to mask violence with civilised language',
          'Because it shows the Duke was kind and only asked the Duchess to stop smiling',
          'Because it uses alliteration to create a musical effect',
        ],
        correct: 1,
        explanation:
          'The lines are devastatingly effective because the Duke never directly says what he did. The euphemistic "gave commands" and the ambiguous "all smiles stopped" mask probable murder behind controlled, aristocratic language.',
      },
    ],
  },
  {
    id: 'igp2-duchess-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — My Last Duchess</h2>

<h3>Dramatic Monologue</h3>
<p>The poem is a <strong>dramatic monologue</strong> — the Duke speaks throughout, addressing the silent envoy. Browning never interrupts or comments; the reader must interpret the Duke's character entirely from his own words. This creates a powerful <strong>dramatic irony</strong>: the Duke intends to present himself as a cultured, reasonable aristocrat, but inadvertently reveals himself as a jealous, controlling, and probably murderous figure.</p>

<p>The envoy never speaks, but his presence is felt through the Duke's responses to imagined reactions: "how shall I say?" suggests awareness of a listener; "Will't please you rise?" marks the end of the conversation. The reader becomes a second silent listener, judging the Duke even as the envoy must remain diplomatically silent.</p>

<h3>Heroic Couplets (Rhyming Couplets in Iambic Pentameter)</h3>
<p>The poem is written in <strong>heroic couplets</strong> — pairs of rhyming lines in iambic pentameter (ten syllables, five stressed). However, Browning's use of <strong>enjambment</strong> consistently runs sentences across the line breaks and the rhymes, disguising the couplet form. This creates the effect of natural speech while maintaining an underlying formal control — mirroring the Duke's own surface civility masking calculated cruelty.</p>

<p>When the rhymes do coincide with the end of a phrase, the effect is emphatic — as in "I gave commands; / Then all smiles stopped together," where the finality of the statement is reinforced by the couplet's closure.</p>

<h3>Enjambment</h3>
<p>Enjambment is pervasive and deliberate. The Duke's speech flows across line breaks without pause:</p>
<ul>
  <li>"she ranked / My gift" — the break isolates "My gift," giving it emphasis</li>
  <li>"since none puts by / The curtain" — the flowing syntax mimics casual conversation</li>
  <li>"I gave commands; / Then all smiles stopped" — the enjambment creates a pause before the devastating revelation</li>
</ul>
<p>This technique creates the illusion that the Duke is speaking naturally and spontaneously, when in fact his speech is carefully controlled and rhetorically manipulative.</p>

<h3>Single-Stanza Form</h3>
<p>The poem is a single, unbroken block of text — no stanza breaks. This mirrors the Duke's uninterrupted control of the conversation. He does not pause for the envoy to respond; he does not allow interruption. The monolithic form visually represents his dominance.</p>

<h3>Structural Progression</h3>
<ol>
  <li><strong>Lines 1–13:</strong> The Duke introduces the painting and establishes his control over who sees it (the curtain).</li>
  <li><strong>Lines 13–34:</strong> He describes the Duchess's "fault" — her tendency to be pleased by everything — with increasing irritation.</li>
  <li><strong>Lines 34–46:</strong> He reveals that he "gave commands" and the smiles "stopped." This is the climax — the moment of violence, delivered with terrifying calm.</li>
  <li><strong>Lines 47–56:</strong> He pivots immediately to discussing the dowry and points out the Neptune statue. The casualness with which he moves on from implied murder is perhaps the most chilling moment.</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The tension between the regular couplet form and the flowing enjambment is crucial. The Duke's speech <em>sounds</em> natural but is structurally controlled — just as his behaviour <em>appears</em> civilised but conceals violence. Always link form to meaning.</div>
`,
    quiz: [
      {
        id: 'igp2-duchess-m3-q1',
        question:
          'Why does Browning use enjambment to disguise the rhyming couplet form?',
        options: [
          'Because he could not write regular rhymes',
          'To create the illusion of natural speech while maintaining underlying control, mirroring the Duke\'s character',
          'To make the poem harder to read',
          'Because enjambment was fashionable in the 1840s',
        ],
        correct: 1,
        explanation:
          'The disguised couplets create the effect of casual, natural speech while maintaining formal control beneath the surface — exactly mirroring the Duke\'s own surface civility masking calculated cruelty.',
      },
      {
        id: 'igp2-duchess-m3-q2',
        question:
          'What is the significance of the single-stanza form?',
        options: [
          'Browning forgot to add stanza breaks',
          'It mirrors the Duke\'s uninterrupted control of the conversation — he allows no one else to speak',
          'It makes the poem easier to memorise',
          'It was a requirement of the publisher',
        ],
        correct: 1,
        explanation:
          'The unbroken block of text visually represents the Duke\'s dominance. He controls the conversation from start to finish, never pausing for the envoy\'s response, never allowing interruption.',
      },
      {
        id: 'igp2-duchess-m3-q3',
        question:
          'What dramatic irony does the dramatic monologue form create?',
        options: [
          'The envoy knows more than the Duke about the Duchess\'s death',
          'The Duke intends to seem cultured and reasonable but inadvertently reveals himself as controlling and murderous',
          'The reader sympathises with the Duke throughout the poem',
          'Browning speaks directly to the reader through footnotes',
        ],
        correct: 1,
        explanation:
          'The dramatic monologue creates irony because the Duke reveals far more than he intends. He means to impress the envoy with his taste and status, but his words expose jealousy, possessiveness, and probable murder.',
      },
    ],
  },
  {
    id: 'igp2-duchess-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — My Last Duchess</h2>

<h3>Typical Exam Questions</h3>
<ul>
  <li>"How does Browning present the Duke's character in 'My Last Duchess'?"</li>
  <li>"Explore how Browning uses the dramatic monologue form to create meaning."</li>
  <li>"How does Browning present ideas about power and control in this poem?"</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Browning exposes the Duke's need for absolute possession through the poem's controlling structure and the speaker's revealing language. The curtain over the portrait — which "none puts by... but I" — functions as a symbol of the Duke's obsessive authority: having failed to control the living Duchess's smiles, he now controls even who may view her image. The emphatic personal pronoun "I," isolated at the line's end by the caesura and enjambment, asserts exclusive ownership with aristocratic finality. This possessiveness is rendered more disturbing by the Duke's euphemistic account of her fate: "I gave commands; / Then all smiles stopped together." The passive, bureaucratic phrasing — "gave commands" — distances the Duke from direct responsibility, revealing a man who exercises power through intermediaries and cloaks violence in civilised language. Browning's choice of the dramatic monologue form is essential to this effect: because the Duke controls the narrative entirely, the reader must actively resist his perspective, reading between the lines to perceive the cruelty he tries to conceal. The poem's final image — Neptune "taming a sea-horse" — crystallises the Duke's worldview: relationships are acts of domination, and beauty exists only to be possessed. Writing in the Victorian period, Browning uses the Renaissance Italian setting to examine patriarchal power structures that, while historically distant, remained deeply relevant to his own society's treatment of women as property.</p>
</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"That's my last Duchess painted on the wall"</li>
  <li>"Looking as if she were alive"</li>
  <li>"none puts by / The curtain I have drawn for you, but I"</li>
  <li>"She had / A heart — how shall I say? — too soon made glad"</li>
  <li>"My gift of a nine-hundred-years-old name"</li>
  <li>"I gave commands; / Then all smiles stopped together"</li>
  <li>"Neptune... / Taming a sea-horse"</li>
</ol>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always address the dramatic monologue form in your essay. The fact that only the Duke speaks — and the envoy and Duchess are silenced — is inseparable from the poem's themes of control and power. Form and meaning are one.</div>
`,
    quiz: [
      {
        id: 'igp2-duchess-m4-q1',
        question:
          'What should you always discuss when writing about "My Last Duchess" in an exam?',
        options: [
          'The history of Renaissance Italy in great detail',
          'The dramatic monologue form and how it reveals the Duke\'s character through dramatic irony',
          'A comparison with every other poem in the anthology',
          'The painting techniques used in the Duke\'s portrait',
        ],
        correct: 1,
        explanation:
          'The dramatic monologue form is inseparable from the poem\'s meaning. The Duke reveals his cruelty inadvertently — discussing this form and the dramatic irony it creates is essential.',
      },
      {
        id: 'igp2-duchess-m4-q2',
        question:
          'Which approach to context is most effective for this poem?',
        options: [
          'Spending a paragraph describing the life of Alfonso II of Ferrara',
          'Linking the historical context to Browning\'s wider critique of patriarchal power and the treatment of women as property',
          'Ignoring context entirely',
          'Discussing Browning\'s marriage to Elizabeth Barrett Browning',
        ],
        correct: 1,
        explanation:
          'The most effective approach links the Renaissance setting to broader themes — Browning uses historical distance to examine patriarchal power structures that remained relevant in his own Victorian society.',
      },
      {
        id: 'igp2-duchess-m4-q3',
        question:
          'Why is the Duke\'s immediate pivot to discussing the dowry after "all smiles stopped" significant?',
        options: [
          'It shows he has forgotten about the Duchess',
          'It reveals his chilling indifference — the Duchess was disposable, and his concern is the next transaction',
          'It demonstrates his grief is too painful to discuss further',
          'It is simply a change of subject with no deeper meaning',
        ],
        correct: 1,
        explanation:
          'The casual transition from implied murder to dowry negotiations reveals the Duke\'s terrifying indifference. The Duchess was a possession — now disposed of — and his concern is acquiring the next one on favourable terms.',
      },
    ],
  },
];

const myLastDuchessCourse: CourseData = {
  id: 'igcse-lit-poem-my-last-duchess',
  title: '"My Last Duchess" — Robert Browning',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of Robert Browning\'s "My Last Duchess" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: myLastDuchessModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. Half-caste — John Agard
// ─────────────────────────────────────────────────────────────────────────────

const halfCasteModules: CourseModule[] = [
  {
    id: 'igp2-halfcaste-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>Half-caste — John Agard (1996)</h2>

<h3>Context</h3>
<p>John Agard (born 1949) is a Guyanese-British poet, playwright, and performer who moved to England in 1977. He grew up in Georgetown, Guyana, in a mixed-race family — his mother was of Portuguese descent and his father was of Black African descent. This mixed heritage is central to "Half-caste," which was published in his 1996 collection <em>Get Back, Pimple</em>.</p>

<p>The term "half-caste" was commonly used in Britain to describe people of mixed racial heritage. The word <em>caste</em> derives from the Latin <em>castus</em> (pure), so "half-caste" literally means "half-pure" — implying that mixed-race people are incomplete or contaminated. Agard's poem is a direct, witty, and angry challenge to this language and the racist assumptions embedded within it.</p>

<div class="key-term"><strong>Key Term: Phonetic Spelling</strong> — Writing words as they sound rather than using standard spelling. Agard uses phonetic spelling to represent Caribbean Creole English on the page — for example, "wid" for "with," "yu" for "you," "dem" for "them." This asserts the legitimacy of his own voice and resists Standard English as the only acceptable form.</div>

<h3>Overview of the Poem</h3>
<p>The poem is addressed directly to someone who has called the speaker "half-caste." Agard uses a series of absurd analogies to expose the illogic of the term: if mixing is inferior, then Picasso mixing red and green on canvas is "half-caste," Tchaikovsky mixing instruments in a symphony is "half-caste," and the English weather — "half-caste weather" — is inferior because it mixes sun and cloud. Through humour and escalating ridicule, Agard demonstrates that mixing is the source of beauty, creativity, and richness, not inferiority.</p>

<p>The poem ends with a powerful challenge: "come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind" — implying that it is the person who uses the term "half-caste" who is incomplete, not the speaker.</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Racial identity and prejudice:</strong> The poem directly challenges racist language and the assumptions behind it.</li>
  <li><strong>The power of language:</strong> Agard shows how words shape perception — calling someone "half-caste" frames them as incomplete.</li>
  <li><strong>Cultural mixing as richness:</strong> Far from being a weakness, mixing (of races, colours, sounds, cultures) produces beauty and creativity.</li>
  <li><strong>Voice and resistance:</strong> The poem is an act of resistance — Agard refuses to accept the label imposed on him and turns it back on the accuser.</li>
  <li><strong>Humour as a weapon:</strong> Agard uses wit and absurdity to dismantle prejudice. Laughter becomes a form of defiance.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Do not simply say the poem is "about racism." Be specific: it is about the power of language to dehumanise, and Agard's strategy of using absurd analogies and humour to expose the illogic of racist terminology.</div>
`,
    quiz: [
      {
        id: 'igp2-halfcaste-m1-q1',
        question:
          'What does the term "half-caste" literally imply?',
        options: [
          'Half-born',
          'Half-pure — suggesting mixed-race people are incomplete or contaminated',
          'Half-British',
          'Half-foreign',
        ],
        correct: 1,
        explanation:
          'The word "caste" derives from Latin "castus" meaning pure. "Half-caste" therefore implies "half-pure" — a deeply offensive suggestion that mixed-race people are incomplete or tainted.',
      },
      {
        id: 'igp2-halfcaste-m1-q2',
        question:
          'What strategy does Agard use to challenge the term "half-caste"?',
        options: [
          'He provides scientific evidence about genetics',
          'He uses absurd analogies — if mixing is inferior, then Picasso and Tchaikovsky are also "half-caste"',
          'He tells a personal story about experiencing racism at school',
          'He quotes legal definitions to show the term is outdated',
        ],
        correct: 1,
        explanation:
          'Agard uses a series of ridiculous analogies — if mixing makes something inferior, then art, music, and weather are all "half-caste." This exposes the absurdity of the racist logic behind the term.',
      },
      {
        id: 'igp2-halfcaste-m1-q3',
        question:
          'Why does Agard use phonetic spelling in the poem?',
        options: [
          'Because he could not spell in Standard English',
          'To make the poem difficult to read',
          'To assert the legitimacy of Caribbean Creole English and resist the dominance of Standard English',
          'Because the poem was originally written in French',
        ],
        correct: 2,
        explanation:
          'Phonetic spelling represents Agard\'s Caribbean Creole voice on the page, asserting its value and legitimacy. It is a political choice — refusing to conform to Standard English mirrors the poem\'s theme of resisting imposed labels.',
      },
    ],
  },
  {
    id: 'igp2-halfcaste-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — Half-caste</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "Excuse me / standing on one leg / I'm half-caste"</strong><br/>
The poem opens with a literal, absurd image: if the speaker is only half a person, he should stand on one leg. The mock-politeness of <em>Excuse me</em> carries an edge of sarcasm — Agard parodies the social expectation that the victim of prejudice should be polite. The physical image immediately exposes the absurdity of the term by taking it literally.</p>

<p><strong>2. "yu mean when picasso / mix red an green / is a half-caste canvas?"</strong><br/>
The Picasso analogy is devastating. Nobody would call a painting by one of history's greatest artists inferior because it mixes colours — yet the logic of "half-caste" implies that mixing is always a dilution. By placing racial mixing alongside artistic mixing, Agard reveals that the prejudice lies not in the act of mixing but in the racist perception of it.</p>

<p><strong>3. "yu mean tchaikovsky / sit down at dah piano / an mix a black key / wid a white key / is a half-caste symphony?"</strong><br/>
The Tchaikovsky analogy adds another dimension: music literally requires the mixing of black and white keys. The language of race (black/white) is mapped onto the piano keyboard, showing that what racists call contamination is in fact the source of harmony and beauty. The analogy also implicitly mocks the binary thinking that categorises people as simply "black" or "white."</p>

<p><strong>4. "yu mean when light an shadow / mix in de sky / is a half-caste weather?"</strong><br/>
The weather analogy extends the argument to nature itself. If mixing is inferior, then the English sky — a perpetual mix of sun and cloud — is "half-caste." The absurdity reaches its peak: the very environment the racist inhabits is a product of mixing.</p>

<p><strong>5. "I half-caste human being / cast half-a-shadow"</strong><br/>
Agard takes the literal implications further — if he is half a person, he casts only half a shadow. The image is both darkly humorous and disturbing, exposing how dehumanising the label is. A half-shadow suggests a ghost, someone not fully present — which is exactly the status the term imposes.</p>

<p><strong>6. "come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind"</strong><br/>
The poem's powerful conclusion turns the accusation back on the accuser. It is the person who uses "half-caste" who is incomplete — they see with half an eye, hear with half an ear, think with half a mind. The tricolon (eye, ear, mind) escalates from perception to cognition, suggesting that prejudice is not just a failure of vision but a failure of thought.</p>

<h3>Language Features</h3>
<ul>
  <li><strong>Caribbean Creole English:</strong> "wid," "yu," "dem," "dah" — Agard writes in his own voice, refusing to code-switch into Standard English. This is itself a political statement: his language is whole, not half.</li>
  <li><strong>Repetition:</strong> "Explain yuself" is repeated throughout, creating an insistent, challenging rhythm — the speaker demands an answer.</li>
  <li><strong>Humour and irony:</strong> The tone is witty and playful, but the humour carries a serious edge. Laughter is used to disarm and dismantle prejudice.</li>
  <li><strong>Direct address:</strong> The persistent "yu" creates a confrontational dynamic — the reader is implicated as the person being challenged.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The strength of this poem lies in the analogies. In your essay, analyse at least two analogies in detail, explaining exactly how they expose the illogic of the term "half-caste." Don't just describe them — explain why they are effective.</div>
`,
    quiz: [
      {
        id: 'igp2-halfcaste-m2-q1',
        question:
          'What does the Picasso analogy achieve?',
        options: [
          'It shows Agard is a fan of modern art',
          'It exposes the absurdity of calling mixing inferior by applying the same logic to a masterpiece of art',
          'It compares Agard\'s poetry to Picasso\'s paintings',
          'It suggests Picasso was also of mixed heritage',
        ],
        correct: 1,
        explanation:
          'The analogy is devastating because no one would call a Picasso painting inferior for mixing colours. By placing racial mixing alongside artistic mixing, Agard exposes the illogic of the racist assumption.',
      },
      {
        id: 'igp2-halfcaste-m2-q2',
        question:
          'What does the ending of the poem achieve by telling the listener to "come back tomorrow / wid de whole of yu eye"?',
        options: [
          'It politely invites the listener to return for another conversation',
          'It turns the accusation of incompleteness back on the accuser — it is the racist, not the speaker, who is "half"',
          'It admits that the speaker needs more time to explain',
          'It shows the speaker is tired and wants to end the conversation',
        ],
        correct: 1,
        explanation:
          'The ending is a powerful reversal: the person who uses "half-caste" sees with half an eye, hears with half an ear, and thinks with half a mind. The racist, not the mixed-race person, is the one who is incomplete.',
      },
      {
        id: 'igp2-halfcaste-m2-q3',
        question:
          'Why is the use of Caribbean Creole English significant?',
        options: [
          'It makes the poem harder for English readers to understand',
          'It asserts the value and legitimacy of Agard\'s own voice, resisting the dominance of Standard English',
          'It was the only language Agard could write in',
          'It is used for comic effect only',
        ],
        correct: 1,
        explanation:
          'Writing in Creole is a political act — it refuses to conform to the standard that declares some forms of English superior. His language is whole and complete, mirroring the poem\'s argument that he is whole, not half.',
      },
    ],
  },
  {
    id: 'igp2-halfcaste-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — Half-caste</h2>

<h3>Free Verse and No Standard Punctuation</h3>
<p>The poem is written in <strong>free verse</strong> with almost no punctuation — no full stops, no commas, no capital letters (except for proper nouns like Picasso and Tchaikovsky). This is a deliberate rejection of the rules of Standard English grammar. Just as the poem rejects the racist label imposed on the speaker, the form rejects the literary conventions imposed by the dominant culture. The absence of punctuation creates a breathless, unstoppable quality — the speaker's argument pours out in a torrent that cannot be interrupted.</p>

<h3>Stanza Structure</h3>
<p>The poem has no regular stanza pattern. Lines vary in length, and the visual arrangement on the page is irregular. This irregularity is itself a statement: the poem refuses to fit into neat, uniform boxes — just as the speaker refuses to be categorised by a reductive label. The form is mixed, hybrid, unpredictable — like the identity it celebrates.</p>

<h3>Repetition and Refrain</h3>
<p>The phrase <em>"Explain yuself"</em> recurs throughout, functioning as a refrain that structures the poem around the demand for justification. Each time it appears, a new absurd analogy follows. This creates an escalating, cumulative effect — the more the listener is asked to explain, the more ridiculous the position becomes. The repetition also creates a confrontational rhythm, like a cross-examination.</p>

<h3>Structural Movement</h3>
<ol>
  <li><strong>Opening (standing on one leg):</strong> The absurd literal image immediately establishes the tone — witty, challenging, defiant.</li>
  <li><strong>Analogies (Picasso, Tchaikovsky, weather):</strong> The central section builds through a series of analogies, each applying the logic of "half-caste" to art, music, and nature. The effect is cumulative — each analogy reinforces the absurdity.</li>
  <li><strong>Personal challenge ("I half-caste human being"):</strong> The speaker applies the term to himself, showing its dehumanising implications.</li>
  <li><strong>Reversal ("come back tomorrow"):</strong> The poem concludes by turning the accusation back on the accuser, demanding that <em>they</em> return with their whole self.</li>
</ol>

<h3>Performance Poetry</h3>
<p>Agard is a performance poet — his work is designed to be spoken aloud. The poem's rhythm, repetition, direct address, and phonetic spelling all serve oral delivery. Reading the poem silently on the page misses much of its power. The <strong>performative quality</strong> connects to a long tradition of oral poetry in Caribbean culture, where poetry is communal, political, and physical — not confined to the printed page.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> When discussing the poem's lack of punctuation and Standard English spelling, always frame these as deliberate choices, not errors. They are political acts of resistance — the form enacts the poem's message of refusing imposed categories.</div>
`,
    quiz: [
      {
        id: 'igp2-halfcaste-m3-q1',
        question:
          'Why does Agard avoid standard punctuation and capitalisation?',
        options: [
          'Because he did not learn punctuation rules',
          'To reject the conventions of Standard English, mirroring the poem\'s rejection of imposed labels',
          'To make the poem easier to read aloud',
          'Because punctuation was not used in Guyanese poetry',
        ],
        correct: 1,
        explanation:
          'The absence of standard punctuation and capitalisation is a deliberate rejection of the dominant culture\'s rules — just as the poem rejects the racist label "half-caste." The form enacts the poem\'s message of resistance.',
      },
      {
        id: 'igp2-halfcaste-m3-q2',
        question:
          'What is the structural effect of the repeated phrase "Explain yuself"?',
        options: [
          'It creates a soothing, meditative quality',
          'It functions as a confrontational refrain that escalates the demand for justification',
          'It shows the speaker is confused about his own identity',
          'It is a greeting in Caribbean Creole English',
        ],
        correct: 1,
        explanation:
          '"Explain yuself" structures the poem as a cross-examination. Each repetition introduces another absurd analogy, cumulatively demolishing the logic of the term "half-caste."',
      },
      {
        id: 'igp2-halfcaste-m3-q3',
        question:
          'Why is it important that this poem is performance poetry?',
        options: [
          'Because written poetry is always inferior to performed poetry',
          'Because the oral delivery, rhythm, and direct address connect to Caribbean poetic tradition and amplify the poem\'s confrontational energy',
          'Because Agard could not find a publisher for the written version',
          'Because all IGCSE poems must be performed in the exam',
        ],
        correct: 1,
        explanation:
          'As performance poetry, the poem\'s power comes from being spoken aloud — the rhythm, repetition, and direct address create a physical, communal, confrontational experience rooted in Caribbean oral tradition.',
      },
    ],
  },
  {
    id: 'igp2-halfcaste-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — Half-caste</h2>

<h3>Typical Exam Questions</h3>
<ul>
  <li>"How does Agard challenge prejudice in 'Half-caste'?"</li>
  <li>"Explore how Agard uses humour to make a serious point in this poem."</li>
  <li>"How does Agard use language and form to convey his message?"</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Agard dismantles the term "half-caste" by applying its logic to universally admired forms of mixing, thereby exposing its absurdity. The Tchaikovsky analogy — "yu mean tchaikovsky / sit down at dah piano / an mix a black key / wid a white key / is a half-caste symphony?" — is particularly effective because it maps the language of race ("black key," "white key") onto an artistic process that everyone recognises as beautiful. The rhetorical question dares the listener to call a symphony inferior because it mixes black and white — an obviously ridiculous proposition that, by analogy, makes the racial use of "half-caste" equally absurd. Agard reinforces this challenge through form: the poem's rejection of Standard English punctuation and spelling — "wid," "yu," "dah" — enacts its thematic resistance. Just as the speaker refuses the label "half-caste," the poem refuses to conform to the conventions of the culture that coined the term. The escalating structure, built around the refrain "Explain yuself," transforms the poem into a cross-examination in which the accuser — not the speaker — is on trial. Agard, who experienced racial prejudice after moving from Guyana to England in 1977, weaponises humour as a form of intellectual resistance: laughter dismantles prejudice more effectively than anger, because it exposes the logical bankruptcy of racism without allowing the racist to claim victimhood.</p>
</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"Excuse me / standing on one leg / I'm half-caste"</li>
  <li>"yu mean when picasso / mix red an green / is a half-caste canvas?"</li>
  <li>"mix a black key / wid a white key / is a half-caste symphony?"</li>
  <li>"Explain yuself"</li>
  <li>"I half-caste human being / cast half-a-shadow"</li>
  <li>"come back tomorrow / wid de whole of yu eye / an de whole of yu ear / an de whole of yu mind"</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Simply stating "Agard is angry about racism." While this is true, it doesn't constitute analysis. Focus on <em>how</em> he challenges racism — through humour, analogy, structural choices, and the reversal at the end.</div>
`,
    quiz: [
      {
        id: 'igp2-halfcaste-m4-q1',
        question:
          'What makes the analogies in "Half-caste" effective exam material?',
        options: [
          'They are easy to remember because they mention famous people',
          'They provide rich opportunities to analyse how Agard exposes the illogic of racist terminology through specific literary techniques',
          'They are the only quotations in the poem',
          'They are required by the mark scheme',
        ],
        correct: 1,
        explanation:
          'The analogies are rich analytical material because they combine humour, rhetorical questions, racial language mapped onto art/music, and logical argument. Each analogy can be unpacked in detail to show how Agard\'s techniques serve his message.',
      },
      {
        id: 'igp2-halfcaste-m4-q2',
        question:
          'How should the poem\'s form be discussed in an essay?',
        options: [
          'As a weakness — the poem lacks proper grammar',
          'As a deliberate political choice — the rejection of Standard English conventions mirrors the rejection of racist labels',
          'As irrelevant to the poem\'s meaning',
          'As evidence that performance poetry is less literary than written poetry',
        ],
        correct: 1,
        explanation:
          'The form is a political act: rejecting Standard English conventions mirrors the poem\'s rejection of imposed racial categories. Always frame formal choices as deliberate and meaningful, not as errors.',
      },
      {
        id: 'igp2-halfcaste-m4-q3',
        question:
          'What is the strongest way to discuss humour in this poem?',
        options: [
          'List the funny moments without analysis',
          'Explain how humour functions as a weapon — dismantling prejudice by exposing its logical absurdity',
          'Argue that the poem is not really funny',
          'Compare it to a comedy show',
        ],
        correct: 1,
        explanation:
          'Humour is not just entertainment — it is a rhetorical strategy. Agard uses wit to dismantle prejudice from within, forcing the listener to laugh at their own assumptions. This is more effective than anger because it exposes logical bankruptcy.',
      },
    ],
  },
];

const halfCasteCourse: CourseData = {
  id: 'igcse-lit-poem-half-caste',
  title: '"Half-caste" — John Agard',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of John Agard\'s "Half-caste" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: halfCasteModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. Do not go gentle into that good night — Dylan Thomas
// ─────────────────────────────────────────────────────────────────────────────

const doNotGoGentleModules: CourseModule[] = [
  {
    id: 'igp2-donotgo-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>Do not go gentle into that good night — Dylan Thomas (1951)</h2>

<h3>Context</h3>
<p>Dylan Thomas (1914–1953) was a Welsh poet and writer known for his rich, musical language and intense emotional register. He grew up in Swansea and wrote much of his best work in his twenties and thirties. He died in New York at thirty-nine, following a life marked by alcoholism and financial difficulty.</p>

<p>"Do not go gentle into that good night" was written in 1951 and published in 1952 in his collection <em>In Country Sleep</em>. The poem is addressed to his father, David John Thomas, who was dying of pneumonia and going blind. Thomas's father had been a proud, fiercely intelligent man — a grammar school English teacher who loved literature. Watching this strong figure decline was devastating for Thomas, and the poem is both a plea for resistance and an expression of grief.</p>

<div class="key-term"><strong>Key Term: Villanelle</strong> — A highly structured 19-line poem with five tercets (three-line stanzas) followed by a quatrain (four-line stanza). It uses only two rhymes throughout and features two refrains that alternate and then combine in the final stanza. The villanelle's rigid repetition creates an incantatory, almost prayer-like quality.</div>

<h3>Overview of the Poem</h3>
<p>The poem urges the dying — and specifically the poet's father — not to accept death passively but to "rage against the dying of the light." Thomas presents four types of men (wise men, good men, wild men, grave men) who each have reasons to resist death. The poem builds through these examples to the final, raw, personal stanza in which Thomas directly addresses his father: "And you, my father, there on the sad height, / Curse, bless, me now with your fierce tears, I pray."</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Death and resistance:</strong> The poem refuses to accept death quietly. It demands passion, fury, and defiance in the face of mortality.</li>
  <li><strong>Father-son relationship:</strong> Beneath the universal statement, this is an intensely personal poem — a son begging his father not to give up.</li>
  <li><strong>Light and darkness:</strong> The central metaphor: light represents life, vitality, and consciousness; darkness represents death.</li>
  <li><strong>Legacy and regret:</strong> Each type of man has left something undone — their resistance to death is fuelled by awareness of what they have not accomplished.</li>
  <li><strong>The power of language:</strong> The poem itself is an act of resistance — Thomas uses words to fight against the silence of death.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The villanelle form is inseparable from the poem's meaning. The repeating refrains — "Do not go gentle into that good night" and "Rage, rage against the dying of the light" — create a desperate, incantatory quality, as though repetition alone could hold death at bay.</div>
`,
    quiz: [
      {
        id: 'igp2-donotgo-m1-q1',
        question:
          'Who is the poem addressed to?',
        options: [
          'Thomas\'s wife, Caitlin',
          'Thomas\'s dying father, who was going blind',
          'A close friend who was terminally ill',
          'Death personified',
        ],
        correct: 1,
        explanation:
          'The poem is addressed to Thomas\'s father, David John Thomas, who was dying of pneumonia and losing his sight. The final stanza makes this personal address explicit: "And you, my father."',
      },
      {
        id: 'igp2-donotgo-m1-q2',
        question:
          'What is a villanelle?',
        options: [
          'A 14-line poem with a volta at line 9',
          'A 19-line poem with repeating refrains, two rhymes, five tercets, and a final quatrain',
          'A poem written in free verse with irregular stanza lengths',
          'A poem of six six-line stanzas followed by a three-line envoi',
        ],
        correct: 1,
        explanation:
          'A villanelle is a highly structured 19-line poem with five tercets and a final quatrain, using only two rhymes and two alternating refrains that combine in the closing stanza.',
      },
      {
        id: 'igp2-donotgo-m1-q3',
        question:
          'What is the poem\'s central message?',
        options: [
          'Accept death peacefully and without struggle',
          'Death should be resisted with passion and fury — do not give in quietly',
          'The afterlife is more beautiful than earthly life',
          'Old age brings wisdom and contentment',
        ],
        correct: 1,
        explanation:
          'The poem is a fierce refusal of passive acceptance. It demands that the dying resist death with everything they have — "Rage, rage against the dying of the light."',
      },
    ],
  },
  {
    id: 'igp2-donotgo-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — Do not go gentle into that good night</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "Do not go gentle into that good night"</strong><br/>
The opening refrain uses <em>gentle</em> as an adverb (meaning gently), creating an unusual, archaic phrasing that draws attention to itself. <em>Good night</em> is a double meaning: it is both a farewell (as in "goodnight") and a metaphor for death (night = darkness = the end). The imperative "Do not" is a command, establishing the poem's tone of urgent defiance.</p>

<p><strong>2. "Rage, rage against the dying of the light"</strong><br/>
The second refrain uses the repeated imperative <em>Rage, rage</em> — the repetition intensifies the demand, making it almost a battle cry. <em>Dying of the light</em> is a metaphor for death, but the present participle <em>dying</em> (rather than "death of the light") makes the process gradual and ongoing — there is still time to fight. The verb <em>rage</em> connotes fury, passion, and primal energy.</p>

<p><strong>3. "Old age should burn and rave at close of day"</strong><br/>
<em>Burn</em> and <em>rave</em> are verbs of intense energy — they reject the stereotype of old age as passive and quiet. <em>Close of day</em> extends the light/dark metaphor: the end of a day parallels the end of a life. Thomas insists that the dying should be as fiery as the sunset, not meekly fading.</p>

<p><strong>4. "Though wise men at their end know dark is right, / They do not go gentle"</strong><br/>
Wise men understand intellectually that death is natural (<em>dark is right</em>), yet they still resist. The concessive <em>though</em> creates a powerful tension: knowing that death is inevitable does not mean accepting it. Even rational understanding cannot extinguish the urge to resist.</p>

<p><strong>5. "Wild men who caught and sang the sun in flight"</strong><br/>
<em>Caught and sang the sun</em> is a magnificent image of men who lived passionately, embracing life with artistic and physical energy. <em>In flight</em> suggests both the sun moving across the sky and time passing — they tried to hold onto fleeting joy.</p>

<p><strong>6. "Curse, bless, me now with your fierce tears, I pray"</strong><br/>
The final personal plea is extraordinary. <em>Curse, bless</em> — the oxymoronic pairing accepts that his father's rage may be directed at him; Thomas wants any response rather than passive silence. <em>Fierce tears</em> is another oxymoron — tears suggest vulnerability, but <em>fierce</em> makes them an act of strength. <em>I pray</em> transforms the entire poem into a prayer.</p>

<h3>Imagery Patterns</h3>
<ul>
  <li><strong>Light and dark:</strong> The central binary. Light = life, consciousness, passion. Dark/night = death, silence, extinction. The poem is a plea to keep the light burning.</li>
  <li><strong>Fire imagery:</strong> "burn," "blaze," "rage," "lightning" — fire represents defiance, vitality, and the refusal to be extinguished.</li>
  <li><strong>Nature imagery:</strong> "sun," "green bay," "meteors," "lightning" — the natural world provides images of beauty, energy, and transience.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The oxymorons ("Curse, bless," "fierce tears," "blind eyes could blaze like meteors") are crucial. They capture the poem's refusal of simple categories — grief and defiance, weakness and strength, death and resistance are all intertwined.</div>
`,
    quiz: [
      {
        id: 'igp2-donotgo-m2-q1',
        question:
          'What does "good night" in the refrain symbolise?',
        options: [
          'A pleasant evening spent with family',
          'Death — "night" as darkness and "good night" as a farewell',
          'Sleep, which the speaker wants to avoid',
          'The night sky, which the speaker finds beautiful',
        ],
        correct: 1,
        explanation:
          '"Good night" works as both a farewell and a metaphor for death. Night represents darkness and the end; "good night" is the gentle parting the speaker urges his father to resist.',
      },
      {
        id: 'igp2-donotgo-m2-q2',
        question:
          'What is the effect of the oxymoron "fierce tears"?',
        options: [
          'It shows the father is angry with his son',
          'It combines vulnerability (tears) with strength (fierce), refusing to see grief as weakness',
          'It describes tears caused by physical pain',
          'It is a contradiction that makes no sense',
        ],
        correct: 1,
        explanation:
          '"Fierce tears" fuses vulnerability with defiance — crying becomes an act of resistance rather than surrender. The oxymoron captures the poem\'s central refusal to accept simple categories.',
      },
      {
        id: 'igp2-donotgo-m2-q3',
        question:
          'Why does Thomas use the present participle "dying" rather than "death" of the light?',
        options: [
          'It was required by the rhyme scheme',
          'It makes the process gradual and ongoing, implying there is still time to fight',
          'It is grammatically incorrect, creating a deliberate error',
          'It suggests the light has already died',
        ],
        correct: 1,
        explanation:
          '"Dying" (present participle) suggests an ongoing process rather than a completed event. The light is still fading — there is still time to rage against it, still a chance to resist.',
      },
    ],
  },
  {
    id: 'igp2-donotgo-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — Do not go gentle into that good night</h2>

<h3>The Villanelle</h3>
<p>This is one of the most famous villanelles in the English language. The form comprises:</p>
<ul>
  <li><strong>19 lines</strong> total</li>
  <li><strong>Five tercets</strong> (three-line stanzas) followed by one <strong>quatrain</strong> (four-line stanza)</li>
  <li><strong>Two refrains:</strong> Line 1 ("Do not go gentle into that good night") and Line 3 ("Rage, rage against the dying of the light") alternate as the final line of each tercet and then combine as the final couplet of the quatrain</li>
  <li><strong>Two rhymes only:</strong> The entire poem uses just two rhyme sounds — "night/right/light/flight/sight/height" and "day/they/way/bay/pray/gay"</li>
</ul>

<h3>Why the Villanelle Form Matters</h3>
<p>The villanelle's rigid structure creates a sense of <strong>obsessive repetition</strong> — the two refrains return again and again, like a mantra or prayer. This formal insistence mirrors the poem's emotional insistence: the speaker repeats his plea because he cannot stop pleading. The refrains become more urgent with each repetition, gaining emotional weight as the poem progresses.</p>

<p>The constraining form also mirrors the constraints of mortality. Thomas is fighting against an inevitable end — just as the villanelle forces the poet to return to the same lines, death forces the dying to return to the same destination. The tension between the poet's resistance and the form's inevitability is the poem's structural drama.</p>

<h3>Structural Movement</h3>
<ol>
  <li><strong>Stanza 1:</strong> The universal statement — old age should resist death.</li>
  <li><strong>Stanza 2:</strong> Wise men resist because their words have not achieved enough.</li>
  <li><strong>Stanza 3:</strong> Good men resist because their deeds might have "danced in a green bay."</li>
  <li><strong>Stanza 4:</strong> Wild men resist because they realise too late that time has passed.</li>
  <li><strong>Stanza 5:</strong> Grave (serious) men resist because even at the end, "blind eyes could blaze like meteors."</li>
  <li><strong>Stanza 6 (quatrain):</strong> The personal turn — Thomas addresses his father directly, combining both refrains in a final, desperate plea.</li>
</ol>

<p>The movement from universal examples to personal plea is crucial. The first five stanzas build a philosophical argument; the sixth collapses into raw emotion. The word <em>father</em> in the final stanza transforms the entire poem — everything before it was preparation for this moment.</p>

<h3>Metre</h3>
<p>The poem is written in <strong>iambic pentameter</strong> — the traditional metre of English verse, associated with dignity, gravitas, and formal speech. The regular metre gives the poem a measured, solemn quality that contrasts with the fierce emotion of the content. When Thomas breaks the metre — as in the stressed opening of "Rage, rage" — the disruption is powerful, signalling moments of heightened passion.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The villanelle form is your single most important point about this poem. Explain how the repeating refrains create obsessive, prayer-like insistence, and how the rigid form mirrors the inescapability of death while simultaneously representing the poet's refusal to accept it.</div>
`,
    quiz: [
      {
        id: 'igp2-donotgo-m3-q1',
        question:
          'How does the villanelle form contribute to the poem\'s meaning?',
        options: [
          'It makes the poem sound musical and pleasant',
          'The repeating refrains create obsessive, prayer-like insistence, mirroring the speaker\'s desperate plea against death',
          'It allows Thomas to use more rhymes than other forms',
          'It was the only form Thomas knew how to write in',
        ],
        correct: 1,
        explanation:
          'The villanelle\'s repetition creates a mantra-like quality — the refrains return obsessively because the speaker cannot stop pleading. The rigid form mirrors death\'s inevitability while the emotional content represents resistance.',
      },
      {
        id: 'igp2-donotgo-m3-q2',
        question:
          'What is the structural significance of the final stanza?',
        options: [
          'It introduces a new theme unrelated to the rest of the poem',
          'It summarises the four types of men described earlier',
          'It shifts from universal examples to a direct, personal plea to the poet\'s father',
          'It repeats the first stanza exactly',
        ],
        correct: 2,
        explanation:
          'The final stanza transforms the poem from a philosophical meditation into a raw, personal plea. The word "father" reveals that everything before was building to this moment of intimate desperation.',
      },
      {
        id: 'igp2-donotgo-m3-q3',
        question:
          'Why are there four types of men in the poem?',
        options: [
          'To pad out the poem to the required length',
          'Because Thomas knew exactly four dying men',
          'To show that the desire to resist death is universal — every kind of person has reasons to fight',
          'To create a list poem in the tradition of Walt Whitman',
        ],
        correct: 2,
        explanation:
          'The four types — wise, good, wild, grave — represent a cross-section of humanity. By showing that all types resist death, Thomas argues that the urge to fight is universal, before narrowing to his own father.',
      },
    ],
  },
  {
    id: 'igp2-donotgo-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — Do not go gentle into that good night</h2>

<h3>Typical Exam Questions</h3>
<ul>
  <li>"How does Thomas present attitudes to death in 'Do not go gentle into that good night'?"</li>
  <li>"Explore how Thomas uses form and structure to convey emotion in this poem."</li>
  <li>"How does Thomas present the relationship between father and son?"</li>
</ul>

<h3>Model Paragraph</h3>
<div class="model-response">
<p>Thomas uses the villanelle's relentless repetition to transform a plea against death into something approaching prayer. The two refrains — "Do not go gentle into that good night" and "Rage, rage against the dying of the light" — return with increasing emotional urgency, their insistence mirroring the desperate repetitiveness of grief itself: the bereaved return again and again to the same impossible demand. The villanelle form, with its rigid structure and limited rhymes, enacts a paradox central to the poem: the inevitability of the pattern (the refrains must return, just as death must come) is set against the fierce resistance of the content ("Rage, rage"). Thomas's choice of iambic pentameter lends the poem gravitas and formality, but this is disrupted at key moments — the stressed opening spondee of "Rage, rage" breaks the iambic pattern, the rhythmic disruption performing the very defiance it demands. The poem's structural movement from universal types (wise men, good men, wild men, grave men) to the devastating personal address — "And you, my father" — strips away philosophical distance to reveal raw, individual grief. The final oxymoron, "Curse, bless, me now with your fierce tears," accepts that resistance to death may involve anger directed at the living, but insists that even painful engagement is preferable to the silence of surrender.</p>
</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"Do not go gentle into that good night"</li>
  <li>"Rage, rage against the dying of the light"</li>
  <li>"Old age should burn and rave at close of day"</li>
  <li>"Though wise men at their end know dark is right"</li>
  <li>"Wild men who caught and sang the sun in flight"</li>
  <li>"Blind eyes could blaze like meteors"</li>
  <li>"Curse, bless, me now with your fierce tears, I pray"</li>
</ol>

<div class="common-mistake"><strong>Common Mistake:</strong> Describing the poem as "about a man who is sad his father is dying." While this is the biographical situation, the poem makes a universal argument about how all people should face death. Your essay should balance the personal and the universal.</div>
`,
    quiz: [
      {
        id: 'igp2-donotgo-m4-q1',
        question:
          'What is the most important formal feature to discuss in an essay on this poem?',
        options: [
          'The use of simile in stanza 5',
          'The villanelle form and its repeating refrains',
          'The poem\'s Welsh cultural context',
          'The alliteration in the title',
        ],
        correct: 1,
        explanation:
          'The villanelle form is central — the repeating refrains, the rigid structure, and the tension between formal inevitability and emotional resistance are the poem\'s defining features.',
      },
      {
        id: 'igp2-donotgo-m4-q2',
        question:
          'How should you balance the personal and universal in an essay on this poem?',
        options: [
          'Focus only on the biographical context — it is about Thomas\'s father',
          'Ignore the personal element and discuss only universal themes',
          'Show how the poem moves from universal argument (the four types of men) to personal plea (the father), and how both reinforce the central message',
          'Discuss the personal element in the introduction and the universal element in the conclusion',
        ],
        correct: 2,
        explanation:
          'The poem\'s power comes from the combination of universal argument and personal plea. The best essays show how the four types of men build a case that is then made devastatingly specific by the address to "my father."',
      },
      {
        id: 'igp2-donotgo-m4-q3',
        question:
          'Which other poems would pair well with this one for a comparison question?',
        options: [
          'Poems about animals and nature',
          'Poems about romantic love',
          'Poems about death, mortality, parent-child relationships, or resistance',
          'Poems about war and conflict',
        ],
        correct: 2,
        explanation:
          'This poem pairs well with others exploring death (e.g., "Remember"), parent-child relationships (e.g., "Poem at Thirty-Nine"), or the tension between acceptance and resistance.',
      },
    ],
  },
];

const doNotGoGentleCourse: CourseData = {
  id: 'igcse-lit-poem-do-not-go-gentle',
  title: '"Do not go gentle into that good night" — Dylan Thomas',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of Dylan Thomas\'s "Do not go gentle into that good night" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: doNotGoGentleModules,
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. Remember — Christina Rossetti
// ─────────────────────────────────────────────────────────────────────────────

const rememberModules: CourseModule[] = [
  {
    id: 'igp2-remember-m1',
    title: 'Context & Overview',
    duration: '45 min',
    content: `
<h2>Remember — Christina Rossetti (1862)</h2>

<h3>Context</h3>
<p>Christina Rossetti (1830–1894) was one of the most important Victorian poets. She was part of an artistic family — her brother Dante Gabriel Rossetti was a founding member of the Pre-Raphaelite Brotherhood. Christina was deeply devout (Anglican) and her faith profoundly shaped her poetry. She also suffered from recurring illness, including a thyroid condition (Graves' disease) that affected her appearance and health, making mortality a constant presence in her life.</p>

<p>"Remember" was written in 1849 when Rossetti was just eighteen, though it was published later in her 1862 collection <em>Goblin Market and Other Poems</em>. Despite her youth, the poem addresses death, loss, and memory with remarkable maturity. Rossetti was also navigating complex romantic relationships — she broke off two engagements on religious grounds — and the poem may reflect the tension between earthly love and spiritual duty.</p>

<div class="key-term"><strong>Key Term: Petrarchan (Italian) Sonnet</strong> — A 14-line poem divided into an octave (8 lines, ABBAABBA) and a sestet (6 lines, typically CDDECE). The octave presents a problem or situation; the sestet offers a resolution or shift in perspective, marked by a volta (turn).</div>

<h3>Overview of the Poem</h3>
<p>The poem is addressed to a loved one (likely a lover, though possibly a more general address). The speaker asks to be remembered after she has died — "gone away" to "the silent land." For the first eight lines, the imperative "Remember" dominates. But the poem undergoes a dramatic shift at the volta: the speaker changes her mind. She tells the loved one that it is better to "forget and smile" than to "remember and be sad." The poem moves from a plea for remembrance to a selfless release — the speaker would rather be forgotten than cause suffering.</p>

<h3>Key Themes</h3>
<ul>
  <li><strong>Death and the afterlife:</strong> Death is presented as a departure — "gone far away" — and the afterlife as "the silent land." The euphemisms soften death without denying it.</li>
  <li><strong>Memory and forgetting:</strong> The poem's central tension: is it better to remember and grieve, or to forget and be happy? Rossetti ultimately chooses the loved one's happiness over her own memorialisation.</li>
  <li><strong>Love and selflessness:</strong> The speaker's willingness to be forgotten demonstrates a love that prioritises the other person's wellbeing above her own desire to be remembered.</li>
  <li><strong>Time and loss:</strong> The poem grapples with the awareness that time will eventually erode memory — "you should forget me for a while / And afterwards forget."</li>
  <li><strong>Faith:</strong> The "silent land" echoes Christian ideas of the afterlife. Rossetti's faith may underpin her acceptance of death: if there is life after death, earthly remembrance becomes less important.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The volta (turn) in this poem is the single most important structural feature. The shift from "Remember me" to "forget and smile" is where the poem's meaning crystallises. Make sure you identify and analyse this shift in detail.</div>
`,
    quiz: [
      {
        id: 'igp2-remember-m1-q1',
        question:
          'What form does "Remember" take?',
        options: [
          'A Shakespearean (English) sonnet',
          'A Petrarchan (Italian) sonnet',
          'A villanelle',
          'A free verse lyric',
        ],
        correct: 1,
        explanation:
          'The poem is a Petrarchan (Italian) sonnet with an octave (ABBAABBA) and a sestet (CDDECE). The division between octave and sestet marks the crucial volta, or turn.',
      },
      {
        id: 'igp2-remember-m1-q2',
        question:
          'What shift occurs at the volta of the poem?',
        options: [
          'The speaker changes from addressing a lover to addressing God',
          'The speaker shifts from demanding remembrance to accepting that forgetting is preferable to grief',
          'The speaker moves from discussing death to discussing life',
          'The speaker switches from first person to third person',
        ],
        correct: 1,
        explanation:
          'The volta marks a dramatic change: the speaker moves from the imperative "Remember me" to the selfless concession that it is "Better by far you should forget and smile / Than that you should remember and be sad."',
      },
      {
        id: 'igp2-remember-m1-q3',
        question:
          'What does "the silent land" represent?',
        options: [
          'A foreign country the speaker is travelling to',
          'Death and the afterlife, presented through euphemism',
          'A monastery where the speaker plans to live in silence',
          'The speaker\'s childhood home',
        ],
        correct: 1,
        explanation:
          '"The silent land" is a euphemism for death and the afterlife. The phrase softens the reality of death while conveying its finality — silence means the absence of communication between the living and the dead.',
      },
    ],
  },
  {
    id: 'igp2-remember-m2',
    title: 'Language & Imagery Analysis',
    duration: '50 min',
    content: `
<h2>Language & Imagery — Remember</h2>

<h3>Key Quotations & Analysis</h3>

<p><strong>1. "Remember me when I am gone away, / Gone far away into the silent land"</strong><br/>
The opening uses <strong>euphemism</strong> — death is "gone away," the afterlife is "the silent land." The repetition of <em>gone</em> (with the intensifier <em>far</em>) emphasises the distance death creates. <em>Silent land</em> suggests both the peace of the afterlife and the impossibility of communication across the boundary of death. The gentle language reflects Rossetti's desire not to frighten the listener.</p>

<p><strong>2. "When you can no more hold me by the hand"</strong><br/>
Physical intimacy — holding hands — represents the relationship. Death will sever this physical connection. The simple, concrete image makes the abstract concept of loss tangible and emotionally immediate. The word <em>hold</em> carries connotations of both affection and restraint — neither the loved one nor the speaker can hold onto each other.</p>

<p><strong>3. "Nor I half turn to go yet turning stay"</strong><br/>
This line captures the hesitation of parting — the speaker half-turns to leave but cannot fully go. The paradox of simultaneously leaving and staying mirrors the poem's own tension between remembering and forgetting, holding on and letting go.</p>

<p><strong>4. "Remember me when no more day by day / You tell me of our future that you plann'd"</strong><br/>
The specificity of "our future that you plann'd" makes the loss concrete — they had plans, a shared future, now cancelled by death. The past tense <em>plann'd</em> is heartbreaking: the future has already become past. The phrase "day by day" suggests the habitual, everyday nature of their relationship — an intimacy of routine.</p>

<p><strong>5. "Yet if you should forget me for a while / And afterwards forget"</strong><br/>
The volta brings a radical shift. The speaker accepts not only temporary forgetting ("for a while") but permanent erasure ("afterwards forget"). The progressive nature of the forgetting — from temporary to permanent — shows the speaker accepting the full implications of her selfless decision.</p>

<p><strong>6. "Better by far you should forget and smile / Than that you should remember and be sad"</strong><br/>
The poem's central statement presents two balanced alternatives: forget/smile vs. remember/sad. The antithesis is crystalline. Rossetti privileges the loved one's happiness over her own memorialisation. The phrase <em>Better by far</em> is emphatic — this is not a reluctant concession but a wholehearted conviction.</p>

<h3>Language Features</h3>
<ul>
  <li><strong>Imperative mood:</strong> "Remember" is repeated five times in the octave, creating an insistent, almost pleading tone. After the volta, this gives way to the conditional "if you should forget" — the command softens into permission.</li>
  <li><strong>Euphemism:</strong> Death is never named directly — "gone away," "the silent land," "the darkness and corruption." This gentleness reflects both Victorian decorum and the speaker's desire to comfort.</li>
  <li><strong>Antithesis:</strong> "forget and smile" vs. "remember and be sad" — the balanced opposition gives the poem's conclusion epigrammatic force.</li>
  <li><strong>Simple diction:</strong> The vocabulary is deliberately simple — "hand," "stay," "smile," "sad." This simplicity gives the poem universal accessibility and emotional directness.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Track the word "remember" through the poem. It appears five times in the octave and once in the sestet — where its meaning has shifted from a command to something the speaker is willing to relinquish. This trajectory is the poem's emotional arc.</div>
`,
    quiz: [
      {
        id: 'igp2-remember-m2-q1',
        question:
          'What is the effect of the euphemism "the silent land"?',
        options: [
          'It makes death sound frightening and violent',
          'It softens death through gentle language while conveying the finality of silence and the impossibility of communication',
          'It describes a specific geographical location',
          'It suggests the speaker is going on a journey',
        ],
        correct: 1,
        explanation:
          '"The silent land" euphemises death gently while conveying its essential quality — silence. The dead cannot communicate with the living. The phrase comforts even as it acknowledges finality.',
      },
      {
        id: 'igp2-remember-m2-q2',
        question:
          'How does the antithesis "forget and smile / remember and be sad" function?',
        options: [
          'It creates confusion about what the speaker actually wants',
          'It presents two balanced alternatives and clearly prioritises the loved one\'s happiness over the speaker\'s memorialisation',
          'It shows the speaker is indecisive',
          'It is a rhetorical question the reader must answer',
        ],
        correct: 1,
        explanation:
          'The perfectly balanced antithesis crystallises the poem\'s central argument: happiness matters more than memory. The speaker selflessly chooses the loved one\'s smile over her own remembrance.',
      },
      {
        id: 'igp2-remember-m2-q3',
        question:
          'Why is the repetition of "Remember" significant?',
        options: [
          'It shows the speaker has a poor memory',
          'It creates an insistent, pleading tone in the octave that gives way to release in the sestet — tracking the poem\'s emotional arc',
          'It is the title of the poem and must be repeated',
          'It fills space in the octave to meet the sonnet\'s line count',
        ],
        correct: 1,
        explanation:
          'The five repetitions of "Remember" in the octave create an almost desperate insistence. After the volta, the word appears only once — and its meaning has shifted. The speaker moves from commanding remembrance to accepting forgetting.',
      },
    ],
  },
  {
    id: 'igp2-remember-m3',
    title: 'Structure & Form',
    duration: '45 min',
    content: `
<h2>Structure & Form — Remember</h2>

<h3>Petrarchan Sonnet</h3>
<p>The poem follows the <strong>Petrarchan (Italian) sonnet</strong> form:</p>
<ul>
  <li><strong>Octave (lines 1–8):</strong> Rhyme scheme ABBAABBA. The speaker makes her plea — "Remember me."</li>
  <li><strong>Sestet (lines 9–14):</strong> Rhyme scheme CDDECE. The speaker reverses her position — "Better by far you should forget and smile."</li>
</ul>
<p>The Petrarchan form is ideally suited to this poem because its structural division (octave/sestet) mirrors the poem's emotional division. The octave presents the problem (the desire to be remembered), and the sestet resolves it (the acceptance that forgetting is better than grief).</p>

<h3>The Volta</h3>
<p>The <strong>volta</strong> (turn) occurs at line 9: "Yet if you should forget me for a while." The word <em>Yet</em> signals the reversal — everything that follows contradicts the octave's insistent "Remember." This is one of the most effective voltas in English poetry because the shift is both surprising and logical: the speaker has been thinking through the implications of her demand and realises that remembrance could cause more pain than happiness.</p>

<p>The volta also marks a shift in tone:</p>
<ul>
  <li><strong>Octave:</strong> Imperative, insistent, anxious — "Remember me... remember me... remember."</li>
  <li><strong>Sestet:</strong> Conditional, gentle, accepting — "if you should forget... do not grieve... better by far."</li>
</ul>

<h3>Iambic Pentameter</h3>
<p>The poem is written in <strong>iambic pentameter</strong>, the traditional metre of English sonnets. The regular, measured rhythm creates a controlled, dignified tone that contrasts with the emotional content. This tension between formal control and deep feeling is characteristic of Rossetti's poetry — she expresses powerful emotions within strict formal constraints.</p>

<h3>Rhyme and Sound</h3>
<p>The enclosed rhyme of the octave (ABBAABBA) creates a sense of containment — the speaker is enclosed within her plea, circling back to the same sounds. The sestet's different rhyme scheme (CDDECE) marks the emotional shift with a sonic shift. The poem's sounds are predominantly soft — "away," "stay," "day," "pray" — creating a gentle, almost lulling quality that reflects the speaker's tenderness.</p>

<h3>Progression from Command to Release</h3>
<p>The poem's overall structural arc moves from <strong>command</strong> to <strong>release</strong>:</p>
<ol>
  <li><strong>Lines 1–4:</strong> Remember me when I am gone (direct command).</li>
  <li><strong>Lines 5–8:</strong> Remember me — you will not be able to counsel me or change your mind (intensified urgency).</li>
  <li><strong>Lines 9–11:</strong> Yet if you forget me, do not grieve (concession).</li>
  <li><strong>Lines 12–14:</strong> Better to forget and smile than remember and be sad (full release).</li>
</ol>
<p>This movement from anxious holding to selfless letting go is one of the poem's most powerful effects.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Always link the Petrarchan sonnet form to the volta. The form's built-in division (octave/sestet) is what makes the emotional reversal so effective — the architecture of the sonnet supports and amplifies the shift in the speaker's position.</div>
`,
    quiz: [
      {
        id: 'igp2-remember-m3-q1',
        question:
          'Why is the Petrarchan sonnet form suited to this poem?',
        options: [
          'Because Rossetti was Italian',
          'Because its structural division (octave/sestet) mirrors the poem\'s emotional shift from demanding remembrance to accepting forgetting',
          'Because it has 14 lines, and Rossetti wanted exactly 14 lines',
          'Because the Petrarchan form always deals with death',
        ],
        correct: 1,
        explanation:
          'The Petrarchan sonnet\'s built-in division between octave and sestet perfectly supports the poem\'s emotional reversal. The octave presents the plea; the sestet resolves it. Form and meaning work together.',
      },
      {
        id: 'igp2-remember-m3-q2',
        question:
          'What word signals the volta?',
        options: [
          '"Remember"',
          '"Yet"',
          '"Better"',
          '"Gone"',
        ],
        correct: 1,
        explanation:
          '"Yet" at the start of line 9 signals the reversal. It is a concessive conjunction — acknowledging the possibility that contradicts everything the octave demanded. Everything after "Yet" moves toward acceptance.',
      },
      {
        id: 'igp2-remember-m3-q3',
        question:
          'How does the poem\'s tone change from octave to sestet?',
        options: [
          'From angry to joyful',
          'From imperative and insistent to conditional and gently accepting',
          'From formal to colloquial',
          'From first person to third person',
        ],
        correct: 1,
        explanation:
          'The octave\'s imperatives ("Remember me") create an insistent, almost anxious tone. The sestet\'s conditionals ("if you should forget") and gentle reassurance ("do not grieve") create a tone of acceptance and release.',
      },
    ],
  },
  {
    id: 'igp2-remember-m4',
    title: 'Exam Practice & Model Response',
    duration: '50 min',
    content: `
<h2>Exam Practice — Remember</h2>

<h3>Typical Exam Questions</h3>
<ul>
  <li>"How does Rossetti present attitudes to death and memory in 'Remember'?"</li>
  <li>"Explore how Rossetti uses the sonnet form to convey her ideas."</li>
  <li>"How does Rossetti present love in this poem?"</li>
  <li>"Compare Rossetti's presentation of death with another poem you have studied."</li>
  <li>"How does Rossetti use formal structure to convey a shifting emotional perspective?"</li>
</ul>

<h3>Quotation Bank — Essential Quotes</h3>
<div class="quotation-bank">
<table>
<tr>
  <td><strong>Opening volta setup</strong></td>
  <td>"Remember me when I am gone away"</td>
  <td>Imperative mood establishes demand; "gone away" suggests both distance and permanence</td>
</tr>
<tr>
  <td><strong>Accumulating loss</strong></td>
  <td>"When you can no more hold me by the hand"</td>
  <td>Shift from emotional to physical absence; tactile imagery emphasises the irreversibility of death</td>
</tr>
<tr>
  <td><strong>Isolation intensified</strong></td>
  <td>"Gone far away into the silent land"</td>
  <td>Assonance of long vowels creates mournful tone; "silent land" suggests both death and spiritual realm</td>
</tr>
<tr>
  <td><strong>Hesitation in death</strong></td>
  <td>"Nor I half turn to go yet turning stay"</td>
  <td>Paradoxical movement; the volta is approaching; "half turn" suggests the speaker cannot leave</td>
</tr>
<tr>
  <td><strong>The crucial volta</strong></td>
  <td>"Yet if you should forget me for a while / And afterwards forget"</td>
  <td>Concessive "Yet"; shift from imperative to conditional; repetition of "forget" marks acceptance</td>
</tr>
<tr>
  <td><strong>The emotional reversal</strong></td>
  <td>"Better by far you should forget and smile / Than that you should remember and be sad"</td>
  <td>Perfect antithesis structures the selfless sacrifice; "smile" vs. "sad" shows priorities have shifted</td>
</tr>
<tr>
  <td><strong>Release and permission</strong></td>
  <td>"I shall not see the shadows, nor feel the rain"</td>
  <td>Acceptance of absence from sensory experience; peace with non-existence</td>
</tr>
<tr>
  <td><strong>Conclusion — ultimate acceptance</strong></td>
  <td>"Unless you come to me or I come to you"</td>
  <td>Conditional spirituality; suggests belief in afterlife reunion, transcending earthly memory</td>
</tr>
</table>
</div>

<h3>Grade 9 Insights — What Examiners Reward</h3>
<div class="grade9-insight">
<p><strong>The Volta is Everything:</strong> High-scoring responses do not simply identify the volta at line 9; they <em>track the speaker's emotional journey</em> from desperate pleading (octave) to selfless acceptance (sestet). Discuss how the volta represents a fundamental shift in the speaker's understanding of love itself — from possessive ("Remember me") to generative ("be happy without me"). This demonstrates sophisticated analytical thinking.</p>

<p><strong>Form and Meaning are Inseparable:</strong> The Petrarchan sonnet's traditional structure — octave + sestet — physically enacts the poem's meaning. Don't just note that it's a Petrarchan sonnet; explain how the form's requirement for a volta forced Rossetti to articulate a profound paradox: how can you love someone while willingly being forgotten? This is structural sophistication.</p>

<p><strong>Context Matters Precisely:</strong> Rossetti's devout Anglicanism is not decoration. Her acceptance of "the silent land" is rooted in Christian belief in the afterlife and reunion. This is not biographical trivia — it explains why the speaker can let go of earthly memory with such serenity. Examiners reward specificity: show how faith shapes the poem's resolution.</p>

<p><strong>The Conditional Mood is Crucial:</strong> In the sestet, imperatives ("Remember!") give way to conditionals ("if you should forget"). This grammatical shift is not accidental — it represents the speaker surrendering control. Noting this demonstrates precision in technical analysis.</p>
</div>

<h3>Model Paragraph 1: The Volta as Meaning</h3>
<div class="model-response">
<p>Rossetti uses the Petrarchan sonnet's structural division to dramatise a profound emotional reversal. The octave's fivefold repetition of "Remember" creates an insistent, almost desperate plea — the imperative mood and the accumulating clauses ("when I am gone away," "when you can no more hold me by the hand") build a picture of irreversible loss that demands to be acknowledged. Yet at the volta — signalled by the concessive "Yet" in line 9 — the speaker surrenders her own claim on memory: "Better by far you should forget and smile / Than that you should remember and be sad." The perfectly balanced antithesis ("forget and smile" vs. "remember and be sad") crystallises a selfless love that prioritises the beloved's happiness over the speaker's memorialisation. This emotional generosity is reinforced by the sestet's softer tone — the imperatives give way to conditionals ("if you should forget"), and the anxious insistence relaxes into gentle permission. The volta is not simply a structural device; it is the poem's <em>meaning</em> — the recognition that true love consists not in being remembered, but in releasing the beloved from grief.</p>
</div>

<h3>Model Paragraph 2: Faith and Acceptance</h3>
<div class="model-response">
<p>The poem's resolution is inseparable from Rossetti's Christian faith. The final couplet — "Unless you come to me or I come to you" — is not a sad resignation to earthly separation but a quiet affirmation of spiritual reunion. References to "the silent land," the absence of sensory experience ("I shall not see the shadows, nor feel the rain"), and the overall tone of graceful acceptance all point to the Christian concept of death as a transition, not an ending. This is crucial: the speaker can relinquish earthly remembrance only because she believes in eternal life. For Rossetti, mortality is not annihilation but transformation — hence the speaker's willingness to be forgotten in this world. Examiners often overlook this context, but it is essential: the poem's peace comes not from romantic generosity alone, but from theological conviction. A sophisticated essay acknowledges this dimension and shows how Rossetti's personal faith shapes the poem's emotional architecture.</p>
</div>

<h3>Model Paragraph 3: Technical Analysis of Repetition and Rhythm</h3>
<div class="model-response">
<p>Rossetti's use of repetition and iambic pentameter creates a rhythmic insistence that mirrors the speaker's emotional state. The opening "Remember me, remember me, remember me" — though not all explicit in the poem — is present in spirit through the fivefold imperative. This creates a <em>hammering</em> effect, as if the speaker cannot help but repeat the plea. The metrical regularity of iambic pentameter reinforces this: the regular ti-TUM, ti-TUM rhythm is almost incantatory, like a prayer or a chant. But notice how the volta disrupts this: the shift to conditionals and the gentler diction ("if you should forget," "shall not see") actually subtly loosens the metrical tension. Rossetti is using sound and rhythm to enact the emotional journey — from insistent repetition to gentle release. This is an example of form serving meaning: the poem's technical choices are not ornamental but essential to its emotional impact.</p>
</div>

<h3>Key Quotations to Memorise</h3>
<ol>
  <li>"Remember me when I am gone away"</li>
  <li>"Gone far away into the silent land"</li>
  <li>"When you can no more hold me by the hand"</li>
  <li>"Nor I half turn to go yet turning stay"</li>
  <li>"our future that you plann'd"</li>
  <li>"Yet if you should forget me for a while / And afterwards forget"</li>
  <li>"Better by far you should forget and smile / Than that you should remember and be sad"</li>
  <li>"I shall not see the shadows, nor feel the rain"</li>
  <li>"Unless you come to me or I come to you"</li>
</ol>

<h3>Comparison Pairings</h3>
<ul>
  <li><strong>With "Do not go gentle into that good night" (Dylan Thomas):</strong> Both poems address death, but from opposite perspectives. Thomas's speaker rages against dying; Rossetti's accepts it with grace. Explore how form, tone, and personal context shape these contrasting attitudes.</li>
  <li><strong>With "My Last Duchess" (Robert Browning):</strong> Both are about love and loss, but whereas Browning's Duke seeks to control memory through possessing a portrait, Rossetti's speaker releases her beloved into freedom. This reversal reveals how differently love is conceived.</li>
  <li><strong>With "Half-caste" (John Agard):</strong> While not about death, both poems use form and tone to critique society's limited perspectives — Agard critiques racism, Rossetti critiques the demand to mourn endlessly.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Saying the poem is simply about a woman who wants to be remembered. The poem is about the <em>reversal</em> of that desire — the speaker moves from wanting remembrance to choosing the beloved's happiness. The volta is the poem's meaning. Similarly, avoid reading it as merely sad; the sestet is peaceful and accepting, not tragic.</div>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The volta is worth spending 40% of your essay time on. Identify it, trace how the grammatical mood changes (imperative → conditional), note how the tone shifts (desperate → accepting), and explain what this shift reveals about the speaker's understanding of love. This is the heart of the poem and the basis of a top-level response.</div>
`,
    quiz: [
      {
        id: 'igp2-remember-m4-q1',
        question:
          'What is the single most important feature to discuss in an essay on "Remember"?',
        options: [
          'The use of iambic pentameter',
          'The volta — the shift from demanding remembrance to accepting forgetting',
          'The biographical details of Rossetti\'s life',
          'The rhyme scheme of the octave',
        ],
        correct: 1,
        explanation:
          'The volta is the poem\'s defining moment — it transforms the entire poem from a plea for remembrance into an act of selfless love. Any essay on this poem must analyse this shift in detail.',
      },
      {
        id: 'igp2-remember-m4-q2',
        question:
          'How does Rossetti present love in this poem?',
        options: [
          'As possessive and demanding — the speaker insists on being remembered',
          'As selfless — the speaker ultimately prioritises the beloved\'s happiness over her own memorialisation',
          'As passionate and physical — dominated by images of touch and desire',
          'As tragic and bitter — the speaker resents being forgotten',
        ],
        correct: 1,
        explanation:
          'While the octave\'s imperatives might seem demanding, the sestet reveals a deeply selfless love. The speaker would rather be forgotten than cause grief — her love prioritises the beloved\'s wellbeing.',
      },
      {
        id: 'igp2-remember-m4-q3',
        question:
          'Which poem would pair well with "Remember" for a comparison question about death?',
        options: [
          '"Half-caste" by John Agard',
          '"Do not go gentle into that good night" by Dylan Thomas',
          '"War Photographer" by Carol Ann Duffy',
          '"The Tyger" by William Blake',
        ],
        correct: 1,
        explanation:
          '"Do not go gentle" presents a contrasting attitude to death — Thomas demands fierce resistance where Rossetti moves toward gentle acceptance. This contrast makes for a rich comparison.',
      },
    ],
  },
];

const rememberCourse: CourseData = {
  id: 'igcse-lit-poem-remember',
  title: '"Remember" — Christina Rossetti',
  subtitle: 'Edexcel IGCSE Literature poetry anthology study',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4ET1',
  price: 0,
  duration: '3 weeks',
  level: 'IGCSE',
  description:
    'A comprehensive study of Christina Rossetti\'s "Remember" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
  color: '#7C3AED',
  moduleList: rememberModules,
};

// ═══════════════════════════════════════════════════════════════════════════════
// Export
// ═══════════════════════════════════════════════════════════════════════════════

export const igcsePoetry2Courses: CourseData[] = [
  laBelleDameCourse,
  poemAtThirtyNineCourse,
  warPhotographerCourse,
  theTygerCourse,
  myLastDuchessCourse,
  halfCasteCourse,
  doNotGoGentleCourse,
  rememberCourse,
];
