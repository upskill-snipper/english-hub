import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * A Christmas Carol, Charles Dickens (1843). A SUPPLEMENT. The existing guide at
 * /revision/texts/a-christmas-carol and its sub-pages already give the overview,
 * context, themes, characters, key quotations, language, structure, exam
 * practice and a model paragraph. This file adds what they lacked: three
 * extracts for close reading and a vocabulary list, with the timeline and
 * character map that feed the animated visuals.
 *
 * Every quotation and all three extracts were copied from the byte copy of
 * Project Gutenberg #46 held at src/data/full-texts/a-christmas-carol.ts. The
 * guide test proves only that each quoted string occurs somewhere in it, so on
 * 25 September 2026 every one of the 111 quoted strings was also printed with
 * its stave and the text around it, and its speaker read off by eye. The
 * extracts were checked by script to be single consecutive runs of the text.
 * They are verbatim, except that straight double quotation marks are set as
 * curly ones and the display capitals of the first word of Stave IV ("THE") are
 * given in ordinary case. Names in the timeline and map follow the characters
 * page; theme names follow the themes page.
 *
 * WHAT THAT SECOND CHECK CORRECTED in an earlier draft of this file, so that the
 * next editor does not put it back. A scene card prints its quotation with no
 * speaker, beside the people present, so the "One shadow more" card's "Quite
 * alone in the world, I do believe" read as Belle's: it is her husband's, and
 * the card now carries Scrooge's own words. The dead man's belongings card
 * named only old Joe, but its line is the charwoman's (she "who had entered
 * first" names herself). Ignorance and Want cling to the Spirit ("they cling
 * to me"), not to Man. Scrooge, not the Ghost, says Fan had "One child". Belle
 * says more after releasing him, so that is not her last line. Scrooge's wish to
 * say a word to his clerk is not the "first" sign of change: in the school scene
 * he has already wished he had given the carol singer something.
 *
 * NO APOSTROPHES IN ANY QUOTATION, and why (25 September 2026). The held
 * edition's source escapes every apostrophe as \', and the guide test
 * normalises that raw source, so a correctly quoted "Scrooge's" is reported as
 * a misquotation. Until the test compares against the string values, every
 * quotation here, and every passage chosen as an extract, avoids apostrophes.
 * That is why the Ignorance and Want extract stops at "Scrooge could say no
 * more", one line before the Spirit's answer, which contains one.
 *
 * PARAGRAPHS IN THE EXTRACTS ARE SEPARATED BY " / ", for the same cause. The
 * raw source holds each paragraph break as the escape \n\n, which the test's
 * normaliser turns into the stray letters "n n", so a passage written with real
 * line breaks can never match. " / " is the separator the renderer turns into a
 * line break and the test splits on, so each paragraph is still checked word
 * for word against the edition. They were cut from it by their first and last
 * words by script, not retyped, so they are consecutive as printed.
 *
 * FOUND ON THE PAGE ABOVE while checking it, and left for its own fix because
 * this file may not touch it: "Are there no prisons? Are there no workhouses?"
 * is attributed to Scrooge in Stave I, but in that form it is the Ghost of
 * Christmas Present in Stave III (Scrooge's Stave I words are "Are there no
 * prisons?" and "And the Union workhouses?"); "A solitary child, neglected by
 * his friends" is the Ghost of Christmas Past, not the narrator; "A small
 * matter" is the Ghost of Christmas Past, not "Narrator / Scrooge"; "Are these
 * the shadows of the things that Will be" adds a "the" the text does not have
 * before "things that May be"; the plot summary's "a golden idol" is not in the
 * text; "Old Marley was as dead as a door-nail" is called the opening line, which
 * is "Marley was dead: to begin with."; "merry as a school-boy" is "schoolboy"
 * here, and the list runs on to a fourth simile, "as giddy as a drunken man",
 * so it is not a triple; "little" occurs three times in Bob's cry, not four;
 * the extract walkthrough appends "Solitary as an oyster" to a paragraph that
 * ends at "nuts" to Scrooge; the themes and characters pages join two
 * separate lines of the first Ghost and drop the "That" of "That they are what
 * they are"; essay-plans joins two Stave V passages paragraphs apart as one
 * quotation; and "grindstone" is "grind-stone" in this edition.
 */
export const guide: StudyGuide = {
  slug: 'a-christmas-carol',
  title: 'A Christmas Carol',
  author: 'Charles Dickens',
  form: 'novella',
  scope:
    "The whole novella (1843), in five staves: Stave I, Marley's Ghost; Stave II, The First of the Three Spirits; Stave III, The Second of the Three Spirits; Stave IV, The Last of the Spirits; Stave V, The End of It.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      'First published by Chapman & Hall on 19 December 1843. Quotations and extracts follow the Project Gutenberg edition (eBook #46).',
  },

  native: {
    overview: '/revision/texts/a-christmas-carol',
    context: '/revision/texts/a-christmas-carol',
    themes: '/revision/texts/a-christmas-carol',
    characters: '/revision/texts/a-christmas-carol',
    keyQuotes: '/revision/texts/a-christmas-carol',
    languageAnalysis: '/revision/texts/a-christmas-carol',
    structureForm: '/revision/texts/a-christmas-carol',
    examPractice: '/revision/texts/a-christmas-carol',
    modelAnswer: '/revision/texts/a-christmas-carol',
  },

  extracts: [
    {
      title: 'Belle releases Scrooge',
      where: 'Stave II, the last visions of Christmas Past',
      pointer:
        "Near the end of Stave II, just after Fezziwig's ball: from “For again Scrooge saw himself.” to “When it was made, you were another man.”",
      text: 'For again Scrooge saw himself. He was older now; a man in the prime of life. His face had not the harsh and rigid lines of later years; but it had begun to wear the signs of care and avarice. There was an eager, greedy, restless motion in the eye, which showed the passion that had taken root, and where the shadow of the growing tree would fall. / He was not alone, but sat by the side of a fair young girl in a mourning-dress: in whose eyes there were tears, which sparkled in the light that shone out of the Ghost of Christmas Past. / “It matters little,” she said, softly. “To you, very little. Another idol has displaced me; and if it can cheer and comfort you in time to come, as I would have tried to do, I have no just cause to grieve.” / “What Idol has displaced you?” he rejoined. / “A golden one.” / “This is the even-handed dealing of the world!” he said. “There is nothing on which it is so hard as poverty; and there is nothing it professes to condemn with such severity as the pursuit of wealth!” / “You fear the world too much,” she answered, gently. “All your other hopes have merged into the hope of being beyond the chance of its sordid reproach. I have seen your nobler aspirations fall off one by one, until the master-passion, Gain, engrosses you. Have I not?” / “What then?” he retorted. “Even if I have grown so much wiser, what then? I am not changed towards you.” / She shook her head. / “Am I?” / “Our contract is an old one. It was made when we were both poor and content to be so, until, in good season, we could improve our worldly fortune by our patient industry. You are changed. When it was made, you were another man.”',
      annotations: [
        {
          phrase: 'the signs of care and avarice',
          note: 'Dickens shows the change happening on the face. Scrooge does not yet have “the harsh and rigid lines of later years”: he is caught halfway to becoming the man of Stave I, which makes the scene painful rather than simply damning. Avarice means greed for wealth.',
        },
        {
          phrase: 'where the shadow of the growing tree would fall',
          note: 'Greed is a tree that has “taken root” and is still growing. The metaphor makes greed a slow, natural process rather than one sudden decision, and the shadow it will cast looks ahead to the dark, cold life of Stave I. A tree that is still growing can still be cut down, which is exactly what the Spirits attempt.',
        },
        {
          phrase: 'a fair young girl in a mourning-dress',
          note: 'Dickens never says whom she is mourning. The literal reading is simply that someone close to her has died. Many readers find the symbolic reading stronger: that she is already grieving for the man Scrooge used to be, and the close of the scene supports it, when she releases him “for the love of him you once were”.',
        },
        {
          phrase: 'Another idol has displaced me',
          note: 'An idol is a false god, and the worship of idols is forbidden in the Ten Commandments. Belle tells Scrooge, softly and without anger, that he has turned from love to worship something else. “A golden one” completes the metaphor in three words: money has become his religion.',
        },
        {
          phrase: 'This is the even-handed dealing of the world!',
          note: 'Scrooge answers with bitter sarcasm: the world punishes poverty harshly, then condemns people for trying to escape it. The point is not foolish, and Dickens lets it stand. What Belle answers is not the argument but the fear beneath it: “You fear the world too much”.',
        },
        {
          phrase: 'the master-passion, Gain, engrosses you',
          note: 'Gain is capitalised and personified as a master that rules him, so Scrooge is no longer free. To engross means to absorb completely, but it once also meant to buy up the whole supply of a commodity, and that business sense suits a man whose feelings have been taken over by trade.',
        },
        {
          phrase: 'Our contract is an old one.',
          note: 'Even their engagement is described in the language of business: a contract, made when they were both poor and meant to improve their fortune by “patient industry”. Belle may be speaking his language on purpose, to show that she understands what he now values.',
        },
        {
          phrase: 'you were another man',
          note: "Belle's verdict is that Scrooge has become someone else. The phrase comes back in Stave IV, when Scrooge tells the last Spirit that he hopes “to live to be another man from what I was”: the novella turns her judgement into his hope.",
        },
      ],
      question:
        'Starting with this extract, how does Dickens present the effects of greed on Scrooge? Write about how Dickens presents Scrooge and Belle in this extract, and how he presents greed in the novella as a whole.',
    },
    {
      title: 'Ignorance and Want',
      where: "Stave III, the end of the second Spirit's night",
      pointer:
        "Close to the end of Stave III, as the chimes ring three quarters past eleven: from “From the foldings of its robe” to “Scrooge could say no more.” In the lines straight after, the Spirit names the boy Ignorance and the girl Want, and turns Scrooge's own questions about prisons and workhouses back on him.",
      text: 'From the foldings of its robe, it brought two children; wretched, abject, frightful, hideous, miserable. They knelt down at its feet, and clung upon the outside of its garment. / “Oh, Man! look here. Look, look, down here!” exclaimed the Ghost. / They were a boy and girl. Yellow, meagre, ragged, scowling, wolfish; but prostrate, too, in their humility. Where graceful youth should have filled their features out, and touched them with its freshest tints, a stale and shrivelled hand, like that of age, had pinched, and twisted them, and pulled them into shreds. Where angels might have sat enthroned, devils lurked, and glared out menacing. No change, no degradation, no perversion of humanity, in any grade, through all the mysteries of wonderful creation, has monsters half so horrible and dread. / Scrooge started back, appalled. Having them shown to him in this way, he tried to say they were fine children, but the words choked themselves, rather than be parties to a lie of such enormous magnitude. / “Spirit! are they yours?” Scrooge could say no more.',
      annotations: [
        {
          phrase: 'wretched, abject, frightful, hideous, miserable',
          note: 'An asyndetic list: five adjectives with no conjunction to slow them down. It moves between pity (wretched, miserable) and horror (frightful, hideous), so the reader feels both at once. It can also be read as an answer to the list in the opening pages of Stave I, “squeezing, wrenching, grasping, scraping, clutching”: one list showed what men like Scrooge do, this one shows what their neglect produces.',
        },
        {
          phrase: 'Oh, Man! look here. Look, look, down here!',
          note: "The Spirit has called Scrooge “Man” before, at the Cratchits, so on one level this is simply addressed to him. But the capital letter comes back a few lines later, when the Spirit says the children belong to Man, and it lets the cry reach past Scrooge to all humanity, and so to every reader. The repeated imperative insists that the comfortable must see what they would rather avoid, and “down here” reminds the reader that the children are kneeling at the Spirit's feet, where anyone who does not choose to look down will miss them.",
        },
        {
          phrase: 'Yellow, meagre, ragged, scowling, wolfish',
          note: 'A second list, this time of how the children look. Wolfish is the most frightening word in it: hunger has made them look like animals, and wolves are dangerous as well as starving. Dickens hints that a society which leaves children like this is breeding its own threat, a warning the Spirit makes plain a few lines later.',
        },
        {
          phrase: 'a stale and shrivelled hand, like that of age',
          note: "The simile makes the children old before their time, as if a withered hand had pinched and twisted them. Shrivelled has appeared before, in Stave I, where the cold within Scrooge “shrivelled his cheek”. One reading is that the same coldness has done both: the miser's meanness is the hand that has withered these children.",
        },
        {
          phrase: 'Where angels might have sat enthroned, devils lurked',
          note: "Antithesis: angels set against devils. Children should be innocent, almost holy, and Dickens insists that what has made these two devilish is how they have been treated, not what they were born as. It is the novella's argument about the poor in a single sentence: neglect, not birth, makes people dangerous.",
        },
        {
          phrase: 'the words choked themselves',
          note: 'Scrooge tries to be polite and call them fine children, but the words are personified as refusing to take part in a lie. His conscience is now working faster than his manners. Compare the Scrooge of Stave I, who talked about the deaths of the poor without hesitating at all.',
        },
        {
          phrase: 'Spirit! are they yours?',
          note: "Scrooge's question can be read as a hope that the children are somebody else's responsibility. The Spirit's answer, in the next line, is that they belong to Man, humanity as a whole, and that they cling to the Spirit “appealing from their fathers”. One reading is that, as a case is appealed from a lower court to a higher one, the children appeal over the heads of the fathers who have failed them. The scene refuses the idea that the poor are someone else's business, the same idea Marley's Ghost rejected in Stave I.",
        },
      ],
      question:
        'How does Dickens use language to make the reader respond to the two children in this extract? Refer closely to words and phrases from the extract, and explain the effect of each on the reader.',
    },
    {
      title: 'The last of the Spirits',
      where: 'Stave IV, the opening',
      pointer:
        'The first paragraphs of Stave IV, from “The Phantom slowly, gravely, silently, approached.” to “The hand was pointed straight before them.”',
      text: 'The Phantom slowly, gravely, silently, approached. When it came near him, Scrooge bent down upon his knee; for in the very air through which this Spirit moved it seemed to scatter gloom and mystery. / It was shrouded in a deep black garment, which concealed its head, its face, its form, and left nothing of it visible save one outstretched hand. But for this it would have been difficult to detach its figure from the night, and separate it from the darkness by which it was surrounded. / He felt that it was tall and stately when it came beside him, and that its mysterious presence filled him with a solemn dread. He knew no more, for the Spirit neither spoke nor moved. / “I am in the presence of the Ghost of Christmas Yet To Come?” said Scrooge. / The Spirit answered not, but pointed onward with its hand. / “You are about to show me shadows of the things that have not happened, but will happen in the time before us,” Scrooge pursued. “Is that so, Spirit?” / The upper portion of the garment was contracted for an instant in its folds, as if the Spirit had inclined its head. That was the only answer he received. / Although well used to ghostly company by this time, Scrooge feared the silent shape so much that his legs trembled beneath him, and he found that he could hardly stand when he prepared to follow it. The Spirit paused a moment, as observing his condition, and giving him time to recover. / But Scrooge was all the worse for this. It thrilled him with a vague uncertain horror, to know that behind the dusky shroud, there were ghostly eyes intently fixed upon him, while he, though he stretched his own to the utmost, could see nothing but a spectral hand and one great heap of black. / “Ghost of the Future!” he exclaimed, “I fear you more than any spectre I have seen. But as I know your purpose is to do me good, and as I hope to live to be another man from what I was, I am prepared to bear you company, and do it with a thankful heart. Will you not speak to me?” / It gave him no reply. The hand was pointed straight before them.',
      annotations: [
        {
          phrase: 'slowly, gravely, silently',
          note: "Three adverbs slow the opening sentence to the Phantom's own pace, so the reader waits as Scrooge waits. Gravely means seriously, but in a stave that leads to a grave it is hard not to hear the grave in it too: whether or not Dickens meant a pun, the word carries death into the first line.",
        },
        {
          phrase: 'left nothing of it visible save one outstretched hand',
          note: "Hooded, black and faceless, the Phantom resembles the traditional figure of Death. Only the hand can be seen, and the hand is how it communicates: it points, and in the churchyard its finger will point from a grave to Scrooge and back again. One gesture carries the whole of the Spirit's meaning.",
        },
        {
          phrase: 'the Spirit neither spoke nor moved',
          note: 'The earlier visitors all talked, Marley at length. This one never speaks in the whole stave, and the silence is more frightening than any speech because Scrooge must interpret everything himself. The future, Dickens suggests, does not explain itself: it has to be read in the consequences of what we do now.',
        },
        {
          phrase: 'shadows of the things that have not happened, but will happen',
          note: 'Scrooge assumes the future is fixed: these things “will happen”. The stave turns on that assumption. At the grave he asks instead whether they are “shadows of things that May be, only”, and all his hope rests on the second possibility.',
        },
        {
          phrase: 'ghostly eyes intently fixed upon him',
          note: 'Scrooge cannot see the eyes, only feel them. The master who kept his office door open in Stave I “that he might keep his eye upon his clerk” is now the one being watched and judged, unable to look back. The Gothic horror here comes from what is hidden, not from what is shown.',
        },
        {
          phrase: 'one great heap of black',
          note: 'After the abstract nouns of the description so far (“mysterious presence”, “solemn dread”), Dickens ends with five plain words of one syllable. The Spirit is reduced to a shapeless mass, as formless as death and as impossible to argue with.',
        },
        {
          phrase: 'I fear you more than any spectre I have seen',
          note: 'Scrooge admits his fear in plain words. Faced with Marley in Stave I, he joked that the ghost might be “an undigested bit of beef”, which the narrator explains was his way of “keeping down his terror”; now he makes no such pretence. In the same speech he says he knows the Spirit means to do him good and hopes to be another man: fear and hope arrive together, and he now follows willingly.',
        },
      ],
      question:
        "Starting with this extract, explore how Dickens presents fear in A Christmas Carol. Write about how Dickens presents Scrooge's fear of the last Spirit in this extract, and how he uses fear to bring about change in the novella as a whole.",
    },
  ],

  vocabulary: [
    {
      term: 'Stave',
      definition:
        'A verse or stanza of a song, and also the set of five lines on which music is written. Dickens calls his five chapters staves, so the book is laid out like the carol its title promises.',
    },
    {
      term: 'Carol',
      definition:
        "A song of joy, especially one sung at Christmas. In Stave I a young carol singer, pinched by the cold, stoops at Scrooge's keyhole to sing one, and Scrooge seizes the ruler so fiercely that the singer runs away in terror. In Stave II, watching his lonely younger self, Scrooge remembers that singer and says he would like to have given him something: one of the first signs that he is changing.",
    },
    {
      term: 'Humbug',
      definition:
        'Nonsense, or a fraud meant to deceive. When Scrooge calls Christmas humbug he is calling it a sham, cheerfulness with nothing real behind it.',
    },
    {
      term: 'Counting-house',
      definition:
        'An office where a business keeps its accounts. Scrooge keeps his so cold that his clerk tries to warm himself at the candle.',
    },
    {
      term: "'Change",
      definition:
        "An old word for an exchange, a place where merchants met to do business, such as the Royal Exchange in the City of London. Scrooge's name being good there means that merchants trust his signature.",
    },
    {
      term: 'Residuary legatee',
      definition:
        "The person who inherits whatever is left of an estate once other gifts have been paid. Scrooge was Marley's sole residuary legatee, and still marked the day of the funeral with a bargain.",
    },
    {
      term: 'Surplus population',
      definition:
        'Excess people. The thinking behind it is associated with the economist Thomas Malthus, whose Essay on the Principle of Population (1798) argued that population tends to grow faster than the food to feed it. Scrooge uses it to say the poor are too many; in Stave III the Ghost of Christmas Present throws it back at him.',
    },
    {
      term: 'Union workhouse',
      definition:
        'Under the Poor Law Amendment Act of 1834, parishes were grouped into Poor Law Unions, and help for the poor was meant to be given in workhouses where conditions were deliberately made harsher than the life of the poorest labourer outside, so that only the truly destitute would apply.',
    },
    {
      term: 'Poor Law',
      definition:
        'The laws governing help for the poor. When Scrooge asks whether the Treadmill and the Poor Law are in full vigour, he is approving of a system the 1834 Act had made deliberately harsh.',
    },
    {
      term: 'Treadmill',
      definition:
        'A large wheel with steps that prisoners were made to climb for hours, like walking up an endless staircase, as a punishment. Penal treadmills were introduced in 1818 by the engineer William Cubitt.',
    },
    {
      term: 'Bedlam',
      definition:
        'The old nickname of the Bethlem hospital in London, which was housing people with mental illness by the early fifteenth century and later became an asylum for them; from it the word bedlam came to mean madness and chaos. Scrooge says he will retire to Bedlam after hearing his clerk, on fifteen shillings a week with a wife and family, “talking about a merry Christmas”: to Scrooge, that is madness.',
    },
    {
      term: 'Comforter',
      definition:
        'A woollen scarf for winter. Bob Cratchit puts on his white comforter to try to keep warm at his desk, and runs home with its long ends dangling below his waist, because he has no great-coat.',
    },
    {
      term: 'Bob',
      definition:
        'Slang for a shilling. Dickens jokes that Bob Cratchit takes home fifteen bob a week, “fifteen copies of his Christian name”.',
    },
    {
      term: 'Gruel',
      definition:
        'A thin, watery porridge, once eaten mainly by the poor and the sick. Scrooge, rich as he is, sits over a tiny fire with a saucepan of gruel because he has a cold.',
    },
    {
      term: 'Fettered',
      definition:
        'Chained, especially by the legs. Scrooge says “You are fettered” to Marley, who answers that he forged the chain himself, link by link.',
    },
    {
      term: 'Penance',
      definition:
        'Punishment or suffering undergone to make up for wrongdoing. Marley says that sitting invisible beside Scrooge for many a day is no light part of his penance.',
    },
    {
      term: 'Apprentice',
      definition:
        "A young person bound to an employer for a set time to learn a trade, shortened to 'prentice in the Fezziwig scene. Scrooge and Dick Wilkins were apprenticed to Fezziwig and slept under a counter in the back-shop.",
    },
    {
      term: 'Negus',
      definition:
        "A hot drink of wine, often port, mixed with hot water, sugar, spices and oranges or lemons, named after Colonel Francis Negus. It is served at Fezziwig's ball.",
    },
    {
      term: 'Forfeits',
      definition:
        "A party game in which a player hands over a belonging and must pay a playful penalty to win it back. It is played at Fezziwig's ball and again at Fred's party.",
    },
    {
      term: 'Dowerless',
      definition:
        'Without a dowry, the money or property a bride brought to her marriage. Belle knows that a man who can “weigh everything by Gain” would not now choose a dowerless girl.',
    },
    {
      term: 'Idol',
      definition:
        'An image worshipped as a god. Belle tells Scrooge that another idol, a golden one, has taken her place: money has become his false god.',
    },
    {
      term: 'Engross',
      definition:
        "To take up someone's attention completely. It once also meant to buy up the whole supply of a commodity, a sense worth remembering when Belle says the master-passion, Gain, engrosses Scrooge.",
    },
    {
      term: 'Avarice',
      definition:
        "Extreme greed for wealth. In the prime of life, Scrooge's face has begun to wear the “signs of care and avarice” in the vision the Ghost of Christmas Past shows him.",
    },
    {
      term: 'Misanthropic',
      definition:
        "Distrusting or disliking people in general. In Stave I even the frozen overflow from a water-plug turns to misanthropic ice, as if Scrooge's mood had spread to the street.",
    },
    {
      term: 'Twelfth-cake',
      definition:
        'A rich cake once eaten on Twelfth Night, the end of the twelve days of Christmas, often with a bean and a pea baked inside to choose a king and queen for the night. Twelfth-cakes are part of the heap of food that forms the throne of the Ghost of Christmas Present.',
    },
    {
      term: 'Old Scratch',
      definition:
        'A nickname for the Devil. When one businessman in Stave IV tells another that “Old Scratch has got his own at last”, he means that the Devil has claimed the dead man as his own.',
    },
    {
      term: 'Charwoman',
      definition:
        "A woman employed to clean other people's houses, traditionally coming in by the day. In Stave IV the charwoman who stripped the dead man's bed sells his bed-curtains, blankets and shirt to old Joe.",
    },
    {
      term: 'Milliner',
      definition:
        "A maker or seller of women's hats, and in older use of other women's clothing and trimmings too. Martha Cratchit is a poor apprentice at a milliner's and works long hours at a stretch.",
    },
    {
      term: 'Laocoön',
      definition:
        "A priest of Troy in the story told in Virgil's Aeneid, shown in a famous ancient statue with his sons, attacked by sea serpents. Scrooge, tangled up in his stockings on Christmas morning, makes a perfect Laocoön of himself.",
    },
    {
      term: 'Smoking bishop',
      definition:
        "A hot drink of port and red wine warmed with roasted lemons or Seville oranges, sugar and spices such as cloves. Scrooge offers to discuss Bob's affairs over a Christmas bowl of it.",
    },
    {
      term: 'Total Abstinence Principle',
      definition:
        'The rule of drinking no alcohol at all. It was promoted by the teetotal movement, whose name took hold at the Preston Temperance Society, founded by Joseph Livesey in 1833. The sentence in the last paragraph that uses it can be read as a pun on the two kinds of spirits: from then on, Scrooge had no more to do with ghosts, or with strong drink.',
    },
    {
      term: 'Cant',
      definition:
        'Empty, hypocritical talk, especially talk that sounds moral. When the Ghost of Christmas Present tells Scrooge to “forbear that wicked cant”, the cant is his talk of the surplus population: a cruel idea dressed up as economic good sense.',
    },
    {
      term: 'Adamant',
      definition:
        'As a noun, a legendary stone so hard it could not be broken. The Ghost calls Scrooge “Man” and adds “if man you be in heart, not adamant”: a heart of stone, like the flint of Stave I, is the thing he must prove he has not got.',
    },
    {
      term: 'Intercourse',
      definition:
        "Communication or dealings between people, which was its everyday meaning in Dickens's time. At the grave Scrooge says he will not be the man he must have been “but for this intercourse”, meaning his dealings with the Spirits, and the last paragraph says he had “no further intercourse with Spirits”.",
    },
    {
      term: 'Allegory',
      definition:
        'A story, or a figure in one, that stands for a hidden moral or political message. The children Ignorance and Want are allegorical figures: they are named after what they represent.',
    },
  ],

  timeline: [
    {
      where: 'Stave I, the counting-house',
      title: 'Christmas Eve at the counting-house',
      summary:
        "On a foggy Christmas Eve, Scrooge works in his cold counting-house while his clerk, Bob Cratchit, tries to warm himself at a candle. Scrooge's nephew Fred calls to wish him a merry Christmas and invite him to dinner, and Scrooge dismisses Christmas as humbug and refuses.",
      setting: "Scrooge's counting-house in London, on a dark, foggy afternoon",
      who: ['Ebenezer Scrooge', 'Fred', 'Bob Cratchit'],
      quote: 'keep Christmas in your own way, and let me keep it in mine',
      themes: ['Christmas Spirit and Generosity', 'Family and Isolation'],
      tension: 2,
      significance:
        'It sets up the man who must change: every refusal here, of family, of warmth and of Christmas itself, is reversed in Stave V.',
    },
    {
      where: 'Stave I, the charity collectors',
      title: 'The charity collectors',
      summary:
        'Two portly gentlemen ask Scrooge to give to a fund that will buy the poor food and warmth at Christmas. He asks whether the prisons and the Union workhouses are still working, gives nothing, and says that those who would rather die than go to them had better do so.',
      setting: 'The counting-house, later the same afternoon',
      who: ['Ebenezer Scrooge', 'The charity collectors'],
      quote: 'they had better do it, and decrease the surplus population',
      themes: ['Social Responsibility and Poverty', 'Greed and Capitalism'],
      tension: 2,
      significance:
        'Scrooge speaks the hard-line thinking about the poor that Dickens set out to expose, and in Stave III the Ghost of Christmas Present quotes his own words back at him, “he had better do it, and decrease the surplus population”, about Tiny Tim.',
    },
    {
      where: "Stave I, Marley's Ghost",
      title: "Marley's Ghost",
      summary:
        "That night Scrooge sees Marley's face in his door knocker, then hears every bell in the house ring and a chain dragging up the stairs. The ghost of his partner, dead seven years that very night, appears wrapped in a chain of cash-boxes, ledgers and purses, and warns him that three Spirits will come.",
      setting: 'The gloomy chambers that once belonged to Marley, late on Christmas Eve',
      who: ['Ebenezer Scrooge', 'Jacob Marley'],
      quote: 'I wear the chain I forged in life',
      themes: ['Death and Mortality', 'Greed and Capitalism', 'Redemption and Change'],
      tension: 4,
      significance:
        'Marley shows Scrooge the fate he is building for himself, and offers him a chance and hope of escaping it, which starts the whole story of redemption.',
    },
    {
      where: 'Stave II, the school',
      title: 'The lonely schoolboy',
      summary:
        'The Ghost of Christmas Past, a strange figure both childlike and old with light springing from its head, takes Scrooge to the countryside where he grew up. The Ghost tells him that one child is still left at his old school, and Scrooge weeps to see his younger self reading alone. At a later Christmas his little sister Fan arrives to take him home.',
      setting: 'A decaying school of dull red brick, in the countryside of his childhood',
      who: ['Ebenezer Scrooge', 'Ghost of Christmas Past', 'Fan'],
      quote: 'A solitary child, neglected by his friends, is left there still.',
      themes: ['Time and Memory', 'Family and Isolation'],
      tension: 2,
      significance:
        "Scrooge's tears show that the feeling he has buried is still alive, and suggest that his loneliness began long before his greed.",
    },
    {
      where: "Stave II, Fezziwig's warehouse",
      title: "Fezziwig's ball",
      summary:
        "Scrooge sees himself as a young apprentice to old Fezziwig, who calls a halt to work at seven o'clock on Christmas Eve and turns the warehouse into a ballroom for his workers and neighbours. When the Ghost says the party cost only a few pounds, Scrooge defends his old master, speaking like his younger self.",
      setting: 'A warehouse in a busy city, cleared for dancing on Christmas Eve',
      who: ['Ebenezer Scrooge', 'Ghost of Christmas Past', 'Fezziwig'],
      quote: 'The happiness he gives, is quite as great as if it cost a fortune.',
      themes: ['Christmas Spirit and Generosity', 'Greed and Capitalism', 'Time and Memory'],
      tension: 1,
      significance:
        "Fezziwig is the employer Scrooge could have been, and Scrooge's sudden wish to say a word or two to his clerk shows the change reaching the way he treats the man who works for him.",
    },
    {
      where: 'Stave II, the broken engagement',
      title: 'Belle releases him',
      summary:
        'Scrooge, now in the prime of life, sits beside a young woman in a mourning-dress, named as Belle in the next vision. She tells him that another idol, a golden one, has taken her place, and releases him from their engagement because he is no longer the man she agreed to marry.',
      setting: "No setting is described: only the two of them, lit by the Ghost's light",
      who: ['Ebenezer Scrooge', 'Belle', 'Ghost of Christmas Past'],
      quote: 'Another idol has displaced me',
      themes: ['Greed and Capitalism', 'Family and Isolation', 'Time and Memory'],
      tension: 3,
      significance:
        'The moment Scrooge chose money over love, shown as a choice he made rather than a fate that happened to him.',
    },
    {
      where: "Stave II, Belle's home",
      title: 'One shadow more',
      summary:
        'The Ghost forces Scrooge to watch Belle years later, a mother in a noisy, happy home at Christmas. Her husband mentions seeing Scrooge sitting alone in his office while his partner lay dying. Scrooge begs to be taken away, wrestles with the Spirit and presses its extinguisher-cap down on it, but cannot hide its light.',
      setting: 'A comfortable family room by a winter fire, years later',
      who: ['Belle', 'Ebenezer Scrooge', 'Ghost of Christmas Past'],
      quote: 'Leave me! Take me back. Haunt me no longer!',
      themes: ['Family and Isolation', 'Time and Memory'],
      tension: 4,
      significance:
        "Scrooge sees the family life he gave up, and his attempt to put out the Spirit's light shows how painful the truth about his past has become.",
    },
    {
      where: "Stave III, the Cratchits' house",
      title: 'The Cratchits keep Christmas',
      summary:
        "The Ghost of Christmas Present, a jolly giant in a green robe, takes Scrooge through the Christmas streets to Bob Cratchit's four-roomed house. The poor family make a feast of a modest goose and pudding, and Tiny Tim, who has a little crutch and limbs supported by an iron frame, sits by his father's side.",
      setting: "Bob Cratchit's house in Camden Town, on Christmas Day",
      who: [
        'Ebenezer Scrooge',
        'Ghost of Christmas Present',
        'Bob Cratchit',
        'Mrs Cratchit',
        'Tiny Tim',
      ],
      quote: 'God bless us every one!',
      themes: [
        'Family and Isolation',
        'Christmas Spirit and Generosity',
        'Social Responsibility and Poverty',
      ],
      tension: 2,
      significance:
        'The Cratchits are poor but grateful and loving, the direct opposite of the rich and lonely Scrooge.',
    },
    {
      where: "Stave III, the Cratchits' house",
      title: 'A vacant seat',
      summary:
        "Scrooge, with an interest he has never felt before, asks whether Tiny Tim will live. The Ghost foresees an empty seat and a crutch without an owner, then quotes Scrooge's words about the surplus population back at him, and Mrs Cratchit drinks to Scrooge only for Bob's sake and the day's.",
      setting: "The Cratchits' hearth after dinner, on Christmas Day",
      who: [
        'Ebenezer Scrooge',
        'Ghost of Christmas Present',
        'Tiny Tim',
        'Bob Cratchit',
        'Mrs Cratchit',
      ],
      quote: 'If these shadows remain unaltered by the Future, the child will die.',
      themes: ['Social Responsibility and Poverty', 'Death and Mortality'],
      tension: 3,
      significance:
        'The faceless poor of Stave I become one child Scrooge cares about, and his own words are made to sound as cruel as they are.',
    },
    {
      where: "Stave III, Fred's house",
      title: "Fred's party",
      summary:
        "After watching miners, lighthouse keepers and sailors keep Christmas, Scrooge is taken to his nephew's party. Fred laughs at his uncle but pities him and means to invite him every year, and in a game of Yes and No the answer turns out to be Scrooge himself.",
      setting: "Fred's bright, warm house on Christmas evening",
      who: ['Fred', 'Ebenezer Scrooge', 'Ghost of Christmas Present'],
      quote:
        'I mean to give him the same chance every year, whether he likes it or not, for I pity him.',
      themes: ['Family and Isolation', 'Christmas Spirit and Generosity'],
      tension: 1,
      significance:
        'Fred keeps a door open for his uncle, and Scrooge, shouting out guesses nobody can hear, shows how much he wants to belong.',
    },
    {
      where: 'Stave III, an open place near midnight',
      title: 'Ignorance and Want',
      summary:
        'The Ghost, grown old by the end of its one-day life, brings two wretched children out from the folds of its robe. It names the boy Ignorance and the girl Want, warns Scrooge to beware them both, and answers his plea for them with his own questions about prisons and workhouses.',
      setting: 'An open place, as the chimes ring three quarters past eleven',
      who: ['Ebenezer Scrooge', 'Ghost of Christmas Present', 'Ignorance and Want'],
      quote: 'This boy is Ignorance. This girl is Want.',
      themes: ['Social Responsibility and Poverty'],
      tension: 4,
      significance:
        "Dickens's most direct warning to his readers: the Spirit says to beware most of all the boy, Ignorance, because Doom is written on his brow unless the writing is erased.",
    },
    {
      where: "Stave IV, the Exchange and old Joe's shop",
      title: "The dead man's belongings",
      summary:
        "The silent Ghost of Christmas Yet to Come shows Scrooge businessmen joking about a death and a cheap funeral. In a filthy shop in a notorious part of town, a charwoman, a laundress and an undertaker's man sell the dead man's things to old Joe, even the curtains from around his bed, and the charwoman laughs that a man who drove everyone away in life has left them free to profit from his death.",
      setting: 'Among the merchants in the City, then a rag-and-bone shop in a slum',
      who: ['Ebenezer Scrooge', 'Ghost of Christmas Yet to Come', 'The charwoman', 'Old Joe'],
      quote:
        'He frightened every one away from him when he was alive, to profit us when he was dead!',
      themes: ['Death and Mortality', 'Greed and Capitalism'],
      tension: 4,
      significance:
        'A life spent grasping ends with others grasping at what is left, and nobody mourns: Scrooge begins to see that the case of this unhappy man might be his own.',
    },
    {
      where: 'Stave IV, the dark room',
      title: 'The body on the bed',
      summary:
        'Scrooge stands beside the covered body of the dead man in a dark, plundered room, but has no power to lift the cover from its face. When he asks to see anyone who feels emotion at the death, he is shown a husband and wife in debt who are relieved that their merciless creditor is gone.',
      setting: "A bare, dark bedroom, then a poor family's home by daylight",
      who: ['Ebenezer Scrooge', 'Ghost of Christmas Yet to Come'],
      quote: 'unwatched, unwept, uncared for',
      themes: ['Death and Mortality', 'Family and Isolation'],
      tension: 5,
      significance:
        'The only feeling the death causes is pleasure, the final judgement on a life lived without kindness.',
    },
    {
      where: "Stave IV, the Cratchits' house",
      title: 'The Cratchits mourn Tiny Tim',
      summary:
        "Asking to see some tenderness connected with a death, Scrooge is taken to the Cratchits, who are hushed with grief. Bob comes home from the green place he promised Tim he would walk to on a Sunday, breaks down, and then tells the family how kindly Scrooge's nephew spoke to him.",
      setting: "The Cratchits' house, quiet by the fire, in the future",
      who: [
        'Ebenezer Scrooge',
        'Ghost of Christmas Yet to Come',
        'Bob Cratchit',
        'Mrs Cratchit',
        'Tiny Tim',
      ],
      quote: 'My little, little child!',
      themes: ['Death and Mortality', 'Family and Isolation'],
      tension: 4,
      significance:
        'The death the Ghost of Christmas Present foresaw has happened, and the loving family shows what the lonely dead man never had.',
    },
    {
      where: 'Stave IV, the churchyard',
      title: 'The gravestone',
      summary:
        'The Spirit leads Scrooge past his old office, where another man now sits, to a neglected churchyard, and points to a grave. Scrooge reads his own name on the stone, falls to his knees, and begs to be told that he may still change these shadows by an altered life.',
      setting: 'An overgrown churchyard walled in by houses',
      who: ['Ebenezer Scrooge', 'Ghost of Christmas Yet to Come'],
      quote: 'I am not the man I was.',
      themes: ['Redemption and Change', 'Death and Mortality'],
      tension: 5,
      significance:
        'The climax: the dead man was Scrooge, and his vow to honour Christmas all the year is made at the very edge of his own grave.',
    },
    {
      where: 'Stave V, Christmas morning',
      title: 'Christmas morning',
      summary:
        "Scrooge wakes in his own bed on Christmas Day, laughing and crying at once. He sends a prize turkey to the Cratchits without saying who sent it, promises a large gift to the charity collector he turned away, and goes to dinner at Fred's house, where he is welcomed at once.",
      setting: "Scrooge's bedroom, the bright streets and Fred's house, on Christmas Day",
      who: ['Ebenezer Scrooge', 'The charity collectors', 'Fred'],
      quote: 'I will live in the Past, the Present, and the Future!',
      themes: ['Redemption and Change', 'Christmas Spirit and Generosity', 'Time and Memory'],
      tension: 2,
      significance:
        "Every refusal of Stave I is undone in a single day, and the joy of it is part of Dickens's argument that change is worth making.",
    },
    {
      where: 'Stave V, the office',
      title: 'A raise for Bob',
      summary:
        'The next morning Scrooge pretends to be angry when Bob arrives eighteen and a half minutes late, then tells him he is going to raise his salary and help his struggling family. He becomes a second father to Tiny Tim, who does not die.',
      setting: "Scrooge's counting-house, the day after Christmas",
      who: ['Ebenezer Scrooge', 'Bob Cratchit', 'Tiny Tim'],
      quote: 'I am about to raise your salary!',
      themes: ['Redemption and Change', 'Social Responsibility and Poverty'],
      tension: 1,
      significance:
        'The change reaches the place where Scrooge did most harm, his treatment of the man who works for him, and saves the child whose death was foreseen.',
    },
  ],

  relationships: [
    {
      from: 'Ebenezer Scrooge',
      to: 'Jacob Marley',
      kind: 'business partners',
      note: "In life they were “two kindred spirits” in meanness. In death Marley becomes the one friend who acts for Scrooge's good, procuring the visits that give him a chance and hope of escape.",
    },
    {
      from: 'Ebenezer Scrooge',
      to: 'Bob Cratchit',
      kind: 'master and clerk',
      note: 'Scrooge keeps the coal-box in his own room and grudges Bob his day off. In Stave V he raises his salary and tells him to buy another coal-scuttle.',
    },
    {
      from: 'Ebenezer Scrooge',
      to: 'Fred',
      kind: 'uncle and nephew',
      note: 'Refused in Stave I, Fred pities and defends his uncle in Stave III, then welcomes him to dinner in Stave V without a word of reproach.',
    },
    {
      from: 'Fan',
      to: 'Fred',
      kind: 'mother and son',
      note: 'When the Ghost of Christmas Past says Fan had children, Scrooge corrects it: “One child”. “Your nephew”, the Ghost answers, so the nephew Scrooge turns away is his living link to the sister who once came to take him home.',
    },
    {
      from: 'Ebenezer Scrooge',
      to: 'Fan',
      kind: 'brother and sister',
      note: 'Fan comes to fetch the lonely schoolboy home for Christmas. The Ghost calls her a delicate creature, but says “she had a large heart”. She died a woman, leaving one child, and one reading is that her warmth lives on in her son.',
    },
    {
      from: 'Ebenezer Scrooge',
      to: 'Belle',
      kind: 'engaged, then parted',
      note: 'Belle releases Scrooge because Gain has become his master-passion. The later vision of her happy family shows him exactly what he gave up.',
    },
    {
      from: 'Ebenezer Scrooge',
      to: 'Fezziwig',
      kind: 'apprentice and master',
      note: "Fezziwig shows that an employer can make work “a pleasure or a toil” with small kindnesses, as Scrooge himself puts it in Stave II. That is the standard by which Scrooge's treatment of Bob is judged.",
    },
    {
      from: 'Bob Cratchit',
      to: 'Tiny Tim',
      kind: 'father and son',
      note: "Bob carries Tim home from church on his shoulder and holds his hand by the fire. His grief in Stave IV is the novella's deepest sorrow, and Tim's survival its happiest outcome.",
    },
    {
      from: 'Bob Cratchit',
      to: 'Mrs Cratchit',
      kind: 'husband and wife',
      note: "Mrs Cratchit calls Scrooge “an odious, stingy, hard, unfeeling man” but drinks his health for Bob's sake and the day's, showing both her anger and her loyalty.",
    },
    {
      from: 'Ebenezer Scrooge',
      to: 'Tiny Tim',
      kind: 'strangers, then second father',
      note: 'Scrooge asks the Spirit to “tell me if Tiny Tim will live” with what the narrator calls “an interest he had never felt before”: the poor he dismissed in Stave I now have a name and a face. By the end, the narrator says, he was a second father to him.',
    },
    {
      from: 'Ghost of Christmas Past',
      to: 'Ebenezer Scrooge',
      kind: 'guide through memory',
      note: 'Gentle but relentless, it makes Scrooge weep for his younger self and forces him to watch what he lost. He tries to put out its light and cannot.',
    },
    {
      from: 'Ghost of Christmas Present',
      to: 'Ebenezer Scrooge',
      kind: 'guide through the present',
      note: 'Warm and generous, it teaches Scrooge through what he sees, then turns his own words about the poor back on him.',
    },
    {
      from: 'Ghost of Christmas Yet to Come',
      to: 'Ebenezer Scrooge',
      kind: 'silent guide to the future',
      note: 'It never speaks. Its pointing hand leads Scrooge to his own grave, and it trembles only when he begs for the chance to change.',
    },
    {
      from: 'Ghost of Christmas Present',
      to: 'Ignorance and Want',
      kind: 'hidden beneath its robe',
      note: "The Spirit says the children are Man's, and that they cling to the Spirit itself, “appealing from their fathers”: the neglected children of society, hidden under the robe of Christmas plenty.",
    },
    {
      from: 'Fred',
      to: 'Bob Cratchit',
      kind: 'near strangers',
      note: "In Stave IV Fred, who has scarcely met Bob, stops him in the street to offer help after Tim's death: kindness that asks for nothing in return.",
    },
    {
      from: 'The charity collectors',
      to: 'Ebenezer Scrooge',
      kind: 'refused, then repaid',
      note: 'Scrooge sends them away with nothing in Stave I. In Stave V he finds one of them in the street and whispers a gift that includes “a great many back-payments”.',
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Priestley also sends a visitor to confront a comfortable, selfish household with the cost of its choices, so the two texts make a strong pairing for any question on social responsibility.',
    },
    {
      title: 'Strange Case of Dr Jekyll and Mr Hyde',
      href: '/revision/texts/jekyll-and-hyde',
      reason:
        'Another Victorian London novella with Gothic and supernatural elements, but where Dickens believes a man can change for the better, Stevenson shows a respectable man destroyed by the self he hides.',
    },
    {
      title: 'Great Expectations',
      href: '/revision/texts/great-expectations',
      reason:
        'A longer Dickens novel in which a young man is drawn away from the warmth and loyalty of home by the wish to become a gentleman, and has to learn their value again: another story of money set against love.',
    },
  ],

  contentGuidance: ['supernatural', 'mortality', 'mythological_religious', 'crime_injustice'],

  sources: [
    {
      label:
        'A Christmas Carol, Project Gutenberg eBook #46, held as a byte copy at src/data/full-texts/a-christmas-carol.ts: every quotation and its speaker, all three extracts (checked by script to be consecutive runs of the text), and every plot detail in the timeline, map and vocabulary',
      url: 'https://www.gutenberg.org/ebooks/46',
    },
    {
      label:
        'Wikipedia, A Christmas Carol: published by Chapman & Hall on 19 December 1843, and the chapters titled staves',
      url: 'https://en.wikipedia.org/wiki/A_Christmas_Carol',
    },
    {
      label:
        'Charles Dickens Info, A Christmas Carol: a second source for Chapman & Hall and 19 December 1843 (one blog gives 17 December; the two sources agree on the 19th)',
      url: 'https://www.charlesdickensinfo.com/christmas-carol/',
    },
    {
      label: 'Wiktionary, stave: a stanza, and the musical staff',
      url: 'https://en.wiktionary.org/wiki/stave',
    },
    { label: 'Wiktionary, carol', url: 'https://en.wiktionary.org/wiki/carol' },
    { label: 'Wiktionary, humbug', url: 'https://en.wiktionary.org/wiki/humbug' },
    { label: 'Wiktionary, countinghouse', url: 'https://en.wiktionary.org/wiki/countinghouse' },
    {
      label:
        "Dictionary.com (Collins, British senses), change: archaic sense, a place where merchants meet to transact business, for 'Change",
      url: 'https://www.dictionary.com/browse/change',
    },
    {
      label: 'Wikipedia, Royal Exchange, London: a centre of commerce for the City of London',
      url: 'https://en.wikipedia.org/wiki/Royal_Exchange,_London',
    },
    {
      label: 'Wiktionary, residuary legatee',
      url: 'https://en.wiktionary.org/wiki/residuary_legatee',
    },
    {
      label:
        'Wikipedia, An Essay on the Principle of Population: Malthus, 1798, population outgrowing subsistence',
      url: 'https://en.wikipedia.org/wiki/An_Essay_on_the_Principle_of_Population',
    },
    {
      label:
        'Wikipedia, Poor Law Amendment Act 1834: Poor Law Unions, relief in workhouses, conditions meant to deter all but the destitute',
      url: 'https://en.wikipedia.org/wiki/Poor_Law_Amendment_Act_1834',
    },
    {
      label: 'Wikipedia, Treadmill: penal treadmills introduced in 1818 by William Cubitt',
      url: 'https://en.wikipedia.org/wiki/Treadmill',
    },
    {
      label: 'Wikipedia, Bethlem Royal Hospital: origin of the word bedlam',
      url: 'https://en.wikipedia.org/wiki/Bethlem_Royal_Hospital',
    },
    {
      label: 'Wiktionary, comforter: a woollen scarf',
      url: 'https://en.wiktionary.org/wiki/comforter',
    },
    { label: 'Wiktionary, bob: a shilling', url: 'https://en.wiktionary.org/wiki/bob' },
    { label: 'Wiktionary, gruel', url: 'https://en.wiktionary.org/wiki/gruel' },
    { label: 'Wiktionary, fetter', url: 'https://en.wiktionary.org/wiki/fetter' },
    { label: 'Wiktionary, penance', url: 'https://en.wiktionary.org/wiki/penance' },
    { label: 'Wiktionary, negus', url: 'https://en.wiktionary.org/wiki/negus' },
    { label: 'Wiktionary, forfeit: the game sense', url: 'https://en.wiktionary.org/wiki/forfeit' },
    { label: 'Wiktionary, dowerless', url: 'https://en.wiktionary.org/wiki/dowerless' },
    {
      label: 'Wiktionary, engross: to absorb, and the obsolete sense of buying up the whole supply',
      url: 'https://en.wiktionary.org/wiki/engross',
    },
    { label: 'Wiktionary, avarice', url: 'https://en.wiktionary.org/wiki/avarice' },
    { label: 'Wiktionary, misanthropic', url: 'https://en.wiktionary.org/wiki/misanthropic' },
    {
      label:
        'Wikipedia, King cake: the English Twelfth cake, the bean and the pea, and its Victorian decline',
      url: 'https://en.wikipedia.org/wiki/King_cake',
    },
    {
      label: 'Wiktionary, Old Scratch: the Devil',
      url: 'https://en.wiktionary.org/wiki/Old_Scratch',
    },
    { label: 'Wiktionary, charwoman', url: 'https://en.wiktionary.org/wiki/charwoman' },
    { label: 'Wiktionary, milliner', url: 'https://en.wiktionary.org/wiki/milliner' },
    {
      label:
        'Wikipedia, Laocoön and His Sons: the Trojan priest and his sons attacked by sea serpents',
      url: 'https://en.wikipedia.org/wiki/Laoco%C3%B6n_and_His_Sons',
    },
    {
      label:
        'Wikipedia, Smoking Bishop: port, red wine, lemons or Seville oranges, sugar and spices such as cloves, the citrus roasted',
      url: 'https://en.wikipedia.org/wiki/Smoking_Bishop',
    },
    {
      label: 'Wikipedia, Teetotalism: the Preston Temperance Society and total abstinence, 1833',
      url: 'https://en.wikipedia.org/wiki/Teetotalism',
    },
    {
      label: 'Wiktionary, cant: empty, hypocritical talk',
      url: 'https://en.wiktionary.org/wiki/cant',
    },
    {
      label: 'Wiktionary, adamant: a legendary stone of virtually impenetrable hardness',
      url: 'https://en.wiktionary.org/wiki/adamant',
    },
    {
      label: 'Wiktionary, intercourse: communication, conversation, dealings with people',
      url: 'https://en.wiktionary.org/wiki/intercourse',
    },
    { label: 'Wiktionary, allegory', url: 'https://en.wiktionary.org/wiki/allegory' },
    {
      label:
        'Wikipedia, Ten Commandments: the prohibition of graven images (Exodus 20:4-6), for the note on idols',
      url: 'https://en.wikipedia.org/wiki/Ten_Commandments',
    },
  ],
}
