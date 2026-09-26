import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Refugee Blues, W. H. Auden (written 1939). A complete guide: the text had only
 * a stub page before this file. No specification we cover prescribes it, so it
 * is written for GCSE English Literature in general.
 *
 * COPYRIGHT. Auden died in 1973 and the poem is in UK copyright. Every quotation
 * is a short phrase, each followed by analysis, and the page as a whole quotes
 * well under the share of the poem that fair-dealing.ts allows (fifteen per cent
 * of 363 words). No passage is printed: the extracts point to line numbers and
 * summarise. The guide quotes nothing from any other source, so every quoted
 * phrase on the page is Auden's.
 *
 * VERIFICATION. The wording of every quotation was checked against two
 * independent printings of the poem: the Echoes & Reflections student handout,
 * which gives the whole text, and the Bradford City of Sanctuary text, which
 * agrees on every phrase quoted here and on several further lines. The second
 * check included deliberately wrong variants, and each was caught. Line
 * numbers count from the first line of the poem, 36 lines in twelve stanzas of
 * three. Context facts are sourced below; where only one account gave a detail
 * (the month the poem was finished), the guide says so rather than stating it.
 *
 * FACT-CHECK. A second pass re-verified every quotation, line number and
 * context figure. It removed prose that reproduced the poem's own words outside
 * quotation marks, where the fair-dealing counter cannot see them: one timeline
 * summary carried thirteen consecutive words of stanza 11. Descriptions of the
 * animals, the building and the snowy plain are now in the guide's own words.
 * It also stopped treating "before the war began" as settled, since only one
 * source dates the poem to March 1939, and corrected the Spain episode (Auden
 * left the propaganda job after a week, not Spain) and the Kristallnacht arrest
 * figure (about 26,000, per USHMM).
 *
 * THIRD PASS (26 September 2026). Every quotation and every line number was
 * matched again, by script, against a third copy of the text (Poeticous, all 36
 * lines identical to the Echoes text) as well as the first two; the colon, the
 * single question mark, the stanza-opening verbs and the 363-word count all
 * hold. Fixed: three quotations had been capitalised at the start of a sentence
 * ("Officially", "Politely", "Daily bread") where the poem has them in lower
 * case, so each is now introduced by "the word" or "the phrase"; the St Louis
 * paragraph said Cuba let no passengers land, when USHMM records 28 admitted at
 * Havana; the context said the poem is "spoken by two" people, when it has one
 * speaker and a silent companion. Four places carried four or five consecutive
 * words of the poem outside quotation marks (the building, the cat, Hitler over
 * Europe, and the refrain of stanza 6 half inside and half outside the marks),
 * and are reworded. The birds no longer sing "because" they have no
 * politicians, a causal link the poem does not make, and several readings
 * stated as fact are now marked as readings.
 */
