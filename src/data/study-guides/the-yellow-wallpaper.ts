import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Yellow Wall-Paper, Charlotte Perkins Gilman (first printed January 1892,
 * under the name Charlotte Perkins Stetson). A SUPPLEMENT: the page at
 * /resources/revision-notes/the-yellow-wallpaper already carries a plot
 * summary, context, themes, characters, key quotations, techniques (which cover
 * the journal form) and four exam questions with plans. This file adds what it
 * lacked: extracts for close reading, a glossary and a model paragraph, plus
 * the timeline and character map the animated visuals draw. Theme titles and
 * character names below are the page's own, so the two read as one guide.
 *
 * THE STORY IS NOT PRESCRIBED by any specification this site has verified (see
 * the note on its entry in src/lib/board/set-texts.ts). Everything here is
 * written for GCSE and A-level English Literature in general and names no
 * board, paper or tariff.
 *
 * EDITION. No byte copy is held in src/data/full-texts, so the test cannot
 * check these quotations. Every quotation, extract and annotated phrase was
 * copied from the first printing, New England Magazine, January 1892, pages
 * 647 to 656, using two independent witnesses:
 * - the TEI transcription in The Yellow Wall-Paper Digital Edition (Deanna
 *   Stover and Rebecca Norton), reading only its "periodical" witness; and
 * - the Newberry Library's scans of those ten pages on the Internet Archive,
 *   which were read for all three extracts and for the final lines.
 * The fact-check (26 September 2026) re-derived the periodical text from the
 * TEI file independently and read a second copy of the printing, the
 * Schlesinger Library (Harvard) scans at full resolution, for every extract:
 * all three match word for word and mark for mark. Extract 2 lies wholly on
 * page 652, not across 652 and 653.
 * Each quotation was then searched, normalised, in that 1892 text and in
 * Project Gutenberg eBook #1952, which prints a later text. All agree in
 * wording except where this file says otherwise.
 *
 * WHERE THE 1892 TEXT DIFFERS FROM MOST MODERN EDITIONS (found by a word-level
 * comparison with Gutenberg #1952, 26 September 2026), so that nobody "corrects"
 * this file back to a later printing:
 * - "nursery first and then playroom" (1892); Gutenberg reads "playground".
 * - "in spite of you and Jane?" (1892, confirmed on the scan of page 656);
 *   Gutenberg reads "Jane!".
 * - "seems to skulk about behind" (1892); Gutenberg reads "sulk".
 * - 1892 misprints "breaths" for breadths, "plaintain" (once) for plantain, and
 *   drops "had" from "John had to stay in town"; Gutenberg reads "John is to
 *   stay". None of these is quoted as a key phrase here.
 * - "The color is repellant": both texts spell it with an a.
 *
 * FOUND ON THE EXISTING PAGE, which this file does not edit (reported for its
 * owner, not fixed here):
 * - The hero badges read "Edexcel IGCSE" and "Prose Anthology"; the story is
 *   not in the verified anthology.
 * - page.tsx quotes "but it does exhaust me, having to be so sly about it";
 *   both texts read "it does exhaust me a good deal—having to be so sly about
 *   it", and the page tells students to learn it word for word.
 * - "The color is repellent" should be "repellant", as printed.
 * - "in spite of you and Jane. And I've pulled off..." has a full stop the
 *   story never had (1892 "?", later "!") and drops "said I" silently.
 * - "overruled 'for her own good'" puts in quotation marks words the story does
 *   not contain.
 * - "the most analysed symbol in American short fiction" is an unverifiable
 *   superlative, and the page names assessment objectives by number.
 */
export const guide: StudyGuide = {
  slug: 'the-yellow-wallpaper',
  title: 'The Yellow Wall-Paper',
  author: 'Charlotte Perkins Gilman',
  form: 'short-story',
  scope:
    "The whole story, about 6,000 words, written as twelve secret diary entries. Quotations and page numbers follow its first printing, in the New England Magazine for January 1892 (New Series, Volume 5, pages 647 to 656), where the entries are separated by rows of asterisks. Later printings, including Project Gutenberg's, differ from it in a few words and in punctuation; where that matters, this guide says so, and every extract gives its opening words so you can find it in any edition.",
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Charlotte Perkins Gilman (published as Charlotte Perkins Stetson), The Yellow Wall-Paper, New England Magazine, January 1892, pages 647 to 656; in the public domain. Quotations and extracts follow that first printing, as scanned by the Newberry Library and transcribed in The Yellow Wall-Paper Digital Edition by Deanna Stover and Rebecca Norton.',
  },
  workLength: {
    words: 6173,
    basis:
      'Counted from the 1892 periodical text as transcribed in The Yellow Wall-Paper Digital Edition, title and byline excluded, splitting hyphenated words as this site\'s counter does. Gilman\'s 1890 manuscript is headed "About 6000 words".',
  },

  native: {
    overview: '/resources/revision-notes/the-yellow-wallpaper',
    context: '/resources/revision-notes/the-yellow-wallpaper',
    themes: '/resources/revision-notes/the-yellow-wallpaper',
    characters: '/resources/revision-notes/the-yellow-wallpaper',
    keyQuotes: '/resources/revision-notes/the-yellow-wallpaper',
    languageAnalysis: '/resources/revision-notes/the-yellow-wallpaper',
    structureForm: '/resources/revision-notes/the-yellow-wallpaper',
    examPractice: '/resources/revision-notes/the-yellow-wallpaper',
  },

  extracts: [
    {
      title: 'The nursery and the paper',
      where: 'Entry 1, the end of the opening entry (1892 printing, pages 648 to 649)',
      pointer:
        'From “It is a big, airy room” to “he hates to have me write a word”, where the first entry breaks off. It follows the sentence “So we took the nursery at the top of the house.”',
      text: "It is a big, airy room, the whole floor nearly, with windows that look all ways, and air and sunshine galore. It was nursery first and then playroom and gymnasium, I should judge; for the windows are barred for little children, and there are rings and things in the walls.\n\nThe paint and paper look as if a boys' school had used it. It is stripped off—the paper—in great patches all around the head of my bed, about as far as I can reach, and in a great place on the other side of the room low down. I never saw a worse paper in my life.\n\nOne of those sprawling flamboyant patterns committing every artistic sin.\n\nIt is dull enough to confuse the eye in following, pronounced enough to constantly irritate and provoke study, and when you follow the lame uncertain curves for a little distance they suddenly commit suicide—plunge off at outrageous angles, destroy themselves in unheard of contradictions.\n\nThe color is repellant, almost revolting; a smouldering unclean yellow, strangely faded by the slow-turning sunlight.\n\nIt is a dull yet lurid orange in some places, a sickly sulphur tint in others.\n\nNo wonder the children hated it! I should hate it myself if I had to live in this room long.\n\nThere comes John, and I must put this away,—he hates to have me write a word.",
      annotations: [
        {
          phrase: 'the windows are barred for little children',
          note: 'The narrator explains the bars innocently, as a safety measure left over from the nursery. The reader is free to see them differently: a room fitted to stop children getting out is now the bedroom of a grown woman whose husband decides where she may go. Gilman lets the prison arrive disguised as a household detail, which is how control works all through the story.',
        },
        {
          phrase: 'rings and things in the walls',
          note: 'The jingle of “rings and things” brushes the detail aside, as if it were too trivial to look at. Rings fixed in a wall suggest something held or tied there, and the narrator declines to wonder what. Her breezy first-entry voice keeps doing this, noticing a disturbing fact and filing it under ordinary.',
        },
        {
          phrase: 'committing every artistic sin',
          note: 'She judges the pattern in moral, almost legal language, as if the paper were a wrongdoer. Design is something she claims to understand (later she says she knows “a little of the principle of design”), so the confident verdict shows an active, critical mind with nothing else to work on.',
        },
        {
          phrase: 'the lame uncertain curves',
          note: 'The curves are personified as weak and hesitant, and within a few words they “destroy themselves in unheard of contradictions”. The pattern behaves like a line of thought that cannot reach its end. One reading is that she is describing her own mind, forbidden to finish anything, so the paper carries from the start the collapse the story fears for her.',
        },
        {
          phrase: 'a smouldering unclean yellow',
          note: 'The description moves from disgust (“repellant”, “revolting”) to disease, “unclean” and, in the next sentence, “sickly sulphur”, so the yellow reads less as a colour than as a symptom and the room itself seems ill. Note the spelling “repellant”, which the 1892 printing and Gutenberg share: quote it as printed.',
        },
        {
          phrase: 'he hates to have me write a word',
          note: "The first entry does not so much end as stop: John's approach makes her put the page away, and the dash throws the weight onto the reason she gives. From the first page the reader holds a text that exists only because she disobeys him, which makes every later entry an act of quiet resistance.",
        },
      ],
      question:
        'Starting with this extract, explore how Gilman presents the nursery as a place of confinement. Write about how she presents the room in this extract, and how she develops it across the story as a whole.',
    },
    {
      title: 'The conversation by moonlight',
      where: 'Entry 5 (1892 printing, page 652)',
      pointer:
        "The entry opens “It is so hard to talk with John about my case”. The passage runs from “John was asleep and I hated to waken him” to John's question “Can you not trust me as a physician when I tell you so?”",
      text: "John was asleep and I hated to waken him, so I kept still and watched the moonlight on that undulating wallpaper till I felt creepy.\n\nThe faint figure behind seemed to shake the pattern, just as if she wanted to get out.\n\nI got up softly and went to feel and see if the paper did move, and when I came back John was awake.\n\n“What is it, little girl?” he said. “Don't go walking about like that—you'll get cold.”\n\nI thought it was a good time to talk, so I told him that I really was not gaining here, and that I wished he would take me away.\n\n“Why, darling!” said he, “our lease will be up in three weeks, and I can't see how to leave before.\n\n“The repairs are not done at home, and I cannot possibly leave town just now. Of course if you were in any danger, I could and would, but you really are better, dear, whether you can see it or not. I am a doctor, dear, and I know. You are gaining flesh and color, your appetite is better, I feel really much easier about you.”\n\n“I don't weigh a bit more,” said I, “nor as much; and my appetite may be better in the evening when you are here, but it is worse in the morning when you are away!”\n\n“Bless her little heart!” said he with a big hug, “she shall be as sick as she pleases! But now let's improve the shining hours by going to sleep, and talk about it in the morning!”\n\n“And you won't go away?” I asked gloomily.\n\n“Why, how can I, dear? It is only three weeks more and then we will take a nice little trip of a few days while Jennie is getting the house ready. Really dear you are better!”\n\n“Better in body perhaps—” I began, and stopped short, for he sat up straight and looked at me with such a stern, reproachful look that I could not say another word.\n\n“My darling,” said he, “I beg of you, for my sake and for our child's sake, as well as for your own, that you will never for one instant let that idea enter your mind! There is nothing so dangerous, so fascinating, to a temperament like yours. It is a false and foolish fancy. Can you not trust me as a physician when I tell you so?”",
      annotations: [
        {
          phrase: 'just as if she wanted to get out',
          note: 'This is the first time the figure seems to push against the pattern, and the first time the narrator calls it “she”. The wish she gives the figure, to get out, is the wish she is about to put to John in words. Gilman sets the two side by side so that the reader hears one request twice, once in fantasy and once in speech, and sees only the fantasy survive.',
        },
        {
          phrase: 'What is it, little girl?',
          note: "John's first words cast his wife as a child found out of bed in the night. Coming straight after she has watched a woman trying to escape, the endearment sets the terms of the whole conversation before she has spoken: a child can be soothed and sent back to bed, but does not have to be listened to.",
        },
        {
          phrase: 'I am a doctor, dear, and I know.',
          note: "One short sentence in John's long reply carries its whole argument. “Dear” sits inside a claim of professional expertise, so husband and physician speak with one voice. She cannot appeal from her husband to her doctor, because they are the same man, and that is the trap the story is built around.",
        },
        {
          phrase: 'Bless her little heart!',
          note: "John switches from “you” to “her” and “she”, talking about his wife as if to someone else while he holds her. The shift quietly removes her from her own conversation, and “she shall be as sick as she pleases” turns a real complaint into a child's whim to be indulged.",
        },
        {
          phrase: 'Better in body perhaps',
          note: 'Her one direct challenge is cut off by a dash and never finished. What she was about to say, that her mind is not better, is left for the reader to supply. Gilman shows silencing happen on the page: a single “stern, reproachful look” is enough, and she “could not say another word”.',
        },
        {
          phrase: 'Can you not trust me as a physician when I tell you so?',
          note: 'A question that cannot safely be answered no, because to distrust him would prove the “false and foolish fancy” he warns against. The rhetorical question closes the argument. The entry ends with the narrator lying awake for hours while John thinks she is asleep, trying to decide whether the two patterns move together or separately.',
        },
      ],
      question:
        'How does Gilman use dialogue in this conversation to present the balance of power in the marriage? Refer closely to the language of both speakers, and to what the narrator does not manage to say.',
    },
    {
      title: 'The ending',
      where: 'Entry 12, the final entry (1892 printing, page 656)',
      pointer:
        "From “I don't like to look out of the windows even” to the last line, “so that I had to creep over him every time!” It follows her account of peeling off all the paper she could reach and her thought of jumping out of the window. The 1892 printing misspells the first mention of the plantain leaf as “plaintain”; the second is spelt correctly.",
      text: "I don't like to look out of the windows even—there are so many of those creeping women, and they creep so fast.\n\nI wonder if they all come out of that wall-paper as I did?\n\nBut I am securely fastened now by my well-hidden rope—you don't get me out in the road there!\n\nI suppose I shall have to get back behind the pattern when it comes night, and that is hard!\n\nIt is so pleasant to be out in this great room and creep around as I please!\n\nI don't want to go outside. I won't, even if Jennie asks me to.\n\nFor outside you have to creep on the ground, and everything is green instead of yellow.\n\nBut here I can creep smoothly on the floor, and my shoulder just fits in that long smooch around the wall, so I cannot lose my way.\n\nWhy there's John at the door!\n\nIt is no use, young man, you can't open it!\n\nHow he does call and pound!\n\nNow he's crying for an axe.\n\nIt would be a shame to break down that beautiful door!\n\n“John dear!” said I in the gentlest voice, “the key is down by the front steps, under a plaintain leaf!”\n\nThat silenced him for a few moments.\n\nThen he said—very quietly indeed, “Open the door, my darling!”\n\n“I can't,” said I. “The key is down by the front door under a plantain leaf!”\n\nAnd then I said it again, several times, very gently and slowly, and said it so often that he had to go and see, and he got it of course, and came in. He stopped short by the door.\n\n“What is the matter?” he cried. “For God's sake, what are you doing!”\n\nI kept on creeping just the same, but I looked at him over my shoulder.\n\n“I've got out at last,” said I, “in spite of you and Jane? And I've pulled off most of the paper, so you can't put me back!”\n\nNow why should that man have fainted? But he did, and right across my path by the wall, so that I had to creep over him every time!",
      annotations: [
        {
          phrase: 'come out of that wall-paper as I did',
          note: 'The story turns on three words, “as I did”. Until now she has watched a woman behind the pattern; here, without comment, she says she came out of it herself. The slip tells the reader that watcher and watched have merged, and it is delivered as a casual question, which is more unsettling than a confession would be.',
        },
        {
          phrase: 'everything is green instead of yellow',
          note: "The story's values are turned inside out. Green, the colour of the garden and the “lovely lane” she once walked in, is now the thing to avoid, and the yellow she found revolting in the first entry is where she feels at home. The reader measures how far she has travelled by how completely her preferences have reversed.",
        },
        {
          phrase: 'my shoulder just fits in that long smooch',
          note: 'In Entry 8 she wondered who had made the long, even streak round the wall, “and what they did it for”. Here the answer arrives without her noticing: her own body fits the groove. Gilman lets the reader solve a mystery the narrator cannot, which is the unreliable narrator at its most chilling.',
        },
        {
          phrase: "It is no use, young man, you can't open it!",
          note: 'John called her “little girl” in the moonlit conversation; now she calls him “young man”, the tone of an adult correcting a child. The power of naming has changed hands. She has locked the door herself, so the room that confined her now shuts him out, and her confident exclamation shows how safe she feels inside her own confinement.',
        },
        {
          phrase: 'in spite of you and Jane?',
          note: "No one called Jane has appeared. One reading takes it as a slip for Jennie; another takes it as the narrator's own name, so that the self she has escaped is her former one. Many readers prefer the second, because the whole sentence is about getting out, but either can be argued. The 1892 printing ends the phrase with a question mark; Gilman's 1890 manuscript and later texts, including Project Gutenberg's, have an exclamation mark, so name your edition if you argue from the punctuation.",
        },
        {
          phrase: 'creep over him every time',
          note: "The last image is circular: she keeps creeping round the room, and the fallen husband becomes an obstacle in her path. The man who planned every hour of her day is now something in the way. Gilman's 1890 manuscript, as transcribed in the digital edition, ends at “creep over him”; the 1892 printing adds “every time”, turning one act into an endless routine.",
        },
      ],
      question:
        'How does Gilman make the ending of the story both disturbing and open to more than one interpretation? Refer closely to this extract and to the earlier moments it recalls.',
    },
  ],

  vocabulary: [
    {
      term: 'untenanted',
      definition:
        'Not let to a tenant; unoccupied. The narrator asks why the house has “stood so long untenanted”, the first hint of a Gothic mystery that the story then declines to supply.',
    },
    {
      term: 'felicity',
      definition:
        "Happiness. “The height of romantic felicity” is the narrator's joke about living in a haunted house, a Gothic daydream she dismisses at once as “asking too much of fate”.",
    },
    {
      term: 'hysterical tendency (hysteria)',
      definition:
        "A diagnosis much used in the nineteenth century and now discredited, applied to a wide range of distress in women and once blamed on the womb (the word comes from the Greek for it). John's “slight hysterical tendency” names her illness in a way that can make her own account of it seem unreliable before she speaks.",
    },
    {
      term: 'phosphates or phosphites',
      definition:
        'Chemical compounds (salts) of two phosphorus acids, part of the medicine she is given. She cannot remember which (“whichever it is”), a small sign that treatment is done to her rather than explained to her.',
    },
    {
      term: 'rest cure',
      definition:
        "The treatment associated with the Philadelphia physician Silas Weir Mitchell (1829 to 1914), whom the story names: isolation, bed rest, heavy feeding, massage and electrical treatment, with intellectual work discouraged. Gilman was his patient in 1887. The phrase never appears in the story, but John's regime of “perfect rest” follows its pattern.",
    },
    {
      term: 'neurasthenia',
      definition:
        "A dated, loosely defined diagnosis of fatigue, headache and irritability, associated with emotional disturbance. It is Gilman's own word in her 1913 essay on why she wrote the story; the story itself calls the condition “temporary nervous depression”.",
    },
    {
      term: 'piazza',
      definition:
        'In older American usage, especially in New England, a veranda or porch. The room she wanted “opened on the piazza” and had roses at the window: light, air and a way out, all refused.',
    },
    {
      term: 'chintz',
      definition:
        'Painted or stained cotton (calico) with bright designs, first made in India. The “pretty old-fashioned chintz hangings” of the room she wanted contrast with the torn paper of the room she is given.',
    },
    {
      term: 'querulous',
      definition:
        'Complaining, fretful. She calls herself “fretful and querulous”, describing her feelings in the language of someone judging her from outside.',
    },
    {
      term: 'breadth',
      definition:
        'A strip of wallpaper (or fabric) of standard width, hung side by side with the next. She notes that the pattern repeats “by the breadths” and that “They have used a horizontal breadth for a frieze”.',
    },
    {
      term: 'frieze',
      definition:
        'An ornamented horizontal band along a wall, usually near the top. Here it is a strip of the same paper laid sideways, which only adds to the confusion she is trying to master.',
    },
    {
      term: 'debased Romanesque',
      definition:
        'Romanesque names a style of European art and architecture of roughly the eleventh and twelfth centuries, before Gothic; debased means degraded. Her mock art-critic label, and the joke that follows it, show her trying to conquer the pattern with learning.',
    },
    {
      term: 'delirium tremens',
      definition:
        'A severe, dangerous state of confusion and agitation caused by withdrawal from alcohol. She gives the diagnosis to the wallpaper, not to herself, which is telling, since hers are the perceptions coming apart.',
    },
    {
      term: 'fatuity',
      definition:
        'Foolishness, stupidity. The curves “go waddling up and down in isolated columns of fatuity”: comic, contemptuous language that shows she can still mock what she cannot escape.',
    },
    {
      term: 'arabesque',
      definition:
        'An elaborate design of intertwined plant forms or geometric patterns, associated especially with Islamic art. The outer pattern is “a florid arabesque, reminding one of a fungus”, ornament turned into growth and rot.',
    },
    {
      term: 'mopboard',
      definition:
        'American for skirting board. The long streak on the wall runs low down near the mopboard, at a height the ending explains.',
    },
    {
      term: 'smooch',
      definition:
        "An old form of smutch: a smear or smudge. Jennie finds “yellow smooches” on the narrator's clothes and John's, and the “long, straight, even smooch” round the wall is the story's most important clue.",
    },
    {
      term: 'plantain',
      definition:
        'A common low-growing weed with broad leaves, not the banana-like fruit. The key lies under a plantain leaf by the front steps, an everyday detail she repeats calmly while John pounds on the door.',
    },
    {
      term: 'sticketh closer than a brother',
      definition:
        'An echo of the King James Bible, Proverbs 18:24: “there is a friend that sticketh closer than a brother”. She applies it to the torn wallpaper, which clings so hard that the children must have torn at it with “perseverance as well as hatred”, a joke that also says the paper will not let go.',
    },
    {
      term: 'unreliable narrator',
      definition:
        "A narrator whose account the reader learns not to take at face value. This one reports facts accurately but misreads them (the smooch, the gnawed bedstead, John's faint), so the reader understands more than she does.",
    },
  ],

  modelAnswer: {
    question:
      "Starting with the conversation by moonlight in Entry 5, explore how Gilman presents John's power over the narrator in The Yellow Wall-Paper.",
    paragraph:
      "Gilman shows that John's power works less through force than through a way of speaking that makes his wife's words impossible to hear. When he finds her out of bed in the night, he greets her as “little girl”, and when she asks to leave and contradicts his account of her health he replies, “Bless her little heart!”, slipping into the third person as if she were a child being discussed over her head. The repeated “little” shrinks an adult woman into a child, which is exactly what the barred nursery has already done to her physically. His decisive move is to fuse his two roles in one sentence: “I am a doctor, dear, and I know.” The endearment sits inside the claim of expertise, so affection and medical authority become a single voice she cannot argue with. Gilman then lets the reader watch the silencing happen: “Better in body perhaps—” is broken off by a dash the moment he gives her one “stern, reproachful look”, and the sentence is never finished. Read beside Gilman's 1913 account of a specialist who told her to live “as domestic a life as far as possible”, the scene is sharper than a portrait of one bad husband. It shows what such advice sounds like when it is spoken tenderly, in bed, by someone who loves you, which is why John may frighten a reader more than a villain would.",
    commentary: [
      "It opens with an argument about how John's power works, not with a summary of what he does, and every later sentence is evidence for that argument.",
      'The quotations are short and built into the sentences, and each one is analysed at the level of a single word or mark: the repeated “little”, the endearment inside the claim of expertise, the dash that cuts her off.',
      "It links a detail of language to the story's setting (the barred nursery), which shows a view of the whole text rather than of one scene.",
      "Context is used to sharpen the reading rather than bolted on at the end, and it is attributed precisely to Gilman's 1913 essay instead of being stated as vague background.",
      "It ends with a judgement about the reader's response, worded as an interpretation (John may frighten a reader, not that he does), which is what separates an argued answer from a list of points.",
    ],
  },

  timeline: [
    {
      where: 'Entry 1 (1892 printing, pages 647 to 648)',
      title: 'A summer in an ancestral hall',
      summary:
        'The narrator and her husband John, a physician, have taken an old colonial mansion for the summer. He insists she has nothing worse than a temporary nervous depression and forbids her to work, so she writes this journal in secret.',
      setting: 'A rented colonial mansion, three miles from the village',
      who: ['The Narrator', 'John'],
      quote:
        'Personally, I believe that congenial work, with excitement and change, would do me good.',
      themes: ['Patriarchal Control and Medicine', 'Writing, Voice and Silencing'],
      tension: 2,
      significance:
        'Her own prescription, work and company, is stated on the first page and refused, so the reader knows from the start what she believes she needs.',
    },
    {
      where: 'Entry 1 (1892 printing, pages 648 to 649)',
      title: 'The nursery at the top of the house',
      summary:
        'She wanted a pretty downstairs room opening on the piazza, but John chooses the big nursery at the top of the house, with barred windows, rings in the walls and a torn yellow paper she hates on sight. The entry breaks off as John approaches.',
      setting: 'The upstairs nursery',
      who: ['The Narrator', 'John'],
      quote: 'I never saw a worse paper in my life.',
      themes: ['Confinement and the Domestic Prison', 'Writing, Voice and Silencing'],
      tension: 2,
      significance:
        'The room that holds the whole story is chosen for her, and its first description already mixes the nursery with the prison.',
    },
    {
      where: 'Entry 2 (1892 printing, pages 649 to 650)',
      title: 'A blessed little goose',
      summary:
        'Two weeks on, she feels a burden to John and cannot bear to be with her baby, whom Mary looks after. John refuses to repaper the room or move her downstairs, and his sister Jennie keeps house. Behind the pattern she first makes out a formless figure.',
      setting: 'The nursery, by day',
      who: ['The Narrator', 'John', 'Jennie', 'Mary', 'The baby'],
      quote: 'This paper looks to me as if it knew what a vicious influence it had!',
      themes: [
        "Motherhood and the 'Hysterical' Woman",
        'Patriarchal Control and Medicine',
        'The Double and the Gothic',
      ],
      tension: 2,
      significance:
        'Her wish to change the room is treated as a symptom, and the paper begins to seem alive at the moment her wishes are overruled.',
    },
    {
      where: 'Entry 3 (1892 printing, pages 650 to 651)',
      title: 'The threat of Weir Mitchell',
      summary:
        'After a Fourth of July visit from family, John warns that he will send her to Weir Mitchell in the autumn if she does not recover faster. She cries when alone, lies on the great bed, which is nailed down, and tries for hours to follow the pattern to a conclusion.',
      setting: 'The nursery, after a family visit',
      who: ['The Narrator', 'John', 'Jennie'],
      quote: "John says if I don't pick up faster he shall send me to Weir Mitchell in the fall.",
      themes: ['Patriarchal Control and Medicine', 'Madness as Descent and Escape'],
      tension: 3,
      significance:
        "Gilman names a real doctor, tying the fiction to a treatment her readers could recognise, and studying the pattern becomes the narrator's only occupation.",
    },
    {
      where: 'Entry 4 (1892 printing, pages 651 to 652)',
      title: 'The woman behind the pattern',
      summary:
        'Writing now costs more effort than it gives relief. She asks to visit Cousin Henry and Julia, but John says she is not able, and she is crying before she can finish. In the paper the dim shapes grow clearer: always the same shape, repeated many times, like a woman stooping and creeping behind the pattern.',
      setting: 'The nursery',
      who: ['The Narrator', 'John', 'The Woman in the Wallpaper'],
      quote: 'But the effort is getting to be greater than the relief.',
      themes: ['Writing, Voice and Silencing', 'The Double and the Gothic'],
      tension: 3,
      significance:
        'As her own writing weakens, the figure in the paper grows clearer, as if her voice were moving from the page to the wall.',
    },
    {
      where: 'Entry 5 (1892 printing, pages 652 to 653)',
      title: 'The conversation by moonlight',
      summary:
        'Watching the moonlit paper, she sees the figure shake the pattern as if trying to get out. When she gets up to feel it, John wakes, and she asks him to take her away; he refuses, insists she is better, and silences her with a look when she hints that her mind is not.',
      setting: 'The nursery at night, in moonlight',
      who: ['The Narrator', 'John', 'The Woman in the Wallpaper'],
      quote: 'I am a doctor, dear, and I know.',
      themes: ['Patriarchal Control and Medicine', 'Writing, Voice and Silencing'],
      tension: 4,
      significance:
        'Her last direct attempt to be heard fails, and from here she stops asking and starts watching.',
    },
    {
      where: 'Entries 6 and 7 (1892 printing, page 653)',
      title: 'It becomes bars',
      summary:
        'At night the front pattern becomes bars and the woman behind it is plain to see. She hides that she is awake, suspects John and Jennie of studying the paper, and hears Jennie complain of yellow smooches on their clothes. With something to watch, she eats better, and John is pleased.',
      setting: 'The nursery, by day and by night',
      who: ['The Narrator', 'John', 'Jennie', 'The Woman in the Wallpaper'],
      quote: 'The fact is I am getting a little afraid of John.',
      themes: ['Confinement and the Domestic Prison', 'Madness as Descent and Escape'],
      tension: 3,
      significance:
        'The prison image is now explicit, and her apparent recovery is the clearest sign of how ill she has become.',
    },
    {
      where: 'Entries 8 and 9 (1892 printing, pages 653 to 654)',
      title: 'A yellow smell',
      summary:
        'A week of fog and rain brings a yellow smell that seems to follow her through the house. She notices a long, even streak rubbed round the wall near the mopboard and wonders who made it, then decides the woman behind is shaking the front pattern.',
      setting: 'The nursery and the rest of the house',
      who: ['The Narrator', 'The Woman in the Wallpaper'],
      quote: 'Round and round and round—round and round and round—it makes me dizzy!',
      themes: ['Madness as Descent and Escape', 'The Double and the Gothic'],
      tension: 4,
      significance:
        'The streak is a clue the reader can solve before the narrator does, and the final entry supplies the answer.',
    },
    {
      where: 'Entries 10 and 11 (1892 printing, pages 654 to 655)',
      title: 'Creeping by daylight',
      summary:
        'She believes the woman now gets out in the daytime and sees her creeping along the lane, round the garden and on the road. She creeps too, behind a locked door, and plans to get the top pattern off before they leave in two days.',
      setting: 'The nursery windows, looking out on the lane, the garden and the road',
      who: ['The Narrator', 'The Woman in the Wallpaper', 'John', 'Jennie'],
      quote: 'It does not do to trust people too much.',
      themes: ['The Double and the Gothic', 'Madness as Descent and Escape'],
      tension: 4,
      significance:
        'Narrator and woman now do the same thing, and her secrecy has turned from hiding her writing to hiding herself.',
    },
    {
      where: 'Entry 12 (1892 printing, pages 655 to 656)',
      title: 'The last night',
      summary:
        'With John kept in town overnight, she persuades Jennie to leave her alone and, when the moon comes up, helps the woman peel off yards of paper. Next day the room is emptied; she locks herself in, throws the key into the front path and tears off all the paper she can reach.',
      setting: 'The emptied nursery',
      who: ['The Narrator', 'Jennie', 'The Woman in the Wallpaper'],
      quote: 'I pulled and she shook, I shook and she pulled',
      themes: [
        'The Double and the Gothic',
        'Madness as Descent and Escape',
        'Confinement and the Domestic Prison',
      ],
      tension: 5,
      significance:
        'The mirrored clauses make the two women one pair of hands, preparing for the final merging.',
    },
    {
      where: 'Entry 12, the final lines (1892 printing, page 656)',
      title: "I've got out at last",
      summary:
        'John finds the door locked and, after she tells him again and again where the key is, lets himself in. She keeps creeping round the room, tells him she has got out and cannot be put back, and when he faints she creeps over him each time she passes.',
      setting: 'The locked nursery',
      who: ['The Narrator', 'John'],
      quote: 'I kept on creeping just the same, but I looked at him over my shoulder.',
      themes: ['Madness as Descent and Escape', 'Patriarchal Control and Medicine'],
      tension: 5,
      significance:
        'The ending is both a breakdown and a reversal of power, and the strongest answers keep both readings in view.',
    },
  ],

  relationships: [
    {
      from: 'The Narrator',
      to: 'John',
      kind: 'wife and husband; patient and physician',
      note: 'His care is his control: he plans every hour of her day, calls her “little girl” and “a blessed little goose”, and treats her wishes as symptoms. By the end the roles invert: she calls him “young man”, and he faints.',
    },
    {
      from: 'The Narrator',
      to: 'The Woman in the Wallpaper',
      kind: 'the self and its double',
      note: 'A formless figure becomes a woman, then many women, then the narrator herself, who wonders if they all came out of the paper “as I did”. In one reading, freeing the woman and losing herself turn out to be the same act.',
    },
    {
      from: 'The Narrator',
      to: 'Jennie',
      kind: 'sisters-in-law; the watched and the watcher',
      note: 'Jennie is kind and conventional, a “perfect and enthusiastic house-keeper” whom the narrator suspects of thinking the writing made her ill. The narrator hides her journal from her and later distrusts her, calling her “the sly thing”.',
    },
    {
      from: 'John',
      to: 'Jennie',
      kind: 'brother and sister',
      note: 'Jennie runs the house while John is in town and answers his “professional questions” about the narrator, so to the narrator they come to look like a pair of watchers.',
    },
    {
      from: 'The Narrator',
      to: 'The baby',
      kind: 'mother and son',
      note: "She writes “Such a dear baby!” yet cannot be with him because it makes her so nervous, and is relieved he does not have to sleep in the nursery. Her sense of failing in her duty is something John's treatment never addresses.",
    },
    {
      from: 'Mary',
      to: 'The baby',
      kind: 'carer and child',
      note: 'Mary looks after the baby (“It is fortunate Mary is so good with the baby”), taking on the role the narrator is expected to fill and cannot.',
    },
  ],

  compareWith: [
    {
      title: 'The Story of an Hour (Kate Chopin)',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        "Published two years later, in 1894, another very short American story that takes the reader inside a wife's mind while the people around her misread her, and in both a husband coming through a door brings the ending.",
    },
    {
      title: 'Jane Eyre (Charlotte Brontë)',
      href: '/resources/revision-notes/jane-eyre',
      reason:
        "Bertha Mason, Rochester's wife, is kept on the third storey at Thornfield; reading the two together sharpens the question of who calls a woman mad, and why.",
    },
    {
      title: 'The Woman in Black (Susan Hill)',
      href: '/resources/revision-notes/woman-in-black',
      reason:
        'A ghost story that keeps the Gothic house and makes the haunting real; set beside Gilman, where nothing supernatural happens, it shows two different sources of horror.',
    },
  ],

  contentGuidance: ['mental_health', 'supernatural', 'discrimination'],

  quotesFromElsewhere: [
    'as domestic a life as far as possible',
    'there is a friend that sticketh closer than a brother',
    'About 6000 words',
  ],

  sources: [
    {
      label:
        'The Yellow Wall-Paper Digital Edition (Deanna Stover and Rebecca Norton, Southern Illinois University Edwardsville), TEI transcription of the 1890 manuscript and the January 1892 New England Magazine printing, read for the 1892 wording, page breaks, entry breaks and manuscript variants',
      url: 'https://yellowwallpaperedition.com/xml/edition.xml',
    },
    {
      label:
        'The Yellow Wall-Paper, New England Magazine, January 1892, pages 647 to 656: Newberry Library scans on the Internet Archive, read for all three extracts and the final lines (including "Jane?")',
      url: 'https://archive.org/details/a5_115_1892',
    },
    {
      label:
        'The same ten pages in a second copy of the January 1892 printing, Schlesinger Library, Harvard (Gilman papers, folder 260), full-resolution scans read by the fact-checker on 26 September 2026 to confirm all three extracts word for word and mark for mark, including "Jane?" and "plaintain" on page 656 and that the moonlit conversation falls wholly on page 652',
      url: 'https://ids.lib.harvard.edu/ids/view/13725865',
    },
    {
      label:
        'Recovery Hub for American Women Writers, showcase of the digital edition, for what the edition contains',
      url: 'https://recoveryhub.siue.edu/2023/03/08/the-yellow-wall-paper-digital-edition/',
    },
    {
      label:
        'Project Gutenberg eBook #1952, The Yellow Wallpaper: a later text, compared word by word with the 1892 printing to find the variants noted here',
      url: 'https://www.gutenberg.org/ebooks/1952',
    },
    {
      label:
        'Burnside Rare Books listing, for the volume: New England Magazine, New Series Vol. 5, Old Series Vol. 11, September 1891 to February 1892',
      url: 'https://www.burnsiderarebooks.com/pages/books/140947683/charlotte-perkins-stetson-gilman/the-yellow-wall-paper-in-new-england-magazine-an-illustrated-monthly-new-series-vol-5-old-series-vol',
    },
    {
      label:
        'Gilman, Why I Wrote The Yellow Wallpaper?, The Forerunner, October 1913: TEI transcription in the digital edition (source of the 1887 date, the domestic-life advice and the word neurasthenia)',
      url: 'https://yellowwallpaperedition.com/xml/forerunner.xml',
    },
    {
      label:
        'The same essay on Wikisource, a second transcription agreeing on every phrase quoted here',
      url: 'https://en.wikisource.org/wiki/Why_I_Wrote_The_Yellow_Wall-Paper',
    },
    {
      label:
        'Wikipedia, Silas Weir Mitchell (physician): dates, Philadelphia, the content of the rest cure, Gilman as his patient in 1887',
      url: 'https://en.wikipedia.org/wiki/Silas_Weir_Mitchell_(physician)',
    },
    {
      label:
        'Wikipedia, The Yellow Wallpaper: publication and the history of hysteria as a diagnosis',
      url: 'https://en.wikipedia.org/wiki/The_Yellow_Wallpaper',
    },
    {
      label:
        'Wikipedia, The Story of an Hour: written April 1894 and first published in Vogue on 6 December 1894, for the comparison date',
      url: 'https://en.wikipedia.org/wiki/The_Story_of_an_Hour',
    },
    {
      label: 'King James Bible, Proverbs 18:24, on Wikisource',
      url: 'https://en.wikisource.org/wiki/Bible_(King_James)/Proverbs',
    },
    {
      label:
        'Wiktionary entries used for the glossary: untenanted, felicity, hysteria, phosphate, phosphite, neurasthenia, piazza, chintz, querulous, breadth, frieze, Romanesque, delirium tremens, fatuity, arabesque, mopboard, smooch, plantain',
      url: 'https://en.wiktionary.org/',
    },
  ],
}
