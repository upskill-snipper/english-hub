import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * When Greek Meets Greek, Samuel Selvon (printed 1965). A supplement: the page
 * at /resources/revision-notes/when-greek-meets-greek keeps its overview,
 * context, themes, characters, voice and exam questions, and this file adds
 * what it lacked (key quotations, key passages, language analysis, vocabulary
 * and a model answer), with the scene cards and character map.
 *
 * THE TEXT. No licensed edition could be bought or borrowed from here, so every
 * quotation was checked on 26 September 2026 against two full texts read end to
 * end, and a third by full-text search:
 * - Argosy (UK), vol. XXVI no. 11, November 1965, pp. 123-125, in the Internet
 *   Archive's OCR of the magazine, which prints "© Samuel Selvon 1965". British
 *   spellings (Colours, practising, yoghourt, for ever).
 * - An American school printing with marginal glosses, publisher not stated,
 *   hosted as a PDF: American spellings. Its text shares the readings of
 *   Reading the World (Perfection Learning, 2012), including the dropped word.
 * - Stories from the Caribbean, introduced by Andrew Salkey (Elek Books, 1965),
 *   which lists the story at p. 50. Its text was checked phrase by phrase with
 *   the Internet Archive's full-text search across four scans, alongside Island
 *   Voices (1970) and eight school anthologies from 1973 to 2012.
 * Every phrase quoted below is in all of them, word for word.
 *
 * THE PRINTINGS DIFFER in small ways a student may meet. Argosy reads "he
 * decide to do something"; Salkey and the school books read "he decide that
 * he had to do something". The 2012 school text drops "Fraser" from "He start
 * to tell Fraser how life hard". American printings have practicing, yogurt,
 * colors and forever. None of those sentences is quoted here.
 *
 * IDENTITY PROBLEMS, all outside this file and reported, not fixed here:
 * - The story is NOT in Ways of Sunlight (1957), which the registry scope, the
 *   registry year ('1957'), its ukRightsNotice and the page above all say. The
 *   1957 St Martin's Press printing (Internet Archive waysofsunlight0000samu)
 *   is full-text indexed; its London section lists ten stories on pp. 125-181
 *   (Calypso in London to My Girl and the City) with no gap, and none of the
 *   story's names or phrases occurs in it. The earliest printings found are
 *   the two from 1965 above.
 * - A related episode in Selvon's novel The Housing Lark (MacGibbon & Kee,
 *   1965) tells the same trick with a lodger called Syl and a turbaned rival
 *   called Mr Ram (as extracted in Great Humorous Stories of the World, 1967,
 *   and Penguin Education's Openings, 1972). Argosy's acknowledgements credit
 *   MacGibbon & Kee for "the extract from The Housing Lark"; the only Selvon
 *   item in that issue is this story.
 *
 * THE PAGE ABOVE, read in full while this was written, gets the plot wrong in
 * ways a student would repeat in an exam. The text does not support:
 * - a landlord who "once lived in India" (the text says only that he vowed
 *   never to take West Indians but does not mind Indians);
 * - Chan as an older "holy man" whom Ram suspects is a fellow Trinidadian (he
 *   is never called old or holy; Ram never suspects him; he is from Jamaica);
 * - a "tug of war" of mutual testing ending in "mutual recognition" (Ram hides
 *   from Chan, tries to get him evicted, is evicted himself, and learns the
 *   truth afterwards from Fraser; Ram never sees through Chan, and there is no
 *   recognition scene. The one hint of Chan's view is that the landlord
 *   suspects Ram only after "a word with Mr. Chan", which the guide offers as a
 *   reading, not a fact);
 * - Ram learning the trick himself (Fraser tells him); and Fraser, who opens
 *   and closes the story, is missing from its character list;
 * - "published in 1957", "the year after" the 1958 riots: the story mentions
 *   the unsolved murder of Kelso Cochrane (May 1959) and was printed in 1965;
 * - Selvon working "for the Indian High Commission in Trinidad": he was a
 *   Trinidad Guardian journalist (1945-1950) and, in London, a clerk at the
 *   Indian Embassy;
 * - its repeated instruction to quote "the Pearson Edexcel anthology" version,
 *   which does not contain the story. It also names assessment objectives by
 *   number. Its two short quotations ("after this, we calling this man Ram",
 *   "making a study of the noticeboards") are correct.
 * The scene cards and passages below follow the text, and say plainly that
 * Ram never suspects Chan and that the ending is a reveal, not a stand-off.
 * On the audit's narrator question: the story is told in the third person,
 * and the "we" of the renaming asides is a storyteller speaking for a
 * community, which languageAnalysis explains.
 *
 * FACT-CHECK, 26 September 2026 (a second, independent pass). All twelve
 * quotations and their speakers were re-read in the Argosy OCR text and in the
 * American school PDF, and five were re-found in Salkey's anthology by
 * full-text search, which also shows the story at p. 50 of its contents. The
 * pass corrected plot slips the first draft had made: the landlord accuses
 * Ram BEFORE Ram falls back on dialect (his dialect does not give him away,
 * and the landlord's stated reason for evicting him is that he has started to
 * make trouble); Chan is only mentioned, not present, in the final scene; and
 * vindaloo is not a chicken dish in itself. Readings about Chan's view, the
 * narrator's "we" and the cowboy-film echo are now worded as readings.
 *
 * LENGTH AND LIMITS. About 1,065 words (see workLength), so the page may quote
 * 106 of them (fair-dealing.ts). This file uses twelve phrases, 90 words, and
 * reuses them; everything else is paraphrase. The page above adds about 13
 * more, which keeps the whole route inside the limit.
 */
export const guide: StudyGuide = {
  slug: 'when-greek-meets-greek',
  title: 'When Greek Meets Greek',
  author: 'Samuel Selvon (1923-1994)',
  form: 'short-story',
  scope:
    'The whole short story, about 1,065 words. No exam specification this site covers prescribes it, so this guide is written for GCSE and A-level English Literature in general. Despite what is sometimes said, it is not one of the nineteen stories in Selvon’s collection Ways of Sunlight (1957): the earliest printings found are from 1965, in the anthology Stories from the Caribbean, introduced by Andrew Salkey, and in the British magazine Argosy, and the later school anthologies checked follow the wording of Salkey’s anthology. A related episode in Selvon’s novel The Housing Lark (1965) plays the same trick with different names, a lodger called Syl and a rival called Mr Ram; this guide is to the short story, with Ram, Chan and Fraser. American school printings use American spellings, and one sentence differs between printings, so the guide quotes only words that read the same in all of them.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Samuel Selvon 1965, as credited in Argosy (Fleetway Publications), November 1965. Also printed in Stories from the Caribbean, introduced by Andrew Salkey (Elek Books, 1965). Quoted here in short phrases for criticism and review.',
  },
  workLength: {
    words: 1065,
    basis:
      'Counted on 26 September 2026 from the Argosy printing (November 1965, pp. 123-125) in the Internet Archive’s OCR text, title and byline excluded, with OCR slips corrected by eye (Iam read as I am, words split at line ends rejoined): 1,065 words split on spaces, 1,068 counting each part of a hyphenated word separately, as the quotation counter does. Salkey’s anthology and the American school printings are three words longer in one sentence, and one school printing drops a word elsewhere, so printings run from about 1,065 to 1,071. The lowest figure is recorded so that the limit errs tight. No licensed edition was available to count from.',
  },

  native: {
    overview: '/resources/revision-notes/when-greek-meets-greek',
    context: '/resources/revision-notes/when-greek-meets-greek',
    themes: '/resources/revision-notes/when-greek-meets-greek',
    characters: '/resources/revision-notes/when-greek-meets-greek',
    structureForm: '/resources/revision-notes/when-greek-meets-greek',
    examPractice: '/resources/revision-notes/when-greek-meets-greek',
  },

  keyQuotes: [
    {
      text: 'No Colours, Please, or Sorry, No Kolors',
      where:
        'Narration, the opening paragraph: the notices Ram keeps finding on the boards along Westbourne Grove',
      analysis:
        'Selvon sets the landlords’ notices into the narration without comment, as ordinary as the addresses around them, and that flatness is the point. The polite Please and the apologetic Sorry dress exclusion in good manners: a racism so respectable that it apologises while it shuts the door. The misspelling Kolors turns the joke on the people who make the rules, and the word itself reduces a whole population to a colour.',
    },
    {
      text: 'them English people so foolish they believe every Indian come from India',
      where: 'Fraser, at Bradley’s Corner, telling Ram about the landlord up the road',
      analysis:
        'Fraser turns the prejudice round: the English, not the migrants, are the foolish ones. His creole grammar, with them as a pointing word and come without an ending, carries a sharp idea, that the landlord cannot picture a person of Indian descent born anywhere but India. Fraser treats Ram as exactly that, an Indian who is also a born Trinidadian, as Selvon himself was. The whole plot grows from this one sentence.',
    },
    {
      text: 'I am a born Trinidadian, a real Creole',
      where: 'Ram, answering Fraser’s advice to put on a turban',
      analysis:
        'Ram’s first instinct is to refuse the disguise and to name himself by his birthplace. The word he chooses is loaded: in Trinidad, Creole has traditionally meant any Trinidadian not of Asian origin, so a man with an Indian name and ancestry claims the label that usually leaves Indians out. One reading is that he is proud of a mixed Caribbean identity no English category can hold. Another is that need wins at once, since in the same breath he asks for the address anyway.',
    },
    {
      text: 'I am an Untouchable from the heart of India',
      where:
        'Ram, answering the landlord’s first question, about what part of the world he comes from',
      analysis:
        'Ram’s credential is comic in two directions. He claims the lowest place in India’s caste system, perhaps without knowing what it means, and the landlord, who knows no more, accepts it. The inflated phrase “the heart of India”, and the talk of the banks of the Ganges that follows, is interrupted by a practical request that the room should not be too expensive. That bathos exposes the performance: the romance is for the landlord, the rent is for Ram.',
    },
    {
      text: 'making it sound like an original statement',
      where:
        'Narration, as Ram answers the landlord’s remark that he is not wearing his national garments',
      analysis:
        'Ram replies with the stock proverb about doing as the Romans do, and the narrator quietly lets the reader know it is second-hand. The irony is gentle: the narrator stands a little apart from Ram, admiring his nerve while showing the seams in his costume. The line also explains why the trick works. Ram needs no real Indian wisdom, only the tone of it, because the landlord cannot tell the difference.',
    },
    {
      text: 'Acha, pilau, papadom, chickenvindaloo',
      where: 'Ram, answering Chan’s greeting on the front steps',
      analysis:
        'Chan greets him in what sounds like Hindi, and Ram, who has none, answers with the names of dishes: desperately, the narration says, with nothing but hope behind them. It sounds like a restaurant menu read aloud, with chickenvindaloo run together as though he has only ever seen it printed on a card. It works, which is the joke. After the ending the moment turns again: Chan is a Jamaican, so his greeting may be as hollow as Ram’s reply, two men bluffing each other on the steps.',
    },
    {
      text: 'passes into the hands of Allah',
      where:
        'Ram, telling the landlord that every man is a student, just before he is given the room',
      analysis:
        'Having claimed a place in the Hindu caste system, Ram now invokes Allah, the Arabic word for God used by Muslims. The religions are jumbled together, perhaps because to Ram and to the landlord alike anything Eastern will do, and the landlord does not seem to notice. Selvon’s satire is aimed at the belief that there is one Indian identity to be worn or recognised. The narration adds that Ram is warming to his part, as if identity were a role an actor grows into.',
    },
    {
      text: 'This house too small for the two of we',
      where: 'Ram, to himself, after days of hiding from Chan',
      analysis:
        'Ram’s line echoes the stock showdown of the cowboy film, the town not big enough for two, shrunk to a lodging house. The mock-heroic effect makes the rivalry absurd, a gunfight over a rented room, while the creole “two of we” keeps it in Ram’s own voice. It is also the title in miniature: two equally matched schemers who cannot share one space, which is what the proverb about Greek meeting Greek describes.',
    },
    {
      text: 'falling back on the good old West Indian dialect',
      where: 'Narration, when the landlord accuses Ram of deceiving him',
      analysis:
        'Once the landlord has accused him, Ram drops the borrowed English of his performance and pleads in plain West Indian speech. The narrator’s “good old” is affectionate: dialect is home, what a man falls back on when the act is over, and the language the whole story is told in. It is too late to help him, since the landlord has already decided, but the reader has been enjoying that voice since the first line, so the story quietly takes Ram’s side against the landlord’s formal English.',
    },
    {
      text: 'that is a fellar from Jamaica',
      where: 'Fraser, the last line of the story',
      analysis:
        'The twist lands in the final line: Chan, the landlord’s model Indian, is a Jamaican whom Fraser sent to the same house. Everything is reread at once. The greeting on the steps was a bluff, the turban and incense a costume, and the landlord who vowed never to take anyone from the West Indies has housed two West Indians in a row. Ram lost not to a real Indian but to a better performer who got there first, which is what the title’s contest of equals means.',
    },
    {
      text: 'we calling this man Chan',
      where: 'Narration, when Chandrilaboodoo first appears on the steps',
      analysis:
        'The narrator shortens Chan’s long name with exactly the formula he used for Ram in the first sentence. The we reads as a storyteller’s we, taking in the teller and his listeners, which is how a story told in the third person can still say we. The repetition also plants a clue: the narration treats the two men as the same kind of man from the moment they meet, and the ending proves it. One reading sees affectionate convenience; another sees names, like identities, as things that can be changed at will.',
    },
    {
      text: 'You do not burn incense like Mr. Chan',
      where: 'The landlord, in Ram’s room, just before he tells Ram to go',
      analysis:
        'The landlord’s test of Indianness is a checklist of props, incense, dress and speech, each measured against Mr Chan in three matching clauses. The patterned sentence sounds like a verdict, but what it judges is costume. The irony is complete once the reader learns that his standard of a real Indian is a Jamaican. Selvon suggests that the landlord’s prejudice contains no knowledge of India at all, only stage properties, which is why two men from the Caribbean can both satisfy it.',
    },
  ],

  extracts: [
    {
      title: 'The noticeboards and Fraser’s tip',
      where: 'The opening, from the first sentence to Ram setting off to see the landlord',
      pointer:
        'From the opening sentence, as Ram reads the noticeboards along Westbourne Grove, to the short paragraph in which Fraser gives him the address and Ram, discouraged by more boards, goes to see the landlord.',
      summary:
        'Ram reads the adverts for rooms along Westbourne Grove, but most of the notices refuse coloured tenants. Humming a playground rhyme, he meets Fraser at Bradley’s Corner. Ram will not look in Ladbroke Grove while Kelso’s killer is free, so Fraser tells him of a landlord who refuses West Indians but accepts Indians, and says a turban is all Ram needs. Ram protests that he is Trinidadian through and through, then takes the address.',
      annotations: [
        {
          phrase: 'No Colours, Please, or Sorry, No Kolors',
          note: 'Racism arrives as small print, polite and even apologetic, and the narration moves straight on, which makes exclusion feel like part of the scenery.',
        },
        {
          phrase: 'them English people so foolish',
          note: 'Fraser’s creole judgement reverses who is ignorant: the landlords who shut West Indians out are the ones who cannot tell an Indian from a Trinidadian.',
        },
        {
          phrase: 'every Indian come from India',
          note: 'The joke rests on what the landlord does not know, that a person of Indian descent can be born in the Caribbean, which is exactly what Ram is.',
        },
        {
          phrase: 'a real Creole',
          note: 'Ram claims a Trinidadian label that traditionally excludes people of Asian origin, so his protest is itself a complicated statement about who he is.',
        },
      ],
      question:
        'How does Selvon use dialogue and the narrator’s voice in the opening of the story to present Ram’s search for somewhere to live?',
    },
    {
      title: 'Ram becomes an Indian',
      where:
        'The first meeting with the landlord and Chan, about a third of the way into the story',
      pointer:
        'From the landlord’s first question, about what part of the world Ram comes from, to the sentence in which Ram gets a room on the first floor next door to Chan and moves in that evening.',
      summary:
        'Ram tells the landlord he is an Untouchable from beside the Ganges, then asks for somewhere cheap. A tenant with a big beard in a hairnet and a turban comes up the steps and greets him with palms pressed together; Ram copies him and answers his greeting with the names of Indian dishes. The landlord introduces Chan as his only other Indian tenant, offers a room for two pounds, and Ram, now playing a wise man, gets the room next to Chan.',
      annotations: [
        {
          phrase: 'an Untouchable from the heart of India',
          note: 'Ram picks the lowest place in the caste system as his credential, and grand phrasing covers what he does not know about India.',
        },
        {
          phrase: 'making it sound like an original statement',
          note: 'The narrator’s dry aside shows the reader the proverb is borrowed, so we watch the trick being performed rather than simply believing it.',
        },
        {
          phrase: 'we calling this man Chan',
          note: 'The same renaming formula used for Ram in the first sentence quietly pairs the two men before either knows what the other is.',
        },
        {
          phrase: 'Acha, pilau, papadom, chickenvindaloo',
          note: 'A menu offered as a language: the list shows Ram’s Indianness is second-hand, and the comedy peaks because it works on Chan and the landlord.',
        },
        {
          phrase: 'passes into the hands of Allah',
          note: 'A Muslim word for God from a man posing as a Hindu Untouchable, and no one notices, because the landlord hears only something Eastern.',
        },
      ],
      question:
        'How does Selvon create comedy in Ram’s first meeting with the landlord and with Chan?',
    },
    {
      title: 'Exposure and the twist',
      where: 'The last third of the story, from Ram hiding from Chan to the final line',
      pointer:
        'From the paragraph in which Ram lives like cat and mouse with Chan and decides to act, to Fraser’s last words, the final line of the story.',
      summary:
        'Afraid that Chan will question him about India, Ram hides whenever he sees him, then goes down to the basement and tells the landlord, claiming occult powers, that Chan is a dirty, noisy tenant. The next evening the landlord finds Ram standing on his head, says that after speaking with Chan he suspects he has been deceived and that Ram is from the West Indies, and evicts him. A week later Fraser tells Ram that Chan is a Jamaican he sent there himself.',
      annotations: [
        {
          phrase: 'This house too small for the two of we',
          note: 'A cowboy showdown shrunk to a lodging house: the mock-heroic line makes Ram’s rivalry with another migrant both funny and a little shameful.',
        },
        {
          phrase: 'You do not burn incense like Mr. Chan',
          note: 'The landlord’s evidence is all props and costume, and his model Indian will turn out to be a Jamaican, so the test condemns itself.',
        },
        {
          phrase: 'falling back on the good old West Indian dialect',
          note: 'Once the landlord has seen through him, Ram drops the borrowed English and pleads in his own voice, the voice the whole story is narrated in.',
        },
        {
          phrase: 'a fellar from Jamaica',
          note: 'The final reveal rewrites every earlier scene with Chan and shows that Ram was beaten by an equal, not by the genuine article.',
        },
      ],
      question:
        'How does Selvon use structure and dialogue to make the ending of the story surprising and satisfying?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Creole narrative voice',
      example:
        'The narration, and not only the dialogue, uses Trinidadian creole grammar: verbs without past-tense endings (Fraser say, Ram ask, Ram get a room), continuous verbs without a helping verb (he writing down an address), and what used where Standard English has which, in the description of the noticeboards.',
      effect:
        'Selvon lets the narrator speak the language of the people he describes, so the reader hears the story from inside the migrant community rather than looking in on it. Creole carries authority here instead of being the comic speech of outsiders. It also sets up the story’s central contrast between Ram’s natural voice and the stiff, borrowed English he puts on for the landlord.',
    },
    {
      technique: 'Oral storytelling and the communal we',
      example:
        'The narrator interrupts the first sentence to shorten Ram’s name, and later does the same for Chan: “we calling this man Chan”. He opens paragraphs with Well, and cuts a long story short when Ram gets his room.',
      effect:
        'The story sounds told rather than written, like an anecdote passed round among friends. The narrator tells it in the third person, but his we takes in himself and his listeners, like a storyteller among friends, which is why he can say we without being a character in the plot. The asides also control the pace, skipping what is dull to reach the next joke.',
    },
    {
      technique: 'Irony and the delayed twist',
      example:
        'Chan greets Ram in what sounds like Hindi, the landlord holds Mr Chan up as the true Indian, and only the last line reveals “that is a fellar from Jamaica”.',
      effect:
        'On a first reading most readers share Ram’s belief that Chan is genuine, so the twist can fool the reader too. On a second reading every scene with Chan becomes dramatic irony: two impostors fearing each other, and a landlord praising a Jamaican for being properly Indian. The structure makes the reader feel how convincing a performance can be.',
    },
    {
      technique: 'Bathos and clashing registers',
      example:
        'Ram declares “I am an Untouchable from the heart of India” and talks of the banks of the Ganges, then adds that the room should not be too expensive. The landlord speaks throughout in stiff, formal Standard English.',
      effect:
        'The drop from grandeur to rent exposes the performance and makes the reader laugh at its seams. The contrast of registers also maps power: the landlord owns the formal English and the room, and Ram must imitate a third voice, an imagined Indian one, to get either.',
    },
    {
      technique: 'Malapropism',
      example:
        'When the landlord knocks, Ram hurries into the corner, stands on his head and says he is practising his yoghourt, meaning yoga. American printings spell the word yogurt.',
      effect:
        'Slapstick and wordplay combine at the climax. Confusing an Indian discipline with a dairy food shows that Ram’s Indianness is second-hand, like his list of dishes. The landlord, who has already spoken to Chan, accuses him straight afterwards, so the joke lands at the very moment the disguise fails.',
    },
    {
      technique: 'Allusion and borrowed phrases',
      example:
        'Ram quotes the proverb about doing as the Romans do; he recasts the cowboy showdown line as “This house too small for the two of we”; the landlord accuses him of flying false colours; and the title comes from a proverb about two equally matched opponents.',
      effect:
        'The characters speak in second-hand phrases, which suits a story about second-hand identities. The title’s proverb frames the whole plot as a contest of equals, and the showdown line turns a housing crisis into a mock-heroic duel, keeping the tone comic while the stakes, a roof over his head, are real.',
    },
    {
      technique: 'Lists and patterned speech',
      example:
        'Ram’s answer “Acha, pilau, papadom, chickenvindaloo”; his list of Chan’s faults (a dirty bathroom, an untidy room, loud prayers); and the landlord’s three clauses, each ending with Mr Chan, beginning “You do not burn incense like Mr. Chan”.',
      effect:
        'Each list stands in for real understanding. Ram lists food because he has no Hindi, invents faults because he has no case, and the landlord lists props because his idea of India is a costume. The rhythm of the lists also gives the dialogue its comic timing.',
    },
    {
      technique: 'Understatement',
      example:
        'The notices “No Colours, Please, or Sorry, No Kolors” are reported without comment, and Ram mentions in passing that he will not live in Ladbroke Grove until the man who killed Kelso is found.',
      effect:
        'Racism, and even the killing of Kelso Cochrane in 1959, a murder widely believed to have been racially motivated, are treated as everyday facts of the landscape. Because the narrator never raises his voice, the reader supplies the anger, and the comedy that follows is shadowed by what the characters have learned to take for granted.',
    },
  ],

  vocabulary: [
    {
      term: 'noticeboards',
      definition:
        'Boards on which people posted small adverts, including rooms to let. Ram studies them in the first sentence and is back reading them at the end.',
    },
    {
      term: 'rooms to let',
      definition: 'Rooms offered for rent.',
    },
    {
      term: 'colour bar',
      definition:
        'The practice of refusing housing, work or service to people who were not white. The notices in the opening paragraph are examples; Kolors is a misspelling on one of them.',
    },
    {
      term: 'Westbourne Grove and Ladbroke Grove',
      definition:
        'Streets in and around Notting Hill, west London, an area that had seen race riots in 1958. Ram calls Ladbroke Grove a criminal area and will not live there.',
    },
    {
      term: 'Kelso',
      definition:
        'Kelso Cochrane, an Antiguan carpenter living in Notting Hill, who was stabbed to death by a gang of white youths on 17 May 1959. No one was charged. Ram’s mention of him places the story after that date.',
    },
    {
      term: 'contact man',
      definition: 'Someone with useful connections who knows where things can be found or fixed.',
    },
    {
      term: 'best hads',
      definition:
        'Creole for had better, as when Ram tells Fraser he had better give him the address.',
    },
    {
      term: 'Creole',
      definition:
        'In Trinidad, a word traditionally used for any Trinidadian not of Asian origin. Ram uses it to insist he is a born Trinidadian, although his name and ancestry are Indian.',
    },
    {
      term: 'Untouchable',
      definition:
        'A member of the lowest group in India’s traditional caste system, now usually called Dalits. The Constitution of India abolished untouchability.',
    },
    {
      term: 'the Ganges',
      definition: 'The great river of northern India, the most sacred river to Hindus.',
    },
    {
      term: 'national garments',
      definition:
        'The landlord’s formal phrase for traditional dress. He expects a real Indian to dress the part.',
    },
    {
      term: 'acha',
      definition: 'A Hindi and Urdu word meaning good or fine, also used to mean I see.',
    },
    {
      term: 'Hindustani',
      definition:
        'The everyday language of northern India and Pakistan, with Hindi and Urdu as its two standard forms.',
    },
    {
      term: 'pilau, papadom, vindaloo',
      definition:
        'A spiced rice dish, a thin crisp wafer and a hot curry sharpened with vinegar (Ram says chicken vindaloo, run together as one word): the dishes Ram names instead of speaking Hindi.',
    },
    {
      term: 'Allah',
      definition:
        'The Arabic word for God, used by Muslims. From a man posing as a Hindu Untouchable it shows how muddled his performance is, though the landlord does not notice.',
    },
    {
      term: 'the occult',
      definition:
        'Supernatural or magical powers. Ram claims them so that his lies about Chan sound like insight.',
    },
    {
      term: 'give notice',
      definition:
        'Of a landlord: to tell a tenant that they must leave. Ram urges the landlord to give Chan notice.',
    },
    {
      term: 'yoga',
      definition:
        'The Indian system of exercise and meditation, which includes the headstand. Ram, upside down, calls it by the name of a dairy food.',
    },
    {
      term: 'flying false colours',
      definition:
        'Originally, a ship flying another country’s flag to hide its identity; figuratively, pretending to be what you are not. The landlord’s accusation.',
    },
    {
      term: 'fellar',
      definition: 'A creole spelling of fellow: a man.',
    },
    {
      term: 'perusal',
      definition:
        'A careful reading. The narrator uses the formal word jokingly for Ram scanning the noticeboards again.',
    },
    {
      term: 'When Greek meets Greek',
      definition:
        'A proverb, completed as then comes the tug of war: when two equally matched opponents meet, the struggle is fierce. It adapts a line in Nathaniel Lee’s tragedy The Rival Queens (1677).',
    },
    {
      term: 'malapropism',
      definition:
        'The comic misuse of a word in place of a similar-sounding one, as when Ram confuses yoga with a food.',
    },
    {
      term: 'bathos',
      definition:
        'A sudden drop from the grand to the ordinary, as when Ram moves from the banks of the Ganges to the price of the room.',
    },
  ],

  modelAnswer: {
    question:
      'How does Selvon use humour in When Greek Meets Greek to present the experience of Caribbean migrants looking for somewhere to live?',
    paragraph:
      'Selvon makes the reader laugh at the disguise but never at the man who needs it. When Chan greets Ram on the steps, Ram answers with “Acha, pilau, papadom, chickenvindaloo”, a list of dishes that sounds like a restaurant menu read aloud, and the narration adds that he says it desperately. The comedy lies in the gap between the performance and the knowledge behind it: the only Indian words a Trinidadian in London can reach for are the names of food. Yet the joke depends on the landlord, not Ram, being ignorant, because a landlord who watches a menu pass for a greeting is exactly the Englishman Fraser has in mind when he says “them English people so foolish they believe every Indian come from India”. Selvon aims the laughter at the prejudice that makes the disguise necessary, and Ram’s claim to be “an Untouchable from the heart of India”, the lowest place in the caste system offered as a credential, works only because the landlord knows even less about India than Ram does. The last line then turns the whole story into a joke on the landlord, since his model Indian tenant is “a fellar from Jamaica”. Behind the laughter, though, is a city whose noticeboards refuse coloured tenants in the first paragraph, and the humour lets Selvon show, without once raising his voice, that a man has to become someone else to rent a room.',
    commentary: [
      'It opens with an arguable claim about the whole story, that the laughter is at the disguise and not the man, so every quotation that follows is evidence for a point.',
      'The quotations are short and embedded, and each is analysed for what it does: the menu list as second-hand Indianness, Fraser’s creole judgement as a reversal of who is foolish.',
      'It moves across the whole story, from the opening noticeboards to the last line, which shows a secure grasp of structure and of how the twist changes earlier scenes.',
      'It asks who the joke is on, which is the question that separates a strong answer on this story from one that simply calls it funny.',
      'It ends by linking the comedy to the serious experience underneath, the colour bar, without bolting on a separate paragraph of history.',
    ],
  },

  timeline: [
    {
      where: 'Opening paragraphs',
      title: 'The noticeboards on Westbourne Grove',
      summary:
        'One morning Ram studies the adverts for rooms along Westbourne Grove, noting the odd address, but most of the notices refuse coloured tenants. Humming a rhyme from a children’s game, which names red, white and blue, the colours of the British flag, he reaches Bradley’s Corner and meets Fraser.',
      setting: 'Westbourne Grove, a street in Notting Hill, west London',
      who: ['Ram', 'Fraser'],
      quote: 'No Colours, Please, or Sorry, No Kolors',
      themes: ['Racism and the colour bar', 'Humour as a lens on injustice'],
      tension: 2,
      significance:
        'Racism is established as an everyday obstacle, the ordinary background against which the whole comic plot is played out.',
    },
    {
      where: 'The conversation at Bradley’s Corner',
      title: 'Fraser’s tip',
      summary:
        'Ram will not look in Ladbroke Grove while Kelso’s killer is free. Fraser tells him of a landlord who will not take West Indians but will take Indians, and says a turban is all Ram needs. Ram protests that he is a born Trinidadian, then takes the address.',
      setting: 'Bradley’s Corner, on the street',
      who: ['Ram', 'Fraser'],
      quote: 'them English people so foolish they believe every Indian come from India',
      themes: ['Racism and the colour bar', 'Identity as performance'],
      tension: 2,
      significance:
        'Fraser’s idea sets up the whole masquerade, and the passing mention of an unsolved murder shows how close violence sits to the comedy.',
    },
    {
      where: 'At the landlord’s house',
      title: 'An Untouchable from the heart of India',
      summary:
        'Asked where he comes from, Ram claims to be an Untouchable who lived on the banks of the Ganges, then asks for a room that is not too expensive. When the landlord notes his ordinary clothes, Ram answers with the proverb about doing as the Romans do.',
      setting: 'The steps of the landlord’s house',
      who: ['Ram', 'The landlord'],
      quote: 'I am an Untouchable from the heart of India',
      themes: ['Identity as performance', 'Humour as a lens on injustice'],
      tension: 3,
      significance:
        'Ram’s performance is made of scraps and confidence, and it works because the landlord knows no more about India than he does.',
    },
    {
      where: 'On the front steps',
      title: 'Chan on the steps',
      summary:
        'A tenant with a big beard in a hairnet and a turban arrives, and the narrator renames him Chan. He greets Ram with palms pressed together and words that sound like Hindi; Ram copies the gesture and answers with the names of Indian dishes. Chan goes in, and Ram is given the room next to his.',
      setting: 'The front steps of the lodging house',
      who: ['Ram', 'Chan', 'The landlord'],
      quote: 'Acha, pilau, papadom, chickenvindaloo',
      themes: ['Identity as performance', 'Rivalry within the migrant community'],
      tension: 4,
      significance:
        'Ram meets the man he will fear for the rest of the story, and the reader, like Ram, takes Chan for a genuine Indian.',
    },
    {
      where: 'The days that follow',
      title: 'Cat and mouse',
      summary:
        'Living next door to Chan, Ram hides whenever he sees him, afraid of more Hindi or of questions about Mother India. The strain gets on his nerves, and he decides that one of them will have to leave the house.',
      setting: 'The lodging house, where Ram’s first-floor room is next to Chan’s',
      who: ['Ram', 'Chan'],
      quote: 'This house too small for the two of we',
      themes: ['Rivalry within the migrant community', 'Survival through wit'],
      tension: 3,
      significance:
        'The rivalry of the title begins, at least on Ram’s side: he never once suspects that Chan might be pretending too.',
    },
    {
      where: 'Ram’s visit to the basement',
      title: 'Warning the landlord',
      summary:
        'Ram goes down to the basement and, claiming powers of the occult, tells the landlord that Chan keeps the bathroom dirty, never tidies his room and prays loudly. The landlord says he has had no complaints but will have a word with Chan.',
      setting: 'The landlord’s basement',
      who: ['Ram', 'The landlord'],
      themes: ['Rivalry within the migrant community', 'Survival through wit'],
      tension: 3,
      significance:
        'Ram turns on another migrant to secure his own place, and his lie starts the conversation that will expose him.',
    },
    {
      where: 'The next evening',
      title: 'The headstand',
      summary:
        'When the landlord knocks, Ram stands on his head and claims to be practising his yoga, using the name of a dairy food. After speaking with Chan, the landlord says, he suspects Ram of deceiving him and of coming from the West Indies. He lists how Ram falls short of Chan and, when Ram pleads in creole, tells him to go.',
      setting: 'Ram’s room on the first floor',
      who: ['Ram', 'The landlord'],
      quote: 'falling back on the good old West Indian dialect',
      themes: ['Identity as performance', 'Racism and the colour bar'],
      tension: 5,
      significance:
        'Ram’s scheme backfires: the word with Chan that his complaint provoked is what exposes him, and the landlord’s test of a real Indian turns out to be a list of props.',
    },
    {
      where: 'The following week, the last lines',
      title: 'A fellar from Jamaica',
      summary:
        'A week later Ram is back reading the noticeboards and meets Fraser again. When he complains about having to dodge Chan, Fraser asks whether he means a big man with a beard who always wears a turban, then reveals that Chan is a Jamaican whom Fraser himself sent to the house to get a room.',
      setting: 'The noticeboards on the street again',
      who: ['Ram', 'Fraser'],
      quote: 'that is a fellar from Jamaica',
      themes: ['Rivalry within the migrant community', 'Humour as a lens on injustice'],
      tension: 4,
      significance:
        'The twist shows that the landlord’s model Indian was never Indian, and that Ram lost to a better performer, not to a genuine rival.',
    },
  ],

  relationships: [
    {
      from: 'Ram',
      to: 'Fraser',
      kind: 'the migrant and the fixer',
      note: 'Fraser is Ram’s source of inside knowledge, a contact man who knows which landlords take whom. He sends Ram to the house and, as the last line reveals, had sent Chan there too, so he knows what neither Ram nor the landlord knows. Whether he knew Chan was still there when he gave Ram the address is never said.',
    },
    {
      from: 'Ram',
      to: 'Chan',
      kind: 'rival impostors under one roof',
      note: 'Ram believes Chan is a real Indian who could expose him, so he hides from him and then tries to have him evicted. Chan’s view of Ram is never shown directly, but it is after the landlord has a word with Chan that he suspects Ram of coming from the West Indies, which suggests that Chan may have seen through him. It is Ram who is thrown out, and only afterwards does he learn they were playing the same game.',
    },
    {
      from: 'Ram',
      to: 'The landlord',
      kind: 'performer and audience',
      note: 'Ram plays the Indian the landlord wants to see, with borrowed phrases and invented credentials. The landlord is taken in until he has a word with Chan. Then he accuses Ram of flying false colours and, when Ram pleads in creole, says he has already started to make trouble and must go.',
    },
    {
      from: 'Chan',
      to: 'The landlord',
      kind: 'favoured tenant and landlord',
      note: 'The landlord holds Mr Chan up as the true Indian, measuring Ram against his incense, dress and speech, and his word seems to outweigh Ram’s. The reader learns only in the last line that the landlord’s model Indian is from Jamaica.',
    },
    {
      from: 'Fraser',
      to: 'Chan',
      kind: 'the fixer and an earlier client',
      note: 'Fraser sent Chan, a Jamaican, to the same house to get a room. The link is hidden until the final line, which turns the whole story into a joke on the landlord.',
    },
  ],

  compareWith: [
    {
      title: 'Half-caste, John Agard',
      href: '/igcse/edexcel/poetry/half-caste',
      reason:
        'Both use Caribbean English and humour to turn a racial label back on the person who uses it, so the joke lands on the prejudice rather than on its target.',
    },
    {
      title: 'Leave Taking, Winsome Pinnock',
      href: '/revision/texts/leave-taking',
      reason:
        'Both show Caribbean migrants in London shaping how they present themselves to an England that judges them, and both ask what that costs.',
    },
    {
      title: 'The Danger of a Single Story, Chimamanda Ngozi Adichie',
      href: '/revision/texts/the-danger-of-a-single-story',
      reason:
        'The landlord’s idea of an Indian is a single story in Adichie’s sense, one set of props mistaken for a whole people, and Selvon shows how easily it can be performed.',
    },
  ],

  contentGuidance: ['discrimination', 'crime_injustice'],

  sources: [
    {
      label:
        'Argosy (UK), vol. XXVI no. 11, November 1965, pp. 123-125, When Greek Meets Greek by Samuel Selvon, printed with © Samuel Selvon 1965; acknowledgements credit MacGibbon & Kee for the extract from The Housing Lark. Internet Archive OCR text of the issue (file Argosy (UK) v26n11 (1965-11) (unz)_djvu.txt), read in full on 26 September 2026. Every quotation checked against it; the two beginning I am are OCR-damaged there (Iam, JT am) and were read by eye. Word count taken from it',
      url: 'https://archive.org/details/argosy-uk-1948-1967',
    },
    {
      label:
        'When Greek Meets Greek, an American school printing with marginal glosses, publisher not stated, PDF read in full on 26 September 2026. Every quotation checked against it. American spellings (practicing, yogurt, colors, forever); reads he decide that he had to do something, and drops Fraser from He start to tell Fraser how life hard, as Reading the World (Perfection Learning, 2012) also does',
      url: 'https://us-static.z-dn.net/files/d14/95f1e7d9e05dd46f5b90287b7b278ed1.pdf',
    },
    {
      label:
        'Stories from the Caribbean: an anthology, introduced by Andrew Salkey (Elek Books, 1965; second edition 1972): contents list When Greek Meets Greek at p. 50. Every quotation found in its text with the Internet Archive full-text search on 26 September 2026, across four scans; reads he decide that he had to do something and tell Fraser how life hard',
      url: 'https://archive.org/details/storiesfromcarib0000salk',
    },
    {
      label:
        'Internet Archive full-text search, 26 September 2026: each quoted phrase searched as an exact phrase; each is found in Island Voices (Liveright, 1970) and in school anthologies including Varieties of Present-Day English (1973), Introduction to Fiction (Holt, Rinehart and Winston of Canada, 1982), Literature and Language (McDougal Littell, 1994), The Language of Literature (1997), British and World Literature for Life and Work (1997), A House for Mr Biswas with Related Readings (2000) and Reading the World (2012)',
      url: 'https://archive.org/services/search/beta/page_production/?service_backend=fts&user_query=%22Chandrilaboodoo%22',
    },
    {
      label:
        'Ways of Sunlight (St Martin’s Press, 1957), Internet Archive scan waysofsunlight0000samu, full-text indexed: its contents list ten London stories on pp. 125-181 (Calypso in London, Working the Transport, Waiting for Aunty to Cough, Eraser’s Dilemma, Brackley and the Bed, If Winter Comes, The Cricket Match, Obeah in the Grove, Basement Lullaby, My Girl and the City). When Greek Meets Greek is not among them, and none of its names or phrases occurs in the book',
      url: 'https://archive.org/details/waysofsunlight0000samu',
    },
    {
      label:
        'The related Housing Lark episode: Great Humorous Stories of the World, ed. Larsen and Linfield (Arthur Barker, 1967), which credits Selvon’s extract to his novel The Housing Lark, and Openings (Penguin Education, 1972), which credits the extract from The Housing Lark to MacGibbon & Kee; both print a lodger called Syl, a turbaned rival called Mr Ram and an English landlord. Read by full-text search, 26 September 2026',
      url: 'https://archive.org/details/greathumoroussto0000lars',
    },
    {
      label:
        'Sukhdev Sandhu, London Calling: How Black and Asian Writers Imagined a City (2003): describes the Housing Lark episode, in which Sylvester is exposed by a big-bearded, turban-wearing Jamaican conman; cites The Housing Lark. Read by full-text search',
      url: 'https://archive.org/details/londoncallinghow0000sand',
    },
    {
      label:
        'Wikipedia, Sam Selvon: born 20 May 1923, San Fernando, Trinidad; father a first-generation Tamil Indian immigrant from Madras; Trinidad Guardian 1945-1950; moved to London 1950; worked as a clerk at the Indian Embassy; Ways of Sunlight (1957), The Housing Lark (1965); died 16 April 1994',
      url: 'https://en.wikipedia.org/wiki/Sam_Selvon',
    },
    {
      label:
        'Wikipedia, Murder of Kelso Cochrane: Antiguan carpenter living in Notting Hill, stabbed by a gang of white youths on 17 May 1959; no one was charged; the area had seen race riots the year before',
      url: 'https://en.wikipedia.org/wiki/Murder_of_Kelso_Cochrane',
    },
    {
      label:
        'Nathaniel Lee, The Rival Queens, ed. P. F. Vernon (University of Nebraska Press, 1970), IV.ii.138, the line that became the proverb, read by full-text search; Wikipedia, The Rival Queens: first performed 17 March 1677, published 1677',
      url: 'https://en.wikipedia.org/wiki/The_Rival_Queens',
    },
    {
      label:
        'Wikipedia, Creole peoples: in Trinidad, Creole designates all Trinidadians except those of Asian origin',
      url: 'https://en.wikipedia.org/wiki/Creole_peoples',
    },
    {
      label:
        'Wikipedia, Dalit: the term for untouchables, the lowest stratum of the castes; untouchability abolished by the Constitution of India',
      url: 'https://en.wikipedia.org/wiki/Dalit',
    },
    {
      label:
        'Wikipedia, Hindustani language (Hindi and Urdu as its two standard registers); Wiktionary, acchā (good, fine; as an interjection, oh or I see)',
      url: 'https://en.wikipedia.org/wiki/Hindustani_language',
    },
    {
      label:
        'Wikipedia, Ganges (the most sacred river to Hindus); Sirsasana (the yoga headstand); False flag (a ship flying the flag of another country to hide its identity)',
      url: 'https://en.wikipedia.org/wiki/Ganges',
    },
    {
      label:
        'TV Tropes, Not Big Enough for the Two of Us: the stock phrase of Westerns for two enemies who cannot share one place',
      url: 'https://tvtropes.org/pmwiki/pmwiki.php/Main/NotBigEnoughForTheTwoOfUs',
    },
  ],
}
