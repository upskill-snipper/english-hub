import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * La Belle Dame sans Merci, John Keats. A supplement: the page at
 * /igcse/edexcel/poetry/la-belle-dame-sans-merci keeps its overview, context,
 * key quotations, language analysis and form and structure, and this file adds
 * themes, the poem's figures, passages for close reading, vocabulary, exam
 * practice and a model answer, mounted below it.
 *
 * TWO TEXTS OF THE POEM, AND WHICH ONE THE STUDENT HAS. The anthology (Issue 8,
 * February 2026, pages 60 to 61), read from the Pearson PDF on 25 September
 * 2026 and again, line by line, on 26 September, prints the earlier
 * "knight-at-arms" text, the one the Poetry Foundation prints from Penguin's
 * Selected Poems (1988), and not the revised text of The Indicator (10 May
 * 1820), which opens with a "wretched wight". The page above this supplement
 * says the opposite in its version note, which calls the anthology's text the
 * Indicator version; that note is wrong. Its poem viewer and summary also print
 * "Hath thee in thrall", where the anthology has "Thee hath in thrall". Neither
 * is corrected here, because this file does not edit that page; the tips below
 * tell the student to quote the anthology.
 *
 * The edition held in src/data/full-texts is Sidney Colvin's text (Project
 * Gutenberg #36356). It is also a knight-at-arms text, but it differs from the
 * anthology in wording at eleven points: "is withered" for "has withered"
 * (stanza I), "cheek" for "cheeks" (III), "sideways would she lean" for
 * "sidelong would she bend" (VI), "gazed" for "wept" (VIII), "lulled" and
 * "dreamed" for "lullèd" and "dreamt" (IX), "Who cried" and "Hath thee" for
 * "They cried" and "Thee hath" (X), and "starv'd", "gaped" and "hill side" for
 * "starved", "gapèd" and "hill's side" (XI). So every quotation here was chosen
 * from words the two texts share and checked against both, except the phrases
 * in quotesFromElsewhere: two are the anthology's own wording where Colvin
 * differs ("has withered", "Thee hath in thrall"), and the rest come from the
 * 1820 text, Keats's letter, the anthology's footnote, or the partner poems,
 * each checked against the anthology and the held edition of that poem.
 *
 * Extracts A and B print the anthology's punctuation, which the test allows
 * because it compares words, except that the anthology's single inverted commas
 * round the lady's words in line 35 are printed here as double ones: the test
 * keeps apostrophes, and Colvin prints those words with no marks at all.
 * Extract C, stanzas X to XII, is where the two texts differ most, so it is
 * pointed to and summarised rather than printed in a wording that is not the
 * student's.
 *
 * LINE NUMBERS. The anthology's margin numbers count the Roman numeral above
 * each stanza as a line, so the 48 lines of verse run to line 60. References
 * here follow the anthology; the summary on the page above numbers the verse
 * alone, 1 to 48.
 *
 * DATES THIS FILE DOES NOT GIVE. The page above dates the poem to 21 April
 * 1819; Scudder's 1899 headnote says the letter entry was 28 April. The letter
 * as a whole ran from 14 February to 3 May 1819, so this file says April 1819
 * and no day.
 */