export const guide: StudyGuide = {
  slug: 'refugee-blues',
  title: 'Refugee Blues',
  author: 'W. H. Auden',
  form: 'poem',
  scope:
    'The whole poem: twelve three-line stanzas, 36 lines, written in 1939. Line numbers in this guide count from the first line of the poem.',
  rights: {
    status: 'copyright',
    acknowledgement:
      "© The Estate of W. H. Auden. Refugee Blues was written in 1939 and collected in Another Time (London and New York, 1940). It is quoted here in short phrases for criticism and review; read the whole poem in a published edition of Auden's poems.",
  },
  workLength: {
    words: 363,
    lines: 36,
    basis:
      'Counted from the text printed in the Echoes & Reflections student handout; the Bradford City of Sanctuary text also has twelve stanzas, agrees on every phrase quoted and gives the same 363 on a separate count. Twelve three-line stanzas, 36 lines, 363 words counting the hyphenated to-day as one word (365 if its two halves are counted separately). The quotation limit is the same on either count.',
  },

  overview: {
    summary: [
      "Refugee Blues is spoken by a Jewish refugee from Nazi Germany to a companion, who is addressed in every refrain as “my dear”. The two of them are in an unnamed great city of ten million people, where there is room for the rich and the destitute alike but none for them. They have lost their country, which is still there on the map, and their old passports cannot be renewed. One by one the people who might help them turn them away: a consul tells them that without a passport they are “officially dead”, a committee asks them to come back next year, and a speaker at a public meeting warns the crowd that refugees will take the local people's “daily bread”.",
      'In the second half the poem widens and darkens. The speaker hears what sounds like thunder and realises it is Hitler, threatening death to people like them across Europe. Everywhere they go, animals are given what the refugees are refused: a pet poodle dressed in a coat, a cat taken indoors, fish that seem to swim freely in the harbour, and birds singing in the trees, who have no politicians. A dream of an enormous building, its doors numbered in thousands and none of them theirs, gives way to the final image: thousands of soldiers marching back and forth across a snowy plain, searching for the two of them.',
      'Auden wrote the poem in 1939, the year he moved to New York and the year after the Nazi pogrom of Kristallnacht and the Évian Conference, at which almost every nation present declined to take in more Jewish refugees. He borrowed its form from the blues, the African American song tradition of hardship and loss, and the gap between its simple, repeating music and its subject is the source of much of its power. The strongest answers read it not only as a poem about Nazi persecution, since Hitler himself appears in a single stanza, but as an accusation aimed at the democracies, whose officials and citizens turn the refugees away with perfectly good manners.',
    ],
  },

  context: [
    {
      heading: 'Auden in the 1930s',
      body: "Wystan Hugh Auden was born in York on 21 February 1907 and studied at Oxford. In his twenties he was already one of the leading poets in England. He spent nine months in Berlin in 1928 and 1929, went to Spain in 1937 during the Spanish Civil War intending to drive an ambulance for the Republic (he was put to work writing propaganda instead, left that job after a week, and returned to England after a brief visit to the front), and in 1938 spent six months in China with his friend Christopher Isherwood during the war with Japan. So by 1939 he had seen several of the decade's conflicts for himself.",
    },
    {
      heading: 'A marriage for a passport',
      body: 'Auden knew at first hand what a passport could mean. In 1935 he married Erika Mann, the daughter of the German novelist Thomas Mann, when it became clear that the Nazis intended to strip her of her German citizenship. It was a marriage of convenience, suggested by Isherwood, and it gave her British nationality. When the consul in stanza 4 declares that a person without a passport is “officially dead”, the line comes from a poet who had used his own nationality to spare someone that fate.',
    },
    {
      heading: 'Leaving for New York, 1939',
      body: "In January 1939 Auden and Isherwood sailed to New York, entering on temporary visas. Their departure was later seen by many in Britain as a betrayal, even as cowardice, and Auden's reputation suffered; he became a United States citizen in 1946 and died in Vienna on 29 September 1973. Refugee Blues was written in 1939; one account dates its completion to March 1939, in New York, two months after he arrived. Auden was not a refugee himself: he was a British citizen who chose to emigrate. The speaker is a created voice, and a strong answer keeps the two apart.",
    },
    {
      heading: 'Nazi Germany and its Jewish citizens',
      body: 'The Nazi Nuremberg Laws of 15 September 1935 restricted citizenship to people the regime classed as being of German or related blood, which meant that Jewish Germans lost full citizenship and all political rights. On 9 and 10 November 1938, in the pogrom known as Kristallnacht, more than 1,400 synagogues were burned, thousands of Jewish shops and homes were wrecked, and about 26,000 Jewish men were sent to concentration camps. After it, many German Jews concluded that they could no longer stay. By September 1939 about 282,000 Jews had left Germany and 117,000 had left annexed Austria. The poem’s speaker and the companion are two of the people trying to join them.',
    },
    {
      heading: 'The doors close: Évian and the quotas',
      body: "In July 1938, at President Roosevelt's call, delegates from 32 countries met at Évian in France to discuss the refugee crisis. Most of them, including the United States and Britain, gave reasons for not taking more refugees, and only the Dominican Republic offered to accept more. The United States kept to its immigration quota: by the end of June 1939, 309,000 German, Austrian and Czech Jews had applied for the 27,000 places available under it. In Britain, the Kindertransport admitted 10,000 unaccompanied Jewish children in 1938 and 1939 on an emergency basis. The table-banging consul and the courteous committee who ask the speaker to wait a year are this world in miniature.",
    },
    {
      heading: "Hitler's threat, January 1939",
      body: "On 30 January 1939, in a speech to the Reichstag marking six years in power, Hitler threatened that if another world war came, the result would be the destruction of the Jewish people of Europe. Stanza 7, where the speaker mistakes Hitler's voice for thunder and hears him say “They must die”, was written in the same year, and it is reasonable to connect the two. Be careful with hindsight, though. Historians debate what Hitler meant by the threat in 1939, and Auden could not have known what the Holocaust would become. The poem records a fear, not a prophecy.",
    },
    {
      heading: 'New York, 1939',
      body: 'The poem never names its city of ten million. Some readers take it to be New York, where by one account Auden finished it; others see the vagueness as deliberate, since the refugees meet the same refusal wherever they turn. Hostility to refugees was not imaginary there. On 20 February 1939 the German American Bund, a pro-Nazi organisation, held a rally in Madison Square Garden attended by more than 20,000 people, with antisemitic speeches under American flags. Nothing suggests Auden based stanza 6 on it, but the speaker at the public meeting who warns that refugees will steal “our daily bread” speaks for a real mood in the democracies of the late 1930s, the years of the Great Depression, when jobs were scarce.',
    },
    {
      heading: 'The same year: the voyage of the St Louis',
      body: 'On 13 May 1939 the German liner St Louis sailed from Hamburg for Havana with 937 passengers, almost all of them Jewish refugees. Cuba cancelled their landing permits and let only 28 of them ashore, and the United States would not take the rest either. On 6 June the ship turned back to Europe, where Britain, the Netherlands, Belgium and France took the passengers in. Of those who returned to continental Europe, 254 later died in the Holocaust. The poem does not refer to the voyage, but the voyage shows how exactly the poem describes the refugees’ position: in sight of safety, and refused it.',
    },
    {
      heading: "The blues, and Auden's lighter poems",
      body: 'The blues is a musical form that grew up among African Americans in the Deep South of the United States from around the 1860s, and its songs are often about hardship, loss and oppression. A classic blues verse states a line, repeats it, then answers it with a longer, rhyming line. Auden wrote several poems in popular song forms in the 1930s, and when Another Time was published in 1940 it printed Refugee Blues in its section of Lighter Poems, beside Funeral Blues and Roman Wall Blues. In some later editions of Auden’s poems it appears without its title, as the first of a group called Ten Songs, and in 1942 the composer Elisabeth Lutyens set a shortened version to music.',
    },
  ],

  themes: [
    {
      title: 'Statelessness and identity',
      body: "The poem's central horror is that a person can exist and yet not count. The speakers have a country that is still on the map but closed to them, and old passports that cannot be renewed; the consul concludes that without the document they are “officially dead”. Auden sets the living against the paper: the yew in the churchyard renews itself every spring, but “Old passports” cannot. The refrain's reply, “we are still alive”, is the poem's quiet protest, insisting on a fact the state refuses to register. One reading is that the poem is about the loss of a home. The more convincing one is that it is about the loss of a legal self, because every door in the poem is shut by a rule rather than by force.",
    },
    {
      title: 'Official indifference',
      body: "Most of the poem is not about Nazis at all but about the countries that might have taken the refugees in. The consul bangs the table; the committee is courteous, offers a chair and asks the speaker “politely to return next year”. That politeness is arguably the cruellest thing in the poem, because it turns refusal into procedure and makes no one responsible. Auden answers it with the only question in any refrain: where the couple can go today. It is possible to argue that the officials are only following the rules they were given, and in 1939 the quotas were real. But the poem's point is that following such rules is itself a choice, and the refugees pay for it.",
    },
    {
      title: 'Prejudice and dehumanisation',
      body: 'At the meeting, the man who addresses the crowd warns that “they will steal our daily bread”, and his pronouns do the damage: the local people are “we” and the refugees are a faceless group rather than two people. The refrain turns the pronouns round and makes them personal again, as the speaker tells the companion that the man was talking about “you and me”. The same logic runs through the animal stanzas, where a pampered poodle and a cat allowed indoors are treated better than people, because “they weren’t German Jews”. Auden shows prejudice working through ordinary language and ordinary kindness withheld, not only through violence.',
    },
    {
      title: 'Persecution and the growing threat',
      body: "The threat in the poem grows as the stanzas go on. It begins as exclusion, becomes hostility at the public meeting, and turns into a death threat in stanza 7, where what sounds like thunder turns out to be Hitler's voice, threatening the whole continent: “They must die”. The final stanza makes the danger physical: thousands of soldiers march across a snowy plain, “Looking for you and me”. Whether that last scene is a dream, a premonition of the war to come, or a picture of how persecution follows the refugees even into exile, the poem ends with the hunt still going on. Nothing is resolved, because nothing had been resolved in 1939.",
    },
    {
      title: 'Nature, freedom and exclusion',
      body: 'In stanzas 8 to 10 the speaker looks at animals and finds them all better off. A dog is dressed up and a cat taken indoors, fish swim freely in the harbour “Only ten feet away”, and birds sing contentedly in a wood, where there are no politicians. The contrast is bitter: freedom seems natural everywhere except among human beings, and the thing that separates the refugees from safety is not the sea or the forest but politics. The speaker even hedges about the fish, saying they only seem free, which suggests that someone who has been refused so often can no longer trust any image of freedom, even one in the water below the quay.',
    },
    {
      title: 'Love and endurance',
      body: 'Almost everything is taken from the speakers except each other. The endearment “my dear” appears in all twelve refrains, and it arguably changes colour as the poem goes on: tender in stanza 1, weary by the committee, frightened by the end. One reading is that the refrain is a comfort, the one private space in a public world that has shut them out. Another is that it is a lullaby for a situation that cannot be made better. Both are possible, but the first is more convincing, because the refrain is also where the speaker answers every official: they are “still alive”, and they are still together.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'A Jewish refugee from Nazi Germany; the voice of the whole poem',
      body: 'The speaker is never named, and the poem never says whether the speaker is a man or a woman; what we know is the situation. The refrain in stanza 8 makes clear that the speaker and companion are German Jews. The speaker narrates in the clipped style of the blues, often dropping the word I (stanza 5 begins simply with Went, stanza 6 with Came), and is observant, bitter and precise: the consul, the committee and the man at the meeting are all quoted or summed up exactly. The speaker only says I at the two moments of uncertain perception, when thinking they hear thunder and when dreaming of the building, which makes the most frightening images feel half-glimpsed.',
    },
    {
      name: 'The companion',
      role: 'The person addressed in every refrain; the speaker’s companion in exile',
      body: "The companion never speaks, and is present only as the listener in the refrain, the “my dear” of all twelve stanzas. Most readers take the pair to be a couple, though the poem does not say so; the relationship could be a marriage, a love affair or a family bond. The companion matters because the refrain is where the speaker's real replies are spoken. Nobody answers the consul, the committee or the crowd to their faces. The answers are said privately, to the one person who shares the danger, and the last line of the poem names them both as the soldiers' targets.",
    },
    {
      name: 'The consul',
      role: 'A government official in stanza 4',
      body: "A consul represents a foreign government and issues the visas a refugee needs. This one bangs the table and pronounces that a person without a passport is “officially dead”. He is the poem's picture of the state as a machine for sorting people: there is force in the gesture and no regret in the words. He gives a rule, not a reason, and his word is final.",
    },
    {
      name: 'The committee',
      role: 'A committee the speaker approaches for help in stanza 5',
      body: 'The committee are kinder than the consul, and in some ways worse. They offer the speaker a chair and ask for a return visit next year. Their politeness is real, but it helps no one, because the refugees need somewhere to go today. The poem is not sneering at charity as such. It shows how courtesy can become a way of doing nothing.',
    },
    {
      name: 'The public speaker',
      role: 'The man who addresses the public meeting in stanza 6',
      body: 'He stands up at a meeting and warns that if refugees are let in, they will take the local people’s “daily bread”. He never meets the couple, and does not need to: he talks about them as a category. The refrain insists that he was talking about two real people. He is the voice of popular prejudice, and he matters because he shows the refugees are refused not only by officials but by ordinary citizens.',
    },
    {
      name: 'Hitler',
      role: 'The Nazi dictator, heard as thunder in stanza 7',
      body: "Hitler is the only real person named in the poem, and he never appears in person: the speaker hears what sounds like thunder over Europe and realises it is his voice, saying “They must die”. The image turns him into something as vast and impersonal as the weather. It is significant that he fills only one stanza of twelve. The poem's attention is on the people who might have saved the refugees from him.",
    },
    {
      name: 'The soldiers',
      role: 'Ten thousand soldiers on a snowy plain in stanza 12',
      body: 'The soldiers march back and forth as snow comes down, and the poem ends as the speaker realises they are searching for the couple. They are not identified, and that uncertainty is part of their menace: they may be Nazi troops, the armies of a war the speaker fears is coming, or the embodiment of a whole world hunting two people. Their number, set against two people, makes the final line the most frightening in the poem.',
    },
  ],

  keyQuotes: [
    {
      text: 'there’s no place for us, my dear',
      where: 'The speaker, Stanza 1, line 3 (the first refrain)',
      analysis:
        'The first refrain sets up the whole poem. The city has just been described as holding ten million people, the rich and the poor alike, so the claim that there is “no place” for two more is shocking in its arithmetic. The word “place” means both a home and a position in society, and the refugees are denied both. The endearment softens the statement into something said privately, which is the pattern of every refrain: the terrible news is shared between the two, never shouted.',
    },
    {
      text: 'Old passports',
      where: 'The speaker, Stanza 3, line 9',
      analysis:
        "The third stanza sets a churchyard yew, which renews itself every spring, against the refugees' documents, which cannot be renewed at all. The contrast suggests that nature allows a second life while the state does not. The yew grows among graves, so the image can be read as quietly anticipating the consul's verdict in the next stanza: the refugees are being treated like people already among the dead.",
    },
    {
      text: 'If you’ve got no passport you’re officially dead',
      where: 'The consul, Stanza 4, line 11',
      analysis:
        "The consul's verdict is the bluntest line in the poem, and the adverb is what makes it chilling. The word “officially” turns death into a matter of paperwork: the state does not need to kill the refugees if it can simply decline to recognise them. The casual, spoken rhythm of the line (you’ve got, you’re) makes the judgement sound routine, as though he says it every day. Learn it exactly, contractions included.",
    },
    {
      text: 'we are still alive',
      where: 'The speaker, Stanza 4, line 12 (the refrain)',
      analysis:
        "The refrain's answer to the consul is simple and defiant: a plain statement of fact against an official fiction. But it is spoken to the companion, not to the consul, which suggests the refugees have no right of reply in the room. Repeated within the line, the words sound less like a victory than like something the two of them must keep saying in order to go on believing it.",
    },
    {
      text: 'Asked me politely to return next year',
      where: 'The speaker, describing the committee, Stanza 5, line 14',
      analysis:
        "The committee's courtesy is the irony of the stanza. The word “politely” marks almost the only kindness anyone in the poem shows the refugees, and it achieves nothing, because “next year” is useless to people with nowhere to go now. The refrain that follows is the only one in the poem that ends with a question mark, asking where they can go today, which exposes the gap between the committee's timetable and the refugees' emergency.",
    },
    {
      text: 'they will steal our daily bread',
      where: 'The speaker at the public meeting, Stanza 6, line 17',
      analysis:
        "The public speaker's warning uses the economic fear of the Depression years: refugees as rivals for jobs and food. The phrase “daily bread” echoes the Lord's Prayer, so, on one reading, he dresses his prejudice in the language of Christian piety, which makes it the more hypocritical. His pronouns split the world into “we” and “they”, and the refrain answers by making the faceless “they” personal again: the man meant “you and me”.",
    },
    {
      text: 'They must die',
      where: 'Hitler, as the speaker hears him, Stanza 7, line 20',
      analysis:
        "Three words, and the most brutal in the poem. The speaker first takes the sound for thunder, so Hitler's threat arrives like a force of nature rolling over the whole continent. The flat, three-word sentence has no reason attached, which is the point: it is a sentence of death on a whole people. Written in the same year as Hitler's Reichstag threat of January 1939, it records a fear rather than a prophecy.",
    },
    {
      text: 'they weren’t German Jews',
      where: 'The speaker, Stanza 8, line 24 (the refrain)',
      analysis:
        'After a pampered poodle and a cat allowed indoors, the refrain gives the reason the animals are treated better than the refugees. It is the first time the poem names who the speakers are, and it names them as the category that has been refused. The bitter comedy of the image, a pampered pet preferred to a human being, shows how completely the refugees have been dehumanised.',
    },
    {
      text: 'Only ten feet away',
      where: 'The speaker, Stanza 9, line 27 (the refrain)',
      analysis:
        'Standing on the quay, the speaker watches fish swimming freely in the harbour, and the refrain measures the distance to that freedom: tiny, and impassable. The harbour is where a ship might take them to safety, so the image can also be read as a picture of the sea routes that were closed to refugees. This is the shortest refrain in the poem, and its brevity makes the distance feel even more tormenting.',
    },
    {
      text: 'Looking for you and me',
      where: 'The speaker, Stanza 12, line 36 (the final refrain)',
      analysis:
        'The poem ends with the couple being hunted. Ten thousand soldiers are set against two people, and the plain words make the image more frightening, not less. The phrase repeats the “you and me” of the public-meeting stanza, so the private refrain that has named the couple throughout now names them as targets. There is no resolution: the last line is a search still going on.',
    },
  ],

  extracts: [
    {
      title: 'The consul and the committee',
      where: 'Stanzas 4 and 5, lines 10-15',
      pointer:
        'Lines 10 to 15, counting from the first line of the poem: from the consul banging the table to the end of the fifth stanza, whose refrain ends with a question mark.',
      summary:
        'The speaker describes two attempts to get help. A consul bangs the table and declares that a person without a passport does not officially exist, and the refrain replies privately that the couple are alive. Then a committee treats the speaker courteously, offering a chair, but asks for a return visit next year, and the refrain asks where the two of them can go today.',
      annotations: [
        {
          phrase: 'If you’ve got no passport you’re officially dead',
          note: 'Put inside quotation marks in the poem, the consul speaks directly, and the colloquial rhythm makes his verdict sound routine. The rhyme links his word dead to the said that introduces him, so the whole couplet closes on his judgement.',
        },
        {
          phrase: 'we are still alive',
          note: 'The reply is spoken to the companion, not to the consul. The refugees answer officialdom only in private, which suggests they have no voice in the room where their fate is decided.',
        },
        {
          phrase: 'Asked me politely to return next year',
          note: 'The shift from the consul’s anger to the committee’s manners changes the kind of refusal, not the result. The word “politely” is the irony: courtesy has become a way of saying no without anyone being to blame.',
        },
        {
          phrase: 'next year',
          note: 'Set against the question in the refrain about today, the phrase exposes the gap between the committee’s timetable and an emergency, and the question mark makes this the only refrain that asks rather than states.',
        },
      ],
      question:
        'Look at stanzas 4 and 5 (lines 10-15). How does Auden present the ways the refugees are treated by officials? Refer closely to his language and to the refrain.',
    },
    {
      title: 'The public meeting and the thunder',
      where: 'Stanzas 6 and 7, lines 16-21',
      pointer:
        'Lines 16 to 21: from the speaker at the public meeting getting up to the refrain at the end of the stanza in which Hitler is named.',
      summary:
        'At a public meeting a speaker warns the crowd that if refugees are admitted they will take the local people’s food, and the refrain tells the companion he was talking about them. In the next stanza the speaker hears what sounds like thunder, realises it is Hitler’s voice over Europe demanding their deaths, and understands that the two of them were in his thoughts.',
      annotations: [
        {
          phrase: 'they will steal our daily bread',
          note: 'The public speaker’s pronouns divide the world into “we” and “they”. The verb steal makes refugees into criminals before they have arrived, and the economic fear belongs to the Depression years.',
        },
        {
          phrase: 'daily bread',
          note: 'An echo of the Lord’s Prayer. The speaker borrows the language of Christian piety to justify shutting out people in need, which arguably makes his prejudice more hypocritical and his audience complicit.',
        },
        {
          phrase: 'you and me',
          note: 'The refrain turns the faceless crowd of the speech back into two people. The shift from a political category to a personal pronoun is the poem’s whole method in miniature.',
        },
        {
          phrase: 'They must die',
          note: 'The rhyme places this verdict at the end of the line, where it answers the thunder in the sky above it. The escalation from stanza 6 is steep: from losing bread to losing life.',
        },
      ],
      question:
        'Look at stanzas 6 and 7 (lines 16-21). How does Auden present the growing threat to the refugees in these lines?',
    },
    {
      title: 'The animals, the dream and the soldiers',
      where: 'Stanzas 8 to 12, lines 22-36',
      pointer:
        'Lines 22 to 36, the last five stanzas: from the poodle in its jacket to the final refrain.',
      summary:
        'The speaker sees a pet dog and a cat sheltered, fish swimming freely in the harbour and birds singing in a wood with no politicians, and each refrain measures the gap between the animals and the refugees. A dream of a vast building, its doors counted in thousands and none of them belonging to the couple, gives way to a last scene of ten thousand soldiers marching over a snowy plain, searching for them.',
      annotations: [
        {
          phrase: 'they weren’t German Jews',
          note: 'The first time the poem names who the speakers are, and it does so as the reason for their exclusion. A cat is welcome indoors; they are not, simply because of who they are.',
        },
        {
          phrase: 'Only ten feet away',
          note: 'The measurement is precise and small, which makes the gap to freedom more painful. The harbour is where ships leave, so the image can be read as pointing to the sea routes closed to refugees.',
        },
        {
          phrase: 'Looking for you and me',
          note: 'Ten thousand soldiers against two people: the scale shows how powerless the couple are. The poem ends mid-search, without resolution, and in 1939 none was in sight.',
        },
      ],
      question:
        'Look at stanzas 8 to 12 (lines 22-36). How does Auden use images of the natural world and of the dream to present the refugees’ situation?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Refrain with internal repetition',
      example:
        'The third line of every stanza says a phrase, adds “my dear”, then says the phrase again, as in the first refrain, “there’s no place for us, my dear” (line 3).',
      effect:
        'The repetition works like the chorus of a song and gives the poem its mournful, weary music. It also enacts the refugees’ situation: they are going round in circles, getting nowhere, and each repetition sounds like someone saying a hard truth twice so that it can be believed. Tracking how the refrain changes, from statement to defiance to question to fear, is one of the best ways to structure an answer.',
    },
    {
      technique: 'Direct address and a term of endearment',
      example: 'The phrase “my dear” appears in all twelve refrains.',
      effect:
        'The whole poem becomes a private conversation between two people in a hostile public world. The tenderness of the phrase is set against the brutality of what is being reported, and the contrast makes the cruelty more painful. It also makes the reader an eavesdropper, overhearing what the refugees say only to each other.',
    },
    {
      technique: 'Direct speech of authority',
      example:
        'The consul (line 11) and the man at the public meeting (line 17) are quoted in their own words, inside quotation marks, and so is Hitler (line 20).',
      effect:
        'The only words the poem puts inside quotation marks belong to the powerful, and each is a verdict: “officially dead”, “daily bread”, “They must die”. The refugees never answer them directly; their replies come in the refrain, to each other. The pattern shows who has a voice in public and who does not.',
    },
    {
      technique: 'Irony',
      example:
        'The committee offers a chair and asks the speaker “politely” to come back “next year” (line 14).',
      effect:
        'Politeness is normally a kindness, but here it is a way of refusing help without anyone having to take responsibility. The reader sees the gap between the committee’s manners and the refugees’ emergency, and the irony implicates every comfortable institution that meant well and did nothing.',
    },
    {
      technique: 'Pronouns: we and they',
      example:
        'At the public meeting the local people are “we” and the refugees are “they” (line 17); the refrain answers that he meant “you and me” (line 18).',
      effect:
        'The public speaker turns two people into a faceless group, which is how prejudice works; the refrain turns them back into individuals. The switch between the two sets of pronouns is the poem’s argument in miniature: to see refugees as “you and me” is to refuse to hate them.',
    },
    {
      technique: 'Metaphor: Hitler as thunder',
      example:
        'In stanza 7 the speaker thinks the noise overhead is thunder, then realises it is Hitler’s voice across Europe, saying “They must die” (lines 19-20).',
      effect:
        'Hitler’s threat becomes as vast and impersonal as a storm, looming over the whole continent. One reading of the half-heard framing (the speaker only thought it was thunder) is that it shows how news of the threat reached people: at a distance, through rumour or the radio, and all the more frightening for that.',
    },
    {
      technique: 'Juxtaposition of animals and people',
      example:
        'A dressed-up poodle and a cat allowed indoors (stanza 8), fish in the harbour (stanza 9) and birds in a wood (stanza 10) are each set against the refugees in the refrain, as in “they weren’t German Jews” (line 24).',
      effect:
        'Each animal has what the refugees are denied: shelter, freedom of movement, or a life without politicians. The comparison is bitter, sometimes darkly comic, and it exposes a world that pampers pets while refusing people. The birds’ stanza goes furthest, suggesting that the problem is being human at all.',
    },
    {
      technique: 'Biblical allusion',
      example: 'The public speaker fears refugees will steal “our daily bread” (line 17).',
      effect:
        'The phrase comes from the Lord’s Prayer, so the man opposing refugees borrows the words of Christian prayer to justify turning people away. One reading is that Auden is exposing a society that calls itself Christian but will not share its bread with strangers in need.',
    },
    {
      technique: 'Symbolism',
      example:
        'The churchyard yew that renews itself every spring (stanza 3), set against “Old passports” (line 9); the dream building, its floors, windows and doors counted in thousands, none of them the couple’s (stanza 11).',
      effect:
        'The yew, growing among graves, stands for renewal the refugees cannot have. The building symbolises a whole society, vast and full of openings, that still has no room for them. Both symbols turn a legal problem into a picture a reader can see.',
    },
    {
      technique: 'Contrast of scale',
      example:
        'A city of ten million (stanza 1) and ten thousand soldiers (stanza 12) are each set against just two people.',
      effect:
        'The numbers frame the whole poem: at the start, two people cannot find room among millions; at the end, thousands hunt for them. The couple’s smallness makes their powerlessness visible, and the movement from the first number to the second traces the change from exclusion to pursuit.',
    },
    {
      technique: 'Colloquial, clipped syntax',
      example:
        'From stanza 5 on, every stanza begins with a verb and no subject: Went, Came, Thought, Saw, Went, Walked, Dreamed, Stood.',
      effect:
        'Dropping the word I is how people talk when they tell a story aloud, and it gives the poem the rhythm of speech, tired and matter-of-fact. The plain style makes the events sound like everyday routine, which is exactly the horror: rejection has become ordinary.',
    },
  ],

  structureForm: [
    {
      heading: 'A blues, adapted',
      body: 'A classic blues verse states a line, repeats it, and then answers with a longer rhyming line. Auden keeps the idea but moves the repetition: each stanza opens with a rhyming couplet that sets out a situation, and the third, longest line repeats its own opening words either side of “my dear”. The form is borrowed from a tradition of songs about hardship and oppression, which makes it a deliberate choice for a poem about persecution, and its simple, singable music contrasts sharply with the horror of its content.',
    },
    {
      heading: 'Twelve tercets',
      body: 'The poem has twelve stanzas of three lines each, 36 lines in all. Each stanza is a self-contained episode, like a verse of a song or a separate snapshot, and together they read like a journey: through the city, to the consulate, the committee and the public meeting, out to the harbour and the wood, into a dream, and finally onto the snowy plain. The episodic shape suggests an endless round of attempts that all end the same way.',
    },
    {
      heading: 'The refrain and its one question',
      body: 'All twelve refrains contain “my dear”, and in the text checked for this guide all but one end in a full stop. The exception is stanza 5, after the committee, where the refrain asks where the couple can go today. It is the only moment the speaker asks rather than states, and it comes at the point where courtesy has been offered instead of help. Noticing this one change of punctuation, and saying why it falls there, is the kind of structural detail that lifts an answer.',
    },
    {
      heading: 'The colon as a hinge',
      body: 'In the text checked for this guide, every stanza’s second line ends with a colon, so each couplet pauses and then turns to the refrain for its meaning. The punctuation makes the refrain the answer to the couplet: the situation is set out, and then the speaker tells the companion what it means for them. The same shape repeated twelve times gives the poem its sense of fixed, inescapable pattern.',
    },
    {
      heading: 'Rhyme and the verdicts',
      body: 'Each couplet rhymes, mostly with full rhymes (one pair, chair and year in stanza 5, is only a half-rhyme). The rhymes do pointed work. In the three stanzas where someone passes judgement aloud, the verdict lands on the rhyme: the consul’s said rhymes with dead, the public speaker’s said with bread, and the thunder in the sky with Hitler’s die. The music of the rhyme gives each verdict the finality of a door closing.',
    },
    {
      heading: 'Escalation',
      body: 'The poem is arranged to intensify. The first stanzas describe loss and exclusion; the middle stanzas show refusal by officials and then open hostility from the public; stanza 7 brings the threat of death; the animal stanzas widen the exclusion to the whole of nature; and the dream and the soldiers turn exclusion into pursuit. The rising tension shown in this guide’s timeline follows that design.',
    },
    {
      heading: 'An ending without resolution',
      body: 'The poem stops rather than concludes. The last stanza, which may continue the dream of stanza 11 or may be a separate vision, ends with the soldiers still searching. There is no rescue, no arrival and no final comment from the speaker. For a poem written in 1939, with the refugees’ fate unknown, an open ending is arguably the honest one.',
    },
    {
      heading: 'A light form for a dark subject',
      body: 'Another Time printed the poem among its Lighter Poems, beside Funeral Blues. The label is a clue to Auden’s method rather than a comment on his subject. By using a popular, song-like form, he makes the poem memorable and accessible, and he lets the contrast between easy music and unbearable content do the moral work. One reading is that the lightness is ironic; another is that song is the only form in which such despair can be spoken at all.',
    },
  ],

  vocabulary: [
    {
      term: 'Refugee',
      definition:
        'A person forced to leave their country to escape persecution, war or violence. The poem’s speakers are Jewish refugees from Nazi Germany.',
    },
    {
      term: 'Stateless',
      definition:
        'Having no nationality recognised by any country, and so no right to a passport or to protection. The consul’s verdict in stanza 4 describes what statelessness means in practice.',
    },
    {
      term: 'Consul',
      definition:
        'An official who represents a country abroad and deals with visas, passports and the affairs of travellers. A refugee needed a consul’s approval to enter another country.',
    },
    {
      term: 'Passport',
      definition:
        'An official document proving a person’s nationality and identity and allowing them to travel. In the poem it has become the difference between legal life and legal death.',
    },
    {
      term: 'Visa',
      definition:
        'Official permission, usually stamped in a passport, to enter or stay in a foreign country. Auden himself entered the United States on a temporary visa in 1939.',
    },
    {
      term: 'Quota',
      definition:
        'A fixed maximum number. Before the war the United States limited immigration by national quotas, so most refugees who applied had to wait or were refused.',
    },
    {
      term: 'Asylum',
      definition:
        'Protection given by a country to someone fleeing persecution in their own. The poem is a record of asylum refused at every door.',
    },
    {
      term: 'Persecution',
      definition:
        'Hostile, cruel treatment of people because of their race, religion or beliefs. Nazi persecution of Jews is the reason the speakers have fled.',
    },
    {
      term: 'Antisemitism',
      definition:
        'Hostility to or prejudice against Jewish people. It drives the Nazi threat in stanza 7 and colours the public speaker’s warning in stanza 6.',
    },
    {
      term: 'Kristallnacht',
      definition:
        'The Nazi pogrom of 9 and 10 November 1938, in which synagogues were burned and Jewish homes and businesses attacked across Nazi Germany.',
    },
    {
      term: 'Pogrom',
      definition:
        'An organised, violent attack on a persecuted group, especially Jewish communities.',
    },
    {
      term: 'Quay',
      definition:
        'A stone or concrete platform in a harbour where ships load and unload. The speaker stands on one in stanza 9, within sight of the sea routes to safety.',
    },
    {
      term: 'Yew',
      definition:
        'An evergreen tree often found in English churchyards. In stanza 3 its yearly renewal is set against passports that cannot be renewed.',
    },
    {
      term: 'Blues',
      definition:
        'A musical form that grew up among African Americans in the Deep South of the United States, with songs of hardship and loss and a repeating verse pattern.',
    },
    {
      term: 'Refrain',
      definition:
        'A line or phrase repeated at intervals in a poem or song. Here, the third line of every stanza.',
    },
    {
      term: 'Tercet',
      definition: 'A stanza of three lines. Refugee Blues is written in twelve of them.',
    },
    {
      term: 'Dehumanisation',
      definition:
        'Treating people as less than human, as objects or as a threatening mass rather than as individuals. The public speaker and the animal stanzas both show it.',
    },
  ],

  examPractice: {
    questions: [
      {
        question: 'How does Auden present the experience of being a refugee in Refugee Blues?',
        skill: 'Whole-poem essay: language, structure and context',
        guidance: [
          'Open with an argument, not a summary: for example, that Auden presents the refugees as destroyed less by violence than by the polite indifference of the countries that could save them.',
          'Begin with the refrain in stanza 1 and the loss of home and papers in stanzas 2 and 3, analysing “no place for us” and the contrast between the yew and the “Old passports”.',
          'Analyse the officials in stanzas 4 and 5: the adverb in “officially dead”, the irony of “politely”, and the one refrain that asks a question.',
          'Show the escalation: the public speaker’s pronouns and “daily bread” in stanza 6, then Hitler as thunder in stanza 7.',
          'Explore the animal stanzas and the ending, and what the soldiers “Looking for you and me” leave the reader with.',
          'Weave in context where it explains a line: the Évian Conference with the committee, the American quota with the consul, the January 1939 threat with stanza 7.',
          'End by weighing readings: is the poem mainly an attack on Nazism, or on the democracies? Say which you find more convincing, and why.',
        ],
      },
      {
        question:
          'Explore how Auden uses the form and structure of the blues to present suffering in Refugee Blues.',
        skill: 'Form and structure',
        guidance: [
          'Explain what the blues is and why the choice matters: a song form of hardship and oppression, borrowed for a poem about persecution.',
          'Analyse how Auden adapts the blues verse: a rhyming couplet, then a longer refrain that repeats its own words either side of “my dear”.',
          'Track the refrain across the poem and pick out its variations, especially the single question in stanza 5 and the final line.',
          'Comment on the rhyme falling on the verdicts (said and dead, said and bread, sky and die) and on the colon that hinges every couplet to its refrain.',
          'Discuss the episodic, escalating structure and the unresolved ending.',
          'Conclude on the effect of the contrast between light, song-like music and a devastating subject.',
        ],
      },
      {
        question:
          'Compare how poets present people who are excluded or ignored by society in Refugee Blues and one other poem you have studied.',
        skill: 'Comparison',
        guidance: [
          'Choose a partner poem with a clear point of comparison, such as a poem about a soldier cut off from ordinary life or about suffering watched from a distance.',
          'Set out a comparative argument in your first sentence: what both poems show about exclusion, and the key difference in how they show it.',
          'Compare voice: Auden’s first-person refugee speaking privately to a companion, against the voice of your other poem.',
          'Compare methods: Auden’s refrain, direct speech of authority and animal contrasts, against the techniques of the other poem.',
          'Compare context and purpose: a poem written in 1939 as a protest against closed borders, against the other poem’s moment.',
          'Keep the two poems in the same paragraphs, using comparative connectives, rather than writing about one and then the other.',
        ],
      },
      {
        question:
          'Look again at stanzas 4 to 6 (lines 10-18). How does Auden present the attitudes of officials and the public towards the refugees?',
        skill: 'Extract-based language analysis',
        guidance: [
          'Identify the three encounters in the extract: the consul, the committee and the public meeting, and the different attitude each shows.',
          'Analyse the consul’s spoken verdict and its adverb, and the refrain that answers it.',
          'Analyse the committee’s courtesy and why “politely” and “next year” are ironic.',
          'Analyse the public speaker’s pronouns and the allusion in “daily bread”.',
          'Comment on the pattern: authority speaks aloud, the refugees reply only in the refrain.',
          'Link briefly to the context of Évian and the quotas, then widen to the rest of the poem if the question asks for it.',
        ],
      },
    ],
    tips: [
      'Do not treat the poem as a description of the Holocaust. Auden wrote it in 1939, before the mass murder of Europe’s Jews and, by the only account that gives a month, before the war began. Write that the poem records a threat and a fear, and let the reader’s hindsight add the rest.',
      'Keep Auden and the speaker apart. Auden was a British citizen who chose to emigrate; the speaker is a created voice, a German-Jewish refugee. Refer to the speaker when you analyse what the poem says, and to Auden when you discuss the choices he made in writing it.',
      'Track the refrain. The strongest answers notice that it changes in tone and purpose across the poem, and that stanza 5 holds the only question.',
      'Do not just name the blues. Say what the form is, how Auden adapts it, and why a song tradition of hardship suits the subject.',
      'Argue about the target. Hitler appears in one stanza; the consul, the committee, the public meeting and the closed doors fill most of the rest. A strong answer asks why.',
      'Tie every piece of context to a line: the Évian Conference to the committee, the American quota to the consul, Hitler’s January 1939 threat to stanza 7. Context that floats free of the poem earns little credit.',
      'Quote short and exactly. The consul’s line is informal, with two contractions, and easy to tidy up by mistake; learn it word for word, and use single words such as “officially” or “politely” when that is all you need.',
    ],
  },

  modelAnswer: {
    question: 'How does Auden present the experience of being a refugee in Refugee Blues?',
    paragraph:
      'Auden presents the refugees’ suffering as something done to them less by violence than by polite, official indifference. The consul’s verdict, “If you’ve got no passport you’re officially dead”, reduces a living person to a missing document, and the adverb “officially” is chilling because it makes death a matter of paperwork: the state does not need to kill the refugees if it can simply refuse to recognise them. The refrain answers him with quiet defiance, “we are still alive”, but the reply is spoken to the companion, not to the consul, as if the refugees have no voice in the room where their fate is decided. The committee is worse because it is kinder. The speaker is asked “politely” to return “next year”, and Auden sets that deferral against the only refrain in the poem to end with a question mark, asking where the couple can go today. Writing in 1939, months after the Évian Conference had shown that almost no country would take more Jewish refugees, Auden suggests that the democracies’ good manners were simply a way of saying no. The most convincing reading, then, is that the poem’s real target is not Hitler, who fills a single stanza, but the comfortable nations that would not open their doors.',
    commentary: [
      'It opens with an argument about the whole poem rather than a description of it, and every sentence after that develops the argument.',
      'Its quotations are short and exact, and the analysis zooms in on single words (“officially”, “politely”) and says precisely what each does.',
      'It uses structure as evidence, not only language: the refrain spoken to the companion rather than the consul, and the one refrain that ends with a question mark.',
      'Context is tied to a specific stanza, the Évian Conference to the committee, so it explains the poem rather than decorating it.',
      'It ends by weighing an interpretation, saying which reading is more convincing and giving a reason drawn from the poem’s structure.',
    ],
  },

  timeline: [
    {
      where: 'Stanzas 1-3',
      title: 'No place in the city',
      summary:
        'In a vast city there is room for rich and poor but none for the speaker and companion. Their country is still on the map but closed to them, and their passports cannot be renewed like the churchyard yew.',
      setting: 'An unnamed city of ten million, and a churchyard',
      who: ['The speaker', 'The companion'],
      quote: 'there’s no place for us, my dear',
      themes: ['Statelessness and identity', 'Love and endurance'],
      tension: 2,
      significance:
        'It establishes the refrain, the couple, and the loss of home and papers on which the whole poem turns.',
    },
    {
      where: 'Stanza 4',
      title: 'The consul',
      summary:
        'A consul bangs the table and declares that a person without a passport is officially dead. The refrain replies, privately, that the couple are still alive.',
      setting: 'A consulate office',
      who: ['The consul', 'The speaker', 'The companion'],
      quote: 'If you’ve got no passport you’re officially dead',
      themes: ['Statelessness and identity', 'Official indifference'],
      tension: 3,
      significance:
        'It turns the refugees’ problem into a matter of paperwork, in the poem’s bluntest verdict.',
    },
    {
      where: 'Stanza 5',
      title: 'The committee',
      summary:
        'A committee receives the speaker courteously and offers a chair, then asks for a return visit next year. The refrain asks, for the only time, where the couple can go today.',
      setting: 'A committee room',
      who: ['The committee', 'The speaker', 'The companion'],
      quote: 'Asked me politely to return next year',
      themes: ['Official indifference'],
      tension: 3,
      significance:
        'Politeness replaces help, and the poem’s single question exposes the gap between procedure and emergency.',
    },
    {
      where: 'Stanza 6',
      title: 'The public meeting',
      summary:
        'A speaker at a public meeting warns the crowd that refugees would take their food and their living. The refrain tells the companion that he was talking about the two of them.',
      setting: 'A public meeting',
      who: ['The public speaker', 'The speaker', 'The companion'],
      quote: 'they will steal our daily bread',
      themes: ['Prejudice and dehumanisation'],
      tension: 4,
      significance:
        'Rejection moves from officials to ordinary citizens, and from indifference to open hostility.',
    },
    {
      where: 'Stanza 7',
      title: 'Thunder over Europe',
      summary:
        'The speaker hears what sounds like thunder and realises it is Hitler over Europe demanding death. The refrain recognises that the couple were in his thoughts.',
      setting: 'Under a sky the speaker thinks is thundering, with Europe beyond it',
      who: ['Hitler', 'The speaker', 'The companion'],
      quote: 'They must die',
      themes: ['Persecution and the growing threat'],
      tension: 5,
      significance:
        'The only stanza that names the persecutor, and the moment exclusion becomes a threat to life.',
    },
    {
      where: 'Stanzas 8-10',
      title: 'The animals',
      summary:
        'A dressed-up poodle, a cat allowed indoors, fish that seem free in the harbour and birds singing in a wood are all better off than the refugees, and each refrain marks the difference.',
      setting: 'Scenes the speaker passes, the harbour quay and a wood',
      who: ['The speaker', 'The companion'],
      quote: 'Only ten feet away',
      themes: ['Nature, freedom and exclusion', 'Prejudice and dehumanisation'],
      tension: 3,
      significance:
        'The contrast with nature shows that the barrier between the refugees and safety is human politics, not the world itself.',
    },
    {
      where: 'Stanza 11',
      title: 'The dream building',
      summary:
        'The speaker dreams of an enormous building, its floors, windows and doors counted in thousands, and none of those doors belongs to the couple.',
      setting: 'A dream',
      who: ['The speaker', 'The companion'],
      themes: ['Statelessness and identity', 'Nature, freedom and exclusion'],
      tension: 3,
      significance:
        'A single symbol for a whole society full of openings that still has no room for them.',
    },
    {
      where: 'Stanza 12',
      title: 'Soldiers in the snow',
      summary:
        'On a wide plain as snow comes down, an army of ten thousand marches back and forth, and the final refrain reveals that they are searching for the couple. The poem ends mid-search.',
      setting: 'A wide, snowy plain',
      who: ['The soldiers', 'The speaker', 'The companion'],
      quote: 'Looking for you and me',
      themes: ['Persecution and the growing threat', 'Love and endurance'],
      tension: 5,
      significance:
        'Exclusion becomes pursuit, and the open ending leaves the couple, and the reader, without resolution.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The companion',
      kind: 'partners in exile',
      note: 'Every refrain is spoken to the companion, so their bond is the one private space left to them; the last line names them together as the soldiers’ targets.',
    },
    {
      from: 'The consul',
      to: 'The speaker',
      kind: 'official and applicant',
      note: 'The consul speaks a verdict and the speaker cannot answer him to his face; the reply comes only in the refrain.',
    },
    {
      from: 'The committee',
      to: 'The speaker',
      kind: 'benefactors who defer',
      note: 'Courtesy without help: the committee’s manners are real, but they give the speaker nowhere to go today.',
    },
    {
      from: 'The public speaker',
      to: 'The companion',
      kind: 'accuser and accused',
      note: 'He talks about refugees as a threatening group; the refrain insists he was talking about two real people, the speaker and the companion.',
    },
    {
      from: 'Hitler',
      to: 'The speaker',
      kind: 'persecutor and persecuted',
      note: 'Heard only as a voice like thunder, he threatens death from a distance; the refrain realises the couple were in his thoughts.',
    },
    {
      from: 'The soldiers',
      to: 'The companion',
      kind: 'hunters and hunted',
      note: 'Ten thousand soldiers against two people: the final stanza turns the couple from people refused into people pursued.',
    },
  ],

  compareWith: [
    {
      title: 'A Passage to Africa (George Alagiah)',
      href: '/revision/texts/a-passage-to-africa',
      reason:
        'Both confront the people who watch suffering from a position of safety, and ask what that comfortable distance does to the watcher’s conscience.',
    },
    {
      title: 'War Photographer (Carol Ann Duffy)',
      href: '/revision/texts/war-photographer',
      reason:
        'Both are about suffering that comfortable people at a safe distance notice briefly and then set aside.',
    },
    {
      title: 'Disabled (Wilfred Owen)',
      href: '/revision/texts/disabled',
      reason:
        'Both present people shut out of ordinary life, seen with sympathy and set against the easy freedom of others: Owen’s soldier by his wounds, Auden’s refugees by closed borders.',
    },
    {
      title: 'The Danger of a Single Story (Chimamanda Ngozi Adichie)',
      href: '/revision/texts/the-danger-of-a-single-story',
      reason:
        'The public speaker in stanza 6 reduces refugees to a single threatening story, which is exactly the habit of mind Adichie argues against.',
    },
  ],

  contentGuidance: ['discrimination', 'political_ideology', 'crime_injustice', 'mortality'],

  sources: [
    {
      label:
        'Echoes & Reflections, Refugee Blues student handout (full text of the poem, used for wording, line count and word count)',
      url: 'https://echoesandreflections.org/wp-content/uploads/2022/05/09-03-09_Student_Handout_Refugee_Blues_upd1.pdf',
    },
    {
      label:
        'Bradford City of Sanctuary, Refugee Blues, WH Auden, 1939 (second, independent text of the poem; every quotation checked against it, with deliberately wrong variants rejected)',
      url: 'https://bradford.cityofsanctuary.org/2015/04/16/refugee-blues-wh-auden-1939',
    },
    {
      label:
        'Wikipedia, Refugee Blues (written 1939; the Ten Songs grouping in later editions; the Lutyens setting of 1942)',
      url: 'https://en.wikipedia.org/wiki/Refugee_Blues',
    },
    {
      label:
        'Wikipedia, Another Time (1940; its three parts; Refugee Blues, Funeral Blues and Roman Wall Blues in Lighter Poems)',
      url: 'https://en.wikipedia.org/wiki/Another_Time_(book)',
    },
    {
      label:
        'Wikipedia, W. H. Auden bibliography (Another Time published in London and New York, 1940)',
      url: 'https://en.wikipedia.org/wiki/W._H._Auden_bibliography',
    },
    {
      label:
        'Wikipedia, W. H. Auden (Berlin 1928-29; Spain 1937; China 1938; sailing to New York in January 1939 on temporary visas; the charge of betrayal; US citizenship 1946)',
      url: 'https://en.wikipedia.org/wiki/W._H._Auden',
    },
    {
      label:
        'Academy of American Poets, W. H. Auden biography (birth in York, 21 February 1907; death in Vienna, 29 September 1973)',
      url: 'https://poets.org/poet/w-h-auden',
    },
    {
      label:
        'Wikipedia, Erika Mann (daughter of Thomas Mann; marriage of convenience to Auden in 1935)',
      url: 'https://en.wikipedia.org/wiki/Erika_Mann',
    },
    {
      label:
        'Interesting Literature (Oliver Tearle), A Summary and Analysis of Refugee Blues (completion dated to March 1939, in New York; the only source for the month)',
      url: 'https://interestingliterature.com/2017/06/a-short-analysis-of-w-h-audens-refugee-blues/',
    },
    {
      label: 'United States Holocaust Memorial Museum, The Nuremberg Race Laws (15 September 1935)',
      url: 'https://encyclopedia.ushmm.org/content/en/article/the-nuremberg-race-laws',
    },
    {
      label:
        'United States Holocaust Memorial Museum, Kristallnacht (9-10 November 1938; more than 1,400 synagogues burned; about 26,000 Jewish men imprisoned in camps)',
      url: 'https://encyclopedia.ushmm.org/content/en/article/kristallnacht',
    },
    {
      label:
        'United States Holocaust Memorial Museum, The Evian Conference (July 1938; 32 countries; only the Dominican Republic)',
      url: 'https://encyclopedia.ushmm.org/content/en/article/the-evian-conference',
    },
    {
      label:
        'United States Holocaust Memorial Museum, German Jewish Refugees, 1933-1939 (309,000 applicants for 27,000 quota places by June 1939; 282,000 and 117,000 emigrants by September 1939; the Kindertransport)',
      url: 'https://encyclopedia.ushmm.org/content/en/article/german-jewish-refugees-1933-1939',
    },
    {
      label:
        'United States Holocaust Memorial Museum, Voyage of the St. Louis (13 May to 6 June 1939; 937 passengers; 28 admitted at Havana; 254 later killed)',
      url: 'https://encyclopedia.ushmm.org/content/en/article/voyage-of-the-st-louis',
    },
    {
      label:
        "Wikipedia, Adolf Hitler's prophecy (Reichstag speech of 30 January 1939, and the historians' debate over its meaning)",
      url: 'https://en.wikipedia.org/wiki/Adolf_Hitler%27s_prophecy',
    },
    {
      label:
        'Wikipedia, 1939 Nazi rally at Madison Square Garden (20 February 1939; German American Bund; more than 20,000)',
      url: 'https://en.wikipedia.org/wiki/1939_Nazi_rally_at_Madison_Square_Garden',
    },
    {
      label:
        'Wikipedia, Blues (origins among African Americans in the Deep South around the 1860s; the repeated-line verse pattern)',
      url: 'https://en.wikipedia.org/wiki/Blues',
    },
    {
      label: 'Wikipedia, Twelve-bar blues (the AAB verse form)',
      url: 'https://en.wikipedia.org/wiki/Twelve-bar_blues',
    },
    {
      label:
        'Bible Gateway, Matthew 6:9-13, King James Version (the Lord’s Prayer, source of the daily bread allusion)',
      url: 'https://www.biblegateway.com/passage/?search=Matthew%206%3A9-13&version=KJV',
    },
  ],
}
