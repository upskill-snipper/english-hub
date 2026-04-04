// =============================================================================
// Text Extracts Bank - Original texts for English teaching and analysis
// All texts are original, written for educational purposes by The English Hub
// =============================================================================

export interface TextExtract {
  id: string;
  title: string;
  author: string;
  yearGroup: 7 | 8 | 9 | 10 | 11;
  type: 'narrative' | 'descriptive' | 'non-fiction' | 'poetry';
  subType?: string;
  content: string;
  techniques: string[];
  suggestedQuestions: string[];
  modelAnalysis: string;
}

// =============================================================================
// NARRATIVE EXTRACTS (10)
// =============================================================================

const narrativeExtracts: TextExtract[] = [
  // --- Y7 Narrative (3) ---
  {
    id: 'narr-y7-01',
    title: 'The Last Day of Summer',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'narrative',
    subType: 'coming-of-age',
    content: `The garden smelled of cut grass and forgotten afternoons. Mia sat on the wooden swing, her trainers dragging two lines through the dust beneath her. Tomorrow, everything would change. New school. New uniform. New people who didn't know that she could name every bird in the hedgerow or that she'd once found a slow worm curled like a question mark under the compost bin.

Her little brother, Arun, burst through the back door with a football under his arm. "Come on, Mia! Last game before you're too grown up for me."

She wanted to say something clever, something that would make the moment stay. Instead, she just smiled and stood up, the swing creaking behind her like a door closing. They played until the sky turned the colour of peach skin, and the streetlights blinked on one by one, and their mother's voice carried across the lawn like a song they both knew by heart.

Mia caught the ball one final time and held it against her chest. The grass stains on her knees would wash out. She wasn't so sure about everything else.`,
    techniques: [
      'Sensory imagery (smell of cut grass)',
      'Simile (curled like a question mark, like a door closing, like a song)',
      'Symbolism (the swing, the closing door)',
      'Pathetic fallacy (sky turning peach, streetlights)',
      'First and third person contrast',
      'Short final sentence for impact',
      'Foreshadowing (tomorrow, everything would change)',
    ],
    suggestedQuestions: [
      'How does the writer use the garden setting to reflect Mia\'s emotions?',
      'What is the effect of the simile "like a door closing" in paragraph one?',
      'How does the writer create a sense of time passing in this extract?',
      'What do the grass stains symbolise in the final paragraph?',
      'How does the writer use Arun\'s dialogue to contrast with Mia\'s feelings?',
    ],
    modelAnalysis: `The writer creates a bittersweet atmosphere through carefully layered sensory imagery. The opening line, "The garden smelled of cut grass and forgotten afternoons," immediately establishes both a physical setting and an emotional tone -- the adjective "forgotten" personifies the afternoons, suggesting memories slipping away. The series of similes builds this sense of transition: the slow worm "curled like a question mark" subtly reflects Mia's own uncertainty, while the swing "creaking behind her like a door closing" symbolises the end of childhood. The writer's use of pathetic fallacy in the final paragraph -- the sky turning "the colour of peach skin" and streetlights blinking on -- mirrors the gentle but inevitable shift from day to night, childhood to adolescence. The final short sentence, with its contrast between washable grass stains and unwashable change, delivers an emotional punch through understatement.`,
  },
  {
    id: 'narr-y7-02',
    title: 'The Bridge',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'narrative',
    subType: 'friendship',
    content: `There was a bridge over the canal that nobody used any more. The paint was peeling off the railings in long, tired strips, and dandelions had pushed through every crack in the concrete. It was the kind of place adults walked past without seeing. But for Jaya and Sam, it was the centre of the world.

They met there every Saturday, rain or shine. Sam would bring biscuits stolen from the kitchen cupboard. Jaya would bring her sketchbook, its pages fat with drawings of dragons and castles and the view from the bridge itself: the slow green water, the shopping trolley half-sunk in the mud, the heron that stood on one leg like a grey statue.

One Saturday, Sam didn't come. Jaya waited for an hour, drawing the empty space beside her on the bench. She drew it carefully: the shape of where he usually sat, the ghost of his laugh still hanging in the air. The biscuits she'd brought herself sat untouched in her pocket, already crumbling.

When she got home, her mother told her that Sam's family had moved away. Just like that. No warning, no goodbye. Jaya closed her sketchbook and didn't open it again for a very long time.`,
    techniques: [
      'Personification (tired strips of paint)',
      'Symbolism (the bridge as connection)',
      'Contrast (adults vs children\'s perspective)',
      'Sensory detail (slow green water)',
      'Simile (heron like a grey statue)',
      'Metaphor (drawing the empty space / ghost of his laugh)',
      'Short sentences for emotional impact',
      'Circular structure (sketchbook opens and closes)',
    ],
    suggestedQuestions: [
      'How does the writer present the bridge as important to Jaya and Sam?',
      'What is the effect of the phrase "the ghost of his laugh still hanging in the air"?',
      'How does the writer use the sketchbook as a symbol throughout the extract?',
      'Why does the writer describe the biscuits as "already crumbling"?',
      'How does the final paragraph create a sense of loss?',
    ],
    modelAnalysis: `The writer uses the bridge as an extended symbol of friendship and connection throughout this extract. By describing it as a place "nobody used any more" with "peeling paint" and dandelions in the cracks, the writer creates an image of neglect that contrasts powerfully with its importance to the two children -- for them, it is "the centre of the world." This hyperbole emphasises how childhood friendship transforms ordinary places into extraordinary ones. The metaphor of Jaya drawing "the empty space beside her" is particularly effective: it transforms absence into a tangible thing, something that can be observed and recorded. The detail of the biscuits "already crumbling" in her pocket works on both literal and metaphorical levels -- like the friendship, they are breaking apart unseen. The final image of the closed sketchbook mirrors the bridge itself: a connection abandoned, a creative life paused by grief.`,
  },
  {
    id: 'narr-y7-03',
    title: 'Night Fishing',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'narrative',
    subType: 'family',
    content: `Dad said the best fish came out at night, when the world was quiet and the water forgot it was being watched. I didn't really believe him, but I liked the way he said it -- like he was letting me in on a secret that only fathers and sons were allowed to know.

We sat on the bank with our rods propped against forked sticks, a flask of tea between us. The lake was black and still, a mirror turned face-down. Somewhere across the water, an owl called out, and the sound travelled towards us slowly, as if it had to push through the dark.

"Patience," Dad whispered. "That's the real skill. Not the casting, not the tackle. Just the waiting."

I nodded, even though he couldn't see me. I was twelve years old and I thought patience was boring. But I didn't say that. I sat there with my dad in the cold and the quiet, and I listened to the water lapping at the edge of the world, and I tried -- I really tried -- to understand what he meant.

I think I understand it now. But he's not here to tell.`,
    techniques: [
      'First person retrospective narration',
      'Metaphor (mirror turned face-down)',
      'Personification (water forgot it was being watched)',
      'Sensory imagery (sound, sight, touch)',
      'Dialogue used sparingly for impact',
      'Dramatic irony / pathos in final line',
      'Shift in tense (past to present)',
      'Motif of patience and understanding',
    ],
    suggestedQuestions: [
      'How does the writer use the first person narrator to create an emotional connection with the reader?',
      'What is the effect of the metaphor "a mirror turned face-down"?',
      'How does the writer use the father\'s dialogue to develop his character?',
      'Why does the writer include the detail "even though he couldn\'t see me"?',
      'How does the final line change the meaning of the whole extract?',
    ],
    modelAnalysis: `This extract uses first person retrospective narration to create a powerful sense of loss that only fully reveals itself in the final line. The writer establishes an intimate, confessional tone from the opening -- the father's claim about fish is presented not as fact but as ritual, "a secret that only fathers and sons were allowed to know." The lake is rendered through striking metaphor: "a mirror turned face-down" suggests both the darkness of the water and something deliberately hidden, foreshadowing the hidden grief of the narrator. The personification of the owl's call having to "push through the dark" slows the pace, mirroring the patience the father advocates. The tense shift in the final line -- from past to present -- is devastating in its simplicity: "I think I understand it now. But he's not here to tell." The reader is forced to reinterpret every detail: the patience, the quiet, the darkness all become weighted with an adult grief that the twelve-year-old narrator could not yet comprehend.`,
  },

  // --- Y8 Narrative (4) ---
  {
    id: 'narr-y8-01',
    title: 'The Trial of Marcus Webb',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'narrative',
    subType: 'power-and-conflict',
    content: `The courtroom smelled of wood polish and fear. Marcus Webb stood in the dock with his hands clasped behind his back, his knuckles white as bone. He was seventeen years old and he had never been inside a court before, but he understood -- with a clarity that frightened him -- that every person in this room had already decided what he was.

The judge peered down from her raised bench like a bird examining something small and edible. Her wig sat slightly crooked, which might have been funny in another life. She shuffled her papers. The shuffle was a performance, Marcus realised. She already knew what was written there.

His solicitor leaned close. "Just tell the truth," she whispered.

But which truth? The truth where he was walking home from his cousin's house and two officers stopped him because he matched a description? The truth where "matched a description" meant young and Black and wearing a hoodie? The truth where he'd been polite, so polite his jaw ached from holding back, and they'd searched him anyway, and found nothing, and charged him with obstruction because he'd asked why?

Marcus looked at the jury. Twelve faces. Some sympathetic, some bored, some already looking at their watches. He took a breath that tasted of dust and somebody else's cologne, and he opened his mouth to tell the truth.

He just wasn't sure they were ready to hear it.`,
    techniques: [
      'Sensory imagery (smell of wood polish and fear)',
      'Simile (judge like a bird)',
      'Rhetorical questions (series of "which truth?")',
      'Irony (crooked wig, politeness leading to arrest)',
      'Power dynamics through spatial description',
      'Juxtaposition of formality and injustice',
      'Repetition of "truth"',
      'Ambiguous ending',
    ],
    suggestedQuestions: [
      'How does the writer present the power imbalance between Marcus and the court?',
      'What is the effect of the repeated rhetorical questions in paragraph four?',
      'How does the writer use irony to challenge the reader\'s expectations?',
      'Why does the writer describe the judge\'s wig as "slightly crooked"?',
      'How does the final line create ambiguity about justice?',
    ],
    modelAnalysis: `The writer constructs a searing critique of institutional power through precise physical and emotional detail. The courtroom is immediately established as a space of sensory oppression -- "wood polish and fear" yokes together the formal and the visceral, suggesting that fear is as embedded in the institution as its furniture. The spatial dynamics reinforce power: the judge peers "down" from her "raised bench," while Marcus stands below, his white knuckles the only visible sign of the turmoil within. The simile comparing the judge to "a bird examining something small and edible" is darkly effective, reducing the relationship to one of predator and prey. The rhetorical questions in paragraph four are the extract's emotional core: the anaphoric repetition of "The truth where" builds rhythmically, each iteration stripping away another layer of pretence until the systemic racism is laid bare. The final line's ambiguity -- "He just wasn't sure they were ready to hear it" -- leaves the reader with an uncomfortable question about whose responsibility truth-telling really is.`,
  },
  {
    id: 'narr-y8-02',
    title: 'The Wall',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'narrative',
    subType: 'conflict-and-division',
    content: `Before the wall, you could see the mountains. Grandmother said they were always there, blue and patient, like old friends waiting at the edge of town. Now the only thing you could see from the kitchen window was concrete: grey, flat, and ten metres high, with coils of wire along the top that caught the light like terrible jewellery.

They built it in three days. Soldiers with machines, engineers with blueprints. Nobody asked us. Nobody knocked on the door and said, "Excuse me, we're going to cut your world in half -- would you like a moment to prepare?" They just came, and the noise started, and when it stopped, everything on the other side had disappeared. My school. My best friend Layla's house. The bakery where Mr Karim gave us broken pastries for free.

Mother hung a curtain over the kitchen window so we wouldn't have to look at it. But that was worse somehow. At least the wall was honest. The curtain pretended there was nothing wrong.

I started drawing maps. Not real maps -- memory maps. I drew the streets I could no longer walk down, the corners I could no longer turn. I drew Layla's front door, painted the blue I remembered. I drew the mountains behind everything, because they were still there.

You just couldn't see them any more.`,
    techniques: [
      'Symbolism (the wall, the curtain, the mountains)',
      'Simile (mountains like old friends, wire like terrible jewellery)',
      'Contrast (before/after)',
      'List of three for emotional accumulation',
      'Personification (honest wall, pretending curtain)',
      'Irony (nobody asked)',
      'Motif of seeing and not seeing',
      'Child narrator perspective on political conflict',
    ],
    suggestedQuestions: [
      'How does the writer use the motif of sight throughout the extract?',
      'What is the effect of comparing the wall\'s wire to "terrible jewellery"?',
      'How does the child narrator\'s perspective affect the reader\'s response to the wall?',
      'Why does the narrator say the curtain was "worse" than the wall?',
      'How does the writer use maps and drawing to represent resistance?',
    ],
    modelAnalysis: `The writer uses the central symbol of the wall to explore themes of division, loss, and quiet resistance. The opening contrast between mountains -- described through the warm simile "like old friends waiting" -- and the brutal concrete establishes the extract's emotional geography. The oxymoronic simile "terrible jewellery" for the barbed wire is particularly effective: it forces together beauty and violence, suggesting the obscene way power decorates its own brutality. The child narrator's voice gives the political situation devastating simplicity: the imagined knock at the door and the sardonic "would you like a moment to prepare?" expose the absurdity of imposed borders through understatement. The personification of the wall as "honest" and the curtain as pretending is a sophisticated philosophical distinction delivered through a child's logic -- denial is worse than confrontation. The memory maps represent an act of creative resistance, preserving through art what politics has erased. The final line returns to the mountains, suggesting that what is permanent and true endures beyond what walls can hide.`,
  },
  {
    id: 'narr-y8-03',
    title: 'Captain',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'narrative',
    subType: 'power-and-leadership',
    content: `Rani hadn't wanted the captaincy. She'd watched the previous captain, Jade Chen, stride through the corridors like she owned them, and she'd thought: that's not me. Rani was the kind of person who apologised when someone else stepped on her foot.

But Jade had graduated, and the team had voted, and now here she was, standing in front of fourteen girls in muddy kits, trying to remember what leaders were supposed to sound like.

"Right," she said. Her voice came out smaller than she'd intended, a paper aeroplane when she'd wanted a rocket. She cleared her throat. "Right. We've lost the last three matches. I know that. You know that. Everyone in school knows that because Tyler Matthews won't shut up about it."

A ripple of laughter. Good. She could use that.

"Here's what I think. I think we've been playing like we're scared of winning. Like if we actually tried our hardest and still lost, that would be worse than not trying at all." She paused. The words were coming now, rising from somewhere she didn't know she had. "Well, I'd rather lose trying than win pretending. So today, we leave everything on that pitch. Every sprint, every tackle, every breath. And if we lose, we lose standing up."

Nobody spoke for a moment. Then Priya, the goalkeeper, started clapping. One by one, the others joined. The sound bounced off the changing room walls and filled the space, and Rani felt something shift inside her chest -- not confidence exactly, but something close.

Something that might grow into it.`,
    techniques: [
      'Character arc (reluctant to empowered)',
      'Simile (paper aeroplane vs rocket)',
      'Humour in dialogue (Tyler Matthews)',
      'Antithesis (lose trying vs win pretending)',
      'Tricolon (every sprint, every tackle, every breath)',
      'Internal monologue',
      'Building tension through speech',
      'Understatement in final line',
    ],
    suggestedQuestions: [
      'How does the writer show Rani\'s transformation throughout the extract?',
      'What is the effect of the simile comparing her voice to "a paper aeroplane"?',
      'How does the writer use Rani\'s speech to explore ideas about leadership?',
      'Why is the clapping scene effective in building the climax?',
      'How does the final line reflect the theme of growing confidence?',
    ],
    modelAnalysis: `The writer charts a convincing arc from self-doubt to emerging leadership through carefully controlled voice and imagery. The opening establishes Rani through contrast with her predecessor -- Jade "strode" while Rani "apologised" -- creating an underdog the reader immediately roots for. The simile of her voice as "a paper aeroplane when she'd wanted a rocket" is both comic and sympathetic, capturing the gap between aspiration and reality. The speech itself is structured rhetorically: the humour about Tyler Matthews builds rapport, the antithesis "lose trying" versus "win pretending" provides the philosophical core, and the tricolon "every sprint, every tackle, every breath" builds to a rousing climax. The writer avoids the cliche of instant transformation: Rani doesn't become confident -- she feels "something that might grow into it." This understatement is more powerful than triumph because it is honest; leadership, the writer suggests, is not a sudden arrival but a gradual becoming.`,
  },
  {
    id: 'narr-y8-04',
    title: 'Detention',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'narrative',
    subType: 'injustice-and-voice',
    content: `Mr Hargrave's classroom smelled of dry-wipe markers and disappointment. The clock above the whiteboard ticked with the enthusiasm of someone counting down to nothing. Ellis sat in the back row, arms folded, jaw set, performing the role of someone who didn't care.

He cared. He cared so much it burned.

The detention was for "disruptive behaviour." What that actually meant was that Ellis had corrected Mr Hargrave in front of the class. The teacher had said that the poem was about nature. Ellis had raised his hand -- he'd raised his hand, he hadn't shouted out -- and said, "I think it's about grief, sir. The flowers are dying, not growing."

Mr Hargrave had gone very still. The kind of still that adults go when a child has accidentally said something true. Then he'd smiled the way people smile when they're not smiling at all and said, "Thank you, Ellis. Detention. Three-thirty."

Now Ellis sat in the silence and thought about flowers and grief and the particular cruelty of being punished for being right. He pulled his notebook from his bag and began to write. Not the lines Mr Hargrave had set him -- "I will not disrupt the lesson" repeated fifty times -- but a poem of his own. About a boy in a room with a clock that didn't want to move. About a teacher who was afraid of students who could see.

He wrote until Mr Hargrave told him to stop. Then he closed the notebook and walked out into the corridor, where the light through the windows fell in long bright bars across the floor.

Even the school, he thought, couldn't help looking like a cage sometimes.`,
    techniques: [
      'Personification (clock, school)',
      'Irony (punished for being right)',
      'Contrast (performing vs feeling)',
      'Metaphor (burning, bars, cage)',
      'Meta-narrative (writing a poem within the story)',
      'Symbolism (light through windows as prison bars)',
      'Short paragraph for emphasis ("He cared. He cared so much it burned.")',
      'Subversion of authority',
    ],
    suggestedQuestions: [
      'How does the writer present the relationship between Ellis and Mr Hargrave?',
      'What is the effect of the short paragraph "He cared. He cared so much it burned"?',
      'How does the writer use the image of the cage in the final paragraph?',
      'Why does Ellis write his own poem instead of the lines he was given?',
      'How does the writer explore the theme of power through this detention scene?',
    ],
    modelAnalysis: `The writer uses the confined setting of a detention to explore broader themes of power, voice, and intellectual suppression. The opening personification -- the clock ticking "with the enthusiasm of someone counting down to nothing" -- immediately establishes the futility Ellis feels, while the smell of "dry-wipe markers and disappointment" blends the institutional with the emotional. The short paragraph "He cared. He cared so much it burned" is structurally crucial: its brevity after the longer opening paragraph creates a jolt, and the metaphor of burning suggests both passion and pain. The irony at the extract's heart -- that Ellis is punished for genuine literary insight -- is delivered without heavy-handedness; the teacher's smile "when they're not smiling at all" says everything about defensive authority. Ellis's decision to write his own poem instead of repetitive lines is an act of creative resistance, mirroring the extract's broader argument that genuine thought cannot be disciplined into silence. The final image of light falling "in long bright bars" transforms the mundane into the symbolic: the school becomes a cage, but crucially, Ellis can see this -- and seeing, the writer implies, is the first step to freedom.`,
  },

  // --- Y9 Narrative (3) ---
  {
    id: 'narr-y9-01',
    title: 'The Cartographer\'s Daughter',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'narrative',
    subType: 'identity-and-heritage',
    content: `My father mapped countries he would never visit. He sat in his office above the print shop on Bellingham Road, surrounded by the smell of ink and ambition, and he drew coastlines with a hand so steady it might have been mechanical. Contour lines flowed from his pen like the breathing of the earth itself, each one a whisper of altitude, a confession of terrain.

I used to watch him through the crack in the door, this small man with his enormous task -- to make the world flat, to fold it into something that could fit inside a pocket. He never looked up. The world demanded his complete attention, even in miniature.

When he died, I inherited three things: his reading glasses, his draughtsman's compass, and a map he had never finished. It was of our village -- not the village as it appeared on any official survey, but the village as he knew it. Here was the oak tree where he had proposed to my mother, marked with a tiny hand-drawn heart. Here was the stream where I had fallen in, aged six, and emerged covered in mud and outrage. Here was the bench outside the post office where old Mr Finch sat every morning, mapped as faithfully as any mountain range.

I understood then what my father had always known: that the most important places are the ones that don't appear on any official map. That love is a kind of cartography -- the patient, precise recording of what matters.

I picked up his pen. The ink was still wet.`,
    techniques: [
      'Extended metaphor (cartography as love/memory)',
      'Sensory imagery (ink, ambition)',
      'Simile (contour lines like breathing)',
      'Personification (world demanding attention)',
      'Symbolism (unfinished map, wet ink)',
      'Anaphora (Here was...)',
      'Contrast (official map vs personal map)',
      'Circular structure (father\'s pen to daughter\'s hand)',
      'Epiphany / moment of realisation',
    ],
    suggestedQuestions: [
      'How does the writer use the extended metaphor of cartography to explore themes of memory and love?',
      'What is the effect of the anaphoric "Here was" in paragraph three?',
      'How does the writer present the relationship between father and daughter?',
      'Why does the writer describe the ink as "still wet" in the final line?',
      'How does the contrast between official and personal maps develop the extract\'s themes?',
    ],
    modelAnalysis: `This extract sustains an extended metaphor of cartography as an act of love and memory with remarkable precision and emotional depth. The father is introduced through paradox -- a man who "mapped countries he would never visit" -- establishing the tension between the vastness of his professional work and the intimacy of his personal life. The simile comparing contour lines to "the breathing of the earth itself" elevates his craft to something almost sacred, while the personification of each line as "a whisper of altitude, a confession of terrain" gives the landscape a voice, suggesting that mapping is a form of listening. The unfinished map of the village is the extract's emotional centre: the anaphoric "Here was" creates a litany of memory, each location weighted not by geographical significance but by personal meaning. The oak tree, the stream, the bench -- these are mapped "as faithfully as any mountain range," and the democratising effect of this comparison argues that private love deserves the same rigour as public record. The final image -- "The ink was still wet" -- is both literally impossible (he has died) and metaphorically perfect: it suggests that his work continues through her, that love, like ink, can be taken up by another hand.`,
  },
  {
    id: 'narr-y9-02',
    title: 'Glass',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'narrative',
    subType: 'psychological-tension',
    content: `She had always been careful with glass. Not because she feared it breaking -- everything breaks eventually, her mother used to say, with the cheerful fatalism of someone who had broken most things in her life, including two marriages and a collarbone -- but because she respected the contradiction of it. Glass was solid and transparent at the same time. Strong enough to hold back weather, fragile enough to shatter at a whisper of force. It was, she thought, the most human of materials.

The window she stood before now was floor-to-ceiling, and through it she could see the city arranged below her like a circuit board: lights blinking, currents flowing, everything connected by invisible pathways she would never fully understand. She was on the thirty-second floor. The interview was in seven minutes.

She pressed her forehead against the glass and felt the cold transfer into her skull like a thought. Below, people moved in patterns that looked random but weren't. Everyone was going somewhere. Everyone had a reason.

She pulled back and looked at her reflection. The woman in the glass looked more composed than she felt -- hair neat, blazer pressed, expression carefully arranged into the universal face of competence. But the reflection was only surface. Behind it, the city kept moving. Behind her, the corridor stretched back towards the lift and the lobby and the street and the flat and the bed she hadn't slept in and the letter she hadn't opened and the phone call she hadn't returned.

The door opened. Someone said her name.

She turned away from the glass and walked towards it. Towards whatever came next.`,
    techniques: [
      'Extended metaphor (glass as human nature)',
      'Parenthetical voice / digression',
      'Simile (city like a circuit board, cold like a thought)',
      'Symbolism (reflection, surface vs depth)',
      'Polysyndeton (and the bed and the letter and the phone call)',
      'Juxtaposition (composed exterior vs inner turmoil)',
      'Ambiguity in final line',
      'Stream of consciousness elements',
    ],
    suggestedQuestions: [
      'How does the writer use glass as an extended metaphor throughout the extract?',
      'What is the effect of the polysyndeton in paragraph four?',
      'How does the writer create tension between surface and depth?',
      'What does the city represent in this extract?',
      'How does the parenthetical description of her mother develop the narrator\'s character?',
    ],
    modelAnalysis: `The writer uses glass as a sustained metaphor for the human condition -- simultaneously strong and fragile, transparent and reflective. The opening paragraph establishes this philosophical framework with intellectual precision, grounded by the parenthetical aside about the mother's "cheerful fatalism," which introduces both voice and backstory in a single clause. The observation that glass is "the most human of materials" becomes the lens through which the entire extract operates. The city viewed through the window -- compared to "a circuit board" -- suggests order beneath apparent chaos, mirroring the protagonist's own carefully maintained exterior. The polysyndeton in paragraph four is the extract's most powerful structural choice: "the bed she hadn't slept in and the letter she hadn't opened and the phone call she hadn't returned" builds through accumulation, each "and" adding another weight until the reader feels the full burden of her unaddressed life. The reflection in the glass becomes a double image -- the composed professional and the hidden self -- and the city moving "behind it" reminds us that the world does not pause for private crisis. The final line's ambiguity -- walking towards "whatever came next" -- refuses resolution, suggesting that courage is sometimes simply the act of continuing.`,
  },
  {
    id: 'narr-y9-03',
    title: 'The Translator',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'narrative',
    subType: 'language-and-identity',
    content: `Between my mother's Urdu and my father's silence, I learned to translate early. Not just words -- anyone can look up words -- but the spaces between them. The pause before my mother said "fine" that meant she was not fine. The way my father folded his newspaper when he was angry, each fold sharper than the last, until the pages were a tight, furious brick in his hands.

At school, I translated again. I converted myself from Amara-who-spoke-two-languages into Amara-who-spoke-like-everyone-else. I learned to flatten my vowels, to swallow the Urdu that rose in my throat when I was surprised or delighted or afraid. I performed fluency in a language that was only half mine, and nobody noticed the effort. That was the point.

My English teacher, Mrs Okonkwo, was the first person to notice. She read my essay about summer holidays -- the one where I described my grandmother's garden in Lahore, the roses she grew that smelled different from English roses, sweeter and sadder somehow -- and she wrote in the margin: "You have two voices. Use them both."

I stared at that comment for a long time. Two voices. I had spent years trying to sound like one person. The idea that I might be two -- that two might be more than one, not less -- sat in my chest like a seed that hadn't yet decided what to grow into.

I went home that evening and spoke to my mother in Urdu. She looked up from the stove, surprised, and then she smiled. It was the first real smile I had seen from her in months. And I thought: this is what translation really is. Not converting one thing into another. But letting both things exist at the same time.`,
    techniques: [
      'Extended metaphor (translation as identity)',
      'Sensory imagery (roses, newspaper)',
      'Simile (newspaper as furious brick, comment as seed)',
      'Code-switching as theme',
      'Contrast (two languages, two selves)',
      'Epiphany structure',
      'Symbolism (roses, voices)',
      'Metafictional element (writing within narrative)',
      'Redefinition of key term (translation)',
    ],
    suggestedQuestions: [
      'How does the writer use the concept of translation to explore identity?',
      'What is the effect of the simile "like a seed that hadn\'t yet decided what to grow into"?',
      'How does Mrs Okonkwo\'s comment act as a turning point in the narrative?',
      'How does the writer present the tension between assimilation and heritage?',
      'Why does the writer end by redefining translation? What effect does this have?',
    ],
    modelAnalysis: `This extract uses the concept of translation as an extended metaphor for the bilingual, bicultural experience, ultimately redefining the term to argue for multiplicity over assimilation. The opening immediately expands "translation" beyond language: Amara translates not words but "the spaces between them," and the visceral image of her father folding his newspaper into "a tight, furious brick" demonstrates how silence itself can be a language requiring interpretation. The school paragraphs chart a painful process of self-erasure -- Amara "swallows" her Urdu, converting herself into someone who "spoke like everyone else." The verb "performed" is crucial: fluency is presented not as natural ability but as labour, an act of constant self-suppression. Mrs Okonkwo's marginal comment -- "You have two voices. Use them both" -- functions as the narrative's pivot, and the simile of the idea as "a seed that hadn't yet decided what to grow into" captures beautifully the uncertain but hopeful quality of nascent self-acceptance. The final paragraph's redefinition -- translation as "letting both things exist at the same time" -- rejects the binary of either/or in favour of both/and, and the mother's smile confirms that authenticity, not performance, is the true act of connection.`,
  },
];

