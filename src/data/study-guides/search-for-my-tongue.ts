import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Search For My Tongue, Sujata Bhatt (1988). A COMPLETE guide: the text had no
 * guide anywhere, so this file is its whole page.
 *
 * THE TEXT. Every quotation was copied from the poem as printed on pages 54
 * and 55 of the Pearson Edexcel International GCSE English Anthology, Issue 8
 * (February 2026), read from Pearson's own PDF (ISBN 978 1 446 93108 0) both as
 * extracted text and as rendered page images on 25 September 2026, and each
 * line number was checked against the anthology's margin numbering (5 to 35).
 * The English lines were cross-checked against an independent teaching copy
 * (University of Glasgow, UNESCO RIELA spring school), which agrees on every
 * quoted phrase. That copy misprints line 4 as "two tongue"; the anthology page
 * image reads "two tongues", which is what is quoted.
 *
 * THE LIMIT. The poem is counted at 194 words (see workLength), so the site's
 * 15 per cent allows 29 distinct quoted words, and this page quotes exactly
 * these nine items and nothing else in quotation marks: lost my tongue (l.2),
 * two tongues (l.4), rot and die (l.13), spit it out (ll.14, 15), stump of a
 * shoot (l.31), grows (ll.31-32), the other tongue in knots (l.33), the bud
 * opens (l.34), blossoms out of my mouth (l.38). Every other quoted word on the
 * page (rot, tongue, the other tongue, knots, stump, mouth and so on) is part
 * of one of these and adds nothing. Mother tongue and foreign tongue are used
 * unquoted, as the ordinary English terms they are. Adding a quotation means
 * removing words elsewhere: run the test.
 *
 * THE GUJARATI (lines 17-30). Seven lines of Gujarati script, each followed by
 * a bracketed transliteration. Per the registry note, none of it is quoted. The
 * anthology prints no translation. What this guide says about its meaning rests
 * on the English translation printed by Halstead and Pike (2006), seen in Google
 * Books snippets on 26 September 2026: the Gujarati first says again what lines
 * 15-16 say (she felt she had spat out her tongue and whole language, and at
 * night, in the dream, her language returns), then has the language, the
 * tongue, blossom like a flower in the mouth and ripen in the mouth. It is
 * paraphrased, never quoted. (An earlier draft credited the ripening to Rogers
 * 2020; no snippet of Rogers could be found that shows it, so that attribution
 * was removed.) Several revision websites say the Gujarati means "It grows
 * back", or that lines 31-38 translate it; the published translation
 * contradicts both, and neither claim is repeated here.
 *
 * AN EXTRACT, THOUGH THE ANTHOLOGY DOES NOT SAY SO. Eunice de Souza, Nine
 * Indian Women Poets (1997), describes the poem in Brunizem as eight pages long;
 * the 38 lines here fill under two anthology pages, and AQA's former GCSE
 * anthology printed it as "from Search For My Tongue". Pearson prints it under
 * the bare title. So where the guide speaks of the ending, it says the ending
 * of the anthology's section. Flagged in the report for the registry.
 */
