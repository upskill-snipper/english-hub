import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Handmaid's Tale, Margaret Atwood (McClelland and Stewart, Toronto, 1985;
 * Jonathan Cape, London, 1986). A SUPPLEMENT: the page at
 * /resources/revision-notes/the-handmaids-tale keeps its overview, context,
 * themes, characters, key quotations, exam questions and plans. This file adds
 * what it lacked (passages for close reading, language analysis, structure and
 * form, and a glossary) together with the timeline and character map the
 * animated visuals draw.
 *
 * HOW THE QUOTATIONS WERE CHECKED (26 September 2026). The novel is in UK
 * copyright and no licensed copy is held in src/data/full-texts, so the guide
 * test cannot check these words. Every quoted phrase in this file was found,
 * word for word, through Open Library's full-text search of the Internet
 * Archive's scans, in at least one scanned copy of the novel itself (the Cape
 * 1986, Virago 1990 and Vintage 1996, 2010 and 2017 London editions, the
 * McClelland and Stewart / Emblem Toronto editions, and US editions from
 * Houghton Mifflin, Fawcett, Anchor and Knopf), and nearly always also in a
 * printed study guide or work of criticism that quotes it.
 * Chapters were fixed from chapter headings visible in the scans (Chapters 1,
 * 2, 7, 23 and 41), from chapter citations in York Notes (Coral Ann Howells) and
 * other critics, and from Shmoop's chapter-by-chapter summaries, checked
 * against GradeSaver's section summaries.
 *
 * SECOND CHECK (26 September 2026, an independent verifier). Every quoted
 * phrase, 60 in all counting repeats, was searched again as an exact phrase in
 * the Internet Archive full-text index restricted to seventeen scans of the
 * novel itself, and every one was found word for word, with its punctuation, in
 * at least eight editions. That includes the two the first search missed, Aunt
 * Lydia's "Now you are being given freedom from." and "I tell, therefore you
 * are." The openings of Chapters 1, 2, 7, 23 and 41 were confirmed from the
 * chapter headings printed beside them in the scans; other chapters rest on the
 * words around each quotation in the scans and on LitCharts, SparkNotes and
 * Shmoop chapter summaries. That check corrected these statements in the first
 * draft: that Aunts are allowed to read (Offred recalls that the Beatitudes came
 * from a tape so that no Aunt had to read); that Rita told Offred what became
 * of her predecessor (in Chapter 9 Rita tells her nothing); that Offred told the
 * Commander she had no say (in Chapter 32 she questions whether it is better);
 * that Janine's baby was formally declared an Unbaby (the word Ofglen uses in
 * Chapter 33 is shredder); that the empty space on the ceiling is linked to the
 * predecessor's death only in Chapter 32 (the Commander links it in Chapter
 * 29); that Offred went to Jezebel's disguised as a Wife; that Moira had warned
 * Offred things would get worse; and a count of six men on the Wall and a
 * converted school as the Red Centre, which no source confirmed.
 *
 * EDITIONS DIFFER, so no quotation here contains a word that changes between
 * them: "any more" (UK, Canada) and "anymore" (US); "judgement" and
 * "judgment"; "colour" and "color"; "centre" and "center"; "President" and
 * "president"; and at the Red Centre, "Blessed are the meek" (Virago) against
 * "Blessed be the meek" (Fawcett, Anchor). That is why Moira's line is quoted
 * only as far as "Women can't hold property" and Chapter 28's reflection on
 * Luke only from "Instead, I am his."
 *
 * THE PAGE ABOVE THIS SUPPLEMENT. Checked while writing this file, it carries
 * errors this file does not repeat:
 * - It says the novel does not give the Commander the surname Waterford. The
 *   Historical Notes name two candidates, Frederick R. Waterford and B.
 *   Frederick Judd, and Pieixoto leans towards Waterford.
 * - The cassettes were not labelled "Hound Dog". The labels the Notes list
 *   include "Elvis Presley's Golden Years", "Folk Songs of Lithuania", "Boy
 *   George Takes It Off" and "Mantovani's Mellow Strings".
 * - Offred's wordplay in Chapter 19 runs chair, a leader of a meeting, a mode
 *   of execution, the first syllable in charity, the French word for flesh.
 *   There is no "chastity".
 * - "Context is all" is Offred's. It occurs twice in her narration, once in the
 *   form "Context is all; or is it ripeness?", an echo of King Lear, and neither
 *   occurrence is in the Historical Notes. No source found gives it to
 *   Pieixoto.
 * - "a thing without a hand or a face" returned no match in any scanned book,
 *   and "Her fault, her fault, her fault" none in the novel scans searched.
 * - The dedication reads "For Mary Webster and Perry Miller", not "in memory
 *   of".
 * - The year 2005 for the Commanders appears in no source consulted.
 *
 * COPYRIGHT. Quotations are held under 15 words and the page total under the
 * 400-word ceiling in fair-dealing.ts. Longer passages are located by chapter
 * and summarised. Page numbers are not given, because the UK and US paperbacks
 * are paged differently.
 */
