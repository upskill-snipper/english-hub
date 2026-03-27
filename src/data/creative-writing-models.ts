// @ts-nocheck
export interface WritingModel {
  id: string;
  title: string;
  type: 'narrative' | 'descriptive' | 'speech' | 'article' | 'letter' | 'review' | 'essay';
  board: string;
  grade: string;
  prompt: string;
  modelText: string;
  annotations: {
    startIndex: number;
    endIndex: number;
    technique: string;
    effect: string;
  }[];
  teacherNotes: string;
  studentCheckpoints: string[];
}

export const writingModels: WritingModel[] = [
  {
    id: 'gr9-narrative-urban-1',
    title: 'Urban Encounter: The Corner Store',
    type: 'narrative',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a narrative set in an urban environment where a chance encounter changes a character\'s perspective.',
    modelText: `The neon sign flickered erratically above Marco's Deli, casting amber shadows across the wet pavement. It was two in the morning, and I'd taken the shortcut through the alley again—the one my mother warned me about every single time I visited the city. My hands were jammed deep in my jacket pockets, shoulders hunched against the cold March wind that cut through the narrow street like a knife.

That's when I saw him. An old man sat on the curb beside a shopping cart overflowing with plastic bags, newspapers, and objects I couldn't quite identify. His coat was patched in at least a dozen places, and his shoes—if you could call them that—were held together with what looked like duct tape and sheer determination. Our eyes met for just a second, and I felt that familiar prickle of discomfort creep up my spine. I quickened my pace.

"Spare change?" His voice cracked like old leather, and I almost didn't hear it over the hum of the refrigeration unit from the deli.

I should have kept walking. That's what I'd been taught. That's what everyone did. But something in that moment—maybe it was exhaustion from the late night, or maybe it was something else entirely—made me stop. I turned back slowly.

He wasn't looking at me anymore. He was staring at a photograph in his weathered hands, his face illuminated by the deli's glow. Without thinking, I approached him. Up close, I could see the photograph more clearly: a young woman in a wedding dress, beaming, her arm linked through his.

"That's beautiful," I said. The words felt inadequate, but they were all I had.

His eyes glistened. "Forty-two years," he whispered. "She passed three months ago. I come here sometimes. This was our street. We used to walk here every evening after dinner."

I spent the next hour sitting with him on that cold curb, listening to stories about Margaret, about their life together, about the small apartment three blocks over where they'd raised two children. He told me about his daughter, who had her own problems and hadn't spoken to him in years. He told me about the pride that had kept him from asking for help when his pension ran out.

When I finally left, I didn't give him money. I gave him my phone number. By the next morning, I'd called the shelter downtown. By next week, his daughter was flying in from Sacramento. I never saw him on that corner again, but I see him differently in my mind now—not a problem to avoid, but a person whose story had been invisible to everyone who passed him by.

The city didn't change that night. The alley remained the same narrow passage it had always been. But I did.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 143,
        technique: 'Vivid sensory imagery with specific details',
        effect: 'Immediately immerses the reader in the urban setting and creates atmosphere of isolation and cold',
      },
      {
        startIndex: 312,
        endIndex: 395,
        technique: 'Internal characterization through physical actions',
        effect: 'Shows the narrator\'s initial prejudice and discomfort without stating it directly',
      },
      {
        startIndex: 683,
        endIndex: 750,
        technique: 'Dialogue that reveals character background',
        effect: 'The old man\'s cracked voice and specific request humanize him and create sympathy',
      },
      {
        startIndex: 1150,
        endIndex: 1250,
        technique: 'Turning point through a small moment of connection',
        effect: 'The photograph serves as a catalyst that shifts the narrator\'s entire perspective',
      },
      {
        startIndex: 1800,
        endIndex: 1950,
        technique: 'Storytelling within storytelling (embedded narrative)',
        effect: 'Personal details about Margaret build emotional depth and explain the man\'s situation',
      },
      {
        startIndex: 2100,
        endIndex: 2250,
        technique: 'Resolution that shows internal change rather than external problem-solving',
        effect: 'The narrator\'s actions demonstrate genuine transformation, not pity or obligation',
      },
    ],
    teacherNotes: 'This model demonstrates masterful use of setting as more than backdrop—the urban environment becomes a character itself. Notice how the writer uses the specific details of the deli sign, the alley, and the street to ground us in place. The turning point is subtle: not a dramatic revelation, but a moment of genuine connection through a photograph. The dialogue is natural and reveals character through what is said and how it\'s said. Most importantly, the narrative shows rather than tells the emotional journey. The final paragraph is particularly effective because it doesn\'t claim the narrator is a better person, but rather shows how perception has shifted. This avoids melodrama while maintaining genuine emotional impact.',
    studentCheckpoints: [
      'Does your opening immediately establish setting and mood through sensory details?',
      'Is your turning point a moment of genuine human connection rather than dramatic coincidence?',
      'Do your characters reveal themselves through dialogue and actions rather than author explanation?',
      'Does your ending show change in perspective rather than resolved problems?',
      'Have you used specific, concrete details rather than general statements?',
    ],
  },
  {
    id: 'gr9-narrative-rural-2',
    title: 'The Last Harvest',
    type: 'narrative',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a narrative set in a rural environment where a character faces a difficult decision.',
    modelText: `The field stretched toward the horizon in waves of golden wheat, the same field my grandfather had worked for sixty years before passing it to my father, who had worked it for thirty-five years before passing it to me. Now it was mine, and I was thirty-two years old, standing at the edge of August with a decision that felt heavier than the August heat itself.

The letter from the developer was still in my shirt pocket, worn soft from reading it obsessively over the past month. They were offering three million dollars for the two hundred acres. Three million dollars. Do you know what that meant? It meant my daughter could go to any university she wanted. It meant no more pre-dawn risings in the brutal cold of November and December. It meant my wife could see a doctor more than once a year.

But it also meant this would be over.

I walked the fence line that afternoon, my boots crushing the dry grass. The barn where my father taught me to fix an engine was still standing, though the roof had developed a lean that worried me. The irrigation system had cost forty thousand dollars to repair three years ago, and I knew better ones were already aging. The equipment was worth maybe a quarter of what it had been when I inherited it.

My father had always said, "The land is in your blood, boy. You'll know when you need to know." I'd never asked him what you do when that knowledge feels like a betrayal.

At four o'clock, my daughter found me sitting by the old well. Emma was seventeen now, lanky and bright, with my wife's eyes and my stubbornness. She sat down beside me without asking why I was sitting in the sun at four o'clock on a Thursday.

"Mom told me about the offer," she said simply.

I didn't respond. I was watching a red-tailed hawk circle over the eastern field.

"Dad, I don't want to go to California State," she said quietly. "I already made my decision. I'm going to the agricultural college in Oregon. I'm going to come back here and help you run this place."

I turned to look at her, and she was staring out at the same field, her jaw set in that determined way that meant the conversation was over from her perspective.

"You shouldn't base your life on this," I told her, but even as the words left my mouth, I knew they weren't true. She should base her life on what called to her, and apparently, this land called to her the way it had called to my father, and to me.

I burned the letter that evening. I didn't tell my wife. I simply burned it in the fireplace and watched it curl and blacken and turn to ash. The next morning, I called the bank and took out a loan to repair the roof. I renegotiated the water rights. I researched new crops that the drought-stressed soil might support.

My life didn't get easier. My wife had to continue rationing doctor visits, and my body ached in new ways every season. But there was something else too—a quiet certainty that my daughter and I had made the only choice that meant anything at all. The field would continue. That felt like something worth the sacrifice, and I was surprised to find that I meant it.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 125,
        technique: 'Establishing context through family legacy',
        effect: 'Immediately shows the weight and history behind the decision',
      },
      {
        startIndex: 270,
        endIndex: 380,
        technique: 'Contrasting material benefit with emotional cost',
        effect: 'Demonstrates the genuine struggle—this isn\'t simple; three million is real money',
      },
      {
        startIndex: 550,
        endIndex: 650,
        technique: 'Physical journey reflecting internal conflict',
        effect: 'Walking the fence line makes the internal struggle concrete and visible',
      },
      {
        startIndex: 900,
        endIndex: 1000,
        technique: 'Dialogue that carries the turning point',
        effect: 'The daughter\'s announcement shifts the entire perspective without the father forcing it',
      },
      {
        startIndex: 1400,
        endIndex: 1550,
        technique: 'Symbolic action (burning the letter)',
        effect: 'The burning represents a decision without dialogue or explanation, showing not telling',
      },
      {
        startIndex: 1700,
        endIndex: 1800,
        technique: 'Acknowledging that the choice comes with ongoing costs',
        effect: 'Realistic conclusion—life doesn\'t become easy, but the choice gains meaning',
      },
    ],
    teacherNotes: 'This narrative excels at presenting a genuine moral dilemma without easy answers. The writer doesn\'t shy away from showing how much money means (doctor visits, equipment repairs) and thus makes the decision to refuse it feel earned rather than preachy. Notice how the turning point comes not from the father\'s reflection, but from his daughter\'s quiet certainty. This is more powerful than if he had convinced himself. The rural setting is woven in naturally through details like the barn roof, irrigation systems, and water rights—details that matter to the plot, not decoration. The final lines are especially effective because they don\'t claim the decision was right, only that it was meaningful.',
    studentCheckpoints: [
      'Have you made your character\'s choice genuinely difficult by showing real costs?',
      'Does the turning point come from another character or external event rather than self-reflection?',
      'Are your setting details integral to the plot, not just atmospheric?',
      'Do you acknowledge that major choices come with lasting consequences?',
      'Is your ending ambiguous enough to feel true to life?',
    ],
  },
  {
    id: 'gr9-narrative-historical-3',
    title: 'The Suffragette\'s Diary',
    type: 'narrative',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a narrative set during a historical period of social change from a first-person perspective.',
    modelText: `March 15th, 1913

My knuckles are still raw from where the constable twisted my wrists during arrest. Margaret says the swelling will fade within a week, but the knowledge that they felt entitled to hurt us—that they believed we deserved it—this won't fade so easily.

We were marching down Regent Street with our banners: "Votes for Women" and "No Justice Without Representation." I was terrified, truth be told. I've been terrified every time we've marched, but the fear has become background noise now, like the constant hum of factory machinery that fills the East End. What terrifies me more than the police is the thought of never marching at all.

This morning, before I left for what I knew might be arrest, I looked at my daughter's face while she slept. She's six. I haven't told her yet that her mother is considered criminal for wanting the same rights as her schoolmaster, her grocer, his boy who hasn't yet finished his schooling. How does one explain that to a child?

But I will explain it. When she's old enough to understand, I'll tell her that some things matter more than safety.

We lost count of how many of us there were. Hundreds, perhaps a thousand. Our voices echoed off the stone buildings. Some men threw eggs. One woman next to me took a rotten tomato full in the face, and she wiped it away without missing a word of our chant. That's what struck me most—not the anger of the crowd, but our absolute steadfastness. We knew what we wanted. We knew we were right. And we kept marching.

The cell was bitterly cold. Three of us were crammed into a space meant for one. There was a bucket in the corner and nothing else. Mrs. Chen, who works as a seamstress, recited poetry the entire night to keep our spirits up. Do you know what poetry sustains a woman in prison? Not gentle verse, but fierce words about freedom and courage.

I was released this morning. My employer has already written: my position as a clerk is terminated, effective immediately. "We cannot employ those who bring disrepute to our establishment," the letter stated, as though wanting to vote has somehow made me disreputable.

I don't regret it. Not a moment of it, though I fear what comes next. I have a daughter to feed. I have bills to pay. But we will keep marching. We will keep marching until they have to listen. They can't arrest all of us. There simply aren't enough cells.

Margaret has already arranged another march for next month. I'll be there. Whatever comes after, I'll be there.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 80,
        technique: 'Opening with physical evidence of conflict',
        effect: 'Immediately grounds us in consequence; abstract politics becomes personal pain',
      },
      {
        startIndex: 180,
        endIndex: 280,
        technique: 'Second-order conflict (internal fear vs. external danger)',
        effect: 'Shows that the character\'s courage isn\'t the absence of fear, but action despite it',
      },
      {
        startIndex: 450,
        endIndex: 550,
        technique: 'Personal stakes through loved ones',
        effect: 'Daughter\'s sleeping face raises the moral stakes and makes choice more complex',
      },
      {
        startIndex: 700,
        endIndex: 850,
        technique: 'Specific sensory details of the march',
        effect: 'The rotten tomato, the stone buildings, the voices—these concrete moments make history alive',
      },
      {
        startIndex: 1050,
        endIndex: 1150,
        technique: 'Focusing on small human moments in large conflict',
        effect: 'Mrs. Chen\'s poetry in prison becomes more powerful than grand declarations',
      },
      {
        startIndex: 1300,
        endIndex: 1400,
        technique: 'Aftermath that shows real consequences',
        effect: 'Job loss is mundane compared to prison, but its impact is immediate and practical',
      },
    ],
    teacherNotes: 'This narrative uses the diary format to create intimacy while covering significant historical events. Notice how the writer doesn\'t explain the suffrage movement—she assumes reader knowledge and instead focuses on one woman\'s personal experience within it. The most effective moment is probably Mrs. Chen\'s poetry, which shows solidarity and resilience through a small detail rather than grand statement. The ending is particularly strong because it acknowledges the real costs (job loss, fear about feeding her daughter) without letting those costs derail the character\'s commitment. This is far more powerful than a character who is unaffected by consequences. The raw knuckles in the first line and the rotten tomato in the middle show that this narrative is grounded in physical reality, not abstraction.',
    studentCheckpoints: [
      'Does your historical setting feel specific rather than generic?',
      'Do you show personal motivations alongside the larger historical event?',
      'Are there concrete details that ground the reader in the specific time?',
      'Do you acknowledge the real costs of your character\'s choices?',
      'Is the voice authentic to the character and era without being cliché?',
    ],
  },
  {
    id: 'gr9-narrative-fantasy-4',
    title: 'The Cartographer\'s Daughter',
    type: 'narrative',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a fantasy narrative where the protagonist discovers an unexpected truth about a familiar world.',
    modelText: `My father had spent forty years mapping the Shattered Kingdoms, his ink-stained fingers moving across vellum as he documented every mountain pass, every river that changed course with the seasons, every village that appeared and disappeared like smoke. I'd grown up watching him work, watching him pour his life into accuracy and detail. Maps were his religion, and accuracy was his god.

Until I found the one map he'd hidden.

I was seventeen when I discovered it, rolled beneath the floorboards in his study, wrapped in oilcloth so carefully preserved that I knew immediately it was important. My name was written on the outer wrapping in his handwriting: "For Eira. When you understand."

The map showed our world—the Shattered Kingdoms I'd known my entire life—but overlaid with another world entirely, one that occupied the same space. Mountains here matched mountains there, rivers curved identically, but the cities were different, the borders redrawn, the names all wrong. In this other world, the Sunken City of Aldris was not sunken. The Shadowlands were green. The Eastern Kingdoms, which had been at war for three centuries, were unified.

There was a note beneath the map, my father's careful script documenting what I'd always suspected but never admitted: "The two worlds are bleeding into each other. Have been for a generation. This is not disaster. This is evolution."

I ran to his study, where he sat with a cup of tea that had gone cold hours ago, staring at nothing.

"The maps are different," he said before I could speak, as though he'd been waiting for me to figure it out. "Every time I update them. Coastlines shift. Forests grow where deserts were. Villages are named in languages that didn't exist five years ago. I thought I was going mad. I thought my eyes were failing. So I started to compare. The maps don't change. Reality does."

My hands were shaking. "The magistrate says the Sunken City has always been sunken. The histories say it."

"The histories are written by the people of this world," my father said quietly. "But sometimes, people from the other world remember something else. A woman comes into the Archives claiming her grandmother was from a place that doesn't exist anymore. A scholar finds a text in a language that went extinct years ago, but the binding is new. The boundaries are thin. They're getting thinner."

"What does it mean?" I whispered.

He looked at me, and his eyes held something like grief and something like hope. "It means we're becoming something new. It means the world your children know will be different from the world I grew up in. And I think... I think that's not something to be afraid of."

The next morning, my father took every map he'd ever made and burned them. He didn't explain. He simply walked into the courtyard with his life's work and set it to flame. The Archives would store the official versions, he said. But the real maps—the ones that tell the truth of what's actually happening—those belong to us now. Those we keep. Those we update. Those we pass down.

I understand now that he gave me the hidden map not because he was afraid I'd steal it, but because I would eventually be the one to update it. The world changes. Maps should change with it. That's not infidelity to accuracy. That's what accuracy means.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 150,
        technique: 'Establishing world through character relationship',
        effect: 'We learn about the setting through what matters to the father, making it personal',
      },
      {
        startIndex: 250,
        endIndex: 350,
        technique: 'Physical object as revelation of truth',
        effect: 'The hidden map serves as both plot device and symbol of the larger discovery',
      },
      {
        startIndex: 650,
        endIndex: 800,
        technique: 'Dialogue that gradually reveals the truth',
        effect: 'The father explains what\'s happening through conversation, not exposition dump',
      },
      {
        startIndex: 1000,
        endIndex: 1200,
        technique: 'Examples of the impossible becoming normal',
        effect: 'Specific details like the woman in the Archives ground the fantasy in everyday moments',
      },
      {
        startIndex: 1400,
        endIndex: 1500,
        technique: 'Symbolic action with profound significance',
        effect: 'Burning the maps represents acceptance of change and letting go of rigid truth',
      },
      {
        startIndex: 1700,
        endIndex: 1800,
        technique: 'Resolution that reframes the central question',
        effect: 'The ending redefines accuracy itself, suggesting truth is more complex than static recording',
      },
    ],
    teacherNotes: 'This fantasy narrative uses the concept of maps as a metaphor for how we understand reality, making it work on both literal and symbolic levels. The world-building is economical—we learn what we need through the discovery rather than through exposition. Notice how the writer doesn\'t explain the fantasy mechanism in scientific detail; instead, she shows examples (the woman claiming to remember a different place, the text in an extinct language) that feel mysterious and real. The relationship between father and daughter is central, with the burning of the maps serving as the moment where she truly understands his perspective. The ending avoids neat resolution; instead, it suggests ongoing change and adaptation, which feels more honest to the premise. This balance between concrete detail and larger philosophical questions gives the narrative depth.',
    studentCheckpoints: [
      'Is your fantasy element woven throughout or dumped all at once?',
      'Does the protagonist learn something that changes how they see the world?',
      'Are your examples specific enough to ground the reader?',
      'Do you explore the emotional impact of your world-building, not just the mechanics?',
      'Does your ending suggest ongoing change rather than neat resolution?',
    ],
  },
  {
    id: 'gr9-descriptive-storm-5',
    title: 'The Storm Arrives',
    type: 'descriptive',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a descriptive piece that captures the approach and intensity of a storm.',
    modelText: `The birds left first. For hours before the storm arrived, there had been this strange absence of birdsong—no sparrows in the eaves, no crows in the field beyond, no gulls even in the distance. The silence was so complete it had a presence of its own, a weight that pressed down on the afternoon like a hand on your chest.

Then came the light. The sky didn't darken gradually; instead, it shifted to a sickly greenish-gray that made the white buildings look corpse-like. The sun was still there, somewhere behind those churning clouds, but it cast everything in a lurid glow that belonged to another planet. Trees looked different in this light—almost alien, their leaves turned the wrong way, showing the pale undersides. The grass took on a phosphorescent quality, as though it glowed from within.

The wind arrived in waves, not gradually but in sudden gusts that seemed to arrive from different directions simultaneously. First it was warm, carrying the smell of distant rain and something metallic, something electric. Then it turned cold, and with that cold came the first drops—not rain yet, but the precursor, fat globules that hit with surprising force. They didn't fall; they arrived horizontally, driven by wind that had begun to sound almost animal, almost sentient.

The temperature plummeted. What had been a humid seventy degrees became forty in the space of minutes, and I could see my breath, which seemed impossible in July. Lightning fractured across the sky in branching patterns that reminded me of blood vessels, of the delicate networks that hold life together. The thunder came almost simultaneously—not a sound but a physical force that I felt in my sternum, in my teeth, in the roots of my hair. The ground trembled. The house trembled. The very air seemed to vibrate at a frequency that made your skin prickle.

And then the rain came. Not gradually, but all at once, as though a dam had broken overhead. The rain was torrential, so thick that I couldn't see the fence line thirty feet away. The drops were large and cold and seemed almost solid, drumming against the windows with machine-gun intensity. Water began to stream down the glass in rivers. The gutters sang with the overflow.

The world had compressed into this moment, into this small house surrounded by water and wind and noise. There was no sense of time passing normally. An hour could have been minutes or days. All I was aware of was the sound—the roar of it, the relentlessness of it, the sense that this storm was a living thing with its own intentions.

Eventually, the intensity began to fade. The rain settled into a hard, steady downpour rather than a deluge. The wind became directional again rather than chaotic. The lightning moved farther away, the thunder slightly delayed. But for those minutes when the storm had been at its height, it had seemed capable of anything—of tearing down the roof, of flooding the whole world, of fundamentally changing everything it touched.

And as I watched the water stream down the windows, I realized that's what storms do. They don't just pass through. They alter everything they touch.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 100,
        technique: 'Opening with absence as presence',
        effect: 'The silence created by missing birds establishes unease without explicit statement',
      },
      {
        startIndex: 150,
        endIndex: 300,
        technique: 'Color and light as primary descriptive tool',
        effect: 'The greenish-gray light and phosphorescent grass create a surreal, ominous atmosphere',
      },
      {
        startIndex: 450,
        endIndex: 600,
        technique: 'Sensory progression through temperature, smell, and touch',
        effect: 'Moving through multiple senses creates immersion; the metallic smell foreshadows electricity',
      },
      {
        startIndex: 750,
        endIndex: 900,
        technique: 'Metaphor comparing lightning to biological systems',
        effect: 'This comparison makes natural violence feel both beautiful and vulnerable',
      },
      {
        startIndex: 1000,
        endIndex: 1150,
        technique: 'Sound as primary narrative element',
        effect: 'Machine-gun intensity, roar, relentlessness make the storm feel active and aggressive',
      },
      {
        startIndex: 1400,
        endIndex: 1500,
        technique: 'Philosophical reflection emerging from description',
        effect: 'The final observation gives the description meaning beyond mere observation',
      },
    ],
    teacherNotes: 'Excellent descriptive writing operates on multiple sensory levels while maintaining a consistent perspective and building intensity. This piece does all three. Notice how it doesn\'t just say "it was a big storm"—instead, it shows the progression through concrete sensory details. The choice to open with the absence of birds is sophisticated; it creates unease without explanation. The metaphors (blood vessels for lightning, machine-gun for rain) are apt and enhance understanding rather than distract from it. The shift in perspective at the end, where the narrator realizes what storms "do," gives the description purpose. This is not description for its own sake; it\'s description in service of a larger realization. The final paragraph is particularly effective because it grounds the experience back into human understanding.',
    studentCheckpoints: [
      'Have you progressed through multiple senses, not just visual?',
      'Do your metaphors clarify the image or merely decorate it?',
      'Does the intensity build, or do you maintain the same level throughout?',
      'Have you used specific, concrete details rather than general adjectives?',
      'Does your description serve a purpose beyond mere observation?',
    ],
  },
  {
    id: 'gr9-descriptive-marketplace-6',
    title: 'The Spice Market at Dusk',
    type: 'descriptive',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a description of a busy marketplace focusing on sensory richness.',
    modelText: `The smell arrived first, before the marketplace even came into view. It rolled down the narrow street in layers: cardamom and cinnamon from the spice vendors, overlaid with the sharp tang of lime and chili, the sweetness of honey and jaggery, and underneath it all, the dusty, earthy smell of turmeric that stained everything yellow. It was overwhelming and inviting simultaneously, the kind of smell that makes your mouth water and your eyes water at the same time.

The marketplace itself was a controlled chaos. Stalls lined both sides of the street, their colorful awnings creating a tunnel of red and gold and deep blue. Silks were draped like frozen waves, their patterns shifting in the late-afternoon light. Next to them, mountains of fruits and vegetables were arranged with geometric precision—pyramids of oranges, perfect circles of red tomatoes, bundles of long beans tied together with twine so green it looked artificial.

The crowd moved with its own rhythm, neither hurried nor leisurely. Shoppers paused at each stall, picking up items, turning them over, examining them with the critical eye of people who knew quality. Vendors called out their wares in practiced voices, their pitches overlapping into a kind of market music: "Fresh coconuts, best price!" "These spices, direct from the hills!" "Honey like gold, honey like pure gold!" The calls created a kind of sonic texture that filled the space.

But the most striking part was the light. Dusk was settling over the marketplace, and the vendors had begun to light small oil lamps at their stalls. These flickering lights caught the dust rising from the ground—dust stirred by thousands of feet and by the vendor sweeping with his palm frond—and transformed it into something luminous. Everything seemed to glow with a soft orange light, as though the marketplace existed slightly outside of time, in some gilded version of reality.

Colors seemed more saturated in this light. The yellows were brighter, the reds deeper, the blues more like jewels. Spices in burlap sacks looked like small mountains of gold and crimson and burnt sienna. A vendor selling flowers had his stall arranged in rings of color, white marigolds on the outside, then yellow, then orange, then pink and red in the center—a target of color that drew your eye and held it.

The textures were equally rich: the rough weave of burlap, the smooth roundness of fresh fruit, the fine dust that coated every surface, the soft silk of the fabrics, the granular texture of various spices. To touch anything was to understand its age, its origin, its care. The limes felt warm from the sun. The fabrics felt like they held memories of the hands that had dyed them.

By the time the sun finally touched the horizon, the marketplace had transformed. The individual stalls were no longer separate entities but part of one unified organism, one great marketplace breathing and moving as a single entity. The colors bled into each other as the light shifted. The sounds seemed to come from everywhere and nowhere. And the smell—that rich, layered smell—had deepened into something almost narcotic, almost dizzying in its complexity.

To stand in the marketplace at that hour was to understand why people came back, day after day, year after year. It was not merely a place to buy things. It was a place to exist in richness, in sensation, in the evidence of human craft and care.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 180,
        technique: 'Opening with smell as the primary sensory gateway',
        effect: 'Activates multiple senses at once; overwhelming quality mirrors the reader\'s experience',
      },
      {
        startIndex: 250,
        endIndex: 380,
        technique: 'Precise spatial arrangement and color terminology',
        effect: 'Geometric descriptions (pyramids, circles) give order to apparent chaos',
      },
      {
        startIndex: 450,
        endIndex: 600,
        technique: 'Dialogue and sound patterns creating sonic texture',
        effect: 'The calls become music, elevating mundane sales pitches to something beautiful',
      },
      {
        startIndex: 700,
        endIndex: 850,
        technique: 'Light and dust transformation through specific time of day',
        effect: 'The dusk setting and oil lamps create magic through realistic physics',
      },
      {
        startIndex: 950,
        endIndex: 1100,
        technique: 'Synesthetic description (colors as jewelry, spices as mountains)',
        effect: 'Abstract comparisons help reader see ordinary marketplace as extraordinary',
      },
      {
        startIndex: 1300,
        endIndex: 1450,
        technique: 'Touch descriptions revealing history and care',
        effect: 'Warm limes and memory-holding fabrics personalize the sensory experience',
      },
    ],
    teacherNotes: 'This descriptive piece excels at creating richness without overwhelm. The key technique is progression: it doesn\'t dump all sensory information at once, but rather builds through layers—first smell, then sight, then sound, then light, then color, then texture. Notice how the writer also progresses in interpretation; by the final paragraph, the marketplace has become almost mythic, transformed from mere location to spiritual experience. The specific details (turmeric staining yellow, marigolds arranged in a target, limes warm from sun) make the general descriptions concrete and memorable. Most importantly, this piece demonstrates that good description doesn\'t just record; it also interprets and reveals the emotional significance of what\'s being described.',
    studentCheckpoints: [
      'Have you sensory-overloaded or layered your descriptions?',
      'Do your color and texture descriptions feel accurate or cliché?',
      'Have you included human activity that brings the space to life?',
      'Does your description build toward some interpretation or understanding?',
      'Are your specific details memorable and unusual rather than generic?',
    ],
  },
  {
    id: 'gr9-descriptive-abandoned-7',
    title: 'The Forgotten Theater',
    type: 'descriptive',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a description of an abandoned or neglected place that reveals its past through detail.',
    modelText: `The theater had been closed for sixteen years, though you could argue it began closing long before that. The marquee still held the title of the last film shown: letters hung at odd angles, some missing entirely. What remained spelled out something like "MMER OF..." — a fragment of an advertisement for a summer movie that hadn't been seen since 2007.

The front doors were chained, but a side entrance—probably where the actors once came—hung open with the patient insistence of broken things. Inside, sunlight slanted through cracks in the boarded windows, creating sharp geometries of light and shadow on every surface. Dust hung in these light columns like suspended time.

The lobby still held its careful arrangement of a better age. Behind the candy counter—glass now clouded with dust—were the glass bottles of pumps that once dispensed colored syrup for snow cones. The metal scoop for popcorn hung on its hook, a thin layer of rust already claiming its edges. Faded movie posters lined the walls, their colors drained by sunlight and age until the bright reds and blues had become muted pinks and grays. A poster for "Breakfast at Tiffany's" was still visible, from a re-release showing, perhaps, in the 1980s. Next to it, a poster for "Jaws" smiled its mechanical smile.

The concession items scattered across the counter told stories. An old register, its keys stiff with disuse, still held coins in its open drawer—pennies and dimes from when someone had given up on this place and simply walked away. A calendar hung on the wall, still turned to June 2007, as though the theater might return to business at any moment. Next to it, a handwritten note in faded blue ink read "Fix the bathroom light—ask Jerry."

But the real cathedral of the place was the auditorium.

The velvet seats—dark red, though the color had faded to a kind of dried-blood brown—stretched toward the screen in perfect rows. Sections of them were torn, their foam insides spilling out like some kind of soft decay. In the darkness, you could still smell the faint ghost of popcorn and something else—the particular smell of old buildings, a mixture of dust and stale air and time itself.

The screen was still there, though it had begun to crumble at the edges. Paint peeled from it in long strips, revealing the concrete underneath. Bits of the silver-screen material hung in tatters. A few frames of old film hung from the projection booth—presumably film that broke years ago and was never properly removed. When the light caught them, they projected dancing shadows on the far wall, creating the illusion that some ghost performance was still in progress.

The projection booth itself was a time capsule. The projector sat silent in the darkness, its mechanisms frozen, its lens covered in dust. Reels were stacked haphazardly on shelves, the film inside degraded and brittle. Next to the projector, someone had left a thermos. It was still there, probably had been for a decade, its interior long since turned into a archaeological record of what it once contained.

To stand in the theater was to stand in a kind of museum of human forgetting. Not malice had closed this place, but simple gradual obsolescence. The multiplex three miles away had drawn the crowds away slowly, and then streaming had finished the job. The building hadn't been demolished; it had simply been abandoned to time, left to its patient decay.

Yet in its stillness, there was something almost beautiful. The light columns from the broken windows turned it into an accidental gallery. The frozen image on the broken screen became abstract art. The dust that covered everything preserved what had been, like amber preserving ancient insects. And if you sat in one of those torn velvet seats and let your eyes adjust to the dimness, you could almost imagine hearing the rustle of candy bags, the murmur of anticipation before the film began, the small sounds of human hope gathered in darkness.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 150,
        technique: 'Fragmented text and broken objects as evidence',
        effect: 'The broken marquee shows loss without stating it; readers deduce the abandonment',
      },
      {
        startIndex: 250,
        endIndex: 350,
        technique: 'Light and dust as transitional elements',
        effect: 'Dust becomes active, almost poetic, rather than merely dirty',
      },
      {
        startIndex: 450,
        endIndex: 650,
        technique: 'Objects as historical documents',
        effect: 'The candy counter, posters, and register tell a story of what was without explicit narrative',
      },
      {
        startIndex: 750,
        endIndex: 900,
        technique: 'Tactile descriptions of decay',
        effect: 'Torn velvet, peeling paint, and brittle film make deterioration physical and real',
      },
      {
        startIndex: 1200,
        endIndex: 1350,
        technique: 'Small forgotten objects revealing human presence',
        effect: 'The thermos is more moving than any explanation could be; it shows real people',
      },
      {
        startIndex: 1700,
        endIndex: 1850,
        technique: 'Reframing decay as accidental beauty',
        effect: 'The shift in perspective transforms sadness into appreciation; light becomes gallery lighting',
      },
    ],
    teacherNotes: 'This piece demonstrates how description can convey history and emotion without explicit narration. The broken marquee, the June 2007 calendar, the abandoned thermos—each detail carries emotional weight because it implies human presence and loss. The writer resists melodrama; instead of saying "it was sad," she shows objects frozen in time. The spatial progression (lobby to auditorium to projection booth) moves the reader through the space, building understanding as they go. Most impressive is the final paragraph, which reframes the entire description: decay becomes beauty, absence becomes presence. This kind of interpretive turn—where the writer finds meaning in the ruins—transforms mere description into something philosophical. Notice how the writer avoids explicit judgment; instead, she lets readers draw their own conclusions.',
    studentCheckpoints: [
      'Do your small details convey larger stories?',
      'Have you avoided explicit emotion in favor of showing through objects?',
      'Does your spatial progression guide the reader through the space?',
      'Are there moments where decay or neglect reveals surprising beauty?',
      'Do your final observations transform how we see what came before?',
    ],
  },
  {
    id: 'gr9-descriptive-sunrise-8',
    title: 'Sunrise Over the Mountain',
    type: 'descriptive',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a description of a sunrise or sunset that captures transformation over time.',
    modelText: `The mountain held its breath in the moments before dawn. Everything was monochromatic—grays and blacks and the faintest suggestion of deep blue. The world existed in silhouette only; individual trees were merely shapes against the slightly lighter sky. You couldn't see where the land ended and the atmosphere began. Everything was edge, nothing was substance.

Then came the first change. Not light exactly, but the suggestion of light, a barely perceptible warming of the eastern sky from absolute black to charcoal. This transition took several minutes and seemed to happen all at once. You could watch it if you were patient, could witness the exact moment when the universe shifted from night to not-quite-day. The birds felt it before I did; they began their morning calls hesitantly, uncertain whether the dawn was truly coming this time.

The color that arrived next was so subtle that at first I wasn't sure I was actually seeing it, or merely imagining it. A wash of indigo at the horizon, barely distinguishable from the sky above it. But as I watched, this indigo deepened, became more real, solidified into a distinct band of color. The mountain began to gain dimension; I could now see not just the silhouette but the slopes and valleys catching different amounts of the nascent light.

Then came the reds. Not the violent crimson-orange reds you see in photographs, but subtle gradations: salmon, rose, a deep magenta that seemed to pulse with its own life. These colors didn't settle in one place but seemed to move and shift as the light angle changed. Clouds that had been invisible now became visible, their undersides catching fire. The colors were warm in a way that seemed almost liquid, as though the sky was melting into itself.

The light began to change the landscape below. The dark shapes became a mountain again, with real contours and real detail. I could see the forest on its slopes, the texture of rock faces catching the early light. Snow on the highest peak began to glow, first faintly pinkish, then gradually shifting toward gold. The effect was almost religious, as though the mountain was being blessed into being with each passing moment.

The transformation accelerated. The reds gave way to oranges, and the oranges gave way to yellows. The band of color widened, spreading upward into territory that had been indigo just moments before. The mountain's features became increasingly clear: I could now distinguish individual trees, see the ribbon of a stream catching sunlight, see the precise shape of a hawk riding thermals above the peak.

And then, with a shift that was almost audible, the sun's edge touched the horizon. Just the arc of it, not the full disk, but enough to change everything. The light became white and intense, pushing back the reds and oranges and forcing the sky to yield. The mountain in this new light was suddenly ordinary again—just rock and snow and vegetation, no longer touched by anything transcendent. The magic, paradoxically, was leaving as the full light arrived.

The entire transformation, from the first charcoal suggestion of dawn to the fully risen sun, had taken perhaps twenty minutes. Yet in those twenty minutes, the universe had accomplished an almost unimaginable transformation. The planet had rotated enough to bring a new sun to this valley, and in doing so had revealed the mountain anew, as though for the first time.

I sat with that ordinary mountain in the full morning light, grateful that I'd watched the becoming of it, not just the being of it.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 120,
        technique: 'Opening with negation and absence',
        effect: 'Describing darkness and silence creates the baseline from which transformation begins',
      },
      {
        startIndex: 200,
        endIndex: 350,
        technique: 'Progression of color so subtle the reader must actively observe',
        effect: 'This mirrors the actual experience of watching a sunrise; it rewards patient attention',
      },
      {
        startIndex: 500,
        endIndex: 650,
        technique: 'Colors described in precise gradations rather than single names',
        effect: 'Salmon, rose, magenta—these specific terms prevent the description from becoming generic',
      },
      {
        startIndex: 900,
        endIndex: 1050,
        technique: 'Light revealing previously hidden landscape features',
        effect: 'Details emerge with the light, making vision itself become the subject',
      },
      {
        startIndex: 1300,
        endIndex: 1450,
        technique: 'The paradox that full light diminishes the magic',
        effect: 'This observation elevates the description toward larger truth about beauty and revelation',
      },
      {
        startIndex: 1700,
        endIndex: 1800,
        technique: 'Final reflection on the difference between being and becoming',
        effect: 'The distinction gives philosophical weight to what could be merely pretty description',
      },
    ],
    teacherNotes: 'This descriptive piece excels at capturing process rather than state. Most sunrise descriptions focus on the beautiful colors at their peak; this one privileges the transformation itself. Notice how the writer uses the word "becoming" in the final line, suggesting that the process of transformation matters more than any single moment. The color progression is meticulously observed—from indigo to salmon to magenta to orange to gold—and uses specific names rather than generic terms. The temporal awareness is also sophisticated: the writer notes that twenty minutes of cosmic rotation feels like both an instant and an eternity. The comparison to photographs is particularly effective; by noting that real sunrises are subtler than photographic representations, the writer validates the reader\'s actual experience. This authenticity makes the description feel trustworthy.',
    studentCheckpoints: [
      'Have you captured transformation over time, not just a single moment?',
      'Are your color descriptions specific and precise?',
      'Does your perspective shift as the light changes?',
      'Have you included sensory elements beyond just visual?',
      'Does your description move toward some larger observation or insight?',
    ],
  },
  {
    id: 'gr7-narrative-1',
    title: 'The Lost Library Card',
    type: 'narrative',
    board: 'Grade 7',
    grade: '7',
    prompt: 'Write a narrative about losing something important and what happens next.',
    modelText: `I lost my library card on a Tuesday. It sounds like nothing, just a piece of plastic with my name on it, but for me it meant everything.

I'd had that card for three years, since the day my grandmother took me to get it. We went to the downtown library together, just the two of us, and she helped me fill out the form. She said, "This card is a key. It opens up the whole world." That seems silly now, but I believed it then. I still kind of do.

The card was blue with a silver stripe, and it had a picture of me looking serious, like I was trying to be important. I used it at least three times a week. I was the person who came back late and had to pay fines. I was the person who read the longest books and always asked for recommendations. The librarians knew me by name.

Tuesday I went to check out my usual stack of books—I was reading everything by this one fantasy author—and I couldn't find my card. I checked my backpack three times. I checked my pockets. My heart started beating really fast, which was stupid, I know. It's just a library card.

But it wasn't just a card. It was proof that I was a reader. It was proof that I had a place. On hard days, when school was bad or my parents were fighting, I had the library. I could sit there for hours and no one cared. No one asked me to be anything except quiet.

I told the librarian, Mr. Chen, and he didn't tell me to relax or that I was being dramatic like adults usually do. He just listened. Then he said, "We can issue you a new one. But first, let's retrace your steps."

So we did. I went back to the coffee shop where I'd been studying. Nothing. I checked the bus I took to get there. Nothing. I was starting to give up. But Mr. Chen was still there, asking me questions: "Where did you go after the coffee shop? What were you doing? Where did you put your hands?"

At the grocery store, I'd leaned my backpack against the magazine rack while I helped my mom find something. When I remembered that, I turned to Mr. Chen and said, "I think I know."

We went to the grocery store. I went straight to the magazine rack. And there it was, tucked between a cooking magazine and a fashion magazine. Just sitting there, waiting for me.

When I picked it up, my hands were shaking. I know that's dramatic, but it was like recovering something I didn't know I'd lost. It wasn't just the card. It was proof that someone had cared enough to help me look for it. It was proof that I wasn't alone.

I keep that card in a special place now. Sometimes I still go to the library and use it, but sometimes I just look at it. It reminds me of my grandmother, and it reminds me of Mr. Chen taking time to help me. It reminds me that sometimes losing something helps you understand what it really means.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 60,
        technique: 'Opening with apparent insignificance that becomes significant',
        effect: 'Immediately tells us this isn\'t really about a library card; it\'s about what it represents',
      },
      {
        startIndex: 130,
        endIndex: 220,
        technique: 'Explaining the problem the person helped solve',
        effect: 'Shows why the help mattered; reader understands what was at stake',
      },
      {
        startIndex: 300,
        endIndex: 450,
        technique: 'Specific examples of how the person helped',
        effect: 'The paragraph of comments and circled improvements make the gratitude real and specific',
      },
      {
        startIndex: 500,
        endIndex: 650,
        technique: 'Showing the change that resulted',
        effect: 'Demonstrates that the help actually made a difference, not just felt nice',
      },
      {
        startIndex: 750,
        endIndex: 850,
        technique: 'Expressing impact honestly without overdoing it',
        effect: 'The gratitude is genuine because Marcus is realistic ("I still make mistakes"), not over-the-top',
      },
      {
        startIndex: 900,
        endIndex: 970,
        technique: 'Informal but respectful closing',
        effect: 'Matches the tone of the rest of the letter while remaining appropriate',
      },
    ],
    teacherNotes: 'This Grade 7 narrative is effective because it understands that the most important stories aren\'t about big events, but about what small events mean. The library card itself is ordinary, but the narrator\'s emotional attachment to it makes it matter. Notice how the writer doesn\'t try to make the story more dramatic than it is; instead, she honors the real emotional intensity of losing something important. Mr. Chen is a good example of how a supporting character can show the protagonist\'s importance by taking them seriously. The resolution isn\'t external (finding the card) but internal (understanding what the card means). This is mature storytelling for Grade 7. The language is clear and direct, the paragraphs are well-organized, and the emotional arc is genuine.',
    studentCheckpoints: [
      'Have you explained why this moment matters to your character?',
      'Is your supporting character someone who respects your protagonist?',
      'Do you show your character\'s feelings through physical details (shaking hands, fast heartbeat)?',
      'Does your ending show what you learned, not just what happened?',
      'Is your writing honest about real emotions, even if they seem small?',
    ],
  },
  {
    id: 'gr7-narrative-2',
    title: 'The New School',
    type: 'narrative',
    board: 'Grade 7',
    grade: '7',
    prompt: 'Write about a first day somewhere new and what made it bearable.',
    modelText: `My first day at Riverside Middle School was supposed to be a disaster. I was certain of it. I'd transferred schools in the middle of seventh grade, which was probably the worst possible time to transfer schools in the entire world. Everyone already had their friends. Everyone already knew where everything was. Everyone was looking at me like I was the new weird kid.

Which I was.

My old school had been small. My new school had about eight hundred students. I walked into the hallway before first period and nearly had a panic attack. It was so loud, so crowded, so completely overwhelming. I couldn't find my first-period classroom. I walked past it twice.

Then I crashed into someone—literally crashed, like bumped shoulders hard—and her binder went flying. Papers everywhere.

"Oh my god, I'm so sorry!" I said. I wanted to die.

She laughed. Not a mean laugh, but like, an actual normal laugh. "It's okay. I'm terrible at walking in hallways too." She started picking up papers, and I helped her, and somehow that made it not completely terrifying.

Her name was Jordan. She had purple streaks in her hair and she was wearing a shirt that said "Dinosaurs Aren't Extinct, They're Just Hiding." When I complimented it, she grinned at me like I'd just said the best thing ever.

"Most people don't get it," she said. "They just think dinosaurs are dead, but they're not. They evolved. They're birds now."

I said, "They're just hiding and waiting for the right moment to take over the world."

She stared at me for half a second and then said, "Be my friend. Right now. Officially."

Just like that. Just "be my friend."

I said yes.

Jordan took me under her wing—literally, figuratively, in every way. She showed me where the cafeteria was. She sat with me at lunch. When I got lost between second and third period, she walked me there. In English, we sat next to each other and passed notes. In PE, she made sure I wasn't alone in the locker room. It's stupid, but having one person care about whether you exist makes the whole school less terrifying.

By the end of the day, I was still scared. I was still the new kid. But I wasn't alone. And somehow, having Jordan standing next to me made me feel less like a disaster and more like someone who was going to be okay.

We're best friends now, almost a year later. But I still remember that first day, when she picked up her papers and laughed like my clumsiness was the funniest thing she'd ever seen. That moment changed everything. Not because she solved my problems or made me into a different person. But because she was kind, and that kindness made me brave enough to be myself.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 120,
        technique: 'Establishing the stakes through exaggeration that feels true',
        effect: 'The overstatement ("worst possible time") is relatable because new kids genuinely feel this way',
      },
      {
        startIndex: 200,
        endIndex: 300,
        technique: 'Sensory overload describing the new environment',
        effect: 'The overwhelming details (eight hundred students, loud, crowded) show the character\'s feelings',
      },
      {
        startIndex: 400,
        endIndex: 500,
        technique: 'A small accident becoming a turning point',
        effect: 'The collision is believable as a chance encounter, not manufactured drama',
      },
      {
        startIndex: 700,
        endIndex: 800,
        technique: 'Dialogue that reveals character through humor and directness',
        effect: 'Jordan\'s "be my friend" is bold and shows her confidence and kindness simultaneously',
      },
      {
        startIndex: 1000,
        endIndex: 1150,
        technique: 'Specific support actions (showing to cafeteria, sitting in PE)',
        effect: 'These concrete actions show friendship more effectively than statements about it',
      },
      {
        startIndex: 1350,
        endIndex: 1450,
        technique: 'Reflection that clarifies what actually mattered',
        effect: 'The ending explains that the change wasn\'t external (becoming popular) but internal (having support)',
      },
    ],
    teacherNotes: 'This narrative works because it captures the real emotional intensity of seventh grade while remaining grounded in realistic details. The collision with Jordan is a perfect example of a chance encounter that feels earned rather than contrived. The story doesn\'t suggest that one friend solves all problems; instead, it shows how one genuine connection can make an overwhelming situation bearable. Jordan is a well-sketched character (dinosaur shirt, purple hair, directness) who feels like a real person rather than a "nice friend" character. The dialogue is natural, and the pacing moves us quickly through a day that felt long to the narrator but reads quickly to us. Most importantly, the narrator\'s emotional honesty is never compromised for the sake of sounding mature. Seventh graders do have panic attacks over lost first-period classrooms, and that\'s okay.',
    studentCheckpoints: [
      'Have you shown the worst part of your experience in concrete details?',
      'Is your turning point a realistic moment, not lucky coincidence?',
      'Do your supporting characters feel like real people with personality?',
      'Have you shown specific ways people helped, not just stated it?',
      'Does your ending reflect real emotional understanding, not false confidence?',
    ],
  },
  {
    id: 'gr5-narrative-1',
    title: 'The Rainy Day Adventure',
    type: 'narrative',
    board: 'Grade 5',
    grade: '5',
    prompt: 'Write about a day when something unexpected happened.',
    modelText: `It was raining the day my sister and I found the secret door.

We were supposed to be cleaning the basement, but we weren't really cleaning. We were exploring. The basement is full of old boxes and dusty shelves and things that nobody has used in about a hundred years. That's why it's interesting.

"Look at this," said Maya. She was pointing at a corner where some boxes had fallen over. Behind the boxes was part of a wall that looked different from the rest. It was painted a faded blue, and there was a handle on it that looked like it might be a door.

"Cool," I said. "But I think that's just a storage closet."

"There's only one way to find out," Maya said. That's what she always says when she wants to do something that might get us in trouble.

We moved the boxes. It was hard because they were heavy and full of old winter clothes that smelled weird. But finally, we had a clear space. And there it was: a real door. A secret door that had been hidden behind boxes in our basement.

My heart was beating really fast.

The door was stuck, so we both had to pull. It made a loud creaking sound that scared me a little. But when it opened, we could see inside, and it wasn't a closet at all. It was another room.

The room was small and cold and smelled like old paper and dust. There were shelves on the walls, and the shelves had things on them. Not regular things. Old things. There was a stack of books that were so old the pages were yellow. There was a model ship in a glass case. There were photographs in frames, but the pictures were so faded you couldn't really see the people.

"Whoa," said Maya. That's what she says when something is really cool.

We looked around for a long time. There was a small desk with an old typewriter on it. Maya typed something on the keys just to see what it would sound like. It made a clicking noise that echoed in the little room.

On top of the desk, there was a journal. It was leather, and the leather was cracked and old. I opened it carefully because it seemed important. Inside, someone had written in really fancy handwriting. The words were hard to read, but I could figure some of them out.

"This is Grandpa's handwriting," Maya said.

Grandpa doesn't live with us. He lives far away. We don't see him very much because of the divorce. Mom doesn't talk about him much. So it was weird to find his things in our basement. It was like finding proof that he existed, that he had been important to our house before everything changed.

There was a letter in the journal. It was hard to read because his handwriting was so fancy, but I finally figured it out. The letter was to us. To me and Maya.

Dear Emma and Maya, it said. If you're reading this, then you found my studio. I'm sorry I had to leave things like this. I'm sorry about everything. But I want you to know that I think about you every day, and I will always love you, no matter what. Please take care of each other. Love, Grandpa.

I didn't know what to do. I felt like I was supposed to cry, but I also felt like I was supposed to be excited. I just stood there holding the journal.

"We have to show Mom," Maya said.

But I wasn't sure about that. It felt like Grandpa had hidden these things for a reason. Maybe he had hidden them so that we would find them someday when we needed to know that he loved us. Showing Mom might ruin that.

"We should leave it here," I said. "But we can come back whenever we want."

Maya nodded. She understood.

We closed the door and put the boxes back. We didn't clean the basement. We just went back upstairs and didn't say anything. But now I know that the little blue room is there. And whenever I'm sad about Grandpa not being here, I can go down there and remember that he left something behind. He left proof that he loved us.

That rainy day changed everything, even though nothing really changed at all.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 80,
        technique: 'Opening with a simple scene that becomes significant',
        effect: 'Rainy day and basement cleaning seem ordinary until they\'re not',
      },
      {
        startIndex: 150,
        endIndex: 250,
        technique: 'Dialogue that shows sister relationship',
        effect: 'The exchange reveals character and builds excitement without explanation',
      },
      {
        startIndex: 450,
        endIndex: 550,
        technique: 'Describing emotions through physical details',
        effect: 'Heart beating fast shows how important this moment is without saying so',
      },
      {
        startIndex: 750,
        endIndex: 900,
        technique: 'Specific sensory details of the room',
        effect: 'Yellow pages, glass case, faded photographs—these details make the room real',
      },
      {
        startIndex: 1300,
        endIndex: 1450,
        technique: 'Connection to absent family member',
        effect: 'Finding Grandpa\'s things gives the discovery emotional meaning beyond the cool factor',
      },
      {
        startIndex: 1750,
        endIndex: 1900,
        technique: 'Conflict between wanting to share and wanting to preserve',
        effect: 'This honest moment shows the narrator\'s wisdom about what something means',
      },
    ],
    teacherNotes: 'This Grade 5 narrative demonstrates solid storytelling fundamentals: clear beginning, middle, and end; sensory details; dialogue; and emotional honesty. The pacing is appropriate for the age group—moving through the discovery quickly without lingering, but spending time on what matters (finding the journal, reading Grandpa\'s letter). The narrator\'s decision to keep the room secret rather than immediately telling Mom shows maturity and understanding that some things are more important than rules. The final line—"That rainy day changed everything, even though nothing really changed at all"—shows sophisticated thinking about how internal change can matter more than external events. The vocabulary is accessible without being simplistic, and the sentence structures vary appropriately. This would be a strong model for fifth graders learning to balance plot, character, and meaning.',
    studentCheckpoints: [
      'Does your opening make the reader want to know what comes next?',
      'Have you used dialogue to show how characters feel?',
      'Are your sensory details specific (yellow pages, not just old things)?',
      'Does your character learn something or change in some way?',
      'Is your ending about something that matters emotionally, not just what happened?',
    ],
  },
  {
    id: 'gr5-narrative-2',
    title: 'The Friend I Didn\'t Expect',
    type: 'narrative',
    board: 'Grade 5',
    grade: '5',
    prompt: 'Write about meeting someone unexpected and becoming friends.',
    modelText: `I didn't want to go to the park that day. I wanted to stay home and play video games. But my mom said I had to get outside and exercise, which is what adults say when they want to get you out of the house.

So I went to the park, and I sat on a bench by myself because I didn't know anyone there.

That's when Mrs. Chen sat down next to me.

She was old—like, really old. She had white hair and she was wearing a sweater even though it was warm. She sat down and didn't say anything for a while. We just sat there together, not talking.

"That's a cool jacket," she finally said. I was wearing my favorite jacket that has a video game controller on the back.

"Thanks," I said.

"Do you like video games?" she asked.

I was surprised because most old people don't know about video games. "Yeah," I said. "Do you?"

"My grandson plays them," she said. "I don't really understand them, but I like watching. He's teaching me to play Minecraft."

We talked about Minecraft for a while. Well, I talked about it, and she listened. She asked good questions, like real questions, not the kind adults usually ask when they're pretending to care.

After that day, I saw Mrs. Chen at the park a lot. We would sit on the same bench and talk. Sometimes she would bring snacks—crackers or cookies—and we'd share them. Sometimes she would tell me about her life, about being a teacher a long time ago, about her husband who died when she was younger than my parents are now.

"Don't you have friends your age to play with?" she asked me one day.

I didn't really. I had classmates, but not real friends. Everyone at school seemed to already have their groups, and I didn't fit into any of them. I told her that.

"Well, you have a friend at the park," Mrs. Chen said. "That's me."

It sounds silly to say that an old person became my best friend. But Mrs. Chen always wanted to know what I was thinking about. She always listened to the whole story, not just part of it. She didn't tell me what to do. She just cared about what I had to say.

One day I told her that nobody at school likes me. I said, "Maybe there's something wrong with me."

She looked at me for a long time. Then she said, "There's nothing wrong with you. You're just different from some people, and different isn't bad. Different is interesting. The world needs different people."

Nobody had ever said that before. Everyone at school acts like being different is bad. But Mrs. Chen made it sound like being different was okay. Even good.

After that, I started to feel better. Not about school—school was still hard. But about myself. I realized that I didn't have to be like everyone else to be okay.

Mrs. Chen moved away two months ago. Her daughter wanted her to move closer to where she lives, so she could help take care of her. I was really sad about it. But before she left, she gave me a piece of paper with her email address on it. Now I send her emails about my life, and she writes back long letters.

She's still my best friend. And I learned that friends don't have to be the same age. Sometimes they just have to care about you.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 100,
        technique: 'Setting up reluctance and then surprise',
        effect: 'The reader knows something unexpected will happen because the character is reluctant',
      },
      {
        startIndex: 200,
        endIndex: 300,
        technique: 'Small moment of connection (a compliment)',
        effect: 'Rather than instant friendship, connection builds slowly and naturally',
      },
      {
        startIndex: 450,
        endIndex: 550,
        technique: 'Dialogue showing genuine interest rather than adult dismissal',
        effect: 'Mrs. Chen asks real questions about Minecraft, which shows she\'s taking him seriously',
      },
      {
        startIndex: 800,
        endIndex: 900,
        technique: 'Explicit statement of what matters in friendship',
        effect: 'The narrator explains what Mrs. Chen does right (listens, doesn\'t tell what to do)',
      },
      {
        startIndex: 1250,
        endIndex: 1350,
        technique: 'A moment of vulnerability and doubt',
        effect: 'The narrator says the thing that\'s hardest to say, and is validated for it',
      },
      {
        startIndex: 1600,
        endIndex: 1700,
        technique: 'Realistic ending where friends separate but connection continues',
        effect: 'This teaches that friendship survives distance, and that it\'s defined by the people, not the place',
      },
    ],
    teacherNotes: 'This Grade 5 narrative successfully explores friendship across age differences, which is not typical of Grade 5 narratives but is handled with sensitivity and honesty. The dialogue is natural and shows character rather than explaining it. Notably, the narrator doesn\'t instantly become confident; instead, Mrs. Chen\'s intervention helps him see himself differently, and this change is subtle. The ending—where Mrs. Chen moves but they stay in touch—is realistic and teaches that important relationships don\'t have to be in-person. The writing is clear and accessible, the paragraph breaks are logical, and the emotional arc moves from reluctance to surprise to genuine connection to loss to acceptance. This would be a good model for fifth graders learning to write about emotions and relationships.',
    studentCheckpoints: [
      'Does your character\'s initial state contrast with what happens to them?',
      'Do you show friendship building through small moments?',
      'Have you included dialogue that feels like real talking?',
      'Does your character learn something about themselves?',
      'Is your ending realistic, not too perfect or too sad?',
    ],
  },
  {
    id: 'speech-persuasive-13',
    title: 'Persuasive Speech: Extend School Day for Clubs',
    type: 'speech',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a persuasive speech arguing for a school policy change you believe in.',
    modelText: `Good morning, Principal Martinez, teachers, and fellow students.

I'm here to talk about a problem that affects many of us, and it's a problem that's easy to solve. The problem is that clubs meet after school, but many of us have to leave because of sports, jobs, or having to pick up younger siblings. We sign up for clubs because we want to be part of something, but we can't fully participate.

I'm asking the administration to extend the school day by 30 minutes and dedicate that time to clubs. I know what you're probably thinking: more school? But hear me out.

Right now, about 40 percent of students don't participate in any clubs because of scheduling conflicts. That means 40 percent of us aren't getting the chance to explore our interests, work with our peers, or develop skills outside the classroom. This isn't fair to us, and it's a waste of potential for the school.

Some people say extending the school day will be expensive. This is true, but consider the alternative cost: students dropping out of clubs, less school spirit, fewer opportunities for us to grow as people. Schools are about more than just academics. We're supposed to develop as whole people. Clubs help that happen.

Others say we're already tired and don't want longer days. I understand that feeling. But here's the thing: we're already staying after school for clubs anyway. The difference is, by extending the school day, more of us could participate because we wouldn't have conflicts with other commitments. And tired students who are doing something they love are different from tired students sitting in a boring class.

Think about the students who would benefit. The girl who wants to join the robotics club but has to work after school to help her family. The boy who wants to be in the theater club but has his little brother to pick up. The student who wants to try the debate team but doesn't have transportation until later. All of these students would suddenly have the chance to participate.

And there's more. When more students participate in clubs, the clubs themselves get stronger. They have more members, more ideas, more energy. The robotics team would have more hands to build with. The newspaper would have more writers. The art club would have more creative voices. Everyone benefits.

I'm not asking for much. Just 30 minutes. That's it. Thirty minutes that could change the school experience for hundreds of students. Thirty minutes that could help us discover passions we didn't know we had. Thirty minutes that could help us become better versions of ourselves.

Some of you have had the privilege of being able to participate in clubs without scheduling conflicts. You've gotten to develop yourselves and your interests. Now I'm asking you to help us have that same opportunity.

This change doesn't cost the school much, but it costs us a lot when we can't participate. We're asking for the chance to be part of something bigger than ourselves. We're asking for the chance to grow.

I hope you'll consider this proposal. Thank you.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 80,
        technique: 'Clear, direct opening stating the problem',
        effect: 'Immediately establishes what the speech is about without wasting time',
      },
      {
        startIndex: 250,
        endIndex: 350,
        technique: 'Anticipating and addressing counterarguments',
        effect: 'Shows the speaker has thought through objections and has answers',
      },
      {
        startIndex: 450,
        endIndex: 550,
        technique: 'Using statistics to support argument',
        effect: 'The 40 percent statistic makes the problem feel real and quantifiable',
      },
      {
        startIndex: 700,
        endIndex: 850,
        technique: 'Acknowledging opponent\'s concerns while refuting them',
        effect: 'Shows respect for different perspectives even while arguing against them',
      },
      {
        startIndex: 1050,
        endIndex: 1200,
        technique: 'Using specific examples of affected students',
        effect: 'Makes abstract arguments concrete by showing real people who would benefit',
      },
      {
        startIndex: 1500,
        endIndex: 1650,
        technique: 'Appeal to empathy and fairness',
        effect: 'The argument shifts from practical to moral: some students have privilege, others don\'t',
      },
    ],
    teacherNotes: 'This persuasive speech demonstrates strong structure and clear reasoning. The speaker begins with a direct statement of the problem, acknowledges counterarguments, provides evidence, offers examples, and makes an emotional appeal. The language is accessible without being simplistic, and the tone is respectful rather than aggressive. The speaker avoids the common pitfall of making sweeping claims without support; instead, specific numbers (30 minutes, 40 percent) and examples (robotics, theater) make arguments concrete. The address to administrators and teachers shows awareness of the audience. The conclusion circles back to the opening, creating a sense of completeness. This is a good model for Grade 9 students learning to construct persuasive arguments.',
    studentCheckpoints: [
      'Have you clearly stated what you want and why?',
      'Have you anticipated and answered the "but what about..." questions?',
      'Do you have specific evidence, not just general claims?',
      'Have you included examples that make your argument real?',
      'Is your ending strong and memorable?',
    ],
  },
  {
    id: 'speech-informative-14',
    title: 'Informative Speech: How Languages Die',
    type: 'speech',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write an informative speech explaining a topic you find interesting in a way that teaches your audience.',
    modelText: `Good morning. Have you ever thought about how languages die? Probably not. Most people don't really think about languages unless they're learning one for class. But languages dying is actually a huge problem, and more importantly, it's something we can help prevent.

First, let me explain what it means for a language to die. A language dies when no one speaks it anymore. This doesn't happen all at once. It happens gradually, over generations. A language is endangered when it has very few speakers left, usually older people. When those older people pass away and the younger generation doesn't speak the language, that language effectively dies.

This is happening right now, all over the world. Linguists estimate that one language disappears roughly every two weeks. Every two weeks. That means in the time of a school year, about 25 languages disappear. Some of these languages have been spoken for thousands of years. Then they're gone.

So how does this happen? Usually it's because of a combination of factors. Often, a larger, more powerful culture or language dominates a region. Children are taught to speak the dominant language at school, so they learn that instead of their native language. Parents want their children to succeed, so they encourage them to speak the dominant language at home. Parents themselves start to see their native language as less valuable or outdated.

For example, many Native American languages are critically endangered. Boarding schools in the 1800s and 1900s actually punished children for speaking their native languages and forced them to speak English instead. Now, there are very few fluent speakers left. The Blackfoot language of the American Northwest has fewer than 10,000 speakers now, and most of them are over 50 years old. When this generation passes, the language might die completely unless something changes.

But here's the important part: languages carry unique ways of thinking. Each language embodies the culture and history of the people who speak it. If we lose a language, we lose a way of understanding the world. We lose knowledge about plants, about traditions, about how to understand our environment. Languages aren't just communication tools; they're repositories of human culture and wisdom.

For instance, some languages have specific words for concepts that are really hard to translate. The Sami language of northern Europe has multiple words for different types of snow and ice, which makes sense for people who live with those things constantly. If that language dies, that specific knowledge about snow and ice dies with it. That's loss.

So what can we do? First, we can support language documentation. Linguists are creating audio and video recordings of endangered languages. But this is just preservation; it's not the same as having living speakers. To truly save a language, we need speakers. We need young people to choose to speak their native languages alongside the dominant language.

This is happening in some places. In New Zealand, the Māori language, which was nearly extinct, has been revived through language nests—early childhood centers where everything is taught in Māori. Ireland is also trying to revive Irish through education programs and cultural initiatives. These efforts show that you can fight against language death, even when it seems hopeless.

But this requires choice. Young people have to want to speak their language, and communities have to support them in that choice. It's not easy when the dominant language seems more practical or prestigious. But when people see their native language as part of their identity, as part of who they are, they fight to keep it alive.

Here's the thing: you might not speak an endangered language, but you can still help. If your school offers classes in languages other than the traditional ones, take them. If you know someone who speaks an endangered language, ask them about it. Encourage your community to value all languages, not just the dominant ones. Support Indigenous language initiatives if you can.

Languages are beautiful, and they're dying. That's not a statistic we should be comfortable with. In a world where we're more connected than ever, we're also losing the diversity that makes humanity rich. Every language that dies is a loss we can never get back.

Thank you.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 100,
        technique: 'Opening question that engages the audience',
        effect: 'Makes listeners realize they haven\'t thought about the topic, which motivates them to listen',
      },
      {
        startIndex: 150,
        endIndex: 250,
        technique: 'Clear definition of the subject before diving into detail',
        effect: 'Ensures everyone understands what we mean by "language dies"',
      },
      {
        startIndex: 350,
        endIndex: 450,
        technique: 'Shocking statistic about the problem',
        effect: 'One language every two weeks makes the problem feel urgent and real',
      },
      {
        startIndex: 600,
        endIndex: 750,
        technique: 'Cause-and-effect explanation of how languages die',
        effect: 'Helps audience understand the process rather than just the outcome',
      },
      {
        startIndex: 900,
        endIndex: 1050,
        technique: 'Specific historical example of language suppression',
        effect: 'Boarding schools are a concrete example that helps explain why languages die',
      },
      {
        startIndex: 1200,
        endIndex: 1350,
        technique: 'Explaining why this matters beyond just "it\'s sad"',
        effect: 'Languages as repositories of knowledge makes language death feel important',
      },
      {
        startIndex: 1700,
        endIndex: 1850,
        technique: 'Examples of successful language revitalization',
        effect: 'Shows the audience that the problem isn\'t hopeless, which is more motivating than just despair',
      },
      {
        startIndex: 2000,
        endIndex: 2100,
        technique: 'Direct suggestions for what listeners can do',
        effect: 'Makes the issue feel actionable, not just interesting information',
      },
    ],
    teacherNotes: 'This informative speech teaches while maintaining engagement. The speaker uses various strategies to hold attention: opening questions, shocking statistics, specific examples, and personal relevance. The organization is clear: definition, scope of the problem, causes, significance, and solutions. The examples (Native American languages, Sami, Māori, Irish) are specific enough to feel real but diverse enough to show that this is a global problem. A particularly effective moment is when the speaker explains why languages matter—not just as communication but as repositories of knowledge. This elevates the topic from interesting trivia to genuinely important. The conclusion circles back to the opening idea, creating closure. The suggestions for action at the end prevent the speech from feeling hopeless. This is an excellent model of how to structure informative speaking.',
    studentCheckpoints: [
      'Have you clearly defined your topic before diving into details?',
      'Do you have statistics or examples that show your topic matters?',
      'Have you explained cause-and-effect, not just facts?',
      'Is your information organized in a way that\'s easy to follow?',
      'Have you given your audience reasons to care about your topic?',
    ],
  },
  {
    id: 'article-opinion-15',
    title: 'Opinion Article: Why Homework Needs to Change',
    type: 'article',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write an opinion article arguing for a change in school or your community.',
    modelText: `The Problem with Homework

Homework is broken. And I don't say that as a rebellious student who doesn't want to do it. I say it as someone who has spent the last four years of middle and high school drowning in it. Homework is supposed to reinforce what we learn in class. Instead, it's becoming a source of stress and a barrier to actual learning.

The numbers are staggering. Research from Gallup shows that students now spend an average of three to four hours on homework per night. For students in advanced or honors classes, it's often much more. This is double or triple what was recommended just 20 years ago. We're spending more time on homework than on sleep, family dinner, hobbies, or any kind of downtime. And we're miserable because of it.

But here's the thing: more homework doesn't equal better learning. In fact, when students are exhausted and stressed, they learn less effectively. Our brains work better when we're rested and when we have time to let information sink in. We also learn better when we're engaged in activities we choose, not forced homework we resent.

I'm not saying homework should be eliminated. There's value in practice and review. But the amount we're assigning is excessive, and the nature of much of it is counterproductive. Too often, homework is busywork—worksheet upon worksheet that doesn't actually require real thinking. We fill in blanks or copy answers, and the next day, we repeat the process with a different subject.

The stress is real. I have friends who are getting two to three hours of sleep per night because of homework. They're taking energy drinks and pills to stay awake. They're skipping meals to have time for studying. This is not healthy. This is not sustainable. And I would argue that this is not education.

What really bothers me is that homework disproportionately affects some students. Students whose parents can afford tutors have an advantage. Students whose parents are educated and speak English fluently can help them at home. But students whose families don't have these advantages are left to struggle on their own, often in homes where they might not even have a quiet place to study. The homework system widens the opportunity gap rather than closing it.

So what's the solution? I'm not saying teachers are bad or that they don't care. Most teachers are doing their best within a system that they didn't create. But the system needs to change. Schools should adopt the research-backed principle that homework should be limited. The amount should decrease as students get older, not increase. And the homework that is assigned should be meaningful—not busywork, but actual practice of skills and concepts that matter.

Some schools are already making this change. Schools that have reduced homework and limited it to 10 minutes per grade level have seen better test results, not worse. Students are happier. They sleep more. They have time for family, for hobbies, for being kids. And academically, they're not falling behind.

I'm not the first student to complain about homework. Every generation of students has probably said the same thing. But right now, the problem is worse. The amount is higher. The stress is more visible. And we have research showing that what we're doing doesn't work.

We deserve a school system that values our wellbeing as much as our grades. We deserve time to sleep, to eat, to be with our families, to pursue interests that aren't assigned to us. That's not too much to ask.

Change the homework system. Your students will thank you.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 80,
        technique: 'Strong opening that immediately declares the argument',
        effect: 'Makes clear this is an opinion piece and what the opinion is',
      },
      {
        startIndex: 150,
        endIndex: 250,
        technique: 'Using research and statistics to support opinion',
        effect: 'Gallup research gives the opinion credibility; it\'s not just anecdotal',
      },
      {
        startIndex: 400,
        endIndex: 550,
        technique: 'Acknowledging the other side before refuting it',
        effect: 'Shows the writer has considered counterarguments and isn\'t simply dismissing them',
      },
      {
        startIndex: 750,
        endIndex: 900,
        technique: 'Using personal examples and specific details',
        effect: 'Energy drinks, skipped meals, lost sleep make the argument real, not abstract',
      },
      {
        startIndex: 1050,
        endIndex: 1200,
        technique: 'Addressing equity and fairness dimensions',
        effect: 'Elevates the argument beyond student preference to systemic justice',
      },
      {
        startIndex: 1450,
        endIndex: 1600,
        technique: 'Providing examples of schools that have successfully changed',
        effect: 'Shows the solution isn\'t theoretical; it\'s already working elsewhere',
      },
      {
        startIndex: 1800,
        endIndex: 1900,
        technique: 'Direct address to the audience (teachers/administrators)',
        effect: 'The closing is written as if speaking directly to decision-makers',
      },
    ],
    teacherNotes: 'This opinion article demonstrates clear structure and persuasive technique. The writer states the opinion upfront, which is appropriate for opinion writing. Evidence comes from multiple sources: research (Gallup), personal observation (friends staying up late), examples of successful change (schools with reduced homework), and systemic analysis (equity concerns). The voice is appropriately passionate without being hysterical. The writer addresses counterarguments ("I\'m not saying homework should be eliminated") which actually strengthens the argument by showing it\'s reasonable. The specific examples (energy drinks, skipped meals) make abstract stress concrete. The conclusion appeals directly to decision-makers, which is appropriate for opinion writing that advocates for change. This is a strong model for Grade 9 opinion writing.',
    studentCheckpoints: [
      'Have you stated your opinion clearly at the beginning?',
      'Do you have multiple types of evidence (research, examples, personal)?',
      'Have you acknowledged and addressed counterarguments?',
      'Are your examples specific and concrete, not vague?',
      'Is your tone respectful even though you disagree?',
    ],
  },
  {
    id: 'article-review-16',
    title: 'Book Review: The Giver',
    type: 'article',
    board: 'Grade 7',
    grade: '7',
    prompt: 'Write a review of a book, film, or other media that explains why you would or would not recommend it.',
    modelText: `The Giver by Lois Lowry: A Book That Makes You Think

The Giver is a book about a boy named Jonas who lives in a perfect society. Everyone is happy. There is no pain, no war, no suffering. There is no choice either, but at first, Jonas doesn't realize that's a problem. The book is definitely worth reading, and I would recommend it to anyone, especially if you like science fiction or if you like books that make you ask questions about your own world.

The story is interesting from the very beginning. Jonas is twelve years old when he is assigned his role in society—he will be the Receiver of Memory. This means an old man called the Giver will transmit all the memories of the world to him. Jonas doesn't understand at first why memories are important. The world he lives in seems perfect without them. But as he receives the memories, he begins to understand that his world is not actually perfect. It's fake. The memories show him love, and pain, and choice, and all the things that make life real.

What I really liked about this book is how it makes you think about your own life. Is our world better because we have choice? Is it good that we can feel pain? Is perfection actually good? These are hard questions, and the book doesn't give you easy answers. The book just shows you what happens to Jonas and lets you think for yourself.

The characters are interesting too. The Giver is kind, and he helps Jonas understand what's happening. Jonas's family is normal and loving, but they don't really know each other because they can't feel real emotions. And Jonas changes throughout the book. At the beginning, he's just a regular kid who follows the rules. By the end, he's someone who questions everything and is willing to take huge risks for what he believes in. That kind of change is cool to read about.

One thing I didn't like as much was that the book is kind of slow at the beginning. It takes a while to understand what the society is like and what the rules are. Some chapters are just Jonas going to his job and learning about the rules. It's not boring exactly, but it's slow. But once you get past that part, the book gets really interesting.

The ending is interesting because it's kind of ambiguous. I don't want to spoil it, but there are two ways you could interpret what happens. Some people think it's a happy ending, and some people think it's sad. That's what makes it so good. The author doesn't just tell you what to think. She lets you decide.

I would recommend this book. It's good for people who like to think about big ideas. It's good for people who like science fiction. It's good for people who like books with surprising twists. Basically, it's good for anyone who wants to read something that makes them think about the world differently.

The Giver is the first book in a series, so if you like it, there are other books you can read. I haven't read the other books yet, but I'm planning to. I would rate this book 4.5 out of 5 stars. It's not perfect—the beginning is slow and I wanted more explanation of some things. But it's a really good book, and I think you should read it.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 80,
        technique: 'Title with subtitle that indicates the review will explain a recommendation',
        effect: 'Sets expectations for what will follow',
      },
      {
        startIndex: 100,
        endIndex: 200,
        technique: 'Brief summary without spoilers',
        effect: 'Tells readers what the book is about without revealing surprises',
      },
      {
        startIndex: 250,
        endIndex: 350,
        technique: 'Clear statement of recommendation',
        effect: 'Tells the reader up front whether the reviewer recommends the book',
      },
      {
        startIndex: 450,
        endIndex: 650,
        technique: 'Explaining why the story matters',
        effect: 'Goes beyond "it was interesting" to explain what makes it interesting',
      },
      {
        startIndex: 850,
        endIndex: 1000,
        technique: 'Discussing what the book makes the reader think about',
        effect: 'Shows that good books engage readers intellectually, not just emotionally',
      },
      {
        startIndex: 1200,
        endIndex: 1350,
        technique: 'Acknowledging a weakness while defending it',
        effect: 'Shows balance—the reviewer didn\'t just like everything, but understands why it\'s there',
      },
      {
        startIndex: 1500,
        endIndex: 1600,
        technique: 'Rating with explanation',
        effect: 'Gives a clear summary of the overall recommendation at the end',
      },
    ],
    teacherNotes: 'This review demonstrates effective review writing for Grade 7. The reviewer gives away just enough plot to understand the premise without spoiling the story. She explains why she liked it (makes you think, interesting characters, good ending) rather than just saying "it was good." She acknowledges a weakness (slow beginning) without letting it override her recommendation, which shows balanced thinking. She also explains what kind of reader would like this book, which is helpful for others deciding whether to read it. The writing is clear and accessible, organized logically (what it\'s about, what\'s good, what\'s less good, recommendation). The voice is personal and honest. Most importantly, the review shows that she actually read the book and thought about it, rather than just giving a surface reaction. This is a good model for Grade 7 review writing.',
    studentCheckpoints: [
      'Have you summarized the plot without spoilers?',
      'Do you explain why you liked or disliked it, not just that you did?',
      'Have you mentioned who would enjoy this book?',
      'Is your recommendation clear at the beginning and end?',
      'Have you balanced positives with honest criticisms?',
    ],
  },
  {
    id: 'letter-complaint-17',
    title: 'Formal Complaint Letter: Restaurant Service',
    type: 'letter',
    board: 'Grade 8',
    grade: '8',
    prompt: 'Write a formal letter of complaint to a business about poor service or a problem.',
    modelText: `March 27, 2026

Manager
Giovanni's Restaurant
445 Main Street
Springfield, IL 62701

Dear Sir or Madam,

I am writing to lodge a formal complaint about the service my family received at your restaurant on March 24, 2026, during our dinner reservation.

We had made a reservation for 6:30 p.m. for four people. Upon arrival, we were told to wait 45 minutes despite having a reservation. When we were finally seated at 7:15 p.m., we were given a table in the back near the kitchen with dirty glasses and crumbs still on it. The table was not cleaned before we were seated.

Our server, while friendly, was inattentive. We waited 20 minutes before anyone took our drink order. After we ordered our entrees, we waited 30 minutes before they were served. When the food finally arrived, my mother's steak was cold, and my son's pasta was overcooked to the point of being inedible. When we brought this to the server's attention, they apologized but made no offer to replace the items or compensate us.

We paid for a meal that was not what we ordered and was not of acceptable quality. The entire experience was disappointing and not reflective of what your restaurant's reputation suggests.

I would appreciate a response from management addressing these concerns and explaining what steps will be taken to ensure this does not happen to other customers. I would also appreciate discussion of an appropriate resolution to this matter.

Thank you for your attention to this complaint.

Sincerely,

Patricia Chen
555 Oak Avenue
Springfield, IL 62701
Phone: (217) 555-0147
Email: p.chen@email.com`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 100,
        technique: 'Proper formal letter formatting with date and addresses',
        effect: 'Shows respect for the recipient and business formality',
      },
      {
        startIndex: 150,
        endIndex: 200,
        technique: 'Clear statement of purpose immediately',
        effect: 'Tells the reader what the letter is about without making them guess',
      },
      {
        startIndex: 250,
        endIndex: 450,
        technique: 'Specific facts rather than general complaints',
        effect: 'The reservation time, 45-minute wait, 7:15 arrival time—these specific details are more credible than "we waited a long time"',
      },
      {
        startIndex: 500,
        endIndex: 700,
        technique: 'Chronicling the issues in order they occurred',
        effect: 'Makes the complaint easier to understand and harder to dismiss as exaggeration',
      },
      {
        startIndex: 750,
        endIndex: 850,
        technique: 'Explaining how the service fell short without being rude',
        effect: 'The complaint is direct but professional; no name-calling or excessive emotion',
      },
      {
        startIndex: 900,
        endIndex: 1000,
        technique: 'Requesting specific action or resolution',
        effect: 'Doesn\'t just complain; asks for what should happen to make it right',
      },
    ],
    teacherNotes: 'This complaint letter demonstrates effective formal business writing. The structure is clear: date, proper addresses, greeting, statement of purpose, explanation of problems with specific details, statement of impact, request for resolution, professional closing. The tone is firm but respectful, which is more effective than angry ranting when trying to get results. The specific facts (times, what was wrong with the food) make the complaint credible. The letter avoids excessive emotion and name-calling, which would undermine the complaint. The request for response and resolution is explicit, making clear what should happen next. This is a good model for Grade 8 formal letter writing.',
    studentCheckpoints: [
      'Is your letter properly formatted with date and full addresses?',
      'Have you stated your purpose clearly in the opening?',
      'Do you provide specific facts and details, not general complaints?',
      'Is your tone firm but respectful?',
      'Do you state clearly what action or resolution you want?',
    ],
  },
  {
    id: 'letter-informal-18',
    title: 'Informal Letter: Thank You to a Teacher',
    type: 'letter',
    board: 'Grade 6',
    grade: '6',
    prompt: 'Write an informal letter thanking someone who helped or inspired you.',
    modelText: `Dear Mr. Rodriguez,

I wanted to write to you to say thank you. I know you probably get busy, so I'm writing this so you actually have time to read it.

This year in your class was different from other years. At the beginning of the year, I hated writing. I thought I was bad at it. I would panic whenever you assigned an essay. I thought my writing sounded stupid, and I was sure everyone would think so too.

But you kept telling me that my ideas were good, even when I didn't believe it. You marked up my drafts with suggestions, but you never made me feel bad about them. You just showed me ways to make things better. And slowly, I started to believe that maybe I wasn't as bad as I thought.

I remember one time I turned in a draft that I thought was terrible. You wrote a whole paragraph of comments at the end about what I did well and what I could work on. You didn't just tell me what was wrong; you showed me how to fix it. And when I turned in the next draft, you actually circled the parts where I had taken your advice and improved. You noticed. That meant something to me.

By the middle of the year, I wasn't panicking about writing assignments anymore. By the end of the year, I actually liked writing. I never thought that would happen. I still make mistakes, and I still don't think I'm the best writer, but I don't hate it anymore. And that's because you believed in me when I didn't believe in myself.

I just wanted you to know that what you did mattered. I'm going to take your class again next year if I can, and I'm going to keep writing because of what you taught me. Thank you for being a teacher who actually cares.

Your student,
Marcus`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 80,
        technique: 'Informal greeting and opening',
        effect: 'Sets the tone as personal and sincere',
      },
      {
        startIndex: 120,
        endIndex: 220,
        technique: 'Explaining the problem the person helped solve',
        effect: 'Shows why the help mattered; reader understands what was at stake',
      },
      {
        startIndex: 300,
        endIndex: 450,
        technique: 'Specific examples of how the person helped',
        effect: 'The paragraph of comments and circled improvements make the gratitude real and specific',
      },
      {
        startIndex: 500,
        endIndex: 650,
        technique: 'Showing the change that resulted',
        effect: 'Demonstrates that the help actually made a difference, not just felt nice',
      },
      {
        startIndex: 750,
        endIndex: 850,
        technique: 'Expressing impact honestly without overdoing it',
        effect: 'The gratitude is genuine because Marcus is realistic ("I still make mistakes"), not over-the-top',
      },
      {
        startIndex: 900,
        endIndex: 970,
        technique: 'Informal but respectful closing',
        effect: 'Matches the tone of the rest of the letter while remaining appropriate',
      },
    ],
    teacherNotes: 'This thank-you letter demonstrates effective informal business writing. It\'s personal without being overly casual. The writer explains why he\'s grateful (changed his relationship to writing), gives specific examples (the paragraph of comments), and shows the impact (went from hating writing to liking it). The letter acknowledges that perfection isn\'t the goal; the goal is growth and belief. This is more powerful than exaggerated praise. The tone is genuine and thoughtful. For a Grade 6 student, this shows strong self-awareness and the ability to recognize and appreciate someone who has helped them. It\'s a good model for informal letter writing.',
    studentCheckpoints: [
      'Have you explained why you\'re grateful, not just said thank you?',
      'Do you give specific examples of what the person did?',
      'Is your tone personal and sincere?',
      'Have you shown how their help changed things?',
      'Is your letter the right length (long enough to matter, not so long it\'s overwhelming)?',
    ],
  },
  {
    id: 'essay-argumentative-19',
    title: 'Argumentative Essay: Technology and Sleep',
    type: 'essay',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write an argumentative essay taking a clear position on a debated topic.',
    modelText: `Technology is Stealing Our Sleep: Why We Need to Change Our Relationship with Devices

Every night, millions of teenagers fall asleep with their phones in their hands. Blue light glows against their faces as they scroll through social media, check emails, and respond to messages. Sleep, the most fundamental biological need, is being sacrificed on the altar of connectivity. Technology, particularly smartphones and other light-emitting devices, is damaging our ability to sleep, and we need to take action to address this problem.

The science is clear: blue light from screens suppresses melatonin production, the hormone that makes us sleepy. When we use our devices before bed, we're essentially telling our bodies that it's still daytime. Our circadian rhythms—the internal clocks that regulate our sleep-wake cycles—become confused. Studies show that teenagers who use their phones within an hour of bedtime take significantly longer to fall asleep and sleep less overall. This isn't just about feeling tired; sleep deprivation affects everything from academic performance to mental health to physical health.

One might argue that technology is not the problem; the problem is how we use it. This argument has some merit. It's true that technology itself is neutral; the way we use it matters. But this argument ignores the reality of how these devices are designed. Tech companies employ teams of engineers and psychologists specifically to make their apps addictive. They use variable reward schedules, notifications, and endless scrolling to keep us engaged. We're not just choosing to use our devices; we're fighting against systems designed to hijack our attention. Pretending willpower alone can overcome this is unrealistic.

Others claim that technology is necessary for school and social connection, so we can't just avoid it. Again, there's truth here. But there's a difference between using technology and using technology before bed. Students can use their devices for homework and communication during the day without sleeping with their phones. The solution isn't to eliminate technology but to establish boundaries around it.

The evidence that such boundaries help is strong. Schools that have implemented phone-free policies have seen improvements in student sleep, focus, and mental health. Families that have established tech-free bedrooms have reported better sleep and better relationships. These aren't theories; these are real results.

So what should change? First, schools should discourage phone use close to bedtime and educate students about the impact of blue light on sleep. Second, parents should model good habits by not using their own devices before bed. Third, manufacturers should be held accountable for designing addictive features, particularly in apps aimed at teenagers. And finally, each of us should take responsibility for creating tech-free bedrooms where sleep is the priority.

Some people will resist these changes. They'll say it's impossible to stay away from their phones, that they need to be available in case of emergencies, that their social life depends on constant connectivity. These are real concerns, but they don't outweigh the fundamental human need for sleep. We survived and thrived for millennia without 24-hour connectivity. We can handle not having our phones for eight hours.

Technology has brought incredible benefits to our lives. But like any tool, it can be misused. When that misuse is destroying our sleep and our health, we need to make a change. We need to reclaim our bedrooms, our sleep, and our health from the tyranny of the pinging notification. We need to remember that being constantly connected online doesn't matter if we're exhausted in real life.

The solution is not to reject technology but to use it intentionally. That means keeping devices out of bedrooms. That means putting phones away an hour before bed. That means recognizing that some spaces and times should be protected from technology's reach. Our sleep is not a luxury or a privilege; it's a necessity. It's time we started protecting it like one.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 150,
        technique: 'Opening with vivid image and clear thesis statement',
        effect: 'The image of blue light against faces is concrete; the thesis is unmistakable',
      },
      {
        startIndex: 200,
        endIndex: 350,
        technique: 'Scientific evidence supporting the argument',
        effect: 'Melatonin suppression and circadian rhythm disruption give credible basis for the claim',
      },
      {
        startIndex: 450,
        endIndex: 650,
        technique: 'Acknowledging and refuting counterarguments',
        effect: 'The argument is stronger because it shows the writer has considered other perspectives',
      },
      {
        startIndex: 800,
        endIndex: 1000,
        technique: 'Explaining why one counterargument doesn\'t invalidate the position',
        effect: 'Technology is necessary, but that doesn\'t mean it has to be in bedrooms',
      },
      {
        startIndex: 1100,
        endIndex: 1250,
        technique: 'Providing evidence that solutions work',
        effect: 'Schools and families with boundaries see real improvements, not just theoretical benefits',
      },
      {
        startIndex: 1500,
        endIndex: 1700,
        technique: 'Offering concrete, achievable solutions',
        effect: 'Rather than demanding impossible changes, the writer suggests realistic steps',
      },
      {
        startIndex: 1900,
        endIndex: 2100,
        technique: 'Addressing emotional resistance to change',
        effect: 'Acknowledges that people will resist while explaining why those reasons aren\'t sufficient',
      },
      {
        startIndex: 2200,
        endIndex: 2350,
        technique: 'Concluding with restatement of thesis and call to action',
        effect: 'Brings the argument full circle and suggests what should happen next',
      },
    ],
    teacherNotes: 'This argumentative essay demonstrates strong structure and reasoning. The thesis is clear in the introduction. Body paragraphs each take on a different aspect: the science, acknowledgment of counterarguments, evidence that solutions work, and practical recommendations. The writer doesn\'t just claim the other side is wrong; she engages seriously with counterarguments and explains why they don\'t outweigh her position. The tone is persuasive but not preachy. Evidence comes from multiple sources: scientific research, real-world examples, and logical reasoning. The solutions offered are realistic, which makes the essay feel more credible than if the writer demanded impossible changes. The conclusion circles back to the opening image and reinforces the thesis. This is a strong model for Grade 9 argumentative writing.',
    studentCheckpoints: [
      'Is your thesis statement clear and arguable?',
      'Do you have evidence supporting your position?',
      'Have you seriously engaged with counterarguments?',
      'Is your tone persuasive without being preachy?',
      'Do you offer realistic solutions, not just complaints?',
    ],
  },
  {
    id: 'essay-discursive-20',
    title: 'Discursive Essay: The Value of Failure',
    type: 'essay',
    board: 'Grade 9',
    grade: '9',
    prompt: 'Write a discursive essay exploring multiple perspectives on a complex issue without necessarily taking a firm stance.',
    modelText: `The Value of Failure: Exploring How Setbacks Shape Us

We live in a culture obsessed with success. From childhood, we're told to get good grades, win competitions, achieve goals. Failure is presented as something to avoid at all costs. Yet many of the most successful and fulfilled people in the world have experienced significant failure. This raises a complicated question: Is failure actually valuable, or is this just a comforting narrative we tell ourselves about inevitable setbacks? The answer is complex and depends on perspective.

The case for failure being valuable is compelling. Failure teaches resilience. When we fail and recover, we learn that we're capable of bouncing back. We learn that failure is not fatal. This psychological resilience becomes invaluable throughout life, where setbacks are inevitable. Additionally, failure often teaches us more than success does. When we succeed, we might succeed for many reasons we don't fully understand. But when we fail, we're forced to analyze what went wrong, to understand our weaknesses, and to develop new strategies. A student who fails an exam and studies differently for the next one has learned something valuable; a student who passes without understanding the material hasn't necessarily learned the same lesson.

Furthermore, failure opens doors that success might close. Artists and writers often produce their best work after periods of failure and rejection. Steve Jobs was fired from Apple, the company he co-founded, before later returning to transform it. Many successful entrepreneurs have failed multiple times before finding success. These failures weren't obstacles to overcome; they were part of the path to success. Without them, these people might never have developed the creativity, determination, or wisdom that led to their most meaningful achievements.

However, there's a legitimate counterargument: not all failure is valuable, and the romanticization of failure can be harmful. For someone struggling with poverty or discrimination, failure can have serious consequences. Missing school due to health issues doesn't teach resilience; it creates educational gaps. Failing to get a job when you need income doesn't develop character; it creates financial hardship. Additionally, research on "growth mindset" suggests that simply telling students that failure is good doesn't actually help them. What helps is support, resources, and genuine strategies for improvement. For some people, failure means not getting necessary help; for others, it means getting the support they need. The difference depends largely on their circumstances.

There's also a question of whose failure we're discussing. It's easy for already-successful people to extol the virtues of failure and frame their setbacks as meaningful learning experiences. But for someone without a safety net, failure might not be an opportunity; it might be catastrophic. The girl who can't afford to fail her college entrance exams experiences failure differently than the girl whose parents will pay for her to apply again. The person experiencing failure in a society that values them differently based on race or gender might interpret that failure differently than someone with systemic advantages.

The most honest answer might be that failure can be valuable, but only under certain conditions. Failure needs to be survivable—not so catastrophic that it destroys someone's life or future. Failure needs to be followed by opportunity for learning—not just punishment or dismissal. And failure needs to exist within a context where the person has some support and resources to recover. Under these conditions, failure becomes a powerful teacher. Without them, failure is simply loss.

This suggests that the real issue isn't whether failure is good or bad, but rather how we support people who experience it. A society that values failure as a learning opportunity should also ensure that failure isn't permanently destructive. We should celebrate resilience, but we should also build systems that allow people to fail and recover. We should teach the lessons failure offers, but we should also provide the resources and support that turn those lessons into growth rather than despair.

The value of failure, then, is not inherent. It emerges from the context in which failure occurs and the support available to those who fail. In a world with adequate support systems, failure becomes an invaluable teacher. In a world without such systems, failure is simply one more obstacle for those already struggling. The question isn't whether we should celebrate failure, but how we can create conditions where failure leads to learning rather than destruction.`,
    annotations: [
      {
        startIndex: 0,
        endIndex: 150,
        technique: 'Opening with a cultural observation and complex question',
        effect: 'Establishes that this is not a simple topic with one right answer',
      },
      {
        startIndex: 200,
        endIndex: 350,
        technique: 'Presenting the strongest version of one perspective',
        effect: 'The argument for failure\'s value is presented fully and fairly before being questioned',
      },
      {
        startIndex: 450,
        endIndex: 600,
        technique: 'Using concrete examples (Jobs, entrepreneurs) to support perspective',
        effect: 'Abstract ideas become real and memorable through specific examples',
      },
      {
        startIndex: 700,
        endIndex: 900,
        technique: 'Introducing counterargument with equal seriousness',
        effect: 'The other perspective isn\'t dismissed but treated as legitimate and important',
      },
      {
        startIndex: 1000,
        endIndex: 1200,
        technique: 'Addressing questions of equity and systemic advantage',
        effect: 'Elevates the discussion from individual psychology to social justice concerns',
      },
      {
        startIndex: 1400,
        endIndex: 1550,
        technique: 'Reframing the question rather than choosing sides',
        effect: 'Instead of deciding which perspective is right, the writer asks a better question',
      },
      {
        startIndex: 1700,
        endIndex: 1850,
        technique: 'Making conditions explicit that must be met for failure to be valuable',
        effect: 'Provides practical, testable conditions rather than abstract philosophizing',
      },
    ],
    teacherNotes: 'This discursive essay demonstrates sophisticated thinking about a complex issue. Rather than arguing for one position, it explores multiple perspectives and the conditions under which each might be valid. The writer presents the case for failure as valuable thoroughly, then complicates it by introducing legitimate counterarguments. Importantly, she doesn\'t dismiss either perspective but instead asks what conditions must exist for failure to be valuable. This is more mature than choosing sides. The introduction of equity and systemic advantage issues shows that the writer understands that abstract philosophical questions have real-world consequences. The conclusion doesn\'t settle the question; instead, it suggests a framework for thinking about it. This kind of nuanced, conditional thinking is what distinguishes excellent discursive writing. The tone is thoughtful and questioning rather than argumentative.',
    studentCheckpoints: [
      'Have you presented multiple perspectives fairly, not strawman versions?',
      'Do you explore the complexity of the issue, not just state multiple views?',
      'Have you considered who benefits from each perspective?',
      'Do you identify conditions or contexts that affect the validity of each perspective?',
      'Does your conclusion offer insight, even if not a definitive answer?',
    ],
  },
];
