import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Tyger, William Blake (1794). A supplement: the page at
 * /igcse/edexcel/poetry/the-tyger keeps its overview, context, key quotations,
 * language analysis and form and structure, and this file adds themes, the
 * poem's figures, passages for close reading, vocabulary, exam practice and a
 * model answer, mounted below it.
 *
 * TWO TEXTS OF THE POEM. The anthology (Issue 8, February 2026, page 64, read
 * from Pearson's PDF and rendered as an image on 26 September 2026) prints 24
 * lines in six quatrains, numbered every fifth line, in punctuation close to
 * Blake's own plate (Copy A, British Museum, checked from the scan): ampersands
 * in lines 9 and 12, water'd in line 18, a capital L for the Lamb, and an
 * exclamation mark ending line 16. It is not identical to the plate: it adds a
 * comma after the first Tyger in lines 1 and 21, ends line 2 with a colon where
 * the plate has a semicolon, drops the plate's full stop after skies in line 5,
 * and spells seize in line 8 where Blake etched sieze (the Copy A scan was
 * re-read for these on 26 September 2026 by the fact-check). The edition held in src/data/full-texts/the-tyger.ts is Project Gutenberg
 * #574, which has the same words but modernises all of those (and, watered,
 * lamb, a question mark). The guide test normalises case and punctuation, so
 * every quotation here is printed in the anthology's punctuation and still
 * checked word for word against the held edition. The only word the two texts
 * spell differently that a passage needs is watered in line 18: Extract C
 * prints the held edition's spelling and its pointer says so. Lines 9 and 12
 * are never quoted whole, only in phrases that avoid the ampersands, because
 * the anthology's ampersands cannot match the held edition's "and".
 *
 * WHAT THE PAGE ABOVE GETS WRONG, and this file does not repeat. Against the
 * anthology's page 64 its poem viewer: prints line 1 as "Tyger Tyger," (the
 * anthology has a comma after the first Tyger), ends line 2 with a semicolon
 * (the anthology has a colon), drops the comma after "hand" in line 8, ends
 * line 16 with a question mark (the anthology has the poem's only exclamation
 * mark), and drops the comma after the first Tyger in line 21. Its form section
 * says every stanza except stanza 4 contains a question, when stanza 4 holds
 * three question marks in lines 13 to 15 and is only the one stanza that does
 * not END on one. Its context applies "dark satanic mills", a phrase from a
 * later Blake poem, to the England of 1794 as if it described factories Blake
 * hated, which is a disputed reading presented as fact. Its comparison links
 * all go to the anthology index, not to the poems.
 *
 * Fact-check, 26 September 2026: every quotation and passage re-read against
 * the anthology PDF (page 64, rendered as an image) and the held edition, the
 * comparison poems against pages 53, 60-61, 65 and 69, the January 2019 power
 * question against Pearson's summary, and the Copy A plate against the Commons
 * scan. No misquotation was found. Fixed: a tip called sieze one website's
 * misspelling when it is Blake's own plate spelling; the model answer called
 * both quoted forge lines "verbless" when line 14 has a verb; "dread feet" was
 * given to the maker as fact, though the feet may be the tiger's; Blake's
 * despair at the Terror was "recorded" when the source only says it; and the
 * plate comparison above had missed three differences.
 */
