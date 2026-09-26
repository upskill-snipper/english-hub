import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Half-caste, John Agard (1996). A SUPPLEMENT: the existing page at
 * /igcse/edexcel/poetry/half-caste keeps its overview, context, language
 * devices and form notes, and this file adds the themes, speaker and listener,
 * key quotations, passage guides, vocabulary, exam practice and model answer
 * that it lacks, mounted below it.
 *
 * THE TEXT. Every quotation was copied from the poem as printed on pages 67
 * and 68 of the Pearson Edexcel International GCSE English Anthology, Issue 8
 * (February 2026), read on 26 September 2026 from Pearson's own PDF both as
 * extracted text and as rendered page images (PDF pages 73 and 74). Each was
 * cross-checked against Pearson's second printing of the poem, in the Edexcel
 * GCSE (9-1) English Literature Poetry Anthology, Issue 4 (January 2023),
 * Conflict collection, page 29, also read as text and as a rendered page. The
 * two printings differ in three places only (lines 6, 25 and 26), none of them
 * quoted here. Every counting claim in the prose (four slashes, no full stops,
 * the one and, the one my, the four refrains) was counted from the
 * extracted text of the Issue 8 page.
 *
 * THE LINE NUMBERS. The anthology's margin numbers are right to line 47. On
 * page 68 it prints 50 beside the line about the ear, which is line 49 by
 * count; the GCSE printing puts 50 one line later, beside the line about the
 * mind, which agrees with the count, and so does the copy printed in the May
 * 2024 4ET1 question paper (question booklet page 14), which also runs the last
 * three lines on without the anthology's stanza gap. So this guide numbers the
 * last six lines 48 to 53, and the scope tells the student why.
 *
 * THE LIMIT. The poem is counted at 235 words (see workLength), so the site's
 * 15 per cent allows 35 distinct quoted words, and this page quotes exactly
 * these seven items and nothing else in quotation marks: Excuse me / standing
 * on one leg (ll.1-2), Explain yuself / wha yu mean (ll.4-5), half-caste canvas
 * (l.9), half-caste till dem overcast (l.20), cast half-a-shadow (l.46), wid de
 * whole of yu eye (l.48), de other half / of my story (ll.52-53). That is 35
 * words by the validator's count, which is the limit. Every other quoted word
 * on the page (yu, de, dem, whole, my story and so on) is part of one of these
 * and adds nothing. Adding a quotation means removing words elsewhere: run the
 * test. A handful of single words (consequently, but, and, you, my, and the
 * lower-case names picasso, england and tchaikovsky) are named unquoted where
 * the analysis needs them, as the other anthology poem guides do. The
 * swear word in line 22 is described, never printed.
 *
 * UNQUOTED RENDERINGS. The fact-check of 26 September 2026 found that the
 * lines left out under the limit had crept back unquoted, as Standard English
 * transcriptions: lines 13-14, 16-21, 28-29, 33-43 and 47-50 were each retold
 * almost word for word, several of them more than once, and "must come back
 * tomorrow" and "nearly always half-caste" appeared verbatim. That is quoting
 * without the quotation marks the limit counts, so those passages now describe
 * the lines instead of transcribing them. Keep it that way: a summary that
 * turns the Creole into Standard English line by line is still the poem.
 *
 * WHAT THE PAGE ABOVE GETS WRONG, reported rather than repeated. It gives the
 * three analogies in the order painter, piano, weather; the poem's order is
 * painter (lines 7-9), weather (13-22), piano (26-30). It says the poem has no
 * capital letters except for proper nouns; the reverse is true, since picasso,
 * england and tchaikovsky are printed in lower case, and the only capitals are
 * Excuse, Explain (twice), Ah (twice) and the pronoun I. Its copyright notice
 * names Hodder Education and Issue 2 as the anthology's publisher and issue;
 * the anthology is Pearson's, now in Issue 8. This guide states the facts
 * correctly without comment on the page itself.
 *
 * FACTS AND WHAT WAS LEFT OUT. Agard's birth year, his move to Britain in 1977,
 * his Commonwealth Institute years and the poem's place in Get Back Pimple
 * (1996) come from IBBY UK's Hans Christian Andersen Award nomination dossier,
 * compiled with his and his agent's help. His part African-Caribbean, part
 * Portuguese heritage is from William Wallis's Financial Times profile (4 May
 * 2018), reprinted in that dossier. Oak National Academy says which parent was
 * Portuguese; no second source was found, so the guide does not say. The
 * publisher of Get Back Pimple was not confirmed and is not named. Wikipedia
 * mentions only a 2005 collection of the same name; both Pearson anthologies
 * date the poem 1996, which the dossier's Get Back Pimple (1996) supports.
 */