export const guide: StudyGuide = {
  slug: 'the-handmaids-tale',
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  form: 'novel',
  scope:
    'The whole novel: 46 chapters grouped in fifteen titled sections, followed by the Historical Notes, which are part of the text you study and should be read as closely as the rest. Chapter numbers are the same in every edition, but page numbers differ between the UK Vintage paperbacks and US editions, so this guide locates every moment by chapter and section.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Margaret Atwood 1985. First published in Canada by McClelland and Stewart in 1985 and in the United Kingdom by Jonathan Cape in 1986. Short quotations are used for criticism and review; longer passages are described and located rather than printed.',
  },
  workLength: {
    words: 90000,
    basis:
      'Estimated, not counted. The Virago edition of 1990 runs to 324 pages including the Historical Notes (Internet Archive catalogue record), which at about 280 words to a page gives roughly 90,000 words. Published estimates found by search range from about 90,000 to about 102,000 words, but those pages could not be opened to confirm them. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  native: {
    overview: '/resources/revision-notes/the-handmaids-tale',
    context: '/resources/revision-notes/the-handmaids-tale',
    themes: '/resources/revision-notes/the-handmaids-tale',
    characters: '/resources/revision-notes/the-handmaids-tale',
    keyQuotes: '/resources/revision-notes/the-handmaids-tale',
    examPractice: '/resources/revision-notes/the-handmaids-tale',
    modelAnswer: '/resources/revision-notes/the-handmaids-tale',
  },

  extracts: [
    {
      title: "Offred's room",
      where: 'Chapter 2, Section II: Shopping',
      pointer:
        'The opening paragraphs of Chapter 2, the first chapter of Section II, from “A chair, a table, a lamp.” to Offred’s explanation of why the window opens only partly and its glass cannot be broken.',
      summary:
        "Offred describes the room she has been given in the Commander's house, object by object: a chair, a table, a lamp, a plaster wreath on the ceiling with a blank space where a chandelier once hung, a single bed, a framed print of irises, and a window that opens only partly. She remembers Aunt Lydia telling the Handmaids to think of it as army life, notices that everything a rope could be tied to has been removed, and realises that the room has been designed to prevent suicide rather than escape. The passage moves the novel from the remembered gymnasium of Chapter 1 into the present tense.",
      annotations: [
        {
          phrase: 'A chair, a table, a lamp.',
          note: 'A verbless list in the present tense. Offred takes an inventory as a prisoner might, and the bareness of the sentence matches the bareness of the room. It also shows her holding on to exact naming, the skill Gilead most wants to take from women, since they are no longer allowed to read.',
        },
        {
          phrase: 'like the place in a face where the eye has been taken out',
          note: "The simile turns an innocent plaster ceiling into a mutilated face. It begins the novel's pattern of eyes and watching, which runs from the Handmaids' farewell, Under His Eye, to the secret police, the Eyes. The blank space is later linked to her predecessor's death: the Commander admits that the light fixture was taken down after she hanged herself (Chapter 29), and Offred pictures her there (Chapter 32), so the image gains its full weight only on a second reading.",
        },
        {
          phrase: 'They’ve removed anything you could tie a rope to.',
          note: "The flat, practical tone makes the implication more disturbing. The anonymous they, an authority without a face, recurs throughout the novel. The sentence tells us that the regime has anticipated the Handmaids' despair and planned around it, which is its own kind of cruelty: their suffering is expected and managed rather than prevented.",
        },
        {
          phrase: 'Think of it as being in the army, said Aunt Lydia.',
          note: "Aunt Lydia's voice enters Offred's present without quotation marks, as it does throughout the novel, as if it has become part of her own thinking. Her comparison presents confinement as service and duty, an ordinary sacrifice for a cause, which is how Gilead makes its demands sound reasonable.",
        },
        {
          phrase: 'Waste not want not. I am not being wasted. Why do I want?',
          note: 'Offred takes a thrifty household proverb and pulls it apart. The regime means that she, as a fertile woman, will not be wasted, but she hears the other sense of want: to desire. The question admits a longing that Gilead has no place for, and the wordplay is the first sign that language is where her independence survives.',
        },
        {
          phrase: 'It isn’t running away they’re afraid of.',
          note: 'The sentence reverses what we expect of a prison. The shatterproof glass and the window that opens only partly are there to keep her alive, not to keep her in, because she is valuable to the state. Her life is protected as property is protected, which is a chilling kind of care.',
        },
      ],
      question:
        "Explore how Atwood presents Offred's room in this passage, and how the novel develops its concern with confinement and survival elsewhere.",
    },
    {
      title: 'The day women lost their money and their work',
      where: 'Chapter 28, Section X: Soul Scrolls',
      pointer:
        'The long flashback in Chapter 28, from Offred’s memory of the catastrophe in which the President was shot and Congress machine-gunned, through the day her Compunumber is refused and she loses her job at the library, to her thought about Luke that night, which she calls “Unworthy, unjust, untrue.”',
      summary:
        "Offred remembers how Gilead began: the President was killed, Congress was attacked, the army declared a state of emergency and the Constitution was suspended, with the blame placed on an outside enemy. Life carried on much as before. Then one day her Compunumber was refused in a shop, and at the library where she worked the women were dismissed under a new law while armed men watched. Moira explained that women's accounts had been frozen and that their money would pass to their husbands or nearest male relatives. That night, as Luke comforted her, Offred suspected that he did not entirely mind.",
      annotations: [
        {
          phrase: 'They blamed it on the Islamic fanatics, at the time.',
          note: "The phrase at the time quietly tells us the official story was false. The group that took power blamed its own attack on an outside enemy, a familiar route to emergency powers, and Atwood shows how readily a frightened public accepts a scapegoat. Offred's flat tone records how little anyone, herself included, questioned it.",
        },
        {
          phrase: 'Keep calm, they said on television.',
          note: "Authority speaks in reassurance, and the reassurance works. The line captures the gap between official calm and real danger, and it prepares for Offred's admission later in the chapter that few people protested and that she stayed at home instead of joining them.",
        },
        {
          phrase: 'Compunumber',
          note: "Money in this world is already electronic, so it can be switched off for half the population in a single day. Atwood's point, which reads as strikingly modern, is that a cashless system makes control easy: nobody needs to seize women's savings when a number can simply stop working at the till.",
        },
        {
          phrase: 'Women can’t hold property',
          note: "Moira's blunt explanation turns a personal crisis into law. The short sentence shows rights disappearing through paperwork rather than open violence, and it is Moira, always blunter than Offred, who is able to name what has happened.",
        },
        {
          phrase: 'Instead, I am his.',
          note: 'Offred senses a shift in her marriage on the night everything changes. Luke comforts her, but she feels that they no longer belong to each other; she now belongs to him. The possessive is exact, because Gilead is about to give men control of everything women own, and even a loving husband gains from it.',
        },
        {
          phrase: 'Unworthy, unjust, untrue.',
          note: "Three negative adjectives rush to reject the suspicion about Luke, yet Offred immediately insists that it is what happened. The triple structure shows loyalty fighting with honesty, and the passage asks a difficult question: whether even kind and decent men gained something from women's loss of rights.",
        },
      ],
      question:
        "Explore how Atwood presents the loss of women's rights in this passage, and how the novel shows elsewhere that ordinary people allowed Gilead to happen.",
    },
    {
      title: "Professor Pieixoto's lecture",
      where: 'Historical Notes',
      pointer:
        'All of the Historical Notes, from the headnote describing a partial transcript of the Twelfth Symposium on Gileadean Studies to the final line, “Are there any questions?”',
      summary:
        "After Offred's narrative ends, the novel prints the transcript of an academic conference held at the University of Denay, Nunavit, on 25 June 2195. The chair, Professor Maryann Crescent Moon, introduces Professor James Darcy Pieixoto of Cambridge University, who explains that Offred's story was transcribed from about thirty cassette tapes found in a footlocker, that he and his co-editor, Professor Knotly Wade, had to decide the order of the tapes, and that Wade gave the account its title. He makes jokes, warns his audience against judging Gilead, tries to identify the Commander, and ends by admitting that the narrator's fate is unknown.",
      annotations: [
        {
          phrase: 'Underground Frailroad',
          note: "Pieixoto repeats other scholars' pun on the Underground Femaleroad, and the transcript records laughter and groans. The joke turns the escape network that may have saved Offred into comedy for a comfortable audience, and it trivialises the echo of the Underground Railroad, by which enslaved people escaped in nineteenth-century America.",
        },
        {
          phrase: 'in homage to the great Geoffrey Chaucer',
          note: "Pieixoto reveals that the title was chosen by his co-editor, Professor Wade, partly as a tribute to Chaucer's Canterbury Tales, and he adds that a bawdy pun on tale and tail was intended. A woman's testimony has been named by men partly for their own amusement, which changes how we hear the title we have been using all along.",
        },
        {
          phrase: 'Elvis Presley’s Golden Years',
          note: 'The tapes were hidden under the labels of old music cassettes, with a few songs on each before the voice begins. The detail is bathetic, but it shows how the testimony survived: disguised among the leftovers of a lost culture. It also reminds us that the novel we have read was spoken into a machine, then transcribed and ordered by others.',
        },
        {
          phrase: 'Our job is not to censure but to understand.',
          note: "This sounds like scholarly fairness, and the audience applauds. In context it is chilling: after a narrative of executions and enforced pregnancy, a historian declines to judge. Atwood tests whether the reader, who has just lived through Offred's account, will notice how easily understanding can slide into excuse.",
        },
        {
          phrase: 'the past is a great darkness, and filled with echoes',
          note: "Pieixoto's closing image is elegant and melancholy, and it echoes Offred's final words about darkness and light. But where she stepped into uncertainty, he retreats into it: the darkness becomes a reason why historians cannot know, rather than a reason to listen harder to the voice they have.",
        },
        {
          phrase: 'Are there any questions?',
          note: "The novel ends on a routine conference formula. Addressed to an audience in 2195, it lands on the reader, who has many questions about Offred's fate, her name and the professor's tone. Atwood ends not with an answer but with a demand that we do the judging Pieixoto refuses to do.",
        },
      ],
      question:
        "How does the Historical Notes section change the way the reader understands Offred's narrative? Refer closely to the Notes and to the rest of the novel.",
    },
  ],

  languageAnalysis: [
    {
      technique: 'Lists, fragments and the present tense',
      example:
        'Chapter 2 opens with a verbless list, “A chair, a table, a lamp.”, and Chapter 7 begins “The night is mine, my own time”.',
      effect:
        'Offred records her world item by item, like someone taking an inventory of a cell, and the present tense traps the reader in each moment with her, with no sign of how things will turn out. The short fragments suggest a mind conserving its energy and keeping control of the one thing it still owns: its attention. They contrast with the longer, more fluid sentences of her memories of the time before. One reading is that the present is bare because Gilead has stripped it; the past is where her language can still expand.',
    },
    {
      technique: 'Wordplay and etymology',
      example:
        "Sitting in a chair in Chapter 19, Offred turns the word over: “It is the first syllable in charity. It is the French word for flesh.” In the Commander's study in Chapter 23 the Scrabble words arrive one by one: “Larynx, I spell. Valance. Quince. Zygote.”",
      effect:
        "Wordplay is a form of resistance in a state that has taken reading from women. Offred's habit of splitting words open shows that language has histories Gilead cannot control. Her Scrabble words are pointed choices: the larynx is the organ of the voice she has lost, a zygote the fertilised cell the regime values her for. One reading treats the game as liberation. The more convincing reading notices that it happens on the Commander's terms, in his room, as his gift, so even her freedom with words is licensed by him.",
    },
    {
      technique: 'Coined words and euphemism',
      example:
        "Gilead's official vocabulary: a Salvaging is a public execution, a Particicution an execution carried out by the Handmaids themselves (Chapter 43), a Prayvaganza a mass prayer meeting and wedding (Chapters 33 and 34), and women and babies judged useless become Unwomen and Unbabies.",
      effect:
        "Gilead renames violence so that it sounds like rescue or celebration. Salvaging borrows a word for saving; Particicution fuses participation and execution, so that the crowd shares the killing; Prayvaganza turns worship into spectacle. The prefix un- does the opposite work, cancelling whole categories of people with a syllable. Offred's attention to these words is how the reader learns to see through them, and it links the novel to the dystopian tradition in which controlling language means controlling thought.",
    },
    {
      technique: 'Biblical and liturgical language',
      example:
        'Handmaids greet each other with “Blessed be the fruit” and reply “May the Lord open” (Chapter 4). At the Red Centre the recorded Beatitudes include “Blessed are the silent.” (Chapter 15), which Offred knows the regime has invented.',
      effect:
        "Scripture is Gilead's authority, but the regime rewrites it. The greeting reduces every meeting to fertility, and the invented Beatitude exposes the method: a real text is extended until it says what power needs. The effect is double. Readers who know the Bible recognise the distortion, while the Handmaids, forbidden to read, cannot check it. On this reading Atwood's target is not faith itself but the control of who is allowed to read the sacred text.",
    },
    {
      technique: "Aunt Lydia's slogans",
      example:
        "Aunt Lydia's lessons return in Offred's head: “Now you are being given freedom from.” (Chapter 5), “Ordinary, said Aunt Lydia, is what you are used to.” (Chapter 6), and the Red Centre motto “Pen Is Envy” (Chapter 29).",
      effect:
        "The slogans are built like proverbs, short, balanced and easy to remember, which is why they work. Antithesis turns loss into a gift, safety from danger in place of the freedom to act; the pun on Freud's idea of penis envy makes a woman's wish to write sound like a symptom. That Offred still hears these lines long after leaving the Red Centre is the clearest evidence in the novel of how indoctrination works: it keeps speaking after the teacher has gone.",
    },
    {
      technique: 'Metaphors of the body as a vessel',
      example:
        '“We are containers, it’s only the insides of our bodies that are important.” (Chapter 17), and in the study, “two-legged wombs, that’s all: sacred vessels, ambulatory chalices” (Chapter 23).',
      effect:
        "Offred adopts the regime's view of her body in order to mock it. The second image moves from blunt anatomy to the language of church ritual, a chalice being the cup used at the Christian Eucharist, so the phrase enacts Gilead's trick of dressing reduction up as holiness. The dismissive that's all shows that she has not accepted what she describes. The first example comes as she rubs smuggled butter into her skin, because hand cream is forbidden: even her small act of self-care is shadowed by the idea that only her womb matters.",
    },
    {
      technique: 'Colour imagery and juxtaposition',
      example:
        "At the Wall in Chapter 6, blood seeping through a hood reminds Offred of Serena Joy's red tulips, and she insists “The red is the same but there is no connection.”",
      effect:
        "Red is the colour of the Handmaids' dresses, of blood, of flowers and of fertility, and Atwood keeps these meanings colliding. Offred's denial is the point. She needs the images to stay separate so that she can bear what she sees, but the sentence itself joins them, and the reader cannot unsee the link between Gilead's worship of fertility and its violence. A strong answer traces the colour across the novel rather than treating it as a single symbol.",
    },
    {
      technique: 'Self-correction and metafiction',
      example:
        'After describing a night with Nick in Chapter 40, Offred stops: “I made that up. It didn’t happen that way.” She offers a second version, then admits “It didn’t happen that way either.”',
      effect:
        "Offred repeatedly shows the reader her own storytelling, reminding us that this is a reconstruction made after the event. One reading treats this as unreliability, a reason to doubt her. The more convincing reading is that it is a form of honesty under pressure: she refuses to pretend that memory is exact, and in a state that falsifies history, admitting uncertainty is itself truthful. It also means the novel's most private scene is the one she most openly admits to shaping.",
    },
    {
      technique: 'Direct address to an imagined listener',
      example: 'In Chapter 41 Offred speaks to an unknown you: “I tell, therefore you are.”',
      effect:
        "The line reworks Descartes's famous claim that thinking proves the thinker exists. Offred's existence depends on being heard, so she wills a listener into being, and in doing so she makes the reader that listener. The Historical Notes then reveal who actually heard her: a room of academics in 2195. Her hope is fulfilled, because her voice survived, and betrayed, because the audience laughs.",
    },
    {
      technique: 'Irony turned on the narrator',
      example:
        'Remembering life before Gilead, Offred says “Ignoring isn’t the same as ignorance, you have to work at it.” (Chapter 10).',
      effect:
        "A dry, aphoristic sentence carries one of the novel's most serious charges: that people like her helped Gilead to happen by choosing not to look at what was being done to others. Because the irony is aimed at Offred herself rather than at a villain, the warning is harder for the reader to dismiss. The same chapter's image of lives lived in the gaps between the news stories makes the point that being unnoticed once felt like freedom.",
    },
  ],

  structureForm: [
    {
      heading: 'Fifteen sections and seven Nights',
      body: "The novel's 46 chapters are grouped in fifteen titled sections. Seven are called Night (Sections I, III, VII, IX, XI, XIII and XV) and one is called Nap (Section V). These short sections are the only time Offred has to herself, and they are where her memories, prayers and storytelling happen: Chapter 7, the first Night in the Commander's house, begins “The night is mine, my own time”. The daytime sections take their titles from Gilead's routines and places: Shopping, Waiting Room, Household, Birth Day, Soul Scrolls, Jezebel's and Salvaging. The alternation creates a rhythm of public performance and private thought, and it means the narrative both begins and ends at night. The section with the most chapters, Jezebel's (Chapters 31 to 39), is also the one in which Offred breaks the most rules, so the structure swells as her secret life grows.",
    },
    {
      heading: 'Three layers of time',
      body: "Offred's narrative moves between three periods: the present in the Commander's house, told in the present tense; her training at the Red Centre; and the time before, with Luke, her daughter, Moira and her mother. The movement is prompted by objects and sensations rather than by chronology. The bath in Chapter 12 brings back her daughter, and the hotel that houses Jezebel's in Chapter 37 is one she once visited with Luke. The reader pieces together how Gilead came about only gradually, and the fullest account of the coup does not arrive until Chapter 28, more than halfway through. One reading sees this as the shape of trauma, which returns to painful moments rather than narrating them in order. Another, which fits the novel's politics, is that Atwood makes us experience Gilead as Offred did, already inside it, before we are told how it began.",
    },
    {
      heading: 'A tale, told rather than written',
      body: "In Chapter 7 Offred explains that she will “Tell, rather than write”, because she has nothing to write with and writing is forbidden. The novel presents itself as spoken, and the Historical Notes confirm that it was recorded on cassette tapes and transcribed by others. The title belongs to that frame. Pieixoto says it was given by Professor Knotly Wade partly “in homage to the great Geoffrey Chaucer”, whose Canterbury Tales name their tellers by trade or role, as in The Knight's Tale. The title therefore identifies Offred by her function, not her name, exactly as Gilead does. Her real name is never given to the reader: in Chapter 14 she says it is forbidden, and in Chapter 46 Nick uses it, but we do not hear it.",
    },
    {
      heading: 'Reconstruction and self-correction',
      body: 'Offred keeps reminding us that what we are reading has been rebuilt from memory. Chapter 23 opens with the warning “This is a reconstruction. All of it is a reconstruction.” In Chapter 40 she gives two versions of her first night with Nick and rejects both. Chapter 41 opens with an apology, “I wish this story were different.”, and Offred goes on to apologise that her story comes in fragments. These interruptions make the form of the novel part of its argument. Gilead controls the official story absolutely, so a narrator who admits gaps and revisions offers a different kind of truth: partial, personal and honest about its limits. The alternative reading, that Offred is simply unreliable, deserves a hearing, but it has to explain why she would volunteer her own doubts so often.',
    },
    {
      heading: 'Epigraphs and dedication',
      body: "Before the story begins, Atwood sets out three epigraphs and a dedication. The first epigraph is from Genesis 30, in which the childless Rachel gives her maid Bilhah to her husband Jacob so that Bilhah can bear children for her: the scriptural precedent Gilead uses for the Ceremony. The second is from Jonathan Swift's A Modest Proposal, the satire of 1729 that proposes, with a straight face, that the children of the Irish poor be sold as food, which signals that the novel is satire of a similar deadpan kind. The third is a Sufi proverb about there being no sign in the desert forbidding people to eat stones. One reading is that some things are so plainly against human nature that no law is needed, which makes Gilead's endless rules look like a confession. The dedication is to Mary Webster, a woman Atwood has described as an ancestor, who was accused of witchcraft in Puritan New England and survived being hanged, and to Perry Miller, the scholar of American Puritanism: two reminders that Gilead grows from real history.",
    },
    {
      heading: 'An ending that refuses to close',
      body: "Chapter 46 ends with Offred climbing into the black van, not knowing whether the men are Mayday rescuers, as Nick tells her, or the Eyes they appear to be. Her last sentence offers two possibilities, darkness or light, and chooses neither. The phrase step up gives her a small dignity, a movement upwards even into the unknown. A strong answer can argue either way: that the ending is hopeful, because Offred acts rather than waits, or bleak, because every choice left to her is someone else's. The Historical Notes add evidence without settling it. The tapes were found at what had been a station on the Underground Femaleroad, which suggests she reached it, but Pieixoto cannot say what happened to her afterwards. Atwood's sequel, The Testaments (2019), is a separate novel, and the set text should be discussed on its own terms.",
    },
    {
      heading: 'The Historical Notes as a frame',
      body: "The Notes change the genre of the book in its final pages. Offred's intimate, present-tense voice gives way to the transcript of an academic lecture, complete with stage directions for laughter and applause. The frame does two things at once. It reassures: Gilead has fallen, the tapes have survived, and women now chair academic conferences. It also indicts: Pieixoto jokes about the Handmaids, regrets that Offred did not record more about the regime's officials, and asks his audience not to judge. It even reorders the story, because Pieixoto and Wade decided the sequence of the tapes themselves. The more convincing reading holds both effects together. The Notes prove that Offred's testimony survived, and show in the same breath how easily it can be misread, which is why the novel ends by handing the final question to the reader.",
    },
    {
      heading: 'Dystopia and speculative fiction',
      body: "The Handmaid's Tale is a dystopia, an imagined society worse than our own, and on its first publication reviewers compared it with Orwell's Nineteen Eighty-Four. Atwood has preferred to call it speculative fiction rather than science fiction, because it imagines no new technology and builds its world from practices with historical precedent. The novel was begun in West Berlin in the spring of 1984 and published in Canada in 1985, when it won the Governor General's Award; it was nominated for the Booker Prize in 1986 and won the first Arthur C. Clarke Award in 1987. Nineteen Eighty-Four also ends with an appendix, on Newspeak, written as if from a later time, so comparing the two endings is a productive way into questions about form.",
    },
  ],

  vocabulary: [
    {
      term: 'Gilead',
      definition:
        'The Republic of Gilead, the theocratic state that has overthrown the government of the United States. The novel never names the town, but Offred lives in what is recognisably Cambridge, Massachusetts. The name Gilead comes from the Bible.',
    },
    {
      term: 'Handmaid',
      definition:
        'A fertile woman assigned to the household of a Commander whose Wife has no children, in order to bear a child for them. Handmaids wear red, with white wings around the face, and take the name of their Commander: Offred is of Fred.',
    },
    {
      term: 'Commander',
      definition:
        "A man of high rank in Gilead. Commanders are allowed a Wife, Marthas and, if the Wife is childless, a Handmaid. The Historical Notes suggest that Offred's Commander was Frederick R. Waterford or B. Frederick Judd.",
    },
    {
      term: 'Wife',
      definition:
        "The married woman of a Commander's household, dressed in blue. Serena Joy is the Wife in Offred's household; the Wives attend births and the Ceremony, and in Chapter 21 the Wife of Janine's household names the baby.",
    },
    {
      term: 'Martha',
      definition:
        "A household servant, dressed in green, who cooks and cleans. Rita and Cora are the Marthas in the Commander's house. The name recalls Martha in the Gospels, who busies herself with serving.",
    },
    {
      term: 'Econowife',
      definition:
        'The wife of a poorer man, who has no servants and must do every job herself. Econowives wear striped dresses and, Offred notices in Chapter 8, dislike the Handmaids.',
    },
    {
      term: 'Aunt',
      definition:
        'A woman who trains and supervises the Handmaids at the Red Centre. Aunts carry electric cattle prods, but even they are kept from reading aloud: in Chapter 15 Offred recalls that the Beatitudes were played to the Handmaids from a tape, so that no Aunt had to read. Aunt Lydia is the one whose sayings Offred remembers.',
    },
    {
      term: 'Red Centre',
      definition:
        "The Rachel and Leah Re-education Centre, where Handmaids are trained by the Aunts; the women call it the Red Centre. Chapter 1 is set in the former gymnasium where the trainees sleep. Many of Offred's memories of Moira and Janine come from there.",
    },
    {
      term: 'Guardian',
      definition:
        'A Guardian of the Faith, a man of low rank in a green uniform who guards checkpoints and does routine policing and menial work. Offred and Ofglen pass a checkpoint of Guardians on their walk into town (Chapter 4).',
    },
    {
      term: 'Angel',
      definition:
        "A soldier of Gilead. Angels guard the grounds of the Red Centre and fight Gilead's wars, and at the Prayvaganza in Chapter 34 twenty Angels are married to twenty young women.",
    },
    {
      term: 'Eye',
      definition:
        "A member of Gilead's secret police. The Eyes drive black vans marked with a winged eye and can take anyone away; in Chapter 27 Offred and Ofglen watch them seize a man in the street.",
    },
    {
      term: 'Unwoman',
      definition:
        "A woman who does not fit Gilead's roles, including older women, feminists and Handmaids who fail to conceive. Unwomen are sent to the Colonies. Offred fears becoming one.",
    },
    {
      term: 'Unbaby',
      definition:
        "A baby born with a serious deformity. On the day of Janine's labour, Offred reflects that such babies are quickly taken away (Chapter 19). Another word for one is a shredder, and at the Prayvaganza in Chapter 33 Offred learns that Janine's baby has turned out to be one.",
    },
    {
      term: 'Salvaging',
      definition:
        'A public execution. The bodies of executed men are hung on the Wall (Chapter 6), and in Chapter 42 the Handmaids are made to attend the hanging of two Handmaids and a Wife. The word, which means rescuing, is itself a euphemism.',
    },
    {
      term: 'Particicution',
      definition:
        'An execution carried out by the Handmaids themselves, on a man accused of a crime against a Handmaid (Chapter 43). The word combines participation and execution.',
    },
    {
      term: 'Prayvaganza',
      definition:
        'A large public religious event, combining prayer, spectacle and, in Chapters 33 and 34, a mass wedding. The word combines prayer and extravaganza.',
    },
    {
      term: 'Birthmobile',
      definition:
        'The vehicle that collects women when a Handmaid goes into labour: a red one for the Handmaids and a blue one for the Wives (Chapter 19).',
    },
    {
      term: 'The Colonies',
      definition:
        "The places where Unwomen and other outcasts are sent to clear toxic waste and work until they die. Moira describes a film about them in Chapter 38, and Offred recalls in Chapter 39 that Moira saw Offred's mother in it.",
    },
    {
      term: "Jezebel's",
      definition:
        "A secret club in a former hotel, where Commanders drink and meet women forced into prostitution. Jezebel is a queen condemned in the Bible, so the name suggests the men's contempt for the women they use there.",
    },
    {
      term: 'Mayday',
      definition:
        'The resistance movement and its password, from the old distress signal. Ofglen gives Offred the password in Chapter 31, to be used only in an emergency; Offred tries it on the new Ofglen in Chapter 44, and Nick uses it in Chapter 46.',
    },
    {
      term: 'Underground Femaleroad',
      definition:
        'The secret network that helps women escape from Gilead, named after the Underground Railroad that helped enslaved people escape in nineteenth-century America. Moira travels on it in Chapter 38.',
    },
    {
      term: 'Compunumber',
      definition:
        "A person's number in the electronic banking system. In Chapter 28 Offred's is refused, the first sign that women's money has been taken from them.",
    },
    {
      term: 'Palimpsest',
      definition:
        'A manuscript written over an earlier text that can still be partly seen. In Chapter 1 Offred imagines the music of old school dances lingering in the gymnasium as a “palimpsest of unheard sound”, and the idea describes the whole novel, in which the old world shows through the new.',
    },
    {
      term: 'Epigraph',
      definition:
        "A quotation set at the start of a book to suggest its concerns. The novel has three: from Genesis, from Swift's A Modest Proposal, and a Sufi proverb.",
    },
    {
      term: 'Speculative fiction',
      definition:
        "Atwood's preferred term for the novel: fiction that imagines a possible future built from things that have already happened somewhere, rather than from invented technology.",
    },
    {
      term: 'Frame narrative',
      definition:
        "A story set inside another story. The Historical Notes frame Offred's narrative as a document studied by historians in 2195.",
    },
    {
      term: 'Analepsis',
      definition:
        "A flashback: a return to events earlier than the present of the story. Offred's memories of the Red Centre and the time before are analepses.",
    },
    {
      term: 'Theocracy',
      definition:
        'A state governed in the name of God, in which religious authority and political power are the same. Gilead is a theocracy that uses the Bible to justify its laws.',
    },
  ],

  timeline: [
    {
      where: 'Chapter 1, Section I: Night',
      title: 'The gymnasium',
      summary:
        'The narrator remembers sleeping in a former gymnasium alongside other women, watched by Aunts carrying cattle prods, while armed Angels guarded the grounds outside. In the dark the women learned to lip-read, and the chapter ends with the names they whispered from bed to bed.',
      setting: 'The Red Centre, in a former gymnasium',
      who: ['Offred'],
      quote: 'We slept in what had once been the gymnasium.',
      themes: ['Memory and Resistance', 'Theocracy and State Control'],
      tension: 2,
      significance:
        'The novel opens in remembered time, and the whispered names are its first act of resistance: women keeping hold of who they are.',
    },
    {
      where: 'Chapter 2, Section II: Shopping',
      title: "Offred's room",
      summary:
        "In the present tense, Offred lists the few things in the room she has been given in the Commander's house and notes that anything a rope could be tied to has been removed. She dresses in red, collects tokens from Rita in the kitchen and sets out to shop.",
      setting: "Offred's room and the kitchen of the Commander's house",
      who: ['Offred', 'Rita'],
      quote: 'A chair, a table, a lamp.',
      themes: ['Theocracy and State Control', 'Complicity and Survival'],
      tension: 2,
      significance:
        "The room builds Gilead from objects and absences, and the missing chandelier becomes one of the book's most important details.",
    },
    {
      where: 'Chapter 3, Section II: Shopping',
      title: 'The Commander’s Wife',
      summary:
        "Walking through the garden, Offred recalls arriving five weeks earlier, when the Commander's Wife smoked a forbidden cigarette, told her to keep out of her way and reminded her that the husband was hers. Offred recognised her as Serena Joy, a singer on a gospel television programme she had watched as a child.",
      setting: "Serena Joy's garden and sitting room",
      who: ['Offred', 'Serena Joy'],
      themes: ['Gender and Patriarchy', 'Complicity and Survival'],
      tension: 2,
      significance:
        'A woman who once argued that women belong at home is now confined there, which complicates any reading of the novel as men against women.',
    },
    {
      where: 'Chapter 5, Section II: Shopping',
      title: 'Freedom from',
      summary:
        "Offred and Ofglen walk into town, and Offred recalls Aunt Lydia's two kinds of freedom. In a shop a heavily pregnant Handmaid turns out to be Janine, and outside a group of Japanese tourists ask through an interpreter whether the Handmaids are happy. Offred says that they are.",
      setting: 'The shops of Gilead: Milk and Honey and All Flesh',
      who: ['Offred', 'Ofglen', 'Janine', 'Aunt Lydia'],
      quote: 'Now you are being given freedom from.',
      themes: ['Theocracy and State Control', 'Gender and Patriarchy'],
      tension: 2,
      significance:
        "Gilead presents confinement as protection, and the tourists' question shows how a frightened answer can be mistaken for consent.",
    },
    {
      where: 'Chapter 6, Section II: Shopping',
      title: 'The Wall',
      summary:
        'On the way home the two Handmaids stop at the Wall, where the bodies of hanged men are displayed in white coats, marked as doctors who performed abortions when it was legal. Offred is relieved that none can be Luke, and the blood on one hood makes her think of the red tulips in the garden.',
      setting: 'The Wall, near the church',
      who: ['Offred', 'Ofglen'],
      quote: 'Ordinary, said Aunt Lydia, is what you are used to.',
      themes: ['Theocracy and State Control', 'Complicity and Survival'],
      tension: 3,
      significance:
        "Aunt Lydia's promise that horror will become ordinary is the novel's warning to its reader, remembered beside a row of bodies.",
    },
    {
      where: 'Chapter 7, Section III: Night',
      title: 'A story she is telling',
      summary:
        'Alone at night, Offred remembers Moira at college, a bonfire of magazines she watched with her mother as a child, and a broken memory of the day her daughter was taken from her. She says she would like to believe this is a story, because then she would have control over the ending.',
      setting: "Offred's room at night",
      who: ['Offred', 'Moira', "Offred's mother", "Offred's daughter"],
      quote: 'I would like to believe this is a story I’m telling.',
      themes: ['Memory and Resistance'],
      tension: 2,
      significance:
        'Offred names her narrative as a story told to a listener, which prepares for the Historical Notes and for every later moment she corrects herself.',
    },
    {
      where: 'Chapter 9, Section IV: Waiting Room',
      title: 'The message in the cupboard',
      summary:
        'Exploring her room a little at a time, Offred finds tiny words scratched in the cupboard, apparently by the Handmaid before her. She cannot translate them, but they feel like a message meant for her. When she tries to find out about the woman from Rita, Rita will tell her nothing.',
      setting: "The cupboard in Offred's room",
      who: ['Offred', 'Rita'],
      quote: 'Nolite te bastardes carborundorum.',
      themes: ['Language as Power', 'Memory and Resistance'],
      tension: 2,
      significance:
        'Writing, forbidden to women, reaches Offred from another woman, and the phrase becomes her private prayer.',
    },
    {
      where: 'Chapter 13, Section V: Nap',
      title: 'Moira arrives',
      summary:
        'Remembering the Red Centre, Offred recalls Moira being brought in and the two friends arranging to meet in the washroom. She also recalls Testifying, where Janine was made to describe an assault she had suffered years before, and the other trainees, as they had been taught, chanted that it was her fault.',
      setting: 'The Red Centre',
      who: ['Offred', 'Moira', 'Janine'],
      themes: ['Gender and Patriarchy', 'Complicity and Survival'],
      tension: 3,
      significance:
        "The Red Centre trains women to blame one another, and Offred admits that the chanting women meant what they said, which begins the novel's study of complicity.",
    },
    {
      where: 'Chapters 14 to 16, Section VI: Household',
      title: 'The Ceremony',
      summary:
        "The household gathers in the sitting room, where Offred watches the news and thinks about the name she is no longer allowed to use. The Commander reads from the Bible, including the story of Rachel and her maid Bilhah, and then the monthly Ceremony takes place, with Serena Joy holding Offred's hands.",
      setting: "The sitting room and Serena Joy's bedroom",
      who: ['Offred', 'The Commander', 'Serena Joy', 'Nick', 'Rita', 'Cora'],
      quote: 'My name isn’t Offred, I have another name',
      themes: ['Religion as Justification', 'Gender and Patriarchy'],
      tension: 4,
      significance:
        "Scripture is read aloud to authorise sexual violence. Offred's careful search for exact words for what happens, and her uneasy claim that she chose it over worse alternatives, is one of the novel's most debated passages.",
    },
    {
      where: 'Chapter 17, Section VI: Household',
      title: 'Butter and a stolen moment',
      summary:
        'Back in her room, Offred rubs butter she hid from her dinner tray into her skin, because hand cream is forbidden to Handmaids. Unable to sleep, she creeps downstairs to take something small from the sitting room, meets Nick in the dark, and they kiss before he tells her that the Commander wants to see her.',
      setting: 'The dark sitting room at night',
      who: ['Offred', 'Nick'],
      quote: 'I want to steal something.',
      themes: ['Memory and Resistance', 'Complicity and Survival'],
      tension: 3,
      significance:
        'Small thefts become ways of keeping a self, and the kiss begins the relationship with Nick on which the ending turns.',
    },
    {
      where: 'Chapters 19 to 21, Section VIII: Birth Day',
      title: 'Janine gives birth',
      summary:
        "A Birthmobile takes Offred and other Handmaids to the house where Janine, now Ofwarren, is in labour. The Handmaids chant around her while the Wives gather downstairs, and Janine gives birth to a girl who appears healthy, whom the household's Wife names Angela.",
      setting: "Another Commander's house",
      who: ['Offred', 'Janine'],
      themes: ['Gender and Patriarchy', 'Religion as Justification'],
      tension: 3,
      significance:
        "The only birth in the novel shows Gilead's ideal working as designed, and its cost to the mother, who will soon be moved on without her child.",
    },
    {
      where: 'Chapter 23, Section VIII: Birth Day',
      title: 'Scrabble in the study',
      summary:
        "Offred warns that what she is telling is a reconstruction. That evening she goes to the Commander's study, which she is forbidden to enter, and finds that he wants to play Scrabble, a game forbidden to her because women may not read. After two games he asks her to kiss him as if she meant it.",
      setting: "The Commander's study",
      who: ['Offred', 'The Commander'],
      quote: 'This is a reconstruction. All of it is a reconstruction.',
      themes: ['Language as Power', 'Complicity and Survival'],
      tension: 3,
      significance:
        "Forbidden words become currency between them, and Offred's warning makes the reader question every scene that follows.",
    },
    {
      where: 'Chapter 27, Section X: Soul Scrolls',
      title: 'Ofglen speaks',
      summary:
        'Outside Soul Scrolls, where machines print prayers, Ofglen asks whether Offred thinks God listens to them. Offred risks an honest answer, and the two women realise they can trust each other. Soon afterwards they watch the Eyes seize a man in the street and push him into a black van.',
      setting: 'The window of Soul Scrolls and the main street',
      who: ['Offred', 'Ofglen'],
      themes: ['Memory and Resistance', 'Theocracy and State Control'],
      tension: 3,
      significance:
        'Resistance begins with a single honest sentence, and the black van shows at once what it can cost.',
    },
    {
      where: 'Chapter 28, Section X: Soul Scrolls',
      title: 'How it happened',
      summary:
        'Offred remembers the coup: the President killed, Congress attacked and the Constitution suspended. Then one day her Compunumber was refused, women were dismissed from their jobs, and Moira explained that women could no longer hold property. That night Offred sensed that Luke did not entirely mind.',
      setting: "Offred's memories of her home and the library where she worked",
      who: ['Offred', 'Moira', 'Luke'],
      quote: 'Instead, I am his.',
      themes: ['Gender and Patriarchy', 'Theocracy and State Control'],
      tension: 4,
      significance:
        'Gilead arrives through ordinary systems, a bank number and a job, and the chapter plants a painful doubt about the man Offred loves.',
    },
    {
      where: 'Chapter 29, Section X: Soul Scrolls',
      title: 'The Latin explained',
      summary:
        'Offred writes out the Latin phrase for the Commander, who laughs and explains that it is a mock-Latin schoolboy joke, telling you not to let your oppressors grind you down. She realises that her predecessor must have learned it in this study, and he admits that the woman hanged herself.',
      setting: "The Commander's study",
      who: ['Offred', 'The Commander'],
      quote: 'I guess we thought we were pretty smart, back then.',
      themes: ['Language as Power', 'Complicity and Survival'],
      tension: 3,
      significance:
        'The message Offred treasured came from the man who holds power over her, which turns a sign of solidarity into evidence of a repeating pattern.',
    },
    {
      where: 'Chapter 31, Section XII: Jezebel’s',
      title: "Serena Joy's bargain",
      summary:
        'Ofglen gives Offred the password Mayday, to use only in an emergency. Then Serena Joy, doubting that the Commander can father a child, proposes that Offred sleep with Nick in secret, and offers to try to get her a picture of her daughter.',
      setting: "The streets near the Wall, then the Commander's house",
      who: ['Offred', 'Serena Joy', 'Ofglen'],
      themes: ['Complicity and Survival', 'Gender and Patriarchy'],
      tension: 3,
      significance:
        "Everyone in the household is now breaking Gilead's rules for their own reasons, and Offred is bound up in all of their secrets.",
    },
    {
      where: 'Chapter 32, Section XII: Jezebel’s',
      title: 'Better for some',
      summary:
        'Offred recalls an evening in the study when the Commander argued that the old world had failed men, who had nothing left to work for, and that Gilead was an improvement. When she questions whether it really is better, he admits that it is not better for everyone.',
      setting: "The Commander's study, remembered",
      who: ['Offred', 'The Commander'],
      quote: 'Better never means better for everyone, he says. It always means worse, for some.',
      themes: ['Theocracy and State Control', 'Gender and Patriarchy'],
      tension: 2,
      significance:
        "A powerful man states the regime's logic calmly and reasonably, which is more chilling than open cruelty.",
    },
    {
      where: 'Chapters 36 to 39, Section XII: Jezebel’s',
      title: "Jezebel's",
      summary:
        'The Commander gives Offred a smuggled costume and make-up and, with Nick driving, takes her in secret to a club for officials in a hotel she once visited with Luke. There she finds Moira, who tells her about her escape, her capture and her choice to work there rather than go to the Colonies.',
      setting: 'A former hotel used as a club for Commanders',
      who: ['Offred', 'The Commander', 'Moira', 'Nick'],
      themes: ['Gender and Patriarchy', 'Complicity and Survival'],
      tension: 4,
      significance:
        'The men who enforce purity keep a brothel for themselves, and the friend who stood for defiance seems worn down.',
    },
    {
      where: 'Chapter 40, Section XIII: Night',
      title: 'Nick',
      summary:
        "At midnight Serena Joy leads Offred through the silent house to the door, and she goes on alone to Nick's room above the garage. Offred gives two different accounts of what happened between them, and then says that neither is quite true.",
      setting: "Nick's room above the garage",
      who: ['Offred', 'Nick', 'Serena Joy'],
      quote: 'I made that up. It didn’t happen that way.',
      themes: ['Memory and Resistance', 'Complicity and Survival'],
      tension: 3,
      significance:
        "The novel's most private scene is the one Offred most openly admits to reshaping.",
    },
    {
      where: 'Chapters 42 and 43, Section XIV: Salvaging',
      title: 'Salvaging and Particicution',
      summary:
        'The Handmaids are marched to a Salvaging, where two Handmaids and a Wife are hanged. Aunt Lydia then hands a man accused of rape to the Handmaids to be killed. Ofglen reaches him first and knocks him unconscious, telling Offred afterwards that he was one of the resistance. Janine is left dazed, cut off from what is happening.',
      setting: 'A lawn by the old library',
      who: ['Offred', 'Ofglen', 'Aunt Lydia', 'Janine'],
      themes: ['Theocracy and State Control', 'Complicity and Survival'],
      tension: 5,
      significance:
        "Gilead turns the Handmaids' anger into a weapon for the state, and Ofglen's act shows that even mercy has to look like violence.",
    },
    {
      where: 'Chapters 44 and 45, Section XIV: Salvaging',
      title: 'The new Ofglen',
      summary:
        "A different woman arrives as Ofglen. When Offred slips a mention of May Day into their talk to test her, she warns her off, then whispers as they part that the old Ofglen hanged herself after the Salvaging rather than be taken. At home Serena Joy confronts Offred with evidence of the night at Jezebel's: the sequinned costume and a cloak marked with lipstick.",
      setting: "The street corner, then the Commander's house",
      who: ['Offred', 'Ofglen', 'Serena Joy'],
      quote: 'She saw the van coming for her.',
      themes: ['Complicity and Survival', 'Memory and Resistance'],
      tension: 4,
      significance:
        'In a single day both the resistance and the household close against Offred, and she is left with nobody to turn to but Nick.',
    },
    {
      where: 'Chapter 46, Section XV: Night',
      title: 'The black van',
      summary:
        'Offred waits in her room, weighing desperate options and rejecting each. A black van arrives. Nick comes to her door, calls her by her real name and tells her the men are Mayday. They lead her past the Commander and Serena Joy, citing a violation of state secrets, and she climbs into the van without knowing whether it means rescue or arrest.',
      setting: "Offred's room, the stairs and the driveway",
      who: ['Offred', 'Nick', 'The Commander', 'Serena Joy'],
      quote: 'And so I step up, into the darkness within; or else the light.',
      themes: ['Complicity and Survival', 'Memory and Resistance'],
      tension: 5,
      significance:
        "Offred's narrative ends on an unresolved choice between darkness and light, and hands the question of her fate to the reader.",
    },
    {
      where: 'Historical Notes',
      title: 'The symposium of 2195',
      summary:
        "A transcript records a conference at the University of Denay, Nunavit, on 25 June 2195. Professor Pieixoto explains that Offred's account was transcribed from about thirty cassette tapes found in a footlocker in what had been Bangor, Maine, jokes with his audience, and tries to identify the Commander. He cannot say what became of the narrator.",
      setting: 'An academic conference in 2195',
      who: ['Professor Pieixoto'],
      quote: 'Our job is not to censure but to understand.',
      themes: ['Memory and Resistance', 'Gender and Patriarchy'],
      tension: 2,
      significance:
        "Offred's testimony becomes an academic document, and the frame asks whether the future has really learned from Gilead.",
    },
  ],

  relationships: [
    {
      from: 'Offred',
      to: 'The Commander',
      kind: 'Handmaid and Commander',
      note: 'Officially he uses her only in the Ceremony. Their secret evenings of Scrabble and talk give her small privileges and some power over him, but never equality, and they end by endangering her.',
    },
    {
      from: 'Offred',
      to: 'Serena Joy',
      kind: 'Handmaid and Wife',
      note: "Resentment on both sides turns into a secret bargain over Nick and a photograph, and ends in Serena Joy's fury when she finds the costume from Jezebel's.",
    },
    {
      from: 'The Commander',
      to: 'Serena Joy',
      kind: 'husband and wife',
      note: 'A marriage grown distant. She once spoke in public for women staying at home; now she is confined there while he keeps secrets in his study.',
    },
    {
      from: 'Offred',
      to: 'Nick',
      kind: 'lovers',
      note: "Begun at Serena Joy's arrangement, the affair continues in secret. Nick's loyalties are never certain, and at the end Offred has to decide whether to trust him.",
    },
    {
      from: 'Offred',
      to: 'Moira',
      kind: 'best friends',
      note: "Moira's defiance is what Offred relies on through the Red Centre. Their meeting at Jezebel's suggests that even Moira has been worn down, and they never meet again.",
    },
    {
      from: 'Offred',
      to: 'Luke',
      kind: 'wife and husband, in the time before',
      note: 'Remembered with love, and imagined in several possible fates, but Chapter 28 records a moment of doubt about how much he minded her loss of independence. What happened to him is never known.',
    },
    {
      from: 'Offred',
      to: 'Ofglen',
      kind: 'shopping partners, then allies',
      note: 'Careful talk becomes trust at Soul Scrolls. Ofglen draws Offred towards Mayday, then disappears after the Salvaging and is replaced by a stranger with the same name.',
    },
    {
      from: 'Aunt Lydia',
      to: 'Offred',
      kind: 'trainer and Handmaid',
      note: "Aunt Lydia's sayings echo in Offred's head long after the Red Centre, a sign of how deeply the training reaches even into a mind that resists it.",
    },
    {
      from: 'Offred',
      to: 'Janine',
      kind: 'fellow Handmaids',
      note: 'From the Red Centre to the Particicution, Janine shows what Gilead does to a woman who gives in completely. Offred watches her with pity and unease.',
    },
    {
      from: 'Nick',
      to: 'The Commander',
      kind: 'driver and employer',
      note: 'Nick drives the Commander and passes on his signals to Offred, yet may be an Eye or a member of Mayday. Pieixoto suggests he may have been both.',
    },
    {
      from: 'Offred',
      to: "Offred's mother",
      kind: 'daughter and mother',
      note: 'A campaigning feminist Offred often argued with. Moira says she saw her in a film about the Colonies, and Offred mourns her again.',
    },
    {
      from: 'Offred',
      to: "Offred's daughter",
      kind: 'mother and daughter',
      note: 'Taken from Offred when the family tried to escape. Serena Joy brings a photograph of her, and Offred fears that her daughter has forgotten her.',
    },
    {
      from: 'Professor Pieixoto',
      to: 'Offred',
      kind: 'historian and his source',
      note: 'He and his co-editor order and title her tapes, and he judges them by what they fail to tell him about the regime, treating her testimony as a document rather than a life.',
    },
  ],

  compareWith: [
    {
      title: 'Never Let Me Go',
      href: '/revision/texts/never-let-me-go',
      reason:
        'Another first-person narrator looks back calmly on a system that uses bodies for other people’s ends, which makes the two novels good for comparing restrained narration and complicity.',
    },
    {
      title: 'Frankenstein',
      href: '/revision/texts/frankenstein',
      reason:
        'A framed narrative about control over the making of life, in which, as in the Historical Notes, a testimony reaches the reader through other people’s hands.',
    },
    {
      title: "A Doll's House",
      href: '/resources/revision-notes/a-dolls-house',
      reason:
        'A woman whose value is measured by her roles as wife and mother, and an ending in which she steps out of the house into an uncertain future.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'intimate_relationships',
    'mental_health',
    'discrimination',
    'mythological_religious',
    'political_ideology',
  ],

  quotesFromElsewhere: [],

  sources: [
    {
      label:
        "Open Library full-text search of the Internet Archive's scanned books: every quotation found word for word in scans of the novel, and most also in printed guides and criticism that quote it. Searched as exact phrases, one by one. In the second check the same index was queried directly, restricted to seventeen scans of the novel (Cape, Virago, Vintage, Folio, McClelland and Stewart, Emblem, Fawcett and large-print editions), and every quotation was found again in at least eight of them.",
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label:
        "The Handmaid's Tale, Jonathan Cape, London, 1986 (first UK edition), Internet Archive scan: wording of Chapters 2, 7, 23, 28, 41 and 46 and the Historical Notes; the chapter headings CHAPTER TWENTY-THREE and CHAPTER FORTY-ONE.",
      url: 'https://archive.org/details/isbn_9780224023481',
    },
    {
      label:
        "The Handmaid's Tale, Virago, London, 1990 (catalogue record: 324 pages; first published by Cape in 1986), Internet Archive scan: the contents page and section titles, the epigraphs, the chapter headings for Chapters 2, 7 and 23, the cassette labels and the final line.",
      url: 'https://archive.org/details/handmaidstale00atwo',
    },
    {
      label:
        "The Handmaid's Tale, Vintage, London, 2017, and Vintage Books, London, 2010, Internet Archive scans: UK wording where editions differ (any more, judgement, colour), and the dedication.",
      url: 'https://archive.org/details/handmaidstale0000atwo_i5a9',
    },
    {
      label:
        "The Handmaid's Tale, Emblem / McClelland and Stewart, Toronto, 2014, and Anchor, New York, 1998 and 2017, Internet Archive scans: second and third copies for every quotation, and the US variants (anymore, judgment, Blessed be the meek).",
      url: 'https://archive.org/details/handmaidstale0000atwo_h2a0',
    },
    {
      label:
        "Coral Ann Howells, The Handmaid's Tale: York Notes (Longman / York Press), via Open Library search: chapter citations for the coup (Chapter 28), the Prayvaganza (Chapters 33 and 34), the Particicution (Chapter 43), Pen Is Envy (Chapter 29) and I tell, therefore you are (Chapter 41); the King Lear echo in Context is all.",
      url: 'https://archive.org/details/handmaidstalenot0000howe',
    },
    {
      label:
        "Gina Wisker, Atwood's The Handmaid's Tale: A Reader's Guide (Continuum, 2010), via Open Library search: the three epigraphs and the dedication; Perry Miller as a scholar of Puritanism; independent wording checks.",
      url: 'https://archive.org/details/atwoodshandmaids0000wisk',
    },
    {
      label:
        "The Handmaid's Tale, Everyman's Library (Knopf, New York, 2006), introduction, via Open Library search: the coup blamed on Muslim fanatics and the suspension of the Constitution, as a second source for the summary of Chapter 28.",
      url: 'https://archive.org/details/handmaidstale2006atwo',
    },
    {
      label:
        "Shmoop, The Handmaid's Tale chapter-by-chapter summaries (Chapters 1 to 46 and the Historical Notes): which chapter each event falls in, and the section each chapter belongs to.",
      url: 'https://www.shmoop.com/study-guides/literature/handmaids-tale/summary',
    },
    {
      label:
        "GradeSaver, The Handmaid's Tale section summaries (I Night to XV Night and the Historical Notes): a second check of the order of events, the fifteen section titles, the butter episode in Chapter 17, Janine's Testifying, the Birth Day, and the Historical Notes (about thirty tapes, the order decided by the editors, Pieixoto favouring Waterford).",
      url: 'https://www.gradesaver.com/the-handmaids-tale/study-guide/summary',
    },
    {
      label:
        "LitCharts, The Handmaid's Tale chapter summaries: the division into 46 chapters and the Historical Notes, and, in the second check, the events of Chapters 9, 32, 36, 38 and 39 (Rita's silence about the previous Handmaid, Offred questioning the word better, the journey to Jezebel's, the film of the Colonies and Offred's mother).",
      url: 'https://www.litcharts.com/lit/the-handmaid-s-tale',
    },
    {
      label:
        "Wikipedia, The Handmaid's Tale: first published by McClelland and Stewart in 1985; Governor General's Award 1985, Booker Prize shortlist 1986, first Arthur C. Clarke Award 1987; begun in West Berlin in spring 1984; Atwood's preference for speculative fiction; the dedicatee Mary Webster, accused of witchcraft; the Cambridge, Massachusetts setting; reviewers' comparison with Nineteen Eighty-Four; The Testaments (2019).",
      url: 'https://en.wikipedia.org/wiki/The_Handmaid%27s_Tale',
    },
    {
      label:
        "Chapter summaries from Shmoop, SparkNotes, Course Hero, CliffsNotes and GradeSaver, read through web search in the second check: the greeting in Chapter 4, Moira's arrival and the Testifying in Chapter 13, the taped Beatitudes in Chapter 15, the Unbaby and shredder in Chapters 19 and 33, the naming of Angela in Chapter 21, the Mayday password kept for emergencies in Chapter 31, the twenty Angels in Chapter 34, the lawn by the library in Chapter 42, the new Ofglen in Chapter 44, and the footlocker found at a way station in Bangor, Maine.",
    },
    {
      label:
        "Wikipedia, A Modest Proposal: Swift's satirical essay of 1729 proposing that the Irish poor sell their children as food, the second of the novel's epigraphs.",
      url: 'https://en.wikipedia.org/wiki/A_Modest_Proposal',
    },
    {
      label:
        'Board placement for compareWith: the set-text registry in src/lib/board/set-texts.ts, whose A-level lists src/lib/board/shelf-provenance.ts records as not yet checked against the specifications. The comparisons are offered on their content, not on a verified shared paper.',
    },
  ],
}
