/**
 * Where a student can read, watch or hear the whole of a copyrighted text,
 * lawfully, because the rights-holder or its licensee put it there.
 *
 * WHY THIS EXISTS. A guide may quote a copyrighted text only in phrases under
 * 15 words (src/lib/study-guides/fair-dealing.ts), so it cannot print the poem
 * or the anthology passage a student is examined on. Pointing to a copy the
 * rights-holder published is the lawful way to put the whole text in front of
 * them: the original newspaper article, the TED talk and its transcript, a
 * Poetry Foundation page carrying the publisher's permission credit, a Poetry
 * Archive recording of the poet reading it.
 *
 * WHAT IS NOT HERE, deliberately. Copies uploaded without permission (teacher
 * and school uploads, document-sharing sites, aggregator poetry sites), and
 * copies lawful only abroad: a work in the US public domain but in UK copyright
 * (Frost until 2033, Eliot until 2035) hosted in the US is not linked from a UK
 * site. A text with no authorised free copy simply has no entry.
 *
 * Every link was fetched and checked on WHERE_TO_READ_CHECKED; `why` records
 * the authorisation seen, for the next reader, and is not shown to students.
 */

export type ReadSource = {
  kind: 'full-text' | 'video' | 'audio' | 'board-anthology'
  /** What the student sees: "The Guardian (the original article)". */
  label: string
  href: string
  /** Why this copy is authorised, as checked. Not rendered. */
  why: string
  /** Shown beside the link: "paywall", "US rights only". */
  note?: string
}

export const WHERE_TO_READ_CHECKED = '2026-09-25'