export const guide: StudyGuide = {
  slug: 'half-caste',
  title: 'Half-caste',
  author: 'John Agard',
  form: 'poem',
  scope:
    'The whole poem, as printed on pages 67 and 68 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3: 53 lines in four stanzas of 3, 27, 20 and 3 lines. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1, Section B, where it is compared with another Part 3 poem; the poems for that section are printed with the question paper. Line numbers follow the anthology’s margin numbering up to line 47. On page 68 the margin prints 50 one line early, beside the line about the ear, which is line 49 when you count from line 1, so this guide numbers the last six lines 48 to 53. The copy printed with the May 2024 question paper agrees: it puts 50 beside the line about the mind, although it runs the last three lines on without the gap that sets them apart in the anthology. The spelling and punctuation are deliberate: quote them exactly as printed, lower-case names and hyphens included. The same poem is printed in the Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Conflict collection, with three small differences of wording in lines 6, 25 and 26; every quotation on this page is identical in both printings. The exam practice here is written for 4ET1. On the GCSE (1ET0) paper only the named poem is printed, the second poem must come from the Conflict collection, and context is assessed in the poetry comparison, which it is not on 4ET1.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© John Agard 1996. Collected in Get Back Pimple (1996); as printed in the Pearson Edexcel International GCSE English Anthology, which reproduces it by kind permission of John Agard c/o Caroline Sheldon Literary Agency Ltd. Quoted here in short phrases for criticism and review; read the whole poem on pages 67 and 68 of the anthology.',
  },
  workLength: {
    words: 235,
    lines: 53,
    basis:
      'Counted on 26 September 2026 from pages 67 and 68 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF, read as extracted text and checked against the rendered page images, title and author’s name excluded. 235 words by the site validator’s word count, which counts each part of a hyphenated word separately (half-caste as two words, half-a-shadow as three), exactly as it counts the words this page quotes. Counting each hyphenated compound as one word gives 217. The 53 lines were counted and agree with Pearson’s GCSE printing of the poem and with the copy printed in the May 2024 4ET1 question paper, both of which place 50 in the margin beside the line about the mind.',
  },

  native: {
    overview: '/igcse/edexcel/poetry/half-caste',
    context: '/igcse/edexcel/poetry/half-caste',
    languageAnalysis: '/igcse/edexcel/poetry/half-caste',
    structureForm: '/igcse/edexcel/poetry/half-caste',
  },

  themes: [
    {
      title: 'Identity and wholeness',
      body: 'The label implies that a person of mixed heritage is incomplete, and the poem’s method is to take that implication literally until it collapses. In the first stanza the speaker introduces himself while “standing on one leg”, as though half a person could manage only half a stance. In the third stanza he carries the idea through his whole body and his whole day: the halving reaches his hearing, his sight, his greeting when he meets someone, his sleep and his dreams, and finally, by moonlight, his shadow (lines 33 to 46). Each image is absurd, and the absurdity is the argument: nobody is half a person, so the word describes nothing real. Then, with a single but in line 47, the poem hands the incompleteness back. It is the listener who must return, bringing complete attention of sight, hearing and thought. One reading is that the speaker is claiming wholeness for himself, insisting that a mixed heritage makes a person complete rather than divided. A sharper reading, and the one the ending supports, is that the poem places the missing half in the listener’s way of seeing. The speaker’s story already exists in full; what is missing is someone willing to look and listen properly enough to hear “de other half / of my story”.',
    },
    {
      title: 'Language and prejudice',
      body: 'The poem’s target is not a violent racist but a word, the kind of everyday expression people use without asking what it means, and the refrain makes the person who used it do the asking: “Explain yuself / wha yu mean”. The word’s history justifies the suspicion. Caste comes from the Portuguese casta, meaning breed or race, and behind that from the Latin castus, pure; half-caste is first recorded in English in 1789, in the usage of the British in India, for the child of a European father and an Asian mother. Built into the word, then, is the idea that race is a matter of purity, and that a person of mixed descent is a fraction of something. Agard never lectures on that history. He shows instead that the word cannot survive being taken at its word: applied to a painting, the sky or a symphony it becomes ridiculous, and applied to a human body in stanza 3 it becomes impossible. Agard has said that poetry lets you name and un-name things, and gave this poem as his example of exposing the absurdity of an expression. One reading is that the poem simply mocks a stupid word. The more convincing reading is that it shows how a label shapes perception: once you have called someone half, you look at them with half your attention, which is exactly what the ending accuses the listener of doing.',
    },
    {
      title: 'Mixing as creation',
      body: 'The three analogies in stanza 2 share one pattern. Something admired is made by mixing, so if mixing makes a person half, it must make these things half as well. The painter blends two colours into a “half-caste canvas” (lines 7 to 9); brightness and shade meet overhead to make weather (lines 13 to 15); the composer plays black and white notes together to make a symphony (lines 26 to 30). The choice of examples is pointed. Picasso (1881 to 1973) and Tchaikovsky (1840 to 1893) are giants of European high culture, names that carry prestige, so the speaker borrows the listener’s own cultural values to defeat the listener’s label. The piano is the sharpest of the three: black and white are the very colours in which people have been sorted by race, yet a chord made of both is heard as harmony, not as two halves. The weather is the comic middle, and pointed in its own way, because it is English: the country whose sky is so famously mixed is the country in which the speaker is being called half. The poem is itself a mixture, moving between Caribbean Creole and Standard English, and the mixture is its strength. A reader might object that a person is not a painting. That is the point: the speaker does not need the analogies to be exact, only to show that the label’s own logic would turn masterpieces into halves.',
    },
    {
      title: 'Voice and power',
      body: 'The person who is different is usually the one asked to account for it. This poem reverses the demand. The listener has used a word and is ordered four times to explain it, and never gets to answer: the questions are rhetorical, and the silence is part of the argument, because there is no good answer to give. The speaker’s language is part of the reversal. Most of the poem is in Caribbean Creole, spelled as it sounds, with “yu”, “de”, “wid” and “dem” in place of the standard forms. Guyana, where Agard was born, was a British colony until 1966, and Guyanese Creole is still widely treated as improper English, a legacy of colonial rule. Here it is the language of authority: the voice that asks the questions and sets the conditions. Yet the speaker also shows he can use Standard English whenever he chooses. Lines 37 and 38 come closest to it: line 37 has the poem’s only and (the other eight times, the word is spelled without its final d), and line 38 its only standard you, in you’ll. The formal connective consequently, in line 42, parodies the language of logical proof. Pearson’s mark scheme for the May 2024 paper reads the mixture as a sign that the speaker is at home in either register. By the end he holds all the power in the exchange. He owns the story, and he decides when the listener is ready to hear it: tomorrow, and only if they come back changed.',
    },
    {
      title: 'Humour and anger',
      body: 'Half-caste is funny, and its humour is a weapon rather than a relief. Mock courtesy (“Excuse me”), slapstick (the one-legged stance), a pun (“half-caste till dem overcast”) and deadpan logic (the consequently of line 42) make the listener laugh at the label, and laughing at a word takes away its power to wound. The anger is never far below the surface. The weather joke ends, in line 22, on a Caribbean swear word, a flash of exasperation that Pearson’s mark scheme reads as anger and frustration breaking through, and the refrain grows more insistent each time it returns. One reading is that the humour softens the attack, making the poem acceptable to the very audience it criticises. The stronger reading is that the humour is the attack. By making prejudice look absurd rather than merely wicked, the poem refuses it the dignity of a serious opponent, and it is harder to go on using a word you have been made to laugh at. Examiners have noticed the mixture: the June 2019 report found candidates writing about the poem’s intimidating, sarcastic and satirical tone. An answer that calls the poem only angry, or only playful, misses how each disguises the other.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The poem’s single voice: a person of mixed heritage who has been called half-caste, and who answers back.',
      body: 'We learn about the speaker only through how he talks, and he talks like a performer. He interrupts with a courtesy, strikes a pose, names himself with the label and then takes control of the conversation, asking every question and setting every condition. He is witty and quick, moving from art to weather to music and back to his own body without losing the thread of the argument, and he switches between Caribbean Creole and Standard English as it suits him. His anger shows only once in plain words, in the exasperated curse of line 22; the rest of the time it is channelled into mockery. Pearson’s own teaching guide reads the speaker as a man protesting at the demeaning way his racial heritage is described, and most readers identify him with Agard, who was born in 1949 in British Guiana, is part African-Caribbean and part Portuguese in heritage, and moved to Britain in 1977. Agard is also a celebrated performer of his own poems, and this one is built to be heard. But the poem never names its speaker, so in an exam write about the speaker, and bring in Agard only where his life sharpens a point about the words.',
    },
    {
      name: 'The listener',
      role: 'The “yu” the poem addresses: whoever has used the word, and is never allowed to reply.',
      body: 'The listener never speaks. We meet their point of view only through the speaker’s mocking reconstructions of it, each introduced by “yu mean”, as if the speaker were patiently working out what someone could possibly intend by the word. The listener could be one person who has just used the label, which is how the opening reads, as the speaker steps in with a polite interruption. It could equally be a whole audience at a performance, or the reader. Pearson’s mark scheme allows both: the speaker may be addressing many people who use the term without thinking, or imagining a conversation with one. Either way, the listener’s silence is telling. They cannot explain themselves, because the word cannot be explained. Yet the poem does not end by condemning them. It gives them a task: return another day and give the speaker their full attention, seeing, hearing and thinking. That suggests the poem believes the listener can change, and that prejudice of this kind is a failure of attention that can be put right.',
    },
  ],

  keyQuotes: [
    {
      text: 'Excuse me / standing on one leg',
      where: 'Lines 1 and 2, stanza 1 (anthology page 67)',
      analysis:
        'The poem opens with the phrase you use to interrupt a stranger politely, or to apologise, and undercuts it at once with slapstick. Standing on one leg, the speaker acts out what the label says he is: if he is only half, he can manage only half a stance. The courtesy is mock courtesy, a way of stepping into someone else’s conversation, and the pose makes the listener’s word look ridiculous before it has even been repeated in line 3. The poem’s whole method, taking the label literally until it falls apart, is present in its first two lines, and the three-line stanza stands apart on the page like a performer’s entrance.',
    },
    {
      text: 'Explain yuself / wha yu mean',
      where: 'Lines 4 and 5, opening stanza 2; repeated at lines 10-11, 23-24 and 31-32',
      analysis:
        'An imperative followed by a question, and the question has no question mark: the speaker is not expecting an answer. The refrain reverses the usual situation, in which a person of mixed heritage is asked to account for themselves, and makes the user of the word do the explaining. The phonetic spelling puts the speaker’s own voice at the centre of the demand. Its four appearances structure the poem: it introduces each of the three analogies and opens stanza 3. It carries a capital only where it opens stanzas 2 and 3 (lines 4 and 31); at lines 10 and 23 it runs on in lower case, like a demand that has become a habit, and each return makes it more insistent.',
    },
    {
      text: 'half-caste canvas',
      where: 'Line 9, the end of the first analogy (lines 7-9)',
      analysis:
        'The first analogy asks whether, when Picasso mixes red and green, the result is a half-caste painting. Attaching the label to a canvas exposes it: no one looks at a great painting and sees two halves, so the word is shown to measure nothing. The hard c sounds of the alliteration give the phrase a contemptuous snap, as if the speaker were spitting the word back. A slash, not a question mark, follows canvas, as it follows the question that ends each of the other two analogies. The painter’s name is printed in lower case, as are england and tchaikovsky; one reading is that the poem refuses even a capital letter to the standard written English it is answering.',
    },
    {
      text: 'half-caste till dem overcast',
      where: 'Line 20, in the weather analogy (lines 12-22)',
      analysis:
        'The comic climax of the weather section. By the speaker’s logic, England’s changeable weather hardly ever escapes the label, and some of its clouds are so thoroughly mixed that they cover the whole sky. The pun lies in the sound: overcast contains cast, which echoes caste, so the clouds are over-mixed as well as grey. Pearson’s mark scheme singles the line out as a pun that shows the speaker’s humour. The next line gives the clouds a spiteful wish to shut out the sun, which suggests a darker reading: prejudice is like a cloud that blocks the light. The Creole “dem”, for them and they, keeps the voice unmistakably the speaker’s own even at the height of the joke.',
    },
    {
      text: 'cast half-a-shadow',
      where: 'Line 46, completing the sentence begun in line 44 (anthology page 67)',
      analysis:
        'The literal reading of the label reaches its limit. In line 45 the speaker sets the word beside the phrase human being, and in line 46 he follows its logic into the uncanny: a half-caste person would cast only half a shadow. A shadow is the proof that a body is really there, so half a shadow means half an existence, which is exactly what the label implies and exactly what no one could believe. The verb cast is hidden inside the label itself, so the sound play of line 20 returns, no longer as a joke. The hyphens bind the phrase into a single object, and the moonlit setting of line 44 makes it eerie as well as absurd.',
    },
    {
      text: 'wid de whole of yu eye',
      where: 'Line 48, the first line of anthology page 68',
      analysis:
        'The turn. After a stanza of halves, the word whole arrives, and it is repeated in three consecutive lines: eye, then ear, then mind (lines 48 to 50). The half of his eye in line 36 and the half-closed eye of line 41 are answered by the whole of the listener’s. Moving from eye and ear to mind shows where the poem locates the problem: prejudice is a failure of seeing and hearing, and in the end of thinking. The line depends on the but that closes page 67, where the listener is told to return the next day, so the demand looks forward: the speaker believes the listener could return changed. The Creole “wid” and “de” keep the conditions in the speaker’s voice.',
    },
    {
      text: 'de other half / of my story',
      where: 'Lines 52 and 53, the last lines of the poem (anthology page 68)',
      analysis:
        'The poem ends on a promise it does not keep, at least not yet. The listener has heard only half of the speaker’s story, the half that is a reaction to the label, and the rest will come only when they return with their whole attention. Story suggests that identity is a narrative, with a history and a heritage behind it that the label ignores. The final stanza has three lines, like the first, so the poem ends as it began, with a small stanza standing apart. Look at the last word but one: this is the poem’s only my, where lines 34 and 36 used the Creole form, and there is no full stop, so the story is left open, waiting.',
    },
  ],

  extracts: [
    {
      title: 'The introduction and the first demand',
      where: 'Stanza 1 and the start of stanza 2, lines 1-9 (anthology page 67)',
      pointer:
        'From “Excuse me” in line 1 to the slash after the word canvas at the end of line 9.',
      summary:
        'The speaker steps into the conversation with a polite phrase, strikes a one-legged pose and names himself with the label. After the stanza break comes the first demand that the listener explain what they mean, and it runs straight into the first analogy: when Picasso blends two colours, should the painting be called half-caste?',
      annotations: [
        {
          phrase: 'Excuse me',
          note: 'A courtesy used to interrupt or to apologise. Here it is mock politeness: the speaker is not sorry, and the phrase lets him take over someone else’s conversation.',
        },
        {
          phrase: 'standing on one leg',
          note: 'Physical comedy that takes the label literally. If he is half a person, he can only stand like half a person, so the word is mocked before the argument begins.',
        },
        {
          phrase: 'Explain yuself',
          note: 'The first imperative, with a capital because it opens stanza 2. The burden of explanation shifts from the person labelled to the person using the label.',
        },
        {
          phrase: 'half-caste canvas',
          note: 'The label attached to a painting. Alliteration sharpens it, and the absurdity of calling Picasso’s mixture of colours half anything exposes the word’s logic.',
        },
      ],
      question:
        'How does Agard use the opening nine lines to challenge the listener? Refer closely to language, form and structure.',
    },
    {
      title: 'England’s weather',
      where: 'Stanza 2, lines 10-22 (anthology page 67)',
      pointer:
        'From the second “explain yuself”, in lower case at line 10, to the slash that ends line 22.',
      summary:
        'The refrain returns and the second analogy moves from art to nature: if brightness and shade meet overhead, is the weather half-caste? The speaker then pushes the logic into comedy. On that reasoning English weather can hardly ever be anything else, and some of its clouds are the worst offenders of all, grey through and through and mean enough to keep out the sun. The section ends on an exasperated Caribbean curse and a slash.',
      annotations: [
        {
          phrase: 'explain yuself',
          note: 'Now in lower case and run on from the line before, like speech that will not pause. The demand is becoming a habit, and it will keep coming.',
        },
        {
          phrase: 'wha yu mean',
          note: 'Phonetic spelling drops the final t of what, so the line sounds as the speaker would say it. The question expects no answer, and gets none.',
        },
        {
          phrase: 'half-caste till dem overcast',
          note: 'The pun: overcast contains cast, echoing caste, so clouds that are thoroughly mixed are over-cast. The joke makes the listener laugh at the label itself.',
        },
        {
          phrase: 'dem',
          note: 'The Creole form, standing for them and they in lines 19 to 21, three times in three lines, so the weather joke is told unmistakably in the speaker’s own voice.',
        },
      ],
      question:
        'Explore how Agard uses humour in lines 10 to 22 to attack the word half-caste. Refer closely to language, form and structure.',
    },
    {
      title: 'Half a person, and the whole of the listener',
      where: 'Stanzas 3 and 4, lines 40-53 (anthology pages 67-68)',
      pointer:
        'From line 40, where the speaker describes sleeping at night, to the last line of the poem, “of my story”, near the top of page 68.',
      summary:
        'The speaker follows the label through a night: his sleep and even his dreams are halved and, by moonlight, he applies the label to himself as a person whose shadow is only partial. Then the poem turns. The listener must return another day and pay complete attention, with sight, hearing and thought, and only then will the speaker finish his story.',
      annotations: [
        {
          phrase: 'cast half-a-shadow',
          note: 'The most extreme literal image. A shadow proves that a body is present, so half a shadow means half an existence, and the verb cast echoes the label.',
        },
        {
          phrase: 'wid de whole of yu eye',
          note: 'The first of three lines built on whole, answering the halves of the stanza. The incompleteness now belongs to the listener’s way of seeing.',
        },
        {
          phrase: 'de other half',
          note: 'The word half returns at the very end with a new meaning: not a fraction of a person, but the untold part of a story he owns.',
        },
        {
          phrase: 'my story',
          note: 'The poem’s only use of my, after mih in lines 34 and 36. It closes on possession, and without a full stop, so the story stays open.',
        },
      ],
      question:
        'How does Agard use the ending of the poem to change the meaning of the word half? Refer closely to lines 40 to 53.',
    },
  ],

  vocabulary: [
    {
      term: 'half-caste',
      definition:
        'An old term for a person of mixed racial descent, first recorded in English in 1789, among the British in India. It is now regarded as derogatory, which is the poem’s point: it implies that such a person is only half of something.',
    },
    {
      term: 'caste',
      definition:
        'A hereditary social group. English has used the word for the hereditary social groups of India since the early 1600s. It comes from the Portuguese casta, breed or race, and ultimately from the Latin castus, pure.',
    },
    {
      term: 'Creole',
      definition:
        'A language that grows out of contact between languages and becomes a community’s mother tongue. Guyanese Creole is English-based and spoken by most people in Guyana. Pearson’s mark scheme calls the poem’s language Afro-Caribbean patois.',
    },
    {
      term: 'patois',
      definition:
        'An informal name for a regional or non-standard form of a language, used especially of Caribbean Creoles. The mark scheme uses it; Creole or Caribbean English is more precise.',
    },
    {
      term: 'Standard English',
      definition:
        'The form of English used in formal writing, education and official documents. The poem moves in and out of it: lines 37, 38 and 42 come closest.',
    },
    {
      term: 'phonetic spelling',
      definition:
        'Spelling a word as it sounds in a particular accent, such as “yu” for you or “de” for the. It puts a real speaking voice on the page.',
    },
    {
      term: 'canvas',
      definition:
        'The strong cloth an artist paints on, and so a painting itself. In line 9 it is the first object the speaker attaches the label to.',
    },
    {
      term: 'symphony',
      definition:
        'A long piece of music for a full orchestra. In line 30 it is what Tchaikovsky, the Russian composer (1840 to 1893) named in line 26, produces by mixing black and white keys.',
    },
    {
      term: 'overcast',
      definition:
        'Of the sky: completely covered with cloud. In line 20 the word is also a pun, because it contains cast and so echoes caste.',
    },
    {
      term: 'spiteful',
      definition:
        'Deliberately wanting to hurt or annoy. In line 21 the clouds are spiteful enough to keep the sun out; one reading is that prejudice shuts out understanding in the same way.',
    },
    {
      term: 'consequently',
      definition:
        'As a result. A formal, Standard English connective in line 42, used with mock logic: the speaker proves step by step what the label would mean.',
    },
    {
      term: 'literal meaning',
      definition:
        'What words say at face value. The poem takes the half in the label literally, a person who is half, and follows that meaning until it becomes absurd.',
    },
    {
      term: 'refrain',
      definition:
        'A line or phrase repeated through a poem. Here the demand that the listener explain themselves returns four times and holds the poem together.',
    },
    {
      term: 'rhetorical question',
      definition:
        'A question asked for effect rather than for an answer. Each analogy is framed as one, and the listener’s silence is the only possible reply.',
    },
    {
      term: 'dramatic monologue',
      definition:
        'A poem spoken by one voice to a listener who does not reply. The form suits a poem Agard performs aloud to audiences.',
    },
    {
      term: 'satire',
      definition:
        'Using humour, irony and exaggeration to expose foolishness or prejudice. The poem satirises the label by showing where its own logic leads.',
    },
    {
      term: 'oblique',
      definition:
        'Pearson’s mark scheme name for the forward slash. The anthology prints four, at the ends of lines 9, 15, 22 and 30, where each stage of the argument lands.',
    },
    {
      term: 'free verse',
      definition:
        'Poetry without a regular metre or rhyme scheme. Half-caste uses occasional rhyme, as in lines 38 and 39, but no fixed pattern.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Re-read Half-caste and Remember. Compare the ways the writers express their feelings in Half-caste and Remember. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Comparison of two named poems, as set on the May 2024 paper: language, form and structure',
        guidance: [
          'Open with a comparative argument, not a summary. Both speakers address a listener directly, but Rossetti’s feelings soften as her sonnet turns, while Agard’s harden into a demand.',
          'Name the feelings precisely. For Agard: indignation, contempt for the label, exasperation (the curse in line 22) and, underneath, pride. For Rossetti: love, fear of being forgotten, and finally a selfless wish that her lover should be happy rather than grieve.',
          'Compare how each voice speaks. Agard’s imperatives and unanswered questions, in Creole with Standard English at will, against Rossetti’s formal, gentle imperatives addressed to one person. Pearson’s mark scheme contrasts an aggressive, informal tone with a gentle, more formal one.',
          'Compare repetition: the refrain of Half-caste, four times, against the repeated command to remember in the first half of Rossetti’s sonnet. Ask what each repetition shows about the speaker’s feelings.',
          'Compare form and structure. Rossetti’s Petrarchan sonnet turns at line 9 from remembering to forgetting; Agard’s free verse, with no full stops and four slashes, turns at line 47 from half to whole. Relate each form to the feeling it carries.',
          'Compare the endings: Rossetti releases her listener, Agard sets his a condition and withholds “de other half / of my story”. Finish with a judgement on which poem’s feelings are more certain, and why.',
        ],
      },
      {
        question:
          'Re-read Prayer Before Birth and Half-caste. Compare the ways the writers present concerns about society in Prayer Before Birth and Half-caste. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill:
          'Comparison of two named poems, on the pairing and topic set in June 2019: language, form and structure',
        guidance: [
          'Define each poem’s concern. MacNeice’s unborn child fears a society that will turn people into instruments; Agard’s speaker attacks a society that labels people and sees them only in part.',
          'Compare the voices. Both speakers address a listener who never replies, and both make demands: MacNeice’s child through a refrain of pleas, seven of its eight stanzas opening the same way; Agard’s speaker through the refrain “Explain yuself / wha yu mean”.',
          'Compare tone. MacNeice is urgent and fearful, ending in a two-line ultimatum; Agard is mocking and funny, with anger breaking through. The June 2019 examiners found candidates identifying the accusatory tone the pronoun yu creates.',
          'Compare how each poem presents the harm society does: to the whole person in MacNeice, who fears being made less than human, and to a person described as half in Agard, whose halves in stanza 3 lead to “cast half-a-shadow”.',
          'Compare structure and endings. MacNeice’s stanzas swell and then collapse into two lines; Agard’s poem turns from half to whole at line 47 and ends by setting the listener a condition. Which ending holds more hope?',
          'Keep both poems in every paragraph, using connectives such as whereas, similarly and by contrast, and conclude on which poem presents its concern more forcefully.',
        ],
      },
      {
        question:
          'Re-read Half-caste. Compare the ways the writers present a speaker who challenges a listener in Half-caste and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison with a poem of your choice: voice and address',
        guidance: [
          'Choose a second poem with a clear speaker and listener. If- (a father instructing a son), Prayer Before Birth (an unborn child pleading) and My Last Duchess (a duke talking to an envoy) all give strong contrasts.',
          'Say what each speaker wants from the listener. Agard’s speaker wants the listener to explain the word and, finally, to come back and see him whole; state your second speaker’s aim just as precisely.',
          'Compare methods: imperatives, rhetorical questions and analogy in Half-caste, against the conditions, pleas or courtesies of your second poem.',
          'Compare who holds power. Agard’s listener never answers and is set a condition at the end; ask whether your second listener is persuaded, commanded or deceived.',
          'Compare form: free verse written to be performed, with a four-times refrain, against the form of your second poem, and say what each form does for the challenge.',
          'Conclude on which challenge is more effective, and on whom: the listener in the poem, or the reader.',
        ],
      },
      {
        question:
          'Re-read Half-caste. Compare the ways the writers present identity in Half-caste and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison with a poem of your choice: theme and language',
        guidance: [
          'Search For My Tongue makes the strongest partner: both speakers have two languages, and both put the language of home on the page, Bhatt in Gujarati script and Agard in Caribbean Creole.',
          'Compare what threatens each identity. For Agard it is a label imposed from outside; for Bhatt it is the fear of losing her mother tongue from within.',
          'Compare the central images: the halves of Agard’s third stanza against Bhatt’s tongue that rots and then grows back. Both take a metaphor literally and follow it through the body.',
          'Compare structure: Agard turns from half to whole at line 47; Bhatt’s poem moves from English into Gujarati and back again. Both end with the self intact.',
          'Weigh the tone: Agard’s identity is defended with humour and confrontation, Bhatt’s is discovered with wonder. Which speaker is more certain of who they are?',
          'Conclude with a judgement about what each poem suggests identity is: something others try to divide, or something that survives inside you.',
        ],
      },
    ],
    tips: [
      'Quote exactly as the anthology prints it: lower-case picasso, england and tchaikovsky, hyphens in half-a-shadow, slashes where they fall. Even some published guides tidy these up. The spelling is the poem’s argument, so do not correct it.',
      'Get the order of the analogies right: the painter (lines 7 to 9), the weather (lines 13 to 22), the piano (lines 26 to 30). The weather section is the longest and the funniest, and it ends in the curse of line 22.',
      'Name the language precisely and never call it bad or incorrect English. Caribbean Creole, or the Afro-Caribbean patois of Pearson’s mark scheme, is a language with its own rules. Then show that the speaker also uses Standard English when he chooses, in lines 37, 38 and 42.',
      'Write about the punctuation, because Pearson’s mark scheme does: no full stops, commas or question marks, but four slashes, hyphens in the label and the half-a compounds, and apostrophes in lines 3, 37 and 38. Three of the four slashes stand where a question mark would go, at the end of each analogy’s question.',
      'Use the structure. Pearson’s mark scheme reads the poem in two halves: the first deals with what other people mean by the label, and the second turns the focus on the speaker himself, which in the anthology is where stanza 3 begins its catalogue of a body in halves. Then, at line 47, with a single but, the poem turns again and hands the incompleteness to the listener. Answers that track the movement from half to whole write about structure, not only language.',
      'Balance humour and anger. The June 2019 examiners noted the poem’s intimidating, sarcastic and satirical tone. Show how the jokes carry the anger rather than choosing one.',
      'Compare all the way through. The 2019 examiners praised answers that made a point about one poem and linked it to the other, and in 2024 the most successful answers to another anthology question intertwined their analysis of both poems, though one 2019 examiner observed that the best answers avoided line-by-line comparison. Retelling the poems or listing devices is not enough. In 2024 the examiners praised one answer’s points on Half-caste (declaratives, sarcasm, mocking tone and imperatives) but said its thinner coverage of Remember held its mark back, so give both poems their due.',
      'Use context lightly. On 4ET1 context is not marked in the poetry sections, as the 2019 and 2024 reports both say, though the 2019 report found that some background on the poets helped candidates argue more fluently. Agard’s life belongs in a sentence that sharpens a point about the words. On the GCSE (1ET0) paper, by contrast, context is assessed in the poetry comparison.',
    ],
  },

  modelAnswer: {
    question: 'Compare the ways the writers express their feelings in Half-caste and Remember.',
    paragraph:
      'Both speakers address someone directly, but Rossetti’s feelings soften as her sonnet turns, while Agard’s harden into a demand. Rossetti spends her octave asking to be remembered, then, at the turn in line 9, releases her lover from the request, so her deepest feeling is a selfless tenderness that puts his happiness above her wish to be remembered. Agard’s speaker opens with what sounds like the same courtesy, “Excuse me”, but the politeness is a performance: the next line has him “standing on one leg”, acting out the half a person the label implies, and courtesy curdles into the imperative “Explain yuself”, repeated four times. His indignation is disguised as humour. The pun in “half-caste till dem overcast” (line 20) makes the listener laugh at the word before realising the joke is on them, and the anger beneath the laughter breaks through in the curse of line 22. Form carries the difference. Rossetti holds her grief within fourteen lines of regular rhyme, as if feeling must be kept in order; Agard’s free verse, with slashes instead of full stops, never lets the argument rest. Even his ending refuses her kind of release. Where Rossetti lets her lover go, Agard’s speaker withholds “de other half / of my story” until the listener returns “wid de whole of yu eye” (line 48). Rossetti’s feeling is a love that lets go; Agard’s is a dignity that insists on being seen whole.',
    commentary: [
      'It opens with a comparative argument rather than a description: both poems are in the first sentence, organised around one contrast, feelings that soften against feelings that harden, which runs through the whole paragraph.',
      'Its quotations are short and embedded, and each is analysed for what it does: the courtesy is read as a performance, the pun as a joke that turns on the listener, which is the close attention to language the question asks for.',
      'It names the feelings precisely, tenderness and indignation, dignity and love, rather than calling both poems emotional, and it shows how Agard’s humour carries his anger instead of choosing between them.',
      'It treats form as meaning, setting the sonnet’s regular rhyme and turn against free verse with slashes and no full stops, and it gives line references, which matter when the poems are printed with the paper.',
      'Its last sentence answers the question with a judgement about both poems at once, and it ends on Agard’s central idea of wholeness, so the comparison closes on the key word of the poem it is chiefly about.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-3 (page 67)',
      title: 'The one-legged introduction',
      summary:
        'The speaker interrupts with a polite phrase, strikes a pose on one leg and names himself with the label, acting out what it claims he is.',
      setting: 'A conversation, interrupted: the speaker steps in to face whoever used the word',
      who: ['The speaker', 'The listener'],
      quote: 'standing on one leg',
      themes: ['Identity and wholeness', 'Humour and anger'],
      tension: 2,
      significance:
        'The poem’s method, taking the label literally until it falls apart, is set up in three lines.',
    },
    {
      where: 'Stanza 2, lines 4-9 (page 67)',
      title: 'The demand, and the painter',
      summary:
        'The speaker orders the listener to explain what they mean, and tests the word on art: when Picasso blends two colours on a canvas, is the painting half-caste?',
      setting: 'A painter’s canvas, imagined',
      who: ['The speaker', 'The listener'],
      quote: 'half-caste canvas',
      themes: ['Language and prejudice', 'Mixing as creation', 'Voice and power'],
      tension: 3,
      significance:
        'The refrain begins, and the first analogy shows that mixing is admired everywhere except in people.',
    },
    {
      where: 'Stanza 2, lines 10-22 (page 67)',
      title: 'England’s weather',
      summary:
        'The second analogy moves to the sky, where brightness and shade meet, and becomes comedy: by this logic English weather is almost never anything but half-caste, and its clouds are the worst of all.',
      setting: 'The English sky, grey with cloud',
      who: ['The speaker', 'The listener'],
      quote: 'half-caste till dem overcast',
      themes: ['Mixing as creation', 'Humour and anger'],
      tension: 4,
      significance:
        'The longest and funniest analogy ends in a curse, the one moment the anger shows openly.',
    },
    {
      where: 'Stanza 2, lines 23-30 (page 67)',
      title: 'The piano',
      summary:
        'After the refrain returns, the third analogy imagines Tchaikovsky at the keyboard, playing black and white notes together: is the music he makes half-caste too?',
      setting: 'A composer at the piano, imagined',
      who: ['The speaker', 'The listener'],
      themes: ['Mixing as creation', 'Language and prejudice'],
      tension: 3,
      significance:
        'The sharpest analogy, because black and white are the colours of racial labels, heard here as harmony.',
    },
    {
      where: 'Stanza 3, lines 31-39 (page 67)',
      title: 'A body in halves',
      summary:
        'The refrain opens a new stanza, and the speaker turns the label on his own body: if he is half, then he can only half hear, half see and, on being introduced, give only part of a handshake.',
      setting: 'Face to face with the listener, at an introduction',
      who: ['The speaker', 'The listener'],
      themes: ['Identity and wholeness', 'Voice and power'],
      tension: 3,
      significance:
        'The poem moves from what the listener means to what the label would mean for the speaker himself.',
    },
    {
      where: 'Stanza 3, lines 40-46 (page 67)',
      title: 'Night, dreams and a shadow',
      summary:
        'The speaker follows the label into the night: his sleep and even his dreams come in halves, and by moonlight his shadow is only partial.',
      setting: 'Night, under the moon',
      who: ['The speaker'],
      quote: 'cast half-a-shadow',
      themes: ['Identity and wholeness', 'Language and prejudice'],
      tension: 4,
      significance:
        'The literal reading reaches the impossible, and the joke turns eerie: half a shadow means half an existence.',
    },
    {
      where: 'Stanza 3, lines 47-50 (pages 67-68)',
      title: 'Half becomes whole',
      summary:
        'With a single but, the poem turns. The listener is sent away to return the next day, and must then bring complete attention: full sight, full hearing and a fully open mind.',
      setting: 'The end of the conversation, and a meeting still to come',
      who: ['The speaker', 'The listener'],
      quote: 'wid de whole of yu eye',
      themes: ['Identity and wholeness', 'Voice and power'],
      tension: 5,
      significance:
        'Half becomes whole, and the incompleteness passes from the speaker to the listener’s way of seeing.',
    },
    {
      where: 'Stanza 4, lines 51-53 (page 68)',
      title: 'The other half of the story',
      summary:
        'Only then, the speaker promises, will he tell the listener the rest of what he has to say about himself. The poem ends there, without a full stop.',
      setting: 'The last three lines, standing apart like the first three',
      who: ['The speaker', 'The listener'],
      quote: 'de other half / of my story',
      themes: ['Identity and wholeness', 'Voice and power'],
      tension: 4,
      significance:
        'The speaker owns the story and sets the terms, and the word half now means an untold part, not a lesser person.',
    },
  ],
  relationships: [],

  compareWith: [
    {
      title: 'Search For My Tongue (Sujata Bhatt)',
      href: '/revision/texts/search-for-my-tongue',
      reason:
        'Both put the language of home on the page and make identity a matter of language, one defending a whole self against a label, the other a mother tongue against loss.',
    },
    {
      title: 'Prayer Before Birth (Louis MacNeice)',
      href: '/revision/texts/prayer-before-birth',
      reason:
        'Pearson set the two together in June 2019 on concerns about society: both speakers make urgent demands of a listener who never replies.',
    },
    {
      title: 'Remember (Christina Rossetti)',
      href: '/igcse/edexcel/poetry/remember',
      reason:
        'Pearson set the two together in May 2024 on feelings: free verse against a sonnet, confrontation against tenderness, and two very different endings.',
    },
    {
      title: 'If- (Rudyard Kipling)',
      href: '/igcse/edexcel/poetry/if',
      reason:
        'Two speakers instructing a listener: Kipling through a chain of conditions in Standard English, Agard through commands and questions in Creole.',
    },
  ],
  contentGuidance: ['discrimination', 'colonialism'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pages 67 and 68 (PDF pages 73 and 74): the prescribed printing. Read on 26 September 2026 as extracted text and as rendered page images, for all 53 lines, the stanza breaks (measured from the line spacing), the margin numbering and its slip on page 68, the spelling, capitals and punctuation, and the acknowledgement (copyright 1996, by permission of John Agard c/o Caroline Sheldon Literary Agency Ltd). Every quotation was copied from it; also used for Prayer Before Birth (page 52) and Remember (page 70) in the exam practice. The Issue 8 change list records no change to this poem',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, January 2023, Collection B Conflict, page 29: an independent printing of the poem, read as text and as a rendered page. Agrees on every quoted phrase; differs from the IGCSE printing only in lines 6 and 25 (you for yu) and line 26 (no when); its margin places 50 at the line about the mind, confirming the count of 53 lines; its contents page dates the poem 1996',
    },
    {
      label:
        'Pearson Edexcel GCSE (9-1) English Literature specification (1ET0), Issue 2, June 2019: Paper 2 Section B Part 1 compares a named poem, printed in the question paper, with another poem from the same anthology collection, and assesses the contexts in which the poems were written as well as language, form and structure. The basis for the GCSE note in the scope and tips',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/specification-and-sample-assesment/9781446914359_GCSE_2015_L12_Englit.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, 13 May 2024: Section B question 2 (Half-caste and Remember, feelings), used verbatim as the first practice question; the note that the Section B poems are included with the paper; the format of the named-pair and one-of-your-choice questions. Its printing of the poem (question booklet page 14) has the same wording as the anthology, places 50 in the margin beside the line about the mind, and runs the last three lines on without a stanza gap',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20240514.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 mark scheme, June 2024: indicative content for Half-caste (confrontational address, the mixed registers, phonetic spelling, the slash, hyphens and apostrophes, the three analogies, the expletive of line 22 read as anger and frustration, the pun in line 20, the two-part structure) and for Remember (octave and sestet, the volta, forgetting and smiling)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-rms-20240822.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 examiners’ report, June 2024: comments on the Half-caste and Remember question (form related to meaning, narrative overviews in weaker answers, a good answer’s points on declaratives, sarcasm, mocking tone and imperatives, held back by thinner coverage of Remember; context not assessed in either poetry section)',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-pef-20240822.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 examiners’ report, June 2019 (4ET1_01_1906_ER): Section B question 2, Compare the ways the writers present concerns about society in Prayer Before Birth and Half-caste, whose core sentence is used in the second practice question with the standard framing of the 2024 paper; comments on the accusatory tone of the pronoun, the intimidating, sarcastic and satirical tone, comparison throughout, and context not being marked',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/exam-materials/4ET1_01_pef_20190822.pdf',
    },
    {
      label:
        'Pearson International GCSE English Literature Getting Started Guide, Issue 2, November 2024, notes on Half-caste: the speaker read as a man protesting at how his racial heritage is described; free verse with occasional rhyme; the opening and closing three-line stanzas; the mixture of Creole and Standard English. It prints the painter’s name with a capital and the shadow phrase without hyphens, which is why the tips warn students to copy the anthology',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Teaching%20and%20learning%20materials/international-gcse-english-literature-getting-started-guide.pdf',
    },
    {
      label:
        'IBBY UK, John Agard, Hans Christian Andersen Awards UK writer nomination dossier (compiled by Ferelith Hordon and Clive Barnes, with thanks to Agard and his agent): born 1949 in Guyana; arrived in Britain in 1977 with Grace Nichols; touring lecturer for the Commonwealth Institute 1978 to 1985; Queen’s Gold Medal for Poetry 2012; Half-caste in Get Back Pimple (1996). Also reprints Felicity Capon’s 2013 interview, in which Agard gives Half-Caste as his example of poetry naming and un-naming the absurdity of an expression, and William Wallis’s Financial Times profile of 4 May 2018, which describes him as part African-Caribbean, part Portuguese',
      url: 'https://www.ibby.org/archive-storage/12_HCAA_Dossiers/2020_Authors/John_Agard_FV_spreads__1_.pdf',
    },
    {
      label:
        'The Poetry Archive, John Agard: born in Guyana in 1949, moved to Britain in the late 1970s; a celebrated performer; Queen’s Gold Medal 2012; Half-caste named as one of his best-loved poems',
      url: 'https://poetryarchive.org/poet/john-agard/',
    },
    {
      label:
        'Wikipedia, John Agard: born 21 June 1949 in British Guiana; moved to Britain in 1977 with Grace Nichols; Queen’s Gold Medal for Poetry 2012. Used only where it agrees with the sources above',
      url: 'https://en.wikipedia.org/wiki/John_Agard',
    },
    {
      label:
        'Oak National Academy, KS4 Edexcel lesson Understanding the poem Half-caste: the term described as historical and now considered inappropriate and disrespectful; phonetic spelling of the speaker’s Caribbean dialect. Its statement of which parent was Portuguese was not used, having no second source',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-edexcel/units/poetry-anthology-first-study-202/lessons/understanding-the-poem-half-caste',
    },
    {
      label:
        'Online Etymology Dictionary, caste and half-caste: caste from Portuguese casta, breed or race, from Latin castus, pure; half-caste first recorded 1789, Anglo-Indian, of the child of a European father and an Asian mother',
      url: 'https://www.etymonline.com/word/half-caste',
    },
    {
      label: 'Wiktionary, half-caste: labelled derogatory in both noun and adjective senses',
      url: 'https://en.wiktionary.org/wiki/half-caste',
    },
    {
      label:
        'Wiktionary, rass: Jamaican Creole, labelled vulgar, from English arse or ass; the basis for describing line 22 as a Caribbean swear word without printing it',
      url: 'https://en.wiktionary.org/wiki/rass',
    },
    {
      label:
        'Wikipedia, Guyanese Creole: an English-based creole spoken by most Guyanese, still widely seen as improper English as a legacy of colonialism; Wikipedia, British Guiana: a British colony, independent as Guyana on 26 May 1966',
      url: 'https://en.wikipedia.org/wiki/Guyanese_Creole',
    },
    {
      label:
        'Wikipedia, Pablo Picasso (1881 to 1973, Spanish painter) and Pyotr Ilyich Tchaikovsky (1840 to 1893, Russian composer, First to Sixth Symphonies)',
      url: 'https://en.wikipedia.org/wiki/Pyotr_Ilyich_Tchaikovsky',
    },
    {
      label:
        'Remember, Christina Rossetti, held as a byte copy in src/data/full-texts/remember.ts (Project Gutenberg #19188) and checked against the anthology, page 70: the turn at line 9 and the closing wish, used without quotation in the model answer and first practice question',
    },
  ],
}
