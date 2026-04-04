import type { CourseModule } from '../courses';

// ════════════════════════════════════════════════════════════════════════════════
// Year 8 — Term 2
//   T2   Conflict & Humanity – Poetry
//   T2.2 Conflict & Power – Shakespeare (Macbeth)
// ════════════════════════════════════════════════════════════════════════════════

export const y8T2ConflictModules: CourseModule[] = [
  // ──────────────────────────────────────────────
  // MODULE 1 — Poetry of Conflict: Introduction to the Anthology
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m1',
    title: 'Poetry of Conflict – Introduction to the Anthology',
    duration: '40 min',
    content: `
<h2>Why Do Poets Write About Conflict?</h2>

<p>Conflict is one of the oldest and most powerful subjects in poetry. Long before newspapers and television, poets were the people who recorded the horror, heroism, and heartbreak of war. They wrote because they had witnessed things that ordinary prose could not capture. Poetry, with its compressed language, vivid imagery, and rhythmic force, could communicate the shock of battle, the grief of loss, and the moral complexity of violence in ways that a factual report simply could not.</p>

<p>In this term you will study a range of conflict poetry spanning several centuries. Some poems were written by soldiers on the front line. Others were composed by civilians reflecting on the consequences of war from a distance. Some celebrate courage; others condemn the waste of human life. What unites them is the conviction that poetry can say something essential about what it means to be human in the face of destruction.</p>

<h3>What Is an Anthology?</h3>

<p>An anthology is a curated collection of poems, usually grouped around a shared theme. The word comes from the Greek <em>anthologia</em>, meaning "a gathering of flowers." Just as a bouquet brings together different blooms, an anthology brings together different voices, styles, and perspectives on a single subject. A conflict poetry anthology might include a Romantic-era ballad alongside a modernist free-verse piece, giving you the chance to see how attitudes to war have shifted over time.</p>

<div class="key-term"><strong>Key Term: Anthology</strong> — A collection of poems (or other literary works) selected and arranged around a common theme or period. Studying an anthology means comparing how different poets approach the same subject.</div>

<h3>Historical Context Matters</h3>

<p>You cannot fully understand a conflict poem without knowing when and why it was written. A poem composed during the Crimean War in the 1850s will have a very different tone from one written in the trenches of the First World War in 1917. The earlier poem might glorify the cavalry charge; the later poem might describe mud, gas, and pointless death. Neither poet is lying — they are shaped by different experiences and different cultural expectations about what war means.</p>

<p>When you read a conflict poem, always ask yourself three contextual questions:</p>
<ul>
  <li><strong>When was it written?</strong> — The historical period shapes the language, form, and attitudes.</li>
  <li><strong>Who wrote it?</strong> — Was the poet a soldier, a civilian, a mother, a political leader? Their perspective affects every line.</li>
  <li><strong>Why was it written?</strong> — Was the poet trying to recruit, mourn, protest, or simply bear witness?</li>
</ul>

<h3>Reading a Conflict Poem: First Steps</h3>

<p>When you encounter a new conflict poem, follow this process:</p>
<ol>
  <li><strong>Read it aloud.</strong> Poetry is a musical form. Hearing the rhythm, the pauses, and the sounds will tell you things that silent reading misses.</li>
  <li><strong>Identify the speaker.</strong> Who is talking? A soldier? A mother? A god? The speaker is not always the poet.</li>
  <li><strong>Note the tone.</strong> Is the poem angry, sorrowful, proud, bitter, detached? Tone is the poem's emotional temperature.</li>
  <li><strong>Look for imagery.</strong> What pictures does the poet create? Are they beautiful, horrifying, surreal?</li>
  <li><strong>Consider the form.</strong> Is the poem a sonnet, a ballad, free verse? The shape of the poem is a deliberate choice.</li>
</ol>

<div class="examiner-tip"><strong>Study Tip:</strong> Keep a poetry journal this term. For every poem you study, write down the title, poet, date, speaker, tone, and one quotation that struck you. By the end of the unit you will have a personal revision guide.</div>

<h3>Key Themes Across Conflict Poetry</h3>

<p>As you work through the anthology, you will notice certain themes recurring across very different poems:</p>
<ul>
  <li><strong>The reality of battle</strong> — graphic descriptions of violence, injury, and death.</li>
  <li><strong>Loss and grief</strong> — mourning the dead, the pain of those left behind.</li>
  <li><strong>Patriotism and duty</strong> — the belief that fighting for your country is noble and necessary.</li>
  <li><strong>Disillusionment</strong> — the realisation that war is not glorious but wasteful and cruel.</li>
  <li><strong>Power and powerlessness</strong> — who decides to go to war, and who suffers the consequences.</li>
  <li><strong>Memory and remembrance</strong> — how societies choose to remember (or forget) conflict.</li>
</ul>

<div class="common-mistake"><strong>Common Mistake:</strong> Assuming all conflict poetry is anti-war. Some poets genuinely celebrate military courage and sacrifice. Always read the poem on its own terms before deciding what the poet's attitude is.</div>

<h3>Preparing for Comparison</h3>

<p>Later in this unit, you will be asked to compare two poems. Comparison is not just about finding similarities; it is about understanding differences too. Start training your eye now by noticing how two poems on the same theme can use completely different language, form, and tone to create completely different effects.</p>

<p>For example, one poet might describe a battlefield using beautiful, almost peaceful imagery — this contrast between beauty and horror is deeply unsettling. Another poet might use blunt, brutal language that shocks the reader into confronting reality. Both approaches are valid; your job is to explain <em>how</em> and <em>why</em> each poet makes their choices.</p>`,
    quiz: [
      { id: 'y8t2-m1-q1', question: 'What does the word "anthology" literally mean in Greek?', options: ['A book of battles', 'A gathering of flowers', 'A song of mourning', 'A collection of letters'], correct: 1, explanation: 'Anthology comes from the Greek "anthologia," meaning a gathering of flowers. It refers to a curated collection of literary works, usually grouped by theme.' },
      { id: 'y8t2-m1-q2', question: 'Why is historical context important when reading conflict poetry?', options: ['It tells you the rhyme scheme', 'It helps you count syllables', 'It shapes the language, form, and attitudes of the poem', 'It reveals the number of stanzas'], correct: 2, explanation: 'Historical context tells you when, why, and by whom the poem was written. These factors directly shape the poet\'s language choices, attitudes to conflict, and the form they use.' },
      { id: 'y8t2-m1-q3', question: 'What should you do first when encountering a new conflict poem?', options: ['Count the stanzas', 'Look up the poet\'s biography', 'Read it aloud', 'Identify the rhyme scheme'], correct: 2, explanation: 'Reading a poem aloud helps you hear its rhythm, pauses, and sounds. Poetry is a musical form, and hearing it reveals things that silent reading can miss.' },
      { id: 'y8t2-m1-q4', question: 'Which of the following is NOT a typical theme in conflict poetry?', options: ['Loss and grief', 'Romantic love between characters', 'Disillusionment with war', 'Power and powerlessness'], correct: 1, explanation: 'While love can appear in conflict poetry, romantic love between characters is not a defining theme of the genre. The other options — grief, disillusionment, and power — are central recurring themes.' },
      { id: 'y8t2-m1-q5', question: 'What common mistake do students make when studying conflict poetry?', options: ['Quoting too much of the poem', 'Assuming all conflict poetry is anti-war', 'Writing in the present tense', 'Ignoring the title'], correct: 1, explanation: 'Not all conflict poetry is anti-war. Some poets genuinely celebrate courage and sacrifice. You must read each poem on its own terms before deciding the poet\'s attitude.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 2 — Imagery in War Poetry
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m2',
    title: 'Imagery in War Poetry – Visual Language and Effect',
    duration: '45 min',
    content: `
<h2>Painting Pictures with Words</h2>

<p>Imagery is the single most important tool a poet has. It is the art of creating pictures, sounds, textures, and sensations in the reader's mind using nothing but words. In war poetry, imagery carries an enormous burden: it must communicate experiences so extreme that ordinary language fails. A poet cannot simply write "the battle was terrible." That tells the reader nothing. Instead, the poet must make you <em>see</em> the mud, <em>hear</em> the shells, <em>feel</em> the cold, and <em>smell</em> the gas. Great war poetry does not describe conflict — it recreates it.</p>

<h3>Types of Imagery</h3>

<p>Imagery is an umbrella term that covers several specific techniques. You need to know each one and be able to identify it in a poem:</p>

<ul>
  <li><strong>Visual imagery</strong> — appeals to sight. "The sky was a sheet of burning orange" makes you see the colour of an explosion or a sunset over a battlefield.</li>
  <li><strong>Auditory imagery</strong> — appeals to hearing. "The stuttering rifles' rapid rattle" makes you hear the gunfire.</li>
  <li><strong>Tactile imagery</strong> — appeals to touch. "His fingers were numb, clawed around the frozen rifle" makes you feel the cold.</li>
  <li><strong>Olfactory imagery</strong> — appeals to smell. Descriptions of decay, gas, and smoke create a visceral, physical response.</li>
  <li><strong>Gustatory imagery</strong> — appeals to taste. Less common in war poetry, but references to blood, dust, or bitter air can be powerful.</li>
</ul>

<div class="key-term"><strong>Key Term: Sensory imagery</strong> — Language that appeals to one or more of the five senses (sight, sound, touch, smell, taste) to create a vivid experience for the reader. War poets use sensory imagery to bridge the gap between the battlefield and the reader's imagination.</div>

<h3>Simile, Metaphor, and Personification</h3>

<p>These three figurative techniques are the building blocks of poetic imagery:</p>

<p><strong>Simile</strong> compares two things using "like" or "as." A poet might write that soldiers moved "like old beggars under sacks" — the comparison strips away any glamour, reducing warriors to exhausted, broken figures. Similes work by forcing the reader to hold two images side by side and notice what they share.</p>

<p><strong>Metaphor</strong> states that one thing <em>is</em> another. If the battlefield is described as "a mouth that swallows men," the metaphor turns the landscape into a living, consuming monster. Metaphors are more powerful than similes because they do not hedge with "like" — they make the identification absolute.</p>

<p><strong>Personification</strong> gives human qualities to non-human things. Death, for example, is frequently personified in war poetry as a reaper, a hunter, or a patient figure waiting at the edge of the trenches. Personifying abstract concepts makes them feel immediate and threatening.</p>

<div class="key-term"><strong>Key Term: Extended metaphor</strong> — A metaphor that is developed across several lines or even the entire poem. Rather than a single comparison, the poet builds a sustained parallel between two ideas, deepening the meaning with every new detail.</div>

<h3>Why Imagery Matters in War Poetry</h3>

<p>War poets face a unique challenge: most of their readers have never experienced combat. Imagery is the bridge between the poet's lived experience and the reader's imagination. Without it, a poem about war would be an abstract lecture about suffering. With it, the poem becomes an act of witness — it places the reader inside the experience and refuses to let them look away.</p>

<p>Consider the difference between these two sentences:</p>
<ul>
  <li><strong>Abstract:</strong> "Many soldiers died in the battle."</li>
  <li><strong>Imagistic:</strong> "They lay in the churned mud like discarded puppets, their strings cut."</li>
</ul>

<p>The first sentence gives you a fact. The second gives you an image you cannot forget. The simile comparing dead soldiers to puppets suggests they were controlled by forces beyond themselves — generals, governments, fate — and that death has rendered them lifeless objects. That is the power of imagery: it turns information into feeling.</p>

<h3>Analysing Imagery: A Step-by-Step Method</h3>

<p>When you find a piece of imagery in a poem, use this method to analyse it:</p>
<ol>
  <li><strong>Identify the technique:</strong> Is it a simile, metaphor, personification, or sensory image?</li>
  <li><strong>Describe what you see:</strong> What picture does it create in your mind?</li>
  <li><strong>Explain the connotations:</strong> What associations does the comparison carry? What does it suggest beyond its literal meaning?</li>
  <li><strong>Link to the poet's intention:</strong> Why has the poet chosen this image? What effect does it have on the reader? How does it connect to the poem's wider themes?</li>
</ol>

<div class="examiner-tip"><strong>Study Tip:</strong> When writing about imagery, always move beyond identification. Saying "the poet uses a metaphor" earns very little credit. Saying "the metaphor of the battlefield as a hungry mouth suggests that war consumes human life indiscriminately, reducing soldiers to mere food for destruction" demonstrates genuine analysis.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing simile and metaphor. If the comparison uses "like" or "as," it is a simile. If it states one thing <em>is</em> another without those words, it is a metaphor. This distinction matters when you use subject terminology.</div>`,
    quiz: [
      { id: 'y8t2-m2-q1', question: 'Which type of imagery appeals to the sense of hearing?', options: ['Visual imagery', 'Tactile imagery', 'Auditory imagery', 'Olfactory imagery'], correct: 2, explanation: 'Auditory imagery appeals to hearing. In war poetry this might include sounds of gunfire, explosions, screams, or silence after battle.' },
      { id: 'y8t2-m2-q2', question: 'What is the difference between a simile and a metaphor?', options: ['A simile is longer than a metaphor', 'A simile uses "like" or "as"; a metaphor does not', 'A metaphor is always about nature', 'There is no difference'], correct: 1, explanation: 'A simile compares using "like" or "as" (e.g., "brave as a lion"), while a metaphor states one thing IS another without those connecting words (e.g., "he was a lion in battle").' },
      { id: 'y8t2-m2-q3', question: 'Why is imagery especially important in war poetry?', options: ['It makes the poem longer', 'It helps with the rhyme scheme', 'It bridges the gap between the poet\'s experience and the reader\'s imagination', 'It is required by the exam board'], correct: 2, explanation: 'Most readers have never experienced combat. Imagery recreates the sights, sounds, and feelings of war so the reader can understand and feel the poet\'s experience.' },
      { id: 'y8t2-m2-q4', question: 'What does personification do in poetry?', options: ['Compares two things using "like"', 'Gives human qualities to non-human things', 'Creates a regular rhythm', 'Repeats the first consonant sound'], correct: 1, explanation: 'Personification gives human qualities to non-human things. In war poetry, abstract concepts like Death or Nature are often personified to make them feel immediate and threatening.' },
      { id: 'y8t2-m2-q5', question: 'What is an extended metaphor?', options: ['A very long poem', 'A metaphor developed across several lines or an entire poem', 'A comparison using "as if"', 'Two similes placed side by side'], correct: 1, explanation: 'An extended metaphor is sustained across multiple lines or even the whole poem, building a deeper parallel between two ideas rather than making a single quick comparison.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 3 — Tone and Mood
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m3',
    title: 'Tone and Mood – How Poets Create Feeling',
    duration: '40 min',
    content: `
<h2>The Emotional Temperature of a Poem</h2>

<p>Every poem has an emotional atmosphere — a feeling that surrounds the reader from the first line. This atmosphere is created through two closely related but distinct concepts: <strong>tone</strong> and <strong>mood</strong>. Understanding the difference between them, and being able to explain how a poet creates each one, is essential to strong analysis.</p>

<h3>Tone vs. Mood</h3>

<p><strong>Tone</strong> is the poet's attitude towards their subject. It is the voice behind the words — angry, sorrowful, bitter, celebratory, ironic, detached, compassionate. Tone tells you how the poet <em>feels</em> about what they are describing. You detect tone through word choice, sentence structure, and the overall approach the poet takes.</p>

<p><strong>Mood</strong> is the feeling the poem creates in the reader. It is the emotional effect of the poem — tension, sadness, horror, calm, unease, hope. Mood is the result of all the poet's choices working together: imagery, rhythm, sound, structure, and word choice combine to make you feel something.</p>

<div class="key-term"><strong>Key Term: Tone</strong> — The poet's attitude towards their subject, revealed through word choice, imagery, and style. Think of it as the writer's emotional stance.</div>

<div class="key-term"><strong>Key Term: Mood</strong> — The atmosphere or feeling a poem creates in the reader. It is the cumulative emotional effect of the poet's techniques.</div>

<p>A simple way to remember: <strong>tone is the poet's feeling; mood is your feeling.</strong> They often align — an angry poet usually creates an unsettling mood — but they can diverge. A poet might use a calm, detached tone to describe horrific events, and the contrast between the cool voice and the terrible content creates an especially disturbing mood.</p>

<h3>How Poets Create Tone</h3>

<p>Tone is primarily created through <strong>diction</strong> — the poet's choice of individual words. Consider these two ways of describing the same event:</p>
<ul>
  <li>"The soldiers advanced bravely across the field." — The tone is <strong>admiring</strong>, even heroic. Words like "bravely" and "advanced" suggest purpose and courage.</li>
  <li>"The men stumbled blindly into the killing ground." — The tone is <strong>bitter and accusatory</strong>. "Stumbled" suggests chaos, "blindly" suggests ignorance, and "killing ground" reduces the battlefield to a place of slaughter.</li>
</ul>

<p>Same event, completely different attitudes. The poet's diction — their specific word choices — is what creates the tone.</p>

<h3>How Poets Create Mood</h3>

<p>Mood is created through the combination of multiple techniques:</p>
<ul>
  <li><strong>Imagery:</strong> Dark, violent images create a threatening mood; gentle, natural images create a peaceful one.</li>
  <li><strong>Sound devices:</strong> Harsh consonant sounds (plosives like "b," "d," "k") create aggression; soft sounds (sibilants like "s," liquids like "l") create calm or menace.</li>
  <li><strong>Rhythm and pace:</strong> Short, abrupt sentences create urgency and tension. Long, flowing lines create calm or sadness.</li>
  <li><strong>Structure:</strong> A poem that breaks apart mid-line (using caesura) can feel fractured and distressing. A regular, predictable structure can feel controlled or mechanical.</li>
</ul>

<h3>Shifts in Tone and Mood</h3>

<p>Many conflict poems do not maintain a single tone throughout. They shift — often dramatically. A poem might begin with a proud, patriotic tone and then shift to bitter disillusionment after describing the reality of battle. This technique is called a <strong>volta</strong> (Italian for "turn"), and recognising where and how the tone shifts is one of the most important analytical skills you can develop.</p>

<div class="key-term"><strong>Key Term: Volta</strong> — A turning point in a poem where the tone, mood, or argument shifts significantly. Originally associated with sonnets, the term is now used for any decisive change of direction in a poem.</div>

<p>When you spot a shift in tone, ask yourself:</p>
<ul>
  <li>What triggers the change? Is it a new event, a memory, a realisation?</li>
  <li>How does the language change? Do the word choices become darker, softer, more sarcastic?</li>
  <li>What effect does the shift have on the reader? Does it shock, sadden, or provoke thought?</li>
</ul>

<h3>Common Tones in Conflict Poetry</h3>

<table>
  <tr><th>Tone</th><th>Description</th><th>Typical signals</th></tr>
  <tr><td>Patriotic</td><td>Proud, duty-driven</td><td>Noble vocabulary, regular rhythm, celebratory imagery</td></tr>
  <tr><td>Bitter</td><td>Angry, resentful</td><td>Harsh diction, sarcasm, irony, rhetorical questions</td></tr>
  <tr><td>Elegiac</td><td>Mourning, sorrowful</td><td>Gentle rhythm, natural imagery, past tense, sense of loss</td></tr>
  <tr><td>Ironic</td><td>Saying one thing, meaning another</td><td>Contrast between surface meaning and reality, understated language</td></tr>
  <tr><td>Detached</td><td>Emotionally distant, clinical</td><td>Third person, factual language, lack of emotional adjectives</td></tr>
  <tr><td>Compassionate</td><td>Empathetic, humane</td><td>Focus on individual suffering, tender details, direct address</td></tr>
</table>

<div class="examiner-tip"><strong>Study Tip:</strong> When identifying tone, always support your claim with a quotation. Do not just say "the tone is bitter." Say "the bitter tone is created through the word 'guttering,' which suggests the soldiers' lives are flickering out like dying candles — a deliberate choice to strip away any sense of heroism."</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Confusing the speaker's tone with the poet's tone. The speaker of the poem may be sarcastic or boastful, but the poet might be using that voice ironically to criticise those attitudes. Always consider whether the poet agrees with their speaker.</div>`,
    quiz: [
      { id: 'y8t2-m3-q1', question: 'What is the difference between tone and mood?', options: ['They mean exactly the same thing', 'Tone is the poet\'s attitude; mood is the feeling created in the reader', 'Tone is about rhythm; mood is about rhyme', 'Mood is the poet\'s attitude; tone is the reader\'s feeling'], correct: 1, explanation: 'Tone is the poet\'s attitude towards their subject (their emotional stance), while mood is the atmosphere or emotional effect the poem creates in the reader.' },
      { id: 'y8t2-m3-q2', question: 'What is a volta?', options: ['A type of rhyme scheme', 'A turning point where the tone or mood shifts', 'A Latin word for conflict', 'The final line of a poem'], correct: 1, explanation: 'A volta is a turning point in a poem where the tone, mood, or argument shifts significantly. Recognising where the volta occurs is a key analytical skill.' },
      { id: 'y8t2-m3-q3', question: 'How is tone primarily created in a poem?', options: ['Through the number of stanzas', 'Through the title', 'Through diction — the poet\'s choice of words', 'Through the length of the poem'], correct: 2, explanation: 'Tone is primarily created through diction — the specific words a poet chooses. Words like "bravely" create an admiring tone, while words like "stumbled blindly" create a bitter, accusatory tone.' },
      { id: 'y8t2-m3-q4', question: 'Which tone involves saying one thing but meaning the opposite?', options: ['Elegiac', 'Patriotic', 'Ironic', 'Compassionate'], correct: 2, explanation: 'An ironic tone involves a contrast between what is said on the surface and what is actually meant. Poets use irony to expose hypocrisy or to make a point more forcefully through understatement.' },
      { id: 'y8t2-m3-q5', question: 'What common mistake do students make when discussing tone?', options: ['Using too many quotations', 'Writing too much about mood', 'Confusing the speaker\'s tone with the poet\'s tone', 'Not mentioning the title'], correct: 2, explanation: 'Students often assume the speaker and the poet share the same attitude. But a poet might create a boastful speaker in order to criticise boastfulness through irony.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 4 — Structure in Poetry
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m4',
    title: 'Structure in Poetry – Form, Stanza, Enjambment',
    duration: '45 min',
    content: `
<h2>The Architecture of a Poem</h2>

<p>When we talk about the <strong>structure</strong> of a poem, we mean the way it is built — its shape on the page, the way its ideas are organised, and the techniques the poet uses to control how you read it. Structure is not just decoration; it is meaning. The way a poem looks and moves is as deliberate as the words it contains.</p>

<h3>Form: The Blueprint</h3>

<p><strong>Form</strong> refers to the overall type or pattern of a poem. Some forms have strict rules (a sonnet must have fourteen lines); others are deliberately rule-free (free verse). The form a poet chooses tells you something about their intentions:</p>

<ul>
  <li><strong>Sonnet</strong> (14 lines, usually iambic pentameter) — A tightly controlled form often used for intense personal emotion. War sonnets can feel like a single, concentrated cry of grief or defiance.</li>
  <li><strong>Ballad</strong> (quatrains with ABAB or ABCB rhyme) — A storytelling form with a song-like rhythm. Ballads about war often have an ironic quality: the cheerful rhythm clashes with the grim subject matter.</li>
  <li><strong>Free verse</strong> (no fixed metre or rhyme) — Deliberately formless, reflecting chaos, modernity, or the rejection of traditional structures. Many 20th- and 21st-century war poems use free verse to mirror the disorder of conflict.</li>
  <li><strong>Dramatic monologue</strong> — A poem spoken by a single character to an implied listener. This form allows the poet to inhabit a persona and explore perspectives that may differ from their own.</li>
</ul>

<div class="key-term"><strong>Key Term: Form</strong> — The overall type or structural pattern of a poem (sonnet, ballad, free verse, etc.). Form is a deliberate choice that shapes meaning.</div>

<h3>Stanza: The Building Blocks</h3>

<p>A <strong>stanza</strong> is a group of lines within a poem, separated from other groups by a blank line — like a paragraph in prose. Stanza length and regularity carry meaning:</p>

<ul>
  <li><strong>Regular stanzas</strong> (e.g., all four lines) suggest order, control, and discipline — appropriate for a poem about military precision or a tightly controlled emotional response.</li>
  <li><strong>Irregular stanzas</strong> (varying lengths) suggest instability, chaos, or emotional turbulence — appropriate for a poem about the disorder of battle or the breakdown of a speaker's composure.</li>
  <li><strong>A single-stanza poem</strong> (no breaks at all) can feel relentless, as though the experience cannot be paused or broken into manageable pieces.</li>
  <li><strong>A final short stanza</strong> (a couplet or single line after longer stanzas) can deliver a powerful, punchy conclusion — a final thought that lingers in the reader's mind.</li>
</ul>

<div class="key-term"><strong>Key Term: Stanza</strong> — A group of lines in a poem, separated by blank lines. Stanzas organise the poem's ideas and contribute to its visual shape and rhythm.</div>

<h3>Enjambment and End-Stopping</h3>

<p><strong>Enjambment</strong> occurs when a sentence or phrase runs over from one line into the next without punctuation. The reader's eye is pulled forward, creating a sense of momentum, urgency, or overflow. In war poetry, enjambment can mirror the unstoppable chaos of battle or the rushing thoughts of a frightened soldier.</p>

<p><strong>End-stopping</strong> is the opposite: a line ends with a punctuation mark (full stop, comma, semicolon) that creates a natural pause. End-stopped lines feel controlled, deliberate, and measured. A poem that shifts from enjambed lines to a sudden end-stopped line can create a dramatic moment of stillness — like the silence after an explosion.</p>

<div class="key-term"><strong>Key Term: Enjambment</strong> — When a sentence or clause runs across a line break without punctuation, pulling the reader forward. It creates pace, momentum, and a sense of ideas overflowing their boundaries.</div>

<h3>Caesura: The Pause Within</h3>

<p>A <strong>caesura</strong> is a pause in the middle of a line, usually created by punctuation (a full stop, dash, comma, or ellipsis). Caesura can create a sense of interruption, hesitation, or fracture. In conflict poetry, a mid-line pause might represent a moment of shock, a heartbeat of silence, or the abrupt end of a life.</p>

<h3>Analysing Structure: What to Say</h3>

<p>When writing about structure, avoid simply labelling features. Instead, explain the effect:</p>
<ul>
  <li><strong>Weak:</strong> "The poet uses enjambment in line 3."</li>
  <li><strong>Strong:</strong> "The enjambment across lines 3 and 4 creates a breathless momentum that mirrors the soldiers' desperate rush forward, giving the reader no pause — just as the soldiers have no time to think."</li>
</ul>

<p>Structure analysis is about connecting the <em>shape</em> of the poem to its <em>meaning</em>. Every structural choice is a decision the poet made for a reason, and your job is to explain that reason.</p>

<div class="examiner-tip"><strong>Study Tip:</strong> Before analysing a poem's structure, look at it from a distance. What shape does it make on the page? Are the stanzas even or uneven? Are there any very short or very long lines? Are there gaps, indents, or visual disruptions? These visual features are structural choices with meaning.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Only writing about language techniques and ignoring structure entirely. Structure analysis is just as important as language analysis, and examiners reward students who can discuss both.</div>`,
    quiz: [
      { id: 'y8t2-m4-q1', question: 'What is enjambment?', options: ['A rhyme at the end of a line', 'When a sentence runs over from one line to the next without punctuation', 'A pause in the middle of a line', 'A poem with no stanzas'], correct: 1, explanation: 'Enjambment occurs when a sentence or phrase carries over from one line into the next without any punctuation at the line break, pulling the reader forward.' },
      { id: 'y8t2-m4-q2', question: 'What does a caesura create in a line of poetry?', options: ['A rhyme', 'A simile', 'A pause in the middle of the line', 'An extra syllable'], correct: 2, explanation: 'A caesura is a pause within a line, created by punctuation such as a full stop, dash, or comma. It can represent interruption, shock, or a moment of silence.' },
      { id: 'y8t2-m4-q3', question: 'What might irregular stanza lengths suggest in a conflict poem?', options: ['The poet is lazy', 'Order, control, and discipline', 'Instability, chaos, or emotional turbulence', 'The poem is unfinished'], correct: 2, explanation: 'Irregular stanzas suggest disorder and instability, which can mirror the chaos of battle or the breakdown of a speaker\'s emotional composure.' },
      { id: 'y8t2-m4-q4', question: 'Which poetic form has exactly fourteen lines?', options: ['Ballad', 'Free verse', 'Sonnet', 'Dramatic monologue'], correct: 2, explanation: 'A sonnet is a fourteen-line poem, usually written in iambic pentameter. It is a tightly controlled form often used for intense personal emotion, including grief and defiance in war poetry.' },
      { id: 'y8t2-m4-q5', question: 'Why is free verse often used in modern war poetry?', options: ['Because the poet cannot rhyme', 'Because it mirrors the disorder and chaos of conflict', 'Because it is easier to write', 'Because it is the only modern form'], correct: 1, explanation: 'Free verse has no fixed metre or rhyme scheme. Its deliberate formlessness can reflect the chaos of modern warfare and the rejection of traditional, ordered structures.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 5 — Comparing Two Poems
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m5',
    title: 'Comparing Two Poems – Using Comparative Connectives',
    duration: '45 min',
    content: `
<h2>Finding Connections and Contrasts</h2>

<p>Comparing two poems is one of the most demanding skills in English Literature, but it is also one of the most rewarding. When you compare, you are not just writing about two poems separately — you are exploring the <em>relationship</em> between them. How do two different poets respond to the same theme? Where do their approaches overlap, and where do they diverge? Comparison reveals things about each poem that you might miss if you studied them in isolation.</p>

<h3>What Examiners Want</h3>

<p>A comparison question does not ask you to write about Poem A and then write about Poem B. That is <strong>not</strong> comparison — it is two separate essays bolted together. Instead, you need to write about both poems <em>simultaneously</em>, moving between them point by point. Every paragraph should reference both texts.</p>

<p>The best comparisons are structured around <strong>shared points of comparison</strong> — aspects that both poems address, such as imagery, tone, structure, or a specific theme. Within each point, you explain how each poet handles that aspect, noting similarities and differences.</p>

<h3>Comparative Connectives</h3>

<p>Comparative connectives are the words and phrases that link your discussion of one poem to your discussion of another. They are the glue that holds a comparison together. Without them, your essay falls apart into two disconnected halves.</p>

<h4>Connectives for Similarities</h4>
<ul>
  <li>Similarly, ...</li>
  <li>In the same way, ...</li>
  <li>Both poets ...</li>
  <li>Like [Poet A], [Poet B] also ...</li>
  <li>This is echoed in [Poem B], where ...</li>
  <li>[Poet B] shares this perspective, using ...</li>
</ul>

<h4>Connectives for Differences</h4>
<ul>
  <li>In contrast, ...</li>
  <li>However, ...</li>
  <li>Whereas [Poet A] ..., [Poet B] ...</li>
  <li>On the other hand, ...</li>
  <li>Unlike [Poet A], [Poet B] chooses to ...</li>
  <li>While [Poem A] presents ..., [Poem B] offers ...</li>
</ul>

<h4>Connectives for Development</h4>
<ul>
  <li>Furthermore, ...</li>
  <li>Moreover, ...</li>
  <li>[Poet B] takes this further by ...</li>
  <li>This idea is developed more radically in [Poem B], where ...</li>
</ul>

<div class="key-term"><strong>Key Term: Comparative connective</strong> — A word or phrase used to link discussion of two texts, signalling a similarity, difference, or development. Using these accurately is essential for a successful comparison.</div>

<h3>Structuring a Comparison</h3>

<p>There are two main structures for a comparative essay. Your teacher may prefer one over the other, but both are effective:</p>

<p><strong>Method 1: Alternating (recommended)</strong></p>
<ul>
  <li>Introduction — briefly introduce both poems and state your overall argument.</li>
  <li>Point 1 — Discuss the first point of comparison, moving between Poem A and Poem B.</li>
  <li>Point 2 — Discuss the second point, again covering both poems.</li>
  <li>Point 3 — Discuss the third point, covering both poems.</li>
  <li>Conclusion — summarise the key similarities and differences; offer a final evaluative comment.</li>
</ul>

<p><strong>Method 2: Block (less effective but acceptable)</strong></p>
<ul>
  <li>Introduction</li>
  <li>All your analysis of Poem A (3-4 paragraphs)</li>
  <li>A transition paragraph that begins the comparison</li>
  <li>All your analysis of Poem B, with constant references back to Poem A</li>
  <li>Conclusion</li>
</ul>

<p>The alternating method is stronger because it forces you to compare throughout. The block method risks becoming two separate essays unless you work hard to link back in the second half.</p>

<h3>What to Compare</h3>

<p>When choosing your points of comparison, think across four categories:</p>
<ol>
  <li><strong>Theme</strong> — Do both poems address the same theme? Do they agree or disagree?</li>
  <li><strong>Language</strong> — How do the poets use imagery, diction, figurative language? Are their styles similar or contrasting?</li>
  <li><strong>Structure</strong> — How are the poems shaped? Do they use the same form? Do they handle pace and rhythm differently?</li>
  <li><strong>Tone and mood</strong> — What attitudes do the poets take? What feelings do they create?</li>
</ol>

<div class="model-answer"><div class="model-answer-header">MODEL PARAGRAPH</div>
<p>Both poets use imagery of nature to explore the impact of conflict on the landscape. In Poem A, the battlefield is described as a "scarred earth," where the adjective "scarred" suggests permanent damage — the land itself has become a victim of war. Similarly, Poem B presents the aftermath of conflict through the image of "fields that forgot their green," personifying the landscape as suffering from memory loss, as though the violence has erased its natural identity. However, while Poem A focuses on physical destruction, Poem B emphasises psychological erasure, suggesting that conflict does not just damage the world — it fundamentally changes what the world is.</p>
</div>

<div class="examiner-tip"><strong>Study Tip:</strong> Practise writing comparative sentences until they become second nature. Take any two poems and write five sentences using five different connectives. The more fluent your comparative writing becomes, the more sophisticated your essays will be.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing about one poem for the whole essay and then adding a single comparison paragraph at the end. Comparison must run throughout the entire essay, not just appear as an afterthought.</div>`,
    quiz: [
      { id: 'y8t2-m5-q1', question: 'What is the main difference between the alternating and block structures for comparison?', options: ['Alternating is shorter', 'Alternating moves between both poems in each paragraph; block covers one poem at a time', 'Block structure is always better', 'There is no difference'], correct: 1, explanation: 'The alternating method discusses both poems within each paragraph, moving between them point by point. The block method covers one poem fully before moving to the second.' },
      { id: 'y8t2-m5-q2', question: 'Which of the following is a comparative connective for showing contrast?', options: ['Similarly', 'Both poets', 'Furthermore', 'Whereas'], correct: 3, explanation: '"Whereas" signals a contrast between two things. It is used to highlight differences: "Whereas Poet A uses violent imagery, Poet B takes a gentler approach."' },
      { id: 'y8t2-m5-q3', question: 'What should every paragraph in a comparative essay include?', options: ['A quotation from only one poem', 'References to both poems', 'A biographical fact about the poet', 'At least three similes'], correct: 1, explanation: 'In a comparative essay, every paragraph should reference both texts. This ensures you are genuinely comparing rather than writing two separate analyses.' },
      { id: 'y8t2-m5-q4', question: 'Which four categories should you compare across two poems?', options: ['Plot, character, setting, dialogue', 'Theme, language, structure, tone and mood', 'Rhyme, rhythm, alliteration, onomatopoeia', 'Title, date, length, author'], correct: 1, explanation: 'The four key areas for comparison are theme (what the poems are about), language (how they say it), structure (how they are shaped), and tone/mood (what attitudes and feelings they convey).' },
      { id: 'y8t2-m5-q5', question: 'What is the biggest mistake students make in comparative essays?', options: ['Using too many quotations', 'Comparing the poems throughout rather than at the end', 'Writing about one poem for most of the essay and only comparing at the end', 'Using the alternating structure'], correct: 2, explanation: 'The most common error is writing about one poem for the whole essay and tacking on a comparison paragraph at the end. Comparison must run throughout every paragraph.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 6 — Writing a Comparative Essay
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m6',
    title: 'Writing a Comparative Essay – Structure and Development',
    duration: '50 min',
    content: `
<h2>From Plan to Polished Essay</h2>

<p>In Module 5 you learned the principles of comparison and the connectives that hold a comparative essay together. Now it is time to put those principles into practice. This module takes you step by step through the process of planning and writing a full comparative essay on two conflict poems. By the end, you will have a clear, repeatable method that you can apply to any pairing of poems.</p>

<h3>Step 1: Read Both Poems Carefully</h3>

<p>Before you write a single word, read both poems at least twice. On your first reading, focus on understanding what each poem is about. On your second reading, begin annotating — mark up imagery, structural features, shifts in tone, and any words that feel particularly powerful or surprising. Then ask yourself the comparison question: what connects these two poems, and what separates them?</p>

<h3>Step 2: Plan Your Points</h3>

<p>A strong comparative essay typically makes three or four well-developed points. Each point should be a genuine point of comparison — something both poems do, but perhaps in different ways. Plan your points before you start writing:</p>

<table>
  <tr><th>Point of comparison</th><th>Poem A</th><th>Poem B</th></tr>
  <tr><td>Imagery of the battlefield</td><td>Uses dark, claustrophobic images</td><td>Uses open, desolate landscape images</td></tr>
  <tr><td>Speaker's attitude to war</td><td>Bitter and disillusioned</td><td>Mournful but accepting</td></tr>
  <tr><td>Structural choices</td><td>Regular stanzas — controlled grief</td><td>Fragmented free verse — emotional chaos</td></tr>
</table>

<h3>Step 3: Write a Strong Introduction</h3>

<p>Your introduction should do three things:</p>
<ol>
  <li>Name both poems and their poets.</li>
  <li>Identify the shared theme or subject.</li>
  <li>State your overall argument — your "thesis." This is the central claim your essay will prove.</li>
</ol>

<p>A thesis is not a summary; it is an argument. Compare:</p>
<ul>
  <li><strong>Weak:</strong> "Both poems are about war."</li>
  <li><strong>Strong:</strong> "While both poets explore the devastating impact of conflict on the individual, Poet A focuses on the physical horrors of the battlefield whereas Poet B examines the lasting psychological scars carried by those who survive."</li>
</ul>

<div class="key-term"><strong>Key Term: Thesis statement</strong> — A clear, arguable claim made at the beginning of an essay that the rest of the essay will support with evidence and analysis. A strong thesis goes beyond description to make a point.</div>

<h3>Step 4: Write Comparative Paragraphs</h3>

<p>Each body paragraph should follow this structure:</p>
<ol>
  <li><strong>Topic sentence</strong> — introduce the point of comparison and state your argument.</li>
  <li><strong>Poem A analysis</strong> — provide a quotation, analyse language/structure, explain the effect.</li>
  <li><strong>Comparative link</strong> — use a connective to transition to Poem B.</li>
  <li><strong>Poem B analysis</strong> — provide a quotation, analyse language/structure, explain the effect.</li>
  <li><strong>Evaluative comment</strong> — reflect on the significance of the similarity or difference. Why does it matter?</li>
</ol>

<p>This five-part structure ensures you are always comparing, always analysing, and always evaluating. It prevents the essay from becoming a list of disconnected observations.</p>

<h3>Step 5: Write a Purposeful Conclusion</h3>

<p>Your conclusion should not simply repeat your introduction. Instead, it should:</p>
<ul>
  <li>Summarise the key similarities and differences you have identified.</li>
  <li>Offer a final evaluative judgement — which poet is more effective? Which approach is more powerful? Which poem stayed with you longer, and why?</li>
  <li>End with a statement that leaves the reader thinking.</li>
</ul>

<h3>Common Pitfalls and How to Avoid Them</h3>

<ul>
  <li><strong>Narrative retelling:</strong> Do not retell what happens in each poem. Assume the reader knows the poems. Focus on <em>how</em> and <em>why</em> the poets make their choices.</li>
  <li><strong>Feature-spotting:</strong> Do not just identify techniques ("the poet uses alliteration"). Always explain the <em>effect</em> of the technique on the reader.</li>
  <li><strong>Unbalanced coverage:</strong> Give roughly equal time to both poems. If you write three paragraphs on Poem A and one on Poem B, the comparison is lopsided.</li>
  <li><strong>Vague comparison:</strong> "Both poems are similar but different" says nothing. Be specific about <em>what</em> is similar, <em>what</em> is different, and <em>why</em> it matters.</li>
</ul>

<div class="examiner-tip"><strong>Study Tip:</strong> After writing your essay, highlight every comparative connective in one colour and every quotation in another. If there are paragraphs with no connectives, you are not comparing. If there are paragraphs with no quotations, you are not evidencing.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Spending too long on the introduction. Your introduction should be 3-5 sentences maximum. The marks are in the analytical body paragraphs, not in lengthy scene-setting.</div>`,
    quiz: [
      { id: 'y8t2-m6-q1', question: 'What three things should a comparative essay introduction include?', options: ['Three quotations from each poem', 'The poems\' names, shared theme, and a thesis statement', 'Biographical details about both poets', 'A summary of both poems'], correct: 1, explanation: 'A strong introduction names both poems and their poets, identifies the shared theme or subject, and states a thesis — a clear, arguable claim the essay will prove.' },
      { id: 'y8t2-m6-q2', question: 'What is the difference between a weak and strong thesis statement?', options: ['A strong thesis is longer', 'A weak thesis describes; a strong thesis argues', 'A strong thesis uses more quotations', 'There is no real difference'], correct: 1, explanation: 'A weak thesis merely describes ("both poems are about war"). A strong thesis makes an arguable claim about HOW or WHY the poems approach the subject differently.' },
      { id: 'y8t2-m6-q3', question: 'What is "feature-spotting" and why should you avoid it?', options: ['It means finding quotations, which is good', 'It means identifying techniques without explaining their effect, which earns few marks', 'It means comparing two poems, which is the task', 'It means planning your essay, which takes too long'], correct: 1, explanation: 'Feature-spotting means identifying a technique ("the poet uses alliteration") without explaining its effect on the reader. It earns minimal marks because there is no analysis.' },
      { id: 'y8t2-m6-q4', question: 'What should a comparative essay conclusion do?', options: ['Repeat the introduction word for word', 'Introduce a new poem', 'Summarise key points and offer a final evaluative judgement', 'List all the techniques you found'], correct: 2, explanation: 'A conclusion summarises the key similarities and differences, offers a final evaluative judgement about which approach is more effective, and ends with a thought-provoking statement.' },
      { id: 'y8t2-m6-q5', question: 'In the five-part paragraph structure, what comes between the Poem A analysis and the Poem B analysis?', options: ['A conclusion', 'A quotation from a third poem', 'A comparative connective linking the two', 'A biographical fact'], correct: 2, explanation: 'A comparative connective (such as "Similarly," "In contrast," or "Whereas") links your analysis of Poem A to your analysis of Poem B, ensuring the paragraph genuinely compares.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 7 — Introduction to Macbeth
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m7',
    title: 'Introduction to Macbeth – Shakespeare\'s Language',
    duration: '45 min',
    content: `
<h2>Entering Shakespeare's World</h2>

<p>William Shakespeare wrote <em>Macbeth</em> around 1606, during the reign of King James I. It is one of the shortest and most intense of his tragedies — a play about ambition, murder, guilt, and the destruction that follows when a powerful man chooses evil over good. For Year 8, we focus on Macbeth as a study in <strong>conflict and power</strong>: the conflict between ambition and morality, the power of language to manipulate, and the political violence that erupts when leadership is corrupted.</p>

<h3>Why Shakespeare Still Matters</h3>

<p>Shakespeare's language can feel alien at first. The vocabulary is unfamiliar, the sentence structures are inverted, and the references are to a world four centuries old. But beneath the surface, Shakespeare is writing about things that have not changed: the hunger for power, the fear of death, the weight of guilt, the way people deceive themselves and each other. Once you crack the code of his language, you will find characters who feel startlingly real — and disturbingly recognisable.</p>

<h3>Cracking the Language</h3>

<p>Shakespeare wrote in Early Modern English — not Old English, not a foreign language, but an earlier version of the English you speak today. Most of the vocabulary is familiar if you look closely. Here are the most common stumbling blocks and how to overcome them:</p>

<ul>
  <li><strong>Word order:</strong> Shakespeare often inverts the normal subject-verb-object order. "Fair is foul, and foul is fair" means the same as "What is fair is actually foul." Mentally rearranging the words often unlocks the meaning.</li>
  <li><strong>Thee/thou/thy:</strong> These are simply old forms of "you" and "your." "Thou" = you (subject), "thee" = you (object), "thy" = your.</li>
  <li><strong>Verb endings:</strong> "-est" (you run = "thou runnest"), "-eth" (he runs = "he runneth"). These are just old conjugations.</li>
  <li><strong>Unfamiliar words:</strong> Many have modern equivalents. "Hither" = here, "hence" = from here, "whence" = from where, "ere" = before, "anon" = soon.</li>
  <li><strong>Contractions:</strong> "'Tis" = it is, "'twas" = it was, "o'er" = over, "ne'er" = never.</li>
</ul>

<div class="key-term"><strong>Key Term: Iambic pentameter</strong> — A rhythmic pattern of ten syllables per line, alternating between unstressed and stressed beats (da-DUM da-DUM da-DUM da-DUM da-DUM). Shakespeare's characters speak in iambic pentameter when they are noble, composed, or in control. When they break this rhythm, it signals emotional disturbance.</div>

<h3>Verse and Prose: Why It Matters</h3>

<p>Shakespeare's characters do not all speak in the same way. High-status characters and emotionally significant moments are written in <strong>verse</strong> (lines of iambic pentameter, sometimes rhyming). Lower-status characters, comic scenes, and moments of madness are often written in <strong>prose</strong> (ordinary sentences without a fixed rhythm). When a character switches from verse to prose — or vice versa — it is a signal. Lady Macbeth's sleepwalking scene, for example, is written in prose, even though she is a queen. The breakdown of her verse mirrors the breakdown of her mind.</p>

<h3>Key Theatrical Conventions</h3>

<ul>
  <li><strong>Soliloquy:</strong> A speech delivered by a character alone on stage, revealing their private thoughts to the audience. Macbeth's soliloquies are windows into his tormented conscience.</li>
  <li><strong>Aside:</strong> A brief comment spoken to the audience that other characters on stage cannot hear. Asides create dramatic irony — the audience knows something the other characters do not.</li>
  <li><strong>Dramatic irony:</strong> When the audience knows more than the characters. In <em>Macbeth</em>, dramatic irony is everywhere: we know Macbeth has murdered Duncan while other characters praise his loyalty.</li>
</ul>

<div class="key-term"><strong>Key Term: Soliloquy</strong> — A speech in which a character, alone on stage, reveals their innermost thoughts and feelings to the audience. Soliloquies are essential for understanding characters whose public behaviour differs from their private selves.</div>

<h3>The Plot in Brief</h3>

<p>Macbeth, a brave Scottish general, meets three witches who prophesy that he will become king. Spurred on by his ambitious wife, he murders King Duncan and seizes the throne. But the crown brings no peace — only paranoia, more violence, and eventual destruction. Lady Macbeth, consumed by guilt, descends into madness. Macbeth, increasingly isolated and tyrannical, is finally killed in battle by Macduff. Order is restored under the rightful king, Malcolm.</p>

<p>The play asks a devastating question: <strong>what happens when ambition overrides morality?</strong> The answer, Shakespeare suggests, is total destruction — of the self, of relationships, and of the state.</p>

<div class="examiner-tip"><strong>Study Tip:</strong> Do not try to understand every word on a first reading. Focus on the gist — who is speaking, what they want, and how they feel. The details will become clearer on subsequent readings.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating Shakespeare as a novel. <em>Macbeth</em> is a play — it was written to be performed. Always think about how lines would be spoken, what gestures an actor might use, and what the audience would see and feel in a theatre.</div>`,
    quiz: [
      { id: 'y8t2-m7-q1', question: 'When was Macbeth written and during whose reign?', options: ['1590, during Elizabeth I\'s reign', '1606, during James I\'s reign', '1623, during Charles I\'s reign', '1580, during Henry VIII\'s reign'], correct: 1, explanation: 'Macbeth was written around 1606, during the reign of King James I. James was particularly interested in witchcraft, which may have influenced Shakespeare\'s inclusion of the witches.' },
      { id: 'y8t2-m7-q2', question: 'What is iambic pentameter?', options: ['A rhyme scheme used in sonnets', 'A pattern of ten syllables per line alternating unstressed and stressed beats', 'A type of stage direction', 'A form of punctuation'], correct: 1, explanation: 'Iambic pentameter is a rhythmic pattern: five pairs of syllables (ten total), each pair going unstressed-stressed (da-DUM). Shakespeare uses it for high-status characters and emotionally significant moments.' },
      { id: 'y8t2-m7-q3', question: 'What does it signal when a character switches from verse to prose?', options: ['They are speaking to a servant', 'There is an emotional or psychological change', 'The scene is about to end', 'They are telling a joke'], correct: 1, explanation: 'Switching from verse to prose signals a change in the character\'s mental or emotional state. Lady Macbeth\'s sleepwalking scene is in prose, mirroring her mental breakdown.' },
      { id: 'y8t2-m7-q4', question: 'What is a soliloquy?', options: ['A conversation between two characters', 'A song performed by the chorus', 'A speech by a character alone on stage revealing private thoughts', 'A letter read aloud'], correct: 2, explanation: 'A soliloquy is a speech delivered by a character who is alone on stage, revealing their innermost thoughts to the audience. It allows us to see what characters truly think and feel.' },
      { id: 'y8t2-m7-q5', question: 'What is the central question Macbeth explores?', options: ['Is love more powerful than hate?', 'What happens when ambition overrides morality?', 'Can poverty be overcome through hard work?', 'Is fate more powerful than free will?'], correct: 1, explanation: 'Macbeth fundamentally asks what happens when ambition overrides morality. The answer the play provides is total destruction — of the individual, relationships, and the state.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 8 — Power and Ambition in Macbeth
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m8',
    title: 'Power and Ambition in Macbeth – Key Scenes',
    duration: '50 min',
    content: `
<h2>The Anatomy of Ambition</h2>

<p>Macbeth is not born evil. At the start of the play, he is a loyal, courageous warrior — "brave Macbeth," "Bellona's bridegroom." His tragedy is that he possesses a fatal flaw: <strong>vaulting ambition</strong>. This ambition, once ignited by the witches' prophecy and fuelled by Lady Macbeth's manipulation, consumes everything good in him and leads to his destruction. The play traces how power, once gained through violence, becomes a prison from which there is no escape.</p>

<h3>Scene Study 1: The Witches' Prophecy (Act 1, Scene 3)</h3>

<p>The witches greet Macbeth with three titles: Thane of Glamis (which he already is), Thane of Cawdor (which he is about to become), and "king hereafter." This scene is the seed from which all the tragedy grows. Notice that the witches do not <em>tell</em> Macbeth to do anything — they simply plant the idea. The ambition was already inside him; they merely awaken it.</p>

<p>Macbeth's reaction is crucial. His friend Banquo notices that Macbeth seems "rapt" — lost in thought, almost in a trance. In an aside, Macbeth's mind immediately leaps to murder: "My thought, whose murder yet is but fantastical, / Shakes so my single state of man." His body physically reacts to the idea — he shakes. This tells us the thought horrifies him, but it also tells us the thought has already taken root.</p>

<div class="key-term"><strong>Key Term: Hamartia (fatal flaw)</strong> — A character trait that leads to the hero's downfall. In Macbeth's case, his hamartia is "vaulting ambition, which o'erleaps itself" — ambition so extreme it overreaches and destroys him.</div>

<h3>Scene Study 2: Lady Macbeth's Persuasion (Act 1, Scene 7)</h3>

<p>This is one of the most psychologically intense scenes in all of Shakespeare. Macbeth has decided <em>not</em> to kill Duncan — he lists reasons of loyalty, morality, and political risk. But Lady Macbeth destroys every one of his arguments through a devastating combination of emotional manipulation:</p>

<ul>
  <li><strong>She attacks his masculinity:</strong> "When you durst do it, then you were a man" — she equates manhood with the willingness to murder, implying that hesitation makes him less than a man.</li>
  <li><strong>She questions his love:</strong> "From this time / Such I account thy love" — she suggests that refusing to act means he does not truly love her.</li>
  <li><strong>She invokes shocking imagery:</strong> She claims she would dash out the brains of her own nursing baby if she had sworn to do so — an image so violent it silences Macbeth's objections.</li>
</ul>

<p>Lady Macbeth does not use reasoned argument; she uses shame, guilt, and emotional violence. Macbeth capitulates not because he is convinced, but because he is overwhelmed. This scene reveals the dynamics of their relationship: she is the more ruthless partner, and he is vulnerable to her manipulation because he values her opinion of his manhood.</p>

<h3>Scene Study 3: The Dagger Soliloquy (Act 2, Scene 1)</h3>

<p>On the night of the murder, Macbeth sees a dagger floating before him — "Is this a dagger which I see before me, / The handle toward my hand?" This is the first of Macbeth's hallucinations, and it marks the moment where reality and fantasy begin to blur. The dagger points him towards Duncan's chamber, as though fate itself is guiding his hand. But Macbeth knows it is not real: "A dagger of the mind, a false creation, / Proceeding from the heat-oppressed brain."</p>

<p>This soliloquy reveals Macbeth's tortured mental state. He is horrified by what he is about to do, yet he cannot stop himself. The dagger is a projection of his guilt, his fear, and his desire — all tangled together. Shakespeare uses the hallucination to externalise Macbeth's internal conflict, making his psychological agony visible to the audience.</p>

<h3>Scene Study 4: The Banquet Scene (Act 3, Scene 4)</h3>

<p>After ordering the murder of his former friend Banquo, Macbeth hosts a feast — a public display of kingship and authority. But Banquo's ghost appears at the table, visible only to Macbeth. He collapses into terror, crying "Thou canst not say I did it!" and "Avaunt, and quit my sight!" in front of his confused and alarmed guests.</p>

<p>This scene is a masterpiece of dramatic irony. The guests see a king having a breakdown for no apparent reason; the audience knows he is seeing the ghost of the man he murdered. The banquet — a symbol of order, community, and shared prosperity — is destroyed by the violent consequences of Macbeth's ambition. The ghost is guilt made flesh, and it proves that Macbeth cannot escape the moral consequences of his actions, no matter how much political power he accumulates.</p>

<div class="key-term"><strong>Key Term: Dramatic irony</strong> — When the audience knows something that the characters on stage do not. In the banquet scene, the audience understands Macbeth's terror while the other characters are bewildered by his behaviour.</div>

<h3>The Trajectory of Power</h3>

<p>Shakespeare structures Macbeth's journey as a clear downward arc. Each act of violence requires another to protect it, creating a chain reaction of murder that Macbeth cannot stop. Having killed Duncan, he must kill Banquo; having killed Banquo, he massacres Macduff's family. With every death, he becomes more isolated, more paranoid, and more tyrannical. By Act 5, even his wife has abandoned him to madness, and his soldiers are deserting to join the opposition. The crown he killed for has become a curse.</p>

<div class="examiner-tip"><strong>Study Tip:</strong> When writing about Macbeth, always consider the relationship between internal conflict (Macbeth's guilt, fear, and ambition) and external conflict (the political violence and its consequences). The play is powerful because these two types of conflict mirror and amplify each other.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Saying "Macbeth killed Duncan because Lady Macbeth told him to." This oversimplifies the psychology. Macbeth had already thought about murder before she spoke. She pushed him over the edge, but the desire was already there.</div>`,
    quiz: [
      { id: 'y8t2-m8-q1', question: 'What is Macbeth\'s hamartia (fatal flaw)?', options: ['Cowardice', 'Jealousy', 'Vaulting ambition', 'Laziness'], correct: 2, explanation: 'Macbeth\'s fatal flaw is his "vaulting ambition" — ambition so extreme it overreaches and destroys him. This is the driving force behind every terrible decision he makes.' },
      { id: 'y8t2-m8-q2', question: 'How does Lady Macbeth persuade Macbeth to kill Duncan?', options: ['She gives him logical arguments', 'She attacks his masculinity and questions his love', 'She threatens to leave him', 'She bribes him with promises of wealth'], correct: 1, explanation: 'Lady Macbeth uses emotional manipulation: she attacks his manhood, questions his love for her, and uses shocking violent imagery to overwhelm his objections.' },
      { id: 'y8t2-m8-q3', question: 'What does the floating dagger in Act 2, Scene 1 represent?', options: ['A real weapon the witches sent', 'Macbeth\'s tortured mental state — guilt, fear, and desire', 'A message from Lady Macbeth', 'A sign from God'], correct: 1, explanation: 'The dagger is a hallucination — a projection of Macbeth\'s guilt, fear, and desire. It externalises his internal conflict, making his psychological agony visible to the audience.' },
      { id: 'y8t2-m8-q4', question: 'Why is the banquet scene dramatically ironic?', options: ['Because the food is poisoned', 'Because the audience knows Macbeth sees Banquo\'s ghost while the guests are bewildered', 'Because Lady Macbeth is hiding behind the curtain', 'Because Macduff arrives uninvited'], correct: 1, explanation: 'The audience knows Macbeth is seeing the ghost of the man he murdered, while the other characters see only a king having an inexplicable breakdown. This gap in knowledge creates powerful dramatic irony.' },
      { id: 'y8t2-m8-q5', question: 'What happens to Macbeth\'s power as the play progresses?', options: ['It grows stronger and more secure', 'It remains constant throughout', 'It becomes a curse — each act of violence requires another, leading to isolation and destruction', 'He voluntarily gives it up'], correct: 2, explanation: 'Each murder requires another to protect it, creating a chain reaction. Macbeth becomes increasingly isolated, paranoid, and tyrannical. The crown he killed for becomes a curse.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 9 — Soliloquy and Stagecraft
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m9',
    title: 'Soliloquy and Stagecraft – How Drama Works',
    duration: '45 min',
    content: `
<h2>The Theatre Is Not a Novel</h2>

<p>When you study <em>Macbeth</em> in class, you read it from a book. But Shakespeare did not write books — he wrote plays. Every word was designed to be spoken aloud on a stage, heard by an audience, and experienced as a live performance. Understanding how drama works — the tools and conventions that playwrights use to create meaning — will transform your analysis from "writing about a story" to "writing about a piece of theatre."</p>

<h3>The Soliloquy: Shakespeare's Greatest Tool</h3>

<p>The soliloquy is Shakespeare's most powerful dramatic device. When a character is alone on stage and speaks their thoughts aloud, the audience becomes their confidant. We hear what no other character hears. We see beneath the public mask to the private self. In <em>Macbeth</em>, the soliloquies are where the real drama happens — not in the murders themselves (which mostly happen offstage), but in the agonised thinking that precedes and follows them.</p>

<h4>Key Soliloquies in Macbeth</h4>

<p><strong>"If it were done when 'tis done" (Act 1, Scene 7)</strong> — Macbeth debates whether to murder Duncan. He weighs the consequences rationally, listing reasons not to act. This soliloquy shows a man who knows the murder is wrong but cannot silence his ambition. The language is full of conditional verbs ("if," "would," "could") that reveal his hesitation.</p>

<p><strong>"Is this a dagger which I see before me" (Act 2, Scene 1)</strong> — On the verge of the murder, Macbeth hallucinates. The soliloquy shifts between rationality ("a false creation") and surrender to dark forces ("Thou marshall'st me the way that I was going"). The audience watches a mind splitting in two.</p>

<p><strong>"Tomorrow, and tomorrow, and tomorrow" (Act 5, Scene 5)</strong> — After learning of Lady Macbeth's death, Macbeth delivers the most nihilistic speech in English literature. Life is "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." This is the endpoint of his journey: a man who has gained everything and lost everything, left with only meaninglessness.</p>

<h3>Stagecraft: The Director's Toolkit</h3>

<p>Stagecraft refers to all the non-verbal elements that contribute to a theatrical performance. When you analyse <em>Macbeth</em>, you should consider not just what characters <em>say</em> but what the audience would <em>see</em> and <em>feel</em> in a theatre:</p>

<ul>
  <li><strong>Proxemics</strong> — the physical distance between characters. When Lady Macbeth whispers in Macbeth's ear, their closeness is intimate and conspiratorial. When Macbeth recoils from Banquo's ghost, the distance reveals his terror.</li>
  <li><strong>Lighting and atmosphere</strong> — Shakespeare's plays were performed in daylight, but he creates darkness through language ("Come, thick night") and through stage directions. Modern productions use lighting to enhance mood — deep red for the murder scenes, cold blue for the witches.</li>
  <li><strong>Sound</strong> — knocking at the gate after Duncan's murder, the thunder that accompanies the witches. Sound effects punctuate the action and create atmosphere.</li>
  <li><strong>Costume and props</strong> — the crown, the daggers, Lady Macbeth's candle in the sleepwalking scene. These objects carry symbolic weight far beyond their physical function.</li>
  <li><strong>Entrances and exits</strong> — when a character enters or leaves the stage matters. Macbeth entering with blood on his hands is a visual that speaks louder than any line of dialogue.</li>
</ul>

<div class="key-term"><strong>Key Term: Stagecraft</strong> — The techniques and conventions used in theatrical performance to create meaning beyond the spoken word: movement, lighting, sound, costume, props, and spatial relationships between characters.</div>

<h3>Dramatic Tension</h3>

<p>Tension is the engine of drama. Shakespeare builds tension through several methods:</p>
<ul>
  <li><strong>Dramatic irony</strong> — the audience knows more than the characters, creating suspense and unease.</li>
  <li><strong>Foreshadowing</strong> — hints about what will happen later. The witches' prophecies foreshadow the entire plot.</li>
  <li><strong>Suspense</strong> — delaying the moment the audience is waiting for. The long buildup to Duncan's murder is agonising precisely because we know it is coming but it takes so long to arrive.</li>
  <li><strong>The aside</strong> — whispered thoughts that create a private channel between character and audience, excluding other characters from crucial information.</li>
</ul>

<h3>Writing About Stagecraft</h3>

<p>When you write about <em>Macbeth</em>, do not forget that it is a play. Examiners reward students who consider the theatrical dimension. Instead of writing "the reader feels tense," write "the audience would feel tense." Instead of saying "Macbeth says he is afraid," say "the actor playing Macbeth might deliver this line in a trembling whisper, physically retreating from the ghost, which would visually communicate his terror to the audience."</p>

<p>Thinking about performance transforms your analysis. It shows you understand that drama is a <em>collaborative</em> art form — meaning is created not just by the playwright's words but by the actors' delivery, the director's choices, and the audience's response.</p>

<div class="examiner-tip"><strong>Study Tip:</strong> Watch at least one filmed performance of <em>Macbeth</em>. Seeing how different actors deliver the same lines will show you how much meaning is created through performance, not just text.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Referring to the "reader" when writing about a play. The correct term is "audience." Shakespeare wrote for people who would hear and see the play, not read it privately.</div>`,
    quiz: [
      { id: 'y8t2-m9-q1', question: 'What is the purpose of a soliloquy?', options: ['To advance the plot quickly', 'To entertain the audience with comedy', 'To reveal a character\'s private thoughts to the audience', 'To summarise previous events'], correct: 2, explanation: 'A soliloquy allows a character, alone on stage, to share their innermost thoughts with the audience. It reveals what the character truly thinks and feels, beneath their public mask.' },
      { id: 'y8t2-m9-q2', question: 'What does the term "proxemics" refer to in stagecraft?', options: ['The volume of an actor\'s voice', 'The physical distance between characters on stage', 'The speed at which lines are delivered', 'The colour of the set design'], correct: 1, explanation: 'Proxemics refers to how physical space is used between characters. Close proximity can suggest intimacy or conspiracy; distance can suggest fear or conflict.' },
      { id: 'y8t2-m9-q3', question: 'Why should you write "audience" rather than "reader" when discussing Macbeth?', options: ['Because it is a longer word', 'Because Macbeth is a play written for performance, not private reading', 'Because the examiner prefers it', 'Because Shakespeare said so'], correct: 1, explanation: 'Macbeth is a play — it was written to be performed on stage and experienced by an audience. Using "audience" shows you understand it as a piece of theatre, not prose fiction.' },
      { id: 'y8t2-m9-q4', question: 'What does Macbeth\'s "Tomorrow, and tomorrow, and tomorrow" soliloquy express?', options: ['Hope for the future', 'Excitement about being king', 'Nihilism — life is meaningless', 'Anger at Lady Macbeth'], correct: 2, explanation: 'This soliloquy, delivered after Lady Macbeth\'s death, expresses total nihilism. Macbeth concludes that life "signifies nothing" — he has gained everything and been left with emptiness.' },
      { id: 'y8t2-m9-q5', question: 'Which of the following is an example of foreshadowing in Macbeth?', options: ['Lady Macbeth washing her hands', 'The witches\' prophecies about Macbeth\'s future', 'Macbeth hosting a banquet', 'The porter opening the gate'], correct: 1, explanation: 'The witches\' prophecies foreshadow the entire plot — they hint at what will happen (Macbeth becoming king, Banquo\'s descendants ruling) and create suspense about how these events will unfold.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 10 — Shakespeare vs. Julius Caesar
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m10',
    title: 'Shakespeare vs. Julius Caesar – Comparative Extracts',
    duration: '50 min',
    content: `
<h2>Two Plays, One Playwright: Comparing Power in Macbeth and Julius Caesar</h2>

<p>Shakespeare returned to the theme of political power and violent ambition throughout his career. <em>Macbeth</em> (c. 1606) and <em>Julius Caesar</em> (c. 1599) both explore what happens when powerful men are destroyed — but they approach the subject from very different angles. Comparing extracts from these two plays deepens your understanding of Shakespeare's thinking about power, loyalty, and the consequences of political violence.</p>

<h3>Julius Caesar: The Context</h3>

<p><em>Julius Caesar</em> is set in ancient Rome. Julius Caesar, the most powerful man in the Roman Republic, is assassinated by a group of senators who fear he will declare himself king and destroy the republic. The play focuses not on Caesar himself but on Brutus, the senator who reluctantly joins the conspiracy. Brutus believes he is acting for the good of Rome, but his noble intentions lead to civil war and his own destruction.</p>

<h3>Key Differences Between the Two Plays</h3>

<table>
  <tr><th>Aspect</th><th>Macbeth</th><th>Julius Caesar</th></tr>
  <tr><td>The killer's motivation</td><td>Personal ambition — Macbeth kills to gain power for himself</td><td>Political idealism — Brutus kills to prevent tyranny and protect the republic</td></tr>
  <tr><td>Guilt and conscience</td><td>Macbeth is tormented by guilt from the moment of the murder</td><td>Brutus believes the murder is justified and feels less personal guilt, though he is haunted by Caesar's ghost</td></tr>
  <tr><td>The role of persuasion</td><td>Lady Macbeth manipulates through emotional pressure</td><td>Cassius manipulates through rational argument and appeals to Brutus's sense of honour</td></tr>
  <tr><td>Supernatural elements</td><td>Central — witches, hallucinations, ghosts drive the plot</td><td>Present but peripheral — omens and Caesar's ghost appear but do not drive the action</td></tr>
  <tr><td>Outcome</td><td>Macbeth becomes a tyrant; order is restored by his death</td><td>Brutus dies believing he acted honourably; the republic falls anyway</td></tr>
</table>

<h3>Comparing Extracts: Persuasion Scenes</h3>

<p>One of the richest comparisons between the two plays is between the persuasion scenes: Lady Macbeth persuading Macbeth to kill Duncan (Act 1, Scene 7) and Cassius persuading Brutus to join the conspiracy against Caesar (Act 1, Scene 2).</p>

<p><strong>Lady Macbeth's method</strong> is emotional violence. She attacks Macbeth's identity as a man, questions his love, and uses shocking imagery. Her language is visceral and physical — she talks about dashing out brains, about being "unsexed," about pouring her spirits into Macbeth's ear. She does not argue that the murder is right; she argues that Macbeth is weak if he does not commit it.</p>

<p><strong>Cassius's method</strong> is intellectual seduction. He appeals to Brutus's sense of Roman honour, his pride in the republic, and his sense of duty. He flatters Brutus, reminds him of his noble ancestry, and frames the assassination as a patriotic act. His language is measured, rhetorical, and persuasive — he builds a logical case rather than an emotional one.</p>

<p>The contrast reveals something important about Shakespeare's understanding of power and manipulation. There is more than one way to control another person: you can assault their emotions or you can seduce their intellect. Both methods are forms of manipulation, and both lead to catastrophe.</p>

<h3>Comparing Extracts: The Aftermath of Murder</h3>

<p>After Duncan's murder, Macbeth is devastated. He stares at his bloody hands and says he will never be clean again: "Will all great Neptune's ocean wash this blood / Clean from my hand?" His guilt is immediate, overwhelming, and physical — he hears voices, he cannot sleep, he is haunted by what he has done.</p>

<p>After Caesar's murder, Brutus is remarkably composed. He tells the conspirators to wash their hands in Caesar's blood as a symbol of liberation. He shows no personal guilt because he genuinely believes he has acted for the greater good. His calm is not sociopathy; it is the conviction of a man who believes he has made the right moral choice, even though it required violence.</p>

<p>This contrast illuminates Shakespeare's nuanced view of morality. Macbeth knows his actions are wrong and suffers for them. Brutus believes his actions are right and does not suffer — until the consequences prove otherwise. Shakespeare seems to suggest that certainty can be as dangerous as guilt: Brutus's confidence in his own righteousness blinds him to the chaos his actions unleash.</p>

<h3>Writing a Comparative Analysis of Shakespeare Extracts</h3>

<p>When comparing two Shakespeare extracts, use the same skills you developed in the poetry comparison modules:</p>
<ol>
  <li>Identify a clear point of comparison (e.g., how each character responds to guilt).</li>
  <li>Analyse the language in both extracts — word choices, imagery, rhetorical techniques.</li>
  <li>Use comparative connectives to link your analysis of the two extracts.</li>
  <li>Consider the dramatic context — what comes before and after each extract, and how it would be performed.</li>
  <li>Offer an evaluative judgement — which approach is more effective, and why?</li>
</ol>

<div class="examiner-tip"><strong>Study Tip:</strong> When comparing Shakespeare texts, remember that the same playwright wrote both. This means differences are deliberate artistic choices, not accidents. Ask yourself: why did Shakespeare choose a different approach for this character or this situation?</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the comparison as a competition where one play "wins." Both plays are masterpieces. The point of comparison is not to rank them but to deepen your understanding of how Shakespeare explores the same themes through different dramatic choices.</div>`,
    quiz: [
      { id: 'y8t2-m10-q1', question: 'What is the key difference between Macbeth\'s and Brutus\'s motivations for killing?', options: ['Macbeth is forced; Brutus chooses freely', 'Macbeth kills for personal ambition; Brutus kills from political idealism', 'Both are motivated by jealousy', 'Brutus kills for money; Macbeth kills for love'], correct: 1, explanation: 'Macbeth kills Duncan to gain power for himself — personal ambition. Brutus kills Caesar to prevent tyranny and protect the Roman republic — political idealism. This fundamental difference shapes everything that follows.' },
      { id: 'y8t2-m10-q2', question: 'How does Lady Macbeth\'s persuasion method differ from Cassius\'s?', options: ['Lady Macbeth uses logic; Cassius uses emotion', 'Lady Macbeth uses emotional violence; Cassius uses intellectual argument', 'Both use exactly the same method', 'Lady Macbeth uses bribery; Cassius uses threats'], correct: 1, explanation: 'Lady Macbeth attacks Macbeth\'s masculinity and uses shocking imagery — emotional manipulation. Cassius appeals to Brutus\'s honour, pride, and sense of duty — intellectual persuasion.' },
      { id: 'y8t2-m10-q3', question: 'How does Macbeth respond to Duncan\'s murder compared to Brutus after Caesar\'s?', options: ['Both are calm and collected', 'Macbeth is overwhelmed by guilt; Brutus remains composed, believing the act was justified', 'Macbeth celebrates; Brutus weeps', 'Both flee the scene immediately'], correct: 1, explanation: 'Macbeth is immediately tormented by guilt — he hears voices and cannot sleep. Brutus remains composed because he genuinely believes killing Caesar was morally right and necessary for Rome.' },
      { id: 'y8t2-m10-q4', question: 'What does Shakespeare suggest about moral certainty through Brutus\'s character?', options: ['That certainty is always correct', 'That certainty can be as dangerous as guilt because it blinds you to consequences', 'That guilt is unnecessary after killing', 'That all politicians are corrupt'], correct: 1, explanation: 'Shakespeare suggests that Brutus\'s confidence in his own righteousness blinds him to the chaos his actions unleash. Certainty can be as dangerous as guilt because it prevents self-examination.' },
      { id: 'y8t2-m10-q5', question: 'When comparing two Shakespeare plays, what important fact should you remember?', options: ['They were written by different people', 'One is always better than the other', 'The same playwright wrote both, so differences are deliberate artistic choices', 'You should only focus on the similarities'], correct: 2, explanation: 'Since Shakespeare wrote both plays, any differences in approach are deliberate artistic decisions, not accidents. This makes the comparison especially rich — you can ask why he chose to handle similar themes differently.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 11 — Subject Terminology in Practice
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m11',
    title: 'Subject Terminology in Practice – Using It Accurately',
    duration: '40 min',
    content: `
<h2>Beyond Feature-Spotting: Making Terminology Work for You</h2>

<p>Subject terminology — the technical vocabulary of English Literature — is essential for analytical writing. Terms like "metaphor," "enjambment," "soliloquy," and "volta" give you precise language to describe what a writer is doing. But knowing the terms is not enough. The real skill is using them <em>accurately</em>, <em>naturally</em>, and in the service of <em>analysis</em>. A student who correctly identifies three techniques but explains none of them will always score lower than a student who identifies one technique and analyses it brilliantly.</p>

<h3>The Problem with Feature-Spotting</h3>

<p>Feature-spotting is the most common weakness in student essays. It looks like this:</p>
<ul>
  <li>"The poet uses alliteration."</li>
  <li>"There is a metaphor in line 4."</li>
  <li>"Shakespeare uses dramatic irony."</li>
</ul>

<p>These statements are not wrong — they are just incomplete. They identify a feature but do not analyse it. They answer the question "What?" but not the questions "How?" and "Why?" An examiner reading these sentences learns nothing about your understanding. You have labelled; you have not analysed.</p>

<h3>The Analysis Formula</h3>

<p>Every time you use a piece of subject terminology, follow this formula:</p>

<p><strong>WHAT + WHERE + HOW + WHY</strong></p>

<ul>
  <li><strong>WHAT</strong> — name the technique.</li>
  <li><strong>WHERE</strong> — quote the example from the text.</li>
  <li><strong>HOW</strong> — explain how it works (the mechanics of the technique).</li>
  <li><strong>WHY</strong> — explain the effect on the reader or audience (the purpose of the technique).</li>
</ul>

<p>Compare these two responses:</p>

<p><strong>Feature-spot (weak):</strong> "The poet uses sibilance in line 6."</p>

<p><strong>Analysis (strong):</strong> "The sibilance in 'silent soldiers slipped through shadows' creates a hushed, secretive atmosphere through the repeated 's' sounds, which mimic the whispering quiet of men moving undetected. This reinforces the idea that the soldiers are vulnerable — not heroic warriors charging into battle, but frightened men trying to survive by remaining invisible."</p>

<p>The first sentence earns almost no marks. The second earns full marks because it names the technique, quotes it, explains how the sound works, and connects it to the poem's meaning.</p>

<h3>Key Terminology for This Unit</h3>

<p>Here is a reference list of the most important terms you will need for the conflict poetry and Shakespeare units. For each one, make sure you can define it, identify it, and — most importantly — explain its effect.</p>

<h4>Poetry Terminology</h4>
<table>
  <tr><th>Term</th><th>Definition</th><th>Example of use in analysis</th></tr>
  <tr><td>Simile</td><td>Comparison using "like" or "as"</td><td>"The simile comparing soldiers to 'old beggars' strips away heroism, presenting them as broken and pathetic."</td></tr>
  <tr><td>Metaphor</td><td>Stating one thing IS another</td><td>"The battlefield is metaphorically described as a 'mouth,' suggesting it actively consumes human life."</td></tr>
  <tr><td>Personification</td><td>Giving human traits to non-human things</td><td>"Death is personified as a patient figure 'waiting at the gate,' making it feel inevitable and inescapable."</td></tr>
  <tr><td>Enjambment</td><td>Sentence runs over a line break</td><td>"The enjambment mirrors the unstoppable momentum of the charge, pulling the reader forward breathlessly."</td></tr>
  <tr><td>Caesura</td><td>Pause mid-line</td><td>"The caesura after 'he fell' creates a brutal, sudden stop — mirroring the abruptness of death."</td></tr>
  <tr><td>Volta</td><td>Turning point in tone or argument</td><td>"The volta in line 9 shifts the tone from patriotic pride to bitter disillusionment."</td></tr>
  <tr><td>Sibilance</td><td>Repetition of 's' sounds</td><td>"The sibilance creates a sinister, whispering quality that suggests hidden danger."</td></tr>
  <tr><td>Plosive</td><td>Hard 'b,' 'd,' 'p,' 't,' 'k' sounds</td><td>"The plosive sounds in 'blood and bone broke' create a violent, percussive rhythm that echoes the impact of combat."</td></tr>
</table>

<h4>Drama Terminology</h4>
<table>
  <tr><th>Term</th><th>Definition</th><th>Example of use in analysis</th></tr>
  <tr><td>Soliloquy</td><td>Character speaks thoughts alone on stage</td><td>"Macbeth's soliloquy reveals the private guilt he conceals from other characters."</td></tr>
  <tr><td>Dramatic irony</td><td>Audience knows more than characters</td><td>"The dramatic irony heightens tension: the audience knows Macbeth is a murderer while Duncan praises his loyalty."</td></tr>
  <tr><td>Aside</td><td>Brief comment to audience, unheard by others</td><td>"The aside reveals Macbeth's true reaction, creating a gap between his public composure and private horror."</td></tr>
  <tr><td>Iambic pentameter</td><td>10-syllable line: da-DUM x5</td><td>"The breakdown of iambic pentameter signals Macbeth's loss of psychological control."</td></tr>
  <tr><td>Hamartia</td><td>Fatal flaw leading to downfall</td><td>"Macbeth's hamartia — his vaulting ambition — drives every act of violence in the play."</td></tr>
</table>

<div class="key-term"><strong>Key Term: Subject terminology</strong> — The technical vocabulary of a subject. In English Literature, this includes terms for literary techniques (simile, metaphor), structural features (stanza, enjambment), and dramatic conventions (soliloquy, aside). Using terminology accurately demonstrates knowledge and enables precise analysis.</div>

<div class="examiner-tip"><strong>Study Tip:</strong> Create flashcards with the term on one side and three things on the other: (1) the definition, (2) an example from a poem or play you have studied, and (3) a sentence showing how you would use it in an essay. The third item is the most important — it trains you to deploy the term analytically, not just define it.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using terminology you do not fully understand. If you are not sure what a term means, it is better to describe the effect in plain English than to use a technical term incorrectly. An accurate description always beats an inaccurate label.</div>`,
    quiz: [
      { id: 'y8t2-m11-q1', question: 'What is "feature-spotting" and why is it a problem?', options: ['Identifying techniques without analysing their effect — it earns few marks', 'Using too many quotations in an essay', 'Writing about the wrong poem', 'Spending too long on planning'], correct: 0, explanation: 'Feature-spotting means identifying a technique ("the poet uses a metaphor") without explaining how it works or why the poet chose it. It demonstrates recognition but not understanding, which earns minimal marks.' },
      { id: 'y8t2-m11-q2', question: 'What does the analysis formula WHAT + WHERE + HOW + WHY require you to do?', options: ['Name the technique, quote it, explain how it works, and explain its effect', 'Write the title, date, poet, and stanza number', 'List four different techniques in each paragraph', 'Write four paragraphs about the same point'], correct: 0, explanation: 'The formula requires you to name the technique (WHAT), quote an example (WHERE), explain the mechanics (HOW), and explain the effect on the reader/audience (WHY). This produces full, analytical writing.' },
      { id: 'y8t2-m11-q3', question: 'What effect do plosive sounds typically create in poetry?', options: ['A gentle, flowing rhythm', 'A violent, percussive, forceful effect', 'A whispering, secretive atmosphere', 'A regular, musical pattern'], correct: 1, explanation: 'Plosive consonants (b, d, p, t, k) create hard, explosive sounds. In conflict poetry, they often mimic the violence and impact of combat, creating a forceful, aggressive rhythm.' },
      { id: 'y8t2-m11-q4', question: 'What should you do if you are unsure what a technical term means?', options: ['Use it anyway and hope for the best', 'Describe the effect in plain English instead', 'Skip the point entirely', 'Make up a definition'], correct: 1, explanation: 'An accurate description in plain English always scores more than an incorrectly used technical term. Examiners reward understanding, not vocabulary for its own sake.' },
      { id: 'y8t2-m11-q5', question: 'What does it mean when iambic pentameter breaks down in a Shakespeare play?', options: ['The printer made an error', 'It signals the character\'s loss of emotional or psychological control', 'The scene is meant to be funny', 'The character is speaking to a servant'], correct: 1, explanation: 'Iambic pentameter represents order and control. When the rhythm breaks down, it signals that the character\'s mental or emotional state is fracturing — a deliberate choice by Shakespeare to mirror inner turmoil.' },
    ],
  },

  // ──────────────────────────────────────────────
  // MODULE 12 — Assessment: Poetry Comparison and Shakespeare Extract
  // ──────────────────────────────────────────────
  {
    id: 'y8t2-m12',
    title: 'Assessment: Poetry Comparison and Shakespeare Extract',
    duration: '55 min',
    content: `
<h2>Bringing It All Together</h2>

<p>This final module is your assessment preparation. Over the past eleven modules, you have built a comprehensive toolkit for analysing conflict poetry and Shakespeare's drama. You have learned how to read imagery, identify tone and mood, analyse structure, compare poems, write comparative essays, navigate Shakespeare's language, explore power and ambition in <em>Macbeth</em>, understand stagecraft, compare Shakespeare extracts, and use subject terminology with precision. Now it is time to apply all of those skills in a formal assessment context.</p>

<h3>Assessment Overview</h3>

<p>Your assessment consists of two tasks:</p>

<table>
  <tr><th>Task</th><th>Focus</th><th>Skills tested</th><th>Suggested time</th></tr>
  <tr><td>Task 1: Poetry Comparison</td><td>Compare two conflict poems</td><td>Imagery analysis, tone, structure, comparative writing</td><td>30 minutes</td></tr>
  <tr><td>Task 2: Shakespeare Extract</td><td>Analyse an extract from <em>Macbeth</em></td><td>Language analysis, dramatic context, stagecraft, subject terminology</td><td>25 minutes</td></tr>
</table>

<h3>Task 1: Poetry Comparison — How to Succeed</h3>

<p>You will be given two conflict poems and asked to compare how the poets present a particular theme or idea. Here is your step-by-step approach:</p>

<ol>
  <li><strong>Read both poems twice.</strong> First for understanding, second for annotation. Mark up key imagery, structural features, and shifts in tone.</li>
  <li><strong>Identify three points of comparison.</strong> Use the four categories: theme, language, structure, tone/mood. Choose points where you can say something substantial about both poems.</li>
  <li><strong>Plan briefly.</strong> Spend 3-4 minutes jotting down your points, key quotations, and comparative links. A plan saves time because it prevents you from losing direction mid-essay.</li>
  <li><strong>Write a focused introduction.</strong> Name both poems, identify the shared theme, state your thesis. Keep it to 3-5 sentences.</li>
  <li><strong>Write three comparative paragraphs.</strong> Use the five-part structure from Module 6: topic sentence, Poem A analysis, comparative connective, Poem B analysis, evaluative comment.</li>
  <li><strong>Write a short conclusion.</strong> Summarise your key findings and offer a final judgement about which poet's approach is more effective or more memorable, and why.</li>
</ol>

<h3>Common Assessment Errors — Poetry Comparison</h3>

<ul>
  <li><strong>Writing about poems separately</strong> — every paragraph must discuss both poems.</li>
  <li><strong>Retelling the poem</strong> — do not narrate what happens. Analyse how and why the poet creates meaning.</li>
  <li><strong>Ignoring structure</strong> — at least one of your points should address structural choices (form, stanza, enjambment, caesura).</li>
  <li><strong>No evaluative comments</strong> — do not just describe similarities and differences. Explain why they matter and which approach you find more effective.</li>
  <li><strong>Unbalanced coverage</strong> — give roughly equal attention to both poems.</li>
</ul>

<h3>Task 2: Shakespeare Extract — How to Succeed</h3>

<p>You will be given a short extract from <em>Macbeth</em> and asked how Shakespeare presents a particular theme or character. Here is your approach:</p>

<ol>
  <li><strong>Read the extract carefully.</strong> Identify who is speaking, what is happening, and where in the play this extract falls.</li>
  <li><strong>Annotate for language.</strong> Mark powerful word choices, imagery, rhetorical devices, and any shifts in tone.</li>
  <li><strong>Consider the dramatic context.</strong> What has just happened? What is about to happen? How does the audience respond to this moment?</li>
  <li><strong>Think about performance.</strong> How would this extract be performed? What would the actor do? What would the audience see and feel?</li>
  <li><strong>Write 2-3 detailed analytical paragraphs.</strong> Each paragraph should focus on a different aspect of the extract (e.g., imagery, dramatic irony, character development).</li>
  <li><strong>Use subject terminology accurately.</strong> Follow the WHAT + WHERE + HOW + WHY formula every time.</li>
</ol>

<h3>Common Assessment Errors — Shakespeare Extract</h3>

<ul>
  <li><strong>Saying "the reader"</strong> — use "the audience." <em>Macbeth</em> is a play.</li>
  <li><strong>Ignoring context</strong> — the extract does not exist in isolation. Show you know where it fits in the play.</li>
  <li><strong>Paraphrasing instead of analysing</strong> — do not translate Shakespeare into modern English and stop there. Explain the <em>effect</em> of his language choices.</li>
  <li><strong>Forgetting stagecraft</strong> — consider how the extract would look and sound in performance. Discuss soliloquy, aside, proxemics, or dramatic tension where relevant.</li>
  <li><strong>Feature-spotting</strong> — always move beyond identification to analysis. Name it, quote it, explain how it works, explain why it matters.</li>
</ul>

<h3>Self-Assessment Checklist</h3>

<p>After completing each task, check your work against this checklist:</p>

<h4>Poetry Comparison Checklist</h4>
<ul>
  <li>Have I named both poems and poets in my introduction?</li>
  <li>Does my thesis make an arguable claim, not just a description?</li>
  <li>Does every paragraph discuss both poems?</li>
  <li>Have I used at least three different comparative connectives?</li>
  <li>Have I included quotations from both poems in every paragraph?</li>
  <li>Have I analysed language AND structure?</li>
  <li>Have I included evaluative comments about which approach is more effective?</li>
  <li>Have I used subject terminology accurately and analytically?</li>
</ul>

<h4>Shakespeare Extract Checklist</h4>
<ul>
  <li>Have I identified the dramatic context of the extract?</li>
  <li>Have I used quotations from the extract to support my points?</li>
  <li>Have I analysed Shakespeare's word choices, not just paraphrased them?</li>
  <li>Have I considered how the extract would be performed?</li>
  <li>Have I referred to the "audience" rather than the "reader"?</li>
  <li>Have I used subject terminology accurately (WHAT + WHERE + HOW + WHY)?</li>
  <li>Have I linked the extract to the wider themes of the play?</li>
</ul>

<div class="examiner-tip"><strong>Study Tip:</strong> Use the checklists above as a revision tool. Before the assessment, practise writing a timed response and then grade yourself against the checklist. Identify your weakest area and focus your remaining revision time on improving it.</div>

<h3>Final Reflection</h3>

<p>Over this term, you have developed skills that will serve you well beyond Year 8. The ability to analyse language closely, to compare texts thoughtfully, to write with precision, and to engage with complex literature — these are skills that matter at GCSE, at A Level, and beyond. Conflict poetry teaches empathy: the ability to imagine experiences far removed from your own. Shakespeare teaches the power of language to illuminate the darkest corners of human nature. Carry these skills forward with confidence.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Rushing through the assessment without planning. Five minutes of planning saves fifteen minutes of unfocused writing. Always plan before you write.</div>`,
    quiz: [
      { id: 'y8t2-m12-q1', question: 'How should you spend the first 3-4 minutes of a poetry comparison assessment?', options: ['Writing your introduction immediately', 'Planning — identifying points of comparison, key quotations, and comparative links', 'Reading the poems once quickly', 'Writing your conclusion first'], correct: 1, explanation: 'Spending 3-4 minutes planning prevents you from losing direction mid-essay. Identify your points of comparison, note key quotations, and plan your comparative links before writing.' },
      { id: 'y8t2-m12-q2', question: 'What must every body paragraph in a poetry comparison contain?', options: ['Three quotations from the same poem', 'References to and analysis of both poems', 'A biographical fact about each poet', 'A definition of a literary term'], correct: 1, explanation: 'Every body paragraph must discuss both poems with analysis and quotations from each. Writing about one poem at a time is not genuine comparison.' },
      { id: 'y8t2-m12-q3', question: 'When analysing a Shakespeare extract, what should you consider beyond the language?', options: ['The font size of the text', 'How the extract would be performed on stage — stagecraft, acting, audience response', 'How many lines the extract contains', 'The other plays Shakespeare wrote that year'], correct: 1, explanation: 'You should consider how the extract would look and sound in performance: the actor\'s delivery, movement, proxemics, lighting, and the audience\'s response. This shows you understand Macbeth as theatre.' },
      { id: 'y8t2-m12-q4', question: 'What is the difference between paraphrasing and analysing Shakespeare?', options: ['There is no difference', 'Paraphrasing translates the meaning; analysis explains the effect of the language choices', 'Analysis is shorter than paraphrasing', 'Paraphrasing is more accurate'], correct: 1, explanation: 'Paraphrasing merely translates Shakespeare into modern English. Analysis goes further — it explains WHY Shakespeare chose those specific words, images, and structures, and what effect they have on the audience.' },
      { id: 'y8t2-m12-q5', question: 'According to the self-assessment checklist, what should your thesis statement do?', options: ['Summarise both poems in detail', 'Make an arguable claim, not just a description', 'List all the techniques you will discuss', 'Quote the first line of each poem'], correct: 1, explanation: 'A thesis must make an arguable claim — a specific point about how or why the poems approach the same theme differently. "Both poems are about war" is a description; a thesis argues something about that shared subject.' },
    ],
  },
];