export const guide: StudyGuide = {
  slug: 'the-tyger',
  title: 'The Tyger',
  author: 'William Blake',
  form: 'poem',
  scope:
    'The whole poem, 24 lines in six quatrains, as printed on page 64 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3, for English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem. Line numbers follow the anthology, which numbers every fifth line.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'William Blake (1757-1827); out of copyright. First published in Songs of Innocence and of Experience (1794). Wording, punctuation and line numbers follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), page 64; quotations are also checked against Poems of William Blake, Project Gutenberg eBook #574.',
  },
  workLength: {
    words: 141,
    lines: 24,
    basis:
      "Counted from the anthology printing on page 64 (Issue 8, February 2026), extracted from Pearson's PDF on 26 September 2026: 24 lines in six quatrains, title, poet's name and footnote excluded. 141 words by the validator's count, which does not count the two ampersands in lines 9 and 12; 143 if they are counted as words.",
  },

  native: {
    overview: '/igcse/edexcel/poetry/the-tyger',
    context: '/igcse/edexcel/poetry/the-tyger',
    keyQuotes: '/igcse/edexcel/poetry/the-tyger',
    languageAnalysis: '/igcse/edexcel/poetry/the-tyger',
    structureForm: '/igcse/edexcel/poetry/the-tyger',
  },

  themes: [
    {
      title: 'Creation and the maker',
      body: "The poem is addressed to the tiger, but its real subject is whoever made it. Every stanza asks about the maker, and yet he is never seen whole. Blake builds him out of parts: an “immortal hand or eye” (line 3), a shoulder (line 9), a “dread hand” and “dread feet” (line 12, though the feet could instead be the newly living tiger's), a “dread grasp” (line 15). The word hand appears four times, in lines 3, 8, 12 and 23, so making is imagined as manual work done by someone with a body. In stanza 4 the body gives way to tools, and the questions “What the hammer? what the chain” (line 13) turn the creator into a smith at a forge. One reading links this to Blake's own trade: he was apprenticed to an engraver at fourteen and made his books from metal plates he etched himself, so he imagines the maker as a fellow craftsman. Another reading is that the fragments show the limits of the speaker's imagination: he can picture the tools but not the being who holds them. The second is the more convincing, because the poem never answers a single one of its questions, and a speaker who could see the maker would not need to ask. The anthology's footnote glosses the maker of the Lamb in line 20 as God, but the poem itself never uses that word. It says only he, which keeps the maker as mysterious to the reader as to the speaker.",
    },
    {
      title: 'Awe and terror',
      body: "The phrase “fearful symmetry” (lines 4 and 24) holds the poem's central feeling in two words. Symmetry is a quality of design, balance and beauty; fearful can mean causing fear or feeling it, so the phrase might describe what the tiger does to us or what its maker felt while framing it. Blake keeps wonder and dread fused throughout. The tiger is “burning bright” (line 1), a fire in dark forests, and fire returns in its eyes (line 6), in the fire the maker seizes (line 8) and in the furnace of stanza 4. Fire is beautiful and destructive at once, which is exactly the double feeling the poem describes. The words of fear gather mostly around the maker rather than the animal: dread is used three times (twice in line 12, once in line 15), and only the “dread feet” of line 12 could belong to the tiger instead. The only exclamation mark in the anthology's text falls on “Dare its deadly terrors clasp!” (line 16), as though the speaker's awe breaks out at the thought of holding such danger. Edmund Burke's Enquiry of 1757 had argued that whatever is terrible is a source of the sublime, the overwhelming feeling that vast or dangerous things produce in us, and The Tyger can be read as a poem of the sublime, in which fear is part of the fascination. A weaker reading calls the tiger simply evil. The language will not allow it: the poem admires what it fears.",
    },
    {
      title: 'Daring and forbidden power',
      body: "Dare is the poem's most insistent verb. It appears four times, in lines 7, 8, 16 and 24, and each time it moves the question from what the maker could do to what he would risk. Stanza 2 imagines the maker flying to wherever the tiger's fire first burned and seizing it: “On what wings dare he aspire?” (line 7). Aspire keeps its older, literary sense of rising upward as well as its sense of ambition, so many readers hear Icarus, whose wax-fixed wings failed when he flew too near the sun, and Prometheus, the Titan who stole fire from the gods for humanity and was punished for it. Both are figures of forbidden reaching, and if the echoes are right they make the tiger's creation a kind of transgression. The final stanza completes the shift: the first stanza's “Could frame” (line 4) becomes “Dare frame” (line 24). The question is no longer whether any power was great enough, but whether any power had the nerve. Power in this poem belongs to the tiger, to its maker and to the heavens that throw down their weapons, which is why a question on power, as Pearson set in January 2019, gives so much to write about. A political reading adds a fourth kind. Blake had great hopes of the French Revolution and is said to have despaired at the rise of Robespierre and the Terror; the poem appeared in 1794, and some readers see the tiger as revolutionary energy, magnificent and frightening. That is a reading, not a fact, since the poem names nothing political.",
    },
    {
      title: 'Good, evil and the Lamb',
      body: "Stanza 5 asks the question the whole poem has been circling: “Did he who made the Lamb make thee?” (line 20). The Lamb has a capital letter in the anthology, and it carries two meanings. In Christian tradition the lamb is an image of Christ, whom John the Baptist calls the Lamb of God in the Gospel of John, and in Blake's Songs of Innocence it has a poem of its own, The Lamb, in which a child asks the same question, “Little Lamb, who made thee?”, and answers it in the second stanza: the maker is meek and mild, and “He calls Himself a Lamb”. The Tyger's speaker cannot answer. If one maker made both creatures, then either that maker contains ferocity as well as gentleness, or the world's terrors are part of its design. Line 19 sharpens the problem: “Did he smile his work to see?” A smile could be an artist's satisfaction at a job well done, which would make the tiger part of a good creation, or something colder, pleasure in making danger. Neither reading can be proved. The more convincing one, given how the poem admires the tiger's fire and symmetry, is that Blake is not asking whether the tiger is evil, but whether a world with tigers in it can still be the work of the maker of the Lamb. This is an old question, often called the problem of evil, and the poem asks it in a nursery-rhyme rhythm and leaves it open.",
    },
    {
      title: 'Innocence and experience',
      body: "The Tyger belongs to Songs of Experience, which Blake joined to his earlier Songs of Innocence (1789) in 1794, under a title describing the two books as “Shewing the Two Contrary States of the Human Soul”. Innocence, in these books, trusts that the world is kindly and its maker loving; experience knows about fear, cruelty and power, and asks harder questions. The Tyger shows experience from the inside. Its speaker asks the innocent child's question from The Lamb, who made you, but asks it of a creature that makes the question frightening. The form still belongs to innocence: short lines, most of them seven syllables, rhyming couplets and a chanting repetition that sounds like a children's rhyme. The content does not, and the mismatch is the point, since experience is innocence that has seen too much to be answered simply. Blake did not treat the two states as plainly good and bad. In The Marriage of Heaven and Hell, etched between 1790 and 1793, he wrote that “Without contraries is no progression”, and one of its proverbs calls “the tigers of wrath” wiser than “the horses of instruction”. On that evidence one reading is that Blake values the tiger's energy as much as the lamb's meekness, and needs both to describe the world truthfully. The poem itself stops short of saying so, which is why the reading should be offered as a possibility rather than a conclusion.",
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The only voice in the poem, questioning the tiger and never answered',
      body: "The speaker is never identified. It is tempting to call the voice Blake, but the poem belongs to Songs of Experience, a book of many voices, and it is safer to write the speaker. The speaker talks directly to the tiger, using the older forms thy, thine and thee, but the tiger never replies. Almost everything the speaker says is a question, and the questions change as the poem goes on: where the tiger's fire came from (stanza 2), how its body was made (stanza 3), with what tools (stanza 4), and finally who made it and with what feelings (stanza 5). The grammar strains under the pressure. Line 11 opens a clause, “And when thy heart began to beat”, that seems never to reach its main verb; the speaker jumps instead to the maker's “dread hand” (line 12), as if the thought of the heart starting were too much to follow through. The speaker ends where the poem began, but not unchanged. The one-word alteration in line 24 shows a mind that has moved from wondering about the maker's power to wondering about the maker's nerve.",
    },
    {
      name: 'The Tyger',
      role: 'The creature addressed, more symbol than animal',
      body: 'The anthology spells the creature Tyger in the title and in both refrains, a form that makes a familiar animal look strange to a modern reader. It is less described than conjured. There are no stripes, claws or teeth; instead the tiger is made of fire and of parts: eyes that burn (line 6), a heart with sinews (line 10), a brain forged in a furnace (line 14). The tiger never acts except to burn. Every question in the poem turns on it, yet it is never given a word of its own, which is why many readers treat it as a symbol rather than an animal: of energy, of danger in nature, of the violence in the world, or, in one political reading, of revolution. The poem supports seeing it as magnificent rather than wicked. It is “burning bright”, it has symmetry, and the words of dread cluster around the maker far more than around the tiger. Blake printed the poem with his own coloured picture of a tiger beneath the words and a tree beside them; looking at a reproduction and deciding whether the picture matches the words is a good way into the question of how frightening the tiger really is.',
    },
    {
      name: 'The maker',
      role: 'The unseen creator the questions are really about',
      body: "The poem never names the maker. It calls him only he (lines 7, 19 and 20) and describes him through his body and his tools. The anthology's footnote to line 20 glosses the maker of the Lamb as God, and most readers take the maker to be God; the poem's refusal to say so is part of its method. The maker changes as the questions go on: first an “immortal hand or eye” (line 3), an artist with vision and skill; then a daring flier who seizes fire (lines 7 to 8); then a smith with shoulder, hammer, chain and anvil (lines 9 to 15); and finally a figure who may or may not smile at what he has made (line 19). Some readers go further and suggest that the wings and the seized fire of stanza 2 describe a rebel like Prometheus, so that the tiger might be the work of a daring lesser power rather than of God. It is an interesting possibility, but line 20 pushes against it by imagining a single maker for both the lamb and the tiger. What is certain is that the maker is powerful, physical and unknowable, and that the speaker's words of dread cling to him more than to the tiger.",
    },
    {
      name: 'The stars',
      role: 'Witnesses in heaven at the moment of making',
      body: "Stanza 5 opens with the poem's strangest image: the stars throw down their spears and water heaven with their tears (lines 17 to 18). The poem does not say why. Many readers connect it with the war in heaven in Milton's Paradise Lost (1667), in which the rebel angels led by Satan are defeated and cast out; the stars laying down their weapons would then be a surrender, and the tiger's making would belong to the time of the fall. Another reading is simpler: the heavens weep, in grief or pity, at the creation of something so terrible. The grammar ties the image to the maker, because the stanza asks whether, when the stars did this, the maker smiled. The contrast between weeping stars and a possibly smiling maker is what gives line 19 its unease.",
    },
    {
      name: 'The Lamb',
      role: 'The gentle creature named once, in line 20',
      body: "The Lamb is mentioned only once, but it is central to the poem's argument. A lamb is the traditional Christian image of Christ, and in Songs of Innocence Blake gave it a poem of its own, The Lamb, in which a child asks the lamb who made it and answers gladly that its maker is meek and mild and calls himself a Lamb. Setting the tiger beside the lamb makes them contraries: fierce and gentle, experience and innocence. The Tyger's speaker cannot put the two together, and that failure is the heart of the poem's final question. The Lamb is not printed in the anthology, so an exam answer should use it briefly, as context for line 20, and keep its focus on The Tyger.",
    },
  ],

  extracts: [
    {
      title: 'The opening question',
      where: 'Stanza 1, lines 1-4',
      pointer:
        'The first four lines of the poem, from “Tyger, Tyger, burning bright” to “Could frame thy fearful symmetry?”, anthology page 64.',
      text: 'Tyger, Tyger, burning bright, / In the forests of the night: / What immortal hand or eye, / Could frame thy fearful symmetry?',
      annotations: [
        {
          phrase: 'Tyger, Tyger, burning bright',
          note: 'The speaker calls the creature by name twice, like a summons or a chant. The stress falls on the first syllable of each of the first three words, which drives the line forward, and burning bright makes the tiger a source of light as well as heat.',
        },
        {
          phrase: 'In the forests of the night',
          note: 'The plural forests, and night imagined as a place, make the setting vast and dreamlike rather than a real jungle. Against this darkness the tiger stands out as fire against black.',
        },
        {
          phrase: 'What immortal hand or eye',
          note: 'Hand and eye stand for the whole maker, a synecdoche: the hand that makes and the eye that designs. The small word or shows the speaker unsure even which part of the maker did the work.',
        },
        {
          phrase: 'Could frame',
          note: 'To frame is to shape or construct, as a carpenter frames a house. Could makes this first question one of ability. Remember it, because the final stanza changes this one word.',
        },
        {
          phrase: 'fearful symmetry',
          note: 'Symmetry means balanced, matching design and suggests beauty and order; fearful can mean frightening or frightened. The pairing fuses beauty with terror, the double feeling the whole poem explores.',
        },
      ],
      question:
        'Explore how Blake presents the tiger and the question of its making in the first stanza. Write about the language, the sound and the structure of these four lines.',
    },
    {
      title: 'The forge',
      where: 'Stanza 4, lines 13-16',
      pointer:
        'The whole of stanza 4, from “What the hammer?” (line 13) to “Dare its deadly terrors clasp!” (line 16), anthology page 64.',
      text: 'What the hammer? what the chain, / In what furnace was thy brain? / What the anvil? what dread grasp, / Dare its deadly terrors clasp!',
      annotations: [
        {
          phrase: 'What the hammer? what the chain',
          note: 'The questions have no verbs: bare nouns are thrown out one after another, like the blows of a hammer. The repeated What, a form of anaphora, makes the speaker sound breathless and insistent.',
        },
        {
          phrase: 'In what furnace was thy brain?',
          note: "The tiger's brain, the seat of its instinct and cunning, is imagined forged like metal. Its ferocity becomes something deliberately heated and shaped, not an accident of nature.",
        },
        {
          phrase: 'what dread grasp',
          note: 'Dread can make the grasp terrifying, or suggest that the maker himself felt dread as he held the work. The ambiguity lets the reader wonder whether the maker was frightening or frightened.',
        },
        {
          phrase: 'Dare its deadly terrors clasp!',
          note: 'The inverted word order places Dare first and clasp last, and the alliteration of dare, deadly and dread thuds like the forge. In the anthology this is the only line in the poem that ends with an exclamation mark.',
        },
      ],
      question:
        'How does Blake use the imagery of the forge to present the making of the tiger in lines 13 to 16? Write about the language, the sound and the effect of the questions.',
    },
    {
      title: 'The stars, the Lamb and the changed refrain',
      where: 'Stanzas 5 and 6, lines 17-24',
      pointer:
        "Lines 17 to 24, the whole of stanzas 5 and 6: from “When the stars threw down their spears” to the end of the poem. The anthology spells the verb in line 18 with an apostrophe, water'd, as Blake did; the passage here prints watered, the spelling of the Project Gutenberg edition this site checks against, and is otherwise in the anthology's wording and punctuation.",
      text: 'When the stars threw down their spears / And watered heaven with their tears: / Did he smile his work to see? / Did he who made the Lamb make thee? / Tyger, Tyger burning bright, / In the forests of the night: / What immortal hand or eye, / Dare frame thy fearful symmetry?',
      annotations: [
        {
          phrase: 'threw down their spears',
          note: "The stars lay down their weapons. Many readers connect this with the rebel angels defeated in the war in heaven in Milton's Paradise Lost, which would make it a moment of surrender and defeat.",
        },
        {
          phrase: 'heaven with their tears',
          note: 'The stars weep, in grief or pity, so the heavens themselves seem to respond to the making of the tiger. The rhyme of spears with tears ties the image of weapons to sorrow.',
        },
        {
          phrase: 'Did he smile his work to see?',
          note: 'The inverted word order holds the verb see back to the end, for the rhyme. The smile is ambiguous: an artist pleased with a job well done, or something colder, pleasure in making danger.',
        },
        {
          phrase: 'Did he who made the Lamb make thee?',
          note: "The poem's central question sets two creatures, and two kinds of creation, side by side. The capital L, which is Blake's own, invites a reading of the Lamb as an image of Christ, and the anthology's footnote glosses the maker as God.",
        },
        {
          phrase: 'Dare frame',
          note: 'One word has changed from line 4. Could asked whether any maker was able; Dare asks whether any maker would risk it. The circular structure returns to the start, but the fear has deepened.',
        },
      ],
      question:
        'Explore how Blake presents the maker of the tiger in lines 17 to 24. Write about the image of the stars, the two questions in lines 19 and 20, and the effect of the changed final line.',
    },
  ],

  vocabulary: [
    {
      term: 'Tyger (title, lines 1 and 21)',
      definition:
        "The poem's spelling of tiger. Printed with a y and a capital, it makes the familiar animal look strange and almost like a name, which suits a poem that treats the tiger as a symbol.",
    },
    {
      term: 'immortal (lines 3 and 23)',
      definition:
        'Never dying; belonging to a god or gods rather than to mortal humans. It tells us at once that the maker the speaker imagines is divine or superhuman.',
    },
    {
      term: 'frame (lines 4 and 24)',
      definition:
        'To shape, build or put together, as a carpenter frames a house. It makes creation a matter of construction and design.',
    },
    {
      term: 'fearful (lines 4 and 24)',
      definition:
        'Causing fear, or feeling it. Both senses fit: the tiger is frightening, and its maker may have been afraid of what he was making.',
    },
    {
      term: 'symmetry (lines 4 and 24)',
      definition:
        "Balance between matching parts, as between the two sides of a tiger's face or its stripes. It suggests order, design and beauty, which is why its pairing with fearful is so striking. To a modern ear it rhymes only loosely with eye, the one imperfect rhyme in a poem of close couplets, and it comes twice, in the first and last stanzas.",
    },
    {
      term: 'deeps (line 5)',
      definition:
        'Depths, especially of the sea. Set against skies, it makes the speaker search the whole universe, from the lowest places to the highest, for the source of the fire.',
    },
    {
      term: 'thy, thine, thee',
      definition:
        "Older forms of your and you, used here to address the tiger directly. To a modern reader they sound like the language of prayer and of older poetry, which gives the speaker's questions a solemn, almost worshipping tone.",
    },
    {
      term: 'aspire (line 7)',
      definition:
        'To rise up or soar, an older and literary sense, as well as the everyday sense of aiming high. Both are present: the maker flies upward, and his ambition may be forbidden.',
    },
    {
      term: 'seize (line 8)',
      definition:
        'To grab suddenly and forcefully. Seizing fire, rather than being given it, suggests daring or theft, which is why readers think of Prometheus.',
    },
    {
      term: 'art (line 9)',
      definition:
        'Here in its older sense of skill or craft, not painting. Set beside shoulder, it gives the maker both strength and technique.',
    },
    {
      term: 'sinews (line 10)',
      definition:
        'Tendons, the tough cords that join muscle to bone; also, more generally, strength. Twisting sinews makes creation sound physical and violent.',
    },
    {
      term: 'dread (lines 12 and 15)',
      definition:
        'As a noun, great fear; as an adjective, causing great fear or awe. The dread hand and dread grasp may be terrifying, or may be gripped by fear themselves.',
    },
    {
      term: 'furnace (line 14)',
      definition:
        "An enclosed fire hot enough to soften or melt metal. It continues the poem's fire imagery and makes the tiger's brain something forged.",
    },
    {
      term: 'anvil (line 15)',
      definition:
        'The heavy iron block on which a smith hammers heated metal into shape. With hammer, chain and furnace, it completes the picture of the maker as a blacksmith.',
    },
    {
      term: 'clasp (line 16)',
      definition:
        'To grip or hold tightly. Clasping deadly terrors makes the maker hold danger in his hands, and the anthology ends this line with an exclamation mark.',
    },
    {
      term: "watered, printed water'd (line 18)",
      definition:
        "The anthology keeps Blake's spelling with an apostrophe, the old way of showing that the -ed ending is not sounded as a separate syllable. The stars water heaven with their tears, as rain waters the ground.",
    },
    {
      term: 'the Lamb (line 20)',
      definition:
        "A lamb is a traditional Christian image of Christ, and The Lamb is also the title of Blake's companion poem in Songs of Innocence. The anthology's footnote glosses the one who made the Lamb as God.",
    },
    {
      term: 'Songs of Innocence and of Experience',
      definition:
        'The collection Blake issued in 1794, joining his Songs of Innocence (1789) to a new set of Songs of Experience, which includes The Tyger. He printed the pages from copper plates he etched himself and finished the pictures by hand in colour.',
    },
    {
      term: 'contraries',
      definition:
        "Blake's word for paired opposites that both belong to life, such as innocence and experience, or the lamb and the tiger. His title page says the two books show the two contrary states of the human soul.",
    },
    {
      term: 'the sublime',
      definition:
        "An overwhelming feeling of awe produced by something vast, powerful or dangerous. Edmund Burke's Enquiry of 1757 argued that whatever is terrible is one of its sources, a useful idea for a poem that admires what it fears.",
    },
    {
      term: 'apostrophe',
      definition:
        'In poetry, speaking directly to someone or something that cannot answer, here the tiger. It makes the poem feel like an urgent, one-sided conversation.',
    },
    {
      term: 'synecdoche',
      definition:
        'Using a part to stand for the whole. The maker appears as a hand, an eye, a shoulder and feet, never as a complete figure, which keeps him mysterious.',
    },
    {
      term: 'anaphora',
      definition:
        'Repeating a word or phrase at the start of successive lines or clauses. The repeated What of stanza 4 makes the questions come like hammer blows.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Compare how the writers present power in ‘The Tyger’ and one other poem from the anthology.',
        skill:
          'Comparison essay on two anthology poems, one chosen by you: language, form and structure. Pearson set a question in this form in January 2019; its published summary abbreviates the wording.',
        guidance: [
          'Choose your second poem for its contrast as well as its likeness. ‘My Last Duchess’ offers human, controlling power; ‘Do not go gentle into that good night’ the power of feeling set against death; ‘La Belle Dame sans Merci’ the power a beautiful figure holds over a knight.',
          'Open with a comparative argument rather than a summary. For example: Blake presents power as something to be wondered at, held by a maker the speaker can only question, while Browning presents power as something to be judged, used by a speaker who reveals more than he means to.',
          "Separate the kinds of power in ‘The Tyger’: the tiger's own (its fire and “deadly terrors”), the maker's (hand, forge and daring) and the heavens', whose stars throw down their spears, perhaps in surrender. Strong answers show that the poem is more interested in the maker's power than the animal's.",
          'Analyse method closely: the hand and eye that stand for the maker, the forge of stanza 4, the four uses of dare, and the change from “Could frame” (line 4) to “Dare frame” (line 24). Quote briefly and explain single words.',
          'Give form and structure real weight: questions that are never answered, the insistent rhythm and the circular structure. Set these beside the form of your second poem, for example a dramatic monologue in which one voice holds all the power.',
          'Compare inside paragraphs, with connectives such as whereas and similarly, and give the two poems roughly equal attention.',
          'End with a judgement: which poem makes power more unsettling, and why.',
        ],
      },
      {
        question:
          'Compare the ways the writers present a sense of wonder in ‘The Tyger’ and ‘Blessing’.',
        skill: 'Comparison essay on two named anthology poems: language, form and structure',
        guidance: [
          "Define wonder in your introduction: amazement mixed with awe, which can include fear. Blake's wonder is fearful and Dharker's is joyful, but both treat something in the physical world as close to divine.",
          'In ‘The Tyger’, trace the fire imagery (lines 1, 6, 8 and 14) and the paradox of “fearful symmetry”. Explain how questions are the grammar of wonder here: the speaker cannot stop asking.',
          'In ‘Blessing’, look at how Dharker presents water in a place where there is never enough: first a single imagined drip, then a burst municipal pipe, a crowd rushing out with every kind of container, and children flashing with light in the flow. Notice the religious words she uses for an ordinary accident.',
          'Compare the sources of wonder: a maker Blake cannot see or name, against a broken pipe whose water the people of ‘Blessing’ receive as a gift.',
          "Compare structure: Blake's six regular quatrains and circular return against Dharker's free verse in irregular stanzas, the longest of which comes as the water bursts out.",
          "Conclude on the difference in feeling: Blake's wonder leaves the speaker with a question he dare not answer, while Dharker's leaves the reader with an image of blessing that is joyful and, because it is so rare, precarious.",
        ],
      },
      {
        question:
          'Compare how the writers present a powerful and dangerous figure in ‘The Tyger’ and ‘La Belle Dame sans Merci’.',
        skill: 'Comparison essay on two named anthology poems: language, form and structure',
        guidance: [
          "Open by defining each figure's power: the tiger's is fiery and physical, and implies a maker more powerful still; the lady's is enchantment, a beauty that leaves the knight pale and alone on a cold hillside.",
          "Compare the use of questions. Both poems open with them, but the questions put to Keats's knight are answered, since the knight tells his story from stanza 4 onwards, whereas Blake's questions to the tiger never are. Explain what that difference does to each poem's mystery.",
          "Compare how beauty and danger are fused: “fearful symmetry” and “burning bright” against the lady's beauty, her wild eyes, her faery's song and her strange language, followed by the warning of the pale kings and warriors.",
          "Compare form: Blake's rhyming couplets and chanting rhythm against Keats's ballad stanzas, each with a short fourth line. Both poets borrow the forms of song for something frightening.",
          "Consider the voices: Keats's knight is a victim who can tell what happened to him, while Blake's speaker is a witness who cannot explain what he sees.",
          'End with a judgement: in which poem is the danger better understood, and in which is it more frightening because it is not?',
        ],
      },
      {
        question:
          'Compare how the writers use repetition and structure to express strong feelings in ‘The Tyger’ and ‘Do not go gentle into that good night’.',
        skill: 'Comparison essay on two named anthology poems: language, form and structure',
        guidance: [
          "Name the repeating structures precisely. ‘The Tyger’ repeats its first stanza as its last with one word changed (lines 4 and 24), and repeats words such as what, dare, hand and dread. Thomas's poem is a villanelle: nineteen lines built on two refrains that alternate and then come together at the end.",
          "Explain what repetition does in each. In ‘The Tyger’ it creates a chant, like a summoning or a prayer, and questions pile up without answers. In Thomas's poem each refrain is a command, repeated as though repetition could make it come true.",
          "Compare the fire and light imagery: the tiger “burning bright”, the fire of its eyes and the furnace, against Thomas's images of burning, lightning and blazing set against the dark.",
          'Compare the endings. Blake returns to his start with Dare in place of Could, a small change that shows a deepened fear; Thomas brings his two refrains together straight after a direct plea to his father.',
          'Consider who is addressed: a creature that cannot answer, and a father whose reply the poem never gives. Both poems speak to someone who is silent in the poem.',
          "Conclude on which poem's repetition feels more like control and which more like helplessness, and why.",
        ],
      },
    ],
    tips: [
      "Learn the anthology's punctuation, not a website's. Editions differ: some open with exclamation marks, some modernise the spelling of line 18 and the ampersands of lines 9 and 12, some keep Blake's own spelling of seize in line 8, which on his plate is sieze, and some end line 16 with a question mark where the anthology has an exclamation mark. The words hardly change, but if you comment on punctuation, make sure it is the anthology's.",
      "Do not say that every stanza is a question, or that stanza 4 has none. In the anthology stanzas 1, 2, 3, 5 and 6 all end with a question mark; stanza 4 is full of questions but ends with the poem's only exclamation mark, at the height of the forge imagery.",
      "The change from “Could frame” to “Dare frame” is the best-known feature of the poem, so noticing it is not enough. Say what it does: a question about ability becomes a question about nerve, and the speaker's fear has grown.",
      "Write about the maker as much as the tiger. Most of the poem's questions are about who made the creature and how; an answer that only describes the tiger misses most of the poem.",
      'Do not call the tiger evil as if that were settled. The language admires it as well as fearing it, and a stronger answer weighs awe against terror and says which dominates where.',
      "Use context lightly. Pearson's own summary of past questions describes this section as assessing language, form and structure, so The Lamb, the French Revolution or Blake's work as an engraver should appear only where they sharpen a point about the words.",
      "Write the speaker, not Blake, unless you are making a deliberate point about the poet, and call the creator the maker: the poem never uses the word God, though the anthology's footnote does.",
      'Name techniques precisely and explain them in the same sentence: apostrophe (addressing the tiger), synecdoche (hand and eye for the maker), rhetorical questions, the forge as an extended metaphor, rhyming couplets.',
      'Keep the comparison running through every paragraph, and choose a second poem that lets you argue about differences, not only list similarities.',
    ],
  },

  modelAnswer: {
    question:
      'Compare how the writers present power in ‘The Tyger’ and one other poem from the anthology.',
    paragraph:
      "Both poets present a power that is most frightening when it is glimpsed rather than shown, but Blake invites the reader to marvel at it while Browning invites us to judge it. Blake never lets us see the tiger's maker whole. Instead the speaker assembles him from parts, a “dread hand” and “dread feet”, and then from the tools of a forge: “What the hammer? what the chain, / In what furnace was thy brain?” The bare, verbless “What the hammer?” falls like a blow, so the rhythm enacts the labour, and the image of a brain heated in a furnace suggests that the tiger's ferocity was deliberately made. The power here is creative, and the speaker's response is awe: dare is used four times, and its last use turns the opening “Could frame” into “Dare frame”, so that the question moves from whether anyone was able to make such a creature to whether anyone had the nerve. Browning's Duke uses power in the opposite direction, to end rather than to make. His “I gave commands” is as brief and unexplained as Blake's questions are insistent, and the words that follow, “Then all smiles stopped together”, let the Duchess's fate, which the poem implies but never states, pass in a single line. Where Blake's questions leave the reader wondering at a power beyond understanding, the Duke's calm statements leave us horrified by one that is all too human.",
    commentary: [
      "It opens with a comparative argument that distinguishes two kinds of power and the reader's response to each, rather than summarising either poem.",
      'Its quotations are short, exact and embedded, and it analyses single words and small choices: the verbless question that opens stanza 4, the repeated dare, and Could against Dare.',
      "It treats form and structure as meaning, linking the rhythm of the forge question to hammer blows and the changed refrain between lines 4 and 24 to the speaker's growing fear.",
      'The comparison is integrated rather than bolted on: the second poem arrives with a clear pivot, in the opposite direction, and is set against Blake point by point, brevity against insistence.',
      "It is careful about what the poems actually say. It calls the Duchess's death implied, not stated, and it calls Blake's creator the maker, because the poem never names him.",
      'It ends with a judgement that answers the question, which is what separates a strong answer from a competent survey of both poems.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-4',
      title: 'Burning in the dark',
      summary:
        'The speaker addresses the tiger directly, picturing it blazing in dark forests, and asks what immortal hand or eye could have shaped its fearful symmetry.',
      setting: 'The forests of the night',
      who: ['The speaker', 'The Tyger', 'The maker'],
      quote: 'Could frame thy fearful symmetry?',
      themes: ['Awe and terror', 'Creation and the maker'],
      tension: 3,
      significance:
        "The first question sets the poem's method: the tiger is described so that its maker can be asked about.",
    },
    {
      where: 'Stanza 2, lines 5-8',
      title: 'Where the fire came from',
      summary:
        "The speaker wonders in what distant depths or skies the fire of the tiger's eyes first burned, and imagines the maker flying there and daring to seize it.",
      setting: 'Distant depths of sea and sky',
      who: ['The speaker', 'The maker', 'The Tyger'],
      quote: 'On what wings dare he aspire?',
      themes: ['Daring and forbidden power', 'Creation and the maker'],
      tension: 3,
      significance:
        'Making becomes a risk: the verb dare enters the poem, twice in two lines, and returns in lines 16 and 24.',
    },
    {
      where: 'Stanza 3, lines 9-12',
      title: 'The heart begins to beat',
      summary:
        "The maker is imagined with shoulder and skill twisting the sinews of the tiger's heart. As the heart starts to beat, the sentence seems to break off into fragments about a dread hand and dread feet.",
      setting: 'The moment of making',
      who: ['The speaker', 'The maker', 'The Tyger'],
      quote: 'Could twist the sinews of thy heart?',
      themes: ['Creation and the maker', 'Awe and terror'],
      tension: 4,
      significance:
        'The broken grammar suggests the speaker cannot bear to follow the thought of the creature coming alive.',
    },
    {
      where: 'Stanza 4, lines 13-16',
      title: 'The forge',
      summary:
        "The questions become the tools of a smithy: hammer, chain, furnace and anvil. The speaker asks what grasp would dare to hold the tiger's deadly terrors, and the stanza ends in an exclamation.",
      setting: 'An imagined forge, with furnace and anvil',
      who: ['The speaker', 'The maker', 'The Tyger'],
      quote: 'In what furnace was thy brain?',
      themes: ['Creation and the maker', 'Daring and forbidden power', 'Awe and terror'],
      tension: 4,
      significance:
        'The most physical stanza of the poem, and in the anthology the only one that does not end with a question mark.',
    },
    {
      where: 'Stanza 5, lines 17-20',
      title: 'The stars and the Lamb',
      summary:
        'The stars throw down their spears and weep. The speaker asks whether the maker smiled at his work, and whether the one who made the Lamb also made the tiger.',
      setting: 'The heavens',
      who: ['The stars', 'The maker', 'The Lamb', 'The Tyger', 'The speaker'],
      quote: 'Did he who made the Lamb make thee?',
      themes: ['Good, evil and the Lamb', 'Innocence and experience'],
      tension: 5,
      significance:
        "The poem's deepest question: whether gentleness and ferocity can come from the same maker.",
    },
    {
      where: 'Stanza 6, lines 21-24',
      title: 'The question returns, changed',
      summary:
        'The first stanza returns almost word for word, but its last line now asks what immortal hand or eye would dare, rather than could, frame the fearful symmetry.',
      setting: 'The forests of the night, again',
      who: ['The speaker', 'The Tyger', 'The maker'],
      quote: 'Dare frame thy fearful symmetry?',
      themes: ['Daring and forbidden power', 'Awe and terror'],
      tension: 3,
      significance:
        "The circular structure brings no answer, but one changed word shows how far the speaker's fear has grown.",
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The Tyger',
      kind: 'questioner and addressee',
      note: 'The speaker talks to the tiger throughout, as thy and thee, but it never answers. The one-sided conversation is the shape of the whole poem.',
    },
    {
      from: 'The maker',
      to: 'The Tyger',
      kind: 'maker and made',
      note: "Every question concerns how the tiger was made and with what nerve. Its fire and symmetry are the evidence of the maker's power.",
    },
    {
      from: 'The maker',
      to: 'The Lamb',
      kind: 'maker and gentle creation',
      note: "In Blake's companion poem the Lamb's maker is meek and mild. Line 20 asks whether that same maker also made the tiger.",
    },
    {
      from: 'The Tyger',
      to: 'The Lamb',
      kind: 'contraries',
      note: "Fierce against gentle: the two creatures are usually read as standing for the two contrary states of Blake's collection, experience and innocence.",
    },
    {
      from: 'The stars',
      to: 'The maker',
      kind: 'witnesses to the making',
      note: 'They throw down their spears and weep at the moment of creation, while the speaker wonders whether the maker smiled (lines 17 to 19).',
    },
    {
      from: 'The speaker',
      to: 'The maker',
      kind: 'questioner and the unseen',
      note: 'The questions are really about the maker, who is never seen whole, never named in the poem and never replies.',
    },
  ],

  compareWith: [
    {
      title: '‘La Belle Dame sans Merci’ by John Keats',
      href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
      reason:
        "Both poems open with questions and fuse beauty with danger, but the questions put to Keats's knight are answered by his story, while Blake's are never answered.",
    },
    {
      title: '‘My Last Duchess’ by Robert Browning',
      href: '/revision/poetry/power-and-conflict/my-last-duchess',
      reason:
        "A strong choice for a question on power: Blake's mysterious, creative power set against the Duke's controlling, human power, revealed in his own voice.",
    },
    {
      title: '‘Do not go gentle into that good night’ by Dylan Thomas',
      href: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
      reason:
        'Both poems use refrains and images of fire and light to express intense feeling, and both address someone who is silent in the poem.',
    },
    {
      title: '‘Blessing’ by Imtiaz Dharker',
      href: '/revision/texts/blessing',
      reason:
        "Both present something in the physical world as close to divine, but Blake's wonder is fearful while Dharker's is joyful.",
    },
  ],

  contentGuidance: ['mythological_religious'],

  quotesFromElsewhere: [
    'Little Lamb, who made thee?',
    'He calls Himself a Lamb',
    'Shewing the Two Contrary States of the Human Soul',
    'Without contraries is no progression',
    'the tigers of wrath',
    'the horses of instruction',
    'I gave commands',
    'Then all smiles stopped together',
  ],

  sources: [
    {
      label:
        "Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, page 64, extracted from the PDF and rendered as an image on 26 September 2026: the poem as prescribed, its punctuation (commas after hand in line 8 and after the first Tyger in lines 1 and 21, ampersands in lines 9 and 12, water'd, the capital L, the exclamation mark ending line 16), its six-quatrain layout, line numbering every fifth line and the footnote glossing line 20 as God. Every quotation checked against this text. Also read for the comparison questions and the model answer: page 65 (My Last Duchess, lines 45 to 46), page 53 (Blessing, stanza shape and images, paraphrased only), pages 60 to 61 (La Belle Dame sans Merci: the questioner's first three stanzas, the knight's story from stanza 4, the wild eyes, faery's song, language strange, pale kings and cold hill side) and page 69 (Do not go gentle into that good night: nineteen lines, two refrains, the plea to the father).",
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Poems of William Blake, Project Gutenberg eBook #574: the held edition (src/data/full-texts/the-tyger.ts), same words as the anthology in modernised punctuation, printed under Songs of Experience; also The Lamb, under Songs of Innocence, for its opening question, its second-stanza answer, meek and mild, and the line on the maker calling himself a Lamb.',
      url: 'https://www.gutenberg.org/ebooks/574',
    },
    {
      label:
        'Academy of American Poets, The Lamb: independent check of the two phrases quoted from it (this text prints lamb in lower case in the opening question).',
      url: 'https://poets.org/poem/lamb',
    },
    {
      label:
        "Academy of American Poets, The Tyger: a third text, read in its page source on 26 September 2026. It opens with exclamation marks, keeps Blake's plate spelling sieze in line 8, keeps water'd and ends line 16 with a question mark; used only to show students how editions differ.",
      url: 'https://poets.org/poem/tyger',
    },
    {
      label:
        "Wikimedia Commons, scan of The Tyger, Copy A (British Museum), from the William Blake Archive: viewed to confirm the plate's picture of a tiger beneath the poem with a tree beside it, and that Blake's own plate has the ampersands, water'd, the capital L and the exclamation mark ending line 16. Re-read by the fact-check on 26 September 2026: the plate also has no comma after the first Tyger in lines 1 and 21, a semicolon ending line 2, a full stop after skies in line 5 and the spelling sieze in line 8, where the anthology differs.",
      url: 'https://commons.wikimedia.org/wiki/File:The_Tyger_BM_a_1794.jpg',
    },
    {
      label:
        'Wikipedia, The Tyger: published 1794 in Songs of Experience; six four-line stanzas, largely trochaic tetrameter with some iambic lines such as line 4; sister poem to The Lamb.',
      url: 'https://en.wikipedia.org/wiki/The_Tyger',
    },
    {
      label:
        'Wikipedia, Songs of Innocence and of Experience: Songs of Innocence printed 1789; the two combined in 1794 under the title Songs of Innocence and of Experience Shewing the Two Contrary States of the Human Soul (title page reproduced there).',
      url: 'https://en.wikipedia.org/wiki/Songs_of_Innocence_and_of_Experience',
    },
    {
      label:
        'Academy of American Poets, William Blake: born in London on 28 November 1757, died 1827; apprenticed to an engraver at fourteen for seven years; text and pictures printed from copper plates, each picture finished by hand in watercolour; Songs of Innocence 1789, Songs of Experience 1794, The Marriage of Heaven and Hell 1790-93.',
      url: 'https://poets.org/poet/william-blake',
    },
    {
      label:
        'Wikipedia, William Blake: apprenticed to James Basire on 4 August 1772; great hopes for the French and American revolutions, and despair with the rise of Robespierre and the Reign of Terror (the political context is offered in the guide only as a reading).',
      url: 'https://en.wikipedia.org/wiki/William_Blake',
    },
    {
      label:
        "The Marriage of Heaven and Hell, John W. Luce and Company edition (Boston, 1906), Project Gutenberg eBook #45315: the sentence on contraries and progression, and the proverb that the tigers of wrath are wiser than the horses of instruction, quoted in this edition's spelling.",
      url: 'https://www.gutenberg.org/ebooks/45315',
    },
    {
      label:
        'Pearson, Summary of questions set for 4ET1, SAMs to January 2019 (Issue 1, February 2021), rendered and read on 26 September 2026: January 2019 Paper 1 Section B, question 3, asked candidates to compare how the writers present power in The Tyger and one other poem from the anthology; the section is headed as assessing language, form and structure. The table says its questions are abbreviated.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/summary-of-questions-set-for-4et1-sams-to-january-2019.pdf',
    },
    {
      label:
        'Edmund Burke, A Philosophical Inquiry into the Origin of our Ideas of the Sublime and Beautiful (1757), Part I, Section VII, in The Works of Edmund Burke, vol. 1, Project Gutenberg eBook #15043: whatever is in any sort terrible is a source of the sublime. Date cross-checked with Wikipedia.',
      url: 'https://www.gutenberg.org/ebooks/15043',
    },
    {
      label:
        'King James Version, John 1:29, via Bible Gateway: John the Baptist calls Jesus the Lamb of God.',
      url: 'https://www.biblegateway.com/passage/?search=John%201%3A29&version=KJV',
    },
    {
      label: 'Wikipedia, Prometheus: punished by Zeus for stealing fire and giving it to humans.',
      url: 'https://en.wikipedia.org/wiki/Prometheus',
    },
    {
      label:
        'Wikipedia, Icarus: wings made by Daedalus from feathers and beeswax; warned not to fly too close to the sun.',
      url: 'https://en.wikipedia.org/wiki/Icarus',
    },
    {
      label:
        'Wikipedia, Paradise Lost: first published 1667; Raphael tells of the War in Heaven in Book 6; Satan cast out of Heaven after his rebellion.',
      url: 'https://en.wikipedia.org/wiki/Paradise_Lost',
    },
    {
      label:
        'Wiktionary, aspire: the archaic and literary sense of moving upward, beside the sense of ambition.',
      url: 'https://en.wiktionary.org/wiki/aspire',
    },
    {
      label:
        'Wiktionary, fearful: frightening, causing fear; and frightened, tending to fear or filled with it.',
      url: 'https://en.wiktionary.org/wiki/fearful',
    },
  ],
}