export const guide: StudyGuide = {
  slug: 'la-belle-dame-sans-merci',
  title: 'La Belle Dame sans Merci',
  author: 'John Keats',
  form: 'poem',
  scope:
    'The whole poem, as printed on pages 60 to 61 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3, for English Literature (4ET1) Paper 1, Section B. The anthology prints the earlier text of the poem, the one that opens with a knight-at-arms, in twelve four-line stanzas headed I to XII. Its margin line numbers count each Roman numeral as a line, so stanza I ends at line 5 and stanza XII at line 60. Line references here follow those numbers; a guide that numbers only the 48 lines of verse will give different figures.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      "John Keats (1795-1821); out of copyright. Line and stanza references follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), pages 60 to 61. Quotations are also checked against the text printed in Sidney Colvin's Life of John Keats: His Life and Poetry, His Friends, Critics and After-Fame, Project Gutenberg eBook #36356.",
  },
  workLength: {
    words: 290,
    lines: 48,
    basis:
      "Counted from the anthology printing on pages 60 to 61 (Issue 8, February 2026), read from the Pearson PDF on 25 September 2026: 48 lines of verse in twelve stanzas, words counted with the validator's rule (hyphenated words split), the stanza numerals and the manna footnote excluded.",
  },

  native: {
    overview: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    context: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    keyQuotes: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    languageAnalysis: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    structureForm: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
  },

  themes: [
    {
      title: 'Love as enchantment',
      body: "Keats tells a love story as though it were a spell. From the moment the knight meets the lady his attention narrows, until he “nothing else saw all day long” (stanza VI, line 28), and the grammar of the middle stanzas shows his will passing to her. In stanzas V and VI he is the one who acts: “I made a garland for her head”, “I set her on my pacing steed”. From stanza VII she acts and he receives: “She found me roots of relish sweet”, “She took me to her elfin grot”, and she lulls him to sleep. The pale kings' word for his condition is “in thrall”, which means enslaved. One reading is that Keats presents love itself as an enchantment: sweet, absorbing, and fatal to the lover's independence. A more sceptical reading is that the enchantment is the knight's own desire, and that the lady is the surface he projects it on, since every sign of her love, from how she “looked” to what she “said”, comes to us through his interpretation. The second reading arguably fits the details more closely; the first fits the ballad's fairy-tale surface. A strong answer shows how the poem allows both, and says which it finds more convincing.",
    },
    {
      title: 'Beauty and danger',
      body: "The lady is introduced in the language of conventional beauty, “Full beautiful”, with long hair and a light step, and then the short fourth line of stanza IV breaks the pattern: “And her eyes were wild” (line 20). The word keeps returning, in “honey wild” (line 33) and “wild wild eyes” (line 39), as if her nature shows through the knight's memory however he describes her. The title casts her as a femme fatale, the beautiful woman whose love destroys, and many readers take her as exactly that. Yet the poem never shows her doing harm. In her grot she weeps and “sighed full sore” (line 38), and we are never told why. Her name is not given by her but by the pale kings of the knight's dream (stanza X). One reading is that she is a supernatural predator whose earlier victims return to warn the next. Another is that she is simply other, a faery's child acting according to her nature, whom the knight misreads, and that without mercy is the verdict of men who wanted something from her. Her tears might then be sorrow for what she cannot help. Because Keats never lets her speak in her own voice, neither reading can be proved; the best answers say so, and still argue for one.",
    },
    {
      title: 'Illness, decay and death',
      body: "The questioner reads the knight's face as a doctor or a mourner might: “I see a lily on thy brow, / With anguish moist and fever-dew” (lines 12 to 13). The lily suggests both the whiteness of a sick face and the flowers of a funeral; “a fading rose” (line 14) is the colour leaving his cheeks, and it “Fast withereth too” (line 15), which ties his body to the withered sedge of stanza I. In the dream the kings and warriors are “death-pale” (line 48), and the knight calls it “The latest dream” (line 44) he ever had, where latest can mean last as well as most recent. Keats knew illness closely. He had trained in medicine at Guy's Hospital; his mother died of tuberculosis in 1810; and his brother Tom died of it on 1 December 1818, after Keats had nursed him, four or five months before Keats wrote this poem in April 1819. One reading therefore sees the pallor, the sweating and the wasting as symptoms Keats had watched at a bedside, and the lady as a figure for a desire, or a disease, that drains the life from a young man. That reading is attractive but biographical, and the poem cannot prove it. Use it to sharpen a point about the words, never in place of one.",
    },
    {
      title: 'Nature and the seasons',
      body: "The poem opens late in the year. The sedge “has withered” (line 4), “no birds sing” (line 5), and “The squirrel's granary is full, / And the harvest's done” (lines 9 to 10). Nature has gathered its store for winter; the knight alone has nothing, out of step with a world that has finished its work. The remembered love story, by contrast, is set in “the meads” (line 17) and is full of nature's gifts: flowers for a garland and a “fragrant zone”, “roots of relish sweet”, “honey wild”. The lady belongs to this wild, abundant side of nature, and when she has gone the knight is left with its dead side. Birdsong is the telling detail. The only song in the whole poem is hers, “A faery's song” (line 30); in the first stanza and the last, “no birds sing”. One reading is simple pathetic fallacy: the landscape mirrors the knight's desolation. A more interesting reading is that nature is indifferent to him. The squirrel's full store shows the natural world carrying on, well provided for, while the knight wastes away beside it, and that contrast is lonelier than any mirror.",
    },
    {
      title: 'Dream and an unreliable story',
      body: "Nearly everything in the poem reaches us through the knight's memory, and he is not a reliable witness. He reports how the lady “looked” (line 24), not what she felt, and her declaration of love comes in a “language strange” (line 34), unfamiliar to him, yet he is “sure” what it meant. The climax is a dream, and the warning that explains his ruin arrives inside it. The questioner of stanzas I to III gives the only outside view, and it sees symptoms, not causes. So the reader cannot tell whether the lady was real, a dream, or a fantasy shaped by desire. The final stanza claims a cause: “And this is why I sojourn here” (line 57). But the explanation is thin. Why should a dream keep him on the hill? One reading is that the spell is still working; another is that he is waiting for her to return; a third is that, having known this desire, he cannot go back to an ordinary life. The poem refuses to choose, and that refusal is a large part of why it haunts its readers.",
    },
    {
      title: 'Isolation and entrapment',
      body: "The knight is “Alone and palely loitering” in the first stanza and again in the last (lines 3 and 58), and because the landscape around those words is repeated too, the ending is a return to the beginning. The circular structure becomes a kind of prison. His title, knight-at-arms, belongs to a world of lords, quests and companions, but he has none of them: no battle, no service, and no one with him except the stranger who finds him. Loitering is the word for someone who hangs about without purpose, and sojourn, a word for a short stay, becomes ironic when nothing suggests he will ever leave. Once the lady has gone, the only company his story offers him is the pale kings, princes and warriors of his dream, who share his condition. One reading is that he is trapped by an enchantment that has outlasted the enchantress; another is that he is trapped by grief and memory, unable to leave the place where he last saw her. The short fourth line of every stanza deepens the effect, cutting each stanza off as if the knight's voice, and the world around him, were running down.",
    },
  ],

  characters: [
    {
      name: 'The questioner',
      role: 'The unnamed voice of stanzas I to III',
      body: "We learn nothing about the questioner except what they notice. They ask the same question twice, “O what can ail thee, knight-at-arms” (lines 2 and 7), and then examine the knight's face with a doctor's attention: the lily, the fever-dew, the fading rose. Their stanzas also paint the landscape, so our first picture of the knight is set against withered sedge, a silent lake and a finished harvest. After stanza III the questioner never speaks again, and the knight's nine stanzas are his reply, ending in words that echo the question. The archaic thee and thy give the voice the manner of an old ballad. One useful reading treats the questioner as the reader's stand-in: like us, they arrive after the story is over, see only its results, and must be told the rest by a man who may not understand it himself.",
    },
    {
      name: 'The knight-at-arms',
      role: 'The sufferer, and the teller of stanzas IV to XII',
      body: "The questioner sees him as “So haggard and so woe-begone” (line 8): worn out, pale and miserable. His title promises a chivalric hero, armed and on duty, but the poem gives him no battle, no quest and no lord. What he does are a lover's things: he makes a garland, bracelets and a belt of flowers, and sets the lady on his horse. From stanza VII onwards he is almost entirely passive, fed, led, lulled and dreaming. His one action in the grot is to shut her “wild wild eyes” with kisses, which one reading takes as an attempt to calm, or not to see, the wildness in her. He tells his own story, so everything we know passes through his understanding, and he calls her language strange, yet is sure he knew what it meant. In the revised text printed in The Indicator in May 1820 he is not a knight at all but a “wretched wight”, a wretched creature; the anthology prints the earlier text, which keeps the gap between the heroic title and the helpless man. Keats could also be playful about him: in the letter in which he first wrote out the ballad, he joked that he had kept the kisses to four to restrain the “headlong impetuosity of my Muse”. The knight invites sympathy, but a careful reader can also ask how much of his ruin comes from his own misreading.",
    },
    {
      name: 'The lady',
      role: 'La Belle Dame sans Merci: a faery’s child, seen only through the knight’s eyes',
      body: "Everything we know about the lady comes from the knight. He calls her “a faery's child” (line 18), so she is not human, and gives her the conventional beauty of romance, long hair and a light foot, before the detail that unsettles it: her eyes are wild. She sings to him, feeds him, takes him to her grot, weeps, and lulls him to sleep. She never speaks in her own voice. Her only words, “I love thee true” (line 35), are his translation of a language he admits was strange to him. Nor does she name herself: the name in the title, the beautiful lady without mercy, is cried out by the pale kings and warriors of the knight's dream. Readers have long treated her as the pattern of the femme fatale, but the text gives her tears as well as power, and never shows her doing harm. A persuasive reading is that Keats makes her unknowable on purpose, so that she reflects whatever the knight, and the reader, bring to her. The weakest answers call her simply evil; the strongest ask who gave her that name, and why.",
    },
    {
      name: 'The pale kings, princes and warriors',
      role: "The figures of the knight's dream",
      body: "They appear only in stanzas X and XI, inside the knight's dream, and they are the most powerful men of a medieval world: kings, princes and warriors. All of them are “death-pale” (line 48). They cry out the words that give the poem its title, telling the knight that the lady has him “in thrall”. Their mouths gape open in the half-light, “in the gloam” (line 52), “With horrid warning” (line 53), and the anthology's text calls their lips starved. The poem implies, without ever saying so, that they are her earlier victims: how else would they know her name and her power? Their cry is the only speech the knight reports apart from the lady's, and it comes too late, in a dream, after he has already been enchanted. One reading makes them a ghostly brotherhood the knight is about to join; another makes them the shape his own fear takes in sleep. Either way, he wakes straight afterwards, alone.",
    },
  ],

  extracts: [
    {
      title: 'The meeting in the meads',
      where: 'Stanzas IV-V, lines 17-25',
      pointer:
        'From “I met a lady in the meads” (line 17) to “And made sweet moan” (line 25), anthology page 60: the first two stanzas of the knight’s answer.',
      text: 'I met a lady in the meads, / Full beautiful — a faery’s child, / Her hair was long, her foot was light, / And her eyes were wild. / I made a garland for her head, / And bracelets too, and fragrant zone; / She looked at me as she did love, / And made sweet moan.',
      annotations: [
        {
          phrase: 'a faery’s child',
          note: "The dash after Full beautiful makes the reader pause before the second half of the line reveals what she is. A faery's child is not human, and the old spelling carries her back into the world of medieval romance, where such beings are rarely safe to love.",
        },
        {
          phrase: 'And her eyes were wild',
          note: 'Three lines of conventional beauty, long hair and a light step, end on a short line that breaks the pattern. Wild suggests untamed, even mad, and the word returns twice more, in honey wild and wild wild eyes, as if her nature keeps surfacing in his memory.',
        },
        {
          phrase: 'I made a garland for her head',
          note: 'The knight is still the one who acts: he makes and gives. A garland, bracelets and a belt are all circles that bind as well as decorate, so one reading is that he is trying to adorn and hold her, just as the circular structure will later hold him.',
        },
        {
          phrase: 'fragrant zone',
          note: 'A zone is a belt or girdle, here made of flowers and worn at the waist, an intimate gift. Like every flower in the poem it will fade, so the knight dresses her in things that cannot last.',
        },
        {
          phrase: 'as she did love',
          note: 'As means as if. The knight reports how she looked, not what she felt, so his certainty that she loved him rests on his own reading of her face. Readers who distrust his account usually start here.',
        },
        {
          phrase: 'And made sweet moan',
          note: 'A moan can express pleasure or pain, and sweet does not settle which. The short fourth line lets the sound hang, suggesting desire while leaving open the possibility that she is already grieving.',
        },
      ],
      question:
        "How does Keats use language and structure in stanzas IV and V to present the lady and the knight's response to her?",
    },
    {
      title: 'The feast and the strange language',
      where: 'Stanza VII, lines 32-35',
      pointer:
        'From “She found me roots of relish sweet” (line 32) to “I love thee true” (line 35), anthology page 60. The anthology prints the lady’s words in single inverted commas.',
      text: 'She found me roots of relish sweet, / And honey wild, and manna-dew, / And sure in language strange she said — / “I love thee true”.',
      annotations: [
        {
          phrase: 'She found me roots of relish sweet',
          note: 'The grammar has turned round: she is now the subject and he the object. Roots and wild honey are gathered from the wild rather than served at a lord’s table, so the knight is fed by her world, like a child or a captive.',
        },
        {
          phrase: 'manna-dew',
          note: 'The anthology glosses manna in a footnote as food from heaven. The biblical echo makes her gifts seem miraculous, but the manna of Exodus was provided for the Israelites in the desert, and this comes from a faery’s child, so the holy word sits uneasily beside her.',
        },
        {
          phrase: 'And sure in language strange she said',
          note: 'Sure means surely: he is certain, yet by his own account she speaks a language that is strange to him. Inverting language strange makes the phrase sound like a spell, and it exposes the gap between what he heard and what he understood.',
        },
        {
          phrase: 'I love thee true',
          note: 'These are the only words the lady says in the whole poem, and they reach us in the knight’s translation of a tongue he calls strange. Whether she said them, or he wished them, is the question on which any reading of the lady turns.',
        },
      ],
      question:
        "How does Keats present the lady's power over the knight in stanza VII? Refer to language, form and structure.",
    },
    {
      title: 'The dream, the waking and the answer',
      where: 'Stanzas X-XII, lines 47-60',
      pointer:
        'From “I saw pale kings, and princes too” (line 47, at the top of anthology page 61) to the last line, “And no birds sing” (line 60). Read it in your anthology: the edition this site holds differs from the anthology’s wording in five places in these lines, so the passage is not reprinted here.',
      summary:
        'In his dream the knight sees kings, princes and warriors, all deathly pale, who cry out that the beautiful lady without mercy has him in her power. In the half-light their starving mouths gape open in warning. He wakes to find himself alone on the cold hillside, and he ends his answer by explaining that this is why he stays there, alone and pale, although the sedge by the lake is withered and no birds sing.',
      annotations: [
        {
          phrase: 'Pale warriors, death-pale were they all',
          note: 'Pale is used three times in two lines, for the kings, the warriors and finally as death-pale, which intensifies it into the colour of death. Kings, princes and warriors are the most powerful men of a medieval world, so their pallor says that power is no defence.',
        },
        {
          phrase: 'Thee hath in thrall',
          note: 'The anthology prints the words in this unusual order, which puts thee, the knight, first and in the position of the object. Thrall means slavery, so the title the pale kings cry out is also a verdict: he belongs to her now. Some printings read hath thee instead, so quote the anthology.',
        },
        {
          phrase: 'With horrid warning',
          note: 'In this stanza the warning is something seen rather than heard: the starved lips gape wide. The only words the pale kings are given are their cry in stanza X, which names the lady and says she has him in thrall. The warning arrives in a dream and after the event, which is why it cannot save him.',
        },
        {
          phrase: 'And I awoke and found me here',
          note: 'Found me here is an odd, reflexive phrase, as though he discovers himself like an object left behind. Here pulls the story back to the present moment and to the place where the questioner found him.',
        },
        {
          phrase: 'And this is why I sojourn here',
          note: 'This is why claims to answer the question of stanzas I and II, but the explanation is a dream. Sojourn means to stay for a while, a word for a visit, yet nothing in the stanza suggests that he will ever leave.',
        },
        {
          phrase: 'Though the sedge is withered from the lake',
          note: 'Stanza I said the sedge “has withered”; now it is withered, a finished state rather than a recent change. Though means even though: he stays in spite of the dead landscape, which suggests he is waiting for something that will not come back.',
        },
      ],
      question:
        'Explore how Keats uses structure in the last three stanzas to present the effect of the lady on the knight.',
    },
  ],

  vocabulary: [
    {
      term: 'ail',
      definition:
        'To trouble or afflict. What can ail thee means what is wrong with you, and the word hints at sickness as well as sorrow.',
    },
    {
      term: 'knight-at-arms',
      definition:
        'A knight who is armed and ready for service; at arms means armed and on duty. The title promises a chivalric hero, which makes the helpless figure of the poem more striking.',
    },
    {
      term: 'loitering',
      definition:
        'Standing or wandering about without aim or purpose. Paired with palely, it presents the knight as both sick and aimless.',
    },
    {
      term: 'sedge',
      definition:
        'A grass-like plant, here growing at the edge of the lake. That it has withered sets the season in late autumn and makes the landscape as drained as the knight.',
    },
    {
      term: 'haggard',
      definition:
        'Looking exhausted, worn and ill. In falconry a haggard is a hawk caught wild as an adult, and the adjective once meant wild or untamed: a sense Keats need not have intended, but one that sits strikingly close to the lady’s wild eyes.',
    },
    {
      term: 'woe-begone',
      definition: 'Overwhelmed by sorrow; looking miserable and forlorn.',
    },
    {
      term: 'granary',
      definition:
        'A storehouse for grain. The squirrel’s granary is its winter store, a sign that nature has prepared for winter while the knight has nothing.',
    },
    {
      term: 'fever-dew',
      definition:
        'A compound word for the sweat of a fever, pairing a fresh natural image, dew, with the signs of illness.',
    },
    {
      term: 'meads',
      definition:
        'Meadows (a poetic word). It places the meeting in open, fertile country, far from the withered lakeside of the opening.',
    },
    {
      term: 'faery',
      definition:
        'An old spelling of fairy. The faery’s child of the poem is a supernatural being from the world of romance and ballad, not a harmless creature of children’s stories.',
    },
    {
      term: 'zone',
      definition:
        'A belt or girdle (a literary word). The knight’s fragrant zone is a belt of flowers for the lady’s waist.',
    },
    {
      term: 'pacing steed',
      definition: 'A horse moving at a steady pace. Steed is the poetic word for a knight’s horse.',
    },
    {
      term: 'relish',
      definition:
        'An old sense meaning a pleasant flavour or taste, so roots of relish sweet are roots that taste sweet.',
    },
    {
      term: 'manna',
      definition:
        'In the book of Exodus, food miraculously provided for the Israelites in the desert. The anthology’s footnote glosses it as “food from heaven”.',
    },
    {
      term: 'elfin grot',
      definition:
        'A grot is a grotto or cave (a poetic word), and elfin means belonging to elves or fairies. The lady’s home is hidden and enclosed, far from the open meads.',
    },
    {
      term: 'woe betide',
      definition:
        'An old warning that trouble will come. Here it is the knight’s cry of dread as he remembers the dream.',
    },
    {
      term: 'latest',
      definition:
        'Last or final (rare and poetic). When the knight calls it “The latest dream” he ever dreamt, the word can mean his most recent dream or his last, and the second meaning points towards death.',
    },
    {
      term: 'thrall',
      definition:
        'Slavery; the state of being under another’s control. To hold someone in thrall is to enslave or bewitch them.',
    },
    {
      term: 'gloam',
      definition:
        'Twilight, a shortened form of gloaming. The pale kings appear in half-light, between day and night, just as the dream sits between sleeping and waking.',
    },
    {
      term: 'sojourn',
      definition:
        'To stay somewhere for a while, as a guest or visitor. The word suggests a temporary stay, which the circular ending turns into something permanent.',
    },
    {
      term: 'sans merci',
      definition: 'French for without mercy. The title means the beautiful lady without mercy.',
    },
    {
      term: 'wight',
      definition:
        'An old word for a living creature or a person. In the revised text printed in The Indicator in 1820 the knight is called a wretched wight; the anthology keeps knight-at-arms.',
    },
    {
      term: 'literary ballad',
      definition:
        'A poem by a known author that imitates the old folk ballads: a story told in short stanzas in plain, repetitive language. Keats, like Wordsworth and Coleridge, was drawn to the simple and natural style of the folk ballad.',
    },
    {
      term: 'femme fatale',
      definition:
        'French for deadly woman: an attractive and seductive but ultimately dangerous woman. The lady is often called one, though the poem never shows her doing harm.',
    },
    {
      term: 'frame narrative',
      definition:
        'A story told inside another story. Here the questioner’s stanzas frame the knight’s tale, which in turn contains the dream.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Compare the ways the writers present the effects of love in La Belle Dame sans Merci and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparing two anthology poems: language, form and structure',
        guidance: [
          'Choose a partner poem that gives you a clear contrast. Sonnet 116 works well, because it defines love as constant and unchanging, while Keats shows love as an enchantment that leaves the lover ruined.',
          'Open with a comparative argument, for example that Keats shows the effects of love before their cause, as a story told by its victim, while Shakespeare argues about what love is rather than telling what it did.',
          'Start where Keats starts, with the effect: the knight “Alone and palely loitering” and the questioner’s diagnosis in stanza III. Analyse the lily, the fever-dew and the fading rose as signs of a body drained.',
          'Track the shift of control across stanzas V to IX: the knight’s verbs (made, set) give way to the lady’s (found, took, lulled). Say what this suggests about love’s effect on the will.',
          'Compare form: Keats’s ballad stanza with its cut-off fourth line against the form of your partner poem, and explain what each form does to the idea of love.',
          'Compare endings. Keats’s last stanza returns almost word for word to his first and leaves the knight where he began; say whether your partner poem ends in certainty or in loss.',
          'Keep every paragraph comparative, with a connective and a point about both poems, rather than writing about one poem and then the other.',
        ],
      },
      {
        question:
          'Compare the ways the writers present the power of memory in La Belle Dame sans Merci and Piano. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparing two named anthology poems',
        guidance: [
          'Both speakers are overwhelmed by something they cannot resist, and in both a woman’s singing is part of it. In Piano a woman singing at dusk carries the adult speaker back to his childhood; in Keats the lady sings “A faery’s song” and the knight sees nothing else all day.',
          'Look at how each poem moves between past and present. Keats sets the knight’s memory inside a present-tense frame, stanzas I to III and XII; Lawrence moves from the singer in front of him to the remembered child and back.',
          'Compare the language of power. Lawrence names the “insidious mastery of song”; the pale kings and warriors of Keats’s dream cry that the lady has the knight “in thrall”. Both suggest a force that works against the speaker’s will.',
          'Compare what each man is left with. Lawrence’s speaker ends in tears for the childhood he has lost; Keats’s knight is left loitering on the cold hillside. One is flooded with feeling; the other seems emptied of it.',
          'Compare form: Lawrence’s long lines in rhyming couplets, which flow like the memory they describe, against Keats’s short, clipped ballad stanzas.',
          'Conclude on tone: nostalgia in Piano, dread in Keats. Say which poem presents memory as more dangerous, and why.',
        ],
      },
      {
        question:
          'Compare the ways the writers present a mysterious and dangerous being in La Belle Dame sans Merci and The Tyger. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparing two named anthology poems',
        guidance: [
          'Both poems are built on questions. Keats opens with a question to the knight, and The Tyger is almost entirely questions about who could have made the tiger. Consider what questions do: they express awe and uncertainty rather than knowledge.',
          'Compare the eyes. Blake asks in what distant place the fire in the tiger’s eyes first burned; Keats’s lady has wild eyes, which the knight shuts with kisses. In both poems the eyes are where the danger shows.',
          'Neither being is explained. Blake’s speaker never answers his questions about the maker, and Keats’s lady never explains her tears. Argue about what the missing answers do to the reader.',
          'Compare form and sound: The Tyger’s short, hammering lines in rhyming couplets against Keats’s quiet ballad stanzas with their fading fourth lines. One poem seems to cry out its awe; the other murmurs its dread.',
          'Consider when the danger is felt. Blake’s speaker contemplates the tiger from outside, in wonder at its “fearful symmetry”; Keats’s lady has already acted on the knight, so the fear in his poem looks back on what has happened.',
          'Keep background brief. Both poets wrote in the Romantic period, but this section of the paper rewards close analysis and comparison far more than context.',
        ],
      },
      {
        question:
          'Compare the ways the writers present love and loss in La Belle Dame sans Merci and Remember. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparing two named anthology poems',
        guidance: [
          'Start with voice, because it gives you an argument at once. Rossetti’s speaker, whom most readers take to be a woman, speaks to her lover directly for all fourteen lines. Keats’s lady never speaks for herself: her one line of love, “I love thee true”, reaches us in the knight’s translation of a “language strange”.',
          'Compare what the loss is. Rossetti’s speaker imagines her own death, going into the “silent land” (Remember, line 2); the knight’s loss is the lady’s disappearance, and he wakes to find himself on the cold hillside without her (stanza XI). One poem prepares for a loss; the other looks back on one.',
          'Compare memory. The knight cannot stop remembering: his whole answer is a memory, and it leaves him “Alone and palely loitering”. Rossetti’s speaker first asks to be remembered and then turns, deciding it is “Better by far you should forget and smile” (line 13). One poem shows memory as a trap; the other chooses to release the lover from it.',
          'Compare form and structure. Remember is a sonnet whose argument turns at line 9, where “Yet” begins a change of mind. Keats’s ballad has no turn, only a return, because its last stanza echoes its first. Say what each shape suggests about whether loss can be moved beyond.',
          'Compare tone. Rossetti ends calm and unselfish; Keats ends haunted and unresolved. Decide which poem presents love as more generous and which presents loss as more final, and say why.',
          'Keep every paragraph comparative. A paragraph that analyses only one poem, however well, answers half the question.',
        ],
      },
      {
        question:
          'Examine the view that La Belle Dame sans Merci invites sympathy for the knight but refuses to judge the lady.',
        skill: 'Whole-poem argument (an A-level style essay)',
        guidance: [
          'Define the terms first: what would sympathy for the knight involve, and what would a judgement of the lady look like in a poem that never lets her speak?',
          'Build the case for sympathy: the questioner’s diagnosis in stanzas I to III, the knight’s isolation, and the circular ending that traps him.',
          'Then test it. The knight’s narration is unreliable: he reads her looks, cannot understand her language, and is “sure” anyway, so the poem also invites a critical view of him.',
          'Consider the lady. The title judges her, but inside the story that judgement is spoken only by the pale figures of the knight’s dream, never by the questioner or by the knight in his own voice, and her tears in the grot complicate the verdict.',
          'Bring in context where it sharpens the argument: the medieval tradition behind the title, which comes from a fifteenth-century poem by Alain Chartier, and the revised text printed in The Indicator in 1820.',
          'Conclude with a judgement of your own: for example, that the poem’s refusal to judge the lady is exactly what makes the knight’s suffering so hard to explain, and so haunting.',
        ],
      },
    ],
    tips: [
      'Quote the anthology, not a website. The anthology prints the earlier knight-at-arms text, and printings online differ from it: some give the revised 1820 text, in which the knight is a wretched wight, and some read hath thee where the anthology has “Thee hath in thrall”. Pearson’s specification says the anthology poems are provided in the examination, so check your wording against the copy in front of you.',
      'Refer to stanzas by the anthology’s Roman numerals. Its margin numbers count each numeral as a line, so the 48 lines of verse are numbered up to 60, and a reference such as stanza X, line 48 is one an examiner can find at once.',
      'Section B tests analysis of language, form and structure, and the links between the two poems. Keats’s life and the medieval sources are interesting, but they earn little unless they sharpen a point about the words on the page.',
      'Track the verbs. The knight acts in stanzas V and VI, and from stanza VII he is mostly acted upon, his one act being to close her eyes with kisses; an answer that notices this shift in the grammar has a ready-made argument about power.',
      'Write about the short fourth line of each stanza. It is the poem’s signature: it cuts each stanza off, often on a single stark image, and many of the most quotable phrases fall there.',
      'Do not label the lady evil and move on. The strongest answers notice that she never speaks for herself, that her name is given by the pale kings of the dream, and that she weeps; then they argue for a reading anyway.',
      'Use the circular structure precisely. The last stanza repeats the first almost word for word, but the sedge that “has withered” in stanza I is withered in stanza XII, and the question has become “this is why”.',
      'Pathetic fallacy is a label, not an analysis. Say what the withered sedge, the full granary and the silent birds each do, and notice that nature’s plenty contrasts with the knight’s emptiness as well as mirroring his mood.',
    ],
  },

  modelAnswer: {
    question:
      'Compare the ways the writers present relationships between men and women in La Belle Dame sans Merci and My Last Duchess.',
    paragraph:
      'Both poems present a relationship through the eyes of a man who claims to read a woman’s looks, and in neither is the woman allowed to speak for herself. Keats’s knight says the lady “looked at me as she did love”, where as means as if: the love he describes is an appearance he has interpreted, not a feeling she has declared. Even her one declaration, “I love thee true”, reaches us as his translation of a “language strange”, words he could hardly have understood, and yet he is “sure”. Browning’s Duke reads his wife’s looks too, but with resentment rather than longing: he complains that “her looks went everywhere”, as if her pleasure in the world were an insult to him. The difference lies in who holds the power. The Duke silences the Duchess in two blunt clauses, “I gave commands; / Then all smiles stopped together”, and his dramatic monologue keeps him in control of the story to the end. Keats’s knight loses control: the verbs pass from him to the lady, and the ballad’s circular form leaves him “Alone and palely loitering” where he began. Browning shows a man destroying what he could not own; Keats shows a man destroyed by what he could not understand.',
    commentary: [
      'It opens with a comparative argument, not a description: both men read women’s looks, and neither woman speaks. Every later sentence tests that claim.',
      'The quotations are short and built into the writer’s own sentences, and the Keats quotations are analysed down to single words, as and sure.',
      'The comparison deepens rather than repeats. It moves from language (the looks), to power (who controls the story), to form (Browning’s monologue against Keats’s circular ballad).',
      'It notices grammar precisely, the two blunt clauses in Browning and the shift of verbs in Keats, which is the analysis of language and structure this section of the paper asks for.',
      'The last sentence is a balanced antithesis that sums up the difference memorably, without claiming more than either poem shows.',
    ],
  },

  timeline: [
    {
      where: 'Stanzas I-III (lines 2-15)',
      title: 'The question',
      summary:
        'An unnamed questioner finds a knight wandering alone by a lake in late autumn and asks twice what is wrong with him. The questioner then reads the signs of sickness in his face: a lily-white brow, feverish sweat and a rose fading from his cheeks.',
      setting: 'A lakeside at the end of autumn: withered sedge, silent birds, the harvest in',
      who: ['The questioner', 'The knight-at-arms'],
      quote: 'Alone and palely loitering',
      themes: ['Illness, decay and death', 'Nature and the seasons', 'Isolation and entrapment'],
      tension: 2,
      significance:
        'The poem shows the result before the cause, so every later stanza reads as an explanation of this ruined figure.',
    },
    {
      where: 'Stanzas IV-V (lines 17-25)',
      title: 'The meeting in the meads',
      summary:
        'The knight begins his answer. He met a beautiful lady in the meadows, a faery’s child with long hair and wild eyes, made her a garland, bracelets and a belt of flowers, and she looked at him as if she loved him.',
      setting: 'Open meadows, remembered',
      who: ['The knight-at-arms', 'The lady'],
      quote: 'And her eyes were wild',
      themes: ['Love as enchantment', 'Beauty and danger'],
      tension: 2,
      significance:
        'The one unconventional detail of her beauty, her wild eyes, is the first warning, and the knight passes straight over it.',
    },
    {
      where: 'Stanzas VI-VII (lines 27-35)',
      title: 'The ride and the feast',
      summary:
        'He sets her on his horse and sees nothing else all day while she bends sideways and sings. She finds him sweet roots, wild honey and manna, and speaks in a strange language that he is sure means she loves him.',
      setting: 'On the knight’s horse, all day long',
      who: ['The knight-at-arms', 'The lady'],
      quote: 'And sure in language strange she said',
      themes: ['Love as enchantment', 'Dream and an unreliable story'],
      tension: 3,
      significance:
        'From here the lady acts and the knight receives, and her only declaration of love reaches us in his translation.',
    },
    {
      where: 'Stanzas VIII-IX (lines 37-45)',
      title: 'The elfin grot',
      summary:
        'She takes him to her fairy cave, where she weeps and sighs. He closes her wild eyes with four kisses; she lulls him to sleep, and there he dreams what he calls the last dream he ever had, on the cold hillside.',
      setting: 'The lady’s elfin grot, a hidden fairy cave',
      who: ['The knight-at-arms', 'The lady'],
      quote: 'And there I shut her wild wild eyes',
      themes: ['Love as enchantment', 'Beauty and danger', 'Dream and an unreliable story'],
      tension: 4,
      significance:
        'Her unexplained tears are the poem’s central puzzle: sorrow, guilt or pity, Keats never says which.',
    },
    {
      where: 'Stanzas X-XI (lines 47-55)',
      title: 'The dream of the pale kings',
      summary:
        'In the dream he sees pale kings, princes and warriors who cry out that the beautiful lady without mercy holds him in thrall. Their starving mouths gape in warning in the twilight, and he wakes alone on the cold hillside.',
      setting: 'A dream vision in the half-light, then the cold hillside',
      who: ['The knight-at-arms', 'The pale kings, princes and warriors'],
      quote: 'Pale warriors, death-pale were they all',
      themes: [
        'Illness, decay and death',
        'Dream and an unreliable story',
        'Isolation and entrapment',
      ],
      tension: 5,
      significance:
        'The title arrives in the pale kings’ mouths, so the lady is named by men who seem to have suffered as he has.',
    },
    {
      where: 'Stanza XII (lines 57-60)',
      title: 'The answer',
      summary:
        'The knight ends by telling the questioner that this is why he lingers here, alone and pale, even though the sedge is withered and no birds sing. The last lines repeat the first, so his answer leads back to the question.',
      setting: 'The same lakeside, unchanged',
      who: ['The knight-at-arms', 'The questioner'],
      quote: 'And this is why I sojourn here',
      themes: ['Isolation and entrapment', 'Nature and the seasons'],
      tension: 3,
      significance:
        'The circular ending traps the knight: the story has been told, but nothing is cured and nothing moves.',
    },
  ],

  relationships: [
    {
      from: 'The questioner',
      to: 'The knight-at-arms',
      kind: 'stranger and sufferer',
      note: 'The questioner asks twice what ails the knight; his nine-stanza answer ends by echoing the opening, so the question is answered but nothing is cured.',
    },
    {
      from: 'The knight-at-arms',
      to: 'The lady',
      kind: 'lover and enchantress',
      note: 'Power passes from him to her across stanzas V to IX: he makes and sets, then she finds, takes and lulls, until he wakes alone.',
    },
    {
      from: 'The pale kings, princes and warriors',
      to: 'The knight-at-arms',
      kind: 'warners and the warned',
      note: 'They appear only in his dream and cry that the lady has him in thrall, a warning that comes after the event.',
    },
    {
      from: 'The lady',
      to: 'The pale kings, princes and warriors',
      kind: 'enchantress and, it seems, earlier victims',
      note: 'The poem implies without saying that she has held these men before, since they know her name and her power.',
    },
  ],

  compareWith: [
    {
      title: 'My Last Duchess',
      href: '/revision/poetry/power-and-conflict/my-last-duchess',
      reason:
        'Two men describe women who never speak for themselves: the Duke silences his wife, while the knight is undone by a lady he cannot understand.',
    },
    {
      title: 'Piano',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'A woman’s singing overpowers a man and carries him into the past, a close partner for the faery’s song and the knight’s memory.',
    },
    {
      title: 'The Tyger',
      href: '/igcse/edexcel/poetry/the-tyger',
      reason:
        'Both poems circle a mysterious and dangerous being through questions that are never fully answered.',
    },
    {
      title: 'Remember',
      href: '/igcse/edexcel/poetry/remember',
      reason:
        'Rossetti’s speaker faces love and death in her own voice, where Keats’s lady never speaks, and chooses to free her lover from memory, where the knight is trapped in his.',
    },
  ],

  contentGuidance: ['supernatural', 'mortality', 'intimate_relationships'],

  quotesFromElsewhere: [
    // The anthology's own wording, where Colvin's held text differs (stanza I, line 4; stanza X, line 50).
    'has withered',
    'Thee hath in thrall',
    // The revised text printed in The Indicator, May 1820.
    'wretched wight',
    // Keats's letter to George and Georgiana Keats, 1819, on the four kisses.
    'headlong impetuosity of my Muse',
    // The anthology's footnote to line 33.
    'food from heaven',
    // My Last Duchess, anthology pages 65 to 66, lines 24, 45 and 46; checked against src/data/full-texts/my-last-duchess.ts.
    'her looks went everywhere',
    'I gave commands; / Then all smiles stopped together',
    // Piano, anthology page 57, line 5; checked against src/data/full-texts/piano.ts.
    'insidious mastery of song',
    // The Tyger, anthology page 64, line 4; checked against src/data/full-texts/the-tyger.ts.
    'fearful symmetry',
    // Remember, anthology page 70, lines 2 and 13; checked against src/data/full-texts/remember.ts.
    'silent land',
    'Better by far you should forget and smile',
    'Yet',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, pages 60 to 61 (the poem and its manna footnote), with Piano (page 57), The Tyger (page 64), My Last Duchess (pages 65 to 66) and Remember (page 70); read from the PDF on 25 September 2026, and the poem re-read and compared with this file line by line on 26 September 2026',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'The held edition: Sidney Colvin, Life of John Keats: His Life and Poetry, His Friends, Critics and After-Fame, Project Gutenberg eBook #36356 (src/data/full-texts/la-belle-dame-sans-merci.ts)',
      url: 'https://www.gutenberg.org/ebooks/36356',
    },
    {
      label:
        'Poetry Foundation text of the poem (source: Selected Poems, Penguin Classics, 1988), which matches the anthology word for word (it differs only in capitalising Elfin and in a few marks of punctuation) and prints "Thee hath in thrall", with a note that recitations of either "Hath thee in thrall" or "Thee hath in thrall" are accepted; read from a course printout of the page, since the Poetry Foundation site refused the request',
      url: 'https://commons.princeton.edu/eng266-s25/wp-content/uploads/sites/433/2025/02/Keats-La-Belle-Dame-sans-Merci.pdf',
    },
    {
      label:
        'Poetry Foundation, La Belle Dame sans Merci: A Ballad (the page the printout above was taken from)',
      url: 'https://www.poetryfoundation.org/poems/44475/la-belle-dame-sans-merci-a-ballad',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Literature specification, Issue 3, August 2025: Component 1 Section B compares two Part 3 anthology poems; closed book, but the anthology poems are provided in the examination',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'The complete poetical works and letters of John Keats (1899, ed. Horace E. Scudder), Wikisource: headnote dating the letter entry to 28 April 1819 and the printing by Leigh Hunt in The Indicator to 10 May 1820, above a text that opens "Ah, what can ail thee, wretched wight"',
      url: 'https://en.wikisource.org/wiki/The_complete_poetical_works_and_letters_of_John_Keats/La_Belle_Dame_sans_Merci',
    },
    {
      label:
        'Publication of Keats’ Poetry Over Time, Indicator (1820): the Indicator text, signed Caviare, opens "Ah, what can ail thee, wretched wight"',
      url: 'https://keatsovertime.wordpress.com/la-belle-dame-sans-merci/indicator-1820/',
    },
    {
      label:
        "Liam Guilar, John Keats' La Belle Dame sans Merci (2020): the letter's passage on the four kisses, quoted in full, and the Indicator's change of the first line to \"wretched wight\"",
      url: 'http://www.liamguilar.com/the-poetry-voice/2020/7/21/john-keats-la-belle-dame-sans-merci',
    },
    {
      label:
        'Sidney Colvin (ed.), Letters of John Keats to His Family and Friends (1891), letter 92, to George and Georgiana Keats, 14 February to 3 May 1819: the four-kisses passage, read in the Gutenberg HTML text on 26 September 2026, where it follows the ballad under the entry Colvin dates Wednesday Evening [April 28]',
      url: 'https://www.gutenberg.org/ebooks/35698',
    },
    {
      label:
        "Wikipedia, La Belle Dame sans Merci: the first version in the letter of 14 February to 3 May 1819; the four kisses; the title from Alain Chartier's fifteenth-century poem",
      url: 'https://en.wikipedia.org/wiki/La_Belle_Dame_sans_Merci',
    },
    {
      label:
        "Wikipedia, John Keats: Guy's Hospital (1815) and apothecary's licence (1816); mother's death from tuberculosis (1810); Tom Keats's death on 1 December 1818 while Keats nursed him",
      url: 'https://en.wikipedia.org/wiki/John_Keats',
    },
    {
      label:
        'Wikipedia, Ballad: the ballad stanza, and Wordsworth, Coleridge and Keats drawn to the simple and natural style of folk ballads',
      url: 'https://en.wikipedia.org/wiki/Ballad',
    },
    {
      label:
        'Wiktionary entries used for the glossary: ail, at arms, loiter, sedge, haggard, woebegone, mead, zone, pace, relish, manna, grot, woe betide, latest, thrall, gloam, sojourn, merci, wight, femme fatale. Re-checked on 26 September 2026: haggard (a hawk caught as an adult; of an animal, wild), gloam (clipping of gloaming), latest (now rare, poetic: last, final), zone (now literary: a belt or girdle), relish (archaic: a pleasant flavour), grot (poetic: a grotto), sojourn (a short stay), wight (archaic: a living creature)',
      url: 'https://en.wiktionary.org/',
    },
    {
      label:
        'Colour My Learning, 4ET1 Paper 1 Section B past questions: the stem "Compare the ways the writers present", the standard instruction wording, and questions that name both poems as well as one',
      url: 'https://www.colourmylearning.com/2023/03/edexcel-english-literature-igcse-4et1-01-paper-1-past-exam-questions-anthology-poetry-comparison/',
    },
  ],
}