// =============================================================================
// DESCRIPTIVE EXTRACTS (10)
// =============================================================================

const descriptiveExtracts: TextExtract[] = [
  {
    id: 'desc-01',
    title: 'The Market at Dawn',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'descriptive',
    subType: 'setting',
    content: `The market woke before the city. In the grey hour between night and morning, when the streets were still empty and the traffic lights blinked their colours to no one, the stallholders arrived. They came with vans packed tight as puzzles, crates stacked against crates, tarpaulins rolled like sleeping bags for giants.

By six o'clock, the transformation was complete. Where there had been an empty car park, there was now a labyrinth of colour and noise. Pyramids of oranges glowed like small suns. Fish lay on beds of crushed ice, their scales catching the early light in flashes of silver and blue. A man with arms like hams arranged cuts of meat with the precision of a surgeon, each piece placed just so, each price tag handwritten in felt-tip capitals.

The smells arrived in layers: first coffee, bitter and urgent; then bread, warm and yeasty; then the green, sharp scent of herbs -- basil, coriander, mint -- each one a small explosion in the nostrils. Underneath it all, the permanent base note of the market: damp concrete and cardboard, the honest smell of work.

Voices overlapped like waves. A woman called her prices in a sing-song rhythm that hadn't changed in twenty years. Two men argued about the football in a language that was half English, half gesture. A child sat on a crate eating a doughnut with the concentration of a philosopher considering a difficult problem.

The market didn't care about elegance. It was loud and cluttered and slightly chaotic, and it smelled of a hundred things at once, and it was -- without question -- the most alive place in the city.`,
    techniques: [
      'Personification (market waking)',
      'Simile (oranges like small suns, man like surgeon, child like philosopher)',
      'Sensory layering (sight, smell, sound)',
      'Metaphor (labyrinth of colour)',
      'List of three with variation',
      'Contrast (empty car park vs market)',
      'Synaesthesia (bitter and urgent coffee)',
      'Polysyndeton in final paragraph',
    ],
    suggestedQuestions: [
      'How does the writer use sensory imagery to bring the market to life?',
      'What is the effect of describing the smells as arriving "in layers"?',
      'How does the writer create a sense of transformation in the opening paragraphs?',
      'Why does the writer compare the child to "a philosopher"?',
      'How does the final paragraph summarise the writer\'s attitude to the market?',
    ],
    modelAnalysis: `The writer creates a vivid, immersive portrait of a market through systematically layered sensory detail. The opening personification -- "The market woke before the city" -- immediately establishes the market as a living entity with its own rhythms, separate from and preceding the urban world around it. The transformation from empty car park to "labyrinth of colour and noise" is rendered through a series of precise visual images: oranges glowing "like small suns," fish scales catching light "in flashes of silver and blue." The simile comparing the butcher to a surgeon is particularly effective, elevating manual labour to the status of craft. The olfactory paragraph demonstrates sophisticated structural technique: smells are presented "in layers," each one described through synaesthesia -- coffee is "bitter and urgent," bread is "warm and yeasty" -- before the final "base note" of damp concrete grounds the description in honest materiality. The auditory paragraph shifts to human voices "overlapping like waves," and the comic simile of the child as a philosopher provides warmth and humour. The final paragraph's polysyndeton -- repeated "and" -- mimics the cluttered abundance of the market itself, building to the emphatic conclusion that chaos and aliveness are not opposites but synonyms.`,
  },
  {
    id: 'desc-02',
    title: 'Storm Over the Estuary',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'descriptive',
    subType: 'setting',
    content: `The sky did not darken so much as bruise. It began at the horizon -- a thickening, a gathering of purpose -- and then it spread inward, swallowing the blue in slow, deliberate mouthfuls. The estuary, which had been silver all morning, turned the colour of cold tea. Birds that had been circling lazily now flew in tight, panicked formations, as though pulled by invisible strings.

The wind arrived first: a low, insistent pressure against the skin, like a hand pressing you back. It carried the smell of ozone and salt and something older -- the metallic tang of electricity not yet discharged, potential not yet realised. Grass flattened against the earth in submission. A plastic bag cartwheeled across the mudflats with a freedom that felt mocking.

Then the rain. Not drops but sheets -- great vertical walls of water that erased the landscape as they advanced. The estuary disappeared. The far bank disappeared. The sky and the sea became the same grey nothing, and the world shrank to the three metres you could see in front of you and the sound -- that immense, percussive, unrelenting sound -- of water hitting water hitting earth hitting everything at once.

Lightning split the sky like a crack in porcelain, and for one frozen second the whole estuary was lit in white: every wave crest, every reed, every raindrop suspended in the flash. Then darkness again, deeper than before, as though the light had been stolen rather than simply ended.

The thunder came afterwards, rolling across the water like something heavy being dragged. It was the sound of the sky clearing its throat. It was the sound of the world reminding you how small you were.`,
    techniques: [
      'Personification (sky bruising, wind pressing, grass submitting)',
      'Metaphor (sky clearing its throat)',
      'Simile (lightning like a crack in porcelain)',
      'Pathetic fallacy',
      'Building tension through sentence structure',
      'Sensory overload',
      'Contrast (light and darkness)',
      'Semantic field of violence/power',
      'Repetition for rhythmic effect (water hitting water hitting earth)',
    ],
    suggestedQuestions: [
      'How does the writer build tension in the description of the storm\'s arrival?',
      'What is the effect of the personification of the sky and wind?',
      'How does the writer use sentence structure to mirror the storm\'s intensity?',
      'Why does the writer describe lightning as "a crack in porcelain"?',
      'How does the final paragraph use the storm to comment on human insignificance?',
    ],
    modelAnalysis: `The writer constructs the storm as a narrative in its own right, with rising action, climax, and denouement, using language that personifies nature as a force of terrifying agency. The opening metaphor of the sky "bruising" is visceral and precise -- it suggests not merely colour change but injury, violence done to the atmosphere itself. The wind is rendered through tactile imagery, "like a hand pressing you back," which makes the abstract physical and personal. The third paragraph achieves its power through structural mimicry: the repeated erasure -- "The estuary disappeared. The far bank disappeared" -- mirrors the rain's obliteration of the landscape, while the asyndetic list "water hitting water hitting earth hitting everything at once" removes punctuation to create the relentless, unpunctuated quality of the downpour itself. The lightning simile -- "a crack in porcelain" -- is strikingly original, suggesting both the visual shape of lightning and the fragility of the sky, as though the storm might break the world open. The final paragraph modulates into philosophical reflection: the thunder as "the sky clearing its throat" personifies the storm as a being preparing to speak, while the closing observation about human smallness positions the entire description as a meditation on scale and power.`,
  },
  {
    id: 'desc-03',
    title: 'The Forest Floor',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'descriptive',
    subType: 'setting',
    content: `Beneath the canopy, the light was green and gold and full of secrets. It fell through the leaves in thin columns, each one alive with tiny floating specks of dust and pollen that drifted like snow in slow motion. The air was cool and damp, and it tasted of earth -- not the dry, dusty earth of summer gardens, but the dark, rich earth of things growing and dying and growing again.

The trees stood like pillars in a cathedral nobody had built. Their trunks were wrapped in moss so thick and soft it looked like velvet, and their roots spread across the ground in tangled networks, rising and dipping like the backs of sea creatures frozen mid-swim. Between the roots, mushrooms grew in clusters: pale, fragile things that seemed to glow faintly in the dimness.

Everything was still, but nothing was silent. A woodpecker tapped somewhere high above, its rhythm steady as a clock. Leaves rustled without wind, disturbed by creatures too small or too quick to see. A stream murmured in the distance, carrying on a conversation with itself that had been going for centuries.

The forest floor was a patchwork of textures: the crunch of dry leaves underfoot, the softness of moss, the sudden wet surprise of a hidden puddle. It was a place that didn't hurry. Time moved differently here, measured not in hours but in the slow turn of seasons, the patient rise of trees towards the light.`,
    techniques: [
      'Colour imagery (green and gold)',
      'Simile (trees like pillars, roots like sea creatures)',
      'Personification (stream carrying a conversation)',
      'Sensory detail across all five senses',
      'Contrast (still but not silent)',
      'Metaphor (cathedral, patchwork)',
      'Listing for textural variety',
      'Cyclical imagery (growing, dying, growing)',
    ],
    suggestedQuestions: [
      'How does the writer use light to create atmosphere in the opening paragraph?',
      'What is the effect of comparing the trees to "pillars in a cathedral"?',
      'How does the writer show that the forest is alive, even when it seems still?',
      'Why does the writer describe time as moving "differently" in the forest?',
      'How does the writer appeal to different senses throughout the extract?',
    ],
    modelAnalysis: `The writer creates an atmosphere of quiet reverence through sensory detail that transforms a forest into a sacred space. The opening paragraph immediately establishes the forest's distinctive quality of light -- "green and gold and full of secrets" -- personifying the light itself as a keeper of mysteries. The simile of dust drifting "like snow in slow motion" slows the reader's perception, mirroring the altered pace of the forest. The cathedral metaphor in the second paragraph is sustained through vocabulary choice: "pillars," "velvet," the hushed tone of the description -- all evoke worship without stating it directly. The paradox "Everything was still, but nothing was silent" is the paragraph's structural pivot, leading into the auditory details: the woodpecker "steady as a clock" and the stream "carrying on a conversation with itself" personify the forest as a community of voices. The final paragraph's "patchwork of textures" appeals to touch, grounding the more ethereal earlier descriptions in physical reality. The closing meditation on time -- "measured not in hours but in the slow turn of seasons" -- elevates the description to something philosophical: the forest becomes a corrective to human urgency, a place where patience is the natural order.`,
  },
  {
    id: 'desc-04',
    title: 'The City After Midnight',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'descriptive',
    subType: 'setting',
    content: `After midnight, the city belongs to different people. The commuters have gone, the shoppers have gone, the tourists with their maps and their matching anoraks have folded themselves into hotels. What remains is a city stripped to its bones: the neon signs still burning but with nobody to read them, the fountains still running but with nobody to watch.

The streets take on a different texture in the dark. Pavements that were crowded and invisible by day become vast grey plains, their cracks and stains suddenly visible, like the lines on an old face. A kebab wrapper skitters across the road with the urgency of a creature fleeing danger. Puddles from an earlier rain reflect the streetlights in wobbly orange circles, turning the ground into a map of small, trapped suns.

Sound behaves differently too. A single pair of heels on concrete can be heard for three streets. Laughter from an open window falls through the air and lands like something dropped from a height. A taxi's engine idles at a rank, its low rumble the only heartbeat left in the city's chest.

In the doorway of a closed bookshop, a man sits with a sleeping bag pulled to his chin. His face is lit by the blue glow of a phone screen, and for a moment, scrolling through whatever he is scrolling through, he looks like anyone else. The city at night strips away the categories that daylight insists upon. Rich, poor. Busy, idle. Visible, invisible.

Here, in the dark, everyone is just a shape, moving through the same cold air.`,
    techniques: [
      'Personification (city stripped to its bones, city\'s chest)',
      'Simile (cracks like lines on a face, laughter lands like something dropped)',
      'Metaphor (trapped suns, heartbeat)',
      'Contrast (day vs night, visible vs invisible)',
      'Social commentary through description',
      'List of three / paired contrasts',
      'Sensory focus on sound in darkness',
      'Symbolism (neon signs with no readers)',
    ],
    suggestedQuestions: [
      'How does the writer use the contrast between day and night to explore ideas about the city?',
      'What is the effect of describing the taxi engine as "the only heartbeat left in the city\'s chest"?',
      'How does the writer use the man in the doorway to make a social comment?',
      'Why does the writer describe the puddles as "small, trapped suns"?',
      'How does the final paragraph change the tone of the extract?',
    ],
    modelAnalysis: `The writer transforms a nocturnal cityscape into a meditation on visibility, identity, and social division. The opening establishes the night city as a palimpsest: beneath the daytime crowds lies "a city stripped to its bones," a metaphor that suggests both vulnerability and essential truth. The personification of neon signs burning "with nobody to read them" creates an image of lonely persistence, while the simile comparing pavement cracks to "the lines on an old face" personifies the infrastructure itself as aged and weathered. Sound becomes the dominant sense in paragraph three, and the spatial metaphor of laughter "landing like something dropped" gives sound a physical weight, transforming the intangible into something almost violent. The passage about the man in the bookshop doorway shifts the register from atmospheric to political: the observation that he "looks like anyone else" in the phone's blue glow challenges the reader's assumptions, and the paired contrasts -- "Rich, poor. Busy, idle. Visible, invisible" -- expose the arbitrary nature of social categories. The final line's democratic vision -- "everyone is just a shape" -- argues that darkness is a kind of equality, even as it raises uncomfortable questions about what daylight chooses to see and ignore.`,
  },
  {
    id: 'desc-05',
    title: 'The Abandoned Fairground',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'descriptive',
    subType: 'setting',
    content: `The Ferris wheel had stopped turning three summers ago, but nobody had thought to take it down. It stood at the edge of the field like a question the town had forgotten to answer, its gondolas hanging at odd angles, rocking slightly in the wind like cradles for ghosts.

Weeds had claimed the bumper car arena with the quiet efficiency of an invading army. Dandelions burst through cracks in the concrete, and bindweed crawled up the metal barriers in spirals, as though trying to strangle the last evidence of fun. The cars themselves sat where they had stopped: some nose to nose, as if frozen in conversation; others turned sideways, facing walls they would never hit. Their once-bright paintwork had faded to the colours of old bruises -- yellows turning green, reds turning brown.

The ticket booth still had a sign: ADULTS $5, CHILDREN $3. But the glass was broken and the cash register was gone, and someone had spray-painted a crude heart on the counter. Even vandalism, it seemed, had a sentimental side.

The carousel horses were the strangest sight. Stripped of their poles, they lay on their sides in the grass like casualties on a battlefield. Their painted eyes stared at nothing. Their mouths were open in permanent, silent screams that had once been smiles. The gold leaf on their manes had tarnished to the colour of old teeth.

Somewhere underneath all the decay, you could still hear it: the ghost of music, the memory of laughter, the echo of a time when this place had been the brightest thing for miles. It was still there, buried under rust and weeds and silence.

You just had to listen very carefully.`,
    techniques: [
      'Personification throughout (weeds invading, cars in conversation)',
      'Simile (gondolas like cradles for ghosts, horses like casualties)',
      'Symbolism (decay of joy, stopped wheel)',
      'Gothic imagery',
      'Contrast (past vitality vs present decay)',
      'Irony (even vandalism had a sentimental side)',
      'Semantic field of death and warfare',
      'Synaesthesia (ghost of music)',
      'Direct address (you)',
    ],
    suggestedQuestions: [
      'How does the writer use personification to make the fairground seem alive?',
      'What is the effect of comparing the carousel horses to "casualties on a battlefield"?',
      'How does the writer create a sense of lost happiness throughout the extract?',
      'Why does the writer use the semantic field of warfare and violence?',
      'How does the final paragraph change the mood of the extract?',
    ],
    modelAnalysis: `The writer transforms an abandoned fairground into a Gothic meditation on the decay of joy, using sustained personification and a semantic field of warfare to create an atmosphere of beautiful desolation. The Ferris wheel as "a question the town had forgotten to answer" establishes the central tension: this is a place that exists in the gap between memory and neglect. The extended personification of the weeds as an "invading army" introduces the warfare imagery that culminates in the carousel horses lying "like casualties on a battlefield." This simile is the extract's most powerful image: it transforms children's entertainment into a site of violence, and the detail of mouths "open in permanent, silent screams that had once been smiles" creates a chilling inversion of the fairground's original purpose. The ironic aside about the spray-painted heart -- "Even vandalism, it seemed, had a sentimental side" -- provides a moment of dark humour that prevents the extract from becoming oppressively bleak. The final paragraphs shift into a more elegiac register: the synaesthetic "ghost of music" and "memory of laughter" suggest that joy, even when buried under "rust and weeds and silence," is never entirely extinguished. The direct address -- "You just had to listen very carefully" -- invites the reader into an act of imaginative recovery, transforming decay into an argument for the persistence of human happiness.`,
  },
  {
    id: 'desc-06',
    title: 'The School Kitchen',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'descriptive',
    subType: 'setting',
    content: `Behind the double doors that said STAFF ONLY, the school kitchen was a world of steam and steel and controlled chaos. Mrs Patel ruled it like a general rules a battlefield: with sharp commands, perfect timing, and the occasional terrifying silence that meant someone had made a mistake.

The ovens breathed heat in waves that hit you like walking into a wall. Trays of fish fingers lay in military rows, their golden coats glistening under the strip lights. Vats of baked beans bubbled like miniature volcanoes, and the mashed potato -- smooth, white, and endless -- was being scooped into serving dishes with an ice-cream scoop the size of a tennis ball.

The noise was constant: the clatter of metal on metal, the hiss of steam, the beeping of timers that nobody seemed to hear except Mrs Patel, who responded to each one like a conductor responding to her orchestra. She moved between the stations with a speed that seemed impossible for someone of her size, tasting, adjusting, nodding, frowning.

Above everything hung the smell. It was not one smell but many, layered like a cake: the bottom layer was hot oil, the middle was something vaguely oniony, and the top -- the sweet, comforting top -- was custard. School custard. Yellow as sunshine, thick as paint, and, for reasons nobody could explain, absolutely nothing like any custard made at home.

In forty minutes, three hundred children would file through the hatch. They would eat in twelve minutes and complain about everything. Mrs Patel would watch them through the serving window, arms folded, and she would smile. Because she knew something they didn't: that one day, years from now, school custard would be the thing they missed most.`,
    techniques: [
      'Simile (general on a battlefield, beans like volcanoes, custard thick as paint)',
      'Sensory imagery (heat, sound, smell)',
      'Personification (ovens breathed)',
      'Metaphor (smell layered like a cake)',
      'Humour and warmth',
      'List of three for rhythm',
      'Characterisation through action',
      'Irony (complaining about what they\'ll miss)',
    ],
    suggestedQuestions: [
      'How does the writer use humour to bring the kitchen to life?',
      'What is the effect of comparing Mrs Patel to "a general"?',
      'How does the writer appeal to different senses in this extract?',
      'Why does the writer describe the smell as "layered like a cake"?',
      'How does the final paragraph create a sense of nostalgia?',
    ],
    modelAnalysis: `The writer creates a warm, affectionate portrait of a school kitchen through vibrant sensory detail and gentle humour. The opening metaphor of Mrs Patel as a general immediately establishes her authority, while the detail of her "occasional terrifying silence" uses understatement to comic effect. The sensory layering is systematic: heat is described through tactile simile ("like walking into a wall"), sound through onomatopoeia ("clatter," "hiss," "beeping"), and smell through the extended metaphor of a cake, with each "layer" precisely identified. The characterisation of Mrs Patel is achieved entirely through action -- she tastes, adjusts, nods, frowns -- a technique that shows rather than tells her competence and care. The description of school custard is the extract's comic centrepiece: the tricolon "Yellow as sunshine, thick as paint, and absolutely nothing like any custard made at home" builds from visual simile through tactile comparison to an observation that captures a universal truth about institutional cooking. The final paragraph's shift to the future tense introduces nostalgia into a comic piece, and the irony that the most-complained-about element will become the most-missed transforms the extract from a humorous description into something unexpectedly moving.`,
  },
  {
    id: 'desc-07',
    title: 'The Harbour at Low Tide',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'descriptive',
    subType: 'setting',
    content: `At low tide, the harbour revealed its secrets. The water pulled back like a curtain, exposing a landscape that spent half its life hidden: dark mud studded with shells, ropes thick with seaweed hanging slack from the harbour wall, boats tilted on their keels like drunks leaning against lampposts.

The smell was extraordinary -- not unpleasant, but overwhelming. It was the smell of the sea's underside, of things usually submerged: rotting wood, salt-soaked rope, the sharp iodine tang of exposed kelp. Gulls picked through the mud with the careful precision of antique dealers examining a tray of jewellery, their heads tilting, their eyes bright with calculated greed.

Rock pools appeared like windows into another world. In each one, a miniature universe operated by its own rules: anemones pulsed like tiny hearts, crabs sidled beneath stones with the cautious shuffle of spies, and shrimp darted in transparent flashes, their bodies so clear you could see through them to the world behind.

An old fisherman sat on the harbour wall, mending a net with fingers so used to the work they moved without instruction from his brain. His face was the colour and texture of the harbour wall itself -- weathered, cracked, part of the landscape. He watched the tide the way a farmer watches the sky: not with anxiety, but with the deep, patient knowledge of someone whose life depends on understanding what comes next.

The tide would return. It always did. And with it, the harbour would close its secrets again, pulling the water over itself like a blanket, hiding everything it had shown.`,
    techniques: [
      'Simile (boats like drunks, gulls like antique dealers, crabs like spies)',
      'Personification (harbour revealing secrets, tide pulling back like a curtain)',
      'Sensory detail (smell, sight, touch)',
      'Metaphor (rock pools as windows, face as harbour wall)',
      'Circular structure (tide retreats and returns)',
      'Semantic field of concealment and revelation',
      'Characterisation through physical detail',
    ],
    suggestedQuestions: [
      'How does the writer use the idea of secrets and hidden things throughout the extract?',
      'What is the effect of comparing the gulls to "antique dealers"?',
      'How does the writer use the fisherman to connect humans with the natural world?',
      'Why does the writer describe the rock pools as "windows into another world"?',
      'How does the circular structure of the extract reflect the theme of tides?',
    ],
    modelAnalysis: `The writer structures the extract around a central metaphor of revelation and concealment, using the tide's retreat as an opportunity to examine what is normally hidden. The opening simile of water pulling back "like a curtain" frames the harbour as a stage, with low tide as the moment the performance pauses and the mechanisms become visible. The olfactory description is notably honest -- "not unpleasant, but overwhelming" -- and the catalogue of smells grounds the extract in physical reality. The simile comparing gulls to "antique dealers" is both precise and comic: the verb "examining" and the noun "jewellery" elevate the gulls' scavenging to something almost refined, while "calculated greed" adds a satirical edge. The rock pools paragraph employs a series of similes that personify marine life -- anemones as hearts, crabs as spies, shrimp as transparent flashes -- creating a sense of wonder appropriate to the "miniature universe" metaphor. The fisherman paragraph achieves characterisation through integration with setting: his face is literally described as being made of the same material as the harbour wall, suggesting a life so embedded in place that the boundary between person and landscape has dissolved. The circular closing -- the tide returning, the harbour "hiding everything it had shown" -- mirrors the natural cycle and leaves the reader with the satisfying sense that these revelations are temporary, that the harbour keeps its own counsel.`,
  },
  {
    id: 'desc-08',
    title: 'The Waiting Room',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'descriptive',
    subType: 'setting',
    content: `The waiting room existed outside of time. It had no windows, no clock, no indication of whether the world beyond its walls was experiencing morning or midnight. The fluorescent lights hummed at a frequency designed to make consciousness itself feel like an inconvenience.

The chairs were the colour of nothing -- a beige so neutral it seemed to have been chosen specifically to avoid provoking any response whatsoever. They were bolted to the floor in rows, as though the hospital feared its patients might rearrange the furniture in a desperate bid for individuality. Between every third chair, a small table held magazines from months ago, their covers promising happiness and weight loss and the ten secrets to a better life -- promises that felt particularly hollow in a room where people sat waiting to learn what was wrong with them.

A water cooler gurgled in the corner like a stomach digesting bad news. A vending machine offered chocolate bars and crisps behind glass, each item hanging from its metal coil like a prisoner on display. Someone had stuck a handwritten sign to it: OUT OF ORDER. Even the vending machine had given up.

The people. A man in a suit stared at his phone without scrolling, his thumb resting on the screen like a finger on a pulse that had stopped. A woman knitted with mechanical fury, her needles clicking a private morse code. A teenager slumped so low in his chair he was almost horizontal, his hood pulled over his face, a human announcement that he did not wish to be here.

Nobody spoke. Nobody needed to. The waiting room already knew everything there was to say.`,
    techniques: [
      'Personification (waiting room knowing, vending machine giving up)',
      'Symbolism (absence of windows, clocks)',
      'Simile (gurgling like a stomach, phone like a stopped pulse)',
      'Dark humour / irony',
      'Characterisation through single details',
      'Metaphor (morse code, prisoner)',
      'Existential atmosphere',
      'Semantic field of medical anxiety',
      'Satirical observation',
    ],
    suggestedQuestions: [
      'How does the writer create a sense of timelessness in the waiting room?',
      'What is the effect of the dark humour throughout the extract?',
      'How does the writer use objects (chairs, magazines, vending machine) to reflect the emotional state of the patients?',
      'Why does the writer describe each person through a single action or detail?',
      'How does the final line use personification to create a sense of unease?',
    ],
    modelAnalysis: `The writer transforms the mundane setting of a hospital waiting room into an existential landscape through precise observation and darkly comic personification. The opening declaration -- "The waiting room existed outside of time" -- immediately removes the space from the normal world, and the absence of windows and clocks reinforces this liminal quality. The description of the chairs as "the colour of nothing" is both funny and devastating: the beige represents institutional neutrality taken to its absurd conclusion, and the detail that they are bolted to the floor -- as though individuality is a threat -- introduces a Kafkaesque note of institutional absurdity. The magazines are described with savage irony: their promises of happiness feel "particularly hollow" in this context, and the juxtaposition exposes the gap between aspirational media and lived reality. Each person is captured through a single, precisely chosen detail: the man's thumb "like a finger on a pulse that had stopped" transforms phone use into a death image; the knitting woman's needles become "morse code," suggesting a message too private to speak; the teenager's horizontal slump is elevated to "a human announcement." The personification of the waiting room in the final line -- it "already knew everything there was to say" -- completes the transformation of setting into character, suggesting that the room itself has absorbed so much human anxiety that it has become sentient.`,
  },
  {
    id: 'desc-09',
    title: 'Snow on the Playing Field',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'descriptive',
    subType: 'setting',
    content: `Nobody had walked on it yet. That was the best part. The playing field lay under its white blanket like a page waiting to be written on, and every child pressed against the classroom windows knew that they would be the ones to write the first sentence.

The snow had come overnight, silently, while the town slept. It had covered everything equally -- the goalposts, the benches, the bins, the patch of mud by the changing rooms that was always mud, even in July. Now it was all the same: clean, white, untouched. The snow didn't care about the state of things underneath. It just covered them and made them new.

From the classroom, you could see the tracks where a fox had crossed the far corner, its paw prints a dotted line of perfect circles, as though it had been stamped by a machine. A robin sat on the crossbar of the nearest goal, a small red full stop against all that white.

Mr Davies was talking about fractions, but nobody was listening. Twenty-eight pairs of eyes were fixed on the field, calculating a different kind of mathematics: the exact depth of the snow, the optimal angle for a running slide, the aerodynamics of the perfect snowball.

The bell rang. For one held breath, nobody moved. Then the doors opened, and twenty-eight voices filled the air at once, and the field received its first footprints, and the white page began to fill with the beautiful, chaotic handwriting of children let loose.`,
    techniques: [
      'Extended metaphor (snow as blank page / writing)',
      'Personification (snow covering equally, field receiving)',
      'Simile (paw prints like machine stamps)',
      'Colour contrast (red robin against white)',
      'Humour (Mr Davies and fractions)',
      'Sensory detail (visual focus)',
      'Build-up and release of tension',
      'Collective perspective (all the children)',
    ],
    suggestedQuestions: [
      'How does the writer use the extended metaphor of writing to describe the snow?',
      'What is the effect of the robin described as "a small red full stop"?',
      'How does the writer create a sense of anticipation throughout the extract?',
      'Why does the writer include the detail about Mr Davies teaching fractions?',
      'How does the final sentence bring the extract to a satisfying conclusion?',
    ],
    modelAnalysis: `The writer sustains a charming extended metaphor comparing snow-covered ground to a blank page throughout the extract, creating a piece that celebrates both the natural world and the energy of childhood. The opening image -- the field "like a page waiting to be written on" -- establishes the central conceit, and the children become authors whose footprints are "sentences." The snow's democratic quality is observed with gentle philosophy: it covers "everything equally," including the perpetually muddy patch, offering a fresh start that ignores "the state of things underneath." The fox tracks as "a dotted line of perfect circles" and the robin as "a small red full stop against all that white" extend the writing metaphor into the animal world with visual precision. The humour of the fractions paragraph provides pacing relief and a knowing nod to every reader who has sat in a classroom staring out at snow: the children's "different kind of mathematics" is both comic and accurate. The final paragraph builds beautifully to its climax: the held breath, the opening doors, and the "beautiful, chaotic handwriting of children let loose" completes the metaphor with warmth and joy. The word "chaotic" is key -- it embraces disorder as a form of expression, suggesting that the most meaningful writing is often the most spontaneous.`,
  },
  {
    id: 'desc-10',
    title: 'Grandmother\'s Hands',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'descriptive',
    subType: 'person',
    content: `My grandmother's hands told the story her mouth never did. They were small hands, smaller than mine by the time I was twelve, but they carried a weight that had nothing to do with size. The knuckles were swollen and shiny, like stones polished smooth by a river, and the veins on their backs ran in blue tributaries beneath skin so thin it seemed translucent, a landscape of purple and ivory.

Those hands had kneaded dough at four in the morning in a bakery in Kingston, Jamaica, before she was old enough to see over the counter. They had gripped the railing of a ship crossing the Atlantic in 1962, when the sea was rough and the future was rougher. They had held my mother as a baby in a cold flat in Brixton, where the heating didn't work and the neighbours didn't speak, and they had held me thirty years later in the same way -- firm, warm, certain -- as though the world might try to take me, and they would simply refuse to let it.

She peeled oranges with those hands, the skin coming away in one long, continuous spiral that I thought was magic. She braided my hair with fingers that moved so fast they blurred, and she pressed her palm against my forehead when I was ill with a touch so cool and steady it was better than any medicine.

Now those hands rest in her lap, folded like two sleeping birds. They shake sometimes. They drop things. But when she reaches for my face and cups my cheek, the grip is the same as it always was.

Some hands remember what the body forgets.`,
    techniques: [
      'Extended metaphor (hands as narrative / autobiography)',
      'Simile (knuckles like polished stones, hands like sleeping birds)',
      'Sensory detail (touch dominant)',
      'Historical context woven into personal description',
      'Anaphora (They had...)',
      'Contrast (past strength vs present frailty)',
      'Symbolism (hands as love, resilience)',
      'Final aphoristic sentence',
    ],
    suggestedQuestions: [
      'How does the writer use the grandmother\'s hands to tell a wider story?',
      'What is the effect of the anaphoric "They had" in paragraph two?',
      'How does the writer weave historical context into a personal description?',
      'Why is the comparison of the hands to "two sleeping birds" effective?',
      'How does the final line encapsulate the extract\'s themes?',
    ],
    modelAnalysis: `The writer uses the grandmother's hands as a synecdoche for an entire life, creating a portrait that is simultaneously intimate and historical. The opening declaration that her hands "told the story her mouth never did" establishes a tension between speech and gesture, suggesting that the most important narratives are carried in the body rather than spoken aloud. The simile comparing knuckles to "stones polished smooth by a river" works on multiple levels: it suggests both the wearing effect of time and a kind of natural beauty produced by endurance. The anaphoric "They had" in the second paragraph creates a rhythmic accumulation of history -- from Kingston to the Atlantic to Brixton -- that locates personal experience within the larger narrative of Caribbean migration to Britain. The hands become a vessel for this history: they "gripped," "held," and "refused to let go," and the progression from dough to ship railing to baby to grandchild traces a journey from labour through displacement to love. The present-tense shift to hands that "shake" and "drop things" introduces vulnerability without sentimentality, and the observation that the grip remains "the same as it always was" argues for the persistence of love beyond physical decline. The final aphoristic line -- "Some hands remember what the body forgets" -- distils the entire extract into a single, resonant truth about embodied memory.`,
  },
];