export const WHERE_TO_READ: Record<string, ReadSource[]> = {
  'a-game-of-polo-with-a-headless-goat': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 14-15)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of Carlton Publishing Group (acknowledgements, page 71). Research note: The prescribed extract. No authorised free copy of the wider book found.",
    },
  ],
  'a-passage-to-africa': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 4-5)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of Little, Brown Book Group and the author c/o The Hanbury Agency (acknowledgements, page 71). Research note: The prescribed extract (Abacus edition, pp.87-90). No authorised free copy of the wider book found.",
    },
  ],
  'an-unknown-girl': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 27',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: 'Pearson Edexcel International GCSE English Anthology, Issue 8, published by the exam board on its own site. Acknowledgements, printed page 72: "Poem \'An Unknown Girl\' by Moniza Alvi published in Split World: Poems 1990-2005, Bloodaxe Books, 2007. Reproduced by permission of Bloodaxe Books on behalf of the author, www.bloodaxebooks.com".',
    },
  ],
  'between-a-rock-and-a-hard-place': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 10-11)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of Simon & Schuster UK and Atria Books (acknowledgements, page 71). Research note: The prescribed extract, headed From 127 Hours: Between a Rock and a Hard Place (2010 edition, pp.22-24).",
    },
  ],
  'beyond-the-sky-and-the-earth': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 16-18)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of The McDermid Agency, Riverhead (Penguin Random House) and Doubleday Canada (acknowledgements, page 71). Research note: The prescribed extract.",
    },
  ],
  blessing: [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 53',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Blessing' by Imtiaz Dharker, published in Postcards from God, Bloodaxe Books, 1997. Reproduced by permission of Bloodaxe Books on behalf of the author, www.bloodaxebooks.com\".",
    },
    {
      kind: 'video',
      label: 'The poet performs it (BBC Teach)',
      href: 'https://www.bbc.co.uk/teach/class-clips-video/articles/zdn6f4j',
      why: "The BBC's own clip, 'Imtiaz Dharker performs Blessing', from the BBC series Contains Strong Language; the poet introduces and performs the poem, and the page's transcript shows the whole poem is performed. Research note: BBC video; playback may be limited outside the UK.",
      note: 'BBC video; it may not play outside the UK.',
    },
    {
      kind: 'video',
      label: 'The poet reads it (Bloodaxe Books)',
      href: 'https://www.youtube.com/watch?v=1To-F0xJjgM',
      why: "Posted by Bloodaxe Books, the poet's UK publisher, on its own channel (the channel bloodaxebooks.com links to). Description: the film is from Bloodaxe's IN PERSON: 30 POETS and 'Blessing', from POSTCARDS FROM GOD (Bloodaxe Books, 1997), is the first of the two poems read. Research note: Blessing is the first of two poems in the video; the recording was not listened to end to end.",
      note: 'One of several poems in the video.',
    },
  ],
  'chinese-cinderella': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 21-23)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced with permission of Penguin Books, Delacorte Press and Penguin Random House Australia (acknowledgements, page 71). Research note: The prescribed extract.",
    },
  ],
  'do-not-go-gentle-into-that-good-night': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 69',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Do Not Go Gentle into That Good Night' by Dylan Thomas, published in The Poems of Dylan Thomas and The Collected Poems of Dylan Thomas: The New Centenary Edition, Orion, 2014, copyright © Dylan Thomas 1952 and The Trustees for the copyright of Dylan Thomas. Reproduced by permission of David Higham Associates Limited; and New Directions Publishing Corp.\" Research note: Names David Higham Associates, the UK agent for the Dylan Thomas Trustees, as well as the US publisher.",
    },
  ],
  'explorers-or-boys-messing-about': [
    {
      kind: 'full-text',
      label: 'The Guardian (original article, 28 January 2003)',
      href: 'https://www.theguardian.com/uk/2003/jan/28/stevenmorris',
      why: "The publisher's own page for Steven Morris's article, with his byline and dated 28 January 2003. Research note: Free, no paywall. The Guardian headline has no comma after Explorers. 85% of the anthology's 6-word runs match; the anthology corrects some spellings (see Issue 8 changes).",
      note: 'The original. Your exam uses the anthology version, which differs slightly.',
    },
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 8-9)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, credited as copyright Guardian News and Media (acknowledgements, page 71). Research note: The prescribed version, which the anthology calls an extract.",
    },
  ],
  'h-is-for-hawk': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 19-20)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of The Random House Group and Grove/Atlantic (acknowledgements, page 71). Research note: The prescribed extract.",
    },
  ],
  'half-caste': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), pages 67 to 68',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Half-caste' by John Agard, copyright © 1996 by John Agard. Reproduced by kind permission of John Agard c/o Caroline Sheldon Literary Agency Ltd\".",
    },
    {
      kind: 'video',
      label: 'The poet performs it (Bloodaxe Books)',
      href: 'https://www.youtube.com/watch?v=Fazdum1hm3g',
      why: "Posted by Bloodaxe Books, Agard's UK publisher, on its own channel (the channel bloodaxebooks.com links to). Description: a live performance filmed at Havant Arts Centre in 2008 for Bloodaxe's film 'John Agard Live!' (its title), issued with his Alternative Anthem: Selected Poems (Bloodaxe Books, 2009); 'Half-caste' is the third poem in the excerpt. Research note: Half-caste is the third of three pieces in an eight-minute excerpt; the recording was not listened to end to end.",
    },
  ],
  'half-past-two': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 56',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Half-past two' by U. A. Fanthorpe, published in New and Collected Poems, Enitharmon Press, 2010. Reproduced by permission of Dr R V Bailey\".",
    },
  ],
  'hide-and-seek': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 58',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Hide and Seek' by Vernon Scannell, published in Collected Poems 1950-1993, Faber & Faber, 2011. Reproduced by permission of the Estate of Vernon Scannell\".",
    },
  ],
  night: [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 44-49)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of The Random House Group, Alfred A. Knopf and Penguin Random House Canada (acknowledgements, page 72). Research note: The whole story as prescribed, from Dear Life (2012), pp.271-285.",
    },
  ],
  'out-out': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 26',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, published in London by the exam board on its own site, and printed under licence rather than as public domain. Acknowledgements, printed page 72: \"Poem 'Out, Out-' by Robert Frost, published in The Poetry of Robert Frost, edited by Edward Connery Lathem, copyright © 1916, 1969 by Henry Holt and Company, copyright © 1944 by Robert Frost. Reproduced by arrangement with Henry Holt and Company, LLC. All rights reserved\". Research note: Permission is credited to Henry Holt and Company, LLC, which holds the copyright the credit names. It is a licensed copy in a UK publication, not a public-domain one, which is what the territorial rule asks for; the owner may still wish to confirm that Holt's grant covers the UK.",
    },
  ],
  'poem-at-thirty-nine': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 62',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Poem at Thirty-Nine' by Alice Walker, published in Collected Poems: Her Blue Body Everything We Know: Earthling Poems 1965-1990, Orion. Reproduced by permission of David Higham Associates Limited\".",
    },
  ],
  'prayer-before-birth': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 52',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Prayer Before Birth' by Louis MacNeice, published in Collected Poems, Faber & Faber, 1966, copyright © The Estate of Louis MacNeice, 1966 and 1979. Reproduced by permission of David Higham Associates Limited\".",
    },
    {
      kind: 'full-text',
      label: 'Exam board anthology (CCEA), pages 11 to 12',
      href: 'https://ccea.org.uk/downloads/docs/Support/General/2026/GCSE%20English%20Literature%20Poetry%20Anthology%202017.pdf',
      why: "CCEA GCSE English Literature Poetry Anthology, published by the exam board on its own site (BBC Bitesize's CCEA guide links to it). Credit under the poem: \"© 'Louis MacNeice Poems Selected by Michael Longley'. Reprinted by permission of David Higham Associates\".",
    },
  ],
  'search-for-my-tongue': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), pages 54 to 55',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'Search for my Tongue' by Sujata Bhatt published in Brunizem, Carcanet, 2007. Reproduced with permission of Carcanet Press Limited\".",
    },
  ],
  'significant-cigarettes': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 38-41)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of The Random House Group and Little, Brown and Company (acknowledgements, page 72). Research note: Not a short story: the anthology prints it as Significant Cigarettes (from The Road Home), the opening of Tremain's 2007 novel (Chatto & Windus, pp.1-6).",
    },
  ],
  'still-i-rise': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 29',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 72: \"Poem 'Still I Rise' by Maya Angelou, published in And Still I Rise, Virago Press, 1986, copyright © Maya Angelou 1978. Reproduced by permission of Little, Brown Book Group Limited; and Random House, an imprint and division of Penguin Random House LLC. All rights reserved\". Research note: Names both the UK rights-holder (Little, Brown, which owns Virago) and the US one.",
    },
  ],
  'the-bright-lights-of-sarajevo': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 28',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 72: \"Poem 'The Bright Lights of Sarajevo' by Tony Harrison. Reproduced by kind permission of Tony Harrison\".",
    },
  ],
  'the-danger-of-a-single-story': [
    {
      kind: 'video',
      label: 'TED (the original talk, TEDGlobal 2009)',
      href: 'https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story',
      why: "TED's own page for the talk, and the anthology's acknowledgement names ted.com as the source. Research note: The whole talk, about 18 minutes; the anthology prints an extract.",
      note: 'The original. Your exam uses the anthology version, which differs slightly.',
    },
    {
      kind: 'full-text',
      label: 'TED (official transcript)',
      href: 'https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story?view=transcript',
      why: "TED publishes the transcript on its own talk page; /transcript redirects to this URL. Research note: The whole talk. 87% of the anthology extract's 6-word runs appear in it word for word, so the anthology version is lightly edited.",
      note: 'The original. Your exam uses the anthology version, which differs slightly.',
    },
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 2-3)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of The Wylie Agency (acknowledgements, page 71). Research note: The prescribed extract, exactly as examined.",
    },
  ],
  'the-explorers-daughter': [
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 6-7)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of Aitken Alexander Associates (acknowledgements, page 71). Research note: The prescribed extract. No authorised free copy of the wider book found.",
    },
  ],
  'the-waste-land': [
    {
      kind: 'full-text',
      label: 'Poetry Foundation',
      href: 'https://www.poetryfoundation.org/poems/47311/the-waste-land',
      why: "Credit line names permission from the UK rights-holder, not public domain: \"Copyright Credit: T. S. Eliot, 'The Waste Land' from Collected Poems: 1909-1962. Copyright © 2020 by T. S. Eliot. Reprinted by permission of Faber and Faber, Ltd.\" Source: Collected Poems: 1909-1962 (Faber and Faber, Ltd., 2020). Research note: Permission is from Faber and Faber Ltd, Eliot's UK publisher; the credit states no territory.",
    },
    {
      kind: 'audio',
      label: 'Eliot reads Part I (Poetry Archive)',
      href: 'https://poetryarchive.org/poem/waste-land-part-i-burial-dead/',
      why: 'Eliot\'s own recording, with the text, on the Poetry Archive, which licenses its recordings. Credit: "from Collected Poems 1909-1962 (Faber, 1974), by permission of the publisher, Faber & Faber Ltd. Poem featured in the Poetry Archive\'s BBC 100 Collection."',
    },
    {
      kind: 'audio',
      label: 'Eliot reads Part II (Poetry Archive)',
      href: 'https://poetryarchive.org/poem/waste-land-part-ii-game-chess/',
      why: 'Eliot\'s own recording, with the text, on the Poetry Archive. Credit: "from Collected Poems 1909-1962 (Faber, 1974), by permission of the publisher, Faber & Faber Ltd."',
    },
    {
      kind: 'audio',
      label: 'Eliot reads Part III (Poetry Archive)',
      href: 'https://poetryarchive.org/poem/waste-land-part-iii-fire-sermon/',
      why: 'Eliot\'s own recording, with the text, on the Poetry Archive. Credit: "from Collected Poems 1909-1962 (Faber, 1974), by permission of the publisher, Faber & Faber Ltd."',
    },
    {
      kind: 'audio',
      label: 'Eliot reads Part IV (Poetry Archive)',
      href: 'https://poetryarchive.org/poem/waste-land-part-iv-death-water/',
      why: 'Eliot\'s own recording, with the text, on the Poetry Archive. Credit: "from Collected Poems 1909-1962 (Faber, 1974), by permission of the publisher, Faber & Faber Ltd."',
    },
    {
      kind: 'audio',
      label: 'Eliot reads Part V (Poetry Archive)',
      href: 'https://poetryarchive.org/poem/waste-land-part-v-what-thunder-said/',
      why: 'Eliot\'s own recording, with the text, on the Poetry Archive. Credit: "from Collected Poems 1909-1962 (Faber, 1974), by permission of the publisher, Faber & Faber Ltd."',
    },
  ],
  'war-photographer': [
    {
      kind: 'board-anthology',
      label: 'Exam board anthology (Pearson Edexcel), page 63',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "Pearson Edexcel International GCSE English Anthology, Issue 8, on the exam board's own site. Acknowledgements, printed page 73: \"Poem 'War Photographer' by Carol Ann Duffy, published in Standing Female Nude, Anvil Press Poetry, 1985, copyright © Carol Ann Duffy. Reproduced by permission of the author c/o Rogers, Coleridge & White Ltd., 20 Powis Mews, London W11 1JN\".",
    },
    {
      kind: 'full-text',
      label: 'Scottish Poetry Library',
      href: 'https://www.scottishpoetrylibrary.org.uk/poem/war-photographer/',
      why: 'Full poem (four stanzas) with the credit line: "From New Selected Poems 1984-2004 (Picador, 2004). Originally published in Standing Female Nude (Anvil, 1985). Reproduced by kind permission of the author."',
    },
  ],
  'young-and-dyslexic': [
    {
      kind: 'full-text',
      label: 'The Guardian (original article, 2 October 2015)',
      href: 'https://www.theguardian.com/commentisfree/2015/oct/02/young-dyslexic-children-creative',
      why: "The publisher's own page for Benjamin Zephaniah's article, with his byline and dated 2 October 2015. Research note: Free, no paywall. The article says it is adapted from his chapter in Creative, Successful, Dyslexic (Jessica Kingsley, 2015). 84% of the anthology's 6-word runs match.",
      note: 'The original. Your exam uses the anthology version, which differs slightly.',
    },
    {
      kind: 'board-anthology',
      label: 'Pearson Edexcel International GCSE English Anthology (pages 12-13)',
      href: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
      why: "The exam board's own free PDF, reproduced by permission of Jessica Kingsley Publishers (acknowledgements, page 71). Research note: The prescribed version.",
    },
  ],
}
