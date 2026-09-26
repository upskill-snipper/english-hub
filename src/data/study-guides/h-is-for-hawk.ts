import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * From H is for Hawk, Helen Macdonald (2014). A supplement: the existing page at
 * /igcse/edexcel-lang/anthology/h-is-for-hawk keeps its context and themes, and
 * this file adds everything else below it.
 *
 * Every quotation was checked word for word against the prescribed text itself,
 * the extract as printed on pages 19-20 of the Pearson Edexcel International
 * GCSE English Anthology, Issue 8 (February 2026), read from Pearson's own PDF
 * on 25 September 2026. Line numbers are the anthology's. Which words the
 * anthology sets in italics was read from the PDF's font data, not guessed.
 *
 * The existing page's structural notes describe the whole book (training and
 * flying the hawk, a resolution) rather than the extract, which ends before the
 * breeder answers. structureForm below describes the extract as printed.
 *
 * The extract is 1,041 words, so under fair-dealing.ts it is a short work and
 * the whole page may quote about a tenth of it. Every quotation is chosen to be
 * reused: a phrase in the prose is, wherever possible, a part of a key
 * quotation, so that it adds nothing to the total.
 */
export const guide: StudyGuide = {
  slug: 'h-is-for-hawk',
  title: 'From H is for Hawk',
  author: 'Helen Macdonald',
  form: 'non-fiction',
  scope:
    'The extract printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 1, pages 19-20: seventy numbered lines in which Macdonald meets her goshawk for the first time. Not the whole book.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Helen Macdonald 2014. Published by Jonathan Cape; the extract is studied as printed in the Pearson Edexcel International GCSE English Anthology. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 1041,
    lines: 70,
    basis:
      'Counted from the anthology PDF (Issue 8, pages 19-20): the seventy numbered lines of the extract, counting each space-separated word that contains a letter or digit, so a hyphenated compound such as captive-bred counts once and the dots of an ellipsis do not count. The introduction printed in bold above the extract, the four glossary footnotes and the footnote numbers are Pearson’s, not Macdonald’s, and are excluded. Recounted on 26 September 2026; an earlier figure of 1,046 had included the ellipsis dots and split light-splashed at the line break.',
  },

  native: {
    context: '/igcse/edexcel-lang/anthology/h-is-for-hawk',
    themes: '/igcse/edexcel-lang/anthology/h-is-for-hawk',
  },

  overview: {
    summary: [
      'The anthology prints about a thousand words from Helen Macdonald’s memoir H is for Hawk, published by Jonathan Cape in 2014 and winner of both the 2014 Samuel Johnson Prize for non-fiction and the 2014 Costa Book of the Year. The short introduction above the extract tells you what the extract itself never states: Macdonald, an experienced falconer, took on a goshawk after her father died suddenly. In the book she collects the bird on a Scottish quayside from a Northern Irish breeder who arrives with two hawks, one for her and one for another falconer.',
      'The extract is the handover. The breeder produces the paperwork, opens the smaller of two travelling boxes, and pulls a young goshawk, struggling, out into the sunlight. Macdonald is overwhelmed, reaching for image after image to describe her, and then hoods her. The ring numbers show that this is the wrong bird: the smaller, younger hawk is meant for someone else. The second box holds the larger, older bird that is officially Macdonald’s, but it wails, frightens her, and she cannot recognise it as hers. After the deal is done she commits what she calls “a monstrous breach of etiquette” and asks whether she may swap. The extract ends in silence, before the breeder answers. (In the book he agrees, and the smaller hawk becomes Mabel; do not write in the exam that the extract tells you this.)',
      'The argument worth making is that the extract is about grief without once naming it. Its seventy lines never mention her father, his death or her mourning, yet much in it can be read as pointing that way: the loss of control, the sudden fierce love for a stranger, the certainty that one bird is hers and the other is not, and the closing self-portrait of an exhausted woman pleading on a quayside. Macdonald is also funny, and knows it, and her self-mockery keeps the piece from self-pity. The alternative reading deserves its place too: this is a writer working hard to see a wild animal as it really is, even through its own eyes, not only as a symbol of her feelings. The strongest answers hold both readings at once.',
      'A film of the book, directed by Philippa Lowthorpe with Claire Foy as Macdonald, was released in UK cinemas in January 2026. Scenes in the film are not the prescribed text, so quote only from the anthology.',
    ],
  },

  characters: [
    {
      name: 'Helen Macdonald',
      role: 'Writer and narrator',
      body: 'Macdonald (born 1970) is a writer and naturalist, a former research fellow of Jesus College, Cambridge, and affiliated research scholar in the university’s Department of History and Philosophy of Science, and an experienced falconer who had already published a book called Falcon (2006). The extract makes her both expert and helpless. She knows the rituals exactly, the ring numbers, the hood, the forms, yet her body and her words fail her: her heart lurches, she can only describe the hawk in fragments, and her request to swap birds collapses into a stream of apologetic questions. Tellingly, the only description of what she looks like comes at the very end, through what she imagines the breeder sees. One reading is that grief has made her a stranger to herself, so that she can only see herself from outside.',
    },
    {
      name: 'The breeder',
      role: 'The man who has brought the two hawks',
      body: 'The extract never names him; he is simply the man. He is careful and practical, checking ring numbers against the official forms, and calm in the middle of chaos, gathering the struggling hawk up with one expert movement. At lines 35-39 Macdonald reads concern in his face and tells his history with this bird: she was hatched in an incubator, and for her first days he fed her with scraps held in tweezers. That tenderness is what makes Macdonald love him “All at once”, and it may matter that it is a picture of patient, parental care. By the end he holds all the power. His raised eyebrows and the final silence leave the reader, like Macdonald, waiting for his decision.',
    },
    {
      name: 'The first hawk',
      role: 'The younger, smaller goshawk',
      body: 'The hawk in the smaller box has worked her hood off and explodes into the light, twittering, all wings and talons. Macdonald cannot fix her in one image, so she tries many: magic, reptile, angel, a mythical beast, gold, a broken puppet. Then the point of view shifts to her, and Macdonald imagines the whole world, sea, cars, hills and gulls, rushing into eyes that have only ever seen an aviary and a box. The paperwork says she is meant for someone else. Macdonald’s growing certainty that she is nonetheless the right bird drives the whole second half of the extract.',
    },
    {
      name: 'The second hawk',
      role: 'The larger, older goshawk, officially Macdonald’s',
      body: 'Everything about her is different: darker, much bigger, and instead of twittering she wails, a sound Macdonald finds unbearable. Macdonald frames her as a figure from Victorian melodrama, and when she looks into her eyes she sees blankness and a madness she cannot place. She does not recognise her. One reading is that Macdonald fears in this hawk something she fears in herself: at the end she casts herself, too, as a tragic madwoman. A simpler reading is equally valid: a frightened wild animal is behaving as frightened animals do, and recognition between falconer and hawk is instinctive, not rational.',
    },
    {
      name: 'Macdonald’s father',
      role: 'Never mentioned in the extract itself',
      body: 'Alisdair Macdonald, a press photographer, died suddenly in 2007; the anthology’s introduction says it was a heart attack. He is not mentioned anywhere in the seventy lines, but the introduction invites every reader to read the extract in his shadow, and you may use it. Do so with care. It is fair to argue that the loss of control, the fierce attachments and the exhausted face at the end are shaped by grief. It is not accurate to say the extract describes grief directly: say that the introduction tells us, and then show how the language hints.',
    },
  ],

  keyQuotes: [
    {
      text: 'as if someone had punched it, hard, from within',
      where: 'Line 8 (page 19), as the first box is opened',
      analysis:
        'The hawk is heard before she is seen, and the simile gives her the force of a human fist. The commas around “hard” isolate the word so that the reader feels the blow land, and the sentence ends on “from within”. The literal meaning is plain: a powerful bird is trapped in a box. But a reading worth making is that the box works like Macdonald herself, calm on the outside, with something violent pushing to get out.',
    },
    {
      text: 'everything is brilliance and fury',
      where: 'Line 17 (page 19), the moment the hawk is pulled out',
      analysis:
        'This comes at the end of one long, breathless sentence, and it is in the present tense: from line 15 Macdonald stops remembering the moment and relives it. The two abstract nouns fuse light and violence. Brilliance is the sunlight that floods the quayside at that instant; fury is the hawk’s struggle. The word “everything” matters too: there is no calm observer left outside the moment, only total experience.',
    },
    {
      text: 'She is a conjuring trick. A reptile. A fallen angel.',
      where: 'Lines 20-21 (page 19)',
      analysis:
        'Three metaphors in three sentences, and each one contradicts the last: an illusion, a cold-blooded ancient creature, a being cast down from heaven. The list goes on for several more fragments. The effect is of language failing: no single image can hold the hawk, so Macdonald throws one after another. The fallen angel is the richest, because it makes the hawk beautiful and damned at once, holy and dangerous, and it hints that Macdonald is drawn to something that is not wholly safe.',
    },
    {
      text: 'like a turkey in a butcher’s shop',
      where: 'Line 24 (page 19), the hawk hanging from her jesses',
      analysis:
        'Straight after gold and angels, this simile is deliberately ugly: a dead bird hung head-down for sale. It is bathos, a sudden drop from the sublime to the ordinary, and it is honest about what the moment actually looked like. It also brings death into the scene. One reading is that death is never far from the mind of a writer who has recently lost her father; another is that Macdonald refuses to prettify the hawk. Both show a writer who will not settle for one tone.',
    },
    {
      text: 'All at once I loved this man, and fiercely.',
      where: 'Lines 39-40 (page 19)',
      analysis:
        'The emotion is sudden and out of proportion: this is a stranger conducting a sale. The adverb “fiercely” is held back to the end of the sentence by a comma, and it is a word we would more readily use of the hawk, as if, in one reading, her wildness has passed into Macdonald. The love follows directly from the account of him feeding the chick with tweezers. It is a reasonable reading that a grieving daughter is moved, without quite saying so, by a picture of patient, protective care.',
    },
    {
      text: 'This was not my hawk.',
      where: 'Lines 46-47 (page 20)',
      analysis:
        'A short, flat declarative sentence after the long, excited paragraphs, and a complete reversal: the bird she has just fallen for belongs to someone else. The phrase “my hawk” then becomes the refrain of the second half. Here it is plain fact, read off the paperwork in ordinary type; later, in the anthology’s italics, it becomes the voice in her head. The gap between what the forms say and what she feels drives everything that follows.',
    },
    {
      text: 'a sort of madwoman in the attack',
      where: 'Line 51 (page 20), the second hawk leaving her box',
      analysis:
        'A pun on the madwoman in the attic, Bertha Mason, the wife kept locked away in Charlotte Brontë’s Jane Eyre, set up by the comparison with a Victorian melodrama. It is comic and literary, and the hedge “a sort of” shows Macdonald half mocking her own reaction. But it is also a gendered image of female madness and confinement, and at the end Macdonald arguably casts herself in a similar role. The hawk she rejects is, in one reading, a mirror she does not want to look into.',
    },
    {
      text: 'a seaside production of Medea',
      where: 'Line 68 (page 20), in the final paragraph',
      analysis:
        'Macdonald sees herself through the breeder’s eyes: a desperate woman, hands outstretched, playing tragedy. Medea is the heroine of Euripides’ Greek tragedy, a woman whose grief and rage at betrayal drive her to terrible revenge. Placing that tragedy in a seaside production makes it small, amateur and absurd. The bathos is self-mocking, but the choice of Medea is revealing: an image of overwhelming, dangerous emotion, which is exactly what the extract has avoided naming.',
    },
  ],

  extracts: [
    {
      title: 'Opening the first box',
      where: 'Lines 5-17, page 19',
      pointer:
        'From line 5, where the two of them note the ring numbers and look down at the boxes, to line 17, where sunlight floods the quayside as the hawk is pulled out.',
      summary:
        'The breeder kneels, unties one string hinge of the smaller box and looks in, and the box shakes with a violent thump: the hawk has got her hood off. He unties the remaining hinges with great care while the bird thumps and scratches inside. Time seems to slow, the air thickens, and Macdonald compares the wait to the seconds before a battle. Then, in a single long sentence that slips into the present tense, he pulls out a huge, struggling hawk just as sunlight pours over them.',
      annotations: [
        {
          phrase: 'as if someone had punched it',
          note: 'The first sign of the hawk is a sound and a shock, not a sight. The simile of a fist makes the unseen bird violent and almost human, and builds fear before we see her.',
        },
        {
          phrase: 'Concentration. Infinite caution.',
          note: 'Minor sentences with no verbs slow the passage almost to a stop. The reader waits, as Macdonald waits, and the tension rises because nothing is allowed to happen quickly.',
        },
        {
          phrase: 'enormous, enormous',
          note: 'The anthology sets the second enormous in italics. The repetition sounds like speech, like someone who cannot believe what they are seeing, and it breaks the careful written control of the paragraph.',
        },
        {
          phrase: 'everything is brilliance and fury',
          note: 'The long sentence finally lands on two abstract nouns that fuse light and violence. After the slow build of short fragments, the release is overwhelming and shared by the whole scene.',
        },
      ],
      question:
        'How does Macdonald use language and structure to build tension as the box is opened in lines 5-17?',
    },
    {
      title: 'The hawk revealed',
      where: 'Lines 17-45, pages 19-20',
      pointer:
        'From the description of the hawk’s barred, beating wings at lines 17-18 to line 45, where Macdonald closes the hood and they check the ring numbers against the form.',
      summary:
        'Macdonald piles up images to describe the hawk: magic, a reptile, an angel, a creature from a medieval book of beasts, gold, a broken puppet. For a moment the bird hangs upside down from the leather straps on her legs. The point of view then moves into the hawk, imagining the sea, the parked cars and the hills flooding into eyes that have known only an aviary and a box. The breeder calmly gathers her up; Macdonald describes how he hand-fed her as a newly hatched chick, feels a sudden love for him, and hoods the hawk herself.',
      annotations: [
        {
          phrase: 'My heart jumps sideways.',
          note: 'A short, physical sentence in the present tense. A heart that jumps sideways is not a cliché: it suggests shock that knocks her off balance rather than simple excitement.',
        },
        {
          phrase: 'A fallen angel.',
          note: 'The last and richest of three contradictory metaphors. The hawk is heavenly and damned at once, which suggests Macdonald is drawn to something beautiful but not safe.',
        },
        {
          phrase: 'like gold falling through water',
          note: 'A simile of slowed, glowing movement, closer to a dream than to a struggle. It shows how Macdonald’s perception alternates between terror and wonder within a few lines.',
        },
        {
          phrase: 'like a turkey in a butcher’s shop',
          note: 'Bathos: after gold and angels, a dead bird hung for sale. The drop in tone is honest, faintly comic, and brings an image of death into the scene.',
        },
        {
          phrase: 'alien brain fizzing and fusing with terror',
          note: 'As she hoods the hawk Macdonald feels the thin skull beneath the feathers. The alliteration of fizzing and fusing makes fear sound electrical, and alien insists that this mind is not like ours.',
        },
      ],
      question:
        'How does Macdonald use language to convey the impact the hawk has on her in lines 17-45?',
    },
    {
      title: 'The wrong bird and the plea',
      where: 'Lines 46-70, page 20',
      pointer:
        'From the short paragraph at line 46 in which the ring numbers show this is the wrong bird, to the final sentence of the extract at line 70.',
      summary:
        'The paperwork shows the first hawk is the younger bird meant for another falconer. The second box is opened: a darker, much bigger hawk that wails. As Macdonald raises the hood to her she sees something blank and mad in her eyes, and cannot recognise her as her own. Once the sale is complete she forces herself to ask to swap, stammering apologies and questions. She imagines how she must look to the breeder, a pale, wild-haired woman pleading like a tragic heroine, and the extract ends in silence before he answers.',
      annotations: [
        {
          phrase: 'Oh.',
          note: 'A one-word paragraph, in italics in the anthology. The white space around it can be read as the drop in her stomach: after all that intensity, her response to the paperwork shrinks to almost nothing.',
        },
        {
          phrase: 'a sort of madwoman in the attack',
          note: 'A pun on the madwoman in the attic of Jane Eyre. The comic literary allusion lets Macdonald describe her fear of the second hawk while half laughing at herself.',
        },
        {
          phrase: 'Some madness from a distant country.',
          note: 'A minor sentence that places the hawk’s wildness somewhere foreign and unreachable. It suggests that what unsettles Macdonald is less the bird’s size or noise than the blankness she cannot read.',
        },
        {
          phrase: 'a monstrous breach of etiquette',
          note: 'Hyperbole: asking to swap birds is hardly monstrous. The exaggeration is comic, but it also shows how much the ordinary rules of politeness still govern her, even in desperation.',
        },
        {
          phrase: 'a seaside production of Medea',
          note: 'Macdonald sees herself from outside, as the breeder must see her. The grand tragedy shrunk to a seaside production is self-mocking, and it names extreme emotion without naming grief.',
        },
      ],
      question:
        'How does Macdonald use language and structure to present her feelings about the second hawk and her request in lines 46-70?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Minor sentences',
      example:
        '“Concentration. Infinite caution.” (line 11), and in the same paragraph the italic “Thump.” (line 12)',
      effect:
        'Fragments without main verbs slow time to a crawl while the hinges are untied. The reader is held in the same suspense as Macdonald, so the release, when it comes, feels like an explosion. Minor sentences return later for her reactions, showing thought reduced to single impressions.',
    },
    {
      technique: 'Polysyndeton in one long sentence',
      example:
        'Lines 13-17: the sentence in which the hawk is pulled out, strung together with and after and, ending on “brilliance and fury”',
      effect:
        'After the fragments, one sentence that will not stop. Clauses tumble over one another as the wings, feet, talons and noise all arrive at once, and the reader has no pause for breath. Structure imitates experience: too much is happening to be sorted into separate sentences.',
    },
    {
      technique: 'Extended list of contradictory metaphors',
      example:
        '“She is a conjuring trick. A reptile. A fallen angel.” (lines 20-21), followed by a mythical beast, gold and a broken puppet',
      effect:
        'Each image cancels the one before it, moving between magic, the prehistoric, the holy and the broken. The effect is of a creature that exceeds language, and of a writer so overwhelmed that she can only keep trying. Precise answers comment on the contradictions, not just the number of images.',
    },
    {
      technique: 'Simile, including deliberate bathos',
      example:
        '“as if someone had punched it, hard, from within” (line 8); “like a turkey in a butcher’s shop” (line 24)',
      effect:
        'The first simile makes the hidden hawk violent and almost human; the second drags the scene from glory down to a dead bird hung up for sale. Together they show the range of Macdonald’s tone and her refusal to romanticise. The turkey also introduces an image of death into the most alive moment in the extract.',
    },
    {
      technique: 'Literary allusion',
      example:
        'The hawk’s raised feathers like the quills of a “fretful porpentine” (line 19, from Hamlet); “a sort of madwoman in the attack” (line 51, alluding to Bertha Mason in Jane Eyre); “a seaside production of Medea” (line 68)',
      effect:
        'Macdonald thinks through literature. The porpentine comes from the Ghost’s speech to his son in Hamlet, a play about a son grieving a dead father, which gives the image a buried sadness for readers who catch it. The Victorian melodrama that introduces the madwoman, and the seaside Medea, both cast strong emotion as theatre, which lets her be honest and self-mocking at once.',
    },
    {
      technique: 'Contrasting sound imagery',
      example:
        'The first hawk emerges to a “twittering” (line 15); the second “wailed” (line 52), in sounds like a creature in pain',
      effect:
        'The two birds are defined by their voices. Twittering is small, young and almost comic; wailing is a sound we associate with mourning. It is worth arguing that Macdonald cannot bear the second hawk partly because its voice sounds like the pain she has not named.',
    },
    {
      technique: 'Shift of perspective into the hawk',
      example:
        'Lines 26-31: the hawk has known only an aviary and a box, and now sees the sea, a diving cormorant, parked cars, far hills and gulls all at once',
      effect:
        'For a few lines Macdonald narrates from inside the bird’s eyes, with a long list of distant, glittering detail. It shows empathy and imagination, and it makes the hawk a creature with her own experience rather than only a symbol. It is also, in one reading, how Macdonald feels: a whole world falling into eyes that were not ready for it.',
    },
    {
      technique: 'Hyperbole and self-deprecating humour',
      example:
        '“a monstrous breach of etiquette” (line 60), and her own rambling questions to the breeder in lines 60-64',
      effect:
        'Macdonald exaggerates the rudeness of her request and reports her own stumbling words without mercy. The humour makes her likeable and stops the extract becoming self-pitying, while the desperation underneath it remains clear.',
    },
  ],

  structureForm: [
    {
      heading: 'Form: literary memoir',
      body: 'H is for Hawk is memoir: true events, told in the first person by the woman they happened to, and shaped with the techniques of fiction. Macdonald’s father died in 2007 and the book appeared in 2014, so she is writing years after the events. That distance explains the double voice of the extract: the self who lived the moment, overwhelmed and stammering, and the self who writes, precise, allusive and willing to laugh at the other. Her purpose is less to inform than to make the reader feel what the first meeting was like.',
    },
    {
      heading: 'Three movements and a reversal',
      body: 'The extract falls into three parts. Lines 1-45: the first box, the hawk revealed, the hood. Lines 46-48: a reversal, in two very short paragraphs, when the ring numbers show she is the wrong bird. Lines 49-70: the second box, Macdonald’s failure to recognise the hawk, and her plea. The shape is a rise to a climax, a sudden drop, and then a second, very different crisis that is social and emotional rather than physical.',
    },
    {
      heading: 'The tense shift',
      body: 'The extract is told in the past tense until line 15, where, in the middle of a sentence, the verbs switch to the present. The present tense lasts through the whole description of the hawk and her view of the world, and the past returns at line 32 with the breeder’s calm. The effect is that the most intense moment is relived rather than remembered, and that the return to the past tense feels like a return to order.',
    },
    {
      heading: 'Pace through sentence length',
      body: 'Macdonald controls tempo very deliberately. Short fragments in lines 11-13 slow time as the hinges are untied; a single sprawling sentence in lines 13-17 releases it; the very short sentences at lines 46-48 stop it dead. Answers that track these changes, with line numbers, are writing precisely about structure, rather than simply listing sentence types.',
    },
    {
      heading: 'Echo and repetition: the wrong bird',
      body: 'The breeder’s remark in lines 3-4, that he does not want her going home with the “wrong bird”, turns out to be ironic foreshadowing: at line 46 the first hawk proves to be exactly that, and by the end of the extract the bird the forms call wrong is the one Macdonald wants. The ritual is repeated too: ring numbers are checked at the start, at line 45 and again at lines 57-58, and a hood is fitted to each hawk. Because the procedure is the same both times, the difference in Macdonald’s response to the two birds stands out sharply.',
    },
    {
      heading: 'Italics as an inner voice',
      body: 'The anthology prints a small number of words in italics, and they are worth noticing. Some are emphasis, such as the thump at line 7, the final Thump at line 12, the second enormous at line 16 and everything at line 27. The count of one, two, three at line 42 is italic too, as is the title Medea at line 68. Others are Macdonald’s thoughts: the one-word paragraph at line 48, and her repeated certainty about which hawk is hers at lines 53, 57 and 59. The first time the phrase “my hawk” appears, at lines 46-47, it is in ordinary type, as a fact from the forms; afterwards it becomes an insistent voice in her head.',
    },
    {
      heading: 'A roving point of view',
      body: 'The extract is first person, but the viewpoint moves. It enters the hawk’s eyes (lines 26-31), then reads concern in the breeder’s face and tells his history with her as a chick (lines 35-39), and finally looks back at Macdonald herself through the breeder’s eyes (lines 66-68). That last movement is striking: the only description of what she looks like is from outside, which one reading takes as a sign that grief has made her a stranger to herself.',
    },
    {
      heading: 'An ending that does not resolve',
      body: 'The extract stops on a sentence about “total silence” at line 70, before the breeder speaks. It is a suspended ending, close to a cliffhanger: the reader is left in the same position as Macdonald, waiting. Do not write that the extract resolves her grief or shows her training or flying the hawk; those belong to the rest of the book. The silence also leaves the most important thing unsaid, which suits an extract that never names its real subject.',
    },
  ],

  vocabulary: [
    {
      term: 'goshawk',
      definition:
        'A large, powerful woodland hawk that hunts prey such as pigeons, crows, squirrels and rabbits. The female is much larger than the male; both hawks in the extract are female, and the older one is much bigger.',
    },
    {
      term: 'falconer',
      definition:
        'A person who trains and flies hawks or falcons. The anthology introduction describes Macdonald as experienced, which makes her loss of composure more telling.',
    },
    {
      term: 'Article 10s',
      definition:
        'Government certificates needed before a specimen of an endangered species listed in Annex A of the wildlife trade rules can be sold. The extract explains them as the official forms that travel with captive-bred rare birds all their lives. Such a bird carries a uniquely numbered closed ring, which is why the ring numbers are checked against the forms.',
    },
    {
      term: 'hood',
      definition:
        'A light leather cap fitted over a hawk’s head. The extract itself explains its purpose at lines 9-10: to keep the hawk from frightening sights.',
    },
    {
      term: 'braces',
      definition:
        'In the extract, the part of the hood that Macdonald draws closed at lines 44-45 to fasten it on the hawk’s head.',
    },
    {
      term: 'jesses',
      definition:
        'Short leather straps fastened to a hawk’s legs, by which the falconer holds her. The anthology glosses the word in a footnote.',
    },
    {
      term: 'primaries',
      definition:
        'The long flight feathers at the outer end of a bird’s wing, which drive it forward through the air. Macdonald notices their dark tips cutting the air.',
    },
    {
      term: 'hackles',
      definition:
        'The feathers along the back and sides of a bird’s neck. At line 41 the hawk’s hackles are raised, like the hair of a frightened animal.',
    },
    {
      term: 'talons',
      definition:
        'The hooked claws of a bird of prey. They are heard scratching inside the box before the hawk is seen.',
    },
    {
      term: 'porpentine',
      definition:
        'An old word for a porcupine, glossed in the anthology’s footnote. Macdonald borrows it from the Ghost’s speech in Hamlet, Act 1, Scene 5, where the Ghost says his tale could make his son’s hair stand on end like its quills. Editions of Hamlet differ over the adjective before it.',
    },
    {
      term: 'illuminated bestiary',
      definition:
        'A bestiary is a medieval book describing many kinds of animals (the anthology’s footnote glosses the word); illuminated means decorated by hand with colour and gold. The phrase makes the hawk glow like a picture in an ancient manuscript.',
    },
    {
      term: 'griffon',
      definition:
        'A legendary creature with the body of a lion and the head and wings of an eagle, also spelt griffin or gryphon. It makes the hawk mythical as well as real.',
    },
    {
      term: 'marionette',
      definition:
        'A puppet worked by strings. A broken marionette suggests limbs flailing out of control, beautiful and pitiful at once.',
    },
    {
      term: 'cormorant',
      definition:
        'A large, dark waterbird that dives to hunt fish. It is one of the distant details the hawk takes in from the quayside.',
    },
    {
      term: 'lumpen',
      definition:
        'Lump-like and shapeless. Used of the newly hatched chick, it contrasts sharply with the powerful bird she has become.',
    },
    {
      term: 'intimation',
      definition:
        'A hint or indirect suggestion. Macdonald feels only a brief hint of the hawk’s thin skull under her feathers as she fits the hood.',
    },
    {
      term: 'melodrama',
      definition:
        'A play with a sensational plot and exaggerated emotions, hugely popular on the Victorian stage. Macdonald uses it to describe the way the second hawk comes out of her box, loud and overwrought.',
    },
    {
      term: 'etiquette',
      definition:
        'The accepted rules of polite behaviour. Asking to swap birds after the money has changed hands breaks them, which is why her request is so painful to make.',
    },
    {
      term: 'Medea',
      definition:
        'The heroine of a Greek tragedy by Euripides, first performed in 431 BC: a woman betrayed by her husband whose grief and rage drive her to terrible revenge. The anthology prints the name in italics, as the title of a play.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Helen Macdonald use language and structure to present her first meeting with the hawk?',
        skill: 'Language and structure analysis of the anthology text',
        guidance: [
          'Open with an overview: the meeting is overwhelming, and Macdonald presents it as both wonderful and frightening, with grief beneath it.',
          'Build-up, lines 5-13: the simile of the punch and the minor sentences. Explain how the slowed pace creates suspense.',
          'The release, lines 13-17: the single long sentence and the switch to the present tense at line 15. Explain why reliving the moment makes it vivid.',
          'The description, lines 17-31: the list of contradictory metaphors, then the bathos of the turkey. Comment on the contradictions, not just the number of images.',
          'The shift into the hawk’s point of view, lines 26-31: what it shows about Macdonald’s empathy.',
          'End with the reversal at lines 46-48, so the structure of the whole meeting is covered, and link back to your overview.',
        ],
      },
      {
        question:
          'How does Macdonald use language and structure to show her changing feelings in lines 46-70?',
        skill: 'Language and structure analysis of a section',
        guidance: [
          'Start with the reversal: the flat sentence at lines 46-47 and the one-word paragraph at line 48. Explain the effect of the white space.',
          'The second hawk: the melodrama and madwoman allusions, and the sound of her wailing compared with the first hawk’s twittering.',
          'Her failure to recognise the bird, and the italic refrain about which hawk is hers. Explain how italics make it an inner voice.',
          'The plea: hyperbole about etiquette, the stammering questions, the ellipsis. Explain the comedy and the desperation together.',
          'The ending: the view of herself through the breeder’s eyes, the Medea image, and the silence. Argue what the unresolved ending does to the reader.',
        ],
      },
      {
        question:
          'Compare how Helen Macdonald in H is for Hawk and Kari Herbert in The Explorer’s Daughter present their feelings about wild animals.',
        skill:
          'Comparison of two texts (in the exam the second text is unseen; another anthology text is used here for practice)',
        guidance: [
          'Begin with a comparative overview: both writers watch wild animals intently, and both have mixed feelings, but for different reasons. Macdonald is close enough to touch her hawk; Herbert watches from a lookout on the shore.',
          'Compare purpose and situation: Macdonald is receiving a hawk she will live with; Herbert is watching a hunt. Say what each writer wants the reader to feel.',
          'Compare language: choose a method from each text (for Macdonald, the list of metaphors or the bathos) and compare effects, not just techniques.',
          'Compare structure: how each writer builds to a moment of intensity, and where each leaves the reader at the end.',
          'Keep every paragraph comparative, using connectives such as whereas, similarly and in contrast, and support each point from both texts.',
        ],
      },
      {
        question: 'From lines 32-45, what do we learn about the breeder?',
        skill:
          'Retrieval practice: short, accurate points in your own words, as a warm-up for close reading',
        guidance: [
          'Read only the lines named: points from elsewhere in the extract answer a different question.',
          'Make separate, brief points: he stays calm; he handles the hawk skilfully; he is concerned for her; he has cared for her since she hatched in an incubator; he hand-fed her as a chick.',
          'Use your own words where you can, and keep any quotation very short.',
          'Do not analyse: retrieval questions reward accurate facts, not interpretation.',
        ],
      },
    ],
    tips: [
      'The extract never mentions Macdonald’s father or her grief. The introduction does. Say that the introduction tells us, then show how the language hints: this is more accurate, and more impressive, than claiming the extract says it outright.',
      'Use the anthology’s line numbers in every paragraph. They show the examiner you know where things happen, and they make structural comments precise.',
      'The tense shift at line 15 is one of the most useful structural points in the extract, and it is easy to miss. Say where it starts, where it ends (line 32) and why.',
      'Do not just count metaphors. The list at lines 20-23 matters because the images contradict each other; say what the contradictions suggest about the hawk and about Macdonald.',
      'Notice the humour. The madwoman pun, the monstrous breach of etiquette and the seaside Medea are jokes at her own expense, and a strong answer explains how comedy and pain work together.',
      'Do not say the breeder agrees to the swap. The extract ends before he answers, and the silence is the point.',
    ],
  },

  modelAnswer: {
    question:
      'How does Helen Macdonald use language and structure to present her first meeting with the hawk?',
    paragraph:
      'Macdonald presents the first meeting as an experience so overwhelming that ordinary language, and even ordinary time, break down. Before the hawk is seen at all, the box shakes “as if someone had punched it, hard, from within”: the simile gives the unseen bird the force of a human fist, and the commas around “hard” make the reader feel the blow land. Macdonald then slows time almost to a stop with the minor sentences “Concentration. Infinite caution.”, so that the release, when it comes, feels like an explosion. Structurally, that explosion is marked by a switch from the past to the present tense at line 15, as though Macdonald is no longer remembering the moment but reliving it, and the hawk herself defeats description: she is “a conjuring trick. A reptile. A fallen angel.” Each metaphor cancels the last, moving from illusion to cold-blooded ancestry to a heavenly being cast down, which suggests a creature too strange to be held by any single image. Yet Macdonald refuses to let the moment become simply glorious. Hanging from her jesses, the hawk is “like a turkey in a butcher’s shop”, an image of dead meat that intrudes on the gold and angels. One reading is that death is never far from the mind of a writer whose father, the introduction tells us, died suddenly; the bathos reminds the reader that this wonder is being experienced through grief.',
    commentary: [
      'It opens with an argument about the whole meeting, not a technique, so every quotation that follows serves a point.',
      'Quotations are short and embedded in the sentence, and each is followed by close analysis of particular words, such as the commas around “hard”.',
      'It covers structure as well as language, with a line reference for the tense shift, because the question asks about structure too.',
      'It explains why the metaphors contradict one another instead of simply naming them as a list.',
      'It offers an interpretation of the turkey image as one reading, and uses the anthology introduction for the father rather than claiming the extract mentions him.',
    ],
  },

  timeline: [
    {
      where: 'Page 19, lines 1-10',
      title: 'The paperwork and the first box',
      summary:
        'On the quayside the breeder produces the official forms for the two hawks, and they note the ring numbers. He unties a hinge on the smaller box, and it shakes violently: the hawk inside has worked her hood off.',
      setting: 'A quayside by the sea, beside two travelling boxes',
      who: ['Helen Macdonald', 'The breeder', 'The first hawk'],
      quote: 'as if someone had punched it, hard, from within',
      themes: ['Nature and the wild'],
      tension: 3,
      significance:
        'The hawk is felt before she is seen, and the breeder’s remark about the wrong bird sets up the reversal to come.',
    },
    {
      where: 'Page 19, lines 11-17',
      title: 'The hawk bursts out',
      summary:
        'Short fragments slow time as the last hinges are untied. Then, in one long sentence that slips into the present tense, the breeder pulls out a huge, struggling hawk as sunlight floods over them.',
      setting: 'The quayside, suddenly in full sunlight',
      who: ['Helen Macdonald', 'The breeder', 'The first hawk'],
      quote: 'everything is brilliance and fury',
      themes: ['Nature and the wild'],
      tension: 5,
      significance:
        'The climax of the first half: the switch to the present tense makes it a moment relived, not remembered.',
    },
    {
      where: 'Page 19, lines 17-31',
      title: 'Seeing the hawk',
      summary:
        'Macdonald piles up contradictory images for the hawk, then undercuts them with the sight of her hanging upside down. The viewpoint moves into the hawk, imagining the whole world rushing into her eyes.',
      setting: 'The quayside, with sea, parked cars, hills and gulls in view',
      who: ['Helen Macdonald', 'The first hawk'],
      quote: 'She is a conjuring trick. A reptile. A fallen angel.',
      themes: ['Nature and the wild', 'Identity and self'],
      tension: 4,
      significance:
        'Language fails before the hawk, and Macdonald imagines her way into another creature’s experience.',
    },
    {
      where: 'Pages 19-20, lines 32-45',
      title: 'The breeder’s care, and the hood',
      summary:
        'The breeder calmly gathers the hawk up. Macdonald describes how he fed her by hand as a newly hatched chick, feels a sudden fierce love for him, and fits the hood over the hawk’s head herself.',
      setting: 'The quayside, back in the past tense and in control',
      who: ['Helen Macdonald', 'The breeder', 'The first hawk'],
      quote: 'All at once I loved this man, and fiercely.',
      themes: ['Grief', 'Memory and loss'],
      tension: 3,
      significance:
        'A picture of patient, protective care moves Macdonald out of all proportion, which hints at what she has lost.',
    },
    {
      where: 'Page 20, lines 45-48',
      title: 'The wrong bird',
      summary:
        'The ring numbers show that this is the younger, smaller hawk, meant for another falconer. A short paragraph of clipped sentences, then a paragraph of a single word, mark the fall from wonder to disappointment.',
      setting: 'The quayside, over the paperwork',
      who: ['Helen Macdonald', 'The breeder', 'The first hawk'],
      quote: 'This was not my hawk.',
      themes: ['Identity and self'],
      tension: 3,
      significance:
        'The turning point: the forms say one thing and Macdonald’s feelings another, and the rest of the extract grows from that gap.',
    },
    {
      where: 'Page 20, lines 49-59',
      title: 'The second hawk',
      summary:
        'The other box holds the bigger, darker bird that is officially hers. She wails, and in her eyes Macdonald sees something blank and mad; she does not recognise the bird as hers, even as the sale is completed.',
      setting: 'The quayside, beside the second box',
      who: ['Helen Macdonald', 'The breeder', 'The second hawk'],
      quote: 'a sort of madwoman in the attack',
      themes: ['Nature and the wild', 'Identity and self'],
      tension: 4,
      significance:
        'Recognition proves instinctive: the right bird on paper is the wrong one for her, and the refrain about which hawk is hers takes over.',
    },
    {
      where: 'Page 20, lines 59-70',
      title: 'The plea',
      summary:
        'Macdonald breaks the rules of politeness to ask to swap birds, stammering apologies and questions. She imagines how desperate she must look to the breeder, and the extract ends in silence before he replies.',
      setting: 'The quayside, face to face with the breeder',
      who: ['Helen Macdonald', 'The breeder'],
      quote: 'a seaside production of Medea',
      themes: ['Grief', 'Identity and self'],
      tension: 5,
      significance:
        'Macdonald sees herself from outside for the first time, and the unresolved ending leaves the reader waiting with her.',
    },
  ],

  relationships: [
    {
      from: 'Helen Macdonald',
      to: 'The breeder',
      kind: 'buyer and seller',
      note: 'A polite business handover that turns, within minutes, into sudden love for his care of the hawk and then into a desperate plea that leaves him holding all the power.',
    },
    {
      from: 'Helen Macdonald',
      to: 'The first hawk',
      kind: 'falconer and the hawk she wants',
      note: 'Instant, overwhelming attachment to a bird the paperwork says is meant for someone else. The extract ends before we learn whether she can have her.',
    },
    {
      from: 'Helen Macdonald',
      to: 'The second hawk',
      kind: 'falconer and the hawk meant for her',
      note: 'Officially hers, but Macdonald is frightened and cannot recognise her. The failure of feeling matters as much as the fear.',
    },
    {
      from: 'The breeder',
      to: 'The first hawk',
      kind: 'breeder and the chick he reared',
      note: 'He hand-fed her as a newly hatched chick; his calm concern for her is what moves Macdonald.',
    },
    {
      from: 'The first hawk',
      to: 'The second hawk',
      kind: 'younger and older',
      note: 'A paired contrast: smaller against much bigger, twittering against wailing, a bird Macdonald recognises against one she does not.',
    },
    {
      from: 'Helen Macdonald',
      to: 'Macdonald’s father',
      kind: 'daughter and father',
      note: 'Never mentioned in the extract. The introduction tells the reader of his sudden death, and one reading finds that loss beneath every strong feeling in the passage.',
    },
  ],

  compareWith: [
    {
      title: 'From The Explorer’s Daughter, Kari Herbert',
      href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
      reason:
        'Both writers watch wild animals intently and record their mixed feelings: Herbert watches a narwhal hunt in the Arctic from a lookout on the shore, while Macdonald, close enough to touch, receives a hawk she will live with.',
    },
    {
      title: 'From 127 Hours: Between a Rock and a Hard Place, Aron Ralston',
      href: '/igcse/edexcel-lang/anthology/127-hours',
      reason:
        'Ralston tells his whole accident in the present tense and slows time at its climax, a precise comparison with Macdonald’s slowed-down opening of the box and her switch into the present tense.',
    },
    {
      title: 'From Chinese Cinderella, Adeline Yen Mah',
      href: '/igcse/edexcel-lang/anthology/chinese-cinderella',
      reason:
        'Another memoir in which one tense encounter carries years of family feeling: Mah is summoned to see her father, while Macdonald’s father is present only in the introduction.',
    },
  ],

  contentGuidance: ['mortality', 'mythological_religious'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pages 19-20: the prescribed text. Every quotation, line number and italic was checked against it; the introduction and footnotes are Pearson’s. Its acknowledgements credit the text to Jonathan Cape, 2014, copyright Helen Macdonald 2014, reproduced by permission of The Random House Group Limited and Grove/Atlantic, Inc.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Wikipedia, H is for Hawk: Jonathan Cape, 2014; Samuel Johnson Prize and Costa Book of the Year, 2014; father Alisdair Macdonald, a photojournalist, died suddenly of a heart attack in 2007',
      url: 'https://en.wikipedia.org/wiki/H_is_for_Hawk',
    },
    {
      label:
        'Wikipedia, Helen Macdonald (writer): born 1970; research fellow at Jesus College, Cambridge, and affiliated research scholar in the Department of History and Philosophy of Science; Falcon (Reaktion, 2006); the goshawk named Mabel',
      url: 'https://en.wikipedia.org/wiki/Helen_Macdonald_(writer)',
    },
    {
      label:
        'The Irish Times review: the Scottish quayside, the Northern Ireland breeder arriving with two birds, and Macdonald persuading him to sell her the smaller one, which becomes Mabel',
      url: 'https://www.irishtimes.com/culture/books/bird-tale-that-fails-to-fly-h-is-for-hawk-by-helen-macdonald-1.1917840',
    },
    {
      label:
        'Time review: the hawk came from a breeder in Northern Ireland and was named Mabel; her father was a news photographer',
      url: 'https://time.com/3741838/review-the-angry-bird-of-h-is-for-hawk/',
    },
    {
      label:
        'Wikipedia, H Is for Hawk (film): directed by Philippa Lowthorpe, Claire Foy as Macdonald, UK release 23 January 2026',
      url: 'https://en.wikipedia.org/wiki/H_Is_for_Hawk_(film)',
    },
    {
      label:
        'Folger Shakespeare Library, Hamlet, Act 1, Scene 5: the porpentine line is spoken by the Ghost of Hamlet’s father (the Folger text prints fearful where Macdonald has fretful, hence the guide’s note that editions differ)',
      url: 'https://www.folger.edu/explore/shakespeares-works/hamlet/read/1/5/',
    },
    {
      label:
        'Wikipedia, The Madwoman in the Attic: the phrase refers to Bertha Mason, locked in an attic in Charlotte Brontë’s Jane Eyre',
      url: 'https://en.wikipedia.org/wiki/The_Madwoman_in_the_Attic',
    },
    {
      label: 'Wikipedia, Medea (play): tragedy by Euripides, first performed in 431 BC',
      url: 'https://en.wikipedia.org/wiki/Medea_(play)',
    },
    {
      label: 'Wikipedia, Melodrama: sensational plot, exaggerated emotion, Victorian stage',
      url: 'https://en.wikipedia.org/wiki/Melodrama',
    },
    {
      label: 'Wikipedia, Griffin (also griffon, gryphon)',
      url: 'https://en.wikipedia.org/wiki/Griffin',
    },
    {
      label: 'Wikipedia, Illuminated manuscript',
      url: 'https://en.wikipedia.org/wiki/Illuminated_manuscript',
    },
    {
      label: 'Wikipedia, Flight feather: primaries',
      url: 'https://en.wikipedia.org/wiki/Flight_feather',
    },
    {
      label: 'Wikipedia, Hackles',
      url: 'https://en.wikipedia.org/wiki/Hackles',
    },
    {
      label: 'RSPB, Goshawk: a large woodland hawk; the female is much larger than the male',
      url: 'https://www.rspb.org.uk/birds-and-wildlife/goshawk',
    },
    {
      label: 'RSPB, Cormorant',
      url: 'https://www.rspb.org.uk/birds-and-wildlife/cormorant',
    },
    {
      label:
        'GOV.UK, endangered species certificates for commercial use: Article 10 certificates and closed rings for Annex A birds',
      url: 'https://www.gov.uk/guidance/endangered-species-certificates-for-commercial-use',
    },
    {
      label: 'Wiktionary, lumpen and intimation',
      url: 'https://en.wiktionary.org/wiki/lumpen',
    },
  ],
}