// =============================================================================
// NON-FICTION EXTRACTS (10)
// =============================================================================

const nonFictionExtracts: TextExtract[] = [
  {
    id: 'nf-01',
    title: 'Speech: Why Libraries Matter',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'non-fiction',
    subType: 'speech-persuasion',
    content: `Ladies and gentlemen, I want to talk to you today about a building. Not a grand building. Not a building with marble columns or a famous architect's name attached to it. I want to talk about a small, slightly scruffy building on the corner of Park Street, with a leaking roof and carpet tiles from 1987. I want to talk about our library.

You might think a library is just a place where books live. And yes, books live there. But so do people. Our library is the only place in this town where you can sit for an entire afternoon without spending a single penny. Think about that. In a world that charges you for everything -- for parking, for coffee, for the privilege of existing in a warm room -- the library says: come in, sit down, stay as long as you like. No purchase necessary.

It is where the unemployed man in flat 4B teaches himself web design. It is where Mrs Chen reads newspapers from Hong Kong that help her feel less far from home. It is where a twelve-year-old girl called Priya discovered that she loved poetry, because a librarian noticed she was bored and handed her a book.

The council says the library costs too much to run. Let me tell you what costs more: a generation of children who never learn to love reading. A community that has nowhere to gather that doesn't require a debit card. A town that decides that knowledge is a luxury we can no longer afford.

I am not asking you to save a building. I am asking you to save what happens inside it.

Because what happens inside it is us.`,
    techniques: [
      'Rhetorical questions',
      'Anaphora (It is where...)',
      'Tricolon / list of three',
      'Direct address',
      'Antithesis',
      'Emotive language',
      'Contrast (grand building vs scruffy library)',
      'Short final sentence for impact',
      'Inclusive pronouns (us, our)',
    ],
    suggestedQuestions: [
      'How does the speaker use the opening description of the library to challenge expectations?',
      'What is the effect of the anaphoric "It is where" in paragraph three?',
      'How does the speaker use financial language to argue against the library closure?',
      'Why does the speaker end with the short sentence "Because what happens inside it is us"?',
      'How does the speaker balance logical and emotional arguments?',
    ],
    modelAnalysis: `The speaker employs a sophisticated rhetorical strategy that begins with deliberate anti-climax -- describing the library as "slightly scruffy" with "carpet tiles from 1987" -- before systematically building its case for the building's profound importance. This technique disarms the audience: by acknowledging the library's physical modesty, the speaker ensures that the subsequent arguments rest on substance rather than sentiment. The anaphoric "It is where" paragraph personalises the abstract concept of public service through three specific individuals -- the unemployed man, Mrs Chen, the girl called Priya -- each representing a different function of the library (education, connection, inspiration). The financial argument is turned against the council with rhetorical force: the tricolon "a generation... a community... a town" escalates from individual to collective loss, while the phrase "knowledge is a luxury" exposes the absurdity of the council's position through ironic restatement. The penultimate sentence -- "I am not asking you to save a building" -- uses antithesis to reframe the debate entirely: it is not about bricks but about human potential. The final monosyllabic sentence, "Because what happens inside it is us," achieves maximum emotional impact through maximum brevity, and the pronoun "us" transforms the audience from spectators into stakeholders.`,
  },
  {
    id: 'nf-02',
    title: 'Article: The Problem with School Uniforms',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'non-fiction',
    subType: 'article-argument',
    content: `Every September, the same ritual plays out in households across the country. Parents queue in overheated shops, armed with name tags and iron-on labels, to buy clothes their children do not want to wear. The school uniform industry is worth an estimated three billion pounds in the UK alone. That is three billion pounds spent on blazers that will be outgrown before Christmas.

Supporters of school uniforms argue that they create equality. "When everyone wears the same thing," they say, "nobody is judged by their clothes." This sounds reasonable until you look more closely. The child in the brand-new blazer from the official supplier and the child in the second-hand one from the charity shop are not wearing the same thing at all. Uniforms don't eliminate inequality; they just give it a dress code.

There is also the question of self-expression. Adolescence is the period when young people are working out who they are. Clothing is one of the most basic ways we communicate identity. Telling a teenager they cannot express themselves through what they wear is a bit like telling a painter they can only use grey.

However, it would be dishonest to pretend uniforms have no benefits. They remove the morning argument about what to wear. They create a sense of belonging. They make school photographs look orderly, which is more than can be said for the students themselves.

The solution, perhaps, is not to abolish uniforms but to rethink them. A comfortable, affordable, gender-neutral uniform that allows some personal touches -- a badge, a headscarf, a pair of trainers in any colour -- would respect both the school's need for identity and the student's need for individuality.

Because identity and individuality are not the same thing. And a good school should have room for both.`,
    techniques: [
      'Statistics for impact (three billion pounds)',
      'Counter-argument acknowledged and rebutted',
      'Rhetorical techniques (tricolon, direct address)',
      'Humour (school photographs)',
      'Simile (painter using only grey)',
      'Balanced argument structure',
      'Short sentences for emphasis',
      'Anecdotal opening',
    ],
    suggestedQuestions: [
      'How does the writer use the opening paragraph to engage the reader?',
      'What is the effect of the simile comparing self-expression to painting?',
      'How does the writer balance both sides of the argument?',
      'Why does the writer use humour in paragraph four?',
      'How does the final paragraph offer a compromise? Is it effective?',
    ],
    modelAnalysis: `The writer constructs a balanced argument that ultimately advocates for reform rather than abolition, using a combination of statistical evidence, logical reasoning, and strategic humour. The opening paints a vivid, relatable scene -- parents in "overheated shops" -- before deploying the statistic of three billion pounds, which transforms a domestic irritation into an economic argument. The rebuttal of the equality claim is executed with precision: the writer acknowledges the opposing view in its own words before dismantling it with the image of brand-new versus second-hand blazers. The epigram "Uniforms don't eliminate inequality; they just give it a dress code" uses antithesis to devastating effect. The simile comparing suppressed self-expression to "telling a painter they can only use grey" makes an abstract argument concrete and accessible. The writer's willingness to concede benefits in paragraph four -- and to do so with humour about school photographs -- demonstrates intellectual honesty and prevents the piece from reading as one-sided polemic. The proposed compromise is practical and specific, and the final distinction between "identity" and "individuality" provides a philosophical framework that elevates the argument beyond clothing into questions about education's purpose.`,
  },
  {
    id: 'nf-03',
    title: 'Letter: To the Head Teacher',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'non-fiction',
    subType: 'letter-formal',
    content: `Dear Mrs Patterson,

I am writing to express my concern about the decision to remove the Year 9 art programme from next year's curriculum. I understand that the school faces budgetary pressures and that difficult choices must be made, but I believe this particular decision will cause lasting damage -- not just to the students who will miss out, but to the culture of the school itself.

Art is not a luxury. I know this because I was once a student at this school, and it was in Mr Greenwood's art room that I first understood what it meant to think for myself. I was not academic. I struggled with maths and found science bewildering. But when Mr Greenwood gave me a piece of charcoal and said, "Draw what you see," something shifted. For the first time, I wasn't being asked to find the right answer. I was being asked to look.

I am not suggesting that art is more important than other subjects. But I am suggesting that it does something no other subject can: it teaches students that their perspective matters. In a world that increasingly asks young people to follow instructions, fill in bubbles, and produce measurable outcomes, art says: what do you think? What do you feel? What do you notice that nobody else does?

You may argue that art can continue as an extracurricular activity. But we both know that "extracurricular" is a polite word for "optional," and "optional" is a polite word for "not valued." When we remove a subject from the timetable, we send a message. The message we would be sending is: your creativity does not count.

I urge you to reconsider. Not for sentimental reasons, but for practical ones. The world does not need more people who can pass exams. It needs people who can look at problems and imagine solutions that don't exist yet.

That is what art teaches. And it is not something we can afford to lose.

Yours sincerely,
A Former Student`,
    techniques: [
      'Formal register / letter conventions',
      'Personal anecdote as evidence',
      'Rhetorical questions',
      'Antithesis (luxury vs necessity)',
      'Counter-argument addressed',
      'Emotive language balanced with logic',
      'Inclusive pronouns (we)',
      'Repetition for emphasis (optional / not valued)',
      'Appeal to ethos (former student)',
    ],
    suggestedQuestions: [
      'How does the writer use their personal experience to strengthen the argument?',
      'What is the effect of redefining "extracurricular" as "not valued"?',
      'How does the writer balance emotion and logic throughout the letter?',
      'Why does the writer address Mrs Patterson\'s likely counter-arguments?',
      'How does the final paragraph make a practical case for art education?',
    ],
    modelAnalysis: `The writer constructs a persuasive formal letter that balances personal testimony with broader philosophical argument, maintaining a respectful tone while delivering a forceful challenge. The opening paragraph demonstrates strategic concession -- acknowledging "budgetary pressures" and "difficult choices" -- before positioning the art programme's removal as a deeper threat to "the culture of the school itself." The personal anecdote in paragraph two is carefully chosen: by presenting themselves as someone who "struggled" academically, the writer embodies the argument that art reaches students other subjects cannot. The pivotal moment -- Mr Greenwood saying "Draw what you see" -- is quoted directly, giving it the weight of remembered speech. The rhetorical questions in paragraph three -- "what do you think? What do you feel?" -- articulate art's unique pedagogical contribution. The writer's most effective rhetorical move is the redefinition of "extracurricular" through a chain of euphemism: "extracurricular" becomes "optional" becomes "not valued," each step stripping away polite language to expose uncomfortable truth. The closing argument is shrewdly practical rather than sentimental: the world needs people who can "imagine solutions that don't exist yet." This reframing positions art not as indulgence but as innovation, meeting the school's likely utilitarian objections on their own terms.`,
  },
  {
    id: 'nf-04',
    title: 'Report: Screen Time and Sleep',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'non-fiction',
    subType: 'report-information',
    content: `Introduction

This report examines the relationship between screen time and sleep quality among secondary school students aged 11-16. It draws on a survey of 450 students conducted across three schools, alongside existing research from the National Sleep Foundation and the Royal College of Paediatrics.

Key Findings

The survey revealed that 78% of students use a screen within thirty minutes of going to bed. Of these, 62% reported difficulty falling asleep, compared to just 23% of those who stopped using screens at least one hour before bedtime. The correlation is striking, though it is important to note that correlation does not equal causation: students who stay up late on screens may also consume more caffeine, exercise less, or experience higher levels of stress.

The type of screen activity matters. Passive consumption -- watching videos, scrolling through social media -- was associated with poorer sleep quality than active use such as video calling friends or playing collaborative games. This challenges the assumption that all screen time is equally harmful.

The Impact on Learning

Students who reported fewer than seven hours of sleep per night were three times more likely to describe themselves as "unable to concentrate" in morning lessons. Teachers in the survey noted that Monday mornings were particularly affected, suggesting that weekend screen habits carry consequences into the school week.

Recommendations

Based on these findings, the report recommends three practical steps. First, schools should educate students about sleep hygiene as part of the PSHE curriculum, focusing on evidence rather than fear. Second, families should consider establishing screen-free periods rather than outright bans, which research suggests are counterproductive with teenagers. Third, further research is needed into the differential effects of various types of screen use, as current guidance does not adequately distinguish between passive and active engagement.

It is not screens themselves that are the enemy. It is the absence of boundaries.`,
    techniques: [
      'Formal/impersonal register',
      'Statistics as evidence',
      'Hedging language (correlation vs causation)',
      'Structured with subheadings',
      'Balanced and measured tone',
      'Counter-argument (not all screen time equal)',
      'Recommendations with justification',
      'Concluding epigram',
    ],
    suggestedQuestions: [
      'How does the writer use statistics to support the report\'s findings?',
      'Why does the writer distinguish between correlation and causation?',
      'How does the report challenge common assumptions about screen time?',
      'What is the effect of the formal, impersonal register?',
      'How does the final sentence summarise the report\'s position?',
    ],
    modelAnalysis: `The writer demonstrates the conventions of informative report writing while maintaining an analytical voice that avoids the sensationalism typical of media coverage of screen time. The statistical evidence is presented with appropriate hedging: the acknowledgment that "correlation does not equal causation" demonstrates intellectual rigour and models the kind of critical thinking the report implicitly advocates. The distinction between passive and active screen use is the report's most significant finding, and the writer presents it as a challenge to received wisdom -- "This challenges the assumption that all screen time is equally harmful" -- thereby positioning the report as contributing new insight rather than repeating familiar warnings. The recommendations are practical and evidence-based: the suggestion of "screen-free periods rather than outright bans" acknowledges teenage psychology, and the call for further research demonstrates appropriate humility about the limits of current knowledge. The formal register throughout -- third person, passive constructions, subheadings -- establishes authority and objectivity. The concluding epigram, "It is not screens themselves that are the enemy. It is the absence of boundaries," shifts momentarily into a more personal register, providing a memorable summation that reframes the entire debate.`,
  },
  {
    id: 'nf-05',
    title: 'Speech: What Does It Mean to Belong?',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'non-fiction',
    subType: 'speech-reflective',
    content: `I have been asked to talk about belonging. And the first thing I want to say is: I don't think I know what it means. Not really. Not in the way that people who write greeting cards seem to know what it means. Home is where the heart is. Bloom where you're planted. These are lovely sentiments, but they assume that belonging is simple. That you arrive somewhere, and you fit, and that's that.

For some people, belonging is a place. A street, a postcode, a particular view from a particular window. My grandmother belonged to a village in Gujarat that she hadn't visited in forty years, but she could still draw its map from memory, every lane and temple and well. The place had changed. She had changed. But the belonging hadn't.

For others, it's a language. Not just the words, but the sounds between the words. The way your name sounds in the mouth of someone who grew up speaking the same tongue as you. I have two names: the one my teachers use, which is an approximation, and the one my family uses, which is the real thing. I belong to the second one.

And for some, belonging is not a place or a language but a feeling. The moment when you walk into a room and your shoulders drop. When you stop performing. When someone says, "You don't have to explain" -- and they mean it.

I think belonging is dangerous when it becomes exclusive. When it draws a circle and says: you're in, you're out. When it becomes something you have to earn rather than something you're allowed to feel.

But I also think it is necessary. Because to belong nowhere is to carry a weight that never quite puts itself down. And everyone, sooner or later, needs to put something down.

So perhaps belonging is not a destination. Perhaps it is a practice. Something you do, every day, with the people and places you choose. Not a circle drawn around you, but a hand reaching out.`,
    techniques: [
      'Direct address and personal voice',
      'Anecdote (grandmother, two names)',
      'Contrast (greeting card vs reality)',
      'Metaphor (circle, weight, hand reaching out)',
      'Rhetorical structure (definition, complication, resolution)',
      'Short sentences for emphasis',
      'Repetition (For some... For others...)',
      'Philosophical register',
      'Cultural specificity (Gujarat, two names)',
    ],
    suggestedQuestions: [
      'How does the speaker challenge conventional ideas about belonging?',
      'What is the effect of the anecdote about the grandmother and the village?',
      'How does the speaker use the motif of names to explore identity?',
      'Why does the speaker say belonging is "dangerous" as well as "necessary"?',
      'How does the final paragraph redefine belonging? Is this effective?',
    ],
    modelAnalysis: `The speaker constructs a sophisticated meditation on belonging that moves from personal uncertainty through cultural specificity to philosophical redefinition. The opening admission -- "I don't think I know what it means" -- is strategically disarming, rejecting the false certainty of greeting-card wisdom and establishing the speaker as someone who will think rather than preach. The anaphoric "For some... For others..." structure in the middle paragraphs presents belonging as inherently plural, resisting any single definition. The grandmother's village in Gujarat is described with tender precision: the detail that she could "draw its map from memory" while both she and the village had changed argues for a belonging that transcends physical presence. The passage about names is particularly resonant: the distinction between "an approximation" and "the real thing" captures, in miniature, the bilingual experience of moving between public and private identities. The speech's most intellectually ambitious move is the paragraph on belonging's danger -- "when it draws a circle and says: you're in, you're out" -- which acknowledges that the same impulse that creates community can also create exclusion. The closing metaphor, redefining belonging as "not a circle drawn around you, but a hand reaching out," resolves this tension by transforming belonging from a boundary into a gesture, from a noun into a verb, from something you have into something you do.`,
  },
  {
    id: 'nf-06',
    title: 'Article: The Case for Walking',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'non-fiction',
    subType: 'article-persuasion',
    content: `We have forgotten how to walk. Not literally, of course -- our legs still work, our feet still know the drill. But somewhere between the invention of the car and the arrival of the electric scooter, we decided that walking was too slow, too boring, and too much like effort.

This is a mistake. Walking is the most underrated activity in human history.

Consider the health benefits. A brisk thirty-minute walk, five times a week, reduces the risk of heart disease by 19%. It strengthens bones, improves sleep, and boosts mood. It does all of this without a gym membership, without special equipment, and without the particular humiliation of trying to use a rowing machine in public.

But walking is not just exercise. It is thinking time. Some of the greatest ideas in history arrived on foot. Darwin walked his "thinking path" every morning. Beethoven wandered through Vienna's streets, composing in his head. You may not be Darwin or Beethoven, but the principle holds: when your feet move, your brain moves too.

Walking also reconnects us with our surroundings. In a car, the world is a blur of windscreens and traffic lights. On foot, you notice things: the foxgloves growing through a fence, the smell of rain on warm concrete, the neighbour's cat sitting on a wall with the expression of someone who knows exactly how important they are.

The objections are predictable. "It takes too long." So does sitting in traffic. "It's raining." Buy an umbrella. "I haven't got time." You have exactly as much time as Darwin had. He just chose to spend some of it walking.

So here is my proposal. Tomorrow morning, leave ten minutes earlier than usual. Walk to the thing you would normally drive to. Notice what you notice. Think what you think.

I promise you, the world looks different at three miles per hour.`,
    techniques: [
      'Direct address (you, we)',
      'Statistics (19% reduction)',
      'Humour (rowing machine, cat)',
      'Historical references as evidence',
      'Rhetorical questions / objection and rebuttal',
      'Sensory imagery',
      'Short sentences for emphasis',
      'Inclusive imperative (walk, notice, think)',
      'Conversational tone',
    ],
    suggestedQuestions: [
      'How does the writer use humour to make the argument more persuasive?',
      'What is the effect of including Darwin and Beethoven as examples?',
      'How does the writer address and dismiss counter-arguments?',
      'Why does the writer describe what you notice while walking?',
      'How does the final line provide an effective conclusion?',
    ],
    modelAnalysis: `The writer deploys a conversational, witty tone to argue for walking, combining statistical evidence with personal observation and historical reference to create a persuasive piece that never feels preachy. The opening paradox -- "We have forgotten how to walk" -- is immediately qualified with "Not literally, of course," establishing the writer's characteristic blend of provocation and self-aware humour. The health benefits paragraph uses the statistical anchor of 19% risk reduction before undercutting its own seriousness with the aside about rowing machines, a technique that maintains the reader's trust by refusing to be earnest for too long. The reference to Darwin and Beethoven elevates walking from mundane exercise to intellectual practice, and the inclusive caveat "You may not be Darwin or Beethoven" prevents the examples from feeling elitist. The sensory paragraph is the extract's lyrical centre: the detail of the neighbour's cat with the expression of "someone who knows exactly how important they are" is comic precision that demonstrates what walking makes possible -- the unhurried attention to detail. The objection-rebuttal structure in paragraph six mimics conversation, and the demolition of each objection in a single sentence creates satisfying rhetorical rhythm. The closing imperative -- "Walk... Notice... Think" -- distils the argument into three verbs, and the final line's image of "three miles per hour" makes speed literal, suggesting that slowing down is itself a form of revelation.`,
  },
  {
    id: 'nf-07',
    title: 'Letter: Dear Future Self',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'non-fiction',
    subType: 'letter-informal',
    content: `Dear Future Me,

I am writing this on a Tuesday in October. It is raining. I am supposed to be doing homework but I am writing to you instead, which I think counts as a kind of homework for life.

Here is what I want you to remember.

You are thirteen years old. You are worried about approximately nine hundred things, most of which will turn out not to matter. You are worried about the science test on Friday. You are worried about whether Kai is still your friend or just someone who sits near you. You are worried about the spot on your chin that feels like it has its own postcode.

But you are also happy, in the way that thirteen-year-olds are happy: fiercely, suddenly, and for no particular reason. Yesterday you laughed so hard at lunch that milk came out of your nose, and you were embarrassed for about three seconds and then you laughed harder. You can still do a cartwheel. You still believe that things will get better, which is either the best or the stupidest thing about being thirteen.

I don't know what your life looks like now. I hope you are doing something that matters to you. I hope you are kind. I hope you still find things funny, even the ones that aren't supposed to be. And I hope that when you read this, you remember what it felt like to be me -- not with pity, but with tenderness. Because I am doing my best, and I think that should count for something.

Also, if you haven't learned to cook yet, please do. Mum won't be making your packed lunches forever.

Yours, from the past,
You`,
    techniques: [
      'Informal/personal register',
      'Humour (spot with its own postcode, milk incident)',
      'Anaphora (You are worried about...)',
      'Direct address to self',
      'Contrast (worry vs joy)',
      'Short sentences for emphasis',
      'Epistolary form',
      'Tonal shift (humour to sincerity)',
      'Self-aware / metacognitive voice',
    ],
    suggestedQuestions: [
      'How does the writer create an authentic teenage voice?',
      'What is the effect of listing the narrator\'s worries?',
      'How does the writer balance humour and sincerity?',
      'Why does the letter end with a joke about cooking?',
      'How does the form of a letter to the future self add to the extract\'s effect?',
    ],
    modelAnalysis: `The writer captures an authentic teenage voice through a combination of comic observation, emotional honesty, and structural sophistication. The opening immediately establishes the writer's personality: the aside that writing to one's future self "counts as a kind of homework for life" demonstrates a playful, philosophical intelligence. The anaphoric "You are worried about" in paragraph three builds from the legitimate (a science test) through the social (Kai's friendship) to the comic (a spot with "its own postcode"), mimicking the undiscriminating nature of adolescent anxiety. The paragraph about happiness is equally precise: the adverbs "fiercely, suddenly, and for no particular reason" capture the volatility of teenage emotion, and the milk-out-of-nose anecdote is both comic and tender. The letter's emotional core is paragraph six, where the shift from humour to sincerity is signalled by the anaphoric "I hope": the request to be remembered "not with pity, but with tenderness" is remarkably mature, and the declaration "I am doing my best, and I think that should count for something" is quietly devastating. The return to humour with the cooking joke prevents the piece from ending in sentimentality, maintaining the tonal balance that makes the voice feel genuine. The sign-off -- "Yours, from the past, / You" -- is both playful and poignant, collapsing the distance between present and future self.`,
  },
  {
    id: 'nf-08',
    title: 'Article: Fast Fashion and the Planet',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'non-fiction',
    subType: 'article-argument',
    content: `The dress costs four pounds. Four pounds. You could not buy a sandwich in some parts of London for four pounds, but you can buy a dress -- with sleeves and a zip and a pattern -- for the price of a mediocre latte. Something, somewhere, has gone very wrong.

The fast fashion industry produces approximately 100 billion garments every year. If that number seems abstract, consider this: it is roughly twelve items of clothing for every person on the planet, including the ones who cannot afford shoes. Most of these garments will be worn fewer than ten times. Many will end up in landfill within a year, where the synthetic fibres they are made from will take up to 200 years to decompose. We are, in effect, burying our clothes and asking our great-great-great-grandchildren to deal with the consequences.

The human cost is equally staggering. In factories across Southeast Asia, garment workers -- predominantly women -- earn as little as three dollars a day to produce the clothes that fill our high street rails. The four-pound dress did not appear by magic. Its price tag is only possible because someone, somewhere, is being paid almost nothing to make it.

There is a counter-argument, and it deserves to be heard. Fast fashion democratises style. It allows people on low incomes to participate in trends that were once reserved for the wealthy. Dismissing affordable clothing as inherently immoral risks ignoring the economic realities of millions of consumers who cannot afford ethical alternatives.

But this argument, however valid, should not be used as a shield against accountability. The responsibility for change does not lie with the consumer who buys the four-pound dress because it is all she can afford. It lies with the corporations that have built a business model on exploitation and environmental destruction, and with the governments that allow them to do so.

The question is not whether we can afford ethical fashion. It is whether we can afford anything else.`,
    techniques: [
      'Shocking opening (four-pound dress)',
      'Statistics deployed strategically',
      'Direct address (we, you)',
      'Counter-argument fully acknowledged',
      'Emotive language balanced with evidence',
      'Rhetorical question in conclusion',
      'Antithesis',
      'Shift of responsibility (consumer to corporation)',
      'Repetition for emphasis (four pounds)',
    ],
    suggestedQuestions: [
      'How does the writer use the price of the dress as a recurring motif?',
      'What is the effect of the statistics in paragraph two?',
      'How does the writer handle the counter-argument about affordability?',
      'Why does the writer shift responsibility from consumers to corporations?',
      'How does the final rhetorical question reinforce the writer\'s argument?',
    ],
    modelAnalysis: `The writer constructs a rigorous argument against fast fashion while demonstrating the intellectual honesty to engage seriously with its strongest counter-argument. The opening is calibrated for maximum impact: the repetition of "Four pounds" and the comparison to a sandwich and a latte make the price viscerally comprehensible, while "Something, somewhere, has gone very wrong" delivers its verdict with understated authority. The statistics in paragraph two are contextualised for human understanding -- twelve items per person, including those who cannot afford shoes -- a technique that prevents numerical abstraction. The phrase "burying our clothes" literalises the metaphor of environmental cost, and the reference to "great-great-great-grandchildren" makes the timeline personal. The counter-argument paragraph is the piece's most sophisticated section: by genuinely engaging with the democratising function of fast fashion and naming the "economic realities" of low-income consumers, the writer earns the authority to then argue that this defence should not shield corporations from accountability. The shift of responsibility is executed through syntactic emphasis: "It lies with the corporations" is given its own clause, weighted and definitive. The closing rhetorical question inverts the framing -- affordability becomes not a consumer issue but an existential one -- leaving the reader with the uncomfortable recognition that the cheapest option may carry the highest cost.`,
  },
  {
    id: 'nf-09',
    title: 'Speech: You Are Not Your Grades',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'non-fiction',
    subType: 'speech-inspiration',
    content: `I want you to imagine something. Imagine you are standing in front of a mirror, and instead of your face, you see a number. Not a lucky number, not a phone number -- a grade. A single digit that is supposed to tell the world everything it needs to know about you.

That is what we do to young people. We take everything they are -- their curiosity, their kindness, their ability to make their friends laugh until they cry, their talent for fixing things, their courage in showing up every single day to a place that sometimes feels like it was designed to confuse them -- and we reduce it to a number on a piece of paper.

I am not saying grades don't matter. They do. They open doors. But here's what I've learned in twenty years of teaching: the students I remember are never the ones who got the highest grades. They are the ones who asked the strangest questions. The ones who helped a classmate when nobody was watching. The ones who kept going when everything said stop.

Let me be clear: I am not against education. I am against the idea that education is only the things we can measure. Because the most important things -- empathy, resilience, creativity, the ability to sit with uncertainty and not fall apart -- these don't fit on a spreadsheet. And we have become a culture that only values what fits on a spreadsheet.

So when you get your results, whatever they are, remember this: you are not a number. You are a person. A complicated, contradictory, still-being-written person. And no exam in the world can capture that.

The grade tells you what you knew on one day, in one room, under one set of conditions. It does not tell you who you are. It does not tell you who you will become.

That part is still up to you.`,
    techniques: [
      'Extended metaphor (mirror showing a grade)',
      'Direct address (you)',
      'Anaphora (The ones who...)',
      'Tricolon / list of three',
      'Antithesis (grades vs character)',
      'Inclusive pronouns (we)',
      'Repetition (It does not tell you...)',
      'Emotional appeal balanced with logic',
      'Short sentences for emphasis',
      'Ethos (twenty years of teaching)',
    ],
    suggestedQuestions: [
      'How does the speaker use the mirror image to begin the speech?',
      'What is the effect of listing qualities that grades cannot measure?',
      'How does the speaker use their teaching experience to build credibility?',
      'Why does the speaker clarify they are "not against education"?',
      'How does the final paragraph provide an empowering conclusion?',
    ],
    modelAnalysis: `The speaker constructs an impassioned but carefully reasoned argument against the reduction of students to grades, using rhetorical techniques that model the very qualities -- empathy, nuance, complexity -- that the speech advocates. The opening imperative "imagine" places the audience in the experience rather than observing it, and the mirror metaphor makes the abstract process of grading viscerally personal. The list in paragraph two is the speech's emotional centrepiece: the accumulation of qualities -- "curiosity," "kindness," the ability to make friends "laugh until they cry" -- builds rhythmically, and the parenthetical clause about school feeling "designed to confuse them" establishes solidarity with the audience. The strategic concession in paragraph three -- "I am not saying grades don't matter" -- prevents dismissal and demonstrates the same nuance the speech advocates. The anaphoric "The ones who" shifts the definition of memorable from academic achievement to character, and the final entry, "the ones who kept going when everything said stop," is powerful in its simplicity. The distinction between education and measurable outcomes is the speech's intellectual core, and the phrase "a culture that only values what fits on a spreadsheet" provides a memorable critique of metric-driven thinking. The closing paragraphs employ repetition with variation -- "It does not tell you who you are. It does not tell you who you will become" -- building to the final sentence's shift of agency: "That part is still up to you." This empowers the audience not by dismissing grades but by insisting that identity is authored, not assigned.`,
  },
  {
    id: 'nf-10',
    title: 'Article: Why We Need Boredom',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'non-fiction',
    subType: 'article-advice',
    content: `When was the last time you were truly bored? Not mildly under-stimulated. Not "there's nothing good on Netflix" bored. Properly, magnificently, staring-at-the-ceiling-counting-the-cracks bored. If you can't remember, you're not alone. We have engineered boredom almost entirely out of modern life, and we should be worried about it.

This might sound strange. Boredom is, after all, the thing we spend most of our time trying to avoid. We carry entertainment in our pockets. We scroll through feeds designed by some of the most intelligent people in the world to ensure that we never, ever have to sit with our own thoughts for more than eleven seconds. And it works. We are the most stimulated generation in human history.

We are also, by many measures, the most anxious.

That is not a coincidence. Boredom, it turns out, is not the enemy of productivity -- it is the birthplace of it. Neuroscientists have discovered that when the brain is not occupied with a specific task, it enters what they call the "default mode network." This is the state in which we daydream, reflect, and make unexpected connections between ideas. It is, in other words, the state in which we are most creative.

Think about where your best ideas come from. Not from scrolling. Not from refreshing your inbox. They come in the shower. On a long walk. In the ten minutes before you fall asleep, when your brain finally has permission to wander.

The advice is simple, and you will hate it: schedule time to be bored. Put your phone in a drawer. Stare out of a window. Let your mind do what minds have done for thousands of years before anyone invented an algorithm to fill the silence.

You might be surprised by what fills it instead.`,
    techniques: [
      'Rhetorical question opening',
      'Direct address (you, we)',
      'Tricolon / hyphenated compound adjective',
      'Scientific evidence (default mode network)',
      'Humour and conversational tone',
      'Short paragraph for impact (anxiety line)',
      'Imperative voice in advice',
      'Antithesis (boredom as enemy vs birthplace)',
      'Structure: problem, evidence, solution',
    ],
    suggestedQuestions: [
      'How does the writer use the opening rhetorical question to engage the reader?',
      'What is the effect of the single-sentence paragraph about anxiety?',
      'How does the writer use scientific evidence to support the argument?',
      'Why does the writer say "you will hate" the advice?',
      'How does the writer challenge the reader\'s assumptions about boredom?',
    ],
    modelAnalysis: `The writer makes a counter-intuitive argument for boredom with a voice that is simultaneously authoritative and entertaining, using a combination of neuroscience, cultural observation, and practical advice. The opening deploys a tricolon of boredom types -- from mild to magnificent -- that is comic in its escalation and establishes the writer's playful tone. The observation about phone feeds "designed by some of the most intelligent people in the world" to prevent solitary thought reframes entertainment technology as adversarial, a quiet but significant rhetorical move. The single-sentence paragraph "We are also, by many measures, the most anxious" is the extract's structural pivot: its brevity creates impact, and the temporal juxtaposition with the previous paragraph's celebration of stimulation implies causation without stating it directly. The neuroscientific concept of the "default mode network" provides an evidence base, but the writer translates it into accessible terms: "the state in which we daydream, reflect, and make unexpected connections." The paragraph about where ideas come from is persuasive because it appeals to universal experience -- everyone recognises shower thoughts. The closing advice is self-aware -- "you will hate it" -- and the imperatives "Put your phone in a drawer. Stare out of a window" are deliberately anti-dramatic, arguing that the most radical act in modern life may simply be doing nothing.`,
  },
];

