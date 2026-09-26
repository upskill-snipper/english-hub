import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Waste Land, T. S. Eliot (1922). A complete guide: the text had no guide
 * before this file.
 *
 * COPYRIGHT. Eliot died on 4 January 1965, so the poem is in UK copyright until
 * the end of 2035, although it is out of copyright in the United States. Every
 * quotation is held to the limits in src/lib/study-guides/fair-dealing.ts:
 * under 15 words, at most two lines, and a total under fifteen per cent of the
 * poem's 2,999 words (399 distinct words by the validator's count after the
 * third fact-check pass, about 13 per cent; the cap is 449). Longer passages are pointed to by line number and
 * summarised, never printed.
 *
 * HOW THE QUOTATIONS WERE CHECKED. Every quoted phrase from the poem was
 * matched, after normalising case and punctuation, against two independent
 * printings: the Project Gutenberg text of the 1922 Boni and Liveright edition
 * (eBook #1321) and the Wikisource transcription of Eliot's Poems (1926). The
 * two were diffed line by line. They differ in a handful of places, and no
 * quotation here is taken from any of them: "HURRY UP PLEASE IT'S TIME" (later
 * printings, including Faber's, print ITS without the apostrophe), "Oed'" or
 * "Od'" (line 42), "to-morrow" (133), "smooths" or "smoothes" (255), "aetherial"
 * or "aethereal" (415), "ceu" or "uti" (428). Line numbers are the printed
 * ones, which in Part V run one behind a physical count of the lines.
 *
 * FACT-CHECK, 26 September 2026. A second pass re-matched every quotation against
 * a fresh download of Gutenberg #1321, the Wikisource 1926 text and the Poetry
 * Foundation text. One variant the first pass missed: line 111 reads
 * "to-night" in 1922 and 1926 but "tonight" in the Poetry Foundation (later)
 * text, so the edition note in structureForm now says so. The same pass
 * corrected several details of fact: the dedication to Pound was printed only
 * from 1925; the Fire Sermon is about burning with passion, hatred and delusion,
 * not about purifying fire; Eliot's note calls Shantih "a" formal ending, not
 * "the"; Lil nearly died having young George, not necessarily her last child;
 * and the pub scene is one woman's retelling, not two women talking.
 *
 * A third pass on the same day re-ran the match against Gutenberg and
 * Wikisource (every quotation agreed with both), recounted the poem at 2,999
 * words, and fixed: the "Drip drop" line reference (357 in the printed
 * numbering, not 358); the ending, which piles up fragments in its last eight
 * lines, not eleven; Part IV's lines, which are not regular; the source of
 * "il miglior fabbro" (Dante gives the words to Guido Guinizelli); Eliot's
 * "incidental" symbolism; and several readings that had been stated as facts
 * (the unspoken replies, Mr Eugenides's proposition, the snobbery of the
 * typist scene).
 *
 * The first pass could not reach Poetry Foundation, Britannica or the British
 * Library's articles (403, a bot wall, and the Library's cyber-attack outage);
 * the second pass did reach the Poetry Foundation text. The context rests on
 * the sources listed at the foot of this file.
 */
export const guide: StudyGuide = {
  slug: 'the-waste-land',
  title: 'The Waste Land',
  author: 'T. S. Eliot',
  form: 'poem',
  scope:
    "The whole poem (1922): all five parts, 433 numbered lines, with its epigraph and dedication. Eliot's notes, printed after the poem in most editions, are useful context but are not part of the poem itself.",
  rights: {
    status: 'copyright',
    acknowledgement:
      "© T. S. Eliot 1922. Published in the United Kingdom by Faber & Faber. In the UK the poem remains in copyright until the end of 2035, seventy years after Eliot's death; it is quoted here in short phrases for criticism and review under the Copyright, Designs and Patents Act 1988, s.30. Line references follow the printed line numbers.",
  },
  workLength: {
    words: 2999,
    lines: 433,
    basis:
      "Counted from the Project Gutenberg text (eBook #1321) of the 1922 Boni and Liveright edition: every line of the poem from line 1 to line 433, including its lines in German, French, Italian, Latin and Sanskrit, and excluding the epigraph, dedication, part titles, line numbers and Eliot's notes. Words counted by the validator's own method. The printed numbering ends at 433; a physical count gives 434, because the numbering in Part V runs one behind.",
  },

  overview: {
    summary: [
      'The Waste Land is a poem of 433 lines in five parts, published in October 1922, almost four years after the end of the First World War. It has no single story and no single speaker. Instead it moves, often without warning, between voices and scenes: an aristocratic woman remembering a childhood before the war, a fortune-teller with a bad cold, a crowd of office workers crossing London Bridge, a rich woman whose partner will not answer her, a woman in a pub retelling the advice she gave a friend, a typist and a clerk, a drowned sailor, a desert journey, and a thunderclap that speaks Sanskrit. Woven through them are fragments of other writers, from the Bible, Dante and Shakespeare to a ragtime song.',
      "What holds the fragments together is a set of recurring images rather than a plot: drought and rain, rock and water, dust, the river, the city. Beneath them, as Eliot's notes explain, lies the legend of the Fisher King, whose wound has made his kingdom barren until a questing knight can heal him. The poem's London is that kingdom: a place of living death, where sex is joyless, speech fails and faith has shrunk to fortune-telling. The poem ends with the thunder speaking and rain on its way, but whether the rain ever reaches the speaker is left open.",
      'Students often try to decode the poem line by line and give up. The better approach is to argue about what the fragments add up to. One influential reading, going back to critics of the 1930s, finds a hidden unity in the Grail myth or in the figure of Tiresias. Another sees a personal poem of breakdown, written out of an unhappy marriage and a period of illness and disguised as an impersonal collage. This guide argues that the poem is most convincing read as a search that does not reach its goal: it diagnoses a spiritual drought with great precision, it hears the commands that might end it, and it stops, deliberately, before claiming that they have been obeyed.',
    ],
  },

  context: [
    {
      heading: 'From St Louis to London',
      body: 'Thomas Stearns Eliot was born on 26 September 1888 in St Louis, Missouri, into a prominent family of New England descent. He studied at Harvard, spent 1910 to 1911 in Paris, and returned to Harvard from 1911 to 1914 to study philosophy, including Indian philosophy and Sanskrit, which surface at the end of The Waste Land. A scholarship took him to Merton College, Oxford, in 1914, the year the First World War began, and that September he met the American poet Ezra Pound in London. He stayed in England, married Vivienne Haigh-Wood in June 1915, taught at schools including Highgate School, and in 1917 joined Lloyds Bank in London, working on foreign accounts. In the years when he wrote the poem, his working days were spent in the City of London, among the kind of office crowds it describes.',
    },
    {
      heading: '1921: illness, Margate and Lausanne',
      body: "The marriage was unhappy, and both Eliots suffered long periods of ill health. In the autumn of 1921 Eliot was diagnosed with a nervous disorder and given three months' leave from the bank. He went first to the seaside resort of Margate, where he worked on the poem in a shelter on the seafront, and Part III names the place directly: “On Margate Sands.” He then travelled by way of Paris, where he showed Pound what he had written, to Lausanne in Switzerland for treatment by the Swiss doctor Roger Vittoz, and there he finished a draft. Much later, in a private paper, Eliot wrote that his first marriage had produced the state of mind out of which the poem came. That is worth knowing, but it does not license reading every woman in the poem as Vivienne.",
    },
    {
      heading: "Pound's editing and the lost drafts",
      body: "Eliot brought the draft back to Paris in January 1922, and Pound cut it heavily. Eliot let him decide a great deal: Pound rejected Eliot's plans to open with his earlier poem Gerontion and to take an epigraph from the death of Kurtz in Joseph Conrad's Heart of Darkness. The drafts carried a working title from Dickens's Our Mutual Friend, where the old widow Betty Higden praises the foundling Sloppy's reading of the newspaper: “He do the Police in different voices”. The phrase describes the finished poem well. Eliot first wrote a dedication to Pound by hand in a copy of the book he gave him, and from 1925, in Poems 1909-1925, it was printed with the poem: “il miglior fabbro”, the better craftsman, adapting the words with which, in Dante's Purgatorio, the poet Guido Guinizelli praises the troubadour Arnaut Daniel. The drafts, sent as a gift to the New York lawyer and patron John Quinn, disappeared for decades, were bought by the New York Public Library in 1958, became known to Eliot's widow Valerie in 1968, and were published in facsimile, with Pound's annotations, in 1971.",
    },
    {
      heading: 'Publication in 1922',
      body: "The poem appeared without notes in the first issue of Eliot's new magazine, The Criterion, on 16 October 1922, and in the American magazine The Dial in November. The first book edition, from Boni and Liveright in New York in December 1922, added Eliot's notes, partly because the publisher worried that the poem was too short to make a book. The first British book edition followed from Leonard and Virginia Woolf's Hogarth Press in September 1923. 1922 was also the year of James Joyce's Ulysses, published in Paris on 2 February. Eliot had read parts of it before it came out as a book and admired it, and the two works are often discussed together.",
    },
    {
      heading: 'A civilisation after the war',
      body: "The poem was written in the years just after the First World War, and the war is everywhere in it without ever being described. Lil's husband has been “demobbed” after four years in the army. The speaker greets a friend who was with him “in the ships at Mylae”, a sea battle between Rome and Carthage in 260 BC, as if every war were the same war. Marie's memories of staying at an archduke's belong to a pre-war aristocratic world. In Part V hooded crowds stumble across plains and the great cities fall one after another, from Jerusalem to London, and Eliot's note says that one of the part's themes is “the present decay of eastern Europe”. The poem gives that collapse no dates and no politics. It treats it as a spiritual event.",
    },
    {
      heading: 'Myth and anthropology: the Fisher King',
      body: "Eliot's first note says that the title, the plan and much of the incidental symbolism were suggested by Jessie L. Weston's study of the Grail legend, From Ritual to Romance (1920), and that he also drew on James Frazer's The Golden Bough, a vast comparative study of myth and religion first published in 1890. Both books traced later myths and religions back to ancient fertility rites, in which a god dies and is reborn so that the land can live again. In the Grail stories the Fisher King has a wound that leaves him impotent and his kingdom barren until a knight arrives who can heal him. The poem borrows the pattern but withholds the cure: its figures bury corpses and hope they will grow, and its speaker ends fishing on the shore, still asking whether he can set his lands in order.",
    },
    {
      heading: 'East and West: the Buddha, Augustine and the Upanishads',
      body: "Eliot's Harvard study of Indian philosophy and Sanskrit gives the poem its two climaxes. Part III takes its title from the Buddha's Fire Sermon, which teaches that the senses and the mind are burning with the fires of passion, hatred and delusion, and that the wise turn away from them and are set free. The part ends by setting the Buddha beside St Augustine, whose Confessions describe his youth in Carthage among unholy loves. Eliot's note says that the pairing of these two ascetics, one eastern and one western, is “not an accident”. Part V turns to a fable from the Brihadaranyaka Upanishad, one of the Hindu scriptures, in which the thunder's syllable DA is heard as three commands, which Eliot's note glosses as give, sympathise and control. The last word of the poem, “Shantih”, repeated three times, is, Eliot's note says, a formal ending to an Upanishad.",
    },
    {
      heading: 'Impersonality and the mythical method',
      body: "Two of Eliot's essays help to explain the poem's strangeness. In Tradition and the Individual Talent (1919) he argued that a poet should surrender himself to the tradition, and that poetry is not the release of personal feeling but “an escape from emotion”. The poet's mind, he said, works like a catalyst, and the finer the artist, the more completely the suffering man and the creating mind are kept apart. In 1923, writing about Ulysses, he praised Joyce's use of Homer's Odyssey as a way of giving order and shape to the “futility and anarchy” of contemporary history, and called it “the mythical method”. Both ideas fit The Waste Land. Its private pain is dispersed among many voices, and its myths are there to give chaos a shape rather than to tell a story.",
    },
    {
      heading: 'Reception and reputation',
      body: "Early reviews were mixed. Some critics found the poem wilfully obscure and its borrowings unoriginal; others, including the poet Conrad Aiken, found it deeply moving. In the 1930s critics such as F. R. Leavis and Cleanth Brooks argued that its apparent disorder hid a real unity, found either in Tiresias or in the Grail myth, and that view dominated for decades. Eliot himself moved on quickly. In 1927 he joined the Church of England and became a British subject; his later poetry is openly religious, and he won the Nobel Prize in Literature in 1948. He died in London on 4 January 1965. More recent critics have paid closer attention to the poem's treatment of women and of working-class characters, and to the personal crisis behind it.",
    },
  ],

  themes: [
    {
      title: 'Death and rebirth',
      body: "The poem is built on the pattern of the fertility myths that Eliot's notes describe: a god dies, is buried and rises, and the land comes back to life. But The Waste Land keeps the first half of the pattern and doubts the second. Its opening dreads spring because renewal hurts; the corpse Stetson planted in his garden is expected to “sprout”; Phlebas drowns and simply decays; the desert journey reaches only an empty chapel. Death is everywhere and rebirth is only promised. The most convincing reading is that the poem wants rebirth desperately and distrusts every version of it on offer, which is why the rain is announced but never shown falling on the speaker. A more hopeful reading takes Phlebas's drowning as a purifying baptism and the thunder's commands as a real way out, and a strong essay weighs the two.",
    },
    {
      title: 'Fragmentation and cultural memory',
      body: "A “heap of broken images” is the poem's own description of what a culture has left once its shared beliefs have gone. Lines from Dante, Shakespeare, Spenser, Wagner and the Bible surface for a moment and vanish, often misapplied or degraded: Cleopatra's barge becomes a chair, Spenser's wedding song is set beside a list of modern litter, Ophelia's farewell closes a pub conversation. One reading treats the allusions as proof of decline, a noble past set against a shabby present. That is too simple, because the past in the poem is violent and hollow too, from Philomel's rape to Elizabeth and Leicester's idle flirtation on the river. The better reading is that fragments are all anyone now has, and the last lines turn that into a method: “These fragments I have shored against my ruins”.",
    },
    {
      title: 'Love, sex and sterility',
      body: "Almost every meeting between men and women in the poem fails. The lover in the hyacinth garden is struck dumb; the woman in the chair begs her partner to speak; Lil, who has had five children by thirty-one, is told to smarten herself up for a husband who wants “a good time”; the typist puts up with a clerk whose “vanity requires no response”; a Thames-daughter says of her seducer only “I made no comment.” In the Grail legend the Fisher King's wound makes both him and his land sterile, and the poem uses that link: loveless sex is a symptom of a barren culture. There is a real problem here worth confronting in an essay. The poem's disgust often seems to fall hardest on women, especially working-class women, and some modern critics read it as misogynistic. A strong answer can argue both: the poem pities these women, and it also looks down on them.",
    },
    {
      title: 'The modern city',
      body: "London is the poem's waste land. Eliot takes Baudelaire's vision of Paris as a swarming city of dreams, where ghosts accost passers-by in daylight, and makes London an “Unreal City”: a place of brown fog where a crowd of commuters flows over London Bridge like Dante's dead. Its real streets and churches are named precisely, King William Street, Saint Mary Woolnoth, Lower Thames Street, Magnus Martyr, and the precision makes the unreality worse. Yet the city is not only dead. In Part III the poem hears the “pleasant whining” of a mandoline from a pub where fishmen lounge at noon, and admires the “Inexplicable splendour” of a Wren church interior. By Part V the city has become every fallen capital at once, Jerusalem, Athens, Alexandria, Vienna, London, and finally a single word, “Unreal”.",
    },
    {
      title: 'Isolation and the failure to connect',
      body: "The poem is full of speech that reaches no one. “Speak to me. Why do you never speak. Speak.” says the woman in Part II, and her partner's replies stay inside his head. The typist has “one half-formed thought”; a Thames-daughter on Margate Sands can connect “Nothing with nothing”. In Part V the thunder's second command, to sympathise, meets the poem's bleakest idea, “We think of the key, each in his prison”: each of us is locked in a private self. Eliot's note supports it by quoting the philosopher F. H. Bradley, the subject of his own Harvard doctoral thesis. The theme matters because it explains the form. A poem of voices that never quite answer one another enacts the isolation it describes.",
    },
    {
      title: 'Spiritual thirst and the search for meaning',
      body: "Drought is the poem's image for life without faith, and water for the grace it lacks. Religion survives only in shrunken forms: a clairvoyante with a bad cold, a church that keeps the hours “With a dead sound”, a chapel with no windows that is only the wind's home. Part V is a pilgrimage through rock and dust, haunted by a hooded figure who recalls the risen Christ walking, unrecognised, beside his disciples on the road to Emmaus. The poem draws on Christianity, Buddhism and Hinduism without committing itself to any of them. Eliot joined the Church of England five years later, and some readers take the poem as the first stage of that journey. That reading has to be brought in from outside, though. Inside the poem the search is real and unfinished.",
    },
    {
      title: 'War and its aftermath',
      body: "The First World War is never described, yet its aftermath shapes the poem. Lil's husband is home after four years in the army; the crowd on London Bridge is compared to the dead; an old comrade is hailed from an ancient naval battle; in Part V “hooded hordes” stream across cracked plains while the capitals of Europe fall. Critics in the 1920s read the poem as the voice of a disillusioned post-war generation, a label Eliot disliked. It is more accurate to call the war the poem's background noise. It helps to explain the broken culture and the dead crowds, but the poem turns historical catastrophe into spiritual drought rather than making an argument about the war itself.",
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The shifting first-person voice',
      body: "The Waste Land has no single narrator, but an “I” keeps returning: it hails Stetson in the crowd, fishes in a dull canal behind a gasworks, and sits upon the shore at the end. Eliot's notes invite us to hear this voice as a version of the Fisher King, and as one of the many figures Tiresias contains. The most useful approach in an essay is to treat the speaker as a consciousness rather than a character: a mind in crisis, borrowing other people's words because its own have failed.",
    },
    {
      name: 'Marie',
      role: 'An aristocratic woman remembering the past, Part I',
      body: 'Marie recalls a summer in Bavaria and a childhood sledding with her cousin, an archduke. Her chatty, rootless voice, reading much of the night and going south in winter, belongs to a pre-war European elite. Scholars have linked her to Countess Marie Larisch, but the poem needs no source to make its point: her one vivid moment is the fear and exhilaration of the sled, and she has lived on memories since.',
    },
    {
      name: 'The hyacinth girl',
      role: 'The beloved in the hyacinth garden, Part I',
      body: "She speaks two lines, remembering the hyacinths she was given a year before. The speaker's memory of coming back with her from the Hyacinth garden, her arms full and her hair wet, ends in paralysis and silence rather than a declaration. She carries the promise of love and renewal that the speaker cannot answer. Some biographers connect her with Emily Hale, with whom Eliot fell in love as a Harvard graduate student, but the poem gives her no name.",
    },
    {
      name: 'Madame Sosostris',
      role: 'A fashionable clairvoyante, Part I',
      body: "The “wisest woman in Europe” has a bad cold and a wicked pack of Tarot cards, which Eliot's note admits he altered to suit himself. She is comic, a society fortune-teller fussing over a client's horoscope. Yet her cards predict much of what follows: the drowned Phoenician Sailor becomes Phlebas in Part IV, the one-eyed merchant becomes Mr Eugenides, and her warning to fear death by water hangs over the rest of the poem. She is the poem's joke about a culture that has swapped prophecy for fortune-telling, and her prophecies come true.",
    },
    {
      name: 'Stetson',
      role: 'A comrade hailed in the City crowd, Part I',
      body: "The speaker stops Stetson in the morning crowd and claims they fought together “in the ships at Mylae”, a Roman naval battle of 260 BC, then asks whether the corpse he planted in his garden has begun to sprout. The joke is grim: the buried god of the fertility myths has become a corpse planted in a garden like a bulb. Stetson never answers. The section ends by turning on the reader, in Baudelaire's French, as the speaker's double and brother.",
    },
    {
      name: 'The woman in the chair',
      role: 'A wealthy, anxious woman, Part II',
      body: 'She is introduced through her room, a glittering clutter of jewels, perfumes and a painting of Philomel, as if she were one more ornament in it. When she speaks, her lines come as short, desperate commands and questions: speak, stay, what are you thinking. Readers often connect her with Vivienne Eliot, who read the drafts, but the portrait is also a type: luxury without purpose, asking what they shall ever do.',
    },
    {
      name: 'The silent companion',
      role: 'Her partner, whose replies are never spoken, Part II',
      body: "He answers only in his head, and only with images of death: an alley of rats and dead men's bones, and the drowned man of Shakespeare's Tempest whose eyes have turned to pearls. Then a snatch of ragtime breaks in. His silence is numbness, not strength. The pair end by planning an empty daily routine and a game of chess, sleepless and waiting for someone to knock.",
    },
    {
      name: 'Lil',
      role: 'A working-class wife, discussed in the pub, Part II',
      body: "Lil is heard only through her friend's retelling. She is thirty-one, has had five children, nearly died giving birth to one of them, young George, and has taken pills to end a further pregnancy, which have damaged her health. Her husband Albert is coming home from the army. The poem gives her one sharp moment of resistance, a straight look at her friend, and otherwise shows her worn down by a life she did not choose.",
    },
    {
      name: "Lil's friend",
      role: 'The pub narrator, Part II',
      body: "She tells the whole story in a Cockney voice, punctuated by “I said” and “she said”, and her advice is brutal: smarten up, get new teeth, or other women will give Albert what he wants. She is funny, vivid and unkind. Her monologue fills the pub scene, some thirty lines, cut across again and again by the barman's call for closing time.",
    },
    {
      name: 'Albert',
      role: "Lil's husband, just demobbed, Part II",
      body: 'Albert is absent, known only through what he has said and what he wants. He has been in the army four years, gave Lil money for new teeth, and wants a good time. The Sunday dinner at the end of the scene is his homecoming. He stands for a generation of returning soldiers, and for the strain the war placed on marriages.',
    },
    {
      name: 'Mr Eugenides',
      role: 'A merchant from Smyrna, Part III',
      body: "Unshaven, with a pocket full of currants and a trader's talk of shipping terms, he invites the speaker in colloquial French to lunch at the Cannon Street Hotel and a weekend at the Metropole, an invitation many readers take as a sexual proposition. His Greek name means well-born, which is ironic. Eliot's note says that the one-eyed merchant melts into the Phoenician Sailor, so trade, desire and death by water blur together.",
    },
    {
      name: 'Tiresias',
      role: 'The blind prophet who watches, Part III',
      body: "In Greek myth Tiresias was a blind prophet of Thebes who lived for seven years as a woman. In the poem he is an old man with a woman's breasts who watches the typist and the clerk and says he has “foresuffered” it all. Eliot's note makes a large claim for him: what Tiresias sees is “the substance of the poem”, because, the note says, all the women are one woman and the two sexes meet in him. Whether that is convincing is a good essay question: he appears in only one scene, but his weary, knowing tone may be the tone of the whole poem.",
    },
    {
      name: 'The typist',
      role: 'A young office worker, Part III',
      body: "She comes home at teatime to a cramped room where her underwear dries at the window and the divan is also her bed. Bored and tired, she lets the clerk's advances happen without wanting them, and afterwards feels only relief. The poem allows her one half-formed thought and then fits her, through a parody of Goldsmith, into the role of the fallen woman of an old song. Many readers find that unjust to her, and now feel more for her than the poem's tone seems to.",
    },
    {
      name: 'The young man carbuncular',
      role: "A house agent's clerk, Part III",
      body: "Spotty, over-confident and on the make, he arrives with “one bold stare”. The poem mocks his social pretensions with a simile about the silk hat of a Bradford millionaire, a man of new industrial money. He takes the typist's indifference for a welcome, and leaves with a patronising kiss, feeling his way down the unlit stairs. The satire on him is sharp, but many readers find it snobbish too: part of what the poem seems to despise is that he is lower middle class and trying to rise.",
    },
    {
      name: 'The Thames-daughters',
      role: 'Three women of the river, Part III',
      body: "Modelled, Eliot's note says, on the Rhine-daughters of Wagner's opera Götterdämmerung, they sing a wordless refrain and then speak in turn of their seductions, naming places from Highbury, Richmond and Kew to Moorgate and Margate. Their tone is flat, almost numb. The third speaks the poem's most desolate line about meaning itself: she can connect nothing with nothing.",
    },
    {
      name: 'Phlebas',
      role: 'A drowned Phoenician sailor, Part IV',
      body: "Dead a fortnight, he has forgotten the gulls, the sea swell and the profit and loss of trade. The ten lines of Part IV describe the current picking his bones and end with a warning to every reader, Gentile or Jew, who steers by the wheel and watches the wind, reminding them that the drowned man was once as handsome as they are. He fulfils Madame Sosostris's card and her warning. Whether his drowning is merely an end, or the purifying death of the fertility myths, is the key interpretive question of Part IV.",
    },
    {
      name: 'The Fisher King',
      role: 'The wounded king of the Grail legend',
      body: "He is never named in the poem itself; Eliot's notes point to him. His wound makes his land a waste, and in the legend only a questing knight can heal it. The speaker slips into his role twice: fishing in the dull canal in Part III, and at the end, sitting on the shore with the dry plain behind him, asking whether he should at least set his lands in order.",
    },
    {
      name: 'The thunder',
      role: 'The voice that speaks in Part V',
      body: "After the long drought the thunder speaks a single syllable, DA, heard three times as the Sanskrit commands “Datta”, “Dayadhvam” and “Damyata”. It is the nearest thing the poem has to a voice of authority, and it comes from outside Western culture altogether. It gives commands, not comfort, and the speaker's replies show how far he is from obeying them.",
    },
  ],

  keyQuotes: [
    {
      text: 'April is the cruellest month, breeding / Lilacs out of the dead land',
      where: 'Part I, The Burial of the Dead, lines 1-2',
      analysis:
        "The poem opens by overturning the oldest convention of spring poetry. At the start of Chaucer's Canterbury Tales, April's showers bring new life and send people on pilgrimage; here April is cruel because it forces life out of the dead. The line break leaves “breeding” hanging, so growth becomes something done to the land, like a painful waking. One reading makes the speakers afraid of renewal itself, since winter's numbness was safer than memory and desire. Keep that fear in mind at the end, when the land waits for the rain it dreads here.",
    },
    {
      text: 'A heap of broken images',
      where: 'Part I, The Burial of the Dead, line 22',
      analysis:
        "Spoken by a prophetic voice that addresses the reader as “Son of man”, as God addresses the prophet in Ezekiel (Eliot's note gives the reference). The phrase is widely read as the poem's description of itself: a culture that has lost its faith keeps only fragments of its myths and texts, and they no longer make a whole. “Images” can also mean idols, so the line carries a prophet's contempt as well as grief. Link it to the last lines, where the fragments are not mourned but gathered up.",
    },
    {
      text: 'I will show you fear in a handful of dust.',
      where: 'Part I, The Burial of the Dead, line 30',
      analysis:
        "The prophetic voice offers shelter under a red rock, then turns the offer into a threat: what it will reveal is mortality itself. The line is built as a promise, “I will show you”, but what is shown is dust, the traditional image of the body's end. Readers who know the epigraph can go further: in the myth, the Sibyl who now longs to die had asked for as many years as the grains in a handful of sand. Long life without renewal is the waste land's condition.",
    },
    {
      text: 'I was neither / Living nor dead, and I knew nothing',
      where: 'Part I, The Burial of the Dead, lines 39-40',
      analysis:
        "The memory of the hyacinth garden should be the poem's one moment of fulfilled love, and it ends in paralysis. The line break suspends the speaker on “neither”, caught between states. It is framed by quotations from Wagner's opera Tristan und Isolde, a story of fatal love: before it, a song of the wind blowing towards home; after it, a report that the sea is desolate and empty. One reading sees a moment of mystical vision, “Looking into the heart of light”; the more convincing one sees a failure of nerve, a love the speaker could not meet.",
    },
    {
      text: 'I had not thought death had undone so many.',
      where: 'Part I, The Burial of the Dead, line 63',
      analysis:
        "The commuters crossing London Bridge are described in Dante's words on first seeing the crowds of the dead at the entrance to Hell (Eliot's note cites Inferno, Canto III). The quiet shock of “undone” makes the ordinary morning rush a procession of lost souls. Many readers also hear the war in it: in 1922 “so many” dead would have called the trenches to mind. The effect is to make the modern city both a real place and a vision of spiritual death.",
    },
    {
      text: 'The Chair she sat in, like a burnished throne',
      where: 'Part II, A Game of Chess, line 77',
      analysis:
        "Eliot copies Enobarbus's famous description of Cleopatra on the river (Antony and Cleopatra, Act 2 Scene 2) word for word, except that Shakespeare's first noun is barge. One word changes and everything goes: the queen gliding on the river becomes a woman fixed in a chair, and passion becomes décor. The long sentence that follows, heavy with glitter and perfume, smothers her in her own possessions. It is the clearest example in the poem of allusion used to measure the present against the past.",
    },
    {
      text: 'still the world pursues, / “Jug Jug” to dirty ears',
      where: 'Part II, A Game of Chess, lines 102-103',
      analysis:
        "Above the mantel hangs a picture of Philomel, who in Ovid's story was raped by King Tereus and turned into a nightingale. Her song fills the desert with “inviolable voice”, but the world hears only a crude noise fit for “dirty ears”. The shift from past tense (she cried) to present (the world pursues) makes the violation ongoing. The sound returns in Part III, repeated six times, as if the poem cannot stop hearing it. It is a central image of beauty and suffering degraded.",
    },
    {
      text: 'My nerves are bad to-night. Yes, bad. Stay with me.',
      where: 'Part II, A Game of Chess, line 111',
      analysis:
        "The woman's speech is set in quotation marks; her partner's replies are not, which suggests that he never says them aloud. Short sentences and the anxious repetition of “bad” give the rhythm of panic. The line is often linked to Eliot's marriage, and Vivienne read the drafts of this section, but it works as drama in its own right: a plea for company met by silence. It is the poem's most direct picture of two people together and utterly alone.",
    },
    {
      text: 'You ought to be ashamed, I said, to look so antique.',
      where: 'Part II, A Game of Chess, line 156',
      analysis:
        "Lil's friend tells her she looks old, though Lil is “only thirty-one”. The word “antique” links the two halves of Part II: the rich woman's room has an “antique mantel”, and here a working-class woman is called antique because of what childbirth and poverty have done to her. The repeated “I said” shows the speaker's self-importance. The line exposes how the pressure on Lil comes as much from other women as from Albert.",
    },
    {
      text: 'Good night, ladies, good night, sweet ladies',
      where: 'Part II, A Game of Chess, line 172',
      analysis:
        "The pub's closing-time farewells slide into Ophelia's farewell in Hamlet (Act 4 Scene 5), spoken as she leaves the stage in her madness, not long before her drowning is reported. It is often called her last line, but she returns later in the scene. The allusion lifts the Cockney chatter into tragedy and at the same time makes Ophelia's madness sound like the end of a night out. It also carries the section's anxiety about time running out, sounded all through the scene by the barman's “HURRY UP PLEASE”. Through Ophelia, death by water is already in view at the end of Part II, two parts before Phlebas drowns.",
    },
    {
      text: 'Sweet Thames, run softly, till I end my song.',
      where: 'Part III, The Fire Sermon, line 176',
      analysis:
        "The refrain of Edmund Spenser's Prothalamion (1596), a marriage song in honour of an aristocratic double wedding, set beside the Thames. Eliot sets it against a list of what the river no longer carries, empty bottles, sandwich papers, cigarette ends, so the litter of modern summer nights is named in the act of being denied. The nymphs have departed, and so have their friends. The effect is ironic but also elegiac: the poem mocks the modern river and mourns the lost one.",
    },
    {
      text: 'I Tiresias, though blind, throbbing between two lives',
      where: 'Part III, The Fire Sermon, line 218',
      analysis:
        "Tiresias introduces himself as the watcher of the typist scene. “Throbbing” repeats the image of the taxi in the line before, so even the prophet is caught up in the city's mechanical pulse. “Between two lives” can mean both male and female, and past and present. Eliot's note calls him the most important figure in the poem, the place where all the others meet. His blindness makes the point: he sees by knowing, not by looking, because he has seen it all before.",
    },
    {
      text: 'Well now that’s done: and I’m glad it’s over.',
      where: 'Part III, The Fire Sermon, line 252',
      analysis:
        "The typist's only thought after the clerk has gone, the one half-formed thought her brain allows. The flat monosyllables and the neat rhyme of “over” with “lover” two lines earlier make the act sound like a chore. It is the bathos at the centre of the poem's picture of modern sex. A satirical reading laughs at her emptiness; a more sympathetic one hears exhaustion and relief, and asks why the poem gives her so little else to say.",
    },
    {
      text: 'I can connect / Nothing with nothing.',
      where: 'Part III, The Fire Sermon, lines 301-302',
      analysis:
        "The third Thames-daughter speaks from Margate, where Eliot himself worked on the poem while recovering from illness. The line break isolates “connect” and then answers it with a double emptiness. It is the poem's most desolate statement about meaning, and it applies to the reader too, who is being asked to connect a heap of fragments. Its placing is significant: straight afterwards the poem turns to Augustine and the Buddha, as if only religion could make connections again.",
    },
    {
      text: 'Consider Phlebas, who was once handsome and tall as you.',
      where: 'Part IV, Death by Water, line 321',
      analysis:
        "The final line of the shortest part completes its turn, begun two lines earlier with “Gentile or Jew”, from the drowned sailor to the reader, in the manner of a memento mori, a reminder that you too will die. It fulfils Madame Sosostris's warning to fear death by water. The tone is calm, almost tender, unlike anything around it. Whether the drowning is simple decay or a purifying death, the baptism of the fertility myths, is left open, and that openness is the point of Part IV.",
    },
    {
      text: 'Here is no water but only rock',
      where: 'Part V, What the Thunder Said, line 331',
      analysis:
        'The first line of the desert journey. It has no punctuation, and the passage that follows repeats rock and water again and again, as if the mind of a man dying of thirst could think of nothing else. The rhythm is incantatory, closer to chant or prayer than to speech. Water here is grace or faith as much as a drink, and its absence is total: even the thunder in the mountains is dry and sterile, without rain.',
    },
    {
      text: 'Who is the third who walks always beside you?',
      where: 'Part V, What the Thunder Said, line 359',
      analysis:
        "A hooded figure walks beside two travellers, counted but never seen clearly. Eliot's notes point to two sources: the journey to Emmaus, where the risen Christ walks unrecognised beside two disciples, and an Antarctic expedition whose exhausted members kept sensing one more companion than they could count. The figure could be Christ, a hallucination, or death. The poem refuses to say. Note the word order, “walks always”, which is often misquoted.",
    },
    {
      text: 'These fragments I have shored against my ruins',
      where: 'Part V, What the Thunder Said, line 430',
      analysis:
        'The poem names its own method at the end. To “shore” is to prop up a structure that might collapse, and the fragments are the quotations in five languages that crowd the final lines. The line answers the “heap of broken images” of Part I: fragments once mourned are now used as supports. Whether this is defiance or desperation is the central question of the ending. It is also a statement about art after catastrophe, that it may be built only from pieces.',
    },
    {
      text: 'Shantih shantih shantih',
      where: 'Part V, What the Thunder Said, line 433',
      analysis:
        "Eliot's note says that the word, repeated as it is here, is a formal ending to an Upanishad, and that the familiar English phrase about a peace that passes understanding is only a feeble translation of it. Ending in Sanskrit is a bold choice. The peace is offered in a language few of its first readers could understand, and repeated three times like a ritual. It can be read as a real blessing or as peace named rather than reached, and a strong essay decides between them.",
    },
  ],

  extracts: [
    {
      title: 'The opening: April and Marie',
      where: 'Part I, The Burial of the Dead, lines 1-18',
      pointer:
        'From the first line, “April is the cruellest month”, to line 18, where Marie says she reads at night and goes south in winter: the whole first verse paragraph.',
      summary:
        'In the first seven lines a collective voice, an unnamed “us”, resents spring for stirring memory and desire in the dead ground and prefers the numbness of winter under snow. Then, without warning, the voice becomes a single woman, Marie, remembering a summer shower by a Bavarian lake, coffee in a Munich garden, a line of German insisting that she is not Russian but a true German from Lithuania, and a childhood ride on a sled with her cousin the archduke. She ends by saying that she reads much of the night and goes south in the winter.',
      annotations: [
        {
          phrase: 'Memory and desire',
          note: "Spring stirs the past (memory) and the future (desire) at once, and both hurt; the pairing announces the poem's double pull between what is lost and what is wanted.",
        },
        {
          phrase: 'forgetful snow',
          note: 'Winter is praised because it makes us forget: snow as an anaesthetic, keeping a little life going without feeling, which is the waste land’s preferred state.',
        },
        {
          phrase: 'Summer surprised us',
          note: 'The season, the place and the voice all change in a single line. It is the first of the poem’s unannounced cuts, and the chatty register is a shock after the solemn opening.',
        },
        {
          phrase: 'And down we went.',
          note: 'The sled ride is the one moment of fear and exhilaration in Marie’s memories, and the fall it describes hints at the collapse of her pre-war world.',
        },
      ],
      question:
        'With close reference to lines 1-18, explore how Eliot presents memory and desire at the opening of The Waste Land, and how the passage prepares for the poem as a whole.',
    },
    {
      title: 'The typist and the young man carbuncular',
      where: 'Part III, The Fire Sermon, lines 215-256',
      pointer:
        'From line 215, “At the violet hour”, to line 256, where the typist puts a record on the gramophone: the whole typist scene, across two verse paragraphs.',
      summary:
        "At dusk, as office workers leave their desks, Tiresias, the blind prophet who has lived as both man and woman, watches a typist come home to her small room, light her stove, set out a meal of tinned food and receive a visitor, a clerk from a small house agent's. After the meal he makes advances she neither welcomes nor resists; he leaves, and she, relieved, smooths her hair and puts on a record. Most of the passage is written in quatrains rhymed alternately, in lines of about ten syllables, the regular stanza of an older, more stately poetry.",
      annotations: [
        {
          phrase: 'the human engine waits / Like a taxi throbbing waiting',
          note: 'People become machines at the end of the working day. The simile, and the repeated waiting, prepare for a love scene with no more feeling than an engine idling.',
        },
        {
          phrase: 'I too awaited the expected guest.',
          note: 'Tiresias is not surprised, because he has seen it all before. “Expected” makes the clerk’s arrival a routine, and “I too” makes the prophet uncomfortably complicit.',
        },
        {
          phrase: 'One of the low on whom assurance sits',
          note: 'The clerk’s confidence is compared to a silk hat on a Bradford millionaire: borrowed and ill-fitting. The satire is sharp, and many readers find it snobbish about class.',
        },
        {
          phrase: 'assaults at once',
          note: 'The verb turns the encounter into an attack. The typist offers no defence and no welcome; the poem presents indifference, not consent, and a modern reader should say so.',
        },
        {
          phrase: 'with automatic hand',
          note: 'Afterwards she moves like a machine, echoing the human engine at the start. The gramophone record she puts on is mechanical music to fill the silence.',
        },
      ],
      question:
        'Examine how Eliot presents the relationship between the typist and the young man carbuncular in lines 215-256, and consider how far the passage invites sympathy for either of them.',
    },
    {
      title: 'What the thunder said',
      where: 'Part V, What the Thunder Said, lines 395-433',
      pointer: 'From line 395, “Ganga was sunken”, to the final line, “Shantih shantih shantih”.',
      summary:
        "Far away in India the sacred river is low and the jungle waits for rain beneath gathering black clouds. The thunder speaks its syllable three times, and each is heard as a Sanskrit command from a fable in the Upanishads: give, sympathise, control. Each command brings a memory or reflection: a moment of surrender, the key that locks each person in a private prison, a boat answering a sailor's hand. Then the speaker sits fishing on the shore with the dry plain behind him, and the poem ends in a burst of quotations in several languages and the triple word for peace.",
      annotations: [
        {
          phrase: 'The awful daring of a moment’s surrender',
          note: '“Awful” means both terrible and awe-inspiring. What we have given is one irrevocable act of commitment, perhaps love, perhaps faith, and the poem says it is the only real existence we have had.',
        },
        {
          phrase: 'each confirms a prison',
          note: 'Thinking about the key only confirms that each of us is locked in. Eliot’s note quotes the philosopher Bradley on every mind as a closed circle, opaque to others.',
        },
        {
          phrase: 'your heart would have responded',
          note: 'The grammar is conditional: the heart would have answered, if invited. Control turns into regret for a chance not taken, and the image of the boat becomes a lost love.',
        },
        {
          phrase: 'London Bridge is falling down',
          note: 'A nursery rhyme closes the loop with the crowd that flowed over London Bridge in Part I: the unreal city is now collapsing in a child’s song.',
        },
      ],
      question:
        'How does Eliot present the possibility of renewal in lines 395-433? Refer closely to the passage and to the poem as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Allusion and misapplied quotation',
      example:
        "Line 77 rewrites Enobarbus's description of Cleopatra's barge as “The Chair she sat in”; line 176 borrows Spenser's wedding refrain for a polluted river.",
      effect:
        'Allusion lets Eliot measure the present against the past in a few words, and the gap is often the meaning. But the borrowings are rarely neat contrasts: they are bent, cut short and set in the wrong place, which makes the past seem as broken as the present. In an essay, name the source briefly and spend your words on what the change does.',
    },
    {
      technique: 'Juxtaposition, or collage',
      example:
        "Part II sets the ornate room of lines 77-138 directly against the pub of lines 139-172, where the barman's “HURRY UP PLEASE” cuts across Lil's story.",
      effect:
        'Placing unlike things side by side without comment forces the reader to make the connection: rich and poor, ancient and modern, sacred and sordid turn out to share the same emptiness. It works like the collages of Cubist painters, where scraps of reality sit inside an invented picture.',
    },
    {
      technique: 'Enjambment and trailing participles',
      example:
        'Five of the first six lines end on a present participle: breeding, mixing, stirring, covering, feeding.',
      effect:
        'Each line breaks on an unfinished action, so the verse itself seems to be dragged forward against its will, like the roots being stirred. The falling rhythm of the -ing endings gives the opening its weary, reluctant music, the sound of renewal as an ordeal.',
    },
    {
      technique: 'Polyphony: unannounced voices',
      example:
        "The working title, from Dickens, was “He do the Police in different voices”. The poem moves from Marie's German to the prophet's biblical English, to Cockney monologue, to the Thames-daughters' songs.",
      effect:
        'Nobody introduces the speakers, so the reader keeps losing track of who is talking, which mimics the experience of a crowded, disconnected city. Some critics hear the voices as parts of one mind in breakdown, others as a whole civilisation talking past itself. Both readings depend on the lack of a stable narrator.',
    },
    {
      technique: 'Repetition and incantation',
      example:
        '“Burning burning burning burning” at line 308, and the desert passage from line 331, which repeats rock and water again and again with almost no punctuation.',
      effect:
        'Repetition turns speech into chant, the language of ritual and prayer. In Part III it enacts the Buddha’s sermon on burning; in Part V it becomes the obsessive thinking of a man dying of thirst. The poem reaches for religious forms of language even when it cannot reach belief.',
    },
    {
      technique: 'Onomatopoeia and birdsong',
      example:
        'The birdsong of “Twit twit twit” and the nightingale’s “Jug jug” in Part III, the hermit-thrush’s “Drip drop” in Part V (lines 356-357), and the thunder’s single syllable DA.',
      effect:
        'The poem often gives up on words and records sounds. Birdsong in Eliot is usually a voice of suffering or longing (Philomel) or of the water the land lacks (the thrush). The thunder’s DA is the climax of this: pure sound that must be interpreted before it means anything.',
    },
    {
      technique: 'Ironic rhyme and parody',
      example:
        "The typist scene is written mostly in alternately rhymed quatrains, and line 253 borrows a line from the song in Goldsmith's The Vicar of Wakefield: “When lovely woman stoops to folly”.",
      effect:
        'The stately stanza and neat rhymes are at odds with the squalid scene, so the form itself mocks it. The parody of Goldsmith places the typist in an old, moralising song about a woman who stoops to folly, but in the modern version she feels no shame, only boredom. The irony cuts both ways, and a strong answer notices whom it hurts.',
    },
    {
      technique: 'Multilingual fragments',
      example:
        'German in Part I (lines 12, 31-34 and 42), French at lines 76, 202 and 429, Italian and Latin at lines 427-428, Sanskrit in the last lines.',
      effect:
        'The languages of Europe and India sit side by side, suggesting a whole civilisation’s memory and also its confusion, a Babel. They exclude most readers, which is part of the point: the fragments of culture are no longer shared. The final commands and blessing come in the least familiar language of all.',
    },
    {
      technique: 'Questions without answers',
      example:
        'The prophet’s question about what roots can grow from stony rubbish (lines 19-20), “What is that noise?” (117), “Who is the third” (359), and the last question, “Shall I at least set my lands in order?” (425).',
      effect:
        'The poem asks far more than it answers, and many questions receive no reply at all. The pattern builds the sense of a search, and the final question is modest rather than triumphant, which shapes how the ending should be read.',
    },
  ],

  structureForm: [
    {
      heading: 'Five parts, five titles',
      body: 'The Burial of the Dead takes its name from the burial service in the Book of Common Prayer. A Game of Chess points, through Eliot’s note, to the chess game in Thomas Middleton’s play Women Beware Women, during which a young woman is seduced. The Fire Sermon is the Buddha’s sermon, as the part’s last lines show. Death by Water fulfils Madame Sosostris’s warning. What the Thunder Said refers to the fable from the Upanishads that closes the poem. Read together, the titles trace a movement from burial, through desire and burning, to drowning and a final voice from the sky.',
    },
    {
      heading: 'Proportions',
      body: 'The five parts are very unequal. Part I runs from line 1 to 76, Part II from 77 to 172, Part III from 173 to 311 and is the longest, Part IV is only ten lines (312-321), and Part V runs from 322 to 433. The tiny Part IV works as a still point between the crowded city of Part III and the desert of Part V, and its calm, measured tone is unlike anything around it.',
    },
    {
      heading: 'Collage and the mythical method',
      body: 'There is no plot to follow and no narrator to trust. Instead Eliot places scenes, voices and quotations side by side and lets recurring images and a buried myth do the work of connection. This is what Eliot, writing about Joyce, called “the mythical method”: using an old story as a scaffold to give shape to modern chaos. In an exam, describe the structure as deliberate. The fragmentation is the form, not a failure of form.',
    },
    {
      heading: 'A poem of voices, and the question of Tiresias',
      body: 'The draft title promised many voices, and the finished poem delivers them: dramatic monologue, overheard conversation, song, prophecy and prayer. Eliot’s note claims that they all meet in Tiresias. That claim deserves testing rather than accepting. It is convincing in so far as the poem’s tone, weary and all-seeing, is his; it is weaker as a literal description, since he speaks in only one scene. A good essay can use the note as an argument to weigh, not as a key.',
    },
    {
      heading: 'Free verse that remembers metre',
      body: 'Most of the poem is free verse, with lines of very unequal length, but it keeps returning to older forms. The opening of Part II moves in something close to blank verse; the typist scene is in rhymed quatrains; the Thames-daughters sing in short broken lines; the pub monologue is almost prose. Eliot disliked the term free verse, and the poem shows why: its rhythms are always being measured against the regular metres it breaks.',
    },
    {
      heading: 'The notes',
      body: 'The notes were added for the first book edition, partly because the publisher thought the poem too short. They give sources and hints, such as the Fisher King, Tiresias and the Upanishad, and some seem playful, like the note that a dead sound on the stroke of nine is a phenomenon Eliot had often noticed. In a 1956 lecture Eliot expressed some regret that the notes had sent critics hunting for sources. Use them as context and evidence of intention, but argue from the poem.',
    },
    {
      heading: 'The ending',
      body: 'The last eight lines pile up fragments: a nursery rhyme, Dante, a Latin poem, the French poet Nerval, Kyd’s revenge tragedy The Spanish Tragedy, the thunder’s three commands and the triple Shantih. After a poem of broken voices, the ending is a heap of quotation held together by ritual repetition. It resolves nothing, but it has the shape of a ceremony, and that tension between form and content is the thing to write about.',
    },
    {
      heading: 'Finding your way: line numbers and editions',
      body: 'Most editions print line numbers every ten lines, and this guide uses them. In Part V the printed numbers run one behind a physical count of the lines, so count from the nearest printed number rather than from the start of the part. Editions also differ in small ways: some print the barman’s call with the apostrophe in it’s and some without, some print to-night in line 111 where others print tonight, and a word in line 415 has two spellings. Always quote from the edition your school uses.',
    },
  ],

  vocabulary: [
    {
      term: 'Modernism',
      definition:
        'The movement in the arts in the early twentieth century that broke with Victorian forms: fragmented structure, many voices, allusion and experiment. The Waste Land and Joyce’s Ulysses, both of 1922, are among its best-known works in English.',
    },
    {
      term: 'Allusion',
      definition:
        'A reference to another text, person or event. The Waste Land alludes to dozens of sources, from the Bible to a ragtime song.',
    },
    {
      term: 'Collage',
      definition:
        'An artwork made by assembling fragments of different materials. Used of the poem’s method of placing unconnected scenes, voices and quotations side by side.',
    },
    {
      term: 'Juxtaposition',
      definition:
        'Placing two contrasting things side by side so that each changes how we see the other, such as the rich woman’s room and the pub in Part II.',
    },
    {
      term: 'Polyphony',
      definition:
        'Many voices. The poem shifts between speakers without introducing them, which is why the draft title spoke of different voices.',
    },
    {
      term: 'Impersonality',
      definition:
        'Eliot’s idea, set out in Tradition and the Individual Talent, that poetry should transform personal feeling into something objective rather than express it directly.',
    },
    {
      term: 'The mythical method',
      definition:
        'Eliot’s phrase, from his 1923 essay on Ulysses, for using an ancient myth as a hidden structure to give shape to modern chaos.',
    },
    {
      term: 'Epigraph',
      definition:
        'A quotation placed at the start of a work. The Waste Land’s epigraph, in Latin and Greek from Petronius’s Satyricon, tells of the Sibyl at Cumae, who hangs in a jar and says she wants to die.',
    },
    {
      term: 'Sibyl',
      definition:
        'A prophetess of the ancient world. The Sibyl of Cumae was granted long life but not youth, and withered away: an image of life without renewal.',
    },
    {
      term: 'Fisher King',
      definition:
        'In the Grail legend, the wounded king whose injury makes both him and his land barren until a questing knight heals him. The poem’s speaker takes on his role.',
    },
    {
      term: 'Grail legend',
      definition:
        'The medieval stories of the knights’ quest for the Holy Grail. Jessie Weston argued that they grew out of ancient fertility rituals.',
    },
    {
      term: 'Tiresias',
      definition:
        'The blind prophet of Thebes in Greek myth, who lived for seven years as a woman. He watches the typist scene, and Eliot’s note calls him the most important figure in the poem.',
    },
    {
      term: 'Clairvoyante',
      definition:
        'A woman who claims to see the future. Madame Sosostris is a “famous clairvoyante” who reads Tarot cards, a pack of cards used for fortune-telling.',
    },
    {
      term: 'Demobbed',
      definition:
        'Demobilised: released from the armed forces at the end of a war. Lil’s husband Albert has just been demobbed after four years in the army.',
    },
    {
      term: 'Carbuncular',
      definition:
        'Covered in carbuncles, that is boils or pimples. Eliot’s mock-grand phrase for the clerk puts the adjective after the noun, as in older poetry, which makes it absurd.',
    },
    {
      term: 'Demotic',
      definition:
        'Of ordinary people; colloquial. Mr Eugenides speaks “demotic French”, the everyday French of commerce, not the language of literature.',
    },
    {
      term: 'Laquearia',
      definition:
        'Latin for a panelled ceiling. Eliot’s note points to Virgil’s Aeneid, Book I, where lamps hang from the golden ceiling at Dido’s banquet, another doomed queen.',
    },
    {
      term: 'Memento mori',
      definition:
        'Latin for remember that you must die: an image or saying that reminds us of death. Part IV ends with one, addressed straight to the reader.',
    },
    {
      term: 'Bathos',
      definition:
        'A sudden drop from the elevated to the trivial or ridiculous, such as the typist’s one thought after the clerk has gone.',
    },
    {
      term: 'Upanishad',
      definition:
        'One of the ancient philosophical scriptures of Hinduism. The thunder’s fable in Part V comes from the Brihadaranyaka Upanishad.',
    },
    {
      term: 'Datta, Dayadhvam, Damyata',
      definition:
        'Sanskrit commands heard in the thunder in Part V, which Eliot’s note glosses as give, sympathise and control.',
    },
    {
      term: 'Shantih',
      definition:
        'Sanskrit for peace. Repeated three times, it is, Eliot’s note says, a formal ending to an Upanishad, and it is the last word of the poem.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How far do you agree that The Waste Land is, above all, a poem about the failure of love?',
        skill: 'Whole-text argument, weighing an interpretation',
        guidance: [
          'Decide your line first. A strong answer might agree that every relationship in the poem fails, but argue that the poem is about the failure of meaning and faith, of which failed love is a symptom.',
          'Trace love across the poem in order: the hyacinth garden in Part I, the couple and the pub in Part II, the typist and the Thames-daughters in Part III.',
          'Use the Fisher King to connect them: in the legend his wound makes both the king and his land barren, so sexual failure stands for spiritual failure.',
          'Weigh the counter-argument with Part V: the thunder’s first command, to give, recalls “The awful daring of a moment’s surrender”, which can be read as an act of love or faith that the poem honours.',
          'Bring in the critical debate about the poem’s women: is the disgust aimed at modern life or at them? Take a position.',
          'Conclude by returning to the word failure: does the poem present love as impossible, or as something the waste land has forgotten how to do?',
        ],
      },
      {
        question: 'Explore the ways in which Eliot presents the modern city in The Waste Land.',
        skill: 'Whole-text essay with context',
        guidance: [
          'Start with “Unreal City” in Part I: the crowd on London Bridge described in Dante’s words for the dead.',
          'Show how precise London geography, streets, churches and the Thames, sharpens the sense of unreality rather than softening it.',
          'Use the Thames in Part III: Spenser’s wedding river set against litter, and the Thames-daughters’ seductions.',
          'Balance the bleakness with the moments of life the poem allows, such as the mandoline in the fishmen’s pub and the splendour of Magnus Martyr.',
          'End with the falling towers of Part V and London Bridge falling down: the city as every doomed capital, placed in the context of post-war Europe.',
        ],
      },
      {
        question:
          'With close reference to Part III, lines 215-256, examine Eliot’s presentation of relationships between men and women, and relate the passage to the poem as a whole.',
        skill: 'Close reading of a passage, set in the whole text',
        guidance: [
          'Open with the frame: the violet hour, the human engine and Tiresias as watcher.',
          'Analyse the form: rhymed quatrains and regular lines applied to a squalid scene, and the parody of Goldsmith at line 253.',
          'Look closely at the language of the encounter: “assaults”, “no defence”, “indifference”, and the typist’s one thought.',
          'Discuss the class satire on the clerk and whether the passage’s contempt is fair.',
          'Link outwards: the couple in Part II, Lil and Albert, the Thames-daughters, and the Fisher King’s barren land.',
          'Finish with Eliot’s note on Tiresias and decide whether the scene really is the substance of the poem.',
        ],
      },
      {
        question:
          'Some readers argue that the ending of The Waste Land offers peace in name only. Discuss this view.',
        skill: 'Evaluating an interpretation of the ending',
        guidance: [
          'Set out what the ending offers: thunder after drought, three commands, a question about setting lands in order, and the triple Shantih.',
          'Test each command against the speaker’s reply: what have we given, each in his prison, a heart that would have responded.',
          'Consider the final fragments: are they shored up in defiance, or the debris of a mind in ruins?',
          'Use context carefully: the Upanishad, and Eliot’s move to the Church of England in 1927, without reading the later faith back into the poem.',
          'Reach a judgement. One strong line is that the poem names the conditions of peace without claiming to have met them.',
        ],
      },
      {
        question: 'How does Eliot use fragmentation to shape meaning in The Waste Land?',
        skill: 'Form and structure across the whole text',
        guidance: [
          'Define fragmentation in this poem: unannounced voices, broken quotations, changes of place and language, unequal parts.',
          'Show that the fragments connect through recurring images: water and drought, rock, dust, the river, the city, the drowned man.',
          'Use the two statements the poem makes about itself: the heap of broken images in Part I and the fragments shored against ruins in Part V.',
          'Bring in the mythical method and the collage techniques of modern painting as context for the form.',
          'Argue whether the fragmentation expresses a broken civilisation, a broken mind, or both, and what the ending does with it.',
        ],
      },
    ],
    tips: [
      'Quote exactly. Classic slips with this poem: spelling cruellest with one l (an American spelling the poem does not use), putting always before walks in line 359, and writing ruin for ruins in line 430.',
      'Give line numbers or part titles for every reference. Examiners reward precise location, and the poem is long enough that a vague reference to it as a whole is not enough.',
      'Do not try to explain every allusion. Name a source briefly, then spend your words on what the change does to it.',
      'Use Eliot’s notes as evidence of his intentions, not as the answer. The best essays argue with them, especially the claim about Tiresias.',
      'Treat the poem’s women and working-class characters critically. Recognising that the satire can be snobbish or unfair is a sign of a confident reader, not a weaker one.',
      'Keep biography in proportion. Eliot’s illness and marriage explain the pressure behind the poem; they do not turn each voice into a real person.',
      'Link the parts. Madame Sosostris’s cards, the drowned sailor and the city crowd all return, and tracing them shows you understand the design.',
      'For the ending, avoid both extremes: it is not a simple salvation, and it is not pure despair. The strongest answers explain why it withholds a verdict.',
    ],
  },

  modelAnswer: {
    question: 'How far do you agree that the ending of The Waste Land offers peace in name only?',
    paragraph:
      "The ending does offer something the rest of the poem lacks, but Eliot is careful to present it as a possibility rather than an achievement. For the first time the drought is broken by a voice from outside the waste land: the thunder speaks, and its syllable DA is heard as three commands, to give, to sympathise and to control. Yet each command exposes a failure. Asked what we have given, the speaker can only recall “The awful daring of a moment’s surrender”, a single act that “an age of prudence” could never undo; asked to sympathise, he admits that thinking of the key only “confirms a prison”; and the boat that answers the sailor's hand is followed by a heart that “would have responded”, a conditional that turns control into regret. The speaker's last question, “Shall I at least set my lands in order?”, is modest, not triumphant, and the lines that follow are a heap of quotation in five languages, “fragments” held up against “ruins”. So when the poem closes on “Shantih shantih shantih”, a formal ending to an Upanishad, the peace is real as a form and a hope, but it is spoken in a language few of its first readers could understand. I would therefore agree only in part: the ending does not deliver peace, but it names what peace would require, which makes it more honest than either despair or consolation.",
    commentary: [
      'It answers the question in its first sentence and keeps the judgement in view to the end, where it qualifies the statement rather than simply accepting or rejecting it.',
      'It works through the passage in order and quotes briefly and precisely, analysing a single word or grammatical form each time (surrender, prison, the conditional would have).',
      'It connects the ending to the poem as a whole through the fragments and ruins, showing that the writer understands the design rather than one passage.',
      'It uses context economically: the Upanishad is mentioned because it changes the meaning of the last word, not as a display of knowledge.',
      'It weighs two readings, peace as achieved and peace as merely named, and explains why its own position is more convincing.',
    ],
  },

  timeline: [
    {
      where: 'Part I, lines 1-7',
      title: 'April, the cruellest month',
      summary:
        'A collective voice complains that spring stirs memory and desire in the dead ground, and remembers winter, which kept them numb and warm under a covering of snow.',
      setting: 'A barren land waking into spring',
      who: [],
      quote: 'April is the cruellest month',
      themes: ['Death and rebirth'],
      tension: 3,
      significance:
        'It sets up the whole poem’s fear of renewal, and the pattern of death and rebirth it will doubt.',
    },
    {
      where: 'Part I, lines 8-18',
      title: 'Marie remembers',
      summary:
        'Without warning the voice becomes Marie, recalling a summer shower in Bavaria, coffee in a Munich garden, and a childhood ride on a sled with her cousin the archduke.',
      setting: 'Bavaria before the war: a lake, a palace garden, the mountains',
      who: ['Marie'],
      quote: 'And down we went.',
      themes: ['Fragmentation and cultural memory', 'War and its aftermath'],
      tension: 2,
      significance:
        'The first unannounced change of voice, and a glimpse of the pre-war world the poem has lost.',
    },
    {
      where: 'Part I, lines 19-30',
      title: 'The stony rubbish',
      summary:
        'A prophetic voice asks what can grow out of this stony rubbish, describes a desert of broken images and dead trees, and offers to show fear in a handful of dust.',
      setting: 'A desert under a beating sun, with shadow beneath a red rock',
      who: ['The speaker'],
      quote: 'I will show you fear in a handful of dust.',
      themes: ['Fragmentation and cultural memory', 'Spiritual thirst and the search for meaning'],
      tension: 4,
      significance:
        'It introduces the desert, the rock and the dust, which return in Part V, and names the poem’s broken images.',
    },
    {
      where: 'Part I, lines 31-42',
      title: 'The hyacinth garden',
      summary:
        'Between two quotations from Wagner’s opera of fatal love, the speaker remembers returning with the hyacinth girl from the garden and finding himself unable to speak, neither living nor dead.',
      setting: 'A hyacinth garden, remembered',
      who: ['The speaker', 'The hyacinth girl'],
      quote: 'I was neither / Living nor dead',
      themes: ['Love, sex and sterility', 'Isolation and the failure to connect'],
      tension: 4,
      significance:
        'The poem’s one moment of possible love ends in paralysis, the pattern for every relationship that follows.',
    },
    {
      where: 'Part I, lines 43-59',
      title: 'Madame Sosostris reads the cards',
      summary:
        'A fashionable clairvoyante with a bad cold lays out Tarot cards: the drowned Phoenician Sailor, Belladonna, the one-eyed merchant, a blank card. She warns her client to fear death by water.',
      setting: 'A fortune-teller’s consulting room',
      who: ['Madame Sosostris', 'The speaker'],
      quote: 'Fear death by water.',
      themes: ['Spiritual thirst and the search for meaning', 'Death and rebirth'],
      tension: 2,
      significance:
        'Her cards preview figures who return later, so a comic scene quietly sets out the poem’s plan.',
    },
    {
      where: 'Part I, lines 60-76',
      title: 'Unreal City',
      summary:
        'In brown winter fog a crowd of workers flows over London Bridge like Dante’s dead. The speaker hails an old comrade, Stetson, and asks about the corpse he planted in his garden.',
      setting: 'London Bridge and King William Street at nine in the morning',
      who: ['The speaker', 'Stetson'],
      quote: 'I had not thought death had undone so many.',
      themes: ['The modern city', 'War and its aftermath', 'Death and rebirth'],
      tension: 4,
      significance:
        'The modern city becomes a vision of living death, and the part ends by turning its accusation on the reader.',
    },
    {
      where: 'Part II, lines 77-138',
      title: 'The woman in the chair',
      summary:
        'A rich woman sits in a glittering, over-perfumed room beneath a picture of Philomel. She begs her partner to speak; his answers, apparently never said aloud, are images of rats, bones and drowned eyes.',
      setting: 'An opulent room at night',
      who: ['The woman in the chair', 'The silent companion'],
      quote: 'My nerves are bad to-night. Yes, bad. Stay with me.',
      themes: ['Isolation and the failure to connect', 'Love, sex and sterility'],
      tension: 5,
      significance:
        'The most intense picture of a relationship in the poem: two people together and entirely alone.',
    },
    {
      where: 'Part II, lines 139-172',
      title: 'Closing time in the pub',
      summary:
        'In a pub at closing time, Lil’s friend retells how she warned Lil to smarten up for Albert, back from the army, while the barman keeps calling time. It ends in Ophelia’s farewell.',
      setting: 'A London pub at closing time',
      who: ["Lil's friend", 'Lil', 'Albert'],
      quote: 'Good night, ladies, good night, sweet ladies',
      themes: ['Love, sex and sterility', 'War and its aftermath', 'The modern city'],
      tension: 4,
      significance:
        'The working-class half of Part II mirrors the rich half: a different class, the same emptiness.',
    },
    {
      where: 'Part III, lines 173-214',
      title: 'The river and the rat',
      summary:
        'By a Thames emptied of its nymphs and its summer litter, the speaker sings Spenser’s wedding refrain, fishes in a dull canal as a rat crawls past, and receives an invitation, often read as a proposition, from Mr Eugenides, a Smyrna merchant.',
      setting: 'The Thames, a canal behind a gasworks, the City at noon',
      who: ['The speaker', 'Mr Eugenides', 'The Fisher King'],
      quote: 'Sweet Thames, run softly, till I end my song.',
      themes: ['The modern city', 'Fragmentation and cultural memory', 'Love, sex and sterility'],
      tension: 3,
      significance:
        'The speaker takes on the Fisher King’s role, and the river becomes the poem’s central image of a spoiled past.',
    },
    {
      where: 'Part III, lines 215-256',
      title: 'The typist and the clerk',
      summary:
        'At the violet hour Tiresias watches a typist come home, eat from tins and receive a clerk, who makes advances she does not want or resist. When he leaves she feels only relief.',
      setting: 'A cramped room at dusk, the divan also her bed',
      who: ['Tiresias', 'The typist', 'The young man carbuncular'],
      quote: 'I Tiresias, though blind, throbbing between two lives',
      themes: [
        'Love, sex and sterility',
        'Isolation and the failure to connect',
        'The modern city',
      ],
      tension: 4,
      significance:
        'Eliot’s note calls what Tiresias sees the substance of the poem; it is its fullest scene of loveless sex.',
    },
    {
      where: 'Part III, lines 257-311',
      title: 'The Thames-daughters and the fire',
      summary:
        'The river sweats oil and tar; three Thames-daughters sing and tell of their seductions, the last on Margate Sands. The part ends with Augustine and the Buddha, and the single word burning.',
      setting: 'The Thames from the City to Greenwich, then Margate Sands',
      who: ['The Thames-daughters', 'The speaker'],
      quote: 'Burning burning burning burning',
      themes: [
        'Love, sex and sterility',
        'Spiritual thirst and the search for meaning',
        'Isolation and the failure to connect',
      ],
      tension: 5,
      significance:
        'Desire is revealed as the fire the Buddha preached against, and the poem turns for the first time to religion.',
    },
    {
      where: 'Part IV, lines 312-321',
      title: 'Death by water',
      summary:
        'Phlebas the Phoenician, drowned a fortnight, has forgotten the gulls and the profit and loss. A current picks his bones, and the reader is told to consider him.',
      setting: 'Under the sea, in a whirlpool',
      who: ['Phlebas'],
      quote: 'Consider Phlebas, who was once handsome and tall as you.',
      themes: ['Death and rebirth'],
      tension: 3,
      significance:
        'The shortest part fulfils Madame Sosostris’s warning and leaves open whether drowning is decay or purification.',
    },
    {
      where: 'Part V, lines 322-394',
      title: 'The desert journey',
      summary:
        'Opening lines that recall the arrest and death of Christ give way to travellers crossing a waterless mountain desert. They sense a hooded third walking beside them, see the great cities of history fall, and reach an empty chapel as a damp gust brings rain.',
      setting: 'A mountain desert, a white road, a ruined chapel',
      who: ['The speaker'],
      quote: 'Here is no water but only rock',
      themes: [
        'Spiritual thirst and the search for meaning',
        'War and its aftermath',
        'Death and rebirth',
      ],
      tension: 5,
      significance:
        'The poem’s drought reaches its crisis, and its religious search becomes a pilgrimage.',
    },
    {
      where: 'Part V, lines 395-433',
      title: 'What the thunder said',
      summary:
        'The thunder speaks three Sanskrit commands, give, sympathise, control. The speaker sits fishing on the shore, asks whether to set his lands in order, and ends with fragments and the word for peace.',
      setting: 'The sacred river under black clouds, then the shore',
      who: ['The thunder', 'The speaker', 'The Fisher King'],
      quote: 'Shantih shantih shantih',
      themes: [
        'Spiritual thirst and the search for meaning',
        'Fragmentation and cultural memory',
        'Death and rebirth',
      ],
      tension: 4,
      significance:
        'The ending offers the conditions of renewal and a ritual of peace, without saying that either has been achieved.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The hyacinth girl',
      kind: 'lover and beloved',
      note: 'The memory of the hyacinth garden, where love brings paralysis rather than union, is the pattern for every relationship in the poem.',
    },
    {
      from: 'The speaker',
      to: 'Stetson',
      kind: 'old comrades',
      note: 'The speaker hails a friend from a battle fought more than two thousand years before, collapsing every war into one; Stetson never answers.',
    },
    {
      from: 'Madame Sosostris',
      to: 'Phlebas',
      kind: 'fortune-teller and her card',
      note: 'The drowned Phoenician Sailor she draws in Part I becomes Phlebas in Part IV, so her comic prophecy comes true.',
    },
    {
      from: 'Mr Eugenides',
      to: 'Phlebas',
      kind: 'merchant and sailor who merge',
      note: 'Eliot’s note says the one-eyed merchant melts into the Phoenician Sailor: trade, desire and drowning become one figure.',
    },
    {
      from: 'The woman in the chair',
      to: 'The silent companion',
      kind: 'a couple',
      note: 'She demands speech and he answers only in his head, with images of death: the poem’s starkest picture of two people alone together.',
    },
    {
      from: 'Lil',
      to: 'Albert',
      kind: 'wife and husband',
      note: 'He wants a good time after four years in the army; she is worn out by childbirth. The war’s strain on marriage, seen from below.',
    },
    {
      from: "Lil's friend",
      to: 'Lil',
      kind: 'friend and critic',
      note: 'The friend’s advice is cruel as well as practical, and Lil’s straight look is her one moment of resistance.',
    },
    {
      from: 'The young man carbuncular',
      to: 'The typist',
      kind: 'a joyless encounter',
      note: 'He takes her indifference for welcome; she feels only relief when he goes. There is no love on either side.',
    },
    {
      from: 'Tiresias',
      to: 'The typist',
      kind: 'watcher and watched',
      note: 'The prophet sees the scene and claims to have suffered it all before, so he is a witness who also, in some sense, shares in what he sees.',
    },
    {
      from: 'The speaker',
      to: 'The Fisher King',
      kind: 'the speaker takes on the role',
      note: 'Fishing in the canal in Part III and on the shore in Part V, the speaker becomes the wounded king of a barren land.',
    },
    {
      from: 'The thunder',
      to: 'The speaker',
      kind: 'command and response',
      note: 'The thunder commands give, sympathise, control; the speaker’s replies show how far he is from obeying.',
    },
  ],

  compareWith: [
    {
      title: 'Antony and Cleopatra',
      href: '/revision/texts/antony-and-cleopatra',
      reason:
        'Part II opens by rewriting Enobarbus’s description of Cleopatra on her barge, so reading the play shows exactly what Eliot’s modern woman in her chair has lost.',
    },
    {
      title: 'Hamlet',
      href: '/revision/texts/hamlet',
      reason:
        'Ophelia’s farewell from her madness scene closes Part II, and the play shares the poem’s sense of a rotten state, a paralysed hero and death by water.',
    },
    {
      title: 'The Tempest',
      href: '/revision/texts/the-tempest',
      reason:
        'Ariel’s song of the drowned man with pearls for eyes and Ferdinand’s music upon the waters run through the poem, where Shakespeare’s sea-change into something rich becomes plain drowning.',
    },
    {
      title: 'The Great Gatsby',
      href: '/revision/texts/the-great-gatsby',
      reason:
        'Fitzgerald’s novel of the same decade has its own waste land, the valley of ashes, and shares the poem’s picture of wealth, empty relationships and lost faith after the war.',
    },
  ],

  contentGuidance: [
    'mortality',
    'violence',
    'intimate_relationships',
    'mental_health',
    'mythological_religious',
    'supernatural',
    'discrimination',
  ],

  quotesFromElsewhere: [
    'He do the Police in different voices',
    'il miglior fabbro',
    'the present decay of eastern Europe',
    'not an accident',
    'an escape from emotion',
    'futility and anarchy',
    'the mythical method',
    'the substance of the poem',
  ],

  sources: [
    {
      label:
        'The Waste Land, Project Gutenberg eBook #1321 (the 1922 Boni and Liveright text, with Eliot’s notes): every quotation from the poem and the notes was checked against it, with its line number, and the word count was made from it',
      url: 'https://www.gutenberg.org/ebooks/1321',
    },
    {
      label: 'Project Gutenberg #1321 plain text, as read for the line-by-line check',
      url: 'https://www.gutenberg.org/cache/epub/1321/pg1321.txt',
    },
    {
      label:
        'Wikisource, Poems (Eliot, 1926), The Waste Land: a second, independent printing, diffed line by line against Gutenberg; every quotation here is from a line on which the two agree',
      url: 'https://en.wikisource.org/wiki/Poems_(Eliot,_1926)/The_Waste_Land',
    },
    {
      label:
        'Nobel Prize, T. S. Eliot biographical: St Louis, Harvard, the Sorbonne and Merton, schoolmaster and bank clerk, Faber, The Criterion 1922-1939, British citizenship and the Anglican Church in 1927, death on 4 January 1965',
      url: 'https://www.nobelprize.org/prizes/literature/1948/eliot/biographical/',
    },
    {
      label:
        'Poets.org, T. S. Eliot: born 26 September 1888, settled in England 1914, married Vivienne Haigh-Wood 1915, Lloyds Bank, British citizen 1927, Nobel Prize 1948, died in London 4 January 1965',
      url: 'https://poets.org/poet/t-s-eliot',
    },
    {
      label:
        'Wikipedia, The Waste Land: Margate and Lausanne, Pound’s editing, the working title, publication in The Criterion (16 October 1922), The Dial, Boni and Liveright (December 1922, first with notes) and the Hogarth Press (September 1923), the drafts and the 1971 facsimile, reception',
      url: 'https://en.wikipedia.org/wiki/The_Waste_Land',
    },
    {
      label:
        'Wikipedia, T. S. Eliot: Harvard study of Indian philosophy and Sanskrit 1911-1914, meeting Pound in September 1914, marriage on 26 June 1915, Highgate School, Lloyds Bank 1917, the Bradley dissertation, Anglican and British subject 1927',
      url: 'https://en.wikipedia.org/wiki/T._S._Eliot',
    },
    {
      label:
        'T. S. Eliot, Tradition and the Individual Talent, in The Sacred Wood (Wikisource): the escape from emotion and the catalyst',
      url: 'https://en.wikisource.org/wiki/The_Sacred_Wood/Tradition_and_the_Individual_Talent',
    },
    {
      label:
        'T. S. Eliot, Ulysses, Order, and Myth, The Dial, volume 75, 1923 (Wikisource): the mythical method',
      url: 'https://en.wikisource.org/wiki/The_Dial_(Third_Series)/Volume_75/Ulysses,_Order,_and_Myth',
    },
    {
      label:
        'Charles Dickens, Our Mutual Friend, Project Gutenberg eBook #883: the line that gave the drafts their working title',
      url: 'https://www.gutenberg.org/ebooks/883',
    },
    {
      label:
        'Held editions in src/data/full-texts (Project Gutenberg): Antony and Cleopatra, Act 2 Scene 2 (the barge speech); Hamlet, Act 4 Scene 5 (Ophelia’s farewell); The Tempest, Act 1 Scene 2 (Ariel’s song and Ferdinand’s music upon the waters)',
    },
    {
      label:
        'Wikipedia, Cumaean Sibyl: the epigraph from Petronius’s Satyricon, and the long life without youth',
      url: 'https://en.wikipedia.org/wiki/Cumaean_Sibyl',
    },
    {
      label: 'Wikipedia, Battle of Mylae: 260 BC, the First Punic War, Rome against Carthage',
      url: 'https://en.wikipedia.org/wiki/Battle_of_Mylae',
    },
    {
      label: 'Wikipedia, From Ritual to Romance (1920) and The Golden Bough (first published 1890)',
      url: 'https://en.wikipedia.org/wiki/From_Ritual_to_Romance',
    },
    {
      label:
        'Wikipedia, Fisher King and Tiresias: the wounded king and barren land; the blind prophet who lived seven years as a woman',
      url: 'https://en.wikipedia.org/wiki/Fisher_King',
    },
    {
      label: 'Wikipedia, Ulysses (novel): published in Paris on 2 February 1922',
      url: 'https://en.wikipedia.org/wiki/Ulysses_(novel)',
    },
    {
      label:
        'Wikipedia, Lake Starnberg and Hofgarten (Munich): the Bavarian places Marie remembers',
      url: 'https://en.wikipedia.org/wiki/Lake_Starnberg',
    },
    {
      label:
        'The Great Gatsby, Project Gutenberg eBook #64317: the valley of ashes, for the comparison',
      url: 'https://www.gutenberg.org/ebooks/64317',
    },
  ],
}