export const guide: StudyGuide = {
  slug: 'search-for-my-tongue',
  title: 'Search For My Tongue',
  author: 'Sujata Bhatt',
  form: 'poem',
  scope:
    'The poem as printed on pages 54 and 55 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3: 38 lines in three sections, English (lines 1-16), Gujarati (lines 17-30, seven lines in Gujarati script, each followed by a transliteration in brackets) and English again (lines 31-38). Line numbers in this guide follow the anthology’s margin numbering, which counts each Gujarati line and each transliteration as a line. In Bhatt’s collection Brunizem the poem is much longer, so the anthology prints a section of it; that section is what you study. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1 (Poetry and Modern Prose), Section B, where it is compared with another Part 3 poem.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Sujata Bhatt 1988. From Brunizem (Carcanet Press, 1988), as printed in the Pearson Edexcel International GCSE English Anthology, which reproduces it with permission of Carcanet Press Limited. Short quotations for criticism and review.',
  },
  workLength: {
    words: 194,
    lines: 38,
    basis:
      'Counted on 25 September 2026 from pages 54 and 55 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF, title and author line excluded, using the site validator’s word count: 157 words of English in 24 lines, and 37 words of Gujarati in 7 lines. The Gujarati is printed twice, once in Gujarati script and once transliterated into the Roman alphabet, and is counted once here, from the transliteration; the script lines hold the same 37 words, counted by eye from the rendered page. Counting both forms would give 231 words, but that would let the same words printed twice raise the quotation limit, so the lower figure is used. The 38 lines match the anthology’s own margin numbering, which places 35 against the line in which the mother tongue forces English out of the way.',
  },

  overview: {
    summary: [
      'Someone has asked the speaker to explain a claim she has made, that her tongue is lost, and the poem is her answer. She does not define the phrase; she makes the listener imagine it. Suppose you had “two tongues” in one mouth, lost the first, your mother tongue, and never fully mastered the second. Suppose, too, that everyday life had to be lived in that second language. Then, she warns, the first would “rot and die” in the mouth, until there was nothing left to do but “spit it out”. In line 15 the hypothetical becomes a confession, as she admits she thought she had done exactly that. Then, halfway through a sentence about dreaming, the poem switches into Gujarati.',
      'Lines 17 to 30 are Gujarati, printed in its own script with a transliteration in brackets under each line, and the anthology gives no translation. When English returns in line 31, the lost tongue is growing back like a cut plant, from a “stump of a shoot”. It lengthens and strengthens, ties “the other tongue in knots”, opens like a bud and forces English out of the way. The last sentence turns the whole story into a pattern: whenever she believes her first language has gone, it “blossoms out of my mouth”.',
      'The poem runs on a single extended metaphor. In English, tongue means both the muscle in your mouth and a language, and Bhatt never lets the two meanings come apart: a language can be lost like a part of the body, decay like dead flesh, be spat out, and regrow like a plant. Its boldest move is its form. By printing Gujarati that most readers of the anthology cannot understand, the poem puts them, for fourteen lines, where lines 6 and 7 asked the listener to imagine standing: in front of a tongue they cannot follow.',
      'This guide argues that the poem disproves one of its own early claims. Lines 8 and 9 insist that two languages cannot be used together, yet the poem itself uses both, and the mother tongue survives at the centre of a poem written mainly in English. A reasonable alternative reading is darker: the ending is a victory of one tongue over the other rather than a peace between them, and the last sentence admits the fear of forgetting keeps returning. Both readings are worth making in an exam, and the best answers weigh them. For Pearson Edexcel International GCSE English Literature the poem is studied with the other fifteen Part 3 poems and compared with one of them; Half-caste, Piano, Blessing and Poem at Thirty-Nine make strong partners.',
    ],
  },

  context: [
    {
      heading: 'Sujata Bhatt',
      body: 'Sujata Bhatt was born in 1956 in Ahmedabad, in the state of Gujarat in western India, and her mother tongue is Gujarati. She grew up in Pune, and in 1968 her family emigrated to the United States, where she was educated and took an MFA at the Writers’ Workshop of the University of Iowa. She was later writer-in-residence at the University of Victoria in Canada, and she has long lived in Bremen, Germany. She writes her poems in English. That life, moving between India, North America and Europe, is the background most readers bring to this poem, and the poem invites it: the speaker has two tongues and lives where she must use the one she did not grow up with. It is still safer in an answer to write about the speaker than about Bhatt, because the poem never presents itself as autobiography.',
    },
    {
      heading: 'Brunizem (1988)',
      body: 'The poem comes from Bhatt’s first collection, Brunizem, published by Carcanet in 1988, which won the Commonwealth Poetry Prize (Asia) and the Alice Hunt Bartlett Award. Her publisher explains the title as the name of a dark prairie soil found in Asia, Europe and North America, three continents it links to the worlds of her imagination, and describes the collection as exploring both the riches and the conflicts that come from moving between cultures and languages. A book named after soil suits a poem in which a cut-down tongue grows back from its stump. One reading is that, for Bhatt, identity is something that grows out of where you come from, and can grow again wherever you are replanted.',
    },
    {
      heading: 'A section of a longer poem',
      body: 'In Brunizem, Search For My Tongue is a much longer piece: the critic and anthologist Eunice de Souza describes it as an eight-page poem in which Gujarati lines are followed by the same lines in Roman script and then by English, which she calls a translation. The Pearson anthology prints 38 lines of it across two pages, under the poem’s own title. AQA’s former GCSE anthology, which also set the poem, printed it with the word from in front of the title to mark it as an extract. None of this changes what you study: for the exam, the anthology’s 38 lines are the poem, and every line number in this guide refers to them. It does mean that when this guide talks about the ending, it means the ending of the anthology’s section.',
    },
    {
      heading: 'The Gujarati lines',
      body: 'Gujarati is an Indo-Aryan language, native to the state of Gujarat and spoken by tens of millions of people. It has its own script, a variant of Devanagari, which is why lines 17, 19, 21, 23, 25, 27 and 29 look so different on the page. Each is followed by a transliteration, the same words spelled out in the Roman alphabet, so that an English reader can sound them without understanding them. The anthology gives no translation. A translation printed in a book that discusses the poem shows the Gujarati first saying again, in her first language, what lines 15 and 16 have just said in English: that she felt she had spat out her tongue, her whole language, and that at night, in a dream, her language returns. Its later lines then have her language, her tongue, blossoming like a flower and ripening in her mouth, so the Gujarati reaches the flowering before the English does, and in its own language. Many revision websites call lines 31 to 38 a translation of the Gujarati. They are not a close one: the ripening in the published translation never appears in the English, which continues the sentence and develops its images in its own way.',
    },
    {
      heading: 'Tongue, language and moving countries',
      body: 'English has long used tongue to mean a language, and mother tongue for the language a person learns first, the one they grow up with. The idiom to lose your tongue normally means something much smaller: to be unable, for a moment, to think of anything to say. The poem takes that everyday phrase and makes it literal and enormous. The fear behind it is one that many people who move countries, or whose children grow up abroad, will recognise: that the language of home will fade through lack of use while the language of school and work takes over. Some critics have also read the poem as post-colonial, placing it in the history of English in India, but the poem itself never mentions empire, so treat that as a reading rather than as the poem’s subject.',
    },
  ],

  themes: [
    {
      title: 'Language and identity',
      body: 'The poem’s central claim is that a language is not a tool you carry but a part of your body. In line 2 the speaker does not say she has forgotten Gujarati; she says she has “lost my tongue”, as if something had been cut out of her. Everything that happens to the language afterwards happens in her mouth: it decays there, is spat out of it, grows back inside it and blossoms out of it. If your language is part of your body, losing it is an injury and speaking it again is a kind of healing. Notice too where the poem places the Gujarati: in the middle, surrounded by English, in a script most English readers cannot read. The mother tongue is literally at the heart of the poem, which suggests it is at the heart of the self even when English surrounds it. One reading goes further and says the speaker’s real identity is Gujarati, with English as an outer layer. A more convincing reading, given that the poem is written mostly in English, is that her identity is the whole bilingual poem: both tongues, in conflict, in one mouth.',
    },
    {
      title: 'Loss and the fear of forgetting',
      body: 'The first half of the poem is dominated by fear. Its conditional verbs present the loss as the inevitable result of circumstance: live where you must speak a foreign tongue, and this is what will happen. The images are unpleasant on purpose. A language that will “rot and die” is imagined as dead flesh, and the only thing left to do with it is to “spit it out”, an act of disgust and rejection. The switch from the second person to the first in line 15 shows that the fear was never really hypothetical: she believed it had already happened to her. Even the hopeful ending does not remove the fear. The final sentence says the tongue returns whenever she believes it forgotten, which means she keeps on believing it forgotten. The fear of loss is part of the pattern, not something the poem leaves behind, and that is worth saying in an exam, because many answers call the ending simply triumphant.',
    },
    {
      title: 'Two languages in conflict',
      body: 'The poem does not imagine two languages living peacefully side by side. Lines 8 and 9 state that you could not use both together, and the rest of the poem acts that out as a struggle. In the first section the foreign tongue is winning: the mother tongue decays, dies and is expelled. In the last section the positions are reversed, and the mother tongue ties “the other tongue in knots” and shoves it aside. The same words, the other, describe English in line 6 and again in lines 33 and 35, but the balance of power has flipped: first it was the tongue she could not fully know, finally it is the tongue being overpowered. One reading sees this as a triumphant homecoming. Another, which this guide finds truer to the words, sees a relationship in which one language can rise only when the other falls, so the speaker is never fully at ease in either. And yet the poem’s form quietly argues with its own statement, since the poem does use both languages together, on one page. Strong answers notice that tension between what the poem says and what it does.',
    },
    {
      title: 'Renewal and resilience',
      body: 'The turn comes with the word but in line 16, and with the dream. What the speaker believed she had lost returns without any effort of hers, in the night, while she sleeps, and it returns in Gujarati. The regrowth is then described entirely through plants. A “stump of a shoot” is what is left when a plant has been cut down, and it is also where new growth starts; the verb “grows” is repeated four times in two lines, as though the growth were speeding up before our eyes. The bud opens, and in the last line the tongue blossoms. These are images of something alive that cannot be stopped by being cut back, and they answer the images of decay in lines 12 to 14 one by one: rot becomes growth, death becomes flowering, spitting out becomes blossoming out. The title promised a search, but the speaker never finds her tongue by searching. It finds her. That may be the poem’s most hopeful idea: that a first language lives deeper than the conscious mind, in dreams, and survives even when its speaker believes it has gone.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The poem’s single voice: a bilingual woman whose mother tongue is Gujarati, living where she has to speak a foreign tongue.',
      body: 'We learn about her only through how she talks. She is patient and a little challenging with her questioner: rather than define her phrase, she turns the question round and makes the listener imagine the experience. She is honest about her fears and her failures, admitting in line 15 that she thought she had spat her language out. And she is capable of wonder: the repeated bud of line 34 sounds like someone watching something extraordinary happen inside her. Most readers identify her with Bhatt, whose mother tongue is Gujarati and who moved from India to the United States in 1968, and the poem supports that reading, but it never says so, and an exam answer is on firmer ground calling her the speaker. Her voice changes across the poem, explanatory and conversational at first, confessional at line 15, and finally close to rapture. The change of language in the middle is her change of voice at its most extreme.',
    },
    {
      name: 'The listener',
      role: 'The unnamed person addressed as you in lines 1 to 14, who has asked what the speaker means.',
      body: 'The listener never speaks in the poem, but their question starts it: line 1 reports that they have asked what she meant. Perhaps they took the idiom literally; perhaps they could not imagine the problem at all. The speaker’s answer turns them from questioner into subject, because from line 3 the you of the poem is being asked to imagine having two tongues, losing one and watching it decay. By the end of line 14 the listener, and the reader with them, has been made to live through the loss in imagination. Then the poem drops them. From line 15 the speaker talks only about herself, and the Gujarati section shuts out anyone who cannot read it, which probably includes the listener and certainly includes most readers of the anthology. One reading is that the listener stands for an English-speaking world that expects newcomers to explain themselves; a gentler reading sees simply a curious friend. The poem does not settle it.',
    },
    {
      name: 'The mother tongue',
      role: 'The speaker’s first language, Gujarati, imagined as a living part of her body and then as a plant.',
      body: 'The mother tongue is the poem’s real protagonist, and its story has a clear shape. In lines 1 to 16 it only undergoes things: it is lost, it decays and dies, it is spat out. In the Gujarati lines it speaks for itself, in its own script. From line 31 the tongue, or its bud, is the subject of every main clause: it grows, ties the other tongue up, opens, shoves it aside and blossoms. The shift from something that suffers to something that acts is the poem’s whole argument, carried by its grammar. Personified like this, the mother tongue behaves as though it had a will of its own, which is exactly the speaker’s experience of it: she does not bring it back, it comes back. It is worth noticing that the poem gives the foreign tongue no such life. English is never the subject of a verb anywhere in the poem; it is only ever known, used, spoken, tied and shoved.',
    },
  ],

  keyQuotes: [
    {
      text: 'lost my tongue',
      where: 'Line 2 (anthology page 54)',
      analysis:
        'The phrase that starts the poem is an idiom: to lose your tongue normally means to be unable, for a moment, to think of anything to say. The speaker means something far larger, the loss of a whole language, and the listener’s question in line 1 suggests they heard only the everyday meaning. Bhatt uses that gap to launch her extended metaphor. Because a tongue is part of the body, losing it sounds like an injury, even a mutilation, and the possessive my makes the language part of who she is. Everything that follows answers the question of what she meant, so the whole poem can be read as an explanation of these three words.',
    },
    {
      text: 'two tongues',
      where: 'Line 4 (anthology page 54)',
      analysis:
        'The speaker turns the question back on the listener and asks them to picture a mouth with two tongues in it. The image is deliberately strange, almost grotesque, and that is its point: it makes bilingualism feel crowded and physical rather than abstract, and it forces a listener who may speak only one language to imagine an experience they have never had. The number matters too. Once there are two, there is a contest, and the poem is built as that contest: first one tongue wins, then the other. Notice that line 4 still addresses you. The speaker has not yet admitted that this is her own mouth.',
    },
    {
      text: 'rot and die',
      where: 'Line 13 (anthology page 54), completing the “rot” that ends line 12',
      analysis:
        'The mother tongue is imagined as living tissue that decays if it is not used. The word “rot” ends line 12 and begins line 13, a repetition across the line break that slows the reader down and makes the decay feel gradual and unstoppable, and the heavy monosyllables add to the weight. The conditional grammar of lines 10 to 14 presents all this as the inevitable result of living where you must speak a foreign tongue, which is exactly the assumption the rest of the poem overturns. The disgust is intentional: the mouth, the place of speech, becomes a place of decay. The images of rot here are answered one by one by images of growth in lines 31 to 38.',
    },
    {
      text: 'spit it out',
      where: 'Lines 14 and 15 (anthology page 54)',
      analysis:
        'The phrase appears twice, and the difference between the two is the poem’s turning point. In line 14 it is still hypothetical: this is what you would have to do. In line 15 it is confession: she thought she had done it. Spitting is a violent, disgusted act of rejection, which suggests that the pressure to fit in made her treat her own language as something foul. There is an irony in the idiom too, since “spit it out” is what you say to someone who will not tell you what they mean, and she has just been asked what she means. One further reading: line 15 uses “spit”, not spat, as its past tense, the form more common in North American English. At the very moment she describes spitting out Gujarati, her grammar may be showing the foreign tongue she has absorbed.',
    },
    {
      text: 'stump of a shoot',
      where: 'Line 31 (anthology page 55), the first line after the Gujarati',
      analysis:
        'This is the first English after the Gujarati, and the tongue has become a plant. A stump is what is left when something is cut down, which recalls the lost and spat-out tongue of the first section: it was cut back, but not destroyed. A shoot is new growth. Together the two nouns turn an image of amputation into one of pruning, the cutting back that makes a plant grow again. The phrase is small and tentative, a stump rather than a flower, so the recovery starts modestly before it gathers pace. Line 31 begins with a lower-case letter, carrying on the sentence broken off at the end of line 16, so grammatically the regrowth is what the dream produces.',
    },
    {
      text: 'grows',
      where: 'Lines 31 and 32 (anthology page 55), four times',
      analysis:
        'The verb appears four times in two lines, each time with a new result: the tongue returns, lengthens, becomes wet with life, and develops veins. The repetition at the start of each phrase, in a list with no conjunctions, creates speed, as if the growth were filmed and played back fast. The additions matter. Moisture means life, the opposite of the decaying tongue of line 13. Veins belong to both leaves and bodies, so the image fuses the plant and the tongue: sap and blood at once. The present tense makes the regrowth happen as we read, and the contrast with the slow, dragging repetition of “rot” in lines 12 and 13 could hardly be sharper.',
    },
    {
      text: 'the other tongue in knots',
      where: 'Line 33 (anthology page 55)',
      analysis:
        'The returning tongue ties English up, and the image reverses an idiom: to be tongue-tied is to be unable to speak freely. Now it is the foreign tongue that is tongue-tied and the mother tongue that is free. The words “the other” point back to line 6, where the other was the language she could not fully know. The label has not changed, but the power has: the tongue that once crowded out the first is now being bound by it. Knots suggest the twisting stems of a climbing plant, but also a struggle, and this is where the ending stops sounding peaceful. Is the mother tongue returning, or taking revenge? A strong answer can argue that the poem imagines only victory and defeat, never sharing.',
    },
    {
      text: 'the bud opens',
      where: 'Line 34 (anthology page 55), said twice in the line',
      analysis:
        'The phrase is repeated within the line, and the repetition slows the moment down, like someone watching a flower open and hardly believing it. A bud opening is a traditional image of beauty and new life, and it transforms the mouth: in the first section the mouth was where language decayed, and now it is where language flowers. The line ends with the bud inside her own mouth. In the first section the mouth was always yours (lines 4 and 13); here and in line 38 it is always hers. The speaker has moved from explaining to a listener to describing her own body, and from the general case to herself.',
    },
    {
      text: 'blossoms out of my mouth',
      where: 'Line 38 (anthology page 55), the last line of the anthology’s section',
      analysis:
        'The section ends on flowering, the opposite of the rot of line 13, so the poem’s two key images frame it: decay at the start, blossom at the end. The words “out of my mouth” matter as much as the verb. The flower does not stay inside her; it comes out, as speech does, so the image suggests she is speaking her mother tongue again, not only dreaming it. But the sentence it ends describes something that happens again and again, not once. The blossoming is a pattern, not a single victory, and each time it is preceded by the belief that the language has gone. The most convincing reading of the ending is therefore resilient rather than triumphant: the mother tongue will keep coming back, and the speaker will keep fearing that it will not.',
    },
  ],

  extracts: [
    {
      title: 'The question and the warning',
      where: 'Lines 1-14, anthology page 54',
      pointer:
        'From the first line of the poem to the end of line 14, the first time the tongue has to be spat out: the upper half of anthology page 54, before the line numbered 15.',
      summary:
        'Someone has challenged the speaker to explain her claim that her tongue is lost. Instead of defining the phrase, she asks the listener to picture a mouth holding two tongues, the first lost and the second never properly learned. She then argues that the two cannot be used side by side, and warns that anyone forced to live in a second language would feel the first decay in the mouth until it had to be expelled.',
      annotations: [
        {
          phrase: 'lost my tongue',
          note: 'An idiom for being lost for words, stretched to mean the loss of a whole language. The listener’s puzzlement in line 1 is the gap the poem sets out to fill.',
        },
        {
          phrase: 'two tongues',
          note: 'A deliberately strange physical image that makes bilingualism crowded and bodily, and sets up the contest between two languages that shapes the whole poem.',
        },
        {
          phrase: 'rot and die',
          note: 'The mother tongue imagined as dead flesh. Because the word rot also ends line 12, the decay is stretched across the line break and feels gradual and certain.',
        },
        {
          phrase: 'spit it out',
          note: 'Disgust and rejection: the language becomes something foul to be expelled, and the second person keeps the listener inside the experience rather than watching it.',
        },
      ],
      question:
        'How does Bhatt use the first fourteen lines to make the listener imagine what losing a language is like?',
    },
    {
      title: 'The confession and the dream',
      where: 'Lines 15-33, anthology pages 54-55',
      pointer:
        'From line 15, where the speaker admits she thought she had spat it out, through the Gujarati of lines 17 to 30, to line 33, the third line on anthology page 55.',
      summary:
        'The speaker admits that the hypothetical was her own experience: she believed she had spat her language out. The sentence turns on the word but and on a dream, and the poem switches into fourteen lines of Gujarati script and transliteration, which begin, in a published translation, by saying again in her first language what she has just admitted. When English resumes, in lower case, the tongue is growing back from a stump like a cut plant, gaining length, moisture and veins, and tying English in knots.',
      annotations: [
        {
          phrase: 'spit it out',
          note: 'The phrase repeated from line 14, but now in the first person. What she offered the listener as a hypothetical was her own life all along.',
        },
        {
          phrase: 'stump of a shoot',
          note: 'In the first English line after the Gujarati, the lost tongue is a cut plant beginning to regrow, which turns an image of amputation into one of pruning.',
        },
        {
          phrase: 'grows',
          note: 'Repeated four times in lines 31 and 32, each time with a new result, so the regrowth seems to accelerate like a plant filmed in fast motion.',
        },
        {
          phrase: 'the other tongue in knots',
          note: 'A reversal of being tongue-tied: English is now the tongue that cannot move freely, and the mother tongue is the one in control of the mouth.',
        },
      ],
      question:
        'How does the change of language in the middle of the poem help Bhatt to present the speaker’s feelings about her mother tongue?',
    },
    {
      title: 'Blossoming',
      where: 'Lines 34-38, anthology page 55',
      pointer:
        'The last five lines of the anthology’s section, from the doubled bud at the start of line 34 to the final line, 38, at the foot of the poem on page 55.',
      summary:
        'The bud of the regrowing tongue opens in the speaker’s mouth, the phrase said twice over, and the mother tongue forces English out of the way. The final sentence turns the story into a repeating pattern: each time she believes her first language is forgotten and gone, it comes back and flowers from her mouth.',
      annotations: [
        {
          phrase: 'the bud opens',
          note: 'Repeated within line 34, the phrase slows time down to a moment of wonder, and turns the mouth from a place of decay into a place of flowering.',
        },
        {
          phrase: 'the other tongue',
          note: 'Line 35 repeats the words from line 33. English is never the subject of a verb anywhere in the poem: it is only ever acted upon.',
        },
        {
          phrase: 'blossoms out of my mouth',
          note: 'The final image moves outwards: the flower leaves her mouth as speech does, which suggests she is speaking her language again, not only dreaming it.',
        },
      ],
      question:
        'How does Bhatt use the final lines of the poem to present the relationship between the speaker’s two languages?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Extended metaphor',
      example:
        'The tongue is a body part that is “lost” (line 2), decays (lines 12-13) and is spat out (lines 14-15), then a plant that grows from a “stump of a shoot” (line 31) and “blossoms out of my mouth” (line 38).',
      effect:
        'Sustaining one metaphor across the whole poem makes the loss of a language feel physical rather than abstract: it hurts, it decays, it heals. The metaphor also changes in the middle, from flesh to plant, and that change carries the argument. Flesh that rots is gone for good; a plant cut down to a stump can grow back. By moving from one kind of living thing to the other, Bhatt moves from despair to hope without ever abandoning the image.',
    },
    {
      technique: 'Pun on tongue',
      example:
        'The word, singular or plural, appears nine times in the English lines, from “lost my tongue” in line 2 to “the other tongue” in lines 33 and 35.',
      effect:
        'English uses tongue for both the organ of speech and a language, and the poem depends on keeping both meanings alive at once. Every statement about the language is also a statement about the body, which is why the poem can say that a language decays in the mouth or grows veins. There is a small irony here as well: it is a feature of English, the foreign tongue, that lets her describe the loss of her first language so vividly.',
    },
    {
      technique: 'Direct address and a hypothetical second person',
      example:
        'Lines 1 to 3 report the listener’s question and then turn it back on them; lines 3 to 14 are a sustained hypothetical addressed to you.',
      effect:
        'Rather than tell the listener what language loss is like, the speaker makes them imagine it happening to them, which is more persuasive and more unsettling. The question of lines 3 to 7 invites no answer, and it does not even end with a question mark: line 7 closes on a full stop, as if the speaker already knows the listener has none, and the only honest answer is the poem itself. The second person also keeps the speaker at a distance from her own pain until line 15, when she finally admits that it is hers.',
    },
    {
      technique: 'Imagery of decay and disgust',
      example:
        '“rot and die” (line 13), with “rot” repeated across the line break from line 12, and the tongue that must be spat out (line 14).',
      effect:
        'The images are meant to be unpleasant. A language left unused is not simply forgotten but decays like dead flesh in the mouth, and the only response is to expel it. The repetition of “rot” slows the reader down inside the decay. The disgust also suggests shame: the pressure to use the foreign tongue makes the speaker feel her own language is something foul. These images are set up so that the growth images of lines 31 to 38 can answer them.',
    },
    {
      technique: 'Code-switching and the use of Gujarati script',
      example:
        'Lines 17 to 30: seven lines in Gujarati script, each followed by a transliteration in brackets, with no translation.',
      effect:
        'Switching language mid-sentence is the poem’s boldest technique. For most readers of the anthology the Gujarati is unreadable, so for fourteen lines they stand where lines 6 and 7 asked the listener to imagine standing, in front of a language they cannot fully know. The script also makes a visual point: the mother tongue is not described here but present, taking up space on the page in its own alphabet. The transliteration lets an English reader sound out the words with their own tongue, speaking without understanding. And because no translation is given, the poem refuses to put English in charge of the meaning.',
    },
    {
      technique: 'Natural imagery of growth',
      example:
        '“stump of a shoot” (line 31), “the bud opens” (line 34), “blossoms out of my mouth” (line 38).',
      effect:
        'The images trace a plant’s life in order: a cut stump, a new shoot, a bud, a flower. The sequence makes the recovery feel natural and unstoppable, something that happens rather than something she does. Gardeners cut plants back so that they will grow again, and the poem suggests the same of a language: the attempt to get rid of it only prepares its return. The flowering also gives beauty back to a mouth that, in the first section, was full of decay.',
    },
    {
      technique: 'Anaphora and listing',
      example: '“grows”, four times in lines 31 and 32, in a list with no conjunctions.',
      effect:
        'The repeated verb speeds the verse up and makes the growth feel rapid and irresistible, like a plant in fast motion. Each repetition adds a new quality, from length to moisture to veins, so the tongue becomes steadily more alive. The rhythm contrasts with the slow, heavy repetition of “rot” in lines 12 and 13: the decay dragged, the growth races.',
    },
    {
      technique: 'Personification and grammatical agency',
      example:
        'From line 31 the tongue, or its bud, is the subject of every main clause: it grows, ties the other tongue up, opens, shoves it aside and blossoms.',
      effect:
        'In the first section the mother tongue only undergoes things: it is lost, it decays, it is spat out. In the last section it acts. That change of grammar is the change of power the poem describes, and it gives the language a will of its own, as if it were a character rather than a skill. The foreign tongue, by contrast, is never the subject of a verb anywhere in the poem.',
    },
    {
      technique: 'Idioms taken literally',
      example:
        'To lose your tongue (line 2), to spit it out (lines 14-15), and the tongue-tied English of “the other tongue in knots” (line 33).',
      effect:
        'Each idiom is about speaking, and each is made physical. Losing your tongue normally means being lost for words; telling someone to spit it out means asking them to say something at last; being tongue-tied means being unable to speak freely. Bhatt turns each of them into a literal event in the mouth, so that ordinary English phrases become evidence of how closely language and the body are bound together.',
    },
    {
      technique: 'Contrast and antithesis',
      example:
        'Rot (lines 12-13) against blossom (line 38); spitting out (line 14) against blossoming out (line 38); your mouth (lines 4 and 13) against my mouth (lines 34 and 38).',
      effect:
        'The poem is built on paired opposites, and the second half answers the first image for image. The contrasts give the poem its shape, from fear to hope, and make the recovery feel complete: everything the first section predicted is reversed. But a contrast needs both sides, and the rot is never cancelled. It remains part of the pattern the final sentence describes, in which forgetting and returning keep taking turns.',
    },
  ],

  structureForm: [
    {
      heading: 'Three sections, two languages',
      body: 'The anthology prints the poem in three blocks: sixteen lines of English, fourteen lines of Gujarati (seven lines of script, each followed by its transliteration), and eight lines of English. The shape is a frame, English on the outside and the mother tongue at the centre, and it enacts the poem’s claim that the first language lives on beneath the second: surround it with English and it is still there, at the heart of the poem. The three sections also tell a story, problem, dream and recovery, which gives the poem something of the shape of a narrative.',
    },
    {
      heading: 'A sentence that runs through the dream',
      body: 'The Gujarati is set apart on the page, and its own lines carry full stops, but it does not end the English sentence. Line 16 ends with a comma, and line 31 picks the sentence up again with a lower-case letter, so grammatically the English sentence that begins in line 15 runs through the dream and out the other side, and is completed only in line 35. She believed she had got rid of it, yet in the night, as she dreamt, it returned. The Gujarati sits inside the sentence exactly where the dream sits, and a published translation shows it beginning by saying again, in the mother tongue, what lines 15 and 16 have just said. One reading is that it is the dream, in the mother tongue, that makes the regrowth possible.',
    },
    {
      heading: 'Free verse and a speaking voice',
      body: 'There is no rhyme scheme and no regular metre, and the line lengths vary. The language is plain, mostly monosyllabic and conversational, and the poem begins in the middle of a conversation, answering a question. Free verse suits a poem about speech: it sounds like someone talking rather than reciting, and it gives Bhatt room to set the Gujarati lines on the page at their own lengths, with their own spacing, rather than forcing them into an English pattern.',
    },
    {
      heading: 'From you to I',
      body: 'Lines 1 to 14 are built on the second person, as the speaker makes the listener imagine the loss. Line 15 switches to the first person, and from then on the poem is about her. Watch the mouth: in lines 4 and 13 it is yours, in lines 34 and 38 it is hers. The shift runs from argument to confession to celebration, and it lets the poem move from a general case, anyone who has had to live in a foreign tongue, to one person’s experience. Few answers use this, and it is some of the clearest structural evidence in the poem.',
    },
    {
      heading: 'The turn',
      body: 'Like the volta of a sonnet, the poem has a clear turning point, at line 16, where the conjunction but and the dream reverse the direction of everything before it. Before the turn the tongue declines; after it the tongue grows. What makes Bhatt’s turn unusual is that it is also a change of language: the poem turns not only in its argument but in its alphabet, and the reader feels the turn with their eyes before they understand it.',
    },
    {
      heading: 'Time and tense',
      body: 'The poem moves through time in an unusual order. Lines 1 to 14 are present and conditional, the world of what would happen; line 15 is past, what she thought; lines 31 to 38 are in the present tense, the tongue growing as we read. The last sentence makes that present tense habitual, something that happens every time. The poem therefore ends not with an event but with a pattern, which is why the fear of forgetting and the joy of return both survive to the final line.',
    },
    {
      heading: 'The title, and a section of a longer poem',
      body: 'The title promises a search, but no one searches in the poem. The speaker loses her tongue and it comes back to her in her sleep, so the quest the title announces is answered not by effort but by the unconscious. Remember also that the anthology prints a section of a longer poem in Brunizem: the neat three-part shape described here is the shape of the section you study, and it is that section an examiner will expect you to write about.',
    },
  ],

  vocabulary: [
    {
      term: 'Mother tongue',
      definition:
        'The first language a person learns, the one they grow up with. For the speaker, Gujarati.',
    },
    {
      term: 'Foreign tongue',
      definition:
        'Here, the language the speaker must use where she lives. Most readers take it to be English, the language the poem is mainly written in, though the poem never names it.',
    },
    {
      term: 'Gujarati',
      definition:
        'An Indo-Aryan language native to the state of Gujarat in western India, spoken by tens of millions of people and written in its own Gujarati script, a variant of Devanagari.',
    },
    {
      term: 'Transliteration',
      definition:
        'Writing the words of one language in the alphabet of another. The bracketed even-numbered lines from 18 to 30 give the Gujarati in the Roman alphabet, so it can be sounded out, but they do not translate it.',
    },
    {
      term: 'Translation',
      definition:
        'Giving the meaning of words in another language. The anthology gives none for the Gujarati, and lines 31 to 38 are not a close translation of it.',
    },
    {
      term: 'Bilingual',
      definition:
        'Able to use two languages. The speaker is bilingual, but the poem questions whether the two can ever be used together.',
    },
    {
      term: 'Code-switching',
      definition:
        'Moving between two languages within one conversation, or, as here, within one sentence.',
    },
    {
      term: 'Assimilation',
      definition:
        'The process by which people who move to a new country take on its language and customs, sometimes losing their own. It is the pressure behind lines 10 to 14.',
    },
    {
      term: 'Diaspora',
      definition:
        'People living away from their ancestral homeland, and the communities they form. Bhatt, born in India and living in Germany, is studied among writers of the Indian diaspora.',
    },
    {
      term: 'Idiom',
      definition:
        'A fixed phrase whose meaning is not the sum of its words, such as to lose your tongue (to be lost for words) or tongue-tied (unable to speak freely). This poem takes its idioms literally.',
    },
    {
      term: 'Extended metaphor',
      definition:
        'A metaphor developed across a whole poem or passage. Here, a language is a tongue, and then a plant.',
    },
    {
      term: 'Pun',
      definition:
        'A play on a word with two meanings. Tongue means both the organ of speech and a language.',
    },
    {
      term: 'Stump (line 31)',
      definition:
        'The part of a plant, or of a limb, left after the rest has been cut off. Bhatt’s image can carry both senses at once.',
    },
    {
      term: 'Shoot (line 31)',
      definition: 'A new growth from a plant, and the first sign that it is alive again.',
    },
    {
      term: 'Anaphora',
      definition:
        'Repeating a word at the start of successive phrases or lines, as with the verb that opens three phrases in a row in line 32.',
    },
    {
      term: 'Free verse',
      definition:
        'Poetry without a regular rhyme scheme or metre, whose line lengths follow the sense and the speaking voice.',
    },
    {
      term: 'Volta',
      definition:
        'The turning point of a poem, where its argument or mood changes direction. In this poem, line 16.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Compare how the poets present the importance of language to a person’s identity in Search For My Tongue and Half-caste.',
        skill:
          'Comparing two anthology poems: analysis of language, form and structure, and the links between the poems',
        guidance: [
          'Open with a comparative overview of two or three sentences: both speakers are judged through language, but Agard’s speaker defends his identity openly and mockingly, while Bhatt’s fears she has lost hers and finds it returning without her effort.',
          'Compare the speakers’ relationships with their listeners. Both address a you. Agard’s listener is repeatedly ordered to explain themselves; Bhatt’s is asked to imagine two tongues and the loss of one. Which is more confrontational, and what does each approach achieve?',
          'Compare how each poet puts language itself on the page. Agard spells words as they are spoken; Bhatt prints Gujarati in its own script. Both make the reader an outsider for a moment, but Bhatt goes further by giving no translation.',
          'Compare imagery. Set Bhatt’s extended metaphor of the tongue as body and then plant (“rot and die”, “stump of a shoot”) against Agard’s comparisons with painting, weather and music, which he uses to mock the idea that a person can be half of anything.',
          'Compare structure. Bhatt’s three sections move from fear to renewal; Agard’s poem builds through repeated challenges to its closing offer to tell the other half of his story if the listener comes back with a whole eye, ear and mind. How does each ending present identity?',
          'Finish with a judgement: which poem presents identity as more secure? A strong answer might argue that Agard’s speaker is certain and it is the listener who is incomplete, whereas Bhatt’s speaker doubts herself, which makes her identity more fragile and her poem more intimate.',
        ],
      },
      {
        question:
          'Compare how the poets present the power of the past in Search For My Tongue and Piano.',
        skill:
          'Comparing two anthology poems: analysis of language, form and structure, and the links between the poems',
        guidance: [
          'Overview: in both poems something from the speaker’s past returns unasked and overwhelms the present. In Piano it is a childhood memory of his mother, set off by a woman singing; in Search For My Tongue it is a first language, returning in a dream.',
          'Compare how the past returns. Lawrence’s speaker is carried back by music against his will; Bhatt’s speaker gets her language back while she is asleep. In both, the conscious mind is not in control. What does that suggest about the past?',
          'Compare the language of the return. Bhatt uses images of growth (“grows” repeated, “the bud opens”, “blossoms out of my mouth”); Lawrence’s speaker cries like a child and feels his adult self swept away by memory. One return is presented as flowering, the other as a flood.',
          'Compare the present that the past overpowers. The singer in front of Lawrence’s speaker, now playing loudly, can no longer hold him, and he gives in to memory; Bhatt’s mother tongue ties up and shoves aside the language of her present life. Both pasts win.',
          'Compare form. Piano has three regular rhyming quatrains; Bhatt writes free verse and changes language in the middle. Consider why a poem about a lost language might break its own form at its centre, while a poem about an overwhelming memory keeps a steady, song-like pattern.',
          'Conclude with a judgement: is the past a comfort or a threat in each poem? A strong answer might see Lawrence’s return as a loss of adult control and Bhatt’s as a recovery of the self, while noticing that both speakers are, in the end, overwhelmed.',
        ],
      },
      {
        question:
          'Compare how the poets use images of the natural world to present strong feelings in Search For My Tongue and Blessing.',
        skill:
          'Comparing two anthology poems: imagery, language and structure, and the links between the poems',
        guidance: [
          'Overview: both poets use nature to present something precious returning after a time of lack. For Dharker it is water arriving in a place where there is never enough; for Bhatt it is a language that seemed to have died.',
          'Compare the images of lack. Bhatt’s tongue will “rot and die” in the mouth; Dharker opens with skin split open by drought, compared to a dry seed case. Both poems begin with something dried out, broken or decaying, and both locate it in the body.',
          'Compare the images of return. Bhatt’s regrowth is a plant, from “stump of a shoot” to blossom, living and organic, gathering speed stage by stage; Dharker’s water arrives when a broken water main floods the street, sudden and loud. What feelings does each kind of return create?',
          'Compare voice. Dharker gives the rushing water a voice of many tongues; Bhatt gives her language a body. Both poets treat what is precious as something alive, and both find tongues in it.',
          'Compare the endings. Bhatt ends with a flower blossoming out of the mouth; Dharker ends with naked children shining in the sunlight, the water falling on their small bodies like a blessing. Is either ending wholly hopeful? Both carry the memory of scarcity with them.',
          'Structure: compare where the turn comes in each poem, Bhatt’s at the dream in line 16 and Dharker’s at the burst of the pipe, and how each poet builds towards the moment of release.',
        ],
      },
    ],
    tips: [
      'Explain the double meaning of tongue once, clearly, and then use it. Answers that keep repeating that tongue means language are describing; answers that show how the pun lets Bhatt make a language decay, grow and blossom are analysing.',
      'Do not skip the Gujarati. You do not need to read it: write about what it does. It puts the English reader in the speaker’s position, it sets the mother tongue at the centre of the poem, and it sits inside a sentence that runs from line 15 to line 35.',
      'Be careful about calling lines 31 to 38 a translation of the Gujarati. They continue the English sentence and develop its images in their own way. A published translation shows the Gujarati first repeating what lines 15 and 16 say, and including an image of ripening that the English never uses.',
      'Track the pronouns and the mouth: you and your mouth in the first section, I and my mouth in the last. It is some of the clearest structural evidence in the poem, and few answers use it.',
      'Argue about the ending. Triumphant or anxious? The final sentence says the tongue returns every time she thinks it is lost, so the fear is part of the pattern. The best answers weigh both readings and say which they find more convincing, and why.',
      'Compare all the way through. Each paragraph should hold both poems, linked by a shared idea, a contrast in method or a difference in effect, rather than an account of one poem followed by an account of the other.',
      'Use context lightly. This section of the paper is assessed on analysis of language, form and structure and on comparison, so Bhatt’s biography earns its place only when it sharpens a reading of the words. One sentence is usually enough.',
      'The anthology poems are provided in the exam, so the skill being tested is choosing. Pick short phrases and analyse single words inside them, such as stump, shoot or knots, rather than copying out whole lines.',
      'Write about the speaker rather than Bhatt, unless you are making a clearly signposted point about context.',
    ],
  },

  modelAnswer: {
    question:
      'Compare how the poets present the importance of language to a person’s identity in Search For My Tongue and Half-caste.',
    paragraph:
      'Both poets make the reader feel what it is to be judged through language, but where Agard’s speaker defends his identity in the open, Bhatt’s speaker finds hers surviving underground. Bhatt begins with an admission of defeat, that she has “lost my tongue”, and the hypothetical of lines 10 to 14 makes that loss sound inevitable: the mother tongue would “rot and die”, the word “rot” repeated across the line break so that the reader is held inside the decay. Yet the poem’s structure contradicts its argument. When the English breaks off at the dream, fourteen lines of untranslated Gujarati leave most readers unable to understand, placed exactly where lines 6 and 7 asked the listener to imagine standing, in front of a tongue they could not fully know. When English returns, the grammar has reversed: the mother tongue is now the one acting, “grows” is repeated four times in two lines, and it ties “the other tongue in knots”. Agard also makes his reader an outsider, spelling words as they are spoken and ordering the listener to explain themselves, but his speaker never doubts who he is; the doubt belongs to the listener, who is told to come back with a whole eye, ear and mind. Bhatt’s speaker doubts herself, and her final sentence admits that the fear of forgetting returns every time. Her identity is not asserted, like Agard’s, but rediscovered, which makes it more fragile and, arguably, more moving.',
    commentary: [
      'It opens with a comparative argument rather than a summary: both poems are about being judged through language, and the contrast between open defence and hidden survival drives the whole paragraph.',
      'Quotations are short and analysed at the level of single words: the repetition of “rot” across the line break, the fourfold “grows”, and the reversal of being tongue-tied in “the other tongue in knots”.',
      'It analyses structure as well as language, arguing that the untranslated Gujarati puts the reader in the speaker’s position and that the grammar reverses after the dream.',
      'The comparison with Half-caste is woven into the argument rather than added at the end, and it compares methods (making the reader an outsider) as well as ideas.',
      'It ends with a judgement, marked as interpretation by arguably, which is what separates a perceptive answer from a descriptive one.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-7 (anthology page 54)',
      title: 'What do you mean?',
      summary:
        'Challenged to explain her claim that her tongue is lost, the speaker answers with a question of her own, asking the listener to imagine two tongues in one mouth, the first lost and the second never fully known.',
      setting: 'A conversation with an unnamed questioner; no place is given',
      who: ['The speaker', 'The listener'],
      quote: 'two tongues',
      themes: ['Language and identity', 'Two languages in conflict'],
      tension: 2,
      significance:
        'Sets up the double meaning of tongue and the extended metaphor that runs through the whole poem.',
    },
    {
      where: 'Lines 8-14 (anthology page 54)',
      title: 'The warning',
      summary:
        'She argues that the two tongues cannot be used side by side, and that anyone forced to live in the foreign tongue would feel the mother tongue decay in the mouth until it had to be expelled.',
      setting: 'An imagined life in a country where a foreign language has to be spoken',
      who: ['The speaker', 'The listener', 'The mother tongue'],
      quote: 'rot and die',
      themes: ['Loss and the fear of forgetting', 'Two languages in conflict'],
      tension: 3,
      significance:
        'The images of decay and disgust make language loss feel physical, and set up the images of growth that will answer them.',
    },
    {
      where: 'Lines 15-16 (anthology page 54)',
      title: 'The confession',
      summary:
        'The hypothetical you becomes I: the speaker admits she thought she had spat her language out. Then the word but, and a dream at night, break into the sentence.',
      setting: 'The speaker’s own life, and then her sleep',
      who: ['The speaker', 'The mother tongue'],
      quote: 'spit it out',
      themes: ['Loss and the fear of forgetting', 'Renewal and resilience'],
      tension: 4,
      significance:
        'The turning point: the poem’s fear is revealed as personal, and the dream opens the way back.',
    },
    {
      where: 'Lines 17-30 (anthology page 54)',
      title: 'The dream in Gujarati',
      summary:
        'The poem changes language. Seven lines of Gujarati script, each followed by a transliteration, fill the middle of the poem. A published translation shows them first repeating that she felt she had spat out her whole language and that it returns at night in a dream, then describing her language blossoming like a flower and ripening in her mouth.',
      setting: 'The speaker’s dream, at night',
      who: ['The mother tongue', 'The speaker'],
      themes: ['Language and identity', 'Renewal and resilience'],
      tension: 3,
      significance:
        'The mother tongue proves it is alive by appearing on the page, and most English readers are left, for fourteen lines, unable to understand it.',
    },
    {
      where: 'Lines 31-35 (anthology page 55)',
      title: 'The tongue grows back',
      summary:
        'Back in English, the tongue regrows from its stump like a cut plant, lengthening and strengthening, binds English up, flowers like an opening bud and forces the other language out of the way.',
      setting: 'Inside the speaker’s mouth, imagined as a place where a plant grows',
      who: ['The mother tongue', 'The speaker'],
      quote: 'stump of a shoot',
      themes: ['Renewal and resilience', 'Two languages in conflict'],
      tension: 4,
      significance:
        'The images of decay are answered with images of growth, and the balance of power between the two languages is reversed.',
    },
    {
      where: 'Lines 36-38 (anthology page 55)',
      title: 'Blossoming, every time',
      summary:
        'The last sentence makes the story a repeating pattern: each time she believes her first language has left her, it comes back and flowers from her mouth.',
      setting: 'The speaker’s life, again and again',
      who: ['The speaker', 'The mother tongue'],
      quote: 'blossoms out of my mouth',
      themes: [
        'Renewal and resilience',
        'Loss and the fear of forgetting',
        'Language and identity',
      ],
      tension: 2,
      significance:
        'Ends in flowering rather than decay, but admits that the fear of forgetting will keep returning.',
    },
  ],

  relationships: [],

  compareWith: [
    {
      title: 'Half-caste (John Agard)',
      href: '/igcse/edexcel/poetry/half-caste',
      reason:
        'Both speakers are judged through language and challenge a listener addressed as you, but Agard’s speaker attacks with confident mockery while Bhatt’s fears she has lost her own tongue.',
    },
    {
      title: 'Piano (D H Lawrence)',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'In both poems something from the past returns unasked and overpowers the present: for Lawrence a childhood memory set off by music, for Bhatt a first language regrowing in a dream.',
    },
    {
      title: 'Blessing (Imtiaz Dharker)',
      href: '/revision/texts/blessing',
      reason:
        'Both use natural images for something precious returning after scarcity, water for Dharker and a language for Bhatt, and both hear tongues and voices in it.',
    },
    {
      title: 'Poem at Thirty-Nine (Alice Walker)',
      href: '/revision/texts/poem-at-thirty-nine',
      reason:
        'Both explore what we inherit and carry into adult life: Walker through the habits her father taught her, Bhatt through the language she was born into.',
    },
  ],

  contentGuidance: [],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 3, pages 54-55: the poem as prescribed, its three-part layout and the margin line numbering (5 to 35); acknowledgements on page 73, under Part 3 (Brunizem, Carcanet, dated there 2007; reproduced with permission of Carcanet Press Limited). Every quotation copied from this text and checked against the rendered page images.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'University of Glasgow, UNESCO RIELA online spring school reading pack: an independent copy of the English lines of Search for my Tongue, used to cross-check every quoted phrase (it misprints line 4; the anthology wording is used).',
      url: 'https://www.gla.ac.uk/media/Media_1114716_smxx.docx',
    },
    {
      label:
        'Carcanet Press, Brunizem (the page shows the 2008 paperback, ISBN 9781857549812; 1988 first publication is confirmed by the Poetry Archive, Wikipedia and Sandten et al. 2024, who cite Bhatt 1988, pp. 63-70, for the poem); Commonwealth Poetry Prize (Asia) and Alice Hunt Bartlett Award; the title explained as a dark prairie soil found in Asia, Europe and North America, the three worlds of her imagination; the collection described as exploring the richness and the conflicts of moving between cultures and languages; Bhatt born in Ahmedabad, grew up in Pune and the United States, MFA from the Writers’ Workshop, University of Iowa; mother tongue Gujarati.',
      url: 'https://www.carcanet.co.uk/cgi-bin/indexer?product=9781857549812',
    },
    {
      label:
        'Poetry Archive, Sujata Bhatt: born 1956, grew up in Pune, emigrated with her family to the United States in 1968, MFA Iowa, writer-in-residence at the University of Victoria, lives in Bremen; Brunizem (1988) and its awards.',
      url: 'https://poetryarchive.org/poet/sujata-bhatt/',
    },
    {
      label:
        'Wikipedia, Sujata Bhatt: cross-check of birth in Ahmedabad, Gujarat, upbringing in Pune, emigration in 1968, and residence in Bremen.',
      url: 'https://en.wikipedia.org/wiki/Sujata_Bhatt',
    },
    {
      label:
        'Eunice de Souza, Nine Indian Women Poets: An Anthology (Oxford University Press, 1997), Google Books snippet: the poem in Brunizem is an eight-page poem using Gujarati lines, followed by the same in Roman script, followed by what de Souza calls a translation in English. Cecile Sandten, Indrani Karmakar and Oliver von Knebel Doeberitz (eds), Contemporary Indian English Literature (2024), Google Books snippet, cites the poem as Bhatt 1988, pp. 63-70, which agrees with eight pages.',
      url: 'https://books.google.com/books?id=389lAAAAMAAJ',
    },
    {
      label:
        'ZigZag Education, A Guide to AQA GCSE Poetry (2002), sample: lists the poem in AQA Poems from Different Cultures, Cluster 2, as from Search For My Tongue, marking it as an extract.',
      url: 'https://asenglishlanguage.weebly.com/uploads/5/7/3/8/5738994/a_guide_to_aqa_gcse_poetry.pdf',
    },
    {
      label:
        'J. Mark Halstead and Mark A. Pike, Citizenship and Moral Education: Values in Action (2006), Google Books snippets (checked 26 September 2026): an English translation of the Gujarati lines, in which she felt she had spat out her tongue and whole language, at night in the dream her language returns, and her language, her tongue, blossoms like a flower in the mouth and ripens in the mouth. The basis for every statement in the guide about what the Gujarati means; paraphrased, not quoted.',
      url: 'https://books.google.com/books?id=nemAAgAAQBAJ',
    },
    {
      label:
        'Asha Rogers, State Sponsored Literature: Britain and Cultural Diversity after 1945 (Oxford University Press, 2020), Google Books snippets: discusses the BBC film Roots and Water, in which a sequence of actors read the poem line by line and Bhatt explained her practice to school students. Not used for any claim about the Gujarati: no snippet of this book showing a translation of it could be found on 26 September 2026.',
      url: 'https://books.google.com/books?id=yCXTDwAAQBAJ',
    },
    {
      label:
        'Jasbir Jain and Avadhesh K. Singh (eds), Indian Feminisms (2001), Google Books snippet: reads the poem’s Gujarati and English code-switching as inscribing a post-colonial Indian identity. Basis for the post-colonial reading, which the guide presents as a reading only.',
    },
    {
      label:
        'Emmanuel S. Nelson (ed.), Writers of the Indian Diaspora (1993), Google Books snippet: discusses Brunizem and this poem; basis for the diaspora entry in the vocabulary.',
      url: 'https://books.google.com/books?id=IqMRAQAAMAAJ',
    },
    {
      label:
        'Wiktionary: spit (past tense spit or spat; spit the more common form in North America), spit it out, tongue-tied, mother tongue, and lose one’s tongue (to be unable to speak or to think of anything to say).',
      url: 'https://en.wiktionary.org/wiki/spit',
    },
    {
      label:
        'Wikipedia, Gujarati language: an Indo-Aryan language native to Gujarat, written in the Gujarati script, a variant of Devanagari; about 57 million first-language speakers (2011).',
      url: 'https://en.wikipedia.org/wiki/Gujarati_language',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Literature (4ET1) Specification, Issue 3 (August 2025): Component 1 Section B is one essay question from a choice of two, comparing two poems from Part 3 of the anthology, assessed on analysis of language, form and structure and on comparison; closed book, with the anthology poems provided in the examination.',
    },
    {
      label:
        'Pearson, 4ET1 Paper 1R mark scheme, June 2024: Section B questions each name two Part 3 poems for comparison (Question 2 set Piano with Remember); used for the style of the practice questions and the details of Piano.',
    },
  ],
}