// =============================================================================
// POETRY (10 original poems)
// =============================================================================

const poetryExtracts: TextExtract[] = [
  {
    id: 'poem-01',
    title: 'Two Names',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'poetry',
    subType: 'identity-free-verse',
    content: `I have two names.

The first is the one on the register,
clipped and anglicised,
shorn of its music --
the version of me that fits
in the small box on the form.

The second is the one my grandmother uses,
full-throated and rolling,
three syllables that taste of cardamom
and the kitchen in Karachi
where she first held me to her chest
and whispered it like a prayer.

At school, I answer to the first.
I have trained my face not to flinch
when they shorten it further,
when they make it rhyme with something
it was never meant to rhyme with.

At home, I am the second.
The whole of me.
Unabbreviated.

Sometimes I wonder
which name I will give my children:
the one the world finds easy,
or the one that tells the truth.`,
    techniques: [
      'Extended metaphor (name as identity)',
      'Contrast (school vs home)',
      'Enjambment',
      'Sensory imagery (taste of cardamom)',
      'Metaphor (shorn of its music, whispered like a prayer)',
      'Irony (trained not to flinch)',
      'Single-word line for emphasis (Unabbreviated)',
      'Rhetorical question ending',
      'Free verse reflecting the freedom of the "real" name',
    ],
    suggestedQuestions: [
      'How does the poet use the two names to explore identity and belonging?',
      'What is the effect of the single-word line "Unabbreviated"?',
      'How does the poet use sensory language in the stanza about the grandmother?',
      'Why does the poet describe training their face "not to flinch"?',
      'How does the final question leave the poem unresolved?',
    ],
    modelAnalysis: `The poet uses the conceit of two names to explore the tension between cultural assimilation and authentic identity with precise, emotionally resonant language. The first name is described through verbs of reduction -- "clipped," "anglicised," "shorn" -- a semantic field of cutting that suggests violence done to identity in the name of convenience. The "small box on the form" becomes a potent symbol of institutional constraints on selfhood. By contrast, the second name is rendered through sensory abundance: "full-throated and rolling," tasting of "cardamom," it is associated with intimacy, kitchen warmth, and prayer. The enjambment throughout mirrors the flowing quality of the second name, while the shorter lines in the school stanzas reflect the clipped, reduced identity. The verb "trained" in the school stanza is crucial: it implies that accepting mispronunciation is not natural but learned, a disciplining of the self. The single-word line "Unabbreviated" carries enormous weight -- it is itself unabbreviated, performing typographically what it states semantically. The closing question -- whether to give children "the one the world finds easy, / or the one that tells the truth" -- presents assimilation and authenticity as a binary the poet refuses to resolve, leaving the reader to sit with the discomfort of a choice that should not need to be made.`,
  },
  {
    id: 'poem-02',
    title: 'November Oak',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'poetry',
    subType: 'nature-free-verse',
    content: `The oak does not apologise for autumn.
It does not clutch its leaves like currency
or beg the wind for one more week of green.
It lets go.

Watch how it stands there, bare-armed,
unsentimental, stripped to the architecture
of what it really is: a skeleton of patience,
waiting without complaint
for the slow persuasion of spring.

We could learn from this.

We who hoard and hold and grip
as though possession were the point,
as though letting go
were the same as giving up.

The oak knows different.
It has been doing this for centuries --
the long release, the quiet trust
that what falls will return
in a different shape,
in a different green.

The leaves are not lost.
They are composting into next year's crown.`,
    techniques: [
      'Extended metaphor (oak as model for human behaviour)',
      'Personification (oak does not apologise)',
      'Enjambment',
      'Contrast (human hoarding vs tree releasing)',
      'Metaphor (skeleton of patience, composting into crown)',
      'Imperative (Watch)',
      'Short stanza for impact (We could learn from this)',
      'Alliteration (hoard and hold)',
      'Philosophical register',
    ],
    suggestedQuestions: [
      'How does the poet use the oak tree to comment on human behaviour?',
      'What is the effect of the short stanza "We could learn from this"?',
      'How does the poet present the idea of letting go as strength, not weakness?',
      'Why does the poet describe the oak\'s branches as "a skeleton of patience"?',
      'How does the final couplet transform the meaning of falling leaves?',
    ],
    modelAnalysis: `The poet uses the oak tree's seasonal transformation as an extended metaphor for the human capacity to release, creating a meditation on the difference between letting go and giving up. The opening line -- "The oak does not apologise for autumn" -- personifies the tree through negation, defining its character by what it refuses to do: apologise, clutch, beg. The verbs ascribed to humans by implication -- "clutch," "beg" -- cast our resistance to loss as both undignified and futile. The metaphor "skeleton of patience" is strikingly paradoxical: the skeleton suggests death, but "patience" reframes bareness as waiting rather than ending. The pivotal short stanza "We could learn from this" shifts the poem from observation to instruction, its brevity mirroring the directness of its message. The alliterative "hoard and hold and grip" in the human stanza creates a clutching rhythm that contrasts with the longer, more relaxed lines describing the oak. The final couplet performs the transformation it describes: fallen leaves are not "lost" but "composting into next year's crown," redefining decay as investment and loss as the necessary precondition for renewal. The word "crown" is precisely chosen -- it elevates the canopy to something regal, suggesting that the tree's eventual return to fullness is not merely natural but triumphant.`,
  },
  {
    id: 'poem-03',
    title: 'Ceasefire',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'poetry',
    subType: 'conflict-sonnet',
    content: `They signed the paper in a room of oak,
two men in suits who'd never held a gun,
who'd never breathed the cordite-bitter smoke
or counted bodies burning in the sun.

The war would end at midnight, they declared,
as if a war were something you could stop
like water from a tap. The newsreels aired
champagne, confetti, ticker tape. A crop

of headlines bloomed: PEACE. But in the field,
a soldier sat beside a shattered wall,
his rifle still warm, unable to yield
to what a piece of paper said. The call

of peace reached him like light from a dead star:
already over. Already too far.`,
    techniques: [
      'Sonnet form (Shakespearean/modified)',
      'Irony (men who never held a gun)',
      'Simile (war like water from a tap, peace like light from a dead star)',
      'Enjambment',
      'Juxtaposition (celebration vs reality)',
      'Iambic pentameter with variations',
      'Volta at line 9 (But in the field)',
      'Metaphor (headlines bloomed)',
      'Final couplet as devastating conclusion',
    ],
    suggestedQuestions: [
      'How does the poet use the sonnet form to structure the argument about war and peace?',
      'What is the effect of the simile comparing peace to "light from a dead star"?',
      'How does the poet contrast the politicians and the soldier?',
      'Where does the volta occur, and how does it change the poem\'s direction?',
      'Why does the poet describe the headlines as "blooming"?',
    ],
    modelAnalysis: `The poet employs the Shakespearean sonnet form -- traditionally associated with love -- to examine the gulf between political declarations of peace and the lived experience of war, using the form's argumentative structure to devastating effect. The opening quatrain establishes irony through negation: the men who signed the ceasefire had "never held a gun," "never breathed the cordite-bitter smoke." The compound adjective "cordite-bitter" engages the senses while the rhythmic regularity of the iambic pentameter mirrors the formal orderliness of the signing room. The simile comparing stopping a war to turning off "water from a tap" exposes the naivety of bureaucratic thinking, and the verb "bloomed" for headlines creates an unsettling beauty, as though peace were merely aesthetic, a media event. The volta at "But in the field" pivots the poem from the political to the personal, and the soldier beside a "shattered wall" becomes the poem's moral centre. The closing simile is the poem's masterstroke: peace reaching him "like light from a dead star" is scientifically precise -- light from dead stars travels for millennia after the source has perished -- and emotionally devastating, suggesting that the peace declared in the oak room is already irrelevant, already "too far" from the reality it claims to address. The final half-line repetition of "Already" creates a dying fall that mirrors the soldier's inability to believe in what has been declared.`,
  },
  {
    id: 'poem-04',
    title: 'What I Learned from Water',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'poetry',
    subType: 'nature-free-verse',
    content: `Water taught me patience --
how a river takes the long way round
because it knows the rock won't move,
and there's no shame in bending.

Water taught me persistence --
how a drip can hollow out a stone
not through force
but through the quiet refusal to stop.

Water taught me transformation --
how the same stuff can be
a puddle in a car park
or a wave the size of a house,
depending on what it needs to be.

Water taught me letting go --
how a waterfall doesn't cling to the cliff
but throws itself off the edge
trusting the pool below.

Water taught me everything
my teachers couldn't fit on a whiteboard.

Now I stand at the shore
and I listen
and I learn.`,
    techniques: [
      'Anaphora (Water taught me...)',
      'Extended metaphor (water as teacher)',
      'Personification (water knowing, refusing, trusting)',
      'Contrast (drip vs wave)',
      'Enjambment',
      'Short lines for pace and emphasis',
      'List poem structure',
      'Irony (teachers / whiteboard)',
      'Simple but profound language',
    ],
    suggestedQuestions: [
      'How does the poet use the repeated structure to build the poem\'s argument?',
      'What is the effect of personifying water as a teacher?',
      'How does the stanza about transformation use contrast?',
      'Why does the poet include the line about teachers and whiteboards?',
      'How does the final stanza change the poem\'s tone?',
    ],
    modelAnalysis: `The poet uses an anaphoric list structure to present water as a teacher of life lessons, employing personification that is both accessible and philosophically rich. Each stanza follows the same pattern -- "Water taught me" followed by a virtue and its illustration -- creating a cumulative effect that mirrors water's own relentless repetition. The patience stanza personifies the river as knowing the rock "won't move" and finding "no shame in bending," reframing compromise as wisdom rather than weakness. The persistence stanza's image of a drip hollowing stone "through the quiet refusal to stop" is both scientifically accurate and motivational, and the line break after "force" places emphasis on what the drip does not use, before revealing the alternative: persistence. The transformation stanza's contrast between "a puddle in a car park" and "a wave the size of a house" yokes the mundane to the sublime, arguing for adaptability. The letting go stanza personifies the waterfall as actively choosing to "throw itself off the edge," transforming the passive into the brave. The penultimate stanza's aside about teachers and whiteboards provides gentle humour and positions nature-based learning above institutional instruction. The final stanza's shift to the present tense and the simple verbs "stand," "listen," "learn" enact the poem's lesson: real learning requires stillness and receptivity.`,
  },
  {
    id: 'poem-05',
    title: 'Portrait of My Mother at Forty',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'poetry',
    subType: 'identity-free-verse',
    content: `She is learning to be visible again.
For years she was a background,
a wallpaper of reliability --
always there, so always overlooked,
the way you overlook the ground beneath your feet
until it cracks.

She cut her hair last Tuesday.
Not a trim. A transformation.
The woman in the mirror looked back
with eyes she hadn't used in years --
sharp, curious, amused.
She laughed, and the sound surprised them both.

She has started saying no.
No to the bake sale,
no to the extra shift,
no to the smile she used to wear
like a uniform she never chose.

She is not the same person
she was at twenty,
or thirty,
or last month.
She is becoming someone
she hasn't met yet.

And I watch her from the kitchen doorway,
half proud, half frightened,
because if my mother is still becoming,
then what does that say about the rest of us?

That we are never finished.
That every age is still an age of possibility.
That the woman I thought I knew
is just the latest draft.`,
    techniques: [
      'Extended metaphor (mother as background / wallpaper)',
      'Simile (smile like a uniform)',
      'Enjambment',
      'Anaphora (no to...)',
      'Personification (mirror, sound)',
      'Contrast (past self vs emerging self)',
      'Rhetorical question implied',
      'Metaphor (latest draft)',
      'Shift in perspective (observation to philosophical reflection)',
    ],
    suggestedQuestions: [
      'How does the poet use the idea of visibility to explore the mother\'s transformation?',
      'What is the effect of the anaphoric "no to" in stanza three?',
      'How does the poet present the relationship between mother and child?',
      'Why does the poet describe the mother as "the latest draft"?',
      'How does the final stanza extend the poem\'s meaning beyond the mother?',
    ],
    modelAnalysis: `The poet traces a middle-aged woman's self-reclamation through precise, emotionally charged imagery, using the child's observing perspective to expand the personal into the universal. The opening metaphor of the mother as "wallpaper" -- beautiful but overlooked, functional but unnoticed -- captures the erasure of self that can accompany years of caregiving. The simile of the ground beneath one's feet, unnoticed "until it cracks," introduces a quiet threat: the implication that invisibility is not sustainable. The haircut stanza marks the turning point with deliberate drama: "Not a trim. A transformation." The personified mirror returning a gaze with eyes "sharp, curious, amused" suggests rediscovery of a self that was dormant rather than lost. The anaphoric "no to" stanza is structurally satisfying: each refusal is specific -- bake sale, extra shift, forced smile -- and the final "no" is the most significant, rejecting the "uniform" of obligatory pleasantness. The child's perspective in the penultimate stanza introduces complexity: "half proud, half frightened" acknowledges that a parent's transformation unsettles the child's understanding of both parent and self. The closing metaphor of "the latest draft" is the poem's most resonant image, reframing identity as a text under continuous revision rather than a finished document.`,
  },
  {
    id: 'poem-06',
    title: 'Haiku Sequence: Four Seasons in a School',
    author: 'Original - The English Hub',
    yearGroup: 7,
    type: 'poetry',
    subType: 'nature-haiku-sequence',
    content: `Autumn

New blazers, stiff ties --
conkers burst from their green shells.
Everything begins.

Winter

Breath clouds the windows.
Radiators tick and hiss.
Nobody can think.

Spring

Daffodils emerge
through cracks in the netball court --
stubborn, beautiful.

Summer

Exam halls exhale.
Shirts untucked, ties loosened, free --
the bell rings. And rings.`,
    techniques: [
      'Haiku form (5-7-5 syllable structure)',
      'Seasonal imagery',
      'Juxtaposition (nature and school life)',
      'Personification (exam halls exhale)',
      'Symbolism (conkers bursting, daffodils through cracks)',
      'Sensory detail (breath, radiator sounds)',
      'Parallel structure across seasons',
      'Enjambment within haiku',
      'Repetition (rings. And rings.)',
    ],
    suggestedQuestions: [
      'How does the poet use the four seasons to chart the school year?',
      'What is the effect of the daffodils growing through "cracks in the netball court"?',
      'How does the poet use sound imagery in the winter haiku?',
      'Why does the final haiku repeat "rings"?',
      'How do the nature images contrast with or complement the school setting?',
    ],
    modelAnalysis: `The poet uses the haiku sequence form to compress an entire school year into four miniature portraits, each yoking a natural image to a school experience with precision and wit. The autumn haiku establishes the parallel between natural and academic cycles: "New blazers, stiff ties" mirrors the conkers bursting from shells, both images of fresh beginnings still encased in formality. The winter haiku captures the sensory experience of a cold classroom -- breath on windows, radiator sounds -- and the comic deadpan of "Nobody can think" compresses an entire season of distracted learning into three words. The spring haiku is the sequence's emotional core: the daffodils emerging "through cracks in the netball court" represent resilience and beauty in unlikely places, and the adjectives "stubborn, beautiful" -- separated by a comma that forces a pause -- apply equally to the flowers and to the students. The summer haiku personifies the exam halls as exhaling -- releasing their held breath of tension -- and the loosened uniforms represent liberation. The repetition of "rings" in the final line extends the moment of freedom, the bell continuing to ring as though reluctant to stop, and the full stop between "rings. And rings." creates a typographical echo that performs the repetition acoustically.`,
  },
  {
    id: 'poem-07',
    title: 'The Argument',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'poetry',
    subType: 'conflict-free-verse',
    content: `We said things.
The kind of things that sit in the room
long after you've left it,
like smoke from a fire
that burned too fast.

You said I never listen.
I said you never talk.
Both of us were right.
Both of us were wrong.
The truth was somewhere in the wreckage
between the two positions,
but neither of us had the tools
to dig it out.

The silence afterwards
was the loudest thing I've ever heard.
It filled the house
the way water fills a sinking boat --
completely, coldly,
with no interest in what it was destroying.

I slept on the sofa.
You slept upstairs.
The ceiling between us
was only plaster,
but it might as well have been concrete.

In the morning, you made tea.
Two cups.
You didn't say sorry
and neither did I.
But the tea was there,
and it was hot,
and it was enough.

It was a start.`,
    techniques: [
      'Simile (smoke from a fire, water filling a sinking boat)',
      'Personification (silence filling, water uninterested)',
      'Contrast (right/wrong, upstairs/downstairs)',
      'Symbolism (tea as reconciliation, ceiling as barrier)',
      'Short sentences for emotional weight',
      'Enjambment',
      'Antithesis (never listen / never talk)',
      'Understatement in conclusion',
      'Domestic imagery for universal themes',
    ],
    suggestedQuestions: [
      'How does the poet use domestic details to explore the theme of conflict?',
      'What is the effect of comparing silence to water filling a sinking boat?',
      'How does the poet present the idea that both people can be "right" and "wrong"?',
      'Why is the tea significant in the final stanza?',
      'How does the poem\'s structure mirror the stages of an argument?',
    ],
    modelAnalysis: `The poet maps the emotional geography of a domestic argument through precise, unflinching imagery, using the domestic setting to universalise the experience of conflict and tentative reconciliation. The opening simile comparing words to "smoke from a fire / that burned too fast" is doubly effective: it captures both the lingering quality of hurtful speech and the implication that the argument was fuelled by something combustible beneath the surface. The antithesis "You said I never listen. / I said you never talk" creates a perfect deadlock, and the poet's refusal to take sides -- "Both of us were right. / Both of us were wrong" -- demonstrates the emotional maturity that the argument itself lacked. The silence stanza is the poem's most powerful: the simile of water filling "a sinking boat" is devastating in its suggestion of destruction, and the personification of the water as having "no interest in what it was destroying" gives silence an indifferent cruelty. The ceiling between the two sleepers, "only plaster" but feeling like "concrete," transforms a physical detail into an emotional barrier. The final stanza achieves resolution through the smallest possible gesture: two cups of tea. No apology is offered, but the act of making tea -- hot, present, offered -- becomes a wordless language of repair. The final two-word line, "It was a start," refuses the grand gesture in favour of the quietly real, suggesting that reconciliation begins not with dramatic words but with humble actions.`,
  },
  {
    id: 'poem-08',
    title: 'Sonnet for a Coastline',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'poetry',
    subType: 'nature-sonnet',
    content: `The cliffs are falling. Inch by patient inch,
the chalk gives way to gravity and rain,
surrenders what it took ten thousand years
to build, and does not flinch, and feels no pain.

A house that stood a field's width from the edge
now teeters on a lip of crumbling white.
Its garden hangs in air. Its fence posts lean
like tired soldiers listing from a fight.

Beneath, the sea collects what falls: the soil,
the stone, the kitchen tiles, the children's swing.
It takes them in without ceremony,
as though a cliff were just another thing

to swallow. And perhaps it is. Perhaps
the sea has always known what we forget:
that nothing built on edges lasts forever.
That land is just a loan we haven't paid yet.`,
    techniques: [
      'Sonnet form (modified Shakespearean)',
      'Personification (cliffs surrendering, sea swallowing)',
      'Simile (fence posts like tired soldiers)',
      'Enjambment across quatrain boundaries',
      'Juxtaposition (geological time vs human objects)',
      'List (soil, stone, tiles, swing)',
      'Volta (And perhaps it is)',
      'Metaphor (land as a loan)',
      'Iambic pentameter with variations',
    ],
    suggestedQuestions: [
      'How does the poet use the sonnet form to explore ideas about time and change?',
      'What is the effect of listing the domestic objects the sea collects?',
      'How does the poet personify the cliffs and the sea?',
      "Why does the poet describe land as 'a loan we haven't paid yet'?",
      'How does the poem challenge ideas of permanence?',
    ],
    modelAnalysis: `The poet uses the sonnet form to meditate on coastal erosion as a metaphor for impermanence, setting geological timescales against human domesticity to unsettling effect. The opening -- "The cliffs are falling" -- announces the poem's subject with declarative simplicity, and the phrase "Inch by patient inch" personifies erosion as a deliberate, unhurried force. The cliffs "surrender" what took millennia to build, and the verbs "does not flinch" and "feels no pain" attribute to the chalk a stoic acceptance that implicitly contrasts with human attachment. The second quatrain introduces the human stakes: the house "teetering," the garden "hanging in air," the fence posts "listing" like exhausted soldiers. The military simile connects erosion to conflict, suggesting that the relationship between land and sea is one of endless attrition. The list in the third quatrain -- "the soil, / the stone, the kitchen tiles, the children's swing" -- moves from the geological to the achingly personal, and the sea's indifference ("without ceremony, / as though a cliff were just another thing / to swallow") is rendered through enjambment that mirrors the cliff's own collapse, the sentence tumbling across line breaks. The closing couplet's metaphor -- "land is just a loan we haven't paid yet" -- reframes human settlement as temporary occupation, a financial metaphor that suggests we have been living on borrowed ground, literally and figuratively.`,
  },
  {
    id: 'poem-09',
    title: 'The Equation of Love',
    author: 'Original - The English Hub',
    yearGroup: 8,
    type: 'poetry',
    subType: 'love-free-verse',
    content: `Love is not an equation.
I know this because I have tried
to solve it --
balanced the variables,
isolated the unknowns,
carried the remainder of you
from one side of my life to the other
and still
the numbers don't add up.

You cannot graph the moment
someone becomes necessary.
There is no formula
for the way your laugh
rearranges the furniture in my chest,
or how your absence
takes up more space
than your presence ever did.

My maths teacher says
every problem has a solution.
But love is not a problem.
It is a question
that changes shape
every time you think
you've understood it.

And I would rather live
inside that question
than solve for x
and find the answer
empty.`,
    techniques: [
      'Extended metaphor (love as mathematics)',
      'Irony (trying to solve love)',
      'Enjambment',
      'Metaphor (laugh rearranging furniture)',
      'Paradox (absence taking more space than presence)',
      'Contrast (equation vs question)',
      'Word play (solve for x)',
      'Short lines for emphasis',
      'Subversion of mathematical language',
    ],
    suggestedQuestions: [
      'How does the poet use mathematical language to describe love?',
      'What is the effect of the metaphor "your laugh rearranges the furniture in my chest"?',
      'How does the paradox about absence and presence work?',
      'Why does the poet say love is "a question" rather than "a problem"?',
      'How does the final stanza conclude the poem\'s central metaphor?',
    ],
    modelAnalysis: `The poet sustains an extended metaphor comparing love to mathematics, using the language of equations and problem-solving to argue that love's value lies precisely in its resistance to solution. The opening declaration -- "Love is not an equation" -- is immediately complicated by the admission that the speaker has "tried / to solve it," and the mathematical verbs that follow ("balanced," "isolated," "carried the remainder") are repurposed as emotional actions, creating a dual register that is both comic and poignant. The metaphor of carrying "the remainder of you" is particularly clever: in mathematics, a remainder is what is left over after division, and the suggestion that the beloved persists as an irreducible surplus is both mathematically precise and emotionally resonant. The second stanza contains the poem's most striking image: "your laugh / rearranges the furniture in my chest" makes the interior body a domestic space that love physically reorganises. The paradox of absence taking "more space / than your presence ever did" captures the perverse geometry of missing someone. The distinction between "problem" and "question" in stanza three is philosophically precise: problems have solutions and can be closed; questions evolve and remain open. The final image of "solving for x / and finding the answer / empty" rejects mathematical certainty in favour of emotional complexity, suggesting that the richness of love lies in its perpetual incompleteness.`,
  },
  {
    id: 'poem-10',
    title: 'Ballad of the Crossing',
    author: 'Original - The English Hub',
    yearGroup: 9,
    type: 'poetry',
    subType: 'conflict-ballad',
    content: `They left at night when no one saw,
with nothing but the clothes they wore,
a photograph, a loaf of bread,
a prayer for the road ahead.

The boat was small. The sea was wide.
A mother held her daughter's side
and whispered stories in her ear
of gardens where there was no fear.

The water rose. The engine died.
The stars looked down and multiplied
as though the sky had opened wide
its eyes to watch, but not provide.

They were not soldiers. Not a threat.
Not the danger that the headlines set.
They were a family in a boat
who only wanted to stay afloat.

The shore they reached was cold and grey.
A fence. A form. A place to stay
that wasn't home but wasn't war,
and maybe that was what it's for.

They are still here. They learned the tongue.
The daughter grew. The mother hung
her photograph beside the door.
The garden that she'd spoken for

is planted now, in English soil.
Roses grow from years of toil.
And every bloom is proof that they
survived the crossing. Found a way.`,
    techniques: [
      'Ballad form (ABAB/AABB rhyme, quatrains)',
      'Narrative structure',
      'Contrast (war vs garden)',
      'Symbolism (garden, photograph, roses)',
      'Understatement (wasn\'t war)',
      'Irony (stars watched but did not provide)',
      'Regular rhythm suggesting folk tradition',
      'Emotive restraint',
      'Circular imagery (garden promised, garden planted)',
    ],
    suggestedQuestions: [
      'How does the poet use the ballad form to tell this story?',
      'What is the effect of the line "as though the sky had opened wide / its eyes to watch, but not provide"?',
      'How does the poet challenge negative perceptions of refugees?',
      'Why is the garden image significant at the beginning and end of the poem?',
      'How does the poem use simple language to create powerful effects?',
    ],
    modelAnalysis: `The poet employs the ballad form -- traditionally used for storytelling in folk communities -- to narrate a refugee family's crossing, using the form's accessibility and rhythmic regularity to argue for the ordinariness and humanity of people whom political discourse often dehumanises. The opening stanza's list -- "a photograph, a loaf of bread, / a prayer for the road ahead" -- distils displacement to three objects and an act of faith, each detail both specific and symbolic. The mother's whispered stories "of gardens where there was no fear" introduce the garden as a motif for safety and belonging, a promised land held in narrative. The third stanza's image of stars that "opened wide / its eyes to watch, but not provide" personifies the cosmos as a negligent witness, and the internal rhyme creates a bitter music. The fourth stanza's anaphoric "Not" directly addresses and refutes hostile media framing: "They were not soldiers. Not a threat." The understated line about the destination -- "wasn't home but wasn't war, / and maybe that was what it's for" -- captures the ambivalent reality of asylum with painful honesty. The final stanzas complete the garden motif: the mother's promised garden is now "planted in English soil," and the roses that "grow from years of toil" transform the abstract concept of integration into something organic, rooted, and beautiful. The poem's power lies in its restraint: it tells a vast story in simple words, trusting the reader to feel what it refuses to overstate.`,
  },
];

// =============================================================================
// COMBINED EXPORT
// =============================================================================

export const teachingExtracts: TextExtract[] = [
  ...narrativeExtracts,
  ...descriptiveExtracts,
  ...nonFictionExtracts,
  ...poetryExtracts,
];

